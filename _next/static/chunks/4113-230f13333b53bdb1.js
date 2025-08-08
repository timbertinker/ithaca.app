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
      (e._sentryDebugIds[t] = "68be0cc8-b586-4d64-8b3e-8e113283e117"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-68be0cc8-b586-4d64-8b3e-8e113283e117"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4113, 6656],
    {
      43529: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return c;
          },
        });
        var a = n(85893),
          o = n(67294),
          s = n(24514),
          r = n(89564),
          i = n.n(r);
        let c = (e) => {
          let {
            component: t,
            value: n,
            label: o,
            checked: r = !1,
            onChange: c,
            labelClassName: l,
            className: d,
            checkmarkClassName: u,
          } = e;
          return (0, a.jsxs)("label", {
            className: "".concat(i().container, " ").concat(d),
            children: [
              (0, a.jsx)("input", {
                type: "checkbox",
                onChange: () => {
                  c && c(null != n ? n : o, !r);
                },
                checked: r,
                className: u,
              }),
              (0, a.jsxs)(s.Z, {
                direction: "row-center",
                children: [t, (0, a.jsx)("p", { className: l, children: o })],
              }),
            ],
          });
        };
        t.Z = (e) => {
          let {
              component: t,
              label: n,
              checked: r = !1,
              clearCheckMark: c,
              onChange: l,
              labelClassName: d,
              className: u,
              checkmarkClassName: h,
            } = e,
            [m, w] = (0, o.useState)(r),
            p = (e) => {
              w(e.currentTarget.checked), l && l(n, e.currentTarget.checked);
            };
          return (
            (0, o.useEffect)(() => {
              c && w(!1);
            }, [c]),
            (0, a.jsxs)("label", {
              className: "".concat(i().container, " ").concat(u),
              children: [
                (0, a.jsx)("input", {
                  type: "checkbox",
                  onChange: (e) => p(e),
                  checked: m,
                  className: h,
                }),
                (0, a.jsxs)(s.Z, {
                  children: [
                    t,
                    " ",
                    (0, a.jsx)("p", { className: d, children: n }),
                  ],
                }),
              ],
            })
          );
        };
      },
      91269: function (e, t, n) {
        "use strict";
        var a = n(85893),
          o = n(25675),
          s = n.n(o),
          r = n(81989);
        t.Z = (e) => {
          let { height: t = 30, width: n = 30, className: o } = e,
            { address: i } = (0, r.Pk)();
          return (0, a.jsx)(s(), {
            src: "https://mywalleticon.com/usericon/".concat(i),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: n,
            height: t,
            className: o,
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
          o = n(93967),
          s = n.n(o),
          r = n(67294),
          i = n(43495),
          c = n(51526),
          l = n(73935),
          d = n(37422),
          u = n(65440),
          h = n(27531),
          m = n(3274),
          w = n.n(m);
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
            title: n,
            onCloseModal: o,
            onSubmitOrder: m,
            isLoading: f,
            isOpen: y,
            hideFooter: g,
            className: k,
            headerContainerClassName: x = "",
            showCloseIcon: _ = !0,
          } = e;
          (0, r.useEffect)(() => {
            y
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && o();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [y, o]);
          let b = (0, a.jsx)(i.E.div, {
            className: s()(w().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => o(),
            children: (0, a.jsxs)(i.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: s()(
                w().modal,
                k,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: p,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, a.jsxs)("div", {
                  className: s()(w().modalHeader, "tw-px-6 tw-py-4", x),
                  children: [
                    (0, a.jsx)("h4", {
                      className: s()(
                        w().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: n,
                    }),
                    _
                      ? (0, a.jsx)(d.Z, {
                          onClick: o,
                          className: w().buttonClose,
                          title: "Click to close modal",
                          children: (0, a.jsx)(h.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: s()(
                    w().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !g && m
                      ? (0, a.jsx)("div", {
                          className: w().modalFooter,
                          children: (0, a.jsx)(d.Z, {
                            className: s()(w().confirmButton, {
                              [w().buttonLoading]: f,
                            }),
                            onClick: m,
                            title: "Click to confirm",
                            children: f ? (0, a.jsx)(u.Z, {}) : "Confirm",
                          }),
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
          return y && document.body
            ? l.createPortal(
                (0, a.jsx)(c.M, { initial: !0, mode: "wait", children: b }),
                document.body
              )
            : null;
        };
      },
      24113: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return I;
          },
        });
        var a = n(85893),
          o = n(39332),
          s = n(67294),
          r = n(89469),
          i = n(59731),
          c = n(47236),
          l = n(91269),
          d = n(21050),
          u = n(15615),
          h = n(15418),
          m = n(37422),
          w = n(46656),
          p = n(43529),
          f = n(88601),
          y = n.n(f),
          g = (e) => {
            let {
                isOpen: t,
                isLoading: n,
                onCloseModal: o,
                onDisconnectWallet: r,
                onAgreeAndContinue: i,
              } = e,
              [c, l] = (0, s.useState)([
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
                l(
                  c.map((t) => ({
                    ...t,
                    isChecked: t.id === e ? !t.isChecked : t.isChecked,
                  }))
                );
              };
            return (0, a.jsx)(w.default, {
              title: "Legal Terms",
              isOpen: t,
              isLoading: n,
              onCloseModal: o,
              hideFooter: !1,
              showCloseIcon: !1,
              className: y().tncModal,
              children: (0, a.jsxs)("div", {
                className: y().acknowledgeTerms,
                children: [
                  (0, a.jsx)("p", {
                    className: y().title,
                    children:
                      "Check the boxes to confirm your acknowledgement and acceptance of the following:",
                  }),
                  c.map((e) =>
                    (0, a.jsx)(
                      p.Z,
                      {
                        label: e.name,
                        checked: e.isChecked,
                        labelClassName: y().labelCheckBox,
                        className: y().checkBox,
                        onChange: () => d(e.id),
                      },
                      e.id
                    )
                  ),
                  (0, a.jsxs)("div", {
                    className: y().buttonContainer,
                    children: [
                      (0, a.jsx)(m.Z, {
                        title: "Disconnect Wallet",
                        variant: "outline",
                        onClick: r,
                        size: "sm",
                        className: y().button,
                        children: "Disconnect Wallet",
                      }),
                      (0, a.jsx)(m.Z, {
                        title: "Agree and Continue",
                        variant: "primary",
                        onClick: i,
                        size: "sm",
                        className: ""
                          .concat(y().button, " ")
                          .concat(y().primaryButton),
                        disabled: c.some((e) => !1 == e.isChecked),
                        children: "Agree and Continue",
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          k = n(98971),
          x = n.n(k),
          _ = n(93967),
          b = n.n(_),
          v = n(67253),
          C = n(15741),
          N = n(92400),
          j = (e) => {
            let { openChainModal: t, children: n, isWrongNetwork: o } = e,
              { currentStep: r, updateStep: i } = (0, s.useContext)(
                C.OnboardingContext
              );
            return (
              (0, s.useEffect)(() => {
                o ? null == i || i(v.P.WRONG_NETWORK) : null == i || i(void 0);
              }, [o]),
              (0, a.jsx)(N.Z, {
                footer: (0, a.jsx)("div", {
                  className: "tw-flex tw-items-end tw-justify-end",
                  children: (0, a.jsx)(m.Z, {
                    title: "Continue",
                    className: "tw-h-[28px] tw-w-1/2",
                    onClick: t,
                    children: "Switch Network",
                  }),
                }),
                isOpen: r === v.P.WRONG_NETWORK,
                ignoreDisabledStatus: !0,
                align: "end",
                side: "top",
                children: (0, a.jsx)("div", { children: n }),
              })
            );
          },
          T = n(36703),
          A = n(64729),
          E = n(85088),
          W = n(54306),
          L = n(44718),
          M = n(81989),
          I = () => {
            let { isSolanaWalletActive: e } = (0, A.X)(),
              {
                ithacaSDK: t,
                initIthacaSDK: n,
                disconnect: m,
                isConnecting: w,
              } = (0, i.qr)(),
              { showToast: p } = (0, c.Z)(),
              { connectModalOpen: f } = (0, u.We)(),
              { isConnected: y, address: k } = (0, M.Pk)(),
              { data: _ } = (0, r.p)(),
              { data: v } = (function () {
                let { connection: e } = (0, L.R)(),
                  {
                    publicKey: t,
                    signMessage: n,
                    signTransaction: a,
                    signAllTransactions: o,
                    connect: r,
                    disconnect: i,
                  } = (0, W.O)();
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
                      signMessage: async (e) => await n(e),
                      signTransaction: async (e) => a(e),
                      signAllTransactions: async (e) => await o(e),
                      signTypedData: async (e, t, a) => {
                        let o = (function (e, t, n) {
                          let a = JSON.stringify({
                            domain: e,
                            types: t,
                            value: n,
                          });
                          return new TextEncoder().encode(a);
                        })(e, t, a);
                        return await n(o);
                      },
                      connect: async () => (await r(), s),
                      disconnect: async () => {
                        await i();
                      },
                      extend: function (e) {
                        let t = e(this);
                        return { ...this, ...t };
                      },
                    };
                  }, [t]),
                };
              })(),
              C = (0, W.O)(),
              N = (0, o.useRouter)(),
              [I, Z] = (0, s.useState)(!1),
              B = async () => {
                try {
                  let e = await t.points.addAccountData(
                    "tc_confirmation",
                    "true"
                  );
                  h.Z.track("Account created"),
                    "OK" === e.result && (Z(!1), N.push("/onboarding"));
                } catch (e) {
                  Z(!1);
                }
              },
              S = async () => {
                let a = localStorage.getItem("ithaca.session");
                if ((await n(e ? C : _)) && !a) {
                  var o;
                  p({
                    title: "Wallet Ownership Verified",
                    message:
                      "Your wallet ownership has been verified. You can now deposit funds and trade.",
                  }),
                    (0, T.Lv)();
                  let e = await t.auth.getSession();
                  (null == e
                    ? void 0
                    : null === (o = e.accountInfos) || void 0 === o
                    ? void 0
                    : o.tc_confirmation) || Z(!0);
                }
              };
            return ((0, s.useEffect)(() => {
              if (!f) return;
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
            }, [f, p]),
            (0, s.useEffect)(() => {
              w || (_ || v ? S() : y || m());
            }, [k, _, v, y]),
            e)
              ? (0, a.jsx)(E.T, {})
              : (0, a.jsx)(u.NL.Custom, {
                  children: (e) => {
                    let {
                        account: t,
                        chain: n,
                        openAccountModal: o,
                        openChainModal: s,
                        openConnectModal: r,
                        authenticationStatus: i,
                        mounted: c,
                      } = e,
                      u = c && "loading" !== i,
                      h = u && t && n && (!i || "authenticated" === i);
                    return (0, a.jsx)("div", {
                      ...(!u && {
                        "aria-hidden": !0,
                        className: x().container,
                      }),
                      children: h
                        ? n.unsupported
                          ? (0, a.jsx)(j, {
                              openChainModal: s,
                              isWrongNetwork: n.unsupported,
                              children: (0, a.jsx)("div", {
                                children: (0, a.jsxs)("button", {
                                  onClick: s,
                                  type: "button",
                                  className: b()(
                                    x().wrongNetwork,
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
                              className: x().termsContainer,
                              children: [
                                (0, a.jsx)(g, {
                                  isOpen: I && h,
                                  onCloseModal: () => Z(!1),
                                  onDisconnectWallet: o,
                                  onAgreeAndContinue: B,
                                }),
                                (0, a.jsx)(j, {
                                  openChainModal: s,
                                  isWrongNetwork: n.unsupported,
                                  children: (0, a.jsxs)("button", {
                                    onClick: o,
                                    type: "button",
                                    className: b()(
                                      x().connectedWallet,
                                      "tw-rounded-2xl"
                                    ),
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: x().displayName,
                                        children: t.displayName,
                                      }),
                                      (0, a.jsx)(l.Z, {
                                        className: "!tw-size-8",
                                      }),
                                      (0, a.jsx)(d.Z, {
                                        className: x().chevron,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, a.jsx)("button", {
                            onClick: r,
                            type: "button",
                            className: b()(x().connectWallet, "tw-rounded-2xl"),
                            children: "Connect Wallet",
                          }),
                    });
                  },
                });
          };
      },
      36703: function (e, t, n) {
        "use strict";
        n.d(t, {
          AR: function () {
            return u;
          },
          Lf: function () {
            return _;
          },
          Lv: function () {
            return l;
          },
          Qy: function () {
            return h;
          },
          RT: function () {
            return k;
          },
          Vd: function () {
            return g;
          },
          X_: function () {
            return v;
          },
          Xu: function () {
            return d;
          },
          Zo: function () {
            return m;
          },
          Zp: function () {
            return b;
          },
          _p: function () {
            return x;
          },
          fE: function () {
            return p;
          },
          hO: function () {
            return C;
          },
          p: function () {
            return w;
          },
          sk: function () {
            return y;
          },
          yp: function () {
            return f;
          },
        });
        var a = n(49321),
          o = n(15418),
          s = n(82649);
        let r = async (e) => {
            let { method: t = "POST", data: n, path: a, noCache: o = !1 } = e;
            try {
              let e = await (0, s.Sp)("POINTS_URL"),
                r = {
                  method: t,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json, text/plain, */*",
                    "Cache-Control": o ? "no-cache" : "",
                  },
                  ...(n && { body: JSON.stringify(n) }),
                },
                i = await fetch("".concat(e, "/").concat(a), r),
                c = await i.json();
              if (!i.ok) {
                let e = Error();
                throw ((e.name = c.name), (e.message = c.message), e);
              }
              return { data: c };
            } catch (e) {
              return { error: e };
            }
          },
          i = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = localStorage.getItem("ithaca.session");
            if (t) return JSON.parse(t);
            if (e) return "";
            throw Error("No session info");
          },
          c = async (e) => {
            let t = { walletAddress: i().ethAddress, referralCode: e };
            return await r({ data: t, path: "users/user" });
          },
          l = async function (e) {
            var t;
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = i();
            console.debug("GetUserData");
            let s = await r({
              method: "GET",
              path: "users/user?walletAddress=".concat(a.ethAddress),
              noCache: !0,
            });
            if (
              !n &&
              s.data &&
              !Object.keys(
                null == s
                  ? void 0
                  : null === (t = s.data) || void 0 === t
                  ? void 0
                  : t.user
              ).length
            ) {
              let { error: t } = await c(e);
              return t
                ? { error: t }
                : (e
                    ? o.Z.track("Referral wallet connect", { referralToken: e })
                    : o.Z.track("Wallet connect"),
                  await l(e));
            }
            return s;
          },
          d = async () => {
            let e = i();
            return await r({
              method: "GET",
              path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
            });
          },
          u = async () => {
            let e = i();
            return await r({
              method: "GET",
              path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
            });
          },
          h = async () => {
            let e = i();
            return await r({
              method: "GET",
              path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
            });
          },
          m = async (e) => {
            let t = i();
            return await r({
              method: "GET",
              path: "auth/discord/callback?token="
                .concat(e, "&walletAddress=")
                .concat(t.ethAddress),
            });
          },
          w = async () => {
            let e = i();
            return await r({
              method: "GET",
              path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
            });
          },
          p = async (e) => {
            let { displayName: t, isAvatar: n, signature: o } = e,
              s = {
                walletAddress: i().ethAddress,
                displayName: (0, a.U)(t) ? t.toLowerCase() : t,
                isAvatar: n,
                signature: o,
              };
            return await r({ method: "PUT", path: "users/user", data: s });
          },
          f = async (e) =>
            await r({
              method: "POST",
              path: "auth/farcaster/callback",
              data: e,
            }),
          y = async (e) => {
            let {
                page: t,
                pageLimit: n,
                sortField: a,
                sortType: o,
                filterBy: s,
              } = e,
              c = {
                walletAddress: i().ethAddress,
                page: t,
                pageSize: n,
                sortField: a,
                sortType: o,
                ...("All" === s ? {} : { type: s }),
              };
            return await r({ data: c, path: "rewards/rewardsHistory" });
          },
          g = async () => {
            let e = i();
            return await r({
              method: "GET",
              path: "badges/profile?walletAddress=".concat(e.ethAddress),
            });
          },
          k = async () => await r({ method: "GET", path: "badges/all" }),
          x = async (e) =>
            await r({
              method: "GET",
              path: "users/get-referrals?referralCode=".concat(e),
            }),
          _ = async (e) =>
            await r({ method: "POST", path: "stats/leaderboard24hr", data: e }),
          b = async (e) =>
            await r({ method: "POST", path: "stats/leaderboard", data: e }),
          v = async (e) =>
            await r({
              method: "GET",
              path: "stats/user?walletAddress=".concat(e),
            }),
          C = async (e, t) =>
            await r({
              method: "GET",
              path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
            });
      },
      89564: function (e) {
        e.exports = { container: "CheckBox_container__QFNwK" };
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
    },
  ]);
