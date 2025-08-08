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
      (e._sentryDebugIds[t] = "f1f90733-4e84-4a14-9769-44339e5a4d48"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f1f90733-4e84-4a14-9769-44339e5a4d48"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8238],
  {
    88238: function (e, t, n) {
      n.d(t, {
        Nr: function () {
          return o;
        },
        m9: function () {
          return u;
        },
      });
      var r = n(67294);
      function u() {
        let [e, t] = r.useState(null);
        return [
          e,
          r.useCallback((e) => {
            (async () => {
              try {
                if (navigator?.clipboard?.writeText)
                  await navigator.clipboard.writeText(e), t(e);
                else throw Error("writeText not supported");
              } catch (n) {
                !(function (e) {
                  let t = document.createElement("textarea");
                  (t.value = e),
                    document.body.appendChild(t),
                    t.select(),
                    document.execCommand("copy"),
                    document.body.removeChild(t);
                })(e),
                  t(e);
              }
            })();
          }, []),
        ];
      }
      function o(e, t) {
        let [n, u] = r.useState(e);
        return (
          r.useEffect(() => {
            let n = setTimeout(() => {
              u(e);
            }, t);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          n
        );
      }
    },
  },
]);
