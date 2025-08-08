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
      (e._sentryDebugIds[t] = "de7930af-e694-442b-b1e9-b76d2ea53577"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-de7930af-e694-442b-b1e9-b76d2ea53577"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8016, 505],
    {
      91269: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(25675),
          l = n.n(r),
          s = n(81989);
        t.Z = (e) => {
          let { height: t = 30, width: n = 30, className: r } = e,
            { address: i } = (0, s.Pk)();
          return (0, a.jsx)(l(), {
            src: "https://mywalleticon.com/usericon/".concat(i),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: n,
            height: t,
            className: r,
          });
        };
      },
      50505: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(85893),
          r = n(41664),
          l = n.n(r),
          s = n(39332),
          i = n(54950),
          c = n(6850),
          o = n.n(c);
        t.default = (e) => {
          let { onClick: t } = e,
            n = (0, s.usePathname)(),
            { navigationItems: r } = (0, i.K)(),
            c = (e) => {
              if ("#" === e || !n) return !1;
              let t = e.split("/")[1].split("?")[0];
              return "/" === e ? n === e : n.startsWith("/".concat(t));
            };
          return (0, a.jsx)("nav", {
            className: o().nav,
            children: r.map((e) =>
              (0, a.jsx)(
                l(),
                {
                  href: e.disabled ? n : e.path,
                  onClick: t,
                  className: "".concat(
                    c(e.path)
                      ? "tw-text-primary"
                      : e.disabled
                      ? o().disabled
                      : "tw-text-ithaca-white-40"
                  ),
                  children: e.displayText,
                },
                e.titleKey
              )
            ),
          });
        };
      },
      73397: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return _;
            },
          });
        var a = n(85893),
          r = n(67294),
          l = n(39332),
          s = n(50505),
          i = n(42746),
          c = n(43332),
          o = n(99369),
          d = n(92321),
          u = n(15615),
          p = n(98971),
          m = n.n(p),
          b = n(93967),
          w = n.n(b),
          h = n(91269),
          f = (e) => {
            let { onAccountModalOpen: t } = e,
              { address: n, isConnected: l } = (0, d.m)(),
              { openConnectModal: s } = (0, u.We)(),
              { openAccountModal: i } = (0, u.Ap)(),
              [c, o] = (0, r.useState)(!1);
            return ((0, r.useEffect)(() => {
              o(!0);
            }, []),
            c)
              ? l
                ? (0, a.jsxs)("button", {
                    onClick: () => {
                      null == t || t(), null == i || i();
                    },
                    type: "button",
                    className: w()(m().connectedWallet, "tw-rounded-2xl"),
                    children: [
                      (0, a.jsxs)("span", {
                        className: m().displayName,
                        children: [
                          null == n ? void 0 : n.slice(0, 6),
                          "...",
                          null == n ? void 0 : n.slice(-4),
                        ],
                      }),
                      (0, a.jsx)(h.Z, { className: "!tw-size-8" }),
                    ],
                  })
                : (0, a.jsx)("button", {
                    onClick: s,
                    type: "button",
                    className: w()(m().connectWallet, "tw-rounded-2xl"),
                    children: "Connect Wallet",
                  })
              : (0, a.jsx)("button", {
                  type: "button",
                  className: w()(m().connectWallet, "tw-rounded-2xl"),
                  children: "Connect Wallet",
                });
          };
        let g = r.forwardRef(function (e, t) {
          let { title: n, titleId: a, ...l } = e;
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
                "aria-labelledby": a,
              },
              l
            ),
            n ? r.createElement("title", { id: a }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 4.5v15m7.5-7.5h-15",
            })
          );
        });
        var x = n(80362),
          y = n(3298),
          v = n(21335),
          j = n.n(v),
          _ = (e) => {
            let { className: t } = e,
              n = (0, x.Z)(y.Gh),
              d = (0, x.Z)(y.rN),
              [u, p] = (0, r.useState)(!1),
              m = (0, l.useRouter)(),
              b = (0, l.usePathname)(),
              w = null == b ? void 0 : b.startsWith("/agents"),
              h = () => {
                p(!u), document.body.classList.toggle("is-active");
              };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("header", {
                  className: "tw-px-5 tw-pb-10 tw-pt-5",
                  children: (0, a.jsxs)("div", {
                    className: j().container,
                    children: [
                      (0, a.jsxs)("div", {
                        className: j().left,
                        children: [
                          (0, a.jsx)("span", {
                            className: j().logo,
                            onClick: () => {
                              m.push("/trading/dynamic-option-strategies");
                            },
                            children: (0, a.jsx)(o.Z, {}),
                          }),
                          !(n || d) && (0, a.jsx)(s.default, {}),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: j().right,
                        children: [
                          w &&
                            !(n || d) &&
                            (0, a.jsxs)("div", {
                              className:
                                "tw-flex tw-items-center tw-gap-2 tw-mr-4",
                              children: [
                                (0, a.jsxs)("button", {
                                  className:
                                    "tw-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-transparent tw-border tw-border-white/20 tw-rounded-lg tw-text-sm tw-text-white tw-font-normal tw-transition-all tw-duration-200 hover:tw-bg-white/10 hover:tw-border-white/30",
                                  onClick: () => m.push("/agents/new/edit"),
                                  title: "Create Agent",
                                  children: [
                                    (0, a.jsx)(g, {
                                      className: "tw-h-4 tw-w-4",
                                    }),
                                    (0, a.jsx)("span", {
                                      children: "Create Agent",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("button", {
                                  className:
                                    "tw-flex tw-items-center tw-gap-2 tw-px-3 tw-py-2 tw-bg-green-500 tw-text-black tw-rounded-lg tw-text-sm tw-font-normal tw-transition-all tw-duration-200 hover:tw-bg-green-400",
                                  onClick: () => m.push("/agents/deposit"),
                                  title: "Deposit",
                                  children: (0, a.jsx)("span", {
                                    children: "Deposit",
                                  }),
                                }),
                              ],
                            }),
                          (0, a.jsx)(f, {}),
                          (n || d) &&
                            (0, a.jsx)(c.Z, { onClick: h, isActive: u }),
                        ],
                      }),
                    ],
                  }),
                }),
                (d || n) &&
                  (0, a.jsx)(i.Z, {
                    isActive: u,
                    onClick: h,
                    variant: "simple",
                  }),
              ],
            });
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
      44718: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return l;
          },
          h: function () {
            return r;
          },
        });
        var a = n(67294);
        let r = (0, a.createContext)({});
        function l() {
          return (0, a.useContext)(r);
        }
      },
      54306: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return c;
          },
          z: function () {
            return i;
          },
        });
        var a = n(67294);
        let r = [],
          l = {
            autoConnect: !1,
            connecting: !1,
            connected: !1,
            disconnecting: !1,
            select() {
              s("call", "select");
            },
            connect: () => Promise.reject(s("call", "connect")),
            disconnect: () => Promise.reject(s("call", "disconnect")),
            sendTransaction: () => Promise.reject(s("call", "sendTransaction")),
            signTransaction: () => Promise.reject(s("call", "signTransaction")),
            signAllTransactions: () =>
              Promise.reject(s("call", "signAllTransactions")),
            signMessage: () => Promise.reject(s("call", "signMessage")),
            signIn: () => Promise.reject(s("call", "signIn")),
          };
        function s(e, t) {
          let n = Error(
            `You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
          );
          return console.error(n), n;
        }
        Object.defineProperty(l, "wallets", {
          get: () => (s("read", "wallets"), r),
        }),
          Object.defineProperty(l, "wallet", {
            get: () => (s("read", "wallet"), null),
          }),
          Object.defineProperty(l, "publicKey", {
            get: () => (s("read", "publicKey"), null),
          });
        let i = (0, a.createContext)(l);
        function c() {
          return (0, a.useContext)(i);
        }
      },
      43210: function (e, t, n) {
        "use strict";
        n.d(t, {
          y: function () {
            return a;
          },
        });
        let a = (0, n(86164).a)({
          id: 42161,
          name: "Arbitrum One",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://arbiscan.io",
              apiUrl: "https://api.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7654707,
            },
          },
        });
      },
      86900: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return a;
          },
        });
        let a = (0, n(86164).a)({
          id: 421614,
          name: "Arbitrum Sepolia",
          nativeCurrency: {
            name: "Arbitrum Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://sepolia.arbiscan.io",
              apiUrl: "https://api-sepolia.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 81930,
            },
          },
          testnet: !0,
        });
      },
      57393: function (e, t, n) {
        "use strict";
        n.d(t, {
          v: function () {
            return a;
          },
        });
        let a = (0, n(86164).a)({
          id: 80001,
          name: "Polygon Mumbai",
          nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.ankr.com/polygon_mumbai"] },
          },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://mumbai.polygonscan.com",
              apiUrl: "https://api-testnet.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 25770160,
            },
          },
          testnet: !0,
        });
      },
    },
  ]);
