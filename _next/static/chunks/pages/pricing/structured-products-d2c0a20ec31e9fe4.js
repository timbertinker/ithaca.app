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
      (e._sentryDebugIds[t] = "4763f8dd-2a10-440d-9dd2-ee339cc26cfe"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4763f8dd-2a10-440d-9dd2-ee339cc26cfe"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9118],
    {
      87220: function (e, t, s) {
        "use strict";
        var r,
          i = s(67294);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = arguments[t];
                  for (var r in s)
                    ({}.hasOwnProperty.call(s, r) && (e[r] = s[r]));
                }
                return e;
              }).apply(null, arguments);
        }
        t.Z = function (e) {
          return i.createElement(
            "svg",
            l({ width: 7, height: 6, fill: "none" }, e),
            r ||
              (r = i.createElement("path", {
                fill: "#9D9DAA",
                d: "M3.5 6 .469.75H6.53z",
              }))
          );
        };
      },
      55567: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/pricing/structured-products",
          function () {
            return s(88729);
          },
        ]);
      },
      40838: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return m;
          },
        });
        var r = s(85893),
          i = s(67294),
          l = s(80052),
          n = s(93967),
          c = s.n(n),
          a = s(15922),
          d = s(37422),
          o = s(67253),
          u = s(24514),
          f = s(86322),
          h = s(45303),
          b = s.n(h),
          v = (e) => {
            let {
                children: t,
                isOpen: s,
                side: l,
                align: n,
                offset: a,
                footer: h,
                currentStep: v,
                continueClick: w,
                skipClick: m,
              } = e,
              [k, x] = (0, i.useState)(s);
            return ((0, i.useEffect)(() => {
              x(s);
            }, [s]),
            v)
              ? (0, r.jsxs)(f.fC, {
                  open: k,
                  children: [
                    (0, r.jsx)(f.xz, {
                      asChild: !0,
                      children: (0, r.jsx)("div", { children: t }),
                    }),
                    (0, r.jsx)(f.VY, {
                      align: n,
                      side: l,
                      className: "".concat(
                        b().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: a,
                      children: (0, r.jsxs)(r.Fragment, {
                        children: [
                          o.R[v].title &&
                            (0, r.jsx)("div", {
                              className: c()(b().title, "tw-mb-1"),
                              children: o.R[v].title,
                            }),
                          (0, r.jsx)("div", {
                            className: b().message,
                            children: o.R[v].message,
                          }),
                          h ||
                            (0, r.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, r.jsx)("div", { className: "flexGrow" }),
                                (0, r.jsx)("div", {
                                  className: b().skipButton,
                                  onClick: m,
                                  children: "Skip",
                                }),
                                (0, r.jsx)(d.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: w,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, r.jsx)(f.Eh, { className: b().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)(r.Fragment, {});
          };
        let w = (0, i.forwardRef)((e, t) => {
          let {
              title: s,
              children: n,
              className: d,
              panelClassName: o,
              openOnClick: u = !1,
              leaveTimeout: f = 120,
              ...h
            } = e,
            b = (0, i.useRef)(null),
            w = t || b,
            m = (0, i.useRef)(null),
            k = (0, a.F)(),
            x = (0, i.useCallback)(
              (e) => {
                var t;
                u ||
                  (m.current && clearTimeout(m.current),
                  e || null === (t = w.current) || void 0 === t || t.click());
              },
              [u]
            ),
            p = (0, i.useCallback)(
              function (e, t) {
                let s =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || s) &&
                  (m.current && clearTimeout(m.current),
                  (m.current = window.setTimeout(() => {
                    e && t();
                  }, f)));
              },
              [u, f]
            );
          (0, i.useEffect)(
            () => () => {
              m.current && clearTimeout(m.current);
            },
            []
          );
          let j = (e, t) =>
            (0, r.jsxs)("div", {
              onMouseEnter: () => x(e),
              onMouseLeave: () => p(e, t),
              children: [
                (0, r.jsx)(l.O7, {
                  ref: w,
                  className: "tw-flex tw-outline-none",
                  children: s,
                }),
                (0, r.jsx)(l.Hi, {
                  anchor: "bottom",
                  className: c()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === k },
                    o
                  ),
                  children: i.cloneElement(n, {
                    closePopover: () => {
                      m.current && clearTimeout(m.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, r.jsx)(l.J2, {
            className: c()("tw-relative", d),
            children: (e) => {
              let { open: t, close: s } = e,
                i = j(t, s);
              if (h.isTutorialOpen) {
                var l, n;
                return (0, r.jsx)(v, {
                  skipClick:
                    null !== (l = h.handleSkipTutorialClick) && void 0 !== l
                      ? l
                      : () => {},
                  continueClick:
                    null !== (n = h.handleContinueTutorialClick) && void 0 !== n
                      ? n
                      : () => {},
                  currentStep: h.currentTutorialStep,
                  isOpen: h.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: i,
                });
              }
              return i;
            },
          });
        });
        w.displayName = "HoverPopover";
        var m = w;
      },
      98315: function (e, t, s) {
        "use strict";
        s.d(t, {
          Zj: function () {
            return i;
          },
          v3: function () {
            return r;
          },
          wo: function () {
            return l;
          },
        });
        let r = (e, t) =>
            e.sort(
              (e, s) =>
                Math.abs(t - Number(e.value)) - Math.abs(t - Number(s.value))
            )[0].value,
          i = (e) => 100 * Math.round(e / 100),
          l = (e, t) => {
            let s = { barrierInStrikes: [], barrierOutStrikes: [] };
            if (!t) return s;
            let r = e.indexOf(t),
              i = Math.floor(e.length / 2),
              l = Math.floor(i / 2),
              n = { in: r + 1, out: r - 1 };
            for (let t = 0; t < i; t++)
              t < l
                ? s.barrierInStrikes.push(0)
                : (s.barrierInStrikes.push(e[n.in] || 0), n.in++);
            for (let t = 0; t < i; t++)
              t < l
                ? s.barrierOutStrikes.push(0)
                : (s.barrierOutStrikes.unshift(e[n.out] || 0), n.out--);
            return s;
          };
      },
      88729: function (e, t, s) {
        "use strict";
        s.r(t),
          s.d(t, {
            default: function () {
              return I;
            },
          });
        var r = s(85893),
          i = s(40119),
          l = s(59731),
          n = s(13880),
          c = s(36305),
          a = s(93967),
          d = s.n(a),
          o = s(67294),
          u = s(32010),
          f = s(45870),
          h = s.n(f),
          b = s(45974);
        let v = (e) => {
            let {
                strikes: t,
                selectedStrikeContract: s,
                data: r,
                digitalsData: i,
              } = e,
              l = [],
              n = r.find(
                (e) => e.contractId === (null == s ? void 0 : s.contractId)
              );
            for (let e = 0; e < t.length; e++) {
              let s;
              let a = t[e],
                d = r.find((e) => e.economics.strike === a),
                o = i.find((e) => e.economics.strike === a);
              if (d && o && n) {
                var c;
                let e =
                  a -
                  (null !== (c = null == n ? void 0 : n.economics.strike) &&
                  void 0 !== c
                    ? c
                    : 0);
                (s = {
                  ...d,
                  bestAsk: null,
                  bestBid: null,
                  modelPrice: d.referencePrice + e * o.referencePrice,
                }),
                  (null == d ? void 0 : d.bestBid) &&
                    (null == d ? void 0 : d.bestAsk) &&
                    (null == o ? void 0 : o.bestAsk) &&
                    (null == o ? void 0 : o.bestBid) &&
                    ((s.bestBid = d.bestBid + e * o.bestBid),
                    (s.bestAsk = d.bestAsk + e * o.bestAsk));
              }
              l.push(s);
            }
            return l;
          },
          w = (e) => {
            let {
                strikes: t,
                selectedStrikeContract: s,
                data: r,
                digitalsData: i,
              } = e,
              l = [],
              n = r.find(
                (e) => e.contractId === (null == s ? void 0 : s.contractId)
              );
            for (let e = 0; e < t.length; e++) {
              let s;
              let a = t[e],
                d = r.find((e) => e.economics.strike === a),
                o = i.find((e) => e.economics.strike === a);
              if (d && o && n) {
                var c;
                let e =
                  (null !== (c = null == n ? void 0 : n.economics.strike) &&
                  void 0 !== c
                    ? c
                    : 0) - a;
                (s = {
                  ...d,
                  bestAsk: null,
                  bestBid: null,
                  modelPrice: d.referencePrice + e * o.referencePrice,
                }),
                  (null == d ? void 0 : d.bestBid) &&
                    (null == d ? void 0 : d.bestAsk) &&
                    (null == o ? void 0 : o.bestAsk) &&
                    (null == o ? void 0 : o.bestBid) &&
                    ((s.bestBid = d.bestBid + e * o.bestBid),
                    (s.bestAsk = d.bestAsk + e * o.bestAsk));
              }
              l.push(s);
            }
            return l;
          },
          m = (e) => {
            let {
                strikes: t,
                selectedStrikeContract: s,
                data: r,
                digitalsData: i,
              } = e,
              l = [],
              n = r.find(
                (e) => e.contractId === (null == s ? void 0 : s.contractId)
              );
            for (let e = 0; e < t.length; e++) {
              let s;
              let a = t[e],
                d = r.find((e) => e.economics.strike === a),
                o = i.find((e) => e.economics.strike === a);
              if (d && o && n) {
                var c;
                let e =
                  a -
                  (null !== (c = null == n ? void 0 : n.economics.strike) &&
                  void 0 !== c
                    ? c
                    : 0);
                if (
                  ((s = {
                    ...d,
                    bestAsk: null,
                    bestBid: null,
                    modelPrice:
                      n.referencePrice -
                      d.referencePrice -
                      e * o.referencePrice,
                  }),
                  (null == d ? void 0 : d.bestBid) &&
                    (null == d ? void 0 : d.bestAsk) &&
                    (null == o ? void 0 : o.bestAsk) &&
                    (null == o ? void 0 : o.bestBid) &&
                    (null == n ? void 0 : n.bestBid) &&
                    (null == n ? void 0 : n.bestAsk))
                ) {
                  let t = n.bestBid - d.bestAsk - e * o.bestAsk,
                    r = n.bestAsk - d.bestBid - e * o.bestBid;
                  (s.bestBid = t < 0 ? 0 : t), (s.bestAsk = r < 0 ? 0 : r);
                }
              }
              l.push(s);
            }
            return l;
          },
          k = (e) => {
            let {
                strikes: t,
                selectedStrikeContract: s,
                data: r,
                digitalsData: i,
              } = e,
              l = [],
              n = r.find(
                (e) => e.contractId === (null == s ? void 0 : s.contractId)
              );
            for (let e = 0; e < t.length; e++) {
              let s;
              let a = t[e],
                d = r.find((e) => e.economics.strike === a),
                o = i.find((e) => e.economics.strike === a);
              if (d && o && n) {
                var c;
                let e =
                  (null !== (c = null == n ? void 0 : n.economics.strike) &&
                  void 0 !== c
                    ? c
                    : 0) - a;
                if (
                  ((s = {
                    ...d,
                    bestAsk: null,
                    bestBid: null,
                    modelPrice:
                      n.referencePrice -
                      d.referencePrice -
                      e * o.referencePrice,
                  }),
                  (null == d ? void 0 : d.bestBid) &&
                    (null == d ? void 0 : d.bestAsk) &&
                    (null == o ? void 0 : o.bestAsk) &&
                    (null == o ? void 0 : o.bestBid) &&
                    (null == n ? void 0 : n.bestBid) &&
                    (null == n ? void 0 : n.bestAsk))
                ) {
                  let t = n.bestBid - d.bestAsk - e * o.bestAsk,
                    r = n.bestAsk - d.bestBid - e * o.bestBid;
                  (s.bestBid = t < 0 ? 0 : t), (s.bestAsk = r < 0 ? 0 : r);
                }
              }
              l.push(s);
            }
            return l;
          };
        var x = s(70757),
          p = s(45338),
          j = (e) => {
            let {
                data: t,
                type: s,
                strike: i = 0,
                strikes: l,
                currency: n,
                variant: c,
                expiry: a,
                digitalsData: u,
              } = e,
              f = "calls" === s ? "Call" : "Put",
              j = t.find(
                (e) =>
                  e.economics.strike === i &&
                  e.payoff === f &&
                  e.economics.expiry === a
              ),
              N = (0, o.useMemo)(() => {
                if (!j) return [];
                let e = {
                  strikes: l,
                  selectedStrikeContract: j,
                  data: t,
                  digitalsData: u,
                };
                switch (c) {
                  case "knock-in":
                    if ("calls" === s) return v(e);
                    return w(e);
                  case "knock-out":
                    if ("calls" === s) return m(e);
                    return k(e);
                }
              }, [t, u, l, s, c, j]);
            return (0, r.jsxs)("div", {
              className: h().table,
              children: [
                (0, r.jsx)("h1", {
                  children: "calls" === s ? "Calls ( UP )" : "Puts ( DOWN )",
                }),
                (0, r.jsxs)("div", {
                  className: d()(h().header, "tw-px-6 tw-py-3", h()[s]),
                  children: [
                    (0, r.jsx)("div", {
                      className: d()(h().cell),
                      children: "Bid",
                    }),
                    (0, r.jsx)("div", {
                      className: d()(h().cell),
                      children: "Model",
                    }),
                    (0, r.jsx)("div", {
                      className: d()(h().cell),
                      children: "Ask",
                    }),
                  ],
                }),
                l.map((e, t) => {
                  let i = N[t];
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: d()(h().row, h()[s], "tw-h-12", {
                        [h().darkRow]: t % 2 == 1,
                      }),
                      children: [
                        (0, r.jsx)(b.Z, {
                          textClassName: "tw-text-ithaca-green-30",
                          value: (0, p.Yr)(
                            (null == i ? void 0 : i.bestBid) || 0,
                            3
                          ),
                          depthValue: (0, p.Yr)(
                            (null == i ? void 0 : i.bidVolume) || 0,
                            "USDC" === n ? 0 : 3
                          ),
                          currencyIcon: (0, x.XX)(n, "tw-size-2.5"),
                        }),
                        (0, r.jsx)("div", {
                          className: d()(
                            h().cell,
                            "tw-flex tw-items-center tw-justify-center tw-text-xs"
                          ),
                          children: (0, r.jsx)("span", {
                            children: (0, p.Yr)(
                              (null == i ? void 0 : i.modelPrice) || 0,
                              3
                            ),
                          }),
                        }),
                        (0, r.jsx)(b.Z, {
                          textClassName: "tw-text-ithaca-red-20",
                          value: (0, p.Yr)(
                            (null == i ? void 0 : i.bestAsk) || 0,
                            3
                          ),
                          depthValue: (null == i ? void 0 : i.askVolume)
                            ? (0, p.Yr)(
                                null == i ? void 0 : i.askVolume,
                                "USDC" === n ? 0 : 3
                              )
                            : "-",
                          currencyIcon: (0, x.XX)(n, "tw-size-2.5"),
                        }),
                      ],
                    },
                    t
                  );
                }),
              ],
            });
          },
          N = s(40838),
          g = s(87220),
          y = s(98315),
          B = (e) => {
            let { digitalsData: t, data: s, currency: i, variant: n } = e,
              { currentSpotPrice: c, currentExpiryDate: a } = (0, l.qr)(
                (0, u.N)((e) => ({
                  currentSpotPrice: e.currentSpotPrice,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              { calls: f, puts: b } = s,
              { calls: v, puts: w } = t,
              [m, k] = (0, o.useState)(() => (0, y.Zj)(c)),
              x = (0, o.useMemo)(() => {
                let e = [];
                for (let t = m - 500; t <= m + 700; t += 100) e.push(t);
                return e;
              }, [m]),
              { barrierInStrikes: p, barrierOutStrikes: B } = (0, o.useMemo)(
                () => (0, y.wo)(x, m),
                [x, m]
              );
            return (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("div", {
                className: h().optionsTable,
                children: [
                  (0, r.jsx)(j, {
                    type: "calls",
                    digitalsData: v,
                    data: f,
                    currency: i,
                    strike: m,
                    strikes: p,
                    variant: n,
                    expiry: a,
                  }),
                  (0, r.jsxs)("div", {
                    className: h().strike,
                    children: [
                      (0, r.jsx)("div", {
                        className: h().header,
                        children: "Barrier IN",
                      }),
                      (0, r.jsx)("div", {
                        className: h().strikes,
                        children: p.map((e, t) =>
                          (0, r.jsx)(
                            "div",
                            {
                              className: d()(
                                ""
                                  .concat(h().cell, " ")
                                  .concat(t % 2 == 1 && h().darkRow),
                                "tw-flex tw-h-12 tw-items-center tw-justify-center"
                              ),
                              children: 0 === e ? "-" : e,
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: h().strike,
                    children: [
                      (0, r.jsx)(N.Z, {
                        panelClassName:
                          "tw-bg-none tw-text-white !tw-p-0 tw-border-none",
                        title: (0, r.jsxs)("button", {
                          className: h().header,
                          children: ["Strikes\xa0", (0, r.jsx)(g.Z, {})],
                        }),
                        children: (0, r.jsx)("div", {
                          className:
                            "tw-flex tw-flex-col tw-bg-[#202631]/80 tw-p-1",
                          children: x.map((e, t) =>
                            (0, r.jsx)(
                              "button",
                              {
                                onClick: () => k(e),
                                className: d()(
                                  "tw-rounded tw-px-6 tw-py-1 hover:tw-bg-white/10",
                                  { "tw-text-ithaca-green-30": e === m }
                                ),
                                children: e,
                              },
                              t
                            )
                          ),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "tw-relative tw-grow",
                        children: [
                          (0, r.jsx)("div", {
                            className: h().strikes,
                            children: B.map((e, t) =>
                              (0, r.jsx)(
                                "div",
                                {
                                  className: d()(
                                    ""
                                      .concat(h().cell, " ")
                                      .concat(t % 2 == 1 && h().darkRow),
                                    "tw-flex tw-h-12 tw-items-center tw-justify-center"
                                  ),
                                },
                                t
                              )
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "tw-absolute tw-bottom-2 tw-top-2 tw-flex tw-w-full tw-items-center tw-justify-center tw-border-l tw-border-r",
                            children: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: h().strike,
                    children: [
                      (0, r.jsx)("div", {
                        className: h().header,
                        children: "Barrier OUT",
                      }),
                      (0, r.jsx)("div", {
                        className: h().strikes,
                        children: B.map((e, t) =>
                          (0, r.jsx)(
                            "div",
                            {
                              className: d()(
                                ""
                                  .concat(h().cell, " ")
                                  .concat(t % 2 == 1 && h().darkRow),
                                "tw-flex tw-h-12 tw-items-center tw-justify-center"
                              ),
                              children: 0 === e ? "-" : e,
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsx)(j, {
                    type: "puts",
                    data: b,
                    digitalsData: w,
                    currency: i,
                    strike: m,
                    strikes: B,
                    variant: n,
                    expiry: a,
                  }),
                ],
              }),
            });
          },
          A = s(74458),
          P = s(13001),
          C = s.n(P),
          I = () => {
            let { isPending: e, options: t, digitalOptions: s } = (0, i.h)(),
              a = (0, l.qr)((e) => e.underlyingCurrency);
            return (0, r.jsx)(c.Z, {
              children: (0, r.jsxs)("div", {
                className: "tw-mx-auto tw-max-w-4xl tw-space-y-6",
                children: [
                  (0, r.jsxs)(n.Z, {
                    className: C().tableContainer,
                    children: [
                      (0, r.jsx)("h1", {
                        className: "tw-font-semibold",
                        children: "Barriers ( Knock IN )",
                      }),
                      (0, r.jsx)(A.Z, {
                        isPending: e,
                        children: (0, r.jsx)(B, {
                          variant: "knock-in",
                          data: t,
                          digitalsData: s,
                          currency: a,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(n.Z, {
                    className: C().tableContainer,
                    children: [
                      (0, r.jsx)("h1", { children: "Barriers ( Knock OUT )" }),
                      (0, r.jsx)(A.Z, {
                        isPending: e,
                        children: (0, r.jsx)(B, {
                          variant: "knock-out",
                          data: t,
                          digitalsData: s,
                          currency: a,
                        }),
                      }),
                    ],
                  }),
                ],
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
          return e((e.s = 55567));
        }
      ),
        (_N_E = e.O());
    },
  ]);
