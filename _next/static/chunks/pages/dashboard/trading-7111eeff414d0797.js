!(function () {
  try {
    var n =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "a54023fb-3349-4973-97aa-1c141f21ce0d"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-a54023fb-3349-4973-97aa-1c141f21ce0d"));
  } catch (n) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1070],
    {
      19073: function (n, e, d) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/dashboard/trading",
          function () {
            return d(5671);
          },
        ]);
      },
    },
    function (n) {
      n.O(
        0,
        [
          5128, 6342, 9261, 4442, 5675, 7410, 1371, 9342, 2592, 4782, 6322,
          9773, 1664, 9849, 8026, 7461, 52, 7972, 497, 8776, 6746, 579, 8833,
          9156, 8755, 3797, 2199, 5335, 2888, 9774, 179,
        ],
        function () {
          return n((n.s = 19073));
        }
      ),
        (_N_E = n.O());
    },
  ]);
