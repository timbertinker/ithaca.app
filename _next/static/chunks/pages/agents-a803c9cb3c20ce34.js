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
      (e._sentryDebugIds[t] = "2c48de4e-5dd8-4931-8d29-1829481676db"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2c48de4e-5dd8-4931-8d29-1829481676db"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1013],
    {
      68038: function (e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/agents",
          function () {
            return a(56143);
          },
        ]);
      },
      12180: function (e, t, a) {
        "use strict";
        a.d(t, {
          Tg: function () {
            return i;
          },
        });
        let i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e ? "".concat(e.slice(0, 7), "...").concat(e.slice(-5)) : "";
        };
      },
      63904: function (e, t, a) {
        "use strict";
        a.d(t, {
          d: function () {
            return r;
          },
        });
        var i = a(67294),
          s = a(92321),
          n = a(8768);
        let l = "ithaca_auth_signature",
          r = () => {
            let { address: e, isConnected: t } = (0, s.m)(),
              { signMessageAsync: a, isPending: r } = (0, n.Q)(),
              [o, d] = (0, i.useState)(!1),
              [c, w] = (0, i.useState)(null);
            (0, i.useEffect)(() => {
              if (t && e) {
                let t = localStorage.getItem("".concat(l, "_").concat(e));
                t ? (d(!0), w(t)) : (d(!1), w(null));
              } else d(!1), w(null);
            }, [t, e]);
            let u = async () => {
              if (e && !o)
                try {
                  let t = await a({
                    message:
                      "Sign this message to verify ownership of your agents on Ithaca Protocol",
                  });
                  localStorage.setItem("".concat(l, "_").concat(e), t),
                    d(!0),
                    w(t);
                } catch (e) {
                  console.error("Error signing message:", e);
                }
            };
            return {
              isAuthenticated: o,
              isSigningMessage: r,
              authenticate: u,
              clearAuthentication: () => {
                e &&
                  (localStorage.removeItem("".concat(l, "_").concat(e)),
                  d(!1),
                  w(null));
              },
              signature: c,
            };
          };
      },
      36180: function (e, t, a) {
        "use strict";
        a.d(t, {
          $: function () {
            return u;
          },
        });
        var i = a(67294),
          s = a(92321),
          n = a(48104),
          l = a(43210),
          r = a(81838),
          o = a(51700),
          d = a(59731);
        let c = r.O.AGENT_TOKEN_FACTORY,
          w = [
            {
              name: "getAgentsByManager",
              type: "function",
              inputs: [{ name: "manager", type: "address" }],
              outputs: [
                {
                  type: "tuple[]",
                  components: [
                    { name: "depositManager", type: "address" },
                    { name: "token", type: "address" },
                    { name: "tokenName", type: "string" },
                    { name: "assetValue", type: "uint256" },
                  ],
                },
              ],
              stateMutability: "view",
            },
          ],
          u = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              a =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              { address: r, isConnected: u, chain: g } = (0, s.m)(),
              m = (0, n.t)(),
              [h, v] = (0, i.useState)(null),
              [x, f] = (0, i.useState)(!1),
              [p, b] = (0, i.useState)(0),
              { extraAgents: y, addExtraAgents: j } = (0, d.qr)(),
              N = u && (null == g ? void 0 : g.id) === l.y.id,
              _ = async function (t) {
                let i =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
                if (!N || (!r && !t) || !m) return [];
                try {
                  let s = await m.readContract({
                    address: c,
                    abi: w,
                    functionName: "getAgentsByManager",
                    args: [t || r],
                  });
                  s.reverse();
                  let n = s.map((e) => e.depositManager),
                    l = new Map();
                  Object.values(y).forEach((e) => {
                    l.set(e._id.toLowerCase(), e);
                  }),
                    e.forEach((e) => {
                      l.set(e._id.toLowerCase(), e);
                    });
                  let d = [];
                  n.forEach((e) => {
                    l.has(e.toLowerCase()) || d.push(e);
                  });
                  let u = [];
                  if (d.length > 0 && a)
                    try {
                      u = await (0, o.j8)(d);
                      let e = new Set(u.map((e) => e._id.toLowerCase())),
                        t = d
                          .filter((t) => !e.has(t.toLowerCase()))
                          .map((e) => ({
                            _id: e,
                            name: "",
                            token: "",
                            description: "",
                            about: "",
                            image: "",
                            active: !1,
                            assetValue: BigInt(0),
                          })),
                        a = [...u, ...t];
                      a.forEach((e) => {
                        var t;
                        let a = l.get(e._id.toLowerCase());
                        l.set(e._id.toLowerCase(), {
                          ...e,
                          assetValue:
                            null !== (t = null == a ? void 0 : a.assetValue) &&
                            void 0 !== t
                              ? t
                              : BigInt(0),
                        });
                      }),
                        j(a);
                    } catch (e) {
                      console.error("Error fetching missing agent details:", e);
                    }
                  let g = s.map((e) => {
                    var t, a, i, s, n, r;
                    let o = l.get(e.depositManager.toLowerCase());
                    return {
                      ...o,
                      _id: e.depositManager,
                      name:
                        null !== (t = null == o ? void 0 : o.name) &&
                        void 0 !== t
                          ? t
                          : e.tokenName,
                      token:
                        null !== (a = null == o ? void 0 : o.token) &&
                        void 0 !== a
                          ? a
                          : e.token,
                      description:
                        null !== (i = null == o ? void 0 : o.description) &&
                        void 0 !== i
                          ? i
                          : "",
                      about:
                        null !== (s = null == o ? void 0 : o.about) &&
                        void 0 !== s
                          ? s
                          : "",
                      image:
                        null !== (n = null == o ? void 0 : o.image) &&
                        void 0 !== n
                          ? n
                          : "",
                      active: null == o ? void 0 : o.active,
                      assetValue:
                        null !== (r = e.assetValue) && void 0 !== r
                          ? r
                          : BigInt(0),
                    };
                  });
                  return (
                    i &&
                      (g = g.sort((e, t) => {
                        var a, i;
                        let s = BigInt(
                            null !== (a = e.assetValue) && void 0 !== a
                              ? a
                              : "0"
                          ),
                          n = BigInt(
                            null !== (i = t.assetValue) && void 0 !== i
                              ? i
                              : "0"
                          );
                        return s < n ? 1 : s > n ? -1 : 0;
                      })),
                    g
                  );
                } catch (e) {
                  return console.error("Error fetching agents:", e), [];
                }
              };
            return (
              (0, i.useEffect)(() => {
                t &&
                  (async () => {
                    f(!0);
                    try {
                      let e = await _();
                      v(e);
                    } finally {
                      f(!1);
                    }
                  })();
              }, [r, u, null == g ? void 0 : g.id, N, m, e, p, t]),
              {
                myAgents: h,
                loading: x,
                refresh: () => {
                  b((e) => e + 1);
                },
                fetchMyAgents: _,
              }
            );
          };
      },
      56143: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            __N_SSG: function () {
              return H;
            },
            default: function () {
              return K;
            },
          });
        var i = a(85893),
          s = a(27888),
          n = a(85292),
          l = a(67294),
          r = a(11163),
          o = a(27014),
          d = a(63904),
          c = a(41664),
          w = a.n(c),
          u = a(25675),
          g = a.n(u),
          m = a(68964),
          h = a(45113),
          v = a(12180);
        let x = "/images/agents/avatar2.jpg";
        var f = (e) => {
            var t, a;
            let { agent: s, showEdit: n, showActiveTag: l } = e,
              r = s.name || "",
              o = {
                ...s.prices,
                hourly:
                  (null === (t = s.prices) || void 0 === t
                    ? void 0
                    : t.hourly) || [],
                daily:
                  (null === (a = s.prices) || void 0 === a
                    ? void 0
                    : a.daily) || [],
              };
            return (0, i.jsxs)(w(), {
              href: n
                ? "/agents/".concat(s._id, "/edit")
                : "/agents/".concat(s._id),
              className:
                "tw-relative tw-block tw-rounded-2xl tw-border tw-border-ithaca-white-20 tw-bg-[#090D14]",
              children: [
                l &&
                  s.active &&
                  (0, i.jsx)("span", {
                    className:
                      "tw-absolute tw-left-3 tw-top-3 tw-z-10 tw-rounded tw-bg-ithaca-green-40 tw-px-2 tw-py-0.5 tw-text-xs tw-font-semibold tw-text-black tw-shadow",
                    children: "Active",
                  }),
                (0, i.jsxs)("div", {
                  className:
                    "tw-flex tw-flex-col tw-gap-6 tw-p-4 tw-transition-opacity hover:tw-opacity-80 lg:tw-flex-row lg:tw-items-center lg:tw-justify-between",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "tw-flex tw-flex-col tw-gap-4 md:tw-items-start lg:tw-max-w-[50%] lg:tw-flex-row lg:tw-gap-6",
                      children: (0, i.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-4 lg:tw-flex-row lg:tw-items-center lg:tw-gap-6",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "tw-relative tw-hidden tw-size-14 tw-shrink-0 tw-overflow-hidden tw-rounded-full md:tw-block md:tw-size-32 lg:tw-size-[140px]",
                            children: (0, i.jsx)(g(), {
                              width: 500,
                              height: 500,
                              alt: r,
                              src: s.image || x,
                              className: "tw-h-full tw-w-full tw-object-cover",
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "tw-flex tw-flex-col tw-gap-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "tw-hidden tw-space-y-2 md:tw-mt-4 md:tw-block",
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "tw-flex tw-items-center tw-gap-2 tw-space-y-2 tw-font-aeonik",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "tw-text-lg",
                                      children: s.name,
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "tw-text-sm tw-text-ithaca-white-60",
                                      children: (0, v.Tg)(s._id),
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "tw-flex tw-flex-row tw-items-center tw-gap-4 md:tw-hidden",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      " tw-relative tw-flex tw-size-14 tw-shrink-0 tw-flex-row tw-overflow-hidden tw-rounded-full sm:tw-flex md:tw-size-32 lg:tw-size-[140px]",
                                    children: (0, i.jsx)(g(), {
                                      width: 500,
                                      height: 500,
                                      alt: r,
                                      src: s.image || x,
                                      className:
                                        "tw-h-full tw-w-full tw-object-cover",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "tw-md:hidden tw-space-y-2 sm:tw-block md:tw-mt-4",
                                    children: (0, i.jsxs)("div", {
                                      className:
                                        "tw-flex tw-flex-col tw-gap-1 tw-font-aeonik lg:tw-flex-row lg:tw-items-center lg:tw-gap-2",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: "tw-text-lg",
                                          children: s.name,
                                        }),
                                        (0, i.jsxs)("div", {
                                          className:
                                            "tw-text-sm tw-text-ithaca-white-60",
                                          children: ["by ", (0, v.Tg)(s._id)],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "tw-line-clamp-4 tw-text-ithaca-white-80 md:tw-mt-2 lg:tw-max-w-64",
                                children: s.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "lg:tw-flex-shrink-0",
                      children: (0, i.jsx)(h.r, {
                        prices: o,
                        isPreview: !0,
                        isLoadingPrices: !1,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "tw-mt-4 lg:tw-w-[18%] lg:tw-min-w-[225px]",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "tw-mb-3 tw-text-sm tw-font-medium tw-text-ithaca-white-80",
                          children: "Agent Personality",
                        }),
                        (0, i.jsxs)("div", {
                          className: "tw-w-full tw-space-y-3",
                          children: [
                            (0, i.jsx)(m.K, {
                              leftLabel: "Contrarian",
                              rightLabel: "Momentum",
                              value: s.contrarian_momentum,
                            }),
                            (0, i.jsx)(m.K, {
                              leftLabel: "Conservative",
                              rightLabel: "Aggressive",
                              value: s.conservative_aggressive,
                            }),
                            (0, i.jsx)(m.K, {
                              leftLabel: "Introvert",
                              rightLabel: "Extrovert",
                              value: s.introvert_extrovert,
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
          p = (e) => {
            let { agents: t } = e,
              a = t.findIndex((e) => "MagicTrend" === e.name);
            return (0, i.jsx)("div", {
              className:
                "tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-1",
              children:
                t.length > 0
                  ? -1 !== a
                    ? [t[a], ...t.slice(0, a), ...t.slice(a + 1)].map((e) =>
                        (0, i.jsx)(
                          "div",
                          {
                            children: (0, i.jsx)(f, {
                              agent: e,
                              showActiveTag: !1,
                            }),
                          },
                          e._id
                        )
                      )
                    : t.map((e) =>
                        (0, i.jsx)(
                          "div",
                          {
                            children: (0, i.jsx)(f, {
                              agent: e,
                              showActiveTag: !1,
                            }),
                          },
                          e._id
                        )
                      )
                  : (0, i.jsx)("div", {
                      className: "tw-p-4 tw-text-ithaca-white-60",
                      children: "No agents found.",
                    }),
            });
          },
          b = a(65440),
          y = (e) => {
            let { isActive: t, myHoldings: a, loading: s } = e;
            return t
              ? s
                ? (0, i.jsx)("div", {
                    className:
                      "tw-flex tw-h-64 tw-items-center tw-justify-center",
                    children: (0, i.jsx)(b.Z, { type: "lg" }),
                  })
                : (0, i.jsx)("div", {
                    className:
                      "tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-1",
                    children:
                      Array.isArray(a) && a.length > 0
                        ? a.map((e) =>
                            (0, i.jsx)(
                              "div",
                              {
                                children: (0, i.jsx)(f, {
                                  agent: e,
                                  showActiveTag: !0,
                                }),
                              },
                              e._id
                            )
                          )
                        : (0, i.jsx)("div", {
                            className: "tw-p-4 tw-text-ithaca-white-60",
                            children: "No holdings found.",
                          }),
                  })
              : null;
          },
          j = (e) => {
            let { myAgents: t, loading: a, isActive: s } = e;
            return s
              ? a
                ? (0, i.jsx)("div", {
                    className:
                      "tw-flex tw-h-64 tw-items-center tw-justify-center",
                    children: (0, i.jsx)(b.Z, { type: "lg" }),
                  })
                : (0, i.jsx)("div", {
                    className:
                      "tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-1",
                    children:
                      Array.isArray(t) && t.length > 0
                        ? t.map((e) =>
                            (0, i.jsx)(
                              "div",
                              {
                                children: (0, i.jsx)(f, {
                                  agent: e,
                                  showEdit: !0,
                                  showActiveTag: !0,
                                }),
                              },
                              e._id
                            )
                          )
                        : (0, i.jsx)("div", {
                            className: "tw-p-4 tw-text-ithaca-white-60",
                            children: "No managed agents found.",
                          }),
                  })
              : null;
          },
          N = a(92321),
          _ = a(48104),
          E = a(43210),
          A = a(81838),
          S = a(51700),
          k = a(59731);
        let M = A.O.AGENT_TOKEN_FACTORY,
          C = [
            {
              name: "getAgentsByHolder",
              type: "function",
              inputs: [{ name: "holder", type: "address" }],
              outputs: [
                {
                  type: "tuple[]",
                  components: [
                    { name: "depositManager", type: "address" },
                    { name: "assetBalance", type: "uint256" },
                  ],
                },
              ],
              stateMutability: "view",
            },
          ],
          I = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              { address: a, isConnected: i, chain: s } = (0, N.m)(),
              n = (0, _.t)(),
              [r, o] = (0, l.useState)(null),
              [d, c] = (0, l.useState)(!1),
              [w, u] = (0, l.useState)(0),
              { extraAgents: g, addExtraAgents: m } = (0, k.qr)(),
              h = i && (null == s ? void 0 : s.id) === E.y.id;
            return (
              (0, l.useEffect)(() => {
                t &&
                  (async () => {
                    if ((c(!0), !h || !a || !n)) {
                      o([]), c(!1);
                      return;
                    }
                    try {
                      let t = await n.readContract({
                          address: M,
                          abi: C,
                          functionName: "getAgentsByHolder",
                          args: [a],
                        }),
                        i = new Map();
                      Object.values(g).forEach((e) => {
                        i.set(e._id.toLowerCase(), e);
                      }),
                        e.forEach((e) => {
                          i.set(e._id.toLowerCase(), e);
                        });
                      let s = [];
                      t.forEach((e) => {
                        i.has(e.depositManager.toLowerCase()) ||
                          s.push(e.depositManager);
                      });
                      let l = [];
                      if (s.length > 0)
                        try {
                          l = await (0, S.j8)(s);
                          let e = new Set(l.map((e) => e._id.toLowerCase())),
                            t = s
                              .filter((t) => !e.has(t.toLowerCase()))
                              .map((e) => ({
                                _id: e,
                                name: "",
                                token: "",
                                description: "",
                                about: "",
                                image: "",
                                active: !1,
                                assetValue: BigInt(0),
                              })),
                            a = [...l, ...t];
                          a.forEach((e) => {
                            i.set(e._id.toLowerCase(), e);
                          }),
                            m(a);
                        } catch (e) {
                          console.error(
                            "Error fetching missing agent details:",
                            e
                          );
                        }
                      let r = t.map((e) => {
                        var t, a, s, n, l, r;
                        let o = i.get(e.depositManager.toLowerCase());
                        return {
                          ...o,
                          _id: e.depositManager,
                          name:
                            null !== (t = null == o ? void 0 : o.name) &&
                            void 0 !== t
                              ? t
                              : "Agent ".concat(
                                  e.depositManager.substring(0, 6),
                                  "..."
                                ),
                          token:
                            null !== (a = null == o ? void 0 : o.token) &&
                            void 0 !== a
                              ? a
                              : "",
                          description:
                            null !== (s = null == o ? void 0 : o.description) &&
                            void 0 !== s
                              ? s
                              : "",
                          about:
                            null !== (n = null == o ? void 0 : o.about) &&
                            void 0 !== n
                              ? n
                              : "",
                          image:
                            null !== (l = null == o ? void 0 : o.image) &&
                            void 0 !== l
                              ? l
                              : "",
                          active: null == o ? void 0 : o.active,
                          assetValue:
                            null !== (r = e.assetBalance) && void 0 !== r
                              ? r
                              : BigInt(0),
                        };
                      });
                      (r = r.sort((e, t) => {
                        var a, i;
                        let s = BigInt(
                            null !== (a = e.assetValue) && void 0 !== a
                              ? a
                              : "0"
                          ),
                          n = BigInt(
                            null !== (i = t.assetValue) && void 0 !== i
                              ? i
                              : "0"
                          );
                        return s < n ? 1 : s > n ? -1 : 0;
                      })),
                        o(r);
                    } catch (e) {
                      console.error("Error fetching holdings:", e), o([]);
                    } finally {
                      console.log("useMyHoldings useEffect"), c(!1);
                    }
                  })();
              }, [a, i, null == s ? void 0 : s.id, h, n, e, w, t]),
              {
                myHoldings: r,
                loading: d,
                refresh: () => {
                  u((e) => e + 1);
                },
              }
            );
          };
        var L = a(36180),
          B = a(91594),
          T = (e) => {
            let { onClose: t } = e,
              {
                isSigningMessage: a,
                authenticate: s,
                isAuthenticated: n,
              } = (0, d.d)();
            return n
              ? null
              : (0, i.jsx)("div", {
                  className:
                    "tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black/50",
                  children: (0, i.jsxs)("div", {
                    className:
                      "tw-relative tw-w-full tw-max-w-md tw-rounded-2xl tw-bg-[#090D14] tw-p-6 tw-border tw-border-ithaca-white-20",
                    children: [
                      t &&
                        (0, i.jsx)("button", {
                          onClick: t,
                          className:
                            "tw-absolute tw-right-4 tw-top-4 tw-rounded-full tw-p-1.5 tw-text-ithaca-white-60 hover:tw-text-white tw-transition-colors",
                          children: (0, i.jsx)(B.Z, {
                            className: "tw-h-5 tw-w-5",
                          }),
                        }),
                      (0, i.jsx)("h3", {
                        className: "tw-text-xl tw-font-medium tw-mb-4",
                        children: "Verify Ownership",
                      }),
                      (0, i.jsx)("p", {
                        className: "tw-mb-6 tw-text-ithaca-white-80",
                        children:
                          "Please sign a message to verify ownership of your agents.",
                      }),
                      (0, i.jsx)("div", {
                        className: "tw-flex tw-justify-end",
                        children: (0, i.jsx)("button", {
                          onClick: s,
                          className:
                            "tw-px-6 tw-py-2 tw-rounded-lg tw-bg-ithaca-green-40 tw-text-black tw-font-medium",
                          disabled: a,
                          children: a ? "Signing..." : "Sign Message",
                        }),
                      }),
                    ],
                  }),
                });
          },
          F = (e) => {
            let { agents: t } = e,
              a = (0, r.useRouter)(),
              { isAuthenticated: s, signature: n } = (0, d.d)(),
              [c, w] = (0, l.useState)(!1),
              [u, g] = (0, l.useState)(!1),
              [m, h] = (0, l.useState)("agents"),
              { myHoldings: v, loading: x } = I(t, c),
              { myAgents: f, loading: b } = (0, L.$)(t, u);
            (0, l.useEffect)(() => {
              if (!a.isReady) return;
              let e = a.asPath.split("#")[1];
              e &&
                ("holdings" === e || "manage" === e) &&
                (h(e), "holdings" === e && w(!0), "manage" === e && g(!0));
            }, [a.isReady, a.asPath]),
              (0, l.useEffect)(() => {
                a.isReady &&
                  (async () => {
                    try {
                      "agents" === m
                        ? a.asPath.includes("#") &&
                          (await a.push(a.pathname, void 0, { shallow: !0 }))
                        : await a.push(
                            "".concat(a.pathname, "#").concat(m),
                            void 0,
                            { shallow: !0 }
                          );
                    } catch (e) {
                      e instanceof Error &&
                        "Cancel rendering route" !== e.message &&
                        console.error("Navigation error:", e);
                    }
                  })();
              }, [m, a.isReady]),
              (0, l.useEffect)(() => {
                "holdings" !== m || c || w(!0), "manage" !== m || u || g(!0);
              }, [m, c, u]);
            let N = "manage" === m && !s && !n,
              _ = (0, l.useMemo)(
                () => [
                  {
                    id: "agents",
                    label: "Agents",
                    content: (0, i.jsx)(p, { agents: t }),
                  },
                  {
                    id: "holdings",
                    label: "My Holdings",
                    content: c
                      ? (0, i.jsx)(y, {
                          isActive: "holdings" === m,
                          myHoldings: v,
                          loading: x,
                        })
                      : null,
                  },
                  {
                    id: "manage",
                    label: "Manage My Agents",
                    content: u
                      ? (0, i.jsx)(j, {
                          myAgents: f,
                          loading: b,
                          isActive: "manage" === m,
                        })
                      : null,
                  },
                ],
                [t, c, u, m, v, x, f, b]
              );
            return (0, i.jsxs)(i.Fragment, {
              children: [
                N && (0, i.jsx)(T, { onClose: () => h("agents") }),
                (0, i.jsx)(o.Z, {
                  tabs: _,
                  value: m,
                  onValueChange: (e) => h(e),
                }),
              ],
            });
          },
          P = a(66270),
          V = a(77615),
          O = a(84909),
          D = a(74991),
          R = a(75593),
          Z = a(48120);
        let z = A.O.DEPOSITS_ROUTER;
        var H = !0,
          K = (e) => {
            let { agents: t } = e,
              { referral: a } = (0, r.useRouter)().query,
              [o, d] = (0, l.useState)(void 0),
              c = [
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
              ].sort((e, t) => t.allocation - e.allocation),
              w = t.filter((e) => c.some((t) => t.id === e._id)),
              u = (e) => {
                var t;
                return (
                  (null == e
                    ? void 0
                    : null === (t = e.prices) || void 0 === t
                    ? void 0
                    : t.daily) || []
                );
              },
              g = (0, l.useMemo)(
                () =>
                  w
                    .map((e) => u(e))
                    .reduce(
                      (e, t) =>
                        0 === e.length
                          ? t.map((e) => e.time)
                          : e.filter((e) => t.some((t) => t.time === e)),
                      []
                    )
                    .map((e) => {
                      let t = w.reduce((t, a) => {
                        var i, s, n, l;
                        let r =
                          (null === (n = a.prices) || void 0 === n
                            ? void 0
                            : null === (s = n.daily) || void 0 === s
                            ? void 0
                            : null === (i = s.find((t) => t.time === e)) ||
                              void 0 === i
                            ? void 0
                            : i.price) || 0;
                        return (
                          t +
                          (((null === (l = c.find((e) => e.id === a._id)) ||
                          void 0 === l
                            ? void 0
                            : l.allocation) || 0) /
                            100) *
                            r
                        );
                      }, 0);
                      return { time: e, price: 100 * t };
                    }),
                [w]
              ),
              m = g[g.length - 1],
              h = w
                .map((e) => {
                  var t;
                  let a = m.price,
                    i =
                      (null === (t = c.find((t) => t.id === e._id)) ||
                      void 0 === t
                        ? void 0
                        : t.allocation) || 0;
                  return {
                    id: e._id,
                    nav: (i / 100) * a,
                    name: e.name,
                    allocation: i,
                  };
                })
                .sort((e, t) => t.allocation - e.allocation)
                .reduce((e, t) => (e += t.nav), 0),
              { usdcBalance: v, usdcAllowance: x, refresh: f } = (0, D.h)(w[0]),
              { writeContractAsync: p } = (0, R.S)(),
              [b, y] = (0, l.useState)(!1),
              [j, N] = (0, l.useState)(!1),
              [_, E] = (0, l.useState)(),
              [A, k] = (0, l.useState)(""),
              M = async (e) => {
                y(!0);
                try {
                  let t = w.map((e) => (0, S.l0)(e._id)),
                    a = await Promise.all(t);
                  if (a.some((e) => "string" == typeof e))
                    throw Error("Failed to get signatures for all agents");
                  let i = w.map((t, i) => {
                      let s = a[i],
                        n = c.find((e) => e.id === t._id),
                        l = (null == n ? void 0 : n.allocation) || 0,
                        r = (parseFloat(e) * l) / 100,
                        o = (0, Z.v)(r.toString(), 6);
                      return {
                        depositManager: t._id,
                        amount: o,
                        newExternalBalance: BigInt(s.balance),
                        blockNumber: BigInt(s.block_number),
                        signature: s.signature,
                      };
                    }),
                    s = await p({
                      address: z,
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
                                { name: "newExternalBalance", type: "uint256" },
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
                      args: [i, o || ""],
                    });
                  s && (E(s), N(!0), f && (await f()));
                } catch (e) {
                  console.error("Multi-agent deposit failed:", e);
                } finally {
                  y(!1);
                }
              },
              C = (() => {
                if (0 === w.length)
                  return { contrarian: 0, aggressive: 0, extrovert: 0 };
                let e = 0,
                  t = 0,
                  a = 0;
                return (
                  w.forEach((i) => {
                    let s = c.find((e) => e.id === i._id);
                    if (s) {
                      let n = s.allocation / 100;
                      (e += (i.contrarian_momentum || 0) * n),
                        (t += (i.conservative_aggressive || 0) * n),
                        (a += (i.introvert_extrovert || 0) * n);
                    }
                  }),
                  {
                    contrarian: Math.round(10 * e) / 10,
                    aggressive: Math.round(10 * t) / 10,
                    extrovert: Math.round(10 * a) / 10,
                  }
                );
              })(),
              I = (() => {
                let e = w.reduce((e, t) => {
                    var a;
                    return (
                      e +
                      ((null === (a = t.prices) || void 0 === a
                        ? void 0
                        : a.assets) || 0)
                    );
                  }, 0),
                  t = w.length,
                  a = w
                    .filter((e) => {
                      var t;
                      return (
                        (null === (t = e.prices) || void 0 === t
                          ? void 0
                          : t.nav_return) !== void 0
                      );
                    })
                    .map((e) => e.prices.nav_return)
                    .sort((e, t) => e - t);
                return {
                  portfolioValue: e,
                  activePositions: t,
                  medianAPY:
                    100 *
                    (a.length > 0
                      ? a.length % 2 == 0
                        ? (a[a.length / 2 - 1] + a[a.length / 2]) / 2
                        : a[Math.floor(a.length / 2)]
                      : 0),
                  riskLevel:
                    C.aggressive <= 3
                      ? "Low"
                      : C.aggressive <= 6
                      ? "Medium"
                      : "High",
                };
              })();
            return (
              (0, l.useEffect)(() => {
                if ("string" == typeof a && a)
                  d(a), localStorage.setItem("referral", a);
                else {
                  let e = localStorage.getItem("referral");
                  e && d(e);
                }
              }, [a]),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(P.Z, {}),
                  (0, i.jsxs)(s.Z, {
                    children: [
                      (0, i.jsx)(V.Z, {
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
                        showLearnMoreButton: !0,
                        showDepositForm: !0,
                        depositProps: {
                          usdcBalance: v,
                          usdcAllowance: x,
                          onSubmit: M,
                          isTransactionPending: b,
                          isTransactionCompleted: j,
                          transactionHash: _,
                          setIsTransactionCompleted: N,
                          setTransactionHash: E,
                          refresh: f,
                          disabled: !1,
                          depositAmount: A,
                          setDepositAmount: k,
                        },
                      }),
                      (0, i.jsx)(n.Z, {
                        children: (0, i.jsxs)("div", {
                          className:
                            "tw-mx-auto md:tw-max-w-2xl lg:tw-max-w-6xl",
                          children: [
                            (0, i.jsx)("div", {
                              className: "tw-py-8",
                              children: (0, i.jsxs)("div", {
                                className: "tw-mx-auto tw-max-w-7xl",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "tw-mb-8",
                                    children: [
                                      (0, i.jsx)("h2", {
                                        className:
                                          "tw-mb-2 tw-text-2xl tw-font-bold tw-text-white",
                                        children: "Stratos Trading Cockpit",
                                      }),
                                      (0, i.jsx)("p", {
                                        className: "tw-text-ithaca-white-60",
                                        children:
                                          "Real-time portfolio performance and strategic positioning",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "tw-mb-8 tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-grid-cols-5",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-sm tw-font-medium tw-text-emerald-400",
                                            children: "Total Portfolio",
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-2xl tw-font-bold tw-text-white",
                                            children:
                                              I.portfolioValue > 0
                                                ? "$".concat(
                                                    I.portfolioValue.toLocaleString(
                                                      "en-US",
                                                      {
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits:
                                                          I.portfolioValue >=
                                                          1e3
                                                            ? 1
                                                            : 2,
                                                        notation:
                                                          I.portfolioValue >=
                                                          1e6
                                                            ? "compact"
                                                            : "standard",
                                                      }
                                                    )
                                                  )
                                                : "$0",
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-xs tw-text-ithaca-white-40",
                                            children: "Vault Assets",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-sm tw-font-medium tw-text-emerald-400",
                                            children: "Active Strategies",
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-2xl tw-font-bold tw-text-white",
                                            children: I.activePositions,
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-xs tw-text-blue-400",
                                            children: "Meta-agent allocation",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-sm tw-font-medium tw-text-emerald-400",
                                            children: "Median APY",
                                          }),
                                          (0, i.jsxs)("div", {
                                            className:
                                              "tw-text-2xl tw-font-bold tw-text-white",
                                            children: [
                                              I.medianAPY.toFixed(1),
                                              "%",
                                            ],
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-xs tw-text-green-400",
                                            children:
                                              "Across constituent agents",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-sm tw-font-medium tw-text-emerald-400",
                                            children: "Risk Level",
                                          }),
                                          (0, i.jsx)("div", {
                                            className:
                                              "tw-text-2xl tw-font-bold tw-text-white",
                                            children: I.riskLevel,
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: "tw-text-xs ".concat(
                                              "Low" === I.riskLevel
                                                ? "tw-text-green-400"
                                                : "Medium" === I.riskLevel
                                                ? "tw-text-yellow-400"
                                                : "tw-text-red-400"
                                            ),
                                            children: [
                                              "Composite score: ",
                                              C.aggressive.toFixed(1),
                                              "/10",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(O.Z, { nav: h, chartData: g }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "tw-pb-10",
                              children: (0, i.jsx)(F, { agents: t }),
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
      91594: function (e, t, a) {
        "use strict";
        var i = a(67294);
        let s = i.forwardRef(function (e, t) {
          let { title: a, titleId: s, ...n } = e;
          return i.createElement(
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
                "aria-labelledby": s,
              },
              n
            ),
            a ? i.createElement("title", { id: s }, a) : null,
            i.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12",
            })
          );
        });
        t.Z = s;
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 9261, 4442, 5675, 7410, 9342, 2592, 4782, 9773, 1664, 7972, 41,
          7204, 1201, 6988, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 68038));
        }
      ),
        (_N_E = e.O());
    },
  ]);
