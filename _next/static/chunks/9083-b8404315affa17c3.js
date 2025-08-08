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
      (e._sentryDebugIds[t] = "a42f5c60-ca68-4b02-9452-eacc4de5704a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a42f5c60-ca68-4b02-9452-eacc4de5704a"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9083],
    {
      27561: function (e, t, n) {
        var r = n(67990),
          i = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
        };
      },
      67990: function (e) {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      23279: function (e, t, n) {
        var r = n(13218),
          i = n(7771),
          a = n(14841),
          s = Math.max,
          o = Math.min;
        e.exports = function (e, t, n) {
          var l,
            c,
            u,
            d,
            p,
            f,
            m = 0,
            x = !1,
            h = !1,
            v = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          function b(t) {
            var n = l,
              r = c;
            return (l = c = void 0), (m = t), (d = e.apply(r, n));
          }
          function w(e) {
            var n = e - f,
              r = e - m;
            return void 0 === f || n >= t || n < 0 || (h && r >= u);
          }
          function _() {
            var e,
              n,
              r,
              a = i();
            if (w(a)) return g(a);
            p = setTimeout(
              _,
              ((e = a - f), (n = a - m), (r = t - e), h ? o(r, u - n) : r)
            );
          }
          function g(e) {
            return ((p = void 0), v && l) ? b(e) : ((l = c = void 0), d);
          }
          function j() {
            var e,
              n = i(),
              r = w(n);
            if (((l = arguments), (c = this), (f = n), r)) {
              if (void 0 === p)
                return (m = e = f), (p = setTimeout(_, t)), x ? b(e) : d;
              if (h) return clearTimeout(p), (p = setTimeout(_, t)), b(f);
            }
            return void 0 === p && (p = setTimeout(_, t)), d;
          }
          return (
            (t = a(t) || 0),
            r(n) &&
              ((x = !!n.leading),
              (u = (h = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : u),
              (v = "trailing" in n ? !!n.trailing : v)),
            (j.cancel = function () {
              void 0 !== p && clearTimeout(p),
                (m = 0),
                (l = f = c = p = void 0);
            }),
            (j.flush = function () {
              return void 0 === p ? d : g(i());
            }),
            j
          );
        };
      },
      7771: function (e, t, n) {
        var r = n(55639);
        e.exports = function () {
          return r.Date.now();
        };
      },
      14841: function (e, t, n) {
        var r = n(27561),
          i = n(13218),
          a = n(33448),
          s = 0 / 0,
          o = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          u = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = r(e);
          var n = l.test(e);
          return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e;
        };
      },
      52431: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return v;
          },
        });
        var r,
          i = n(85893),
          a = n(73935),
          s = n(67294);
        function o() {
          return (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
                }
                return e;
              }).apply(null, arguments);
        }
        var l = function (e) {
            return s.createElement(
              "svg",
              o(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              r ||
                (r = s.createElement("path", {
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.667 6.667 8 9.334M5.336 6.667l2.667 2.667",
                }))
            );
          },
          c = n(24514),
          u = n(3575),
          d = n.n(u),
          p = n(34281),
          f = n(76035),
          m = n(65440),
          x = n(93967),
          h = n.n(x),
          v = (e) => {
            var t;
            let {
                onChange: n,
                options: r,
                disabled: s,
                label: o,
                width: u = 0,
                id: x,
                value: v,
                size: b = "md",
                iconStart: w,
                iconEnd: _,
                className: g,
                type: j,
                hasDropdown: y = !0,
                isLoading: C = !1,
                inputClassName: N,
                labelClassName: M,
              } = e,
              {
                handleDropdownClick: k,
                isDropdownOpen: E,
                containerRef: T,
                optionsRef: D,
                optionsPosition: P,
                mounted: Z,
              } = (0, f.x)();
            return (0, i.jsxs)("div", {
              className: ""
                .concat(d().container, " ")
                .concat(g || "", " ")
                .concat(j ? d()[j] : ""),
              ref: T,
              children: [
                o &&
                  (0, i.jsx)("label", {
                    htmlFor: x,
                    className: h()(d().label, M),
                    children: o,
                  }),
                (0, i.jsxs)("div", {
                  style: u > 0 ? { minWidth: u + "px" } : {},
                  className: ""
                    .concat(d().dropdownContainer, " ")
                    .concat(s ? d().disabled : ""),
                  onClick: () => !C && k(),
                  role: "button",
                  children: [
                    (0, i.jsxs)("div", {
                      className: h()(
                        d().input,
                        { [d().clickedDropdown]: E },
                        N
                      ),
                      children: [
                        (0, i.jsxs)(c.Z, {
                          direction: "dropdown",
                          gap: "gap-4",
                          children: [
                            w && w,
                            C
                              ? (0, i.jsx)(m.Z, {})
                              : (0, i.jsx)("span", {
                                  className:
                                    "sm" === b ? d().textSmall : d().textMedium,
                                  children:
                                    null !==
                                      (t = null == v ? void 0 : v.name) &&
                                    void 0 !== t
                                      ? t
                                      : (0, i.jsx)("span", {
                                          className: d().placeholder,
                                          children: "-",
                                        }),
                                }),
                          ],
                        }),
                        y &&
                          (0, i.jsxs)("div", {
                            className: d().iconEnd,
                            children: [
                              _ && _,
                              (0, i.jsx)("div", {
                                className: ""
                                  .concat(d().icon, " ")
                                  .concat(E ? d().isActive : ""),
                                children: (0, i.jsx)(l, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                    Z &&
                      document.querySelector("#portal") &&
                      (0, a.createPortal)(
                        (0, i.jsx)(p.m, {
                          optionsRef: D,
                          isDropdownOpen: E,
                          optionsPosition: P,
                          options: r,
                          handleOptionClick: (e) => {
                            n(e.value, e);
                          },
                          selectedOption: v,
                          size: b,
                        }),
                        document.querySelector("#portal")
                      ),
                  ],
                }),
              ],
            });
          };
      },
      34281: function (e, t, n) {
        "use strict";
        n.d(t, {
          m: function () {
            return s;
          },
        });
        var r = n(85893),
          i = n(3575),
          a = n.n(i);
        let s = (e) => {
          let {
            optionsRef: t,
            isDropdownOpen: n,
            optionsPosition: i,
            options: s,
            handleOptionClick: o,
            selectedOption: l,
            size: c,
          } = e;
          return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)("ul", {
              className: ""
                .concat(a().options, " ")
                .concat(n ? "" : a().isHidden),
              style: {
                width: "".concat(i.width, "px"),
                left: "".concat(i.left, "px"),
                top: "".concat(i.top, "px"),
              },
              children:
                null == s
                  ? void 0
                  : s.map((e) =>
                      (0, r.jsx)(
                        "li",
                        {
                          onClick: () => o(e),
                          className: ""
                            .concat(
                              (null == l ? void 0 : l.value) == e.value
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
      76035: function (e, t, n) {
        "use strict";
        n.d(t, {
          x: function () {
            return a;
          },
        });
        var r = n(67294),
          i = n(16795);
        let a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            [t, n] = (0, r.useState)(e),
            a = (0, r.useRef)(null),
            s = (0, r.useRef)(null),
            [o, l] = (0, r.useState)({ width: 0, top: 0, left: 0 }),
            [c, u] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              let e = (e) => {
                a.current &&
                  !a.current.contains(e.target) &&
                  s.current &&
                  !s.current.contains(e.target) &&
                  n(!1);
              };
              return (
                u(!0),
                document.addEventListener("click", e, !0),
                () => document.removeEventListener("click", e, !0)
              );
            }, []),
            (0, i.M)(() => t && n(!1)),
            {
              handleDropdownClick: () => {
                var e, r, i, s, o;
                let c =
                  null === (e = a.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect();
                l({
                  width:
                    null !== (r = null == c ? void 0 : c.width) && void 0 !== r
                      ? r
                      : 100,
                  left:
                    null !== (i = null == c ? void 0 : c.x) && void 0 !== i
                      ? i
                      : 0,
                  top:
                    (null !== (s = null == c ? void 0 : c.y) && void 0 !== s
                      ? s
                      : 0) +
                    (null !== (o = null == c ? void 0 : c.height) &&
                    void 0 !== o
                      ? o
                      : 0) +
                    document.documentElement.scrollTop +
                    1,
                }),
                  n(!t);
              },
              isDropdownOpen: t,
              setIsDropdownOpen: n,
              containerRef: a,
              optionsRef: s,
              optionsPosition: o,
              setOptionsPosition: l,
              mounted: c,
            }
          );
        };
      },
      58224: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return C;
          },
        });
        var r = n(85893),
          i = n(15922),
          a = n(43417),
          s = n(32010),
          o = n(59731),
          l = n(30202),
          c = n(67294),
          u = n(81234),
          d = n(93967),
          p = n.n(d),
          f = n(18776),
          m = n(23279),
          x = n.n(m),
          h = n(67930),
          v = (e) => {
            let { onRefreshPrices: t } = e,
              [n, i] = (0, c.useState)(!1),
              [a, d] = (0, c.useState)(void 0),
              m = (0, l.NL)(),
              { contractsWithReferencePrices: v, currentExpiryDate: b } = (0,
              o.qr)(
                (0, s.N)((e) => ({
                  contractsWithReferencePrices: e.contractsWithReferencePrices,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              w = (0, c.useMemo)(() => [h.nA, v, b], [v, b]),
              _ = (0, c.useCallback)(() => {
                let e = m.getQueryState(w);
                if (
                  !(null == e ? void 0 : e.dataUpdatedAt) &&
                  !(null == e ? void 0 : e.error)
                ) {
                  g();
                  return;
                }
                d(null == e ? void 0 : e.dataUpdatedAt);
              }, [m, w]),
              g = x()(_, 500);
            return ((0, c.useEffect)(() => {
              _();
            }, [_]),
            t)
              ? (0, r.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-items-end",
                  children: [
                    (0, r.jsxs)("button", {
                      onClick: () => {
                        i(!0),
                          null == t || t(),
                          setTimeout(() => {
                            i(!1), _();
                          }, 1e3);
                      },
                      className:
                        "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                      children: [
                        (0, r.jsx)(u.Z, {
                          className: p()({ "tw-animate-spin": n }),
                        }),
                        (0, r.jsx)("span", {
                          className: "tw-text-xs tw-text-white",
                          children: "Refresh prices",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("p", {
                      className: "tw-mt-2 tw-text-xxs",
                      children: [
                        "Last Update: ",
                        a && (0, f.Z)(new Date(a), "dd MMM - HH:mm:ss"),
                      ],
                    }),
                  ],
                })
              : null;
          },
          b = n(41664),
          w = n.n(b);
        let _ = (e) => {
          let { breadcrumbs: t, className: n } = e;
          return t.length
            ? (0, r.jsx)("div", {
                className: n,
                children: t.map((e, n) =>
                  (0, r.jsxs)(
                    "span",
                    {
                      children: [
                        (0, r.jsx)(w(), {
                          href: e.path,
                          className:
                            "tw-text-xs tw-font-bold hover:tw-underline",
                          children: e.label,
                        }),
                        n < t.length - 1 && " / ",
                      ],
                    },
                    e.path
                  )
                ),
              })
            : (0, r.jsx)(r.Fragment, {});
        };
        var g = n(56267),
          j = n(25978),
          y = n.n(j),
          C = (e) => {
            let {
              breadcrumbs: t = [],
              title: n,
              onExpiryChange: s,
              onRefreshPrices: o,
            } = e;
            return "phone" === (0, i.F)()
              ? (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-mb-5",
                      children: (0, r.jsx)("h1", {
                        className: y().title,
                        children: n,
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-justify-between",
                      children: [
                        (0, r.jsx)(g.Z, {}),
                        (0, r.jsx)(v, { onRefreshPrices: o }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-space-between tw-mb-3 tw-flex",
                      children: (0, r.jsx)(a.F, { hideHours: !0 }),
                    }),
                    (0, r.jsx)(_, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                })
              : (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-row tw-justify-between tw-gap-4",
                      children: [
                        (0, r.jsx)("div", {
                          className: "tw-flex tw-items-center",
                          children: (0, r.jsx)(a.F, {
                            hideHours: !0,
                            onExpiryChange: s,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-justify-end tw-gap-3",
                          children: [
                            (0, r.jsx)(g.Z, {}),
                            (0, r.jsx)(v, { onRefreshPrices: o }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(_, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                });
          };
      },
      55975: function (e, t, n) {
        "use strict";
        var r = n(85893),
          i = n(39332),
          a = n(67294),
          s = n(80362),
          o = n(37422),
          l = n(92400),
          c = n(15741),
          u = n(52431),
          d = n(67253),
          p = n(3298),
          f = n(93967),
          m = n.n(f),
          x = n(7712),
          h = n.n(x);
        t.Z = (e) => {
          let {
              tabs: t,
              className: n = "",
              activeTab: f,
              onChange: x,
              responsive: v = !0,
            } = e,
            b = (0, i.useRouter)(),
            w = (0, a.useCallback)(
              (e) => {
                e.forEach((e) => {
                  setTimeout(() => {
                    e.path && b.prefetch(e.path);
                  }, 200);
                });
              },
              [b]
            );
          (0, a.useEffect)(() => {
            w(t);
          }, [t, w]);
          let _ = (0, s.Z)(p.oh),
            { currentStep: g } = (0, a.useContext)(c.OnboardingContext),
            j = (e) => (e === f ? h().isActive : ""),
            y = t.map((e) => ({ name: e.label, value: e.id })),
            C = y.find((e) => e.value === f),
            N = (e) => {
              let n = t.find((t) => t.id === e);
              n && (null == x || x(n.id), n.path && b.push(n.path));
            };
          return t && 0 !== t.length
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "tw-mb-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-6 max-sm:tw-flex-wrap",
                    children: [
                      v && _
                        ? (0, r.jsx)(u.Z, {
                            options: y,
                            value: C,
                            width: 190,
                            onChange: (e) => N(e),
                            type: "tablet",
                          })
                        : (0, r.jsx)(l.Z, {
                            isOpen:
                              g === d.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                              !!t.find((e) => "fundLockHistory" === e.id),
                            align: "start",
                            offset: 360,
                            side: "bottom",
                            children: (0, r.jsx)("div", {
                              className: m()(h().buttons, "!tw-my-0", n),
                              children: t.map((e) =>
                                (0, r.jsx)(
                                  o.Z,
                                  {
                                    onClick: (t) => {
                                      t.stopPropagation(),
                                        !e.disabled &&
                                          (null == x || x(e.id),
                                          e.path && b.push(e.path));
                                    },
                                    className: ""
                                      .concat(j(e.id), " ")
                                      .concat(
                                        e.disabled ? h().disableText : ""
                                      ),
                                    role: "tab",
                                    "aria-selected": e.id === f,
                                    "aria-controls": "tab-panel-".concat(e.id),
                                    title: "Click to select tab",
                                    children: e.label,
                                  },
                                  e.id
                                )
                              ),
                            }),
                          }),
                      ("positions" === f || "tradeHistory" === f) &&
                        (0, r.jsx)("div", { id: "tabsPortal" }),
                    ],
                  }),
                  t.map(
                    (e) =>
                      e.id === f &&
                      (0, r.jsx)(
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
            : (0, r.jsx)("div", {
                className: h().tabs,
                children: "No tabs available.",
              });
        };
      },
      80362: function (e, t, n) {
        "use strict";
        var r = n(67294);
        t.Z = (e) => {
          let [t, n] = (0, r.useState)(!1),
            i = (0, r.useCallback)((e) => {
              e.matches ? n(!0) : n(!1);
            }, []);
          return (
            (0, r.useEffect)(() => {
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addEventListener("change", i),
                t.matches && n(!0),
                () => t.removeEventListener("change", i)
              );
            }, [e, i]),
            t
          );
        };
      },
      13880: function (e, t, n) {
        "use strict";
        var r = n(85893),
          i = n(2920),
          a = n.n(i);
        t.Z = (e) => {
          let { children: t, margin: n = "m-0", className: i = "" } = e;
          return (0, r.jsx)("div", {
            className: ""
              .concat(a().panel, " ")
              .concat(n && n, " ")
              .concat(i),
            children: t,
          });
        };
      },
      36305: function (e, t, n) {
        "use strict";
        var r = n(85893),
          i = n(39332),
          a = n(40119),
          s = n(27888),
          o = n(55975),
          l = n(92505),
          c = n(85292),
          u = n(58224),
          d = n(57446),
          p = n(13001),
          f = n.n(p);
        t.Z = (e) => {
          var t;
          let { children: n } = e,
            { refetch: p } = (0, a.h)(),
            m = (0, i.usePathname)().split("/").pop() || "options",
            x =
              (null ===
                (t = d.L.find((e) => e.path === "/pricing/".concat(m))) ||
              void 0 === t
                ? void 0
                : t.id) || "Options";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(s.Z, {
                children: (0, r.jsx)(c.Z, {
                  children: (0, r.jsxs)("div", {
                    className: f().wrapper,
                    children: [
                      (0, r.jsx)(u.Z, { title: "Pricing", onRefreshPrices: p }),
                      (0, r.jsx)("div", {
                        className:
                          "tw-mx-auto tw-mb-6 tw-mt-2 tw-flex tw-w-fit tw-flex-wrap tw-items-center tw-gap-6 tw-font-semibold",
                        children: (0, r.jsx)(o.Z, { activeTab: x, tabs: d.L }),
                      }),
                      n,
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      },
      74458: function (e, t, n) {
        "use strict";
        n.d(t, {
          m: function () {
            return l;
          },
        });
        var r = n(85893),
          i = n(93967),
          a = n.n(i),
          s = n(85292),
          o = n(65440);
        let l = (e) => {
          let { className: t } = e;
          return (0, r.jsx)(s.Z, {
            size: "loader",
            className: a()("tw-min-h-[600px]", t),
            children: (0, r.jsx)(o.Z, { type: "lg" }),
          });
        };
        t.Z = (e) => {
          let { children: t, isPending: n } = e;
          return n ? (0, r.jsx)(l, {}) : t;
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
      13001: function (e) {
        e.exports = {
          wrapper: "pricing_wrapper__tF_qJ",
          tableContainer: "pricing_tableContainer__nOi4_",
          offline: "pricing_offline__bvE1b",
          tablesWrapper: "pricing_tablesWrapper__qdMFW",
          optionsWrapper: "pricing_optionsWrapper__ULyFn",
          offlineContainer: "pricing_offlineContainer__Y6v34",
          connectButton: "pricing_connectButton__kTuFY",
        };
      },
      9008: function (e, t, n) {
        e.exports = n(23867);
      },
      44718: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return a;
          },
          h: function () {
            return i;
          },
        });
        var r = n(67294);
        let i = (0, r.createContext)({});
        function a() {
          return (0, r.useContext)(i);
        }
      },
      54306: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return l;
          },
          z: function () {
            return o;
          },
        });
        var r = n(67294);
        let i = [],
          a = {
            autoConnect: !1,
            connecting: !1,
            connected: !1,
            disconnecting: !1,
            select() {
              s("call", "select");
            },
            connect: () => Promise.reject(s("call", "connect")),
            disconnect: () => Promise.reject(s("call", "disconnect")),
            sendTransaction: () => Promise.reject(s("call", "sendTransaction")),
            signTransaction: () => Promise.reject(s("call", "signTransaction")),
            signAllTransactions: () =>
              Promise.reject(s("call", "signAllTransactions")),
            signMessage: () => Promise.reject(s("call", "signMessage")),
            signIn: () => Promise.reject(s("call", "signIn")),
          };
        function s(e, t) {
          let n = Error(
            `You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
          );
          return console.error(n), n;
        }
        Object.defineProperty(a, "wallets", {
          get: () => (s("read", "wallets"), i),
        }),
          Object.defineProperty(a, "wallet", {
            get: () => (s("read", "wallet"), null),
          }),
          Object.defineProperty(a, "publicKey", {
            get: () => (s("read", "publicKey"), null),
          });
        let o = (0, r.createContext)(a);
        function l() {
          return (0, r.useContext)(o);
        }
      },
      96752: function (e, t, n) {
        "use strict";
        n.d(t, {
          P: function () {
            return d;
          },
        });
        var r = n(67294),
          i = n(38213),
          a = n(83619),
          s = n(22944),
          o = n(18419),
          l = n(65448),
          c = n(14872);
        let u = (0, a.yV)(function (e, t) {
            var n;
            let i = (0, c.B)(),
              { disabled: u = i || !1, autoFocus: d = !1, ...p } = e,
              { isFocusVisible: f, focusProps: m } = (0, s.F)({ autoFocus: d }),
              { isHovered: x, hoverProps: h } = (0, o.X)({ isDisabled: u }),
              { pressed: v, pressProps: b } = (0, l.x)({ disabled: u }),
              w = (0, a.dG)(
                {
                  ref: t,
                  type: null != (n = p.type) ? n : "button",
                  disabled: u || void 0,
                  autoFocus: d,
                },
                m,
                h,
                b
              ),
              _ = (0, r.useMemo)(
                () => ({
                  disabled: u,
                  hover: x,
                  focus: f,
                  active: v,
                  autofocus: d,
                }),
                [u, x, f, v, d]
              );
            return (0, a.L6)()({
              ourProps: w,
              theirProps: p,
              slot: _,
              defaultTag: "button",
              name: "Button",
            });
          }),
          d = (0, a.yV)(function (e, t) {
            let n = (0, i.$)();
            return r.createElement(u, {
              ref: t,
              ...(0, a.dG)({ onClick: n }, e),
            });
          });
      },
      14872: function (e, t, n) {
        "use strict";
        n.d(t, {
          B: function () {
            return a;
          },
        });
        var r = n(67294);
        let i = (0, r.createContext)(void 0);
        function a() {
          return (0, r.useContext)(i);
        }
      },
      49632: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let i = r.forwardRef(function (e, t) {
          let { title: n, titleId: i, ...a } = e;
          return r.createElement(
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
                "aria-labelledby": i,
              },
              a
            ),
            n ? r.createElement("title", { id: i }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            })
          );
        });
        t.Z = i;
      },
      43210: function (e, t, n) {
        "use strict";
        n.d(t, {
          y: function () {
            return r;
          },
        });
        let r = (0, n(86164).a)({
          id: 42161,
          name: "Arbitrum One",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://arbiscan.io",
              apiUrl: "https://api.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7654707,
            },
          },
        });
      },
      86900: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        let r = (0, n(86164).a)({
          id: 421614,
          name: "Arbitrum Sepolia",
          nativeCurrency: {
            name: "Arbitrum Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://sepolia.arbiscan.io",
              apiUrl: "https://api-sepolia.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 81930,
            },
          },
          testnet: !0,
        });
      },
      57393: function (e, t, n) {
        "use strict";
        n.d(t, {
          v: function () {
            return r;
          },
        });
        let r = (0, n(86164).a)({
          id: 80001,
          name: "Polygon Mumbai",
          nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.ankr.com/polygon_mumbai"] },
          },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://mumbai.polygonscan.com",
              apiUrl: "https://api-testnet.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 25770160,
            },
          },
          testnet: !0,
        });
      },
    },
  ]);
