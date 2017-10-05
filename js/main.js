! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        ! function(a, c) {
            "undefined" != typeof b && b.exports ? b.exports = c() : "function" == typeof define && define.amd ? define(a, c) : this[a] = c()
        }("bowser", function() {
            function a(a) {
                function b(b) {
                    var c = a.match(b);
                    return c && c.length > 1 && c[1] || ""
                }

                function c(b) {
                    var c = a.match(b);
                    return c && c.length > 1 && c[2] || ""
                }
                var d, e = b(/(ipod|iphone|ipad)/i).toLowerCase(),
                    f = /like android/i.test(a),
                    h = !f && /android/i.test(a),
                    i = /nexus\s*[0-6]\s*/i.test(a),
                    j = !i && /nexus\s*[0-9]+/i.test(a),
                    k = /CrOS/.test(a),
                    l = /silk/i.test(a),
                    m = /sailfish/i.test(a),
                    n = /tizen/i.test(a),
                    o = /(web|hpw)os/i.test(a),
                    p = /windows phone/i.test(a),
                    q = (/SamsungBrowser/i.test(a), !p && /windows/i.test(a)),
                    r = !e && !l && /macintosh/i.test(a),
                    s = !h && !m && !n && !o && /linux/i.test(a),
                    t = b(/edge\/(\d+(\.\d+)?)/i),
                    u = b(/version\/(\d+(\.\d+)?)/i),
                    v = /tablet/i.test(a),
                    w = !v && /[^-]mobi/i.test(a),
                    x = /xbox/i.test(a);
                /opera/i.test(a) ? d = {
                    name: "Opera",
                    opera: g,
                    version: u || b(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                } : /opr|opios/i.test(a) ? d = {
                    name: "Opera",
                    opera: g,
                    version: b(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || u
                } : /SamsungBrowser/i.test(a) ? d = {
                    name: "Samsung Internet for Android",
                    samsungBrowser: g,
                    version: u || b(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /coast/i.test(a) ? d = {
                    name: "Opera Coast",
                    coast: g,
                    version: u || b(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                } : /yabrowser/i.test(a) ? d = {
                    name: "Yandex Browser",
                    yandexbrowser: g,
                    version: u || b(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /ucbrowser/i.test(a) ? d = {
                    name: "UC Browser",
                    ucbrowser: g,
                    version: b(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /mxios/i.test(a) ? d = {
                    name: "Maxthon",
                    maxthon: g,
                    version: b(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                } : /epiphany/i.test(a) ? d = {
                    name: "Epiphany",
                    epiphany: g,
                    version: b(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                } : /puffin/i.test(a) ? d = {
                    name: "Puffin",
                    puffin: g,
                    version: b(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                } : /sleipnir/i.test(a) ? d = {
                    name: "Sleipnir",
                    sleipnir: g,
                    version: b(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                } : /k-meleon/i.test(a) ? d = {
                    name: "K-Meleon",
                    kMeleon: g,
                    version: b(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                } : p ? (d = {
                    name: "Windows Phone",
                    windowsphone: g
                }, t ? (d.msedge = g, d.version = t) : (d.msie = g, d.version = b(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(a) ? d = {
                    name: "Internet Explorer",
                    msie: g,
                    version: b(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : k ? d = {
                    name: "Chrome",
                    chromeos: g,
                    chromeBook: g,
                    chrome: g,
                    version: b(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /chrome.+? edge/i.test(a) ? d = {
                    name: "Microsoft Edge",
                    msedge: g,
                    version: t
                } : /vivaldi/i.test(a) ? d = {
                    name: "Vivaldi",
                    vivaldi: g,
                    version: b(/vivaldi\/(\d+(\.\d+)?)/i) || u
                } : m ? d = {
                    name: "Sailfish",
                    sailfish: g,
                    version: b(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(a) ? d = {
                    name: "SeaMonkey",
                    seamonkey: g,
                    version: b(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel|fxios/i.test(a) ? (d = {
                    name: "Firefox",
                    firefox: g,
                    version: b(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(a) && (d.firefoxos = g)) : l ? d = {
                    name: "Amazon Silk",
                    silk: g,
                    version: b(/silk\/(\d+(\.\d+)?)/i)
                } : /phantom/i.test(a) ? d = {
                    name: "PhantomJS",
                    phantom: g,
                    version: b(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /slimerjs/i.test(a) ? d = {
                    name: "SlimerJS",
                    slimer: g,
                    version: b(/slimerjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(a) || /rim\stablet/i.test(a) ? d = {
                    name: "BlackBerry",
                    blackberry: g,
                    version: u || b(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : o ? (d = {
                    name: "WebOS",
                    webos: g,
                    version: u || b(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(a) && (d.touchpad = g)) : /bada/i.test(a) ? d = {
                    name: "Bada",
                    bada: g,
                    version: b(/dolfin\/(\d+(\.\d+)?)/i)
                } : n ? d = {
                    name: "Tizen",
                    tizen: g,
                    version: b(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || u
                } : /qupzilla/i.test(a) ? d = {
                    name: "QupZilla",
                    qupzilla: g,
                    version: b(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || u
                } : /chromium/i.test(a) ? d = {
                    name: "Chromium",
                    chromium: g,
                    version: b(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || u
                } : /chrome|crios|crmo/i.test(a) ? d = {
                    name: "Chrome",
                    chrome: g,
                    version: b(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : h ? d = {
                    name: "Android",
                    version: u
                } : /safari|applewebkit/i.test(a) ? (d = {
                    name: "Safari",
                    safari: g
                }, u && (d.version = u)) : e ? (d = {
                    name: "iphone" == e ? "iPhone" : "ipad" == e ? "iPad" : "iPod"
                }, u && (d.version = u)) : d = /googlebot/i.test(a) ? {
                    name: "Googlebot",
                    googlebot: g,
                    version: b(/googlebot\/(\d+(\.\d+))/i) || u
                } : {
                    name: b(/^(.*)\/(.*) /),
                    version: c(/^(.*)\/(.*) /)
                }, !d.msedge && /(apple)?webkit/i.test(a) ? (/(apple)?webkit\/537\.36/i.test(a) ? (d.name = d.name || "Blink", d.blink = g) : (d.name = d.name || "Webkit", d.webkit = g), !d.version && u && (d.version = u)) : !d.opera && /gecko\//i.test(a) && (d.name = d.name || "Gecko", d.gecko = g, d.version = d.version || b(/gecko\/(\d+(\.\d+)?)/i)), d.msedge || !h && !d.silk ? e ? (d[e] = g, d.ios = g) : r ? d.mac = g : x ? d.xbox = g : q ? d.windows = g : s && (d.linux = g) : d.android = g;
                var y = "";
                d.windowsphone ? y = b(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : e ? (y = b(/os (\d+([_\s]\d+)*) like mac os x/i), y = y.replace(/[_\s]/g, ".")) : h ? y = b(/android[ \/-](\d+(\.\d+)*)/i) : d.webos ? y = b(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : d.blackberry ? y = b(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : d.bada ? y = b(/bada\/(\d+(\.\d+)*)/i) : d.tizen && (y = b(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (d.osversion = y);
                var z = y.split(".")[0];
                return v || j || "ipad" == e || h && (3 == z || z >= 4 && !w) || d.silk ? d.tablet = g : (w || "iphone" == e || "ipod" == e || h || i || d.blackberry || d.webos || d.bada) && (d.mobile = g), d.msedge || d.msie && d.version >= 10 || d.yandexbrowser && d.version >= 15 || d.vivaldi && d.version >= 1 || d.chrome && d.version >= 20 || d.samsungBrowser && d.version >= 4 || d.firefox && d.version >= 20 || d.safari && d.version >= 6 || d.opera && d.version >= 10 || d.ios && d.osversion && d.osversion.split(".")[0] >= 6 || d.blackberry && d.version >= 10.1 || d.chromium && d.version >= 20 ? d.a = g : d.msie && d.version < 10 || d.chrome && d.version < 20 || d.firefox && d.version < 20 || d.safari && d.version < 6 || d.opera && d.version < 10 || d.ios && d.osversion && d.osversion.split(".")[0] < 6 || d.chromium && d.version < 20 ? d.c = g : d.x = g, d
            }

            function b(a) {
                return a.split(".").length
            }

            function c(a, b) {
                var c, d = [];
                if (Array.prototype.map) return Array.prototype.map.call(a, b);
                for (c = 0; c < a.length; c++) d.push(b(a[c]));
                return d
            }

            function d(a) {
                for (var d = Math.max(b(a[0]), b(a[1])), e = c(a, function(a) {
                        var e = d - b(a);
                        return a += new Array(e + 1).join(".0"), c(a.split("."), function(a) {
                            return new Array(20 - a.length).join("0") + a
                        }).reverse()
                    }); --d >= 0;) {
                    if (e[0][d] > e[1][d]) return 1;
                    if (e[0][d] !== e[1][d]) return -1;
                    if (0 === d) return 0
                }
            }

            function e(b, c, e) {
                var f = h;
                "string" == typeof c && (e = c, c = void 0), void 0 === c && (c = !1), e && (f = a(e));
                var g = "" + f.version;
                for (var i in b)
                    if (b.hasOwnProperty(i) && f[i]) return d([g, b[i]]) < 0;
                return c
            }

            function f(a, b, c) {
                return !e(a, b, c)
            }
            var g = !0,
                h = a("undefined" != typeof navigator ? navigator.userAgent || "" : "");
            return h.test = function(a) {
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    if ("string" == typeof c && c in h) return !0
                }
                return !1
            }, h.isUnsupportedBrowser = e, h.compareVersions = d, h.check = f, h._detect = a, h
        })
    }, {}],
    2: [function(a, b, c) {
        b.exports = {
            af: "Afrikaans",
            af_ZA: "Afrikaans (Suid Afrika)",
            ar: "العربية‏",
            ar_AE: "العربية (الإمارات العربية المتحدة)‏",
            ar_BH: "العربية (الجزائر)‏",
            ar_DZ: "العربية (الجزائر)‏",
            ar_EG: "العربية (مصر)‏",
            ar_IQ: "العربية (العراق)‏",
            ar_JO: "العربية (الأردن)‏",
            ar_KW: "العربية (الكويت)‏",
            ar_LB: "العربية (لبنان)",
            ar_LY: "العربية (ليبيا)‏",
            ar_MA: "العربية (المملكة المغربية)‏",
            ar_OM: "العربية (عمان)‏",
            ar_QA: "العربية (قطر)‏",
            ar_SA: "العربية (المملكة العربية السعودية)‏",
            ar_SY: "العربية (سوريا)‏",
            ar_TN: "العربية (تونس)‏",
            ar_YE: "العربية (اليمن)‏",
            az: "Azərbaycan­ılı",
            az_AZ: "Azərbaycan­ılı (Azərbaycan)",
            be: "Беларускі",
            be_BY: "Беларускі (Беларусь)",
            bg: "български",
            bg_BG: "български (България)",
            bs: "bosanski",
            bs_BA: "bosanski (Bosna i Hercegovina)",
            ca: "català",
            ca_ES: "català (català)",
            cs: "čeština",
            cs_CZ: "čeština (Česká republika)",
            cy: "Cymraeg",
            cy_GB: "Cymraeg (y Deyrnas Unedig)",
            da: "dansk",
            da_DK: "dansk (Danmark)",
            de: "Deutsch",
            de_AT: "Deutsch (Österreich)",
            de_CH: "Deutsch (Schweiz)",
            de_DE: "Deutsch (Deutschland)",
            de_LI: "Deutsch (Liechtenstein)",
            de_LU: "Deutsch (Luxemburg)",
            dv: "Divehi‎",
            dv_MV: "Divehi (Maldives)‎",
            el: "Ελληνικά",
            el_GR: "Ελληνικά (Ελλάδα)",
            en: "English",
            en_AU: "English (Australia)",
            en_BZ: "English (Belize)",
            en_CA: "English (Canada)",
            en_CB: "English (Caribbean)",
            en_GB: "English (United Kingdom)",
            en_IE: "English (Ireland)",
            en_JM: "English (Jamaica)",
            en_NZ: "English (New Zealand)",
            en_PH: "English (Philippines)",
            en_TT: "English (Trinidad and Tobago)",
            en_US: "English (United States)",
            en_ZA: "English (South Africa)",
            en_ZW: "English (Zimbabwe)",
            eo: "Esperanto",
            es: "Español",
            es_AR: "Español (Argentina)",
            es_BO: "Español (Bolivia)",
            es_CL: "Español (Chile)",
            es_CO: "Español (Colombia)",
            es_CR: "Español (Costa Rica)",
            es_DO: "Español (República Dominicana)",
            es_EC: "Español (Ecuador)",
            es_ES: "Español (España)",
            es_GT: "Español (Guatemala)",
            es_HN: "Español (Honduras)",
            es_MX: "Español (México)",
            es_NI: "Español (Nicaragua)",
            es_PA: "Español (Panamá)",
            es_PE: "Español (Perú)",
            es_PR: "Español (Puerto Rico)",
            es_PY: "Español (Paraguay)",
            es_SV: "Español (El Salvador)",
            es_UY: "Español (Uruguay)",
            es_VE: "Español (Venezuela)",
            et: "eesti",
            et_EE: "eesti (Eesti)",
            eu: "euskara",
            eu_ES: "euskara (euskara)",
            fa: "فارسى",
            fa_IR: "فارسى (ایران)‏",
            fi: "suomi",
            fi_FI: "suomi (Suomi)",
            fo: "føroyskt",
            fo_FO: "føroyskt (Føroyar)",
            fr: "français",
            fr_BE: "français (Belgique)",
            fr_CA: "français (Canada)",
            fr_CH: "français (Suisse)",
            fr_FR: "français (France)",
            fr_LU: "français (Luxembourg)",
            fr_MC: "français (Principauté de Monaco)",
            gl: "galego",
            gl_ES: "galego (galego)",
            gu: "ગુજરાતી",
            gu_IN: "ગુજરાતી (ભારત)",
            he: "עברית",
            he_IL: "עברית (ישראל)‏",
            hi: "हिंदी",
            hi_IN: "हिंदी (भारत)",
            hr: "hrvatski",
            hr_BA: "hrvatski (Bosna i Hercegovina)",
            hr_HR: "hrvatski (Hrvatska)",
            hu: "magyar",
            hu_HU: "magyar (Magyarország)",
            hy: "Հայերեն",
            hy_AM: "Հայերեն (Հայաստան)",
            id: "Bahasa Indonesia",
            id_ID: "Bahasa Indonesia (Indonesia)",
            is: "íslenska",
            is_IS: "íslenska (Ísland)",
            it: "italiano",
            it_CH: "italiano (Svizzera)",
            it_IT: "italiano (Italia)",
            ja: "日本語",
            ja_JP: "日本語 (日本)",
            ka: "ქართული",
            ka_GE: "ქართული (საქართველო)",
            kk: "Қазақ",
            kk_KZ: "Қазақ (Қазақстан)",
            kn: "ಕನ್ನಡ",
            kn_IN: "ಕನ್ನಡ (ಭಾರತ)",
            ko: "한국어",
            ko_KR: "한국어 (대한민국)",
            kok: "कोंकणी",
            kok_IN: "कोंकणी (भारत)",
            ky: "Кыргыз",
            ky_KG: "Кыргыз (Кыргызстан)",
            lt: "lietuvių",
            lt_LT: "lietuvių (Lietuva)",
            lv: "latviešu",
            lv_LV: "latviešu (Latvija)",
            mi: "Reo Māori",
            mi_NZ: "Reo Māori (Aotearoa)",
            mk: "македонски јазик",
            mk_MK: "македонски јазик (Македонија)",
            mn: "Монгол хэл",
            mn_MN: "Монгол хэл (Монгол улс)",
            mr: "मराठी",
            mr_IN: "मराठी (भारत)",
            ms: "Bahasa Melayu",
            ms_BN: "Bahasa Melayu (Brunei Darussalam)",
            ms_MY: "Bahasa Melayu (Malaysia)",
            mt: "Malti",
            mt_MT: "Malti (Malta)",
            nb: "norsk (bokmål)",
            nb_NO: "norsk, bokmål (Norge)",
            nl: "Nederlands",
            nl_BE: "Nederlands (België)",
            nl_NL: "Nederlands (Nederland)",
            nn: "norsk (nynorsk)",
            nn_NO: "norsk, nynorsk (Noreg)",
            ns: "Northern Sotho",
            ns_ZA: "Northern Sotho (South Africa)",
            pa: "ਪੰਜਾਬੀ",
            pa_IN: "ਪੰਜਾਬੀ (ਭਾਰਤ)",
            pl: "polski",
            pl_PL: "polski (Polska)",
            ps: "پښتو‏",
            ps_AF: "پښتو (افغانستان)‏",
            pt: "Português",
            pt_BR: "Português (Brasil)",
            pt_PT: "português (Portugal)",
            qu: "runasimi",
            qu_BO: "runasimi (Qullasuyu)",
            qu_EC: "runasimi (Ecuador)",
            qu_PE: "runasimi (Piruw)",
            ro: "română",
            ro_RO: "română (România)",
            ru: "русский",
            ru_RU: "русский (Россия)",
            sa: "संस्कृत",
            sa_IN: "संस्कृत (भारतम्)",
            se: "davvisámegiella",
            se_FI: "davvisámegiella (Suopma)",
            se_NO: "davvisámegiella (Norga)",
            se_SE: "davvisámegiella (Ruoŧŧa)",
            sk: "slovenčina",
            sk_SK: "slovenčina (Slovensko)",
            sl: "slovenski",
            sl_SI: "slovenski (Slovenija)",
            sq: "shqipe",
            sq_AL: "shqipe (Shqipëria)",
            sr: "srpski",
            sr_BA: "srpski (Bosna i Hercegovina)",
            sr_SP: "srpski (Srbija i Crna Gora",
            sv: "svenska",
            sv_FI: "svenska (Finland)",
            sv_SE: "svenska (Sverige)",
            sw: "Kiswahili",
            sw_KE: "Kiswahili (Kenya)",
            syr: "Syria",
            syr_SY: "Syriac (Syria)‎",
            ta: "தமிழ்",
            ta_IN: "தமிழ் (இந்தியா)",
            te: "తెలుగు",
            te_IN: "తెలుగు (భారత దేశం)",
            th: "ไทย",
            th_TH: "ไทย (ไทย)",
            tl: "Tagalog",
            tl_PH: "Tagalog (Philippines)",
            tn: "Setswana",
            tn_ZA: "Setswana (Aforika Borwa)",
            tr: "Türkçe",
            tr_TR: "Türkçe (Türkiye)",
            tt: "Татар",
            tt_RU: "Татар (Россия)",
            ts: "Xitsonga",
            uk: "українська",
            uk_UA: "українська (Україна)",
            ur: "اُردو‏",
            ur_PK: "اُردو (پاکستان)‏",
            uz: "U'zbek",
            uz_UZ: "U'zbek (U'zbekiston Respublikasi)",
            vi: "Tiếng Việt",
            vi_VN: "Tiếng Việt (Việt Nam)",
            xh: "isiXhosa",
            xh_ZA: "isiXhosa (uMzantsi Afrika)",
            zh: "中文",
            zh_CN: "中文(中华人民共和国)",
            zh_HK: "中文(香港特別行政區)",
            zh_MO: "中文(澳門特別行政區)",
            zh_SG: "中文(新加坡)",
            zh_TW: "中文(台灣)",
            zu: "isiZulu",
            zu_ZA: "isiZulu (iNingizimu Afrika)"
        }
    }, {}],
    3: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["$compileProvider", function(a) {
            a.imgSrcSanitizationWhitelist(/^\s*(https?):|data:image\//)
        }])
    }, {}],
    4: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").run(["$injector", function(a) {
            window.DEBUGGER = {
                inject: function(b) {
                    return a.get(b)
                },
                scope: function(a) {
                    return angular.element(a).scope()
                }
            }
        }])
    }, {}],
    5: [function(a, b, c) {
        "use strict";
        angular.forEach(window.unifiPortalConfig, function(a, b) {
            angular.module("app-unifi-hotspot-portal").constant(b, a)
        })
    }, {}],
    6: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["$httpProvider", function(a) {
            a.interceptors.unshift("templateVersionInterceptor"), a.interceptors.unshift("responseErrorInterceptor"), a.interceptors.unshift("backendErrorMessageInterceptor")
        }])
    }, {}],
    7: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["$urlRouterProvider", function(a) {
            a.otherwise("/")
        }])
    }, {}],
    8: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["siteProvider", function(a) {
            var b = window.location.pathname.split("/"),
                c = b.indexOf("s");
            c >= 0 && b[c + 1] && a.initActiveSite(b[c + 1])
        }])
    }, {}],
    9: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["$stateProvider", function(a) {
            a.state("main", {
                redirectTo: "portal.home",
                url: "/"
            }).state("portal", {
                "abstract": !0,
                resolve: {
                    resolvedHotspotConfig: ["hotspotConfig", function(a) {
                        return a.resolve()
                    }],
                    resolvedHotspotPackages: ["hotspotPackages", "resolvedHotspotConfig", function(a, b) {
                        return a.resolve()
                    }]
                },
                templateUrl: "views/portal.html"
            }).state("portal.home", {
                controller: "HomeController",
                controllerAs: "homeCtrl",
                templateUrl: "views/home.html",
                url: "/"
            }).state("portal.payment", {
                controller: "PaymentController",
                controllerAs: "paymentCtrl",
                params: {
                    packageId: {
                        value: null
                    }
                },
                resolve: {
                    resolvedSelectedPackage: ["$stateParams", "payments", "resolvedHotspotConfig", "resolvedHotspotPackages", function(a, b, c, d) {
                        return b.resolve(a.packageId)
                    }]
                },
                templateUrl: "views/payment.html",
                url: "/payment/{packageId}"
            }).state("portal.tos", {
                controller: "TosController",
                controllerAs: "tosCtrl",
                templateUrl: "views/tos.html",
                url: "/tos"
            }).state("preview", {
                resolve: {
                    resolvedPreview: ["$stateParams", "preview", function(a, b) {
                        return b.resolve()
                    }]
                },
                templateUrl: "views/portal.html",
                url: "/preview"
            }).state("preview.home", {
                controller: "HomeController",
                controllerAs: "homeCtrl",
                templateUrl: "views/home.html",
                url: "/"
            })
        }])
    }, {}],
    10: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").config(["_Provider", "$injector", "$translateProvider", "$translatePartialLoaderProvider", "UnifiPortalVersion", "LANGUAGES", function(a, b, c, d, e, f) {
            function g(a) {
                return h.filter(h.keys(f), function(b) {
                    return 0 === b.indexOf(a + "_")
                })
            }
            var h = a._;
            d.addPart("portal"), d.addPart("countries");
            var i = (window.UnifiPortalHotspotConfig ? window.UnifiPortalHotspotConfig.languages : null) || ["en"],
                j = h.filter(i, function(a) {
                    return "en" !== a
                }),
                k = h.reduce(j, function(a, b) {
                    if (2 === b.length) {
                        var c = g(b);
                        h.each(c, function(c) {
                            -1 === i.indexOf(c) && (a[c.replace("_", "-")] = b)
                        })
                    }
                    return a[b.replace("_", "-")] = b, a
                }, {});
            k["*"] = "en", c.useSanitizeValueStrategy("sanitizeParameters").useLoader("$translatePartialLoader", {
                urlTemplate: "locales/{lang}/{part}.json?v=" + e
            }).useCookieStorage().registerAvailableLanguageKeys(i, k).uniformLanguageTag("bcp47").determinePreferredLanguage().fallbackLanguage("en")
        }])
    }, {}],
    11: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("COOKIE_KEYS", {
            TOS_PREFIX: "unifi-portal-tos_"
        })
    }, {}],
    12: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("EVENTS", {
            BACKEND_ERROR_MESSAGE: "backendErrorMessage"
        })
    }, {}],
    13: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("GUEST_AUTH", {
            NONE: "none",
            PASSWORD: "password",
            HOTSPOT: "hotspot",
            CUSTOM: "custom"
        })
    }, {}],
    14: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("HEY_DEFAULTS", {
            LEVEL: "neutral",
            DELAY: 5e3,
            ERROR_DELAY: 1e4
        })
    }, {}],
    15: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("HOTSPOT_CONFIG_PREVIEW_DEFAULTS", {
            packages: {
                enabled: !0,
                options: [{
                    id: "p1",
                    name: "8-Hour Pass",
                    amount: "5.99",
                    currency: "USD"
                }]
            },
            free: {
                enabled: !0
            },
            tos: {
                enabled: !0
            },
            vouchers: {
                enabled: !0
            }
        })
    }, {}],
    16: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("LANGUAGE_FLAG_MAP", {
            af: "za",
            af_ZA: "za",
            ar: "ar",
            ar_AE: "ae",
            ar_BH: "bh",
            ar_DZ: "dz",
            ar_EG: "eg",
            ar_IQ: "iq",
            ar_JO: "jo",
            ar_KW: "kw",
            ar_LB: "lb",
            ar_LY: "ly",
            ar_MA: "ma",
            ar_OM: "om",
            ar_QA: "qa",
            ar_SA: "sa",
            ar_SY: "sy",
            ar_TN: "tn",
            ar_YE: "ye",
            az: "az",
            az_AZ: "az",
            be: "be",
            be_BY: "be",
            bg: "bg",
            bg_BG: "bg",
            bs: "ba",
            bs_BA: "ba",
            ca: "es",
            ca_ES: "es",
            cs: "cz",
            cs_CZ: "cz",
            cy: "gb-wls",
            cy_GB: "gb-wls",
            da: "dk",
            da_DK: "dk",
            de: "de",
            de_AT: "at",
            de_CH: "ch",
            de_DE: "de",
            de_LI: "li",
            de_LU: "lu",
            dv: "mv",
            dv_MV: "mv",
            el: "gr",
            el_GR: "gr",
            en: "gb",
            en_AU: "au",
            en_BZ: "bz",
            en_CA: "ca",
            en_CB: "cb",
            en_GB: "gb",
            en_IE: "ie",
            en_JM: "jm",
            en_NZ: "nz",
            en_PH: "ph",
            en_TT: "tt",
            en_US: "us",
            en_ZA: "za",
            en_ZW: "zw",
            eo: "",
            es: "es",
            es_AR: "ar",
            es_BO: "bo",
            es_CL: "cl",
            es_CO: "co",
            es_CR: "cr",
            es_DO: "do",
            es_EC: "ec",
            es_ES: "es",
            es_GT: "gt",
            es_HN: "hn",
            es_MX: "mx",
            es_NI: "ni",
            es_PA: "pa",
            es_PE: "pe",
            es_PR: "pr",
            es_PY: "py",
            es_SV: "sv",
            es_UY: "uy",
            es_VE: "ve",
            et: "ee",
            et_EE: "ee",
            eu: "es",
            eu_ES: "es",
            fa: "ir",
            fa_IR: "ir",
            fi: "fi",
            fi_FI: "fi",
            fo: "fo",
            fo_FO: "fo",
            fr: "fr",
            fr_BE: "br",
            fr_CA: "ca",
            fr_CH: "ch",
            fr_FR: "fr",
            fr_LU: "lu",
            fr_MC: "mc",
            gl: "es",
            gl_ES: "es",
            gu: "in",
            gu_IN: "in",
            he: "il",
            he_IL: "il",
            hi: "in",
            hi_IN: "in",
            hr: "ba",
            hr_BA: "ba",
            hr_HR: "hr",
            hu: "hu",
            hu_HU: "hu",
            hy: "am",
            hy_AM: "am",
            id: "id",
            id_ID: "id",
            is: "is",
            is_IS: "is",
            it: "it",
            it_CH: "ch",
            it_IT: "it",
            ja: "jp",
            ja_JP: "jp",
            ka: "ge",
            ka_GE: "ge",
            kk: "kz",
            kk_KZ: "kz",
            kn: "in",
            kn_IN: "in",
            ko: "kr",
            ko_KR: "kr",
            kok: "in",
            kok_IN: "in",
            ky: "kg",
            ky_KG: "kg",
            lt: "lt",
            lt_LT: "lt",
            lv: "lv",
            lv_LV: "lv",
            mi: "nz",
            mi_NZ: "nz",
            mk: "mk",
            mk_MK: "mk",
            mn: "mn",
            mn_MN: "mn",
            mr: "in",
            mr_IN: "in",
            ms: "my",
            ms_BN: "bn",
            ms_MY: "my",
            mt: "mt",
            mt_MT: "mt",
            nb: "no",
            nb_NO: "no",
            no: "no",
            nl: "nl",
            nl_BE: "be",
            nl_NL: "nl",
            nn: "no",
            nn_NO: "no",
            ns: "za",
            ns_ZA: "za",
            pa: "in",
            pa_IN: "in",
            pl: "pl",
            pl_PL: "pl",
            ps: "ar",
            ps_AF: "ar",
            pt: "pt",
            pt_BR: "br",
            pt_PT: "pt",
            qu: "pe",
            qu_BO: "bo",
            qu_EC: "ec",
            qu_PE: "pe",
            ro: "ro",
            ro_RO: "ro",
            ru: "ru",
            ru_RU: "ru",
            sa: "in",
            sa_IN: "in",
            se: "se",
            se_FI: "fi",
            se_NO: "no",
            se_SE: "se",
            sk: "sk",
            sk_SK: "sk",
            sl: "si",
            sl_SI: "si",
            sq: "al",
            sq_AL: "al",
            sr: "ba",
            sr_BA: "ba",
            sr_SP: "sp",
            sv: "se",
            sv_FI: "fi",
            sv_SE: "se",
            sw: "ke",
            sw_KE: "ke",
            syr: "sy",
            syr_SY: "sy",
            ta: "in",
            ta_IN: "in",
            te: "in",
            te_IN: "in",
            th: "th",
            th_TH: "th",
            tl: "ph",
            tl_PH: "ph",
            tn: "za",
            tn_ZA: "za",
            tr: "tr",
            tr_TR: "tr",
            tt: "ru",
            tt_RU: "ru",
            ts: "za",
            uk: "ua",
            uk_UA: "ua",
            ur: "pk",
            ur_PK: "pk",
            uz: "uz",
            uz_UZ: "uz",
            vi: "vn",
            vi_VN: "vn",
            xh: "za",
            xh_ZA: "za",
            zh: "cn",
            zh_CN: "cn",
            zh_HK: "hk",
            zh_MO: "mo",
            zh_SG: "sg",
            zh_TW: "tw",
            zu: "za",
            zu_ZA: "za"
        })
    }, {}],
    17: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("LANGUAGE_SETTINGS", {
            MAX_LANGUAGES_INLINE: 3
        })
    }, {}],
    18: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").constant("LANGUAGES", a("../../../node_modules/constant-unifi/src/json/hotspotLanguagesMap.json"))
    }, {
        "../../../node_modules/constant-unifi/src/json/hotspotLanguagesMap.json": 2
    }],
    19: [function(a, b, c) {
        "use strict";

        function d(a) {
            this._ = a, this.messages = []
        }
        d.prototype.onFormError = function(a, b) {
            -1 !== this.messages.indexOf(b) && this.modelCtrl.$setValidity(b, !1)
        }, d.prototype.clearFormError = function(a) {
            var b = this.modelCtrl;
            return this._.each(this.messages, function(a) {
                b.$setValidity(a, !0)
            }), a
        }, d.prototype.setNgModelCtrl = function(a) {
            this.modelCtrl = a, this.modelCtrl.$parsers.push(this._.bind(this.clearFormError, this))
        }, d.prototype.setMessages = function(a) {
            this.messages = a
        }, d.$inject = ["_"], angular.module("app-unifi-hotspot-portal").controller("BackendErrorMessageValidatorController", d)
    }, {}],
    20: [function(a, b, c) {
        "use strict";

        function d(a, b, c, d, e) {
            this.$translate = a, this.hotspotConfigModel = b.getModel(), this.LANGUAGE_FLAG_MAP = c, this.LANGUAGE_SETTINGS = d, this.LANGUAGES = e, this.isDropdownVisible = !1
        }
        d.prototype.getCurrentLanguageFlag = function() {
            return this.getFlag(this.$translate.use())
        }, d.prototype.changeLanguage = function(a) {
            this.$translate.use(a)
        }, d.prototype.getFlag = function(a) {
            return this.LANGUAGE_FLAG_MAP[a]
        }, d.prototype.isDisplayDropdown = function() {
            return this.hotspotConfigModel.languages.length > this.LANGUAGE_SETTINGS.MAX_LANGUAGES_INLINE
        }, d.$inject = ["$translate", "hotspotConfig", "LANGUAGE_FLAG_MAP", "LANGUAGE_SETTINGS", "LANGUAGES"], angular.module("app-unifi-hotspot-portal").controller("ChangeLanguageController", d)
    }, {}],
    21: [function(a, b, c) {
        "use strict";

        function d(a, b, c, d, e, f, g, h, i, j) {
            this._ = a, this.$translate = b, this.heyToasts = c, this.postMessage = g, this.hotspotConfigModel = d.getModel(), this.login = f, this.tos = h, this.GUEST_AUTH = i, this.GUEST_AUTH = i, this.LANGUAGE_FLAG_MAP = j, this.getFreePackage = a.bind(e.getFreePackage, e), this.getPayablePackages = a.bind(e.getPayablePackages, e), this.hasFreePackage = a.bind(e.hasFreePackage, e), this.hasPayablePackages = a.bind(e.hasPayablePackages, e), this.isTosAccepted = a.bind(h.isAccepted, h), this.initializeFormModel(), g.sendToParent({
                appLoaded: !0
            })
        }
        d.prototype.initializeFormModel = function() {
            var a = this.getPayablePackages(),
                b = this.hotspotConfigModel.payment_enabled;
            this.formModel = {
                tos: this.tos.isAccepted(),
                packageId: b && a.length > 0 ? a[0]._id : null
            }
        }, d.prototype.onTosChange = function() {
            this.formModel.tos ? this.tos.accept() : this.tos.reject()
        }, d.prototype.isFacebookAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && this.hotspotConfigModel.facebook_enabled
        }, d.prototype.isGoogleAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && this.hotspotConfigModel.google_enabled
        }, d.prototype.isHotspotAuthenticationEnabled = function() {
            return this.hotspotConfigModel.auth === this.GUEST_AUTH.HOTSPOT
        }, d.prototype.isNoAuthenticationEnabled = function() {
            return this.hotspotConfigModel.auth === this.GUEST_AUTH.NONE
        }, d.prototype.isPaymentAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && this.hotspotConfigModel.payment_enabled && this.hasPayablePackages()
        }, d.prototype.isSocialAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && (this.hotspotConfigModel.facebook_enabled || this.hotspotConfigModel.google_enabled)
        }, d.prototype.isSimplePasswordAuthenticationEnabled = function() {
            return this.hotspotConfigModel.auth === this.GUEST_AUTH.PASSWORD
        }, d.prototype.isVoucherAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && this.hotspotConfigModel.voucher_enabled
        }, d.prototype.isFreeTrialAuthenticationEnabled = function() {
            return this.isHotspotAuthenticationEnabled() && this.hotspotConfigModel.payment_enabled && this.hasFreePackage()
        }, d.prototype.isWelcomeTextEnabledAtPosition = function(a) {
            return this.hotspotConfigModel.welcome_text_enabled && this.hotspotConfigModel.welcome_text_position === a
        }, d.prototype.connectFreeTrial = function() {
            var a = this.$translate,
                b = this.heyToasts;
            this.isFreeTrialConnecting = !0, this.login.freeTrialLogin(this.getFreePackage()._id)["catch"](function(c) {
                b.pushError(a.instant("FREE_TRIAL_ERROR_CONNECTION"))
            })["finally"](this._.bind(function() {
                this.isFreeTrialConnecting = !1
            }, this))
        }, d.prototype.connectFacebook = function() {
            this.isFacebookConnecting = !0, this.login.facebookLogin()["finally"](function() {
                this.isFacebookConnecting = !1
            }.bind(this))
        }, d.prototype.connectGoogle = function() {
            this.isGoogleConnecting = !0, this.login.googleLogin()["finally"](function() {
                this.isGoogleConnecting = !1
            }.bind(this))
        }, d.prototype.connectNoAuth = function() {
            var a = this.$translate,
                b = this.heyToasts;
            this.isNoAuthConnecting = !0, this.login.noAuthLogin()["catch"](function(c) {
                b.pushError(a.instant("NO_AUTH_ERROR_CONNECTION"))
            })["finally"](this._.bind(function() {
                this.isNoAuthConnecting = !1
            }, this))
        }, d.prototype.connectPassword = function() {
            var a = this.$translate,
                b = this.heyToasts;
            this.isPasswordConnecting = !0, this.login.passwordLogin(this.formModel.password)["catch"](function(c) {
                b.pushError(a.instant("SIMPLE_PASSWORD_ERROR_CONNECTION"))
            })["finally"](this._.bind(function() {
                this.isPasswordConnecting = !1
            }, this))
        }, d.prototype.connectVoucher = function() {
            var a = this.$translate,
                b = this.heyToasts;
            this.isVoucherConnecting = !0, this.login.voucherLogin(this.formModel.voucherCode)["catch"](function(c) {
                b.pushError(a.instant("VOUCHER_ERROR_CONNECTION"))
            })["finally"](this._.bind(function() {
                this.isVoucherConnecting = !1
            }, this))
        }, d.$inject = ["_", "$translate", "heyToasts", "hotspotConfig", "hotspotPackages", "login", "postMessage", "tos", "GUEST_AUTH", "LANGUAGE_FLAG_MAP"], angular.module("app-unifi-hotspot-portal").controller("HomeController", d)
    }, {}],
    22: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            this.getHotspotConfigModel = a.bind(b.getModel, b)
        }
        d.$inject = ["_", "hotspotConfig"], angular.module("app-unifi-hotspot-portal").controller("MainController", d)
    }, {}],
    23: [function(a, b, c) {
        "use strict";

        function d(a, b, c, d, e, f) {
            this._ = a, this.$translate = b, this.countryCodes = e.getCountryCodes(), this.countryNamesMap = e.getCountryNamesMap(), this.heyToasts = c, this.login = d, this.selectedPackageModel = f, this.hotspotConfigModel = e, this.showValidation = !1, this.formModel = {
                cc_firstname: "",
                cc_lastname: "",
                cc_addr1: "",
                cc_addr2: "",
                cc_city: "",
                cc_state: "",
                cc_zip: "",
                cc_country: e.payment_fields_country_default
            }
        }
        d.prototype.connect = function() {
            var a = this.$translate,
                b = this.heyToasts;
            this.isConnecting = !0, this.login.paymentLogin(this.selectedPackageModel._id, this.formModel)["catch"](function(c) {
                b.pushError(a.instant("PAYMENT_ERROR_CONNECTION"))
            })["finally"](this._.bind(function() {
                this.isConnecting = !1
            }, this))
        }, d.prototype.isFieldEnabled = function(a) {
            var b = ["payment_fields", a, "enabled"].join("_");
            return !!this.hotspotConfigModel[b]
        }, d.prototype.isFieldRequired = function(a) {
            var b = ["payment_fields", a, "required"].join("_");
            return !!this.hotspotConfigModel[b]
        }, d.prototype.hasAnyOptionalFieldEnabled = function() {
            var a = ["address", "city", "country", "first_name", "last_name", "state", "zip"];
            return this._.some(a, function(a) {
                var b = ["payment_fields", a, "enabled"].join("_");
                return !!this.hotspotConfigModel[b]
            }, this)
        }, d.$inject = ["_", "$translate", "heyToasts", "login", "resolvedHotspotConfig", "resolvedSelectedPackage"], angular.module("app-unifi-hotspot-portal").controller("PaymentController", d)
    }, {}],
    24: [function(a, b, c) {
        "use strict";

        function d(a) {
            this.hotspotConfigModel = a
        }
        d.$inject = ["resolvedHotspotConfig"], angular.module("app-unifi-hotspot-portal").controller("TosController", d)
    }, {}],
    25: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalBackendErrorMessageValidator", ["_", "EVENTS", function(a, b) {
            return {
                controller: "BackendErrorMessageValidatorController",
                controllerAs: "backendErrorMessageValidatorCtrl",
                require: ["unifiPortalBackendErrorMessageValidator", "ngModel"],
                link: function(c, d, e, f) {
                    var g = f[0],
                        h = f[1],
                        i = a.map(e.unifiPortalBackendErrorMessageValidator.split(";"), function(a) {
                            return a.trim()
                        });
                    g.setNgModelCtrl(h), g.setMessages(i), c.$on(b.BACKEND_ERROR_MESSAGE, a.bind(g.onFormError, g))
                }
            }
        }])
    }, {}],
    26: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalChangeLanguage", [function() {
            return {
                controller: "ChangeLanguageController",
                controllerAs: "changeLanguageCtrl",
                templateUrl: "views/partials/changeLanguage.html",
                replace: !0,
                link: function(a, b, c) {}
            }
        }])
    }, {}],
    27: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalCustomBody", [function() {
            return {
                scope: {
                    backgroundColor: "=unifiPortalCustomBodyBackgroundColor",
                    backgroundImage: "=unifiPortalCustomBodyBackgroundImage",
                    backgroundImageTile: "=unifiPortalCustomBodyBackgroundImageTile"
                },
                link: function(a, b, c) {
                    function d() {
                        b.css("background-image", a.backgroundImage ? ["url(", a.backgroundImage, ")"].join("") : ""), b.css("background-repeat", a.backgroundImage ? a.backgroundImageTile ? "repeat" : "no-repeat" : ""), b.css("background-position", a.backgroundImage ? "center" : "")
                    }
                    a.$watch("backgroundColor", function() {
                        b.css("background-color", a.backgroundColor ? a.backgroundColor : "")
                    }), a.$watch("backgroundImage", function() {
                        d()
                    }), a.$watch("backgroundImageTile", function() {
                        d()
                    })
                }
            }
        }])
    }, {}],
    28: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalCustomBox", ["color", function(a) {
            return {
                scope: {
                    color: "=unifiPortalCustomBoxColor",
                    backgroundColor: "=unifiPortalCustomBoxBackgroundColor",
                    backgroundOpacity: "=unifiPortalCustomBoxBackgroundOpacity"
                },
                link: function(b, c, d) {
                    function e() {
                        var d = Math.max(0, Math.min(1, b.backgroundOpacity / 100));
                        b.backgroundColor ? 1 !== d ? c.css("background-color", a.hexToRgba(b.backgroundColor, d)) : c.css("background-color", b.backgroundColor) : c.css("background-color", "")
                    }
                    b.$watch("color", function() {
                        c.css("color", b.color ? b.color : void 0)
                    }), b.$watch("backgroundColor", function() {
                        e()
                    }), b.$watch("backgroundOpacity", function() {
                        e()
                    })
                }
            }
        }])
    }, {}],
    29: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalCustomButton", ["color", function(a) {
            var b = 10,
                c = 3,
                d = "unifiPortalCustomButton";
            return {
                scope: {
                    backgroundColor: "=unifiPortalCustomButtonBackgroundColor",
                    textColor: "=unifiPortalCustomButtonTextColor"
                },
                link: function(e, f, g) {
                    if (e.backgroundColor) {
                        var h = function(c) {
                                var f = angular.element(c.target);
                                f.hasClass(d) && f.css("background-color", a.lightenColor(e.backgroundColor, b))
                            },
                            i = function(a) {
                                var b = angular.element(a.target);
                                b.hasClass(d) && b.css("background-color", e.backgroundColor)
                            };
                        f.addClass("unifiPortalCustomButton"), f.css("background-color", e.backgroundColor), f.css("border-color", a.darkenColor(e.backgroundColor, c)), f.on("mouseenter", h), f.on("mouseleave", i), f.on("$destroy", function() {
                            f.off("mouseenter", h), f.off("mouseleave", i)
                        })
                    }
                    e.textColor && f.css("color", e.textColor), e.$watch("backgroundColor", function(b) {
                        f.css("background-color", b), f.css("border-color", b ? a.darkenColor(b, c) : "")
                    }), e.$watch("textColor", function(a) {
                        f.css("color", a)
                    })
                }
            }
        }])
    }, {}],
    30: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalCustomLink", ["color", function(a) {
            return {
                scope: {
                    textColor: "=unifiPortalCustomLinkTextColor"
                },
                link: function(b, c, d) {
                    if (b.textColor) {
                        var e = function(c) {
                                var d = angular.element(c.target);
                                d.css("color", a.lightenColor(b.textColor, 10))
                            },
                            f = function(a) {
                                var c = angular.element(a.target);
                                c.css("color", b.textColor)
                            };
                        c.css("color", b.textColor), c.on("mouseenter", e), c.on("mouseleave", f), c.on("$destroy", function() {
                            c.off("mouseenter", e), c.off("mouseleave", f)
                        })
                    }
                    b.$watch("textColor", function(a) {
                        c.css("color", a)
                    })
                }
            }
        }])
    }, {}],
    31: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").directive("unifiPortalCustomTitle", ["hotspotConfig", function(a) {
            return {
                restrict: "A",
                link: function(b, c) {
                    b.$watch(function() {
                        return (a.getModel() || {}).title
                    }, function(a) {
                        c.text(a || "")
                    })
                }
            }
        }])
    }, {}],
    32: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").filter("amount", ["currencyUtils", function(a) {
            return function(b) {
                return a.formatAmount(b.amount, b.currency)
            }
        }])
    }, {}],
    33: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").filter("ccYears", ["_", function(a) {
            return function(b) {
                var c = (new Date).getFullYear(),
                    d = 10;
                return a.range(c, c + d)
            }
        }])
    }, {}],
    34: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").filter("range", ["_", function(a) {
            return function(b, c, d) {
                return a.range(c, d + 1)
            }
        }])
    }, {}],
    35: [function(a, b, c) {
        "use strict";
        var d = "COUNTRY_";
        angular.module("app-unifi-hotspot-portal").filter("translateCountry", ["hotspotConfig", "$translate", function(a, b) {
            return function(a, c) {
                var e = d + a,
                    f = b.instant(e);
                return f !== e ? f : c[a]
            }
        }])
    }, {}],
    36: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal", ["bowser", "busy", "creditcard", "clickOff", "hellojs", "hey", "ngCookies", "ngResource", "ngSanitize", "ng-currency", "pascalprecht.translate", "ui.router", "underscore"]), a("./providers/bowserProvider"), a("./providers/siteProvider"), a("./config/compile"), a("./config/debugger"), a("./config/env"), a("./config/httpInterceptors"), a("./config/routes"), a("./config/site"), a("./config/states"), a("./config/translate"),
            a("./constants/cookieKeys"), a("./constants/events"), a("./constants/guestAuth"), a("./constants/heyDefaults"), a("./constants/hotspotConfigPreviewDefaults"), a("./constants/languageFlagMap"), a("./constants/languageSettings"), a("./constants/languages"), a("./controllers/BackendErrorMessageValidatorController"), a("./controllers/ChangeLanguageController"), a("./controllers/HomeController"), a("./controllers/MainController"), a("./controllers/PaymentController"), a("./controllers/TosController"), a("./directives/backendErrorMessageValidator"), a("./directives/changeLanguage"), a("./directives/customBody"), a("./directives/customBox"), a("./directives/customButton"), a("./directives/customLink"), a("./directives/customTitle"), a("./filters/amount"), a("./filters/ccYears"), a("./filters/range"), a("./filters/translateCountry"), a("./run/social"), a("./run/states"), a("./services/collections/HotspotPackages"), a("./services/color"), a("./services/hotspotConfig"), a("./services/hotspotPackages"), a("./services/interceptors/backendErrorMessageInterceptor"), a("./services/interceptors/responseErrorInterceptor"), a("./services/interceptors/templateVersionInterceptor"), a("./services/login"), a("./services/models/HotspotConfig"), a("./services/models/LoginMgr"), a("./services/payments"), a("./services/postMessage"), a("./services/preview"), a("./services/resourceTimestampParam"), a("./services/stringHelper"), a("./services/structureCollectionTransformer"), a("./services/structureModelTransformer"), a("./services/tos"), a("./services/urlHelper")
    }, {
        "./config/compile": 3,
        "./config/debugger": 4,
        "./config/env": 5,
        "./config/httpInterceptors": 6,
        "./config/routes": 7,
        "./config/site": 8,
        "./config/states": 9,
        "./config/translate": 10,
        "./constants/cookieKeys": 11,
        "./constants/events": 12,
        "./constants/guestAuth": 13,
        "./constants/heyDefaults": 14,
        "./constants/hotspotConfigPreviewDefaults": 15,
        "./constants/languageFlagMap": 16,
        "./constants/languageSettings": 17,
        "./constants/languages": 18,
        "./controllers/BackendErrorMessageValidatorController": 19,
        "./controllers/ChangeLanguageController": 20,
        "./controllers/HomeController": 21,
        "./controllers/MainController": 22,
        "./controllers/PaymentController": 23,
        "./controllers/TosController": 24,
        "./directives/backendErrorMessageValidator": 25,
        "./directives/changeLanguage": 26,
        "./directives/customBody": 27,
        "./directives/customBox": 28,
        "./directives/customButton": 29,
        "./directives/customLink": 30,
        "./directives/customTitle": 31,
        "./filters/amount": 32,
        "./filters/ccYears": 33,
        "./filters/range": 34,
        "./filters/translateCountry": 35,
        "./providers/bowserProvider": 37,
        "./providers/siteProvider": 38,
        "./run/social": 39,
        "./run/states": 40,
        "./services/collections/HotspotPackages": 41,
        "./services/color": 42,
        "./services/hotspotConfig": 43,
        "./services/hotspotPackages": 44,
        "./services/interceptors/backendErrorMessageInterceptor": 45,
        "./services/interceptors/responseErrorInterceptor": 46,
        "./services/interceptors/templateVersionInterceptor": 47,
        "./services/login": 48,
        "./services/models/HotspotConfig": 49,
        "./services/models/LoginMgr": 50,
        "./services/payments": 51,
        "./services/postMessage": 52,
        "./services/preview": 53,
        "./services/resourceTimestampParam": 54,
        "./services/stringHelper": 55,
        "./services/structureCollectionTransformer": 56,
        "./services/structureModelTransformer": 57,
        "./services/tos": 58,
        "./services/urlHelper": 59
    }],
    37: [function(a, b, c) {
        "use strict";
        angular.module("bowser", []).provider("bowser", [function() {
            var b = a("bowser");
            this.$get = [function() {
                return b
            }]
        }])
    }, {
        bowser: 1
    }],
    38: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").provider("site", [function() {
            var a;
            this.initActiveSite = function(b) {
                a = b
            }, this.$get = [function() {
                return {
                    getActiveSite: function() {
                        return a
                    },
                    setActiveSite: function(b) {
                        a = b
                    }
                }
            }]
        }])
    }, {}],
    39: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").run(["$location", "hello", "login", "stringHelper", function(a, b, c, d) {
            var e = window.UnifiPortalHotspotConfig ? window.UnifiPortalHotspotConfig.facebook_enabled : !1,
                f = window.UnifiPortalHotspotConfig ? window.UnifiPortalHotspotConfig.google_enabled : !1,
                g = e || f;
            if (g) {
                var h = {};
                if (e && (h.facebook = window.UnifiPortalHotspotConfig.facebook_app_id), f && (h.google = window.UnifiPortalHotspotConfig.google_client_id), b.init(h), document.referrer) {
                    var i = new URL(document.referrer);
                    d.endsWith(i.pathname, "oauth.html") && (-1 !== i.search.indexOf("by=facebook") && c.oAuthAuthorize("facebook", b.getAuthResponse("facebook")), -1 !== i.search.indexOf("by=google") && c.oAuthAuthorize("google", b.getAuthResponse("google")))
                }
            }
        }])
    }, {}],
    40: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").run(["$rootScope", "$state", function(a, b) {
            a.$on("$stateChangeStart", function(a, c, d) {
                c.redirectTo && (a.preventDefault(), b.go(c.redirectTo, d))
            }), a.$on("$stateChangeError", function(a, b, c, d, e, f) {
                a.preventDefault(), console.error(f)
            })
        }])
    }, {}],
    41: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("HotspotPackagesCollection", ["$resource", "resourceTimestampParam", "site", "structureCollectionTransformer", "UnifiPortalAPIBasePath", function(a, b, c, d, e) {
            return a(e + "guest/s/:site/hotspotpackages", b.getParam(), {
                get: {
                    transformResponse: d,
                    isArray: !0
                }
            })
        }])
    }, {}],
    42: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("color", [function() {
            function a(a, b, c) {
                return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }

            function b(a) {
                var b = "#" === a[0] ? a.slice(1) : a,
                    c = parseInt(b, 16),
                    d = {};
                return d.r = c >> 16, d.g = c >> 8 & 255, d.b = 255 & c, d
            }

            function c(a) {
                var b = a.r << 16 | a.g << 8 | a.b;
                return "#" + ("000000" + b.toString(16)).slice(-6)
            }

            function d(a) {
                var b, c, d = a.r / 255,
                    e = a.g / 255,
                    f = a.b / 255,
                    g = Math.max(d, e, f),
                    h = Math.min(d, e, f),
                    i = (g + h) / 2;
                if (g === h) b = c = 0;
                else {
                    var j = g - h;
                    switch (c = i > .5 ? j / (2 - g - h) : j / (g + h), g) {
                        case d:
                            b = (e - f) / j + (f > e ? 6 : 0);
                            break;
                        case e:
                            b = (f - d) / j + 2;
                            break;
                        case f:
                            b = (d - e) / j + 4
                    }
                    b /= 6
                }
                return {
                    h: Math.round(360 * b),
                    s: Math.round(100 * c),
                    l: Math.round(100 * i)
                }
            }

            function e(b) {
                var c, d, e, f = b.h / 360,
                    g = b.s / 100,
                    h = b.l / 100;
                if (0 === g) c = d = e = h;
                else {
                    var i = .5 > h ? h * (1 + g) : h + g - h * g,
                        j = 2 * h - i;
                    c = a(j, i, f + 1 / 3), d = a(j, i, f), e = a(j, i, f - 1 / 3)
                }
                return {
                    r: Math.round(255 * c),
                    g: Math.round(255 * d),
                    b: Math.round(255 * e)
                }
            }
            this.hexToRgba = function(a, c) {
                var d = b(a);
                return "rgba(" + [d.r, d.g, d.b, c].join(",") + ")"
            }, this.lightenColor = function(a, f) {
                var g = b(a),
                    h = d(g);
                h.l = h.l + f <= 100 ? h.l + f : 100;
                var i = e(h);
                return c(i)
            }, this.darkenColor = function(a, f) {
                var g = b(a),
                    h = d(g);
                h.l = h.l >= f ? h.l - f : 0;
                var i = e(h);
                return c(i)
            }
        }])
    }, {}],
    43: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("hotspotConfig", ["$q", "HotspotConfigModel", "site", function(a, b, c) {
            this.model = null, this.resolve = function() {
                return this.model || (this.model = new b(window.UnifiPortalHotspotConfig)), a.when(this.model)
            }, this.fetchHotspotConfig = function() {
                return this.model = b.get({
                    site: c.getActiveSite()
                }), this.model.$promise
            }, this.getModel = function() {
                return this.model
            }, this.setModel = function(a) {
                this.model = a
            }
        }])
    }, {}],
    44: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("hotspotPackages", ["_", "$q", "HotspotPackagesCollection", "hotspotConfig", "site", function(a, b, c, d, e) {
            this.collection = null, this.resolve = function(a) {
                return d.getModel().payment_enabled ? !this.collection || a ? this.fetchHotspotPackages() : this.collection.$promise : b.when()
            }, this.fetchHotspotPackages = function() {
                return this.collection = c.get({
                    site: e.getActiveSite()
                }), this.collection.$promise
            }, this.getCollection = function() {
                return this.collection
            }, this.getPayablePackages = function() {
                return a.filter(this.collection, function(a) {
                    return !!a.amount
                })
            }, this.getFreePackage = function() {
                return a.find(this.collection, function(a) {
                    return !a.amount
                })
            }, this.hasFreePackage = function() {
                return !!this.getFreePackage()
            }, this.hasPayablePackages = function() {
                return this.getPayablePackages().length > 0
            }, this.setCollection = function(a) {
                this.collection = a
            }
        }])
    }, {}],
    45: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("backendErrorMessageInterceptor", ["$q", "$rootScope", "EVENTS", function(a, b, c) {
            return {
                responseError: function(d) {
                    return d.msg && b.$broadcast(c.BACKEND_ERROR_MESSAGE, d.msg), a.reject(d)
                }
            }
        }])
    }, {}],
    46: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("responseErrorInterceptor", ["$q", function(a) {
            return {
                response: function(b) {
                    var c = b.data;
                    return c.meta && c.data && "ok" !== c.meta.rc ? a.reject({
                        msg: c.meta.msg
                    }) : b
                }
            }
        }])
    }, {}],
    47: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("templateVersionInterceptor", ["stringHelper", "UnifiPortalVersion", "urlHelper", function(a, b, c) {
            return {
                request: function(d) {
                    var e = d.url;
                    if (a.startsWith(e, "views/") && a.endsWith(e, ".html")) {
                        var f = c.hasQueryString(e) ? "?" : "&";
                        d.url = e + f + "v=" + b
                    }
                    return d
                }
            }
        }])
    }, {}],
    48: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("login", ["_", "$http", "$q", "$timeout", "$translate", "$window", "bowser", "hello", "heyToasts", "hotspotConfig", "LoginMgrModel", "site", function(a, b, c, d, e, f, g, h, i, j, k, l) {
            function m() {
                return {
                    site: l.getActiveSite()
                }
            }

            function n(a) {
                return f.location.href = a.redirect_url ? a.redirect_url : "http://google.com", a
            }
            this.facebookLogin = function() {
                var b = j.getModel(),
                    d = c.defer(),
                    f = ["public_profile"];
                return b.facebook_scope_email === !0 && f.push("email"), h("facebook").login({
                    display: g.android ? "page" : "popup",
                    redirect_uri: window.location.origin + "/guest/s/" + l.getActiveSite() + "/oauth.html?by=facebook",
                    scope: f.join(",")
                }).then(a.bind(function(a) {
                    var b = a.authResponse,
                        c = this.oAuthAuthorize("facebook", b);
                    d.resolve(c)
                }, this), function(a) {
                    switch (a.error_reason) {
                        case "user_denied":
                            i.pushError(e.instant("SOCIAL_FACEBOOK_ERROR_OAUTH_USER_DENIED"));
                            break;
                        default:
                            i.pushError(e.instant("SOCIAL_FACEBOOK_ERROR_OAUTH"))
                    }
                    d.reject(a)
                }), d.promise
            }, this.googleLogin = function() {
                var b = j.getModel(),
                    d = c.defer(),
                    f = ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/userinfo.profile"];
                b.google_scope_email === !0 && f.push("https://www.googleapis.com/auth/userinfo.email");
                var k = {
                    display: g.android || g.ios ? "page" : "popup",
                    redirect_uri: window.location.origin + "/guest/s/" + l.getActiveSite() + "/oauth.html?by=google",
                    scope: f.join(",")
                };
                return b.google_domain && (k.hd = b.google_domain), h("google").login(k).then(a.bind(function(a) {
                    var b = a.authResponse,
                        c = this.oAuthAuthorize("google", b);
                    d.resolve(c)
                }, this), function(a) {
                    switch (a.error_reason) {
                        default: i.pushError(e.instant("SOCIAL_GOOGLE_ERROR_OAUTH"))
                    }
                    d.reject(a)
                }), d.promise
            }, this.oAuthAuthorize = function(a, b) {
                var c = new k;
                return c.by = a, c.access_token = b.access_token, c.client_id = b.client_id, c.expires_in = b.expires_in, c.$save(m()).then(n)["catch"](function(a) {
                    "api.err.InvalidOAuthToken" === a.msg ? i.pushError(e.instant("SOCIAL_ERROR_INVALID_TOKEN")) : i.pushError(e.instant("SOCIAL_ERROR_CONNECTION"))
                })
            }, this.freeTrialLogin = function(a) {
                var b = new k;
                return b.by = "credit", b["package"] = a, b.$save(m()).then(n)
            }, this.noAuthLogin = function() {
                var a = new k;
                return a.$save(m()).then(n)
            }, this.passwordLogin = function(a) {
                var b = new k;
                return b.password = a, b.$save(m()).then(n)
            }, this.paymentLogin = function(a, b) {
                var c = new k(b);
                return c.by = "credit", c["package"] = a, c.cc_number = c.cc_number.replace(/[\s-]/g, ""), c.$save(m()).then(n)
            }, this.voucherLogin = function(a) {
                var b = new k;
                return b.by = "voucher", b.voucher = a, b.$save(m()).then(n)
            }
        }])
    }, {}],
    49: [function(a, b, c) {
        "use strict";
        var d = "data:image";
        angular.module("app-unifi-hotspot-portal").factory("HotspotConfigModel", ["_", "$resource", "resourceTimestampParam", "site", "structureModelTransformer", "UnifiPortalAPIBasePath", "UnifiPortalAssetsBasePath", function(a, b, c, e, f, g, h) {
            var i = b(g + "guest/s/:site/hotspotconfig", c.getParam(), {
                    get: {
                        transformResponse: f
                    }
                }),
                j = "images/default/",
                k = "background.jpg",
                l = "logo.png";
            return i.prototype._getImageUrl = function(a, b) {
                if (this[a] && this[b]) {
                    var c = this[b].substring(0, d.length) === d;
                    return c ? this[b] : h + ["guest", "s", e.getActiveSite(), "portalfile", this[b] + "?portalfile=true"].join("/")
                }
            }, i.prototype.getLogoUrl = function() {
                var a = this._getImageUrl("logo_enabled", "logo_filename");
                return this.logo_enabled && !a ? j + l : a
            }, i.prototype.getBgImageUrl = function() {
                var a = this._getImageUrl("bg_image_enabled", "bg_image_filename");
                return this.bg_image_enabled && !a ? j + k : a
            }, i.prototype.getCountryCodes = function() {
                return a.map(this.ccodes, function(a) {
                    return a.key
                })
            }, i.prototype.getCountryNamesMap = function() {
                return a.reduce(this.ccodes, function(a, b) {
                    return a[b.key] = b.name, a
                }, {})
            }, i
        }])
    }, {}],
    50: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("LoginMgrModel", ["$resource", "resourceTimestampParam", "structureModelTransformer", "UnifiPortalAPIBasePath", function(a, b, c, d) {
            var e = a(d + "guest/s/:site/login", b.getParam(), {
                save: {
                    method: "POST",
                    transformResponse: c
                }
            });
            return e
        }])
    }, {}],
    51: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("payments", ["$q", "hotspotConfig", "hotspotPackages", "_", function(a, b, c, d) {
            this.selectedPackage = null, this.resolve = function(a) {
                return this.findSelectedPackage(a)
            }, this.findSelectedPackage = function(e) {
                var f = b.getModel(),
                    g = c.getPayablePackages(),
                    h = f.payment_enabled;
                return h && g.length > 0 && (this.selectedPackage = d.find(g, function(a) {
                    return a._id === e
                }), this.selectedPackage) ? a.when(this.selectedPackage) : a.reject()
            }
        }])
    }, {}],
    52: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("postMessage", ["$window", function(a) {
            var b = [];
            this.registerListener = function(a) {
                b.push(a)
            }, this.sendToParent = function(b) {
                a.parent.postMessage(b, "*")
            }, a.onmessage = function(a) {
                b.forEach(function(b) {
                    b.call(b, a.data)
                })
            }
        }])
    }, {}],
    53: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("preview", ["$rootScope", "hotspotConfig", "HotspotConfigModel", "hotspotPackages", "HotspotPackagesCollection", "HOTSPOT_CONFIG_PREVIEW_DEFAULTS", "postMessage", function(a, b, c, d, e, f, g) {
            this.resolve = function() {
                var h = new c(f),
                    i = new e([]);
                return b.setModel(h), d.setCollection(i), g.registerListener(function(c) {
                    var g = c.hotspotConfig,
                        h = c.hotspotPackages;
                    a.$apply(function() {
                        angular.extend(b.getModel(), f, g), d.setCollection(new e(h))
                    })
                }), !0
            }
        }])
    }, {}],
    54: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("resourceTimestampParam", [function() {
            this.getParam = function() {
                return {
                    t: (new Date).getTime()
                }
            }
        }])
    }, {}],
    55: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("stringHelper", [function() {
            this.startsWith = function(a, b) {
                return 0 === a.indexOf(b)
            }, this.endsWith = function(a, b) {
                return -1 !== a.indexOf(b, a.length - b.length)
            }
        }])
    }, {}],
    56: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("structureCollectionTransformer", [function() {
            return function(a) {
                var b = JSON.parse(a);
                return b.data && b.meta && (b = b.data), b
            }
        }])
    }, {}],
    57: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").factory("structureModelTransformer", ["_", function(a) {
            return function(b) {
                var c = angular.fromJson(b);
                if (c.data && c.meta) {
                    if ("error" === c.meta.rc) return c;
                    c = c.data
                }
                return a.isArray(c) && (c = c[0]), c
            }
        }])
    }, {}],
    58: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("tos", ["$cookieStore", "COOKIE_KEYS", "hotspotConfig", function(a, b, c) {
            function d() {
                return c.model ? b.TOS_PREFIX + c.model.siteId : null
            }
            this.accepted = d() ? !!a.get(d()) : !1, this.accept = function() {
                var b = d;
                b() && a.put(b(), !0), this.accepted = !0
            }, this.reject = function() {
                var b = d();
                b && a.remove(b), this.accepted = !1
            }, this.isAccepted = function() {
                return this.accepted
            }
        }])
    }, {}],
    59: [function(a, b, c) {
        "use strict";
        angular.module("app-unifi-hotspot-portal").service("urlHelper", [function() {
            this.hasQueryString = function(a) {
                return a.indexOf("?")
            }
        }])
    }, {}]
}, {}, [36]);
