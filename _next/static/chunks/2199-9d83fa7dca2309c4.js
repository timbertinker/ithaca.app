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
      (e._sentryDebugIds[t] = "9ca88c4f-3736-427e-83b4-7379b7a07b45"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9ca88c4f-3736-427e-83b4-7379b7a07b45"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2199],
    {
      67859: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return r;
          },
        });
        var s = a(63024),
          i = a(78450),
          n = a(50568);
        function r(e, t) {
          (0, n.Z)(2, arguments);
          var a = (0, s.Z)(t);
          return (0, i.Z)(e, 6e4 * a);
        }
      },
      43529: function (e, t, a) {
        "use strict";
        a.d(t, {
          T: function () {
            return c;
          },
        });
        var s = a(85893),
          i = a(67294),
          n = a(24514),
          r = a(89564),
          l = a.n(r);
        let c = (e) => {
          let {
            component: t,
            value: a,
            label: i,
            checked: r = !1,
            onChange: c,
            labelClassName: o,
            className: d,
            checkmarkClassName: u,
          } = e;
          return (0, s.jsxs)("label", {
            className: "".concat(l().container, " ").concat(d),
            children: [
              (0, s.jsx)("input", {
                type: "checkbox",
                onChange: () => {
                  c && c(null != a ? a : i, !r);
                },
                checked: r,
                className: u,
              }),
              (0, s.jsxs)(n.Z, {
                direction: "row-center",
                children: [t, (0, s.jsx)("p", { className: o, children: i })],
              }),
            ],
          });
        };
        t.Z = (e) => {
          let {
              component: t,
              label: a,
              checked: r = !1,
              clearCheckMark: c,
              onChange: o,
              labelClassName: d,
              className: u,
              checkmarkClassName: w,
            } = e,
            [m, x] = (0, i.useState)(r),
            p = (e) => {
              x(e.currentTarget.checked), o && o(a, e.currentTarget.checked);
            };
          return (
            (0, i.useEffect)(() => {
              c && x(!1);
            }, [c]),
            (0, s.jsxs)("label", {
              className: "".concat(l().container, " ").concat(u),
              children: [
                (0, s.jsx)("input", {
                  type: "checkbox",
                  onChange: (e) => p(e),
                  checked: m,
                  className: w,
                }),
                (0, s.jsxs)(n.Z, {
                  children: [
                    t,
                    " ",
                    (0, s.jsx)("p", { className: d, children: a }),
                  ],
                }),
              ],
            })
          );
        };
      },
      4389: function (e, t, a) {
        "use strict";
        var s = a(85893);
        t.Z = (e) => {
          let {
            className: t,
            onClick: a,
            bgColor: i = "white",
            fillColor: n = "#C5C5D9",
          } = e;
          return (0, s.jsxs)("svg", {
            onClick: a,
            className: t,
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V10C14 12.2091 12.2091 14 10 14H4C1.79086 14 0 12.2091 0 10V4Z",
                fill: i,
                fillOpacity: "0.3",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.90681 3.81592C4.63067 3.81592 4.40681 4.03978 4.40681 4.31592C4.40681 4.59206 4.63067 4.81592 4.90681 4.81592L8.38037 4.81592L3.13139 10.0649C2.93612 10.2602 2.93612 10.5767 3.13139 10.772C3.32665 10.9673 3.64323 10.9673 3.83849 10.772L9.09309 5.51741V9.00073C9.09309 9.27687 9.31695 9.50073 9.59309 9.50073C9.86923 9.50073 10.0931 9.27687 10.0931 9.00073L10.0931 4.31568C10.0931 4.03953 9.86923 3.81568 9.59309 3.81568C9.58784 3.81568 9.5826 3.81576 9.57738 3.81592L4.90681 3.81592Z",
                fill: n,
              }),
            ],
          });
        };
      },
      837: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return X;
          },
        });
        var s = a(85893),
          i = a(67294),
          n = a(93967),
          r = a.n(n),
          l = a(5019),
          c = a(61228),
          o = a(1958),
          d = a(15229),
          u = a(48120),
          w = a(48104),
          m = a(37422),
          x = a(9305),
          p = a(74676),
          h = a(52431),
          f = a(45323),
          g = a(87612),
          v = a(25811),
          N = a(96967),
          y = a(40526),
          A = a(15922),
          b = a(47236),
          j = a(59421),
          C = a(59731),
          S = a(36703),
          T = a(18182),
          E = a(70757),
          I = a(18666),
          O = a(45338),
          k = a(92402),
          D = a(66780),
          R = a(53227),
          _ = a(72249),
          L = a(43681),
          U = a(67277),
          P = a(91553),
          B = a(64088),
          F = a(69824),
          Y = a(13880);
        let G = (e) => {
            let {
                value: t,
                label: a,
                chartData: i,
                isSelected: n,
                onClick: l,
              } = e,
              c = (0, A.F)();
            return (0, s.jsx)(Y.Z, {
              className: "tw-flex tw-flex-1 tw-rounded-xl",
              children: (0, s.jsxs)("div", {
                tabIndex: 0,
                role: "button",
                className: r()(
                  "tw-w-full tw-flex-shrink-0 tw-cursor-pointer tw-space-y-4 tw-rounded-[inherit] tw-border tw-px-2 tw-py-4 tw-text-center",
                  n
                    ? "tw-border-ithaca-green-30 tw-text-white"
                    : "tw-border-transparent tw-text-ithaca-white-60"
                ),
                onClick: l,
                children: [
                  (0, s.jsx)("div", {
                    className: "tw-pointer-events-none tw-w-full",
                    children: (0, s.jsx)(x.Z, {
                      compact: !0,
                      showKeys: !1,
                      showPortial: !1,
                      chartData: i,
                      height: "phone" === c ? 48 : 64,
                      customDomain: { min: 0, max: 1 },
                      id: "".concat(t.toLowerCase(), "-compact-chart"),
                    }),
                  }),
                  (0, s.jsx)("div", { children: a }),
                ],
              }),
            });
          },
          Z = (e) => {
            let { marketOutlook: t, setMarketOutlook: a } = e,
              { currentExpiryDate: i } = (0, C.qr)(),
              n = [
                { value: y.WL.BULL, label: "Bull", chartData: (0, y.wO)(i) },
                { value: y.WL.RANGE, label: "Range", chartData: (0, y.Ue)(i) },
                { value: y.WL.BEAR, label: "Bear", chartData: (0, y.Cy)(i) },
              ];
            return (0, s.jsx)("div", {
              className:
                "tw-flex tw-max-w-full tw-gap-3 tw-px-0 tw-py-6 lg:tw-px-0",
              children: n.map((e) => {
                let { value: i, label: n, chartData: r } = e;
                return (0, s.jsx)(
                  G,
                  {
                    value: i,
                    label: n,
                    chartData: r,
                    isSelected: t === i,
                    onClick: () => a(i),
                  },
                  i
                );
              }),
            });
          };
        var M = a(20448),
          q = a(59085),
          W = a(58013),
          K = a(41664),
          H = a.n(K),
          V = a(4389),
          z = a(39332),
          X = (e) => {
            var t;
            let {
                marketOutlook: a,
                setMarketOutlook: n,
                baselineYield: Y,
                showInstructions: G,
                isContentVisible: K = !0,
                setStep: X,
              } = e,
              $ = (0, A.F)(),
              J = (0, z.useRouter)(),
              Q = (0, z.usePathname)(),
              {
                expiryList: ee,
                getContractsByExpiry: et,
                currentCurrencyPair: ea,
                spotPrices: es,
                currencyPrecision: ei,
                ithacaSDK: en,
                systemInfo: er,
                currentSpotPrice: el,
                underlyingCurrency: ec,
              } = (0, C.qr)(),
              [eo, ed] = (0, i.useState)(),
              { showOrderErrorToast: eu } = (0, b.Z)(),
              {
                collateralSummary: ew,
                showOrderConfirmationToastAndRefetchData: em,
              } = (0, j.F)(),
              ex =
                null === (t = ew.USDC) || void 0 === t
                  ? void 0
                  : t.availableCollateral,
              ep = (0, w.t)({ chainId: (0, M.b)().id }),
              [eh, ef] = (0, i.useState)([]),
              [eg, ev] = (0, i.useState)(""),
              [eN, ey] = (0, i.useState)(""),
              [eA, eb] = (0, i.useState)([]),
              [ej, eC] = (0, i.useState)([]),
              [eS, eT] = (0, i.useState)([]),
              [eE, eI] = (0, i.useState)("1"),
              [eO, ek] = (0, i.useState)(0),
              [eD, eR] = (0, i.useState)(0),
              [e_, eL] = (0, i.useState)("0"),
              [eU, eP] = (0, i.useState)("".concat(ee[0])),
              [eB, eF] = (0, i.useState)(""),
              [eY, eG] = (0, i.useState)(0),
              [eZ, eM] = (0, i.useState)(-1),
              [eq, eW] = (0, i.useState)(!1),
              eK = {
                [y.WL.RANGE]: 0.003,
                [y.WL.BULL]: 3e-6,
                [y.WL.BEAR]: 3e-6,
              },
              { unitPrice: eH, isLoading: eV } = (0, q.k)({
                isForward: !1,
                optionType: y.j6[a][0].payoff,
                expiryDate: Number(eU),
                strike: eg,
                side: y.j6[a][0].side,
                currency: ec,
              }),
              { unitPrice: ez, isLoading: eX } = (0, q.k)({
                isForward: !1,
                optionType: y.j6[a][1].payoff,
                expiryDate: Number(eU),
                strike: eN,
                side: y.j6[a][1].side,
                currency: ec,
              }),
              e$ = async (e) => {
                if (!ep) return;
                let t = ep.readContract({
                    address: N.U[ep.chain.id].aavePool,
                    abi: D.s,
                    functionName: "getReserveData",
                    args: [e],
                  }),
                  a = await ep.readContract({
                    address: er.fundlockAddress,
                    abi: (0, l.V)([
                      "function tokenStrategies(address token) external view returns(address)",
                    ]),
                    functionName: "tokenStrategies",
                    args: [e],
                  });
                if (!(0, c.E)(a, o.DR)) {
                  let e = ep.readContract({
                      address: a,
                      abi: R.b,
                      functionName: "maxManagingRatio",
                    }),
                    [s, i] = await Promise.all([t, e]);
                  eF(
                    (
                      Number(
                        (0, L.Fv)(
                          (0, U.G)({
                            rate: s.currentLiquidityRate.toString(),
                            duration: k.E,
                          }),
                          P.YL
                        )
                      ) *
                      Number((0, d.b)(i, 18)) *
                      100
                    ).toFixed(2)
                  );
                }
              },
              eJ = async (e, t, a) => {
                let { data: s } = await (0, S.hO)(e, a);
                if (!s) return;
                let i = s.query,
                  n = i / 100,
                  r = e === er.tokenAddress.USDC ? Number(t) : Number(t) * el;
                0 !== r && (eG(i), eM(((0.045 * n * 365) / r) * 100));
              };
            (0, i.useEffect)(() => {
              let e = ee.filter(
                (e) =>
                  (0, I.cK)("".concat(e), I.Nn).diff(new Date(), "day") >= 7
              );
              eP("".concat(e[0]));
            }, [ee]),
              (0, i.useEffect)(() => {
                let { payoff: e, strikeIndex: t } = y.j6[a][0],
                  { strikeIndex: s } = y.j6[a][1],
                  i = es[ea],
                  n = Object.values(
                    Object.keys(et(eU, e))
                      .map((e) => ({ name: e, value: e }))
                      .map((e) => e.name)
                  ),
                  r = n.sort(
                    (e, t) =>
                      Math.abs(i - parseFloat(e)) - Math.abs(i - parseFloat(t))
                  )[0],
                  l = n.filter(
                    (e) => Number(e) - i <= 400 && Number(e) - i >= -400
                  ),
                  c = l.sort().findIndex((e) => e === r),
                  o = c + t,
                  d = c + s;
                eQ(
                  l[o < 0 ? 0 : o >= l.length ? l.length - 1 : o],
                  l[d < 0 ? 0 : d >= l.length ? l.length - 1 : d],
                  l
                ),
                  ef(n),
                  eI("".concat(ex || 1));
              }, [ew, a]);
            let eQ = (e, t, a) => {
              eb(a.filter((e) => e !== t).sort()),
                eC(a.filter((t) => t !== e).sort()),
                ev(e),
                ey(t);
            };
            (0, i.useEffect)(() => {
              if (
                (console.log("#### START DEBUGGING #####"),
                console.log("amount", eE),
                console.log("strike1", eg),
                console.log("strike2", eN),
                console.log("airdropYield", eZ),
                console.log("currentAaveYield", eB),
                console.log("baselineYield", Y),
                console.log("isLoadingBuyLeg", eV),
                console.log("isLoadingSellLeg", eX),
                (0, O.E5)(Number(eE)) ||
                  (0, O.E5)(Number(eg)) ||
                  (0, O.E5)(Number(eN)) ||
                  (0, O.E5)(Number(eB)) ||
                  (0, O.E5)(Y) ||
                  eV ||
                  eX)
              )
                console.log(
                  "DEBUGGING: ERROR: Invalid input values. Please check the input values."
                );
              else {
                let { payoff: e, side: t } = y.j6[a][0],
                  { side: s } = y.j6[a][1],
                  i = et(eU, e),
                  n = [
                    { contractId: i[eg].contractId, quantity: "1", side: t },
                    { contractId: i[eN].contractId, quantity: "1", side: s },
                  ],
                  r = [
                    { ...i[eg], ...n[0], premium: (0, O.Dx)(eH) },
                    { ...i[eN], ...n[1], premium: (0, O.Dx)(ez) },
                  ],
                  l = Math.max(Number(eg), Number(eN)),
                  c = Math.min(Number(eg), Number(eN));
                eT((0, T.s)(r, { min: c - 300, max: l + 300 }, !0));
                let o = (0, I.cK)(eU, I.Nn).diff(new Date()) / 1e3 / k.E,
                  d =
                    (Number(eE) * ((Number(eB) / (100 - Y)) * o)) /
                    (1 + (Number(eB) / 100) * o);
                if (
                  (console.log("investmentAmount", d),
                  console.log("yearFrac", o),
                  console.log(
                    "(Number(amount) * ((Number(currentAaveYield) / 100 - baselineYield) * yearFrac)) = ",
                    Number(eE) * ((Number(eB) / 100 - Y) * o)
                  ),
                  console.log(
                    "(1 + (Number(currentAaveYield) / 100) * yearFrac) = ",
                    1 + (Number(eB) / 100) * o
                  ),
                  console.log(
                    "(Number(amount) * ((Number(currentAaveYield) / 100 - baselineYield) * yearFrac)) / (1 + (Number(currentAaveYield) / 100) * yearFrac) = ",
                    d
                  ),
                  console.log("#### END DEBUGGING #####"),
                  d < 0)
                ) {
                  eW(!0),
                    eR(0),
                    ek(0),
                    eL("0"),
                    console.log(
                      "ERROR: Investment amount is negative.Relation between Aave Yield and Min yield cannot be guaranteed."
                    );
                  return;
                }
                let u = Number(eE) - d,
                  w = (0, B.calculateNetPrice)(
                    n,
                    [(0, O.Dx)(eH), (0, O.Dx)(ez)],
                    ei.strike
                  ),
                  m = (Number(d) / Number(w)).toFixed(4);
                if (Number(m) < eK[a]) {
                  eW(!0),
                    console.log(
                      "ERROR: Trade size is too low. The chosen trade needs to cost less!"
                    );
                  return;
                }
                eW(!1);
                let x = (Number(eB) / 100) * u * o,
                  p =
                    (a === y.WL.RANGE ? 1 : Math.abs(Number(eg) - Number(eN))) *
                    (Number(d) / Number(w));
                eR(u + x - Number(eE)),
                  ek(x + p),
                  eL(
                    (((x + p) / o / Number(eE)) * 100 + Number(eZ)).toFixed(2)
                  ),
                  e0([
                    { contractId: i[eg].contractId, quantity: m, side: t },
                    { contractId: i[eN].contractId, quantity: m, side: s },
                  ]);
              }
            }, [eE, ew, eg, eN, eZ, eB, Y, eV, eX, a, eU, eH, ez, ei]);
            let e0 = async (e) => {
                let t = (0, B.calculateNetPrice)(
                    e,
                    [(0, O.Dx)(eH), (0, O.Dx)(ez)],
                    ei.strike
                  ),
                  a = {
                    clientOrderId: (0, B.createClientOrderId)(),
                    totalNetPrice: t,
                    legs: e,
                  };
                try {
                  let [e, t] = await Promise.all([
                    en.calculation.estimateOrderLockPositioned(a),
                    en.calculation.estimateOrderFeesExtended(a),
                  ]);
                  ed({
                    order: a,
                    orderLock: e,
                    orderFees: t.estimation,
                    orderFeesLocked: t.toBeLocked,
                  });
                } catch (e) {
                  ed({
                    order: a,
                    orderLock: null,
                    orderFees: null,
                    orderFeesLocked: null,
                  }),
                    console.error(
                      "Order estimation for position builder failed",
                      e
                    );
                }
              },
              e1 = async () => {
                if (eo)
                  try {
                    await en.orders.newOrder(
                      eo.order,
                      "Principal Protected ".concat(a)
                    ),
                      em(),
                      "/onboarding" === Q && J.push("/dashboard/trading");
                  } catch (e) {
                    eu(null == e ? void 0 : e.message),
                      console.error("Failed to submit order", e);
                  }
              };
            return (
              (0, i.useEffect)(() => {
                eJ(
                  er.tokenAddress.USDC,
                  ex.toString(),
                  (0, u.v)(ex.toString(), er.tokenDecimals.USDC).toString()
                );
              }, [ew, er]),
              (0, i.useEffect)(() => {
                e$(er.tokenAddress.USDC);
              }, [er]),
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    className: r()("tw-grid tw-w-full tw-max-w-full tw-py-2"),
                    children: [
                      (0, s.jsx)("div", {
                        className: "tw-text-white",
                        children: "Select Market Outlook",
                      }),
                      (0, s.jsx)("div", {
                        className: "",
                        children: (0, s.jsx)(Z, {
                          marketOutlook: a,
                          setMarketOutlook: n,
                        }),
                      }),
                      G &&
                        (0, s.jsxs)("div", {
                          className:
                            "tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                          children: [
                            (0, s.jsx)("div", {
                              children: "Earn Baseline Yield ",
                            }),
                            (0, s.jsx)("div", {
                              children:
                                "+ Leverage your Market Outlook to earn additional returns.",
                            }),
                          ],
                        }),
                    ],
                  }),
                  K &&
                    (0, s.jsxs)("div", {
                      className: "tw-space-y-6 tw-pt-2 lg:tw-space-y-5 ",
                      children: [
                        (0, s.jsx)("div", {
                          className: "tw-space-y-1",
                          children: (0, s.jsx)("div", {
                            className:
                              "tw-flex tw-flex-col tw-gap-5 lg:tw-flex-row lg:tw-items-start",
                            children: (0, s.jsxs)("div", {
                              className: "tw-space-y-2 tw-text-ithaca-white-60",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                  children: [
                                    (0, s.jsxs)("span", {
                                      children: [
                                        "Available Collateral on Ithaca :",
                                        " ",
                                        0 !== ex ? (0, O.uM)(ex, "USDC") : "-",
                                      ],
                                    }),
                                    " ",
                                    (0, E.XX)("USDC"),
                                    " ",
                                    (0, s.jsx)("span", { children: "USDC" }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "tw-flex tw-items-end tw-gap-2",
                                  children: [
                                    (0, s.jsx)(h.Z, {
                                      label: "Expiry Date",
                                      className: "tw-flex-grow",
                                      options: ee
                                        .filter(
                                          (e) =>
                                            (0, I.cK)("".concat(e), I.Nn).diff(
                                              new Date(),
                                              "day"
                                            ) >= 7
                                        )
                                        .map((e) => ({
                                          name: (0, I.p6)(
                                            e.toString(),
                                            I.Nn,
                                            I.KJ
                                          ),
                                          value: e.toString(),
                                        })),
                                      onChange: (e) => {
                                        eP(e);
                                      },
                                      value: {
                                        name: (0, I.p6)(
                                          eU.toString(),
                                          I.Nn,
                                          I.KJ
                                        ),
                                        value: eU.toString(),
                                      },
                                    }),
                                    (0, s.jsx)(f.Z, {
                                      label: "Amount",
                                      className: "tw-flex-grow",
                                      icon: (0, E.XX)("USDC"),
                                      value: eE,
                                      onChange: (e) => eI(e.target.value),
                                    }),
                                    (0, s.jsx)(m.Z, {
                                      title: "All",
                                      className: "tw-flex-shrink-0 tw-px-4",
                                      variant: "secondary",
                                      size: "sm",
                                      onClick: () => {
                                        eI(
                                          "".concat(ew.USDC.availableCollateral)
                                        );
                                      },
                                      children: "All",
                                    }),
                                    (0, s.jsx)(h.Z, {
                                      label: "Strike 1",
                                      className: "tw-flex-grow",
                                      options: eA.map((e) => ({
                                        name: e,
                                        value: e,
                                      })),
                                      onChange: (e) => {
                                        eQ(e, eN, eh);
                                      },
                                      value: { name: eg, value: eg },
                                    }),
                                    (0, s.jsx)(h.Z, {
                                      label: "Strike 2",
                                      className: "tw-flex-grow",
                                      options: ej.map((e) => ({
                                        name: e,
                                        value: e,
                                      })),
                                      onChange: (e) => {
                                        eQ(eg, e, eh);
                                      },
                                      value: { name: eN, value: eN },
                                    }),
                                  ],
                                }),
                                eq
                                  ? (0, s.jsxs)("div", {
                                      className:
                                        "tw-relative tw-mt-2 tw-flex tw-gap-1 tw-text-xs tw-text-[var(--red-20)]",
                                      children: [
                                        "Insufficient collateral for selected strategy,",
                                        " ",
                                        (0, s.jsx)("span", {
                                          className:
                                            "tw-cursor-pointer tw-underline",
                                          onClick: () =>
                                            null == X
                                              ? void 0
                                              : X(W.OnboardingStep.DEPOSIT),
                                          children:
                                            "deposit more funds in Step 1",
                                        }),
                                        " ",
                                        "or",
                                        " ",
                                        (0, s.jsxs)(H(), {
                                          href: "/trading/dynamic-option-strategies",
                                          className:
                                            "flex flex tw-items-end tw-gap-1 tw-underline",
                                          children: [
                                            (0, s.jsx)("span", {
                                              children: "start trading now",
                                            }),
                                            (0, s.jsx)(V.Z, {
                                              bgColor: "#ff3f57",
                                              fillColor: "#ff3f57",
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : Number(eE) > ex
                                  ? (0, s.jsxs)("div", {
                                      className:
                                        "tw-relative tw-mt-2 tw-flex tw-gap-1 tw-text-xs tw-text-[var(--red-20)]",
                                      children: [
                                        "Insufficient collateral for selected strategy,",
                                        " ",
                                        (0, s.jsx)("span", {
                                          className:
                                            "tw-cursor-pointer tw-underline",
                                          onClick: () =>
                                            null == X
                                              ? void 0
                                              : X(W.OnboardingStep.DEPOSIT),
                                          children:
                                            "deposit more funds in Step 1",
                                        }),
                                      ],
                                    })
                                  : void 0,
                                G &&
                                  (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                        children:
                                          "*You can use at any point the Available Collateral on Ithaca to trade",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                        children:
                                          "Yield below will only be earned on the remaining amount",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-gap-4 tw-py-2 lg:tw-flex-row",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                      children: (0, s.jsx)("span", {
                                        children: "Baseline Yield",
                                      }),
                                    }),
                                    G &&
                                      (0, s.jsxs)("div", {
                                        children: [
                                          "If",
                                          (0, E.XX)(
                                            ec,
                                            "tw-ml-0.5 tw-inline-flex"
                                          ),
                                          " @",
                                          " ",
                                          (0, I.p6)(eU.toString(), I.Nn, I.KJ),
                                          "<",
                                          eg > eN ? eN : eg,
                                        ],
                                      }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-lg  tw-text-white",
                                      children: [
                                        (100 * Number(Y) + Number(eZ)).toFixed(
                                          2
                                        ),
                                        "% APY",
                                      ],
                                    }),
                                    G &&
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                        children:
                                          "{Collateral Lending Yield ".concat(
                                            (100 * Y).toFixed(),
                                            "% + Airdrop}"
                                          ),
                                      }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                      children: [
                                        (0, s.jsx)("span", {
                                          children: (0, O.uM)(
                                            eD,
                                            "string",
                                            "USDC",
                                            3
                                          ),
                                        }),
                                        (0, E.XX)("USDC"),
                                        (0, s.jsx)("span", {
                                          children: "USDC",
                                        }),
                                        "+",
                                        (0, s.jsxs)("span", {
                                          children: [
                                            (
                                              (eY *
                                                (0, I.cK)(eU, I.Nn).diff(
                                                  new Date(),
                                                  "days"
                                                )) /
                                              100
                                            ).toFixed(3),
                                            " ",
                                            "ITHC",
                                          ],
                                        }),
                                        (0, s.jsx)(_.Z, {}),
                                        "*",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                      children: (0, s.jsx)("span", {
                                        children: "Max Potential Yield",
                                      }),
                                    }),
                                    G &&
                                      (0, s.jsx)("div", {
                                        children: (() => {
                                          switch (a) {
                                            case y.WL.RANGE:
                                              return (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                  (0, E.XX)(
                                                    ec,
                                                    "tw-ml-0.5 tw-inline-flex"
                                                  ),
                                                  " @",
                                                  " ",
                                                  (0, I.p6)(
                                                    eU.toString(),
                                                    I.Nn,
                                                    I.KJ
                                                  ),
                                                  ">",
                                                  eg > eN ? eN : eg,
                                                  " and <",
                                                  eg > eN ? eg : eN,
                                                ],
                                              });
                                            case y.WL.BULL:
                                              return (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                  (0, E.XX)(
                                                    ec,
                                                    "tw-ml-0.5 tw-inline-flex"
                                                  ),
                                                  " @",
                                                  " ",
                                                  (0, I.p6)(
                                                    eU.toString(),
                                                    I.Nn,
                                                    I.KJ
                                                  ),
                                                  ">",
                                                  eg > eN ? eg : eN,
                                                ],
                                              });
                                            case y.WL.BEAR:
                                              return (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                  (0, E.XX)(
                                                    ec,
                                                    "tw-ml-0.5 tw-inline-flex"
                                                  ),
                                                  " @",
                                                  " ",
                                                  (0, I.p6)(
                                                    eU.toString(),
                                                    I.Nn,
                                                    I.KJ
                                                  ),
                                                  "<",
                                                  eg > eN ? eN : eg,
                                                ],
                                              });
                                          }
                                        })(),
                                      }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-lg  tw-text-white",
                                      children: [
                                        Number(e_).toFixed(2),
                                        "% APY",
                                      ],
                                    }),
                                    G &&
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                        children:
                                          "{(Collateral Lending Yield ".concat(
                                            (100 * Y).toFixed(),
                                            "% + Strategy Yield) + Airdrop}"
                                          ),
                                      }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                      children: [
                                        (0, s.jsx)("span", {
                                          children: (0, O.uM)(
                                            eO,
                                            "string",
                                            "USDC",
                                            3
                                          ),
                                        }),
                                        (0, E.XX)("USDC"),
                                        (0, s.jsx)("span", {
                                          children: "USDC",
                                        }),
                                        "+",
                                        (0, s.jsxs)("span", {
                                          children: [
                                            (
                                              (eY *
                                                (0, I.cK)(eU, I.Nn).diff(
                                                  new Date(),
                                                  "days"
                                                )) /
                                              100
                                            ).toFixed(3),
                                            " ",
                                            "ITHC",
                                          ],
                                        }),
                                        (0, s.jsx)(_.Z, {}),
                                        "*",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            G &&
                              (0, s.jsxs)("div", {
                                className:
                                  "tw-py-1 tw-font-roboto tw-text-xs tw-text-ithaca-white-60",
                                children: [
                                  (0, s.jsx)("div", {
                                    children:
                                      "*APY subject to not using deposited amount as collateral for further trading.",
                                  }),
                                  (0, s.jsx)("div", {
                                    children:
                                      "**Yield estimated referencing 45M$ FDMV & indicative points to token conversion.",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "!-tw-mt-2 tw-w-full",
                          children: (0, s.jsx)(
                            x.Z,
                            {
                              isOnboarding: !0,
                              showKeys: !1,
                              chartData: eS,
                              height: 144,
                              minYield: (100 * Y + Number(eZ)).toFixed(2),
                              maxYield: e_,
                              customDomain: { min: 0, max: 1 },
                              id: "full-onboarding-chart",
                            },
                            $
                          ),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-6 md:tw-flex-row",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-1 tw-items-end tw-gap-2 md:tw-items-center",
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "tw-whitespace-nowrap tw-pb-[0.625rem] md:tw-pb-0",
                                  children: "Settlement in",
                                }),
                                (0, s.jsx)(g.Z, {
                                  label: "Next Auction",
                                  value: (0, s.jsx)(p.Z, {}),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "tw-flex tw-w-full tw-flex-1",
                              children: (0, s.jsx)(F.Z, {
                                children: (e) => {
                                  let {
                                    connected: t,
                                    openConnectModal: a,
                                    openAccountModal: i,
                                  } = e;
                                  return (0, s.jsx)("div", {
                                    className: "tw-relative tw-flex tw-flex-1",
                                    children: (0, s.jsx)(v.Z, {
                                      connected: t,
                                      openConnectModal: a,
                                      openAccountModal: i,
                                      isSubmitButtonDisabled: !1,
                                      submitAuction: e1,
                                      onlyProtiftableOrders: !1,
                                      orderSummary: eo,
                                    }),
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          };
      },
      96967: function (e, t, a) {
        "use strict";
        a.d(t, {
          U: function () {
            return n;
          },
        });
        var s = a(43210),
          i = a(86900);
        let n = {
          [s.y.id]: { aavePool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD" },
          [i.Z.id]: { aavePool: "0xBfC91D59fdAA134A4ED45f7B584cAf96D7792Eff" },
        };
      },
      40526: function (e, t, a) {
        "use strict";
        a.d(t, {
          FZ: function () {
            return r;
          },
          WL: function () {
            return n;
          },
          j6: function () {
            return j;
          },
          H7: function () {
            return N;
          },
          uK: function () {
            return A;
          },
          Cy: function () {
            return g;
          },
          ii: function () {
            return v;
          },
          xY: function () {
            return y;
          },
          wO: function () {
            return f;
          },
          AC: function () {
            return b;
          },
          Ue: function () {
            return h;
          },
        });
        var s,
          i,
          n,
          r,
          l = a(85893),
          c = a(25675),
          o = a.n(c),
          d = {
            src: "/_next/static/media/stories.9dc64fde.png",
            height: 836,
            width: 1740,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUZHSIiKy0bk+2IAAAAAnRSTlP+/qap3hAAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAVSURBVHicY2BkgAJGBgZGOAcZMAIAAI8ABunuy3UAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 4,
          },
          u = {
            src: "/_next/static/media/market.d937954f.png",
            height: 836,
            width: 1740,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUYGiEgMi4SFRsuGHhZAAAAAnRSTlP9/RSN3GkAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAWSURBVHicY2BkggAGRgYmBjADHTACAALoABwhC5ahAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 4,
          },
          w = {
            src: "/_next/static/media/dynamic-options.8d468269.png",
            height: 836,
            width: 1740,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUYGyEQExlc/h3TAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAAhOAAAITgBRZYxYAAAABNJREFUeJxjYAQDBjCAUkgMMAAAAQwACaTqCUUAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 4,
          },
          m = a(58013),
          x = a(18182),
          p = a(55638);
        ((s = n || (n = {})).RANGE = "Range"),
          (s.BULL = "Bull"),
          (s.BEAR = "Bear"),
          ((i = r || (r = {})).BULL = "Bull"),
          (i.BEAR = "Bear");
        let h = (e) =>
            (0, x.s)(
              [
                {
                  expiry: 2500,
                  payoff: "BinaryCall",
                  economics: { strike: 3e3, expiry: e },
                  quantity: "120",
                  side: "BUY",
                  premium: 100,
                },
                {
                  payoff: "BinaryCall",
                  economics: { expiry: e, strike: 3100 },
                  quantity: "120",
                  side: "SELL",
                  premium: 0,
                },
              ],
              { min: 2900, max: 3200 },
              !0
            ),
          f = (e) =>
            (0, x.s)(
              [
                {
                  payoff: "Call",
                  economics: { strike: 3300, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 2,
                },
                {
                  payoff: "Call",
                  economics: { strike: 3400, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
              ],
              { min: 2900, max: 3800 },
              !0
            ),
          g = (e) =>
            (0, x.s)(
              [
                {
                  payoff: "Put",
                  economics: { strike: 3200, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 2,
                },
                {
                  payoff: "Put",
                  economics: { strike: 3100, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
              ],
              { min: 2900, max: 3400 },
              !0
            ),
          v = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3200,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 3700,
              s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 2900;
            return (0, x.s)(
              [
                {
                  payoff: "Call",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 0,
                },
                {
                  payoff: "Call",
                  economics: { strike: a, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "BinaryCall",
                  economics: { strike: a, expiry: e },
                  quantity: "".concat(a - t),
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "Put",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "Put",
                  economics: { strike: s, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 0,
                },
              ],
              { min: s - 500, max: a + 500 }
            );
          },
          N = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3600,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 3100,
              s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 3900;
            return (0, x.s)(
              [
                {
                  payoff: "Put",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 0,
                },
                {
                  payoff: "Put",
                  economics: { strike: a, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "BinaryPut",
                  economics: { strike: a, expiry: e },
                  quantity: "".concat(t - a),
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "Call",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "Call",
                  economics: { strike: s, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 0,
                },
              ],
              { min: a - 500, max: s + 500 }
            );
          },
          y = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e3,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 3100;
            return (0, x.s)(
              [
                {
                  payoff: "Call",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 2,
                },
                {
                  payoff: "Call",
                  economics: { strike: a, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "BinaryCall",
                  economics: { strike: a, expiry: e },
                  quantity: "".concat(a - t),
                  side: "SELL",
                  premium: 0,
                },
              ],
              { min: t - 500, max: a + 500 },
              !0
            );
          },
          A = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e3,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 3100;
            return (0, x.s)(
              [
                {
                  payoff: "Put",
                  economics: { strike: a, expiry: e },
                  quantity: "1",
                  side: "BUY",
                  premium: 2,
                },
                {
                  payoff: "Put",
                  economics: { strike: t, expiry: e },
                  quantity: "1",
                  side: "SELL",
                  premium: 0,
                },
                {
                  payoff: "BinaryPut",
                  economics: { strike: t, expiry: e },
                  quantity: "".concat(a - t),
                  side: "SELL",
                  premium: 0,
                },
              ],
              { min: t - 500, max: a + 500 },
              !0
            );
          },
          b = (e) => {
            switch (e) {
              case m.TradeType.MARKET:
                return {
                  title: "Market",
                  description:
                    "Market offers pre-configured option strategies for beginners to begin their investment journey.",
                  image: (0, l.jsx)(o(), {
                    src: u,
                    alt: "Trade type",
                    className: "tw-w-full tw-object-contain",
                  }),
                };
              case m.TradeType.STORIES:
                return {
                  title: "Stories",
                  description:
                    "Stories offers pre-configured option strategies for beginners to begin their investment journey.",
                  image: (0, l.jsx)(o(), {
                    src: d,
                    alt: "Trade type",
                    className: "tw-w-full tw-object-contain",
                  }),
                };
              case m.TradeType.DYNAMIC_OPTIONS_STRATEGIES:
                return {
                  title: "Dynamic Options Strategies",
                  description:
                    "Market The Dynamic Strategies tab allows the user to conveniently select from a number of linear combinations and structured products with flexibility to make changes to customize each. pre-configured option strategies for beginners to begin their investment journey.",
                  image: (0, l.jsx)(o(), {
                    src: w,
                    alt: "Trade type",
                    className: "tw-w-full tw-object-contain",
                  }),
                };
            }
          },
          j = {
            Range: [
              {
                product: "digital-option",
                payoff: "BinaryCall",
                side: p.V.BUY,
                size: 100,
                strikeIndex: 0,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
              {
                product: "digital-option",
                payoff: "BinaryCall",
                side: p.V.SELL,
                size: 100,
                strikeIndex: 2,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
            ],
            Bull: [
              {
                product: "option",
                payoff: "Call",
                side: p.V.BUY,
                size: 1,
                strikeIndex: 1,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
              {
                product: "option",
                payoff: "Call",
                side: p.V.SELL,
                size: 1,
                strikeIndex: 2,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
            ],
            Bear: [
              {
                product: "option",
                payoff: "Put",
                side: p.V.BUY,
                size: 1,
                strikeIndex: 0,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
              {
                product: "option",
                payoff: "Put",
                side: p.V.SELL,
                size: 1,
                strikeIndex: -1,
                strike: "",
                linked: !0,
                contractId: 0,
                referencePrice: 0,
              },
            ],
          };
      },
      36703: function (e, t, a) {
        "use strict";
        a.d(t, {
          AR: function () {
            return u;
          },
          Lf: function () {
            return y;
          },
          Lv: function () {
            return o;
          },
          Qy: function () {
            return w;
          },
          RT: function () {
            return v;
          },
          Vd: function () {
            return g;
          },
          X_: function () {
            return b;
          },
          Xu: function () {
            return d;
          },
          Zo: function () {
            return m;
          },
          Zp: function () {
            return A;
          },
          _p: function () {
            return N;
          },
          fE: function () {
            return p;
          },
          hO: function () {
            return j;
          },
          p: function () {
            return x;
          },
          sk: function () {
            return f;
          },
          yp: function () {
            return h;
          },
        });
        var s = a(49321),
          i = a(15418),
          n = a(82649);
        let r = async (e) => {
            let { method: t = "POST", data: a, path: s, noCache: i = !1 } = e;
            try {
              let e = await (0, n.Sp)("POINTS_URL"),
                r = {
                  method: t,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json, text/plain, */*",
                    "Cache-Control": i ? "no-cache" : "",
                  },
                  ...(a && { body: JSON.stringify(a) }),
                },
                l = await fetch("".concat(e, "/").concat(s), r),
                c = await l.json();
              if (!l.ok) {
                let e = Error();
                throw ((e.name = c.name), (e.message = c.message), e);
              }
              return { data: c };
            } catch (e) {
              return { error: e };
            }
          },
          l = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = localStorage.getItem("ithaca.session");
            if (t) return JSON.parse(t);
            if (e) return "";
            throw Error("No session info");
          },
          c = async (e) => {
            let t = { walletAddress: l().ethAddress, referralCode: e };
            return await r({ data: t, path: "users/user" });
          },
          o = async function (e) {
            var t;
            let a =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s = l();
            console.debug("GetUserData");
            let n = await r({
              method: "GET",
              path: "users/user?walletAddress=".concat(s.ethAddress),
              noCache: !0,
            });
            if (
              !a &&
              n.data &&
              !Object.keys(
                null == n
                  ? void 0
                  : null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.user
              ).length
            ) {
              let { error: t } = await c(e);
              return t
                ? { error: t }
                : (e
                    ? i.Z.track("Referral wallet connect", { referralToken: e })
                    : i.Z.track("Wallet connect"),
                  await o(e));
            }
            return n;
          },
          d = async () => {
            let e = l();
            return await r({
              method: "GET",
              path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
            });
          },
          u = async () => {
            let e = l();
            return await r({
              method: "GET",
              path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
            });
          },
          w = async () => {
            let e = l();
            return await r({
              method: "GET",
              path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
            });
          },
          m = async (e) => {
            let t = l();
            return await r({
              method: "GET",
              path: "auth/discord/callback?token="
                .concat(e, "&walletAddress=")
                .concat(t.ethAddress),
            });
          },
          x = async () => {
            let e = l();
            return await r({
              method: "GET",
              path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
            });
          },
          p = async (e) => {
            let { displayName: t, isAvatar: a, signature: i } = e,
              n = {
                walletAddress: l().ethAddress,
                displayName: (0, s.U)(t) ? t.toLowerCase() : t,
                isAvatar: a,
                signature: i,
              };
            return await r({ method: "PUT", path: "users/user", data: n });
          },
          h = async (e) =>
            await r({
              method: "POST",
              path: "auth/farcaster/callback",
              data: e,
            }),
          f = async (e) => {
            let {
                page: t,
                pageLimit: a,
                sortField: s,
                sortType: i,
                filterBy: n,
              } = e,
              c = {
                walletAddress: l().ethAddress,
                page: t,
                pageSize: a,
                sortField: s,
                sortType: i,
                ...("All" === n ? {} : { type: n }),
              };
            return await r({ data: c, path: "rewards/rewardsHistory" });
          },
          g = async () => {
            let e = l();
            return await r({
              method: "GET",
              path: "badges/profile?walletAddress=".concat(e.ethAddress),
            });
          },
          v = async () => await r({ method: "GET", path: "badges/all" }),
          N = async (e) =>
            await r({
              method: "GET",
              path: "users/get-referrals?referralCode=".concat(e),
            }),
          y = async (e) =>
            await r({ method: "POST", path: "stats/leaderboard24hr", data: e }),
          A = async (e) =>
            await r({ method: "POST", path: "stats/leaderboard", data: e }),
          b = async (e) =>
            await r({
              method: "GET",
              path: "stats/user?walletAddress=".concat(e),
            }),
          j = async (e, t) =>
            await r({
              method: "GET",
              path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
            });
      },
      92402: function (e, t, a) {
        "use strict";
        a.d(t, {
          E: function () {
            return s;
          },
        });
        let s = 31536e3;
      },
      66780: function (e, t, a) {
        "use strict";
        a.d(t, {
          s: function () {
            return s;
          },
        });
        let s = [
          {
            inputs: [
              { internalType: "address", name: "asset", type: "address" },
            ],
            name: "getReserveData",
            outputs: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "data",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct DataTypes.ReserveConfigurationMap",
                    name: "configuration",
                    type: "tuple",
                  },
                  {
                    internalType: "uint128",
                    name: "liquidityIndex",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "currentLiquidityRate",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "variableBorrowIndex",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "currentVariableBorrowRate",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "currentStableBorrowRate",
                    type: "uint128",
                  },
                  {
                    internalType: "uint40",
                    name: "lastUpdateTimestamp",
                    type: "uint40",
                  },
                  { internalType: "uint16", name: "id", type: "uint16" },
                  {
                    internalType: "address",
                    name: "aTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "stableDebtTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "variableDebtTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "interestRateStrategyAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint128",
                    name: "accruedToTreasury",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "unbacked",
                    type: "uint128",
                  },
                  {
                    internalType: "uint128",
                    name: "isolationModeTotalDebt",
                    type: "uint128",
                  },
                ],
                internalType: "struct DataTypes.ReserveData",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];
      },
      53227: function (e, t, a) {
        "use strict";
        a.d(t, {
          b: function () {
            return s;
          },
        });
        let s = [
          {
            inputs: [],
            name: "maxManagingRatio",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "userYield",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ];
      },
      58013: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            OnboardingStep: function () {
              return c;
            },
            TradeType: function () {
              return l;
            },
            default: function () {
              return ex;
            },
          });
        var s,
          i,
          n,
          r,
          l,
          c,
          o = a(85893),
          d = a(67294),
          u = a(40526),
          w = a(92505),
          m = a(93967),
          x = a.n(m);
        let p = (e) => {
            switch (e) {
              case c.DEPOSIT:
                return 0;
              case c.CONFIG:
                return 1;
              default:
                return 0.5;
            }
          },
          h = (e) => {
            let { isActive: t, index: a } = e;
            return (0, o.jsx)("div", {
              className: x()(
                "tw-inline-flex tw-size-6 tw-items-center tw-justify-center tw-rounded-full",
                t
                  ? "tw-bg-ithaca-green-30 tw-text-ithaca-green-10"
                  : "tw-bg-ithaca-white-30"
              ),
              children: a,
            });
          };
        var f = (e) => {
            let { step: t } = e,
              a = p(t),
              s = t !== c.DEPOSIT,
              i = t === c.CONFIG;
            return (0, o.jsx)("div", {
              className:
                "tw-relative tw-isolate tw-flex tw-h-full tw-w-6 tw-flex-shrink-0",
              children: (0, o.jsxs)("div", {
                style: { "--step": a },
                className:
                  "tw-isolate tw-flex tw-h-[428px] tw-w-[1px] tw-flex-col tw-items-center tw-justify-between tw-bg-ithaca-white-30 tw-text-xs tw-font-bold before:tw-absolute before:-tw-z-10 before:tw-h-full before:tw-w-[1px] before:tw-origin-top before:tw-scale-y-[--step] before:tw-bg-ithaca-green-30 before:tw-transition-transform lg:tw-translate-y-20",
                children: [
                  (0, o.jsx)(h, { index: 1, isActive: !0 }),
                  (0, o.jsx)(h, { index: 2, isActive: s }),
                  (0, o.jsx)(h, { index: 3, isActive: i }),
                ],
              }),
            });
          },
          g = a(13880),
          v = (e) => {
            let {
              isYieldOff: t,
              currentAaveYield: a,
              airdropYield: s,
              setStep: i,
            } = e;
            return (0, o.jsx)(g.Z, {
              className: "tw-rounded-[20px] lg:tw-rounded-[30px]",
              children: (0, o.jsxs)("div", {
                onClick: () => i(c.DEPOSIT),
                className:
                  "tw-cursor-pointer tw-space-y-3 tw-p-4 tw-text-sm tw-text-white tw-transition-opacity hover:tw-opacity-80 lg:tw-space-y-4 lg:tw-p-6",
                children: [
                  (0, o.jsx)("div", {
                    className: "tw-text-lg tw-font-semibold lg:tw-text-xl",
                    children: "Step 1",
                  }),
                  (0, o.jsx)("div", {
                    className: "tw-h-[1px] tw-bg-rgba-white-20",
                  }),
                  (0, o.jsxs)("div", {
                    className: "tw-space-y-0.5",
                    children: [
                      (0, o.jsx)("div", {
                        className: "tw-text-base tw-font-semibold",
                        children: "Deposit",
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "tw-flex tw-items-center tw-gap-1.5 tw-text-xs lg:tw-text-sm",
                        children: [
                          "& Earn",
                          (0, o.jsxs)("div", {
                            className: "tw-flex tw-items-center tw-gap-1.5",
                            children: [
                              (0, o.jsx)("span", {
                                className: "tw-text-xl",
                                children: "{",
                              }),
                              (0, o.jsxs)("div", {
                                className: "tw-flex tw-flex-col tw-gap-0.5",
                                children: [
                                  (0, o.jsxs)("span", {
                                    className: x()(
                                      t && "tw-text-ithaca-white-60"
                                    ),
                                    children: [a, "% Collateral Lending"],
                                  }),
                                  (0, o.jsxs)("span", {
                                    children: [s, "% ITHC Airdrop"],
                                  }),
                                ],
                              }),
                              (0, o.jsx)("span", {
                                className: "tw-text-xl",
                                children: "}",
                              }),
                            ],
                          }),
                          "Yield",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          N = a(75922),
          y = a(15922),
          A = a(59421),
          b = (e) => {
            let {
                activeTab: t,
                marketOutlook: a,
                step: s,
                tabOptions: i,
                tradeType: n,
                handleTabChange: r,
                setStep: d,
              } = e,
              w = (0, y.F)(),
              { collateralSummary: m } = (0, A.F)();
            return "desktop" !== w && s === c.DEPOSIT
              ? null
              : (0, o.jsx)(g.Z, {
                  className: "tw-rounded-[20px] lg:tw-rounded-[30px]",
                  children: (0, o.jsxs)("div", {
                    onClick: (e) => {
                      e.stopPropagation(),
                        m.USDC.availableCollateral > 0 &&
                          (d(c.TRADE), r("Trade"));
                    },
                    className:
                      "tw-cursor-pointer tw-space-y-3 tw-p-4 tw-text-sm tw-text-ithaca-white-60 tw-transition-opacity hover:tw-opacity-80 lg:tw-space-y-4 lg:tw-p-6",
                    children: [
                      (0, o.jsx)("div", {
                        className: x()(
                          "tw-text-lg tw-font-semibold lg:tw-text-xl",
                          s !== c.DEPOSIT && "tw-text-white"
                        ),
                        children: "Step 2",
                      }),
                      (0, o.jsx)("div", {
                        className: "tw-h-[1px] tw-bg-rgba-white-20",
                      }),
                      (0, o.jsxs)("div", {
                        className: "tw-flex tw-flex-col tw-gap-2.5 tw-text-xs",
                        children: [
                          (0, o.jsx)(N.Z, {
                            name: "Trade tab",
                            optionClassName: "tw-text-center",
                            options: i,
                            selectedOption: t,
                            disabled: s == c.DEPOSIT,
                            onChange: (e) => r(e),
                          }),
                          (0, o.jsxs)("div", {
                            className:
                              "tw-flex tw-items-start tw-gap-2 tw-pb-0 lg:tw-text-sm [&>div]:tw-w-full [&>div]:tw-flex-grow",
                            children: [
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)("div", {
                                    className: x()(
                                      "tw-mb-0.5",
                                      "Strategies" == t
                                        ? "tw-text-white"
                                        : "tw-text-current"
                                    ),
                                    children: "Market Outlook",
                                  }),
                                  (0, o.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-divide-x-[1px] tw-divide-ithaca-white-30 tw-leading-none [&>div:not(:first-child)]:tw-pl-1",
                                    children: Object.values(u.WL).map((e) =>
                                      (0, o.jsx)(
                                        "div",
                                        {
                                          className: x()({
                                            "tw-text-current":
                                              e != a ||
                                              "Strategies" !== t ||
                                              s === c.DEPOSIT,
                                            "tw-text-white":
                                              "Strategies" === t && e == a,
                                          }),
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                children: Object.values(l).map((e) =>
                                  (0, o.jsx)(
                                    "div",
                                    {
                                      "data-active": "Trade" === t && e == n,
                                      className: x()("tw-text-current", {
                                        "tw-text-white":
                                          "Trade" === t && e == n,
                                        "tw-text-ithaca-white-30":
                                          s === c.DEPOSIT,
                                      }),
                                      children: e,
                                    },
                                    e
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                });
          },
          j = (e) => {
            let { step: t, setStep: a } = e,
              s = (0, y.F)(),
              { collateralSummary: i } = (0, A.F)();
            return "desktop" !== s && t !== c.CONFIG
              ? null
              : (0, o.jsx)(g.Z, {
                  className: "tw-rounded-[20px] lg:tw-rounded-[30px]",
                  children: (0, o.jsxs)("div", {
                    onClick: () => {
                      i.USDC.availableCollateral > 0 && a(c.CONFIG);
                    },
                    className: x()(
                      "tw-cursor-pointer tw-space-y-3 tw-p-4 tw-text-sm tw-opacity-80 tw-transition-opacity lg:tw-space-y-4 lg:tw-p-6",
                      t === c.CONFIG
                        ? "tw-text-white"
                        : "tw-text-ithaca-white-60"
                    ),
                    children: [
                      (0, o.jsx)("div", {
                        className: "tw-text-lg tw-font-semibold lg:tw-text-xl",
                        children: "Step 3",
                      }),
                      (0, o.jsx)("div", {
                        className: "tw-h-[1px] tw-bg-rgba-white-20",
                      }),
                      (0, o.jsxs)("div", {
                        className: "tw-space-y-2",
                        children: [
                          (0, o.jsx)("div", {
                            className: "tw-text-lg tw-font-semibold",
                            children:
                              "Principal Protected Strategies Configuration",
                          }),
                          (0, o.jsxs)("div", {
                            className: "tw-space-y-0.5",
                            children: [
                              (0, o.jsxs)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-divide-x-[1px] tw-divide-current tw-leading-none [&>span:not(:first-child)]:tw-pl-1",
                                children: [
                                  (0, o.jsx)("span", { children: "Expiry" }),
                                  (0, o.jsx)("span", { children: "Amount" }),
                                  (0, o.jsx)("span", { children: "Range" }),
                                ],
                              }),
                              (0, o.jsx)("div", { children: "Target Yield" }),
                              (0, o.jsx)("div", {
                                className: "tw-text-ithaca-white-60",
                                children: "Submit to Auction",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                });
          },
          C = a(37422),
          S = a(43529),
          T = a(52431),
          E = a(45323),
          I = a(65440),
          O = a(19543),
          k = a(47236),
          D = a(59731),
          R = a(45338),
          _ = a(20448),
          L = a(61228),
          U = a(14504),
          P = a(15229),
          B = a(48120),
          F = a(5019),
          Y = a(80284),
          G = a(37122),
          Z = a(89469),
          M = a(12185),
          q = a(48104),
          W = a(9838),
          K = a(82834),
          H = a(64088);
        let V = ["ETH", "WETH", "USDC"];
        ((s = r || (r = {})).NO_SOURCE_CHAIN_TOKEN = "NO_SOURCE_CHAIN_TOKEN"),
          (s.NO_AMOUNT = "NO_AMOUNT"),
          (s.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (s.WRONG_NETWORK = "WRONG_NETWORK"),
          (s.INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE"),
          (s.READY_TO_DEPOSIT_NATIVE = "READY_TO_DEPOSIT_NATIVE"),
          (s.READY_TO_DEPOSIT_CROSS_CHAIN = "READY_TO_DEPOSIT_CROSS_CHAIN"),
          (s.READY_TO_GAS_TOPUP = "READY_TO_GAS_TOPUP"),
          (s.READY_TO_OPT_IN = "READY_TO_OPT_IN");
        var z = (e) => {
            var t;
            let {
                currentAaveYield: a,
                getCurrentAaveYield: s,
                depositPoints: i,
                getDepositPoints: n,
                airdropYield: r,
                managingRatio: l,
                isYieldOff: u,
                setIsYieldOff: w,
                setStep: m,
              } = e,
              { collateralSummary: p } = (0, A.F)(),
              { chains: h } = (0, G.Z)(),
              {
                systemInfo: f,
                ithacaSDK: g,
                addCrossChainTransaction: v,
                currentSpotPrice: N,
              } = (0, D.qr)(),
              { showErrorToast: y, showToast: b } = (0, k.Z)(),
              { data: j } = (0, Z.p)(),
              { data: z } = (0, M.K)({
                address: null == j ? void 0 : j.account.address,
                chainId: (0, _.b)().id,
              }),
              X = (0, d.useRef)(),
              $ = (0, d.useMemo)(
                () =>
                  Object.keys(f.tokenAddress).map((e) => ({
                    name: e,
                    value: f.tokenAddress[e],
                    decimals: f.tokenDecimals[e],
                  })),
                [f]
              ),
              J = (0, d.useMemo)(() => {
                let e = (0, _.b)();
                return {
                  name: e.name,
                  value: "".concat(e.id),
                  nativeCurrency: e.nativeCurrency,
                };
              }, []),
              [Q, ee] = (0, d.useState)(J),
              [et, ea] = (0, d.useState)([]),
              [es, ei] = (0, d.useState)(!1),
              [en, er] = (0, d.useState)(),
              [el, ec] = (0, d.useState)($[1]),
              [eo, ed] = (0, d.useState)(""),
              [eu, ew] = (0, d.useState)(""),
              [em, ex] = (0, d.useState)(""),
              [ep, eh] = (0, d.useState)("NO_AMOUNT"),
              [ef, eg] = (0, d.useState)(!1),
              [ev, eN] = (0, d.useState)(!1),
              [ey, eA] = (0, d.useState)(!0),
              [eb, ej] = (0, d.useState)(),
              [eC, eS] = (0, d.useState)(),
              [eT, eE] = (0, d.useState)(!1),
              [eI, eO] = (0, d.useState)(!1),
              [ek, eD] = (0, d.useState)(!1),
              eR = (0, q.t)({ chainId: parseInt(Q.value) }),
              e_ = async function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 10;
                for (let a = 0; a < t; a++)
                  try {
                    return await e();
                  } catch (e) {
                    console.error("Attempt ".concat(a + 1, " failed:"), e),
                      a < t - 1 &&
                        (await new Promise((e) =>
                          setTimeout(e, 1e3 * ~~(1 << a))
                        ));
                  }
                throw Error("Failed to execute action after all retries");
              },
              eL = async (e) => {
                ei(!0),
                  ea(
                    (await g.fundlock.getTokens(e)).filter((e) => {
                      let { symbol: t } = e;
                      return V.includes(t);
                    })
                  ),
                  ei(!1);
              },
              eU = async (e) => {
                let t = BigInt(0);
                eR &&
                  j &&
                  ((t = (0, L.E)(e.value, H.nativeTokenConstant)
                    ? await eR.getBalance({ address: j.account.address })
                    : await eR.readContract({
                        address: e.value,
                        abi: U.Wo,
                        functionName: "balanceOf",
                        args: [j.account.address],
                      })),
                  ex((0, P.b)(t, e.decimals)));
              },
              eP = (e, t) => {
                clearInterval(X.current),
                  er(void 0),
                  ed(""),
                  ew(""),
                  ee(t),
                  eL(parseInt(t.value)),
                  eG(t, J, en, el, eo, eu);
              },
              eB = async (e, t) => {
                clearInterval(X.current),
                  ew(""),
                  er(t),
                  await eU(t),
                  eG(Q, J, t, el, eo, eu);
              },
              eF = (e) => {
                clearInterval(X.current);
                let t = (0, R.Dg)(e);
                ed(t), eG(Q, J, en, el, t, eu);
              },
              eY = (e) => {
                clearInterval(X.current);
                let t = (0, R.Dg)(e);
                eG(Q, J, en, el, eo, t), ew(t);
              },
              eG = async function (e, t, a, s, i, n) {
                let {
                  depositSuccess: r = !1,
                  optInSuccess: l = !1,
                  gasTopupSuccess: o = !1,
                } = arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : {};
                if (eR && j) {
                  if (e.value === t.value) {
                    let e = (0, B.v)(n, s.decimals),
                      a = (0, B.v)(p[s.name].walletBalance, s.decimals),
                      i = await eR.readContract({
                        address: s.value,
                        abi: U.Wo,
                        functionName: "allowance",
                        args: [j.account.address, f.fundlockAddress],
                      });
                    r
                      ? l
                        ? "WETH" === s.name
                          ? m(c.TRADE)
                          : m(c.STRATEGIES)
                        : u
                        ? m(c.TRADE)
                        : eh("READY_TO_OPT_IN")
                      : e === BigInt(0)
                      ? eh("NO_AMOUNT")
                      : e > a
                      ? eh("INSUFFICIENT_BALANCE")
                      : "".concat(j.chain.id) !== t.value
                      ? eh("WRONG_NETWORK")
                      : e > i
                      ? eh("INSUFFICIENT_ALLOWANCE")
                      : eh("READY_TO_DEPOSIT_NATIVE");
                  } else {
                    if (!a) {
                      eh("NO_SOURCE_CHAIN_TOKEN");
                      return;
                    }
                    let n = (0, B.v)(i, a.decimals),
                      d = (0, B.v)(em, a.decimals),
                      w = BigInt(0);
                    if ((0, L.E)(a.value, H.nativeTokenConstant)) w = n;
                    else if (eC) {
                      let {
                        route: { transactionRequest: e },
                      } = eC;
                      w = await eR.readContract({
                        address: a.value,
                        abi: U.Wo,
                        functionName: "allowance",
                        args: [j.account.address, e.target],
                      });
                    }
                    if (n !== BigInt(0) && !ef) {
                      ez(e, t, a, s, i);
                      let n = setInterval(() => {
                        ez(e, t, a, s, i);
                      }, 15e3);
                      X.current = n;
                    }
                    r
                      ? l
                        ? "WETH" === s.name
                          ? m(c.TRADE)
                          : m(c.STRATEGIES)
                        : u
                        ? m(c.TRADE)
                        : "".concat(j.chain.id) !== t.value
                        ? eh("WRONG_NETWORK")
                        : eh("READY_TO_OPT_IN")
                      : n === BigInt(0)
                      ? eh("NO_AMOUNT")
                      : n > d
                      ? eh("INSUFFICIENT_BALANCE")
                      : "".concat(j.chain.id) !== e.value
                      ? eh("WRONG_NETWORK")
                      : n > w
                      ? eh("INSUFFICIENT_ALLOWANCE")
                      : !o && ey && z && z.value === BigInt(0)
                      ? eh("READY_TO_GAS_TOPUP")
                      : eh("READY_TO_DEPOSIT_CROSS_CHAIN");
                  }
                }
              },
              eZ = () => {
                switch (ep) {
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
                  case "READY_TO_GAS_TOPUP":
                    return "Get Gas";
                  case "READY_TO_DEPOSIT_CROSS_CHAIN":
                    return "Deposit Cross-Chain";
                  case "READY_TO_OPT_IN":
                    return "Opt In";
                  default:
                    return "Invalid Config";
                }
              },
              eM = (e) => async () => {
                try {
                  await e.switchChain({ id: parseInt(Q.value) });
                } catch (e) {
                  y({ title: "Failed to switch network", message: e.message });
                }
              },
              eq = (e) => async () => {
                let t = Q.value !== J.value,
                  a = t ? en : el,
                  s = t ? eo : eu,
                  i = f.fundlockAddress;
                if (t) {
                  if (!eC) return;
                  i = null == eC ? void 0 : eC.route.transactionRequest.target;
                }
                if (a)
                  try {
                    eg(!0);
                    let t = await e.writeContract({
                      address: a.value,
                      abi: U.Wo,
                      functionName: "approve",
                      args: [i, (0, B.v)(s, a.decimals)],
                    });
                    await e.waitForTransactionReceipt({ hash: t }),
                      b({
                        title: "Approved",
                        message:
                          "Approved the fundlock contract to spend the tokens",
                        type: "success",
                      }),
                      await eG(Q, J, en, el, eo, eu);
                  } catch (e) {
                    y({
                      title: "Rejected Request",
                      message: "User rejected the request",
                    });
                  } finally {
                    eg(!1);
                  }
              },
              eW = (e) => async () => {
                try {
                  eg(!0);
                  let t = await g.fundlock.deposit(
                    el.value,
                    (0, B.v)(eu, el.decimals)
                  );
                  await e.waitForTransactionReceipt({ hash: t }),
                    b({
                      title: "Deposited",
                      message: ""
                        .concat(eu, " ")
                        .concat(el.name, " deposited to fundlock"),
                      type: "success",
                    }),
                    eE(!0),
                    await eG(Q, J, en, el, eo, eu, { depositSuccess: !0 });
                } catch (e) {
                  y({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  eg(!1);
                }
              },
              eK = (e) => async () => {
                try {
                  eg(!0);
                  let t = await e.writeContract({
                    address: f.fundlockAddress,
                    abi: (0, F.V)([
                      "function setActivateStrategy(address token,bool activateStrategy)",
                    ]),
                    functionName: "setActivateStrategy",
                    args: [el.value, !0],
                  });
                  await e.waitForTransactionReceipt({ hash: t }),
                    b({
                      title: "Opted In",
                      message: "Opted in to Earn Collateral Lending Yield",
                      type: "success",
                    }),
                    eO(!0),
                    await eG(Q, J, en, el, eo, eu, {
                      depositSuccess: eT,
                      optInSuccess: !0,
                    });
                } catch (e) {
                  y({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  eg(!1);
                }
              },
              eH = (e) => async () => {
                if (eb)
                  try {
                    clearInterval(X.current), eg(!0);
                    let t = await g.fundlock.crossChainDeposit(e, eb.route);
                    await e.waitForTransactionReceipt({ hash: t });
                    try {
                      let e = await e_(() =>
                        g.fundlock.getCrossChainTxStatus(t, eb.requestId)
                      );
                      v({
                        route: eb.route,
                        status: e,
                        timestamp: Date.now(),
                        requestId: eb.requestId,
                      }),
                        b({
                          title: "Cross-chain gas topup successful",
                          message: "Received "
                            .concat(J.nativeCurrency.symbol, " for gas on ")
                            .concat(J.name),
                          type: "success",
                        });
                    } catch (e) {
                      y({
                        title: "Failed to get status",
                        message:
                          "Could not get status of cross-chain gas topup",
                      });
                    }
                    eD(!0),
                      await eG(Q, J, en, el, eo, eu, { gasTopupSuccess: !0 });
                  } catch (t) {
                    if (
                      (y({
                        title: "Rejected Request",
                        message: "User rejected the request",
                      }),
                      !en)
                    )
                      return;
                    let e = setInterval(() => {
                      ez(Q, J, en, el, eo);
                    }, 15e3);
                    X.current = e;
                  } finally {
                    eg(!1);
                  }
              },
              eV = (e) => async () => {
                if (eC)
                  try {
                    clearInterval(X.current), eg(!0);
                    let t = await g.fundlock.crossChainDeposit(e, eC.route);
                    await e.waitForTransactionReceipt({ hash: t });
                    try {
                      let e = await e_(() =>
                        g.fundlock.getCrossChainTxStatus(t, eC.requestId)
                      );
                      v({
                        route: eC.route,
                        status: e,
                        timestamp: Date.now(),
                        requestId: eC.requestId,
                      }),
                        b({
                          title: "Cross-chain deposit successful",
                          message: ""
                            .concat(eu, " ")
                            .concat(el.name, " deposited to fundlock"),
                          type: "success",
                        });
                    } catch (e) {
                      y({
                        title: "Failed to get status",
                        message: "Could not get status of cross-chain deposit",
                      });
                    }
                    eE(!0),
                      await eG(Q, J, en, el, eo, eu, { depositSuccess: !0 });
                  } catch (t) {
                    if (
                      (y({
                        title: "Rejected Request",
                        message: "User rejected the request",
                      }),
                      !en)
                    )
                      return;
                    let e = setInterval(() => {
                      ez(Q, J, en, el, eo);
                    }, 15e3);
                    X.current = e;
                  } finally {
                    eg(!1);
                  }
              },
              ez = async (e, t, a, s, i) => {
                try {
                  eN(!0);
                  let n = z && z.value === BigInt(0) && ey,
                    r = "0";
                  if (
                    (n &&
                      (r =
                        "USDC" === a.name
                          ? "2"
                          : "".concat((2 / N).toFixed(4))),
                    n)
                  ) {
                    let n = g.fundlock.getCrossChainSwapRoute(
                        parseInt(e.value),
                        parseInt(t.value),
                        a.value,
                        H.nativeTokenConstant,
                        (0, B.v)(r, a.decimals)
                      ),
                      l = g.fundlock.getCrossChainDepositRoute(
                        parseInt(e.value),
                        parseInt(t.value),
                        a.value,
                        s.value,
                        (0, B.v)(
                          "".concat(parseFloat(i) - parseFloat(r)),
                          a.decimals
                        )
                      ),
                      [c, o] = await Promise.all([n, l]);
                    ew((0, P.b)(BigInt(o.route.estimate.toAmount), s.decimals)),
                      ej(c),
                      eS(o);
                  } else {
                    let n = await g.fundlock.getCrossChainDepositRoute(
                      parseInt(e.value),
                      parseInt(t.value),
                      a.value,
                      s.value,
                      (0, B.v)(i, a.decimals)
                    );
                    ew((0, P.b)(BigInt(n.route.estimate.toAmount), s.decimals)),
                      eS(n);
                  }
                  eN(!1);
                } catch (e) {
                  y({
                    title: "Failed to estimate bridge transaction",
                    message: "Could not estimate bridge transaction",
                  });
                }
              };
            return (
              (0, d.useEffect)(() => {
                s(el.value);
              }, [el]),
              (0, d.useEffect)(() => {
                (0, R.E5)(parseFloat(eu)) ||
                  n(
                    el.value,
                    eu,
                    (0, B.v)(eu, f.tokenDecimals[el.name]).toString()
                  );
              }, [eu, el, f]),
              (0, d.useEffect)(() => {
                j &&
                  eG(Q, J, en, el, eo, eu, {
                    depositSuccess: eT,
                    optInSuccess: eI,
                    gasTopupSuccess: ek,
                  });
              }, [null == j ? void 0 : j.chain.id]),
              (0, o.jsxs)("div", {
                className: x()("tw-relative tw-grid tw-gap-2"),
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "tw-flex tw-items-center tw-gap-4 tw-p-4 tw-font-bold lg:tw-p-6 lg:tw-pb-6 lg:tw-pt-8",
                    children: [
                      (0, o.jsx)("span", {
                        className:
                          "tw-inline-flex tw-size-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-[--green-rgba-20] tw-bg-ithaca-white-30 tw-text-sm tw-text-white",
                        children: "1",
                      }),
                      (0, o.jsx)("span", {
                        className: "tw-text-base lg:tw-text-lg",
                        children: "Deposit",
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "tw-space-y-4 tw-px-4 lg:tw-px-6",
                    children: [
                      Q.value !== J.value &&
                        (0, o.jsxs)("div", {
                          style: { display: "flex", flexDirection: "column" },
                          children: [
                            (0, o.jsx)("div", {
                              style: { marginTop: 0, marginBottom: 20 },
                              children: (0, o.jsx)("p", {
                                className:
                                  "tw-text-base tw-font-normal tw-text-white",
                                children: "Deposit from your linked wallet",
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                              children: [
                                (0, o.jsx)("div", {
                                  className:
                                    "tw-flex tw-flex-[0.7] tw-flex-row",
                                  children: (0, o.jsx)(T.Z, {
                                    hasDropdown: !0,
                                    className: "full-width",
                                    options: h.map((e) => {
                                      let {
                                        id: t,
                                        name: a,
                                        nativeCurrency: s,
                                      } = e;
                                      return {
                                        name: a,
                                        value: "".concat(t),
                                        nativeCurrency: s,
                                      };
                                    }),
                                    value: Q,
                                    onChange: eP,
                                  }),
                                }),
                                (0, o.jsxs)("div", {
                                  className: "tw-flex tw-flex-1 tw-gap-2",
                                  children: [
                                    (0, o.jsx)("div", {
                                      style: { flex: 1.2 },
                                      children: (0, o.jsx)(T.Z, {
                                        isLoading: es,
                                        className: "full-width",
                                        options: et.map((e) => {
                                          let {
                                            address: t,
                                            decimals: a,
                                            symbol: s,
                                          } = e;
                                          return {
                                            name: s,
                                            value: t,
                                            decimals: a,
                                          };
                                        }),
                                        value: en,
                                        onChange: eB,
                                      }),
                                    }),
                                    (0, o.jsx)("div", {
                                      style: { flex: 1 },
                                      children: (0, o.jsx)(E.Z, {
                                        className: "full-width",
                                        containerClassName: "full-width",
                                        value: eo,
                                        onChange: (e) => {
                                          let { target: t } = e;
                                          return eF(t.value);
                                        },
                                      }),
                                    }),
                                    (0, o.jsx)(C.Z, {
                                      variant: "secondary",
                                      size: "sm",
                                      title: "Select All Assets",
                                      onClick: () => eF(em),
                                      children: "All",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            en &&
                              (0, o.jsx)("div", {
                                children: (0, o.jsx)(W.Z, {
                                  selectedCurrency: en.name,
                                  estimatedFee: {
                                    fee: (0, P.b)(
                                      BigInt(
                                        (null == eC
                                          ? void 0
                                          : null === (t = eC.route) ||
                                            void 0 === t
                                          ? void 0
                                          : t.transactionRequest.value) || "0"
                                      ),
                                      Q.nativeCurrency.decimals
                                    ),
                                    nativeCurrency: Q.nativeCurrency,
                                    isLoading: ev,
                                  },
                                  balance: em,
                                  margin: "mtb-20",
                                }),
                              }),
                          ],
                        }),
                      Q.value !== J.value
                        ? (0, o.jsx)("div", {
                            style: { marginTop: 20, marginBottom: 20 },
                            children: (0, o.jsx)("h4", {
                              className:
                                "tw-text-base tw-font-normal tw-text-white",
                              children:
                                "Receive appx. onto Ithaca smart contract",
                            }),
                          })
                        : (0, o.jsx)("div", {
                            style: { marginTop: 0, marginBottom: 20 },
                            children: (0, o.jsx)("h4", {
                              className:
                                "tw-text-base tw-font-normal tw-text-white",
                              children: "Deposit from your linked wallet",
                            }),
                          }),
                      (0, o.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row",
                        children: [
                          (0, o.jsx)("div", {
                            className: "tw-flex tw-flex-[0.7] tw-flex-row",
                            children: (0, o.jsx)(T.Z, {
                              disabled: Q.value !== J.value,
                              hasDropdown: Q.value === J.value,
                              className: "full-width",
                              options: K.BB
                                ? h.map((e) => {
                                    let {
                                      id: t,
                                      name: a,
                                      nativeCurrency: s,
                                    } = e;
                                    return {
                                      name: a,
                                      value: "".concat(t),
                                      nativeCurrency: s,
                                    };
                                  })
                                : [J],
                              value: J,
                              onChange: eP,
                              iconStart: (0, o.jsx)(O.Z, {}),
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            className: "tw-flex tw-flex-1 tw-gap-2",
                            children: [
                              (0, o.jsx)("div", {
                                style: { flex: 1.2 },
                                children: (0, o.jsx)(T.Z, {
                                  className: "full-width",
                                  options: $,
                                  value: el,
                                  onChange: (e, t) => {
                                    clearInterval(X.current),
                                      eG(Q, J, en, t, eo, eu),
                                      ec(t);
                                  },
                                  iconStart: p[el.name].currencyLogo,
                                }),
                              }),
                              (0, o.jsx)("div", {
                                style: { flex: 1 },
                                children: (0, o.jsx)(E.Z, {
                                  disabled: Q.value !== J.value,
                                  className: "full-width",
                                  containerClassName: "full-width",
                                  value: eu,
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return eY(t.value);
                                  },
                                  isLoading: ev,
                                }),
                              }),
                              Q.value === J.value
                                ? (0, o.jsx)(C.Z, {
                                    variant: "secondary",
                                    size: "sm",
                                    title: "Select All Assets",
                                    onClick: () => eY(p[el.name].walletBalance),
                                    children: "All",
                                  })
                                : (0, o.jsx)("div", { className: "tw-w-10" }),
                            ],
                          }),
                        ],
                      }),
                      el &&
                        (0, o.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-justify-between tw-gap-2.5 tw-text-xs tw-text-ithaca-white-60 lg:tw-flex-row",
                          children: [
                            (0, o.jsxs)("div", {
                              children: [
                                "Wallet Balance:",
                                " ",
                                (0, R.uM)(Number(p[el.name].walletBalance)),
                                " ",
                                el.name,
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                "Available Collateral on Ithaca:",
                                " ",
                                (0, R.uM)(p[el.name].availableCollateral),
                                " ",
                                el.name,
                              ],
                            }),
                          ],
                        }),
                      (() => {
                        if (
                          Q.value !== J.value &&
                          en &&
                          z &&
                          z.value === BigInt(0)
                        )
                          return (0, o.jsxs)("div", {
                            className: "tw-space-y-2",
                            children: [
                              (0, o.jsx)("div", {
                                className:
                                  "tw-text-xs tw-italic tw-text-[var(--red-20)]",
                                children:
                                  "ETH on Arbitrum required for gas to Opt In to Earn Collateral Lending Yield.",
                              }),
                              (0, o.jsx)(S.T, {
                                label: "",
                                checkmarkClassName: "tw-h-[14px] tw-w-[14px]",
                                checked: ey,
                                onChange: (e, t) => {
                                  eA(t), w(!t);
                                },
                                component: (0, o.jsx)("div", {
                                  className:
                                    "tw-text-sm tw-text-ithaca-white-60",
                                  children: ""
                                    .concat(
                                      "USDC" === en.name
                                        ? "2.00 USDC"
                                        : ""
                                            .concat((2 / N).toFixed(4), " ")
                                            .concat(en.name, " (~$2.0)"),
                                      " of your deposit will be converted to "
                                    )
                                    .concat(J.nativeCurrency.symbol, " on ")
                                    .concat(J.name, " for gas"),
                                }),
                              }),
                            ],
                          });
                      })(),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "tw-space-y-0 tw-px-4 tw-py-5 tw-text-ithaca-white-60 lg:tw-px-6",
                    children: [
                      (0, o.jsxs)("div", {
                        className: x()("tw-space-y-1", { "tw-opacity-50": u }),
                        children: [
                          (0, o.jsxs)("div", {
                            className: x()(
                              u
                                ? "tw-text-ithaca-white-60"
                                : "tw-text-ithaca-green-30"
                            ),
                            children: ["Collateral Lending Yield: ", a, "%*"],
                          }),
                          (0, o.jsx)("div", {
                            className: "tw-text-xs",
                            children:
                              "*Aave USDC Pool variable lending yield x proportion of Ithaca deposits ".concat(
                                l ? "( ".concat(100 * l, "% )") : "",
                                " allocated to Aave USDC Pool. This\n            yield may NOT be realized, depending as is on Aave variable yield during the deposit tenor"
                              ),
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: "tw-text-base tw-text-ithaca-green-30",
                        children: "+",
                      }),
                      (0, o.jsxs)("div", {
                        className: "tw-space-y-1",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "tw-text-ithaca-green-30",
                            children: [
                              "Airdrop Yield: ",
                              r,
                              "%** | ",
                              i,
                              " Points Per Day",
                              " ",
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "tw-text-xs",
                            children:
                              "**Yield estimated referencing 45M$ FDMV & indicative points to token conversion.",
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: "tw-text-base tw-text-ithaca-green-30",
                        children: "=",
                      }),
                      (0, o.jsxs)("div", {
                        className: "tw-space-y-1",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "tw-text-ithaca-green-30",
                            children: [
                              "Holding Yield:",
                              " ",
                              (
                                ((0, R.E5)(Number(a)) ? 0 : Number(a)) +
                                ((0, R.E5)(Number(r)) ? 0 : Number(r))
                              ).toFixed(2),
                              "%†",
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "tw-text-xs",
                            children:
                              "† Holding Yield = Airdrop Yield + Collateral Lending Yield",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "!tw-my-5 tw-space-y-1",
                        children: [
                          (0, o.jsx)("div", {
                            children: (0, o.jsx)(S.T, {
                              label: "",
                              className:
                                "tw-text-sm tw-text-white lg:tw-text-base",
                              checked: !u,
                              onChange: () => w(!u),
                              component: (0, o.jsx)("div", {
                                children:
                                  "Opt In To Earn Collateral Lending Yield ",
                              }),
                            }),
                          }),
                          (0, o.jsx)("div", {
                            className: "tw-text-xs",
                            children:
                              "Yields generated using Aave may carry risks such as potential smart contract vulnerabilities, market volatility, and liquidity risk. Users should thoroughly research and understand these risks before participating.",
                          }),
                        ],
                      }),
                      (0, o.jsx)(C.Z, {
                        className: "tw-mx-auto tw-block tw-w-full tw-max-w-80",
                        disabled: !(() => {
                          if (ev) return !1;
                          switch (ep) {
                            case "NO_SOURCE_CHAIN_TOKEN":
                            case "NO_AMOUNT":
                            case "INSUFFICIENT_BALANCE":
                            default:
                              return !1;
                            case "WRONG_NETWORK":
                            case "INSUFFICIENT_ALLOWANCE":
                            case "READY_TO_DEPOSIT_NATIVE":
                            case "READY_TO_DEPOSIT_CROSS_CHAIN":
                            case "READY_TO_GAS_TOPUP":
                            case "READY_TO_OPT_IN":
                              return !0;
                          }
                        })(),
                        onClick: (() => {
                          if (!j) return;
                          let e = j.extend(Y.I);
                          switch (ep) {
                            case "WRONG_NETWORK":
                              return eM(e);
                            case "INSUFFICIENT_ALLOWANCE":
                              return eq(e);
                            case "READY_TO_DEPOSIT_NATIVE":
                              return eW(e);
                            case "READY_TO_OPT_IN":
                              return eK(e);
                            case "READY_TO_GAS_TOPUP":
                              return eH(e);
                            case "READY_TO_DEPOSIT_CROSS_CHAIN":
                              return eV(e);
                          }
                        })(),
                        title: eZ(),
                        children: ef ? (0, o.jsx)(I.Z, { type: "sm" }) : eZ(),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          X = (e) => {
            let {
                step: t,
                tradeType: a,
                tabOptions: s,
                activeTab: i,
                setStep: n,
                setTradeType: r,
                handleTabChange: d,
              } = e,
              { title: w, description: m, image: p } = (0, u.AC)(a);
            return (0, o.jsxs)("div", {
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "tw-flex tw-items-center tw-gap-4 tw-p-4 tw-font-bold lg:tw-p-6 lg:tw-pt-8",
                  children: [
                    (0, o.jsx)("span", {
                      className:
                        "tw-inline-flex tw-size-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-ithaca-white-30 tw-text-sm tw-text-white",
                      children: "2",
                    }),
                    (0, o.jsx)(N.Z, {
                      name: "board-two-trade-tab",
                      radioButtonClassName: "tw-w-full tw-max-w-[467px]",
                      optionClassName: "tw-text-center",
                      options: s,
                      selectedOption: i,
                      disabled: t == c.DEPOSIT,
                      onChange: (e) => d(e),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "tw-w-full tw-max-w-full",
                  children: (0, o.jsx)("div", {
                    className:
                      "tw-flex tw-gap-4 tw-overflow-x-auto tw-px-4 tw-py-2 lg:tw-gap-6 lg:tw-px-6 lg:tw-py-0 lg:tw-pb-6",
                    children: Object.values(l).map((e) =>
                      (0, o.jsx)(
                        "button",
                        {
                          className: x()(
                            "tw-shrink-0 tw-py-2 tw-text-ithaca-white-60",
                            e === a &&
                              "tw-border-b tw-border-b-ithaca-purple-30 tw-text-white"
                          ),
                          onClick: () => r(e),
                          children: e,
                        },
                        e
                      )
                    ),
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "tw-p-4 lg:tw-p-6 lg:tw-pt-0",
                  children: (0, o.jsxs)("div", {
                    className:
                      "tw-space-y-6 tw-rounded-xl tw-p-0 lg:tw-space-y-4 lg:tw-bg-[#9D9DAA]/5 lg:tw-p-6",
                    children: [
                      (0, o.jsxs)("div", {
                        className:
                          "tw-space-y-2 tw-rounded-md tw-bg-[#9D9DAA]/5 tw-p-3 lg:tw-space-y-4 lg:tw-bg-transparent lg:tw-p-0",
                        children: [
                          (0, o.jsx)("div", {
                            className: "tw-text-lg",
                            children: w,
                          }),
                          (0, o.jsx)("div", {
                            className: "tw-text-xs tw-text-ithaca-white-60",
                            children: m,
                          }),
                          p,
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-gap-5 lg:tw-flex-row-reverse",
                        children: [
                          (0, o.jsxs)("div", {
                            className:
                              "tw-flex tw-flex-col tw-self-center tw-text-xxs tw-text-ithaca-white-60",
                            children: [
                              (0, o.jsx)("span", {
                                children:
                                  "*Activate your points by trading a minimum of",
                              }),
                              (0, o.jsx)("span", {
                                children:
                                  "- 0.2 (ETH) notional Options OR $20 notional Digital Options OR 1 (ETH) notional Forwards ",
                              }),
                            ],
                          }),
                          (0, o.jsx)(C.Z, {
                            title: "Trade",
                            onClick: () => n(c.CONFIG),
                            className: "tw-min-w-36",
                            children: "Trade",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          $ = a(72696),
          J = a(837),
          Q = (e) => {
            let {
                step: t,
                marketOutlook: a,
                setMarketOutlook: s,
                setStep: i,
                baselineYield: n,
                activeTab: r,
                handleTabChange: l,
                tabOptions: w,
              } = e,
              [m, x] = (0, d.useState)(!0),
              { currentExpiryDate: p } = (0, D.qr)(),
              h = (0, d.useCallback)(
                (e) => {
                  i(c.CONFIG), s(e);
                },
                [s, i]
              );
            return (0, o.jsxs)("div", {
              className: "tw-px-6 tw-py-8",
              children: [
                (0, o.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-4 tw-font-bold",
                  children: [
                    (0, o.jsx)("span", {
                      className:
                        "tw-inline-flex tw-size-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-[--green-rgba-20] tw-bg-ithaca-white-30 tw-text-sm tw-text-white",
                      children: t === c.CONFIG ? 3 : 2,
                    }),
                    t === c.STRATEGIES
                      ? (0, o.jsx)(N.Z, {
                          name: "board-two-trade-tab",
                          radioButtonClassName: "tw-w-full tw-max-w-[467px]",
                          optionClassName: "tw-text-center",
                          options: w,
                          selectedOption: r,
                          onChange: (e) => l(e),
                        })
                      : (0, o.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-1 tw-flex-wrap tw-justify-between tw-gap-2 tw-text-base lg:tw-text-lg",
                          children: [
                            (0, o.jsx)("span", {
                              children:
                                "Principal Protected Strategies Configuration",
                            }),
                            (0, o.jsx)($.Z, {
                              size: "sm",
                              defaultState: m ? "right" : "left",
                              onChange: (e) => x("right" === e),
                              rightLabel: "Descriptions",
                            }),
                          ],
                        }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "tw-mt-5",
                  children: (0, o.jsx)(J.Z, {
                    isContentVisible: t == c.CONFIG,
                    baselineYield: n,
                    rangeChartData: (0, u.Ue)(p),
                    bearChartData: (0, u.Cy)(p),
                    bullChartData: (0, u.wO)(p),
                    setMarketOutlook: h,
                    marketOutlook: a,
                    showInstructions: m,
                    setStep: i,
                  }),
                }),
              ],
            });
          },
          ee = a(27888),
          et = a(85292),
          ea = a(96967),
          es = a(66780),
          ei = a(43681),
          en = a(67277),
          er = a(91553),
          el = a(36703),
          ec = a(53227),
          eo = a(1958),
          ed = a(82649),
          eu = a(88144),
          ew = a(39332);
        ((i = l || (l = {})).MARKET = "Market"),
          (i.STORIES = "Stories"),
          (i.DYNAMIC_OPTIONS_STRATEGIES = "Dynamic Option Strategies"),
          ((n = c || (c = {})).DEPOSIT = "Deposit"),
          (n.TRADE = "Trade"),
          (n.CONFIG = "Principal Protected Strategies Configuration"),
          (n.STRATEGIES = "Principal Protected Strategies");
        let em = [
          { option: "Principal Protected Strategies", value: "Strategies" },
          { option: "Trade", value: "Trade" },
        ];
        var ex = () => {
          let e = (0, ew.useSearchParams)(),
            {
              currentSpotPrice: t,
              systemInfo: a,
              currentExpiryDate: s,
            } = (0, D.qr)(),
            i = (0, q.t)({ chainId: (0, _.b)().id }),
            { data: n } = (0, eu.a)({
              initialData: "0",
              queryKey: ["BASLINE_YIELD"],
              queryFn: () => (0, ed.Sp)("BASLINE_YIELD"),
              select: (e) => Number(e),
            }),
            [r, l] = (0, d.useState)(!1),
            [c, m] = (0, d.useState)(e.get("step") || "Deposit"),
            [x, p] = (0, d.useState)("Market"),
            [h, N] = (0, d.useState)(u.WL.RANGE),
            [y, A] = (0, d.useState)([]),
            [C, S] = (0, d.useState)([]),
            [T, E] = (0, d.useState)([]),
            [I, O] = (0, d.useState)("Strategies"),
            [k, R] = (0, d.useState)("-"),
            [U, B] = (0, d.useState)(0),
            [Y, G] = (0, d.useState)("-"),
            [Z, M] = (0, d.useState)(),
            W = (0, d.useCallback)((e) => {
              switch (e) {
                case "Strategies":
                  m("Principal Protected Strategies");
                  break;
                case "Trade":
                  m("Trade");
              }
              O(e);
            }, []);
          (0, d.useEffect)(() => {
            A((0, u.Ue)(s)), S((0, u.wO)(s)), E((0, u.Cy)(s));
          }, [s]);
          let K = async (e) => {
              if (!i) return;
              let t = i.readContract({
                  address: ea.U[i.chain.id].aavePool,
                  abi: es.s,
                  functionName: "getReserveData",
                  args: [e],
                }),
                s = await i.readContract({
                  address: a.fundlockAddress,
                  abi: (0, F.V)([
                    "function tokenStrategies(address token) external view returns(address)",
                  ]),
                  functionName: "tokenStrategies",
                  args: [e],
                });
              if ((0, L.E)(s, eo.DR)) M(void 0), R("-");
              else {
                let e = i.readContract({
                    address: s,
                    abi: ec.b,
                    functionName: "maxManagingRatio",
                  }),
                  [a, n] = await Promise.all([t, e]),
                  r = (0, ei.Fv)(
                    (0, en.G)({
                      rate: a.currentLiquidityRate.toString(),
                      duration: er.E_,
                    }),
                    er.YL
                  );
                M(Number((0, P.b)(n, 18))),
                  R((Number(r) * Number((0, P.b)(n, 18)) * 100).toFixed(2));
              }
            },
            H = async (e, s, i) => {
              let { data: n } = await (0, el.hO)(e, i);
              if (!n) return;
              let r = n.query,
                l = r / 100,
                c = e === a.tokenAddress.USDC ? Number(s) : Number(s) * t;
              B(r), G((((0.045 * l * 365) / c) * 100).toFixed(2));
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(w.Z, {}),
              (0, o.jsx)(ee.Z, {
                children: (0, o.jsxs)(et.Z, {
                  className:
                    "mb-15 font-lato tw-space-y-6 tw-py-4 lg:tw-max-w-screen-md lg:tw-py-6",
                  children: [
                    (0, o.jsx)("h2", {
                      className:
                        "tw-ml-8 tw-w-max tw-border-b tw-border-b-[#561198] tw-pb-2 tw-text-lg tw-font-semibold lg:tw-text-xl",
                      children: "Onboarding",
                    }),
                    (0, o.jsxs)("div", {
                      className: "tw-flex tw-h-full tw-items-start lg:tw-gap-4",
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "tw-flex tw-h-full tw-w-6 tw-flex-shrink-0 tw-flex-col",
                          children: (0, o.jsx)(f, { step: c }),
                        }),
                        (0, o.jsxs)("div", {
                          className:
                            "tw-grid tw-h-full tw-flex-1 tw-gap-3 lg:tw-flex lg:tw-flex-row lg:tw-items-start lg:tw-gap-5",
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-gap-4 lg:tw-w-[515px]",
                              children: [
                                (0, o.jsx)(v, {
                                  currentAaveYield: k,
                                  airdropYield: Y,
                                  isYieldOff: r,
                                  setStep: m,
                                }),
                                (0, o.jsx)(b, {
                                  activeTab: I,
                                  handleTabChange: W,
                                  marketOutlook: h,
                                  setStep: m,
                                  step: c,
                                  tabOptions: em,
                                  tradeType: x,
                                }),
                                (0, o.jsx)(j, { step: c, setStep: m }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "tw-flex-1",
                              children: (0, o.jsx)(g.Z, {
                                className:
                                  "tw-rounded-[20px] lg:tw-rounded-[30px]",
                                children:
                                  "Deposit" == c
                                    ? (0, o.jsx)(z, {
                                        setActiveTab: O,
                                        airdropYield: Y,
                                        currentAaveYield: k,
                                        depositPoints: U,
                                        getCurrentAaveYield: K,
                                        getDepositPoints: H,
                                        managingRatio: Z,
                                        isYieldOff: r,
                                        setIsYieldOff: l,
                                        setStep: m,
                                      })
                                    : "Trade" == c
                                    ? (0, o.jsx)(X, {
                                        setStep: m,
                                        setTradeType: p,
                                        tradeType: x,
                                        activeTab: I,
                                        handleTabChange: W,
                                        step: c,
                                        tabOptions: em,
                                      })
                                    : (0, o.jsx)(Q, {
                                        baselineYield: n,
                                        step: c,
                                        activeTab: I,
                                        bearChartData: T,
                                        bullChartData: C,
                                        marketOutlook: h,
                                        rangeChartData: y,
                                        setMarketOutlook: N,
                                        setStep: m,
                                        handleTabChange: W,
                                        tabOptions: em,
                                      }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      },
      89564: function (e) {
        e.exports = { container: "CheckBox_container__QFNwK" };
      },
      49632: function (e, t, a) {
        "use strict";
        var s = a(67294);
        let i = s.forwardRef(function (e, t) {
          let { title: a, titleId: i, ...n } = e;
          return s.createElement(
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
              n
            ),
            a ? s.createElement("title", { id: i }, a) : null,
            s.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            })
          );
        });
        t.Z = i;
      },
      48120: function (e, t, a) {
        "use strict";
        a.d(t, {
          v: function () {
            return n;
          },
        });
        var s = a(36117);
        class i extends s.G {
          constructor({ value: e }) {
            super(`Number \`${e}\` is not a valid decimal number.`, {
              name: "InvalidDecimalNumberError",
            });
          }
        }
        function n(e, t) {
          if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new i({ value: e });
          let [a, s = "0"] = e.split("."),
            n = a.startsWith("-");
          if ((n && (a = a.slice(1)), (s = s.replace(/(0+)$/, "")), 0 === t))
            1 === Math.round(Number(`.${s}`)) && (a = `${BigInt(a) + 1n}`),
              (s = "");
          else if (s.length > t) {
            let [e, i, n] = [s.slice(0, t - 1), s.slice(t - 1, t), s.slice(t)],
              r = Math.round(Number(`${i}.${n}`));
            (s =
              r > 9
                ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
                : `${e}${r}`).length > t &&
              ((s = s.slice(1)), (a = `${BigInt(a) + 1n}`)),
              (s = s.slice(0, t));
          } else s = s.padEnd(t, "0");
          return BigInt(`${n ? "-" : ""}${a}${s}`);
        }
      },
    },
  ]);
