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
      (e._sentryDebugIds[t] = "d4ec589e-a605-4a7d-84b7-1f0ba2ac605f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d4ec589e-a605-4a7d-84b7-1f0ba2ac605f"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1014],
  {
    81014: function (e, t, n) {
      n.r(t),
        n.d(t, {
          MarginLoansDataDataProvider: function () {
            return S;
          },
          useMarginLoansDataContext: function () {
            return R;
          },
        });
      var a = n(85893);
      let r = [
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
        i = [
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
                  { internalType: "uint16", name: "eModeLtv", type: "uint16" },
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
                internalType: "struct IUiPoolDataProviderV3.UserReserveData[]",
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
      var o = n(81989);
      let s = (e) => {
          let {
              chainId: t,
              lendingPoolAddressesProvider: n,
              reservesDataRaw: a,
            } = e,
            { 0: r, 1: i } = a;
          return {
            reservesData: r.map((e, a) => ({
              originalId: a,
              id: ""
                .concat(t, "-")
                .concat(e.underlyingAsset, "-")
                .concat(n)
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
                i.marketReferenceCurrencyUnit.toString().length - 1,
              marketReferenceCurrencyPriceInUsd:
                i.marketReferenceCurrencyPriceInUsd.toString(),
              networkBaseTokenPriceInUsd:
                i.networkBaseTokenPriceInUsd.toString(),
              networkBaseTokenPriceDecimals: i.networkBaseTokenPriceDecimals,
            },
          };
        },
        l = (e) => {
          let {
              chainId: t,
              lendingPoolAddressesProvider: n,
              user: a,
              userReservesDataRaw: r,
            } = e,
            { 0: i, 1: o } = r;
          return {
            userReserves: i.map((e) => ({
              id: ""
                .concat(t, "-")
                .concat(a, "-")
                .concat(e.underlyingAsset, "-")
                .concat(n)
                .toLowerCase(),
              underlyingAsset: e.underlyingAsset,
              scaledATokenBalance: e.scaledATokenBalance.toString(),
              usageAsCollateralEnabledOnUser: e.usageAsCollateralEnabledOnUser,
              stableBorrowRate: e.stableBorrowRate.toString(),
              scaledVariableDebt: e.scaledVariableDebt.toString(),
              principalStableDebt: e.principalStableDebt.toString(),
              stableBorrowLastUpdateTimestamp: Number(
                e.stableBorrowLastUpdateTimestamp.toString()
              ),
              ithacaBalance: e.ithacaBalance.toString(),
            })),
            userEmodeCategoryId: o,
          };
        };
      var d = n(43681),
        p = n(75370),
        u = n(55603),
        y = n(67294),
        c = n(1958),
        b = n(15229),
        m = n(89810),
        g = n(20448),
        T = n(59731);
      let v = y.createContext({}),
        S = (e) => {
          let t,
            n,
            y,
            S,
            R,
            D,
            k,
            w,
            { children: I } = e,
            { address: B } = (0, o.Pk)(),
            { systemInfo: P } = (0, T.qr)(),
            { ithacaFeedAddress: f, extra: C } = P,
            { data: A, isLoading: U } = (0, m.u)({
              address: C["extra.uipooldataprovider"],
              abi: i,
              functionName: "getReservesData",
              args: [C["extra.lendingpooladdressesprovider"]],
              chainId: (0, g.b)().id,
              query: { refetchInterval: 1e4 },
            });
          !U &&
            A &&
            (({ reservesData: t, baseCurrencyData: n } = s({
              chainId: (0, g.b)().id,
              lendingPoolAddressesProvider:
                C["extra.lendingpooladdressesprovider"],
              reservesDataRaw: A,
            })),
            (y = (0, p.DA)({
              reserves: t,
              currentTimestamp: Date.now() / 1e3,
              marketReferenceCurrencyDecimals:
                n.marketReferenceCurrencyDecimals,
              marketReferencePriceInUsd: n.marketReferenceCurrencyPriceInUsd,
            })));
          let { data: h, isLoading: L } = (0, m.u)({
              address: f,
              abi: r,
              functionName: "getClientData",
              args: [B || c.DR],
              chainId: (0, g.b)().id,
              query: { enabled: !!B, refetchInterval: 1e4 },
            }),
            M = {
              maintenanceMargin: (0, b.b)(
                (null == h ? void 0 : h.maintenanceMargin) || BigInt(0),
                8
              ),
              mtm: (0, b.b)((null == h ? void 0 : h.mtm) || BigInt(0), 8),
              collateral: (0, b.b)(
                (null == h ? void 0 : h.collateral) || BigInt(0),
                8
              ),
              valueAtRisk: (0, b.b)(
                (null == h ? void 0 : h.valueAtRisk) || BigInt(0),
                8
              ),
            },
            { data: q, isLoading: E } = (0, m.u)({
              address: C["extra.uipooldataprovider"],
              abi: i,
              functionName: "getUserReservesData",
              args: [C["extra.lendingpooladdressesprovider"], B || c.DR],
              chainId: (0, g.b)().id,
              query: { enabled: !!B, refetchInterval: 1e4 },
            });
          return (
            y &&
              n &&
              B &&
              !E &&
              q &&
              h &&
              (({ userReserves: S, userEmodeCategoryId: R } = l({
                chainId: (0, g.b)().id,
                lendingPoolAddressesProvider:
                  C["extra.lendingpooladdressesprovider"],
                user: B,
                userReservesDataRaw: q,
              })),
              (D = (0, u.G)({
                currentTimestamp: Date.now() / 1e3,
                userReserves: S,
                formattedReserves: y,
                userEmodeCategoryId: R,
                marketReferenceCurrencyDecimals:
                  n.marketReferenceCurrencyDecimals,
                marketReferencePriceInUsd: n.marketReferenceCurrencyPriceInUsd,
                userPositionsCollateral: {
                  collateral: h.collateral.toString(),
                  maintenanceMargin: h.maintenanceMargin.toString(),
                  mtm: h.mtm.toString(),
                  valueAtRisk: h.valueAtRisk.toString(),
                },
              })),
              (k = ((e, t) => {
                let n = t.userReservesData.reduce(
                    (t, n) => {
                      let a = e.find(
                        (e) => e.underlyingAsset === n.reserve.underlyingAsset
                      );
                      if (a)
                        "0" !== n.underlyingBalanceUSD &&
                          (t.positiveProportion = t.positiveProportion.plus(
                            (0, d.hE)(a.supplyAPY).multipliedBy(
                              n.underlyingBalanceUSD
                            )
                          )),
                          "0" !== n.variableBorrowsUSD &&
                            (t.negativeProportion = t.negativeProportion.plus(
                              (0, d.hE)(a.variableBorrowAPY).multipliedBy(
                                n.variableBorrowsUSD
                              )
                            ));
                      else throw Error("no possible to calculate net apy");
                      return t;
                    },
                    {
                      positiveProportion: (0, d.hE)(0),
                      negativeProportion: (0, d.hE)(0),
                    }
                  ),
                  a = n.positiveProportion
                    .dividedBy(t.totalLiquidityUSD)
                    .toNumber(),
                  r = n.negativeProportion
                    .dividedBy(t.totalBorrowsUSD)
                    .toNumber(),
                  i =
                    (Number(t.totalLiquidityUSD) /
                      Number("0" !== t.netWorthUSD ? t.netWorthUSD : "1")) *
                      (a || 0) -
                    (Number(t.totalBorrowsUSD) /
                      Number("0" !== t.netWorthUSD ? t.netWorthUSD : "1")) *
                      (r || 0);
                return { earnedAPY: a, debtAPY: r, netAPY: i };
              })(y, D)),
              (w = { ...D, ...k })),
            (0, a.jsx)(v.Provider, {
              value: {
                loading: U || (!!B && L),
                reserves: y || [],
                user: w,
                userReserves: S || [],
                userPositionsCollateral: M,
                marketReferencePriceInUsd:
                  (null == n ? void 0 : n.marketReferenceCurrencyPriceInUsd) ||
                  "0",
                marketReferenceCurrencyDecimals:
                  (null == n ? void 0 : n.marketReferenceCurrencyDecimals) || 0,
                networkBaseTokenPriceInUsd:
                  (null == n ? void 0 : n.networkBaseTokenPriceInUsd) || "0",
                networkBaseTokenPriceDecimals:
                  (null == n ? void 0 : n.networkBaseTokenPriceDecimals) || 0,
              },
              children: I,
            })
          );
        },
        R = () => (0, y.useContext)(v);
    },
  },
]);
