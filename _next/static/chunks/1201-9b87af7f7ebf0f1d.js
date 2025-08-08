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
      (t._sentryDebugIds[e] = "d9317475-d91a-4f69-929f-6a273253a8da"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-d9317475-d91a-4f69-929f-6a273253a8da"));
  } catch (t) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1201, 6656],
    {
      27426: function (t, e) {
        "use strict";
        e.Z = {
          src: "/_next/static/media/usdc.46aae6ec.png",
          height: 24,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVBc8I9csSMq9xMaXE3b8Uxab9VhMswasQwacAxa8V/p+SBo9mXtOBHesdPgMqpwOXAv1CQAAAACnRSTlMt+PkA8LX+rrOweGo/nwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwlyscNADEMxECu5Sg59N/tQbgfAQ5GkyYG1fv1CsNLRPGF9nlxtjLi3S3Wv0bi2xMbU2rYBzsuAaTbe0uKAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      },
      48593: function (t, e, a) {
        "use strict";
        var n = a(85893);
        e.Z = (t) => {
          let {
            children: e,
            className: a = "",
            variant: i = "primary",
            loading: o = !1,
            ...r
          } = t;
          return (0, n.jsx)("button", {
            className:
              "tw-w-full tw-rounded-lg tw-px-4 tw-py-3.5 tw-font-medium disabled:tw-cursor-not-allowed disabled:tw-opacity-50 "
                .concat(
                  "primary" === i
                    ? "tw-bg-ithaca-green-50 tw-text-black hover:tw-bg-opacity-90"
                    : "secondary" === i
                    ? "tw-bg-transparent tw-border tw-border-rgba-white-8 tw-text-white hover:tw-bg-background-dark-2"
                    : "tw-bg-[#5D3FD3] tw-text-white hover:tw-bg-opacity-50",
                  " "
                )
                .concat(a),
            ...r,
            children: (0, n.jsxs)("div", {
              className: "tw-flex tw-items-center tw-justify-center tw-gap-2",
              children: [
                o &&
                  (0, n.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    className: "tw-animate-spin",
                    children: [
                      (0, n.jsx)("g", {
                        clipPath: "url(#clip0_spinner)",
                        children: (0, n.jsx)("path", {
                          d: "M10.5 2.5C11.5467 2.98816 12.4322 3.76514 13.0522 4.73951C13.6723 5.71387 14.0011 6.84508 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8C1.99892 6.84508 2.32775 5.71387 2.9478 4.73951C3.56785 3.76514 4.45332 2.98816 5.5 2.5",
                          stroke: "primary" === i ? "#000000" : "#22C55E",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                      (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                          id: "clip0_spinner",
                          children: (0, n.jsx)("rect", {
                            width: "16",
                            height: "16",
                            fill: "white",
                          }),
                        }),
                      }),
                    ],
                  }),
                e,
              ],
            }),
          });
        };
      },
      29528: function (t, e, a) {
        "use strict";
        a.d(e, {
          x: function () {
            return f;
          },
        });
        var n = a(85893),
          i = a(67294),
          o = a(25675),
          r = a.n(o),
          s = a(48120),
          l = a(15229),
          c = a(81838),
          d = a(20210),
          u = a(67930);
        let w = c.O.USDC,
          m = c.O.DEPOSITS_ROUTER,
          f = (t) => {
            let {
                text: e,
                description: a,
                balance: o,
                tokenIcon: c,
                onSubmit: f,
                refresh: p,
                isTransactionPending: h,
                isTransactionCompleted: v,
                transactionHash: x,
                setIsTransactionCompleted: g,
                setTransactionHash: b,
                amount: y,
                setAmount: j,
                disabled: A = !1,
                confirmationContent: C,
                spenderAddress: _,
                currentAllowance: N = BigInt(0),
                tokenAddress: k,
                totalAssets: S,
                successContent: I,
              } = t,
              [E, F] = (0, i.useState)(""),
              M = void 0 !== y ? y : E,
              B = void 0 !== j ? j : F,
              L = M ? (0, s.v)(M, o.decimals) : BigInt(0),
              D = (S ? Number(S) : 0) >= u.Kz,
              T = async () => {
                try {
                  return await f(M), !0;
                } catch (t) {
                  throw (console.error("Transaction failed:", t), t);
                }
              },
              O = !M || A || D,
              P = [
                {
                  label: D ? "Vault Full - Coming Soon" : e,
                  isCompleted: v,
                  onAction: T,
                },
              ],
              U = (0, n.jsxs)("div", {
                className: "tw-mb-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2",
                    children: (0, n.jsxs)("div", {
                      className:
                        "tw-font-aeonik tw-text-sm tw-text-ithaca-white-60",
                      children: ["You ", e],
                    }),
                  }),
                  M &&
                    c &&
                    (0, n.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-center tw-gap-2 tw-mt-2",
                      children: [
                        (0, n.jsx)("div", {
                          className: "tw-relative",
                          children: (0, n.jsx)(r(), {
                            width: 32,
                            height: 32,
                            alt: c.alt,
                            src: c.src,
                            className: "tw-rounded-full",
                          }),
                        }),
                        (0, n.jsx)("span", {
                          className: "tw-text-[34px] tw-font-normal",
                          children: M,
                        }),
                      ],
                    }),
                ],
              });
            return (0, n.jsxs)("div", {
              className: "tw-space-y-4",
              children: [
                (0, n.jsx)("div", {
                  className: "tw-text-md tw-text-gray-400",
                  children: a,
                }),
                (0, n.jsxs)("div", {
                  className: "tw-space-y-2 tw-pt-3",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-between tw-text-sm",
                      children: [
                        (0, n.jsx)("span", { children: "Available Balance" }),
                        (0, n.jsxs)("span", {
                          children: [
                            ((t, e) => {
                              if (void 0 === t) return "-";
                              let a = (0, l.b)(t, o.decimals);
                              return new Intl.NumberFormat("en-US", {
                                style: "decimal",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2,
                              }).format(Number(a));
                            })(o.amount, o.currency),
                            " ",
                            o.currency,
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "tw-relative",
                      children: [
                        c &&
                          (0, n.jsx)(r(), {
                            width: 20,
                            height: 20,
                            alt: c.alt,
                            src: c.src,
                            className:
                              "tw-pointer-events-none tw-absolute tw-left-2 tw-top-1/2 tw-z-[1] tw-size-5 -tw-translate-y-1/2 tw-rounded-full",
                          }),
                        (0, n.jsx)("input", {
                          type: "number",
                          name: "amount",
                          value: M,
                          onChange: (t) => B(t.target.value),
                          inputMode: "decimal",
                          placeholder: "0.00",
                          disabled: D,
                          className:
                            "tw-w-full tw-rounded-lg tw-border tw-border-white/[0.12] tw-bg-[#0A0D10] tw-p-2 "
                              .concat(
                                c ? "tw-pl-9" : "",
                                " tw-text-white tw-text-lg tw-outline-none tw-ring-0 placeholder:tw-text-white "
                              )
                              .concat(
                                D ? "tw-opacity-50 tw-cursor-not-allowed" : ""
                              ),
                        }),
                        (0, n.jsx)("button", {
                          onClick: () => {
                            void 0 !== o.amount
                              ? B((0, l.b)(o.amount, o.decimals))
                              : B("");
                          },
                          disabled: D,
                          className:
                            "tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2 tw-text-sm tw-text-ithaca-green-50 ".concat(
                              D ? "tw-opacity-50 tw-cursor-not-allowed" : ""
                            ),
                          children: "MAX",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(d.v, {
                  text: D ? "Vault Full - Coming Soon" : e,
                  balance: o,
                  tokenIcon: c,
                  onSubmit: f,
                  refresh: p,
                  isTransactionCompleted: v,
                  transactionHash: x,
                  setIsTransactionCompleted: g,
                  setTransactionHash: b,
                  amount: M,
                  setAmount: B,
                  disabled: O,
                  confirmationContent: C || U,
                  steps: P,
                  tokenAddress: k || w,
                  spenderAddress: _ || m,
                  currentAllowance: N,
                  requiredAmount: L,
                  successContent: I,
                }),
              ],
            });
          };
      },
      20210: function (t, e, a) {
        "use strict";
        a.d(e, {
          v: function () {
            return S;
          },
        });
        var n,
          i,
          o,
          r = a(85893),
          s = a(67294),
          l = a(14504);
        a(15229);
        var c = a(92321),
          d = a(55143),
          u = a(48104),
          w = a(75593),
          m = a(15615),
          f = a(25675),
          p = a.n(f),
          h = a(46656);
        function v() {
          return (v = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var a = arguments[e];
                  for (var n in a)
                    ({}.hasOwnProperty.call(a, n) && (t[n] = a[n]));
                }
                return t;
              }).apply(null, arguments);
        }
        var x = function (t) {
          return s.createElement(
            "svg",
            v(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 12,
                height: 9,
                fill: "none",
              },
              t
            ),
            n ||
              (n = s.createElement("path", {
                stroke: "#71717A",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "m1 5 2.667 2.667L10.333 1",
              }))
          );
        };
        function g() {
          return (g = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var a = arguments[e];
                  for (var n in a)
                    ({}.hasOwnProperty.call(a, n) && (t[n] = a[n]));
                }
                return t;
              }).apply(null, arguments);
        }
        var b = function (t) {
            return s.createElement(
              "svg",
              g(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 120,
                  height: 120,
                  fill: "none",
                },
                t
              ),
              i ||
                (i = s.createElement(
                  "g",
                  { clipPath: "url(#submitted-icon_svg__a)" },
                  s.createElement("path", {
                    fill: "#22C55E",
                    d: "M60 105c24.853 0 45-20.147 45-45S84.853 15 60 15 15 35.147 15 60s20.147 45 45 45",
                    opacity: 0.2,
                  }),
                  s.createElement("path", {
                    stroke: "#22C55E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 4,
                    d: "M60 105c24.853 0 45-20.147 45-45S84.853 15 60 15 15 35.147 15 60s20.147 45 45 45",
                  }),
                  s.createElement("path", {
                    stroke: "#22C55E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 4,
                    d: "m45 56.25 15-15 15 15M60 78.75v-37.5",
                  })
                )),
              o ||
                (o = s.createElement(
                  "defs",
                  null,
                  s.createElement(
                    "clipPath",
                    { id: "submitted-icon_svg__a" },
                    s.createElement("path", {
                      fill: "#fff",
                      d: "M0 0h120v120H0z",
                    })
                  )
                ))
            );
          },
          y = a(46111),
          j = a(48593),
          A = a(5152),
          C = a.n(A),
          _ = a(28966);
        let N = BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          ),
          k = C()(
            () =>
              Promise.resolve((t) => {
                let {
                  isConnected: e,
                  text: a,
                  disabled: n,
                  handleSubmit: i,
                  handleConnectWallet: o,
                  variant: s,
                } = t;
                return e
                  ? (0, r.jsx)(j.Z, {
                      disabled: n,
                      onClick: i,
                      variant: s,
                      children: a,
                    })
                  : (0, r.jsx)(j.Z, { onClick: o, children: "Connect Wallet" });
              }),
            { ssr: !1 }
          ),
          S = (t) => {
            let e,
              {
                text: a,
                balance: n,
                tokenIcon: i,
                onSubmit: o,
                refresh: f,
                isTransactionCompleted: v,
                transactionHash: g,
                setIsTransactionCompleted: A,
                setTransactionHash: C,
                amount: S,
                setAmount: I,
                disabled: E = !1,
                confirmationContent: F,
                steps: M,
                tokenAddress: B,
                spenderAddress: L,
                currentAllowance: D = BigInt(0),
                requiredAmount: T = BigInt(0),
                variant: O,
                successContent: P,
                onCloseModal: U,
                isOpen: Z,
                onOpenModal: R,
              } = t,
              { isConnected: W, chain: z } = (0, c.m)(),
              { openConnectModal: V } = (0, m.We)(),
              { switchChain: H } = (0, d.o)(),
              K = (0, u.t)(),
              { writeContractAsync: G } = (0, w.S)(),
              [Q, X] = (0, s.useState)(!1),
              [q, J] = (0, s.useState)(null),
              Y = (null == z ? void 0 : z.id) === 42161,
              $ = B && L && T > D,
              tt = async () => {
                if (H) return H({ chainId: 42161 });
              },
              te = async () => {
                if (B && L)
                  try {
                    let t = await G({
                      address: B,
                      abi: l.Wo,
                      functionName: "approve",
                      args: [L, N],
                    });
                    if (K) {
                      let e = await K.waitForTransactionReceipt({ hash: t });
                      console.log("Approval receipt:", e);
                    }
                    return f && (await f()), !0;
                  } catch (t) {
                    throw (console.error("Approval failed:", t), t);
                  }
              },
              ta = async (t) => {
                let e = [];
                Y ||
                  e.push({
                    label: "Switch to Arbitrum",
                    isCompleted: Y,
                    onAction: tt,
                  }),
                  B &&
                    L &&
                    e.push({
                      label: "Approve ".concat(
                        (null == n ? void 0 : n.currency) || "token"
                      ),
                      isCompleted: !$,
                      onAction: $ ? te : void 0,
                    }),
                  M
                    ? (e = [...e, ...M])
                    : e.push({
                        label: a,
                        isCompleted: v,
                        onAction: async () => o(S || ""),
                      });
                let i = e[t];
                if (null == i ? void 0 : i.onAction) {
                  J(t);
                  try {
                    await i.onAction(), J(null);
                  } catch (a) {
                    let e;
                    if (
                      ("object" == typeof a &&
                        null !== a &&
                        (e = a.data || (a.cause && a.cause.data)),
                      e && "string" == typeof e)
                    ) {
                      let n = (0, _.rL)(e);
                      console.error(
                        "Error executing step ".concat(t, ":"),
                        a,
                        "(Decoded: ".concat(n, ")")
                      );
                    } else
                      console.error("Error executing step ".concat(t, ":"), a);
                    J(null);
                  }
                }
              },
              tn = (0, r.jsxs)("div", {
                className: "tw-mb-0",
                children: [
                  (0, r.jsx)("div", {
                    className: "tw-flex tw-flex-col tw-items-center tw-gap-2",
                    children: (0, r.jsxs)("div", {
                      className:
                        "tw-font-aeonik tw-text-sm tw-text-ithaca-white-60",
                      children: ["You ", a],
                    }),
                  }),
                  S &&
                    i &&
                    (0, r.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-center tw-gap-2 tw-mt-2",
                      children: [
                        (0, r.jsx)("div", {
                          className: "tw-relative",
                          children: (0, r.jsx)(p(), {
                            width: 32,
                            height: 32,
                            alt: i.alt,
                            src: i.src,
                            className: "tw-rounded-full",
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "tw-text-[34px] tw-font-normal",
                          children: S,
                        }),
                      ],
                    }),
                ],
              }),
              ti =
                ((e = []),
                Y ||
                  e.push({
                    label: "Switch to Arbitrum",
                    isCompleted: Y,
                    onAction: tt,
                  }),
                B &&
                  L &&
                  e.push({
                    label: "Approve ".concat(
                      (null == n ? void 0 : n.currency) || "token"
                    ),
                    isCompleted: !$,
                    onAction: $ ? te : void 0,
                  }),
                M
                  ? (e = [...e, ...M])
                  : e.push({
                      label: a,
                      isCompleted: v,
                      onAction: async () => {
                        o(S || "");
                      },
                    }),
                e.map((t, e) => ({
                  label: t.label,
                  isCompleted: t.isCompleted,
                  isPending: q === e,
                  action: t.onAction && !t.isCompleted ? () => ta(e) : void 0,
                }))),
              to = ti.every((t) => t.isCompleted),
              tr = ti.find((t) => !t.isCompleted);
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(k, {
                  isConnected: W,
                  text: a,
                  disabled: E,
                  handleSubmit: () => {
                    R ? R() : "boolean" != typeof Z && X(!0);
                  },
                  handleConnectWallet: () => {
                    V && V();
                  },
                  variant: O,
                }),
                (0, r.jsx)(h.default, {
                  title: (0, r.jsx)("span", {
                    className:
                      "tw-text-lg tw-font-aeonik tw-font-normal tw-text-white",
                    children: a,
                  }),
                  isOpen: "boolean" == typeof Z ? Z : Q,
                  onCloseModal: () => {
                    "boolean" != typeof Z && X(!1),
                      J(null),
                      I && I(""),
                      A(!1),
                      C(void 0),
                      f && f(),
                      U && U();
                  },
                  onSubmitOrder: null == tr ? void 0 : tr.action,
                  hideFooter: !0,
                  children: (0, r.jsx)("div", {
                    className:
                      "tw-flex tw-min-w-[360px] tw-flex-col tw-gap-6 tw-p-4",
                    children:
                      v && g
                        ? (0, r.jsxs)("div", {
                            className:
                              "tw-flex tw-flex-col tw-items-center tw-gap-4",
                            children: [
                              (0, r.jsx)(b, {}),
                              (0, r.jsx)("div", {
                                className:
                                  "tw-text-center tw-font-aeonik tw-text-xl tw-text-white",
                                children: "Transaction Submitted",
                              }),
                              (0, r.jsx)("div", {
                                className: "tw-py-4",
                                children: (0, r.jsxs)("a", {
                                  href: "https://arbiscan.io/tx/".concat(g),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "tw-flex tw-items-center tw-justify-center tw-gap-2 tw-text-center tw-text-sm tw-text-white hover:tw-text-ithaca-white-80",
                                  children: [
                                    "View on Explorer ",
                                    (0, r.jsx)(y.Z, { className: "tw-size-4" }),
                                  ],
                                }),
                              }),
                              P &&
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-w-full tw-flex tw-justify-center",
                                  children: P,
                                }),
                            ],
                          })
                        : !to &&
                          (0, r.jsxs)("div", {
                            className:
                              1 === ti.length
                                ? "tw-flex tw-flex-col tw-gap-3"
                                : "tw-flex tw-flex-col tw-gap-6",
                            children: [
                              F || tn,
                              ti.length > 0 &&
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-flex-col tw-gap-4 tw-rounded-xl tw-border tw-border-gray-700 tw-p-4",
                                  children: ti.map((t, e) =>
                                    (0, r.jsxs)(
                                      "div",
                                      {
                                        className: "tw-relative",
                                        children: [
                                          0 !== e &&
                                            (0, r.jsx)("div", {
                                              className:
                                                "tw-absolute tw--top-[14px] tw-left-3 tw-h-[14px] tw-w-[2px] tw-border-l tw-border-dashed tw-border-gray-600",
                                            }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "tw-flex tw-items-center tw-justify-between tw-py-2",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className:
                                                  "tw-flex tw-items-center tw-gap-4",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "tw-flex tw-size-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#27272A] tw-font-medium ".concat(
                                                        t.isCompleted
                                                          ? "tw-text-[#27272A]"
                                                          : " tw-text-white"
                                                      ),
                                                    children: t.isCompleted
                                                      ? (0, r.jsx)(x, {})
                                                      : (0, r.jsx)("span", {
                                                          className: "".concat(
                                                            t.isCompleted ||
                                                              (null == tr
                                                                ? void 0
                                                                : tr.label) !==
                                                                t.label
                                                              ? "tw-text-gray-500"
                                                              : "tw-text-white"
                                                          ),
                                                          children: e + 1,
                                                        }),
                                                  }),
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "tw-font-aeonik tw-text-md ".concat(
                                                        t.isCompleted ||
                                                          (null == tr
                                                            ? void 0
                                                            : tr.label) !==
                                                            t.label
                                                          ? "tw-text-gray-500"
                                                          : "tw-text-white"
                                                      ),
                                                    children: t.label,
                                                  }),
                                                ],
                                              }),
                                              t.isPending &&
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "tw-rounded-md tw-bg-transparent tw-px-3 tw-py-1 tw-text-sm tw-text-black",
                                                  children: (0, r.jsxs)("svg", {
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    className:
                                                      "tw-animate-spin",
                                                    children: [
                                                      (0, r.jsx)("g", {
                                                        clipPath:
                                                          "url(#clip0_210_18172)",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            d: "M10.5 2.5C11.5467 2.98816 12.4322 3.76514 13.0522 4.73951C13.6723 5.71387 14.0011 6.84508 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8C1.99892 6.84508 2.32775 5.71387 2.9478 4.73951C3.56785 3.76514 4.45332 2.98816 5.5 2.5",
                                                            stroke: "#22C55E",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsx)("defs", {
                                                        children: (0, r.jsx)(
                                                          "clipPath",
                                                          {
                                                            id: "clip0_210_18172",
                                                            children: (0,
                                                            r.jsx)("rect", {
                                                              width: "16",
                                                              height: "16",
                                                              fill: "white",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                }),
                              (null == tr ? void 0 : tr.action) &&
                                (0, r.jsx)(j.Z, {
                                  onClick: tr.action,
                                  disabled: null !== q,
                                  variant: O,
                                  children: tr.label.split(" ")[0],
                                }),
                            ],
                          }),
                  }),
                }),
              ],
            });
          };
      },
      27531: function (t, e, a) {
        "use strict";
        var n = a(85893);
        e.Z = () =>
          (0, n.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, n.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, n.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      66270: function (t, e, a) {
        "use strict";
        var n = a(85893),
          i = a(9008),
          o = a.n(i);
        e.Z = (t) => {
          let {
              agentName: e = "AI Trading Agents",
              imageUrl:
                a = "https://canary-ithacaprotocol.vercel.app/images/agents/01.png",
              agentId: i = "",
              description:
                r = "Unlock the power of AI trading agents on Ithaca. Create, manage, and optimize automated crypto trading strategies with advanced AI for effortless digital asset growth. Build secure, customizable solutions for maximum returns.",
            } = t,
            s = "https://app.ithacaprotocol.io/",
            l = "".concat(e, " | Systematic Crypto Trading | Ithaca Protocol");
          return (0, n.jsxs)(o(), {
            children: [
              (0, n.jsx)("title", { children: l }),
              (0, n.jsx)("meta", { name: "description", content: r }),
              (0, n.jsx)("meta", { property: "og:title", content: l }),
              (0, n.jsx)("meta", { property: "og:description", content: r }),
              (0, n.jsx)("meta", { property: "og:type", content: "website" }),
              (0, n.jsx)("meta", {
                property: "og:url",
                content: "".concat(s, "agents/").concat(i),
              }),
              (0, n.jsx)("meta", {
                property: "og:site_name",
                content: "Ithaca Protocol",
              }),
              (0, n.jsx)("meta", { property: "og:image", content: a }),
              (0, n.jsx)("meta", { property: "og:logo", content: a }),
              (0, n.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, n.jsx)("meta", { name: "twitter:title", content: l }),
              (0, n.jsx)("meta", { name: "twitter:description", content: r }),
              (0, n.jsx)("meta", { name: "twitter:image", content: a }),
              (0, n.jsx)("meta", {
                name: "twitter:site",
                content: "@IthacaProtocol",
              }),
              (0, n.jsx)("meta", { name: "twitter:domain", content: s }),
            ],
          });
        };
      },
      46656: function (t, e, a) {
        "use strict";
        a.r(e);
        var n = a(85893),
          i = a(93967),
          o = a.n(i),
          r = a(67294),
          s = a(43495),
          l = a(51526),
          c = a(73935),
          d = a(37422),
          u = a(65440),
          w = a(27531),
          m = a(3274),
          f = a.n(m);
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
        e.default = (t) => {
          let {
            children: e,
            title: a,
            onCloseModal: i,
            onSubmitOrder: m,
            isLoading: h,
            isOpen: v,
            hideFooter: x,
            className: g,
            headerContainerClassName: b = "",
            showCloseIcon: y = !0,
          } = t;
          (0, r.useEffect)(() => {
            v
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let t = (t) => {
              "Escape" === t.key && i();
            };
            return (
              document.addEventListener("keydown", t),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", t);
              }
            );
          }, [v, i]);
          let j = (0, n.jsx)(s.E.div, {
            className: o()(f().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => i(),
            children: (0, n.jsxs)(s.E.div, {
              onClick: (t) => t.stopPropagation(),
              className: o()(
                f().modal,
                g,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: p,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, n.jsxs)("div", {
                  className: o()(f().modalHeader, "tw-px-6 tw-py-4", b),
                  children: [
                    (0, n.jsx)("h4", {
                      className: o()(
                        f().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: a,
                    }),
                    y
                      ? (0, n.jsx)(d.Z, {
                          onClick: i,
                          className: f().buttonClose,
                          title: "Click to close modal",
                          children: (0, n.jsx)(w.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: o()(
                    f().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    e,
                    !x && m
                      ? (0, n.jsx)("div", {
                          className: f().modalFooter,
                          children: (0, n.jsx)(d.Z, {
                            className: o()(f().confirmButton, {
                              [f().buttonLoading]: h,
                            }),
                            onClick: m,
                            title: "Click to confirm",
                            children: h ? (0, n.jsx)(u.Z, {}) : "Confirm",
                          }),
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
          return v && document.body
            ? c.createPortal(
                (0, n.jsx)(l.M, { initial: !0, mode: "wait", children: j }),
                document.body
              )
            : null;
        };
      },
      74991: function (t, e, a) {
        "use strict";
        a.d(e, {
          h: function () {
            return f;
          },
        });
        var n = a(67294),
          i = a(92321),
          o = a(48104),
          r = a(12185),
          s = a(43210),
          l = a(51700),
          c = a(15229),
          d = a(14504),
          u = a(81838);
        let w = u.O.USDC,
          m = u.O.DEPOSITS_ROUTER,
          f = (t) => {
            let { address: e, isConnected: a, chain: u } = (0, i.m)(),
              [f, p] = (0, n.useState)(void 0),
              [h, v] = (0, n.useState)(void 0),
              [x, g] = (0, n.useState)(void 0),
              [b, y] = (0, n.useState)(""),
              [j, A] = (0, n.useState)(void 0),
              [C, _] = (0, n.useState)(void 0),
              [N, k] = (0, n.useState)(void 0),
              [S, I] = (0, n.useState)(void 0),
              [E, F] = (0, n.useState)(void 0),
              [M, B] = (0, n.useState)(void 0),
              [L, D] = (0, n.useState)(void 0),
              [T, O] = (0, n.useState)(void 0),
              [P, U] = (0, n.useState)(void 0),
              [Z, R] = (0, n.useState)(void 0),
              [W, z] = (0, n.useState)(0),
              V = (0, o.t)(),
              H = a && (null == u ? void 0 : u.id) === s.y.id,
              { data: K } = (0, r.K)({
                address: e,
                token: w,
                chainId: s.y.id,
                query: { enabled: !!e && H },
              });
            return (
              (0, n.useEffect)(() => {
                (async () => {
                  if (
                    (p(void 0),
                    v(void 0),
                    g(void 0),
                    y(""),
                    A(void 0),
                    _(void 0),
                    k(void 0),
                    I(void 0),
                    F(void 0),
                    B(void 0),
                    D(void 0),
                    O(void 0),
                    U(void 0),
                    R(void 0),
                    null == t ? void 0 : t._id)
                  )
                    try {
                      let e = await (0, l.RW)(t._id);
                      e &&
                        (I(BigInt(e.aumFee)),
                        F(BigInt(e.performanceFee)),
                        B(BigInt(e.pendingAumFee)),
                        D(BigInt(e.pendingPerformanceFee)),
                        O(BigInt(e.feeChangeTimestamp)),
                        U(BigInt(e.feeTimelockPeriod)),
                        R(BigInt(e.rewardsFee)));
                    } catch (t) {
                      console.error("Failed to fetch agent fees from API", t);
                    }
                  if (H && e && V && (null == t ? void 0 : t._id)) {
                    try {
                      let a = await V.readContract({
                        address: w,
                        abi: d.Wo,
                        functionName: "allowance",
                        args: [e, m],
                      });
                      A(a);
                      let n = BigInt(0),
                        i = "";
                      t.token &&
                        (([n, i] = await Promise.all([
                          V.readContract({
                            address: t.token,
                            abi: d.Wo,
                            functionName: "balanceOf",
                            args: [e],
                          }),
                          V.readContract({
                            address: t.token,
                            abi: d.Wo,
                            functionName: "symbol",
                          }),
                        ])),
                        y(i),
                        g(n));
                      let o = [
                          {
                            name: "aumFee",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "performanceFee",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "pendingAumFee",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "pendingPerformanceFee",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "feeChangeTimestamp",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "FEE_TIMELOCK_PERIOD",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                          {
                            name: "rewardsFee",
                            type: "function",
                            inputs: [],
                            outputs: [{ type: "uint256" }],
                            stateMutability: "view",
                          },
                        ],
                        [r, s, u, f, h, x, b] = await Promise.all([
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "aumFee",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "performanceFee",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "pendingAumFee",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "pendingPerformanceFee",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "feeChangeTimestamp",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "FEE_TIMELOCK_PERIOD",
                          }),
                          V.readContract({
                            address: t._id,
                            abi: o,
                            functionName: "rewardsFee",
                          }),
                        ]);
                      if ((I(r), F(s), B(u), D(f), O(h), U(x), R(b), t.token)) {
                        let e = await (0, l.l0)(t._id);
                        if ("string" != typeof e) {
                          let [a, i] = await Promise.all([
                              V.readContract({
                                address: t._id,
                                abi: [
                                  {
                                    name: "getRate",
                                    type: "function",
                                    inputs: [
                                      {
                                        name: "_externalAssets",
                                        type: "uint256",
                                      },
                                    ],
                                    outputs: [{ type: "uint256" }],
                                    stateMutability: "view",
                                  },
                                ],
                                functionName: "getRate",
                                args: [BigInt(e.balance)],
                              }),
                              V.readContract({
                                address: t._id,
                                abi: [
                                  {
                                    name: "totalAssets",
                                    type: "function",
                                    inputs: [
                                      {
                                        name: "_externalAssets",
                                        type: "uint256",
                                      },
                                    ],
                                    outputs: [{ type: "uint256" }],
                                    stateMutability: "view",
                                  },
                                ],
                                functionName: "totalAssets",
                                args: [BigInt(e.balance)],
                              }),
                            ]),
                            o = (0, c.b)(n, 18),
                            r = (0, c.b)(a, 6),
                            s = (0, c.b)(i, 6),
                            l = (Number(o) * Number(r)).toFixed(6);
                          v(l), _(s), k(r);
                        } else v(void 0), _(void 0), k(void 0);
                      } else v(void 0), _(void 0), k(void 0);
                      (null == K ? void 0 : K.value) && p(K.value);
                    } catch (t) {
                      console.error(
                        "Error fetching blockchain data, falling back to API values:",
                        t
                      );
                    }
                    return;
                  }
                })().catch(() => {
                  p(void 0),
                    v(void 0),
                    g(void 0),
                    y(""),
                    A(void 0),
                    _(void 0),
                    k(void 0),
                    I(void 0),
                    F(void 0),
                    B(void 0),
                    D(void 0),
                    O(void 0),
                    U(void 0),
                    R(void 0);
                });
              }, [
                e,
                a,
                null == u ? void 0 : u.id,
                null == K ? void 0 : K.value,
                H,
                t,
                V,
                W,
              ]),
              {
                usdcBalance: f,
                userBalance: h,
                agentTokenBalance: x,
                tokenSymbol: b,
                usdcAllowance: j,
                totalAssets: C,
                rate: N,
                refresh: () => {
                  z((t) => t + 1);
                },
                aumFee: S,
                performanceFee: E,
                pendingAumFee: M,
                pendingPerformanceFee: L,
                feeChangeTimestamp: T,
                feeTimelockPeriod: P,
                rewardsFee: Z,
              }
            );
          };
      },
      85292: function (t, e, a) {
        "use strict";
        var n = a(85893),
          i = a(93967),
          o = a.n(i),
          r = a(25448),
          s = a.n(r);
        e.Z = (t) => {
          let { size: e = "xl", children: a, className: i } = t;
          return (0, n.jsx)("div", {
            className: o()(s().container, s()[e], i),
            children: a,
          });
        };
      },
      27888: function (t, e, a) {
        "use strict";
        var n = a(85893),
          i = a(80140),
          o = a.n(i);
        e.Z = (t) => {
          let { children: e } = t;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("main", { className: o().Main, children: e }),
          });
        };
      },
      81838: function (t, e, a) {
        "use strict";
        a.d(e, {
          O: function () {
            return n;
          },
        });
        let n = {
          USDC: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          DEPOSITS_ROUTER: "0x1ae4932AaC92F90C7eC50014A3A6385DeB99C2db",
          AGENT_TOKEN_FACTORY: "0x7C151ac37921E02f7adBF5375a80F15D98ca4fde",
        };
      },
      51700: function (t, e, a) {
        "use strict";
        a.d(e, {
          NK: function () {
            return w;
          },
          RW: function () {
            return u;
          },
          Uu: function () {
            return p;
          },
          _z: function () {
            return v;
          },
          bZ: function () {
            return f;
          },
          j8: function () {
            return c;
          },
          l0: function () {
            return l;
          },
          uD: function () {
            return d;
          },
          uo: function () {
            return h;
          },
        });
        var n = a(87066),
          i = a(82649);
        let o = "",
          r = "",
          s = async () => {
            (o = await (0, i.Sp)("BOT_URL")),
              (r = "".concat(o.slice(0, -4), "/framework/api/wallet"));
          },
          l = async (t) =>
            t
              ? (o || (await s()),
                (await n.Z.get("".concat(o, "/get_signature/").concat(t))).data)
              : "",
          c = async (t) => (
            o || (await s()),
            (await n.Z.post("".concat(o, "/get_agents"), { addresses: t })).data
              .slice()
              .sort((t, e) => {
                var a, n, i, o;
                let r =
                  null !==
                    (i =
                      null === (a = t.prices) || void 0 === a
                        ? void 0
                        : a.assets) && void 0 !== i
                    ? i
                    : 0;
                return (
                  (null !==
                    (o =
                      null === (n = e.prices) || void 0 === n
                        ? void 0
                        : n.assets) && void 0 !== o
                    ? o
                    : 0) - r
                );
              })
          ),
          d = async (t) => {
            let {
              resource: e,
              config: a,
              agentId: i,
              query: o,
              method: l = "get",
            } = t;
            if (!i) return;
            r || (await s());
            let c = "".concat(r, "/").concat(i, "/").concat(e);
            return o && (c = c + "?" + o), (await n.Z[l](c, a)).data;
          },
          u = async (t) => {
            if (!t) return null;
            o || (await s());
            try {
              return (await n.Z.get("".concat(o, "/get_fees/").concat(t))).data;
            } catch (t) {
              return console.error("Failed to fetch agent fees:", t), null;
            }
          },
          w = async (t) => {
            if (!t) return null;
            o || (await s());
            try {
              return (
                await n.Z.post("".concat(o, "/get_agent"), { address: t })
              ).data;
            } catch (t) {
              return (
                console.error("Failed to fetch agent by address:", t), null
              );
            }
          };
        function m(t) {
          return "bigint" == typeof t
            ? t.toString()
            : Array.isArray(t)
            ? t.map(m)
            : t && "object" == typeof t
            ? Object.fromEntries(
                Object.entries(t).map((t) => {
                  let [e, a] = t;
                  return [e, m(a)];
                })
              )
            : t;
        }
        let f = async (t, e) => {
            o || (await s());
            try {
              let a = m(t);
              if (!a || "object" != typeof a || Array.isArray(a))
                throw Error(
                  "Agent data could not be converted to a valid object"
                );
              return (
                await n.Z.post("".concat(o, "/save_agent"), {
                  ...a,
                  signature: e,
                })
              ).data;
            } catch (t) {
              throw (console.error("Failed to save agent:", t), t);
            }
          },
          p = async (t, e, a) => {
            o || (await s());
            let i = new FormData();
            i.append("file", t),
              i.append("wallet_address", e),
              i.append("signature", a);
            try {
              return (
                await n.Z.post("".concat(o, "/upload_image"), i, {
                  headers: { "Content-Type": "multipart/form-data" },
                })
              ).data;
            } catch (t) {
              return {
                status: "error",
                message:
                  (t instanceof Error ? t.message : String(t)) ||
                  "Upload failed",
              };
            }
          },
          h = async (t) => {
            o || (await s());
            try {
              let e = m(t);
              return (await n.Z.post("".concat(o, "/ai_assistant"), e)).data;
            } catch (t) {
              throw (
                (console.error("Failed to get AI assistant response:", t), t)
              );
            }
          },
          v = async (t, e) => {
            o || (await s());
            try {
              let a = m(t);
              if (!a || "object" != typeof a || Array.isArray(a))
                throw Error(
                  "Agent data could not be converted to a valid object"
                );
              return (
                await n.Z.post("".concat(o, "/activate_agent"), {
                  ...a,
                  signature: e,
                })
              ).data;
            } catch (t) {
              throw (console.error("Failed to activate agent:", t), t);
            }
          };
      },
      28966: function (t, e, a) {
        "use strict";
        a.d(e, {
          Im: function () {
            return r;
          },
          rL: function () {
            return o;
          },
        });
        let n = {
            "0xe6c4247b": "InvalidAddress",
            "0x58d620b3": "InvalidFee",
            "0xc0fc8a8a": "NotManager",
            "0x9589a27d": "InvalidOracle",
            "0x666a2814": "StaleUpdate",
            "0x4be6321b": "InvalidSignatureLength",
            "0xff551e89": "InvalidSignatureV",
            "0x8baa579f": "InvalidSignature",
            "0x2c5211c6": "InvalidAmount",
            "0x38e06a46": "WithdrawalSlotsFull",
            "0x6adf7e28": "DepositLimitExceeded",
            "0x2e70c0b1": "SanctionedAddress",
            "0x252f8a0e": "FutureBlockNumber",
            "0x68c2f226": "FactoryPaused",
            "0xd25598a0": "InvalidDecimals",
            "0x001bd093": "DefaultAssetTokenNotSet",
            "0x1d1e0837": "InsufficientDeployAmount",
            "0xe93ba223": "AgentNotFound",
            "0x7a01d654": "BatchSizeTooLarge",
          },
          i = {
            InvalidAddress: "Invalid address provided",
            InvalidFee: "Invalid fee amount",
            NotManager: "Only the manager can perform this action",
            InvalidOracle: "Oracle data is invalid or unavailable",
            StaleUpdate: "The provided data is stale or outdated",
            InvalidSignatureLength: "Signature has invalid length",
            InvalidSignatureV: "Signature V parameter is invalid",
            InvalidSignature: "Invalid signature provided",
            InvalidAmount: "Invalid amount specified",
            WithdrawalSlotsFull: "All withdrawal slots are currently full",
            DepositLimitExceeded: "Deposit would exceed the maximum limit",
            SanctionedAddress: "Address is sanctioned and cannot be used",
            FutureBlockNumber: "Block number is in the future",
            FactoryPaused: "The factory is currently paused",
            InvalidDecimals: "Invalid decimal configuration",
            DefaultAssetTokenNotSet:
              "Default asset token has not been configured",
            InsufficientDeployAmount:
              "Deployment amount is below the minimum required",
            AgentNotFound: "Agent not found in the registry",
            BatchSizeTooLarge: "Batch size exceeds the maximum allowed limit",
          };
        function o(t) {
          return !t || t.length < 10
            ? "Unknown error"
            : n[t.slice(0, 10)] || "Unknown error";
        }
        function r(t) {
          var e;
          let a = "Unknown error";
          if ("object" == typeof t && null !== t) {
            let e = t.data || (t.cause && t.cause.data);
            e && "string" == typeof e && (a = o(e));
          }
          let n = i[(e = a)] || e,
            r =
              "Unknown error" === a
                ? "Transaction failed"
                : "Transaction failed: ".concat(n);
          return { errorName: a, description: n, message: r };
        }
      },
      3274: function (t) {
        t.exports = {
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
      25448: function (t) {
        t.exports = {
          container: "Container_container__UXVBQ",
          sm: "Container_sm__119v_",
          md: "Container_md__yR97e",
          lg: "Container_lg__iMl4h",
          loader: "Container_loader__fHfSB",
        };
      },
      80140: function (t) {
        t.exports = { Main: "Main_Main__LAM6o" };
      },
    },
  ]);
