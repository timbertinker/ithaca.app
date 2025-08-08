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
      (e._sentryDebugIds[t] = "ecd0c83b-b23e-4375-94d8-899858e92616"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ecd0c83b-b23e-4375-94d8-899858e92616"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3797],
    {
      9305: function (e, t, l) {
        "use strict";
        l.d(t, {
          Z: function () {
            return H;
          },
        });
        var a = l(85893),
          n = l(67294),
          o = l(46464),
          i = l(64520),
          s = l(88793),
          r = l(55400),
          u = l(72775),
          c = l(6008),
          d = l(25615),
          p = l(26851),
          h = l(1810),
          x = l.n(h),
          v = (e) => {
            let {
              base: t,
              active: l,
              payload: n,
              setChangeVal: o,
              y: i,
              height: s,
            } = e;
            if (l) {
              var r, u, c;
              return (
                o(
                  n &&
                    Math.abs(
                      (null === (r = n[0]) || void 0 === r
                        ? void 0
                        : r.value) || 0
                    ) >= 0
                    ? (null === (u = n[0]) || void 0 === u ? void 0 : u.value) +
                        Number(t)
                    : 0
                ),
                (0, a.jsxs)("div", {
                  style: {
                    marginTop:
                      i / s > 0.5
                        ? "10px"
                        : i / s <= 120 && 0 != i
                        ? s - 40 + "px"
                        : s - 150 + "px",
                  },
                  children: [
                    (0, a.jsx)("p", {
                      className: x().tooltipLabel,
                      children: "Price at Expiry",
                    }),
                    (0, a.jsx)("p", {
                      className: x().tooltipValue,
                      children:
                        (n &&
                          (null === (c = n[0]) || void 0 === c
                            ? void 0
                            : c.payload.x.toFixed(0))) ||
                        0,
                    }),
                  ],
                })
              );
            }
            return null;
          },
          f = (e) => {
            let { x: t, y: l, height: n } = e;
            return l / n > 0.5
              ? (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "2",
                  height: l,
                  viewBox: "0 0 2 ".concat(l - 50),
                  fill: "none",
                  x: t - 2,
                  y: 30,
                  children: [
                    (0, a.jsx)("path", {
                      d: "M0.875 0.742188L0.875004 ".concat(l - 80),
                      stroke: "url(#paint0_linear_1826_73533)",
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_1826_73533",
                        x1: "1.375",
                        y1: "0.742187",
                        x2: "1.375",
                        y2: l - 80,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, a.jsx)("stop", { stopColor: "white" }),
                          (0, a.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : l / n <= 120 && 0 != l
              ? (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "2",
                  height: n - l,
                  viewBox: "0 0 2 ".concat(n - l),
                  fill: "none",
                  x: t - 2,
                  y: l + 10,
                  children: [
                    (0, a.jsx)("path", {
                      d: "M0.875 0.742188L0.875004 ".concat(n - l - 50),
                      stroke: "url(#paint0_linear_1826_73533)",
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_1826_73533",
                        x1: "1.375",
                        y2: "0.742187",
                        x2: "1.375",
                        y1: n - l - 50,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, a.jsx)("stop", { stopColor: "white" }),
                          (0, a.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, a.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "2",
                  height: "91",
                  viewBox: "0 0 2 91",
                  fill: "none",
                  x: t - 2,
                  y: n - 110,
                  children: [
                    (0, a.jsx)("path", {
                      d: "M0.875 0.742188L0.875004 70.7422",
                      stroke: "url(#paint0_linear_1826_73533)",
                    }),
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_1826_73533",
                        x1: "1.375",
                        y1: "0.742187",
                        x2: "1.375",
                        y2: "70.7422",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, a.jsx)("stop", { stopColor: "white" }),
                          (0, a.jsx)("stop", {
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
          g = (e) => {
            let {
              x: t,
              y: l,
              index: n,
              special: o,
              dataList: i,
              height: s,
              labelPosition: r,
            } = e;
            function u() {
              let e = i[Number(n)],
                o = i[Number(n) - 1],
                r = i[Number(n) + 1];
              return (0, a.jsx)(
                "text",
                {
                  x: t,
                  y: Number(l) >= s - 30 ? s - 30 : Number(l),
                  dx:
                    0 === e.value
                      ? o.value > r.value
                        ? 15
                        : -15
                      : o.value <= e.value
                      ? e.value === r.value
                        ? -15
                        : 15
                      : e.value < r.value
                      ? 15
                      : -15,
                  dy:
                    0 === e.value
                      ? -5
                      : o.value <= e.value
                      ? e.value < r.value
                        ? 10
                        : -10
                      : e.value > r.value
                      ? -10
                      : 10,
                  fill: "#9D9DAA",
                  fontSize: 11,
                  textAnchor: "middle",
                  children: Math.round(i[Number(n)].x),
                },
                n
              );
            }
            let c = _(o);
            return c.find((e) => {
              var t, l;
              return (
                e.x ==
                  (null === (t = i[null != n ? n : 0]) || void 0 === t
                    ? void 0
                    : t.x) &&
                e.value ==
                  (null === (l = i[null != n ? n : 0]) || void 0 === l
                    ? void 0
                    : l.value)
              );
            })
              ? u()
              : 0 !== i[null != n ? n : 0].value ||
                0 === Number(i[n && n > 0 ? n - 1 : 0].value.toFixed(5)) ||
                c.find((e) => {
                  var t;
                  return (
                    e.x ==
                    (null === (t = i[null != n ? n : 0]) || void 0 === t
                      ? void 0
                      : t.x)
                  );
                }) ||
                c.find((e) => {
                  var t, l;
                  return (
                    25 >
                    Math.abs(
                      e.x -
                        (null !==
                          (l =
                            null === (t = i[null != n ? n : 0]) || void 0 === t
                              ? void 0
                              : t.x) && void 0 !== l
                          ? l
                          : 0)
                    )
                  );
                })
              ? null
              : u();
          };
        let _ = (e) =>
          e.reduce((e, t) => {
            if (e.length) {
              let l = e.findIndex((e) => e.x === t.x);
              l >= 0
                ? e[l].value > t.value && (e[l].value = t.value)
                : e.push(t);
            } else e.push(t);
            return e;
          }, []);
        var m = (e) => {
            var t, l;
            let {
              cx: o,
              cy: i,
              payload: s,
              special: r,
              index: u,
              dataList: c,
              updatePosition: d,
              updatePnlLabelPosition: p,
              compact: h,
              color: x,
            } = e;
            return ((0, n.useEffect)(() => {
              let e = Math.min(...c.map((e) => e.value));
              (null == s ? void 0 : s.value) == e && p(Number(i)),
                (null == s ? void 0 : s.value) == 0 && d(Number(i));
            }, []),
            r.find((e) => e.x == (null == s ? void 0 : s.x)) ||
              ((null == s ? void 0 : s.value) === 0 &&
                (null === (t = c[u ? u - 1 : 0]) || void 0 === t
                  ? void 0
                  : t.value) !== 0))
              ? ((l = null != u ? u : 0),
                0 === Number(null == s ? void 0 : s.value) ||
                (l !== c.length && c[l].value > 0 && c[l + 1].value < 0) ||
                (c[l].value < 0 && c[l + 1].value > 0)
                  ? (0, a.jsx)(
                      "circle",
                      {
                        cx: o,
                        cy: i,
                        r: 2,
                        fill: x || "#fff",
                        stroke: x || "#fff",
                        strokeWidth: 1,
                        opacity: h ? 0 : 1,
                      },
                      l
                    )
                  : Number(null == s ? void 0 : s.value) > 0
                  ? (0, a.jsx)(
                      "circle",
                      {
                        cx: o,
                        cy: i,
                        r: 2,
                        fill: "#5ee192",
                        stroke: "#5ee192",
                        strokeWidth: 1,
                        opacity: h ? 0 : 1,
                      },
                      l
                    )
                  : 0 > Number(null == s ? void 0 : s.value)
                  ? (0, a.jsx)(
                      "circle",
                      {
                        cx: o,
                        cy: i,
                        r: 2,
                        fill: "#FF3F57",
                        stroke: "#FF3F57",
                        strokeWidth: 1,
                        opacity: h ? 0 : 1,
                      },
                      l
                    )
                  : void 0)
              : null;
          },
          j = l(77125),
          y = l(9386),
          w = (e) => {
            let {
                keys: t,
                onChange: l,
                onDashed: o,
                showMultipleExpiries: i = !1,
              } = e,
              [s, r] = (0, n.useState)([]),
              [u, c] = (0, n.useState)({
                label: { option: "Total", value: "total" },
                type: "leg16",
              });
            (0, n.useEffect)(() => {
              let e = [],
                l = [
                  "leg1",
                  "leg2",
                  "leg3",
                  "leg4",
                  "leg5",
                  "leg6",
                  "leg7",
                  "leg8",
                  "leg9",
                  "leg10",
                  "leg11",
                  "leg12",
                  "leg13",
                  "leg14",
                  "leg15",
                  "leg16",
                ];
              t
                .filter((e) => !i || !e.value.includes("total-"))
                .map((t, a) => {
                  if ("total" == t.value)
                    e.push({
                      label: { option: "Total", value: "total" },
                      type: "leg16",
                    });
                  else if ("quantity" !== t.value) {
                    let n = l[a - 1] || "leg1";
                    e.push({ label: t, type: n });
                  }
                }),
                r(e);
            }, [t]);
            let d = (e) => (e.value === u.label.value ? x().badge : ""),
              p = (e) => {
                l && l(e);
              },
              h = (e) => {
                o(e);
              };
            return (0, a.jsx)("div", {
              className: x().container,
              children: s.map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "".concat(x().key, " ").concat(d(e.label)),
                    onClick: () => {
                      c(e), p(e);
                    },
                    onMouseEnter: () => h(e),
                    onMouseLeave: () =>
                      h({ label: { option: "", value: "" }, type: "leg16" }),
                    children: [
                      (0, a.jsx)(y.Z, { type: e.type }),
                      (0, a.jsx)("p", { children: e.label.option }),
                    ],
                  },
                  t
                )
              ),
            });
          },
          b = l(59731),
          C = l(37129),
          F = l(26740),
          N = l(12781),
          k = l(70087),
          M = l(36483),
          D = l.n(M),
          P = l(45338),
          S = l(83824),
          E = l(18666),
          L = l(70757);
        let I = (e) => {
          let {
              currentExpiryDate: t,
              spotPrices: l,
              currentCurrencyPair: n,
              underlyingCurrency: o,
            } = (0, b.qr)(),
            i = l[n],
            { type: s } = e;
          switch (s) {
            case "bonus": {
              let { barrier: l, strike: n, price: i } = e;
              return (0, a.jsxs)("div", {
                className: ""
                  .concat(D().popupContainer, " ")
                  .concat(D().bonusOrTwinWin),
                children: [
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("span", {
                        className: D().popupBuyEth,
                        children: "Buy",
                      }),
                      (0, L.XX)(o),
                      (0, a.jsx)("span", {
                        className: D().lato,
                        children: "@",
                      }),
                      i,
                    ],
                  }),
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("span", {
                        className: D().popupIfEth,
                        children: "If",
                      }),
                      (0, L.XX)(o),
                      "@",
                      (0, a.jsx)("span", {
                        className: D().italic,
                        children: (0, E.p6)(t.toString(), E.Nn, E.KJ),
                      }),
                      (0, a.jsx)(N.Z, {}),
                      (0, P.uM)((0, P.Dx)(l), "string", o),
                      " (",
                      (0, a.jsx)(F.Z, {}),
                      n,
                      " )",
                      (0, a.jsx)(C.Z, {}),
                      (0, a.jsxs)("span", {
                        className: "position-relative",
                        children: [
                          (0, a.jsxs)("span", { children: [n, ";"] }),
                          (0, a.jsxs)("span", {
                            className: D().childLabel,
                            children: [
                              "Price",
                              (0, a.jsx)("br", {}),
                              "Reference",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("p", { children: ["Else ", (0, L.XX)(o)] }),
                ],
              });
            }
            case "twinWin": {
              let { barrier: l, strike: n, price: i } = e;
              return (0, a.jsxs)("div", {
                className: ""
                  .concat(D().popupContainer, " ")
                  .concat(D().bonusOrTwinWin),
                children: [
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("span", {
                        className: D().popupBuyEth,
                        children: "Buy",
                      }),
                      (0, L.XX)(o),
                      (0, a.jsx)("span", {
                        className: D().lato,
                        children: "@",
                      }),
                      i,
                    ],
                  }),
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("span", {
                        className: D().popupIfEth,
                        children: "If",
                      }),
                      (0, L.XX)(o),
                      "@",
                      (0, a.jsx)("span", {
                        className: D().italic,
                        children: (0, E.p6)(t.toString(), E.Nn, E.KJ),
                      }),
                      (0, a.jsx)(N.Z, {}),
                      (0, P.uM)((0, P.Dx)(l), "string", o),
                      " (",
                      (0, a.jsx)(F.Z, {}),
                      n,
                      " )",
                      (0, a.jsx)(C.Z, {}),
                      (0, a.jsxs)("span", {
                        className: "position-relative",
                        children: [
                          (0, a.jsx)("span", { children: n }),
                          (0, a.jsxs)("span", {
                            className: D().childLabel,
                            children: [
                              "Price",
                              (0, a.jsx)("br", {}),
                              "Reference",
                            ],
                          }),
                        ],
                      }),
                      "+ (",
                      (0, a.jsxs)("span", {
                        className: "position-relative",
                        children: [
                          (0, a.jsx)("span", { children: n }),
                          (0, a.jsxs)("span", {
                            className: D().childLabel,
                            children: [
                              "Price",
                              (0, a.jsx)("br", {}),
                              "Reference",
                            ],
                          }),
                        ],
                      }),
                      "- ",
                      (0, L.XX)(o),
                      " );",
                    ],
                  }),
                  (0, a.jsxs)("p", { children: ["Else ", (0, L.XX)(o)] }),
                ],
              });
            }
            case "risky": {
              let {
                  risk: t,
                  earn: l,
                  currency: n,
                  price: s,
                  showInstructions: r,
                } = e,
                u =
                  n !== o
                    ? (0, P.uM)(parseFloat(t) / i, "", o)
                    : (0, P.uM)(Number(t), "", o),
                c =
                  "USDC" !== n
                    ? (0, P.uM)(parseFloat(t) * i, "", "USDC")
                    : (0, P.uM)(Number(t), "", "USDC");
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: ""
                      .concat(D().popupContainer, " ")
                      .concat(D().popupTopContainer, " ")
                      .concat(D().riskyEarn1, " ")
                      .concat(r ? D().open : D().closed),
                    children: (0, a.jsxs)("p", {
                      children: [
                        "If ",
                        (0, L.XX)(o),
                        " ",
                        (0, a.jsx)(F.Z, {}),
                        " ",
                        s,
                        ", receive ",
                        u,
                        " ",
                        (0, L.XX)(o),
                        " ",
                        (0, a.jsx)(k.Z, {}),
                        " ",
                        l,
                        " ",
                        (0, a.jsx)(j.Z, {}),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: ""
                      .concat(D().popupContainer, " ")
                      .concat(D().riskyEarn2),
                    children: (0, a.jsxs)("p", {
                      children: [
                        "If ",
                        (0, L.XX)(o),
                        " ",
                        (0, a.jsx)(N.Z, {}),
                        " ",
                        s,
                        ", receive ",
                        c,
                        " ",
                        (0, a.jsx)(j.Z, {}),
                        " ",
                        (0, a.jsx)(k.Z, {}),
                        " ",
                        l,
                        " ",
                        (0, a.jsx)(j.Z, {}),
                      ],
                    }),
                  }),
                ],
              });
            }
            case "options": {
              let { greeks: t, side: l, showInstructions: n, callOrPut: o } = e;
              return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)("div", {
                  className: ""
                    .concat(D().popupContainer, " ")
                    .concat(D().popupGreeksContainer, " ")
                    .concat("Call" === o ? D().call : D().put, " ")
                    .concat("BUY" === l ? D().buy : D().sell, " ")
                    .concat(n ? D().open : D().closed),
                  children: (0, a.jsx)(S.Z, { greeks: t }),
                }),
              });
            }
          }
        };
        var T = l(97338);
        let A = (e, t, l) => {
            let a = Math.max(...l.map((e) => e.value)),
              n = Math.min(...l.map((e) => e.value));
            return a <= 0 ? 1 : n >= 0 ? 0 : a / (a - n);
          },
          Z = function (e, t, l, n, o) {
            let i =
              !(arguments.length > 5) ||
              void 0 === arguments[5] ||
              arguments[5];
            return (0, a.jsxs)("defs", {
              children: [
                "total" === o &&
                  (0, a.jsxs)("linearGradient", {
                    id: "fillGradient-".concat(n),
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      1 !== e
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#4bb475",
                              stopOpacity: 0.2,
                            }),
                          })
                        : "",
                      1 !== e
                        ? (0, a.jsx)("stop", {
                            offset: 0 === e ? 1 : e,
                            stopColor: "#4bb475",
                            stopOpacity: 0,
                          })
                        : "",
                      1 !== e && 0 !== e
                        ? (0, a.jsx)("stop", {
                            offset: e,
                            stopColor: "#8884d8",
                            stopOpacity: 0,
                          })
                        : "",
                      0 !== e
                        ? (0, a.jsx)("stop", {
                            offset: 1 === e ? 0 : e,
                            stopColor: "#FF3F57",
                            stopOpacity: 0,
                          })
                        : "",
                      0 !== e
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#FF3F57",
                              stopOpacity: 0.3,
                            }),
                          })
                        : "",
                    ],
                  }),
                (0, a.jsx)("filter", {
                  id: "glow",
                  x: "-50%",
                  y: "-50%",
                  width: "200%",
                  height: "200%",
                  children: (0, a.jsx)("feGaussianBlur", {
                    in: "SourceGraphic",
                    stdDeviation: "2",
                    result: "blur",
                  }),
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "lineGradient-".concat(n),
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [
                    1 !== e
                      ? (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)("stop", {
                            offset: "0%",
                            stopColor: "total" === o ? "#4bb475" : t,
                            stopOpacity: 1,
                          }),
                        })
                      : "",
                    1 !== e
                      ? (0, a.jsx)("stop", {
                          offset: 0 === e ? 1 : e - 0.1,
                          stopColor: "total" === o ? "#4bb475" : t,
                          stopOpacity: 1,
                        })
                      : "",
                    i
                      ? (0, a.jsx)("stop", {
                          offset: 1 === e ? 0 : e,
                          stopColor: "total" === o ? "#fff" : t,
                          stopOpacity: 1,
                        })
                      : "",
                    0 !== e
                      ? (0, a.jsx)("stop", {
                          offset: 1 === e ? 0 : e + 0.1,
                          stopColor: "total" === o ? "#FF3F57" : t,
                          stopOpacity: 1,
                        })
                      : "",
                    0 !== e
                      ? (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)("stop", {
                            offset: "100%",
                            stopColor: "total" === o ? "#FF3F57" : t,
                            stopOpacity: 1,
                          }),
                        })
                      : "",
                  ],
                }),
                l &&
                  (0, a.jsxs)("linearGradient", {
                    id: "dashGradient-".concat(n),
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      (0, a.jsx)("stop", {
                        offset: "90%",
                        stopColor: l,
                        stopOpacity: 0.4,
                      }),
                      (0, a.jsx)("stop", {
                        offset: "5%",
                        stopColor: l,
                        stopOpacity: 0.3,
                      }),
                      (0, a.jsx)("stop", {
                        offset: "5%",
                        stopColor: l,
                        stopOpacity: 0.1,
                      }),
                    ],
                  }),
              ],
            });
          },
          B = (e) => {
            let t = e[1].x - e[0].x,
              l = O(e),
              a = [],
              n = 0;
            for (let t = 0; t < e.length - 1; t++) {
              var o, i;
              let l =
                (parseFloat(
                  null === (o = e[t].value) || void 0 === o
                    ? void 0
                    : o.toFixed(5)
                ) -
                  parseFloat(
                    null === (i = e[t + 1].value) || void 0 === i
                      ? void 0
                      : i.toFixed(5)
                  )) /
                (e[t].x - e[t + 1].x);
              if (
                !isNaN(l) &&
                (l === 1 / 0 ||
                  (n !== l &&
                    Math.round((n / l) * 10) / 10 != 1 &&
                    0 !== e[t].value) ||
                  (t !== e.length && e[t].value > 0 && e[t + 1].value < 0) ||
                  (e[t].value < 0 && e[t + 1].value > 0))
              ) {
                if (((n = l), 0 === t)) continue;
                let o = a.find((l) => l.value === e[t].value);
                o
                  ? Math.abs(e[t].x - o.x) > 1
                    ? a.push({ x: e[t].x, value: e[t].value })
                    : e[t].x % 10 == 0 && (o.x = e[t].x)
                  : a.push({ x: e[t].x, value: e[t].value });
              }
            }
            return (
              a.sort((e, t) => e.x - t.x),
              a.filter(
                (e, a, n) =>
                  a === n.length - 1 ||
                  n[a + 1].x - e.x >= t ||
                  Math.abs(n[a + 1].value - e.value) > l
              )
            );
          },
          O = (e) => {
            let t = e.length,
              l = e.reduce((e, t) => e + t.value, 0) / t;
            return Math.sqrt(
              e.reduce((e, t) => {
                let a = t.value - l;
                return e + a * a;
              }, 0) / t
            );
          },
          V = (e, t, l) =>
            e.map((e) => ({
              value: e[t.value],
              dashValue: "" != l.value ? e[l.value] : void 0,
              x: e.x,
            })),
          X = (e) =>
            Object.keys(e[0])
              .filter((e) => !["x"].includes(e))
              .map((e) => {
                let t = e.split("@")[0];
                if (e.includes("Total")) {
                  let l = (0, E.lV)(e.split("-")[1]);
                  t = "Total - ".concat(l);
                }
                return { option: t, value: e };
              }),
          G = (e, t) => {
            let l = 1 / 0,
              a = -1 / 0;
            return (
              e.forEach((e) => {
                Object.keys(e).forEach((n) => {
                  "x" !== n &&
                    n === t &&
                    ((l = Math.min(l, e[n])), (a = Math.max(a, e[n])));
                });
              }),
              { min: l, max: a }
            );
          },
          U = (e) => {
            let t = e[0],
              l = 0,
              a = 0,
              n = [];
            return (
              e.forEach((o, i) => {
                let s = Math.round(l / 2 + a);
                t.total.toFixed(1) === o.total.toFixed(1)
                  ? (l += 1)
                  : l > 50
                  ? (n.length,
                    n.push({ ...e[s], index: s }),
                    (a = i),
                    (l = 0),
                    (t = o))
                  : ((t = o), (l = 0), (a = i)),
                  i === e.length - 1 &&
                    l > 50 &&
                    n.length &&
                    n.push({ ...e[s], index: s });
              }),
              n
            );
          };
        var Y = l(24514),
          q = l(93967),
          W = l.n(q),
          z = (e) => {
            let { value: t, isChartHovered: l } = e,
              n = (0, P.uM)(t, "string", "USDC");
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("p", {
                  className:
                    "!tw-font-white tw-flex-nowrap tw-whitespace-nowrap !tw-text-xxs !tw-font-semibold",
                  children: "Potential P&L:",
                }),
                (() => {
                  if (!l) return (0, a.jsx)("p", { children: "-" });
                  let e =
                    t > 0
                      ? x().greenColor
                      : t < 0
                      ? x().redColor
                      : x().whiteColor;
                  return (0, a.jsxs)("p", {
                    className: W()(e, "tw-flex-nowrap tw-whitespace-nowrap"),
                    children: [t > 0 ? "+" : "", n],
                  });
                })(),
                (0, a.jsx)(j.Z, {}),
              ],
            });
          },
          K = (e) => {
            let { y: t, x: l } = e;
            return (0, a.jsx)("text", {
              x: l,
              y: t + 20,
              fill: "white",
              fontSize: 10,
              fontWeight: 600,
              textAnchor: "left",
              children: "No Downside",
            });
          };
        let R = [
            "#5EE192",
            "#A855F7",
            "#B5B5F8",
            "#FF772A",
            "#7AD136",
            "#FF3F57",
            "#6545A4",
            "#18B5B5",
            "#4421AF",
            "#D7658B",
            "#7C1158",
            "#786028",
            "#50E991",
            "#B33DC6",
            "#00836E",
          ],
          J = [
            "#5EE192",
            "#A855F7",
            "#B5B5F8",
            "#FF772A",
            "#7AD136",
            "#FF3F57",
            "#6545A4",
            "#18B5B5",
            "#4421AF",
            "#D7658B",
            "#7C1158",
            "#786028",
            "#50E991",
            "#B33DC6",
            "#00836E",
          ];
        var H = (e) => {
          let {
              additionalContent: t,
              chartData: l = T.L,
              height: h,
              showKeys: _ = !0,
              showPortial: y = !0,
              isOnboarding: b = !1,
              minYield: C,
              maxYield: F,
              compact: N,
              id: k,
              infoPopup: M,
              customReadout: D,
              customDomain: E,
              showProfitLoss: L = !0,
              greeks: O,
              subTitle: q = (0, a.jsx)(a.Fragment, {}),
              showMultipleExpiries: W = !1,
            } = e,
            [H, Q] = (0, n.useState)(!1),
            [$, ee] = (0, n.useState)(0),
            [et, el] = (0, n.useState)(0),
            [ea] = (0, n.useState)({
              label: { option: "Total", value: "total" },
              type: "leg1",
            }),
            [en, eo] = (0, n.useState)({
              label: { option: "", value: "" },
              type: "leg1",
            }),
            [ei, es] = (0, n.useState)(!1),
            [er, eu] = (0, n.useState)(!1),
            [ec, ed] = (0, n.useState)(0),
            [ep, eh] = (0, n.useState)(0),
            [ex, ev] = (0, n.useState)([]),
            [ef, eg] = (0, n.useState)([]),
            [e_, em] = (0, n.useState)(),
            [ej, ey] = (0, n.useState)([]),
            [ew, eb] = (0, n.useState)(0),
            [eC, eF] = (0, n.useState)([{ option: "Total", value: "total" }]),
            [eN, ek] = (0, n.useState)({ option: "Total", value: "total" }),
            [eM, eD] = (0, n.useState)("#5EE192"),
            [eP, eS] = (0, n.useState)("#B5B5F8"),
            [eE, eL] = (0, n.useState)({ min: 0, max: 0 }),
            [eI, eT] = (0, n.useState)(h - 30),
            [eA, eZ] = (0, n.useState)(0),
            [eB, eO] = (0, n.useState)([]),
            [eV, eX] = (0, n.useState)(),
            [eG, eU] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            Q(!0), (null == l ? void 0 : l.length) && eF(X(l));
          }, [l]),
            (0, n.useEffect)(() => {
              let e = eC.findIndex((e) => e.value === eN.value);
              "total" !== eN.value &&
                -1 === e &&
                ek({ option: "Total", value: "total" });
            }, [eC, eN]),
            (0, n.useEffect)(() => {
              if (null == l ? void 0 : l.length) {
                b && eg(U(l)), eL(E || G(l, eN.value));
                let e = V(l, ea.label, "total" !== eN.value ? eN : en.label);
                if (
                  (eD(R[eC.findIndex((e) => e.value === eN.value) - 1]),
                  eS(J[eC.findIndex((e) => e.value === en.label.value) - 1]),
                  eh(Math.max(...e.map((e) => e.value))),
                  ed(Math.min(...e.map((e) => e.value))),
                  !W)
                ) {
                  let t = B(e);
                  ey("total" === eN.value ? t : []);
                }
                eu(!1), es(!1);
                let t = e.map((e) => ({
                  ...e,
                  value:
                    "total" !== eN.value && void 0 !== e.dashValue
                      ? e.dashValue - 0
                      : e.value - 0,
                  dashValue: void 0 !== e.dashValue ? e.dashValue - 0 : void 0,
                }));
                t[0].value < t[1].value && t[1].value - t[0].value > 0.1
                  ? eu(!0)
                  : t[0].value > t[1].value &&
                    t[0].value - t[1].value > 0.1 &&
                    es(!0),
                  t[t.length - 1].value > t[t.length - 2].value &&
                  t[t.length - 1].value - t[t.length - 2].value > 0.1
                    ? es(!0)
                    : t[t.length - 1].value < t[t.length - 2].value &&
                      t[t.length - 2].value - t[t.length - 1].value > 0.1 &&
                      eu(!0),
                  ev(t),
                  em(A(eI, h, t)),
                  eO([]);
              }
            }, [ea, l, en, eN]),
            (0, n.useEffect)(() => {
              E && eT(0 === E.min ? 0 : h);
            }, [l]),
            (0, n.useEffect)(() => {
              "number" == typeof e_ && eX(Z(e_, eM, eP, k, eN.value, !E));
            }, [e_, eM, eP, eN, E]);
          let eY = (0, n.useCallback)((e) => {
              ee(e);
            }, []),
            eq = (0, n.useMemo)(() => {
              let [e, t] = ex;
              return (
                (null == e ? void 0 : e.value) === 0 &&
                (null == t ? void 0 : t.value) === 0
              );
            }, [ex]),
            eW = (0, n.useMemo)(() => {
              var e, t;
              let l = ex.length;
              return (
                (null == ex
                  ? void 0
                  : null === (e = ex[l - 1]) || void 0 === e
                  ? void 0
                  : e.value) === 0 &&
                (null == ex
                  ? void 0
                  : null === (t = ex[l - 2]) || void 0 === t
                  ? void 0
                  : t.value) === 0
              );
            }, [ex]);
          return (0, a.jsx)(a.Fragment, {
            children:
              H &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  !N &&
                    (0, a.jsxs)(Y.Z, {
                      direction: "row-space-between",
                      margin: "mb-10 mt-15 z-unset",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "tw-z-[50] tw-flex tw-flex-1 tw-items-end tw-justify-between",
                          children: [
                            (0, a.jsx)("div", {
                              className: "tw-flex tw-items-end tw-gap-2",
                              children: (0, a.jsx)("div", { children: t }),
                            }),
                            !b &&
                              (0, a.jsx)("div", {
                                className:
                                  "!tw-flex-row !tw-items-end !tw-justify-end tw-self-end "
                                    .concat(x().unlimited, " ")
                                    .concat(y && L ? "" : x().hide),
                                children: (0, a.jsx)(z, {
                                  value: $,
                                  isChartHovered: eG,
                                }),
                              }),
                          ],
                        }),
                        q,
                        (0, a.jsx)("div", {
                          className: ""
                            .concat(x().unlimited, " ")
                            .concat(D ? "" : x().hide),
                          children: (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("h3", {
                                children: null == D ? void 0 : D.label,
                              }),
                              (0, a.jsx)("span", {
                                className: x().greenColor,
                                children: null == D ? void 0 : D.value,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  (0, a.jsx)(o.h, {
                    debounce: 200,
                    width: "100%",
                    height: h,
                    onResize: (e) => {
                      eb(e);
                    },
                    children: (0, a.jsxs)(i.T, {
                      onMouseLeave: () => eU(!1),
                      data: ex,
                      onMouseMove: (e) => {
                        if (
                          e &&
                          (e.isTooltipActive ? eU(!0) : eU(!1), e.activePayload)
                        ) {
                          let t = e.chartX;
                          el(null != t ? t : 0);
                        }
                      },
                      margin: {
                        top: N ? 0 : b ? 32 : 18,
                        right: 0,
                        left: 0,
                        bottom: N ? 0 : 25,
                      },
                      children: [
                        eV,
                        (0, a.jsx)(s.B, {
                          type: "number",
                          domain: [eE.min, eE.max],
                          hide: !0,
                        }),
                        (0, a.jsx)(r.u, {
                          type: "linear",
                          stroke: "url(#lineGradient-".concat(k, ")"),
                          strokeWidth: "1",
                          dataKey: "value",
                          fill: "transparent",
                          activeDot: !1,
                        }),
                        (0, a.jsx)(r.u, {
                          type: "linear",
                          stroke: "url(#dashGradient-".concat(k, ")"),
                          dataKey: "dashValue",
                          strokeDasharray: "3 3",
                          fill: "transparent",
                          activeDot: !1,
                        }),
                        (0, a.jsx)(r.u, {
                          type: "linear",
                          stroke: "url(#lineGradient-".concat(k, ")"),
                          dataKey: "value",
                          fill: "url(#fillGradient-".concat(k, ")"),
                          filter: "url(#glow)",
                          label:
                            !N &&
                            (0, a.jsx)(g, {
                              base: 0,
                              dataSize: ex.length,
                              special: ej,
                              dataList: ex,
                              height: h,
                              labelPosition: eB,
                            }),
                          dot: (0, a.jsx)(m, {
                            base: 0,
                            compact: N || !1,
                            dataSize: ex.length,
                            special: ej,
                            color: eM,
                            dataList: ex,
                            updatePosition: (e) => {
                              eT(e);
                            },
                            updatePnlLabelPosition: eZ,
                          }),
                          activeDot: !1,
                        }),
                        (0, a.jsx)(u.d, {
                          y: 0,
                          stroke: "white",
                          strokeOpacity: 0.3,
                          strokeWidth: 0.5,
                        }),
                        !N &&
                          (0, a.jsx)(c.u, {
                            isAnimationActive: !1,
                            animationDuration: 1,
                            position: { x: et - 50, y: 7 },
                            wrapperStyle: { width: 100 },
                            cursor: (0, a.jsx)(f, { x: et, y: eI, height: h }),
                            content: (0, a.jsx)(v, {
                              x: et,
                              y: eI,
                              base: 0,
                              setChangeVal: eY,
                              height: h,
                            }),
                          }),
                        b && (null == l ? void 0 : l.length)
                          ? (0, a.jsx)(d.K, {
                              tick: !1,
                              axisLine: !1,
                              className: "".concat(y ? "" : x().hide),
                              height: 1,
                              children:
                                null == ef
                                  ? void 0
                                  : ef.map((e, t) => {
                                      let n =
                                          e.index *
                                          (ew /
                                            (null == l ? void 0 : l.length)),
                                        o =
                                          e.total.toFixed(1) === ep.toFixed(1);
                                      return (0, a.jsx)(
                                        p._,
                                        {
                                          content: (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsxs)("text", {
                                              x: n,
                                              y: o ? 20 : 100,
                                              fill: "white",
                                              fontSize: 14,
                                              textAnchor: "left",
                                              children: [
                                                "+",
                                                o ? F : C,
                                                "% APY",
                                              ],
                                            }),
                                          }),
                                          position: "insideBottom",
                                        },
                                        t
                                      );
                                    }),
                            })
                          : (0, a.jsxs)(d.K, {
                              tick: !1,
                              axisLine: !1,
                              className: "".concat(y ? "" : x().hide),
                              height: 1,
                              children: [
                                eq &&
                                  (0, a.jsx)(p._, {
                                    content: (0, a.jsx)(K, { y: eI, x: 0 }),
                                  }),
                                eW &&
                                  (0, a.jsx)(p._, {
                                    content: (0, a.jsx)(K, {
                                      y: eI,
                                      x: ew - 60,
                                    }),
                                  }),
                                0 !== ec &&
                                  (null == ex ? void 0 : ex.length) &&
                                  (0, a.jsx)(p._, {
                                    content: (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)("text", {
                                          x:
                                            (ex[ex.length - 1].value > 0 &&
                                              ex[0].value < 0) ||
                                            (ex[0].value <= ex[1].value &&
                                              ex[0].value <=
                                                ex[ex.length - 1].value)
                                              ? 10
                                              : ew -
                                                (er
                                                  ? 120
                                                  : 6.5 * (0, P.uM)(ec).length +
                                                    27 -
                                                    10),
                                          y: eA + 20 > h ? h - 20 : eA + 20,
                                          fill: ec > 0 ? "#5EE192" : "#FF3F57",
                                          fontSize: 12,
                                          textAnchor: "left",
                                          children: er
                                            ? "Unlimited Downside"
                                            : ec >= 0
                                            ? "+" + (0, P.uM)(ec)
                                            : (0, P.uM)(ec),
                                        }),
                                        er
                                          ? (0, a.jsx)(a.Fragment, {})
                                          : (0, a.jsx)(j.Z, {
                                              x:
                                                (ex[ex.length - 1].value > 0 &&
                                                  ex[0].value < 0) ||
                                                (ex[0].value <= ex[1].value &&
                                                  ex[0].value <=
                                                    ex[ex.length - 1].value)
                                                  ? 7 * (0, P.uM)(ec).length + 7
                                                  : ew - 17,
                                              y: eA > h ? h : eA + 8,
                                            }),
                                      ],
                                    }),
                                    position: "insideBottom",
                                  }),
                                (null == ex ? void 0 : ex.length) &&
                                  (0, a.jsx)(p._, {
                                    content: (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)("text", {
                                          x:
                                            ex[0].value > 0 &&
                                            ex[0].value >
                                              ex[ex.length - 1].value
                                              ? 10
                                              : ew -
                                                (ei
                                                  ? 100
                                                  : 6.5 * (0, P.uM)(ep).length +
                                                    27),
                                          y: 13,
                                          fill: ep > 0 ? "#5EE192" : "#FF3F57",
                                          fontSize: 12,
                                          textAnchor: "right",
                                          children: ei
                                            ? "Unlimited Upside"
                                            : ep >= 0
                                            ? "+" + (0, P.uM)(ep)
                                            : (0, P.uM)(ep),
                                        }),
                                        ei
                                          ? (0, a.jsx)(a.Fragment, {})
                                          : (0, a.jsx)(j.Z, {
                                              x:
                                                ex[0].value > 0 &&
                                                ex[0].value >
                                                  ex[ex.length - 1].value
                                                  ? 7 * (0, P.uM)(ep).length +
                                                    20
                                                  : ew - 17,
                                              y: 0,
                                            }),
                                      ],
                                    }),
                                    position: "insideBottom",
                                  }),
                              ],
                            }),
                      ],
                    }),
                  }),
                  !N && M && (0, a.jsx)(I, { ...M }),
                  _ &&
                    (0, a.jsx)(w, {
                      keys: eC,
                      onDashed: (e) => {
                        eo(e);
                      },
                      onChange: (e) => {
                        ek(e.label);
                      },
                      showMultipleExpiries: W,
                    }),
                  O &&
                    (0, a.jsx)("div", {
                      className:
                        "tw-mt-3 tw-rounded-md tw-border tw-border-rgba-white-20",
                      children: (0, a.jsx)(S.Z, { greeks: O }),
                    }),
                ],
              }),
          });
        };
      },
      9386: function (e, t, l) {
        "use strict";
        var a = l(85893),
          n = l(95661),
          o = l.n(n);
        let i = (() => {
          let e = {};
          for (let t = 1; t <= 16; t++)
            e["leg".concat(t)] = o()["leg".concat(t)];
          return e;
        })();
        t.Z = (e) => {
          let { type: t } = e,
            l = i[t] || o().leg1;
          return (0, a.jsx)("div", {
            className: "".concat(o().dot, " ").concat(l),
          });
        };
      },
      83824: function (e, t, l) {
        "use strict";
        l.d(t, {
          Z: function () {
            return r;
          },
        });
        var a = l(85893);
        let n = [
          { symbol: "&Delta;", name: "Delta", id: "delta" },
          { symbol: "&nu;", name: "Vega", id: "vega" },
          { symbol: "&Gamma;", name: "Gamma", id: "gamma" },
          { symbol: "&theta;", name: "Theta", id: "theta" },
        ];
        var o = l(15922),
          i = l(58330),
          s = l.n(i),
          r = (e) => {
            let { greeks: t } = e,
              l = (0, o.F)(),
              i = n.map((e) => {
                let { symbol: l, name: n, id: o } = e;
                return (0, a.jsxs)(
                  "div",
                  {
                    className: s().column,
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: l },
                          }),
                          n,
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: s().value,
                        children: t ? t[o].toFixed(3) : "0",
                      }),
                    ],
                  },
                  n
                );
              });
            return (0, a.jsxs)("div", {
              className: ""
                .concat(s().container, " ")
                .concat("phone" === l && s().mobile),
              children: [
                (0, a.jsx)("div", { className: s().title, children: "Greeks" }),
                "phone" === l
                  ? (0, a.jsx)("div", {
                      className: ""
                        .concat(s().greeksContainer, " ")
                        .concat("phone" === l && s().mobile),
                      children: i,
                    })
                  : i,
              ],
            });
          };
      },
      70087: function (e, t, l) {
        "use strict";
        var a = l(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.5 4C8.5 3.72386 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.72386 7.5 4V7.5L4 7.5C3.72386 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.72386 8.5 4 8.5L7.5 8.5L7.5 12C7.5 12.2761 7.72386 12.5 8 12.5C8.27614 12.5 8.5 12.2761 8.5 12L8.5 8.5H12C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5L8.5 7.5V4Z",
              fill: "#9D9DAA",
            }),
          });
      },
      37129: function (e, t, l) {
        "use strict";
        var a = l(85893);
        t.Z = () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("g", {
                clipPath: "url(#clip0_1744_66439)",
                children: (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15.3536 7.64645C15.1583 7.45118 14.8417 7.45118 14.6464 7.64645C14.4512 7.84171 14.4512 8.15829 14.6464 8.35355L17.7929 11.5H5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H17.7929L14.6464 15.6464C14.4512 15.8417 14.4512 16.1583 14.6464 16.3536C14.8417 16.5488 15.1583 16.5488 15.3536 16.3536L19.3536 12.3536C19.4015 12.3056 19.4377 12.2504 19.4621 12.1914C19.4623 12.1909 19.4625 12.1903 19.4627 12.1898C19.4872 12.13 19.4996 12.0665 19.5 12.003M15.3536 7.64645L19.3536 11.6464L15.3536 7.64645Z",
                  fill: "#9D9DAA",
                }),
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_1744_66439",
                  children: (0, a.jsx)("rect", {
                    width: "24",
                    height: "24",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
      },
      26740: function (e, t, l) {
        "use strict";
        var a = l(85893);
        t.Z = (e) => {
          let { className: t = "" } = e;
          return (0, a.jsx)("svg", {
            className: t,
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M9.33203 4L5.33203 8L9.33203 12",
              stroke: "#9D9DAA",
              strokeLinecap: "round",
            }),
          });
        };
      },
      12781: function (e, t, l) {
        "use strict";
        var a = l(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M6.66797 12L10.668 8L6.66797 4",
              stroke: "#9D9DAA",
              strokeLinecap: "round",
            }),
          });
      },
      72696: function (e, t, l) {
        "use strict";
        var a = l(85893),
          n = l(67294),
          o = l(30502),
          i = l.n(o);
        t.Z = (e) => {
          let {
              size: t,
              leftLabel: l = "",
              rightLabel: o = "",
              defaultState: s = "left",
              onChange: r,
              rightLabelClass: u,
            } = e,
            [c, d] = (0, n.useState)(s);
          return (
            (0, n.useEffect)(() => {
              d(s);
            }, [s]),
            (0, a.jsxs)("div", {
              className: ""
                .concat(i().toggle, " ")
                .concat(i()["toggle--".concat(t)]),
              onClick: () => {
                let e = "left" === c ? "right" : "left";
                d(e), r && r(e);
              },
              children: [
                l && (0, a.jsx)("p", { children: l }),
                (0, a.jsx)("div", {
                  className:
                    "right" === c
                      ? "".concat(i().switch, " ").concat(i().isActive)
                      : i().switch,
                  children: (0, a.jsx)("div", { className: i().slider }),
                }),
                o && (0, a.jsx)("p", { className: u, children: o }),
              ],
            })
          );
        };
      },
      97338: function (e, t, l) {
        "use strict";
        l.d(t, {
          L: function () {
            return a;
          },
          V: function () {
            return n;
          },
        });
        let a = [
            { value: 4e4, dashValue: void 0, x: 1 },
            { value: 38e3, dashValue: void 0, x: 2 },
            { value: 36e3, dashValue: void 0, x: 3 },
            { value: 34e3, dashValue: void 0, x: 4 },
            { value: 32e3, dashValue: void 0, x: 5 },
            { value: 3e4, dashValue: void 0, x: 6 },
            { value: 28e3, dashValue: void 0, x: 7 },
            { value: 26e3, dashValue: void 0, x: 8 },
          ],
          n = [
            { x: 1300, total: 0 },
            { x: 1310, total: 0 },
            { x: 1320, total: 0 },
            { x: 1330, total: 0 },
            { x: 1340, total: 0 },
            { x: 1350, total: 0 },
            { x: 1360, total: 0 },
            { x: 1370, total: 0 },
          ];
      },
      13880: function (e, t, l) {
        "use strict";
        var a = l(85893),
          n = l(2920),
          o = l.n(n);
        t.Z = (e) => {
          let { children: t, margin: l = "m-0", className: n = "" } = e;
          return (0, a.jsx)("div", {
            className: ""
              .concat(o().panel, " ")
              .concat(l && l, " ")
              .concat(n),
            children: t,
          });
        };
      },
      18182: function (e, t, l) {
        "use strict";
        l.d(t, {
          s: function () {
            return u;
          },
        });
        var a = l(27484),
          n = l.n(a),
          o = l(18666);
        let i = function (e, t) {
            let l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 10,
              a = Math.ceil((t - e) / l);
            return Array(a < 0 ? -1 * a : a)
              .fill(e)
              .map((e, t) => e + t * l);
          },
          s = (e, t) => {
            let l = e
              .map((e) => {
                var t;
                return "Forward" === e.payoff || "Spot" === e.payoff
                  ? e.premium
                  : (null === (t = e.economics) || void 0 === t
                      ? void 0
                      : t.strike) || 1e3;
              })
              .sort();
            return t
              ? i(t.min, t.max, 1)
              : i(l[0] - 500, l[l.length - 1] + 500, 1);
          },
          r = {
            Call: "Call",
            Put: "Put",
            BinaryCall: "Digital Call",
            BinaryPut: "Digital Put",
            Forward: "Forward",
            Spot: "Next Auction Forward",
          };
        function u(e, t) {
          let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = arguments.length > 4 ? arguments[4] : void 0,
            u = arguments.length > 5 ? arguments[5] : void 0,
            x = arguments.length > 6 ? arguments[6] : void 0,
            v = arguments.length > 7 ? arguments[7] : void 0,
            f = (e) => (null == v ? void 0 : v[0]) === e.toString(),
            g = {
              Call: (e, t, l, a) => {
                var n;
                return f(a) || 0 === l
                  ? Math.max(0, e - t)
                  : (null == u
                      ? void 0
                      : null === (n = u.blackVanillaPrice) || void 0 === n
                      ? void 0
                      : n.call(u, !0, e, t, l / 365.25, 0.6)) || 0;
              },
              Put: (e, t, l, a) => {
                var n;
                return f(a) || 0 === l
                  ? Math.max(0, t - e)
                  : (null == u
                      ? void 0
                      : null === (n = u.blackVanillaPrice) || void 0 === n
                      ? void 0
                      : n.call(u, !1, e, t, l / 365.25, 0.6)) || 0;
              },
              BinaryCall: (e, t, l, a) => {
                var n;
                return f(a) || 0 === l
                  ? e > t
                    ? 1
                    : 0
                  : (null == u
                      ? void 0
                      : null === (n = u.blackDigitalPrice) || void 0 === n
                      ? void 0
                      : n.call(u, !0, e, t, l / 365.25, 0.6)) || 0;
              },
              BinaryPut: (e, t, l, a) => {
                var n;
                return f(a) || 0 === l
                  ? e < t
                    ? 1
                    : 0
                  : (null == u
                      ? void 0
                      : null === (n = u.blackDigitalPrice) || void 0 === n
                      ? void 0
                      : n.call(u, !1, e, t, l / 365.25, 0.6)) || 0;
              },
              Forward: (e, t) => e - t,
              Spot: (e, t) => e - t,
            },
            _ = s(e, t),
            m = n()(null == i ? void 0 : i.toString(), o.Nn),
            j = _.map((t) => {
              let l = { x: t, total: 0 };
              return (
                e.forEach((e, s) => {
                  var u, c;
                  let d = 0;
                  i &&
                    e.economics.expiry &&
                    (d = n()(
                      null === (c = e.economics.expiry) || void 0 === c
                        ? void 0
                        : c.toString(),
                      o.Nn
                    ).diff(m, "day"));
                  let p = "BUY" === e.side ? 1 : -1,
                    h =
                      "Forward" !== e.payoff && "Spot" !== e.payoff
                        ? -e.premium * p
                        : 0,
                    x =
                      "Forward" !== e.payoff && "Spot" !== e.payoff
                        ? e.economics.strike
                        : e.premium,
                    v = p * g[e.payoff](t, x || 0, d, e.economics.expiry) + h,
                    f = ""
                      .concat(r[e.payoff])
                      .concat(
                        a
                          ? " - ".concat(
                              (0, o.lV)(
                                null === (u = e.economics.expiry) ||
                                  void 0 === u
                                  ? void 0
                                  : u.toString()
                              )
                            )
                          : "",
                        "@"
                      )
                      .concat(s),
                    _ = parseFloat(e.quantity);
                  (l[f] = v * _), (l.total += v * _);
                }),
                l
              );
            });
          l && (j = h(j));
          let y = j.reduce((e, t) => e + t.total, 0) / j.length,
            w = Math.sqrt(
              j.reduce((e, t) => e + Math.pow(t.total - y, 2), 0) / j.length
            );
          if (x) return p(j, !1).map((e) => ({ ...e, total: e.total + x }));
          let b = c(j, w),
            C = d(j, b);
          return p(j, C);
        }
        let c = (e, t) => {
            let l = 0;
            return e.reduce((a, n, o) => {
              if (o === e.length - 1) return a;
              let i = (n.total - e[o + 1].total) / (n.x - e[o + 1].x);
              return (
                l !== i &&
                  Math.round((l / i) * 10) / 10 != 1 &&
                  Math.abs(n.total - e[o + 1].total) > 0.25 * t &&
                  ((l = i), 0 !== o && a.push({ ...n, index: o })),
                a
              );
            }, []);
          },
          d = (e, t) => {
            let l = !1;
            return (
              t.forEach((t) => {
                if (t.index < e.length - 1) {
                  let a =
                    e[t.index + (Math.abs(Math.round(t.x)) % 10 != 0 ? 0 : 1)];
                  l = l || Math.abs(Math.round(t.x)) % 10 != 0;
                  let n = t.total + (l ? e[t.index + 1].total : a.total);
                  !l &&
                  n < Math.max(t.total, a.total) &&
                  n > Math.min(t.total, a.total)
                    ? e.push({ ...a, total: 0, x: t.x })
                    : l &&
                      n < Math.max(t.total, e[t.index + 1].total) &&
                      n > Math.min(t.total, e[t.index + 1].total) &&
                      e.push({ ...a, total: 0, x: t.x + 1 }),
                    e.push({ ...a, x: t.x + (l ? 1 : 0) });
                }
              }),
              l
            );
          },
          p = (e, t) => (
            e.sort((e, l) =>
              e.x !== l.x
                ? e.x - l.x
                : t
                ? e.total < l.total
                  ? e.total - l.total
                  : l.total - e.total
                : e.total < l.total
                ? l.total - e.total
                : e.total - l.total
            ),
            e
          ),
          h = (e) => {
            let t = e.map((e) => e.total),
              l = Math.min(...t),
              a = Math.max(...t) - l;
            return e.map((e) => ({ ...e, total: e.total + -1 * l + 0.1 * a }));
          };
      },
      59085: function (e, t, l) {
        "use strict";
        l.d(t, {
          k: function () {
            return p;
          },
        });
        var a = l(45338),
          n = l(69881),
          o = l(27484),
          i = l.n(o),
          s = l(59731),
          r = l(18666),
          u = l(9202),
          c = l(88144),
          d = l(67930);
        let p = (e) => {
          var t;
          let {
              isForward: l,
              optionType: o,
              expiryDate: p,
              strike: h,
              side: x,
            } = e,
            {
              spotContract: v,
              getContractsByPayoff: f,
              quotingParams: g,
              currentSpotPrice: _,
              underlyingCurrency: m,
            } = (0, s.qr)(),
            j = (0, r.p6)(p.toString(), r.Nn, "YYYY-MM-DD"),
            y = () => {
              try {
                if (h) {
                  if ("-" === h && l) {
                    let e = f("Forward")["-"];
                    return ("NEXT_AUCTION" === o ? v : e).referencePrice;
                  }
                  if ("-" !== h && !l) return f(o)[h].referencePrice;
                }
                return 0;
              } catch (e) {
                return console.error("fetchPriceForUnit__error", e), 0;
              }
            },
            w = async () => {
              try {
                let e = "NEXT_AUCTION" === o ? i()().format("YYYY-MM-DD") : j,
                  t = await (0, n.AW)({ date: e, currency: m });
                if (!t.data) throw Error("Lack of data");
                return t.data;
              } catch (e) {
                return console.error("fetchPriceForUnit__error", e), y();
              }
            },
            b = async () => {
              try {
                let e = await (0, n.tw)({
                  optionType: o,
                  date: j,
                  strike: h,
                  currency: m,
                });
                if (!e.data) throw Error("Lack of data");
                return e.data;
              } catch (e) {
                return console.error("fetchPriceForUnit__error", e), y();
              }
            },
            {
              data: C,
              isLoading: F,
              isFetching: N,
            } = (0, c.a)({
              queryKey: ["forwardPrice", j, o, l],
              queryFn: w,
              enabled: l,
              placeholderData: y,
              staleTime: d.ol,
            }),
            {
              data: k,
              isLoading: M,
              isFetching: D,
            } = (0, c.a)({
              queryKey: ["regularPrice", j, o, h],
              queryFn: b,
              enabled: !!(!l && h && "-" !== h),
              placeholderData: y,
              staleTime: d.ol,
            }),
            P = l ? F : M,
            S = null !== (t = l ? C : k) && void 0 !== t ? t : 0;
          return {
            unitPrice: (0, a.eT)(
              x
                ? (0, u.O)({
                    midPrice: Number(S),
                    optionType: l ? "Forward" : o,
                    side: x,
                    forcedSpread: void 0,
                    quotingParams: g,
                    currentSpotPrice: _,
                  })
                : S
            ),
            isLoading: P,
            isFetching: D || N,
          };
        };
      },
      1810: function (e) {
        e.exports = {
          tooltipLabel: "ChartPayoff_tooltipLabel__VCyJQ",
          tooltipValue: "ChartPayoff_tooltipValue__ZdETY",
          contentList: "ChartPayoff_contentList__TI02x",
          unlimited: "ChartPayoff_unlimited__85Q1s",
          container: "ChartPayoff_container__hZdbX",
          badge: "ChartPayoff_badge__iN74c",
          key: "ChartPayoff_key__iM9ok",
          redColor: "ChartPayoff_redColor__3UeHy",
          greenColor: "ChartPayoff_greenColor__3dmq9",
          whiteColor: "ChartPayoff_whiteColor___0osP",
          hide: "ChartPayoff_hide__zUhwE",
        };
      },
      95661: function (e) {
        e.exports = {
          dot: "Dot_dot___FJDY",
          leg1: "Dot_leg1__7lHis",
          leg2: "Dot_leg2__qrBMa",
          leg3: "Dot_leg3__wyngY",
          leg4: "Dot_leg4__IUoeE",
          leg5: "Dot_leg5__qugkZ",
          leg6: "Dot_leg6__JxoI7",
          leg7: "Dot_leg7__NYsmm",
          leg8: "Dot_leg8__Z13pI",
          leg9: "Dot_leg9__lWUTN",
          leg10: "Dot_leg10__WIPDJ",
          leg11: "Dot_leg11__1NhnO",
          leg12: "Dot_leg12__b560X",
          leg13: "Dot_leg13__Xkk4S",
          leg14: "Dot_leg14___R_Q2",
          leg15: "Dot_leg15__1PmJP",
          leg16: "Dot_leg16__uJYCA",
        };
      },
      58330: function (e) {
        e.exports = {
          container: "Greeks_container__wOXWZ",
          mobile: "Greeks_mobile__3shYq",
          greeksContainer: "Greeks_greeksContainer__mi58m",
          column: "Greeks_column__UETAx",
          value: "Greeks_value__kDD2X",
          title: "Greeks_title__cixr_",
        };
      },
      36483: function (e) {
        e.exports = {
          popupContainer: "InfoPopup_popupContainer__KY0Tm",
          popupBuyEth: "InfoPopup_popupBuyEth__W4kJs",
          popupIfEth: "InfoPopup_popupIfEth__7ZKni",
          italic: "InfoPopup_italic__38_Zl",
          bonusOrTwinWin: "InfoPopup_bonusOrTwinWin___aOog",
          riskyEarn1: "InfoPopup_riskyEarn1__PtYN2",
          open: "InfoPopup_open__OuYAU",
          closed: "InfoPopup_closed__pQZh_",
          riskyEarn2: "InfoPopup_riskyEarn2__QgyVV",
          popupTopContainer: "InfoPopup_popupTopContainer__LcbvD",
          popupGreeksContainer: "InfoPopup_popupGreeksContainer__Hg2Nb",
          sell: "InfoPopup_sell__GKrcF",
          call: "InfoPopup_call__glZr4",
          put: "InfoPopup_put___Tz9U",
          buy: "InfoPopup_buy___Vl4_",
          childLabel: "InfoPopup_childLabel__vXh5h",
        };
      },
      30502: function (e) {
        e.exports = {
          toggle: "Toggle_toggle__qxwuT",
          switch: "Toggle_switch__ylhqh",
          slider: "Toggle_slider__0sb_g",
          isActive: "Toggle_isActive__LpaRr",
          "toggle--sm": "Toggle_toggle--sm__CUbLv",
        };
      },
      2920: function (e) {
        e.exports = { panel: "Panel_panel__unNp0" };
      },
    },
  ]);
