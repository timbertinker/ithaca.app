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
      (e._sentryDebugIds[t] = "c0652183-7acf-4c81-a90f-4059dd5ac19d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c0652183-7acf-4c81-a90f-4059dd5ac19d"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7204],
    {
      67017: function (e, t, r) {
        "use strict";
        r.d(t, {
          q: function () {
            return g;
          },
        });
        var n = r(23560),
          i = r.n(n),
          o = r(67294),
          s = r(83038),
          a = r(48894),
          c = ["x1", "y1", "x2", "y2", "key"];
        function u(e) {
          return (u =
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
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        function f(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(r), !0).forEach(function (t) {
                  m(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function d(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, v(n.key), n);
          }
        }
        function p(e, t) {
          return (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
        }
        function y(e) {
          return (y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function m(e, t, r) {
          return (
            (t = v(t)) in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function v(e) {
          var t = (function (e, t) {
            if ("object" !== u(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" !== u(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === u(t) ? t : String(t);
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
              t && p(e, t);
          })(m, e);
          var t,
            r,
            n,
            f =
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
                  r = y(m);
                return (
                  (e = t
                    ? Reflect.construct(r, arguments, y(this).constructor)
                    : r.apply(this, arguments)),
                  (function (e, t) {
                    if (t && ("object" === u(t) || "function" == typeof t))
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
          function m() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, m),
              f.apply(this, arguments)
            );
          }
          return (
            (r = [
              {
                key: "renderHorizontal",
                value: function (e) {
                  var t = this,
                    r = this.props,
                    n = r.x,
                    i = r.width,
                    s = r.horizontal;
                  if (!e || !e.length) return null;
                  var a = e.map(function (e, r) {
                    var o = h(
                      h({}, t.props),
                      {},
                      {
                        x1: n,
                        y1: e,
                        x2: n + i,
                        y2: e,
                        key: "line-".concat(r),
                        index: r,
                      }
                    );
                    return m.renderLineItem(s, o);
                  });
                  return o.createElement(
                    "g",
                    { className: "recharts-cartesian-grid-horizontal" },
                    a
                  );
                },
              },
              {
                key: "renderVertical",
                value: function (e) {
                  var t = this,
                    r = this.props,
                    n = r.y,
                    i = r.height,
                    s = r.vertical;
                  if (!e || !e.length) return null;
                  var a = e.map(function (e, r) {
                    var o = h(
                      h({}, t.props),
                      {},
                      {
                        x1: e,
                        y1: n,
                        x2: e,
                        y2: n + i,
                        key: "line-".concat(r),
                        index: r,
                      }
                    );
                    return m.renderLineItem(s, o);
                  });
                  return o.createElement(
                    "g",
                    { className: "recharts-cartesian-grid-vertical" },
                    a
                  );
                },
              },
              {
                key: "renderVerticalStripes",
                value: function (e) {
                  var t = this.props.verticalFill;
                  if (!t || !t.length) return null;
                  var r = this.props,
                    n = r.fillOpacity,
                    i = r.x,
                    s = r.y,
                    a = r.width,
                    c = r.height,
                    u = e
                      .map(function (e) {
                        return Math.round(e + i - i);
                      })
                      .sort(function (e, t) {
                        return e - t;
                      });
                  i !== u[0] && u.unshift(0);
                  var l = u.map(function (e, r) {
                    var l = u[r + 1] ? u[r + 1] - e : i + a - e;
                    if (l <= 0) return null;
                    var f = r % t.length;
                    return o.createElement("rect", {
                      key: "react-".concat(r),
                      x: e,
                      y: s,
                      width: l,
                      height: c,
                      stroke: "none",
                      fill: t[f],
                      fillOpacity: n,
                      className: "recharts-cartesian-grid-bg",
                    });
                  });
                  return o.createElement(
                    "g",
                    { className: "recharts-cartesian-gridstripes-vertical" },
                    l
                  );
                },
              },
              {
                key: "renderHorizontalStripes",
                value: function (e) {
                  var t = this.props.horizontalFill;
                  if (!t || !t.length) return null;
                  var r = this.props,
                    n = r.fillOpacity,
                    i = r.x,
                    s = r.y,
                    a = r.width,
                    c = r.height,
                    u = e
                      .map(function (e) {
                        return Math.round(e + s - s);
                      })
                      .sort(function (e, t) {
                        return e - t;
                      });
                  s !== u[0] && u.unshift(0);
                  var l = u.map(function (e, r) {
                    var l = u[r + 1] ? u[r + 1] - e : s + c - e;
                    if (l <= 0) return null;
                    var f = r % t.length;
                    return o.createElement("rect", {
                      key: "react-".concat(r),
                      y: e,
                      x: i,
                      height: l,
                      width: a,
                      stroke: "none",
                      fill: t[f],
                      fillOpacity: n,
                      className: "recharts-cartesian-grid-bg",
                    });
                  });
                  return o.createElement(
                    "g",
                    { className: "recharts-cartesian-gridstripes-horizontal" },
                    l
                  );
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var e = this.props.fill;
                  if (!e || "none" === e) return null;
                  var t = this.props,
                    r = t.fillOpacity,
                    n = t.x,
                    i = t.y,
                    s = t.width,
                    a = t.height;
                  return o.createElement("rect", {
                    x: n,
                    y: i,
                    width: s,
                    height: a,
                    stroke: "none",
                    fill: e,
                    fillOpacity: r,
                    className: "recharts-cartesian-grid-bg",
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.x,
                    r = e.y,
                    n = e.width,
                    a = e.height,
                    c = e.horizontal,
                    u = e.vertical,
                    l = e.horizontalCoordinatesGenerator,
                    f = e.verticalCoordinatesGenerator,
                    h = e.xAxis,
                    d = e.yAxis,
                    p = e.offset,
                    y = e.chartWidth,
                    m = e.chartHeight;
                  if (
                    !(0, s.hj)(n) ||
                    n <= 0 ||
                    !(0, s.hj)(a) ||
                    a <= 0 ||
                    !(0, s.hj)(t) ||
                    t !== +t ||
                    !(0, s.hj)(r) ||
                    r !== +r
                  )
                    return null;
                  var v = this.props,
                    g = v.horizontalPoints,
                    _ = v.verticalPoints;
                  return (
                    (!g || !g.length) &&
                      i()(l) &&
                      (g = l({ yAxis: d, width: y, height: m, offset: p })),
                    (!_ || !_.length) &&
                      i()(f) &&
                      (_ = f({ xAxis: h, width: y, height: m, offset: p })),
                    o.createElement(
                      "g",
                      { className: "recharts-cartesian-grid" },
                      this.renderBackground(),
                      c && this.renderHorizontal(g),
                      u && this.renderVertical(_),
                      c && this.renderHorizontalStripes(g),
                      u && this.renderVerticalStripes(_)
                    )
                  );
                },
              },
            ]),
            (n = [
              {
                key: "renderLineItem",
                value: function (e, t) {
                  var r;
                  if (o.isValidElement(e)) r = o.cloneElement(e, t);
                  else if (i()(e)) r = e(t);
                  else {
                    var n = t.x1,
                      s = t.y1,
                      u = t.x2,
                      f = t.y2,
                      h = t.key,
                      d = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          i = (function (e, t) {
                            if (null == e) return {};
                            var r,
                              n,
                              i = {},
                              o = Object.keys(e);
                            for (n = 0; n < o.length; n++)
                              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < o.length; n++)
                            (r = o[n]),
                              !(t.indexOf(r) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  r
                                ) &&
                                (i[r] = e[r]);
                        }
                        return i;
                      })(t, c);
                    r = o.createElement(
                      "line",
                      l({}, (0, a.L6)(d), {
                        x1: n,
                        y1: s,
                        x2: u,
                        y2: f,
                        fill: "none",
                        key: h,
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
        m(g, "displayName", "CartesianGrid"),
          m(g, "defaultProps", {
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
      7443: function (e, t, r) {
        "use strict";
        var n = r(34155);
        r(91479);
        var i = r(67294),
          o = i && "object" == typeof i && "default" in i ? i : { default: i },
          s = void 0 !== n && n.env && !0,
          a = function (e) {
            return "[object String]" === Object.prototype.toString.call(e);
          },
          c = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                r = t.name,
                n = void 0 === r ? "stylesheet" : r,
                i = t.optimizeForSpeed,
                o = void 0 === i ? s : i;
              u(a(n), "`name` must be a string"),
                (this._name = n),
                (this._deletedRulePlaceholder =
                  "#" + n + "-deleted-rule____{}"),
                u(
                  "boolean" == typeof o,
                  "`optimizeForSpeed` must be a boolean"
                ),
                (this._optimizeForSpeed = o),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var c = document.querySelector('meta[property="csp-nonce"]');
              this._nonce = c ? c.getAttribute("content") : null;
            }
            var t = e.prototype;
            return (
              (t.setOptimizeForSpeed = function (e) {
                u(
                  "boolean" == typeof e,
                  "`setOptimizeForSpeed` accepts a boolean"
                ),
                  u(
                    0 === this._rulesCount,
                    "optimizeForSpeed cannot be when rules have already been inserted"
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject();
              }),
              (t.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed;
              }),
              (t.inject = function () {
                var e = this;
                if (
                  (u(!this._injected, "sheet already injected"),
                  (this._injected = !0),
                  this._optimizeForSpeed)
                ) {
                  (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                    this._optimizeForSpeed ||
                      (s ||
                        console.warn(
                          "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                        ),
                      this.flush(),
                      (this._injected = !0));
                  return;
                }
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, r) {
                    return (
                      "number" == typeof r
                        ? (e._serverSheet.cssRules[r] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      r
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                };
              }),
              (t.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              }),
              (t.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (t.insertRule = function (e, t) {
                if (
                  (u(a(e), "`insertRule` accepts only strings"),
                  this._optimizeForSpeed)
                ) {
                  var r = this.getSheet();
                  "number" != typeof t && (t = r.cssRules.length);
                  try {
                    r.insertRule(e, t);
                  } catch (t) {
                    return (
                      s ||
                        console.warn(
                          "StyleSheet: illegal rule: \n\n" +
                            e +
                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                        ),
                      -1
                    );
                  }
                } else {
                  var n = this._tags[t];
                  this._tags.push(this.makeStyleTag(this._name, e, n));
                }
                return this._rulesCount++;
              }),
              (t.replaceRule = function (e, t) {
                if (this._optimizeForSpeed) {
                  var r = this.getSheet();
                  if (
                    (t.trim() || (t = this._deletedRulePlaceholder),
                    !r.cssRules[e])
                  )
                    return e;
                  r.deleteRule(e);
                  try {
                    r.insertRule(t, e);
                  } catch (n) {
                    s ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                      r.insertRule(this._deletedRulePlaceholder, e);
                  }
                } else {
                  var n = this._tags[e];
                  u(n, "old rule at index `" + e + "` not found"),
                    (n.textContent = t);
                }
                return e;
              }),
              (t.deleteRule = function (e) {
                if (this._optimizeForSpeed) this.replaceRule(e, "");
                else {
                  var t = this._tags[e];
                  u(t, "rule at index `" + e + "` not found"),
                    t.parentNode.removeChild(t),
                    (this._tags[e] = null);
                }
              }),
              (t.flush = function () {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []);
              }),
              (t.cssRules = function () {
                var e = this;
                return this._tags.reduce(function (t, r) {
                  return (
                    r
                      ? (t = t.concat(
                          Array.prototype.map.call(
                            e.getSheetForTag(r).cssRules,
                            function (t) {
                              return t.cssText === e._deletedRulePlaceholder
                                ? null
                                : t;
                            }
                          )
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
              }),
              (t.makeStyleTag = function (e, t, r) {
                t &&
                  u(
                    a(t),
                    "makeStyleTag accepts only strings as second parameter"
                  );
                var n = document.createElement("style");
                this._nonce && n.setAttribute("nonce", this._nonce),
                  (n.type = "text/css"),
                  n.setAttribute("data-" + e, ""),
                  t && n.appendChild(document.createTextNode(t));
                var i =
                  document.head || document.getElementsByTagName("head")[0];
                return r ? i.insertBefore(n, r) : i.appendChild(n), n;
              }),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(e.prototype, [
                {
                  key: "length",
                  get: function () {
                    return this._rulesCount;
                  },
                },
              ]),
              e
            );
          })();
        function u(e, t) {
          if (!e) throw Error("StyleSheet: " + t + ".");
        }
        var l = function (e) {
            for (var t = 5381, r = e.length; r; )
              t = (33 * t) ^ e.charCodeAt(--r);
            return t >>> 0;
          },
          f = {};
        function h(e, t) {
          if (!t) return "jsx-" + e;
          var r = String(t),
            n = e + r;
          return f[n] || (f[n] = "jsx-" + l(e + "-" + r)), f[n];
        }
        function d(e, t) {
          var r = e + t;
          return (
            f[r] || (f[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), f[r]
          );
        }
        var p = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                r = t.styleSheet,
                n = void 0 === r ? null : r,
                i = t.optimizeForSpeed,
                o = void 0 !== i && i;
              (this._sheet =
                n || new c({ name: "styled-jsx", optimizeForSpeed: o })),
                this._sheet.inject(),
                n &&
                  "boolean" == typeof o &&
                  (this._sheet.setOptimizeForSpeed(o),
                  (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }
            var t = e.prototype;
            return (
              (t.add = function (e) {
                var t = this;
                void 0 === this._optimizeForSpeed &&
                  ((this._optimizeForSpeed = Array.isArray(e.children)),
                  this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                  (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                  this._fromServer ||
                    ((this._fromServer = this.selectFromServer()),
                    (this._instancesCounts = Object.keys(
                      this._fromServer
                    ).reduce(function (e, t) {
                      return (e[t] = 0), e;
                    }, {})));
                var r = this.getIdAndRules(e),
                  n = r.styleId,
                  i = r.rules;
                if (n in this._instancesCounts) {
                  this._instancesCounts[n] += 1;
                  return;
                }
                var o = i
                  .map(function (e) {
                    return t._sheet.insertRule(e);
                  })
                  .filter(function (e) {
                    return -1 !== e;
                  });
                (this._indices[n] = o), (this._instancesCounts[n] = 1);
              }),
              (t.remove = function (e) {
                var t = this,
                  r = this.getIdAndRules(e).styleId;
                if (
                  ((function (e, t) {
                    if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                  })(
                    r in this._instancesCounts,
                    "styleId: `" + r + "` not found"
                  ),
                  (this._instancesCounts[r] -= 1),
                  this._instancesCounts[r] < 1)
                ) {
                  var n = this._fromServer && this._fromServer[r];
                  n
                    ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                    : (this._indices[r].forEach(function (e) {
                        return t._sheet.deleteRule(e);
                      }),
                      delete this._indices[r]),
                    delete this._instancesCounts[r];
                }
              }),
              (t.update = function (e, t) {
                this.add(t), this.remove(e);
              }),
              (t.flush = function () {
                this._sheet.flush(),
                  this._sheet.inject(),
                  (this._fromServer = void 0),
                  (this._indices = {}),
                  (this._instancesCounts = {});
              }),
              (t.cssRules = function () {
                var e = this,
                  t = this._fromServer
                    ? Object.keys(this._fromServer).map(function (t) {
                        return [t, e._fromServer[t]];
                      })
                    : [],
                  r = this._sheet.cssRules();
                return t.concat(
                  Object.keys(this._indices)
                    .map(function (t) {
                      return [
                        t,
                        e._indices[t]
                          .map(function (e) {
                            return r[e].cssText;
                          })
                          .join(e._optimizeForSpeed ? "" : "\n"),
                      ];
                    })
                    .filter(function (e) {
                      return !!e[1];
                    })
                );
              }),
              (t.styles = function (e) {
                var t, r;
                return (
                  (t = this.cssRules()),
                  void 0 === (r = e) && (r = {}),
                  t.map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return o.default.createElement("style", {
                      id: "__" + t,
                      key: "__" + t,
                      nonce: r.nonce ? r.nonce : void 0,
                      dangerouslySetInnerHTML: { __html: n },
                    });
                  })
                );
              }),
              (t.getIdAndRules = function (e) {
                var t = e.children,
                  r = e.dynamic,
                  n = e.id;
                if (r) {
                  var i = h(n, r);
                  return {
                    styleId: i,
                    rules: Array.isArray(t)
                      ? t.map(function (e) {
                          return d(i, e);
                        })
                      : [d(i, t)],
                  };
                }
                return { styleId: h(n), rules: Array.isArray(t) ? t : [t] };
              }),
              (t.selectFromServer = function () {
                return Array.prototype.slice
                  .call(document.querySelectorAll('[id^="__jsx-"]'))
                  .reduce(function (e, t) {
                    return (e[t.id.slice(2)] = t), e;
                  }, {});
              }),
              e
            );
          })(),
          y = i.createContext(null);
        y.displayName = "StyleSheetContext";
        var m = o.default.useInsertionEffect || o.default.useLayoutEffect,
          v = new p();
        function g(e) {
          var t = v || i.useContext(y);
          return (
            t &&
              m(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
                [e.id, String(e.dynamic)]
              ),
            null
          );
        }
        (g.dynamic = function (e) {
          return e
            .map(function (e) {
              return h(e[0], e[1]);
            })
            .join(" ");
        }),
          (t.style = g);
      },
      40645: function (e, t, r) {
        "use strict";
        e.exports = r(7443).style;
      },
      91479: function () {},
      25360: function (e, t, r) {
        "use strict";
        r.d(t, {
          b: function () {
            return o;
          },
        });
        var n = r(67294),
          i = r(85893);
        function o(e, t = []) {
          let r = [],
            o = () => {
              let t = r.map((e) => n.createContext(e));
              return function (r) {
                let i = r?.[e] || t;
                return n.useMemo(
                  () => ({ [`__scope${e}`]: { ...r, [e]: i } }),
                  [r, i]
                );
              };
            };
          return (
            (o.scopeName = e),
            [
              function (t, o) {
                let s = n.createContext(o),
                  a = r.length;
                r = [...r, o];
                let c = (t) => {
                  let { scope: r, children: o, ...c } = t,
                    u = r?.[e]?.[a] || s,
                    l = n.useMemo(() => c, Object.values(c));
                  return (0, i.jsx)(u.Provider, { value: l, children: o });
                };
                return (
                  (c.displayName = t + "Provider"),
                  [
                    c,
                    function (r, i) {
                      let c = i?.[e]?.[a] || s,
                        u = n.useContext(c);
                      if (u) return u;
                      if (void 0 !== o) return o;
                      throw Error(`\`${r}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let r = () => {
                  let r = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let i = r.reduce((t, { useScope: r, scopeName: n }) => {
                      let i = r(e)[`__scope${n}`];
                      return { ...t, ...i };
                    }, {});
                    return n.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: i }),
                      [i]
                    );
                  };
                };
                return (r.scopeName = t.scopeName), r;
              })(o, ...t),
            ]
          );
        }
      },
      91276: function (e, t, r) {
        "use strict";
        r.d(t, {
          M: function () {
            return c;
          },
        });
        var n,
          i = r(67294),
          o = r(9981),
          s = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
          a = 0;
        function c(e) {
          let [t, r] = i.useState(s());
          return (
            (0, o.b)(() => {
              e || r((e) => e ?? String(a++));
            }, [e]),
            e || (t ? `radix-${t}` : "")
          );
        }
      },
      79698: function (e, t, r) {
        "use strict";
        r.d(t, {
          W: function () {
            return i;
          },
        });
        var n = r(67294);
        function i(e) {
          let t = n.useRef(e);
          return (
            n.useEffect(() => {
              t.current = e;
            }),
            n.useMemo(
              () =>
                (...e) =>
                  t.current?.(...e),
              []
            )
          );
        }
      },
      77342: function (e, t, r) {
        "use strict";
        r.d(t, {
          T: function () {
            return o;
          },
        });
        var n = r(67294),
          i = r(79698);
        function o({ prop: e, defaultProp: t, onChange: r = () => {} }) {
          let [o, s] = (function ({ defaultProp: e, onChange: t }) {
              let r = n.useState(e),
                [o] = r,
                s = n.useRef(o),
                a = (0, i.W)(t);
              return (
                n.useEffect(() => {
                  s.current !== o && (a(o), (s.current = o));
                }, [o, s, a]),
                r
              );
            })({ defaultProp: t, onChange: r }),
            a = void 0 !== e,
            c = a ? e : o,
            u = (0, i.W)(r);
          return [
            c,
            n.useCallback(
              (t) => {
                if (a) {
                  let r = "function" == typeof t ? t(e) : t;
                  r !== e && u(r);
                } else s(t);
              },
              [a, e, s, u]
            ),
          ];
        }
      },
      9981: function (e, t, r) {
        "use strict";
        r.d(t, {
          b: function () {
            return i;
          },
        });
        var n = r(67294),
          i = globalThis?.document ? n.useLayoutEffect : () => {};
      },
      70202: function (e, t, r) {
        "use strict";
        var n = r(67294);
        let i = n.forwardRef(function (e, t) {
          let { title: r, titleId: i, ...o } = e;
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
                ref: t,
                "aria-labelledby": i,
              },
              o
            ),
            r ? n.createElement("title", { id: i }, r) : null,
            n.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
            })
          );
        });
        t.Z = i;
      },
      96128: function (e, t, r) {
        "use strict";
        r.d(t, {
          T: function () {
            return g;
          },
        });
        var n = r(14503),
          i = r(8998),
          o = r(36117),
          s = r(68064),
          a = r(33840),
          c = r(26445),
          u = r(33639),
          l = r(87469),
          f = r(61163),
          h = r(74688),
          d = r(93714),
          p = r(47531),
          y = r(79524),
          m = r(37397),
          v = r(99238);
        async function g(e, t) {
          let {
            account: r = e.account,
            chain: g = e.chain,
            accessList: _,
            authorizationList: b,
            blobs: S,
            data: w,
            gas: O,
            gasPrice: j,
            maxFeePerBlobGas: x,
            maxFeePerGas: k,
            maxPriorityFeePerGas: z,
            nonce: C,
            value: R,
            ...E
          } = t;
          if (!r)
            throw new i.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
          let P = (0, n.T)(r);
          try {
            (0, p.F)(t);
            let r = await (async () =>
              t.to
                ? t.to
                : b && b.length > 0
                ? await (0, s.z)({ authorization: b[0] }).catch(() => {
                    throw new o.G(
                      "`to` is required. Could not infer from `authorizationList`."
                    );
                  })
                : void 0)();
            if ("json-rpc" === P.type) {
              let t;
              null !== g &&
                ((t = await (0, d.s)(e, y.L, "getChainId")({})),
                (0, a.q)({ currentChainId: t, chain: g }));
              let n = e.chain?.formatters?.transactionRequest?.format,
                i = (n || h.tG)({
                  ...(0, f.K)(E, { format: n }),
                  accessList: _,
                  authorizationList: b,
                  blobs: S,
                  chainId: t,
                  data: w,
                  from: P.address,
                  gas: O,
                  gasPrice: j,
                  maxFeePerBlobGas: x,
                  maxFeePerGas: k,
                  maxPriorityFeePerGas: z,
                  nonce: C,
                  to: r,
                  value: R,
                });
              return await e.request(
                { method: "eth_sendTransaction", params: [i] },
                { retryCount: 0 }
              );
            }
            if ("local" === P.type) {
              let t = await (0, d.s)(
                  e,
                  m.Z,
                  "prepareTransactionRequest"
                )({
                  account: P,
                  accessList: _,
                  authorizationList: b,
                  blobs: S,
                  chain: g,
                  data: w,
                  gas: O,
                  gasPrice: j,
                  maxFeePerBlobGas: x,
                  maxFeePerGas: k,
                  maxPriorityFeePerGas: z,
                  nonce: C,
                  nonceManager: P.nonceManager,
                  parameters: [...m.Q, "sidecars"],
                  value: R,
                  ...E,
                  to: r,
                }),
                n = g?.serializers?.transaction,
                i = await P.signTransaction(t, { serializer: n });
              return await (0, d.s)(
                e,
                v.p,
                "sendRawTransaction"
              )({ serializedTransaction: i });
            }
            if ("smart" === P.type)
              throw new i.Y({
                metaMessages: [
                  "Consider using the `sendUserOperation` Action instead.",
                ],
                docsPath: "/docs/actions/bundler/sendUserOperation",
                type: "smart",
              });
            throw new i.Y({
              docsPath: "/docs/actions/wallet/sendTransaction",
              type: P.type,
            });
          } catch (e) {
            if (e instanceof i.Y) throw e;
            throw (function (e, { docsPath: t, ...r }) {
              let n = (() => {
                let t = (0, l.k)(e, r);
                return t instanceof c.cj ? e : t;
              })();
              return new u.mk(n, { docsPath: t, ...r });
            })(e, { ...t, account: P, chain: t.chain || void 0 });
          }
        }
      },
      61877: function (e, t, r) {
        "use strict";
        r.d(t, {
          n: function () {
            return u;
          },
        });
        var n = r(14503),
          i = r(8998),
          o = r(55629),
          s = r(72365),
          a = r(93714),
          c = r(96128);
        async function u(e, t) {
          let {
            abi: r,
            account: u = e.account,
            address: l,
            args: f,
            dataSuffix: h,
            functionName: d,
            ...p
          } = t;
          if (!u) throw new i.o({ docsPath: "/docs/contract/writeContract" });
          let y = (0, n.T)(u),
            m = (0, o.R)({ abi: r, args: f, functionName: d });
          try {
            return await (0, a.s)(
              e,
              c.T,
              "sendTransaction"
            )({
              data: `${m}${h ? h.replace("0x", "") : ""}`,
              to: l,
              account: y,
              ...p,
            });
          } catch (e) {
            throw (0, s.S)(e, {
              abi: r,
              address: l,
              args: f,
              docsPath: "/docs/contract/writeContract",
              functionName: d,
              sender: y.address,
            });
          }
        }
      },
      43210: function (e, t, r) {
        "use strict";
        r.d(t, {
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
      33840: function (e, t, r) {
        "use strict";
        r.d(t, {
          q: function () {
            return i;
          },
        });
        var n = r(80377);
        function i({ chain: e, currentChainId: t }) {
          if (!e) throw new n.Bk();
          if (t !== e.id) throw new n.Yl({ chain: e, currentChainId: t });
        }
      },
    },
  ]);
