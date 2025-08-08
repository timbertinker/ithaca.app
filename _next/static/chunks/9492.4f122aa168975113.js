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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "0c1698bc-f5bf-4a22-ab16-9dadda5da805"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0c1698bc-f5bf-4a22-ab16-9dadda5da805"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9492],
  {
    20204: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return g;
          },
        });
      var t = a(85893),
        o = a(67294),
        d = a(32671),
        r = a(89462),
        s = a(20544),
        l = a(45145),
        c = a(16247);
      let i = c.Q.Mainnet,
        u = c.Q.Devnet,
        f = {
          "solana.ithacaprotocol.io": i,
          "solana.canary.ithacanoemon.tech": u,
          localhost: u,
        },
        b = () => {
          var e;
          return null !== (e = f[window.location.hostname]) && void 0 !== e
            ? e
            : i;
        };
      var y = a(82649),
        h = a(88144),
        w = a(67930),
        _ = a(65440),
        p = a(72809);
      a(96714);
      var g = (e) => {
        let { children: n } = e,
          { data: a, isLoading: c } = (0, h.a)({
            queryKey: ["config"],
            queryFn: y.Q2,
            staleTime: w.ne,
            refetchOnWindowFocus: !1,
          }),
          i = (0, o.useMemo)(() => [new l.O()], []),
          u = (0, o.useMemo)(
            () =>
              (null == a ? void 0 : a.SOLANA_DEVNET_URL)
                ? a.SOLANA_DEVNET_URL
                : (0, p.clusterApiUrl)(b()),
            [a]
          );
        return c
          ? (0, t.jsx)(_.Z, { type: "lg" })
          : (0, t.jsx)(d.U, {
              endpoint: u,
              children: (0, t.jsx)(r.n, {
                wallets: i,
                autoConnect: !0,
                children: (0, t.jsx)(s.s, { children: n }),
              }),
            });
      };
    },
  },
]);
