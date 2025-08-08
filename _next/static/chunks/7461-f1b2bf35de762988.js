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
      (e._sentryDebugIds[t] = "5cd49cc3-e2ec-493e-bb7f-3fb84da4c922"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5cd49cc3-e2ec-493e-bb7f-3fb84da4c922"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7461],
  {
    98494: function (e, t, r) {
      r.d(t, {
        v: function () {
          return s;
        },
      });
      var n = r(54511);
      let s = (0, r(86164).a)({
        ...n.i,
        id: 10,
        name: "OP Mainnet",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.optimism.io"] } },
        blockExplorers: {
          default: {
            name: "Optimism Explorer",
            url: "https://optimistic.etherscan.io",
            apiUrl: "https://api-optimistic.etherscan.io/api",
          },
        },
        contracts: {
          ...n.i.contracts,
          disputeGameFactory: {
            1: { address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9" },
          },
          l2OutputOracle: {
            1: { address: "0xdfe97868233d1aa22e815a266982f2cf17685a27" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 4286263,
          },
          portal: {
            1: { address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed" },
          },
          l1StandardBridge: {
            1: { address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1" },
          },
        },
        sourceId: 1,
      });
    },
    68597: function (e, t, r) {
      r.d(t, {
        d: function () {
          return d;
        },
      });
      var n = r(78863),
        s = r(36117);
      class i extends s.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = r(32357),
        o = r(60229),
        l = r(96070);
      let c = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = r(22319);
      function d(e, t = {}) {
        let {
          batch: r,
          fetchOptions: s,
          key: d = "http",
          name: f = "HTTP JSON-RPC",
          onFetchRequest: x,
          onFetchResponse: h,
          retryDelay: w,
        } = t;
        return ({ chain: p, retryCount: C, timeout: b }) => {
          let { batchSize: y = 1e3, wait: m = 0 } =
              "object" == typeof r ? r : {},
            N = t.retryCount ?? C,
            v = b ?? t.timeout ?? 1e4,
            g = e || p?.rpcUrls.default.http[0];
          if (!g) throw new i();
          let P = (function (e, t = {}) {
            return {
              async request(r) {
                let {
                    body: s,
                    onRequest: i = t.onRequest,
                    onResponse: a = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = r,
                  d = { ...(t.fetchOptions ?? {}), ...(r.fetchOptions ?? {}) },
                  { headers: f, method: x, signal: h } = d;
                try {
                  let t;
                  let r = await (0, o.F)(
                    async ({ signal: t }) => {
                      let r = {
                          ...d,
                          body: Array.isArray(s)
                            ? (0, l.P)(
                                s.map((e) => ({
                                  jsonrpc: "2.0",
                                  id: e.id ?? c.take(),
                                  ...e,
                                }))
                              )
                            : (0, l.P)({
                                jsonrpc: "2.0",
                                id: s.id ?? c.take(),
                                ...s,
                              }),
                          headers: { "Content-Type": "application/json", ...f },
                          method: x || "POST",
                          signal: h || (u > 0 ? t : null),
                        },
                        n = new Request(e, r);
                      return i && (await i(n)), await fetch(e, r);
                    },
                    {
                      errorInstance: new n.W5({ body: s, url: e }),
                      timeout: u,
                      signal: !0,
                    }
                  );
                  if (
                    (a && (await a(r)),
                    r.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    t = await r.json();
                  else {
                    t = await r.text();
                    try {
                      t = JSON.parse(t || "{}");
                    } catch (e) {
                      if (r.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!r.ok)
                    throw new n.Gg({
                      body: s,
                      details: (0, l.P)(t.error) || r.statusText,
                      headers: r.headers,
                      status: r.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof n.Gg || t instanceof n.W5) throw t;
                  throw new n.Gg({ body: s, cause: t, url: e });
                }
              },
            };
          })(g, { fetchOptions: s, onRequest: x, onResponse: h, timeout: v });
          return (0, u.q)(
            {
              key: d,
              name: f,
              async request({ method: e, params: t }) {
                let s = { method: e, params: t },
                  { schedule: i } = (0, a.S)({
                    id: g,
                    wait: m,
                    shouldSplitBatch: (e) => e.length > y,
                    fn: (e) => P.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  o = async (e) => (r ? i(e) : [await P.request({ body: e })]),
                  [{ error: l, result: c }] = await o(s);
                if (l) throw new n.bs({ body: s, error: l, url: g });
                return c;
              },
              retryCount: N,
              retryDelay: w,
              timeout: v,
              type: "http",
            },
            { fetchOptions: s, url: g }
          );
        };
      }
    },
    54511: function (e, t, r) {
      r.d(t, {
        i: function () {
          return k;
        },
      });
      var n = r(95946),
        s = r(43310),
        i = r(6073),
        a = r(30866);
      let o = {
        block: (0, s.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = i.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? n.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, i.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, n.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, a.dI)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, n.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, n.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, n.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var l = r(26087),
        c = r(49321),
        u = r(57040),
        d = r(92106),
        f = r(7529),
        x = r(33639),
        h = r(60169),
        w = r(4499),
        p = r(34603),
        C = r(64446),
        b = r(61836),
        y = r(6458),
        m = r(50676),
        N = r(36117),
        v = r(66226),
        g = r(80377),
        P = r(26445),
        G = r(39135),
        S = r(3972);
      function T(e) {
        let { chainId: t, maxPriorityFeePerGas: r, maxFeePerGas: n, to: s } = e;
        if (t <= 0) throw new g.hJ({ chainId: t });
        if (s && !(0, c.U)(s)) throw new l.b({ address: s });
        if (n && n > m.zL) throw new P.Hh({ maxFeePerGas: n });
        if (r && n && r > n)
          throw new P.cs({ maxFeePerGas: n, maxPriorityFeePerGas: r });
      }
      var E = r(82994);
      function F(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let r = 0; r < e.length; r++) {
          let { address: n, storageKeys: s } = e[r];
          for (let e = 0; e < s.length; e++)
            if (s[e].length - 2 != 64) throw new x.JC({ storageKey: s[e] });
          if (!(0, c.U)(n, { strict: !1 })) throw new l.b({ address: n });
          t.push([n, s]);
        }
        return t;
      }
      function U(e, t) {
        let r = t ?? e,
          { v: n, yParity: s } = r;
        if (void 0 === r.r || void 0 === r.s || (void 0 === n && void 0 === s))
          return [];
        let i = (0, b.f)(r.r),
          a = (0, b.f)(r.s);
        return [
          "number" == typeof s
            ? s
              ? (0, d.NC)(1)
              : "0x"
            : 0n === n
            ? "0x"
            : 1n === n
            ? (0, d.NC)(1)
            : 27n === n
            ? "0x"
            : (0, d.NC)(1),
          "0x00" === i ? "0x" : i,
          "0x00" === a ? "0x" : a,
        ];
      }
      let k = {
        contracts: {
          gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F",
          },
          l1Block: { address: "0x4200000000000000000000000000000000000015" },
          l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007",
          },
          l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014",
          },
          l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010",
          },
          l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016",
          },
        },
        formatters: o,
        serializers: {
          transaction: function (e, t) {
            return "deposit" === e.type || void 0 !== e.sourceHash
              ? (function (e) {
                  !(function (e) {
                    let { from: t, to: r } = e;
                    if (t && !(0, c.U)(t)) throw new l.b({ address: t });
                    if (r && !(0, c.U)(r)) throw new l.b({ address: r });
                  })(e);
                  let {
                      sourceHash: t,
                      data: r,
                      from: n,
                      gas: s,
                      isSystemTx: i,
                      mint: a,
                      to: o,
                      value: x,
                    } = e,
                    h = [
                      t,
                      n,
                      o ?? "0x",
                      a ? (0, d.NC)(a) : "0x",
                      x ? (0, d.NC)(x) : "0x",
                      s ? (0, d.NC)(s) : "0x",
                      i ? "0x1" : "0x",
                      r ?? "0x",
                    ];
                  return (0, u.SM)(["0x7e", (0, f.LV)(h)]);
                })(e)
              : (function (e, t) {
                  let r = (0, E.l)(e);
                  return "eip1559" === r
                    ? (function (e, t) {
                        let {
                          chainId: r,
                          gas: n,
                          nonce: s,
                          to: i,
                          value: a,
                          maxFeePerGas: o,
                          maxPriorityFeePerGas: l,
                          accessList: c,
                          data: x,
                        } = e;
                        T(e);
                        let h = F(c),
                          w = [
                            (0, d.NC)(r),
                            s ? (0, d.NC)(s) : "0x",
                            l ? (0, d.NC)(l) : "0x",
                            o ? (0, d.NC)(o) : "0x",
                            n ? (0, d.NC)(n) : "0x",
                            i ?? "0x",
                            a ? (0, d.NC)(a) : "0x",
                            x ?? "0x",
                            h,
                            ...U(e, t),
                          ];
                        return (0, u.SM)(["0x02", (0, f.LV)(w)]);
                      })(e, t)
                    : "eip2930" === r
                    ? (function (e, t) {
                        let {
                          chainId: r,
                          gas: n,
                          data: s,
                          nonce: i,
                          to: a,
                          value: o,
                          accessList: x,
                          gasPrice: h,
                        } = e;
                        !(function (e) {
                          let {
                            chainId: t,
                            maxPriorityFeePerGas: r,
                            gasPrice: n,
                            maxFeePerGas: s,
                            to: i,
                          } = e;
                          if (t <= 0) throw new g.hJ({ chainId: t });
                          if (i && !(0, c.U)(i)) throw new l.b({ address: i });
                          if (r || s)
                            throw new N.G(
                              "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                            );
                          if (n && n > m.zL)
                            throw new P.Hh({ maxFeePerGas: n });
                        })(e);
                        let w = F(x),
                          p = [
                            (0, d.NC)(r),
                            i ? (0, d.NC)(i) : "0x",
                            h ? (0, d.NC)(h) : "0x",
                            n ? (0, d.NC)(n) : "0x",
                            a ?? "0x",
                            o ? (0, d.NC)(o) : "0x",
                            s ?? "0x",
                            w,
                            ...U(e, t),
                          ];
                        return (0, u.SM)(["0x01", (0, f.LV)(p)]);
                      })(e, t)
                    : "eip4844" === r
                    ? (function (e, t) {
                        let {
                          chainId: r,
                          gas: s,
                          nonce: i,
                          to: a,
                          value: o,
                          maxFeePerBlobGas: l,
                          maxFeePerGas: c,
                          maxPriorityFeePerGas: x,
                          accessList: b,
                          data: m,
                        } = e;
                        !(function (e) {
                          let { blobVersionedHashes: t } = e;
                          if (t) {
                            if (0 === t.length) throw new v.RX();
                            for (let e of t) {
                              let t = (0, G.d)(e),
                                r = (0, n.ly)((0, S.tP)(e, 0, 1));
                              if (32 !== t)
                                throw new v.xd({ hash: e, size: t });
                              if (r !== y.l)
                                throw new v.cJ({ hash: e, version: r });
                            }
                          }
                          T(e);
                        })(e);
                        let N = e.blobVersionedHashes,
                          g = e.sidecars;
                        if (e.blobs && (void 0 === N || void 0 === g)) {
                          let t =
                              "string" == typeof e.blobs[0]
                                ? e.blobs
                                : e.blobs.map((e) => (0, d.ci)(e)),
                            r = e.kzg,
                            n = (0, h.P)({ blobs: t, kzg: r });
                          if (
                            (void 0 === N && (N = (0, p.C)({ commitments: n })),
                            void 0 === g)
                          ) {
                            let e = (0, w.y)({
                              blobs: t,
                              commitments: n,
                              kzg: r,
                            });
                            g = (0, C.j)({
                              blobs: t,
                              commitments: n,
                              proofs: e,
                            });
                          }
                        }
                        let P = F(b),
                          E = [
                            (0, d.NC)(r),
                            i ? (0, d.NC)(i) : "0x",
                            x ? (0, d.NC)(x) : "0x",
                            c ? (0, d.NC)(c) : "0x",
                            s ? (0, d.NC)(s) : "0x",
                            a ?? "0x",
                            o ? (0, d.NC)(o) : "0x",
                            m ?? "0x",
                            P,
                            l ? (0, d.NC)(l) : "0x",
                            N ?? [],
                            ...U(e, t),
                          ],
                          k = [],
                          L = [],
                          R = [];
                        if (g)
                          for (let e = 0; e < g.length; e++) {
                            let { blob: t, commitment: r, proof: n } = g[e];
                            k.push(t), L.push(r), R.push(n);
                          }
                        return (0, u.SM)([
                          "0x03",
                          g ? (0, f.LV)([E, k, L, R]) : (0, f.LV)(E),
                        ]);
                      })(e, t)
                    : "eip7702" === r
                    ? (function (e, t) {
                        let {
                          authorizationList: r,
                          chainId: n,
                          gas: s,
                          nonce: i,
                          to: a,
                          value: o,
                          maxFeePerGas: x,
                          maxPriorityFeePerGas: h,
                          accessList: w,
                          data: p,
                        } = e;
                        !(function (e) {
                          let { authorizationList: t } = e;
                          if (t)
                            for (let e of t) {
                              let { contractAddress: t, chainId: r } = e;
                              if (!(0, c.U)(t)) throw new l.b({ address: t });
                              if (r <= 0) throw new g.hJ({ chainId: r });
                            }
                          T(e);
                        })(e);
                        let C = F(w),
                          b = (function (e) {
                            if (!e || 0 === e.length) return [];
                            let t = [];
                            for (let r of e) {
                              let {
                                contractAddress: e,
                                chainId: n,
                                nonce: s,
                                ...i
                              } = r;
                              t.push([
                                (0, d.NC)(n),
                                e,
                                s ? (0, d.NC)(s) : "0x",
                                ...U({}, i),
                              ]);
                            }
                            return t;
                          })(r);
                        return (0, u.SM)([
                          "0x04",
                          (0, f.LV)([
                            (0, d.NC)(n),
                            i ? (0, d.NC)(i) : "0x",
                            h ? (0, d.NC)(h) : "0x",
                            x ? (0, d.NC)(x) : "0x",
                            s ? (0, d.NC)(s) : "0x",
                            a ?? "0x",
                            o ? (0, d.NC)(o) : "0x",
                            p ?? "0x",
                            C,
                            b,
                            ...U(e, t),
                          ]),
                        ]);
                      })(e, t)
                    : (function (e, t) {
                        let {
                          chainId: r = 0,
                          gas: n,
                          data: s,
                          nonce: i,
                          to: a,
                          value: o,
                          gasPrice: u,
                        } = e;
                        !(function (e) {
                          let {
                            chainId: t,
                            maxPriorityFeePerGas: r,
                            gasPrice: n,
                            maxFeePerGas: s,
                            to: i,
                          } = e;
                          if (i && !(0, c.U)(i)) throw new l.b({ address: i });
                          if (void 0 !== t && t <= 0)
                            throw new g.hJ({ chainId: t });
                          if (r || s)
                            throw new N.G(
                              "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                            );
                          if (n && n > m.zL)
                            throw new P.Hh({ maxFeePerGas: n });
                        })(e);
                        let h = [
                          i ? (0, d.NC)(i) : "0x",
                          u ? (0, d.NC)(u) : "0x",
                          n ? (0, d.NC)(n) : "0x",
                          a ?? "0x",
                          o ? (0, d.NC)(o) : "0x",
                          s ?? "0x",
                        ];
                        if (t) {
                          let e = (() => {
                              if (t.v >= 35n)
                                return (t.v - 35n) / 2n > 0
                                  ? t.v
                                  : 27n + (35n === t.v ? 0n : 1n);
                              if (r > 0)
                                return BigInt(2 * r) + BigInt(35n + t.v - 27n);
                              let e = 27n + (27n === t.v ? 0n : 1n);
                              if (t.v !== e) throw new x.vl({ v: t.v });
                              return e;
                            })(),
                            n = (0, b.f)(t.r),
                            s = (0, b.f)(t.s);
                          h = [
                            ...h,
                            (0, d.NC)(e),
                            "0x00" === n ? "0x" : n,
                            "0x00" === s ? "0x" : s,
                          ];
                        } else r > 0 && (h = [...h, (0, d.NC)(r), "0x", "0x"]);
                        return (0, f.LV)(h);
                      })(e, t);
                })(e, t);
          },
        },
      };
    },
    60229: function (e, t, r) {
      r.d(t, {
        F: function () {
          return n;
        },
      });
      function n(
        e,
        { errorInstance: t = Error("timed out"), timeout: r, signal: n }
      ) {
        return new Promise((s, i) => {
          (async () => {
            let a;
            try {
              let o = new AbortController();
              r > 0 &&
                (a = setTimeout(() => {
                  n ? o.abort() : i(t);
                }, r)),
                s(await e({ signal: o?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && i(t), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
    },
  },
]);
