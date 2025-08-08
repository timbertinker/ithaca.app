!(function () {
  try {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "bfc7f1e4-29fc-4c59-9f08-65b90b0e8302"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-bfc7f1e4-29fc-4c59-9f08-65b90b0e8302"));
  } catch (t) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8775],
    {
      10658: function (t, e, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/agents/stratos",
          function () {
            return a(32459);
          },
        ]);
      },
      97236: function (t, e, a) {
        "use strict";
        a.d(e, {
          Y: function () {
            return r;
          },
        });
        var s = a(85893);
        a(67294);
        var l = a(93967),
          i = a.n(l);
        let r = (t) => {
          let { children: e, className: a } = t;
          return (0, s.jsx)("div", {
            className: i()(
              "tw-rounded-3xl tw-border tw-border-white/[0.08] tw-bg-[#090D16]",
              a
            ),
            children: e,
          });
        };
      },
      32459: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            __N_SSG: function () {
              return I;
            },
            default: function () {
              return L;
            },
          });
        var s = a(85893),
          l = a(27888),
          i = a(85292),
          r = a(11163),
          n = a(51700),
          d = a(66270),
          o = a(67294),
          c = a(97236),
          w = a(27014),
          m = a(29528),
          x = a(74991),
          g = a(27426),
          h = a(75593),
          u = a(48120),
          v = a(81838),
          f = a(77615),
          b = a(41664),
          p = a.n(b),
          j = a(25675),
          N = a.n(j),
          y = a(68964),
          _ = a(45113);
        let S = "/images/agents/avatar2.jpg";
        var A = (t) => {
            var e, a;
            let { agent: l, showEdit: i, allocation: r } = t,
              n = l.name || "",
              d = {
                ...l.prices,
                hourly:
                  (null === (e = l.prices) || void 0 === e
                    ? void 0
                    : e.hourly) || [],
                daily:
                  (null === (a = l.prices) || void 0 === a
                    ? void 0
                    : a.daily) || [],
              };
            return (0, s.jsx)(p(), {
              href: i
                ? "/agents/".concat(l._id, "/edit")
                : "/agents/".concat(l._id),
              className:
                "tw-relative tw-block tw-rounded-2xl tw-border tw-border-ithaca-white-20 tw-bg-[#090D14]",
              children: (0, s.jsxs)("div", {
                className:
                  "tw-flex tw-flex-col tw-gap-6 tw-p-4 tw-transition-opacity hover:tw-opacity-80 lg:tw-flex-row lg:tw-items-center lg:tw-justify-between",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "tw-flex tw-flex-col tw-gap-4 md:tw-items-start lg:tw-max-w-[50%] lg:tw-flex-row lg:tw-gap-6",
                    children: (0, s.jsxs)("div", {
                      className:
                        "tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-4 lg:tw-flex-row lg:tw-items-center lg:tw-gap-6",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "tw-flex tw-flex-col tw-items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "tw-relative tw-hidden tw-size-12 tw-shrink-0 tw-overflow-hidden tw-rounded-full md:tw-block md:tw-size-24 lg:tw-size-28",
                              children: (0, s.jsx)(N(), {
                                width: 500,
                                height: 500,
                                alt: n,
                                src: l.image || S,
                                className:
                                  "tw-h-full tw-w-full tw-object-cover",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "tw-mt-2 tw-hidden tw-text-center md:tw-block",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "tw-text-2xl tw-font-bold tw-text-emerald-400",
                                  children: r ? "".concat(r, "%") : "23.5%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "tw-text-xs tw-text-ithaca-white-60",
                                  children: "allocation",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "tw-flex tw-flex-col tw-gap-4",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "tw-hidden tw-space-y-2 md:tw-mt-4 md:tw-block",
                              children: (0, s.jsx)("div", {
                                className:
                                  "tw-flex tw-items-center tw-gap-2 tw-space-y-2 tw-font-aeonik",
                                children: (0, s.jsx)("div", {
                                  className: "tw-text-lg",
                                  children: l.name,
                                }),
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "tw-flex tw-flex-row tw-gap-4 md:tw-hidden",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "tw-flex tw-flex-col tw-items-center",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        " tw-relative tw-flex tw-size-12 tw-shrink-0 tw-flex-row tw-overflow-hidden tw-rounded-full sm:tw-flex md:tw-size-24 lg:tw-size-28",
                                      children: (0, s.jsx)(N(), {
                                        width: 500,
                                        height: 500,
                                        alt: n,
                                        src: l.image || S,
                                        className:
                                          "tw-h-full tw-w-full tw-object-cover",
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "tw-mt-1 tw-text-center",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "tw-text-lg tw-font-bold tw-text-emerald-400",
                                          children: r
                                            ? "".concat(r, "%")
                                            : "23.5%",
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "tw-text-xs tw-text-ithaca-white-60",
                                          children: "allocation",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "tw-md:hidden tw-space-y-2 sm:tw-block md:tw-mt-4",
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-2 tw-space-y-2 tw-font-aeonik",
                                    children: (0, s.jsx)("div", {
                                      className: "tw-text-lg",
                                      children: l.name,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "tw-line-clamp-4 tw-text-ithaca-white-80 md:tw-mt-2 lg:tw-max-w-64",
                              children: l.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "lg:tw-flex-shrink-0",
                    children: (0, s.jsx)(_.r, {
                      prices: d,
                      isPreview: !0,
                      isLoadingPrices: !1,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "tw-mt-4 lg:tw-w-[18%] lg:tw-min-w-[225px]",
                    children: (0, s.jsxs)("div", {
                      className: "tw-w-full tw-space-y-3",
                      children: [
                        (0, s.jsx)(y.K, {
                          leftLabel: "Contrarian",
                          rightLabel: "Momentum",
                          value: l.contrarian_momentum,
                        }),
                        (0, s.jsx)(y.K, {
                          leftLabel: "Conservative",
                          rightLabel: "Aggressive",
                          value: l.conservative_aggressive,
                        }),
                        (0, s.jsx)(y.K, {
                          leftLabel: "Introvert",
                          rightLabel: "Extrovert",
                          value: l.introvert_extrovert,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          },
          E = a(84909);
        let k = v.O.DEPOSITS_ROUTER;
        var I = !0,
          L = (t) => {
            let { agents: e } = t,
              { referral: a } = (0, r.useRouter)().query,
              [v, b] = (0, o.useState)(void 0),
              p = [
                {
                  id: "0x2E66b88B5184378e371Ed07172A85d309B0eEE87",
                  name: "MagicTrend",
                  allocation: 27.5,
                },
                {
                  id: "0xcF45bF5eFAC4a6B0c6DbE240FdFa4f07fAb5adf0",
                  name: "Sophos",
                  allocation: 27.5,
                },
                {
                  id: "0x53640691F64777c97f6d4479a3E6cAcee2B25A35",
                  name: "Elysium Shield II",
                  allocation: 15,
                },
                {
                  id: "0xbB3b7353522a8f8371BcEbae04F2f4bB4e226E3E",
                  name: "Forward Harvester II",
                  allocation: 10,
                },
                {
                  id: "0x8A8933d3cAb8DA5C52bE53eD5b625e9b6e2f13C5",
                  name: "Range Alchemist II",
                  allocation: 5,
                },
                {
                  id: "0x0a97b716dB29F6CAfdF9E8E9A01Bd549037fA77E",
                  name: "Basis Warrior",
                  allocation: 15,
                },
              ].sort((t, e) => e.allocation - t.allocation),
              j = e.filter((t) => p.some((e) => e.id === t._id)),
              N = (t) => {
                var e;
                return (
                  (null == t
                    ? void 0
                    : null === (e = t.prices) || void 0 === e
                    ? void 0
                    : e.daily) || []
                );
              },
              _ = (0, o.useMemo)(
                () =>
                  j
                    .map((t) => N(t))
                    .reduce(
                      (t, e) =>
                        0 === t.length
                          ? e.map((t) => t.time)
                          : t.filter((t) => e.some((e) => e.time === t)),
                      []
                    )
                    .map((t) => {
                      let e = j.reduce((e, a) => {
                        var s, l, i, r;
                        let n =
                          (null === (i = a.prices) || void 0 === i
                            ? void 0
                            : null === (l = i.daily) || void 0 === l
                            ? void 0
                            : null === (s = l.find((e) => e.time === t)) ||
                              void 0 === s
                            ? void 0
                            : s.price) || 0;
                        return (
                          e +
                          (((null === (r = p.find((t) => t.id === a._id)) ||
                          void 0 === r
                            ? void 0
                            : r.allocation) || 0) /
                            100) *
                            n
                        );
                      }, 0);
                      return { time: t, price: 100 * e };
                    }),
                [j]
              ),
              S = _[_.length - 1],
              I = j
                .map((t) => {
                  var e;
                  let a = S.price,
                    s =
                      (null === (e = p.find((e) => e.id === t._id)) ||
                      void 0 === e
                        ? void 0
                        : e.allocation) || 0;
                  return {
                    id: t._id,
                    nav: (s / 100) * a,
                    name: t.name,
                    allocation: s,
                  };
                })
                .sort((t, e) => e.allocation - t.allocation)
                .reduce((t, e) => (t += e.nav), 0),
              {
                usdcBalance: L,
                userBalance: D,
                agentTokenBalance: C,
                tokenSymbol: M,
                usdcAllowance: F,
                totalAssets: T,
                rate: B,
                refresh: P,
                ...O
              } = (0, x.h)(j[0]),
              { writeContractAsync: R } = (0, h.S)(),
              [Z, z] = (0, o.useState)(!1),
              [K, H] = (0, o.useState)(!1),
              [U, V] = (0, o.useState)(),
              [W, Y] = (0, o.useState)([]),
              [G, X] = (0, o.useState)("");
            (0, o.useEffect)(() => {
              if ((console.log("usdcAllowance", F), "string" == typeof a && a))
                b(a), localStorage.setItem("referral", a);
              else {
                let t = localStorage.getItem("referral");
                t && b(t);
              }
            }, [a]),
              (0, o.useEffect)(() => {
                if (j.length > 0 && 0 === W.length) {
                  if (j.length === p.length) Y(p.map((t) => t.allocation));
                  else {
                    let t = Math.floor(100 / j.length),
                      e = 100 - t * j.length;
                    Y(j.map((a, s) => (0 === s ? t + e : t)));
                  }
                }
              }, [j]);
            let $ = W.reduce((t, e) => t + e, 0),
              q = (() => {
                if (0 === j.length)
                  return { contrarian: 0, aggressive: 0, extrovert: 0 };
                let t = 0,
                  e = 0,
                  a = 0;
                return (
                  j.forEach((s) => {
                    let l = p.find((t) => t.id === s._id);
                    if (l) {
                      let i = l.allocation / 100;
                      (t += (s.contrarian_momentum || 0) * i),
                        (e += (s.conservative_aggressive || 0) * i),
                        (a += (s.introvert_extrovert || 0) * i);
                    }
                  }),
                  {
                    contrarian: Math.round(10 * t) / 10,
                    aggressive: Math.round(10 * e) / 10,
                    extrovert: Math.round(10 * a) / 10,
                  }
                );
              })(),
              J = (() => {
                let t = j.reduce((t, e) => {
                    var a;
                    return (
                      t +
                      ((null === (a = e.prices) || void 0 === a
                        ? void 0
                        : a.assets) || 0)
                    );
                  }, 0),
                  e = j.length,
                  a = j
                    .filter((t) => {
                      var e;
                      return (
                        (null === (e = t.prices) || void 0 === e
                          ? void 0
                          : e.nav_return) !== void 0
                      );
                    })
                    .map((t) => t.prices.nav_return)
                    .sort((t, e) => t - e);
                return {
                  portfolioValue: t,
                  activePositions: e,
                  medianAPY:
                    100 *
                    (a.length > 0
                      ? a.length % 2 == 0
                        ? (a[a.length / 2 - 1] + a[a.length / 2]) / 2
                        : a[Math.floor(a.length / 2)]
                      : 0),
                  riskLevel:
                    q.aggressive <= 3
                      ? "Low"
                      : q.aggressive <= 6
                      ? "Medium"
                      : "High",
                };
              })(),
              Q = async (t) => {
                if (100 === $) {
                  z(!0);
                  try {
                    let e = j.map((t) => (0, n.l0)(t._id)),
                      a = await Promise.all(e);
                    if (a.some((t) => "string" == typeof t))
                      throw Error("Failed to get signatures for all agents");
                    let s = j.map((e, s) => {
                        let l = a[s],
                          i = W[s],
                          r = (parseFloat(t) * i) / 100,
                          n = (0, u.v)(r.toString(), 6);
                        return {
                          depositManager: e._id,
                          amount: n,
                          newExternalBalance: BigInt(l.balance),
                          blockNumber: BigInt(l.block_number),
                          signature: l.signature,
                        };
                      }),
                      l = await R({
                        address: k,
                        abi: [
                          {
                            name: "batchDepositWithSignature",
                            type: "function",
                            inputs: [
                              {
                                name: "deposits",
                                type: "tuple[]",
                                components: [
                                  { name: "depositManager", type: "address" },
                                  { name: "amount", type: "uint256" },
                                  {
                                    name: "newExternalBalance",
                                    type: "uint256",
                                  },
                                  { name: "blockNumber", type: "uint256" },
                                  { name: "signature", type: "bytes" },
                                ],
                              },
                              { name: "referralCode", type: "string" },
                            ],
                            outputs: [],
                            stateMutability: "nonpayable",
                          },
                        ],
                        functionName: "batchDepositWithSignature",
                        args: [s, v || ""],
                      });
                    l && (V(l), H(!0), P && (await P()));
                  } catch (t) {
                    console.error("Multi-agent deposit failed:", t);
                  } finally {
                    z(!1);
                  }
                }
              };
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(d.Z, {}),
                (0, s.jsxs)(l.Z, {
                  children: [
                    (0, s.jsx)(f.Z, {
                      featuredAgent: {
                        name: "STRATOS Swarm",
                        description:
                          'A meta-agent composed of a Stratos ("Army") of Ithaca Protocol Option Trading Agents',
                        features: [
                          "Accessible Institutional-Grade Option Trading Strategies",
                          "All Weather Risk Premia Harvesting",
                        ],
                        comingSoon: !1,
                      },
                      showLearnMoreButton: !1,
                    }),
                    (0, s.jsxs)(i.Z, {
                      children: [
                        (0, s.jsx)("div", {
                          className: "tw-py-8",
                          children: (0, s.jsxs)("div", {
                            className: "tw-mx-auto tw-max-w-7xl",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "tw-mb-8",
                                children: [
                                  (0, s.jsx)("h2", {
                                    className:
                                      "tw-mb-2 tw-text-2xl tw-font-bold tw-text-white",
                                    children: "Stratos Trading Cockpit",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "tw-text-ithaca-white-60",
                                    children:
                                      "Real-time portfolio performance and strategic positioning",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "tw-mb-8 tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-grid-cols-5",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-sm tw-font-medium tw-text-emerald-400",
                                        children: "Total Portfolio",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-2xl tw-font-bold tw-text-white",
                                        children:
                                          J.portfolioValue > 0
                                            ? "$".concat(
                                                J.portfolioValue.toLocaleString(
                                                  "en-US",
                                                  {
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits:
                                                      J.portfolioValue >= 1e3
                                                        ? 1
                                                        : 2,
                                                    notation:
                                                      J.portfolioValue >= 1e6
                                                        ? "compact"
                                                        : "standard",
                                                  }
                                                )
                                              )
                                            : "$0",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-xs tw-text-ithaca-white-40",
                                        children: "Vault Assets",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-sm tw-font-medium tw-text-emerald-400",
                                        children: "Active Strategies",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-2xl tw-font-bold tw-text-white",
                                        children: J.activePositions,
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-xs tw-text-blue-400",
                                        children: "Meta-agent allocation",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-sm tw-font-medium tw-text-emerald-400",
                                        children: "Median APY",
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "tw-text-2xl tw-font-bold tw-text-white",
                                        children: [J.medianAPY.toFixed(1), "%"],
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-xs tw-text-green-400",
                                        children: "Across constituent agents",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-sm tw-font-medium tw-text-emerald-400",
                                        children: "Risk Level",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "tw-text-2xl tw-font-bold tw-text-white",
                                        children: J.riskLevel,
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "tw-text-xs ".concat(
                                          "Low" === J.riskLevel
                                            ? "tw-text-green-400"
                                            : "Medium" === J.riskLevel
                                            ? "tw-text-yellow-400"
                                            : "tw-text-red-400"
                                        ),
                                        children: [
                                          "Composite score: ",
                                          q.aggressive.toFixed(1),
                                          "/10",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(E.Z, { nav: I, chartData: _ }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "tw-grid tw-grid-cols-1 tw-gap-6 lg:tw-grid-cols-3",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "lg:tw-col-span-2",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-6",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "tw-mb-6 tw-flex tw-items-center tw-justify-between",
                                          children: (0, s.jsx)("h3", {
                                            className:
                                              "tw-text-xl tw-font-bold tw-text-white",
                                            children: "Current Index",
                                          }),
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "tw-space-y-4",
                                          children: j
                                            .sort((t, e) => {
                                              let a = p.find(
                                                  (e) => e.id === t._id
                                                ),
                                                s = p.find(
                                                  (t) => t.id === e._id
                                                );
                                              return (
                                                ((null == s
                                                  ? void 0
                                                  : s.allocation) || 0) -
                                                ((null == a
                                                  ? void 0
                                                  : a.allocation) || 0)
                                              );
                                            })
                                            .map((t) => {
                                              let e = p.find(
                                                (e) => e.id === t._id
                                              );
                                              return (0, s.jsx)(
                                                A,
                                                {
                                                  agent: t,
                                                  showActiveTag: !0,
                                                  allocation:
                                                    null == e
                                                      ? void 0
                                                      : e.allocation,
                                                },
                                                t._id
                                              );
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "tw-space-y-6",
                                    children: [
                                      (0, s.jsx)("div", {
                                        children: (0, s.jsx)(c.Y, {
                                          className: "tw-pt-4",
                                          children: (0, s.jsx)(w.Z, {
                                            tabs: [
                                              {
                                                id: "selected-agents",
                                                label: "Selected Agents",
                                                content: (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(m.x, {
                                                    text: "Deposit",
                                                    description:
                                                      "Deposit funds and diversify across selected agents. Total: ".concat(
                                                        $,
                                                        "%"
                                                      ),
                                                    balance: {
                                                      amount: L,
                                                      currency: "USDC",
                                                      decimals: 6,
                                                    },
                                                    tokenIcon: {
                                                      src: g.Z.src,
                                                      alt: "USDC",
                                                    },
                                                    onSubmit: Q,
                                                    isTransactionPending: Z,
                                                    isTransactionCompleted: K,
                                                    setIsTransactionCompleted:
                                                      H,
                                                    setTransactionHash: V,
                                                    transactionHash: U,
                                                    tokenSymbol: "USDC",
                                                    type: "deposit",
                                                    currentAllowance: F,
                                                    refresh: P,
                                                    disabled: 100 !== $,
                                                    amount: G,
                                                    setAmount: X,
                                                  }),
                                                }),
                                              },
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-6",
                                        children: [
                                          (0, s.jsx)("h3", {
                                            className:
                                              "tw-mb-4 tw-text-lg tw-font-bold tw-text-white",
                                            children: "Strategy Allocation",
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "tw-space-y-3",
                                            children: p.map((t, e) => {
                                              let a = [
                                                "tw-bg-emerald-500",
                                                "tw-bg-blue-500",
                                                "tw-bg-purple-500",
                                                "tw-bg-yellow-500",
                                                "tw-bg-orange-500",
                                              ];
                                              return (0, s.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "tw-flex tw-items-center tw-justify-between",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "tw-flex tw-items-center tw-gap-2",
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "tw-h-3 tw-w-3 tw-rounded-full ".concat(
                                                              a[e % a.length]
                                                            ),
                                                        }),
                                                        (0, s.jsx)("span", {
                                                          className:
                                                            "tw-text-sm tw-text-white",
                                                          children: t.name,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("span", {
                                                      className:
                                                        "tw-text-sm tw-text-ithaca-white-60",
                                                      children: [
                                                        t.allocation,
                                                        "%",
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                t.id
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "tw-rounded-xl tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-6",
                                        children: [
                                          (0, s.jsx)("h3", {
                                            className:
                                              "tw-mb-4 tw-text-lg tw-font-bold tw-text-white",
                                            children: "Risk Monitor",
                                          }),
                                          (0, s.jsxs)("div", {
                                            className: "tw-space-y-4",
                                            children: [
                                              (0, s.jsxs)("div", {
                                                children: [
                                                  (0, s.jsxs)("div", {
                                                    className:
                                                      "tw-mb-2 tw-flex tw-justify-between tw-text-sm",
                                                    children: [
                                                      (0, s.jsx)("span", {
                                                        className:
                                                          "tw-text-ithaca-white-60",
                                                        children:
                                                          "Overall Strategy Profile",
                                                      }),
                                                      (0, s.jsx)("span", {
                                                        className:
                                                          "tw-text-green-400",
                                                        children:
                                                          "Weighted Average",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, s.jsx)(y.K, {
                                                    leftLabel: "Contrarian",
                                                    rightLabel: "Momentum",
                                                    value: q.contrarian,
                                                  }),
                                                ],
                                              }),
                                              (0, s.jsx)("div", {
                                                children: (0, s.jsx)(y.K, {
                                                  leftLabel: "Conservative",
                                                  rightLabel: "Aggressive",
                                                  value: q.aggressive,
                                                }),
                                              }),
                                              (0, s.jsx)("div", {
                                                children: (0, s.jsx)(y.K, {
                                                  leftLabel: "Introvert",
                                                  rightLabel: "Extrovert",
                                                  value: q.extrovert,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "tw-mx-auto md:tw-max-w-2xl lg:tw-max-w-6xl",
                          children: (0, s.jsxs)("div", {
                            className:
                              "tw-flex tw-flex-col tw-gap-6 tw-pb-10 lg:tw-flex-row",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "tw-space-y-4 lg:tw-mx-auto lg:tw-w-[70%]",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "tw-shrink-0 tw-space-y-4 lg:tw-w-[30%]",
                              }),
                            ],
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
    },
    function (t) {
      t.O(
        0,
        [
          5128, 9261, 4442, 5675, 7410, 9342, 2592, 4782, 9773, 1664, 7972, 41,
          7204, 1201, 6988, 2888, 9774, 179,
        ],
        function () {
          return t((t.s = 10658));
        }
      ),
        (_N_E = t.O());
    },
  ]);
