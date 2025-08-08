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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "7a451432-f269-4773-837a-0fa6dd5fc04a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-7a451432-f269-4773-837a-0fa6dd5fc04a"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7581],
  {
    75370: function (e, r, t) {
      t.d(r, {
        DA: function () {
          return d;
        },
      });
      var a = t(70794),
        n = t(43681),
        i = t(91553),
        l = t(67277);
      function o({
        amount: e,
        currencyDecimals: r,
        priceInMarketReferenceCurrency: t,
        marketReferenceCurrencyDecimals: i,
        normalizedMarketReferencePriceInUsd: l,
      }) {
        return (0, n.hE)(e.toString())
          .multipliedBy(t)
          .multipliedBy(l)
          .dividedBy(new a.Z(1).shiftedBy(r + i))
          .toString();
      }
      var c = t(7434),
        u = t(69546),
        s = t(92328);
      function d({
        reserves: e,
        eModes: r,
        currentTimestamp: t,
        marketReferencePriceInUsd: d,
        marketReferenceCurrencyDecimals: y,
      }) {
        return e.map((e) => {
          let f = (function ({
            reserve: e,
            currentTimestamp: r,
            marketReferencePriceInUsd: t,
            marketReferenceCurrencyDecimals: d,
            eModes: y,
          }) {
            let f = (0, n.pV)(t, i.$3),
              b = (function ({ reserve: e, currentTimestamp: r }) {
                let {
                    totalDebt: t,
                    totalVariableDebt: o,
                    totalLiquidity: c,
                  } = (function (e, r) {
                    let t = (0, s._O)(
                        (0, s._O)(
                          e.totalScaledVariableDebt,
                          e.variableBorrowIndex
                        ),
                        (0, u.rD)({
                          rate: e.variableBorrowRate,
                          currentTimestamp: r,
                          lastUpdateTimestamp: e.lastUpdateTimestamp,
                        })
                      ),
                      a = t.plus(e.availableLiquidity);
                    return {
                      totalVariableDebt: t,
                      totalDebt: t,
                      totalLiquidity: a,
                    };
                  })(e, r),
                  d = c.eq(0) ? "0" : (0, n.hE)(t).dividedBy(c).toFixed(),
                  y = c.eq(0)
                    ? "0"
                    : (0, n.hE)(t).dividedBy(c.plus(e.unbacked)).toFixed(),
                  f = (0, n.Fv)(
                    (0, n.hE)(e.reserveLiquidationBonus).minus(10 ** i.ih),
                    i.ih
                  ),
                  b =
                    "0" === e.borrowCap
                      ? new a.Z(e.availableLiquidity)
                      : a.Z.min(
                          e.availableLiquidity,
                          new a.Z(e.borrowCap)
                            .shiftedBy(e.decimals)
                            .minus(t.plus(1))
                        );
                return {
                  totalDebt: t,
                  totalVariableDebt: o,
                  totalLiquidity: c,
                  borrowUsageRatio: d,
                  supplyUsageRatio: y,
                  formattedReserveLiquidationBonus: f,
                  supplyAPY: (0, l.G)({
                    rate: e.liquidityRate,
                    duration: i.E_,
                  }),
                  variableBorrowAPY: (0, l.G)({
                    rate: e.variableBorrowRate,
                    duration: i.E_,
                  }),
                  formattedAvailableLiquidity: b,
                  unborrowedLiquidity: e.availableLiquidity,
                };
              })({ reserve: e, currentTimestamp: r });
            return Object.assign(
              Object.assign(
                {},
                (function ({ reserve: e, eModes: r }) {
                  var t;
                  let a = (r) => (0, n.Fv)(r, e.decimals),
                    l = "0" !== e.debtCeiling,
                    o = l
                      ? (0, n.Fv)(
                          (0, n.hE)(e.debtCeiling).minus(
                            e.isolationModeTotalDebt
                          ),
                          e.debtCeilingDecimals
                        )
                      : "0",
                    c = r
                      ? ((t = e.originalId),
                        r
                          .reduce((e, r) => {
                            let { borrowableBitmap: a, collateralBitmap: n } =
                                r.eMode,
                              i = "1" === a[a.length - t - 1],
                              l = "1" === n[n.length - t - 1];
                            return (
                              (i || l) &&
                                e.push({
                                  id: r.id,
                                  collateralEnabled: l,
                                  borrowingEnabled: i,
                                  eMode: r.eMode,
                                }),
                              e
                            );
                          }, [])
                          .map((e) => {
                            var r;
                            return Object.assign(Object.assign({}, e), {
                              eMode: Object.assign(
                                Object.assign({}, (r = e.eMode)),
                                {
                                  formattedLtv: (0, n.Fv)(r.ltv, i.ih),
                                  formattedLiquidationThreshold: (0, n.Fv)(
                                    r.liquidationThreshold,
                                    i.ih
                                  ),
                                  formattedLiquidationBonus: (0, n.Fv)(
                                    (0, n.hE)(r.liquidationBonus).minus(
                                      10 ** i.ih
                                    ),
                                    4
                                  ),
                                }
                              ),
                            });
                          }))
                      : [];
                  return Object.assign(Object.assign({}, e), {
                    totalVariableDebt: a(e.totalVariableDebt),
                    totalLiquidity: a(e.totalLiquidity),
                    formattedAvailableLiquidity: a(e.availableLiquidity),
                    unborrowedLiquidity: a(e.unborrowedLiquidity),
                    borrowUsageRatio: e.borrowUsageRatio,
                    supplyUsageRatio: e.supplyUsageRatio,
                    totalDebt: a(e.totalDebt),
                    formattedBaseLTVasCollateral: (0, n.Fv)(
                      e.baseLTVasCollateral,
                      i.ih
                    ),
                    reserveFactor: (0, n.Fv)(e.reserveFactor, i.ih),
                    supplyAPY: (0, n.Fv)(e.supplyAPY, i.YL),
                    supplyAPR: (0, n.Fv)(e.liquidityRate, i.YL),
                    variableBorrowAPY: (0, n.Fv)(e.variableBorrowAPY, i.YL),
                    variableBorrowAPR: (0, n.Fv)(e.variableBorrowRate, i.YL),
                    formattedReserveLiquidationThreshold: (0, n.Fv)(
                      e.reserveLiquidationThreshold,
                      4
                    ),
                    formattedReserveLiquidationBonus: (0, n.Fv)(
                      (0, n.hE)(e.reserveLiquidationBonus).minus(10 ** i.ih),
                      4
                    ),
                    totalScaledVariableDebt: a(e.totalScaledVariableDebt),
                    debtCeilingUSD: l
                      ? (0, n.Fv)(e.debtCeiling, e.debtCeilingDecimals)
                      : "0",
                    isolationModeTotalDebtUSD: l
                      ? (0, n.Fv)(
                          e.isolationModeTotalDebt,
                          e.debtCeilingDecimals
                        )
                      : "0",
                    availableDebtCeilingUSD: o,
                    isIsolated: l,
                    eModes: c,
                  });
                })({
                  reserve: Object.assign(Object.assign({}, e), b),
                  eModes: y,
                })
              ),
              {
                totalLiquidityUSD: o({
                  amount: b.totalLiquidity,
                  currencyDecimals: e.decimals,
                  marketReferenceCurrencyDecimals: d,
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  normalizedMarketReferencePriceInUsd: f,
                }),
                availableLiquidityUSD: o({
                  amount: b.formattedAvailableLiquidity,
                  currencyDecimals: e.decimals,
                  marketReferenceCurrencyDecimals: d,
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  normalizedMarketReferencePriceInUsd: f,
                }),
                totalDebtUSD: o({
                  amount: b.totalDebt,
                  currencyDecimals: e.decimals,
                  marketReferenceCurrencyDecimals: d,
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  normalizedMarketReferencePriceInUsd: f,
                }),
                totalVariableDebtUSD: o({
                  amount: b.totalVariableDebt,
                  currencyDecimals: e.decimals,
                  marketReferenceCurrencyDecimals: d,
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  normalizedMarketReferencePriceInUsd: f,
                }),
                formattedPriceInMarketReferenceCurrency: (0, n.Fv)(
                  e.priceInMarketReferenceCurrency,
                  d
                ),
                priceInMarketReferenceCurrency:
                  e.priceInMarketReferenceCurrency,
                priceInUSD: o({
                  amount: new a.Z(1).shiftedBy(e.decimals),
                  currencyDecimals: e.decimals,
                  marketReferenceCurrencyDecimals: d,
                  priceInMarketReferenceCurrency:
                    e.priceInMarketReferenceCurrency,
                  normalizedMarketReferencePriceInUsd: f,
                }),
                borrowCapUSD: (0, c.$)(
                  new a.Z(e.borrowCap),
                  e.priceInMarketReferenceCurrency,
                  d
                ).toString(),
                supplyCapUSD: (0, c.$)(
                  new a.Z(e.supplyCap),
                  e.priceInMarketReferenceCurrency,
                  d
                ).toString(),
                unbackedUSD: (0, c.$)(
                  new a.Z(e.unbacked),
                  e.priceInMarketReferenceCurrency,
                  d
                ).toString(),
              }
            );
          })({
            reserve: e,
            currentTimestamp: t,
            marketReferencePriceInUsd: d,
            marketReferenceCurrencyDecimals: y,
            eModes: r,
          });
          return Object.assign(Object.assign({}, e), f);
        });
      }
    },
    7434: function (e, r, t) {
      t.d(r, {
        $: function () {
          return a;
        },
      });
      function a(e, r, t) {
        return e.multipliedBy(r).shiftedBy(-1 * t);
      }
    },
    55603: function (e, r, t) {
      t.d(r, {
        G: function () {
          return c;
        },
      });
      var a = t(43681),
        n = t(91553),
        i = t(70794),
        l = t(69546),
        o = t(7434);
      function c({
        currentTimestamp: e,
        marketReferencePriceInUsd: r,
        marketReferenceCurrencyDecimals: t,
        userReserves: c,
        formattedReserves: u,
        userEmodeCategoryId: s,
        userPositionsCollateral: d,
      }) {
        let y = (0, a.Fv)(r, n.$3),
          f = [];
        c.forEach((e) => {
          let r = u.find(
            (r) =>
              r.underlyingAsset.toLowerCase() ===
              e.underlyingAsset.toLowerCase()
          );
          r && f.push(Object.assign(Object.assign({}, e), { reserve: r }));
        });
        let b = f.map((r) =>
            (function ({
              userReserve: e,
              marketReferencePriceInUsdNormalized: r,
              marketReferenceCurrencyDecimals: t,
              currentTimestamp: n,
            }) {
              let i = e.reserve,
                { priceInMarketReferenceCurrency: o, decimals: c } = i,
                u = (0, l.CO)({
                  balance: e.scaledATokenBalance,
                  index: i.liquidityIndex,
                  rate: i.liquidityRate,
                  lastUpdateTimestamp: i.lastUpdateTimestamp,
                  currentTimestamp: n,
                }),
                { marketReferenceCurrencyBalance: s, usdBalance: d } = (0,
                l.n3)({
                  balance: u,
                  priceInMarketReferenceCurrency: o,
                  marketReferenceCurrencyDecimals: t,
                  decimals: c,
                  marketReferencePriceInUsdNormalized: r,
                }),
                { marketReferenceCurrencyBalance: y, usdBalance: f } = (0,
                l.n3)({
                  balance: e.ithacaBalance,
                  priceInMarketReferenceCurrency: o,
                  marketReferenceCurrencyDecimals: t,
                  decimals: c,
                  marketReferencePriceInUsdNormalized: r,
                }),
                b = (0, l.VO)({
                  principalBalance: e.scaledVariableDebt,
                  reserveIndex: i.variableBorrowIndex,
                  reserveRate: i.variableBorrowRate,
                  lastUpdateTimestamp: i.lastUpdateTimestamp,
                  currentTimestamp: n,
                }),
                { marketReferenceCurrencyBalance: v, usdBalance: B } = (0,
                l.n3)({
                  balance: b,
                  priceInMarketReferenceCurrency: o,
                  marketReferenceCurrencyDecimals: t,
                  decimals: c,
                  marketReferencePriceInUsdNormalized: r,
                });
              return {
                userReserve: e,
                underlyingBalance: u,
                underlyingBalanceMarketReferenceCurrency: s,
                underlyingBalanceUSD: d,
                ithacaBalance: (0, a.hE)(e.ithacaBalance),
                ithacaBalanceMarketReferenceCurrency: y,
                ithacaBalanceUSD: f,
                variableBorrows: b,
                variableBorrowsMarketReferenceCurrency: v,
                variableBorrowsUSD: B,
                totalBorrows: b,
                totalBorrowsMarketReferenceCurrency: v,
                totalBorrowsUSD: B,
              };
            })({
              userReserve: r,
              marketReferencePriceInUsdNormalized: y,
              marketReferenceCurrencyDecimals: t,
              currentTimestamp: e,
            })
          ),
          v = b.map((e) =>
            (function ({ reserve: e, marketReferenceCurrencyDecimals: r }) {
              let { userReserve: t } = e,
                { reserve: n } = t,
                i = n.decimals,
                l = (e) => (0, a.Fv)(e, n.decimals);
              return Object.assign(Object.assign({}, t), {
                underlyingBalance: (0, a.Fv)(e.underlyingBalance, i),
                underlyingBalanceMarketReferenceCurrency: (0, a.Fv)(
                  e.underlyingBalanceMarketReferenceCurrency,
                  r
                ),
                underlyingBalanceUSD: e.underlyingBalanceUSD.toString(),
                ithacaBalance: (0, a.Fv)(e.ithacaBalance, i),
                ithacaBalanceMarketReferenceCurrency: (0, a.Fv)(
                  e.ithacaBalanceMarketReferenceCurrency,
                  r
                ),
                ithacaBalanceUSD: e.ithacaBalanceUSD.toString(),
                variableBorrows: l(e.variableBorrows),
                variableBorrowsMarketReferenceCurrency: (0, a.Fv)(
                  e.variableBorrowsMarketReferenceCurrency,
                  r
                ),
                variableBorrowsUSD: e.variableBorrowsUSD.toString(),
                totalBorrows: l(e.totalBorrows),
                totalBorrowsMarketReferenceCurrency: (0, a.Fv)(
                  e.totalBorrowsMarketReferenceCurrency,
                  r
                ),
                totalBorrowsUSD: e.totalBorrowsUSD.toString(),
              });
            })({ reserve: e, marketReferenceCurrencyDecimals: t })
          ),
          B = (function ({
            userReserves: e,
            marketReferencePriceInUsd: r,
            marketReferenceCurrencyDecimals: t,
            userEmodeCategoryId: n,
            userPositionsCollateral: c,
          }) {
            let {
                totalLiquidityMarketReferenceCurrency: u,
                totalBorrowsMarketReferenceCurrency: s,
                totalCollateralMarketReferenceCurrency: d,
                currentLtv: y,
                currentLiquidationThreshold: f,
                isInIsolationMode: b,
                isolatedReserve: v,
              } = (function ({
                userReserves: e,
                userEmodeCategoryId: r,
                userPositionsCollateral: t,
              }) {
                let n,
                  i = (0, a.bS)("0"),
                  l = (0, a.bS)("0"),
                  o = (0, a.bS)("0"),
                  c = (0, a.hE)("0"),
                  u = (0, a.hE)("0"),
                  s = !1;
                e.forEach((e) => {
                  if (
                    ((i = i
                      .plus(e.underlyingBalanceMarketReferenceCurrency)
                      .plus(e.ithacaBalanceMarketReferenceCurrency)),
                    (o = o.plus(e.variableBorrowsMarketReferenceCurrency)),
                    (l = l.plus(e.ithacaBalanceMarketReferenceCurrency)),
                    (c = c.plus(
                      (0, a.hE)(
                        e.ithacaBalanceMarketReferenceCurrency
                      ).multipliedBy("10000")
                    )),
                    (u = u.plus(
                      (0, a.hE)(
                        e.ithacaBalanceMarketReferenceCurrency
                      ).multipliedBy("10000")
                    )),
                    "0" !== e.userReserve.reserve.reserveLiquidationThreshold &&
                      e.userReserve.usageAsCollateralEnabledOnUser)
                  ) {
                    "0" !== e.userReserve.reserve.debtCeiling &&
                      ((n = e.userReserve.reserve), (s = !0)),
                      (l = l.plus(e.underlyingBalanceMarketReferenceCurrency));
                    let t = e.userReserve.reserve.eModes.find(
                      (e) => e.id === r
                    );
                    r && t && t.collateralEnabled
                      ? ((c = c.plus(
                          (0, a.hE)(
                            e.underlyingBalanceMarketReferenceCurrency
                          ).multipliedBy(t.eMode.ltv)
                        )),
                        (u = u.plus(
                          (0, a.hE)(
                            e.underlyingBalanceMarketReferenceCurrency
                          ).multipliedBy(t.eMode.liquidationThreshold)
                        )))
                      : ((c = c.plus(
                          (0, a.hE)(
                            e.underlyingBalanceMarketReferenceCurrency
                          ).multipliedBy(
                            e.userReserve.reserve.baseLTVasCollateral
                          )
                        )),
                        (u = u.plus(
                          (0, a.hE)(
                            e.underlyingBalanceMarketReferenceCurrency
                          ).multipliedBy(
                            e.userReserve.reserve.reserveLiquidationThreshold
                          )
                        )));
                  }
                });
                let d = (0, a.hE)(t.collateral)
                  .plus(t.mtm)
                  .minus(t.maintenanceMargin)
                  .minus(t.valueAtRisk);
                return (
                  (i = i.plus(d)),
                  (l = l.plus(d)),
                  (c = c.plus((0, a.hE)(d).multipliedBy("10000"))),
                  (u = u.plus((0, a.hE)(d).multipliedBy("10000"))),
                  c.gt(0) && (c = (0, a.bS)(c.div(l))),
                  u.gt(0) && (u = (0, a.bS)(u.div(l))),
                  {
                    totalLiquidityMarketReferenceCurrency: i,
                    totalBorrowsMarketReferenceCurrency: o,
                    totalCollateralMarketReferenceCurrency: l,
                    currentLtv: c,
                    currentLiquidationThreshold: u,
                    isInIsolationMode: s,
                    isolatedReserve: n,
                  }
                );
              })({
                userReserves: e,
                userEmodeCategoryId: n,
                userPositionsCollateral: c,
              }),
              B = (0, l.eP)({
                collateralBalanceMarketReferenceCurrency: d,
                borrowBalanceMarketReferenceCurrency: s,
                currentLtv: y,
              }),
              p =
                b && v
                  ? i.Z.min(
                      i.Z.max(
                        0,
                        (0, a.pV)(
                          new i.Z(v.debtCeiling).minus(
                            v.isolationModeTotalDebt
                          ),
                          v.debtCeilingDecimals - t
                        )
                      ),
                      B
                    )
                  : B;
            return {
              isInIsolationMode: b,
              isolatedReserve: v,
              totalLiquidityUSD: (0, o.$)(u, r, t),
              totalCollateralUSD: (0, o.$)(d, r, t),
              totalBorrowsUSD: (0, o.$)(s, r, t),
              totalLiquidityMarketReferenceCurrency: u,
              totalCollateralMarketReferenceCurrency: d,
              totalBorrowsMarketReferenceCurrency: s,
              availableBorrowsMarketReferenceCurrency: p,
              availableBorrowsUSD: (0, o.$)(p, r, t),
              currentLoanToValue: y,
              currentLiquidationThreshold: f,
              healthFactor: (0, l.kr)({
                collateralBalanceMarketReferenceCurrency: d,
                borrowBalanceMarketReferenceCurrency: s,
                currentLiquidationThreshold: f,
              }),
            };
          })({
            userReserves: b,
            marketReferencePriceInUsd: y,
            marketReferenceCurrencyDecimals: t,
            userEmodeCategoryId: s,
            userPositionsCollateral: d,
          });
        return {
          userReservesData: v,
          totalLiquidityMarketReferenceCurrency: (0, a.Fv)(
            B.totalLiquidityMarketReferenceCurrency,
            t
          ),
          totalLiquidityUSD: B.totalLiquidityUSD.toString(),
          totalCollateralMarketReferenceCurrency: (0, a.Fv)(
            B.totalCollateralMarketReferenceCurrency,
            t
          ),
          totalCollateralUSD: B.totalCollateralUSD.toString(),
          totalBorrowsMarketReferenceCurrency: (0, a.Fv)(
            B.totalBorrowsMarketReferenceCurrency,
            t
          ),
          totalBorrowsUSD: B.totalBorrowsUSD.toString(),
          netWorthUSD: B.totalLiquidityUSD.minus(B.totalBorrowsUSD).toString(),
          availableBorrowsMarketReferenceCurrency: (0, a.Fv)(
            B.availableBorrowsMarketReferenceCurrency,
            t
          ),
          availableBorrowsUSD: B.availableBorrowsUSD.toString(),
          currentLoanToValue: (0, a.Fv)(B.currentLoanToValue, n.ih),
          currentLiquidationThreshold: (0, a.Fv)(
            B.currentLiquidationThreshold,
            n.ih
          ),
          healthFactor: B.healthFactor.toFixed(),
          userEmodeCategoryId: s,
          isInIsolationMode: B.isInIsolationMode,
          isolatedReserve: B.isolatedReserve,
        };
      }
    },
    69546: function (e, r, t) {
      t.d(r, {
        CO: function () {
          return u;
        },
        L1: function () {
          return d;
        },
        VO: function () {
          return c;
        },
        eP: function () {
          return y;
        },
        kr: function () {
          return s;
        },
        n3: function () {
          return f;
        },
        rD: function () {
          return o;
        },
      });
      var a = t(70794),
        n = t(43681),
        i = t(91553),
        l = t(92328);
      function o({ rate: e, currentTimestamp: r, lastUpdateTimestamp: t }) {
        let a = (0, n.bS)(r - t),
          o = (0, n.bS)(e).dividedBy(i.E_);
        return l.sO(o, a);
      }
      function c({
        principalBalance: e,
        reserveIndex: r,
        reserveRate: t,
        lastUpdateTimestamp: a,
        currentTimestamp: i,
      }) {
        let c = (0, n.bS)(e);
        if (c.eq("0")) return c;
        let u = o({ rate: t, currentTimestamp: i, lastUpdateTimestamp: a }),
          s = l._O(u, r),
          d = l.jV(c);
        return l.jq(l._O(d, s));
      }
      function u({
        balance: e,
        index: r,
        rate: t,
        lastUpdateTimestamp: a,
        currentTimestamp: o,
      }) {
        return l.jq(
          l._O(
            l.jV(e),
            (function ({
              rate: e,
              index: r,
              lastUpdateTimestamp: t,
              currentTimestamp: a,
            }) {
              if ((0, n.bS)(e).eq("0")) return (0, n.bS)(r);
              let o = (function ({
                rate: e,
                currentTimestamp: r,
                lastUpdateTimestamp: t,
              }) {
                let a = l.jV((0, n.bS)(r - t)),
                  o = l.e9(a, l.jV(i.E_));
                return l._O(e, o).plus(l.Hx);
              })({ rate: e, currentTimestamp: a, lastUpdateTimestamp: t });
              return l._O(o, r);
            })({
              rate: t,
              index: r,
              lastUpdateTimestamp: a,
              currentTimestamp: o,
            })
          )
        );
      }
      function s({
        borrowBalanceMarketReferenceCurrency: e,
        collateralBalanceMarketReferenceCurrency: r,
        currentLiquidationThreshold: t,
      }) {
        return (0, n.hE)(e).eq(0)
          ? (0, n.hE)("-1")
          : (0, n.hE)(r)
              .multipliedBy(t)
              .shiftedBy(-1 * i.ih)
              .div(e);
      }
      function d({
        collateralBalanceMarketReferenceCurrency: e,
        borrowBalanceMarketReferenceCurrency: r,
        currentLiquidationThreshold: t,
      }) {
        return s({
          collateralBalanceMarketReferenceCurrency: e,
          borrowBalanceMarketReferenceCurrency: r,
          currentLiquidationThreshold: (0, n.hE)(t)
            .shiftedBy(i.ih)
            .decimalPlaces(0, a.Z.ROUND_DOWN),
        });
      }
      function y({
        collateralBalanceMarketReferenceCurrency: e,
        borrowBalanceMarketReferenceCurrency: r,
        currentLtv: t,
      }) {
        if ((0, n.bS)(t).eq(0)) return (0, n.bS)("0");
        let a = (0, n.bS)(e)
          .multipliedBy(t)
          .shiftedBy(-1 * i.ih)
          .minus(r);
        return a.gt("0") ? a : (0, n.bS)("0");
      }
      function f({
        balance: e,
        priceInMarketReferenceCurrency: r,
        marketReferenceCurrencyDecimals: t,
        decimals: a,
        marketReferencePriceInUsdNormalized: i,
      }) {
        let l = (0, n.bS)(e)
            .multipliedBy(r)
            .shiftedBy(-1 * a),
          o = l.multipliedBy(i).shiftedBy(-1 * t);
        return { marketReferenceCurrencyBalance: l, usdBalance: o };
      }
    },
    89810: function (e, r, t) {
      t.d(r, {
        u: function () {
          return c;
        },
      });
      var a = t(37003),
        n = t(36100),
        i = t(82451),
        l = t(82002),
        o = t(37122);
      function c(e = {}) {
        let { abi: r, address: t, functionName: c, query: u = {} } = e,
          s = e.code,
          d = (0, o.Z)(e),
          y = (0, l.x)({ config: d }),
          f = (function (e, r = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let n = r.abi;
                if (!n) throw Error("abi is required");
                let { functionName: i, scopeKey: l, ...o } = t[1],
                  c = (() => {
                    let e = t[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!i) throw Error("functionName is required");
                return (0, a.L)(e, {
                  abi: n,
                  functionName: i,
                  args: o.args,
                  ...c,
                  ...o,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: r, ...t } = e;
                return ["readContract", (0, n.OP)(t)];
              })(r),
            };
          })(d, { ...e, chainId: e.chainId ?? y }),
          b = !!((t || s) && r && c && (u.enabled ?? !0));
        return (0, i.aM)({
          ...u,
          ...f,
          enabled: b,
          structuralSharing: u.structuralSharing ?? n.if,
        });
      }
    },
  },
]);
