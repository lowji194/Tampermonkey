[![🇻🇳 Tiếng Việt](https://img.shields.io/badge/Ngôn_ngữ-Tiếng_Việt-red?style=for-the-badge&logo=Google%20Translate)](README.md)
---
# How to Install and Use Tampermonkey Script from GitHub

## Introduction

This is a guide on how to add and use a Tampermonkey script from a GitHub link. This script restores blocked right-click and copy functionality on websites.

## Step 1: Install Tampermonkey

If you don't have **Tampermonkey** installed, follow these steps:

- **Google Chrome**: Go to [Chrome Web Store - Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and click **Add to Chrome**.

- **Firefox**: Go to [Mozilla Add-ons - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) and click **Add to Firefox**.

- **Microsoft Edge**: Go to [Microsoft Edge Add-ons - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) and click **Get**.

## Step 2: Create a new Script in Tampermonkey

1. **Open Tampermonkey**:
- Click the Tampermonkey icon on the browser toolbar.

- Select **"Create new script..."**.

2. **Edit Script**:
- Delete the default content in the editor window.
- Copy the Raw Link of the Script on Github for example: https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/Restore-Right-Click-Menu-and-Copy.js

- Edit the script according to the sample below:

Example source code:

```javascript
// ==UserScript==
// @name The name of the Script is arbitrary
// @namespace https://github.com/lowji194
// @version 0.1
// @description Describe the function of the Script
// @author You
// @match *://*/*
// @require Paste the Script link here
// ==/UserScript==

3. **Enter the Script**:

- Paste the script code, click **File > Save** or press **Ctrl + S** to save.
- Click the Tampermonkey icon and activate the newly installed Script

### Detailed explanation of the fields in the script:

- **`@require`**: This is an important field where you add the Raw link of the script. Tampermonkey will automatically load the script from that URL when the web page is loaded.
- **@match**: This is an important field to define which websites your script will run on.
- **Link Raw**: Make sure you have correctly grabbed the **Raw** link of the script file from GitHub (the GitHub page may provide a "Raw" option when you click on the file).
