"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [726],
  {
    3145: function (t, e, r) {
      r.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = r(8461),
        i = r.n(n);
    },
    7648: function (t, e, r) {
      r.d(e, {
        default: function () {
          return i.a;
        },
      });
      var n = r(2972),
        i = r.n(n);
    },
    5449: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8521);
      let n = function (t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6958: function (t, e, r) {
      function n(t, e, r, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8521),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    5878: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(7043),
        i = r(3099),
        o = r(7437),
        s = i._(r(2265)),
        a = n._(r(4887)),
        l = n._(r(8293)),
        u = r(5346),
        c = r(128),
        d = r(2589);
      r(1765);
      let h = r(5523),
        f = n._(r(5084)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(t, e, r, n, i, o, s) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && i(!0), null == r ? void 0 : r.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function g(t) {
        return s.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, s.forwardRef)((t, e) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: h,
          placeholder: f,
          loading: p,
          unoptimized: y,
          fill: v,
          onLoadRef: b,
          onLoadingCompleteRef: x,
          setBlurComplete: w,
          setShowAltText: P,
          sizesInput: S,
          onLoad: C,
          onError: A,
          ...E
        } = t;
        return (0, o.jsx)("img", {
          ...E,
          ...g(h),
          loading: p,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": v ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, s.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && m(t, f, b, x, w, y, S));
            },
            [r, f, b, x, w, A, y, S, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, f, b, x, w, y, S);
          },
          onError: (t) => {
            P(!0), "empty" !== f && w(!0), A && A(t);
          },
        });
      });
      function v(t) {
        let { isAppRouter: e, imgAttributes: r } = t,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let b = (0, s.forwardRef)((t, e) => {
        let r = (0, s.useContext)(h.RouterContext),
          n = (0, s.useContext)(d.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            let t = p || n || c.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              r = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [b, x] = (0, s.useState)(!1),
          [w, P] = (0, s.useState)(!1),
          { props: S, meta: C } = (0, u.getImgProps)(t, {
            defaultLoader: f.default,
            imgConf: i,
            blurComplete: b,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y, {
              ...S,
              unoptimized: C.unoptimized,
              placeholder: C.placeholder,
              fill: C.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: x,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            C.priority
              ? (0, o.jsx)(v, { isAppRouter: !r, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2972: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = r(7043),
        i = r(7437),
        o = n._(r(2265)),
        s = r(5246),
        a = r(3552),
        l = r(7497),
        u = r(3987),
        c = r(5449),
        d = r(5523),
        h = r(1956),
        f = r(6081),
        p = r(6958),
        m = r(1634),
        g = r(4673),
        y = new Set();
      function v(t, e, r, n, i, o) {
        if ("undefined" != typeof window && (o || (0, a.isLocalURL)(e))) {
          if (!n.bypassPrefetchedCheck) {
            let i =
              e +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (y.has(i)) return;
            y.add(i);
          }
          (async () => (o ? t.prefetch(e, i) : t.prefetch(e, r, n)))().catch(
            (t) => {}
          );
        }
      }
      function b(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let x = o.default.forwardRef(function (t, e) {
        let r, n;
        let {
          href: l,
          as: y,
          children: x,
          prefetch: w = null,
          passHref: P,
          replace: S,
          shallow: C,
          scroll: A,
          locale: E,
          onClick: T,
          onMouseEnter: j,
          onTouchStart: M,
          legacyBehavior: k = !1,
          ...R
        } = t;
        (r = x),
          k &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, i.jsx)("a", { children: r }));
        let V = o.default.useContext(d.RouterContext),
          D = o.default.useContext(h.AppRouterContext),
          O = null != V ? V : D,
          L = !V,
          _ = !1 !== w,
          I = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: F, as: B } = o.default.useMemo(() => {
            if (!V) {
              let t = b(l);
              return { href: t, as: y ? b(y) : t };
            }
            let [t, e] = (0, s.resolveHref)(V, l, !0);
            return { href: t, as: y ? (0, s.resolveHref)(V, y) : e || t };
          }, [V, l, y]),
          z = o.default.useRef(F),
          N = o.default.useRef(B);
        k && (n = o.default.Children.only(r));
        let W = k ? n && "object" == typeof n && n.ref : e,
          [U, $, H] = (0, f.useIntersection)({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (t) => {
              (N.current !== B || z.current !== F) &&
                (H(), (N.current = B), (z.current = F)),
                U(t),
                W &&
                  ("function" == typeof W
                    ? W(t)
                    : "object" == typeof W && (W.current = t));
            },
            [B, W, F, H, U]
          );
        o.default.useEffect(() => {
          O && $ && _ && v(O, F, B, { locale: E }, { kind: I }, L);
        }, [B, F, $, E, _, null == V ? void 0 : V.locale, O, L, I]);
        let G = {
          ref: X,
          onClick(t) {
            k || "function" != typeof T || T(t),
              k &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(t),
              O &&
                !t.defaultPrevented &&
                (function (t, e, r, n, i, s, l, u, c) {
                  let { nodeName: d } = t.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  t.preventDefault();
                  let h = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[i ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: u,
                          scroll: t,
                        })
                      : e[i ? "replace" : "push"](n || r, { scroll: t });
                  };
                  c ? o.default.startTransition(h) : h();
                })(t, O, F, B, S, C, A, E, L);
          },
          onMouseEnter(t) {
            k || "function" != typeof j || j(t),
              k &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(t),
              O &&
                (_ || !L) &&
                v(
                  O,
                  F,
                  B,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
          onTouchStart: function (t) {
            k || "function" != typeof M || M(t),
              k &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(t),
              O &&
                (_ || !L) &&
                v(
                  O,
                  F,
                  B,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(B)) G.href = B;
        else if (!k || P || ("a" === n.type && !("href" in n.props))) {
          let t = void 0 !== E ? E : null == V ? void 0 : V.locale,
            e =
              (null == V ? void 0 : V.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                B,
                t,
                null == V ? void 0 : V.locales,
                null == V ? void 0 : V.domainLocales
              );
          G.href =
            e ||
            (0, m.addBasePath)(
              (0, c.addLocale)(B, t, null == V ? void 0 : V.defaultLocale)
            );
        }
        return k
          ? o.default.cloneElement(n, G)
          : (0, i.jsx)("a", { ...R, ...G, children: r });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3515: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5246: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(8637),
        i = r(7497),
        o = r(7053),
        s = r(3987),
        a = r(8521),
        l = r(3552),
        u = r(6279),
        c = r(7205);
      function d(t, e, r) {
        let d;
        let h = "string" == typeof e ? e : (0, i.formatWithValidation)(e),
          f = h.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? h.slice(f[0].length) : h;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, s.normalizeRepeatedSlashes)(p);
          h = (f ? f[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(h)) return r ? [h] : h;
        try {
          d = new URL(h.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          d = new URL("/", "http://n");
        }
        try {
          let t = new URL(h, d);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: s, params: a } = (0, c.interpolateAs)(
                t.pathname,
                t.pathname,
                r
              );
            s &&
              (e = (0, i.formatWithValidation)({
                pathname: s,
                hash: t.hash,
                query: (0, o.omit)(r, a),
              }));
          }
          let s =
            t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
          return r ? [s, e || s] : s;
        } catch (t) {
          return r ? [h] : h;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6081: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2265),
        i = r(3515),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: r, disabled: l } = t,
          u = l || !o,
          [c, d] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          f = (0, n.useCallback)((t) => {
            h.current = t;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let t = h.current;
              if (t && t.tagName)
                return (function (t, e, r) {
                  let {
                    id: n,
                    observer: i,
                    elements: o,
                  } = (function (t) {
                    let e;
                    let r = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      n = a.find(
                        (t) => t.root === r.root && t.margin === r.margin
                      );
                    if (n && (e = s.get(n))) return e;
                    let i = new Map();
                    return (
                      (e = {
                        id: r,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = i.get(t.target),
                              r = t.isIntersecting || t.intersectionRatio > 0;
                            e && r && e(r);
                          });
                        }, t),
                        elements: i,
                      }),
                      a.push(r),
                      s.set(r, e),
                      e
                    );
                  })(r);
                  return (
                    o.set(t, e),
                    i.observe(t),
                    function () {
                      if ((o.delete(t), i.unobserve(t), 0 === o.size)) {
                        i.disconnect(), s.delete(n);
                        let t = a.findIndex(
                          (t) => t.root === n.root && t.margin === n.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && d(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let t = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(t);
            }
          }, [u, r, e, c, h.current]),
          [
            f,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1436: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(7043)._(r(2265)).default.createContext({});
    },
    9019: function (t, e) {
      function r(t) {
        let {
          ampFirst: e = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (r && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    42: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function i(t) {
        return r.test(t) ? t.replace(n, "\\$&") : t;
      }
    },
    5346: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(1765);
      let n = r(6496),
        i = r(128);
      function o(t) {
        return void 0 !== t.default;
      }
      function s(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var r;
        let a,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: h = !1,
            priority: f = !1,
            loading: p,
            className: m,
            quality: g,
            width: y,
            height: v,
            fill: b = !1,
            style: x,
            overrideSrc: w,
            onLoad: P,
            onLoadingComplete: S,
            placeholder: C = "empty",
            blurDataURL: A,
            fetchPriority: E,
            layout: T,
            objectFit: j,
            objectPosition: M,
            lazyBoundary: k,
            lazyRoot: R,
            ...V
          } = t,
          { imgConf: D, showAltText: O, blurComplete: L, defaultLoader: _ } = e,
          I = D || i.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
            e = I.deviceSizes.sort((t, e) => t - e);
          a = { ...I, allSizes: t, deviceSizes: e };
        }
        if (void 0 === _)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let F = V.loader || _;
        delete V.loader, delete V.srcSet;
        let B = "__next_img_default" in F;
        if (B) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = F;
          F = (e) => {
            let { config: r, ...n } = e;
            return t(n);
          };
        }
        if (T) {
          "fill" === T && (b = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[T];
          t && (x = { ...x, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[T];
          e && !d && (d = e);
        }
        let z = "",
          N = s(y),
          W = s(v);
        if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
          let t = o(c) ? c.default : c;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            (z = t.src),
            !b)
          ) {
            if (N || W) {
              if (N && !W) {
                let e = N / t.width;
                W = Math.round(t.height * e);
              } else if (!N && W) {
                let e = W / t.height;
                N = Math.round(t.width * e);
              }
            } else (N = t.width), (W = t.height);
          }
        }
        let U = !f && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : z) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (U = !1)),
          a.unoptimized && (h = !0),
          B && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          f && (E = "high");
        let $ = s(g),
          H = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: M,
                }
              : {},
            O ? {} : { color: "transparent" },
            x
          ),
          X =
            L || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: N,
                  heightInt: W,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          G = X
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          q = (function (t) {
            let {
              config: e,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: s,
              loader: a,
            } = t;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, r) {
                let { deviceSizes: n, allSizes: i } = t;
                if (r) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(r)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: i.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => i.find((e) => e >= t) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, i, s),
              c = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: r, quality: o, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: r, quality: o, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: h,
            width: N,
            quality: $,
            sizes: d,
            loader: F,
          });
        return {
          props: {
            ...V,
            loading: U ? "lazy" : p,
            fetchPriority: E,
            width: N,
            height: W,
            decoding: "async",
            className: m,
            style: { ...H, ...G },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: w || q.src,
          },
          meta: { unoptimized: h, priority: f, placeholder: C, fill: b },
        };
      }
    },
    8293: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = r(7043),
        i = r(3099),
        o = r(7437),
        s = i._(r(2265)),
        a = n._(r(7421)),
        l = r(1436),
        u = r(8701),
        c = r(9019);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function h(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === s.default.Fragment
          ? t.concat(
              s.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      r(1765);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(t, e) {
        let { inAmpMode: r } = e;
        return t
          .reduce(h, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let e = i.key.slice(i.key.indexOf("$") + 1);
                  t.has(e) ? (o = !1) : t.add(e);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    e.has(i.type) ? (o = !1) : e.add(i.type);
                    break;
                  case "meta":
                    for (let t = 0, e = f.length; t < e; t++) {
                      let e = f[t];
                      if (i.props.hasOwnProperty(e)) {
                        if ("charSet" === e) r.has(e) ? (o = !1) : r.add(e);
                        else {
                          let t = i.props[e],
                            r = n[e] || new Set();
                          ("name" !== e || !s) && r.has(t)
                            ? (o = !1)
                            : (r.add(t), (n[e] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !r &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                s.default.cloneElement(t, e)
              );
            }
            return s.default.cloneElement(t, { key: n });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          r = (0, s.useContext)(l.AmpStateContext),
          n = (0, s.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6496: function (t, e) {
      function r(t) {
        let {
            widthInt: e,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: s,
          } = t,
          a = n ? 40 * n : e,
          l = i ? 40 * i : r,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    2589: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(7043)._(r(2265)),
        i = r(128),
        o = n.default.createContext(i.imageConfigDefault);
    },
    128: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    8461: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(7043),
        i = r(5346),
        o = r(5878),
        s = n._(r(5084));
      function a(t) {
        let { props: e } = (0, i.getImgProps)(t, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
        return { props: e };
      }
      let l = o.Image;
    },
    5084: function (t, e) {
      function r(t) {
        let { config: e, src: r, width: n, quality: i } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    5523: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(7043)._(r(2265)).default.createContext(null);
    },
    7497: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let n = r(3099)._(r(8637)),
        i = /https?|ftp|gopher|file/;
      function o(t) {
        let { auth: e, hostname: r } = t,
          o = t.protocol || "",
          s = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : r &&
              ((u = e + (~r.indexOf(":") ? "[" + r + "]" : r)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let c = t.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          t.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), s && "/" !== s[0] && (s = "/" + s))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            o +
            u +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return o(t);
      }
    },
    6279: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let n = r(4777),
        i = r(8104);
    },
    7205: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(4199),
        i = r(9964);
      function o(t, e, r) {
        let o = "",
          s = (0, i.getRouteRegex)(t),
          a = s.groups,
          l = (e !== t ? (0, n.getRouteMatcher)(s)(e) : "") || r;
        o = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: r, optional: n } = a[t],
              i = "[" + (r ? "..." : "") + t + "]";
            return (
              n && (i = (e ? "" : "/") + "[" + i + "]"),
              r && !Array.isArray(e) && (e = [e]),
              (n || t in l) &&
                (o =
                  o.replace(
                    i,
                    r
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8104: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1182),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(t) {
        return (
          (0, n.isInterceptionRouteAppPath)(t) &&
            (t = (0, n.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          i.test(t)
        );
      }
    },
    3552: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3987),
        i = r(1283);
      function o(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            r = new URL(t, e);
          return r.origin === e && (0, i.hasBasePath)(r.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    7053: function (t, e) {
      function r(t, e) {
        let r = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (r[n] = t[n]);
          }),
          r
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    8637: function (t, e) {
      function r(t) {
        let e = {};
        return (
          t.forEach((t, r) => {
            void 0 === e[r]
              ? (e[r] = t)
              : Array.isArray(e[r])
              ? e[r].push(t)
              : (e[r] = [e[r], t]);
          }),
          e
        );
      }
      function n(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function i(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [r, i] = t;
            Array.isArray(i)
              ? i.forEach((t) => e.append(r, n(t)))
              : e.set(r, n(i));
          }),
          e
        );
      }
      function o(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, r) => t.append(r, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    4199: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(3987);
      function i(t) {
        let { re: e, groups: r } = t;
        return (t) => {
          let i = e.exec(t);
          if (!i) return !1;
          let o = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((t) => {
              let e = r[t],
                n = i[e.pos];
              void 0 !== n &&
                (s[t] = ~n.indexOf("/")
                  ? n.split("/").map((t) => o(t))
                  : e.repeat
                  ? [o(n)]
                  : o(n));
            }),
            s
          );
        };
      }
    },
    9964: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return h;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let n = r(1182),
        i = r(42),
        o = r(6674);
      function s(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let r = t.startsWith("...");
        return r && (t = t.slice(3)), { key: t, repeat: r, optional: e };
      }
      function a(t) {
        let e = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && o) {
                let { key: t, optional: n, repeat: l } = s(o[1]);
                return (
                  (r[t] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, i.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, i.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = s(o[1]);
                return (
                  (r[t] = { pos: a++, repeat: e, optional: n }),
                  e ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: r } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: r };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: o,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: c } = s(n),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let h = !1;
        (0 === d.length || d.length > 30) && (h = !0),
          isNaN(parseInt(d.slice(0, 1))) || (h = !0),
          h && (d = r()),
          a ? (o[d] = "" + a + l) : (o[d] = l);
        let f = e ? (0, i.escapeStringRegexp)(e) : "";
        return c
          ? u
            ? "(?:/" + f + "(?<" + d + ">.+?))?"
            : "/" + f + "(?<" + d + ">.+?)"
          : "/" + f + "(?<" + d + ">[^/]+?)";
      }
      function c(t, e) {
        let r;
        let s = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let t = "",
                e = ++r;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: s
            .map((t) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (r && o) {
                let [r] = t.split(o[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: o[1],
                  routeKeys: l,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return o
                ? u({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, i.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(t, e) {
        let r = c(t, e);
        return {
          ...l(t),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function h(t, e) {
        let { parameterizedRoute: r } = a(t),
          { catchAll: n = !0 } = e;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = c(t, !1);
        return { namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    4777: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let r = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(t, e, n) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let i = t[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let r = i.slice(1, -1),
              s = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (s = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function o(t, r) {
              if (null !== t && t !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    r +
                    "')."
                );
              e.forEach((t) => {
                if (t === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(r);
            }
            if (n) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (i = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                o(this.restSlugName, r), (this.restSlugName = r), (i = "[...]");
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              o(this.slugName, r), (this.slugName = r), (i = "[]");
            }
          }
          this.children.has(i) || this.children.set(i, new r()),
            this.children.get(i)._insert(t.slice(1), e, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(t) {
        let e = new r();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    7421: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: r } = t;
        function a() {
          if (e && e.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(r(i, t));
          }
        }
        if (i) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          o(() => {
            var r;
            return (
              null == e ||
                null == (r = e.mountedInstances) ||
                r.add(t.children),
              () => {
                var r;
                null == e ||
                  null == (r = e.mountedInstances) ||
                  r.delete(t.children);
              }
            );
          }),
          o(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3987: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var r in e)
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        })(e, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(t) {
        let e,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return r || ((r = !0), (e = t(...i))), e;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (t) => i.test(t);
      function s() {
        let { protocol: t, hostname: e, port: r } = window.location;
        return t + "//" + e + (r ? ":" + r : "");
      }
      function a() {
        let { href: t } = window.location,
          e = s();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function c(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function d(t, e) {
        let r = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await d(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let h = "undefined" != typeof performance,
        f =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class p extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class y extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    1994: function (t, e, r) {
      r.d(e, {
        W: function () {
          return n;
        },
      });
      function n() {
        for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                n,
                i = "";
              if ("string" == typeof e || "number" == typeof e) i += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var o = e.length;
                  for (r = 0; r < o; r++)
                    e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
                } else for (n in e) e[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
    },
    7104: function (t, e, r) {
      r.d(e, {
        y: function () {
          return _;
        },
      });
      var n = r(4439);
      let i = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function o(t, e, r, o) {
        if (t === e && r === o) return n.Z;
        let s = (e) =>
          (function (t, e, r, n, o) {
            let s, a;
            let l = 0;
            do (s = i((a = e + (r - e) / 2), n, o) - t) > 0 ? (r = a) : (e = a);
            while (Math.abs(s) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : i(s(t), e, o));
      }
      let s = o(0.42, 0, 1, 1),
        a = o(0, 0, 0.58, 1),
        l = o(0.42, 0, 0.58, 1),
        u = (t) => Array.isArray(t) && "number" != typeof t[0];
      var c = r(3223),
        d = r(6378),
        h = r(7457),
        f = r(3627);
      let p = o(0.33, 1.53, 0.69, 0.99),
        m = (0, f.M)(p),
        g = (0, h.o)(m),
        y = {
          linear: n.Z,
          easeIn: s,
          easeInOut: l,
          easeOut: a,
          circIn: d.Z7,
          circInOut: d.X7,
          circOut: d.Bn,
          backIn: m,
          backInOut: g,
          backOut: p,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        v = (t) => {
          if (Array.isArray(t)) {
            (0, c.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, n, i] = t;
            return o(e, r, n, i);
          }
          return "string" == typeof t
            ? ((0, c.k)(void 0 !== y[t], `Invalid easing type '${t}'`), y[t])
            : t;
        };
      var b = r(2888),
        x = r(8913);
      function w({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = u(n) ? n.map(v) : v(n),
          o = { done: !1, value: e[0] },
          s = (r && r.length === e.length ? r : (0, x.Y)(e)).map((e) => e * t),
          a = (0, b.s)(s, e, {
            ease: Array.isArray(i)
              ? i
              : e.map(() => i || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = a(e)), (o.done = e >= t), o),
        };
      }
      var P = r(6717),
        S = r(4438);
      function C(t, e, r) {
        let n = Math.max(e - 5, 0);
        return (0, S.R)(r - t(n), e - n);
      }
      var A = r(9111);
      function E(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let T = ["duration", "bounce"],
        j = ["stiffness", "damping", "mass"];
      function M(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function k({ keyframes: t, restDelta: e, restSpeed: r, ...n }) {
        let i;
        let o = t[0],
          s = t[t.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: d,
            velocity: h,
            duration: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!M(t, j) && M(t, T)) {
              let r = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, o;
                (0, c.K)(
                  t <= (0, P.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let s = 1 - e;
                (s = (0, A.u)(0.05, 1, s)),
                  (t = (0, A.u)(0.01, 10, (0, P.X)(t))),
                  s < 1
                    ? ((i = (e) => {
                        let n = e * s,
                          i = n * t;
                        return 0.001 - ((n - r) / E(e, s)) * Math.exp(-i);
                      }),
                      (o = (e) => {
                        let n = e * s * t,
                          o = Math.pow(s, 2) * Math.pow(e, 2) * t,
                          a = E(Math.pow(e, 2), s);
                        return (
                          ((n * r + r - o) *
                            Math.exp(-n) *
                            (-i(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((i = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                      (o = (e) => t * t * (r - e) * Math.exp(-e * t)));
                let a = (function (t, e, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                  return n;
                })(i, o, 5 / t);
                if (((t = (0, P.w)(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * s * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          m = h ? -(0, P.X)(h) : 0,
          g = u / (2 * Math.sqrt(l * d)),
          y = s - o,
          v = (0, P.X)(Math.sqrt(l / d)),
          b = 5 > Math.abs(y);
        if ((r || (r = b ? 0.01 : 2), e || (e = b ? 0.005 : 0.5), g < 1)) {
          let t = E(v, g);
          i = (e) =>
            s -
            Math.exp(-g * v * e) *
              (((m + g * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => s - Math.exp(-v * t) * (y + (m + v * y) * t);
        else {
          let t = v * Math.sqrt(g * g - 1);
          i = (e) => {
            let r = Math.exp(-g * v * e),
              n = Math.min(t * e, 300);
            return (
              s -
              (r * ((m + g * v * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && f) || null,
          next: (t) => {
            let n = i(t);
            if (p) a.done = t >= f;
            else {
              let o = m;
              0 !== t && (o = g < 1 ? C(i, t, n) : 0);
              let l = Math.abs(o) <= r,
                u = Math.abs(s - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? s : n), a;
          },
        };
      }
      function R({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = r * e,
          v = f + y,
          b = void 0 === s ? v : s(v);
        b !== v && (y = b - f);
        let x = (t) => -y * Math.exp(-t / n),
          w = (t) => b + x(t),
          P = (t) => {
            let e = x(t),
              r = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? b : r);
          },
          S = (t) => {
            m(p.value) &&
              ((d = t),
              (h = k({
                keyframes: [p.value, g(p.value)],
                velocity: C(w, t, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t > d)
                ? h.next(t - d)
                : (e || P(t), p);
            },
          }
        );
      }
      var V = r(8345);
      let D = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => V.Wi.update(e, !0),
          stop: () => (0, V.Pn)(e),
          now: () =>
            V.frameData.isProcessing
              ? V.frameData.timestamp
              : performance.now(),
        };
      };
      function O(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let L = { decay: R, inertia: R, tween: w, keyframes: w, spring: k };
      function _({
        autoplay: t = !0,
        delay: e = 0,
        driver: r = D,
        keyframes: n,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: d,
        ...h
      }) {
        let f,
          p,
          m,
          g,
          y,
          v = 1,
          x = !1,
          S = () => {
            p = new Promise((t) => {
              f = t;
            });
          };
        S();
        let C = L[i] || w;
        C !== w &&
          "number" != typeof n[0] &&
          ((g = (0, b.s)([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let E = C({ ...h, keyframes: n });
        "mirror" === a &&
          (y = C({
            ...h,
            keyframes: [...n].reverse(),
            velocity: -(h.velocity || 0),
          }));
        let T = "idle",
          j = null,
          M = null,
          k = null;
        null === E.calculatedDuration && o && (E.calculatedDuration = O(E));
        let { calculatedDuration: R } = E,
          V = 1 / 0,
          _ = 1 / 0;
        null !== R && (_ = (V = R + s) * (o + 1) - s);
        let I = 0,
          F = (t) => {
            if (null === M) return;
            v > 0 && (M = Math.min(M, t)),
              v < 0 && (M = Math.min(t - _ / v, M));
            let r =
                (I = null !== j ? j : Math.round(t - M) * v) -
                e * (v >= 0 ? 1 : -1),
              i = v >= 0 ? r < 0 : r > _;
            (I = Math.max(r, 0)), "finished" === T && null === j && (I = _);
            let l = I,
              u = E;
            if (o) {
              let t = I / V,
                e = Math.floor(t),
                r = t % 1;
              !r && t >= 1 && (r = 1), 1 === r && e--;
              let n = !!((e = Math.min(e, o + 1)) % 2);
              n &&
                ("reverse" === a
                  ? ((r = 1 - r), s && (r -= s / V))
                  : "mirror" === a && (u = y));
              let i = (0, A.u)(0, 1, r);
              I > _ && (i = "reverse" === a && n ? 1 : 0), (l = i * V);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            g && (c.value = g(c.value));
            let { done: h } = c;
            i || null === R || (h = v >= 0 ? I >= _ : I <= 0);
            let f = null === j && ("finished" === T || ("running" === T && h));
            return d && d(c.value), f && N(), c;
          },
          B = () => {
            m && m.stop(), (m = void 0);
          },
          z = () => {
            (T = "idle"), B(), f(), S(), (M = k = null);
          },
          N = () => {
            (T = "finished"), c && c(), B(), f();
          },
          W = () => {
            if (x) return;
            m || (m = r(F));
            let t = m.now();
            l && l(),
              null !== j ? (M = t - j) : (M && "finished" !== T) || (M = t),
              "finished" === T && S(),
              (k = M),
              (j = null),
              (T = "running"),
              m.start();
          };
        t && W();
        let U = {
          then: (t, e) => p.then(t, e),
          get time() {
            return (0, P.X)(I);
          },
          set time(newTime) {
            (I = newTime = (0, P.w)(newTime)),
              null === j && m && 0 !== v
                ? (M = m.now() - newTime / v)
                : (j = newTime);
          },
          get duration() {
            let t = null === E.calculatedDuration ? O(E) : E.calculatedDuration;
            return (0, P.X)(t);
          },
          get speed() {
            return v;
          },
          set speed(newSpeed) {
            if (newSpeed === v || !m) return;
            (v = newSpeed), (U.time = (0, P.X)(I));
          },
          get state() {
            return T;
          },
          play: W,
          pause: () => {
            (T = "paused"), (j = I);
          },
          stop: () => {
            (x = !0), "idle" !== T && ((T = "idle"), u && u(), z());
          },
          cancel: () => {
            null !== k && F(k), z();
          },
          complete: () => {
            T = "finished";
          },
          sample: (t) => ((M = 0), F(t)),
        };
        return U;
      }
    },
    8881: function (t, e, r) {
      r.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({});
    },
    5750: function (t, e, r) {
      r.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    4252: function (t, e, r) {
      r.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)(null);
    },
    6378: function (t, e, r) {
      r.d(e, {
        Bn: function () {
          return s;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return o;
        },
      });
      var n = r(7457),
        i = r(3627);
      let o = (t) => 1 - Math.sin(Math.acos(t)),
        s = (0, i.M)(o),
        a = (0, n.o)(o);
    },
    7457: function (t, e, r) {
      r.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    3627: function (t, e, r) {
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    8345: function (t, e, r) {
      r.d(e, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var n = r(4439);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let o = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: s,
          cancel: a,
          state: l,
          steps: u,
        } = (function (t, e) {
          let r = !1,
            n = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = o.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new i(),
                    r = new i(),
                    n = 0,
                    o = !1,
                    s = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (t, i = !1, s = !1) => {
                        let l = s && o,
                          u = l ? e : r;
                        return (
                          i && a.add(t),
                          u.add(t) && l && o && (n = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        r.remove(t), a.delete(t);
                      },
                      process: (i) => {
                        if (o) {
                          s = !0;
                          return;
                        }
                        if (
                          ((o = !0),
                          ([e, r] = [r, e]),
                          r.clear(),
                          (n = e.order.length))
                        )
                          for (let r = 0; r < n; r++) {
                            let n = e.order[r];
                            n(i), a.has(n) && (l.schedule(n), t());
                          }
                        (o = !1), s && ((s = !1), l.process(i));
                      },
                    };
                  return l;
                })(() => (r = !0))),
                t
              ),
              {}
            ),
            l = (t) => a[t].process(s),
            u = () => {
              let i = performance.now();
              (r = !1),
                (s.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(i - s.timestamp, 40), 1)),
                (s.timestamp = i),
                (s.isProcessing = !0),
                o.forEach(l),
                (s.isProcessing = !1),
                r && e && ((n = !1), t(u));
            },
            c = () => {
              (r = !0), (n = !0), s.isProcessing || t(u);
            };
          return {
            schedule: o.reduce((t, e) => {
              let n = a[e];
              return (
                (t[e] = (t, e = !1, i = !1) => (r || c(), n.schedule(t, e, i))),
                t
              );
            }, {}),
            cancel: (t) => o.forEach((e) => a[e].cancel(t)),
            state: s,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : n.Z,
          !0
        );
    },
    6399: function (t, e, r) {
      let n;
      r.d(e, {
        E: function () {
          return nV;
        },
      });
      var i,
        o,
        s = r(2265),
        a = r(5750);
      let l = (0, s.createContext)({});
      var u = r(4252),
        c = r(1534);
      let d = (0, s.createContext)({ strict: !1 }),
        h = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        f = "data-" + h("framerAppearId");
      function p(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function m(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function g(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let y = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        v = ["initial", ...y];
      function b(t) {
        return g(t.animate) || v.some((e) => m(t[e]));
      }
      function x(t) {
        return !!(b(t) || t.variants);
      }
      function w(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let P = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        S = {};
      for (let t in P) S[t] = { isEnabled: (e) => P[t].some((t) => !!e[t]) };
      var C = r(4563),
        A = r(8881);
      let E = (0, s.createContext)({}),
        T = Symbol.for("motionComponentSymbol"),
        j = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function M(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (j.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let k = {},
        R = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        V = new Set(R);
      function D(t, { layout: e, layoutId: r }) {
        return (
          V.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!k[t] || "opacity" === t))
        );
      }
      var O = r(3999);
      let L = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        _ = R.length;
      var I = r(7249);
      let F = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var B = r(4305),
        z = r(7492);
      let N = { ...B.Rx, transform: Math.round },
        W = {
          borderWidth: z.px,
          borderTopWidth: z.px,
          borderRightWidth: z.px,
          borderBottomWidth: z.px,
          borderLeftWidth: z.px,
          borderRadius: z.px,
          radius: z.px,
          borderTopLeftRadius: z.px,
          borderTopRightRadius: z.px,
          borderBottomRightRadius: z.px,
          borderBottomLeftRadius: z.px,
          width: z.px,
          maxWidth: z.px,
          height: z.px,
          maxHeight: z.px,
          size: z.px,
          top: z.px,
          right: z.px,
          bottom: z.px,
          left: z.px,
          padding: z.px,
          paddingTop: z.px,
          paddingRight: z.px,
          paddingBottom: z.px,
          paddingLeft: z.px,
          margin: z.px,
          marginTop: z.px,
          marginRight: z.px,
          marginBottom: z.px,
          marginLeft: z.px,
          rotate: z.RW,
          rotateX: z.RW,
          rotateY: z.RW,
          rotateZ: z.RW,
          scale: B.bA,
          scaleX: B.bA,
          scaleY: B.bA,
          scaleZ: B.bA,
          skew: z.RW,
          skewX: z.RW,
          skewY: z.RW,
          distance: z.px,
          translateX: z.px,
          translateY: z.px,
          translateZ: z.px,
          x: z.px,
          y: z.px,
          z: z.px,
          perspective: z.px,
          transformPerspective: z.px,
          opacity: B.Fq,
          originX: z.$C,
          originY: z.$C,
          originZ: z.px,
          zIndex: N,
          fillOpacity: B.Fq,
          strokeOpacity: B.Fq,
          numOctaves: N,
        };
      function U(t, e, r, n) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = t,
          l = !1,
          u = !1,
          c = !0;
        for (let t in e) {
          let r = e[t];
          if ((0, I.f9)(t)) {
            o[t] = r;
            continue;
          }
          let n = W[t],
            d = F(r, n);
          if (V.has(t)) {
            if (((l = !0), (s[t] = d), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = d)) : (i[t] = d);
        }
        if (
          (!e.transform &&
            (l || n
              ? (i.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let o = "";
                  for (let e = 0; e < _; e++) {
                    let r = R[e];
                    if (void 0 !== t[r]) {
                      let e = L[r] || r;
                      o += `${e}(${t[r]}) `;
                    }
                  }
                  return (
                    e && !t.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(t, n ? "" : o)) : r && n && (o = "none"),
                    o
                  );
                })(t.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      let $ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function H(t, e, r) {
        for (let n in e) (0, O.i)(e[n]) || D(n, r) || (t[n] = e[n]);
      }
      let X = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function G(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          X.has(t)
        );
      }
      let q = (t) => !G(t);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (q = (t) => (t.startsWith("on") ? !G(t) : i(t)));
      } catch (t) {}
      function Y(t, e, r) {
        return "string" == typeof t ? t : z.px.transform(e + r * t);
      }
      let Z = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        K = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Q(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        h
      ) {
        if ((U(t, u, c, h), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: f, style: p, dimensions: m } = t;
        f.transform && (m && (p.transform = f.transform), delete f.transform),
          m &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (t, e, r) {
              let n = Y(e, t.x, t.width),
                i = Y(r, t.y, t.height);
              return `${n} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== e && (f.x = e),
          void 0 !== r && (f.y = r),
          void 0 !== n && (f.scale = n),
          void 0 !== s &&
            (function (t, e, r = 1, n = 0, i = !0) {
              t.pathLength = 1;
              let o = i ? Z : K;
              t[o.offset] = z.px.transform(-n);
              let s = z.px.transform(e),
                a = z.px.transform(r);
              t[o.array] = `${s} ${a}`;
            })(f, s, a, l, !1);
      }
      let J = () => ({ ...$(), attrs: {} }),
        tt = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function te(t, { style: e, vars: r }, n, i) {
        for (let o in (Object.assign(t.style, e, i && i.getProjectionStyles(n)),
        r))
          t.style.setProperty(o, r[o]);
      }
      let tr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tn(t, e, r, n) {
        for (let r in (te(t, e, void 0, n), e.attrs))
          t.setAttribute(tr.has(r) ? r : h(r), e.attrs[r]);
      }
      function ti(t, e) {
        let { style: r } = t,
          n = {};
        for (let i in r)
          ((0, O.i)(r[i]) || (e.style && (0, O.i)(e.style[i])) || D(i, t)) &&
            (n[i] = r[i]);
        return n;
      }
      function to(t, e) {
        let r = ti(t, e);
        for (let n in t)
          ((0, O.i)(t[n]) || (0, O.i)(e[n])) &&
            (r[
              -1 !== R.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return r;
      }
      function ts(t, e, r, n = {}, i = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          e
        );
      }
      var ta = r(3576);
      let tl = (t) => Array.isArray(t),
        tu = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tc = (t) => (tl(t) ? t[t.length - 1] || 0 : t);
      function td(t) {
        let e = (0, O.i)(t) ? t.get() : t;
        return tu(e) ? e.toValue() : e;
      }
      let th = (t) => (e, r) => {
        let n = (0, s.useContext)(l),
          i = (0, s.useContext)(u.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: r,
              },
              n,
              i,
              o
            ) {
              let s = {
                latestValues: (function (t, e, r, n) {
                  let i = {},
                    o = n(t, {});
                  for (let t in o) i[t] = td(o[t]);
                  let { initial: s, animate: a } = t,
                    l = b(t),
                    u = x(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === s && (s = e.initial),
                    void 0 === a && (a = e.animate));
                  let c = !!r && !1 === r.initial,
                    d = (c = c || !1 === s) ? a : s;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !g(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((e) => {
                        let r = ts(t, e);
                        if (!r) return;
                        let { transitionEnd: n, transition: o, ...s } = r;
                        for (let t in s) {
                          let e = s[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (i[t] = e);
                        }
                        for (let t in n) i[t] = n[t];
                      }),
                    i
                  );
                })(n, i, o, t),
                renderState: e(),
              };
              return r && (s.mount = (t) => r(n, t, s)), s;
            })(t, e, n, i);
        return r ? o() : (0, ta.h)(o);
      };
      var tf = r(8345);
      let tp = {
          useVisualState: th({
            scrapeMotionValuesFromProps: to,
            createRenderState: J,
            onMount: (t, e, { renderState: r, latestValues: n }) => {
              tf.Wi.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tf.Wi.render(() => {
                  Q(
                    r,
                    n,
                    { enableHardwareAcceleration: !1 },
                    tt(e.tagName),
                    t.transformTemplate
                  ),
                    tn(e, r);
                });
            },
          }),
        },
        tm = {
          useVisualState: th({
            scrapeMotionValuesFromProps: ti,
            createRenderState: $,
          }),
        };
      function tg(t, e, r, n = { passive: !0 }) {
        return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
      }
      let ty = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tv(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tb = (t) => (e) => ty(e) && t(e, tv(e));
      function tx(t, e, r, n) {
        return tg(t, e, tb(r), n);
      }
      var tw = r(332);
      function tP(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tS = tP("dragHorizontal"),
        tC = tP("dragVertical");
      function tA(t) {
        let e = !1;
        if ("y" === t) e = tC();
        else if ("x" === t) e = tS();
        else {
          let t = tS(),
            r = tC();
          t && r
            ? (e = () => {
                t(), r();
              })
            : (t && t(), r && r());
        }
        return e;
      }
      function tE() {
        let t = tA(!0);
        return !t || (t(), !1);
      }
      class tT {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tj(t, e) {
        let r = "onHover" + (e ? "Start" : "End");
        return tx(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (n, i) => {
            if ("touch" === n.type || tE()) return;
            let o = t.getProps();
            t.animationState &&
              o.whileHover &&
              t.animationState.setActive("whileHover", e),
              o[r] && tf.Wi.update(() => o[r](n, i));
          },
          { passive: !t.getProps()[r] }
        );
      }
      class tM extends tT {
        mount() {
          this.unmount = (0, tw.z)(tj(this.node, !0), tj(this.node, !1));
        }
        unmount() {}
      }
      class tk extends tT {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tw.z)(
            tg(this.node.current, "focus", () => this.onFocus()),
            tg(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tR = (t, e) => !!e && (t === e || tR(t, e.parentElement));
      var tV = r(4439);
      function tD(t, e) {
        if (!e) return;
        let r = new PointerEvent("pointer" + t);
        e(r, tv(r));
      }
      class tO extends tT {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tV.Z),
            (this.removeEndListeners = tV.Z),
            (this.removeAccessibleListeners = tV.Z),
            (this.startPointerPress = (t, e) => {
              if ((this.removeEndListeners(), this.isPressing)) return;
              let r = this.node.getProps(),
                n = tx(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: r, onTapCancel: n } = this.node.getProps();
                    tf.Wi.update(() => {
                      tR(this.node.current, t.target)
                        ? r && r(t, e)
                        : n && n(t, e);
                    });
                  },
                  { passive: !(r.onTap || r.onPointerUp) }
                ),
                i = tx(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(r.onTapCancel || r.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tw.z)(n, i)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tg(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tg(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tD("up", (t, e) => {
                            let { onTap: r } = this.node.getProps();
                            r && tf.Wi.update(() => r(t, e));
                          });
                      }
                    )),
                    tD("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tg(this.node.current, "blur", () => {
                  this.isPressing &&
                    tD("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tw.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: r, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && tf.Wi.update(() => r(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tE()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: r } = this.node.getProps();
          r && tf.Wi.update(() => r(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tx(this.node.current, "pointerdown", this.startPointerPress, {
              passive: !(t.onTapStart || t.onPointerStart),
            }),
            r = tg(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tw.z)(e, r);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tL = new WeakMap(),
        t_ = new WeakMap(),
        tI = (t) => {
          let e = tL.get(t.target);
          e && e(t);
        },
        tF = (t) => {
          t.forEach(tI);
        },
        tB = { some: 0, all: 1 };
      class tz extends tT {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: n = "some", once: i } = t,
            o = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : tB[n],
            };
          return (function (t, e, r) {
            let n = (function ({ root: t, ...e }) {
              let r = t || document;
              t_.has(r) || t_.set(r, {});
              let n = t_.get(r),
                i = JSON.stringify(e);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(tF, { root: t, ...e })),
                n[i]
              );
            })(e);
            return (
              tL.set(t, r),
              n.observe(t),
              () => {
                tL.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, o, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), i && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              o = e ? r : n;
            o && o(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function tN(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function tW(t, e, r) {
        let n = t.getProps();
        return ts(
          n,
          e,
          void 0 !== r ? r : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.getVelocity())), e;
          })(t)
        );
      }
      var tU = r(3223),
        t$ = r(6717);
      let tH = { current: !1 },
        tX = (t) => Array.isArray(t) && "number" == typeof t[0],
        tG = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        tq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tG([0, 0.65, 0.55, 1]),
          circOut: tG([0.55, 0, 1, 0.45]),
          backIn: tG([0.31, 0.01, 0.66, -0.59]),
          backOut: tG([0.33, 1.53, 0.69, 0.99]),
        };
      var tY = r(7104);
      let tZ =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        tK = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        tQ = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && tq[e]) ||
              tX(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        tJ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t0 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        t1 = { type: "keyframes", duration: 0.8 },
        t3 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        t2 = (t, { keyframes: e }) =>
          e.length > 2
            ? t1
            : V.has(t)
            ? t.startsWith("scale")
              ? t0(e[1])
              : tJ
            : t3;
      var t5 = r(5636);
      let t4 = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (t5.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var t9 = r(796);
      let t6 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function t7(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(t9.KP) || [];
        if (!n) return t;
        let i = r.replace(n, ""),
          o = t6.has(e) ? 1 : 0;
        return n !== r && (o *= 100), e + "(" + o + i + ")";
      }
      let t8 = /([a-z-]*)\(.*?\)/g,
        et = {
          ...t5.P,
          getAnimatableNone: (t) => {
            let e = t.match(t8);
            return e ? e.map(t7).join(" ") : t;
          },
        };
      var ee = r(3964);
      let er = {
          ...W,
          color: ee.$,
          backgroundColor: ee.$,
          outlineColor: ee.$,
          fill: ee.$,
          stroke: ee.$,
          borderColor: ee.$,
          borderTopColor: ee.$,
          borderRightColor: ee.$,
          borderBottomColor: ee.$,
          borderLeftColor: ee.$,
          filter: et,
          WebkitFilter: et,
        },
        en = (t) => er[t];
      function ei(t, e) {
        let r = en(t);
        return (
          r !== et && (r = t5.P),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
      let eo = (t) => /^0[^.\s]+$/.test(t);
      function es(t, e) {
        return t[e] || t.default || t;
      }
      let ea =
        (t, e, r, n = {}) =>
        (i) => {
          let o = es(n, t) || {},
            s = o.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= (0, t$.w)(s);
          let l = (function (t, e, r, n) {
              let i, o;
              let s = t4(e, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let a = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < i.length; t++) {
                var u;
                null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                  ("number" == typeof (u = i[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || eo(u)
                    : void 0) && l.push(t),
                  "string" == typeof i[t] &&
                    "none" !== i[t] &&
                    "0" !== i[t] &&
                    (o = i[t]);
              }
              if (s && l.length && o)
                for (let t = 0; t < l.length; t++) i[l[t]] = ei(e, o);
              return i;
            })(e, t, r, o),
            u = l[0],
            c = l[l.length - 1],
            d = t4(t, u),
            h = t4(t, c);
          (0, tU.K)(
            d === h,
            `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
          );
          let f = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), o.onUpdate && o.onUpdate(t);
            },
            onComplete: () => {
              i(), o.onComplete && o.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(o) && (f = { ...f, ...t2(t, f) }),
            f.duration && (f.duration = (0, t$.w)(f.duration)),
            f.repeatDelay && (f.repeatDelay = (0, t$.w)(f.repeatDelay)),
            !d || !h || tH.current || !1 === o.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tV.Z,
                  pause: tV.Z,
                  stop: tV.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tV.Z,
                  complete: tV.Z,
                }
              );
              return e
                ? (0, tY.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: i,
                  })
                : i();
            })(tH.current ? { ...f, delay: 0 } : f);
          if (
            !n.isHandoff &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let r = (function (t, e, { onUpdate: r, onComplete: n, ...i }) {
              let o, s;
              if (
                !(
                  tZ() &&
                  tK.has(e) &&
                  !i.repeatDelay &&
                  "mirror" !== i.repeatType &&
                  0 !== i.damping &&
                  "inertia" !== i.type
                )
              )
                return !1;
              let a = !1,
                l = () => {
                  s = new Promise((t) => {
                    o = t;
                  });
                };
              l();
              let { keyframes: u, duration: c = 300, ease: d, times: h } = i;
              if (tQ(e, i)) {
                let t = (0, tY.y)({ ...i, repeat: 0, delay: 0 }),
                  e = { done: !1, value: u[0] },
                  r = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  (e = t.sample(n)), r.push(e.value), (n += 10);
                (h = void 0), (u = r), (c = n - 10), (d = "linear");
              }
              let f = (function (
                  t,
                  e,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: o = 0,
                    repeatType: s = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: r };
                  l && (u.offset = l);
                  let c = (function t(e) {
                    if (e)
                      return tX(e)
                        ? tG(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : tq[e];
                  })(a);
                  return (
                    Array.isArray(c) && (u.easing = c),
                    t.animate(u, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(c) ? "linear" : c,
                      fill: "both",
                      iterations: o + 1,
                      direction: "reverse" === s ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, u, {
                  ...i,
                  duration: c,
                  ease: d,
                  times: h,
                }),
                p = () => f.cancel(),
                m = () => {
                  tf.Wi.update(p), o(), l();
                };
              return (
                (f.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: r = "loop" }) {
                      let n =
                        e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(u, i)
                  ),
                    n && n(),
                    m();
                }),
                {
                  then: (t, e) => s.then(t, e),
                  attachTimeline: (t) => (
                    (f.timeline = t), (f.onfinish = null), tV.Z
                  ),
                  get time() {
                    return (0, t$.X)(f.currentTime || 0);
                  },
                  set time(newTime) {
                    f.currentTime = (0, t$.w)(newTime);
                  },
                  get speed() {
                    return f.playbackRate;
                  },
                  set speed(newSpeed) {
                    f.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, t$.X)(c);
                  },
                  play: () => {
                    a || (f.play(), (0, tf.Pn)(p));
                  },
                  pause: () => f.pause(),
                  stop: () => {
                    if (((a = !0), "idle" === f.playState)) return;
                    let { currentTime: e } = f;
                    if (e) {
                      let r = (0, tY.y)({ ...i, autoplay: !1 });
                      t.setWithVelocity(
                        r.sample(e - 10).value,
                        r.sample(e).value,
                        10
                      );
                    }
                    m();
                  },
                  complete: () => f.finish(),
                  cancel: m,
                }
              );
            })(e, t, f);
            if (r) return r;
          }
          return (0, tY.y)(f);
        };
      function el(t) {
        return !!((0, O.i)(t) && t.add);
      }
      let eu = (t) => /^\-?\d*\.?\d+$/.test(t);
      var ec = r(3078);
      let ed = (t) => (e) => e.test(t),
        eh = [
          B.Rx,
          z.px,
          z.aQ,
          z.RW,
          z.vw,
          z.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        ef = (t) => eh.find(ed(t)),
        ep = [...eh, ee.$, t5.P],
        em = (t) => ep.find(ed(t));
      function eg(t, e, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: s,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        n && (o = n);
        let u = [],
          c = i && t.animationState && t.animationState.getState()[i];
        for (let e in a) {
          let n = t.getValue(e),
            i = a[e];
          if (
            !n ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(c, e))
          )
            continue;
          let s = { delay: r, elapsed: 0, ...es(o || {}, e) };
          if (window.HandoffAppearAnimations) {
            let r = t.getProps()[f];
            if (r) {
              let t = window.HandoffAppearAnimations(r, e, n, tf.Wi);
              null !== t && ((s.elapsed = t), (s.isHandoff = !0));
            }
          }
          let d =
            !s.isHandoff &&
            !(function (t, e) {
              let r = t.get();
              if (!Array.isArray(e)) return r !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== r) return !0;
            })(n, i);
          if (
            ("spring" === s.type && (n.getVelocity() || s.velocity) && (d = !1),
            n.animation && (d = !1),
            d)
          )
            continue;
          n.start(
            ea(e, n, i, t.shouldReduceMotion && V.has(e) ? { type: !1 } : s)
          );
          let h = n.animation;
          el(l) && (l.add(e), h.then(() => l.remove(e))), u.push(h);
        }
        return (
          s &&
            Promise.all(u).then(() => {
              s &&
                (function (t, e) {
                  let r = tW(t, e),
                    {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...o
                    } = r ? t.makeTargetAnimatable(r, !1) : {};
                  for (let e in (o = { ...o, ...n })) {
                    let r = tc(o[e]);
                    t.hasValue(e)
                      ? t.getValue(e).set(r)
                      : t.addValue(e, (0, ec.BX)(r));
                  }
                })(t, s);
            }),
          u
        );
      }
      function ey(t, e, r = {}) {
        let n = tW(t, e, r.custom),
          { transition: i = t.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let o = n ? () => Promise.all(eg(t, n, r)) : () => Promise.resolve(),
          s =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = i;
                  return (function (t, e, r = 0, n = 0, i = 1, o) {
                    let s = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ev)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            s.push(
                              ey(t, e, { ...o, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(t, e, o + n, s, a, r);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([o(), s(r.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [o, s] : [s, o];
          return t().then(() => e());
        }
      }
      function ev(t, e) {
        return t.sortNodePosition(e);
      }
      let eb = [...y].reverse(),
        ex = y.length;
      function ew(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class eP extends tT {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) =>
                        (function (t, e, r = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => ey(t, e, r)));
                          else if ("string" == typeof e) n = ey(t, e, r);
                          else {
                            let i =
                              "function" == typeof e ? tW(t, e, r.custom) : e;
                            n = Promise.all(eg(t, i, r));
                          }
                          return n.then(() => t.notify("AnimationComplete", e));
                        })(t, e, r)
                      )
                    ),
                  r = {
                    animate: ew(!0),
                    whileInView: ew(),
                    whileHover: ew(),
                    whileTap: ew(),
                    whileDrag: ew(),
                    whileFocus: ew(),
                    exit: ew(),
                  },
                  n = !0,
                  i = (e, r) => {
                    let n = tW(t, r);
                    if (n) {
                      let { transition: t, transitionEnd: r, ...i } = n;
                      e = { ...e, ...i, ...r };
                    }
                    return e;
                  };
                function o(o, s) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    c = new Set(),
                    d = {},
                    h = 1 / 0;
                  for (let e = 0; e < ex; e++) {
                    var f;
                    let p = eb[e],
                      y = r[p],
                      v = void 0 !== a[p] ? a[p] : l[p],
                      b = m(v),
                      x = p === s ? y.isActive : null;
                    !1 === x && (h = e);
                    let w = v === l[p] && v !== a[p] && b;
                    if (
                      (w && n && t.manuallyAnimateOnMount && (w = !1),
                      (y.protectedKeys = { ...d }),
                      (!y.isActive && null === x) ||
                        (!v && !y.prevProp) ||
                        g(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let P =
                        ((f = y.prevProp),
                        "string" == typeof v
                          ? v !== f
                          : !!Array.isArray(v) && !tN(v, f)),
                      S =
                        P || (p === s && y.isActive && !w && b) || (e > h && b),
                      C = Array.isArray(v) ? v : [v],
                      A = C.reduce(i, {});
                    !1 === x && (A = {});
                    let { prevResolvedValues: E = {} } = y,
                      T = { ...E, ...A },
                      j = (t) => {
                        (S = !0), c.delete(t), (y.needsAnimating[t] = !0);
                      };
                    for (let t in T) {
                      let e = A[t],
                        r = E[t];
                      d.hasOwnProperty(t) ||
                        (e !== r
                          ? tl(e) && tl(r)
                            ? !tN(e, r) || P
                              ? j(t)
                              : (y.protectedKeys[t] = !0)
                            : void 0 !== e
                            ? j(t)
                            : c.add(t)
                          : void 0 !== e && c.has(t)
                          ? j(t)
                          : (y.protectedKeys[t] = !0));
                    }
                    (y.prevProp = v),
                      (y.prevResolvedValues = A),
                      y.isActive && (d = { ...d, ...A }),
                      n && t.blockInitialAnimation && (S = !1),
                      S &&
                        !w &&
                        u.push(
                          ...C.map((t) => ({
                            animation: t,
                            options: { type: p, ...o },
                          }))
                        );
                  }
                  if (c.size) {
                    let e = {};
                    c.forEach((r) => {
                      let n = t.getBaseTarget(r);
                      void 0 !== n && (e[r] = n);
                    }),
                      u.push({ animation: e });
                  }
                  let p = !!u.length;
                  return (
                    n &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, n, i) {
                    var s;
                    if (r[e].isActive === n) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var r;
                        return null === (r = t.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(e, n);
                      }),
                      (r[e].isActive = n);
                    let a = o(i, e);
                    for (let t in r) r[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), g(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eS = 0;
      class eC extends tT {
        constructor() {
          super(...arguments), (this.id = eS++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: r,
            } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t, {
            custom: null != r ? r : this.node.getProps().custom,
          });
          e && !t && i.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let eA = (t, e) => Math.abs(t - e);
      class eE {
        constructor(t, e, { transformPagePoint: r, contextWindow: n } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = eM(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                i =
                  ((t = r.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(eA(t.x, e.x) ** 2 + eA(t.y, e.y) ** 2) >= 3);
              if (!n && !i) return;
              let { point: o } = r,
                { timestamp: s } = tf.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, r),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, r);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eT(e, this.transformPagePoint)),
                tf.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: n } = this.handlers,
                i = eM(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : eT(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(t, i), n && n(t, i);
            }),
            !ty(t))
          )
            return;
          (this.handlers = e),
            (this.transformPagePoint = r),
            (this.contextWindow = n || window);
          let i = eT(tv(t), this.transformPagePoint),
            { point: o } = i,
            { timestamp: s } = tf.frameData;
          this.history = [{ ...o, timestamp: s }];
          let { onSessionStart: a } = e;
          a && a(t, eM(i, this.history)),
            (this.removeListeners = (0, tw.z)(
              tx(this.contextWindow, "pointermove", this.handlePointerMove),
              tx(this.contextWindow, "pointerup", this.handlePointerUp),
              tx(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tf.Pn)(this.updatePoint);
        }
      }
      function eT(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ej(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eM({ point: t }, e) {
        return {
          point: t,
          delta: ej(t, ek(e)),
          offset: ej(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              n = null,
              i = ek(t);
            for (
              ;
              r >= 0 &&
              ((n = t[r]), !(i.timestamp - n.timestamp > (0, t$.w)(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = (0, t$.X)(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function ek(t) {
        return t[t.length - 1];
      }
      var eR = r(6376),
        eV = r(8090);
      function eD(t) {
        return t.max - t.min;
      }
      function eO(t, e = 0, r = 0.01) {
        return Math.abs(t - e) <= r;
      }
      function eL(t, e, r, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, eV.C)(e.min, e.max, t.origin)),
          (t.scale = eD(r) / eD(e)),
          (eO(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, eV.C)(r.min, r.max, t.origin) - t.originPoint),
          (eO(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function e_(t, e, r, n) {
        eL(t.x, e.x, r.x, n ? n.originX : void 0),
          eL(t.y, e.y, r.y, n ? n.originY : void 0);
      }
      function eI(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + eD(e));
      }
      function eF(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + eD(e));
      }
      function eB(t, e, r) {
        eF(t.x, e.x, r.x), eF(t.y, e.y, r.y);
      }
      var ez = r(9111);
      function eN(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function eW(t, e) {
        let r = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function eU(t, e, r) {
        return { min: e$(t, e), max: e$(t, r) };
      }
      function e$(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eH = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eX = () => ({ x: eH(), y: eH() }),
        eG = () => ({ min: 0, max: 0 }),
        eq = () => ({ x: eG(), y: eG() });
      function eY(t) {
        return [t("x"), t("y")];
      }
      function eZ({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function eK(t) {
        return void 0 === t || 1 === t;
      }
      function eQ({ scale: t, scaleX: e, scaleY: r }) {
        return !eK(t) || !eK(e) || !eK(r);
      }
      function eJ(t) {
        return eQ(t) || e0(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function e0(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function e1(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function e3(t, e = 0, r = 1, n, i) {
        (t.min = e1(t.min, e, r, n, i)), (t.max = e1(t.max, e, r, n, i));
      }
      function e2(t, { x: e, y: r }) {
        e3(t.x, e.translate, e.scale, e.originPoint),
          e3(t.y, r.translate, r.scale, r.originPoint);
      }
      function e5(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function e4(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function e9(t, e, [r, n, i]) {
        let o = void 0 !== e[i] ? e[i] : 0.5,
          s = (0, eV.C)(t.min, t.max, o);
        e3(t, e[r], e[n], s, e.scale);
      }
      let e6 = ["x", "scaleX", "originX"],
        e7 = ["y", "scaleY", "originY"];
      function e8(t, e) {
        e9(t.x, e, e6), e9(t.y, e, e7);
      }
      function rt(t, e) {
        return eZ(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let re = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        rr = new WeakMap();
      class rn {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eq()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          (r && !1 === r.isPresent) ||
            (this.panSession = new eE(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(tv(t, "page").point);
                },
                onStart: (t, e) => {
                  let {
                    drag: r,
                    dragPropagation: n,
                    onDragStart: i,
                  } = this.getProps();
                  if (
                    r &&
                    !n &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tA(r)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    eY((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (z.aQ.test(e)) {
                        let { projection: r } = this.visualElement;
                        if (r && r.layout) {
                          let n = r.layout.layoutBox[t];
                          if (n) {
                            let t = eD(n);
                            e = (parseFloat(e) / 100) * t;
                          }
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    i && tf.Wi.update(() => i(t, e), !1, !0);
                  let { animationState: o } = this.visualElement;
                  o && o.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: r,
                    dragDirectionLock: n,
                    onDirectionLock: i,
                    onDrag: o,
                  } = this.getProps();
                  if (!r && !this.openGlobalLock) return;
                  let { offset: s } = e;
                  if (n && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let r = null;
                      return (
                        Math.abs(t.y) > e
                          ? (r = "y")
                          : Math.abs(t.x) > e && (r = "x"),
                        r
                      );
                    })(s)),
                      null !== this.currentDirection &&
                        i &&
                        i(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", e.point, s),
                    this.updateAxis("y", e.point, s),
                    this.visualElement.render(),
                    o && o(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                contextWindow: re(this.visualElement),
              }
            ));
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && tf.Wi.update(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: n } = this.getProps();
          if (!r || !ri(t, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            o = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: r }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, eV.C)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = n ? (0, eV.C)(r, t, n.max) : Math.min(t, r)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            i.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: r } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            i = this.constraints;
          e && p(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: n, right: i }
              ) {
                return { x: eN(t.x, r, i), y: eN(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eU(t, "left", "right"), y: eU(t, "top", "bottom") }
              );
            })(r)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eY((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !p(e)) return !1;
          let n = e.current;
          (0, tU.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (t, e, r) {
              let n = rt(t, r),
                { scroll: i } = e;
              return i && (e4(n.x, i.offset.x), e4(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: eW((t = i.layout.layoutBox).x, o.x), y: eW(t.y, o.y) };
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!t), t && (s = eZ(t));
          }
          return s;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eY((s) => {
              if (!ri(s, e, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return r.start(ea(t, r, 0, e));
        }
        stopAnimation() {
          eY((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps();
          return (
            r[e] ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          eY((e) => {
            let { drag: r } = this.getProps();
            if (!ri(e, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[e];
              i.set(t[e] - (0, eV.C)(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!p(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          eY((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let r = e.get();
              n[t] = (function (t, e) {
                let r = 0.5,
                  n = eD(t),
                  i = eD(e);
                return (
                  i > n
                    ? (r = (0, eR.Y)(e.min, e.max - n, t.min))
                    : n > i && (r = (0, eR.Y)(t.min, t.max - i, e.min)),
                  (0, ez.u)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            eY((e) => {
              if (!ri(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: i, max: o } = this.constraints[e];
              r.set((0, eV.C)(i, o, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rr.set(this.visualElement, this);
          let t = tx(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              p(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", e);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            e();
          let i = tg(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eY((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), t(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function ri(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      class ro extends tT {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tV.Z),
            (this.removeListeners = tV.Z),
            (this.controls = new rn(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tV.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rs = (t) => (e, r) => {
        t && tf.Wi.update(() => t(e, r));
      };
      class ra extends tT {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tV.Z);
        }
        onPointerDown(t) {
          this.session = new eE(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: re(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: r,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: rs(t),
            onStart: rs(e),
            onMove: r,
            onEnd: (t, e) => {
              delete this.session, n && tf.Wi.update(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tx(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let rl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ru(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rc = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!z.px.test(t)) return t;
            t = parseFloat(t);
          }
          let r = ru(t, e.target.x),
            n = ru(t, e.target.y);
          return `${r}% ${n}%`;
        },
      };
      class rd extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = t;
          Object.assign(k, rf),
            i &&
              (e.group && e.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rl.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    tf.Wi.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rh(t) {
        let [e, r] = (function () {
            let t = (0, s.useContext)(u.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: r, register: n } = t,
              i = (0, s.useId)();
            return (
              (0, s.useEffect)(() => n(i), []),
              !e && r ? [!1, () => r && r(i)] : [!0]
            );
          })(),
          n = (0, s.useContext)(A.p);
        return s.createElement(rd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(E),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let rf = {
        borderRadius: {
          ...rc,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: rc,
        borderTopRightRadius: rc,
        borderBottomLeftRadius: rc,
        borderBottomRightRadius: rc,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: r }) => {
            let n = t5.P.parse(t);
            if (n.length > 5) return t;
            let i = t5.P.createTransformer(t),
              o = "number" != typeof n[0] ? 1 : 0,
              s = r.x.scale * e.x,
              a = r.y.scale * e.y;
            (n[0 + o] /= s), (n[1 + o] /= a);
            let l = (0, eV.C)(s, a, 0.5);
            return (
              "number" == typeof n[2 + o] && (n[2 + o] /= l),
              "number" == typeof n[3 + o] && (n[3 + o] /= l),
              i(n)
            );
          },
        },
      };
      var rp = r(4081),
        rm = r(6378);
      let rg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ry = rg.length,
        rv = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rb = (t) => "number" == typeof t || z.px.test(t);
      function rx(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rw = rS(0, 0.5, rm.Bn),
        rP = rS(0.5, 0.95, tV.Z);
      function rS(t, e, r) {
        return (n) => (n < t ? 0 : n > e ? 1 : r((0, eR.Y)(t, e, n)));
      }
      function rC(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rA(t, e) {
        rC(t.x, e.x), rC(t.y, e.y);
      }
      function rE(t, e, r, n, i) {
        return (
          (t -= e),
          (t = n + (1 / r) * (t - n)),
          void 0 !== i && (t = n + (1 / i) * (t - n)),
          t
        );
      }
      function rT(t, e, [r, n, i], o, s) {
        !(function (t, e = 0, r = 1, n = 0.5, i, o = t, s = t) {
          if (
            (z.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eV.C)(s.min, s.max, e / 100) - s.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eV.C)(o.min, o.max, n);
          t === o && (a -= e),
            (t.min = rE(t.min, e, r, a, i)),
            (t.max = rE(t.max, e, r, a, i));
        })(t, e[r], e[n], e[i], e.scale, o, s);
      }
      let rj = ["x", "scaleX", "originX"],
        rM = ["y", "scaleY", "originY"];
      function rk(t, e, r, n) {
        rT(t.x, e, rj, r ? r.x : void 0, n ? n.x : void 0),
          rT(t.y, e, rM, r ? r.y : void 0, n ? n.y : void 0);
      }
      function rR(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rV(t) {
        return rR(t.x) && rR(t.y);
      }
      function rD(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function rO(t) {
        return eD(t.x) / eD(t.y);
      }
      var rL = r(9013);
      class r_ {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, rL.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, rL.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rI(t, e, r) {
        let n = "",
          i = t.x.translate / e.x,
          o = t.y.translate / e.y;
        if (
          ((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          r)
        ) {
          let { rotate: t, rotateX: e, rotateY: i } = r;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let s = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== s || 1 !== a) && (n += `scale(${s}, ${a})`), n || "none";
      }
      let rF = (t, e) => t.depth - e.depth;
      class rB {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, rL.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, rL.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rF),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rz = ["", "X", "Y", "Z"],
        rN = { visibility: "hidden" },
        rW = 0,
        rU = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function r$({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, r = null == e ? void 0 : e()) {
            (this.id = rW++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (rU.totalNodes =
                    rU.resolvedTargetDeltas =
                    rU.recalculatedProjection =
                      0),
                  this.nodes.forEach(rG),
                  this.nodes.forEach(r0),
                  this.nodes.forEach(r1),
                  this.nodes.forEach(rq),
                  window.MotionDebug && window.MotionDebug.record(rU);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rB());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new rp.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = performance.now(),
                      n = ({ timestamp: e }) => {
                        let i = e - r;
                        i >= 250 && ((0, tf.Pn)(n), t(i - 250));
                      };
                    return tf.Wi.read(n, !0), () => (0, tf.Pn)(n);
                  })(n, 0)),
                  rl.hasAnimatedSinceResize &&
                    ((rl.hasAnimatedSinceResize = !1), this.nodes.forEach(rJ));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        r6,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !rD(this.targetLayout, n) || r,
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...es(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || rJ(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tf.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r3),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rZ);
              return;
            }
            this.isUpdating || this.nodes.forEach(rK),
              (this.isUpdating = !1),
              this.nodes.forEach(rQ),
              this.nodes.forEach(rH),
              this.nodes.forEach(rX),
              this.clearAllSnapshots();
            let t = performance.now();
            (tf.frameData.delta = (0, ez.u)(
              0,
              1e3 / 60,
              t - tf.frameData.timestamp
            )),
              (tf.frameData.timestamp = t),
              (tf.frameData.isProcessing = !0),
              tf.S6.update.process(tf.frameData),
              tf.S6.preRender.process(tf.frameData),
              tf.S6.render.process(tf.frameData),
              (tf.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rY), this.sharedNodes.forEach(r2);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tf.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tf.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eq()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !rV(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            t &&
              (e || eJ(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              t && (n = this.removeTransform(n)),
              nt((e = n).x),
              nt(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return eq();
            let e = t.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (e4(e.x, r.offset.x), e4(e.y, r.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = eq();
            rA(e, t);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: o } = n;
              if (n !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  rA(e, t);
                  let { scroll: r } = this.root;
                  r && (e4(e.x, -r.offset.x), e4(e.y, -r.offset.y));
                }
                e4(e.x, i.offset.x), e4(e.y, i.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let r = eq();
            rA(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                e8(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                eJ(n.latestValues) && e8(r, n.latestValues);
            }
            return eJ(this.latestValues) && e8(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = eq();
            rA(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !eJ(r.latestValues)) continue;
              eQ(r.latestValues) && r.updateSnapshot();
              let n = eq();
              rA(n, r.measurePageBox()),
                rk(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return eJ(this.latestValues) && rk(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tf.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                t ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tf.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eq()),
                    (this.relativeTargetOrigin = eq()),
                    eB(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rA(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eq()), (this.targetWithTransforms = eq())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      eI(r.x, n.x, i.x),
                      eI(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rA(this.target, this.layout.layoutBox),
                      e2(this.target, this.targetDelta))
                    : rA(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eq()),
                      (this.relativeTargetOrigin = eq()),
                      eB(this.relativeTargetOrigin, this.target, t.target),
                      rA(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rU.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              eQ(this.parent.latestValues) ||
              e0(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              r = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tf.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            rA(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, r, n = !1) {
              let i, o;
              let s = r.length;
              if (s) {
                e.x = e.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = r[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      e8(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((e.x *= o.x.scale), (e.y *= o.y.scale), e2(t, o)),
                    n && eJ(i.latestValues) && e8(t, i.latestValues));
                }
                (e.x = e5(e.x)), (e.y = e5(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = eX()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = eX()),
              (this.projectionDeltaWithTransform = eX()));
            let u = this.projectionTransform;
            e_(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rI(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== s ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rU.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              s = eX();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eq(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(r9)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (r5(s.x, t.x, n),
                  r5(s.y, t.y, n),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, f, p;
                  eB(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    r4(f.x, p.x, a.x, n),
                    r4(f.y, p.y, a.y, n),
                    r &&
                      ((u = this.relativeTarget),
                      (h = r),
                      u.x.min === h.x.min &&
                        u.x.max === h.x.max &&
                        u.y.min === h.y.min &&
                        u.y.max === h.y.max) &&
                      (this.isProjectionDirty = !1),
                    r || (r = eq()),
                    rA(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (t, e, r, n, i, o) {
                    i
                      ? ((t.opacity = (0, eV.C)(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          rw(n)
                        )),
                        (t.opacityExit = (0, eV.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          rP(n)
                        )))
                      : o &&
                        (t.opacity = (0, eV.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < ry; i++) {
                      let o = `border${rg[i]}Radius`,
                        s = rx(e, o),
                        a = rx(r, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || rb(s) === rb(a)
                          ? ((t[o] = Math.max((0, eV.C)(rv(s), rv(a), n), 0)),
                            (z.aQ.test(a) || z.aQ.test(s)) && (t[o] += "%"))
                          : (t[o] = a));
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = (0, eV.C)(e.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tf.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tf.Wi.update(() => {
                (rl.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, r) {
                    let n = (0, O.i)(0) ? 0 : (0, ec.BX)(0);
                    return n.start(ea("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: n,
                latestValues: i,
              } = t;
            if (e && r && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ne(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || eq();
                let e = eD(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let n = eD(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
              }
              rA(e, r),
                e8(e, i),
                e_(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new r_()),
              this.sharedNodes.get(t).add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < rz.length; e++) {
              let i = "rotate" + rz[e];
              r[i] && ((n[i] = r[i]), t.setStaticValue(i, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rN;
            let n = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  td(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    td(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !eJ(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = rI(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (n.transform = i(s, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (e = s.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            k)) {
              if (void 0 === s[t]) continue;
              let { correct: e, applyTo: r } = k[t],
                i = "none" === n.transform ? s[t] : e(s[t], o);
              if (r) {
                let t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i;
              } else n[t] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? td(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rZ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rH(t) {
        t.updateLayout();
      }
      function rX(t) {
        var e;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: i } = t.options,
            o = r.source !== t.layout.source;
          "size" === i
            ? eY((t) => {
                let n = o ? r.measuredBox[t] : r.layoutBox[t],
                  i = eD(n);
                (n.min = e[t].min), (n.max = n.min + i);
              })
            : ne(i, r.layoutBox, e) &&
              eY((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  s = eD(e[n]);
                (i.max = i.min + s),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + s));
              });
          let s = eX();
          e_(s, e, r.layoutBox);
          let a = eX();
          o
            ? e_(a, t.applyTransform(n, !0), r.measuredBox)
            : e_(a, e, r.layoutBox);
          let l = !rV(s),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let s = eq();
                eB(s, r.layoutBox, i.layoutBox);
                let a = eq();
                eB(a, e, o.layoutBox),
                  rD(s, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = s),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rG(t) {
        rU.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rq(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rY(t) {
        t.clearSnapshot();
      }
      function rZ(t) {
        t.clearMeasurements();
      }
      function rK(t) {
        t.isLayoutDirty = !1;
      }
      function rQ(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rJ(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function r0(t) {
        t.resolveTargetDelta();
      }
      function r1(t) {
        t.calcProjection();
      }
      function r3(t) {
        t.resetRotation();
      }
      function r2(t) {
        t.removeLeadSnapshot();
      }
      function r5(t, e, r) {
        (t.translate = (0, eV.C)(e.translate, 0, r)),
          (t.scale = (0, eV.C)(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function r4(t, e, r, n) {
        (t.min = (0, eV.C)(e.min, r.min, n)),
          (t.max = (0, eV.C)(e.max, r.max, n));
      }
      function r9(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let r6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        r7 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        r8 = r7("applewebkit/") && !r7("chrome/") ? Math.round : tV.Z;
      function nt(t) {
        (t.min = r8(t.min)), (t.max = r8(t.max));
      }
      function ne(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !eO(rO(e), rO(r), 0.2))
        );
      }
      let nr = r$({
          attachResizeListener: (t, e) => tg(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nn = { current: void 0 },
        ni = r$({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nn.current) {
              let t = new nr({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nn.current = t);
            }
            return nn.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        no = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ns(t, e, r = 1) {
        (0, tU.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (t) {
          let e = no.exec(t);
          if (!e) return [,];
          let [, r, n] = e;
          return [r, n];
        })(t);
        if (!n) return;
        let o = window.getComputedStyle(e).getPropertyValue(n);
        if (o) {
          let t = o.trim();
          return eu(t) ? parseFloat(t) : t;
        }
        return (0, I.tm)(i) ? ns(i, e, r + 1) : i;
      }
      let na = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        nl = (t) => na.has(t),
        nu = (t) => Object.keys(t).some(nl),
        nc = (t) => t === B.Rx || t === z.px,
        nd = (t, e) => parseFloat(t.split(", ")[e]),
        nh =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return nd(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? nd(e[1], t) : 0;
            }
          },
        nf = new Set(["x", "y", "z"]),
        np = R.filter((t) => !nf.has(t)),
        nm = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: nh(4, 13),
          y: nh(5, 14),
        };
      (nm.translateX = nm.x), (nm.translateY = nm.y);
      let ng = (t, e, r) => {
          let n = e.measureViewportBox(),
            i = getComputedStyle(e.current),
            { display: o } = i,
            s = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            r.forEach((t) => {
              s[t] = nm[t](n, i);
            }),
            e.render();
          let a = e.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = e.getValue(r);
              n && n.jump(s[r]), (t[r] = nm[r](a, i));
            }),
            t
          );
        },
        ny = (t, e, r = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let i = Object.keys(e).filter(nl),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = t.getValue(i);
              if (!t.hasValue(i)) return;
              let c = r[i],
                d = ef(c),
                h = e[i];
              if (tl(h)) {
                let t = h.length,
                  e = null === h[0] ? 1 : 0;
                d = ef((c = h[e]));
                for (let r = e; r < t && null !== h[r]; r++)
                  l
                    ? (0, tU.k)(
                        ef(h[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = ef(h[r])),
                      (0, tU.k)(
                        l === d || (nc(d) && nc(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = ef(h);
              if (d !== l) {
                if (nc(d) && nc(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof h
                      ? (e[i] = parseFloat(h))
                      : Array.isArray(h) &&
                        l === z.px &&
                        (e[i] = h.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === h)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (e[i] = d.transform(h))
                    : (s ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            np.forEach((r) => {
                              let n = t.getValue(r);
                              void 0 !== n &&
                                (e.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (s = !0)),
                      a.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : e[i]),
                      u.jump(h));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ng(e, t, a);
            return (
              o.length &&
                o.forEach(([e, r]) => {
                  t.getValue(e).set(r);
                }),
              t.render(),
              C.j && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        nv = (t, e, r, n) => {
          var i, o;
          let s = (function (t, { ...e }, r) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, I.tm)(e)) return;
              let r = ns(e, n);
              r && t.set(r);
            }),
            e)) {
              let t = e[i];
              if (!(0, I.tm)(t)) continue;
              let o = ns(t, n);
              o && ((e[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = t));
            }
            return { target: e, transitionEnd: r };
          })(t, e, n);
          return (
            (e = s.target),
            (n = s.transitionEnd),
            (i = e),
            (o = n),
            nu(i) ? ny(t, i, r, o) : { target: i, transitionEnd: o }
          );
        },
        nb = { current: null },
        nx = { current: !1 },
        nw = new WeakMap(),
        nP = Object.keys(S),
        nS = nP.length,
        nC = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nA = v.length;
      class nE {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tf.Wi.render(this.render, !1, !0));
          let { latestValues: s, renderState: a } = i;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = e.initial ? { ...s } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.isControllingVariants = b(e)),
            (this.isVariantNode = x(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== s[t] &&
              (0, O.i)(e) &&
              (e.set(s[t], !1), el(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nw.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nx.current ||
              (function () {
                if (((nx.current = !0), C.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nb.current = t.matches);
                    t.addListener(e), e();
                  } else nb.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nb.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nw.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tf.Pn)(this.notifyUpdate),
          (0, tf.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r = V.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tf.Wi.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, r, n, i) {
          let o, s;
          for (let t = 0; t < nS; t++) {
            let r = nP[t],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = S[r];
            a && (o = a),
              n(e) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (s = l));
          }
          if (!this.projection && o) {
            this.projection = new o(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: r,
              drag: n,
              dragConstraints: s,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: r,
              alwaysMeasureLayout: !!n || (s && p(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eq();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nC.length; e++) {
            let r = nC[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            let { willChange: n } = e;
            for (let i in e) {
              let o = e[i],
                s = r[i];
              if ((0, O.i)(o)) t.addValue(i, o), el(n) && n.add(i);
              else if ((0, O.i)(s))
                t.addValue(i, (0, ec.BX)(o, { owner: t })),
                  el(n) && n.remove(i);
              else if (s !== o) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  e.hasAnimated || e.set(o);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, ec.BX)(void 0 !== e ? e : o, { owner: t }));
                }
              }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nA; t++) {
            let r = v[t],
              n = this.props[r];
            (m(n) || !1 === n) && (e[r] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = (0, ec.BX)(e, { owner: this })), this.addValue(t, r)),
            r
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null === (e = ts(this.props, r)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, O.i)(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new rp.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nT extends nE {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...r },
          { transformValues: n },
          i
        ) {
          let o = (function (t, e, r) {
            let n = {};
            for (let i in t) {
              let t = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(i, e);
              if (void 0 !== t) n[i] = t;
              else {
                let t = r.getValue(i);
                t && (n[i] = t.get());
              }
            }
            return n;
          })(r, t || {}, this);
          if ((n && (e && (e = n(e)), r && (r = n(r)), o && (o = n(o))), i)) {
            !(function (t, e, r) {
              var n, i;
              let o = Object.keys(e).filter((e) => !t.hasValue(e)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let s = o[a],
                    l = e[s],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (n = r[s]) && void 0 !== n
                              ? n
                              : t.readValue(s)) && void 0 !== i
                          ? i
                          : e[s]),
                    null != u &&
                      ("string" == typeof u && (eu(u) || eo(u))
                        ? (u = parseFloat(u))
                        : !em(u) && t5.P.test(l) && (u = ei(s, l)),
                      t.addValue(s, (0, ec.BX)(u, { owner: t })),
                      void 0 === r[s] && (r[s] = u),
                      null !== u && t.setBaseTarget(s, u));
                }
            })(this, r, o);
            let t = nv(this, r, o, e);
            (e = t.transitionEnd), (r = t.target);
          }
          return { transition: t, transitionEnd: e, ...r };
        }
      }
      class nj extends nT {
        readValueFromInstance(t, e) {
          if (V.has(e)) {
            let t = en(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = ((0, I.f9)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return rt(t, e);
        }
        build(t, e, r, n) {
          U(t, e, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return ti(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, O.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, r, n) {
          te(t, e, r, n);
        }
      }
      class nM extends nT {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (V.has(e)) {
            let t = en(e);
            return (t && t.default) || 0;
          }
          return (e = tr.has(e) ? e : h(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return eq();
        }
        scrapeMotionValuesFromProps(t, e) {
          return to(t, e);
        }
        build(t, e, r, n) {
          Q(t, e, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          tn(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = tt(t.tagName)), super.mount(t);
        }
      }
      let nk = (t, e) =>
          M(t)
            ? new nM(e, { enableHardwareAcceleration: !1 })
            : new nj(e, { enableHardwareAcceleration: !0 }),
        nR = {
          animation: { Feature: eP },
          exit: { Feature: eC },
          inView: { Feature: tz },
          tap: { Feature: tO },
          focus: { Feature: tk },
          hover: { Feature: tM },
          pan: { Feature: ra },
          drag: { Feature: ro, ProjectionNode: ni, MeasureLayout: rh },
          layout: { ProjectionNode: ni, MeasureLayout: rh },
        },
        nV = (function (t) {
          function e(e, r = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: r,
              useVisualState: n,
              Component: i,
            }) {
              t &&
                (function (t) {
                  for (let e in t) S[e] = { ...S[e], ...t[e] };
                })(t);
              let o = (0, s.forwardRef)(function (o, h) {
                var g;
                let y;
                let v = {
                    ...(0, s.useContext)(a._),
                    ...o,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(A.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(o),
                  },
                  { isStatic: x } = v,
                  P = (function (t) {
                    let { initial: e, animate: r } = (function (t, e) {
                      if (b(t)) {
                        let { initial: e, animate: r } = t;
                        return {
                          initial: !1 === e || m(e) ? e : void 0,
                          animate: m(r) ? r : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(l));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: r }),
                      [w(e), w(r)]
                    );
                  })(o),
                  S = n(o, x);
                if (!x && C.j) {
                  P.visualElement = (function (t, e, r, n) {
                    let { visualElement: i } = (0, s.useContext)(l),
                      o = (0, s.useContext)(d),
                      h = (0, s.useContext)(u.O),
                      p = (0, s.useContext)(a._).reducedMotion,
                      m = (0, s.useRef)();
                    (n = n || o.renderer),
                      !m.current &&
                        n &&
                        (m.current = n(t, {
                          visualState: e,
                          parent: i,
                          props: r,
                          presenceContext: h,
                          blockInitialAnimation: !!h && !1 === h.initial,
                          reducedMotionConfig: p,
                        }));
                    let g = m.current;
                    (0, s.useInsertionEffect)(() => {
                      g && g.update(r, h);
                    });
                    let y = (0, s.useRef)(!!(r[f] && !window.HandoffComplete));
                    return (
                      (0, c.L)(() => {
                        g &&
                          (g.render(),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(i, S, v, e);
                  let r = (0, s.useContext)(E),
                    n = (0, s.useContext)(d).strict;
                  P.visualElement &&
                    (y = P.visualElement.loadFeatures(v, n, t, r));
                }
                return s.createElement(
                  l.Provider,
                  { value: P },
                  y && P.visualElement
                    ? s.createElement(y, {
                        visualElement: P.visualElement,
                        ...v,
                      })
                    : null,
                  r(
                    i,
                    o,
                    ((g = P.visualElement),
                    (0, s.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          g && (t ? g.mount(t) : g.unmount()),
                          h &&
                            ("function" == typeof h
                              ? h(t)
                              : p(h) && (h.current = t));
                      },
                      [g]
                    )),
                    S,
                    x,
                    P.visualElement
                  )
                );
              });
              return (o[T] = i), o;
            })(t(e, r));
          }
          if ("undefined" == typeof Proxy) return e;
          let r = new Map();
          return new Proxy(e, {
            get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, r, n) {
            return {
              ...(M(t) ? tp : tm),
              preloadedFeatures: r,
              useRender: (function (t = !1) {
                return (e, r, n, { latestValues: i }, o) => {
                  let a = (
                      M(e)
                        ? function (t, e, r, n) {
                            let i = (0, s.useMemo)(() => {
                              let r = J();
                              return (
                                Q(
                                  r,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tt(n),
                                  t.transformTemplate
                                ),
                                { ...r.attrs, style: { ...r.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              H(e, t.style, t),
                                (i.style = { ...e, ...i.style });
                            }
                            return i;
                          }
                        : function (t, e, r) {
                            let n = {},
                              i = (function (t, e, r) {
                                let n = t.style || {},
                                  i = {};
                                return (
                                  H(i, n, t),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: t }, e, r) {
                                      return (0, s.useMemo)(() => {
                                        let n = $();
                                        return (
                                          U(
                                            n,
                                            e,
                                            { enableHardwareAcceleration: !r },
                                            t
                                          ),
                                          Object.assign({}, n.vars, n.style)
                                        );
                                      }, [e]);
                                    })(t, e, r)
                                  ),
                                  t.transformValues ? t.transformValues(i) : i
                                );
                              })(t, e, r);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (i.userSelect =
                                  i.WebkitUserSelect =
                                  i.WebkitTouchCallout =
                                    "none"),
                                (i.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = i),
                              n
                            );
                          }
                    )(r, i, o, e),
                    l = {
                      ...(function (t, e, r) {
                        let n = {};
                        for (let i in t)
                          ("values" !== i || "object" != typeof t.values) &&
                            (q(i) ||
                              (!0 === r && G(i)) ||
                              (!e && !G(i)) ||
                              (t.draggable && i.startsWith("onDrag"))) &&
                            (n[i] = t[i]);
                        return n;
                      })(r, "string" == typeof e, t),
                      ...a,
                      ref: n,
                    },
                    { children: u } = r,
                    c = (0, s.useMemo)(() => ((0, O.i)(u) ? u.get() : u), [u]);
                  return (0, s.createElement)(e, { ...l, children: c });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, nR, nk)
        );
    },
    7249: function (t, e, r) {
      r.d(e, {
        Xp: function () {
          return s;
        },
        f9: function () {
          return i;
        },
        tm: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        i = n("--"),
        o = n("var(--"),
        s =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    7235: function (t, e, r) {
      r.d(e, {
        I: function () {
          return i;
        },
      });
      var n = r(3223);
      function i(t, e, r) {
        var i;
        if ("string" == typeof t) {
          let o = document;
          e &&
            ((0, n.k)(!!e.current, "Scope provided, but no element detected."),
            (o = e.current)),
            r
              ? ((null !== (i = r[t]) && void 0 !== i) ||
                  (r[t] = o.querySelectorAll(t)),
                (t = r[t]))
              : (t = o.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
    },
    9013: function (t, e, r) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, {
        cl: function () {
          return i;
        },
        y4: function () {
          return n;
        },
      });
    },
    9111: function (t, e, r) {
      r.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, r) => Math.min(Math.max(r, t), e);
    },
    3223: function (t, e, r) {
      r.d(e, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(4439);
      let i = n.Z,
        o = n.Z;
    },
    2888: function (t, e, r) {
      r.d(e, {
        s: function () {
          return E;
        },
      });
      var n = r(3223),
        i = r(3964),
        o = r(9111),
        s = r(8090);
      function a(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      var l = r(7325),
        u = r(8859),
        c = r(2943);
      let d = (t, e, r) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - n) + n));
        },
        h = [l.$, u.m, c.J],
        f = (t) => h.find((e) => e.test(t));
      function p(t) {
        let e = f(t);
        (0, n.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = e.parse(t);
        return (
          e === c.J &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  l = 2 * r - n;
                (i = a(l, n, t + 1 / 3)),
                  (o = a(l, n, t)),
                  (s = a(l, n, t - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let m = (t, e) => {
        let r = p(t),
          n = p(e),
          i = { ...r };
        return (t) => (
          (i.red = d(r.red, n.red, t)),
          (i.green = d(r.green, n.green, t)),
          (i.blue = d(r.blue, n.blue, t)),
          (i.alpha = (0, s.C)(r.alpha, n.alpha, t)),
          u.m.transform(i)
        );
      };
      var g = r(332),
        y = r(5636);
      let v = (t, e) => (r) => `${r > 0 ? e : t}`;
      function b(t, e) {
        return "number" == typeof t
          ? (r) => (0, s.C)(t, e, r)
          : i.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? v(t, e)
          : P(t, e);
      }
      let x = (t, e) => {
          let r = [...t],
            n = r.length,
            i = t.map((t, r) => b(t, e[r]));
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r;
          };
        },
        w = (t, e) => {
          let r = { ...t, ...e },
            n = {};
          for (let i in r)
            void 0 !== t[i] && void 0 !== e[i] && (n[i] = b(t[i], e[i]));
          return (t) => {
            for (let e in n) r[e] = n[e](t);
            return r;
          };
        },
        P = (t, e) => {
          let r = y.P.createTransformer(e),
            i = (0, y.V)(t),
            o = (0, y.V)(e);
          return i.numVars === o.numVars &&
            i.numColors === o.numColors &&
            i.numNumbers >= o.numNumbers
            ? (0, g.z)(x(i.values, o.values), r)
            : ((0, n.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              v(t, e));
        };
      var S = r(6376),
        C = r(4439);
      let A = (t, e) => (r) => (0, s.C)(t, e, r);
      function E(t, e, { clamp: r = !0, ease: s, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, n.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, r) {
            let n = [],
              o =
                r ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return i.$.test(t) ? m : P;
                  else if (Array.isArray(t)) return x;
                  else if ("object" == typeof t) return w;
                  return A;
                })(t[0]),
              s = t.length - 1;
            for (let r = 0; r < s; r++) {
              let i = o(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] || C.Z : e;
                i = (0, g.z)(t, i);
              }
              n.push(i);
            }
            return n;
          })(e, s, a),
          c = u.length,
          d = (e) => {
            let r = 0;
            if (c > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            let n = (0, S.Y)(t[r], t[r + 1], e);
            return u[r](n);
          };
        return r ? (e) => d((0, o.u)(t[0], t[l - 1], e)) : d;
      }
    },
    4563: function (t, e, r) {
      r.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    8090: function (t, e, r) {
      r.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t, e, r) => -r * t + r * e + t;
    },
    4439: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    8913: function (t, e, r) {
      r.d(e, {
        Y: function () {
          return o;
        },
      });
      var n = r(8090),
        i = r(6376);
      function o(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let r = t[t.length - 1];
            for (let o = 1; o <= e; o++) {
              let s = (0, i.Y)(0, e, o);
              t.push((0, n.C)(r, 1, s));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    332: function (t, e, r) {
      r.d(e, {
        z: function () {
          return i;
        },
      });
      let n = (t, e) => (r) => e(t(r)),
        i = (...t) => t.reduce(n);
    },
    6376: function (t, e, r) {
      r.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, r) => {
        let n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      };
    },
    4081: function (t, e, r) {
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(9013);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6717: function (t, e, r) {
      r.d(e, {
        X: function () {
          return i;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
    3576: function (t, e, r) {
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    1534: function (t, e, r) {
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = r(4563).j ? n.useLayoutEffect : n.useEffect;
    },
    4438: function (t, e, r) {
      r.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    3078: function (t, e, r) {
      r.d(e, {
        BX: function () {
          return u;
        },
        S1: function () {
          return a;
        },
      });
      var n = r(4081),
        i = r(4438),
        o = r(8345);
      let s = (t) => !isNaN(parseFloat(t)),
        a = { current: void 0 };
      class l {
        constructor(t, e = {}) {
          (this.version = "10.16.16"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: r, timestamp: n } = o.frameData;
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                o.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              o.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = s(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e), (this.prev = t), (this.timeDelta = r);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return a.current && a.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, i.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new l(t, e);
      }
    },
    7325: function (t, e, r) {
      r.d(e, {
        $: function () {
          return i;
        },
      });
      var n = r(8859);
      let i = {
        test: (0, r(2702).i)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            n = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (r = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    2943: function (t, e, r) {
      r.d(e, {
        J: function () {
          return a;
        },
      });
      var n = r(4305),
        i = r(7492),
        o = r(796),
        s = r(2702);
      let a = {
        test: (0, s.i)("hsl", "hue"),
        parse: (0, s.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, o.Nw)(e)) +
          ", " +
          i.aQ.transform((0, o.Nw)(r)) +
          ", " +
          (0, o.Nw)(n.Fq.transform(s)) +
          ")",
      };
    },
    3964: function (t, e, r) {
      r.d(e, {
        $: function () {
          return a;
        },
      });
      var n = r(796),
        i = r(7325),
        o = r(2943),
        s = r(8859);
      let a = {
        test: (t) => s.m.test(t) || i.$.test(t) || o.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : o.J.test(t)
            ? o.J.parse(t)
            : i.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? s.m.transform(t)
            : o.J.transform(t),
      };
    },
    8859: function (t, e, r) {
      r.d(e, {
        m: function () {
          return u;
        },
      });
      var n = r(9111),
        i = r(4305),
        o = r(796),
        s = r(2702);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...i.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, s.i)("rgb", "red"),
          parse: (0, s.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(r) +
            ", " +
            (0, o.Nw)(i.Fq.transform(n)) +
            ")",
        };
    },
    2702: function (t, e, r) {
      r.d(e, {
        d: function () {
          return o;
        },
        i: function () {
          return i;
        },
      });
      var n = r(796);
      let i = (t, e) => (r) =>
          !!(
            ((0, n.HD)(r) && n.mj.test(r) && r.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        o = (t, e, r) => (i) => {
          if (!(0, n.HD)(i)) return i;
          let [o, s, a, l] = i.match(n.KP);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [r]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    5636: function (t, e, r) {
      r.d(e, {
        P: function () {
          return g;
        },
        V: function () {
          return h;
        },
      });
      var n = r(7249),
        i = r(4439),
        o = r(3964),
        s = r(4305),
        a = r(796);
      let l = { regex: n.Xp, countKey: "Vars", token: "${v}", parse: i.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: o.$.parse,
        },
        c = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: s.Rx.parse,
        };
      function d(t, { regex: e, countKey: r, token: n, parse: i }) {
        let o = t.tokenised.match(e);
        o &&
          ((t["num" + r] = o.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...o.map(i)));
      }
      function h(t) {
        let e = t.toString(),
          r = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && d(r, l), d(r, u), d(r, c), r;
      }
      function f(t) {
        return h(t).values;
      }
      function p(t) {
        let { values: e, numColors: r, numVars: n, tokenised: i } = h(t),
          s = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < s; i++)
            e =
              i < n
                ? e.replace(l.token, t[i])
                : i < n + r
                ? e.replace(u.token, o.$.transform(t[i]))
                : e.replace(c.token, (0, a.Nw)(t[i]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        g = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (r = t.match(a.dA)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: f,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = f(t);
            return p(t)(e.map(m));
          },
        };
    },
    4305: function (t, e, r) {
      r.d(e, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return s;
        },
      });
      var n = r(9111);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = { ...i, transform: (t) => (0, n.u)(0, 1, t) },
        s = { ...i, default: 1 };
    },
    7492: function (t, e, r) {
      r.d(e, {
        $C: function () {
          return c;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return s;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = r(796);
      let i = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        o = i("deg"),
        s = i("%"),
        a = i("px"),
        l = i("vh"),
        u = i("vw"),
        c = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    796: function (t, e, r) {
      r.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        i = /(-)?([\d]*\.?[\d])+/g,
        o =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        s =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    3999: function (t, e, r) {
      r.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    3335: function (t, e, r) {
      r.d(e, {
        q7: function () {
          return B;
        },
      });
      let n = /^\[(.+)\]$/;
      function i(t, e) {
        let r = t;
        return (
          e.split("-").forEach((t) => {
            r.nextPart.has(t) ||
              r.nextPart.set(t, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(t));
          }),
          r
        );
      }
      let o = /\s+/;
      function s() {
        let t,
          e,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (t = arguments[r++]) &&
            (e = (function t(e) {
              let r;
              if ("string" == typeof e) return e;
              let n = "";
              for (let i = 0; i < e.length; i++)
                e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
              return n;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
      function a(t, ...e) {
        let r, l, u;
        let c = function (o) {
          var s;
          return (
            (l = (r = {
              cache: (function (t) {
                if (t < 1) return { get: () => void 0, set: () => {} };
                let e = 0,
                  r = new Map(),
                  n = new Map();
                function i(i, o) {
                  r.set(i, o), ++e > t && ((e = 0), (n = r), (r = new Map()));
                }
                return {
                  get(t) {
                    let e = r.get(t);
                    return void 0 !== e
                      ? e
                      : void 0 !== (e = n.get(t))
                      ? (i(t, e), e)
                      : void 0;
                  },
                  set(t, e) {
                    r.has(t) ? r.set(t, e) : i(t, e);
                  },
                };
              })((s = e.reduce((t, e) => e(t), t())).cacheSize),
              splitModifiers: (function (t) {
                let e = t.separator,
                  r = 1 === e.length,
                  n = e[0],
                  i = e.length;
                return function (t) {
                  let o;
                  let s = [],
                    a = 0,
                    l = 0;
                  for (let u = 0; u < t.length; u++) {
                    let c = t[u];
                    if (0 === a) {
                      if (c === n && (r || t.slice(u, u + i) === e)) {
                        s.push(t.slice(l, u)), (l = u + i);
                        continue;
                      }
                      if ("/" === c) {
                        o = u;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let u = 0 === s.length ? t : t.substring(l),
                    c = u.startsWith("!"),
                    d = c ? u.substring(1) : u;
                  return {
                    modifiers: s,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: o && o > l ? o - l : void 0,
                  };
                };
              })(s),
              ...(function (t) {
                let e = (function (t) {
                    var e;
                    let { theme: r, prefix: n } = t,
                      o = { nextPart: new Map(), validators: [] };
                    return (
                      ((e = Object.entries(t.classGroups)),
                      n
                        ? e.map(([t, e]) => [
                            t,
                            e.map((t) =>
                              "string" == typeof t
                                ? n + t
                                : "object" == typeof t
                                ? Object.fromEntries(
                                    Object.entries(t).map(([t, e]) => [
                                      n + t,
                                      e,
                                    ])
                                  )
                                : t
                            ),
                          ])
                        : e).forEach(([t, e]) => {
                        (function t(e, r, n, o) {
                          e.forEach((e) => {
                            if ("string" == typeof e) {
                              ("" === e ? r : i(r, e)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof e) {
                              if (e.isThemeGetter) {
                                t(e(o), r, n, o);
                                return;
                              }
                              r.validators.push({
                                validator: e,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(e).forEach(([e, s]) => {
                              t(s, i(r, e), n, o);
                            });
                          });
                        })(e, o, t, r);
                      }),
                      o
                    );
                  })(t),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: o,
                  } = t;
                return {
                  getClassGroupId: function (t) {
                    let r = t.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function t(e, r) {
                        if (0 === e.length) return r.classGroupId;
                        let n = e[0],
                          i = r.nextPart.get(n),
                          o = i ? t(e.slice(1), i) : void 0;
                        if (o) return o;
                        if (0 === r.validators.length) return;
                        let s = e.join("-");
                        return r.validators.find(({ validator: t }) => t(s))
                          ?.classGroupId;
                      })(r, e) ||
                        (function (t) {
                          if (n.test(t)) {
                            let e = n.exec(t)[1],
                              r = e?.substring(0, e.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(t)
                    );
                  },
                  getConflictingClassGroupIds: function (t, e) {
                    let n = r[t] || [];
                    return e && o[t] ? [...n, ...o[t]] : n;
                  },
                };
              })(s),
            }).cache.get),
            (u = r.cache.set),
            (c = d),
            d(o)
          );
        };
        function d(t) {
          let e = l(t);
          if (e) return e;
          let n = (function (t, e) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: i,
              } = e,
              s = new Set();
            return t
              .trim()
              .split(o)
              .map((t) => {
                let {
                    modifiers: e,
                    hasImportantModifier: i,
                    baseClassName: o,
                    maybePostfixModifierPosition: s,
                  } = r(t),
                  a = n(s ? o.substring(0, s) : o),
                  l = !!s;
                if (!a) {
                  if (!s || !(a = n(o)))
                    return { isTailwindClass: !1, originalClassName: t };
                  l = !1;
                }
                let u = (function (t) {
                  if (t.length <= 1) return t;
                  let e = [],
                    r = [];
                  return (
                    t.forEach((t) => {
                      "[" === t[0]
                        ? (e.push(...r.sort(), t), (r = []))
                        : r.push(t);
                    }),
                    e.push(...r.sort()),
                    e
                  );
                })(e).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: i ? u + "!" : u,
                  classGroupId: a,
                  originalClassName: t,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((t) => {
                if (!t.isTailwindClass) return !0;
                let {
                    modifierId: e,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = t,
                  o = e + r;
                return (
                  !s.has(o) &&
                  (s.add(o), i(r, n).forEach((t) => s.add(e + t)), !0)
                );
              })
              .reverse()
              .map((t) => t.originalClassName)
              .join(" ");
          })(t, r);
          return u(t, n), n;
        }
        return function () {
          return c(s.apply(null, arguments));
        };
      }
      function l(t) {
        let e = (e) => e[t] || [];
        return (e.isThemeGetter = !0), e;
      }
      let u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        h = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        g =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function y(t) {
        return b(t) || d.has(t) || c.test(t);
      }
      function v(t) {
        return V(t, "length", D);
      }
      function b(t) {
        return !!t && !Number.isNaN(Number(t));
      }
      function x(t) {
        return V(t, "number", b);
      }
      function w(t) {
        return !!t && Number.isInteger(Number(t));
      }
      function P(t) {
        return t.endsWith("%") && b(t.slice(0, -1));
      }
      function S(t) {
        return u.test(t);
      }
      function C(t) {
        return h.test(t);
      }
      let A = new Set(["length", "size", "percentage"]);
      function E(t) {
        return V(t, A, O);
      }
      function T(t) {
        return V(t, "position", O);
      }
      let j = new Set(["image", "url"]);
      function M(t) {
        return V(t, j, _);
      }
      function k(t) {
        return V(t, "", L);
      }
      function R() {
        return !0;
      }
      function V(t, e, r) {
        let n = u.exec(t);
        return (
          !!n &&
          (n[1] ? ("string" == typeof e ? n[1] === e : e.has(n[1])) : r(n[2]))
        );
      }
      function D(t) {
        return f.test(t) && !p.test(t);
      }
      function O() {
        return !1;
      }
      function L(t) {
        return m.test(t);
      }
      function _(t) {
        return g.test(t);
      }
      function I() {
        let t = l("colors"),
          e = l("spacing"),
          r = l("blur"),
          n = l("brightness"),
          i = l("borderColor"),
          o = l("borderRadius"),
          s = l("borderSpacing"),
          a = l("borderWidth"),
          u = l("contrast"),
          c = l("grayscale"),
          d = l("hueRotate"),
          h = l("invert"),
          f = l("gap"),
          p = l("gradientColorStops"),
          m = l("gradientColorStopPositions"),
          g = l("inset"),
          A = l("margin"),
          j = l("opacity"),
          V = l("padding"),
          D = l("saturate"),
          O = l("scale"),
          L = l("sepia"),
          _ = l("skew"),
          I = l("space"),
          F = l("translate"),
          B = () => ["auto", "contain", "none"],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          N = () => ["auto", S, e],
          W = () => [S, e],
          U = () => ["", y, v],
          $ = () => ["auto", b, S],
          H = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          X = () => ["solid", "dashed", "dotted", "double", "none"],
          G = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          q = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", S],
          Z = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          K = () => [b, x],
          Q = () => [b, S];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [R],
            spacing: [y, v],
            blur: ["none", "", C, S],
            brightness: K(),
            borderColor: [t],
            borderRadius: ["none", "", "full", C, S],
            borderSpacing: W(),
            borderWidth: U(),
            contrast: K(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: W(),
            gradientColorStops: [t],
            gradientColorStopPositions: [P, v],
            inset: N(),
            margin: N(),
            opacity: K(),
            padding: W(),
            saturate: K(),
            scale: K(),
            sepia: Y(),
            skew: Q(),
            space: W(),
            translate: W(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", S] }],
            container: ["container"],
            columns: [{ columns: [C] }],
            "break-after": [{ "break-after": Z() }],
            "break-before": [{ "break-before": Z() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...H(), S] }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: B() }],
            "overscroll-x": [{ "overscroll-x": B() }],
            "overscroll-y": [{ "overscroll-y": B() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, S] }],
            basis: [{ basis: N() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", S] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", w, S] }],
            "grid-cols": [{ "grid-cols": [R] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, S] }, S] }],
            "col-start": [{ "col-start": $() }],
            "col-end": [{ "col-end": $() }],
            "grid-rows": [{ "grid-rows": [R] }],
            "row-start-end": [{ row: ["auto", { span: [w, S] }, S] }],
            "row-start": [{ "row-start": $() }],
            "row-end": [{ "row-end": $() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", S] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", S] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...q()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...q(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...q(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [V] }],
            px: [{ px: [V] }],
            py: [{ py: [V] }],
            ps: [{ ps: [V] }],
            pe: [{ pe: [V] }],
            pt: [{ pt: [V] }],
            pr: [{ pr: [V] }],
            pb: [{ pb: [V] }],
            pl: [{ pl: [V] }],
            m: [{ m: [A] }],
            mx: [{ mx: [A] }],
            my: [{ my: [A] }],
            ms: [{ ms: [A] }],
            me: [{ me: [A] }],
            mt: [{ mt: [A] }],
            mr: [{ mr: [A] }],
            mb: [{ mb: [A] }],
            ml: [{ ml: [A] }],
            "space-x": [{ "space-x": [I] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [I] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", S, e] },
            ],
            "min-w": [{ "min-w": [S, e, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  S,
                  e,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [C] },
                  C,
                ],
              },
            ],
            h: [
              { h: [S, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [S, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [S, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [S, e, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", C, v] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  x,
                ],
              },
            ],
            "font-family": [{ font: [R] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  S,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", b, x] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  y,
                  S,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", S] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", S] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [t] }],
            "placeholder-opacity": [{ "placeholder-opacity": [j] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [t] }],
            "text-opacity": [{ "text-opacity": [j] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...X(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", y, v] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", y, S] }],
            "text-decoration-color": [{ decoration: [t] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: W() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  S,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", S] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [j] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...H(), T] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", E] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  M,
                ],
              },
            ],
            "bg-color": [{ bg: [t] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [j] }],
            "border-style": [{ border: [...X(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [j] }],
            "divide-style": [{ divide: X() }],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [{ outline: ["", ...X()] }],
            "outline-offset": [{ "outline-offset": [y, S] }],
            "outline-w": [{ outline: [y, v] }],
            "outline-color": [{ outline: [t] }],
            "ring-w": [{ ring: U() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [t] }],
            "ring-opacity": [{ "ring-opacity": [j] }],
            "ring-offset-w": [{ "ring-offset": [y, v] }],
            "ring-offset-color": [{ "ring-offset": [t] }],
            shadow: [{ shadow: ["", "inner", "none", C, k] }],
            "shadow-color": [{ shadow: [R] }],
            opacity: [{ opacity: [j] }],
            "mix-blend": [{ "mix-blend": G() }],
            "bg-blend": [{ "bg-blend": G() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", C, S] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [h] }],
            saturate: [{ saturate: [D] }],
            sepia: [{ sepia: [L] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [h] }],
            "backdrop-opacity": [{ "backdrop-opacity": [j] }],
            "backdrop-saturate": [{ "backdrop-saturate": [D] }],
            "backdrop-sepia": [{ "backdrop-sepia": [L] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  S,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", S] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", S] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [O] }],
            "scale-x": [{ "scale-x": [O] }],
            "scale-y": [{ "scale-y": [O] }],
            rotate: [{ rotate: [w, S] }],
            "translate-x": [{ "translate-x": [F] }],
            "translate-y": [{ "translate-y": [F] }],
            "skew-x": [{ "skew-x": [_] }],
            "skew-y": [{ "skew-y": [_] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  S,
                ],
              },
            ],
            accent: [{ accent: ["auto", t] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  S,
                ],
              },
            ],
            "caret-color": [{ caret: [t] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": W() }],
            "scroll-mx": [{ "scroll-mx": W() }],
            "scroll-my": [{ "scroll-my": W() }],
            "scroll-ms": [{ "scroll-ms": W() }],
            "scroll-me": [{ "scroll-me": W() }],
            "scroll-mt": [{ "scroll-mt": W() }],
            "scroll-mr": [{ "scroll-mr": W() }],
            "scroll-mb": [{ "scroll-mb": W() }],
            "scroll-ml": [{ "scroll-ml": W() }],
            "scroll-p": [{ "scroll-p": W() }],
            "scroll-px": [{ "scroll-px": W() }],
            "scroll-py": [{ "scroll-py": W() }],
            "scroll-ps": [{ "scroll-ps": W() }],
            "scroll-pe": [{ "scroll-pe": W() }],
            "scroll-pt": [{ "scroll-pt": W() }],
            "scroll-pr": [{ "scroll-pr": W() }],
            "scroll-pb": [{ "scroll-pb": W() }],
            "scroll-pl": [{ "scroll-pl": W() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", S] },
            ],
            fill: [{ fill: [t, "none"] }],
            "stroke-w": [{ stroke: [y, v, x] }],
            stroke: [{ stroke: [t, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      function F(t, e, r) {
        void 0 !== r && (t[e] = r);
      }
      function B(t, ...e) {
        return "function" == typeof t
          ? a(I, t, ...e)
          : a(
              () =>
                (function (
                  t,
                  {
                    cacheSize: e,
                    prefix: r,
                    separator: n,
                    extend: i = {},
                    override: o = {},
                  }
                ) {
                  for (let i in (F(t, "cacheSize", e),
                  F(t, "prefix", r),
                  F(t, "separator", n),
                  o))
                    !(function (t, e) {
                      if (e) for (let r in e) F(t, r, e[r]);
                    })(t[i], o[i]);
                  for (let e in i)
                    !(function (t, e) {
                      if (e)
                        for (let r in e) {
                          let n = e[r];
                          void 0 !== n && (t[r] = (t[r] || []).concat(n));
                        }
                    })(t[e], i[e]);
                  return t;
                })(I(), t),
              ...e
            );
      }
    },
  },
]);
