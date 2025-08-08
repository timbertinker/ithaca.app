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
      (e._sentryDebugIds[t] = "9ed44c65-04a8-41d7-b23c-b0d6d152c201"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9ed44c65-04a8-41d7-b23c-b0d6d152c201"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2973],
  {
    21050: function (e, t, n) {
      var s = n(85893);
      t.Z = (e) => {
        let { color: t = "#9D9DAA", className: n = "" } = e;
        return (0, s.jsxs)("svg", {
          className: n,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M16 10L12 14",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
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
    22973: function (e, t, n) {
      n.r(t);
      var s = n(85893),
        r = n(67294),
        a = n(41664),
        d = n.n(a),
        i = n(54950),
        c = n(21050),
        o = n(15418),
        l = n(59731),
        u = n(6850),
        h = n.n(u),
        f = n(39332);
      t.default = (e) => {
        let { onClick: t } = e,
          n = (0, f.usePathname)(),
          [a, u] = (0, r.useState)(0),
          {
            ithacaSDK: p,
            isAuthenticated: b,
            openOrdersCount: w,
          } = (0, l.qr)(),
          { tradingPageTab: k } = (0, l.xc)(),
          { navigationItems: g } = (0, i.K)(),
          x = (e) => {
            if ("#" === e || !n) return !1;
            let t = e.split("/")[1].split("?")[0];
            return "/" === e ? n === e : n.startsWith("/".concat(t));
          };
        (0, r.useEffect)(() => {
          b ? p.orders.clientOpenOrders().then((e) => u(e.length)) : u(0);
        }, [b]),
          (0, r.useEffect)(() => u(w), [w]);
        let y = (e, n) => {
          !e &&
            "#" !== n &&
            (o.Z.track("Menu interactions", { path: n }), t && t());
        };
        return (0, s.jsx)("nav", {
          className: h().nav,
          children: g.map((e) => {
            let { titleKey: t, disabled: r, path: i, displayText: o } = e,
              l = "/trading" === i ? "".concat(i, "/").concat(k) : i;
            return (0, s.jsxs)(
              d(),
              {
                href: r ? n : l,
                className: " ".concat(
                  x(i)
                    ? "tw-text-primary"
                    : r
                    ? h().disabled
                    : "tw-text-ithaca-white-40"
                ),
                title: t,
                onClick: () => y(r, i),
                children: [
                  o,
                  "More" === o && (0, s.jsx)(c.Z, {}),
                  "Dashboard" === o &&
                    a > 0 &&
                    (0, s.jsx)("span", { className: h().badge, children: a }),
                ],
              },
              t
            );
          }),
        });
      };
    },
  },
]);
