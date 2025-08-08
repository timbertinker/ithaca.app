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
      (e._sentryDebugIds[n] = "612d0407-2426-4a50-9261-0d469333184c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-612d0407-2426-4a50-9261-0d469333184c"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5732],
    {
      35732: function (e, n, r) {
        "use strict";
        r.r(n);
        var a = r(85893),
          p = r(93967),
          t = r.n(p),
          i = r(20053),
          _ = r.n(i),
          s = r(85292);
        n.default = function (e) {
          let { className: n, children: r } = e;
          return (0, a.jsxs)("div", {
            className: t()(n, _().appWrapper),
            children: [
              (0, a.jsx)("div", {
                className: t()("position-fixed inset-0", _().background),
              }),
              (0, a.jsx)(s.Z, {
                className: "position-absolute inset-0 pointer-none",
                children: (0, a.jsx)("div", { className: _().gradientOverlay }),
              }),
              r,
            ],
          });
        };
      },
      85292: function (e, n, r) {
        "use strict";
        var a = r(85893),
          p = r(93967),
          t = r.n(p),
          i = r(25448),
          _ = r.n(i);
        n.Z = (e) => {
          let { size: n = "xl", children: r, className: p } = e;
          return (0, a.jsx)("div", {
            className: t()(_().container, _()[n], p),
            children: r,
          });
        };
      },
      20053: function (e) {
        e.exports = {
          appWrapper: "AppWrapper_appWrapper__vfjL7",
          background: "AppWrapper_background__96tmM",
          container: "AppWrapper_container__hUO9q",
          rightShapeContainer: "AppWrapper_rightShapeContainer__QsmeY",
          gradientOverlay: "AppWrapper_gradientOverlay__qh_mu",
          leftShapeMove: "AppWrapper_leftShapeMove__7pYeG",
          rightShapeMove: "AppWrapper_rightShapeMove__79QAs",
        };
      },
      25448: function (e) {
        e.exports = {
          container: "Container_container__UXVBQ",
          sm: "Container_sm__119v_",
          md: "Container_md__yR97e",
          lg: "Container_lg__iMl4h",
          loader: "Container_loader__fHfSB",
        };
      },
    },
  ]);
