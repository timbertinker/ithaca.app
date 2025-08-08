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
      (e._sentryDebugIds[t] = "b853b77e-e065-4569-98ad-d401bfb4a452"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-b853b77e-e065-4569-98ad-d401bfb4a452"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4782],
    {
      98566: function (e, t, o) {
        "use strict";
        o.d(t, {
          Z: function () {
            return Q;
          },
        });
        var r = o(97582),
          n = o(67294),
          i = o(71642),
          a = o(99495),
          s = (0, o(87122)._)(),
          c = function () {},
          l = n.forwardRef(function (e, t) {
            var o = n.useRef(null),
              i = n.useState({
                onScrollCapture: c,
                onWheelCapture: c,
                onTouchMoveCapture: c,
              }),
              l = i[0],
              u = i[1],
              p = e.forwardProps,
              d = e.children,
              w = e.className,
              A = e.removeScrollBar,
              h = e.enabled,
              f = e.shards,
              b = e.sideCar,
              m = e.noIsolation,
              g = e.inert,
              y = e.allowPinchZoom,
              C = e.as,
              k = e.gapMode,
              v = (0, r.__rest)(e, [
                "forwardProps",
                "children",
                "className",
                "removeScrollBar",
                "enabled",
                "shards",
                "sideCar",
                "noIsolation",
                "inert",
                "allowPinchZoom",
                "as",
                "gapMode",
              ]),
              B = (0, a.q)([o, t]),
              E = (0, r.__assign)((0, r.__assign)({}, v), l);
            return n.createElement(
              n.Fragment,
              null,
              h &&
                n.createElement(b, {
                  sideCar: s,
                  removeScrollBar: A,
                  shards: f,
                  noIsolation: m,
                  inert: g,
                  setCallbacks: u,
                  allowPinchZoom: !!y,
                  lockRef: o,
                  gapMode: k,
                }),
              p
                ? n.cloneElement(
                    n.Children.only(d),
                    (0, r.__assign)((0, r.__assign)({}, E), { ref: B })
                  )
                : n.createElement(
                    void 0 === C ? "div" : C,
                    (0, r.__assign)({}, E, { className: w, ref: B }),
                    d
                  )
            );
          });
        (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (l.classNames = { fullWidth: i.zi, zeroRight: i.pF });
        var u = o(66781),
          p = o(37087),
          d = o(6525),
          w = !1;
        if ("undefined" != typeof window)
          try {
            var A = Object.defineProperty({}, "passive", {
              get: function () {
                return (w = !0), !0;
              },
            });
            window.addEventListener("test", A, A),
              window.removeEventListener("test", A, A);
          } catch (e) {
            w = !1;
          }
        var h = !!w && { passive: !1 },
          f = function (e, t) {
            if (!(e instanceof Element)) return !1;
            var o = window.getComputedStyle(e);
            return (
              "hidden" !== o[t] &&
              !(
                o.overflowY === o.overflowX &&
                "TEXTAREA" !== e.tagName &&
                "visible" === o[t]
              )
            );
          },
          b = function (e, t) {
            var o = t.ownerDocument,
              r = t;
            do {
              if (
                ("undefined" != typeof ShadowRoot &&
                  r instanceof ShadowRoot &&
                  (r = r.host),
                m(e, r))
              ) {
                var n = g(e, r);
                if (n[1] > n[2]) return !0;
              }
              r = r.parentNode;
            } while (r && r !== o.body);
            return !1;
          },
          m = function (e, t) {
            return "v" === e ? f(t, "overflowY") : f(t, "overflowX");
          },
          g = function (e, t) {
            return "v" === e
              ? [t.scrollTop, t.scrollHeight, t.clientHeight]
              : [t.scrollLeft, t.scrollWidth, t.clientWidth];
          },
          y = function (e, t, o, r, n) {
            var i,
              a =
                ((i = window.getComputedStyle(t).direction),
                "h" === e && "rtl" === i ? -1 : 1),
              s = a * r,
              c = o.target,
              l = t.contains(c),
              u = !1,
              p = s > 0,
              d = 0,
              w = 0;
            do {
              var A = g(e, c),
                h = A[0],
                f = A[1] - A[2] - a * h;
              (h || f) && m(e, c) && ((d += f), (w += h)),
                c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
            } while (
              (!l && c !== document.body) ||
              (l && (t.contains(c) || t === c))
            );
            return (
              p && ((n && 1 > Math.abs(d)) || (!n && s > d))
                ? (u = !0)
                : !p && ((n && 1 > Math.abs(w)) || (!n && -s > w)) && (u = !0),
              u
            );
          },
          C = function (e) {
            return "changedTouches" in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          },
          k = function (e) {
            return [e.deltaX, e.deltaY];
          },
          v = function (e) {
            return e && "current" in e ? e.current : e;
          },
          B = 0,
          E = [],
          x = (0, u.L)(s, function (e) {
            var t = n.useRef([]),
              o = n.useRef([0, 0]),
              i = n.useRef(),
              a = n.useState(B++)[0],
              s = n.useState(d.Ws)[0],
              c = n.useRef(e);
            n.useEffect(
              function () {
                c.current = e;
              },
              [e]
            ),
              n.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(a)
                    );
                    var t = (0, r.__spreadArray)(
                      [e.lockRef.current],
                      (e.shards || []).map(v),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(a)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(a)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(a)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var l = n.useCallback(function (e, t) {
                if (
                  ("touches" in e && 2 === e.touches.length) ||
                  ("wheel" === e.type && e.ctrlKey)
                )
                  return !c.current.allowPinchZoom;
                var r,
                  n = C(e),
                  a = o.current,
                  s = "deltaX" in e ? e.deltaX : a[0] - n[0],
                  l = "deltaY" in e ? e.deltaY : a[1] - n[1],
                  u = e.target,
                  p = Math.abs(s) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === p && "range" === u.type)
                  return !1;
                var d = b(p, u);
                if (!d) return !0;
                if (
                  (d ? (r = p) : ((r = "v" === p ? "h" : "v"), (d = b(p, u))),
                  !d)
                )
                  return !1;
                if (
                  (!i.current &&
                    "changedTouches" in e &&
                    (s || l) &&
                    (i.current = r),
                  !r)
                )
                  return !0;
                var w = i.current || r;
                return y(w, t, e, "h" === w ? s : l, !0);
              }, []),
              u = n.useCallback(function (e) {
                if (E.length && E[E.length - 1] === s) {
                  var o = "deltaY" in e ? k(e) : C(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === o[0] &&
                        r[1] === o[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var n = (c.current.shards || [])
                      .map(v)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (n.length > 0 ? l(e, n[0]) : !c.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              w = n.useCallback(function (e, o, r, n) {
                var i = {
                  name: e,
                  delta: o,
                  target: r,
                  should: n,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              A = n.useCallback(function (e) {
                (o.current = C(e)), (i.current = void 0);
              }, []),
              f = n.useCallback(function (t) {
                w(t.type, k(t), t.target, l(t, e.lockRef.current));
              }, []),
              m = n.useCallback(function (t) {
                w(t.type, C(t), t.target, l(t, e.lockRef.current));
              }, []);
            n.useEffect(function () {
              return (
                E.push(s),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: m,
                }),
                document.addEventListener("wheel", u, h),
                document.addEventListener("touchmove", u, h),
                document.addEventListener("touchstart", A, h),
                function () {
                  (E = E.filter(function (e) {
                    return e !== s;
                  })),
                    document.removeEventListener("wheel", u, h),
                    document.removeEventListener("touchmove", u, h),
                    document.removeEventListener("touchstart", A, h);
                }
              );
            }, []);
            var g = e.removeScrollBar,
              x = e.inert;
            return n.createElement(
              n.Fragment,
              null,
              x
                ? n.createElement(s, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        a,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(a, " {pointer-events: all;}\n"),
                  })
                : null,
              g ? n.createElement(p.jp, { gapMode: e.gapMode }) : null
            );
          }),
          M = n.forwardRef(function (e, t) {
            return n.createElement(
              l,
              (0, r.__assign)({}, e, { ref: t, sideCar: x })
            );
          });
        M.classNames = l.classNames;
        var Q = M;
      },
      82251: function (e, t, o) {
        "use strict";
        function r(e) {
          var t = e.match(/^var\((.*)\)$/);
          return t ? t[1] : e;
        }
        function n(e, t) {
          var o = {};
          if ("object" == typeof t)
            !(function e(t, o) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [],
                n = {};
              for (var i in t) {
                var a = t[i],
                  s = [...r, i];
                "string" == typeof a || "number" == typeof a || null == a
                  ? (n[i] = o(a, s))
                  : "object" != typeof a || Array.isArray(a)
                  ? console.warn(
                      'Skipping invalid key "'
                        .concat(
                          s.join("."),
                          '". Should be a string, number, null or object. Received: "'
                        )
                        .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                    )
                  : (n[i] = e(a, o, s));
              }
              return n;
            })(t, (t, n) => {
              null != t &&
                (o[
                  r(
                    (function (e, t) {
                      var o = e;
                      for (var r of t) {
                        if (!(r in o))
                          throw Error(
                            "Path ".concat(
                              t.join(" -> "),
                              " does not exist in object"
                            )
                          );
                        o = o[r];
                      }
                      return o;
                    })(e, n)
                  )
                ] = String(t));
            });
          else
            for (var n in e) {
              var i = e[n];
              null != i && (o[r(n)] = i);
            }
          return (
            Object.defineProperty(o, "toString", {
              value: function () {
                return Object.keys(this)
                  .map((e) => "".concat(e, ":").concat(this[e]))
                  .join(";");
              },
              writable: !1,
            }),
            o
          );
        }
        o.d(t, {
          L: function () {
            return n;
          },
        });
      },
      90326: function (e, t, o) {
        "use strict";
        function r(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              o.push.apply(o, r);
          }
          return o;
        }
        function n(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(o), !0).forEach(function (t) {
                  !(function (e, t, o) {
                    var r;
                    (t =
                      "symbol" ==
                      typeof (r = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                          var r = o.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(t, "string"))
                        ? r
                        : String(r)) in e
                      ? Object.defineProperty(e, t, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = o);
                  })(e, t, o[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : r(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
          }
          return e;
        }
        o.d(t, {
          $: function () {
            return s;
          },
        });
        var i = (e) =>
            function () {
              for (var t = arguments.length, o = Array(t), r = 0; r < t; r++)
                o[r] = arguments[r];
              var i = Object.assign({}, ...o.map((e) => e.styles)),
                a = Object.keys(i),
                s = a.filter((e) => "mappings" in i[e]);
              return Object.assign(
                (t) => {
                  var o = [],
                    r = {},
                    a = n({}, t),
                    c = !1;
                  for (var l of s) {
                    var u = t[l];
                    if (null != u)
                      for (var p of ((c = !0), i[l].mappings))
                        (r[p] = u), null == a[p] && delete a[p];
                  }
                  var d = c ? n(n({}, r), a) : t;
                  for (var w in d)
                    if (
                      (function () {
                        var e = d[w],
                          t = i[w];
                        try {
                          if (t.mappings) return 1;
                          if ("string" == typeof e || "number" == typeof e)
                            o.push(t.values[e].defaultClass);
                          else if (Array.isArray(e))
                            for (var r = 0; r < e.length; r++) {
                              var n = e[r];
                              if (null != n) {
                                var a = t.responsiveArray[r];
                                o.push(t.values[n].conditions[a]);
                              }
                            }
                          else
                            for (var s in e) {
                              var c = e[s];
                              null != c && o.push(t.values[c].conditions[s]);
                            }
                        } catch (e) {
                          throw e;
                        }
                      })()
                    )
                      continue;
                  return e(o.join(" "));
                },
                { properties: new Set(a) }
              );
            },
          a = (e) => e,
          s = function () {
            return i(a)(...arguments);
          };
      },
      49106: function (e, t, o) {
        "use strict";
        o.d(t, {
          d: function () {
            return i;
          },
          M: function () {
            return n;
          },
        });
        var r = function (e, t) {
          return (
            Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }),
            e
          );
        };
        function n(e) {
          var { conditions: t } = e;
          if (!t) throw Error("Styles have no conditions");
          return r(
            function (e) {
              if (
                "string" == typeof e ||
                "number" == typeof e ||
                "boolean" == typeof e
              ) {
                if (!t.defaultCondition) throw Error("No default condition");
                return { [t.defaultCondition]: e };
              }
              if (Array.isArray(e)) {
                if (!("responsiveArray" in t))
                  throw Error("Responsive arrays are not supported");
                var o = {};
                for (var r in t.responsiveArray)
                  null != e[r] && (o[t.responsiveArray[r]] = e[r]);
                return o;
              }
              return e;
            },
            {
              importPath: "@vanilla-extract/sprinkles/createUtils",
              importName: "createNormalizeValueFn",
              args: [{ conditions: e.conditions }],
            }
          );
        }
        function i(e) {
          var { conditions: t } = e;
          if (!t) throw Error("Styles have no conditions");
          var o = n(e);
          return r(
            function (e, r) {
              if (
                "string" == typeof e ||
                "number" == typeof e ||
                "boolean" == typeof e
              ) {
                if (!t.defaultCondition) throw Error("No default condition");
                return r(e, t.defaultCondition);
              }
              var n = Array.isArray(e) ? o(e) : e,
                i = {};
              for (var a in n) null != n[a] && (i[a] = r(n[a], a));
              return i;
            },
            {
              importPath: "@vanilla-extract/sprinkles/createUtils",
              importName: "createMapValueFn",
              args: [{ conditions: e.conditions }],
            }
          );
        }
      },
      42238: function (e, t, o) {
        var r;
        !(function (n, i) {
          "use strict";
          var a = "function",
            s = "undefined",
            c = "object",
            l = "string",
            u = "major",
            p = "model",
            d = "name",
            w = "type",
            A = "vendor",
            h = "version",
            f = "architecture",
            b = "console",
            m = "mobile",
            g = "tablet",
            y = "smarttv",
            C = "wearable",
            k = "embedded",
            v = "Amazon",
            B = "Apple",
            E = "ASUS",
            x = "BlackBerry",
            M = "Browser",
            Q = "Chrome",
            I = "Firefox",
            D = "Google",
            W = "Huawei",
            O = "Microsoft",
            R = "Motorola",
            N = "Opera",
            S = "Samsung",
            F = "Sharp",
            P = "Sony",
            T = "Xiaomi",
            U = "Zebra",
            q = "Facebook",
            L = "Chromium OS",
            G = "Mac OS",
            H = " Browser",
            J = function (e, t) {
              var o = {};
              for (var r in e)
                t[r] && t[r].length % 2 == 0
                  ? (o[r] = t[r].concat(e[r]))
                  : (o[r] = e[r]);
              return o;
            },
            K = function (e) {
              for (var t = {}, o = 0; o < e.length; o++)
                t[e[o].toUpperCase()] = e[o];
              return t;
            },
            j = function (e, t) {
              return typeof e === l && -1 !== V(t).indexOf(V(e));
            },
            V = function (e) {
              return e.toLowerCase();
            },
            z = function (e, t) {
              if (typeof e === l)
                return (
                  (e = e.replace(/^\s\s*/, "")),
                  typeof t === s ? e : e.substring(0, 500)
                );
            },
            Z = function (e, t) {
              for (var o, r, n, s, l, u, p = 0; p < t.length && !l; ) {
                var d = t[p],
                  w = t[p + 1];
                for (o = r = 0; o < d.length && !l && d[o]; )
                  if ((l = d[o++].exec(e)))
                    for (n = 0; n < w.length; n++)
                      (u = l[++r]),
                        typeof (s = w[n]) === c && s.length > 0
                          ? 2 === s.length
                            ? typeof s[1] == a
                              ? (this[s[0]] = s[1].call(this, u))
                              : (this[s[0]] = s[1])
                            : 3 === s.length
                            ? typeof s[1] !== a || (s[1].exec && s[1].test)
                              ? (this[s[0]] = u
                                  ? u.replace(s[1], s[2])
                                  : void 0)
                              : (this[s[0]] = u
                                  ? s[1].call(this, u, s[2])
                                  : void 0)
                            : 4 === s.length &&
                              (this[s[0]] = u
                                ? s[3].call(this, u.replace(s[1], s[2]))
                                : void 0)
                          : (this[s] = u || i);
                p += 2;
              }
            },
            Y = function (e, t) {
              for (var o in t)
                if (typeof t[o] === c && t[o].length > 0) {
                  for (var r = 0; r < t[o].length; r++)
                    if (j(t[o][r], e)) return "?" === o ? i : o;
                } else if (j(t[o], e)) return "?" === o ? i : o;
              return t.hasOwnProperty("*") ? t["*"] : e;
            },
            X = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            _ = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [d, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [d, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [d, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [d, N + " Mini"]],
                [/\bop(?:rg)?x\/([\w\.]+)/i],
                [h, [d, N + " GX"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [d, N]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [h, [d, "Baidu"]],
                [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                [h, [d, "Maxthon"]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                  /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                  /(heytap|ovi|115)browser\/([\d\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [d, h],
                [/quark(?:pc)?\/([-\w\.]+)/i],
                [h, [d, "Quark"]],
                [/\bddg\/([\w\.]+)/i],
                [h, [d, "DuckDuckGo"]],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [d, "UC" + M]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                  /micromessenger\/([\w\.]+)/i,
                ],
                [h, [d, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [d, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [d, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [h, [d, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [h, [d, "Smart Lenovo " + M]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[d, /(.+)/, "$1 Secure " + M], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [d, I + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [d, N + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [d, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [d, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [d, N + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [d, "MIUI" + H]],
                [/fxios\/([\w\.-]+)/i],
                [h, [d, I]],
                [/\bqihoobrowser\/?([\w\.]*)/i],
                [h, [d, "360"]],
                [/\b(qq)\/([\w\.]+)/i],
                [[d, /(.+)/, "$1Browser"], h],
                [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                [[d, /(.+)/, "$1" + H], h],
                [/samsungbrowser\/([\w\.]+)/i],
                [h, [d, S + " Internet"]],
                [/metasr[\/ ]?([\d\.]+)/i],
                [h, [d, "Sogou Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [[d, "Sogou Mobile"], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
                ],
                [d, h],
                [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                [d],
                [
                  /ome\/([\w\.]+) \w* ?(iron) saf/i,
                  /ome\/([\w\.]+).+qihu (360)[es]e/i,
                ],
                [h, d],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[d, q], h],
                [
                  /(Klarna)\/([\w\.]+)/i,
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(alipay)client\/([\w\.]+)/i,
                  /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                  /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                ],
                [d, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [d, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [h, [d, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [d, Q + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[d, Q + " WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [d, "Android " + M]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [d, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [d, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, d],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  d,
                  [
                    h,
                    Y,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [d, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[d, "Netscape"], h],
                [/(wolvic|librewolf)\/([\w\.]+)/i],
                [d, h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [d, I + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [d, [h, /_/g, "."]],
                [/(cobalt)\/([\w\.]+)/i],
                [d, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[f, "amd64"]],
                [/(ia32(?=;))/i],
                [[f, V]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[f, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[f, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[f, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[f, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[f, /ower/, "", V]],
                [/(sun4\w)[;\)]/i],
                [[f, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[f, V]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [p, [A, S], [w, g]],
                [
                  /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                  /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [p, [A, S], [w, m]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [p, [A, B], [w, m]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [p, [A, B], [w, g]],
                [/(macintosh);/i],
                [p, [A, B]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [p, [A, F], [w, m]],
                [/(?:honor)([-\w ]+)[;\)]/i],
                [p, [A, "Honor"], [w, m]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [p, [A, W], [w, g]],
                [
                  /(?:huawei)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [p, [A, W], [w, m]],
                [
                  /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                ],
                [
                  [p, /_/g, " "],
                  [A, T],
                  [w, m],
                ],
                [
                  /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                  /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
                ],
                [
                  [p, /_/g, " "],
                  [A, T],
                  [w, g],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [p, [A, "OPPO"], [w, m]],
                [/\b(opd2\d{3}a?) bui/i],
                [p, [A, "OPPO"], [w, g]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [p, [A, "Vivo"], [w, m]],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [p, [A, "Realme"], [w, m]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [p, [A, R], [w, m]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [p, [A, R], [w, g]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [p, [A, "LG"], [w, g]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [p, [A, "LG"], [w, m]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [p, [A, "Lenovo"], [w, g]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [p, /_/g, " "],
                  [A, "Nokia"],
                  [w, m],
                ],
                [/(pixel c)\b/i],
                [p, [A, D], [w, g]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [p, [A, D], [w, m]],
                [
                  /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [p, [A, P], [w, m]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [p, "Xperia Tablet"],
                  [A, P],
                  [w, g],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [p, [A, "OnePlus"], [w, m]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [p, [A, v], [w, g]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [p, /(.+)/g, "Fire Phone $1"],
                  [A, v],
                  [w, m],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [p, A, [w, g]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [p, [A, x], [w, m]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [p, [A, E], [w, g]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [p, [A, E], [w, m]],
                [/(nexus 9)/i],
                [p, [A, "HTC"], [w, g]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [A, [p, /_/g, " "], [w, m]],
                [
                  /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
                ],
                [p, [A, "TCL"], [w, g]],
                [/(itel) ((\w+))/i],
                [
                  [A, V],
                  p,
                  [w, Y, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [p, [A, "Acer"], [w, g]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [p, [A, "Meizu"], [w, m]],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [p, [A, "Ulefone"], [w, m]],
                [
                  /; (energy ?\w+)(?: bui|\))/i,
                  /; energizer ([\w ]+)(?: bui|\))/i,
                ],
                [p, [A, "Energizer"], [w, m]],
                [
                  /; cat (b35);/i,
                  /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i,
                ],
                [p, [A, "Cat"], [w, m]],
                [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                [p, [A, "Smartfren"], [w, m]],
                [/droid.+; (a(?:015|06[35]|142p?))/i],
                [p, [A, "Nothing"], [w, m]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                  /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [A, p, [w, m]],
                [
                  /(imo) (tab \w+)/i,
                  /(kobo)\s(ereader|touch)/i,
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [A, p, [w, g]],
                [/(surface duo)/i],
                [p, [A, O], [w, g]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [p, [A, "Fairphone"], [w, m]],
                [/(u304aa)/i],
                [p, [A, "AT&T"], [w, m]],
                [/\bsie-(\w*)/i],
                [p, [A, "Siemens"], [w, m]],
                [/\b(rct\w+) b/i],
                [p, [A, "RCA"], [w, g]],
                [/\b(venue[\d ]{2,7}) b/i],
                [p, [A, "Dell"], [w, g]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [p, [A, "Verizon"], [w, g]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [p, [A, "Barnes & Noble"], [w, g]],
                [/\b(tm\d{3}\w+) b/i],
                [p, [A, "NuVision"], [w, g]],
                [/\b(k88) b/i],
                [p, [A, "ZTE"], [w, g]],
                [/\b(nx\d{3}j) b/i],
                [p, [A, "ZTE"], [w, m]],
                [/\b(gen\d{3}) b.+49h/i],
                [p, [A, "Swiss"], [w, m]],
                [/\b(zur\d{3}) b/i],
                [p, [A, "Swiss"], [w, g]],
                [/\b((zeki)?tb.*\b) b/i],
                [p, [A, "Zeki"], [w, g]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[A, "Dragon Touch"], p, [w, g]],
                [/\b(ns-?\w{0,9}) b/i],
                [p, [A, "Insignia"], [w, g]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [p, [A, "NextBook"], [w, g]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[A, "Voice"], p, [w, m]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[A, "LvTel"], p, [w, m]],
                [/\b(ph-1) /i],
                [p, [A, "Essential"], [w, m]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [p, [A, "Envizen"], [w, g]],
                [/\b(trio[-\w\. ]+) b/i],
                [p, [A, "MachSpeed"], [w, g]],
                [/\btu_(1491) b/i],
                [p, [A, "Rotor"], [w, g]],
                [/(shield[\w ]+) b/i],
                [p, [A, "Nvidia"], [w, g]],
                [/(sprint) (\w+)/i],
                [A, p, [w, m]],
                [/(kin\.[onetw]{3})/i],
                [
                  [p, /\./g, " "],
                  [A, O],
                  [w, m],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [p, [A, U], [w, g]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [p, [A, U], [w, m]],
                [/smart-tv.+(samsung)/i],
                [A, [w, y]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [p, /^/, "SmartTV"],
                  [A, S],
                  [w, y],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [A, "LG"],
                  [w, y],
                ],
                [/(apple) ?tv/i],
                [A, [p, B + " TV"], [w, y]],
                [/crkey/i],
                [
                  [p, Q + "cast"],
                  [A, D],
                  [w, y],
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [p, [A, v], [w, y]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [p, [A, F], [w, y]],
                [/(bravia[\w ]+)( bui|\))/i],
                [p, [A, P], [w, y]],
                [/(mitv-\w{5}) bui/i],
                [p, [A, T], [w, y]],
                [/Hbbtv.*(technisat) (.*);/i],
                [A, p, [w, y]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                ],
                [
                  [A, z],
                  [p, z],
                  [w, y],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[w, y]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [A, p, [w, b]],
                [/droid.+; (shield) bui/i],
                [p, [A, "Nvidia"], [w, b]],
                [/(playstation [345portablevi]+)/i],
                [p, [A, P], [w, b]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [p, [A, O], [w, b]],
                [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                [p, [A, S], [w, C]],
                [/((pebble))app/i],
                [A, p, [w, C]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [p, [A, B], [w, C]],
                [/droid.+; (glass) \d/i],
                [p, [A, D], [w, C]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [p, [A, U], [w, C]],
                [/droid.+; (glass) \d/i],
                [p, [A, D], [w, C]],
                [/(pico) (4|neo3(?: link|pro)?)/i],
                [A, p, [w, C]],
                [/; (quest( \d| pro)?)/i],
                [p, [A, q], [w, C]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [A, [w, k]],
                [/(aeobc)\b/i],
                [p, [A, v], [w, k]],
                [
                  /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
                ],
                [p, [w, m]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [p, [w, g]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[w, g]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[w, m]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [p, [A, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [d, "EdgeHTML"]],
                [/(arkweb)\/([\w\.]+)/i],
                [d, h],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [d, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i,
                ],
                [d, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, d],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [d, h],
                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                [d, [h, Y, X]],
                [
                  /windows nt 6\.2; (arm)/i,
                  /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                ],
                [
                  [h, Y, X],
                  [d, "Windows"],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [h, /_/g, "."],
                  [d, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [d, G],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, d],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [d, h],
                [/\(bb(10);/i],
                [h, [d, x]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [d, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [h, [d, I + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [d, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [h, [d, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [d, Q + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[d, L], h],
                [
                  /panasonic;(viera)/i,
                  /(netrange)mmh/i,
                  /(nettv)\/(\d+\.[\w\.]+)/i,
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [d, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[d, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [d, h],
              ],
            },
            $ = function (e, t) {
              if ((typeof e === c && ((t = e), (e = i)), !(this instanceof $)))
                return new $(e, t).getResult();
              var o = typeof n !== s && n.navigator ? n.navigator : i,
                r = e || (o && o.userAgent ? o.userAgent : ""),
                b = o && o.userAgentData ? o.userAgentData : i,
                y = t ? J(_, t) : _,
                C = o && o.userAgent == r;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[d] = i),
                    (t[h] = i),
                    Z.call(t, r, y.browser),
                    (t[u] =
                      typeof (e = t[h]) === l
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : i),
                    C &&
                      o &&
                      o.brave &&
                      typeof o.brave.isBrave == a &&
                      (t[d] = "Brave"),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[f] = i), Z.call(e, r, y.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[A] = i),
                    (e[p] = i),
                    (e[w] = i),
                    Z.call(e, r, y.device),
                    C && !e[w] && b && b.mobile && (e[w] = m),
                    C &&
                      "Macintosh" == e[p] &&
                      o &&
                      typeof o.standalone !== s &&
                      o.maxTouchPoints &&
                      o.maxTouchPoints > 2 &&
                      ((e[p] = "iPad"), (e[w] = g)),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[d] = i), (e[h] = i), Z.call(e, r, y.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (
                    (e[d] = i),
                    (e[h] = i),
                    Z.call(e, r, y.os),
                    C &&
                      !e[d] &&
                      b &&
                      b.platform &&
                      "Unknown" != b.platform &&
                      (e[d] = b.platform
                        .replace(/chrome os/i, L)
                        .replace(/macos/i, G)),
                    e
                  );
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return r;
                }),
                (this.setUA = function (e) {
                  return (
                    (r = typeof e === l && e.length > 500 ? z(e, 500) : e), this
                  );
                }),
                this.setUA(r),
                this
              );
            };
          ($.VERSION = "1.0.40"),
            ($.BROWSER = K([d, h, u])),
            ($.CPU = K([f])),
            ($.DEVICE = K([p, A, w, b, m, y, g, C, k])),
            ($.ENGINE = $.OS = K([d, h])),
            typeof t !== s
              ? (e.exports && (t = e.exports = $), (t.UAParser = $))
              : o.amdO
              ? i !==
                  (r = function () {
                    return $;
                  }.call(t, o, t, e)) && (e.exports = r)
              : typeof n !== s && (n.UAParser = $);
          var ee = typeof n !== s && (n.jQuery || n.Zepto);
          if (ee && !ee.ua) {
            var et = new $();
            (ee.ua = et.getResult()),
              (ee.ua.get = function () {
                return et.getUA();
              }),
              (ee.ua.set = function (e) {
                et.setUA(e);
                var t = et.getResult();
                for (var o in t) ee.ua[o] = t[o];
              });
          }
        })("object" == typeof window ? window : this);
      },
      3766: function (e, t, o) {
        "use strict";
        o.d(t, {
          W: function () {
            return a;
          },
        });
        var r = o(89765),
          n = {
            blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
            green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
            orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
            pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
            purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
            red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
          },
          i = n.blue,
          a = ({
            accentColor: e = i.accentColor,
            accentColorForeground: t = i.accentColorForeground,
            ...o
          } = {}) => ({
            ...(0, r.w)(o),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          });
        a.accentColors = n;
      },
      89765: function (e, t, o) {
        "use strict";
        o.d(t, {
          w: function () {
            return s;
          },
        });
        var r =
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          n = {
            rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${r}`,
            system: r,
          },
          i = {
            large: {
              actionButton: "9999px",
              connectButton: "12px",
              modal: "24px",
              modalMobile: "28px",
            },
            medium: {
              actionButton: "10px",
              connectButton: "8px",
              modal: "16px",
              modalMobile: "18px",
            },
            none: {
              actionButton: "0px",
              connectButton: "0px",
              modal: "0px",
              modalMobile: "0px",
            },
            small: {
              actionButton: "4px",
              connectButton: "4px",
              modal: "8px",
              modalMobile: "8px",
            },
          },
          a = {
            large: { modalOverlay: "blur(20px)" },
            none: { modalOverlay: "blur(0px)" },
            small: { modalOverlay: "blur(4px)" },
          },
          s = ({
            borderRadius: e = "large",
            fontStack: t = "rounded",
            overlayBlur: o = "none",
          }) => ({
            blurs: { modalOverlay: a[o].modalOverlay },
            fonts: { body: n[t] },
            radii: {
              actionButton: i[e].actionButton,
              connectButton: i[e].connectButton,
              menuButton: i[e].connectButton,
              modal: i[e].modal,
              modalMobile: i[e].modalMobile,
            },
          });
      },
      77289: function (e, t, o) {
        "use strict";
        o.d(t, {
          I: function () {
            return r;
          },
        });
        var r = `{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;
      },
      98029: function (e, t, o) {
        "use strict";
        o.d(t, {
          D: function () {
            return p;
          },
        });
        var r = o(67294),
          n = o(59289),
          i = o(27037),
          a = o(7506),
          s = o(24139),
          c = class extends a.l {
            #e;
            #t = void 0;
            #o;
            #r;
            constructor(e, t) {
              super(),
                (this.#e = e),
                this.setOptions(t),
                this.bindMethods(),
                this.#n();
            }
            bindMethods() {
              (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
            }
            setOptions(e) {
              let t = this.options;
              (this.options = this.#e.defaultMutationOptions(e)),
                (0, s.VS)(this.options, t) ||
                  this.#e
                    .getMutationCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      mutation: this.#o,
                      observer: this,
                    }),
                t?.mutationKey &&
                this.options.mutationKey &&
                (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey)
                  ? this.reset()
                  : this.#o?.state.status === "pending" &&
                    this.#o.setOptions(this.options);
            }
            onUnsubscribe() {
              this.hasListeners() || this.#o?.removeObserver(this);
            }
            onMutationUpdate(e) {
              this.#n(), this.#i(e);
            }
            getCurrentResult() {
              return this.#t;
            }
            reset() {
              this.#o?.removeObserver(this),
                (this.#o = void 0),
                this.#n(),
                this.#i();
            }
            mutate(e, t) {
              return (
                (this.#r = t),
                this.#o?.removeObserver(this),
                (this.#o = this.#e
                  .getMutationCache()
                  .build(this.#e, this.options)),
                this.#o.addObserver(this),
                this.#o.execute(e)
              );
            }
            #n() {
              let e = this.#o?.state ?? (0, n.R)();
              this.#t = {
                ...e,
                isPending: "pending" === e.status,
                isSuccess: "success" === e.status,
                isError: "error" === e.status,
                isIdle: "idle" === e.status,
                mutate: this.mutate,
                reset: this.reset,
              };
            }
            #i(e) {
              i.V.batch(() => {
                if (this.#r && this.hasListeners()) {
                  let t = this.#t.variables,
                    o = this.#t.context;
                  e?.type === "success"
                    ? (this.#r.onSuccess?.(e.data, t, o),
                      this.#r.onSettled?.(e.data, null, t, o))
                    : e?.type === "error" &&
                      (this.#r.onError?.(e.error, t, o),
                      this.#r.onSettled?.(void 0, e.error, t, o));
                }
                this.listeners.forEach((e) => {
                  e(this.#t);
                });
              });
            }
          },
          l = o(30202),
          u = o(86290);
        function p(e, t) {
          let o = (0, l.NL)(t),
            [n] = r.useState(() => new c(o, e));
          r.useEffect(() => {
            n.setOptions(e);
          }, [n, e]);
          let a = r.useSyncExternalStore(
              r.useCallback((e) => n.subscribe(i.V.batchCalls(e)), [n]),
              () => n.getCurrentResult(),
              () => n.getCurrentResult()
            ),
            s = r.useCallback(
              (e, t) => {
                n.mutate(e, t).catch(u.Z);
              },
              [n]
            );
          if (a.error && (0, u.L)(n.options.throwOnError, [a.error]))
            throw a.error;
          return { ...a, mutate: s, mutateAsync: a.mutate };
        }
      },
      75230: function (e, t, o) {
        "use strict";
        o.d(t, {
          e: function () {
            return c;
          },
        });
        var r = o(94898),
          n = o(22319),
          i = o(14503),
          a = o(45775),
          s = o(87675);
        async function c(e, t = {}) {
          let o;
          if (t.connector) {
            let { connector: r } = t;
            if (
              "reconnecting" === e.state.status &&
              !r.getAccounts &&
              !r.getChainId
            )
              throw new s.$S({ connector: r });
            let [n, i] = await Promise.all([r.getAccounts(), r.getChainId()]);
            o = { accounts: n, chainId: i, connector: r };
          } else o = e.state.connections.get(e.state.current);
          if (!o) throw new s.aH();
          let c = t.chainId ?? o.chainId,
            l = await o.connector.getChainId();
          if (l !== o.chainId)
            throw new s.XZ({
              connectionChainId: o.chainId,
              connectorChainId: l,
            });
          let u = o.connector;
          if (u.getClient) return u.getClient({ chainId: c });
          let p = (0, i.T)(t.account ?? o.accounts[0]);
          if (
            ((p.address = (0, a.K)(p.address)),
            t.account &&
              !o.accounts.some(
                (e) => e.toLowerCase() === p.address.toLowerCase()
              ))
          )
            throw new s.JK({ address: p.address, connector: u });
          let d = e.chains.find((e) => e.id === c),
            w = await o.connector.getProvider({ chainId: c });
          return (0, r.e)({
            account: p,
            chain: d,
            name: "Connector Client",
            transport: (e) =>
              (function (e, t = {}) {
                let {
                  key: o = "custom",
                  name: r = "Custom Provider",
                  retryDelay: i,
                } = t;
                return ({ retryCount: a }) =>
                  (0, n.q)({
                    key: o,
                    name: r,
                    request: e.request.bind(e),
                    retryCount: t.retryCount ?? a,
                    retryDelay: i,
                    type: "custom",
                  });
              })(w)({ ...e, retryCount: 0 }),
          });
        }
      },
      87675: function (e, t, o) {
        "use strict";
        o.d(t, {
          $S: function () {
            return l;
          },
          JK: function () {
            return s;
          },
          X4: function () {
            return n;
          },
          XZ: function () {
            return c;
          },
          aH: function () {
            return a;
          },
          wi: function () {
            return i;
          },
        });
        var r = o(7066);
        class n extends r.G {
          constructor() {
            super("Chain not configured."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ChainNotConfiguredError",
              });
          }
        }
        class i extends r.G {
          constructor() {
            super("Connector already connected."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ConnectorAlreadyConnectedError",
              });
          }
        }
        class a extends r.G {
          constructor() {
            super("Connector not connected."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ConnectorNotConnectedError",
              });
          }
        }
        class s extends r.G {
          constructor({ address: e, connector: t }) {
            super(`Account "${e}" not found for connector "${t.name}".`),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ConnectorAccountNotFoundError",
              });
          }
        }
        class c extends r.G {
          constructor({ connectionChainId: e, connectorChainId: t }) {
            super(
              `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
              {
                metaMessages: [
                  `Current Chain ID:  ${t}`,
                  `Expected Chain ID: ${e}`,
                ],
              }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ConnectorChainMismatchError",
              });
          }
        }
        class l extends r.G {
          constructor({ connector: e }) {
            super(`Connector "${e.name}" unavailable while reconnecting.`, {
              details:
                "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ConnectorUnavailableReconnectingError",
              });
          }
        }
      },
      17897: function (e, t, o) {
        "use strict";
        o.d(t, {
          M: function () {
            return n;
          },
          O: function () {
            return i;
          },
        });
        var r = o(7066);
        class n extends r.G {
          constructor() {
            super("Provider not found."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ProviderNotFoundError",
              });
          }
        }
        class i extends r.G {
          constructor({ connector: e }) {
            super(`"${e.name}" does not support programmatic chain switching.`),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "SwitchChainNotSupportedError",
              });
          }
        }
      },
      90512: function (e, t, o) {
        "use strict";
        t.Z = function () {
          for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)
            (e = arguments[o]) &&
              (t = (function e(t) {
                var o,
                  r,
                  n = "";
                if ("string" == typeof t || "number" == typeof t) n += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var i = t.length;
                    for (o = 0; o < i; o++)
                      t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
                  } else for (r in t) t[r] && (n && (n += " "), (n += r));
                }
                return n;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        };
      },
      22980: function (e, t, o) {
        "use strict";
        o.d(t, {
          l: function () {
            return a;
          },
        });
        var r = o(14503),
          n = o(8998),
          i = o(92106);
        async function a(e, { account: t = e.account, message: o }) {
          if (!t)
            throw new n.o({ docsPath: "/docs/actions/wallet/signMessage" });
          let a = (0, r.T)(t);
          if (a.signMessage) return a.signMessage({ message: o });
          let s =
            "string" == typeof o
              ? (0, i.$G)(o)
              : o.raw instanceof Uint8Array
              ? (0, i.NC)(o.raw)
              : o.raw;
          return e.request(
            { method: "personal_sign", params: [s, a.address] },
            { retryCount: 0 }
          );
        }
      },
      66403: function (e, t, o) {
        "use strict";
        o.d(t, {
          R: function () {
            return r;
          },
        });
        let r = (0, o(86164).a)({
          id: 1,
          name: "Ethereum",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://etherscan.io",
              apiUrl: "https://api.etherscan.io/api",
            },
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            ensUniversalResolver: {
              address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
              blockCreated: 19258213,
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 14353601,
            },
          },
        });
      },
      8998: function (e, t, o) {
        "use strict";
        o.d(t, {
          Y: function () {
            return i;
          },
          o: function () {
            return n;
          },
        });
        var r = o(36117);
        class n extends r.G {
          constructor({ docsPath: e } = {}) {
            super(
              "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
              { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
            );
          }
        }
        class i extends r.G {
          constructor({ docsPath: e, metaMessages: t, type: o }) {
            super(`Account type "${o}" is not supported.`, {
              docsPath: e,
              metaMessages: t,
              name: "AccountTypeNotSupportedError",
            });
          }
        }
      },
      32934: function (e, t, o) {
        "use strict";
        let r, n, i, a, s, c, l, u, p, d, w, A, h, f, b;
        o.d(t, {
          F: function () {
            return K;
          },
        });
        let m = new Map([
          [8217, "apostrophe"],
          [8260, "fraction slash"],
          [12539, "middle dot"],
        ]);
        function g(e) {
          var t;
          let o;
          return (
            (t = (function (e) {
              let t = 0;
              function o() {
                return (e[t++] << 8) | e[t++];
              }
              let r = o(),
                n = 1,
                i = [0, 1];
              for (let e = 1; e < r; e++) i.push((n += o()));
              let a = o(),
                s = t;
              t += a;
              let c = 0,
                l = 0;
              function u() {
                return (
                  0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
                );
              }
              let p = 2147483648 - 1,
                d = 0;
              for (let e = 0; e < 31; e++) d = (d << 1) | u();
              let w = [],
                A = 0,
                h = 2147483648;
              for (;;) {
                let e = Math.floor(((d - A + 1) * n - 1) / h),
                  t = 0,
                  o = r;
                for (; o - t > 1; ) {
                  let r = (t + o) >>> 1;
                  e < i[r] ? (o = r) : (t = r);
                }
                if (0 == t) break;
                w.push(t);
                let a = A + Math.floor((h * i[t]) / n),
                  s = A + Math.floor((h * i[t + 1]) / n) - 1;
                for (; ((a ^ s) & 1073741824) == 0; )
                  (d = ((d << 1) & p) | u()),
                    (a = (a << 1) & p),
                    (s = ((s << 1) & p) | 1);
                for (; a & ~s & 536870912; )
                  (d = (1073741824 & d) | ((d << 1) & (p >>> 1)) | u()),
                    (a = (a << 1) ^ 1073741824),
                    (s = ((1073741824 ^ s) << 1) | 1073741825);
                (A = a), (h = 1 + s - a);
              }
              let f = r - 4;
              return w.map((t) => {
                switch (t - f) {
                  case 3:
                    return (
                      f + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++])
                    );
                  case 2:
                    return f + 256 + ((e[s++] << 8) | e[s++]);
                  case 1:
                    return f + e[s++];
                  default:
                    return t - 1;
                }
              });
            })(
              (function (e) {
                let t = [];
                [
                  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                ].forEach((e, o) => (t[e.charCodeAt(0)] = o));
                let o = e.length,
                  r = new Uint8Array((6 * o) >> 3);
                for (let n = 0, i = 0, a = 0, s = 0; n < o; n++)
                  (s = (s << 6) | t[e.charCodeAt(n)]),
                    (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
                return r;
              })(e)
            )),
            (o = 0),
            () => t[o++]
          );
        }
        function y(e, t = 0) {
          let o = [];
          for (;;) {
            let r = e(),
              n = e();
            if (!n) break;
            t += r;
            for (let e = 0; e < n; e++) o.push(t + e);
            t += n + 1;
          }
          return o;
        }
        function C(e) {
          return v(() => {
            let t = y(e);
            if (t.length) return t;
          });
        }
        function k(e) {
          let t = [];
          for (;;) {
            let o = e();
            if (0 == o) break;
            t.push(
              (function (e, t) {
                let o = 1 + t(),
                  r = t(),
                  n = v(t);
                return B(n.length, 1 + e, t).flatMap((e, t) => {
                  let [i, ...a] = e;
                  return Array(n[t])
                    .fill()
                    .map((e, t) => {
                      let n = t * r;
                      return [i + t * o, a.map((e) => e + n)];
                    });
                });
              })(o, e)
            );
          }
          for (;;) {
            let o = e() - 1;
            if (o < 0) break;
            t.push(B(1 + e(), 1 + o, e).map((e) => [e[0], e.slice(1)]));
          }
          return t.flat();
        }
        function v(e) {
          let t = [];
          for (;;) {
            let o = e(t.length);
            if (!o) break;
            t.push(o);
          }
          return t;
        }
        function B(e, t, o) {
          let r = Array(e)
            .fill()
            .map(() => []);
          for (let n = 0; n < t; n++)
            (function (e, t) {
              let o = Array(e);
              for (let n = 0, i = 0; n < e; n++) {
                var r;
                o[n] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1;
              }
              return o;
            })(e, o).forEach((e, t) => r[t].push(e));
          return r;
        }
        function E(e) {
          return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
        }
        function x(e) {
          let t = e.length;
          if (t < 4096) return String.fromCodePoint(...e);
          let o = [];
          for (let r = 0; r < t; )
            o.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
          return o.join("");
        }
        function M(e, t) {
          let o = e.length,
            r = o - t.length;
          for (let n = 0; 0 == r && n < o; n++) r = e[n] - t[n];
          return r;
        }
        function Q(e) {
          return (e >> 24) & 255;
        }
        function I(e) {
          return 16777215 & e;
        }
        function D(e) {
          return e >= 44032 && e < 55204;
        }
        function W(e) {
          r ||
            (function () {
              let e = g(
                "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"
              );
              for (let [t, o] of ((r = new Map(
                C(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
              )),
              (n = new Set(y(e))),
              (i = new Map()),
              (a = new Map()),
              k(e))) {
                if (!n.has(t) && 2 == o.length) {
                  let [e, r] = o,
                    n = a.get(e);
                  n || ((n = new Map()), a.set(e, n)), n.set(r, t);
                }
                i.set(t, o.reverse());
              }
            })();
          let t = [],
            o = [],
            s = !1;
          function c(e) {
            let o = r.get(e);
            o && ((s = !0), (e |= o)), t.push(e);
          }
          for (let r of e)
            for (;;) {
              if (r < 128) t.push(r);
              else if (D(r)) {
                let e = r - 44032,
                  t = (e / 588) | 0,
                  o = ((e % 588) / 28) | 0,
                  n = e % 28;
                c(4352 + t), c(4449 + o), n > 0 && c(4519 + n);
              } else {
                let e = i.get(r);
                e ? o.push(...e) : c(r);
              }
              if (!o.length) break;
              r = o.pop();
            }
          if (s && t.length > 1) {
            let e = Q(t[0]);
            for (let o = 1; o < t.length; o++) {
              let r = Q(t[o]);
              if (0 == r || e <= r) {
                e = r;
                continue;
              }
              let n = o - 1;
              for (;;) {
                let o = t[n + 1];
                if (((t[n + 1] = t[n]), (t[n] = o), !n || (e = Q(t[--n])) <= r))
                  break;
              }
              e = Q(t[o]);
            }
          }
          return t;
        }
        function O(e) {
          return (function (e) {
            let t = [],
              o = [],
              r = -1,
              n = 0;
            for (let i of e) {
              let e = Q(i),
                s = I(i);
              if (-1 == r) 0 == e ? (r = s) : t.push(s);
              else if (n > 0 && n >= e)
                0 == e ? (t.push(r, ...o), (o.length = 0), (r = s)) : o.push(s),
                  (n = e);
              else {
                let i = (function (e, t) {
                  if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                    return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                  if (D(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  {
                    let o = a.get(e);
                    return o && (o = o.get(t)) ? o : -1;
                  }
                })(r, s);
                i >= 0
                  ? (r = i)
                  : 0 == n && 0 == e
                  ? (t.push(r), (r = s))
                  : (o.push(s), (n = e));
              }
            }
            return r >= 0 && t.push(r, ...o), t;
          })(W(e));
        }
        let R = (e) => Array.from(e);
        function N(e, t) {
          return e.P.has(t) || e.Q.has(t);
        }
        class S extends Array {
          get is_emoji() {
            return !0;
          }
        }
        function F() {
          let e, t;
          if (s) return;
          let o = g(
              "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"
            ),
            r = () => y(o),
            n = () => new Set(r());
          (s = new Map(k(o))),
            (c = n()),
            (l = r()),
            (u = new Set(r().map((e) => l[e]))),
            (l = new Set(l)),
            (p = n()),
            n();
          let i = C(o),
            a = o(),
            m = () =>
              new Set(
                r()
                  .flatMap((e) => i[e])
                  .concat(r())
              );
          (d = v((e) => {
            let t = v(o).map((e) => e + 96);
            if (t.length) {
              let r = e >= a;
              return (
                (t[0] -= 32),
                (t = x(t)),
                r && (t = `Restricted[${t}]`),
                { N: t, P: m(), Q: m(), M: !o(), R: r }
              );
            }
          })),
            (w = n()),
            (A = new Map());
          let B = r()
            .concat(R(w))
            .sort((e, t) => e - t);
          for (let { V: e, M: t } of (B.forEach((e, t) => {
            let r = o(),
              n = (B[t] = r ? B[t - r] : { V: [], M: new Map() });
            n.V.push(e), w.has(e) || A.set(e, n);
          }),
          new Set(A.values()))) {
            let o = [];
            for (let t of e) {
              let e = d.filter((e) => N(e, t)),
                r = o.find(({ G: t }) => e.some((e) => t.has(e)));
              r || ((r = { G: new Set(), V: [] }), o.push(r)),
                r.V.push(t),
                e.forEach((e) => r.G.add(e));
            }
            let r = o.flatMap((e) => R(e.G));
            for (let { G: e, V: n } of o) {
              let o = new Set(r.filter((t) => !e.has(t)));
              for (let e of n) t.set(e, o);
            }
          }
          let E = new Set(),
            Q = new Set(),
            D = (e) => (E.has(e) ? Q.add(e) : E.add(e));
          for (let e of d) {
            for (let t of e.P) D(t);
            for (let t of e.Q) D(t);
          }
          for (let e of E) A.has(e) || Q.has(e) || A.set(e, 1);
          for (let r of ((h = new Set(R(E).concat(R(W(E).map(I))))),
          (f = ((e = []),
          (t = y(o)),
          (function t({ S: o, B: r }, n, i) {
            if (!(4 & o) || i !== n[n.length - 1])
              for (let a of (2 & o && (i = n[n.length - 1]),
              1 & o && e.push(n),
              r))
                for (let e of a.Q) t(a, [...n, e], i);
          })(
            (function e(r) {
              return {
                S: o(),
                B: v(() => {
                  let r = y(o).map((e) => t[e]);
                  if (r.length) return e(r);
                }),
                Q: r,
              };
            })([]),
            []
          ),
          e)
            .map((e) => S.from(e))
            .sort(M)),
          (b = new Map()),
          f)) {
            let e = [b];
            for (let t of r) {
              let o = e.map((e) => {
                let o = e.get(t);
                return o || ((o = new Map()), e.set(t, o)), o;
              });
              65039 === t ? e.push(...o) : (e = o);
            }
            for (let t of e) t.V = r;
          }
        }
        function P(e) {
          return (q(e) ? "" : `${T(U([e]))} `) + E(e);
        }
        function T(e) {
          return `"${e}"\u200E`;
        }
        function U(e, t = E) {
          var o;
          let r = [];
          (o = e[0]), F(), l.has(o) && r.push("◌");
          let n = 0,
            i = e.length;
          for (let o = 0; o < i; o++) {
            let i = e[o];
            q(i) && (r.push(x(e.slice(n, o))), r.push(t(i)), (n = o + 1));
          }
          return r.push(x(e.slice(n, i))), r.join("");
        }
        function q(e) {
          return F(), p.has(e);
        }
        function L(e) {
          return Error(`disallowed character: ${P(e)}`);
        }
        function G(e, t) {
          let o = P(t),
            r = d.find((e) => e.P.has(t));
          return (
            r && (o = `${r.N} ${o}`), Error(`illegal mixture: ${e.N} + ${o}`)
          );
        }
        function H(e) {
          return Error(`illegal placement: ${e}`);
        }
        function J(e) {
          return e.filter((e) => 65039 != e);
        }
        function K(e) {
          var t;
          return (t = (function (e, t, o) {
            if (!e) return [];
            F();
            let r = 0;
            return e.split(".").map((e) => {
              let n = (function (e) {
                  let t = [];
                  for (let o = 0, r = e.length; o < r; ) {
                    let r = e.codePointAt(o);
                    (o += r < 65536 ? 1 : 2), t.push(r);
                  }
                  return t;
                })(e),
                i = { input: n, offset: r };
              r += n.length + 1;
              try {
                let e,
                  r = (i.tokens = (function (e, t, o) {
                    let r = [],
                      n = [];
                    for (e = e.slice().reverse(); e.length; ) {
                      let i = (function (e, t) {
                        let o,
                          r = b,
                          n = e.length;
                        for (; n && (r = r.get(e[--n])); ) {
                          let { V: t } = r;
                          t && ((o = t), (e.length = n));
                        }
                        return o;
                      })(e);
                      if (i) n.length && (r.push(t(n)), (n = [])), r.push(o(i));
                      else {
                        let t = e.pop();
                        if (h.has(t)) n.push(t);
                        else {
                          let e = s.get(t);
                          if (e) n.push(...e);
                          else if (!c.has(t)) throw L(t);
                        }
                      }
                    }
                    return n.length && r.push(t(n)), r;
                  })(n, t, o)),
                  a = r.length;
                if (!a) throw Error("empty label");
                let p = (i.output = r.flat());
                if (
                  ((function (e) {
                    for (let t = e.lastIndexOf(95); t > 0; )
                      if (95 !== e[--t])
                        throw Error("underscore allowed only at start");
                  })(p),
                  !(i.emoji = a > 1 || r[0].is_emoji) &&
                    p.every((e) => e < 128))
                )
                  (function (e) {
                    if (e.length >= 4 && 45 == e[2] && 45 == e[3])
                      throw Error(
                        `invalid label extension: "${x(e.slice(0, 4))}"`
                      );
                  })(p),
                    (e = "ASCII");
                else {
                  let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                  if (t.length) {
                    if (l.has(p[0])) throw H("leading combining mark");
                    for (let e = 1; e < a; e++) {
                      let t = r[e];
                      if (!t.is_emoji && l.has(t[0]))
                        throw H(
                          `emoji + combining mark: "${x(r[e - 1])} + ${U([
                            t[0],
                          ])}"`
                        );
                    }
                    !(function (e) {
                      let t = e[0],
                        o = m.get(t);
                      if (o) throw H(`leading ${o}`);
                      let r = e.length,
                        n = -1;
                      for (let i = 1; i < r; i++) {
                        t = e[i];
                        let r = m.get(t);
                        if (r) {
                          if (n == i) throw H(`${o} + ${r}`);
                          (n = i + 1), (o = r);
                        }
                      }
                      if (n == r) throw H(`trailing ${o}`);
                    })(p);
                    let o = R(new Set(t)),
                      [n] = (function (e) {
                        let t = d;
                        for (let o of e) {
                          let e = t.filter((e) => N(e, o));
                          if (!e.length) {
                            if (d.some((e) => N(e, o))) throw G(t[0], o);
                            throw L(o);
                          }
                          if (((t = e), 1 == e.length)) break;
                        }
                        return t;
                      })(o);
                    (function (e, t) {
                      for (let o of t) if (!N(e, o)) throw G(e, o);
                      if (e.M) {
                        let e = W(t).map(I);
                        for (let t = 1, o = e.length; t < o; t++)
                          if (u.has(e[t])) {
                            let r = t + 1;
                            for (let n; r < o && u.has((n = e[r])); r++)
                              for (let o = t; o < r; o++)
                                if (e[o] == n)
                                  throw Error(
                                    `duplicate non-spacing marks: ${P(n)}`
                                  );
                            if (r - t > 4)
                              throw Error(
                                `excessive non-spacing marks: ${T(
                                  U(e.slice(t - 1, r))
                                )} (${r - t}/4)`
                              );
                            t = r;
                          }
                      }
                    })(n, t),
                      (function (e, t) {
                        let o;
                        let r = [];
                        for (let e of t) {
                          let t = A.get(e);
                          if (1 === t) return;
                          if (t) {
                            let r = t.M.get(e);
                            if (
                              !(o = o ? o.filter((e) => r.has(e)) : R(r)).length
                            )
                              return;
                          } else r.push(e);
                        }
                        if (o) {
                          for (let t of o)
                            if (r.every((e) => N(t, e)))
                              throw Error(
                                `whole-script confusable: ${e.N}/${t.N}`
                              );
                        }
                      })(n, o),
                      (e = n.N);
                  } else e = "Emoji";
                }
                i.type = e;
              } catch (e) {
                i.error = e;
              }
              return i;
            });
          })(e, O, J))
            .map(({ input: e, error: o, output: r }) => {
              if (o) {
                let r = o.message;
                throw Error(
                  1 == t.length ? r : `Invalid label ${T(U(e))}: ${r}`
                );
              }
              return x(r);
            })
            .join(".");
        }
      },
      3114: function (e, t, o) {
        "use strict";
        o.d(t, {
          E: function () {
            return a;
          },
        });
        var r = o(33397),
          n = o(67294),
          i = o(37122);
        function a(e = {}) {
          let { onConnect: t, onDisconnect: o } = e,
            a = (0, i.Z)(e);
          (0, n.useEffect)(
            () =>
              (0, r.u)(a, {
                onChange(e, r) {
                  if (
                    ("reconnecting" === r.status ||
                      ("connecting" === r.status && void 0 === r.address)) &&
                    "connected" === e.status
                  ) {
                    let {
                        address: o,
                        addresses: n,
                        chain: i,
                        chainId: a,
                        connector: s,
                      } = e,
                      c = "reconnecting" === r.status || void 0 === r.status;
                    t?.({
                      address: o,
                      addresses: n,
                      chain: i,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                  } else
                    "connected" === r.status &&
                      "disconnected" === e.status &&
                      o?.();
                },
              }),
            [a, t, o]
          );
        }
      },
      59598: function (e, t, o) {
        "use strict";
        o.d(t, {
          $: function () {
            return p;
          },
        });
        var r = o(98029),
          n = o(87675);
        async function i(e, t) {
          let o;
          if (
            (o =
              "function" == typeof t.connector
                ? e._internal.connectors.setup(t.connector)
                : t.connector).uid === e.state.current
          )
            throw new n.wi();
          try {
            e.setState((e) => ({ ...e, status: "connecting" })),
              o.emitter.emit("message", { type: "connecting" });
            let r = await o.connect({ chainId: t.chainId }),
              n = r.accounts;
            return (
              o.emitter.off("connect", e._internal.events.connect),
              o.emitter.on("change", e._internal.events.change),
              o.emitter.on("disconnect", e._internal.events.disconnect),
              await e.storage?.setItem("recentConnectorId", o.id),
              e.setState((e) => ({
                ...e,
                connections: new Map(e.connections).set(o.uid, {
                  accounts: n,
                  chainId: r.chainId,
                  connector: o,
                }),
                current: o.uid,
                status: "connected",
              })),
              { accounts: n, chainId: r.chainId }
            );
          } catch (t) {
            throw (
              (e.setState((e) => ({
                ...e,
                status: e.current ? "connected" : "disconnected",
              })),
              t)
            );
          }
        }
        var a = o(67294),
          s = o(37122),
          c = o(74751);
        let l = [];
        function u(e) {
          let t = e.connectors;
          return (0, c.v)(l, t) ? l : ((l = t), t);
        }
        function p(e = {}) {
          let { mutation: t } = e,
            o = (0, s.Z)(e),
            {
              mutate: n,
              mutateAsync: c,
              ...l
            } = (0, r.D)({
              ...t,
              mutationFn: (e) => i(o, e),
              mutationKey: ["connect"],
            });
          return (
            (0, a.useEffect)(
              () =>
                o.subscribe(
                  ({ status: e }) => e,
                  (e, t) => {
                    "connected" === t && "disconnected" === e && l.reset();
                  }
                ),
              [o, l.reset]
            ),
            {
              ...l,
              connect: n,
              connectAsync: c,
              connectors: (function (e = {}) {
                let t = (0, s.Z)(e);
                return (0, a.useSyncExternalStore)(
                  (e) =>
                    (function (e, t) {
                      let { onChange: o } = t;
                      return e._internal.connectors.subscribe((e, t) => {
                        o(Object.values(e), t);
                      });
                    })(t, { onChange: e }),
                  () => u(t),
                  () => u(t)
                );
              })({ config: o }),
            }
          );
        }
      },
      48486: function (e, t, o) {
        "use strict";
        o.d(t, {
          q: function () {
            return u;
          },
        });
        var r = o(98029);
        async function n(e, t = {}) {
          let o;
          if (t.connector) o = t.connector;
          else {
            let { connections: t, current: r } = e.state,
              n = t.get(r);
            o = n?.connector;
          }
          let r = e.state.connections;
          o &&
            (await o.disconnect(),
            o.emitter.off("change", e._internal.events.change),
            o.emitter.off("disconnect", e._internal.events.disconnect),
            o.emitter.on("connect", e._internal.events.connect),
            r.delete(o.uid)),
            e.setState((e) => {
              if (0 === r.size)
                return {
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              let t = r.values().next().value;
              return {
                ...e,
                connections: new Map(r),
                current: t.connector.uid,
              };
            });
          {
            let t = e.state.current;
            if (!t) return;
            let o = e.state.connections.get(t)?.connector;
            if (!o) return;
            await e.storage?.setItem("recentConnectorId", o.id);
          }
        }
        var i = o(37122),
          a = o(74751);
        let s = [];
        function c(e) {
          let t = [...e.state.connections.values()];
          return "reconnecting" === e.state.status || (0, a.v)(s, t)
            ? s
            : ((s = t), t);
        }
        var l = o(67294);
        function u(e = {}) {
          let { mutation: t } = e,
            o = (0, i.Z)(e),
            {
              mutate: s,
              mutateAsync: u,
              ...p
            } = (0, r.D)({
              ...t,
              mutationFn: (e) => n(o, e),
              mutationKey: ["disconnect"],
            });
          return {
            ...p,
            connectors: (function (e = {}) {
              let t = (0, i.Z)(e);
              return (0, l.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: o } = t;
                    return e.subscribe(() => c(e), o, { equalityFn: a.v });
                  })(t, { onChange: e }),
                () => c(t),
                () => c(t)
              );
            })({ config: o }).map((e) => e.connector),
            disconnect: s,
            disconnectAsync: u,
          };
        }
      },
      4830: function (e, t, o) {
        "use strict";
        o.d(t, {
          c: function () {
            return l;
          },
        });
        var r = o(95270),
          n = o(81946),
          i = o(36100),
          a = o(82451),
          s = o(82002),
          c = o(37122);
        function l(e = {}) {
          let { name: t, query: o = {} } = e,
            l = (0, c.Z)(e),
            u = (0, s.x)({ config: l }),
            p = (function (e, t = {}) {
              return {
                async queryFn({ queryKey: t }) {
                  let { name: o, scopeKey: i, ...a } = t[1];
                  if (!o) throw Error("name is required");
                  return (function (e, t) {
                    let { chainId: o, ...i } = t,
                      a = e.getClient({ chainId: o });
                    return (0, n.s)(a, r.r, "getEnsAvatar")(i);
                  })(e, { ...a, name: o });
                },
                queryKey: (function (e = {}) {
                  return ["ensAvatar", (0, i.OP)(e)];
                })(t),
              };
            })(l, { ...e, chainId: e.chainId ?? u }),
            d = !!(t && (o.enabled ?? !0));
          return (0, a.aM)({ ...o, ...p, enabled: d });
        }
      },
      90474: function (e, t, o) {
        "use strict";
        o.d(t, {
          F: function () {
            return l;
          },
        });
        var r = o(95602),
          n = o(81946),
          i = o(36100),
          a = o(82451),
          s = o(82002),
          c = o(37122);
        function l(e = {}) {
          let { address: t, query: o = {} } = e,
            l = (0, c.Z)(e),
            u = (0, s.x)({ config: l }),
            p = (function (e, t = {}) {
              return {
                async queryFn({ queryKey: t }) {
                  let { address: o, scopeKey: i, ...a } = t[1];
                  if (!o) throw Error("address is required");
                  return (function (e, t) {
                    let { chainId: o, ...i } = t,
                      a = e.getClient({ chainId: o });
                    return (0, n.s)(a, r.w, "getEnsName")(i);
                  })(e, { ...a, address: o });
                },
                queryKey: (function (e = {}) {
                  return ["ensName", (0, i.OP)(e)];
                })(t),
              };
            })(l, { ...e, chainId: e.chainId ?? u }),
            d = !!(t && (o.enabled ?? !0));
          return (0, a.aM)({ ...o, ...p, enabled: d });
        }
      },
      48104: function (e, t, o) {
        "use strict";
        o.d(t, {
          t: function () {
            return s;
          },
        });
        var r = o(80284);
        function n(e, t = {}) {
          let o = (function (e, t = {}) {
            let o;
            try {
              o = e.getClient(t);
            } catch {}
            return o;
          })(e, t);
          return o?.extend(r.I);
        }
        var i = o(52798),
          a = o(37122);
        function s(e = {}) {
          let t = (0, a.Z)(e);
          return (0, i.useSyncExternalStoreWithSelector)(
            (e) =>
              (function (e, t) {
                let { onChange: o } = t;
                return e.subscribe(() => n(e), o, {
                  equalityFn: (e, t) => e?.uid === t?.uid,
                });
              })(t, { onChange: e }),
            () => n(t, e),
            () => n(t, e),
            (e) => e,
            (e, t) => e?.uid === t?.uid
          );
        }
      },
      8768: function (e, t, o) {
        "use strict";
        o.d(t, {
          Q: function () {
            return l;
          },
        });
        var r = o(98029),
          n = o(22980),
          i = o(81946),
          a = o(75230);
        async function s(e, t) {
          let o;
          let { account: r, connector: s, ...c } = t;
          return (
            (o =
              "object" == typeof r && "local" === r.type
                ? e.getClient()
                : await (0, a.e)(e, { account: r, connector: s })),
            (0, i.s)(
              o,
              n.l,
              "signMessage"
            )({ ...c, ...(r ? { account: r } : {}) })
          );
        }
        var c = o(37122);
        function l(e = {}) {
          var t;
          let { mutation: o } = e,
            n =
              ((t = (0, c.Z)(e)),
              { mutationFn: (e) => s(t, e), mutationKey: ["signMessage"] }),
            { mutate: i, mutateAsync: a, ...l } = (0, r.D)({ ...o, ...n });
          return { ...l, signMessage: i, signMessageAsync: a };
        }
      },
      55143: function (e, t, o) {
        "use strict";
        o.d(t, {
          o: function () {
            return d;
          },
        });
        var r = o(98029),
          n = o(87675),
          i = o(17897);
        async function a(e, t) {
          let { addEthereumChainParameter: o, chainId: r } = t,
            a = e.state.connections.get(t.connector?.uid ?? e.state.current);
          if (a) {
            let e = a.connector;
            if (!e.switchChain) throw new i.O({ connector: e });
            return await e.switchChain({
              addEthereumChainParameter: o,
              chainId: r,
            });
          }
          let s = e.chains.find((e) => e.id === r);
          if (!s) throw new n.X4();
          return e.setState((e) => ({ ...e, chainId: r })), s;
        }
        var s = o(74751);
        let c = [];
        function l(e) {
          let t = e.chains;
          return (0, s.v)(c, t) ? c : ((c = t), t);
        }
        var u = o(67294),
          p = o(37122);
        function d(e = {}) {
          let { mutation: t } = e,
            o = (0, p.Z)(e),
            {
              mutate: n,
              mutateAsync: i,
              ...s
            } = (0, r.D)({
              ...t,
              mutationFn: (e) => a(o, e),
              mutationKey: ["switchChain"],
            });
          return {
            ...s,
            chains: (function (e = {}) {
              let t = (0, p.Z)(e);
              return (0, u.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: o } = t;
                    return e._internal.chains.subscribe((e, t) => {
                      o(e, t);
                    });
                  })(t, { onChange: e }),
                () => l(t),
                () => l(t)
              );
            })({ config: o }),
            switchChain: n,
            switchChainAsync: i,
          };
        }
      },
    },
  ]);
