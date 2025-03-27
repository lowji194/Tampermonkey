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

const qFKB_EPLekr = ASD$TF;

function u_qnQ_GKNrGlwkZpaLc() {
    const kNLX$FcFkVjpaDkpNa$edyqlt = ['6b414141414141414141414141414141414141414141414141414141414141414141414141414141415d1513411215180d045c430300020a06130e140f054c020e0d0e135b41', '39040c4105000f094112a2c002094116040312081504', '0b0e080f', '15041915220e0f15040f15', '565754545255292a0f183419', '12140202041212', '0f0e0f04', '59003106351b2e', '41492209a7d100410aa2cc020941090e80dbc015411513a2cb0f4112081504410fa2c11848', '0215130d2a0418', '020d0811030e001305', '3509a2d50f064115080f4115a2c00241060880dbc241a5f0a2c2410380daea411509001841a5f080daf408405d03135f320213081115411280dbdc410a09a2d50f0641090e80dbc01541a5f080daf80f064f5d03135f5d03135f', 'a5f1a2c2411509a2cb0c41', '360403120815045b415d0041091304075c43', '0d040f061509', '17000d1404', '42530053005300', '1504191500130400', '25000f094112a2c0020941000d0d0e16040532081504125b41', '0f000c041211000204', '12041525001500', '06041532040d040215080e0f', '090e12150f000c04', '32021308111541a5f1000f0641090e80dbc01541a5f080daf80f06', '030e0518', '39a2d2004116040312081504410fa2c1184149', '0d0e06', '2da2c1411513000f06410209a2cc0f095b41', '021304001504240d040c040f15', '290e12150f000c0441090880dae60f411580dbc0085b41', '020d0811030e00130525001500', '09040005', '161308150435041915', '0d080f0a', '12040d07', '020e1118', '50515450523819182f3836', '42520052005200', '6b4141414141414141414141414b411a6b41414141414141414141414141414141141204134c12040d0402155b41150419154140080c110e1315000f155a6b4141414141414141414141411c6b4141414141414141414141414b5b5b12040d040215080e0f411a6b414141414141414141414141414141410300020a06130e140f054c020e0d0e135b411306030049514d41514d41514d41514f53484140080c110e1315000f155a6b4141414141414141414141411c6b4141414141414141414141414b5b5b4c0c0e1b4c12040d040215080e0f411a6b414141414141414141414141414141410300020a06130e140f054c020e0d0e135b411306030049514d41514d41514d41514f53484140080c110e1315000f155a6b4141414141414141414141411c6b4141414141414141', '43411500130604155c433e030d000f0a43411215180d045c43020e0d0e135b41425004585107075a435f', '2d80dac208412f06141880dae40f', '35a2c00241060880dbc2', '6b414141414141414141414141414141415d050817411215180d045c430c00194c0904080609155b4152515111195a410e170413070d0e164c185b410014150e5a41150419154c000d08060f5b410d0407155a435f6b41414141414141414141414141414141414141415d1500030d04411215180d045c4316080515095b41505151445a41030e130504134c020e0d0d001112045b41020e0d0d001112045a41070e0f154c07000c080d185b41201308000d4d4112000f124c12041308075a410300020a06130e140f054c020e0d0e135b41425300530053005a435f6b4141414141414141414141414141414141414141414141415d15030e05185f6b41414141414141414141414141414141414141414141414141414141', '5d4e005f', '3509a2cb0c4116040312081504410fa2c1184149', '13040c0e17042209080d05', '3509a2c10f094102a2d50f06', '12040d0402151215001315', '1215180d04', '275053', '12040d040215', '410a0980daee084105000f094112a2c00209', '2d80daf608410a09084112000e410209a2c8115b', '6b4141414141414141414141414141414141414141414141415d4e15030e05185f6b41414141414141414141414141414141414141415d4e1500030d045f6b414141414141414141414141414141415d4e0508175f6b414141414141414141414141414141415d050817411215180d045c43150419154c000d08060f5b4102040f1504135a410c001306080f4c150e115b41505111195a41070e0f154c12081b045b41505311195a435f6b4141414141414141414141414141414141414141220e0504412318415d0041091304075c43', '13040d0e0005', '080f020d14050412', '11130417040f1525040700140d15', '201415090e1341a5f0a2c2410380daea411509001841a5f080daf40841490608a2c041151380daea410680daf0025b41', '080f0f041329352c2d', 'a3c84153515354412d80dac208412f06141880dae40f4f41200d0d411308060915124113041204131704054f', '0e11040f', '575457595254103431243734', '43411500130604155c433e030d000f0a43411215180d045c43020e0d0e135b41425004585107075a41150419154c0504020e130015080e0f5b410f0e0f045a435f2f06141880dae40f41350980dbde412d80dac2085d4e005f5d03135f6b41414141414141414141414141414141414141415d1211000f411215180d045c43020e0d0e135b41425959595a435f', '09130407', '0005052417040f152d081215040f0413', '5d4e1211000f5f6b414141414141414141414141414141415d4e0508175f6b414141414141414141414141', '150e321513080f06', '020e0f150419150c040f14', '58505158590e2c2e2e0f14', '020e11181308060915', '5d03135f', '07081304', '07080d150413', '2280dbc20f094103a2c00e', '50535158555954160a150d2a09', '3e030d000f0a', '150e11', '591b2d0508270b', '505459505358575125300c293113', 'a5f1a2c24119a2d20041', '0413130e13', '0a0418', '0c0011', '555309390a262c0a', '53595355535554263923362307', '1215180d041209040415', '0a0418050e160f', '2f000c04121100020441a5f0a2c2410380daea411509001841a5f080daf40841490608a2c041151380daea410680daf0025b41', '5a435f6b41414141414141414141414141414141414141414141414141414141414141414141414141414141414141415d1505411215180d045c4311000505080f065b415911195a41030e130504135b4150111941120e0d080541425454545a41020e0d0e135b41420451045104515a435f', '0d0e020015080e0f', '04190402220e0c0c000f05', '13040d', '5d03135f5d03135f', '25000f094112a2c00209411604031208150412', '5d4e15055f6b414141414141414141414141414141414141414141414141414141414141414141414141414141415d4e15135f6b414141414141414141414141414141414141414141414141414141414141414141414141', '1509040f', '220e1118130806091541a5f0a2c2410380daea411509001841a5f080daf40841490608a2c041151380daea410680daf0025b41', '001111040f052209080d05', '120213081115', '001415090e13', '150419154e110d00080f', '09151511125b4e4e1509040d0e084f080e4f170f4e', 'a5f1a2d20f06', '5d15135f5d1505411215180d045c4311000505080f065b415911195a41030e130504135b4150111941120e0d080541425454545a41020e0d0e135b41420451045104515a435f2209a7d1004102a2d24116040312081504410fa2c10e5d4e15055f5d4e15135f', 'a5f1a2c24112000e410209a2c8114117a5e20f410380dbc20f410380dbd00f06412215130d414a4122', '000d0d0e1604053208150412', '09151511125b4e4e02050f4f0b1205040d0817134f0f04154e0f110c4e1216040415000d041315532150504e050812154e1216040415000d041315534f0c080f4f021212', '4117a2c10e4105000f094112a2c00209', '11141209', '6b4141414141414141414141414907140f0215080e0f4948411a6b4141414141414141414141414141414116080f050e164f020d0e1204415c4107140f0215080e0f4948411a6b4141414141414141414141414141414141414141020e0f120e0d044f0d0e0649462d80dae60f094116080f050e164f020d0e1204494841a5f0a2c2410380daea41020980dbd60f410380dafe08413412041332021308111546485a6b41414141414141414141414141414141414141414e4e4122a2d241150980dae2411509a2cb0c411509a2d50f064103a2c00e4115a2d81841020980dae80f09410f80dbde14410c1480daf00f5b6b41414141414141414141414141414141414141414e4e41000d04131549462a09a2d50f0641150980dae241a5f0a2d20f06410280dacc00411280daf4410380dbd00f064116080f050e164f020d0e12044046485a6b414141414141414141414141414141411c5a6b414141414141414141414141414141412e030b0402154f050407080f0431130e11041315184916080f050e164d4146020d0e1204464d411a6b41414141414141414141414141414141414141411613081500030d045b4107000d12044d6b4141414141414141414141414141414141414141020e0f070806141300030d045b4107000d12046b414141414141414141414141414141411c485a6b4141414141414141414141411c4849485a6b4141414141414141', '12150e11280c0c04050800150431130e1100060015080e0f', '12090807152a0418', '0200150209'];
    u_qnQ_GKNrGlwkZpaLc = function() {
        return kNLX$FcFkVjpaDkpNa$edyqlt;
    };
    return u_qnQ_GKNrGlwkZpaLc();
}(function(A_UyKNJVJi, yDPACwB) {
    const KXuVAwzURTAHYQDNV = ASD$TF,
        tflxLTR$aGT_s = A_UyKNJVJi();
    while (!![]) {
        try {
            const OqfkygN_R = parseFloat(KXuVAwzURTAHYQDNV(0x19b)) / (Math.ceil(parseInt(0x18)) * Math.floor(-0x1c) + -0x2239 + Math.trunc(parseInt(0x24da))) * (-parseFloat(KXuVAwzURTAHYQDNV(0x159)) / (parseInt(0x76c) + -parseInt(0x147f) + parseInt(0xd15))) + -parseFloat(KXuVAwzURTAHYQDNV(0x143)) / (parseInt(0xe) * 0x209 + parseInt(parseInt(0x5e4)) * -parseInt(0x6) + parseInt(0x6dd)) * Math['ceil'](parseFloat(KXuVAwzURTAHYQDNV(0x17e)) / (-parseInt(0xa8d) * parseInt(-parseInt(0x3)) + -0x1 * Number(parseInt(0x6ac)) + -0xb * parseInt(0x245))) + -parseFloat(KXuVAwzURTAHYQDNV(0x150)) / (0x153e + Math.ceil(parseInt(0x13eb)) + Math.trunc(0x2924) * Math.max(-0x1, -parseInt(0x1))) + parseFloat(KXuVAwzURTAHYQDNV(0x14a)) / (Number(-parseInt(0x1c2)) * parseInt(0x9) + parseFloat(-0xd) * parseInt(0x280) + 0x3058) + Math['floor'](-parseFloat(KXuVAwzURTAHYQDNV(0x17b)) / (Math.trunc(0xf64) + 0x245 + 0x11a2 * Math.ceil(-parseInt(0x1)))) + Math['ceil'](parseFloat(KXuVAwzURTAHYQDNV(0x153)) / (0x127d * Math.ceil(0x1) + -0x1370 + 0xfb)) * Math['trunc'](-parseFloat(KXuVAwzURTAHYQDNV(0x15a)) / (0xc * Math.trunc(0x19c) + -0x4be * parseFloat(0x8) + Math.max(0x11, 0x11) * Math.floor(0x119))) + parseFloat(KXuVAwzURTAHYQDNV(0x154)) / (Math.floor(0x5) * 0x18b + parseInt(0x1fc1) + Math.trunc(-0x276e));
            if (OqfkygN_R === yDPACwB) break;
            else tflxLTR$aGT_s['push'](tflxLTR$aGT_s['shift']());
        } catch (XIzotVmwuHgVqZdp$flOv) {
            tflxLTR$aGT_s['push'](tflxLTR$aGT_s['shift']());
        }
    }
}(u_qnQ_GKNrGlwkZpaLc, parseInt(0x4e769) + Math.ceil(0x2) * -0x1d6c9 + Math.trunc(0x2ef99)));
const scriptMetadata = GM_info[qFKB_EPLekr(0x168)],
    AUTHOR = qFKB_EPLekr(0x12e),
    AUTHOR_WEBSITE = qFKB_EPLekr(0x16b),
    COPYRIGHT = qFKB_EPLekr(0x141);

