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
      (e._sentryDebugIds[t] = "16a34062-399f-4f79-89b5-92ad0acaef50"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-16a34062-399f-4f79-89b5-92ad0acaef50"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3477],
    {
      5479: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/dashboard/margin/reserve",
          function () {
            return s(21444);
          },
        ]);
      },
      40838: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return f;
          },
        });
        var i = s(85893),
          n = s(67294),
          a = s(80052),
          r = s(93967),
          l = s.n(r),
          o = s(15922),
          c = s(37422),
          d = s(67253),
          w = s(24514),
          u = s(86322),
          x = s(45303),
          p = s.n(x),
          h = (e) => {
            let {
                children: t,
                isOpen: s,
                side: a,
                align: r,
                offset: o,
                footer: x,
                currentStep: h,
                continueClick: m,
                skipClick: f,
              } = e,
              [v, j] = (0, n.useState)(s);
            return ((0, n.useEffect)(() => {
              j(s);
            }, [s]),
            h)
              ? (0, i.jsxs)(u.fC, {
                  open: v,
                  children: [
                    (0, i.jsx)(u.xz, {
                      asChild: !0,
                      children: (0, i.jsx)("div", { children: t }),
                    }),
                    (0, i.jsx)(u.VY, {
                      align: r,
                      side: a,
                      className: "".concat(
                        p().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, i.jsxs)(i.Fragment, {
                        children: [
                          d.R[h].title &&
                            (0, i.jsx)("div", {
                              className: l()(p().title, "tw-mb-1"),
                              children: d.R[h].title,
                            }),
                          (0, i.jsx)("div", {
                            className: p().message,
                            children: d.R[h].message,
                          }),
                          x ||
                            (0, i.jsxs)(w.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, i.jsx)("div", { className: "flexGrow" }),
                                (0, i.jsx)("div", {
                                  className: p().skipButton,
                                  onClick: f,
                                  children: "Skip",
                                }),
                                (0, i.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: m,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, i.jsx)(u.Eh, { className: p().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, i.jsx)(i.Fragment, {});
          };
        let m = (0, n.forwardRef)((e, t) => {
          let {
              title: s,
              children: r,
              className: c,
              panelClassName: d,
              openOnClick: w = !1,
              leaveTimeout: u = 120,
              ...x
            } = e,
            p = (0, n.useRef)(null),
            m = t || p,
            f = (0, n.useRef)(null),
            v = (0, o.F)(),
            j = (0, n.useCallback)(
              (e) => {
                var t;
                w ||
                  (f.current && clearTimeout(f.current),
                  e || null === (t = m.current) || void 0 === t || t.click());
              },
              [w]
            ),
            b = (0, n.useCallback)(
              function (e, t) {
                let s =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!w || s) &&
                  (f.current && clearTimeout(f.current),
                  (f.current = window.setTimeout(() => {
                    e && t();
                  }, u)));
              },
              [w, u]
            );
          (0, n.useEffect)(
            () => () => {
              f.current && clearTimeout(f.current);
            },
            []
          );
          let g = (e, t) =>
            (0, i.jsxs)("div", {
              onMouseEnter: () => j(e),
              onMouseLeave: () => b(e, t),
              children: [
                (0, i.jsx)(a.O7, {
                  ref: m,
                  className: "tw-flex tw-outline-none",
                  children: s,
                }),
                (0, i.jsx)(a.Hi, {
                  anchor: "bottom",
                  className: l()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === v },
                    d
                  ),
                  children: n.cloneElement(r, {
                    closePopover: () => {
                      f.current && clearTimeout(f.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, i.jsx)(a.J2, {
            className: l()("tw-relative", c),
            children: (e) => {
              let { open: t, close: s } = e,
                n = g(t, s);
              if (x.isTutorialOpen) {
                var a, r;
                return (0, i.jsx)(h, {
                  skipClick:
                    null !== (a = x.handleSkipTutorialClick) && void 0 !== a
                      ? a
                      : () => {},
                  continueClick:
                    null !== (r = x.handleContinueTutorialClick) && void 0 !== r
                      ? r
                      : () => {},
                  currentStep: x.currentTutorialStep,
                  isOpen: x.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: n,
                });
              }
              return n;
            },
          });
        });
        m.displayName = "HoverPopover";
        var f = m;
      },
      52431: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return f;
          },
        });
        var i,
          n = s(85893),
          a = s(73935),
          r = s(67294);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = arguments[t];
                  for (var i in s)
                    ({}.hasOwnProperty.call(s, i) && (e[i] = s[i]));
                }
                return e;
              }).apply(null, arguments);
        }
        var o = function (e) {
            return r.createElement(
              "svg",
              l(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              i ||
                (i = r.createElement("path", {
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.667 6.667 8 9.334M5.336 6.667l2.667 2.667",
                }))
            );
          },
          c = s(24514),
          d = s(3575),
          w = s.n(d),
          u = s(34281),
          x = s(76035),
          p = s(65440),
          h = s(93967),
          m = s.n(h),
          f = (e) => {
            var t;
            let {
                onChange: s,
                options: i,
                disabled: r,
                label: l,
                width: d = 0,
                id: h,
                value: f,
                size: v = "md",
                iconStart: j,
                iconEnd: b,
                className: g,
                type: N,
                hasDropdown: y = !0,
                isLoading: _ = !1,
                inputClassName: k,
                labelClassName: C,
              } = e,
              {
                handleDropdownClick: M,
                isDropdownOpen: D,
                containerRef: R,
                optionsRef: S,
                optionsPosition: A,
                mounted: P,
              } = (0, x.x)();
            return (0, n.jsxs)("div", {
              className: ""
                .concat(w().container, " ")
                .concat(g || "", " ")
                .concat(N ? w()[N] : ""),
              ref: R,
              children: [
                l &&
                  (0, n.jsx)("label", {
                    htmlFor: h,
                    className: m()(w().label, C),
                    children: l,
                  }),
                (0, n.jsxs)("div", {
                  style: d > 0 ? { minWidth: d + "px" } : {},
                  className: ""
                    .concat(w().dropdownContainer, " ")
                    .concat(r ? w().disabled : ""),
                  onClick: () => !_ && M(),
                  role: "button",
                  children: [
                    (0, n.jsxs)("div", {
                      className: m()(
                        w().input,
                        { [w().clickedDropdown]: D },
                        k
                      ),
                      children: [
                        (0, n.jsxs)(c.Z, {
                          direction: "dropdown",
                          gap: "gap-4",
                          children: [
                            j && j,
                            _
                              ? (0, n.jsx)(p.Z, {})
                              : (0, n.jsx)("span", {
                                  className:
                                    "sm" === v ? w().textSmall : w().textMedium,
                                  children:
                                    null !==
                                      (t = null == f ? void 0 : f.name) &&
                                    void 0 !== t
                                      ? t
                                      : (0, n.jsx)("span", {
                                          className: w().placeholder,
                                          children: "-",
                                        }),
                                }),
                          ],
                        }),
                        y &&
                          (0, n.jsxs)("div", {
                            className: w().iconEnd,
                            children: [
                              b && b,
                              (0, n.jsx)("div", {
                                className: ""
                                  .concat(w().icon, " ")
                                  .concat(D ? w().isActive : ""),
                                children: (0, n.jsx)(o, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                    P &&
                      document.querySelector("#portal") &&
                      (0, a.createPortal)(
                        (0, n.jsx)(u.m, {
                          optionsRef: S,
                          isDropdownOpen: D,
                          optionsPosition: A,
                          options: i,
                          handleOptionClick: (e) => {
                            s(e.value, e);
                          },
                          selectedOption: f,
                          size: v,
                        }),
                        document.querySelector("#portal")
                      ),
                  ],
                }),
              ],
            });
          };
      },
      34281: function (e, t, s) {
        "use strict";
        s.d(t, {
          m: function () {
            return r;
          },
        });
        var i = s(85893),
          n = s(3575),
          a = s.n(n);
        let r = (e) => {
          let {
            optionsRef: t,
            isDropdownOpen: s,
            optionsPosition: n,
            options: r,
            handleOptionClick: l,
            selectedOption: o,
            size: c,
          } = e;
          return (0, i.jsx)("div", {
            ref: t,
            children: (0, i.jsx)("ul", {
              className: ""
                .concat(a().options, " ")
                .concat(s ? "" : a().isHidden),
              style: {
                width: "".concat(n.width, "px"),
                left: "".concat(n.left, "px"),
                top: "".concat(n.top, "px"),
              },
              children:
                null == r
                  ? void 0
                  : r.map((e) =>
                      (0, i.jsx)(
                        "li",
                        {
                          onClick: () => l(e),
                          className: ""
                            .concat(
                              (null == o ? void 0 : o.value) == e.value
                                ? a().selected
                                : "",
                              " "
                            )
                            .concat(
                              "sm" === c ? a().textSmall : a().textMedium
                            ),
                          children: e.name,
                        },
                        e.value
                      )
                    ),
            }),
          });
        };
      },
      76035: function (e, t, s) {
        "use strict";
        s.d(t, {
          x: function () {
            return a;
          },
        });
        var i = s(67294),
          n = s(16795);
        let a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            [t, s] = (0, i.useState)(e),
            a = (0, i.useRef)(null),
            r = (0, i.useRef)(null),
            [l, o] = (0, i.useState)({ width: 0, top: 0, left: 0 }),
            [c, d] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              let e = (e) => {
                a.current &&
                  !a.current.contains(e.target) &&
                  r.current &&
                  !r.current.contains(e.target) &&
                  s(!1);
              };
              return (
                d(!0),
                document.addEventListener("click", e, !0),
                () => document.removeEventListener("click", e, !0)
              );
            }, []),
            (0, n.M)(() => t && s(!1)),
            {
              handleDropdownClick: () => {
                var e, i, n, r, l;
                let c =
                  null === (e = a.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect();
                o({
                  width:
                    null !== (i = null == c ? void 0 : c.width) && void 0 !== i
                      ? i
                      : 100,
                  left:
                    null !== (n = null == c ? void 0 : c.x) && void 0 !== n
                      ? n
                      : 0,
                  top:
                    (null !== (r = null == c ? void 0 : c.y) && void 0 !== r
                      ? r
                      : 0) +
                    (null !== (l = null == c ? void 0 : c.height) &&
                    void 0 !== l
                      ? l
                      : 0) +
                    document.documentElement.scrollTop +
                    1,
                }),
                  s(!t);
              },
              isDropdownOpen: t,
              setIsDropdownOpen: s,
              containerRef: a,
              optionsRef: r,
              optionsPosition: l,
              setOptionsPosition: o,
              mounted: c,
            }
          );
        };
      },
      58224: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return _;
          },
        });
        var i = s(85893),
          n = s(15922),
          a = s(43417),
          r = s(32010),
          l = s(59731),
          o = s(30202),
          c = s(67294),
          d = s(81234),
          w = s(93967),
          u = s.n(w),
          x = s(18776),
          p = s(23279),
          h = s.n(p),
          m = s(67930),
          f = (e) => {
            let { onRefreshPrices: t } = e,
              [s, n] = (0, c.useState)(!1),
              [a, w] = (0, c.useState)(void 0),
              p = (0, o.NL)(),
              { contractsWithReferencePrices: f, currentExpiryDate: v } = (0,
              l.qr)(
                (0, r.N)((e) => ({
                  contractsWithReferencePrices: e.contractsWithReferencePrices,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              j = (0, c.useMemo)(() => [m.nA, f, v], [f, v]),
              b = (0, c.useCallback)(() => {
                let e = p.getQueryState(j);
                if (
                  !(null == e ? void 0 : e.dataUpdatedAt) &&
                  !(null == e ? void 0 : e.error)
                ) {
                  g();
                  return;
                }
                w(null == e ? void 0 : e.dataUpdatedAt);
              }, [p, j]),
              g = h()(b, 500);
            return ((0, c.useEffect)(() => {
              b();
            }, [b]),
            t)
              ? (0, i.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-items-end",
                  children: [
                    (0, i.jsxs)("button", {
                      onClick: () => {
                        n(!0),
                          null == t || t(),
                          setTimeout(() => {
                            n(!1), b();
                          }, 1e3);
                      },
                      className:
                        "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                      children: [
                        (0, i.jsx)(d.Z, {
                          className: u()({ "tw-animate-spin": s }),
                        }),
                        (0, i.jsx)("span", {
                          className: "tw-text-xs tw-text-white",
                          children: "Refresh prices",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      className: "tw-mt-2 tw-text-xxs",
                      children: [
                        "Last Update: ",
                        a && (0, x.Z)(new Date(a), "dd MMM - HH:mm:ss"),
                      ],
                    }),
                  ],
                })
              : null;
          },
          v = s(41664),
          j = s.n(v);
        let b = (e) => {
          let { breadcrumbs: t, className: s } = e;
          return t.length
            ? (0, i.jsx)("div", {
                className: s,
                children: t.map((e, s) =>
                  (0, i.jsxs)(
                    "span",
                    {
                      children: [
                        (0, i.jsx)(j(), {
                          href: e.path,
                          className:
                            "tw-text-xs tw-font-bold hover:tw-underline",
                          children: e.label,
                        }),
                        s < t.length - 1 && " / ",
                      ],
                    },
                    e.path
                  )
                ),
              })
            : (0, i.jsx)(i.Fragment, {});
        };
        var g = s(56267),
          N = s(25978),
          y = s.n(N),
          _ = (e) => {
            let {
              breadcrumbs: t = [],
              title: s,
              onExpiryChange: r,
              onRefreshPrices: l,
            } = e;
            return "phone" === (0, n.F)()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("div", {
                      className: "tw-mb-5",
                      children: (0, i.jsx)("h1", {
                        className: y().title,
                        children: s,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-justify-between",
                      children: [
                        (0, i.jsx)(g.Z, {}),
                        (0, i.jsx)(f, { onRefreshPrices: l }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "tw-space-between tw-mb-3 tw-flex",
                      children: (0, i.jsx)(a.F, { hideHours: !0 }),
                    }),
                    (0, i.jsx)(b, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-row tw-justify-between tw-gap-4",
                      children: [
                        (0, i.jsx)("div", {
                          className: "tw-flex tw-items-center",
                          children: (0, i.jsx)(a.F, {
                            hideHours: !0,
                            onExpiryChange: r,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-justify-end tw-gap-3",
                          children: [
                            (0, i.jsx)(g.Z, {}),
                            (0, i.jsx)(f, { onRefreshPrices: l }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(b, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                });
          };
      },
      95373: function (e, t, s) {
        "use strict";
        var i = s(85893);
        t.Z = () =>
          (0, i.jsxs)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsxs)("g", {
                clipPath: "url(#clip0_16681_82695)",
                children: [
                  (0, i.jsx)("path", {
                    d: "M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, i.jsx)("path", {
                    d: "M6 4.5H6.005",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, i.jsx)("path", {
                    d: "M5.5 6H6V8H6.5",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
              (0, i.jsx)("defs", {
                children: (0, i.jsx)("clipPath", {
                  id: "clip0_16681_82695",
                  children: (0, i.jsx)("rect", {
                    width: "12",
                    height: "12",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
      },
      55975: function (e, t, s) {
        "use strict";
        var i = s(85893),
          n = s(39332),
          a = s(67294),
          r = s(80362),
          l = s(37422),
          o = s(92400),
          c = s(15741),
          d = s(52431),
          w = s(67253),
          u = s(3298),
          x = s(93967),
          p = s.n(x),
          h = s(7712),
          m = s.n(h);
        t.Z = (e) => {
          let {
              tabs: t,
              className: s = "",
              activeTab: x,
              onChange: h,
              responsive: f = !0,
            } = e,
            v = (0, n.useRouter)(),
            j = (0, a.useCallback)(
              (e) => {
                e.forEach((e) => {
                  setTimeout(() => {
                    e.path && v.prefetch(e.path);
                  }, 200);
                });
              },
              [v]
            );
          (0, a.useEffect)(() => {
            j(t);
          }, [t, j]);
          let b = (0, r.Z)(u.oh),
            { currentStep: g } = (0, a.useContext)(c.OnboardingContext),
            N = (e) => (e === x ? m().isActive : ""),
            y = t.map((e) => ({ name: e.label, value: e.id })),
            _ = y.find((e) => e.value === x),
            k = (e) => {
              let s = t.find((t) => t.id === e);
              s && (null == h || h(s.id), s.path && v.push(s.path));
            };
          return t && 0 !== t.length
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "tw-mb-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-6 max-sm:tw-flex-wrap",
                    children: [
                      f && b
                        ? (0, i.jsx)(d.Z, {
                            options: y,
                            value: _,
                            width: 190,
                            onChange: (e) => k(e),
                            type: "tablet",
                          })
                        : (0, i.jsx)(o.Z, {
                            isOpen:
                              g === w.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                              !!t.find((e) => "fundLockHistory" === e.id),
                            align: "start",
                            offset: 360,
                            side: "bottom",
                            children: (0, i.jsx)("div", {
                              className: p()(m().buttons, "!tw-my-0", s),
                              children: t.map((e) =>
                                (0, i.jsx)(
                                  l.Z,
                                  {
                                    onClick: (t) => {
                                      t.stopPropagation(),
                                        !e.disabled &&
                                          (null == h || h(e.id),
                                          e.path && v.push(e.path));
                                    },
                                    className: ""
                                      .concat(N(e.id), " ")
                                      .concat(
                                        e.disabled ? m().disableText : ""
                                      ),
                                    role: "tab",
                                    "aria-selected": e.id === x,
                                    "aria-controls": "tab-panel-".concat(e.id),
                                    title: "Click to select tab",
                                    children: e.label,
                                  },
                                  e.id
                                )
                              ),
                            }),
                          }),
                      ("positions" === x || "tradeHistory" === x) &&
                        (0, i.jsx)("div", { id: "tabsPortal" }),
                    ],
                  }),
                  t.map(
                    (e) =>
                      e.id === x &&
                      (0, i.jsx)(
                        "div",
                        {
                          role: "tabpanel",
                          id: "tab-panel-".concat(e.id),
                          "aria-labelledby": e.id,
                          children: e.content,
                        },
                        e.id
                      )
                  ),
                ],
              })
            : (0, i.jsx)("div", {
                className: m().tabs,
                children: "No tabs available.",
              });
        };
      },
      57153: function (e, t, s) {
        "use strict";
        s.d(t, {
          Ro: function () {
            return i;
          },
          ko: function () {
            return a;
          },
          rV: function () {
            return n;
          },
          zI: function () {
            return r;
          },
        });
        let i = [
            { id: "trading", path: "/dashboard/trading", label: "Trading" },
            {
              id: "margin",
              path: "/dashboard/margin",
              label: "Margin Lending | Borrowing",
            },
            {
              id: "reserve",
              path: "/dashboard/margin/reserve",
              label: "Reserve Status & Configuration",
            },
          ],
          n = [
            { id: "market", path: "/trading/market", label: "Market" },
            { id: "stories", path: "/trading/stories", label: "Stories" },
            {
              id: "principal-protected-strategies",
              path: "/trading/principal-protected-strategies",
              label: "Principal Protected Strategies",
            },
            {
              id: "dynamic-option-strategies",
              path: "/trading/dynamic-option-strategies",
              label: "Dynamic Option Strategies",
            },
          ],
          a = [
            { id: "referral", path: "/points/referral", label: "Referral" },
            { id: "profile", path: "/points/profile", label: "Profile" },
            { id: "history", path: "/points/history", label: "History" },
          ],
          r = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = [
                { id: "deposit", label: "Deposit" },
                { id: "withdraw", label: "Withdraw" },
                { id: "swap", label: "Swap" },
              ];
            return e ? t : [...t, { id: "wrap", label: "Wrap / Unwrap" }];
          };
      },
      80362: function (e, t, s) {
        "use strict";
        var i = s(67294);
        t.Z = (e) => {
          let [t, s] = (0, i.useState)(!1),
            n = (0, i.useCallback)((e) => {
              e.matches ? s(!0) : s(!1);
            }, []);
          return (
            (0, i.useEffect)(() => {
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addEventListener("change", n),
                t.matches && s(!0),
                () => t.removeEventListener("change", n)
              );
            }, [e, n]),
            t
          );
        };
      },
      20314: function (e, t, s) {
        "use strict";
        var i = s(85893),
          n = s(39332),
          a = s(57153),
          r = s(24514),
          l = s(55975),
          o = s(15418);
        t.Z = () => {
          var e, t;
          let s = (0, n.usePathname)();
          return (0, i.jsx)(r.Z, {
            direction: "row-space-between",
            children: (0, i.jsx)(l.Z, {
              tabs: a.Ro,
              className: "mb-0",
              activeTab:
                null !==
                  (t =
                    null === (e = a.Ro.find((e) => e.path === s)) ||
                    void 0 === e
                      ? void 0
                      : e.id) && void 0 !== t
                  ? t
                  : a.Ro[0].id,
              onChange: (e) => {
                let t = s.split("/");
                (t[2] = e),
                  o.Z.track("Points menu interactions", { path: t.join("/") });
              },
            }),
          });
        };
      },
      13880: function (e, t, s) {
        "use strict";
        var i = s(85893),
          n = s(2920),
          a = s.n(n);
        t.Z = (e) => {
          let { children: t, margin: s = "m-0", className: n = "" } = e;
          return (0, i.jsx)("div", {
            className: ""
              .concat(a().panel, " ")
              .concat(s && s, " ")
              .concat(n),
            children: t,
          });
        };
      },
      21444: function (e, t, s) {
        "use strict";
        s.r(t),
          s.d(t, {
            default: function () {
              return T;
            },
          });
        var i = s(85893),
          n = s(27888),
          a = s(92505),
          r = s(85292),
          l = s(20314),
          o = s(58224),
          c = s(70757),
          d = s(40838),
          w = s(95373),
          u = s(13880),
          x = s(46464),
          p = s(10723),
          h = s(67017),
          m = s(25615),
          f = s(88793),
          v = s(31712),
          j = s(72775),
          b = (e) => {
            let { chartData: t, utilizationRate: s, optimalUsageRatio: n } = e,
              a =
                6 > Math.round(s)
                  ? "start"
                  : Math.round(s) > 94
                  ? "end"
                  : "middle";
            return (0, i.jsx)(x.h, {
              width: "100%",
              height: 180,
              children: (0, i.jsxs)(p.w, {
                data: t,
                margin: { left: 0, top: 24, right: 12 },
                children: [
                  (0, i.jsx)(h.q, {
                    vertical: !1,
                    stroke: "rgba(255, 255, 255, 0.2)",
                  }),
                  (0, i.jsx)(m.K, {
                    dataKey: "borrow",
                    tickLine: !1,
                    axisLine: !1,
                    tickMargin: 8,
                    ticks: [0, 25, 50, 75, 100],
                    tickFormatter: (e) => "".concat(e, "%"),
                    fontSize: 10,
                  }),
                  (0, i.jsx)(f.B, {
                    dataKey: "rate",
                    tickLine: !1,
                    axisLine: !1,
                    width: 30,
                    tickCount: 4,
                    tickFormatter: (e) => "".concat(e, "%"),
                    fontSize: 12,
                  }),
                  (0, i.jsx)(v.x, {
                    dataKey: "rate",
                    type: "linear",
                    stroke: "#B5B5F8",
                    strokeWidth: 2,
                    dot: !1,
                  }),
                  (0, i.jsx)(v.x, {
                    dataKey: "optimalRate",
                    type: "linear",
                    stroke: "#A855F7",
                    strokeWidth: 2,
                    dot: !1,
                  }),
                  (0, i.jsx)(j.d, {
                    x: Math.round(s),
                    stroke: "#9d9daa",
                    strokeWidth: 1.5,
                    pointerEvents: "none",
                    strokeDasharray: "3,2",
                    label: {
                      position: "top",
                      className:
                        "tw-text-xs tw-fill-ithaca-white-80 tw-font-bold",
                      style: { textAnchor: a },
                      value: "Current ".concat(
                        new Intl.NumberFormat("en-US", {
                          maximumFractionDigits: 2,
                        }).format(s),
                        "%"
                      ),
                    },
                  }),
                  (0, i.jsx)(j.d, {
                    x: Math.round(n),
                    stroke: "#9d9daa",
                    strokeWidth: 1.5,
                    pointerEvents: "none",
                    strokeDasharray: "3,2",
                    label: {
                      position: "top",
                      className:
                        "tw-text-xs tw-fill-ithaca-white-80 tw-font-bold",
                      value: "Optimal ".concat(
                        new Intl.NumberFormat("en-US", {
                          maximumFractionDigits: 2,
                        }).format(n),
                        "%"
                      ),
                    },
                  }),
                ],
              }),
            });
          },
          g = s(88144),
          N = s(27484),
          y = s.n(N),
          _ = s(59731),
          k = s(82649);
        let C = (e) => {
          let { systemInfo: t } = (0, _.qr)();
          return (0, g.a)({
            queryKey: [
              "reserveHistoricalAPY",
              e,
              t.extra["extra.lendingpooladdressesprovider"],
            ],
            queryFn: async () => {
              let s = ""
                  .concat(e)
                  .concat(t.extra["extra.lendingpooladdressesprovider"])
                  .toLowerCase(),
                i =
                  '\n        query GetReserveHistory {\n          reserve(id: "'
                    .concat(
                      s,
                      '") {\n            id\n            liquidityRate\n            variableBorrowRate\n            lastUpdateTimestamp\n            paramsHistory(\n              first: '
                    )
                    .concat(
                      120,
                      "\n              orderBy: timestamp\n              orderDirection: asc\n            ) {\n              id\n              liquidityRate\n              variableBorrowRate\n              timestamp\n            }\n          }\n        }\n      "
                    ),
                n = await (0, k.Sp)("MARGIN_LOAN_SUBGRAPH_URL"),
                a = await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ query: i }),
                }),
                { data: r } = await a.json();
              if (!(null == r ? void 0 : r.reserve)) return [];
              let l = {
                month: y()(1e3 * Number(r.reserve.lastUpdateTimestamp)).format(
                  "DD MMM"
                ),
                supplyAPY:
                  100 *
                  Number(
                    (
                      (1 + Number(r.reserve.liquidityRate) / 1e27 / 31536e3) **
                        31536e3 -
                      1
                    ).toFixed(2)
                  ),
                borrowAPY:
                  100 *
                  Number(
                    (
                      (1 +
                        Number(r.reserve.variableBorrowRate) /
                          1e27 /
                          31536e3) **
                        31536e3 -
                      1
                    ).toFixed(2)
                  ),
              };
              return [
                ...r.reserve.paramsHistory.map((e) => ({
                  month: y()(1e3 * Number(e.timestamp)).format("DD MMM"),
                  supplyAPY:
                    100 *
                    Number(
                      (
                        (1 + Number(e.liquidityRate) / 1e27 / 31536e3) **
                          31536e3 -
                        1
                      ).toFixed(2)
                    ),
                  borrowAPY:
                    100 *
                    Number(
                      (
                        (1 + Number(e.variableBorrowRate) / 1e27 / 31536e3) **
                          31536e3 -
                        1
                      ).toFixed(2)
                    ),
                })),
                l,
              ];
            },
            refetchInterval: 3e5,
          });
        };
        var M = s(64520),
          D = s(55400),
          R = (e) => {
            let { variant: t, reserveAddress: s } = e,
              { data: n, isLoading: a } = C(s);
            return a || !n
              ? (0, i.jsx)("div", {
                  className:
                    "tw-h-[160px] tw-w-full tw-animate-pulse tw-bg-ithaca-white-10",
                })
              : (console.log(n),
                (0, i.jsx)(x.h, {
                  width: "100%",
                  height: 160,
                  children: (0, i.jsxs)(M.T, {
                    data: n,
                    margin: { top: 12, right: 8 },
                    children: [
                      (0, i.jsx)(h.q, {
                        vertical: !1,
                        stroke: "rgba(255, 255, 255, 0.2)",
                      }),
                      (0, i.jsxs)("defs", {
                        children: [
                          (0, i.jsxs)("linearGradient", {
                            id: "gradient-green",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                              (0, i.jsx)("stop", {
                                offset: "20%",
                                stopColor: "#5EE192",
                                stopOpacity: 0.2,
                              }),
                              (0, i.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#5EE192",
                                stopOpacity: 0,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("linearGradient", {
                            id: "gradient-purple",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                              (0, i.jsx)("stop", {
                                offset: "20%",
                                stopColor: "#B5B5F8",
                                stopOpacity: 0.2,
                              }),
                              (0, i.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#B5B5F8",
                                stopOpacity: 0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(m.K, {
                        dataKey: "month",
                        tickLine: !1,
                        axisLine: !1,
                        tickMargin: 8,
                        fontSize: 10,
                      }),
                      (0, i.jsx)(f.B, {
                        dataKey: "supply" === t ? "supplyAPY" : "borrowAPY",
                        axisLine: !1,
                        tickMargin: 0,
                        tickLine: !1,
                        tickFormatter: (e) => "".concat(e, "%"),
                        fontSize: 12,
                        tickCount: 4,
                        width: 28,
                      }),
                      (0, i.jsx)(D.u, {
                        type: "linear",
                        dataKey: "supply" === t ? "supplyAPY" : "borrowAPY",
                        fillOpacity: 0.8,
                        fill:
                          "borrow" === t
                            ? "url(#gradient-purple)"
                            : "url(#gradient-green)",
                        stroke: "borrow" === t ? "#B5B5F8" : "var(--green-30)",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
                }));
          },
          S = s(45338),
          A = s(15229),
          P = (e) => {
            let { reserve: t } = e,
              {
                decimals: s,
                symbol: n,
                totalLiquidityUSD: a,
                availableLiquidityUSD: r,
                availableLiquidity: l,
                borrowUsageRatio: o,
                priceInUSD: x,
                formattedReserveLiquidationThreshold: p,
                formattedReserveLiquidationBonus: h,
                totalLiquidity: m,
                supplyAPY: f,
                totalDebt: v,
                variableBorrowAPY: j,
                stableBorrowRateEnabled: g,
                optimalUsageRatio: N,
                baseStableBorrowRate: y,
                baseVariableBorrowRate: _,
                stableRateSlope1: k,
                stableRateSlope2: C,
                variableRateSlope1: M,
                variableRateSlope2: D,
              } = t,
              P = 100 * Number(o);
            return (0, i.jsxs)(u.Z, {
              className: "tw-space-y-4 tw-p-6",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "tw-flex tw-items-center tw-divide-x tw-divide-ithaca-white-10 tw-font-lato [&>div]:tw-px-2",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-gap-2 !tw-pl-0 tw-text-lg",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, c.XX)(n, "tw-size-5"),
                        }),
                        " ",
                        n,
                        " ",
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60",
                      children: [
                        (0, i.jsx)("span", { children: "Reserve Size" }),
                        (0, i.jsxs)("div", {
                          className: "tw-font-roboto tw-text-sm tw-text-white",
                          children: [
                            (0, S.uM)(Number(a), "string", "USDC", 1),
                            " $",
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60",
                      children: [
                        (0, i.jsx)("span", { children: "Available Liquidity" }),
                        (0, i.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-font-roboto tw-text-sm tw-text-white",
                          children: [
                            (0, S.uM)(
                              Number((0, A.b)(BigInt(l), s)),
                              "string",
                              n,
                              "USDC" === n ? 1 : 3
                            ),
                            (0, c.XX)(n),
                            "USDC" !== n &&
                              (0, i.jsxs)("span", {
                                className: "tw-italic",
                                children: [
                                  " ",
                                  "( ",
                                  (0, S.uM)(Number(r), "string", "USDC", 1),
                                  " $ )",
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60",
                      children: [
                        (0, i.jsx)("span", { children: "Utilization Rate" }),
                        (0, i.jsxs)("div", {
                          className: "tw-font-roboto tw-text-sm tw-text-white",
                          children: [P.toFixed(2), " %"],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60",
                      children: [
                        (0, i.jsx)("span", { children: "Oracle Price" }),
                        (0, i.jsx)("div", {
                          className: "tw-font-roboto tw-text-sm tw-text-white",
                          children: (0, S.Yr)(Number(x), 2),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "tw-font-lato",
                  children: "Reserve Status & Confirmation",
                }),
                (0, i.jsxs)("div", {
                  className: "tw-flex tw-divide-x tw-divide-ithaca-white-10",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "tw-space-y-2 tw-py-2 tw-pr-5",
                      children: [
                        (0, i.jsxs)("span", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-ithaca-white-60",
                          children: [
                            "Haircut",
                            " ",
                            (0, i.jsx)(d.Z, {
                              title: (0, i.jsx)(w.Z, {}),
                              children: (0, i.jsx)(i.Fragment, {}),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          children: [(100 * Number(p)).toFixed(2), " %"],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "tw-space-y-2 tw-px-5 tw-py-2",
                      children: [
                        (0, i.jsxs)("span", {
                          className:
                            "tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-ithaca-white-60",
                          children: [
                            "Liquidation Penalty",
                            " ",
                            (0, i.jsx)(d.Z, {
                              title: (0, i.jsx)(w.Z, {}),
                              children: (0, i.jsx)(i.Fragment, {}),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          children: [(100 * Number(h)).toFixed(2), " %"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "tw-grid tw-gap-10 tw-border-b tw-border-b-ithaca-white-10 tw-pb-5 lg:tw-grid-cols-2",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("div", {
                          className: "tw-text-sm",
                          children: "Supply Info",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "tw-mb-4 tw-mt-2 tw-flex tw-items-stretch tw-gap-3",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "tw-space-y-1",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-font-lato tw-text-xs tw-text-ithaca-white-60",
                                  children: "Total Supply",
                                }),
                                (0, i.jsxs)("div", {
                                  className: "tw-flex tw-items-center tw-gap-1",
                                  children: [
                                    (0, S.uM)(
                                      Number(m),
                                      "string",
                                      n,
                                      "USDC" === n ? 1 : 3
                                    ),
                                    " ",
                                    (0, c.XX)(n),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "tw-border-l tw-border-ithaca-white-10",
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-space-y-1",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-font-lato tw-text-xs tw-text-ithaca-white-60",
                                  children: "Supply APY",
                                }),
                                (0, i.jsxs)("div", {
                                  children: [
                                    (100 * Number(f)).toFixed(2),
                                    " %",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "tw-flex tw-items-center tw-justify-between tw-pr-4",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-2  tw-text-xs tw-font-medium tw-text-ithaca-white-60",
                                children: [
                                  (0, i.jsx)("span", {
                                    className:
                                      "tw-block tw-size-2 tw-rounded-full tw-bg-ithaca-green-30",
                                  }),
                                  " Supply APR",
                                ],
                              }),
                            }),
                            (0, i.jsx)(R, {
                              variant: "supply",
                              reserveAddress: t.underlyingAsset,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("div", {
                          className: "tw-text-sm",
                          children: "Borrowing Info",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "tw-mb-4 tw-mt-2 tw-flex tw-items-stretch tw-gap-3",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "tw-space-y-1",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-text-xs tw-text-ithaca-white-60",
                                  children: "Total Debt",
                                }),
                                (0, i.jsxs)("div", {
                                  className: "tw-flex tw-items-center tw-gap-1",
                                  children: [
                                    (0, S.uM)(
                                      Number(v),
                                      "string",
                                      n,
                                      "USDC" === n ? 1 : 3
                                    ),
                                    " ",
                                    (0, c.XX)(n),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "tw-border-l tw-border-ithaca-white-10",
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-space-y-1",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-text-xs tw-text-ithaca-white-60",
                                  children: "Borrowing APY",
                                }),
                                (0, i.jsxs)("div", {
                                  children: [
                                    (100 * Number(j)).toFixed(2),
                                    " %",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "tw-flex tw-items-center tw-justify-between tw-pr-4",
                              children: (0, i.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-2  tw-text-xs tw-font-medium tw-text-ithaca-white-60",
                                children: [
                                  (0, i.jsx)("span", {
                                    className:
                                      "tw-block tw-size-2 tw-rounded-full tw-bg-[#B5B5F8]",
                                  }),
                                  " Borrowing APR",
                                ],
                              }),
                            }),
                            (0, i.jsx)(R, {
                              variant: "borrow",
                              reserveAddress: t.underlyingAsset,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "tw-space-y-2.5 tw-pb-8 tw-pt-2",
                  children: [
                    (0, i.jsx)("div", { children: "Interest rate model" }),
                    (0, i.jsxs)("div", {
                      className: "tw-space-y-1",
                      children: [
                        (0, i.jsx)("span", {
                          className: "tw-text-sm tw-text-ithaca-white-60",
                          children: "Utilization Rate",
                        }),
                        (0, i.jsxs)("div", { children: [P.toFixed(2), " %"] }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "tw-space-y-5",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-gap-8 tw-text-xs tw-font-medium tw-text-ithaca-white-60",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "tw-flex tw-items-center tw-gap-2",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-inline-block tw-size-2 tw-rounded-full tw-bg-[#B5B5F8]",
                                }),
                                "Borrow APR, variable",
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-flex tw-items-center tw-gap-2",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "tw-inline-block tw-size-2 tw-rounded-full tw-bg-[#A855F7]",
                                }),
                                "Utilization Rate",
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(b, {
                          chartData: Array.from(
                            { length: 101 },
                            (e, t) => t
                          ).map((e) => {
                            let t;
                            let s = e / 100,
                              i = (0, S.nG)(N),
                              n = (0, S.nG)(g ? y : _),
                              a = (0, S.nG)(g ? k : M),
                              r = (0, S.nG)(g ? C : D);
                            return s < i
                              ? {
                                  borrow: e,
                                  rate: 100 * (t = n + (s / i) * a),
                                  optimalRate: null,
                                }
                              : {
                                  borrow: e,
                                  rate:
                                    100 * (t = n + a + ((s - i) / (1 - i)) * r),
                                  optimalRate: 100 * t,
                                };
                          }),
                          utilizationRate: P,
                          optimalUsageRatio: 100 * (0, S.nG)(N),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          F = s(81014),
          T = () => {
            let { reserves: e } = (0, F.useMarginLoansDataContext)();
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(a.Z, {}),
                (0, i.jsx)(n.Z, {
                  children: (0, i.jsxs)(r.Z, {
                    children: [
                      (0, i.jsx)(o.Z, { title: "Dashboard" }),
                      (0, i.jsx)(l.Z, {}),
                      (0, i.jsx)("div", {
                        className: "tw-grid tw-gap-5 lg:tw-grid-cols-2",
                        children: e.map((e) =>
                          (0, i.jsx)(P, { reserve: e }, e.underlyingAsset)
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            });
          };
      },
      3575: function (e) {
        e.exports = {
          container: "DropdownMenu_container__R0HbF",
          label: "DropdownMenu_label__U0XW4",
          dropdownContainer: "DropdownMenu_dropdownContainer__72LVT",
          input: "DropdownMenu_input__gtAZz",
          textMedium: "DropdownMenu_textMedium__A0UJE",
          textSmall: "DropdownMenu_textSmall__WqPxZ",
          clickedDropdown: "DropdownMenu_clickedDropdown__1l_Lg",
          placeholder: "DropdownMenu_placeholder__AUX1w",
          icon: "DropdownMenu_icon__9OxWm",
          isActive: "DropdownMenu_isActive__T_u5y",
          options: "DropdownMenu_options__mLBsg",
          selected: "DropdownMenu_selected__uSw8X",
          isHidden: "DropdownMenu_isHidden__GDmqe",
          iconEnd: "DropdownMenu_iconEnd__YVrta",
          tablet: "DropdownMenu_tablet__lcq3p",
          disabled: "DropdownMenu_disabled__SJDhi",
        };
      },
      25978: function (e) {
        e.exports = { title: "headerWithInformation_title__5jA0Y" };
      },
      7712: function (e) {
        e.exports = {
          buttons: "Tabs_buttons__mOoD_",
          disableText: "Tabs_disableText__sTAGX",
          isActive: "Tabs_isActive__ggOgf",
        };
      },
      2920: function (e) {
        e.exports = { panel: "Panel_panel__unNp0" };
      },
    },
    function (e) {
      e.O(
        0,
        [
          6342, 9261, 4442, 5675, 7410, 1371, 6322, 1664, 9849, 52, 7972, 8776,
          6746, 7581, 8133, 579, 8833, 9156, 1014, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 5479));
        }
      ),
        (_N_E = e.O());
    },
  ]);
