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
      (e._sentryDebugIds[t] = "4e0741cd-ec6a-4c14-a9cb-420b6b2dbc53"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4e0741cd-ec6a-4c14-a9cb-420b6b2dbc53"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9816, 6656],
    {
      27531: function (e, t, r) {
        "use strict";
        var i = r(85893);
        t.Z = () =>
          (0, i.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, i.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      69737: function (e, t, r) {
        "use strict";
        var i = r(85893);
        t.Z = () =>
          (0, i.jsx)("svg", {
            width: "10",
            height: "2",
            viewBox: "0 0 10 2",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M9 1L1 1",
              stroke: "white",
              strokeWidth: "1.2",
              strokeLinecap: "round",
            }),
          });
      },
      46656: function (e, t, r) {
        "use strict";
        r.r(t);
        var i = r(85893),
          a = r(93967),
          n = r.n(a),
          l = r(67294),
          s = r(43495),
          o = r(51526),
          c = r(73935),
          d = r(37422),
          u = r(65440),
          m = r(27531),
          x = r(3274),
          h = r.n(x);
        let p = {
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
            title: r,
            onCloseModal: a,
            onSubmitOrder: x,
            isLoading: v,
            isOpen: w,
            hideFooter: f,
            className: j,
            headerContainerClassName: b = "",
            showCloseIcon: g = !0,
          } = e;
          (0, l.useEffect)(() => {
            w
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && a();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [w, a]);
          let y = (0, i.jsx)(s.E.div, {
            className: n()(h().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => a(),
            children: (0, i.jsxs)(s.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: n()(
                h().modal,
                j,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: p,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, i.jsxs)("div", {
                  className: n()(h().modalHeader, "tw-px-6 tw-py-4", b),
                  children: [
                    (0, i.jsx)("h4", {
                      className: n()(
                        h().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: r,
                    }),
                    g
                      ? (0, i.jsx)(d.Z, {
                          onClick: a,
                          className: h().buttonClose,
                          title: "Click to close modal",
                          children: (0, i.jsx)(m.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: n()(
                    h().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !f && x
                      ? (0, i.jsx)("div", {
                          className: h().modalFooter,
                          children: (0, i.jsx)(d.Z, {
                            className: n()(h().confirmButton, {
                              [h().buttonLoading]: v,
                            }),
                            onClick: x,
                            title: "Click to confirm",
                            children: v ? (0, i.jsx)(u.Z, {}) : "Confirm",
                          }),
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
          return w && document.body
            ? c.createPortal(
                (0, i.jsx)(o.M, { initial: !0, mode: "wait", children: y }),
                document.body
              )
            : null;
        };
      },
      55986: function (e, t, r) {
        "use strict";
        var i = r(85893),
          a = r(93967),
          n = r.n(a),
          l = r(69824),
          s = r(52867),
          o = r(77125),
          c = r(15922),
          d = r(24514),
          u = r(13880),
          m = r(45338),
          x = r(63218),
          h = r.n(x),
          p = r(25811),
          v = r(88432),
          w = r(59421),
          f = r(45323),
          j = r(72696),
          b = r(59731),
          g = r(70757);
        let y = (e) => {
          let { asContainer: t, children: r } = e,
            a = (0, c.F)();
          return t
            ? (0, i.jsx)(u.Z, {
                margin: "'br-20 p-20 ".concat("desktop" === a ? "" : "mt-16"),
                children: r,
              })
            : (0, i.jsx)(i.Fragment, { children: r });
        };
        t.Z = (e) => {
          var t, r, a, u;
          let {
              orderSummary: x,
              onlyProtiftableOrders: N = !1,
              isSubmitButtonDisabled: _ = !1,
              submitAuction: k,
              error: C,
              asContainer: S = !0,
              comboPrice: L,
              setComboPrice: Z,
              modelPrice: M = 0,
            } = e,
            { collateralSummary: D } = (0, w.F)(),
            { underlyingCurrency: F } = (0, b.qr)(),
            P = null == x ? void 0 : x.order.totalNetPrice,
            U =
              ((null == x
                ? void 0
                : null === (t = x.orderLock) || void 0 === t
                ? void 0
                : t.underlierAmount) || 0) - D[F].orderValue,
            T =
              ((null == x
                ? void 0
                : null === (r = x.orderLock) || void 0 === r
                ? void 0
                : r.numeraireAmount) || 0) - D.USDC.orderValue,
            A = null == x ? void 0 : x.order.totalNetPrice,
            I =
              null == x
                ? void 0
                : null === (a = x.orderFees) || void 0 === a
                ? void 0
                : a.numeraireAmount,
            B =
              null == x
                ? void 0
                : null === (u = x.orderFeesLocked) || void 0 === u
                ? void 0
                : u.numeraireAmount,
            {
              showAuctionModal: E,
              setShowAuctionModal: W,
              tradingPageTab: O,
            } = (0, b.xc)(),
            z = (0, c.F)(),
            V = Number(A) > 0;
          return (0, i.jsx)("div", {
            className: "tw-flex tw-flex-1 tw-flex-col tw-justify-end",
            children: (0, i.jsxs)(y, {
              asContainer: S,
              children: [
                !S &&
                  (0, i.jsxs)("div", {
                    className: "tw-flex tw-justify-between",
                    children: [
                      (0, i.jsx)("h3", {
                        className: "mb-12 mt-10",
                        children: "Order Summary",
                      }),
                      (0, i.jsx)(j.Z, {
                        size: "sm",
                        rightLabel: "Confirmation Modal",
                        defaultState: E ? "right" : "left",
                        onChange: (e) => W("right" === e),
                      }),
                    ],
                  }),
                (0, i.jsxs)(d.Z, {
                  direction:
                    "desktop" === z
                      ? "row-space-between"
                      : "column-space-between",
                  gap: "desktop" !== z ? "gap-16" : "gap-6",
                  children: [
                    S &&
                      (0, i.jsx)("h3", {
                        className: "mb-0 lg:tw-self-center ".concat(
                          "desktop" !== z && "full-width"
                        ),
                        children: "Order Summary",
                      }),
                    (0, i.jsx)("div", {
                      className: n()(
                        h().orderWrapper,
                        "tw-mt-1 lg:tw-self-start"
                      ),
                      children: (0, i.jsx)(d.Z, {
                        direction:
                          "desktop" === z ? "column" : "row-space-between",
                        gap: "gap-6",
                        children: Z
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("h5", { children: "Combo Price" }),
                                (0, i.jsx)(f.Z, {
                                  type: "number",
                                  icon: (0, i.jsx)(o.Z, {}),
                                  value: L,
                                  width: 100,
                                  containerClassName: "tw-h-6 tw-py-1",
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return Z(t.value);
                                  },
                                }),
                                (0, i.jsxs)("span", {
                                  className:
                                    "tw-text-xxs tw-italic tw-text-ithaca-white-60",
                                  children: ["Model Price: ", (0, m.uM)(M)],
                                }),
                              ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("h5", { children: "Order Limits" }),
                                (0, i.jsx)(s.Z, {
                                  amount: (0, m.uM)(
                                    Math.abs(Number(P)),
                                    "string",
                                    "USDC"
                                  ),
                                  symbol: (0, i.jsx)(o.Z, {}),
                                  currency: "USDC",
                                }),
                              ],
                            }),
                      }),
                    }),
                    (0, i.jsxs)(d.Z, {
                      direction:
                        "desktop" === z ? "column" : "row-space-between-start",
                      classes: "lg:tw-self-start tw-mt-1",
                      gap: "tw-gap-1",
                      children: [
                        (0, i.jsx)("h5", {
                          className: "tw-self-start",
                          children: "Collateral Requirement",
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)(d.Z, {
                            direction: "desktop" === z ? "row" : "column",
                            gap: "gap-10",
                            children: [
                              (0, i.jsx)(s.Z, {
                                amount: (0, m.uM)(
                                  Math.max(Number(U), 0),
                                  "string",
                                  F
                                ),
                                symbol: (0, g.XX)(F),
                                className: "tw-font-semibold",
                                currency: F,
                              }),
                              (0, i.jsx)(s.Z, {
                                amount: (0, m.uM)(
                                  Math.max(Number(T), 0),
                                  "string",
                                  "USDC"
                                ),
                                symbol: (0, i.jsx)(o.Z, {}),
                                currency: "USDC",
                                size: "md",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: h().platformWrapper,
                      children: (0, i.jsxs)(d.Z, {
                        direction:
                          "desktop" === z ? "column" : "row-space-between",
                        classes: n()("tw-text-end lg:tw-self-start", {
                          "-tw-mt-4": S,
                        }),
                        gap: "gap-6",
                        children: [
                          (0, i.jsx)("h5", { children: "Expected Fee" }),
                          (0, i.jsx)(s.Z, {
                            amount: (0, m.uM)(Number(I), "string", "USDC"),
                            symbol: (0, i.jsx)(o.Z, {}),
                            currency: "USDC",
                            className: "tw-text-ithaca-white-60",
                            size: "md",
                          }),
                          (0, i.jsxs)("span", {
                            className:
                              "tw-text-xxs tw-italic tw-text-ithaca-white-60",
                            children: [
                              "Locked Fee Amount: ",
                              (0, m.uM)(Number(B), "string", "USDC"),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(d.Z, {
                      direction:
                        "desktop" === z ? "column" : "row-space-between",
                      classes: "lg:tw-self-start tw-mt-1",
                      gap: "tw-gap-1",
                      children: [
                        (0, i.jsx)("h5", { children: "Total Price" }),
                        (0, i.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-gap-x-1 ",
                          children: [
                            (0, i.jsx)("span", {
                              className:
                                "tw-mt-[2px] tw-text-xs tw-text-ithaca-white-60",
                              children: V ? "Pay" : "Receive",
                            }),
                            (0, i.jsx)(s.Z, {
                              amount: A ? (0, v.J)(A, I) : "-",
                              symbol: (0, i.jsx)(o.Z, {}),
                              currency: "USDC",
                              className: n()({
                                "!tw-text-ithaca-red-20": V,
                                "!tw-text-ithaca-green-30": !V,
                              }),
                              size: "md",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(d.Z, {
                      direction: "column",
                      classes: "lg:tw-self-center",
                      children: (0, i.jsx)(l.Z, {
                        children: (e) => {
                          let {
                            connected: t,
                            openConnectModal: r,
                            openAccountModal: a,
                          } = e;
                          return (0, i.jsxs)("div", {
                            className: "tw-space-y-5",
                            children: [
                              "dynamic-option-strategies" === O &&
                                (0, i.jsx)(j.Z, {
                                  size: "sm",
                                  rightLabel: "Confirmation Modal",
                                  defaultState: E ? "right" : "left",
                                  onChange: (e) => W("right" === e),
                                }),
                              (0, i.jsx)(p.Z, {
                                error: C,
                                isSubmitButtonDisabled: _,
                                onlyProtiftableOrders: N,
                                submitAuction: k,
                                openConnectModal: r,
                                openAccountModal: a,
                                connected: t,
                                orderSummary: x,
                              }),
                            ],
                          });
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      14227: function (e, t, r) {
        "use strict";
        var i = r(85893),
          a = r(24514),
          n = r(45338),
          l = r(77125),
          s = r(59421),
          o = r(52867),
          c = r(35475),
          d = r.n(c),
          u = r(59731),
          m = r(18666),
          x = r(70757);
        t.Z = (e) => {
          var t, r, c, h, p, v;
          let { auctionSubmission: w, orderSummary: f, isRFQ: j } = e,
            { collateralSummary: b } = (0, s.F)(),
            {
              currentExpiryDate: g,
              spotContract: y,
              underlyingCurrency: N,
            } = (0, u.qr)(),
            _ =
              ((null == f
                ? void 0
                : null === (t = f.orderLock) || void 0 === t
                ? void 0
                : t.underlierAmount) || 0) - b[N].orderValue,
            k =
              ((null == f
                ? void 0
                : null === (r = f.orderLock) || void 0 === r
                ? void 0
                : r.numeraireAmount) || 0) - b.USDC.orderValue,
            C =
              null == w
                ? void 0
                : null === (h = w.order) || void 0 === h
                ? void 0
                : null === (c = h.legs) || void 0 === c
                ? void 0
                : c.reduce((e, t) => e + (Number(t.quantity) || 0), 0),
            S = Array.from(
              new Set(
                null == w
                  ? void 0
                  : null === (v = w.order) || void 0 === v
                  ? void 0
                  : null === (p = v.legs) || void 0 === p
                  ? void 0
                  : p.map((e) => {
                      var t;
                      return e.contractId ===
                        (null == y ? void 0 : y.contractId)
                        ? "-"
                        : (0, m.lV)(
                            null !== (t = e.expiry) && void 0 !== t
                              ? t
                              : g.toString()
                          );
                    })
              )
            ),
            L = void 0 !== C ? Math.abs(C) : void 0,
            Z = Number(null == w ? void 0 : w.order.totalNetPrice) || 0;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", { className: "flexGrow", children: "Size" }),
                  (0, i.jsx)("div", {
                    className: d().valueWrapper,
                    children: (0, i.jsx)("span", {
                      className: d().amountLabel,
                      children: L ? (0, n.uM)(L) : "-",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow",
                    children: "Order Limit",
                  }),
                  (0, i.jsxs)("div", {
                    className: d().valueWrapper,
                    children: [
                      (0, i.jsx)("span", {
                        className: d().amountLabel,
                        children:
                          (0, n.uM)(j ? Z : Math.abs(Z), "string", "USDC") ||
                          "-",
                      }),
                      (0, i.jsx)(l.Z, {}),
                      (0, i.jsx)("span", {
                        className: d().currencyLabel,
                        children: "USDC",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow",
                    children: "Collateral Requirement",
                  }),
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: d().valueWrapper,
                        children: (0, i.jsx)(o.Z, {
                          amount: (0, n.uM)(
                            Math.max(Number(_), 0),
                            "string",
                            N
                          ),
                          symbol: (0, x.XX)(N),
                          currency: N,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: d().valueWrapper,
                        children: (0, i.jsx)(o.Z, {
                          amount: (0, n.uM)(
                            Math.max(Number(k), 0),
                            "string",
                            "USDC"
                          ),
                          symbol: (0, i.jsx)(l.Z, {}),
                          currency: "USDC",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow",
                    children: "Expiry Date",
                  }),
                  (0, i.jsx)("div", {
                    className: d().valueWrapper,
                    children: (0, i.jsx)("div", {
                      className:
                        "tw-flex tw-divide-x [&>span]:tw-px-1 [&>span]:tw-leading-none",
                      children: S.map((e, t) =>
                        (0, i.jsx)(
                          "span",
                          { className: d().amountLabel, children: e },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow",
                    children: "Expected Fee*",
                  }),
                  (0, i.jsxs)("div", {
                    className: d().valueWrapper,
                    children: [
                      (0, i.jsx)("span", {
                        className: d().amountLabel,
                        children: (null == f ? void 0 : f.orderFees)
                          ? (0, n.uM)(
                              Number(f.orderFees.numeraireAmount),
                              "string",
                              "USDC"
                            )
                          : "-",
                      }),
                      (0, i.jsx)(l.Z, {}),
                      (0, i.jsx)("span", {
                        className: d().currencyLabel,
                        children: "USDC",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                classes: "tw-italic tw-text-sm tw-text-ithaca-white-60",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow",
                    children: "Locked Fee Amount",
                  }),
                  (0, i.jsxs)("div", {
                    className: d().valueWrapper,
                    children: [
                      (0, i.jsx)("span", {
                        className: "",
                        children: (null == f ? void 0 : f.orderFeesLocked)
                          ? (0, n.uM)(
                              Number(f.orderFeesLocked.numeraireAmount),
                              "string",
                              "USDC"
                            )
                          : "-",
                      }),
                      (0, i.jsx)(l.Z, {}),
                      (0, i.jsx)("span", {
                        className: d().currencyLabel,
                        children: "USDC",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: d().divider }),
              (0, i.jsxs)(a.Z, {
                margin: "mb-16",
                children: [
                  (0, i.jsx)("h5", {
                    className: "flexGrow color-white",
                    children: "Total Premium",
                  }),
                  (0, i.jsxs)("div", {
                    className: d().valueWrapper,
                    children: [
                      (0, i.jsx)("span", {
                        className: d().amountLabel,
                        children:
                          ((null == f ? void 0 : f.orderFees) &&
                            (0, n.uM)(
                              Math.abs(
                                Number(
                                  null == w ? void 0 : w.order.totalNetPrice
                                ) + Number(f.orderFees.numeraireAmount)
                              ) || 0,
                              "string",
                              "USDC"
                            )) ||
                          "-",
                      }),
                      (0, i.jsx)(l.Z, {}),
                      (0, i.jsx)("span", {
                        className: d().currencyLabel,
                        children: "USDC",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      },
      28801: function (e, t, r) {
        "use strict";
        var i = r(85893),
          a = r(69776),
          n = r(59731),
          l = r(46656),
          s = r(83824),
          o = r(37422),
          c = r(14227),
          d = r(24620),
          u = r(13279),
          m = r(18666),
          x = r(93967),
          h = r.n(x),
          p = r(35475),
          v = r.n(p);
        t.Z = (e) => {
          let {
              isOpen: t,
              submitOrder: r,
              auctionSubmission: x,
              closeModal: p,
              positionBuilderStrategies: w,
              orderSummary: f,
              isRFQ: j,
            } = e,
            { unFilteredContractList: b } = (0, n.qr)(),
            g =
              null == f
                ? void 0
                : f.order.legs.map((e) => {
                    let t = b.find((t) => t.contractId === e.contractId);
                    if (!t) return null;
                    let r = (0, m.cK)(
                      "".concat(null == t ? void 0 : t.economics.expiry),
                      m.Nn
                    ).format(m.yJ);
                    return {
                      strike:
                        Number(null == t ? void 0 : t.economics.strike) || 0,
                      contractId: e.contractId,
                      expiry: r,
                      payoff: (0, u.e)(t.payoff),
                      position: Number(e.quantity),
                      side: e.side,
                    };
                  }),
            { portfolioGeeks: y } = (0, a.f)({
              positionsData:
                (null == g ? void 0 : g.filter((e) => null !== e)) || [],
            });
          return (0, i.jsx)(l.default, {
            title: "Submit to Auction",
            isOpen: t,
            hideFooter: !0,
            onCloseModal: () => p(!1),
            children: (0, i.jsxs)(i.Fragment, {
              children: [
                !!w.length && (0, i.jsx)(d.Z, { strategies: w, hideClear: !0 }),
                (0, i.jsx)(c.Z, {
                  auctionSubmission: x,
                  orderSummary: f,
                  isRFQ: j,
                }),
                (0, i.jsx)("div", {
                  className: "tw-rounded-md tw-border tw-border-rgba-white-20",
                  children: (0, i.jsx)(s.Z, { greeks: y }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "tw-pb-5 tw-pt-4 tw-font-roboto tw-text-xs tw-text-ithaca-white-60",
                  children:
                    "* This is a Fee ESTIMATE. The fee payable to the platform won't exceed 12.5% of premium spent for vanilla options.",
                }),
                (0, i.jsx)(o.Z, {
                  className: h()(v().confirmButton, "!tw-mb-0"),
                  onClick: () => {
                    x && r(x);
                  },
                  title: "Click to confirm",
                  children: "Confirm",
                }),
              ],
            }),
          });
        };
      },
      24620: function (e, t, r) {
        "use strict";
        var i = r(85893),
          a = r(58217),
          n = r(13090),
          l = r(37422),
          s = r(69737),
          o = r(90893),
          c = r.n(o),
          d = r(9386),
          u = r(45338),
          m = r(93967),
          x = r.n(m),
          h = r(18666);
        t.Z = (e) => {
          var t, r, o;
          let {
              strategies: m,
              removeRow: p,
              clearAll: v,
              hideClear: w = !1,
              tableClassName: f,
              showStrike: j = !0,
              headers: b,
            } = e,
            g =
              !!(null === (t = m[0]) || void 0 === t
                ? void 0
                : t.referencePrice) ||
              (null === (r = m[0]) || void 0 === r
                ? void 0
                : r.referencePrice) === 0,
            y = !!(null === (o = m[0]) || void 0 === o ? void 0 : o.leg.expiry),
            N = (e) => (0, h.lV)(e);
          return (0, i.jsxs)("div", {
            className: c().tableContainer,
            children: [
              (0, i.jsxs)("div", {
                className: x()(c().table, f),
                children: [
                  (0, i.jsx)("div", {
                    style: {
                      gridTemplateColumns: g
                        ? w
                          ? "repeat(8, minmax(0, 1fr))"
                          : "repeat(9, minmax(0, 1fr))"
                        : "repeat(6, minmax(0, 1fr))",
                    },
                    className: c().header,
                    children: (b || (y && g ? a.$T : g ? a.US : a.ev)).map(
                      (e, t) =>
                        (0, i.jsx)(
                          "div",
                          { className: c().cell, children: e },
                          t
                        )
                    ),
                  }),
                  m.length
                    ? m.map((e, t) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            style: {
                              gridTemplateColumns: g
                                ? w
                                  ? "repeat(8, minmax(0, 1fr))"
                                  : "repeat(9, minmax(0, 1fr))"
                                : "repeat(6, minmax(0, 1fr))",
                            },
                            className: c().row,
                            children: [
                              (0, i.jsx)("div", {
                                className: c().cell,
                                children: (0, i.jsxs)("div", {
                                  className: c().dot,
                                  children: [
                                    (0, i.jsx)(d.Z, {
                                      type: "leg".concat(t + 1),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: c().strategy,
                                      children:
                                        "NEXT_AUCTION" === e.payoff
                                          ? "Forward(Next Auction)"
                                          : "CURRENT" === e.payoff
                                          ? "Forward (".concat(
                                              N(e.leg.expiry),
                                              ")"
                                            )
                                          : "BinaryCall" === e.payoff
                                          ? "Digital Call"
                                          : "BinaryPut" === e.payoff
                                          ? "Digital Put"
                                          : e.payoff,
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: c().cell,
                                children: e.leg.expiry ? N(e.leg.expiry) : "",
                              }),
                              (0, i.jsx)("div", {
                                className: c().cell,
                                children: (0, n.U)(e.leg.side),
                              }),
                              (0, i.jsx)("div", {
                                className: c().cell,
                                children: e.leg.quantity,
                              }),
                              j && e.strike
                                ? (0, i.jsx)("div", {
                                    className: c().cell,
                                    children:
                                      "-" === e.strike ? "" : Number(e.strike),
                                  })
                                : (0, i.jsx)("p", {}),
                              (e.referencePrice || 0 === e.referencePrice) &&
                                (0, i.jsx)("div", {
                                  className: c().cell,
                                  children: (0, u.uM)(
                                    Number(e.referencePrice),
                                    "string",
                                    "USDC"
                                  ),
                                }),
                              !w &&
                                (0, i.jsx)("div", {
                                  className: c().cell,
                                  children: (0, i.jsx)(l.Z, {
                                    title: "Click to remove row",
                                    variant: "icon",
                                    onClick: () => p && p(t),
                                    children: (0, i.jsx)(s.Z, {}),
                                  }),
                                }),
                            ],
                          },
                          t
                        )
                      )
                    : (0, i.jsx)("div", {
                        className: c().emptyContainer,
                        children: "Please add a strategy.",
                      }),
                ],
              }),
              m.length > 0 &&
                !w &&
                (0, i.jsx)(l.Z, {
                  className: c().clearAll,
                  title: "Click to clear all",
                  onClick: v,
                  variant: "clear",
                  children: "Clear All",
                }),
            ],
          });
        };
      },
      58217: function (e, t, r) {
        "use strict";
        r.d(t, {
          $1: function () {
            return s;
          },
          $T: function () {
            return a;
          },
          TI: function () {
            return l;
          },
          US: function () {
            return i;
          },
          ev: function () {
            return n;
          },
        });
        let i = ["Type", "", "Side", "Size", "Strike", "Unit Price", ""],
          a = ["Type", "Expiry", "Side", "Size", "Strike", "Unit Price", ""],
          n = ["Type", "", "Side", "Size", "Strike"],
          l = [
            "Product",
            "",
            "Side",
            "Quantity",
            "Strike",
            "Average Price",
            "",
          ],
          s = [
            "Product",
            "",
            "Side",
            "Quantity",
            "Strike",
            "Average Price",
            "",
          ];
      },
      13090: function (e, t, r) {
        "use strict";
        r.d(t, {
          U: function () {
            return s;
          },
        });
        var i = r(85893),
          a = r(108),
          n = r(5716),
          l = () =>
            (0, i.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  d: "M7 13.2L7 16.8C7 17.4627 7.53726 18 8.2 18L11.8 18",
                  stroke: "white",
                  strokeOpacity: "0.2",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M19 10.8L19 7.2C19 6.53726 18.4627 6 17.8 6L14.2 6",
                  stroke: "white",
                  strokeOpacity: "0.2",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 3C7.5 2.72386 7.27614 2.5 7 2.5C6.72386 2.5 6.5 2.72386 6.5 3L6.5 5.5L4 5.5C3.72386 5.5 3.5 5.72386 3.5 6C3.5 6.27614 3.72386 6.5 4 6.5L6.5 6.5L6.5 9C6.5 9.27614 6.72386 9.5 7 9.5C7.27614 9.5 7.5 9.27614 7.5 9V6.5L10 6.5C10.2761 6.5 10.5 6.27614 10.5 6C10.5 5.72386 10.2761 5.5 10 5.5L7.5 5.5V3Z",
                  fill: "#4BB475",
                }),
                (0, i.jsx)("path", {
                  d: "M20.7969 18L15.9969 18",
                  stroke: "#FF3F57",
                  strokeLinecap: "round",
                }),
              ],
            });
        let s = (e) =>
          "+" === e || "BUY" === e
            ? (0, i.jsx)(n.Z, {})
            : "-" === e || "SELL" === e
            ? (0, i.jsx)(a.Z, {})
            : "" === e
            ? (0, i.jsx)(l, {})
            : "";
      },
      98315: function (e, t, r) {
        "use strict";
        r.d(t, {
          Zj: function () {
            return a;
          },
          v3: function () {
            return i;
          },
          wo: function () {
            return n;
          },
        });
        let i = (e, t) =>
            e.sort(
              (e, r) =>
                Math.abs(t - Number(e.value)) - Math.abs(t - Number(r.value))
            )[0].value,
          a = (e) => 100 * Math.round(e / 100),
          n = (e, t) => {
            let r = { barrierInStrikes: [], barrierOutStrikes: [] };
            if (!t) return r;
            let i = e.indexOf(t),
              a = Math.floor(e.length / 2),
              n = Math.floor(a / 2),
              l = { in: i + 1, out: i - 1 };
            for (let t = 0; t < a; t++)
              t < n
                ? r.barrierInStrikes.push(0)
                : (r.barrierInStrikes.push(e[l.in] || 0), l.in++);
            for (let t = 0; t < a; t++)
              t < n
                ? r.barrierOutStrikes.push(0)
                : (r.barrierOutStrikes.unshift(e[l.out] || 0), l.out--);
            return r;
          };
      },
      38291: function (e, t, r) {
        "use strict";
        r.d(t, {
          d: function () {
            return d;
          },
        });
        var i = r(27484),
          a = r.n(i),
          n = r(59731),
          l = r(45338),
          s = r(18666),
          o = r(59085),
          c = r(67294);
        let d = (e) => {
          let { unitPrice: t, strike: r, isCall: i, side: d, expiry: u } = e,
            {
              ithacaSDK: m,
              currentSpotPrice: x,
              underlyingCurrency: h,
            } = (0, n.qr)(),
            { unitPrice: p, isLoading: v } = (0, o.k)({
              isForward: !0,
              optionType: "Forward",
              expiryDate: u,
              strike: r,
              side: d,
              currency: h,
            }),
            w = (0, c.useMemo)(() => {
              if (!r || (0, l.E5)((0, l.Dx)(t))) return null;
              let e = a()(),
                n = (0, s.cK)(u.toString(), s.Nn).diff(e),
                o = m.calculation.impliedVolatility(
                  i,
                  (0, l.Dx)(p),
                  (0, l.Dx)(r),
                  a().duration(n).asYears(),
                  (0, l.Dx)(t)
                );
              return o ? 100 * o : null;
            }, [t, p, u, r, x, i, d, m]);
          return {
            iv: (0, c.useMemo)(
              () =>
                v || !w
                  ? "-"
                  : "IV ".concat(w > 10 ? w.toFixed(1) : w.toFixed(2), "%"),
              [v, w]
            ),
          };
        };
      },
      69776: function (e, t, r) {
        "use strict";
        r.d(t, {
          f: function () {
            return l;
          },
        });
        var i = r(88144),
          a = r(69881),
          n = r(67294);
        let l = (e) => {
          let { positionsData: t } = e,
            r = null == t ? void 0 : t.some((e) => "Invalid Date" === e.expiry),
            l = t.filter((e) => !!e.contractId),
            s = l.length > 0 && !r,
            { data: o, isLoading: c } = (0, i.a)({
              placeholderData: [],
              queryKey: ["positionRisk", t],
              queryFn: () =>
                (0, a.QI)({
                  positionsWithContract: l.map((e) => ({
                    strike: e.strike,
                    contractId: e.contractId,
                    expiry: e.expiry,
                    payoff: e.payoff,
                    position: "SELL" === e.side ? -1 * e.position : e.position,
                  })),
                }),
              enabled: s,
              select: (e) =>
                e.length
                  ? null == t
                    ? void 0
                    : t.map((t) => ({
                        ...t,
                        ...e.find((e) => e.OptionID === t.contractId),
                      }))
                  : [],
            });
          return {
            portfolioGeeks: (0, n.useMemo)(
              () =>
                null == o
                  ? void 0
                  : o.reduce(
                      (e, t) => {
                        var r, i, a, n;
                        return (
                          (e.delta =
                            e.delta +
                            (null !== (r = t.PositionDelta) && void 0 !== r
                              ? r
                              : 1)),
                          (e.gamma =
                            e.gamma +
                            (null !== (i = t.PositionGamma) && void 0 !== i
                              ? i
                              : 1)),
                          (e.vega =
                            e.vega +
                            (null !== (a = t.PositionVega) && void 0 !== a
                              ? a
                              : 1)),
                          (e.theta =
                            e.theta +
                            (null !== (n = t.PositionTheta) && void 0 !== n
                              ? n
                              : 1)),
                          e
                        );
                      },
                      { delta: 0, gamma: 0, vega: 0, theta: 0 }
                    ),
              [o]
            ),
            isLoading: c,
          };
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
      35475: function (e) {
        e.exports = {
          confirmButton: "SubmitModal_confirmButton__771P7",
          toggleWrapper: "SubmitModal_toggleWrapper__0240O",
          valueWrapper: "SubmitModal_valueWrapper__dDpPw",
          amountLabel: "SubmitModal_amountLabel__F4vNT",
          currencyLabel: "SubmitModal_currencyLabel__NV_YB",
          divider: "SubmitModal_divider__jJD7M",
        };
      },
      90893: function (e) {
        e.exports = {
          table: "TableStrategy_table__Zz1UR",
          tableContainer: "TableStrategy_tableContainer__e_DGz",
          header: "TableStrategy_header__3kUQm",
          cell: "TableStrategy_cell__sWx3s",
          row: "TableStrategy_row__Q1LP7",
          dot: "TableStrategy_dot__q4Wrj",
          clearAll: "TableStrategy_clearAll__fVzYG",
          strategy: "TableStrategy_strategy__UFZLp",
          emptyContainer: "TableStrategy_emptyContainer__e_gy6",
        };
      },
    },
  ]);