function verifyAuthor() {
    const akOjMeFUI = qFKB_EPLekr;
    let FYWBwxmL_RJxbpWiNL = [];
    scriptMetadata[akOjMeFUI(0x169)] !== AUTHOR && FYWBwxmL_RJxbpWiNL[akOjMeFUI(0x172)](akOjMeFUI(0x13f) + AUTHOR + ')');
    scriptMetadata[akOjMeFUI(0x18a)] !== AUTHOR_WEBSITE && FYWBwxmL_RJxbpWiNL[akOjMeFUI(0x172)](akOjMeFUI(0x15d) + AUTHOR_WEBSITE + ')');
    scriptMetadata[akOjMeFUI(0x14b)] && !scriptMetadata[akOjMeFUI(0x14b)][akOjMeFUI(0x13d)](COPYRIGHT) && FYWBwxmL_RJxbpWiNL[akOjMeFUI(0x172)](akOjMeFUI(0x166) + COPYRIGHT + ')');
    if (FYWBwxmL_RJxbpWiNL[akOjMeFUI(0x185)] > parseInt(parseInt(0x7a9)) * -0x3 + parseInt(0x2) * 0x12af + -parseInt(0xe63)) return Swal[akOjMeFUI(0x14d)]({
        'icon': akOjMeFUI(0x156),
        'title': akOjMeFUI(0x14f),
        'html': akOjMeFUI(0x182) + FYWBwxmL_RJxbpWiNL[akOjMeFUI(0x179)](akOjMeFUI(0x14c)) + akOjMeFUI(0x162) + (akOjMeFUI(0x184) + AUTHOR_WEBSITE + akOjMeFUI(0x19e) + AUTHOR_WEBSITE + akOjMeFUI(0x131)),
        'confirmButtonText': akOjMeFUI(0x16c)
    }), ![];
    return !![];
}
const style = document[qFKB_EPLekr(0x193)](qFKB_EPLekr(0x198));
style[qFKB_EPLekr(0x161)] = qFKB_EPLekr(0x15b), style[qFKB_EPLekr(0x145)] = qFKB_EPLekr(0x170), document[qFKB_EPLekr(0x196)][qFKB_EPLekr(0x167)](style);
let allowedSites = GM_getValue(qFKB_EPLekr(0x16f), []);
const currentSite = window[qFKB_EPLekr(0x15f)][qFKB_EPLekr(0x18d)],
    isSiteAllowed = allowedSites[qFKB_EPLekr(0x13d)](currentSite) || allowedSites[qFKB_EPLekr(0x185)] === Math.floor(-parseInt(0x1)) * 0x24ad + -0x1 * parseInt(0xe21) + -0x2 * -parseInt(0x1967),
    isMainFrame = window[qFKB_EPLekr(0x152)] === window[qFKB_EPLekr(0x199)];
