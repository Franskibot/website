(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    2404: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 9277));
    },
    6452: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(7437),
        i = a(2161),
        s = a(7648);
      function l(e) {
        let { path: t, children: a, className: l, ...r } = e;
        return (0, n.jsxs)(s.default, {
          href: t,
          className: (0, i.cn)(
            "group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full bg-secondary-300 px-space-md py-space-sm text-base font-bold uppercase leading-none tracking-base text-accent-200",
            l
          ),
          ...r,
          children: [
            (0, n.jsx)("span", {
              className: "absolute inset-0 z-10 block overflow-hidden",
              children: (0, n.jsx)("span", {
                className:
                  "block h-full w-full translate-y-full rounded-t-[15rem] bg-accent-600 transition-all duration-500 ease-expo sm:group-hover:translate-y-0 sm:group-hover:rounded-none",
              }),
            }),
            (0, n.jsx)("span", {
              className: "relative z-20 block overflow-hidden transition-all",
              children: (0, n.jsx)("span", {
                after: a,
                className:
                  "block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-expo after:content-[attr(after)] sm:group-hover:after:-translate-y-[100%]",
                children: (0, n.jsx)("span", {
                  className:
                    "flex transition-all duration-500 ease-expo sm:group-hover:-translate-y-full",
                  children: a,
                }),
              }),
            }),
          ],
        });
      }
    },
    9277: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
          metadata: function () {
            return d;
          },
        });
      var n = a(7437),
        i = a(1787),
        s = a(6452),
        l = {
          src: "/_next/static/media/heroelipse.d05997d9.svg",
          height: 1186,
          width: 1186,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = a(3145),
        o = a(6399),
        c = a(6304);
      let d = {
        title: "Huy Nguyen — 404 Not Found",
        description:
          "The page you’re looking for does not exist. It might have been removed or deleted. Please navigate back to the home page.",
        robots: { index: !1, follow: !0, nocache: !0 },
      };
      function u() {
        return (0, n.jsx)("main", {
          children: (0, n.jsxs)("section", {
            id: "hero",
            className:
              "section-padding relative flex h-svh w-full flex-col items-start justify-center",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "px-6 absolute -left-1/2 -z-10 flex w-screen translate-x-1/2 items-center justify-between sm:px-[4%]",
                children: [
                  (0, n.jsx)(r.default, {
                    className:
                      "pointer-events-none w-[30%] animate-dot [animation-delay:2s]",
                    width: 500,
                    height: 500,
                    src: l,
                    priority: !0,
                    quality: 100,
                    loading: "eager",
                    alt: "",
                  }),
                  (0, n.jsx)(r.default, {
                    className:
                      "pointer-events-none w-[30%] animate-dot [animation-delay:1s]",
                    width: 500,
                    height: 500,
                    src: l,
                    priority: !0,
                    quality: 100,
                    loading: "eager",
                    alt: "",
                  }),
                  (0, n.jsx)(r.default, {
                    className: "pointer-events-none w-[30%] animate-dot",
                    width: 500,
                    height: 500,
                    src: l,
                    priority: !0,
                    quality: 100,
                    loading: "eager",
                    alt: "",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "grid w-full grid-cols-1 gap-y-space-xs lg:grid-cols-12 3xl:grid-cols-1",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "col-span-full self-end lg:col-span-7 3xl:self-center",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "sr-only",
                        children: "Seems like you got lost :(",
                      }),
                      (0, n.jsxs)("h1", {
                        "aria-hidden": !0,
                        className:
                          "flex w-full flex-col text-heading-1--alt font-bold text-secondary-300 3xl:text-center",
                        children: [
                          (0, n.jsx)(i.default, { phrases: "SEEMS LIKE" }),
                          (0, n.jsx)(i.default, { phrases: "YOU GOT LOST :(" }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "text-h5 xl:text-h4 2xl:text-h3 col-span-full self-end text-balance font-medium text-secondary-100 lg:col-start-9 3xl:col-span-full 3xl:flex 3xl:justify-center",
                    children: (0, n.jsx)(o.E.p, {
                      variants: c.Ji,
                      initial: "initial",
                      animate: "animate",
                      className: "max-w-[28ch] lg:max-w-[20ch] 3xl:max-w-full",
                      children:
                        "404 Error. The page you’re looking for does not exist.",
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(o.E.div, {
                className: "3xl:mx-auto",
                variants: c.Ji,
                initial: "initial",
                animate: "animate",
                children: (0, n.jsx)(s.Z, {
                  className: "mt-space-lg",
                  path: "/",
                  children: "Head back home",
                }),
              }),
            ],
          }),
        });
      }
    },
    6304: function (e, t, a) {
      "use strict";
      a.d(t, {
        IJ: function () {
          return i;
        },
        Ji: function () {
          return l;
        },
        Oh: function () {
          return n;
        },
        e5: function () {
          return s;
        },
      });
      let n = {
          initial: { opacity: 0 },
          open: { opacity: 0.25, transition: { duration: 0.75, delay: 0.2 } },
          closed: { opacity: 0, transition: { duration: 0.2 } },
        },
        i = {
          initial: { opacity: 0 },
          open: { opacity: 0.4, transition: { duration: 0.3 } },
          closed: { opacity: 0, transition: { duration: 0.3 } },
        },
        s = {
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2 },
          },
        },
        l = {
          initial: { y: 40, opacity: 0 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
          },
        };
    },
    1787: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a(7437),
        i = a(3433),
        s = a(6399),
        l = a(2265),
        r = a(2161);
      function o(e) {
        let { phrases: t, className: a, delay: o, animateInView: c = !0 } = e,
          d = (0, l.useRef)(null),
          u = (0, i.Y)(d, { once: !0, amount: 0.5 }),
          f = {
            initial: { y: "1.2em" },
            enter: {
              y: "0em",
              transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            },
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(s.E.span, {
            initial: "initial",
            animate: c ? (u ? "enter" : "") : "enter",
            "aria-hidden": !0,
            ref: d,
            transition: { staggerChildren: 0.025, delayChildren: o },
            className: (0, r.cn)("", a),
            children: t
              .split(" ")
              .map((e, t) =>
                (0, n.jsxs)(
                  "span",
                  {
                    className: "inline-block",
                    children: [
                      e
                        .split("")
                        .map((e, t) =>
                          (0, n.jsx)(
                            "span",
                            {
                              className: "relative inline-flex overflow-y-clip",
                              children: (0, n.jsx)(
                                s.E.span,
                                {
                                  className: "will-change-transform",
                                  variants: f,
                                  children: e,
                                },
                                t
                              ),
                            },
                            t
                          )
                        ),
                      (0, n.jsx)("span", {
                        className: "inline-block",
                        children: "\xa0",
                      }),
                    ],
                  },
                  t
                )
              ),
          }),
        });
      }
    },
    2161: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var n = a(1994);
      let i = (0, a(3335).q7)({
        extend: {
          classGroups: {
            "font-size": [
              {
                text: [
                  "base-small",
                  "base-large",
                  "base",
                  "heading-1",
                  "heading-2",
                  "heading-3",
                  "heading-4",
                  "heading-5",
                  "heading-display",
                  "heading-body",
                  "heading-number",
                ],
              },
            ],
            py: [
              {
                py: [
                  "space-3xs",
                  "space-2xs",
                  "space-xs",
                  "space-sm",
                  "space-md",
                  "space-lg",
                  "space-xl",
                  "space-2xl",
                ],
              },
            ],
            px: [
              {
                px: [
                  "space-3xs",
                  "space-2xs",
                  "space-xs",
                  "space-sm",
                  "space-md",
                  "space-lg",
                  "space-xl",
                  "space-2xl",
                ],
              },
            ],
          },
        },
      });
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return i((0, n.W)(t));
      }
    },
    3433: function (e, t, a) {
      "use strict";
      a.d(t, {
        Y: function () {
          return l;
        },
      });
      var n = a(2265),
        i = a(7235);
      let s = { some: 0, all: 1 };
      function l(e, { root: t, margin: a, amount: l, once: r = !1 } = {}) {
        let [o, c] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (r && o)) return;
            let n = { root: (t && t.current) || void 0, margin: a, amount: l };
            return (function (
              e,
              t,
              { root: a, margin: n, amount: l = "some" } = {}
            ) {
              let r = (0, i.I)(e),
                o = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let a = o.get(e.target);
                      if (!!a !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let a = t(e);
                          "function" == typeof a
                            ? o.set(e.target, a)
                            : c.unobserve(e.target);
                        } else a && (a(e), o.delete(e.target));
                      }
                    });
                  },
                  {
                    root: a,
                    rootMargin: n,
                    threshold: "number" == typeof l ? l : s[l],
                  }
                );
              return r.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), r ? void 0 : () => c(!1)), n);
          }, [t, e, a, r]),
          o
        );
      }
    },
  },
  function (e) {
    e.O(0, [726, 971, 117, 744], function () {
      return e((e.s = 2404));
    }),
      (_N_E = e.O());
  },
]);
