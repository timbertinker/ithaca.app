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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "a3e16f70-1f2d-4e75-8997-a8268b6d2727"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a3e16f70-1f2d-4e75-8997-a8268b6d2727"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6746],
  {
    43681: function (e, n, r) {
      r.d(n, {
        Fv: function () {
          return s;
        },
        bS: function () {
          return u;
        },
        hE: function () {
          return o;
        },
        pV: function () {
          return f;
        },
      });
      var t = r(70794);
      let i = t.O.clone({ DECIMAL_PLACES: 0, ROUNDING_MODE: t.O.ROUND_DOWN });
      function o(e) {
        return e instanceof t.O ? e : new t.O(e);
      }
      function u(e) {
        return new i(e);
      }
      function s(e, n) {
        return f(e, n).toString(10);
      }
      function f(e, n) {
        return o(e).shiftedBy(-1 * n);
      }
    },
    91553: function (e, n, r) {
      r.d(n, {
        $3: function () {
          return i;
        },
        E_: function () {
          return t;
        },
        YL: function () {
          return o;
        },
        ih: function () {
          return u;
        },
      });
      let t = (0, r(43681).hE)("31536000"),
        i = 8,
        o = 27,
        u = 4;
    },
    67277: function (e, n, r) {
      r.d(n, {
        G: function () {
          return u;
        },
      });
      var t = r(43681),
        i = r(91553),
        o = r(92328);
      function u({ rate: e, duration: n }) {
        return (0, o.Vg)((0, t.bS)(e).dividedBy(i.E_).plus(o.Hx), n).minus(
          o.Hx
        );
      }
    },
    92328: function (e, n, r) {
      r.d(n, {
        Hx: function () {
          return i;
        },
        Vg: function () {
          return a;
        },
        _O: function () {
          return s;
        },
        e9: function () {
          return f;
        },
        jV: function () {
          return c;
        },
        jq: function () {
          return l;
        },
        sO: function () {
          return h;
        },
      });
      var t = r(43681);
      (0, t.bS)(10).pow(18).dividedBy(2);
      let i = (0, t.bS)(10).pow(27),
        o = i.dividedBy(2),
        u = (0, t.bS)(10).pow(9);
      function s(e, n) {
        return o.plus((0, t.bS)(e).multipliedBy(n)).div(i);
      }
      function f(e, n) {
        return (0, t.bS)(n)
          .div(2)
          .plus((0, t.bS)(e).multipliedBy(i))
          .div(n);
      }
      function l(e) {
        return (0, t.bS)(u).div(2).plus(e).div(u);
      }
      function c(e) {
        return (0, t.bS)(e).multipliedBy(u).decimalPlaces(0);
      }
      function a(e, n) {
        let r = (0, t.bS)(e),
          o = (0, t.bS)(n),
          u = o.modulo(2).eq(0) ? (0, t.bS)(i) : r;
        for (o = o.div(2); !o.eq(0); o = o.div(2))
          (r = s(r, r)), o.modulo(2).eq(0) || (u = s(u, r));
        return u;
      }
      function h(e, n) {
        let r = (0, t.bS)(e),
          o = (0, t.bS)(n);
        if (o.eq(0)) return i;
        let u = o.minus(1),
          f = o.gt(2) ? o.minus(2) : 0,
          l = s(r, r),
          c = s(l, r),
          a = o.multipliedBy(r),
          h = o.multipliedBy(u).multipliedBy(l).div(2),
          p = o.multipliedBy(u).multipliedBy(f).multipliedBy(c).div(6);
        return i.plus(a).plus(h).plus(p);
      }
    },
    70794: function (e, n, r) {
      r.d(n, {
        O: function () {
          return w;
        },
      });
      var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        i = Math.ceil,
        o = Math.floor,
        u = "[BigNumber Error] ",
        s = u + "Number primitive has more than 15 significant digits: ",
        f = [
          1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
        ];
      function l(e) {
        var n = 0 | e;
        return e > 0 || e === n ? n : n - 1;
      }
      function c(e) {
        for (var n, r, t = 1, i = e.length, o = e[0] + ""; t < i; ) {
          for (r = 14 - (n = e[t++] + "").length; r--; n = "0" + n);
          o += n;
        }
        for (i = o.length; 48 === o.charCodeAt(--i); );
        return o.slice(0, i + 1 || 1);
      }
      function a(e, n) {
        var r,
          t,
          i = e.c,
          o = n.c,
          u = e.s,
          s = n.s,
          f = e.e,
          l = n.e;
        if (!u || !s) return null;
        if (((r = i && !i[0]), (t = o && !o[0]), r || t))
          return r ? (t ? 0 : -s) : u;
        if (u != s) return u;
        if (((r = u < 0), (t = f == l), !i || !o))
          return t ? 0 : !i ^ r ? 1 : -1;
        if (!t) return (f > l) ^ r ? 1 : -1;
        for (u = 0, s = (f = i.length) < (l = o.length) ? f : l; u < s; u++)
          if (i[u] != o[u]) return (i[u] > o[u]) ^ r ? 1 : -1;
        return f == l ? 0 : (f > l) ^ r ? 1 : -1;
      }
      function h(e, n, r, t) {
        if (e < n || e > r || e !== o(e))
          throw Error(
            u +
              (t || "Argument") +
              ("number" == typeof e
                ? e < n || e > r
                  ? " out of range: "
                  : " not an integer: "
                : " not a primitive number: ") +
              String(e)
          );
      }
      function p(e) {
        var n = e.c.length - 1;
        return l(e.e / 14) == n && e.c[n] % 2 != 0;
      }
      function g(e, n) {
        return (
          (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
          (n < 0 ? "e" : "e+") +
          n
        );
      }
      function d(e, n, r) {
        var t, i;
        if (n < 0) {
          for (i = r + "."; ++n; i += r);
          e = i + e;
        } else if (((t = e.length), ++n > t)) {
          for (i = r, n -= t; --n; i += r);
          e += i;
        } else n < t && (e = e.slice(0, n) + "." + e.slice(n));
        return e;
      }
      var w = (function e(n) {
        var r,
          w,
          m,
          v,
          b,
          y,
          O,
          N,
          E,
          S = (k.prototype = { constructor: k, toString: null, valueOf: null }),
          A = new k(1),
          _ = 20,
          B = 4,
          D = -7,
          I = 21,
          R = -1e7,
          L = 1e7,
          P = !1,
          x = 1,
          U = 0,
          C = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: "",
          },
          T = "0123456789abcdefghijklmnopqrstuvwxyz",
          M = !0;
        function k(e, n) {
          var r,
            i,
            u,
            f,
            l,
            c,
            a,
            p,
            g = this;
          if (!(g instanceof k)) return new k(e, n);
          if (null == n) {
            if (e && !0 === e._isBigNumber) {
              (g.s = e.s),
                !e.c || e.e > L
                  ? (g.c = g.e = null)
                  : e.e < R
                  ? (g.c = [(g.e = 0)])
                  : ((g.e = e.e), (g.c = e.c.slice()));
              return;
            }
            if ((c = "number" == typeof e) && 0 * e == 0) {
              if (((g.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                for (f = 0, l = e; l >= 10; l /= 10, f++);
                f > L ? (g.c = g.e = null) : ((g.e = f), (g.c = [e]));
                return;
              }
              p = String(e);
            } else {
              if (!t.test((p = String(e)))) return E(g, p, c);
              g.s = 45 == p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1;
            }
            (f = p.indexOf(".")) > -1 && (p = p.replace(".", "")),
              (l = p.search(/e/i)) > 0
                ? (f < 0 && (f = l),
                  (f += +p.slice(l + 1)),
                  (p = p.substring(0, l)))
                : f < 0 && (f = p.length);
          } else {
            if ((h(n, 2, T.length, "Base"), 10 == n && M))
              return j((g = new k(e)), _ + g.e + 1, B);
            if (((p = String(e)), (c = "number" == typeof e))) {
              if (0 * e != 0) return E(g, p, c, n);
              if (
                ((g.s = 1 / e < 0 ? ((p = p.slice(1)), -1) : 1),
                k.DEBUG && p.replace(/^0\.0*|\./, "").length > 15)
              )
                throw Error(s + e);
            } else g.s = 45 === p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1;
            for (r = T.slice(0, n), f = l = 0, a = p.length; l < a; l++)
              if (0 > r.indexOf((i = p.charAt(l)))) {
                if ("." == i) {
                  if (l > f) {
                    f = a;
                    continue;
                  }
                } else if (
                  !u &&
                  ((p == p.toUpperCase() && (p = p.toLowerCase())) ||
                    (p == p.toLowerCase() && (p = p.toUpperCase())))
                ) {
                  (u = !0), (l = -1), (f = 0);
                  continue;
                }
                return E(g, String(e), c, n);
              }
            (c = !1),
              (f = (p = N(p, n, 10, g.s)).indexOf(".")) > -1
                ? (p = p.replace(".", ""))
                : (f = p.length);
          }
          for (l = 0; 48 === p.charCodeAt(l); l++);
          for (a = p.length; 48 === p.charCodeAt(--a); );
          if ((p = p.slice(l, ++a))) {
            if (
              ((a -= l),
              c && k.DEBUG && a > 15 && (e > 9007199254740991 || e !== o(e)))
            )
              throw Error(s + g.s * e);
            if ((f = f - l - 1) > L) g.c = g.e = null;
            else if (f < R) g.c = [(g.e = 0)];
            else {
              if (
                ((g.e = f),
                (g.c = []),
                (l = (f + 1) % 14),
                f < 0 && (l += 14),
                l < a)
              ) {
                for (l && g.c.push(+p.slice(0, l)), a -= 14; l < a; )
                  g.c.push(+p.slice(l, (l += 14)));
                l = 14 - (p = p.slice(l)).length;
              } else l -= a;
              for (; l--; p += "0");
              g.c.push(+p);
            }
          } else g.c = [(g.e = 0)];
        }
        function G(e, n, r, t) {
          var i, o, u, s, f;
          if ((null == r ? (r = B) : h(r, 0, 8), !e.c)) return e.toString();
          if (((i = e.c[0]), (u = e.e), null == n))
            (f = c(e.c)),
              (f =
                1 == t || (2 == t && (u <= D || u >= I))
                  ? g(f, u)
                  : d(f, u, "0"));
          else if (
            ((o = (e = j(new k(e), n, r)).e),
            (s = (f = c(e.c)).length),
            1 == t || (2 == t && (n <= o || o <= D)))
          ) {
            for (; s < n; f += "0", s++);
            f = g(f, o);
          } else if (((n -= u), (f = d(f, o, "0")), o + 1 > s)) {
            if (--n > 0) for (f += "."; n--; f += "0");
          } else if ((n += o - s) > 0)
            for (o + 1 == s && (f += "."); n--; f += "0");
          return e.s < 0 && i ? "-" + f : f;
        }
        function q(e, n) {
          for (var r, t, i = 1, o = new k(e[0]); i < e.length; i++)
            ((t = new k(e[i])).s &&
              (r = a(o, t)) !== n &&
              (0 !== r || o.s !== n)) ||
              (o = t);
          return o;
        }
        function F(e, n, r) {
          for (var t = 1, i = n.length; !n[--i]; n.pop());
          for (i = n[0]; i >= 10; i /= 10, t++);
          return (
            (r = t + 14 * r - 1) > L
              ? (e.c = e.e = null)
              : r < R
              ? (e.c = [(e.e = 0)])
              : ((e.e = r), (e.c = n)),
            e
          );
        }
        function j(e, n, r, t) {
          var u,
            s,
            l,
            c,
            a,
            h,
            p,
            g = e.c;
          if (g) {
            e: {
              for (u = 1, c = g[0]; c >= 10; c /= 10, u++);
              if ((s = n - u) < 0)
                (s += 14),
                  (l = n),
                  (p = o(((a = g[(h = 0)]) / f[u - l - 1]) % 10));
              else if ((h = i((s + 1) / 14)) >= g.length) {
                if (t) {
                  for (; g.length <= h; g.push(0));
                  (a = p = 0), (u = 1), (s %= 14), (l = s - 14 + 1);
                } else break e;
              } else {
                for (u = 1, a = c = g[h]; c >= 10; c /= 10, u++);
                (s %= 14),
                  (p = (l = s - 14 + u) < 0 ? 0 : o((a / f[u - l - 1]) % 10));
              }
              if (
                ((t =
                  t ||
                  n < 0 ||
                  null != g[h + 1] ||
                  (l < 0 ? a : a % f[u - l - 1])),
                (t =
                  r < 4
                    ? (p || t) && (0 == r || r == (e.s < 0 ? 3 : 2))
                    : p > 5 ||
                      (5 == p &&
                        (4 == r ||
                          t ||
                          (6 == r &&
                            (s > 0 ? (l > 0 ? a / f[u - l] : 0) : g[h - 1]) %
                              10 &
                              1) ||
                          r == (e.s < 0 ? 8 : 7)))),
                n < 1 || !g[0])
              )
                return (
                  (g.length = 0),
                  t
                    ? ((n -= e.e + 1),
                      (g[0] = f[(14 - (n % 14)) % 14]),
                      (e.e = -n || 0))
                    : (g[0] = e.e = 0),
                  e
                );
              if (
                (0 == s
                  ? ((g.length = h), (c = 1), h--)
                  : ((g.length = h + 1),
                    (c = f[14 - s]),
                    (g[h] = l > 0 ? o((a / f[u - l]) % f[l]) * c : 0)),
                t)
              )
                for (;;) {
                  if (0 == h) {
                    for (s = 1, l = g[0]; l >= 10; l /= 10, s++);
                    for (l = g[0] += c, c = 1; l >= 10; l /= 10, c++);
                    s != c && (e.e++, 1e14 == g[0] && (g[0] = 1));
                    break;
                  }
                  if (((g[h] += c), 1e14 != g[h])) break;
                  (g[h--] = 0), (c = 1);
                }
              for (s = g.length; 0 === g[--s]; g.pop());
            }
            e.e > L ? (e.c = e.e = null) : e.e < R && (e.c = [(e.e = 0)]);
          }
          return e;
        }
        function V(e) {
          var n,
            r = e.e;
          return null === r
            ? e.toString()
            : ((n = c(e.c)),
              (n = r <= D || r >= I ? g(n, r) : d(n, r, "0")),
              e.s < 0 ? "-" + n : n);
        }
        return (
          (k.clone = e),
          (k.ROUND_UP = 0),
          (k.ROUND_DOWN = 1),
          (k.ROUND_CEIL = 2),
          (k.ROUND_FLOOR = 3),
          (k.ROUND_HALF_UP = 4),
          (k.ROUND_HALF_DOWN = 5),
          (k.ROUND_HALF_EVEN = 6),
          (k.ROUND_HALF_CEIL = 7),
          (k.ROUND_HALF_FLOOR = 8),
          (k.EUCLID = 9),
          (k.config = k.set =
            function (e) {
              var n, r;
              if (null != e) {
                if ("object" == typeof e) {
                  if (
                    (e.hasOwnProperty((n = "DECIMAL_PLACES")) &&
                      (h((r = e[n]), 0, 1e9, n), (_ = r)),
                    e.hasOwnProperty((n = "ROUNDING_MODE")) &&
                      (h((r = e[n]), 0, 8, n), (B = r)),
                    e.hasOwnProperty((n = "EXPONENTIAL_AT")) &&
                      ((r = e[n]) && r.pop
                        ? (h(r[0], -1e9, 0, n),
                          h(r[1], 0, 1e9, n),
                          (D = r[0]),
                          (I = r[1]))
                        : (h(r, -1e9, 1e9, n), (D = -(I = r < 0 ? -r : r)))),
                    e.hasOwnProperty((n = "RANGE")))
                  ) {
                    if ((r = e[n]) && r.pop)
                      h(r[0], -1e9, -1, n),
                        h(r[1], 1, 1e9, n),
                        (R = r[0]),
                        (L = r[1]);
                    else if ((h(r, -1e9, 1e9, n), r)) R = -(L = r < 0 ? -r : r);
                    else throw Error(u + n + " cannot be zero: " + r);
                  }
                  if (e.hasOwnProperty((n = "CRYPTO"))) {
                    if (!!(r = e[n]) === r) {
                      if (r) {
                        if (
                          "undefined" != typeof crypto &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                        )
                          P = r;
                        else throw ((P = !r), Error(u + "crypto unavailable"));
                      } else P = r;
                    } else throw Error(u + n + " not true or false: " + r);
                  }
                  if (
                    (e.hasOwnProperty((n = "MODULO_MODE")) &&
                      (h((r = e[n]), 0, 9, n), (x = r)),
                    e.hasOwnProperty((n = "POW_PRECISION")) &&
                      (h((r = e[n]), 0, 1e9, n), (U = r)),
                    e.hasOwnProperty((n = "FORMAT")))
                  ) {
                    if ("object" == typeof (r = e[n])) C = r;
                    else throw Error(u + n + " not an object: " + r);
                  }
                  if (e.hasOwnProperty((n = "ALPHABET"))) {
                    if (
                      "string" != typeof (r = e[n]) ||
                      /^.?$|[+\-.\s]|(.).*\1/.test(r)
                    )
                      throw Error(u + n + " invalid: " + r);
                    (M = "0123456789" == r.slice(0, 10)), (T = r);
                  }
                } else throw Error(u + "Object expected: " + e);
              }
              return {
                DECIMAL_PLACES: _,
                ROUNDING_MODE: B,
                EXPONENTIAL_AT: [D, I],
                RANGE: [R, L],
                CRYPTO: P,
                MODULO_MODE: x,
                POW_PRECISION: U,
                FORMAT: C,
                ALPHABET: T,
              };
            }),
          (k.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!k.DEBUG) return !0;
            var n,
              r,
              t = e.c,
              i = e.e,
              s = e.s;
            e: if ("[object Array]" == {}.toString.call(t)) {
              if (
                (1 === s || -1 === s) &&
                i >= -1e9 &&
                i <= 1e9 &&
                i === o(i)
              ) {
                if (0 === t[0]) {
                  if (0 === i && 1 === t.length) return !0;
                  break e;
                }
                if (
                  ((n = (i + 1) % 14) < 1 && (n += 14),
                  String(t[0]).length == n)
                ) {
                  for (n = 0; n < t.length; n++)
                    if ((r = t[n]) < 0 || r >= 1e14 || r !== o(r)) break e;
                  if (0 !== r) return !0;
                }
              }
            } else if (
              null === t &&
              null === i &&
              (null === s || 1 === s || -1 === s)
            )
              return !0;
            throw Error(u + "Invalid BigNumber: " + e);
          }),
          (k.maximum = k.max =
            function () {
              return q(arguments, -1);
            }),
          (k.minimum = k.min =
            function () {
              return q(arguments, 1);
            }),
          (k.random =
            ((r =
              (9007199254740992 * Math.random()) & 2097151
                ? function () {
                    return o(9007199254740992 * Math.random());
                  }
                : function () {
                    return (
                      ((1073741824 * Math.random()) | 0) * 8388608 +
                      ((8388608 * Math.random()) | 0)
                    );
                  }),
            function (e) {
              var n,
                t,
                s,
                l,
                c,
                a = 0,
                p = [],
                g = new k(A);
              if ((null == e ? (e = _) : h(e, 0, 1e9), (l = i(e / 14)), P)) {
                if (crypto.getRandomValues) {
                  for (
                    n = crypto.getRandomValues(new Uint32Array((l *= 2)));
                    a < l;

                  )
                    (c = 131072 * n[a] + (n[a + 1] >>> 11)) >= 9e15
                      ? ((t = crypto.getRandomValues(new Uint32Array(2))),
                        (n[a] = t[0]),
                        (n[a + 1] = t[1]))
                      : (p.push(c % 1e14), (a += 2));
                  a = l / 2;
                } else if (crypto.randomBytes) {
                  for (n = crypto.randomBytes((l *= 7)); a < l; )
                    (c =
                      (31 & n[a]) * 281474976710656 +
                      1099511627776 * n[a + 1] +
                      4294967296 * n[a + 2] +
                      16777216 * n[a + 3] +
                      (n[a + 4] << 16) +
                      (n[a + 5] << 8) +
                      n[a + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(n, a)
                      : (p.push(c % 1e14), (a += 7));
                  a = l / 7;
                } else throw ((P = !1), Error(u + "crypto unavailable"));
              }
              if (!P) for (; a < l; ) (c = r()) < 9e15 && (p[a++] = c % 1e14);
              for (
                l = p[--a],
                  e %= 14,
                  l && e && ((c = f[14 - e]), (p[a] = o(l / c) * c));
                0 === p[a];
                p.pop(), a--
              );
              if (a < 0) p = [(s = 0)];
              else {
                for (s = -1; 0 === p[0]; p.splice(0, 1), s -= 14);
                for (a = 1, c = p[0]; c >= 10; c /= 10, a++);
                a < 14 && (s -= 14 - a);
              }
              return (g.e = s), (g.c = p), g;
            })),
          (k.sum = function () {
            for (var e = 1, n = arguments, r = new k(n[0]); e < n.length; )
              r = r.plus(n[e++]);
            return r;
          }),
          (N = (function () {
            var e = "0123456789";
            function n(e, n, r, t) {
              for (var i, o, u = [0], s = 0, f = e.length; s < f; ) {
                for (o = u.length; o--; u[o] *= n);
                for (u[0] += t.indexOf(e.charAt(s++)), i = 0; i < u.length; i++)
                  u[i] > r - 1 &&
                    (null == u[i + 1] && (u[i + 1] = 0),
                    (u[i + 1] += (u[i] / r) | 0),
                    (u[i] %= r));
              }
              return u.reverse();
            }
            return function (r, t, i, o, u) {
              var s,
                f,
                l,
                a,
                h,
                p,
                g,
                w,
                m = r.indexOf("."),
                v = _,
                b = B;
              for (
                m >= 0 &&
                  ((a = U),
                  (U = 0),
                  (r = r.replace(".", "")),
                  (p = (w = new k(t)).pow(r.length - m)),
                  (U = a),
                  (w.c = n(d(c(p.c), p.e, "0"), 10, i, e)),
                  (w.e = w.c.length)),
                  l = a =
                    (g = n(r, t, i, u ? ((s = T), e) : ((s = e), T))).length;
                0 == g[--a];
                g.pop()
              );
              if (!g[0]) return s.charAt(0);
              if (
                (m < 0
                  ? --l
                  : ((p.c = g),
                    (p.e = l),
                    (p.s = o),
                    (g = (p = O(p, w, v, b, i)).c),
                    (h = p.r),
                    (l = p.e)),
                (m = g[(f = l + v + 1)]),
                (a = i / 2),
                (h = h || f < 0 || null != g[f + 1]),
                (h =
                  b < 4
                    ? (null != m || h) && (0 == b || b == (p.s < 0 ? 3 : 2))
                    : m > a ||
                      (m == a &&
                        (4 == b ||
                          h ||
                          (6 == b && 1 & g[f - 1]) ||
                          b == (p.s < 0 ? 8 : 7)))),
                f < 1 || !g[0])
              )
                r = h ? d(s.charAt(1), -v, s.charAt(0)) : s.charAt(0);
              else {
                if (((g.length = f), h))
                  for (--i; ++g[--f] > i; )
                    (g[f] = 0), f || (++l, (g = [1].concat(g)));
                for (a = g.length; !g[--a]; );
                for (m = 0, r = ""; m <= a; r += s.charAt(g[m++]));
                r = d(r, l, s.charAt(0));
              }
              return r;
            };
          })()),
          (O = (function () {
            function e(e, n, r) {
              var t,
                i,
                o,
                u,
                s = 0,
                f = e.length,
                l = n % 1e7,
                c = (n / 1e7) | 0;
              for (e = e.slice(); f--; )
                (t = c * (o = e[f] % 1e7) + (u = (e[f] / 1e7) | 0) * l),
                  (s =
                    (((i = l * o + (t % 1e7) * 1e7 + s) / r) | 0) +
                    ((t / 1e7) | 0) +
                    c * u),
                  (e[f] = i % r);
              return s && (e = [s].concat(e)), e;
            }
            function n(e, n, r, t) {
              var i, o;
              if (r != t) o = r > t ? 1 : -1;
              else
                for (i = o = 0; i < r; i++)
                  if (e[i] != n[i]) {
                    o = e[i] > n[i] ? 1 : -1;
                    break;
                  }
              return o;
            }
            function r(e, n, r, t) {
              for (var i = 0; r--; )
                (e[r] -= i),
                  (i = e[r] < n[r] ? 1 : 0),
                  (e[r] = i * t + e[r] - n[r]);
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function (t, i, u, s, f) {
              var c,
                a,
                h,
                p,
                g,
                d,
                w,
                m,
                v,
                b,
                y,
                O,
                N,
                E,
                S,
                A,
                _,
                B = t.s == i.s ? 1 : -1,
                D = t.c,
                I = i.c;
              if (!D || !D[0] || !I || !I[0])
                return new k(
                  t.s && i.s && (D ? !I || D[0] != I[0] : I)
                    ? (D && 0 == D[0]) || !I
                      ? 0 * B
                      : B / 0
                    : NaN
                );
              for (
                v = (m = new k(B)).c = [],
                  B = u + (a = t.e - i.e) + 1,
                  f ||
                    ((f = 1e14),
                    (a = l(t.e / 14) - l(i.e / 14)),
                    (B = (B / 14) | 0)),
                  h = 0;
                I[h] == (D[h] || 0);
                h++
              );
              if ((I[h] > (D[h] || 0) && a--, B < 0)) v.push(1), (p = !0);
              else {
                for (
                  E = D.length,
                    A = I.length,
                    h = 0,
                    B += 2,
                    (g = o(f / (I[0] + 1))) > 1 &&
                      ((I = e(I, g, f)),
                      (D = e(D, g, f)),
                      (A = I.length),
                      (E = D.length)),
                    N = A,
                    y = (b = D.slice(0, A)).length;
                  y < A;
                  b[y++] = 0
                );
                (_ = [0].concat((_ = I.slice()))),
                  (S = I[0]),
                  I[1] >= f / 2 && S++;
                do {
                  if (((g = 0), (c = n(I, b, A, y)) < 0)) {
                    if (
                      ((O = b[0]),
                      A != y && (O = O * f + (b[1] || 0)),
                      (g = o(O / S)) > 1)
                    )
                      for (
                        g >= f && (g = f - 1),
                          w = (d = e(I, g, f)).length,
                          y = b.length;
                        1 == n(d, b, w, y);

                      )
                        g--, r(d, A < w ? _ : I, w, f), (w = d.length), (c = 1);
                    else 0 == g && (c = g = 1), (w = (d = I.slice()).length);
                    if (
                      (w < y && (d = [0].concat(d)),
                      r(b, d, y, f),
                      (y = b.length),
                      -1 == c)
                    )
                      for (; 1 > n(I, b, A, y); )
                        g++, r(b, A < y ? _ : I, y, f), (y = b.length);
                  } else 0 === c && (g++, (b = [0]));
                  (v[h++] = g),
                    b[0] ? (b[y++] = D[N] || 0) : ((b = [D[N]]), (y = 1));
                } while ((N++ < E || null != b[0]) && B--);
                (p = null != b[0]), v[0] || v.splice(0, 1);
              }
              if (1e14 == f) {
                for (h = 1, B = v[0]; B >= 10; B /= 10, h++);
                j(m, u + (m.e = h + 14 * a - 1) + 1, s, p);
              } else (m.e = a), (m.r = +p);
              return m;
            };
          })()),
          (w = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (m = /^([^.]+)\.$/),
          (v = /^\.([^.]+)$/),
          (b = /^-?(Infinity|NaN)$/),
          (y = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (E = function (e, n, r, t) {
            var i,
              o = r ? n : n.replace(y, "");
            if (b.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
            else {
              if (
                !r &&
                ((o = o.replace(w, function (e, n, r) {
                  return (
                    (i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                    t && t != i ? e : n
                  );
                })),
                t && ((i = t), (o = o.replace(m, "$1").replace(v, "0.$1"))),
                n != o)
              )
                return new k(o, i);
              if (k.DEBUG)
                throw Error(
                  u + "Not a" + (t ? " base " + t : "") + " number: " + n
                );
              e.s = null;
            }
            e.c = e.e = null;
          }),
          (S.absoluteValue = S.abs =
            function () {
              var e = new k(this);
              return e.s < 0 && (e.s = 1), e;
            }),
          (S.comparedTo = function (e, n) {
            return a(this, new k(e, n));
          }),
          (S.decimalPlaces = S.dp =
            function (e, n) {
              var r, t, i;
              if (null != e)
                return (
                  h(e, 0, 1e9),
                  null == n ? (n = B) : h(n, 0, 8),
                  j(new k(this), e + this.e + 1, n)
                );
              if (!(r = this.c)) return null;
              if (
                ((t = ((i = r.length - 1) - l(this.e / 14)) * 14), (i = r[i]))
              )
                for (; i % 10 == 0; i /= 10, t--);
              return t < 0 && (t = 0), t;
            }),
          (S.dividedBy = S.div =
            function (e, n) {
              return O(this, new k(e, n), _, B);
            }),
          (S.dividedToIntegerBy = S.idiv =
            function (e, n) {
              return O(this, new k(e, n), 0, 1);
            }),
          (S.exponentiatedBy = S.pow =
            function (e, n) {
              var r,
                t,
                s,
                f,
                l,
                c,
                a,
                h,
                g,
                d = this;
              if ((e = new k(e)).c && !e.isInteger())
                throw Error(u + "Exponent not an integer: " + V(e));
              if (
                (null != n && (n = new k(n)),
                (c = e.e > 14),
                !d.c ||
                  !d.c[0] ||
                  (1 == d.c[0] && !d.e && 1 == d.c.length) ||
                  !e.c ||
                  !e.c[0])
              )
                return (
                  (g = new k(Math.pow(+V(d), c ? e.s * (2 - p(e)) : +V(e)))),
                  n ? g.mod(n) : g
                );
              if (((a = e.s < 0), n)) {
                if (n.c ? !n.c[0] : !n.s) return new k(NaN);
                (t = !a && d.isInteger() && n.isInteger()) && (d = d.mod(n));
              } else {
                if (
                  e.e > 9 &&
                  (d.e > 0 ||
                    d.e < -1 ||
                    (0 == d.e
                      ? d.c[0] > 1 || (c && d.c[1] >= 24e7)
                      : d.c[0] < 8e13 || (c && d.c[0] <= 9999975e7)))
                )
                  return (
                    (f = d.s < 0 && p(e) ? -0 : 0),
                    d.e > -1 && (f = 1 / f),
                    new k(a ? 1 / f : f)
                  );
                U && (f = i(U / 14 + 2));
              }
              for (
                c
                  ? ((r = new k(0.5)), a && (e.s = 1), (h = p(e)))
                  : (h = (s = Math.abs(+V(e))) % 2),
                  g = new k(A);
                ;

              ) {
                if (h) {
                  if (!(g = g.times(d)).c) break;
                  f ? g.c.length > f && (g.c.length = f) : t && (g = g.mod(n));
                }
                if (s) {
                  if (0 === (s = o(s / 2))) break;
                  h = s % 2;
                } else if ((j((e = e.times(r)), e.e + 1, 1), e.e > 14))
                  h = p(e);
                else {
                  if (0 == (s = +V(e))) break;
                  h = s % 2;
                }
                (d = d.times(d)),
                  f
                    ? d.c && d.c.length > f && (d.c.length = f)
                    : t && (d = d.mod(n));
              }
              return t
                ? g
                : (a && (g = A.div(g)), n ? g.mod(n) : f ? j(g, U, B, l) : g);
            }),
          (S.integerValue = function (e) {
            var n = new k(this);
            return null == e ? (e = B) : h(e, 0, 8), j(n, n.e + 1, e);
          }),
          (S.isEqualTo = S.eq =
            function (e, n) {
              return 0 === a(this, new k(e, n));
            }),
          (S.isFinite = function () {
            return !!this.c;
          }),
          (S.isGreaterThan = S.gt =
            function (e, n) {
              return a(this, new k(e, n)) > 0;
            }),
          (S.isGreaterThanOrEqualTo = S.gte =
            function (e, n) {
              return 1 === (n = a(this, new k(e, n))) || 0 === n;
            }),
          (S.isInteger = function () {
            return !!this.c && l(this.e / 14) > this.c.length - 2;
          }),
          (S.isLessThan = S.lt =
            function (e, n) {
              return 0 > a(this, new k(e, n));
            }),
          (S.isLessThanOrEqualTo = S.lte =
            function (e, n) {
              return -1 === (n = a(this, new k(e, n))) || 0 === n;
            }),
          (S.isNaN = function () {
            return !this.s;
          }),
          (S.isNegative = function () {
            return this.s < 0;
          }),
          (S.isPositive = function () {
            return this.s > 0;
          }),
          (S.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (S.minus = function (e, n) {
            var r,
              t,
              i,
              o,
              u = this.s;
            if (((n = (e = new k(e, n)).s), !u || !n)) return new k(NaN);
            if (u != n) return (e.s = -n), this.plus(e);
            var s = this.e / 14,
              f = e.e / 14,
              c = this.c,
              a = e.c;
            if (!s || !f) {
              if (!c || !a) return c ? ((e.s = -n), e) : new k(a ? this : NaN);
              if (!c[0] || !a[0])
                return a[0]
                  ? ((e.s = -n), e)
                  : new k(c[0] ? this : 3 == B ? -0 : 0);
            }
            if (((s = l(s)), (f = l(f)), (c = c.slice()), (u = s - f))) {
              for (
                (o = u < 0) ? ((u = -u), (i = c)) : ((f = s), (i = a)),
                  i.reverse(),
                  n = u;
                n--;
                i.push(0)
              );
              i.reverse();
            } else
              for (
                t = (o = (u = c.length) < (n = a.length)) ? u : n, u = n = 0;
                n < t;
                n++
              )
                if (c[n] != a[n]) {
                  o = c[n] < a[n];
                  break;
                }
            if (
              (o && ((i = c), (c = a), (a = i), (e.s = -e.s)),
              (n = (t = a.length) - (r = c.length)) > 0)
            )
              for (; n--; c[r++] = 0);
            for (n = 1e14 - 1; t > u; ) {
              if (c[--t] < a[t]) {
                for (r = t; r && !c[--r]; c[r] = n);
                --c[r], (c[t] += 1e14);
              }
              c[t] -= a[t];
            }
            for (; 0 == c[0]; c.splice(0, 1), --f);
            return c[0]
              ? F(e, c, f)
              : ((e.s = 3 == B ? -1 : 1), (e.c = [(e.e = 0)]), e);
          }),
          (S.modulo = S.mod =
            function (e, n) {
              var r, t;
              return ((e = new k(e, n)), this.c && e.s && (!e.c || e.c[0]))
                ? e.c && (!this.c || this.c[0])
                  ? (9 == x
                      ? ((t = e.s),
                        (e.s = 1),
                        (r = O(this, e, 0, 3)),
                        (e.s = t),
                        (r.s *= t))
                      : (r = O(this, e, 0, x)),
                    (e = this.minus(r.times(e))).c[0] ||
                      1 != x ||
                      (e.s = this.s),
                    e)
                  : new k(this)
                : new k(NaN);
            }),
          (S.multipliedBy = S.times =
            function (e, n) {
              var r,
                t,
                i,
                o,
                u,
                s,
                f,
                c,
                a,
                h,
                p,
                g,
                d,
                w = this.c,
                m = (e = new k(e, n)).c;
              if (!w || !m || !w[0] || !m[0])
                return (
                  this.s && e.s && (!w || w[0] || m) && (!m || m[0] || w)
                    ? ((e.s *= this.s),
                      w && m ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null))
                    : (e.c = e.e = e.s = null),
                  e
                );
              for (
                t = l(this.e / 14) + l(e.e / 14),
                  e.s *= this.s,
                  (f = w.length) < (h = m.length) &&
                    ((d = w), (w = m), (m = d), (i = f), (f = h), (h = i)),
                  i = f + h,
                  d = [];
                i--;
                d.push(0)
              );
              for (i = h; --i >= 0; ) {
                for (
                  r = 0, p = m[i] % 1e7, g = (m[i] / 1e7) | 0, o = i + (u = f);
                  o > i;

                )
                  (s = g * (c = w[--u] % 1e7) + (a = (w[u] / 1e7) | 0) * p),
                    (r =
                      (((c = p * c + (s % 1e7) * 1e7 + d[o] + r) / 1e14) | 0) +
                      ((s / 1e7) | 0) +
                      g * a),
                    (d[o--] = c % 1e14);
                d[o] = r;
              }
              return r ? ++t : d.splice(0, 1), F(e, d, t);
            }),
          (S.negated = function () {
            var e = new k(this);
            return (e.s = -e.s || null), e;
          }),
          (S.plus = function (e, n) {
            var r,
              t = this.s;
            if (((n = (e = new k(e, n)).s), !t || !n)) return new k(NaN);
            if (t != n) return (e.s = -n), this.minus(e);
            var i = this.e / 14,
              o = e.e / 14,
              u = this.c,
              s = e.c;
            if (!i || !o) {
              if (!u || !s) return new k(t / 0);
              if (!u[0] || !s[0]) return s[0] ? e : new k(u[0] ? this : 0 * t);
            }
            if (((i = l(i)), (o = l(o)), (u = u.slice()), (t = i - o))) {
              for (
                t > 0 ? ((o = i), (r = s)) : ((t = -t), (r = u)), r.reverse();
                t--;
                r.push(0)
              );
              r.reverse();
            }
            for (
              (t = u.length) - (n = s.length) < 0 &&
                ((r = s), (s = u), (u = r), (n = t)),
                t = 0;
              n;

            )
              (t = ((u[--n] = u[n] + s[n] + t) / 1e14) | 0),
                (u[n] = 1e14 === u[n] ? 0 : u[n] % 1e14);
            return t && ((u = [t].concat(u)), ++o), F(e, u, o);
          }),
          (S.precision = S.sd =
            function (e, n) {
              var r, t, i;
              if (null != e && !!e !== e)
                return (
                  h(e, 1, 1e9),
                  null == n ? (n = B) : h(n, 0, 8),
                  j(new k(this), e, n)
                );
              if (!(r = this.c)) return null;
              if (((t = 14 * (i = r.length - 1) + 1), (i = r[i]))) {
                for (; i % 10 == 0; i /= 10, t--);
                for (i = r[0]; i >= 10; i /= 10, t++);
              }
              return e && this.e + 1 > t && (t = this.e + 1), t;
            }),
          (S.shiftedBy = function (e) {
            return (
              h(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
            );
          }),
          (S.squareRoot = S.sqrt =
            function () {
              var e,
                n,
                r,
                t,
                i,
                o = this.c,
                u = this.s,
                s = this.e,
                f = _ + 4,
                a = new k("0.5");
              if (1 !== u || !o || !o[0])
                return new k(
                  !u || (u < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0
                );
              if (
                (0 == (u = Math.sqrt(+V(this))) || u == 1 / 0
                  ? (((n = c(o)).length + s) % 2 == 0 && (n += "0"),
                    (u = Math.sqrt(+n)),
                    (s = l((s + 1) / 2) - (s < 0 || s % 2)),
                    (r = new k(
                      (n =
                        u == 1 / 0
                          ? "5e" + s
                          : (n = u.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1
                            ) + s)
                    )))
                  : (r = new k(u + "")),
                r.c[0])
              ) {
                for ((u = (s = r.e) + f) < 3 && (u = 0); ; )
                  if (
                    ((i = r),
                    (r = a.times(i.plus(O(this, i, f, 1)))),
                    c(i.c).slice(0, u) === (n = c(r.c)).slice(0, u))
                  ) {
                    if (
                      (r.e < s && --u,
                      "9999" != (n = n.slice(u - 3, u + 1)) &&
                        (t || "4999" != n))
                    ) {
                      (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                        (j(r, r.e + _ + 2, 1), (e = !r.times(r).eq(this)));
                      break;
                    }
                    if (!t && (j(i, i.e + _ + 2, 0), i.times(i).eq(this))) {
                      r = i;
                      break;
                    }
                    (f += 4), (u += 4), (t = 1);
                  }
              }
              return j(r, r.e + _ + 1, B, e);
            }),
          (S.toExponential = function (e, n) {
            return null != e && (h(e, 0, 1e9), e++), G(this, e, n, 1);
          }),
          (S.toFixed = function (e, n) {
            return (
              null != e && (h(e, 0, 1e9), (e = e + this.e + 1)), G(this, e, n)
            );
          }),
          (S.toFormat = function (e, n, r) {
            var t;
            if (null == r)
              null != e && n && "object" == typeof n
                ? ((r = n), (n = null))
                : e && "object" == typeof e
                ? ((r = e), (e = n = null))
                : (r = C);
            else if ("object" != typeof r)
              throw Error(u + "Argument not an object: " + r);
            if (((t = this.toFixed(e, n)), this.c)) {
              var i,
                o = t.split("."),
                s = +r.groupSize,
                f = +r.secondaryGroupSize,
                l = r.groupSeparator || "",
                c = o[0],
                a = o[1],
                h = this.s < 0,
                p = h ? c.slice(1) : c,
                g = p.length;
              if (
                (f && ((i = s), (s = f), (f = i), (g -= i)), s > 0 && g > 0)
              ) {
                for (i = g % s || s, c = p.substr(0, i); i < g; i += s)
                  c += l + p.substr(i, s);
                f > 0 && (c += l + p.slice(i)), h && (c = "-" + c);
              }
              t = a
                ? c +
                  (r.decimalSeparator || "") +
                  ((f = +r.fractionGroupSize)
                    ? a.replace(
                        RegExp("\\d{" + f + "}\\B", "g"),
                        "$&" + (r.fractionGroupSeparator || "")
                      )
                    : a)
                : c;
            }
            return (r.prefix || "") + t + (r.suffix || "");
          }),
          (S.toFraction = function (e) {
            var n,
              r,
              t,
              i,
              o,
              s,
              l,
              a,
              h,
              p,
              g,
              d,
              w = this.c;
            if (
              null != e &&
              ((!(l = new k(e)).isInteger() && (l.c || 1 !== l.s)) || l.lt(A))
            )
              throw Error(
                u +
                  "Argument " +
                  (l.isInteger() ? "out of range: " : "not an integer: ") +
                  V(l)
              );
            if (!w) return new k(this);
            for (
              n = new k(A),
                h = r = new k(A),
                t = a = new k(A),
                d = c(w),
                o = n.e = d.length - this.e - 1,
                n.c[0] = f[(s = o % 14) < 0 ? 14 + s : s],
                e = !e || l.comparedTo(n) > 0 ? (o > 0 ? n : h) : l,
                s = L,
                L = 1 / 0,
                l = new k(d),
                a.c[0] = 0;
              (p = O(l, n, 0, 1)), 1 != (i = r.plus(p.times(t))).comparedTo(e);

            )
              (r = t),
                (t = i),
                (h = a.plus(p.times((i = h)))),
                (a = i),
                (n = l.minus(p.times((i = n)))),
                (l = i);
            return (
              (i = O(e.minus(r), t, 0, 1)),
              (a = a.plus(i.times(h))),
              (r = r.plus(i.times(t))),
              (a.s = h.s = this.s),
              (o *= 2),
              (g =
                1 >
                O(h, t, o, B)
                  .minus(this)
                  .abs()
                  .comparedTo(O(a, r, o, B).minus(this).abs())
                  ? [h, t]
                  : [a, r]),
              (L = s),
              g
            );
          }),
          (S.toNumber = function () {
            return +V(this);
          }),
          (S.toPrecision = function (e, n) {
            return null != e && h(e, 1, 1e9), G(this, e, n, 2);
          }),
          (S.toString = function (e) {
            var n,
              r = this,
              t = r.s,
              i = r.e;
            return (
              null === i
                ? t
                  ? ((n = "Infinity"), t < 0 && (n = "-" + n))
                  : (n = "NaN")
                : (null == e
                    ? (n = i <= D || i >= I ? g(c(r.c), i) : d(c(r.c), i, "0"))
                    : 10 === e && M
                    ? (n = d(c((r = j(new k(r), _ + i + 1, B)).c), r.e, "0"))
                    : (h(e, 2, T.length, "Base"),
                      (n = N(d(c(r.c), i, "0"), 10, e, t, !0))),
                  t < 0 && r.c[0] && (n = "-" + n)),
              n
            );
          }),
          (S.valueOf = S.toJSON =
            function () {
              return V(this);
            }),
          (S._isBigNumber = !0),
          (S[Symbol.toStringTag] = "BigNumber"),
          (S[Symbol.for("nodejs.util.inspect.custom")] = S.valueOf),
          null != n && k.set(n),
          k
        );
      })();
      n.Z = w;
    },
    1958: function (e, n, r) {
      r.d(n, {
        DR: function () {
          return t;
        },
      });
      let t = "0x0000000000000000000000000000000000000000";
    },
  },
]);
