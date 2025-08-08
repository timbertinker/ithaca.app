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
      (e._sentryDebugIds[t] = "d204e9b3-c3dd-4444-965b-08c58b33cdf1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d204e9b3-c3dd-4444-965b-08c58b33cdf1"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3866, 6656],
    {
      60077: function (e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/points/history",
          function () {
            return a(6586);
          },
        ]);
      },
      91269: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(25675),
          i = a.n(r),
          s = a(81989);
        t.Z = (e) => {
          let { height: t = 30, width: a = 30, className: r } = e,
            { address: o } = (0, s.Pk)();
          return (0, n.jsx)(i(), {
            src: "https://mywalleticon.com/usericon/".concat(o),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: a,
            height: t,
            className: r,
          });
        };
      },
      4389: function (e, t, a) {
        "use strict";
        var n = a(85893);
        t.Z = (e) => {
          let {
            className: t,
            onClick: a,
            bgColor: r = "white",
            fillColor: i = "#C5C5D9",
          } = e;
          return (0, n.jsxs)("svg", {
            onClick: a,
            className: t,
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V10C14 12.2091 12.2091 14 10 14H4C1.79086 14 0 12.2091 0 10V4Z",
                fill: r,
                fillOpacity: "0.3",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.90681 3.81592C4.63067 3.81592 4.40681 4.03978 4.40681 4.31592C4.40681 4.59206 4.63067 4.81592 4.90681 4.81592L8.38037 4.81592L3.13139 10.0649C2.93612 10.2602 2.93612 10.5767 3.13139 10.772C3.32665 10.9673 3.64323 10.9673 3.83849 10.772L9.09309 5.51741V9.00073C9.09309 9.27687 9.31695 9.50073 9.59309 9.50073C9.86923 9.50073 10.0931 9.27687 10.0931 9.00073L10.0931 4.31568C10.0931 4.03953 9.86923 3.81568 9.59309 3.81568C9.58784 3.81568 9.5826 3.81576 9.57738 3.81592L4.90681 3.81592Z",
                fill: i,
              }),
            ],
          });
        };
      },
      27531: function (e, t, a) {
        "use strict";
        var n = a(85893);
        t.Z = () =>
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
      45217: function (e, t, a) {
        "use strict";
        var n = a(85893);
        t.Z = () =>
          (0, n.jsxs)("svg", {
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.68558 10.072C5.49032 9.87672 5.17374 9.87672 4.97848 10.072C4.78322 10.2672 4.78322 10.5838 4.97848 10.7791L7.6413 13.4419C7.64256 13.4432 7.64383 13.4445 7.6451 13.4458C7.7435 13.5442 7.87271 13.593 8.00168 13.5922C8.12864 13.5914 8.25538 13.5426 8.35225 13.4458C8.35352 13.4445 8.35478 13.4432 8.35603 13.4419L11.0189 10.7791C11.2141 10.5838 11.2141 10.2672 11.0189 10.072C10.8236 9.87672 10.507 9.87672 10.3118 10.072L7.99868 12.3851L5.68558 10.072Z",
                fill: "#9D9DAA",
              }),
              (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3105 6.77909C10.5058 6.97435 10.8224 6.97435 11.0176 6.77909C11.2129 6.58383 11.2129 6.26725 11.0176 6.07198L8.3548 3.40916C8.35354 3.40788 8.35227 3.40659 8.35099 3.40532C8.25259 3.30692 8.12338 3.25811 7.99442 3.25888C7.86745 3.25963 7.74072 3.30844 7.64384 3.40532C7.64257 3.40659 7.64131 3.40786 7.64006 3.40914L4.97722 6.07198C4.78195 6.26725 4.78195 6.58383 4.97722 6.77909C5.17248 6.97435 5.48906 6.97435 5.68432 6.77909L7.99742 4.466L10.3105 6.77909Z",
                fill: "#9D9DAA",
              }),
            ],
          });
      },
      92505: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(9008),
          i = a.n(r);
        t.Z = () =>
          (0, n.jsxs)(i(), {
            children: [
              (0, n.jsx)("title", {
                children: "Ithaca - Non-Custodial, Composable Option Protocol",
              }),
              (0, n.jsx)("meta", {
                name: "description",
                content:
                  "Ithaca is a decentralized options and collateralized funding protocol offering optimal risk sharing across various states and time, embedding itself in all steps of any risk sharing instrument's lifecycle.",
              }),
              (0, n.jsx)("meta", {
                property: "og:title",
                content: "Ithaca - Empowering Optimal Risk Sharing",
              }),
              (0, n.jsx)("meta", {
                property: "og:description",
                content:
                  "Explore Ithaca's decentralized ecosystem for trading, risk management, and protocol governance. Engage with our cross-chain infrastructure and contribute to the future of digital value representation.",
              }),
              (0, n.jsx)("meta", {
                property: "og:image",
                content: "/ithaca-og-image.png",
              }),
              (0, n.jsx)("meta", {
                name: "twitter:title",
                content:
                  "Ithaca Protocol: Decentralize Your Trading Experience",
              }),
              (0, n.jsx)("meta", {
                name: "twitter:description",
                content:
                  "Join Ithaca, a decentralized trading and risk management ecosystem, utilizing cross-chain solutions for a seamless trading experience. Discover, trade, and manage risk today.",
              }),
              (0, n.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, n.jsx)("meta", {
                property: "twitter:domain",
                content: "https://app.ithacaprotocol.io/",
              }),
              (0, n.jsx)("meta", {
                name: "twitter:image",
                content: "/ithaca-og-image.png",
              }),
            ],
          });
      },
      46656: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(85893),
          r = a(93967),
          i = a.n(r),
          s = a(67294),
          o = a(43495),
          l = a(51526),
          d = a(73935),
          c = a(37422),
          u = a(65440),
          _ = a(27531),
          m = a(3274),
          p = a.n(m);
        let h = {
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
            title: a,
            onCloseModal: r,
            onSubmitOrder: m,
            isLoading: f,
            isOpen: C,
            hideFooter: v,
            className: x,
            headerContainerClassName: g = "",
            showCloseIcon: w = !0,
          } = e;
          (0, s.useEffect)(() => {
            C
              ? document.body.classList.add("is-active")
              : document.body.classList.remove("is-active");
            let e = (e) => {
              "Escape" === e.key && r();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.body.classList.remove("is-active"),
                  document.removeEventListener("keydown", e);
              }
            );
          }, [C, r]);
          let b = (0, n.jsx)(o.E.div, {
            className: i()(p().modalBackdrop),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => r(),
            children: (0, n.jsxs)(o.E.div, {
              onClick: (e) => e.stopPropagation(),
              className: i()(
                p().modal,
                x,
                "tw-max-h-[95vh] tw-w-[90vw] !tw-max-w-[574px] tw-overflow-auto tw-bg-[#18181B] sm:tw-overflow-hidden"
              ),
              variants: h,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, n.jsxs)("div", {
                  className: i()(p().modalHeader, "tw-px-6 tw-py-4", g),
                  children: [
                    (0, n.jsx)("h4", {
                      className: i()(
                        p().modalTitle,
                        "tw-font-aeonik tw-text-md tw-font-normal tw-text-white"
                      ),
                      children: a,
                    }),
                    w
                      ? (0, n.jsx)(c.Z, {
                          onClick: r,
                          className: p().buttonClose,
                          title: "Click to close modal",
                          children: (0, n.jsx)(_.Z, {}),
                        })
                      : null,
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: i()(
                    p().modalContent,
                    "tw-max-h-full tw-overflow-y-auto tw-px-6 tw-py-4"
                  ),
                  children: [
                    t,
                    !v && m
                      ? (0, n.jsx)("div", {
                          className: p().modalFooter,
                          children: (0, n.jsx)(c.Z, {
                            className: i()(p().confirmButton, {
                              [p().buttonLoading]: f,
                            }),
                            onClick: m,
                            title: "Click to confirm",
                            children: f ? (0, n.jsx)(u.Z, {}) : "Confirm",
                          }),
                        })
                      : "",
                  ],
                }),
              ],
            }),
          });
          return C && document.body
            ? d.createPortal(
                (0, n.jsx)(l.M, { initial: !0, mode: "wait", children: b }),
                document.body
              )
            : null;
        };
      },
      65559: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return c;
          },
        });
        var n = a(85893),
          r = () =>
            (0, n.jsx)("svg", {
              width: "8",
              height: "14",
              viewBox: "0 0 8 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
                fill: "white",
              }),
            }),
          i = () =>
            (0, n.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3536 14.3536C10.1583 14.5488 9.84171 14.5488 9.64645 14.3536L3.64645 8.35355C3.45118 8.15829 3.45118 7.84171 3.64645 7.64645L9.64645 1.64645C9.84171 1.45118 10.1583 1.45118 10.3536 1.64645C10.5488 1.84171 10.5488 2.15829 10.3536 2.35355L4.70711 8L10.3536 13.6464C10.5488 13.8417 10.5488 14.1583 10.3536 14.3536Z",
                fill: "white",
              }),
            }),
          s = a(11358),
          o = a.n(s),
          l = a(7235),
          d = a.n(l),
          c = (e) => {
            let {
                totalItems: t,
                itemsPerPage: a,
                currentPage: s,
                onPageChange: l,
                className: c = "",
              } = e,
              u = Math.ceil(t / a);
            return (0, n.jsx)("div", {
              className: "".concat(c, " ").concat(d().pagination),
              children:
                u > 1 &&
                (0, n.jsx)(o(), {
                  breakLabel: (0, n.jsx)(
                    "div",
                    { className: d().ellipsis, children: "..." },
                    "endEllipsis"
                  ),
                  nextLabel: (0, n.jsx)(r, {}),
                  previousLabel: (0, n.jsx)(i, {}),
                  onPageChange: (e) => {
                    let { selected: t } = e;
                    l(t + 1);
                  },
                  pageRangeDisplayed: 3,
                  marginPagesDisplayed: 1,
                  pageCount: u,
                  forcePage: s - 1,
                  containerClassName: d().pagination,
                  pageClassName: d().navigationItem,
                  previousClassName: ""
                    .concat(d().navigationItem, " ")
                    .concat(d().nextItem),
                  nextClassName: ""
                    .concat(d().navigationItem, " ")
                    .concat(d().nextItem),
                  activeClassName: d().active,
                }),
            });
          };
      },
      24185: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(67294),
          i = a(25675),
          s = a.n(i),
          o = a(91269),
          l = a(84638);
        t.Z = (e) => {
          let [t, a] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              (0, l.wX)(e.src).then((e) => {
                a(e);
              });
            }, [e.src]),
            t ? (0, n.jsx)(s(), { ...e }) : (0, n.jsx)(o.Z, {})
          );
        };
      },
      85292: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(93967),
          i = a.n(r),
          s = a(25448),
          o = a.n(s);
        t.Z = (e) => {
          let { size: t = "xl", children: a, className: r } = e;
          return (0, n.jsx)("div", {
            className: i()(o().container, o()[t], r),
            children: a,
          });
        };
      },
      27888: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(80140),
          i = a.n(r);
        t.Z = (e) => {
          let { children: t } = e;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("main", { className: i().Main, children: t }),
          });
        };
      },
      13880: function (e, t, a) {
        "use strict";
        var n = a(85893),
          r = a(2920),
          i = a.n(r);
        t.Z = (e) => {
          let { children: t, margin: a = "m-0", className: r = "" } = e;
          return (0, n.jsx)("div", {
            className: ""
              .concat(i().panel, " ")
              .concat(a && a, " ")
              .concat(r),
            children: t,
          });
        };
      },
      82834: function (e, t, a) {
        "use strict";
        a.d(t, {
          BB: function () {
            return D;
          },
          GV: function () {
            return S;
          },
          gb: function () {
            return O;
          },
        });
        var n = a(15615),
          r = a(94298),
          i = a(68597),
          s = a(82773),
          o = a(40520),
          l = a(50892),
          d = a(39893),
          c = a(38983),
          u = a(30731),
          _ = a(98558),
          m = a(33981),
          p = a(52493),
          h = a(26798),
          f = a(35699),
          C = a(21131),
          v = a(41749),
          x = a(85758),
          g = a(75691),
          w = a(43210),
          b = a(35194),
          j = a(54704),
          y = a(66403),
          P = a(98494),
          L = a(52961),
          N = a(7301),
          k = a(24543),
          B = a(86900),
          Z = a(20448),
          R = a(94898);
        let T = "9577531e389c799d54896f39e80d7bb0";
        if (!T) throw Error("Environment variable PROJECT_ID is not set.");
        let D = (0, Z.b)().id === w.y.id,
          A = [(0, Z.b)(), w.y, b.F, j.d],
          E = [w.y, y.R, P.v, L.y, N.u, k.e],
          M = (e) => {
            let t = (() => {
              switch (e.id) {
                case y.R.id:
                  return "eth-mainnet";
                case w.y.id:
                  return "arb-mainnet";
                case P.v.id:
                  return "opt-mainnet";
                case L.y.id:
                  return "polygon-mainnet";
                case N.u.id:
                  return "base-mainnet";
                case k.e.id:
                  return "bnb-mainnet";
                case B.Z.id:
                  return "arb-sepolia";
                case b.F.id:
                  return "eth-sepolia";
                case j.d.id:
                  return "bnb-testnet";
                default:
                  return "".concat(e.name.toLowerCase(), "-mainnet");
              }
            })();
            return "https://arb.ithacaprotocol.io/api/rpc/".concat(t);
          },
          S = { appName: "Ithaca" },
          I = (0, n.a3)(
            [
              {
                groupName: "Recommended",
                wallets: [
                  s.P,
                  o.D,
                  l.c,
                  d.D,
                  c.b,
                  u.R,
                  _.J,
                  m.u,
                  p.P,
                  h.c,
                  f.h,
                  C.o,
                  v.u,
                  x.p,
                  g.a,
                ],
              },
            ],
            { appName: "Ithaca", projectId: T }
          ),
          O = (0, r._)({
            chains: D ? E : A,
            client(e) {
              let { chain: t } = e;
              return (0, R.e)({ chain: t, transport: (0, i.d)(M(t)) });
            },
            connectors: I,
          });
      },
      20448: function (e, t, a) {
        "use strict";
        a.d(t, {
          b: function () {
            return l;
          },
        });
        var n = a(43210),
          r = a(86900),
          i = a(57393);
        let s = n.y,
          o = {
            localhost: r.Z,
            "app.ithacaprotocol.io": s,
            "sepolia.canary.ithacanoemon.tech": r.Z,
            "testnet.ithacaprotocol.io": r.Z,
            "app.canary.ithacanoemon.tech": r.Z,
            "mumbai.canary.ithacanoemon.tech": i.v,
            "decent-governor-development-phase1.up.railway.app": r.Z,
            "axelar-integration.ithacaprotocol.io": n.y,
          },
          l = (e) => {
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
              : null !== (t = o[window.location.hostname]) && void 0 !== t
              ? t
              : s;
          };
      },
      64729: function (e, t, a) {
        "use strict";
        a.d(t, {
          X: function () {
            return n;
          },
        }),
          a(82649);
        let n = () => ({
          isSolanaWalletActive: !1,
          leaderBoardAddresses: {
            fundlockArbitrumAddress:
              "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
            wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          },
        });
      },
      81989: function (e, t, a) {
        "use strict";
        a.d(t, {
          Gc: function () {
            return C;
          },
          ho: function () {
            return f;
          },
          Pk: function () {
            return h;
          },
        });
        var n = a(64729),
          r = a(92321),
          i = a(54306),
          s = a(44718),
          o = a(20448),
          l = a(12185),
          d = a(59731),
          c = a(88144),
          u = a(72809);
        let _ = (e) => {
            let { address: t, token: a, query: r } = e,
              { connection: i } = (0, s.R)(),
              o = t ? new u.PublicKey(t) : null,
              { leaderBoardAddresses: l } = (0, n.X)();
            return (0, c.a)({
              queryKey: ["solana-balance", t, a],
              queryFn: async () => {
                if (!o || !i) throw Error("Missing publicKey or connection");
                if ("SOL" === a) {
                  let e = await i.getBalance(o);
                  return {
                    decimals: 9,
                    formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === a) {
                  let e = await i.getParsedTokenAccountsByOwner(o, {
                      mint: new u.PublicKey(l.wethArbitrumAddress),
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
                throw Error("Unsupported token: ".concat(a));
              },
              refetchInterval: 1e4,
              enabled: !!o && !!i,
              ...r,
            });
          },
          m = () => {
            let { isConnected: e, address: t } = (0, r.m)();
            return { isConnected: e, address: t };
          },
          p = () => {
            let { connected: e, publicKey: t } = (0, i.O)(),
              { connection: a } = (0, s.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          h = () => {
            let { isSolanaWalletActive: e } = (0, n.X)(),
              t = m(),
              a = p();
            return e ? a : t;
          },
          f = () => {
            let { address: e } = p();
            return {
              SOLData: _({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: _({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          C = () => {
            let { address: e } = m(),
              { systemInfo: t, isAuthenticated: a } = (0, d.qr)(),
              n = { address: e, chainId: (0, o.b)().id };
            return {
              WETHData: (0, l.K)({
                ...n,
                token: t.tokenAddress.WETH,
                query: { enabled: a, refetchInterval: 1e4 },
              }),
              USDCData: (0, l.K)({
                ...n,
                token: t.tokenAddress.USDC,
                query: { enabled: a, refetchInterval: 1e4 },
              }),
            };
          };
      },
      6586: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            default: function () {
              return K;
            },
          });
        var n,
          r,
          i = a(85893),
          s = a(67294),
          o = a(18776),
          l = a(8352),
          d = a(39332),
          c = a(92505),
          u = a(27888),
          _ = a(85292),
          m = a(13880),
          p = a(24514),
          h = a(37422),
          f = a(45217),
          C = a(65559);
        ((n = r || (r = {})).DATE = "Date"),
          (n.DETAILS = "Details"),
          (n.POINTS = "Points");
        let v = Object.values(r),
          x = { Date: "date", Details: "details", Points: "points" };
        var g = a(84638),
          w = a(62470),
          b = a.n(w),
          j = (e) => {
            let {
                data: t,
                totalDataCount: a,
                page: n,
                setPage: s,
                sortConfig: o,
                setSortConfig: l,
                pageLimit: d,
              } = e,
              c = [r.DATE, r.POINTS],
              u = (e) => {
                let t = "asc";
                o && o.key === e && "asc" === o.direction && (t = "desc"),
                  l({ key: e, direction: t });
              };
            return (0, i.jsxs)("div", {
              className: b().table,
              children: [
                (0, i.jsx)("div", {
                  className: b().header,
                  children: v.map((e, t) => {
                    let a = c.includes(e),
                      n = x[e];
                    return (0, i.jsxs)(
                      "div",
                      {
                        className: b().cell,
                        children: [
                          e,
                          a &&
                            (0, i.jsx)(h.Z, {
                              title: "Click to sort column",
                              className: b().sort,
                              onClick: () => u(n),
                              children: (0, i.jsx)(f.Z, {}),
                            }),
                        ],
                      },
                      t
                    );
                  }),
                }),
                t.map((e, t) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      className: b().row,
                      children: [
                        (0, i.jsx)("div", {
                          className: b().cell,
                          children: e.date,
                        }),
                        (0, i.jsx)("div", {
                          className: b().cell,
                          children: e.description,
                        }),
                        (0, i.jsx)("div", {
                          className: b().cell,
                          children: (0, i.jsx)("p", {
                            className: "Earn" === e.type ? b().positive : "",
                            children: (0, g.au)(e.points, e.type),
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
                a > d
                  ? (0, i.jsx)("div", {
                      className: b().paginationContainer,
                      children: (0, i.jsxs)(p.Z, {
                        direction: "row-space-between",
                        children: [
                          (0, i.jsx)("div", {}),
                          (0, i.jsx)(C.Z, {
                            className: b().pagination,
                            totalItems: a,
                            itemsPerPage: d,
                            currentPage: n,
                            onPageChange: (e) => {
                              s(e);
                            },
                          }),
                        ],
                      }),
                    })
                  : null,
              ],
            });
          },
          y = a(49829),
          P = a(91269),
          L = a(24185),
          N = a(10870),
          k = a(57998),
          B = a.n(k),
          Z = a(49321),
          R = (e) => {
            let { displayName: t, avatarUrl: a, isAvatar: n } = e;
            return (0, i.jsx)("div", {
              className: "".concat(B().container, " ").concat(B().card3),
              children: (0, i.jsxs)("div", {
                className: B().data3,
                children: [
                  (0, i.jsxs)("div", {
                    className: B().descriptions,
                    children: [
                      (0, i.jsx)("p", {
                        className: B().title,
                        children: "My Profile",
                      }),
                      (0, i.jsx)("div", {
                        className: B().descriptionContentBlock,
                        children: (0, i.jsxs)("div", {
                          className: B().profile,
                          children: [
                            n
                              ? (0, i.jsx)(L.Z, {
                                  width: 60,
                                  height: 60,
                                  className: B().avatar,
                                  src: a,
                                  alt: "Leaderboard avatarUrl",
                                })
                              : (0, i.jsx)(P.Z, {}),
                            (0, i.jsxs)("div", {
                              className: B().leaderBoardUsername,
                              children: [
                                (0, i.jsx)("p", {
                                  className: B().userTitle,
                                  children: "Leaderboard Name",
                                }),
                                (0, i.jsx)("p", {
                                  className: B().username,
                                  children: (0, Z.U)(t) ? (0, g.z3)(t) : t,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(N.Z, {
                    trigger: (0, i.jsx)(h.Z, {
                      title: "Edit Profile",
                      variant: "outline",
                      children: "Edit Profile",
                    }),
                  }),
                ],
              }),
            });
          },
          T = a(4389),
          D = a(82834),
          A = a(55405),
          E = a.n(A),
          M = (e) => {
            let {
              mainnetTradingPoints: t,
              claimablePoints: a,
              inactiveReferralPoints: n,
              totalPoints: r,
              isPointActived: s,
            } = e;
            return (0, i.jsx)("div", {
              className: "".concat(E().container, " ").concat(E().card3),
              children: (0, i.jsx)("div", {
                className: E().data3,
                children: s
                  ? (0, i.jsxs)("div", {
                      className: ""
                        .concat(E().descriptions, " ")
                        .concat(E().justifyCenter),
                      children: [
                        (0, i.jsx)("p", {
                          className: E().title,
                          children: "Total Activated Points",
                        }),
                        (0, i.jsx)("div", {
                          className: E().descriptionContentBlock,
                          children: (0, i.jsx)(p.Z, {
                            direction: "column",
                            children: (0, i.jsx)("p", {
                              className: E().pointsLabel,
                              children: (0, g.au)(t < 10 ? 0 : r, "All"),
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, i.jsxs)("div", {
                      className: ""
                        .concat(E().descriptions, " ")
                        .concat(E().justifyBetween),
                      children: [
                        (0, i.jsx)("p", {
                          className: E().title,
                          children: "Total Activated Points",
                        }),
                        (0, i.jsx)("div", {
                          className: E().descriptionContentBlock,
                          children: (0, i.jsxs)(p.Z, {
                            direction: "column",
                            children: [
                              (0, i.jsx)("p", {
                                className: E().pointsLabel,
                                children: (0, g.au)(s ? a : 0, "All"),
                              }),
                              (0, i.jsx)("p", {
                                className: E().totalPointsLabel,
                                children: "Total Pending Points ".concat(
                                  (0, g.au)(s ? n : r, "All")
                                ),
                              }),
                              (0, i.jsxs)("p", {
                                className: E().subtitle,
                                children: [
                                  (0, i.jsx)("a", {
                                    href: D.BB
                                      ? "/trading/dynamic-option-strategies"
                                      : "https://app.ithacaprotocol.io",
                                    target: D.BB ? "_self" : "_blank",
                                    className: E().link,
                                    children: "Trade now on mainnet",
                                  }),
                                  (0, i.jsx)("a", {
                                    href: D.BB
                                      ? "/trading/dynamic-option-strategies"
                                      : "https://app.ithacaprotocol.io",
                                    target: D.BB ? "_self" : "_blank",
                                    children: (0, i.jsx)(T.Z, {}),
                                  }),
                                  "and trade a minimum notional of $20 (digitals), 0.2ETH (options) or 1 ETH (forwards) to activate all points.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
              }),
            });
          },
          S = a(65440),
          I = a(59731),
          O = a(92321),
          U = a(3114),
          F = a(47236),
          W = a(36703),
          z = a(65238),
          H = a.n(z),
          K = () => {
            let e = (0, d.useRouter)(),
              { showToast: t } = (0, F.Z)(),
              { isConnected: a } = (0, O.m)(),
              {
                isAuthenticated: n,
                resetState: r,
                displayName: p,
                avatarUrl: h,
                isAvatar: f,
                setUserPointsData: C,
              } = (0, I.qr)(),
              [v, x] = (0, s.useState)(0),
              [w, b] = (0, s.useState)([]),
              [P, L] = (0, s.useState)(1),
              [N, k] = (0, s.useState)(0),
              [B, Z] = (0, s.useState)(0),
              [T, D] = (0, s.useState)(!1),
              [A, E] = (0, s.useState)(0),
              [z, K] = (0, s.useState)(0),
              [X, J] = (0, s.useState)({ key: "date", direction: "desc" });
            (0, U.E)({
              onDisconnect: () => {
                r(), k(0), Z(0), E(0), e.push("/points/profile");
              },
            });
            let G = (e, t, a) => {
              switch (e) {
                case "WalletConnect":
                  return "Connect Wallet";
                case "CampaignPoints":
                  return "Campaign Points";
                case "Twitter":
                  return "Connect X (Twitter)";
                case "Discord":
                  return "Connect Discord";
                case "Farcaster":
                  return "Connect Farcaster";
                case "Telegram":
                  return "Connect Telegram";
                case "Farcast":
                  return "Connect Farcast";
                case "ReferralWalletConnect":
                  return "Referral - Connect Wallet";
                case "ReferralTelegram":
                  return "Referral - Connect Telegram";
                case "ReferralTwitter":
                  return "Referral - Connect X (Twitter)";
                case "ReferralDiscord":
                  return "Referral - Connect Discord";
                case "Redemption":
                  return "Reward redemption";
                case "FundlockRewards":
                  return "FundLock Rewards";
                default:
                  if (!t)
                    return "Trading Event - ".concat(
                      (0, o.Z)((0, l.Z)(a), "ddMMMyy")
                    );
                  return ""
                    .concat(
                      t.charAt(0) + t.slice(1).toLowerCase(),
                      " Trading Events - "
                    )
                    .concat((0, o.Z)((0, l.Z)(a), "ddMMMyy"));
              }
            };
            return (
              (0, s.useEffect)(() => {
                if (!a || !n) {
                  e.push("/points/profile");
                  return;
                }
                (0, W.Lv)("", !0).then((e) => {
                  let { data: a } = e;
                  (!a || Object.keys(a.user).length) &&
                    (0, W.sk)({
                      page: P,
                      pageLimit: 10,
                      sortField: X.key,
                      sortType: X.direction,
                      filterBy: "All",
                    }).then((e) => {
                      let { data: a, error: n } = e;
                      if (n)
                        (0, g.mv)({
                          showToast: t,
                          title: n.name,
                          message: n.message,
                        });
                      else if (a) {
                        var r;
                        let {
                          claimablePoints: e,
                          mainnetTradingPoints: t,
                          isPointActived: n,
                          points: i,
                          inactiveReferralPoints: s,
                          rewards: d,
                          user: c,
                        } = a;
                        k(e),
                          Z(t),
                          D(n),
                          E(i),
                          K(s),
                          C({
                            displayName: c.displayName,
                            avatarUrl:
                              null !== (r = c.avatarUrl) && void 0 !== r
                                ? r
                                : "",
                            isAvatar: c.isAvatar,
                          }),
                          x(d.total),
                          b(() =>
                            d.events.map((e) => ({
                              ...e,
                              description: G(
                                e.description,
                                e.tradingMode,
                                e.date
                              ),
                              date: (0, o.Z)((0, l.Z)(e.date), "dd MMM yy"),
                            }))
                          );
                      }
                    });
                });
              }, [a, n, X.key, X.direction, P]),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(c.Z, {}),
                  (0, i.jsx)(u.Z, {
                    children: (0, i.jsxs)(_.Z, {
                      children: [
                        (0, i.jsx)(y.Z, {}),
                        (0, i.jsxs)("div", {
                          className: H().wrapper,
                          children: [
                            (0, i.jsxs)("div", {
                              className: H().cardsContainer,
                              children: [
                                (0, i.jsx)(R, {
                                  displayName: p,
                                  isAvatar: f,
                                  avatarUrl: h,
                                }),
                                (0, i.jsx)(M, {
                                  mainnetTradingPoints: B,
                                  isPointActived: T,
                                  claimablePoints: N,
                                  inactiveReferralPoints: z,
                                  totalPoints: A,
                                }),
                              ],
                            }),
                            (0, i.jsxs)(m.Z, {
                              className: H().tableWrapper,
                              children: [
                                (0, i.jsx)("h1", {
                                  children: "Points History",
                                }),
                                w.length
                                  ? (0, i.jsx)(j, {
                                      data: w,
                                      totalDataCount: v,
                                      page: P,
                                      setPage: (e) => L(e),
                                      sortConfig: X,
                                      setSortConfig: (e) => J(e),
                                      pageLimit: 10,
                                    })
                                  : (0, i.jsx)("div", {
                                      className: H().loaderWrapper,
                                      children: (0, i.jsx)(S.Z, { type: "sm" }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          };
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
      7235: function (e) {
        e.exports = {
          pagination: "Pagination_pagination__x05XU",
          navigationItem: "Pagination_navigationItem__FjrLC",
          active: "Pagination_active__SeQyo",
          nextItem: "Pagination_nextItem__dm87y",
          ellipsis: "Pagination_ellipsis__Sg9Es",
        };
      },
      55405: function (e) {
        e.exports = {
          container: "PointsCard_container__hmW4K",
          address: "PointsCard_address__ueKdx",
          data: "PointsCard_data__1SVTh",
          colorGreen: "PointsCard_colorGreen__O4rxz",
          colorRed: "PointsCard_colorRed__uFa_6",
          value: "PointsCard_value__J7RaX",
          card2: "PointsCard_card2__Hf1Qw",
          data2: "PointsCard_data2__itOH8",
          card3: "PointsCard_card3__mclJT",
          data3: "PointsCard_data3__ij4z8",
          descriptions: "PointsCard_descriptions__g3G_B",
          title: "PointsCard_title__x7zxu",
          descriptionContentBlock: "PointsCard_descriptionContentBlock__nbZEj",
          profile: "PointsCard_profile__wnmDy",
          avatar: "PointsCard_avatar__kl71i",
          pointsLabel: "PointsCard_pointsLabel__WMTKE",
          totalPointsLabel: "PointsCard_totalPointsLabel__ofuz5",
          leaderBoardUsername: "PointsCard_leaderBoardUsername__Gtw78",
          userTitle: "PointsCard_userTitle__m354d",
          username: "PointsCard_username__ab7xY",
          editButton: "PointsCard_editButton__2DNDV",
          redeemButtonContainer: "PointsCard_redeemButtonContainer__2095h",
          redeemButton: "PointsCard_redeemButton__mFzKn",
          successful: "PointsCard_successful__7pVwR",
          failed: "PointsCard_failed__Ryejh",
          subtitle: "PointsCard_subtitle__5cJgl",
          link: "PointsCard_link__zNWtI",
          justifyBetween: "PointsCard_justifyBetween__1XgYt",
          justifyCenter: "PointsCard_justifyCenter__OIE5C",
        };
      },
      57998: function (e) {
        e.exports = {
          container: "ProfileCard_container__wwuJN",
          address: "ProfileCard_address__f_i60",
          data: "ProfileCard_data__58UtH",
          colorGreen: "ProfileCard_colorGreen__x0hK8",
          colorRed: "ProfileCard_colorRed__mupeC",
          value: "ProfileCard_value__ilQOm",
          card2: "ProfileCard_card2__yDlM_",
          data2: "ProfileCard_data2__fwGlC",
          card3: "ProfileCard_card3__d4lrq",
          data3: "ProfileCard_data3__0w3Jv",
          descriptions: "ProfileCard_descriptions__w3ykJ",
          title: "ProfileCard_title__lyZcT",
          descriptionContentBlock: "ProfileCard_descriptionContentBlock___0Wma",
          profile: "ProfileCard_profile__MLvoi",
          avatar: "ProfileCard_avatar__uo_dZ",
          pointsLabel: "ProfileCard_pointsLabel__d6FcG",
          totalPointsLabel: "ProfileCard_totalPointsLabel__nDeGb",
          leaderBoardUsername: "ProfileCard_leaderBoardUsername__lPtxr",
          userTitle: "ProfileCard_userTitle__QLUcg",
          username: "ProfileCard_username__TCpKS",
          editButton: "ProfileCard_editButton__ZkxhA",
          redeemButtonContainer: "ProfileCard_redeemButtonContainer__OKUVZ",
          redeemButton: "ProfileCard_redeemButton__yZYDn",
          successful: "ProfileCard_successful__xkcBu",
          failed: "ProfileCard_failed__RKAHH",
          subtitle: "ProfileCard_subtitle__4_0xL",
          link: "ProfileCard_link__4MhkX",
        };
      },
      62470: function (e) {
        e.exports = {
          table: "TableRewardsLeaderboard_table__kaTKN",
          paginationContainer:
            "TableRewardsLeaderboard_paginationContainer__E_tcN",
          pagination: "TableRewardsLeaderboard_pagination__b8Biu",
          header: "TableRewardsLeaderboard_header__J1odr",
          cell: "TableRewardsLeaderboard_cell__1RXBu",
          row: "TableRewardsLeaderboard_row__7DnV1",
          positive: "TableRewardsLeaderboard_positive__Bgtga",
          sort: "TableRewardsLeaderboard_sort__YQ1i7",
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
      65238: function (e) {
        e.exports = {
          wrapper: "rewards_wrapper__ARw3Y",
          cardsContainer: "rewards_cardsContainer__gOj6e",
          tableWrapper: "rewards_tableWrapper__oFaAv",
          loaderWrapper: "rewards_loaderWrapper__67u31",
        };
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 9261, 4442, 5675, 7410, 1371, 9342, 2592, 4782, 6322, 9773,
          8026, 7461, 497, 8776, 482, 3962, 579, 8539, 870, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 60077));
        }
      ),
        (_N_E = e.O());
    },
  ]);
