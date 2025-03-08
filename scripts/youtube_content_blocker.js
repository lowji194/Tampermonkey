// ==UserScript==
// @name         YouTube Content Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Chặn video YouTube có chứa các từ cụ thể trong tiêu đề và tên kênh
// @author       baopingsheng
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';

    // CSS custom
    function addCustomStyles() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
            ytd-rich-section-renderer.ytd-rich-grid-renderer,
            ytd-guide-section-renderer.style-scope ytd-guide-entry-renderer:nth-child(2) {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCustomStyles);
    } else {
        addCustomStyles();
    }

    // List of blocked words (all lowercase for case-insensitive matching)
    const BLOCKED_WORDS = ['roblox', 'free fire','explain nation','snook','reddit','nosleep','deep web','dark web','rùng rợn','ma', 'quỷ', 'kinh dị', 'ám ảnh', 'yêu quái', 'quái vật', 'siêu nhiên', 'bóng tối', 'lời thuật', 'ác quỷ', 'tử thần', 'địa vô', 'huyền bí', 'rùng', 'thây ma', 'xác sống', 'hắc trầm', 'nghi lễ', 'bùa chú', 'oan linh hồn', 'hoang đường', 'huyễn hoặc'];


    // Track if we're currently in a blocked state
    let isCurrentlyBlocked = false;

    // Function to check for shorts in URL and redirect
    function checkAndRedirectShorts() {
        const currentUrl = window.location.href.toLowerCase();
        if (currentUrl.includes('/shorts') || currentUrl.includes('/short')) {
            // Redirect to homepage
            window.location.href = 'https://www.youtube.com/';
        }
    }

    // Execute as early as possible and continue checking
    function initialize() {
        // Check for shorts URL immediately
        checkAndRedirectShorts();

        // Immediately check URL for potential blocked content
        if (window.location.pathname.includes('/watch')) {
            const videoId = new URLSearchParams(window.location.search).get('v');
            if (videoId) {
                // Preemptively block if we're loading a video page
                // Will be restored later if title doesn't contain blocked words
                preemptivelyBlock();

                // Set up checks for when the title becomes available
                watchForTitle();
            }
        }

        // Set up URL change detection for SPA navigation
        setupURLChangeDetection();

        // Wait for DOM to be ready for full checks
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', onDOMReady);
        } else {
            onDOMReady();
        }
    }

    // Function to preemptively block content before we even know the title
    function preemptivelyBlock() {
        // Add a style tag to hide video and prevent playback
        const style = document.createElement('style');
        style.id = 'preemptive-block-style';
        style.textContent = `
            video, #movie_player {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        // We'll also need to continually intercept any video/audio that might start
        startAudioVideoBlockingInterval();
    }

    // Intercept any attempt to play audio/video
    function startAudioVideoBlockingInterval() {
        if (window._blockingInterval) {
            clearInterval(window._blockingInterval);
        }

        window._blockingInterval = setInterval(() => {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                if (!video.paused) {
                    video.pause();
                }
                if (!video.muted) {
                    video.muted = true;
                }
                video.volume = auto;

                // Add event listeners to prevent playing
                if (!video.dataset.blockListenersAdded) {
                    video.dataset.blockListenersAdded = 'true';
                    video.addEventListener('play', function(e) {
                        if (isCurrentlyBlocked) {
                            e.preventDefault();
                            e.stopPropagation();
                            this.pause();
                        }
                    }, true);

                    // Intercept play attempts
                    const originalPlay = video.play;
                    video.play = function() {
                        if (isCurrentlyBlocked) {
                            return Promise.reject(new DOMException('NotAllowedError'));
                        }
                        return originalPlay.apply(this, arguments);
                    };
                }
            });

            // Try to access YouTube player API if available
            const player = document.querySelector('#movie_player');
            if (player && typeof player.pauseVideo === 'function') {
                player.pauseVideo();
                player.mute();
                player.setVolume(0);
            }
        }, 100); // Check very frequently during page load
    }

    // Wait for title element to become available
    function watchForTitle() {
        if (window._titleCheckInterval) {
            clearInterval(window._titleCheckInterval);
        }

        window._titleCheckInterval = setInterval(() => {
            const titleElement = document.querySelector('h1.ytd-watch-metadata,.ytd-channel-name yt-formatted-string a');
            if (titleElement && titleElement.textContent.trim()) {
                clearInterval(window._titleCheckInterval);
                checkAndBlockContent();
            }
        }, 0); // Check very frequently until title is available
    }

    // When DOM is fully loaded
    function onDOMReady() {
        // Do a full check immediately
        checkAndBlockContent();

        // Set up observation for DOM changes
        observePageChanges();
    }

    // Main function to check and block content
    function checkAndBlockContent() {
        // Get the video title element
        const titleElement = document.querySelector('h1.ytd-watch-metadata,.ytd-channel-name yt-formatted-string a');

        // If we're on a video page and title exists
        if (window.location.pathname.includes('/watch') && titleElement && titleElement.textContent.trim()) {
            const title = titleElement.textContent.toLowerCase();

            // Check if any blocked word is in the title
            const containsBlockedWord = BLOCKED_WORDS.some(word => title.includes(word));

            if (containsBlockedWord) {
                blockContent();
            } else {
                unblockContent();
            }
        } else if (!window.location.pathname.includes('/watch')) {
            // Not on a video page, make sure nothing is blocked
            unblockContent();
        }
    }

// Function to block content
function blockContent() {
    isCurrentlyBlocked = true;

    // Get the video player
    const videoPlayer = document.querySelector('#player');
    if (videoPlayer) {
        // Save the original player for later restoration
        if (!videoPlayer.dataset.blocked) {
            // Mark as blocked and save original display style
            videoPlayer.dataset.blocked = 'true';
            videoPlayer.dataset.originalDisplay = videoPlayer.style.display || '';

            // Stop the video and audio playback
            stopVideoAndAudio();

            // Hide the player
            videoPlayer.style.display = 'none';

            // Remove any existing message first to prevent duplicates
            removeBlockedMessage();

            // Create and display the message
            const blockedMessage = document.createElement('div');
            blockedMessage.id = 'content-blocked-message';
            blockedMessage.style.cssText = `
                user-select: none;
                background-color: #000;
                display: flex;
                justify-content: center;
                place-items: center;
                text-align: center;
                border-radius: 12px;
                color: #fff;
                font-family: 'YouTube Sans', sans-serif;
                font-size: 22px;
                font-weight: 600;
                margin: 0 auto;
                margin-bottom: 16px;
                width: -webkit-fill-available;
                max-width: -webkit-fill-available;
                height: 708px;
                padding: 0;
            `;
            blockedMessage.textContent = 'Video không khả dụng ở khu vực của bạn.';

            // Insert the message before the h1 title
            const titleElement = document.querySelector('h1.ytd-watch-metadata');
            if (titleElement) {
                titleElement.parentNode.insertBefore(blockedMessage, titleElement);
            } else {
                // Fallback if title element not found
                videoPlayer.parentNode.insertBefore(blockedMessage, videoPlayer.nextSibling);
            }
        }
    }

    // Keep the preemptive style in place
    if (!document.getElementById('preemptive-block-style')) {
        preemptivelyBlock();
    }
}

    // Function to unblock content
    function unblockContent() {
        isCurrentlyBlocked = false;

        // Remove the preemptive blocking style
        const blockStyle = document.getElementById('preemptive-block-style');
        if (blockStyle) {
            blockStyle.remove();
        }

        // If no blocked words in the title, restore the player if it was blocked
        const videoPlayer = document.querySelector('#player');
        if (videoPlayer && videoPlayer.dataset.blocked === 'true') {
            // Restore the player
            videoPlayer.style.display = videoPlayer.dataset.originalDisplay;
            delete videoPlayer.dataset.blocked;

            // Remove the message
            removeBlockedMessage();
        }

        // Clear blocking interval if it exists
        if (window._blockingInterval) {
            clearInterval(window._blockingInterval);
            delete window._blockingInterval;
        }
    }

    // Function to remove any existing blocked message
    function removeBlockedMessage() {
        const blockedMessages = document.querySelectorAll('#content-blocked-message');
        blockedMessages.forEach(message => message.remove());
    }

    // Function to stop video and audio playback
    function stopVideoAndAudio() {
        // Method 1: Find and pause the HTML5 video element
        const videoElements = document.querySelectorAll('video');
        videoElements.forEach(videoElement => {
            if (videoElement) {
                videoElement.pause();
                videoElement.muted = true;
                videoElement.volume = 0;

                // Disconnect source if possible (more aggressive approach)
                try {
                    if (videoElement.srcObject) {
                        const tracks = videoElement.srcObject.getTracks();
                        tracks.forEach(track => track.stop());
                        videoElement.srcObject = null;
                    }
                } catch (e) {
                    console.log("Could not disconnect source object:", e);
                }
            }
        });

        // Method 2: Use YouTube's player API if available
        if (typeof document.querySelector('#movie_player') !== 'undefined') {
            const player = document.querySelector('#movie_player');
            if (player && typeof player.pauseVideo === 'function') {
                player.pauseVideo();
                player.mute();
                player.setVolume(0);
            }
        }

        // Continue blocking audio/video
        startAudioVideoBlockingInterval();
    }

    // Function to observe for changes in the DOM
    function observePageChanges() {
        // Options for the observer
        const config = {
            subtree: true,
            childList: true
        };

        // Create an observer instance
        const observer = new MutationObserver((mutations) => {
            // Check for title changes
            let shouldCheck = false;
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    shouldCheck = true;
                    break;
                }
            }

            if (shouldCheck) {
                checkAndBlockContent();
            }
        });

        // Start observing the document
        observer.observe(document.body, config);
    }

    // Function to detect URL changes for SPA navigation
    function setupURLChangeDetection() {
        let lastUrl = location.href;

        // Create an observer for URL changes
        const urlObserver = new MutationObserver(() => {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;

                // Check for shorts first and redirect if needed
                checkAndRedirectShorts();

                // Clear previous checks
                if (window._titleCheckInterval) {
                    clearInterval(window._titleCheckInterval);
                }

                // If moving to a video page, preemptively block
                if (window.location.pathname.includes('/watch')) {
                    // Preemptively block content
                    preemptivelyBlock();

                    // Start watching for the title
                    watchForTitle();
                } else {
                    // Not on a video page, make sure to unblock
                    unblockContent();
                }
            }
        });

        // Start observing for URL changes
        urlObserver.observe(document, {subtree: true, childList: true});

        // Also use history API for more reliable detection
        const originalPushState = history.pushState;
        history.pushState = function() {
            originalPushState.apply(this, arguments);

            // Check for shorts first and redirect if needed
            checkAndRedirectShorts();

            // If moving to a video page, preemptively block
            if (window.location.pathname.includes('/watch')) {
                preemptivelyBlock();
                watchForTitle();
            } else {
                unblockContent();
            }
        };

        // Handle back/forward navigation
        window.addEventListener('popstate', () => {
            // Check for shorts first and redirect if needed
            checkAndRedirectShorts();

            // If moving to a video page, preemptively block
            if (window.location.pathname.includes('/watch')) {
                preemptivelyBlock();
                watchForTitle();
            } else {
                unblockContent();
            }
        });
    }

    // Start immediately
    initialize();

// Youtube Premium
    // fix "TrustedError" on chrome[-ium], code snippet from zerodytrash/Simple-YouTube-Age-Restriction-Bypass@d2cbcc0
    if (window.trustedTypes && trustedTypes.createPolicy) {
        if (!trustedTypes.defaultPolicy) {
            const passThroughFn = (x) => x;
            trustedTypes.createPolicy('default', {
                createHTML: passThroughFn,
                createScriptURL: passThroughFn,
                createScript: passThroughFn,
            });
        }
    }

    // Add load event listener to only spawn MutationObserver when the web actually loaded
    window.addEventListener('load', () => {
        // Function to be called when the target element is found
        function modifyYtIcon(ytdLogos) {
            ytdLogos.forEach(ytdLogo => {
                const ytdLogoSvg = ytdLogo.querySelector("svg");
                ytdLogoSvg.setAttribute('width', '101');
                ytdLogoSvg.setAttribute('viewBox', '0 0 101 20');
                ytdLogoSvg.closest('ytd-logo').setAttribute('is-red-logo', '');
                ytdLogoSvg.innerHTML = '<g><path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"/><path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"/></g><g id="youtube-paths_yt19"><path d="M32.1819 2.10016V18.9002H34.7619V12.9102H35.4519C38.8019 12.9102 40.5619 11.1102 40.5619 7.57016V6.88016C40.5619 3.31016 39.0019 2.10016 35.7219 2.10016H32.1819ZM37.8619 7.63016C37.8619 10.0002 37.1419 11.0802 35.4019 11.0802H34.7619V3.95016H35.4519C37.4219 3.95016 37.8619 4.76016 37.8619 7.13016V7.63016Z"/><path d="M41.982 18.9002H44.532V10.0902C44.952 9.37016 45.992 9.05016 47.302 9.32016L47.462 6.33016C47.292 6.31016 47.142 6.29016 47.002 6.29016C45.802 6.29016 44.832 7.20016 44.342 8.86016H44.162L43.952 6.54016H41.982V18.9002Z"/><path d="M55.7461 11.5002C55.7461 8.52016 55.4461 6.31016 52.0161 6.31016C48.7861 6.31016 48.0661 8.46016 48.0661 11.6202V13.7902C48.0661 16.8702 48.7261 19.1102 51.9361 19.1102C54.4761 19.1102 55.7861 17.8402 55.6361 15.3802L53.3861 15.2602C53.3561 16.7802 53.0061 17.4002 51.9961 17.4002C50.7261 17.4002 50.6661 16.1902 50.6661 14.3902V13.5502H55.7461V11.5002ZM51.9561 7.97016C53.1761 7.97016 53.2661 9.12016 53.2661 11.0702V12.0802H50.6661V11.0702C50.6661 9.14016 50.7461 7.97016 51.9561 7.97016Z"/><path d="M60.1945 18.9002V8.92016C60.5745 8.39016 61.1945 8.07016 61.7945 8.07016C62.5645 8.07016 62.8445 8.61016 62.8445 9.69016V18.9002H65.5045L65.4845 8.93016C65.8545 8.37016 66.4845 8.04016 67.1045 8.04016C67.7745 8.04016 68.1445 8.61016 68.1445 9.69016V18.9002H70.8045V9.49016C70.8045 7.28016 70.0145 6.27016 68.3445 6.27016C67.1845 6.27016 66.1945 6.69016 65.2845 7.67016C64.9045 6.76016 64.1545 6.27016 63.0845 6.27016C61.8745 6.27016 60.7345 6.79016 59.9345 7.76016H59.7845L59.5945 6.54016H57.5445V18.9002H60.1945Z"/><path d="M74.0858 4.97016C74.9858 4.97016 75.4058 4.67016 75.4058 3.43016C75.4058 2.27016 74.9558 1.91016 74.0858 1.91016C73.2058 1.91016 72.7758 2.23016 72.7758 3.43016C72.7758 4.67016 73.1858 4.97016 74.0858 4.97016ZM72.8658 18.9002H75.3958V6.54016H72.8658V18.9002Z"/><path d="M79.9516 19.0902C81.4116 19.0902 82.3216 18.4802 83.0716 17.3802H83.1816L83.2916 18.9002H85.2816V6.54016H82.6416V16.4702C82.3616 16.9602 81.7116 17.3202 81.1016 17.3202C80.3316 17.3202 80.0916 16.7102 80.0916 15.6902V6.54016H77.4616V15.8102C77.4616 17.8202 78.0416 19.0902 79.9516 19.0902Z"/><path d="M90.0031 18.9002V8.92016C90.3831 8.39016 91.0031 8.07016 91.6031 8.07016C92.3731 8.07016 92.6531 8.61016 92.6531 9.69016V18.9002H95.3131L95.2931 8.93016C95.6631 8.37016 96.2931 8.04016 96.9131 8.04016C97.5831 8.04016 97.9531 8.61016 97.9531 9.69016V18.9002H100.613V9.49016C100.613 7.28016 99.8231 6.27016 98.1531 6.27016C96.9931 6.27016 96.0031 6.69016 95.0931 7.67016C94.7131 6.76016 93.9631 6.27016 92.8931 6.27016C91.6831 6.27016 90.5431 6.79016 89.7431 7.76016H89.5931L89.4031 6.54016H87.3531V18.9002H90.0031Z"/></g>';
            });

            // Disconnect the observer once the element is found
            observer.disconnect();
        }

        // Function to check if the target element exists and call the modification function
        function checkYtIconExistence() {
            let ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
            const pfp = document.querySelector("#avatar-btn");
            const signInBtn = document.querySelector("a[href^='https://accounts.google.com']");

            if (pfp && ytdLogos.length == 4) {
                // run in the next event cycle to make sure the logo is fully loaded
                setTimeout(() => {
                    // grab it again just in case youtube swapped them
                    ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
                    modifyYtIcon(ytdLogos);
                }, 50)
            } else if (signInBtn) {
                // dont apply the premium logo to non-logged in user
                // and disconnect the observer
                observer.disconnect();
            };
        }

        // Observe changes in the DOM
        const observer = new MutationObserver(checkYtIconExistence);

        // Start observing the document
        observer.observe(document.body, {childList: true, subtree: true});

        // Call the function once at the beginning in case the element is already present
        checkYtIconExistence();
    });
})();
