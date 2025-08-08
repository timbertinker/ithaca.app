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
      (e._sentryDebugIds[t] = "55600a3a-9917-4b0c-af0d-162068fe0b40"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-55600a3a-9917-4b0c-af0d-162068fe0b40"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8819, 7245, 579],
    {
      51910: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/agents/[id]",
          function () {
            return n(50371);
          },
        ]);
      },
      67859: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(63024),
          a = n(78450),
          s = n(50568);
        function i(e, t) {
          (0, s.Z)(2, arguments);
          var n = (0, r.Z)(t);
          return (0, a.Z)(e, 6e4 * n);
        }
      },
      67017: function (e, t, n) {
        "use strict";
        n.d(t, {
          q: function () {
            return g;
          },
        });
        var r = n(23560),
          a = n.n(r),
          s = n(67294),
          i = n(83038),
          l = n(48894),
          o = ["x1", "y1", "x2", "y2", "key"];
        function c(e) {
          return (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function d() {
          return (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
        }
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  x(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function w(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, f(r.key), r);
          }
        }
        function m(e, t) {
          return (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
        }
        function p(e) {
          return (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function x(e, t, n) {
          return (
            (t = f(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function f(e) {
          var t = (function (e, t) {
            if ("object" !== c(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== c(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === c(t) ? t : String(t);
        }
        var g = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && m(e, t);
          })(x, e);
          var t,
            n,
            r,
            u =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = p(x);
                return (
                  (e = t
                    ? Reflect.construct(n, arguments, p(this).constructor)
                    : n.apply(this, arguments)),
                  (function (e, t) {
                    if (t && ("object" === c(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(e);
                  })(this, e)
                );
              });
          function x() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, x),
              u.apply(this, arguments)
            );
          }
          return (
            (n = [
              {
                key: "renderHorizontal",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.x,
                    a = n.width,
                    i = n.horizontal;
                  if (!e || !e.length) return null;
                  var l = e.map(function (e, n) {
                    var s = h(
                      h({}, t.props),
                      {},
                      {
                        x1: r,
                        y1: e,
                        x2: r + a,
                        y2: e,
                        key: "line-".concat(n),
                        index: n,
                      }
                    );
                    return x.renderLineItem(i, s);
                  });
                  return s.createElement(
                    "g",
                    { className: "recharts-cartesian-grid-horizontal" },
                    l
                  );
                },
              },
              {
                key: "renderVertical",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.y,
                    a = n.height,
                    i = n.vertical;
                  if (!e || !e.length) return null;
                  var l = e.map(function (e, n) {
                    var s = h(
                      h({}, t.props),
                      {},
                      {
                        x1: e,
                        y1: r,
                        x2: e,
                        y2: r + a,
                        key: "line-".concat(n),
                        index: n,
                      }
                    );
                    return x.renderLineItem(i, s);
                  });
                  return s.createElement(
                    "g",
                    { className: "recharts-cartesian-grid-vertical" },
                    l
                  );
                },
              },
              {
                key: "renderVerticalStripes",
                value: function (e) {
                  var t = this.props.verticalFill;
                  if (!t || !t.length) return null;
                  var n = this.props,
                    r = n.fillOpacity,
                    a = n.x,
                    i = n.y,
                    l = n.width,
                    o = n.height,
                    c = e
                      .map(function (e) {
                        return Math.round(e + a - a);
                      })
                      .sort(function (e, t) {
                        return e - t;
                      });
                  a !== c[0] && c.unshift(0);
                  var d = c.map(function (e, n) {
                    var d = c[n + 1] ? c[n + 1] - e : a + l - e;
                    if (d <= 0) return null;
                    var u = n % t.length;
                    return s.createElement("rect", {
                      key: "react-".concat(n),
                      x: e,
                      y: i,
                      width: d,
                      height: o,
                      stroke: "none",
                      fill: t[u],
                      fillOpacity: r,
                      className: "recharts-cartesian-grid-bg",
                    });
                  });
                  return s.createElement(
                    "g",
                    { className: "recharts-cartesian-gridstripes-vertical" },
                    d
                  );
                },
              },
              {
                key: "renderHorizontalStripes",
                value: function (e) {
                  var t = this.props.horizontalFill;
                  if (!t || !t.length) return null;
                  var n = this.props,
                    r = n.fillOpacity,
                    a = n.x,
                    i = n.y,
                    l = n.width,
                    o = n.height,
                    c = e
                      .map(function (e) {
                        return Math.round(e + i - i);
                      })
                      .sort(function (e, t) {
                        return e - t;
                      });
                  i !== c[0] && c.unshift(0);
                  var d = c.map(function (e, n) {
                    var d = c[n + 1] ? c[n + 1] - e : i + o - e;
                    if (d <= 0) return null;
                    var u = n % t.length;
                    return s.createElement("rect", {
                      key: "react-".concat(n),
                      y: e,
                      x: a,
                      height: d,
                      width: l,
                      stroke: "none",
                      fill: t[u],
                      fillOpacity: r,
                      className: "recharts-cartesian-grid-bg",
                    });
                  });
                  return s.createElement(
                    "g",
                    { className: "recharts-cartesian-gridstripes-horizontal" },
                    d
                  );
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var e = this.props.fill;
                  if (!e || "none" === e) return null;
                  var t = this.props,
                    n = t.fillOpacity,
                    r = t.x,
                    a = t.y,
                    i = t.width,
                    l = t.height;
                  return s.createElement("rect", {
                    x: r,
                    y: a,
                    width: i,
                    height: l,
                    stroke: "none",
                    fill: e,
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.x,
                    n = e.y,
                    r = e.width,
                    l = e.height,
                    o = e.horizontal,
                    c = e.vertical,
                    d = e.horizontalCoordinatesGenerator,
                    u = e.verticalCoordinatesGenerator,
                    h = e.xAxis,
                    w = e.yAxis,
                    m = e.offset,
                    p = e.chartWidth,
                    x = e.chartHeight;
                  if (
                    !(0, i.hj)(r) ||
                    r <= 0 ||
                    !(0, i.hj)(l) ||
                    l <= 0 ||
                    !(0, i.hj)(t) ||
                    t !== +t ||
                    !(0, i.hj)(n) ||
                    n !== +n
                  )
                    return null;
                  var f = this.props,
                    g = f.horizontalPoints,
                    v = f.verticalPoints;
                  return (
                    (!g || !g.length) &&
                      a()(d) &&
                      (g = d({ yAxis: w, width: p, height: x, offset: m })),
                    (!v || !v.length) &&
                      a()(u) &&
                      (v = u({ xAxis: h, width: p, height: x, offset: m })),
                    s.createElement(
                      "g",
                      { className: "recharts-cartesian-grid" },
                      this.renderBackground(),
                      o && this.renderHorizontal(g),
                      c && this.renderVertical(v),
                      o && this.renderHorizontalStripes(g),
                      c && this.renderVerticalStripes(v)
                    )
                  );
                },
              },
            ]),
            (r = [
              {
                key: "renderLineItem",
                value: function (e, t) {
                  var n;
                  if (s.isValidElement(e)) n = s.cloneElement(e, t);
                  else if (a()(e)) n = e(t);
                  else {
                    var r = t.x1,
                      i = t.y1,
                      c = t.x2,
                      u = t.y2,
                      h = t.key,
                      w = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                              r,
                              a = {},
                              s = Object.keys(e);
                            for (r = 0; r < s.length; r++)
                              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var s = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < s.length; r++)
                            (n = s[r]),
                              !(t.indexOf(n) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  n
                                ) &&
                                (a[n] = e[n]);
                        }
                        return a;
                      })(t, o);
                    n = s.createElement(
                      "line",
                      d({}, (0, l.L6)(w), {
                        x1: r,
                        y1: i,
                        x2: c,
                        y2: u,
                        fill: "none",
                        key: h,
                      })
                    );
                  }
                  return n;
                },
              },
            ]),
            n && w(x.prototype, n),
            r && w(x, r),
            Object.defineProperty(x, "prototype", { writable: !1 }),
            x
          );
        })(s.PureComponent);
        x(g, "displayName", "CartesianGrid"),
          x(g, "defaultProps", {
            horizontal: !0,
            vertical: !0,
            horizontalPoints: [],
            verticalPoints: [],
            stroke: "#ccc",
            fill: "none",
            verticalFill: [],
            horizontalFill: [],
          });
      },
      40838: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var r = n(85893),
          a = n(67294),
          s = n(80052),
          i = n(93967),
          l = n.n(i),
          o = n(15922),
          c = n(37422),
          d = n(67253),
          u = n(24514),
          h = n(86322),
          w = n(45303),
          m = n.n(w),
          p = (e) => {
            let {
                children: t,
                isOpen: n,
                side: s,
                align: i,
                offset: o,
                footer: w,
                currentStep: p,
                continueClick: x,
                skipClick: f,
              } = e,
              [g, v] = (0, a.useState)(n);
            return ((0, a.useEffect)(() => {
              v(n);
            }, [n]),
            p)
              ? (0, r.jsxs)(h.fC, {
                  open: g,
                  children: [
                    (0, r.jsx)(h.xz, {
                      asChild: !0,
                      children: (0, r.jsx)("div", { children: t }),
                    }),
                    (0, r.jsx)(h.VY, {
                      align: i,
                      side: s,
                      className: "".concat(
                        m().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, r.jsxs)(r.Fragment, {
                        children: [
                          d.R[p].title &&
                            (0, r.jsx)("div", {
                              className: l()(m().title, "tw-mb-1"),
                              children: d.R[p].title,
                            }),
                          (0, r.jsx)("div", {
                            className: m().message,
                            children: d.R[p].message,
                          }),
                          w ||
                            (0, r.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, r.jsx)("div", { className: "flexGrow" }),
                                (0, r.jsx)("div", {
                                  className: m().skipButton,
                                  onClick: f,
                                  children: "Skip",
                                }),
                                (0, r.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: x,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, r.jsx)(h.Eh, { className: m().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)(r.Fragment, {});
          };
        let x = (0, a.forwardRef)((e, t) => {
          let {
              title: n,
              children: i,
              className: c,
              panelClassName: d,
              openOnClick: u = !1,
              leaveTimeout: h = 120,
              ...w
            } = e,
            m = (0, a.useRef)(null),
            x = t || m,
            f = (0, a.useRef)(null),
            g = (0, o.F)(),
            v = (0, a.useCallback)(
              (e) => {
                var t;
                u ||
                  (f.current && clearTimeout(f.current),
                  e || null === (t = x.current) || void 0 === t || t.click());
              },
              [u]
            ),
            y = (0, a.useCallback)(
              function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || n) &&
                  (f.current && clearTimeout(f.current),
                  (f.current = window.setTimeout(() => {
                    e && t();
                  }, h)));
              },
              [u, h]
            );
          (0, a.useEffect)(
            () => () => {
              f.current && clearTimeout(f.current);
            },
            []
          );
          let j = (e, t) =>
            (0, r.jsxs)("div", {
              onMouseEnter: () => v(e),
              onMouseLeave: () => y(e, t),
              children: [
                (0, r.jsx)(s.O7, {
                  ref: x,
                  className: "tw-flex tw-outline-none",
                  children: n,
                }),
                (0, r.jsx)(s.Hi, {
                  anchor: "bottom",
                  className: l()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === g },
                    d
                  ),
                  children: a.cloneElement(i, {
                    closePopover: () => {
                      f.current && clearTimeout(f.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, r.jsx)(s.J2, {
            className: l()("tw-relative", c),
            children: (e) => {
              let { open: t, close: n } = e,
                a = j(t, n);
              if (w.isTutorialOpen) {
                var s, i;
                return (0, r.jsx)(p, {
                  skipClick:
                    null !== (s = w.handleSkipTutorialClick) && void 0 !== s
                      ? s
                      : () => {},
                  continueClick:
                    null !== (i = w.handleContinueTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: a,
                });
              }
              return a;
            },
          });
        });
        x.displayName = "HoverPopover";
        var f = x;
      },
      97236: function (e, t, n) {
        "use strict";
        n.d(t, {
          Y: function () {
            return i;
          },
        });
        var r = n(85893);
        n(67294);
        var a = n(93967),
          s = n.n(a);
        let i = (e) => {
          let { children: t, className: n } = e;
          return (0, r.jsx)("div", {
            className: s()(
              "tw-rounded-3xl tw-border tw-border-white/[0.08] tw-bg-[#090D16]",
              n
            ),
            children: t,
          });
        };
      },
      21322: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(45113),
          s = n(46464),
          i = n(64520),
          l = n(67017),
          o = n(25615),
          c = n(88793),
          d = n(6008),
          u = n(55400);
        t.Z = (e) => {
          let {
            chartData: t,
            isPreview: n,
            isPositive: h,
            timeRange: w,
            chartTrend: m,
            getXAxisInterval: p,
            formatXAxisTick: x,
            config: f,
          } = e;
          return (0, r.jsx)(s.h, {
            width: null == f ? void 0 : f.width,
            height: null == f ? void 0 : f.height,
            children: (0, r.jsxs)(i.T, {
              data: t,
              margin: {
                top: n ? 4 : 24,
                right: 0,
                bottom: n ? 4 : -30,
                left: -56,
              },
              children: [
                (0, r.jsxs)("defs", {
                  children: [
                    (0, r.jsxs)("linearGradient", {
                      id: "positive-gradient",
                      x1: "0%",
                      y1: "0%",
                      x2: "0%",
                      y2: "100%",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0%",
                          stopColor: "#22C55E",
                          stopOpacity: n ? 0.2 : 1,
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: "#060E13",
                          stopOpacity: n ? 0.1 : 1,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("linearGradient", {
                      id: "negative-gradient",
                      x1: "0%",
                      y1: "0%",
                      x2: "0%",
                      y2: "100%",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0%",
                          stopColor: "#EF4444",
                          stopOpacity: n ? 0.2 : 1,
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: "#060E13",
                          stopOpacity: n ? 0.1 : 1,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(l.q, {
                  vertical: !1,
                  horizontal: !n,
                  strokeDasharray: "3 3",
                  strokeOpacity: 0.2,
                }),
                (0, r.jsx)(o.K, {
                  dataKey: "time",
                  axisLine: !1,
                  tickLine: !1,
                  tick: !n && { fontSize: 10, fill: "#666" },
                  interval: p,
                  tickFormatter: x,
                  height: n ? 0 : 30,
                }),
                (0, r.jsx)(c.B, {
                  dataKey: "price",
                  axisLine: !1,
                  tickLine: !1,
                  domain: [(e) => e - 0.5, (e) => e + 0.5],
                  tickFormatter: (e) => "".concat(e.toFixed(2), "%"),
                  tick:
                    !n &&
                    ((e) => {
                      let { x: t, y: n, payload: a } = e;
                      return (0, r.jsx)("text", {
                        x: t + 10,
                        y: n - 6,
                        fill: "#666",
                        fontSize: 10,
                        children: "".concat(a.value.toFixed(2), "%"),
                      });
                    }),
                  width: n ? 0 : void 0,
                }),
                (0, r.jsx)(d.u, {
                  content: (0, r.jsx)(a.W, { timeRange: w, chartTrend: m }),
                }),
                (0, r.jsx)(u.u, {
                  type: "monotone",
                  dataKey: "price",
                  stroke: h ? "#5EE192" : "#EF4444",
                  strokeWidth: 2,
                  fill: h
                    ? "url(#positive-gradient)"
                    : "url(#negative-gradient)",
                  isAnimationActive: !1,
                }),
              ],
            }),
          });
        };
      },
      45113: function (e, t, n) {
        "use strict";
        n.d(t, {
          W: function () {
            return u;
          },
          r: function () {
            return h;
          },
        });
        var r = n(85893),
          a = n(93967),
          s = n.n(a),
          i = n(67294),
          l = n(21322),
          o = n(37422);
        let c = { hourly: [], daily: [] },
          d = (e, t) => {
            let [n, r] = i.useState([]),
              a = i.useMemo(
                () => (n.length > 0 ? n[n.length - 1].price : 100),
                [n]
              ),
              s = i.useCallback(
                (e) =>
                  e
                    ? {
                        hourly: Array.isArray(e.hourly)
                          ? e.hourly.map((e) => ({
                              ...e,
                              price: 100 * e.price,
                            }))
                          : [],
                        daily: Array.isArray(e.daily)
                          ? e.daily.map((e) => ({ ...e, price: 100 * e.price }))
                          : [],
                      }
                    : c,
                []
              ),
              l = i.useCallback((e) => {
                if (e.length <= 60) return e;
                let t = Math.ceil(e.length / 60),
                  n = [];
                n.push(e[0]);
                for (let r = t; r < e.length - t; r += t) n.push(e[r]);
                return n.push(e[e.length - 1]), n;
              }, []),
              o = i.useCallback(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : c,
                    n = [],
                    r = Array.isArray(null == e ? void 0 : e.hourly)
                      ? e.hourly
                      : [],
                    a = Array.isArray(null == e ? void 0 : e.daily)
                      ? e.daily
                      : [];
                  if (0 === r.length && 0 === a.length) return [];
                  switch (t) {
                    case "1D":
                      n = r.slice(-24);
                      break;
                    case "7D":
                      n = r;
                      break;
                    case "30D":
                    default:
                      n = a.slice(-30);
                      break;
                    case "1Y":
                    case "All":
                      n = a;
                  }
                  return l(n);
                },
                [t, l]
              ),
              d = i.useMemo(() => {
                switch (t) {
                  case "1D":
                    return 3;
                  case "7D":
                    return Math.ceil(n.length / 7);
                  case "30D":
                    return 6;
                  case "1Y":
                    return Math.ceil(n.length / 12);
                  case "All":
                    return Math.ceil(n.length / 6);
                  default:
                    return 1;
                }
              }, [n.length, t]),
              u = i.useCallback(
                (e) => {
                  let n = String(e || ""),
                    r = new Date(
                      "string" == typeof n && n.endsWith("Z")
                        ? n
                        : "".concat(n, "Z")
                    );
                  switch (t) {
                    case "1D":
                      return r.toLocaleTimeString(void 0, { hour: "numeric" });
                    case "7D":
                      return r.toLocaleDateString(void 0, { weekday: "short" });
                    case "30D":
                      return r.toLocaleDateString(void 0, {
                        month: "short",
                        day: "numeric",
                      });
                    case "1Y":
                      return r.toLocaleDateString(void 0, { month: "short" });
                    case "All":
                      return r.toLocaleDateString(void 0, {
                        month: "short",
                        year: "2-digit",
                      });
                    default:
                      return r.toLocaleDateString();
                  }
                },
                [t]
              );
            return (
              i.useEffect(() => {
                e ? r(o(s(e))) : r([]);
              }, [e, t, o, s, l]),
              {
                chartData: n,
                currentPrice: a,
                getXAxisInterval: d,
                formatXAxisTick: u,
              }
            );
          },
          u = (e) => {
            let {
              active: t,
              payload: n,
              label: a,
              timeRange: s,
              chartTrend: i,
            } = e;
            if (t && n && n.length) {
              let e;
              let t = String(a || ""),
                l = new Date(
                  "string" == typeof t && t.endsWith("Z")
                    ? t
                    : "".concat(t, "Z")
                );
              return (
                (e =
                  "30D" === s || "1Y" === s || "All" === s
                    ? l.toLocaleDateString()
                    : l.toLocaleString(void 0, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !0,
                      })),
                (0, r.jsxs)("div", {
                  className:
                    "tw-rounded tw-border tw-border-white/10 tw-bg-gray-900 tw-p-2",
                  children: [
                    (0, r.jsx)("p", { className: "tw-text-sm", children: e }),
                    (0, r.jsx)("p", {
                      className: "tw-text-sm ".concat(
                        "positive" === i
                          ? "tw-text-ithaca-green-40"
                          : "tw-text-red-500"
                      ),
                      children: "NAV: ".concat(n[0].value.toFixed(2)),
                    }),
                  ],
                })
              );
            }
            return null;
          },
          h = (e) => {
            let { prices: t, isLoadingPrices: n, isPreview: a } = e,
              [c, u] = (0, i.useState)("All"),
              {
                chartData: h,
                currentPrice: w,
                getXAxisInterval: m,
                formatXAxisTick: p,
              } = d(t, c),
              x = (() => {
                if (h.length < 2) return "0";
                let e = h[0].price,
                  t = h[h.length - 1].price;
                return 0 === e ? "0" : (((t - e) / e) * 100).toFixed(2);
              })(),
              f = parseFloat(x) >= 0,
              g = (0, i.useMemo)(() => {
                var e, t;
                if (h.length < 2) return "positive";
                let n =
                  (null === (e = h[0]) || void 0 === e ? void 0 : e.price) || 0;
                return ((null === (t = h[h.length - 1]) || void 0 === t
                  ? void 0
                  : t.price) || 0) >= n
                  ? "positive"
                  : "negative";
              }, [h]),
              v =
                (null == t ? void 0 : t.nav_return) !== void 0
                  ? "".concat((100 * t.nav_return).toFixed(1), "%")
                  : "-",
              y = a
                ? "APY ".concat(v, " | NAV ").concat(w.toFixed(2))
                : "All Time",
              j = "All" === c ? y : c;
            return n || !h || 0 === h.length
              ? null
              : (0, r.jsxs)("div", {
                  className: s()(
                    "tw-flex tw-flex-col tw-rounded-xl tw-pb-2 tw-pt-6",
                    { "tw-border tw-border-white/10": !a }
                  ),
                  children: [
                    (0, r.jsxs)("div", {
                      className: s()(
                        "tw-mb-4 tw-flex tw-items-center tw-justify-between",
                        { "tw-px-6": !a, "tw-hidden": a }
                      ),
                      children: [
                        (0, r.jsx)("div", {
                          className: "tw-text-xl tw-leading-6",
                          children: "NAV",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "tw-flex tw-rounded-[4px] tw-bg-[#1E1E1E] tw-p-0.5",
                          children: ["1D", "7D", "30D", "1Y", "All"].map((e) =>
                            (0, r.jsx)(
                              o.Z,
                              {
                                size: "sm",
                                variant: "custom",
                                title: "Show ".concat(
                                  "All" === e
                                    ? "Return on NAV since inception"
                                    : e,
                                  " data"
                                ),
                                onClick: () => u(e),
                                className: s()(
                                  "tw-flex tw-h-[24px] tw-min-w-[32px] tw-items-center tw-justify-center tw-rounded-[4px] tw-px-2 tw-text-xs tw-transition-all hover:tw-bg-transparent hover:tw-text-white",
                                  c === e
                                    ? "tw-bg-[#2C2C2C] tw-text-white"
                                    : "tw-bg-transparent tw-text-[#666] "
                                ),
                                children: e,
                              },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-mb-4 tw-space-y-2 tw-px-6",
                      children: n
                        ? (0, r.jsx)("div", {
                            className:
                              "tw-py-4 tw-text-center tw-text-ithaca-gray-20",
                          })
                        : 0 === h.length
                        ? (0, r.jsx)("div", {
                            className:
                              "tw-py-4 tw-text-center tw-text-ithaca-gray-20",
                            children: "No price data available",
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              !a &&
                                (0, r.jsx)("div", {
                                  className: "tw-text-[30px] tw-font-bold",
                                  children: w.toFixed(2),
                                }),
                              (0, r.jsxs)("div", {
                                className: "tw-flex tw-items-center tw-gap-2",
                                children: [
                                  a ||
                                    (0, r.jsxs)("span", {
                                      className: f
                                        ? "tw-text-sm tw-text-ithaca-green-40"
                                        : "tw-text-sm tw-text-red-500",
                                      children: [
                                        f ? "+" : "",
                                        parseFloat(x).toFixed(2),
                                        "%",
                                      ],
                                    }),
                                  (0, r.jsxs)("span", {
                                    className:
                                      "tw-text-sm tw-text-ithaca-gray-500",
                                    children: ["All" !== c && "Last", " ", j],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    (0, r.jsx)("div", {
                      className: s()("tw-max-w-full tw-grow", {
                        "tw-h-64 tw-min-w-64": !a,
                        "tw-h-24": a,
                      }),
                      children: (0, r.jsx)(l.Z, {
                        chartData: h,
                        isPreview: a,
                        isPositive: f,
                        timeRange: c,
                        chartTrend: g,
                        getXAxisInterval: m,
                        formatXAxisTick: p,
                      }),
                    }),
                  ],
                });
          };
      },
      68964: function (e, t, n) {
        "use strict";
        n.d(t, {
          K: function () {
            return l;
          },
        });
        var r = n(85893),
          a = n(93967),
          s = n.n(a);
        let i = [
            { color: "tw-bg-[#6AF19F]", label: 1 },
            { color: "tw-bg-[#86D091]", label: 2 },
            { color: "tw-bg-[#95BD8A]", label: 3 },
            { color: "tw-bg-[#ACA280]", label: 4 },
            { color: "tw-bg-[#BB9078]", label: 5 },
            { color: "tw-bg-[#D3746D]", label: 6 },
            { color: "tw-bg-[#E45F64]", label: 7 },
            { color: "tw-bg-[#FD5366]", label: 8 },
            { color: "tw-bg-[#FF3F57]", label: 9 },
            { color: "tw-bg-[#F44450]", label: 10 },
          ],
          l = (e) => {
            var t;
            let { leftLabel: n, rightLabel: a, value: l } = e,
              o = null == l ? 0 : Math.min(Math.max(Math.round(l), 1), 10);
            return (0, r.jsx)("div", {
              className: "tw-w-full tw-space-y-1",
              title:
                null !== (t = null == l ? void 0 : l.toString()) && void 0 !== t
                  ? t
                  : "",
              children: (0, r.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-1",
                children: [
                  (0, r.jsx)("div", {
                    className: "tw-flex tw-h-3 tw-w-full tw-gap-[2px]",
                    children: i.map((e, t) => {
                      let n = t + 1 <= o;
                      return (0, r.jsx)(
                        "span",
                        {
                          className: s()(
                            "tw-flex tw-h-full tw-flex-1 tw-rounded-[1px]",
                            { "tw-bg-ithaca-white-10": !n, [e.color]: n }
                          ),
                        },
                        e.label
                      );
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "tw-flex tw-items-center tw-justify-between tw-px-1 tw-text-xs tw-text-ithaca-white-60",
                    children: [
                      (0, r.jsx)("div", {
                        className: "tw-mr-2 tw-truncate",
                        children: n,
                      }),
                      (0, r.jsx)("div", {
                        className: "tw-ml-2 tw-truncate tw-text-right",
                        children: a,
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
      },
      27014: function (e, t, n) {
        "use strict";
        var r = n(85893);
        n(67294);
        var a = n(26829);
        t.Z = (e) => {
          var t;
          let { tabs: n, value: s, onValueChange: i } = e;
          return (0, r.jsxs)(a.fC, {
            defaultValue:
              null === (t = n.find((e) => !e.disabled)) || void 0 === t
                ? void 0
                : t.id,
            value: s,
            onValueChange: i,
            children: [
              (0, r.jsx)(a.aV, {
                className:
                  "tw-flex tw-space-x-2 tw-overflow-x-auto tw-border-b tw-border-b-white/10 tw-px-6 tw-text-md tw-outline",
                children: n.map((e) =>
                  (0, r.jsx)(
                    a.xz,
                    {
                      className:
                        "data-[state=active] tw-shrink-0 tw-p-2 data-[state=active]:tw-border-b",
                      value: e.id,
                      disabled: e.disabled,
                      children: e.label,
                    },
                    e.id
                  )
                ),
              }),
              n.map((e) =>
                (0, r.jsx)(
                  a.VY,
                  { className: "tw-p-6", value: e.id, children: e.content },
                  e.id
                )
              ),
            ],
          });
        };
      },
      12180: function (e, t, n) {
        "use strict";
        n.d(t, {
          Tg: function () {
            return r;
          },
        });
        let r = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e ? "".concat(e.slice(0, 7), "...").concat(e.slice(-5)) : "";
        };
      },
      91838: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(13812),
          s = n(59324),
          i = n.n(s);
        t.Z = (e) => {
          let { icon: t, label: n, size: s } = e,
            l = s ? i()[s] : "",
            o = (0, a.I)();
          return (0, r.jsxs)("div", {
            className: "assets--"
              .concat(o, " ")
              .concat(i().asset, " ")
              .concat(l)
              .trim(),
            children: [
              t,
              n && (0, r.jsx)("p", { className: i().label, children: n }),
            ],
          });
        };
      },
      43529: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return o;
          },
        });
        var r = n(85893),
          a = n(67294),
          s = n(24514),
          i = n(89564),
          l = n.n(i);
        let o = (e) => {
          let {
            component: t,
            value: n,
            label: a,
            checked: i = !1,
            onChange: o,
            labelClassName: c,
            className: d,
            checkmarkClassName: u,
          } = e;
          return (0, r.jsxs)("label", {
            className: "".concat(l().container, " ").concat(d),
            children: [
              (0, r.jsx)("input", {
                type: "checkbox",
                onChange: () => {
                  o && o(null != n ? n : a, !i);
                },
                checked: i,
                className: u,
              }),
              (0, r.jsxs)(s.Z, {
                direction: "row-center",
                children: [t, (0, r.jsx)("p", { className: c, children: a })],
              }),
            ],
          });
        };
        t.Z = (e) => {
          let {
              component: t,
              label: n,
              checked: i = !1,
              clearCheckMark: o,
              onChange: c,
              labelClassName: d,
              className: u,
              checkmarkClassName: h,
            } = e,
            [w, m] = (0, a.useState)(i),
            p = (e) => {
              m(e.currentTarget.checked), c && c(n, e.currentTarget.checked);
            };
          return (
            (0, a.useEffect)(() => {
              o && m(!1);
            }, [o]),
            (0, r.jsxs)("label", {
              className: "".concat(l().container, " ").concat(u),
              children: [
                (0, r.jsx)("input", {
                  type: "checkbox",
                  onChange: (e) => p(e),
                  checked: w,
                  className: h,
                }),
                (0, r.jsxs)(s.Z, {
                  children: [
                    t,
                    " ",
                    (0, r.jsx)("p", { className: d, children: n }),
                  ],
                }),
              ],
            })
          );
        };
      },
      92715: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return m;
          },
        });
        var r = n(85893),
          a = n(67294),
          s = n(15922),
          i = n(18776);
        let l = (e) => {
            if (!e) return "";
            let t = e.getDate(),
              n = new Intl.DateTimeFormat("en", { month: "short" }).format(e),
              a = e.getFullYear() % 100;
            return (0, r.jsxs)(r.Fragment, { children: [t, n, a] });
          },
          o = {
            cell: "tw-size-8 tw-p-0",
            caption:
              "tw-flex tw-justify-center tw-items-center tw-mb-2 tw-font-semibold",
            caption_label: "tw-text-sm tw-text-white",
            day: "tw-size-8 tw-relative tw-flex tw-items-center tw-justify-center",
            day_range_middle: "tw-bg-ithaca-green-10",
            day_range_start:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tl-full tw-rounded-bl-full",
            day_range_end:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tr-full tw-rounded-br-full",
            head_cell: "tw-text-white tw-font-normal tw-h-10",
            months:
              "tw-flex tw-divide-x tw-divide-ithaca-green-10/50 tw-relative",
            nav: "tw-flex tw-gap-4",
            nav_button_previous: "tw-absolute tw-left-0 tw-top-0",
            nav_button_next: "tw-absolute tw-right-0 tw-top-0",
            row: "tw-m-0",
            table: "tw-border-collapse",
          };
        var c = () =>
            (0, r.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("rect", {
                  width: "16",
                  height: "16",
                  rx: "4",
                  fill: "#35333E",
                }),
                (0, r.jsx)("path", {
                  d: "M3 6C3 5.22037 3 4.83056 3.17882 4.54596C3.27207 4.39756 3.39756 4.27207 3.54596 4.17882C3.83056 4 4.22037 4 5 4H11C11.7796 4 12.1694 4 12.454 4.17882C12.6024 4.27207 12.7279 4.39756 12.8212 4.54596C13 4.83056 13 5.22037 13 6V6H3V6Z",
                  stroke: "white",
                }),
                (0, r.jsx)("rect", {
                  x: "3",
                  y: "4",
                  width: "10",
                  height: "8",
                  rx: "1.16667",
                  stroke: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M6 3L6 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  d: "M10 3L10 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
              ],
            }),
          d = n(95769),
          u = n(86322),
          h = n(74398),
          w = n.n(h),
          m = (e) => {
            let {
                minSelected: t,
                maxSelected: n,
                start: h,
                end: m,
                disabled: p = !1,
                handleSelect: x,
              } = e,
              f = (0, s.F)(),
              g = { from: h, to: m },
              [v, y] = (0, a.useState)(g),
              j = (0, a.useMemo)(
                () =>
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", {
                        children: l(null == v ? void 0 : v.from),
                      }),
                      " - ",
                      (0, r.jsx)("span", {
                        children: l(null == v ? void 0 : v.to),
                      }),
                    ],
                  }),
                [v]
              );
            return (0, r.jsxs)(u.J2, {
              children: [
                (0, r.jsxs)(u.xo, {
                  disabled: p,
                  className: w().dateRangePickerContainer,
                  children: [
                    (0, r.jsx)("span", {
                      className: "".concat(w().dateInput, " *:tw-text-sm"),
                      children: j,
                    }),
                    (0, r.jsx)(c, {}),
                  ],
                }),
                (0, r.jsx)(u.i9, {
                  children: (0, r.jsxs)(u.yk, {
                    align: "start",
                    sideOffset: 4,
                    className: w().dateBlock,
                    children: [
                      (0, r.jsx)("div", {
                        className: w().dateRangeContainer,
                        children: (0, r.jsx)("div", {
                          className: w().subContainer,
                          children: (0, r.jsx)(d._W, {
                            mode: "range",
                            formatters: {
                              formatWeekdayName: (e) => (0, i.Z)(e, "EEE"),
                            },
                            min: t,
                            max: n,
                            numberOfMonths: "desktop" == f ? 2 : 1,
                            className: "".concat(w().datePicker),
                            defaultMonth: null == v ? void 0 : v.from,
                            selected: v,
                            onSelect: (e) => y(null != e ? e : g),
                            classNames: o,
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: w().buttonContainer,
                        children: [
                          (0, r.jsx)(u.xp, {
                            className: w().cancelButton,
                            onClick: () => {
                              y(g);
                            },
                            children: "Cancel",
                          }),
                          (0, r.jsx)(u.xp, {
                            className: w().applyButton,
                            onClick: () => {
                              v && (null == x || x(v));
                            },
                            children: "Apply",
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
      61920: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(24113),
          s = n(50103),
          i = n.n(s);
        t.Z = (e) => {
          let { showButton: t = !0 } = e;
          return (0, r.jsxs)("div", {
            className: i().container,
            children: [
              (0, r.jsx)("p", {
                children: "Please connect wallet to check your details.",
              }),
              t && (0, r.jsx)(a.Z, {}),
            ],
          });
        };
      },
      91269: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(25675),
          s = n.n(a),
          i = n(81989);
        t.Z = (e) => {
          let { height: t = 30, width: n = 30, className: a } = e,
            { address: l } = (0, i.Pk)();
          return (0, r.jsx)(s(), {
            src: "https://mywalleticon.com/usericon/".concat(l),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: n,
            height: t,
            className: a,
          });
        };
      },
      21050: function (e, t, n) {
        "use strict";
        var r = n(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: n = "" } = e;
          return (0, r.jsxs)("svg", {
            className: n,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                d: "M16 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("path", {
                d: "M8 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        };
      },
      10957: function (e, t, n) {
        "use strict";
        var r = n(85893);
        n(67294),
          (t.Z = (e) => {
            let {
              stroke: t,
              strokeWidth: n = 1,
              width: a = 24,
              height: s = 24,
            } = e;
            return (0, r.jsx)("svg", {
              width: a,
              height: s,
              fill: "none",
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                stroke: null != t ? t : "#5EE192",
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.75 14.25c-.699 0-1.048 0-1.324-.114a1.5 1.5 0 0 1-.812-.812C4.5 13.048 4.5 12.699 4.5 12V6.9c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163H12c.699 0 1.048 0 1.324.114a1.5 1.5 0 0 1 .812.812c.114.276.114.625.114 1.324m-2.1 12.75h4.95c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581v-4.95c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163h-4.95c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v4.95c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164Z",
              }),
            });
          });
      },
      60857: function (e, t, n) {
        "use strict";
        var r = n(85893);
        n(67294),
          (t.Z = function (e) {
            return (0, r.jsxs)("svg", {
              ...e,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  d: "M12.9525 9.50391V11.651C12.9525 12.2506 12.4536 12.7384 11.8401 12.7384H4.25333C3.64 12.7384 3.14093 12.2506 3.14093 11.651V9.50391H2V11.651C2 12.8656 3.0108 13.8539 4.2532 13.8539H11.84C13.0824 13.8539 14.0932 12.8656 14.0932 11.651V9.50391H12.9523H12.9525Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M7.57866 12.0171C7.69306 12.13 7.84599 12.1926 8.00932 12.1934H8.01226C8.17439 12.1934 8.32679 12.1322 8.44172 12.021L11.7516 8.81511C11.8672 8.70324 11.9312 8.55364 11.932 8.39417C11.9328 8.23457 11.8701 8.08444 11.7557 7.97151L11.6605 7.87751C11.546 7.76457 11.3931 7.70204 11.2299 7.70124H11.2272C11.0651 7.70124 10.9125 7.76244 10.7977 7.87377L8.78866 9.81964V3.00684C8.78866 2.59164 8.44319 2.25391 8.01852 2.25391C7.59386 2.25391 7.24839 2.59164 7.24839 3.00684V9.80737L5.26466 7.84991C5.15026 7.73697 4.99732 7.67444 4.83399 7.67377H4.83119C4.66906 7.67377 4.51652 7.73497 4.40172 7.84617L4.30546 7.93937C4.06639 8.17097 4.06466 8.54937 4.30146 8.78311L7.57892 12.0174L7.57866 12.0171Z",
                  fill: "white",
                }),
              ],
            });
          });
      },
      57345: function (e, t, n) {
        "use strict";
        var r = n(85893);
        t.Z = () =>
          (0, r.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "35333E",
              }),
              (0, r.jsx)("path", {
                d: "M10.6667 6.66699L8 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, r.jsx)("path", {
                d: "M5.33301 6.66699L7.99967 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
      },
      98376: function (e, t, n) {
        "use strict";
        var r = n(85893);
        n(67294),
          (t.Z = (e) => {
            let { height: t = 20, width: n = 20 } = e;
            return (0, r.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: n,
              height: t,
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, r.jsx)("path", {
                fill: "#fff",
                d: "M15.27 1.586h2.812l-6.142 7.02 7.225 9.552h-5.657l-4.43-5.794-5.071 5.794H1.194l6.57-7.509L.831 1.586h5.801l4.005 5.295 4.633-5.295Zm-.986 14.889h1.558L5.787 3.18H4.115l10.169 13.295Z",
              }),
            });
          });
      },
      20847: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(45338),
          s = n(93967),
          i = n.n(s);
        t.Z = (e) => {
          let {
              plusMinusOnly: t = !1,
              labelClassName: n,
              value: s,
              currency: l,
              showAbsValue: o = !1,
              className: c,
            } = e,
            d = "".concat(s).includes("e") ? Number((0, a.eT)(s)) : s,
            u = (0, a.uM)(Number(d), "string", l, void 0, !0);
          if (0 === d) return (0, r.jsx)("p", { children: u });
          let h = d > 0;
          if (t) {
            let e = h ? "+" : "-";
            return (0, r.jsx)("div", {
              className: i()(
                "tw-flex tw-flex-row tw-items-center tw-gap-0.5",
                c
              ),
              children: (0, r.jsxs)("p", {
                className: i()("tw-text-base", {
                  "tw-text-ithaca-red-20": !h,
                  "tw-text-ithaca-green-30": h,
                }),
                children: [e, o ? Math.abs(d) : u],
              }),
            });
          }
          let w = h ? "Pay" : "Receive";
          return (0, r.jsxs)("div", {
            className: i()("tw-flex tw-flex-col tw-items-center tw-gap-0.5", c),
            children: [
              (0, r.jsx)("p", {
                className: i()("tw-text-ithaca-white-60", "tw-text-xxs", n),
                children: w,
              }),
              (0, r.jsx)("p", {
                className: i()("tw-text-base", {
                  "tw-text-ithaca-red-20": h,
                  "tw-text-ithaca-green-30": !h,
                }),
                children: o ? Math.abs(d) : u,
              }),
            ],
          });
        };
      },
      62111: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return F;
            },
          });
        var r = n(85893),
          a = n(67294),
          s = n(55261),
          i = n(15229),
          l = n(27484),
          o = n.n(l),
          c = n(1112),
          d = n(35123),
          u = n(10066),
          h = n(45338),
          w = n(16795),
          m = n(59731),
          p = n(37422),
          x = n(43529),
          f = n(89391),
          g = n(45217),
          v = n(60857),
          y = n(18572),
          j = n(93967),
          b = n.n(j),
          N = n(91838),
          _ = n(52867),
          k = n(14005),
          A = n.n(k),
          C = n(70757),
          T = (e) => {
            let { item: t } = e,
              {
                orderDate: n,
                asset: a,
                auction: s,
                currency: i,
                amount: l,
              } = t;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: A().cell,
                  children: (0, u.m2)(n),
                }),
                (0, r.jsx)("div", {
                  className: A().cell,
                  children: (0, r.jsx)(N.Z, {
                    size: "sm",
                    icon: (0, C.XX)(a),
                    label: a,
                  }),
                }),
                (0, r.jsx)("div", {
                  className: A().cell,
                  children: "RedeemUnderlying" === s ? "Withdraw" : s,
                }),
                (0, r.jsx)("div", {
                  className: A().cell,
                  children: (0, r.jsx)(_.Z, {
                    size: "md",
                    amount: l,
                    symbol: (0, C.XX)(i),
                    currency: i,
                  }),
                }),
                (0, r.jsx)("div", { className: A().cell }),
                (0, r.jsx)("div", {
                  className: b()(A().cell, A().releaseButtonCell),
                }),
              ],
            });
          },
          E = n(46449),
          S = n(88144),
          I = n(65440),
          D = n(67930),
          O = n(81989),
          L = n(32010),
          P = n(51700),
          F = (e) => {
            let { agentId: t } = e;
            console.log("agentId", t);
            let { isConnected: n } = (0, O.Pk)(),
              {
                ithacaSDK: l,
                isAuthenticated: j,
                systemInfo: b,
                underlyingCurrency: N,
              } = (0, m.qr)(
                (0, L.N)((e) => ({
                  ithacaSDK: e.ithacaSDK,
                  isAuthenticated: e.isAuthenticated,
                  systemInfo: e.systemInfo,
                  underlyingCurrency: e.underlyingCurrency,
                }))
              ),
              [_, k] = (0, a.useState)([]),
              [C, F] = (0, a.useState)(0),
              [B, W] = (0, a.useState)(""),
              [R, H] = (0, a.useState)(""),
              [M, Z] = (0, a.useState)(!0),
              [U, Y] = (0, a.useState)(!1),
              [V, q] = (0, a.useState)([]),
              [z, K] = (0, a.useState)(!1),
              [G, X] = (0, a.useState)([]),
              [Q, J] = (0, a.useState)(!1),
              [$, ee] = (0, a.useState)([]),
              {
                handlePageChange: et,
                currentPage: en,
                pageStart: er,
                pageEnd: ea,
              } = (0, E.ZP)(),
              es = (0, a.useRef)(null),
              ei = (0, a.useRef)(null),
              el = (0, a.useMemo)(() => !!t || (n && j), [n, j, t]),
              eo = (0, a.useCallback)(
                (e) =>
                  e.map((e) => ({
                    action: e.action,
                    token: e.reserve.symbol,
                    amount: (0, i.b)(
                      BigInt(e.amount),
                      b.tokenDecimals[e.reserve.symbol]
                    ),
                    time: o()(1e3 * e.timestamp).format("DDMMMYY HH:mm"),
                    transactionHash: e.txHash,
                  })),
                [b.tokenDecimals]
              ),
              {
                data: ec,
                isLoading: ed,
                isRefetching: eu,
                error: eh,
              } = (0, S.a)({
                queryKey: [D.gw, t],
                queryFn: async () => {
                  try {
                    if (t)
                      return await (0, P.uD)({
                        agentId: t,
                        resource: "lending_history",
                      });
                    return await l.marginLending.marginLendingHistory();
                  } catch (e) {
                    throw (
                      (console.error(
                        "Failed to fetch margin lending history:",
                        e
                      ),
                      e)
                    );
                  }
                },
                enabled: el,
                retry: 3,
              }),
              ew = (0, a.useCallback)(
                async (e) => {
                  ee(eo(e));
                },
                [eo]
              ),
              em = (0, a.useCallback)(
                (e) =>
                  e.map((e) => ({
                    transactionHash: e.txHash,
                    timestamp: "".concat(e.timestamp),
                    token: e.reserve.id,
                    currency: e.reserve.symbol,
                    orderDate: o()(1e3 * e.timestamp).format("DD MMM YY HH:mm"),
                    asset: e.reserve.symbol,
                    auction: e.action,
                    amount: (0, h.uM)(
                      Number(
                        (0, i.b)(
                          BigInt(e.amount),
                          b.tokenDecimals[e.reserve.symbol]
                        )
                      ),
                      "string",
                      e.reserve.symbol
                    ),
                    rawAmount: e.amount,
                  })),
                [b.tokenDecimals]
              ),
              ep = (0, a.useCallback)(
                (e) =>
                  em(e).toSorted(
                    (e, t) => Number(t.timestamp) - Number(e.timestamp)
                  ),
                [em]
              );
            (0, a.useEffect)(() => {
              let e = (e) => {
                es.current &&
                  !es.current.contains(e.target) &&
                  ei.current &&
                  !ei.current.contains(e.target) &&
                  Y(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, w.M)(() => {
                U && Y(!1);
              });
            let ex = (e) => {
                e === R ? Y(!U) : (Y(!0), H(e));
              },
              ef = (e, t) => {
                if ("Currency" == R) {
                  K(!1);
                  let n = V.slice();
                  if (t) n.push(e), q(n);
                  else {
                    let t = n.indexOf(e);
                    -1 !== t && (n.splice(t, 1), q(n));
                  }
                } else if ("Action" == R) {
                  J(!1);
                  let n = G.slice();
                  if (t) n.push(e), X(n);
                  else {
                    let t = n.indexOf(e);
                    -1 !== t && (n.splice(t, 1), X(n));
                  }
                }
              },
              eg = (e) => {
                switch (e) {
                  case "Currency":
                    return K(!0), q([]);
                  case "Action":
                    return J(!0), X([]);
                  default:
                    return null;
                }
              },
              ev = (0, a.useCallback)(() => {
                let e;
                if (!ec) return;
                let t = ep(ec);
                ew(ec);
                let n = (0, d.lU)(t, V);
                switch (((n = (0, d.In)(n, G)), B)) {
                  case "Order Date":
                    e = (0, d.VH)(n, M);
                    break;
                  case "Amount":
                    e = (0, d.BG)(n, M);
                    break;
                  default:
                    e = n;
                }
                F(e.length), k(e.slice(er, ea));
              }, [ec, V, G, B, M, er, ea, ew, ep]);
            (0, a.useEffect)(() => {
              ev();
            }, [ev]);
            let ey = (e, t) => {
                B != e ? (W(e), Z(t)) : Z(!M);
              },
              ej = (e) => {
                switch (e) {
                  case "Date":
                  case "Amount":
                    return (0, r.jsx)(p.Z, {
                      title: "Click to sort column",
                      className: A().sort,
                      onClick: () => {
                        ey(e, !0);
                      },
                      children: (0, r.jsx)(g.Z, {}),
                    });
                  case "Currency":
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(p.Z, {
                          title: "Click to view filter options",
                          className: A().filter,
                          onClick: () => ex(e),
                          children: (0, r.jsx)(f.Z, { fill: V.length > 0 }),
                        }),
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(A().filterDropdown, " ")
                            .concat(U ? (e !== R ? A().hide : "") : A().hide),
                          ref: es,
                          children: [
                            (0, u.f2)(N).map((e, t) =>
                              (0, r.jsx)(
                                x.Z,
                                {
                                  label: e.label,
                                  component: e.component,
                                  onChange: ef,
                                  clearCheckMark: z,
                                },
                                t
                              )
                            ),
                            (0, r.jsx)(p.Z, {
                              title: "Click to clear filter options",
                              className: ""
                                .concat(A().clearAll, " ")
                                .concat(V.length > 0 ? A().selected : ""),
                              onClick: () => eg("Currency"),
                              children: "Clear All",
                            }),
                          ],
                        }),
                      ],
                    });
                  case "Action":
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(p.Z, {
                          title: "Click to view filter options",
                          className: A().filter,
                          onClick: () => ex(e),
                          children: (0, r.jsx)(f.Z, { fill: G.length > 0 }),
                        }),
                        (0, r.jsxs)("div", {
                          className: ""
                            .concat(A().filterDropdown, " ")
                            .concat(U ? (e !== R ? A().hide : "") : A().hide),
                          ref: ei,
                          children: [
                            u.lj.map((e, t) =>
                              (0, r.jsx)(
                                x.Z,
                                { label: e, onChange: ef, clearCheckMark: Q },
                                t
                              )
                            ),
                            (0, r.jsx)(p.Z, {
                              title: "Click to clear filter options",
                              className: ""
                                .concat(A().clearAll, " ")
                                .concat(G.length > 0 ? A().selected : ""),
                              onClick: () => eg("Action"),
                              children: "Clear All",
                            }),
                          ],
                        }),
                      ],
                    });
                  default:
                    return null;
                }
              },
              eb = !_.length && ed && el,
              eN = !_.length && !ed,
              e_ = _.length > 0,
              ek = "".concat(A().table, " ").concat(el ? "" : A().isOpacity),
              eA = async () => Promise.resolve($),
              eC = eh && el;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                !eC &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "tw-mb-5 tw-flex tw-flex-row tw-items-center tw-gap-3",
                        children: (0, r.jsx)(s.Z, {
                          filename: "margin-loan-history",
                          className: "tw-text-sm tw-text-white",
                          datas: eA,
                          children: (0, r.jsxs)("div", {
                            className: "flex tw-items-center tw-gap-1",
                            children: [
                              "Download Page Data",
                              (0, r.jsx)(v.Z, { width: 20, height: 20 }),
                            ],
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: ek.trim(),
                        children: [
                          c.h.map((e, t) =>
                            (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsxs)(
                                "div",
                                {
                                  className: A().cell,
                                  style: e.style,
                                  children: [e.name, " ", ej(e.name)],
                                },
                                t
                              ),
                            })
                          ),
                          eu &&
                            (0, r.jsx)("div", {
                              className:
                                "tw-col-span-full tw-flex tw-w-full tw-items-center tw-justify-center tw-py-5",
                              children: (0, r.jsx)(I.Z, {}),
                            }),
                          e_ &&
                            _.map((e) =>
                              (0, r.jsx)(T, { item: e }, e.transactionHash)
                            ),
                        ],
                      }),
                    ],
                  }),
                (0, r.jsx)(y.y, {
                  description: !1,
                  displayIsLoading: eb,
                  displayNoResults: eN,
                  isAuthenticated: el,
                  totalItems: C,
                  currentPage: en,
                  handlePageChange: et,
                }),
              ],
            });
          };
      },
      12002: function (e, t, n) {
        "use strict";
        n.d(t, {
          BL: function () {
            return h;
          },
          rg: function () {
            return m;
          },
          z0: function () {
            return w;
          },
        });
        var r = n(59731),
          a = n(88144),
          s = n(64740),
          i = n(45343),
          l = n(62582),
          o = n(69881),
          c = n(90639),
          d = n(51700),
          u = n(67930);
        let h = 999,
          w = 0,
          m = (e) => {
            let { enableQuery: t, range: n, expiryList: m, agentId: p } = e,
              x = (0, r.qr)((e) => e.ithacaSDK);
            return (0, a.a)({
              queryKey: ["clientOrders", n.from, n.to, m, p],
              queryFn: async () => {
                let e = (
                    p
                      ? await (0, d.uD)({ resource: "trades", agentId: p })
                      : await x.client.tradeHistory(
                          (0, s.Z)(n.from).getTime(),
                          (0, i.Z)(n.to).getTime(),
                          w,
                          h
                        )
                  ).filter((e) => {
                    let { orderStatus: t } = e;
                    return "FILLED" === t || "PARTIALLY_FILLED" === t;
                  }),
                  t = p
                    ? {
                        from: (0, s.Z)(n.from).getTime(),
                        to: (0, i.Z)(n.to).getTime(),
                      }
                    : void 0;
                t &&
                  (e = e.filter(
                    (e) => e.revDate >= t.from && e.revDate <= t.to
                  ));
                let r = (0, l.PC)(e, c.vj.HISTORY),
                  a = r
                    .map((e) => ({
                      orderId: e.clientOrderId,
                      details: e.expandedInfo.map((t) => ({
                        currencyPair: e.currencyPair,
                        payoff: t.type,
                        expiry: t.expiryUnparsed,
                        strike: t.strike || 0,
                        position: "BUY" === t.side ? t.size : -t.size,
                      })),
                    }))
                    .filter(
                      (e) => !e.details.find((e) => !m.includes(e.expiry))
                    ),
                  u = await (0, o.mN)(a);
                return r.map((e) => {
                  let t = u.data.find((t) => t.orderId === e.clientOrderId);
                  return {
                    ...e,
                    modelPrice: (null == t ? void 0 : t.price)
                      ? Number(t.price)
                      : 0,
                  };
                });
              },
              enabled: t,
              refetchInterval: u.x6,
            });
          };
      },
      85056: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(67294),
          s = n(90639),
          i = n(47236),
          l = n(12349),
          o = n(20847),
          c = n(74458),
          d = n(93967),
          u = n.n(d),
          h = n(10066),
          w = n(77768),
          m = n.n(w),
          p = n(13090);
        let x = () => (0, r.jsx)("div", {});
        t.Z = (e) => {
          let { contractId: t, isPreview: n, agentId: d } = e,
            { data: w = [], isLoading: f, error: g } = (0, l.X)(t, d),
            { showErrorToast: v } = (0, i.Z)();
          return ((0, a.useEffect)(() => {
            g &&
              !f &&
              (v({ title: "Error fetching position details", message: "" }),
              console.error("Error fetching position details", g));
          }, [g, f, v]),
          f)
            ? (0, r.jsx)(c.m, { className: "tw-min-h-[90px]" })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(x, {}),
                  (0, r.jsx)("div", {
                    className: m().headerExpandedTable,
                    children: "Strategy",
                  }),
                  (0, r.jsx)(x, {}),
                  d && (0, r.jsx)(x, {}),
                  s.QL.map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: m().cell,
                        style: { flexDirection: "column", ...e.style },
                        children: (0, r.jsx)(
                          "div",
                          { className: m().cell, children: e.name },
                          t
                        ),
                      },
                      t
                    )
                  ),
                  (0, r.jsx)(x, {}),
                  (0, r.jsx)("div", {
                    style: { gridColumn: "b/n" },
                    children: (0, r.jsx)("div", { className: m().separator }),
                  }),
                  (0, r.jsx)(x, {}),
                  w.map((e, t) =>
                    (0, r.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, r.jsx)("div", {
                            style: { gridColumn: "a/n", marginTop: 5 },
                          }),
                          (0, r.jsx)(x, {}),
                          (0, r.jsx)("div", {
                            className: ""
                              .concat(m().cellContentExpanded, " ")
                              .concat(m().bolded),
                            children: e.orderDate,
                          }),
                          (0, r.jsx)("div", {
                            className: "".concat(m().cellContentExpanded),
                            children: (0, h._S)(e.currencyPair, n),
                          }),
                          (0, r.jsx)("div", {
                            className: m().cellContentExpanded,
                            children: e.product,
                          }),
                          (0, r.jsx)("div", {
                            className: u()(
                              m().cellContentExpanded,
                              "tw-items-end tw-justify-end"
                            ),
                            children: (0, p.U)(e.side),
                          }),
                          (0, r.jsx)("div", {
                            className: m().cellContentExpanded,
                            style: { justifyContent: "flex-end" },
                            children: (0, r.jsx)("span", {
                              className: m().date,
                              children: e.tenor,
                            }),
                          }),
                          (0, r.jsx)(x, {}),
                          (0, r.jsx)("div", {
                            className: m().cellContentExpanded,
                            style: { justifyContent: "flex-end" },
                            children: (0, r.jsx)(o.Z, {
                              value: e.orderLimit,
                              className: "!tw-flex-row",
                            }),
                          }),
                          (0, r.jsx)(x, {}),
                        ],
                      },
                      t
                    )
                  ),
                  (0, r.jsx)("div", {
                    style: { gridColumn: "a/n", marginTop: 15 },
                  }),
                ],
              });
        };
      },
      69280: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(67294),
          s = n(45217),
          i = n(37422),
          l = n(16795),
          o = n(77768),
          c = n.n(o),
          d = n(62582),
          u = n(23870),
          h = n(71367),
          w = n(43529),
          m = n(92400),
          p = n(15741),
          x = n(67253);
        t.Z = (e) => {
          let {
              updateSort: t,
              productFilter: n,
              setProductFilter: o,
              expiryFilter: f,
              type: g,
              setExpiryFilter: v,
              setStrikeFilter: y,
              strikeFilter: j,
              isExpirySingleChoice: b = !1,
              clearBannerPositions: N,
              strikeList: _,
              expiryList: k,
              productList: A,
              isAgentHeader: C = !1,
            } = e,
            T = (0, a.useMemo)(() => {
              let e = (0, d.y6)(g);
              return C ? e.slice(0, e.length - 1) : e;
            }, [g]),
            [E, S] = (0, a.useState)(null),
            I = (0, a.useRef)(null),
            D = (0, a.useRef)(null),
            O = (0, a.useRef)(null),
            { currentStep: L, isTutorialDisabled: P } = (0, a.useContext)(
              p.OnboardingContext
            ),
            F = (e) => () => {
              e === E ? S(null) : S(e);
            };
          (0, l.M)(() => {
            E && S(null);
          }),
            (0, a.useEffect)(() => {
              let e = (e) => {
                D.current &&
                  !D.current.contains(e.target) &&
                  O.current &&
                  !O.current.contains(e.target) &&
                  I.current &&
                  !I.current.contains(e.target) &&
                  S(null);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []);
          let B = (e, t) => {
              let r = e.toUpperCase();
              "Product" === E &&
                (t ? o([...n, r]) : o(n.filter((e) => e !== r))),
                ("Expiry" === E || "Expiry Date" === E) &&
                  (b
                    ? f.includes(r)
                      ? v([])
                      : v([r])
                    : t
                    ? v([...f, r])
                    : v(f.filter((e) => e !== r))),
                "Strike" === E &&
                  (t ? y([...j, r]) : y(j.filter((e) => e !== r))),
                null == N || N();
            },
            W = (e) => {
              let a = e === E ? "" : c().hide;
              switch (e) {
                case "Close Position":
                  return (0, r.jsx)("span", {
                    className:
                      "tw-font-roboto tw-font-bold tw-text-ithaca-red-20",
                    children: "Close Position",
                  });
                case "Details":
                case "":
                  return null;
                case "Product":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(h.r, { onClick: F(e), fill: n.length > 0 }),
                      (0, r.jsxs)("div", {
                        className: "".concat(c().filterDropdown, " ").concat(a),
                        ref: I,
                        children: [
                          A.map((e) =>
                            (0, r.jsx)(
                              w.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold nowrap",
                                checked: n.includes(e.toUpperCase()),
                                value: e,
                                label: e,
                                onChange: B,
                              },
                              e
                            )
                          ),
                          (0, r.jsx)(h.B, {
                            onClick: () => o([]),
                            className: n.length > 0 ? c().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                case "Expiry":
                case "Expiry Date":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(m.Z, {
                        isOpen: L === x.P.SHOW_EXPIRY_FILTER && !P,
                        align: "start",
                        side: "top",
                        children: (0, r.jsx)("div", {
                          children: (0, r.jsx)(h.r, {
                            onClick: F(e),
                            fill: f.length > 0,
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "".concat(c().filterDropdown, " ").concat(a),
                        ref: O,
                        children: [
                          k.map((e) =>
                            (0, r.jsx)(
                              w.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold",
                                value: e,
                                checked: f.includes(e.toUpperCase()),
                                label: e,
                                onChange: B,
                              },
                              e
                            )
                          ),
                          (0, r.jsx)(h.B, {
                            onClick: () => v([]),
                            className: f.length > 0 ? c().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                case "Strike":
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(h.r, { onClick: F(e), fill: j.length > 0 }),
                      (0, r.jsxs)("div", {
                        className: "".concat(c().filterDropdown, " ").concat(a),
                        ref: D,
                        children: [
                          _.sort().map((e) =>
                            e
                              ? (0, r.jsx)(
                                  w.T,
                                  {
                                    className: "mb-5",
                                    labelClassName: "fs-xs-semibold",
                                    value: "".concat(e),
                                    checked: j.includes(
                                      "".concat(e).toUpperCase()
                                    ),
                                    label: "".concat(e),
                                    onChange: B,
                                  },
                                  "".concat(e)
                                )
                              : (0, r.jsx)(r.Fragment, {})
                          ),
                          (0, r.jsx)(h.B, {
                            onClick: () => y([]),
                            className: j.length > 0 ? c().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                default:
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      e,
                      (0, r.jsx)(i.Z, {
                        title: "Click to sort column",
                        className: c().sort,
                        onClick: () => {
                          t(e, !0);
                        },
                        children: (0, r.jsx)(s.Z, {}),
                      }),
                    ],
                  });
              }
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              T.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: c().cell,
                    style: { ...e.style },
                    children: W(e.name),
                  },
                  e.name
                )
              ),
              (0, r.jsx)(u.Z, {}),
            ],
          });
        };
      },
      7110: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(93967),
          s = n.n(a),
          i = n(37422),
          l = n(20847),
          o = n(57345),
          c = n(43529),
          d = n(45338),
          u = n(10066),
          h = n(43495),
          w = n(23870),
          m = n(67930),
          p = n(77768),
          x = n.n(p);
        t.Z = (e) => {
          let {
            row: t,
            rowIndex: n,
            handleRowExpand: a,
            expandedRow: p,
            handleOpenPositionCloseModal: f,
            isPreview: g,
            addPositionToBanner: v,
            removePositionFromBanner: y,
            isPositionInBanner: j,
            showPNLBanner: b,
            isAgentPositionRow: N,
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                onKeyDown: () => a(n),
                onClick: () => a(n),
                className: x().cell,
                children: (0, r.jsx)(i.Z, {
                  title: "Click to expand dropdown",
                  className: ""
                    .concat(x().dropdown, " ")
                    .concat(p.includes(n) ? x().isActive : ""),
                  children: (0, r.jsx)(o.Z, {}),
                }),
              }),
              !g &&
                (0, r.jsx)("div", {
                  className: x().cellContent,
                  style: { padding: "8px 0px" },
                  children: t.tenor && (0, u.m2)(t.tenor),
                }),
              (0, r.jsx)("div", {
                className: x().cellContent,
                children: (0, r.jsx)("p", {
                  className: "tw-truncate",
                  children: t.product,
                }),
              }),
              (0, r.jsx)("div", {
                className: x().cellContent,
                children: t.strike || "-",
              }),
              (0, r.jsx)("div", {
                className: s()(x().cellContent, "tw-mr-3 tw-justify-end"),
                children: (0, d.Yr)(t.quantity, m.Gw),
              }),
              (0, r.jsx)("div", {
                className: s()(x().cellContent, "tw-mr-3 tw-justify-end"),
                children: (0, d.Yr)(t.averagePrice, m.Gw),
              }),
              (0, r.jsx)("div", {
                className: s()(
                  x().cellContent,
                  "tw-mr-3 tw-justify-end !tw-text-ithaca-white-60"
                ),
                children: t.modelPrice ? (0, d.Yr)(t.modelPrice, m.Gw) : "-",
              }),
              (0, r.jsxs)("div", {
                className: s()(x().cellContent, "tw-mr-3 tw-justify-end"),
                children: [
                  t.profitAndLoss
                    ? (0, r.jsx)("div", {
                        children: (0, r.jsx)(l.Z, {
                          plusMinusOnly: !0,
                          labelClassName: "!tw-text-xs",
                          className: "!tw-items-end",
                          value: Number(t.profitAndLoss.toFixed(m.Gw)),
                          showAbsValue: !0,
                        }),
                      })
                    : "-",
                  b &&
                    (0, r.jsx)(h.E.div, {
                      layout: !0,
                      children: (0, r.jsx)(c.T, {
                        label: "",
                        className: "-tw-ml-6 tw-w-4 tw-translate-x-8",
                        onChange: (e, t) => (t ? v() : y()),
                        checked: j,
                      }),
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className: s()(
                  x().cellContent,
                  "tw-mr-3 tw-justify-end !tw-text-sm !tw-text-ithaca-white-60"
                ),
                children: t.delta.toFixed(3),
              }),
              (0, r.jsx)("div", {
                className: s()(
                  x().cellContent,
                  "tw-mr-3 tw-justify-end !tw-text-sm !tw-text-ithaca-white-60"
                ),
                children: t.vega.toFixed(2),
              }),
              (0, r.jsx)("div", {
                className: s()(
                  x().cellContent,
                  "tw-mr-3 tw-justify-end !tw-text-sm !tw-text-ithaca-white-60"
                ),
                children: t.gamma.toFixed(3),
              }),
              (0, r.jsx)("div", {
                className: s()(
                  x().cellContent,
                  "tw-mr-3 tw-justify-end !tw-text-sm !tw-text-ithaca-white-60"
                ),
                children: t.theta.toFixed(3),
              }),
              !N &&
                (0, r.jsx)("div", {
                  className: s()(x().cellContent, "tw-justify-end"),
                  children: (0, r.jsx)(i.Z, {
                    className:
                      "tw-h-[21px] tw-w-[71px] tw-border-red-500 tw-text-red-500",
                    size: "sm",
                    variant: "outline",
                    title: "Show Payoff Diagram",
                    onClick: () => (null == f ? void 0 : f(t)),
                    children: "Close",
                  }),
                }),
              (0, r.jsx)(w.Z, {}),
            ],
          });
        };
      },
      47825: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(67930),
          s = n(45338);
        t.Z = (e) => {
          let { value: t, decimalPlaces: n = a.Gw } = e;
          return (0, r.jsx)("div", {
            className:
              "tw-mr-3 tw-flex tw-items-center tw-justify-end tw-gap-3 tw-text-sm tw-text-white",
            children: t ? (0, s.Yr)(t, n) : (0, r.jsx)(r.Fragment, {}),
          });
        };
      },
      66610: function (e, t, n) {
        "use strict";
        n.d(t, {
          Di: function () {
            return s;
          },
          Rz: function () {
            return i;
          },
          ht: function () {
            return a;
          },
        });
        var r = n(62582);
        let a = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.includes((0, r.Yf)(e.product).toUpperCase())),
          s = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.includes(e.tenor.toUpperCase())),
          i = (e, t) =>
            0 == t.length
              ? e
              : e.filter((e) => t.includes("".concat(e.strike).toUpperCase()));
      },
      12349: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return u;
          },
          X: function () {
            return d;
          },
        });
        var r = n(18666),
          a = n(62582),
          s = n(59731),
          i = n(88144),
          l = n(67930),
          o = n(69881),
          c = n(51700);
        let d = (e, t) => {
            let n = (0, s.qr)((e) => e.ithacaSDK);
            return (0, i.a)({
              queryKey: [l.io, "details", e],
              queryFn: async () => {
                let r = t
                  ? await (0, c.uD)({
                      agentId: t,
                      resource: "positions_for_contract",
                      query: "contract_id=".concat(e),
                      method: "post",
                    })
                  : await n.client.currentPositionsForContract(
                      e,
                      "SHOW_ORDERS"
                    );
                return (0, a.i)(r);
              },
              refetchInterval: l.x6,
            });
          },
          u = (e) => {
            let {
                isConnectedAndAuthenticated: t,
                unFilteredContractList: n,
                agentId: d,
                ithacaSDK: u,
                underlyingCurrency: h,
              } = e,
              w = (0, s.qr)((e) => e.delegatedWalletAddress);
            return (0, i.a)({
              queryKey: [l.io, d, h, t, w],
              queryFn: async () => {
                let e = d
                    ? await (0, c.uD)({ resource: "positions", agentId: d })
                    : await u.client.currentPositions("NO_DETAILS"),
                  t = (0, a.Wc)(e, n);
                if (0 === t.length) return [];
                let s = t.map((e) => ({
                    contractId: e.contractId,
                    payoff: e.product,
                    expiry: (0, r.p6)(e.expiry.toString(), r.Nn, "YYYY-MM-DD"),
                    strike: e.strike || 0,
                  })),
                  i = await (0, o.Cu)({ contracts: s, currency: h });
                t = t.map((e) => {
                  let t = i.data.find((t) => t.contractId === e.contractId),
                    n = (null == t ? void 0 : t.price) || 0;
                  return {
                    ...e,
                    modelPrice: n,
                    profitAndLoss:
                      e.quantity * (Number(n) - Number(e.averagePrice)),
                  };
                });
                let l = await (0, o.QI)({
                  positionsWithContract: t.map((e) => ({
                    strike: e.strike || 0,
                    contractId: e.contractId,
                    expiry: (0, r.cK)("".concat(e.expiry), r.Nn).format(
                      "YYYY-MM-DD"
                    ),
                    payoff: e.product,
                    position: e.quantity,
                  })),
                });
                return t.map((e) => {
                  var t, n, r, a;
                  let s = l.find((t) => t.OptionID === e.contractId);
                  return {
                    ...e,
                    theta:
                      e.quantity *
                      (null !== (t = null == s ? void 0 : s.Theta) &&
                      void 0 !== t
                        ? t
                        : 0),
                    gamma:
                      e.quantity *
                      (null !== (n = null == s ? void 0 : s.Gamma) &&
                      void 0 !== n
                        ? n
                        : 0),
                    vega:
                      e.quantity *
                      (null !== (r = null == s ? void 0 : s.Vega) &&
                      void 0 !== r
                        ? r
                        : 0),
                    delta:
                      e.quantity *
                      (null !== (a = null == s ? void 0 : s.Delta) &&
                      void 0 !== a
                        ? a
                        : 0),
                  };
                });
              },
              enabled: t,
              refetchInterval: l.x6,
            });
          };
      },
      92400: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(67294),
          s = n(37422),
          i = n(45303),
          l = n.n(i),
          o = n(86322),
          c = n(15741),
          d = n(24514),
          u = n(67253);
        t.Z = (e) => {
          let {
              children: t,
              isOpen: n,
              side: i,
              align: h,
              offset: w,
              footer: m,
              ignoreDisabledStatus: p = !1,
            } = e,
            [x, f] = (0, a.useState)(n),
            {
              updateStep: g,
              currentStep: v,
              disableTutorial: y,
              isTutorialDisabled: j,
            } = (0, a.useContext)(c.OnboardingContext);
          return (
            (0, a.useEffect)(() => {
              f(n);
            }, [n]),
            (0, r.jsxs)(o.fC, {
              open: p ? x : !j && x,
              children: [
                (0, r.jsx)(o.xz, { asChild: !0, children: t }),
                v &&
                  (0, r.jsx)(o.VY, {
                    align: h,
                    side: i,
                    className: ""
                      .concat(l().PopoverContent, " ")
                      .concat(
                        u.R[v].isLarge && l().large,
                        " tw-relative tw-z-[9999]"
                      ),
                    sideOffset: 5,
                    alignOffset: w,
                    children: (0, r.jsxs)(r.Fragment, {
                      children: [
                        u.R[v].title &&
                          (0, r.jsx)("div", {
                            className: l().title,
                            children: u.R[v].title,
                          }),
                        (0, r.jsx)("div", {
                          className: l().message,
                          children: u.R[v].message,
                        }),
                        m ||
                          (0, r.jsxs)(d.Z, {
                            gap: "5",
                            classes: "flex-nowrap justify-end",
                            children: [
                              (0, r.jsx)("div", {
                                className: "flexGrow",
                                children:
                                  !!u.R[v].previousStep &&
                                  (0, r.jsx)("div", {
                                    className: l().skipButton,
                                    onClick: () => {
                                      g && g(u.R[v].previousStep);
                                    },
                                    children: "Back",
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                className: l().skipButton,
                                onClick: () => {
                                  y && y();
                                },
                                children: "Skip",
                              }),
                              (0, r.jsx)(s.Z, {
                                title: "Continue",
                                className: "height-28 w-fit",
                                onClick: () => {
                                  u.R[v].nextStep
                                    ? g && g(u.R[v].nextStep)
                                    : y && y();
                                },
                                children: "Continue",
                              }),
                            ],
                          }),
                        (0, r.jsx)(o.Eh, { className: l().PopoverArrow }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      },
      24113: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return O;
          },
        });
        var r = n(85893),
          a = n(39332),
          s = n(67294),
          i = n(89469),
          l = n(59731),
          o = n(47236),
          c = n(91269),
          d = n(21050),
          u = n(15615),
          h = n(15418),
          w = n(37422),
          m = n(46656),
          p = n(43529),
          x = n(88601),
          f = n.n(x),
          g = (e) => {
            let {
                isOpen: t,
                isLoading: n,
                onCloseModal: a,
                onDisconnectWallet: i,
                onAgreeAndContinue: l,
              } = e,
              [o, c] = (0, s.useState)([
                {
                  id: 1,
                  name: "By ticking this box, I confirm I have read, understood and accepted the General Terms and Conditions of Use governing the Infrastructure (as defined in the T&Cs).",
                  isChecked: !1,
                },
                {
                  id: 2,
                  name: "By ticking this box, I confirm I have read, understood and accepted the Privacy Policy governing the treatment of my personal information.",
                  isChecked: !1,
                },
                {
                  id: 3,
                  name: "By ticking this box, I acknowledge that blockchain technology and crypto-assets carry significant risks for users, including the possible loss of all value allocated in crypto-assets. Such risks arise from the novelty of this technology, the regulatory uncertainty, the possibility of hacking, the high volatility and the information asymmetry characterising the crypto market. Users should not purchase crypto assets with funds they cannot afford to lose.",
                  isChecked: !1,
                },
                {
                  id: 4,
                  name: "By ticking this box, I acknowledge that the information and data provided through the Interface (as defined in the T&Cs) are not intended as financial advice, trading advice, or any other type of advice. The Interface aims to provide information about the Infrastructure, its technical characteristics and features. Adequate professional advice in the financial, legal and technical fields shall be sought before using the Interface.",
                  isChecked: !1,
                },
                {
                  id: 5,
                  name: "By ticking this box, I acknowledge that I am not a U.S. resident, citizen or company incorporate in any restricted region.",
                  isChecked: !1,
                },
              ]),
              d = (e) => {
                c(
                  o.map((t) => ({
                    ...t,
                    isChecked: t.id === e ? !t.isChecked : t.isChecked,
                  }))
                );
              };
            return (0, r.jsx)(m.default, {
              title: "Legal Terms",
              isOpen: t,
              isLoading: n,
              onCloseModal: a,
              hideFooter: !1,
              showCloseIcon: !1,
              className: f().tncModal,
              children: (0, r.jsxs)("div", {
                className: f().acknowledgeTerms,
                children: [
                  (0, r.jsx)("p", {
                    className: f().title,
                    children:
                      "Check the boxes to confirm your acknowledgement and acceptance of the following:",
                  }),
                  o.map((e) =>
                    (0, r.jsx)(
                      p.Z,
                      {
                        label: e.name,
                        checked: e.isChecked,
                        labelClassName: f().labelCheckBox,
                        className: f().checkBox,
                        onChange: () => d(e.id),
                      },
                      e.id
                    )
                  ),
                  (0, r.jsxs)("div", {
                    className: f().buttonContainer,
                    children: [
                      (0, r.jsx)(w.Z, {
                        title: "Disconnect Wallet",
                        variant: "outline",
                        onClick: i,
                        size: "sm",
                        className: f().button,
                        children: "Disconnect Wallet",
                      }),
                      (0, r.jsx)(w.Z, {
                        title: "Agree and Continue",
                        variant: "primary",
                        onClick: l,
                        size: "sm",
                        className: ""
                          .concat(f().button, " ")
                          .concat(f().primaryButton),
                        disabled: o.some((e) => !1 == e.isChecked),
                        children: "Agree and Continue",
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          v = n(98971),
          y = n.n(v),
          j = n(93967),
          b = n.n(j),
          N = n(67253),
          _ = n(15741),
          k = n(92400),
          A = (e) => {
            let { openChainModal: t, children: n, isWrongNetwork: a } = e,
              { currentStep: i, updateStep: l } = (0, s.useContext)(
                _.OnboardingContext
              );
            return (
              (0, s.useEffect)(() => {
                a ? null == l || l(N.P.WRONG_NETWORK) : null == l || l(void 0);
              }, [a]),
              (0, r.jsx)(k.Z, {
                footer: (0, r.jsx)("div", {
                  className: "tw-flex tw-items-end tw-justify-end",
                  children: (0, r.jsx)(w.Z, {
                    title: "Continue",
                    className: "tw-h-[28px] tw-w-1/2",
                    onClick: t,
                    children: "Switch Network",
                  }),
                }),
                isOpen: i === N.P.WRONG_NETWORK,
                ignoreDisabledStatus: !0,
                align: "end",
                side: "top",
                children: (0, r.jsx)("div", { children: n }),
              })
            );
          },
          C = n(36703),
          T = n(64729),
          E = n(85088),
          S = n(54306),
          I = n(44718),
          D = n(81989),
          O = () => {
            let { isSolanaWalletActive: e } = (0, T.X)(),
              {
                ithacaSDK: t,
                initIthacaSDK: n,
                disconnect: w,
                isConnecting: m,
              } = (0, l.qr)(),
              { showToast: p } = (0, o.Z)(),
              { connectModalOpen: x } = (0, u.We)(),
              { isConnected: f, address: v } = (0, D.Pk)(),
              { data: j } = (0, i.p)(),
              { data: N } = (function () {
                let { connection: e } = (0, I.R)(),
                  {
                    publicKey: t,
                    signMessage: n,
                    signTransaction: r,
                    signAllTransactions: a,
                    connect: i,
                    disconnect: l,
                  } = (0, S.O)();
                return {
                  data: (0, s.useMemo)(() => {
                    if (!t || !e) return;
                    let s = { address: t.toBase58(), publicKey: t };
                    return {
                      publicKey: t,
                      transport: e,
                      chain: { id: 102, network: "testnet" },
                      account: s,
                      cacheTime: 4e3,
                      signMessage: async (e) => await n(e),
                      signTransaction: async (e) => r(e),
                      signAllTransactions: async (e) => await a(e),
                      signTypedData: async (e, t, r) => {
                        let a = (function (e, t, n) {
                          let r = JSON.stringify({
                            domain: e,
                            types: t,
                            value: n,
                          });
                          return new TextEncoder().encode(r);
                        })(e, t, r);
                        return await n(a);
                      },
                      connect: async () => (await i(), s),
                      disconnect: async () => {
                        await l();
                      },
                      extend: function (e) {
                        let t = e(this);
                        return { ...this, ...t };
                      },
                    };
                  }, [t]),
                };
              })(),
              _ = (0, S.O)(),
              k = (0, a.useRouter)(),
              [O, L] = (0, s.useState)(!1),
              P = async () => {
                try {
                  let e = await t.points.addAccountData(
                    "tc_confirmation",
                    "true"
                  );
                  h.Z.track("Account created"),
                    "OK" === e.result && (L(!1), k.push("/onboarding"));
                } catch (e) {
                  L(!1);
                }
              },
              F = async () => {
                let r = localStorage.getItem("ithaca.session");
                if ((await n(e ? _ : j)) && !r) {
                  var a;
                  p({
                    title: "Wallet Ownership Verified",
                    message:
                      "Your wallet ownership has been verified. You can now deposit funds and trade.",
                  }),
                    (0, C.Lv)();
                  let e = await t.auth.getSession();
                  (null == e
                    ? void 0
                    : null === (a = e.accountInfos) || void 0 === a
                    ? void 0
                    : a.tc_confirmation) || L(!0);
                }
              };
            return ((0, s.useEffect)(() => {
              if (!x) return;
              let e = () => {
                let e = document.querySelector(
                  "[data-testid='rk-wallet-option-walletConnect']"
                );
                e &&
                  !e.hasAttribute("data-enhanced") &&
                  (e.setAttribute("data-enhanced", "true"),
                  e.addEventListener("click", () => {
                    p({
                      type: "info",
                      title: "Step 1 - Connect Wallet",
                      message:
                        "Scan QR Code with your phone and approve connection to Ithaca App interface within your WalletConnect compatible wallet.",
                    });
                  }));
              };
              e();
              let t = new MutationObserver(() => e());
              return (
                t.observe(document.body, { childList: !0, subtree: !0 }),
                () => {
                  t.disconnect();
                }
              );
            }, [x, p]),
            (0, s.useEffect)(() => {
              m || (j || N ? F() : f || w());
            }, [v, j, N, f]),
            e)
              ? (0, r.jsx)(E.T, {})
              : (0, r.jsx)(u.NL.Custom, {
                  children: (e) => {
                    let {
                        account: t,
                        chain: n,
                        openAccountModal: a,
                        openChainModal: s,
                        openConnectModal: i,
                        authenticationStatus: l,
                        mounted: o,
                      } = e,
                      u = o && "loading" !== l,
                      h = u && t && n && (!l || "authenticated" === l);
                    return (0, r.jsx)("div", {
                      ...(!u && {
                        "aria-hidden": !0,
                        className: y().container,
                      }),
                      children: h
                        ? n.unsupported
                          ? (0, r.jsx)(A, {
                              openChainModal: s,
                              isWrongNetwork: n.unsupported,
                              children: (0, r.jsx)("div", {
                                children: (0, r.jsxs)("button", {
                                  onClick: s,
                                  type: "button",
                                  className: b()(
                                    y().wrongNetwork,
                                    "tw-rounded-2xl"
                                  ),
                                  children: [
                                    "Wrong network",
                                    (0, r.jsx)(d.Z, { color: "#fff" }),
                                  ],
                                }),
                              }),
                            })
                          : (0, r.jsxs)("div", {
                              className: y().termsContainer,
                              children: [
                                (0, r.jsx)(g, {
                                  isOpen: O && h,
                                  onCloseModal: () => L(!1),
                                  onDisconnectWallet: a,
                                  onAgreeAndContinue: P,
                                }),
                                (0, r.jsx)(A, {
                                  openChainModal: s,
                                  isWrongNetwork: n.unsupported,
                                  children: (0, r.jsxs)("button", {
                                    onClick: a,
                                    type: "button",
                                    className: b()(
                                      y().connectedWallet,
                                      "tw-rounded-2xl"
                                    ),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: y().displayName,
                                        children: t.displayName,
                                      }),
                                      (0, r.jsx)(c.Z, {
                                        className: "!tw-size-8",
                                      }),
                                      (0, r.jsx)(d.Z, {
                                        className: y().chevron,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, r.jsx)("button", {
                            onClick: i,
                            type: "button",
                            className: b()(y().connectWallet, "tw-rounded-2xl"),
                            children: "Connect Wallet",
                          }),
                    });
                  },
                });
          };
      },
      3298: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gh: function () {
            return r;
          },
          Mu: function () {
            return i;
          },
          oh: function () {
            return s;
          },
          rN: function () {
            return a;
          },
        });
        let r = 430,
          a = 695,
          s = 1435,
          i = 1280;
      },
      35192: function (e, t, n) {
        "use strict";
        n.d(t, {
          e7: function () {
            return w;
          },
          S2: function () {
            return h;
          },
          X9: function () {
            return u;
          },
          Nq: function () {
            return m;
          },
          ZA: function () {
            return p;
          },
        });
        var r = n(85893),
          a = n(77125),
          s = n(93967),
          i = n.n(s),
          l = n(86322),
          o = (e) => {
            let {
              content: t,
              align: n = "center",
              contentClassname: a,
              triggerIcon: s,
              triggerClassname: o,
            } = e;
            return (0, r.jsxs)(l.fC, {
              children: [
                (0, r.jsx)(l.xz, {
                  children: (0, r.jsx)("div", {
                    className: i()(
                      "tw-mr-1 tw-inline-block tw-align-middle",
                      o
                    ),
                    children: s,
                  }),
                }),
                (0, r.jsx)(l.VY, {
                  align: n,
                  children: (0, r.jsx)("div", {
                    className: i()(
                      "-tw-mt-[106px] tw-max-w-[346px] tw-rounded-md tw-bg-black-dark tw-p-3 tw-text-start tw-font-roboto tw-text-xs tw-text-white [box-shadow:2px_2px_2px_1px_#050505]",
                      a
                    ),
                    children: t,
                  }),
                }),
              ],
            });
          },
          c = n(49632),
          d = n(70757);
        let u = [
            "Assets",
            "Wallet Balance",
            "Available Collateral on Ithaca",
            "Live Orders' Collateral Requirements",
            "Positions' Collateral Requirements",
            "Yield*",
            "Yield Accrued",
            "",
          ],
          h = [
            "Asset",
            "Wallet Balance",
            "APY Variable",
            "Lent Amount",
            "Positions' MTM",
            "Position' Collateral Requirement",
            "Positions' 1D Stress Test Value",
            "Health Factor Numerator",
            "Pool Information",
          ],
          w = [
            "Head",
            "Debt",
            "APY Variable",
            "Borrow/Repay",
            "Health Factor",
            "",
            "Haircut",
            "Health Factor Denominator",
            "",
          ],
          m = (e) => ({
            [e]: {
              isTransactionInProgress: !1,
              currency: e,
              currencyLogo: (0, d.XX)(e),
              walletBalance: "0",
              fundLockValue: 0,
              orderValue: 0,
              settleValue: 0,
              positionCollateralRequirement: 0,
              availableCollateral: 0,
            },
            USDC: {
              isTransactionInProgress: !1,
              currency: "USDC",
              currencyLogo: (0, r.jsx)(a.Z, {}),
              walletBalance: "0",
              fundLockValue: 0,
              orderValue: 0,
              settleValue: 0,
              positionCollateralRequirement: 0,
              availableCollateral: 0,
            },
          }),
          p = (e) => {
            switch (e) {
              case "Assets":
              case "Wallet Balance":
                return (0, r.jsx)("div", {
                  className: "tw-w-20 tw-shrink-0",
                  children: e,
                });
              case "Available Collateral on Ithaca":
                return (0, r.jsx)("div", {
                  className: "tw-w-40 tw-shrink-0",
                  children: e,
                });
              case "Live Orders' Collateral Requirements":
              case "Positions' Collateral Requirements":
                return (0, r.jsx)("div", {
                  className: "tw-w-52 tw-shrink-0 tw-text-end lg:tw-w-32",
                  children: e,
                });
              case "Yield Accrued":
                return (0, r.jsx)("div", {
                  className: "tw-w-20 tw-shrink-0 tw-text-end",
                  children: e,
                });
              case "Yield*":
                return (0, r.jsxs)("div", {
                  className:
                    "tw-flex tw-w-56 tw-shrink-0 tw-items-center tw-justify-end tw-gap-2 tw-pr-2 lg:tw-w-52",
                  children: [
                    (0, r.jsx)(o, {
                      triggerIcon: (0, r.jsx)(c.Z, { className: "tw-w-3.5" }),
                      content:
                        "*Aave USDC Pool variable lending yield x proportion of Ithaca deposits allocated to Aave USDC Pool. This yield may NOT be realized, depending as is on Aave variable yield during the deposit tenor.",
                    }),
                    e,
                  ],
                });
              case "":
                return (0, r.jsx)("div", {
                  className: "tw-hidden lg:tw-block lg:tw-w-[340px]",
                });
              default:
                return null;
            }
          };
      },
      1112: function (e, t, n) {
        "use strict";
        n.d(t, {
          h: function () {
            return r;
          },
        });
        let r = [
          { name: "Date", style: {} },
          { name: "Currency", style: { justifyContent: "flex-start" } },
          { name: "Action", style: {} },
          {
            name: "Amount",
            style: { justifyContent: "flex-end", display: "flex" },
          },
          { name: "", style: {} },
          { name: "", style: {} },
        ];
      },
      67253: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return o;
          },
          P: function () {
            return a;
          },
        });
        var r,
          a,
          s = n(85893),
          i = n(25675),
          l = n.n(i);
        ((r = a || (a = {})).DEPOSIT_WITH_BALANCE_CHAIN =
          "DEPOSIT_WITH_BALANCE_CHAIN"),
          (r.DEPOSIT_WITH_BALANCE_TOKEN_WETH =
            "DEPOSIT_WITH_BALANCE_TOKEN_WETH"),
          (r.DEPOSIT_WITH_BALANCE_TOKEN_USDC =
            "DEPOSIT_WITH_BALANCE_TOKEN_USDC"),
          (r.DEPOSIT_WITH_BALANCE_AMOUNT = "DEPOSIT_WITH_BALANCE_AMOUNT"),
          (r.DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON"),
          (r.DEPOSIT_WITHOUT_BALANCE_WETH = "DEPOSIT_WITHOUT_BALANCE_WETH"),
          (r.DEPOSIT_WITHOUT_BALANCE_USDC = "DEPOSIT_WITHOUT_BALANCE_USDC"),
          (r.DEPOSIT_WITHOUT_BALANCE_CHAIN = "DEPOSIT_WITHOUT_BALANCE_CHAIN"),
          (r.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN"),
          (r.DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN"),
          (r.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON"),
          (r.WITHDRAWAL_TRANSACTION_HISTORY_TAB =
            "WITHDRAWAL_TRANSACTION_HISTORY_TAB"),
          (r.WITHDRAWAL_RELEASE_FUNDS = "WITHDRAWAL_RELEASE_FUNDS"),
          (r.SHOW_PAYOFF_AT_EXPIRY = "SHOW_PAYOFF_AT_EXPIRY"),
          (r.SHOW_EXPIRY_FILTER = "SHOW_EXPIRY_FILTER"),
          (r.DEPOSIT_FUNDS = "DEPOSIT_FUNDS"),
          (r.SUBMIT_TO_AUCTION = "SUBMIT_TO_AUCTION"),
          (r.WRONG_NETWORK = "WRONG_NETWORK"),
          (r.ITHACA_GPT_INTRO = "ITHACA_GPT_INTRO");
        let o = {
          SHOW_PAYOFF_AT_EXPIRY: {
            nextStep: "SHOW_EXPIRY_FILTER",
            message: "Show Payoff @ Expiry",
            title:
              "To show payoff diagram at chosen expiry, first filter ‘Expiry Date’ column to a single expiry date.",
          },
          ITHACA_GPT_INTRO: {
            nextStep: "ITHACA_GPT_INTRO",
            message:
              "Your advanced option trading assistant within Ithaca Protocol.",
            title: "IthacaGPT",
          },
          SHOW_EXPIRY_FILTER: {
            message: "Select Expiry Date",
            title: "Click the filter icon to select a single expiry date.",
          },
          WRONG_NETWORK: {
            title: "",
            message:
              "Looks like you're connected to an unsupported network. Please switch to a supported network.",
          },
          DEPOSIT_FUNDS: {
            nextStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message: "Deposit funds to place order",
            title: "",
          },
          DEPOSIT_WITH_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "Ithaca runs on Arbitrum and requires WETH and USDC (not USDC.e) for collateral. You can deposit these directly or you can deposit different tokens from other support blockchains.",
            title: "Deposit Funds Directly or Cross Chain",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_USDC: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have USDC on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_WETH: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have WETH on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_AMOUNT: {
            nextStep: "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "You can deposit any chosen amount of selected token up to what is shown in your Wallet Balance.",
            title: "Enter Amount of Funds to Deposit.",
          },
          DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON: {
            nextStep: "SUBMIT_TO_AUCTION",
            previousStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet.",
            title: "Confirm the Deposit Amount",
          },
          SUBMIT_TO_AUCTION: {
            message: "Click to submit order to auction",
            title: "",
          },
          DEPOSIT_WITHOUT_BALANCE_USDC: {
            isLarge: !0,
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit USDC on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 3" }),
                    " - If you have $USDC.e (Bridged USDC) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, s.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, s.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, s.jsx)("li", {
                      children: 'In the "You pay" input field select "USDC.e"',
                    }),
                    (0, s.jsx)("li", {
                      children:
                        'In the "You receive" input field select "USDC"',
                    }),
                    (0, s.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_usdc.faa872f0.png",
                        height: 79,
                        width: 125,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX5+fnz9PX9/f3r6+zf4OFhfIvxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nCWIwQkAMBCDNLn9Zy6hDwVFQxJQvmTV0S3orc4HA6gALlYEhEwAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit USDC",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, s.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, s.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native USDC on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_WETH: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            isLarge: !0,
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit WETH on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("b", { children: "Option 3" }),
                    " - If you have $ETH (not $WETH) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, s.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, s.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, s.jsx)("li", {
                      children: 'In the "You pay" input field select "ETH"',
                    }),
                    (0, s.jsx)("li", {
                      children:
                        'In the "You receive" input field select "WETH"',
                    }),
                    (0, s.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_weth.bdb5e366.png",
                        height: 77,
                        width: 123,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX4+Pjx8fL8/PziewRMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGACAQYGRgYQYGRgYASzIFwIDyYFAAKRABWBK9j8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit WETH",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, s.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, s.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native WETH on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_USDC",
            message:
              "You can select a chain where you have funds to automatically convert and bridge them with Arbitrum powered by Axelar. ",
            title: "Select A Chain Where you have Funds",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Select from any of the supported tokens from your chosen chain to be used for depositing. ",
            title: "Select the Token you Want to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Choose from any of the available tokens to be used as collateral.",
            title:
              "Select token you want funds to be converted into on Arbitrum.",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON: {
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet. ",
            title: "Confirm the Deposit Amount",
          },
          WITHDRAWAL_TRANSACTION_HISTORY_TAB: {
            nextStep: "WITHDRAWAL_RELEASE_FUNDS",
            message:
              "Please go to the ‘Transaction History’ tab to withdraw funds to your wallet once they are ready to be released.",
            title:
              "Go to ‘Transaction History’ to Check Status of Withdrawals & to Release Funds",
          },
          WITHDRAWAL_RELEASE_FUNDS: {
            previousStep: "WITHDRAWAL_TRANSACTION_HISTORY_TAB",
            message: (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: "mb-4",
                  children:
                    'Once funds are ready to be released, the ‘Release’ button will become activated and show in green. Once ready, press the "Release" button to transfer funds to your wallet once the button activates.',
                }),
                (0, s.jsx)("div", {
                  className: "italic",
                  children:
                    "You will also receive a notification once funds are ready to be released.",
                }),
              ],
            }),
            title: "Release Funds",
          },
        };
      },
      15922: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return i;
          },
        });
        var r = n(3298),
          a = n(67294);
        let s = () => {
            let [e, t] = (0, a.useState)({ width: void 0, height: void 0 });
            return (
              (0, a.useEffect)(() => {
                function e() {
                  t({ width: window.innerWidth, height: window.innerHeight });
                }
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          },
          i = () => {
            let { width: e } = s();
            return (e && e >= r.oh) || !e
              ? "desktop"
              : e && e >= r.rN
              ? "tablet"
              : "phone";
          };
      },
      16795: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return a;
          },
        });
        var r = n(67294);
        let a = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, r.useEffect)(
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
      59421: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return x;
          },
        });
        var r = n(47236),
          a = n(67294),
          s = n(64729),
          i = n(81989),
          l = n(59731),
          o = n(67930),
          c = n(88144);
        let d = () => {
          let { systemInfo: e, ithacaSDK: t, isAuthenticated: n } = (0, l.qr)(),
            { isSolanaWalletActive: r } = (0, s.X)(),
            { address: a } = (0, i.Pk)(),
            d = (0, i.Gc)(),
            u = (0, i.ho)(),
            h = (0, c.a)({
              queryKey: [o.gp, "lockedCollateral"],
              queryFn: () => t.client.getLockedCollateral(),
              enabled: n,
              refetchInterval: 3e4,
            }),
            w = (0, c.a)({
              queryKey: [o.gp, "fundLockState"],
              queryFn: () => t.client.fundLockState(),
              enabled: n,
              refetchInterval: 3e4,
            });
          return r
            ? { ...d, ...u, lockedCollateralData: h, fundLockStateData: w }
            : { ...u, ...d, lockedCollateralData: h, fundLockStateData: w };
        };
        var u = n(32010),
          h = n(15229);
        let w = (e) =>
          Object.values(e)
            .flat()
            .reduce(
              (e, t) => (
                (e.totalUnderlierAmount += t.locked.underlierAmount),
                (e.totalNumeraireAmount += t.locked.numeraireAmount),
                e
              ),
              { totalUnderlierAmount: 0, totalNumeraireAmount: 0 }
            );
        var m = n(35192);
        let p = { fundLockValue: 0, orderValue: 0, settleValue: 0 },
          x = () => {
            let { showToast: e } = (0, r.Z)(),
              [t, n] = (0, l.qr)(
                (0, u.N)((e) => [e.isAuthenticated, e.underlyingCurrency])
              ),
              [s, i] = (0, a.useState)((0, m.Nq)(n)),
              {
                SOLData: { isRefetching: o, data: c, refetch: x },
                WETHData: { isRefetching: f, data: g, refetch: v },
                USDCData: { isRefetching: y, data: j, refetch: b },
                lockedCollateralData: { isRefetching: N, data: _, refetch: k },
                fundLockStateData: { isRefetching: A, data: C, refetch: T },
              } = d(),
              E = "WSOL" === n,
              S = (E ? o : f) || y || N || A;
            (0, a.useEffect)(() => {
              var e, r;
              if (!t) {
                i((0, m.Nq)(n));
                return;
              }
              if (!_ || !j || (E && !c) || (!E && !g)) return;
              let a = (e) =>
                  (null == C ? void 0 : C.find((t) => t.currency === e)) || p,
                l = a(n),
                o = a("USDC"),
                d =
                  l.fundLockValue !==
                  (null === (e = s[n]) || void 0 === e
                    ? void 0
                    : e.fundLockValue),
                u =
                  o.fundLockValue !==
                  (null === (r = s.USDC) || void 0 === r
                    ? void 0
                    : r.fundLockValue),
                x = w(_),
                f = E ? c : g;
              i((e) => {
                var t;
                let r = { ...e };
                return (
                  (r[n] = {
                    ...e[n],
                    ...l,
                    positionCollateralRequirement: x.totalUnderlierAmount,
                    availableCollateral:
                      l.fundLockValue - l.orderValue - l.settleValue,
                    walletBalance: (0, h.b)(
                      (null == f ? void 0 : f.value) || BigInt(0),
                      (null == f ? void 0 : f.decimals) || 9
                    ),
                    isTransactionInProgress:
                      !d &&
                      ((null === (t = e[n]) || void 0 === t
                        ? void 0
                        : t.isTransactionInProgress) ||
                        !1),
                  }),
                  (r.USDC = {
                    ...e.USDC,
                    ...o,
                    positionCollateralRequirement: x.totalNumeraireAmount,
                    availableCollateral:
                      o.fundLockValue - o.orderValue - o.settleValue,
                    walletBalance: (0, h.b)(j.value, j.decimals),
                    isTransactionInProgress:
                      !u && e.USDC.isTransactionInProgress,
                  }),
                  r
                );
              });
            }, [t, C, _, j, g, c, n, E]);
            let I = () => {
              T(), k(), E ? x() : v(), b();
            };
            return {
              collateralSummary: s,
              isFetching: S,
              refetchAll: I,
              handleFetchingBalance: (e, t) => {
                if (null == t ? void 0 : t.name) {
                  let n = t.name;
                  i((t) => ({
                    ...t,
                    [n]: { ...t[n], isTransactionInProgress: !e },
                  }));
                }
              },
              refetchFundLockState: T,
              refetchLockedCollateralData: k,
              refetchBalanceWETH: v,
              refetchBalanceSOL: x,
              refetchBalanceUSDC: b,
              showOrderConfirmationToastAndRefetchData: () => {
                I(),
                  e({
                    title: "Transaction Confirmed",
                    message: "Order received & submitted into the auction",
                  });
              },
            };
          };
      },
      24514: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(2262),
          s = n.n(a),
          i = n(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: n = "m-0",
              gap: a = "gap-0",
              padding: l = "p-0",
              children: o,
              classes: c,
            } = e,
            d = (0, i.I)();
          return (0, r.jsx)("div", {
            className: ""
              .concat("flex--".concat(d), " ")
              .concat(s().flex, " ")
              .concat(s()["flex--".concat(t)], " ")
              .concat(n, " ")
              .concat(a, " ")
              .concat(l, " ")
              .concat(c),
            children: o,
          });
        };
      },
      74458: function (e, t, n) {
        "use strict";
        n.d(t, {
          m: function () {
            return o;
          },
        });
        var r = n(85893),
          a = n(93967),
          s = n.n(a),
          i = n(85292),
          l = n(65440);
        let o = (e) => {
          let { className: t } = e;
          return (0, r.jsx)(i.Z, {
            size: "loader",
            className: s()("tw-min-h-[600px]", t),
            children: (0, r.jsx)(l.Z, { type: "lg" }),
          });
        };
        t.Z = (e) => {
          let { children: t, isPending: n } = e;
          return n ? (0, r.jsx)(o, {}) : t;
        };
      },
      15741: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            OnboardingContext: function () {
              return i;
            },
            OnboardingProvider: function () {
              return l;
            },
          });
        var r = n(85893),
          a = n(67294),
          s = n(59731);
        let i = (0, a.createContext)({
            currentStep: void 0,
            isTutorialDisabled: !1,
          }),
          l = (e) => {
            let { children: t } = e,
              {
                currentTutorialStep: n,
                setCurrentTutorialStep: l,
                setTutorialDisabled: o,
                tutorialDisabled: c,
              } = (0, s.NV)(),
              [d, u] = (0, a.useState)(n),
              [h, w] = (0, a.useState)(c);
            return (
              (0, a.useEffect)(() => {
                w(c);
              }, [c]),
              (0, r.jsx)(i.Provider, {
                value: {
                  currentStep: d,
                  isTutorialDisabled: h,
                  updateStep: (e) => {
                    u(e), l(e);
                  },
                  disableTutorial: () => {
                    o(), w(!0);
                  },
                },
                children: t,
              })
            );
          };
      },
      36703: function (e, t, n) {
        "use strict";
        n.d(t, {
          AR: function () {
            return u;
          },
          Lf: function () {
            return j;
          },
          Lv: function () {
            return c;
          },
          Qy: function () {
            return h;
          },
          RT: function () {
            return v;
          },
          Vd: function () {
            return g;
          },
          X_: function () {
            return N;
          },
          Xu: function () {
            return d;
          },
          Zo: function () {
            return w;
          },
          Zp: function () {
            return b;
          },
          _p: function () {
            return y;
          },
          fE: function () {
            return p;
          },
          hO: function () {
            return _;
          },
          p: function () {
            return m;
          },
          sk: function () {
            return f;
          },
          yp: function () {
            return x;
          },
        });
        var r = n(49321),
          a = n(15418),
          s = n(82649);
        let i = async (e) => {
            let { method: t = "POST", data: n, path: r, noCache: a = !1 } = e;
            try {
              let e = await (0, s.Sp)("POINTS_URL"),
                i = {
                  method: t,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json, text/plain, */*",
                    "Cache-Control": a ? "no-cache" : "",
                  },
                  ...(n && { body: JSON.stringify(n) }),
                },
                l = await fetch("".concat(e, "/").concat(r), i),
                o = await l.json();
              if (!l.ok) {
                let e = Error();
                throw ((e.name = o.name), (e.message = o.message), e);
              }
              return { data: o };
            } catch (e) {
              return { error: e };
            }
          },
          l = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = localStorage.getItem("ithaca.session");
            if (t) return JSON.parse(t);
            if (e) return "";
            throw Error("No session info");
          },
          o = async (e) => {
            let t = { walletAddress: l().ethAddress, referralCode: e };
            return await i({ data: t, path: "users/user" });
          },
          c = async function (e) {
            var t;
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = l();
            console.debug("GetUserData");
            let s = await i({
              method: "GET",
              path: "users/user?walletAddress=".concat(r.ethAddress),
              noCache: !0,
            });
            if (
              !n &&
              s.data &&
              !Object.keys(
                null == s
                  ? void 0
                  : null === (t = s.data) || void 0 === t
                  ? void 0
                  : t.user
              ).length
            ) {
              let { error: t } = await o(e);
              return t
                ? { error: t }
                : (e
                    ? a.Z.track("Referral wallet connect", { referralToken: e })
                    : a.Z.track("Wallet connect"),
                  await c(e));
            }
            return s;
          },
          d = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
            });
          },
          u = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
            });
          },
          h = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
            });
          },
          w = async (e) => {
            let t = l();
            return await i({
              method: "GET",
              path: "auth/discord/callback?token="
                .concat(e, "&walletAddress=")
                .concat(t.ethAddress),
            });
          },
          m = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
            });
          },
          p = async (e) => {
            let { displayName: t, isAvatar: n, signature: a } = e,
              s = {
                walletAddress: l().ethAddress,
                displayName: (0, r.U)(t) ? t.toLowerCase() : t,
                isAvatar: n,
                signature: a,
              };
            return await i({ method: "PUT", path: "users/user", data: s });
          },
          x = async (e) =>
            await i({
              method: "POST",
              path: "auth/farcaster/callback",
              data: e,
            }),
          f = async (e) => {
            let {
                page: t,
                pageLimit: n,
                sortField: r,
                sortType: a,
                filterBy: s,
              } = e,
              o = {
                walletAddress: l().ethAddress,
                page: t,
                pageSize: n,
                sortField: r,
                sortType: a,
                ...("All" === s ? {} : { type: s }),
              };
            return await i({ data: o, path: "rewards/rewardsHistory" });
          },
          g = async () => {
            let e = l();
            return await i({
              method: "GET",
              path: "badges/profile?walletAddress=".concat(e.ethAddress),
            });
          },
          v = async () => await i({ method: "GET", path: "badges/all" }),
          y = async (e) =>
            await i({
              method: "GET",
              path: "users/get-referrals?referralCode=".concat(e),
            }),
          j = async (e) =>
            await i({ method: "POST", path: "stats/leaderboard24hr", data: e }),
          b = async (e) =>
            await i({ method: "POST", path: "stats/leaderboard", data: e }),
          N = async (e) =>
            await i({
              method: "GET",
              path: "stats/user?walletAddress=".concat(e),
            }),
          _ = async (e, t) =>
            await i({
              method: "GET",
              path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
            });
      },
      35123: function (e, t, n) {
        "use strict";
        n.d(t, {
          BG: function () {
            return a;
          },
          In: function () {
            return i;
          },
          VH: function () {
            return r;
          },
          lU: function () {
            return s;
          },
        });
        let r = (e, t) => (
            t
              ? e.sort(
                  (e, t) =>
                    new Date(e.orderDate).getTime() -
                    new Date(t.orderDate).getTime()
                )
              : e.sort(
                  (e, t) =>
                    new Date(t.orderDate).getTime() -
                    new Date(e.orderDate).getTime()
                ),
            e
          ),
          a = (e, t) => (
            t
              ? e.sort((e, t) => Number(e.amount) - Number(t.amount))
              : e.sort((e, t) => Number(t.amount) - Number(e.amount)),
            e
          ),
          s = (e, t) =>
            0 == t.length ? e : e.filter((e) => t.includes(e.currency)),
          i = (e, t) =>
            0 == t.length ? e : e.filter((e) => t.includes(e.auction));
      },
      20448: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return o;
          },
        });
        var r = n(43210),
          a = n(86900),
          s = n(57393);
        let i = r.y,
          l = {
            localhost: a.Z,
            "app.ithacaprotocol.io": i,
            "sepolia.canary.ithacanoemon.tech": a.Z,
            "testnet.ithacaprotocol.io": a.Z,
            "app.canary.ithacanoemon.tech": a.Z,
            "mumbai.canary.ithacanoemon.tech": s.v,
            "decent-governor-development-phase1.up.railway.app": a.Z,
            "axelar-integration.ithacaprotocol.io": r.y,
          },
          o = (e) => {
            var t;
            return e
              ? {
                  id: 102,
                  name: "Solana",
                  nativeCurrency: { name: "SOL", symbol: "WSOL", decimals: 9 },
                }
              : /^ithaca-interface-git-[a-zA-Z0-9-]+-ithaca-[a-z0-9]+\.vercel\.app$/.test(
                  window.location.hostname
                )
              ? a.Z
              : null !== (t = l[window.location.hostname]) && void 0 !== t
              ? t
              : i;
          };
      },
      64729: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return r;
          },
        }),
          n(82649);
        let r = () => ({
          isSolanaWalletActive: !1,
          leaderBoardAddresses: {
            fundlockArbitrumAddress:
              "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
            wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          },
        });
      },
      81989: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gc: function () {
            return f;
          },
          ho: function () {
            return x;
          },
          Pk: function () {
            return p;
          },
        });
        var r = n(64729),
          a = n(92321),
          s = n(54306),
          i = n(44718),
          l = n(20448),
          o = n(12185),
          c = n(59731),
          d = n(88144),
          u = n(72809);
        let h = (e) => {
            let { address: t, token: n, query: a } = e,
              { connection: s } = (0, i.R)(),
              l = t ? new u.PublicKey(t) : null,
              { leaderBoardAddresses: o } = (0, r.X)();
            return (0, d.a)({
              queryKey: ["solana-balance", t, n],
              queryFn: async () => {
                if (!l || !s) throw Error("Missing publicKey or connection");
                if ("SOL" === n) {
                  let e = await s.getBalance(l);
                  return {
                    decimals: 9,
                    formatted: (e / u.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(e),
                  };
                }
                if ("USDC" === n) {
                  let e = await s.getParsedTokenAccountsByOwner(l, {
                      mint: new u.PublicKey(o.wethArbitrumAddress),
                    }),
                    t = 0;
                  return (
                    e.value.length > 0 &&
                      (t =
                        e.value[0].account.data.parsed.info.tokenAmount
                          .uiAmount || 0),
                    {
                      decimals: 6,
                      formatted: t.toString(),
                      symbol: "USDC",
                      value: BigInt(1e6 * t),
                    }
                  );
                }
                throw Error("Unsupported token: ".concat(n));
              },
              refetchInterval: 1e4,
              enabled: !!l && !!s,
              ...a,
            });
          },
          w = () => {
            let { isConnected: e, address: t } = (0, a.m)();
            return { isConnected: e, address: t };
          },
          m = () => {
            let { connected: e, publicKey: t } = (0, s.O)(),
              { connection: n } = (0, i.R)();
            return {
              isConnected: e,
              address: null == t ? void 0 : t.toBase58(),
            };
          },
          p = () => {
            let { isSolanaWalletActive: e } = (0, r.X)(),
              t = w(),
              n = m();
            return e ? n : t;
          },
          x = () => {
            let { address: e } = m();
            return {
              SOLData: h({
                address: e,
                token: "SOL",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
              USDCData: h({
                address: null == e ? void 0 : e.toString(),
                token: "USDC",
                query: { enabled: !!e, refetchInterval: 1e4 },
              }),
            };
          },
          f = () => {
            let { address: e } = w(),
              { systemInfo: t, isAuthenticated: n } = (0, c.qr)(),
              r = { address: e, chainId: (0, l.b)().id };
            return {
              WETHData: (0, o.K)({
                ...r,
                token: t.tokenAddress.WETH,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
              USDCData: (0, o.K)({
                ...r,
                token: t.tokenAddress.USDC,
                query: { enabled: n, refetchInterval: 1e4 },
              }),
            };
          };
      },
      50371: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            __N_SSG: function () {
              return eU;
            },
            default: function () {
              return eY;
            },
          });
        var r = n(85893),
          a = n(11163),
          s = n(74991),
          i = n(27888),
          l = n(66270),
          o = n(85292),
          c = n(65440),
          d = n(41664),
          u = n.n(d),
          h = n(25675),
          w = n.n(h),
          m = n(82861),
          p = n(84573),
          x = n(27014),
          f = n(97236),
          g = n(12180),
          v = n(68964),
          y = n(10957),
          j = n(88238),
          b = (e) => {
            var t, n, a;
            let { agent: s } = e,
              [, i] = (0, j.m9)(),
              l = async () => {
                await i((null == s ? void 0 : s._id) || "");
              };
            return (0, r.jsxs)("div", {
              className:
                "tw-grid tw-min-h-[410px] tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-4",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "tw-h-full tw-w-full tw-space-y-6 tw-rounded-xl tw-border tw-border-white/10 tw-p-6 md:tw-col-span-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: " tw-space-y-2",
                      children: [
                        (0, r.jsx)("div", {
                          className: "tw-text-lg tw-leading-6",
                          children: "Bio",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "tw-max-h-[250px] tw-overflow-y-auto tw-text-md tw-leading-6 tw-scrollbar-thin tw-scrollbar-track-white/5 tw-scrollbar-thumb-white/10",
                          children: null == s ? void 0 : s.about,
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-flex tw-items-center tw-gap-2",
                      children: (0, r.jsxs)("div", {
                        className:
                          "tw-flex tw-items-center tw-gap-1 tw-rounded-lg tw-bg-white/[0.04] tw-px-2 tw-py-1.5",
                        children: [
                          (0, r.jsx)("a", {
                            href: "https://arbiscan.io/address/".concat(
                              null == s ? void 0 : s._id
                            ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "tw-font-medium tw-leading-5 hover:tw-underline",
                            children: (0, g.Tg)(null == s ? void 0 : s._id),
                          }),
                          (0, r.jsx)("button", {
                            onClick: l,
                            className:
                              "tw-flex tw-items-center tw-justify-center",
                            children: (0, r.jsx)(y.Z, {
                              stroke: "#FFFFFF",
                              strokeWidth: 1.8,
                              width: 18,
                              height: 18,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "tw-h-full tw-w-full tw-space-y-6 tw-rounded-xl tw-border tw-border-white/10 tw-p-6 md:tw-col-span-2",
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-text-lg tw-leading-6",
                      children: "Personality",
                    }),
                    (0, r.jsxs)("div", {
                      className: "tw-mx-auto tw-max-w-md tw-space-y-4",
                      children: [
                        (0, r.jsx)(v.K, {
                          leftLabel: "Contrarian",
                          rightLabel: "Momentum",
                          value:
                            null !==
                              (t =
                                null == s ? void 0 : s.contrarian_momentum) &&
                            void 0 !== t
                              ? t
                              : 5,
                        }),
                        (0, r.jsx)(v.K, {
                          leftLabel: "Conservative",
                          rightLabel: "Aggressive",
                          value:
                            null !==
                              (n =
                                null == s
                                  ? void 0
                                  : s.conservative_aggressive) && void 0 !== n
                              ? n
                              : 5,
                        }),
                        (0, r.jsx)(v.K, {
                          leftLabel: "Introvert",
                          rightLabel: "Extrovert",
                          value:
                            null !==
                              (a =
                                null == s ? void 0 : s.introvert_extrovert) &&
                            void 0 !== a
                              ? a
                              : 5,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          N = n(67294),
          _ = n(45113),
          k = n(15229),
          A = (e) => {
            var t;
            let { prices: n, isLoadingPrices: a, fees: s, rate: i } = e,
              l = (e) =>
                void 0 === e
                  ? "-"
                  : "".concat(Number((0, k.b)(e, 2)).toFixed(2), "%"),
              o =
                (null == s ? void 0 : s.feeChangeTimestamp) &&
                (null == s ? void 0 : s.feeTimelockPeriod) &&
                s.feeChangeTimestamp !== BigInt(0)
                  ? new Date(
                      1e3 * Number(s.feeChangeTimestamp + s.feeTimelockPeriod)
                    ).toLocaleString()
                  : null;
            return (0, r.jsxs)("div", {
              className:
                "tw-grid tw-min-h-[410px] tw-grid-cols-1  tw-gap-6 sm:tw-grid-cols-1 md:tw-grid-cols-4 lg:tw-grid-cols-5",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "tw-space-y-4 tw-rounded-xl tw-border tw-border-white/10 tw-p-6 sm:tw-col-span-1 md:tw-col-span-2 lg:tw-col-span-2",
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-text-lg",
                      children: "Perfomance & Fees",
                    }),
                    (0, r.jsxs)("ul", {
                      className:
                        "tw-space-y-2 *:tw-text-lg *:tw-text-ithaca-gray-300",
                      children: [
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "APY**",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md ".concat(
                                ((null == n ? void 0 : n.nav_return) || 0) > 0
                                  ? "tw-text-ithaca-green-40"
                                  : ""
                              ),
                              children:
                                (null == n ? void 0 : n.nav_return) !== void 0
                                  ? "".concat(
                                      (100 * n.nav_return).toFixed(1),
                                      "%"
                                    )
                                  : "-",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "Volatility**",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children:
                                (null == n ? void 0 : n.volatility) !== void 0
                                  ? "".concat(
                                      (100 * n.volatility).toFixed(1),
                                      "%"
                                    )
                                  : "-",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between tw-text-lg tw-text-ithaca-gray-300",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "Max Drawdown**",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children:
                                (null == n ? void 0 : n.max_drawdown) !== void 0
                                  ? "".concat(
                                      (100 * n.max_drawdown).toFixed(1),
                                      "%"
                                    )
                                  : "-",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between tw-text-lg tw-text-ithaca-gray-300",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "Token Price",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: i
                                ? Number(i).toFixed(4)
                                : (null == n ? void 0 : n.hourly) &&
                                  n.hourly.length > 0 &&
                                  (null ===
                                    (t = n.hourly[n.hourly.length - 1]) ||
                                  void 0 === t
                                    ? void 0
                                    : t.price) !== void 0
                                ? "".concat(
                                    n.hourly[n.hourly.length - 1].price.toFixed(
                                      4
                                    )
                                  )
                                : "-",
                            }),
                          ],
                        }),
                        (0, r.jsx)("li", {
                          className: "tw-border-t tw-border-white/10 tw-pt-2",
                        }),
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "Vault Asset Fee",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: l(null == s ? void 0 : s.aumFee),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className:
                            "tw-flex tw-items-center tw-justify-between",
                          children: [
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: "Performance Fee",
                            }),
                            (0, r.jsx)("span", {
                              className: "tw-text-md",
                              children: l(
                                null == s ? void 0 : s.performanceFee
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o &&
                      (0, r.jsxs)("div", {
                        className:
                          "tw-mt-4 tw-border-t tw-border-white/10 tw-pt-4 tw-text-sm tw-text-[#A1A1AA]",
                        children: [
                          (0, r.jsxs)("p", {
                            children: ["Fees are scheduled to update on: ", o],
                          }),
                          (0, r.jsx)("p", {
                            className: "tw-mt-1",
                            children: "New fees will be:",
                          }),
                          (0, r.jsxs)("ul", {
                            className: "tw-list-disc tw-pl-5 tw-text-xs",
                            children: [
                              (0, r.jsxs)("li", {
                                children: [
                                  "Vault Asset Fee: ",
                                  l(null == s ? void 0 : s.pendingAumFee),
                                ],
                              }),
                              (0, r.jsxs)("li", {
                                children: [
                                  "Performance Fee: ",
                                  l(
                                    null == s ? void 0 : s.pendingPerformanceFee
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className: "tw-pt-4 tw-text-sm tw-text-[#A1A1AA]",
                      children: [
                        " ",
                        (0, r.jsx)("i", { children: "* net of fees" }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("i", {
                          children: "** net of fees, last 30 days",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "sm:tw-col-span-1 md:tw-col-span-2  lg:tw-col-span-3",
                  children: (0, r.jsx)(_.r, { prices: n, isLoadingPrices: a }),
                }),
              ],
            });
          },
          C = n(98376),
          T = (e) => {
            let { width: t = 20, height: n = 20, className: a } = e;
            return (0, r.jsxs)("svg", {
              width: t,
              height: n,
              className: a,
              viewBox: "0 0 318.6 318.6",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("polygon", {
                  fill: "#E2761B",
                  stroke: "#E2761B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points: "274.1,35.5 174.6,109.4 193,65.8",
                }),
                (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "44.4,35.5 143.1,110.1 125.6,65.8",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "238.3,206.8 211.8,247.4 268.5,262.6 284.8,207.7",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "33.9,207.7 50.1,262.6 106.8,247.4 80.3,206.8",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "103.6,138.2 87.8,162.1 144.1,164.6 142.1,101.3",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "214.9,138.2 175.9,101.3 174.6,164.6 230.8,162.1",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "106.8,247.4 140.6,230.9 111.4,208.1",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4761B",
                      stroke: "#E4761B",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "177.9,230.9 211.8,247.4 207.1,208.1",
                    }),
                  ],
                }),
                (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("polygon", {
                      fill: "#D7C1B3",
                      stroke: "#D7C1B3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "211.8,247.4 177.9,230.9 180.6,253 180.3,262.2",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#D7C1B3",
                      stroke: "#D7C1B3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "106.8,247.4 138.3,262.2 138.1,253 140.6,230.9",
                    }),
                  ],
                }),
                (0, r.jsx)("polygon", {
                  fill: "#233447",
                  stroke: "#233447",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points: "138.8,193.5 110.6,185.2 130.5,176.1",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#233447",
                  stroke: "#233447",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points: "179.7,193.5 188,176.1 208,185.2",
                }),
                (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("polygon", {
                      fill: "#CD6116",
                      stroke: "#CD6116",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "106.8,247.4 111.6,206.8 80.3,207.7",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#CD6116",
                      stroke: "#CD6116",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "207.1,206.8 211.8,247.4 238.3,207.7",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#CD6116",
                      stroke: "#CD6116",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points:
                        "230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#CD6116",
                      stroke: "#CD6116",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points:
                        "110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1",
                    }),
                  ],
                }),
                (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("polygon", {
                      fill: "#E4751F",
                      stroke: "#E4751F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "87.8,162.1 111.4,208.1 110.6,185.2",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4751F",
                      stroke: "#E4751F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "208.1,185.2 207.1,208.1 230.8,162.1",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4751F",
                      stroke: "#E4751F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#E4751F",
                      stroke: "#E4751F",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points: "174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5",
                    }),
                  ],
                }),
                (0, r.jsx)("polygon", {
                  fill: "#F6851B",
                  stroke: "#F6851B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#F6851B",
                  stroke: "#F6851B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#C0AD9E",
                  stroke: "#C0AD9E",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "180.3,262.2 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.2 106.8,247.4 117.8,256.4 140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#161616",
                  stroke: "#161616",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253",
                }),
                (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)("polygon", {
                      fill: "#763D16",
                      stroke: "#763D16",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points:
                        "278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 281.8,129.1 275.6,124.3 283.6,118.2",
                    }),
                    (0, r.jsx)("polygon", {
                      fill: "#763D16",
                      stroke: "#763D16",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      points:
                        "31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 140.6,106.9 44.4,35.5",
                    }),
                  ],
                }),
                (0, r.jsx)("polygon", {
                  fill: "#F6851B",
                  stroke: "#F6851B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#F6851B",
                  stroke: "#F6851B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1",
                }),
                (0, r.jsx)("polygon", {
                  fill: "#F6851B",
                  stroke: "#F6851B",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  points:
                    "174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6 173.1,227.6 173.3,182.8",
                }),
              ],
            });
          },
          E = n(92321),
          S = n(45338),
          I = n(47236),
          D = n(67930);
        let O = "/images/agents/avatar2.jpg",
          L = (e) => {
            let { totalAssets: t } = e,
              n = t ? Number(t) : 0,
              a = (n / D.Kz) * 100,
              s = D.Kz - n;
            return (0, r.jsxs)("div", {
              className: "tw-flex tw-min-w-[120px] tw-flex-col",
              children: [
                (0, r.jsx)("div", {
                  className: "tw-mb-2 tw-flex tw-flex-col",
                  children: (0, r.jsx)("span", {
                    className: "tw-text-sm",
                    children: "Vault Capacity",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "tw-flex tw-flex-col tw-gap-2",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "tw-h-2 tw-w-full tw-rounded-full tw-bg-white/10",
                      children: (0, r.jsx)("div", {
                        className:
                          "tw-h-full tw-rounded-full tw-bg-ithaca-green-40 tw-transition-all",
                        style: { width: "".concat(Math.min(a, 100), "%") },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "tw-flex tw-items-center tw-justify-between tw-text-xs",
                      children: [
                        (0, r.jsxs)("span", {
                          children: [(0, S.xG)(n, 0, !1), " USDC"],
                        }),
                        (0, r.jsxs)("span", {
                          className: "tw-text-ithaca-gray-300",
                          children: [(0, S.xG)(s, 0, !1), " USDC remaining"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          P = (e) => {
            var t;
            let {
                agent: n,
                userBalance: s,
                totalAssets: i,
                fees: l,
                prices: o,
                rate: c,
              } = e,
              d = (0, a.useRouter)(),
              h = (null == n ? void 0 : n.name) || "",
              v = (null == n ? void 0 : n.image) || O,
              { referralCode: j } = (function () {
                let { address: e } = (0, E.m)();
                return {
                  referralCode: (0, N.useMemo)(() => {
                    if (e) return btoa(e.startsWith("0x") ? e.slice(2) : e);
                  }, [e]),
                  address: e,
                };
              })(),
              { showToast: _ } = (0, I.Z)(),
              k =
                i && "0" !== i
                  ? Number(i)
                  : (null == o ? void 0 : o.assets) !== void 0
                  ? o.assets
                  : void 0,
              D = async () => {
                if (null == n ? void 0 : n.token)
                  try {
                    void 0 !== window.ethereum
                      ? (await window.ethereum.request({
                          method: "wallet_watchAsset",
                          params: {
                            type: "ERC20",
                            options: { address: n.token, image: n.image || O },
                          },
                        })) &&
                        _({
                          title: "Token Added!",
                          message:
                            "The token has been added to your MetaMask wallet.",
                          type: "success",
                        })
                      : _({
                          title: "MetaMask Not Found",
                          message:
                            "Please install MetaMask to add this token to your wallet.",
                          type: "error",
                        });
                  } catch (e) {
                    console.error("Error adding token to MetaMask:", e),
                      _({
                        title: "Error",
                        message:
                          "Failed to add token to MetaMask. Please try again.",
                        type: "error",
                      });
                  }
              },
              P = [
                {
                  id: "performance",
                  label: "Performance",
                  content: (0, r.jsx)(A, {
                    prices: o,
                    fees: l,
                    isLoadingPrices: !1,
                    rate: c,
                  }),
                },
                {
                  id: "about",
                  label: "About",
                  content: (0, r.jsx)(b, { agent: n }),
                },
              ];
            return (0, r.jsxs)(f.Y, {
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "tw-flex tw-items-center tw-justify-between tw-p-6 tw-text-sm tw-text-ithaca-gray-300",
                  children: [
                    (0, r.jsxs)("button", {
                      onClick: () => {
                        window.history.length > 2
                          ? d.back()
                          : d.push("/agents");
                      },
                      className:
                        "tw-flex tw-items-center tw-gap-5 tw-transition hover:tw-text-white tw-bg-transparent",
                      children: [
                        (0, r.jsx)(m.Z, {
                          className: "tw-size-4 tw-stroke-[4px]",
                        }),
                        " Agents",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "tw-flex tw-items-center tw-gap-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "tw-text-sm tw-text-white tw-mr-1",
                          children: "Share and earn",
                        }),
                        (0, r.jsx)("div", {
                          onClick: () => {
                            let e = "https://"
                              .concat(window.location.hostname, "/agents/")
                              .concat(null == n ? void 0 : n._id, "?referral=")
                              .concat(j);
                            navigator.clipboard.writeText(e),
                              _({
                                title: "Referral Code Copied!",
                                message:
                                  "Your referral link has been copied to the clipboard.",
                                type: "success",
                              });
                          },
                          className:
                            "tw-cursor-pointer tw-transition hover:tw-text-white tw-flex tw-items-center tw-justify-center tw-bg-white/10 tw-rounded-full tw-w-10 tw-h-10 tw-p-0.5",
                          children: (0, r.jsx)(p.Z, {
                            className: "tw-w-4 tw-h-4 tw-stroke-[2.5px]",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "tw-flex tw-flex-col tw-gap-6 tw-px-6 tw-pb-6 tw-pt-2 md:tw-flex-row",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "tw-size-[200px] tw-shrink-0 tw-overflow-hidden tw-rounded-full tw-bg-white/10",
                      children:
                        v &&
                        (0, r.jsx)(w(), {
                          width: 500,
                          height: 500,
                          alt: h,
                          src: v,
                          className: "tw-h-full tw-w-full tw-object-cover",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex tw-flex-col tw-justify-between",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "tw-flex tw-grow tw-flex-col tw-justify-between tw-gap-8",
                          children: (0, r.jsxs)("div", {
                            className: "tw-space-y-4",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "tw-flex tw-flex-col-reverse tw-justify-between tw-gap-2 tw-text-[26px] tw-leading-7 lg:tw-flex-row",
                                children: (0, r.jsxs)("div", {
                                  className: "tw-flex tw-items-center tw-gap-2",
                                  children: [
                                    null == n ? void 0 : n.name,
                                    (0, r.jsx)("div", {
                                      className:
                                        "tw-rounded-lg tw-bg-white/[0.04] tw-px-2.5 tw-py-1.5",
                                      children: (0, r.jsx)(u(), {
                                        href: "https://x.com/".concat(
                                          (null == n
                                            ? void 0
                                            : null === (t = n.twitter) ||
                                              void 0 === t
                                            ? void 0
                                            : t.username) || "IthacaProtocol"
                                        ),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, r.jsx)(C.Z, {
                                          height: 18,
                                          width: 18,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "tw-text-sm tw-leading-5 tw-text-zinc-200",
                                children: null == n ? void 0 : n.description,
                              }),
                              (0, r.jsx)(L, {
                                totalAssets: null == k ? void 0 : k.toString(),
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-flex tw-items-center tw-gap-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-sm tw-text-zinc-200",
                                    children: "Token",
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-rounded-lg tw-bg-white/[0.04] tw-px-2 tw-py-1.5",
                                    children: [
                                      (0, r.jsx)("a", {
                                        href: "https://arbiscan.io/token/".concat(
                                          null == n ? void 0 : n.token
                                        ),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "tw-font-medium tw-leading-5 hover:tw-underline",
                                        children: (0, g.Tg)(
                                          null == n ? void 0 : n.token
                                        ),
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => {
                                          navigator.clipboard.writeText(
                                            (null == n ? void 0 : n.token) || ""
                                          ),
                                            _({
                                              title: "Token Address Copied!",
                                              message:
                                                "The token address has been copied to the clipboard.",
                                              type: "success",
                                            });
                                        },
                                        className:
                                          "tw-flex tw-items-center tw-justify-center tw-ml-1",
                                        children: (0, r.jsx)(y.Z, {
                                          stroke: "#FFFFFF",
                                          strokeWidth: 1.8,
                                          width: 18,
                                          height: 18,
                                        }),
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: D,
                                        className:
                                          "tw-flex tw-items-center tw-justify-center tw-ml-1 tw-transition hover:tw-opacity-80",
                                        title: "Add to MetaMask",
                                        children: (0, r.jsx)(T, {
                                          width: 18,
                                          height: 18,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex tw-pt-6 *:tw-border-r *:tw-border-r-white/10 *:tw-px-4 first:*:tw-pl-0 last:*:tw-border-r-transparent",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "tw-flex tw-min-w-[120px] tw-flex-col",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "tw-mb-2 tw-flex tw-flex-col",
                                  children: (0, r.jsx)("span", {
                                    className: "tw-text-sm",
                                    children: "TVL",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "tw-flex tw-flex-col",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "tw-text-xl tw-font-normal",
                                      children:
                                        void 0 !== k
                                          ? (0, S.xG)(k, 2, !1)
                                          : "-",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "tw-text-xl tw-font-normal",
                                      children: "USDC",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "tw-flex tw-min-w-[120px] tw-flex-col",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "tw-mb-2 tw-flex tw-flex-col",
                                  children: (0, r.jsx)("span", {
                                    className: "tw-text-sm",
                                    children: "My Shares",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "tw-flex tw-flex-col",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "tw-text-xl tw-font-normal",
                                      children: s
                                        ? (0, S.xG)(Number(s), 2, !1)
                                        : "-",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "tw-text-xl tw-font-normal",
                                      children: "USDC",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "tw-flex tw-min-w-[120px] tw-flex-col",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "tw-mb-2 tw-flex tw-flex-col",
                                  children: (0, r.jsx)("span", {
                                    className: "tw-text-sm",
                                    children: "APY**",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "tw-flex tw-flex-col",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "tw-text-xl tw-font-normal ".concat(
                                          ((null == o
                                            ? void 0
                                            : o.nav_return) || 0) > 0
                                            ? "tw-text-ithaca-green-40"
                                            : ""
                                        ),
                                      children:
                                        (null == o ? void 0 : o.nav_return) !==
                                        void 0
                                          ? "".concat(
                                              (100 * o.nav_return).toFixed(1),
                                              "%"
                                            )
                                          : "",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "tw-text-xl tw-font-normal",
                                      children: "\xa0",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(x.Z, { tabs: P }),
              ],
            });
          };
        var F = n(29528),
          B = n(27426),
          W = n(75593),
          R = n(48120),
          H = n(51700),
          M = n(81838);
        let Z = (e) => {
          let {
            tokenSymbol: t,
            refresh: n,
            agentId: a,
            claims: s,
            isProcessing: i,
            processingComplete: l,
            handleRefresh: o,
            handleProcessWithdrawals: c,
            getStatusMessage: d,
          } = e;
          return (0, r.jsxs)("div", {
            className:
              "tw-flex tw-h-[320px] tw-max-h-[320px] tw-flex-col tw-overflow-hidden",
            children: [
              l &&
                (0, r.jsx)("div", {
                  className:
                    "tw-mb-2 tw-rounded-md tw-bg-green-900/30 tw-p-2 tw-text-sm",
                  children: (0, r.jsx)("div", {
                    className: "tw-font-medium tw-text-green-300",
                    children:
                      "Success! Funds are now being distributed to holders.",
                  }),
                }),
              (0, r.jsxs)("div", {
                className:
                  "tw-flex tw-px-4 tw-py-2 tw-text-sm tw-text-gray-400",
                children: [
                  (0, r.jsx)("div", {
                    className: "tw-w-[120px]",
                    children: "Request",
                  }),
                  (0, r.jsx)("div", {
                    className: "tw-flex-1",
                    children: "Amount",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "tw-flex-1 tw-overflow-y-auto",
                children:
                  0 === s.length
                    ? (0, r.jsx)("div", {
                        className:
                          "tw-flex tw-h-full tw-items-center tw-justify-center",
                        children: (0, r.jsx)("span", {
                          className: "tw-text-gray-400",
                          children: "No claims found",
                        }),
                      })
                    : s.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className:
                              "tw-flex tw-items-center tw-border-t tw-border-gray-800 tw-px-4 tw-py-2",
                            children: [
                              (0, r.jsx)("div", {
                                className: "tw-w-[120px] tw-text-sm",
                                children: "REQ-".concat(e.requestId.toString()),
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-flex-1 tw-text-sm",
                                children: [
                                  Number(e.pendingFundTokens) / 1e18
                                    ? (
                                        Number(e.pendingFundTokens) / 1e18
                                      ).toLocaleString("en-US", {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 4,
                                      })
                                    : "0",
                                  t ? " ".concat(t) : null,
                                ],
                              }),
                            ],
                          },
                          e.requestId.toString()
                        )
                      ),
              }),
              (0, r.jsxs)("div", {
                className: "tw-border-t tw-border-gray-800",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "tw-flex tw-items-center tw-justify-between tw-p-2",
                    children: [
                      (0, r.jsx)("div", {
                        className: "tw-text-sm tw-font-medium tw-text-blue-300",
                        children: d,
                      }),
                      n &&
                        (0, r.jsx)("button", {
                          onClick: o,
                          className:
                            "tw-ml-2 tw-text-blue-400 hover:tw-text-blue-300 disabled:tw-opacity-50",
                          disabled: i,
                          title: "Refresh claims",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "tw-h-4 tw-w-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, r.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                            }),
                          }),
                        }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    onClick: c,
                    disabled: i,
                    className:
                      "tw-w-full tw-rounded-none tw-bg-blue-700 tw-px-3 tw-py-2 tw-text-sm tw-text-white hover:tw-bg-blue-600 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    children: i
                      ? (0, r.jsxs)("span", {
                          className:
                            "tw-flex tw-items-center tw-justify-center",
                          children: [
                            (0, r.jsxs)("svg", {
                              className:
                                "tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              children: [
                                (0, r.jsx)("circle", {
                                  className: "tw-opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                }),
                                (0, r.jsx)("path", {
                                  className: "tw-opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            "Processing...",
                          ],
                        })
                      : "Process Distribution",
                  }),
                ],
              }),
            ],
          });
        };
        var U = n(89810);
        let Y = (e) => {
            if (0 === e) return "N/A";
            let t = new Date(1e3 * e),
              n = new Date();
            if (t.toDateString() === n.toDateString())
              return "Today at ".concat(
                t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
              );
            let r = new Date();
            return (r.setDate(r.getDate() + 1),
            t.toDateString() === r.toDateString())
              ? "Tomorrow at ".concat(
                  t.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })
                )
              : t.toLocaleDateString(void 0, {
                  month: "short",
                  day: "numeric",
                }) +
                  " at " +
                  t.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  });
          },
          V = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6;
            return Number((0, k.b)(e, t)).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          },
          q = () => {
            let e = new Date();
            return (
              e.setUTCHours(8, 0, 0, 0),
              e.setUTCDate(e.getUTCDate() + ((7 - e.getUTCDay() + 5) % 7)),
              e.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: !0,
                timeZoneName: "short",
              })
            );
          },
          z = (e) => {
            let { agentId: t, refresh: n } = e,
              { address: r } = (0, E.m)(),
              [a, s] = (0, N.useState)(!1),
              [i, l] = (0, N.useState)(!1),
              { writeContractAsync: o } = (0, W.S)(),
              [c, d] = (0, N.useState)({
                fundsReadyToRelease: BigInt(0),
                fundsInProcess: BigInt(0),
                nextReleaseTime: 0,
                totalPendingWithdrawals: BigInt(0),
                ithacaBalance: BigInt(0),
              }),
              [u, h] = (0, N.useState)([]),
              { data: w, refetch: m } = (0, U.u)({
                address: t,
                abi: [
                  {
                    name: "getWithdrawalStatus",
                    type: "function",
                    inputs: [],
                    outputs: [
                      { name: "fundsReadyToRelease", type: "uint256" },
                      { name: "fundsInProcess", type: "uint256" },
                      { name: "nextReleaseTime", type: "uint256" },
                      { name: "totalPendingWithdrawals", type: "uint256" },
                      { name: "ithacaBalance", type: "uint256" },
                    ],
                    stateMutability: "view",
                  },
                ],
                functionName: "getWithdrawalStatus",
                args: [],
                query: { enabled: !!t },
              }),
              { data: p, refetch: x } = (0, U.u)({
                address: t,
                abi: [
                  {
                    name: "getActiveWithdrawals",
                    type: "function",
                    inputs: [{ name: "user", type: "address" }],
                    outputs: [
                      {
                        name: "withdrawals",
                        type: "tuple[]",
                        components: [
                          { name: "requestId", type: "uint256" },
                          { name: "pendingFundTokens", type: "uint256" },
                        ],
                      },
                    ],
                    stateMutability: "view",
                  },
                ],
                functionName: "getActiveWithdrawals",
                args: r ? [r] : void 0,
                query: { enabled: !!t && !!r },
              });
            (0, N.useEffect)(() => {
              if (w) {
                let [e, t, n, r, a] = w;
                d({
                  fundsReadyToRelease: e,
                  fundsInProcess: t,
                  nextReleaseTime: Number(n),
                  totalPendingWithdrawals: r,
                  ithacaBalance: a,
                });
              }
            }, [w]),
              (0, N.useEffect)(() => {
                p && Array.isArray(p)
                  ? h(
                      p.map((e) => ({
                        requestId: e.requestId,
                        pendingFundTokens: e.pendingFundTokens,
                      }))
                    )
                  : h([]);
              }, [p]);
            let f = (0, N.useMemo)(() => {
                let e = BigInt(1e5);
                if (c.fundsReadyToRelease > 0)
                  return "Funds batch ready to be distributed to holders ".concat(
                    V(c.fundsReadyToRelease)
                  );
                if (c.fundsInProcess > 0)
                  return "Withdrawals in process "
                    .concat(
                      V(c.fundsInProcess),
                      ", next batch distribution at "
                    )
                    .concat(Y(c.nextReleaseTime));
                let t =
                  c.totalPendingWithdrawals -
                  (c.fundsReadyToRelease + c.fundsInProcess);
                if (t > 0) {
                  if (c.ithacaBalance > e)
                    return "Pending withdrawals can be started ".concat(V(t));
                  let n = q();
                  return "Pending withdrawals waiting for assets "
                    .concat(V(t), " (released on Fridays at ")
                    .concat(n, ")");
                }
                return null;
              }, [c, Y]),
              g = (0, N.useCallback)(() => {
                n && n(), m(), x();
              }, [n, m, x]),
              v = (0, N.useCallback)(async () => {
                if (t && r)
                  try {
                    s(!0), l(!1);
                    let e = await (0, H.l0)(t);
                    if ("string" == typeof e)
                      throw Error("Failed to get agent signature");
                    await o({
                      address: t,
                      abi: [
                        {
                          name: "processAllWithUpdate",
                          type: "function",
                          inputs: [
                            { name: "maxWithdrawalRequests", type: "uint256" },
                            { name: "newExternalBalance", type: "uint256" },
                            { name: "blockNumber", type: "uint256" },
                            { name: "signature", type: "bytes" },
                          ],
                          outputs: [
                            { name: "released", type: "uint256" },
                            { name: "processed", type: "uint256" },
                            { name: "withdrawalRequested", type: "bool" },
                            { name: "deposited", type: "uint256" },
                          ],
                          stateMutability: "nonpayable",
                        },
                      ],
                      functionName: "processAllWithUpdate",
                      args: [
                        BigInt(10),
                        BigInt(e.balance),
                        BigInt(e.block_number),
                        e.signature,
                      ],
                    }),
                      l(!0),
                      g();
                  } catch (e) {
                    g();
                  } finally {
                    s(!1);
                  }
              }, [t, r, o, g]);
            return {
              isProcessing: a,
              processingComplete: i,
              handleRefresh: g,
              handleProcessWithdrawals: v,
              getStatusMessage: f,
              claims: u,
              refetchClaims: x,
            };
          };
        var K = n(28966);
        let G = M.O.DEPOSITS_ROUTER,
          X = (e) => {
            let {
                type: t,
                usdcBalance: n,
                agentTokenBalance: a,
                agent: s,
                tokenSymbol: i,
                usdcAllowance: l,
                referralCode: o,
                refresh: c,
                isTransactionPending: d,
                setIsTransactionPending: u,
                isTransactionCompleted: h,
                setIsTransactionCompleted: w,
                transactionHash: m,
                setTransactionHash: p,
                totalAssets: x,
              } = e,
              { writeContractAsync: f } = (0, W.S)(),
              g = (0, N.useCallback)(
                async (e) => {
                  try {
                    if ((u(!0), !(null == s ? void 0 : s._id)))
                      throw Error("Agent ID is required");
                    let n = await (0, H.l0)(s._id);
                    if ("string" == typeof n)
                      throw Error("Failed to get agent signature");
                    if ("deposit" === t) {
                      let t;
                      let r = (0, R.v)(e, 6);
                      (t = o
                        ? await f({
                            address: G,
                            abi: [
                              {
                                name: "depositWithSignature",
                                type: "function",
                                inputs: [
                                  { name: "depositManager", type: "address" },
                                  { name: "amount", type: "uint256" },
                                  {
                                    name: "newExternalBalance",
                                    type: "uint256",
                                  },
                                  { name: "blockNumber", type: "uint256" },
                                  { name: "signature", type: "bytes" },
                                  { name: "referralCode", type: "string" },
                                ],
                                outputs: [],
                                stateMutability: "nonpayable",
                              },
                            ],
                            functionName: "depositWithSignature",
                            args: [
                              s._id,
                              r,
                              BigInt(n.balance),
                              BigInt(n.block_number),
                              n.signature,
                              o,
                            ],
                          })
                        : await f({
                            address: G,
                            abi: [
                              {
                                name: "depositWithSignature",
                                type: "function",
                                inputs: [
                                  { name: "depositManager", type: "address" },
                                  { name: "amount", type: "uint256" },
                                  {
                                    name: "newExternalBalance",
                                    type: "uint256",
                                  },
                                  { name: "blockNumber", type: "uint256" },
                                  { name: "signature", type: "bytes" },
                                ],
                                outputs: [],
                                stateMutability: "nonpayable",
                              },
                            ],
                            functionName: "depositWithSignature",
                            args: [
                              s._id,
                              r,
                              BigInt(n.balance),
                              BigInt(n.block_number),
                              n.signature,
                            ],
                          })),
                        p(t);
                    } else {
                      let t = (0, R.v)(e, 18),
                        r = await f({
                          address: s._id,
                          abi: [
                            {
                              name: "requestWithdrawalWithUpdate",
                              type: "function",
                              inputs: [
                                { name: "fundTokenAmount", type: "uint256" },
                                { name: "newExternalBalance", type: "uint256" },
                                { name: "blockNumber", type: "uint256" },
                                { name: "signature", type: "bytes" },
                              ],
                              outputs: [{ name: "requestId", type: "uint256" }],
                              stateMutability: "nonpayable",
                            },
                          ],
                          functionName: "requestWithdrawalWithUpdate",
                          args: [
                            t,
                            BigInt(n.balance),
                            BigInt(n.block_number),
                            n.signature,
                          ],
                        });
                      p(r), c && (await c());
                    }
                    w(!0), "deposit" === t && c && (await c());
                  } catch (r) {
                    console.error("Transaction failed:", r);
                    let {
                      errorName: e,
                      description: t,
                      message: n,
                    } = (0, K.Im)(r);
                    "Unknown error" !== e &&
                      console.error(
                        "Contract error: ".concat(e, " (").concat(t, ")")
                      ),
                      console.error(n);
                  } finally {
                    u(!1);
                  }
                },
                [t, s, o, c, u, w, p, f]
              );
            return "deposit" === t
              ? (0, r.jsx)(F.x, {
                  text: "Deposit",
                  description: "Deposit Funds into the Agent Vault",
                  balance: { amount: n, currency: "USDC", decimals: 6 },
                  tokenIcon: { src: B.Z.src, alt: "USDC" },
                  onSubmit: g,
                  refresh: c,
                  isTransactionPending: d,
                  isTransactionCompleted: h,
                  transactionHash: m,
                  type: t,
                  tokenSymbol: i || "",
                  agent: s,
                  setIsTransactionCompleted: w,
                  setTransactionHash: p,
                  currentAllowance: l,
                  totalAssets: x,
                })
              : (0, r.jsx)(F.x, {
                  text: "Withdraw",
                  description:
                    "Funds release from balance first, then as positions expire.",
                  balance: { amount: a, currency: i || "", decimals: 18 },
                  tokenIcon: {
                    src:
                      (null == s ? void 0 : s.image) ||
                      "/images/agents/avatar2.jpg",
                    alt: (null == s ? void 0 : s.name) || "",
                  },
                  onSubmit: g,
                  refresh: c,
                  isTransactionPending: d,
                  isTransactionCompleted: h,
                  transactionHash: m,
                  type: t,
                  tokenSymbol: i || "",
                  agent: s,
                  setIsTransactionCompleted: w,
                  setTransactionHash: p,
                  currentAllowance: BigInt(
                    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                  ),
                  totalAssets: x,
                });
          },
          Q = (e) => {
            let {
                agent: t,
                usdcBalance: n,
                agentTokenBalance: a,
                tokenSymbol: s,
                usdcAllowance: i,
                referralCode: l,
                refresh: o,
                totalAssets: c,
              } = e,
              [d, u] = (0, N.useState)(!1),
              [h, w] = (0, N.useState)(!1),
              [m, p] = (0, N.useState)(),
              {
                claims: g,
                isProcessing: v,
                processingComplete: y,
                handleRefresh: j,
                handleProcessWithdrawals: b,
                getStatusMessage: _,
              } = z({ agentId: null == t ? void 0 : t._id, refresh: o }),
              k = (0, N.useCallback)(() => {
                u(!1), w(!1), p(void 0);
              }, []),
              A = (0, N.useMemo)(
                () => g.some((e) => e.pendingFundTokens > BigInt(0)),
                [g]
              ),
              C = (0, N.useCallback)(() => {
                o && o(), j();
              }, [o, j]),
              T = (0, N.useMemo)(
                () => [
                  {
                    id: "deposit",
                    label: "Deposit",
                    content: (0, r.jsx)(X, {
                      type: "deposit",
                      usdcBalance: n,
                      agentTokenBalance: a,
                      agent: t,
                      tokenSymbol: s,
                      usdcAllowance: i,
                      referralCode: l,
                      refresh: C,
                      isTransactionPending: d,
                      setIsTransactionPending: u,
                      isTransactionCompleted: h,
                      setIsTransactionCompleted: w,
                      transactionHash: m,
                      setTransactionHash: p,
                      totalAssets: c,
                    }),
                  },
                  {
                    id: "withdraw",
                    label: "Withdraw",
                    content: (0, r.jsx)(X, {
                      type: "withdraw",
                      usdcBalance: n,
                      agentTokenBalance: a,
                      agent: t,
                      tokenSymbol: s,
                      refresh: C,
                      isTransactionPending: d,
                      setIsTransactionPending: u,
                      isTransactionCompleted: h,
                      setIsTransactionCompleted: w,
                      transactionHash: m,
                      setTransactionHash: p,
                      totalAssets: c,
                    }),
                  },
                  {
                    id: "claims",
                    label: (0, r.jsxs)(r.Fragment, {
                      children: [
                        "Claims",
                        " ",
                        A &&
                          (0, r.jsx)("span", {
                            className:
                              "tw-ml-[6px] tw-inline-block tw-h-[6px] tw-w-[6px] tw-rounded-full tw-bg-yellow-500 tw-align-middle",
                          }),
                      ],
                    }),
                    content: (0, r.jsx)(Z, {
                      tokenSymbol: s,
                      refresh: j,
                      agentId: null == t ? void 0 : t._id,
                      claims: g,
                      isProcessing: v,
                      processingComplete: y,
                      handleRefresh: j,
                      handleProcessWithdrawals: b,
                      getStatusMessage: _,
                    }),
                  },
                ],
                [n, a, t, s, i, l, C, d, u, h, w, m, p, A, g, v, y, j, b, _, c]
              );
            return (0, r.jsx)(f.Y, {
              className: " tw-pt-4",
              children: (0, r.jsx)(x.Z, { tabs: T, onTabChange: k }),
            });
          };
        var J = n(9905),
          $ = n(50568),
          ee = n(18776);
        let et = (e) => {
            let { tweet: t, date: n, agentName: a = "agent thumbnail" } = e,
              s = new Date(n.endsWith("Z") ? n : "".concat(n, "Z"));
            return (0, r.jsxs)("div", {
              className:
                "tw-rounded-xl tw-p-3 tw-text-ithaca-white-60 first:tw-py-0",
              children: [
                (0, r.jsx)("div", {
                  className: "tw-flex tw-items-center tw-gap-2 tw-pb-2",
                  children: (0, r.jsx)("span", {
                    className: "tw-text-md tw-font-medium tw-text-white",
                    children: a,
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "leading-5 tw-font-source tw-text-sm tw-text-ithaca-gray-20",
                  children: t,
                }),
                (0, r.jsx)("div", {
                  className: "leading-4 tw-mt-4 tw-text-end tw-text-sm",
                  children: !(function (e) {
                    return (0, $.Z)(1, arguments), (0, J.Z)(e, Date.now());
                  })(s)
                    ? (0, ee.Z)(s, "MMM d, h:mm a")
                    : (0, ee.Z)(s, "h:mm a"),
                }),
              ],
            });
          },
          en = (e) => {
            let { agent: t, tweets: n = [] } = e;
            return (0, r.jsxs)(f.Y, {
              className: "tw-bg-black/20 tw-backdrop-blur-[18px]",
              children: [
                (0, r.jsx)("div", {
                  className: "tw-sticky tw-top-0 tw-p-6 tw-pb-5 tw-text-lg",
                  children: "Traders Journal",
                }),
                (0, r.jsx)("div", {
                  className:
                    " tw-max-h-[600px] tw-min-h-[400px] tw-space-y-2 tw-overflow-y-auto tw-p-4 tw-pt-0 tw-scrollbar-none",
                  children:
                    n.length > 0
                      ? n.map((e) =>
                          (0, r.jsx)(
                            et,
                            {
                              tweet: e.tweet,
                              date: e.date,
                              agentName: null == t ? void 0 : t.name,
                            },
                            e._id
                          )
                        )
                      : (0, r.jsx)("div", {
                          className:
                            "tw-py-4 tw-text-center tw-text-ithaca-gray-20",
                          children: "No tweets available",
                        }),
                }),
              ],
            });
          };
        var er = n(93967),
          ea = n.n(er),
          es = n(77768),
          ei = n.n(es),
          el = n(32010),
          eo = n(46449),
          ec = n(12349),
          ed = n(59731),
          eu = n(69280),
          eh = n(47825),
          ew = n(7110),
          em = n(20847),
          ep = n(18572),
          ex = n(85056),
          ef = n(87214),
          eg = n(66610),
          ev = n(18666),
          ey = n(62582),
          ej = n(90639);
        let eb = (0, N.memo)(ef.Z),
          eN = (0, N.memo)(ew.Z);
        var e_ = (e) => {
            let { agentId: t } = e,
              [n, a] = (0, N.useState)([]),
              {
                currentPage: s,
                handlePageChange: i,
                pageStart: l,
                pageEnd: o,
              } = (0, eo.ZP)(),
              [c, d, u, h, w] = (0, ed.qr)(
                (0, el.N)((e) => [
                  e.newToast,
                  e.isAuthenticated,
                  e.unFilteredContractList,
                  e.ithacaSDK,
                  e.underlyingCurrency,
                ])
              ),
              {
                setPositionsFilter: m,
                filters: { strikeFilter: p, expiryFilter: x, productFilter: f },
              } = (0, ed.xc)(
                (0, el.N)((e) => ({
                  setPositionsFilter: e.setPositionsFilter,
                  filters: {
                    strikeFilter: e.positions.strikeFilter,
                    expiryFilter: e.positions.expiryFilter,
                    productFilter: e.positions.productFilter,
                  },
                }))
              ),
              g = m("strikeFilter"),
              v = m("expiryFilter"),
              y = m("productFilter"),
              [j, b] = (0, N.useState)({ header: null, isAsc: !0 }),
              _ = !!t || d,
              {
                data: k = [],
                isLoading: A,
                refetch: C,
              } = (0, ec.$)({
                isConnectedAndAuthenticated: _,
                unFilteredContractList: u,
                agentId: t,
                ithacaSDK: h,
                underlyingCurrency: w,
              }),
              T = (0, N.useMemo)(() => {
                let e = (0, eg.ht)(k, f);
                if (
                  ((e = (0, eg.Di)(e, x)),
                  (e = (0, eg.Rz)(e, p)),
                  !j.header ||
                    ![
                      "Quantity",
                      "Average Price",
                      "Δ Delta",
                      "Θ Theta",
                      "Γ Gamma",
                      "ν Vega",
                    ].includes(j.header))
                )
                  return e;
                let t = {
                  Quantity: "quantity",
                  "Average Price": "averagePrice",
                  "Δ Delta": "delta",
                  "Θ Theta": "theta",
                  "Γ Gamma": "gamma",
                  "ν Vega": "vega",
                }[j.header];
                return (0, ey.rG)(e, t, j.isAsc);
              }, [k, f, x, p, j]),
              E = (0, N.useMemo)(() => T.length, [T]),
              S = (0, N.useMemo)(() => T.slice(l, o), [T, l, o]),
              I = (0, N.useMemo)(
                () => ({
                  pnl: T.reduce((e, t) => {
                    var n;
                    return (
                      e +
                      (null !== (n = t.profitAndLoss) && void 0 !== n ? n : 0)
                    );
                  }, 0),
                  delta: T.reduce((e, t) => {
                    var n;
                    return e + (null !== (n = t.delta) && void 0 !== n ? n : 0);
                  }, 0),
                  vega: T.reduce((e, t) => {
                    var n;
                    return e + (null !== (n = t.vega) && void 0 !== n ? n : 0);
                  }, 0),
                  gamma: T.reduce((e, t) => {
                    var n;
                    return e + (null !== (n = t.gamma) && void 0 !== n ? n : 0);
                  }, 0),
                  theta: T.reduce((e, t) => {
                    var n;
                    return e + (null !== (n = t.theta) && void 0 !== n ? n : 0);
                  }, 0),
                }),
                [T]
              ),
              O = (0, N.useMemo)(() => S.length > 0, [S]),
              L = (0, N.useMemo)(() => !S.length && !A, [S, A]),
              P = (0, N.useMemo)(() => !S.length && A && _, [S, A, _]),
              F = (0, N.useMemo)(
                () =>
                  Array.from(new Set(k.flatMap((e) => "".concat(e.strike))))
                    .sort()
                    .map((e) => "".concat(e)),
                [k]
              ),
              B = (0, N.useMemo)(
                () =>
                  Array.from(new Set(k.map((e) => e.expiry)))
                    .sort()
                    .map((e) => (0, ev.lV)("".concat(e))),
                [k]
              ),
              W = (0, N.useMemo)(
                () =>
                  Array.from(new Set(k.map((e) => (0, ey.Yf)(e.product))))
                    .sort()
                    .map((e) => e),
                [k]
              ),
              R = (0, N.useCallback)((e) => {
                a((t) =>
                  t.includes(e) ? t.filter((t) => t !== e) : [...t, e]
                );
              }, []),
              H = (0, N.useCallback)((e) => {
                b((t) => ({ header: e, isAsc: t.header !== e || !t.isAsc }));
              }, []);
            return (
              (0, N.useEffect)(() => {
                c &&
                  ("NEW" === c.orderStatus || "FILLED" === c.orderStatus) &&
                  C();
              }, [c, C]),
              (0, N.useEffect)(() => {
                if (!B.length && !F.length) return;
                let e =
                    x.length > 0 &&
                    !x.every((e) =>
                      B.map((e) => e.toUpperCase()).includes(e.toUpperCase())
                    ),
                  t = p.length > 0 && !p.every((e) => F.includes(e)),
                  n = 1 === B.length && 0 === x.length;
                e ? v([]) : n && v([B[0].toUpperCase()]), t && g([]);
              }, [B, F, x, v, g, p]),
              (0, N.useEffect)(() => {
                a([]);
              }, [l]),
              (0, r.jsxs)("div", {
                "data-agent-view": "true",
                className: ea()(ei().gridContainerTable, {
                  [ei().isOpacity]: !_,
                }),
                children: [
                  (0, r.jsx)(eu.Z, {
                    type: ej.vj.ORDER,
                    updateSort: H,
                    expiryFilter: x,
                    isExpirySingleChoice: !0,
                    expiryList: B,
                    strikeList: F,
                    productList: W,
                    productFilter: f,
                    strikeFilter: p,
                    setStrikeFilter: g,
                    setExpiryFilter: v,
                    setProductFilter: y,
                    isAgentHeader: !!t,
                  }),
                  O &&
                    S.map((e, a) => {
                      let s = n.includes(a);
                      return (0, r.jsxs)(
                        N.Fragment,
                        {
                          children: [
                            (0, r.jsx)(eN, {
                              handleRowExpand: R,
                              expandedRow: n,
                              row: e,
                              rowIndex: a,
                              isPositionInBanner: !1,
                              addPositionToBanner: () => {},
                              removePositionFromBanner: () => {},
                              showPNLBanner: !1,
                              isAgentPositionRow: !!t,
                            }),
                            (0, r.jsx)(eb, {
                              isRowExpanded: s,
                              type: ej.vj.ORDER,
                              children: (0, r.jsx)(ex.Z, {
                                contractId: e.contractId,
                                agentId: t,
                              }),
                            }),
                          ],
                        },
                        a
                      );
                    }),
                  (0, r.jsx)("div", {
                    className:
                      "tw-col-span-8 tw-mr-3 tw-flex tw-items-center tw-justify-end tw-gap-3",
                    children: I.pnl
                      ? (0, r.jsxs)(N.Fragment, {
                          children: [
                            (0, r.jsx)("p", {
                              className: "tw-text-xs tw-text-white",
                              children: "Selected Positions’ Total :",
                            }),
                            (0, r.jsx)(em.Z, {
                              plusMinusOnly: !0,
                              labelClassName: "!tw-text-xs",
                              className: "!tw-items-end",
                              value: Number(I.pnl.toFixed(D.Gw)),
                              showAbsValue: !0,
                            }),
                          ],
                        })
                      : (0, r.jsx)(N.Fragment, {}),
                  }),
                  (0, r.jsx)(eh.Z, { value: I.delta, decimalPlaces: 3 }),
                  (0, r.jsx)(eh.Z, { value: I.vega }),
                  (0, r.jsx)(eh.Z, { value: I.gamma, decimalPlaces: 3 }),
                  (0, r.jsx)(eh.Z, { value: I.theta }),
                  (0, r.jsx)("div", {}),
                  (0, r.jsx)("div", {
                    style: { minHeight: (0, ey.OS)(S.length) },
                    className: "tw-col-span-full",
                    children: (0, r.jsx)(ep.y, {
                      displayIsLoading: P,
                      displayNoResults: L,
                      isAuthenticated: _,
                      totalItems: E,
                      currentPage: s,
                      handlePageChange: i,
                    }),
                  }),
                ],
              })
            );
          },
          ek = n(27484),
          eA = n.n(ek),
          eC = n(15394),
          eT = n(64740),
          eE = n(45343),
          eS = n(10066),
          eI = n(60857),
          eD = n(55261),
          eO = n(92715),
          eL = n(47054),
          eP = n(48741),
          eF = n(45686),
          eB = n(12002);
        let eW = { from: (0, eC.Z)(new Date(), 7), to: new Date() },
          eR = { side: [], product: [], strike: [], currency: [] };
        var eH = (e) => {
            let { agentId: t } = e,
              { showErrorToast: n } = (0, I.Z)(),
              {
                currentPage: a,
                handlePageChange: s,
                pageStart: i,
                pageEnd: l,
              } = (0, eo.ZP)(),
              [o, d, u] = (0, ed.qr)(
                (0, el.N)((e) => [e.ithacaSDK, e.isAuthenticated, e.expiryList])
              ),
              [h, w] = (0, N.useState)(eR),
              [m, p] = (0, N.useState)([]),
              [x, f] = (0, N.useState)({ header: "", direction: !0 }),
              [g, v] = (0, N.useState)(eW),
              [y, j] = (0, N.useState)(!1),
              b = (0, N.useMemo)(() => !!t || d, [t, d]),
              {
                data: _ = [],
                isLoading: k,
                error: A,
              } = (0, eB.rg)({
                enableQuery: b,
                range: g,
                expiryList: u,
                agentId: t,
              }),
              C = (0, N.useMemo)(
                () => ({
                  strikes: Array.from(new Set(_.flatMap((e) => e.strikeGroup)))
                    .sort()
                    .map((e) => "".concat(e)),
                  products: Array.from(
                    new Set(_.map((e) => (0, ey.Yf)(e.product)))
                  ).sort(),
                }),
                [_]
              ),
              T = (0, N.useMemo)(() => {
                if (!b || k) return [];
                let e = (0, eS.em)(_, h.product);
                switch (
                  ((e = (0, eS.up)(e, h.side)),
                  (e = (0, eS.lU)(e, h.currency)),
                  (e = (0, eS._4)(e, h.strike)),
                  x.header)
                ) {
                  case "Order Date":
                    e = (0, eS.U9)(e, x.direction);
                    break;
                  case "Expiry":
                  case "Collateral Amount":
                    e = (0, eS.e4)(e, x.direction);
                    break;
                  case "Price Traded":
                    e = (0, eS.Rd)(e, x.direction);
                }
                return e;
              }, [_, b, k, h, x]),
              E = (0, N.useMemo)(() => T.length, [T]),
              S = (0, N.useMemo)(() => T.slice(i, l), [T, i, l]),
              D = (0, N.useMemo)(() => k && b, [b, k]),
              O = (0, N.useMemo)(() => !S.length && !k, [S, k]),
              L = (0, N.useMemo)(() => S.length > 0 && !k, [k, S]),
              P = (0, N.useCallback)((e) => {
                var t, n;
                v({
                  from: null !== (t = e.from) && void 0 !== t ? t : eW.from,
                  to: null !== (n = e.to) && void 0 !== n ? n : eW.to,
                });
              }, []),
              F = (0, N.useCallback)((e) => {
                w((t) => ({ ...t, [e]: [] }));
              }, []),
              B = (0, N.useCallback)((e, t) => {
                f((n) => ({
                  header: e,
                  direction: n.header === e ? !n.direction : t,
                }));
              }, []),
              W = (0, N.useCallback)((e) => {
                p((t) =>
                  t.includes(e) ? t.filter((t) => t !== e) : [...t, e]
                );
              }, []),
              R = (0, N.useCallback)((e) => {
                w((t) => ({ ...t, side: e }));
              }, []),
              H = (0, N.useCallback)((e) => {
                w((t) => ({ ...t, product: e }));
              }, []),
              M = (0, N.useCallback)((e) => {
                w((t) => ({ ...t, currency: e }));
              }, []),
              Z = (0, N.useCallback)((e) => {
                w((t) => ({ ...t, strike: e }));
              }, []),
              U = (0, N.useCallback)(() => {
                n({
                  title: "Failed to Download",
                  message: "Try selecting a shorter date range.",
                });
              }, [n]),
              Y = (0, N.useCallback)(async () => {
                try {
                  j(!0);
                  let e = await o.client.tradeHistory(
                    (0, eT.Z)(g.from).getTime(),
                    (0, eE.Z)(g.to).getTime(),
                    eB.z0,
                    eB.BL
                  );
                  return (0, ey.Q1)(e);
                } catch (e) {
                  throw Error("Failed to prepare trade history report");
                } finally {
                  j(!1);
                }
              }, [o, g]);
            return (
              (0, N.useEffect)(() => {
                !k && A && U();
              }, [k, A, U]),
              (0, N.useEffect)(() => {
                !x.header && S.length > 0 && B("Order Date", !1);
              }, [S.length, x.header, B]),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  b &&
                    (0, r.jsxs)("div", {
                      className:
                        "tw-mb-5 tw-flex tw-flex-row tw-items-center tw-gap-3",
                      children: [
                        (0, r.jsx)("p", {
                          className: "tw-text-sm tw-text-white",
                          children: "Date Range",
                        }),
                        (0, r.jsx)("div", {
                          children: (0, r.jsx)(eO.Z, {
                            minSelected: 2,
                            maxSelected: 30,
                            start: g.from,
                            end: g.to,
                            handleSelect: P,
                          }),
                        }),
                        (0, r.jsx)(eD.Z, {
                          disabled: y,
                          filename: "trade_history_"
                            .concat(eA()(g.from).format("DD-MM-YY"), "_")
                            .concat(eA()(g.to).format("DD-MM-YY")),
                          className: "tw-text-sm tw-text-white",
                          datas: Y,
                          handleError: U,
                          children: (0, r.jsxs)("div", {
                            className: "flex tw-items-center tw-gap-1",
                            children: [
                              "Download Page Data",
                              y
                                ? (0, r.jsx)(c.Z, { type: "md" })
                                : (0, r.jsx)(eI.Z, { width: 20, height: 20 }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  (0, r.jsxs)("div", {
                    className: ea()(ei().gridContainerTableHistory, {
                      [ei().isOpacity]: !b,
                    }),
                    children: [
                      (0, r.jsx)(eL.Z, {
                        updateSort: B,
                        currencyArray: h.currency,
                        clearFilterArray: F,
                        productArray: h.product,
                        sideArray: h.side,
                        setSideArray: R,
                        setProductArray: H,
                        setCurrencyArray: M,
                        type: ej.vj.HISTORY,
                        strikesArray: h.strike,
                        setStrikeArray: Z,
                        strikeList: C.strikes,
                        productList: C.products,
                      }),
                      L &&
                        S.map((e, t) => {
                          let n = m.includes(t);
                          return (0, r.jsxs)(
                            N.Fragment,
                            {
                              children: [
                                (0, r.jsx)(eP.Z, {
                                  handleRowExpand: W,
                                  expandedRow: m,
                                  row: e,
                                  rowIndex: t,
                                  type: ej.vj.HISTORY,
                                }),
                                (0, r.jsx)(ef.Z, {
                                  isRowExpanded: n,
                                  type: ej.vj.HISTORY,
                                  children: (0, r.jsx)(eF.Z, {
                                    data: e.expandedInfo || [],
                                    type: ej.vj.HISTORY,
                                  }),
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      (0, r.jsx)("div", {
                        style: { minHeight: (0, ey.OS)(S.length) },
                        className: "tw-col-span-full",
                        children: (0, r.jsx)(ep.y, {
                          description: !0,
                          displayIsLoading: D,
                          displayNoResults: O,
                          isAuthenticated: b,
                          totalItems: E,
                          currentPage: a,
                          handlePageChange: s,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          eM = n(62111);
        let eZ = (e) => {
          let { agent: t } = e,
            n = (0, N.useMemo)(
              () => [
                {
                  id: "positions",
                  label: "Positions",
                  content: (0, r.jsx)(e_, {
                    agentId: null == t ? void 0 : t._id,
                  }),
                },
                {
                  id: "trade_history",
                  label: "Trade History",
                  content: (0, r.jsx)(eH, {
                    agentId: null == t ? void 0 : t._id,
                  }),
                },
                {
                  id: "lending",
                  label: "Lending History",
                  content: (0, r.jsx)(eM.default, {
                    agentId: null == t ? void 0 : t._id,
                  }),
                },
              ],
              [t]
            );
          return (0, r.jsx)(f.Y, {
            className: "tw-relative tw-pt-4",
            children: (0, r.jsx)(x.Z, { tabs: n }),
          });
        };
        var eU = !0,
          eY = (e) => {
            let { agent: t, tweets: n, prices: d } = e,
              u = (0, a.useRouter)(),
              { referral: h } = u.query,
              [w, m] = (0, N.useState)(void 0),
              {
                usdcBalance: p,
                userBalance: x,
                agentTokenBalance: f,
                tokenSymbol: g,
                usdcAllowance: v,
                totalAssets: y,
                rate: j,
                refresh: b,
                ..._
              } = (0, s.h)(t);
            return ((0, N.useEffect)(() => {
              if ("string" == typeof h && h)
                m(h), localStorage.setItem("referral", h);
              else {
                let e = localStorage.getItem("referral");
                e && m(e);
              }
            }, [h]),
            u.isFallback)
              ? (0, r.jsx)(i.Z, {
                  children: (0, r.jsx)(o.Z, {
                    className:
                      "tw-flex tw-min-h-[60vh] tw-items-center tw-justify-center",
                    children: (0, r.jsx)(c.Z, { type: "lg" }),
                  }),
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(l.Z, {
                      agentName: t.name,
                      imageUrl: t.image,
                      agentId: t._id,
                      description: t.description,
                    }),
                    (0, r.jsx)(i.Z, {
                      children: (0, r.jsx)(o.Z, {
                        className: "tw-max-w-6xl tw-font-aeonik",
                        children: (0, r.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-gap-6 tw-pb-10 lg:tw-flex-row",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "tw-space-y-4 lg:tw-mx-auto  lg:tw-w-[70%]",
                              children: [
                                (0, r.jsx)(P, {
                                  agent: t,
                                  userBalance: x,
                                  totalAssets: y,
                                  fees: _,
                                  prices: d,
                                  rate: j,
                                }),
                                (0, r.jsx)(eZ, { agent: t }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "tw-shrink-0 tw-space-y-4 lg:tw-w-[30%]",
                              children: [
                                (0, r.jsx)(Q, {
                                  agent: t,
                                  usdcBalance: p,
                                  agentTokenBalance: f,
                                  tokenSymbol: g,
                                  usdcAllowance: v,
                                  refresh: b,
                                  referralCode: w,
                                  totalAssets: y,
                                }),
                                (0, r.jsx)(en, { agent: t, tweets: n }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                });
          };
      },
      59324: function (e) {
        e.exports = {
          asset: "Asset_asset__ysARy",
          label: "Asset_label__1JzpL",
          sm: "Asset_sm__72NCs",
          xs: "Asset_xs__nHR73",
        };
      },
      89564: function (e) {
        e.exports = { container: "CheckBox_container__QFNwK" };
      },
      74398: function (e) {
        e.exports = {
          dateRangePickerContainer:
            "DatePicker_dateRangePickerContainer__stI1A",
          dateSinglePickerContainer:
            "DatePicker_dateSinglePickerContainer__VN_ZF",
          dateInput: "DatePicker_dateInput__FwZu0",
          dateBlock: "DatePicker_dateBlock__l1zNo",
          dateRangeContainer: "DatePicker_dateRangeContainer__N4Lbz",
          subContainer: "DatePicker_subContainer__98gmv",
          datePicker: "DatePicker_datePicker__B5xYT",
          buttonContainer: "DatePicker_buttonContainer__kCB9p",
          cancelButton: "DatePicker_cancelButton__sly0A",
          applyButton: "DatePicker_applyButton__UR6yS",
          isHidden: "DatePicker_isHidden__q79mx",
        };
      },
      50103: function (e) {
        e.exports = { container: "DisconnectedWallet_container__6oWtX" };
      },
      88601: function (e) {
        e.exports = {
          tncModal: "ModalAcknowledgeTerms_tncModal__J3WR9",
          acknowledgeTerms: "ModalAcknowledgeTerms_acknowledgeTerms__LlIvS",
          title: "ModalAcknowledgeTerms_title__hLKaQ",
          checkBox: "ModalAcknowledgeTerms_checkBox__JnYEN",
          labelCheckBox: "ModalAcknowledgeTerms_labelCheckBox__w97qi",
          buttonContainer: "ModalAcknowledgeTerms_buttonContainer__gPUJP",
          button: "ModalAcknowledgeTerms_button__TqfE4",
          primaryButton: "ModalAcknowledgeTerms_primaryButton__6B9QW",
        };
      },
      14005: function (e) {
        e.exports = {
          table: "TableMarginLoan_table__u1pT9",
          cell: "TableMarginLoan_cell__Hnprh",
          releaseButtonCell: "TableMarginLoan_releaseButtonCell__29EdB",
          filter: "TableMarginLoan_filter__6Arol",
          sort: "TableMarginLoan_sort__nLu3d",
          filterDropdown: "TableMarginLoan_filterDropdown__ufwL9",
          hide: "TableMarginLoan_hide__bI7DJ",
          clearAll: "TableMarginLoan_clearAll__S0Blm",
          selected: "TableMarginLoan_selected__3QFXR",
          emptyTable: "TableMarginLoan_emptyTable__wcxWd",
          isOpacity: "TableMarginLoan_isOpacity__FS2TX",
          releaseButton: "TableMarginLoan_releaseButton__imyYU",
          readyReleased: "TableMarginLoan_readyReleased__JrPWj",
          releaseInfo: "TableMarginLoan_releaseInfo__IKADF",
        };
      },
      45303: function (e) {
        e.exports = {
          PopoverContent: "TutorialPopover_PopoverContent__cQHL1",
          large: "TutorialPopover_large__OOfi4",
          slideDownAndFade: "TutorialPopover_slideDownAndFade__7HZjG",
          slideLeftAndFade: "TutorialPopover_slideLeftAndFade__oQPHB",
          slideUpAndFade: "TutorialPopover_slideUpAndFade__0kAaz",
          slideRightAndFade: "TutorialPopover_slideRightAndFade__U4YHn",
          PopoverArrow: "TutorialPopover_PopoverArrow__ZHtnZ",
          Fieldset: "TutorialPopover_Fieldset__vxgb_",
          message: "TutorialPopover_message__pokMA",
          title: "TutorialPopover_title__UxmRk",
          skipButton: "TutorialPopover_skipButton__3ytdX",
        };
      },
      98971: function (e) {
        e.exports = {
          connectedWallet: "Wallet_connectedWallet__AfL_g",
          displayName: "Wallet_displayName__8x1Uv",
          chevron: "Wallet_chevron__3LmH4",
          connectWallet: "Wallet_connectWallet___ZxE_",
          container: "Wallet_container__kD6Y7",
          termsContainer: "Wallet_termsContainer__IVZGR",
          wrongNetwork: "Wallet_wrongNetwork__VtEHv",
        };
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
      82861: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let a = r.forwardRef(function (e, t) {
          let { title: n, titleId: a, ...s } = e;
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": a,
              },
              s
            ),
            n ? r.createElement("title", { id: a }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
            })
          );
        });
        t.Z = a;
      },
      49632: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let a = r.forwardRef(function (e, t) {
          let { title: n, titleId: a, ...s } = e;
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": a,
              },
              s
            ),
            n ? r.createElement("title", { id: a }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            })
          );
        });
        t.Z = a;
      },
      84573: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let a = r.forwardRef(function (e, t) {
          let { title: n, titleId: a, ...s } = e;
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": a,
              },
              s
            ),
            n ? r.createElement("title", { id: a }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
            })
          );
        });
        t.Z = a;
      },
      89810: function (e, t, n) {
        "use strict";
        n.d(t, {
          u: function () {
            return o;
          },
        });
        var r = n(37003),
          a = n(36100),
          s = n(82451),
          i = n(82002),
          l = n(37122);
        function o(e = {}) {
          let { abi: t, address: n, functionName: o, query: c = {} } = e,
            d = e.code,
            u = (0, l.Z)(e),
            h = (0, i.x)({ config: u }),
            w = (function (e, t = {}) {
              return {
                async queryFn({ queryKey: n }) {
                  let a = t.abi;
                  if (!a) throw Error("abi is required");
                  let { functionName: s, scopeKey: i, ...l } = n[1],
                    o = (() => {
                      let e = n[1];
                      if (e.address) return { address: e.address };
                      if (e.code) return { code: e.code };
                      throw Error("address or code is required");
                    })();
                  if (!s) throw Error("functionName is required");
                  return (0, r.L)(e, {
                    abi: a,
                    functionName: s,
                    args: l.args,
                    ...o,
                    ...l,
                  });
                },
                queryKey: (function (e = {}) {
                  let { abi: t, ...n } = e;
                  return ["readContract", (0, a.OP)(n)];
                })(t),
              };
            })(u, { ...e, chainId: e.chainId ?? h }),
            m = !!((n || d) && t && o && (c.enabled ?? !0));
          return (0, s.aM)({
            ...c,
            ...w,
            enabled: m,
            structuralSharing: c.structuralSharing ?? a.if,
          });
        }
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 6342, 9261, 4442, 5675, 7410, 1371, 9342, 2592, 4782, 6322,
          9773, 1664, 9849, 8026, 7461, 52, 7972, 497, 8776, 8238, 7702, 41,
          5656, 8755, 1201, 3853, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 51910));
        }
      ),
        (_N_E = e.O());
    },
  ]);
