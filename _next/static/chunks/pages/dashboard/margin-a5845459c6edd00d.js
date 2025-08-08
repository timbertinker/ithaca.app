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
      (e._sentryDebugIds[t] = "5c53d9d2-2120-41d5-8875-62c356522336"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5c53d9d2-2120-41d5-8875-62c356522336"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7405, 7245, 6656, 7581, 579, 8833, 9156, 4113, 1014],
    {
      75370: function (e, t, a) {
        "use strict";
        a.d(t, {
          DA: function () {
            return u;
          },
        });
        var r = a(70794),
          n = a(43681),
          s = a(91553),
          i = a(67277);
        function l({
          amount: e,
          currencyDecimals: t,
          priceInMarketReferenceCurrency: a,
          marketReferenceCurrencyDecimals: s,
          normalizedMarketReferencePriceInUsd: i,
        }) {
          return (0, n.hE)(e.toString())
            .multipliedBy(a)
            .multipliedBy(i)
            .dividedBy(new r.Z(1).shiftedBy(t + s))
            .toString();
        }
        var o = a(7434),
          c = a(69546),
          d = a(92328);
        function u({
          reserves: e,
          eModes: t,
          currentTimestamp: a,
          marketReferencePriceInUsd: u,
          marketReferenceCurrencyDecimals: m,
        }) {
          return e.map((e) => {
            let w = (function ({
              reserve: e,
              currentTimestamp: t,
              marketReferencePriceInUsd: a,
              marketReferenceCurrencyDecimals: u,
              eModes: m,
            }) {
              let w = (0, n.pV)(a, s.$3),
                h = (function ({ reserve: e, currentTimestamp: t }) {
                  let {
                      totalDebt: a,
                      totalVariableDebt: l,
                      totalLiquidity: o,
                    } = (function (e, t) {
                      let a = (0, d._O)(
                          (0, d._O)(
                            e.totalScaledVariableDebt,
                            e.variableBorrowIndex
                          ),
                          (0, c.rD)({
                            rate: e.variableBorrowRate,
                            currentTimestamp: t,
                            lastUpdateTimestamp: e.lastUpdateTimestamp,
                          })
                        ),
                        r = a.plus(e.availableLiquidity);
                      return {
                        totalVariableDebt: a,
                        totalDebt: a,
                        totalLiquidity: r,
                      };
                    })(e, t),
                    u = o.eq(0) ? "0" : (0, n.hE)(a).dividedBy(o).toFixed(),
                    m = o.eq(0)
                      ? "0"
                      : (0, n.hE)(a).dividedBy(o.plus(e.unbacked)).toFixed(),
                    w = (0, n.Fv)(
                      (0, n.hE)(e.reserveLiquidationBonus).minus(10 ** s.ih),
                      s.ih
                    ),
                    h =
                      "0" === e.borrowCap
                        ? new r.Z(e.availableLiquidity)
                        : r.Z.min(
                            e.availableLiquidity,
                            new r.Z(e.borrowCap)
                              .shiftedBy(e.decimals)
                              .minus(a.plus(1))
                          );
                  return {
                    totalDebt: a,
                    totalVariableDebt: l,
                    totalLiquidity: o,
                    borrowUsageRatio: u,
                    supplyUsageRatio: m,
                    formattedReserveLiquidationBonus: w,
                    supplyAPY: (0, i.G)({
                      rate: e.liquidityRate,
                      duration: s.E_,
                    }),
                    variableBorrowAPY: (0, i.G)({
                      rate: e.variableBorrowRate,
                      duration: s.E_,
                    }),
                    formattedAvailableLiquidity: h,
                    unborrowedLiquidity: e.availableLiquidity,
                  };
                })({ reserve: e, currentTimestamp: t });
              return Object.assign(
                Object.assign(
                  {},
                  (function ({ reserve: e, eModes: t }) {
                    var a;
                    let r = (t) => (0, n.Fv)(t, e.decimals),
                      i = "0" !== e.debtCeiling,
                      l = i
                        ? (0, n.Fv)(
                            (0, n.hE)(e.debtCeiling).minus(
                              e.isolationModeTotalDebt
                            ),
                            e.debtCeilingDecimals
                          )
                        : "0",
                      o = t
                        ? ((a = e.originalId),
                          t
                            .reduce((e, t) => {
                              let { borrowableBitmap: r, collateralBitmap: n } =
                                  t.eMode,
                                s = "1" === r[r.length - a - 1],
                                i = "1" === n[n.length - a - 1];
                              return (
                                (s || i) &&
                                  e.push({
                                    id: t.id,
                                    collateralEnabled: i,
                                    borrowingEnabled: s,
                                    eMode: t.eMode,
                                  }),
                                e
                              );
                            }, [])
                            .map((e) => {
                              var t;
                              return Object.assign(Object.assign({}, e), {
                                eMode: Object.assign(
                                  Object.assign({}, (t = e.eMode)),
                                  {
                                    formattedLtv: (0, n.Fv)(t.ltv, s.ih),
                                    formattedLiquidationThreshold: (0, n.Fv)(
                                      t.liquidationThreshold,
                                      s.ih
                                    ),
                                    formattedLiquidationBonus: (0, n.Fv)(
                                      (0, n.hE)(t.liquidationBonus).minus(
                                        10 ** s.ih
                                      ),
                                      4
                                    ),
                                  }
                                ),
                              });
                            }))
                        : [];
                    return Object.assign(Object.assign({}, e), {
                      totalVariableDebt: r(e.totalVariableDebt),
                      totalLiquidity: r(e.totalLiquidity),
                      formattedAvailableLiquidity: r(e.availableLiquidity),
                      unborrowedLiquidity: r(e.unborrowedLiquidity),
                      borrowUsageRatio: e.borrowUsageRatio,
                      supplyUsageRatio: e.supplyUsageRatio,
                      totalDebt: r(e.totalDebt),
                      formattedBaseLTVasCollateral: (0, n.Fv)(
                        e.baseLTVasCollateral,
                        s.ih
                      ),
                      reserveFactor: (0, n.Fv)(e.reserveFactor, s.ih),
                      supplyAPY: (0, n.Fv)(e.supplyAPY, s.YL),
                      supplyAPR: (0, n.Fv)(e.liquidityRate, s.YL),
                      variableBorrowAPY: (0, n.Fv)(e.variableBorrowAPY, s.YL),
                      variableBorrowAPR: (0, n.Fv)(e.variableBorrowRate, s.YL),
                      formattedReserveLiquidationThreshold: (0, n.Fv)(
                        e.reserveLiquidationThreshold,
                        4
                      ),
                      formattedReserveLiquidationBonus: (0, n.Fv)(
                        (0, n.hE)(e.reserveLiquidationBonus).minus(10 ** s.ih),
                        4
                      ),
                      totalScaledVariableDebt: r(e.totalScaledVariableDebt),
                      debtCeilingUSD: i
                        ? (0, n.Fv)(e.debtCeiling, e.debtCeilingDecimals)
                        : "0",
                      isolationModeTotalDebtUSD: i
                        ? (0, n.Fv)(
                            e.isolationModeTotalDebt,
                            e.debtCeilingDecimals
                          )
                        : "0",
                      availableDebtCeilingUSD: l,
                      isIsolated: i,
                      eModes: o,
                    });
                  })({
                    reserve: Object.assign(Object.assign({}, e), h),
                    eModes: m,
                  })
                ),
                {
                  totalLiquidityUSD: l({
                    amount: h.totalLiquidity,
                    currencyDecimals: e.decimals,
                    marketReferenceCurrencyDecimals: u,
                    priceInMarketReferenceCurrency:
                      e.priceInMarketReferenceCurrency,
                    normalizedMarketReferencePriceInUsd: w,
                  }),
                  availableLiquidityUSD: l({
                    amount: h.formattedAvailableLiquidity,
                    currencyDecimals: e.decimals,
                    marketReferenceCurrencyDecimals: u,
                    priceInMarketReferenceCurrency:
                      e.priceInMarketReferenceCurrency,
                    normalizedMarketReferencePriceInUsd: w,
                  }),
                  totalDebtUSD: l({
                    amount: h.totalDebt,
                    currencyDecimals: e.decimals,
                    marketReferenceCurrencyDecimals: u,
                    priceInMarketReferenceCurrency:
                      e.priceInMarketReferenceCurrency,
                    normalizedMarketReferencePriceInUsd: w,
                  }),
                  totalVariableDebtUSD: l({
                    amount: h.totalVariableDebt,
                    currencyDecimals: e.decimals,
                    marketReferenceCurrencyDecimals: u,
                    priceInMarketReferenceCurrency:
                      e.priceInMarketReferenceCurrency,
                    normalizedMarketReferencePriceInUsd: w,
                  }),
                  formattedPriceInMarketReferenceCurrency: (0, n.Fv)(
                    e.priceInMarketReferenceCurrency,
                    u
                  ),
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  priceInUSD: l({
                    amount: new r.Z(1).shiftedBy(e.decimals),
                    currencyDecimals: e.decimals,
                    marketReferenceCurrencyDecimals: u,
                    priceInMarketReferenceCurrency:
                      e.priceInMarketReferenceCurrency,
                    normalizedMarketReferencePriceInUsd: w,
                  }),
                  borrowCapUSD: (0, o.$)(
                    new r.Z(e.borrowCap),
                    e.priceInMarketReferenceCurrency,
                    u
                  ).toString(),
                  supplyCapUSD: (0, o.$)(
                    new r.Z(e.supplyCap),
                    e.priceInMarketReferenceCurrency,
                    u
                  ).toString(),
                  unbackedUSD: (0, o.$)(
                    new r.Z(e.unbacked),
                    e.priceInMarketReferenceCurrency,
                    u
                  ).toString(),
                }
              );
            })({
              reserve: e,
              currentTimestamp: a,
              marketReferencePriceInUsd: u,
              marketReferenceCurrencyDecimals: m,
              eModes: t,
            });
            return Object.assign(Object.assign({}, e), w);
          });
        }
      },
      7434: function (e, t, a) {
        "use strict";
        function r(e, t, a) {
          return e.multipliedBy(t).shiftedBy(-1 * a);
        }
        a.d(t, {
          $: function () {
            return r;
          },
        });
      },
      55603: function (e, t, a) {
        "use strict";
        a.d(t, {
          G: function () {
            return o;
          },
        });
        var r = a(43681),
          n = a(91553),
          s = a(70794),
          i = a(69546),
          l = a(7434);
        function o({
          currentTimestamp: e,
          marketReferencePriceInUsd: t,
          marketReferenceCurrencyDecimals: a,
          userReserves: o,
          formattedReserves: c,
          userEmodeCategoryId: d,
          userPositionsCollateral: u,
        }) {
          let m = (0, r.Fv)(t, n.$3),
            w = [];
          o.forEach((e) => {
            let t = c.find(
              (t) =>
                t.underlyingAsset.toLowerCase() ===
                e.underlyingAsset.toLowerCase()
            );
            t && w.push(Object.assign(Object.assign({}, e), { reserve: t }));
          });
          let h = w.map((t) =>
              (function ({
                userReserve: e,
                marketReferencePriceInUsdNormalized: t,
                marketReferenceCurrencyDecimals: a,
                currentTimestamp: n,
              }) {
                let s = e.reserve,
                  { priceInMarketReferenceCurrency: l, decimals: o } = s,
                  c = (0, i.CO)({
                    balance: e.scaledATokenBalance,
                    index: s.liquidityIndex,
                    rate: s.liquidityRate,
                    lastUpdateTimestamp: s.lastUpdateTimestamp,
                    currentTimestamp: n,
                  }),
                  { marketReferenceCurrencyBalance: d, usdBalance: u } = (0,
                  i.n3)({
                    balance: c,
                    priceInMarketReferenceCurrency: l,
                    marketReferenceCurrencyDecimals: a,
                    decimals: o,
                    marketReferencePriceInUsdNormalized: t,
                  }),
                  { marketReferenceCurrencyBalance: m, usdBalance: w } = (0,
                  i.n3)({
                    balance: e.ithacaBalance,
                    priceInMarketReferenceCurrency: l,
                    marketReferenceCurrencyDecimals: a,
                    decimals: o,
                    marketReferencePriceInUsdNormalized: t,
                  }),
                  h = (0, i.VO)({
                    principalBalance: e.scaledVariableDebt,
                    reserveIndex: s.variableBorrowIndex,
                    reserveRate: s.variableBorrowRate,
                    lastUpdateTimestamp: s.lastUpdateTimestamp,
                    currentTimestamp: n,
                  }),
                  { marketReferenceCurrencyBalance: p, usdBalance: x } = (0,
                  i.n3)({
                    balance: h,
                    priceInMarketReferenceCurrency: l,
                    marketReferenceCurrencyDecimals: a,
                    decimals: o,
                    marketReferencePriceInUsdNormalized: t,
                  });
                return {
                  userReserve: e,
                  underlyingBalance: c,
                  underlyingBalanceMarketReferenceCurrency: d,
                  underlyingBalanceUSD: u,
                  ithacaBalance: (0, r.hE)(e.ithacaBalance),
                  ithacaBalanceMarketReferenceCurrency: m,
                  ithacaBalanceUSD: w,
                  variableBorrows: h,
                  variableBorrowsMarketReferenceCurrency: p,
                  variableBorrowsUSD: x,
                  totalBorrows: h,
                  totalBorrowsMarketReferenceCurrency: p,
                  totalBorrowsUSD: x,
                };
              })({
                userReserve: t,
                marketReferencePriceInUsdNormalized: m,
                marketReferenceCurrencyDecimals: a,
                currentTimestamp: e,
              })
            ),
            p = h.map((e) =>
              (function ({ reserve: e, marketReferenceCurrencyDecimals: t }) {
                let { userReserve: a } = e,
                  { reserve: n } = a,
                  s = n.decimals,
                  i = (e) => (0, r.Fv)(e, n.decimals);
                return Object.assign(Object.assign({}, a), {
                  underlyingBalance: (0, r.Fv)(e.underlyingBalance, s),
                  underlyingBalanceMarketReferenceCurrency: (0, r.Fv)(
                    e.underlyingBalanceMarketReferenceCurrency,
                    t
                  ),
                  underlyingBalanceUSD: e.underlyingBalanceUSD.toString(),
                  ithacaBalance: (0, r.Fv)(e.ithacaBalance, s),
                  ithacaBalanceMarketReferenceCurrency: (0, r.Fv)(
                    e.ithacaBalanceMarketReferenceCurrency,
                    t
                  ),
                  ithacaBalanceUSD: e.ithacaBalanceUSD.toString(),
                  variableBorrows: i(e.variableBorrows),
                  variableBorrowsMarketReferenceCurrency: (0, r.Fv)(
                    e.variableBorrowsMarketReferenceCurrency,
                    t
                  ),
                  variableBorrowsUSD: e.variableBorrowsUSD.toString(),
                  totalBorrows: i(e.totalBorrows),
                  totalBorrowsMarketReferenceCurrency: (0, r.Fv)(
                    e.totalBorrowsMarketReferenceCurrency,
                    t
                  ),
                  totalBorrowsUSD: e.totalBorrowsUSD.toString(),
                });
              })({ reserve: e, marketReferenceCurrencyDecimals: a })
            ),
            x = (function ({
              userReserves: e,
              marketReferencePriceInUsd: t,
              marketReferenceCurrencyDecimals: a,
              userEmodeCategoryId: n,
              userPositionsCollateral: o,
            }) {
              let {
                  totalLiquidityMarketReferenceCurrency: c,
                  totalBorrowsMarketReferenceCurrency: d,
                  totalCollateralMarketReferenceCurrency: u,
                  currentLtv: m,
                  currentLiquidationThreshold: w,
                  isInIsolationMode: h,
                  isolatedReserve: p,
                } = (function ({
                  userReserves: e,
                  userEmodeCategoryId: t,
                  userPositionsCollateral: a,
                }) {
                  let n,
                    s = (0, r.bS)("0"),
                    i = (0, r.bS)("0"),
                    l = (0, r.bS)("0"),
                    o = (0, r.hE)("0"),
                    c = (0, r.hE)("0"),
                    d = !1;
                  e.forEach((e) => {
                    if (
                      ((s = s
                        .plus(e.underlyingBalanceMarketReferenceCurrency)
                        .plus(e.ithacaBalanceMarketReferenceCurrency)),
                      (l = l.plus(e.variableBorrowsMarketReferenceCurrency)),
                      (i = i.plus(e.ithacaBalanceMarketReferenceCurrency)),
                      (o = o.plus(
                        (0, r.hE)(
                          e.ithacaBalanceMarketReferenceCurrency
                        ).multipliedBy("10000")
                      )),
                      (c = c.plus(
                        (0, r.hE)(
                          e.ithacaBalanceMarketReferenceCurrency
                        ).multipliedBy("10000")
                      )),
                      "0" !==
                        e.userReserve.reserve.reserveLiquidationThreshold &&
                        e.userReserve.usageAsCollateralEnabledOnUser)
                    ) {
                      "0" !== e.userReserve.reserve.debtCeiling &&
                        ((n = e.userReserve.reserve), (d = !0)),
                        (i = i.plus(
                          e.underlyingBalanceMarketReferenceCurrency
                        ));
                      let a = e.userReserve.reserve.eModes.find(
                        (e) => e.id === t
                      );
                      t && a && a.collateralEnabled
                        ? ((o = o.plus(
                            (0, r.hE)(
                              e.underlyingBalanceMarketReferenceCurrency
                            ).multipliedBy(a.eMode.ltv)
                          )),
                          (c = c.plus(
                            (0, r.hE)(
                              e.underlyingBalanceMarketReferenceCurrency
                            ).multipliedBy(a.eMode.liquidationThreshold)
                          )))
                        : ((o = o.plus(
                            (0, r.hE)(
                              e.underlyingBalanceMarketReferenceCurrency
                            ).multipliedBy(
                              e.userReserve.reserve.baseLTVasCollateral
                            )
                          )),
                          (c = c.plus(
                            (0, r.hE)(
                              e.underlyingBalanceMarketReferenceCurrency
                            ).multipliedBy(
                              e.userReserve.reserve.reserveLiquidationThreshold
                            )
                          )));
                    }
                  });
                  let u = (0, r.hE)(a.collateral)
                    .plus(a.mtm)
                    .minus(a.maintenanceMargin)
                    .minus(a.valueAtRisk);
                  return (
                    (s = s.plus(u)),
                    (i = i.plus(u)),
                    (o = o.plus((0, r.hE)(u).multipliedBy("10000"))),
                    (c = c.plus((0, r.hE)(u).multipliedBy("10000"))),
                    o.gt(0) && (o = (0, r.bS)(o.div(i))),
                    c.gt(0) && (c = (0, r.bS)(c.div(i))),
                    {
                      totalLiquidityMarketReferenceCurrency: s,
                      totalBorrowsMarketReferenceCurrency: l,
                      totalCollateralMarketReferenceCurrency: i,
                      currentLtv: o,
                      currentLiquidationThreshold: c,
                      isInIsolationMode: d,
                      isolatedReserve: n,
                    }
                  );
                })({
                  userReserves: e,
                  userEmodeCategoryId: n,
                  userPositionsCollateral: o,
                }),
                x = (0, i.eP)({
                  collateralBalanceMarketReferenceCurrency: u,
                  borrowBalanceMarketReferenceCurrency: d,
                  currentLtv: m,
                }),
                f =
                  h && p
                    ? s.Z.min(
                        s.Z.max(
                          0,
                          (0, r.pV)(
                            new s.Z(p.debtCeiling).minus(
                              p.isolationModeTotalDebt
                            ),
                            p.debtCeilingDecimals - a
                          )
                        ),
                        x
                      )
                    : x;
              return {
                isInIsolationMode: h,
                isolatedReserve: p,
                totalLiquidityUSD: (0, l.$)(c, t, a),
                totalCollateralUSD: (0, l.$)(u, t, a),
                totalBorrowsUSD: (0, l.$)(d, t, a),
                totalLiquidityMarketReferenceCurrency: c,
                totalCollateralMarketReferenceCurrency: u,
                totalBorrowsMarketReferenceCurrency: d,
                availableBorrowsMarketReferenceCurrency: f,
                availableBorrowsUSD: (0, l.$)(f, t, a),
                currentLoanToValue: m,
                currentLiquidationThreshold: w,
                healthFactor: (0, i.kr)({
                  collateralBalanceMarketReferenceCurrency: u,
                  borrowBalanceMarketReferenceCurrency: d,
                  currentLiquidationThreshold: w,
                }),
              };
            })({
              userReserves: h,
              marketReferencePriceInUsd: m,
              marketReferenceCurrencyDecimals: a,
              userEmodeCategoryId: d,
              userPositionsCollateral: u,
            });
          return {
            userReservesData: p,
            totalLiquidityMarketReferenceCurrency: (0, r.Fv)(
              x.totalLiquidityMarketReferenceCurrency,
              a
            ),
            totalLiquidityUSD: x.totalLiquidityUSD.toString(),
            totalCollateralMarketReferenceCurrency: (0, r.Fv)(
              x.totalCollateralMarketReferenceCurrency,
              a
            ),
            totalCollateralUSD: x.totalCollateralUSD.toString(),
            totalBorrowsMarketReferenceCurrency: (0, r.Fv)(
              x.totalBorrowsMarketReferenceCurrency,
              a
            ),
            totalBorrowsUSD: x.totalBorrowsUSD.toString(),
            netWorthUSD: x.totalLiquidityUSD
              .minus(x.totalBorrowsUSD)
              .toString(),
            availableBorrowsMarketReferenceCurrency: (0, r.Fv)(
              x.availableBorrowsMarketReferenceCurrency,
              a
            ),
            availableBorrowsUSD: x.availableBorrowsUSD.toString(),
            currentLoanToValue: (0, r.Fv)(x.currentLoanToValue, n.ih),
            currentLiquidationThreshold: (0, r.Fv)(
              x.currentLiquidationThreshold,
              n.ih
            ),
            healthFactor: x.healthFactor.toFixed(),
            userEmodeCategoryId: d,
            isInIsolationMode: x.isInIsolationMode,
            isolatedReserve: x.isolatedReserve,
          };
        }
      },
      69546: function (e, t, a) {
        "use strict";
        a.d(t, {
          CO: function () {
            return c;
          },
          L1: function () {
            return u;
          },
          VO: function () {
            return o;
          },
          eP: function () {
            return m;
          },
          kr: function () {
            return d;
          },
          n3: function () {
            return w;
          },
          rD: function () {
            return l;
          },
        });
        var r = a(70794),
          n = a(43681),
          s = a(91553),
          i = a(92328);
        function l({ rate: e, currentTimestamp: t, lastUpdateTimestamp: a }) {
          let r = (0, n.bS)(t - a),
            l = (0, n.bS)(e).dividedBy(s.E_);
          return i.sO(l, r);
        }
        function o({
          principalBalance: e,
          reserveIndex: t,
          reserveRate: a,
          lastUpdateTimestamp: r,
          currentTimestamp: s,
        }) {
          let o = (0, n.bS)(e);
          if (o.eq("0")) return o;
          let c = l({ rate: a, currentTimestamp: s, lastUpdateTimestamp: r }),
            d = i._O(c, t),
            u = i.jV(o);
          return i.jq(i._O(u, d));
        }
        function c({
          balance: e,
          index: t,
          rate: a,
          lastUpdateTimestamp: r,
          currentTimestamp: l,
        }) {
          return i.jq(
            i._O(
              i.jV(e),
              (function ({
                rate: e,
                index: t,
                lastUpdateTimestamp: a,
                currentTimestamp: r,
              }) {
                if ((0, n.bS)(e).eq("0")) return (0, n.bS)(t);
                let l = (function ({
                  rate: e,
                  currentTimestamp: t,
                  lastUpdateTimestamp: a,
                }) {
                  let r = i.jV((0, n.bS)(t - a)),
                    l = i.e9(r, i.jV(s.E_));
                  return i._O(e, l).plus(i.Hx);
                })({ rate: e, currentTimestamp: r, lastUpdateTimestamp: a });
                return i._O(l, t);
              })({
                rate: a,
                index: t,
                lastUpdateTimestamp: r,
                currentTimestamp: l,
              })
            )
          );
        }
        function d({
          borrowBalanceMarketReferenceCurrency: e,
          collateralBalanceMarketReferenceCurrency: t,
          currentLiquidationThreshold: a,
        }) {
          return (0, n.hE)(e).eq(0)
            ? (0, n.hE)("-1")
            : (0, n.hE)(t)
                .multipliedBy(a)
                .shiftedBy(-1 * s.ih)
                .div(e);
        }
        function u({
          collateralBalanceMarketReferenceCurrency: e,
          borrowBalanceMarketReferenceCurrency: t,
          currentLiquidationThreshold: a,
        }) {
          return d({
            collateralBalanceMarketReferenceCurrency: e,
            borrowBalanceMarketReferenceCurrency: t,
            currentLiquidationThreshold: (0, n.hE)(a)
              .shiftedBy(s.ih)
              .decimalPlaces(0, r.Z.ROUND_DOWN),
          });
        }
        function m({
          collateralBalanceMarketReferenceCurrency: e,
          borrowBalanceMarketReferenceCurrency: t,
          currentLtv: a,
        }) {
          if ((0, n.bS)(a).eq(0)) return (0, n.bS)("0");
          let r = (0, n.bS)(e)
            .multipliedBy(a)
            .shiftedBy(-1 * s.ih)
            .minus(t);
          return r.gt("0") ? r : (0, n.bS)("0");
        }
        function w({
          balance: e,
          priceInMarketReferenceCurrency: t,
          marketReferenceCurrencyDecimals: a,
          decimals: r,
          marketReferencePriceInUsdNormalized: s,
        }) {
          let i = (0, n.bS)(e)
              .multipliedBy(t)
              .shiftedBy(-1 * r),
            l = i.multipliedBy(s).shiftedBy(-1 * a);
          return { marketReferenceCurrencyBalance: i, usdBalance: l };
        }
      },
      81234: function (e, t, a) {
        "use strict";
        var r,
          n,
          s = a(67294);
        function i() {
          return (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var r in a)
                    ({}.hasOwnProperty.call(a, r) && (e[r] = a[r]));
                }
                return e;
              }).apply(null, arguments);
        }
        t.Z = function (e) {
          return s.createElement(
            "svg",
            i(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 16,
                height: 16,
                fill: "none",
              },
              e
            ),
            r ||
              (r = s.createElement("rect", {
                width: 16,
                height: 16,
                fill: "#35333E",
                rx: 4,
              })),
            n ||
              (n = s.createElement("path", {
                stroke: "#fff",
                d: "M13 7s-1.002-1.366-1.817-2.18a4.5 4.5 0 1 0 1.141 4.43M13 7V5m0 2h-2",
              }))
          );
        };
      },
      93613: function (e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/dashboard/margin",
          function () {
            return a(11129);
          },
        ]);
      },
      67859: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = a(63024),
          n = a(78450),
          s = a(50568);
        function i(e, t) {
          (0, s.Z)(2, arguments);
          var a = (0, r.Z)(t);
          return (0, n.Z)(e, 6e4 * a);
        }
      },
      40838: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return f;
          },
        });
        var r = a(85893),
          n = a(67294),
          s = a(80052),
          i = a(93967),
          l = a.n(i),
          o = a(15922),
          c = a(37422),
          d = a(67253),
          u = a(24514),
          m = a(86322),
          w = a(45303),
          h = a.n(w),
          p = (e) => {
            let {
                children: t,
                isOpen: a,
                side: s,
                align: i,
                offset: o,
                footer: w,
                currentStep: p,
                continueClick: x,
                skipClick: f,
              } = e,
              [v, y] = (0, n.useState)(a);
            return ((0, n.useEffect)(() => {
              y(a);
            }, [a]),
            p)
              ? (0, r.jsxs)(m.fC, {
                  open: v,
                  children: [
                    (0, r.jsx)(m.xz, {
                      asChild: !0,
                      children: (0, r.jsx)("div", { children: t }),
                    }),
                    (0, r.jsx)(m.VY, {
                      align: i,
                      side: s,
                      className: "".concat(
                        h().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, r.jsxs)(r.Fragment, {
                        children: [
                          d.R[p].title &&
                            (0, r.jsx)("div", {
                              className: l()(h().title, "tw-mb-1"),
                              children: d.R[p].title,
                            }),
                          (0, r.jsx)("div", {
                            className: h().message,
                            children: d.R[p].message,
                          }),
                          w ||
                            (0, r.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, r.jsx)("div", { className: "flexGrow" }),
                                (0, r.jsx)("div", {
                                  className: h().skipButton,
                                  onClick: f,
                                  children: "Skip",
                                }),
                                (0, r.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: x,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, r.jsx)(m.Eh, { className: h().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)(r.Fragment, {});
          };
        let x = (0, n.forwardRef)((e, t) => {
          let {
              title: a,
              children: i,
              className: c,
              panelClassName: d,
              openOnClick: u = !1,
              leaveTimeout: m = 120,
              ...w
            } = e,
            h = (0, n.useRef)(null),
            x = t || h,
            f = (0, n.useRef)(null),
            v = (0, o.F)(),
            y = (0, n.useCallback)(
              (e) => {
                var t;
                u ||
                  (f.current && clearTimeout(f.current),
                  e || null === (t = x.current) || void 0 === t || t.click());
              },
              [u]
            ),
            g = (0, n.useCallback)(
              function (e, t) {
                let a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || a) &&
                  (f.current && clearTimeout(f.current),
                  (f.current = window.setTimeout(() => {
                    e && t();
                  }, m)));
              },
              [u, m]
            );
          (0, n.useEffect)(
            () => () => {
              f.current && clearTimeout(f.current);
            },
            []
          );
          let b = (e, t) =>
            (0, r.jsxs)("div", {
              onMouseEnter: () => y(e),
              onMouseLeave: () => g(e, t),
              children: [
                (0, r.jsx)(s.O7, {
                  ref: x,
                  className: "tw-flex tw-outline-none",
                  children: a,
                }),
                (0, r.jsx)(s.Hi, {
                  anchor: "bottom",
                  className: l()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === v },
                    d
                  ),
                  children: n.cloneElement(i, {
                    closePopover: () => {
                      f.current && clearTimeout(f.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, r.jsx)(s.J2, {
            className: l()("tw-relative", c),
            children: (e) => {
              let { open: t, close: a } = e,
                n = b(t, a);
              if (w.isTutorialOpen) {
                var s, i;
                return (0, r.jsx)(p, {
                  skipClick:
                    null !== (s = w.handleSkipTutorialClick) && void 0 !== s
                      ? s
                      : () => {},
                  continueClick:
                    null !== (i = w.handleContinueTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: n,
                });
              }
              return n;
            },
          });
        });
        x.displayName = "HoverPopover";
        var f = x;
      },
      91838: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(13812),
          s = a(59324),
          i = a.n(s);
        t.Z = (e) => {
          let { icon: t, label: a, size: s } = e,
            l = s ? i()[s] : "",
            o = (0, n.I)();
          return (0, r.jsxs)("div", {
            className: "assets--"
              .concat(o, " ")
              .concat(i().asset, " ")
              .concat(l)
              .trim(),
            children: [
              t,
              a && (0, r.jsx)("p", { className: i().label, children: a }),
            ],
          });
        };
      },
      43529: function (e, t, a) {
        "use strict";
        a.d(t, {
          T: function () {
            return o;
          },
        });
        var r = a(85893),
          n = a(67294),
          s = a(24514),
          i = a(89564),
          l = a.n(i);
        let o = (e) => {
          let {
            component: t,
            value: a,
            label: n,
            checked: i = !1,
            onChange: o,
            labelClassName: c,
            className: d,
            checkmarkClassName: u,
          } = e;
          return (0, r.jsxs)("label", {
            className: "".concat(l().container, " ").concat(d),
            children: [
              (0, r.jsx)("input", {
                type: "checkbox",
                onChange: () => {
                  o && o(null != a ? a : n, !i);
                },
                checked: i,
                className: u,
              }),
              (0, r.jsxs)(s.Z, {
                direction: "row-center",
                children: [t, (0, r.jsx)("p", { className: c, children: n })],
              }),
            ],
          });
        };
        t.Z = (e) => {
          let {
              component: t,
              label: a,
              checked: i = !1,
              clearCheckMark: o,
              onChange: c,
              labelClassName: d,
              className: u,
              checkmarkClassName: m,
            } = e,
            [w, h] = (0, n.useState)(i),
            p = (e) => {
              h(e.currentTarget.checked), c && c(a, e.currentTarget.checked);
            };
          return (
            (0, n.useEffect)(() => {
              o && h(!1);
            }, [o]),
            (0, r.jsxs)("label", {
              className: "".concat(l().container, " ").concat(u),
              children: [
                (0, r.jsx)("input", {
                  type: "checkbox",
                  onChange: (e) => p(e),
                  checked: w,
                  className: m,
                }),
                (0, r.jsxs)(s.Z, {
                  children: [
                    t,
                    " ",
                    (0, r.jsx)("p", { className: d, children: a }),
                  ],
                }),
              ],
            })
          );
        };
      },
      74676: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(67294),
          s = a(27484),
          i = a.n(s),
          l = a(59731),
          o = a(39041),
          c = a.n(o),
          d = a(30202),
          u = a(88144),
          m = a(67930);
        t.Z = (e) => {
          let { hideHours: t } = e,
            { ithacaSDK: a } = (0, l.qr)(),
            s = (0, d.NL)(),
            { data: o, refetch: w } = (0, u.a)({
              queryKey: ["nextAuction"],
              enabled: !!a,
              staleTime: m.ol,
              queryFn: () => a.protocol.nextAuction(),
            }),
            h = (e) => {
              let t = i()(e),
                a = i()();
              return {
                hours: t.diff(a, "hour"),
                minutes: t.diff(a, "minute") % 60,
                seconds: t.diff(a, "second") % 60,
              };
            },
            [p, x] = (0, n.useState)({ hours: 0, minutes: 0, seconds: 0 }),
            f = (0, n.useRef)(null),
            v = () => {
              w(), s.refetchQueries({ queryKey: ["spotPrices"], exact: !1 });
            };
          return (
            (0, n.useEffect)(() => {
              (!o || o < Date.now()) && v();
              let e = () => {
                x({ ...h(o || 0) }), (f.current = Date.now());
              };
              e();
              let t = setInterval(() => {
                let t = Date.now(),
                  a = f.current ? t - f.current : 1e3;
                (f.current = t),
                  x((t) => {
                    let { hours: r, minutes: n, seconds: s } = t,
                      i = 3600 * r + 60 * n + s;
                    return (i -= Math.round(a / 1e3)) <= 0
                      ? (v(), e(), h(o || 0))
                      : {
                          hours: (r = Math.floor(i / 3600)),
                          minutes: (n = Math.floor((i % 3600) / 60)),
                          seconds: (s = i % 60),
                        };
                  });
              }, 1e3);
              return () => clearInterval(t);
            }, [o, w, s]),
            (0, n.useEffect)(() => {
              o && x(h(o));
            }, []),
            (0, r.jsxs)("div", {
              className: c().countdownTimer,
              children: [
                t
                  ? null
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        p.hours.toString().padStart(2, "0"),
                        " ",
                        (0, r.jsx)("span", { children: "Hrs" }),
                        " ",
                        (0, r.jsx)("span", {
                          className: c().white,
                          children: ":",
                        }),
                        " ",
                      ],
                    }),
                p.minutes.toString().padStart(2, "0"),
                (0, r.jsx)("span", { children: "Mins" }),
                " ",
                (0, r.jsx)("span", { className: c().white, children: ":" }),
                " ",
                p.seconds.toString().padStart(2, "0"),
                " ",
                (0, r.jsx)("span", { children: "Secs" }),
              ],
            })
          );
        };
      },
      43417: function (e, t, a) {
        "use strict";
        a.d(t, {
          F: function () {
            return C;
          },
        });
        var r = a(85893),
          n = a(67294),
          s = a(15922),
          i = a(32010),
          l = a(59731),
          o = a(30202),
          c = a(24514),
          d = a(80052),
          u = a(96752),
          m = a(21050),
          w = a(70757),
          h = a(91838),
          p = (e) => {
            let { selectedToken: t } = e;
            switch (t) {
              case "SOL":
              case "WSOL":
                return (0, r.jsx)(h.Z, {
                  icon: (0, w.XX)("SOL", "tw-size-5"),
                  label: "SOL",
                });
              default:
                return (0, r.jsx)(h.Z, {
                  icon: (0, w.XX)("ETH", "tw-size-5"),
                  label: "ETH",
                });
            }
          };
        let x = () => {
          let { underlyingCurrency: e } = (0, l.qr)(),
            t = (0, w.zC)(e),
            a = (e) => {
              "SOL" === e &&
                "SOL" !== t &&
                (window.location.href = "https://solana.ithacaprotocol.io"),
                "ETH" === e &&
                  "ETH" !== t &&
                  (window.location.href = "https://app.ithacaprotocol.io");
            };
          return (0, r.jsxs)(d.J2, {
            className: "tw-relative",
            children: [
              (0, r.jsxs)(d.O7, {
                className: "tw-flex ",
                children: [
                  (0, r.jsx)(p, { selectedToken: t }),
                  (0, r.jsx)(m.Z, { color: "#fff" }),
                ],
              }),
              (0, r.jsx)(d.Hi, {
                anchor: "bottom",
                className:
                  "tw-shadow-panel tw-z-10 tw-box-border tw-flex tw-flex-col tw-rounded-lg tw-bg-black-dark tw-backdrop-blur-[100px]",
                children: w.mr.map((e) => {
                  let { name: t, icon: n } = e;
                  return (0, r.jsxs)(
                    u.P,
                    {
                      onClick: () => a(t),
                      className:
                        "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-rounded-tl-lg tw-rounded-tr-lg tw-px-4 tw-py-3 tw-text-white hover:tw-text-ithaca-green-30 ",
                      children: [
                        n,
                        (0, r.jsx)("span", {
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
        var f = a(69448),
          v = () => {
            var e;
            let { underlyingCurrency: t } = (0, l.qr)(),
              { data: a } = (0, f.M)({ currency: t });
            return null !== (e = null == a ? void 0 : a.data.toFixed(1)) &&
              void 0 !== e
              ? e
              : "-";
          },
          y = a(87612),
          g = a(74676),
          b = a(93967),
          N = a.n(b),
          _ = a(45338),
          T = a(67930),
          j = a(18666),
          A = a(51130),
          E = a.n(A);
        let C = (e) => {
          let {
              onExpiryChange: t,
              hideHours: a,
              expiryDropdownErrorMessage: d,
            } = e,
            u = (0, s.F)(),
            m = (0, o.NL)(),
            {
              currentExpiryDate: w,
              expiryList: h,
              setCurrentExpiryDate: p,
              auctionOngoing: f,
            } = (0, l.qr)(
              (0, i.N)((e) => ({
                currentExpiryDate: e.currentExpiryDate,
                expiryList: e.expiryList,
                setCurrentExpiryDate: e.setCurrentExpiryDate,
                auctionOngoing: e.auctionOngoing,
              }))
            ),
            b = (0, n.useMemo)(
              () =>
                h.map((e) => ({
                  label: (0, j.lV)(e.toString()),
                  value: e.toString(),
                })),
              [h]
            );
          return (0, r.jsxs)(c.Z, {
            classes: N()({ "gap-5": "phone" !== u, "gap-0": "phone" === u }),
            children: [
              (0, r.jsx)("div", {
                className: ""
                  .concat(E().currency__info, " ")
                  .concat(E().divider, " pr-12"),
                children: (0, r.jsx)(x, {}),
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(E().currency__info, " ")
                  .concat(E().divider, " pr-8"),
                children: (0, r.jsx)(y.Z, {
                  hasDropdown: !0,
                  label: "Expiry Date",
                  valueList: b,
                  onChange: (e) => {
                    let a = (0, _.Dx)(e);
                    if (isNaN(a)) {
                      console.error("Invalid expiry date value: ".concat(e));
                      return;
                    }
                    a !== w &&
                      (null == t || t(),
                      p(a),
                      m.invalidateQueries({ queryKey: [T.L] }));
                  },
                  errorToastMessage: d,
                  value: (0, j.lV)(w.toString()),
                }),
              }),
              (0, r.jsx)("div", {
                className: "".concat(E().currency__info, " pr-12"),
                children: (0, r.jsx)(y.Z, {
                  label: (0, r.jsxs)(r.Fragment, {
                    children: [
                      "Next Auction",
                      " ",
                      (0, r.jsx)("span", {
                        className: N()("tw-text-xxs", {
                          "tw-italic tw-text-[#394050]": !1 === f,
                        }),
                        children: "( Auction Ongoing )",
                      }),
                    ],
                  }),
                  value: (0, r.jsx)(g.Z, { hideHours: a }),
                }),
              }),
              (0, r.jsx)("div", {
                className: E().currency__info,
                children: (0, r.jsx)(y.Z, {
                  label: "Next Auction Forward",
                  value: (0, r.jsx)(v, {}),
                }),
              }),
            ],
          });
        };
      },
      92715: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return h;
          },
        });
        var r = a(85893),
          n = a(67294),
          s = a(15922),
          i = a(18776);
        let l = (e) => {
            if (!e) return "";
            let t = e.getDate(),
              a = new Intl.DateTimeFormat("en", { month: "short" }).format(e),
              n = e.getFullYear() % 100;
            return (0, r.jsxs)(r.Fragment, { children: [t, a, n] });
          },
          o = {
            cell: "tw-size-8 tw-p-0",
            caption:
              "tw-flex tw-justify-center tw-items-center tw-mb-2 tw-font-semibold",
            caption_label: "tw-text-sm tw-text-white",
            day: "tw-size-8 tw-relative tw-flex tw-items-center tw-justify-center",
            day_range_middle: "tw-bg-ithaca-green-10",
            day_range_start:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tl-full tw-rounded-bl-full",
            day_range_end:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tr-full tw-rounded-br-full",
            head_cell: "tw-text-white tw-font-normal tw-h-10",
            months:
              "tw-flex tw-divide-x tw-divide-ithaca-green-10/50 tw-relative",
            nav: "tw-flex tw-gap-4",
            nav_button_previous: "tw-absolute tw-left-0 tw-top-0",
            nav_button_next: "tw-absolute tw-right-0 tw-top-0",
            row: "tw-m-0",
            table: "tw-border-collapse",
          };
        var c = () =>
            (0, r.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("rect", {
                  width: "16",
                  height: "16",
                  rx: "4",
                  fill: "#35333E",
                }),
                (0, r.jsx)("path", {
                  d: "M3 6C3 5.22037 3 4.83056 3.17882 4.54596C3.27207 4.39756 3.39756 4.27207 3.54596 4.17882C3.83056 4 4.22037 4 5 4H11C11.7796 4 12.1694 4 12.454 4.17882C12.6024 4.27207 12.7279 4.39756 12.8212 4.54596C13 4.83056 13 5.22037 13 6V6H3V6Z",
                  stroke: "white",
                }),
                (0, r.jsx)("rect", {
                  x: "3",
                  y: "4",
                  width: "10",
                  height: "8",
                  rx: "1.16667",
                  stroke: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M6 3L6 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  d: "M10 3L10 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
              ],
            }),
          d = a(95769),
          u = a(86322),
          m = a(74398),
          w = a.n(m),
          h = (e) => {
            let {
                minSelected: t,
                maxSelected: a,
                start: m,
                end: h,
                disabled: p = !1,
                handleSelect: x,
              } = e,
              f = (0, s.F)(),
              v = { from: m, to: h },
              [y, g] = (0, n.useState)(v),
              b = (0, n.useMemo)(
                () =>
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", {
                        children: l(null == y ? void 0 : y.from),
                      }),
                      " - ",
                      (0, r.jsx)("span", {
                        children: l(null == y ? void 0 : y.to),
                      }),
                    ],
                  }),
                [y]
              );
            return (0, r.jsxs)(u.J2, {
              children: [
                (0, r.jsxs)(u.xo, {
                  disabled: p,
                  className: w().dateRangePickerContainer,
                  children: [
                    (0, r.jsx)("span", {
                      className: "".concat(w().dateInput, " *:tw-text-sm"),
                      children: b,
                    }),
                    (0, r.jsx)(c, {}),
                  ],
                }),
                (0, r.jsx)(u.i9, {
                  children: (0, r.jsxs)(u.yk, {
                    align: "start",
                    sideOffset: 4,
                    className: w().dateBlock,
                    children: [
                      (0, r.jsx)("div", {
                        className: w().dateRangeContainer,
                        children: (0, r.jsx)("div", {
                          className: w().subContainer,
                          children: (0, r.jsx)(d._W, {
                            mode: "range",
                            formatters: {
                              formatWeekdayName: (e) => (0, i.Z)(e, "EEE"),
                            },
                            min: t,
                            max: a,
                            numberOfMonths: "desktop" == f ? 2 : 1,
                            className: "".concat(w().datePicker),
                            defaultMonth: null == y ? void 0 : y.from,
                            selected: y,
                            onSelect: (e) => g(null != e ? e : v),
                            classNames: o,
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: w().buttonContainer,
                        children: [
                          (0, r.jsx)(u.xp, {
                            className: w().cancelButton,
                            onClick: () => {
                              g(v);
                            },
                            children: "Cancel",
                          }),
                          (0, r.jsx)(u.xp, {
                            className: w().applyButton,
                            onClick: () => {
                              y && (null == x || x(y));
                            },
                            children: "Apply",
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
      61920: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(24113),
          s = a(50103),
          i = a.n(s);
        t.Z = (e) => {
          let { showButton: t = !0 } = e;
          return (0, r.jsxs)("div", {
            className: i().container,
            children: [
              (0, r.jsx)("p", {
                children: "Please connect wallet to check your details.",
              }),
              t && (0, r.jsx)(n.Z, {}),
            ],
          });
        };
      },
      56267: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(81234),
          s = a(80546),
          i = a.n(s),
          l = a(45338),
          o = a(93967),
          c = a.n(o),
          d = a(59421),
          u = a(59731),
          m = a(9681),
          w = a(70757);
        t.Z = (e) => {
          let { isAlwaysInline: t } = e,
            { collateralSummary: a, refetchAll: s, isFetching: o } = (0, d.F)(),
            { delegatedWalletAddress: h, underlyingCurrency: p } = (0, u.qr)();
          return (0, r.jsxs)("div", {
            className: "tw-flex tw-flex-col tw-gap-1",
            children: [
              h &&
                (0, r.jsx)("div", {
                  children: (0, r.jsxs)("p", {
                    className:
                      "tw-text-right tw-text-xxs tw-text-ithaca-green-30",
                    children: ["Delegate Wallet Control Enabled ", (0, m.C)(h)],
                  }),
                }),
              (0, r.jsxs)("div", {
                className: c()(i().fundlockContainer, {
                  [i().alwaysInLine]: t,
                }),
                children: [
                  (0, r.jsx)("span", {
                    className: i().title,
                    children: "Available Balance",
                  }),
                  (0, r.jsxs)("div", {
                    className: i().valueContainer,
                    children: [
                      (0, w.XX)("USDC"),
                      (0, r.jsx)("span", {
                        className: i().currency,
                        children: "USDC",
                      }),
                      (0, r.jsx)("span", {
                        className: i().value,
                        children: (0, l.uM)(
                          Number(a.USDC.availableCollateral),
                          "string",
                          "USDC",
                          2
                        ),
                      }),
                      (0, w.XX)(p),
                      (0, r.jsx)("span", {
                        className: i().currency,
                        children: p,
                      }),
                      (0, r.jsx)("span", {
                        className: i().value,
                        children: (0, l.uM)(
                          Number(a[p].availableCollateral),
                          "string",
                          p,
                          2
                        ),
                      }),
                      (0, r.jsx)("button", {
                        onClick: () => {
                          s();
                        },
                        className:
                          "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                        children: (0, r.jsx)(n.Z, {
                          className: c()({ "tw-animate-spin": o }),
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
      58224: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return T;
          },
        });
        var r = a(85893),
          n = a(15922),
          s = a(43417),
          i = a(32010),
          l = a(59731),
          o = a(30202),
          c = a(67294),
          d = a(81234),
          u = a(93967),
          m = a.n(u),
          w = a(18776),
          h = a(23279),
          p = a.n(h),
          x = a(67930),
          f = (e) => {
            let { onRefreshPrices: t } = e,
              [a, n] = (0, c.useState)(!1),
              [s, u] = (0, c.useState)(void 0),
              h = (0, o.NL)(),
              { contractsWithReferencePrices: f, currentExpiryDate: v } = (0,
              l.qr)(
                (0, i.N)((e) => ({
                  contractsWithReferencePrices: e.contractsWithReferencePrices,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              y = (0, c.useMemo)(() => [x.nA, f, v], [f, v]),
              g = (0, c.useCallback)(() => {
                let e = h.getQueryState(y);
                if (
                  !(null == e ? void 0 : e.dataUpdatedAt) &&
                  !(null == e ? void 0 : e.error)
                ) {
                  b();
                  return;
                }
                u(null == e ? void 0 : e.dataUpdatedAt);
              }, [h, y]),
              b = p()(g, 500);
            return ((0, c.useEffect)(() => {
              g();
            }, [g]),
            t)
              ? (0, r.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-items-end",
                  children: [
                    (0, r.jsxs)("button", {
                      onClick: () => {
                        n(!0),
                          null == t || t(),
                          setTimeout(() => {
                            n(!1), g();
                          }, 1e3);
                      },
                      className:
                        "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                      children: [
                        (0, r.jsx)(d.Z, {
                          className: m()({ "tw-animate-spin": a }),
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
                        s && (0, w.Z)(new Date(s), "dd MMM - HH:mm:ss"),
                      ],
                    }),
                  ],
                })
              : null;
          },
          v = a(41664),
          y = a.n(v);
        let g = (e) => {
          let { breadcrumbs: t, className: a } = e;
          return t.length
            ? (0, r.jsx)("div", {
                className: a,
                children: t.map((e, a) =>
                  (0, r.jsxs)(
                    "span",
                    {
                      children: [
                        (0, r.jsx)(y(), {
                          href: e.path,
                          className:
                            "tw-text-xs tw-font-bold hover:tw-underline",
                          children: e.label,
                        }),
                        a < t.length - 1 && " / ",
                      ],
                    },
                    e.path
                  )
                ),
              })
            : (0, r.jsx)(r.Fragment, {});
        };
        var b = a(56267),
          N = a(25978),
          _ = a.n(N),
          T = (e) => {
            let {
              breadcrumbs: t = [],
              title: a,
              onExpiryChange: i,
              onRefreshPrices: l,
            } = e;
            return "phone" === (0, n.F)()
              ? (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-mb-5",
                      children: (0, r.jsx)("h1", {
                        className: _().title,
                        children: a,
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-justify-between",
                      children: [
                        (0, r.jsx)(b.Z, {}),
                        (0, r.jsx)(f, { onRefreshPrices: l }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-space-between tw-mb-3 tw-flex",
                      children: (0, r.jsx)(s.F, { hideHours: !0 }),
                    }),
                    (0, r.jsx)(g, { breadcrumbs: t, className: "tw-mb-4" }),
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
                          children: (0, r.jsx)(s.F, {
                            hideHours: !0,
                            onExpiryChange: i,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-justify-end tw-gap-3",
                          children: [
                            (0, r.jsx)(b.Z, {}),
                            (0, r.jsx)(f, { onRefreshPrices: l }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(g, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                });
          };
      },
      91269: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(25675),
          s = a.n(n),
          i = a(81989);
        t.Z = (e) => {
          let { height: t = 30, width: a = 30, className: n } = e,
            { address: l } = (0, i.Pk)();
          return (0, r.jsx)(s(), {
            src: "https://mywalleticon.com/usericon/".concat(l),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: a,
            height: t,
            className: n,
          });
        };
      },
      21050: function (e, t, a) {
        "use strict";
        var r = a(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: a = "" } = e;
          return (0, r.jsxs)("svg", {
            className: a,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                d: "M16 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("path", {
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
      57345: function (e, t, a) {
        "use strict";
        var r = a(85893);
        t.Z = () =>
          (0, r.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "35333E",
              }),
              (0, r.jsx)("path", {
                d: "M10.6667 6.66699L8 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("path", {
                d: "M5.33301 6.66699L7.99967 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
      },
      27531: function (e, t, a) {
        "use strict";
        var r = a(85893);
        t.Z = () =>
          (0, r.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, r.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, r.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      87612: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return m;
          },
        });
        var r = a(85893),
          n = a(67294);
        let s = [
          { label: "8 Oct 23", value: "8 Oct 23" },
          { label: "17 Oct 23", value: "17 Oct 23" },
          { label: "24 Oct 23", value: "24 Oct 23" },
          { label: "30 Oct 23", value: "30 Oct 23" },
        ];
        var i = a(16795),
          l = a(71610),
          o = a.n(l),
          c = a(57345),
          d = a(18666),
          u = a(47236),
          m = (e) => {
            let {
                label: t,
                value: a,
                valueList: l = s,
                defaultValue: m = s[0].value,
                subValue: w,
                hasDropdown: h = !1,
                onChange: p,
                errorToastMessage: x,
              } = e,
              { showErrorToast: f } = (0, u.Z)(),
              [v, y] = (0, n.useState)(!1),
              [g, b] = (0, n.useState)(a || m);
            (0, n.useEffect)(() => {
              b(a || m);
            }, [a, m]);
            let N = (0, n.useRef)(null);
            (0, n.useEffect)(() => {
              let e = (e) => {
                N.current && !N.current.contains(e.target) && y(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, i.M)(() => {
                v && y(!1);
              });
            let _ = () => {
                y(!v);
              },
              T = (e) => {
                b((0, d.lV)(e)), y(!1), p && p(e);
              };
            return (0, r.jsxs)("div", {
              title: x,
              onClick: () => {
                if (h) {
                  if (null == x ? void 0 : x.length) {
                    f({ title: x, message: "" });
                    return;
                  }
                  _();
                }
              },
              className: ""
                .concat(o().labelValue, " ")
                .concat(h ? o().labelDropdown : ""),
              ref: N,
              children: [
                (0, r.jsxs)("div", {
                  className: o().contentWrapper,
                  children: [
                    (0, r.jsx)("span", { className: o().label, children: t }),
                    (0, r.jsxs)("span", {
                      className: o().value,
                      children: [
                        g,
                        w &&
                          (0, r.jsx)("span", {
                            className: o().subValue,
                            children: w,
                          }),
                      ],
                    }),
                  ],
                }),
                h &&
                  (0, r.jsxs)("div", {
                    className: ""
                      .concat(o().dropdown, " ")
                      .concat(v ? o().isActive : ""),
                    children: [
                      (0, r.jsx)(c.Z, {}),
                      v &&
                        (0, r.jsx)("ul", {
                          className: o().dropdownMenu,
                          children: l.map((e) =>
                            (0, r.jsx)(
                              "li",
                              {
                                className: ""
                                  .concat(o().dropdownItem, " ")
                                  .concat(g === e.value ? o().selected : ""),
                                onClick: () => T(e.value),
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
      92505: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(9008),
          s = a.n(n);
        t.Z = () =>
          (0, r.jsxs)(s(), {
            children: [
              (0, r.jsx)("title", {
                children: "Ithaca - Non-Custodial, Composable Option Protocol",
              }),
              (0, r.jsx)("meta", {
                name: "description",
                content:
                  "Ithaca is a decentralized options and collateralized funding protocol offering optimal risk sharing across various states and time, embedding itself in all steps of any risk sharing instrument's lifecycle.",
              }),
              (0, r.jsx)("meta", {
                property: "og:title",
                content: "Ithaca - Empowering Optimal Risk Sharing",
              }),
              (0, r.jsx)("meta", {
                property: "og:description",
                content:
                  "Explore Ithaca's decentralized ecosystem for trading, risk management, and protocol governance. Engage with our cross-chain infrastructure and contribute to the future of digital value representation.",
              }),
              (0, r.jsx)("meta", {
                property: "og:image",
                content: "/ithaca-og-image.png",
              }),
              (0, r.jsx)("meta", {
                name: "twitter:title",
                content:
                  "Ithaca Protocol: Decentralize Your Trading Experience",
              }),
              (0, r.jsx)("meta", {
                name: "twitter:description",
                content:
                  "Join Ithaca, a decentralized trading and risk management ecosystem, utilizing cross-chain solutions for a seamless trading experience. Discover, trade, and manage risk today.",
              }),
              (0, r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, r.jsx)("meta", {
                property: "twitter:domain",
                content: "https://app.ithacaprotocol.io/",
              }),
              (0, r.jsx)("meta", {
                name: "twitter:image",
                content: "/ithaca-og-image.png",
              }),
            ],
          });
      },
      46656: function (e, t, a) {
        "use strict";
        a.r(t);
        var r = a(85893),
          n = a(93967),
          s = a.n(n),
          i = a(67294),
          l = a(43495),
          o = a(51526),
          c = a(73935),
          d = a(37422),
          u = a(65440),
          m = a(27531),
          w = a(3274),
          h = a.n(w);
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
            title: a,
            onCloseModal: n,
            onSubmitOrder: w,
            isLoading: x,
            isOpen: f,
            hideFooter: v,
            className: y,
            headerContainerClassName: g = "",
            showCloseIcon: b = !0,
          } = e;
          (0, i.useEffect)(() => {
            f
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && n();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [f, n]);
          let N = (0, r.jsx)(l.E.div, {
            className: s()(h().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => n(),
            children: (0, r.jsxs)(l.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: s()(
                h().modal,
                y,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: p,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, r.jsxs)("div", {
                  className: s()(h().modalHeader, "tw-px-6 tw-py-4", g),
                  children: [
                    (0, r.jsx)("h4", {
                      className: s()(
                        h().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: a,
                    }),
                    b
                      ? (0, r.jsx)(d.Z, {
                          onClick: n,
                          className: h().buttonClose,
                          title: "Click to close modal",
                          children: (0, r.jsx)(m.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: s()(
                    h().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !v && w
                      ? (0, r.jsx)("div", {
                          className: h().modalFooter,
                          children: (0, r.jsx)(d.Z, {
                            className: s()(h().confirmButton, {
                              [h().buttonLoading]: x,
                            }),
                            onClick: w,
                            title: "Click to confirm",
                            children: x ? (0, r.jsx)(u.Z, {}) : "Confirm",
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
                (0, r.jsx)(o.M, { initial: !0, mode: "wait", children: N }),
                document.body
              )
            : null;
        };
      },
      20847: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(45338),
          s = a(93967),
          i = a.n(s);
        t.Z = (e) => {
          let {
              plusMinusOnly: t = !1,
              labelClassName: a,
              value: s,
              currency: l,
              showAbsValue: o = !1,
              className: c,
            } = e,
            d = "".concat(s).includes("e") ? Number((0, n.eT)(s)) : s,
            u = (0, n.uM)(Number(d), "string", l, void 0, !0);
          if (0 === d) return (0, r.jsx)("p", { children: u });
          let m = d > 0;
          if (t) {
            let e = m ? "+" : "-";
            return (0, r.jsx)("div", {
              className: i()(
                "tw-flex tw-flex-row tw-items-center tw-gap-0.5",
                c
              ),
              children: (0, r.jsxs)("p", {
                className: i()("tw-text-base", {
                  "tw-text-ithaca-red-20": !m,
                  "tw-text-ithaca-green-30": m,
                }),
                children: [e, o ? Math.abs(d) : u],
              }),
            });
          }
          let w = m ? "Pay" : "Receive";
          return (0, r.jsxs)("div", {
            className: i()("tw-flex tw-flex-col tw-items-center tw-gap-0.5", c),
            children: [
              (0, r.jsx)("p", {
                className: i()("tw-text-ithaca-white-60", "tw-text-xxs", a),
                children: w,
              }),
              (0, r.jsx)("p", {
                className: i()("tw-text-base", {
                  "tw-text-ithaca-red-20": m,
                  "tw-text-ithaca-green-30": !m,
                }),
                children: o ? Math.abs(d) : u,
              }),
            ],
          });
        };
      },
      84624: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return R;
            },
          });
        var r = a(85893),
          n = a(67294),
          s = a(93967),
          i = a.n(s),
          l = a(46656),
          o = a(59731),
          c = a(55506),
          d = a(10066),
          u = a(3955),
          m = a.n(u),
          w = a(13090),
          h = (e) => {
            let { detail: t } = e;
            return (0, r.jsx)("div", {
              className: i()(m().summary, "!tw-mt-0"),
              children: [
                { label: "Order Date", render: () => (0, d.m2)(t.orderDate) },
                {
                  label: "Currency Pair",
                  render: () =>
                    (0, r.jsx)("div", {
                      className: m().currency,
                      children: (0, d._S)(t.currencyPair),
                    }),
                },
                { label: "Product", render: () => t.product },
                { label: "Side", render: () => (0, w.U)(t.side) },
                { label: "Size", render: () => t.size },
                { label: "Expiry", render: () => (0, d.m2)(t.tenor) },
                {
                  label: "Collateral Amount",
                  render: () =>
                    (0, r.jsx)(c.Z, {
                      wethAmount: t.wethAmount,
                      usdcAmount: t.usdcAmount,
                    }),
                },
                { label: "Order Limit", render: () => t.orderLimit },
              ].map((e, t) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: m().row,
                    children: [
                      (0, r.jsx)("div", {
                        className: m().label,
                        children: e.label,
                      }),
                      (0, r.jsx)("div", {
                        className: m().value,
                        children: e.render(),
                      }),
                    ],
                  },
                  t
                )
              ),
            });
          },
          p = a(46449),
          x = a(47236),
          f = a(47054),
          v = a(48741),
          y = a(77768),
          g = a.n(y),
          b = a(45686),
          N = a(62582),
          _ = a(18572),
          T = a(87214),
          j = a(90639),
          A = a(88144),
          E = a(67930),
          C = a(59421),
          S = a(75922),
          D = a(18666),
          I = a(45338),
          O = a(81989),
          R = (e) => {
            let { isPreview: t = !1 } = e,
              { isConnected: a } = (0, O.Pk)(),
              {
                newToast: s,
                ithacaSDK: c,
                isAuthenticated: u,
                auctionOngoing: m,
                expiryList: w,
                currentExpiryDate: y,
                setCurrentExpiryDate: R,
              } = (0, o.qr)(),
              k = t ? p.KP : void 0,
              {
                currentPage: L,
                handlePageChange: B,
                pageStart: U,
                pageEnd: P,
              } = (0, p.ZP)(k),
              M = t ? j.vj.PREVIEW_LIVE : j.vj.LIVE,
              [F, W] = (0, n.useState)([]),
              [H, Z] = (0, n.useState)(0),
              [q, Y] = (0, n.useState)(!1),
              [V, X] = (0, n.useState)(!1),
              [z, G] = (0, n.useState)(null),
              [K, $] = (0, n.useState)(""),
              [Q, J] = (0, n.useState)(!0),
              [ee, et] = (0, n.useState)(!1),
              { refetchFundLockState: ea, refetchLockedCollateralData: er } =
                (0, C.F)(),
              en = (0, n.useMemo)(() => a && u, [a, u]),
              {
                setDashboardFilter: es,
                dashboard: {
                  sideFilter: ei,
                  currencyFilter: el,
                  strikeFilter: eo,
                  productFilter: ec,
                },
              } = (0, o.xc)(),
              ed = es("strikeFilter"),
              eu = es("productFilter"),
              em = es("currencyFilter"),
              ew = es("sideFilter"),
              { showToast: eh } = (0, x.Z)(),
              {
                data: ep = [],
                isPending: ex,
                refetch: ef,
              } = (0, A.a)({
                queryKey: [E.Rq],
                queryFn: async () => {
                  let e = await c.orders.clientOpenOrders();
                  return (0, N.PC)(e, M);
                },
                refetchInterval: E.x6,
                enabled: en,
              });
            (0, n.useEffect)(() => {
              s &&
                ("NEW" === s.orderStatus || "FILLED" === s.orderStatus) &&
                ef();
            }, [s]);
            let ev = (0, n.useMemo)(
                () =>
                  Array.from(new Set(ep.flatMap((e) => e.strikeGroup)))
                    .sort()
                    .map((e) => "".concat(e)),
                [ep]
              ),
              ey = (0, n.useMemo)(
                () =>
                  Array.from(
                    new Set(ep.map((e) => (0, N.Yf)(e.product)))
                  ).sort(),
                [ep]
              );
            (0, n.useEffect)(() => {
              0 !== ev.length &&
                (eo.every((e) => ev.map((e) => e).includes(e)) || ed([]));
            }, [ev, eo]);
            let [eg, eb] = (0, n.useState)([]),
              eN = (e) => {
                var t, a;
                let r =
                  (null === (a = F[e].expandedInfo) || void 0 === a
                    ? void 0
                    : null === (t = a[e]) || void 0 === t
                    ? void 0
                    : t.size) || 0;
                G({ ...F[e], size: r }), Y(!0);
              };
            (0, n.useEffect)(() => {
              !ee && F.length > 0 && (ej("Order Date", !1), et(!0));
            }, [ep, ee, F]);
            let e_ = (e) => {
                eg.includes(e)
                  ? eb((t) => t.filter((t) => t !== e))
                  : eb((t) => [...t, e]);
              },
              eT = () => {
                let e = (0, d.em)(ep, ec);
                switch (
                  ((e = (0, d.up)(e, ei)),
                  (e = (0, d.lU)(e, el)),
                  (e = (0, d._4)(e, eo)),
                  t && (e = (0, d.x0)(e, (0, D.lV)(y.toString()))),
                  K)
                ) {
                  case "Order Date":
                    e = (0, d.U9)(e, Q);
                    break;
                  case "Expiry":
                  case "Collateral Amount":
                    e = (0, d.e4)(e, Q);
                    break;
                  case "Order Limit":
                    e = (0, d.Rd)(e, Q);
                    break;
                  case "Fill %":
                    e = (0, d.YG)(e, Q);
                    break;
                  case "Status":
                    e = (0, d.ow)(e, Q);
                }
                Z(e.length), W(e.slice(U, P));
              };
            (0, n.useEffect)(() => {
              u && !ex && eT();
            }, [ex, u, ep, ec, ei, eo, el, K, Q, U, P, k, y]);
            let ej = (e, t) => {
                $(e), K != e ? ($(e), J(t)) : J(!Q);
              },
              eA = !F.length && ex && en,
              eE = !F.length && !ex,
              eC = F.length > 0;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                t &&
                  (0, r.jsx)("div", {
                    className: "tw-mb-8",
                    children: (0, r.jsx)(S.Z, {
                      size: "regular",
                      options: w.map((e) => ({
                        value: "".concat(e),
                        option: (0, D.lV)(e.toString()),
                      })),
                      name: "expiryDate",
                      selectedOption: "".concat(y),
                      onChange: (e) => {
                        R((0, I.Dx)(e));
                      },
                    }),
                  }),
                (0, r.jsxs)("div", {
                  className: i()(
                    M === j.vj.LIVE
                      ? g().gridContainerTableLiveOrders
                      : g().gridContainerTableLivePreviewOrders,
                    { [g().isOpacity]: !en }
                  ),
                  children: [
                    (0, r.jsx)(f.Z, {
                      updateSort: ej,
                      currencyArray: el,
                      clearFilterArray: (e) => {
                        switch (e) {
                          case "side":
                            return ew([]);
                          case "product":
                            return eu([]);
                          case "currency":
                            return em([]);
                          case "strike":
                            return ed([]);
                        }
                      },
                      productArray: ec,
                      sideArray: ei,
                      setSideArray: ew,
                      setProductArray: eu,
                      setCurrencyArray: em,
                      type: M,
                      handleCancelAllOrder: () => {
                        X(!0),
                          c.orders.orderCancelAll().then(() => {
                            ef(), X(!1), Y(!1), G(null);
                          });
                      },
                      strikesArray: eo,
                      setStrikeArray: ed,
                      strikeList: ev,
                      productList: ey,
                    }),
                    eC &&
                      F.map((e, a) => {
                        let s = eg.includes(a);
                        return (0, r.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, r.jsx)("div", {
                                className: i()(
                                  "tw-col-span-full -tw-mb-11 tw-h-11 tw-rounded-md",
                                  {
                                    "tw-translate-y-2": 0 !== a,
                                    "-tw-translate-y-1": 0 === a,
                                    "tw-bg-green-500/5": m,
                                  }
                                ),
                              }),
                              (0, r.jsx)(v.Z, {
                                handleRowExpand: e_,
                                expandedRow: eg,
                                row: e,
                                cancelOrder: !0,
                                handleCancelOrderClick: eN,
                                rowIndex: a,
                                type: M,
                                isPreview: t,
                              }),
                              (0, r.jsx)(T.Z, {
                                isRowExpanded: s,
                                type: M,
                                children: (0, r.jsx)(b.Z, {
                                  data: e.expandedInfo || [],
                                  type: M,
                                }),
                              }),
                            ],
                          },
                          a
                        );
                      }),
                    (0, r.jsx)("div", {
                      style: { minHeight: (0, N.OS)(F.length) },
                      className: "tw-col-span-full",
                      children: (0, r.jsx)(_.y, {
                        description: !0,
                        displayIsLoading: eA,
                        displayNoResults: eE,
                        isAuthenticated: en,
                        totalItems: H,
                        currentPage: L,
                        handlePageChange: B,
                        pageLimit: k,
                      }),
                    }),
                  ],
                }),
                q &&
                  z &&
                  (0, r.jsx)(l.default, {
                    title: "Cancel Order",
                    onCloseModal: () => {
                      Y(!1), G(null);
                    },
                    onSubmitOrder: () => {
                      X(!0),
                        c.orders
                          .orderCancel(
                            (null == z ? void 0 : z.clientOrderId) || 0
                          )
                          .then(() => {
                            ef(),
                              ea(),
                              er(),
                              X(!1),
                              Y(!1),
                              G(null),
                              eh({
                                title: "Order Cancelled",
                                message: "Your order has been cancelled",
                              });
                          });
                    },
                    isLoading: V,
                    isOpen: q,
                    children: (0, r.jsx)(h, { detail: z }),
                  }),
              ],
            });
          };
      },
      6316: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            MAX_DAYS_SELECTED: function () {
              return W;
            },
            MIN_DAYS_SELECTED: function () {
              return H;
            },
            default: function () {
              return Y;
            },
          });
        var r = a(85893),
          n = a(67294),
          s = a(47236),
          i = a(46449),
          l = a(32010),
          o = a(12002),
          c = a(59731),
          d = a(15394),
          u = a(47054),
          m = a(48741),
          w = a(87214),
          h = a(45686),
          p = (e) => {
            let { data: t, showList: a, type: s, onOpenPayoffDiagram: i } = e,
              [l, o] = (0, n.useState)([]),
              c = (e, t) => {
                t ? o((t) => t.filter((t) => t !== e)) : o((t) => [...t, e]);
              };
            return a
              ? (0, r.jsx)(r.Fragment, {
                  children: t.map((e, t) => {
                    let a = l.includes(t);
                    return (0, r.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          (0, r.jsx)(m.Z, {
                            rowIndex: t,
                            row: e,
                            handleOpenPayoffDiagram: i,
                            handleRowExpand: () => c(t, a),
                            expandedRow: l,
                            type: s,
                          }),
                          (0, r.jsx)(w.Z, {
                            isRowExpanded: a,
                            type: s,
                            children: (0, r.jsx)(h.Z, {
                              data: e.expandedInfo || [],
                              type: s,
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                })
              : null;
          },
          x = a(92715),
          f = a(88144),
          v = a(27484),
          y = a.n(v),
          g = a(64740),
          b = a(45343),
          N = a(18666),
          _ = (e) => {
            let { range: t, enableQuery: a = !0 } = e,
              r = (0, c.qr)((e) => e.ithacaSDK),
              {
                data: n,
                isPending: s,
                error: i,
              } = (0, f.a)({
                queryKey: ["trade-report", t, a],
                enabled: a,
                queryFn: async () =>
                  (
                    await r.client.tradeHistory(
                      (0, g.Z)(t.from).getTime(),
                      (0, b.Z)(t.to).getTime(),
                      0,
                      999
                    )
                  ).reduce((e, t) => {
                    if (
                      "FILLED" !== t.orderStatus &&
                      "PARTIALLY_FILLED" !== t.orderStatus
                    )
                      return e;
                    let a = t.details.reduce((e, t, a) => {
                        var r;
                        return (
                          (e["leg".concat(a + 1, "ContractId")] = t.contractId),
                          (e["leg".concat(a + 1, "Payoff")] =
                            t.contractDto.payoff),
                          (e["leg".concat(a + 1, "Strike")] =
                            t.contractDto.economics.strike || ""),
                          (e["leg".concat(a + 1, "Side")] = t.side),
                          (e["leg".concat(a + 1, "FilledQty")] =
                            t.originalQty - t.remainingQty),
                          (e["leg".concat(a + 1, "Expiry")] = (0, N.p6)(
                            t.expiry.toString(),
                            N.Nn,
                            N.KJ
                          )),
                          (e["leg".concat(a + 1, "ExecPrice")] =
                            null !== (r = null == t ? void 0 : t.execPrice) &&
                            void 0 !== r
                              ? r
                              : ""),
                          e
                        );
                      }, {}),
                      r = {
                        orderId: t.orderId,
                        orderStatus: t.orderStatus,
                        netPrice: t.netPrice,
                        orderDate: y()(t.revDate).format("DDMMMYY HH:mm"),
                        orderDescr: t.orderDescr,
                        currencyPair: t.collateral.currencyPair,
                        underlyingCollateral: t.collateral.underlierAmount,
                        numeraireColalteral: t.collateral.numeraireAmount,
                        ...a,
                      };
                    return e.push(r), e;
                  }, []),
              });
            return {
              tradeReport: n,
              isProcessingTradeReport: s,
              tradeReportError: i,
            };
          },
          T = a(60857),
          j = a(55261);
        let A = {
          title: "Failed to Download",
          message: "Try selecting a shorter date range.",
        };
        var E = (e) => {
            let { range: t } = e,
              {
                tradeReport: a,
                isProcessingTradeReport: i,
                tradeReportError: l,
              } = _({ range: t }),
              { showErrorToast: o } = (0, s.Z)();
            return (
              (0, n.useEffect)(() => {
                l && !i && o(A);
              }, [l, o, i]),
              (0, r.jsxs)(j.Z, {
                disabled: i,
                filename: "trade_history_"
                  .concat(y()(t.from).format("DD-MM-YY"), "_")
                  .concat(y()(t.to).format("DD-MM-YY")),
                className:
                  "tw-relative tw-flex tw-min-h-[30px] tw-cursor-pointer tw-items-center tw-justify-center tw-gap-1 tw-rounded-full tw-bg-[#3C8D60] tw-px-4 tw-py-2 tw-font-roboto tw-text-xs tw-font-semibold tw-text-white",
                datas: a,
                handleError: () => o(A),
                children: [
                  (0, r.jsx)("span", {
                    className: "tw-hidden sm:tw-inline",
                    children: "Download Trade History",
                  }),
                  (0, r.jsx)(T.Z, {
                    width: 20,
                    height: 20,
                    "aria-label": "Download Trade History",
                  }),
                ],
              })
            );
          },
          C = a(18572),
          S = a(46656),
          D = a(37422),
          I = a(4359),
          O = (e) => {
            let { isOpen: t, closePayoffModal: a, type: n, data: s } = e;
            return (0, r.jsx)(S.default, {
              isOpen: t,
              onCloseModal: a,
              title: (0, r.jsxs)(r.Fragment, {
                children: [
                  "Position Summary ",
                  (0, r.jsx)("span", {
                    className: "tw-ml-2 tw-text-xs tw-text-ithaca-white-60",
                    children: null == s ? void 0 : s.orderDate,
                  }),
                ],
              }),
              children: (0, r.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-5",
                children: [
                  s &&
                    (0, r.jsx)(I.Z, {
                      showProfitLoss: !0,
                      tableType: n,
                      data: s.expandedInfo,
                    }),
                  (0, r.jsx)(D.Z, {
                    title: "close",
                    className: "mt-10",
                    onClick: a,
                    children: "Close",
                  }),
                ],
              }),
            });
          },
          R = a(10066),
          k = a(93967),
          L = a.n(k),
          B = a(62582),
          U = a(77768),
          P = a.n(U),
          M = a(90639),
          F = a(73935);
        let W = 30,
          H = 2,
          Z = { from: (0, d.Z)(new Date(), 7), to: new Date() },
          q = {
            title: "Failed to Download",
            message: "Try selecting a shorter date range.",
          };
        var Y = (e) => {
          let { agentId: t } = e,
            { showErrorToast: a } = (0, s.Z)(),
            {
              currentPage: d,
              handlePageChange: m,
              pageStart: w,
              pageEnd: h,
            } = (0, i.ZP)(),
            [f, v] = (0, c.qr)(
              (0, l.N)((e) => [e.isAuthenticated, e.expiryList])
            ),
            [y, g] = (0, n.useState)(Z),
            [b, N] = (0, n.useState)(null),
            [_, T] = (0, n.useState)(!1),
            [j, A] = (0, n.useState)(""),
            [S, D] = (0, n.useState)(!0),
            [I, k] = (0, n.useState)([]),
            [U, Y] = (0, n.useState)([]),
            [V, X] = (0, n.useState)([]),
            [z, G] = (0, n.useState)([]),
            K = (0, n.useMemo)(() => !!t || f, [t, f]),
            $ = (0, n.useMemo)(() => {
              var e, t;
              return {
                from: null !== (e = y.from) && void 0 !== e ? e : Z.from,
                to: null !== (t = y.to) && void 0 !== t ? t : Z.to,
              };
            }, [y]),
            {
              data: Q = [],
              isLoading: J,
              error: ee,
            } = (0, o.rg)({
              enableQuery: K,
              range: $,
              expiryList: v,
              agentId: t,
            }),
            { totalItemsAmount: et, slicedData: ea } = (0, n.useMemo)(() => {
              let e = (0, R.em)(Q, U);
              switch (
                ((e = (0, R.up)(e, I)),
                (e = (0, R.lU)(e, V)),
                (e = (0, R._4)(e, z)),
                j)
              ) {
                case "Order Date":
                  e = (0, R.U9)(e, S);
                  break;
                case "Expiry":
                case "Collateral Amount":
                  e = (0, R.e4)(e, S);
                  break;
                case "Price Traded":
                  e = (0, R.Rd)(e, S);
              }
              return { totalItemsAmount: e.length, slicedData: e.slice(w, h) };
            }, [Q, U, I, V, z, j, S, w, h]);
          (0, n.useEffect)(() => {
            !J && ee && a(q);
          }, [J, ee, a]);
          let er = (0, n.useMemo)(
              () =>
                Array.from(new Set(Q.flatMap((e) => e.strikeGroup)))
                  .sort()
                  .map((e) => "".concat(e)),
              [Q]
            ),
            en = (0, n.useMemo)(
              () =>
                Array.from(new Set(Q.map((e) => (0, B.Yf)(e.product)))).sort(),
              [Q]
            ),
            es = (0, n.useCallback)(
              (e, t) => {
                A(e), j != e ? (A(e), D(t)) : D(!S);
              },
              [j, S]
            ),
            ei = J && K,
            el = !ea.length && !J,
            eo = ea.length > 0 && !J;
          return (
            (0, n.useEffect)(() => {
              !_ && ea.length > 0 && (es("Order Date", !1), T(!0));
            }, [_, ea, es]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(O, {
                  isOpen: !!b,
                  closePayoffModal: () => {
                    N(null);
                  },
                  type: M.vj.HISTORY,
                  data: b,
                }),
                document.querySelector("#tabsPortal") &&
                  (0, F.createPortal)(
                    (0, r.jsx)(r.Fragment, {
                      children:
                        K &&
                        (0, r.jsxs)("div", {
                          className:
                            "-tw-mt-2 tw-flex tw-items-end tw-gap-4 sm:tw-items-center",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "tw-flex tw-items-center tw-gap-1 tw-text-xs sm:tw-flex-row",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "tw-hidden sm:tw-inline",
                                  children: "Select ",
                                }),
                                "Date",
                                (0, r.jsx)(x.Z, {
                                  minSelected: H,
                                  maxSelected: W,
                                  start: y.from,
                                  end: y.to,
                                  handleSelect: (e) => {
                                    g(null != e ? e : Z);
                                  },
                                }),
                              ],
                            }),
                            (0, r.jsx)(E, { range: $ }),
                          ],
                        }),
                    }),
                    document.querySelector("#tabsPortal")
                  ),
                (0, r.jsxs)("div", {
                  className: L()(P().gridContainerTableHistory, {
                    [P().isOpacity]: !K,
                  }),
                  children: [
                    (0, r.jsx)(u.Z, {
                      updateSort: es,
                      currencyArray: V,
                      clearFilterArray: (e) => {
                        switch (e) {
                          case "side":
                            return k([]);
                          case "product":
                            return Y([]);
                          case "currency":
                            return X([]);
                        }
                      },
                      productArray: U,
                      sideArray: I,
                      setSideArray: k,
                      setProductArray: Y,
                      setCurrencyArray: X,
                      type: M.vj.HISTORY,
                      strikesArray: z,
                      setStrikeArray: G,
                      strikeList: er,
                      productList: en,
                    }),
                    (0, r.jsx)(p, {
                      data: ea,
                      showList: eo,
                      type: M.vj.HISTORY,
                      onOpenPayoffDiagram: (e) => {
                        N(e);
                      },
                    }),
                    (0, r.jsx)("div", {
                      style: { minHeight: (0, B.OS)(ea.length) },
                      className: "tw-col-span-full",
                      children: (0, r.jsx)(C.y, {
                        description: !0,
                        displayIsLoading: ei,
                        displayNoResults: el,
                        isAuthenticated: K,
                        totalItems: et,
                        currentPage: d,
                        handlePageChange: m,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      },
      12002: function (e, t, a) {
        "use strict";
        a.d(t, {
          BL: function () {
            return m;
          },
          rg: function () {
            return h;
          },
          z0: function () {
            return w;
          },
        });
        var r = a(59731),
          n = a(88144),
          s = a(64740),
          i = a(45343),
          l = a(62582),
          o = a(69881),
          c = a(90639),
          d = a(51700),
          u = a(67930);
        let m = 999,
          w = 0,
          h = (e) => {
            let { enableQuery: t, range: a, expiryList: h, agentId: p } = e,
              x = (0, r.qr)((e) => e.ithacaSDK);
            return (0, n.a)({
              queryKey: ["clientOrders", a.from, a.to, h, p],
              queryFn: async () => {
                let e = (
                    p
                      ? await (0, d.uD)({ resource: "trades", agentId: p })
                      : await x.client.tradeHistory(
                          (0, s.Z)(a.from).getTime(),
                          (0, i.Z)(a.to).getTime(),
                          w,
                          m
                        )
                  ).filter((e) => {
                    let { orderStatus: t } = e;
                    return "FILLED" === t || "PARTIALLY_FILLED" === t;
                  }),
                  t = p
                    ? {
                        from: (0, s.Z)(a.from).getTime(),
                        to: (0, i.Z)(a.to).getTime(),
                      }
                    : void 0;
                t &&
                  (e = e.filter(
                    (e) => e.revDate >= t.from && e.revDate <= t.to
                  ));
                let r = (0, l.PC)(e, c.vj.HISTORY),
                  n = r
                    .map((e) => ({
                      orderId: e.clientOrderId,
                      details: e.expandedInfo.map((t) => ({
                        currencyPair: e.currencyPair,
                        payoff: t.type,
                        expiry: t.expiryUnparsed,
                        strike: t.strike || 0,
                        position: "BUY" === t.side ? t.size : -t.size,
                      })),
                    }))
                    .filter(
                      (e) => !e.details.find((e) => !h.includes(e.expiry))
                    ),
                  u = await (0, o.mN)(n);
                return r.map((e) => {
                  let t = u.data.find((t) => t.orderId === e.clientOrderId);
                  return {
                    ...e,
                    modelPrice: (null == t ? void 0 : t.price)
                      ? Number(t.price)
                      : 0,
                  };
                });
              },
              enabled: t,
              refetchInterval: u.x6,
            });
          };
      },
      38606: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return I;
            },
          });
        var r = a(85893),
          n = a(67294),
          s = a(93967),
          i = a.n(s),
          l = a(59731),
          o = a(77768),
          c = a.n(o),
          d = a(87214),
          u = a(18572),
          m = a(62582),
          w = a(90639);
        let h = () => (0, r.jsx)("div", {});
        var p = (e) => {
            let { data: t } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(h, {}),
                (0, r.jsx)("div", {
                  className: c().headerExpandedTable,
                  children: "Strategy",
                }),
                w.GB.map((e, t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: c().cell,
                      style: { flexDirection: "column", ...e.style },
                      children: (0, r.jsx)(
                        "div",
                        { className: c().cell, children: e.name },
                        t
                      ),
                    },
                    t
                  )
                ),
                (0, r.jsx)(h, {}),
                (0, r.jsx)("div", {
                  style: { gridColumn: "b/i" },
                  children: (0, r.jsx)("div", { className: c().separator }),
                }),
                (0, r.jsx)(h, {}),
                t.map((e, t) =>
                  (0, r.jsxs)(
                    n.Fragment,
                    {
                      children: [
                        (0, r.jsx)("div", {
                          style: { gridColumn: "a/j", marginTop: 15 },
                        }),
                        (0, r.jsx)(h, {}),
                        (0, r.jsx)("div", {
                          className: ""
                            .concat(c().cellContentExpanded, " ")
                            .concat(c().bolded),
                          children: e.tenor,
                        }),
                        (0, r.jsx)("div", {
                          className: c().cellContentExpanded,
                          children: e.product,
                        }),
                        (0, r.jsx)("div", {
                          className: c().cellContentExpanded,
                          children: e.strike,
                        }),
                        (0, r.jsx)("div", {
                          className: c().cellContentExpanded,
                          style: { justifyContent: "flex-end" },
                          children: e.quantity,
                        }),
                        (0, r.jsx)("div", {
                          className: c().cellContentExpanded,
                          style: { justifyContent: "flex-end" },
                          children: e.avgPrice,
                        }),
                        (0, r.jsx)(h, {}),
                      ],
                    },
                    t
                  )
                ),
                (0, r.jsx)("div", {
                  style: { gridColumn: "a/j", marginTop: 15 },
                }),
              ],
            });
          },
          x = a(45217),
          f = a(37422),
          v = a(16795),
          y = a(23870),
          g = a(71367),
          b = a(10066),
          N = a(43529),
          _ = (e) => {
            let {
                updateSort: t,
                expiryAvailableOptions: a,
                expiryFilter: s,
                setExpiryFilter: i,
                currencyPairFilter: o,
                setCurrencyPairFilter: d,
              } = e,
              { underlyingCurrency: u } = (0, l.qr)(),
              [m, h] = (0, n.useState)(null),
              p = (0, n.useRef)(null),
              _ = (0, n.useRef)(null),
              T = (e) => () => {
                e === m ? h(null) : h(e);
              };
            (0, v.M)(() => {
              m && h(null);
            }),
              (0, n.useEffect)(() => {
                let e = (e) => {
                  _.current &&
                    !_.current.contains(e.target) &&
                    p.current &&
                    !p.current.contains(e.target) &&
                    h(null);
                };
                return (
                  document.addEventListener("click", e, !0),
                  () => {
                    document.removeEventListener("click", e, !0);
                  }
                );
              }, []);
            let j = (e, t) => {
                let a = e.toUpperCase();
                "Expiry" === m &&
                  (t ? i([...s, a]) : i(s.filter((e) => e !== a))),
                  "Currency Pair" === m &&
                    (t ? d([...o, a]) : d(o.filter((e) => e !== a)));
              },
              A = (e) => {
                let n = e === m ? "" : c().hide;
                switch (e) {
                  case "Currency Pair":
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(g.r, { onClick: T(e), fill: o.length > 0 }),
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(c().filterDropdown, " ")
                            .concat(n),
                          ref: p,
                          children: [
                            (0, b.f2)(u).map((e, t) =>
                              (0, r.jsx)(
                                N.T,
                                {
                                  className: "mb-5",
                                  labelClassName: "fs-xs-semibold",
                                  checked: o.includes(e.label.toUpperCase()),
                                  label: e.label,
                                  component: e.component,
                                  onChange: j,
                                },
                                t
                              )
                            ),
                            (0, r.jsx)(g.B, {
                              onClick: () => d([]),
                              className: o.length > 0 ? c().selected : "",
                            }),
                          ],
                        }),
                      ],
                    });
                  case "Expiry":
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(g.r, { onClick: T(e), fill: s.length > 0 }),
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(c().filterDropdown, " ")
                            .concat(n),
                          ref: _,
                          children: [
                            a.map((e) =>
                              (0, r.jsx)(
                                N.T,
                                {
                                  className: "mb-5",
                                  labelClassName: "fs-xs-semibold",
                                  value: e,
                                  checked: s.includes(e.toUpperCase()),
                                  label: e,
                                  onChange: j,
                                },
                                e
                              )
                            ),
                            (0, r.jsx)(g.B, {
                              onClick: () => i([]),
                              className: s.length > 0 ? c().selected : "",
                            }),
                          ],
                        }),
                      ],
                    });
                  case "Settlement Price":
                    return (0, r.jsx)(f.Z, {
                      title: "Click to sort column",
                      className: c().sort,
                      onClick: () => {
                        t(e, !0);
                      },
                      children: (0, r.jsx)(x.Z, {}),
                    });
                  default:
                    return null;
                }
              };
            return (0, r.jsxs)(r.Fragment, {
              children: [
                w.Q5.map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: c().cell,
                      style: { ...e.style },
                      children: [e.name, A(e.name)],
                    },
                    e.name
                  )
                ),
                (0, r.jsx)(y.Z, {}),
              ],
            });
          },
          T = a(57345),
          j = a(55506),
          A = (e) => {
            let { row: t, rowIndex: a, handleRowExpand: n, expandedRow: s } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                a > 0 && (0, r.jsx)(y.Z, {}),
                (0, r.jsx)("div", {
                  onKeyDown: () => n(a),
                  onClick: () => n(a),
                  className: c().cell,
                  children: (0, r.jsx)(f.Z, {
                    title: "Click to expand dropdown",
                    className: ""
                      .concat(c().dropdown, " ")
                      .concat(s.includes(a) ? c().isActive : ""),
                    children: (0, r.jsx)(T.Z, {}),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: c().cellContent,
                  style: { padding: "8px 0px", justifyContent: "flex-start" },
                  children: t.tenor && (0, b.m2)(t.tenor),
                }),
                (0, r.jsx)("div", {
                  className: c().cellContent,
                  style: { justifyContent: "flex-start" },
                  children: (0, b._S)(t.currencyPair),
                }),
                (0, r.jsx)("div", {
                  className: i()(c().cellContent, "tw-mr-3 tw-justify-end"),
                  children: t.settlementPrice,
                }),
                (0, r.jsx)("div", {
                  className: c().cellContent,
                  style: { justifyContent: "flex-end" },
                  children:
                    t.payout &&
                    (0, r.jsx)(j.Z, {
                      wethAmount: t.payout.underlierAmount,
                      usdcAmount: t.payout.numeraireAmount,
                    }),
                }),
                (0, r.jsx)("div", {
                  className: c().cellContent,
                  style: { justifyContent: "flex-end" },
                  children:
                    t.totalCollateral &&
                    (0, r.jsx)(j.Z, {
                      wethAmount: t.totalCollateral.underlierAmount,
                      usdcAmount: t.totalCollateral.numeraireAmount,
                    }),
                }),
              ],
            });
          };
        let E = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.includes(e.tenor.toUpperCase())),
          C = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.some((t) => e.currencyPair.includes(t)));
        var S = a(46449),
          D = a(81989),
          I = () => {
            let { isConnected: e } = (0, D.Pk)(),
              { ithacaSDK: t, isAuthenticated: a } = (0, l.qr)(),
              {
                currentPage: s,
                handlePageChange: o,
                pageStart: h,
                pageEnd: x,
              } = (0, S.ZP)(),
              [f, v] = (0, n.useState)(!0),
              [y, g] = (0, n.useState)([]),
              [b, N] = (0, n.useState)([]),
              [T, j] = (0, n.useState)(0),
              [I, O] = (0, n.useState)([]),
              [R, k] = (0, n.useState)(null),
              [L, B] = (0, n.useState)(!0),
              [U, P] = (0, n.useState)([]),
              [M, F] = (0, n.useState)([]),
              W = (0, n.useMemo)(() => e && a, [e, a]);
            (0, n.useEffect)(() => {
              W &&
                t.client
                  .historicalPositionsByDate(null, new Date().getTime())
                  .then((e) => {
                    Promise.all(
                      Object.keys(e).map((e) =>
                        t.protocol.historicalContracts("".concat(Number(e)))
                      )
                    ).then((t) => {
                      g((0, m.M$)(e, t.flat())), v(!1);
                    });
                  });
            }, []);
            let H = (0, n.useMemo)(
                () =>
                  Array.from(new Set(y.map((e) => e.tenor)))
                    .map((e) => e)
                    .reverse(),
                [y]
              ),
              Z = (e) => {
                I.includes(e)
                  ? O((t) => t.filter((t) => t !== e))
                  : O((t) => [...t, e]);
              },
              q = () => {
                let e,
                  t = E(y, M);
                (t = C(t, U)),
                  j(
                    (e =
                      "Settlement Price" === R
                        ? (0, m.rk)(t, "settlementPrice", L)
                        : t).length
                  ),
                  N(e.slice(h, x));
              };
            (0, n.useEffect)(() => {
              q();
            }, [y, U, M, R, L, h, x]);
            let Y = !b.length && f && W,
              V = !b.length && !f,
              X = b.length > 0;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: i()(c().gridContainerTableSettlements, {
                    [c().isOpacity]: !W,
                  }),
                  children: [
                    (0, r.jsx)(_, {
                      currencyPairFilter: U,
                      setCurrencyPairFilter: P,
                      expiryAvailableOptions: H,
                      setExpiryFilter: F,
                      expiryFilter: M,
                      updateSort: (e) => {
                        k(e), B(R != e || !L);
                      },
                    }),
                    X &&
                      b.map((e, t) => {
                        let a = I.includes(t);
                        return (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(A, {
                              handleRowExpand: Z,
                              expandedRow: I,
                              row: e,
                              rowIndex: t,
                            }),
                            (0, r.jsx)(d.Z, {
                              isRowExpanded: a,
                              type: w.vj.SETTLEMENTS,
                              children: (0, r.jsx)(p, {
                                data: e.expandedInfo || [],
                              }),
                            }),
                          ],
                        });
                      }),
                  ],
                }),
                (0, r.jsx)(u.y, {
                  displayIsLoading: Y,
                  displayNoResults: V,
                  isAuthenticated: W,
                  totalItems: T,
                  currentPage: s,
                  handlePageChange: o,
                }),
              ],
            });
          };
      },
      92400: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(67294),
          s = a(37422),
          i = a(45303),
          l = a.n(i),
          o = a(86322),
          c = a(15741),
          d = a(24514),
          u = a(67253);
        t.Z = (e) => {
          let {
              children: t,
              isOpen: a,
              side: i,
              align: m,
              offset: w,
              footer: h,
              ignoreDisabledStatus: p = !1,
            } = e,
            [x, f] = (0, n.useState)(a),
            {
              updateStep: v,
              currentStep: y,
              disableTutorial: g,
              isTutorialDisabled: b,
            } = (0, n.useContext)(c.OnboardingContext);
          return (
            (0, n.useEffect)(() => {
              f(a);
            }, [a]),
            (0, r.jsxs)(o.fC, {
              open: p ? x : !b && x,
              children: [
                (0, r.jsx)(o.xz, { asChild: !0, children: t }),
                y &&
                  (0, r.jsx)(o.VY, {
                    align: m,
                    side: i,
                    className: ""
                      .concat(l().PopoverContent, " ")
                      .concat(
                        u.R[y].isLarge && l().large,
                        " tw-relative tw-z-[9999]"
                      ),
                    sideOffset: 5,
                    alignOffset: w,
                    children: (0, r.jsxs)(r.Fragment, {
                      children: [
                        u.R[y].title &&
                          (0, r.jsx)("div", {
                            className: l().title,
                            children: u.R[y].title,
                          }),
                        (0, r.jsx)("div", {
                          className: l().message,
                          children: u.R[y].message,
                        }),
                        h ||
                          (0, r.jsxs)(d.Z, {
                            gap: "5",
                            classes: "flex-nowrap justify-end",
                            children: [
                              (0, r.jsx)("div", {
                                className: "flexGrow",
                                children:
                                  !!u.R[y].previousStep &&
                                  (0, r.jsx)("div", {
                                    className: l().skipButton,
                                    onClick: () => {
                                      v && v(u.R[y].previousStep);
                                    },
                                    children: "Back",
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                className: l().skipButton,
                                onClick: () => {
                                  g && g();
                                },
                                children: "Skip",
                              }),
                              (0, r.jsx)(s.Z, {
                                title: "Continue",
                                className: "height-28 w-fit",
                                onClick: () => {
                                  u.R[y].nextStep
                                    ? v && v(u.R[y].nextStep)
                                    : g && g();
                                },
                                children: "Continue",
                              }),
                            ],
                          }),
                        (0, r.jsx)(o.Eh, { className: l().PopoverArrow }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      },
      24113: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return R;
          },
        });
        var r = a(85893),
          n = a(39332),
          s = a(67294),
          i = a(89469),
          l = a(59731),
          o = a(47236),
          c = a(91269),
          d = a(21050),
          u = a(15615),
          m = a(15418),
          w = a(37422),
          h = a(46656),
          p = a(43529),
          x = a(88601),
          f = a.n(x),
          v = (e) => {
            let {
                isOpen: t,
                isLoading: a,
                onCloseModal: n,
                onDisconnectWallet: i,
                onAgreeAndContinue: l,
              } = e,
              [o, c] = (0, s.useState)([
                {
                  id: 1,
                  name: "By ticking this box, I confirm I have read, understood and accepted the General Terms and Conditions of Use governing the Infrastructure (as defined in the T&Cs).",
                  isChecked: !1,
                },
                {
                  id: 2,
                  name: "By ticking this box, I confirm I have read, understood and accepted the Privacy Policy governing the treatment of my personal information.",
                  isChecked: !1,
                },
                {
                  id: 3,
                  name: "By ticking this box, I acknowledge that blockchain technology and crypto-assets carry significant risks for users, including the possible loss of all value allocated in crypto-assets. Such risks arise from the novelty of this technology, the regulatory uncertainty, the possibility of hacking, the high volatility and the information asymmetry characterising the crypto market. Users should not purchase crypto assets with funds they cannot afford to lose.",
                  isChecked: !1,
                },
                {
                  id: 4,
                  name: "By ticking this box, I acknowledge that the information and data provided through the Interface (as defined in the T&Cs) are not intended as financial advice, trading advice, or any other type of advice. The Interface aims to provide information about the Infrastructure, its technical characteristics and features. Adequate professional advice in the financial, legal and technical fields shall be sought before using the Interface.",
                  isChecked: !1,
                },
                {
                  id: 5,
                  name: "By ticking this box, I acknowledge that I am not a U.S. resident, citizen or company incorporate in any restricted region.",
                  isChecked: !1,
                },
              ]),
              d = (e) => {
                c(
                  o.map((t) => ({
                    ...t,
                    isChecked: t.id === e ? !t.isChecked : t.isChecked,
                  }))
                );
              };
            return (0, r.jsx)(h.default, {
              title: "Legal Terms",
              isOpen: t,
              isLoading: a,
              onCloseModal: n,
              hideFooter: !1,
              showCloseIcon: !1,
              className: f().tncModal,
              children: (0, r.jsxs)("div", {
                className: f().acknowledgeTerms,
                children: [
                  (0, r.jsx)("p", {
                    className: f().title,
                    children:
                      "Check the boxes to confirm your acknowledgement and acceptance of the following:",
                  }),
                  o.map((e) =>
                    (0, r.jsx)(
                      p.Z,
                      {
                        label: e.name,
                        checked: e.isChecked,
                        labelClassName: f().labelCheckBox,
                        className: f().checkBox,
                        onChange: () => d(e.id),
                      },
                      e.id
                    )
                  ),
                  (0, r.jsxs)("div", {
                    className: f().buttonContainer,
                    children: [
                      (0, r.jsx)(w.Z, {
                        title: "Disconnect Wallet",
                        variant: "outline",
                        onClick: i,
                        size: "sm",
                        className: f().button,
                        children: "Disconnect Wallet",
                      }),
                      (0, r.jsx)(w.Z, {
                        title: "Agree and Continue",
                        variant: "primary",
                        onClick: l,
                        size: "sm",
                        className: ""
                          .concat(f().button, " ")
                          .concat(f().primaryButton),
                        disabled: o.some((e) => !1 == e.isChecked),
                        children: "Agree and Continue",
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          y = a(98971),
          g = a.n(y),
          b = a(93967),
          N = a.n(b),
          _ = a(67253),
          T = a(15741),
          j = a(92400),
          A = (e) => {
            let { openChainModal: t, children: a, isWrongNetwork: n } = e,
              { currentStep: i, updateStep: l } = (0, s.useContext)(
                T.OnboardingContext
              );
            return (
              (0, s.useEffect)(() => {
                n ? null == l || l(_.P.WRONG_NETWORK) : null == l || l(void 0);
              }, [n]),
              (0, r.jsx)(j.Z, {
                footer: (0, r.jsx)("div", {
                  className: "tw-flex tw-items-end tw-justify-end",
                  children: (0, r.jsx)(w.Z, {
                    title: "Continue",
                    className: "tw-h-[28px] tw-w-1/2",
                    onClick: t,
                    children: "Switch Network",
                  }),
                }),
                isOpen: i === _.P.WRONG_NETWORK,
                ignoreDisabledStatus: !0,
                align: "end",
                side: "top",
                children: (0, r.jsx)("div", { children: a }),
              })
            );
          },
          E = a(36703),
          C = a(64729),
          S = a(85088),
          D = a(54306),
          I = a(44718),
          O = a(81989),
          R = () => {
            let { isSolanaWalletActive: e } = (0, C.X)(),
              {
                ithacaSDK: t,
                initIthacaSDK: a,
                disconnect: w,
                isConnecting: h,
              } = (0, l.qr)(),
              { showToast: p } = (0, o.Z)(),
              { connectModalOpen: x } = (0, u.We)(),
              { isConnected: f, address: y } = (0, O.Pk)(),
              { data: b } = (0, i.p)(),
              { data: _ } = (function () {
                let { connection: e } = (0, I.R)(),
                  {
                    publicKey: t,
                    signMessage: a,
                    signTransaction: r,
                    signAllTransactions: n,
                    connect: i,
                    disconnect: l,
                  } = (0, D.O)();
                return {
                  data: (0, s.useMemo)(() => {
                    if (!t || !e) return;
                    let s = { address: t.toBase58(), publicKey: t };
                    return {
                      publicKey: t,
                      transport: e,
                      chain: { id: 102, network: "testnet" },
                      account: s,
                      cacheTime: 4e3,
                      signMessage: async (e) => await a(e),
                      signTransaction: async (e) => r(e),
                      signAllTransactions: async (e) => await n(e),
                      signTypedData: async (e, t, r) => {
                        let n = (function (e, t, a) {
                          let r = JSON.stringify({
                            domain: e,
                            types: t,
                            value: a,
                          });
                          return new TextEncoder().encode(r);
                        })(e, t, r);
                        return await a(n);
                      },
                      connect: async () => (await i(), s),
                      disconnect: async () => {
                        await l();
                      },
                      extend: function (e) {
                        let t = e(this);
                        return { ...this, ...t };
                      },
                    };
                  }, [t]),
                };
              })(),
              T = (0, D.O)(),
              j = (0, n.useRouter)(),
              [R, k] = (0, s.useState)(!1),
              L = async () => {
                try {
                  let e = await t.points.addAccountData(
                    "tc_confirmation",
                    "true"
                  );
                  m.Z.track("Account created"),
                    "OK" === e.result && (k(!1), j.push("/onboarding"));
                } catch (e) {
                  k(!1);
                }
              },
              B = async () => {
                let r = localStorage.getItem("ithaca.session");
                if ((await a(e ? T : b)) && !r) {
                  var n;
                  p({
                    title: "Wallet Ownership Verified",
                    message:
                      "Your wallet ownership has been verified. You can now deposit funds and trade.",
                  }),
                    (0, E.Lv)();
                  let e = await t.auth.getSession();
                  (null == e
                    ? void 0
                    : null === (n = e.accountInfos) || void 0 === n
                    ? void 0
                    : n.tc_confirmation) || k(!0);
                }
              };
            return ((0, s.useEffect)(() => {
              if (!x) return;
              let e = () => {
                let e = document.querySelector(
                  "[data-testid='rk-wallet-option-walletConnect']"
                );
                e &&
                  !e.hasAttribute("data-enhanced") &&
                  (e.setAttribute("data-enhanced", "true"),
                  e.addEventListener("click", () => {
                    p({
                      type: "info",
                      title: "Step 1 - Connect Wallet",
                      message:
                        "Scan QR Code with your phone and approve connection to Ithaca App interface within your WalletConnect compatible wallet.",
                    });
                  }));
              };
              e();
              let t = new MutationObserver(() => e());
              return (
                t.observe(document.body, { childList: !0, subtree: !0 }),
                () => {
                  t.disconnect();
                }
              );
            }, [x, p]),
            (0, s.useEffect)(() => {
              h || (b || _ ? B() : f || w());
            }, [y, b, _, f]),
            e)
              ? (0, r.jsx)(S.T, {})
              : (0, r.jsx)(u.NL.Custom, {
                  children: (e) => {
                    let {
                        account: t,
                        chain: a,
                        openAccountModal: n,
                        openChainModal: s,
                        openConnectModal: i,
                        authenticationStatus: l,
                        mounted: o,
                      } = e,
                      u = o && "loading" !== l,
                      m = u && t && a && (!l || "authenticated" === l);
                    return (0, r.jsx)("div", {
                      ...(!u && {
                        "aria-hidden": !0,
                        className: g().container,
                      }),
                      children: m
                        ? a.unsupported
                          ? (0, r.jsx)(A, {
                              openChainModal: s,
                              isWrongNetwork: a.unsupported,
                              children: (0, r.jsx)("div", {
                                children: (0, r.jsxs)("button", {
                                  onClick: s,
                                  type: "button",
                                  className: N()(
                                    g().wrongNetwork,
                                    "tw-rounded-2xl"
                                  ),
                                  children: [
                                    "Wrong network",
                                    (0, r.jsx)(d.Z, { color: "#fff" }),
                                  ],
                                }),
                              }),
                            })
                          : (0, r.jsxs)("div", {
                              className: g().termsContainer,
                              children: [
                                (0, r.jsx)(v, {
                                  isOpen: R && m,
                                  onCloseModal: () => k(!1),
                                  onDisconnectWallet: n,
                                  onAgreeAndContinue: L,
                                }),
                                (0, r.jsx)(A, {
                                  openChainModal: s,
                                  isWrongNetwork: a.unsupported,
                                  children: (0, r.jsxs)("button", {
                                    onClick: n,
                                    type: "button",
                                    className: N()(
                                      g().connectedWallet,
                                      "tw-rounded-2xl"
                                    ),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: g().displayName,
                                        children: t.displayName,
                                      }),
                                      (0, r.jsx)(c.Z, {
                                        className: "!tw-size-8",
                                      }),
                                      (0, r.jsx)(d.Z, {
                                        className: g().chevron,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, r.jsx)("button", {
                            onClick: i,
                            type: "button",
                            className: N()(g().connectWallet, "tw-rounded-2xl"),
                            children: "Connect Wallet",
                          }),
                    });
                  },
                });
          };
      },
      3298: function (e, t, a) {
        "use strict";
        a.d(t, {
          Gh: function () {
            return r;
          },
          Mu: function () {
            return i;
          },
          oh: function () {
            return s;
          },
          rN: function () {
            return n;
          },
        });
        let r = 430,
          n = 695,
          s = 1435,
          i = 1280;
      },
      35192: function (e, t, a) {
        "use strict";
        a.d(t, {
          e7: function () {
            return w;
          },
          S2: function () {
            return m;
          },
          X9: function () {
            return u;
          },
          Nq: function () {
            return h;
          },
          ZA: function () {
            return p;
          },
        });
        var r = a(85893),
          n = a(77125),
          s = a(93967),
          i = a.n(s),
          l = a(86322),
          o = (e) => {
            let {
              content: t,
              align: a = "center",
              contentClassname: n,
              triggerIcon: s,
              triggerClassname: o,
            } = e;
            return (0, r.jsxs)(l.fC, {
              children: [
                (0, r.jsx)(l.xz, {
                  children: (0, r.jsx)("div", {
                    className: i()(
                      "tw-mr-1 tw-inline-block tw-align-middle",
                      o
                    ),
                    children: s,
                  }),
                }),
                (0, r.jsx)(l.VY, {
                  align: a,
                  children: (0, r.jsx)("div", {
                    className: i()(
                      "-tw-mt-[106px] tw-max-w-[346px] tw-rounded-md tw-bg-black-dark tw-p-3 tw-text-start tw-font-roboto tw-text-xs tw-text-white [box-shadow:2px_2px_2px_1px_#050505]",
                      n
                    ),
                    children: t,
                  }),
                }),
              ],
            });
          },
          c = a(49632),
          d = a(70757);
        let u = [
            "Assets",
            "Wallet Balance",
            "Available Collateral on Ithaca",
            "Live Orders' Collateral Requirements",
            "Positions' Collateral Requirements",
            "Yield*",
            "Yield Accrued",
            "",
          ],
          m = [
            "Asset",
            "Wallet Balance",
            "APY Variable",
            "Lent Amount",
            "Positions' MTM",
            "Position' Collateral Requirement",
            "Positions' 1D Stress Test Value",
            "Health Factor Numerator",
            "Pool Information",
          ],
          w = [
            "Head",
            "Debt",
            "APY Variable",
            "Borrow/Repay",
            "Health Factor",
            "",
            "Haircut",
            "Health Factor Denominator",
            "",
          ],
          h = (e) => ({
            [e]: {
              isTransactionInProgress: !1,
              currency: e,
              currencyLogo: (0, d.XX)(e),
              walletBalance: "0",
              fundLockValue: 0,
              orderValue: 0,
              settleValue: 0,
              positionCollateralRequirement: 0,
              availableCollateral: 0,
            },
            USDC: {
              isTransactionInProgress: !1,
              currency: "USDC",
              currencyLogo: (0, r.jsx)(n.Z, {}),
              walletBalance: "0",
              fundLockValue: 0,
              orderValue: 0,
              settleValue: 0,
              positionCollateralRequirement: 0,
              availableCollateral: 0,
            },
          }),
          p = (e) => {
            switch (e) {
              case "Assets":
              case "Wallet Balance":
                return (0, r.jsx)("div", {
                  className: "tw-w-20 tw-shrink-0",
                  children: e,
                });
              case "Available Collateral on Ithaca":
                return (0, r.jsx)("div", {
                  className: "tw-w-40 tw-shrink-0",
                  children: e,
                });
              case "Live Orders' Collateral Requirements":
              case "Positions' Collateral Requirements":
                return (0, r.jsx)("div", {
                  className: "tw-w-52 tw-shrink-0 tw-text-end lg:tw-w-32",
                  children: e,
                });
              case "Yield Accrued":
                return (0, r.jsx)("div", {
                  className: "tw-w-20 tw-shrink-0 tw-text-end",
                  children: e,
                });
              case "Yield*":
                return (0, r.jsxs)("div", {
                  className:
                    "tw-flex tw-w-56 tw-shrink-0 tw-items-center tw-justify-end tw-gap-2 tw-pr-2 lg:tw-w-52",
                  children: [
                    (0, r.jsx)(o, {
                      triggerIcon: (0, r.jsx)(c.Z, { className: "tw-w-3.5" }),
                      content:
                        "*Aave USDC Pool variable lending yield x proportion of Ithaca deposits allocated to Aave USDC Pool. This yield may NOT be realized, depending as is on Aave variable yield during the deposit tenor.",
                    }),
                    e,
                  ],
                });
              case "":
                return (0, r.jsx)("div", {
                  className: "tw-hidden lg:tw-block lg:tw-w-[340px]",
                });
              default:
                return null;
            }
          };
      },
      67253: function (e, t, a) {
        "use strict";
        a.d(t, {
          R: function () {
            return o;
          },
          P: function () {
            return n;
          },
        });
        var r,
          n,
          s = a(85893),
          i = a(25675),
          l = a.n(i);
        ((r = n || (n = {})).DEPOSIT_WITH_BALANCE_CHAIN =
          "DEPOSIT_WITH_BALANCE_CHAIN"),
          (r.DEPOSIT_WITH_BALANCE_TOKEN_WETH =
            "DEPOSIT_WITH_BALANCE_TOKEN_WETH"),
          (r.DEPOSIT_WITH_BALANCE_TOKEN_USDC =
            "DEPOSIT_WITH_BALANCE_TOKEN_USDC"),
          (r.DEPOSIT_WITH_BALANCE_AMOUNT = "DEPOSIT_WITH_BALANCE_AMOUNT"),
          (r.DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON"),
          (r.DEPOSIT_WITHOUT_BALANCE_WETH = "DEPOSIT_WITHOUT_BALANCE_WETH"),
          (r.DEPOSIT_WITHOUT_BALANCE_USDC = "DEPOSIT_WITHOUT_BALANCE_USDC"),
          (r.DEPOSIT_WITHOUT_BALANCE_CHAIN = "DEPOSIT_WITHOUT_BALANCE_CHAIN"),
          (r.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN"),
          (r.DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN"),
          (r.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON"),
          (r.WITHDRAWAL_TRANSACTION_HISTORY_TAB =
            "WITHDRAWAL_TRANSACTION_HISTORY_TAB"),
          (r.WITHDRAWAL_RELEASE_FUNDS = "WITHDRAWAL_RELEASE_FUNDS"),
          (r.SHOW_PAYOFF_AT_EXPIRY = "SHOW_PAYOFF_AT_EXPIRY"),
          (r.SHOW_EXPIRY_FILTER = "SHOW_EXPIRY_FILTER"),
          (r.DEPOSIT_FUNDS = "DEPOSIT_FUNDS"),
          (r.SUBMIT_TO_AUCTION = "SUBMIT_TO_AUCTION"),
          (r.WRONG_NETWORK = "WRONG_NETWORK"),
          (r.ITHACA_GPT_INTRO = "ITHACA_GPT_INTRO");
        let o = {
          SHOW_PAYOFF_AT_EXPIRY: {
            nextStep: "SHOW_EXPIRY_FILTER",
            message: "Show Payoff @ Expiry",
            title:
              "To show payoff diagram at chosen expiry, first filter ‘Expiry Date’ column to a single expiry date.",
          },
          ITHACA_GPT_INTRO: {
            nextStep: "ITHACA_GPT_INTRO",
            message:
              "Your advanced option trading assistant within Ithaca Protocol.",
            title: "IthacaGPT",
          },
          SHOW_EXPIRY_FILTER: {
            message: "Select Expiry Date",
            title: "Click the filter icon to select a single expiry date.",
          },
          WRONG_NETWORK: {
            title: "",
            message:
              "Looks like you're connected to an unsupported network. Please switch to a supported network.",
          },
          DEPOSIT_FUNDS: {
            nextStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message: "Deposit funds to place order",
            title: "",
          },
          DEPOSIT_WITH_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "Ithaca runs on Arbitrum and requires WETH and USDC (not USDC.e) for collateral. You can deposit these directly or you can deposit different tokens from other support blockchains.",
            title: "Deposit Funds Directly or Cross Chain",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_USDC: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have USDC on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_WETH: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have WETH on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_AMOUNT: {
            nextStep: "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "You can deposit any chosen amount of selected token up to what is shown in your Wallet Balance.",
            title: "Enter Amount of Funds to Deposit.",
          },
          DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON: {
            nextStep: "SUBMIT_TO_AUCTION",
            previousStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet.",
            title: "Confirm the Deposit Amount",
          },
          SUBMIT_TO_AUCTION: {
            message: "Click to submit order to auction",
            title: "",
          },
          DEPOSIT_WITHOUT_BALANCE_USDC: {
            isLarge: !0,
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit USDC on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 3" }),
                    " - If you have $USDC.e (Bridged USDC) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, s.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, s.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, s.jsx)("li", {
                      children: 'In the "You pay" input field select "USDC.e"',
                    }),
                    (0, s.jsx)("li", {
                      children:
                        'In the "You receive" input field select "USDC"',
                    }),
                    (0, s.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_usdc.faa872f0.png",
                        height: 79,
                        width: 125,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX5+fnz9PX9/f3r6+zf4OFhfIvxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nCWIwQkAMBCDNLn9Zy6hDwVFQxJQvmTV0S3orc4HA6gALlYEhEwAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit USDC",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, s.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, s.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native USDC on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_WETH: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            isLarge: !0,
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit WETH on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 3" }),
                    " - If you have $ETH (not $WETH) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, s.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, s.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, s.jsx)("li", {
                      children: 'In the "You pay" input field select "ETH"',
                    }),
                    (0, s.jsx)("li", {
                      children:
                        'In the "You receive" input field select "WETH"',
                    }),
                    (0, s.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_weth.bdb5e366.png",
                        height: 77,
                        width: 123,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX4+Pjx8fL8/PziewRMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGACAQYGRgYQYGRgYASzIFwIDyYFAAKRABWBK9j8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit WETH",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, s.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, s.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native WETH on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_USDC",
            message:
              "You can select a chain where you have funds to automatically convert and bridge them with Arbitrum powered by Axelar. ",
            title: "Select A Chain Where you have Funds",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Select from any of the supported tokens from your chosen chain to be used for depositing. ",
            title: "Select the Token you Want to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Choose from any of the available tokens to be used as collateral.",
            title:
              "Select token you want funds to be converted into on Arbitrum.",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON: {
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet. ",
            title: "Confirm the Deposit Amount",
          },
          WITHDRAWAL_TRANSACTION_HISTORY_TAB: {
            nextStep: "WITHDRAWAL_RELEASE_FUNDS",
            message:
              "Please go to the ‘Transaction History’ tab to withdraw funds to your wallet once they are ready to be released.",
            title:
              "Go to ‘Transaction History’ to Check Status of Withdrawals & to Release Funds",
          },
          WITHDRAWAL_RELEASE_FUNDS: {
            previousStep: "WITHDRAWAL_TRANSACTION_HISTORY_TAB",
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: "mb-4",
                  children:
                    'Once funds are ready to be released, the ‘Release’ button will become activated and show in green. Once ready, press the "Release" button to transfer funds to your wallet once the button activates.',
                }),
                (0, s.jsx)("div", {
                  className: "italic",
                  children:
                    "You will also receive a notification once funds are ready to be released.",
                }),
              ],
            }),
            title: "Release Funds",
          },
        };
      },
      15922: function (e, t, a) {
        "use strict";
        a.d(t, {
          F: function () {
            return i;
          },
        });
        var r = a(3298),
          n = a(67294);
        let s = () => {
            let [e, t] = (0, n.useState)({ width: void 0, height: void 0 });
            return (
              (0, n.useEffect)(() => {
                function e() {
                  t({ width: window.innerWidth, height: window.innerHeight });
                }
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          },
          i = () => {
            let { width: e } = s();
            return (e && e >= r.oh) || !e
              ? "desktop"
              : e && e >= r.rN
              ? "tablet"
              : "phone";
          };
      },
      16795: function (e, t, a) {
        "use strict";
        a.d(t, {
          M: function () {
            return n;
          },
        });
        var r = a(67294);
        let n = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, r.useEffect)(
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
      81014: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            MarginLoansDataDataProvider: function () {
              return y;
            },
            useMarginLoansDataContext: function () {
              return g;
            },
          });
        var r = a(85893);
        let n = [
            {
              inputs: [
                { internalType: "address", name: "client", type: "address" },
              ],
              name: "getClientData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "int256",
                      name: "maintenanceMargin",
                      type: "int256",
                    },
                    { internalType: "int256", name: "mtm", type: "int256" },
                    {
                      internalType: "uint256",
                      name: "collateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "valueAtRisk",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IIthacaFeed.ClientParams",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          s = [
            {
              inputs: [
                {
                  internalType: "contract IChainlinkAggregator",
                  name: "_networkBaseTokenPriceInUsdProxyAggregator",
                  type: "address",
                },
                {
                  internalType: "contract IChainlinkAggregator",
                  name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ETH_CURRENCY_UNIT",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MKRAddress",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "_bytes32", type: "bytes32" },
              ],
              name: "bytes32ToString",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ILendingPoolAddressesProvider",
                  name: "provider",
                  type: "address",
                },
              ],
              name: "getReservesData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "underlyingAsset",
                      type: "address",
                    },
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "symbol", type: "string" },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "baseLTVasCollateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "reserveLiquidationThreshold",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "reserveLiquidationBonus",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "reserveFactor",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "usageAsCollateralEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "borrowingEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "stableBorrowRateEnabled",
                      type: "bool",
                    },
                    { internalType: "bool", name: "isActive", type: "bool" },
                    { internalType: "bool", name: "isFrozen", type: "bool" },
                    {
                      internalType: "uint128",
                      name: "liquidityIndex",
                      type: "uint128",
                    },
                    {
                      internalType: "uint128",
                      name: "variableBorrowIndex",
                      type: "uint128",
                    },
                    {
                      internalType: "uint128",
                      name: "liquidityRate",
                      type: "uint128",
                    },
                    {
                      internalType: "uint128",
                      name: "variableBorrowRate",
                      type: "uint128",
                    },
                    {
                      internalType: "uint128",
                      name: "stableBorrowRate",
                      type: "uint128",
                    },
                    {
                      internalType: "uint40",
                      name: "lastUpdateTimestamp",
                      type: "uint40",
                    },
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
                      internalType: "uint256",
                      name: "availableLiquidity",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalPrincipalStableDebt",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "averageStableRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "stableDebtLastUpdateTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalScaledVariableDebt",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "priceInMarketReferenceCurrency",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "priceOracle",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "variableRateSlope1",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "variableRateSlope2",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "stableRateSlope1",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "stableRateSlope2",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "baseStableBorrowRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "baseVariableBorrowRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "optimalUsageRatio",
                      type: "uint256",
                    },
                    { internalType: "bool", name: "isPaused", type: "bool" },
                    {
                      internalType: "bool",
                      name: "isSiloedBorrowing",
                      type: "bool",
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
                    {
                      internalType: "bool",
                      name: "flashLoanEnabled",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "debtCeiling",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "debtCeilingDecimals",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8",
                      name: "eModeCategoryId",
                      type: "uint8",
                    },
                    {
                      internalType: "uint256",
                      name: "borrowCap",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "supplyCap",
                      type: "uint256",
                    },
                    {
                      internalType: "uint16",
                      name: "eModeLtv",
                      type: "uint16",
                    },
                    {
                      internalType: "uint16",
                      name: "eModeLiquidationThreshold",
                      type: "uint16",
                    },
                    {
                      internalType: "uint16",
                      name: "eModeLiquidationBonus",
                      type: "uint16",
                    },
                    {
                      internalType: "address",
                      name: "eModePriceSource",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "eModeLabel",
                      type: "string",
                    },
                    {
                      internalType: "bool",
                      name: "borrowableInIsolation",
                      type: "bool",
                    },
                  ],
                  internalType:
                    "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
                  name: "",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "marketReferenceCurrencyUnit",
                      type: "uint256",
                    },
                    {
                      internalType: "int256",
                      name: "marketReferenceCurrencyPriceInUsd",
                      type: "int256",
                    },
                    {
                      internalType: "int256",
                      name: "networkBaseTokenPriceInUsd",
                      type: "int256",
                    },
                    {
                      internalType: "uint8",
                      name: "networkBaseTokenPriceDecimals",
                      type: "uint8",
                    },
                  ],
                  internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ILendingPoolAddressesProvider",
                  name: "provider",
                  type: "address",
                },
              ],
              name: "getReservesList",
              outputs: [
                { internalType: "address[]", name: "", type: "address[]" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ILendingPoolAddressesProvider",
                  name: "provider",
                  type: "address",
                },
                { internalType: "address", name: "user", type: "address" },
              ],
              name: "getUserReservesData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "underlyingAsset",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "scaledATokenBalance",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "usageAsCollateralEnabledOnUser",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "stableBorrowRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "scaledVariableDebt",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "principalStableDebt",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "stableBorrowLastUpdateTimestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "ithacaBalance",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IUiPoolDataProviderV3.UserReserveData[]",
                  name: "",
                  type: "tuple[]",
                },
                { internalType: "uint8", name: "", type: "uint8" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
              outputs: [
                {
                  internalType: "contract IChainlinkAggregator",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "networkBaseTokenPriceInUsdProxyAggregator",
              outputs: [
                {
                  internalType: "contract IChainlinkAggregator",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ];
        var i = a(81989);
        let l = (e) => {
            let {
                chainId: t,
                lendingPoolAddressesProvider: a,
                reservesDataRaw: r,
              } = e,
              { 0: n, 1: s } = r;
            return {
              reservesData: n.map((e, r) => ({
                originalId: r,
                id: ""
                  .concat(t, "-")
                  .concat(e.underlyingAsset, "-")
                  .concat(a)
                  .toLowerCase(),
                underlyingAsset: e.underlyingAsset,
                name: e.name,
                symbol: e.symbol,
                decimals: Number(e.decimals.toString()),
                baseLTVasCollateral: e.baseLTVasCollateral.toString(),
                reserveLiquidationThreshold:
                  e.reserveLiquidationThreshold.toString(),
                reserveLiquidationBonus: e.reserveLiquidationBonus.toString(),
                reserveFactor: e.reserveFactor.toString(),
                usageAsCollateralEnabled: e.usageAsCollateralEnabled,
                borrowingEnabled: e.borrowingEnabled,
                stableBorrowRateEnabled: e.stableBorrowRateEnabled,
                isActive: e.isActive,
                isFrozen: e.isFrozen,
                liquidityIndex: e.liquidityIndex.toString(),
                variableBorrowIndex: e.variableBorrowIndex.toString(),
                liquidityRate: e.liquidityRate.toString(),
                variableBorrowRate: e.variableBorrowRate.toString(),
                stableBorrowRate: e.stableBorrowRate.toString(),
                lastUpdateTimestamp: e.lastUpdateTimestamp,
                aTokenAddress: e.aTokenAddress,
                stableDebtTokenAddress: e.stableDebtTokenAddress,
                variableDebtTokenAddress: e.variableDebtTokenAddress,
                interestRateStrategyAddress: e.interestRateStrategyAddress,
                availableLiquidity: e.availableLiquidity.toString(),
                totalPrincipalStableDebt: e.totalPrincipalStableDebt.toString(),
                averageStableRate: e.averageStableRate.toString(),
                stableDebtLastUpdateTimestamp: Number(
                  e.stableDebtLastUpdateTimestamp.toString()
                ),
                totalScaledVariableDebt: e.totalScaledVariableDebt.toString(),
                priceInMarketReferenceCurrency:
                  e.priceInMarketReferenceCurrency.toString(),
                priceOracle: e.priceOracle,
                variableRateSlope1: e.variableRateSlope1.toString(),
                variableRateSlope2: e.variableRateSlope2.toString(),
                stableRateSlope1: e.stableRateSlope1.toString(),
                stableRateSlope2: e.stableRateSlope2.toString(),
                baseStableBorrowRate: e.baseStableBorrowRate.toString(),
                baseVariableBorrowRate: e.baseVariableBorrowRate.toString(),
                optimalUsageRatio: e.optimalUsageRatio.toString(),
                isPaused: e.isPaused,
                debtCeiling: e.debtCeiling.toString(),
                eModeCategoryId: e.eModeCategoryId,
                borrowCap: e.borrowCap.toString(),
                supplyCap: e.supplyCap.toString(),
                eModeLtv: e.eModeLtv,
                eModeLiquidationThreshold: e.eModeLiquidationThreshold,
                eModeLiquidationBonus: e.eModeLiquidationBonus,
                eModePriceSource: e.eModePriceSource.toString(),
                eModeLabel: e.eModeLabel.toString(),
                borrowableInIsolation: e.borrowableInIsolation,
                accruedToTreasury: e.accruedToTreasury.toString(),
                unbacked: e.unbacked.toString(),
                isolationModeTotalDebt: e.isolationModeTotalDebt.toString(),
                debtCeilingDecimals: Number(e.debtCeilingDecimals.toString()),
                isSiloedBorrowing: e.isSiloedBorrowing,
                flashLoanEnabled: e.flashLoanEnabled,
                virtualAccActive: !1,
                virtualUnderlyingBalance: "0",
              })),
              baseCurrencyData: {
                marketReferenceCurrencyDecimals:
                  s.marketReferenceCurrencyUnit.toString().length - 1,
                marketReferenceCurrencyPriceInUsd:
                  s.marketReferenceCurrencyPriceInUsd.toString(),
                networkBaseTokenPriceInUsd:
                  s.networkBaseTokenPriceInUsd.toString(),
                networkBaseTokenPriceDecimals: s.networkBaseTokenPriceDecimals,
              },
            };
          },
          o = (e) => {
            let {
                chainId: t,
                lendingPoolAddressesProvider: a,
                user: r,
                userReservesDataRaw: n,
              } = e,
              { 0: s, 1: i } = n;
            return {
              userReserves: s.map((e) => ({
                id: ""
                  .concat(t, "-")
                  .concat(r, "-")
                  .concat(e.underlyingAsset, "-")
                  .concat(a)
                  .toLowerCase(),
                underlyingAsset: e.underlyingAsset,
                scaledATokenBalance: e.scaledATokenBalance.toString(),
                usageAsCollateralEnabledOnUser:
                  e.usageAsCollateralEnabledOnUser,
                stableBorrowRate: e.stableBorrowRate.toString(),
                scaledVariableDebt: e.scaledVariableDebt.toString(),
                principalStableDebt: e.principalStableDebt.toString(),
                stableBorrowLastUpdateTimestamp: Number(
                  e.stableBorrowLastUpdateTimestamp.toString()
                ),
                ithacaBalance: e.ithacaBalance.toString(),
              })),
              userEmodeCategoryId: i,
            };
          };
        var c = a(43681),
          d = a(75370),
          u = a(55603),
          m = a(67294),
          w = a(1958),
          h = a(15229),
          p = a(89810),
          x = a(20448),
          f = a(59731);
        let v = m.createContext({}),
          y = (e) => {
            let t,
              a,
              m,
              y,
              g,
              b,
              N,
              _,
              { children: T } = e,
              { address: j } = (0, i.Pk)(),
              { systemInfo: A } = (0, f.qr)(),
              { ithacaFeedAddress: E, extra: C } = A,
              { data: S, isLoading: D } = (0, p.u)({
                address: C["extra.uipooldataprovider"],
                abi: s,
                functionName: "getReservesData",
                args: [C["extra.lendingpooladdressesprovider"]],
                chainId: (0, x.b)().id,
                query: { refetchInterval: 1e4 },
              });
            !D &&
              S &&
              (({ reservesData: t, baseCurrencyData: a } = l({
                chainId: (0, x.b)().id,
                lendingPoolAddressesProvider:
                  C["extra.lendingpooladdressesprovider"],
                reservesDataRaw: S,
              })),
              (m = (0, d.DA)({
                reserves: t,
                currentTimestamp: Date.now() / 1e3,
                marketReferenceCurrencyDecimals:
                  a.marketReferenceCurrencyDecimals,
                marketReferencePriceInUsd: a.marketReferenceCurrencyPriceInUsd,
              })));
            let { data: I, isLoading: O } = (0, p.u)({
                address: E,
                abi: n,
                functionName: "getClientData",
                args: [j || w.DR],
                chainId: (0, x.b)().id,
                query: { enabled: !!j, refetchInterval: 1e4 },
              }),
              R = {
                maintenanceMargin: (0, h.b)(
                  (null == I ? void 0 : I.maintenanceMargin) || BigInt(0),
                  8
                ),
                mtm: (0, h.b)((null == I ? void 0 : I.mtm) || BigInt(0), 8),
                collateral: (0, h.b)(
                  (null == I ? void 0 : I.collateral) || BigInt(0),
                  8
                ),
                valueAtRisk: (0, h.b)(
                  (null == I ? void 0 : I.valueAtRisk) || BigInt(0),
                  8
                ),
              },
              { data: k, isLoading: L } = (0, p.u)({
                address: C["extra.uipooldataprovider"],
                abi: s,
                functionName: "getUserReservesData",
                args: [C["extra.lendingpooladdressesprovider"], j || w.DR],
                chainId: (0, x.b)().id,
                query: { enabled: !!j, refetchInterval: 1e4 },
              });
            return (
              m &&
                a &&
                j &&
                !L &&
                k &&
                I &&
                (({ userReserves: y, userEmodeCategoryId: g } = o({
                  chainId: (0, x.b)().id,
                  lendingPoolAddressesProvider:
                    C["extra.lendingpooladdressesprovider"],
                  user: j,
                  userReservesDataRaw: k,
                })),
                (b = (0, u.G)({
                  currentTimestamp: Date.now() / 1e3,
                  userReserves: y,
                  formattedReserves: m,
                  userEmodeCategoryId: g,
                  marketReferenceCurrencyDecimals:
                    a.marketReferenceCurrencyDecimals,
                  marketReferencePriceInUsd:
                    a.marketReferenceCurrencyPriceInUsd,
                  userPositionsCollateral: {
                    collateral: I.collateral.toString(),
                    maintenanceMargin: I.maintenanceMargin.toString(),
                    mtm: I.mtm.toString(),
                    valueAtRisk: I.valueAtRisk.toString(),
                  },
                })),
                (N = ((e, t) => {
                  let a = t.userReservesData.reduce(
                      (t, a) => {
                        let r = e.find(
                          (e) => e.underlyingAsset === a.reserve.underlyingAsset
                        );
                        if (r)
                          "0" !== a.underlyingBalanceUSD &&
                            (t.positiveProportion = t.positiveProportion.plus(
                              (0, c.hE)(r.supplyAPY).multipliedBy(
                                a.underlyingBalanceUSD
                              )
                            )),
                            "0" !== a.variableBorrowsUSD &&
                              (t.negativeProportion = t.negativeProportion.plus(
                                (0, c.hE)(r.variableBorrowAPY).multipliedBy(
                                  a.variableBorrowsUSD
                                )
                              ));
                        else throw Error("no possible to calculate net apy");
                        return t;
                      },
                      {
                        positiveProportion: (0, c.hE)(0),
                        negativeProportion: (0, c.hE)(0),
                      }
                    ),
                    r = a.positiveProportion
                      .dividedBy(t.totalLiquidityUSD)
                      .toNumber(),
                    n = a.negativeProportion
                      .dividedBy(t.totalBorrowsUSD)
                      .toNumber(),
                    s =
                      (Number(t.totalLiquidityUSD) /
                        Number("0" !== t.netWorthUSD ? t.netWorthUSD : "1")) *
                        (r || 0) -
                      (Number(t.totalBorrowsUSD) /
                        Number("0" !== t.netWorthUSD ? t.netWorthUSD : "1")) *
                        (n || 0);
                  return { earnedAPY: r, debtAPY: n, netAPY: s };
                })(m, b)),
                (_ = { ...b, ...N })),
              (0, r.jsx)(v.Provider, {
                value: {
                  loading: D || (!!j && O),
                  reserves: m || [],
                  user: _,
                  userReserves: y || [],
                  userPositionsCollateral: R,
                  marketReferencePriceInUsd:
                    (null == a
                      ? void 0
                      : a.marketReferenceCurrencyPriceInUsd) || "0",
                  marketReferenceCurrencyDecimals:
                    (null == a ? void 0 : a.marketReferenceCurrencyDecimals) ||
                    0,
                  networkBaseTokenPriceInUsd:
                    (null == a ? void 0 : a.networkBaseTokenPriceInUsd) || "0",
                  networkBaseTokenPriceDecimals:
                    (null == a ? void 0 : a.networkBaseTokenPriceDecimals) || 0,
                },
                children: T,
              })
            );
          },
          g = () => (0, m.useContext)(v);
      },
      59421: function (e, t, a) {
        "use strict";
        a.d(t, {
          F: function () {
            return x;
          },
        });
        var r = a(47236),
          n = a(67294),
          s = a(64729),
          i = a(81989),
          l = a(59731),
          o = a(67930),
          c = a(88144);
        let d = () => {
          let { systemInfo: e, ithacaSDK: t, isAuthenticated: a } = (0, l.qr)(),
            { isSolanaWalletActive: r } = (0, s.X)(),
            { address: n } = (0, i.Pk)(),
            d = (0, i.Gc)(),
            u = (0, i.ho)(),
            m = (0, c.a)({
              queryKey: [o.gp, "lockedCollateral"],
              queryFn: () => t.client.getLockedCollateral(),
              enabled: a,
              refetchInterval: 3e4,
            }),
            w = (0, c.a)({
              queryKey: [o.gp, "fundLockState"],
              queryFn: () => t.client.fundLockState(),
              enabled: a,
              refetchInterval: 3e4,
            });
          return r
            ? { ...d, ...u, lockedCollateralData: m, fundLockStateData: w }
            : { ...u, ...d, lockedCollateralData: m, fundLockStateData: w };
        };
        var u = a(32010),
          m = a(15229);
        let w = (e) =>
          Object.values(e)
            .flat()
            .reduce(
              (e, t) => (
                (e.totalUnderlierAmount += t.locked.underlierAmount),
                (e.totalNumeraireAmount += t.locked.numeraireAmount),
                e
              ),
              { totalUnderlierAmount: 0, totalNumeraireAmount: 0 }
            );
        var h = a(35192);
        let p = { fundLockValue: 0, orderValue: 0, settleValue: 0 },
          x = () => {
            let { showToast: e } = (0, r.Z)(),
              [t, a] = (0, l.qr)(
                (0, u.N)((e) => [e.isAuthenticated, e.underlyingCurrency])
              ),
              [s, i] = (0, n.useState)((0, h.Nq)(a)),
              {
                SOLData: { isRefetching: o, data: c, refetch: x },
                WETHData: { isRefetching: f, data: v, refetch: y },
                USDCData: { isRefetching: g, data: b, refetch: N },
                lockedCollateralData: { isRefetching: _, data: T, refetch: j },
                fundLockStateData: { isRefetching: A, data: E, refetch: C },
              } = d(),
              S = "WSOL" === a,
              D = (S ? o : f) || g || _ || A;
            (0, n.useEffect)(() => {
              var e, r;
              if (!t) {
                i((0, h.Nq)(a));
                return;
              }
              if (!T || !b || (S && !c) || (!S && !v)) return;
              let n = (e) =>
                  (null == E ? void 0 : E.find((t) => t.currency === e)) || p,
                l = n(a),
                o = n("USDC"),
                d =
                  l.fundLockValue !==
                  (null === (e = s[a]) || void 0 === e
                    ? void 0
                    : e.fundLockValue),
                u =
                  o.fundLockValue !==
                  (null === (r = s.USDC) || void 0 === r
                    ? void 0
                    : r.fundLockValue),
                x = w(T),
                f = S ? c : v;
              i((e) => {
                var t;
                let r = { ...e };
                return (
                  (r[a] = {
                    ...e[a],
                    ...l,
                    positionCollateralRequirement: x.totalUnderlierAmount,
                    availableCollateral:
                      l.fundLockValue - l.orderValue - l.settleValue,
                    walletBalance: (0, m.b)(
                      (null == f ? void 0 : f.value) || BigInt(0),
                      (null == f ? void 0 : f.decimals) || 9
                    ),
                    isTransactionInProgress:
                      !d &&
                      ((null === (t = e[a]) || void 0 === t
                        ? void 0
                        : t.isTransactionInProgress) ||
                        !1),
                  }),
                  (r.USDC = {
                    ...e.USDC,
                    ...o,
                    positionCollateralRequirement: x.totalNumeraireAmount,
                    availableCollateral:
                      o.fundLockValue - o.orderValue - o.settleValue,
                    walletBalance: (0, m.b)(b.value, b.decimals),
                    isTransactionInProgress:
                      !u && e.USDC.isTransactionInProgress,
                  }),
                  r
                );
              });
            }, [t, E, T, b, v, c, a, S]);
            let I = () => {
              C(), j(), S ? x() : y(), N();
            };
            return {
              collateralSummary: s,
              isFetching: D,
              refetchAll: I,
              handleFetchingBalance: (e, t) => {
                if (null == t ? void 0 : t.name) {
                  let a = t.name;
                  i((t) => ({
                    ...t,
                    [a]: { ...t[a], isTransactionInProgress: !e },
                  }));
                }
              },
              refetchFundLockState: C,
              refetchLockedCollateralData: j,
              refetchBalanceWETH: y,
              refetchBalanceSOL: x,
              refetchBalanceUSDC: N,
              showOrderConfirmationToastAndRefetchData: () => {
                I(),
                  e({
                    title: "Transaction Confirmed",
                    message: "Order received & submitted into the auction",
                  });
              },
            };
          };
      },
      85292: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(93967),
          s = a.n(n),
          i = a(25448),
          l = a.n(i);
        t.Z = (e) => {
          let { size: t = "xl", children: a, className: n } = e;
          return (0, r.jsx)("div", {
            className: s()(l().container, l()[t], n),
            children: a,
          });
        };
      },
      20314: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(39332),
          s = a(57153),
          i = a(24514),
          l = a(55975),
          o = a(15418);
        t.Z = () => {
          var e, t;
          let a = (0, n.usePathname)();
          return (0, r.jsx)(i.Z, {
            direction: "row-space-between",
            children: (0, r.jsx)(l.Z, {
              tabs: s.Ro,
              className: "mb-0",
              activeTab:
                null !==
                  (t =
                    null === (e = s.Ro.find((e) => e.path === a)) ||
                    void 0 === e
                      ? void 0
                      : e.id) && void 0 !== t
                  ? t
                  : s.Ro[0].id,
              onChange: (e) => {
                let t = a.split("/");
                (t[2] = e),
                  o.Z.track("Points menu interactions", { path: t.join("/") });
              },
            }),
          });
        };
      },
      24514: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(2262),
          s = a.n(n),
          i = a(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: a = "m-0",
              gap: n = "gap-0",
              padding: l = "p-0",
              children: o,
              classes: c,
            } = e,
            d = (0, i.I)();
          return (0, r.jsx)("div", {
            className: ""
              .concat("flex--".concat(d), " ")
              .concat(s().flex, " ")
              .concat(s()["flex--".concat(t)], " ")
              .concat(a, " ")
              .concat(n, " ")
              .concat(l, " ")
              .concat(c),
            children: o,
          });
        };
      },
      27888: function (e, t, a) {
        "use strict";
        var r = a(85893),
          n = a(80140),
          s = a.n(n);
        t.Z = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("main", { className: s().Main, children: t }),
          });
        };
      },
      15741: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            OnboardingContext: function () {
              return i;
            },
            OnboardingProvider: function () {
              return l;
            },
          });
        var r = a(85893),
          n = a(67294),
          s = a(59731);
        let i = (0, n.createContext)({
            currentStep: void 0,
            isTutorialDisabled: !1,
          }),
          l = (e) => {
            let { children: t } = e,
              {
                currentTutorialStep: a,
                setCurrentTutorialStep: l,
                setTutorialDisabled: o,
                tutorialDisabled: c,
              } = (0, s.NV)(),
              [d, u] = (0, n.useState)(a),
              [m, w] = (0, n.useState)(c);
            return (
              (0, n.useEffect)(() => {
                w(c);
              }, [c]),
              (0, r.jsx)(i.Provider, {
                value: {
                  currentStep: d,
                  isTutorialDisabled: m,
                  updateStep: (e) => {
                    u(e), l(e);
                  },
                  disableTutorial: () => {
                    o(), w(!0);
                  },
                },
                children: t,
              })
            );
          };
      },
      36703: function (e, t, a) {
        "use strict";
        a.d(t, {
          AR: function () {
            return u;
          },
          Lf: function () {
            return b;
          },
          Lv: function () {
            return c;
          },
          Qy: function () {
            return m;
          },
          RT: function () {
            return y;
          },
          Vd: function () {
            return v;
          },
          X_: function () {
            return _;
          },
          Xu: function () {
            return d;
          },
          Zo: function () {
            return w;
          },
          Zp: function () {
            return N;
          },
          _p: function () {
            return g;
          },
          fE: function () {
            return p;
          },
          hO: function () {
            return T;
          },
          p: function () {
            return h;
          },
          sk: function () {
            return f;
          },
          yp: function () {
            return x;
          },
        });
        var r = a(49321),
          n = a(15418),
          s = a(82649);
        let i = async (e) => {
            let { method: t = "POST", data: a, path: r, noCache: n = !1 } = e;
            try {
              let e = await (0, s.Sp)("POINTS_URL"),
                i = {
                  method: t,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json, text/plain, */*",
                    "Cache-Control": n ? "no-cache" : "",
                  },
                  ...(a && { body: JSON.stringify(a) }),
                },
                l = await fetch("".concat(e, "/").concat(r), i),
                o = await l.json();
              if (!l.ok) {
                let e = Error();
                throw ((e.name = o.name), (e.message = o.message), e);
              }
              return { data: o };
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
          o = async (e) => {
            let t = { walletAddress: l().ethAddress, referralCode: e };
            return await i({ data: t, path: "users/user" });
          },
          c = async function (e) {
            var t;
            let a =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = l();
            console.debug("GetUserData");
            let s = await i({
              method: "GET",
              path: "users/user?walletAddress=".concat(r.ethAddress),
              noCache: !0,
            });
            if (
              !a &&
              s.data &&
              !Object.keys(
                null == s
                  ? void 0
                  : null === (t = s.data) || void 0 === t
                  ? void 0
                  : t.user
              ).length
            ) {
              let { error: t } = await o(e);
              return t
                ? { error: t }
                : (e
                    ? n.Z.track("Referral wallet connect", { referralToken: e })
                    : n.Z.track("Wallet connect"),
                  await c(e));
            }
            return s;
          },
          d = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
            });
          },
          u = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
            });
          },
          m = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
            });
          },
          w = async (e) => {
            let t = l();
            return await i({
              method: "GET",
              path: "auth/discord/callback?token="
                .concat(e, "&walletAddress=")
                .concat(t.ethAddress),
            });
          },
          h = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
            });
          },
          p = async (e) => {
            let { displayName: t, isAvatar: a, signature: n } = e,
              s = {
                walletAddress: l().ethAddress,
                displayName: (0, r.U)(t) ? t.toLowerCase() : t,
                isAvatar: a,
                signature: n,
              };
            return await i({ method: "PUT", path: "users/user", data: s });
          },
          x = async (e) =>
            await i({
              method: "POST",
              path: "auth/farcaster/callback",
              data: e,
            }),
          f = async (e) => {
            let {
                page: t,
                pageLimit: a,
                sortField: r,
                sortType: n,
                filterBy: s,
              } = e,
              o = {
                walletAddress: l().ethAddress,
                page: t,
                pageSize: a,
                sortField: r,
                sortType: n,
                ...("All" === s ? {} : { type: s }),
              };
            return await i({ data: o, path: "rewards/rewardsHistory" });
          },
          v = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "badges/profile?walletAddress=".concat(e.ethAddress),
            });
          },
          y = async () => await i({ method: "GET", path: "badges/all" }),
          g = async (e) =>
            await i({
              method: "GET",
              path: "users/get-referrals?referralCode=".concat(e),
            }),
          b = async (e) =>
            await i({ method: "POST", path: "stats/leaderboard24hr", data: e }),
          N = async (e) =>
            await i({ method: "POST", path: "stats/leaderboard", data: e }),
          _ = async (e) =>
            await i({
              method: "GET",
              path: "stats/user?walletAddress=".concat(e),
            }),
          T = async (e, t) =>
            await i({
              method: "GET",
              path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
            });
      },
      9681: function (e, t, a) {
        "use strict";
        a.d(t, {
          C: function () {
            return r;
          },
        });
        let r = (e) => {
          if (e.length <= 2) return e;
          if (e.length <= 8)
            return "".concat(e[0], "...").concat(e[e.length - 1]);
          let t = e.slice(0, 4),
            a = e.slice(-4);
          return "".concat(t, "...").concat(a);
        };
      },
      20448: function (e, t, a) {
        "use strict";
        a.d(t, {
          b: function () {
            return o;
          },
        });
        var r = a(43210),
          n = a(86900),
          s = a(57393);
        let i = r.y,
          l = {
            localhost: n.Z,
            "app.ithacaprotocol.io": i,
            "sepolia.canary.ithacanoemon.tech": n.Z,
            "testnet.ithacaprotocol.io": n.Z,
            "app.canary.ithacanoemon.tech": n.Z,
            "mumbai.canary.ithacanoemon.tech": s.v,
            "decent-governor-development-phase1.up.railway.app": n.Z,
            "axelar-integration.ithacaprotocol.io": r.y,
          },
          o = (e) => {
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
              ? n.Z
              : null !== (t = l[window.location.hostname]) && void 0 !== t
              ? t
              : i;
          };
      },
      64729: function (e, t, a) {
        "use strict";
        a.d(t, {
          X: function () {
            return r;
          },
        }),
          a(82649);
        let r = () => ({
          isSolanaWalletActive: !1,
          leaderBoardAddresses: {
            fundlockArbitrumAddress:
              "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
            wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          },
        });
      },
      81989: function (e, t, a) {
        "use strict";
        a.d(t, {
          Gc: function () {
            return f;
          },
          ho: function () {
            return x;
          },
          Pk: function () {
            return p;
          },
        });
        var r = a(64729),
          n = a(92321),
          s = a(54306),
          i = a(44718),
          l = a(20448),
          o = a(12185),
          c = a(59731),
          d = a(88144),
          u = a(72809);
        let m = (e) => {
            let { address: t, token: a, query: n } = e,
              { connection: s } = (0, i.R)(),
              l = t ? new u.PublicKey(t) : null,
              { leaderBoardAddresses: o } = (0, r.X)();
            return (0, d.a)({
              queryKey: ["solana-balance", t, a],
              queryFn: async () => {
                if (!l || !s) throw Error("Missing publicKey or connection");
                if ("SOL" === a) {
                  let e = await s.getBalance(l);
                  return {
                    decimals: 9,
                    formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === a) {
                  let e = await s.getParsedTokenAccountsByOwner(l, {
                      mint: new u.PublicKey(o.wethArbitrumAddress),
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
                throw Error("Unsupported token: ".concat(a));
              },
              refetchInterval: 1e4,
              enabled: !!l && !!s,
              ...n,
            });
          },
          w = () => {
            let { isConnected: e, address: t } = (0, n.m)();
            return { isConnected: e, address: t };
          },
          h = () => {
            let { connected: e, publicKey: t } = (0, s.O)(),
              { connection: a } = (0, i.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          p = () => {
            let { isSolanaWalletActive: e } = (0, r.X)(),
              t = w(),
              a = h();
            return e ? a : t;
          },
          x = () => {
            let { address: e } = h();
            return {
              SOLData: m({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: m({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          f = () => {
            let { address: e } = w(),
              { systemInfo: t, isAuthenticated: a } = (0, c.qr)(),
              r = { address: e, chainId: (0, l.b)().id };
            return {
              WETHData: (0, o.K)({
                ...r,
                token: t.tokenAddress.WETH,
                query: { enabled: a, refetchInterval: 1e4 },
              }),
              USDCData: (0, o.K)({
                ...r,
                token: t.tokenAddress.USDC,
                query: { enabled: a, refetchInterval: 1e4 },
              }),
            };
          };
      },
      11129: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return eA;
            },
          });
        var r,
          n,
          s,
          i,
          l,
          o,
          c,
          d,
          u = a(85893),
          m = a(58224),
          w = a(13880),
          h = a(61920),
          p = a(40838),
          x = a(95373),
          f = a(92321),
          v = a(12185),
          y = a(59731),
          g = a(93967),
          b = a.n(g),
          N = a(70757);
        let _ = (e) => {
          let { count: t, className: a } = e;
          return (0, u.jsx)("div", {
            className: b()(
              "tw-inline-flex tw-size-3 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-current tw-font-roboto tw-text-[8px]",
              a
            ),
            children: t,
          });
        };
        var T = (e) => {
          let {
              iconClassName: t,
              circleClassName: a,
              displayOraclePriceAsString: r,
            } = e,
            { underlyingCurrency: n } = (0, y.qr)(),
            s = b()("tw-size-[10px] tw-m-[1px]", t),
            i = (0, N.XX)("USDC", s),
            l = (0, N.XX)(n, s);
          return (0, u.jsxs)("div", {
            className: "tw-inline-flex tw-items-center",
            children: [
              (0, u.jsx)(_, { count: 1, className: a }),
              i,
              "x HC ",
              i,
              "+ ",
              (0, u.jsx)(_, { count: 1, className: a }),
              l,
              r ? "x Oracle Price" : "in$",
              " x HC ",
              l,
              "+ ",
              (0, u.jsx)(_, { count: 2, className: b()("tw-m-[1px]", a) }),
              "+ ",
              (0, u.jsx)(_, { count: 3, className: b()("tw-m-[1px]", a) }),
              "- ",
              (0, u.jsx)(_, { count: 4, className: b()("tw-ml-[1px]", a) }),
            ],
          });
        };
        let j = (e) => {
            let { count: t } = e;
            return (0, u.jsx)("div", {
              className:
                "tw-absolute -tw-right-4 tw-top-1/2 tw-inline-flex tw-size-3 tw-shrink-0 -tw-translate-y-1/2 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-current tw-font-roboto tw-text-[8px]",
              children: t,
            });
          },
          A = (e, t) => {
            switch (e) {
              case "Head":
              case "Borrow/Repay":
              default:
                return (0, u.jsx)("div", {});
              case "Health Factor":
                return (0, u.jsx)("div", {
                  className: "tw-text-start",
                  children: e,
                });
              case "Debt":
              case "APY Variable":
              case "Numerator Sum / Denominator Sum":
              case "Liquidation Threshold":
              case "Haircut":
                return (0, u.jsx)("div", { children: e });
              case "Health Factor Denominator":
                return (0, u.jsxs)("div", {
                  children: [
                    (0, u.jsx)("span", { children: e }),
                    (0, u.jsxs)("span", {
                      className: "tw-flex tw-items-center tw-justify-end",
                      children: [
                        "Debt ",
                        (0, N.XX)("USDC", "tw-size-3"),
                        " + Debt ",
                        (0, N.XX)(t, "tw-size-3"),
                        " in $",
                      ],
                    }),
                  ],
                });
              case "Pool Information":
                return (0, u.jsx)("div", {
                  className: "tw-text-center",
                  children: "Pool Information",
                });
            }
          },
          E = (e) => {
            switch (e) {
              case "Asset":
                return (0, u.jsx)("div", {
                  className: "tw-text-start",
                  children: e,
                });
              case "Wallet Balance":
              case "APY Variable":
                return (0, u.jsx)("div", { children: e });
              case "Lent Amount":
                return (0, u.jsxs)("div", {
                  className: "tw-relative",
                  children: [e, " ", (0, u.jsx)(j, { count: 1 })],
                });
              case "Positions' MTM":
                return (0, u.jsxs)("div", {
                  className: "tw-relative",
                  children: [e, " ", (0, u.jsx)(j, { count: 2 })],
                });
              case "Position' Collateral Requirement":
                return (0, u.jsxs)("div", {
                  className: "tw-relative ",
                  children: [
                    (0, u.jsx)("span", { children: "Positions'" }),
                    " ",
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)("span", { children: "Collateral Requirement" }),
                    (0, u.jsx)(j, { count: 3 }),
                  ],
                });
              case "Positions' 1D Stress Test Value":
                return (0, u.jsxs)("div", {
                  className: "tw-relative",
                  children: [
                    (0, u.jsx)("span", { children: "Positions' 1D" }),
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)("span", { children: "Stress Test Value" }),
                    (0, u.jsx)(j, { count: 4 }),
                  ],
                });
              case "Health Factor Numerator":
                return (0, u.jsxs)("div", {
                  children: [
                    (0, u.jsx)("span", { children: "Health Factor Numerator" }),
                    " ",
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)("span", { children: (0, u.jsx)(T, {}) }),
                  ],
                });
              case "Pool Information":
                return (0, u.jsx)("div", {
                  className: "tw-text-center",
                  children: e,
                });
              default:
                return null;
            }
          },
          C = () => {
            let { underlyingCurrency: e } = (0, y.qr)();
            return (0, u.jsxs)("div", {
              className:
                "-tw-mt-7 tw-w-max tw-space-y-3 tw-rounded-2xl tw-bg-black-dark tw-pt-4 tw-font-semibold",
              children: [
                (0, u.jsxs)("div", {
                  className: "tw-mr-2",
                  children: [
                    "Health Factor Numerator:",
                    (0, u.jsx)("span", {
                      className: "tw-ml-5",
                      children: (0, u.jsx)(T, {
                        displayOraclePriceAsString: !0,
                        circleClassName: "!tw-size-4 !tw-text-[14px]",
                        iconClassName: "!tw-size-4",
                      }),
                    }),
                  ],
                }),
                (0, u.jsxs)("div", {
                  className: "tw-mr-2 tw-flex",
                  children: [
                    "Health Factor Denominator:",
                    (0, u.jsxs)("span", {
                      className: "tw-ml-1 tw-flex tw-items-center",
                      children: [
                        "Debt ",
                        (0, N.XX)("USDC", "tw-m-1"),
                        " + Debt ",
                        (0, N.XX)(e, "tw-m-1"),
                        " x Oracle Price",
                      ],
                    }),
                  ],
                }),
                (0, u.jsx)("div", {
                  className:
                    "tw-flex tw-items-center tw-justify-center tw-gap-4",
                  children: (0, u.jsx)("div", {
                    className: "tw-flex tw-items-center tw-gap-2",
                    children: (0, u.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-divide-x",
                      children: [
                        (0, u.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-gap-2 tw-pr-3",
                          children: [
                            (0, u.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-col tw-divide-y [&>span]:tw-px-1 [&>span]:tw-py-0.5",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-center",
                                  children: "X",
                                }),
                                (0, u.jsx)("span", { children: "Debt" }),
                              ],
                            }),
                            (0, u.jsx)("span", { children: ">" }),
                            (0, u.jsx)("span", { children: "1.2" }),
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className: "tw-flex tw-items-center tw-gap-2 tw-pl-3",
                          children: [
                            (0, u.jsx)("span", {
                              children: "Liquidation Threshold",
                            }),
                            (0, u.jsxs)("div", {
                              className: "tw-flex tw-items-center tw-gap-2",
                              children: [
                                (0, u.jsxs)("div", {
                                  className:
                                    "tw-flex tw-flex-col tw-divide-y [&>span]:tw-px-1 [&>span]:tw-py-0.5",
                                  children: [
                                    (0, u.jsx)("span", {
                                      className: "tw-text-center",
                                      children: "X",
                                    }),
                                    (0, u.jsx)("span", { children: "Debt" }),
                                  ],
                                }),
                                (0, u.jsx)("span", { children: "<" }),
                                (0, u.jsx)("span", { children: "1.2" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
          };
        var S = a(35192),
          D = a(81014),
          I = a(37422),
          O = a(41664),
          R = a.n(O),
          k = a(70991),
          L = a.n(k),
          B = a(67294),
          U = a(46656),
          P = a(45338);
        let M = () => {
          let { user: e, userPositionsCollateral: t } = (0,
            D.useMarginLoansDataContext)(),
            a = (0, B.useMemo)(() => {
              if (e)
                return (
                  Number(e.totalCollateralUSD) *
                  Number(e.currentLiquidationThreshold)
                );
            }, [e]),
            r = (0, B.useMemo)(() => {
              var t;
              return null !== (t = null == e ? void 0 : e.totalBorrowsUSD) &&
                void 0 !== t
                ? t
                : "0";
            }, [null == e ? void 0 : e.totalBorrowsUSD]);
          return {
            healthFactorNumeratorValue: a,
            healthFactorDenominatorValue: r,
            healthFactorValue: (0, B.useMemo)(() => {
              var t;
              return null !== (t = null == e ? void 0 : e.healthFactor) &&
                void 0 !== t
                ? t
                : "-1";
            }, [null == e ? void 0 : e.healthFactor]),
            displayFormulas: {
              healthFactorNumeratorFormula: (0, B.useMemo)(() => {
                if (!e) return;
                let a = e.userReservesData.map((e) => {
                    let {
                        underlyingBalance: t,
                        reserve: {
                          symbol: a,
                          formattedReserveLiquidationThreshold: r,
                          formattedPriceInMarketReferenceCurrency: n,
                        },
                      } = e,
                      s = (0, P.uM)(
                        Number(t),
                        "",
                        a,
                        "USDC" === a ? 1 : 3,
                        !0,
                        !0
                      ),
                      i =
                        "USDC" === a
                          ? s
                          : "("
                              .concat(s, " x ")
                              .concat(
                                (0, P.uM)(Number(n), "", "USDC", 0, !0, !0),
                                ")"
                              ),
                      l = 100 * Number(r);
                    return "".concat(i, " x ").concat(l, "%");
                  }),
                  r = (0, P.Yr)(Number(t.mtm), 2, !0, !0),
                  n = (0, P.Yr)(Number(t.collateral), 1, !0, !0),
                  s = (0, P.Yr)(Number(t.valueAtRisk), 1, !0, !0);
                return a
                  .join(" + ")
                  .concat(" + ".concat(r, " + ").concat(n, " - ").concat(s));
              }, [e, t]),
              healthFactorDenominatorFormula: (0, B.useMemo)(
                () =>
                  e
                    ? e.userReservesData
                        .map((e) => {
                          let {
                              totalBorrows: t,
                              reserve: {
                                symbol: a,
                                formattedPriceInMarketReferenceCurrency: r,
                              },
                            } = e,
                            n = (0, P.uM)(
                              Number(t),
                              "",
                              a,
                              "USDC" === a ? 1 : 3,
                              !0,
                              !0
                            ),
                            s = (0, P.uM)(Number(r), "", "USDC", 0, !0, !0);
                          return ""
                            .concat(n)
                            .concat("USDC" !== a ? " x ".concat(s) : "");
                        })
                        .join(" + ")
                    : "-",
                [e]
              ),
            },
          };
        };
        var F = (e) => {
            let { reserveData: t, newHealthFactor: a, children: r } = e,
              {
                reserve: { symbol: n, supplyAPY: s, variableBorrowAPY: i },
                totalBorrows: l,
              } = t,
              { currentSpotPrice: o } = (0, y.qr)(),
              { user: c, userPositionsCollateral: d } = (0,
              D.useMarginLoansDataContext)(),
              {
                displayFormulas: m,
                healthFactorValue: w,
                healthFactorNumeratorValue: h,
                healthFactorDenominatorValue: p,
              } = M();
            return (0, u.jsxs)("div", {
              className:
                "tw-mt-3 tw-border-t tw-border-t-ithaca-white-10 tw-pb-2 tw-pt-4 tw-text-ithaca-white-60",
              children: [
                (0, u.jsx)("div", {
                  className: "tw-mb-4 tw-text-base tw-text-white",
                  children: "Transaction Overview",
                }),
                r,
                (0, u.jsxs)("div", {
                  className:
                    "tw-space-y-4 tw-border-b tw-border-b-ithaca-white-30",
                  children: [
                    (0, u.jsxs)("div", {
                      className: "tw-flex tw-justify-between",
                      children: [
                        (0, u.jsx)("span", {
                          children: "Health Factor (Current)",
                        }),
                        (0, u.jsx)("div", {
                          className: "tw-inline-flex tw-items-center tw-gap-1",
                          children: (0, u.jsx)("span", {
                            className: "tw-text-sm tw-text-ithaca-green-40",
                            children: "-1" === w ? "∞" : Number(w).toFixed(2),
                          }),
                        }),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-space-y-1 tw-border-b tw-border-b-ithaca-white-30 tw-pb-1.5",
                      children: [
                        (0, u.jsxs)("div", {
                          className:
                            "tw-grid tw-grid-cols-[1fr_1fr_1fr] tw-border-t tw-border-t-ithaca-white-30 tw-pt-2",
                          children: [
                            (0, u.jsx)("div", { children: "1. Lent Amount" }),
                            null == c
                              ? void 0
                              : c.userReservesData.map((e, t) => {
                                  let {
                                    reserve: { underlyingAsset: a, symbol: r },
                                  } = e;
                                  return (0, u.jsxs)(
                                    "div",
                                    {
                                      className: b()(
                                        "tw-flex tw-items-center tw-justify-end tw-gap-1",
                                        {
                                          "after:tw-ml-3 after:tw-h-[80%] after:!tw-w-[1px] after:tw-bg-current":
                                            t < c.userReservesData.length - 1,
                                        }
                                      ),
                                      children: [
                                        (0, P.uM)(
                                          Number(e.underlyingBalanceUSD),
                                          "string",
                                          "USDC",
                                          1
                                        ),
                                        (0, N.XX)(r, "tw-size-4"),
                                        " ",
                                        r,
                                        1 === t &&
                                          (0, u.jsx)(u.Fragment, {
                                            children: " (in $*)",
                                          }),
                                      ],
                                    },
                                    a
                                  );
                                }),
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className:
                            "tw-grid tw-grid-cols-[2.5fr_1fr] tw-gap-1",
                          children: [
                            (0, u.jsx)("div", {
                              children: "2. Positions' MTM",
                            }),
                            (0, u.jsxs)("div", {
                              className: "tw-text-end",
                              children: [
                                (0, P.Yr)(Number(d.mtm), 4, !0, !0),
                                " (in $*)",
                              ],
                            }),
                            (0, u.jsx)("div", {
                              children: "3. Positions' Collateral Requirement",
                            }),
                            (0, u.jsxs)("div", {
                              className: "tw-text-end",
                              children: [
                                (0, P.Yr)(Number(d.collateral), 4, !0, !0),
                                " (in $*)",
                              ],
                            }),
                            (0, u.jsx)("div", {
                              className: "tw-inline-block",
                              children: "4. Positions' 1D Stress Test Value",
                            }),
                            (0, u.jsxs)("div", {
                              className: "tw-text-end",
                              children: [
                                (0, P.Yr)(Number(d.valueAtRisk), 4, !0, !0),
                                " (in $*)",
                              ],
                            }),
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className: "tw-text-xxs tw-italic",
                          children: [
                            "* All WETH values are shown in $ terms based on last oracle price of ETH @ ",
                            o,
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className: "tw-grid tw-grid-cols-[2.5fr_1fr] tw-pb-4",
                      children: [
                        (0, u.jsxs)("div", {
                          children: [
                            (0, u.jsx)("div", {
                              children: "Health Factor Numerator",
                            }),
                            (0, u.jsx)("div", { children: (0, u.jsx)(T, {}) }),
                          ],
                        }),
                        (0, u.jsx)("div", {
                          className: "tw-text-end",
                          children: (0, P.uM)(Number(h), "", "USDC", 1),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsxs)("div", {
                  className:
                    "tw-mb-4 tw-mt-2 tw-flex tw-items-center tw-justify-between",
                  children: [
                    (0, u.jsx)("span", { children: "Health Factor (New)" }),
                    (0, u.jsx)("div", {
                      className: "tw-inline-flex tw-items-center tw-gap-1",
                      children: (0, u.jsx)("span", {
                        className: "tw-text-sm tw-text-ithaca-orange",
                        children: "-1" === a ? "∞" : Number(a).toFixed(2),
                      }),
                    }),
                  ],
                }),
                (0, u.jsxs)("div", {
                  className:
                    "tw-space-y-1 tw-border-b tw-border-ithaca-white-30",
                  children: [
                    (0, u.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-gap-1",
                      children: [
                        (0, u.jsxs)("span", {
                          children: [
                            "Debt:",
                            " ",
                            (0, P.uM)(
                              Number(l),
                              "string",
                              n,
                              "USDC" === n ? 1 : 3
                            ),
                          ],
                        }),
                        (0, N.XX)(n || ""),
                        " ",
                        n,
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      children: [
                        "Supply APY: ",
                        (100 * Number(s)).toFixed(2),
                        " %",
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      children: [
                        "Borrow APY: ",
                        (100 * Number(i)).toFixed(2),
                        " %",
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      children: [
                        "Health Factor Denominator: ",
                        (0, P.uM)(Number(p), "string", "USDC", 1),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-gap-1 tw-pb-4",
                      children: [
                        (0, u.jsxs)("span", {
                          children: [
                            "Health Factor: ",
                            "-1" === w ? "∞" : Number(w).toFixed(2),
                            " = ",
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-gap-1 tw-divide-y tw-divide-ithaca-white-60",
                          children: [
                            (0, u.jsx)("span", {
                              className:
                                "tw-flex-col tw-text-center tw-text-xs",
                              children: (0, u.jsx)("span", {
                                className: "tw-flex tw-justify-center",
                                children: m.healthFactorNumeratorFormula,
                              }),
                            }),
                            (0, u.jsx)("span", {
                              className: "tw-text-center",
                              children: m.healthFactorDenominatorFormula,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          W = a(65440),
          H = a(20448),
          Z = a(48104),
          q = a(89469),
          Y = a(47236),
          V = a(43681),
          X = a(91553),
          z = a(69546),
          G = a(52431),
          K = a(45323),
          $ = a(59421),
          Q = a(61228),
          J = a(48120),
          ee = a(50676),
          et = a(14504),
          ea = a(80284),
          er = a(70202);
        ((r = l || (l = {})).NO_AMOUNT = "NO_AMOUNT"),
          (r.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (r.WRONG_NETWORK = "WRONG_NETWORK"),
          (r.INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE"),
          (r.READY_TO_LEND = "READY_TO_LEND");
        var en = (e) => {
          let {
              isOpen: t,
              setIsOpen: a,
              user: r,
              reserveData: n,
              setReserveData: s,
            } = e,
            {
              reserve: { underlyingAsset: i, symbol: l, decimals: o },
              underlyingBalance: c,
            } = n,
            d = (0, B.useMemo)(() => (0, H.b)().id, []),
            { ithacaSDK: m, systemInfo: w } = (0, y.qr)(),
            { collateralSummary: h } = (0, $.F)(),
            { marketReferencePriceInUsd: p } = (0,
            D.useMarginLoansDataContext)(),
            { showToast: x, showErrorToast: f } = (0, Y.Z)(),
            g = (0, Z.t)({ chainId: d }),
            { data: b } = (0, q.p)(),
            { data: _ } = (0, v.K)({
              address: null == b ? void 0 : b.account.address,
              chainId: d,
            }),
            { healthFactorValue: T } = M(),
            [j, A] = (0, B.useState)(""),
            [E, C] = (0, B.useState)("NO_AMOUNT"),
            [S, O] = (0, B.useState)(!1),
            [R, k] = (0, B.useState)(T),
            L = (0, B.useMemo)(
              () =>
                (0, Q.E)(i, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE")
                  ? _
                    ? _.formatted
                    : "0"
                  : h[l].walletBalance,
              [_, h, l, i]
            ),
            en = () => {
              A(""), a(!1), s(void 0);
            },
            es = (e) => {
              let t = (0, P.Dg)(e);
              if ((A(t), Number(r.totalBorrowsUSD) > 0)) {
                let e = (0, V.hE)(t)
                  .multipliedBy(
                    n.reserve.formattedPriceInMarketReferenceCurrency
                  )
                  .multipliedBy(p)
                  .shiftedBy(-X.$3);
                k(
                  (0, z.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, V.hE)(
                      r.totalCollateralUSD
                    ).plus(e),
                    borrowBalanceMarketReferenceCurrency: r.totalBorrowsUSD,
                    currentLiquidationThreshold: r.currentLiquidationThreshold,
                  }).toString(10)
                );
              }
              ei(n, t);
            },
            ei = async (e, t) => {
              if (!g || !b) return;
              let a = (0, J.v)(t, o),
                r = (0, J.v)(L, o),
                n = ee.zL;
              (0, Q.E)(i, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") ||
                (n = await g.readContract({
                  address: e.underlyingAsset,
                  abi: et.Wo,
                  functionName: "allowance",
                  args: [b.account.address, w.lendingPoolAddress],
                })),
                a === BigInt(0)
                  ? C("NO_AMOUNT")
                  : a > r
                  ? C("INSUFFICIENT_BALANCE")
                  : b.chain.id !== d
                  ? C("WRONG_NETWORK")
                  : a > n
                  ? C("INSUFFICIENT_ALLOWANCE")
                  : C("READY_TO_LEND");
            },
            el = () => {
              switch (E) {
                case "NO_AMOUNT":
                  return "Enter amount to lend";
                case "INSUFFICIENT_BALANCE":
                  return "Insufficient balance";
                case "WRONG_NETWORK":
                  return "Switch network";
                case "INSUFFICIENT_ALLOWANCE":
                  return "Approve";
                case "READY_TO_LEND":
                  return (0, Q.E)(
                    i,
                    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                  )
                    ? "Wrap & Lend"
                    : "Lend";
                default:
                  return "Invalid Config";
              }
            },
            eo = (e) => async () => {
              try {
                await e.switchChain({ id: d });
              } catch (e) {
                f({ title: "Failed to switch network", message: e.message });
              }
            },
            ec = (e) => async () => {
              try {
                O(!0);
                let t = await e.writeContract({
                  address: n.underlyingAsset,
                  abi: et.Wo,
                  functionName: "approve",
                  args: [w.lendingPoolAddress, (0, J.v)(j, o)],
                });
                await e.waitForTransactionReceipt({ hash: t }),
                  x({
                    title: "Approved",
                    message:
                      "Approved the lending pool contract to spend the tokens",
                    type: "success",
                  }),
                  await ei(n, j);
              } catch (e) {
                f({
                  title: "Rejected Request",
                  message: "User rejected the request",
                });
              } finally {
                O(!1);
              }
            },
            ed = (e) => async () => {
              try {
                O(!0);
                let t = await m.marginLending.deposit(i, (0, J.v)(j, o));
                await e.waitForTransactionReceipt({ hash: t }),
                  x({
                    title: "Lent",
                    message: ""
                      .concat(j, " ")
                      .concat(n.reserve.symbol, " lent to lending pool"),
                    type: "success",
                  }),
                  en();
              } catch (e) {
                x({
                  title: "Rejected Request",
                  message: "User rejected the request",
                  type: "error",
                });
              } finally {
                O(!1);
              }
            };
          return (
            (0, B.useEffect)(() => {
              b && ei(n, j);
            }, [null == b ? void 0 : b.chain.id]),
            (0, u.jsxs)(U.default, {
              className: "tw-text-xs tw-text-ithaca-white-60",
              title: (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsxs)("div", {
                    className: "tw-flex tw-flex-wrap tw-items-center tw-gap-2",
                    children: ["Deposit ", (0, N.XX)(l, "tw-size-6"), " ", l],
                  }),
                  (0, u.jsxs)("div", {
                    className:
                      "tw-mt-2 tw-flex tw-items-center tw-gap-1.5 tw-text-sm tw-font-normal tw-text-ithaca-white-60",
                    children: ["Earn Income by Lending ", (0, N.XX)(l), l],
                  }),
                ],
              }),
              isOpen: t,
              onCloseModal: en,
              isLoading: S,
              hideFooter: !0,
              children: [
                (0, u.jsxs)("div", {
                  className: "tw-flex tw-items-start tw-justify-between",
                  children: [
                    (0, u.jsx)(G.Z, {
                      label: "Amount",
                      options: r.userReservesData.map((e) => {
                        let { reserve: t } = e;
                        return { name: t.symbol, value: t.underlyingAsset };
                      }),
                      value: {
                        name: n.reserve.symbol,
                        value: n.underlyingAsset,
                      },
                      onChange: (e, t) => {
                        let a = r.userReservesData.find((e) => {
                          let { reserve: a } = e;
                          return (
                            a.symbol === t.name && a.underlyingAsset === t.value
                          );
                        });
                        a && (s(a), ei(a, j));
                      },
                      iconStart: (0, N.XX)(l),
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-mt-5 tw-flex tw-flex-col tw-items-end tw-gap-2",
                      children: [
                        (0, u.jsxs)("div", {
                          className: "tw-flex tw-items-baseline tw-gap-2",
                          children: [
                            (0, u.jsx)(K.Z, {
                              value: j,
                              onChange: (e) => {
                                let { target: t } = e;
                                return es(t.value);
                              },
                            }),
                            (0, u.jsx)(I.Z, {
                              title: "All",
                              variant: "secondary",
                              size: "sm",
                              className: "tw-px-4",
                              onClick: () => es(L),
                              children: "All",
                            }),
                          ],
                        }),
                        (0, u.jsxs)("span", {
                          className: "tw-inline-flex tw-items-center tw-gap-1",
                          children: [
                            "Wallet Balance:",
                            " ",
                            (0, P.uM)(
                              Number(L),
                              "string",
                              l,
                              "USDC" === l ? 1 : 3
                            ),
                            " ",
                            (0, N.XX)(l),
                            " ",
                            l,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsx)(F, {
                  reserveData: n,
                  newHealthFactor: R,
                  children: (0, u.jsxs)("div", {
                    className:
                      "tw-mb-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2",
                    children: [
                      (0, u.jsx)("span", {
                        children: "Lend (Collateral to Borrow Against)",
                      }),
                      (0, u.jsxs)("div", {
                        className: "tw-inline-flex tw-items-center tw-gap-1",
                        children: [
                          (0, u.jsxs)("div", {
                            className:
                              "tw-inline-flex tw-items-center tw-gap-1",
                            children: [
                              (0, u.jsx)("span", {
                                className: "tw-text-white",
                                children: (0, P.uM)(
                                  Number(c),
                                  "string",
                                  l,
                                  "USDC" === l ? 1 : 3,
                                  void 0,
                                  !0
                                ),
                              }),
                              (0, N.XX)(l),
                              " ",
                              (0, Q.E)(
                                i,
                                "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                              )
                                ? "WETH"
                                : l,
                            ],
                          }),
                          (0, u.jsx)("div", {
                            className: "tw-w-4 tw-shrink-0",
                            children: (0, u.jsx)(er.Z, {
                              className: "tw-text-white",
                            }),
                          }),
                          (0, u.jsxs)("div", {
                            className:
                              "tw-inline-flex tw-items-center tw-gap-1",
                            children: [
                              (0, u.jsx)("span", {
                                className: "tw-text-white",
                                children: (0, P.uM)(
                                  Number(c) +
                                    ((0, P.E5)(Number(j)) ? 0 : Number(j)),
                                  "string",
                                  l,
                                  "USDC" === l ? 1 : 3,
                                  void 0,
                                  !0
                                ),
                              }),
                              (0, N.XX)(l),
                              " ",
                              (0, Q.E)(
                                i,
                                "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                              )
                                ? "WETH"
                                : l,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, u.jsxs)("div", {
                  className:
                    "tw-mb-5 tw-flex tw-items-center tw-justify-end tw-gap-1",
                  children: [
                    "Wallet balance:",
                    " ",
                    (0, P.uM)(Number(L), "string", l, "USDC" === l ? 1 : 3),
                    " ",
                    (0, N.XX)(l),
                    " ",
                    l,
                  ],
                }),
                (0, u.jsx)("div", {
                  className: "!tw-mb-0 tw-space-y-2 tw-pb-0",
                  children: (0, u.jsx)(I.Z, {
                    disabled: !(() => {
                      switch (E) {
                        case "NO_AMOUNT":
                        case "INSUFFICIENT_BALANCE":
                        default:
                          return !1;
                        case "WRONG_NETWORK":
                        case "INSUFFICIENT_ALLOWANCE":
                        case "READY_TO_LEND":
                          return !0;
                      }
                    })(),
                    title: el(),
                    variant: "outline",
                    className: "tw-flex tw-w-full hover:!tw-bg-none",
                    onClick: (() => {
                      if (!b) return;
                      let e = b.extend(ea.I);
                      switch (E) {
                        case "WRONG_NETWORK":
                          return eo(e);
                        case "INSUFFICIENT_ALLOWANCE":
                          return ec(e);
                        case "READY_TO_LEND":
                          return ed(e);
                      }
                    })(),
                    children: S ? (0, u.jsx)(W.Z, { type: "sm" }) : el(),
                  }),
                }),
              ],
            })
          );
        };
        ((n = o || (o = {})).NO_AMOUNT = "NO_AMOUNT"),
          (n.INSUFFICIENT_DEPOSIT = "INSUFFICIENT_DEPOSIT"),
          (n.UNSAFE_HEALTH_FACTOR = "UNSAFE_HEALTH_FACTOR"),
          (n.NOT_ENOUGH_LIQUIDITY = "NOT_ENOUGH_LIQUIDITY"),
          (n.WITHDRAWALS_PAUSED = "WITHDRAWALS_PAUSED"),
          (n.WRONG_NETWORK = "WRONG_NETWORK"),
          (n.READY_TO_WITHDRAW = "READY_TO_WITHDRAW");
        var es = (e) => {
            let {
                isOpen: t,
                setIsOpen: a,
                user: r,
                reserveData: n,
                setReserveData: s,
              } = e,
              {
                reserve: { underlyingAsset: i, symbol: l, decimals: o },
                underlyingBalance: c,
              } = n,
              d = (0, B.useMemo)(() => (0, H.b)().id, []),
              { ithacaSDK: m } = (0, y.qr)(),
              { collateralSummary: w } = (0, $.F)(),
              { marketReferencePriceInUsd: h } = (0,
              D.useMarginLoansDataContext)(),
              { showToast: p, showErrorToast: x } = (0, Y.Z)(),
              f = (0, Z.t)({ chainId: d }),
              { data: g } = (0, q.p)(),
              { data: b } = (0, v.K)({
                address: null == g ? void 0 : g.account.address,
                chainId: d,
              }),
              { healthFactorValue: _ } = M(),
              [T, j] = (0, B.useState)(""),
              [A, E] = (0, B.useState)("NO_AMOUNT"),
              [C, S] = (0, B.useState)(!1),
              [O, R] = (0, B.useState)(_),
              k = (0, B.useMemo)(
                () =>
                  (0, Q.E)(i, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE")
                    ? b
                      ? b.formatted
                      : "0"
                    : w[l].walletBalance,
                [b, w, l, i]
              ),
              L = () => {
                j(""), a(!1), s(void 0);
              },
              ee = (e) => {
                let t = (0, P.Dg)(e);
                j(t);
                let a = O;
                if (Number(r.totalBorrowsUSD) > 0) {
                  let e = (0, V.hE)(t)
                    .multipliedBy(
                      n.reserve.formattedPriceInMarketReferenceCurrency
                    )
                    .multipliedBy(h)
                    .shiftedBy(-X.$3);
                  R(
                    (a = (0, z.L1)({
                      collateralBalanceMarketReferenceCurrency: (0, V.hE)(
                        r.totalCollateralUSD
                      ).minus(e),
                      borrowBalanceMarketReferenceCurrency: r.totalBorrowsUSD,
                      currentLiquidationThreshold:
                        r.currentLiquidationThreshold,
                    }).toString(10))
                  );
                }
                et(n, t, a);
              },
              et = async (e, t, a) => {
                if (!f || !g) return;
                let n = (0, J.v)(t, o),
                  s = (0, J.v)(e.underlyingBalance, o);
                n === BigInt(0)
                  ? E("NO_AMOUNT")
                  : n > s
                  ? E("INSUFFICIENT_DEPOSIT")
                  : Number(r.totalBorrowsUSD) > 0 && 1.2 > Number(a)
                  ? E("UNSAFE_HEALTH_FACTOR")
                  : n > BigInt(e.reserve.availableLiquidity)
                  ? E("NOT_ENOUGH_LIQUIDITY")
                  : e.reserve.isPaused || !e.reserve.isActive
                  ? E("WITHDRAWALS_PAUSED")
                  : g.chain.id !== d
                  ? E("WRONG_NETWORK")
                  : E("READY_TO_WITHDRAW");
              },
              en = () => {
                switch (A) {
                  case "NO_AMOUNT":
                    return "Enter amount to withdraw";
                  case "INSUFFICIENT_DEPOSIT":
                    return "Insufficient deposit";
                  case "UNSAFE_HEALTH_FACTOR":
                    return "Health factor too low";
                  case "NOT_ENOUGH_LIQUIDITY":
                    return "Insufficient liquidity";
                  case "WITHDRAWALS_PAUSED":
                    return "Withdrawals paused";
                  case "WRONG_NETWORK":
                    return "Switch network";
                  case "READY_TO_WITHDRAW":
                    return "Withdraw";
                  default:
                    return "Invalid Config";
                }
              },
              es = (e) => async () => {
                try {
                  await e.switchChain({ id: d });
                } catch (e) {
                  x({ title: "Failed to switch network", message: e.message });
                }
              },
              ei = (e) => async () => {
                try {
                  S(!0);
                  let t = await m.marginLending.withdraw(i, (0, J.v)(T, o));
                  await e.waitForTransactionReceipt({ hash: t }),
                    p({
                      title: "Withdraw successful",
                      message: "Successfully withdraw "
                        .concat(T, " ")
                        .concat(n.reserve.symbol, " from lending pool."),
                      type: "success",
                    }),
                    L();
                } catch (e) {
                  p({
                    title: "Rejected Request",
                    message: "User rejected the request",
                    type: "error",
                  });
                } finally {
                  S(!1);
                }
              };
            return (
              (0, B.useEffect)(() => {
                g && et(n, T, O);
              }, [null == g ? void 0 : g.chain.id]),
              (0, u.jsxs)(U.default, {
                className: "tw-text-xs tw-text-ithaca-white-60",
                title: (0, u.jsxs)("div", {
                  className: "tw-flex tw-flex-wrap tw-items-center tw-gap-2",
                  children: ["Withdraw ", (0, N.XX)(l, "tw-size-6"), " ", l],
                }),
                isOpen: t,
                onCloseModal: L,
                isLoading: C,
                hideFooter: !0,
                children: [
                  (0, u.jsxs)("div", {
                    className: "tw-flex tw-items-start tw-justify-between",
                    children: [
                      (0, u.jsx)(G.Z, {
                        label: "Amount",
                        options: r.userReservesData.map((e) => {
                          let { reserve: t } = e;
                          return { name: t.symbol, value: t.underlyingAsset };
                        }),
                        value: {
                          name: n.reserve.symbol,
                          value: n.underlyingAsset,
                        },
                        onChange: (e, t) => {
                          let a = r.userReservesData.find((e) => {
                            let { reserve: a } = e;
                            return (
                              a.symbol === t.name &&
                              a.underlyingAsset === t.value
                            );
                          });
                          a && (s(a), et(a, T, O));
                        },
                        iconStart: (0, N.XX)(l),
                      }),
                      (0, u.jsxs)("div", {
                        className:
                          "tw-mt-5 tw-flex tw-flex-col tw-items-end tw-gap-2",
                        children: [
                          (0, u.jsxs)("div", {
                            className: "tw-flex tw-items-baseline tw-gap-2",
                            children: [
                              (0, u.jsx)(K.Z, {
                                value: T,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return ee(t.value);
                                },
                              }),
                              (0, u.jsx)(I.Z, {
                                title: "All",
                                variant: "secondary",
                                size: "sm",
                                className: "tw-px-4",
                                onClick: () => ee(c),
                                children: "All",
                              }),
                            ],
                          }),
                          (0, u.jsxs)("span", {
                            className:
                              "tw-inline-flex tw-items-center tw-gap-1",
                            children: [
                              "Collateral to Borrow Against Balance:",
                              " ",
                              (0, P.uM)(
                                Number(c),
                                "string",
                                l,
                                "USDC" === l ? 1 : 3
                              ),
                              " ",
                              (0, N.XX)(l),
                              " ",
                              l,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, u.jsx)(F, {
                    reserveData: n,
                    newHealthFactor: O,
                    children: (0, u.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2",
                      children: [
                        (0, u.jsx)("span", {
                          children: "Remaining (Collateral to Borrow Against)",
                        }),
                        (0, u.jsxs)("div", {
                          className: "tw-inline-flex tw-items-center tw-gap-1",
                          children: [
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                            (0, u.jsx)("div", {
                              className: "tw-w-4 tw-shrink-0",
                              children: (0, u.jsx)(er.Z, {
                                className: "tw-text-white",
                              }),
                            }),
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c) -
                                      ((0, P.E5)(Number(T)) ? 0 : Number(T)),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, u.jsxs)("div", {
                    className:
                      "tw-mb-5 tw-flex tw-items-center tw-justify-end tw-gap-1",
                    children: [
                      "Wallet balance:",
                      " ",
                      (0, P.uM)(Number(k), "string", l, "USDC" === l ? 1 : 3),
                      " ",
                      (0, N.XX)(l),
                      " ",
                      l,
                    ],
                  }),
                  (0, u.jsx)("div", {
                    className: "!tw-mb-0 tw-space-y-2 tw-pb-0",
                    children: (0, u.jsx)(I.Z, {
                      disabled: !(() => {
                        switch (A) {
                          case "NO_AMOUNT":
                          case "INSUFFICIENT_DEPOSIT":
                          case "UNSAFE_HEALTH_FACTOR":
                          case "NOT_ENOUGH_LIQUIDITY":
                          case "WITHDRAWALS_PAUSED":
                          default:
                            return !1;
                          case "WRONG_NETWORK":
                          case "READY_TO_WITHDRAW":
                            return !0;
                        }
                      })(),
                      title: en(),
                      variant: "outline",
                      className: "tw-flex tw-w-full hover:!tw-bg-none",
                      onClick: (() => {
                        if (!g) return;
                        let e = g.extend(ea.I);
                        switch (A) {
                          case "WRONG_NETWORK":
                            return es(e);
                          case "READY_TO_WITHDRAW":
                            return ei(e);
                        }
                      })(),
                      children: C ? (0, u.jsx)(W.Z, { type: "sm" }) : en(),
                    }),
                  }),
                ],
              })
            );
          },
          ei = () => {
            let { address: e, isConnected: t } = (0, f.m)(),
              { data: a } = (0, v.K)({ address: e, chainId: (0, H.b)().id }),
              { isAuthenticated: r } = (0, y.qr)(),
              { user: n, userPositionsCollateral: s } = (0,
              D.useMarginLoansDataContext)(),
              { collateralSummary: i } = (0, $.F)(),
              { healthFactorNumeratorValue: l } = M(),
              [o, c] = (0, B.useState)(),
              [d, m] = (0, B.useState)(!1),
              [w, h] = (0, B.useState)(!1),
              { userReservesData: p, ethReserveData: x } = (0,
              B.useMemo)(() => {
                if (!n) return { userReservesData: [], ethReserveData: void 0 };
                let e = n.userReservesData.find(
                  (e) => "WETH" === e.reserve.symbol
                );
                if (!e) return { userReservesData: [], ethReserveData: void 0 };
                let t = {
                  ...e,
                  reserve: {
                    ...e.reserve,
                    name: "Ethereum",
                    symbol: "ETH",
                    underlyingAsset:
                      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                  },
                  underlyingAsset: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                };
                return {
                  userReservesData: [...n.userReservesData, t],
                  ethReserveData: t,
                };
              }, [n]);
            return (0, u.jsxs)("div", {
              className: b()(
                "tw-divide-y tw-divide-ithaca-white-10 tw-overflow-x-auto",
                { "tw-opacity-0": !r || !t }
              ),
              children: [
                (0, u.jsx)("div", {
                  className:
                    "tw-grid tw-grid-cols-[70px_96px_80px_230px_96px_128px_100px_220px_96px] tw-items-center tw-gap-7 tw-pb-1 tw-text-end tw-text-xs tw-text-ithaca-white-60",
                  children: S.S2.map((e, t) =>
                    (0, u.jsx)(B.Fragment, { children: E(e) }, t)
                  ),
                }),
                (0, u.jsxs)("div", {
                  className:
                    "tw-grid tw-grid-cols-[580px_100px_165px_130px_230px_auto]",
                  children: [
                    (0, u.jsx)("div", {
                      className:
                        "tw-flex tw-w-full tw-flex-col tw-divide-y tw-divide-ithaca-white-10",
                      children:
                        null == n
                          ? void 0
                          : n.userReservesData.map((e) => {
                              let {
                                reserve: { symbol: t },
                                underlyingBalance: a,
                              } = e;
                              return (0, u.jsxs)(
                                "div",
                                {
                                  className:
                                    "tw-grid tw-w-full tw-grid-cols-[70px_96px_80px_240px] tw-items-center tw-gap-7 tw-py-2 tw-text-end",
                                  children: [
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-2 tw-font-medium",
                                      children: [(0, N.XX)(t, "tw-size-6"), t],
                                    }),
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                                      children: [
                                        (0, P.uM)(
                                          Number(i[t].walletBalance),
                                          "string",
                                          t,
                                          "USDC" === t ? 1 : 3
                                        ),
                                        (0, N.XX)(t, "tw-ml-1 tw-size-4"),
                                      ],
                                    }),
                                    (0, u.jsxs)("div", {
                                      children: [
                                        (
                                          100 * Number(e.reserve.supplyAPY)
                                        ).toFixed(2),
                                        " %",
                                      ],
                                    }),
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-justify-between",
                                      children: [
                                        (0, u.jsxs)("div", {
                                          className: "tw-flex tw-gap-2",
                                          children: [
                                            (0, u.jsx)(I.Z, {
                                              onClick: () => {
                                                m(!0), c(e);
                                              },
                                              className:
                                                "tw-w-full tw-flex-grow tw-px-4",
                                              size: "sm",
                                              role: "button",
                                              title: "Lend",
                                              children: "Lend",
                                            }),
                                            (0, u.jsx)(I.Z, {
                                              onClick: () => {
                                                h(!0), c(e);
                                              },
                                              title: "Withdraw",
                                              size: "sm",
                                              role: "button",
                                              variant: "secondary",
                                              className: "tw-flex-grow",
                                              children: "Withdraw",
                                            }),
                                          ],
                                        }),
                                        (0, u.jsxs)("div", {
                                          className:
                                            "tw-flex tw-items-center tw-justify-end tw-text-right",
                                          children: [
                                            (0, P.uM)(
                                              Number(a),
                                              "string",
                                              t,
                                              "USDC" === t ? 1 : 3
                                            ),
                                            (0, N.XX)(t, "tw-ml-1 tw-size-4"),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.reserve.underlyingAsset
                              );
                            }),
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                      children: [
                        (0, P.Yr)(Number(s.mtm), 1, !0, !0),
                        (0, N.XX)("USDC", "tw-ml-1 tw-size-4"),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                      children: [
                        (0, P.Yr)(Number(s.collateral), 1, !0, !0),
                        (0, N.XX)("USDC", "tw-ml-1 tw-size-4"),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                      children: [
                        (0, P.Yr)(Number(s.valueAtRisk), 1, !0, !0),
                        (0, N.XX)("USDC", "tw-ml-1 tw-size-4"),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                      children: [
                        (0, P.uM)(Number(l), "", "USDC", 1),
                        (0, N.XX)("USDC", "tw-ml-1 tw-size-4"),
                      ],
                    }),
                    (0, u.jsx)("div", {
                      className:
                        "tw-absolute tw-right-0 tw-top-28 tw-flex tw-items-center tw-justify-end tw-text-right",
                      children: (0, u.jsx)(R(), {
                        title: "learn more",
                        href: "/dashboard/margin/reserve",
                        className: b()(
                          L().btn,
                          L()["btn--sm"],
                          L()["btn--outline"],
                          "tw-px-5"
                        ),
                        children: "Reserve",
                      }),
                    }),
                  ],
                }),
                (0, u.jsx)("div", {
                  className:
                    "tw-grid tw-grid-cols-[580px_100px_165px_130px_230px_auto]",
                  children: (0, u.jsx)("div", {
                    className:
                      "tw-flex tw-w-full tw-flex-col tw-divide-y tw-divide-ithaca-white-10",
                    children: (0, u.jsxs)("div", {
                      className:
                        "tw-grid tw-w-full tw-grid-cols-[70px_96px_80px_145px] tw-items-center tw-gap-7 tw-py-2 tw-text-end",
                      children: [
                        (0, u.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-gap-2 tw-font-medium",
                          children: [
                            (0, N.XX)("ETH", "tw-size-[1.1rem]"),
                            "ETH",
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className:
                            "tw-flex tw-items-center tw-justify-end tw-text-right",
                          children: [
                            (0, P.uM)(
                              Number(null == a ? void 0 : a.formatted),
                              "string",
                              "ETH",
                              3
                            ),
                            (0, N.XX)("ETH", "tw-ml-1 tw-size-4"),
                          ],
                        }),
                        (0, u.jsx)("div", {}),
                        (0, u.jsx)("div", {
                          className: "tw-flex tw-gap-2",
                          children: (0, u.jsx)(I.Z, {
                            onClick: () => {
                              m(!0), c(x);
                            },
                            variant: "outline",
                            className: "tw-w-full tw-flex-grow tw-px-4",
                            size: "sm",
                            role: "button",
                            title: "Wrap & Lend",
                            children: "Wrap & Lend",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                n &&
                  o &&
                  (0, u.jsx)(en, {
                    isOpen: d,
                    setIsOpen: m,
                    user: { ...n, userReservesData: p },
                    reserveData: o,
                    setReserveData: c,
                  }),
                n &&
                  o &&
                  (0, u.jsx)(es, {
                    isOpen: w,
                    setIsOpen: h,
                    user: { ...n, userReservesData: p },
                    reserveData: o,
                    setReserveData: c,
                  }),
              ],
            });
          };
        let el = B.forwardRef(function (e, t) {
          let { title: a, titleId: r, ...n } = e;
          return B.createElement(
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
              n
            ),
            a ? B.createElement("title", { id: r }, a) : null,
            B.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            })
          );
        });
        var eo = a(43529);
        ((s = c || (c = {})).NO_AMOUNT = "NO_AMOUNT"),
          (s.UNSAFE_HEALTH_FACTOR = "UNSAFE_HEALTH_FACTOR"),
          (s.NOT_ENOUGH_LIQUIDITY = "NOT_ENOUGH_LIQUIDITY"),
          (s.BORROWING_DISABLED = "BORROWING_DISABLED"),
          (s.WRONG_NETWORK = "WRONG_NETWORK"),
          (s.READY_TO_BORROW = "READY_TO_BORROW");
        var ec = function (e) {
            let {
                isOpen: t,
                setIsOpen: a,
                user: r,
                reserveData: n,
                setReserveData: s,
              } = e,
              {
                reserve: { underlyingAsset: i, symbol: l, decimals: o },
                totalBorrows: c,
              } = n,
              d = (0, B.useMemo)(() => (0, H.b)().id, []),
              { ithacaSDK: m } = (0, y.qr)(),
              { marketReferencePriceInUsd: w } = (0,
              D.useMarginLoansDataContext)(),
              { showToast: h, showErrorToast: p } = (0, Y.Z)(),
              x = (0, Z.t)({ chainId: d }),
              { data: f } = (0, q.p)(),
              { healthFactorValue: v } = M(),
              [g, b] = (0, B.useState)(""),
              [_, T] = (0, B.useState)("NO_AMOUNT"),
              [j, A] = (0, B.useState)(!1),
              [E, C] = (0, B.useState)(v),
              [S, O] = (0, B.useState)(!1),
              R = () => {
                b(""), a(!1), s(void 0);
              },
              k = (e) => {
                let t = (0, P.Dg)(e);
                b(t);
                let a = (0, V.hE)((0, P.E5)(Number(t)) ? 0 : t)
                    .multipliedBy(
                      n.reserve.formattedPriceInMarketReferenceCurrency
                    )
                    .multipliedBy(w)
                    .shiftedBy(-X.$3),
                  s = (0, z.L1)({
                    collateralBalanceMarketReferenceCurrency:
                      r.totalCollateralUSD,
                    borrowBalanceMarketReferenceCurrency: (0, V.hE)(
                      r.totalBorrowsUSD
                    ).plus(a),
                    currentLiquidationThreshold: r.currentLiquidationThreshold,
                  }).toString(10);
                C(s), L(n, t, s);
              },
              L = async (e, t, a) => {
                if (!x || !f) return;
                let r = (0, J.v)(t, o);
                r === BigInt(0)
                  ? T("NO_AMOUNT")
                  : 1.2 > Number(a)
                  ? T("UNSAFE_HEALTH_FACTOR")
                  : r > BigInt(e.reserve.availableLiquidity)
                  ? T("NOT_ENOUGH_LIQUIDITY")
                  : e.reserve.borrowingEnabled
                  ? f.chain.id !== d
                    ? T("WRONG_NETWORK")
                    : T("READY_TO_BORROW")
                  : T("BORROWING_DISABLED");
              },
              $ = () => {
                switch (_) {
                  case "NO_AMOUNT":
                    return "Enter amount to borrow";
                  case "UNSAFE_HEALTH_FACTOR":
                    return "Health factor too low";
                  case "NOT_ENOUGH_LIQUIDITY":
                    return "Insufficient liquidity";
                  case "BORROWING_DISABLED":
                    return "Borrowing disabled";
                  case "WRONG_NETWORK":
                    return "Switch network";
                  case "READY_TO_BORROW":
                    return "Borrow";
                  default:
                    return "Invalid Config";
                }
              },
              Q = (e) => async () => {
                try {
                  await e.switchChain({ id: d });
                } catch (e) {
                  p({ title: "Failed to switch network", message: e.message });
                }
              },
              ee = (e) => async () => {
                try {
                  A(!0);
                  let t = await m.marginLending.borrow(
                    i,
                    (0, J.v)(g, o),
                    BigInt(2)
                  );
                  await e.waitForTransactionReceipt({ hash: t }),
                    h({
                      title: "Borrow successful",
                      message: "Successfully borrowed "
                        .concat(g, " ")
                        .concat(n.reserve.symbol),
                      type: "success",
                    }),
                    R();
                } catch (e) {
                  h({
                    title: "Rejected Request",
                    message: "User rejected the request",
                    type: "error",
                  });
                } finally {
                  A(!1);
                }
              };
            return (
              (0, B.useEffect)(() => {
                f && L(n, g, E);
              }, [null == f ? void 0 : f.chain.id]),
              (0, u.jsxs)(U.default, {
                className: "tw-text-xs tw-text-ithaca-white-60",
                title: (0, u.jsxs)("div", {
                  className: "tw-flex tw-flex-wrap tw-items-center tw-gap-2",
                  children: ["Borrow ", (0, N.XX)(l, "tw-size-6"), " ", l],
                }),
                isOpen: t,
                onCloseModal: R,
                isLoading: j,
                hideFooter: !0,
                children: [
                  (0, u.jsxs)("div", {
                    className: "tw-flex tw-items-end tw-justify-between",
                    children: [
                      (0, u.jsx)(G.Z, {
                        label: "Amount",
                        options: r.userReservesData.map((e) => {
                          let { reserve: t } = e;
                          return { name: t.symbol, value: t.underlyingAsset };
                        }),
                        value: {
                          name: n.reserve.symbol,
                          value: n.underlyingAsset,
                        },
                        onChange: (e, t) => {
                          let a = r.userReservesData.find((e) => {
                            let { reserve: a } = e;
                            return (
                              a.symbol === t.name &&
                              a.underlyingAsset === t.value
                            );
                          });
                          a && (s(a), L(a, g, E));
                        },
                        iconStart: (0, N.XX)(l),
                      }),
                      (0, u.jsx)("div", {
                        className: "tw-flex tw-flex-col tw-items-end tw-gap-2",
                        children: (0, u.jsx)("div", {
                          className: "tw-flex tw-items-baseline tw-gap-2",
                          children: (0, u.jsx)(K.Z, {
                            value: g,
                            onChange: (e) => {
                              let { target: t } = e;
                              return k(t.value);
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, u.jsx)(F, {
                    reserveData: n,
                    newHealthFactor: E,
                    children: (0, u.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2",
                      children: [
                        (0, u.jsx)("span", { children: "Debt" }),
                        (0, u.jsxs)("div", {
                          className: "tw-inline-flex tw-items-center tw-gap-1",
                          children: [
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                            (0, u.jsx)("div", {
                              className: "tw-w-4 tw-shrink-0",
                              children: (0, u.jsx)(er.Z, {
                                className: "tw-text-white",
                              }),
                            }),
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c) +
                                      ((0, P.E5)(Number(g)) ? 0 : Number(g)),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, u.jsxs)("div", {
                    className:
                      "tw-flex tw-items-center tw-gap-2 tw-pr-4 tw-pt-4 tw-text-[#B5B5F8]",
                    children: [
                      (0, u.jsx)(el, { className: "tw-size-5" }),
                      (0, u.jsx)("span", {
                        children:
                          "Borrowing this amount will reduce your health factor and increase risk of liquidation.",
                      }),
                    ],
                  }),
                  (0, u.jsx)(eo.T, {
                    className: "tw-my-5",
                    label: "I acknowledge the risks involved",
                    checked: S,
                    onChange: () => O(!S),
                  }),
                  (0, u.jsx)("div", {
                    className: "!tw-mb-0 tw-space-y-2 tw-pb-0",
                    children: (0, u.jsx)(I.Z, {
                      disabled: !(() => {
                        if (!S) return !1;
                        switch (_) {
                          case "NO_AMOUNT":
                          case "UNSAFE_HEALTH_FACTOR":
                          case "NOT_ENOUGH_LIQUIDITY":
                          case "BORROWING_DISABLED":
                          default:
                            return !1;
                          case "WRONG_NETWORK":
                          case "READY_TO_BORROW":
                            return !0;
                        }
                      })(),
                      title: $(),
                      variant: "outline",
                      className: "tw-flex tw-w-full hover:!tw-bg-none",
                      onClick: (() => {
                        if (!f) return;
                        let e = f.extend(ea.I);
                        switch (_) {
                          case "WRONG_NETWORK":
                            return Q(e);
                          case "READY_TO_BORROW":
                            return ee(e);
                        }
                      })(),
                      children: j ? (0, u.jsx)(W.Z, { type: "sm" }) : $(),
                    }),
                  }),
                ],
              })
            );
          },
          ed = a(70794);
        ((i = d || (d = {})).NO_AMOUNT = "NO_AMOUNT"),
          (i.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE"),
          (i.AMOUNT_TOO_HIGH = "AMOUNT_TOO_HIGH"),
          (i.RESERVE_FROZEN = "RESERVE_FROZEN"),
          (i.WRONG_NETWORK = "WRONG_NETWORK"),
          (i.INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE"),
          (i.READY_TO_REPAY = "READY_TO_REPAY");
        var eu = function (e) {
            let {
                isOpen: t,
                setIsOpen: a,
                user: r,
                reserveData: n,
                setReserveData: s,
              } = e,
              {
                reserve: { underlyingAsset: i, symbol: l, decimals: o },
                totalBorrows: c,
              } = n,
              d = (0, B.useMemo)(() => (0, H.b)().id, []),
              { ithacaSDK: m, systemInfo: w } = (0, y.qr)(),
              { collateralSummary: h } = (0, $.F)(),
              { marketReferencePriceInUsd: p } = (0,
              D.useMarginLoansDataContext)(),
              { showToast: x, showErrorToast: f } = (0, Y.Z)(),
              v = (0, Z.t)({ chainId: d }),
              { data: g } = (0, q.p)(),
              { healthFactorValue: b } = M(),
              [_, T] = (0, B.useState)(""),
              [j, A] = (0, B.useState)("NO_AMOUNT"),
              [E, C] = (0, B.useState)(!1),
              [S, O] = (0, B.useState)(b),
              R = () => {
                T(""), a(!1), s(void 0);
              },
              k = (e) => {
                let t = (0, P.Dg)(e);
                if ((T(t), Number(r.totalBorrowsUSD) > 0)) {
                  let e = (0, V.hE)(
                    (0, P.E5)(Number(t))
                      ? 0
                      : Math.min(Number(t), Number(n.totalBorrows))
                  )
                    .multipliedBy(
                      n.reserve.formattedPriceInMarketReferenceCurrency
                    )
                    .multipliedBy(p)
                    .shiftedBy(-X.$3);
                  O(
                    (0, z.L1)({
                      collateralBalanceMarketReferenceCurrency:
                        r.totalCollateralUSD,
                      borrowBalanceMarketReferenceCurrency: (0, V.hE)(
                        r.totalBorrowsUSD
                      ).minus(e),
                      currentLiquidationThreshold:
                        r.currentLiquidationThreshold,
                    }).toString(10)
                  );
                }
                L(n, t);
              },
              L = async (e, t) => {
                if (!v || !g) return;
                let a = (0, J.v)(t, o),
                  r = (0, J.v)(h[e.reserve.symbol].walletBalance, o),
                  n = await v.readContract({
                    address: e.underlyingAsset,
                    abi: et.Wo,
                    functionName: "allowance",
                    args: [g.account.address, w.lendingPoolAddress],
                  }),
                  s = (0, V.hE)(c)
                    .multipliedBy("1.0025")
                    .decimalPlaces(o, ed.Z.ROUND_UP);
                a === BigInt(0)
                  ? A("NO_AMOUNT")
                  : a > r
                  ? A("INSUFFICIENT_BALANCE")
                  : (0, V.hE)(t).gt(s)
                  ? A("AMOUNT_TOO_HIGH")
                  : e.reserve.isFrozen
                  ? A("RESERVE_FROZEN")
                  : g.chain.id !== d
                  ? A("WRONG_NETWORK")
                  : a > n
                  ? A("INSUFFICIENT_ALLOWANCE")
                  : A("READY_TO_REPAY");
              },
              Q = () => {
                switch (j) {
                  case "NO_AMOUNT":
                    return "Enter amount to repay";
                  case "AMOUNT_TOO_HIGH":
                    return "Amount too high";
                  case "RESERVE_FROZEN":
                    return "Reserve frozen";
                  case "INSUFFICIENT_BALANCE":
                    return "Insufficient balance";
                  case "WRONG_NETWORK":
                    return "Switch network";
                  case "INSUFFICIENT_ALLOWANCE":
                    return "Approve";
                  case "READY_TO_REPAY":
                    return "Repay";
                  default:
                    return "Invalid Config";
                }
              },
              ee = (e) => async () => {
                try {
                  await e.switchChain({ id: d });
                } catch (e) {
                  f({ title: "Failed to switch network", message: e.message });
                }
              },
              en = (e) => async () => {
                try {
                  C(!0);
                  let t = await e.writeContract({
                    address: n.underlyingAsset,
                    abi: et.Wo,
                    functionName: "approve",
                    args: [w.lendingPoolAddress, (0, J.v)(_, o)],
                  });
                  await e.waitForTransactionReceipt({ hash: t }),
                    x({
                      title: "Approved",
                      message:
                        "Approved the lending pool contract to spend the tokens",
                      type: "success",
                    }),
                    await L(n, _);
                } catch (e) {
                  f({
                    title: "Rejected Request",
                    message: "User rejected the request",
                  });
                } finally {
                  C(!1);
                }
              },
              es = (e) => async () => {
                try {
                  C(!0);
                  let t = await m.marginLending.repay(
                    i,
                    (0, J.v)(_, o),
                    BigInt(2)
                  );
                  await e.waitForTransactionReceipt({ hash: t }),
                    x({
                      title: "Repay successful",
                      message: "Successfully repaid "
                        .concat(_, " ")
                        .concat(n.reserve.symbol),
                      type: "success",
                    }),
                    R();
                } catch (e) {
                  x({
                    title: "Rejected Request",
                    message: "User rejected the request",
                    type: "error",
                  });
                } finally {
                  C(!1);
                }
              };
            return (
              (0, B.useEffect)(() => {
                g && L(n, _);
              }, [null == g ? void 0 : g.chain.id]),
              (0, u.jsxs)(U.default, {
                className: "tw-text-xs tw-text-ithaca-white-60",
                title: (0, u.jsxs)("div", {
                  className: "tw-flex tw-flex-wrap tw-items-center tw-gap-2",
                  children: ["Repay ", (0, N.XX)(l, "tw-size-6"), " ", l],
                }),
                isOpen: t,
                onCloseModal: R,
                isLoading: E,
                hideFooter: !0,
                children: [
                  (0, u.jsxs)("div", {
                    className: "tw-flex tw-items-start tw-justify-between",
                    children: [
                      (0, u.jsx)(G.Z, {
                        label: "Amount",
                        options: r.userReservesData.map((e) => {
                          let { reserve: t } = e;
                          return { name: t.symbol, value: t.underlyingAsset };
                        }),
                        value: {
                          name: n.reserve.symbol,
                          value: n.underlyingAsset,
                        },
                        onChange: (e, t) => {
                          let a = r.userReservesData.find((e) => {
                            let { reserve: a } = e;
                            return (
                              a.symbol === t.name &&
                              a.underlyingAsset === t.value
                            );
                          });
                          a && (s(a), L(a, _));
                        },
                        iconStart: (0, N.XX)(l),
                      }),
                      (0, u.jsxs)("div", {
                        className:
                          "tw-mt-5 tw-flex tw-flex-col tw-items-end tw-gap-2",
                        children: [
                          (0, u.jsxs)("div", {
                            className: "tw-flex tw-items-baseline tw-gap-2",
                            children: [
                              (0, u.jsx)(K.Z, {
                                value: _,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return k(t.value);
                                },
                              }),
                              (0, u.jsx)(I.Z, {
                                title: "All",
                                variant: "secondary",
                                size: "sm",
                                className: "tw-px-4",
                                onClick: () => k(c),
                                children: "All",
                              }),
                            ],
                          }),
                          (0, u.jsxs)("span", {
                            className:
                              "tw-inline-flex tw-items-center tw-gap-1",
                            children: [
                              "Wallet balance:",
                              " ",
                              (0, P.uM)(
                                Number(h[l].walletBalance),
                                "string",
                                l,
                                "USDC" === l ? 1 : 3
                              ),
                              " ",
                              (0, N.XX)(l),
                              " ",
                              l,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, u.jsx)(F, {
                    reserveData: n,
                    newHealthFactor: S,
                    children: (0, u.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-2",
                      children: [
                        (0, u.jsx)("span", {
                          children: "Debt After Repayment",
                        }),
                        (0, u.jsxs)("div", {
                          className: "tw-inline-flex tw-items-center tw-gap-1",
                          children: [
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                            (0, u.jsx)("div", {
                              className: "tw-w-4 tw-shrink-0",
                              children: (0, u.jsx)(er.Z, {
                                className: "tw-text-white",
                              }),
                            }),
                            (0, u.jsxs)("div", {
                              className:
                                "tw-inline-flex tw-items-center tw-gap-1",
                              children: [
                                (0, u.jsx)("span", {
                                  className: "tw-text-white",
                                  children: (0, P.uM)(
                                    Number(c) -
                                      ((0, P.E5)(Number(_))
                                        ? 0
                                        : Math.min(
                                            Number(_),
                                            Number(n.totalBorrows)
                                          )),
                                    "string",
                                    l,
                                    "USDC" === l ? 1 : 3,
                                    void 0,
                                    !0
                                  ),
                                }),
                                (0, N.XX)(l),
                                " ",
                                l,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, u.jsxs)("div", {
                    className:
                      "tw-mb-5 tw-flex tw-items-center tw-justify-end tw-gap-1",
                    children: [
                      "Wallet balance:",
                      " ",
                      (0, P.uM)(
                        Number(h[l].walletBalance),
                        "string",
                        l,
                        "USDC" === l ? 1 : 3
                      ),
                      " ",
                      (0, N.XX)(l),
                      " ",
                      l,
                    ],
                  }),
                  (0, u.jsx)("div", {
                    className: "!tw-mb-0 tw-space-y-2 tw-pb-0",
                    children: (0, u.jsx)(I.Z, {
                      disabled: !(() => {
                        switch (j) {
                          case "NO_AMOUNT":
                          case "INSUFFICIENT_BALANCE":
                          default:
                            return !1;
                          case "WRONG_NETWORK":
                          case "INSUFFICIENT_ALLOWANCE":
                          case "READY_TO_REPAY":
                            return !0;
                        }
                      })(),
                      title: Q(),
                      variant: "outline",
                      className: "tw-flex tw-w-full hover:!tw-bg-none",
                      onClick: (() => {
                        if (!g) return;
                        let e = g.extend(ea.I);
                        switch (j) {
                          case "WRONG_NETWORK":
                            return ee(e);
                          case "INSUFFICIENT_ALLOWANCE":
                            return en(e);
                          case "READY_TO_REPAY":
                            return es(e);
                        }
                      })(),
                      children: E ? (0, u.jsx)(W.Z, { type: "sm" }) : Q(),
                    }),
                  }),
                ],
              })
            );
          },
          em = a(15229),
          ew = a(81989),
          eh = () => {
            var e, t;
            let { isConnected: a } = (0, ew.Pk)(),
              { isAuthenticated: r, underlyingCurrency: n } = (0, y.qr)(),
              { user: s } = (0, D.useMarginLoansDataContext)(),
              { displayFormulas: i, healthFactorValue: l } = M(),
              [o, c] = (0, B.useState)(),
              [d, m] = (0, B.useState)(!1),
              [w, h] = (0, B.useState)(!1);
            return (0, u.jsxs)("div", {
              className: b()("tw-overflow-x-auto", {
                "tw-opacity-0": !r || !a,
              }),
              children: [
                (0, u.jsx)("div", {
                  className:
                    "tw-grid tw-w-full tw-grid-cols-[70px_96px_80px_144px_96px_204px_156px_156px_96px] tw-gap-7 tw-text-end tw-text-xs tw-text-ithaca-white-60",
                  children: S.e7.map((e, t) =>
                    (0, u.jsx)(B.Fragment, { children: A(e, n) }, t)
                  ),
                }),
                (0, u.jsxs)("div", {
                  className:
                    "tw-grid tw-grid-cols-[500px_96px_auto_100px_156px_120px] tw-gap-5",
                  children: [
                    (0, u.jsx)("div", {
                      className:
                        "tw-flex tw-w-full tw-flex-col tw-divide-y tw-divide-ithaca-white-10",
                      children:
                        null == s
                          ? void 0
                          : null === (e = s.userReservesData) || void 0 === e
                          ? void 0
                          : e.map((e) => {
                              let {
                                reserve: {
                                  underlyingAsset: t,
                                  symbol: a,
                                  variableBorrowAPY: r,
                                  decimals: n,
                                },
                                scaledVariableDebt: s,
                              } = e;
                              return (0, u.jsxs)(
                                "div",
                                {
                                  className:
                                    "tw-grid tw-grid-cols-[70px_96px_80px_144px] tw-items-center tw-gap-7 tw-py-2 tw-text-end",
                                  children: [
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-2 tw-font-medium",
                                      children: [(0, N.XX)(a, "tw-size-6"), a],
                                    }),
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-justify-end tw-text-right",
                                      children: [
                                        (0, P.uM)(
                                          Number((0, em.b)(BigInt(s), n)),
                                          "string",
                                          a,
                                          "USDC" === a ? 1 : 3
                                        ),
                                        (0, N.XX)(a, "tw-ml-1 tw-size-4"),
                                      ],
                                    }),
                                    (0, u.jsxs)("div", {
                                      children: [
                                        (100 * Number(r)).toFixed(2),
                                        "%",
                                      ],
                                    }),
                                    (0, u.jsxs)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-2",
                                      children: [
                                        (0, u.jsx)(I.Z, {
                                          title: "Withdraw",
                                          size: "sm",
                                          role: "button",
                                          className: "tw-w-full",
                                          onClick: () => {
                                            c(e), m(!0);
                                          },
                                          children: "Borrow",
                                        }),
                                        (0, u.jsx)(I.Z, {
                                          className: "tw-w-full",
                                          size: "sm",
                                          role: "button",
                                          variant: "secondary",
                                          title: "Lend",
                                          onClick: () => {
                                            c(e), h(!0);
                                          },
                                          children: "Repay",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                    (0, u.jsxs)("div", {
                      className:
                        "tw-col-span-2 tw-flex tw-items-center tw-justify-start tw-gap-2",
                      children: [
                        "-1" !== l
                          ? (0, u.jsx)("span", {
                              className: "tw-text-md tw-text-ithaca-orange",
                              children: Number(l).toFixed(2),
                            })
                          : (0, u.jsx)("span", {
                              className: "tw-text-xl tw-text-ithaca-orange",
                              children: "∞",
                            }),
                        (0, u.jsx)("span", { children: "=" }),
                        (0, u.jsxs)("div", {
                          className:
                            "tw-flex tw-min-w-48 tw-flex-col tw-divide-y [&>span]:tw-py-1",
                          children: [
                            (0, u.jsx)("span", {
                              className:
                                "tw-flex-col tw-text-center tw-text-xs",
                              children: i.healthFactorNumeratorFormula,
                            }),
                            (0, u.jsx)("span", {
                              className:
                                "tw-justify-center tw-text-center tw-text-xs",
                              children: i.healthFactorDenominatorFormula,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsx)("div", {
                      className: "tw-flex tw-h-full tw-flex-col",
                      children:
                        null == s
                          ? void 0
                          : null === (t = s.userReservesData) || void 0 === t
                          ? void 0
                          : t.map((e) => {
                              let {
                                reserve: {
                                  underlyingAsset: t,
                                  formattedReserveLiquidationThreshold: a,
                                  symbol: r,
                                },
                              } = e;
                              return (0, u.jsxs)(
                                "div",
                                {
                                  className:
                                    "tw-flex tw-flex-grow tw-items-center tw-justify-end",
                                  children: [
                                    (100 * Number(a)).toFixed(2),
                                    " %",
                                    " ",
                                    (0, u.jsxs)("span", {
                                      className:
                                        "tw-ml-1 tw-flex tw-text-xxs tw-text-ithaca-white-60",
                                      children: [
                                        "(HC",
                                        (0, N.XX)(r, "!tw-size-3"),
                                        ")",
                                      ],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                    (0, u.jsx)("div", {
                      className: "tw-flex tw-items-center tw-justify-end",
                      children: (0, P.uM)(
                        Number(null == s ? void 0 : s.totalBorrowsUSD),
                        "string",
                        "USDC",
                        1
                      ),
                    }),
                  ],
                }),
                s &&
                  o &&
                  (0, u.jsx)(ec, {
                    isOpen: d,
                    setIsOpen: m,
                    user: s,
                    reserveData: o,
                    setReserveData: c,
                  }),
                s &&
                  o &&
                  (0, u.jsx)(eu, {
                    isOpen: w,
                    setIsOpen: h,
                    user: s,
                    reserveData: o,
                    setReserveData: c,
                  }),
              ],
            });
          },
          ep = () => {
            let { isConnected: e } = (0, ew.Pk)(),
              {
                networkBaseTokenPriceInUsd: t,
                networkBaseTokenPriceDecimals: a,
              } = (0, D.useMarginLoansDataContext)();
            return (0, u.jsxs)(w.Z, {
              margin: "p-desktop-30 p-mobile-16 p-16",
              children: [
                (0, u.jsxs)("div", {
                  className: "tw-relative tw-space-y-5",
                  children: [
                    (0, u.jsxs)("div", {
                      className: "tw-space-y-6",
                      children: [
                        (0, u.jsxs)("h3", {
                          className: "!tw-mb-0 tw-items-center tw-text-base",
                          children: [
                            "Collateral to Borrow Against",
                            (0, u.jsxs)("span", {
                              className:
                                "tw-ml-4 tw-text-xs tw-text-ithaca-white-60",
                              children: [
                                "ETH Oracle Price",
                                " ",
                                (0, u.jsxs)("span", {
                                  className:
                                    "tw-ml-1 tw-items-center tw-text-sm tw-text-white",
                                  children: [
                                    "$",
                                    (0, P.uM)(
                                      Number((0, em.b)(BigInt(t), a)),
                                      "string",
                                      "USDC",
                                      0,
                                      !0,
                                      !0
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, u.jsx)(ei, {}),
                      ],
                    }),
                    (0, u.jsxs)("div", {
                      className: "tw-space-y-6",
                      children: [
                        (0, u.jsxs)("h3", {
                          className:
                            "!tw-mb-0 tw-inline-flex tw-items-baseline tw-gap-1 tw-text-base",
                          children: [
                            "Borrowing Against Collateral",
                            (0, u.jsx)(p.Z, {
                              title: (0, u.jsx)(x.Z, {}),
                              panelClassName:
                                "tw-border-none tw-bg-none !tw-bg-[#202631] tw-p-5 tw-text-white tw-backdrop-blur-none -tw-translate-y-[144px] tw-translate-x-[108px]",
                              children: (0, u.jsx)(C, {}),
                            }),
                          ],
                        }),
                        (0, u.jsx)(eh, {}),
                      ],
                    }),
                  ],
                }),
                !e && (0, u.jsx)(h.Z, {}),
              ],
            });
          },
          ex = a(92505),
          ef = a(84624),
          ev = a(6316),
          ey = a(99205),
          eg = a(38606),
          eb = a(55975),
          eN = a(85292),
          e_ = a(20314),
          eT = a(27888);
        let ej = [
          {
            id: "liveOrders",
            label: "Live Orders",
            content: (0, u.jsx)(ef.default, {}),
          },
          {
            id: "positions",
            label: "Positions",
            content: (0, u.jsx)(ey.default, {}),
          },
          {
            id: "tradeHistory",
            label: "Trade History",
            content: (0, u.jsx)(ev.default, {}),
          },
          {
            id: "settlements",
            label: "Settlements",
            content: (0, u.jsx)(eg.default, {}),
          },
          { id: "balanceHistory", label: "Balance History", content: null },
        ];
        var eA = () => {
          let [e, t] = (0, B.useState)(ej[0].id);
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(ex.Z, {}),
              (0, u.jsx)(eT.Z, {
                children: (0, u.jsxs)(eN.Z, {
                  children: [
                    (0, u.jsx)(m.Z, { title: "Dashboard" }),
                    (0, u.jsx)(e_.Z, {}),
                    (0, u.jsx)(ep, {}),
                    (0, u.jsx)(w.Z, {
                      margin: "p-desktop-30 mt-15 p-tablet-16 p-16 relative",
                      children: (0, u.jsx)(eb.Z, {
                        tabs: ej,
                        activeTab: e,
                        onChange: (e) => t(e),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
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
      89564: function (e) {
        e.exports = { container: "CheckBox_container__QFNwK" };
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
      74398: function (e) {
        e.exports = {
          dateRangePickerContainer:
            "DatePicker_dateRangePickerContainer__stI1A",
          dateSinglePickerContainer:
            "DatePicker_dateSinglePickerContainer__VN_ZF",
          dateInput: "DatePicker_dateInput__FwZu0",
          dateBlock: "DatePicker_dateBlock__l1zNo",
          dateRangeContainer: "DatePicker_dateRangeContainer__N4Lbz",
          subContainer: "DatePicker_subContainer__98gmv",
          datePicker: "DatePicker_datePicker__B5xYT",
          buttonContainer: "DatePicker_buttonContainer__kCB9p",
          cancelButton: "DatePicker_cancelButton__sly0A",
          applyButton: "DatePicker_applyButton__UR6yS",
          isHidden: "DatePicker_isHidden__q79mx",
        };
      },
      50103: function (e) {
        e.exports = { container: "DisconnectedWallet_container__6oWtX" };
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
      25978: function (e) {
        e.exports = { title: "headerWithInformation_title__5jA0Y" };
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
      88601: function (e) {
        e.exports = {
          tncModal: "ModalAcknowledgeTerms_tncModal__J3WR9",
          acknowledgeTerms: "ModalAcknowledgeTerms_acknowledgeTerms__LlIvS",
          title: "ModalAcknowledgeTerms_title__hLKaQ",
          checkBox: "ModalAcknowledgeTerms_checkBox__JnYEN",
          labelCheckBox: "ModalAcknowledgeTerms_labelCheckBox__w97qi",
          buttonContainer: "ModalAcknowledgeTerms_buttonContainer__gPUJP",
          button: "ModalAcknowledgeTerms_button__TqfE4",
          primaryButton: "ModalAcknowledgeTerms_primaryButton__6B9QW",
        };
      },
      3955: function (e) {
        e.exports = {
          summary: "Summary_summary__bWQxX",
          row: "Summary_row__B_xlY",
          label: "Summary_label__ynVMj",
          value: "Summary_value__fb_v_",
          currency: "Summary_currency__UEQPO",
        };
      },
      45303: function (e) {
        e.exports = {
          PopoverContent: "TutorialPopover_PopoverContent__cQHL1",
          large: "TutorialPopover_large__OOfi4",
          slideDownAndFade: "TutorialPopover_slideDownAndFade__7HZjG",
          slideLeftAndFade: "TutorialPopover_slideLeftAndFade__oQPHB",
          slideUpAndFade: "TutorialPopover_slideUpAndFade__0kAaz",
          slideRightAndFade: "TutorialPopover_slideRightAndFade__U4YHn",
          PopoverArrow: "TutorialPopover_PopoverArrow__ZHtnZ",
          Fieldset: "TutorialPopover_Fieldset__vxgb_",
          message: "TutorialPopover_message__pokMA",
          title: "TutorialPopover_title__UxmRk",
          skipButton: "TutorialPopover_skipButton__3ytdX",
        };
      },
      98971: function (e) {
        e.exports = {
          connectedWallet: "Wallet_connectedWallet__AfL_g",
          displayName: "Wallet_displayName__8x1Uv",
          chevron: "Wallet_chevron__3LmH4",
          connectWallet: "Wallet_connectWallet___ZxE_",
          container: "Wallet_container__kD6Y7",
          termsContainer: "Wallet_termsContainer__IVZGR",
          wrongNetwork: "Wallet_wrongNetwork__VtEHv",
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
      96752: function (e, t, a) {
        "use strict";
        a.d(t, {
          P: function () {
            return u;
          },
        });
        var r = a(67294),
          n = a(38213),
          s = a(83619),
          i = a(22944),
          l = a(18419),
          o = a(65448),
          c = a(14872);
        let d = (0, s.yV)(function (e, t) {
            var a;
            let n = (0, c.B)(),
              { disabled: d = n || !1, autoFocus: u = !1, ...m } = e,
              { isFocusVisible: w, focusProps: h } = (0, i.F)({ autoFocus: u }),
              { isHovered: p, hoverProps: x } = (0, l.X)({ isDisabled: d }),
              { pressed: f, pressProps: v } = (0, o.x)({ disabled: d }),
              y = (0, s.dG)(
                {
                  ref: t,
                  type: null != (a = m.type) ? a : "button",
                  disabled: d || void 0,
                  autoFocus: u,
                },
                h,
                x,
                v
              ),
              g = (0, r.useMemo)(
                () => ({
                  disabled: d,
                  hover: p,
                  focus: w,
                  active: f,
                  autofocus: u,
                }),
                [d, p, w, f, u]
              );
            return (0, s.L6)()({
              ourProps: y,
              theirProps: m,
              slot: g,
              defaultTag: "button",
              name: "Button",
            });
          }),
          u = (0, s.yV)(function (e, t) {
            let a = (0, n.$)();
            return r.createElement(d, {
              ref: t,
              ...(0, s.dG)({ onClick: a }, e),
            });
          });
      },
      14872: function (e, t, a) {
        "use strict";
        a.d(t, {
          B: function () {
            return s;
          },
        });
        var r = a(67294);
        let n = (0, r.createContext)(void 0);
        function s() {
          return (0, r.useContext)(n);
        }
      },
      70202: function (e, t, a) {
        "use strict";
        var r = a(67294);
        let n = r.forwardRef(function (e, t) {
          let { title: a, titleId: n, ...s } = e;
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
                "aria-labelledby": n,
              },
              s
            ),
            a ? r.createElement("title", { id: n }, a) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
            })
          );
        });
        t.Z = n;
      },
      49632: function (e, t, a) {
        "use strict";
        var r = a(67294);
        let n = r.forwardRef(function (e, t) {
          let { title: a, titleId: n, ...s } = e;
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
                "aria-labelledby": n,
              },
              s
            ),
            a ? r.createElement("title", { id: n }, a) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            })
          );
        });
        t.Z = n;
      },
      48120: function (e, t, a) {
        "use strict";
        a.d(t, {
          v: function () {
            return s;
          },
        });
        var r = a(36117);
        class n extends r.G {
          constructor({ value: e }) {
            super(`Number \`${e}\` is not a valid decimal number.`, {
              name: "InvalidDecimalNumberError",
            });
          }
        }
        function s(e, t) {
          if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new n({ value: e });
          let [a, r = "0"] = e.split("."),
            s = a.startsWith("-");
          if ((s && (a = a.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
            1 === Math.round(Number(`.${r}`)) && (a = `${BigInt(a) + 1n}`),
              (r = "");
          else if (r.length > t) {
            let [e, n, s] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
              i = Math.round(Number(`${n}.${s}`));
            (r =
              i > 9
                ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
                : `${e}${i}`).length > t &&
              ((r = r.slice(1)), (a = `${BigInt(a) + 1n}`)),
              (r = r.slice(0, t));
          } else r = r.padEnd(t, "0");
          return BigInt(`${s ? "-" : ""}${a}${r}`);
        }
      },
      89810: function (e, t, a) {
        "use strict";
        a.d(t, {
          u: function () {
            return o;
          },
        });
        var r = a(37003),
          n = a(36100),
          s = a(82451),
          i = a(82002),
          l = a(37122);
        function o(e = {}) {
          let { abi: t, address: a, functionName: o, query: c = {} } = e,
            d = e.code,
            u = (0, l.Z)(e),
            m = (0, i.x)({ config: u }),
            w = (function (e, t = {}) {
              return {
                async queryFn({ queryKey: a }) {
                  let n = t.abi;
                  if (!n) throw Error("abi is required");
                  let { functionName: s, scopeKey: i, ...l } = a[1],
                    o = (() => {
                      let e = a[1];
                      if (e.address) return { address: e.address };
                      if (e.code) return { code: e.code };
                      throw Error("address or code is required");
                    })();
                  if (!s) throw Error("functionName is required");
                  return (0, r.L)(e, {
                    abi: n,
                    functionName: s,
                    args: l.args,
                    ...o,
                    ...l,
                  });
                },
                queryKey: (function (e = {}) {
                  let { abi: t, ...a } = e;
                  return ["readContract", (0, n.OP)(a)];
                })(t),
              };
            })(u, { ...e, chainId: e.chainId ?? m }),
            h = !!((a || d) && t && o && (c.enabled ?? !0));
          return (0, s.aM)({
            ...c,
            ...w,
            enabled: h,
            structuralSharing: c.structuralSharing ?? n.if,
          });
        }
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 6342, 7558, 3068, 9261, 4442, 5675, 7410, 1371, 9342, 2592,
          4782, 6322, 9773, 1664, 9849, 8026, 7461, 52, 7972, 497, 8776, 6746,
          7702, 5656, 4115, 8755, 3797, 3853, 9205, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 93613));
        }
      ),
        (_N_E = e.O());
    },
  ]);
