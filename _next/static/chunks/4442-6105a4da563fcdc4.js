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
      (e._sentryDebugIds[t] = "fd178bcd-21d6-418b-9119-342e838856fa"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-fd178bcd-21d6-418b-9119-342e838856fa"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4442],
  {
    53250: function (e, t, n) {
      var r = n(67294),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        c = r.useState,
        o = r.useEffect,
        u = r.useLayoutEffect,
        a = r.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = c({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
              return (
                u(
                  function () {
                    (i.value = n), (i.getSnapshot = t), s(i) && l({ inst: i });
                  },
                  [e, n, t]
                ),
                o(
                  function () {
                    return (
                      s(i) && l({ inst: i }),
                      e(function () {
                        s(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                a(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    50139: function (e, t, n) {
      var r = n(67294),
        i = n(61688),
        c =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = i.useSyncExternalStore,
        u = r.useRef,
        a = r.useEffect,
        s = r.useMemo,
        l = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var f = u(null);
        if (null === f.current) {
          var d = { hasValue: !1, value: null };
          f.current = d;
        } else d = f.current;
        var h = o(
          e,
          (f = s(
            function () {
              function e(e) {
                if (!a) {
                  if (
                    ((a = !0), (o = e), (e = r(e)), void 0 !== i && d.hasValue)
                  ) {
                    var t = d.value;
                    if (i(t, e)) return (u = t);
                  }
                  return (u = e);
                }
                if (((t = u), c(o, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n) ? t : ((o = e), (u = n));
              }
              var o,
                u,
                a = !1,
                s = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          f[1]
        );
        return (
          a(
            function () {
              (d.hasValue = !0), (d.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    61688: function (e, t, n) {
      e.exports = n(53250);
    },
    52798: function (e, t, n) {
      e.exports = n(50139);
    },
    52425: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          c = e.chains.find((e) => e.id === n?.chainId),
          o = e.state.status;
        switch (o) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: c,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: c,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: o,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: c,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: o,
            };
        }
      }
    },
    37003: function (e, t, n) {
      n.d(t, {
        L: function () {
          return c;
        },
      });
      var r = n(88819),
        i = n(81946);
      function c(e, t) {
        let { chainId: n, ...c } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.L, "readContract")(c);
      }
    },
    97995: function (e, t, n) {
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(97405),
        i = n(9884),
        c = n(81946);
      async function o(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: o, ...u } = t,
          a = e.getClient({ chainId: r });
        return (0, c.s)(
          a,
          i.A,
          "multicall"
        )({ allowFailure: n, contracts: o, ...u });
      }
      var u = n(37003);
      async function a(e, t) {
        let { allowFailure: n = !0, blockNumber: i, blockTag: c, ...a } = t,
          s = t.contracts;
        try {
          let t = {};
          for (let [n, r] of s.entries()) {
            let i = r.chainId ?? e.state.chainId;
            t[i] || (t[i] = []), t[i]?.push({ contract: r, index: n });
          }
          let r = (
              await Promise.all(
                Object.entries(t).map(([t, r]) =>
                  o(e, {
                    ...a,
                    allowFailure: n,
                    blockNumber: i,
                    blockTag: c,
                    chainId: Number.parseInt(t),
                    contracts: r.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            u = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return r.reduce((e, t, n) => (e && (e[u[n]] = t), e), []);
        } catch (o) {
          if (o instanceof r.uq) throw o;
          let t = () =>
            s.map((t) => (0, u.L)(e, { ...t, blockNumber: i, blockTag: c }));
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
    },
    33397: function (e, t, n) {
      n.d(t, {
        u: function () {
          return c;
        },
      });
      var r = n(74751),
        i = n(52425);
      function c(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, i.D)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...i } = e,
              { connector: c, ...o } = t;
            return (0, r.v)(i, o) && n?.id === c?.id && n?.uid === c?.uid;
          },
        });
      }
    },
    7066: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
      });
      var r,
        i,
        c = n(79983);
      let o = () => `@wagmi/core@${c.i}`;
      var u = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class a extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return o();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof a
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof a && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return u(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? u(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    36100: function (e, t, n) {
      n.d(t, {
        OP: function () {
          return a;
        },
        if: function () {
          return c;
        },
        kq: function () {
          return o;
        },
      });
      var r = n(24139),
        i = n(74751);
      function c(e, t) {
        return (0, i.v)(e, t) ? e : (0, r.Q$)(e, t);
      }
      function o(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!u(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!(u(n) && n.hasOwnProperty("isPrototypeOf"));
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function a(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: c,
          maxPages: o,
          meta: u,
          networkMode: a,
          queryFn: s,
          queryHash: l,
          queryKey: f,
          queryKeyHashFn: d,
          retry: h,
          retryDelay: y,
          structuralSharing: b,
          getPreviousPageParam: g,
          getNextPageParam: p,
          initialPageParam: v,
          _optimisticResults: m,
          enabled: w,
          notifyOnChangeProps: S,
          placeholderData: O,
          refetchInterval: j,
          refetchIntervalInBackground: I,
          refetchOnMount: P,
          refetchOnReconnect: E,
          refetchOnWindowFocus: C,
          retryOnMount: M,
          select: _,
          staleTime: x,
          suspense: D,
          throwOnError: k,
          config: q,
          connector: A,
          query: R,
          ...N
        } = e;
        return N;
      }
    },
    74751: function (e, t, n) {
      n.d(t, {
        v: function () {
          return function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let c = Object.keys(t);
              if ((r = c.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(n, c[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = c[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          };
        },
      });
    },
    81946: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
    },
    79983: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "2.13.8";
    },
    99931: function (e, t, n) {
      n.d(t, {
        V: function () {
          return u;
        },
        F: function () {
          return a;
        },
      });
      var r = n(67294);
      let i = !1;
      async function c(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let c = {};
        for (let [, t] of e.state.connections) c[t.connector.id] = 1;
        n && (c[n] = 0);
        let o =
            Object.keys(c).length > 0
              ? [...r].sort((e, t) => (c[e.id] ?? 10) - (c[t.id] ?? 10))
              : r,
          u = !1,
          a = [],
          s = [];
        for (let t of o) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || s.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(u ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: u ? e.current : t.uid, connections: n };
            }),
            a.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            s.push(n),
            (u = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (u
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (i = !1),
          a
        );
      }
      function o(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: o = !0,
          } = e,
          { onMount: u } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  if (e._internal.ssr) {
                    await e._internal.store.persist.rehydrate();
                    let t = e._internal.mipd
                      ?.getProviders()
                      .map(e._internal.connectors.providerDetailToConnector)
                      .map(e._internal.connectors.setup);
                    e._internal.connectors.setState((e) => [
                      ...e,
                      ...(t ?? []),
                    ]);
                  }
                  r
                    ? c(e)
                    : e.storage &&
                      e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: o });
        n._internal.ssr || u();
        let a = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (a.current && n._internal.ssr)
              return (
                u(),
                () => {
                  a.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let u = (0, r.createContext)(void 0);
      function a(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          o,
          e,
          (0, r.createElement)(u.Provider, { value: n }, t)
        );
      }
    },
    92321: function (e, t, n) {
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(33397),
        i = n(52425),
        c = n(37122),
        o = n(74751),
        u = n(67294),
        a = n(52798);
      let s = (e) => "object" == typeof e && !Array.isArray(e);
      function l(e = {}) {
        let t = (0, c.Z)(e);
        return (function (e, t, n = t, r = o.v) {
          let i = (0, u.useRef)([]),
            c = (0, a.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (s(e) && s(t) && i.current.length) {
                  for (let n of i.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, u.useMemo)(() => {
            if (s(c)) {
              let e = { ...c },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(n) || i.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return c;
          }, [c]);
        })(
          (e) => (0, r.u)(t, { onChange: e }),
          () => (0, i.D)(t)
        );
      }
    },
    12185: function (e, t, n) {
      n.d(t, {
        K: function () {
          return v;
        },
      });
      var r = n(97405),
        i = n(95946),
        c = n(61836),
        o = n(15229),
        u = n(88930),
        a = n(81946),
        s = n(84192);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(s.Bd[e]);
      }
      var f = n(97995);
      async function d(e, t) {
        let {
          address: n,
          blockNumber: s,
          blockTag: f,
          chainId: d,
          token: y,
          unit: b = "ether",
        } = t;
        if (y)
          try {
            return h(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: y,
            });
          } catch (t) {
            if (t instanceof r.uq) {
              let t = await h(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: y,
                }),
                r = (0, i.rR)((0, c.f)(t.symbol, { dir: "right" }));
              return { ...t, symbol: r };
            }
            throw t;
          }
        let g = e.getClient({ chainId: d }),
          p = (0, a.s)(g, u.s, "getBalance"),
          v = await p(
            s ? { address: n, blockNumber: s } : { address: n, blockTag: f }
          ),
          m = e.chains.find((e) => e.id === d) ?? g.chain;
        return {
          decimals: m.nativeCurrency.decimals,
          formatted: (0, o.b)(v, l(b)),
          symbol: m.nativeCurrency.symbol,
          value: v,
        };
      }
      async function h(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: c,
            unit: u,
          } = t,
          a = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: c,
          },
          [s, d, h] = await (0, f.J)(e, {
            allowFailure: !1,
            contracts: [
              { ...a, functionName: "balanceOf", args: [n], chainId: r },
              { ...a, functionName: "decimals", chainId: r },
              { ...a, functionName: "symbol", chainId: r },
            ],
          }),
          y = (0, o.b)(s ?? "0", l(u ?? d));
        return { decimals: d, formatted: y, symbol: h, value: s };
      }
      var y = n(36100),
        b = n(82451),
        g = n(82002),
        p = n(37122);
      function v(e = {}) {
        let { address: t, query: n = {} } = e,
          r = (0, p.Z)(e),
          i = (0, g.x)({ config: r }),
          c = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await d(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, y.OP)(e)];
              })(t),
            };
          })(r, { ...e, chainId: e.chainId ?? i }),
          o = !!(t && (n.enabled ?? !0));
        return (0, b.aM)({ ...n, ...c, enabled: o });
      }
    },
    82002: function (e, t, n) {
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, {
        x: function () {
          return o;
        },
      });
      var i = n(67294),
        c = n(37122);
      function o(e = {}) {
        let t = (0, c.Z)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    37122: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(67294),
        i = n(99931),
        c = n(7066);
      let o = () => "wagmi@2.12.16";
      class u extends c.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return o();
        }
      }
      class a extends u {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function s(e = {}) {
        let t = e.config ?? (0, r.useContext)(i.V);
        if (!t) throw new a();
        return t;
      }
    },
    82451: function (e, t, n) {
      n.d(t, {
        aM: function () {
          return c;
        },
      });
      var r = n(88144),
        i = n(36100);
      function c(e) {
        let t = (0, r.a)({ ...e, queryKeyHashFn: i.kq });
        return (t.queryKey = e.queryKey), t;
      }
    },
  },
]);
