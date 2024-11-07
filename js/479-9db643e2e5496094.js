"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [479],
  {
    5095: function (e, t, n) {
      n.d(t, {
        M: function () {
          return m;
        },
      });
      var r = n(2265),
        i = n(1534);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var l = n(8345),
        s = n(4252),
        f = n(3576);
      class c extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: l, left: s } = o.current;
            if (t || !i.current || !e || !r) return;
            i.current.dataset.motionPopId = n;
            let f = document.createElement("style");
            return (
              document.head.appendChild(f),
              f.sheet &&
                f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${l}px !important;
            left: ${s}px !important;
          }
        `),
              () => {
                document.head.removeChild(f);
              }
            );
          }, [t]),
          r.createElement(
            c,
            { isPresent: t, childRef: i, sizeRef: o },
            r.cloneElement(e, { ref: i })
          )
        );
      }
      let a = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: l,
        mode: c,
      }) => {
        let a = (0, f.h)(d),
          h = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (a.set(e, !0), a.values())) if (!t) return;
                i && i();
              },
              register: (e) => (a.set(e, !1), () => a.delete(e)),
            }),
            l ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            a.forEach((e, t) => a.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || a.size || !i || i();
          }, [n]),
          "popLayout" === c && (e = r.createElement(u, { isPresent: n }, e)),
          r.createElement(s.O.Provider, { value: p }, e)
        );
      };
      function d() {
        return new Map();
      }
      var h = n(8881),
        p = n(3223);
      let g = (e) => e.key || "",
        m = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: s,
          exitBeforeEnter: f,
          presenceAffectsLayout: c = !0,
          mode: u = "sync",
        }) => {
          var d;
          (0, p.k)(!f, "Replace exitBeforeEnter with mode='wait'");
          let m =
              (0, r.useContext)(h.p).forceRender ||
              (function () {
                let e = o(),
                  [t, n] = (0, r.useState)(0),
                  i = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => l.Wi.postRender(i), [i]), t];
              })()[0],
            v = o(),
            E = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            y = E,
            w = (0, r.useRef)(new Map()).current,
            x = (0, r.useRef)(y),
            L = (0, r.useRef)(new Map()).current,
            W = (0, r.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (W.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = g(e);
                    t.set(n, e);
                  });
                })(E, L),
                (x.current = y);
            }),
            (d = () => {
              (W.current = !0), L.clear(), w.clear();
            }),
            (0, r.useEffect)(() => () => d(), []),
            W.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              y.map((e) =>
                r.createElement(
                  a,
                  {
                    key: g(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: u,
                  },
                  e
                )
              )
            );
          y = [...y];
          let R = x.current.map(g),
            k = E.map(g),
            B = R.length;
          for (let e = 0; e < B; e++) {
            let t = R[e];
            -1 !== k.indexOf(t) || w.has(t) || w.set(t, void 0);
          }
          return (
            "wait" === u && w.size && (y = []),
            w.forEach((e, n) => {
              if (-1 !== k.indexOf(n)) return;
              let i = L.get(n);
              if (!i) return;
              let o = R.indexOf(n),
                l = e;
              l ||
                ((l = r.createElement(
                  a,
                  {
                    key: g(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      w.delete(n);
                      let e = Array.from(L.keys()).filter(
                        (e) => !k.includes(e)
                      );
                      if (
                        (e.forEach((e) => L.delete(e)),
                        (x.current = E.filter((t) => {
                          let r = g(t);
                          return r === n || e.includes(r);
                        })),
                        !w.size)
                      ) {
                        if (!1 === v.current) return;
                        m(), s && s();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: u,
                  },
                  i
                )),
                w.set(n, l)),
                y.splice(o, 0, l);
            }),
            (y = y.map((e) => {
              let t = e.key;
              return w.has(t)
                ? e
                : r.createElement(
                    a,
                    {
                      key: g(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: u,
                    },
                    e
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              w.size ? y : y.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
    2934: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e, t, n) {
        (0, r.useInsertionEffect)(() => e.on(t, n), [e, t, n]);
      }
    },
    4769: function (e, t, n) {
      let r, i;
      n.d(t, {
        v: function () {
          return N;
        },
      });
      var o = n(3078),
        l = n(3576),
        s = n(2265),
        f = n(3223),
        c = n(7235);
      let u = new WeakMap();
      function a({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = u.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function d(e) {
        e.forEach(a);
      }
      let h = new Set();
      var p = n(6376),
        g = n(4438);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: m(), y: m() }),
        E = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(e, t, n, r) {
        let i = n[t],
          { length: o, position: l } = E[t],
          s = i.current,
          f = n.time;
        (i.current = e["scroll" + l]),
          (i.scrollLength = e["scroll" + o] - e["client" + o]),
          (i.offset.length = 0),
          (i.offset[0] = 0),
          (i.offset[1] = i.scrollLength),
          (i.progress = (0, p.Y)(0, i.scrollLength, i.current));
        let c = r - f;
        i.velocity = c > 50 ? 0 : (0, g.R)(i.current - s, c);
      }
      let w = [
          [0, 0],
          [1, 1],
        ],
        x = { start: 0, center: 0.5, end: 1 };
      function L(e, t, n = 0) {
        let r = 0;
        if ((void 0 !== x[e] && (e = x[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let W = [0, 0];
      var R = n(2888),
        k = n(8913);
      let B = { x: 0, y: 0 };
      var z = n(8345);
      let b = new WeakMap(),
        P = new WeakMap(),
        O = new WeakMap(),
        C = (e) => (e === document.documentElement ? window : e);
      var H = n(1534);
      function M(e, t) {
        (0, f.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let S = () => ({
        scrollX: (0, o.BX)(0),
        scrollY: (0, o.BX)(0),
        scrollXProgress: (0, o.BX)(0),
        scrollYProgress: (0, o.BX)(0),
      });
      function N({ container: e, target: t, layoutEffect: n = !0, ...o } = {}) {
        let f = (0, l.h)(S);
        return (
          (n ? H.L : s.useEffect)(
            () => (
              M("target", t),
              M("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let o = O.get(t);
                o || ((o = new Set()), O.set(t, o));
                let l = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight);
                      })(e, r.target, n),
                    update: (t) => {
                      y(e, "x", n, t),
                        y(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = w } = n,
                              { target: i = e, axis: o = "y" } = n,
                              l = "y" === o ? "height" : "width",
                              s =
                                i !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += e.left - t.left),
                                            (n.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (n.x += e), (n.y += t);
                                          let i = null,
                                            o = r.parentNode;
                                          for (; !i; )
                                            "svg" === o.tagName && (i = o),
                                              (o = r.parentNode);
                                          r = i;
                                        } else break;
                                      return n;
                                    })(i, e)
                                  : B,
                              f =
                                i === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in i && "svg" !== i.tagName
                                  ? i.getBBox()
                                  : {
                                      width: i.clientWidth,
                                      height: i.clientHeight,
                                    },
                              c = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[o].offset.length = 0;
                            let u = !t[o].interpolate,
                              a = r.length;
                            for (let e = 0; e < a; e++) {
                              let n = (function (e, t, n, r) {
                                let i = Array.isArray(e) ? e : W,
                                  o = 0;
                                return (
                                  "number" == typeof e
                                    ? (i = [e, e])
                                    : "string" == typeof e &&
                                      (i = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, x[e] ? e : "0"]),
                                  L(i[0], n, r) - L(i[1], t)
                                );
                              })(r[e], c[l], f[l], s[o]);
                              u ||
                                n === t[o].interpolatorOffsets[e] ||
                                (u = !0),
                                (t[o].offset[e] = n);
                            }
                            u &&
                              ((t[o].interpolate = (0, R.s)(
                                t[o].offset,
                                (0, k.Y)(r)
                              )),
                              (t[o].interpolatorOffsets = [...t[o].offset])),
                              (t[o].progress = t[o].interpolate(t[o].current));
                          })(e, n, r);
                    },
                    notify: () => t(n),
                  };
                })(t, e, v(), n);
                if ((o.add(l), !b.has(t))) {
                  let e = () => {
                      for (let e of o) e.measure();
                    },
                    n = () => {
                      for (let e of o) e.update(z.frameData.timestamp);
                    },
                    l = () => {
                      for (let e of o) e.notify();
                    },
                    s = () => {
                      z.Wi.read(e, !1, !0),
                        z.Wi.update(n, !1, !0),
                        z.Wi.update(l, !1, !0);
                    };
                  b.set(t, s);
                  let f = C(t);
                  window.addEventListener("resize", s, { passive: !0 }),
                    t !== document.documentElement &&
                      P.set(
                        t,
                        "function" == typeof t
                          ? (h.add(t),
                            i ||
                              ((i = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                h.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", i)),
                            () => {
                              h.delete(t), !h.size && i && (i = void 0);
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(d));
                              let n = (0, c.I)(e);
                              return (
                                n.forEach((e) => {
                                  let n = u.get(e);
                                  n || ((n = new Set()), u.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e);
                                }),
                                () => {
                                  n.forEach((e) => {
                                    let n = u.get(e);
                                    null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e);
                                  });
                                }
                              );
                            })(t, s)
                      ),
                    f.addEventListener("scroll", s, { passive: !0 });
                }
                let s = b.get(t);
                return (
                  z.Wi.read(s, !1, !0),
                  () => {
                    var e;
                    (0, z.Pn)(s);
                    let n = O.get(t);
                    if (!n || (n.delete(l), n.size)) return;
                    let r = b.get(t);
                    b.delete(t),
                      r &&
                        (C(t).removeEventListener("scroll", r),
                        null === (e = P.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  f.scrollX.set(e.current),
                    f.scrollXProgress.set(e.progress),
                    f.scrollY.set(t.current),
                    f.scrollYProgress.set(t.progress);
                },
                {
                  ...o,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(o.offset)]
          ),
          f
        );
      }
    },
  },
]);
