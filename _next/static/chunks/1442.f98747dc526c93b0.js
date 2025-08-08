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
      (e._sentryDebugIds[n] = "78d9b851-2601-4088-8881-6def28e3934a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-78d9b851-2601-4088-8881-6def28e3934a"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1442],
    {
      27888: function (e, n, t) {
        "use strict";
        var r = t(85893),
          s = t(80140),
          d = t.n(s);
        n.Z = (e) => {
          let { children: n } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("main", { className: d().Main, children: n }),
          });
        };
      },
      61442: function (e, n, t) {
        "use strict";
        t.r(n);
        var r = t(85893);
        t(67294);
        var s = t(59731),
          d = t(27888),
          i = t(65440);
        n.default = (e) => {
          let { children: n } = e,
            { isLoading: t, ithacaSDK: a } = (0, s.qr)();
          return !t && a
            ? n
            : (0, r.jsx)(d.Z, { children: (0, r.jsx)(i.Z, { type: "lg" }) });
        };
      },
      80140: function (e) {
        e.exports = { Main: "Main_Main__LAM6o" };
      },
    },
  ]);
