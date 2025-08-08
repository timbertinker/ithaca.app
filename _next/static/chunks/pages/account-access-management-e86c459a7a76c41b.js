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
      (e._sentryDebugIds[t] = "02c581e9-4248-4148-9d88-6d90babe4084"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-02c581e9-4248-4148-9d88-6d90babe4084"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4074],
    {
      82413: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/account-access-management",
          function () {
            return n(47828);
          },
        ]);
      },
      61920: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(24113),
          s = n(50103),
          l = n.n(s);
        t.Z = (e) => {
          let { showButton: t = !0 } = e;
          return (0, a.jsxs)("div", {
            className: l().container,
            children: [
              (0, a.jsx)("p", {
                children: "Please connect wallet to check your details.",
              }),
              t && (0, a.jsx)(r.Z, {}),
            ],
          });
        };
      },
      21050: function (e, t, n) {
        "use strict";
        var a = n(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: n = "" } = e;
          return (0, a.jsxs)("svg", {
            className: n,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M16 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
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
        var a = n(85893);
        t.Z = () =>
          (0, a.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "35333E",
              }),
              (0, a.jsx)("path", {
                d: "M10.6667 6.66699L8 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M5.33301 6.66699L7.99967 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
      },
      45323: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return y;
          },
        });
        var a = n(85893),
          r = n(67294);
        let s = (e) => {
          e.currentTarget.blur(),
            e.stopPropagation(),
            setTimeout(() => {
              var t;
              null == e ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.focus();
            }, 0);
        };
        var l = () =>
            (0, a.jsxs)("svg", {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsxs)("g", {
                  clipPath: "url(#clip0_2198_156721)",
                  children: [
                    (0, a.jsx)("path", {
                      d: "M6 4.5V6.5",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)("path", {
                      d: "M5.18125 1.79547L1.12825 8.56247C1.0447 8.70716 1.00048 8.87121 1 9.03829C0.999526 9.20538 1.0428 9.36967 1.12552 9.51484C1.20824 9.66001 1.32753 9.78099 1.47152 9.86575C1.61551 9.95051 1.77918 9.9961 1.94625 9.99797H10.0532C10.2202 9.99605 10.3838 9.95045 10.5278 9.86572C10.6717 9.78098 10.7909 9.66006 10.8736 9.51497C10.9563 9.36987 10.9996 9.20566 10.9992 9.03865C10.9988 8.87164 10.9547 8.70765 10.8712 8.56297L6.81825 1.79497C6.73298 1.65422 6.61285 1.53784 6.46947 1.45707C6.3261 1.3763 6.16431 1.33386 5.99975 1.33386C5.83518 1.33386 5.6734 1.3763 5.53002 1.45707C5.38665 1.53784 5.26652 1.65422 5.18125 1.79497V1.79547Z",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)("path", {
                      d: "M6 8H6.005",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsx)("clipPath", {
                    id: "clip0_2198_156721",
                    children: (0, a.jsx)("rect", {
                      width: "12",
                      height: "12",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          i = n(4345),
          o = n.n(i),
          c = () =>
            (0, a.jsx)("svg", {
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M5.553 8.68196L4.84589 9.38907C3.86958 10.3654 2.28667 10.3654 1.31036 9.38907C0.334047 8.41276 0.334047 6.82985 1.31036 5.85354L2.01746 5.14643M8.38143 5.85354L9.08853 5.14643C10.0648 4.17012 10.0648 2.58721 9.08853 1.6109C8.11222 0.634584 6.52931 0.634584 5.553 1.6109L4.84589 2.318M3.44945 7.24997L6.94945 3.74997",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          d = n(37422),
          u = () =>
            (0, a.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M8.63316 12.4044L7.69036 13.3472C6.38861 14.649 4.27806 14.649 2.97631 13.3472C1.67456 12.0455 1.67456 9.93491 2.97631 8.63316L3.91912 7.69036M12.4044 8.63316L13.3472 7.69036C14.649 6.38861 14.649 4.27806 13.3472 2.97631C12.0455 1.67456 9.93491 1.67456 8.63316 2.97631L7.69036 3.91912",
                stroke: "#9D9DAA",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          w = () =>
            (0, a.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M8 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M16 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          h = n(21050),
          x = n(24514),
          m = n(57345),
          p = n(16795),
          f = n(65440),
          g = n(93967),
          j = n.n(g),
          v = n(45338),
          y = (e) => {
            let {
                increment: t,
                onChange: n,
                value: i,
                icon: g,
                leftIcon: y,
                disabled: k,
                placeholder: b = "-",
                label: _,
                width: C = 0,
                type: A = "number",
                id: N,
                hasError: L = !1,
                errorMessage: I,
                className: D,
                containerClassName: P,
                isLinked: Z,
                canLink: M,
                onLink: K,
                onBlur: W,
                onKeyDown: S,
                footerText: E,
                hasDropdown: B,
                dropDownOptions: R,
                onDropdownChange: O,
                isLoading: q = !1,
                labelClassName: F,
                min: T,
                max: U,
                ...z
              } = e,
              [G, V] = (0, r.useState)(!1),
              X = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
              let e = (e) => {
                X.current && !X.current.contains(e.target) && V(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, p.M)(() => {
                G && V(!1);
              });
            let H = (e) => {
                V(!1), O && O(e);
              },
              J = (e) => {
                if ("number" !== A || !t) return;
                let n = i ? (0, v.Dx)("".concat(i)) : void 0;
                "UP" === e
                  ? ((void 0 !== n && void 0 !== U && n < U) || void 0 === U) &&
                    t("UP")
                  : "DOWN" === e &&
                    ((void 0 !== n && void 0 !== T && n > T) || void 0 === T) &&
                    t("DOWN");
              };
            return (0, a.jsxs)("div", {
              className: j()(o().input, D, { [o().error]: L }),
              style: C > 0 ? { width: C + "px" } : {},
              children: [
                _ &&
                  (0, a.jsx)("label", {
                    htmlFor: N,
                    className: j()(o().label, F),
                    children: _,
                  }),
                (0, a.jsxs)("div", {
                  className: "".concat(o().container, " ").concat(P || ""),
                  style: { width: "100%" },
                  children: [
                    M &&
                      (0, a.jsx)(d.Z, {
                        title: "Click to link",
                        variant: "icon",
                        size: "sm",
                        onClick: () => {
                          K && K(!Z);
                        },
                        children: Z ? (0, a.jsx)(c, {}) : (0, a.jsx)(u, {}),
                      }),
                    (0, a.jsxs)(x.Z, {
                      direction: "column",
                      classes: "full-width",
                      children: [
                        (0, a.jsxs)(x.Z, {
                          direction: "row-center",
                          children: [
                            y &&
                              (0, a.jsx)("div", {
                                className: "tw-mr-1",
                                children: y,
                              }),
                            q
                              ? (0, a.jsx)("div", {
                                  className: "flexGrow",
                                  children: (0, a.jsx)(f.Z, {}),
                                })
                              : (0, a.jsx)("input", {
                                  ...z,
                                  id: N,
                                  type: A,
                                  value: i,
                                  placeholder: b,
                                  inputMode:
                                    "number" === A ? "decimal" : void 0,
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if ("number" === A) {
                                      let a = (0, v.Dx)(t);
                                      if (void 0 !== U && a > U) return;
                                      null == n || n(e);
                                    } else null == n || n(e);
                                  },
                                  onWheel: "number" === A ? s : void 0,
                                  disabled: k,
                                  min: "number" === A ? T : void 0,
                                  max: "number" === A ? U : void 0,
                                  step: "any",
                                  onBlur: W,
                                  onKeyDown: S,
                                }),
                            g &&
                              (0, a.jsx)("div", {
                                className: "tw-ml-1",
                                children: g,
                              }),
                            B &&
                              (0, a.jsxs)("div", {
                                onClick: () => {
                                  V(!G);
                                },
                                className: ""
                                  .concat(o().dropdown, " ")
                                  .concat(G ? o().isActive : ""),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "mmt-2",
                                    children: (0, a.jsx)(m.Z, {}),
                                  }),
                                  G &&
                                    (0, a.jsx)("ul", {
                                      className: o().dropdownMenu,
                                      children:
                                        R &&
                                        R.map((e) =>
                                          (0, a.jsxs)(
                                            "li",
                                            {
                                              className: j()(
                                                o().dropdownItem,
                                                "tw-flex",
                                                { [o().active]: i === e.value }
                                              ),
                                              onClick: () => H(e.value),
                                              children: [e.icon, " ", e.label],
                                            },
                                            e.value
                                          )
                                        ),
                                    }),
                                ],
                              }),
                          ],
                        }),
                        E &&
                          (0, a.jsx)("div", {
                            className: o().footer,
                            children: E,
                          }),
                      ],
                    }),
                    t &&
                      (0, a.jsx)("div", {
                        className: o().incrementWrapper,
                        children: (0, a.jsxs)(x.Z, {
                          direction: "column",
                          children: [
                            (0, a.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => J("UP"),
                                variant: "icon",
                                children: (0, a.jsx)(w, {}),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, a.jsx)(d.Z, {
                                title: "up",
                                onClick: () => J("DOWN"),
                                variant: "icon",
                                children: (0, a.jsx)(h.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                L &&
                  I &&
                  (0, a.jsxs)("div", {
                    className: o().errorMessage,
                    children: [(0, a.jsx)(l, {}), I],
                  }),
              ],
            });
          };
      },
      92505: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(9008),
          s = n.n(r);
        t.Z = () =>
          (0, a.jsxs)(s(), {
            children: [
              (0, a.jsx)("title", {
                children: "Ithaca - Non-Custodial, Composable Option Protocol",
              }),
              (0, a.jsx)("meta", {
                name: "description",
                content:
                  "Ithaca is a decentralized options and collateralized funding protocol offering optimal risk sharing across various states and time, embedding itself in all steps of any risk sharing instrument's lifecycle.",
              }),
              (0, a.jsx)("meta", {
                property: "og:title",
                content: "Ithaca - Empowering Optimal Risk Sharing",
              }),
              (0, a.jsx)("meta", {
                property: "og:description",
                content:
                  "Explore Ithaca's decentralized ecosystem for trading, risk management, and protocol governance. Engage with our cross-chain infrastructure and contribute to the future of digital value representation.",
              }),
              (0, a.jsx)("meta", {
                property: "og:image",
                content: "/ithaca-og-image.png",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:title",
                content:
                  "Ithaca Protocol: Decentralize Your Trading Experience",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:description",
                content:
                  "Join Ithaca, a decentralized trading and risk management ecosystem, utilizing cross-chain solutions for a seamless trading experience. Discover, trade, and manage risk today.",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, a.jsx)("meta", {
                property: "twitter:domain",
                content: "https://app.ithacaprotocol.io/",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:image",
                content: "/ithaca-og-image.png",
              }),
            ],
          });
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
      85292: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(93967),
          s = n.n(r),
          l = n(25448),
          i = n.n(l);
        t.Z = (e) => {
          let { size: t = "xl", children: n, className: r } = e;
          return (0, a.jsx)("div", {
            className: s()(i().container, i()[t], r),
            children: n,
          });
        };
      },
      27888: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(80140),
          s = n.n(r);
        t.Z = (e) => {
          let { children: t } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("main", { className: s().Main, children: t }),
          });
        };
      },
      13880: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(2920),
          s = n.n(r);
        t.Z = (e) => {
          let { children: t, margin: n = "m-0", className: r = "" } = e;
          return (0, a.jsx)("div", {
            className: ""
              .concat(s().panel, " ")
              .concat(n && n, " ")
              .concat(r),
            children: t,
          });
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
      20448: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return o;
          },
        });
        var a = n(43210),
          r = n(86900),
          s = n(57393);
        let l = a.y,
          i = {
            localhost: r.Z,
            "app.ithacaprotocol.io": l,
            "sepolia.canary.ithacanoemon.tech": r.Z,
            "testnet.ithacaprotocol.io": r.Z,
            "app.canary.ithacanoemon.tech": r.Z,
            "mumbai.canary.ithacanoemon.tech": s.v,
            "decent-governor-development-phase1.up.railway.app": r.Z,
            "axelar-integration.ithacaprotocol.io": a.y,
          },
          o = (e) => {
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
              ? r.Z
              : null !== (t = i[window.location.hostname]) && void 0 !== t
              ? t
              : l;
          };
      },
      64729: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return a;
          },
        }),
          n(82649);
        let a = () => ({
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
            return f;
          },
          ho: function () {
            return p;
          },
          Pk: function () {
            return m;
          },
        });
        var a = n(64729),
          r = n(92321),
          s = n(54306),
          l = n(44718),
          i = n(20448),
          o = n(12185),
          c = n(59731),
          d = n(88144),
          u = n(72809);
        let w = (e) => {
            let { address: t, token: n, query: r } = e,
              { connection: s } = (0, l.R)(),
              i = t ? new u.PublicKey(t) : null,
              { leaderBoardAddresses: o } = (0, a.X)();
            return (0, d.a)({
              queryKey: ["solana-balance", t, n],
              queryFn: async () => {
                if (!i || !s) throw Error("Missing publicKey or connection");
                if ("SOL" === n) {
                  let e = await s.getBalance(i);
                  return {
                    decimals: 9,
                    formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === n) {
                  let e = await s.getParsedTokenAccountsByOwner(i, {
                      mint: new u.PublicKey(o.wethArbitrumAddress),
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
              enabled: !!i && !!s,
              ...r,
            });
          },
          h = () => {
            let { isConnected: e, address: t } = (0, r.m)();
            return { isConnected: e, address: t };
          },
          x = () => {
            let { connected: e, publicKey: t } = (0, s.O)(),
              { connection: n } = (0, l.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          m = () => {
            let { isSolanaWalletActive: e } = (0, a.X)(),
              t = h(),
              n = x();
            return e ? n : t;
          },
          p = () => {
            let { address: e } = x();
            return {
              SOLData: w({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: w({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          f = () => {
            let { address: e } = h(),
              { systemInfo: t, isAuthenticated: n } = (0, c.qr)(),
              a = { address: e, chainId: (0, i.b)().id };
            return {
              WETHData: (0, o.K)({
                ...a,
                token: t.tokenAddress.WETH,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
              USDCData: (0, o.K)({
                ...a,
                token: t.tokenAddress.USDC,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
            };
          };
      },
      47828: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return K;
            },
          });
        var a = n(85893),
          r = n(59731),
          s = n(27888),
          l = n(92505),
          i = n(13880),
          o = n(85292),
          c = n(67294),
          d = n(47236),
          u = n(30202),
          w = n(88144),
          h = n(74094),
          x = n(93967),
          m = n.n(x);
        let p = (e) => {
          let { table: t } = e;
          return (0, a.jsxs)("table", {
            className: "tw-w-full tw-overflow-scroll",
            children: [
              (0, a.jsx)("thead", {
                children: t
                  .getHeaderGroups()
                  .map((e) =>
                    (0, a.jsx)(
                      "tr",
                      {
                        children: e.headers.map((e) =>
                          (0, a.jsx)(
                            "th",
                            {
                              className: m()(
                                "tw-border-b tw-border-rgba-white-10 tw-p-4 tw-text-left tw-font-roboto tw-text-xs tw-font-medium tw-text-ithaca-white-60"
                              ),
                              children: (0, h.ie)(
                                e.column.columnDef.header,
                                e.getContext()
                              ),
                            },
                            e.id
                          )
                        ),
                      },
                      e.id
                    )
                  ),
              }),
              (0, a.jsx)("tbody", {
                children: t
                  .getRowModel()
                  .rows.map((e) =>
                    (0, a.jsx)(
                      "tr",
                      {
                        className: "tw-border-t tw-border-rgba-white-10",
                        children: e
                          .getVisibleCells()
                          .map((e) =>
                            (0, a.jsx)(
                              "td",
                              {
                                className: m()("tw-p-4"),
                                children: (0, h.ie)(
                                  e.column.columnDef.cell,
                                  e.getContext()
                                ),
                              },
                              e.id
                            )
                          ),
                      },
                      e.id
                    )
                  ),
              }),
            ],
          });
        };
        var f = n(16310),
          g = n(80044),
          j = n(46656),
          v = n(45323),
          y = n(37422),
          k = n(65440);
        let b = f
          .Ry()
          .shape({
            arbitrumWalletAddress: f.Z_().required("Wallet address required"),
          });
        var _ = (e) => {
            let { isOpen: t, onCloseModal: n } = e,
              { showToast: s } = (0, d.Z)(),
              { ithacaSDK: l, underlyingCurrency: i } = (0, r.qr)((e) => ({
                ithacaSDK: e.ithacaSDK,
                underlyingCurrency: e.underlyingCurrency,
              })),
              o = async (e, t) => {
                let { setSubmitting: a, setFieldError: r } = t;
                a(!0);
                let o =
                    "WSOL" === i
                      ? e.arbitrumWalletAddress
                      : e.arbitrumWalletAddress.toLocaleLowerCase(),
                  c = await l.wallets.requestLink({ addr: o });
                if (c.details.length) r("arbitrumWalletAddress", c.details);
                else {
                  let e = await l.wallets.confirmLink({ nonce: c.payload });
                  e.details.length
                    ? (r("arbitrumWalletAddress", e.details),
                      s({
                        title: "Wallet access delegated",
                        message: "Delegated successfully",
                      }))
                    : n();
                }
                a(!1);
              };
            return (0, a.jsx)(j.default, {
              className: "!tw-max-w-md",
              isOpen: t,
              title: "Delegate Wallet",
              onCloseModal: n,
              children: (0, a.jsx)(g.J9, {
                validationSchema: b,
                onSubmit: o,
                initialValues: { arbitrumWalletAddress: "" },
                children: (e) => {
                  let { isValid: t, dirty: n, errors: r, isSubmitting: s } = e;
                  return (0, a.jsxs)(g.l0, {
                    className: "tw-flex tw-flex-col tw-gap-6",
                    children: [
                      (0, a.jsx)(g.gN, {
                        name: "arbitrumWalletAddress",
                        children: (e) => {
                          let { field: t } = e;
                          return (0, a.jsx)(v.Z, {
                            ...t,
                            type: "text",
                            hasError: !!r.arbitrumWalletAddress,
                            errorMessage: r.arbitrumWalletAddress,
                            placeholder: "Insert wallet address",
                            label:
                              "Enter Wallet to Delegate Management Access To",
                          });
                        },
                      }),
                      (0, a.jsx)(y.Z, {
                        title: "confirm",
                        className: "mt-10",
                        type: "submit",
                        disabled: !t && n,
                        children: s ? (0, a.jsx)(k.Z, {}) : "Confirm",
                      }),
                    ],
                  });
                },
              }),
            });
          },
          C = n(27060),
          A = n(9681),
          N = (e) => {
            let { info: t } = e,
              { showToast: n } = (0, d.Z)(),
              r = "API Key" === t.row.original.type;
            return (0, a.jsxs)("div", {
              className: "tw-flex tw-gap-5",
              children: [
                (0, a.jsx)("p", {
                  className: "tw-line-clamp-1 tw-w-[150px] md:tw-w-[400px]",
                  children: (0, A.C)(t.getValue()),
                }),
                (0, a.jsx)("button", {
                  title: "Click to unlink API key",
                  className:
                    "tw-font-roboto tw-text-xs tw-font-bold tw-text-ithaca-green-30",
                  onClick: () => {
                    navigator.clipboard.writeText(t.getValue()),
                      n({
                        title: r ? "API Key Copied" : "Wallet Address Copied",
                        message: "",
                      });
                  },
                  children: "Copy",
                }),
              ],
            });
          };
        let L = (0, C.Cl)(),
          I = [
            L.accessor("type", {
              header: () =>
                (0, a.jsx)("div", {
                  className: "tw-text-left",
                  children: "Type",
                }),
              cell: (e) =>
                (0, a.jsx)("div", {
                  className: "tw-min-w-[70px]",
                  children: e.getValue(),
                }),
            }),
            L.accessor("address", {
              cell: (e) => (0, a.jsx)(N, { info: e }),
              header: () => "Wallet Address / API Key",
            }),
            L.display({
              id: "actionButtons",
              cell: (e) =>
                (0, a.jsx)("div", {
                  className: "tw-flex tw-justify-end md:tw-justify-end",
                  children: (0, a.jsx)("button", {
                    title: "Click to unlink ".concat(
                      "API Key" === e.row.original.type ? "API Key" : "Address"
                    ),
                    className: "tw-text-xs tw-text-ithaca-red-20",
                    onClick: () => {
                      var t;
                      null === (t = e.table.options.meta) ||
                        void 0 === t ||
                        t.handleRevoke(e.row.original);
                    },
                    children: "Revoke",
                  }),
                }),
              header: (e) => {
                var t, n, r;
                let { table: s } = e;
                return (0, a.jsxs)("div", {
                  className: "tw-flex tw-justify-end tw-gap-6 tw-self-end",
                  children: [
                    (0, a.jsx)(y.Z, {
                      title: "Click to Delegate Wallet",
                      size: "sm",
                      onClick:
                        null === (t = s.options.meta) || void 0 === t
                          ? void 0
                          : t.delegateWallet,
                      children: "Delegate Wallet",
                    }),
                    (0, a.jsx)(y.Z, {
                      title: "Click to regenerate api",
                      size: "sm",
                      onClick:
                        null === (n = s.options.meta) || void 0 === n
                          ? void 0
                          : n.regenerateApiKey,
                      children: "Regenerate API",
                    }),
                    (0, a.jsx)("button", {
                      title: "Click to unlink API key",
                      className: "tw-shrink-0 tw-text-xs tw-text-ithaca-red-20",
                      onClick:
                        null === (r = s.options.meta) || void 0 === r
                          ? void 0
                          : r.revokeAll,
                      children: "Revoke All",
                    }),
                  ],
                });
              },
            }),
          ];
        var D = (e) => {
            let {
                handleRevoke: t,
                isOpen: n,
                onCloseModal: s,
                apiPublicKey: l,
              } = e,
              { ithacaSDK: i } = (0, r.qr)(),
              { showToast: o } = (0, d.Z)(),
              [u, w] = (0, c.useState)(!1),
              [h, x] = (0, c.useState)(),
              [m, p] = (0, c.useState)();
            (0, c.useEffect)(() => {
              l && p(l);
            }, [l]),
              (0, c.useEffect)(() => {
                n && !l && w(!0);
              }, [n, l]),
              (0, c.useEffect)(() => {
                u &&
                  setTimeout(() => {
                    f();
                  }, 1e3);
              }, [n, l, u]);
            let f = async () => {
                w(!0);
                try {
                  let { privateKey: e, rsaPublicKey: t } =
                    await i.auth.linkRSAKey();
                  p(t), x(e);
                } catch (e) {
                  console.error("Failed to link RSA key", e), s();
                } finally {
                  w(!1);
                }
              },
              g = (e, t) => {
                navigator.clipboard.writeText(e), o({ title: t, message: "" });
              };
            return (0, a.jsx)(j.default, {
              isOpen: n,
              className: "!tw-max-w-md",
              title: m ? "Regenerate API Key" : "Generate API Key",
              onCloseModal: s,
              children: (0, a.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-5",
                children: [
                  u
                    ? (0, a.jsx)("div", {
                        className:
                          "tw-my-4 tw-flex tw-items-center tw-justify-center",
                        children: (0, a.jsx)(k.Z, { type: "md" }),
                      })
                    : h
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "tw-font-lato tw-text-xs tw-text-ithaca-white-60",
                                children: "API Public Key",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-row mt-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-font-regular tw-flex-[4] tw-overflow-hidden tw-text-ellipsis tw-text-md tw-text-white",
                                    children: m,
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      m && g(m, "API Public Key Copied");
                                    },
                                    className:
                                      "tw-flex-1 tw-cursor-pointer tw-p-1 tw-text-xs tw-font-bold tw-text-ithaca-green-30",
                                    children: "Copy",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "tw-font-lato tw-text-xs tw-text-ithaca-white-60",
                                children: "API Security Key",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-row mt-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-font-regular tw-flex-[3] tw-overflow-hidden tw-text-ellipsis tw-text-md tw-text-white",
                                    children: "*".repeat(40),
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      if (h) {
                                        let e = new Blob([h], {
                                            type: "text/plain",
                                          }),
                                          t = URL.createObjectURL(e),
                                          n = document.createElement("a");
                                        (n.download = "private-key.pem"),
                                          (n.href = t),
                                          n.click();
                                      }
                                    },
                                    className:
                                      "tw-flex-1 tw-cursor-pointer tw-p-1 tw-text-xs tw-font-bold tw-text-ithaca-green-30",
                                    children: "Download",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () =>
                                      g(h, "API Security Key Copied"),
                                    className:
                                      "tw-flex-1 tw-cursor-pointer tw-p-1 tw-text-xs tw-font-bold tw-text-ithaca-green-30",
                                    children: "Copy",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "tw-font-lato tw-text-xs tw-text-ithaca-white-60",
                            children: "Delete API Key to Generate New API Key",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-row mt-4",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "tw-font-regular tw-flex-[4] tw-overflow-hidden tw-text-ellipsis tw-text-md tw-text-white",
                                children: m,
                              }),
                              (0, a.jsx)("button", {
                                onClick: t,
                                className:
                                  "tw-flex-1 tw-cursor-pointer tw-p-1 tw-text-xs tw-font-bold tw-text-ithaca-red-20",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      }),
                  (0, a.jsx)(y.Z, {
                    title: "close",
                    className: "mt-10",
                    onClick: () => {
                      x(void 0), s();
                    },
                    children: "Close",
                  }),
                ],
              }),
            });
          },
          P = n(67930),
          Z = () => {
            let e = (0, u.NL)(),
              { ithacaSDK: t, isAuthenticated: n } = (0, r.qr)(),
              [s, l] = (0, c.useState)(!1),
              [i, o] = (0, c.useState)(!1),
              { showToast: x } = (0, d.Z)(),
              { data: f, refetch: g } = (0, w.a)({
                enabled: n,
                queryKey: ["apiKeys"],
                queryFn: async () => {
                  let e = await t.auth.getLinkedRsaKey();
                  return null != e ? e : null;
                },
                select: (e) => (e ? { type: "API Key", address: e } : null),
              }),
              { data: j, refetch: v } = (0, w.a)({
                enabled: n,
                queryKey: ["walletDelegated"],
                queryFn: () => t.wallets.list(),
                select: (e) =>
                  e.payload.map((e) => ({
                    type: "Wallet Delegate",
                    address: e,
                  })),
              }),
              y = (0, c.useMemo)(() => {
                let e = j ? [...j] : [];
                return f && e.push(f), e;
              }, [j, f]),
              k = (0, c.useCallback)(async () => {
                try {
                  await t.auth.unlinkRsaKey(),
                    g(),
                    x({
                      title: "API Key revoked",
                      message: "Successfully revoked API KEY",
                    });
                } catch (e) {
                  console.error("failed to unlink RSA key error", e);
                }
              }, [t.auth, g, x]),
              b = () => {
                v(), e.refetchQueries({ queryKey: [P.Tk], exact: !1 });
              },
              A = async (e) => {
                await t.wallets.unlink(e.address), b();
              },
              N = async (e) => {
                "API Key" === e.type ? await k() : await A(e);
              },
              L = async () => {
                for await (let e of y) await N(e);
              },
              Z = (0, c.useMemo)(() => I, []),
              M = (0, h.b7)({
                data: y,
                columns: Z,
                getCoreRowModel: (0, C.sC)(),
                meta: {
                  regenerateApiKey: () => l(!0),
                  delegateWallet: () => o(!0),
                  handleRevoke: N,
                  revokeAll: L,
                },
              }),
              K = (0, c.useCallback)(() => {
                g(), l(!1);
              }, [g]),
              W = () => {
                o(!1), b();
              };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(D, {
                  handleRevoke: () => N(f),
                  isOpen: s,
                  onCloseModal: K,
                  apiPublicKey: null == f ? void 0 : f.address,
                }),
                (0, a.jsx)(_, { isOpen: i, onCloseModal: () => W() }),
                (0, a.jsxs)("div", {
                  className: m()("tw-flex tw-flex-col tw-overflow-x-auto", {
                    "tw-opacity-10": !n,
                  }),
                  children: [
                    (0, a.jsx)(p, { table: M }),
                    0 === y.length &&
                      (0, a.jsx)("p", {
                        className:
                          "tw-mx-auto tw-py-28 tw-text-center tw-font-lato tw-font-medium",
                        children: "No Delegate Accounts / API Key found.",
                      }),
                  ],
                }),
              ],
            });
          },
          M = n(61920),
          K = () => {
            let e = (0, r.qr)((e) => e.isAuthenticated);
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(l.Z, {}),
                (0, a.jsx)(s.Z, {
                  children: (0, a.jsxs)(o.Z, {
                    className: "tw-px-3",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "tw-font-lato tw-text-xl tw-font-medium",
                        children: "Account Access Management",
                      }),
                      (0, a.jsxs)(i.Z, {
                        className: "desktop:tw-p-8 tw-min-h-[450px] tw-p-4",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "tw-text-md tw-font-semibold",
                            children: "Manage Access",
                          }),
                          e ? (0, a.jsx)(Z, {}) : (0, a.jsx)(M.Z, {}),
                        ],
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
      4345: function (e) {
        e.exports = {
          input: "Input_input__OpqTL",
          container: "Input_container__ANGD0",
          label: "Input_label__iGC50",
          error: "Input_error__0TJkW",
          errorMessage: "Input_errorMessage__uZeJs",
          incrementButton: "Input_incrementButton__GG1TV",
          incrementWrapper: "Input_incrementWrapper__54tK3",
          footer: "Input_footer__4_c8P",
          labelDropdown: "Input_labelDropdown__VvrK4",
          dropdown: "Input_dropdown__nB2Rd",
          isActive: "Input_isActive__5MNq9",
          dropdownMenu: "Input_dropdownMenu__F_XQj",
          selected: "Input_selected__tXyZU",
          dropdownItem: "Input_dropdownItem__y1w6s",
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
      2920: function (e) {
        e.exports = { panel: "Panel_panel__unNp0" };
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 9261, 4442, 5675, 7410, 1371, 9342, 2592, 4782, 6322, 9773,
          8026, 8303, 579, 4113, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 82413));
        }
      ),
        (_N_E = e.O());
    },
  ]);
