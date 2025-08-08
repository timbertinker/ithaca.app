!(function () {
  try {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "a3d9d75b-853d-468f-9447-87ad4eaeb3a8"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-a3d9d75b-853d-468f-9447-87ad4eaeb3a8"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8133],
  {
    67017: function (t, e, r) {
      r.d(e, {
        q: function () {
          return v;
        },
      });
      var n = r(23560),
        i = r.n(n),
        o = r(67294),
        a = r(83038),
        c = r(48894),
        l = ["x1", "y1", "x2", "y2", "key"];
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                m(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, b(n.key), n);
        }
      }
      function y(t, e) {
        return (y = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function m(t, e, r) {
        return (
          (e = b(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function b(t) {
        var e = (function (t, e) {
          if ("object" !== s(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== s(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === s(e) ? e : String(e);
      }
      var v = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && y(t, e);
        })(m, t);
        var e,
          r,
          n,
          f =
            ((e = (function () {
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
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = h(m);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, h(this).constructor)
                  : r.apply(this, arguments)),
                (function (t, e) {
                  if (e && ("object" === s(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(this, t)
              );
            });
        function m() {
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, m),
            f.apply(this, arguments)
          );
        }
        return (
          (r = [
            {
              key: "renderHorizontal",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.x,
                  i = r.width,
                  a = r.horizontal;
                if (!t || !t.length) return null;
                var c = t.map(function (t, r) {
                  var o = p(
                    p({}, e.props),
                    {},
                    {
                      x1: n,
                      y1: t,
                      x2: n + i,
                      y2: t,
                      key: "line-".concat(r),
                      index: r,
                    }
                  );
                  return m.renderLineItem(a, o);
                });
                return o.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-horizontal" },
                  c
                );
              },
            },
            {
              key: "renderVertical",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.y,
                  i = r.height,
                  a = r.vertical;
                if (!t || !t.length) return null;
                var c = t.map(function (t, r) {
                  var o = p(
                    p({}, e.props),
                    {},
                    {
                      x1: t,
                      y1: n,
                      x2: t,
                      y2: n + i,
                      key: "line-".concat(r),
                      index: r,
                    }
                  );
                  return m.renderLineItem(a, o);
                });
                return o.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-vertical" },
                  c
                );
              },
            },
            {
              key: "renderVerticalStripes",
              value: function (t) {
                var e = this.props.verticalFill;
                if (!e || !e.length) return null;
                var r = this.props,
                  n = r.fillOpacity,
                  i = r.x,
                  a = r.y,
                  c = r.width,
                  l = r.height,
                  s = t
                    .map(function (t) {
                      return Math.round(t + i - i);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                i !== s[0] && s.unshift(0);
                var u = s.map(function (t, r) {
                  var u = s[r + 1] ? s[r + 1] - t : i + c - t;
                  if (u <= 0) return null;
                  var f = r % e.length;
                  return o.createElement("rect", {
                    key: "react-".concat(r),
                    x: t,
                    y: a,
                    width: u,
                    height: l,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return o.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-vertical" },
                  u
                );
              },
            },
            {
              key: "renderHorizontalStripes",
              value: function (t) {
                var e = this.props.horizontalFill;
                if (!e || !e.length) return null;
                var r = this.props,
                  n = r.fillOpacity,
                  i = r.x,
                  a = r.y,
                  c = r.width,
                  l = r.height,
                  s = t
                    .map(function (t) {
                      return Math.round(t + a - a);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                a !== s[0] && s.unshift(0);
                var u = s.map(function (t, r) {
                  var u = s[r + 1] ? s[r + 1] - t : a + l - t;
                  if (u <= 0) return null;
                  var f = r % e.length;
                  return o.createElement("rect", {
                    key: "react-".concat(r),
                    y: t,
                    x: i,
                    height: u,
                    width: c,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: n,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return o.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-horizontal" },
                  u
                );
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this.props.fill;
                if (!t || "none" === t) return null;
                var e = this.props,
                  r = e.fillOpacity,
                  n = e.x,
                  i = e.y,
                  a = e.width,
                  c = e.height;
                return o.createElement("rect", {
                  x: n,
                  y: i,
                  width: a,
                  height: c,
                  stroke: "none",
                  fill: t,
                  fillOpacity: r,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  c = t.height,
                  l = t.horizontal,
                  s = t.vertical,
                  u = t.horizontalCoordinatesGenerator,
                  f = t.verticalCoordinatesGenerator,
                  p = t.xAxis,
                  d = t.yAxis,
                  y = t.offset,
                  h = t.chartWidth,
                  m = t.chartHeight;
                if (
                  !(0, a.hj)(n) ||
                  n <= 0 ||
                  !(0, a.hj)(c) ||
                  c <= 0 ||
                  !(0, a.hj)(e) ||
                  e !== +e ||
                  !(0, a.hj)(r) ||
                  r !== +r
                )
                  return null;
                var b = this.props,
                  v = b.horizontalPoints,
                  g = b.verticalPoints;
                return (
                  (!v || !v.length) &&
                    i()(u) &&
                    (v = u({ yAxis: d, width: h, height: m, offset: y })),
                  (!g || !g.length) &&
                    i()(f) &&
                    (g = f({ xAxis: p, width: h, height: m, offset: y })),
                  o.createElement(
                    "g",
                    { className: "recharts-cartesian-grid" },
                    this.renderBackground(),
                    l && this.renderHorizontal(v),
                    s && this.renderVertical(g),
                    l && this.renderHorizontalStripes(v),
                    s && this.renderVerticalStripes(g)
                  )
                );
              },
            },
          ]),
          (n = [
            {
              key: "renderLineItem",
              value: function (t, e) {
                var r;
                if (o.isValidElement(t)) r = o.cloneElement(t, e);
                else if (i()(t)) r = t(e);
                else {
                  var n = e.x1,
                    a = e.y1,
                    s = e.x2,
                    f = e.y2,
                    p = e.key,
                    d = (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            i = {},
                            o = Object.keys(t);
                          for (n = 0; n < o.length; n++)
                            (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < o.length; n++)
                          (r = o[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (i[r] = t[r]);
                      }
                      return i;
                    })(e, l);
                  r = o.createElement(
                    "line",
                    u({}, (0, c.L6)(d), {
                      x1: n,
                      y1: a,
                      x2: s,
                      y2: f,
                      fill: "none",
                      key: p,
                    })
                  );
                }
                return r;
              },
            },
          ]),
          r && d(m.prototype, r),
          n && d(m, n),
          Object.defineProperty(m, "prototype", { writable: !1 }),
          m
        );
      })(o.PureComponent);
      m(v, "displayName", "CartesianGrid"),
        m(v, "defaultProps", {
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
    31712: function (t, e, r) {
      r.d(e, {
        x: function () {
          return L;
        },
      });
      var n = r(18446),
        i = r.n(n),
        o = r(23560),
        a = r.n(o),
        c = r(14293),
        l = r.n(c),
        s = r(67294),
        u = r(93801),
        f = r(93967),
        p = r.n(f),
        d = r(87362),
        y = r(58343),
        h = r(61379),
        m = r(98666),
        b = r(88785),
        v = r(83038),
        g = r(48894),
        O = r(59912),
        x = r(55467),
        P = ["type", "layout", "connectNulls", "ref"];
      function j(t) {
        return (j =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function w(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                I(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function E(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return S(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return S(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return S(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function S(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function C(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, _(n.key), n);
        }
      }
      function D(t, e) {
        return (D = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function N(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function T(t) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function I(t, e, r) {
        return (
          (e = _(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function _(t) {
        var e = (function (t, e) {
          if ("object" !== j(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== j(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === j(e) ? e : String(e);
      }
      var L = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && D(t, e);
        })(c, t);
        var e,
          r,
          n,
          o =
            ((e = (function () {
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
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = T(c);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, T(this).constructor)
                  : r.apply(this, arguments)),
                (function (t, e) {
                  if (e && ("object" === j(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return N(t);
                })(this, t)
              );
            });
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            I(N((t = o.call.apply(o, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            I(N(t), "getStrokeDasharray", function (t, e, r) {
              for (
                var n = r.reduce(function (t, e) {
                    return t + e;
                  }),
                  i = t % n,
                  o = e - t,
                  a = [],
                  l = 0,
                  s = 0;
                ;
                s += r[l], ++l
              )
                if (s + r[l] > i) {
                  a = [].concat(E(r.slice(0, l)), [i - s]);
                  break;
                }
              var u = a.length % 2 == 0 ? [0, o] : [o];
              return []
                .concat(E(c.repeat(r, Math.floor(t / n))), E(a), u)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            I(N(t), "id", (0, v.EL)("recharts-line-")),
            I(N(t), "pathRef", function (e) {
              t.mainCurve = e;
            }),
            I(N(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            I(N(t), "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 }),
                t.props.onAnimationStart && t.props.onAnimationStart();
            }),
            t
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                if (this.props.isAnimationActive) {
                  var t = this.getTotalLength();
                  this.setState({ totalLength: t });
                }
              },
            },
            {
              key: "getTotalLength",
              value: function () {
                var t = this.mainCurve;
                try {
                  return (t && t.getTotalLength && t.getTotalLength()) || 0;
                } catch (t) {
                  return 0;
                }
              },
            },
            {
              key: "renderErrorBar",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.points,
                  i = r.xAxis,
                  o = r.yAxis,
                  a = r.layout,
                  c = r.children,
                  l = (0, g.NN)(c, b.W);
                if (!l) return null;
                var u = function (t, e) {
                  return {
                    x: t.x,
                    y: t.y,
                    value: t.value,
                    errorVal: (0, x.F$)(t.payload, e),
                  };
                };
                return s.createElement(
                  h.m,
                  { clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
                  l.map(function (t, e) {
                    return s.cloneElement(t, {
                      key: "bar-".concat(e),
                      data: n,
                      xAxis: i,
                      yAxis: o,
                      layout: a,
                      dataPointFormatter: u,
                    });
                  })
                );
              },
            },
            {
              key: "renderDots",
              value: function (t, e, r) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var n = this.props,
                  i = n.dot,
                  o = n.points,
                  a = n.dataKey,
                  l = (0, g.L6)(this.props),
                  u = (0, g.L6)(i, !0),
                  f = o.map(function (t, e) {
                    var r = A(
                      A(A({ key: "dot-".concat(e), r: 3 }, l), u),
                      {},
                      {
                        value: t.value,
                        dataKey: a,
                        cx: t.x,
                        cy: t.y,
                        index: e,
                        payload: t.payload,
                      }
                    );
                    return c.renderDotItem(i, r);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return s.createElement(
                  h.m,
                  k({ className: "recharts-line-dots", key: "dots" }, p),
                  f
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, r, n) {
                var i = this.props,
                  o = i.type,
                  a = i.layout,
                  c = i.connectNulls,
                  l =
                    (i.ref,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            i = {},
                            o = Object.keys(t);
                          for (n = 0; n < o.length; n++)
                            (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < o.length; n++)
                          (r = o[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (i[r] = t[r]);
                      }
                      return i;
                    })(i, P)),
                  u = A(
                    A(
                      A({}, (0, g.L6)(l, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                        points: t,
                      },
                      n
                    ),
                    {},
                    { type: o, layout: a, connectNulls: c }
                  );
                return s.createElement(
                  d.H,
                  k({}, u, { pathRef: this.pathRef })
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var r = this,
                  n = this.props,
                  i = n.points,
                  o = n.strokeDasharray,
                  a = n.isAnimationActive,
                  c = n.animationBegin,
                  l = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
                  d = n.animateNewValues,
                  y = n.width,
                  h = n.height,
                  m = this.state,
                  b = m.prevPoints,
                  g = m.totalLength;
                return s.createElement(
                  u.ZP,
                  {
                    begin: c,
                    duration: l,
                    isActive: a,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "line-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var a,
                      c = n.t;
                    if (b) {
                      var l = b.length / i.length,
                        s = i.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (b[r]) {
                            var n = b[r],
                              i = (0, v.k4)(n.x, t.x),
                              o = (0, v.k4)(n.y, t.y);
                            return A(A({}, t), {}, { x: i(c), y: o(c) });
                          }
                          if (d) {
                            var a = (0, v.k4)(2 * y, t.x),
                              s = (0, v.k4)(h / 2, t.y);
                            return A(A({}, t), {}, { x: a(c), y: s(c) });
                          }
                          return A(A({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(s, t, e);
                    }
                    var u = (0, v.k4)(0, g)(c);
                    if (o) {
                      var f = ""
                        .concat(o)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      a = r.getStrokeDasharray(u, g, f);
                    } else a = "".concat(u, "px ").concat(g - u, "px");
                    return r.renderCurveStatically(i, t, e, {
                      strokeDasharray: a,
                    });
                  }
                );
              },
            },
            {
              key: "renderCurve",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  o = r.isAnimationActive,
                  a = this.state,
                  c = a.prevPoints,
                  l = a.totalLength;
                return o && n && n.length && ((!c && l > 0) || !i()(c, n))
                  ? this.renderCurveWithAnimation(t, e)
                  : this.renderCurveStatically(n, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  n = e.dot,
                  i = e.points,
                  o = e.className,
                  a = e.xAxis,
                  c = e.yAxis,
                  u = e.top,
                  f = e.left,
                  d = e.width,
                  y = e.height,
                  b = e.isAnimationActive,
                  v = e.id;
                if (r || !i || !i.length) return null;
                var O = this.state.isAnimationFinished,
                  x = 1 === i.length,
                  P = p()("recharts-line", o),
                  j = a && a.allowDataOverflow,
                  k = c && c.allowDataOverflow,
                  w = j || k,
                  A = l()(v) ? this.id : v,
                  E =
                    null !== (t = (0, g.L6)(n)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  S = E.r,
                  C = E.strokeWidth,
                  D = ((0, g.$k)(n) ? n : {}).clipDot,
                  N = void 0 === D || D,
                  T = 2 * (void 0 === S ? 3 : S) + (void 0 === C ? 2 : C);
                return s.createElement(
                  h.m,
                  { className: P },
                  j || k
                    ? s.createElement(
                        "defs",
                        null,
                        s.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(A) },
                          s.createElement("rect", {
                            x: j ? f : f - d / 2,
                            y: k ? u : u - y / 2,
                            width: j ? d : 2 * d,
                            height: k ? y : 2 * y,
                          })
                        ),
                        !N &&
                          s.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(A) },
                            s.createElement("rect", {
                              x: f - T / 2,
                              y: u - T / 2,
                              width: d + T,
                              height: y + T,
                            })
                          )
                      )
                    : null,
                  !x && this.renderCurve(w, A),
                  this.renderErrorBar(w, A),
                  (x || n) && this.renderDots(w, N, A),
                  (!b || O) && m.e.renderCallByParent(this.props, i)
                );
              },
            },
          ]),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      prevPoints: e.curPoints,
                    }
                  : t.points !== e.curPoints
                  ? { curPoints: t.points }
                  : null;
              },
            },
            {
              key: "repeat",
              value: function (t, e) {
                for (
                  var r = t.length % 2 != 0 ? [].concat(E(t), [0]) : t,
                    n = [],
                    i = 0;
                  i < e;
                  ++i
                )
                  n = [].concat(E(n), E(r));
                return n;
              },
            },
            {
              key: "renderDotItem",
              value: function (t, e) {
                var r;
                if (s.isValidElement(t)) r = s.cloneElement(t, e);
                else if (a()(t)) r = t(e);
                else {
                  var n = p()("recharts-line-dot", t ? t.className : "");
                  r = s.createElement(y.o, k({}, e, { className: n }));
                }
                return r;
              },
            },
          ]),
          r && C(c.prototype, r),
          n && C(c, n),
          Object.defineProperty(c, "prototype", { writable: !1 }),
          c
        );
      })(s.PureComponent);
      I(L, "displayName", "Line"),
        I(L, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          connectNulls: !1,
          activeDot: !0,
          dot: !0,
          legendType: "line",
          stroke: "#3182bd",
          strokeWidth: 1,
          fill: "#fff",
          points: [],
          isAnimationActive: !O.x.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        I(L, "getComposedData", function (t) {
          var e = t.props,
            r = t.xAxis,
            n = t.yAxis,
            i = t.xAxisTicks,
            o = t.yAxisTicks,
            a = t.dataKey,
            c = t.bandSize,
            s = t.displayedData,
            u = t.offset,
            f = e.layout;
          return A(
            {
              points: s.map(function (t, e) {
                var s = (0, x.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.Hv)({
                        axis: r,
                        ticks: i,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      y: l()(s) ? null : n.scale(s),
                      value: s,
                      payload: t,
                    }
                  : {
                      x: l()(s) ? null : r.scale(s),
                      y: (0, x.Hv)({
                        axis: n,
                        ticks: o,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      value: s,
                      payload: t,
                    };
              }),
              layout: f,
            },
            u
          );
        });
    },
    10723: function (t, e, r) {
      r.d(e, {
        w: function () {
          return l;
        },
      });
      var n = r(37889),
        i = r(31712),
        o = r(25615),
        a = r(88793),
        c = r(8451),
        l = (0, n.z)({
          chartName: "LineChart",
          GraphicalChild: i.x,
          axisComponents: [
            { axisType: "xAxis", AxisComp: o.K },
            { axisType: "yAxis", AxisComp: a.B },
          ],
          formatAxisMap: c.t9,
        });
    },
    44718: function (t, e, r) {
      r.d(e, {
        R: function () {
          return o;
        },
        h: function () {
          return i;
        },
      });
      var n = r(67294);
      let i = (0, n.createContext)({});
      function o() {
        return (0, n.useContext)(i);
      }
    },
    54306: function (t, e, r) {
      r.d(e, {
        O: function () {
          return l;
        },
        z: function () {
          return c;
        },
      });
      var n = r(67294);
      let i = [],
        o = {
          autoConnect: !1,
          connecting: !1,
          connected: !1,
          disconnecting: !1,
          select() {
            a("call", "select");
          },
          connect: () => Promise.reject(a("call", "connect")),
          disconnect: () => Promise.reject(a("call", "disconnect")),
          sendTransaction: () => Promise.reject(a("call", "sendTransaction")),
          signTransaction: () => Promise.reject(a("call", "signTransaction")),
          signAllTransactions: () =>
            Promise.reject(a("call", "signAllTransactions")),
          signMessage: () => Promise.reject(a("call", "signMessage")),
          signIn: () => Promise.reject(a("call", "signIn")),
        };
      function a(t, e) {
        let r = Error(
          `You have tried to ${t} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
        );
        return console.error(r), r;
      }
      Object.defineProperty(o, "wallets", {
        get: () => (a("read", "wallets"), i),
      }),
        Object.defineProperty(o, "wallet", {
          get: () => (a("read", "wallet"), null),
        }),
        Object.defineProperty(o, "publicKey", {
          get: () => (a("read", "publicKey"), null),
        });
      let c = (0, n.createContext)(o);
      function l() {
        return (0, n.useContext)(c);
      }
    },
    96752: function (t, e, r) {
      r.d(e, {
        P: function () {
          return f;
        },
      });
      var n = r(67294),
        i = r(38213),
        o = r(83619),
        a = r(22944),
        c = r(18419),
        l = r(65448),
        s = r(14872);
      let u = (0, o.yV)(function (t, e) {
          var r;
          let i = (0, s.B)(),
            { disabled: u = i || !1, autoFocus: f = !1, ...p } = t,
            { isFocusVisible: d, focusProps: y } = (0, a.F)({ autoFocus: f }),
            { isHovered: h, hoverProps: m } = (0, c.X)({ isDisabled: u }),
            { pressed: b, pressProps: v } = (0, l.x)({ disabled: u }),
            g = (0, o.dG)(
              {
                ref: e,
                type: null != (r = p.type) ? r : "button",
                disabled: u || void 0,
                autoFocus: f,
              },
              y,
              m,
              v
            ),
            O = (0, n.useMemo)(
              () => ({
                disabled: u,
                hover: h,
                focus: d,
                active: b,
                autofocus: f,
              }),
              [u, h, d, b, f]
            );
          return (0, o.L6)()({
            ourProps: g,
            theirProps: p,
            slot: O,
            defaultTag: "button",
            name: "Button",
          });
        }),
        f = (0, o.yV)(function (t, e) {
          let r = (0, i.$)();
          return n.createElement(u, {
            ref: e,
            ...(0, o.dG)({ onClick: r }, t),
          });
        });
    },
    14872: function (t, e, r) {
      r.d(e, {
        B: function () {
          return o;
        },
      });
      var n = r(67294);
      let i = (0, n.createContext)(void 0);
      function o() {
        return (0, n.useContext)(i);
      }
    },
    49632: function (t, e, r) {
      var n = r(67294);
      let i = n.forwardRef(function (t, e) {
        let { title: r, titleId: i, ...o } = t;
        return n.createElement(
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
              ref: e,
              "aria-labelledby": i,
            },
            o
          ),
          r ? n.createElement("title", { id: i }, r) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          })
        );
      });
      e.Z = i;
    },
    43210: function (t, e, r) {
      r.d(e, {
        y: function () {
          return n;
        },
      });
      let n = (0, r(86164).a)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    86900: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(86164).a)({
        id: 421614,
        name: "Arbitrum Sepolia",
        nativeCurrency: {
          name: "Arbitrum Sepolia Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
        },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://sepolia.arbiscan.io",
            apiUrl: "https://api-sepolia.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 81930,
          },
        },
        testnet: !0,
      });
    },
    57393: function (t, e, r) {
      r.d(e, {
        v: function () {
          return n;
        },
      });
      let n = (0, r(86164).a)({
        id: 80001,
        name: "Polygon Mumbai",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc.ankr.com/polygon_mumbai"] } },
        blockExplorers: {
          default: {
            name: "PolygonScan",
            url: "https://mumbai.polygonscan.com",
            apiUrl: "https://api-testnet.polygonscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 25770160,
          },
        },
        testnet: !0,
      });
    },
  },
]);
