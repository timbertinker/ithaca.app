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
      (e._sentryDebugIds[t] = "63179809-6501-4969-89f1-434fc8dfb6d7"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-63179809-6501-4969-89f1-434fc8dfb6d7"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1989],
  {
    20448: function (e, t, n) {
      n.d(t, {
        b: function () {
          return l;
        },
      });
      var a = n(43210),
        r = n(86900),
        o = n(57393);
      let c = a.y,
        i = {
          localhost: r.Z,
          "app.ithacaprotocol.io": c,
          "sepolia.canary.ithacanoemon.tech": r.Z,
          "testnet.ithacaprotocol.io": r.Z,
          "app.canary.ithacanoemon.tech": r.Z,
          "mumbai.canary.ithacanoemon.tech": o.v,
          "decent-governor-development-phase1.up.railway.app": r.Z,
          "axelar-integration.ithacaprotocol.io": a.y,
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
            : null !== (t = i[window.location.hostname]) && void 0 !== t
            ? t
            : c;
        };
    },
    64729: function (e, t, n) {
      n.d(t, {
        X: function () {
          return a;
        },
      }),
        n(82649);
      let a = () => ({
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
          return y;
        },
        ho: function () {
          return h;
        },
        Pk: function () {
          return m;
        },
      });
      var a = n(64729),
        r = n(92321),
        o = n(54306),
        c = n(44718),
        i = n(20448),
        l = n(12185),
        s = n(59731),
        u = n(88144),
        d = n(72809);
      let b = (e) => {
          let { address: t, token: n, query: r } = e,
            { connection: o } = (0, c.R)(),
            i = t ? new d.PublicKey(t) : null,
            { leaderBoardAddresses: l } = (0, a.X)();
          return (0, u.a)({
            queryKey: ["solana-balance", t, n],
            queryFn: async () => {
              if (!i || !o) throw Error("Missing publicKey or connection");
              if ("SOL" === n) {
                let e = await o.getBalance(i);
                return {
                  decimals: 9,
                  formatted: (e / d.LAMPORTS_PER_SOL).toString(),
                  symbol: "SOL",
                  value: BigInt(e),
                };
              }
              if ("USDC" === n) {
                let e = await o.getParsedTokenAccountsByOwner(i, {
                    mint: new d.PublicKey(l.wethArbitrumAddress),
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
            enabled: !!i && !!o,
            ...r,
          });
        },
        p = () => {
          let { isConnected: e, address: t } = (0, r.m)();
          return { isConnected: e, address: t };
        },
        f = () => {
          let { connected: e, publicKey: t } = (0, o.O)(),
            { connection: n } = (0, c.R)();
          return { isConnected: e, address: null == t ? void 0 : t.toBase58() };
        },
        m = () => {
          let { isSolanaWalletActive: e } = (0, a.X)(),
            t = p(),
            n = f();
          return e ? n : t;
        },
        h = () => {
          let { address: e } = f();
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
        y = () => {
          let { address: e } = p(),
            { systemInfo: t, isAuthenticated: n } = (0, s.qr)(),
            a = { address: e, chainId: (0, i.b)().id };
          return {
            WETHData: (0, l.K)({
              ...a,
              token: t.tokenAddress.WETH,
              query: { enabled: n, refetchInterval: 1e4 },
            }),
            USDCData: (0, l.K)({
              ...a,
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
          return r;
        },
      });
      var a = n(67294);
      let r = (0, a.createContext)({});
      function o() {
        return (0, a.useContext)(r);
      }
    },
    54306: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
        z: function () {
          return i;
        },
      });
      var a = n(67294);
      let r = [],
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
        get: () => (c("read", "wallets"), r),
      }),
        Object.defineProperty(o, "wallet", {
          get: () => (c("read", "wallet"), null),
        }),
        Object.defineProperty(o, "publicKey", {
          get: () => (c("read", "publicKey"), null),
        });
      let i = (0, a.createContext)(o);
      function l() {
        return (0, a.useContext)(i);
      }
    },
    43210: function (e, t, n) {
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
      n.d(t, {
        v: function () {
          return a;
        },
      });
      let a = (0, n(86164).a)({
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
