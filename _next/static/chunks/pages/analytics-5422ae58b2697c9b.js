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
      (e._sentryDebugIds[t] = "d49d531f-5198-46b4-b55b-2b44bb54d61d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d49d531f-5198-46b4-b55b-2b44bb54d61d"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4583],
    {
      44813: function (e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/analytics",
          function () {
            return a(2295);
          },
        ]);
      },
      58224: function (e, t, a) {
        "use strict";
        a.d(t, {
          Z: function () {
            return g;
          },
        });
        var l = a(85893),
          r = a(15922),
          n = a(43417),
          s = a(32010),
          i = a(59731),
          o = a(30202),
          c = a(67294),
          d = a(81234),
          x = a(93967),
          u = a.n(x),
          h = a(18776),
          p = a(23279),
          f = a.n(p),
          m = a(67930),
          _ = (e) => {
            let { onRefreshPrices: t } = e,
              [a, r] = (0, c.useState)(!1),
              [n, x] = (0, c.useState)(void 0),
              p = (0, o.NL)(),
              { contractsWithReferencePrices: _, currentExpiryDate: j } = (0,
              i.qr)(
                (0, s.N)((e) => ({
                  contractsWithReferencePrices: e.contractsWithReferencePrices,
                  currentExpiryDate: e.currentExpiryDate,
                }))
              ),
              y = (0, c.useMemo)(() => [m.nA, _, j], [_, j]),
              w = (0, c.useCallback)(() => {
                let e = p.getQueryState(y);
                if (
                  !(null == e ? void 0 : e.dataUpdatedAt) &&
                  !(null == e ? void 0 : e.error)
                ) {
                  v();
                  return;
                }
                x(null == e ? void 0 : e.dataUpdatedAt);
              }, [p, y]),
              v = f()(w, 500);
            return ((0, c.useEffect)(() => {
              w();
            }, [w]),
            t)
              ? (0, l.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-items-end",
                  children: [
                    (0, l.jsxs)("button", {
                      onClick: () => {
                        r(!0),
                          null == t || t(),
                          setTimeout(() => {
                            r(!1), w();
                          }, 1e3);
                      },
                      className:
                        "tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-gap-[6px]",
                      children: [
                        (0, l.jsx)(d.Z, {
                          className: u()({ "tw-animate-spin": a }),
                        }),
                        (0, l.jsx)("span", {
                          className: "tw-text-xs tw-text-white",
                          children: "Refresh prices",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("p", {
                      className: "tw-mt-2 tw-text-xxs",
                      children: [
                        "Last Update: ",
                        n && (0, h.Z)(new Date(n), "dd MMM - HH:mm:ss"),
                      ],
                    }),
                  ],
                })
              : null;
          },
          j = a(41664),
          y = a.n(j);
        let w = (e) => {
          let { breadcrumbs: t, className: a } = e;
          return t.length
            ? (0, l.jsx)("div", {
                className: a,
                children: t.map((e, a) =>
                  (0, l.jsxs)(
                    "span",
                    {
                      children: [
                        (0, l.jsx)(y(), {
                          href: e.path,
                          className:
                            "tw-text-xs tw-font-bold hover:tw-underline",
                          children: e.label,
                        }),
                        a < t.length - 1 && " / ",
                      ],
                    },
                    e.path
                  )
                ),
              })
            : (0, l.jsx)(l.Fragment, {});
        };
        var v = a(56267),
          b = a(25978),
          C = a.n(b),
          g = (e) => {
            let {
              breadcrumbs: t = [],
              title: a,
              onExpiryChange: s,
              onRefreshPrices: i,
            } = e;
            return "phone" === (0, r.F)()
              ? (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("div", {
                      className: "tw-mb-5",
                      children: (0, l.jsx)("h1", {
                        className: C().title,
                        children: a,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-justify-between",
                      children: [
                        (0, l.jsx)(v.Z, {}),
                        (0, l.jsx)(_, { onRefreshPrices: i }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "tw-space-between tw-mb-3 tw-flex",
                      children: (0, l.jsx)(n.F, { hideHours: !0 }),
                    }),
                    (0, l.jsx)(w, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "tw-mb-4 tw-flex tw-flex-row tw-justify-between tw-gap-4",
                      children: [
                        (0, l.jsx)("div", {
                          className: "tw-flex tw-items-center",
                          children: (0, l.jsx)(n.F, {
                            hideHours: !0,
                            onExpiryChange: s,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-items-end tw-justify-end tw-gap-3",
                          children: [
                            (0, l.jsx)(v.Z, {}),
                            (0, l.jsx)(_, { onRefreshPrices: i }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(w, { breadcrumbs: t, className: "tw-mb-4" }),
                  ],
                });
          };
      },
      16795: function (e, t, a) {
        "use strict";
        a.d(t, {
          M: function () {
            return r;
          },
        });
        var l = a(67294);
        let r = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, l.useEffect)(
            () => (
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("keydown", t);
              }
            ),
            [e]
          );
        };
      },
      24514: function (e, t, a) {
        "use strict";
        var l = a(85893),
          r = a(2262),
          n = a.n(r),
          s = a(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: a = "m-0",
              gap: r = "gap-0",
              padding: i = "p-0",
              children: o,
              classes: c,
            } = e,
            d = (0, s.I)();
          return (0, l.jsx)("div", {
            className: ""
              .concat("flex--".concat(d), " ")
              .concat(n().flex, " ")
              .concat(n()["flex--".concat(t)], " ")
              .concat(a, " ")
              .concat(r, " ")
              .concat(i, " ")
              .concat(c),
            children: o,
          });
        };
      },
      2295: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            PIE_COLORS: function () {
              return em;
            },
            default: function () {
              return e_;
            },
          });
        var l = a(85893),
          r = a(93967),
          n = a.n(r),
          s = a(27888),
          i = a(92505),
          o = a(15922),
          c = a(43417),
          d = a(59731),
          x = a(85292),
          u = a(56267),
          h = a(67294),
          p = a(46464),
          f = a(9984),
          m = a(72775),
          _ = a(67017),
          j = a(25615),
          y = a(26851),
          w = a(88793),
          v = a(6008),
          b = a(78042),
          C = a(50667),
          g = a(27484),
          L = a.n(g);
        let N = [
          { label: "Total", classNameKey: "total" },
          { label: "Call: Max Pain", classNameKey: "call" },
          { label: "Put: Max Pain", classNameKey: "put" },
        ];
        var F = a(9009),
          k = a.n(F),
          M = () =>
            (0, l.jsx)("div", {
              className: k().legend,
              children: N.map((e) =>
                (0, l.jsxs)(
                  "span",
                  {
                    children: [
                      (0, l.jsx)("div", {
                        className: "".concat(k()[e.classNameKey]),
                      }),
                      e.label,
                    ],
                  },
                  e.label
                )
              ),
            }),
          D = a(70757),
          P = (e) => {
            let { active: t, payload: a } = e,
              { underlyingCurrency: r } = (0, d.qr)();
            if (t && a && a.length) {
              let e = a[0].payload,
                t = [
                  { label: "Strike", value: e.strike },
                  { label: "Call: Max Pain", value: e.call },
                  { label: "Short: Max Pain", value: e.strike },
                ];
              return (0, l.jsx)("div", {
                className: k().tooltip,
                children: t.map((e, t) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className: k().row,
                      children: [
                        (0, l.jsx)("p", { children: e.label }),
                        (0, l.jsxs)("div", {
                          className: k().value,
                          children: [
                            e.value,
                            (0, D.XX)(r),
                            (0, l.jsx)("span", { children: r }),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
              });
            }
            return null;
          },
          A = (e) => {
            let { x: t } = e;
            return (0, l.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "2",
              height: "400",
              viewBox: "0 0 2 400",
              fill: "none",
              x: t - 2,
              y: 0,
              children: [
                (0, l.jsx)("path", {
                  d: "M1 0L1.00002 400",
                  stroke: "url(#paint0_linear_2644_41273)",
                }),
                (0, l.jsx)("defs", {
                  children: (0, l.jsxs)("linearGradient", {
                    id: "paint0_linear_2644_41273",
                    x1: "1.5",
                    y1: "-2.18571e-08",
                    x2: "1.50002",
                    y2: "400",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, l.jsx)("stop", { stopColor: "white" }),
                      (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: "white",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          T = (e) => {
            let { label: t, viewBox: a, value: r, offset: n = 0 } = e;
            if (!a) return null;
            let s = a.x + n,
              i = "rotate(90, ".concat(s, ", ").concat(-15, ")");
            return (0, l.jsxs)("text", {
              x: s,
              y: -15,
              dx: 40,
              fill: "#fff",
              fontSize: 12,
              textAnchor: "start",
              transform: i,
              children: [
                (0, l.jsx)("tspan", {
                  fill: "#9D9DAA",
                  fontSize: 10,
                  fontWeight: "500",
                  children: t,
                }),
                (0, l.jsx)("tspan", {
                  dx: 3,
                  fill: "#fff",
                  fontSize: 12,
                  children: r,
                }),
              ],
            });
          };
        let S = (e) => {
          if (!e) return [];
          let t = Object.keys(e).map((t) => {
              var a, l, r, n, s, i;
              return {
                strike: parseInt(t),
                call:
                  null !==
                    (s =
                      null === (l = e[t]) || void 0 === l
                        ? void 0
                        : null === (a = l.Call) || void 0 === a
                        ? void 0
                        : a.totalInNum) && void 0 !== s
                    ? s
                    : 0,
                put:
                  null !==
                    (i =
                      null === (n = e[t]) || void 0 === n
                        ? void 0
                        : null === (r = n.Put) || void 0 === r
                        ? void 0
                        : r.totalInNum) && void 0 !== i
                    ? i
                    : 0,
              };
            }),
            a = t.map((e) => e.strike),
            l = Math.min(...a),
            r = Math.max(...a),
            n = [];
          for (let e = l; e <= r; e += 100) {
            let a = t.find((t) => t.strike === e);
            a ? n.push(a) : n.push({ strike: e, call: 0, put: 0 });
          }
          return n.sort((e, t) => e.strike - t.strike), n;
        };
        var O = a(18666),
          B = () => {
            let {
                ithacaSDK: e,
                currentExpiryDate: t,
                underlyingCurrency: a,
              } = (0, d.qr)(),
              [r, n] = (0, h.useState)(null),
              s = async function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 5e3;
                for (let l = 0; l < t; l++)
                  try {
                    return await e();
                  } catch (e) {
                    if (
                      (console.error("Attempt ".concat(l + 1, " failed:"), e),
                      l < t - 1)
                    )
                      await new Promise((e) => setTimeout(e, a));
                    else throw Error("All retries failed.");
                  }
              },
              i = async (t) => {
                let l = L()(t.toString(), O.Nn);
                try {
                  let t = await s(() =>
                    e.analytics.openInterestByStrike(
                      a,
                      "USDC",
                      l.format(O.yJ),
                      l.add(1, "day").format(O.yJ),
                      0,
                      2e8
                    )
                  );
                  t && n(t);
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              };
            (0, h.useEffect)(() => {
              i(t);
            }, [t]);
            let [o, c] = (0, h.useState)([]);
            (0, h.useEffect)(() => {
              c(S(r));
            }, [r]);
            let [x, u] = (0, h.useState)(0);
            return (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)("div", {
                  className: k().leftLabel,
                  children: "Open Interest",
                }),
                (0, l.jsx)(p.h, {
                  className: k().container,
                  width: "100%",
                  height: 300,
                  children: (0, l.jsxs)(f.v, {
                    barCategoryGap: 33,
                    data: o,
                    margin: { top: 18, right: 46, left: 20, bottom: 35 },
                    onMouseMove: (e) => {
                      if (e.activePayload) {
                        let t = e.chartX;
                        u(null != t ? t : 0);
                      }
                    },
                    children: [
                      (0, l.jsx)(m.d, {
                        x: 1500,
                        stroke: "#561198",
                        strokeDasharray: "2 2",
                        label: (0, l.jsx)(T, {
                          label: "Max Pain",
                          value: "1600",
                        }),
                      }),
                      (0, l.jsx)(m.d, {
                        x: 1600,
                        stroke: "#9D9DAA",
                        strokeDasharray: "2 2",
                        label: (0, l.jsx)(T, {
                          label: "Underlying Price",
                          value: "1700",
                        }),
                      }),
                      (0, l.jsx)(_.q, {
                        strokeDasharray: "0",
                        vertical: !1,
                        stroke: "rgba(255, 255, 255, 0.2)",
                      }),
                      (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                          id: "greenGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "0%",
                          y2: "100%",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "20.31%",
                              stopColor: "#4BB475",
                              stopOpacity: "1",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#4BB475",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                          id: "redGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "0%",
                          y2: "100%",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "20.31%",
                              stopColor: "#FF3F57",
                              stopOpacity: "1",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#FF3F57",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)(j.K, {
                        dataKey: "strike",
                        tickLine: !1,
                        axisLine: !1,
                        className: k().chartMaxPainLabel,
                        dy: 5,
                        children: (0, l.jsx)(y._, {
                          value: "Strikes",
                          offset: 10,
                          position: "bottom",
                          className: k().axisLabel,
                        }),
                      }),
                      (0, l.jsx)(w.B, {
                        type: "number",
                        allowDecimals: !1,
                        axisLine: !1,
                        tickLine: !1,
                        className: ""
                          .concat(k().axisLabel, " ")
                          .concat(k().chartMaxPainLabel),
                      }),
                      (0, l.jsx)(v.u, {
                        content: (0, l.jsx)(P, {}),
                        cursor: (0, l.jsx)(A, { x: x }),
                      }),
                      (0, l.jsx)(b.D, {
                        verticalAlign: "bottom",
                        align: "right",
                        content: (0, l.jsx)(M, {}),
                      }),
                      (0, l.jsx)(C.$, {
                        dataKey: "call",
                        fill: "url(#greenGradient)",
                        barSize: 20,
                        radius: [4, 4, 0, 0],
                      }),
                      (0, l.jsx)(C.$, {
                        dataKey: "put",
                        fill: "url(#redGradient)",
                        barSize: 20,
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          E = a(58224),
          I = a(64520),
          V = a(55400),
          H = a(40683),
          Z = a.n(H),
          G = a(45338),
          K = a(66080),
          z = a(39383),
          R = (e) => {
            let { payload: t } = e;
            return (0, l.jsx)("div", {
              className: Z().legend,
              children:
                null == t
                  ? void 0
                  : t.map((e, t) =>
                      "none" === e.type
                        ? null
                        : (0, l.jsxs)(
                            "div",
                            {
                              className: Z().row,
                              children: [
                                (0, l.jsx)(K.T, {
                                  width: 8,
                                  height: 8,
                                  children: (0, l.jsx)(z.v, {
                                    cx: 4,
                                    cy: 4,
                                    type: "circle",
                                    size: 32,
                                    fill: e.color,
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: Z().label,
                                  children: e.value,
                                }),
                              ],
                            },
                            "item-".concat(t)
                          )
                    ),
            });
          },
          W = (e) => {
            let { data: t, expiryList: a } = e,
              [r, n] = (0, h.useState)("");
            return (0, l.jsx)(p.h, {
              className: Z().container,
              width: "100%",
              height: 300,
              children: (0, l.jsxs)(I.T, {
                data: t,
                margin: { top: 18, right: 10, left: 2, bottom: 35 },
                children: [
                  (0, l.jsx)(b.D, {
                    layout: "vertical",
                    verticalAlign: "bottom",
                    align: "center",
                    content: (0, l.jsx)(R, {}),
                  }),
                  (0, l.jsx)(_.q, {
                    strokeDasharray: "0",
                    vertical: !1,
                    stroke: "rgba(255, 255, 255, 0.2)",
                  }),
                  (0, l.jsxs)("defs", {
                    children: [
                      (0, l.jsxs)("linearGradient", {
                        id: "gradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          (0, l.jsx)("stop", {
                            offset: "20%",
                            stopColor: "#5EE192",
                            stopOpacity: 0.2,
                          }),
                          (0, l.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#5EE192",
                            stopOpacity: 0,
                          }),
                        ],
                      }),
                      (0, l.jsx)("filter", {
                        id: "glow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: (0, l.jsx)("feGaussianBlur", {
                          in: "SourceGraphic",
                          stdDeviation: "2",
                          result: "blur",
                        }),
                      }),
                      (0, l.jsxs)("linearGradient", {
                        id: "strokeGradient",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          (0, l.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#5EE192",
                            stopOpacity: 1,
                          }),
                          (0, l.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#FFFFFF",
                            stopOpacity: 1,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(j.K, {
                    dataKey: "date",
                    tickLine: !1,
                    axisLine: !1,
                    style: { fill: "#9D9DAA", fontSize: 12 },
                    dy: 5,
                  }),
                  (0, l.jsx)(w.B, {
                    type: "number",
                    tickFormatter: (e) => {
                      let t = (0, G.tE)(e);
                      return r.length < t.length && n(t), t;
                    },
                    width: (() => {
                      let e = 10 * r.length;
                      return e < 20 ? 20 : e;
                    })(),
                    allowDecimals: !1,
                    axisLine: !1,
                    tickLine: !1,
                    className: Z().chartTradeCountLabel,
                  }),
                  (0, l.jsx)(V.u, {
                    legendType: "none",
                    dataKey: "volume",
                    fill: "url(#gradient)",
                    filter: "url(#glow)",
                  }),
                  (0, l.jsx)(V.u, {
                    type: "monotone",
                    legendType: "circle",
                    name: "Total",
                    dataKey: "volume",
                    stroke: "#5ee192",
                    strokeWidth: 2,
                    fill: "transparent",
                  }),
                  a.map((e) => {
                    let { name: t, color: a } = e;
                    return (0, l.jsx)(
                      V.u,
                      {
                        type: "monotone",
                        legendType: "circle",
                        dataKey: t,
                        stroke: a,
                        strokeWidth: 1,
                        fill: "transparent",
                      },
                      t
                    );
                  }),
                  (0, l.jsx)(V.u, {
                    name: "NAFwd",
                    type: "monotone",
                    legendType: "circle",
                    dataKey: "7Jan99",
                    stroke: "#31CBE0",
                    strokeWidth: 1,
                  }),
                ],
              }),
            });
          },
          q = a(65935),
          U = a(98660),
          J = a(92054),
          X = a(14489),
          Q = () =>
            (0, l.jsxs)("svg", {
              width: "116",
              height: "32",
              viewBox: "0 0 116 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M75.0053 21.5234L83.8299 25.3517L79.0593 6.5393L75.3636 20.2277L74.1661 24.6449L72.9734 29.0032L71.4961 28.4928L79.0642 3.49634L86.6007 29.0032L75.0053 21.5234Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  d: "M97.4922 26.9497L96.336 28.5683L85.2969 15.1079L96.2054 2L97.3712 3.59877L87.2028 15.0533L97.4922 26.9497Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  d: "M68.8421 7.84766V28.7165H67.4924V18.9299H57.0138V28.7165H55.6641V7.84766H57.0138V17.5557H67.4924V7.84766H68.8421Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  d: "M68.834 2.09888V3.47312H51.5578V28.7101H50.2081V3.47312H43.5234V2.09888H68.834Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  d: "M41.3791 2.0791H40V28.7149H41.3791V2.0791Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M104.048 21.5234L112.873 25.3517L108.102 6.5393L104.407 20.2277L103.209 24.6449L102.016 29.0032L100.539 28.4928L108.107 3.49634L115.644 29.0032L104.048 21.5234Z",
                  fill: "#C4C4C4",
                }),
                (0, l.jsx)("path", {
                  fillOpacity: "0.2",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.1099 19.6415L14.9858 20.9657V24.276L14.0975 23.5587V21.9036L13.1099 21.1852V19.6415ZM17.7995 21.1852L16.812 21.9036V23.5587L15.9237 24.276V20.9657L17.7995 19.6415V21.1852ZM2.85899 7.49163L4.31001 8.49685L6.37455 9.9258L7.17895 10.483L11.4824 13.4623L14.3513 15.4485L13.6594 16.0256C12.2437 17.2052 10.2608 17.3718 8.68073 16.4879L6.82695 15.2046L6.52572 11.6858L0.00661149 7.17273V9.22071C0.00661149 11.3934 1.07253 13.427 2.85899 14.6639L4.31001 15.6692L7.02778 17.5505L8.49425 18.5657L8.9621 24.0244L7.73067 23.1725L7.49564 23.0103L7.1944 19.4915L0.55833 14.8968V16.9447C0.55833 18.9398 1.45653 20.8178 2.98589 22.0691L3.01017 22.089C3.03886 22.1121 3.06754 22.1353 3.09623 22.1574L15.4547 32L27.8121 22.1574C27.8408 22.1342 27.8695 22.1121 27.8982 22.089L27.9236 22.0691C29.4529 20.8178 30.3511 18.9398 30.3511 16.9447V14.8968L23.715 19.4904L23.4138 23.0092L23.1788 23.1725L21.9473 24.0255L22.4152 18.5668L23.8817 17.5516L26.5994 15.6692L28.0504 14.6639C29.8369 13.4281 30.9028 11.3934 30.9028 9.22071V7.17273L24.3837 11.6858L24.0825 15.2046L22.2287 16.4879C20.6497 17.3718 18.6657 17.2052 17.25 16.0256L16.5582 15.4485L19.4271 13.4623L23.7305 10.483L24.5349 9.9258L26.5994 8.49685L28.0504 7.49163C29.8369 6.25578 30.9028 4.22105 30.9028 2.04839V0.015831L25.0222 4.15967L24.7368 7.5799L23.7305 8.27617L23.2693 8.59506L19.4271 11.2554L16.5582 13.2416H15.9513L16.8616 10.7037C16.8616 10.7037 16.8086 9.65546 16.5582 8.27617C16.3077 6.89688 15.4547 4.41415 15.4547 4.41415C15.4547 4.41415 14.6018 6.89688 14.3513 8.27617C14.1008 9.65546 14.0478 10.7037 14.0478 10.7037L14.9582 13.2416H14.3513L11.4824 11.2554L7.64019 8.59506L7.17895 8.27617L6.17372 7.5799L5.87723 4.14882L0 0L0.00661149 2.04839C0.00661149 4.22105 1.07253 6.25578 2.85899 7.49163Z",
                  fill: "#C4C4C4",
                }),
              ],
            }),
          Y = a(96194),
          $ = a.n(Y);
        let ee = ["Call", "Put", "Forward", "Binary Call", "Binary Put"];
        var et = (e) => {
          let { payload: t } = e;
          return (0, l.jsx)("div", {
            className: $().legend,
            children:
              t &&
              t.map((e, t) =>
                ee.includes(e.payload.name) && "long" !== e.payload.type
                  ? (0, l.jsxs)(
                      "div",
                      {
                        className: $().row,
                        children: [
                          (0, l.jsx)(K.T, {
                            width: 8,
                            height: 8,
                            children: (0, l.jsx)(z.v, {
                              cx: 4,
                              cy: 4,
                              type: "circle",
                              size: 32,
                              fill: e.color,
                            }),
                          }),
                          (0, l.jsx)("span", {
                            className: $().label,
                            children: e.value,
                          }),
                        ],
                      },
                      "item-".concat(t)
                    )
                  : null
              ),
          });
        };
        let ea = (e) => {
          switch (e.name) {
            case "Forward":
              return "long" === e.type ? "#BDA5D3" : "#9637F1";
            case "Put":
              return "long" === e.type ? "#E38A95" : "#FF3F57";
            case "Call":
              return "long" === e.type ? "#97E8B7" : "#4BB475";
            case "Binary Call":
            case "Digital Call":
              return "long" === e.type ? "#18B5B5" : "#9DDFDF";
            case "Binary Put":
            case "Digital Put":
              return "long" === e.type ? "#FF762A" : "#D5B09B";
            default:
              return "#000000";
          }
        };
        var el = a(77125);
        let er = (e) => {
            let { color: t } = e;
            return (0, l.jsx)(K.T, {
              width: 8,
              height: 8,
              children: (0, l.jsx)(z.v, {
                cx: 4,
                cy: 4,
                type: "circle",
                size: 32,
                fill: t,
              }),
            });
          },
          en = (e) => {
            let { name: t } = e,
              { underlyingCurrency: a } = (0, d.qr)();
            return t.includes("Binary") ? (0, l.jsx)(el.Z, {}) : (0, D.XX)(a);
          };
        var es = (e) => {
            let { active: t, payload: a, additionalData: r } = e;
            if (t && a && a.length) {
              let e = a[0].payload,
                t = r.filter((t) => t.name === e.name);
              return (0, l.jsxs)("div", {
                className: $().tooltip,
                children: [
                  (0, l.jsx)("p", { className: "mb-10", children: e.name }),
                  t.map((t) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: $().tooltipValueContainer,
                        children: [
                          (0, l.jsx)(er, { color: ea(t) }),
                          (0, l.jsxs)("p", { children: [t.type, ":"] }),
                          (0, l.jsx)("p", {
                            className: $().value,
                            children: t.volume,
                          }),
                          (0, l.jsx)(en, { name: t.name }),
                        ],
                      },
                      "".concat(e.name, "-").concat(t.type)
                    )
                  ),
                ],
              });
            }
            return null;
          },
          ei = () => {
            let {
                ithacaSDK: e,
                currentExpiryDate: t,
                underlyingCurrency: a,
              } = (0, d.qr)(),
              [r, n] = (0, h.useState)(void 0),
              [s, i] = (0, h.useState)(void 0),
              [o, c] = (0, h.useState)([]),
              [x, u] = (0, h.useState)([]),
              f = async function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 5e3;
                for (let l = 0; l < t; l++)
                  try {
                    return await e();
                  } catch (e) {
                    if (
                      (console.error("Attempt ".concat(l + 1, " failed:"), e),
                      l < t - 1)
                    )
                      await new Promise((e) => setTimeout(e, a));
                    else throw Error("All retries failed.");
                  }
              },
              m = async (t) => {
                let l = L()(t.toString(), O.Nn);
                try {
                  let t = await f(() =>
                    e.analytics.openInterestByProduct(
                      a,
                      "USDC",
                      l.format(O.yJ),
                      l.add(1, "day").format(O.yJ)
                    )
                  );
                  if (!t) return;
                  u(
                    [
                      { value: "Binary Call", label: "Digital Call" },
                      { value: "Binary Put", label: "Digital Put" },
                    ]
                      .map((e) => {
                        var a, l;
                        return [
                          {
                            name: e.label,
                            type: "short",
                            volume: Math.round(
                              null === (a = t[e.value]) || void 0 === a
                                ? void 0
                                : a.totalInNum
                            ),
                          },
                          {
                            name: e.label,
                            type: "long",
                            volume: Math.round(
                              null === (l = t[e.value]) || void 0 === l
                                ? void 0
                                : l.totalInNum
                            ),
                          },
                        ];
                      })
                      .flat()
                  ),
                    c(
                      ["Call", "Forward", "Put"]
                        .map((e) => {
                          var a, l;
                          return [
                            {
                              name: e,
                              type: "short",
                              volume: Math.round(
                                null === (a = t[e]) || void 0 === a
                                  ? void 0
                                  : a.totalInNum
                              ),
                            },
                            {
                              name: e,
                              type: "long",
                              volume: Math.round(
                                null === (l = t[e]) || void 0 === l
                                  ? void 0
                                  : l.totalInNum
                              ),
                            },
                          ];
                        })
                        .flat()
                    );
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              };
            (0, h.useEffect)(() => {
              m(t);
            }, [t]);
            let _ = (e) => {
                let {
                  cx: t,
                  cy: a,
                  innerRadius: r,
                  outerRadius: n,
                  startAngle: s,
                  endAngle: i,
                  fill: o,
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("g", {
                      style: { filter: "url(#glow)" },
                      children: [
                        (0, l.jsx)(q.L, {
                          cx: t,
                          cy: a,
                          innerRadius: r,
                          outerRadius: n,
                          startAngle: s,
                          endAngle: i,
                          fill: o,
                        }),
                        (0, l.jsx)(q.L, {
                          cx: t,
                          cy: a,
                          startAngle: s,
                          endAngle: i,
                          innerRadius: n,
                          outerRadius: n,
                          fill: o,
                        }),
                      ],
                    }),
                    (0, l.jsx)("defs", {
                      children: (0, l.jsxs)("filter", {
                        id: "glow",
                        children: [
                          (0, l.jsx)("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "5",
                            result: "blur",
                          }),
                          (0, l.jsx)("feFlood", {
                            floodColor: o,
                            result: "color",
                          }),
                          (0, l.jsx)("feComposite", {
                            in2: "color",
                            operator: "in",
                          }),
                          (0, l.jsxs)("feMerge", {
                            children: [
                              (0, l.jsx)("feMergeNode", { in: "color" }),
                              (0, l.jsx)("feMergeNode", {
                                in: "SourceGraphic",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                });
              },
              j = (e) => (e % 2 == 0 ? [e, e + 1] : [e, e - 1]),
              y = (e, t) => {
                i(j(t)), n(void 0);
              };
            return (0, l.jsxs)("div", {
              className: $().pieContainer,
              children: [
                (0, l.jsx)("div", {
                  className: $().waterMark,
                  children: (0, l.jsx)(Q, {}),
                }),
                (0, l.jsx)(p.h, {
                  className: $().container,
                  width: "100%",
                  height: 300,
                  children: (0, l.jsxs)(U.u, {
                    children: [
                      (0, l.jsx)(b.D, {
                        layout: "vertical",
                        verticalAlign: "top",
                        align: "left",
                        content: (0, l.jsx)(et, {}),
                      }),
                      (0, l.jsxs)("defs", {
                        children: [
                          (0, l.jsxs)("linearGradient", {
                            id: "colorGroupA",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                              (0, l.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#5CCF8A",
                              }),
                              (0, l.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#4BB475",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("linearGradient", {
                            id: "colorGroupB",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                              (0, l.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#A855F7",
                              }),
                              (0, l.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#8F2BEF",
                              }),
                            ],
                          }),
                          (0, l.jsx)("filter", {
                            id: "glow",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: (0, l.jsx)("feGaussianBlur", {
                              in: "SourceGraphic",
                              stdDeviation: "3",
                              result: "blur",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)(J.b, {
                        onMouseEnter: (e, t) => {
                          n(j(t)), i(void 0);
                        },
                        onMouseLeave: () => n(void 0),
                        activeIndex: r,
                        data: o,
                        activeShape: _,
                        innerRadius: 90,
                        outerRadius: 120,
                        fill: "#8884d8",
                        nameKey: "name",
                        dataKey: "volume",
                        startAngle: 90,
                        endAngle: 450,
                        children: o.map((e) =>
                          (0, l.jsx)(
                            X.b,
                            { stroke: "none", fill: ea(e) },
                            "cell-".concat(e.name, "-").concat(e.type)
                          )
                        ),
                      }),
                      (0, l.jsx)(
                        J.b,
                        {
                          onMouseEnter: y,
                          onMouseLeave: () => i(void 0),
                          onMouseOver: y,
                          activeIndex: s,
                          data: x,
                          activeShape: _,
                          innerRadius: 40,
                          outerRadius: 70,
                          fill: "#8884d8",
                          nameKey: "name",
                          dataKey: "volume",
                          startAngle: 90,
                          endAngle: 450,
                          children: x.map((e) =>
                            (0, l.jsx)(
                              X.b,
                              { stroke: "none", fill: ea(e) },
                              "inset-cell-".concat(e.name, "-").concat(e.type)
                            )
                          ),
                        },
                        "inset"
                      ),
                      (0, l.jsx)(v.u, {
                        content: (0, l.jsx)(es, {
                          additionalData: [...o, ...x],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          eo = a(3258),
          ec = a.n(eo),
          ed = (e) => {
            let { payload: t, labels: a = {} } = e;
            return (0, l.jsx)("div", {
              className: ec().legend,
              children:
                t &&
                t.map((e, t) =>
                  "none" === e.type
                    ? null
                    : (0, l.jsxs)(
                        "div",
                        {
                          className: ec().row,
                          children: [
                            (0, l.jsx)(K.T, {
                              width: 8,
                              height: 8,
                              children: (0, l.jsx)(z.v, {
                                cx: 4,
                                cy: 4,
                                type: "circle",
                                size: 32,
                                fill: e.color,
                              }),
                            }),
                            (0, l.jsx)("span", {
                              className: ec().label,
                              children:
                                (null == a ? void 0 : a[e.value]) || e.value,
                            }),
                          ],
                        },
                        "item-".concat(t)
                      )
                ),
            });
          },
          ex = (e) => {
            let { active: t, payload: a } = e;
            if (t && a && a.length) {
              let e = a.map((e, t) => ({ label: e.name, value: e.value }));
              return (0, l.jsxs)("div", {
                className: ec().tooltip,
                children: [
                  (0, l.jsx)("h3", { children: a[0].payload.date }),
                  e.map((e, t) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: ec().row,
                        children: [
                          (0, l.jsxs)("p", { children: [e.label, ":"] }),
                          (0, l.jsx)("div", {
                            className: ec().value,
                            children:
                              e.value || 0 === e.value
                                ? Math.round(e.value)
                                : "",
                          }),
                        ],
                      },
                      t
                    )
                  ),
                ],
              });
            }
            return null;
          },
          eu = (e) => {
            let { data: t, expiryList: a } = e;
            return (0, l.jsx)(p.h, {
              className: ec().container,
              width: "100%",
              height: 300,
              children: (0, l.jsxs)(f.v, {
                data: t,
                margin: { top: 18, right: 46, left: -10, bottom: 35 },
                children: [
                  (0, l.jsx)(v.u, {
                    cursor: !1,
                    wrapperStyle: { zIndex: 5 },
                    content: (0, l.jsx)(ex, {}),
                  }),
                  (0, l.jsx)(b.D, {
                    layout: "vertical",
                    verticalAlign: "bottom",
                    align: "center",
                    content: (0, l.jsx)(ed, {}),
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsxs)("linearGradient", {
                      id: "purpleGradientTrading",
                      x1: "0%",
                      y1: "0%",
                      x2: "0%",
                      y2: "100%",
                      children: [
                        (0, l.jsx)("stop", {
                          offset: "20.31%",
                          stopColor: "#B5B5F8",
                          stopOpacity: "1",
                        }),
                        (0, l.jsx)("stop", {
                          offset: "100%",
                          stopColor: "#B5B5F8",
                          stopOpacity: "0",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(_.q, {
                    strokeDasharray: "0",
                    vertical: !1,
                    stroke: "rgba(255, 255, 255, 0.2)",
                  }),
                  (0, l.jsx)(j.K, {
                    dataKey: "date",
                    tickLine: !1,
                    axisLine: !1,
                    style: { fill: "#9D9DAA", fontSize: 12 },
                    dy: 5,
                  }),
                  (0, l.jsx)(w.B, {
                    type: "number",
                    allowDecimals: !1,
                    axisLine: !1,
                    tickLine: !1,
                    tickFormatter: G.tE,
                    style: { fill: "#9D9DAA", fontSize: 12 },
                  }),
                  a.map((e) => {
                    let { name: t, color: a } = e;
                    return (0, l.jsx)(
                      C.$,
                      {
                        stackId: "stack",
                        dataKey: t,
                        fill: a,
                        barSize: 14,
                        radius: [0, 0, 0, 0],
                      },
                      t
                    );
                  }),
                  (0, l.jsx)(C.$, {
                    stackId: "stack",
                    name: "NAFwd",
                    dataKey: "7Jan99",
                    fill: "#31CBE0",
                    barSize: 14,
                    radius: [4, 4, 0, 0],
                  }),
                ],
              }),
            });
          },
          eh = a(23170),
          ep = a(61151),
          ef = a.n(ep);
        let em = [
          "#ff3f57",
          "#A855F7",
          "#B5B5F8",
          "#FF772A",
          "#00836E",
          "#00FFFF",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#800000",
          "#808000",
          "#008080",
          "#800080",
          "#FFA500",
          "#A52A2A",
          "#008000",
          "#000080",
          "#808080",
        ];
        var e_ = () => {
          let { expiryList: e, currentExpiryDate: t } = (0, d.qr)(),
            a = (0, o.F)(),
            r = e.map((e, t) => ({
              name: (0, O.p6)("".concat(e), O.Nn, "DDMMMYY"),
              value: (0, O.p6)("".concat(e), O.Nn, O.yJ),
              color: em[t],
            })),
            { tradeCount: h, tradeVolume: p } = (0, eh.useData)();
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(i.Z, {}),
              (0, l.jsx)(s.Z, {
                children: (0, l.jsxs)(x.Z, {
                  className: "mb-15",
                  children: [
                    "desktop" === a &&
                      (0, l.jsxs)("div", {
                        className:
                          "flex-row space-between items-center mb-17 flex-wrap",
                        children: [
                          (0, l.jsx)("div", {
                            className: "flex-row gap-70",
                            children: (0, l.jsx)(c.F, { hideHours: !0 }),
                          }),
                          (0, l.jsx)(u.Z, { isAlwaysInline: !0 }),
                        ],
                      }),
                    "tablet" === a &&
                      (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                          className: n()("flex-row mb-18", [ef().borderBottom]),
                          children: [
                            (0, l.jsx)(c.F, { hideHours: !0 }),
                            (0, l.jsx)(u.Z, {}),
                          ],
                        }),
                      }),
                    "phone" === a &&
                      (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(E.Z, { title: "Analytics" }),
                      }),
                    (0, l.jsxs)("div", {
                      className: n()(
                        ef().chartContainer,
                        ef().wrapDesktop,
                        "mb-15 gap-15"
                      ),
                      children: [
                        (0, l.jsxs)("div", {
                          className: n()(
                            ef().singleChartPanel,
                            "ptb-24 plr-30 desktop-grow mobile-full-width p-tablet-16"
                          ),
                          children: [
                            (0, l.jsx)("h3", {
                              className: "mb-18 mb-tablet-16",
                              children: "Trade Count",
                            }),
                            (0, l.jsx)(W, { data: h, expiryList: r }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: n()(
                            ef().singleChartPanel,
                            "ptb-24 plr-30 desktop-grow mobile-full-width p-tablet-16"
                          ),
                          children: [
                            (0, l.jsx)("h3", {
                              className: "mb-18",
                              children: "Trading Volumes",
                            }),
                            (0, l.jsx)(eu, { data: p, expiryList: r }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: n()(
                        ef().chartContainer,
                        ef().wrapDesktop,
                        "mb-15 gap-15"
                      ),
                      children: [
                        (0, l.jsxs)("div", {
                          className: n()(
                            ef().singleChartPanel,
                            "ptb-24 plr-30 desktop-grow mobile-full-width p-tablet-16",
                            ef().maxPainWidth
                          ),
                          children: [
                            (0, l.jsxs)("h3", {
                              className: "mb-18",
                              children: [
                                "Max Pain",
                                " ",
                                (0, l.jsxs)("span", {
                                  className: ef().expirySubHeader,
                                  children: [
                                    "(",
                                    (0, O.p6)(t.toString(), O.Nn, O.KJ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)(B, {}),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: n()(
                            ef().singleChartPanel,
                            "ptb-24 plr-30 desktop-grow mobile-full-width p-tablet-16"
                          ),
                          children: [
                            (0, l.jsxs)("h3", {
                              className: "mb-18",
                              children: [
                                "Open Interest",
                                " ",
                                (0, l.jsxs)("span", {
                                  className: ef().expirySubHeader,
                                  children: [
                                    "(",
                                    (0, O.p6)(t.toString(), O.Nn, O.KJ),
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)(ei, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      },
      23170: function (e, t, a) {
        "use strict";
        a.r(t),
          a.d(t, {
            EXPIRY_FORMAT_OUTPUT: function () {
              return c;
            },
            useData: function () {
              return u;
            },
          });
        var l = a(67294),
          r = a(18776),
          n = a(80258),
          s = a(10154),
          i = a(59731);
        let o = "yyyy-MM-dd",
          c = "dMMMyy",
          d = (e) =>
            e
              ? Object.keys(e).reduce((t, a) => {
                  let l = { date: (0, r.Z)(new Date(a), c), volume: 0 },
                    n = Object.keys(e[a]);
                  return (
                    n.length &&
                      (n.forEach((t) => {
                        (l[(0, r.Z)(new Date(t), c)] = e[a][t]),
                          (l.volume = l.volume + e[a][t]);
                      }),
                      t.push(l)),
                    t
                  );
                }, [])
              : [],
          x = (e) =>
            e
              ? Object.keys(e).map((t) => {
                  let a = (0, r.Z)(new Date(t), c),
                    l = 0,
                    n = { date: a, volume: 0 };
                  return (
                    Object.keys(e[t]).forEach((a) => {
                      (n[(0, r.Z)(new Date(a), c)] = e[t][a].totalInNum),
                        (l += e[t][a].totalInNum);
                    }),
                    (n.volume = l),
                    n
                  );
                })
              : [],
          u = () => {
            let { ithacaSDK: e, currentCurrencyPair: t } = (0, i.qr)(),
              [a, c] = (0, l.useState)([]),
              [u, h] = (0, l.useState)([]),
              [p, f] = t.split("/"),
              m = (0, r.Z)((0, n.Z)(new Date()), o),
              _ = (0, r.Z)((0, s.Z)(new Date()), o);
            (0, l.useEffect)(() => {
              y(), w();
            }, []);
            let j = async function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 5e3;
                for (let l = 0; l < t; l++)
                  try {
                    return await e();
                  } catch (e) {
                    if (
                      (console.error("Attempt ".concat(l + 1, " failed:"), e),
                      l < t - 1)
                    )
                      await new Promise((e) => setTimeout(e, a));
                    else throw Error("All retries failed.");
                  }
              },
              y = async () => {
                c(d(await j(() => e.analytics.tradesDetail(p, f, m, _))));
              },
              w = async () => {
                h(x(await j(() => e.analytics.dailyVolumeDetail(p, f, m, _))));
              };
            return { tradeCount: a, tradeVolume: u };
          };
        t.default = u;
      },
      9009: function (e) {
        e.exports = {
          container: "ChartMaxPain_container__WWHGp",
          legend: "ChartMaxPain_legend__NKd6f",
          total: "ChartMaxPain_total__FDkrU",
          call: "ChartMaxPain_call__N6CAL",
          put: "ChartMaxPain_put__gQgVJ",
          axisLabel: "ChartMaxPain_axisLabel__MkytN",
          tooltip: "ChartMaxPain_tooltip__FeFV6",
          row: "ChartMaxPain_row__D5tVc",
          value: "ChartMaxPain_value__l6BhA",
          leftLabel: "ChartMaxPain_leftLabel__7QVOw",
          headerContent: "ChartMaxPain_headerContent__HxTI4",
          chartMaxPainLabel: "ChartMaxPain_chartMaxPainLabel__xUcqW",
        };
      },
      96194: function (e) {
        e.exports = {
          pieContainer: "ChartOpenInterest_pieContainer__OV_dy",
          waterMark: "ChartOpenInterest_waterMark__tpSym",
          container: "ChartOpenInterest_container__P9i_E",
          legend: "ChartOpenInterest_legend__qm_U4",
          row: "ChartOpenInterest_row__nichk",
          label: "ChartOpenInterest_label__bE5r6",
          tooltip: "ChartOpenInterest_tooltip__SniNA",
          tooltipValueContainer:
            "ChartOpenInterest_tooltipValueContainer__cepA0",
          value: "ChartOpenInterest_value__mG2xr",
        };
      },
      40683: function (e) {
        e.exports = {
          container: "ChartTradeCount_container__S41Il",
          chartTradeCountLabel: "ChartTradeCount_chartTradeCountLabel__7e6Kp",
          pieContainer: "ChartTradeCount_pieContainer__5IcLt",
          waterMark: "ChartTradeCount_waterMark__O95q3",
          legend: "ChartTradeCount_legend__XJ4_5",
          row: "ChartTradeCount_row__Atz3I",
          label: "ChartTradeCount_label__12Vog",
          tooltip: "ChartTradeCount_tooltip__P_cBo",
          value: "ChartTradeCount_value__zWx4_",
          number: "ChartTradeCount_number__0w0i2",
        };
      },
      3258: function (e) {
        e.exports = {
          container: "ChartTradingVolume_container__ovXsI",
          chartTradeCountLabel:
            "ChartTradingVolume_chartTradeCountLabel__hHTli",
          pieContainer: "ChartTradingVolume_pieContainer__Aq9mr",
          waterMark: "ChartTradingVolume_waterMark__NHyOv",
          legend: "ChartTradingVolume_legend__yvzyI",
          row: "ChartTradingVolume_row__4EwnY",
          label: "ChartTradingVolume_label__MYTqQ",
          tooltip: "ChartTradingVolume_tooltip__GHIxO",
          value: "ChartTradingVolume_value__OC8uf",
        };
      },
      25978: function (e) {
        e.exports = { title: "headerWithInformation_title__5jA0Y" };
      },
      2262: function (e) {
        e.exports = {
          flex: "Flex_flex__V5aBr",
          "flex--row": "Flex_flex--row__S_OUU",
          "flex--row-center": "Flex_flex--row-center__V0QHQ",
          "flex--row-center-nowrap": "Flex_flex--row-center-nowrap__czW4z",
          "flex--row-wrap": "Flex_flex--row-wrap__sR2z5",
          "flex--row-wrap-center": "Flex_flex--row-wrap-center__mpjSs",
          "flex--column": "Flex_flex--column__8tR2e",
          "flex--column-space-between":
            "Flex_flex--column-space-between__IDvxS",
          "flex--row-space-between": "Flex_flex--row-space-between__9sq1x",
          "flex--row-space-between-start":
            "Flex_flex--row-space-between-start__1st17",
          "flex--row-start-space-between":
            "Flex_flex--row-start-space-between__gzicg",
          "flex--row-space-around": "Flex_flex--row-space-around__fuX65",
          "flex--dropdown": "Flex_flex--dropdown__vPp_T",
          "flex--justify-end": "Flex_flex--justify-end__zozd3",
          "tabCard--bonusTwinWin": "Flex_tabCard--bonusTwinWin__cT2sW",
          "flex-stories": "Flex_flex-stories__WXhhb",
        };
      },
      61151: function (e) {
        e.exports = {
          title: "analytics_title__IeM7V",
          headerContainer: "analytics_headerContainer__9mec_",
          chartContainer: "analytics_chartContainer__vMimw",
          singleChartPanel: "analytics_singleChartPanel__qB8vz",
          maxPainWidth: "analytics_maxPainWidth__9_y8J",
          wrapDesktop: "analytics_wrapDesktop__7QtJH",
          expirySubHeader: "analytics_expirySubHeader__X8lna",
          borderBottom: "analytics_borderBottom__QQh6o",
        };
      },
    },
    function (e) {
      e.O(
        0,
        [
          6342, 9261, 4442, 7410, 1371, 6322, 1664, 9849, 52, 7972, 8776, 2932,
          8833, 9156, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 44813));
        }
      ),
        (_N_E = e.O());
    },
  ]);
