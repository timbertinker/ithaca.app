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
      (e._sentryDebugIds[n] = "c264a703-7295-48bc-a1cb-5205aec1fb1c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c264a703-7295-48bc-a1cb-5205aec1fb1c"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1361],
    {
      320: function (e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/trading",
          function () {
            return t(64324);
          },
        ]);
      },
      64324: function (e, n, t) {
        "use strict";
        t.r(n);
        var c = t(85893),
          s = t(39332),
          u = t(59731),
          r = t(65440);
        n.default = () => {
          let e = (0, s.useRouter)(),
            n = (0, s.usePathname)().split("/"),
            { tradingPageTab: t } = (0, u.xc)();
          return (
            t !== n[2] && e.push("/trading/".concat(t)),
            (0, c.jsx)("div", {
              className: "tw-min-h-[85vh]",
              children: (0, c.jsx)(r.Z, { type: "lg" }),
            })
          );
        };
      },
    },
    function (e) {
      e.O(0, [2888, 9774, 179], function () {
        return e((e.s = 320));
      }),
        (_N_E = e.O());
    },
  ]);
