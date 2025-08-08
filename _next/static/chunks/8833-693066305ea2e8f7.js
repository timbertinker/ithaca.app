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
      (e._sentryDebugIds[t] = "9e6cbcd4-0768-462b-88b0-7922b005605d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9e6cbcd4-0768-462b-88b0-7922b005605d"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8833],
    {
      21050: function (e, t, n) {
        "use strict";
        var r = n(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: n = "" } = e;
          return (0, r.jsxs)("svg", {
            className: n,
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
      57345: function (e, t, n) {
        "use strict";
        var r = n(85893);
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
      3298: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gh: function () {
            return r;
          },
          Mu: function () {
            return l;
          },
          oh: function () {
            return i;
          },
          rN: function () {
            return a;
          },
        });
        let r = 430,
          a = 695,
          i = 1435,
          l = 1280;
      },
      35192: function (e, t, n) {
        "use strict";
        n.d(t, {
          e7: function () {
            return f;
          },
          S2: function () {
            return h;
          },
          X9: function () {
            return d;
          },
          Nq: function () {
            return w;
          },
          ZA: function () {
            return m;
          },
        });
        var r = n(85893),
          a = n(77125),
          i = n(93967),
          l = n.n(i),
          o = n(86322),
          s = (e) => {
            let {
              content: t,
              align: n = "center",
              contentClassname: a,
              triggerIcon: i,
              triggerClassname: s,
            } = e;
            return (0, r.jsxs)(o.fC, {
              children: [
                (0, r.jsx)(o.xz, {
                  children: (0, r.jsx)("div", {
                    className: l()(
                      "tw-mr-1 tw-inline-block tw-align-middle",
                      s
                    ),
                    children: i,
                  }),
                }),
                (0, r.jsx)(o.VY, {
                  align: n,
                  children: (0, r.jsx)("div", {
                    className: l()(
                      "-tw-mt-[106px] tw-max-w-[346px] tw-rounded-md tw-bg-black-dark tw-p-3 tw-text-start tw-font-roboto tw-text-xs tw-text-white [box-shadow:2px_2px_2px_1px_#050505]",
                      a
                    ),
                    children: t,
                  }),
                }),
              ],
            });
          },
          c = n(49632),
          u = n(70757);
        let d = [
            "Assets",
            "Wallet Balance",
            "Available Collateral on Ithaca",
            "Live Orders' Collateral Requirements",
            "Positions' Collateral Requirements",
            "Yield*",
            "Yield Accrued",
            "",
          ],
          h = [
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
          f = [
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
          w = (e) => ({
            [e]: {
              isTransactionInProgress: !1,
              currency: e,
              currencyLogo: (0, u.XX)(e),
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
              currencyLogo: (0, r.jsx)(a.Z, {}),
              walletBalance: "0",
              fundLockValue: 0,
              orderValue: 0,
              settleValue: 0,
              positionCollateralRequirement: 0,
              availableCollateral: 0,
            },
          }),
          m = (e) => {
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
                    (0, r.jsx)(s, {
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
      15922: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return l;
          },
        });
        var r = n(3298),
          a = n(67294);
        let i = () => {
            let [e, t] = (0, a.useState)({ width: void 0, height: void 0 });
            return (
              (0, a.useEffect)(() => {
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
          l = () => {
            let { width: e } = i();
            return (e && e >= r.oh) || !e
              ? "desktop"
              : e && e >= r.rN
              ? "tablet"
              : "phone";
          };
      },
      59421: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return v;
          },
        });
        var r = n(47236),
          a = n(67294),
          i = n(64729),
          l = n(81989),
          o = n(59731),
          s = n(67930),
          c = n(88144);
        let u = () => {
          let { systemInfo: e, ithacaSDK: t, isAuthenticated: n } = (0, o.qr)(),
            { isSolanaWalletActive: r } = (0, i.X)(),
            { address: a } = (0, l.Pk)(),
            u = (0, l.Gc)(),
            d = (0, l.ho)(),
            h = (0, c.a)({
              queryKey: [s.gp, "lockedCollateral"],
              queryFn: () => t.client.getLockedCollateral(),
              enabled: n,
              refetchInterval: 3e4,
            }),
            f = (0, c.a)({
              queryKey: [s.gp, "fundLockState"],
              queryFn: () => t.client.fundLockState(),
              enabled: n,
              refetchInterval: 3e4,
            });
          return r
            ? { ...u, ...d, lockedCollateralData: h, fundLockStateData: f }
            : { ...d, ...u, lockedCollateralData: h, fundLockStateData: f };
        };
        var d = n(32010),
          h = n(15229);
        let f = (e) =>
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
        var w = n(35192);
        let m = { fundLockValue: 0, orderValue: 0, settleValue: 0 },
          v = () => {
            let { showToast: e } = (0, r.Z)(),
              [t, n] = (0, o.qr)(
                (0, d.N)((e) => [e.isAuthenticated, e.underlyingCurrency])
              ),
              [i, l] = (0, a.useState)((0, w.Nq)(n)),
              {
                SOLData: { isRefetching: s, data: c, refetch: v },
                WETHData: { isRefetching: g, data: b, refetch: p },
                USDCData: { isRefetching: k, data: x, refetch: y },
                lockedCollateralData: { isRefetching: C, data: A, refetch: L },
                fundLockStateData: { isRefetching: S, data: D, refetch: _ },
              } = u(),
              j = "WSOL" === n,
              I = (j ? s : g) || k || C || S;
            (0, a.useEffect)(() => {
              var e, r;
              if (!t) {
                l((0, w.Nq)(n));
                return;
              }
              if (!A || !x || (j && !c) || (!j && !b)) return;
              let a = (e) =>
                  (null == D ? void 0 : D.find((t) => t.currency === e)) || m,
                o = a(n),
                s = a("USDC"),
                u =
                  o.fundLockValue !==
                  (null === (e = i[n]) || void 0 === e
                    ? void 0
                    : e.fundLockValue),
                d =
                  s.fundLockValue !==
                  (null === (r = i.USDC) || void 0 === r
                    ? void 0
                    : r.fundLockValue),
                v = f(A),
                g = j ? c : b;
              l((e) => {
                var t;
                let r = { ...e };
                return (
                  (r[n] = {
                    ...e[n],
                    ...o,
                    positionCollateralRequirement: v.totalUnderlierAmount,
                    availableCollateral:
                      o.fundLockValue - o.orderValue - o.settleValue,
                    walletBalance: (0, h.b)(
                      (null == g ? void 0 : g.value) || BigInt(0),
                      (null == g ? void 0 : g.decimals) || 9
                    ),
                    isTransactionInProgress:
                      !u &&
                      ((null === (t = e[n]) || void 0 === t
                        ? void 0
                        : t.isTransactionInProgress) ||
                        !1),
                  }),
                  (r.USDC = {
                    ...e.USDC,
                    ...s,
                    positionCollateralRequirement: v.totalNumeraireAmount,
                    availableCollateral:
                      s.fundLockValue - s.orderValue - s.settleValue,
                    walletBalance: (0, h.b)(x.value, x.decimals),
                    isTransactionInProgress:
                      !d && e.USDC.isTransactionInProgress,
                  }),
                  r
                );
              });
            }, [t, D, A, x, b, c, n, j]);
            let q = () => {
              _(), L(), j ? v() : p(), y();
            };
            return {
              collateralSummary: i,
              isFetching: I,
              refetchAll: q,
              handleFetchingBalance: (e, t) => {
                if (null == t ? void 0 : t.name) {
                  let n = t.name;
                  l((t) => ({
                    ...t,
                    [n]: { ...t[n], isTransactionInProgress: !e },
                  }));
                }
              },
              refetchFundLockState: _,
              refetchLockedCollateralData: L,
              refetchBalanceWETH: p,
              refetchBalanceSOL: v,
              refetchBalanceUSDC: y,
              showOrderConfirmationToastAndRefetchData: () => {
                q(),
                  e({
                    title: "Transaction Confirmed",
                    message: "Order received & submitted into the auction",
                  });
              },
            };
          };
      },
      85292: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(93967),
          i = n.n(a),
          l = n(25448),
          o = n.n(l);
        t.Z = (e) => {
          let { size: t = "xl", children: n, className: a } = e;
          return (0, r.jsx)("div", {
            className: i()(o().container, o()[t], a),
            children: n,
          });
        };
      },
      27888: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(80140),
          i = n.n(a);
        t.Z = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("main", { className: i().Main, children: t }),
          });
        };
      },
      20448: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return s;
          },
        });
        var r = n(43210),
          a = n(86900),
          i = n(57393);
        let l = r.y,
          o = {
            localhost: a.Z,
            "app.ithacaprotocol.io": l,
            "sepolia.canary.ithacanoemon.tech": a.Z,
            "testnet.ithacaprotocol.io": a.Z,
            "app.canary.ithacanoemon.tech": a.Z,
            "mumbai.canary.ithacanoemon.tech": i.v,
            "decent-governor-development-phase1.up.railway.app": a.Z,
            "axelar-integration.ithacaprotocol.io": r.y,
          },
          s = (e) => {
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
              ? a.Z
              : null !== (t = o[window.location.hostname]) && void 0 !== t
              ? t
              : l;
          };
      },
      64729: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return r;
          },
        }),
          n(82649);
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
      81989: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gc: function () {
            return g;
          },
          ho: function () {
            return v;
          },
          Pk: function () {
            return m;
          },
        });
        var r = n(64729),
          a = n(92321),
          i = n(54306),
          l = n(44718),
          o = n(20448),
          s = n(12185),
          c = n(59731),
          u = n(88144),
          d = n(72809);
        let h = (e) => {
            let { address: t, token: n, query: a } = e,
              { connection: i } = (0, l.R)(),
              o = t ? new d.PublicKey(t) : null,
              { leaderBoardAddresses: s } = (0, r.X)();
            return (0, u.a)({
              queryKey: ["solana-balance", t, n],
              queryFn: async () => {
                if (!o || !i) throw Error("Missing publicKey or connection");
                if ("SOL" === n) {
                  let e = await i.getBalance(o);
                  return {
                    decimals: 9,
                    formatted: (e / d.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === n) {
                  let e = await i.getParsedTokenAccountsByOwner(o, {
                      mint: new d.PublicKey(s.wethArbitrumAddress),
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
              enabled: !!o && !!i,
              ...a,
            });
          },
          f = () => {
            let { isConnected: e, address: t } = (0, a.m)();
            return { isConnected: e, address: t };
          },
          w = () => {
            let { connected: e, publicKey: t } = (0, i.O)(),
              { connection: n } = (0, l.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          m = () => {
            let { isSolanaWalletActive: e } = (0, r.X)(),
              t = f(),
              n = w();
            return e ? n : t;
          },
          v = () => {
            let { address: e } = w();
            return {
              SOLData: h({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: h({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          g = () => {
            let { address: e } = f(),
              { systemInfo: t, isAuthenticated: n } = (0, c.qr)(),
              r = { address: e, chainId: (0, o.b)().id };
            return {
              WETHData: (0, s.K)({
                ...r,
                token: t.tokenAddress.WETH,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
              USDCData: (0, s.K)({
                ...r,
                token: t.tokenAddress.USDC,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
            };
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
      80140: function (e) {
        e.exports = { Main: "Main_Main__LAM6o" };
      },
    },
  ]);
