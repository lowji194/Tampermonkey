// ==UserScript==
// @name         Restore Text Selection, Right Click and Copy Function
// @namespace    https://theloi.io.vn/
// @version      1.1
// @description  Khôi phục chức năng bôi đen, chuột phải, sao chép và DevTools bị chặn trên các trang web với menu tùy chỉnh
// @author       Lợi Nguyễn
// @copyright    © 2025 Lợi Nguyễn. All rights reserved. Do not modify or remove author information.
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js
// @resource     sweetalert2_css https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css
// ==/UserScript==

(function() {
    'use strict';

const KH$vuMdkdJbrssvsNEqPgEs = lHSzhJC_zZfweQ;
(function(clVCVHUrtxbMFScBAvz, sxoDLMbsFDjikYFEfcXV) {
    const ezcJJFMKBGaiIVtZ = lHSzhJC_zZfweQ,
        YORhdAarhUDTsT__wFuow = clVCVHUrtxbMFScBAvz();
    while (!![]) {
        try {
            const mYgyzDEyiZgTboijH_TgrxyXY = -parseFloat(ezcJJFMKBGaiIVtZ(0xc2)) / (parseInt(0x2) * parseInt(0x1249) + -parseInt(0x18cc) + 0x17 * -0x83) * Math['ceil'](parseFloat(ezcJJFMKBGaiIVtZ(0xd3)) / (-parseInt(0x1067) * parseInt(0x1) + Math.trunc(0x1d38) + -parseInt(0xccf) * 0x1)) + parseFloat(ezcJJFMKBGaiIVtZ(0xed)) / (-0x1371 + Math.trunc(-parseInt(0x2395)) + 0x3709) + parseFloat(-parseFloat(ezcJJFMKBGaiIVtZ(0x10e)) / (Math.trunc(0xe0d) + 0x3a2 + Math.max(parseInt(0x1), 0x1) * -parseInt(0x11ab))) * Math['max'](-parseFloat(ezcJJFMKBGaiIVtZ(0xfb)) / (0xa33 + -0x416 + 0x27 * Math.trunc(-parseInt(0x28))), -parseFloat(ezcJJFMKBGaiIVtZ(0x11b)) / (Math.ceil(-parseInt(0x2d7)) * -0x5 + Math.max(parseInt(0x19de), 0x19de) + Math.ceil(-0x280b))) + Math['trunc'](parseFloat(ezcJJFMKBGaiIVtZ(0xe8)) / (Number(0x1f0e) + Math.trunc(-parseInt(0x13f5)) + -0xb12)) + parseInt(parseFloat(ezcJJFMKBGaiIVtZ(0xfa)) / (0x519 * -parseInt(0x1) + Math.ceil(0x363) + 0x1be)) * (parseFloat(ezcJJFMKBGaiIVtZ(0xf9)) / (0x13e6 + 0x1892 + Math.ceil(-0x41) * parseInt(0xaf))) + parseFloat(ezcJJFMKBGaiIVtZ(0xf4)) / (Number(parseInt(0x1)) * -parseInt(0x1e5d) + -0x8e6 * -parseInt(0x1) + 0x1581) * (-parseFloat(ezcJJFMKBGaiIVtZ(0xc5)) / (Math.trunc(parseInt(0x61)) * Number(-0x2c) + Math.floor(-parseInt(0x2082)) + parseInt(0x3139))) + Number(parseFloat(ezcJJFMKBGaiIVtZ(0xe9)) / (-parseInt(0x1) * parseInt(0x2046) + -parseInt(0x1dd2) + Number(parseInt(0x3e24))));
            if (mYgyzDEyiZgTboijH_TgrxyXY === sxoDLMbsFDjikYFEfcXV) break;
            else YORhdAarhUDTsT__wFuow['push'](YORhdAarhUDTsT__wFuow['shift']());
        } catch (aCf$lNMijPs) {
            YORhdAarhUDTsT__wFuow['push'](YORhdAarhUDTsT__wFuow['shift']());
        }
    }
}(pidUDbkhXdcChkclBL$p_R, parseInt(0xed3a3) + Math.trunc(0x9ed7e) + -0x11222b));
const scriptMetadata = GM_info[KH$vuMdkdJbrssvsNEqPgEs(0x11c)],
    AUTHOR = KH$vuMdkdJbrssvsNEqPgEs(0xbb),
    AUTHOR_WEBSITE = KH$vuMdkdJbrssvsNEqPgEs(0xef),
    COPYRIGHT = KH$vuMdkdJbrssvsNEqPgEs(0xd7);

function verifyAuthor() {
    const FKKY$s$l = KH$vuMdkdJbrssvsNEqPgEs;
    let OmobWWabBGSt = [];
    scriptMetadata[FKKY$s$l(0x120)] !== AUTHOR && OmobWWabBGSt[FKKY$s$l(0xc8)](FKKY$s$l(0xce) + AUTHOR + ')');
    scriptMetadata[FKKY$s$l(0x11a)] !== AUTHOR_WEBSITE && OmobWWabBGSt[FKKY$s$l(0xc8)](FKKY$s$l(0xe2) + AUTHOR_WEBSITE + ')');
    scriptMetadata[FKKY$s$l(0xe1)] && !scriptMetadata[FKKY$s$l(0xe1)][FKKY$s$l(0x101)](COPYRIGHT) && OmobWWabBGSt[FKKY$s$l(0xc8)](FKKY$s$l(0xc1) + COPYRIGHT + ')');
    if (OmobWWabBGSt[FKKY$s$l(0x105)] > 0xfe2 + Math.max(0x16e6, parseInt(0x16e6)) + -parseInt(0x9b2) * parseInt(0x4)) return Swal[FKKY$s$l(0xe7)]({
        'icon': FKKY$s$l(0x111),
        'title': FKKY$s$l(0xba),
        'html': FKKY$s$l(0xe0) + OmobWWabBGSt[FKKY$s$l(0x11e)](FKKY$s$l(0xea)) + FKKY$s$l(0xb5) + (FKKY$s$l(0xbf) + AUTHOR_WEBSITE + FKKY$s$l(0x116) + AUTHOR_WEBSITE + FKKY$s$l(0x112)),
        'confirmButtonText': FKKY$s$l(0xb9)
    }), ![];
    return !![];
}
const style = document[KH$vuMdkdJbrssvsNEqPgEs(0xbc)](KH$vuMdkdJbrssvsNEqPgEs(0xdc));

function lHSzhJC_zZfweQ(cGFbnPigUgfBBmsNvsodo, aLTqA$fpevAz) {
    const NSmBNblcgzLsOmobWWabBGStW = pidUDbkhXdcChkclBL$p_R();
    return lHSzhJC_zZfweQ = function(vBBgWWdvijjAylWVJJnRoTwoI, lU_O_BQOSrCJbEvlt) {
        vBBgWWdvijjAylWVJJnRoTwoI = vBBgWWdvijjAylWVJJnRoTwoI - (-parseInt(0xe) * Math.ceil(parseInt(0x13)) + 0x17fe + -0x1640);
        let IO_CH_rqyaJixpFgcfoSpqP = NSmBNblcgzLsOmobWWabBGStW[vBBgWWdvijjAylWVJJnRoTwoI];
        if (lHSzhJC_zZfweQ['iDSnsM'] === undefined) {
            const AVDifURd$AaDz_WJrRpxhKE = function(MsOP_jAWEVkDZKJuL) {
                let R$Sz$jdpv = -0x1bb7 + 0x238a + -0x1a5 * Math.ceil(parseInt(0x3)) & -0x1 * Math.trunc(-0x10cf) + Math.max(-parseInt(0xfb4), -parseInt(0xfb4)) + 0xe * -parseInt(0x2),
                    iveDW_XE_QdkkaJbU = new Uint8Array(MsOP_jAWEVkDZKJuL['match'](/.{1,2}/g)['map'](XQIUFfSfdtMIGqwPZqII => parseInt(XQIUFfSfdtMIGqwPZqII, -0x1ea2 + parseInt(0x52f) * -parseInt(0x1) + 0x23e1))),
                    wLExtDAARo = iveDW_XE_QdkkaJbU['map'](GuaEOOvsZO$D$PCV => GuaEOOvsZO$D$PCV ^ R$Sz$jdpv),
                    vfRrsBXXFzhOfwoszg = new TextDecoder(),
                    QzuQTJBQFo = vfRrsBXXFzhOfwoszg['decode'](wLExtDAARo);
                return QzuQTJBQFo;
            };
            lHSzhJC_zZfweQ['eVwhaV'] = AVDifURd$AaDz_WJrRpxhKE, cGFbnPigUgfBBmsNvsodo = arguments, lHSzhJC_zZfweQ['iDSnsM'] = !![];
        }
        const FdkjCfYQUGUfzs_j_xxj = NSmBNblcgzLsOmobWWabBGStW[0xfe2 + Math.trunc(0x16e6) + parseInt(-parseInt(0x9b2)) * parseInt(0x4)],
            OQtEz = vBBgWWdvijjAylWVJJnRoTwoI + FdkjCfYQUGUfzs_j_xxj,
            uIhDizfbMZfHXrgEjt$a = cGFbnPigUgfBBmsNvsodo[OQtEz];
        return !uIhDizfbMZfHXrgEjt$a ? (lHSzhJC_zZfweQ['AVTuug'] === undefined && (lHSzhJC_zZfweQ['AVTuug'] = !![]), IO_CH_rqyaJixpFgcfoSpqP = lHSzhJC_zZfweQ['eVwhaV'](IO_CH_rqyaJixpFgcfoSpqP), cGFbnPigUgfBBmsNvsodo[OQtEz] = IO_CH_rqyaJixpFgcfoSpqP) : IO_CH_rqyaJixpFgcfoSpqP = uIhDizfbMZfHXrgEjt$a, IO_CH_rqyaJixpFgcfoSpqP;
    }, lHSzhJC_zZfweQ(cGFbnPigUgfBBmsNvsodo, aLTqA$fpevAz);
}
style[KH$vuMdkdJbrssvsNEqPgEs(0x10c)] = KH$vuMdkdJbrssvsNEqPgEs(0xcf), style[KH$vuMdkdJbrssvsNEqPgEs(0xd1)] = KH$vuMdkdJbrssvsNEqPgEs(0xcc), document[KH$vuMdkdJbrssvsNEqPgEs(0xd2)][KH$vuMdkdJbrssvsNEqPgEs(0x122)](style);
let allowedSites = GM_getValue(KH$vuMdkdJbrssvsNEqPgEs(0x107), []);
const currentSite = window[KH$vuMdkdJbrssvsNEqPgEs(0x115)][KH$vuMdkdJbrssvsNEqPgEs(0x102)],
    isSiteAllowed = allowedSites[KH$vuMdkdJbrssvsNEqPgEs(0x101)](currentSite) || allowedSites[KH$vuMdkdJbrssvsNEqPgEs(0x105)] === -0x22be * parseInt(0x1) + parseInt(0x934) + -0x3a6 * Math.floor(-parseInt(0x7)),
    isMainFrame = window[KH$vuMdkdJbrssvsNEqPgEs(0xd4)] === window[KH$vuMdkdJbrssvsNEqPgEs(0x10d)];

function pidUDbkhXdcChkclBL$p_R() {
    const Yol$yfTnoTGhhpu = ['888b8785908d8b8a', 'c6c4908596838190d9c6bb8688858a8fc6c497909d8881d9c6878b888b96dec4c7d581ddd48282dfc6da', 'a0858a8cc4972745878cc48588888b938180b78d908197dec4', '878b8a90819c9089818a91', 'b0274587c4838d055e47', '8a8589819794858781', 'd5d4dddcd3dca9ada39593b4', '9787968d9490', '97909d8881', '8e8b8d8a', '20742747c4908c274e89c4', '8591908c8b96', '87909688af819d', '859494818a80a78c8d8880', 'eec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8808d92c497909d8881d9c689859cc98c818d838c90dec4d7d4d4949cdfc48b92819682888b93c99ddec48591908bdfc490819c90c985888d838adec488818290dfc6daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d89085868881c497909d8881d9c6938d80908cdec4d5d4d4c1dfc4868b96808196c9878b888885949781dec4878b888885949781dfc4828b8a90c98285898d889ddec4a5968d8588c8c497858a97c99781968d82dfc48685878f83968b918a80c9878b888b96dec4c7d685d685d685dfc6daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d890868b809ddaeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4', '97918787819797', 'd8cb9080daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8cb9096daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4', 'd88696dad88696da', 'bc275785c4938186978d9081c48a27449dc4cc', '87888d94868b859680', 'a8055f738dc48f8c8dc497858bc4878c274d94de', '207427578a83', 'a7055e478a8cc48627458b', 'a8055f478dc4aa83919d055f618a', '879681859081a1888189818a90', 'bb8688858a8f', '898594', 'b38186978d9081dec4d885c48c968182d9c6', 'b08c27448a8cc48727508a83', 'a78b949d968d838c90c420752747c486055f6fc4908c859dc42075055f718dc4cc838d2745c49096055f6fc483055f7587dec4', 'd68cab82938b97', '838190b781888187908d8b8a', '828d88908196', 'd1d4d2d3ddd7d5b18d97a88395', '819c8187a78b8989858a80', '20742747c49c275785c4', '9491978c', 'b08c274e89c4938186978d9081c48a27449dc4cc', '878b949d', '8f819d808b938a', '8c90909497decbcb87808aca8e978081888d9296ca8a8190cb8a9489cb97938181908588819690d6a4d5d5cb808d9790cb97938181908588819690d6ca898d8aca879797', '9681898b9281a78c8d8880', 'a591908c8b96c420752747c486055f6fc4908c859dc42075055f718dc4cc838d2745c49096055f6fc483055f7587dec4', '97909d8881978c818190', 'c7d685d685d685', '8c968182', '8c818580', 'd6d1d3d3d3d29e838ab59e91', '908b94', 'dfc6daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d89080c497909d8881d9c6948580808d8a83dec4dc949cdfc4868b96808196dec4d5949cc4978b888d80c4c7d1d1d1dfc4878b888b96dec4c781d481d481d4dfc6da', 'a2d5d6', '264dc4d6d4d6d1c4a8055f478dc4aa83919d055f618acac4a58888c4968d838c9097c49681978196928180ca', 'c49227448bc480858a8cc4972745878c', '90819c9085968185', '978188818790', 'b787968d9490c42074858a83c48c8b055e4590c42075055f7d8a83', '888d8a8f', 'ac8b97908a858981c48c8d055f638ac490055e458ddec4', '8d8a8a8196acb0a9a8', '8b94818a', 'b08c27508a83c4908d8ac490274587c4838d055e47c420752747c486055f6fc4908c859dc42075055f718dc5d88696dab787968d9490c497055e59c48f8c27508a83c48c8b055e4590c42075055f7d8a83cad88696dad88696da', '878b949d968d838c90', 'aa8589819794858781c420752747c486055f6fc4908c859dc42075055f718dc4cc838d2745c49096055f6fc483055f7587dec4', 'eec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d89096c497909d8881d9c68685878f83968b918a80c9878b888b96dec4', '93968d9081b0819c90', '94968192818a90a0818285918890', 'c6c4908596838190d9c6bb8688858a8fc6c497909d8881d9c6878b888b96dec4c7d581ddd48282dfc490819c90c98081878b9685908d8b8adec48a8b8a81dfc6daaa83919d055f618ac4b08c055e5bc4a8055f478dd8cb85dad88696daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d89794858ac497909d8881d9c6878b888b96dec4c7dcdcdcdfc6da', '828d9681', 'd5d1d0ddd4d7be95adad9ca3', 'd0d6d7d4d2d6d087889c94a7bd', 'd88696da', '8f819d', '888b83', 'd0d7d3d4d5d4b5b0aea6b5a2', 'bc8189c480858a8cc4972745878cc4938186978d9081', '8c90909497decbcb908c81888b8dca8d8bca928acb', '9285889181', 'd89096dad89080c497909d8881d9c6948580808d8a83dec4dc949cdfc4868b96808196dec4d5949cc4978b888d80c4c7d1d1d1dfc4878b888b96dec4c781d481d481d4dfc6daa78c225485c4872757c4938186978d9081c48a27448bd8cb9080dad8cb9096da', 'd8cb9794858adaeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8cb808d92daeec4c4c4c4c4c4c4c4c4c4c4c4', 'a0858a8cc4972745878cc4938186978d908197', 'd5d4b287ae91b58f', '868b809d', 'eec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8cb90868b809ddaeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8cb9085868881daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8cb808d92daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4d8808d92c497909d8881d9c690819c90c985888d838adec487818a908196dfc4898596838d8ac9908b94dec4d5d4949cdfc4828b8a90c9978d9e81dec4d5d6949cdfc6daeec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c4a78b8081c4a69dc4d885c48c968182d9c6', '8a8b8a81', '908bb790968d8a83', 'dd97beaba0b4a7', 'd1d0d7d0d6d7d69185a1abab92', 'ddd5d1d2d1a282b7828090', '90819c90cb9488858d8a', '87888d94868b859680a0859085', 'eec4c4c4c4c4c4c4c4c4c4c4c4cec49feec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c491978196c9978188818790dec490819c90c4c58d89948b9690858a90dfeec4c4c4c4c4c4c4c4c4c4c4c499eec4c4c4c4c4c4c4c4c4c4c4c4cedede9781888187908d8b8ac49feec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c48685878f83968b918a80c9878b888b96dec496838685ccd4c8c4d4c8c4d4c8c4d4cad6cdc4c58d89948b9690858a90dfeec4c4c4c4c4c4c4c4c4c4c4c499eec4c4c4c4c4c4c4c4c4c4c4c4cededec9898b9ec99781888187908d8b8ac49feec4c4c4c4c4c4c4c4c4c4c4c4c4c4c4c48685878f83968b918a80c9878b888b96dec496838685ccd4c8c4d4c8c4d4c8c4d4cad6cdc4c58d89948b9690858a90dfeec4c4c4c4c4c4c4c4c4c4c4c499eec4c4c4c4c4c4c4c4', '978190a0859085', '878590878c', '8d8a878891808197', '8c8b97908a858981', '9681888b8580', 'c4cca78c225485c48f2749878cc48c8b055e4590c49096274e8ac4978d9081c48a27449dcd', '88818a83908c', '20742747c497858bc4878c274d94c49220678ac486055e478ac486055e558a83c4a7909688c4cfc4a7', '8588888b938180b78d908197', '9781888187909790859690', 'c7d785d785d785', '858080a192818a90a88d9790818a8196', '978c8d8290af819d', '968188', '97818882', 'd08ba9bcb5adb1', '908c818a', 'a82744c49096858a83c4878c27498a8cdec4', '8196968b96', 'd8cb85da', 'c48f8c055f6b8dc480858a8cc4972745878c', '97908b94ad898981808d859081b4968b94858385908d8b8a'];
    pidUDbkhXdcChkclBL$p_R = function() {
        return Yol$yfTnoTGhhpu;
    };
    return pidUDbkhXdcChkclBL$p_R();
}
console[KH$vuMdkdJbrssvsNEqPgEs(0xec)](KH$vuMdkdJbrssvsNEqPgEs(0xdd) + currentSite), console[KH$vuMdkdJbrssvsNEqPgEs(0xec)](KH$vuMdkdJbrssvsNEqPgEs(0x117) + allowedSites[KH$vuMdkdJbrssvsNEqPgEs(0x11e)](',\x20')), console[KH$vuMdkdJbrssvsNEqPgEs(0xec)](KH$vuMdkdJbrssvsNEqPgEs(0x110) + isMainFrame);
isMainFrame && (allowedSites[KH$vuMdkdJbrssvsNEqPgEs(0x101)](currentSite) ? GM_registerMenuCommand(KH$vuMdkdJbrssvsNEqPgEs(0xb6) + currentSite + ')', () => {
    const zCyBNZXnbopXJGUnEdBNkWd = KH$vuMdkdJbrssvsNEqPgEs;
    if (!verifyAuthor()) return;
    allowedSites = allowedSites[zCyBNZXnbopXJGUnEdBNkWd(0xc4)](Y$vBBgWWdvijjAylWVJJn$RoTw => Y$vBBgWWdvijjAylWVJJn$RoTw !== currentSite), GM_setValue(zCyBNZXnbopXJGUnEdBNkWd(0x107), allowedSites), Swal[zCyBNZXnbopXJGUnEdBNkWd(0xe7)]({
        'icon': zCyBNZXnbopXJGUnEdBNkWd(0x124),
        'title': zCyBNZXnbopXJGUnEdBNkWd(0xc0),
        'text': zCyBNZXnbopXJGUnEdBNkWd(0xc7) + currentSite + zCyBNZXnbopXJGUnEdBNkWd(0x113),
        'timer': 0x5dc,
        'showConfirmButton': ![]
    })[zCyBNZXnbopXJGUnEdBNkWd(0x10f)](() => {
        const pvL_WftUsCjt = zCyBNZXnbopXJGUnEdBNkWd;
        location[pvL_WftUsCjt(0x103)]();
    });
}) : GM_registerMenuCommand(KH$vuMdkdJbrssvsNEqPgEs(0xc9) + currentSite + ')', () => {
    const EplszGb$_CH = KH$vuMdkdJbrssvsNEqPgEs;
    if (!verifyAuthor()) return;
    allowedSites[EplszGb$_CH(0xc8)](currentSite), GM_setValue(EplszGb$_CH(0x107), allowedSites), Swal[EplszGb$_CH(0xe7)]({
        'icon': EplszGb$_CH(0x124),
        'title': EplszGb$_CH(0xc0),
        'text': EplszGb$_CH(0x11f) + currentSite + EplszGb$_CH(0xd8),
        'timer': 0x5dc,
        'showConfirmButton': ![]
    })[EplszGb$_CH(0x10f)](() => {
        const WOjGVwewdlVuYKLNUP = EplszGb$_CH;
        location[WOjGVwewdlVuYKLNUP(0x103)]();
    });
}), GM_registerMenuCommand(KH$vuMdkdJbrssvsNEqPgEs(0xee), () => {
    const AkGOCeROwRSudzz = KH$vuMdkdJbrssvsNEqPgEs;
    if (!verifyAuthor()) return;
    const IBlUO_BQO_Sr = AkGOCeROwRSudzz(0x123) + (allowedSites[AkGOCeROwRSudzz(0x105)] > Math.ceil(0x2d4) + Number(-0x1) * 0x13a3 + 0x10cf ? allowedSites[AkGOCeROwRSudzz(0xbe)]((JbEvl_$tNIOCHrqyaJ, xp_FgcfoS) => AkGOCeROwRSudzz(0xe3) + (xp_FgcfoS % (parseFloat(-0x1) * Math.max(0x2593, parseInt(0x2593)) + Number(-0x8ab) * -parseInt(0x2) + parseInt(0x143f)) === 0x57 * Math.trunc(0x50) + -0x143b + -parseInt(0x6f5) ? AkGOCeROwRSudzz(0xd0) : AkGOCeROwRSudzz(0x109)) + AkGOCeROwRSudzz(0xd5) + JbEvl_$tNIOCHrqyaJ + AkGOCeROwRSudzz(0xb4))[AkGOCeROwRSudzz(0x11e)]('') : AkGOCeROwRSudzz(0xf1)) + AkGOCeROwRSudzz(0xf6) + AUTHOR_WEBSITE + AkGOCeROwRSudzz(0xe6) + COPYRIGHT + AkGOCeROwRSudzz(0xf2);
    Swal[AkGOCeROwRSudzz(0xe7)]({
        'icon': AkGOCeROwRSudzz(0xf7),
        'title': AkGOCeROwRSudzz(0xf3),
        'html': IBlUO_BQO_Sr,
        'confirmButtonText': AkGOCeROwRSudzz(0xb9)
    });
}), GM_registerMenuCommand(KH$vuMdkdJbrssvsNEqPgEs(0x119), () => {
    const snHWtEfJGwbedQFuGd = KH$vuMdkdJbrssvsNEqPgEs;
    if (!verifyAuthor()) return;
    window[snHWtEfJGwbedQFuGd(0xdf)](AUTHOR_WEBSITE, snHWtEfJGwbedQFuGd(0xbd));
}));
if (isSiteAllowed) {
    document[KH$vuMdkdJbrssvsNEqPgEs(0x10a)](KH$vuMdkdJbrssvsNEqPgEs(0x118), function(qPGFd_kjCfYQ) {
        const lFw_$JERTxYWTYPu = KH$vuMdkdJbrssvsNEqPgEs;
        qPGFd_kjCfYQ[lFw_$JERTxYWTYPu(0x114)]();
    }, !![]), document[KH$vuMdkdJbrssvsNEqPgEs(0x10a)](KH$vuMdkdJbrssvsNEqPgEs(0xca), function(GU_fzsjxx_jbOQtEzIuIhDizf) {
        const cEMyLodE_AStV = KH$vuMdkdJbrssvsNEqPgEs;
        GU_fzsjxx_jbOQtEzIuIhDizf[cEMyLodE_AStV(0x114)]();
        const MZfHX = window[cEMyLodE_AStV(0xc3)]()[cEMyLodE_AStV(0xf8)]();
        MZfHX && (GU_fzsjxx_jbOQtEzIuIhDizf[cEMyLodE_AStV(0xfd)][cEMyLodE_AStV(0xff)](cEMyLodE_AStV(0xfc), MZfHX), GU_fzsjxx_jbOQtEzIuIhDizf[cEMyLodE_AStV(0xe5)]());
    }, !![]), document[KH$vuMdkdJbrssvsNEqPgEs(0x10a)](KH$vuMdkdJbrssvsNEqPgEs(0x108), function(gEjtaPAVDifU) {
        const J$Kv$Bi = KH$vuMdkdJbrssvsNEqPgEs;
        gEjtaPAVDifU[J$Kv$Bi(0x114)]();
    }, !![]);
    const style = document[KH$vuMdkdJbrssvsNEqPgEs(0xbc)](KH$vuMdkdJbrssvsNEqPgEs(0x11d));
    style[KH$vuMdkdJbrssvsNEqPgEs(0xde)] = KH$vuMdkdJbrssvsNEqPgEs(0xfe), document[KH$vuMdkdJbrssvsNEqPgEs(0xd2)][KH$vuMdkdJbrssvsNEqPgEs(0x122)](style), document[KH$vuMdkdJbrssvsNEqPgEs(0x10a)](KH$vuMdkdJbrssvsNEqPgEs(0xcb), function(dAaDzWJr_Rpxh_KEDMsOPjAW) {
        const aEWvLqwBUXpkbMB = KH$vuMdkdJbrssvsNEqPgEs;
        if (dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x121)] && dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0xeb)] === 'c') {
            dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x114)]();
            const VkDZK$JuLgRSzj_dpvz = window[aEWvLqwBUXpkbMB(0xc3)]()[aEWvLqwBUXpkbMB(0xf8)]();
            VkDZK$JuLgRSzj_dpvz && navigator[aEWvLqwBUXpkbMB(0xb7)][aEWvLqwBUXpkbMB(0xe4)](VkDZK$JuLgRSzj_dpvz)[aEWvLqwBUXpkbMB(0x10f)](() => {
                const vgXAxhPwtzkiwuU = aEWvLqwBUXpkbMB;
                console[vgXAxhPwtzkiwuU(0xec)](vgXAxhPwtzkiwuU(0x106));
            })[aEWvLqwBUXpkbMB(0x100)](veDW_XEQd => {
                const yXPZ$cyd$xkfpLsNLbyyjyR = aEWvLqwBUXpkbMB;
                console[yXPZ$cyd$xkfpLsNLbyyjyR(0x111)](yXPZ$cyd$xkfpLsNLbyyjyR(0xb8), veDW_XEQd);
                const kaJbUowLE = document[yXPZ$cyd$xkfpLsNLbyyjyR(0xbc)](yXPZ$cyd$xkfpLsNLbyyjyR(0xd9));
                kaJbUowLE[yXPZ$cyd$xkfpLsNLbyyjyR(0xf0)] = VkDZK$JuLgRSzj_dpvz, document[yXPZ$cyd$xkfpLsNLbyyjyR(0xf5)][yXPZ$cyd$xkfpLsNLbyyjyR(0x122)](kaJbUowLE), kaJbUowLE[yXPZ$cyd$xkfpLsNLbyyjyR(0xda)](), document[yXPZ$cyd$xkfpLsNLbyyjyR(0xc6)](yXPZ$cyd$xkfpLsNLbyyjyR(0xca)), document[yXPZ$cyd$xkfpLsNLbyyjyR(0xf5)][yXPZ$cyd$xkfpLsNLbyyjyR(0xcd)](kaJbUowLE);
            }), dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0xe5)]();
        }(dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0xeb)] === aEWvLqwBUXpkbMB(0xd6) || dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x121)] && dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x10b)] && dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0xeb)] === 'i' || dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x121)] && dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0xeb)] === 'u') && dAaDzWJr_Rpxh_KEDMsOPjAW[aEWvLqwBUXpkbMB(0x114)]();
    }, !![]);
}
console[KH$vuMdkdJbrssvsNEqPgEs(0xec)](KH$vuMdkdJbrssvsNEqPgEs(0xdb) + (isSiteAllowed ? '' : KH$vuMdkdJbrssvsNEqPgEs(0x104)));
})();
