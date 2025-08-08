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
      (e._sentryDebugIds[t] = "b2b58c95-aa7c-4d46-b4e9-4df91df5fcf4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b2b58c95-aa7c-4d46-b4e9-4df91df5fcf4"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9156],
    {
      81234: function (e, t, n) {
        "use strict";
        var a,
          r,
          s = n(67294);
        function l() {
          return (l = Object.assign
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
        t.Z = function (e) {
          return s.createElement(
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
            a ||
              (a = s.createElement("rect", {
                width: 16,
                height: 16,
                fill: "#35333E",
                rx: 4,
              })),
            r ||
              (r = s.createElement("path", {
                stroke: "#fff",
                d: "M13 7s-1.002-1.366-1.817-2.18a4.5 4.5 0 1 0 1.141 4.43M13 7V5m0 2h-2",
              }))
          );
        };
      },
      91838: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(13812),
          s = n(59324),
          l = n.n(s);
        t.Z = (e) => {
          let { icon: t, label: n, size: s } = e,
            c = s ? l()[s] : "",
            i = (0, r.I)();
          return (0, a.jsxs)("div", {
            className: "assets--"
              .concat(i, " ")
              .concat(l().asset, " ")
              .concat(c)
              .trim(),
            children: [
              t,
              n && (0, a.jsx)("p", { className: l().label, children: n }),
            ],
          });
        };
      },
      74676: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(67294),
          s = n(27484),
          l = n.n(s),
          c = n(59731),
          i = n(39041),
          o = n.n(i),
          u = n(30202),
          d = n(88144),
          p = n(67930);
        t.Z = (e) => {
          let { hideHours: t } = e,
            { ithacaSDK: n } = (0, c.qr)(),
            s = (0, u.NL)(),
            { data: i, refetch: x } = (0, d.a)({
              queryKey: ["nextAuction"],
              enabled: !!n,
              staleTime: p.ol,
              queryFn: () => n.protocol.nextAuction(),
            }),
            f = (e) => {
              let t = l()(e),
                n = l()();
              return {
                hours: t.diff(n, "hour"),
                minutes: t.diff(n, "minute") % 60,
                seconds: t.diff(n, "second") % 60,
              };
            },
            [h, m] = (0, r.useState)({ hours: 0, minutes: 0, seconds: 0 }),
            _ = (0, r.useRef)(null),
            w = () => {
              x(), s.refetchQueries({ queryKey: ["spotPrices"], exact: !1 });
            };
          return (
            (0, r.useEffect)(() => {
              (!i || i < Date.now()) && w();
              let e = () => {
                m({ ...f(i || 0) }), (_.current = Date.now());
              };
              e();
              let t = setInterval(() => {
                let t = Date.now(),
                  n = _.current ? t - _.current : 1e3;
                (_.current = t),
                  m((t) => {
                    let { hours: a, minutes: r, seconds: s } = t,
                      l = 3600 * a + 60 * r + s;
                    return (l -= Math.round(n / 1e3)) <= 0
                      ? (w(), e(), f(i || 0))
                      : {
                          hours: (a = Math.floor(l / 3600)),
                          minutes: (r = Math.floor((l % 3600) / 60)),
                          seconds: (s = l % 60),
                        };
                  });
              }, 1e3);
              return () => clearInterval(t);
            }, [i, x, s]),
            (0, r.useEffect)(() => {
              i && m(f(i));
            }, []),
            (0, a.jsxs)("div", {
              className: o().countdownTimer,
              children: [
                t
                  ? null
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        h.hours.toString().padStart(2, "0"),
                        " ",
                        (0, a.jsx)("span", { children: "Hrs" }),
                        " ",
                        (0, a.jsx)("span", {
                          className: o().white,
                          children: ":",
                        }),
                        " ",
                      ],
                    }),
                h.minutes.toString().padStart(2, "0"),
                (0, a.jsx)("span", { children: "Mins" }),
                " ",
                (0, a.jsx)("span", { className: o().white, children: ":" }),
                " ",
                h.seconds.toString().padStart(2, "0"),
                " ",
                (0, a.jsx)("span", { children: "Secs" }),
              ],
            })
          );
        };
      },
      43417: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return E;
          },
        });
        var a = n(85893),
          r = n(67294),
          s = n(15922),
          l = n(32010),
          c = n(59731),
          i = n(30202),
          o = n(24514),
          u = n(80052),
          d = n(96752),
          p = n(21050),
          x = n(70757),
          f = n(91838),
          h = (e) => {
            let { selectedToken: t } = e;
            switch (t) {
              case "SOL":
              case "WSOL":
                return (0, a.jsx)(f.Z, {
                  icon: (0, x.XX)("SOL", "tw-size-5"),
                  label: "SOL",
                });
              default:
                return (0, a.jsx)(f.Z, {
                  icon: (0, x.XX)("ETH", "tw-size-5"),
                  label: "ETH",
                });
            }
          };
        let m = () => {
          let { underlyingCurrency: e } = (0, c.qr)(),
            t = (0, x.zC)(e),
            n = (e) => {
              "SOL" === e &&
                "SOL" !== t &&
                (window.location.href = "https://solana.ithacaprotocol.io"),
                "ETH" === e &&
                  "ETH" !== t &&
                  (window.location.href = "https://app.ithacaprotocol.io");
            };
          return (0, a.jsxs)(u.J2, {
            className: "tw-relative",
            children: [
              (0, a.jsxs)(u.O7, {
                className: "tw-flex ",
                children: [
                  (0, a.jsx)(h, { selectedToken: t }),
                  (0, a.jsx)(p.Z, { color: "#fff" }),
                ],
              }),
              (0, a.jsx)(u.Hi, {
                anchor: "bottom",
                className:
                  "tw-shadow-panel tw-z-10 tw-box-border tw-flex tw-flex-col tw-rounded-lg tw-bg-black-dark tw-backdrop-blur-[100px]",
                children: x.mr.map((e) => {
                  let { name: t, icon: r } = e;
                  return (0, a.jsxs)(
                    d.P,
                    {
                      onClick: () => n(t),
                      className:
                        "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-rounded-tl-lg tw-rounded-tr-lg tw-px-4 tw-py-3 tw-text-white hover:tw-text-ithaca-green-30 ",
                      children: [
                        r,
                        (0, a.jsx)("span", {
                          className: "tw-text-base tw-font-normal",
                          children: t,
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
            ],
          });
        };
        var _ = n(69448),
          w = () => {
            var e;
            let { underlyingCurrency: t } = (0, c.qr)(),
              { data: n } = (0, _.M)({ currency: t });
            return null !== (e = null == n ? void 0 : n.data.toFixed(1)) &&
              void 0 !== e
              ? e
              : "-";
          },
          g = n(87612),
          v = n(74676),
          b = n(93967),
          j = n.n(b),
          y = n(45338),
          N = n(67930),
          k = n(18666),
          C = n(51130),
          L = n.n(C);
        let E = (e) => {
          let {
              onExpiryChange: t,
              hideHours: n,
              expiryDropdownErrorMessage: u,
            } = e,
            d = (0, s.F)(),
            p = (0, i.NL)(),
            {
              currentExpiryDate: x,
              expiryList: f,
              setCurrentExpiryDate: h,
              auctionOngoing: _,
            } = (0, c.qr)(
              (0, l.N)((e) => ({
                currentExpiryDate: e.currentExpiryDate,
                expiryList: e.expiryList,
                setCurrentExpiryDate: e.setCurrentExpiryDate,
                auctionOngoing: e.auctionOngoing,
              }))
            ),
            b = (0, r.useMemo)(
              () =>
                f.map((e) => ({
                  label: (0, k.lV)(e.toString()),
                  value: e.toString(),
                })),
              [f]
            );
          return (0, a.jsxs)(o.Z, {
            classes: j()({ "gap-5": "phone" !== d, "gap-0": "phone" === d }),
            children: [
              (0, a.jsx)("div", {
                className: ""
                  .concat(L().currency__info, " ")
                  .concat(L().divider, " pr-12"),
                children: (0, a.jsx)(m, {}),
              }),
              (0, a.jsx)("div", {
                className: ""
                  .concat(L().currency__info, " ")
                  .concat(L().divider, " pr-8"),
                children: (0, a.jsx)(g.Z, {
                  hasDropdown: !0,
                  label: "Expiry Date",
                  valueList: b,
                  onChange: (e) => {
                    let n = (0, y.Dx)(e);
                    if (isNaN(n)) {
                      console.error("Invalid expiry date value: ".concat(e));
                      return;
                    }
                    n !== x &&
                      (null == t || t(),
                      h(n),
                      p.invalidateQueries({ queryKey: [N.L] }));
                  },
                  errorToastMessage: u,
                  value: (0, k.lV)(x.toString()),
                }),
              }),
              (0, a.jsx)("div", {
                className: "".concat(L().currency__info, " pr-12"),
                children: (0, a.jsx)(g.Z, {
                  label: (0, a.jsxs)(a.Fragment, {
                    children: [
                      "Next Auction",
                      " ",
                      (0, a.jsx)("span", {
                        className: j()("tw-text-xxs", {
                          "tw-italic tw-text-[#394050]": !1 === _,
                        }),
                        children: "( Auction Ongoing )",
                      }),
                    ],
                  }),
                  value: (0, a.jsx)(v.Z, { hideHours: n }),
                }),
              }),
              (0, a.jsx)("div", {
                className: L().currency__info,
                children: (0, a.jsx)(g.Z, {
                  label: "Next Auction Forward",
                  value: (0, a.jsx)(w, {}),
                }),
              }),
            ],
          });
        };
      },
      56267: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(81234),
          s = n(80546),
          l = n.n(s),
          c = n(45338),
          i = n(93967),
          o = n.n(i),
          u = n(59421),
          d = n(59731),
          p = n(9681),
          x = n(70757);
        t.Z = (e) => {
          let { isAlwaysInline: t } = e,
            { collateralSummary: n, refetchAll: s, isFetching: i } = (0, u.F)(),
            { delegatedWalletAddress: f, underlyingCurrency: h } = (0, d.qr)();
          return (0, a.jsxs)("div", {
            className: "tw-flex tw-flex-col tw-gap-1",
            children: [
              f &&
                (0, a.jsx)("div", {
                  children: (0, a.jsxs)("p", {
                    className:
                      "tw-text-right tw-text-xxs tw-text-ithaca-green-30",
                    children: ["Delegate Wallet Control Enabled ", (0, p.C)(f)],
                  }),
                }),
              (0, a.jsxs)("div", {
                className: o()(l().fundlockContainer, {
                  [l().alwaysInLine]: t,
                }),
                children: [
                  (0, a.jsx)("span", {
                    className: l().title,
                    children: "Available Balance",
                  }),
                  (0, a.jsxs)("div", {
                    className: l().valueContainer,
                    children: [
                      (0, x.XX)("USDC"),
                      (0, a.jsx)("span", {
                        className: l().currency,
                        children: "USDC",
                      }),
                      (0, a.jsx)("span", {
                        className: l().value,
                        children: (0, c.uM)(
                          Number(n.USDC.availableCollateral),
                          "string",
                          "USDC",
                          2
                        ),
                      }),
                      (0, x.XX)(h),
                      (0, a.jsx)("span", {
                        className: l().currency,
                        children: h,
                      }),
                      (0, a.jsx)("span", {
                        className: l().value,
                        children: (0, c.uM)(
                          Number(n[h].availableCollateral),
                          "string",
                          h,
                          2
                        ),
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => {
                          s();
                        },
                        className:
                          "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                        children: (0, a.jsx)(r.Z, {
                          className: o()({ "tw-animate-spin": i }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      },
      87612: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var a = n(85893),
          r = n(67294);
        let s = [
          { label: "8 Oct 23", value: "8 Oct 23" },
          { label: "17 Oct 23", value: "17 Oct 23" },
          { label: "24 Oct 23", value: "24 Oct 23" },
          { label: "30 Oct 23", value: "30 Oct 23" },
        ];
        var l = n(16795),
          c = n(71610),
          i = n.n(c),
          o = n(57345),
          u = n(18666),
          d = n(47236),
          p = (e) => {
            let {
                label: t,
                value: n,
                valueList: c = s,
                defaultValue: p = s[0].value,
                subValue: x,
                hasDropdown: f = !1,
                onChange: h,
                errorToastMessage: m,
              } = e,
              { showErrorToast: _ } = (0, d.Z)(),
              [w, g] = (0, r.useState)(!1),
              [v, b] = (0, r.useState)(n || p);
            (0, r.useEffect)(() => {
              b(n || p);
            }, [n, p]);
            let j = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
              let e = (e) => {
                j.current && !j.current.contains(e.target) && g(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, l.M)(() => {
                w && g(!1);
              });
            let y = () => {
                g(!w);
              },
              N = (e) => {
                b((0, u.lV)(e)), g(!1), h && h(e);
              };
            return (0, a.jsxs)("div", {
              title: m,
              onClick: () => {
                if (f) {
                  if (null == m ? void 0 : m.length) {
                    _({ title: m, message: "" });
                    return;
                  }
                  y();
                }
              },
              className: ""
                .concat(i().labelValue, " ")
                .concat(f ? i().labelDropdown : ""),
              ref: j,
              children: [
                (0, a.jsxs)("div", {
                  className: i().contentWrapper,
                  children: [
                    (0, a.jsx)("span", { className: i().label, children: t }),
                    (0, a.jsxs)("span", {
                      className: i().value,
                      children: [
                        v,
                        x &&
                          (0, a.jsx)("span", {
                            className: i().subValue,
                            children: x,
                          }),
                      ],
                    }),
                  ],
                }),
                f &&
                  (0, a.jsxs)("div", {
                    className: ""
                      .concat(i().dropdown, " ")
                      .concat(w ? i().isActive : ""),
                    children: [
                      (0, a.jsx)(o.Z, {}),
                      w &&
                        (0, a.jsx)("ul", {
                          className: i().dropdownMenu,
                          children: c.map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                className: ""
                                  .concat(i().dropdownItem, " ")
                                  .concat(v === e.value ? i().selected : ""),
                                onClick: () => N(e.value),
                                dangerouslySetInnerHTML: { __html: e.label },
                              },
                              e.value
                            )
                          ),
                        }),
                    ],
                  }),
              ],
            });
          };
      },
      92505: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(9008),
          s = n.n(r);
        t.Z = () =>
          (0, a.jsxs)(s(), {
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
      9681: function (e, t, n) {
        "use strict";
        n.d(t, {
          C: function () {
            return a;
          },
        });
        let a = (e) => {
          if (e.length <= 2) return e;
          if (e.length <= 8)
            return "".concat(e[0], "...").concat(e[e.length - 1]);
          let t = e.slice(0, 4),
            n = e.slice(-4);
          return "".concat(t, "...").concat(n);
        };
      },
      59324: function (e) {
        e.exports = {
          asset: "Asset_asset__ysARy",
          label: "Asset_label__1JzpL",
          sm: "Asset_sm__72NCs",
          xs: "Asset_xs__nHR73",
        };
      },
      39041: function (e) {
        e.exports = {
          countdownTimer: "CountdownTimer_countdownTimer__4g8iP",
          white: "CountdownTimer_white__szeiM",
        };
      },
      51130: function (e) {
        e.exports = {
          currency__info: "currency_currency__info__XWfz0",
          divider: "currency_divider__NlKFs",
        };
      },
      80546: function (e) {
        e.exports = {
          fundlockContainer: "fundlock_fundlockContainer__O57_w",
          title: "fundlock_title__n1Nhi",
          value: "fundlock_value__VTgha",
          currency: "fundlock_currency__AA9zR",
          valueContainer: "fundlock_valueContainer__yEriW",
          alwaysInLine: "fundlock_alwaysInLine__J_IaC",
        };
      },
      71610: function (e) {
        e.exports = {
          labelValue: "LabelValue_labelValue__MPqNz",
          label: "LabelValue_label__nJgDl",
          labelDropdown: "LabelValue_labelDropdown__a4d6t",
          contentWrapper: "LabelValue_contentWrapper__asqsS",
          value: "LabelValue_value__gh1B3",
          subValue: "LabelValue_subValue__Sn0qJ",
          dropdown: "LabelValue_dropdown__omVcV",
          isActive: "LabelValue_isActive__pWerB",
          dropdownMenu: "LabelValue_dropdownMenu__oUXW5",
          selected: "LabelValue_selected__WxchN",
          dropdownItem: "LabelValue_dropdownItem___U2Qk",
        };
      },
    },
  ]);
