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
      (e._sentryDebugIds[t] = "1583729d-2cc2-4118-b55c-e5b340a0946c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1583729d-2cc2-4118-b55c-e5b340a0946c"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7245],
  {
    15741: function (e, t, n) {
      n.r(t),
        n.d(t, {
          OnboardingContext: function () {
            return i;
          },
          OnboardingProvider: function () {
            return s;
          },
        });
      var r = n(85893),
        d = n(67294),
        u = n(59731);
      let i = (0, d.createContext)({
          currentStep: void 0,
          isTutorialDisabled: !1,
        }),
        s = (e) => {
          let { children: t } = e,
            {
              currentTutorialStep: n,
              setCurrentTutorialStep: s,
              setTutorialDisabled: c,
              tutorialDisabled: a,
            } = (0, u.NV)(),
            [o, b] = (0, d.useState)(n),
            [f, l] = (0, d.useState)(a);
          return (
            (0, d.useEffect)(() => {
              l(a);
            }, [a]),
            (0, r.jsx)(i.Provider, {
              value: {
                currentStep: o,
                isTutorialDisabled: f,
                updateStep: (e) => {
                  b(e), s(e);
                },
                disableTutorial: () => {
                  c(), l(!0);
                },
              },
              children: t,
            })
          );
        };
    },
  },
]);
