! function (e, t, i) {
    class n {
        constructor() {
            if (this.instance) return this.instance;
            if (this.instance = e.a11y = this, e.version = this.version = "4.2.2", this.GetDefaultProp(), this.SetPolyfills(), this.setNativePrototypes(), this.AssignConst("isDev", !1), this.AssignConst("SHOW_TIMEOUT", 400), this.setConsts(), e.isIframe = !e.forceBtnAppearance && this.isIframe, this.isIframe && this.addClass(i, "INDisIframe"), !this.IsSitekeyValid(e.sitekey)) return !1;
            if (Object.INDdefineProperty(window, "interdeal", {
                writable: !1
            }), this.GetBrowserDetails(), Object.INDkeys(e.domains || {}).length) {
                for (let t in e.domains) try {
                    new URL(e.domains[t])
                } catch (e) {
                    return void this.INDLog(`%cNo ${t} domain specified%c`, this.LogPresets("red"))
                }
                this.domains = e.domains, this.INDLog(`%c[IND]%c Version %c${this.version}%c`, `${this.LogPresets()} border-radius:3px 0 0 3px;`, this.LogPresets("green"), `${this.LogPresets()} border-radius:0 3px 3px 0`, ""), e.getDefaultProp = this.GetDefaultProp, e.addStyle = this.addStyle, this.initInterdealFunctions(), e.Event = this.Event = this.GetDefaultProp("Event"), e.JSON = this.JSON = this.GetDefaultProp("JSON"), e.Function = this.Function = this.GetDefaultProp("Function"), this.keyCodes = this.setKeyCodes(), this.head = e.head = t, this.body = i, e.mode = {}, this.getModeFromStroage(), e.ShowMenu = e.setNavigation = e.ErrMenu = this.ErrMenu, e.setLanguage(sessionStorage.getItem("INDcustomMenuLang-full-ISO") || e.Menulang), e.setPosition(e.Position), this.initWrap(), this.initWindowEvents(), this.LoadDefaults((() => {
                    if (!e.isMethodsSet && Object.INDkeys(e.mode).length) {
                        if (e.isPending = !0, this.a11yBtn && (this.a11yBtn.disabled = !0), this.isIframe) return;
                        window.INDsetTimeout((() => {
                            this.startA11y()
                        }), 0)
                    }
                })), e.a11y.INDWrap.INDappendChild(e.a11y.dataWrap), e.LoadData = this.LoadData(), this.SetGlobalEvents(), e.isDefined = !0, e.isIframe ? this.postToTop(null, `{"action" : "${e.a11y.validAction.getModes}"}`, "*") : this.postToTop(null, `{"action" : "${e.a11y.validAction.a11yDone}"}`, "*"), this.checkWrapLocation()
            } else this.INDLog("%cNo domains specified%c", this.LogPresets("red"))
        }
        get methodNames() {
            return ["INDNavigation", "INDTextReader", "INDVoiceCmd", "INDEpilepsy", "INDColorScheme", "INDFontSize", "INDReadableFont", "INDBigCursor", "INDAltText", "INDHighlight", "INDVirtualKeyboard", "INDMagnifier", "INDdictionary", "INDfocusmode", "INDreadguide", "INDtextmagnifier", "customcolorUpadate", "setColorScheme"]
        }
        get isIframe() {
            try {
                return window.self != window.top
            } catch (e) {
                return !0
            }
        }
        startA11y() {
            this.isLoading = !0, this.setLoader(), this.getA11yMenu(!0).then((() => {
                this.getA11yStyle(), this.getA11y(e.mode), document.body.INDaddEventListener("INDdataFinished", (t => {
                    e.isPending = !1, this.removeLoader(), this.a11yBtn && (this.a11yBtn.disabled = !1)
                }))
            })).catch((e => { }))
        }
        setLoader() {
            this.toggleLoader()
        }
        removeLoader() {
            this.toggleLoader()
        }
        toggleLoader(e) {
            if (!this.a11yBtn && !(this.a11yBtn = document.getElementById("INDmenu-btn"))) return;
            let t = !(!this.a11yBtn.querySelector("#INDloader") && !e);
            if (t) {
                let e = this.a11yBtn.querySelector("#INDloader");
                e && e.remove()
            } else this.a11yBtn.innerHTML += `\n\t\t\t\t\t\t<div id="INDloader" role="status" aria-busy="true">\n\t\t\t\t\t\t\t<div class="INDloader"></div>\n\t\t\t\t\t\t</div>`.INDtrim();
            t ? this.a11yBtn.classList.remove("INDbtn-loading") : this.a11yBtn.classList.add("INDbtn-loading")
        }
        setConsts() {
            this.setValidMethods(), this.setValidAction(), this.setConstFunctions()
        }
        setValidMethods() {
            this.AssignConst("validMethods", {
                soundreder: "setNavigation",
                keyboard: "setNavigation",
                smartnav: "setNavigation",
                virtualKeyboard: "setVirtualKeyboard",
                dictionary: "setDictionary",
                textreader: "setTextReader",
                textmagnifier: "settextmagnifier",
                voicecmd: "setVoiceCommands",
                epilepsy: "setEpilepsy",
                customcolor: "customcolorUpadate",
                monochrome: "setColorScheme",
                blackwhite: "setColorScheme",
                whiteblack: "setColorScheme",
                autoConFix: "setColorScheme",
                highHue: "setColorScheme",
                lowHue: "setColorScheme",
                fontsizeinc: "setFontSize",
                fontsizedec: "setFontSize",
                linesizedec: "setFontSize",
                linesizeinc: "setFontSize",
                wordsizeinc: "setFontSize",
                wordsizedec: "setFontSize",
                textmagnifier: "settextmagnifier",
                readablefont: "setReadableFont",
                whitecursor: "setBigCursor",
                blackcursor: "setBigCursor",
                magnifier: "setZoom",
                links: "setHighlight",
                headers: "setHighlight",
                alttext: "setAltText",
                switchoff: "switchOff",
                statement: "statement",
                feedback: "feedback",
                hideButton: "hideA11yButton",
                readguide: "setReadGuide",
                focusmode: "setfocusMode"
            })
        }
        setValidAction() {
            this.AssignConst("validAction", {
                checkNagich: "checkNagich",
                getModes: "getModes",
                setMode: "setMode",
                setInIframe: "setInIframe",
                a11yDone: "a11yDone",
                openMenu: "openMenu"
            })
        }
        setConstFunctions() {
            Object.INDdefineProperty(this, "isModeValid", {
                writable: !1,
                value: t => t in e.a11y.validMethods
            })
        }
        async IsNagichOnTop() {
            return await new Promise(((t, i) => {
                function n({
                    data: i
                }) {
                    window.INDremoveEventListener("message", n), t(!!e.ParseJSON(i).action)
                }
                if (window.INDaddEventListener("message", n.INDbind(this)), window.top != window.self) try {
                    this.postToTop({
                        action: "checkNagich"
                    })
                } catch (e) { }
                e.isIframe || (t(!1), window.INDremoveEventListener("message", n)), e.waitForTop || (INDsetTimeout((() => t(!1)), 500), window.INDremoveEventListener("message", n))
            }))
        }
        postToTop(t) {
            "string" != typeof t && (t = e.JSON.stringify(t));
            try {
                window.top.INDpostMessage(t)
            } catch (e) {
                window.top.postMessage(t)
            }
        }
        initWindowEvents() {
            function t(t, i) {
                t = t || document.querySelectorAll(`iframe[src]:not([src^="javascript"])`);
                for (let n of t) try {
                    n.contentWindow.INDpostMessage(e.JSON.stringify(i), n.src)
                } catch (e) { }
            }
            window.INDaddEventListener("message", function (i) {
                try {
                    const n = e.a11y.GetMsgData(i.data),
                        s = e.a11y.validAction;
                    let o = document.querySelectorAll(`iframe[src]:not([src^="javascript"])`);
                    switch (n.action) {
                        case s.openMenu:
                            e.a11y.a11yBtn.click();
                            break;
                        case s.checkNagich:
                            e.iframe || t(o, n);
                            break;
                        case s.a11yDone:
                        case s.getModes:
                            Object.INDkeys(e.mode).length && t(o, {
                                action: s.setInIframe,
                                modes: e.mode
                            });
                            break;
                        case s.setInIframe:
                            let i = Object.INDentries(n.modes).INDfilter((([e, t]) => this.isModeValid(t) && !document.body.matches(e.replace(/^IND.+/g, (e => `.IND${e.replace(/^IND/gi, "").toLowerCase()}`))))).INDmap((([e, t]) => ({
                                [e]: t
                            })));
                            Object.INDkeys(i).length && !this.isSet && (this.isSet = !0, Object.INDassign(e.mode, i), t(o, n), this.startA11y());
                            break;
                        case s.setMode:
                            let a = n.optName;
                            this.isModeValid(a) && e.LoadData((function () {
                                var t = e[e.a11y.validMethods[a]];
                                "function" == typeof t && t(n.data ? n : a)
                            }));
                            break;
                        default:
                            break
                    }
                } catch (e) {
                    this.INDLog(e, "err")
                }
            }.bind(this)), t(null, {
                action: "checkNagich"
            })
        }
        GetCookie(e) {
            var t = ("; " + document.cookie).INDsplit("; " + e + "=");
            if (2 == t.length) return t.pop().split(";").shift()
        }
        IsSitekeyValid(t) {
            return /^[a-fA-F0-9]{32}$/.test(t) ? !e.isDefined || (this.INDLog("%c[IND] Duplicate Interdeal code; Installed " + e.counter() + " times.%c", this.LogPresets("red")), !1) : (this.INDLog("%c[IND] SiteKey Error.%c", this.LogPresets("red")), !1)
        }
        AssignConst(e, t) {
            Object.INDdefineProperty(this, e, {
                value: t,
                writable: !1,
                enumerable: !0,
                configurable: !1
            }), Object.INDfreeze(this[e])
        }
        CreateElement(e, t) {
            if ("string" == typeof e) {
                var i = document.createElement(e);
                if (t && "object" == typeof t)
                    for (var n in t) {
                        var s = t[n];
                        if ("object" == typeof s) {
                            var o;
                            switch (n) {
                                case "attributes":
                                    o = "setAttribute";
                                    break;
                                case "style":
                                    Object.assign(i.style, s);
                                    continue;
                                case "events":
                                    o = "addEventListener";
                                    break
                            }
                            for (var a in s) i[o](a, s[a])
                        } else "string" == typeof s && (i["html" == n ? "innerHTML" : "text" == n ? "innerText" : "null"] = s)
                    }
                return i
            }
            this.INDLog("%c Non-string element. %c", this.LogPresets("red"))
        }
        SetGlobalEvents() {
            let t = window.document;
            this.body.classList.contains("INDmenu-open") && e.a11y.ToggleGlovalEvents(!0), t.INDaddEventListener("keydown", (function (t) {
                if (t.ctrlKey && t.which === e.a11y.keyCodes.f10)
                    if (e.isIframe) try {
                        this.postToTop(null, {
                            action: e.a11y.validAction.openMenu
                        })
                    } catch (e) { } else e.a11y.a11yBtn.click();
                t.ctrlKey && t.which === e.a11y.keyCodes.f11 ? e.quickAccess.blindShorcut.click() : t.which === e.a11y.keyCodes.esc && e.CloseMenu()
            }))
        }
        ToggleGlovalEvents(t) {
            let i = window.document;

            function n(t) {
                null != e.menu.querySelector("#INDloader") || e.a11y.isOrhas(e.INDWrap, t.target) || e.CloseMenu()
            }
            t ? (i.INDaddEventListener("click", n), i.INDaddEventListener("touchstart", n, {
                passive: !0
            }), i.INDaddEventListener("focusin", n)) : (i.INDremoveEventListener("click", n), i.INDremoveEventListener("touchstart", n, {
                passive: !0
            }), i.INDremoveEventListener("focusin", n))
        }
        Rebuild() {
            delete e.a11y, e.Menu = null, e.iframe = null, e.isDefined = !1, new n
        }
        GetDefaultProp(t) {
            if (!e.iframe) {
                let t = e.iframe = this.CreateElement("iframe", {
                    attributes: {
                        title: "IND - Default Props"
                    },
                    style: {
                        display: "none"
                    }
                });
                document.body.appendChild(t)
            }
            return t ? e.iframe.contentWindow[t] : e.iframe.contentWindow
        }
        setKeyCodes() {
            return {
                esc: 27,
                tab: 9,
                f10: 121,
                f11: 122
            }
        }
        SetPolyfills() {
            var t = e.iframe.contentWindow.Array.prototype.slice;
            Function.prototype.INDbind = function (e) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not a function");
                var i = t.call(arguments, 1),
                    n = i.length,
                    s = this,
                    o = function () { },
                    a = function () {
                        return i.length = n, i.push.apply(i, arguments), s.apply(o.prototype.isPrototypeOf(this) ? this : e, i)
                    };
                return this.prototype && (o.prototype = this.prototype), a.prototype = new o, a
            }
        }
        setNativePrototypes() {
            let t = e.iframe.contentWindow,
                i = {
                    Element: {
                        prototype: ["removeEventListener", "addEventListener", "removeAttribute", "hasChildNodes", "dispatchEvent", "setAttribute", "getAttribute", "insertBefore", "appendChild", "isSameNode", "contains", "prepend", "matches", "append"]
                    },
                    Node: {
                        prototype: ["removeEventListener", "addEventListener", "dispatchEvent", "setAttribute", "insertBefore", "getAttribute", "appendChild", "contains", "prepend", "append"]
                    },
                    EventTarget: {
                        prototype: ["removeEventListener", "addEventListener", "dispatchEvent", "insertBefore", "setAttribute", "getAttribute", "appendChild", "contains", "prepend", "append"]
                    },
                    window: {
                        console: ["assert", "debug", "error", "warn", "info", "log"],
                        methods: ["setInterval", "postMessage", "setTimeout", "fetch"]
                    },
                    String: {
                        prototype: ["toUpperCase", "toLowerCase", "replaceAll", "trimStart", "substring", "includes", "matchAll", "indexOf", "trimEnd", "replace", "concat", "search", "match", "split", "slice", "trim"]
                    },
                    Function: {
                        prototype: ["apply", "call", "bind"]
                    },
                    Array: {
                        prototype: ["toLocaleString", "lastIndexOf", "reduceRight", "copyWithin", "findIndex", "includes", "toString", "entries", "flatMap", "forEach", "indexOf", "reverse", "unshift", "values", "filter", "concat", "reduce", "splice", "shift", "every", "slice", "fill", "find", "flat", "join", "keys", "push", "some", "sort", "map", "pop"],
                        methods: ["isArray", "from", "of"]
                    },
                    Object: {
                        prototype: ["propertyIsEnumerable", "hasOwnProperty", "isPrototypeOf"],
                        methods: ["getOwnPropertyDescriptors", "getOwnPropertyDescriptor", "getOwnPropertySymbols", "getOwnPropertyNames", "preventExtensions", "defineProperties", "defineProperty", "getPrototypeOf", "isExtensible", "fromEntries", "isSealed", "isFrozen", "entries", "assign", "create", "freeze", "keys", "seal", "is"]
                    }
                },
                n = ["methods"];
            "INDincludes" in window.Array.prototype || t.Object.defineProperty(window.Array.prototype, "INDincludes", {
                enumerable: !1,
                value: t.Array.prototype.includes,
                writable: !1
            });
            for (let t in i) s(t, i[t], window, e.iframe.contentWindow);

            function s(i, o, a, r, d = "IND") {
                if (o instanceof Array)
                    for (let i in o) try {
                        let e = `${d || ""}${o[i]}`;
                        !a.hasOwnProperty(e) && r[o[i]] && (t.Object.defineProperty(a, e, {
                            enumerable: !1,
                            value: r[o[i]],
                            writable: !1
                        }), t.Object.defineProperty(r, e, {
                            enumerable: !1,
                            value: r[o[i]],
                            writable: !1
                        }))
                    } catch (t) {
                        e.a11y.INDLog(`Failed to assign function ${i} : `, t)
                    } else
                    for (let e in o) s(e, o[e], n.INDincludes(e) ? a[i] : a[i][e], n.INDincludes(e) ? r[i] : r[i][e])
            }
        }
        INDLog() {
            e.noLogs && !e.a11y.isDev || (e.isColorLog ? console.INDlog.apply(console, arguments) : "string" == typeof arguments[0] ? console.INDlog(arguments[0].replace(/%c/g, "")) : console.INDlog(arguments[0]))
        }
        LogPresets(e) {
            switch (e) {
                case "green":
                    return "color: Black; background: #50e590; font-weight: bold; padding: 3px";
                case "red":
                    return "color: White; background: #ca0808; font-weight: bold; padding: 3px;";
                case "yellow":
                    return "color: Black; background: #e7ea04; font-weight: bold; padding: 3px;";
                case "purple":
                    return "color: Black; background: #d800ff; font-weight: bold; padding: 3px;";
                case "cyan":
                    return "color: Black; background: #00b9ff; font-weight: bold; padding: 3px;";
                case "pink":
                    return "color: Black; background: #ff0082; font-weight: bold; padding: 3px;";
                default:
                    return "color: White; background: #17384c; font-weight: bold; padding: 3px;"
            }
        }
        ParseJSON(t) {
            try {
                return e.JSON.parse(t)
            } catch (e) {
                return !1
            }
        }
        GetMsgData(e) {
            return this.ParseJSON(e) || e
        }
        GetBrowserDetails() {
            let t = e.OS = (i = "Unknown OS", -1 != navigator.appVersion.INDindexOf("Win") && (i = "Windows"), -1 != navigator.appVersion.INDindexOf("Mac") && (i = "MacOS"), -1 != navigator.appVersion.INDindexOf("X11") && (i = "UNIX"), -1 != navigator.appVersion.INDindexOf("Linux") && (i = "Linux"), {
                name: i
            });
            var i;
            let n = e.browser = (o = navigator.userAgent, a = o.INDmatch(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? {
                name: "Explorer",
                version: +((s = /\brv[ :]+(\d+)/g.exec(o) || [])[1] || "")
            } : "Chrome" === a[1] && null !== (s = o.INDmatch(/\b(OPR|Edge)\/(\d+)/)) ? {
                name: s[1].INDreplace("OPR", "Opera"),
                version: +s[2]
            } : "MSIE" === a[1] && /compatible;/i.test(o) ? (s = /trident\/(\d)/i.exec(o) || [], {
                name: "Explorer",
                version: a[2] + " (Compatibility Mode, Orig: " + (+s[1] + 4) + ")"
            }) : (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (s = o.INDmatch(/version\/(\d+)/i)) && a.INDsplice(1, 1, s[1]), {
                name: a[0],
                version: +a[1]
            }));
            var s, o, a;
            e.isColorLog = !/explorer|edge/i.test(n.name), e.isDesktop = !0, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e.isDesktop = !1), (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e.isDesktop = !1), this.INDLog(`%c[IND]%c You are running %c ${t.name} %c Operating system, %c ${n.name} %c browser, version: %c ${n.version}`, `${this.LogPresets()} border-radius:3px 0 0 3px;`, this.LogPresets("green"), this.LogPresets(), this.LogPresets("green"), this.LogPresets(), this.LogPresets("green"), `${this.LogPresets()} border-radius:0 3px 3px 0`), e.isAccChecker = /equalbot/i.test(navigator.userAgent)
        }
        SetLocale(t, i) {
            t = e.setLanguage(t);
            let n = e.a11y,
                s = n.locale[e.a11y.countryCode],
                o = e.a11y.a11yBtn.querySelector(".INDhiddenText");
            (i = void 0 === i || i) && (sessionStorage.setItem("INDcustomMenuLang", t), sessionStorage.setItem("INDcustomMenuLang-full-ISO", e.fullLangISO)), document.querySelector("html").INDsetAttribute("lang", t), s && (e.shortcuts && e.shortcuts.setContents(), n.a11yBtn.INDsetAttribute("data-drag-content", `\n${e.a11y.locale[e.a11y.countryCode].a11yBtn.drag}`), o && (o.innerText = s.a11yBtn.txt)), e.locale && null == s ? window.INDfetch(`${e.domains.acc}?${e.a11y.SerializeArgs({ getLocale: !0, ver: e.version, key: e.sitekey, domainName: location.hostname.replace(/^www\./i, ""), tabletDetaction: e.isDesktop ? "off" : "on", menuLang: this.a11y.countryCode, Position: e.menuPos })}`, {
                method: "GET"
            }).then((async i => {
                n.locale[n.countryCode] = await window.INDfetch(`${e.domains.js}assets/locale/${n.countryCode}.json`).then((e => e.json()));
                let s = `interdeal.locale[interdeal.a11y.countryCode]=${await i.text()}`;
                e.a11y.addScript(s), e.shortcuts && e.shortcuts.setContents(), o && (o.innerText = n.locale[n.countryCode].a11yBtn.txt), n.a11yBtn.INDsetAttribute("data-drag-content", `\n${n.locale[n.countryCode].a11yBtn.drag}`), e.RefreshModules(t), document.body.INDdispatchEvent(new Event("INDlanguageChanged", {
                    bubbles: !0,
                    cancelable: !0
                }))
            })).catch((e => {
                throw n.INDLog(e, "err"), e
            })) : (e.RefreshModules && e.RefreshModules(t), document.body.INDdispatchEvent(new Event("INDlanguageChanged", {
                bubbles: !0,
                cancelable: !0
            })))
        }
        showINDwrap() {
            this.INDWrap.style.display = "block"
        }
        async InitButtonStyle() {
            let t = e.btnStyle,
                i = this.a11yBtn,
                n = e.a11y.locale[e.a11y.countryCode].a11yBtn.txt;
            const s = `\n\t\t\t\t<svg id="INDmenu-btn-moveArrow" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n\t\t\t\t\t\tx="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" xml:space="preserve">\n\t\t\t\t\t<path fill="#010101" d="M25.904,13.439c-0.189,0.022-0.364,0.109-0.498,0.244l-3.352,3.352c-0.346,0.307-0.378,0.836-0.07,1.183\n\t\t\t\t\t\tc0.307,0.347,0.836,0.378,1.182,0.071c0.027-0.023,0.053-0.049,0.076-0.076l1.92-1.92v6.361C25.156,23.098,25.557,23.51,26,23.51\n\t\t\t\t\t\tc0.442,0,0.844-0.412,0.838-0.855v-6.361l1.92,1.92c0.305,0.348,0.834,0.385,1.183,0.08s0.384-0.834,0.079-1.182\n\t\t\t\t\t\tc-0.023-0.027-0.049-0.053-0.075-0.076l-3.351-3.352C26.414,13.502,26.159,13.41,25.904,13.439z M17.525,21.809\n\t\t\t\t\t\tc-0.189,0.025-0.365,0.114-0.496,0.253l-3.352,3.351c-0.323,0.326-0.323,0.853,0,1.178l3.352,3.353\n\t\t\t\t\t\tc0.304,0.348,0.833,0.384,1.182,0.079c0.348-0.304,0.385-0.833,0.08-1.182c-0.023-0.026-0.049-0.053-0.075-0.077l-1.921-1.919h6.354\n\t\t\t\t\t\tc0.443,0.008,0.848-0.395,0.848-0.838c0-0.441-0.404-0.844-0.848-0.838h-6.354l1.921-1.928c0.331-0.324,0.337-0.854,0.015-1.186\n\t\t\t\t\t\tC18.047,21.867,17.787,21.775,17.525,21.809z M34.283,21.809c-0.462,0.05-0.794,0.463-0.745,0.922\n\t\t\t\t\t\tc0.02,0.193,0.108,0.373,0.247,0.51l1.919,1.928h-6.354c-0.029,0-0.058,0-0.086,0c-0.439,0.023-0.818,0.443-0.795,0.882\n\t\t\t\t\t\tc0.022,0.438,0.443,0.816,0.881,0.794h6.354l-1.919,1.919c-0.348,0.309-0.38,0.838-0.073,1.184c0.308,0.347,0.838,0.379,1.184,0.072\n\t\t\t\t\t\tc0.027-0.025,0.053-0.05,0.075-0.076l3.353-3.353c0.322-0.325,0.322-0.852,0-1.178l-3.353-3.351\n\t\t\t\t\t\tC34.793,21.875,34.538,21.782,34.283,21.809z M25.992,28.502c-0.442,0.005-0.839,0.413-0.83,0.855v6.353l-1.92-1.919\n\t\t\t\t\t\tc-0.178-0.187-0.433-0.279-0.689-0.254c-0.46,0.05-0.793,0.463-0.744,0.923c0.021,0.193,0.107,0.372,0.246,0.509l3.352,3.352\n\t\t\t\t\t\tc0.327,0.327,0.857,0.328,1.186,0.001c0,0,0.001-0.001,0.002-0.001l3.351-3.352c0.347-0.307,0.379-0.836,0.072-1.183\n\t\t\t\t\t\ts-0.838-0.379-1.184-0.071c-0.027,0.023-0.053,0.049-0.075,0.076l-1.92,1.919v-6.353C26.848,28.91,26.438,28.498,25.992,28.502z"/>\n\t\t\t\t</svg>`;
            let o = Object.INDassign({
                type: 10,
                shape: "semicircle",
                outline: !0
            }, t && t.icon || {}),
                a = [],
                r = "";
            for (let e in o) switch (e) {
                case "type":
                    "string" == typeof o.type ? i.innerHTML = `${s}<span>${o.type}</span>` : "number" == typeof o.type && a.INDpush(window.INDfetch(`${this.domains.js}assets/images/${o.type}.svg`));
                    break;
                case "outline":
                    o[e] && (r += `INDoutline-btn `);
                    break;
                case "arrow":
                    let t = o.arrow;
                    if ("object" == typeof t) {
                        r += `INDarrow-btn INDarrow-${t.direction && "string" == typeof t.direction && /(left|right|up|down)/.test(t.direction.toLowerCase()) ? t.direction.INDtoLowerCase() : "right"}-btn INDarrow-${t.position && "string" == typeof t.position && /(before|after)/.test(t.position.toLowerCase()) ? t.position.INDtoLowerCase() : "before"}-btn`
                    }
                    break;
                default:
                    r += `IND${o[e]}-btn `;
                    break
            }
            if (r.trim() && this.addClass(i, r.trim()), await Promise.all(a).then((e => Promise.all(e.INDmap((e => this.HandleFetch(e)))))).then((t => {
                for (let a of t) "svg" == a.type && (i.innerHTML = (o = a.data, s + o + e.a11y.MakeHidden(n).outerHTML + i.innerHTML));
                var o;
                document.body.INDdispatchEvent(new this.Event("INDbuttonRevealed")), this.showINDwrap()
            })).catch((e => {
                404 == e.code && "svg" == e.type && (i.innerHTML = `${s}<span>${n}</span>`)
            })), t) var d = t.vPosition,
                c = t.scale,
                l = t.color;
            d && (e.isDesktop && null != d[0] && d[0] != typeof void 0 && (i.style.top = Number(d[0]) ? `${d[0]}px` : d[0]), e.isDesktop || null == d[1] || d[1] == typeof void 0 || (i.style.bottom = Number(d[1]) ? `${d[1]}px` : d[1])), c && (e.isDesktop && null != c[0] && c[0] != typeof void 0 && this.CssVar(i, "--indscale", c[0]), e.isDesktop || null == c[1] || c[1] == typeof void 0 || this.CssVar(i, "--indscale", c[1])), l && ("object" == typeof l ? (this.CssVar(i, "--indmaincolor", l.main), this.CssVar(i, "--indsecondcolor", l.second)) : this.CssVar(i, "--indmaincolor", l)), e.draggable = 0 != e.draggable, e.draggable && this.initDragSystem()
        }
        openMenu(t) {
            if (e.a11y.checkWrapLocation(), t && t.preventDefault(), !e.a11y.hasClass(e.a11y.a11yBtn, "INDdrag") && !e.isPending) return e.a11y.a11yBtn.setAttribute("aria-expanded", "true"), e.a11y.ActivateBtn((function () {
                e.ShowMenu(), e.isPending = !1, setTimeout((function () {
                    e.a11y.ToggleGlovalEvents(!0)
                }), 100)
            })), !1
        }
        InitButton() {
            let t = this.a11yBtn = document.querySelector("#INDmenu-btn");
            if (t) t.INDaddEventListener("click", this.openMenu), t.INDaddEventListener("keypress", this.openMenu), this.showINDwrap();
            else {
                t = this.a11yBtn = this.CreateElement("button", {
                    attributes: {
                        id: "INDmenu-btn",
                        "aria-expanded": "false",
                        "aria-haspopup": "true",
                        accesskey: "m",
                        "data-drag-content": `\n${e.a11y.locale[e.a11y.countryCode].a11yBtn.drag}`
                    },
                    events: {
                        click: this.openMenu,
                        keypress: this.openMenu
                    }
                }), this.isLoading && t.INDsetAttribute("disabled", !0), this.addClass(this.body, "INDhasDragTooltip");
                let i = this.CreateElement("div", {
                    attributes: {
                        id: "INDbtnWrap"
                    }
                });
                i.INDappendChild(t);
                let n = document.getElementById("INDblindNotif");
                n ? n.parentElement.INDinsertBefore(i, n.nextSibling) : this.INDWrap.INDappendChild(i), this.InitButtonStyle()
            }
        }
        checkWrapLocation() {
            e.INDWrap.parentElement.INDmatches("body") || e.a11y.body.INDprepend(e.INDWrap)
        }
        initDragSystem() {
            var t = this;
            const i = 1.2;
            var n, s, o, a, r, d, c = new this.Event("INDdragEnd"),
                l = this.CssVar(this.a11yBtn, "--indscale") || 1;

            function p(e) {
                d = !1, document.INDremoveEventListener("mousemove", h), document.INDremoveEventListener("touchmove", h, {
                    passive: !0
                }), setTimeout(function () {
                    t.removeClass(t.a11yBtn, "INDdrag"), t.removeClass(document.body, "INDbtn-draging"), t.CssVar(t.a11yBtn, "--indscale", 1 === l ? "" : l), n && t.a11yBtn.INDdispatchEvent(c)
                }.INDbind(this))
            }

            function u(t) {
                let c = e.a11y;
                var u = l * i;
                return d = !0, n = !1, setTimeout(function () {
                    d && (r = this.getBoundingClientRect(), s = g(t), o = r.top, a = r.height * (l - 1) / 2, e.a11y.addClass(this, "INDdrag"), e.a11y.addClass(document.body, "INDbtn-draging"), c.CssVar(this, "--indscale", u), document.INDaddEventListener("touchmove", h, {
                        passive: !0
                    }), document.INDaddEventListener("mousemove", h))
                }.INDbind(this), 1e3), this.INDaddEventListener("mouseup", p), this.INDaddEventListener("touchend", p, {
                    passive: !0
                }), document.INDaddEventListener("mouseup", p), document.INDaddEventListener("touchend", p, {
                    passive: !0
                }), !1
            }

            function h(e) {
                n = !0;
                var t = g(e);
                let i = r.height / 2;
                return y(t.x > window.innerWidth / 2 ? "right" : "left", Math.min(Math.max(o + t.y - s.y + a, a + i), window.innerHeight - i - r.height * l + a)), !1
            }
            this.a11yBtn.INDsetAttribute("data-INDdrag", !0), this.a11yBtn.INDaddEventListener("mousedown", u), this.a11yBtn.INDaddEventListener("touchstart", u, {
                passive: !0
            }), this.a11yBtn.INDaddEventListener("INDdragEnd", (function (e) { }));
            var m = this.GetFromStorage("INDbtnPosition");

            function y(t, i) {
                e.setPosition(t), Object.INDassign(e.a11y.a11yBtn.style, {
                    top: `${i}px`,
                    bottom: "initial"
                }), e.a11y.SetToStorage("INDbtnPosition", e.JSON.stringify({
                    x: t,
                    y: i
                }))
            }

            function g(e) {
                return {
                    x: (e = e.touches ? e.touches[0] : e).clientX,
                    y: e.clientY
                }
            }
            m && y((m = e.JSON.parse(m)).x, m.y)
        }
        getModesFromTop() {
            return new Promise(((t, i) => {
                window.INDaddEventListener("message", (function i({
                    data: n
                }) {
                    window.INDremoveEventListener("message", i), t(e.ParseJSON(n).modes)
                }));
                try {
                    this.postToTop(null, `{ "action" : "${e.a11y.validAction.getModes}" }`, "*")
                } catch (e) {
                    this.INDLog(e)
                }
            }))
        }
        async getModeFromStroage() {
            if (e.isIframe && (e.mode = await this.getModesFromTop() || {}, Object.INDkeys(e.mode || []).length)) return !0;
            for (let i of this.methodNames) {
                var t = this.GetFromStorage(i);
                t && (e.mode[i] = t)
            }
            return !0
        }
        LoadDefaults(t) {
            let i = [window.INDfetch(`${this.domains.js}style/style${this.isDev ? ".src" : ""}.css`), window.INDfetch(`${this.domains.js}style/btncolor.css`), window.INDfetch(`${this.domains.js}assets/locale/${e.a11y.countryCode}.json`)];
            if (Promise.all(i).then((e => Promise.all(e.map((e => this.HandleFetch(e)))))).then((async i => {
                e.mode["INDNavigation"] || (e.shortcuts = this.setShortcuts());
                const n = await this.IsNagichOnTop();
                (this.GetCookie("INDhideAccBtn") || sessionStorage.getItem("INDhideAccBtn") || n) && e.isIframe ? this.INDWrap.style.display = "block" : this.InitButton(), window.location.href.INDincludes("#equalweb") && this.openMenu(), "function" == typeof t && t()
            })), e.pdf) {
                let t = this.CreateElement("script", {
                    attributes: {
                        referrerpolicy: "origin",
                        src: `${this.domains.js}assets/scripts/pdf.js`
                    }
                });
                e.a11y.dataWrap.appendChild(t)
            }
            window.INDfetch(`${this.domains.js}assets/scripts/pdf.js`).then((e => {
                this.HandleFetch(e)
            })).catch((e => { }))
        }
        HandleFetch(t) {
            return new Promise(((i, n) => {
                let s = t.url,
                    o = t.headers.get("Content-Type");
                t.ok || n({
                    url: s,
                    type: s.INDmatch(/\.\w+$/)[0].replace(".", ""),
                    code: t.status,
                    status: t.statusText
                });
                let a = {};
                t.text().then((function (t) {
                    switch (o) {
                        case "image/svg+xml":
                            a = {
                                success: !0,
                                type: "svg",
                                data: t
                            };
                            break;
                        case "text/css":
                            e.a11y.addStyle(t), a = {
                                success: !0,
                                type: "style",
                                data: o
                            };
                            break;
                        case "application/json":
                            e.a11y.locale || (e.a11y.locale = {}), e.a11y.locale[e.a11y.countryCode] = e.ParseJSON(t), a = {
                                success: !0,
                                type: "json",
                                data: o
                            };
                            break;
                        default:
                            break
                    }
                    i(a)
                }))
            }))
        }
        MakeHidden(e, t) {
            let i = this.CreateElement("span", {
                attributes: {
                    class: "INDhiddenText"
                },
                text: e
            });
            return typeof t == typeof void 0 ? i : t instanceof HTMLElement && (t.INDappendChild(i), t)
        }
        initInterdealFunctions() {
            let t = this;
            e.ParseJSON = this.ParseJSON, e.counter = function () {
                let e = 2;
                return function () {
                    return e++
                }
            }(), e.SetLocale = this.SetLocale, e.CloseMenu = function (i) {
                t.menu.INDsetAttribute("aria-hidden", !0), e.a11y.ToggleGlovalEvents(!1), t.removeClass(document.body, "INDmenu-open"), e.a11y.a11yBtn && e.a11y.a11yBtn.INDsetAttribute("aria-expanded", !1), e.a11y.isOrhas(this.menu) && e.a11y.a11yBtn.focus(), "function" == typeof i && i()
            }, e.setPosition = function (i) {
                let n = e.menuPos = i && i instanceof Array && 2 === i.length ? i[this.isDesktop ? 0 : 1] : i && /right|left/i.test(i) ? i.toLowerCase() : "rtl" === this.langDir ? "right" : "left";
                return t.removeClass(t.body, "INDpositionRight INDpositionLeft"), t.addClass(t.body, `IND${t.camelCase(`position-${n}`)}`), n
            }, e.setLanguage = function (i) {
                t.lang = e.lang = i || "en";
                let n = t.lang.split("-");
                return n[0] = n[0].toLowerCase(), t.fullLangISO = e.fullLangISO = 2 == n.length ? n.join("-") : n[0], t.lang = e.lang = n[0], t.langDir = e.langDir = "he" === t.lang || "ar" === t.lang ? "rtl" : "ltr", t.removeClass(t.body, "INDlangdirRTL INDlangdirLTR"), t.addClass(t.body, `INDlangdir${this.langDir.toUpperCase()}`), t.lang
            }
        }
        setShortcuts() {
            let t, i, n = this.CreateElement("ul");
            if (e.quickAccess = this.CreateElement("div", {
                attributes: {
                    id: "INDquickAccess"
                }
            }), e.quickAccess.INDappendChild(n), this.INDWrap.INDappendChild(e.quickAccess), e.quickAccess.blindShorcut = i = this.CreateElement("button", {
                attributes: {
                    accesskey: "b",
                    class: "INDshortcutBtn",
                    tabindex: 1
                },
                events: {
                    click: function () {
                        return e.LoadData((function () {
                            e.setNavigation("soundreder")
                        })), !1
                    }
                }
            }), t = this.CreateElement("li"), t.INDappendChild(i), n.INDappendChild(t), e.isDesktop) {
                var s = this.CreateElement("button", {
                    attributes: {
                        accesskey: "l",
                        tabindex: 1
                    },
                    events: {
                        click: function () {
                            return e.LoadData((function () {
                                e.setNavigation("keyboard")
                            })), !1
                        }
                    }
                });
                t = this.CreateElement("li"), t.INDappendChild(s), n.INDappendChild(t)
            }
            let o = this.CreateElement("button", {
                attributes: {
                    tabindex: 1
                },
                events: {
                    click: function () {
                        return e.a11y.a11yBtn.click(), !1
                    }
                }
            });
            t = this.CreateElement("li"), t.INDappendChild(o), n.INDappendChild(t);
            let a = this.CreateElement("div", {
                attributes: {
                    id: "INDblindNotif",
                    tabindex: -1,
                    class: "INDhiddenText"
                }
            });

            function r() {
                let t = e.a11y.locale[e.a11y.countryCode];
                a.innerText = t.blindNotif.note + (e.isDesktop ? ` ${t.blindNotif.keys}` : ""), o.innerText = e.isDesktop ? t.shortcuts.a11yMenu : t.shortcuts.a11yMenuMobile, s && (s.innerText = t.shortcuts.keyboard), i && (i.innerHTML = e.isDesktop ? `${t.shortcuts.blind.txt}<span class="INDhiddenText">${t.shortcuts.blind.sup}</span>` : `${t.shortcuts.blind.mobileTxt}<span class="INDhiddenText">${t.shortcuts.blind.sup}</span>`)
            }
            return e.INDWrap.INDprepend(a), INDsetTimeout((function () {
                a.INDsetAttribute("role", "alert"), e.menu.getAttribute("aria-hidden") && a.focus()
            }), /safari/i.test(e.browser.name) ? 2e3 : 1e3), this.body.addEventListener("keydown", (function (t) {
                if (t.key && e.a11y.keyCodes[t.key.toLocaleLowerCase()] === e.a11y.keyCodes.tab && !t.shiftKey && (t.target === document.body || t.target === a) && !e.mode["INDNavigation"]) return INDsetTimeout((function () {
                    document.querySelector("#INDquickAccess button").focus()
                })), !1
            })), r(), {
                setContents: r,
                quickAccess: e.quickAccess
            }
        }
        get countryCode() {
            return /^en-/i.test(e.fullLangISO) ? e.lang : e.fullLangISO
        }
        initWrap() {
            this.body = document.body.parentElement.INDcontains(this.body) && this.body || document.body, this.langDir = this.langDir || e.langDir, e.INDWrap = this.INDWrap = this.CreateElement("div", {
                attributes: {
                    id: "INDWrap",
                    lang: this.lang,
                    dir: this.langDir,
                    "data-ind-version": this.version
                },
                style: {
                    display: "none"
                }
            }), e.dataWrap = this.dataWrap = this.CreateElement("div", {
                attributes: {
                    id: "INDdata"
                },
                style: {
                    display: "none"
                }
            }), e.menu = this.menu = this.CreateElement("div", {
                attributes: {
                    id: "INDmenu",
                    "aria-hidden": !0
                }
            }), this.INDWrap.INDappendChild(this.menu), e.modal = this.SetModal(), this.body[/googlebot/i.test(navigator.userAgent) ? "appendChild" : "prepend"](this.INDWrap);
            let t = `IND${e.isDesktop ? "Desktop" : "Mobile"} \n\t\t\t\t\t\t\t\t\tIND${e.browser.name.INDtrim()} \n\t\t\t\t\t\t\t\t\tINDlangdir${this.langDir.toUpperCase().INDtrim()} \n\t\t\t\t\t\t\t\t\tIND${this.camelCase(`position-${e.menuPos}`).INDtrim()}`;
            this.addClass(this.body, t.INDreplace(/\s+/g, " "))
        }
        addClass(e, t) {
            !1 != "string" && (t = t.split(" "), e.classList.add(...t))
        }
        removeClass(e, t) {
            if (!1 == "string" || e == document) return;
            t = [...t.INDsplit(" ")];
            let i = e.classList;
            for (let e of i) t.INDincludes(e) && i.remove(e)
        }
        hasClass(e, t) {
            return ` ${e.className} `.INDreplace(/[\n\t]/g, " ").INDindexOf(t) > -1
        }
        addStyle(t, i) {
            if (t && "string" == typeof t && "" !== t) {
                let n = e.a11y.CreateElement("style", {
                    attributes: i ? {
                        id: i
                    } : void 0,
                    html: t
                });
                this.head.INDappendChild(n)
            } else this.INDLog("%c No style data provided.. %c", this.LogPresets("red"))
        }
        ActivateBtn(t) {
            e.isError ? e.menu.INDsetAttribute("aria-hidden", !1) : (e.isMethodsSet || (this.setLoader(), this.CssVar(document.querySelector("#INDloader .INDloader"), "--indmaincolor", e.btnStyle && e.btnStyle.color ? e.btnStyle.color.main : "darkblue"), this.CssVar(document.querySelector("#INDloader .INDloader"), "--indsecondcolor", e.btnStyle && e.btnStyle.color ? e.btnStyle.color.second : "teal")), this.getA11yMenu().then((() => (e.isIframe || window.self.INDpostMessage(`{"action" : "${e.a11y.validAction.a11yDone}"}`, "*"), !1))).catch((e => { })))
        }
        SerializeArgs(e) {
            return new URLSearchParams(e).toString()
        }
        LoadData() {
            var t = function () { },
                i = e.pageTitle = document.title,
                n = e.pageURL = null != document.querySelector("link[rel=canonical]") ? document.querySelector("link[rel=canonical]").href : document.location.href,
                s = this.GetCookie("_UserReference"),
                o = this.GetCookie("HostMasterID"),
                a = {
                    ver: e.version,
                    isNewSystem: !0,
                    key: e.sitekey,
                    domainName: location.hostname.INDreplace(/^www\./i, ""),
                    tabletDetaction: e.isDesktop ? "off" : "on",
                    menuLang: e.lang,
                    Position: e.menuPos,
                    firstTime: !this.GetCookie("_UserReference"),
                    pageURL: n,
                    pageTitle: i
                };
            return s && (a["_UserReference"] = s), o && (a["HostMasterID"] = o),
                function () {
                    var i = "object" == typeof arguments[0] ? arguments[0] : {};
                    if ("function" == typeof arguments[0] ? t = arguments[0] : "function" == typeof arguments[1] && (t = arguments[1]), e.isMethodsSet) t();
                    else {
                        a.menuLang = e.a11y.countryCode;
                        let n = Object.assign(i, a),
                            s = e.a11y.SerializeArgs(n);
                        window.INDfetch(`${e.domains.acc}?${s}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                        }).then((async function (i) {
                            let n, s;
                            try {
                                let o = await i.text();
                                e.a11y.dataWrap.innerHTML = o, e.a11y.INDWrap.INDappendChild(e.a11y.dataWrap);
                                let a = e.a11y.dataWrap.children;
                                for (let t of a)
                                    if ("SCRIPT" == t.nodeName) {
                                        if (e.a11y.isDev) {
                                            s = (t.innerText.INDtrim().INDmatch(/(^\/\/#(.)+\n)|(^\/\*(.)+\*\/)/) || [""])[0];
                                            let e = s.INDtrim().INDmatch(/\/(?:.(?!\/))+\.js$/);
                                            n = e && e[0].INDreplace("/", "")
                                        }
                                        try {
                                            window.Function(`${t.innerHTML}`).INDbind(e)()
                                        } catch (t) {
                                            console.log("err"), e.a11y.INDLog(t, "err")
                                        }
                                    } t()
                            } catch (t) {
                                e.a11y.isDev && (e.a11y.INDLog(`%c Error at "${n || "Unknown"}" : %c${s && s.trim() || "Unknown"}`, e.a11y.LogPresets("blue"), e.a11y.LogPresets("green")), e.a11y.INDLog(t)), e.GetErrorMessage ? e.ErrMenu(e.GetErrorMessage("Network Error")) : e.ErrMenu('<h2 tabindex="0">&#9888; Network Error</h2>'), e.a11y.INDLog(`%cError : ${t}`, e.a11y.LogPresets("red"))
                            }
                        })).catch((t => {
                            e.GetErrorMessage ? e.ErrMenu(e.GetErrorMessage("Loading Error")) : e.ErrMenu('<h2 tabindex="0">&#9888; Loading Error</h2>'), e.a11y.INDLog(t, "err")
                        }))
                    }
                }
        }
        getA11yStyle() {
            let t = e.a11y.GetCookie("_UserReference"),
                i = this.CreateElement("link", {
                    attributes: {
                        rel: "stylesheet",
                        referrerpolicy: "origin",
                        href: `${e.domains.acc}styles.taf?key=${e.sitekey}&pos=${e.menuPos} &menulang=${e.lang}${t && "undefined" != t ? `&_UserReference=${t}` : ""}`
                    }
                });
            e.a11y.dataWrap.INDappendChild(i)
        }
        getA11y(t, i) {
            let n = this.SerializeArgs({
                key: e.sitekey,
                menulang: e.lang,
                ...t
            }),
                s = e.a11y.GetCookie("_UserReference"),
                o = this.CreateElement("script", {
                    attributes: {
                        referrerpolicy: "origin",
                        src: `${e.domains.acc}scripts.taf?${n}${s && "undefined" != s ? `&_UserReference=${s}` : ""}`
                    }
                });
            e.a11y.dataWrap.INDappendChild(o), document.body.addEventListener("INDreadyState", (() => {
                "function" == typeof i && i(), e.a11y.statisitcUpdate(t)
            }))
        }
        getA11yMenu(t) {
            return new Promise(((i, n) => {
                if (!e.isError)
                    if (e.Menu || e.Menu && e.Menu.isDone) t || e.Menu.ShowMenu();
                    else {
                        let n = this.SerializeArgs({
                            key: e.sitekey,
                            menulang: e.lang
                        }),
                            s = e.a11y.GetCookie("_UserReference"),
                            o = this.CreateElement("link", {
                                attributes: {
                                    rel: "stylesheet",
                                    referrerpolicy: "origin",
                                    href: `${e.domains.acc}styles.taf?menuStyle=true&key=${e.sitekey}&menulang=${e.lang}${s && "undefined" != s ? `&_UserReference=${s}` : ""}`
                                }
                            });
                        e.a11y.dataWrap.INDappendChild(o);
                        let a = this.CreateElement("script", {
                            attributes: {
                                referrerpolicy: "origin",
                                src: `${e.domains.acc}menu.taf?${n}${s && "undefined" != s ? `&_UserReference=${s}&firsttime=false` : "&firsttime=true"}`
                            }
                        });
                        o.onload = function () {
                            e.a11y.dataWrap.INDappendChild(a), document.body.INDaddEventListener("INDmenuLoaded", (() => {
                                e.Menu = new this.a11yMenu, t || e.Menu.ShowMenu(), !t && this.removeLoader(), i()
                            }))
                        }.INDbind(this)
                    }
            }))
        }
        statisitcUpdate(t) {
            var i = e.pageTitle = document.title,
                n = e.pageURL = null != document.querySelector("link[rel=canonical]") ? document.querySelector("link[rel=canonical]").href : document.location.href;
            let s = this.SerializeArgs({
                ver: e.version,
                key: e.sitekey,
                tabletDetaction: e.isDesktop ? "off" : "on",
                _UserReference: this.GetCookie("_UserReference"),
                pageURL: n,
                pageTitle: i,
                firsttime: !!this.GetCookie("_UserReference"),
                ...t
            });
            window.INDfetch(`${e.domains.acc}statistics.taf?${s}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then((e => e.text())).then((t => {
                t.trim().length && (INDLog("Statistics", "title"), INDLog(e.ParseJSON(t), "data"), INDLog("Statistics", "end"))
            }))
        }
        ErrMenu(...t) {
            if (null != e.menu.querySelector("#INDloader") || e.menu.INDhasChildNodes()) {
                var i = e.errors || {},
                    n = t[0] || document.querySelector("#INDErrorMsg").innerHTML || "";
                n = n.INDtrim().INDreplace(/\{\{([^\}]+)\}\}/g, (function (e, n) {
                    return i[t[1] || n] ? i[t[1] || n] : "{{" + t[1] || n + "}}"
                })), e.a11yBtn.innerHTML += `<div id="INDerror" lang="en" dir="ltr">\n\t\t\t\t\t\t\t\t${n || '<h2 tabindex="0">&#9888; Error</h2>'}\n\t\t\t\t\t\t\t</div>`
            }
            setTimeout((function () {
                e.menu.querySelector("h2").focus()
            }), 200)
        }
        CssVar(e, t, i) {
            return !(!e instanceof HTMLElement) && (void 0 === i ? getComputedStyle(e).getPropertyValue(t) : (e.style.setProperty(t, i), e))
        }
        addScript(t, i) {
            if (t && "string" == typeof t && "" !== t) {
                let n = {};
                i && (n.id = i), e.nonce && "string" == typeof e.nonce && (n.nonce = e.nonce || "");
                let s = this.CreateElement("script", {
                    attributes: n,
                    html: t
                });
                this.INDWrap.INDappendChild(s)
            } else this.INDLog("%c No script data provided.. %c", this.LogPresets("red"))
        }
        camelCase(e) {
            return e.INDreplace(/\W+(.)/g, (function (e, t) {
                return t.toUpperCase()
            }))
        }
        GetFromStorage(e) {
            let t = localStorage.getItem(e);
            return "string" == typeof t ? t : this.ParseJSON(t)
        }
        SetToStorage(t, i) {
            localStorage.setItem(t, "string" == typeof i ? i : e.JSON.stringify(i))
        }
        RemoveFromStorage(e) {
            localStorage.removeItem(e)
        }
        isOrhas(e, t) {
            return t = t || document.activeElement, e.INDcontains(t) || e.INDisSameNode(t)
        }
        removeCookie(t) {
            if (e.currDomain) return document.cookie = `${t}=; path=/; domain=.${e.currDomain}; expires=${new Date(0).toUTCString()}`, document.cookie;
            this.INDLog("%c No domain found. %c", this.LogPresets("red"))
        }
        SetCookie(e, t, i) {
            let n = new Date;
            document.cookie = `${e}=${t}; expires=${new Date(n.setDate(n.getDate() + i))}; path=/; `
        }
        SetModal() {
            var t;
            let i = this.CreateElement("div", {
                style: {
                    display: "none"
                },
                attributes: {
                    id: "INDpopup",
                    "aria-hidden": !0
                },
                events: {
                    click: function (t) {
                        e.a11y.isOrhas(a, t.target) || d()
                    }.INDbind(this),
                    keydown: function (e) {
                        if (e.which != this.keyCodes.esc) {
                            if (e.which === this.keyCodes.tab) {
                                if (!e.shiftKey && o.INDisSameNode(e.target)) return n.focus(), !1;
                                if (e.shiftKey && $popupHeader.INDisSameNode(e.target)) return o.focus(), !1
                            }
                        } else d()
                    }.INDbind(this)
                }
            }),
                n = this.CreateElement("div", {
                    attributes: {
                        id: "INDpopupHead",
                        role: "heading",
                        "aria-level": 2,
                        tabindex: 0
                    },
                    text: "Popup heading"
                }),
                s = this.CreateElement("div", {
                    attributes: {
                        id: "INDContent",
                        class: "INDpopupContent"
                    }
                }),
                o = this.CreateElement("button", {
                    attributes: {
                        id: "INDCloseBtn",
                        class: "INDpopupConfirm",
                        tabindex: 0
                    },
                    events: {
                        click: d
                    }
                }),
                a = this.CreateElement("div", {
                    attributes: {
                        role: "dialog",
                        "aria-modal": !0,
                        "aria-labelledby": "INDpopupHead",
                        tabindex: 0
                    }
                });
            a.INDappendChild(n), a.INDappendChild(s), a.INDappendChild(o), i.INDappendChild(a), this.INDWrap.INDappendChild(i);
            var r = function (e) {
                var t = this.GetMsgData(e.data);
                0 === this.domains.acc.INDindexOf(e.origin) && "Close Me!" === t.INDmessage && d()
            }.INDbind(this);

            function d() {
                i.INDremoveAttribute("class", "open"), e.a11y.removeClass(document.body, "INDmodalOpen"), i.INDsetAttribute("aria-hidden", !0), setTimeout((function () {
                    i.style.display = "none"
                }), 200), (t && t !== document.body && "none" != t.style.display ? t : this.a11yBtn).focus()
            }
            return window.INDaddEventListener("message", r), {
                open: function (r, d, c) {
                    if ("$IND" in window && d instanceof $IND && (d = d[0]), s.innerHTML = "", t = document.activeElement, e.CloseMenu(), n.innerHTML = r || "Dialog", d && "string" != typeof d ? s.INDappendChild(d) : s.innerHTML = d || "", c) o.innerHTML = c;
                    else {
                        let t = e.a11y.locale[e.a11y.countryCode].closeBtn.INDreplace(/<<(.*)>>/, " ");
                        o.innerText = t
                    }
                    e.a11y.addClass(document.body, "INDmodalOpen"), e.a11y.addClass(i, "open"), i.INDsetAttribute("aria-hidden", !1), INDsetTimeout((function () {
                        i.style.display = "block"
                    }), 200), a.focus()
                },
                close: d,
                container: i
            }
        }
    }
    document.body ? new n : (window.INDaddEventListener || window.addEventListener)("DOMContentLoaded", (() => {
        i = document.body, new n
    }))
}(window.interdeal = window.interdeal || {}, document.head, document.body);