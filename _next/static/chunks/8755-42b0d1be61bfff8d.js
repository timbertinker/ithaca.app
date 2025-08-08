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
      (e._sentryDebugIds[t] = "682a1668-076d-481e-b415-8248235e0a93"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-682a1668-076d-481e-b415-8248235e0a93"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8755],
    {
      9838: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(67294),
          l = n(28618),
          i = n.n(l),
          s = n(45338),
          o = n(65440),
          c = n(92400),
          d = n(67253),
          u = n(15741),
          m = n(67930),
          f = n(70757),
          _ = n(59731);
        t.Z = (e) => {
          let {
              selectedCurrency: t,
              estimatedFee: n,
              swapFee: l,
              fundLock: p,
              fundLockLabel: h = "Available Balance",
              balance: x,
              margin: v = "m-0",
              nativeBalance: y = !1,
            } = e,
            { underlyingCurrency: C } = (0, _.qr)(),
            { currentStep: T } = (0, r.useContext)(u.OnboardingContext);
          return (0, a.jsxs)("div", {
            className: "".concat(i().balance, " ").concat(v && v),
            children: [
              !!p &&
                (0, a.jsxs)("div", {
                  className: "flex-row gap-4",
                  children: [
                    h,
                    ": ",
                    (0, s.uM)(p || 0, "", t),
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, f.XX)(t),
                        (0, a.jsx)("span", { children: t }),
                      ],
                    }),
                  ],
                }),
              (0, a.jsx)(c.Z, {
                isOpen:
                  T === d.P.DEPOSIT_WITHOUT_BALANCE_USDC ||
                  T === d.P.DEPOSIT_WITHOUT_BALANCE_WETH,
                align: "end",
                side: "bottom",
                children: (0, a.jsxs)("div", {
                  className: "flex-row gap-4",
                  children: [
                    "Wallet Balance: ",
                    x ? (0, s.uM)(Number(x), "", t) : "-",
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, f.XX)(t),
                        (0, a.jsx)("span", { children: y ? "ETH" : t }),
                      ],
                    }),
                  ],
                }),
              }),
              void 0 !== l &&
                (0, a.jsxs)("div", {
                  className: "flex-row gap-4",
                  children: [
                    "Fee: ",
                    (0, s.uM)(l, "", m.rb),
                    (0, f.XX)(m.rb),
                    (0, a.jsx)("span", { children: m.rb }),
                  ],
                }),
              n &&
                (0, a.jsxs)("div", {
                  className: "flex-row gap-4",
                  children: [
                    "ETH" === t ? "Total Amount" : "Estimated Fee",
                    ":",
                    " ",
                    n.isLoading
                      ? (0, a.jsx)("div", {
                          style: { position: "relative", margin: "0 12px" },
                          children: (0, a.jsx)(o.Z, { type: "sm" }),
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, s.uM)(Number(n.fee), "", C),
                            (0, a.jsx)("span", {
                              children: n.nativeCurrency.symbol,
                            }),
                          ],
                        }),
                  ],
                }),
            ],
          });
        };
      },
      69824: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return c;
          },
        });
        var a = n(85893),
          r = n(15615),
          l = n(59731),
          i = n(64729),
          s = n(85088),
          o = n(81989);
        function c(e) {
          let { isAccountBlocked: t } = (0, l.qr)(),
            { isSolanaWalletActive: n } = (0, i.X)(),
            { isConnected: c } = (0, o.Pk)();
          return n
            ? c
              ? e.children({
                  isAccountBlocked: t,
                  connected: !0,
                  ready: !0,
                  openAccountModal: () => {},
                  openChainModal: () => {},
                  openConnectModal: () => {},
                })
              : (0, a.jsx)(s.T, {})
            : (0, a.jsx)(r.NL.Custom, {
                children: (n) => {
                  let a = n.mounted && "loading" !== n.authenticationStatus,
                    r =
                      a &&
                      n.account &&
                      n.chain &&
                      (!n.authenticationStatus ||
                        "authenticated" === n.authenticationStatus);
                  return e.children({
                    isAccountBlocked: t,
                    connected: r,
                    ready: a,
                    ...n,
                  });
                },
              });
        }
      },
      52867: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(53561),
          l = n.n(r),
          i = n(93967),
          s = n.n(i);
        t.Z = (e) => {
          let { amount: t, symbol: n, currency: r, size: i, className: o } = e,
            c = i ? l()[i] : "";
          return (0, a.jsxs)("div", {
            className: s()(l().container, c, o),
            children: [t, " ", n, " ", (0, a.jsx)("span", { children: r })],
          });
        };
      },
      52431: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return x;
          },
        });
        var a,
          r = n(85893),
          l = n(73935),
          i = n(67294);
        function s() {
          return (s = Object.assign
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
        var o = function (e) {
            return i.createElement(
              "svg",
              s(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              a ||
                (a = i.createElement("path", {
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
          m = n(34281),
          f = n(76035),
          _ = n(65440),
          p = n(93967),
          h = n.n(p),
          x = (e) => {
            var t;
            let {
                onChange: n,
                options: a,
                disabled: i,
                label: s,
                width: d = 0,
                id: p,
                value: x,
                size: v = "md",
                iconStart: y,
                iconEnd: C,
                className: T,
                type: w,
                hasDropdown: N = !0,
                isLoading: g = !1,
                inputClassName: E,
                labelClassName: b,
              } = e,
              {
                handleDropdownClick: j,
                isDropdownOpen: I,
                containerRef: O,
                optionsRef: A,
                optionsPosition: D,
                mounted: S,
              } = (0, f.x)();
            return (0, r.jsxs)("div", {
              className: ""
                .concat(u().container, " ")
                .concat(T || "", " ")
                .concat(w ? u()[w] : ""),
              ref: O,
              children: [
                s &&
                  (0, r.jsx)("label", {
                    htmlFor: p,
                    className: h()(u().label, b),
                    children: s,
                  }),
                (0, r.jsxs)("div", {
                  style: d > 0 ? { minWidth: d + "px" } : {},
                  className: ""
                    .concat(u().dropdownContainer, " ")
                    .concat(i ? u().disabled : ""),
                  onClick: () => !g && j(),
                  role: "button",
                  children: [
                    (0, r.jsxs)("div", {
                      className: h()(
                        u().input,
                        { [u().clickedDropdown]: I },
                        E
                      ),
                      children: [
                        (0, r.jsxs)(c.Z, {
                          direction: "dropdown",
                          gap: "gap-4",
                          children: [
                            y && y,
                            g
                              ? (0, r.jsx)(_.Z, {})
                              : (0, r.jsx)("span", {
                                  className:
                                    "sm" === v ? u().textSmall : u().textMedium,
                                  children:
                                    null !==
                                      (t = null == x ? void 0 : x.name) &&
                                    void 0 !== t
                                      ? t
                                      : (0, r.jsx)("span", {
                                          className: u().placeholder,
                                          children: "-",
                                        }),
                                }),
                          ],
                        }),
                        N &&
                          (0, r.jsxs)("div", {
                            className: u().iconEnd,
                            children: [
                              C && C,
                              (0, r.jsx)("div", {
                                className: ""
                                  .concat(u().icon, " ")
                                  .concat(I ? u().isActive : ""),
                                children: (0, r.jsx)(o, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                    S &&
                      document.querySelector("#portal") &&
                      (0, l.createPortal)(
                        (0, r.jsx)(m.m, {
                          optionsRef: A,
                          isDropdownOpen: I,
                          optionsPosition: D,
                          options: a,
                          handleOptionClick: (e) => {
                            n(e.value, e);
                          },
                          selectedOption: x,
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
            return i;
          },
        });
        var a = n(85893),
          r = n(3575),
          l = n.n(r);
        let i = (e) => {
          let {
            optionsRef: t,
            isDropdownOpen: n,
            optionsPosition: r,
            options: i,
            handleOptionClick: s,
            selectedOption: o,
            size: c,
          } = e;
          return (0, a.jsx)("div", {
            ref: t,
            children: (0, a.jsx)("ul", {
              className: ""
                .concat(l().options, " ")
                .concat(n ? "" : l().isHidden),
              style: {
                width: "".concat(r.width, "px"),
                left: "".concat(r.left, "px"),
                top: "".concat(r.top, "px"),
              },
              children:
                null == i
                  ? void 0
                  : i.map((e) =>
                      (0, a.jsx)(
                        "li",
                        {
                          onClick: () => s(e),
                          className: ""
                            .concat(
                              (null == o ? void 0 : o.value) == e.value
                                ? l().selected
                                : "",
                              " "
                            )
                            .concat(
                              "sm" === c ? l().textSmall : l().textMedium
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
            return l;
          },
        });
        var a = n(67294),
          r = n(16795);
        let l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            [t, n] = (0, a.useState)(e),
            l = (0, a.useRef)(null),
            i = (0, a.useRef)(null),
            [s, o] = (0, a.useState)({ width: 0, top: 0, left: 0 }),
            [c, d] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              let e = (e) => {
                l.current &&
                  !l.current.contains(e.target) &&
                  i.current &&
                  !i.current.contains(e.target) &&
                  n(!1);
              };
              return (
                d(!0),
                document.addEventListener("click", e, !0),
                () => document.removeEventListener("click", e, !0)
              );
            }, []),
            (0, r.M)(() => t && n(!1)),
            {
              handleDropdownClick: () => {
                var e, a, r, i, s;
                let c =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect();
                o({
                  width:
                    null !== (a = null == c ? void 0 : c.width) && void 0 !== a
                      ? a
                      : 100,
                  left:
                    null !== (r = null == c ? void 0 : c.x) && void 0 !== r
                      ? r
                      : 0,
                  top:
                    (null !== (i = null == c ? void 0 : c.y) && void 0 !== i
                      ? i
                      : 0) +
                    (null !== (s = null == c ? void 0 : c.height) &&
                    void 0 !== s
                      ? s
                      : 0) +
                    document.documentElement.scrollTop +
                    1,
                }),
                  n(!t);
              },
              isDropdownOpen: t,
              setIsDropdownOpen: n,
              containerRef: l,
              optionsRef: i,
              optionsPosition: s,
              setOptionsPosition: o,
              mounted: c,
            }
          );
        };
      },
      19543: function (e, t, n) {
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
              (0, a.jsx)("path", {
                d: "M8 16C12.4334 16 16 12.4334 16 8C16 3.56664 12.4334 0 8 0C3.56664 0 0 3.56664 0 8C0 12.4334 3.56664 16 8 16Z",
                fill: "#35333E",
              }),
              (0, a.jsx)("path", {
                d: "M9.55838 7.62062L10.3952 6.20062L12.6508 9.71386L12.6519 10.3881L12.6446 5.74855C12.6392 5.63514 12.579 5.5314 12.4829 5.47021L8.42194 3.13426C8.327 3.08755 8.20647 3.08809 8.11165 3.13574C8.09884 3.14212 8.08677 3.14911 8.07532 3.15674L8.06114 3.16564L4.11933 5.44988L4.10405 5.45683C4.08438 5.46587 4.06448 5.47737 4.04584 5.49072C3.97109 5.54431 3.92147 5.62357 3.90541 5.71248C3.903 5.72595 3.90121 5.73965 3.90039 5.75353L3.90659 9.5343L6.00759 6.27782C6.27213 5.84603 6.84844 5.70694 7.38346 5.71449L8.01138 5.73106L4.31153 11.6646L4.74767 11.9156L8.49181 5.7371L10.1467 5.73109L6.41226 12.0656L7.96852 12.9607L8.15446 13.0676C8.23311 13.0996 8.32585 13.1012 8.40516 13.0726L12.5232 10.6861L11.7359 11.1423L9.55838 7.62062ZM9.87763 12.2192L8.3058 9.75221L9.26532 8.124L11.3296 11.3777L9.87763 12.2192Z",
                fill: "#434343",
              }),
              (0, a.jsx)("path", {
                d: "M8.30469 9.75321L9.87649 12.2202L11.3285 11.3787L9.26418 8.125L8.30469 9.75321Z",
                fill: "#ADADAD",
              }),
              (0, a.jsx)("path", {
                d: "M12.6521 10.3867L12.6511 9.71245L10.3954 6.19922L9.55859 7.61921L11.7361 11.1409L12.5234 10.6846C12.6006 10.6219 12.6474 10.5299 12.6523 10.4306L12.6521 10.3867Z",
                fill: "#ADADAD",
              }),
              (0, a.jsx)("path", {
                d: "M3.19922 11.0265L4.31102 11.6671L8.01084 5.73366L7.38292 5.71709C6.8479 5.70953 6.27157 5.84862 6.00705 6.28041L3.90605 9.5369L3.19922 10.6229V11.0265Z",
                fill: "white",
              }),
              (0, a.jsx)("path", {
                d: "M10.1471 5.73047L8.49219 5.73648L4.74805 11.915L6.05674 12.6685L6.41263 12.0649L10.1471 5.73047Z",
                fill: "white",
              }),
              (0, a.jsx)("path", {
                d: "M13.3488 5.72351C13.335 5.37741 13.1476 5.06058 12.8541 4.87612L8.73983 2.51012C8.44947 2.36392 8.08675 2.36373 7.79587 2.51003C7.76149 2.52737 3.79489 4.82784 3.79489 4.82784C3.73999 4.85417 3.68711 4.88553 3.63738 4.92113C3.37535 5.10893 3.21562 5.40076 3.19922 5.72138V10.6213L3.90605 9.53527L3.89987 5.7545C3.9007 5.74067 3.90243 5.72706 3.9049 5.71363C3.92088 5.62468 3.97055 5.54532 4.04532 5.49169C4.06398 5.47834 8.09834 3.14309 8.11116 3.13668C8.20598 3.08906 8.3265 3.0885 8.42144 3.1352L12.4824 5.47111C12.5785 5.5323 12.6387 5.63604 12.6441 5.74945V10.4329C12.6392 10.5322 12.5999 10.6242 12.5227 10.687L11.7354 11.1432L11.3291 11.3786L9.87714 12.2201L8.40464 13.0735C8.32533 13.1021 8.2326 13.1005 8.15395 13.0685L6.41174 12.0665L6.05585 12.6701L7.62151 13.5715C7.67328 13.601 7.7194 13.6271 7.75726 13.6483C7.81587 13.6812 7.85582 13.7032 7.86992 13.71C7.9812 13.7641 8.14132 13.7955 8.28559 13.7955C8.41788 13.7955 8.54687 13.7712 8.66892 13.7234L12.9459 11.2465C13.1914 11.0563 13.3358 10.7694 13.3488 10.4587V5.72351Z",
                fill: "#E4E4E4",
              }),
            ],
          });
      },
      108: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = (e) => {
          let { color: t = "#FF3F57" } = e;
          return (0, a.jsx)("svg", {
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M18 12.7278L6 12.7278",
              stroke: t,
              strokeLinecap: "round",
            }),
          });
        };
      },
      5716: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.5 6.25879C12.5 5.98265 12.2761 5.75879 12 5.75879C11.7239 5.75879 11.5 5.98265 11.5 6.25879V11.7588H6C5.72386 11.7588 5.5 11.9826 5.5 12.2588C5.5 12.5349 5.72386 12.7588 6 12.7588H11.5V18.2588C11.5 18.5349 11.7239 18.7588 12 18.7588C12.2761 18.7588 12.5 18.5349 12.5 18.2588V12.7588H18C18.2761 12.7588 18.5 12.5349 18.5 12.2588C18.5 11.9826 18.2761 11.7588 18 11.7588H12.5V6.25879Z",
              fill: "#4BB475",
            }),
          });
      },
      92720: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = () =>
          (0, a.jsxs)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_5890_4856)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M6 4.5V6.5",
                    stroke: "#FFD600",
                    strokeLinecap: "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M5.18125 1.79559L1.12825 8.56259C1.0447 8.70729 1.00048 8.87133 1 9.03841C0.999526 9.2055 1.0428 9.36979 1.12552 9.51496C1.20824 9.66013 1.32753 9.78111 1.47152 9.86587C1.61551 9.95063 1.77918 9.99622 1.94625 9.99809H10.0532C10.2202 9.99617 10.3838 9.95057 10.5278 9.86584C10.6717 9.7811 10.7909 9.66018 10.8736 9.51509C10.9563 9.37 10.9996 9.20579 10.9992 9.03878C10.9988 8.87177 10.9547 8.70777 10.8712 8.56309L6.81825 1.79509C6.73298 1.65435 6.61285 1.53797 6.46947 1.45719C6.3261 1.37642 6.16431 1.33398 5.99975 1.33398C5.83518 1.33398 5.6734 1.37642 5.53002 1.45719C5.38665 1.53797 5.26652 1.65435 5.18125 1.79509V1.79559Z",
                    stroke: "#FFD600",
                    strokeLinecap: "round",
                  }),
                  (0, a.jsx)("path", {
                    d: "M6 8H6.005",
                    stroke: "#FFD600",
                    strokeLinecap: "round",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_5890_4856",
                  children: (0, a.jsx)("rect", {
                    width: "12",
                    height: "12",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
      },
      45323: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return T;
          },
        });
        var a = n(85893),
          r = n(67294);
        let l = (e) => {
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
        var i = () =>
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
          s = n(4345),
          o = n.n(s),
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
          m = () =>
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
          f = n(21050),
          _ = n(24514),
          p = n(57345),
          h = n(16795),
          x = n(65440),
          v = n(93967),
          y = n.n(v),
          C = n(45338),
          T = (e) => {
            let {
                increment: t,
                onChange: n,
                value: s,
                icon: v,
                leftIcon: T,
                disabled: w,
                placeholder: N = "-",
                label: g,
                width: E = 0,
                type: b = "number",
                id: j,
                hasError: I = !1,
                errorMessage: O,
                className: A,
                containerClassName: D,
                isLinked: S,
                canLink: L,
                onLink: P,
                onBlur: k,
                onKeyDown: R,
                footerText: W,
                hasDropdown: F,
                dropDownOptions: M,
                onDropdownChange: B,
                isLoading: U = !1,
                labelClassName: H,
                min: Z,
                max: V,
                ...K
              } = e,
              [Y, G] = (0, r.useState)(!1),
              q = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
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
              (0, h.M)(() => {
                Y && G(!1);
              });
            let z = (e) => {
                G(!1), B && B(e);
              },
              Q = (e) => {
                if ("number" !== b || !t) return;
                let n = s ? (0, C.Dx)("".concat(s)) : void 0;
                "UP" === e
                  ? ((void 0 !== n && void 0 !== V && n < V) || void 0 === V) &&
                    t("UP")
                  : "DOWN" === e &&
                    ((void 0 !== n && void 0 !== Z && n > Z) || void 0 === Z) &&
                    t("DOWN");
              };
            return (0, a.jsxs)("div", {
              className: y()(o().input, A, { [o().error]: I }),
              style: E > 0 ? { width: E + "px" } : {},
              children: [
                g &&
                  (0, a.jsx)("label", {
                    htmlFor: j,
                    className: y()(o().label, H),
                    children: g,
                  }),
                (0, a.jsxs)("div", {
                  className: "".concat(o().container, " ").concat(D || ""),
                  style: { width: "100%" },
                  children: [
                    L &&
                      (0, a.jsx)(d.Z, {
                        title: "Click to link",
                        variant: "icon",
                        size: "sm",
                        onClick: () => {
                          P && P(!S);
                        },
                        children: S ? (0, a.jsx)(c, {}) : (0, a.jsx)(u, {}),
                      }),
                    (0, a.jsxs)(_.Z, {
                      direction: "column",
                      classes: "full-width",
                      children: [
                        (0, a.jsxs)(_.Z, {
                          direction: "row-center",
                          children: [
                            T &&
                              (0, a.jsx)("div", {
                                className: "tw-mr-1",
                                children: T,
                              }),
                            U
                              ? (0, a.jsx)("div", {
                                  className: "flexGrow",
                                  children: (0, a.jsx)(x.Z, {}),
                                })
                              : (0, a.jsx)("input", {
                                  ...K,
                                  id: j,
                                  type: b,
                                  value: s,
                                  placeholder: N,
                                  inputMode:
                                    "number" === b ? "decimal" : void 0,
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if ("number" === b) {
                                      let a = (0, C.Dx)(t);
                                      if (void 0 !== V && a > V) return;
                                      null == n || n(e);
                                    } else null == n || n(e);
                                  },
                                  onWheel: "number" === b ? l : void 0,
                                  disabled: w,
                                  min: "number" === b ? Z : void 0,
                                  max: "number" === b ? V : void 0,
                                  step: "any",
                                  onBlur: k,
                                  onKeyDown: R,
                                }),
                            v &&
                              (0, a.jsx)("div", {
                                className: "tw-ml-1",
                                children: v,
                              }),
                            F &&
                              (0, a.jsxs)("div", {
                                onClick: () => {
                                  G(!Y);
                                },
                                className: ""
                                  .concat(o().dropdown, " ")
                                  .concat(Y ? o().isActive : ""),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "mmt-2",
                                    children: (0, a.jsx)(p.Z, {}),
                                  }),
                                  Y &&
                                    (0, a.jsx)("ul", {
                                      className: o().dropdownMenu,
                                      children:
                                        M &&
                                        M.map((e) =>
                                          (0, a.jsxs)(
                                            "li",
                                            {
                                              className: y()(
                                                o().dropdownItem,
                                                "tw-flex",
                                                { [o().active]: s === e.value }
                                              ),
                                              onClick: () => z(e.value),
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
                        W &&
                          (0, a.jsx)("div", {
                            className: o().footer,
                            children: W,
                          }),
                      ],
                    }),
                    t &&
                      (0, a.jsx)("div", {
                        className: o().incrementWrapper,
                        children: (0, a.jsxs)(_.Z, {
                          direction: "column",
                          children: [
                            (0, a.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => Q("UP"),
                                variant: "icon",
                                children: (0, a.jsx)(m, {}),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => Q("DOWN"),
                                variant: "icon",
                                children: (0, a.jsx)(f.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                I &&
                  O &&
                  (0, a.jsxs)("div", {
                    className: o().errorMessage,
                    children: [(0, a.jsx)(i, {}), O],
                  }),
              ],
            });
          };
      },
      81788: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return et;
          },
        });
        var a,
          r,
          l,
          i,
          s = n(85893),
          o = n(5152),
          c = n.n(o),
          d = n(67294),
          u = n(61228),
          m = n(14504),
          f = n(15229),
          _ = n(48120),
          p = n(80284),
          h = n(37122),
          x = n(89469),
          v = n(48104),
          y = n(64088),
          C = n(57153),
          T = n(79793),
          w = n(59731),
          N = n(45338),
          g = n(15418),
          E = n(19543),
          b = n(9838),
          j = n(37422),
          I = n(52431),
          O = n(55975),
          A = n(45323),
          D = n(65440),
          S = n(20448),
          L = n(47236),
          P = n(6812),
          k = n.n(P),
          R = n(92400),
          W = n(67253),
          F = n(15741),
          M = n(82834),
          B = n(59421),
          U = n(40119),
          H = n(67930),
          Z = n(25811),
          V = n(69824),
          K = (e) => {
            var t, n;
            let {
                collateralSummary: a,
                showOrderConfirmationToastAndRefetchData: r,
              } = (0, B.F)(),
              { forwards: l } = (0, U.h)(),
              i = l.find((e) => "Spot" === e.payoff),
              { underlyingCurrency: o } = (0, w.qr)(),
              { ithacaSDK: c, currencyPrecision: u } = (0, w.qr)(),
              { showOrderErrorToast: m } = (0, L.Z)(),
              {
                selectedCurrency: f,
                setSelectedCurrency: _,
                currencies: p,
              } = e,
              [h, x] = (0, d.useState)(),
              [v, C] = (0, d.useState)(""),
              [T, g] = (0, d.useState)(""),
              [E, O] = (0, d.useState)("BUY"),
              [D, S] = (0, d.useState)(),
              [P, R] = (0, d.useState)(null),
              W = (0, d.useCallback)(
                async (e) => {
                  if (
                    (0, N.E5)((0, N.Dx)(v)) ||
                    (0, N.E5)((0, N.Dx)(T)) ||
                    !i
                  ) {
                    S(void 0);
                    return;
                  }
                  let t = (null == f ? void 0 : f.name) === o,
                    n = {
                      contractId: i.contractId,
                      quantity: "".concat((0, N.Dx)(t ? v : T)),
                      side: e,
                    },
                    a = t ? i.bestAsk : i.bestBid,
                    r = (0, N.Dx)("".concat(null != a ? a : i.referencePrice)),
                    l = {
                      clientOrderId: (0, y.createClientOrderId)(),
                      totalNetPrice: (0, y.calculateNetPrice)(
                        [n],
                        [r],
                        u.strike
                      ),
                      legs: [n],
                    };
                  try {
                    let [e, t] = await Promise.all([
                      c.calculation.estimateOrderLockPositioned(l),
                      c.calculation.estimateOrderFeesExtended(l),
                    ]);
                    S({
                      order: l,
                      orderLock: e,
                      orderFees: t.estimation,
                      orderFeesLocked: t.toBeLocked,
                    });
                  } catch (e) {
                    S({
                      order: l,
                      orderLock: null,
                      orderFees: null,
                      orderFeesLocked: null,
                    }),
                      console.error("Order estimation for forward failed", e);
                  }
                },
                [f, v, T, i, u.strike, c.calculation, o]
              );
            (0, d.useEffect)(() => {
              W(E);
            }, [f, h, v, T, i, E, W]),
              (0, d.useEffect)(() => {
                i &&
                  ((null == f ? void 0 : f.name) === "USDC"
                    ? R(Number(i.bestBid || i.referencePrice))
                    : (null == f ? void 0 : f.name) === o &&
                      R(Number(i.bestAsk || i.referencePrice)));
              }, [f, i, o]);
            let F = (0, d.useCallback)(
              (e) =>
                p.filter((t) => t.name !== (null == e ? void 0 : e.name))[0],
              [p]
            );
            (0, d.useEffect)(() => {
              O((null == f ? void 0 : f.name) === o ? "SELL" : "BUY"), x(F(f));
            }, [F, f, o]);
            let M = async () => {
                if (f)
                  try {
                    await c.orders.newOrder(null == D ? void 0 : D.order, H.IG),
                      r(),
                      e.handleCloseModal();
                  } catch (e) {
                    m(null == e ? void 0 : e.message),
                      console.error("Failed to submit order", e);
                  }
              },
              K = async () => {
                await M();
              },
              Y = (e, t) =>
                !P || (0, N.E5)(Number(e))
                  ? ""
                  : "USDC" === t
                  ? (Number(e) / P).toFixed(4)
                  : t === o
                  ? (Number(e) * P).toFixed(2)
                  : "";
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  style: { marginTop: 0, marginBottom: 20 },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "tw-flex tw-flex-1",
                      style: { marginBottom: 5, alignItems: "baseline" },
                      children: [
                        (0, s.jsx)("h4", {
                          className: k().receiveTitle,
                          children: "Pay",
                        }),
                        (0, s.jsx)("h4", {
                          className: k().receiveSubtitle,
                          children: "\xa0(From Available Collateral on Ithaca)",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "tw-flex tw-items-center",
                      children: [
                        (0, s.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, s.jsx)("path", {
                            d: "M18 12L6 12",
                            stroke: "#FF3F57",
                            strokeLinecap: "round",
                          }),
                        }),
                        (0, s.jsxs)("h4", {
                          className: k().receiveDescription,
                          children: [
                            "Next Auction Forward ",
                            null == f ? void 0 : f.name,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                  children: (0, s.jsxs)("div", {
                    className: "tw-flex tw-flex-1 tw-gap-2",
                    children: [
                      (0, s.jsx)("div", {
                        style: { flex: 1.2 },
                        children: (0, s.jsx)(I.Z, {
                          className: "full-width",
                          options: p,
                          value: f,
                          onChange: (e, t) => {
                            _(t),
                              O(t.name === o ? "SELL" : "BUY"),
                              g(Y(v, t.name)),
                              t.name === (null == h ? void 0 : h.name) &&
                                x(F(t));
                          },
                          iconStart: f && a[f.name].currencyLogo,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        style: { flex: 1 },
                        children: (0, s.jsx)(A.Z, {
                          className: "full-width",
                          containerClassName: "full-width",
                          value: v,
                          onChange: (e) => {
                            let { target: t } = e,
                              n = (0, N.Dg)(t.value);
                            C(n), g(Y(n, null == f ? void 0 : f.name));
                          },
                        }),
                      }),
                      (0, s.jsx)(j.Z, {
                        variant: "secondary",
                        size: "sm",
                        title: "Select All Assets",
                        onClick: () => {
                          f &&
                            (g(Y("".concat(a[f.name].fundLockValue), f.name)),
                            C("".concat(a[f.name].fundLockValue)));
                        },
                        children: "All",
                      }),
                    ],
                  }),
                }),
                f &&
                  (0, s.jsx)(b.Z, {
                    selectedCurrency: f.name,
                    swapFee:
                      null == D
                        ? void 0
                        : null === (t = D.orderFees) || void 0 === t
                        ? void 0
                        : t.numeraireAmount,
                    fundLock: a[f.name].fundLockValue,
                    fundLockLabel: "Balance",
                    margin: "mtb-20",
                  }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      style: { marginTop: 0, marginBottom: 20 },
                      children: (0, s.jsxs)("div", {
                        className: "tw-flex tw-flex-1",
                        style: { marginBottom: 5, alignItems: "baseline" },
                        children: [
                          (0, s.jsx)("h4", {
                            className: k().receiveTitle,
                            children: "Receive",
                          }),
                          (0, s.jsx)("h4", {
                            className: k().receiveSubtitle,
                            children: "\xa0(As Available Collateral on Ithaca)",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "tw-flex tw-flex-1 tw-gap-2",
                      children: [
                        (0, s.jsx)("div", {
                          style: { flex: 1.2 },
                          children: (0, s.jsx)(I.Z, {
                            className: "full-width",
                            options: p,
                            value: h,
                            onChange: (e, t) => {
                              x(t),
                                O(t.name === o ? "SELL" : "BUY"),
                                C(Y(T, t.name)),
                                t.name === (null == f ? void 0 : f.name) &&
                                  _(F(t));
                            },
                            iconStart:
                              h &&
                              (null === (n = a[h.name]) || void 0 === n
                                ? void 0
                                : n.currencyLogo),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          style: { flex: 1 },
                          children: (0, s.jsx)(A.Z, {
                            className: "full-width",
                            containerClassName: "full-width",
                            value: T,
                            onChange: (e) => {
                              let { target: t } = e,
                                n = (0, N.Dg)(t.value);
                              g(n), C(Y(n, null == h ? void 0 : h.name));
                            },
                          }),
                        }),
                      ],
                    }),
                    h &&
                      (0, s.jsx)(b.Z, {
                        selectedCurrency: h.name,
                        fundLock: a[h.name].fundLockValue,
                        fundLockLabel: "Fund Lock",
                        balance: a[h.name].walletBalance,
                        margin: "mtb-20",
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex flex-1 tw-w-full",
                  children: (0, s.jsx)(V.Z, {
                    children: (e) => {
                      let {
                        connected: t,
                        openConnectModal: n,
                        openAccountModal: a,
                      } = e;
                      return (0, s.jsx)(Z.Z, {
                        isSubmitButtonDisabled: !1,
                        onlyProtiftableOrders: !1,
                        submitAuction: K,
                        openConnectModal: n,
                        openAccountModal: a,
                        connected: t,
                        orderSummary: D,
                      });
                    },
                  }),
                }),
              ],
            });
          },
          Y = n(81989),
          G = n(5019),
          q = n(12185),
          z = n(4153);
        ((a = l || (l = {})).NO_AMOUNT = "NO_AMOUNT"),
          (a.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (a.WRONG_NETWORK = "WRONG_NETWORK"),
          (a.READY_TO_WRAP = "READY_TO_WRAP");
        var Q = (e) => {
            let { handleCloseModal: t } = e,
              { address: n } = (0, Y.Pk)(),
              a = (0, d.useMemo)(() => (0, S.b)().id, []),
              r = (0, v.t)({ chainId: a }),
              { data: l } = (0, x.p)(),
              { data: i } = (0, q.K)({ address: n, chainId: a }),
              { collateralSummary: o } = (0, B.F)(),
              { showErrorToast: c, showToast: u } = (0, L.Z)(),
              { systemInfo: m, underlyingCurrency: f } = (0, w.qr)(),
              [h, y] = (0, d.useState)(""),
              [C, T] = (0, d.useState)("NO_AMOUNT"),
              [g, O] = (0, d.useState)(!1),
              P = (e) => {
                let t = (0, N.Dg)(e);
                y(t), R(t);
              },
              R = (e) => {
                if (!r || !l || !i) return;
                let t = (0, _.v)(e, 18);
                t === BigInt(0)
                  ? T("NO_AMOUNT")
                  : t > i.value
                  ? T("INSUFFICIENT_BALANCE")
                  : l.chain.id !== a
                  ? T("WRONG_NETWORK")
                  : T("READY_TO_WRAP");
              },
              W = () => {
                switch (C) {
                  case "NO_AMOUNT":
                    return "Enter amount to wrap";
                  case "INSUFFICIENT_BALANCE":
                    return "Insufficient balance";
                  case "WRONG_NETWORK":
                    return "Switch network";
                  case "READY_TO_WRAP":
                    return "Wrap";
                  default:
                    return "Invalid Config";
                }
              },
              F = (e) => async () => {
                try {
                  await e.switchChain({ id: a });
                } catch (e) {
                  c({ title: "Failed to switch network", message: e.message });
                }
              },
              M = (e) => async () => {
                try {
                  O(!0);
                  let n = await e.writeContract({
                    address: m.tokenAddress[f],
                    abi: (0, G.V)(["function deposit() external payable"]),
                    functionName: "deposit",
                    value: (0, _.v)(h, 18),
                  });
                  await e.waitForTransactionReceipt({ hash: n }),
                    u({
                      title: "Lent",
                      message: "".concat(h, " ETH wrapped to ").concat(f),
                      type: "success",
                    }),
                    t();
                } catch (e) {
                  u({
                    title: "Rejected Request",
                    message: "User rejected the request",
                    type: "error",
                  });
                } finally {
                  O(!1);
                }
              };
            return (
              (0, d.useEffect)(() => {
                l && R(h);
              }, [null == l ? void 0 : l.chain.id]),
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    style: { marginTop: 0, marginBottom: 20 },
                    children: (0, s.jsx)("h4", {
                      className: k().receiveTitle,
                      children: "Wrap ETH on Arbitrum to WETH on Arbitrum",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                    children: [
                      (0, s.jsx)("div", {
                        className: "tw-flex tw-flex-[0.7] tw-flex-row",
                        children: (0, s.jsx)(I.Z, {
                          disabled: !0,
                          hasDropdown: !1,
                          className: "full-width",
                          options: [
                            { name: (0, S.b)().name, value: "".concat(a) },
                          ],
                          value: { name: (0, S.b)().name, value: "".concat(a) },
                          onChange: () => {},
                          iconStart: (0, s.jsx)(E.Z, {}),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "tw-flex tw-flex-1 tw-gap-2",
                        children: [
                          (0, s.jsx)("div", {
                            style: { flex: 1.2 },
                            children: (0, s.jsx)(I.Z, {
                              disabled: !0,
                              hasDropdown: !1,
                              className: "full-width",
                              options: [
                                {
                                  name: "ETH",
                                  value:
                                    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                                },
                              ],
                              value: {
                                name: "ETH",
                                value:
                                  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                              },
                              onChange: () => {},
                              iconStart: (0, s.jsx)(z.Z, {}),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            style: { flex: 1 },
                            children: (0, s.jsx)(A.Z, {
                              className: "full-width",
                              containerClassName: "full-width",
                              value: h,
                              onChange: (e) => {
                                let { target: t } = e;
                                return P((0, N.Dg)(t.value));
                              },
                            }),
                          }),
                          (0, s.jsx)(j.Z, {
                            variant: "secondary",
                            size: "sm",
                            title: "Select All Assets",
                            onClick: () => {
                              (null == i ? void 0 : i.formatted) &&
                                P(null == i ? void 0 : i.formatted);
                            },
                            children: "All",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(b.Z, {
                    selectedCurrency: f,
                    fundLock: o[f].fundLockValue,
                    balance: null == i ? void 0 : i.formatted,
                    margin: "mtb-20",
                    nativeBalance: !0,
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(j.Z, {
                      disabled: !(() => {
                        switch (C) {
                          case "NO_AMOUNT":
                          case "INSUFFICIENT_BALANCE":
                          default:
                            return !1;
                          case "WRONG_NETWORK":
                          case "READY_TO_WRAP":
                            return !0;
                        }
                      })(),
                      title: W(),
                      variant: "primary",
                      size: "sm",
                      role: "button",
                      onClick: (() => {
                        if (!l) return;
                        let e = l.extend(p.I);
                        switch (C) {
                          case "WRONG_NETWORK":
                            return F(e);
                          case "READY_TO_WRAP":
                            return M(e);
                        }
                      })(),
                      className: "full-width",
                      children: g ? (0, s.jsx)(D.Z, { type: "sm" }) : W(),
                    }),
                  }),
                ],
              })
            );
          },
          X = n(64729),
          J = n(70757);
        let $ = c()(
            () =>
              Promise.all([n.e(3890), n.e(9773), n.e(6656)]).then(
                n.bind(n, 46656)
              ),
            { loadableGenerated: { webpack: () => [46656] }, ssr: !1 }
          ),
          ee = ["ETH", "WETH", "USDC"];
        ((r = i || (i = {})).NO_SOURCE_CHAIN_TOKEN = "NO_SOURCE_CHAIN_TOKEN"),
          (r.NO_AMOUNT = "NO_AMOUNT"),
          (r.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (r.WRONG_NETWORK = "WRONG_NETWORK"),
          (r.INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE"),
          (r.READY_TO_DEPOSIT_NATIVE = "READY_TO_DEPOSIT_NATIVE"),
          (r.READY_TO_DEPOSIT_CROSS_CHAIN = "READY_TO_DEPOSIT_CROSS_CHAIN"),
          (r.READY_TO_WITHDRAW = "READY_TO_WITHDRAW");
        var et = (e) => {
          var t, n, a;
          let {
              displayModalTypeTabs: r = !0,
              setIsFetchingBalanceEnabled: l,
              modalTab: i,
              setModalTab: o,
              selectedCurrency: c,
              setSelectedCurrency: P,
              setDashboardTab: U,
            } = e,
            {
              currentStep: H,
              updateStep: Z,
              isTutorialDisabled: V,
            } = (0, d.useContext)(F.OnboardingContext),
            { collateralSummary: Y } = (0, B.F)(),
            { chains: G } = (0, h.Z)(),
            {
              systemInfo: q,
              ithacaSDK: z,
              addCrossChainTransaction: et,
              underlyingCurrency: en,
            } = (0, w.qr)(),
            { showErrorToast: ea, showToast: er } = (0, L.Z)(),
            { data: el } = (0, x.p)(),
            { isSolanaWalletActive: ei } = (0, X.X)(),
            es = (0, d.useRef)(),
            eo = (0, d.useRef)(),
            ec = (0, d.useMemo)(() => (0, C.zI)(ei), [ei]),
            ed = (0, d.useMemo)(
              () =>
                Object.keys(q.tokenAddress).map((e) => ({
                  name: e,
                  value: q.tokenAddress[e],
                  decimals: q.tokenDecimals[e],
                })),
              [q]
            ),
            eu = (0, d.useMemo)(() => {
              let e = (0, S.b)(ei);
              return {
                name: e.name,
                value: "".concat(e.id),
                nativeCurrency: e.nativeCurrency,
              };
            }, [ei]),
            em = (0, d.useMemo)(
              () =>
                c
                  ? {
                      name: c.name,
                      value: c.value,
                      decimals: q.tokenDecimals[c.name],
                    }
                  : ed[1],
              [c, ed, q]
            ),
            [ef, e_] = (0, d.useState)(eu),
            [ep, eh] = (0, d.useState)([]),
            [ex, ev] = (0, d.useState)(!1),
            [ey, eC] = (0, d.useState)(),
            [eT, ew] = (0, d.useState)(""),
            [eN, eg] = (0, d.useState)(""),
            [eE, eb] = (0, d.useState)(""),
            [ej, eI] = (0, d.useState)("NO_AMOUNT"),
            [eO, eA] = (0, d.useState)(!1),
            [eD, eS] = (0, d.useState)(!1),
            [eL, eP] = (0, d.useState)(),
            ek = (0, v.t)({ chainId: parseInt(ef.value) }),
            eR = async function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 10;
              for (let n = 0; n < t; n++)
                try {
                  return await e();
                } catch (e) {
                  console.error("Attempt ".concat(n + 1, " failed:"), e),
                    n < t - 1 &&
                      (await new Promise((e) =>
                        setTimeout(e, 1e3 * ~~(1 << n))
                      ));
                }
              throw Error("Failed to execute action after all retries");
            },
            eW = async (e) => {
              ev(!0),
                eh(
                  (await z.fundlock.getTokens(e)).filter((e) => {
                    let { symbol: t } = e;
                    return ee.includes(t);
                  })
                ),
                ev(!1);
            },
            eF = async (e) => {
              let t = BigInt(0);
              ek &&
                el &&
                ((t = (0, u.E)(e.value, y.nativeTokenConstant)
                  ? await ek.getBalance({ address: el.account.address })
                  : await ek.readContract({
                      address: e.value,
                      abi: m.Wo,
                      functionName: "balanceOf",
                      args: [el.account.address],
                    })),
                eb((0, f.b)(t, e.decimals)));
            },
            eM = (e) => {
              l && l(e, c);
            },
            eB = (e, t) => {
              !V &&
                Z &&
                (H === W.P.DEPOSIT_WITHOUT_BALANCE_CHAIN ||
                  H === W.P.DEPOSIT_WITHOUT_BALANCE_USDC ||
                  H === W.P.DEPOSIT_WITHOUT_BALANCE_WETH) &&
                Z(W.P.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN),
                clearInterval(es.current),
                eC(void 0),
                ew(""),
                eg(""),
                e_(t),
                eW(parseInt(t.value)),
                eV(t, eu, ey, em, eT, eN);
            },
            eU = async (e, t) => {
              !V && Z && Z(W.P.DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN),
                clearInterval(es.current),
                eg(""),
                eC(t),
                ei || (await eF(t)),
                eV(ef, eu, t, em, eT, eN);
            },
            eH = (e) => {
              clearInterval(es.current);
              let t = (0, N.Dg)(e);
              ew(t), eV(ef, eu, ey, em, t, eN);
            },
            eZ = (e) => {
              clearInterval(es.current);
              let t = (0, N.Dg)(e);
              eV(ef, eu, ey, em, eT, t), eg(t);
            },
            eV = async (e, t, n, a, r, l) => {
              if (ek && el) {
                if (ei)
                  "withdraw" === i
                    ? eI("READY_TO_WITHDRAW")
                    : eI("READY_TO_DEPOSIT_NATIVE");
                else if (e.value === t.value) {
                  if ("withdraw" === i) {
                    let e = (0, _.v)(l, a.decimals),
                      n = (0, _.v)(
                        Y[a.name].fundLockValue.toString(),
                        a.decimals
                      );
                    e === BigInt(0)
                      ? eI("NO_AMOUNT")
                      : "".concat(el.chain.id) === t.value || ei
                      ? e > n
                        ? eI("INSUFFICIENT_BALANCE")
                        : eI("READY_TO_WITHDRAW")
                      : eI("WRONG_NETWORK");
                  } else {
                    let e = (0, _.v)(l, a.decimals),
                      n = (0, _.v)(Y[a.name].walletBalance, a.decimals),
                      r = await ek.readContract({
                        address: a.value,
                        abi: m.Wo,
                        functionName: "allowance",
                        args: [el.account.address, q.fundlockAddress],
                      });
                    e === BigInt(0)
                      ? eI("NO_AMOUNT")
                      : e > n
                      ? eI("INSUFFICIENT_BALANCE")
                      : "".concat(el.chain.id) === t.value || ei
                      ? e > r
                        ? eI("INSUFFICIENT_ALLOWANCE")
                        : eI("READY_TO_DEPOSIT_NATIVE")
                      : eI("WRONG_NETWORK");
                  }
                } else {
                  if (!n) {
                    eI("NO_SOURCE_CHAIN_TOKEN");
                    return;
                  }
                  let l = (0, _.v)(r, n.decimals),
                    i = (0, _.v)(eE, n.decimals),
                    s = BigInt(0);
                  if ((0, u.E)(n.value, y.nativeTokenConstant)) s = l;
                  else if (eL) {
                    let {
                      route: { transactionRequest: e },
                    } = eL;
                    s = await ek.readContract({
                      address: n.value,
                      abi: m.Wo,
                      functionName: "allowance",
                      args: [el.account.address, e.target],
                    });
                  }
                  if (l !== BigInt(0) && !eO) {
                    clearTimeout(eo.current),
                      (eo.current = setTimeout(() => {
                        eX(e, t, n, a, r);
                      }, 1e3));
                    let l = setInterval(() => {
                      eD || eO || eX(e, t, n, a, r);
                    }, 15e3);
                    es.current = l;
                  }
                  l === BigInt(0)
                    ? eI("NO_AMOUNT")
                    : l > i
                    ? eI("INSUFFICIENT_BALANCE")
                    : "".concat(el.chain.id) === e.value || ei
                    ? l > s
                      ? eI("INSUFFICIENT_ALLOWANCE")
                      : eI("READY_TO_DEPOSIT_CROSS_CHAIN")
                    : eI("WRONG_NETWORK");
                }
              }
            },
            eK = () => {
              switch (ej) {
                case "NO_SOURCE_CHAIN_TOKEN":
                  return "Select a token to deposit";
                case "NO_AMOUNT":
                  return "Enter an amount to deposit";
                case "INSUFFICIENT_BALANCE":
                  return "Insufficient balance";
                case "WRONG_NETWORK":
                  return "Switch network";
                case "INSUFFICIENT_ALLOWANCE":
                  return "Approve";
                case "READY_TO_DEPOSIT_NATIVE":
                  return "Deposit";
                case "READY_TO_DEPOSIT_CROSS_CHAIN":
                  return "Deposit Cross-Chain";
                case "READY_TO_WITHDRAW":
                  return "Withdraw";
                default:
                  return "Invalid Config";
              }
            },
            eY = async () => {
              if (el)
                try {
                  await el.switchChain({ id: parseInt(ef.value) });
                } catch (e) {
                  ea({ title: "Failed to switch network", message: e.message });
                }
            },
            eG = async () => {
              if (!el) return;
              let e = el.extend(p.I),
                t = ef.value !== eu.value,
                n = t ? ey : em,
                a = t ? eT : eN,
                r = q.fundlockAddress;
              if (t) {
                if (!eL) return;
                r = null == eL ? void 0 : eL.route.transactionRequest.target;
              }
              if (n)
                try {
                  eA(!0);
                  let t = await e.writeContract({
                    address: n.value,
                    abi: m.Wo,
                    functionName: "approve",
                    args: [r, (0, _.v)(a, n.decimals)],
                  });
                  ei || (await e.waitForTransactionReceipt({ hash: t })),
                    er({
                      title: "Approved",
                      message:
                        "Approved the fundlock contract to spend the tokens",
                      type: "success",
                    }),
                    await eV(ef, eu, ey, em, eT, eN);
                } catch (e) {
                  ea({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  eA(!1);
                }
            },
            eq = async () => {
              if (!el) return;
              let e = el.extend(p.I);
              try {
                eA(!0);
                let t = await z.fundlock.deposit(
                  em.value,
                  (0, _.v)(eN, em.decimals)
                );
                !ei && t && (await e.waitForTransactionReceipt({ hash: t })),
                  er({
                    title: "Deposit successful",
                    message: ""
                      .concat(eN, " ")
                      .concat(em.name, " deposited to fundlock"),
                    type: "success",
                  }),
                  g.Z.track("Deposit", { amount: eN, currency: em.name }),
                  eM(!1),
                  eJ();
              } catch (e) {
                eM(!0),
                  er({
                    title: "Deposit unsuccessful",
                    message: "Failed to deposit, please try again.",
                    type: "error",
                  }),
                  console.error("Failed to deposit", e);
              } finally {
                eA(!1);
              }
            },
            ez = async () => {
              if (!eL || !el) return;
              let e = el.extend(p.I);
              try {
                clearInterval(es.current), eA(!0);
                let t = await z.fundlock.crossChainDeposit(e, eL.route);
                ei || (await e.waitForTransactionReceipt({ hash: t }));
                try {
                  let e = await eR(() =>
                    z.fundlock.getCrossChainTxStatus(t, eL.requestId)
                  );
                  et({
                    route: eL.route,
                    status: e,
                    timestamp: Date.now(),
                    requestId: eL.requestId,
                  }),
                    er({
                      title: "Cross-chain deposit successful",
                      message: ""
                        .concat(eN, " ")
                        .concat(em.name, " deposited to fundlock"),
                      type: "success",
                    }),
                    eM(!1),
                    eJ();
                } catch (e) {
                  eM(!0),
                    ea({
                      title: "Failed to get status",
                      message: "Could not get status of cross-chain deposit",
                    }),
                    console.error("Failed to get status", e);
                }
              } catch (t) {
                if (
                  (ea({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  }),
                  !ey)
                )
                  return;
                let e = setInterval(() => {
                  eX(ef, eu, ey, em, eT);
                }, 15e3);
                es.current = e;
              } finally {
                eA(!1);
              }
            },
            eQ = async () => {
              if (!el) return;
              let e = el.extend(p.I);
              try {
                eA(!0);
                let t = await z.fundlock.withdraw(
                  em.value,
                  (0, _.v)(eN, em.decimals)
                );
                !ei && t && (await e.waitForTransactionReceipt({ hash: t })),
                  er({
                    title: "Withdraw successful",
                    message: "You can release funds in ".concat(T.V, " Mins"),
                    type: "success",
                  }),
                  null == Z || Z(W.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB),
                  g.Z.track("Withdraw", { amount: eN, currency: em.name }),
                  null == U || U("fundLockHistory"),
                  eM(!1),
                  eJ(),
                  await eV(ef, eu, ey, em, eT, eN);
              } catch (e) {
                eM(!0),
                  er({
                    title: "Withdrawal unsuccessful",
                    message: "Failed to withdraw, please try again.",
                    type: "error",
                  }),
                  console.error("Failed to withdraw", e);
              } finally {
                eA(!1);
              }
            },
            eX = async (e, t, n, a, r) => {
              try {
                eS(!0);
                let l = await z.fundlock.getCrossChainDepositRoute(
                  parseInt(e.value),
                  parseInt(t.value),
                  n.value,
                  a.value,
                  (0, _.v)(r, n.decimals)
                );
                eg((0, f.b)(BigInt(l.route.estimate.toAmount), a.decimals)),
                  eP(l),
                  eS(!1);
              } catch (e) {
                ea({
                  title: "Failed to estimate bridge transaction",
                  message: "Could not estimate bridge transaction",
                });
              }
            },
            eJ = () => {
              null == Z || Z(W.P.SUBMIT_TO_AUCTION),
                null == o || o(void 0),
                ew(""),
                eg(""),
                eP(void 0),
                e_(eu),
                eC(void 0),
                P(void 0);
            },
            e$ = (e) => {
              o ? (o(e), e_(eu)) : console.warn("Set modal tab not defined");
            };
          return ((0, d.useEffect)(() => {
            el && eV(ef, eu, ey, em, eT, eN);
          }, [null == el ? void 0 : el.chain.id]),
          (0, d.useEffect)(() => {
            if (
              ("withdraw" === i &&
                er({
                  title: "Withdrawal",
                  message:
                    "Sign message in your wallet to approve token withdrawal from Ithaca onto your connected wallet.",
                }),
              "deposit" === i)
            ) {
              if (
                (er({
                  title: "Deposit",
                  message:
                    "Sign message in your wallet to approve token deposit onto Ithaca smart contract.",
                }),
                er({
                  title: "Step 2 - Approve Deposit of Funds",
                  message:
                    "Sign message 2 of 2 so as to approve the transfer of specified deposit amount onto Ithaca smart contract.",
                }),
                !V && c && Z)
              ) {
                var e;
                Y[null == c ? void 0 : c.name].fundLockValue
                  ? Z(void 0)
                  : Number(
                      (null === (e = Y[c.name]) || void 0 === e
                        ? void 0
                        : e.walletBalance) || 0
                    )
                  ? Z(W.P.DEPOSIT_WITH_BALANCE_CHAIN)
                  : (null == c ? void 0 : c.name) === en
                  ? Z(W.P.DEPOSIT_WITHOUT_BALANCE_WETH)
                  : Z(W.P.DEPOSIT_WITHOUT_BALANCE_USDC);
              }
            } else
              H !== W.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                H !== W.P.WITHDRAWAL_RELEASE_FUNDS &&
                (null == Z || Z(void 0));
          }, [i]),
          (0, d.useEffect)(() => {
            if (i) {
              if ("deposit" === i && !V && Z && c) {
                if (H === W.P.DEPOSIT_WITHOUT_BALANCE_USDC) {
                  var e;
                  Y[null == c ? void 0 : c.name].fundLockValue
                    ? Z(void 0)
                    : Number(
                        (null === (e = Y[null == c ? void 0 : c.name]) ||
                        void 0 === e
                          ? void 0
                          : e.walletBalance) || 0
                      )
                    ? Z(W.P.DEPOSIT_WITH_BALANCE_CHAIN)
                    : (null == c ? void 0 : c.name) === en
                    ? Z(W.P.DEPOSIT_WITHOUT_BALANCE_WETH)
                    : Z(W.P.DEPOSIT_WITHOUT_BALANCE_USDC);
                } else
                  H === W.P.DEPOSIT_WITH_BALANCE_TOKEN_USDC &&
                    ((null == c ? void 0 : c.name) === en &&
                    Number(Y[null == c ? void 0 : c.name].walletBalance || 0)
                      ? Z(W.P.DEPOSIT_WITH_BALANCE_TOKEN_WETH)
                      : Z(W.P.DEPOSIT_WITH_BALANCE_TOKEN_USDC));
              } else
                H !== W.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                  H !== W.P.WITHDRAWAL_RELEASE_FUNDS &&
                  (null == Z || Z(void 0));
            }
          }, [
            H,
            null === (t = Y.USDC) || void 0 === t ? void 0 : t.walletBalance,
            null === (n = Y[en]) || void 0 === n ? void 0 : n.walletBalance,
          ]),
          i)
            ? (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)($, {
                  className: "!tw-overflow-visible",
                  title:
                    ef.value === eu.value
                      ? "Manage Funds"
                      : "Manage Funds Cross-Chain",
                  isOpen: !!i,
                  onCloseModal: eJ,
                  isLoading: eO,
                  hideFooter: !0,
                  children: [
                    r &&
                      (0, s.jsx)(O.Z, {
                        tabs: ec,
                        activeTab: i,
                        onChange: (e) => e$(e),
                      }),
                    "swap" === i
                      ? (0, s.jsx)(K, {
                          handleCloseModal: eJ,
                          currencies: ed,
                          selectedCurrency: c,
                          setSelectedCurrency: P,
                        })
                      : "wrap" === i
                      ? (0, s.jsx)(Q, { handleCloseModal: eJ })
                      : (0, s.jsxs)(s.Fragment, {
                          children: [
                            "deposit" === i &&
                              ef.value !== eu.value &&
                              (0, s.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, s.jsx)("div", {
                                    style: { marginTop: 0, marginBottom: 20 },
                                    children: (0, s.jsx)("h4", {
                                      className: k().receiveTitle,
                                      children:
                                        "Deposit from your linked wallet",
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-flex tw-flex-[0.7] tw-flex-row",
                                        children: (0, s.jsx)(I.Z, {
                                          hasDropdown: !0,
                                          className: "full-width",
                                          options: G.map((e) => {
                                            let {
                                              id: t,
                                              name: n,
                                              nativeCurrency: a,
                                            } = e;
                                            return {
                                              name: n,
                                              value: "".concat(t),
                                              nativeCurrency: a,
                                            };
                                          }),
                                          value: ef,
                                          onChange: eB,
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "tw-flex tw-flex-1 tw-gap-2",
                                        children: [
                                          (0, s.jsx)(R.Z, {
                                            isOpen:
                                              H ===
                                              W.P
                                                .DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN,
                                            align: "end",
                                            side: "top",
                                            children: (0, s.jsx)("div", {
                                              style: { flex: 1.2 },
                                              children: (0, s.jsx)(I.Z, {
                                                isLoading: ex,
                                                className: "full-width",
                                                options: ep.map((e) => {
                                                  let {
                                                    address: t,
                                                    decimals: n,
                                                    symbol: a,
                                                  } = e;
                                                  return {
                                                    name: a,
                                                    value: t,
                                                    decimals: n,
                                                  };
                                                }),
                                                value: ey,
                                                onChange: eU,
                                              }),
                                            }),
                                          }),
                                          (0, s.jsx)("div", {
                                            style: { flex: 1 },
                                            children: (0, s.jsx)(A.Z, {
                                              className: "full-width",
                                              containerClassName: "full-width",
                                              value: eT,
                                              onChange: (e) => {
                                                let { target: t } = e;
                                                return eH(t.value);
                                              },
                                            }),
                                          }),
                                          (0, s.jsx)(j.Z, {
                                            variant: "secondary",
                                            size: "sm",
                                            title: "Select All Assets",
                                            onClick: () => eH(eE),
                                            children: "All",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  ey &&
                                    (0, s.jsx)("div", {
                                      children: (0, s.jsx)(b.Z, {
                                        selectedCurrency: ey.name,
                                        estimatedFee: {
                                          fee: (0, f.b)(
                                            BigInt(
                                              (null == eL
                                                ? void 0
                                                : null === (a = eL.route) ||
                                                  void 0 === a
                                                ? void 0
                                                : a.transactionRequest.value) ||
                                                "0"
                                            ),
                                            ef.nativeCurrency.decimals
                                          ),
                                          nativeCurrency: ef.nativeCurrency,
                                          isLoading: eD,
                                        },
                                        balance: eE,
                                        margin: "mtb-20",
                                      }),
                                    }),
                                ],
                              }),
                            ef.value !== eu.value &&
                              (0, s.jsx)("div", {
                                style: { marginTop: 20, marginBottom: 20 },
                                children: (0, s.jsx)("h4", {
                                  className: k().receiveTitle,
                                  children:
                                    "Receive appx. onto Ithaca smart contract",
                                }),
                              }),
                            "deposit" === i &&
                              ef.value === eu.value &&
                              (0, s.jsx)("div", {
                                style: { marginTop: 0, marginBottom: 20 },
                                children: (0, s.jsx)("h4", {
                                  className: k().receiveTitle,
                                  children: "Deposit from your linked wallet",
                                }),
                              }),
                            "withdraw" === i &&
                              ef.value === eu.value &&
                              (0, s.jsx)("div", {
                                style: { marginTop: 0, marginBottom: 20 },
                                children: (0, s.jsx)("h4", {
                                  className: k().receiveTitle,
                                  children: "Withdraw to your linked wallet",
                                }),
                              }),
                            (0, s.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                              children: [
                                (0, s.jsx)(R.Z, {
                                  isOpen:
                                    H === W.P.DEPOSIT_WITH_BALANCE_CHAIN ||
                                    H === W.P.DEPOSIT_WITHOUT_BALANCE_CHAIN,
                                  align: "end",
                                  side: "top",
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "tw-flex tw-flex-[0.7] tw-flex-row",
                                    children: (0, s.jsx)(I.Z, {
                                      disabled: ef.value !== eu.value,
                                      hasDropdown: ef.value === eu.value,
                                      className: "full-width",
                                      options:
                                        !M.BB || ei
                                          ? [eu]
                                          : G.map((e) => {
                                              let {
                                                id: t,
                                                name: n,
                                                nativeCurrency: a,
                                              } = e;
                                              return {
                                                name: n,
                                                value: "".concat(t),
                                                nativeCurrency: a,
                                              };
                                            }),
                                      value: eu,
                                      onChange: eB,
                                      iconStart: ei
                                        ? (0, J.XX)("SOL")
                                        : (0, s.jsx)(E.Z, {}),
                                    }),
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: "tw-flex tw-flex-1 tw-gap-2",
                                  children: [
                                    (0, s.jsx)(R.Z, {
                                      isOpen:
                                        H ===
                                          W.P.DEPOSIT_WITH_BALANCE_TOKEN_USDC ||
                                        H ===
                                          W.P.DEPOSIT_WITH_BALANCE_TOKEN_WETH ||
                                        H ===
                                          W.P
                                            .DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN,
                                      align: "end",
                                      side:
                                        H ===
                                        W.P
                                          .DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN
                                          ? "bottom"
                                          : "top",
                                      children: (0, s.jsx)("div", {
                                        style: { flex: 1.2 },
                                        children: (0, s.jsx)(I.Z, {
                                          className: "full-width",
                                          options: ed,
                                          value: em,
                                          onChange: (e, t) => {
                                            !V &&
                                              Z &&
                                              (H ===
                                                W.P
                                                  .DEPOSIT_WITHOUT_BALANCE_USDC ||
                                                H ===
                                                  W.P
                                                    .DEPOSIT_WITHOUT_BALANCE_WETH) &&
                                              Z(
                                                H ===
                                                  W.P
                                                    .DEPOSIT_WITHOUT_BALANCE_USDC
                                                  ? W.P
                                                      .DEPOSIT_WITHOUT_BALANCE_WETH
                                                  : W.P
                                                      .DEPOSIT_WITHOUT_BALANCE_USDC
                                              ),
                                              clearInterval(es.current),
                                              eV(ef, eu, ey, t, eT, eN),
                                              P({
                                                name: t.name,
                                                value: t.value,
                                              });
                                          },
                                          iconStart: Y[em.name].currencyLogo,
                                        }),
                                      }),
                                    }),
                                    (0, s.jsx)(R.Z, {
                                      isOpen:
                                        H === W.P.DEPOSIT_WITH_BALANCE_AMOUNT,
                                      align: "end",
                                      side: "top",
                                      children: (0, s.jsx)("div", {
                                        style: { flex: 1 },
                                        children: (0, s.jsx)(A.Z, {
                                          disabled: ef.value !== eu.value,
                                          className: "full-width",
                                          containerClassName: "full-width",
                                          value: eN,
                                          onChange: (e) => {
                                            let { target: t } = e;
                                            return eZ(t.value);
                                          },
                                          isLoading: eD,
                                        }),
                                      }),
                                    }),
                                    ef.value === eu.value
                                      ? (0, s.jsx)(j.Z, {
                                          variant: "secondary",
                                          size: "sm",
                                          title: "Select All Assets",
                                          onClick: () => {
                                            "withdraw" === i
                                              ? eZ(
                                                  Y[
                                                    em.name
                                                  ].fundLockValue.toString()
                                                )
                                              : eZ(Y[em.name].walletBalance);
                                          },
                                          children: "All",
                                        })
                                      : (0, s.jsx)("div", {
                                          className: "tw-w-10",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            c &&
                              (0, s.jsx)(b.Z, {
                                selectedCurrency: c.name,
                                fundLock: Y[c.name].fundLockValue,
                                balance: Y[c.name].walletBalance,
                                margin: "mtb-20",
                              }),
                            "withdraw" === i &&
                              (0, s.jsxs)("div", {
                                className: k().withdrawalInstructions,
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "mb-7",
                                    children:
                                      "Step 1: After initiating a withdrawal you will need to wait ~180 minutes for the funds to be made available to be released.",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "mb-7",
                                    children: [
                                      "Step 2: Once funds are ready to be released you will be notified automatically within the Ithaca App. Once notified, go to ‘Transaction History’ tab & click the ‘Release’ button, the funds will then be transferred to the connected wallet.",
                                      " ",
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "mb-18 italic",
                                    children: [
                                      "You can also periodically check the Transaction History tab to see the status of all withdrawals.",
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                            (0, s.jsx)(R.Z, {
                              isOpen:
                                H === W.P.DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON ||
                                H ===
                                  W.P.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON,
                              align: "end",
                              side: "bottom",
                              children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(j.Z, {
                                  variant: "primary",
                                  size: "sm",
                                  role: "button",
                                  className: "full-width",
                                  disabled: !(() => {
                                    if (eD) return !1;
                                    switch (ej) {
                                      case "NO_SOURCE_CHAIN_TOKEN":
                                      case "NO_AMOUNT":
                                      case "INSUFFICIENT_BALANCE":
                                      default:
                                        return !1;
                                      case "WRONG_NETWORK":
                                      case "INSUFFICIENT_ALLOWANCE":
                                      case "READY_TO_DEPOSIT_NATIVE":
                                      case "READY_TO_DEPOSIT_CROSS_CHAIN":
                                      case "READY_TO_WITHDRAW":
                                        return !0;
                                    }
                                  })(),
                                  onClick: (() => {
                                    switch (ej) {
                                      case "WRONG_NETWORK":
                                        return eY;
                                      case "INSUFFICIENT_ALLOWANCE":
                                        return eG;
                                      case "READY_TO_DEPOSIT_NATIVE":
                                        return eq;
                                      case "READY_TO_DEPOSIT_CROSS_CHAIN":
                                        return ez;
                                      case "READY_TO_WITHDRAW":
                                        return eQ;
                                    }
                                  })(),
                                  title: eK(),
                                  children: eO
                                    ? (0, s.jsx)(D.Z, { type: "sm" })
                                    : eK(),
                                }),
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              })
            : null;
        };
      },
      25811: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return T;
          },
        });
        var a = n(85893),
          r = n(37422),
          l = n(63218),
          i = n.n(l),
          s = n(59731),
          o = n(92720),
          c = n(67294),
          d = n(81788),
          u = n(88432),
          m = n(59421),
          f = n(45338);
        let _ = (e) => {
          let { orderSummary: t, additionalFundsUSDC: n = 0 } = e,
            { collateralSummary: a } = (0, m.F)(),
            { underlyingCurrency: r } = (0, s.qr)();
          return {
            hasEnoughFunds: (0, c.useMemo)(() => {
              var e, l;
              let i = Math.abs(
                  Number(null == t ? void 0 : t.order.totalNetPrice)
                ),
                s =
                  ((null == t
                    ? void 0
                    : null === (e = t.orderLock) || void 0 === e
                    ? void 0
                    : e.underlierAmount) || 0) - a[r].orderValue,
                o =
                  ((null == t
                    ? void 0
                    : null === (l = t.orderLock) || void 0 === l
                    ? void 0
                    : l.numeraireAmount) || 0) - a.USDC.orderValue,
                c = a.USDC.fundLockValue,
                d = a[r].fundLockValue,
                u = a.USDC.availableCollateral + n,
                m = a[r].availableCollateral,
                _ = 0;
              o > 0 && (_ += o);
              let p = 0;
              if ((s > 0 && (p += s), 0 !== i && (0, f.E5)(i))) return !1;
              if (_) {
                let e = _ > u;
                if ((0, f.E5)(c) || e) return !1;
              }
              if (p) {
                let e = p > m;
                if ((0, f.E5)(d) || e) return !1;
              }
              return !0;
            }, [t, a]),
          };
        };
        var p = n(92400),
          h = n(15741),
          x = n(67253),
          v = n(93967),
          y = n.n(v),
          C = n(47236),
          T = (e) => {
            var t;
            let {
                orderSummary: n,
                error: l,
                connected: m,
                openConnectModal: f,
                submitAuction: v,
                onlyProtiftableOrders: T,
                isSubmitButtonDisabled: w,
                title: N,
                additionalFundsUSDC: g = 0,
                withTutorial: E = !0,
              } = e,
              { showErrorToast: b } = (0, C.Z)(),
              { systemInfo: j } = (0, s.qr)(),
              [I, O] = (0, c.useState)(),
              {
                currentStep: A,
                updateStep: D,
                disableTutorial: S,
                isTutorialDisabled: L,
              } = (0, c.useContext)(h.OnboardingContext),
              P = null == n ? void 0 : n.order.totalNetPrice,
              k =
                null == n
                  ? void 0
                  : null === (t = n.orderFees) || void 0 === t
                  ? void 0
                  : t.numeraireAmount,
              R = !!P && "0.00" !== (0, u.J)(P, k),
              W = (0, c.useMemo)(
                () =>
                  (null == n ? void 0 : n.orderLock) &&
                  (null == n ? void 0 : n.orderFees),
                [n]
              ),
              { hasEnoughFunds: F } = _({
                orderSummary: n,
                additionalFundsUSDC: g,
              }),
              M = !F && W,
              B = (0, c.useMemo)(() => {
                let e = Math.abs(Number(k));
                return !T || !P || e < (0, u.g)(P, k);
              }, [T, P, k]);
            (0, c.useEffect)(() => {
              if (L) return;
              M && (null == D || D(x.P.DEPOSIT_FUNDS));
              let e = setTimeout(() => {
                null == D || D(), null == S || S();
              }, 15e3);
              return () => clearTimeout(e);
            }, []);
            let U = () => {
              if (M) {
                O({ name: "USDC", value: j.tokenAddress.USDC });
                return;
              }
              if (l) {
                b({ title: l, message: "" });
                return;
              }
              v();
            };
            return m
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.Z, {
                      displayModalTypeTabs: !1,
                      selectedCurrency: I,
                      setSelectedCurrency: O,
                      modalTab: I ? "deposit" : void 0,
                    }),
                    (0, a.jsx)(p.Z, {
                      isOpen:
                        E &&
                        (A === x.P.DEPOSIT_FUNDS ||
                          A === x.P.SUBMIT_TO_AUCTION),
                      align: "end",
                      side: "top",
                      children: (0, a.jsx)("section", {
                        className: "tw-w-full",
                        children: M
                          ? (0, a.jsx)(r.Z, {
                              size: "lg",
                              className: y()(
                                "min-width-140 tw-w-full",
                                (!W || !F) && "-tw-mt-2"
                              ),
                              title: "Click to submit to Deposit",
                              onClick: U,
                              children: "Deposit",
                            })
                          : (0, a.jsx)(r.Z, {
                              className: y()("-tw-mt-2 tw-w-full", {
                                isValidConfiguration: "tw-mt-0",
                                hasEnoughFunds: "tw-mt-0",
                              }),
                              size: "lg",
                              title: "Click to submit to auction",
                              disabled: w || !R || !B,
                              onClick: U,
                              children: N || "Submit to Auction",
                            }),
                      }),
                    }),
                    (l
                      ? (0, a.jsxs)("div", {
                          className: i().balanceWarning,
                          children: [
                            (0, a.jsx)(o.Z, {}),
                            " ",
                            (0, a.jsx)("div", {
                              className: i().balanceText,
                              children: l,
                            }),
                          ],
                        })
                      : null) ||
                      (() => {
                        if (!n) return null;
                        let e = null;
                        return (
                          W
                            ? F || (e = "Insufficient Balance")
                            : (e = "Check Configuration"),
                          e
                            ? (0, a.jsxs)("div", {
                                className: i().balanceWarning,
                                children: [
                                  (0, a.jsx)(o.Z, {}),
                                  " ",
                                  (0, a.jsx)("div", {
                                    className: i().balanceText,
                                    children: e,
                                  }),
                                ],
                              })
                            : null
                        );
                      })(),
                  ],
                })
              : (0, a.jsx)(r.Z, {
                  size: "lg",
                  className: "min-width-140 tw-w-full",
                  title: "Click to Connect Wallet",
                  onClick: f,
                  children: "Connect Wallet",
                });
          };
      },
      88432: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return r;
          },
          g: function () {
            return l;
          },
        });
        var a = n(45338);
        let r = (e, t) => (0, a.uM)(l(e, t), "string", "USDC"),
          l = (e, t) => Math.abs(Number(e) + Number(t));
      },
      85088: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return i;
          },
        });
        var a = n(85893),
          r = n(5152);
        let l = n.n(r)()(
            async () =>
              (await Promise.all([n.e(544), n.e(2409)]).then(n.bind(n, 62409)))
                .WalletMultiButton,
            { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
          ),
          i = () => (0, a.jsx)(l, {});
      },
      79793: function (e, t, n) {
        "use strict";
        n.d(t, {
          V: function () {
            return N;
          },
        });
        var a = n(85893),
          r = n(67294),
          l = n(93967),
          i = n.n(l),
          s = n(10066),
          o = n(91838),
          c = n(37422),
          d = n(52867),
          u = n(59731),
          m = n(67859),
          f = n(65440),
          _ = n(97439),
          p = n.n(_),
          h = n(15741),
          x = n(92400),
          v = n(67253),
          y = n(47236),
          C = n(30202),
          T = n(67930),
          w = n(70757);
        let N = 180;
        t.Z = (e) => {
          let { item: t, showTutorial: n } = e,
            l = (0, C.NL)(),
            { ithacaSDK: _ } = (0, u.qr)(),
            { showToast: g } = (0, y.Z)(),
            [E, b] = (0, r.useState)(!1),
            [j, I] = (0, r.useState)(""),
            [O, A] = (0, r.useState)(!1),
            {
              timestamp: D,
              orderDate: S,
              withdrawalSlot: L,
              asset: P,
              auction: k,
              currency: R,
              amount: W,
              rawAmount: F,
              token: M,
            } = t,
            { currentStep: B } = (0, r.useContext)(h.OnboardingContext);
          return (
            (0, r.useEffect)(() => {
              let e = setInterval(() => {
                let t =
                  (0, m.Z)(new Date(1e3 * Number(D)), N).getTime() - Date.now();
                if (t <= 0) {
                  I("Estimated time until release 00:00"),
                    A(!0),
                    clearInterval(e);
                  return;
                }
                let n = ""
                  .concat(
                    String(Math.floor(t / 1e3 / 60)).padStart(2, "0"),
                    ":"
                  )
                  .concat(String(Math.floor((t / 1e3) % 60)).padStart(2, "0"));
                I("Estimated time until release ".concat(n));
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, [D]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: p().cell,
                  children: (0, s.m2)(S),
                }),
                (0, a.jsx)("div", {
                  className: p().cell,
                  children: (0, a.jsx)(o.Z, {
                    size: "sm",
                    icon: (0, w.XX)(P),
                    label: P,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: p().cell,
                  children:
                    (null == k ? void 0 : k.toLowerCase()) === "release"
                      ? "Withdraw"
                      : k,
                }),
                (0, a.jsx)("div", {
                  className: p().cell,
                  children: (0, a.jsx)(d.Z, {
                    size: "md",
                    amount: W,
                    symbol: (0, w.XX)(R),
                    currency: R,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: p().cell,
                  children: (0, a.jsx)("span", {
                    className: p().releaseInfo,
                    style: { display: "flex", justifyContent: "flex-start" },
                    children:
                      "Withdraw" === k
                        ? O
                          ? (0, a.jsx)("span", {
                              className: p().readyReleased,
                              children: "Funds are Ready to be Released",
                            })
                          : j
                        : (null == k ? void 0 : k.toLowerCase()) === "release"
                        ? "Released"
                        : (0, a.jsx)(a.Fragment, {}),
                  }),
                }),
                (0, a.jsx)(x.Z, {
                  isOpen:
                    B === v.P.WITHDRAWAL_RELEASE_FUNDS && "Withdraw" === k && n,
                  align: "end",
                  side: "bottom",
                  children: (0, a.jsx)("div", {
                    className: i()(p().cell, p().releaseButtonCell),
                    children:
                      "Withdraw" === k &&
                      (0, a.jsx)(c.Z, {
                        disabled: !O,
                        size: "sm",
                        title: "Click to release",
                        className: p().releaseButton,
                        onClick: async () => {
                          try {
                            b(!0),
                              await _.fundlock.release(M, Number(L), BigInt(F)),
                              g({
                                title: "Token Release Approved",
                                message:
                                  "Funds will be released to your connected wallet shortly.",
                              });
                          } catch (e) {
                            console.error(e);
                          } finally {
                            b(!1),
                              l.refetchQueries({
                                queryKey: [T.sk],
                                exact: !1,
                                type: "active",
                              });
                          }
                        },
                        children: E
                          ? (0, a.jsx)(f.Z, { type: "sm" })
                          : "Release",
                      }),
                  }),
                }),
              ],
            })
          );
        };
      },
      62582: function (e, t, n) {
        "use strict";
        n.d(t, {
          M$: function () {
            return m;
          },
          NE: function () {
            return f;
          },
          OS: function () {
            return g;
          },
          PC: function () {
            return x;
          },
          Q1: function () {
            return C;
          },
          Wc: function () {
            return y;
          },
          Yf: function () {
            return b;
          },
          eX: function () {
            return E;
          },
          i: function () {
            return v;
          },
          rG: function () {
            return w;
          },
          rk: function () {
            return N;
          },
          y6: function () {
            return T;
          },
        });
        var a = n(90639),
          r = n(75472),
          l = n.n(r),
          i = n(89734),
          s = n.n(i),
          o = n(18666),
          c = n(67930),
          d = n(27484),
          u = n.n(d);
        let m = (e, t) => {
            let n = Object.keys(e).map((n) => {
              let a = Object.keys(e[n].expiryPrices)[0],
                r = (0, o.p6)(n.toString(), o.Nn, o.KJ);
              return {
                expiry: n,
                tenor: r === c.gm ? "Next Auction" : r,
                currencyPair: a,
                settlementPrice: e[n].expiryPrices[a],
                payout: e[n].payoff[a],
                totalCollateral: e[n].totalCollateral[a],
                expandedInfo: e[n].positions.map((e) => {
                  var a;
                  let r = t.find((t) => t.contractId === e.contractId),
                    l = (0, o.p6)(n.toString(), o.Nn, o.KJ);
                  return {
                    tenor: l === c.gm ? "Next Auction" : l,
                    product: (null == r ? void 0 : r.payoff) || "",
                    strike: "".concat(
                      null !== (a = null == r ? void 0 : r.economics.strike) &&
                        void 0 !== a
                        ? a
                        : ""
                    ),
                    avgPrice: e.positionsAvgPrice,
                    quantity: e.positionsQty,
                  };
                }),
              };
            });
            return l()(
              n.filter((e) => e.expandedInfo.length > 0),
              ["expiry"],
              ["desc"]
            );
          },
          f = (e) =>
            e
              .split("_")
              .map((e) => e.charAt(0) + e.slice(1).toLowerCase())
              .join(" "),
          _ = (e) =>
            e
              .map((e) =>
                e.originalQty > 0
                  ? ((e.originalQty - e.remainingQty) / e.originalQty) * 100
                  : 0
              )
              .reduce((e, t) => e + t, 0) / e.length,
          p = (e) => Array.from(new Set(e)).filter((e) => "number" == typeof e),
          h = (e) => {
            let t = (0, o.p6)(e.toString(), o.Nn, o.KJ);
            return t == c.gm ? "Next Auction" : t;
          },
          x = (e, t) =>
            (function (e) {
              let t = [],
                n = new Map();
              for (let a of e) {
                let e = a.orderId;
                n.has(e)
                  ? n.get(e).details.unshift(...a.details)
                  : (t.push(a), n.set(e, a));
              }
              return t;
            })(e).map((e) => {
              var n, r, l;
              let i = new Set(),
                s = [],
                o = [];
              for (let t of e.details)
                i.add(t.side),
                  s.push(t.contractDto.economics.strike),
                  o.push(t.expiry);
              return {
                timeInForce: e.timeInForce,
                clientOrderId: e.orderId,
                orderDate: u()(e.revDate).format("DDMMMYY HH:mm"),
                currencyPair:
                  (null === (n = e.collateral) || void 0 === n
                    ? void 0
                    : n.currencyPair) || e.details[0].currencyPair,
                product: e.orderDescr,
                side: 1 === i.size ? Array.from(i)[0] : "",
                tenor: h(e.details[0].expiry),
                wethAmount:
                  null === (r = e.collateral) || void 0 === r
                    ? void 0
                    : r.underlierAmount,
                usdcAmount:
                  null === (l = e.collateral) || void 0 === l
                    ? void 0
                    : l.numeraireAmount,
                orderLimit: e.netPrice,
                orderStatus: e.orderStatus,
                fill: _(e.details),
                strikeGroup: p(s),
                expiryGroup: p(o).map((e) => h(e)),
                modelPrice: 0,
                expandedInfo: e.details.map((e) => ({
                  type: e.contractDto.payoff,
                  contractId: e.contractId,
                  side: e.side,
                  expiryDate: h(e.expiry),
                  expiryUnparsed: e.expiry,
                  size:
                    t === a.vj.HISTORY
                      ? e.thisFillQty || 0
                      : t === a.vj.LIVE || t === a.vj.PREVIEW_LIVE
                      ? e.remainingQty
                      : e.originalQty,
                  sizeCurrency: e.contractDto.economics.qtyCurrency,
                  strike: e.contractDto.economics.strike,
                  averageExecutionPrice: e.execPrice,
                })),
              };
            }),
          v = (e) =>
            e.orders
              ? e.orders.map((e) => {
                  var t, n, a, r;
                  let l = new Set();
                  for (let t of e.details) l.add(t.side);
                  return {
                    orderDate: (0, o.p6)(e.revDate, void 0, o.KJ),
                    currencyPair: e.details[0].currencyPair,
                    product: e.orderDescr,
                    tenor: (
                      null == e
                        ? void 0
                        : null === (n = e.details) || void 0 === n
                        ? void 0
                        : null === (t = n[0]) || void 0 === t
                        ? void 0
                        : t.expiry
                    )
                      ? (0, o.p6)(e.details[0].expiry.toString(), o.Nn, o.KJ)
                      : "",
                    side: 1 === l.size ? Array.from(l)[0] : "",
                    averageSize:
                      e.details.reduce((e, t) => {
                        var n;
                        return (
                          e +
                          (null !== (n = t.originalQty) && void 0 !== n ? n : 0)
                        );
                      }, 0) / e.details.length,
                    orderLimit: e.netPrice,
                    averageExecutionPrice:
                      e.details.reduce((e, t) => {
                        var n;
                        return (
                          e +
                          (null !== (n = t.execPrice) && void 0 !== n ? n : 0)
                        );
                      }, 0) / e.details.length,
                    type: e.details[0].contractDto.payoff,
                    expiryUnparsed:
                      (null == e
                        ? void 0
                        : null === (r = e.details) || void 0 === r
                        ? void 0
                        : null === (a = r[0]) || void 0 === a
                        ? void 0
                        : a.expiry) || 0,
                    strike: e.details[0].contractDto.economics.strike,
                  };
                })
              : [],
          y = (e, t) => {
            let n = e
              .map((e) => {
                if ("payoff" in e && "positionsQty" in e)
                  return {
                    tenor: (0, o.p6)(e.expiry.toString(), o.Nn, o.KJ),
                    expiry: e.expiry,
                    product: e.payoff,
                    strike: e.strike,
                    contractId: e.contractId,
                    quantity: e.positionsQty,
                    averagePrice: e.positionsAvgPrice,
                  };
                let n = t.find((t) => t.contractId === e.contractId);
                return n
                  ? {
                      tenor: n.economics.expiry
                        ? (0, o.p6)(n.economics.expiry.toString(), o.Nn, o.KJ)
                        : "",
                      expiry: n.economics.expiry,
                      product: n.payoff,
                      strike: n.economics.strike || 0,
                      contractId: n.contractId,
                      quantity: e.positionsQty,
                      averagePrice: e.positionsAvgPrice,
                    }
                  : null;
              })
              .filter((e) => null !== e);
            return s()(n, ["expiry", "strike"]);
          },
          C = (e) =>
            e.reduce((e, t) => {
              if (
                "FILLED" !== t.orderStatus &&
                "PARTIALLY_FILLED" !== t.orderStatus
              )
                return e;
              let n = t.details.reduce((e, t, n) => {
                var a;
                return {
                  ...e,
                  ["leg".concat(n + 1, "ContractId")]: t.contractId,
                  ["leg".concat(n + 1, "Payoff")]: t.contractDto.payoff,
                  ["leg".concat(n + 1, "Strike")]:
                    t.contractDto.economics.strike || "",
                  ["leg".concat(n + 1, "Side")]: t.side,
                  ["leg".concat(n + 1, "FilledQty")]:
                    t.originalQty - t.remainingQty,
                  ["leg".concat(n + 1, "Expiry")]: (0, o.p6)(
                    t.expiry.toString(),
                    o.Nn,
                    o.KJ
                  ),
                  ["leg".concat(n + 1, "ExecPrice")]:
                    null !== (a = null == t ? void 0 : t.execPrice) &&
                    void 0 !== a
                      ? a
                      : "",
                };
              }, {});
              return [
                ...e,
                {
                  orderId: t.orderId,
                  orderStatus: t.orderStatus,
                  netPrice: t.netPrice,
                  orderDate: u()(t.revDate).format("DDMMMYY HH:mm"),
                  orderDescr: t.orderDescr,
                  currencyPair: t.collateral.currencyPair,
                  underlyingCollateral: t.collateral.underlierAmount,
                  numeraireColalteral: t.collateral.numeraireAmount,
                  ...n,
                },
              ];
            }, []),
          T = (e) => {
            switch (e) {
              case a.vj.ORDER:
                return a.gw;
              case a.vj.PREVIEW_ORDER:
                return a.jN;
              case a.vj.LIVE:
                return a.W1;
              case a.vj.PREVIEW_LIVE:
                return a.HD;
              case a.vj.SETTLEMENTS:
                return a.Q5;
              case a.vj.HISTORY:
                return a.Kz;
              case a.vj.STAKES:
                return a.TT;
              default:
                return a.oX;
            }
          },
          w = (e, t, n) => (
            n
              ? e.sort((e, n) => Number(e[t]) - Number(n[t]))
              : e.sort((e, n) => Number(n[t]) - Number(e[t])),
            e
          ),
          N = (e, t, n) => (
            n
              ? e.sort((e, n) => Number(e[t]) - Number(n[t]))
              : e.sort((e, n) => Number(n[t]) - Number(e[t])),
            e
          ),
          g = (e) => Math.max(0, 350 - 50 * e),
          E = (e) => {
            switch (e) {
              case c.hc.GoodTillCancel:
                return "GTC";
              case c.hc.Day:
                return "DAY";
              case c.hc.ImmediateOrCancel:
                return "IOC";
              case c.hc.GoodTillDate:
                return "GTD";
              case c.hc.AtAuctionOnly:
                return "AO";
              default:
                return "";
            }
          },
          b = (e) => e.replace(/\s+\d+$/, "");
      },
      90639: function (e, t, n) {
        "use strict";
        var a, r;
        n.d(t, {
          GB: function () {
            return p;
          },
          HD: function () {
            return s;
          },
          Kt: function () {
            return f;
          },
          Kz: function () {
            return u;
          },
          Q5: function () {
            return d;
          },
          QL: function () {
            return _;
          },
          TT: function () {
            return m;
          },
          W1: function () {
            return i;
          },
          gw: function () {
            return o;
          },
          jN: function () {
            return c;
          },
          oX: function () {
            return l;
          },
          vj: function () {
            return a;
          },
        }),
          ((r = a || (a = {}))[(r.LIVE = 0)] = "LIVE"),
          (r[(r.ORDER = 1)] = "ORDER"),
          (r[(r.TRADE = 2)] = "TRADE"),
          (r[(r.HISTORY = 3)] = "HISTORY"),
          (r[(r.SETTLEMENTS = 4)] = "SETTLEMENTS"),
          (r[(r.PREVIEW_LIVE = 5)] = "PREVIEW_LIVE"),
          (r[(r.PREVIEW_ORDER = 6)] = "PREVIEW_ORDER"),
          (r[(r.STAKES = 7)] = "STAKES");
        let l = [
            { name: "Details", style: {} },
            { name: "Order Date", style: {} },
            { name: "Currency Pair", style: {} },
            { name: "Product", style: {} },
            { name: "Side", style: { justifyContent: "center" } },
            { name: "Strike", style: {} },
            { name: "Expiry Date", style: { justifyContent: "flex-end" } },
            {
              name: "Collateral Amount",
              style: { justifyContent: "flex-end" },
            },
            { name: "Order Limit", style: { justifyContent: "flex-end" } },
          ],
          i = [
            ...l,
            { name: "Type", style: { justifyContent: "center" } },
            { name: "Status", style: { justifyContent: "flex-start" } },
            { name: "Fill %", style: { justifyContent: "center" } },
            { name: "Cancel All", style: { justifyContent: "flex-end" } },
          ],
          s = [
            { name: "", style: {} },
            { name: "Order Date", style: {} },
            { name: "Pair", style: {} },
            { name: "Product", style: {} },
            { name: "Side", style: { justifyContent: "center" } },
            { name: "Strike", style: {} },
            { name: "Expiry Date", style: { justifyContent: "flex-start" } },
            {
              name: "Collateral Amount",
              style: { justifyContent: "flex-end" },
            },
            { name: "Order Limit", style: { justifyContent: "flex-end" } },
            { name: "Type", style: { justifyContent: "flex-start" } },
            { name: "Status", style: { justifyContent: "flex-end" } },
            { name: "Fill %", style: { justifyContent: "center" } },
            { name: "Cancel All", style: { justifyContent: "flex-end" } },
          ],
          o = [
            { name: "Details", style: {} },
            { name: "Expiry Date", style: { justifyContent: "" } },
            { name: "Product", style: { justifyContent: "" } },
            { name: "Strike", style: { justifyContent: "" } },
            { name: "Quantity", style: { justifyContent: "flex-end" } },
            { name: "Avg. Entry Price", style: { justifyContent: "flex-end" } },
            { name: "Model Price", style: { justifyContent: "flex-end" } },
            { name: "PNL", style: { justifyContent: "flex-end" } },
            { name: "Δ Delta", style: { justifyContent: "flex-end" } },
            { name: "ν Vega", style: { justifyContent: "flex-end" } },
            { name: "Γ Gamma", style: { justifyContent: "flex-end" } },
            { name: "θ Theta", style: { justifyContent: "flex-end" } },
            { name: "Close Position", style: { justifyContent: "flex-end" } },
          ],
          c = [
            { name: "Details", style: {} },
            { name: "Product", style: { justifyContent: "" } },
            { name: "Strike", style: { justifyContent: "" } },
            { name: "Qty", style: { justifyContent: "flex-end" } },
            { name: "Avg. Entry Price", style: { justifyContent: "flex-end" } },
            { name: "Model Price", style: { justifyContent: "flex-end" } },
            { name: "PNL", style: { justifyContent: "flex-end" } },
            { name: "Δ Delta", style: { justifyContent: "flex-end" } },
            { name: "ν Vega", style: { justifyContent: "flex-end" } },
            { name: "Γ Gamma", style: { justifyContent: "flex-end" } },
            { name: "θ Theta", style: { justifyContent: "flex-end" } },
            { name: "Close Position", style: { justifyContent: "flex-end" } },
          ],
          d = [
            { name: "Details", style: {} },
            { name: "Expiry", style: { justifyContent: "flex-start" } },
            { name: "Currency Pair", style: { justifyContent: "flex-start" } },
            { name: "Settlement Price", style: { justifyContent: "flex-end" } },
            { name: "Payout", style: { justifyContent: "flex-end" } },
            {
              name: "Collateral Released",
              style: { justifyContent: "flex-end" },
            },
          ],
          u = [
            { name: "Details", style: {} },
            { name: "Order Date", style: {} },
            { name: "Currency Pair", style: {} },
            { name: "Product", style: {} },
            { name: "Side", style: {} },
            { name: "Strike", style: {} },
            { name: "Expiry", style: { justifyContent: "flex-end" } },
            {
              name: "Collateral Amount",
              style: { justifyContent: "flex-end" },
            },
            { name: "Model Price", style: { justifyContent: "flex-end" } },
            { name: "Price Traded", style: { justifyContent: "flex-end" } },
            { name: "", style: {} },
          ],
          m = [
            { name: "Stake Date", style: {} },
            { name: "Locked Until", style: {} },
            { name: "Amount", style: {} },
            { name: "Network", style: {} },
            { name: "Reward Multiplier", style: {} },
            { name: "IRR", style: {} },
            { name: "Expected Rewards*", style: {} },
          ],
          f = [
            { name: "", style: {} },
            {
              name: "Product",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            { name: "", style: {} },
            { name: "", style: {} },
            {
              name: "Side",
              style: { justifyContent: "center", alignItems: "flex-center" },
            },
            {
              name: "Strike",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Expiry Date",
              style: { justifyContent: "flex-end", alignItems: "flex-start" },
            },
            {
              name: "Size",
              style: { justifyContent: "flex-end", alignItems: "flex-end" },
            },
          ],
          _ = [
            { name: "", style: {} },
            {
              name: "Order date",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Currency Pair",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Product",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            { name: "Side", style: { alignItems: "flex-end" } },
            {
              name: "Expiry",
              style: { justifyContent: "flex-end", alignItems: "flex-end" },
            },
            {
              name: "",
              style: { justifyContent: "center", alignItems: "center" },
            },
            {
              name: "Order Limit",
              style: { justifyContent: "flex-end", alignItems: "flex-end" },
            },
            { name: "", style: {} },
          ],
          p = [
            { name: "", style: {} },
            {
              name: "Expiry",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Product",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Strike",
              style: { justifyContent: "flex-start", alignItems: "flex-start" },
            },
            {
              name: "Quantity",
              style: { justifyContent: "flex-end", alignItems: "flex-end" },
            },
            {
              name: "Average Price",
              style: { justifyContent: "flex-end", alignItems: "flex-end" },
            },
            { name: "", style: {} },
          ];
      },
      55975: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(39332),
          l = n(67294),
          i = n(80362),
          s = n(37422),
          o = n(92400),
          c = n(15741),
          d = n(52431),
          u = n(67253),
          m = n(3298),
          f = n(93967),
          _ = n.n(f),
          p = n(7712),
          h = n.n(p);
        t.Z = (e) => {
          let {
              tabs: t,
              className: n = "",
              activeTab: f,
              onChange: p,
              responsive: x = !0,
            } = e,
            v = (0, r.useRouter)(),
            y = (0, l.useCallback)(
              (e) => {
                e.forEach((e) => {
                  setTimeout(() => {
                    e.path && v.prefetch(e.path);
                  }, 200);
                });
              },
              [v]
            );
          (0, l.useEffect)(() => {
            y(t);
          }, [t, y]);
          let C = (0, i.Z)(m.oh),
            { currentStep: T } = (0, l.useContext)(c.OnboardingContext),
            w = (e) => (e === f ? h().isActive : ""),
            N = t.map((e) => ({ name: e.label, value: e.id })),
            g = N.find((e) => e.value === f),
            E = (e) => {
              let n = t.find((t) => t.id === e);
              n && (null == p || p(n.id), n.path && v.push(n.path));
            };
          return t && 0 !== t.length
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "tw-mb-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-6 max-sm:tw-flex-wrap",
                    children: [
                      x && C
                        ? (0, a.jsx)(d.Z, {
                            options: N,
                            value: g,
                            width: 190,
                            onChange: (e) => E(e),
                            type: "tablet",
                          })
                        : (0, a.jsx)(o.Z, {
                            isOpen:
                              T === u.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                              !!t.find((e) => "fundLockHistory" === e.id),
                            align: "start",
                            offset: 360,
                            side: "bottom",
                            children: (0, a.jsx)("div", {
                              className: _()(h().buttons, "!tw-my-0", n),
                              children: t.map((e) =>
                                (0, a.jsx)(
                                  s.Z,
                                  {
                                    onClick: (t) => {
                                      t.stopPropagation(),
                                        !e.disabled &&
                                          (null == p || p(e.id),
                                          e.path && v.push(e.path));
                                    },
                                    className: ""
                                      .concat(w(e.id), " ")
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
                        (0, a.jsx)("div", { id: "tabsPortal" }),
                    ],
                  }),
                  t.map(
                    (e) =>
                      e.id === f &&
                      (0, a.jsx)(
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
            : (0, a.jsx)("div", {
                className: h().tabs,
                children: "No tabs available.",
              });
        };
      },
      57153: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ro: function () {
            return a;
          },
          ko: function () {
            return l;
          },
          rV: function () {
            return r;
          },
          zI: function () {
            return i;
          },
        });
        let a = [
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
          r = [
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
          l = [
            { id: "referral", path: "/points/referral", label: "Referral" },
            { id: "profile", path: "/points/profile", label: "Profile" },
            { id: "history", path: "/points/history", label: "History" },
          ],
          i = function () {
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
      80362: function (e, t, n) {
        "use strict";
        var a = n(67294);
        t.Z = (e) => {
          let [t, n] = (0, a.useState)(!1),
            r = (0, a.useCallback)((e) => {
              e.matches ? n(!0) : n(!1);
            }, []);
          return (
            (0, a.useEffect)(() => {
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addEventListener("change", r),
                t.matches && n(!0),
                () => t.removeEventListener("change", r)
              );
            }, [e, r]),
            t
          );
        };
      },
      10066: function (e, t, n) {
        "use strict";
        n.d(t, {
          Oe: function () {
            return j;
          },
          Rd: function () {
            return m;
          },
          U9: function () {
            return u;
          },
          YG: function () {
            return f;
          },
          _4: function () {
            return y;
          },
          _S: function () {
            return w;
          },
          bK: function () {
            return p;
          },
          e4: function () {
            return h;
          },
          em: function () {
            return v;
          },
          f2: function () {
            return E;
          },
          lU: function () {
            return C;
          },
          lj: function () {
            return b;
          },
          m2: function () {
            return N;
          },
          oW: function () {
            return g;
          },
          ow: function () {
            return _;
          },
          up: function () {
            return x;
          },
          x0: function () {
            return T;
          },
        });
        var a = n(85893),
          r = n(67294),
          l = n(5716),
          i = n(108),
          s = n(77768),
          o = n.n(s),
          c = n(62582),
          d = n(70757);
        let u = (e, t) => (
            t
              ? e.sort(
                  (e, t) =>
                    new Date(e.orderDate).getTime() -
                    new Date(t.orderDate).getTime()
                )
              : e.sort(
                  (e, t) =>
                    new Date(t.orderDate).getTime() -
                    new Date(e.orderDate).getTime()
                ),
            e
          ),
          m = (e, t) => (
            t
              ? e.sort((e, t) => Number(e.orderLimit) - Number(t.orderLimit))
              : e.sort((e, t) => Number(t.orderLimit) - Number(e.orderLimit)),
            e
          ),
          f = (e, t) => (
            t
              ? e.sort((e, t) => Number(e.fill) - Number(t.fill))
              : e.sort((e, t) => Number(t.fill) - Number(e.fill)),
            e
          ),
          _ = (e, t) => (
            t
              ? e.sort((e, t) => e.orderStatus.localeCompare(t.orderStatus))
              : e.sort((e, t) => t.orderStatus.localeCompare(e.orderStatus)),
            e
          ),
          p = (e, t) => (
            t
              ? e.sort((e, t) => Number(e.modelPrice) - Number(t.modelPrice))
              : e.sort((e, t) => Number(t.modelPrice) - Number(e.modelPrice)),
            e
          ),
          h = (e, t) => (
            t
              ? e.sort(
                  (e, t) =>
                    new Date(e.tenor).getTime() - new Date(t.tenor).getTime()
                )
              : e.sort(
                  (e, t) =>
                    new Date(t.tenor).getTime() - new Date(e.tenor).getTime()
                ),
            e
          ),
          x = (e, t) =>
            0 == t.length
              ? e
              : e.filter(
                  (e) => t.includes(e.side.toUpperCase()) || "" === e.side
                ),
          v = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.includes((0, c.Yf)(e.product).toUpperCase())),
          y = (e, t) =>
            0 === t.length
              ? e
              : e.filter((e) =>
                  e.strikeGroup.some((e) =>
                    t.includes(e.toString().toUpperCase())
                  )
                ),
          C = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.some((t) => e.currencyPair.includes(t))),
          T = (e, t) => e.filter((e) => e.expiryGroup.some((e) => e === t)),
          w = (e, t) =>
            (0, a.jsx)(a.Fragment, {
              children:
                null == e
                  ? void 0
                  : e
                      .split("/")
                      .map((e, n) =>
                        (0, a.jsxs)(
                          r.Fragment,
                          {
                            children: [
                              (0, d.XX)(e),
                              !t && e,
                              0 === n &&
                                (0, a.jsx)("span", {
                                  className: o().dividerMargin,
                                  children: "/",
                                }),
                            ],
                          },
                          n
                        )
                      ),
            }),
          N = (e) => {
            let t = e.split(" "),
              n = t[0],
              r = t[1],
              l = t[2],
              i = t.length > 3 ? t[3] : "";
            return (0, a.jsxs)("div", {
              className: o().date,
              children: [
                (0, a.jsxs)("span", { children: [n, "\xa0", r, l] }),
                i && (0, a.jsx)("span", { className: o().time, children: i }),
              ],
            });
          },
          g = {
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          },
          E = (e) => [
            { label: "USDC", component: (0, d.XX)("USDC") },
            { label: e, component: (0, d.XX)(e) },
          ],
          b = ["Deposit", "Withdraw", "Release"],
          j = [
            { label: "Buy", component: (0, a.jsx)(l.Z, {}) },
            { label: "Sell", component: (0, a.jsx)(i.Z, {}) },
          ];
      },
      82834: function (e, t, n) {
        "use strict";
        n.d(t, {
          BB: function () {
            return L;
          },
          GV: function () {
            return W;
          },
          gb: function () {
            return M;
          },
        });
        var a = n(15615),
          r = n(94298),
          l = n(68597),
          i = n(82773),
          s = n(40520),
          o = n(50892),
          c = n(39893),
          d = n(38983),
          u = n(30731),
          m = n(98558),
          f = n(33981),
          _ = n(52493),
          p = n(26798),
          h = n(35699),
          x = n(21131),
          v = n(41749),
          y = n(85758),
          C = n(75691),
          T = n(43210),
          w = n(35194),
          N = n(54704),
          g = n(66403),
          E = n(98494),
          b = n(52961),
          j = n(7301),
          I = n(24543),
          O = n(86900),
          A = n(20448),
          D = n(94898);
        let S = "9577531e389c799d54896f39e80d7bb0";
        if (!S) throw Error("Environment variable PROJECT_ID is not set.");
        let L = (0, A.b)().id === T.y.id,
          P = [(0, A.b)(), T.y, w.F, N.d],
          k = [T.y, g.R, E.v, b.y, j.u, I.e],
          R = (e) => {
            let t = (() => {
              switch (e.id) {
                case g.R.id:
                  return "eth-mainnet";
                case T.y.id:
                  return "arb-mainnet";
                case E.v.id:
                  return "opt-mainnet";
                case b.y.id:
                  return "polygon-mainnet";
                case j.u.id:
                  return "base-mainnet";
                case I.e.id:
                  return "bnb-mainnet";
                case O.Z.id:
                  return "arb-sepolia";
                case w.F.id:
                  return "eth-sepolia";
                case N.d.id:
                  return "bnb-testnet";
                default:
                  return "".concat(e.name.toLowerCase(), "-mainnet");
              }
            })();
            return "https://arb.ithacaprotocol.io/api/rpc/".concat(t);
          },
          W = { appName: "Ithaca" },
          F = (0, a.a3)(
            [
              {
                groupName: "Recommended",
                wallets: [
                  i.P,
                  s.D,
                  o.c,
                  c.D,
                  d.b,
                  u.R,
                  m.J,
                  f.u,
                  _.P,
                  p.c,
                  h.h,
                  x.o,
                  v.u,
                  y.p,
                  C.a,
                ],
              },
            ],
            { appName: "Ithaca", projectId: S }
          ),
          M = (0, r._)({
            chains: L ? k : P,
            client(e) {
              let { chain: t } = e;
              return (0, D.e)({ chain: t, transport: (0, l.d)(R(t)) });
            },
            connectors: F,
          });
      },
      28618: function (e) {
        e.exports = { balance: "Balance_balance__p06z_" };
      },
      53561: function (e) {
        e.exports = {
          container: "CurrencyDisplay_container__s9jU_",
          sm: "CurrencyDisplay_sm__CWMyo",
          md: "CurrencyDisplay_md__EE5bU",
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
      6812: function (e) {
        e.exports = {
          receiveTitle: "ManageFundsModal_receiveTitle__ddU3T",
          receiveSubtitle: "ManageFundsModal_receiveSubtitle__ti76e",
          receiveDescription: "ManageFundsModal_receiveDescription__MhAQv",
          withdrawalInstructions:
            "ManageFundsModal_withdrawalInstructions__GQSST",
        };
      },
      63218: function (e) {
        e.exports = {
          platformWrapper: "OrderSummary_platformWrapper__G2nrW",
          balanceWarning: "OrderSummary_balanceWarning__4xSEU",
          balanceText: "OrderSummary_balanceText__tM2D0",
          walletStyles: "OrderSummary_walletStyles___ZvQB",
          orderWrapper: "OrderSummary_orderWrapper__OoDrs",
          submitButton: "OrderSummary_submitButton__lE8Pn",
        };
      },
      97439: function (e) {
        e.exports = {
          table: "TableFundLock_table__jiFRW",
          cell: "TableFundLock_cell__IRhul",
          releaseButtonCell: "TableFundLock_releaseButtonCell__7K4Sx",
          filter: "TableFundLock_filter___WGnr",
          sort: "TableFundLock_sort__970ss",
          filterDropdown: "TableFundLock_filterDropdown__a7ZO7",
          hide: "TableFundLock_hide__tklKs",
          clearAll: "TableFundLock_clearAll__kjh7J",
          selected: "TableFundLock_selected___yl1R",
          emptyTable: "TableFundLock_emptyTable__GCTRA",
          isOpacity: "TableFundLock_isOpacity__tAjzT",
          releaseButton: "TableFundLock_releaseButton__poxFV",
          readyReleased: "TableFundLock_readyReleased__i0fUS",
          releaseInfo: "TableFundLock_releaseInfo__EswfH",
        };
      },
      77768: function (e) {
        e.exports = {
          table: "TableOrder_table__I4nrv",
          row: "TableOrder_row___Llp9",
          isExpanded: "TableOrder_isExpanded__NvXWj",
          header: "TableOrder_header__mI0ku",
          cell: "TableOrder_cell__3IiHs",
          isClickable: "TableOrder_isClickable__IDEzA",
          cancelAllBtn: "TableOrder_cancelAllBtn__YXPRh",
          data: "TableOrder_data__eB70r",
          isOrder: "TableOrder_isOrder__G3Q7J",
          dropdown: "TableOrder_dropdown__xM_Ro",
          isActive: "TableOrder_isActive__gg5yZ",
          delete: "TableOrder_delete__NG2jN",
          currency: "TableOrder_currency__ezL6m",
          filter: "TableOrder_filter__4xZ1K",
          sort: "TableOrder_sort__iGiVu",
          date: "TableOrder_date__o_wi8",
          time: "TableOrder_time__nzQb_",
          filterDropdown: "TableOrder_filterDropdown__wxPHV",
          hide: "TableOrder_hide__mgNON",
          clearAll: "TableOrder_clearAll__7eNZo",
          selected: "TableOrder_selected__Hi8Vk",
          emptyTable: "TableOrder_emptyTable__zMn2c",
          isOpacity: "TableOrder_isOpacity__MaZhC",
          gridContainerTable: "TableOrder_gridContainerTable__qWD0C",
          cellContent: "TableOrder_cellContent__jQsej",
          cellContentExpanded: "TableOrder_cellContentExpanded__ukcWF",
          bolded: "TableOrder_bolded__PIGk9",
          tableRowExpanded: "TableOrder_tableRowExpanded__ktsTW",
          tableExpanderContainer: "TableOrder_tableExpanderContainer__9wdt2",
          separator: "TableOrder_separator__Z6Vmi",
          headerExpandedTable: "TableOrder_headerExpandedTable__2XUhf",
          gridRFQTable: "TableOrder_gridRFQTable__VS_6e",
          gridPreviewPositionsContainerTable:
            "TableOrder_gridPreviewPositionsContainerTable__FNh8y",
          gridContainerTableSettlements:
            "TableOrder_gridContainerTableSettlements__z5fDg",
          gridContainerTableLiveOrders:
            "TableOrder_gridContainerTableLiveOrders__5H1to",
          gridContainerTableLivePreviewOrders:
            "TableOrder_gridContainerTableLivePreviewOrders__s_kSG",
          gridContainerTableHistory:
            "TableOrder_gridContainerTableHistory__d30Rw",
          gridContainerTableStakes:
            "TableOrder_gridContainerTableStakes__1xGa7",
          dividerMargin: "TableOrder_dividerMargin__m1ToF",
          typePopover: "TableOrder_typePopover__Hy6Eq",
          typePopoverUnderline: "TableOrder_typePopoverUnderline__N835U",
        };
      },
      7712: function (e) {
        e.exports = {
          buttons: "Tabs_buttons__mOoD_",
          disableText: "Tabs_disableText__sTAGX",
          isActive: "Tabs_isActive__ggOgf",
        };
      },
    },
  ]);
