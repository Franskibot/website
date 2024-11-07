(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [340],
  {
    7239: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      let s = i(7437),
        n = i(2265);
      e.default = function (t) {
        let {
          html: e,
          height: i = null,
          width: o = null,
          children: r,
          dataNtpc: l = "",
        } = t;
        return (
          (0, n.useEffect)(() => {
            l &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(l) },
              });
          }, [l]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              r,
              e
                ? (0, s.jsx)("div", {
                    style: {
                      height: null != i ? "".concat(i, "px") : "auto",
                      width: null != o ? "".concat(o, "px") : "auto",
                    },
                    "data-ntpc": l,
                    dangerouslySetInnerHTML: { __html: e },
                  })
                : null,
            ],
          })
        );
      };
    },
    4888: function (t, e, i) {
      "use strict";
      var s;
      let n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sendGAEvent = e.GoogleAnalytics = void 0);
      let o = i(7437),
        r = i(2265),
        l = (s = i(8667)) && s.__esModule ? s : { default: s };
      (e.GoogleAnalytics = function (t) {
        let { gaId: e, dataLayerName: i = "dataLayer" } = t;
        return (
          void 0 === n && (n = i),
          (0, r.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(l.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(i, "'] = window['")
                    .concat(i, "'] || [];\n          function gtag(){window['")
                    .concat(
                      i,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(e, "');"),
                },
              }),
              (0, o.jsx)(l.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(e),
              }),
            ],
          })
        );
      }),
        (e.sendGAEvent = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          if (void 0 === n) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[n]
            ? window[n].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  n,
                  " does not exist"
                )
              );
        });
    },
    8087: function (t, e, i) {
      "use strict";
      var s;
      let n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sendGTMEvent = e.GoogleTagManager = void 0);
      let o = i(7437),
        r = i(2265),
        l = (s = i(8667)) && s.__esModule ? s : { default: s };
      (e.GoogleTagManager = function (t) {
        let {
          gtmId: e,
          dataLayerName: i = "dataLayer",
          auth: s,
          preview: a,
          dataLayer: h,
        } = t;
        void 0 === n && (n = i);
        let c = "dataLayer" !== i ? "&l=".concat(i) : "";
        return (
          (0, r.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(l.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        h ? "w[l].push(".concat(JSON.stringify(h), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(i, "');"),
                },
              }),
              (0, o.jsx)(l.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(e)
                  .concat(c)
                  .concat(s ? "&gtm_auth=".concat(s) : "")
                  .concat(
                    a ? "&gtm_preview=".concat(a, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (e.sendGTMEvent = (t) => {
          if (void 0 === n) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[n]
            ? window[n].push(t)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  n,
                  " does not exist"
                )
              );
        });
    },
    9376: function (t, e, i) {
      "use strict";
      var s = i(5475);
      i.o(s, "usePathname") &&
        i.d(e, {
          usePathname: function () {
            return s.usePathname;
          },
        });
    },
    8667: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return n.a;
          },
        });
      var s = i(8003),
        n = i.n(s),
        o = {};
      for (var r in s)
        "default" !== r &&
          (o[r] = function (t) {
            return s[t];
          }.bind(0, r));
      i.d(e, o);
    },
    8221: function (t, e) {
      "use strict";
      let i;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          DOMAttributeNames: function () {
            return s;
          },
          default: function () {
            return r;
          },
          isEqualNode: function () {
            return o;
          },
        });
      let s = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function n(t) {
        let { type: e, props: i } = t,
          n = document.createElement(e);
        for (let t in i) {
          if (
            !i.hasOwnProperty(t) ||
            "children" === t ||
            "dangerouslySetInnerHTML" === t ||
            void 0 === i[t]
          )
            continue;
          let o = s[t] || t.toLowerCase();
          "script" === e && ("async" === o || "defer" === o || "noModule" === o)
            ? (n[o] = !!i[t])
            : n.setAttribute(o, i[t]);
        }
        let { children: o, dangerouslySetInnerHTML: r } = i;
        return (
          r
            ? (n.innerHTML = r.__html || "")
            : o &&
              (n.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          n
        );
      }
      function o(t, e) {
        if (t instanceof HTMLElement && e instanceof HTMLElement) {
          let i = e.getAttribute("nonce");
          if (i && !t.getAttribute("nonce")) {
            let s = e.cloneNode(!0);
            return (
              s.setAttribute("nonce", ""),
              (s.nonce = i),
              i === t.nonce && t.isEqualNode(s)
            );
          }
        }
        return t.isEqualNode(e);
      }
      function r() {
        return {
          mountedInstances: new Set(),
          updateHead: (t) => {
            let e = {};
            t.forEach((t) => {
              if ("link" === t.type && t.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + t.props["data-href"] + '"]'
                  )
                )
                  return;
                (t.props.href = t.props["data-href"]),
                  (t.props["data-href"] = void 0);
              }
              let i = e[t.type] || [];
              i.push(t), (e[t.type] = i);
            });
            let s = e.title ? e.title[0] : null,
              n = "";
            if (s) {
              let { children: t } = s.props;
              n = "string" == typeof t ? t : Array.isArray(t) ? t.join("") : "";
            }
            n !== document.title && (document.title = n),
              ["meta", "base", "link", "style", "script"].forEach((t) => {
                i(t, e[t] || []);
              });
          },
        };
      }
      (i = (t, e) => {
        let i = document.getElementsByTagName("head")[0],
          s = i.querySelector("meta[name=next-head-count]"),
          r = Number(s.content),
          l = [];
        for (
          let e = 0, i = s.previousElementSibling;
          e < r;
          e++, i = (null == i ? void 0 : i.previousElementSibling) || null
        ) {
          var a;
          (null == i
            ? void 0
            : null == (a = i.tagName)
            ? void 0
            : a.toLowerCase()) === t && l.push(i);
        }
        let h = e.map(n).filter((t) => {
          for (let e = 0, i = l.length; e < i; e++)
            if (o(l[e], t)) return l.splice(e, 1), !1;
          return !0;
        });
        l.forEach((t) => {
          var e;
          return null == (e = t.parentNode) ? void 0 : e.removeChild(t);
        }),
          h.forEach((t) => i.insertBefore(t, s)),
          (s.content = (r - l.length + h.length).toString());
      }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8003: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return _;
          },
          handleClientScriptLoad: function () {
            return v;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let s = i(7043),
        n = i(3099),
        o = i(7437),
        r = s._(i(4887)),
        l = n._(i(2265)),
        a = i(8701),
        h = i(8221),
        c = i(3515),
        u = new Map(),
        d = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        m = (t) => {
          if (r.default.preinit) {
            t.forEach((t) => {
              r.default.preinit(t, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let e = document.head;
            t.forEach((t) => {
              let i = document.createElement("link");
              (i.type = "text/css"),
                (i.rel = "stylesheet"),
                (i.href = t),
                e.appendChild(i);
            });
          }
        },
        f = (t) => {
          let {
              src: e,
              id: i,
              onLoad: s = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: o,
              children: r = "",
              strategy: l = "afterInteractive",
              onError: a,
              stylesheets: c,
            } = t,
            f = i || e;
          if (f && d.has(f)) return;
          if (u.has(e)) {
            d.add(f), u.get(e).then(s, a);
            return;
          }
          let v = () => {
              n && n(), d.add(f);
            },
            g = document.createElement("script"),
            w = new Promise((t, e) => {
              g.addEventListener("load", function (e) {
                t(), s && s.call(this, e), v();
              }),
                g.addEventListener("error", function (t) {
                  e(t);
                });
            }).catch(function (t) {
              a && a(t);
            });
          for (let [i, s] of (o
            ? ((g.innerHTML = o.__html || ""), v())
            : r
            ? ((g.textContent =
                "string" == typeof r ? r : Array.isArray(r) ? r.join("") : ""),
              v())
            : e && ((g.src = e), u.set(e, w)),
          Object.entries(t))) {
            if (void 0 === s || p.includes(i)) continue;
            let t = h.DOMAttributeNames[i] || i.toLowerCase();
            g.setAttribute(t, s);
          }
          "worker" === l && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", l),
            c && m(c),
            document.body.appendChild(g);
        };
      function v(t) {
        let { strategy: e = "afterInteractive" } = t;
        "lazyOnload" === e
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => f(t));
            })
          : f(t);
      }
      function g(t) {
        t.forEach(v),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute("src");
            d.add(e);
          });
      }
      function w(t) {
        let {
            id: e,
            src: i = "",
            onLoad: s = () => {},
            onReady: n = null,
            strategy: h = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...m
          } = t,
          {
            updateScripts: v,
            scripts: g,
            getIsSsr: w,
            appDir: _,
            nonce: y,
          } = (0, l.useContext)(a.HeadManagerContext),
          S = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let t = e || i;
          S.current || (n && t && d.has(t) && n(), (S.current = !0));
        }, [n, e, i]);
        let E = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            !E.current &&
              ("afterInteractive" === h
                ? f(t)
                : "lazyOnload" === h &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => f(t))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => f(t));
                      })),
              (E.current = !0));
          }, [t, h]),
          ("beforeInteractive" === h || "worker" === h) &&
            (v
              ? ((g[h] = (g[h] || []).concat([
                  { id: e, src: i, onLoad: s, onReady: n, onError: u, ...m },
                ])),
                v(g))
              : w && w()
              ? d.add(e || i)
              : w && !w() && f(t)),
          _)
        ) {
          if (
            (p &&
              p.forEach((t) => {
                r.default.preinit(t, { as: "style" });
              }),
            "beforeInteractive" === h)
          )
            return i
              ? (r.default.preload(
                  i,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: y,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: y, crossOrigin: m.crossOrigin }
                ),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([i, { ...m, id: e }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: y,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: e }]) +
                      ")",
                  },
                }));
          "afterInteractive" === h &&
            i &&
            r.default.preload(
              i,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: y,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: y, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(w, "__nextScript", { value: !0 });
      let _ = w;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4722: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__montreal_d58f00', '__montreal_Fallback_d58f00'",
        },
        className: "__className_d58f00",
        variable: "__variable_d58f00",
      };
    },
    6024: function (t) {
      t.exports = {
        style: {
          fontFamily:
            "'__montrealmono_30a787', '__montrealmono_Fallback_30a787'",
        },
        className: "__className_30a787",
        variable: "__variable_30a787",
      };
    },
    9096: function (t, e, i) {
      "use strict";
      function s(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      i.d(e, {
        Z: function () {
          return h;
        },
      });
      class n {
        advance(t) {
          if (!this.isRunning) return;
          let e = !1;
          if (this.duration && this.easing) {
            this.currentTime += t;
            let i = s(0, this.currentTime / this.duration, 1),
              n = (e = i >= 1) ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * n;
          } else {
            var i, n, o;
            this.lerp
              ? ((this.value =
                  ((i = this.value),
                  (n = this.to),
                  (1 - (o = 1 - Math.exp(-(60 * this.lerp) * t))) * i + o * n)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (e = !0)))
              : ((this.value = this.to), (e = !0));
          }
          e && this.stop(), this.onUpdate?.(this.value, e);
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          { lerp: i, duration: s, easing: n, onStart: o, onUpdate: r }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            o?.(),
            (this.onUpdate = r);
        }
      }
      class o {
        constructor({
          wrapper: t,
          content: e,
          autoResize: i = !0,
          debounce: s = 250,
        } = {}) {
          var n;
          let o;
          (this.wrapper = t),
            (this.content = e),
            i &&
              ((this.debouncedResize =
                ((n = this.resize),
                function () {
                  let t = arguments,
                    e = this;
                  clearTimeout(o),
                    (o = setTimeout(function () {
                      n.apply(e, t);
                    }, s));
                })),
              this.wrapper === window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            window.removeEventListener("resize", this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class r {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, s = i.length; t < s; t++) i[t](...e);
        }
        on(t, e) {
          return (
            this.events[t]?.push(e) || (this.events[t] = [e]),
            () => {
              this.events[t] = this.events[t]?.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          this.events[t] = this.events[t]?.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      }
      let l = 100 / 6;
      class a {
        constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }) {
          (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = i),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new r()),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (t) => {
          let { clientX: e, clientY: i } = t.targetTouches
            ? t.targetTouches[0]
            : t;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
        };
        onTouchMove = (t) => {
          let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            s = -(e - this.touchStart.x) * this.touchMultiplier,
            n = -(i - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = i),
            (this.lastDelta = { x: s, y: n }),
            this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: t });
        };
        onTouchEnd = (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        };
        onWheel = (t) => {
          let { deltaX: e, deltaY: i, deltaMode: s } = t;
          (e *= 1 === s ? l : 2 === s ? this.windowWidth : 1),
            (i *= 1 === s ? l : 2 === s ? this.windowHeight : 1),
            (e *= this.wheelMultiplier),
            (i *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
        };
        onWindowResize = () => {
          (this.windowWidth = window.innerWidth),
            (this.windowHeight = window.innerHeight);
        };
      }
      class h {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: i = t,
          eventsTarget: s = i,
          smoothWheel: l = !0,
          syncTouch: h = !1,
          syncTouchLerp: c = 0.075,
          touchInertiaMultiplier: u = 35,
          duration: d,
          easing: p = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: m = 0.1,
          infinite: f = !1,
          orientation: v = "vertical",
          gestureOrientation: g = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: _ = 1,
          autoResize: y = !0,
          prevent: S = !1,
          __experimental__naiveDimensions: E = !1,
        } = {}) {
          (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.direction = 0),
            (this.onPointerDown = (t) => {
              1 === t.button && this.reset();
            }),
            (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
              if (i.ctrlKey) return;
              let s = i.type.includes("touch"),
                n = i.type.includes("wheel");
              if (
                ((this.isTouching =
                  "touchstart" === i.type || "touchmove" === i.type),
                this.options.syncTouch &&
                  s &&
                  "touchstart" === i.type &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o =
                ("vertical" === this.options.gestureOrientation && 0 === e) ||
                ("horizontal" === this.options.gestureOrientation && 0 === t);
              if ((0 === t && 0 === e) || o) return;
              let r = i.composedPath();
              r = r.slice(0, r.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                r.find((t) => {
                  var e, i, o, r, a;
                  return (
                    t instanceof Element &&
                    (("function" == typeof l
                      ? null == l
                        ? void 0
                        : l(t)
                      : l) ||
                      (null === (e = t.hasAttribute) || void 0 === e
                        ? void 0
                        : e.call(t, "data-lenis-prevent")) ||
                      (s &&
                        (null === (i = t.hasAttribute) || void 0 === i
                          ? void 0
                          : i.call(t, "data-lenis-prevent-touch"))) ||
                      (n &&
                        (null === (o = t.hasAttribute) || void 0 === o
                          ? void 0
                          : o.call(t, "data-lenis-prevent-wheel"))) ||
                      ((null === (r = t.classList) || void 0 === r
                        ? void 0
                        : r.contains("lenis")) &&
                        !(null === (a = t.classList) || void 0 === a
                          ? void 0
                          : a.contains("lenis-stopped"))))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked)
                return void i.preventDefault();
              if (
                !(
                  (this.options.syncTouch && s) ||
                  (this.options.smoothWheel && n)
                )
              )
                return (this.isScrolling = "native"), void this.animate.stop();
              i.preventDefault();
              let a = e;
              "both" === this.options.gestureOrientation
                ? (a = Math.abs(e) > Math.abs(t) ? e : t)
                : "horizontal" === this.options.gestureOrientation && (a = t);
              let h = s && this.options.syncTouch,
                c = s && "touchend" === i.type && Math.abs(a) > 5;
              c && (a = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + a,
                  Object.assign(
                    { programmatic: !1 },
                    h
                      ? { lerp: c ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                );
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (
                !1 === this.isScrolling ||
                "native" === this.isScrolling
              ) {
                let t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - t),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  (this.isScrolling = "native"),
                  this.emit(),
                  0 !== this.velocity &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      (this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit();
                    }, 400));
              }
            }),
            (window.lenisVersion = "1.1.5"),
            (t && t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: i,
              eventsTarget: s,
              smoothWheel: l,
              syncTouch: h,
              syncTouchLerp: c,
              touchInertiaMultiplier: u,
              duration: d,
              easing: p,
              lerp: m,
              infinite: f,
              gestureOrientation: g,
              orientation: v,
              touchMultiplier: w,
              wheelMultiplier: _,
              autoResize: y,
              prevent: S,
              __experimental__naiveDimensions: E,
            }),
            (this.animate = new n()),
            (this.emitter = new r()),
            (this.dimensions = new o({
              wrapper: t,
              content: e,
              autoResize: y,
            })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            this.options.wrapper.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !1
            ),
            (this.virtualScroll = new a(s, {
              touchMultiplier: w,
              wheelMultiplier: _,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1
            ),
            this.options.wrapper.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !1
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName();
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(t) {
          let e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: i = !1,
            lock: n = !1,
            duration: o = this.options.duration,
            easing: r = this.options.easing,
            lerp: l = this.options.lerp,
            onStart: a,
            onComplete: h,
            force: c = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || c) {
            if ("string" == typeof t && ["top", "left", "start"].includes(t))
              t = 0;
            else if (
              "string" == typeof t &&
              ["bottom", "right", "end"].includes(t)
            )
              t = this.limit;
            else {
              let i;
              if (
                ("string" == typeof t
                  ? (i = document.querySelector(t))
                  : t instanceof HTMLElement &&
                    (null == t ? void 0 : t.nodeType) &&
                    (i = t),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  let t = this.rootElement.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                let s = i.getBoundingClientRect();
                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if (
              "number" == typeof t &&
              ((t += e),
              (t = Math.round(t)),
              this.options.infinite
                ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                : (t = s(0, t, this.limit)),
              t !== this.targetScroll)
            ) {
              if (((this.userData = d), i))
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  null == h || h(this),
                  void (this.userData = {})
                );
              u || (this.targetScroll = t),
                this.animate.fromTo(this.animatedScroll, t, {
                  duration: o,
                  easing: r,
                  lerp: l,
                  onStart: () => {
                    n && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      null == a || a(this);
                  },
                  onUpdate: (t, e) => {
                    (this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = t - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = t),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = t),
                      e || this.emit(),
                      e &&
                        (this.reset(),
                        this.emit(),
                        null == h || h(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent());
                  },
                });
            }
          }
        }
        preventNextNativeScrollEvent() {
          (this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            });
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            ((this.__isScrolling = t), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            ((this.__isStopped = t), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t) {
          this.__isLocked !== t &&
            ((this.__isLocked = t), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let t = "lenis";
          return (
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            "smooth" === this.isScrolling && (t += " lenis-smooth"),
            t
          );
        }
        updateClassName() {
          this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim());
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      }
    },
  },
]);
