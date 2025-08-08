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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "044f3f7d-9832-4f17-8908-804c4acfedfd"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-044f3f7d-9832-4f17-8908-804c4acfedfd"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5181],
    {
      39149: function (e, r, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/pricing/options",
          function () {
            return s(46119);
          },
        ]);
      },
      46119: function (e, r, s) {
        "use strict";
        s.r(r),
          s.d(r, {
            default: function () {
              return m;
            },
          });
        var a = s(85893),
          n = s(40119),
          i = s(59731),
          l = s(13880),
          t = s(36305),
          c = s(98414),
          d = s(45974),
          o = s(18666),
          u = s(93967),
          _ = s.n(u),
          h = s(45338),
          w = s(58373),
          x = s.n(w),
          f = (e) => {
            let { index: r, data: s } = e,
              n = (0, i.qr)((e) => e.underlyingCurrency),
              l = (0, o.p6)("".concat(s.economics.expiry), o.Nn, o.KJ),
              {
                bestBid: t,
                bestAsk: c,
                lastPrice: u,
                askVolume: w,
                bidVolume: f,
              } = s,
              b = () =>
                (0, a.jsxs)("div", {
                  className: x().table,
                  children: [
                    (0, a.jsx)("h1", {
                      children: 0 === r ? "Next Auction" : l,
                    }),
                    (0, a.jsxs)("div", {
                      className: x().header,
                      children: [
                        (0, a.jsx)("div", {
                          className: x().cell,
                          children: "Bid",
                        }),
                        (0, a.jsx)("div", {
                          className: x().cell,
                          children: "Ask",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: _()(x().row, "tw-h-[54px]", {
                        [x().darkRow]: r % 2 == 0 && 0 !== r,
                      }),
                      children: [
                        (0, a.jsx)(d.Z, {
                          className: "!tw-w-1/2",
                          textClassName: "tw-text-ithaca-green-30",
                          value: t ? (0, h.Yr)(t, 1) : "-",
                          depthValue: f ? (0, h.Yr)(f, 3) : "-",
                          currencyIcon: n,
                        }),
                        (0, a.jsx)(d.Z, {
                          className: "!tw-w-1/2",
                          textClassName: "tw-text-ithaca-red-20",
                          value: c ? (0, h.Yr)(c, 1) : "-",
                          depthValue: w ? (0, h.Yr)(w, 3) : "-",
                          currencyIcon: n,
                        }),
                      ],
                    }),
                  ],
                });
            return 0 === r
              ? (0, a.jsxs)("div", {
                  className: x().tableWithAuctionPrice,
                  children: [
                    b(),
                    (0, a.jsxs)("div", {
                      className: x().lastPrice,
                      children: [
                        (0, a.jsx)("div", {
                          className: x().header,
                          children: "Last Auction Price",
                        }),
                        (0, a.jsx)("div", {
                          className: _()(
                            x().cell,
                            "tw-flex tw-h-[54px] tw-items-center tw-justify-center"
                          ),
                          children: null == u ? void 0 : u.toFixed(2),
                        }),
                      ],
                    }),
                  ],
                })
              : b();
          },
          b = () => {
            let { forwards: e, spot: r } = (0, n.h)();
            return (0, a.jsx)("div", {
              className: x().wrapper,
              children:
                r &&
                [r, ...e].map((e, r) =>
                  (0, a.jsx)(f, { index: r, data: e }, r)
                ),
            });
          },
          j = s(74458),
          p = s(13001),
          N = s.n(p),
          m = () => {
            let { options: e, digitalOptions: r, isPending: s } = (0, n.h)(),
              d = (0, i.qr)((e) => e.underlyingCurrency);
            return (0, a.jsx)(t.Z, {
              children: (0, a.jsxs)("div", {
                className: N().tablesWrapper,
                children: [
                  (0, a.jsxs)("div", {
                    className: N().optionsWrapper,
                    children: [
                      (0, a.jsxs)(l.Z, {
                        className: N().tableContainer,
                        children: [
                          (0, a.jsx)("h1", { children: "Options" }),
                          (0, a.jsx)(j.Z, {
                            isPending: s,
                            children: (0, a.jsx)(c.Z, {
                              data: e,
                              currency: d,
                              digitals: !1,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(l.Z, {
                        className: N().tableContainer,
                        children: [
                          (0, a.jsx)("h1", { children: "Digital Options" }),
                          (0, a.jsx)(j.Z, {
                            isPending: s,
                            children: (0, a.jsx)(c.Z, {
                              data: r,
                              currency: "USDC",
                              digitals: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)(l.Z, {
                    className: N().tableContainer,
                    children: [
                      (0, a.jsx)("h1", { children: "Forwards" }),
                      (0, a.jsx)(b, {}),
                    ],
                  }),
                ],
              }),
            });
          };
      },
      58373: function (e) {
        e.exports = {
          wrapper: "ForwardsTable_wrapper__qJt_P",
          tableWithAuctionPrice: "ForwardsTable_tableWithAuctionPrice__LUqoT",
          table: "ForwardsTable_table__ts0vE",
          header: "ForwardsTable_header__eeh7Y",
          lastPrice: "ForwardsTable_lastPrice__l343j",
          cell: "ForwardsTable_cell__FuMvB",
          row: "ForwardsTable_row__rAV_k",
          darkRow: "ForwardsTable_darkRow__7tt0V",
          bid: "ForwardsTable_bid__YVgDc",
          ask: "ForwardsTable_ask__uFN2l",
        };
      },
    },
    function (e) {
      e.O(
        0,
        [
          6342, 9261, 4442, 5675, 7410, 1371, 6322, 1664, 9849, 52, 8776, 579,
          8833, 9156, 9083, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 39149));
        }
      ),
        (_N_E = e.O());
    },
  ]);
