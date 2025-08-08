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
      (e._sentryDebugIds[t] = "c8516ca5-f148-44ec-8c11-52d445ae98a6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c8516ca5-f148-44ec-8c11-52d445ae98a6"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [609],
    {
      1646: function (e) {
        var t;
        (t = function () {
          "use strict";
          var e,
            t,
            s =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            a =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
            i = {
              years: 31536e6,
              months: 2628e6,
              days: 864e5,
              hours: 36e5,
              minutes: 6e4,
              seconds: 1e3,
              milliseconds: 1,
              weeks: 6048e5,
            },
            r = function (e) {
              return e instanceof u;
            },
            n = function (e, t, s) {
              return new u(e, s, t.$l);
            },
            l = function (e) {
              return t.p(e) + "s";
            },
            o = function (e) {
              return e < 0;
            },
            c = function (e) {
              return o(e) ? Math.ceil(e) : Math.floor(e);
            },
            d = function (e, t) {
              return e
                ? o(e)
                  ? { negative: !0, format: "" + Math.abs(e) + t }
                  : { negative: !1, format: "" + e + t }
                : { negative: !1, format: "" };
            },
            u = (function () {
              function o(e, t, s) {
                var r = this;
                if (
                  ((this.$d = {}),
                  (this.$l = s),
                  void 0 === e &&
                    ((this.$ms = 0), this.parseFromMilliseconds()),
                  t)
                )
                  return n(e * i[l(t)], this);
                if ("number" == typeof e)
                  return (this.$ms = e), this.parseFromMilliseconds(), this;
                if ("object" == typeof e)
                  return (
                    Object.keys(e).forEach(function (t) {
                      r.$d[l(t)] = e[t];
                    }),
                    this.calMilliseconds(),
                    this
                  );
                if ("string" == typeof e) {
                  var o = e.match(a);
                  if (o) {
                    var c = o.slice(2).map(function (e) {
                      return null != e ? Number(e) : 0;
                    });
                    return (
                      (this.$d.years = c[0]),
                      (this.$d.months = c[1]),
                      (this.$d.weeks = c[2]),
                      (this.$d.days = c[3]),
                      (this.$d.hours = c[4]),
                      (this.$d.minutes = c[5]),
                      (this.$d.seconds = c[6]),
                      this.calMilliseconds(),
                      this
                    );
                  }
                }
                return this;
              }
              var u = o.prototype;
              return (
                (u.calMilliseconds = function () {
                  var e = this;
                  this.$ms = Object.keys(this.$d).reduce(function (t, s) {
                    return t + (e.$d[s] || 0) * i[s];
                  }, 0);
                }),
                (u.parseFromMilliseconds = function () {
                  var e = this.$ms;
                  (this.$d.years = c(e / 31536e6)),
                    (e %= 31536e6),
                    (this.$d.months = c(e / 2628e6)),
                    (e %= 2628e6),
                    (this.$d.days = c(e / 864e5)),
                    (e %= 864e5),
                    (this.$d.hours = c(e / 36e5)),
                    (e %= 36e5),
                    (this.$d.minutes = c(e / 6e4)),
                    (e %= 6e4),
                    (this.$d.seconds = c(e / 1e3)),
                    (e %= 1e3),
                    (this.$d.milliseconds = e);
                }),
                (u.toISOString = function () {
                  var e = d(this.$d.years, "Y"),
                    t = d(this.$d.months, "M"),
                    s = +this.$d.days || 0;
                  this.$d.weeks && (s += 7 * this.$d.weeks);
                  var a = d(s, "D"),
                    i = d(this.$d.hours, "H"),
                    r = d(this.$d.minutes, "M"),
                    n = this.$d.seconds || 0;
                  this.$d.milliseconds &&
                    ((n += this.$d.milliseconds / 1e3),
                    (n = Math.round(1e3 * n) / 1e3));
                  var l = d(n, "S"),
                    o =
                      e.negative ||
                      t.negative ||
                      a.negative ||
                      i.negative ||
                      r.negative ||
                      l.negative,
                    c = i.format || r.format || l.format ? "T" : "",
                    u =
                      (o ? "-" : "") +
                      "P" +
                      e.format +
                      t.format +
                      a.format +
                      c +
                      i.format +
                      r.format +
                      l.format;
                  return "P" === u || "-P" === u ? "P0D" : u;
                }),
                (u.toJSON = function () {
                  return this.toISOString();
                }),
                (u.format = function (e) {
                  var a = {
                    Y: this.$d.years,
                    YY: t.s(this.$d.years, 2, "0"),
                    YYYY: t.s(this.$d.years, 4, "0"),
                    M: this.$d.months,
                    MM: t.s(this.$d.months, 2, "0"),
                    D: this.$d.days,
                    DD: t.s(this.$d.days, 2, "0"),
                    H: this.$d.hours,
                    HH: t.s(this.$d.hours, 2, "0"),
                    m: this.$d.minutes,
                    mm: t.s(this.$d.minutes, 2, "0"),
                    s: this.$d.seconds,
                    ss: t.s(this.$d.seconds, 2, "0"),
                    SSS: t.s(this.$d.milliseconds, 3, "0"),
                  };
                  return (e || "YYYY-MM-DDTHH:mm:ss").replace(
                    s,
                    function (e, t) {
                      return t || String(a[e]);
                    }
                  );
                }),
                (u.as = function (e) {
                  return this.$ms / i[l(e)];
                }),
                (u.get = function (e) {
                  var t = this.$ms,
                    s = l(e);
                  return (
                    "milliseconds" === s
                      ? (t %= 1e3)
                      : (t = "weeks" === s ? c(t / i[s]) : this.$d[s]),
                    t || 0
                  );
                }),
                (u.add = function (e, t, s) {
                  var a;
                  return (
                    (a = t ? e * i[l(t)] : r(e) ? e.$ms : n(e, this).$ms),
                    n(this.$ms + a * (s ? -1 : 1), this)
                  );
                }),
                (u.subtract = function (e, t) {
                  return this.add(e, t, !0);
                }),
                (u.locale = function (e) {
                  var t = this.clone();
                  return (t.$l = e), t;
                }),
                (u.clone = function () {
                  return n(this.$ms, this);
                }),
                (u.humanize = function (t) {
                  return e().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
                }),
                (u.valueOf = function () {
                  return this.asMilliseconds();
                }),
                (u.milliseconds = function () {
                  return this.get("milliseconds");
                }),
                (u.asMilliseconds = function () {
                  return this.as("milliseconds");
                }),
                (u.seconds = function () {
                  return this.get("seconds");
                }),
                (u.asSeconds = function () {
                  return this.as("seconds");
                }),
                (u.minutes = function () {
                  return this.get("minutes");
                }),
                (u.asMinutes = function () {
                  return this.as("minutes");
                }),
                (u.hours = function () {
                  return this.get("hours");
                }),
                (u.asHours = function () {
                  return this.as("hours");
                }),
                (u.days = function () {
                  return this.get("days");
                }),
                (u.asDays = function () {
                  return this.as("days");
                }),
                (u.weeks = function () {
                  return this.get("weeks");
                }),
                (u.asWeeks = function () {
                  return this.as("weeks");
                }),
                (u.months = function () {
                  return this.get("months");
                }),
                (u.asMonths = function () {
                  return this.as("months");
                }),
                (u.years = function () {
                  return this.get("years");
                }),
                (u.asYears = function () {
                  return this.as("years");
                }),
                o
              );
            })(),
            m = function (e, t, s) {
              return e
                .add(t.years() * s, "y")
                .add(t.months() * s, "M")
                .add(t.days() * s, "d")
                .add(t.hours() * s, "h")
                .add(t.minutes() * s, "m")
                .add(t.seconds() * s, "s")
                .add(t.milliseconds() * s, "ms");
            };
          return function (s, a, i) {
            (e = i),
              (t = i().$utils()),
              (i.duration = function (e, t) {
                return n(e, { $l: i.locale() }, t);
              }),
              (i.isDuration = r);
            var l = a.prototype.add,
              o = a.prototype.subtract;
            (a.prototype.add = function (e, t) {
              return r(e) ? m(this, e, 1) : l.bind(this)(e, t);
            }),
              (a.prototype.subtract = function (e, t) {
                return r(e) ? m(this, e, -1) : o.bind(this)(e, t);
              });
          };
        }),
          (e.exports = t());
      },
      26359: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/trading/market",
          function () {
            return s(28217);
          },
        ]);
      },
      50568: function (e, t, s) {
        "use strict";
        function a(e, t) {
          if (t.length < e)
            throw TypeError(
              e +
                " argument" +
                (e > 1 ? "s" : "") +
                " required, but only " +
                t.length +
                " present"
            );
        }
        s.d(t, {
          Z: function () {
            return a;
          },
        });
      },
      63024: function (e, t, s) {
        "use strict";
        function a(e) {
          if (null === e || !0 === e || !1 === e) return NaN;
          var t = Number(e);
          return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
        }
        s.d(t, {
          Z: function () {
            return a;
          },
        });
      },
      78450: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        var a = s(63024),
          i = s(66381),
          r = s(50568);
        function n(e, t) {
          return (
            (0, r.Z)(2, arguments),
            new Date((0, i.Z)(e).getTime() + (0, a.Z)(t))
          );
        }
      },
      66381: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return r;
          },
        });
        var a = s(71002),
          i = s(50568);
        function r(e) {
          (0, i.Z)(1, arguments);
          var t = Object.prototype.toString.call(e);
          return e instanceof Date ||
            ("object" === (0, a.Z)(e) && "[object Date]" === t)
            ? new Date(e.getTime())
            : "number" == typeof e || "[object Number]" === t
            ? new Date(e)
            : (("string" == typeof e || "[object String]" === t) &&
                "undefined" != typeof console &&
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
                ),
                console.warn(Error().stack)),
              new Date(NaN));
        }
      },
      14052: function (e, t, s) {
        "use strict";
        var a = s(85893),
          i = s(71665),
          r = s.n(i),
          n = s(93967),
          l = s.n(n);
        t.Z = (e) => {
          let {
              label: t,
              icon: s,
              children: i,
              labelClassName: n,
              lowerLabel: o,
              lowerLabelClassName: c,
              className: d,
            } = e,
            u = "".concat(n || "").trim(),
            m = "".concat(c || "").trim();
          return (0, a.jsxs)("div", {
            className: l()(r().container, d),
            children: [
              (0, a.jsxs)("label", { className: u, children: [s && s, t] }),
              i,
              (0, a.jsx)("p", { className: m, children: o }),
            ],
          });
        };
      },
      17809: function (e, t, s) {
        "use strict";
        s.d(t, {
          Z: function () {
            return tZ;
          },
        });
        var a,
          i,
          r = s(85893),
          n = s(67294),
          l = s(24514);
        let o = (e, t, s) => {
            let a = Math.floor((t - e) / (s - 1));
            return Array.from({ length: s }, (t, s) => e + s * a);
          },
          c = (e, t, s) => {
            let a = [];
            for (let i = e; i <= t; i += s) a.push(i);
            return a;
          },
          d = (e, t) => {
            let s = 0;
            for (let a = 0; a < e.length - 1; a++)
              e[a] <= t &&
                e[a + 1] >= t &&
                (s = t >= (e[a + 1] - e[a]) / 2 + e[a] ? e[a + 1] : e[a]);
            return s;
          };
        var u = s(13812),
          m = s(33815),
          h = s.n(m),
          p = (e) => {
            let {
                value: t,
                min: s,
                max: a,
                step: i = 1,
                range: l = !1,
                label: m = 2,
                showLabel: p = !0,
                onChange: x,
                extended: w = !1,
                lockFirst: j = !1,
                labels: f,
              } = e,
              g = (0, u.I)(),
              [b, y] = (0, n.useState)(l && t ? t.min : s),
              [N, v] = (0, n.useState)(t ? t.max : s),
              [S, C] = (0, n.useState)(0),
              [I, D] = (0, n.useState)(0),
              k = o(s, a, m),
              P = c(s, a, i),
              L = (0, n.useRef)(null);
            (0, n.useEffect)(() => {
              C(l ? ((b - s) / (a - s)) * 100 : 0),
                D(((N - s) / (a - s)) * 100);
            }, [N, b, s, a, l]),
              (0, n.useEffect)(() => {
                y((null == t ? void 0 : t.min) || s),
                  v(
                    (null == t ? void 0 : t.max) ||
                      (null == t ? void 0 : t.max) === 0
                      ? t.max
                      : a
                  );
              }, [t]);
            let E = (e) => {
                let t = [h().labelItem];
                return (
                  l
                    ? e >= b && e <= N && t.push(h().highlight)
                    : e == N && t.push(h().highlight),
                  t.join(" ")
                );
              },
              O = (e) => {
                if (l) {
                  let t = b + (N - b) / 2;
                  e > N
                    ? (v(e), x && x({ min: b, max: e }))
                    : e < b
                    ? (y(e), x && x({ min: e, max: N }))
                    : t < e
                    ? (v(e), x && x({ min: b, max: e }))
                    : t >= e && (y(e), x && x({ min: e, max: N }));
                } else
                  j && e === s
                    ? (x && x({ min: b, max: P[1] }), v(P[1]))
                    : (v(e), x && x({ min: b, max: e }));
              },
              F = (e) => {
                let t = e.nativeEvent.offsetX,
                  i = e.currentTarget.clientWidth,
                  r = s + Math.round(((a - s) / i) * t),
                  n = e.currentTarget.className;
                if (
                  n.includes("Slider_innerRail") ||
                  n.includes("Slider_rail") ||
                  n.includes("Slider_controlWrapper")
                ) {
                  if (l) {
                    if (L.current) {
                      let n = L.current.getBoundingClientRect().left,
                        l = e.clientX - n;
                      if (l < (i / 100) * S)
                        y(d(P, r)), x && x({ min: d(P, r), max: N });
                      else if (l > (i / 100) * I)
                        v(d(P, r)), x && x({ min: b, max: d(P, r) });
                      else {
                        let e =
                            s + Math.round(((a - s) / i) * ((i / 100) * S + t)),
                          r = b + (N - b) / 2;
                        e > N
                          ? (v(d(P, e)), x && x({ min: b, max: d(P, e) }))
                          : e < b
                          ? (y(d(P, e)), x && x({ min: d(P, e), max: N }))
                          : r < e
                          ? (v(d(P, e)), x && x({ min: b, max: d(P, e) }))
                          : r >= e &&
                            (y(d(P, e)), x && x({ min: d(P, e), max: N }));
                      }
                    }
                  } else {
                    let e = d(P, r);
                    j && e === s
                      ? (v(P[1]), x && x({ min: b, max: P[1] }))
                      : (v(e), x && x({ min: b, max: e }));
                  }
                } else if (l)
                  r > N
                    ? (x && x({ min: b, max: d(P, r) }), v(d(P, r)))
                    : r < b
                    ? y(d(P, r))
                    : r >= b + (N - b) / 2
                    ? (v(d(P, r)), x && x({ min: b, max: d(P, r) }))
                    : (y(d(P, r)), x && x({ min: d(P, r), max: N }));
                else {
                  let e = d(P, r);
                  j && e === s
                    ? (v(P[1]), x && x({ min: b, max: P[1] }))
                    : (v(e), x && x({ min: b, max: e }));
                }
              };
            return (0, r.jsxs)("div", {
              className: "slider--"
                .concat(g, " ")
                .concat(
                  p
                    ? w
                      ? l
                        ? h().containerExtendRange
                        : h().containerExtend
                      : h().container
                    : h().containerNoLabels
                ),
              children: [
                (0, r.jsxs)("div", {
                  className: h().inputWrapper,
                  children: [
                    (0, r.jsx)("input", {
                      className: ""
                        .concat(h().input, " ")
                        .concat(l ? "" : h().hide),
                      type: "range",
                      value: b,
                      min: s,
                      max: a,
                      step: i,
                      onChange: (e) => {
                        let t = Math.min(+e.target.value, N);
                        j && t === s
                          ? (y(P[1]), x && x({ min: P[1], max: N }))
                          : t < N && (y(t), x && x({ min: t, max: N }));
                      },
                    }),
                    (0, r.jsx)("input", {
                      className: h().input,
                      type: "range",
                      value: N,
                      min: s,
                      max: a,
                      step: i,
                      onChange: (e) => {
                        let t = Math.max(+e.target.value, b);
                        j && t === s
                          ? (y(P[1]), x && x({ min: b, max: P[1] }))
                          : t > b && (v(t), x && x({ min: b, max: t }));
                      },
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: h().sliderEffect,
                  onClick: (e) => F(e),
                }),
                (0, r.jsxs)("div", {
                  className: h().controlWrapper,
                  onClick: (e) => F(e),
                  ref: L,
                  children: [
                    (0, r.jsx)("div", {
                      className: ""
                        .concat(h().control, " ")
                        .concat(l ? "" : h().hide),
                      style: { left: "".concat(S, "%") },
                    }),
                    w &&
                      l &&
                      (0, r.jsx)("div", { className: h().railExtendRange }),
                    w && !l && (0, r.jsx)("div", { className: h().railExtend }),
                    (0, r.jsx)("div", {
                      className: h().rail,
                      children: (0, r.jsx)("div", {
                        className: h().innerRail,
                        style: {
                          left: "".concat(S, "%"),
                          right: "".concat(100 - I, "%"),
                        },
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: h().control,
                      style: { left: "".concat(I, "%") },
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "labelContainer--"
                    .concat(g, " ")
                    .concat(h().labelContainer, " ")
                    .concat(p ? "" : h().hide),
                  children: k.map((e, t) =>
                    !j || t
                      ? (0, r.jsx)(
                          "div",
                          {
                            className: ""
                              .concat(j && !t ? h().hide : "", " ")
                              .concat(E(e)),
                            style: {
                              left:
                                0 != t
                                  ? t != k.length - 1
                                    ? "calc(".concat(
                                        (100 / (m - 1)) * t + "%",
                                        " - 10px)"
                                      )
                                    : "calc(".concat(
                                        (100 / (m - 1)) * t + "%",
                                        " - 22px)"
                                      )
                                  : "calc(".concat(
                                      (100 / (m - 1)) * t + "%",
                                      ")"
                                    ),
                            },
                            onClick: () => O(e),
                            children: (0, r.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: f ? f[t] : e,
                            }),
                          },
                          t
                        )
                      : (0, r.jsx)(r.Fragment, {})
                  ),
                }),
              ],
            });
          },
          x = s(45323),
          w = s(77125),
          j = s(9305),
          f = s(21503),
          g = s.n(f),
          b = (e) => {
            let { type: t } = e;
            return (0, r.jsxs)("span", {
              className: "flex-column-center",
              children: [
                (0, r.jsx)("span", {
                  className:
                    "INSIDE" == t
                      ? "hide-psuedo p-0"
                      : "color-white-30 hide-psuedo p-0",
                  children: "Inside",
                }),
                (0, r.jsx)("span", {
                  className:
                    "OUTSIDE" == t
                      ? "hide-psuedo p-0"
                      : "color-white-30 hide-psuedo p-0",
                  children: "Outside",
                }),
              ],
            });
          },
          y = s(18666),
          N = s(59731),
          v = s(70757),
          S = (e) => {
            let { type: t = "INSIDE", currentExpiryDate: s } = e,
              a = (0, y.p6)(s, y.Nn, y.KJ),
              { underlyingCurrency: i } = (0, N.qr)(),
              l = (0, n.useMemo)(
                () =>
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      "@",
                      (0, r.jsx)("span", {
                        className: "".concat(g().italic, "  hide-psuedo p-0"),
                        children: a,
                      }),
                    ],
                  }),
                [s]
              );
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("div", {
                  className: g().gridContainer,
                  children: [
                    (0, r.jsx)("p", { children: "Bet & EARN Return if" }),
                    (0, r.jsx)("p", {
                      className: "ml-6 mr-2",
                      children: (0, v.XX)(i),
                    }),
                    (0, r.jsx)("p", { children: l }),
                    (0, r.jsxs)("p", {
                      className: "ml-6",
                      children: [(0, r.jsx)(b, { type: t }), " Range."],
                    }),
                    (0, r.jsx)("p", { children: "i. Bet Capital at Risk;" }),
                    (0, r.jsx)("p", {
                      className: "ml-6",
                      children: (0, v.XX)(i),
                    }),
                    (0, r.jsx)("p", { children: l }),
                    (0, r.jsxs)("p", {
                      className: "ml-6",
                      children: [(0, r.jsx)(b, { type: t }), " Range?"],
                    }),
                  ],
                }),
                (0, r.jsx)("p", {
                  className: "mb-10",
                  children: "ii. Select Range. ",
                }),
                (0, r.jsx)("p", {
                  className: "mb-4",
                  children: "iii. Offered Odds presented.",
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "iv. Offered Odds reflect the probability of",
                    (0, v.XX)(i),
                    (0, r.jsx)(b, { type: t }),
                    "Range ",
                    l,
                    ".",
                  ],
                }),
              ],
            });
          },
          C = s(75922),
          I = s(93967),
          D = s.n(I),
          k = s(29181),
          P = s.n(k),
          L = (e) => {
            let {
                label: t,
                children: s,
                lowerLabel: a,
                labelClassName: i,
                wrapperClassName: n,
              } = e,
              l = "".concat(i || "").trim();
            return (0, r.jsxs)("div", {
              className: P().container,
              children: [
                (0, r.jsxs)("div", {
                  className: D()(P().wrapper, n),
                  children: [(0, r.jsx)("p", { children: t }), s],
                }),
                (0, r.jsx)("p", { className: l, children: a }),
              ],
            });
          },
          E = s(28801),
          O = s(55986),
          F = s(18182),
          Z = s(45338),
          _ = s(97338),
          B = s(108),
          A = s(5716),
          T = s(40526);
        let R = [
            { option: "Call", value: "Call" },
            { option: "Put", value: "Put" },
          ],
          U = [
            { option: "Call", value: "BinaryCall" },
            { option: "Put", value: "BinaryPut" },
          ],
          M = [
            { option: (0, r.jsx)(A.Z, {}), value: "BUY" },
            { option: (0, r.jsx)(B.Z, {}), value: "SELL" },
          ],
          Y = [
            { option: "Inside Range", value: "INSIDE" },
            { option: "Outside Range", value: "OUTSIDE" },
          ],
          X = [
            { option: "Bull", value: T.FZ.BULL },
            { option: "Bear", value: T.FZ.BEAR },
          ],
          q = [
            { option: "Bull", value: T.WL.BULL },
            { option: "Range", value: T.WL.RANGE },
            { option: "Bear", value: T.WL.BEAR },
          ],
          K = [
            { option: "Bull", value: T.WL.BULL },
            { option: "Bear", value: T.WL.BEAR },
          ],
          G = [
            { option: "Bonus", value: "Bonus" },
            { option: "Twin-Win", value: "Twin Win" },
          ],
          W = [
            { option: "Risky Earn", value: "Risky Earn" },
            { option: "RiskLess Earn", value: "Riskless Earn" },
          ],
          $ = [
            { option: "UP", value: "UP" },
            { option: "DOWN", value: "DOWN" },
          ],
          z = [
            { option: "IN", value: "IN" },
            { option: "OUT", value: "OUT" },
          ];
        var H = s(64088),
          V = s(47236),
          J = s(59421),
          Q = s(28770),
          ee = s.n(Q),
          et = s(80362),
          es = s(3298),
          ea = s(59085),
          ei = s(37129),
          er = s(26740),
          en = s(12781),
          el = s(70087),
          eo = (e) => {
            let { color: t = "#9D9DAA", className: s } = e;
            return (0, r.jsx)("svg", {
              className: s,
              width: "5",
              height: "48",
              viewBox: "0 0 5 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M4.67875 48L5 46.8385C4.34651 46.5872 3.89621 46.1355 3.6491 45.4834C3.40198 44.8382 3.27842 44.0978 3.27842 43.2624L3.27842 27.1533C3.27842 26.4741 3.16585 25.856 2.9407 25.299C2.72104 24.7489 2.36958 24.3107 1.88633 23.9847C1.40857 23.6587 0.779796 23.4957 4.28447e-06 23.4957L4.06714e-06 24.7387C0.620542 24.7387 1.06535 24.956 1.33444 25.3907C1.60901 25.8254 1.7463 26.413 1.7463 27.1533L1.7463 43.2624C1.7463 43.9755 1.83416 44.6412 2.00989 45.2593C2.19111 45.8842 2.49314 46.431 2.91598 46.8996C3.34432 47.3751 3.93191 47.7419 4.67875 48ZM5.00001 1.17168L4.67875 8.18058e-07C3.93191 0.264901 3.34432 0.631688 2.91599 1.10036C2.49314 1.56903 2.19111 2.11581 2.00989 2.7407C1.83416 3.35881 1.7463 4.02445 1.7463 4.73765L1.7463 20.8365C1.7463 21.3323 1.68589 21.7602 1.56508 22.1202C1.44427 22.4802 1.25481 22.7587 0.996709 22.9557C0.744101 23.1595 0.411866 23.2613 4.32545e-06 23.2613L4.10811e-06 24.5043C0.779795 24.5043 1.40857 24.3413 1.88633 24.0153C2.36958 23.6893 2.72104 23.2478 2.9407 22.6908C3.16585 22.1406 3.27842 21.5225 3.27842 20.8365L3.27842 4.73765C3.27842 4.18068 3.33059 3.66446 3.43493 3.189C3.54476 2.71353 3.72323 2.3026 3.97035 1.95619C4.22296 1.60299 4.56618 1.34148 5.00001 1.17168Z",
                fill: t,
              }),
            });
          },
          ec = (e) => {
            let { className: t, color: s = "#9D9DAA" } = e;
            return (0, r.jsx)("svg", {
              className: t,
              width: "5",
              height: "48",
              viewBox: "0 0 5 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M0.32125 -4.09029e-07L-2.00889e-06 1.16149C0.653485 1.4128 1.10379 1.86449 1.3509 2.51656C1.59802 3.16183 1.72158 3.90219 1.72158 4.73765L1.72158 20.8467C1.72158 21.5259 1.83416 22.144 2.05931 22.701C2.27897 23.2511 2.63042 23.6893 3.11367 24.0153C3.59143 24.3413 4.22021 24.5043 5 24.5043L5 23.2613C4.37946 23.2613 3.93465 23.044 3.66557 22.6093C3.39099 22.1746 3.2537 21.587 3.2537 20.8467L3.2537 4.73765C3.2537 4.02445 3.16584 3.3588 2.99011 2.7407C2.80889 2.11581 2.50686 1.56903 2.08402 1.10036C1.65568 0.624894 1.06809 0.258108 0.32125 -4.09029e-07ZM-2.18651e-06 46.8283L0.32125 48C1.06809 47.7351 1.65568 47.3683 2.08402 46.8996C2.50686 46.431 2.80889 45.8842 2.99011 45.2593C3.16584 44.6412 3.25371 43.9755 3.25371 43.2624L3.2537 27.1635C3.2537 26.6677 3.31411 26.2398 3.43492 25.8798C3.55574 25.5198 3.74519 25.2413 4.00329 25.0443C4.2559 24.8405 4.58814 24.7387 5 24.7387L5 23.4957C4.22021 23.4957 3.59143 23.6587 3.11367 23.9847C2.63042 24.3107 2.27897 24.7522 2.05931 25.3092C1.83415 25.8594 1.72158 26.4775 1.72158 27.1635L1.72158 43.2624C1.72158 43.8193 1.66941 44.3355 1.56507 44.811C1.45524 45.2865 1.27677 45.6974 1.02965 46.0438C0.777044 46.397 0.433825 46.6585 -2.18651e-06 46.8283Z",
                fill: s,
              }),
            });
          },
          ed = (e) => {
            let { currentExpiryDate: t } = e,
              { underlyingCurrency: s } = (0, N.qr)(),
              a = (0, y.p6)(t, y.Nn, y.KJ);
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  children: [
                    "i. Risk",
                    (0, r.jsx)("span", { className: g().spacer }),
                    (0, r.jsxs)("span", {
                      className: g().stackedLogo,
                      children: [(0, v.XX)(s), (0, r.jsx)(w.Z, {})],
                    }),
                    (0, r.jsx)("span", { className: g().spacer }),
                    (0, r.jsx)("em", { children: "Now" }),
                    (0, r.jsx)(ei.Z, {}),
                    (0, r.jsx)(eo, {}),
                    "Risk",
                    (0, r.jsxs)("span", {
                      className: g().stackedLogo,
                      children: [(0, v.XX)(s), (0, r.jsx)(w.Z, {})],
                    }),
                    "+ Return",
                    (0, r.jsx)(w.Z, {}),
                    (0, r.jsx)(ec, {}),
                    "@ ",
                    (0, r.jsxs)("span", {
                      className: "".concat(g().italic, " hide-psuedo p-0"),
                      children: [a, "."],
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "mb-5",
                  children: ["ii. Select ", (0, v.XX)(s), " Target Price."],
                }),
                (0, r.jsxs)("div", {
                  className: "d-flex flex-row",
                  style: { alignItems: "start" },
                  children: [
                    (0, r.jsx)("p", { className: "mr-4", children: "iii." }),
                    (0, r.jsxs)("div", {
                      className: "pt-5",
                      children: [
                        (0, r.jsxs)("p", {
                          children: [
                            "- If at ",
                            a,
                            " ",
                            (0, v.XX)(s),
                            " ",
                            (0, r.jsx)(er.Z, {}),
                            " Target Price, receive Risk equivalent worth of ",
                            (0, v.XX)(s),
                            " ",
                            (0, r.jsx)(el.Z, {}),
                            "Return in ",
                            (0, r.jsx)(w.Z, {}),
                            " .",
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          children: [
                            "- If at ",
                            a,
                            " ",
                            (0, v.XX)(s),
                            " ",
                            (0, r.jsx)(en.Z, {}),
                            " Target Price, receive Risk equivalent worth of ",
                            (0, r.jsx)(w.Z, {}),
                            " ",
                            (0, r.jsx)(el.Z, {}),
                            "Return in ",
                            (0, r.jsx)(w.Z, {}),
                            " .",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          eu = (e) => {
            let { color: t = "#9D9DAA" } = e;
            return (0, r.jsx)("svg", {
              width: "179",
              height: "5",
              viewBox: "0 0 179 5",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M179 0.321254L178.286 1.89883e-06C178.131 0.653489 177.854 1.10379 177.453 1.3509C177.056 1.59802 176.601 1.72158 176.087 1.72158L91.4913 1.72158C91.0738 1.72158 90.6938 1.83416 90.3514 2.05931C90.0131 2.27897 89.7438 2.63042 89.5434 3.11367C89.343 3.59143 89.2427 4.22021 89.2427 5L90.0069 5C90.0069 4.37946 90.1405 3.93465 90.4077 3.66557C90.675 3.39099 91.0362 3.25371 91.4913 3.25371L176.087 3.25371C176.526 3.25371 176.935 3.16584 177.315 2.99011C177.699 2.80889 178.035 2.50686 178.324 2.08402C178.616 1.65568 178.841 1.0681 179 0.321254ZM0.720306 -2.18615e-07L5.57935e-08 0.321252C0.16285 1.06809 0.388334 1.65569 0.676453 2.08402C0.964571 2.50687 1.30073 2.8089 1.68489 2.99012C2.06487 3.16584 2.47406 3.25371 2.91251 3.25371L87.608 3.25371C87.9128 3.25371 88.1759 3.31411 88.3972 3.43493C88.6185 3.55574 88.7897 3.74519 88.9108 4.00329C89.0361 4.2559 89.0987 4.58814 89.0987 5L89.8628 5C89.8628 4.22021 89.7626 3.59143 89.5622 3.11367C89.3617 2.63042 89.0903 2.27897 88.7479 2.05931C88.4097 1.83416 88.0297 1.72158 87.608 1.72158L2.91251 1.72158C2.5701 1.72158 2.25276 1.66941 1.96046 1.56508C1.66817 1.45525 1.41553 1.27677 1.20258 1.02966C0.985443 0.777048 0.824697 0.433827 0.720306 -2.18615e-07Z",
                fill: t,
              }),
            });
          },
          em = (e) => {
            let { color: t = "#9D9DAA" } = e;
            return (0, r.jsx)("svg", {
              width: "3",
              height: "27",
              viewBox: "0 0 3 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M3.00001 27L3.00001 25.8549L1.47607 25.8549L1.47606 1.14509L3 1.14509L3 1.82071e-06L-7.14504e-06 1.90735e-06L0 27L3.00001 27Z",
                fill: t,
              }),
            });
          },
          eh = (e) => {
            let { color: t = "#9D9DAA" } = e;
            return (0, r.jsx)("svg", {
              width: "3",
              height: "27",
              viewBox: "0 0 3 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M-7.15256e-06 27L-6.84953e-06 25.8549L1.52393 25.8549L1.52394 1.14509L-3.10544e-07 1.14509L-7.51825e-09 1.82071e-06L3.00001 1.90735e-06L3 27L-7.15256e-06 27Z",
                fill: t,
              }),
            });
          },
          ep = (e) => {
            let { currentExpiry: t } = e,
              s = (0, y.p6)(t, y.Nn, y.KJ);
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  className: "mb-14",
                  children: [
                    "Pay Capital ",
                    (0, r.jsx)(w.Z, {}),
                    " Now ",
                    (0, r.jsx)(ei.Z, {}),
                    " { Receive Capital ",
                    (0, r.jsx)(w.Z, {}),
                    " + Return ",
                    (0, r.jsx)(w.Z, {}),
                    " } @",
                    " ",
                    (0, r.jsx)("span", {
                      className: "".concat(g().italic, " hide-psuedo p-0"),
                      children: s,
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "flex-row",
                  children: [
                    (0, r.jsx)("p", {
                      style: { color: "#394050", fontStyle: "italic" },
                      className: g().risklessPay,
                      children: "i. Pay",
                    }),
                    (0, r.jsxs)("p", {
                      className: g().greyText,
                      children: [
                        (0, r.jsxs)("span", {
                          className: "flex-column-center hide-psuedo p-0 mb-10",
                          children: [
                            (0, r.jsxs)("span", {
                              className: "hide-psuedo flex-row",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketSm,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(em, {
                                    color: "#394050",
                                  }),
                                }),
                                (0, r.jsxs)("span", {
                                  className:
                                    "flex-column-center flex-start hide-psuedo p-0",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0 ".concat(
                                        g().italic
                                      ),
                                      children: "+ Call Spread",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0 ".concat(
                                        g().italic
                                      ),
                                      children: "+ Put Spread",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketSm,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(eh, {
                                    color: "#394050",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("span", {
                              className:
                                "hide-psuedo flex-row justify-content-center",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketSm,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(em, {
                                    color: "#394050",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "hide-psuedo flex-column-between",
                                  children: [
                                    (0, r.jsxs)("span", {
                                      className: "hide-psuedo p-0",
                                      children: [
                                        "(Call ",
                                        (0, r.jsx)(B.Z, { color: "#343050" }),
                                      ],
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0",
                                      children: "Call) +",
                                    }),
                                    (0, r.jsxs)("span", {
                                      className: "hide-psuedo p-0",
                                      children: [
                                        " ",
                                        "(Put ",
                                        (0, r.jsx)(B.Z, { color: "#343050" }),
                                      ],
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0",
                                      children: "Put)",
                                    }),
                                    (0, r.jsxs)("h6", {
                                      className: "hide-psuedo p-0",
                                      children: [
                                        (0, r.jsx)("span", {
                                          className: "hide-psuedo ".concat(
                                            g().largerGap
                                          ),
                                          children: "Lower",
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "hide-psuedo ".concat(
                                            g().largerGap
                                          ),
                                          children: "Upper",
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "hide-psuedo ".concat(
                                            g().largerGap
                                          ),
                                          children: "Upper",
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "hide-psuedo ".concat(
                                            g().largerGap
                                          ),
                                          children: "Lower",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketSm,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(eh, {
                                    color: "#394050",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: g().curlyDown,
                              children: (0, r.jsx)(eu, { color: "#394050" }),
                            }),
                            (0, r.jsx)("span", {
                              className: "hide-psuedo fs-lato-sm-italic",
                              children: "Capital",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          style: { color: "#394050" },
                          className: ""
                            .concat(g().risklessPay, " ")
                            .concat(g().italic),
                          children: [(0, r.jsx)(w.Z, {}), " Now,"],
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "flex-column-center flex-start hide-psuedo p-0 mb-24",
                          children: [
                            (0, r.jsxs)("p", {
                              className: "".concat(g().greyText),
                              children: [
                                "Receive (Lower Strike - Upper Strike) @",
                                " ",
                                (0, r.jsx)("span", {
                                  className: "".concat(
                                    g().italic,
                                    " hide-psuedo p-0"
                                  ),
                                  children: s,
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: g().italic,
                              children: [
                                (0, r.jsx)("p", {
                                  className: g().greyText,
                                  children: "Riskless Return",
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().curlySide,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(eo, {
                                    color: "#394050",
                                  }),
                                }),
                                (0, r.jsxs)("span", {
                                  className:
                                    "hide-psuedo flex-column-center p-0",
                                  style: { color: "#394050" },
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo",
                                      children: "Lower Strike - Upper Strike",
                                    }),
                                    (0, r.jsx)("div", {
                                      className: g().greyDivider,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "hide-psuedo fs-lato-sm-italic",
                                      children: "Capital",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().curlySide,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(ec, {
                                    color: "#394050",
                                  }),
                                }),
                                (0, r.jsx)(w.Z, {}),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "flex-row",
                  children: [
                    (0, r.jsx)("p", {
                      className: g().risklessPay,
                      children: "ii. Pay",
                    }),
                    (0, r.jsxs)("p", {
                      children: [
                        (0, r.jsxs)("span", {
                          className: "flex-column-center hide-psuedo p-0",
                          children: [
                            (0, r.jsxs)("span", {
                              className: "hide-psuedo flex-row",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketLg,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(em, {}),
                                }),
                                (0, r.jsxs)("span", {
                                  className:
                                    "flex-column-center flex-start hide-psuedo p-0",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0",
                                      children: "+ Put",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0",
                                      children: "- Call",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo p-0",
                                      children: "+ Next Auction Forward",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().squareBracketLg,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(eh, {}),
                                }),
                              ],
                            }),
                            (0, r.jsx)("span", {
                              className: "flex-column-center lg",
                              children: (0, r.jsx)("span", {
                                className: "hide-psuedo p-0",
                                children: "Forward Strike - (Call - Put)",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: g().curlyDown,
                              children: (0, r.jsx)(eu, {}),
                            }),
                            (0, r.jsx)("span", {
                              className: "hide-psuedo fs-lato-sm-italic",
                              children: "Capital",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: ""
                            .concat(g().risklessPay, " ")
                            .concat(g().italic, " ml-36"),
                          children: [(0, r.jsx)(w.Z, {}), " Now,"],
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "flex-column-center flex-start hide-psuedo p-0 mb-24",
                          children: [
                            (0, r.jsxs)("p", {
                              children: [
                                "Receive forward strike ",
                                (0, r.jsx)(w.Z, {}),
                                " @",
                                " ",
                                (0, r.jsx)("span", {
                                  className: "".concat(
                                    g().italic,
                                    " hide-psuedo p-0"
                                  ),
                                  children: s,
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              children: [
                                (0, r.jsx)("p", {
                                  children: "Riskless Return",
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().curlySide,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(eo, {}),
                                }),
                                (0, r.jsxs)("span", {
                                  className:
                                    "hide-psuedo flex-column-center p-0",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "hide-psuedo",
                                      children: "Forward Strike",
                                    }),
                                    (0, r.jsx)("div", {
                                      className: g().divider,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "hide-psuedo fs-lato-sm-italic",
                                      children: "Capital",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "hide-psuedo ".concat(
                                    g().curlySide,
                                    " p-0"
                                  ),
                                  children: (0, r.jsx)(ec, {}),
                                }),
                                (0, r.jsx)(w.Z, {}),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          ex = s(6415),
          ew = s.n(ex),
          ej = s(27484),
          ef = s.n(ej),
          eg = s(1646),
          eb = s.n(eg);
        ef().extend(eb());
        let ey = (e, t, s) => {
          if (t <= 0 || s <= 0) return "0";
          let a = ef()(),
            i = (0, y.cK)(e, y.Nn),
            r = ef().duration(i.diff(a)).asYears();
          return "".concat((((s / (t - 1)) * 100) / r).toFixed(1));
        };
        var eN = s(72067),
          ev = s(69448),
          eS = s(52431),
          eC = () =>
            (0, r.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M12 8L4 8",
                stroke: "#9D9DAA",
                strokeLinecap: "round",
              }),
            }),
          eI = (e) => {
            let { colorGreater: t = "#54565b", colorLess: s = "white" } = e;
            return (0, r.jsxs)("svg", {
              className: "width-12 height-25 ml-6",
              width: "12",
              height: "25",
              viewBox: "0 0 12 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  d: "M7 16L4 19L7 22",
                  stroke: t,
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  d: "M5 9L8 6L5 3",
                  stroke: s,
                  strokeLinecap: "round",
                }),
              ],
            });
          },
          eD = (e) => {
            let { type: t } = e;
            return (0, r.jsxs)("span", {
              className: "flex-column-center",
              children: [
                (0, r.jsx)("span", {
                  className:
                    "Call" == t
                      ? "color-white hide-psuedo p-0"
                      : "color-white-30 hide-psuedo p-0",
                  children: "Upside",
                }),
                (0, r.jsx)("span", {
                  className:
                    "Put" == t
                      ? "color-white hide-psuedo p-0"
                      : "color-white-30 hide-psuedo p-0",
                  children: "Downside",
                }),
              ],
            });
          },
          ek = (e) => {
            let { type: t = "Call", currentExpiryDate: s } = e,
              { underlyingCurrency: a } = (0, N.qr)(),
              i = (0, y.p6)(s, y.Nn, y.KJ),
              l = (0, n.useMemo)(
                () =>
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      "Price @",
                      (0, r.jsx)("span", {
                        className: "".concat(g().italic, "  hide-psuedo p-0"),
                        children: i,
                      }),
                    ],
                  }),
                [s]
              );
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  children: ["i. Select ", (0, v.XX)(a), " Price Reference."],
                }),
                (0, r.jsxs)("div", {
                  className: g().gridContainer,
                  children: [
                    (0, r.jsx)("p", { children: "ii. Minimum expected" }),
                    (0, r.jsx)("p", {
                      className: "ml-6 mr-6",
                      children: (0, v.XX)(a),
                    }),
                    (0, r.jsxs)("p", {
                      children: [(0, r.jsx)(eD, { type: t }), "move from"],
                    }),
                    (0, r.jsxs)("p", {
                      className: "ml-6",
                      children: [(0, v.XX)(a), " Price Reference presented."],
                    }),
                    (0, r.jsx)("p", {
                      className: "justify-end",
                      children: "(Maximum potential",
                    }),
                    (0, r.jsx)("p", {
                      className: "ml-6 mr-6",
                      children: (0, r.jsx)(w.Z, {}),
                    }),
                    (0, r.jsxs)("p", {
                      children: ["loss if ", (0, v.XX)(a), " ", l, "="],
                    }),
                    (0, r.jsxs)("p", {
                      className: "ml-6",
                      children: [(0, v.XX)(a), " Price Reference.)"],
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "iii. Post minimum expected ",
                    (0, v.XX)(a, "ml-10"),
                    (0, r.jsx)(eD, { type: t }),
                    "as collateral.",
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "pl-18",
                  children: [
                    "- If ",
                    (0, v.XX)(a),
                    " ",
                    l,
                    (0, r.jsx)(eI, {
                      colorGreater: "Call" === t ? "#54565b" : "white",
                      colorLess: "Call" === t ? "white" : "#54565b",
                    }),
                    (0, v.XX)(a, "ml-6"),
                    "Price Reference ",
                    "Call" === t
                      ? (0, r.jsx)(el.Z, {})
                      : (0, r.jsx)(B.Z, { color: "#c5c5d9" }),
                    (0, r.jsxs)("span", {
                      className: "flex-column-center",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "Call" == t
                              ? "color-white hide-psuedo p-0"
                              : "color-white-30 hide-psuedo p-0",
                          children: "min Upside",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "Put" == t
                              ? "color-white hide-psuedo p-0"
                              : "color-white-30 hide-psuedo p-0",
                          children: "min Downside",
                        }),
                      ],
                    }),
                    ", receive ",
                    (0, v.XX)(a),
                    " ",
                    l,
                    " ",
                    (0, r.jsx)(eC, {}),
                    (0, r.jsxs)("span", {
                      className: "flex-column-center",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "Call" == t
                              ? "color-white hide-psuedo p-0"
                              : "color-white-30 hide-psuedo p-0",
                          children: "min Upside",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "Put" == t
                              ? "color-white hide-psuedo p-0"
                              : "color-white-30 hide-psuedo p-0",
                          children: "min Downside",
                        }),
                      ],
                    }),
                    ".",
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "pl-18",
                  children: [
                    "- If ",
                    (0, v.XX)(a),
                    " ",
                    l,
                    (0, r.jsx)(eI, {
                      colorLess: "Call" === t ? "#54565b" : "white",
                      colorGreater: "Call" === t ? "white" : "#54565b",
                    }),
                    (0, v.XX)(a, "ml-6"),
                    "Price Reference, receive collateral back.",
                  ],
                }),
              ],
            });
          },
          eP = s(91838),
          eL = s(14052),
          eE = s(65440),
          eO = s(67930);
        let eF = (e, t, s) => {
          let a = t.map((e) => parseFloat(e.value)).sort((e, t) => e - t);
          if ("Call" === s) {
            let t = a.filter((t) => t < e);
            return t.length >= 2 ? t[t.length - 2].toString() : null;
          }
          if ("Put" === s) {
            let t = a.filter((t) => t > e);
            return t.length >= 2 ? t[1].toString() : null;
          }
          return null;
        };
        var eZ = () => {
            let { underlyingCurrency: e } = (0, N.qr)();
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  children: ["i. Select ", (0, v.XX)(e), " Price Reference."],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "ii. Select desired ",
                    (0, v.XX)(e),
                    " Protection Extinction Level (KO Barrier)",
                  ],
                }),
                (0, r.jsx)("p", {
                  children:
                    "iii. Protection extinguished at Knock Out Barrier.",
                }),
              ],
            });
          },
          e_ = () => {
            let { underlyingCurrency: e } = (0, N.qr)();
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  children: ["i. Select ", (0, v.XX)(e), " Price Reference."],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "ii. Select desired ",
                    (0, v.XX)(e),
                    " Downside up to which exposure will have flipped from long to short.",
                  ],
                }),
                (0, r.jsx)("p", {
                  children:
                    "iii. Exposure flips back from short to long at Knock Out Barrier.",
                }),
              ],
            });
          },
          eB = s(69881),
          eA = s(9202),
          eT = (e) => {
            let { inOrOut: t, upOrDown: s, currentExpiry: a } = e,
              { underlyingCurrency: i } = (0, N.qr)(),
              n = (0, y.p6)(a, y.Nn, y.KJ);
            return (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsxs)("p", {
                  children: [
                    "i. Select Desired Direction",
                    " ",
                    (0, r.jsxs)("span", {
                      className: "flex-column-center mr-6",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "UP" == s
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Up",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "DOWN" == s
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Down",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "ii. Will",
                    (0, v.XX)(i),
                    "move ‘a lot’? ",
                    (0, r.jsx)("span", {
                      className: "hide-psuedo p-0 ml-54",
                      children: "( ‘Knock IN’ )",
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: "pl-14",
                  children: [
                    "Will ",
                    (0, v.XX)(i),
                    " move ‘not too much’? ( ‘Knock OUT’ )",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "iii.",
                    (0, r.jsxs)("span", {
                      className: "flex-column-center mr-6",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "UP" == s
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Up",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "DOWN" == s
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Down",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("span", {
                      className: "flex-column-center mr-6",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "IN" == t
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Knocks In ( effective )",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "OUT" == t
                              ? "hide-psuedo color-white p-0"
                              : "hide-psuedo color-white-30 p-0",
                          children: "Knocks Out ( extinguished )",
                        }),
                      ],
                    }),
                    (0, r.jsx)("span", {
                      className: "flex-column-center hide-psuedo p-0",
                      children: (0, r.jsxs)("p", {
                        children: [
                          "if ",
                          (0, v.XX)(i),
                          " at @",
                          (0, r.jsx)("span", {
                            className: "".concat(
                              g().italic,
                              " hide-psuedo p-0"
                            ),
                            children: n,
                          }),
                          " beyond barrier",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          eR = (e) => {
            let {
                inOrOut: t,
                buyOrSell: s,
                upOrDown: a,
                currentExpiryDate: i,
                strikeAmount: n = "",
                barrierAmount: l = "",
              } = e,
              { underlyingCurrency: o } = (0, N.qr)(),
              c = (0, r.jsx)(r.Fragment, {}),
              d = (0, y.p6)(i, y.Nn, y.KJ);
            return (
              (c = (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: "display-inline",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "nowrap tablet-display-inline",
                        children: [
                          s,
                          " ",
                          a,
                          " and ",
                          t,
                          " and pay premium if you think",
                          (0, r.jsx)("span", {
                            className: "ml-6 mr-6 mt-2 display-inline",
                            children: (0, v.XX)(o, "display-inline"),
                          }),
                        ],
                      }),
                      "@ ",
                      (0, r.jsx)("i", { className: "nowrap", children: d }),
                      " ",
                      a,
                      " from ",
                      n,
                      " and not ",
                      t,
                      "side (",
                      "BUY" === s
                        ? "DOWN" === a
                          ? "IN" === t
                            ? (0, r.jsx)("span", {
                                className: "display-inline",
                                children: "<",
                              })
                            : (0, r.jsx)("span", {
                                className: "display-inline",
                                children: ">",
                              })
                          : "IN" === t
                          ? (0, r.jsx)("span", {
                              className: "display-inline",
                              children: ">",
                            })
                          : (0, r.jsx)("span", {
                              className: "display-inline",
                              children: "<",
                            })
                        : "DOWN" === a
                        ? "IN" === t
                          ? (0, r.jsx)("span", {
                              className: "display-inline",
                              children: ">",
                            })
                          : (0, r.jsx)("span", {
                              className: "display-inline",
                              children: "<",
                            })
                        : "IN" === t
                        ? (0, r.jsx)("span", {
                            className: "display-inline",
                            children: "<",
                          })
                        : (0, r.jsx)("span", {
                            className: "display-inline",
                            children: ">",
                          }),
                      ") ",
                      l,
                    ],
                  }),
                  (0, r.jsx)("span", {
                    className: "display-inline ml-6",
                    children: "if not, premium lost.",
                  }),
                ],
              })),
              (0, r.jsx)("p", { className: g().description, children: c })
            );
          },
          eU = s(13701),
          eM = s.n(eU);
        let eY = (e, t, s) =>
            e
              ? Object.keys(e).filter((e) =>
                  "DOWN" === s
                    ? parseFloat(e) >= parseFloat(t)
                    : parseFloat(e) <= parseFloat(t)
                )
              : [],
          eX = (e, t, s) =>
            e
              ? Object.keys(e).filter((e) =>
                  "DOWN" === s
                    ? parseFloat(e) < parseFloat(t)
                    : parseFloat(e) > parseFloat(t)
                )
              : [];
        var eq = s(98315),
          eK = s(64729),
          eG = s(15922),
          eW = s(88144),
          e$ = s(82649),
          ez = s(837),
          eH = () =>
            (0, eW.a)({
              initialData: "0",
              queryKey: ["BASLINE_YIELD"],
              queryFn: () => (0, e$.Sp)("BASLINE_YIELD"),
            }),
          eV = s(5019),
          eJ = s(61228),
          eQ = s(1958),
          e0 = s(15229),
          e1 = s(48120),
          e2 = s(48104),
          e5 = s(37422),
          e3 = s(74676),
          e4 = s(87612),
          e6 = s(25811),
          e8 = s(4389),
          e7 = s(69824),
          e9 = s(96967),
          te = s(36703),
          tt = s(92402),
          ts = s(66780),
          ta = s(53227),
          ti = s(72249),
          tr = s(43681),
          tn = s(67277),
          tl = s(91553),
          to = s(20448),
          tc = s(58013),
          td = s(41664),
          tu = s.n(td),
          tm = s(39332);
        let th = (e) => {
          var t;
          let {
              marketOutlook: s,
              baselineYield: a,
              showInstructions: i,
              isContentVisible: l = !0,
              setStep: o,
            } = e,
            c = (0, eG.F)(),
            d = (0, tm.useRouter)(),
            u = (0, tm.usePathname)(),
            {
              expiryList: m,
              getContractsByExpiry: h,
              currentCurrencyPair: p,
              spotPrices: w,
              currencyPrecision: f,
              ithacaSDK: g,
              systemInfo: b,
              currentSpotPrice: S,
              underlyingCurrency: C,
            } = (0, N.qr)(),
            [I, D] = (0, n.useState)(),
            { showOrderErrorToast: k } = (0, V.Z)(),
            {
              collateralSummary: P,
              showOrderConfirmationToastAndRefetchData: L,
            } = (0, J.F)(),
            E =
              null === (t = P.USDC) || void 0 === t
                ? void 0
                : t.availableCollateral,
            O = (0, e2.t)({ chainId: (0, to.b)().id }),
            [_, B] = (0, n.useState)([]),
            [A, R] = (0, n.useState)(""),
            [U, M] = (0, n.useState)(""),
            [Y, X] = (0, n.useState)([]),
            [q, K] = (0, n.useState)([]),
            [G, W] = (0, n.useState)([]),
            [$, z] = (0, n.useState)("1"),
            [Q, ee] = (0, n.useState)(0),
            [et, es] = (0, n.useState)(0),
            [ei, er] = (0, n.useState)("0"),
            [en, el] = (0, n.useState)("".concat(m[0])),
            [eo, ec] = (0, n.useState)(""),
            [ed, eu] = (0, n.useState)(0),
            [em, eh] = (0, n.useState)(-1),
            [ep, ex] = (0, n.useState)(!1),
            ew = { [T.WL.RANGE]: 0.003, [T.WL.BULL]: 3e-6, [T.WL.BEAR]: 3e-6 },
            { unitPrice: ej, isLoading: ef } = (0, ea.k)({
              isForward: !1,
              optionType: T.j6[s][0].payoff,
              expiryDate: Number(en),
              strike: A,
              side: T.j6[s][0].side,
              currency: C,
            }),
            { unitPrice: eg, isLoading: eb } = (0, ea.k)({
              isForward: !1,
              optionType: T.j6[s][1].payoff,
              expiryDate: Number(en),
              strike: U,
              side: T.j6[s][1].side,
              currency: C,
            }),
            ey = async (e) => {
              if (!O) return;
              let t = O.readContract({
                  address: e9.U[O.chain.id].aavePool,
                  abi: ts.s,
                  functionName: "getReserveData",
                  args: [e],
                }),
                s = await O.readContract({
                  address: b.fundlockAddress,
                  abi: (0, eV.V)([
                    "function tokenStrategies(address token) external view returns(address)",
                  ]),
                  functionName: "tokenStrategies",
                  args: [e],
                });
              if (!(0, eJ.E)(s, eQ.DR)) {
                let e = O.readContract({
                    address: s,
                    abi: ta.b,
                    functionName: "maxManagingRatio",
                  }),
                  [a, i] = await Promise.all([t, e]);
                ec(
                  (
                    Number(
                      (0, tr.Fv)(
                        (0, tn.G)({
                          rate: a.currentLiquidityRate.toString(),
                          duration: tt.E,
                        }),
                        tl.YL
                      )
                    ) *
                    Number((0, e0.b)(i, 18)) *
                    100
                  ).toFixed(2)
                );
              }
            },
            eN = async (e, t, s) => {
              let { data: a } = await (0, te.hO)(e, s);
              if (!a) return;
              let i = a.query,
                r = i / 100,
                n = e === b.tokenAddress.USDC ? Number(t) : Number(t) * S;
              0 !== n && (eu(i), eh(((0.045 * r * 365) / n) * 100));
            };
          (0, n.useEffect)(() => {
            let e = m.filter(
              (e) => (0, y.cK)("".concat(e), y.Nn).diff(new Date(), "day") >= 7
            );
            el("".concat(e[0]));
          }, [m]),
            (0, n.useEffect)(() => {
              let { payoff: e, strikeIndex: t } = T.j6[s][0],
                { strikeIndex: a } = T.j6[s][1],
                i = w[p],
                r = Object.values(
                  Object.keys(h(en, e))
                    .map((e) => ({ name: e, value: e }))
                    .map((e) => e.name)
                ),
                n = r.sort(
                  (e, t) =>
                    Math.abs(i - parseFloat(e)) - Math.abs(i - parseFloat(t))
                )[0],
                l = r.filter(
                  (e) => Number(e) - i <= 400 && Number(e) - i >= -400
                ),
                o = l.sort().findIndex((e) => e === n),
                c = o + t,
                d = o + a;
              ev(
                l[c < 0 ? 0 : c >= l.length ? l.length - 1 : c],
                l[d < 0 ? 0 : d >= l.length ? l.length - 1 : d],
                l
              ),
                B(r),
                z("".concat(E || 50));
            }, [P, s]);
          let ev = (e, t, s) => {
            X(s.filter((e) => e !== t).sort()),
              K(s.filter((t) => t !== e).sort()),
              R(e),
              M(t);
          };
          (0, n.useEffect)(() => {
            if (
              (0, Z.E5)(Number($)) ||
              (0, Z.E5)(Number(A)) ||
              (0, Z.E5)(Number(U)) ||
              (0, Z.E5)(Number(eo)) ||
              (0, Z.E5)(a) ||
              ef ||
              eb
            )
              console.log(
                "DEBUGGING: ERROR: Invalid input values. Please check the input values."
              );
            else {
              let { payoff: e, side: t } = T.j6[s][0],
                { side: i } = T.j6[s][1],
                r = h(en, e),
                n = [
                  { contractId: r[A].contractId, quantity: "1", side: t },
                  { contractId: r[U].contractId, quantity: "1", side: i },
                ],
                l = [
                  { ...r[A], ...n[0], premium: (0, Z.Dx)(ej) },
                  { ...r[U], ...n[1], premium: (0, Z.Dx)(eg) },
                ],
                o = Math.max(Number(A), Number(U)),
                c = Math.min(Number(A), Number(U));
              W((0, F.s)(l, { min: c - 300, max: o + 300 }, !0));
              let d = (0, y.cK)(en, y.Nn).diff(new Date()) / 1e3 / tt.E,
                u = Number($) * (1 + a * d),
                m = Math.max(Number(eo) / 100, a + 0.005),
                p = (Number($) * (1 + a * d)) / (1 + m * d),
                x = Number($) - p,
                w = u - Number($),
                j = w / Number($) / d,
                g = j + em / 100,
                b = (0, H.calculateNetPrice)(
                  n,
                  [(0, Z.Dx)(ej), (0, Z.Dx)(eg)],
                  f.strike
                ),
                N = x / Number(b),
                v =
                  (s === T.WL.RANGE ? 1 : Math.abs(Number(A) - Number(U))) * N,
                S = w + v,
                C = S / Number($) / d,
                I = C + em / 100;
              if (
                (console.table({
                  target: u,
                  depositAmount: p,
                  investmentAmount: x,
                  minAbsReturn: w,
                  minYield: j,
                  minYieldWAirdrop: g,
                  orderPremium: b,
                  optionNotional: N,
                  optionMaxPayout: v,
                  maxAbsReturn: S,
                  maxYield: C,
                  maxYieldWAirdrop: I,
                  currentAaveYield: eo,
                  ajustedAaveYield: m,
                  airdropYield: em,
                  baselineYield: a,
                  yearFrac: d,
                }),
                console.log("#### END DEBUGGING #####"),
                x < 0)
              ) {
                ex(!0),
                  console.log(
                    "ERROR: Investment amount is negative.Relation between Aave Yield and Min yield cannot be guaranteed."
                  );
                return;
              }
              let D = N.toFixed(4);
              if (Number(D) < ew[s]) {
                ex(!0),
                  es(0),
                  ee(0),
                  er("0"),
                  console.log(
                    "ERROR: Trade size is too low. The chosen trade needs to cost less!"
                  );
                return;
              }
              ex(!1),
                es(w),
                ee(S),
                er((100 * I).toFixed(2)),
                eP([
                  { contractId: r[A].contractId, quantity: D, side: t },
                  { contractId: r[U].contractId, quantity: D, side: i },
                ]);
            }
          }, [$, P, A, U, em, eo, a, ef, eb, s, en, ej, eg, f]);
          let eC = (0, n.useMemo)(
              () =>
                -1 === em
                  ? (0, r.jsx)(r.Fragment, {})
                  : "".concat(
                      (100 * Number(a) + Number(em)).toFixed(2),
                      "% APY"
                    ),
              [a, em]
            ),
            eI = (0, n.useMemo)(
              () =>
                Number(ei)
                  ? "".concat(Number(ei).toFixed(2), "% APY")
                  : (0, r.jsx)(r.Fragment, {}),
              [ei]
            ),
            eD = (0, n.useMemo)(
              () =>
                et && ed
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          children: (0, Z.uM)(et, "string", "USDC", 3),
                        }),
                        (0, v.XX)("USDC"),
                        (0, r.jsx)("span", { children: "USDC" }),
                        "+",
                        (0, r.jsxs)("span", {
                          children: [
                            Math.round(
                              (ed *
                                (0, y.cK)(en, y.Nn).diff(new Date(), "days")) /
                                100
                            ),
                            " ",
                            "ITHACA",
                          ],
                        }),
                        (0, r.jsx)(ti.Z, {}),
                        "*",
                      ],
                    })
                  : (0, r.jsx)(r.Fragment, {}),
              [et, ed, en]
            ),
            ek = (0, n.useMemo)(
              () =>
                Q && ed
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          children: (0, Z.uM)(Q, "string", "USDC", 3),
                        }),
                        (0, v.XX)("USDC"),
                        (0, r.jsx)("span", { children: "USDC" }),
                        "+",
                        (0, r.jsxs)("span", {
                          children: [
                            Math.round(
                              (ed *
                                (0, y.cK)(en, y.Nn).diff(new Date(), "days")) /
                                100
                            ),
                            " ",
                            "ITHACA",
                          ],
                        }),
                        (0, r.jsx)(ti.Z, {}),
                        "*",
                      ],
                    })
                  : (0, r.jsx)(r.Fragment, {}),
              [Q, ed, en]
            ),
            eP = async (e) => {
              let t = (0, H.calculateNetPrice)(
                  e,
                  [(0, Z.Dx)(ej), (0, Z.Dx)(eg)],
                  f.strike
                ),
                s = {
                  clientOrderId: (0, H.createClientOrderId)(),
                  totalNetPrice: t,
                  legs: e,
                };
              try {
                let [e, t] = await Promise.all([
                  g.calculation.estimateOrderLockPositioned(s),
                  g.calculation.estimateOrderFeesExtended(s),
                ]);
                D({
                  order: s,
                  orderLock: e,
                  orderFees: t.estimation,
                  orderFeesLocked: t.toBeLocked,
                });
              } catch (e) {
                D({
                  order: s,
                  orderLock: null,
                  orderFees: null,
                  orderFeesLocked: null,
                }),
                  console.error(
                    "Order estimation for position builder failed",
                    e
                  );
              }
            },
            eL = async () => {
              if (I)
                try {
                  await g.orders.newOrder(
                    I.order,
                    "Principal Protected ".concat(s)
                  ),
                    L(),
                    "/onboarding" === u && d.push("/dashboard/trading");
                } catch (e) {
                  k(null == e ? void 0 : e.message),
                    console.error("Failed to submit order", e);
                }
            };
          return (
            (0, n.useEffect)(() => {
              eN(
                b.tokenAddress.USDC,
                $,
                (0, e1.v)($, b.tokenDecimals.USDC).toString()
              );
            }, [$, P, b]),
            (0, n.useEffect)(() => {
              ey(b.tokenAddress.USDC);
            }, [b]),
            (0, r.jsx)(r.Fragment, {
              children:
                l &&
                (0, r.jsxs)("div", {
                  className: "tw-space-y-6 tw-pt-2 lg:tw-space-y-5 ",
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-space-y-1",
                      children: (0, r.jsx)("div", {
                        className:
                          "tw-flex tw-flex-col tw-gap-5 lg:tw-flex-row lg:tw-items-start",
                        children: (0, r.jsxs)("div", {
                          className: "tw-space-y-2 tw-text-ithaca-white-60",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                              children: [
                                (0, r.jsxs)("span", {
                                  children: [
                                    "Available Collateral on Ithaca :",
                                    " ",
                                    0 !== E ? (0, Z.uM)(E, "USDC") : "-",
                                  ],
                                }),
                                " ",
                                (0, v.XX)("USDC"),
                                " ",
                                (0, r.jsx)("span", { children: "USDC" }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "tw-flex tw-items-end tw-gap-2",
                              children: [
                                (0, r.jsx)(eS.Z, {
                                  label: "Expiry Date",
                                  className: "tw-flex-grow",
                                  options: m
                                    .filter(
                                      (e) =>
                                        (0, y.cK)("".concat(e), y.Nn).diff(
                                          new Date(),
                                          "day"
                                        ) >= 7
                                    )
                                    .map((e) => ({
                                      name: (0, y.p6)(e.toString(), y.Nn, y.KJ),
                                      value: e.toString(),
                                    })),
                                  onChange: (e) => {
                                    el(e);
                                  },
                                  value: {
                                    name: (0, y.p6)(en.toString(), y.Nn, y.KJ),
                                    value: en.toString(),
                                  },
                                }),
                                (0, r.jsx)(x.Z, {
                                  label: "Size",
                                  className: "tw-flex-grow",
                                  icon: (0, v.XX)("USDC"),
                                  value: $,
                                  onChange: (e) => z(e.target.value),
                                }),
                                (0, r.jsx)(e5.Z, {
                                  title: "All",
                                  className: "tw-flex-shrink-0 tw-px-4",
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: () => {
                                    z("".concat(P.USDC.availableCollateral));
                                  },
                                  children: "All",
                                }),
                                (0, r.jsx)(eS.Z, {
                                  label: "Strike 1",
                                  className: "tw-flex-grow",
                                  options: Y.map((e) => ({
                                    name: e,
                                    value: e,
                                  })),
                                  onChange: (e) => {
                                    ev(e, U, _);
                                  },
                                  value: { name: A, value: A },
                                }),
                                (0, r.jsx)(eS.Z, {
                                  label: "Strike 2",
                                  className: "tw-flex-grow",
                                  options: q.map((e) => ({
                                    name: e,
                                    value: e,
                                  })),
                                  onChange: (e) => {
                                    ev(A, e, _);
                                  },
                                  value: { name: U, value: U },
                                }),
                              ],
                            }),
                            ep
                              ? (0, r.jsxs)("div", {
                                  className:
                                    "tw-relative tw-mt-2 tw-flex tw-gap-1 tw-text-xs tw-text-[var(--red-20)]",
                                  children: [
                                    "Insufficient collateral for selected strategy,",
                                    " ",
                                    (0, r.jsx)("span", {
                                      className:
                                        "tw-cursor-pointer tw-underline",
                                      onClick: () =>
                                        null == o
                                          ? void 0
                                          : o(tc.OnboardingStep.DEPOSIT),
                                      children: "deposit more funds in Step 1",
                                    }),
                                    " ",
                                    "or",
                                    " ",
                                    (0, r.jsxs)(tu(), {
                                      href: "/trading/dynamic-option-strategies",
                                      className:
                                        "flex flex tw-items-end tw-gap-1 tw-underline",
                                      children: [
                                        (0, r.jsx)("span", {
                                          children: "start trading now",
                                        }),
                                        (0, r.jsx)(e8.Z, {
                                          bgColor: "#ff3f57",
                                          fillColor: "#ff3f57",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : null,
                            i &&
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                    children:
                                      "*You can use at any point the Available Collateral on Ithaca to trade",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                    children:
                                      "Yield below will only be earned on the remaining amount",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-col tw-gap-4 tw-py-2 lg:tw-flex-row",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                  children: (0, r.jsx)("span", {
                                    children: "Baseline Yield",
                                  }),
                                }),
                                i &&
                                  (0, r.jsxs)("div", {
                                    children: [
                                      "If",
                                      (0, v.XX)(C, "tw-ml-0.5 tw-inline-flex"),
                                      " @",
                                      " ",
                                      (0, y.p6)(en.toString(), y.Nn, y.KJ),
                                      "<",
                                      A > U ? U : A,
                                      " or >",
                                      A > U ? A : U,
                                    ],
                                  }),
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-min-h-[21px] tw-items-center tw-gap-1 tw-text-lg tw-text-white",
                                  children: eC,
                                }),
                                i &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                    children:
                                      "{Collateral Lending Yield ".concat(
                                        (100 * a).toFixed(),
                                        "% + Airdrop}"
                                      ),
                                  }),
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                  children: eD,
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                  children: (0, r.jsx)("span", {
                                    children: "Max Potential Yield",
                                  }),
                                }),
                                i &&
                                  (0, r.jsx)("div", {
                                    children: (() => {
                                      switch (s) {
                                        case T.WL.RANGE:
                                          return (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, v.XX)(
                                                C,
                                                "tw-ml-0.5 tw-inline-flex"
                                              ),
                                              " @",
                                              " ",
                                              (0, y.p6)(
                                                en.toString(),
                                                y.Nn,
                                                y.KJ
                                              ),
                                              ">",
                                              A > U ? U : A,
                                              " and <",
                                              A > U ? A : U,
                                            ],
                                          });
                                        case T.WL.BULL:
                                          return (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, v.XX)(
                                                C,
                                                "tw-ml-0.5 tw-inline-flex"
                                              ),
                                              " @",
                                              " ",
                                              (0, y.p6)(
                                                en.toString(),
                                                y.Nn,
                                                y.KJ
                                              ),
                                              ">",
                                              A > U ? A : U,
                                            ],
                                          });
                                        case T.WL.BEAR:
                                          return (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, v.XX)(
                                                C,
                                                "tw-ml-0.5 tw-inline-flex"
                                              ),
                                              " @",
                                              " ",
                                              (0, y.p6)(
                                                en.toString(),
                                                y.Nn,
                                                y.KJ
                                              ),
                                              "<",
                                              A > U ? U : A,
                                            ],
                                          });
                                      }
                                    })(),
                                  }),
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-min-h-[21px] tw-items-center tw-gap-1 tw-text-lg  tw-text-white",
                                  children: eI,
                                }),
                                i &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                    children:
                                      "{(Collateral Lending Yield ".concat(
                                        (100 * a).toFixed(),
                                        "% + Strategy Yield) + Airdrop}"
                                      ),
                                  }),
                                (0, r.jsx)("div", {
                                  className:
                                    "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                  children: ek,
                                }),
                              ],
                            }),
                          ],
                        }),
                        i &&
                          (0, r.jsxs)("div", {
                            className:
                              "tw-py-1 tw-font-roboto tw-text-xs tw-text-ithaca-white-60",
                            children: [
                              (0, r.jsx)("div", {
                                children:
                                  "*APY subject to not using deposited amount as collateral for further trading.",
                              }),
                              (0, r.jsx)("div", {
                                children:
                                  "**Yield estimated referencing 45M$ FDMV & indicative points to token conversion.",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "!-tw-mt-3 tw-w-full tw-pt-7",
                      children: [
                        (0, r.jsx)("div", {
                          className: "tw-font-semibold",
                          children: "Payoff Diagram",
                        }),
                        (0, r.jsx)(
                          j.Z,
                          {
                            isOnboarding: !0,
                            showKeys: !1,
                            chartData: G,
                            height: 144,
                            minYield: (100 * a + Number(em)).toFixed(2),
                            maxYield: ei,
                            customDomain: { min: 0, max: 1 },
                            id: "full-onboarding-chart",
                          },
                          c
                        ),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-6 md:tw-flex-row",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "tw-flex tw-flex-1 tw-items-end tw-gap-2 md:tw-items-center",
                          children: [
                            (0, r.jsx)("p", {
                              className:
                                "tw-whitespace-nowrap tw-pb-[0.625rem] md:tw-pb-0",
                              children: "Settlement in",
                            }),
                            (0, r.jsx)(e4.Z, {
                              label: "Next Auction",
                              value: (0, r.jsx)(e3.Z, {}),
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "tw-flex tw-w-full tw-flex-1",
                          children: (0, r.jsx)(e7.Z, {
                            children: (e) => {
                              let {
                                connected: t,
                                openConnectModal: s,
                                openAccountModal: a,
                              } = e;
                              return (0, r.jsx)("div", {
                                className: "tw-relative tw-flex tw-flex-1",
                                children: (0, r.jsx)(e6.Z, {
                                  connected: t,
                                  openConnectModal: s,
                                  openAccountModal: a,
                                  isSubmitButtonDisabled: !1,
                                  submitAuction: eL,
                                  onlyProtiftableOrders: !1,
                                  orderSummary: I,
                                }),
                              });
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            })
          );
        };
        var tp = (e) => {
          var t;
          let {
              marketOutlook: s,
              setMarketOutlook: a,
              baselineYield: l,
              showInstructions: o,
              isContentVisible: c = !0,
              setStep: d,
            } = e,
            u = (0, eG.F)(),
            m = (0, tm.useRouter)(),
            h = (0, tm.usePathname)(),
            {
              expiryList: p,
              getContractsByExpiry: w,
              spotPrices: f,
              currentCurrencyPair: g,
              contractList: b,
              currencyPrecision: S,
              ithacaSDK: I,
              systemInfo: k,
              currentSpotPrice: P,
              underlyingCurrency: L,
            } = (0, N.qr)(),
            [E, O] = (0, n.useState)(),
            { showOrderErrorToast: F } = (0, V.Z)(),
            {
              collateralSummary: _,
              showOrderConfirmationToastAndRefetchData: B,
            } = (0, J.F)(),
            A =
              null === (t = _.USDC) || void 0 === t
                ? void 0
                : t.availableCollateral,
            R = (0, e2.t)({ chainId: (0, to.b)().id }),
            [U, M] = (0, n.useState)([]),
            [Y, X] = (0, n.useState)(""),
            [q, G] = (0, n.useState)(""),
            [W, $] = (0, n.useState)([]),
            [z, Q] = (0, n.useState)([]),
            [ee, et] = (0, n.useState)([]),
            [es, ei] = (0, n.useState)("1"),
            [er, en] = (0, n.useState)(0),
            [el, eo] = (0, n.useState)(0),
            [ec, ed] = (0, n.useState)("0"),
            [eu, em] = (0, n.useState)("".concat(p[0])),
            [eh, ep] = (0, n.useState)(""),
            [ex, ew] = (0, n.useState)(0),
            [ej, ef] = (0, n.useState)(-1),
            [eg, eb] = (0, n.useState)(!1),
            ey = { [T.WL.BULL]: 3e-6, [T.WL.BEAR]: 3e-6 },
            { payoff: eN, side: ev } = T.j6[s][0],
            { side: eC } = T.j6[s][1],
            { unitPrice: eI, isLoading: eD } = (0, ea.k)({
              isForward: !1,
              optionType: T.j6[s][0].payoff,
              expiryDate: Number(eu),
              strike: Y,
              side: ev,
              currency: L,
            }),
            { unitPrice: ek, isLoading: eP } = (0, ea.k)({
              isForward: !1,
              optionType: T.j6[s][1].payoff,
              expiryDate: Number(eu),
              strike: q,
              side: eC,
              currency: L,
            }),
            { unitPrice: eL, isLoading: eE } = (0, ea.k)({
              isForward: !1,
              optionType: "Binary".concat(eN),
              expiryDate: Number(eu),
              strike: q,
              side: eC,
              currency: L,
            }),
            eO = async (e) => {
              if (!R) return;
              let t = R.readContract({
                  address: e9.U[R.chain.id].aavePool,
                  abi: ts.s,
                  functionName: "getReserveData",
                  args: [e],
                }),
                s = await R.readContract({
                  address: k.fundlockAddress,
                  abi: (0, eV.V)([
                    "function tokenStrategies(address token) external view returns(address)",
                  ]),
                  functionName: "tokenStrategies",
                  args: [e],
                });
              if (!(0, eJ.E)(s, eQ.DR)) {
                let e = R.readContract({
                    address: s,
                    abi: ta.b,
                    functionName: "maxManagingRatio",
                  }),
                  [a, i] = await Promise.all([t, e]);
                ep(
                  (
                    Number(
                      (0, tr.Fv)(
                        (0, tn.G)({
                          rate: a.currentLiquidityRate.toString(),
                          duration: tt.E,
                        }),
                        tl.YL
                      )
                    ) *
                    Number((0, e0.b)(i, 18)) *
                    100
                  ).toFixed(2)
                );
              }
            },
            eF = async (e, t, s) => {
              let { data: a } = await (0, te.hO)(e, s);
              if (!a) return;
              let i = a.query,
                r = i / 100,
                n = e === k.tokenAddress.USDC ? Number(t) : Number(t) * P;
              0 !== n && (ew(i), ef(((0.045 * r * 365) / n) * 100));
            };
          (0, n.useEffect)(() => {
            let e = p.filter(
              (e) => (0, y.cK)("".concat(e), y.Nn).diff(new Date(), "day") >= 7
            );
            em("".concat(e[0]));
          }, [p]),
            (0, n.useEffect)(() => {
              let { payoff: e, strikeIndex: t } = T.j6[s][0],
                { strikeIndex: a } = T.j6[s][1],
                i = f[g],
                r = Object.values(
                  Object.keys(w(eu, e))
                    .map((e) => ({ name: e, value: e }))
                    .map((e) => e.name)
                ),
                n = r.sort(
                  (e, t) =>
                    Math.abs(i - parseFloat(e)) - Math.abs(i - parseFloat(t))
                )[0],
                l = r.filter(
                  (e) => Number(e) - i <= 400 && Number(e) - i >= -400
                ),
                o = l.sort().findIndex((e) => e === n),
                c = o + t,
                d = o + a;
              eZ(
                l[c < 0 ? 0 : c >= l.length ? l.length - 1 : c],
                l[d < 0 ? 0 : d >= l.length ? l.length - 1 : d],
                l
              ),
                M(r),
                ei("".concat(A || 50));
            }, [_, s]);
          let eZ = (e, t, s) => {
            if (
              ($(s.filter((e) => e !== t).sort()),
              Q(s.filter((t) => t !== e).sort()),
              X(e),
              t < e)
            ) {
              let t = s.findIndex((t) => t === e) + 1;
              G(s[t]);
            } else G(t);
          };
          (0, n.useMemo)(() => {
            let e = (0, y.cK)(eu, y.Nn).diff(new Date(), "days");
            return Y && q && eu && P && !(e <= 0)
              ? (l + (Math.abs(Number(q) - Number(Y)) / P) * (365 / e)).toFixed(
                  2
                )
              : "0.00";
          }, [Y, q, eu, P]),
            (0, n.useEffect)(() => {
              if (
                (0, Z.E5)(Number(es)) ||
                (0, Z.E5)(Number(Y)) ||
                (0, Z.E5)(Number(q)) ||
                (0, Z.E5)(Number(eh)) ||
                (0, Z.E5)(l) ||
                eD ||
                eP ||
                eE
              )
                console.log(
                  "DEBUGGING: ERROR: Invalid input values. Please check the input values."
                );
              else {
                let { payoff: e, side: t } = T.j6[s][0],
                  { side: a } = T.j6[s][1],
                  r = w(eu, e),
                  n = w(eu, "Binary".concat(e)),
                  o = s === i.BULL,
                  c = o
                    ? [
                        { contractId: r[Y].contractId, quantity: "1", side: t },
                        { contractId: r[q].contractId, quantity: "1", side: a },
                        {
                          contractId: n[q].contractId,
                          quantity: "".concat(Number(q) - Number(Y)),
                          side: a,
                        },
                      ]
                    : [
                        { contractId: r[q].contractId, quantity: "1", side: a },
                        { contractId: r[Y].contractId, quantity: "1", side: t },
                        {
                          contractId: n[Y].contractId,
                          quantity: "".concat(Number(q) - Number(Y)),
                          side: t,
                        },
                      ],
                  d = Math.max(Number(Y), Number(q)),
                  u = Math.min(Number(Y), Number(q));
                et(
                  o
                    ? (0, T.xY)(Number(eu), u, Number(q))
                    : (0, T.uK)(Number(eu), u, d)
                );
                let m = (0, y.cK)(eu, y.Nn).diff(new Date()) / 1e3 / tt.E,
                  h = Number(es) * (1 + l * m),
                  p = Math.max(Number(eh) / 100, l + 0.005),
                  x = (Number(es) * (1 + l * m)) / (1 + p * m),
                  j = Math.max(Number(es) - x, 0),
                  f = h - Number(es),
                  g = f / Number(es) / m,
                  b = g + ej / 100,
                  N = (0, H.calculateNetPrice)(
                    c,
                    [(0, Z.Dx)(eI), (0, Z.Dx)(ek), (0, Z.Dx)(eL)],
                    S.strike
                  ),
                  v = j / Number(N),
                  C = Math.abs(Math.abs(Number(q) - Number(Y))) * v,
                  I = f + C,
                  D = I / Number(es) / m,
                  k = D + ej / 100;
                if (
                  (console.log(c),
                  console.table({
                    target: h,
                    depositAmount: x,
                    investmentAmount: j,
                    minAbsReturn: f,
                    minYield: g,
                    minYieldWAirdrop: b,
                    orderPremium: N,
                    optionNotional: v,
                    optionMaxPayout: C,
                    maxAbsReturn: I,
                    maxYield: D,
                    maxYieldWAirdrop: k,
                    currentAaveYield: eh,
                    airdropYield: ej,
                    baselineYield: l,
                    yearFrac: m,
                  }),
                  j < 0)
                ) {
                  eb(!0),
                    eo(0),
                    en(0),
                    ed("0"),
                    console.log(
                      "ERROR: Investment amount is negative.Relation between Aave Yield and Min yield cannot be guaranteed."
                    );
                  return;
                }
                let P = v.toFixed(4),
                  L = ((Number(q) - Number(Y)) * Number(P)).toFixed(4);
                if (Number(P) < ey[s]) {
                  eb(!0),
                    console.log(
                      "ERROR: Trade size is too low. The chosen trade needs to cost less!"
                    );
                  return;
                }
                eb(!1),
                  eo(f),
                  en(I),
                  ed((100 * k).toFixed(2)),
                  e_(
                    o
                      ? [
                          { contractId: r[Y].contractId, quantity: P, side: t },
                          { contractId: r[q].contractId, quantity: P, side: a },
                          { contractId: n[q].contractId, quantity: L, side: a },
                        ]
                      : [
                          { contractId: r[q].contractId, quantity: P, side: a },
                          { contractId: r[Y].contractId, quantity: P, side: t },
                          { contractId: n[Y].contractId, quantity: L, side: t },
                        ]
                  );
              }
            }, [es, _, Y, q, ej, eh, l, eD, eP, s, eu, eI, ek, S, eE, eL]);
          let e_ = async (e) => {
              let t = (0, H.calculateNetPrice)(
                  e,
                  [(0, Z.Dx)(eI), (0, Z.Dx)(ek), (0, Z.Dx)(eL)],
                  S.strike
                ),
                s = {
                  clientOrderId: (0, H.createClientOrderId)(),
                  totalNetPrice: t,
                  legs: e,
                };
              try {
                let [e, t] = await Promise.all([
                  I.calculation.estimateOrderLockPositioned(s),
                  I.calculation.estimateOrderFeesExtended(s),
                ]);
                O({
                  order: s,
                  orderLock: e,
                  orderFees: t.estimation,
                  orderFeesLocked: t.toBeLocked,
                });
              } catch (e) {
                O({
                  order: s,
                  orderLock: null,
                  orderFees: null,
                  orderFeesLocked: null,
                }),
                  console.error(
                    "Order estimation for position builder failed",
                    e
                  );
              }
            },
            eB = async () => {
              if (E)
                try {
                  await I.orders.newOrder(
                    E.order,
                    "Principal Protected ".concat(s)
                  ),
                    B(),
                    "/onboarding" === h && m.push("/dashboard/trading");
                } catch (e) {
                  F(null == e ? void 0 : e.message),
                    console.error("Failed to submit order", e);
                }
            },
            eA = (0, n.useMemo)(
              () =>
                -1 === ej
                  ? (0, r.jsx)(r.Fragment, {})
                  : "".concat(
                      (100 * Number(l) + Number(ej)).toFixed(2),
                      "% APY"
                    ),
              [l, ej]
            ),
            eT = (0, n.useMemo)(
              () =>
                Number(ec)
                  ? "".concat(Number(ec).toFixed(2), "% APY")
                  : (0, r.jsx)(r.Fragment, {}),
              [ec]
            ),
            eR = (0, n.useMemo)(
              () =>
                el && ex
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          children: (0, Z.uM)(el, "string", "USDC", 3),
                        }),
                        (0, v.XX)("USDC"),
                        (0, r.jsx)("span", { children: "USDC" }),
                        "+",
                        (0, r.jsxs)("span", {
                          children: [
                            Math.round(
                              (ex *
                                (0, y.cK)(eu, y.Nn).diff(new Date(), "days")) /
                                100
                            ),
                            " ",
                            "ITHACA",
                          ],
                        }),
                        (0, r.jsx)(ti.Z, {}),
                        "*",
                      ],
                    })
                  : (0, r.jsx)(r.Fragment, {}),
              [el, ex, eu]
            ),
            eU = (0, n.useMemo)(
              () =>
                er && ex
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("span", {
                          children: (0, Z.uM)(er, "string", "USDC", 3),
                        }),
                        (0, v.XX)("USDC"),
                        (0, r.jsx)("span", { children: "USDC" }),
                        "+",
                        (0, r.jsxs)("span", {
                          children: [
                            Math.round(
                              (ex *
                                (0, y.cK)(eu, y.Nn).diff(new Date(), "days")) /
                                100
                            ),
                            " ",
                            "ITHACA",
                          ],
                        }),
                        (0, r.jsx)(ti.Z, {}),
                        "*",
                      ],
                    })
                  : (0, r.jsx)(r.Fragment, {}),
              [er, ex, eu]
            );
          return (
            (0, n.useEffect)(() => {
              eF(
                k.tokenAddress.USDC,
                es,
                (0, e1.v)(es, k.tokenDecimals.USDC).toString()
              );
            }, [es, _, k, eF]),
            (0, n.useEffect)(() => {
              eO(k.tokenAddress.USDC);
            }, [k]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: D()("tw-grid tw-w-full tw-max-w-full tw-py-2"),
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-text-white",
                      children: "Select Market Outlook",
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-mb-4 tw-mt-2 tw-w-48",
                      children: (0, r.jsx)(C.Z, {
                        options: K,
                        selectedOption: s,
                        name: "shark-fin-strategy-selector",
                        onChange: (e) => a(e),
                      }),
                    }),
                    o &&
                      (0, r.jsxs)("div", {
                        className:
                          "tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                        children: [
                          (0, r.jsx)("div", {
                            children: "Earn Baseline Yield ",
                          }),
                          (0, r.jsx)("div", {
                            children:
                              "+ Leverage your Market Outlook to earn additional returns.",
                          }),
                        ],
                      }),
                  ],
                }),
                c &&
                  (0, r.jsxs)("div", {
                    className: "tw-space-y-6 tw-pt-2 lg:tw-space-y-5 ",
                    children: [
                      (0, r.jsx)("div", {
                        className: "tw-space-y-1",
                        children: (0, r.jsx)("div", {
                          className:
                            "tw-flex tw-flex-col tw-gap-5 lg:tw-flex-row lg:tw-items-start",
                          children: (0, r.jsxs)("div", {
                            className: "tw-space-y-2 tw-text-ithaca-white-60",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "tw-flex tw-items-end tw-gap-2",
                                children: [
                                  (0, r.jsx)(eS.Z, {
                                    label: "Expiry Date",
                                    className: "tw-flex-grow",
                                    options: p
                                      .filter(
                                        (e) =>
                                          (0, y.cK)("".concat(e), y.Nn).diff(
                                            new Date(),
                                            "day"
                                          ) >= 7
                                      )
                                      .map((e) => ({
                                        name: (0, y.p6)(
                                          e.toString(),
                                          y.Nn,
                                          y.KJ
                                        ),
                                        value: e.toString(),
                                      })),
                                    onChange: (e) => {
                                      em(e);
                                    },
                                    value: {
                                      name: (0, y.p6)(
                                        eu.toString(),
                                        y.Nn,
                                        y.KJ
                                      ),
                                      value: eu.toString(),
                                    },
                                  }),
                                  (0, r.jsx)(x.Z, {
                                    label: "Amount",
                                    className: "tw-min-w-28 tw-flex-grow",
                                    icon: (0, v.XX)("USDC"),
                                    value: es,
                                    onChange: (e) => ei(e.target.value),
                                  }),
                                  (0, r.jsx)(e5.Z, {
                                    title: "All",
                                    className: "tw-flex-shrink-0 tw-px-4",
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: () => {
                                      ei("".concat(_.USDC.availableCollateral));
                                    },
                                    children: "All",
                                  }),
                                  (0, r.jsx)(eS.Z, {
                                    label: "Strike 1",
                                    className: "tw-flex-grow",
                                    options: W.map((e) => ({
                                      name: e,
                                      value: e,
                                    })),
                                    onChange: (e) => {
                                      eZ(e, q, U);
                                    },
                                    value: { name: Y, value: Y },
                                  }),
                                  (0, r.jsx)(eS.Z, {
                                    label: "Strike 2",
                                    className: "tw-flex-grow",
                                    options: z.map((e) => ({
                                      name: e,
                                      value: e,
                                    })),
                                    onChange: (e) => {
                                      eZ(Y, e, U);
                                    },
                                    value: { name: q, value: q },
                                  }),
                                ],
                              }),
                              eg
                                ? (0, r.jsxs)("div", {
                                    className:
                                      "tw-relative tw-mt-2 tw-flex tw-gap-1 tw-text-xs tw-text-[var(--red-20)]",
                                    children: [
                                      "Insufficient collateral for selected strategy,",
                                      " ",
                                      (0, r.jsx)("span", {
                                        className:
                                          "tw-cursor-pointer tw-underline",
                                        onClick: () =>
                                          null == d
                                            ? void 0
                                            : d(tc.OnboardingStep.DEPOSIT),
                                        children:
                                          "deposit more funds in Step 1",
                                      }),
                                      " ",
                                      "or",
                                      " ",
                                      (0, r.jsxs)(tu(), {
                                        href: "/trading/dynamic-option-strategies",
                                        className:
                                          "flex flex tw-items-end tw-gap-1 tw-underline",
                                        children: [
                                          (0, r.jsx)("span", {
                                            children: "start trading now",
                                          }),
                                          (0, r.jsx)(e8.Z, {
                                            bgColor: "#ff3f57",
                                            fillColor: "#ff3f57",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                              o &&
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                      children:
                                        "*You can use at any point the Available Collateral on Ithaca to trade",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "tw-flex tw-gap-2 tw-text-xs lg:tw-text-sm",
                                      children:
                                        "Yield below will only be earned on the remaining amount",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsxs)("div", {
                            className: D()(
                              "tw-flex tw-flex-col tw-gap-4 tw-py-2 lg:tw-flex-row",
                              { "lg:tw-gap-2": o }
                            ),
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                    children: (0, r.jsx)("span", {
                                      children: "Baseline Yield",
                                    }),
                                  }),
                                  o &&
                                    (0, r.jsxs)("div", {
                                      children: [
                                        "If ",
                                        Y < q ? Y : q,
                                        " >",
                                        (0, v.XX)(
                                          L,
                                          "tw-ml-0.5 tw-inline-flex"
                                        ),
                                        " @",
                                        " ",
                                        (0, y.p6)(eu.toString(), y.Nn, y.KJ),
                                        " >",
                                        " ",
                                        Y > q ? Y : q,
                                      ],
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-lg  tw-text-white",
                                    children: eA,
                                  }),
                                  o &&
                                    (0, r.jsx)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                      children:
                                        "{Collateral Lending Yield ".concat(
                                          (100 * l).toFixed(),
                                          "% + Airdrop}"
                                        ),
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                    children: eR,
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: D()(
                                  "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                                  { "lg:tw-translate-x-4": o }
                                ),
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-white",
                                    children: (0, r.jsx)("span", {
                                      children: "Max Yield",
                                    }),
                                  }),
                                  o &&
                                    (0, r.jsx)("div", {
                                      children: (() => {
                                        switch (s) {
                                          case i.BULL:
                                            return (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                (0, v.XX)(
                                                  L,
                                                  "tw-ml-0.5 tw-inline-flex"
                                                ),
                                                " @",
                                                " ",
                                                (0, y.p6)(
                                                  eu.toString(),
                                                  y.Nn,
                                                  y.KJ
                                                ),
                                                ">",
                                                Y > q ? Y : q,
                                              ],
                                            });
                                          case i.BEAR:
                                            return (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                (0, v.XX)(
                                                  L,
                                                  "tw-ml-0.5 tw-inline-flex"
                                                ),
                                                " @",
                                                " ",
                                                (0, y.p6)(
                                                  eu.toString(),
                                                  y.Nn,
                                                  y.KJ
                                                ),
                                                "<",
                                                Y > q ? q : Y,
                                              ],
                                            });
                                        }
                                      })(),
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-lg  tw-text-white",
                                    children: eT,
                                  }),
                                  o &&
                                    (0, r.jsx)("div", {
                                      className:
                                        "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-leading-none tw-text-white",
                                      children:
                                        "{(Collateral Lending Yield ".concat(
                                          (100 * l).toFixed(),
                                          "% + Strategy Yield) + Airdrop}"
                                        ),
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-min-h-[20px] tw-items-center tw-gap-1 tw-text-sm tw-text-ithaca-white-60",
                                    children: eU,
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: D()(
                                  "tw-space-y-1 tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                                  { "lg:-tw-translate-x-28": o }
                                ),
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-italic tw-text-white",
                                    children: (0, r.jsx)("span", {
                                      children: "Boosted Yield",
                                    }),
                                  }),
                                  o &&
                                    (0, r.jsxs)("div", {
                                      children: [
                                        "If ",
                                        Y < q ? Y : q,
                                        " <",
                                        (0, v.XX)(
                                          L,
                                          "tw-ml-0.5 tw-inline-flex"
                                        ),
                                        " @",
                                        " ",
                                        (0, y.p6)(eu.toString(), y.Nn, y.KJ),
                                        " <",
                                        " ",
                                        Y > q ? Y : q,
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          o &&
                            (0, r.jsxs)("div", {
                              className:
                                "tw-py-1 tw-font-roboto tw-text-xs tw-text-ithaca-white-60",
                              children: [
                                (0, r.jsx)("div", {
                                  children:
                                    "*APY subject to not using deposited amount as collateral for further trading.",
                                }),
                                (0, r.jsx)("div", {
                                  children:
                                    "**Yield estimated referencing 45M$ FDMV & indicative points to token conversion.",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "!-tw-mt-2 tw-w-full",
                        children: (0, r.jsx)(
                          j.Z,
                          {
                            isOnboarding: !0,
                            showKeys: !1,
                            chartData: ee,
                            height: 144,
                            minYield: (100 * l + Number(ej)).toFixed(2),
                            maxYield: ec,
                            customDomain: { min: 0, max: 1 },
                            id: "full-onboarding-chart",
                          },
                          u
                        ),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-6 md:tw-flex-row",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "tw-flex tw-flex-1 tw-items-end tw-gap-2 md:tw-items-center",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "tw-whitespace-nowrap tw-pb-[0.625rem] md:tw-pb-0",
                                children: "Settlement in",
                              }),
                              (0, r.jsx)(e4.Z, {
                                label: "Next Auction",
                                value: (0, r.jsx)(e3.Z, {}),
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "tw-flex tw-w-full tw-flex-1",
                            children: (0, r.jsx)(e7.Z, {
                              children: (e) => {
                                let {
                                  connected: t,
                                  openConnectModal: s,
                                  openAccountModal: a,
                                } = e;
                                return (0, r.jsx)("div", {
                                  className: "tw-relative tw-flex tw-flex-1",
                                  children: (0, r.jsx)(e6.Z, {
                                    connected: t,
                                    openConnectModal: s,
                                    openAccountModal: a,
                                    isSubmitButtonDisabled: !1,
                                    submitAuction: eB,
                                    onlyProtiftableOrders: !1,
                                    orderSummary: E,
                                  }),
                                });
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        };
        ((a = i || (i = {})).BULL = "Bull"), (a.BEAR = "Bear");
        var tx = s(38291),
          tw = s(88238),
          tj = (e) => {
            let { enabled: t = !0, ...s } = e,
              { legs: a, totalNetPrice: i, timeInForce: r } = s,
              { ithacaSDK: l, currencyPrecision: o } = (0, N.qr)(),
              c = (0, n.useMemo)(
                () => ({ legs: a, customTotalNetPrice: i, timeInForce: r }),
                [a, i, r]
              ),
              d = (0, tw.Nr)(c, 200),
              u = (0, n.useCallback)(async () => {
                var e;
                let t = d.legs.map((e) => ({
                    contractId: e.contractId,
                    quantity: "".concat(e.quantity),
                    side: e.side,
                  })),
                  s = d.legs.map((e) => {
                    var t;
                    return null !== (t = e.referencePrice) && void 0 !== t
                      ? t
                      : 0;
                  }),
                  a =
                    null !== (e = d.customTotalNetPrice) && void 0 !== e
                      ? e
                      : (0, H.calculateNetPrice)(t, s, o.strike),
                  i = {
                    clientOrderId: (0, H.createClientOrderId)(),
                    totalNetPrice: a,
                    legs: t,
                    ...(d.timeInForce ? { timeInForce: d.timeInForce } : {}),
                  };
                try {
                  let [e, s] = await Promise.all([
                    l.calculation.estimateOrderLockPositioned(i),
                    l.calculation.estimateOrderFeesExtended(i),
                  ]);
                  return {
                    order: { ...i, legs: t },
                    orderLock: e,
                    orderFees: s.estimation,
                    orderFeesLocked: s.toBeLocked,
                  };
                } catch (e) {
                  return {
                    order: { ...i, legs: t },
                    orderLock: null,
                    orderFees: null,
                    orderFeesLocked: null,
                  };
                }
              }, [d, o, l.calculation]);
            return (0, eW.a)({
              queryKey: ["orderEstimation", d],
              queryFn: u,
              staleTime: 3e4,
              gcTime: 3e4,
              retry: !1,
              enabled: t && d.legs.length > 0,
            });
          },
          tf = s(69776),
          tg = (e) => {
            let {
                optionType: t,
                side: s,
                size: a,
                strike: i,
                unitPrice: r,
                enabled: l = !0,
              } = e,
              { getContractsByPayoff: o } = (0, N.qr)(),
              c = (0, n.useMemo)(
                () => ({
                  optionType: t,
                  side: s,
                  size: a,
                  strike: i,
                  unitPrice: r,
                }),
                [t, s, a, i, r]
              ),
              d = (0, tw.Nr)(c, 200);
            return (0, eW.a)({
              queryKey: ["payoffMap", d],
              queryFn: () => {
                let {
                  optionType: e,
                  side: t,
                  size: s,
                  strike: a,
                  unitPrice: i,
                } = d;
                if ((0, Z.E5)(s) || (0, Z.E5)(Number(i))) return [];
                let r = o(e)[a];
                if (!r) return [];
                let n = {
                    contractId: r.contractId,
                    quantity: "".concat(s),
                    side: t,
                  },
                  l = (0, Z.Dx)(i);
                return (0, F.s)([{ ...r, ...n, premium: l }]);
              },
              staleTime: 3e4,
              gcTime: 3e4,
              retry: !1,
              enabled: l,
            });
          },
          tb = () =>
            (0, r.jsx)("div", {
              className: g().container,
              children: (0, r.jsx)("p", {
                children:
                  "A Call Option is a contract providing the user with the right to buy an asset at a fixed price at contract expiry, while a Put Option provides the user with the equivalent right to sell.",
              }),
            });
        ef().extend(eb());
        var ty = () =>
            (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsx)("p", {
                  children:
                    "A Digital Call Option pays off if underlying asset price ends up above the strike at expiry, while a Digital Put Option pays off if underlying asset price ends up below the strike at expiry.",
                }),
                (0, r.jsx)("p", {
                  children:
                    "Bet on whether the market will finish above or below the strike and get paid accordingly.",
                }),
              ],
            }),
          tN = () =>
            (0, r.jsxs)("div", {
              className: g().container,
              children: [
                (0, r.jsx)("p", {
                  children:
                    "A Forward is a contract where the user agrees to buy or sell an asset at a fixed price and date in the future.",
                }),
                (0, r.jsx)("p", {
                  children:
                    "Gain or loss depends on the difference between the agreed price and the market price at expiry.",
                }),
              ],
            }),
          tv = s(55638),
          tS = (e) => {
            var t;
            let {
                marketOutlook: s,
                setMarketOutlook: a,
                showInstructions: i,
                isContentVisible: l = !0,
              } = e,
              o = (0, eG.F)(),
              c = (0, tm.useRouter)(),
              d = (0, tm.usePathname)(),
              {
                expiryList: u,
                getContractsByExpiry: m,
                spotPrices: h,
                currencyPrecision: p,
                ithacaSDK: w,
                currentSpotPrice: f,
                quotingParams: g,
                currentCurrencyPair: b,
                underlyingCurrency: S,
              } = (0, N.qr)(),
              [I, k] = (0, n.useState)(),
              { showOrderErrorToast: P } = (0, V.Z)(),
              {
                collateralSummary: L,
                showOrderConfirmationToastAndRefetchData: E,
              } = (0, J.F)(),
              _ =
                null === (t = L.USDC) || void 0 === t
                  ? void 0
                  : t.availableCollateral,
              [B, A] = (0, n.useState)(null),
              [R, U] = (0, n.useState)(null),
              [M, Y] = (0, n.useState)(null),
              [X, q] = (0, n.useState)(300),
              [G, W] = (0, n.useState)([]),
              [$, z] = (0, n.useState)("100"),
              Q = (0, y.Uc)(),
              ee = u.filter((e) => {
                let t = (0, y.lV)("".concat(e));
                return Q.includes(t);
              }),
              et = "".concat(ee[ee.length - 1]),
              es = (0, n.useMemo)(
                () => (B && M && $ ? (Number($) / B).toFixed(4) : "0.0000"),
                [B, M, $]
              );
            (0, n.useEffect)(() => {
              let e, t, a;
              let i = h[b],
                r = Object.values(
                  Object.keys(m(et, "Call"))
                    .map((e) => ({ name: e, value: e }))
                    .map((e) => Number(e.name))
                ).sort((e, t) => Math.abs(i - e) - Math.abs(i - t))[0];
              s === T.FZ.BULL
                ? ((e = r - 200), (t = r + 300), (a = r - 500))
                : ((e = r + 200), (t = r - 300), (a = r + 500)),
                A(e),
                U(t),
                Y(a),
                q(Math.abs(t - e));
            }, [L, s]),
              (0, n.useEffect)(() => {
                (async () => {
                  if (!(0, Z.E5)(Number($)) && B && R && M) {
                    let e, t, a;
                    let i = m(et, "Call"),
                      r = m(et, "Put"),
                      n = m(et, "BinaryCall"),
                      l = m(et, "BinaryPut");
                    s === T.FZ.BULL
                      ? ((e = [
                          {
                            ...i[B],
                            strike: B,
                            quantity: "1",
                            side: tv.V.BUY,
                            premium: 0,
                          },
                          {
                            ...i[R],
                            strike: R,
                            quantity: "1",
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...n[R],
                            strike: R,
                            quantity: "".concat(X),
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...r[B],
                            strike: B,
                            quantity: "1",
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...r[M],
                            strike: M,
                            quantity: "1",
                            side: tv.V.BUY,
                            premium: 0,
                          },
                        ]),
                        (a = R),
                        (t = M))
                      : ((e = [
                          {
                            ...r[B],
                            strike: B,
                            quantity: "1",
                            side: tv.V.BUY,
                            premium: 0,
                          },
                          {
                            ...r[R],
                            strike: R,
                            quantity: "1",
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...l[R],
                            strike: R,
                            quantity: "".concat(X),
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...i[B],
                            strike: B,
                            quantity: "1",
                            side: tv.V.SELL,
                            premium: 0,
                          },
                          {
                            ...i[M],
                            strike: M,
                            quantity: "1",
                            side: tv.V.BUY,
                            premium: 0,
                          },
                        ]),
                        (a = M),
                        (t = R));
                    let o = ee.flatMap((t) =>
                        e.map((e) =>
                          (0, eB.YK)({
                            isForward: "Forward" === e.payoff,
                            optionType: e.payoff,
                            expiryDate: t,
                            strike: "".concat(e.strike),
                            side: e.side,
                            forcedSpread: g.DIGITAL_SPREAD,
                            currentSpotPrice: f,
                            currency: S,
                          }).then((t) =>
                            t
                              ? (0, Z.Dx)(t)
                              : (0, eA.O)({
                                  midPrice: e.referencePrice,
                                  optionType: e.payoff,
                                  side: e.side,
                                  forcedSpread: g.DIGITAL_SPREAD,
                                  currentSpotPrice: f,
                                })
                          )
                        )
                      ),
                      c = await Promise.all(o);
                    W((0, F.s)(e, { min: t - 300, max: a + 300 }));
                    let d = Number($) / 4 / Math.abs(B - M);
                    ea(
                      ee.flatMap((t) => {
                        let s = {
                          Call: m("".concat(t), "Call"),
                          Put: m("".concat(t), "Put"),
                          BinaryCall: m("".concat(t), "BinaryCall"),
                          BinaryPut: m("".concat(t), "BinaryPut"),
                        };
                        return e.map((e) => ({
                          contractId: s[e.payoff][e.strike].contractId,
                          quantity: ((0, Z.Dx)(e.quantity) * d).toFixed(4),
                          side: e.side,
                        }));
                      }),
                      c
                    );
                  } else
                    console.log(
                      "DEBUGGING: ERROR: Invalid input values. Please check the input values."
                    );
                })();
              }, [$, L, B, R, M, s, et, p]);
            let ea = async (e, t) => {
                let s = (0, H.calculateNetPrice)(e, t, p.strike),
                  a = {
                    clientOrderId: (0, H.createClientOrderId)(),
                    totalNetPrice: s,
                    legs: e,
                  };
                try {
                  let [e, t] = await Promise.all([
                    w.calculation.estimateOrderLockPositioned(a),
                    w.calculation.estimateOrderFeesExtended(a),
                  ]);
                  k({
                    order: a,
                    orderLock: e,
                    orderFees: t.estimation,
                    orderFeesLocked: t.toBeLocked,
                  });
                } catch (e) {
                  k({
                    order: a,
                    orderLock: null,
                    orderFees: null,
                    orderFeesLocked: null,
                  }),
                    console.error(
                      "Order estimation for position builder failed",
                      e
                    );
                }
              },
              ei = async () => {
                if (I)
                  try {
                    await w.orders.newOrder(I.order, "Accumulator ".concat(s)),
                      E(),
                      "/onboarding" === d && c.push("/dashboard/trading");
                  } catch (e) {
                    P(null == e ? void 0 : e.message),
                      console.error("Failed to submit order", e);
                  }
              },
              er = (0, n.useMemo)(() => (B ? f - B : 0), [B, f]);
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: D()("tw-grid tw-w-full tw-max-w-full tw-py-2"),
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-text-white",
                      children: "Select Market Outlook",
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-mb-4 tw-mt-2 tw-w-48",
                      children: (0, r.jsx)(C.Z, {
                        options: K,
                        selectedOption: s,
                        name: "shark-fin-strategy-selector",
                        onChange: (e) => a(e),
                      }),
                    }),
                    i &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "tw-text-xs tw-text-ithaca-white-60 lg:tw-text-sm",
                            children: (0, r.jsx)("div", {
                              children: "Earn Yield",
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "tw-mt-2.5 tw-flex tw-flex-wrap tw-gap-6 lg:tw-flex-nowrap [&>div]:tw-min-w-16",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "tw-space-y-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-xs",
                                    children: "Expiry",
                                  }),
                                  (0, r.jsx)("div", {
                                    children: (0, y.lV)(et),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-min-w-28 tw-space-y-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-xs",
                                    children: "Settlement Frequency",
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: ["Weekly from ", Q[0]],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "tw-text-xs tw-text-ithaca-white-60",
                                    children: [
                                      "(",
                                      Q.map((e, t) =>
                                        t === Q.length - 1 ? e : e + ", "
                                      ),
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-space-y-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-xs",
                                    children: "Barrier",
                                  }),
                                  (0, r.jsx)("div", { children: R }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-space-y-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-xs",
                                    children: "Strike",
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      B,
                                      " ",
                                      (0, r.jsxs)("span", {
                                        className:
                                          "tw-text-sm tw-text-ithaca-white-60",
                                        children: [
                                          "(Spot Ref ",
                                          (0, Z.uM)(f, "string", "USDC"),
                                          ")",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-space-y-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "tw-text-xs",
                                    children: "Protection",
                                  }),
                                  (0, r.jsx)("div", { children: M }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                l &&
                  (0, r.jsxs)("div", {
                    className: "tw-space-y-6 lg:tw-space-y-5",
                    children: [
                      (0, r.jsx)("div", {
                        className: "tw-space-y-1",
                        children: (0, r.jsx)("div", {
                          className:
                            "tw-flex tw-flex-col tw-gap-5 lg:tw-flex-row lg:tw-items-start",
                          children: (0, r.jsxs)("div", {
                            className: "tw-space-y-2 tw-text-ithaca-white-60",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "tw-mt-4 tw-flex tw-gap-1 tw-text-xs",
                                children: [
                                  (0, r.jsxs)("span", {
                                    children: [
                                      "Available Collateral on Ithaca :",
                                      " ",
                                      0 !== _ ? (0, Z.uM)(_, "USDC") : "-",
                                    ],
                                  }),
                                  " ",
                                  (0, v.XX)("USDC", "tw-size-4"),
                                  " ",
                                  (0, r.jsx)("span", { children: "USDC" }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "tw-flex tw-items-end tw-gap-2",
                                children: [
                                  (0, r.jsx)(x.Z, {
                                    label: "Amount",
                                    width: 128,
                                    icon: (0, v.XX)("USDC"),
                                    value: $,
                                    onChange: (e) => z(e.target.value),
                                  }),
                                  (0, r.jsx)(e5.Z, {
                                    title: "All",
                                    className: "tw-flex-shrink-0 tw-px-4",
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: () => {
                                      z("".concat(L.USDC.availableCollateral));
                                    },
                                    children: "All",
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "tw-mb-2 tw-flex tw-gap-1",
                                    children: [
                                      parseInt($).toFixed(0),
                                      " ",
                                      (0, v.XX)("USDC"),
                                      " / 4 Weekly",
                                    ],
                                  }),
                                ],
                              }),
                              i &&
                                (0, r.jsxs)("div", {
                                  className: "tw-text-xs",
                                  children: [
                                    (0, r.jsx)("div", {
                                      children:
                                        "*You can use at any point the Available Collateral on Ithaca to trade",
                                    }),
                                    (0, r.jsx)("div", {
                                      children:
                                        "Yield below will only be earned on the remaining amount",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-col tw-space-y-1 tw-text-xs",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("span", {
                                className: "tw-inline-block tw-min-w-28",
                                children: "Max Potential Yield ",
                              }),
                              (0, r.jsxs)("span", {
                                className: "tw-text-ithaca-white-60",
                                children: [
                                  "If ",
                                  (0, v.XX)(S, "tw-ml-0.5 tw-inline-flex"),
                                  " @ ",
                                  (0, y.lV)(et),
                                  " ",
                                  "= ",
                                  Number(R) - 1,
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("span", {
                                className: "tw-inline-block tw-min-w-28",
                                children: "No Downside ",
                              }),
                              (0, r.jsxs)("span", {
                                className: "tw-text-ithaca-white-60",
                                children: [
                                  "if ",
                                  (0, v.XX)(S, "tw-ml-0.5 tw-inline-flex"),
                                  " @ ",
                                  B,
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("span", {
                                className: "tw-inline-block tw-min-w-28",
                                children: "Max Downside ",
                              }),
                              (0, r.jsxs)("span", {
                                className: "tw-text-ithaca-white-60",
                                children: [
                                  "if ",
                                  (0, v.XX)(S, "tw-ml-0.5 tw-inline-flex"),
                                  " @ ",
                                  M,
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            children: (0, r.jsxs)("span", {
                              className:
                                "tw-mt-2 tw-flex tw-items-center tw-text-sm",
                              children: [
                                s == T.FZ.BULL ? "Buy" : "Sell",
                                " ",
                                es,
                                " ETH Synthetic Forward at a",
                                " ",
                                s == T.FZ.BULL ? "discount" : "premium",
                                " of",
                                " ",
                                Math.abs(er).toFixed(0),
                                "$",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "!-tw-mt-2 tw-w-full",
                        children: (0, r.jsx)(
                          j.Z,
                          {
                            showKeys: !1,
                            chartData: G,
                            height: 144,
                            customDomain: { min: 0, max: 1 },
                            id: "full-onboarding-chart",
                          },
                          o
                        ),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "tw-flex tw-flex-1 tw-items-end tw-gap-2 md:tw-items-center",
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "tw-whitespace-nowrap tw-pb-[0.625rem] md:tw-pb-0",
                            children: "Settlement in",
                          }),
                          (0, r.jsx)(e4.Z, {
                            label: "Next Auction",
                            value: (0, r.jsx)(e3.Z, {}),
                          }),
                        ],
                      }),
                      (0, r.jsx)(O.Z, {
                        asContainer: !1,
                        orderSummary: I,
                        submitAuction: ei,
                      }),
                    ],
                  }),
              ],
            });
          };
        let tC = {
            accumulatorChart: {
              component: (e) => {
                let { compact: t, showInstructions: s, onRadioChange: a } = e,
                  i = (0, eG.F)(),
                  { currentExpiryDate: o } = (0, N.qr)(),
                  { data: c } = eH(),
                  [d, u] = (0, n.useState)(T.FZ.BULL),
                  m = (0, n.useMemo)(() => {
                    switch (d) {
                      case T.FZ.BULL:
                        return (0, T.ii)(o);
                      case T.FZ.BEAR:
                        return (0, T.H7)(o);
                    }
                  }, [d, o]),
                  h = (e) => {
                    u(e),
                      e === T.FZ.BULL &&
                        (null == a || a(eN.Ch.ACCUMULATOR_BULL)),
                      e === T.FZ.BEAR &&
                        (null == a || a(eN.Ch.ACCUMULATOR_BEAR));
                  };
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.Z, {
                            margin: "".concat(t ? "mb-24" : "mt-10 mb-24"),
                            children: (0, r.jsx)(C.Z, {
                              labelClassName: ee().microLabels,
                              size: t ? "compact" : "regular",
                              width: t ? 186 : 221,
                              options: X,
                              selectedOption: d,
                              name: t ? "AccumulatorCompact" : "Accumulator",
                              onChange: (e) => h(e),
                            }),
                          }),
                          (0, r.jsx)(j.Z, {
                            compact: !0,
                            showKeys: !1,
                            showPortial: !1,
                            chartData: m,
                            height: "phone" === i ? 48 : 64,
                            customDomain: { min: 0, max: 1 },
                            id: "range-strategy-compact-chart",
                          }),
                        ],
                      }),
                    !t &&
                      (0, r.jsx)(tS, {
                        marketOutlook: d,
                        setMarketOutlook: u,
                        baselineYield: Number(c),
                        showInstructions: !!s,
                        isContentVisible: !0,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 44, tablet: 50, lg: 56 },
                normal: {
                  mobile: { withInstructions: 100, withoutInstructions: 100 },
                  tablet: { withInstructions: 100, withoutInstructions: 100 },
                  lg: { withInstructions: 320, withoutInstructions: 327 },
                },
              },
            },
            betChart: {
              component: (e) => {
                let { showInstructions: t, compact: s, chartHeight: a } = e,
                  {
                    currentSpotPrice: i,
                    currencyPrecision: o,
                    currentExpiryDate: c,
                    ithacaSDK: d,
                    getContractsByPayoff: u,
                    underlyingCurrency: m,
                  } = (0, N.qr)(),
                  h = u("BinaryPut"),
                  f = u("BinaryCall"),
                  g = h ? Object.keys(h).map((e) => parseFloat(e)) : [],
                  b = (0, et.Z)(es.Gh),
                  [y, v] = (0, n.useState)("INSIDE"),
                  I = 100 * Math.round(i / 100),
                  k = g.filter((e) => e > I - 500 && e <= I + 500),
                  [P, B] = (0, n.useState)({
                    min: k.filter((e) => Number(e) === I)[0],
                    max: k.filter((e) => Number(e) > I).sort()[1],
                  }),
                  [A, T] = (0, n.useState)(""),
                  [R, U] = (0, n.useState)(""),
                  [M, X] = (0, n.useState)(),
                  [q, K] = (0, n.useState)(),
                  [G, W] = (0, n.useState)(!1),
                  { showOrderErrorToast: $ } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: z } = (0, J.F)(),
                  [Q, ei] = (0, n.useState)(),
                  er = (e) => {
                    v(e), ep(A);
                  },
                  en = (e) => {
                    T((0, Z.Dg)(e));
                  };
                (0, n.useEffect)(() => {
                  eo(P, "INSIDE" === y, (0, Z.Dx)(A), (0, Z.Dx)(R));
                }, [A, P, y, R]);
                let el = async (e) => {
                    U((0, Z.Dg)(e));
                  },
                  eo = async (e, t, a, r) => {
                    if ((0, Z.E5)(a) || (0, Z.E5)(r)) {
                      X(void 0), K(void 0);
                      return;
                    }
                    let n = e.min < i && e.max < i,
                      l = t ? (n ? h[e.max] : f[e.min]) : h[e.min],
                      c = t && n ? h[e.min] : f[e.max],
                      u = "".concat(r),
                      m = {
                        contractId: l.contractId,
                        quantity: u,
                        side: "BUY",
                      },
                      p = {
                        contractId: c.contractId,
                        quantity: u,
                        side: t ? "SELL" : "BUY",
                      };
                    (m = { ...m, quantity: u }), (p = { ...p, quantity: u });
                    let x = {
                        clientOrderId: (0, H.createClientOrderId)(),
                        totalNetPrice: a.toFixed(o.strike),
                        legs: [m, p],
                      },
                      w = (g[g.length - 1] - g[0]) / 7 / 4;
                    if (
                      (K(
                        (0, F.s)(
                          [
                            { ...l, ...m, premium: a / r },
                            { ...c, ...p, premium: 0 },
                          ],
                          { min: g[0] - w, max: g[g.length - 1] + w }
                        )
                      ),
                      !s)
                    )
                      try {
                        let [e, t] = await Promise.all([
                          d.calculation.estimateOrderLockPositioned(x),
                          d.calculation.estimateOrderFeesExtended(x),
                        ]);
                        X({
                          order: x,
                          orderLock: e,
                          orderFees: t.estimation,
                          orderFeesLocked: t.toBeLocked,
                        });
                      } catch (e) {
                        X({
                          order: x,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        }),
                          console.error("Order estimation for bet failed", e);
                      }
                  },
                  ec = async () => {
                    M &&
                      (ei({
                        order: null == M ? void 0 : M.order,
                        type: "INSIDE" === y ? "Inside Bet" : "Outside Bet",
                      }),
                      W(!0));
                  },
                  ed = async (e, t) => {
                    try {
                      await d.orders.newOrder(e, t), z();
                    } catch (e) {
                      $(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  },
                  eu = "INSIDE" === y,
                  { unitPrice: em } = (0, ea.k)({
                    isForward: !1,
                    optionType: eu ? "BinaryCall" : "BinaryPut",
                    expiryDate: c,
                    strike: "".concat(P.min),
                    side: "BUY",
                    currency: m,
                  }),
                  { unitPrice: eh } = (0, ea.k)({
                    isForward: !1,
                    optionType: "BinaryCall",
                    expiryDate: c,
                    strike: "".concat(P.max),
                    side: eu ? "SELL" : "BUY",
                    currency: m,
                  });
                (0, n.useEffect)(() => {
                  ep(A);
                }, [em, eh, A]),
                  (0, n.useEffect)(() => {
                    (0, Z.E5)(Number(A)) ? (en("100"), ep("100")) : ep(A);
                  }, [c]);
                let ep = (e) => {
                  let t = (0, Z.Dx)(em) + (eu ? -1 : 1) * (0, Z.Dx)(eh);
                  el((Number(e) / t).toFixed(0));
                };
                (0, n.useEffect)(() => {
                  ex();
                }, [y]);
                let ex = () =>
                  (0, r.jsx)(r.Fragment, {
                    children:
                      !s &&
                      t &&
                      (0, r.jsx)(S, {
                        type: y,
                        currentExpiryDate: c.toString(),
                      }),
                  });
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    ex(),
                    (0, r.jsx)(l.Z, {
                      margin: "".concat(s ? "mb-24" : "mt-10 mb-24"),
                      children: (0, r.jsx)(C.Z, {
                        labelClassName: ee().microLabels,
                        size: s ? "compact" : "regular",
                        width: s ? 186 : 221,
                        options: Y,
                        selectedOption: y,
                        name: s ? "insideOrOutsideCompact" : "insideOrOutside",
                        onChange: (e) => er(e),
                      }),
                    }),
                    !s &&
                      (0, r.jsx)("div", {
                        className: "tw-relative",
                        children: (0, r.jsx)(p, {
                          value: P,
                          extended: !0,
                          min: g[0],
                          max: g[g.length - 1],
                          label: g.length,
                          step: 100,
                          onChange: (e) => B(e),
                          range: !0,
                        }),
                      }),
                    !s &&
                      (0, r.jsxs)(l.Z, {
                        classes: D()("items-center mt-13 mb-17", {
                          "gap-5": b,
                          "gap-24": !b,
                        }),
                        children: [
                          (0, r.jsx)(L, {
                            label: "Bet",
                            lowerLabel: "Capital At Risk",
                            wrapperClassName: "flex-row-overwrite",
                            children: (0, r.jsx)(x.Z, {
                              type: "number",
                              value: A,
                              width: b ? 100 : 110,
                              onChange: (e) => {
                                let { target: t } = e;
                                return en(t.value);
                              },
                              icon: (0, r.jsx)(w.Z, {}),
                            }),
                          }),
                          (0, r.jsxs)(L, {
                            label: "",
                            lowerLabel: null,
                            wrapperClassName: "flex-row-overwrite mb-10",
                            children: [
                              (0, r.jsx)("p", {
                                className: "mb-0",
                                children: "Offered Odds",
                              }),
                              (0, r.jsx)("span", {
                                className: "color-white",
                                children: "".concat(
                                  (
                                    1 +
                                    ((0, Z.Dx)(R) - (0, Z.Dx)(A)) / (0, Z.Dx)(A)
                                  ).toFixed(2),
                                  ":1"
                                ),
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "color-white mb-5",
                            children: (0, r.jsxs)(l.Z, {
                              classes: "items-center mb-10",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "fs-xs",
                                  children:
                                    "OUTSIDE" === y ? "Premium Paid" : "Bet",
                                }),
                                (0, r.jsx)("span", {
                                  className: "ml-6 fs-md-bold",
                                  children: A,
                                }),
                                (0, r.jsx)(w.Z, {}),
                                ";",
                                (0, r.jsxs)("span", {
                                  className: "fs-xs ml-6",
                                  children: [
                                    "OUTSIDE" === y
                                      ? "Max Gain"
                                      : "Potential PnL",
                                    " ",
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "ml-6 fs-md-bold mr-2",
                                  children: Number(R) - Number(A),
                                }),
                                (0, r.jsx)(w.Z, {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, r.jsx)(j.Z, {
                      id: "bet-chart".concat(s ? "-compact" : ""),
                      compact: s,
                      chartData: null != q ? q : _.V,
                      height: a,
                      showKeys: !1,
                      showPortial: !s && void 0 !== q,
                    }),
                    M &&
                      (0, r.jsx)(E.Z, {
                        isOpen: G,
                        closeModal: (e) => W(e),
                        submitOrder: () => {
                          Q && (ed(Q.order, Q.type), ei(void 0), W(!1));
                        },
                        auctionSubmission: Q,
                        positionBuilderStrategies: [],
                        orderSummary: M,
                      }),
                    !s &&
                      (0, r.jsx)(O.Z, {
                        asContainer: !1,
                        orderSummary: M,
                        submitAuction: ec,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 44, tablet: 50, lg: 56 },
                normal: {
                  mobile: { withInstructions: 100, withoutInstructions: 100 },
                  tablet: { withInstructions: 100, withoutInstructions: 100 },
                  lg: { withInstructions: 320, withoutInstructions: 327 },
                },
              },
            },
            earnChart: {
              component: (e) => {
                let {
                    showInstructions: t,
                    compact: s,
                    chartHeight: a,
                    radioChosen: i,
                    onRadioChange: o,
                  } = e,
                  {
                    underlyingCurrency: c,
                    currentSpotPrice: d,
                    currencyPrecision: u,
                    currentExpiryDate: m,
                    ithacaSDK: h,
                    getContractsByPayoff: f,
                    spotContract: g,
                  } = (0, N.qr)(),
                  b = "Riskless Earn" === i,
                  { data: S } = (0, ev.M)({ currency: c }),
                  I = null == S ? void 0 : S.data,
                  k = (0, y.p6)(m.toString(), y.Nn, "YYYY-MM-DD"),
                  { data: P } = (0, ev.J)({ date: k, currency: c }),
                  B = null == P ? void 0 : P.data,
                  A = f("Call"),
                  T = f("Put"),
                  R = (0, et.Z)(es.Gh),
                  [U, M] = (0, n.useState)(c),
                  [Y, X] = (0, n.useState)("Risky Earn"),
                  q = (0, n.useMemo)(
                    () =>
                      A
                        ? Object.keys(A).reduce((e, t) => {
                            let s = parseFloat(t);
                            return (U === c ? s > d : s < d) && e.push(s), e;
                          }, [])
                        : [],
                    [A, U]
                  ),
                  [K, G] = (0, n.useState)({
                    min: q[0],
                    max: q[Math.ceil(q.length / 2) - 1],
                  });
                (0, n.useEffect)(() => {
                  G({ min: q[0], max: q[Math.ceil(q.length / 2) - 1] });
                }, [q]);
                let [$, z] = (0, n.useState)(),
                  [Q, ei] = (0, n.useState)(""),
                  [er, en] = (0, n.useState)(""),
                  [el, eo] = (0, n.useState)(),
                  [ec, eu] = (0, n.useState)(),
                  [em, eh] = (0, n.useState)(!1),
                  { showOrderErrorToast: ex } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: ej } = (0, J.F)(),
                  [ef, eg] = (0, n.useState)(),
                  eb = (e) => {
                    X(e), o && o(eN.Ch[e], eN.FS[e]);
                  },
                  { unitPrice: eS } = (0, ea.k)({
                    isForward: !1,
                    optionType: U === c ? "Call" : "Put",
                    expiryDate: m,
                    strike: "".concat(K.max),
                    side: "SELL",
                    currency: c,
                  });
                (0, n.useEffect)(() => {
                  if (b) {
                    if (B && I) {
                      let e = Number(Q) * (B / I - 1);
                      en("".concat(e.toFixed(2)));
                    }
                  } else {
                    let e =
                      U === c
                        ? Q
                        : (0, H.toPrecision)((0, Z.Dx)(Q) / K.max, u.strike);
                    en((Number(eS) * Number(e)).toFixed(2));
                  }
                }, [m, K, U, eS, i, Q, B, I]),
                  (0, n.useEffect)(() => {
                    (!s && "Risky Earn" === i) || (s && "Risky Earn" === Y)
                      ? eD(K, U, Q, er)
                      : eI(Q, er);
                  }, [Q, er, K, U, i, Y]);
                let eC = async (e) => {
                    ei((0, Z.Dg)(e));
                  },
                  eI = async (e, t) => {
                    if ((0, Z.E5)((0, Z.Dx)(t))) {
                      z("Earn amount is invalid");
                      return;
                    }
                    if ((z(void 0), (0, Z.E5)((0, Z.Dx)(e)))) return;
                    let a = Object.keys(A)
                        .filter((e) => Number(e) > d)
                        .sort()[0],
                      i = [
                        {
                          contractId: null == g ? void 0 : g.contractId,
                          quantity: Q,
                          side: "BUY",
                        },
                        {
                          contractId: A[a].contractId,
                          quantity: Q,
                          side: "SELL",
                        },
                        {
                          contractId: T[a].contractId,
                          quantity: Q,
                          side: "BUY",
                        },
                      ],
                      r = {
                        clientOrderId: (0, H.createClientOrderId)(),
                        totalNetPrice: (0, Z.Dx)(
                          (Number(t) - Number(e)).toString()
                        ).toFixed(u.strike),
                        legs: i,
                        addCollateral: U === c,
                      },
                      n = [];
                    for (let e = 0; e < 1e3; e++)
                      n.push({ x: e + 1600, total: e + 4e4 });
                    if ((eu(n), !s))
                      try {
                        let [e, t] = await Promise.all([
                          h.calculation.estimateOrderLockPositioned(r),
                          h.calculation.estimateOrderFeesExtended(r),
                        ]);
                        eo({
                          order: r,
                          orderLock: e,
                          orderFees: t.estimation,
                          orderFeesLocked: t.toBeLocked,
                        });
                      } catch (e) {
                        eo({
                          order: r,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        });
                      }
                  },
                  eD = async (e, t, a, i) => {
                    if ((0, Z.E5)((0, Z.Dx)(i))) {
                      z("Earn amount is invalid");
                      return;
                    }
                    if ((z(void 0), (0, Z.E5)((0, Z.Dx)(a)))) {
                      eo(void 0), eu(void 0);
                      return;
                    }
                    let r = t === c ? A[e.max] : T[e.max],
                      n =
                        t === c
                          ? "".concat(a)
                          : "".concat(
                              (0, H.toPrecision)((0, Z.Dx)(a) / e.max, u.strike)
                            ),
                      l = [
                        { contractId: r.contractId, quantity: n, side: "SELL" },
                      ],
                      o = {
                        clientOrderId: (0, H.createClientOrderId)(),
                        totalNetPrice: (-(0, Z.Dx)(i)).toFixed(u.strike),
                        legs: l,
                        addCollateral: t === c,
                      },
                      d = (q[q.length - 1] - q[0]) / 7 / 4,
                      m =
                        t === c
                          ? "".concat(a)
                          : "".concat(
                              (0, H.toPrecision)((0, Z.Dx)(a) / e.max, u.strike)
                            ),
                      p = {
                        contractId: T[e.max].contractId,
                        quantity: m,
                        side: "SELL",
                      };
                    if (
                      (eu(
                        (0, F.s)(
                          [
                            {
                              ...T[e.max],
                              ...p,
                              premium: (0, Z.Dx)(i) - (0, Z.Dx)(a),
                              quantity: "1",
                            },
                          ],
                          { min: q[0], max: q[q.length - 1] + d }
                        )
                      ),
                      !s)
                    )
                      try {
                        let [e, t] = await Promise.all([
                          h.calculation.estimateOrderLockPositioned(o),
                          h.calculation.estimateOrderFeesExtended(o),
                        ]);
                        eo({
                          order: o,
                          orderLock: e,
                          orderFees: t.estimation,
                          orderFeesLocked: t.toBeLocked,
                        });
                      } catch (e) {
                        eo({
                          order: o,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        }),
                          console.error("Order estimation for earn failed", e);
                      }
                  },
                  ek = async () => {
                    el &&
                      (eg({ order: null == el ? void 0 : el.order, type: Y }),
                      eh(!0));
                  },
                  eP = async (e, t) => {
                    try {
                      await h.orders.newOrder(e, t), ej();
                    } catch (e) {
                      ex(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  },
                  eL = () => {
                    if ((0, Z.E5)((0, Z.Dx)(Q)) || (0, Z.E5)((0, Z.Dx)(er)))
                      return (0, r.jsx)("span", { children: "-%" });
                    let e = U === c ? (0, Z.Dx)(Q) * d : (0, Z.Dx)(Q),
                      t = ey(
                        "".concat(A[K.max].economics.expiry),
                        e,
                        (0, Z.Dx)(er)
                      );
                    return "".concat(t, "%");
                  };
                return (
                  (0, n.useEffect)(() => {
                    eC("USDC" === U ? "1000" : "1");
                  }, [m]),
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      !s &&
                        t &&
                        ("Risky Earn" === i
                          ? (0, r.jsx)(ed, { currentExpiryDate: m.toString() })
                          : (0, r.jsx)(ep, { currentExpiry: m.toString() })),
                      s &&
                        (0, r.jsx)(l.Z, {
                          margin: "mb-24 z-max",
                          children: (0, r.jsx)(C.Z, {
                            labelClassName: ee().microLabels,
                            size: s ? "compact" : "regular",
                            width: 186,
                            options: W,
                            selectedOption: Y,
                            name: s
                              ? "riskyOrRisklessCompact"
                              : "riskyOrRiskless",
                            onChange: (e) => eb(e),
                            radioButtonClassName: ew().earnRadioButtonClassName,
                          }),
                        }),
                      !s &&
                        "Risky Earn" === i &&
                        (0, r.jsxs)("h3", {
                          className:
                            "mbi-16 flex-row gap-4 fs-lato-md mb-12 mt-16",
                          children: ["Select Target Price ", (0, v.XX)(c)],
                        }),
                      "Risky Earn" === i
                        ? (0, r.jsx)(l.Z, {
                            margin: "special-slider mb-7",
                            children: (0, r.jsx)(p, {
                              value: K,
                              extended: !s,
                              min: q[0],
                              lockFirst: !0,
                              max: q[q.length - 1],
                              label: q.length,
                              step: 100,
                              showLabel: !s,
                              onChange: (e) => {
                                G(e);
                              },
                            }),
                          })
                        : "",
                      !s &&
                        "Risky Earn" === i &&
                        (0, r.jsxs)(l.Z, {
                          classes: D()({
                            "flex-column gap-0": R,
                            "flex-row-overwrite gap-10": !R,
                          }),
                          children: [
                            (0, r.jsx)(L, {
                              label: "Risk",
                              lowerLabel: "Capital At Risk",
                              labelClassName: "ml-40",
                              children: (0, r.jsx)(x.Z, {
                                type: "number",
                                width: R ? 125 : 110,
                                value: Q,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return eC(t.value);
                                },
                                icon:
                                  U === c ? (0, v.XX)(c) : (0, r.jsx)(w.Z, {}),
                                hasDropdown: !0,
                                onDropdownChange: (e) => {
                                  e !== U &&
                                    (M(e), ei("USDC" === e ? "1000" : "1"));
                                },
                                dropDownOptions: [
                                  {
                                    label: "USDC",
                                    value: "USDC",
                                    icon: (0, r.jsx)(w.Z, {}),
                                  },
                                  { label: c, value: c, icon: (0, v.XX)(c) },
                                ],
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: D()("flex-row gap-24", {
                                "mb-12": !R,
                              }),
                              children: [
                                (0, r.jsx)("div", {
                                  className: "color-white mt-10 mb-12",
                                  children: (0, r.jsxs)(l.Z, {
                                    classes: "items-center",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "fs-xs color-white-60",
                                        children: "Earn ",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "ml-6 mr-2 fs-md-bold",
                                        children: er,
                                      }),
                                      (0, r.jsx)(w.Z, {}),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "color-white mt-10 mb-12",
                                  children: (0, r.jsxs)(l.Z, {
                                    classes: "items-center",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "fs-xs color-white-60",
                                        children: "Expected APR ",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "ml-6 ",
                                        children: eL(),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      !s &&
                        b &&
                        (0, r.jsxs)(l.Z, {
                          classes: D()({
                            "flex-column gap-0": R,
                            "flex-row-overwrite gap-10": !R,
                          }),
                          children: [
                            (0, r.jsx)(L, {
                              label: "Qty",
                              lowerLabel: "Loan",
                              labelClassName: "ml-40",
                              children: (0, r.jsx)(x.Z, {
                                type: "number",
                                width: 80,
                                value: Q,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return eC(t.value);
                                },
                                icon: (0, r.jsx)(w.Z, {}),
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: D()("flex-row gap-24", {
                                "mb-12": !R,
                              }),
                              children: [
                                (0, r.jsx)("div", {
                                  className: "color-white mt-10 mb-10",
                                  children: (0, r.jsxs)(l.Z, {
                                    classes: "items-center",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "fs-xs color-white-60",
                                        children: "Earn ",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "ml-6 mr-2",
                                        children: er,
                                      }),
                                      (0, r.jsx)(w.Z, {}),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "color-white mt-10 mb-10",
                                  children: (0, r.jsxs)(l.Z, {
                                    classes: "items-center",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "fs-xs color-white-60",
                                        children: "Expected APR ",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "ml-6 ",
                                        children: eL(),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, r.jsx)(j.Z, {
                        id: "earn-chart".concat(s ? "-compact" : ""),
                        compact: s,
                        chartData: null != ec ? ec : _.V,
                        height: !s && b ? (t ? 106 : 369) : a,
                        showKeys: !1,
                        customReadout: b
                          ? { label: "APR", value: eL() }
                          : void 0,
                        showPortial: "Risky Earn" === i && void 0 !== ec,
                        infoPopup:
                          "Riskless Earn" !== i && void 0 !== ec
                            ? {
                                type: "risky",
                                price: K.max,
                                risk: Q,
                                currency: U,
                                earn: er,
                                showInstructions: t,
                              }
                            : void 0,
                        customDomain:
                          (!s && b) || (s && "Riskless Earn" === Y)
                            ? { min: 0, max: 8e4 }
                            : void 0,
                      }),
                      el &&
                        (0, r.jsx)(E.Z, {
                          isOpen: em,
                          closeModal: (e) => eh(e),
                          submitOrder: () => {
                            ef && (eP(ef.order, ef.type), eg(void 0), eh(!1));
                          },
                          auctionSubmission: ef,
                          positionBuilderStrategies: [],
                          orderSummary: el,
                        }),
                      !s &&
                        (0, r.jsx)(O.Z, {
                          error: $,
                          isSubmitButtonDisabled: b && 0 === Number(er),
                          onlyProtiftableOrders: !1,
                          asContainer: !1,
                          orderSummary: el,
                          submitAuction: ek,
                        }),
                    ],
                  })
                );
              },
              height: {
                compact: { mobile: 37.75, tablet: 49, lg: 49 },
                normal: {
                  mobile: { withInstructions: 153, withoutInstructions: 153 },
                  tablet: { withInstructions: 153, withoutInstructions: 153 },
                  lg: { withInstructions: 340, withoutInstructions: 310.5 },
                },
              },
            },
            noGainNoPayinChart: {
              component: (e) => {
                let { showInstructions: t, compact: s, chartHeight: a } = e,
                  {
                    ithacaSDK: i,
                    currencyPrecision: o,
                    getContractsByPayoff: c,
                    currentExpiryDate: d,
                    unFilteredContractList: u,
                    currentSpotPrice: m,
                    underlyingCurrency: h,
                  } = (0, N.qr)(),
                  p = c("Call"),
                  f = c("Put"),
                  g = c("BinaryCall"),
                  b = c("BinaryPut"),
                  y = p
                    ? Object.keys(p).map((e) => ({ name: e, value: e }))
                    : [],
                  S = (0, et.Z)(es.Gh),
                  [I, k] = (0, n.useState)("Call"),
                  P = eF(m, y, I),
                  [L, B] = (0, n.useState)(P || "0");
                (0, n.useEffect)(() => {
                  B(eF(m, y, I) || "0");
                }, [I]);
                let [A, T] = (0, n.useState)(""),
                  [U, M] = (0, n.useState)(""),
                  [Y, X] = (0, n.useState)(),
                  [q, K] = (0, n.useState)(),
                  [G, W] = (0, n.useState)(!1),
                  { showOrderErrorToast: $ } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: z } = (0, J.F)(),
                  [Q, ei] = (0, n.useState)(),
                  { unitPrice: er, isLoading: en } = (0, ea.k)({
                    isForward: !1,
                    optionType: I,
                    expiryDate: d,
                    strike: L,
                    currency: h,
                  }),
                  { unitPrice: el, isLoading: eo } = (0, ea.k)({
                    isForward: !1,
                    optionType: "Binary".concat(I),
                    expiryDate: d,
                    strike: L,
                    currency: h,
                  }),
                  ec = async (e) => {
                    if ((k(e), !L)) return;
                  },
                  ed = async (e) => {
                    if ((M(e), !L)) return;
                  },
                  eu = () => {
                    if (eo || en || (0, Z.E5)((0, Z.Dx)(el))) return;
                    if (A ? (0, Z.E5)((0, Z.Dx)(A)) : (0, Z.E5)((0, Z.Dx)(U))) {
                      X(void 0);
                      return;
                    }
                    let e = "Call" === I ? p : f,
                      t = "Call" === I ? g : b,
                      s = e[L].contractId,
                      a = t[L].contractId,
                      i = ((0, Z.Dx)(er) / (0, Z.Dx)(el)).toFixed(2),
                      r = ((0, Z.Dx)(U) * (0, Z.Dx)(i)).toFixed(2),
                      n = { contractId: s, quantity: U, side: "BUY" },
                      l = {
                        contractId: a,
                        quantity: "".concat(r),
                        side: "SELL",
                      },
                      o = {
                        clientOrderId: (0, H.createClientOrderId)(),
                        totalNetPrice: "0.0000",
                        legs: [n, l],
                      };
                    K(
                      (0, F.s)([
                        { ...e[L], ...n, premium: 1 },
                        { ...t[L], ...l, premium: 1 / (0, Z.Dx)(i) },
                      ])
                    ),
                      em(o),
                      T(i);
                  },
                  em = async (e) => {
                    if (!s)
                      try {
                        let [t, s] = await Promise.all([
                          i.calculation.estimateOrderLockPositioned(e),
                          i.calculation.estimateOrderFeesExtended(e),
                        ]);
                        X({
                          order: e,
                          orderLock: t,
                          orderFees: s.estimation,
                          orderFeesLocked: s.toBeLocked,
                        });
                      } catch (t) {
                        X({
                          order: e,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        }),
                          console.error(
                            "Order estimation for No Gain, No Payin’ failed",
                            t
                          );
                      }
                  };
                (0, n.useEffect)(() => {
                  eu();
                }, [U, A, L, I, er, el, eo, en]);
                let eh = async () => {
                    Y &&
                      (Y.order.legs.map((e) => {
                        let t = u.find((t) => t.contractId == e.contractId);
                        if (!t)
                          throw Error(
                            "Contract not found for leg with contractId ".concat(
                              e.contractId
                            )
                          );
                        return {
                          leg: e,
                          strike: t.economics.strike,
                          payoff: t.payoff,
                        };
                      }),
                      ei({
                        order: null == Y ? void 0 : Y.order,
                        type: "No Gain, No Payin’ ".concat(I),
                      }),
                      W(!0));
                  },
                  ep = async (e, t) => {
                    try {
                      await i.orders.newOrder(e, t), z();
                    } catch (e) {
                      $(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                return (
                  (0, n.useEffect)(() => {
                    T("200"), ed("1");
                  }, [d]),
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(r.Fragment, {
                        children:
                          !s &&
                          t &&
                          (0, r.jsx)(ek, {
                            type: I,
                            currentExpiryDate: d.toString(),
                          }),
                      }),
                      (0, r.jsx)(l.Z, {
                        direction: "column",
                        margin: s ? "mb-10" : "mb-17",
                        gap: "gap-12",
                        children: (0, r.jsxs)(l.Z, {
                          classes: D()("gap-24", { "mt-17": !s }),
                          children: [
                            !s &&
                              (0, r.jsx)(eL.Z, {
                                label: "Type",
                                labelClassName: "mt-2",
                                children: (0, r.jsx)(C.Z, {
                                  labelClassName: ee().microLabels,
                                  size: s ? "compact" : "regular",
                                  width: s ? 140 : 100,
                                  options: R,
                                  selectedOption: I,
                                  name: s ? "callOrPutCompact" : "callOrPut",
                                  onChange: (e) => ec(e),
                                }),
                              }),
                            s &&
                              (0, r.jsx)(C.Z, {
                                labelClassName: ee().microLabels,
                                size: s ? "compact" : "regular",
                                width: s ? 140 : 100,
                                options: R,
                                selectedOption: I,
                                name: s ? "callOrPutCompact" : "callOrPut",
                                onChange: (e) => ec(e),
                              }),
                            !s &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(eL.Z, {
                                    label: "Price Reference",
                                    icon: (0, v.XX)(h),
                                    children: (0, r.jsx)(eS.Z, {
                                      options: y,
                                      width: S ? 130 : void 0,
                                      value: L ? { name: L, value: L } : void 0,
                                      onChange: (e) => {
                                        B(e);
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(eL.Z, {
                                    label: "Size (Multiplier)",
                                    children: (0, r.jsx)(x.Z, {
                                      max: eO.Kz,
                                      type: "number",
                                      value: U,
                                      width: S ? 130 : void 0,
                                      onChange: (e) => {
                                        let { target: t } = e;
                                        return ed(t.value);
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(eL.Z, {
                                    label:
                                      "Call" === I
                                        ? "Min Upside"
                                        : "Min Downside",
                                    children: (0, r.jsx)("div", {
                                      className: "color-white mt-16",
                                      children:
                                        en || eo ? (0, r.jsx)(eE.Z, {}) : A,
                                    }),
                                  }),
                                  (0, r.jsx)(eL.Z, {
                                    icon: (0, v.XX)(h),
                                    label: (0, r.jsxs)("div", {
                                      children: [
                                        "Breakeven Price",
                                        (0, r.jsx)("div", {
                                          className: "italic",
                                          children: "(Price Reference ".concat(
                                            "Call" === I
                                              ? " + Min Upside"
                                              : " - Min Downside",
                                            ")"
                                          ),
                                        }),
                                      ],
                                    }),
                                    labelClassName: "mb-10 mt--10 color-white",
                                    children: (0, r.jsxs)(l.Z, {
                                      children: [
                                        (0, r.jsx)("span", {
                                          className:
                                            "fs-md-bold color-white ml-19",
                                          children:
                                            L && !(0, Z.E5)((0, Z.Dx)(A))
                                              ? "Call" === I
                                                ? (0, H.toPrecision)(
                                                    (0, Z.Dx)(L) + (0, Z.Dx)(A),
                                                    o.strike
                                                  )
                                                : (0, H.toPrecision)(
                                                    (0, Z.Dx)(L) - (0, Z.Dx)(A),
                                                    o.strike
                                                  )
                                              : "",
                                        }),
                                        (0, r.jsx)(eP.Z, {
                                          icon: (0, r.jsx)(w.Z, {}),
                                          label: "USDC",
                                          size: "xs",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(j.Z, {
                        id: "nogain-chart".concat(s ? "-compact" : ""),
                        compact: s,
                        chartData: null != q ? q : _.V,
                        height: a,
                        showKeys: !1,
                        showPortial: !s && void 0 !== q,
                      }),
                      Y &&
                        (0, r.jsx)(E.Z, {
                          isOpen: G,
                          closeModal: (e) => W(e),
                          submitOrder: () => {
                            Q && (ep(Q.order, Q.type), ei(void 0), W(!1));
                          },
                          auctionSubmission: Q,
                          positionBuilderStrategies: [],
                          orderSummary: Y,
                        }),
                      !s &&
                        (0, r.jsx)(O.Z, {
                          asContainer: !1,
                          orderSummary: Y,
                          submitAuction: eh,
                        }),
                    ],
                  })
                );
              },
              height: {
                compact: { mobile: 57, tablet: 69, lg: 75 },
                normal: {
                  mobile: { withInstructions: 168, withoutInstructions: 168 },
                  tablet: { withInstructions: 168, withoutInstructions: 168 },
                  lg: { withInstructions: 320, withoutInstructions: 356 },
                },
              },
            },
            bonusTwinWinChart: {
              component: (e) => {
                let {
                    showInstructions: t,
                    compact: s,
                    chartHeight: a,
                    radioChosen: i = "Bonus",
                    onRadioChange: o,
                  } = e,
                  {
                    ithacaSDK: c,
                    currentSpotPrice: d,
                    getContractsByPayoff: u,
                    unFilteredContractList: m,
                    currentExpiryDate: h,
                    quotingParams: p,
                    underlyingCurrency: w,
                  } = (0, N.qr)(),
                  f = u("Forward"),
                  g = u("Put"),
                  b = u("BinaryPut"),
                  y = g
                    ? Object.keys(g).reduce(
                        (e, t) => (parseFloat(t) < d && e.push(t), e),
                        []
                      )
                    : [],
                  S = y[y.length - 3],
                  I = g
                    ? Object.keys(g).reduce(
                        (e, t) => (parseFloat(t) > Number(S) && e.push(t), e),
                        []
                      )
                    : [],
                  [D, k] = (0, n.useState)(I),
                  [P, L] = (0, n.useState)(I[1]),
                  [B, A] = (0, n.useState)(i || "Bonus"),
                  [T, R] = (0, n.useState)(S),
                  [U, M] = (0, n.useState)(""),
                  [Y, X] = (0, n.useState)(""),
                  q = (0, et.Z)(es.Gh),
                  [K, W] = (0, n.useState)(),
                  [$, z] = (0, n.useState)(),
                  [Q, ea] = (0, n.useState)(!1),
                  { showOrderErrorToast: ei } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: er } = (0, J.F)(),
                  [en, el] = (0, n.useState)();
                (0, n.useEffect)(() => {
                  i && eo(i);
                }, [i]);
                let eo = (e) => {
                    A(e),
                      o && o(eN.Ch[e], eN.FS[e]),
                      T && ed(e, P, T, (0, Z.Dx)(U), (0, Z.Dx)(Y));
                  },
                  ec = (e) => {
                    let t = (0, Z.Dg)(e);
                    M(t), T && ed(B, P, T, (0, Z.Dx)(t), (0, Z.Dx)(Y));
                  },
                  ed = async (e, t, a, i, r) => {
                    if ((0, Z.E5)(i)) {
                      W(void 0), z(void 0);
                      return;
                    }
                    let n = "Twin Win" === e,
                      l = (0, Z.Dx)(t) - (0, Z.Dx)(a),
                      o = f["-"],
                      u = g[t],
                      m = g[a],
                      x = b[a],
                      j = {
                        contractId: o.contractId,
                        quantity: "".concat(i),
                        side: "BUY",
                      },
                      y = {
                        contractId: u.contractId,
                        quantity: "".concat(n ? 2 * i : i),
                        side: "BUY",
                      },
                      N = {
                        contractId: m.contractId,
                        quantity: "".concat(n ? 2 * i : i),
                        side: "SELL",
                      },
                      v = {
                        contractId: x.contractId,
                        quantity: "".concat(n ? 2 * i * l : i * l),
                        side: "SELL",
                      },
                      S = [j, y, N, v],
                      [C, I, D, k] = await Promise.all([
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "BinaryPut",
                          expiryDate: h,
                          strike: a,
                          side: "SELL",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: d,
                          currency: w,
                        }),
                        (0, eB.YK)({
                          isForward: !0,
                          optionType: "Forward",
                          expiryDate: h,
                          strike: "-",
                          side: "BUY",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: d,
                          currency: w,
                        }),
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "Put",
                          expiryDate: h,
                          strike: t,
                          side: "BUY",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: d,
                          currency: w,
                        }),
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "Put",
                          expiryDate: h,
                          strike: a,
                          side: "SELL",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: d,
                          currency: w,
                        }),
                      ]),
                      P = I
                        ? (0, Z.Dx)(I)
                        : (0, eA.O)({
                            midPrice: Number(o.referencePrice),
                            optionType: "Forward",
                            side: "BUY",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: d,
                          }),
                      L = D
                        ? (0, Z.Dx)(D)
                        : (0, eA.O)({
                            midPrice: Number(u.referencePrice),
                            optionType: "Put",
                            side: "BUY",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: d,
                          }),
                      E = k
                        ? (0, Z.Dx)(k)
                        : (0, eA.O)({
                            midPrice: Number(m.referencePrice),
                            optionType: "Put",
                            side: "SELL",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: d,
                          }),
                      O = C
                        ? (0, Z.Dx)(C)
                        : (0, eA.O)({
                            midPrice: Number(x.referencePrice),
                            optionType: "BinaryPut",
                            side: "SELL",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: d,
                          }),
                      _ = (0, F.s)(
                        [
                          { ...o, ...j, premium: P },
                          { ...u, ...y, premium: L },
                          { ...m, ...N, premium: E },
                          { ...x, ...v, premium: O },
                        ],
                        { min: Number(a) - 100, max: Number(t) + 500 }
                      ),
                      B = P + L - E - O * l;
                    X(Math.round(B).toString()), z(_);
                    let A = {
                      clientOrderId: (0, H.createClientOrderId)(),
                      totalNetPrice: "".concat(B),
                      legs: S,
                    };
                    if (!s)
                      try {
                        let [e, t] = await Promise.all([
                          c.calculation.estimateOrderLockPositioned(A),
                          c.calculation.estimateOrderFeesExtended(A),
                        ]);
                        W({
                          order: A,
                          orderLock: e,
                          orderFees: t.estimation,
                          orderFeesLocked: t.toBeLocked,
                        });
                      } catch (t) {
                        W({
                          order: A,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        }),
                          console.error(
                            "Order estimation for ".concat(e, " failed"),
                            t
                          );
                      }
                  },
                  eu = async () => {
                    K &&
                      (el({ order: null == K ? void 0 : K.order, type: B }),
                      ea(!0));
                  },
                  em = async (e, t) => {
                    try {
                      await c.orders.newOrder(e, t), er();
                    } catch (e) {
                      ei(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                return (
                  (0, n.useEffect)(() => {
                    ec("1");
                  }, [h]),
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      s &&
                        (0, r.jsx)(l.Z, {
                          margin: s ? "mb-10" : "mb-12",
                          children: (0, r.jsx)(C.Z, {
                            labelClassName: ee().microLabels,
                            size: s ? "compact" : "regular",
                            width: s ? 140 : 186,
                            options: G,
                            selectedOption: B,
                            name: s
                              ? "bonusOrTwinWinCompact"
                              : "bonusOrTwinWin",
                            onChange: (e) => eo(e),
                          }),
                        }),
                      !s &&
                        t &&
                        ("Bonus" === B
                          ? (0, r.jsx)(eZ, {})
                          : (0, r.jsx)(e_, {})),
                      !s &&
                        (0, r.jsxs)(l.Z, {
                          direction: "row",
                          margin: "mt-20 mb-14",
                          gap: "gap-15",
                          children: [
                            (0, r.jsx)(eL.Z, {
                              label: "Price Reference",
                              children: (0, r.jsx)(eS.Z, {
                                width: q ? 135 : 80,
                                options: D.map((e) => ({ name: e, value: e })),
                                value: { name: P, value: P },
                                onChange: (e) => {
                                  L(e),
                                    T &&
                                      ed(B, e, T, (0, Z.Dx)(U), (0, Z.Dx)(Y));
                                },
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: "KO Barrier",
                              children: (0, r.jsx)(eS.Z, {
                                width: q ? 135 : void 0,
                                options: y.map((e) => ({ name: e, value: e })),
                                value: T ? { name: T, value: T } : void 0,
                                onChange: (e) => {
                                  R(e);
                                  let t = g
                                    ? Object.keys(g).reduce(
                                        (t, s) => (
                                          parseFloat(s) > Number(e) &&
                                            t.push(s),
                                          t
                                        ),
                                        []
                                      )
                                    : [];
                                  k(t),
                                    Number(P) < Number(e) && L(t[0]),
                                    ed(B, P, e, (0, Z.Dx)(U), (0, Z.Dx)(Y));
                                },
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: "Size (Multiplier)",
                              children: (0, r.jsx)(x.Z, {
                                max: eO.Kz,
                                type: "number",
                                width: q ? 135 : void 0,
                                value: U,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return ec(t.value);
                                },
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: q
                                ? (0, r.jsxs)(l.Z, {
                                    classes: "items-center mt--10",
                                    children: [
                                      (0, v.XX)(w),
                                      " ",
                                      (0, r.jsxs)("div", {
                                        className: "ml-6",
                                        children: [
                                          (0, r.jsx)("div", {
                                            children: "Protection Cost",
                                          }),
                                          (0, r.jsx)("div", {
                                            children: " Inclusive Price",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, v.XX)(w),
                                      " Protection Cost Inclusive Price",
                                    ],
                                  }),
                              labelClassName: "nowrap mb-14",
                              children: (0, r.jsx)("span", {
                                className: "fs-md-bold color-white ml-19",
                                children: Y,
                              }),
                            }),
                          ],
                        }),
                      (0, r.jsx)(j.Z, {
                        id: "bonus-chart".concat(s ? "-compact" : ""),
                        compact: s,
                        chartData: null != $ ? $ : _.V,
                        height: a,
                        showKeys: !1,
                        showPortial: !s && void 0 !== $,
                        infoPopup:
                          void 0 !== $
                            ? {
                                type: "Bonus" === B ? "bonus" : "twinWin",
                                price: Y,
                                barrier: T,
                                strike: P,
                              }
                            : void 0,
                      }),
                      K &&
                        (0, r.jsx)(E.Z, {
                          isOpen: Q,
                          closeModal: (e) => ea(e),
                          submitOrder: () => {
                            en && (em(en.order, en.type), el(void 0), ea(!1));
                          },
                          auctionSubmission: en,
                          positionBuilderStrategies: [],
                          orderSummary: K,
                        }),
                      !s &&
                        (0, r.jsx)(O.Z, {
                          asContainer: !1,
                          orderSummary: K,
                          submitAuction: eu,
                        }),
                    ],
                  })
                );
              },
              height: {
                compact: { mobile: 57, tablet: 69, lg: 75 },
                normal: {
                  mobile: { withInstructions: 305, withoutInstructions: 320 },
                  tablet: { withInstructions: 305, withoutInstructions: 320 },
                  lg: { withInstructions: 420, withoutInstructions: 392.5 },
                },
              },
            },
            barriersChart: {
              component: (e) => {
                let {
                    showInstructions: t,
                    compact: s,
                    chartHeight: a,
                    onRadioChange: i,
                  } = e,
                  {
                    underlyingCurrency: o,
                    ithacaSDK: c,
                    getContractsByPayoff: d,
                    currentExpiryDate: u,
                    currencyPrecision: m,
                    currentSpotPrice: h,
                    quotingParams: p,
                  } = (0, N.qr)(),
                  { isSolanaWalletActive: w } = (0, eK.X)(),
                  f = d("Call"),
                  g = d("Put"),
                  b = d("BinaryCall"),
                  y = d("BinaryPut"),
                  v = (0, eq.Zj)(Number(h)).toString(),
                  S = eY(f, v, "UP"),
                  I = eX(f, S[0], "UP"),
                  [D, k] = (0, n.useState)(S),
                  [P, L] = (0, n.useState)(I),
                  [B, A] = (0, n.useState)("BUY"),
                  [T, R] = (0, n.useState)("UP"),
                  [U, Y] = (0, n.useState)("IN"),
                  [X, q] = (0, n.useState)(S[0]),
                  [K, G] = (0, n.useState)(v),
                  [W, Q] = (0, n.useState)(""),
                  [ea, ei] = (0, n.useState)("-"),
                  [er, en] = (0, n.useState)(),
                  [el, eo] = (0, n.useState)(),
                  ec = (0, et.Z)(es.Gh),
                  [ed, eu] = (0, n.useState)(!1),
                  { showOrderErrorToast: em } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: eh } = (0, J.F)(),
                  [ep, ex] = (0, n.useState)();
                (0, n.useEffect)(() => {
                  ej("UP", "1");
                }, []);
                let ew = async (e) => {
                    A(e), X && K && ev(e, T, X, U, K, (0, Z.Dx)(W));
                  },
                  ej = async (e, t) => {
                    R(e);
                    let s = w ? 30 : 200;
                    t && Q(t);
                    let a = (0, eq.Zj)(Number(h));
                    if ("UP" === e) {
                      let i = a.toString(),
                        r = (a + s).toString();
                      q(i), G(r);
                      let n = eY(f, r, e);
                      L(eX(f, i, e)),
                        k(n),
                        await ev(B, e, i, U, r, (0, Z.Dx)(t || W));
                    } else {
                      let t = (a - 100).toString(),
                        i = (a - 100 - s).toString();
                      q(t), G(i);
                      let r = eY(f, i, e);
                      if ((L(eX(f, t, e)), k(r), !X || !K)) return;
                      await ev(B, e, t, U, i, (0, Z.Dx)(W));
                    }
                    i && i(eN.Ch["".concat(e, "_").concat(U)]);
                  },
                  ef = async (e) => {
                    Y(e),
                      i && i(eN.Ch["".concat(T, "_").concat(e)]),
                      X && K && (await ev(B, T, X, e, K, (0, Z.Dx)(W)));
                  },
                  eg = async (e) => {
                    q(e), e && K && (await ev(B, T, e, U, K, (0, Z.Dx)(W)));
                  },
                  eb = async (e) => {
                    G(e), X && e && (await ev(B, T, X, U, e, (0, Z.Dx)(W)));
                  },
                  ey = async (e) => {
                    let t = (0, Z.Dg)(e);
                    Q(t), X && K && (await ev(B, T, X, U, K, (0, Z.Dx)(t)));
                  },
                  ev = async (e, t, a, i, r, n, l) => {
                    let d, x, w;
                    if (
                      (console.log("DEBUG INFO Mar 10, 2025 12:16", r),
                      (0, Z.E5)(n))
                    ) {
                      en(void 0), eo(void 0);
                      return;
                    }
                    if ("UP" === t) {
                      if ("IN" === i) {
                        let t = f[r],
                          s = b[r],
                          i = {
                            contractId: t.contractId,
                            quantity: "".concat(n),
                            side: e,
                          },
                          c = {
                            contractId: s.contractId,
                            quantity: "".concat(
                              n * ((0, Z.Dx)(r) - (0, Z.Dx)(a))
                            ),
                            side: e,
                          };
                        d = [i, c];
                        let [m, j] = await Promise.all([
                          (0, eB.YK)({
                            isForward: !1,
                            optionType: "Call",
                            expiryDate: u,
                            strike: r,
                            side: "BUY",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: h,
                            currency: o,
                          }),
                          (0, eB.YK)({
                            isForward: !1,
                            optionType: "BinaryCall",
                            expiryDate: u,
                            strike: r,
                            side: "BUY",
                            forcedSpread: p.DIGITAL_SPREAD,
                            currentSpotPrice: h,
                            currency: o,
                          }),
                        ]);
                        (x = [
                          m
                            ? (0, Z.Dx)(m)
                            : (0, eA.O)({
                                midPrice: Number(t.referencePrice),
                                optionType: "Call",
                                side: "BUY",
                                forcedSpread: p.DIGITAL_SPREAD,
                                currentSpotPrice: h,
                              }),
                          j
                            ? (0, Z.Dx)(j)
                            : (0, eA.O)({
                                midPrice: Number(s.referencePrice),
                                optionType: "BinaryCall",
                                side: "BUY",
                                forcedSpread: p.DIGITAL_SPREAD,
                                currentSpotPrice: h,
                              }),
                        ]),
                          (w = [
                            { ...t, ...i, premium: l || x[0] },
                            { ...s, ...c, premium: l || x[1] },
                          ]);
                      } else {
                        let t = f[a],
                          s = f[r],
                          i = b[r],
                          c = {
                            contractId: t.contractId,
                            quantity: "".concat(n),
                            side: e,
                          },
                          m = {
                            contractId: s.contractId,
                            quantity: "".concat(n),
                            side: "BUY" === e ? "SELL" : "BUY",
                          },
                          j = {
                            contractId: i.contractId,
                            quantity: "".concat(
                              n * ((0, Z.Dx)(r) - (0, Z.Dx)(a))
                            ),
                            side: "BUY" === e ? "SELL" : "BUY",
                          },
                          [g, y, N] = await Promise.all([
                            (0, eB.YK)({
                              isForward: !1,
                              optionType: "Call",
                              expiryDate: u,
                              strike: a,
                              side: "BUY",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                              currency: o,
                            }),
                            (0, eB.YK)({
                              isForward: !1,
                              optionType: "Call",
                              expiryDate: u,
                              strike: r,
                              side: "SELL",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                              currency: o,
                            }),
                            (0, eB.YK)({
                              isForward: !1,
                              optionType: "BinaryCall",
                              expiryDate: u,
                              strike: r,
                              side: "SELL",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                              currency: o,
                            }),
                          ]);
                        (d = [c, m, j]),
                          (x = [
                            g
                              ? (0, Z.Dx)(g)
                              : (0, eA.O)({
                                  midPrice: Number(t.referencePrice),
                                  optionType: "Call",
                                  side: "BUY",
                                  forcedSpread: p.DIGITAL_SPREAD,
                                  currentSpotPrice: h,
                                }),
                            y
                              ? (0, Z.Dx)(y)
                              : (0, eA.O)({
                                  midPrice: Number(s.referencePrice),
                                  optionType: "Call",
                                  side: "SELL",
                                  forcedSpread: p.DIGITAL_SPREAD,
                                  currentSpotPrice: h,
                                }),
                            N
                              ? (0, Z.Dx)(N)
                              : (0, eA.O)({
                                  midPrice: Number(i.referencePrice),
                                  optionType: "BinaryCall",
                                  side: "SELL",
                                  forcedSpread: p.DIGITAL_SPREAD,
                                  currentSpotPrice: h,
                                }),
                          ]),
                          (w = [
                            { ...t, ...c, premium: l || x[0] },
                            { ...s, ...m, premium: l || x[1] },
                            { ...i, ...j, premium: l || x[2] },
                          ]);
                      }
                    } else if ("IN" == i) {
                      let t = g[r],
                        s = y[r],
                        i = {
                          contractId: t.contractId,
                          quantity: "".concat(n),
                          side: e,
                        },
                        c = {
                          contractId: s.contractId,
                          quantity: "".concat(
                            n * ((0, Z.Dx)(a) - (0, Z.Dx)(r))
                          ),
                          side: e,
                        };
                      d = [i, c];
                      let [m, j] = await Promise.all([
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "Put",
                          expiryDate: u,
                          strike: r,
                          side: "BUY",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: h,
                          currency: o,
                        }),
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "BinaryPut",
                          expiryDate: u,
                          strike: r,
                          side: "BUY",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: h,
                          currency: o,
                        }),
                      ]);
                      (x = [
                        m
                          ? (0, Z.Dx)(m)
                          : (0, eA.O)({
                              midPrice: Number(t.referencePrice),
                              optionType: "Put",
                              side: "BUY",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                            }),
                        j
                          ? (0, Z.Dx)(j)
                          : (0, eA.O)({
                              midPrice: Number(s.referencePrice),
                              optionType: "BinaryPut",
                              side: "BUY",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                            }),
                      ]),
                        (w = [
                          { ...t, ...i, premium: l || x[0] },
                          { ...s, ...c, premium: l || x[1] },
                        ]);
                    } else {
                      let t = g[a],
                        s = g[r],
                        i = y[r],
                        c = {
                          contractId: t.contractId,
                          quantity: "".concat(n),
                          side: e,
                        },
                        m = {
                          contractId: s.contractId,
                          quantity: "".concat(n),
                          side: "BUY" === e ? "SELL" : "BUY",
                        },
                        j = {
                          contractId: i.contractId,
                          quantity: "".concat(
                            n * ((0, Z.Dx)(a) - (0, Z.Dx)(r))
                          ),
                          side: "BUY" === e ? "SELL" : "BUY",
                        };
                      d = [c, m, j];
                      let [f, b, N] = await Promise.all([
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "Put",
                          expiryDate: u,
                          strike: a,
                          side: "BUY",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: h,
                          currency: o,
                        }),
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "Put",
                          expiryDate: u,
                          strike: r,
                          side: "SELL",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: h,
                          currency: o,
                        }),
                        (0, eB.YK)({
                          isForward: !1,
                          optionType: "BinaryPut",
                          expiryDate: u,
                          strike: r,
                          side: "SELL",
                          forcedSpread: p.DIGITAL_SPREAD,
                          currentSpotPrice: h,
                          currency: o,
                        }),
                      ]);
                      (x = [
                        f
                          ? (0, Z.Dx)(f)
                          : (0, eA.O)({
                              midPrice: Number(t.referencePrice),
                              optionType: "Put",
                              side: "BUY",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                            }),
                        b
                          ? (0, Z.Dx)(b)
                          : (0, eA.O)({
                              midPrice: Number(s.referencePrice),
                              optionType: "Put",
                              side: "SELL",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                            }),
                        N
                          ? (0, Z.Dx)(N)
                          : (0, eA.O)({
                              midPrice: Number(i.referencePrice),
                              optionType: "BinaryPut",
                              side: "SELL",
                              forcedSpread: p.DIGITAL_SPREAD,
                              currentSpotPrice: h,
                            }),
                      ]),
                        (w = [
                          { ...t, ...c, premium: l || x[0] },
                          { ...s, ...m, premium: l || x[1] },
                          { ...i, ...j, premium: l || x[2] },
                        ]);
                    }
                    let j = (0, H.calculateNetPrice)(d, x, m.strike, n);
                    void 0 === l && ei((0, Z.uM)(Number(j), "string", "USDC"));
                    let N =
                        void 0 !== l
                          ? d.reduce(
                              (e, t) => (e = (0, Z.Dx)(t.quantity) * l + e),
                              0
                            )
                          : Number(j) * n,
                      v = {
                        clientOrderId: (0, H.createClientOrderId)(),
                        totalNetPrice: "".concat(N),
                        legs: d,
                      };
                    if ((eo((0, F.s)(w)), !s))
                      try {
                        let [e, t] = await Promise.all([
                          c.calculation.estimateOrderLockPositioned(v),
                          c.calculation.estimateOrderFeesExtended(v),
                        ]);
                        en({
                          order: v,
                          orderLock: e,
                          orderFees: t.estimation,
                          orderFeesLocked: t.toBeLocked,
                        });
                      } catch (e) {
                        en({
                          order: v,
                          orderLock: null,
                          orderFees: null,
                          orderFeesLocked: null,
                        }),
                          console.error(
                            "Order estimation for barriers failed",
                            e
                          );
                      }
                  },
                  eC = async () => {
                    er &&
                      (ex({
                        order: null == er ? void 0 : er.order,
                        type:
                          "UP" === T
                            ? "IN" === U
                              ? "The Sniper"
                              : "The Highwire Act"
                            : "IN" === U
                            ? "Guardian Angel Depth Charge"
                            : "The Bungee Jumper",
                      }),
                      eu(!0));
                  },
                  eI = async (e, t) => {
                    try {
                      await c.orders.newOrder(e, t), eh();
                    } catch (e) {
                      em(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                (0, n.useEffect)(() => {
                  W && ey("1");
                }, [u]),
                  (0, n.useEffect)(() => {
                    eD();
                  }, [B]);
                let eD = () =>
                  (0, r.jsx)(r.Fragment, {
                    children:
                      !s &&
                      t &&
                      (0, r.jsx)(eT, {
                        upOrDown: T,
                        inOrOut: U,
                        currentExpiry: u.toString(),
                      }),
                  });
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    eD(),
                    s
                      ? (0, r.jsxs)(l.Z, {
                          gap: "gap-3",
                          margin: "mb-10",
                          children: [
                            (0, r.jsx)(C.Z, {
                              size: s ? "compact" : "regular",
                              options: M,
                              selectedOption: B,
                              name: "buyOrSellCompact",
                              orientation: "vertical",
                              onChange: (e) => ew(e),
                              radioButtonClassName:
                                eM().sideRadioButtonClassName,
                              labelClassName: eM().sideLabel,
                            }),
                            (0, r.jsx)(C.Z, {
                              size: s ? "compact" : "regular",
                              options: $,
                              selectedOption: T,
                              name: "upOrDownCompact",
                              orientation: "vertical",
                              onChange: (e) => ej(e),
                              labelClassName: ee().microLabels,
                            }),
                            (0, r.jsx)(C.Z, {
                              size: s ? "compact" : "regular",
                              options: z,
                              selectedOption: U,
                              name: "inOrOutCompact",
                              orientation: "vertical",
                              onChange: (e) => ef(e),
                              labelClassName: ee().microLabels,
                            }),
                          ],
                        })
                      : (0, r.jsx)("div", {
                          className: "inputs",
                          children: (0, r.jsx)(l.Z, {
                            direction: "column",
                            margin: "mt-20 mb-20",
                            gap: "gap-16",
                            children: (0, r.jsxs)(l.Z, {
                              direction: "row-center",
                              gap: "gap-10",
                              children: [
                                (0, r.jsx)(eL.Z, {
                                  label: "Side",
                                  labelClassName: "mb-4",
                                  children: (0, r.jsx)(C.Z, {
                                    labelClassName: "height-23",
                                    width: 42,
                                    radioButtonClassName: "height-51",
                                    options: M,
                                    selectedOption: B,
                                    name: "buyOrSell",
                                    orientation: "vertical",
                                    onChange: (e) => ew(e),
                                  }),
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "",
                                  children: (0, r.jsx)(C.Z, {
                                    width: 50,
                                    options: $,
                                    selectedOption: T,
                                    name: "upOrDown",
                                    orientation: "vertical",
                                    onChange: (e) => ej(e),
                                    radioButtonClassName:
                                      eM().radioButtonClassName,
                                    optionClassName: eM().optionClassName,
                                    labelClassName: ""
                                      .concat(eM().labelClassName, " ")
                                      .concat(ee().microLabels),
                                  }),
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "Strike",
                                  labelClassName: "mb-16",
                                  children: (0, r.jsx)(eS.Z, {
                                    width: 80,
                                    options: D.map((e) => ({
                                      name: e,
                                      value: e,
                                    })),
                                    value: X ? { name: X, value: X } : void 0,
                                    onChange: eg,
                                  }),
                                }),
                                (0, r.jsx)("h5", {
                                  className: "mt-22 color-white",
                                  children: "Knock",
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "",
                                  children: (0, r.jsx)(C.Z, {
                                    width: ec ? 80 : void 0,
                                    options: z,
                                    selectedOption: U,
                                    name: "inOrOut",
                                    orientation: "vertical",
                                    onChange: (e) => ef(e),
                                    radioButtonClassName:
                                      eM().radioButtonClassName,
                                    optionClassName: eM().optionClassName,
                                    labelClassName: ""
                                      .concat(eM().labelClassName, " ")
                                      .concat(ee().microLabels),
                                  }),
                                }),
                                (0, r.jsx)("p", {
                                  className: "mt-22",
                                  children: "@",
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "Barrier",
                                  labelClassName: ec ? "" : "mb-16",
                                  children: (0, r.jsx)(eS.Z, {
                                    width: 80,
                                    options: P.map((e) => ({
                                      name: e,
                                      value: e,
                                    })),
                                    value: K ? { name: K, value: K } : void 0,
                                    onChange: eb,
                                  }),
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "Size",
                                  labelClassName: ec ? "" : "mb-16",
                                  children: (0, r.jsx)(x.Z, {
                                    max: eO.Kz,
                                    type: "number",
                                    value: W,
                                    onChange: (e) => {
                                      let { target: t } = e;
                                      return ey(t.value);
                                    },
                                    width: ec ? 140 : 80,
                                  }),
                                }),
                                (0, r.jsx)(eL.Z, {
                                  label: "Unit Price",
                                  labelClassName: ec ? "" : "mb-16",
                                  children: (0, r.jsx)("span", {
                                    className: "fs-md-bold color-white",
                                    children: Math.abs((0, Z.Dx)(ea)),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    !s &&
                      t &&
                      (0, r.jsx)(eR, {
                        upOrDown: T,
                        buyOrSell: B,
                        inOrOut: U,
                        currentExpiryDate: u.toString(),
                        strikeAmount: X,
                        barrierAmount: K,
                      }),
                    (0, r.jsx)(j.Z, {
                      id: "barriers-chart".concat(s ? "-compact" : ""),
                      compact: s,
                      chartData: null != el ? el : _.V,
                      height: a,
                      showKeys: !1,
                      showPortial: !s && void 0 !== el,
                    }),
                    er &&
                      (0, r.jsx)(E.Z, {
                        isOpen: ed,
                        closeModal: (e) => eu(e),
                        submitOrder: () => {
                          ep && (eI(ep.order, ep.type), ex(void 0), eu(!1));
                        },
                        auctionSubmission: ep,
                        positionBuilderStrategies: [],
                        orderSummary: er,
                      }),
                    !s &&
                      (0, r.jsx)(O.Z, {
                        asContainer: !1,
                        orderSummary: er,
                        submitAuction: eC,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 61.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 408, withoutInstructions: 414.5 },
                },
              },
            },
            principalStrategies: {
              component: (e) => {
                let { compact: t, showInstructions: s } = e,
                  { currentExpiryDate: a } = (0, N.qr)(),
                  [i, o] = (0, n.useState)(T.WL.RANGE),
                  c = (0, eG.F)(),
                  { data: d } = (0, eW.a)({
                    initialData: "0",
                    queryKey: ["BASLINE_YIELD"],
                    queryFn: () => (0, e$.Sp)("BASLINE_YIELD"),
                  }),
                  u = (0, n.useMemo)(() => {
                    switch (i) {
                      case T.WL.BULL:
                        return (0, T.Ue)(a);
                      case T.WL.RANGE:
                        return (0, T.wO)(a);
                      case T.WL.BEAR:
                        return (0, T.Cy)(a);
                    }
                  }, [i, a]);
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.Z, {
                            margin: "".concat(t ? "mb-24" : "mt-10 mb-24"),
                            children: (0, r.jsx)(C.Z, {
                              labelClassName: ee().microLabels,
                              size: t ? "compact" : "regular",
                              width: t ? 186 : 221,
                              options: q,
                              selectedOption: i,
                              name: t
                                ? "principalStrategyMarketOutlookCompact"
                                : "principalStrategyMarketOutlook",
                              onChange: (e) => o(e),
                            }),
                          }),
                          (0, r.jsx)(j.Z, {
                            compact: !0,
                            showKeys: !1,
                            showPortial: !1,
                            chartData: u,
                            height: "phone" === c ? 48 : 64,
                            customDomain: { min: 0, max: 1 },
                            id: "principal-strategy-compact-chart",
                          }),
                        ],
                      }),
                    !t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(ez.Z, {
                          baselineYield: Number(d),
                          rangeChartData: (0, T.Ue)(a),
                          bearChartData: (0, T.Cy)(a),
                          bullChartData: (0, T.wO)(a),
                          setMarketOutlook: o,
                          marketOutlook: i,
                          showInstructions: s,
                        }),
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 55.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 238, withoutInstructions: 414.5 },
                },
              },
            },
            bull: {
              component: (e) => {
                let { compact: t, showInstructions: s } = e,
                  a = (0, eG.F)(),
                  { currentExpiryDate: i } = (0, N.qr)(),
                  n = (0, T.wO)(i),
                  { data: l } = eH();
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(j.Z, {
                          compact: !0,
                          showKeys: !1,
                          showPortial: !1,
                          chartData: n,
                          height: "phone" === a ? 48 : 64,
                          customDomain: { min: 0, max: 1 },
                          id: "bull-strategy-compact-chart",
                        }),
                      }),
                    !t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(th, {
                          marketOutlook: T.WL.BULL,
                          baselineYield: Number(l),
                          showInstructions: !!s,
                          isContentVisible: !0,
                        }),
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 55.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 238, withoutInstructions: 414.5 },
                },
              },
            },
            bear: {
              component: (e) => {
                let { compact: t, showInstructions: s } = e,
                  a = (0, eG.F)(),
                  { currentExpiryDate: i } = (0, N.qr)(),
                  { data: n } = eH(),
                  l = (0, T.Cy)(i);
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(j.Z, {
                          compact: !0,
                          showKeys: !1,
                          showPortial: !1,
                          chartData: l,
                          height: "phone" === a ? 48 : 64,
                          customDomain: { min: 0, max: 1 },
                          id: "bear-strategy-compact-chart",
                        }),
                      }),
                    !t &&
                      (0, r.jsx)(th, {
                        marketOutlook: T.WL.BEAR,
                        baselineYield: Number(n),
                        showInstructions: !!s,
                        isContentVisible: !0,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 55.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 238, withoutInstructions: 414.5 },
                },
              },
            },
            range: {
              component: (e) => {
                let { compact: t, showInstructions: s } = e,
                  a = (0, eG.F)(),
                  { currentExpiryDate: i } = (0, N.qr)(),
                  { data: n } = eH(),
                  l = (0, T.Ue)(i);
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(j.Z, {
                          compact: !0,
                          showKeys: !1,
                          showPortial: !1,
                          chartData: l,
                          height: "phone" === a ? 48 : 64,
                          customDomain: { min: 0, max: 1 },
                          id: "range-strategy-compact-chart",
                        }),
                      }),
                    !t &&
                      (0, r.jsx)(th, {
                        marketOutlook: T.WL.RANGE,
                        baselineYield: Number(n),
                        showInstructions: !!s,
                        isContentVisible: !0,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 55.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 238, withoutInstructions: 414.5 },
                },
              },
            },
            sharkFin: {
              component: (e) => {
                let { compact: t, showInstructions: s } = e,
                  { currentExpiryDate: a } = (0, N.qr)(),
                  [i, o] = (0, n.useState)("Bull"),
                  c = (0, eG.F)(),
                  { data: d } = eH(),
                  u = (0, n.useMemo)(() => {
                    switch (i) {
                      case "Bull":
                        return (0, T.xY)(a);
                      case "Bear":
                        return (0, T.uK)(a);
                    }
                  }, [i, a]);
                return (0, r.jsxs)("div", {
                  children: [
                    t &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.Z, {
                            margin: "".concat(t ? "mb-24" : "mt-10 mb-24"),
                            children: (0, r.jsx)(C.Z, {
                              labelClassName: ee().microLabels,
                              size: t ? "compact" : "regular",
                              width: t ? 186 : 221,
                              options: K,
                              selectedOption: i,
                              name: t
                                ? "sharkFinOutlookCompact"
                                : "sharkFinOutlook",
                              onChange: (e) => o(e),
                            }),
                          }),
                          (0, r.jsx)(j.Z, {
                            compact: !0,
                            showKeys: !1,
                            showPortial: !1,
                            chartData: u,
                            height: "phone" === c ? 48 : 64,
                            customDomain: { min: 0, max: 1 },
                            id: "shark-fin-strategy-compact-chart",
                          }),
                        ],
                      }),
                    !t &&
                      (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(tp, {
                          baselineYield: Number(d),
                          bearChartData: (0, T.uK)(a),
                          bullChartData: (0, T.xY)(a),
                          setMarketOutlook: o,
                          marketOutlook: i,
                          showInstructions: s,
                        }),
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 43.5, tablet: 55.5, lg: 61.5 },
                normal: {
                  mobile: { withInstructions: 238, withoutInstructions: 238 },
                  tablet: { withInstructions: 238, withoutInstructions: 238 },
                  lg: { withInstructions: 238, withoutInstructions: 414.5 },
                },
              },
            },
            optionsChart: {
              component: (e) => {
                var t, s, a;
                let { showInstructions: i, compact: o, chartHeight: c } = e,
                  {
                    ithacaSDK: d,
                    getContractsByPayoff: u,
                    currentExpiryDate: m,
                    currentSpotPrice: h,
                    underlyingCurrency: p,
                  } = (0, N.qr)(),
                  {
                    setOptionsParams: f,
                    options: g,
                    detectAndSetQuickPricerTab: b,
                    showAuctionModal: S,
                  } = (0, N.xc)(),
                  I = (0, eG.F)(),
                  [D, k] = (0, n.useState)(u("Call")),
                  [P, L] = (0, n.useState)(u("Put")),
                  F = Object.keys(u("Call")).map((e) => ({
                    name: e,
                    value: e,
                  })),
                  [B, A] = (0, n.useState)(F),
                  [T, U] = (0, n.useState)(
                    null !== (t = null == g ? void 0 : g.callOrPut) &&
                      void 0 !== t
                      ? t
                      : "Call"
                  ),
                  [Y, X] = (0, n.useState)(
                    null !== (s = null == g ? void 0 : g.buyOrSell) &&
                      void 0 !== s
                      ? s
                      : "BUY"
                  ),
                  [q, K] = (0, n.useState)(
                    null !== (a = null == g ? void 0 : g.size) && void 0 !== a
                      ? a
                      : "1"
                  ),
                  G = (0, n.useMemo)(() => {
                    let e = F.find(
                      (e) => e.value === (null == g ? void 0 : g.strike)
                    );
                    return (null == g ? void 0 : g.strike) && e
                      ? null == g
                        ? void 0
                        : g.strike
                      : (0, eq.v3)([...F], h);
                  }, [g, F, h]),
                  [W, $] = (0, n.useState)(G),
                  [z, H] = (0, n.useState)(""),
                  [Q, ee] = (0, n.useState)(!1),
                  { showOrderErrorToast: et } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: es } = (0, J.F)(),
                  [ei, er] = (0, n.useState)();
                (0, n.useEffect)(() => {
                  b(T);
                }, [T]);
                let { unitPrice: en, isLoading: el } = (0, ea.k)({
                    isForward: !1,
                    optionType: T,
                    expiryDate: m,
                    strike: W,
                    side: Y,
                    currency: p,
                  }),
                  { iv: eo } = (0, tx.d)({
                    unitPrice: z,
                    strike: W,
                    isCall: "Call" === T,
                    side: Y,
                    expiry: m,
                  }),
                  ec = "Call" === T ? D[W] : P[W],
                  { portfolioGeeks: ed } = (0, tf.f)({
                    positionsData: [
                      {
                        strike: Number(W),
                        contractId: ec.contractId,
                        expiry: (0, y.cK)("".concat(m), y.Nn).format(
                          "YYYY-MM-DD"
                        ),
                        payoff: T,
                        position: Number(q),
                        side: Y,
                      },
                    ],
                  });
                (0, n.useEffect)(() => {
                  H(en);
                }, [en]);
                let { data: eu } = tj({
                    legs: (0, n.useMemo)(
                      () => [
                        {
                          contractId: ec.contractId,
                          quantity: "".concat(q),
                          side: Y,
                          referencePrice: (0, Z.Dx)(z),
                        },
                      ],
                      [ec.contractId, q, Y, z]
                    ),
                    enabled: !o,
                  }),
                  { data: em = [] } = tg(
                    (0, n.useMemo)(
                      () => ({
                        optionType: T,
                        side: Y,
                        size: (0, Z.Dx)(q),
                        strike: W,
                        unitPrice: z,
                      }),
                      [T, Y, q, W, z]
                    )
                  );
                (0, n.useEffect)(() => {
                  f({
                    callOrPut: T,
                    buyOrSell: Y,
                    size: q,
                    strike: W,
                    unitPrice: z,
                  });
                }, [T, Y, q, W, z]);
                let eh = async (e) => {
                  U(e);
                };
                (0, n.useEffect)(() => {
                  let e = u("Call"),
                    t = u("Put");
                  k(e), L(t);
                  let s = Object.keys(e).map((e) => ({ name: e, value: e }));
                  A(s);
                  let a = (0, eq.v3)([...s], h);
                  s.find((e) => e.value === W) || a === W || $(a);
                }, [m]);
                let ep = async (e) => {
                    X(e);
                  },
                  ex = async (e, t) => {
                    K((0, Z.Dg)(e));
                  },
                  ew = async (e) => {
                    H((0, Z.Dg)(e));
                  },
                  ej = async () => {
                    eu &&
                      (S
                        ? (er({
                            order: null == eu ? void 0 : eu.order,
                            type: T,
                          }),
                          ee(!0))
                        : ef(null == eu ? void 0 : eu.order, T));
                  },
                  ef = async (e, t) => {
                    try {
                      await d.orders.newOrder(e, t), es();
                    } catch (e) {
                      et(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(r.Fragment, {
                      children: !o && i && (0, r.jsx)(tb, {}),
                    }),
                    (0, r.jsxs)(l.Z, {
                      direction: "row",
                      margin: "".concat(o ? "mb-12" : "mb-34"),
                      gap: "gap-12",
                      children: [
                        o &&
                          (0, r.jsx)(C.Z, {
                            size: o ? "compact" : "regular",
                            width: o ? 120 : 110,
                            options: R,
                            name: o ? "callOrPutCompact" : "callOrPut",
                            selectedOption: T,
                            onChange: (e) => eh(e),
                          }),
                        !o &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(eL.Z, {
                                label: "Type",
                                children: (0, r.jsx)(C.Z, {
                                  size: o ? "compact" : "regular",
                                  width: o ? 120 : 110,
                                  options: R,
                                  name: o ? "callOrPutCompact" : "callOrPut",
                                  selectedOption: T,
                                  onChange: (e) => eh(e),
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Side",
                                children: (0, r.jsx)(C.Z, {
                                  options: M,
                                  name: "buyOrSell",
                                  orientation: "vertical",
                                  selectedOption: Y,
                                  onChange: (e) => ep(e),
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Size",
                                children: (0, r.jsx)(x.Z, {
                                  max: eO.Kz,
                                  type: "number",
                                  icon: (0, v.XX)(p),
                                  width: "desktop" === I ? 105 : void 0,
                                  increment: (e) =>
                                    q &&
                                    ex(
                                      ("UP" === e
                                        ? Number(q) + 1
                                        : Number(q) - 1
                                      ).toString()
                                    ),
                                  value: q,
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return ex(t.value);
                                  },
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Strike",
                                children: (0, r.jsx)(eS.Z, {
                                  options: B,
                                  iconEnd: (0, r.jsx)(w.Z, {}),
                                  value: W ? { name: W, value: W } : void 0,
                                  onChange: (e) => {
                                    $(e);
                                  },
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Unit Price",
                                children: (0, r.jsx)(x.Z, {
                                  isLoading: el,
                                  type: "number",
                                  icon: (0, r.jsx)(w.Z, {}),
                                  footerText: el ? void 0 : eo,
                                  value: z,
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return ew(t.value);
                                  },
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsx)(j.Z, {
                      id: "options-chart".concat(o ? "-compact" : ""),
                      compact: o,
                      chartData: null != em ? em : _.V,
                      height: c,
                      showKeys: !1,
                      showPortial: !o && void 0 !== em,
                      infoPopup: {
                        type: "options",
                        greeks: ed,
                        callOrPut: T,
                        side: Y,
                        showInstructions: i,
                      },
                    }),
                    eu &&
                      (0, r.jsx)(E.Z, {
                        isOpen: Q,
                        closeModal: (e) => ee(e),
                        submitOrder: () => {
                          ei && (ef(ei.order, ei.type), er(void 0), ee(!1));
                        },
                        auctionSubmission: ei,
                        positionBuilderStrategies: [
                          {
                            leg: eu.order.legs[0],
                            referencePrice: z,
                            payoff: T,
                            strike: W,
                          },
                        ],
                        orderSummary: eu,
                      }),
                    !o &&
                      (0, r.jsx)(O.Z, {
                        asContainer: !1,
                        orderSummary: eu,
                        submitAuction: ej,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 58, tablet: 64, lg: 93 },
                normal: {
                  mobile: { withInstructions: 178, withoutInstructions: 239 },
                  tablet: { withInstructions: 178, withoutInstructions: 239 },
                  lg: { withInstructions: 178, withoutInstructions: 239 },
                },
              },
            },
            digitalOptionsChart: {
              component: (e) => {
                let { showInstructions: t, compact: s, chartHeight: a } = e,
                  {
                    ithacaSDK: i,
                    getContractsByPayoff: o,
                    currentExpiryDate: c,
                    currentSpotPrice: d,
                    underlyingCurrency: u,
                  } = (0, N.qr)(),
                  [m, h] = (0, n.useState)(o("BinaryCall")),
                  [p, f] = (0, n.useState)(o("BinaryPut")),
                  g = Object.keys(o("BinaryCall")).map((e) => ({
                    name: e,
                    value: e,
                  })),
                  [b, y] = (0, n.useState)(g),
                  { detectAndSetQuickPricerTab: v } = (0, N.xc)(),
                  [S, I] = (0, n.useState)("BinaryCall"),
                  [D, k] = (0, n.useState)("BUY"),
                  [P, L] = (0, n.useState)("100"),
                  [F, B] = (0, n.useState)((0, eq.v3)([...g], d)),
                  [A, T] = (0, n.useState)(""),
                  [R, Y] = (0, n.useState)(!1),
                  { showOrderErrorToast: X } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: q } = (0, J.F)(),
                  [K, G] = (0, n.useState)(),
                  { unitPrice: W, isLoading: $ } = (0, ea.k)({
                    isForward: !1,
                    optionType: S,
                    expiryDate: c,
                    strike: F,
                    side: D,
                    currency: u,
                  });
                (0, n.useEffect)(() => {
                  T(W);
                }, [W, F, S, c]);
                let z = "BinaryCall" === S ? m[F] : p[F],
                  { data: H } = tj({
                    legs: (0, n.useMemo)(
                      () => [
                        {
                          contractId: z.contractId,
                          quantity: "".concat(P),
                          side: D,
                          referencePrice: (0, Z.Dx)(A),
                        },
                      ],
                      [z.contractId, P, D, A]
                    ),
                    enabled: !s,
                  }),
                  { data: Q = [] } = tg(
                    (0, n.useMemo)(
                      () => ({
                        optionType: S,
                        side: D,
                        size: (0, Z.Dx)(P),
                        strike: F,
                        unitPrice: A,
                      }),
                      [S, D, P, F, A]
                    )
                  );
                (0, n.useEffect)(() => {
                  let e = o("BinaryCall"),
                    t = o("BinaryPut");
                  h(e), f(t);
                  let s = Object.keys(o("BinaryCall")).map((e) => ({
                    name: e,
                    value: e,
                  }));
                  y(s);
                  let a = (0, eq.v3)([...s], d);
                  a !== F && B(a);
                }, [c]),
                  (0, n.useEffect)(() => {
                    v(S);
                  }, [S]);
                let ee = async (e) => {
                    I(e);
                  },
                  et = async (e) => {
                    k(e);
                  },
                  es = async (e, t) => {
                    L((0, Z.Dg)(e));
                  },
                  ei = async (e) => {
                    T((0, Z.Dg)(e));
                  },
                  er = async () => {
                    H &&
                      (H &&
                        G({
                          order: null == H ? void 0 : H.order,
                          type:
                            "BinaryCall" === S ? "Digital Call" : "Digital Put",
                        }),
                      Y(!0));
                  },
                  en = async (e, t) => {
                    try {
                      await i.orders.newOrder(e, t), q();
                    } catch (e) {
                      X(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(r.Fragment, {
                      children: !s && t && (0, r.jsx)(ty, {}),
                    }),
                    (0, r.jsxs)(l.Z, {
                      direction: "row",
                      margin: "".concat(s ? "mb-12" : "mb-34"),
                      gap: "gap-12",
                      children: [
                        s &&
                          (0, r.jsx)(C.Z, {
                            size: s ? "compact" : "regular",
                            width: s ? 120 : 110,
                            options: U,
                            name: s
                              ? "binaryCallOrPutCompact"
                              : "binaryCallOrPut",
                            selectedOption: S,
                            onChange: (e) => ee(e),
                          }),
                        !s &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(eL.Z, {
                                label: "Type",
                                children: (0, r.jsx)(C.Z, {
                                  size: s ? "compact" : "regular",
                                  width: s ? 120 : 110,
                                  options: U,
                                  name: s
                                    ? "binaryCallOrPutCompact"
                                    : "binaryCallOrPut",
                                  selectedOption: S,
                                  onChange: (e) => ee(e),
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Side",
                                children: (0, r.jsx)(C.Z, {
                                  options: M,
                                  name: "side",
                                  orientation: "vertical",
                                  selectedOption: D,
                                  onChange: (e) => et(e),
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Size",
                                children: (0, r.jsx)(x.Z, {
                                  max: eO.Kz,
                                  type: "number",
                                  icon: (0, r.jsx)(w.Z, {}),
                                  width: 105,
                                  increment: (e) =>
                                    P &&
                                    es(
                                      ("UP" === e
                                        ? Number(P) + 1
                                        : Number(P) - 1
                                      ).toString()
                                    ),
                                  value: P,
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return es(t.value);
                                  },
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Strike",
                                children: (0, r.jsx)(eS.Z, {
                                  options: b,
                                  iconEnd: (0, r.jsx)(w.Z, {}),
                                  value: F ? { name: F, value: F } : void 0,
                                  onChange: (e) => {
                                    B(e);
                                  },
                                }),
                              }),
                              (0, r.jsx)(eL.Z, {
                                label: "Unit Price",
                                children: (0, r.jsx)(x.Z, {
                                  isLoading: $,
                                  type: "number",
                                  icon: (0, r.jsx)(w.Z, {}),
                                  value: A,
                                  onChange: (e) => {
                                    let { target: t } = e;
                                    return ei(t.value);
                                  },
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsx)(j.Z, {
                      id: "digital-chart".concat(s ? "-compact" : ""),
                      compact: s,
                      chartData: null != Q ? Q : _.V,
                      height: a,
                      showKeys: !1,
                      showPortial: !s && void 0 !== Q,
                    }),
                    H &&
                      (0, r.jsx)(E.Z, {
                        isOpen: R,
                        closeModal: (e) => Y(e),
                        submitOrder: () => {
                          K && (en(K.order, K.type), G(void 0), Y(!1));
                        },
                        auctionSubmission: K,
                        positionBuilderStrategies: [
                          {
                            leg: H.order.legs[0],
                            referencePrice: A,
                            payoff: S,
                            strike: F,
                          },
                        ],
                        orderSummary: H,
                      }),
                    !s &&
                      (0, r.jsx)(O.Z, {
                        asContainer: !1,
                        orderSummary: H,
                        submitAuction: er,
                      }),
                  ],
                });
              },
              height: {
                compact: { mobile: 58, tablet: 64, lg: 93 },
                normal: {
                  mobile: { withInstructions: 153, withoutInstructions: 239 },
                  tablet: { withInstructions: 153, withoutInstructions: 239 },
                  lg: { withInstructions: 153, withoutInstructions: 239 },
                },
              },
            },
            forwardsChart: {
              component: (e) => {
                let { showInstructions: t, compact: s, chartHeight: a } = e,
                  {
                    ithacaSDK: i,
                    currentExpiryDate: o,
                    getContractsByPayoff: c,
                    spotContract: d,
                    underlyingCurrency: u,
                  } = (0, N.qr)(),
                  m = (0, eG.F)(),
                  h = c("Forward")["-"],
                  [p, f] = (0, n.useState)("CURRENT"),
                  g = "CURRENT" === p ? h : d,
                  [b, S] = (0, n.useState)("BUY"),
                  [I, D] = (0, n.useState)(""),
                  [k, P] = (0, n.useState)(""),
                  [L, B] = (0, n.useState)(),
                  [A, T] = (0, n.useState)(!1),
                  [R, U] = (0, n.useState)(),
                  { showOrderErrorToast: Y } = (0, V.Z)(),
                  { showOrderConfirmationToastAndRefetchData: X } = (0, J.F)(),
                  { unitPrice: q, isLoading: K } = (0, ea.k)({
                    isForward: !0,
                    optionType: p,
                    expiryDate: o,
                    strike: "-",
                    side: b,
                    currency: u,
                  });
                (0, n.useEffect)(() => {
                  P(q);
                }, [q, o, p]),
                  (0, n.useEffect)(() => {
                    Q(p, b, (0, Z.Dx)(I), k);
                  }, [p, b, I, k]);
                let { data: G } = tj({
                    legs: (0, n.useMemo)(
                      () => [
                        {
                          contractId: g.contractId,
                          quantity: "".concat(I),
                          side: b,
                          referencePrice: (0, Z.Dx)(k),
                        },
                      ],
                      [g.contractId, I, b, k]
                    ),
                    enabled: !s,
                  }),
                  W = async (e) => {
                    f(e);
                  },
                  $ = async (e) => {
                    S(e);
                  },
                  z = async (e) => {
                    D((0, Z.Dg)(e));
                  },
                  H = async (e) => {
                    P((0, Z.Dg)(e));
                  },
                  Q = async (e, t, s, a) => {
                    if ((0, Z.E5)(s) || (0, Z.E5)(Number(a))) {
                      B(void 0);
                      return;
                    }
                    let i = "CURRENT" === e ? h : d,
                      r = {
                        contractId: i.contractId,
                        quantity: "".concat(s),
                        side: t,
                      },
                      n = (0, Z.Dx)(a);
                    B((0, F.s)([{ ...i, ...r, premium: n }]));
                  },
                  ee = async () => {
                    G &&
                      (G &&
                        U({
                          order: null == G ? void 0 : G.order,
                          type:
                            "CURRENT" === p
                              ? "Forward"
                              : "Next Auction Forward",
                        }),
                      T(!0));
                  },
                  et = async (e, t) => {
                    try {
                      await i.orders.newOrder(e, t), X();
                    } catch (e) {
                      Y(null == e ? void 0 : e.message),
                        console.error("Failed to submit order", e);
                    }
                  };
                return (
                  (0, n.useEffect)(() => {
                    z("1");
                  }, []),
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(r.Fragment, {
                        children: !s && t && (0, r.jsx)(tN, {}),
                      }),
                      !s &&
                        (0, r.jsxs)(l.Z, {
                          direction: "row",
                          margin: "".concat(s ? "mb-12" : "mb-34"),
                          gap: "gap-12",
                          children: [
                            (0, r.jsx)(eL.Z, {
                              label: "Type",
                              children: (0, r.jsx)(C.Z, {
                                width: 200,
                                options: [
                                  {
                                    option: "Next Auction",
                                    value: "NEXT_AUCTION",
                                  },
                                  {
                                    option: (0, y.p6)("".concat(o), y.Nn, y.KJ),
                                    value: "CURRENT",
                                  },
                                ],
                                name: s
                                  ? "currentOrNextAuctionCompact"
                                  : "currentOrNextAuction",
                                selectedOption: p,
                                onChange: (e) => W(e),
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: "Side",
                              children: (0, r.jsx)(C.Z, {
                                options: M,
                                name: "buyOrSell",
                                orientation: "vertical",
                                selectedOption: b,
                                onChange: (e) => $(e),
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: "Size",
                              children: (0, r.jsx)(x.Z, {
                                max: eO.Kz,
                                type: "number",
                                icon: (0, v.XX)(u),
                                width: "desktop" === m ? 105 : void 0,
                                increment: (e) =>
                                  I &&
                                  z(
                                    ("UP" === e
                                      ? Number(I) + 1
                                      : Number(I) - 1
                                    ).toString()
                                  ),
                                value: I,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return z(t.value);
                                },
                              }),
                            }),
                            (0, r.jsx)(eL.Z, {
                              label: "Unit Price",
                              children: (0, r.jsx)(x.Z, {
                                isLoading: K,
                                type: "number",
                                icon: (0, r.jsx)(w.Z, {}),
                                value: k,
                                width: 110,
                                onChange: (e) => {
                                  let { target: t } = e;
                                  return H(t.value);
                                },
                              }),
                            }),
                          ],
                        }),
                      (0, r.jsx)(j.Z, {
                        id: "forwards-chart".concat(s ? "-compact" : ""),
                        compact: s,
                        chartData: null != L ? L : _.V,
                        height: a,
                        showKeys: !1,
                        showPortial: !s && void 0 !== L,
                        showProfitLoss: !1,
                        caller: "Forwards",
                      }),
                      G &&
                        (0, r.jsx)(E.Z, {
                          isOpen: A,
                          closeModal: (e) => T(e),
                          submitOrder: () => {
                            R && (et(R.order, R.type), U(void 0), T(!1));
                          },
                          auctionSubmission: R,
                          positionBuilderStrategies: [
                            {
                              leg: G.order.legs[0],
                              referencePrice: k,
                              payoff:
                                "CURRENT" === p
                                  ? "Forward (".concat(
                                      (0, y.p6)("".concat(o), y.Nn, y.KJ),
                                      ")"
                                    )
                                  : "Forward (Next Auction)",
                            },
                          ],
                          orderSummary: G,
                        }),
                      !s &&
                        (0, r.jsx)(O.Z, {
                          asContainer: !1,
                          orderSummary: G,
                          submitAuction: ee,
                        }),
                    ],
                  })
                );
              },
              height: {
                compact: { mobile: 75, tablet: 84, lg: 120 },
                normal: {
                  mobile: { withInstructions: 179, withoutInstructions: 240 },
                  tablet: { withInstructions: 179, withoutInstructions: 240 },
                  lg: { withInstructions: 179, withoutInstructions: 240 },
                },
              },
            },
          },
          tI = function (e, t) {
            let s,
              a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = arguments.length > 3 ? arguments[3] : void 0,
              n = arguments.length > 4 ? arguments[4] : void 0,
              l =
                arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              o =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            if (!tC[e]) return null;
            let { component: c, height: d } = tC[e];
            if (a)
              s = l ? d.compact.lg : o ? d.compact.tablet : d.compact.mobile;
            else {
              let e = l ? d.normal.lg : o ? d.normal.tablet : d.normal.mobile;
              s = t ? e.withInstructions : e.withoutInstructions;
            }
            return (0, r.jsx)(c, {
              showInstructions: t,
              compact: a,
              radioChosen: i,
              onRadioChange: n,
              chartHeight: s,
            });
          };
        var tD = s(72696),
          tk = () =>
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
                  fill: "var(--white-10)",
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
            }),
          tP = s(92174),
          tL = s.n(tP),
          tE = (e) => {
            let {
                activeDropdown: t,
                setActiveDropdown: s,
                openOptions: a,
                activeTab: i,
                setActiveTab: l,
                tabClassName: o,
              } = e,
              [c, d] = (0, n.useState)(i.description),
              [u, m] = (0, n.useState)(i.title),
              [h, p] = (0, n.useState)({}),
              x = (0, et.Z)(es.oh),
              w = (0, et.Z)(es.rN);
            (0, n.useEffect)(() => {
              d(i.description),
                m(i.title),
                p(a.reduce((e, t) => ((e[t.id] = t.description), e), {}));
            }, [a, i]);
            let j = (0, n.useMemo)(
                () =>
                  tI(
                    i.contentId,
                    !1,
                    !0,
                    void 0,
                    (e, t) => {
                      d(e), t && m(t);
                    },
                    x,
                    w
                  ),
                [i, x, w]
              ),
              f = (0, n.useMemo)(
                () =>
                  a.map((e) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className: "tab--"
                          .concat(e.id, " ")
                          .concat(tL().tab, " ")
                          .concat(o),
                        onClick: () => {
                          l(e), s(!1);
                        },
                        children: [
                          (0, r.jsxs)("div", {
                            className: tL().tabInfo,
                            children: [
                              (0, r.jsx)("h3", { children: e.title }),
                              (0, r.jsx)("p", { children: h[e.id] }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: tL().tabChart,
                            children: tI(
                              e.contentId,
                              !1,
                              !0,
                              void 0,
                              (t) => {
                                p({ ...h, [e.id]: t });
                              },
                              x,
                              w
                            ),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                [a, h, w, x]
              );
            return (0, r.jsxs)("div", {
              style: { maxHeight: t ? "3000px" : "119px" },
              className: tL().dropDownPanel,
              children: [
                (0, r.jsxs)("div", {
                  className: "tab--"
                    .concat(i.id, " ")
                    .concat(tL().tab, " ")
                    .concat(o),
                  onClick: () => s(!t),
                  children: [
                    (0, r.jsxs)("div", {
                      className: tL().tabInfo,
                      children: [
                        (0, r.jsx)("h3", { children: u }),
                        (0, r.jsx)("p", { children: c }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: tL().tabChart,
                      children: j,
                    }),
                  ],
                }),
                f,
                (0, r.jsx)("button", {
                  onClick: () => s(!t),
                  className: tL().openStoriesDropdown,
                  children: (0, r.jsx)(tk, {}),
                }),
              ],
            });
          },
          tO = (e) => {
            let { tab: t, isActive: s, onClick: a, tabClassName: i } = e,
              [l, o] = (0, n.useState)(t.description),
              [c, d] = (0, n.useState)(t.title),
              u = (0, et.Z)(es.oh),
              m = (0, et.Z)(es.rN),
              h = (0, n.useMemo)(
                () =>
                  tI(
                    t.contentId,
                    !1,
                    !0,
                    void 0,
                    (e, t) => {
                      o(e), t && d(t);
                    },
                    u,
                    m
                  ),
                [t.contentId, u, m]
              );
            return (0, r.jsxs)("div", {
              className: ""
                .concat(tL().tab, " ")
                .concat(s ? tL().isActive : "", " ")
                .concat(i),
              role: "button",
              onClick: a,
              children: [
                (0, r.jsxs)("div", {
                  className: tL().tabInfo,
                  children: [
                    (0, r.jsx)("h3", { children: c }),
                    (0, r.jsx)("p", { children: l }),
                  ],
                }),
                (0, r.jsx)("div", { className: tL().tabChart, children: h }),
              ],
            });
          },
          tF = (e) => {
            let { tabs: t, activeTab: s, setActiveTab: a, tabClassName: i } = e;
            return (0, r.jsx)("div", {
              className: tL().leftPanelContainer,
              children: (0, r.jsx)("div", {
                className: D()(tL().leftPanel, "lg:tw-min-h-[600px]"),
                children: t.map((e) =>
                  (0, r.jsx)(
                    tO,
                    {
                      tab: e,
                      isActive: s.id === e.id,
                      onClick: () => a(e),
                      tabClassName: i,
                    },
                    e.id
                  )
                ),
              }),
            });
          },
          tZ = (e) => {
            var t;
            let {
                activeTab: s,
                setActiveTab: a,
                className: i,
                tabs: l,
                showInstructions: o,
                setShowInstructions: c,
                tabClassName: d,
              } = e,
              m = (0, eG.F)(),
              h = (0, u.I)(),
              {
                earnTab: p,
                setEarnTab: x,
                bonusTab: w,
                setBonusTab: j,
              } = (0, N.xc)(),
              f = () =>
                "earn" === s.id
                  ? p
                  : "bonusTwinWin" === s.id
                  ? w
                  : (s.radioOptions && s.radioOptions[0].value) || "",
              [g, b] = (0, n.useState)(f()),
              [y, v] = (0, n.useState)([]),
              [S, I] = (0, n.useState)(!1),
              k = (0, et.Z)(es.oh),
              P = (0, et.Z)(es.rN),
              L = (e) => {
                "earn" === s.id ? x(e) : "bonusTwinWin" === s.id && j(e), b(e);
              };
            (0, n.useEffect)(() => {
              L(f()), v(l.filter((e) => e.id !== s.id));
            }, [s, l]),
              (0, n.useEffect)(() => {}, [y, S]);
            let E = (0, n.useCallback)(
                () =>
                  (s.radioOptions || []).map((e, t) => {
                    let { option: s, value: a } = e;
                    return {
                      option: (0, r.jsxs)("div", {
                        className: tL().radioOptionLbl,
                        children: [
                          (0, r.jsx)(r.Fragment, { children: s }),
                          O(t),
                        ],
                      }),
                      value: a,
                    };
                  }),
                [s, g]
              ),
              O = (e) => {
                var t, a;
                let i =
                  g ===
                    (null == s
                      ? void 0
                      : null === (t = s.underText) || void 0 === t
                      ? void 0
                      : t[e].value) &&
                  s.underText &&
                  e < s.underText.length;
                return (0, r.jsx)(r.Fragment, {
                  children:
                    i &&
                    (0, r.jsx)("span", {
                      className: "".concat(tL().underTextLabel),
                      children:
                        null == s
                          ? void 0
                          : null === (a = s.underText) || void 0 === a
                          ? void 0
                          : a[e].label,
                    }),
                });
              },
              F = (0, n.useMemo)(
                () => tI(s.contentId, o, !1, g, void 0, k, P),
                [s.contentId, k, P, g, o]
              );
            return (0, r.jsxs)("div", {
              className: "tabCard--"
                .concat(h, " ")
                .concat(tL().container, " ")
                .concat(i),
              children: [
                "desktop" !== m
                  ? (0, r.jsx)(tE, {
                      activeTab: s,
                      activeDropdown: S,
                      setActiveTab: a,
                      tabClassName: d,
                      setActiveDropdown: I,
                      openOptions: y,
                    })
                  : (0, r.jsx)(tF, {
                      tabs: l,
                      activeTab: s,
                      setActiveTab: a,
                      tabClassName: d,
                    }),
                (0, r.jsx)("div", {
                  className: tL().rightPanelContainer,
                  children: (0, r.jsx)("div", {
                    className: "verticalScrollBar",
                    children: (0, r.jsxs)("div", {
                      className: D()(
                        "tabCard--".concat(s.id),
                        tL().rightPanel,
                        "tw-flex tw-flex-col lg:tw-min-h-[600px]"
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className: "rightPanelHeader--"
                            .concat(s.id, " ")
                            .concat(tL().rightPanelHeader, " ")
                            .concat(
                              (
                                null === (t = s.underText) || void 0 === t
                                  ? void 0
                                  : t.length
                              )
                                ? "".concat(tL().hasSubtitles)
                                : ""
                            ),
                          children: [
                            "earn" !== s.id && "bonusTwinWin" !== s.id
                              ? (0, r.jsx)("h2", {
                                  children: s.selectedTitle || s.title,
                                })
                              : "phone" !== m
                              ? (0, r.jsx)(C.Z, {
                                  size: "large",
                                  options: E(),
                                  selectedOption: g,
                                  name: "".concat(s.id, "-type"),
                                  onChange: L,
                                  width: 300,
                                })
                              : (0, r.jsx)("div", {
                                  className: "mb-12 full-width",
                                  children: (0, r.jsx)(C.Z, {
                                    size: "large",
                                    options: E(),
                                    selectedOption: g,
                                    name: "".concat(s.id, "-type"),
                                    onChange: L,
                                    width: 300,
                                  }),
                                }),
                            !s.disableInstructions &&
                              (0, r.jsx)("div", {
                                className: ""
                                  .concat(tL().toggleWrapper, " ")
                                  .concat(
                                    "earn" !== s.id && "bonusTwinWin" !== s.id
                                      ? ""
                                      : "".concat(tL().earnOrBonus),
                                    "}"
                                  ),
                                children: (0, r.jsx)(tD.Z, {
                                  size: "sm",
                                  defaultState: o ? "right" : "left",
                                  rightLabel: "Show Instructions",
                                  rightLabelClass: "white-80 font-bold",
                                  onChange: () => c(!o),
                                }),
                              }),
                          ],
                        }),
                        F,
                      ],
                    }),
                  }),
                }),
              ],
            });
          };
      },
      72067: function (e, t, s) {
        "use strict";
        s.d(t, {
          Ch: function () {
            return i;
          },
          FS: function () {
            return r;
          },
          Lc: function () {
            return n;
          },
          Ur: function () {
            return o;
          },
          he: function () {
            return l;
          },
        });
        var a = s(85893);
        let i = {
            ACCUMULATOR_BULL: (0, a.jsxs)("div", {
              className: "tw-flex tw-min-h-[110px] tw-flex-col tw-gap-2",
              children: [
                (0, a.jsx)("p", {
                  children:
                    "Stairway to Heaven: Climb up the steady profits’ path with our Accumulator as markets rise but don't let a sudden drop turn your symphony into Highway to Hell.",
                }),
                (0, a.jsx)("p", {
                  children:
                    "Accumulator ticks up profits within precision-engineered boundaries - but remember, even perfect timing can't save you from market gravity.",
                }),
              ],
            }),
            ACCUMULATOR_BEAR: (0, a.jsxs)("div", {
              className: "tw-flex tw-min-h-[110px] tw-flex-col tw-gap-2",
              children: [
                (0, a.jsx)("p", {
                  children:
                    "Stairway to Heaven: Climb up the steady profits’ path with our Accumulator as markets fall but don't let a sudden rise turn your symphony into Highway to Hell.",
                }),
                (0, a.jsx)("p", {
                  children:
                    "Accumulator ticks up profits within precision-engineered boundaries - but remember, even perfect timing can't save you from market gravity.",
                }),
              ],
            }),
            STRATEGY: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", { children: "Earn Baseline Yield" }),
                (0, a.jsx)("div", {
                  children: "Leverage your Market View -> Boost Return",
                }),
              ],
            }),
            "Twin Win":
              "Pay a premium to be long the underlying while becoming short the underlying up to a barrier below the strike.",
            Bonus:
              "Pay a premium to be long the underlying while protecting downside up to a barrier below the strike.",
            "Risky Earn":
              "Define an asset price target.\nEarn risky yield on your capital at risk.",
            "Riskless Earn":
              "Earn yield on your collateralized loan \n( no margin liquidation risk ).",
            UP_IN: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "fs-xs-semibold",
                  children: [
                    "Up-and-In Call Option: ",
                    (0, a.jsx)("span", {
                      className: "italic",
                      children: "The Sniper",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children:
                    "Cheapen right to buy, which springs to life when asset price rises past a barrier; like a sniper waiting for just the right market climb to take its shot.",
                }),
              ],
            }),
            UP_OUT: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "fs-xs-semibold",
                  children: [
                    "Up-and-Out Call Option: ",
                    (0, a.jsx)("span", {
                      className: "italic",
                      children: "The Highwire Act",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children:
                    "Cheapen Right to buy when a modest rise expected but not a leap, walking a fine line between profit and knockout.",
                }),
              ],
            }),
            DOWN_IN: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "fs-xs-semibold nowrap",
                  children: [
                    "Down-and-In Put Option:",
                    (0, a.jsx)("span", {
                      className: "italic",
                      children: "Guardian Angel Depth Charge",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children:
                    "Cheapen downside protection by activating right to sell when market sinks below a certain level and detonating like a finely calibrated depth charge acting as a guardian angel; stepping in when the market falls too much.",
                }),
              ],
            }),
            DOWN_OUT: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "fs-xs-semibold",
                  children: [
                    "Down-and-Out Put Option: ",
                    (0, a.jsx)("span", {
                      className: "italic",
                      children: "The Bungee Jumper",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children:
                    "Cheapen downside protection, risking Knock-out if the prices plunges past the barrier: ideal for a modest downdraft, not a rout.",
                }),
              ],
            }),
          },
          r = {
            "Risky Earn": (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: "color-white",
                  children: "Risky Earn",
                }),
                " | ",
                (0, a.jsx)("span", {
                  className: "color-white-60",
                  children: "Riskless Earn",
                }),
              ],
            }),
            "Riskless Earn": (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: "color-white-60",
                  children: "Risky Earn",
                }),
                " | ",
                (0, a.jsx)("span", {
                  className: "color-white",
                  children: "Riskless Earn",
                }),
              ],
            }),
            Bonus: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: "color-white",
                  children: "Bonus",
                }),
                " | ",
                (0, a.jsx)("span", {
                  className: "color-white-60",
                  children: "Twin Win",
                }),
              ],
            }),
            "Twin Win": (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: "color-white-60",
                  children: "Bonus",
                }),
                " | ",
                (0, a.jsx)("span", {
                  className: "color-white",
                  children: "Twin Win",
                }),
              ],
            }),
          },
          n = [
            {
              id: "options",
              title: "Options",
              selectedTitle: "Option",
              description:
                "A Call Option is a contract providing the user with the right to buy an asset at a fixed price at contract expiry, while a Put Option provides the user with the equivalent right to sell.",
              contentId: "optionsChart",
            },
            {
              id: "digital-options",
              title: "Digital Options",
              selectedTitle: "Digital Option",
              description:
                "A Digital Call Option pays off if underlying asset price ends up above the strike at expiry, while a Digital Put Option pays off if underlying asset price ends up below the strike at expiry. Bet on whether the market will finish above or below the strike and get paid accordingly.",
              contentId: "digitalOptionsChart",
            },
            {
              id: "forwards",
              title: "Forwards",
              selectedTitle: "Forward",
              description:
                "A Forward is a contract where the user agrees to buy or sell an asset at a fixed price and date in the future.\nGain or loss depends on the difference between the agreed price and the market price at expiry.",
              contentId: "forwardsChart",
            },
          ],
          l = [
            {
              id: "bet",
              title: "Bet",
              description:
                "Place a Bet on whether an asset price ends up at expiry date inside or outside a user defined range and get paid accordingly.",
              contentId: "betChart",
            },
            {
              id: "earn",
              title: r["Risky Earn"],
              description: i["Risky Earn"],
              contentId: "earnChart",
              radioOptions: [
                { option: "Risky Earn", value: "Risky Earn" },
                { option: "Riskless Earn", value: "Riskless Earn" },
              ],
              underText: [
                { label: "Capital At Risk", value: "Risky Earn" },
                { label: "Collateralized Lending", value: "Riskless Earn" },
              ],
            },
            {
              id: "noGainNoPayin",
              title: "No Gain, No Payin’",
              description:
                "Buy an option WITHOUT spending premium with maximum downside amount to be lost if asset price ends up at the strike; if you do not get the direction right, you also get your collateral back!",
              contentId: "noGainNoPayinChart",
            },
            {
              id: "bonusTwinWin",
              title: r.Bonus,
              description: i.Bonus,
              contentId: "bonusTwinWinChart",
              radioOptions: [
                { option: "Bonus", value: "Bonus" },
                { option: "Twin-Win", value: "Twin Win" },
              ],
            },
            {
              id: "barriers",
              title: "Barriers",
              description: i.UP_IN,
              contentId: "barriersChart",
            },
            {
              id: "accumulator",
              title: "Accumulator",
              description: i.ACCUMULATOR_BULL,
              contentId: "accumulatorChart",
              disableInstructions: !0,
            },
          ],
          o = [
            {
              id: "bull",
              title: "Bull",
              description: i.STRATEGY,
              contentId: "bull",
            },
            {
              id: "range",
              title: "Range",
              description: i.STRATEGY,
              contentId: "range",
            },
            {
              id: "bear",
              title: "Bear",
              description: i.STRATEGY,
              contentId: "bear",
            },
            {
              id: "sharkFin",
              title: "Shark Fin",
              description: i.STRATEGY,
              contentId: "sharkFin",
            },
          ];
      },
      24760: function (e, t, s) {
        "use strict";
        var a = s(85893),
          i = s(67294),
          r = s(39332),
          n = s(59731),
          l = s(57153),
          o = s(15418),
          c = s(55975),
          d = s(24514),
          u = s(56267);
        t.Z = () => {
          let e = (0, r.usePathname)().split("/"),
            { tradingPageTab: t, setTradingPageTab: s } = (0, n.xc)();
          return (
            (0, i.useEffect)(() => {
              t !== e[2] && s(e[2]);
            }, []),
            (0, a.jsxs)(d.Z, {
              direction: "row-space-between",
              children: [
                (0, a.jsx)(c.Z, {
                  tabs: l.rV,
                  className: "mb-0",
                  activeTab: t,
                  onChange: (e) => {
                    s(e),
                      o.Z.track("Trading menu interactions", {
                        path: "trading/".concat(e),
                      });
                  },
                }),
                (0, a.jsx)(u.Z, {}),
              ],
            })
          );
        };
      },
      28217: function (e, t, s) {
        "use strict";
        s.r(t);
        var a = s(85893),
          i = s(67294),
          r = s(92505),
          n = s(17809),
          l = s(27888),
          o = s(85292),
          c = s(24760),
          d = s(72067),
          u = s(43417),
          m = s(56197),
          h = s.n(m),
          p = s(59731);
        t.default = () => {
          let [e, t] = (0, i.useState)(!0),
            { marketTab: s, setMarketTab: m } = (0, p.xc)(),
            x = (0, i.useMemo)(() => {
              let e = d.Lc.find((e) => e.id === s);
              return null != e ? e : d.Lc[0];
            }, [s]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(l.Z, {
                children: (0, a.jsxs)(o.Z, {
                  className: "tw-pb-56",
                  children: [
                    (0, a.jsx)(c.Z, {}),
                    (0, a.jsx)(u.F, { hideHours: !0 }),
                    (0, a.jsx)(n.Z, {
                      activeTab: x,
                      setActiveTab: (e) => {
                        m(e.id);
                      },
                      className: "mt-39 ".concat(h().tabCard),
                      tabClassName: "ptb-5 plr-20",
                      tabs: d.Lc,
                      showInstructions: e,
                      setShowInstructions: t,
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      },
      21503: function (e) {
        e.exports = {
          container: "Instructions_container__u2Wbe",
          greyText: "Instructions_greyText__UTedI",
          curlyDown: "Instructions_curlyDown__9_42L",
          curlySide: "Instructions_curlySide__y6tKn",
          squareBracketSm: "Instructions_squareBracketSm__saH3d",
          squareBracketLg: "Instructions_squareBracketLg__O9mJh",
          divider: "Instructions_divider__YrT_J",
          greyDivider: "Instructions_greyDivider__CBJJI",
          italic: "Instructions_italic__tNK_q",
          largerGap: "Instructions_largerGap__pR8jn",
          stackedLogo: "Instructions_stackedLogo__AZjR4",
          spacer: "Instructions_spacer__Y4nPM",
          risklessPay: "Instructions_risklessPay__DfGm2",
          description: "Instructions_description__zaHwb",
          gridContainer: "Instructions_gridContainer__2dGsk",
        };
      },
      71665: function (e) {
        e.exports = {
          container: "LabeledControl_container__grxaX",
          labelHidden: "LabeledControl_labelHidden__AWeQv",
        };
      },
      29181: function (e) {
        e.exports = {
          container: "LabeledInput_container__HuIrc",
          wrapper: "LabeledInput_wrapper__A_kW5",
        };
      },
      33815: function (e) {
        e.exports = {
          container: "Slider_container__9PHEn",
          containerExtend: "Slider_containerExtend__xTKur",
          containerExtendRange: "Slider_containerExtendRange__583MC",
          containerNoLabels: "Slider_containerNoLabels__noA3H",
          wrapper: "Slider_wrapper__jqmr8",
          inputWrapper: "Slider_inputWrapper__pVyCv",
          controlWrapper: "Slider_controlWrapper__tZ_J2",
          input: "Slider_input__Cwb7w",
          railExtendRange: "Slider_railExtendRange__6BV2_",
          railExtend: "Slider_railExtend___F_di",
          rail: "Slider_rail__Gp98y",
          innerRail: "Slider_innerRail__qOg4E",
          control: "Slider_control__U8_4g",
          hide: "Slider_hide__60Zyf",
          labelContainer: "Slider_labelContainer__EaWe7",
          labelItem: "Slider_labelItem__ksPEP",
          highlight: "Slider_highlight__hL2M5",
          rightShift: "Slider_rightShift__aeEL3",
          sliderEffect: "Slider_sliderEffect__r_MtX",
        };
      },
      92174: function (e) {
        e.exports = {
          container: "TabCard_container__K7J4v",
          leftPanel: "TabCard_leftPanel__0Fl81",
          rightPanel: "TabCard_rightPanel__cmy_K",
          leftPanelContainer: "TabCard_leftPanelContainer__FUrZO",
          rightPanelContainer: "TabCard_rightPanelContainer__00_PO",
          tab: "TabCard_tab__VTnVs",
          isActive: "TabCard_isActive__8HEIA",
          tabInfo: "TabCard_tabInfo__4eiQT",
          tabChart: "TabCard_tabChart__Ytz5t",
          rightPanelHeader: "TabCard_rightPanelHeader__SpRkA",
          hasSubtitles: "TabCard_hasSubtitles__AK1X9",
          toggleWrapper: "TabCard_toggleWrapper__jqkrO",
          dropDownPanel: "TabCard_dropDownPanel__g_WP9",
          earnOrBonus: "TabCard_earnOrBonus__XVgOR",
          openStoriesDropdown: "TabCard_openStoriesDropdown__6X90T",
          headerWrapper: "TabCard_headerWrapper__ssfSN",
          headerAndToggleWrapper: "TabCard_headerAndToggleWrapper__SC_5v",
          underTextLabel: "TabCard_underTextLabel__ILXdQ",
          radioOptionLbl: "TabCard_radioOptionLbl__2DeeZ",
        };
      },
      13701: function (e) {
        e.exports = {
          radioButtonClassName: "Barriers_radioButtonClassName__9pQCi",
          optionClassName: "Barriers_optionClassName__sjgNJ",
          labelClassName: "Barriers_labelClassName__jwRAC",
          sideRadioButtonClassName: "Barriers_sideRadioButtonClassName__5vOnq",
        };
      },
      6415: function (e) {
        e.exports = {
          label: "Earn_label__IISNp",
          value: "Earn_value__MEtqp",
          riskWrapper: "Earn_riskWrapper__UNdKx",
        };
      },
      56197: function (e) {
        e.exports = { tabCard: "market_tabCard__MGVX4" };
      },
      71002: function (e, t, s) {
        "use strict";
        function a(e) {
          return (a =
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
        s.d(t, {
          Z: function () {
            return a;
          },
        });
      },
      96752: function (e, t, s) {
        "use strict";
        s.d(t, {
          P: function () {
            return u;
          },
        });
        var a = s(67294),
          i = s(38213),
          r = s(83619),
          n = s(22944),
          l = s(18419),
          o = s(65448),
          c = s(14872);
        let d = (0, r.yV)(function (e, t) {
            var s;
            let i = (0, c.B)(),
              { disabled: d = i || !1, autoFocus: u = !1, ...m } = e,
              { isFocusVisible: h, focusProps: p } = (0, n.F)({ autoFocus: u }),
              { isHovered: x, hoverProps: w } = (0, l.X)({ isDisabled: d }),
              { pressed: j, pressProps: f } = (0, o.x)({ disabled: d }),
              g = (0, r.dG)(
                {
                  ref: t,
                  type: null != (s = m.type) ? s : "button",
                  disabled: d || void 0,
                  autoFocus: u,
                },
                p,
                w,
                f
              ),
              b = (0, a.useMemo)(
                () => ({
                  disabled: d,
                  hover: x,
                  focus: h,
                  active: j,
                  autofocus: u,
                }),
                [d, x, h, j, u]
              );
            return (0, r.L6)()({
              ourProps: g,
              theirProps: m,
              slot: b,
              defaultTag: "button",
              name: "Button",
            });
          }),
          u = (0, r.yV)(function (e, t) {
            let s = (0, i.$)();
            return a.createElement(d, {
              ref: t,
              ...(0, r.dG)({ onClick: s }, e),
            });
          });
      },
      14872: function (e, t, s) {
        "use strict";
        s.d(t, {
          B: function () {
            return r;
          },
        });
        var a = s(67294);
        let i = (0, a.createContext)(void 0);
        function r() {
          return (0, a.useContext)(i);
        }
      },
    },
    function (e) {
      e.O(
        0,
        [
          5128, 6342, 9261, 4442, 5675, 7410, 1371, 9342, 2592, 4782, 6322,
          9773, 1664, 9849, 8026, 7461, 52, 7972, 497, 6746, 8238, 579, 8833,
          9156, 8755, 3797, 2199, 9816, 2888, 9774, 179,
        ],
        function () {
          return e((e.s = 26359));
        }
      ),
        (_N_E = e.O());
    },
  ]);