console[qFKB_EPLekr(0x191)](qFKB_EPLekr(0x194) + currentSite), console[qFKB_EPLekr(0x191)](qFKB_EPLekr(0x189) + allowedSites[qFKB_EPLekr(0x179)](',\x20')), console[qFKB_EPLekr(0x191)](qFKB_EPLekr(0x192) + isMainFrame);
isMainFrame && (allowedSites[qFKB_EPLekr(0x13d)](currentSite) ? GM_registerMenuCommand(qFKB_EPLekr(0x190) + currentSite + ')', () => {
    const vYkDAgOX = qFKB_EPLekr;
    if (!verifyAuthor()) return;
    allowedSites = allowedSites[vYkDAgOX(0x14e)](ViuGsDgZg_M => ViuGsDgZg_M !== currentSite), GM_setValue(vYkDAgOX(0x16f), allowedSites), Swal[vYkDAgOX(0x14d)]({
        'icon': vYkDAgOX(0x17c),
        'title': vYkDAgOX(0x134),
        'text': vYkDAgOX(0x155) + currentSite + vYkDAgOX(0x139),
        'timer': 0x5dc,
        'showConfirmButton': ![]
    })[vYkDAgOX(0x165)](() => {
        const NUgB$yIvZKpVBWFEtPQL = vYkDAgOX;
        location[NUgB$yIvZKpVBWFEtPQL(0x13c)]();
    });
}) : GM_registerMenuCommand(qFKB_EPLekr(0x132) + currentSite + ')', () => {
    const roHZWfeRmJbM = qFKB_EPLekr;
    if (!verifyAuthor()) return;
    allowedSites[roHZWfeRmJbM(0x172)](currentSite), GM_setValue(roHZWfeRmJbM(0x16f), allowedSites), Swal[roHZWfeRmJbM(0x14d)]({
        'icon': roHZWfeRmJbM(0x17c),
        'title': roHZWfeRmJbM(0x134),
        'text': roHZWfeRmJbM(0x183) + currentSite + roHZWfeRmJbM(0x171),
        'timer': 0x5dc,
        'showConfirmButton': ![]
    })[roHZWfeRmJbM(0x165)](() => {
        const eIcXuH_UangSr_SjG = roHZWfeRmJbM;
        location[eIcXuH_UangSr_SjG(0x13c)]();
    });
}), GM_registerMenuCommand(qFKB_EPLekr(0x178), () => {
    const dyddrJDYoVHRO_fPcsmLuWoNSz = qFKB_EPLekr;
    if (!verifyAuthor()) return;
    const QYmSgr$$sGwGQwwxnP = dyddrJDYoVHRO_fPcsmLuWoNSz(0x130) + (allowedSites[dyddrJDYoVHRO_fPcsmLuWoNSz(0x185)] > 0x4f7 * -0x5 + 0xe9 + parseFloat(-parseInt(0x2)) * Math.floor(-parseInt(0xbf5)) ? allowedSites[dyddrJDYoVHRO_fPcsmLuWoNSz(0x158)]((DmjivIF_FjpR$uyTkc, OduGm$uyoyginpE) => dyddrJDYoVHRO_fPcsmLuWoNSz(0x177) + (OduGm$uyoyginpE % (parseInt(0x1) * -0x772 + -0x5de + parseInt(0xd52)) === -0x24a + Number(0x285) + -0x1 * parseInt(0x3b) ? dyddrJDYoVHRO_fPcsmLuWoNSz(0x187) : dyddrJDYoVHRO_fPcsmLuWoNSz(0x19c)) + dyddrJDYoVHRO_fPcsmLuWoNSz(0x15e) + DmjivIF_FjpR$uyTkc + dyddrJDYoVHRO_fPcsmLuWoNSz(0x164))[dyddrJDYoVHRO_fPcsmLuWoNSz(0x179)]('') : dyddrJDYoVHRO_fPcsmLuWoNSz(0x16d)) + dyddrJDYoVHRO_fPcsmLuWoNSz(0x13b) + AUTHOR_WEBSITE + dyddrJDYoVHRO_fPcsmLuWoNSz(0x144) + COPYRIGHT + dyddrJDYoVHRO_fPcsmLuWoNSz(0x147);
    Swal[dyddrJDYoVHRO_fPcsmLuWoNSz(0x14d)]({
        'icon': dyddrJDYoVHRO_fPcsmLuWoNSz(0x17d),
        'title': dyddrJDYoVHRO_fPcsmLuWoNSz(0x163),
        'html': QYmSgr$$sGwGQwwxnP,
        'confirmButtonText': dyddrJDYoVHRO_fPcsmLuWoNSz(0x16c)
    });
}), GM_registerMenuCommand(qFKB_EPLekr(0x12f), () => {
    const SLrCzaqTxlGu = qFKB_EPLekr;
    if (!verifyAuthor()) return;
    window[SLrCzaqTxlGu(0x142)](AUTHOR_WEBSITE, SLrCzaqTxlGu(0x151));
}));

