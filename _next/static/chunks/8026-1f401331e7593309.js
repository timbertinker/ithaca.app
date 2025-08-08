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
      (t._sentryDebugIds[e] = "650968ce-9de0-4356-a2bc-27f272ac0304"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-650968ce-9de0-4356-a2bc-27f272ac0304"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8026],
  {
    44718: function (t, e, n) {
      n.d(e, {
        R: function () {
          return c;
        },
        h: function () {
          return r;
        },
      });
      var a = n(67294);
      let r = (0, a.createContext)({});
      function c() {
        return (0, a.useContext)(r);
      }
    },
    54306: function (t, e, n) {
      n.d(e, {
        O: function () {
          return i;
        },
        z: function () {
          return s;
        },
      });
      var a = n(67294);
      let r = [],
        c = {
          autoConnect: !1,
          connecting: !1,
          connected: !1,
          disconnecting: !1,
          select() {
            o("call", "select");
          },
          connect: () => Promise.reject(o("call", "connect")),
          disconnect: () => Promise.reject(o("call", "disconnect")),
          sendTransaction: () => Promise.reject(o("call", "sendTransaction")),
          signTransaction: () => Promise.reject(o("call", "signTransaction")),
          signAllTransactions: () =>
            Promise.reject(o("call", "signAllTransactions")),
          signMessage: () => Promise.reject(o("call", "signMessage")),
          signIn: () => Promise.reject(o("call", "signIn")),
        };
      function o(t, e) {
        let n = Error(
          `You have tried to ${t} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
        );
        return console.error(n), n;
      }
      Object.defineProperty(c, "wallets", {
        get: () => (o("read", "wallets"), r),
      }),
        Object.defineProperty(c, "wallet", {
          get: () => (o("read", "wallet"), null),
        }),
        Object.defineProperty(c, "publicKey", {
          get: () => (o("read", "publicKey"), null),
        });
      let s = (0, a.createContext)(c);
      function i() {
        return (0, a.useContext)(s);
      }
    },
    96128: function (t, e, n) {
      n.d(e, {
        T: function () {
          return b;
        },
      });
      var a = n(14503),
        r = n(8998),
        c = n(36117),
        o = n(68064),
        s = n(33840),
        i = n(26445),
        u = n(33639),
        l = n(87469),
        d = n(61163),
        p = n(74688),
        f = n(93714),
        h = n(47531),
        m = n(79524),
        w = n(37397),
        y = n(99238);
      async function b(t, e) {
        let {
          account: n = t.account,
          chain: b = t.chain,
          accessList: g,
          authorizationList: C,
          blobs: T,
          data: v,
          gas: P,
          gasPrice: I,
          maxFeePerBlobGas: q,
          maxFeePerGas: _,
          maxPriorityFeePerGas: k,
          nonce: x,
          value: E,
          ...A
        } = e;
        if (!n)
          throw new r.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let j = (0, a.T)(n);
        try {
          (0, h.F)(e);
          let n = await (async () =>
            e.to
              ? e.to
              : C && C.length > 0
              ? await (0, o.z)({ authorization: C[0] }).catch(() => {
                  throw new c.G(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if ("json-rpc" === j.type) {
            let e;
            null !== b &&
              ((e = await (0, f.s)(t, m.L, "getChainId")({})),
              (0, s.q)({ currentChainId: e, chain: b }));
            let a = t.chain?.formatters?.transactionRequest?.format,
              r = (a || p.tG)({
                ...(0, d.K)(A, { format: a }),
                accessList: g,
                authorizationList: C,
                blobs: T,
                chainId: e,
                data: v,
                from: j.address,
                gas: P,
                gasPrice: I,
                maxFeePerBlobGas: q,
                maxFeePerGas: _,
                maxPriorityFeePerGas: k,
                nonce: x,
                to: n,
                value: E,
              });
            return await t.request(
              { method: "eth_sendTransaction", params: [r] },
              { retryCount: 0 }
            );
          }
          if ("local" === j.type) {
            let e = await (0, f.s)(
                t,
                w.Z,
                "prepareTransactionRequest"
              )({
                account: j,
                accessList: g,
                authorizationList: C,
                blobs: T,
                chain: b,
                data: v,
                gas: P,
                gasPrice: I,
                maxFeePerBlobGas: q,
                maxFeePerGas: _,
                maxPriorityFeePerGas: k,
                nonce: x,
                nonceManager: j.nonceManager,
                parameters: [...w.Q, "sidecars"],
                value: E,
                ...A,
                to: n,
              }),
              a = b?.serializers?.transaction,
              r = await j.signTransaction(e, { serializer: a });
            return await (0, f.s)(
              t,
              y.p,
              "sendRawTransaction"
            )({ serializedTransaction: r });
          }
          if ("smart" === j.type)
            throw new r.Y({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new r.Y({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: j.type,
          });
        } catch (t) {
          if (t instanceof r.Y) throw t;
          throw (function (t, { docsPath: e, ...n }) {
            let a = (() => {
              let e = (0, l.k)(t, n);
              return e instanceof i.cj ? t : e;
            })();
            return new u.mk(a, { docsPath: e, ...n });
          })(t, { ...e, account: j, chain: e.chain || void 0 });
        }
      }
    },
    61877: function (t, e, n) {
      n.d(e, {
        n: function () {
          return u;
        },
      });
      var a = n(14503),
        r = n(8998),
        c = n(55629),
        o = n(72365),
        s = n(93714),
        i = n(96128);
      async function u(t, e) {
        let {
          abi: n,
          account: u = t.account,
          address: l,
          args: d,
          dataSuffix: p,
          functionName: f,
          ...h
        } = e;
        if (!u) throw new r.o({ docsPath: "/docs/contract/writeContract" });
        let m = (0, a.T)(u),
          w = (0, c.R)({ abi: n, args: d, functionName: f });
        try {
          return await (0, s.s)(
            t,
            i.T,
            "sendTransaction"
          )({
            data: `${w}${p ? p.replace("0x", "") : ""}`,
            to: l,
            account: m,
            ...h,
          });
        } catch (t) {
          throw (0, o.S)(t, {
            abi: n,
            address: l,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: f,
            sender: m.address,
          });
        }
      }
    },
    43210: function (t, e, n) {
      n.d(e, {
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
    86900: function (t, e, n) {
      n.d(e, {
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
    57393: function (t, e, n) {
      n.d(e, {
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
    33840: function (t, e, n) {
      n.d(e, {
        q: function () {
          return r;
        },
      });
      var a = n(80377);
      function r({ chain: t, currentChainId: e }) {
        if (!t) throw new a.Bk();
        if (e !== t.id) throw new a.Yl({ chain: t, currentChainId: e });
      }
    },
    89469: function (t, e, n) {
      n.d(e, {
        p: function () {
          return N;
        },
      });
      var a = n(30202),
        r = n(79524),
        c = n(92106);
      async function o(t, { chain: e }) {
        let {
          id: n,
          name: a,
          nativeCurrency: r,
          rpcUrls: o,
          blockExplorers: s,
        } = e;
        await t.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, c.eC)(n),
                chainName: a,
                nativeCurrency: r,
                rpcUrls: o.default.http,
                blockExplorerUrls: s
                  ? Object.values(s).map(({ url: t }) => t)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var s = n(30286),
        i = n(96128),
        u = n(45775);
      async function l(t) {
        return t.account?.type === "local"
          ? [t.account.address]
          : (await t.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (t) => (0, u.x)(t)
            );
      }
      async function d(t) {
        return await t.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var p = n(37397);
      async function f(t) {
        return (
          await t.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((t) => (0, u.K)(t));
      }
      async function h(t, e) {
        return t.request(
          { method: "wallet_requestPermissions", params: [e] },
          { retryCount: 0 }
        );
      }
      var m = n(99238),
        w = n(22980),
        y = n(14503),
        b = n(8998),
        g = n(33840),
        C = n(74688),
        T = n(93714),
        v = n(47531);
      async function P(t, e) {
        let { account: n = t.account, chain: a = t.chain, ...o } = e;
        if (!n)
          throw new b.o({ docsPath: "/docs/actions/wallet/signTransaction" });
        let s = (0, y.T)(n);
        (0, v.F)({ account: s, ...e });
        let i = await (0, T.s)(t, r.L, "getChainId")({});
        null !== a && (0, g.q)({ currentChainId: i, chain: a });
        let u = a?.formatters || t.chain?.formatters,
          l = u?.transactionRequest?.format || C.tG;
        return s.signTransaction
          ? s.signTransaction(
              { ...o, chainId: i },
              { serializer: t.chain?.serializers?.transaction }
            )
          : await t.request(
              {
                method: "eth_signTransaction",
                params: [{ ...l(o), chainId: (0, c.eC)(i), from: s.address }],
              },
              { retryCount: 0 }
            );
      }
      var I = n(71352);
      async function q(t, e) {
        let {
          account: n = t.account,
          domain: a,
          message: r,
          primaryType: c,
        } = e;
        if (!n)
          throw new b.o({ docsPath: "/docs/actions/wallet/signTypedData" });
        let o = (0, y.T)(n),
          s = { EIP712Domain: (0, I.cj)({ domain: a }), ...e.types };
        if (
          ((0, I.iC)({ domain: a, message: r, primaryType: c, types: s }),
          o.signTypedData)
        )
          return o.signTypedData({
            domain: a,
            message: r,
            primaryType: c,
            types: s,
          });
        let i = (0, I.H6)({ domain: a, message: r, primaryType: c, types: s });
        return t.request(
          { method: "eth_signTypedData_v4", params: [o.address, i] },
          { retryCount: 0 }
        );
      }
      async function _(t, { id: e }) {
        await t.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, c.eC)(e) }],
          },
          { retryCount: 0 }
        );
      }
      async function k(t, e) {
        return await t.request(
          { method: "wallet_watchAsset", params: e },
          { retryCount: 0 }
        );
      }
      var x = n(61877);
      function E(t) {
        return {
          addChain: (e) => o(t, e),
          deployContract: (e) =>
            (function (t, e) {
              let { abi: n, args: a, bytecode: r, ...c } = e,
                o = (0, s.w)({ abi: n, args: a, bytecode: r });
              return (0, i.T)(t, { ...c, data: o });
            })(t, e),
          getAddresses: () => l(t),
          getChainId: () => (0, r.L)(t),
          getPermissions: () => d(t),
          prepareTransactionRequest: (e) => (0, p.Z)(t, e),
          requestAddresses: () => f(t),
          requestPermissions: (e) => h(t, e),
          sendRawTransaction: (e) => (0, m.p)(t, e),
          sendTransaction: (e) => (0, i.T)(t, e),
          signMessage: (e) => (0, w.l)(t, e),
          signTransaction: (e) => P(t, e),
          signTypedData: (e) => q(t, e),
          switchChain: (e) => _(t, e),
          watchAsset: (e) => k(t, e),
          writeContract: (e) => (0, x.n)(t, e),
        };
      }
      var A = n(75230);
      async function j(t, e = {}) {
        return (await (0, A.e)(t, e)).extend(E);
      }
      var U = n(36100),
        M = n(67294),
        D = n(82451),
        O = n(92321),
        R = n(82002),
        z = n(37122);
      function N(t = {}) {
        let { query: e = {}, ...n } = t,
          r = (0, z.Z)(n),
          c = (0, a.NL)(),
          { address: o, connector: s, status: i } = (0, O.m)({ config: r }),
          u = (0, R.x)({ config: r }),
          l = t.connector ?? s,
          { queryKey: d, ...p } = (function (t, e = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: a } = e,
                  { connectorUid: r, scopeKey: c, ...o } = n[1];
                return j(t, { ...o, connector: a });
              },
              queryKey: (function (t = {}) {
                let { connector: e, ...n } = t;
                return [
                  "walletClient",
                  { ...(0, U.OP)(n), connectorUid: e?.uid },
                ];
              })(e),
            };
          })(r, { ...t, chainId: t.chainId ?? u, connector: t.connector ?? s }),
          f = !!(
            ("connected" === i || ("reconnecting" === i && l?.getProvider)) &&
            (e.enabled ?? !0)
          ),
          h = (0, M.useRef)(o);
        return (
          (0, M.useEffect)(() => {
            let t = h.current;
            !o && t
              ? (c.removeQueries({ queryKey: d }), (h.current = void 0))
              : o !== t &&
                (c.invalidateQueries({ queryKey: d }), (h.current = o));
          }, [o, c]),
          (0, D.aM)({
            ...e,
            ...p,
            queryKey: d,
            enabled: f,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
  },
]);
