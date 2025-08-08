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
      (e._sentryDebugIds[t] = "5afed926-abe0-4ca6-8551-6bb3e5bee79e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5afed926-abe0-4ca6-8551-6bb3e5bee79e"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8879, 6656],
    {
      5673: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/staking",
          function () {
            return n(11779);
          },
        ]);
      },
      52431: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var a,
          i = n(85893),
          r = n(73935),
          s = n(67294);
        function o() {
          return (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
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
              a ||
                (a = s.createElement("path", {
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.667 6.667 8 9.334M5.336 6.667l2.667 2.667",
                }))
            );
          },
          c = n(24514),
          d = n(3575),
          u = n.n(d),
          w = n(34281),
          h = n(76035),
          m = n(65440),
          x = n(93967),
          p = n.n(x),
          f = (e) => {
            var t;
            let {
                onChange: n,
                options: a,
                disabled: s,
                label: o,
                width: d = 0,
                id: x,
                value: f,
                size: v = "md",
                iconStart: _,
                iconEnd: g,
                className: j,
                type: N,
                hasDropdown: b = !0,
                isLoading: y = !1,
                inputClassName: k,
                labelClassName: C,
              } = e,
              {
                handleDropdownClick: E,
                isDropdownOpen: S,
                containerRef: A,
                optionsRef: I,
                optionsPosition: T,
                mounted: L,
              } = (0, h.x)();
            return (0, i.jsxs)("div", {
              className: ""
                .concat(u().container, " ")
                .concat(j || "", " ")
                .concat(N ? u()[N] : ""),
              ref: A,
              children: [
                o &&
                  (0, i.jsx)("label", {
                    htmlFor: x,
                    className: p()(u().label, C),
                    children: o,
                  }),
                (0, i.jsxs)("div", {
                  style: d > 0 ? { minWidth: d + "px" } : {},
                  className: ""
                    .concat(u().dropdownContainer, " ")
                    .concat(s ? u().disabled : ""),
                  onClick: () => !y && E(),
                  role: "button",
                  children: [
                    (0, i.jsxs)("div", {
                      className: p()(
                        u().input,
                        { [u().clickedDropdown]: S },
                        k
                      ),
                      children: [
                        (0, i.jsxs)(c.Z, {
                          direction: "dropdown",
                          gap: "gap-4",
                          children: [
                            _ && _,
                            y
                              ? (0, i.jsx)(m.Z, {})
                              : (0, i.jsx)("span", {
                                  className:
                                    "sm" === v ? u().textSmall : u().textMedium,
                                  children:
                                    null !==
                                      (t = null == f ? void 0 : f.name) &&
                                    void 0 !== t
                                      ? t
                                      : (0, i.jsx)("span", {
                                          className: u().placeholder,
                                          children: "-",
                                        }),
                                }),
                          ],
                        }),
                        b &&
                          (0, i.jsxs)("div", {
                            className: u().iconEnd,
                            children: [
                              g && g,
                              (0, i.jsx)("div", {
                                className: ""
                                  .concat(u().icon, " ")
                                  .concat(S ? u().isActive : ""),
                                children: (0, i.jsx)(l, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                    L &&
                      document.querySelector("#portal") &&
                      (0, r.createPortal)(
                        (0, i.jsx)(w.m, {
                          optionsRef: I,
                          isDropdownOpen: S,
                          optionsPosition: T,
                          options: a,
                          handleOptionClick: (e) => {
                            n(e.value, e);
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
      34281: function (e, t, n) {
        "use strict";
        n.d(t, {
          m: function () {
            return s;
          },
        });
        var a = n(85893),
          i = n(3575),
          r = n.n(i);
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
          return (0, a.jsx)("div", {
            ref: t,
            children: (0, a.jsx)("ul", {
              className: ""
                .concat(r().options, " ")
                .concat(n ? "" : r().isHidden),
              style: {
                width: "".concat(i.width, "px"),
                left: "".concat(i.left, "px"),
                top: "".concat(i.top, "px"),
              },
              children:
                null == s
                  ? void 0
                  : s.map((e) =>
                      (0, a.jsx)(
                        "li",
                        {
                          onClick: () => o(e),
                          className: ""
                            .concat(
                              (null == l ? void 0 : l.value) == e.value
                                ? r().selected
                                : "",
                              " "
                            )
                            .concat(
                              "sm" === c ? r().textSmall : r().textMedium
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
            return r;
          },
        });
        var a = n(67294),
          i = n(16795);
        let r = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            [t, n] = (0, a.useState)(e),
            r = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            [o, l] = (0, a.useState)({ width: 0, top: 0, left: 0 }),
            [c, d] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              let e = (e) => {
                r.current &&
                  !r.current.contains(e.target) &&
                  s.current &&
                  !s.current.contains(e.target) &&
                  n(!1);
              };
              return (
                d(!0),
                document.addEventListener("click", e, !0),
                () => document.removeEventListener("click", e, !0)
              );
            }, []),
            (0, i.M)(() => t && n(!1)),
            {
              handleDropdownClick: () => {
                var e, a, i, s, o;
                let c =
                  null === (e = r.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect();
                l({
                  width:
                    null !== (a = null == c ? void 0 : c.width) && void 0 !== a
                      ? a
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
              containerRef: r,
              optionsRef: s,
              optionsPosition: o,
              setOptionsPosition: l,
              mounted: c,
            }
          );
        };
      },
      21050: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: n = "" } = e;
          return (0, a.jsxs)("svg", {
            className: n,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M16 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M8 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        };
      },
      57345: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = () =>
          (0, a.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "35333E",
              }),
              (0, a.jsx)("path", {
                d: "M10.6667 6.66699L8 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M5.33301 6.66699L7.99967 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
      },
      27531: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, a.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      45323: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return j;
          },
        });
        var a = n(85893),
          i = n(67294);
        let r = (e) => {
          e.currentTarget.blur(),
            e.stopPropagation(),
            setTimeout(() => {
              var t;
              null == e ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.focus();
            }, 0);
        };
        var s = () =>
            (0, a.jsxs)("svg", {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsxs)("g", {
                  clipPath: "url(#clip0_2198_156721)",
                  children: [
                    (0, a.jsx)("path", {
                      d: "M6 4.5V6.5",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)("path", {
                      d: "M5.18125 1.79547L1.12825 8.56247C1.0447 8.70716 1.00048 8.87121 1 9.03829C0.999526 9.20538 1.0428 9.36967 1.12552 9.51484C1.20824 9.66001 1.32753 9.78099 1.47152 9.86575C1.61551 9.95051 1.77918 9.9961 1.94625 9.99797H10.0532C10.2202 9.99605 10.3838 9.95045 10.5278 9.86572C10.6717 9.78098 10.7909 9.66006 10.8736 9.51497C10.9563 9.36987 10.9996 9.20566 10.9992 9.03865C10.9988 8.87164 10.9547 8.70765 10.8712 8.56297L6.81825 1.79497C6.73298 1.65422 6.61285 1.53784 6.46947 1.45707C6.3261 1.3763 6.16431 1.33386 5.99975 1.33386C5.83518 1.33386 5.6734 1.3763 5.53002 1.45707C5.38665 1.53784 5.26652 1.65422 5.18125 1.79497V1.79547Z",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)("path", {
                      d: "M6 8H6.005",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsx)("clipPath", {
                    id: "clip0_2198_156721",
                    children: (0, a.jsx)("rect", {
                      width: "12",
                      height: "12",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          o = n(4345),
          l = n.n(o),
          c = () =>
            (0, a.jsx)("svg", {
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M5.553 8.68196L4.84589 9.38907C3.86958 10.3654 2.28667 10.3654 1.31036 9.38907C0.334047 8.41276 0.334047 6.82985 1.31036 5.85354L2.01746 5.14643M8.38143 5.85354L9.08853 5.14643C10.0648 4.17012 10.0648 2.58721 9.08853 1.6109C8.11222 0.634584 6.52931 0.634584 5.553 1.6109L4.84589 2.318M3.44945 7.24997L6.94945 3.74997",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          d = n(37422),
          u = () =>
            (0, a.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M8.63316 12.4044L7.69036 13.3472C6.38861 14.649 4.27806 14.649 2.97631 13.3472C1.67456 12.0455 1.67456 9.93491 2.97631 8.63316L3.91912 7.69036M12.4044 8.63316L13.3472 7.69036C14.649 6.38861 14.649 4.27806 13.3472 2.97631C12.0455 1.67456 9.93491 1.67456 8.63316 2.97631L7.69036 3.91912",
                stroke: "#9D9DAA",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          w = () =>
            (0, a.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M8 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M16 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          h = n(21050),
          m = n(24514),
          x = n(57345),
          p = n(16795),
          f = n(65440),
          v = n(93967),
          _ = n.n(v),
          g = n(45338),
          j = (e) => {
            let {
                increment: t,
                onChange: n,
                value: o,
                icon: v,
                leftIcon: j,
                disabled: N,
                placeholder: b = "-",
                label: y,
                width: k = 0,
                type: C = "number",
                id: E,
                hasError: S = !1,
                errorMessage: A,
                className: I,
                containerClassName: T,
                isLinked: L,
                canLink: M,
                onLink: D,
                onBlur: F,
                onKeyDown: B,
                footerText: O,
                hasDropdown: R,
                dropDownOptions: K,
                onDropdownChange: W,
                isLoading: Z = !1,
                labelClassName: U,
                min: H,
                max: P,
                ...X
              } = e,
              [z, G] = (0, i.useState)(!1),
              q = (0, i.useRef)(null);
            (0, i.useEffect)(() => {
              let e = (e) => {
                q.current && !q.current.contains(e.target) && G(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, p.M)(() => {
                z && G(!1);
              });
            let V = (e) => {
                G(!1), W && W(e);
              },
              J = (e) => {
                if ("number" !== C || !t) return;
                let n = o ? (0, g.Dx)("".concat(o)) : void 0;
                "UP" === e
                  ? ((void 0 !== n && void 0 !== P && n < P) || void 0 === P) &&
                    t("UP")
                  : "DOWN" === e &&
                    ((void 0 !== n && void 0 !== H && n > H) || void 0 === H) &&
                    t("DOWN");
              };
            return (0, a.jsxs)("div", {
              className: _()(l().input, I, { [l().error]: S }),
              style: k > 0 ? { width: k + "px" } : {},
              children: [
                y &&
                  (0, a.jsx)("label", {
                    htmlFor: E,
                    className: _()(l().label, U),
                    children: y,
                  }),
                (0, a.jsxs)("div", {
                  className: "".concat(l().container, " ").concat(T || ""),
                  style: { width: "100%" },
                  children: [
                    M &&
                      (0, a.jsx)(d.Z, {
                        title: "Click to link",
                        variant: "icon",
                        size: "sm",
                        onClick: () => {
                          D && D(!L);
                        },
                        children: L ? (0, a.jsx)(c, {}) : (0, a.jsx)(u, {}),
                      }),
                    (0, a.jsxs)(m.Z, {
                      direction: "column",
                      classes: "full-width",
                      children: [
                        (0, a.jsxs)(m.Z, {
                          direction: "row-center",
                          children: [
                            j &&
                              (0, a.jsx)("div", {
                                className: "tw-mr-1",
                                children: j,
                              }),
                            Z
                              ? (0, a.jsx)("div", {
                                  className: "flexGrow",
                                  children: (0, a.jsx)(f.Z, {}),
                                })
                              : (0, a.jsx)("input", {
                                  ...X,
                                  id: E,
                                  type: C,
                                  value: o,
                                  placeholder: b,
                                  inputMode:
                                    "number" === C ? "decimal" : void 0,
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if ("number" === C) {
                                      let a = (0, g.Dx)(t);
                                      if (void 0 !== P && a > P) return;
                                      null == n || n(e);
                                    } else null == n || n(e);
                                  },
                                  onWheel: "number" === C ? r : void 0,
                                  disabled: N,
                                  min: "number" === C ? H : void 0,
                                  max: "number" === C ? P : void 0,
                                  step: "any",
                                  onBlur: F,
                                  onKeyDown: B,
                                }),
                            v &&
                              (0, a.jsx)("div", {
                                className: "tw-ml-1",
                                children: v,
                              }),
                            R &&
                              (0, a.jsxs)("div", {
                                onClick: () => {
                                  G(!z);
                                },
                                className: ""
                                  .concat(l().dropdown, " ")
                                  .concat(z ? l().isActive : ""),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "mmt-2",
                                    children: (0, a.jsx)(x.Z, {}),
                                  }),
                                  z &&
                                    (0, a.jsx)("ul", {
                                      className: l().dropdownMenu,
                                      children:
                                        K &&
                                        K.map((e) =>
                                          (0, a.jsxs)(
                                            "li",
                                            {
                                              className: _()(
                                                l().dropdownItem,
                                                "tw-flex",
                                                { [l().active]: o === e.value }
                                              ),
                                              onClick: () => V(e.value),
                                              children: [e.icon, " ", e.label],
                                            },
                                            e.value
                                          )
                                        ),
                                    }),
                                ],
                              }),
                          ],
                        }),
                        O &&
                          (0, a.jsx)("div", {
                            className: l().footer,
                            children: O,
                          }),
                      ],
                    }),
                    t &&
                      (0, a.jsx)("div", {
                        className: l().incrementWrapper,
                        children: (0, a.jsxs)(m.Z, {
                          direction: "column",
                          children: [
                            (0, a.jsx)("div", {
                              className: l().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => J("UP"),
                                variant: "icon",
                                children: (0, a.jsx)(w, {}),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: l().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => J("DOWN"),
                                variant: "icon",
                                children: (0, a.jsx)(h.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                S &&
                  A &&
                  (0, a.jsxs)("div", {
                    className: l().errorMessage,
                    children: [(0, a.jsx)(s, {}), A],
                  }),
              ],
            });
          };
      },
      92505: function (e, t, n) {
        "use strict";
        var a = n(85893),
          i = n(9008),
          r = n.n(i);
        t.Z = () =>
          (0, a.jsxs)(r(), {
            children: [
              (0, a.jsx)("title", {
                children: "Ithaca - Non-Custodial, Composable Option Protocol",
              }),
              (0, a.jsx)("meta", {
                name: "description",
                content:
                  "Ithaca is a decentralized options and collateralized funding protocol offering optimal risk sharing across various states and time, embedding itself in all steps of any risk sharing instrument's lifecycle.",
              }),
              (0, a.jsx)("meta", {
                property: "og:title",
                content: "Ithaca - Empowering Optimal Risk Sharing",
              }),
              (0, a.jsx)("meta", {
                property: "og:description",
                content:
                  "Explore Ithaca's decentralized ecosystem for trading, risk management, and protocol governance. Engage with our cross-chain infrastructure and contribute to the future of digital value representation.",
              }),
              (0, a.jsx)("meta", {
                property: "og:image",
                content: "/ithaca-og-image.png",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:title",
                content:
                  "Ithaca Protocol: Decentralize Your Trading Experience",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:description",
                content:
                  "Join Ithaca, a decentralized trading and risk management ecosystem, utilizing cross-chain solutions for a seamless trading experience. Discover, trade, and manage risk today.",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, a.jsx)("meta", {
                property: "twitter:domain",
                content: "https://app.ithacaprotocol.io/",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:image",
                content: "/ithaca-og-image.png",
              }),
            ],
          });
      },
      46656: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(85893),
          i = n(93967),
          r = n.n(i),
          s = n(67294),
          o = n(43495),
          l = n(51526),
          c = n(73935),
          d = n(37422),
          u = n(65440),
          w = n(27531),
          h = n(3274),
          m = n.n(h);
        let x = {
          hidden: { opacity: 1, scale: 1 },
          visible: {
            y: "0",
            scale: [0.2, 1.1, 1],
            opacity: 1,
            transition: { scale: { type: "tween", duration: 0.5 } },
          },
          exit: { y: "0", opacity: 0 },
        };
        t.default = (e) => {
          let {
            children: t,
            title: n,
            onCloseModal: i,
            onSubmitOrder: h,
            isLoading: p,
            isOpen: f,
            hideFooter: v,
            className: _,
            headerContainerClassName: g = "",
            showCloseIcon: j = !0,
          } = e;
          (0, s.useEffect)(() => {
            f
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && i();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [f, i]);
          let N = (0, a.jsx)(o.E.div, {
            className: r()(m().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => i(),
            children: (0, a.jsxs)(o.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: r()(
                m().modal,
                _,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: x,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, a.jsxs)("div", {
                  className: r()(m().modalHeader, "tw-px-6 tw-py-4", g),
                  children: [
                    (0, a.jsx)("h4", {
                      className: r()(
                        m().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: n,
                    }),
                    j
                      ? (0, a.jsx)(d.Z, {
                          onClick: i,
                          className: m().buttonClose,
                          title: "Click to close modal",
                          children: (0, a.jsx)(w.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: r()(
                    m().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !v && h
                      ? (0, a.jsx)("div", {
                          className: m().modalFooter,
                          children: (0, a.jsx)(d.Z, {
                            className: r()(m().confirmButton, {
                              [m().buttonLoading]: p,
                            }),
                            onClick: h,
                            title: "Click to confirm",
                            children: p ? (0, a.jsx)(u.Z, {}) : "Confirm",
                          }),
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
          return f && document.body
            ? c.createPortal(
                (0, a.jsx)(l.M, { initial: !0, mode: "wait", children: N }),
                document.body
              )
            : null;
        };
      },
      33343: function (e, t, n) {
        "use strict";
        n.d(t, {
          $D: function () {
            return g;
          },
          AM: function () {
            return f;
          },
          By: function () {
            return m;
          },
          EK: function () {
            return i;
          },
          Hn: function () {
            return x;
          },
          aw: function () {
            return j;
          },
          c2: function () {
            return u;
          },
          e2: function () {
            return _;
          },
          fH: function () {
            return v;
          },
          rG: function () {
            return N;
          },
          sT: function () {
            return p;
          },
        });
        var a,
          i,
          r = n(82834),
          s = n(70757),
          o = n(66403),
          l = n(24543),
          c = n(35194),
          d = n(54704);
        ((a = i || (i = {})).NO_AMOUNT = "NO_AMOUNT"),
          (a.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (a.WRONG_NETWORK = "WRONG_NETWORK"),
          (a.INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE"),
          (a.READY_TO_STAKE = "READY_TO_STAKE"),
          (a.STAKING_SUCCESSFUL = "STAKING_SUCCESSFUL");
        let u = 2592e3,
          w = { 6: 0.4, 9: 1.1, 12: 1.2 },
          h = { 6: "~6", 9: "~10", 12: "~15" },
          m = {
            ETH: (0, s.XX)("ETH", "tw-size-4"),
            BSC: (0, s.XX)("BSC", "tw-size-4"),
            ITHC: (0, s.XX)("ITHC", "tw-size-4 -tw-mb-1"),
          };
        o.R.id.toString(),
          (0, s.XX)("ETH", "tw-size-5 tw-shrink-0"),
          l.e.id.toString(),
          (0, s.XX)("BSC");
        let x = (r.BB ? [o.R, l.e] : [c.F, d.d]).map((e) => ({
            name: e.name,
            value: "".concat(e.id),
            nativeCurrency: e.nativeCurrency,
          })),
          p = (() => {
            let e = r.BB ? o.R : c.F;
            return {
              name: e.name,
              value: "".concat(e.id),
              nativeCurrency: e.nativeCurrency,
            };
          })(),
          f = (e) => w[e],
          v = (e) => h[e],
          _ = (e) => {
            switch (e) {
              case "Sepolia":
              case "Ethereum":
                return "ETH";
              case "Binance Smart Chain":
              case "Binance Smart Chain Testnet":
                return "BSC";
              default:
                return "";
            }
          },
          g = (e) => {
            switch (e) {
              case "Sepolia":
                return "Sepolia";
              case "Ethereum":
                return "Ethereum";
              case "Binance Smart Chain":
                return "BSC";
              case "Binance Smart Chain Testnet":
                return "BSC Testnet";
              default:
                return;
            }
          },
          j = () => ["6 months", "9 months", "12 months"],
          N = (e, t, n) => (
            n
              ? e.sort((e, n) => Number(e[t]) - Number(n[t]))
              : e.sort((e, n) => Number(n[t]) - Number(e[t])),
            e
          );
      },
      16795: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return i;
          },
        });
        var a = n(67294);
        let i = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, a.useEffect)(
            () => (
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("keydown", t);
              }
            ),
            [e]
          );
        };
      },
      85292: function (e, t, n) {
        "use strict";
        var a = n(85893),
          i = n(93967),
          r = n.n(i),
          s = n(25448),
          o = n.n(s);
        t.Z = (e) => {
          let { size: t = "xl", children: n, className: i } = e;
          return (0, a.jsx)("div", {
            className: r()(o().container, o()[t], i),
            children: n,
          });
        };
      },
      24514: function (e, t, n) {
        "use strict";
        var a = n(85893),
          i = n(2262),
          r = n.n(i),
          s = n(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: n = "m-0",
              gap: i = "gap-0",
              padding: o = "p-0",
              children: l,
              classes: c,
            } = e,
            d = (0, s.I)();
          return (0, a.jsx)("div", {
            className: ""
              .concat("flex--".concat(d), " ")
              .concat(r().flex, " ")
              .concat(r()["flex--".concat(t)], " ")
              .concat(n, " ")
              .concat(i, " ")
              .concat(o, " ")
              .concat(c),
            children: l,
          });
        };
      },
      27888: function (e, t, n) {
        "use strict";
        var a = n(85893),
          i = n(80140),
          r = n.n(i);
        t.Z = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("main", { className: r().Main, children: t }),
          });
        };
      },
      13880: function (e, t, n) {
        "use strict";
        var a = n(85893),
          i = n(2920),
          r = n.n(i);
        t.Z = (e) => {
          let { children: t, margin: n = "m-0", className: i = "" } = e;
          return (0, a.jsx)("div", {
            className: ""
              .concat(r().panel, " ")
              .concat(n && n, " ")
              .concat(i),
            children: t,
          });
        };
      },
      82834: function (e, t, n) {
        "use strict";
        n.d(t, {
          BB: function () {
            return M;
          },
          GV: function () {
            return O;
          },
          gb: function () {
            return K;
          },
        });
        var a = n(15615),
          i = n(94298),
          r = n(68597),
          s = n(82773),
          o = n(40520),
          l = n(50892),
          c = n(39893),
          d = n(38983),
          u = n(30731),
          w = n(98558),
          h = n(33981),
          m = n(52493),
          x = n(26798),
          p = n(35699),
          f = n(21131),
          v = n(41749),
          _ = n(85758),
          g = n(75691),
          j = n(43210),
          N = n(35194),
          b = n(54704),
          y = n(66403),
          k = n(98494),
          C = n(52961),
          E = n(7301),
          S = n(24543),
          A = n(86900),
          I = n(20448),
          T = n(94898);
        let L = "9577531e389c799d54896f39e80d7bb0";
        if (!L) throw Error("Environment variable PROJECT_ID is not set.");
        let M = (0, I.b)().id === j.y.id,
          D = [(0, I.b)(), j.y, N.F, b.d],
          F = [j.y, y.R, k.v, C.y, E.u, S.e],
          B = (e) => {
            let t = (() => {
              switch (e.id) {
                case y.R.id:
                  return "eth-mainnet";
                case j.y.id:
                  return "arb-mainnet";
                case k.v.id:
                  return "opt-mainnet";
                case C.y.id:
                  return "polygon-mainnet";
                case E.u.id:
                  return "base-mainnet";
                case S.e.id:
                  return "bnb-mainnet";
                case A.Z.id:
                  return "arb-sepolia";
                case N.F.id:
                  return "eth-sepolia";
                case b.d.id:
                  return "bnb-testnet";
                default:
                  return "".concat(e.name.toLowerCase(), "-mainnet");
              }
            })();
            return "https://arb.ithacaprotocol.io/api/rpc/".concat(t);
          },
          O = { appName: "Ithaca" },
          R = (0, a.a3)(
            [
              {
                groupName: "Recommended",
                wallets: [
                  s.P,
                  o.D,
                  l.c,
                  c.D,
                  d.b,
                  u.R,
                  w.J,
                  h.u,
                  m.P,
                  x.c,
                  p.h,
                  f.o,
                  v.u,
                  _.p,
                  g.a,
                ],
              },
            ],
            { appName: "Ithaca", projectId: L }
          ),
          K = (0, i._)({
            chains: M ? F : D,
            client(e) {
              let { chain: t } = e;
              return (0, T.e)({ chain: t, transport: (0, r.d)(B(t)) });
            },
            connectors: R,
          });
      },
      20448: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return l;
          },
        });
        var a = n(43210),
          i = n(86900),
          r = n(57393);
        let s = a.y,
          o = {
            localhost: i.Z,
            "app.ithacaprotocol.io": s,
            "sepolia.canary.ithacanoemon.tech": i.Z,
            "testnet.ithacaprotocol.io": i.Z,
            "app.canary.ithacanoemon.tech": i.Z,
            "mumbai.canary.ithacanoemon.tech": r.v,
            "decent-governor-development-phase1.up.railway.app": i.Z,
            "axelar-integration.ithacaprotocol.io": a.y,
          },
          l = (e) => {
            var t;
            return e
              ? {
                  id: 102,
                  name: "Solana",
                  nativeCurrency: { name: "SOL", symbol: "WSOL", decimals: 9 },
                }
              : /^ithaca-interface-git-[a-zA-Z0-9-]+-ithaca-[a-z0-9]+\.vercel\.app$/.test(
                  window.location.hostname
                )
              ? i.Z
              : null !== (t = o[window.location.hostname]) && void 0 !== t
              ? t
              : s;
          };
      },
      64729: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return a;
          },
        }),
          n(82649);
        let a = () => ({
          isSolanaWalletActive: !1,
          leaderBoardAddresses: {
            fundlockArbitrumAddress:
              "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
            wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          },
        });
      },
      81989: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gc: function () {
            return f;
          },
          ho: function () {
            return p;
          },
          Pk: function () {
            return x;
          },
        });
        var a = n(64729),
          i = n(92321),
          r = n(54306),
          s = n(44718),
          o = n(20448),
          l = n(12185),
          c = n(59731),
          d = n(88144),
          u = n(72809);
        let w = (e) => {
            let { address: t, token: n, query: i } = e,
              { connection: r } = (0, s.R)(),
              o = t ? new u.PublicKey(t) : null,
              { leaderBoardAddresses: l } = (0, a.X)();
            return (0, d.a)({
              queryKey: ["solana-balance", t, n],
              queryFn: async () => {
                if (!o || !r) throw Error("Missing publicKey or connection");
                if ("SOL" === n) {
                  let e = await r.getBalance(o);
                  return {
                    decimals: 9,
                    formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === n) {
                  let e = await r.getParsedTokenAccountsByOwner(o, {
                      mint: new u.PublicKey(l.wethArbitrumAddress),
                    }),
                    t = 0;
                  return (
                    e.value.length > 0 &&
                      (t =
                        e.value[0].account.data.parsed.info.tokenAmount
                          .uiAmount || 0),
                    {
                      decimals: 6,
                      formatted: t.toString(),
                      symbol: "USDC",
                      value: BigInt(1e6 * t),
                    }
                  );
                }
                throw Error("Unsupported token: ".concat(n));
              },
              refetchInterval: 1e4,
              enabled: !!o && !!r,
              ...i,
            });
          },
          h = () => {
            let { isConnected: e, address: t } = (0, i.m)();
            return { isConnected: e, address: t };
          },
          m = () => {
            let { connected: e, publicKey: t } = (0, r.O)(),
              { connection: n } = (0, s.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          x = () => {
            let { isSolanaWalletActive: e } = (0, a.X)(),
              t = h(),
              n = m();
            return e ? n : t;
          },
          p = () => {
            let { address: e } = m();
            return {
              SOLData: w({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: w({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          f = () => {
            let { address: e } = h(),
              { systemInfo: t, isAuthenticated: n } = (0, c.qr)(),
              a = { address: e, chainId: (0, o.b)().id };
            return {
              WETHData: (0, l.K)({
                ...a,
                token: t.tokenAddress.WETH,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
              USDCData: (0, l.K)({
                ...a,
                token: t.tokenAddress.USDC,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
            };
          };
      },
      11779: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return Q;
            },
          });
        var a,
          i = n(85893),
          r = n(67294),
          s = n(59731),
          o = n(15615),
          l = n(47236);
        n(30243);
        var c = n(38240),
          d = n(27888),
          u = n(13880),
          w = n(92505),
          h = n(45323),
          m = n(37422),
          x = n(65440),
          p = n(85292),
          f = n(39332),
          v = n(46656);
        function _() {
          return (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var g = function (e) {
            return r.createElement(
              "svg",
              _(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 48,
                  height: 48,
                  fill: "none",
                },
                e
              ),
              a ||
                (a = r.createElement("path", {
                  stroke: "#68F4A0",
                  d: "M44 22.16V24A20 20 0 1 1 32.14 5.72M44 8 24 28.02l-6-6",
                }))
            );
          },
          j = n(70757),
          N = n(33343);
        let b = (e) => {
            let {
                isOpen: t,
                onClose: n,
                summary: a,
                handleStake: r,
                isTransactionPending: o,
                status: l,
              } = e,
              c = (0, f.useRouter)(),
              { setDashboardTab: d } = (0, s.xc)(),
              u = l !== N.EK.STAKING_SUCCESSFUL ? "Staking Confirmation" : "";
            return (0, i.jsxs)(v.default, {
              title: u,
              isOpen: t,
              onCloseModal: n,
              children: [
                l === N.EK.STAKING_SUCCESSFUL &&
                  (0, i.jsxs)("div", {
                    className: "tw-mb-6 tw-space-y-5 tw-text-center",
                    children: [
                      (0, i.jsx)("div", {
                        className: "tw-mx-auto tw-inline-block",
                        children: (0, i.jsx)(g, {}),
                      }),
                      (0, i.jsx)("div", {
                        className: "tw-font-lato tw-text-lg tw-font-bold",
                        children: "Staking Confirmed",
                      }),
                    ],
                  }),
                (0, i.jsx)(y, { ...a }),
                (0, i.jsxs)("div", {
                  children: [
                    l == N.EK.STAKING_SUCCESSFUL &&
                      (0, i.jsx)(m.Z, {
                        title: "view stakes",
                        className: "tw-w-full",
                        onClick: () => {
                          d("stakes"), c.push("/dashboard/trading");
                        },
                        children: "View $ITHACA Staked",
                      }),
                    l !== N.EK.STAKING_SUCCESSFUL &&
                      (0, i.jsx)(m.Z, {
                        title: "confirm staking",
                        className: "tw-w-full",
                        disabled: o,
                        onClick: r,
                        children: o
                          ? (0, i.jsx)(x.Z, { type: "sm" })
                          : "Confirm Staking",
                      }),
                  ],
                }),
              ],
            });
          },
          y = (e) => {
            let {
              irr: t,
              network: n,
              rewardMultiplier: a,
              stakedAmount: r,
              unlockDate: s,
            } = e;
            return (0, i.jsxs)("div", {
              className:
                "tw-mb-6 tw-space-y-4 tw-text-xs tw-text-ithaca-white-60",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    "Locked for Staking until ",
                    (0, i.jsx)("span", {
                      className:
                        "tw-pl-1 tw-text-base tw-font-bold tw-text-white",
                      children: s,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    "Amount:",
                    (0, i.jsxs)("span", {
                      className:
                        "tw-inline-flex tw-items-center tw-gap-1 tw-text-base tw-font-bold tw-text-white",
                      children: [r, " ", N.By.ITHC],
                    }),
                    "ITHACA",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-1",
                  children: [
                    "Network:",
                    (0, i.jsxs)("span", {
                      className:
                        "tw-inline-flex tw-items-center tw-gap-1 tw-text-base tw-font-bold tw-text-white",
                      children: [(0, j.XX)((0, N.e2)(n)), " ", (0, N.$D)(n)],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "tw-inline-flex tw-items-center tw-gap-6",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "tw-inline-flex tw-items-center tw-gap-1",
                      children: [
                        "Reward Multiplier ",
                        (0, i.jsxs)("span", {
                          className: "tw-text-base tw-text-ithaca-green-40",
                          children: [a, "X"],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "tw-inline-flex tw-items-center tw-gap-1",
                      children: [
                        "IRR ",
                        (0, i.jsxs)("span", {
                          className: "tw-text-base tw-text-ithaca-green-40",
                          children: [t, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var k = n(46464),
          C = n(64520),
          E = n(88793),
          S = n(26851),
          A = n(25615),
          I = n(55400);
        let T = (e) => {
          var t, n;
          let { data: a } = e;
          return (0, i.jsx)(k.h, {
            debounce: 200,
            width: "100%",
            height: 200,
            className: "-tw-ml-6 tw-grow",
            children: (0, i.jsxs)(C.T, {
              data: a,
              margin: { left: -20 },
              children: [
                (0, i.jsxs)("defs", {
                  children: [
                    (0, i.jsx)("filter", {
                      id: "glow",
                      x: "-50%",
                      y: "-50%",
                      width: "200%",
                      height: "200%",
                      children: (0, i.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "2",
                        result: "blur",
                      }),
                    }),
                    (0, i.jsxs)("linearGradient", {
                      id: "gradient-green",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "1",
                      children: [
                        (0, i.jsx)("stop", {
                          offset: "0%",
                          stopColor: "#5EE192",
                          stopOpacity: 0.3,
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
                          offset: "0%",
                          stopColor: "#B5B5F8",
                          stopOpacity: 0.3,
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
                (0, i.jsx)(E.B, {
                  strokeWidth: 0.5,
                  tick: !1,
                  children: (0, i.jsx)(S._, {
                    value: "Staking & Rewards Release Schedule",
                    position: "top",
                    offset: -20,
                    fill: "white",
                    fontSize: 12,
                    dx: 40,
                    style: { textAnchor: "start" },
                  }),
                }),
                (0, i.jsx)(A.K, {
                  dataKey: "month",
                  tickMargin: 8,
                  tickLine: !1,
                  padding: { left: 0, right: 0 },
                  style: { fontSize: 12, fill: "#fff", fontWeight: 500 },
                  ticks: [
                    null === (t = a[0]) || void 0 === t ? void 0 : t.month,
                    null === (n = a[a.length - 1]) || void 0 === n
                      ? void 0
                      : n.month,
                  ],
                  tick: (e) => {
                    let { x: t, y: n, payload: a, index: r } = e;
                    return (0, i.jsx)("text", {
                      y: n + 6,
                      x: 0 === r ? t + 20 : t - 4,
                      textAnchor: "middle",
                      className: "tw-fill-white tw-text-xs tw-font-medium",
                      children: a.value,
                    });
                  },
                  strokeWidth: 0.5,
                }),
                (0, i.jsx)(I.u, {
                  dataKey: "total",
                  type: "monotone",
                  stroke: "#5EE192",
                  fill: "url(#gradient-green)",
                  label: (0, i.jsx)((e) => {
                    let { x: t, y: n, value: r, index: s } = e;
                    return s === a.length - 2
                      ? (0, i.jsx)("text", {
                          x: t,
                          y: n + 30,
                          fill: "white",
                          fontSize: 10,
                          textAnchor: "middle",
                          children: "Rewards Release Schedule",
                        })
                      : null;
                  }, {}),
                }),
                (0, i.jsx)(I.u, {
                  dataKey: "principal",
                  type: "monotone",
                  stroke: "#B5B5F8",
                  fill: "url(#gradient-purple)",
                  label: (0, i.jsx)((e) => {
                    let { x: t, y: n, value: r, index: s } = e;
                    return s === a.length - 2
                      ? (0, i.jsx)("text", {
                          x: t,
                          y: n + 30,
                          fill: "white",
                          fontSize: 10,
                          textAnchor: "middle",
                          children: "Staking Release Schedule",
                        })
                      : null;
                  }, {}),
                }),
              ],
            }),
          });
        };
        var L = n(52431),
          M = n(18776),
          D = n(82834),
          F = n(45338),
          B = n(24543),
          O = n(54704),
          R = n(66403),
          K = n(35194),
          W = n(48104),
          Z = n(89469),
          U = n(48120),
          H = n(14504),
          P = n(45444),
          X = n(5019),
          z = n(57040),
          G = n(61769),
          q = n(80284),
          V = n(15229),
          J = n(64088),
          Y = n(81989),
          Q = () => {
            let e = (0, W.t)({ chainId: D.BB ? B.e.id : O.d.id }),
              t = (0, W.t)({ chainId: D.BB ? R.R.id : K.F.id }),
              { data: n } = (0, Z.p)(),
              { ithacaSDK: a } = (0, s.qr)(),
              { showToast: f, showErrorToast: v } = (0, l.Z)(),
              { openConnectModal: _ } = (0, o.We)(),
              { isConnected: g } = (0, Y.Pk)(),
              [y, k] = (0, r.useState)(!1),
              [C, E] = (0, r.useState)(N.Hn[0]),
              [S, A] = (0, r.useState)("100"),
              [I, Q] = (0, r.useState)(9),
              [$, ee] = (0, r.useState)([]),
              [et, en] = (0, r.useState)(N.EK.NO_AMOUNT),
              [ea, ei] = (0, r.useState)(!1),
              [er, es] = (0, r.useState)("0"),
              [eo, el] = (0, r.useState)("0"),
              ec = (e, t) => {
                let n = new Date(new Date().getTime() + t * N.c2 * 1e3);
                ee(
                  Array.from({ length: 7 }, (a, i) => {
                    let r = new Date(n);
                    r.setMonth(n.getMonth() + i);
                    let s = (0, N.AM)(t),
                      o = (0, F.Dx)(e) * (s - 1),
                      l = (i * (0, F.Dx)(e)) / 6,
                      c = (i * ((0, F.Dx)(e) + o)) / 6;
                    return {
                      month: (0, M.Z)(r, "ddMMMyy"),
                      principal: l,
                      total: c,
                    };
                  })
                );
              },
              ed = (e) => {
                let t = (0, F.Dg)(e);
                eh(C, t, I), A(t);
              },
              eu = (e) => {
                eh(C, S, e), Q(e);
              },
              ew = (e) => {
                eh(e, S, I), E(e);
              },
              eh = async (a, i, r) => {
                if ((ec(i, r), !t || !e || !n)) return;
                let s = a.value !== N.sT.value,
                  o = (0, U.v)(i, 18),
                  l = (0, U.v)(s ? er : eo, 18),
                  c = s
                    ? J.interchainTokenServiceAddresses[Number(a.value)]
                    : J.ithacaStakingRewardsAddresses[Number(a.value)],
                  d = await (s ? e : t).readContract({
                    address: J.ithacaTokenAddresses[Number(a.value)],
                    abi: H.Wo,
                    functionName: "allowance",
                    args: [n.account.address, c],
                  });
                o == BigInt(0)
                  ? en(N.EK.NO_AMOUNT)
                  : o > l
                  ? en(N.EK.INSUFFICIENT_BALANCE)
                  : "".concat(n.chain.id) !== a.value
                  ? en(N.EK.WRONG_NETWORK)
                  : o > d
                  ? en(N.EK.INSUFFICIENT_ALLOWANCE)
                  : en(N.EK.READY_TO_STAKE);
              },
              em = async (e) => {
                try {
                  await e.switchChain({ id: Number(C.value) });
                } catch (e) {
                  v({ title: "Failed to switch network", message: e.message });
                }
              },
              ex = async (e) => {
                let t = C.value !== N.sT.value,
                  n = J.ithacaTokenAddresses[e.chain.id],
                  a = t
                    ? J.interchainTokenServiceAddresses[e.chain.id]
                    : J.ithacaStakingRewardsAddresses[e.chain.id];
                try {
                  ei(!0);
                  let t = await e.writeContract({
                    address: n,
                    abi: H.Wo,
                    functionName: "approve",
                    args: [a, (0, U.v)(S, 18)],
                  });
                  await e.waitForTransactionReceipt({ hash: t }),
                    f({
                      title: "Approved",
                      message: "Approved to spend ITHACA tokens",
                      type: "success",
                    }),
                    await eh(C, S, I);
                } catch (e) {
                  v({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  ei(!1);
                }
              },
              ep = async (e) => {
                try {
                  if ((ei(!0), C.value !== N.sT.value)) {
                    let t = (0, P.E)(
                        [
                          { name: "duration", type: "uint256" },
                          { name: "onBehalfOf", type: "address" },
                        ],
                        [BigInt(I * N.c2), e.account.address]
                      ),
                      n = await e.writeContract({
                        address:
                          J.interchainTokenServiceAddresses[Number(C.value)],
                        abi: (0, X.V)([
                          "function interchainTransfer(bytes32 tokenId,string calldata destinationChain,bytes calldata destinationAddress,uint256 amount,bytes calldata metadata,uint256 gasValue) external payable",
                        ]),
                        functionName: "interchainTransfer",
                        args: [
                          J.ithacaTokenTokenId[Number(N.sT.value)],
                          "Ethereum",
                          J.ithacaStakingRewardsExecutableAddresses[
                            Number(N.sT.value)
                          ],
                          (0, U.v)(S, 18),
                          (0, z.SM)([(0, G.vk)("0x", { size: 4 }), t]),
                          (0, U.v)("0.01", 18),
                        ],
                        value: (0, U.v)("0.01", 18),
                      });
                    await e.waitForTransactionReceipt({ hash: n });
                  } else {
                    let t = await a.staking.stake(
                      (0, U.v)(S, 18),
                      BigInt(I * N.c2)
                    );
                    await e.waitForTransactionReceipt({ hash: t });
                  }
                  f({
                    title: "Staked",
                    message: "".concat(S, " $ITHACA staked"),
                    type: "success",
                  }),
                    en(N.EK.STAKING_SUCCESSFUL);
                } catch (e) {
                  v({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  ei(!1);
                }
              },
              ef = () => {
                if (!g) return null == _ ? void 0 : _();
                if (!n) return;
                let e = n.extend(q.I);
                switch (et) {
                  case N.EK.WRONG_NETWORK:
                    em(e);
                    return;
                  case N.EK.INSUFFICIENT_ALLOWANCE:
                    return ex(e);
                  case N.EK.READY_TO_STAKE:
                    return k(!0);
                }
              },
              ev = (0, r.useMemo)(() => {
                let e = new Date();
                return {
                  stakedAmount: S,
                  irr: (0, N.fH)(I),
                  unlockDate: (0, M.Z)(
                    new Date(e.getTime() + I * N.c2 * 1e3),
                    "ddMMMyy"
                  ),
                  network: C.name,
                  rewardMultiplier: (0, N.AM)(I),
                };
              }, [S, I, C]);
            return (
              (0, r.useEffect)(() => {
                (async () => {
                  var a;
                  if (
                    (null == n
                      ? void 0
                      : null === (a = n.account) || void 0 === a
                      ? void 0
                      : a.address) &&
                    e &&
                    t
                  )
                    try {
                      let a = await (null == e
                          ? void 0
                          : e.readContract({
                              abi: H.Wo,
                              address: J.ithacaTokenAddresses[e.chain.id],
                              functionName: "balanceOf",
                              args: [n.account.address],
                            })),
                        i = await (null == t
                          ? void 0
                          : t.readContract({
                              abi: H.Wo,
                              address: J.ithacaTokenAddresses[t.chain.id],
                              functionName: "balanceOf",
                              args: [n.account.address],
                            }));
                      es((0, V.b)(a, 18)), el((0, V.b)(i, 18));
                    } catch (e) {
                      console.error("Error fetching balances:", e);
                    }
                })();
              }, [n, e, t]),
              (0, r.useEffect)(() => {
                eh(C, S, I);
              }, [null == n ? void 0 : n.chain.id, er, eo]),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(w.Z, {}),
                  (0, i.jsxs)(d.Z, {
                    children: [
                      (0, i.jsx)(b, {
                        isOpen: y,
                        summary: ev,
                        handleStake: () => {
                          n && ep(n.extend(q.I));
                        },
                        status: et,
                        onClose: () => {
                          eh(C, S, I), k(!1);
                        },
                        isTransactionPending: ea,
                      }),
                      (0, i.jsx)(p.Z, {
                        className: "tw-max-w-[620px]",
                        children: (0, i.jsxs)(u.Z, {
                          className: "tw-p-6",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-row tw-justify-between",
                              children: [
                                (0, i.jsxs)("div", {
                                  children: [
                                    (0, i.jsx)("p", {
                                      className: "tw-text-sm tw-font-normal",
                                      children: "ITHACA Balance",
                                    }),
                                    (0, i.jsxs)("p", {
                                      className:
                                        "tw-mt-2 tw-flex tw-gap-[2px] tw-text-sm tw-font-bold",
                                      children: [
                                        Number(Number(er) + Number(eo)).toFixed(
                                          2
                                        ),
                                        N.By.ITHC,
                                        (0, i.jsx)("span", {
                                          className:
                                            "tw-font-normal tw-text-ithaca-white-60",
                                          children: "ITHACA",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "tw-flex tw-w-[150px] tw-flex-col tw-gap-1 tw-rounded-md tw-bg-rgba-gray-20 tw-px-2 tw-py-1",
                                  children: [
                                    (0, i.jsx)("p", {
                                      className: "tw-flex tw-text-xs",
                                      children: "Network",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "tw-flex tw-justify-between",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "tw-text-xs tw-text-ithaca-white-60",
                                          children: "Ethereum",
                                        }),
                                        (0, i.jsxs)("p", {
                                          className:
                                            "tw-flex tw-gap-[2px] tw-text-sm tw-font-bold",
                                          children: [
                                            Number(eo).toFixed(2),
                                            N.By.ITHC,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "tw-flex tw-justify-between",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "tw-text-xs tw-text-ithaca-white-60",
                                          children: "BSC",
                                        }),
                                        (0, i.jsxs)("p", {
                                          className:
                                            "tw-flex tw-gap-[2px] tw-text-sm tw-font-bold",
                                          children: [
                                            Number(er).toFixed(2),
                                            N.By.ITHC,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "tw-my-6 tw-border-b tw-border-ithaca-white-20",
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-between",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "tw-flex tw-items-center tw-justify-between tw-gap-1 lg:tw-grow-[60%]",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "tw-text-sm tw-font-normal tw-text-white",
                                      children: "Lock for Staking",
                                    }),
                                    (0, i.jsx)(h.Z, {
                                      value: S,
                                      onChange: (e) => ed(e.target.value),
                                      icon: (0, i.jsxs)("div", {
                                        className: "tw-flex tw-items-center",
                                        children: [
                                          (0, j.XX)("ITHC"),
                                          " ITHACA",
                                        ],
                                      }),
                                      className: "tw-w-[60%] lg:tw-w-[135px]",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "tw-flex tw-items-center tw-justify-between tw-gap-1",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "tw-text-sm tw-font-normal tw-text-white",
                                      children: "Network",
                                    }),
                                    (0, i.jsx)(L.Z, {
                                      hasDropdown: !0,
                                      className: "tw-w-[60%] lg:tw-w-[200px]",
                                      options: N.Hn,
                                      value: C,
                                      iconStart: (0, j.XX)(
                                        C.nativeCurrency.symbol
                                      ),
                                      onChange: (e, t) => ew(t),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-my-6 tw-space-y-1",
                              children: [
                                (0, i.jsx)(c.Z, {
                                  value: I,
                                  min: 6,
                                  max: 12,
                                  step: 3,
                                  dots: !1,
                                  onChange: (e) => eu(e),
                                  dotStyle: {
                                    height: 0,
                                    width: 0,
                                    border: "none",
                                  },
                                  activeDotStyle: {
                                    height: 0,
                                    width: 0,
                                    border: "none",
                                  },
                                  styles: {
                                    track: {
                                      height: 2,
                                      background: "var(--green-20)",
                                    },
                                    rail: {
                                      height: 2,
                                      background: "white",
                                      width: "100%",
                                    },
                                    handle: {
                                      border: "none",
                                      height: 10,
                                      width: 10,
                                      opacity: 1,
                                    },
                                  },
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "flex tw-items-center tw-justify-between tw-text-xs tw-text-ithaca-white-60",
                                  children: (0, N.aw)().map((e, t) =>
                                    (0, i.jsx)("span", { children: e }, t)
                                  ),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-flex tw-min-h-[200px]",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "tw-self-center tw-text-xs tw-font-medium tw-uppercase tw-text-ithaca-white-60",
                                  children: "Ithaca",
                                }),
                                (0, i.jsx)(T, { data: $ }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "tw-mt-6 tw-space-y-4",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "tw-space-y-[3px]",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "tw-text-sm",
                                      children: "Reward Multiplier",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "tw-text-xl tw-text-ithaca-green-40",
                                      children: [ev.rewardMultiplier, "X"],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "tw-space-y-[3px]",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "tw-text-sm",
                                      children: "IRR",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "tw-text-xl tw-text-ithaca-green-40",
                                      children: [ev.irr, "%"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "tw-mt-5",
                              children: (0, i.jsx)(m.Z, {
                                disabled:
                                  !(() => {
                                    if (!g) return !0;
                                    switch (et) {
                                      case N.EK.NO_AMOUNT:
                                      case N.EK.INSUFFICIENT_BALANCE:
                                        return !1;
                                      case N.EK.WRONG_NETWORK:
                                      case N.EK.INSUFFICIENT_ALLOWANCE:
                                      case N.EK.READY_TO_STAKE:
                                        return !0;
                                      default:
                                        return !1;
                                    }
                                  })() || ea,
                                title: "Click to stake",
                                className: "tw-w-full",
                                onClick: () => ef(),
                                children:
                                  et == N.EK.INSUFFICIENT_ALLOWANCE && ea
                                    ? (0, i.jsx)(x.Z, { type: "sm" })
                                    : (() => {
                                        if (!g) return "Connect Wallet";
                                        switch (et) {
                                          case N.EK.NO_AMOUNT:
                                            return "Enter an amount to stake";
                                          case N.EK.INSUFFICIENT_BALANCE:
                                            return "Insufficient balance";
                                          case N.EK.WRONG_NETWORK:
                                            return "Switch network";
                                          case N.EK.INSUFFICIENT_ALLOWANCE:
                                            return "Approve";
                                          case N.EK.READY_TO_STAKE:
                                            return "Stake";
                                          default:
                                            return "Invalid Config";
                                        }
                                      })(),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
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
      4345: function (e) {
        e.exports = {
          input: "Input_input__OpqTL",
          container: "Input_container__ANGD0",
          label: "Input_label__iGC50",
          error: "Input_error__0TJkW",
          errorMessage: "Input_errorMessage__uZeJs",
          incrementButton: "Input_incrementButton__GG1TV",
          incrementWrapper: "Input_incrementWrapper__54tK3",
          footer: "Input_footer__4_c8P",
          labelDropdown: "Input_labelDropdown__VvrK4",
          dropdown: "Input_dropdown__nB2Rd",
          isActive: "Input_isActive__5MNq9",
          dropdownMenu: "Input_dropdownMenu__F_XQj",
          selected: "Input_selected__tXyZU",
          dropdownItem: "Input_dropdownItem__y1w6s",
        };
      },
      3274: function (e) {
        e.exports = {
          modal: "Modal_modal__SD0Qa",
          modalBackdrop: "Modal_modalBackdrop__62gAJ",
          modalHeader: "Modal_modalHeader__CdV_r",
          modalContent: "Modal_modalContent__uHeCx",
          modalFooter: "Modal_modalFooter__xJsAg",
          buttonClose: "Modal_buttonClose__1_z0_",
          confirmButton: "Modal_confirmButton__PmiAL",
          buttonLoading: "Modal_buttonLoading___zX0N",
        };
      },
      25448: function (e) {
        e.exports = {
          container: "Container_container__UXVBQ",
          sm: "Container_sm__119v_",
          md: "Container_md__yR97e",
          lg: "Container_lg__iMl4h",
          loader: "Container_loader__fHfSB",
        };
      },
      2262: function (e) {
        e.exports = {
          flex: "Flex_flex__V5aBr",
          "flex--row": "Flex_flex--row__S_OUU",
          "flex--row-center": "Flex_flex--row-center__V0QHQ",
          "flex--row-center-nowrap": "Flex_flex--row-center-nowrap__czW4z",
          "flex--row-wrap": "Flex_flex--row-wrap__sR2z5",
          "flex--row-wrap-center": "Flex_flex--row-wrap-center__mpjSs",
          "flex--column": "Flex_flex--column__8tR2e",
          "flex--column-space-between":
            "Flex_flex--column-space-between__IDvxS",
          "flex--row-space-between": "Flex_flex--row-space-between__9sq1x",
          "flex--row-space-between-start":
            "Flex_flex--row-space-between-start__1st17",
          "flex--row-start-space-between":
            "Flex_flex--row-start-space-between__gzicg",
          "flex--row-space-around": "Flex_flex--row-space-around__fuX65",
          "flex--dropdown": "Flex_flex--dropdown__vPp_T",
          "flex--justify-end": "Flex_flex--justify-end__zozd3",
          "tabCard--bonusTwinWin": "Flex_tabCard--bonusTwinWin__cT2sW",
          "flex-stories": "Flex_flex-stories__WXhhb",
        };
      },
      80140: function (e) {
        e.exports = { Main: "Main_Main__LAM6o" };
      },
      2920: function (e) {
        e.exports = { panel: "Panel_panel__unNp0" };
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 9261, 4442, 7410, 9342, 2592, 4782, 9773, 8026, 7461, 7972, 497,
          8776, 8397, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 5673));
        }
      ),
        (_N_E = e.O());
    },
  ]);
