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
      (e._sentryDebugIds[t] = "cbb01fd8-b5a5-4193-868a-e00aa0d020c9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-cbb01fd8-b5a5-4193-868a-e00aa0d020c9"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [483, 1989],
  {
    91269: function (e, t, n) {
      var r = n(85893),
        a = n(25675),
        o = n.n(a),
        c = n(81989);
      t.Z = (e) => {
        let { height: t = 30, width: n = 30, className: a } = e,
          { address: l } = (0, c.Pk)();
        return (0, r.jsx)(o(), {
          src: "https://mywalleticon.com/usericon/".concat(l),
          alt: "Wallet Avatar",
          unoptimized: !0,
          priority: !0,
          width: n,
          height: t,
          className: a,
        });
      };
    },
    30483: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var r = n(85893),
        a = n(15615),
        o = n(89765),
        c = "#1A1B1F",
        l = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: c },
          orange: { accentColor: "#FF983D", accentColorForeground: c },
          pink: { accentColor: "#FF7AB8", accentColorForeground: c },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        i = l.blue,
        d = ({
          accentColor: e = i.accentColor,
          accentColorForeground: t = i.accentColorForeground,
          ...n
        } = {}) => ({
          ...(0, o.w)(n),
          colors: {
            accentColor: e,
            accentColorForeground: t,
            actionButtonBorder: "rgba(255, 255, 255, 0.04)",
            actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
            actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
            closeButton: "rgba(224, 232, 255, 0.6)",
            closeButtonBackground: "rgba(255, 255, 255, 0.08)",
            connectButtonBackground: c,
            connectButtonBackgroundError: "#FF494A",
            connectButtonInnerBackground:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
            connectButtonText: "#FFF",
            connectButtonTextError: "#FFF",
            connectionIndicator: "#30E000",
            downloadBottomCardBackground:
              "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
            downloadTopCardBackground:
              "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
            error: "#FF494A",
            generalBorder: "rgba(255, 255, 255, 0.08)",
            generalBorderDim: "rgba(255, 255, 255, 0.04)",
            menuItemBackground: "rgba(224, 232, 255, 0.1)",
            modalBackdrop: "rgba(0, 0, 0, 0.5)",
            modalBackground: "#1A1B1F",
            modalBorder: "rgba(255, 255, 255, 0.08)",
            modalText: "#FFF",
            modalTextDim: "rgba(224, 232, 255, 0.3)",
            modalTextSecondary: "rgba(255, 255, 255, 0.6)",
            profileAction: "rgba(224, 232, 255, 0.1)",
            profileActionHover: "rgba(224, 232, 255, 0.2)",
            profileForeground: "rgba(224, 232, 255, 0.05)",
            selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
            standby: "#FFD641",
          },
          shadows: {
            connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
            profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
            selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
            selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
            walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
          },
        });
      d.accentColors = l;
      var s = n(99931),
        u = n(82834),
        b = n(91269),
        p = n(20448);
      n(18834);
      var g = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(s.F, {
          config: u.gb,
          children: (0, r.jsxs)(a.pj, {
            initialChain: (0, p.b)(!1),
            theme: null,
            modalSize: "compact",
            appInfo: u.GV,
            avatar: () =>
              (0, r.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, r.jsx)(b.Z, { className: "tw-size-full" }),
              }),
            children: [
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: "\n            :root {\n              ".concat(
                    (0, a._K)(
                      d({
                        accentColor: "rgba(94, 225, 146, 0.60)",
                        accentColorForeground: "white",
                        borderRadius: "large",
                        overlayBlur: "small",
                      })
                    ),
                    "\n            }\n          "
                  ),
                },
              }),
              t,
            ],
          }),
        });
      };
    },
    82834: function (e, t, n) {
      n.d(t, {
        BB: function () {
          return j;
        },
        GV: function () {
          return L;
        },
        gb: function () {
          return Z;
        },
      });
      var r = n(15615),
        a = n(94298),
        o = n(68597),
        c = n(82773),
        l = n(40520),
        i = n(50892),
        d = n(39893),
        s = n(38983),
        u = n(30731),
        b = n(98558),
        p = n(33981),
        g = n(52493),
        m = n(26798),
        f = n(35699),
        h = n(21131),
        y = n(41749),
        F = n(85758),
        C = n(75691),
        x = n(43210),
        v = n(35194),
        B = n(54704),
        w = n(66403),
        A = n(98494),
        k = n(52961),
        D = n(7301),
        S = n(24543),
        I = n(86900),
        E = n(20448),
        P = n(94898);
      let T = "9577531e389c799d54896f39e80d7bb0";
      if (!T) throw Error("Environment variable PROJECT_ID is not set.");
      let j = (0, E.b)().id === x.y.id,
        O = [(0, E.b)(), x.y, v.F, B.d],
        _ = [x.y, w.R, A.v, k.y, D.u, S.e],
        U = (e) => {
          let t = (() => {
            switch (e.id) {
              case w.R.id:
                return "eth-mainnet";
              case x.y.id:
                return "arb-mainnet";
              case A.v.id:
                return "opt-mainnet";
              case k.y.id:
                return "polygon-mainnet";
              case D.u.id:
                return "base-mainnet";
              case S.e.id:
                return "bnb-mainnet";
              case I.Z.id:
                return "arb-sepolia";
              case v.F.id:
                return "eth-sepolia";
              case B.d.id:
                return "bnb-testnet";
              default:
                return "".concat(e.name.toLowerCase(), "-mainnet");
            }
          })();
          return "https://arb.ithacaprotocol.io/api/rpc/".concat(t);
        },
        L = { appName: "Ithaca" },
        R = (0, r.a3)(
          [
            {
              groupName: "Recommended",
              wallets: [
                c.P,
                l.D,
                i.c,
                d.D,
                s.b,
                u.R,
                b.J,
                p.u,
                g.P,
                m.c,
                f.h,
                h.o,
                y.u,
                F.p,
                C.a,
              ],
            },
          ],
          { appName: "Ithaca", projectId: T }
        ),
        Z = (0, a._)({
          chains: j ? _ : O,
          client(e) {
            let { chain: t } = e;
            return (0, P.e)({ chain: t, transport: (0, o.d)(U(t)) });
          },
          connectors: R,
        });
    },
    20448: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(43210),
        a = n(86900),
        o = n(57393);
      let c = r.y,
        l = {
          localhost: a.Z,
          "app.ithacaprotocol.io": c,
          "sepolia.canary.ithacanoemon.tech": a.Z,
          "testnet.ithacaprotocol.io": a.Z,
          "app.canary.ithacanoemon.tech": a.Z,
          "mumbai.canary.ithacanoemon.tech": o.v,
          "decent-governor-development-phase1.up.railway.app": a.Z,
          "axelar-integration.ithacaprotocol.io": r.y,
        },
        i = (e) => {
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
            : null !== (t = l[window.location.hostname]) && void 0 !== t
            ? t
            : c;
        };
    },
    64729: function (e, t, n) {
      n.d(t, {
        X: function () {
          return r;
        },
      }),
        n(82649);
      let r = () => ({
        isSolanaWalletActive: !1,
        leaderBoardAddresses: {
          fundlockArbitrumAddress: "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
          wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        },
      });
    },
    81989: function (e, t, n) {
      n.d(t, {
        Gc: function () {
          return h;
        },
        ho: function () {
          return f;
        },
        Pk: function () {
          return m;
        },
      });
      var r = n(64729),
        a = n(92321),
        o = n(54306),
        c = n(44718),
        l = n(20448),
        i = n(12185),
        d = n(59731),
        s = n(88144),
        u = n(72809);
      let b = (e) => {
          let { address: t, token: n, query: a } = e,
            { connection: o } = (0, c.R)(),
            l = t ? new u.PublicKey(t) : null,
            { leaderBoardAddresses: i } = (0, r.X)();
          return (0, s.a)({
            queryKey: ["solana-balance", t, n],
            queryFn: async () => {
              if (!l || !o) throw Error("Missing publicKey or connection");
              if ("SOL" === n) {
                let e = await o.getBalance(l);
                return {
                  decimals: 9,
                  formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                  symbol: "SOL",
                  value: BigInt(e),
                };
              }
              if ("USDC" === n) {
                let e = await o.getParsedTokenAccountsByOwner(l, {
                    mint: new u.PublicKey(i.wethArbitrumAddress),
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
            enabled: !!l && !!o,
            ...a,
          });
        },
        p = () => {
          let { isConnected: e, address: t } = (0, a.m)();
          return { isConnected: e, address: t };
        },
        g = () => {
          let { connected: e, publicKey: t } = (0, o.O)(),
            { connection: n } = (0, c.R)();
          return { isConnected: e, address: null == t ? void 0 : t.toBase58() };
        },
        m = () => {
          let { isSolanaWalletActive: e } = (0, r.X)(),
            t = p(),
            n = g();
          return e ? n : t;
        },
        f = () => {
          let { address: e } = g();
          return {
            SOLData: b({
              address: e,
              token: "SOL",
              query: { enabled: !!e, refetchInterval: 1e4 },
            }),
            USDCData: b({
              address: null == e ? void 0 : e.toString(),
              token: "USDC",
              query: { enabled: !!e, refetchInterval: 1e4 },
            }),
          };
        },
        h = () => {
          let { address: e } = p(),
            { systemInfo: t, isAuthenticated: n } = (0, d.qr)(),
            r = { address: e, chainId: (0, l.b)().id };
          return {
            WETHData: (0, i.K)({
              ...r,
              token: t.tokenAddress.WETH,
              query: { enabled: n, refetchInterval: 1e4 },
            }),
            USDCData: (0, i.K)({
              ...r,
              token: t.tokenAddress.USDC,
              query: { enabled: n, refetchInterval: 1e4 },
            }),
          };
        };
    },
    44718: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
        h: function () {
          return a;
        },
      });
      var r = n(67294);
      let a = (0, r.createContext)({});
      function o() {
        return (0, r.useContext)(a);
      }
    },
    54306: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i;
        },
        z: function () {
          return l;
        },
      });
      var r = n(67294);
      let a = [],
        o = {
          autoConnect: !1,
          connecting: !1,
          connected: !1,
          disconnecting: !1,
          select() {
            c("call", "select");
          },
          connect: () => Promise.reject(c("call", "connect")),
          disconnect: () => Promise.reject(c("call", "disconnect")),
          sendTransaction: () => Promise.reject(c("call", "sendTransaction")),
          signTransaction: () => Promise.reject(c("call", "signTransaction")),
          signAllTransactions: () =>
            Promise.reject(c("call", "signAllTransactions")),
          signMessage: () => Promise.reject(c("call", "signMessage")),
          signIn: () => Promise.reject(c("call", "signIn")),
        };
      function c(e, t) {
        let n = Error(
          `You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
        );
        return console.error(n), n;
      }
      Object.defineProperty(o, "wallets", {
        get: () => (c("read", "wallets"), a),
      }),
        Object.defineProperty(o, "wallet", {
          get: () => (c("read", "wallet"), null),
        }),
        Object.defineProperty(o, "publicKey", {
          get: () => (c("read", "publicKey"), null),
        });
      let l = (0, r.createContext)(o);
      function i() {
        return (0, r.useContext)(l);
      }
    },
    43210: function (e, t, n) {
      n.d(t, {
        y: function () {
          return r;
        },
      });
      let r = (0, n(86164).a)({
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
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(86164).a)({
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
      n.d(t, {
        v: function () {
          return r;
        },
      });
      let r = (0, n(86164).a)({
        id: 80001,
        name: "Polygon Mumbai",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc.ankr.com/polygon_mumbai"] } },
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
