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
      (e._sentryDebugIds[t] = "2018864e-cab5-4ba4-9b11-1448afd4d716"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2018864e-cab5-4ba4-9b11-1448afd4d716"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1125],
    {
      87220: function (e, t, r) {
        "use strict";
        var s,
          n = r(67294);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var s in r)
                    ({}.hasOwnProperty.call(r, s) && (e[s] = r[s]));
                }
                return e;
              }).apply(null, arguments);
        }
        t.Z = function (e) {
          return n.createElement(
            "svg",
            l({ width: 7, height: 6, fill: "none" }, e),
            s ||
              (s = n.createElement("path", {
                fill: "#9D9DAA",
                d: "M3.5 6 .469.75H6.53z",
              }))
          );
        };
      },
      37154: function (e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/pricing/linear-combinations",
          function () {
            return r(69130);
          },
        ]);
      },
      40838: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return p;
          },
        });
        var s = r(85893),
          n = r(67294),
          l = r(80052),
          i = r(93967),
          c = r.n(i),
          a = r(15922),
          d = r(37422),
          u = r(67253),
          o = r(24514),
          h = r(86322),
          w = r(45303),
          f = r.n(w),
          x = (e) => {
            let {
                children: t,
                isOpen: r,
                side: l,
                align: i,
                offset: a,
                footer: w,
                currentStep: x,
                continueClick: m,
                skipClick: p,
              } = e,
              [b, v] = (0, n.useState)(r);
            return ((0, n.useEffect)(() => {
              v(r);
            }, [r]),
            x)
              ? (0, s.jsxs)(h.fC, {
                  open: b,
                  children: [
                    (0, s.jsx)(h.xz, {
                      asChild: !0,
                      children: (0, s.jsx)("div", { children: t }),
                    }),
                    (0, s.jsx)(h.VY, {
                      align: i,
                      side: l,
                      className: "".concat(
                        f().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: a,
                      children: (0, s.jsxs)(s.Fragment, {
                        children: [
                          u.R[x].title &&
                            (0, s.jsx)("div", {
                              className: c()(f().title, "tw-mb-1"),
                              children: u.R[x].title,
                            }),
                          (0, s.jsx)("div", {
                            className: f().message,
                            children: u.R[x].message,
                          }),
                          w ||
                            (0, s.jsxs)(o.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, s.jsx)("div", { className: "flexGrow" }),
                                (0, s.jsx)("div", {
                                  className: f().skipButton,
                                  onClick: p,
                                  children: "Skip",
                                }),
                                (0, s.jsx)(d.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: m,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, s.jsx)(h.Eh, { className: f().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, s.jsx)(s.Fragment, {});
          };
        let m = (0, n.forwardRef)((e, t) => {
          let {
              title: r,
              children: i,
              className: d,
              panelClassName: u,
              openOnClick: o = !1,
              leaveTimeout: h = 120,
              ...w
            } = e,
            f = (0, n.useRef)(null),
            m = t || f,
            p = (0, n.useRef)(null),
            b = (0, a.F)(),
            v = (0, n.useCallback)(
              (e) => {
                var t;
                o ||
                  (p.current && clearTimeout(p.current),
                  e || null === (t = m.current) || void 0 === t || t.click());
              },
              [o]
            ),
            j = (0, n.useCallback)(
              function (e, t) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!o || r) &&
                  (p.current && clearTimeout(p.current),
                  (p.current = window.setTimeout(() => {
                    e && t();
                  }, h)));
              },
              [o, h]
            );
          (0, n.useEffect)(
            () => () => {
              p.current && clearTimeout(p.current);
            },
            []
          );
          let k = (e, t) =>
            (0, s.jsxs)("div", {
              onMouseEnter: () => v(e),
              onMouseLeave: () => j(e, t),
              children: [
                (0, s.jsx)(l.O7, {
                  ref: m,
                  className: "tw-flex tw-outline-none",
                  children: r,
                }),
                (0, s.jsx)(l.Hi, {
                  anchor: "bottom",
                  className: c()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === b },
                    u
                  ),
                  children: n.cloneElement(i, {
                    closePopover: () => {
                      p.current && clearTimeout(p.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, s.jsx)(l.J2, {
            className: c()("tw-relative", d),
            children: (e) => {
              let { open: t, close: r } = e,
                n = k(t, r);
              if (w.isTutorialOpen) {
                var l, i;
                return (0, s.jsx)(x, {
                  skipClick:
                    null !== (l = w.handleSkipTutorialClick) && void 0 !== l
                      ? l
                      : () => {},
                  continueClick:
                    null !== (i = w.handleContinueTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: n,
                });
              }
              return n;
            },
          });
        });
        m.displayName = "HoverPopover";
        var p = m;
      },
      98315: function (e, t, r) {
        "use strict";
        r.d(t, {
          Zj: function () {
            return n;
          },
          v3: function () {
            return s;
          },
          wo: function () {
            return l;
          },
        });
        let s = (e, t) =>
            e.sort(
              (e, r) =>
                Math.abs(t - Number(e.value)) - Math.abs(t - Number(r.value))
            )[0].value,
          n = (e) => 100 * Math.round(e / 100),
          l = (e, t) => {
            let r = { barrierInStrikes: [], barrierOutStrikes: [] };
            if (!t) return r;
            let s = e.indexOf(t),
              n = Math.floor(e.length / 2),
              l = Math.floor(n / 2),
              i = { in: s + 1, out: s - 1 };
            for (let t = 0; t < n; t++)
              t < l
                ? r.barrierInStrikes.push(0)
                : (r.barrierInStrikes.push(e[i.in] || 0), i.in++);
            for (let t = 0; t < n; t++)
              t < l
                ? r.barrierOutStrikes.push(0)
                : (r.barrierOutStrikes.unshift(e[i.out] || 0), i.out--);
            return r;
          };
      },
      69130: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return O;
            },
          });
        var s = r(85893),
          n = r(40119),
          l = r(59731),
          i = r(13880),
          c = r(36305),
          a = r(93967),
          d = r.n(a),
          u = r(67294),
          o = r(32010),
          h = r(45870),
          w = r.n(h),
          f = r(70757),
          x = r(45338);
        let m = (e, t) => {
            let r = Number(t);
            return isNaN(r) || r <= 0 ? 0 : e ? r : 0;
          },
          p = (e, t) => {
            if (!t) return { callStrikes: [], putStrikes: [] };
            let r = Math.ceil(e.length / 2),
              s = [],
              n = [],
              l = e.indexOf(t),
              i = l + 1,
              c = l - 1;
            for (let t = 1; t <= r; t++)
              i >= e.length ? s.push(0) : s.push(e[i]), i++;
            for (let t = 1; t <= r; t++)
              c < 0 ? n.unshift(0) : n.unshift(e[c]), c--;
            return { callStrikes: s, putStrikes: n };
          },
          b = (e) => {
            let { strikes: t, selectedStrikeContract: r, data: s } = e,
              n = [],
              l = s.find(
                (e) => e.contractId === (null == r ? void 0 : r.contractId)
              );
            for (let e of t) {
              let t;
              let r = s.find((t) => t.economics.strike === e);
              if (
                r &&
                l &&
                ((t = {
                  ...r,
                  bestAsk: null,
                  bestBid: null,
                  modelPrice: l.referencePrice - r.referencePrice,
                }),
                (null == l ? void 0 : l.bestBid) &&
                  (null == l ? void 0 : l.bestAsk) &&
                  (null == r ? void 0 : r.bestAsk) &&
                  (null == r ? void 0 : r.bestBid))
              ) {
                let e = l.bestBid - r.bestAsk,
                  s = l.bestAsk - r.bestBid;
                (t.bestAsk = s), (t.bestBid = e);
              }
              n.push(t);
            }
            return n;
          };
        var v = r(45974),
          j = (e) => {
            let {
                data: t,
                type: r,
                strikes: n,
                currency: l,
                strike: i = 0,
                expiry: c,
              } = e,
              [a, o] = (0, u.useState)([]),
              h = "calls" === r ? "Call" : "Put",
              p = t.find(
                (e) =>
                  e.economics.strike === i &&
                  e.payoff === h &&
                  e.economics.expiry === c
              );
            return (
              (0, u.useEffect)(() => {
                (async () => {
                  p && o(b({ strikes: n, selectedStrikeContract: p, data: t }));
                })();
              }, [c, r, n, l, i]),
              (0, s.jsxs)("div", {
                className: w().table,
                children: [
                  (0, s.jsx)("h1", {
                    children: "calls" === r ? "Call Spreads" : "Put Spreads",
                  }),
                  (0, s.jsxs)("div", {
                    className: d()(w().header, "tw-px-6 tw-py-3", w()[r]),
                    children: [
                      (0, s.jsx)("div", {
                        className: d()(w().cell),
                        children: "Bid",
                      }),
                      (0, s.jsx)("div", {
                        className: d()(w().cell),
                        children: "Model",
                      }),
                      (0, s.jsx)("div", {
                        className: d()(w().cell),
                        children: "Ask",
                      }),
                    ],
                  }),
                  a.map((e, t) => {
                    let n =
                        !!(null == e ? void 0 : e.bestAsk) &&
                        !!(null == e ? void 0 : e.bestBid),
                      i = m(n, null == e ? void 0 : e.bestBid),
                      c = m(n, null == e ? void 0 : e.bestAsk);
                    return (0, s.jsxs)(
                      "div",
                      {
                        className: d()(
                          ""
                            .concat(w().row, " ")
                            .concat(w()[r], " ")
                            .concat(t % 2 == 1 && w().darkRow),
                          "tw-h-12"
                        ),
                        children: [
                          (0, s.jsx)(v.Z, {
                            textClassName: "tw-text-ithaca-green-30",
                            value: (0, x.Yr)(i, 3),
                            depthValue: (0, x.Yr)(
                              (null == e ? void 0 : e.bidVolume) || 0,
                              "USDC" === l ? 0 : 3
                            ),
                            currencyIcon: (0, f.XX)(l, "tw-size-2.5"),
                          }),
                          (0, s.jsx)("div", {
                            className: d()(
                              w().cell,
                              "tw-flex tw-items-center tw-justify-center tw-text-xs"
                            ),
                            children: (0, s.jsx)("span", {
                              children: (0, x.Yr)(
                                (null == e ? void 0 : e.modelPrice) || 0,
                                3
                              ),
                            }),
                          }),
                          (0, s.jsx)(v.Z, {
                            textClassName: "tw-text-ithaca-red-20",
                            value: (0, x.Yr)(c, 3),
                            depthValue: (0, x.Yr)(
                              (null == e ? void 0 : e.askVolume) || 0,
                              "USDC" === l ? 0 : 3
                            ),
                            currencyIcon: (0, f.XX)(l, "tw-size-2.5"),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                ],
              })
            );
          },
          k = r(40838),
          N = r(87220),
          g = r(98315),
          y = (e) => {
            let { currency: t, data: r } = e,
              { currentSpotPrice: n, currentExpiryDate: i } = (0, l.qr)(
                (0, o.N)((e) => ({
                  currentSpotPrice: e.currentSpotPrice,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              [c, a] = (0, u.useState)(() => (0, g.Zj)(n)),
              { calls: h, puts: f } = r,
              x = (0, u.useMemo)(() => {
                if (!r.calls.length || !r.puts.length) return [];
                let e = [];
                for (let t = c - 500; t <= c + 700; t += 100) e.push(t);
                return e;
              }, [c, r]),
              { callStrikes: m, putStrikes: b } = (0, u.useMemo)(
                () => p(x, c),
                [x, c]
              );
            return (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className: w().optionsTable,
                children: [
                  (0, s.jsx)(
                    j,
                    {
                      data: h,
                      type: "calls",
                      strikes: m,
                      currency: t,
                      strike: c,
                      expiry: i,
                    },
                    "calls"
                  ),
                  (0, s.jsxs)("div", {
                    className: w().strike,
                    children: [
                      (0, s.jsx)("div", {
                        className: w().header,
                        children: "Strike 2",
                      }),
                      (0, s.jsx)("div", {
                        className: w().strikes,
                        children: m.map((e, t) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: d()(
                                ""
                                  .concat(w().cell, " ")
                                  .concat(t % 2 == 1 && w().darkRow),
                                "tw-flex tw-h-12 tw-items-center tw-justify-center"
                              ),
                              children: e > 1 ? e : "-",
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: d()(
                      w().strike,
                      "tw-flex tw-min-h-full tw-flex-col"
                    ),
                    children: [
                      (0, s.jsx)(k.Z, {
                        panelClassName:
                          "tw-bg-none tw-text-white !tw-p-0 tw-border-none tw-bottom-0 tw-h-max",
                        title: (0, s.jsxs)("button", {
                          className: w().header,
                          children: ["Strike 1\xa0", (0, s.jsx)(N.Z, {})],
                        }),
                        children: (0, s.jsx)("div", {
                          className:
                            "tw-flex tw-flex-col tw-bg-[#202631]/80 tw-p-1",
                          children: x.map((e, t) =>
                            (0, s.jsx)(
                              "button",
                              {
                                onClick: () => a(e),
                                className: d()(
                                  "tw-rounded tw-px-6 tw-py-1 hover:tw-bg-white/10",
                                  { "tw-text-ithaca-green-30": e === c }
                                ),
                                children: e,
                              },
                              t
                            )
                          ),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "tw-relative tw-grow",
                        children: [
                          (0, s.jsx)("div", {
                            className: w().strikes,
                            children: b.map((e, t) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className: d()(
                                    ""
                                      .concat(w().cell, " ")
                                      .concat(t % 2 == 1 && w().darkRow),
                                    "tw-flex tw-h-12 tw-items-center tw-justify-center"
                                  ),
                                },
                                t
                              )
                            ),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "tw-absolute tw-bottom-2 tw-top-2 tw-flex tw-w-full tw-items-center tw-justify-center tw-border-l tw-border-r",
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: w().strike,
                    children: [
                      (0, s.jsx)("div", {
                        className: w().header,
                        children: "Strike 2 ",
                      }),
                      (0, s.jsx)("div", {
                        className: w().strikes,
                        children: b.map((e, t) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: d()(
                                ""
                                  .concat(w().cell, " ")
                                  .concat(t % 2 == 1 && w().darkRow),
                                "tw-flex  tw-h-12 tw-items-center tw-justify-center"
                              ),
                              children: e > 1 ? e : "-",
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsx)(
                    j,
                    {
                      data: f,
                      type: "puts",
                      strikes: b,
                      currency: t,
                      strike: c,
                      expiry: i,
                    },
                    "puts"
                  ),
                ],
              }),
            });
          },
          C = r(74458),
          S = r(13001),
          E = r.n(S),
          O = () => {
            let { isPending: e, options: t } = (0, n.h)(),
              r = (0, l.qr)((e) => e.underlyingCurrency);
            return (0, s.jsx)(c.Z, {
              children: (0, s.jsx)("div", {
                className: "tw-mx-auto tw-max-w-4xl tw-space-y-6",
                children: (0, s.jsxs)(i.Z, {
                  className: E().tableContainer,
                  children: [
                    (0, s.jsx)("h1", { children: "Spreads" }),
                    (0, s.jsx)(C.Z, {
                      isPending: e,
                      children: (0, s.jsx)(y, { data: t, currency: r }),
                    }),
                  ],
                }),
              }),
            });
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
          return e((e.s = 37154));
        }
      ),
        (_N_E = e.O());
    },
  ]);
