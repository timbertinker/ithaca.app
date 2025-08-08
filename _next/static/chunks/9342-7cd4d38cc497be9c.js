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
      (t._sentryDebugIds[e] = "680460f4-3e2e-4c0a-9ea7-661d34b7f7c2"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-680460f4-3e2e-4c0a-9ea7-661d34b7f7c2"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9342],
  {
    95270: function (t, e, r) {
      r.d(e, {
        r: function () {
          return I;
        },
      });
      var n = r(88819),
        i = r(36117);
      class a extends i.G {
        constructor({ data: t }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(t)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class o extends i.G {
        constructor({ reason: t }) {
          super(`ENS NFT avatar URI is invalid. ${t}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends i.G {
        constructor({ uri: t }) {
          super(
            `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class u extends i.G {
        constructor({ namespace: t }) {
          super(
            `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let l =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        c =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        f = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        d = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(t) {
        try {
          let e = await fetch(t, { method: "HEAD" });
          if (200 === e.status) {
            let t = e.headers.get("content-type");
            return t?.startsWith("image/");
          }
          return !1;
        } catch (e) {
          if (
            ("object" == typeof e && void 0 !== e.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((e) => {
            let r = new Image();
            (r.onload = () => {
              e(!0);
            }),
              (r.onerror = () => {
                e(!1);
              }),
              (r.src = t);
          });
        }
      }
      function p(t, e) {
        return t ? (t.endsWith("/") ? t.slice(0, -1) : t) : e;
      }
      function m({ uri: t, gatewayUrls: e }) {
        let r = f.test(t);
        if (r) return { uri: t, isOnChain: !0, isEncoded: r };
        let n = p(e?.ipfs, "https://ipfs.io"),
          i = p(e?.arweave, "https://arweave.net"),
          a = t.match(l),
          {
            protocol: o,
            subpath: u,
            target: h,
            subtarget: m = "",
          } = a?.groups || {},
          y = "ipns:/" === o || "ipns/" === u,
          g = "ipfs:/" === o || "ipfs/" === u || c.test(t);
        if (t.startsWith("http") && !y && !g) {
          let r = t;
          return (
            e?.arweave && (r = t.replace(/https:\/\/arweave.net/g, e?.arweave)),
            { uri: r, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((y || g) && h)
          return {
            uri: `${n}/${y ? "ipns" : "ipfs"}/${h}${m}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === o && h)
          return { uri: `${i}/${h}${m || ""}`, isOnChain: !1, isEncoded: !1 };
        let b = t.replace(d, "");
        if (
          (b.startsWith("<svg") && (b = `data:image/svg+xml;base64,${btoa(b)}`),
          b.startsWith("data:") || b.startsWith("{"))
        )
          return { uri: b, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: t });
      }
      function y(t) {
        if (
          "object" != typeof t ||
          (!("image" in t) && !("image_url" in t) && !("image_data" in t))
        )
          throw new a({ data: t });
        return t.image || t.image_url || t.image_data;
      }
      async function g({ gatewayUrls: t, uri: e }) {
        try {
          let r = await fetch(e).then((t) => t.json());
          return await b({ gatewayUrls: t, uri: y(r) });
        } catch {
          throw new s({ uri: e });
        }
      }
      async function b({ gatewayUrls: t, uri: e }) {
        let { uri: r, isOnChain: n } = m({ uri: e, gatewayUrls: t });
        if (n || (await h(r))) return r;
        throw new s({ uri: e });
      }
      async function w(t, { nft: e }) {
        if ("erc721" === e.namespace)
          return (0, n.L)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(e.tokenID)],
          });
        if ("erc1155" === e.namespace)
          return (0, n.L)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(e.tokenID)],
          });
        throw new u({ namespace: e.namespace });
      }
      async function v(t, { gatewayUrls: e, record: r }) {
        return /eip155:/i.test(r)
          ? B(t, { gatewayUrls: e, record: r })
          : b({ uri: r, gatewayUrls: e });
      }
      async function B(t, { gatewayUrls: e, record: r }) {
        let n = (function (t) {
            let e = t;
            e.startsWith("did:nft:") &&
              (e = e.replace("did:nft:", "").replace(/_/g, "/"));
            let [r, n, i] = e.split("/"),
              [a, s] = r.split(":"),
              [u, l] = n.split(":");
            if (!a || "eip155" !== a.toLowerCase())
              throw new o({ reason: "Only EIP-155 supported" });
            if (!s) throw new o({ reason: "Chain ID not found" });
            if (!l) throw new o({ reason: "Contract address not found" });
            if (!i) throw new o({ reason: "Token ID not found" });
            if (!u) throw new o({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s),
              namespace: u.toLowerCase(),
              contractAddress: l,
              tokenID: i,
            };
          })(r),
          {
            uri: i,
            isOnChain: a,
            isEncoded: s,
          } = m({ uri: await w(t, { nft: n }), gatewayUrls: e });
        if (
          a &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return b({
            uri: y(
              JSON.parse(
                s ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: e,
          });
        let u = n.tokenID;
        return (
          "erc1155" === n.namespace &&
            (u = u.replace("0x", "").padStart(64, "0")),
          g({ gatewayUrls: e, uri: i.replace(/(?:0x)?{id}/, u) })
        );
      }
      var E = r(93714),
        x = r(16171);
      async function I(
        t,
        {
          blockNumber: e,
          blockTag: r,
          assetGatewayUrls: n,
          name: i,
          gatewayUrls: a,
          strict: o,
          universalResolverAddress: s,
        }
      ) {
        let u = await (0, E.s)(
          t,
          x.g,
          "getEnsText"
        )({
          blockNumber: e,
          blockTag: r,
          key: "avatar",
          name: i,
          universalResolverAddress: s,
          gatewayUrls: a,
          strict: o,
        });
        if (!u) return null;
        try {
          return await v(t, { record: u, gatewayUrls: n });
        } catch {
          return null;
        }
      }
    },
    95602: function (t, e, r) {
      r.d(e, {
        w: function () {
          return c;
        },
      });
      var n = r(14504),
        i = r(47864),
        a = r(92106),
        o = r(74526),
        s = r(48063),
        u = r(93714),
        l = r(88819);
      async function c(
        t,
        {
          address: e,
          blockNumber: r,
          blockTag: c,
          gatewayUrls: f,
          strict: d,
          universalResolverAddress: h,
        }
      ) {
        let p = h;
        if (!p) {
          if (!t.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, i.L)({
            blockNumber: r,
            chain: t.chain,
            contract: "ensUniversalResolver",
          });
        }
        let m = `${e.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: p,
              abi: n.du,
              functionName: "reverse",
              args: [(0, a.NC)((0, s.T)(m))],
              blockNumber: r,
              blockTag: c,
            },
            o = (0, u.s)(t, l.L, "readContract"),
            [d, h] = f ? await o({ ...i, args: [...i.args, f] }) : await o(i);
          if (e.toLowerCase() !== h.toLowerCase()) return null;
          return d;
        } catch (t) {
          if (d) throw t;
          if ((0, o.c)(t, "reverse")) return null;
          throw t;
        }
      }
    },
    16171: function (t, e, r) {
      r.d(e, {
        g: function () {
          return h;
        },
      });
      var n = r(14504),
        i = r(7210),
        a = r(55629),
        o = r(47864),
        s = r(92106),
        u = r(74526),
        l = r(75719),
        c = r(48063),
        f = r(93714),
        d = r(88819);
      async function h(
        t,
        {
          blockNumber: e,
          blockTag: r,
          name: h,
          key: p,
          gatewayUrls: m,
          strict: y,
          universalResolverAddress: g,
        }
      ) {
        let b = g;
        if (!b) {
          if (!t.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          b = (0, o.L)({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let o = {
              address: b,
              abi: n.k3,
              functionName: "resolve",
              args: [
                (0, s.NC)((0, c.T)(h)),
                (0, a.R)({
                  abi: n.nZ,
                  functionName: "text",
                  args: [(0, l.V)(h), p],
                }),
              ],
              blockNumber: e,
              blockTag: r,
            },
            u = (0, f.s)(t, d.L, "readContract"),
            y = m ? await u({ ...o, args: [...o.args, m] }) : await u(o);
          if ("0x" === y[0]) return null;
          let g = (0, i.k)({ abi: n.nZ, functionName: "text", data: y[0] });
          return "" === g ? null : g;
        } catch (t) {
          if (y) throw t;
          if ((0, u.c)(t, "resolve")) return null;
          throw t;
        }
      }
    },
    43861: function (t, e, r) {
      r.d(e, {
        C: function () {
          return l;
        },
        X: function () {
          return u;
        },
      });
      var n = r(15371),
        i = r(93714),
        a = r(79379),
        o = r(75016),
        s = r(24453);
      async function u(t, e) {
        return l(t, e);
      }
      async function l(t, e) {
        let {
            block: r,
            chain: u = t.chain,
            request: l,
            type: c = "eip1559",
          } = e || {},
          f = await (async () =>
            "function" == typeof u?.fees?.baseFeeMultiplier
              ? u.fees.baseFeeMultiplier({ block: r, client: t, request: l })
              : u?.fees?.baseFeeMultiplier ?? 1.2)();
        if (f < 1) throw new n.Fz();
        let d = 10 ** (f.toString().split(".")[1]?.length ?? 0),
          h = (t) => (t * BigInt(Math.ceil(f * d))) / BigInt(d),
          p = r || (await (0, i.s)(t, o.Q, "getBlock")({}));
        if ("function" == typeof u?.fees?.estimateFeesPerGas) {
          let e = await u.fees.estimateFeesPerGas({
            block: r,
            client: t,
            multiply: h,
            request: l,
            type: c,
          });
          if (null !== e) return e;
        }
        if ("eip1559" === c) {
          if ("bigint" != typeof p.baseFeePerGas) throw new n.e5();
          let e =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await (0, a.h)(t, { block: p, chain: u, request: l }),
            r = h(p.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? r + e,
            maxPriorityFeePerGas: e,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? h(await (0, i.s)(t, s.o, "getGasPrice")({})),
        };
      }
    },
    81841: function (t, e, r) {
      r.d(e, {
        Q: function () {
          return w;
        },
      });
      var n = r(14503),
        i = r(36117),
        a = r(68064),
        o = r(92106),
        s = r(39625),
        u = r(67795),
        l = r(33639);
      class c extends i.G {
        constructor(
          t,
          {
            account: e,
            docsPath: r,
            chain: n,
            data: i,
            gas: a,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: f,
            nonce: d,
            to: h,
            value: p,
          }
        ) {
          super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [
              ...(t.metaMessages ? [...t.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, l.xr)({
                from: e?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, s.d)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: a,
                gasPrice: void 0 !== o && `${(0, u.o)(o)} gwei`,
                maxFeePerGas: void 0 !== c && `${(0, u.o)(c)} gwei`,
                maxPriorityFeePerGas: void 0 !== f && `${(0, u.o)(f)} gwei`,
                nonce: d,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = t);
        }
      }
      var f = r(26445),
        d = r(87469),
        h = r(61163),
        p = r(74688),
        m = r(50150),
        y = r(47531),
        g = r(37397),
        b = r(88930);
      async function w(t, e) {
        let r = e.account ?? t.account,
          s = r ? (0, n.T)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: l,
              blobVersionedHashes: c,
              blockNumber: f,
              blockTag: d,
              data: w,
              gas: v,
              gasPrice: B,
              maxFeePerBlobGas: E,
              maxFeePerGas: x,
              maxPriorityFeePerGas: I,
              nonce: P,
              value: N,
              stateOverride: k,
              ...A
            } = await (0, g.Z)(t, {
              ...e,
              parameters:
                s?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            F = (f ? (0, o.eC)(f) : void 0) || d,
            G = (0, m.mF)(k),
            S = await (async () =>
              A.to
                ? A.to
                : n && n.length > 0
                ? await (0, a.z)({ authorization: n[0] }).catch(() => {
                    throw new i.G(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, y.F)(e);
          let C = t.chain?.formatters?.transactionRequest?.format,
            q = (C || p.tG)({
              ...(0, h.K)(A, { format: C }),
              from: s?.address,
              accessList: r,
              authorizationList: n,
              blobs: l,
              blobVersionedHashes: c,
              data: w,
              gas: v,
              gasPrice: B,
              maxFeePerBlobGas: E,
              maxFeePerGas: x,
              maxPriorityFeePerGas: I,
              nonce: P,
              to: S,
              value: N,
            });
          function u(e) {
            let { block: r, request: n, rpcStateOverride: i } = e;
            return t.request({
              method: "eth_estimateGas",
              params: i ? [n, r ?? "latest", i] : r ? [n, r] : [n],
            });
          }
          let T = BigInt(
            await u({ block: F, request: q, rpcStateOverride: G })
          );
          if (n) {
            let e = await (0, b.s)(t, { address: q.from }),
              r = await Promise.all(
                n.map(async (t) => {
                  let { contractAddress: r } = t,
                    n = await u({
                      block: F,
                      request: {
                        authorizationList: void 0,
                        data: w,
                        from: s?.address,
                        to: r,
                        value: (0, o.eC)(e),
                      },
                      rpcStateOverride: G,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            T += r.reduce((t, e) => t + e, 0n);
          }
          return T;
        } catch (r) {
          throw (function (t, { docsPath: e, ...r }) {
            return new c(
              (() => {
                let e = (0, d.k)(t, r);
                return e instanceof f.cj ? t : e;
              })(),
              { docsPath: e, ...r }
            );
          })(r, { ...e, account: s, chain: t.chain });
        }
      }
    },
    79379: function (t, e, r) {
      r.d(e, {
        _: function () {
          return u;
        },
        h: function () {
          return l;
        },
      });
      var n = r(15371),
        i = r(95946),
        a = r(93714),
        o = r(75016),
        s = r(24453);
      async function u(t, e) {
        return l(t, e);
      }
      async function l(t, e) {
        let { block: r, chain: u = t.chain, request: l } = e || {};
        try {
          let e = u?.fees?.maxPriorityFeePerGas ?? u?.fees?.defaultPriorityFee;
          if ("function" == typeof e) {
            let n = r || (await (0, a.s)(t, o.Q, "getBlock")({})),
              i = await e({ block: n, client: t, request: l });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== e) return e;
          let n = await t.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.y_)(n);
        } catch {
          let [e, i] = await Promise.all([
            r ? Promise.resolve(r) : (0, a.s)(t, o.Q, "getBlock")({}),
            (0, a.s)(t, s.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof e.baseFeePerGas) throw new n.e5();
          let u = i - e.baseFeePerGas;
          if (u < 0n) return 0n;
          return u;
        }
      }
    },
    75016: function (t, e, r) {
      r.d(e, {
        Q: function () {
          return o;
        },
      });
      var n = r(79814),
        i = r(92106),
        a = r(43310);
      async function o(
        t,
        {
          blockHash: e,
          blockNumber: r,
          blockTag: o,
          includeTransactions: s,
        } = {}
      ) {
        let u = s ?? !1,
          l = void 0 !== r ? (0, i.eC)(r) : void 0,
          c = null;
        if (
          !(c = e
            ? await t.request(
                { method: "eth_getBlockByHash", params: [e, u] },
                { dedupe: !0 }
              )
            : await t.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [l || (o ?? "latest"), u],
                },
                { dedupe: !!l }
              ))
        )
          throw new n.f({ blockHash: e, blockNumber: r });
        return (t.chain?.formatters?.block?.format || a.Z)(c);
      }
    },
    97712: function (t, e, r) {
      r.d(e, {
        z: function () {
          return s;
        },
      });
      let n = new Map(),
        i = new Map();
      async function a(
        t,
        { cacheKey: e, cacheTime: r = Number.POSITIVE_INFINITY }
      ) {
        let a = (function (t) {
            let e = (t, e) => ({
                clear: () => e.delete(t),
                get: () => e.get(t),
                set: (r) => e.set(t, r),
              }),
              r = e(t, n),
              a = e(t, i);
            return {
              clear: () => {
                r.clear(), a.clear();
              },
              promise: r,
              response: a,
            };
          })(e),
          o = a.response.get();
        if (o && r > 0 && new Date().getTime() - o.created.getTime() < r)
          return o.data;
        let s = a.promise.get();
        s || ((s = t()), a.promise.set(s));
        try {
          let t = await s;
          return a.response.set({ created: new Date(), data: t }), t;
        } finally {
          a.promise.clear();
        }
      }
      let o = (t) => `blockNumber.${t}`;
      async function s(t, { cacheTime: e = t.cacheTime } = {}) {
        return BigInt(
          await a(() => t.request({ method: "eth_blockNumber" }), {
            cacheKey: o(t.uid),
            cacheTime: e,
          })
        );
      }
    },
    79524: function (t, e, r) {
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(95946);
      async function i(t) {
        let e = await t.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ly)(e);
      }
    },
    24453: function (t, e, r) {
      r.d(e, {
        o: function () {
          return n;
        },
      });
      async function n(t) {
        return BigInt(await t.request({ method: "eth_gasPrice" }));
      }
    },
    86162: function (t, e, r) {
      r.d(e, {
        K: function () {
          return a;
        },
      });
      var n = r(95946),
        i = r(92106);
      async function a(
        t,
        { address: e, blockTag: r = "latest", blockNumber: a }
      ) {
        let o = await t.request(
          {
            method: "eth_getTransactionCount",
            params: [e, a ? (0, i.eC)(a) : r],
          },
          { dedupe: !!a }
        );
        return (0, n.ly)(o);
      }
    },
    66432: function (t, e, r) {
      r.d(e, {
        a: function () {
          return l;
        },
      });
      var n = r(14503),
        i = r(7210),
        a = r(55629),
        o = r(72365),
        s = r(93714),
        u = r(61376);
      async function l(t, e) {
        let {
            abi: r,
            address: l,
            args: c,
            dataSuffix: f,
            functionName: d,
            ...h
          } = e,
          p = h.account ? (0, n.T)(h.account) : t.account,
          m = (0, a.R)({ abi: r, args: c, functionName: d });
        try {
          let { data: n } = await (0, s.s)(
              t,
              u.R,
              "call"
            )({
              batch: !1,
              data: `${m}${f ? f.replace("0x", "") : ""}`,
              to: l,
              ...h,
              account: p,
            }),
            a = (0, i.k)({ abi: r, args: c, functionName: d, data: n || "0x" }),
            o = r.filter((t) => "name" in t && t.name === e.functionName);
          return {
            result: a,
            request: {
              abi: o,
              address: l,
              args: c,
              dataSuffix: f,
              functionName: d,
              ...h,
              account: p,
            },
          };
        } catch (t) {
          throw (0, o.S)(t, {
            abi: r,
            address: l,
            args: c,
            docsPath: "/docs/contract/simulateContract",
            functionName: d,
            sender: p?.address,
          });
        }
      }
    },
    65185: function (t, e, r) {
      r.d(e, {
        q: function () {
          return l;
        },
      });
      var n = r(95946),
        i = r(93714),
        a = r(22514),
        o = r(23),
        s = r(96070),
        u = r(97712);
      function l(
        t,
        {
          emitOnBegin: e = !1,
          emitMissed: r = !1,
          onBlockNumber: l,
          onError: c,
          poll: f,
          pollingInterval: d = t.pollingInterval,
        }
      ) {
        let h;
        return (
          void 0 !== f
            ? f
            : "webSocket" !== t.transport.type &&
              ("fallback" !== t.transport.type ||
                "webSocket" !== t.transport.transports[0].config.type)
        )
          ? (() => {
              let n = (0, s.P)(["watchBlockNumber", t.uid, e, r, d]);
              return (0, a.N7)(n, { onBlockNumber: l, onError: c }, (n) =>
                (0, o.$)(
                  async () => {
                    try {
                      let e = await (0, i.s)(
                        t,
                        u.z,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (h) {
                        if (e === h) return;
                        if (e - h > 1 && r)
                          for (let t = h + 1n; t < e; t++)
                            n.onBlockNumber(t, h), (h = t);
                      }
                      (!h || e > h) && (n.onBlockNumber(e, h), (h = e));
                    } catch (t) {
                      n.onError?.(t);
                    }
                  },
                  { emitOnBegin: e, interval: d }
                )
              );
            })()
          : (() => {
              let i = (0, s.P)(["watchBlockNumber", t.uid, e, r]);
              return (0, a.N7)(i, { onBlockNumber: l, onError: c }, (e) => {
                let r = !0,
                  i = () => (r = !1);
                return (
                  (async () => {
                    try {
                      let a = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) => "webSocket" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        { unsubscribe: o } = await a.subscribe({
                          params: ["newHeads"],
                          onData(t) {
                            if (!r) return;
                            let i = (0, n.y_)(t.result?.number);
                            e.onBlockNumber(i, h), (h = i);
                          },
                          onError(t) {
                            e.onError?.(t);
                          },
                        });
                      (i = o), r || i();
                    } catch (t) {
                      c?.(t);
                    }
                  })(),
                  () => i()
                );
              });
            })();
      }
    },
    37397: function (t, e, r) {
      r.d(e, {
        Q: function () {
          return g;
        },
        Z: function () {
          return b;
        },
      });
      var n = r(14503),
        i = r(43861),
        a = r(81841),
        o = r(75016),
        s = r(86162),
        u = r(15371),
        l = r(60169),
        c = r(4499),
        f = r(34603),
        d = r(64446),
        h = r(93714),
        p = r(47531),
        m = r(82994),
        y = r(79524);
      let g = [
        "blobVersionedHashes",
        "chainId",
        "fees",
        "gas",
        "nonce",
        "type",
      ];
      async function b(t, e) {
        let r, b;
        let {
            account: w = t.account,
            blobs: v,
            chain: B,
            gas: E,
            kzg: x,
            nonce: I,
            nonceManager: P,
            parameters: N = g,
            type: k,
          } = e,
          A = w ? (0, n.T)(w) : void 0,
          F = { ...e, ...(A ? { from: A?.address } : {}) };
        async function G() {
          return (
            r ||
            (r = await (0, h.s)(t, o.Q, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function S() {
          return (
            b ||
            (B
              ? B.id
              : void 0 !== e.chainId
              ? e.chainId
              : (b = await (0, h.s)(t, y.L, "getChainId")({})))
          );
        }
        if (
          (N.includes("blobVersionedHashes") || N.includes("sidecars")) &&
          v &&
          x
        ) {
          let t = (0, l.P)({ blobs: v, kzg: x });
          if (N.includes("blobVersionedHashes")) {
            let e = (0, f.C)({ commitments: t, to: "hex" });
            F.blobVersionedHashes = e;
          }
          if (N.includes("sidecars")) {
            let e = (0, c.y)({ blobs: v, commitments: t, kzg: x }),
              r = (0, d.j)({ blobs: v, commitments: t, proofs: e, to: "hex" });
            F.sidecars = r;
          }
        }
        if (
          (N.includes("chainId") && (F.chainId = await S()),
          N.includes("nonce") && void 0 === I && A)
        ) {
          if (P) {
            let e = await S();
            F.nonce = await P.consume({
              address: A.address,
              chainId: e,
              client: t,
            });
          } else
            F.nonce = await (0, h.s)(
              t,
              s.K,
              "getTransactionCount"
            )({ address: A.address, blockTag: "pending" });
        }
        if ((N.includes("fees") || N.includes("type")) && void 0 === k)
          try {
            F.type = (0, m.l)(F);
          } catch {
            let t = await G();
            F.type = "bigint" == typeof t?.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (N.includes("fees")) {
          if ("legacy" !== F.type && "eip2930" !== F.type) {
            if (
              void 0 === F.maxFeePerGas ||
              void 0 === F.maxPriorityFeePerGas
            ) {
              let r = await G(),
                { maxFeePerGas: n, maxPriorityFeePerGas: a } = await (0, i.C)(
                  t,
                  { block: r, chain: B, request: F }
                );
              if (
                void 0 === e.maxPriorityFeePerGas &&
                e.maxFeePerGas &&
                e.maxFeePerGas < a
              )
                throw new u.ld({ maxPriorityFeePerGas: a });
              (F.maxPriorityFeePerGas = a), (F.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
              throw new u.e5();
            let r = await G(),
              { gasPrice: n } = await (0, i.C)(t, {
                block: r,
                chain: B,
                request: F,
                type: "legacy",
              });
            F.gasPrice = n;
          }
        }
        return (
          N.includes("gas") &&
            void 0 === E &&
            (F.gas = await (0, h.s)(
              t,
              a.Q,
              "estimateGas"
            )({
              ...F,
              account: A ? { address: A.address, type: "json-rpc" } : void 0,
            })),
          (0, p.F)(F),
          delete F.parameters,
          F
        );
      }
    },
    99238: function (t, e, r) {
      r.d(e, {
        p: function () {
          return n;
        },
      });
      async function n(t, { serializedTransaction: e }) {
        return t.request(
          { method: "eth_sendRawTransaction", params: [e] },
          { retryCount: 0 }
        );
      }
    },
    94898: function (t, e, r) {
      r.d(e, {
        e: function () {
          return a;
        },
      });
      var n = r(14503),
        i = r(75632);
      function a(t) {
        let {
            batch: e,
            cacheTime: r = t.pollingInterval ?? 4e3,
            ccipRead: a,
            key: o = "base",
            name: s = "Base Client",
            pollingInterval: u = 4e3,
            type: l = "base",
          } = t,
          c = t.chain,
          f = t.account ? (0, n.T)(t.account) : void 0,
          {
            config: d,
            request: h,
            value: p,
          } = t.transport({ chain: c, pollingInterval: u }),
          m = {
            account: f,
            batch: e,
            cacheTime: r,
            ccipRead: a,
            chain: c,
            key: o,
            name: s,
            pollingInterval: u,
            request: h,
            transport: { ...d, ...p },
            type: l,
            uid: (0, i.h)(),
          };
        return Object.assign(m, {
          extend: (function t(e) {
            return (r) => {
              let n = r(e);
              for (let t in m) delete n[t];
              let i = { ...e, ...n };
              return Object.assign(i, { extend: t(i) });
            };
          })(m),
        });
      }
    },
    80284: function (t, e, r) {
      r.d(e, {
        I: function () {
          return t4;
        },
      });
      var n = r(14504),
        i = r(7210),
        a = r(55629),
        o = r(47864),
        s = r(61836),
        u = r(92106),
        l = r(74526),
        c = r(75719),
        f = r(48063),
        d = r(93714),
        h = r(88819);
      async function p(
        t,
        {
          blockNumber: e,
          blockTag: r,
          coinType: p,
          name: m,
          gatewayUrls: y,
          strict: g,
          universalResolverAddress: b,
        }
      ) {
        let w = b;
        if (!w) {
          if (!t.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          w = (0, o.L)({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let o = (0, a.R)({
              abi: n.X$,
              functionName: "addr",
              ...(null != p
                ? { args: [(0, c.V)(m), BigInt(p)] }
                : { args: [(0, c.V)(m)] }),
            }),
            l = {
              address: w,
              abi: n.k3,
              functionName: "resolve",
              args: [(0, u.NC)((0, f.T)(m)), o],
              blockNumber: e,
              blockTag: r,
            },
            g = (0, d.s)(t, h.L, "readContract"),
            b = y ? await g({ ...l, args: [...l.args, y] }) : await g(l);
          if ("0x" === b[0]) return null;
          let v = (0, i.k)({
            abi: n.X$,
            args: null != p ? [(0, c.V)(m), BigInt(p)] : void 0,
            functionName: "addr",
            data: b[0],
          });
          if ("0x" === v || "0x00" === (0, s.f)(v)) return null;
          return v;
        } catch (t) {
          if (g) throw t;
          if ((0, l.c)(t, "resolve")) return null;
          throw t;
        }
      }
      var m = r(95270),
        y = r(95602);
      async function g(
        t,
        { blockNumber: e, blockTag: r, name: n, universalResolverAddress: i }
      ) {
        let a = i;
        if (!a) {
          if (!t.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          a = (0, o.L)({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [s] = await (0, d.s)(
          t,
          h.L,
          "readContract"
        )({
          address: a,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, u.NC)((0, f.T)(n))],
          blockNumber: e,
          blockTag: r,
        });
        return s;
      }
      var b = r(16171),
        w = r(61376);
      function v(t, { method: e }) {
        let r = {};
        return (
          "fallback" === t.transport.type &&
            t.transport.onResponse?.(
              ({ method: t, response: n, status: i, transport: a }) => {
                "success" === i && e === t && (r[n] = a.request);
              }
            ),
          (e) => r[e] || t.request
        );
      }
      async function B(t) {
        let e = v(t, { method: "eth_newBlockFilter" }),
          r = await t.request({ method: "eth_newBlockFilter" });
        return { id: r, request: e(r), type: "block" };
      }
      var E = r(57412),
        x = r(36117);
      class I extends x.G {
        constructor(t) {
          super(`Filter type "${t}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var P = r(11187),
        N = r(91734),
        k = r(96005),
        A = r(45444),
        F = r(80522),
        G = r(40840);
      let S = "/docs/contract/encodeEventTopics";
      function C(t) {
        let { abi: e, eventName: r, args: n } = t,
          i = e[0];
        if (r) {
          let t = (0, G.mE)({ abi: e, name: r });
          if (!t) throw new E.mv(r, { docsPath: S });
          i = t;
        }
        if ("event" !== i.type) throw new E.mv(void 0, { docsPath: S });
        let a = (0, F.t)(i),
          o = (0, k.n)(a),
          s = [];
        if (n && "inputs" in i) {
          let t = i.inputs?.filter((t) => "indexed" in t && t.indexed),
            e = Array.isArray(n)
              ? n
              : Object.values(n).length > 0
              ? t?.map((t) => n[t.name]) ?? []
              : [];
          e.length > 0 &&
            (s =
              t?.map((t, r) =>
                Array.isArray(e[r])
                  ? e[r].map((n, i) => q({ param: t, value: e[r][i] }))
                  : e[r]
                  ? q({ param: t, value: e[r] })
                  : null
              ) ?? []);
        }
        return [o, ...s];
      }
      function q({ param: t, value: e }) {
        if ("string" === t.type || "bytes" === t.type)
          return (0, N.w)((0, P.O0)(e));
        if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
          throw new I(t.type);
        return (0, A.E)([t], [e]);
      }
      async function T(t, e) {
        let {
            address: r,
            abi: n,
            args: i,
            eventName: a,
            fromBlock: o,
            strict: s,
            toBlock: l,
          } = e,
          c = v(t, { method: "eth_newFilter" }),
          f = a ? C({ abi: n, args: i, eventName: a }) : void 0,
          d = await t.request({
            method: "eth_newFilter",
            params: [
              {
                address: r,
                fromBlock: "bigint" == typeof o ? (0, u.eC)(o) : o,
                toBlock: "bigint" == typeof l ? (0, u.eC)(l) : l,
                topics: f,
              },
            ],
          });
        return {
          abi: n,
          args: i,
          eventName: a,
          id: d,
          request: c(d),
          strict: !!s,
          type: "event",
        };
      }
      async function R(
        t,
        {
          address: e,
          args: r,
          event: n,
          events: i,
          fromBlock: a,
          strict: o,
          toBlock: s,
        } = {}
      ) {
        let l = i ?? (n ? [n] : void 0),
          c = v(t, { method: "eth_newFilter" }),
          f = [];
        l &&
          ((f = [
            l.flatMap((t) => C({ abi: [t], eventName: t.name, args: r })),
          ]),
          n && (f = f[0]));
        let d = await t.request({
          method: "eth_newFilter",
          params: [
            {
              address: e,
              fromBlock: "bigint" == typeof a ? (0, u.eC)(a) : a,
              toBlock: "bigint" == typeof s ? (0, u.eC)(s) : s,
              ...(f.length ? { topics: f } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: a,
          id: d,
          request: c(d),
          strict: !!o,
          toBlock: s,
          type: "event",
        };
      }
      async function $(t) {
        let e = v(t, { method: "eth_newPendingTransactionFilter" }),
          r = await t.request({ method: "eth_newPendingTransactionFilter" });
        return { id: r, request: e(r), type: "transaction" };
      }
      var L = r(14503),
        O = r(72365),
        _ = r(81841);
      async function U(t, e) {
        let { abi: r, address: n, args: i, functionName: o, ...s } = e,
          u = (0, a.R)({ abi: r, args: i, functionName: o });
        try {
          return await (0, d.s)(
            t,
            _.Q,
            "estimateGas"
          )({ data: u, to: n, ...s });
        } catch (e) {
          let t = s.account ? (0, L.T)(s.account) : void 0;
          throw (0, O.S)(e, {
            abi: r,
            address: n,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: o,
            sender: t?.address,
          });
        }
      }
      var z = r(43861),
        H = r(79379),
        D = r(88930);
      async function M(t) {
        return BigInt(await t.request({ method: "eth_blobBaseFee" }));
      }
      var Z = r(75016),
        j = r(97712),
        V = r(95946);
      async function K(
        t,
        { blockHash: e, blockNumber: r, blockTag: n = "latest" } = {}
      ) {
        let i;
        let a = void 0 !== r ? (0, u.eC)(r) : void 0;
        return (
          (i = e
            ? await t.request(
                { method: "eth_getBlockTransactionCountByHash", params: [e] },
                { dedupe: !0 }
              )
            : await t.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [a || n],
                },
                { dedupe: !!a }
              )),
          (0, V.ly)(i)
        );
      }
      var W = r(79524);
      async function Q(
        t,
        { address: e, blockNumber: r, blockTag: n = "latest" }
      ) {
        let i = void 0 !== r ? (0, u.eC)(r) : void 0,
          a = await t.request(
            { method: "eth_getCode", params: [e, i || n] },
            { dedupe: !!i }
          );
        if ("0x" !== a) return a;
      }
      var Y = r(61228),
        X = r(39135),
        J = r(66238),
        tt = r(78398);
      let te = "/docs/contract/decodeEventLog";
      function tr(t) {
        let { abi: e, data: r, strict: n, topics: i } = t,
          a = n ?? !0,
          [o, ...s] = i;
        if (!o) throw new E.FM({ docsPath: te });
        let u =
          1 === e.length
            ? e[0]
            : e.find((t) => "event" === t.type && o === (0, k.n)((0, F.t)(t)));
        if (!(u && "name" in u) || "event" !== u.type)
          throw new E.lC(o, { docsPath: te });
        let { name: l, inputs: c } = u,
          f = c?.some((t) => !("name" in t && t.name)),
          d = f ? [] : {},
          h = c.filter((t) => "indexed" in t && t.indexed);
        for (let t = 0; t < h.length; t++) {
          let e = h[t],
            r = s[t];
          if (!r) throw new E.Gy({ abiItem: u, param: e });
          d[f ? t : e.name || t] = (function ({ param: t, value: e }) {
            return "string" === t.type ||
              "bytes" === t.type ||
              "tuple" === t.type ||
              t.type.match(/^(.*)\[(\d+)?\]$/)
              ? e
              : ((0, tt.r)([t], e) || [])[0];
          })({ param: e, value: r });
        }
        let p = c.filter((t) => !("indexed" in t && t.indexed));
        if (p.length > 0) {
          if (r && "0x" !== r)
            try {
              let t = (0, tt.r)(p, r);
              if (t) {
                if (f) d = [...d, ...t];
                else for (let e = 0; e < p.length; e++) d[p[e].name] = t[e];
              }
            } catch (t) {
              if (a) {
                if (t instanceof E.xB || t instanceof J.lQ)
                  throw new E.SM({
                    abiItem: u,
                    data: r,
                    params: p,
                    size: (0, X.d)(r),
                  });
                throw t;
              }
            }
          else if (a)
            throw new E.SM({ abiItem: u, data: "0x", params: p, size: 0 });
        }
        return { eventName: l, args: Object.values(d).length > 0 ? d : void 0 };
      }
      function tn(t) {
        let { abi: e, args: r, logs: n, strict: i = !0 } = t,
          a = (() => {
            if (t.eventName)
              return Array.isArray(t.eventName) ? t.eventName : [t.eventName];
          })();
        return n
          .map((t) => {
            try {
              let n = e.find(
                (e) => "event" === e.type && t.topics[0] === (0, k.n)(e)
              );
              if (!n) return null;
              let o = tr({ ...t, abi: [n], strict: i });
              if (
                (a && !a.includes(o.eventName)) ||
                !(function (t) {
                  let { args: e, inputs: r, matchArgs: n } = t;
                  if (!n) return !0;
                  if (!e) return !1;
                  function i(t, e, r) {
                    try {
                      if ("address" === t.type) return (0, Y.E)(e, r);
                      if ("string" === t.type || "bytes" === t.type)
                        return (0, N.w)((0, P.O0)(e)) === r;
                      return e === r;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(e) && Array.isArray(n)
                    ? n.every((t, n) => {
                        if (null == t) return !0;
                        let a = r[n];
                        return (
                          !!a &&
                          (Array.isArray(t) ? t : [t]).some((t) =>
                            i(a, t, e[n])
                          )
                        );
                      })
                    : !(
                        "object" != typeof e ||
                        Array.isArray(e) ||
                        "object" != typeof n ||
                        Array.isArray(n)
                      ) &&
                        Object.entries(n).every(([t, n]) => {
                          if (null == n) return !0;
                          let a = r.find((e) => e.name === t);
                          return (
                            !!a &&
                            (Array.isArray(n) ? n : [n]).some((r) =>
                              i(a, r, e[t])
                            )
                          );
                        });
                })({ args: o.args, inputs: n.inputs, matchArgs: r })
              )
                return null;
              return { ...o, ...t };
            } catch (n) {
              let e, r;
              if (n instanceof E.lC) return null;
              if (n instanceof E.SM || n instanceof E.Gy) {
                if (i) return null;
                (e = n.abiItem.name),
                  (r = n.abiItem.inputs?.some((t) => !("name" in t && t.name)));
              }
              return { ...t, args: r ? [] : {}, eventName: e };
            }
          })
          .filter(Boolean);
      }
      var ti = r(53992);
      async function ta(
        t,
        {
          address: e,
          blockHash: r,
          fromBlock: n,
          toBlock: i,
          event: a,
          events: o,
          args: s,
          strict: l,
        } = {}
      ) {
        let c = o ?? (a ? [a] : void 0),
          f = [];
        c &&
          ((f = [
            c.flatMap((t) =>
              C({ abi: [t], eventName: t.name, args: o ? void 0 : s })
            ),
          ]),
          a && (f = f[0]));
        let d = (
          r
            ? await t.request({
                method: "eth_getLogs",
                params: [{ address: e, topics: f, blockHash: r }],
              })
            : await t.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: e,
                    topics: f,
                    fromBlock: "bigint" == typeof n ? (0, u.eC)(n) : n,
                    toBlock: "bigint" == typeof i ? (0, u.eC)(i) : i,
                  },
                ],
              })
        ).map((t) => (0, ti.U)(t));
        return c ? tn({ abi: c, args: s, logs: d, strict: l ?? !1 }) : d;
      }
      async function to(t, e) {
        let {
            abi: r,
            address: n,
            args: i,
            blockHash: a,
            eventName: o,
            fromBlock: s,
            toBlock: u,
            strict: l,
          } = e,
          c = o ? (0, G.mE)({ abi: r, name: o }) : void 0,
          f = c ? void 0 : r.filter((t) => "event" === t.type);
        return (0, d.s)(
          t,
          ta,
          "getLogs"
        )({
          address: n,
          args: i,
          blockHash: a,
          event: c,
          events: f,
          fromBlock: s,
          toBlock: u,
          strict: l,
        });
      }
      class ts extends x.G {
        constructor({ address: t }) {
          super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${t}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function tu(t, e) {
        let { address: r, factory: n, factoryData: i } = e;
        try {
          let [e, a, o, s, u, l, c] = await (0, d.s)(
            t,
            h.L,
            "readContract"
          )({
            abi: tl,
            address: r,
            functionName: "eip712Domain",
            factory: n,
            factoryData: i,
          });
          return {
            domain: {
              name: a,
              version: o,
              chainId: Number(s),
              verifyingContract: u,
              salt: l,
            },
            extensions: c,
            fields: e,
          };
        } catch (t) {
          if (
            "ContractFunctionExecutionError" === t.name &&
            "ContractFunctionZeroDataError" === t.cause.name
          )
            throw new ts({ address: r });
          throw t;
        }
      }
      let tl = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function tc(
        t,
        {
          blockCount: e,
          blockNumber: r,
          blockTag: n = "latest",
          rewardPercentiles: i,
        }
      ) {
        var a;
        let o = r ? (0, u.eC)(r) : void 0;
        return {
          baseFeePerGas: (a = await t.request(
            { method: "eth_feeHistory", params: [(0, u.eC)(e), o || n, i] },
            { dedupe: !!o }
          )).baseFeePerGas.map((t) => BigInt(t)),
          gasUsedRatio: a.gasUsedRatio,
          oldestBlock: BigInt(a.oldestBlock),
          reward: a.reward?.map((t) => t.map((t) => BigInt(t))),
        };
      }
      async function tf(t, { filter: e }) {
        let r = "strict" in e && e.strict,
          n = await e.request({
            method: "eth_getFilterChanges",
            params: [e.id],
          });
        if ("string" == typeof n[0]) return n;
        let i = n.map((t) => (0, ti.U)(t));
        return "abi" in e && e.abi ? tn({ abi: e.abi, logs: i, strict: r }) : i;
      }
      async function td(t, { filter: e }) {
        let r = e.strict ?? !1,
          n = (
            await e.request({ method: "eth_getFilterLogs", params: [e.id] })
          ).map((t) => (0, ti.U)(t));
        return e.abi ? tn({ abi: e.abi, logs: n, strict: r }) : n;
      }
      var th = r(24453);
      async function tp(
        t,
        { address: e, blockNumber: r, blockTag: n, storageKeys: i }
      ) {
        var a;
        let o = void 0 !== r ? (0, u.eC)(r) : void 0;
        return {
          ...(a = await t.request({
            method: "eth_getProof",
            params: [e, i, o || (n ?? "latest")],
          })),
          balance: a.balance ? BigInt(a.balance) : void 0,
          nonce: a.nonce ? (0, V.ly)(a.nonce) : void 0,
          storageProof: a.storageProof
            ? a.storageProof.map((t) => ({ ...t, value: BigInt(t.value) }))
            : void 0,
        };
      }
      async function tm(
        t,
        { address: e, blockNumber: r, blockTag: n = "latest", slot: i }
      ) {
        let a = void 0 !== r ? (0, u.eC)(r) : void 0;
        return await t.request({
          method: "eth_getStorageAt",
          params: [e, i, a || n],
        });
      }
      var ty = r(33639),
        tg = r(6073);
      async function tb(
        t,
        { blockHash: e, blockNumber: r, blockTag: n, hash: i, index: a }
      ) {
        let o = n || "latest",
          s = void 0 !== r ? (0, u.eC)(r) : void 0,
          l = null;
        if (
          (i
            ? (l = await t.request(
                { method: "eth_getTransactionByHash", params: [i] },
                { dedupe: !0 }
              ))
            : e
            ? (l = await t.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [e, (0, u.eC)(a)],
                },
                { dedupe: !0 }
              ))
            : (s || o) &&
              (l = await t.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [s || o, (0, u.eC)(a)],
                },
                { dedupe: !!s }
              )),
          !l)
        )
          throw new ty.Bh({
            blockHash: e,
            blockNumber: r,
            blockTag: o,
            hash: i,
            index: a,
          });
        return (t.chain?.formatters?.transaction?.format || tg.Tr)(l);
      }
      async function tw(t, { hash: e, transactionReceipt: r }) {
        let [n, i] = await Promise.all([
            (0, d.s)(t, j.z, "getBlockNumber")({}),
            e ? (0, d.s)(t, tb, "getTransaction")({ hash: e }) : void 0,
          ]),
          a = r?.blockNumber || i?.blockNumber;
        return a ? n - a + 1n : 0n;
      }
      var tv = r(86162),
        tB = r(30866);
      async function tE(t, { hash: e }) {
        let r = await t.request(
          { method: "eth_getTransactionReceipt", params: [e] },
          { dedupe: !0 }
        );
        if (!r) throw new ty.Yb({ hash: e });
        return (t.chain?.formatters?.transactionReceipt?.format || tB.fA)(r);
      }
      var tx = r(9884),
        tI = r(66432);
      async function tP(t, { filter: e }) {
        return e.request({ method: "eth_uninstallFilter", params: [e.id] });
      }
      var tN = r(57040);
      function tk(t, e) {
        return (0, N.w)(
          (function (t) {
            let e =
                "string" == typeof t
                  ? (0, u.$G)(t)
                  : "string" == typeof t.raw
                  ? t.raw
                  : (0, u.ci)(t.raw),
              r = (0, u.$G)(`\x19Ethereum Signed Message:
${(0, X.d)(e)}`);
            return (0, tN.zo)([r, e]);
          })(t),
          e
        );
      }
      var tA = r(18590),
        tF = r(97405),
        tG = r(30286),
        tS = r(45775),
        tC = r(1929),
        tq = r(15102);
      let tT =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var tR = r(3972),
        t$ = r(21845),
        tL = r(43147);
      async function tO(t, e) {
        let {
            address: r,
            factory: i,
            factoryData: a,
            hash: o,
            signature: s,
            ...l
          } = e,
          c = (0, tq.v)(s)
            ? s
            : "object" == typeof s && "r" in s && "s" in s
            ? (function ({ r: t, s: e, to: r = "hex", v: n, yParity: i }) {
                let a = (() => {
                    if (0 === i || 1 === i) return i;
                    if (n && (27n === n || 28n === n || n >= 35n))
                      return n % 2n === 0n ? 1 : 0;
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  o = `0x${new tL.secp256k1.Signature(
                    (0, V.y_)(t),
                    (0, V.y_)(e)
                  ).toCompactHex()}${0 === a ? "1b" : "1c"}`;
                return "hex" === r ? o : (0, P.nr)(o);
              })(s)
            : (0, u.ci)(s),
          f = await (async () =>
            i || a
              ? (0, tR.p5)(c, -32) === tT
                ? c
                : (function (t) {
                    let {
                        address: e,
                        data: r,
                        signature: n,
                        to: i = "hex",
                      } = t,
                      a = (0, tN.SM)([
                        (0, A.E)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [e, r, n]
                        ),
                        tT,
                      ]);
                    return "hex" === i ? a : (0, P.nr)(a);
                  })({ address: i, data: a, signature: c })
              : c)();
        try {
          let { data: e } = await (0, d.s)(
            t,
            w.R,
            "call"
          )({
            data: (0, tG.w)({ abi: n.$o, args: [r, o, f], bytecode: tA.ST }),
            ...l,
          });
          return (function (t, e) {
            let r = (0, tq.v)(t) ? (0, P.O0)(t) : t,
              n = (0, tq.v)("0x1") ? (0, P.O0)("0x1") : "0x1";
            return (0, tC.Wd)(r, n);
          })(e ?? "0x0", "0x1");
        } catch (t) {
          try {
            if (
              (0, Y.E)((0, tS.K)(r), await (0, t$.R)({ hash: o, signature: s }))
            )
              return !0;
          } catch {}
          if (t instanceof tF.cg) return !1;
          throw t;
        }
      }
      async function t_(
        t,
        {
          address: e,
          message: r,
          factory: n,
          factoryData: i,
          signature: a,
          ...o
        }
      ) {
        return tO(t, {
          address: e,
          factory: n,
          factoryData: i,
          hash: tk(r),
          signature: a,
          ...o,
        });
      }
      var tU = r(71352);
      function tz({ data: t, primaryType: e, types: r }) {
        let n = (function t({ data: e, primaryType: r, types: n }) {
          let i = [{ type: "bytes32" }],
            a = [
              (function ({ primaryType: t, types: e }) {
                let r = (0, u.NC)(
                  (function ({ primaryType: t, types: e }) {
                    let r = "",
                      n = (function t(
                        { primaryType: e, types: r },
                        n = new Set()
                      ) {
                        let i = e.match(/^\w*/u),
                          a = i?.[0];
                        if (n.has(a) || void 0 === r[a]) return n;
                        for (let e of (n.add(a), r[a]))
                          t({ primaryType: e.type, types: r }, n);
                        return n;
                      })({ primaryType: t, types: e });
                    for (let i of (n.delete(t), [t, ...Array.from(n).sort()]))
                      r += `${i}(${e[i]
                        .map(({ name: t, type: e }) => `${e} ${t}`)
                        .join(",")})`;
                    return r;
                  })({ primaryType: t, types: e })
                );
                return (0, N.w)(r);
              })({ primaryType: r, types: n }),
            ];
          for (let o of n[r]) {
            let [r, s] = (function e({ types: r, name: n, type: i, value: a }) {
              if (void 0 !== r[i])
                return [
                  { type: "bytes32" },
                  (0, N.w)(t({ data: a, primaryType: i, types: r })),
                ];
              if ("bytes" === i) {
                let t = a.length % 2 ? "0" : "";
                return (
                  (a = `0x${t + a.slice(2)}`),
                  [{ type: "bytes32" }, (0, N.w)(a)]
                );
              }
              if ("string" === i)
                return [{ type: "bytes32" }, (0, N.w)((0, u.NC)(a))];
              if (i.lastIndexOf("]") === i.length - 1) {
                let t = i.slice(0, i.lastIndexOf("[")),
                  o = a.map((i) => e({ name: n, type: t, types: r, value: i }));
                return [
                  { type: "bytes32" },
                  (0, N.w)(
                    (0, A.E)(
                      o.map(([t]) => t),
                      o.map(([, t]) => t)
                    )
                  ),
                ];
              }
              return [{ type: i }, a];
            })({ types: n, name: o.name, type: o.type, value: e[o.name] });
            i.push(r), a.push(s);
          }
          return (0, A.E)(i, a);
        })({ data: t, primaryType: e, types: r });
        return (0, N.w)(n);
      }
      async function tH(t, e) {
        let {
          address: r,
          factory: n,
          factoryData: i,
          signature: a,
          message: o,
          primaryType: s,
          types: u,
          domain: l,
          ...c
        } = e;
        return tO(t, {
          address: r,
          factory: n,
          factoryData: i,
          hash: (function (t) {
            let { domain: e = {}, message: r, primaryType: n } = t,
              i = { EIP712Domain: (0, tU.cj)({ domain: e }), ...t.types };
            (0, tU.iC)({ domain: e, message: r, primaryType: n, types: i });
            let a = ["0x1901"];
            return (
              e &&
                a.push(
                  (function ({ domain: t, types: e }) {
                    return tz({
                      data: t,
                      primaryType: "EIP712Domain",
                      types: e,
                    });
                  })({ domain: e, types: i })
                ),
              "EIP712Domain" !== n &&
                a.push(tz({ data: r, primaryType: n, types: i })),
              (0, N.w)((0, tN.zo)(a))
            );
          })({ message: o, primaryType: s, types: u, domain: l }),
          signature: a,
          ...c,
        });
      }
      var tD = r(79814),
        tM = r(22514),
        tZ = r(7760),
        tj = r(96070),
        tV = r(65185);
      async function tK(
        t,
        {
          confirmations: e = 1,
          hash: r,
          onReplaced: n,
          pollingInterval: i = t.pollingInterval,
          retryCount: a = 6,
          retryDelay: o = ({ count: t }) => 200 * ~~(1 << t),
          timeout: s = 18e4,
        }
      ) {
        let u, l, c;
        let f = (0, tj.P)(["waitForTransactionReceipt", t.uid, r]),
          h = !1;
        return new Promise((p, m) => {
          s && setTimeout(() => m(new ty.mc({ hash: r })), s);
          let y = (0, tM.N7)(
            f,
            { onReplaced: n, resolve: p, reject: m },
            (n) => {
              let s = (0, d.s)(
                t,
                tV.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: i,
                async onBlockNumber(i) {
                  let f = (t) => {
                      s(), t(), y();
                    },
                    p = i;
                  if (!h)
                    try {
                      if (c) {
                        if (
                          e > 1 &&
                          (!c.blockNumber || p - c.blockNumber + 1n < e)
                        )
                          return;
                        f(() => n.resolve(c));
                        return;
                      }
                      if (
                        (u ||
                          ((h = !0),
                          await (0, tZ.J)(
                            async () => {
                              (u = await (0, d.s)(
                                t,
                                tb,
                                "getTransaction"
                              )({ hash: r })).blockNumber &&
                                (p = u.blockNumber);
                            },
                            { delay: o, retryCount: a }
                          ),
                          (h = !1)),
                        (c = await (0, d.s)(
                          t,
                          tE,
                          "getTransactionReceipt"
                        )({ hash: r })),
                        e > 1 && (!c.blockNumber || p - c.blockNumber + 1n < e))
                      )
                        return;
                      f(() => n.resolve(c));
                    } catch (r) {
                      if (r instanceof ty.Bh || r instanceof ty.Yb) {
                        if (!u) {
                          h = !1;
                          return;
                        }
                        try {
                          (l = u), (h = !0);
                          let r = await (0, tZ.J)(
                            () =>
                              (0, d.s)(
                                t,
                                Z.Q,
                                "getBlock"
                              )({ blockNumber: p, includeTransactions: !0 }),
                            {
                              delay: o,
                              retryCount: a,
                              shouldRetry: ({ error: t }) => t instanceof tD.f,
                            }
                          );
                          h = !1;
                          let i = r.transactions.find(
                            ({ from: t, nonce: e }) =>
                              t === l.from && e === l.nonce
                          );
                          if (
                            !i ||
                            ((c = await (0, d.s)(
                              t,
                              tE,
                              "getTransactionReceipt"
                            )({ hash: i.hash })),
                            e > 1 &&
                              (!c.blockNumber || p - c.blockNumber + 1n < e))
                          )
                            return;
                          let s = "replaced";
                          i.to === l.to && i.value === l.value
                            ? (s = "repriced")
                            : i.from === i.to &&
                              0n === i.value &&
                              (s = "cancelled"),
                            f(() => {
                              n.onReplaced?.({
                                reason: s,
                                replacedTransaction: l,
                                transaction: i,
                                transactionReceipt: c,
                              }),
                                n.resolve(c);
                            });
                        } catch (t) {
                          f(() => n.reject(t));
                        }
                      } else f(() => n.reject(r));
                    }
                },
              });
            }
          );
        });
      }
      var tW = r(43310),
        tQ = r(23),
        tY = r(39028);
      let tX =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tJ =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function t0(t, e) {
        let {
            address: r,
            domain: n,
            message: i,
            nonce: a,
            scheme: o,
            signature: s,
            time: u = new Date(),
            ...l
          } = e,
          c = (function (t) {
            let { scheme: e, statement: r, ...n } = t.match(tX)?.groups ?? {},
              {
                chainId: i,
                expirationTime: a,
                issuedAt: o,
                notBefore: s,
                requestId: u,
                ...l
              } = t.match(tJ)?.groups ?? {},
              c = t.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...n,
              ...l,
              ...(i ? { chainId: Number(i) } : {}),
              ...(a ? { expirationTime: new Date(a) } : {}),
              ...(o ? { issuedAt: new Date(o) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(u ? { requestId: u } : {}),
              ...(c ? { resources: c } : {}),
              ...(e ? { scheme: e } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(i);
        if (
          !c.address ||
          !(function (t) {
            let {
              address: e,
              domain: r,
              message: n,
              nonce: i,
              scheme: a,
              time: o = new Date(),
            } = t;
            if (
              (r && n.domain !== r) ||
              (i && n.nonce !== i) ||
              (a && n.scheme !== a) ||
              (n.expirationTime && o >= n.expirationTime) ||
              (n.notBefore && o < n.notBefore)
            )
              return !1;
            try {
              if (!n.address || (e && !(0, Y.E)(n.address, e))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: r,
            domain: n,
            message: c,
            nonce: a,
            scheme: o,
            time: u,
          })
        )
          return !1;
        let f = tk(i);
        return tO(t, { address: c.address, hash: f, signature: s, ...l });
      }
      var t1 = r(37397),
        t2 = r(99238);
      function t4(t) {
        return {
          call: (e) => (0, w.R)(t, e),
          createBlockFilter: () => B(t),
          createContractEventFilter: (e) => T(t, e),
          createEventFilter: (e) => R(t, e),
          createPendingTransactionFilter: () => $(t),
          estimateContractGas: (e) => U(t, e),
          estimateGas: (e) => (0, _.Q)(t, e),
          getBalance: (e) => (0, D.s)(t, e),
          getBlobBaseFee: () => M(t),
          getBlock: (e) => (0, Z.Q)(t, e),
          getBlockNumber: (e) => (0, j.z)(t, e),
          getBlockTransactionCount: (e) => K(t, e),
          getBytecode: (e) => Q(t, e),
          getChainId: () => (0, W.L)(t),
          getCode: (e) => Q(t, e),
          getContractEvents: (e) => to(t, e),
          getEip712Domain: (e) => tu(t, e),
          getEnsAddress: (e) => p(t, e),
          getEnsAvatar: (e) => (0, m.r)(t, e),
          getEnsName: (e) => (0, y.w)(t, e),
          getEnsResolver: (e) => g(t, e),
          getEnsText: (e) => (0, b.g)(t, e),
          getFeeHistory: (e) => tc(t, e),
          estimateFeesPerGas: (e) => (0, z.X)(t, e),
          getFilterChanges: (e) => tf(t, e),
          getFilterLogs: (e) => td(t, e),
          getGasPrice: () => (0, th.o)(t),
          getLogs: (e) => ta(t, e),
          getProof: (e) => tp(t, e),
          estimateMaxPriorityFeePerGas: (e) => (0, H._)(t, e),
          getStorageAt: (e) => tm(t, e),
          getTransaction: (e) => tb(t, e),
          getTransactionConfirmations: (e) => tw(t, e),
          getTransactionCount: (e) => (0, tv.K)(t, e),
          getTransactionReceipt: (e) => tE(t, e),
          multicall: (e) => (0, tx.A)(t, e),
          prepareTransactionRequest: (e) => (0, t1.Z)(t, e),
          readContract: (e) => (0, h.L)(t, e),
          sendRawTransaction: (e) => (0, t2.p)(t, e),
          simulateContract: (e) => (0, tI.a)(t, e),
          verifyMessage: (e) => t_(t, e),
          verifySiweMessage: (e) => t0(t, e),
          verifyTypedData: (e) => tH(t, e),
          uninstallFilter: (e) => tP(t, e),
          waitForTransactionReceipt: (e) => tK(t, e),
          watchBlocks: (e) =>
            (function (
              t,
              {
                blockTag: e = "latest",
                emitMissed: r = !1,
                emitOnBegin: n = !1,
                onBlock: i,
                onError: a,
                includeTransactions: o,
                poll: s,
                pollingInterval: u = t.pollingInterval,
              }
            ) {
              let l, c, f, h;
              let p =
                  void 0 !== s
                    ? s
                    : "webSocket" !== t.transport.type &&
                      ("fallback" !== t.transport.type ||
                        "webSocket" !== t.transport.transports[0].config.type),
                m = o ?? !1;
              return p
                ? (() => {
                    let o = (0, tj.P)(["watchBlocks", t.uid, e, r, n, m, u]);
                    return (0, tM.N7)(o, { onBlock: i, onError: a }, (i) =>
                      (0, tQ.$)(
                        async () => {
                          try {
                            let n = await (0, d.s)(
                              t,
                              Z.Q,
                              "getBlock"
                            )({ blockTag: e, includeTransactions: m });
                            if (n.number && l?.number) {
                              if (n.number === l.number) return;
                              if (n.number - l.number > 1 && r)
                                for (
                                  let e = l?.number + 1n;
                                  e < n.number;
                                  e++
                                ) {
                                  let r = await (0, d.s)(
                                    t,
                                    Z.Q,
                                    "getBlock"
                                  )({ blockNumber: e, includeTransactions: m });
                                  i.onBlock(r, l), (l = r);
                                }
                            }
                            (!l?.number ||
                              ("pending" === e && !n?.number) ||
                              (n.number && n.number > l.number)) &&
                              (i.onBlock(n, l), (l = n));
                          } catch (t) {
                            i.onError?.(t);
                          }
                        },
                        { emitOnBegin: n, interval: u }
                      )
                    );
                  })()
                : ((c = !0),
                  (f = !0),
                  (h = () => (c = !1)),
                  (async () => {
                    try {
                      n &&
                        (0, d.s)(
                          t,
                          Z.Q,
                          "getBlock"
                        )({ blockTag: e, includeTransactions: m }).then((t) => {
                          c && f && (i(t, void 0), (f = !1));
                        });
                      let r = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) => "webSocket" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        { unsubscribe: o } = await r.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!c) return;
                            let r = (
                              t.chain?.formatters?.block?.format || tW.Z
                            )(e.result);
                            i(r, l), (f = !1), (l = r);
                          },
                          onError(t) {
                            a?.(t);
                          },
                        });
                      (h = o), c || h();
                    } catch (t) {
                      a?.(t);
                    }
                  })(),
                  () => h());
            })(t, e),
          watchBlockNumber: (e) => (0, tV.q)(t, e),
          watchContractEvent: (e) =>
            (function (t, e) {
              let {
                abi: r,
                address: n,
                args: i,
                batch: a = !0,
                eventName: o,
                fromBlock: s,
                onError: u,
                onLogs: l,
                poll: c,
                pollingInterval: f = t.pollingInterval,
                strict: h,
              } = e;
              return (
                void 0 !== c
                  ? c
                  : "bigint" == typeof s ||
                    ("webSocket" !== t.transport.type &&
                      ("fallback" !== t.transport.type ||
                        "webSocket" !== t.transport.transports[0].config.type))
              )
                ? (() => {
                    let e = h ?? !1,
                      c = (0, tj.P)([
                        "watchContractEvent",
                        n,
                        i,
                        a,
                        t.uid,
                        o,
                        f,
                        e,
                        s,
                      ]);
                    return (0, tM.N7)(c, { onLogs: l, onError: u }, (u) => {
                      let l, c;
                      void 0 !== s && (l = s - 1n);
                      let h = !1,
                        p = (0, tQ.$)(
                          async () => {
                            if (!h) {
                              try {
                                c = await (0, d.s)(
                                  t,
                                  T,
                                  "createContractEventFilter"
                                )({
                                  abi: r,
                                  address: n,
                                  args: i,
                                  eventName: o,
                                  strict: e,
                                  fromBlock: s,
                                });
                              } catch {}
                              h = !0;
                              return;
                            }
                            try {
                              let s;
                              if (c)
                                s = await (0, d.s)(
                                  t,
                                  tf,
                                  "getFilterChanges"
                                )({ filter: c });
                              else {
                                let a = await (0, d.s)(
                                  t,
                                  j.z,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  l && l < a
                                    ? await (0, d.s)(
                                        t,
                                        to,
                                        "getContractEvents"
                                      )({
                                        abi: r,
                                        address: n,
                                        args: i,
                                        eventName: o,
                                        fromBlock: l + 1n,
                                        toBlock: a,
                                        strict: e,
                                      })
                                    : []),
                                  (l = a);
                              }
                              if (0 === s.length) return;
                              if (a) u.onLogs(s);
                              else for (let t of s) u.onLogs([t]);
                            } catch (t) {
                              c && t instanceof tY.yR && (h = !1),
                                u.onError?.(t);
                            }
                          },
                          { emitOnBegin: !0, interval: f }
                        );
                      return async () => {
                        c &&
                          (await (0, d.s)(
                            t,
                            tP,
                            "uninstallFilter"
                          )({ filter: c })),
                          p();
                      };
                    });
                  })()
                : (() => {
                    let e = (0, tj.P)([
                        "watchContractEvent",
                        n,
                        i,
                        a,
                        t.uid,
                        o,
                        f,
                        h ?? !1,
                      ]),
                      s = !0,
                      c = () => (s = !1);
                    return (0, tM.N7)(
                      e,
                      { onLogs: l, onError: u },
                      (e) => (
                        (async () => {
                          try {
                            let a = (() => {
                                if ("fallback" === t.transport.type) {
                                  let e = t.transport.transports.find(
                                    (t) => "webSocket" === t.config.type
                                  );
                                  return e ? e.value : t.transport;
                                }
                                return t.transport;
                              })(),
                              u = o ? C({ abi: r, eventName: o, args: i }) : [],
                              { unsubscribe: l } = await a.subscribe({
                                params: ["logs", { address: n, topics: u }],
                                onData(t) {
                                  if (!s) return;
                                  let n = t.result;
                                  try {
                                    let { eventName: t, args: i } = tr({
                                        abi: r,
                                        data: n.data,
                                        topics: n.topics,
                                        strict: h,
                                      }),
                                      a = (0, ti.U)(n, {
                                        args: i,
                                        eventName: t,
                                      });
                                    e.onLogs([a]);
                                  } catch (a) {
                                    let t, r;
                                    if (
                                      a instanceof E.SM ||
                                      a instanceof E.Gy
                                    ) {
                                      if (h) return;
                                      (t = a.abiItem.name),
                                        (r = a.abiItem.inputs?.some(
                                          (t) => !("name" in t && t.name)
                                        ));
                                    }
                                    let i = (0, ti.U)(n, {
                                      args: r ? [] : {},
                                      eventName: t,
                                    });
                                    e.onLogs([i]);
                                  }
                                },
                                onError(t) {
                                  e.onError?.(t);
                                },
                              });
                            (c = l), s || c();
                          } catch (t) {
                            u?.(t);
                          }
                        })(),
                        () => c()
                      )
                    );
                  })();
            })(t, e),
          watchEvent: (e) =>
            (function (
              t,
              {
                address: e,
                args: r,
                batch: n = !0,
                event: i,
                events: a,
                fromBlock: o,
                onError: s,
                onLogs: u,
                poll: l,
                pollingInterval: c = t.pollingInterval,
                strict: f,
              }
            ) {
              let h, p;
              let m =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof o ||
                      ("webSocket" !== t.transport.type &&
                        ("fallback" !== t.transport.type ||
                          "webSocket" !==
                            t.transport.transports[0].config.type)),
                y = f ?? !1;
              return m
                ? (() => {
                    let l = (0, tj.P)(["watchEvent", e, r, n, t.uid, i, c, o]);
                    return (0, tM.N7)(l, { onLogs: u, onError: s }, (s) => {
                      let u, l;
                      void 0 !== o && (u = o - 1n);
                      let f = !1,
                        h = (0, tQ.$)(
                          async () => {
                            if (!f) {
                              try {
                                l = await (0, d.s)(
                                  t,
                                  R,
                                  "createEventFilter"
                                )({
                                  address: e,
                                  args: r,
                                  event: i,
                                  events: a,
                                  strict: y,
                                  fromBlock: o,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let o;
                              if (l)
                                o = await (0, d.s)(
                                  t,
                                  tf,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let n = await (0, d.s)(
                                  t,
                                  j.z,
                                  "getBlockNumber"
                                )({});
                                (o =
                                  u && u !== n
                                    ? await (0, d.s)(
                                        t,
                                        ta,
                                        "getLogs"
                                      )({
                                        address: e,
                                        args: r,
                                        event: i,
                                        events: a,
                                        fromBlock: u + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (u = n);
                              }
                              if (0 === o.length) return;
                              if (n) s.onLogs(o);
                              else for (let t of o) s.onLogs([t]);
                            } catch (t) {
                              l && t instanceof tY.yR && (f = !1),
                                s.onError?.(t);
                            }
                          },
                          { emitOnBegin: !0, interval: c }
                        );
                      return async () => {
                        l &&
                          (await (0, d.s)(
                            t,
                            tP,
                            "uninstallFilter"
                          )({ filter: l })),
                          h();
                      };
                    });
                  })()
                : ((h = !0),
                  (p = () => (h = !1)),
                  (async () => {
                    try {
                      let n = (() => {
                          if ("fallback" === t.transport.type) {
                            let e = t.transport.transports.find(
                              (t) => "webSocket" === t.config.type
                            );
                            return e ? e.value : t.transport;
                          }
                          return t.transport;
                        })(),
                        o = a ?? (i ? [i] : void 0),
                        l = [];
                      o &&
                        ((l = [
                          o.flatMap((t) =>
                            C({ abi: [t], eventName: t.name, args: r })
                          ),
                        ]),
                        i && (l = l[0]));
                      let { unsubscribe: c } = await n.subscribe({
                        params: ["logs", { address: e, topics: l }],
                        onData(t) {
                          if (!h) return;
                          let e = t.result;
                          try {
                            let { eventName: t, args: r } = tr({
                                abi: o ?? [],
                                data: e.data,
                                topics: e.topics,
                                strict: y,
                              }),
                              n = (0, ti.U)(e, { args: r, eventName: t });
                            u([n]);
                          } catch (i) {
                            let t, r;
                            if (i instanceof E.SM || i instanceof E.Gy) {
                              if (f) return;
                              (t = i.abiItem.name),
                                (r = i.abiItem.inputs?.some(
                                  (t) => !("name" in t && t.name)
                                ));
                            }
                            let n = (0, ti.U)(e, {
                              args: r ? [] : {},
                              eventName: t,
                            });
                            u([n]);
                          }
                        },
                        onError(t) {
                          s?.(t);
                        },
                      });
                      (p = c), h || p();
                    } catch (t) {
                      s?.(t);
                    }
                  })(),
                  () => p());
            })(t, e),
          watchPendingTransactions: (e) =>
            (function (
              t,
              {
                batch: e = !0,
                onError: r,
                onTransactions: n,
                poll: i,
                pollingInterval: a = t.pollingInterval,
              }
            ) {
              let o, s;
              return (void 0 !== i ? i : "webSocket" !== t.transport.type)
                ? (() => {
                    let i = (0, tj.P)([
                      "watchPendingTransactions",
                      t.uid,
                      e,
                      a,
                    ]);
                    return (0, tM.N7)(
                      i,
                      { onTransactions: n, onError: r },
                      (r) => {
                        let n;
                        let i = (0, tQ.$)(
                          async () => {
                            try {
                              if (!n)
                                try {
                                  n = await (0, d.s)(
                                    t,
                                    $,
                                    "createPendingTransactionFilter"
                                  )({});
                                  return;
                                } catch (t) {
                                  throw (i(), t);
                                }
                              let a = await (0, d.s)(
                                t,
                                tf,
                                "getFilterChanges"
                              )({ filter: n });
                              if (0 === a.length) return;
                              if (e) r.onTransactions(a);
                              else for (let t of a) r.onTransactions([t]);
                            } catch (t) {
                              r.onError?.(t);
                            }
                          },
                          { emitOnBegin: !0, interval: a }
                        );
                        return async () => {
                          n &&
                            (await (0, d.s)(
                              t,
                              tP,
                              "uninstallFilter"
                            )({ filter: n })),
                            i();
                        };
                      }
                    );
                  })()
                : ((o = !0),
                  (s = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: e } = await t.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(t) {
                          if (!o) return;
                          let e = t.result;
                          n([e]);
                        },
                        onError(t) {
                          r?.(t);
                        },
                      });
                      (s = e), o || s();
                    } catch (t) {
                      r?.(t);
                    }
                  })(),
                  () => s());
            })(t, e),
        };
      }
    },
    22319: function (t, e, r) {
      r.d(e, {
        q: function () {
          return d;
        },
      });
      var n = r(36117),
        i = r(78863),
        a = r(39028),
        o = r(92106),
        s = r(91734);
      let u = new (r(79773).k)(8192);
      var l = r(7760),
        c = r(96070),
        f = r(75632);
      function d(
        {
          key: t,
          name: e,
          request: r,
          retryCount: d = 3,
          retryDelay: h = 150,
          timeout: p,
          type: m,
        },
        y
      ) {
        return {
          config: {
            key: t,
            name: e,
            request: r,
            retryCount: d,
            retryDelay: h,
            timeout: p,
            type: m,
          },
          request: (function (t, e = {}) {
            return async (r, f = {}) => {
              let {
                  dedupe: d = !1,
                  retryDelay: h = 150,
                  retryCount: p = 3,
                  uid: m,
                } = { ...e, ...f },
                y = d ? (0, s.w)((0, o.$G)(`${m}.${(0, c.P)(r)}`)) : void 0;
              return (function (t, { enabled: e = !0, id: r }) {
                if (!e || !r) return t();
                if (u.get(r)) return u.get(r);
                let n = t().finally(() => u.delete(r));
                return u.set(r, n), n;
              })(
                () =>
                  (0, l.J)(
                    async () => {
                      try {
                        return await t(r);
                      } catch (t) {
                        switch (t.code) {
                          case a.s7.code:
                            throw new a.s7(t);
                          case a.B.code:
                            throw new a.B(t);
                          case a.LX.code:
                            throw new a.LX(t, { method: r.method });
                          case a.nY.code:
                            throw new a.nY(t);
                          case a.XS.code:
                            throw new a.XS(t);
                          case a.yR.code:
                            throw new a.yR(t);
                          case a.Og.code:
                            throw new a.Og(t);
                          case a.pT.code:
                            throw new a.pT(t);
                          case a.KB.code:
                            throw new a.KB(t);
                          case a.gS.code:
                            throw new a.gS(t, { method: r.method });
                          case a.Pv.code:
                            throw new a.Pv(t);
                          case a.GD.code:
                            throw new a.GD(t);
                          case a.ab.code:
                            throw new a.ab(t);
                          case a.PE.code:
                            throw new a.PE(t);
                          case a.Ts.code:
                            throw new a.Ts(t);
                          case a.u5.code:
                            throw new a.u5(t);
                          case a.I0.code:
                            throw new a.I0(t);
                          case a.x3.code:
                            throw new a.x3(t);
                          case 5e3:
                            throw new a.ab(t);
                          default:
                            if (t instanceof n.G) throw t;
                            throw new a.ir(t);
                        }
                      }
                    },
                    {
                      delay: ({ count: t, error: e }) => {
                        if (e && e instanceof i.Gg) {
                          let t = e?.headers?.get("Retry-After");
                          if (t?.match(/\d/)) return 1e3 * Number.parseInt(t);
                        }
                        return ~~(1 << t) * h;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: t }) =>
                        "code" in t && "number" == typeof t.code
                          ? -1 === t.code ||
                            t.code === a.Pv.code ||
                            t.code === a.XS.code
                          : !(t instanceof i.Gg) ||
                            !t.status ||
                            403 === t.status ||
                            408 === t.status ||
                            413 === t.status ||
                            429 === t.status ||
                            500 === t.status ||
                            502 === t.status ||
                            503 === t.status ||
                            504 === t.status,
                    }
                  ),
                { enabled: d, id: y }
              );
            };
          })(r, { retryCount: d, retryDelay: h, uid: (0, f.h)() }),
          value: y,
        };
      }
    },
    6458: function (t, e, r) {
      r.d(e, {
        l: function () {
          return n;
        },
      });
      let n = 1;
    },
    66226: function (t, e, r) {
      r.d(e, {
        RX: function () {
          return o;
        },
        cJ: function () {
          return u;
        },
        m7: function () {
          return a;
        },
        xd: function () {
          return s;
        },
      });
      var n = r(6458),
        i = r(36117);
      class a extends i.G {
        constructor({ maxSize: t, size: e }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${e} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class o extends i.G {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class s extends i.G {
        constructor({ hash: t, size: e }) {
          super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${e}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class u extends i.G {
        constructor({ hash: t, version: e }) {
          super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${n.l}`, `Received: ${e}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
    },
    79814: function (t, e, r) {
      r.d(e, {
        f: function () {
          return i;
        },
      });
      var n = r(36117);
      class i extends n.G {
        constructor({ blockHash: t, blockNumber: e }) {
          let r = "Block";
          t && (r = `Block at hash "${t}"`),
            e && (r = `Block at number "${e}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    15371: function (t, e, r) {
      r.d(e, {
        Fz: function () {
          return a;
        },
        e5: function () {
          return o;
        },
        ld: function () {
          return s;
        },
      });
      var n = r(67795),
        i = r(36117);
      class a extends i.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class o extends i.G {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class s extends i.G {
        constructor({ maxPriorityFeePerGas: t }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.o)(t)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    68064: function (t, e, r) {
      r.d(e, {
        z: function () {
          return l;
        },
      });
      var n = r(21845),
        i = r(57040),
        a = r(11187),
        o = r(92106),
        s = r(7529),
        u = r(91734);
      async function l(t) {
        let { authorization: e, signature: r } = t;
        return (0, n.R)({
          hash: (function (t) {
            let { chainId: e, contractAddress: r, nonce: n, to: l } = t,
              c = (0, u.w)(
                (0, i.SM)([
                  "0x05",
                  (0, s.LV)([(0, o.eC)(e), r, n ? (0, o.eC)(n) : "0x"]),
                ])
              );
            return "bytes" === l ? (0, a.nr)(c) : c;
          })(e),
          signature: r ?? e,
        });
      }
    },
    60169: function (t, e, r) {
      r.d(e, {
        P: function () {
          return a;
        },
      });
      var n = r(11187),
        i = r(92106);
      function a(t) {
        let { kzg: e } = t,
          r = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
          a =
            "string" == typeof t.blobs[0]
              ? t.blobs.map((t) => (0, n.nr)(t))
              : t.blobs,
          o = [];
        for (let t of a) o.push(Uint8Array.from(e.blobToKzgCommitment(t)));
        return "bytes" === r ? o : o.map((t) => (0, i.ci)(t));
      }
    },
    4499: function (t, e, r) {
      r.d(e, {
        y: function () {
          return a;
        },
      });
      var n = r(11187),
        i = r(92106);
      function a(t) {
        let { kzg: e } = t,
          r = t.to ?? ("string" == typeof t.blobs[0] ? "hex" : "bytes"),
          a =
            "string" == typeof t.blobs[0]
              ? t.blobs.map((t) => (0, n.nr)(t))
              : t.blobs,
          o =
            "string" == typeof t.commitments[0]
              ? t.commitments.map((t) => (0, n.nr)(t))
              : t.commitments,
          s = [];
        for (let t = 0; t < a.length; t++) {
          let r = a[t],
            n = o[t];
          s.push(Uint8Array.from(e.computeBlobKzgProof(r, n)));
        }
        return "bytes" === r ? s : s.map((t) => (0, i.ci)(t));
      }
    },
    34603: function (t, e, r) {
      r.d(e, {
        C: function () {
          return s;
        },
      });
      var n = r(92106),
        i = r(3868),
        a = r(15102),
        o = r(11187);
      function s(t) {
        let { commitments: e, version: r } = t,
          s = t.to ?? ("string" == typeof e[0] ? "hex" : "bytes"),
          u = [];
        for (let t of e)
          u.push(
            (function (t) {
              let { commitment: e, version: r = 1 } = t,
                s = t.to ?? ("string" == typeof e ? "hex" : "bytes"),
                u = (function (t, e) {
                  let r = (0, i.J)(
                    (0, a.v)(t, { strict: !1 }) ? (0, o.O0)(t) : t
                  );
                  return "bytes" === (e || "hex") ? r : (0, n.NC)(r);
                })(e, "bytes");
              return u.set([r], 0), "bytes" === s ? u : (0, n.ci)(u);
            })({ commitment: t, to: s, version: r })
          );
        return u;
      }
    },
    64446: function (t, e, r) {
      r.d(e, {
        j: function () {
          return c;
        },
      });
      var n = r(60169),
        i = r(4499),
        a = r(66226),
        o = r(11221),
        s = r(39135),
        u = r(11187),
        l = r(92106);
      function c(t) {
        let { data: e, kzg: r, to: c } = t,
          f =
            t.blobs ??
            (function (t) {
              let e = t.to ?? ("string" == typeof t.data ? "hex" : "bytes"),
                r = "string" == typeof t.data ? (0, u.nr)(t.data) : t.data,
                n = (0, s.d)(r);
              if (!n) throw new a.RX();
              if (n > 761855) throw new a.m7({ maxSize: 761855, size: n });
              let i = [],
                c = !0,
                f = 0;
              for (; c; ) {
                let t = (0, o.q)(new Uint8Array(131072)),
                  e = 0;
                for (; e < 4096; ) {
                  let n = r.slice(f, f + 31);
                  if ((t.pushByte(0), t.pushBytes(n), n.length < 31)) {
                    t.pushByte(128), (c = !1);
                    break;
                  }
                  e++, (f += 31);
                }
                i.push(t);
              }
              return "bytes" === e
                ? i.map((t) => t.bytes)
                : i.map((t) => (0, l.ci)(t.bytes));
            })({ data: e, to: c }),
          d = t.commitments ?? (0, n.P)({ blobs: f, kzg: r, to: c }),
          h = t.proofs ?? (0, i.y)({ blobs: f, commitments: d, kzg: r, to: c }),
          p = [];
        for (let t = 0; t < f.length; t++)
          p.push({ blob: f[t], commitment: d[t], proof: h[t] });
        return p;
      }
    },
    7529: function (t, e, r) {
      r.d(e, {
        LV: function () {
          return s;
        },
      });
      var n = r(36117),
        i = r(11221),
        a = r(11187),
        o = r(92106);
      function s(t, e = "hex") {
        let r = (function t(e) {
            return Array.isArray(e)
              ? (function (t) {
                  let e = t.reduce((t, e) => t + e.length, 0),
                    r = u(e);
                  return {
                    length: e <= 55 ? 1 + e : 1 + r + e,
                    encode(n) {
                      for (let { encode: i } of (e <= 55
                        ? n.pushByte(192 + e)
                        : (n.pushByte(247 + r),
                          1 === r
                            ? n.pushUint8(e)
                            : 2 === r
                            ? n.pushUint16(e)
                            : 3 === r
                            ? n.pushUint24(e)
                            : n.pushUint32(e)),
                      t))
                        i(n);
                    },
                  };
                })(e.map((e) => t(e)))
              : (function (t) {
                  let e = "string" == typeof t ? (0, a.nr)(t) : t,
                    r = u(e.length);
                  return {
                    length:
                      1 === e.length && e[0] < 128
                        ? 1
                        : e.length <= 55
                        ? 1 + e.length
                        : 1 + r + e.length,
                    encode(t) {
                      (1 === e.length && e[0] < 128) ||
                        (e.length <= 55
                          ? t.pushByte(128 + e.length)
                          : (t.pushByte(183 + r),
                            1 === r
                              ? t.pushUint8(e.length)
                              : 2 === r
                              ? t.pushUint16(e.length)
                              : 3 === r
                              ? t.pushUint24(e.length)
                              : t.pushUint32(e.length))),
                        t.pushBytes(e);
                    },
                  };
                })(e);
          })(t),
          n = (0, i.q)(new Uint8Array(r.length));
        return (r.encode(n), "hex" === e) ? (0, o.ci)(n.bytes) : n.bytes;
      }
      function u(t) {
        if (t < 256) return 1;
        if (t < 65536) return 2;
        if (t < 16777216) return 3;
        if (t < 4294967296) return 4;
        throw new n.G("Length is too large.");
      }
    },
    11511: function (t, e, r) {
      r.d(e, {
        i: function () {
          return i;
        },
      });
      var n = r(15102);
      function i(t) {
        if (66 !== t.length || 0 !== t.indexOf("[") || 65 !== t.indexOf("]"))
          return null;
        let e = `0x${t.slice(1, 65)}`;
        return (0, n.v)(e) ? e : null;
      }
    },
    74526: function (t, e, r) {
      r.d(e, {
        c: function () {
          return o;
        },
      });
      var n = r(21746),
        i = r(36117),
        a = r(97405);
      function o(t, e) {
        if (!(t instanceof i.G)) return !1;
        let r = t.walk((t) => t instanceof a.Lu);
        return (
          r instanceof a.Lu &&
          (!!(
            r.data?.errorName === "ResolverNotFound" ||
            r.data?.errorName === "ResolverWildcardNotSupported" ||
            r.data?.errorName === "ResolverNotContract" ||
            r.data?.errorName === "ResolverError" ||
            r.data?.errorName === "HttpError" ||
            r.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === e && r.reason === n.$[50]))
        );
      }
    },
    75719: function (t, e, r) {
      r.d(e, {
        V: function () {
          return u;
        },
      });
      var n = r(57040),
        i = r(11187),
        a = r(92106),
        o = r(91734),
        s = r(11511);
      function u(t) {
        let e = new Uint8Array(32).fill(0);
        if (!t) return (0, a.ci)(e);
        let r = t.split(".");
        for (let t = r.length - 1; t >= 0; t -= 1) {
          let a = (0, s.i)(r[t]),
            u = a ? (0, i.O0)(a) : (0, o.w)((0, i.qX)(r[t]), "bytes");
          e = (0, o.w)((0, n.zo)([e, u]), "bytes");
        }
        return (0, a.ci)(e);
      }
    },
    48063: function (t, e, r) {
      r.d(e, {
        T: function () {
          return s;
        },
      });
      var n = r(11187),
        i = r(92106),
        a = r(91734),
        o = r(11511);
      function s(t) {
        let e = t.replace(/^\.|\.$/gm, "");
        if (0 === e.length) return new Uint8Array(1);
        let r = new Uint8Array((0, n.qX)(e).byteLength + 2),
          s = 0,
          u = e.split(".");
        for (let t = 0; t < u.length; t++) {
          let e = (0, n.qX)(u[t]);
          if (e.byteLength > 255) {
            var l;
            e = (0, n.qX)(
              ((l = (function (t) {
                let e = new Uint8Array(32).fill(0);
                return t ? (0, o.i)(t) || (0, a.w)((0, n.qX)(t)) : (0, i.ci)(e);
              })(u[t])),
              `[${l.slice(2)}]`)
            );
          }
          (r[s] = e.length), r.set(e, s + 1), (s += e.length + 1);
        }
        return r.byteLength !== s + 1 ? r.slice(0, s + 1) : r;
      }
    },
    43310: function (t, e, r) {
      r.d(e, {
        G: function () {
          return o;
        },
        Z: function () {
          return a;
        },
      });
      var n = r(21366),
        i = r(6073);
      function a(t) {
        let e = t.transactions?.map((t) =>
          "string" == typeof t ? t : i.Tr(t)
        );
        return {
          ...t,
          baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
          blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
          difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
          excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
          gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
          hash: t.hash ? t.hash : null,
          logsBloom: t.logsBloom ? t.logsBloom : null,
          nonce: t.nonce ? t.nonce : null,
          number: t.number ? BigInt(t.number) : null,
          size: t.size ? BigInt(t.size) : void 0,
          timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
          transactions: e,
          totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null,
        };
      }
      let o = (0, n.$)("block", a);
    },
    21366: function (t, e, r) {
      r.d(e, {
        $: function () {
          return n;
        },
      });
      function n(t, e) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (t) => {
            let i = e(t);
            if (r) for (let t of r) delete i[t];
            return { ...i, ...n(t) };
          },
          type: t,
        });
      }
    },
    53992: function (t, e, r) {
      r.d(e, {
        U: function () {
          return n;
        },
      });
      function n(t, { args: e, eventName: r } = {}) {
        return {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          logIndex: t.logIndex ? Number(t.logIndex) : null,
          transactionHash: t.transactionHash ? t.transactionHash : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          ...(r ? { args: e, eventName: r } : {}),
        };
      }
    },
    6073: function (t, e, r) {
      r.d(e, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return a;
        },
        y_: function () {
          return s;
        },
      });
      var n = r(95946),
        i = r(21366);
      let a = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function o(t) {
        let e = {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          chainId: t.chainId ? (0, n.ly)(t.chainId) : void 0,
          gas: t.gas ? BigInt(t.gas) : void 0,
          gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
          maxFeePerBlobGas: t.maxFeePerBlobGas
            ? BigInt(t.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: t.maxPriorityFeePerGas
            ? BigInt(t.maxPriorityFeePerGas)
            : void 0,
          nonce: t.nonce ? (0, n.ly)(t.nonce) : void 0,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          type: t.type ? a[t.type] : void 0,
          typeHex: t.type ? t.type : void 0,
          value: t.value ? BigInt(t.value) : void 0,
          v: t.v ? BigInt(t.v) : void 0,
        };
        return (
          t.authorizationList &&
            (e.authorizationList = t.authorizationList.map((t) => ({
              contractAddress: t.address,
              r: t.r,
              s: t.s,
              chainId: Number(t.chainId),
              nonce: Number(t.nonce),
              ...(void 0 !== t.yParity ? { yParity: Number(t.yParity) } : {}),
              ...(void 0 !== t.v && void 0 === t.yParity
                ? { v: Number(t.v) }
                : {}),
            }))),
          (e.yParity = (() => {
            if (t.yParity) return Number(t.yParity);
            if ("bigint" == typeof e.v) {
              if (0n === e.v || 27n === e.v) return 0;
              if (1n === e.v || 28n === e.v) return 1;
              if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === e.type &&
            (delete e.accessList,
            delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas,
            delete e.yParity),
          "eip2930" === e.type &&
            (delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas),
          "eip1559" === e.type && delete e.maxFeePerBlobGas,
          e
        );
      }
      let s = (0, i.$)("transaction", o);
    },
    30866: function (t, e, r) {
      r.d(e, {
        dI: function () {
          return l;
        },
        fA: function () {
          return u;
        },
      });
      var n = r(95946),
        i = r(21366),
        a = r(53992),
        o = r(6073);
      let s = { "0x0": "reverted", "0x1": "success" };
      function u(t) {
        let e = {
          ...t,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          contractAddress: t.contractAddress ? t.contractAddress : null,
          cumulativeGasUsed: t.cumulativeGasUsed
            ? BigInt(t.cumulativeGasUsed)
            : null,
          effectiveGasPrice: t.effectiveGasPrice
            ? BigInt(t.effectiveGasPrice)
            : null,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
          logs: t.logs ? t.logs.map((t) => (0, a.U)(t)) : null,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? (0, n.ly)(t.transactionIndex)
            : null,
          status: t.status ? s[t.status] : null,
          type: t.type ? o.c8[t.type] || t.type : null,
        };
        return (
          t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)),
          t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)),
          e
        );
      }
      let l = (0, i.$)("transactionReceipt", u);
    },
    22514: function (t, e, r) {
      r.d(e, {
        N7: function () {
          return o;
        },
      });
      let n = new Map(),
        i = new Map(),
        a = 0;
      function o(t, e, r) {
        let o = ++a,
          s = () => n.get(t) || [],
          u = () => {
            let e = s();
            n.set(
              t,
              e.filter((t) => t.id !== o)
            );
          },
          l = () => {
            let e = i.get(t);
            1 === s().length && e && e(), u();
          },
          c = s();
        if ((n.set(t, [...c, { id: o, fns: e }]), c && c.length > 0)) return l;
        let f = {};
        for (let t in e)
          f[t] = (...e) => {
            let r = s();
            if (0 !== r.length) for (let n of r) n.fns[t]?.(...e);
          };
        let d = r(f);
        return "function" == typeof d && i.set(t, d), l;
      }
    },
    23: function (t, e, r) {
      r.d(e, {
        $: function () {
          return i;
        },
      });
      var n = r(62914);
      function i(t, { emitOnBegin: e, initialWaitTime: r, interval: i }) {
        let a = !0,
          o = () => (a = !1);
        return (
          (async () => {
            let s;
            e && (s = await t({ unpoll: o }));
            let u = (await r?.(s)) ?? i;
            await (0, n.D)(u);
            let l = async () => {
              a && (await t({ unpoll: o }), await (0, n.D)(i), l());
            };
            l();
          })(),
          o
        );
      }
    },
    7760: function (t, e, r) {
      r.d(e, {
        J: function () {
          return i;
        },
      });
      var n = r(62914);
      function i(
        t,
        { delay: e = 100, retryCount: r = 2, shouldRetry: i = () => !0 } = {}
      ) {
        return new Promise((a, o) => {
          let s = async ({ count: u = 0 } = {}) => {
            let l = async ({ error: t }) => {
              let r = "function" == typeof e ? e({ count: u, error: t }) : e;
              r && (await (0, n.D)(r)), s({ count: u + 1 });
            };
            try {
              let e = await t();
              a(e);
            } catch (t) {
              if (u < r && (await i({ count: u, error: t })))
                return l({ error: t });
              o(t);
            }
          };
          s();
        });
      }
    },
    21845: function (t, e, r) {
      r.d(e, {
        R: function () {
          return c;
        },
      });
      var n = r(45775),
        i = r(91734),
        a = r(15102),
        o = r(95946),
        s = r(92106);
      async function u({ hash: t, signature: e }) {
        let n = (0, a.v)(t) ? t : (0, s.NC)(t),
          { secp256k1: i } = await Promise.resolve().then(r.bind(r, 43147)),
          u = (() => {
            if ("object" == typeof e && "r" in e && "s" in e) {
              let { r: t, s: r, v: n, yParity: a } = e,
                s = l(Number(a ?? n));
              return new i.Signature((0, o.y_)(t), (0, o.y_)(r)).addRecoveryBit(
                s
              );
            }
            let t = (0, a.v)(e) ? e : (0, s.NC)(e),
              r = l((0, o.ly)(`0x${t.slice(130)}`));
            return i.Signature.fromCompact(t.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function l(t) {
        if (0 === t || 1 === t) return t;
        if (27 === t) return 0;
        if (28 === t) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function c({ hash: t, signature: e }) {
        return (function (t) {
          let e = (0, i.w)(`0x${t.substring(4)}`).substring(26);
          return (0, n.x)(`0x${e}`);
        })(await u({ hash: t, signature: e }));
      }
    },
    82994: function (t, e, r) {
      r.d(e, {
        l: function () {
          return i;
        },
      });
      var n = r(33639);
      function i(t) {
        if (t.type) return t.type;
        if (void 0 !== t.authorizationList) return "eip7702";
        if (
          void 0 !== t.blobs ||
          void 0 !== t.blobVersionedHashes ||
          void 0 !== t.maxFeePerBlobGas ||
          void 0 !== t.sidecars
        )
          return "eip4844";
        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== t.gasPrice)
          return void 0 !== t.accessList ? "eip2930" : "legacy";
        throw new n.j3({ transaction: t });
      }
    },
    71352: function (t, e, r) {
      r.d(e, {
        cj: function () {
          return h;
        },
        H6: function () {
          return f;
        },
        iC: function () {
          return d;
        },
      });
      var n = r(57412),
        i = r(26087),
        a = r(49321),
        o = r(39135),
        s = r(92106);
      let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        l =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      var c = r(96070);
      function f(t) {
        let { domain: e, message: r, primaryType: n, types: i } = t,
          a = (t, e) => {
            let r = { ...e };
            for (let e of t) {
              let { name: t, type: n } = e;
              "address" === n && (r[t] = r[t].toLowerCase());
            }
            return r;
          },
          o = i.EIP712Domain && e ? a(i.EIP712Domain, e) : {},
          s = (() => {
            if ("EIP712Domain" !== n) return a(i[n], r);
          })();
        return (0, c.P)({ domain: o, message: s, primaryType: n, types: i });
      }
      function d(t) {
        let { domain: e, message: r, primaryType: c, types: f } = t,
          d = (t, e) => {
            for (let r of t) {
              let { name: t, type: c } = r,
                h = e[t],
                p = c.match(l);
              if (p && ("number" == typeof h || "bigint" == typeof h)) {
                let [t, e, r] = p;
                (0, s.eC)(h, {
                  signed: "int" === e,
                  size: Number.parseInt(r) / 8,
                });
              }
              if ("address" === c && "string" == typeof h && !(0, a.U)(h))
                throw new i.b({ address: h });
              let m = c.match(u);
              if (m) {
                let [t, e] = m;
                if (e && (0, o.d)(h) !== Number.parseInt(e))
                  throw new n.KY({
                    expectedSize: Number.parseInt(e),
                    givenSize: (0, o.d)(h),
                  });
              }
              let y = f[c];
              y && d(y, h);
            }
          };
        f.EIP712Domain && e && d(f.EIP712Domain, e),
          "EIP712Domain" !== c && d(f[c], r);
      }
      function h({ domain: t }) {
        return [
          "string" == typeof t?.name && { name: "name", type: "string" },
          t?.version && { name: "version", type: "string" },
          "number" == typeof t?.chainId && { name: "chainId", type: "uint256" },
          t?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          t?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    75632: function (t, e, r) {
      let n;
      r.d(e, {
        h: function () {
          return a;
        },
      });
      let i = 256;
      function a(t = 11) {
        if (!n || i + t > 512) {
          (n = ""), (i = 0);
          for (let t = 0; t < 256; t++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(i, i++ + t);
      }
    },
    62914: function (t, e, r) {
      r.d(e, {
        D: function () {
          return n;
        },
      });
      async function n(t) {
        return new Promise((e) => setTimeout(e, t));
      }
    },
    1929: function (t, e, r) {
      r.d(e, {
        FF: function () {
          return P;
        },
        S5: function () {
          return y;
        },
        Wd: function () {
          return w;
        },
        _t: function () {
          return a;
        },
        bytesToNumberBE: function () {
          return h;
        },
        ci: function () {
          return u;
        },
        dQ: function () {
          return v;
        },
        eV: function () {
          return b;
        },
        gk: function () {
          return o;
        },
        hexToBytes: function () {
          return d;
        },
        n$: function () {
          return x;
        },
        ql: function () {
          return g;
        },
        tL: function () {
          return m;
        },
        ty: function () {
          return p;
        },
      }),
        BigInt(0);
      let n = BigInt(1),
        i = BigInt(2);
      function a(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            "object" == typeof t &&
            "Uint8Array" === t.constructor.name)
        );
      }
      function o(t) {
        if (!a(t)) throw Error("Uint8Array expected");
      }
      let s = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function u(t) {
        o(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += s[t[r]];
        return e;
      }
      function l(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      let c = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function f(t) {
        return t >= c._0 && t <= c._9
          ? t - c._0
          : t >= c._A && t <= c._F
          ? t - (c._A - 10)
          : t >= c._a && t <= c._f
          ? t - (c._a - 10)
          : void 0;
      }
      function d(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = f(t.charCodeAt(i)),
            a = f(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === a)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + a;
        }
        return n;
      }
      function h(t) {
        return l(u(t));
      }
      function p(t) {
        return o(t), l(u(Uint8Array.from(t).reverse()));
      }
      function m(t, e) {
        return d(t.toString(16).padStart(2 * e, "0"));
      }
      function y(t, e) {
        return m(t, e).reverse();
      }
      function g(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = d(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (a(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function b(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          o(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      function w(t, e) {
        if (t.length !== e.length) return !1;
        let r = 0;
        for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
        return 0 === r;
      }
      let v = (t) => (i << BigInt(t - 1)) - n,
        B = (t) => new Uint8Array(t),
        E = (t) => Uint8Array.from(t);
      function x(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = B(t),
          i = B(t),
          a = 0,
          o = () => {
            n.fill(1), i.fill(0), (a = 0);
          },
          s = (...t) => r(i, n, ...t),
          u = (t = B()) => {
            (i = s(E([0]), t)),
              (n = s()),
              0 !== t.length && ((i = s(E([1]), t)), (n = s()));
          },
          l = () => {
            if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = s()).slice();
              r.push(e), (t += n.length);
            }
            return b(...r);
          };
        return (t, e) => {
          let r;
          for (o(), u(t); !(r = e(l())); ) u();
          return o(), r;
        };
      }
      let I = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || a(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function P(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = I[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let a = t[e];
          if ((!n || void 0 !== a) && !i(a, t))
            throw Error(
              `Invalid param ${String(e)}=${a} (${typeof a}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
    },
    43147: function (t, e, r) {
      r.d(e, {
        secp256k1: function () {
          return O;
        },
      });
      var n = r(3868),
        i = r(1929);
      let a = BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        u = BigInt(3),
        l = BigInt(4),
        c = BigInt(5),
        f = BigInt(8);
      function d(t, e) {
        let r = t % e;
        return r >= a ? r : e + r;
      }
      function h(t, e, r) {
        let n = t;
        for (; e-- > a; ) (n *= n), (n %= r);
        return n;
      }
      function p(t, e) {
        if (t === a || e <= a)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = d(t, e),
          n = e,
          i = a,
          s = o,
          u = o,
          l = a;
        for (; r !== a; ) {
          let t = n / r,
            e = n % r,
            a = i - u * t,
            o = s - l * t;
          (n = r), (r = e), (i = u), (s = l), (u = a), (l = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return d(i, e);
      }
      BigInt(9), BigInt(16);
      let m = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function y(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function g(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function b(t) {
        let e = g(t);
        return e + Math.ceil(e / 2);
      }
      var w = r(41656),
        v = r(15448);
      class B extends v.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, w.vp)(t);
          let r = (0, v.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < i.length; t++) i[t] ^= 54;
          this.iHash.update(i), (this.oHash = t.create());
          for (let t = 0; t < i.length; t++) i[t] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(t) {
          return (0, w.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, w.Gg)(this),
            (0, w.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: a,
            outputLen: o,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = a),
            (t.outputLen = o),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let E = (t, e, r) => new B(t, e).update(r).digest();
      E.create = (t, e) => new B(t, e);
      let x = BigInt(0),
        I = BigInt(1);
      function P(t) {
        return (
          !(function (t) {
            let e = m.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            (0, i.FF)(t, e);
          })(t.Fp),
          (0, i.FF)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...y(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
        );
      }
      let { bytesToNumberBE: N, hexToBytes: k } = i,
        A = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _parseInt(t) {
            let { Err: e } = A;
            if (t.length < 2 || 2 !== t[0])
              throw new e("Invalid signature integer tag");
            let r = t[1],
              n = t.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new e("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new e("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new e(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: N(n), l: t.subarray(r + 2) };
          },
          toSig(t) {
            let { Err: e } = A,
              r = "string" == typeof t ? k(t) : t;
            i.gk(r);
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new e("Invalid signature: incorrect length");
            let { d: a, l: o } = A._parseInt(r.subarray(2)),
              { d: s, l: u } = A._parseInt(o);
            if (u.length)
              throw new e("Invalid signature: left bytes after parsing");
            return { r: a, s };
          },
          hexFromSig(t) {
            let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
              r = (t) => {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e;
              },
              n = e(r(t.s)),
              i = e(r(t.r)),
              a = n.length / 2,
              o = i.length / 2,
              s = r(a),
              u = r(o);
            return `30${r(o + a + 4)}02${u}${i}02${s}${n}`;
          },
        },
        F = BigInt(0),
        G = BigInt(1),
        S = (BigInt(2), BigInt(3));
      BigInt(4);
      let C = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        q = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        T = BigInt(1),
        R = BigInt(2),
        $ = (t, e) => (t + e / R) / e,
        L = (function (t, e, r = !1, n = {}) {
          if (t <= a) throw Error(`Expected Field ORDER > 0, got ${t}`);
          let { nBitLength: h, nByteLength: m } = y(t, e);
          if (m > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let g = (function (t) {
              if (t % l === u) {
                let e = (t + o) / l;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (t % f === c) {
                let e = (t - c) / f;
                return function (t, r) {
                  let n = t.mul(r, s),
                    i = t.pow(n, e),
                    a = t.mul(r, i),
                    o = t.mul(t.mul(a, s), i),
                    u = t.mul(a, t.sub(o, t.ONE));
                  if (!t.eql(t.sqr(u), r))
                    throw Error("Cannot find square root");
                  return u;
                };
              }
              return (function (t) {
                let e, r, n;
                let i = (t - o) / s;
                for (e = t - o, r = 0; e % s === a; e /= s, r++);
                for (
                  n = s;
                  n < t &&
                  (function (t, e, r) {
                    if (r <= a || e < a)
                      throw Error("Expected power/modulo > 0");
                    if (r === o) return a;
                    let n = o;
                    for (; e > a; )
                      e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o);
                    return n;
                  })(n, i, t) !==
                    t - o;
                  n++
                );
                if (1 === r) {
                  let e = (t + o) / l;
                  return function (t, r) {
                    let n = t.pow(r, e);
                    if (!t.eql(t.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let u = (e + o) / s;
                return function (t, a) {
                  if (t.pow(a, i) === t.neg(t.ONE))
                    throw Error("Cannot find square root");
                  let s = r,
                    l = t.pow(t.mul(t.ONE, n), e),
                    c = t.pow(a, u),
                    f = t.pow(a, e);
                  for (; !t.eql(f, t.ONE); ) {
                    if (t.eql(f, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(f); e < s && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    let r = t.pow(l, o << BigInt(s - e - 1));
                    (l = t.sqr(r)),
                      (c = t.mul(c, r)),
                      (f = t.mul(f, l)),
                      (s = e);
                  }
                  return c;
                };
              })(t);
            })(t),
            b = Object.freeze({
              ORDER: t,
              BITS: h,
              BYTES: m,
              MASK: (0, i.dQ)(h),
              ZERO: a,
              ONE: o,
              create: (e) => d(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof e}`
                  );
                return a <= e && e < t;
              },
              is0: (t) => t === a,
              isOdd: (t) => (t & o) === o,
              neg: (e) => d(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => d(e * e, t),
              add: (e, r) => d(e + r, t),
              sub: (e, r) => d(e - r, t),
              mul: (e, r) => d(e * r, t),
              pow: (t, e) =>
                (function (t, e, r) {
                  if (r < a) throw Error("Expected power > 0");
                  if (r === a) return t.ONE;
                  if (r === o) return e;
                  let n = t.ONE,
                    i = e;
                  for (; r > a; )
                    r & o && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= o);
                  return n;
                })(b, t, e),
              div: (e, r) => d(e * p(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => p(e, t),
              sqrt: n.sqrt || ((t) => g(b, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  let r = Array(e.length),
                    n = e.reduce(
                      (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                      t.ONE
                    ),
                    i = t.inv(n);
                  return (
                    e.reduceRight(
                      (e, n, i) =>
                        t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                      i
                    ),
                    r
                  );
                })(b, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) => (r ? (0, i.S5)(t, m) : (0, i.tL)(t, m)),
              fromBytes: (t) => {
                if (t.length !== m)
                  throw Error(`Fp.fromBytes: expected ${m}, got ${t.length}`);
                return r ? (0, i.ty)(t) : (0, i.bytesToNumberBE)(t);
              },
            });
          return Object.freeze(b);
        })(C, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              a = BigInt(23),
              o = BigInt(44),
              s = BigInt(88),
              u = (t * t * t) % C,
              l = (u * u * t) % C,
              c = (h(l, e, C) * l) % C,
              f = (h(c, e, C) * l) % C,
              d = (h(f, R, C) * u) % C,
              p = (h(d, n, C) * d) % C,
              m = (h(p, i, C) * p) % C,
              y = (h(m, o, C) * m) % C,
              g = (h(y, s, C) * y) % C,
              b = (h(g, o, C) * m) % C,
              w = (h(b, e, C) * l) % C,
              v = (h(w, a, C) * p) % C,
              B = (h(v, r, C) * u) % C,
              E = h(B, R, C);
            if (!L.eql(L.sqr(E), t)) throw Error("Cannot find square root");
            return E;
          },
        }),
        O = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = P(t);
                  return (
                    i.FF(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                a = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function u(t) {
                return d(t, n);
              }
              let {
                  ProjectivePoint: l,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: f,
                  isWithinCurveOrder: h,
                } = (function (t) {
                  let e = (function (t) {
                      let e = P(t);
                      i.FF(
                        e,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a } = e;
                      if (r) {
                        if (!n.eql(a, n.ZERO))
                          throw Error(
                            "Endomorphism can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "Expected endomorphism with beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...e });
                    })(t),
                    { Fp: r } = e,
                    n =
                      e.toBytes ||
                      ((t, e, n) => {
                        let a = e.toAffine();
                        return i.eV(
                          Uint8Array.from([4]),
                          r.toBytes(a.x),
                          r.toBytes(a.y)
                        );
                      }),
                    a =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function o(t) {
                    let { a: n, b: i } = e,
                      a = r.sqr(t),
                      o = r.mul(a, t);
                    return r.add(r.add(o, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), o(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function s(t) {
                    return "bigint" == typeof t && F < t && t < e.n;
                  }
                  function u(t) {
                    if (!s(t))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n"
                      );
                  }
                  function l(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: a,
                      wrapPrivateKey: o,
                      n: s,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (i._t(t) && (t = i.ci(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("Invalid key");
                      t = t.padStart(2 * a, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof t
                          ? t
                          : i.bytesToNumberBE((0, i.ql)("private key", t, a));
                    } catch (e) {
                      throw Error(
                        `private key must be ${a} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return o && (r = d(r, s)), u(r), r;
                  }
                  let c = new Map();
                  function f(t) {
                    if (!(t instanceof h))
                      throw Error("ProjectivePoint expected");
                  }
                  class h {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof h)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? h.ZERO : new h(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(h.fromAffine);
                    }
                    static fromHex(t) {
                      let e = h.fromAffine(a((0, i.ql)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return h.BASE.multiply(l(t));
                    }
                    _setWindowSize(t) {
                      (this._WINDOW_SIZE = t), c.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: n } = this.toAffine();
                      if (!r.isValid(t) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        a = o(t);
                      if (!r.eql(i, a))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      f(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: a, py: o, pz: s } = t,
                        u = r.eql(r.mul(e, s), r.mul(a, i)),
                        l = r.eql(r.mul(n, s), r.mul(o, i));
                      return u && l;
                    }
                    negate() {
                      return new h(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, S),
                        { px: a, py: o, pz: s } = this,
                        u = r.ZERO,
                        l = r.ZERO,
                        c = r.ZERO,
                        f = r.mul(a, a),
                        d = r.mul(o, o),
                        p = r.mul(s, s),
                        m = r.mul(a, o);
                      return (
                        (m = r.add(m, m)),
                        (c = r.mul(a, s)),
                        (c = r.add(c, c)),
                        (u = r.mul(t, c)),
                        (l = r.mul(i, p)),
                        (l = r.add(u, l)),
                        (u = r.sub(d, l)),
                        (l = r.add(d, l)),
                        (l = r.mul(u, l)),
                        (u = r.mul(m, u)),
                        (c = r.mul(i, c)),
                        (p = r.mul(t, p)),
                        (m = r.sub(f, p)),
                        (m = r.mul(t, m)),
                        (m = r.add(m, c)),
                        (c = r.add(f, f)),
                        (f = r.add(c, f)),
                        (f = r.add(f, p)),
                        (f = r.mul(f, m)),
                        (l = r.add(l, f)),
                        (p = r.mul(o, s)),
                        (p = r.add(p, p)),
                        (f = r.mul(p, m)),
                        (u = r.sub(u, f)),
                        (c = r.mul(p, d)),
                        (c = r.add(c, c)),
                        new h(u, l, (c = r.add(c, c)))
                      );
                    }
                    add(t) {
                      f(t);
                      let { px: n, py: i, pz: a } = this,
                        { px: o, py: s, pz: u } = t,
                        l = r.ZERO,
                        c = r.ZERO,
                        d = r.ZERO,
                        p = e.a,
                        m = r.mul(e.b, S),
                        y = r.mul(n, o),
                        g = r.mul(i, s),
                        b = r.mul(a, u),
                        w = r.add(n, i),
                        v = r.add(o, s);
                      (w = r.mul(w, v)),
                        (v = r.add(y, g)),
                        (w = r.sub(w, v)),
                        (v = r.add(n, a));
                      let B = r.add(o, u);
                      return (
                        (v = r.mul(v, B)),
                        (B = r.add(y, b)),
                        (v = r.sub(v, B)),
                        (B = r.add(i, a)),
                        (l = r.add(s, u)),
                        (B = r.mul(B, l)),
                        (l = r.add(g, b)),
                        (B = r.sub(B, l)),
                        (d = r.mul(p, v)),
                        (l = r.mul(m, b)),
                        (d = r.add(l, d)),
                        (l = r.sub(g, d)),
                        (d = r.add(g, d)),
                        (c = r.mul(l, d)),
                        (g = r.add(y, y)),
                        (g = r.add(g, y)),
                        (b = r.mul(p, b)),
                        (v = r.mul(m, v)),
                        (g = r.add(g, b)),
                        (b = r.sub(y, b)),
                        (b = r.mul(p, b)),
                        (v = r.add(v, b)),
                        (y = r.mul(g, v)),
                        (c = r.add(c, y)),
                        (y = r.mul(B, v)),
                        (l = r.mul(w, l)),
                        (l = r.sub(l, y)),
                        (y = r.mul(w, g)),
                        (d = r.mul(B, d)),
                        new h(l, c, (d = r.add(d, y)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(t) {
                      return m.wNAFCached(this, c, t, (t) => {
                        let e = r.invertBatch(t.map((t) => t.pz));
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(h.fromAffine);
                      });
                    }
                    multiplyUnsafe(t) {
                      let n = h.ZERO;
                      if (t === F) return n;
                      if ((u(t), t === G)) return this;
                      let { endo: i } = e;
                      if (!i) return m.unsafeLadder(this, t);
                      let {
                          k1neg: a,
                          k1: o,
                          k2neg: s,
                          k2: l,
                        } = i.splitScalar(t),
                        c = n,
                        f = n,
                        d = this;
                      for (; o > F || l > F; )
                        o & G && (c = c.add(d)),
                          l & G && (f = f.add(d)),
                          (d = d.double()),
                          (o >>= G),
                          (l >>= G);
                      return (
                        a && (c = c.negate()),
                        s && (f = f.negate()),
                        (f = new h(r.mul(f.px, i.beta), f.py, f.pz)),
                        c.add(f)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      u(t);
                      let { endo: a } = e;
                      if (a) {
                        let {
                            k1neg: e,
                            k1: o,
                            k2neg: s,
                            k2: u,
                          } = a.splitScalar(t),
                          { p: l, f: c } = this.wNAF(o),
                          { p: f, f: d } = this.wNAF(u);
                        (l = m.constTimeNegate(e, l)),
                          (f = m.constTimeNegate(s, f)),
                          (f = new h(r.mul(f.px, a.beta), f.py, f.pz)),
                          (n = l.add(f)),
                          (i = c.add(d));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return h.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = h.BASE,
                        i = (t, e) =>
                          e !== F && e !== G && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        a = i(this, e).add(i(t, r));
                      return a.is0() ? void 0 : a;
                    }
                    toAffine(t) {
                      let { px: e, py: n, pz: i } = this,
                        a = this.is0();
                      null == t && (t = a ? r.ONE : r.inv(i));
                      let o = r.mul(e, t),
                        s = r.mul(n, t),
                        u = r.mul(i, t);
                      if (a) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                      return { x: o, y: s };
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === G) return !0;
                      if (r) return r(h, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === G
                        ? this
                        : r
                        ? r(h, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return this.assertValidity(), n(h, this, t);
                    }
                    toHex(t = !0) {
                      return i.ci(this.toRawBytes(t));
                    }
                  }
                  (h.BASE = new h(e.Gx, e.Gy, r.ONE)),
                    (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
                  let p = e.nBitLength,
                    m = (function (t, e) {
                      let r = (t, e) => {
                          let r = e.negate();
                          return t ? r : e;
                        },
                        n = (t) => ({
                          windows: Math.ceil(e / t) + 1,
                          windowSize: 2 ** (t - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(e, r) {
                          let n = t.ZERO,
                            i = e;
                          for (; r > x; )
                            r & I && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= I);
                          return n;
                        },
                        precomputeWindow(t, e) {
                          let { windows: r, windowSize: i } = n(e),
                            a = [],
                            o = t,
                            s = o;
                          for (let t = 0; t < r; t++) {
                            (s = o), a.push(s);
                            for (let t = 1; t < i; t++)
                              (s = s.add(o)), a.push(s);
                            o = s.double();
                          }
                          return a;
                        },
                        wNAF(e, i, a) {
                          let { windows: o, windowSize: s } = n(e),
                            u = t.ZERO,
                            l = t.BASE,
                            c = BigInt(2 ** e - 1),
                            f = 2 ** e,
                            d = BigInt(e);
                          for (let t = 0; t < o; t++) {
                            let e = t * s,
                              n = Number(a & c);
                            (a >>= d), n > s && ((n -= f), (a += I));
                            let o = e + Math.abs(n) - 1,
                              h = t % 2 != 0,
                              p = n < 0;
                            0 === n
                              ? (l = l.add(r(h, i[e])))
                              : (u = u.add(r(p, i[o])));
                          }
                          return { p: u, f: l };
                        },
                        wNAFCached(t, e, r, n) {
                          let i = t._WINDOW_SIZE || 1,
                            a = e.get(t);
                          return (
                            a ||
                              ((a = this.precomputeWindow(t, i)),
                              1 !== i && e.set(t, n(a))),
                            this.wNAF(i, a, r)
                          );
                        },
                      };
                    })(h, e.endo ? Math.ceil(p / 2) : p);
                  return {
                    CURVE: e,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: l,
                    weierstrassEquation: o,
                    isWithinCurveOrder: s,
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let a = e.toAffine(),
                      o = r.toBytes(a.x),
                      s = i.eV;
                    return n
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(a.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      o = t.subarray(1);
                    if (e === a && (2 === n || 3 === n)) {
                      let t;
                      let e = i.bytesToNumberBE(o);
                      if (!(F < e && e < r.ORDER))
                        throw Error("Point is not on curve");
                      let a = f(e);
                      try {
                        t = r.sqrt(a);
                      } catch (t) {
                        throw Error(
                          "Point is not on curve" +
                            (t instanceof Error ? ": " + t.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & G) === G) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === s && 4 === n)
                      return {
                        x: r.fromBytes(o.subarray(0, r.BYTES)),
                        y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${a} compressed bytes or ${s} uncompressed bytes`
                    );
                  },
                }),
                m = (t) => i.ci(i.tL(t, e.nByteLength)),
                y = (t, e, r) => i.bytesToNumberBE(t.slice(e, r));
              class w {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new w(
                    y((t = (0, i.ql)("compactSignature", t, 2 * r)), 0, r),
                    y(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = A.toSig((0, i.ql)("DER", t));
                  return new w(e, r);
                }
                assertValidity() {
                  if (!h(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!h(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(t) {
                  return new w(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: a, s: o, recovery: s } = this,
                    c = E((0, i.ql)("msgHash", t));
                  if (null == s || ![0, 1, 2, 3].includes(s))
                    throw Error("recovery id invalid");
                  let f = 2 === s || 3 === s ? a + e.n : a;
                  if (f >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & s) == 0 ? "02" : "03",
                    h = l.fromHex(d + m(f)),
                    y = p(f, n),
                    g = u(-c * y),
                    b = u(o * y),
                    w = l.BASE.multiplyAndAddUnsafe(h, g, b);
                  if (!w) throw Error("point at infinify");
                  return w.assertValidity(), w;
                }
                hasHighS() {
                  return this.s > n >> G;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new w(this.r, u(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return i.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return A.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return i.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return m(this.r) + m(this.s);
                }
              }
              function v(t) {
                let e = i._t(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === a || n === s
                  : r
                  ? n === 2 * a || n === 2 * s
                  : t instanceof l;
              }
              let B =
                  e.bits2int ||
                  function (t) {
                    let r = i.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                E =
                  e.bits2int_modN ||
                  function (t) {
                    return u(B(t));
                  },
                N = i.dQ(e.nBitLength);
              function k(t) {
                if ("bigint" != typeof t) throw Error("bigint expected");
                if (!(F <= t && t < N))
                  throw Error(`bigint expected < 2^${e.nBitLength}`);
                return i.tL(t, e.nByteLength);
              }
              let C = { lowS: e.lowS, prehash: !1 },
                q = { lowS: e.lowS, prehash: !1 };
              return (
                l.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return l.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (v(t)) throw Error("first arg must be private key");
                    if (!v(e)) throw Error("second arg must be public key");
                    return l.fromHex(e).multiply(c(t)).toRawBytes(r);
                  },
                  sign: function (t, a, o = C) {
                    let { seed: s, k2sig: f } = (function (t, a, o = C) {
                      if (["recovered", "canonical"].some((t) => t in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: s, randomBytes: f } = e,
                        { lowS: d, prehash: m, extraEntropy: y } = o;
                      null == d && (d = !0),
                        (t = (0, i.ql)("msgHash", t)),
                        m && (t = (0, i.ql)("prehashed msgHash", s(t)));
                      let g = E(t),
                        b = c(a),
                        v = [k(b), k(g)];
                      if (null != y && !1 !== y) {
                        let t = !0 === y ? f(r.BYTES) : y;
                        v.push((0, i.ql)("extraEntropy", t));
                      }
                      return {
                        seed: i.eV(...v),
                        k2sig: function (t) {
                          let e = B(t);
                          if (!h(e)) return;
                          let r = p(e, n),
                            i = l.BASE.multiply(e).toAffine(),
                            a = u(i.x);
                          if (a === F) return;
                          let o = u(r * u(g + a * b));
                          if (o === F) return;
                          let s = (i.x === a ? 0 : 2) | Number(i.y & G),
                            c = o;
                          if (d && o > n >> G)
                            (c = o > n >> G ? u(-o) : o), (s ^= 1);
                          return new w(a, c, s);
                        },
                      };
                    })(t, a, o);
                    return i.n$(e.hash.outputLen, e.nByteLength, e.hmac)(s, f);
                  },
                  verify: function (t, r, a, o = q) {
                    let s, c;
                    if (
                      ((r = (0, i.ql)("msgHash", r)),
                      (a = (0, i.ql)("publicKey", a)),
                      "strict" in o)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: f, prehash: d } = o;
                    try {
                      if ("string" == typeof t || i._t(t))
                        try {
                          c = w.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof A.Err)) throw e;
                          c = w.fromCompact(t);
                        }
                      else if (
                        "object" == typeof t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        c = new w(e, r);
                      } else throw Error("PARSE");
                      s = l.fromHex(a);
                    } catch (t) {
                      if ("PARSE" === t.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (f && c.hasHighS()) return !1;
                    d && (r = e.hash(r));
                    let { r: h, s: m } = c,
                      y = E(r),
                      g = p(m, n),
                      b = u(y * g),
                      v = u(h * g),
                      B = l.BASE.multiplyAndAddUnsafe(s, b, v)?.toAffine();
                    return !!B && u(B.x) === h;
                  },
                  ProjectivePoint: l,
                  Signature: w,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return c(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let t = b(e.n);
                      return (function (t, e, r = !1) {
                        let n = t.length,
                          a = g(e),
                          s = b(e);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            `expected ${s}-1024 bytes of input, got ${n}`
                          );
                        let u =
                          d(
                            r ? (0, i.bytesToNumberBE)(t) : (0, i.ty)(t),
                            e - o
                          ) + o;
                        return r ? (0, i.S5)(u, a) : (0, i.tL)(u, a);
                      })(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = l.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => E(e, t, (0, v.eV)(...r)),
              randomBytes: v.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: L,
            n: q,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -T * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  a = $(e * t, q),
                  o = $(-r * t, q),
                  s = d(t - a * e - o * n, q),
                  u = d(-a * r - o * e, q),
                  l = s > i,
                  c = u > i;
                if ((l && (s = q - s), c && (u = q - u), s > i || u > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: l, k1: s, k2neg: c, k2: u };
              },
            },
          },
          n.J
        );
      BigInt(0), O.ProjectivePoint;
    },
    3868: function (t, e, r) {
      r.d(e, {
        J: function () {
          return d;
        },
      });
      var n = r(41656),
        i = r(15448);
      let a = (t, e, r) => (t & e) ^ (~t & r),
        o = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class s extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: a } = this,
            o = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < o; ) {
            let s = Math.min(a - this.pos, o - n);
            if (s === a) {
              let e = (0, i.GL)(t);
              for (; a <= o - n; n += a) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + s), this.pos),
              (this.pos += s),
              (n += s),
              this.pos === a && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: a, isLE: o } = this,
            { pos: s } = this;
          (e[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let t = s; t < a; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              a = BigInt(4294967295),
              o = Number((r >> i) & a),
              s = Number(r & a),
              u = n ? 4 : 0,
              l = n ? 0 : 4;
            t.setUint32(e + u, o, n), t.setUint32(e + l, s, n);
          })(r, a - 8, BigInt(8 * this.length), o),
            this.process(r, 0);
          let u = (0, i.GL)(t),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = l / 4,
            f = this.get();
          if (c > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < c; t++) u.setUint32(4 * t, f[t], o);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: a,
            pos: o,
          } = this;
          return (
            (t.length = n),
            (t.pos = o),
            (t.finished = i),
            (t.destroyed = a),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
      let u = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        l = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        c = new Uint32Array(64);
      class f extends s {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | l[0]),
            (this.B = 0 | l[1]),
            (this.C = 0 | l[2]),
            (this.D = 0 | l[3]),
            (this.E = 0 | l[4]),
            (this.F = 0 | l[5]),
            (this.G = 0 | l[6]),
            (this.H = 0 | l[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: a, G: o, H: s } = this;
          return [t, e, r, n, i, a, o, s];
        }
        set(t, e, r, n, i, a, o, s) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | a),
            (this.G = 0 | o),
            (this.H = 0 | s);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) c[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = c[t - 15],
              r = c[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              a = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            c[t] = (a + c[t - 7] + n + c[t - 16]) | 0;
          }
          let { A: r, B: n, C: s, D: l, E: f, F: d, G: h, H: p } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (p +
                  ((0, i.np)(f, 6) ^ (0, i.np)(f, 11) ^ (0, i.np)(f, 25)) +
                  a(f, d, h) +
                  u[t] +
                  c[t]) |
                0,
              m =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  o(r, n, s)) |
                0;
            (p = h),
              (h = d),
              (d = f),
              (f = (l + e) | 0),
              (l = s),
              (s = n),
              (n = r),
              (r = (e + m) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (s = (s + this.C) | 0),
            (l = (l + this.D) | 0),
            (f = (f + this.E) | 0),
            (d = (d + this.F) | 0),
            (h = (h + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, s, l, f, d, h, p);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let d = (0, i.hE)(() => new f());
    },
  },
]);
