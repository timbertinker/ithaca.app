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
      (e._sentryDebugIds[t] = "2880323b-3ba0-4892-bb84-fc086b065a3b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2880323b-3ba0-4892-bb84-fc086b065a3b"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9591],
  {
    9591: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return S;
          },
        });
      var s = r(85893),
        a = r(27484),
        n = r.n(a),
        i = r(32010),
        c = r(67294),
        o = r(30202),
        u = r(27037),
        l = r(72536),
        d = r(7506),
        h = r(24139);
      function f(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var p = class extends d.l {
          #e;
          #t;
          #r;
          #s;
          #a;
          #n;
          #i;
          #c;
          #o = [];
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#s = r),
              (this.#r = []),
              (this.#a = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#a.forEach((e) => {
                e.subscribe((t) => {
                  this.#u(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#a.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#r = e),
              (this.#s = t),
              u.V.batch(() => {
                let e = this.#a,
                  t = this.#l(this.#r);
                (this.#o = t),
                  t.forEach((e) =>
                    e.observer.setOptions(e.defaultedQueryOptions, r)
                  );
                let s = t.map((e) => e.observer),
                  a = s.map((e) => e.getCurrentResult()),
                  n = s.some((t, r) => t !== e[r]);
                (e.length !== s.length || n) &&
                  ((this.#a = s),
                  (this.#t = a),
                  this.hasListeners() &&
                    (f(e, s).forEach((e) => {
                      e.destroy();
                    }),
                    f(s, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#u(e, t);
                      });
                    }),
                    this.#d()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#a.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#a;
          }
          getOptimisticResult(e, t) {
            let r = this.#l(e),
              s = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions)
              );
            return [s, (e) => this.#h(e ?? s, t), () => this.#f(s, r)];
          }
          #f(e, t) {
            return t.map((r, s) => {
              let a = e[s];
              return r.defaultedQueryOptions.notifyOnChangeProps
                ? a
                : r.observer.trackResult(a, (e) => {
                    t.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #h(e, t) {
            return t
              ? ((this.#n && this.#t === this.#c && t === this.#i) ||
                  ((this.#i = t),
                  (this.#c = this.#t),
                  (this.#n = (0, h.Q$)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #l(e) {
            let t = new Map(this.#a.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                let s = this.#e.defaultQueryOptions(e),
                  a = t.get(s.queryHash);
                a
                  ? r.push({ defaultedQueryOptions: s, observer: a })
                  : r.push({
                      defaultedQueryOptions: s,
                      observer: new l.z(this.#e, s),
                    });
              }),
              r
            );
          }
          #u(e, t) {
            let r = this.#a.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                let s = e.slice(0);
                return (s[t] = r), s;
              })(this.#t, r, t)),
              this.#d());
          }
          #d() {
            if (this.hasListeners()) {
              let e = this.#n,
                t = this.#f(this.#t, this.#o);
              e !== this.#h(t, this.#s?.combine) &&
                u.V.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        y = r(2762),
        b = r(37323),
        m = r(9160),
        v = r(44590),
        g = r(86290),
        w = r(59731),
        E = r(88144),
        A = r(67930);
      let C = () => {
        let {
            ithacaSDK: e,
            isAuthenticated: t,
            isAccountBlocked: r,
            updateAccountBlockedStatus: s,
          } = (0, w.qr)(),
          { data: a } = (0, E.a)({
            queryKey: ["checkAccountBlockedStatus"],
            queryFn: () => e.auth.getSession(),
            enabled: !!e && t && void 0 === r,
            refetchInterval: A.x6,
            select: (e) => e.riskScoreValidationStatus,
          });
        return (
          (0, c.useEffect)(() => {
            ("INVALID" === a || "GOOD" === a) && s("INVALID" === a);
          }, [a, s]),
          { accountBlockedData: a, isAccountBlocked: r }
        );
      };
      var k = r(36703),
        T = r(18666);
      let O = (e) => {
        let t,
          {
            currentCurrencyPair: r,
            systemInfo: s,
            spotPrices: a,
            contractList: i,
            contractsWithReferencePrices: c,
            referencePrices: o,
          } = e,
          [u, l] = r.split("/"),
          d = {
            underlying: s.currencyPrecision[u],
            strike: s.currencyPrecision[l],
          },
          h = a[r];
        i.forEach((e) => {
          c[e.contractId] = { ...c[e.contractId], ...e };
        }),
          o.forEach((e) => {
            c[e.contractId] = { ...c[e.contractId], ...e };
          });
        let f = Object.values(c).reduce((e, s) => {
            let {
              economics: { currencyPair: a, expiry: n, strike: i },
              payoff: c,
            } = s;
            return (
              "Spot" === c && a === r
                ? (t = s)
                : (e[a] || (e[a] = {}),
                  e[a][n] || (e[a][n] = {}),
                  e[a][n][c] || (e[a][n][c] = {}),
                  (!i || (i - h <= 750 && i - h >= -750)) &&
                    (e[a][n][c][null != i ? i : "-"] = s)),
              e
            );
          }, {}),
          p = Object.keys(f[r])
            .reduce(
              (e, t) => (
                Object.keys(f[r][t]).length > 4 &&
                  !n()().isAfter((0, T.xV)(t, T.Nn)) &&
                  e.push(parseInt(t)),
                e
              ),
              []
            )
            .sort();
        return {
          spotContract: t,
          currencyPrecision: d,
          filteredContractList: f,
          expiryList: p,
          currentSpotPrice: h,
        };
      };
      var S = (e) => {
        let { children: t } = e,
          {
            expiryList: r,
            setBasicData: a,
            setMaintenanceMode: d,
            ithacaSDK: h,
            currentCurrencyPair: f,
            contractsWithReferencePrices: E,
            currentExpiryDate: S,
            setCurrentExpiryDate: x,
            isAccountBlocked: R,
            isAuthenticated: L,
            setUserPointsData: P,
          } = (0, w.qr)(
            (0, i.N)((e) => ({
              expiryList: e.expiryList,
              setBasicData: e.setBasicData,
              setMaintenanceMode: e.setMaintenanceMode,
              ithacaSDK: e.ithacaSDK,
              currentCurrencyPair: e.currentCurrencyPair,
              contractsWithReferencePrices: e.contractsWithReferencePrices,
              currentExpiryDate: e.currentExpiryDate,
              setCurrentExpiryDate: e.setCurrentExpiryDate,
              isAccountBlocked: e.isAccountBlocked,
              isAuthenticated: e.isAuthenticated,
              setUserPointsData: e.setUserPointsData,
            }))
          ),
          q = (0, w.xc)((e) => e.savedSelectedExpiryDate),
          I = (0, o.NL)(),
          D = (0, c.useRef)(!1),
          N = (0, c.useRef)(null),
          { isAccountBlocked: Q } = C(),
          j = (function ({ queries: e, ...t }, r) {
            let s = (0, o.NL)(void 0),
              a = (0, y.S)(),
              n = (0, b._)(),
              i = c.useMemo(
                () =>
                  e.map((e) => {
                    let t = s.defaultQueryOptions(e);
                    return (
                      (t._optimisticResults = a ? "isRestoring" : "optimistic"),
                      t
                    );
                  }),
                [e, s, a]
              );
            i.forEach((e) => {
              (0, v.A8)(e), (0, m.pf)(e, n);
            }),
              (0, m.JN)(n);
            let [d] = c.useState(() => new p(s, i, t)),
              [h, f, w] = d.getOptimisticResult(i, t.combine),
              E = !a && !1 !== t.subscribed;
            c.useSyncExternalStore(
              c.useCallback(
                (e) => (E ? d.subscribe(u.V.batchCalls(e)) : g.Z),
                [d, E]
              ),
              () => d.getCurrentResult(),
              () => d.getCurrentResult()
            ),
              c.useEffect(() => {
                d.setQueries(i, t, { listeners: !1 });
              }, [i, t, d]);
            let A = h.some((e, t) => (0, v.SB)(i[t], e))
              ? h.flatMap((e, t) => {
                  let r = i[t];
                  if (r) {
                    let t = new l.z(s, r);
                    if ((0, v.SB)(r, e)) return (0, v.j8)(r, t, n);
                    (0, v.Z$)(e, a) && (0, v.j8)(r, t, n);
                  }
                  return [];
                })
              : [];
            if (A.length > 0) throw Promise.all(A);
            let C = h.find((e, t) => {
              let r = i[t];
              return (
                r &&
                (0, m.KJ)({
                  result: e,
                  errorResetBoundary: n,
                  throwOnError: r.throwOnError,
                  query: s.getQueryCache().get(r.queryHash),
                  suspense: r.suspense,
                })
              );
            });
            if (C?.error) throw C.error;
            return f(w());
          })({
            queries: [
              {
                queryKey: [A.L, "systemInfo"],
                enabled: !!h,
                queryFn: () => h.protocol.systemInfo(),
                gcTime: A.ne,
                staleTime: A.ne,
                meta: { persist: !0 },
              },
              {
                queryKey: [A.L, "contractList"],
                enabled: !!h,
                queryFn: () => h.protocol.contractList(),
                gcTime: A.ne,
                staleTime: A.ne,
                meta: { persist: !0 },
              },
              {
                queryKey: [A.L, "referencePrices"],
                enabled: !!h,
                queryFn: () => h.market.referencePrices(0, f),
                gcTime: A.ne,
                staleTime: A.ne,
                meta: { persist: !0 },
              },
              {
                queryKey: [A.L, "spotPrices"],
                enabled: !!h,
                queryFn: () => h.market.spotPrices(),
                gcTime: A.ne,
                staleTime: A.ne,
                meta: { persist: !0 },
              },
              {
                queryKey: ["referralCode"],
                enabled: !!L,
                queryFn: () => (0, k.Vd)(),
                gcTime: A.ne,
                staleTime: A.ne,
                meta: { persist: !0 },
              },
            ],
          }),
          [
            { data: G },
            { data: _, refetch: B },
            { data: M },
            { data: U },
            { data: V },
          ] = j,
          K = (0, c.useCallback)(() => {
            I.invalidateQueries({ queryKey: [A.L] });
          }, [I]),
          F = (0, c.useCallback)(() => {
            r.some((e) => n()().isAfter((0, T.xV)("".concat(e), T.Nn))) &&
              (I.clear(), K(), B());
          }, [r, K, I, B]);
        return ((0, c.useEffect)(() => {
          let e = j.some((e) => e.isError);
          e !== D.current && (D.current = e);
        }, [j, d]),
        (0, c.useEffect)(() => {
          F();
          let e = setInterval(F, 3e4);
          if (D.current) {
            let t = setTimeout(() => K(), A.x6);
            return () => {
              clearTimeout(t), clearInterval(e);
            };
          }
          if (
            j.slice(0, j.length - 1).every((e) => !!e.data) &&
            G &&
            _ &&
            M &&
            U
          )
            try {
              let e = O({
                currentCurrencyPair: f,
                systemInfo: G,
                spotPrices: U,
                contractList: _,
                contractsWithReferencePrices: E,
                referencePrices: M,
              });
              if (
                !e.currentSpotPrice ||
                !e.expiryList ||
                !e.currencyPrecision ||
                !e.filteredContractList
              ) {
                console.error("Missing required transformed data");
                return;
              }
              let r = {
                  currentSpotPrice: e.currentSpotPrice,
                  spotPrices: U,
                  expiryList: e.expiryList,
                  systemInfo: G,
                  spotContract: e.spotContract,
                  currencyPrecision: e.currencyPrecision,
                  contractList: e.filteredContractList,
                  allContracts: _,
                },
                s = N.current,
                i = JSON.stringify(r);
              if (
                (s !== i && ((N.current = i), a(r)),
                !S || n()().isAfter((0, T.xV)("".concat(S), T.Nn)))
              ) {
                var t;
                let r =
                  null !== (t = e.expiryList.find((e) => e === q)) &&
                  void 0 !== t
                    ? t
                    : e.expiryList[0];
                r !== S && x(r);
              }
            } catch (e) {
              K(), console.error(e);
            }
          return () => clearInterval(e);
        }, [j, f, E, q, F, G, _, M, U, K, S, a, x]),
        (0, c.useEffect)(() => {
          if (V) {
            var e, t, r, s, a;
            P({
              displayName:
                null === (e = V.data) || void 0 === e
                  ? void 0
                  : e.user.displayName,
              avatarUrl:
                (null === (t = V.data) || void 0 === t
                  ? void 0
                  : t.user.avatarUrl) || "",
              isAvatar:
                null === (r = V.data) || void 0 === r
                  ? void 0
                  : r.user.isAvatar,
              referralCode:
                null === (s = V.data) || void 0 === s
                  ? void 0
                  : s.user.referralCode,
              userBadges:
                null === (a = V.data) || void 0 === a ? void 0 : a.userBadges,
            });
          }
        }, [V, P]),
        R || Q)
          ? (0, s.jsx)("div", {
              children: (0, s.jsx)("div", {
                style: { position: "relative" },
                children: (0, s.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "50px",
                    paddingBottom: "100px",
                  },
                  children: (0, s.jsx)("div", { children: "Account Blocked" }),
                }),
              }),
            })
          : t;
      };
    },
    36703: function (e, t, r) {
      r.d(t, {
        AR: function () {
          return d;
        },
        Lf: function () {
          return E;
        },
        Lv: function () {
          return u;
        },
        Qy: function () {
          return h;
        },
        RT: function () {
          return g;
        },
        Vd: function () {
          return v;
        },
        X_: function () {
          return C;
        },
        Xu: function () {
          return l;
        },
        Zo: function () {
          return f;
        },
        Zp: function () {
          return A;
        },
        _p: function () {
          return w;
        },
        fE: function () {
          return y;
        },
        hO: function () {
          return k;
        },
        p: function () {
          return p;
        },
        sk: function () {
          return m;
        },
        yp: function () {
          return b;
        },
      });
      var s = r(49321),
        a = r(15418),
        n = r(82649);
      let i = async (e) => {
          let { method: t = "POST", data: r, path: s, noCache: a = !1 } = e;
          try {
            let e = await (0, n.Sp)("POINTS_URL"),
              i = {
                method: t,
                headers: {
                  "Content-Type": "application/json;charset=UTF-8",
                  Accept: "application/json, text/plain, */*",
                  "Cache-Control": a ? "no-cache" : "",
                },
                ...(r && { body: JSON.stringify(r) }),
              },
              c = await fetch("".concat(e, "/").concat(s), i),
              o = await c.json();
            if (!c.ok) {
              let e = Error();
              throw ((e.name = o.name), (e.message = o.message), e);
            }
            return { data: o };
          } catch (e) {
            return { error: e };
          }
        },
        c = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = localStorage.getItem("ithaca.session");
          if (t) return JSON.parse(t);
          if (e) return "";
          throw Error("No session info");
        },
        o = async (e) => {
          let t = { walletAddress: c().ethAddress, referralCode: e };
          return await i({ data: t, path: "users/user" });
        },
        u = async function (e) {
          var t;
          let r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = c();
          console.debug("GetUserData");
          let n = await i({
            method: "GET",
            path: "users/user?walletAddress=".concat(s.ethAddress),
            noCache: !0,
          });
          if (
            !r &&
            n.data &&
            !Object.keys(
              null == n
                ? void 0
                : null === (t = n.data) || void 0 === t
                ? void 0
                : t.user
            ).length
          ) {
            let { error: t } = await o(e);
            return t
              ? { error: t }
              : (e
                  ? a.Z.track("Referral wallet connect", { referralToken: e })
                  : a.Z.track("Wallet connect"),
                await u(e));
          }
          return n;
        },
        l = async () => {
          let e = c();
          return await i({
            method: "GET",
            path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
          });
        },
        d = async () => {
          let e = c();
          return await i({
            method: "GET",
            path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
          });
        },
        h = async () => {
          let e = c();
          return await i({
            method: "GET",
            path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
          });
        },
        f = async (e) => {
          let t = c();
          return await i({
            method: "GET",
            path: "auth/discord/callback?token="
              .concat(e, "&walletAddress=")
              .concat(t.ethAddress),
          });
        },
        p = async () => {
          let e = c();
          return await i({
            method: "GET",
            path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
          });
        },
        y = async (e) => {
          let { displayName: t, isAvatar: r, signature: a } = e,
            n = {
              walletAddress: c().ethAddress,
              displayName: (0, s.U)(t) ? t.toLowerCase() : t,
              isAvatar: r,
              signature: a,
            };
          return await i({ method: "PUT", path: "users/user", data: n });
        },
        b = async (e) =>
          await i({ method: "POST", path: "auth/farcaster/callback", data: e }),
        m = async (e) => {
          let {
              page: t,
              pageLimit: r,
              sortField: s,
              sortType: a,
              filterBy: n,
            } = e,
            o = {
              walletAddress: c().ethAddress,
              page: t,
              pageSize: r,
              sortField: s,
              sortType: a,
              ...("All" === n ? {} : { type: n }),
            };
          return await i({ data: o, path: "rewards/rewardsHistory" });
        },
        v = async () => {
          let e = c();
          return await i({
            method: "GET",
            path: "badges/profile?walletAddress=".concat(e.ethAddress),
          });
        },
        g = async () => await i({ method: "GET", path: "badges/all" }),
        w = async (e) =>
          await i({
            method: "GET",
            path: "users/get-referrals?referralCode=".concat(e),
          }),
        E = async (e) =>
          await i({ method: "POST", path: "stats/leaderboard24hr", data: e }),
        A = async (e) =>
          await i({ method: "POST", path: "stats/leaderboard", data: e }),
        C = async (e) =>
          await i({
            method: "GET",
            path: "stats/user?walletAddress=".concat(e),
          }),
        k = async (e, t) =>
          await i({
            method: "GET",
            path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
          });
    },
  },
]);
