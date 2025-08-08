!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "f7ac7553-0a85-4c77-a19c-5d7bc8a2f81b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f7ac7553-0a85-4c77-a19c-5d7bc8a2f81b"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [717],
    {
      40838: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var r = n(85893),
          l = n(67294),
          i = n(80052),
          a = n(93967),
          s = n.n(a),
          o = n(15922),
          c = n(37422),
          d = n(67253),
          u = n(24514),
          h = n(86322),
          w = n(45303),
          m = n.n(w),
          v = (e) => {
            let {
                children: t,
                isOpen: n,
                side: i,
                align: a,
                offset: o,
                footer: w,
                currentStep: v,
                continueClick: f,
                skipClick: p,
              } = e,
              [b, x] = (0, l.useState)(n);
            return ((0, l.useEffect)(() => {
              x(n);
            }, [n]),
            v)
              ? (0, r.jsxs)(h.fC, {
                  open: b,
                  children: [
                    (0, r.jsx)(h.xz, {
                      asChild: !0,
                      children: (0, r.jsx)("div", { children: t }),
                    }),
                    (0, r.jsx)(h.VY, {
                      align: a,
                      side: i,
                      className: "".concat(
                        m().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, r.jsxs)(r.Fragment, {
                        children: [
                          d.R[v].title &&
                            (0, r.jsx)("div", {
                              className: s()(m().title, "tw-mb-1"),
                              children: d.R[v].title,
                            }),
                          (0, r.jsx)("div", {
                            className: m().message,
                            children: d.R[v].message,
                          }),
                          w ||
                            (0, r.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, r.jsx)("div", { className: "flexGrow" }),
                                (0, r.jsx)("div", {
                                  className: m().skipButton,
                                  onClick: p,
                                  children: "Skip",
                                }),
                                (0, r.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: f,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, r.jsx)(h.Eh, { className: m().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)(r.Fragment, {});
          };
        let f = (0, l.forwardRef)((e, t) => {
          let {
              title: n,
              children: a,
              className: c,
              panelClassName: d,
              openOnClick: u = !1,
              leaveTimeout: h = 120,
              ...w
            } = e,
            m = (0, l.useRef)(null),
            f = t || m,
            p = (0, l.useRef)(null),
            b = (0, o.F)(),
            x = (0, l.useCallback)(
              (e) => {
                var t;
                u ||
                  (p.current && clearTimeout(p.current),
                  e || null === (t = f.current) || void 0 === t || t.click());
              },
              [u]
            ),
            g = (0, l.useCallback)(
              function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || n) &&
                  (p.current && clearTimeout(p.current),
                  (p.current = window.setTimeout(() => {
                    e && t();
                  }, h)));
              },
              [u, h]
            );
          (0, l.useEffect)(
            () => () => {
              p.current && clearTimeout(p.current);
            },
            []
          );
          let j = (e, t) =>
            (0, r.jsxs)("div", {
              onMouseEnter: () => x(e),
              onMouseLeave: () => g(e, t),
              children: [
                (0, r.jsx)(i.O7, {
                  ref: f,
                  className: "tw-flex tw-outline-none",
                  children: n,
                }),
                (0, r.jsx)(i.Hi, {
                  anchor: "bottom",
                  className: s()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === b },
                    d
                  ),
                  children: l.cloneElement(a, {
                    closePopover: () => {
                      p.current && clearTimeout(p.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, r.jsx)(i.J2, {
            className: s()("tw-relative", c),
            children: (e) => {
              let { open: t, close: n } = e,
                l = j(t, n);
              if (w.isTutorialOpen) {
                var i, a;
                return (0, r.jsx)(v, {
                  skipClick:
                    null !== (i = w.handleSkipTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  continueClick:
                    null !== (a = w.handleContinueTutorialClick) && void 0 !== a
                      ? a
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: l,
                });
              }
              return l;
            },
          });
        });
        f.displayName = "HoverPopover";
        var p = f;
      },
      20717: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return j;
            },
          });
        var r = n(85893),
          l = n(67294);
        let i = l.forwardRef(function (e, t) {
          let { title: n, titleId: r, ...i } = e;
          return l.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": r,
              },
              i
            ),
            n ? l.createElement("title", { id: r }, n) : null,
            l.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z",
            })
          );
        });
        var a = n(40838),
          s = n(55975),
          o = n(59731),
          c = n(93967),
          d = n.n(c),
          u = n(27502),
          h = n.n(u),
          w = n(5152),
          m = n.n(w),
          v = n(11163),
          f = n(5671);
        let p = m()(() => Promise.resolve().then(n.bind(n, 23502)), {
            loadableGenerated: { webpack: () => [23502] },
            ssr: !1,
            loading: f.LazyComponentPlaceholder,
          }),
          b = m()(
            () =>
              Promise.all([n.e(6134), n.e(3853), n.e(9678)]).then(
                n.bind(n, 84624)
              ),
            {
              loadableGenerated: { webpack: () => [84624] },
              ssr: !1,
              loading: f.LazyComponentPlaceholder,
            }
          ),
          x = m()(
            () =>
              Promise.all([
                n.e(6134),
                n.e(7558),
                n.e(3068),
                n.e(4115),
                n.e(9205),
                n.e(1903),
              ]).then(n.bind(n, 99205)),
            {
              loadableGenerated: { webpack: () => [99205] },
              ssr: !1,
              loading: f.LazyComponentPlaceholder,
            }
          ),
          g = [
            { id: "pricing", label: "Pricing", content: (0, r.jsx)(p, {}) },
            {
              id: "liveOrders",
              label: "Live Orders",
              content: (0, r.jsx)(b, { isPreview: !0 }),
            },
            {
              id: "positions",
              label: "Positions",
              content: (0, r.jsx)(x, { isPreview: !0 }),
            },
          ];
        var j = () => {
          let { floatingButtonTab: e, setFloatingButtonTab: t } = (0, o.xc)(),
            n =
              (0, v.useRouter)().pathname.startsWith("/pricing") ||
              "pricing" !== e;
          return (0, r.jsx)(a.Z, {
            leaveTimeout: n ? 500 : 5e4,
            className:
              "!tw-fixed tw-bottom-8 tw-right-8 sm:tw-bottom-16 sm:tw-right-16",
            panelClassName: d()(
              "sm:-tw-translate-x-16 tw-translate-x-0 -tw-translate-y-1 tw-right-0 sm:!tw-left-[unset] tw-absolute tw-p-4 tw-h-[560px]",
              h().container,
              { "lg:tw-w-[1024px] sm:tw-w-[600px]": "pricing" !== e }
            ),
            title: (0, r.jsx)("span", {
              className:
                "tw-size-12 tw-rounded-full tw-bg-ithaca-green-20 tw-p-2 tw-text-white tw-transition hover:tw-opacity-80",
              children: (0, r.jsx)(i, {}),
            }),
            children: (0, r.jsx)(s.Z, {
              className: "tw-w-full tw-justify-center",
              tabs: g,
              activeTab: e,
              onChange: (e) => t(e),
            }),
          });
        };
      },
      27502: function (e) {
        e.exports = { container: "FloatingButton_container__5qlJc" };
      },
    },
  ]);
