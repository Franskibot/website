(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    3201: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4888)),
        Promise.resolve().then(a.bind(a, 8087)),
        Promise.resolve().then(a.bind(a, 7239)),
        Promise.resolve().then(a.t.bind(a, 8003, 23)),
        Promise.resolve().then(a.t.bind(a, 4722, 23)),
        Promise.resolve().then(a.t.bind(a, 6024, 23)),
        Promise.resolve().then(a.bind(a, 9037)),
        Promise.resolve().then(a.bind(a, 4424)),
        Promise.resolve().then(a.bind(a, 5215)),
        Promise.resolve().then(a.bind(a, 6129)),
        Promise.resolve().then(a.bind(a, 3441)),
        Promise.resolve().then(a.bind(a, 362)),
        Promise.resolve().then(a.t.bind(a, 2778, 23));
    },
    9037: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return m;
        },
      });
      var n = a(7437),
        s = a(3145),
        i = a(2265),
        l = {
          src: "/_next/static/media/arrow.3054c3ee.svg",
          height: 28,
          width: 26,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = a(2859),
        o = a(4688),
        c = a(586),
        d = a(7648);
      function u(e) {
        let { data: t, heading: a, target: s = "" } = e,
          i = (0, r.E)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("h3", {
              className:
                "mb-space-xs flex border-b-[1.5px] border-accent-500 pb-space-2xs font-bold tracking-base text-secondary-300",
              children: a,
            }),
            (0, n.jsx)("ul", {
              className: "flex flex-col gap-y-space-3xs",
              children: t.map((e, t) =>
                (0, n.jsx)(
                  "li",
                  {
                    children: (0, n.jsxs)(d.default, {
                      target: s,
                      onClick: () => i(e.path),
                      className:
                        "group relative flex h-fit w-fit overflow-hidden font-medium leading-base text-secondary-100 sm:leading-snug",
                      href: e.path,
                      children: [
                        (0, n.jsx)("span", {
                          className: "link1",
                          children: e.name,
                        }),
                        (0, n.jsx)("span", {
                          className: "link2",
                          children: e.name,
                        }),
                      ],
                    }),
                  },
                  t
                )
              ),
            }),
          ],
        });
      }
      function m() {
        let e = (0, i.useRef)(null),
          [t, a] = (0, i.useState)(""),
          d = (0, r.E)();
        return (
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              a(
                new Date().toLocaleTimeString("en-US", {
                  timeZone: "Australia/Melbourne",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })
              );
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          (0, n.jsxs)("footer", {
            ref: e,
            className:
              "section-padding-equal relative flex flex-col items-center justify-center gap-y-space-xl py-space-lg",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "grid-gap grid w-full grid-cols-2 gap-y-space-md text-base md:grid-cols-12",
                children: [
                  (0, n.jsx)("div", {
                    className: "flex flex-col md:col-span-6",
                    children: (0, n.jsx)(u, { data: o.FV, heading: "Menu" }),
                  }),
                  (0, n.jsx)("div", {
                    className: "flex flex-col md:col-span-3",
                    children: (0, n.jsx)(u, {
                      target: "_blank",
                      data: o.UY,
                      heading: "Socials",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "col-span-2 flex flex-col md:col-span-3",
                    children: (0, n.jsx)(u, {
                      target: "_blank",
                      data: o.Jb,
                      heading: "Resources",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12",
                children: [
                  (0, n.jsxs)("span", {
                    className:
                      "flex flex-col text-heading-3 font-bold leading-tight tracking-heading text-secondary-300 sm:order-first sm:text-heading-2 md:col-span-6",
                    children: [
                      (0, n.jsxs)("span", {
                        children: [
                          "\xa9 2024 ",
                          (0, n.jsx)("br", { className: "block lg:hidden" }),
                          " Huy Nguyen",
                        ],
                      }),
                      (0, n.jsx)("span", { children: "All rights reserved." }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col text-base-small md:col-span-3",
                    children: [
                      (0, n.jsx)("span", {
                        className: "font-bold uppercase text-secondary-300",
                        children: "Local time",
                      }),
                      (0, n.jsxs)("span", {
                        className:
                          "font-mono font-medium uppercase tracking-mono text-secondary-100",
                        children: [t, ", MEL"],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "hidden h-fit w-full justify-end md:col-span-3 md:flex",
                    children: (0, n.jsx)(c.Z, {
                      children: (0, n.jsxs)("button", {
                        "aria-label": "Scroll to top",
                        onClick: () => d("#hero"),
                        className:
                          "group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-accent-500 p-space-lg duration-1000 ease-expo hover:scale-90 md:flex",
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "absolute flex transition-all duration-500 ease-in-out-cubic group-hover:-translate-y-20",
                            children: (0, n.jsx)(s.default, {
                              alt: "",
                              src: l,
                            }),
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "absolute flex translate-y-20 transition-all duration-500 ease-in-out-cubic group-hover:translate-y-0",
                            children: (0, n.jsx)(s.default, {
                              alt: "",
                              src: l,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    4424: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a(7437),
        s = a(6399);
      function i() {
        return (0, n.jsx)(s.E.div, {
          "aria-hidden": !0,
          initial: { transform: "translateX(-30%) translateY(-30%)" },
          animate: { transform: "translateX(30%) translateY(30%)" },
          transition: {
            repeat: 1 / 0,
            duration: 0.1,
            ease: "linear",
            repeatType: "mirror",
          },
          style: { backgroundImage: 'url("/images/noise.avif")' },
          className:
            "pointer-events-none fixed -inset-[100%] z-[99999] hidden opacity-[0.1] md:block",
        });
      }
    },
    5215: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return E;
        },
      });
      var n = a(7437),
        s = a(2265),
        i = a(6399),
        l = a(5095),
        r = a(7648),
        o = a(586);
      let c = {
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        },
        d = {
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] },
          },
        },
        u = {
          initial: { opacity: 0 },
          animate: (e) => ({
            opacity: 1,
            transition: {
              duration: 0.75,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.1 * e + 0.4,
            },
          }),
        },
        m = {
          initial: { width: "0" },
          animate: {
            opacity: 1,
            width: "inherit",
            transition: { duration: 1.75, ease: [0.16, 1, 0.3, 1] },
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          },
        },
        p = {
          initial: { translateY: 200 },
          enter: (e) => ({
            translateY: 0,
            transition: {
              duration: 1,
              delay: 0.075 * e,
              ease: [0.16, 1, 0.3, 1],
            },
          }),
          exit: {
            opacity: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          },
        };
      var x = a(6304),
        f = a(3145),
        h = {
          src: "/_next/static/media/menusvg.1e0fc15a.svg",
          height: 327,
          width: 245,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = a(2859),
        b = a(4688),
        y = a(6452);
      function v(e) {
        let { closeMenu: t } = e,
          a = (0, g.E)();
        return (
          (0, s.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && t();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [t]),
          (0, n.jsx)("div", {
            className:
              "pointer-events-none fixed z-50 flex h-screen w-screen justify-end text-accent-200",
            children: (0, n.jsxs)(i.E.div, {
              variants: m,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              className:
                "m-2 pointer-events-auto relative z-20 flex max-w-2xl flex-col justify-end overflow-hidden rounded-md bg-secondary-300 xl:max-w-3xl 3xl:max-w-4xl",
              children: [
                (0, n.jsx)(i.E.div, {
                  variants: x.Oh,
                  initial: "initial",
                  animate: "open",
                  className: "absolute right-0 top-0 opacity-40",
                  children: (0, n.jsx)(f.default, {
                    className: "2xl:w-72 3xl:w-96",
                    src: h,
                    alt: "",
                  }),
                }),
                (0, n.jsx)("nav", {
                  className:
                    "relative h-full px-space-md text-menu font-bold uppercase leading-tight sm:px-space-xl",
                  children: (0, n.jsx)("ul", {
                    className:
                      "flex h-full flex-col justify-center gap-y-space-3xs",
                    children: b.FV.map((e, s) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className:
                            "group relative flex w-fit cursor-pointer items-center",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "invisible absolute inline-block h-3 w-3 scale-0 rounded-full bg-accent-200 opacity-0 transition-all duration-800 ease-expo group-hover:visible group-hover:scale-100 group-hover:opacity-100",
                            }),
                            (0, n.jsx)("div", {
                              className: "w-fit overflow-y-clip",
                              children: (0, n.jsx)(i.E.div, {
                                className: "",
                                custom: s,
                                variants: p,
                                initial: "initial",
                                animate: "enter",
                                exit: "exit",
                                children: (0, n.jsx)(r.default, {
                                  className:
                                    "inline-block transition-transform duration-700 ease-expo group-hover:translate-x-7",
                                  onClick: () => {
                                    a(e.path), t();
                                  },
                                  href: "/".concat(e.path),
                                  children: e.name,
                                }),
                              }),
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col items-start justify-start gap-y-space-md px-space-md pb-space-md sm:px-space-xl sm:pb-space-xl",
                  children: [
                    (0, n.jsxs)(i.E.div, {
                      initial: "initial",
                      animate: "animate",
                      variants: c,
                      className: "flex flex-col",
                      children: [
                        (0, n.jsx)(i.E.span, {
                          className:
                            "text-left text-base-small font-bold text-secondary-50 2xl:text-base",
                          variants: d,
                          children: "EMAIL ADDRESS",
                        }),
                        (0, n.jsxs)(r.default, {
                          className:
                            "link-text group relative block h-fit overflow-hidden font-mono font-medium",
                          href: "mailto:hello@byhuy.com",
                          children: [
                            (0, n.jsx)(i.E.span, {
                              className: "link1",
                              variants: d,
                              children: "hello@byhuy.com",
                            }),
                            (0, n.jsx)("span", {
                              "aria-hidden": !0,
                              className: "link2",
                              variants: d,
                              children: "hello@byhuy.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("ul", {
                      className:
                        "flex flex-nowrap justify-start gap-x-space-2xs",
                      children: [
                        {
                          name: "Linkedin",
                          path: "https://www.linkedin.com/in/byhuy/",
                        },
                        {
                          name: "YouTube",
                          path: "https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA",
                        },
                        {
                          name: "Instagram",
                          path: "https://www.instagram.com/by_huy/",
                        },
                      ].map((e, t) =>
                        (0, n.jsx)(
                          i.E.div,
                          {
                            variants: u,
                            initial: "initial",
                            animate: "animate",
                            custom: t,
                            children: (0, n.jsx)(y.Z, {
                              className:
                                "border border-secondary-100 px-space-sm py-space-2xs text-base-small font-medium",
                              target: "_blank",
                              href: e.path,
                              children: e.name,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var j = a(4769),
        w = a(2934),
        N = a(5348);
      function k(e) {
        let { toggleMenu: t, menuOpen: a } = e,
          [i, l] = (0, s.useState)(!1),
          { scrollYProgress: r } = (0, j.v)({});
        return (
          (0, w.W)(r, "change", (e) => {
            e > 0.1 ? l(!0) : l(!1);
          }),
          (0, n.jsxs)("div", {
            className:
              "pointer-events-none fixed right-6 top-6 z-[999] flex items-center gap-x-space-2xs sm:right-8 sm:top-8",
            children: [
              (0, n.jsx)("div", {
                className: "".concat(
                  i ? "scale-100" : "scale-0",
                  " text-nowrap transition-all delay-200 duration-800 ease-expo"
                ),
                children: (0, n.jsx)(N.Z, {
                  "data-cal-namespace": "project-intro-call",
                  "data-cal-link": "byhuy/project-intro-call",
                  "data-cal-config": '{"layout":"month_view"}',
                  className: "px-space-lg py-space-sm text-base",
                  path: "/",
                  children: "Book a Call ↗",
                }),
              }),
              (0, n.jsxs)("button", {
                "aria-label": "Menu Navigation Button",
                "aria-expanded": a,
                "aria-controls": "menu",
                onClick: t,
                className:
                  "group pointer-events-auto flex aspect-square size-16 flex-col items-center justify-center rounded-full bg-accent-500 transition-all duration-800 ease-expo sm:hover:scale-90 ".concat(
                    i ? "scale-100" : "scale-0"
                  ),
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-secondary-400 transition-all duration-300 2xl:w-9 ".concat(
                        a
                          ? "translate-y-0 rotate-45"
                          : "-translate-y-1 rotate-0"
                      ),
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-secondary-400 transition-all duration-300 2xl:w-9 ".concat(
                        a
                          ? "translate-y-0 -rotate-45"
                          : "translate-y-1 rotate-0"
                      ),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function E() {
        let [e, t] = (0, s.useState)(!1),
          a = () => {
            t(!1);
          };
        (0, s.useEffect)(() => {
          e
            ? (document.body.setAttribute("data-lenis-prevent", "true"),
              document.body.classList.add("overflow-hidden"))
            : (document.body.removeAttribute("data-lenis-prevent", "false"),
              document.body.classList.remove("overflow-hidden"));
        }, [e]);
        let c = [
            { name: "Services", path: "#services" },
            { name: "Works", path: "#works" },
            { name: "About", path: "#about" },
            { name: "Testimonials", path: "#testimonials" },
            { name: "Contact", path: "#contact" },
          ],
          d = () => {
            t(!e);
          },
          u = (0, g.E)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.E.header, {
              variants: x.e5,
              initial: "initial",
              animate: "animate",
              className: "tracking-body absolute top-0 z-40 w-full",
              children: (0, n.jsxs)("div", {
                className:
                  "section-padding-x mt-space-md flex grid-cols-12 flex-row items-start justify-between gap-x-fluid lg:grid lg:items-center",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "col-span-8 flex flex-col items-start gap-x-space-2xl gap-y-space-3xs lg:flex-row lg:items-center",
                    children: [
                      (0, n.jsx)(o.Z, {
                        children: (0, n.jsxs)(r.default, {
                          "aria-label": "Back to Home",
                          href: "/",
                          className:
                            "text-base font-bold leading-snug tracking-heading text-secondary-400",
                          children: [
                            "By Huy",
                            (0, n.jsx)("sup", {
                              className: "",
                              children: "\xa9",
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "flex w-fit max-w-[14ch] text-balance text-base font-medium leading-snug text-secondary-100 sm:max-w-max md:text-base-small 2xl:text-base",
                        children: "(Web Designer & Developer)",
                      }),
                    ],
                  }),
                  (0, n.jsx)("nav", {
                    className:
                      "col-span-4 flex justify-end text-base text-secondary-100 md:text-base-small 2xl:text-base",
                    children: (0, n.jsx)("ul", {
                      className:
                        "flex flex-col items-start gap-x-space-3xs md:flex-row",
                      children: c.map((e, t) =>
                        (0, n.jsxs)(
                          "li",
                          {
                            className: "flex leading-base md:leading-snug",
                            children: [
                              (0, n.jsxs)(
                                r.default,
                                {
                                  onClick: () => u(e.path),
                                  className:
                                    "group relative block h-fit overflow-hidden font-medium",
                                  href: "/".concat(e.path),
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "link1",
                                      children: e.name,
                                    }),
                                    (0, n.jsx)("span", {
                                      "aria-hidden": !0,
                                      className: "link2",
                                      children: e.name,
                                    }),
                                  ],
                                },
                                t
                              ),
                              (0, n.jsx)("span", {
                                className: "leading-snug",
                                children: 4 !== t ? "," : "",
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(k, { toggleMenu: d, menuOpen: e }),
            (0, n.jsx)(l.M, {
              mode: "wait",
              children:
                e &&
                (0, n.jsx)(i.E.div, {
                  variants: x.IJ,
                  initial: "initial",
                  animate: "open",
                  exit: "closed",
                  onClick: a,
                  className:
                    "fixed left-0 top-0 z-40 h-screen w-screen cursor-pointer bg-secondary-400",
                }),
            }),
            (0, n.jsx)(l.M, {
              mode: "wait",
              children:
                e &&
                (0, n.jsx)(v, {
                  navLinks: c,
                  setMenuOpen: t,
                  menuOpen: e,
                  toggleMenu: d,
                  closeMenu: a,
                }),
            }),
          ],
        });
      }
    },
    5348: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(7437),
        s = a(2161);
      function i(e) {
        let { children: t, className: a, ...i } = e;
        return (0, n.jsxs)("button", {
          className: (0, s.cn)(
            "group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full bg-secondary-300 px-space-md py-space-xs text-base-small font-bold uppercase leading-none tracking-base text-accent-200",
            a
          ),
          ...i,
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
                after: t,
                className:
                  "block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-expo after:content-[attr(after)] sm:group-hover:after:-translate-y-[100%]",
                children: (0, n.jsx)("span", {
                  className:
                    "flex transition-all duration-500 ease-expo sm:group-hover:-translate-y-full",
                  children: t,
                }),
              }),
            }),
          ],
        });
      }
      a(7648);
    },
    6452: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(7437),
        s = a(2161),
        i = a(7648);
      function l(e) {
        let { path: t, children: a, className: l, ...r } = e;
        return (0, n.jsxs)(i.default, {
          href: t,
          className: (0, s.cn)(
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
    6129: function (e, t, a) {
      "use strict";
      a.d(t, {
        LinksRefProvider: function () {
          return l;
        },
        a: function () {
          return i;
        },
      });
      var n = a(7437),
        s = a(2265);
      let i = (0, s.createContext)();
      function l(e) {
        let { children: t } = e,
          a = (0, s.useRef)([]),
          l = (0, s.useRef)(null),
          r = (0, s.useRef)(null);
        return (0, n.jsx)(i.Provider, {
          value: { ctaRef: l, linksRef: a, emailRef: r },
          children: t,
        });
      }
    },
    3441: function (e, t, a) {
      "use strict";
      a.d(t, {
        B: function () {
          return c;
        },
        SmoothScrollProvider: function () {
          return o;
        },
      });
      var n = a(7437),
        s = a(9096),
        i = a(2265),
        l = a(9376);
      let r = (0, i.createContext)(),
        o = (e) => {
          let { children: t } = e,
            [a, o] = (0, i.useState)(null),
            c = (0, l.usePathname)();
          return (
            (0, i.useEffect)(() => {
              a && a.scrollTo(0, { immediate: !0 });
            }, [c, a]),
            (0, i.useEffect)(() => {
              let e = new s.Z({ duration: 1 });
              return (
                o(e),
                requestAnimationFrame(function t(a) {
                  e.raf(a), requestAnimationFrame(t);
                }),
                () => {
                  e.destroy();
                }
              );
            }, []),
            (0, n.jsx)(r.Provider, { value: { lenis: a }, children: t })
          );
        },
        c = () => {
          let e = (0, i.useContext)(r);
          if (!e)
            throw Error(
              "useSmoothScroll must be used within a SmoothScrollProvider"
            );
          return e;
        };
    },
    4688: function (e, t, a) {
      "use strict";
      a.d(t, {
        FV: function () {
          return s;
        },
        Jb: function () {
          return n;
        },
        UY: function () {
          return i;
        },
      });
      let n = [
          { name: "Pillarstack", path: "https://www.pillarstack.com" },
          {
            name: "Figma Templates",
            path: "https://www.figma.com/community/file/1328038510191576951/project-starter-template",
          },
          {
            name: "Monthly Newsletter",
            path: "https://byhuy.ck.page/af208ab37b",
          },
        ],
        s = [
          { name: "Home", path: "/" },
          { name: "Services", path: "#services" },
          { name: "Works", path: "#works" },
          { name: "About", path: "#about" },
          { name: "Testimonials", path: "#testimonials" },
          { name: "Contact", path: "#contact" },
        ],
        i = [
          { name: "Linkedin", path: "https://www.linkedin.com/in/byhuy/" },
          { name: "YouTube", path: "https://www.youtube.com/@by_huy" },
          { name: "Instagram", path: "https://www.instagram.com/by_huy/" },
          { name: "Bento", path: "https://bento.me/byhuy" },
          { name: "Github", path: "https://github.com/by-huy" },
        ];
    },
    362: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(7437),
        s = a(2265);
      t.default = (e) => {
        let { columns: t = 12 } = e,
          [a, i] = (0, s.useState)(!1),
          l = () => {
            i((e) => !e);
          };
        return (
          (0, s.useEffect)(() => {
            let e = (e) => {
              e.shiftKey && "G" === e.key && (l(), console.log("Grid toggled"));
            };
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, n.jsx)(n.Fragment, {
            children:
              a &&
              (0, n.jsx)("div", {
                className:
                  "section-padding-x pointer-events-none fixed inset-0 z-[999]",
                children: (0, n.jsx)("div", {
                  className:
                    "grid h-screen grid-cols-4 gap-x-fluid md:grid-cols-12",
                  children: [...Array(t)].map((e, t) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className:
                          "text-xs col-span-1 flex h-screen items-end justify-center bg-[#AD1A1A] bg-opacity-15 pb-space-sm font-mono text-[#AD1A1A] text-opacity-50",
                        children: (0, n.jsx)("span", { children: t + 1 }),
                      },
                      t
                    )
                  ),
                }),
              }),
          })
        );
      };
    },
    2859: function (e, t, a) {
      "use strict";
      a.d(t, {
        E: function () {
          return s;
        },
      });
      var n = a(3441);
      let s = () => {
        let { lenis: e } = (0, n.B)(),
          t = (e) => {
            try {
              return document.querySelector(e), !0;
            } catch (e) {
              return !1;
            }
          };
        return (a) => {
          if (e) {
            if (!t(a)) return null;
            e.scrollTo(a);
          }
        };
      };
    },
    6304: function (e, t, a) {
      "use strict";
      a.d(t, {
        IJ: function () {
          return s;
        },
        Ji: function () {
          return l;
        },
        Oh: function () {
          return n;
        },
        e5: function () {
          return i;
        },
      });
      let n = {
          initial: { opacity: 0 },
          open: { opacity: 0.25, transition: { duration: 0.75, delay: 0.2 } },
          closed: { opacity: 0, transition: { duration: 0.2 } },
        },
        s = {
          initial: { opacity: 0 },
          open: { opacity: 0.4, transition: { duration: 0.3 } },
          closed: { opacity: 0, transition: { duration: 0.3 } },
        },
        i = {
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
    586: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(7437),
        s = a(6399),
        i = a(2265),
        l = a(2161);
      function r(e) {
        let { children: t, className: a } = e,
          r = (0, i.useRef)(null),
          [o, c] = (0, i.useState)({ x: 0, y: 0 }),
          { x: d, y: u } = o;
        return (0, n.jsx)(s.E.div, {
          className: (0, l.cn)("w-fit", a),
          onMouseMove: (e) => {
            let { clientX: t, clientY: a } = e,
              {
                width: n,
                height: s,
                left: i,
                top: l,
              } = r.current.getBoundingClientRect();
            c({ x: t - (i + n / 2), y: a - (l + s / 2) });
          },
          onMouseLeave: () => {
            c({ x: 0, y: 0 });
          },
          ref: r,
          animate: { x: d, y: u },
          transition: {
            type: "spring",
            stiffness: 250,
            damping: 50,
            mass: 0.9,
          },
          children: t,
        });
      }
    },
    2161: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return i;
        },
      });
      var n = a(1994);
      let s = (0, a(3335).q7)({
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
      function i() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return s((0, n.W)(t));
      }
    },
    2778: function () {},
  },
  function (e) {
    e.O(0, [478, 726, 479, 340, 971, 117, 744], function () {
      return e((e.s = 3201));
    }),
      (_N_E = e.O());
  },
]);