function ASD$TF(AKVvNrjj, OUvwGCjoKh) {
    const LyBq$zSwtrqAFF = u_qnQ_GKNrGlwkZpaLc();
    return ASD$TF = function(WBwxmLRJxbp$WiNLoViuGsDgZg, BQYmSgrsGwGQwwxnPDD__m) {
        WBwxmLRJxbp$WiNLoViuGsDgZg = WBwxmLRJxbp$WiNLoViuGsDgZg - (parseInt(-parseInt(0x3)) * -parseInt(0xc15) + -parseInt(0x7cf) + parseInt(-parseInt(0x1b42)));
        let iv$IFFjpR = LyBq$zSwtrqAFF[WBwxmLRJxbp$WiNLoViuGsDgZg];
        if (ASD$TF['muKFls'] === undefined) {
            const OXFqgvFBpEOqewvA$yFc = function(R_yFtCXzfMA$OuoPyoj) {
                let BtWsChTTPeFNkDHq = Number(-parseInt(0xd02)) + 0x919 + parseFloat(0x64a) & parseInt(0x11ae) + parseInt(0x1d3) * -0x13 + Number(parseInt(0x2ff)) * Math.ceil(parseInt(0x6)),
                    x$Gyt_y = new Uint8Array(R_yFtCXzfMA$OuoPyoj['match'](/.{1,2}/g)['map'](FqjM$ZwS$jpfoAulHOGfewvKGrY => parseInt(FqjM$ZwS$jpfoAulHOGfewvKGrY, parseInt(0x1ec6) + Math.ceil(0x3) * Math.max(-parseInt(0x359), -0x359) + Math.max(parseInt(0x1), 0x1) * Math.ceil(-parseInt(0x14ab))))),
                    dCS_bHAjYpaNEO_bQBpR = x$Gyt_y['map'](yNYWhXkGMkqUP_E => yNYWhXkGMkqUP_E ^ BtWsChTTPeFNkDHq),
                    hcU$wPyCvF = new TextDecoder(),
                    JCcTexRV = hcU$wPyCvF['decode'](dCS_bHAjYpaNEO_bQBpR);
                return JCcTexRV;
            };
            ASD$TF['VpUeqe'] = OXFqgvFBpEOqewvA$yFc, AKVvNrjj = arguments, ASD$TF['muKFls'] = !![];
        }
        const yTkc$yOduG_muyo = LyBq$zSwtrqAFF[-parseInt(0x1) * 0x24ad + Math.trunc(-0x1) * parseInt(0xe21) + -0x2 * Math.floor(-parseInt(0x1967))],
            ginp$Epc$OuISBlK = WBwxmLRJxbp$WiNLoViuGsDgZg + yTkc$yOduG_muyo,
            UoaVwOfceZJRyv = AKVvNrjj[ginp$Epc$OuISBlK];
        return !UoaVwOfceZJRyv ? (ASD$TF['VSJWnX'] === undefined && (ASD$TF['VSJWnX'] = !![]), iv$IFFjpR = ASD$TF['VpUeqe'](iv$IFFjpR), AKVvNrjj[ginp$Epc$OuISBlK] = iv$IFFjpR) : iv$IFFjpR = UoaVwOfceZJRyv, iv$IFFjpR;
    }, ASD$TF(AKVvNrjj, OUvwGCjoKh);
}
if (isSiteAllowed) {
    const script = document[qFKB_EPLekr(0x193)](qFKB_EPLekr(0x168));
    script[qFKB_EPLekr(0x17a)] = qFKB_EPLekr(0x173), document[qFKB_EPLekr(0x196)][qFKB_EPLekr(0x167)](script), document[qFKB_EPLekr(0x146)](qFKB_EPLekr(0x149), function(cO$uIS_BlKwUo) {
        const UYuY$VXhKcCO = qFKB_EPLekr;
        cO$uIS_BlKwUo[UYuY$VXhKcCO(0x174)]();
    }, !![]), document[qFKB_EPLekr(0x146)](qFKB_EPLekr(0x19a), function(V$_wOfc) {
        const zSo$GHTbIuEVL$vQmQOuJaBwVu = qFKB_EPLekr;
        V$_wOfc[zSo$GHTbIuEVL$vQmQOuJaBwVu(0x174)]();
        const ZJRy$vJ = window[zSo$GHTbIuEVL$vQmQOuJaBwVu(0x18c)]()[zSo$GHTbIuEVL$vQmQOuJaBwVu(0x148)]();
        ZJRy$vJ && (V$_wOfc[zSo$GHTbIuEVL$vQmQOuJaBwVu(0x195)][zSo$GHTbIuEVL$vQmQOuJaBwVu(0x18b)](zSo$GHTbIuEVL$vQmQOuJaBwVu(0x16a), ZJRy$vJ), V$_wOfc[zSo$GHTbIuEVL$vQmQOuJaBwVu(0x13e)]());
    }, !![]), document[qFKB_EPLekr(0x146)](qFKB_EPLekr(0x135), function(XFqgvFBpEOqe$w$vAyFcFRy) {
        const LLVMWfqbtzhcgjYOaqOpzS__wax = qFKB_EPLekr;
        XFqgvFBpEOqe$w$vAyFcFRy[LLVMWfqbtzhcgjYOaqOpzS__wax(0x174)]();
    }, !![]);
    const style = document[qFKB_EPLekr(0x193)](qFKB_EPLekr(0x136));
    style[qFKB_EPLekr(0x140)] = qFKB_EPLekr(0x19d), document[qFKB_EPLekr(0x196)][qFKB_EPLekr(0x167)](style), document[qFKB_EPLekr(0x146)](qFKB_EPLekr(0x15c), function(tCXz$fMAOuo$PyojCBt) {
        const ipdSSnEsvE$XXHneBDB_tHRO = qFKB_EPLekr;
        if (tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x180)] && tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x157)] === 'c') {
            tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x174)]();
            const sChTTPeFNkDHqaxGyt$yHdCSb = window[ipdSSnEsvE$XXHneBDB_tHRO(0x18c)]()[ipdSSnEsvE$XXHneBDB_tHRO(0x148)]();
            sChTTPeFNkDHqaxGyt$yHdCSb && navigator[ipdSSnEsvE$XXHneBDB_tHRO(0x181)][ipdSSnEsvE$XXHneBDB_tHRO(0x197)](sChTTPeFNkDHqaxGyt$yHdCSb)[ipdSSnEsvE$XXHneBDB_tHRO(0x165)](() => {
                const sdoLOhAtLoEqmzglkuPj = ipdSSnEsvE$XXHneBDB_tHRO;
                console[sdoLOhAtLoEqmzglkuPj(0x191)](sdoLOhAtLoEqmzglkuPj(0x16e));
            })[ipdSSnEsvE$XXHneBDB_tHRO(0x176)](AjYpaNEObQBpRmhcUw => {
                const uqokakAfF_gvvde$JTkNgoVjk = ipdSSnEsvE$XXHneBDB_tHRO;
                console[uqokakAfF_gvvde$JTkNgoVjk(0x156)](uqokakAfF_gvvde$JTkNgoVjk(0x13a), AjYpaNEObQBpRmhcUw);
                const yCvFiJCcTexRVYFqjMZ$wS = document[uqokakAfF_gvvde$JTkNgoVjk(0x193)](uqokakAfF_gvvde$JTkNgoVjk(0x188));
                yCvFiJCcTexRVYFqjMZ$wS[uqokakAfF_gvvde$JTkNgoVjk(0x186)] = sChTTPeFNkDHqaxGyt$yHdCSb, document[uqokakAfF_gvvde$JTkNgoVjk(0x18f)][uqokakAfF_gvvde$JTkNgoVjk(0x167)](yCvFiJCcTexRVYFqjMZ$wS), yCvFiJCcTexRVYFqjMZ$wS[uqokakAfF_gvvde$JTkNgoVjk(0x138)](), document[uqokakAfF_gvvde$JTkNgoVjk(0x160)](uqokakAfF_gvvde$JTkNgoVjk(0x19a)), document[uqokakAfF_gvvde$JTkNgoVjk(0x18f)][uqokakAfF_gvvde$JTkNgoVjk(0x133)](yCvFiJCcTexRVYFqjMZ$wS);
            }), tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x13e)]();
        }(tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x157)] === ipdSSnEsvE$XXHneBDB_tHRO(0x137) || tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x180)] && tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x175)] && tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x157)] === 'i' || tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x180)] && tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x157)] === 'u') && tCXz$fMAOuo$PyojCBt[ipdSSnEsvE$XXHneBDB_tHRO(0x174)]();
    }, !![]);
}
console[qFKB_EPLekr(0x191)](qFKB_EPLekr(0x18e) + (isSiteAllowed ? '' : qFKB_EPLekr(0x17f)));
})();
