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
      (e._sentryDebugIds[t] = "a560fde4-e29e-4b20-9da7-4b094f6114a3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a560fde4-e29e-4b20-9da7-4b094f6114a3"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9250],
    {
      22973: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(85893),
          r = n(67294),
          s = n(41664),
          l = n.n(s),
          i = n(54950),
          c = n(21050),
          o = n(15418),
          d = n(59731),
          h = n(6850),
          u = n.n(h),
          w = n(39332);
        t.default = (e) => {
          let { onClick: t } = e,
            n = (0, w.usePathname)(),
            [s, h] = (0, r.useState)(0),
            {
              ithacaSDK: m,
              isAuthenticated: v,
              openOrdersCount: f,
            } = (0, d.qr)(),
            { tradingPageTab: g } = (0, d.xc)(),
            { navigationItems: p } = (0, i.K)(),
            x = (e) => {
              if ("#" === e || !n) return !1;
              let t = e.split("/")[1].split("?")[0];
              return "/" === e ? n === e : n.startsWith("/".concat(t));
            };
          (0, r.useEffect)(() => {
            v ? m.orders.clientOpenOrders().then((e) => h(e.length)) : h(0);
          }, [v]),
            (0, r.useEffect)(() => h(f), [f]);
          let z = (e, n) => {
            !e &&
              "#" !== n &&
              (o.Z.track("Menu interactions", { path: n }), t && t());
          };
          return (0, a.jsx)("nav", {
            className: u().nav,
            children: p.map((e) => {
              let { titleKey: t, disabled: r, path: i, displayText: o } = e,
                d = "/trading" === i ? "".concat(i, "/").concat(g) : i;
              return (0, a.jsxs)(
                l(),
                {
                  href: r ? n : d,
                  className: " ".concat(
                    x(i)
                      ? "tw-text-primary"
                      : r
                      ? u().disabled
                      : "tw-text-ithaca-white-40"
                  ),
                  title: t,
                  onClick: () => z(r, i),
                  children: [
                    o,
                    "More" === o && (0, a.jsx)(c.Z, {}),
                    "Dashboard" === o &&
                      s > 0 &&
                      (0, a.jsx)("span", { className: u().badge, children: s }),
                  ],
                },
                t
              );
            }),
          });
        };
      },
      85088: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return l;
          },
        });
        var a = n(85893),
          r = n(5152);
        let s = n.n(r)()(
            async () =>
              (await Promise.all([n.e(544), n.e(2409)]).then(n.bind(n, 62409)))
                .WalletMultiButton,
            { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
          ),
          l = () => (0, a.jsx)(s, {});
      },
      7048: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return ed;
            },
          });
        var a,
          r,
          s,
          l,
          i,
          c,
          o,
          d = n(85893),
          h = n(67294),
          u = n(39332),
          w = n(59731),
          m = n(22973),
          v = n(32010);
        function f() {
          return (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var g = function (e) {
          return h.createElement(
            "svg",
            f(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
              },
              e
            ),
            h.createElement(
              "mask",
              {
                id: "switch_svg__a",
                width: 24,
                height: 24,
                x: 0,
                y: 0,
                maskUnits: "userSpaceOnUse",
                style: { maskType: "alpha" },
              },
              a ||
                (a = h.createElement("path", {
                  fill: "#D9D9D9",
                  d: "M0 0h24v24H0z",
                }))
            ),
            r ||
              (r = h.createElement(
                "g",
                { mask: "url(#switch_svg__a)" },
                h.createElement("path", {
                  fill: "#fff",
                  d: "M9.935 1.192q.503-.12 1.01-.156T11.961 1q2.139 0 4.054.76a11.2 11.2 0 0 1 3.401 2.105 11.1 11.1 0 0 1 2.436 3.172A10.7 10.7 0 0 1 23 11h-1a9.8 9.8 0 0 0-1.037-3.526 10 10 0 0 0-2.16-2.827 10.3 10.3 0 0 0-3.019-1.899 9.9 9.9 0 0 0-3.615-.737l1.935 1.935-.708.708zm4.13 21.616q-.503.12-1.01.157a15 15 0 0 1-1.016.035q-2.139 0-4.053-.76a11.2 11.2 0 0 1-3.402-2.104 11.1 11.1 0 0 1-2.436-3.174A10.7 10.7 0 0 1 1 13h1a9.9 9.9 0 0 0 1.04 3.526 9.9 9.9 0 0 0 2.157 2.827 10.3 10.3 0 0 0 3.019 1.899 9.9 9.9 0 0 0 3.615.736l-1.935-1.934.708-.708z",
                })
              )),
            s ||
              (s = h.createElement("path", {
                fill: "#fff",
                d: "M14.25 12.5a.5.5 0 0 0 0 1zm.005 1a.5.5 0 0 0 0-1zm1.245-4V9zm.357-1.5h.5V7h-.5zM8.5 9.5V9zm5.75 4h.005v-1h-.005zM14 13a.25.25 0 0 1 .25-.25v1A.75.75 0 0 0 15 13zm.25-.25a.25.25 0 0 1 .25.25h-1c0 .414.336.75.75.75zm.25.25a.25.25 0 0 1-.25.25v-1a.75.75 0 0 0-.75.75zm-.25.25A.25.25 0 0 1 14 13h1a.75.75 0 0 0-.75-.75zM16 10.5v5h1v-5zm-.5 5.5h-7v1h7zM8 15.5v-7H7v7zm.5.5a.5.5 0 0 1-.5-.5H7A1.5 1.5 0 0 0 8.5 17zm7.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm1-5A1.5 1.5 0 0 0 15.5 9v1a.5.5 0 0 1 .5.5zM8.5 8h7.357V7H8.5zm-.5.5a.5.5 0 0 1 .5-.5V7A1.5 1.5 0 0 0 7 8.5zm-1 0A1.5 1.5 0 0 0 8.5 10V9a.5.5 0 0 1-.5-.5zm8.5.5h-7v1h7z",
              }))
          );
        };
        function p() {
          return (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var x = function (e) {
            return h.createElement(
              "svg",
              p(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  fill: "none",
                },
                e
              ),
              l ||
                (l = h.createElement("path", {
                  fill: "#5EE192",
                  d: "M9.935 1.192q.503-.12 1.01-.156T11.961 1q2.139 0 4.054.76a11.2 11.2 0 0 1 3.401 2.105 11.1 11.1 0 0 1 2.436 3.172A10.7 10.7 0 0 1 23 11h-1a9.8 9.8 0 0 0-1.037-3.526 10 10 0 0 0-2.16-2.827 10.3 10.3 0 0 0-3.019-1.899 9.9 9.9 0 0 0-3.615-.737l1.935 1.935-.708.708zm4.13 21.616q-.503.12-1.01.157a15 15 0 0 1-1.016.035q-2.139 0-4.053-.76a11.2 11.2 0 0 1-3.402-2.104 11.1 11.1 0 0 1-2.436-3.174A10.7 10.7 0 0 1 1 13h1a9.9 9.9 0 0 0 1.04 3.526 9.9 9.9 0 0 0 2.157 2.827 10.3 10.3 0 0 0 3.019 1.899 9.9 9.9 0 0 0 3.615.736l-1.935-1.934.708-.708zM14.25 12.5a.5.5 0 0 0 0 1zm.005 1a.5.5 0 0 0 0-1zm1.245-4V9zm.357-1.5h.5V7h-.5zM8.5 9.5V9zm5.75 4h.005v-1h-.005zM14 13a.25.25 0 0 1 .25-.25v1A.75.75 0 0 0 15 13zm.25-.25a.25.25 0 0 1 .25.25h-1c0 .414.336.75.75.75zm.25.25a.25.25 0 0 1-.25.25v-1a.75.75 0 0 0-.75.75zm-.25.25A.25.25 0 0 1 14 13h1a.75.75 0 0 0-.75-.75zM16 10.5v5h1v-5zm-.5 5.5h-7v1h7zM8 15.5v-7H7v7zm.5.5a.5.5 0 0 1-.5-.5H7A1.5 1.5 0 0 0 8.5 17zm7.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm1-5A1.5 1.5 0 0 0 15.5 9v1a.5.5 0 0 1 .5.5zM8.5 8h7.357V7H8.5zm-.5.5a.5.5 0 0 1 .5-.5V7A1.5 1.5 0 0 0 7 8.5zm-1 0A1.5 1.5 0 0 0 8.5 10V9a.5.5 0 0 1-.5-.5zm8.5.5h-7v1h7z",
                }))
            );
          },
          z = n(47236),
          j = n(98029),
          b = n(9681);
        let y = () => {
          let { showToast: e, showErrorToast: t } = (0, z.Z)(),
            [n, a, r] = (0, w.qr)(
              (0, v.N)((e) => [
                e.ithacaSDK,
                e.setDelegatedWalletAddress,
                e.underlyingCurrency,
              ])
            ),
            { mutate: s, isPending: l } = (0, j.D)({
              mutationKey: ["switch-delegation-wallet"],
              mutationFn: async (e) => {
                let t = "WSOL" === r ? e : e.toLocaleLowerCase(),
                  s = await n.auth.switchAuth({ addr: t });
                a(s.origAddr ? s.ethAddress : null),
                  localStorage.setItem("ithaca.session", JSON.stringify(s));
              },
              onSuccess: (t, n) => {
                e({
                  title: "Wallet switched",
                  message: "Switched to ".concat((0, b.C)(n), " successfully"),
                });
              },
              onError: (e, n) => {
                t({
                  title: "Wallet switch failed",
                  message: "Failed to switch to ".concat((0, b.C)(n)),
                });
              },
            });
          return { delegateWallet: s, isPending: l };
        };
        var C = n(88238);
        let L = (e) => {
          let { delay: t = 0, onError: n, onSuccess: a } = e,
            [, r] = (0, C.m9)(),
            { mutate: s, isPending: l } = (0, j.D)({
              mutationKey: ["copy-to-clipboard"],
              mutationFn: async (e) => {
                await new Promise((e) => setTimeout(e, t)), await r(e);
              },
              onError: n,
              onSuccess: a,
            });
          return { copyToClipboard: s, isCopying: l };
        };
        var k = n(89469),
          M = n(88144),
          A = n(67930);
        let E = () => {
          let { data: e } = (0, k.p)(),
            [t, n, a] = (0, w.qr)(
              (0, v.N)((e) => [
                e.ithacaSDK,
                e.isAuthenticated,
                e.delegatedWalletAddress,
              ])
            ),
            { data: r = [] } = (0, M.a)({
              queryKey: [A.Tk],
              queryFn: () => t.wallets.switchList(),
              select: (e) => e.payload,
              enabled: n,
            }),
            {
              wallets: s,
              mainWallet: l,
              isMainWalletSelected: i,
            } = (0, h.useMemo)(() => {
              let t = null == e ? void 0 : e.account.address,
                n =
                  !a ||
                  (null == t ? void 0 : t.toLocaleLowerCase()) ===
                    (null == a ? void 0 : a.toLocaleLowerCase());
              return {
                wallets: Array.from(new Set([...r, a].filter(Boolean))).filter(
                  (e) =>
                    !!n ||
                    e.toLocaleLowerCase() !==
                      (null == t ? void 0 : t.toLocaleLowerCase())
                ),
                mainWallet: t,
                isMainWalletSelected: n,
              };
            }, [r, a, e]);
          return { wallets: s, mainWallet: l, isMainWalletSelected: i };
        };
        var N = n(41664),
          _ = n.n(N),
          P = n(93967),
          D = n.n(P),
          O = n(96752);
        function S() {
          return (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var W = function (e) {
          return h.createElement(
            "svg",
            S(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 16,
                height: 16,
                fill: "none",
              },
              e
            ),
            i ||
              (i = h.createElement("path", {
                fill: "#fff",
                d: "M11 8.833a.5.5 0 0 0 0 1zm.007 1a.5.5 0 0 0 0-1zm1.66-5.166v-.5zm.476-2.167h.5v-1h-.5zm-9.81 2.167v-.5zM11 9.833h.007v-1H11zm-.167-.5c0-.092.075-.166.167-.166v1c.46 0 .833-.373.833-.834zM11 9.167c.092 0 .167.074.167.166h-1c0 .46.373.834.833.834zm.167.166A.167.167 0 0 1 11 9.5v-1a.833.833 0 0 0-.833.833zM11 9.5a.167.167 0 0 1-.167-.167h1A.833.833 0 0 0 11 8.5zM13.5 6v6.667h1V6zm-.833 7.5H3.333v1h9.334zM2.5 12.667V3.333h-1v9.334zm.833.833a.833.833 0 0 1-.833-.833h-1c0 1.012.82 1.833 1.833 1.833zm10.167-.833c0 .46-.373.833-.833.833v1c1.012 0 1.833-.82 1.833-1.833zM14.5 6c0-1.013-.82-1.833-1.833-1.833v1c.46 0 .833.373.833.833zM3.333 2.5h9.81v-1h-9.81zm-.833.833c0-.46.373-.833.833-.833v-1C2.321 1.5 1.5 2.32 1.5 3.333zm-1 0c0 1.013.82 1.834 1.833 1.834v-1a.833.833 0 0 1-.833-.834zm11.167.834H3.333v1h9.334z",
              }))
          );
        };
        function H() {
          return (H = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var V = function (e) {
          return h.createElement(
            "svg",
            H(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 14,
                height: 14,
                fill: "none",
              },
              e
            ),
            c ||
              (c = h.createElement("path", {
                stroke: "#5EE192",
                d: "m7.413 10.713-.825.825a2.917 2.917 0 0 1-4.124-4.125l.825-.825m7.424.825.825-.825a2.917 2.917 0 0 0-4.125-4.124l-.825.825M4.96 9.043l4.084-4.084",
              }))
          );
        };
        function Z() {
          return (Z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var q = function (e) {
            return h.createElement(
              "svg",
              Z(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              o ||
                (o = h.createElement("path", {
                  fill: "#5EE192",
                  d: "M11 8.833a.5.5 0 0 0 0 1zm.007 1a.5.5 0 0 0 0-1zm1.66-5.166v-.5zm.476-2.167h.5v-1h-.5zm-9.81 2.167v-.5zM11 9.833h.007v-1H11zm-.167-.5c0-.092.075-.166.167-.166v1c.46 0 .833-.373.833-.834zM11 9.167c.092 0 .167.074.167.166h-1c0 .46.373.834.833.834zm.167.166A.167.167 0 0 1 11 9.5v-1a.833.833 0 0 0-.833.833zM11 9.5a.167.167 0 0 1-.167-.167h1A.833.833 0 0 0 11 8.5zM13.5 6v6.667h1V6zm-.833 7.5H3.333v1h9.334zM2.5 12.667V3.333h-1v9.334zm.833.833a.833.833 0 0 1-.833-.833h-1c0 1.012.82 1.833 1.833 1.833zm10.167-.833c0 .46-.373.833-.833.833v1c1.012 0 1.833-.82 1.833-1.833zM14.5 6c0-1.013-.82-1.833-1.833-1.833v1c.46 0 .833.373.833.833zM3.333 2.5h9.81v-1h-9.81zm-.833.833c0-.46.373-.833.833-.833v-1C2.321 1.5 1.5 2.32 1.5 3.333zm-1 0c0 1.013.82 1.834 1.833 1.834v-1a.833.833 0 0 1-.833-.834zm11.167.834H3.333v1h9.334z",
                }))
            );
          },
          F = n(10957),
          T = (e) => {
            let {
              address: t,
              selectWallet: n,
              title: a,
              isSelected: r,
              onCopyAddress: s,
            } = e;
            return (0, d.jsxs)(O.P, {
              disabled: r,
              onClick: () => n(t),
              className: D()(
                "tw-group tw-flex tw-flex-row tw-items-center tw-gap-2 tw-rounded-tl-lg tw-rounded-tr-lg tw-px-4 tw-py-3 tw-text-white tw-transition-opacity",
                { "!tw-text-ithaca-green-30": r, "hover:tw-opacity-60": !r }
              ),
              children: [
                (0, d.jsx)(W, {
                  className: D()("group-hover:tw-hidden", { "tw-hidden": r }),
                }),
                (0, d.jsx)(q, {
                  className: D()("tw-hidden group-hover:tw-block", {
                    "!tw-block": r,
                  }),
                }),
                (0, d.jsxs)("span", {
                  className: "tw-ml-1 tw-text-sm tw-font-bold",
                  children: [
                    a,
                    " ",
                    (0, d.jsx)("span", {
                      className: "tw-ml-2",
                      children: (0, b.C)(t),
                    }),
                  ],
                }),
                r
                  ? (0, d.jsx)(V, { className: "tw-ml-2" })
                  : (0, d.jsx)("span", {
                      title: "Copy address",
                      tabIndex: 0,
                      className: "tw-cursor-pointer",
                      onClick: (e) => {
                        e.stopPropagation(), null == s || s(t);
                      },
                      children: (0, d.jsx)(F.Z, { height: 18, width: 18 }),
                    }),
              ],
            });
          };
        let I = () => {
          let { showToast: e } = (0, z.Z)(),
            { delegateWallet: t } = y(),
            { wallets: n, mainWallet: a, isMainWalletSelected: r } = E(),
            [s, l] = (0, w.qr)(
              (0, v.N)((e) => [e.isAuthenticated, e.delegatedWalletAddress])
            ),
            i = !!((n.length > 0 || l) && a),
            { copyToClipboard: c } = L({
              onSuccess: () => {
                e({ title: "Address copied to clipboard", message: "" });
              },
            });
          return s
            ? (0, d.jsxs)(d.Fragment, {
                children: [
                  i &&
                    (0, d.jsxs)(d.Fragment, {
                      children: [
                        (0, d.jsx)(T, {
                          address: a,
                          selectWallet: t,
                          title: r ? "Connected Wallet" : "Main Wallet",
                          isSelected: r,
                          onCopyAddress: c,
                        }),
                        (0, d.jsx)("div", {
                          className:
                            "tw-mx-4 tw-my-1 tw-border-b tw-border-ithaca-white-60",
                        }),
                      ],
                    }),
                  null == n
                    ? void 0
                    : n.map((e, n) => {
                        let a =
                            (null == l ? void 0 : l.toLocaleLowerCase()) ===
                            (null == e ? void 0 : e.toLocaleLowerCase()),
                          r = a
                            ? "Connected Wallet"
                            : "Delegate Wallet ".concat(++n);
                        return (0, d.jsx)(
                          T,
                          {
                            title: r,
                            isSelected: a,
                            address: e,
                            selectWallet: t,
                            onCopyAddress: c,
                          },
                          "".concat(e, "-").concat(n)
                        );
                      }),
                  (0, d.jsx)("div", {
                    className:
                      "tw-flex tw-cursor-default tw-flex-row tw-gap-2 tw-rounded-tl-lg tw-rounded-tr-lg tw-px-4 tw-py-3 tw-text-white hover:tw-text-ithaca-green-30",
                    children: (0, d.jsxs)("div", {
                      className: "tw-flex tw-flex-col tw-items-start",
                      children: [
                        (0, d.jsx)("div", {
                          className: "tw-text-sm tw-text-ithaca-white-60",
                          children: "Delegate a wallet",
                        }),
                        (0, d.jsx)(_(), {
                          href: "/account-access-management",
                          className: "tw-py-2 tw-underline",
                          children: "Account Access Management",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        };
        var B = n(80052);
        let R = () => {
          let { isAuthenticated: e, delegatedWalletAddress: t } = (0, w.qr)(
            (0, v.N)((e) => ({
              isAuthenticated: e.isAuthenticated,
              delegatedWalletAddress: e.delegatedWalletAddress,
            }))
          );
          return e
            ? (0, d.jsx)("div", {
                children: (0, d.jsxs)(B.J2, {
                  className: "tw-relative ",
                  children: [
                    (0, d.jsx)(B.O7, {
                      className:
                        "tw-group tw-mr-2 tw-flex tw-items-center tw-justify-center tw-outline-none",
                      children: t ? (0, d.jsx)(x, {}) : (0, d.jsx)(g, {}),
                    }),
                    (0, d.jsx)(B.Hi, {
                      anchor: "bottom",
                      className:
                        "tw-shadow-panel tw-z-10 tw-mt-5 tw-box-border tw-flex tw-flex-col tw-rounded-lg tw-bg-black-dark tw-backdrop-blur-[100px] focus:tw-ring-0",
                      children: (0, d.jsx)(I, {}),
                    }),
                  ],
                }),
              })
            : null;
        };
        var K = n(42746),
          U = n(43332),
          G = n(24113),
          X = (e) => {
            let { onClick: t, strokeColor: n } = e,
              a = n || "#9D9DAA";
            return (0, d.jsx)("div", {
              onClick: t,
              children: (0, d.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsxs)("g", {
                    clipPath: "url(#clip0_4768_13795)",
                    children: [
                      (0, d.jsx)("path", {
                        d: "M8.5 11.5L5.5 13L6 9.5L4 7.5L7 7L8.5 4L10 7L13 7.5L11 9.5L11.5 13L8.5 11.5Z",
                        stroke: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, d.jsx)("path", {
                        d: "M19 20L14 15",
                        stroke: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, d.jsx)("path", {
                        d: "M14 20L10.5 16.5",
                        stroke: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, d.jsx)("path", {
                        d: "M19 15L15.5 11.5",
                        stroke: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsx)("clipPath", {
                      id: "clip0_4768_13795",
                      children: (0, d.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                      }),
                    }),
                  }),
                ],
              }),
            });
          },
          J = n(18197),
          Y = n.n(J);
        let $ = (0, h.forwardRef)((e, t) => {
          let { value: n } = e;
          return (0, d.jsxs)("div", {
            ref: t,
            className: Y().container,
            children: [
              (0, d.jsxs)("div", {
                children: [(0, d.jsx)(X, {}), " Rewards Earned"],
              }),
              (0, d.jsxs)("p", {
                children: [n, " ", (0, d.jsx)("span", { children: "pts" })],
              }),
            ],
          });
        });
        $.displayName = "RewardsDropdown";
        var Q = n(10870),
          ee = () =>
            (0, d.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, d.jsx)("path", {
                stroke: "#9D9DAA",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
              }),
            }),
          et = () =>
            (0, d.jsx)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, d.jsxs)("g", {
                opacity: "0.6",
                children: [
                  (0, d.jsx)("path", {
                    d: "M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z",
                    stroke: "white",
                  }),
                  (0, d.jsx)("path", {
                    d: "M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059",
                    stroke: "white",
                    strokeLinecap: "round",
                  }),
                ],
              }),
            }),
          en = n(80362);
        let ea = (e, t, n) => {
          let a = (a) => {
            !e.current ||
              e.current.contains(a.target) ||
              (n && n.current && n.current.contains(a.target)) ||
              t();
          };
          (0, h.useEffect)(
            () => (
              document.addEventListener("mousedown", a),
              () => {
                document.removeEventListener("mousedown", a);
              }
            ),
            [e, t, n]
          );
        };
        var er = n(16795),
          es = n(3298),
          el = n(99369),
          ei = n(21335),
          ec = n.n(ei),
          eo = n(34155),
          ed = (e) => {
            let { isTxnPanelOpen: t, setIsTxnPanelOpen: n } = e,
              a = (0, u.useSearchParams)(),
              r = (0, u.useRouter)(),
              s = (0, u.usePathname)(),
              l = (0, w.qr)((e) => e.crossChainTransactions),
              i = (0, en.Z)(es.Gh),
              c = (0, en.Z)(es.rN),
              [o, v] = (0, h.useState)(!1),
              f = () => {
                v(!o), document.body.classList.toggle("is-active");
              },
              [g, p] = (0, h.useState)(!0);
            (0, h.useEffect)(() => {
              let e = eo.env.NEXT_PUBLIC_POINTS_ALLOWED;
              s &&
                s.includes("/points/") &&
                "false" === e &&
                p(null !== a.get("allowed"));
            }, [a, s]);
            let [x, z] = (0, h.useState)(!1),
              j = (0, h.useRef)(null),
              b = () => {
                z(!1);
              };
            return (
              ea(j, b),
              (0, er.M)(b),
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)("header", {
                    className: "tw-px-5 tw-pb-10 tw-pt-5",
                    children: (0, d.jsxs)("div", {
                      className: ec().container,
                      children: [
                        (0, d.jsxs)("div", {
                          className: ec().left,
                          children: [
                            (0, d.jsx)("span", {
                              className: ec().logo,
                              onClick: () => {
                                r.push("/trading/dynamic-option-strategies");
                              },
                              children: (0, d.jsx)(el.Z, {}),
                            }),
                            !(i || c) && (0, d.jsx)(m.default, {}),
                          ],
                        }),
                        (0, d.jsxs)("div", {
                          className: ec().right,
                          children: [
                            g &&
                              (null == s ? void 0 : s.includes("/points/")) &&
                              (0, d.jsx)(Q.Z, { trigger: (0, d.jsx)(ee, {}) }),
                            (0, d.jsxs)("div", {
                              className: ec().notificationContainer,
                              title: "Click to view cross-chain transactions",
                              onClick: () => n(!t),
                              onKeyDown: () => n(!t),
                              children: [
                                !!l.length &&
                                  (0, d.jsx)("span", {
                                    className: ec().badge,
                                    children: l.length,
                                  }),
                                (0, d.jsx)(et, {}),
                              ],
                            }),
                            (0, d.jsx)(R, {}),
                            (0, d.jsx)(G.Z, {}),
                            (i || c) &&
                              (0, d.jsx)(U.Z, { onClick: f, isActive: o }),
                            x && (0, d.jsx)($, { value: 123, ref: j }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (c || i) && (0, d.jsx)(K.Z, { isActive: o, onClick: f }),
                ],
              })
            );
          };
      },
      84638: function (e, t, n) {
        "use strict";
        n.d(t, {
          au: function () {
            return l;
          },
          fA: function () {
            return d;
          },
          mv: function () {
            return c;
          },
          uf: function () {
            return s;
          },
          wX: function () {
            return o;
          },
          z3: function () {
            return r;
          },
        });
        var a = n(90482);
        a.Z.set({ rounding: a.Z.ROUND_HALF_UP });
        let r = function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              a = (e = e.toString().replace(/\s/g, ""));
            return (
              a.length >= 42 && (a = e.slice(0, 4) + "..." + e.slice(-4)),
              t && t.toString().length && n.toString().length && t === n
                ? a + " (You)"
                : a
            );
          },
          s = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5,
              n = new a.Z(e),
              r = n.toFixed(t);
            if (r.includes("e")) return i(n, t);
            {
              let e = r.split(".");
              return 2 === e.length && e[1].length > t
                ? i(n, t)
                : n.gte(1e6)
                ? n.div(1e6).toFixed(1) + "m"
                : n.gte(1e3)
                ? n.div(1e3).toFixed(1) + "k"
                : r;
            }
          },
          l = (e, t) => {
            let n = s(e, 2);
            switch (t) {
              case "Withdrawal":
                return "-".concat(n, " pts");
              case "Earn":
                return "+".concat(n, " pts");
              default:
                return "".concat(n, " pts");
            }
          },
          i = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5,
              n = e.toString().match("^-?\\d+(?:\\.\\d{0,".concat(t, "})?"));
            return n && new a.Z(n[0]).lte(e) ? n[0].toString() : e.toFixed(t);
          },
          c = (e) => {
            let { showToast: t, title: n, message: a } = e;
            t({ title: n, message: a, type: "info" });
          },
          o = (e) =>
            o.cache && void 0 !== o.cache[e]
              ? Promise.resolve(o.cache[e])
              : new Promise((t) => {
                  let n = new Image();
                  (n.onload = function () {
                    o.cache || (o.cache = {}), (o.cache[e] = !0), t(!0);
                  }),
                    (n.onerror = function () {
                      o.cache || (o.cache = {}), (o.cache[e] = !1), t(!1);
                    }),
                    (n.src = e);
                });
        o.cache = {};
        let d = (e) => {
          let { url: t, width: n, height: a } = e,
            r =
              void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
            s = void 0 !== window.screenTop ? window.screenTop : window.screenY,
            l = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            i = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height,
            c = l / window.screen.availWidth,
            o = window.open(
              t,
              "_blank",
              "\n      scrollbars=yes,\n      resizable=yes,\n      toolbar=no,\n      location=yes,\n      width="
                .concat(n / c, ", \n      height=")
                .concat(a / c, ", \n      top=")
                .concat((i - a) / 2 / c + s, ", \n      left=")
                .concat((l - n) / 2 / c + r, "\n      ")
            );
          o && o.focus();
        };
      },
      9681: function (e, t, n) {
        "use strict";
        n.d(t, {
          C: function () {
            return a;
          },
        });
        let a = (e) => {
          if (e.length <= 2) return e;
          if (e.length <= 8)
            return "".concat(e[0], "...").concat(e[e.length - 1]);
          let t = e.slice(0, 4),
            n = e.slice(-4);
          return "".concat(t, "...").concat(n);
        };
      },
      18197: function (e) {
        e.exports = { container: "RewardsDropdown_container__aqRzN" };
      },
      96752: function (e, t, n) {
        "use strict";
        n.d(t, {
          P: function () {
            return h;
          },
        });
        var a = n(67294),
          r = n(38213),
          s = n(83619),
          l = n(22944),
          i = n(18419),
          c = n(65448),
          o = n(14872);
        let d = (0, s.yV)(function (e, t) {
            var n;
            let r = (0, o.B)(),
              { disabled: d = r || !1, autoFocus: h = !1, ...u } = e,
              { isFocusVisible: w, focusProps: m } = (0, l.F)({ autoFocus: h }),
              { isHovered: v, hoverProps: f } = (0, i.X)({ isDisabled: d }),
              { pressed: g, pressProps: p } = (0, c.x)({ disabled: d }),
              x = (0, s.dG)(
                {
                  ref: t,
                  type: null != (n = u.type) ? n : "button",
                  disabled: d || void 0,
                  autoFocus: h,
                },
                m,
                f,
                p
              ),
              z = (0, a.useMemo)(
                () => ({
                  disabled: d,
                  hover: v,
                  focus: w,
                  active: g,
                  autofocus: h,
                }),
                [d, v, w, g, h]
              );
            return (0, s.L6)()({
              ourProps: x,
              theirProps: u,
              slot: z,
              defaultTag: "button",
              name: "Button",
            });
          }),
          h = (0, s.yV)(function (e, t) {
            let n = (0, r.$)();
            return a.createElement(d, {
              ref: t,
              ...(0, s.dG)({ onClick: n }, e),
            });
          });
      },
      14872: function (e, t, n) {
        "use strict";
        n.d(t, {
          B: function () {
            return s;
          },
        });
        var a = n(67294);
        let r = (0, a.createContext)(void 0);
        function s() {
          return (0, a.useContext)(r);
        }
      },
    },
  ]);
