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
      (e._sentryDebugIds[t] = "80fa48b9-8390-40e7-8131-227ff52509f2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-80fa48b9-8390-40e7-8131-227ff52509f2"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5335, 6656],
    {
      61920: function (e, t, n) {
        "use strict";
        var a = n(85893),
          s = n(24113),
          i = n(50103),
          r = n.n(i);
        t.Z = (e) => {
          let { showButton: t = !0 } = e;
          return (0, a.jsxs)("div", {
            className: r().container,
            children: [
              (0, a.jsx)("p", {
                children: "Please connect wallet to check your details.",
              }),
              t && (0, a.jsx)(s.Z, {}),
            ],
          });
        };
      },
      58224: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return N;
          },
        });
        var a = n(85893),
          s = n(15922),
          i = n(43417),
          r = n(32010),
          l = n(59731),
          o = n(30202),
          c = n(67294),
          d = n(81234),
          u = n(93967),
          w = n.n(u),
          h = n(18776),
          m = n(23279),
          x = n.n(m),
          p = n(67930),
          f = (e) => {
            let { onRefreshPrices: t } = e,
              [n, s] = (0, c.useState)(!1),
              [i, u] = (0, c.useState)(void 0),
              m = (0, o.NL)(),
              { contractsWithReferencePrices: f, currentExpiryDate: b } = (0,
              l.qr)(
                (0, r.N)((e) => ({
                  contractsWithReferencePrices: e.contractsWithReferencePrices,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              y = (0, c.useMemo)(() => [p.nA, f, b], [f, b]),
              g = (0, c.useCallback)(() => {
                let e = m.getQueryState(y);
                if (
                  !(null == e ? void 0 : e.dataUpdatedAt) &&
                  !(null == e ? void 0 : e.error)
                ) {
                  v();
                  return;
                }
                u(null == e ? void 0 : e.dataUpdatedAt);
              }, [m, y]),
              v = x()(g, 500);
            return ((0, c.useEffect)(() => {
              g();
            }, [g]),
            t)
              ? (0, a.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-items-end",
                  children: [
                    (0, a.jsxs)("button", {
                      onClick: () => {
                        s(!0),
                          null == t || t(),
                          setTimeout(() => {
                            s(!1), g();
                          }, 1e3);
                      },
                      className:
                        "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                      children: [
                        (0, a.jsx)(d.Z, {
                          className: w()({ "tw-animate-spin": n }),
                        }),
                        (0, a.jsx)("span", {
                          className: "tw-text-xs tw-text-white",
                          children: "Refresh prices",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      className: "tw-mt-2 tw-text-xxs",
                      children: [
                        "Last Update: ",
                        i && (0, h.Z)(new Date(i), "dd MMM - HH:mm:ss"),
                      ],
                    }),
                  ],
                })
              : null;
          },
          b = n(41664),
          y = n.n(b);
        let g = (e) => {
          let { breadcrumbs: t, className: n } = e;
          return t.length
            ? (0, a.jsx)("div", {
                className: n,
                children: t.map((e, n) =>
                  (0, a.jsxs)(
                    "span",
                    {
                      children: [
                        (0, a.jsx)(y(), {
                          href: e.path,
                          className:
                            "tw-text-xs tw-font-bold hover:tw-underline",
                          children: e.label,
                        }),
                        n < t.length - 1 && " / ",
                      ],
                    },
                    e.path
                  )
                ),
              })
            : (0, a.jsx)(a.Fragment, {});
        };
        var v = n(56267),
          j = n(25978),
          k = n.n(j),
          N = (e) => {
            let {
              breadcrumbs: t = [],
              title: n,
              onExpiryChange: r,
              onRefreshPrices: l,
            } = e;
            return "phone" === (0, s.F)()
              ? (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", {
                      className: "tw-mb-5",
                      children: (0, a.jsx)("h1", {
                        className: k().title,
                        children: n,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-justify-between",
                      children: [
                        (0, a.jsx)(v.Z, {}),
                        (0, a.jsx)(f, { onRefreshPrices: l }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "tw-space-between tw-mb-3 tw-flex",
                      children: (0, a.jsx)(i.F, { hideHours: !0 }),
                    }),
                    (0, a.jsx)(g, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-row tw-justify-between tw-gap-4",
                      children: [
                        (0, a.jsx)("div", {
                          className: "tw-flex tw-items-center",
                          children: (0, a.jsx)(i.F, {
                            hideHours: !0,
                            onExpiryChange: r,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-justify-end tw-gap-3",
                          children: [
                            (0, a.jsx)(v.Z, {}),
                            (0, a.jsx)(f, { onRefreshPrices: l }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(g, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                });
          };
      },
      91269: function (e, t, n) {
        "use strict";
        var a = n(85893),
          s = n(25675),
          i = n.n(s),
          r = n(81989);
        t.Z = (e) => {
          let { height: t = 30, width: n = 30, className: s } = e,
            { address: l } = (0, r.Pk)();
          return (0, a.jsx)(i(), {
            src: "https://mywalleticon.com/usericon/".concat(l),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: n,
            height: t,
            className: s,
          });
        };
      },
      27531: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, a.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      46656: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(85893),
          s = n(93967),
          i = n.n(s),
          r = n(67294),
          l = n(43495),
          o = n(51526),
          c = n(73935),
          d = n(37422),
          u = n(65440),
          w = n(27531),
          h = n(3274),
          m = n.n(h);
        let x = {
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
            title: n,
            onCloseModal: s,
            onSubmitOrder: h,
            isLoading: p,
            isOpen: f,
            hideFooter: b,
            className: y,
            headerContainerClassName: g = "",
            showCloseIcon: v = !0,
          } = e;
          (0, r.useEffect)(() => {
            f
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && s();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [f, s]);
          let j = (0, a.jsx)(l.E.div, {
            className: i()(m().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => s(),
            children: (0, a.jsxs)(l.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: i()(
                m().modal,
                y,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: x,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, a.jsxs)("div", {
                  className: i()(m().modalHeader, "tw-px-6 tw-py-4", g),
                  children: [
                    (0, a.jsx)("h4", {
                      className: i()(
                        m().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: n,
                    }),
                    v
                      ? (0, a.jsx)(d.Z, {
                          onClick: s,
                          className: m().buttonClose,
                          title: "Click to close modal",
                          children: (0, a.jsx)(w.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: i()(
                    m().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !b && h
                      ? (0, a.jsx)("div", {
                          className: m().modalFooter,
                          children: (0, a.jsx)(d.Z, {
                            className: i()(m().confirmButton, {
                              [m().buttonLoading]: p,
                            }),
                            onClick: h,
                            title: "Click to confirm",
                            children: p ? (0, a.jsx)(u.Z, {}) : "Confirm",
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
                (0, a.jsx)(o.M, { initial: !0, mode: "wait", children: j }),
                document.body
              )
            : null;
        };
      },
      20847: function (e, t, n) {
        "use strict";
        var a = n(85893),
          s = n(45338),
          i = n(93967),
          r = n.n(i);
        t.Z = (e) => {
          let {
              plusMinusOnly: t = !1,
              labelClassName: n,
              value: i,
              currency: l,
              showAbsValue: o = !1,
              className: c,
            } = e,
            d = "".concat(i).includes("e") ? Number((0, s.eT)(i)) : i,
            u = (0, s.uM)(Number(d), "string", l, void 0, !0);
          if (0 === d) return (0, a.jsx)("p", { children: u });
          let w = d > 0;
          if (t) {
            let e = w ? "+" : "-";
            return (0, a.jsx)("div", {
              className: r()(
                "tw-flex tw-flex-row tw-items-center tw-gap-0.5",
                c
              ),
              children: (0, a.jsxs)("p", {
                className: r()("tw-text-base", {
                  "tw-text-ithaca-red-20": !w,
                  "tw-text-ithaca-green-30": w,
                }),
                children: [e, o ? Math.abs(d) : u],
              }),
            });
          }
          let h = w ? "Pay" : "Receive";
          return (0, a.jsxs)("div", {
            className: r()("tw-flex tw-flex-col tw-items-center tw-gap-0.5", c),
            children: [
              (0, a.jsx)("p", {
                className: r()("tw-text-ithaca-white-60", "tw-text-xxs", n),
                children: h,
              }),
              (0, a.jsx)("p", {
                className: r()("tw-text-base", {
                  "tw-text-ithaca-red-20": w,
                  "tw-text-ithaca-green-30": !w,
                }),
                children: o ? Math.abs(d) : u,
              }),
            ],
          });
        };
      },
      24113: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return M;
          },
        });
        var a = n(85893),
          s = n(39332),
          i = n(67294),
          r = n(89469),
          l = n(59731),
          o = n(47236),
          c = n(91269),
          d = n(21050),
          u = n(15615),
          w = n(15418),
          h = n(37422),
          m = n(46656),
          x = n(43529),
          p = n(88601),
          f = n.n(p),
          b = (e) => {
            let {
                isOpen: t,
                isLoading: n,
                onCloseModal: s,
                onDisconnectWallet: r,
                onAgreeAndContinue: l,
              } = e,
              [o, c] = (0, i.useState)([
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
            return (0, a.jsx)(m.default, {
              title: "Legal Terms",
              isOpen: t,
              isLoading: n,
              onCloseModal: s,
              hideFooter: !1,
              showCloseIcon: !1,
              className: f().tncModal,
              children: (0, a.jsxs)("div", {
                className: f().acknowledgeTerms,
                children: [
                  (0, a.jsx)("p", {
                    className: f().title,
                    children:
                      "Check the boxes to confirm your acknowledgement and acceptance of the following:",
                  }),
                  o.map((e) =>
                    (0, a.jsx)(
                      x.Z,
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
                  (0, a.jsxs)("div", {
                    className: f().buttonContainer,
                    children: [
                      (0, a.jsx)(h.Z, {
                        title: "Disconnect Wallet",
                        variant: "outline",
                        onClick: r,
                        size: "sm",
                        className: f().button,
                        children: "Disconnect Wallet",
                      }),
                      (0, a.jsx)(h.Z, {
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
          y = n(98971),
          g = n.n(y),
          v = n(93967),
          j = n.n(v),
          k = n(67253),
          N = n(15741),
          C = n(92400),
          _ = (e) => {
            let { openChainModal: t, children: n, isWrongNetwork: s } = e,
              { currentStep: r, updateStep: l } = (0, i.useContext)(
                N.OnboardingContext
              );
            return (
              (0, i.useEffect)(() => {
                s ? null == l || l(k.P.WRONG_NETWORK) : null == l || l(void 0);
              }, [s]),
              (0, a.jsx)(C.Z, {
                footer: (0, a.jsx)("div", {
                  className: "tw-flex tw-items-end tw-justify-end",
                  children: (0, a.jsx)(h.Z, {
                    title: "Continue",
                    className: "tw-h-[28px] tw-w-1/2",
                    onClick: t,
                    children: "Switch Network",
                  }),
                }),
                isOpen: r === k.P.WRONG_NETWORK,
                ignoreDisabledStatus: !0,
                align: "end",
                side: "top",
                children: (0, a.jsx)("div", { children: n }),
              })
            );
          },
          Z = n(36703),
          T = n(64729),
          S = n(85088),
          A = n(54306),
          P = n(44718),
          I = n(81989),
          M = () => {
            let { isSolanaWalletActive: e } = (0, T.X)(),
              {
                ithacaSDK: t,
                initIthacaSDK: n,
                disconnect: h,
                isConnecting: m,
              } = (0, l.qr)(),
              { showToast: x } = (0, o.Z)(),
              { connectModalOpen: p } = (0, u.We)(),
              { isConnected: f, address: y } = (0, I.Pk)(),
              { data: v } = (0, r.p)(),
              { data: k } = (function () {
                let { connection: e } = (0, P.R)(),
                  {
                    publicKey: t,
                    signMessage: n,
                    signTransaction: a,
                    signAllTransactions: s,
                    connect: r,
                    disconnect: l,
                  } = (0, A.O)();
                return {
                  data: (0, i.useMemo)(() => {
                    if (!t || !e) return;
                    let i = { address: t.toBase58(), publicKey: t };
                    return {
                      publicKey: t,
                      transport: e,
                      chain: { id: 102, network: "testnet" },
                      account: i,
                      cacheTime: 4e3,
                      signMessage: async (e) => await n(e),
                      signTransaction: async (e) => a(e),
                      signAllTransactions: async (e) => await s(e),
                      signTypedData: async (e, t, a) => {
                        let s = (function (e, t, n) {
                          let a = JSON.stringify({
                            domain: e,
                            types: t,
                            value: n,
                          });
                          return new TextEncoder().encode(a);
                        })(e, t, a);
                        return await n(s);
                      },
                      connect: async () => (await r(), i),
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
              N = (0, A.O)(),
              C = (0, s.useRouter)(),
              [M, B] = (0, i.useState)(!1),
              E = async () => {
                try {
                  let e = await t.points.addAccountData(
                    "tc_confirmation",
                    "true"
                  );
                  w.Z.track("Account created"),
                    "OK" === e.result && (B(!1), C.push("/onboarding"));
                } catch (e) {
                  B(!1);
                }
              },
              W = async () => {
                let a = localStorage.getItem("ithaca.session");
                if ((await n(e ? N : v)) && !a) {
                  var s;
                  x({
                    title: "Wallet Ownership Verified",
                    message:
                      "Your wallet ownership has been verified. You can now deposit funds and trade.",
                  }),
                    (0, Z.Lv)();
                  let e = await t.auth.getSession();
                  (null == e
                    ? void 0
                    : null === (s = e.accountInfos) || void 0 === s
                    ? void 0
                    : s.tc_confirmation) || B(!0);
                }
              };
            return ((0, i.useEffect)(() => {
              if (!p) return;
              let e = () => {
                let e = document.querySelector(
                  "[data-testid='rk-wallet-option-walletConnect']"
                );
                e &&
                  !e.hasAttribute("data-enhanced") &&
                  (e.setAttribute("data-enhanced", "true"),
                  e.addEventListener("click", () => {
                    x({
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
            }, [p, x]),
            (0, i.useEffect)(() => {
              m || (v || k ? W() : f || h());
            }, [y, v, k, f]),
            e)
              ? (0, a.jsx)(S.T, {})
              : (0, a.jsx)(u.NL.Custom, {
                  children: (e) => {
                    let {
                        account: t,
                        chain: n,
                        openAccountModal: s,
                        openChainModal: i,
                        openConnectModal: r,
                        authenticationStatus: l,
                        mounted: o,
                      } = e,
                      u = o && "loading" !== l,
                      w = u && t && n && (!l || "authenticated" === l);
                    return (0, a.jsx)("div", {
                      ...(!u && {
                        "aria-hidden": !0,
                        className: g().container,
                      }),
                      children: w
                        ? n.unsupported
                          ? (0, a.jsx)(_, {
                              openChainModal: i,
                              isWrongNetwork: n.unsupported,
                              children: (0, a.jsx)("div", {
                                children: (0, a.jsxs)("button", {
                                  onClick: i,
                                  type: "button",
                                  className: j()(
                                    g().wrongNetwork,
                                    "tw-rounded-2xl"
                                  ),
                                  children: [
                                    "Wrong network",
                                    (0, a.jsx)(d.Z, { color: "#fff" }),
                                  ],
                                }),
                              }),
                            })
                          : (0, a.jsxs)("div", {
                              className: g().termsContainer,
                              children: [
                                (0, a.jsx)(b, {
                                  isOpen: M && w,
                                  onCloseModal: () => B(!1),
                                  onDisconnectWallet: s,
                                  onAgreeAndContinue: E,
                                }),
                                (0, a.jsx)(_, {
                                  openChainModal: i,
                                  isWrongNetwork: n.unsupported,
                                  children: (0, a.jsxs)("button", {
                                    onClick: s,
                                    type: "button",
                                    className: j()(
                                      g().connectedWallet,
                                      "tw-rounded-2xl"
                                    ),
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: g().displayName,
                                        children: t.displayName,
                                      }),
                                      (0, a.jsx)(c.Z, {
                                        className: "!tw-size-8",
                                      }),
                                      (0, a.jsx)(d.Z, {
                                        className: g().chevron,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, a.jsx)("button", {
                            onClick: r,
                            type: "button",
                            className: j()(g().connectWallet, "tw-rounded-2xl"),
                            children: "Connect Wallet",
                          }),
                    });
                  },
                });
          };
      },
      20314: function (e, t, n) {
        "use strict";
        var a = n(85893),
          s = n(39332),
          i = n(57153),
          r = n(24514),
          l = n(55975),
          o = n(15418);
        t.Z = () => {
          var e, t;
          let n = (0, s.usePathname)();
          return (0, a.jsx)(r.Z, {
            direction: "row-space-between",
            children: (0, a.jsx)(l.Z, {
              tabs: i.Ro,
              className: "mb-0",
              activeTab:
                null !==
                  (t =
                    null === (e = i.Ro.find((e) => e.path === n)) ||
                    void 0 === e
                      ? void 0
                      : e.id) && void 0 !== t
                  ? t
                  : i.Ro[0].id,
              onChange: (e) => {
                let t = n.split("/");
                (t[2] = e),
                  o.Z.track("Points menu interactions", { path: t.join("/") });
              },
            }),
          });
        };
      },
      14586: function (e, t, n) {
        "use strict";
        n.d(t, {
          I: function () {
            return a;
          },
        });
        let a = [
          {
            inputs: [
              { internalType: "address", name: "client", type: "address" },
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "balanceSheet",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "client", type: "address" },
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "enableStrategy",
            outputs: [{ internalType: "bool", name: "choice", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
        ];
      },
      5671: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            LazyComponentPlaceholder: function () {
              return ey;
            },
            default: function () {
              return eT;
            },
          });
        var a = n(85893),
          s = n(5152),
          i = n.n(s),
          r = n(92505),
          l = n(5019),
          o = n(48120),
          c = n(3298),
          d = n(59731),
          u = n(67294),
          w = n(47236),
          h = n(39332),
          m = n(32010),
          x = n(80362),
          p = n(81989),
          f = n(59421),
          b = n(15229),
          y = n(67930),
          g = n(88144),
          v = n(24139);
        let j = (e) => {
          let {
              systemInfo: t,
              underlyingCurrency: n,
              ithacaSDK: a,
              isAuthenticated: s,
            } = e,
            {
              data: i = {},
              isPending: r,
              error: l,
              refetch: o,
            } = (0, g.a)({
              queryKey: [y.sk, n],
              queryFn: async () => {
                let { data: e } = await a.fundlock.fundlockHistory();
                return c(e);
              },
              refetchInterval: y.x6,
              enabled: s,
              placeholderData: v.Wk,
            }),
            c = (e) => {
              let n = Object.keys(t.tokenAddress).reduce(
                (e, n) => ((e[t.tokenAddress[n].toLowerCase()] = n), e),
                {}
              );
              return e.withdrawalRequests.reduce((e, a) => {
                let s = n[a.token];
                return (
                  e[s]
                    ? (e[s] =
                        e[s] +
                        Number((0, b.b)(BigInt(a.amount), t.tokenDecimals[s])))
                    : (e[s] = Number(
                        (0, b.b)(BigInt(a.amount), t.tokenDecimals[s])
                      )),
                  e
                );
              }, {});
            };
          return { data: i, isPending: r, error: l, refetch: o };
        };
        var k = n(48104),
          N = n(89469),
          C = n(65185),
          _ = n(81946),
          Z = n(82002),
          T = n(37122),
          S = n(37422),
          A = n(93967),
          P = n.n(A),
          I = n(12185),
          M = n(35192),
          B = n(43529),
          E = n(65440),
          W = n(20847),
          F = n(36703),
          L = n(70757),
          D = n(45338),
          R = n(82834),
          O = n(43681),
          q = n(67277),
          H = n(91553),
          z = n(61228),
          G = n(1958),
          X = n(96967),
          U = n(66780),
          K = n(53227),
          V = n(14586),
          Y = n(20448),
          J = n(58013),
          Q = n(89810);
        let $ = (e, t) => {
          let {
            locale: n = "undefined" != typeof navigator && navigator.language
              ? navigator.language
              : "en-US",
            minimumFractionDigits: a = 2,
            maximumFractionDigits: s = 2,
            useGrouping: i = !1,
          } = t || {};
          return new Intl.NumberFormat(n, {
            minimumFractionDigits: a,
            maximumFractionDigits: s,
            useGrouping: i,
          }).format(e);
        };
        var ee = (e) => {
            let {
                data: t,
                otherCurrency: n,
                swap: s,
                deposit: i,
                faucet: r,
                withdraw: c,
                desktopBreakpoint: m,
              } = e,
              {
                isTransactionInProgress: x,
                positionCollateralRequirement: f,
                walletBalance: y,
                availableCollateral: g,
                orderValue: v,
                currency: j,
                fundLockValue: k,
              } = t,
              C = (0, h.useRouter)(),
              _ = (0, d.qr)((e) => e.systemInfo),
              Z = (0, Y.b)().id,
              T = _.tokenAddress[j],
              { data: A } = (0, N.p)(),
              { address: I } = (0, p.Pk)(),
              { showErrorToast: M } = (0, w.Z)(),
              [ee, et] = (0, u.useState)(0),
              { data: en } = (0, Q.u)({
                address: X.U[Z].aavePool,
                abi: U.s,
                functionName: "getReserveData",
                args: [T],
                chainId: Z,
              }),
              { data: ea } = (0, Q.u)({
                address: _.fundlockAddress,
                abi: (0, l.V)([
                  "function tokenStrategies(address token) external view returns(address)",
                ]),
                functionName: "tokenStrategies",
                args: [T],
                chainId: Z,
              }),
              { data: es } = (0, Q.u)({
                address: ea,
                abi: K.b,
                functionName: "maxManagingRatio",
                chainId: Z,
                query: { enabled: ea && !(0, z.E)(ea, G.DR) },
              }),
              { data: ei } = (0, Q.u)({
                address: ea,
                abi: K.b,
                functionName: "userYield",
                args: [I],
                chainId: Z,
                query: {
                  enabled: !!I,
                  select: (e) => (0, b.b)(e, _.tokenDecimals[j]),
                  refetchInterval: 6e3,
                },
              }),
              { data: er } = (0, Q.u)({
                address: _.fundlockAddress,
                abi: V.I,
                functionName: "enableStrategy",
                args: [I, _.tokenAddress[j]],
                query: { enabled: !!I },
                chainId: Z,
              }),
              el = (0, u.useMemo)(
                () =>
                  en && es
                    ? (
                        Number(
                          (0, O.Fv)(
                            (0, q.G)({
                              rate: en.currentLiquidityRate.toString(),
                              duration: H.E_,
                            }),
                            H.YL
                          )
                        ) *
                        Number((0, b.b)(es, 18)) *
                        100
                      ).toFixed(2)
                    : "-",
                [en, es]
              ),
              eo = (0, u.useMemo)(
                () =>
                  en && es
                    ? (
                        Number(
                          (0, O.Fv)(
                            (0, q.G)({
                              rate: en.currentLiquidityRate.toString(),
                              duration: H.E_,
                            }),
                            H.YL
                          )
                        ) *
                        Number((0, b.b)(es, 18)) *
                        k
                      ).toFixed(2)
                    : "-",
                [en, es, k]
              ),
              ec = async (e, t) => {
                let { data: n } = await (0, F.hO)(e, t);
                n && et(n.query);
              },
              ed = async (e) => {
                if (A) {
                  if (A.chain.id !== (0, Y.b)().id)
                    try {
                      await A.switchChain({ id: (0, Y.b)().id });
                    } catch (e) {
                      M({
                        title: "Failed to switch network",
                        message: e.message,
                      });
                      return;
                    }
                  try {
                    await A.writeContract({
                      address: _.fundlockAddress,
                      abi: (0, l.V)([
                        "function setActivateStrategy(address token,bool activateStrategy)",
                      ]),
                      functionName: "setActivateStrategy",
                      args: [_.tokenAddress[j], e],
                    });
                  } catch (e) {
                    M({
                      title: "Rejected Request",
                      message: "User rejected the request",
                    });
                  }
                }
              };
            return (
              (0, u.useEffect)(() => {
                let e = k.toString();
                ec(
                  _.tokenAddress[j],
                  (0, o.v)(e, _.tokenDecimals[j]).toString()
                );
              }, [j, k, _]),
              (0, a.jsxs)("div", {
                className:
                  "tw-flex tw-items-center tw-gap-4 tw-border-b tw-border-b-ithaca-white-10 tw-py-2",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "tw-flex tw-w-20 tw-shrink-0 tw-items-center tw-gap-2 tw-font-medium",
                    children: [(0, L.XX)(j, "tw-size-6"), j],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-relative tw-flex tw-w-20 tw-shrink-0 tw-items-center tw-justify-end",
                    children: x ? (0, a.jsx)(E.Z, {}) : $(Number(y)),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-flex tw-w-40 tw-shrink-0 tw-items-center tw-justify-end tw-gap-1 tw-text-end",
                    children: x
                      ? (0, a.jsx)(E.Z, {})
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", {
                              className: "tw-flex tw-gap-1",
                              children: (0, a.jsxs)("button", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-rounded-xl tw-border-[0.5px] tw-px-2 tw-py-1 tw-text-xxs tw-text-ithaca-white-80",
                                title: "Click to swap ".concat(j),
                                onClick: () => s(j),
                                children: [
                                  (0, a.jsx)("span", { children: "Swap" }),
                                  (0, L.XX)(j, "tw-size-3"),
                                  "to",
                                  n
                                    ? (0, L.XX)(n, "tw-size-3")
                                    : (0, a.jsx)(a.Fragment, {}),
                                ],
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className: "tw-min-w-[70px]",
                              children: $(g),
                            }),
                          ],
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-flex tw-w-52 tw-shrink-0 tw-justify-end lg:tw-w-32",
                    children: (0, a.jsx)(W.Z, {
                      value: v,
                      currency: j,
                      className: "!tw-flex-row",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-flex tw-w-52 tw-shrink-0 tw-justify-end lg:tw-w-32",
                    children: (0, a.jsx)(W.Z, {
                      value: f,
                      currency: j,
                      className: "!tw-flex-row",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-w-56 tw-shrink-0 tw-text-xs tw-text-ithaca-white-60",
                    children: (0, a.jsxs)("div", {
                      className:
                        "tw-flex tw-w-full tw-items-center tw-justify-end tw-gap-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "tw-flex tw-flex-col tw-gap-1 tw-text-end",
                          children: [
                            (0, a.jsxs)("div", {
                              children: ["Opt In to Earn ", el, "% APY*"],
                            }),
                            (0, a.jsxs)("div", {
                              className: "tw-justify-stretch",
                              children: [
                                "(",
                                (0, a.jsx)("span", { children: eo }),
                                (0, a.jsx)("span", {
                                  children: (0, L.XX)(
                                    j,
                                    "tw-inline-block tw-size-3"
                                  ),
                                }),
                                (0, a.jsx)("span", { children: " + " }),
                                (0, a.jsxs)("span", {
                                  className: "tw-whitespace-nowrap",
                                  children: [(0, D.uM)(ee), " pts per annum"],
                                }),
                                ")",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(B.T, {
                          label: "",
                          checked: er,
                          onChange: (e, t) => ed(t),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "tw-flex tw-w-16 tw-shrink-0 tw-items-center tw-justify-end tw-gap-2",
                    children: (0, D.uM)(Number(ei), "string", j, 2),
                  }),
                  (0, a.jsx)("div", {
                    className: P()("tw-w-[340px] tw-shrink-0 tw-justify-end", {
                      "tw-flex": !m,
                      "tw-hidden": m,
                      "tw-w-[268px]": R.BB,
                    }),
                    children: (0, a.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-gap-2",
                      children: [
                        (0, a.jsx)(S.Z, {
                          size: "sm",
                          variant: "outline",
                          title: "Principal Protected Strategies",
                          onClick: () =>
                            C.push(
                              "/onboarding?step=".concat(
                                J.OnboardingStep.CONFIG
                              )
                            ),
                          children: "PP Strategies",
                        }),
                        (0, a.jsx)(S.Z, {
                          title: "Click to withdraw ".concat(j),
                          size: "sm",
                          variant: "secondary",
                          onClick: () => c(j),
                          children: "Withdraw",
                        }),
                        (0, a.jsx)(S.Z, {
                          title: "Click to deposit ".concat(j),
                          variant: "primary",
                          size: "sm",
                          role: "button",
                          onClick: () => i(j),
                          children: "Deposit",
                        }),
                        !R.BB &&
                          (0, a.jsx)(S.Z, {
                            title: "Click to faucet ".concat(j),
                            size: "sm",
                            variant: "primary",
                            onClick: () => r(j),
                            children: "Faucet",
                          }),
                      ],
                    }),
                  }),
                ],
              })
            );
          },
          et = n(64729),
          en = (e) => {
            let {
                collateralSummary: t,
                swap: n,
                deposit: s,
                withdraw: i,
                faucet: r,
                wrap: l,
                fundsToBeReleased: o,
              } = e,
              { isAuthenticated: w, underlyingCurrency: h } = (0, d.qr)(),
              { isSolanaWalletActive: m } = (0, et.X)(),
              { address: f, isConnected: b } = (0, p.Pk)(),
              { data: y } = (0, I.K)({ address: f, chainId: (0, Y.b)(m).id }),
              g = (0, x.Z)(c.oh),
              [v, j] = (0, u.useState)();
            return (
              (0, u.useEffect)(() => {
                t &&
                  j(
                    Object.keys(t).map((e) => ({
                      ...t[e],
                      fundsToBeReleased:
                        (null == o ? void 0 : o[t[e].currency]) || 0,
                    }))
                  );
              }, [t, o]),
              (0, a.jsx)("div", {
                className: P()("tw-overflow-auto", {
                  "tw-opacity-0": !w || !b,
                }),
                children: (0, a.jsxs)("div", {
                  className: "tw-min-w-max",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "tw-flex tw-items-center tw-gap-4 tw-border-b tw-border-b-ithaca-white-10 tw-pb-2 tw-text-xs tw-text-ithaca-white-60",
                      children: M.X9.map((e, t) =>
                        (0, a.jsx)(u.Fragment, { children: (0, M.ZA)(e) }, t)
                      ),
                    }),
                    null == v
                      ? void 0
                      : v.map((e, t) => {
                          var l;
                          let o =
                            null == v
                              ? void 0
                              : null ===
                                  (l = v.at(
                                    (t + 1) % (null == v ? void 0 : v.length)
                                  )) || void 0 === l
                              ? void 0
                              : l.currency;
                          return (0, a.jsx)(
                            ee,
                            {
                              swap: n,
                              data: e,
                              deposit: s,
                              faucet: r,
                              withdraw: i,
                              otherCurrency: o,
                              desktopBreakpoint: g,
                            },
                            t
                          );
                        }),
                    "WETH" === h &&
                      (0, a.jsxs)("div", {
                        className: "tw-flex tw-items-center tw-gap-4 tw-py-2",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "tw-flex tw-w-20 tw-shrink-0 tw-items-center tw-gap-2 tw-font-medium",
                            children: [(0, L.XX)("ETH", "tw-size-6"), "ETH"],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "tw-relative tw-flex tw-w-20 tw-shrink-0 tw-items-center tw-justify-end",
                            children: (0, D.uM)(
                              Number(null == y ? void 0 : y.formatted),
                              "string",
                              "ETH"
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: "tw-flex tw-w-40 tw-items-center",
                            children: (0, a.jsx)("button", {
                              className:
                                "tw-rounded-xl tw-border-[0.5px] tw-px-2 tw-py-1 tw-text-xxs tw-text-ithaca-white-80",
                              title: "Click to wrap ETH",
                              onClick: () => l(),
                              children: "*Wrap",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              })
            );
          },
          ea = n(61920),
          es = n(81788),
          ei = n(73935),
          er = n(3575),
          el = n.n(er),
          eo = n(34281),
          ec = n(76035),
          ed = (e) => {
            let {
                onChange: t,
                options: n,
                label: s,
                size: i = "md",
                className: r,
              } = e,
              {
                handleDropdownClick: l,
                isDropdownOpen: o,
                setIsDropdownOpen: c,
                containerRef: d,
                optionsRef: u,
                optionsPosition: w,
                mounted: h,
              } = (0, ec.x)();
            return (0, a.jsxs)("div", {
              className: ""
                .concat(el().container, " ")
                .concat(null != r ? r : ""),
              ref: d,
              children: [
                (0, a.jsx)(S.Z, {
                  title: "Click to ".concat(s),
                  size: "sm",
                  variant: "primary",
                  onClick: l,
                  className: "full-width",
                  children: s,
                }),
                h &&
                  document.querySelector("#portal") &&
                  (0, ei.createPortal)(
                    (0, a.jsx)(eo.m, {
                      optionsRef: u,
                      isDropdownOpen: o,
                      optionsPosition: w,
                      options: n,
                      handleOptionClick: (e) => {
                        c(!1), t && t(e.value, e);
                      },
                      size: i,
                    }),
                    document.querySelector("#portal")
                  ),
              ],
            });
          },
          eu = n(24514),
          ew = n(13880),
          eh = (e) => {
            let { setDashboardTab: t } = e,
              n = (0, h.useRouter)(),
              [s, i, r, b] = (0, d.qr)(
                (0, m.N)((e) => [
                  e.systemInfo,
                  e.isAuthenticated,
                  e.ithacaSDK,
                  e.underlyingCurrency,
                ])
              ),
              { showToast: y } = (0, w.Z)(),
              { isConnected: g } = (0, p.Pk)(),
              v = (0, k.t)({ chainId: (0, Y.b)().id }),
              { data: A } = (0, N.p)(),
              P = (0, x.Z)(c.oh),
              [I, M] = (0, u.useState)(),
              [B, E] = (0, u.useState)(),
              { collateralSummary: W, handleFetchingBalance: F } = (0, f.F)(),
              { data: L, refetch: D } = j({
                systemInfo: s,
                underlyingCurrency: b,
                ithacaSDK: r,
                isAuthenticated: i,
              }),
              O = async (e) => {
                if (A)
                  try {
                    let t = await A.writeContract({
                      address: s.tokenAddress[e],
                      abi: (0, l.V)([
                        "function mint(address to, uint256 amount) external",
                      ]),
                      functionName: "mint",
                      args: [
                        A.account.address,
                        (0, o.v)("5000", s.tokenDecimals[e]),
                      ],
                    });
                    await (null == v
                      ? void 0
                      : v.waitForTransactionReceipt({ hash: t }));
                  } catch (e) {
                    y({
                      title: "Faucet Failed",
                      message: "Faucet Failed, please try again.",
                      type: "error",
                    }),
                      console.error("Failed to claim faucet", e);
                  }
              };
            !(function (e = {}) {
              let { enabled: t = !0, onBlockNumber: n, config: a, ...s } = e,
                i = (0, T.Z)(e),
                r = (0, Z.x)({ config: i }),
                l = e.chainId ?? r;
              (0, u.useEffect)(() => {
                if (t && n)
                  return (function (e, t) {
                    let n, a;
                    let {
                        syncConnectedChain: s = e._internal.syncConnectedChain,
                        ...i
                      } = t,
                      r = (t) => {
                        n && n();
                        let a = e.getClient({ chainId: t });
                        return (n = (0, _.s)(a, C.q, "watchBlockNumber")(i));
                      },
                      l = r(t.chainId);
                    return (
                      s &&
                        !t.chainId &&
                        (a = e.subscribe(
                          ({ chainId: e }) => e,
                          async (e) => r(e)
                        )),
                      () => {
                        l?.(), a?.();
                      }
                    );
                  })(i, { ...s, chainId: l, onBlockNumber: n });
              }, [
                l,
                i,
                t,
                n,
                s.onError,
                s.emitMissed,
                s.emitOnBegin,
                s.poll,
                s.pollingInterval,
                s.syncConnectedChain,
              ]);
            })({
              chainId: (0, Y.b)().id,
              enabled: i,
              onBlockNumber: () => D(),
            });
            let q = (e) => {
              E(e),
                M({
                  name: Object.keys(W)[0],
                  value: s.tokenAddress[Object.keys(W)[0]],
                });
            };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(ew.Z, {
                  margin: "p-desktop-30 p-mobile-16 p-16",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "tw-text-base",
                      children: "Collateral",
                    }),
                    (0, a.jsx)(en, {
                      collateralSummary: W,
                      fundsToBeReleased: L,
                      swap: (e) => {
                        E("swap"), M({ name: e, value: s.tokenAddress[e] });
                      },
                      deposit: (e) => {
                        E("deposit"), M({ name: e, value: s.tokenAddress[e] });
                      },
                      withdraw: (e) => {
                        E("withdraw"), M({ name: e, value: s.tokenAddress[e] });
                      },
                      faucet: (e) => O(e),
                      wrap: () => {
                        E("wrap"), M({ name: b, value: s.tokenAddress[b] });
                      },
                    }),
                    P &&
                      i &&
                      (0, a.jsx)("div", {
                        className: "tw-overflow-x-auto tw-pb-0.5",
                        children: (0, a.jsxs)(eu.Z, {
                          direction: "row-center-nowrap",
                          gap: "gap-8",
                          margin: "mt-16",
                          children: [
                            (0, a.jsx)(S.Z, {
                              size: "sm",
                              variant: "outline",
                              title: "Principal Protected Strategies",
                              className: "full-width",
                              onClick: () =>
                                n.push(
                                  "/onboarding?step=".concat(
                                    J.OnboardingStep.CONFIG
                                  )
                                ),
                              children: "PP Strategies",
                            }),
                            (0, a.jsx)(S.Z, {
                              title: "Click to withdraw",
                              size: "sm",
                              variant: "secondary",
                              onClick: () => q("withdraw"),
                              className: "full-width",
                              children: "Withdraw",
                            }),
                            (0, a.jsx)(S.Z, {
                              title: "Click to deposit",
                              variant: "primary",
                              size: "sm",
                              role: "button",
                              onClick: () => q("deposit"),
                              className: "full-width",
                              children: "Deposit",
                            }),
                            !R.BB &&
                              (0, a.jsx)(ed, {
                                label: "Faucet",
                                onChange: (e, t) => {
                                  O(t.value);
                                },
                                className: "full-width",
                                options: [
                                  { name: b, value: b },
                                  { name: "USDC", value: "USDC" },
                                ],
                              }),
                          ],
                        }),
                      }),
                    !g && (0, a.jsx)(ea.Z, {}),
                  ],
                }),
                (0, a.jsx)(es.Z, {
                  setIsFetchingBalanceEnabled: F,
                  selectedCurrency: I,
                  setSelectedCurrency: M,
                  modalTab: B,
                  setModalTab: E,
                  setDashboardTab: t,
                }),
              ],
            });
          },
          em = n(55975),
          ex = n(27888),
          ep = n(85292),
          ef = n(58224),
          eb = n(20314);
        let ey = () =>
            (0, a.jsx)(ep.Z, {
              size: "loader",
              className: "ptb-150",
              children: (0, a.jsx)(E.Z, { type: "lg" }),
            }),
          eg = i()(
            () =>
              Promise.all([n.e(6134), n.e(3853), n.e(6708)]).then(
                n.bind(n, 84624)
              ),
            {
              loadableGenerated: { webpack: () => [84624] },
              ssr: !1,
              loading: ey,
            }
          ),
          ev = i()(
            () => Promise.all([n.e(6134), n.e(8606)]).then(n.bind(n, 38606)),
            {
              loadableGenerated: { webpack: () => [38606] },
              ssr: !1,
              loading: ey,
            }
          ),
          ej = i()(
            () =>
              Promise.all([
                n.e(6134),
                n.e(7702),
                n.e(5656),
                n.e(3853),
                n.e(8334),
              ]).then(n.bind(n, 6316)),
            {
              loadableGenerated: { webpack: () => [6316] },
              ssr: !1,
              loading: ey,
            }
          ),
          ek = i()(
            () => Promise.all([n.e(6134), n.e(7901)]).then(n.bind(n, 27901)),
            {
              loadableGenerated: { webpack: () => [27901] },
              ssr: !1,
              loading: ey,
            }
          ),
          eN = i()(
            () =>
              Promise.all([n.e(6134), n.e(7702), n.e(5551)]).then(
                n.bind(n, 55551)
              ),
            {
              loadableGenerated: { webpack: () => [55551] },
              ssr: !1,
              loading: ey,
            }
          ),
          eC = i()(
            () =>
              Promise.all([
                n.e(6134),
                n.e(7558),
                n.e(3068),
                n.e(4115),
                n.e(9205),
                n.e(1903),
              ]).then(n.bind(n, 99205)),
            {
              loadableGenerated: { webpack: () => [99205] },
              ssr: !1,
              loading: ey,
            }
          ),
          e_ = i()(
            () =>
              Promise.all([n.e(6134), n.e(7702), n.e(2111)]).then(
                n.bind(n, 62111)
              ),
            {
              loadableGenerated: { webpack: () => [62111] },
              ssr: !1,
              loading: ey,
            }
          ),
          eZ = [
            {
              id: "liveOrders",
              label: "Live Orders",
              content: (0, a.jsx)(eg, {}),
            },
            {
              id: "positions",
              label: "Positions",
              content: (0, a.jsx)(eC, {}),
            },
            {
              id: "tradeHistory",
              label: "Trade History",
              content: (0, a.jsx)(ej, {}),
            },
            {
              id: "settlements",
              label: "Settlements",
              content: (0, a.jsx)(ev, {}),
            },
            {
              id: "fundLockHistory",
              label: "Transaction History",
              content: (0, a.jsx)(eN, {}),
            },
            {
              id: "lendingHistory",
              label: "Lending History",
              content: (0, a.jsx)(e_, {}),
            },
            {
              id: "stakes",
              label: "$ITHACA Staked",
              content: (0, a.jsx)(ek, {}),
            },
          ];
        var eT = () => {
          let { dashboardTab: e, setDashboardTab: t } = (0, d.xc)(),
            n = (0, d.qr)((e) => e.delegatedWalletAddress);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(ex.Z, {
                children: (0, a.jsxs)(ep.Z, {
                  children: [
                    (0, a.jsx)(ef.Z, { title: "Dashboard" }),
                    (0, a.jsx)(eb.Z, {}),
                    (0, a.jsx)(eh, { setDashboardTab: t }, n),
                    (0, a.jsx)(ew.Z, {
                      margin: "p-desktop-30 mt-15 p-tablet-16 p-16",
                      children: (0, a.jsx)(
                        em.Z,
                        { tabs: eZ, activeTab: e, onChange: (e) => t(e) },
                        n
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      },
      50103: function (e) {
        e.exports = { container: "DisconnectedWallet_container__6oWtX" };
      },
      25978: function (e) {
        e.exports = { title: "headerWithInformation_title__5jA0Y" };
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
      96752: function (e, t, n) {
        "use strict";
        n.d(t, {
          P: function () {
            return u;
          },
        });
        var a = n(67294),
          s = n(38213),
          i = n(83619),
          r = n(22944),
          l = n(18419),
          o = n(65448),
          c = n(14872);
        let d = (0, i.yV)(function (e, t) {
            var n;
            let s = (0, c.B)(),
              { disabled: d = s || !1, autoFocus: u = !1, ...w } = e,
              { isFocusVisible: h, focusProps: m } = (0, r.F)({ autoFocus: u }),
              { isHovered: x, hoverProps: p } = (0, l.X)({ isDisabled: d }),
              { pressed: f, pressProps: b } = (0, o.x)({ disabled: d }),
              y = (0, i.dG)(
                {
                  ref: t,
                  type: null != (n = w.type) ? n : "button",
                  disabled: d || void 0,
                  autoFocus: u,
                },
                m,
                p,
                b
              ),
              g = (0, a.useMemo)(
                () => ({
                  disabled: d,
                  hover: x,
                  focus: h,
                  active: f,
                  autofocus: u,
                }),
                [d, x, h, f, u]
              );
            return (0, i.L6)()({
              ourProps: y,
              theirProps: w,
              slot: g,
              defaultTag: "button",
              name: "Button",
            });
          }),
          u = (0, i.yV)(function (e, t) {
            let n = (0, s.$)();
            return a.createElement(d, {
              ref: t,
              ...(0, i.dG)({ onClick: n }, e),
            });
          });
      },
      14872: function (e, t, n) {
        "use strict";
        n.d(t, {
          B: function () {
            return i;
          },
        });
        var a = n(67294);
        let s = (0, a.createContext)(void 0);
        function i() {
          return (0, a.useContext)(s);
        }
      },
      89810: function (e, t, n) {
        "use strict";
        n.d(t, {
          u: function () {
            return o;
          },
        });
        var a = n(37003),
          s = n(36100),
          i = n(82451),
          r = n(82002),
          l = n(37122);
        function o(e = {}) {
          let { abi: t, address: n, functionName: o, query: c = {} } = e,
            d = e.code,
            u = (0, l.Z)(e),
            w = (0, r.x)({ config: u }),
            h = (function (e, t = {}) {
              return {
                async queryFn({ queryKey: n }) {
                  let s = t.abi;
                  if (!s) throw Error("abi is required");
                  let { functionName: i, scopeKey: r, ...l } = n[1],
                    o = (() => {
                      let e = n[1];
                      if (e.address) return { address: e.address };
                      if (e.code) return { code: e.code };
                      throw Error("address or code is required");
                    })();
                  if (!i) throw Error("functionName is required");
                  return (0, a.L)(e, {
                    abi: s,
                    functionName: i,
                    args: l.args,
                    ...o,
                    ...l,
                  });
                },
                queryKey: (function (e = {}) {
                  let { abi: t, ...n } = e;
                  return ["readContract", (0, s.OP)(n)];
                })(t),
              };
            })(u, { ...e, chainId: e.chainId ?? w }),
            m = !!((n || d) && t && o && (c.enabled ?? !0));
          return (0, i.aM)({
            ...c,
            ...h,
            enabled: m,
            structuralSharing: c.structuralSharing ?? s.if,
          });
        }
      },
    },
  ]);
