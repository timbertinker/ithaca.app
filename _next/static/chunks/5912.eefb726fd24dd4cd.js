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
      (e._sentryDebugIds[t] = "a33f631f-aa2a-42da-9291-3528f0300d57"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a33f631f-aa2a-42da-9291-3528f0300d57"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5912],
    {
      94470: function (e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          r = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          o = function (e) {
            return "function" == typeof Array.isArray
              ? Array.isArray(e)
              : "[object Array]" === n.call(e);
          },
          l = function (e) {
            if (!e || "[object Object]" !== n.call(e)) return !1;
            var r,
              i = t.call(e, "constructor"),
              o =
                e.constructor &&
                e.constructor.prototype &&
                t.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !i && !o) return !1;
            for (r in e);
            return void 0 === r || t.call(e, r);
          },
          a = function (e, t) {
            r && "__proto__" === t.name
              ? r(e, t.name, {
                  enumerable: !0,
                  configurable: !0,
                  value: t.newValue,
                  writable: !0,
                })
              : (e[t.name] = t.newValue);
          },
          s = function (e, n) {
            if ("__proto__" === n) {
              if (!t.call(e, n)) return;
              if (i) return i(e, n).value;
            }
            return e[n];
          };
        e.exports = function e() {
          var t,
            n,
            r,
            i,
            u,
            c,
            d = arguments[0],
            f = 1,
            h = arguments.length,
            p = !1;
          for (
            "boolean" == typeof d &&
              ((p = d), (d = arguments[1] || {}), (f = 2)),
              (null == d || ("object" != typeof d && "function" != typeof d)) &&
                (d = {});
            f < h;
            ++f
          )
            if (((t = arguments[f]), null != t))
              for (n in t)
                (r = s(d, n)),
                  d !== (i = s(t, n)) &&
                    (p && i && (l(i) || (u = o(i)))
                      ? (u
                          ? ((u = !1), (c = r && o(r) ? r : []))
                          : (c = r && l(r) ? r : {}),
                        a(d, { name: n, newValue: e(p, c, i) }))
                      : void 0 !== i && a(d, { name: n, newValue: i }));
          return d;
        };
      },
      18139: function (e) {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
          n = /\n/g,
          r = /^\s*/,
          i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
          o = /^:\s*/,
          l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
          a = /^[;\s]*/,
          s = /^\s+|\s+$/g;
        function u(e) {
          return e ? e.replace(s, "") : "";
        }
        e.exports = function (e, s) {
          if ("string" != typeof e)
            throw TypeError("First argument must be a string");
          if (!e) return [];
          s = s || {};
          var c = 1,
            d = 1;
          function f(e) {
            var t = e.match(n);
            t && (c += t.length);
            var r = e.lastIndexOf("\n");
            d = ~r ? e.length - r : d + e.length;
          }
          function h() {
            var e = { line: c, column: d };
            return function (t) {
              return (t.position = new p(e)), v(r), t;
            };
          }
          function p(e) {
            (this.start = e),
              (this.end = { line: c, column: d }),
              (this.source = s.source);
          }
          p.prototype.content = e;
          var m = [];
          function g(t) {
            var n = Error(s.source + ":" + c + ":" + d + ": " + t);
            if (
              ((n.reason = t),
              (n.filename = s.source),
              (n.line = c),
              (n.column = d),
              (n.source = e),
              s.silent)
            )
              m.push(n);
            else throw n;
          }
          function v(t) {
            var n = t.exec(e);
            if (n) {
              var r = n[0];
              return f(r), (e = e.slice(r.length)), n;
            }
          }
          function y(e) {
            var t;
            for (e = e || []; (t = x()); ) !1 !== t && e.push(t);
            return e;
          }
          function x() {
            var t = h();
            if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
              for (
                var n = 2;
                "" != e.charAt(n) &&
                ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

              )
                ++n;
              if (((n += 2), "" === e.charAt(n - 1)))
                return g("End of comment missing");
              var r = e.slice(2, n - 2);
              return (
                (d += 2),
                f(r),
                (e = e.slice(n)),
                (d += 2),
                t({ type: "comment", comment: r })
              );
            }
          }
          return (
            v(r),
            (function () {
              var e,
                n = [];
              for (
                y(n);
                (e = (function () {
                  var e = h(),
                    n = v(i);
                  if (n) {
                    if ((x(), !v(o))) return g("property missing ':'");
                    var r = v(l),
                      s = e({
                        type: "declaration",
                        property: u(n[0].replace(t, "")),
                        value: r ? u(r[0].replace(t, "")) : "",
                      });
                    return v(a), s;
                  }
                })());

              )
                !1 !== e && (n.push(e), y(n));
              return n;
            })()
          );
        };
      },
      4913: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return eF;
          },
        });
        var r = n(67294);
        let i = (e, t) => {
            for (let n in t) e[n] = t[n];
            return e;
          },
          o = "numeric",
          l = "ascii",
          a = "alpha",
          s = "asciinumeric",
          u = "alphanumeric",
          c = "domain",
          d = "emoji",
          f = "whitespace";
        function h(e, t, n) {
          for (let r in (t[o] && ((t[s] = !0), (t[u] = !0)),
          t[l] && ((t[s] = !0), (t[a] = !0)),
          t[s] && (t[u] = !0),
          t[a] && (t[u] = !0),
          t[u] && (t[c] = !0),
          t[d] && (t[c] = !0),
          t)) {
            let t = (r in n || (n[r] = []), n[r]);
            0 > t.indexOf(e) && t.push(e);
          }
        }
        function p(e = null) {
          (this.j = {}), (this.jr = []), (this.jd = null), (this.t = e);
        }
        (p.groups = {}),
          (p.prototype = {
            accepts() {
              return !!this.t;
            },
            go(e) {
              let t = this.j[e];
              if (t) return t;
              for (let t = 0; t < this.jr.length; t++) {
                let n = this.jr[t][0],
                  r = this.jr[t][1];
                if (r && n.test(e)) return r;
              }
              return this.jd;
            },
            has(e, t = !1) {
              return t ? e in this.j : !!this.go(e);
            },
            ta(e, t, n, r) {
              for (let i = 0; i < e.length; i++) this.tt(e[i], t, n, r);
            },
            tr(e, t, n, r) {
              let i;
              return (
                (r = r || p.groups),
                t && t.j ? (i = t) : ((i = new p(t)), n && r && h(t, n, r)),
                this.jr.push([e, i]),
                i
              );
            },
            ts(e, t, n, r) {
              let i = this,
                o = e.length;
              if (!o) return i;
              for (let t = 0; t < o - 1; t++) i = i.tt(e[t]);
              return i.tt(e[o - 1], t, n, r);
            },
            tt(e, t, n, r) {
              if (((r = r || p.groups), t && t.j)) return (this.j[e] = t), t;
              let o,
                l = this.go(e);
              return (
                l
                  ? (i((o = new p()).j, l.j),
                    o.jr.push.apply(o.jr, l.jr),
                    (o.jd = l.jd),
                    (o.t = l.t))
                  : (o = new p()),
                t &&
                  (r &&
                    (o.t && "string" == typeof o.t
                      ? h(
                          t,
                          i(
                            (function (e, t) {
                              let n = {};
                              for (let r in t)
                                t[r].indexOf(e) >= 0 && (n[r] = !0);
                              return n;
                            })(o.t, r),
                            n
                          ),
                          r
                        )
                      : n && h(t, n, r)),
                  (o.t = t)),
                (this.j[e] = o),
                o
              );
            },
          });
        let m = (e, t, n, r, i) => e.ta(t, n, r, i),
          g = (e, t, n, r, i) => e.tr(t, n, r, i),
          v = (e, t, n, r, i) => e.ts(t, n, r, i),
          y = (e, t, n, r, i) => e.tt(t, n, r, i),
          x = "WORD",
          b = "UWORD",
          k = "ASCIINUMERICAL",
          w = "ALPHANUMERICAL",
          S = "LOCALHOST",
          C = "UTLD",
          E = "SCHEME",
          O = "SLASH_SCHEME",
          T = "OPENBRACE",
          j = "CLOSEBRACE",
          _ = "OPENBRACKET",
          P = "CLOSEBRACKET",
          M = "OPENPAREN",
          L = "CLOSEPAREN",
          N = "OPENANGLEBRACKET",
          A = "CLOSEANGLEBRACKET",
          I = "FULLWIDTHLEFTPAREN",
          R = "FULLWIDTHRIGHTPAREN",
          D = "LEFTCORNERBRACKET",
          F = "RIGHTCORNERBRACKET",
          z = "LEFTWHITECORNERBRACKET",
          H = "RIGHTWHITECORNERBRACKET",
          B = "FULLWIDTHLESSTHAN",
          U = "FULLWIDTHGREATERTHAN",
          V = "AMPERSAND",
          W = "APOSTROPHE",
          q = "ASTERISK",
          K = "BACKSLASH",
          Y = "BACKTICK",
          Q = "CARET",
          Z = "COLON",
          $ = "COMMA",
          G = "DOLLAR",
          J = "EQUALS",
          X = "EXCLAMATION",
          ee = "HYPHEN",
          et = "PERCENT",
          en = "PIPE",
          er = "PLUS",
          ei = "POUND",
          eo = "QUERY",
          el = "QUOTE",
          ea = "FULLWIDTHMIDDLEDOT",
          es = "SEMI",
          eu = "SLASH",
          ec = "TILDE",
          ed = "UNDERSCORE",
          ef = "EMOJI";
        var eh = Object.freeze({
          __proto__: null,
          WORD: x,
          UWORD: b,
          ASCIINUMERICAL: k,
          ALPHANUMERICAL: w,
          LOCALHOST: S,
          TLD: "TLD",
          UTLD: C,
          SCHEME: E,
          SLASH_SCHEME: O,
          NUM: "NUM",
          WS: "WS",
          NL: "NL",
          OPENBRACE: T,
          CLOSEBRACE: j,
          OPENBRACKET: _,
          CLOSEBRACKET: P,
          OPENPAREN: M,
          CLOSEPAREN: L,
          OPENANGLEBRACKET: N,
          CLOSEANGLEBRACKET: A,
          FULLWIDTHLEFTPAREN: I,
          FULLWIDTHRIGHTPAREN: R,
          LEFTCORNERBRACKET: D,
          RIGHTCORNERBRACKET: F,
          LEFTWHITECORNERBRACKET: z,
          RIGHTWHITECORNERBRACKET: H,
          FULLWIDTHLESSTHAN: B,
          FULLWIDTHGREATERTHAN: U,
          AMPERSAND: V,
          APOSTROPHE: W,
          ASTERISK: q,
          AT: "AT",
          BACKSLASH: K,
          BACKTICK: Y,
          CARET: Q,
          COLON: Z,
          COMMA: $,
          DOLLAR: G,
          DOT: "DOT",
          EQUALS: J,
          EXCLAMATION: X,
          HYPHEN: ee,
          PERCENT: et,
          PIPE: en,
          PLUS: er,
          POUND: ei,
          QUERY: eo,
          QUOTE: el,
          FULLWIDTHMIDDLEDOT: ea,
          SEMI: es,
          SLASH: eu,
          TILDE: ec,
          UNDERSCORE: ed,
          EMOJI: ef,
          SYM: "SYM",
        });
        let ep = /[a-z]/,
          em = /\p{L}/u,
          eg = /\p{Emoji}/u,
          ev = /\d/,
          ey = /\s/,
          ex = null,
          eb = null;
        function ek(e, t) {
          let n = (function (e) {
              let t = [],
                n = e.length,
                r = 0;
              for (; r < n; ) {
                let i,
                  o = e.charCodeAt(r),
                  l =
                    o < 55296 ||
                    o > 56319 ||
                    r + 1 === n ||
                    (i = e.charCodeAt(r + 1)) < 56320 ||
                    i > 57343
                      ? e[r]
                      : e.slice(r, r + 2);
                t.push(l), (r += l.length);
              }
              return t;
            })(t.replace(/[A-Z]/g, (e) => e.toLowerCase())),
            r = n.length,
            i = [],
            o = 0,
            l = 0;
          for (; l < r; ) {
            let a = e,
              s = null,
              u = 0,
              c = null,
              d = -1,
              f = -1;
            for (; l < r && (s = a.go(n[l])); )
              (a = s).accepts()
                ? ((d = 0), (f = 0), (c = a))
                : d >= 0 && ((d += n[l].length), f++),
                (u += n[l].length),
                (o += n[l].length),
                l++;
            (o -= d),
              (l -= f),
              (u -= d),
              i.push({ t: c.t, v: t.slice(o - u, o), s: o - u, e: o });
          }
          return i;
        }
        function ew(e, t, n, r, i) {
          let o;
          let l = t.length;
          for (let n = 0; n < l - 1; n++) {
            let l = t[n];
            e.j[l]
              ? (o = e.j[l])
              : (((o = new p(r)).jr = i.slice()), (e.j[l] = o)),
              (e = o);
          }
          return ((o = new p(n)).jr = i.slice()), (e.j[t[l - 1]] = o), o;
        }
        function eS(e) {
          let t = [],
            n = [],
            r = 0;
          for (; r < e.length; ) {
            let i = 0;
            for (; "0123456789".indexOf(e[r + i]) >= 0; ) i++;
            if (i > 0) {
              t.push(n.join(""));
              for (let t = parseInt(e.substring(r, r + i), 10); t > 0; t--)
                n.pop();
              r += i;
            } else n.push(e[r]), r++;
          }
          return t;
        }
        let eC = {
          defaultProtocol: "http",
          events: null,
          format: eO,
          formatHref: eO,
          nl2br: !1,
          tagName: "a",
          target: null,
          rel: null,
          validate: !0,
          truncate: 1 / 0,
          className: null,
          attributes: null,
          ignoreTags: [],
          render: null,
        };
        function eE(e, t = null) {
          let n = i({}, eC);
          e && (n = i(n, e instanceof eE ? e.o : e));
          let r = n.ignoreTags,
            o = [];
          for (let e = 0; e < r.length; e++) o.push(r[e].toUpperCase());
          (this.o = n), t && (this.defaultRender = t), (this.ignoreTags = o);
        }
        function eO(e) {
          return e;
        }
        eE.prototype = {
          o: eC,
          ignoreTags: [],
          defaultRender: (e) => e,
          check(e) {
            return this.get("validate", e.toString(), e);
          },
          get(e, t, n) {
            let r = null != t,
              i = this.o[e];
            return (
              i &&
                ("object" == typeof i
                  ? "function" == typeof (i = n.t in i ? i[n.t] : eC[e]) &&
                    r &&
                    (i = i(t, n))
                  : "function" == typeof i && r && (i = i(t, n.t, n))),
              i
            );
          },
          getObj(e, t, n) {
            let r = this.o[e];
            return "function" == typeof r && null != t && (r = r(t, n.t, n)), r;
          },
          render(e) {
            let t = e.render(this);
            return (this.get("render", null, e) || this.defaultRender)(
              t,
              e.t,
              e
            );
          },
        };
        var eT = Object.freeze({
          __proto__: null,
          defaults: eC,
          Options: eE,
          assign: i,
        });
        function ej(e, t) {
          (this.t = "token"), (this.v = e), (this.tk = t);
        }
        function e_(e, t) {
          class n extends ej {
            constructor(t, n) {
              super(t, n), (this.t = e);
            }
          }
          for (let e in t) n.prototype[e] = t[e];
          return (n.t = e), n;
        }
        ej.prototype = {
          isLink: !1,
          toString() {
            return this.v;
          },
          toHref(e) {
            return this.toString();
          },
          toFormattedString(e) {
            let t = this.toString(),
              n = e.get("truncate", t, this),
              r = e.get("format", t, this);
            return n && r.length > n ? r.substring(0, n) + "…" : r;
          },
          toFormattedHref(e) {
            return e.get(
              "formatHref",
              this.toHref(e.get("defaultProtocol")),
              this
            );
          },
          startIndex() {
            return this.tk[0].s;
          },
          endIndex() {
            return this.tk[this.tk.length - 1].e;
          },
          toObject(e = eC.defaultProtocol) {
            return {
              type: this.t,
              value: this.toString(),
              isLink: this.isLink,
              href: this.toHref(e),
              start: this.startIndex(),
              end: this.endIndex(),
            };
          },
          toFormattedObject(e) {
            return {
              type: this.t,
              value: this.toFormattedString(e),
              isLink: this.isLink,
              href: this.toFormattedHref(e),
              start: this.startIndex(),
              end: this.endIndex(),
            };
          },
          validate(e) {
            return e.get("validate", this.toString(), this);
          },
          render(e) {
            let t = this.toHref(e.get("defaultProtocol")),
              n = e.get("formatHref", t, this),
              r = e.get("tagName", t, this),
              o = this.toFormattedString(e),
              l = {},
              a = e.get("className", t, this),
              s = e.get("target", t, this),
              u = e.get("rel", t, this),
              c = e.getObj("attributes", t, this),
              d = e.getObj("events", t, this);
            return (
              (l.href = n),
              a && (l.class = a),
              s && (l.target = s),
              u && (l.rel = u),
              c && i(l, c),
              { tagName: r, attributes: l, content: o, eventListeners: d }
            );
          },
        };
        let eP = e_("email", {
            isLink: !0,
            toHref() {
              return "mailto:" + this.toString();
            },
          }),
          eM = e_("text"),
          eL = e_("nl"),
          eN = e_("url", {
            isLink: !0,
            toHref(e = eC.defaultProtocol) {
              return this.hasProtocol() ? this.v : `${e}://${this.v}`;
            },
            hasProtocol() {
              let e = this.tk;
              return e.length >= 2 && e[0].t !== S && e[1].t === Z;
            },
          }),
          eA = (e) => new p(e);
        function eI(e, t, n) {
          let r = n[0].s,
            i = n[n.length - 1].e;
          return new e(t.slice(r, i), n);
        }
        ("undefined" != typeof console && console && console.warn) ||
          (() => {});
        let eR = {
          scanner: null,
          parser: null,
          tokenQueue: [],
          pluginQueue: [],
          customSchemes: [],
          initialized: !1,
        };
        function eD(e) {
          return (
            eR.initialized ||
              (function () {
                eR.scanner = (function (e = []) {
                  let t = {};
                  p.groups = t;
                  let n = new p();
                  null == ex &&
                    (ex = eS(
                      "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xf6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2"
                    )),
                    null == eb &&
                      (eb = eS(
                        "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2"
                      )),
                    y(n, "'", W),
                    y(n, "{", T),
                    y(n, "}", j),
                    y(n, "[", _),
                    y(n, "]", P),
                    y(n, "(", M),
                    y(n, ")", L),
                    y(n, "<", N),
                    y(n, ">", A),
                    y(n, "（", I),
                    y(n, "）", R),
                    y(n, "「", D),
                    y(n, "」", F),
                    y(n, "『", z),
                    y(n, "』", H),
                    y(n, "＜", B),
                    y(n, "＞", U),
                    y(n, "&", V),
                    y(n, "*", q),
                    y(n, "@", "AT"),
                    y(n, "`", Y),
                    y(n, "^", Q),
                    y(n, ":", Z),
                    y(n, ",", $),
                    y(n, "$", G),
                    y(n, ".", "DOT"),
                    y(n, "=", J),
                    y(n, "!", X),
                    y(n, "-", ee),
                    y(n, "%", et),
                    y(n, "|", en),
                    y(n, "+", er),
                    y(n, "#", ei),
                    y(n, "?", eo),
                    y(n, '"', el),
                    y(n, "/", eu),
                    y(n, ";", es),
                    y(n, "~", ec),
                    y(n, "_", ed),
                    y(n, "\\", K),
                    y(n, "・", ea);
                  let r = g(n, ev, "NUM", { [o]: !0 });
                  g(r, ev, r);
                  let m = g(r, ep, k, { [s]: !0 }),
                    ek = g(r, em, w, { [u]: !0 }),
                    eC = g(n, ep, x, { [l]: !0 });
                  g(eC, ev, m), g(eC, ep, eC), g(m, ev, m), g(m, ep, m);
                  let eE = g(n, em, b, { [a]: !0 });
                  g(eE, ep),
                    g(eE, ev, ek),
                    g(eE, em, eE),
                    g(ek, ev, ek),
                    g(ek, ep),
                    g(ek, em, ek);
                  let eO = y(n, "\n", "NL", { [f]: !0 }),
                    eT = y(n, "\r", "WS", { [f]: !0 }),
                    ej = g(n, ey, "WS", { [f]: !0 });
                  y(n, "￼", ej),
                    y(eT, "\n", eO),
                    y(eT, "￼", ej),
                    g(eT, ey, ej),
                    y(ej, "\r"),
                    y(ej, "\n"),
                    g(ej, ey, ej),
                    y(ej, "￼", ej);
                  let e_ = g(n, eg, ef, { [d]: !0 });
                  y(e_, "#"), g(e_, eg, e_), y(e_, "️", e_);
                  let eP = y(e_, "‍");
                  y(eP, "#"), g(eP, eg, e_);
                  let eM = [
                      [ep, eC],
                      [ev, m],
                    ],
                    eL = [
                      [ep, null],
                      [em, eE],
                      [ev, ek],
                    ];
                  for (let e = 0; e < ex.length; e++)
                    ew(n, ex[e], "TLD", x, eM);
                  for (let e = 0; e < eb.length; e++) ew(n, eb[e], C, b, eL);
                  h("TLD", { tld: !0, ascii: !0 }, t),
                    h(C, { utld: !0, alpha: !0 }, t),
                    ew(n, "file", E, x, eM),
                    ew(n, "mailto", E, x, eM),
                    ew(n, "http", O, x, eM),
                    ew(n, "https", O, x, eM),
                    ew(n, "ftp", O, x, eM),
                    ew(n, "ftps", O, x, eM),
                    h(E, { scheme: !0, ascii: !0 }, t),
                    h(O, { slashscheme: !0, ascii: !0 }, t),
                    (e = e.sort((e, t) => (e[0] > t[0] ? 1 : -1)));
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t][0],
                      i = e[t][1] ? { scheme: !0 } : { slashscheme: !0 };
                    r.indexOf("-") >= 0
                      ? (i[c] = !0)
                      : ep.test(r)
                      ? ev.test(r)
                        ? (i[s] = !0)
                        : (i[l] = !0)
                      : (i[o] = !0),
                      v(n, r, r, i);
                  }
                  return (
                    v(n, "localhost", S, { ascii: !0 }),
                    (n.jd = new p("SYM")),
                    { start: n, tokens: i({ groups: t }, eh) }
                  );
                })(eR.customSchemes);
                for (let e = 0; e < eR.tokenQueue.length; e++)
                  eR.tokenQueue[e][1]({ scanner: eR.scanner });
                eR.parser = (function ({ groups: e }) {
                  let t = e.domain.concat([
                      V,
                      q,
                      "AT",
                      K,
                      Y,
                      Q,
                      G,
                      J,
                      ee,
                      "NUM",
                      et,
                      en,
                      er,
                      ei,
                      eu,
                      "SYM",
                      ec,
                      ed,
                    ]),
                    n = [
                      Z,
                      $,
                      "DOT",
                      X,
                      et,
                      eo,
                      el,
                      es,
                      N,
                      A,
                      T,
                      j,
                      P,
                      _,
                      M,
                      L,
                      I,
                      R,
                      D,
                      F,
                      z,
                      H,
                      B,
                      U,
                    ],
                    r = [
                      V,
                      W,
                      q,
                      K,
                      Y,
                      Q,
                      G,
                      J,
                      ee,
                      T,
                      j,
                      et,
                      en,
                      er,
                      ei,
                      eo,
                      eu,
                      "SYM",
                      ec,
                      ed,
                    ],
                    i = eA(),
                    o = y(i, ec);
                  m(o, r, o), m(o, e.domain, o);
                  let l = eA(),
                    a = eA(),
                    s = eA();
                  m(i, e.domain, l),
                    m(i, e.scheme, a),
                    m(i, e.slashscheme, s),
                    m(l, r, o),
                    m(l, e.domain, l);
                  let u = y(l, "AT");
                  y(o, "AT", u), y(a, "AT", u), y(s, "AT", u);
                  let c = y(o, "DOT");
                  m(c, r, o), m(c, e.domain, o);
                  let d = eA();
                  m(u, e.domain, d), m(d, e.domain, d);
                  let f = y(d, "DOT");
                  m(f, e.domain, d);
                  let h = eA(eP);
                  m(f, e.tld, h), m(f, e.utld, h), y(u, S, h);
                  let p = y(d, ee);
                  y(p, ee, p),
                    m(p, e.domain, d),
                    m(h, e.domain, d),
                    y(h, "DOT", f),
                    y(h, ee, p),
                    m(y(h, Z), e.numeric, eP);
                  let g = y(l, ee),
                    v = y(l, "DOT");
                  y(g, ee, g), m(g, e.domain, l), m(v, r, o), m(v, e.domain, l);
                  let x = eA(eN);
                  m(v, e.tld, x),
                    m(v, e.utld, x),
                    m(x, e.domain, l),
                    m(x, r, o),
                    y(x, "DOT", v),
                    y(x, ee, g),
                    y(x, "AT", u);
                  let b = y(x, Z),
                    k = eA(eN);
                  m(b, e.numeric, k);
                  let w = eA(eN),
                    C = eA();
                  m(w, t, w),
                    m(w, n, C),
                    m(C, t, w),
                    m(C, n, C),
                    y(x, eu, w),
                    y(k, eu, w);
                  let E = y(a, Z),
                    O = y(s, Z),
                    ea = y(O, eu),
                    ef = y(ea, eu);
                  m(a, e.domain, l),
                    y(a, "DOT", v),
                    y(a, ee, g),
                    m(s, e.domain, l),
                    y(s, "DOT", v),
                    y(s, ee, g),
                    m(E, e.domain, w),
                    y(E, eu, w),
                    y(E, eo, w),
                    m(ef, e.domain, w),
                    m(ef, t, w),
                    y(ef, eu, w);
                  let ep = [
                    [T, j],
                    [_, P],
                    [M, L],
                    [N, A],
                    [I, R],
                    [D, F],
                    [z, H],
                    [B, U],
                  ];
                  for (let e = 0; e < ep.length; e++) {
                    let [r, i] = ep[e],
                      o = y(w, r);
                    y(C, r, o), y(o, i, w);
                    let l = eA(eN);
                    m(o, t, l);
                    let a = eA();
                    m(o, n),
                      m(l, t, l),
                      m(l, n, a),
                      m(a, t, l),
                      m(a, n, a),
                      y(l, i, w),
                      y(a, i, w);
                  }
                  return y(i, S, x), y(i, "NL", eL), { start: i, tokens: eh };
                })(eR.scanner.tokens);
                for (let e = 0; e < eR.pluginQueue.length; e++)
                  eR.pluginQueue[e][1]({
                    scanner: eR.scanner,
                    parser: eR.parser,
                  });
                eR.initialized = !0;
              })(),
            (function (e, t, n) {
              let r = n.length,
                i = 0,
                o = [],
                l = [];
              for (; i < r; ) {
                let a = e,
                  s = null,
                  u = null,
                  c = 0,
                  d = null,
                  f = -1;
                for (; i < r && !(s = a.go(n[i].t)); ) l.push(n[i++]);
                for (; i < r && (u = s || a.go(n[i].t)); )
                  (s = null),
                    (a = u).accepts() ? ((f = 0), (d = a)) : f >= 0 && f++,
                    i++,
                    c++;
                if (f < 0) (i -= c) < r && (l.push(n[i]), i++);
                else {
                  l.length > 0 && (o.push(eI(eM, t, l)), (l = [])),
                    (i -= f),
                    (c -= f);
                  let e = d.t,
                    r = n.slice(i - c, i);
                  o.push(eI(e, t, r));
                }
              }
              return l.length > 0 && o.push(eI(eM, t, l)), o;
            })(eR.parser.start, e, ek(eR.scanner.start, e))
          );
        }
        eD.scan = ek;
        let eF = (e) => {
          let t = 0,
            n = { key: "__linkify-wrapper" };
          for (let t in e)
            "options" !== t &&
              "as" !== t &&
              "tagName" !== t &&
              "children" !== t &&
              (n[t] = e[t]);
          let i = new eE(
              e.options,
              ({ tagName: e, attributes: n, content: i }) => (
                (n.key = `__linkify-lnk-${t++}`),
                n.class && ((n.className = n.class), delete n.class),
                r.createElement(e, n, i)
              )
            ),
            o = e.as || e.tagName || r.Fragment || "span",
            l = e.children;
          return (function e(t, n, i) {
            if (0 === r.Children.count(t.props.children)) return t;
            let o = [];
            r.Children.forEach(t.props.children, (t) => {
              "string" == typeof t
                ? o.push.apply(
                    o,
                    (function (e, t, n) {
                      let i = eD(e),
                        o = [];
                      for (let e = 0; e < i.length; e++) {
                        let l = i[e];
                        if ("nl" === l.t && t.get("nl2br")) {
                          let e = `__linkify-el-${n.elementId++}`;
                          o.push(r.createElement("br", { key: e }));
                        } else if (l.isLink && t.check(l)) {
                          let e = t.render(l);
                          if (!("key" in e.props)) {
                            let t = `__linkify-el-${n.elementId++}`,
                              i = eT.assign({ key: t }, e.props);
                            e = r.cloneElement(e, i);
                          }
                          o.push(e);
                        } else o.push(l.toString());
                      }
                      return o;
                    })(t, n, i)
                  )
                : r.isValidElement(t)
                ? "string" == typeof t.type &&
                  n.ignoreTags.indexOf(t.type.toUpperCase()) >= 0
                  ? o.push(t)
                  : o.push(e(t, n, i))
                : o.push(t);
            });
            let l = `__linkify-el-${i.elementId++}`,
              a = eT.assign({ key: l }, t.props);
            return r.cloneElement(t, a, o);
          })(r.createElement(o, n, l), i, { elementId: 0 });
        };
      },
      63149: function () {},
      89793: function (e, t, n) {
        "use strict";
        n.d(t, {
          rN: function () {
            return eU;
          },
        });
        var r = n(85893),
          i = n(67294),
          o = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0,
          },
          l = i.createContext && i.createContext(o),
          a = function () {
            return (a =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          s = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          };
        function u(e) {
          return function (t) {
            return i.createElement(
              c,
              a({ attr: a({}, e.attr) }, t),
              (function e(t) {
                return (
                  t &&
                  t.map(function (t, n) {
                    return i.createElement(
                      t.tag,
                      a({ key: n }, t.attr),
                      e(t.child)
                    );
                  })
                );
              })(e.child)
            );
          };
        }
        function c(e) {
          var t = function (t) {
            var n,
              r = e.attr,
              o = e.size,
              l = e.title,
              u = s(e, ["attr", "size", "title"]),
              c = o || t.size || "1em";
            return (
              t.className && (n = t.className),
              e.className && (n = (n ? n + " " : "") + e.className),
              i.createElement(
                "svg",
                a(
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                  },
                  t.attr,
                  r,
                  u,
                  {
                    className: n,
                    style: a(
                      a({ color: e.color || t.color }, t.style),
                      e.style
                    ),
                    height: c,
                    width: c,
                    xmlns: "http://www.w3.org/2000/svg",
                  }
                ),
                l && i.createElement("title", null, l),
                e.children
              )
            );
          };
          return void 0 !== l
            ? i.createElement(l.Consumer, null, function (e) {
                return t(e);
              })
            : t(o);
        }
        function d(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 448 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z",
                },
              },
            ],
          })(e);
        }
        function f(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 320 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
                },
              },
            ],
          })(e);
        }
        function h(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 192 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",
                },
              },
            ],
          })(e);
        }
        function p(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 448 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
                },
              },
            ],
          })(e);
        }
        function m(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 640 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z",
                },
              },
            ],
          })(e);
        }
        function g(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 576 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
                },
              },
            ],
          })(e);
        }
        function v(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 384 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
                },
              },
            ],
          })(e);
        }
        var y,
          x =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
              ? self
              : {},
          b = { exports: {} };
        (y = function () {
          return (() => {
            var e = {
                720: (e, t, n) => {
                  n.r(t),
                    n.d(t, {
                      Scene: () => eQ,
                      Tweenable: () => eg,
                      interpolate: () => eV,
                      processTweens: () => es,
                      setBezierFunction: () => eZ,
                      shouldScheduleUpdate: () => ed,
                      tween: () => ev,
                      unsetBezierFunction: () => e$,
                    });
                  var r = {};
                  n.r(r),
                    n.d(r, {
                      bounce: () => D,
                      bouncePast: () => F,
                      easeFrom: () => H,
                      easeFromTo: () => z,
                      easeInBack: () => P,
                      easeInCirc: () => O,
                      easeInCubic: () => c,
                      easeInExpo: () => S,
                      easeInOutBack: () => L,
                      easeInOutCirc: () => j,
                      easeInOutCubic: () => f,
                      easeInOutExpo: () => E,
                      easeInOutQuad: () => u,
                      easeInOutQuart: () => m,
                      easeInOutQuint: () => y,
                      easeInOutSine: () => w,
                      easeInQuad: () => a,
                      easeInQuart: () => h,
                      easeInQuint: () => g,
                      easeInSine: () => b,
                      easeOutBack: () => M,
                      easeOutBounce: () => _,
                      easeOutCirc: () => T,
                      easeOutCubic: () => d,
                      easeOutExpo: () => C,
                      easeOutQuad: () => s,
                      easeOutQuart: () => p,
                      easeOutQuint: () => v,
                      easeOutSine: () => k,
                      easeTo: () => B,
                      elastic: () => N,
                      linear: () => l,
                      swingFrom: () => I,
                      swingFromTo: () => A,
                      swingTo: () => R,
                    });
                  var i = {};
                  n.r(i),
                    n.d(i, {
                      afterTween: () => ez,
                      beforeTween: () => eF,
                      doesApply: () => eR,
                      tweenCreated: () => eD,
                    });
                  var o,
                    l = function (e) {
                      return e;
                    },
                    a = function (e) {
                      return Math.pow(e, 2);
                    },
                    s = function (e) {
                      return -(Math.pow(e - 1, 2) - 1);
                    },
                    u = function (e) {
                      return (e /= 0.5) < 1
                        ? 0.5 * Math.pow(e, 2)
                        : -0.5 * ((e -= 2) * e - 2);
                    },
                    c = function (e) {
                      return Math.pow(e, 3);
                    },
                    d = function (e) {
                      return Math.pow(e - 1, 3) + 1;
                    },
                    f = function (e) {
                      return (e /= 0.5) < 1
                        ? 0.5 * Math.pow(e, 3)
                        : 0.5 * (Math.pow(e - 2, 3) + 2);
                    },
                    h = function (e) {
                      return Math.pow(e, 4);
                    },
                    p = function (e) {
                      return -(Math.pow(e - 1, 4) - 1);
                    },
                    m = function (e) {
                      return (e /= 0.5) < 1
                        ? 0.5 * Math.pow(e, 4)
                        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                    },
                    g = function (e) {
                      return Math.pow(e, 5);
                    },
                    v = function (e) {
                      return Math.pow(e - 1, 5) + 1;
                    },
                    y = function (e) {
                      return (e /= 0.5) < 1
                        ? 0.5 * Math.pow(e, 5)
                        : 0.5 * (Math.pow(e - 2, 5) + 2);
                    },
                    b = function (e) {
                      return 1 - Math.cos((Math.PI / 2) * e);
                    },
                    k = function (e) {
                      return Math.sin((Math.PI / 2) * e);
                    },
                    w = function (e) {
                      return -0.5 * (Math.cos(Math.PI * e) - 1);
                    },
                    S = function (e) {
                      return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
                    },
                    C = function (e) {
                      return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                    },
                    E = function (e) {
                      return 0 === e
                        ? 0
                        : 1 === e
                        ? 1
                        : (e /= 0.5) < 1
                        ? 0.5 * Math.pow(2, 10 * (e - 1))
                        : 0.5 * (2 - Math.pow(2, -10 * --e));
                    },
                    O = function (e) {
                      return -(Math.sqrt(1 - e * e) - 1);
                    },
                    T = function (e) {
                      return Math.sqrt(1 - Math.pow(e - 1, 2));
                    },
                    j = function (e) {
                      return (e /= 0.5) < 1
                        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                    },
                    _ = function (e) {
                      return e < 1 / 2.75
                        ? 7.5625 * e * e
                        : e < 2 / 2.75
                        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                        : e < 2.5 / 2.75
                        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                    },
                    P = function (e) {
                      return e * e * (2.70158 * e - 1.70158);
                    },
                    M = function (e) {
                      return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
                    },
                    L = function (e) {
                      var t = 1.70158;
                      return (e /= 0.5) < 1
                        ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                        : 0.5 *
                            ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                    },
                    N = function (e) {
                      return (
                        -1 *
                          Math.pow(4, -8 * e) *
                          Math.sin((2 * Math.PI * (6 * e - 1)) / 2) +
                        1
                      );
                    },
                    A = function (e) {
                      var t = 1.70158;
                      return (e /= 0.5) < 1
                        ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                        : 0.5 *
                            ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                    },
                    I = function (e) {
                      return e * e * (2.70158 * e - 1.70158);
                    },
                    R = function (e) {
                      return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
                    },
                    D = function (e) {
                      return e < 1 / 2.75
                        ? 7.5625 * e * e
                        : e < 2 / 2.75
                        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                        : e < 2.5 / 2.75
                        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                    },
                    F = function (e) {
                      return e < 1 / 2.75
                        ? 7.5625 * e * e
                        : e < 2 / 2.75
                        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                        : e < 2.5 / 2.75
                        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                    },
                    z = function (e) {
                      return (e /= 0.5) < 1
                        ? 0.5 * Math.pow(e, 4)
                        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                    },
                    H = function (e) {
                      return Math.pow(e, 4);
                    },
                    B = function (e) {
                      return Math.pow(e, 0.25);
                    };
                  function U(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  function V(e) {
                    return (V =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
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
                  function W(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t &&
                        (r = r.filter(function (t) {
                          return Object.getOwnPropertyDescriptor(
                            e,
                            t
                          ).enumerable;
                        })),
                        n.push.apply(n, r);
                    }
                    return n;
                  }
                  function q(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? W(Object(n), !0).forEach(function (t) {
                            K(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : W(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  }
                  function K(e, t, n) {
                    return (
                      t in e
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
                  var Y,
                    Q,
                    Z,
                    $ = "linear",
                    G = "undefined" != typeof window ? window : x,
                    J = "afterTween",
                    X = "beforeTween",
                    ee = "string",
                    et =
                      G.requestAnimationFrame ||
                      G.webkitRequestAnimationFrame ||
                      G.oRequestAnimationFrame ||
                      G.msRequestAnimationFrame ||
                      (G.mozCancelRequestAnimationFrame &&
                        G.mozRequestAnimationFrame) ||
                      setTimeout,
                    en = function () {},
                    er = null,
                    ei = null,
                    eo = q({}, r),
                    el = function (e, t, n, r, i, o, l) {
                      var a,
                        s,
                        u,
                        c = e < o ? 0 : (e - o) / i,
                        d = !1;
                      for (var f in (l && l.call && ((d = !0), (a = l(c))), t))
                        d || (a = ((s = l[f]).call ? s : eo[s])(c)),
                          (u = n[f]),
                          (t[f] = u + (r[f] - u) * a);
                      return t;
                    },
                    ea = function (e, t) {
                      var n = e._timestamp,
                        r = e._currentState,
                        i = e._delay;
                      if (!(t < n + i)) {
                        var o = e._duration,
                          l = e._targetState,
                          a = n + i + o,
                          s = t > a ? a : t;
                        e._hasEnded = s >= a;
                        var u = o - (a - s),
                          c = e._filters.length > 0;
                        if (e._hasEnded)
                          return e._render(l, e._data, u), e.stop(!0);
                        c && e._applyFilter(X),
                          s < n + i ? (n = o = s = 1) : (n += i),
                          el(s, r, e._originalState, l, o, n, e._easing),
                          c && e._applyFilter(J),
                          e._render(r, e._data, u);
                      }
                    },
                    es = function () {
                      for (var e, t = eg.now(), n = er; n; )
                        (e = n._next), ea(n, t), (n = e);
                    },
                    eu =
                      Date.now ||
                      function () {
                        return +new Date();
                      },
                    ec = !1,
                    ed = function (e) {
                      (e && ec) || ((ec = e), e && ef());
                    },
                    ef = function e() {
                      (Y = eu()), ec && et.call(G, e, 16.666666666666668), es();
                    },
                    eh = function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : $,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r = V(t);
                      if (eo[t]) return eo[t];
                      if (r === ee || "function" === r)
                        for (var i in e) n[i] = t;
                      else for (var o in e) n[o] = t[o] || $;
                      return n;
                    },
                    ep = function (e) {
                      e === er
                        ? (er = e._next)
                          ? (er._previous = null)
                          : (ei = null)
                        : e === ei
                        ? (ei = e._previous)
                          ? (ei._next = null)
                          : (er = null)
                        : ((Q = e._previous),
                          (Z = e._next),
                          (Q._next = Z),
                          (Z._previous = Q)),
                        (e._previous = e._next = null);
                    },
                    em = "function" == typeof Promise ? Promise : null;
                  o = Symbol.toStringTag;
                  var eg = (function () {
                    var e, t;
                    function n() {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : void 0;
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, n),
                        K(this, o, "Promise"),
                        (this._config = {}),
                        (this._data = {}),
                        (this._delay = 0),
                        (this._filters = []),
                        (this._next = null),
                        (this._previous = null),
                        (this._timestamp = null),
                        (this._hasEnded = !1),
                        (this._resolve = null),
                        (this._reject = null),
                        (this._currentState = e || {}),
                        (this._originalState = {}),
                        (this._targetState = {}),
                        (this._start = en),
                        (this._render = en),
                        (this._promiseCtor = em),
                        t && this.setConfig(t);
                    }
                    return (
                      (e = [
                        {
                          key: "_applyFilter",
                          value: function (e) {
                            for (var t = this._filters.length; t > 0; t--) {
                              var n = this._filters[t - t][e];
                              n && n(this);
                            }
                          },
                        },
                        {
                          key: "tween",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : void 0;
                            return (
                              this._isPlaying && this.stop(),
                              (!e && this._config) || this.setConfig(e),
                              (this._pausedAtTime = null),
                              (this._timestamp = n.now()),
                              this._start(this.get(), this._data),
                              this._delay &&
                                this._render(this._currentState, this._data, 0),
                              this._resume(this._timestamp)
                            );
                          },
                        },
                        {
                          key: "setConfig",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              t = this._config;
                            for (var r in e) t[r] = e[r];
                            var i = t.promise,
                              o = void 0 === i ? this._promiseCtor : i,
                              l = t.start,
                              a = void 0 === l ? en : l,
                              s = t.finish,
                              u = t.render,
                              c = void 0 === u ? this._config.step || en : u,
                              d = t.step,
                              f = void 0 === d ? en : d;
                            (this._data = t.data || t.attachment || this._data),
                              (this._isPlaying = !1),
                              (this._pausedAtTime = null),
                              (this._scheduleId = null),
                              (this._delay = e.delay || 0),
                              (this._start = a),
                              (this._render = c || f),
                              (this._duration = t.duration || 500),
                              (this._promiseCtor = o),
                              s && (this._resolve = s);
                            var h = e.from,
                              p = e.to,
                              m = void 0 === p ? {} : p,
                              g = this._currentState,
                              v = this._originalState,
                              y = this._targetState;
                            for (var x in h) g[x] = h[x];
                            var b = !1;
                            for (var k in g) {
                              var w = g[k];
                              b || V(w) !== ee || (b = !0),
                                (v[k] = w),
                                (y[k] = m.hasOwnProperty(k) ? m[k] : w);
                            }
                            if (
                              ((this._easing = eh(
                                this._currentState,
                                t.easing,
                                this._easing
                              )),
                              (this._filters.length = 0),
                              b)
                            ) {
                              for (var S in n.filters)
                                n.filters[S].doesApply(this) &&
                                  this._filters.push(n.filters[S]);
                              this._applyFilter("tweenCreated");
                            }
                            return this;
                          },
                        },
                        {
                          key: "then",
                          value: function (e, t) {
                            var n = this;
                            return (
                              (this._promise = new this._promiseCtor(function (
                                e,
                                t
                              ) {
                                (n._resolve = e), (n._reject = t);
                              })),
                              this._promise.then(e, t)
                            );
                          },
                        },
                        {
                          key: "catch",
                          value: function (e) {
                            return this.then().catch(e);
                          },
                        },
                        {
                          key: "finally",
                          value: function (e) {
                            return this.then().finally(e);
                          },
                        },
                        {
                          key: "get",
                          value: function () {
                            return q({}, this._currentState);
                          },
                        },
                        {
                          key: "set",
                          value: function (e) {
                            this._currentState = e;
                          },
                        },
                        {
                          key: "pause",
                          value: function () {
                            if (this._isPlaying)
                              return (
                                (this._pausedAtTime = n.now()),
                                (this._isPlaying = !1),
                                ep(this),
                                this
                              );
                          },
                        },
                        {
                          key: "resume",
                          value: function () {
                            return this._resume();
                          },
                        },
                        {
                          key: "_resume",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : n.now();
                            return null === this._timestamp
                              ? this.tween()
                              : this._isPlaying
                              ? this._promise
                              : (this._pausedAtTime &&
                                  ((this._timestamp += e - this._pausedAtTime),
                                  (this._pausedAtTime = null)),
                                (this._isPlaying = !0),
                                null === er
                                  ? (er = this)
                                  : ((this._previous = ei), (ei._next = this)),
                                (ei = this),
                                this);
                          },
                        },
                        {
                          key: "seek",
                          value: function (e) {
                            e = Math.max(e, 0);
                            var t = n.now();
                            return (
                              this._timestamp + e === 0 ||
                                ((this._timestamp = t - e), ea(this, t)),
                              this
                            );
                          },
                        },
                        {
                          key: "stop",
                          value: function () {
                            var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                            if (!this._isPlaying) return this;
                            (this._isPlaying = !1), ep(this);
                            var t = this._filters.length > 0;
                            return (
                              e &&
                                (t && this._applyFilter(X),
                                el(
                                  1,
                                  this._currentState,
                                  this._originalState,
                                  this._targetState,
                                  1,
                                  0,
                                  this._easing
                                ),
                                t &&
                                  (this._applyFilter(J),
                                  this._applyFilter("afterTweenEnd"))),
                              this._resolve &&
                                this._resolve({
                                  data: this._data,
                                  state: this._currentState,
                                  tweenable: this,
                                }),
                              (this._resolve = null),
                              (this._reject = null),
                              this
                            );
                          },
                        },
                        {
                          key: "cancel",
                          value: function () {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                              t = this._currentState,
                              n = this._data;
                            return this._isPlaying
                              ? (this._reject &&
                                  this._reject({
                                    data: n,
                                    state: t,
                                    tweenable: this,
                                  }),
                                (this._resolve = null),
                                (this._reject = null),
                                this.stop(e))
                              : this;
                          },
                        },
                        {
                          key: "isPlaying",
                          value: function () {
                            return this._isPlaying;
                          },
                        },
                        {
                          key: "hasEnded",
                          value: function () {
                            return this._hasEnded;
                          },
                        },
                        {
                          key: "setScheduleFunction",
                          value: function (e) {
                            n.setScheduleFunction(e);
                          },
                        },
                        {
                          key: "data",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                            return e && (this._data = q({}, e)), this._data;
                          },
                        },
                        {
                          key: "dispose",
                          value: function () {
                            for (var e in this) delete this[e];
                          },
                        },
                      ]),
                      U(n.prototype, e),
                      t && U(n, t),
                      n
                    );
                  })();
                  function ev() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = new eg();
                    return t.tween(e), (t.tweenable = t), t;
                  }
                  K(eg, "now", function () {
                    return Y;
                  }),
                    K(eg, "setScheduleFunction", function (e) {
                      return (et = e);
                    }),
                    K(eg, "filters", {}),
                    K(eg, "formulas", eo),
                    ed(!0);
                  var ey,
                    ex,
                    eb = /(\d|-|\.)/,
                    ek = /([^\-0-9.]+)/g,
                    ew = /[0-9.-]+/g,
                    eS =
                      ((ey = ew.source),
                      (ex = /,\s*/.source),
                      RegExp(
                        "rgba?\\("
                          .concat(ey)
                          .concat(ex)
                          .concat(ey)
                          .concat(ex)
                          .concat(ey, "(")
                          .concat(ex)
                          .concat(ey, ")?\\)"),
                        "g"
                      )),
                    eC = /^.*\(/,
                    eE = /#([0-9]|[a-f]){3,6}/gi,
                    eO = function (e, t) {
                      return e.map(function (e, n) {
                        return "_".concat(t, "_").concat(n);
                      });
                    };
                  function eT(e) {
                    return parseInt(e, 16);
                  }
                  var ej = function (e) {
                      var t;
                      return "rgb(".concat(
                        (3 === (t = (t = e).replace(/#/, "")).length &&
                          (t =
                            (t = t.split(""))[0] +
                            t[0] +
                            t[1] +
                            t[1] +
                            t[2] +
                            t[2]),
                        [
                          eT(t.substr(0, 2)),
                          eT(t.substr(2, 2)),
                          eT(t.substr(4, 2)),
                        ]).join(","),
                        ")"
                      );
                    },
                    e_ = function (e, t, n) {
                      var r = t.match(e),
                        i = t.replace(e, "VAL");
                      return (
                        r &&
                          r.forEach(function (e) {
                            return (i = i.replace("VAL", n(e)));
                          }),
                        i
                      );
                    },
                    eP = function (e) {
                      for (var t in e) {
                        var n = e[t];
                        "string" == typeof n &&
                          n.match(eE) &&
                          (e[t] = e_(eE, n, ej));
                      }
                    },
                    eM = function (e) {
                      var t = e.match(ew),
                        n = t.slice(0, 3).map(Math.floor),
                        r = e.match(eC)[0];
                      if (3 === t.length)
                        return "".concat(r).concat(n.join(","), ")");
                      if (4 === t.length)
                        return ""
                          .concat(r)
                          .concat(n.join(","), ",")
                          .concat(t[3], ")");
                      throw Error("Invalid rgbChunk: ".concat(e));
                    },
                    eL = function (e) {
                      return e.match(ew);
                    },
                    eN = function (e, t) {
                      var n = {};
                      return (
                        t.forEach(function (t) {
                          (n[t] = e[t]), delete e[t];
                        }),
                        n
                      );
                    },
                    eA = function (e, t) {
                      return t.map(function (t) {
                        return e[t];
                      });
                    },
                    eI = function (e, t) {
                      return (
                        t.forEach(function (t) {
                          return (e = e.replace("VAL", +t.toFixed(4)));
                        }),
                        e
                      );
                    },
                    eR = function (e) {
                      for (var t in e._currentState)
                        if ("string" == typeof e._currentState[t]) return !0;
                      return !1;
                    };
                  function eD(e) {
                    var t = e._currentState;
                    [t, e._originalState, e._targetState].forEach(eP),
                      (e._tokenData = (function (e) {
                        var t,
                          n = {};
                        for (var r in e) {
                          var i = e[r];
                          "string" == typeof i &&
                            (n[r] = {
                              formatString:
                                ((t = void 0),
                                (t = i.match(ek))
                                  ? (1 === t.length || i.charAt(0).match(eb)) &&
                                    t.unshift("")
                                  : (t = ["", ""]),
                                t.join("VAL")),
                              chunkNames: eO(eL(i), r),
                            });
                        }
                        return n;
                      })(t));
                  }
                  function eF(e) {
                    var t = e._currentState,
                      n = e._originalState,
                      r = e._targetState,
                      i = e._easing,
                      o = e._tokenData;
                    (function (e, t) {
                      for (var n in t)
                        (function (n) {
                          var r = t[n].chunkNames,
                            i = e[n];
                          if ("string" == typeof i) {
                            var o = i.split(" "),
                              l = o[o.length - 1];
                            r.forEach(function (t, n) {
                              return (e[t] = o[n] || l);
                            });
                          } else
                            r.forEach(function (t) {
                              return (e[t] = i);
                            });
                          delete e[n];
                        })(n);
                    })(i, o),
                      [t, n, r].forEach(function (e) {
                        return (function (e, t) {
                          var n = function (n) {
                            eL(e[n]).forEach(function (r, i) {
                              return (e[t[n].chunkNames[i]] = +r);
                            }),
                              delete e[n];
                          };
                          for (var r in t) n(r);
                        })(e, o);
                      });
                  }
                  function ez(e) {
                    var t = e._currentState,
                      n = e._originalState,
                      r = e._targetState,
                      i = e._easing,
                      o = e._tokenData;
                    [t, n, r].forEach(function (e) {
                      return (function (e, t) {
                        for (var n in t) {
                          var r = t[n],
                            i = r.chunkNames,
                            o = eI(r.formatString, eA(eN(e, i), i));
                          e[n] = e_(eS, o, eM);
                        }
                      })(e, o);
                    }),
                      (function (e, t) {
                        for (var n in t) {
                          var r = t[n].chunkNames,
                            i = e[r[0]];
                          e[n] =
                            "string" == typeof i
                              ? r
                                  .map(function (t) {
                                    var n = e[t];
                                    return delete e[t], n;
                                  })
                                  .join(" ")
                              : i;
                        }
                      })(i, o);
                  }
                  function eH(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t &&
                        (r = r.filter(function (t) {
                          return Object.getOwnPropertyDescriptor(
                            e,
                            t
                          ).enumerable;
                        })),
                        n.push.apply(n, r);
                    }
                    return n;
                  }
                  var eB = new eg(),
                    eU = eg.filters,
                    eV = function (e, t, n, r) {
                      var i =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 0,
                        o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? eH(Object(n), !0).forEach(function (t) {
                                  var r;
                                  (r = n[t]),
                                    t in e
                                      ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (e[t] = r);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : eH(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })({}, e),
                        l = eh(e, r);
                      for (var a in ((eB._filters.length = 0),
                      eB.set({}),
                      (eB._currentState = o),
                      (eB._originalState = e),
                      (eB._targetState = t),
                      (eB._easing = l),
                      eU))
                        eU[a].doesApply(eB) && eB._filters.push(eU[a]);
                      eB._applyFilter("tweenCreated"),
                        eB._applyFilter("beforeTween");
                      var s = el(n, o, e, t, 1, i, l);
                      return eB._applyFilter("afterTween"), s;
                    };
                  function eW(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                  }
                  function eq(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  function eK(e, t) {
                    var n = t.get(e);
                    if (!n)
                      throw TypeError(
                        "attempted to get private field on non-instance"
                      );
                    return n.get ? n.get.call(e) : n.value;
                  }
                  var eY = new WeakMap(),
                    eQ = (function () {
                      var e, t;
                      function n() {
                        (function (e, t) {
                          if (!(e instanceof t))
                            throw TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, n),
                          eY.set(this, { writable: !0, value: [] });
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        t.forEach(this.add.bind(this));
                      }
                      return (
                        (e = [
                          {
                            key: "add",
                            value: function (e) {
                              return eK(this, eY).push(e), e;
                            },
                          },
                          {
                            key: "remove",
                            value: function (e) {
                              var t = eK(this, eY).indexOf(e);
                              return ~t && eK(this, eY).splice(t, 1), e;
                            },
                          },
                          {
                            key: "empty",
                            value: function () {
                              return this.tweenables.map(
                                this.remove.bind(this)
                              );
                            },
                          },
                          {
                            key: "isPlaying",
                            value: function () {
                              return eK(this, eY).some(function (e) {
                                return e.isPlaying();
                              });
                            },
                          },
                          {
                            key: "play",
                            value: function () {
                              return (
                                eK(this, eY).forEach(function (e) {
                                  return e.tween();
                                }),
                                this
                              );
                            },
                          },
                          {
                            key: "pause",
                            value: function () {
                              return (
                                eK(this, eY).forEach(function (e) {
                                  return e.pause();
                                }),
                                this
                              );
                            },
                          },
                          {
                            key: "resume",
                            value: function () {
                              return (
                                eK(this, eY).forEach(function (e) {
                                  return e.resume();
                                }),
                                this
                              );
                            },
                          },
                          {
                            key: "stop",
                            value: function (e) {
                              return (
                                eK(this, eY).forEach(function (t) {
                                  return t.stop(e);
                                }),
                                this
                              );
                            },
                          },
                          {
                            key: "tweenables",
                            get: function () {
                              var e;
                              return (
                                (function (e) {
                                  if (Array.isArray(e)) return eW(e);
                                })((e = eK(this, eY))) ||
                                (function (e) {
                                  if (
                                    "undefined" != typeof Symbol &&
                                    Symbol.iterator in Object(e)
                                  )
                                    return Array.from(e);
                                })(e) ||
                                (function (e, t) {
                                  if (e) {
                                    if ("string" == typeof e)
                                      return eW(e, void 0);
                                    var n = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    return (
                                      "Object" === n &&
                                        e.constructor &&
                                        (n = e.constructor.name),
                                      "Map" === n || "Set" === n
                                        ? Array.from(e)
                                        : "Arguments" === n ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            n
                                          )
                                        ? eW(e, void 0)
                                        : void 0
                                    );
                                  }
                                })(e) ||
                                (function () {
                                  throw TypeError(
                                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                  );
                                })()
                              );
                            },
                          },
                          {
                            key: "promises",
                            get: function () {
                              return eK(this, eY).map(function (e) {
                                return e.then();
                              });
                            },
                          },
                        ]),
                        eq(n.prototype, e),
                        t && eq(n, t),
                        n
                      );
                    })(),
                    eZ = function (e, t, n, r, i) {
                      var o = function (e) {
                        var o, l, a, s, u, c, d, f, h;
                        return (
                          (l = 0),
                          (a = 0),
                          (s = 0),
                          (c = 0),
                          (d = 0),
                          (f = function (e) {
                            return ((l * e + a) * e + s) * e;
                          }),
                          (h = function (e) {
                            return e >= 0 ? e : 0 - e;
                          }),
                          (l = 1 - (s = 3 * t) - (a = 3 * (r - t) - s)),
                          (((1 - (d = 3 * n) - (c = 3 * (i - n) - d)) *
                            (o = (function (e, t) {
                              var n, r, i, o, u, c, d;
                              for (i = e, c = 0; c < 8; c++) {
                                if (0.005 > h((o = f(i) - e))) return i;
                                if (
                                  1e-6 >
                                  h((u = (3 * l * (d = i) + 2 * a) * d + s))
                                )
                                  break;
                                i -= o / u;
                              }
                              if ((i = e) < (n = 0)) return n;
                              if (i > (r = 1)) return r;
                              for (; n < r && !(0.005 > h((o = f(i)) - e)); )
                                e > o ? (n = i) : (r = i),
                                  (i = 0.5 * (r - n) + n);
                              return i;
                            })(e, 0.005)) +
                            c) *
                            o +
                            d) *
                            o
                        );
                      };
                      return (
                        (o.displayName = e),
                        (o.x1 = t),
                        (o.y1 = n),
                        (o.x2 = r),
                        (o.y2 = i),
                        (eg.formulas[e] = o)
                      );
                    },
                    e$ = function (e) {
                      return delete eg.formulas[e];
                    };
                  eg.filters.token = i;
                },
              },
              t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var i = (t[r] = { exports: {} });
              return e[r](i, i.exports, n), i.exports;
            }
            return (
              (n.d = (e, t) => {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (n.r = (e) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              n(720)
            );
          })();
        }),
          (b.exports = y());
        var k = "Webkit Moz O ms".split(" ");
        function w(e, t, n) {
          for (var r = e.style, i = 0; i < k.length; ++i)
            r[
              k[i] +
                (function (e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                })(t)
            ] = n;
          r[t] = n;
        }
        function S(e) {
          return (
            "[object Array]" !== Object.prototype.toString.call(e) &&
            "object" == typeof e &&
            !!e
          );
        }
        var C = {
            extend: function e(t, n, r) {
              for (var i in ((t = t || {}), (r = r || !1), (n = n || {})))
                if (n.hasOwnProperty(i)) {
                  var o = t[i],
                    l = n[i];
                  r && S(o) && S(l) ? (t[i] = e(o, l, r)) : (t[i] = l);
                }
              return t;
            },
            render: function (e, t) {
              var n = e;
              for (var r in t)
                if (t.hasOwnProperty(r)) {
                  var i = t[r],
                    o = RegExp("\\{" + r + "\\}", "g");
                  n = n.replace(o, i);
                }
              return n;
            },
            setStyle: w,
            setStyles: function (e, t) {
              (function (e, t) {
                for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
              })(t, function (t, n) {
                null != t &&
                  (S(t) && !0 === t.prefix
                    ? w(e, n, t.value)
                    : (e.style[n] = t));
              });
            },
            isString: function (e) {
              return "string" == typeof e || e instanceof String;
            },
            isFunction: function (e) {
              return "function" == typeof e;
            },
            isObject: S,
            floatEquals: function (e, t) {
              return 0.001 > Math.abs(e - t);
            },
            removeChildren: function (e) {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
            },
          },
          E = b.exports,
          O = E.Tweenable,
          T = {
            easeIn: "easeInCubic",
            easeOut: "easeOutCubic",
            easeInOut: "easeInOutCubic",
          },
          j = function e(t, n) {
            if (!(this instanceof e))
              throw Error("Constructor was called without new keyword");
            (n = C.extend(
              {
                delay: 0,
                duration: 800,
                easing: "linear",
                from: {},
                to: {},
                step: function () {},
              },
              n
            )),
              (r = C.isString(t) ? document.querySelector(t) : t),
              (this.path = r),
              (this._opts = n),
              (this._tweenable = null);
            var r,
              i = this.path.getTotalLength();
            (this.path.style.strokeDasharray = i + " " + i), this.set(0);
          };
        (j.prototype.value = function () {
          return parseFloat(
            (
              1 -
              this._getComputedDashOffset() / this.path.getTotalLength()
            ).toFixed(6),
            10
          );
        }),
          (j.prototype.set = function (e) {
            this.stop(),
              (this.path.style.strokeDashoffset = this._progressToOffset(e));
            var t = this._opts.step;
            if (C.isFunction(t)) {
              var n = this._easing(this._opts.easing);
              t(
                this._calculateTo(e, n),
                this._opts.shape || this,
                this._opts.attachment
              );
            }
          }),
          (j.prototype.stop = function () {
            this._stopTween(),
              (this.path.style.strokeDashoffset =
                this._getComputedDashOffset());
          }),
          (j.prototype.animate = function (e, t, n) {
            (t = t || {}), C.isFunction(t) && ((n = t), (t = {}));
            var r = C.extend({}, t),
              i = C.extend({}, this._opts);
            t = C.extend(i, t);
            var o = this._easing(t.easing),
              l = this._resolveFromAndTo(e, o, r);
            this.stop(), this.path.getBoundingClientRect();
            var a = this._getComputedDashOffset(),
              s = this._progressToOffset(e),
              u = this;
            (this._tweenable = new O()),
              this._tweenable
                .tween({
                  from: C.extend({ offset: a }, l.from),
                  to: C.extend({ offset: s }, l.to),
                  duration: t.duration,
                  delay: t.delay,
                  easing: o,
                  step: function (e) {
                    u.path.style.strokeDashoffset = e.offset;
                    var n = t.shape || u;
                    t.step(e, n, t.attachment);
                  },
                })
                .then(function (e) {
                  C.isFunction(n) && n();
                });
          }),
          (j.prototype._getComputedDashOffset = function () {
            return parseFloat(
              window
                .getComputedStyle(this.path, null)
                .getPropertyValue("stroke-dashoffset"),
              10
            );
          }),
          (j.prototype._progressToOffset = function (e) {
            var t = this.path.getTotalLength();
            return t - e * t;
          }),
          (j.prototype._resolveFromAndTo = function (e, t, n) {
            return n.from && n.to
              ? { from: n.from, to: n.to }
              : { from: this._calculateFrom(t), to: this._calculateTo(e, t) };
          }),
          (j.prototype._calculateFrom = function (e) {
            return E.interpolate(
              this._opts.from,
              this._opts.to,
              this.value(),
              e
            );
          }),
          (j.prototype._calculateTo = function (e, t) {
            return E.interpolate(this._opts.from, this._opts.to, e, t);
          }),
          (j.prototype._stopTween = function () {
            null !== this._tweenable &&
              (this._tweenable.stop(), (this._tweenable = null));
          }),
          (j.prototype._easing = function (e) {
            return T.hasOwnProperty(e) ? T[e] : e;
          });
        var _ = "Object is destroyed",
          P = function e(t, n) {
            if (!(this instanceof e))
              throw Error("Constructor was called without new keyword");
            if (0 != arguments.length) {
              (this._opts = C.extend(
                {
                  color: "#555",
                  strokeWidth: 1,
                  trailColor: null,
                  trailWidth: null,
                  fill: null,
                  text: {
                    style: {
                      color: null,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      padding: 0,
                      margin: 0,
                      transform: { prefix: !0, value: "translate(-50%, -50%)" },
                    },
                    autoStyleContainer: !0,
                    alignToBottom: !0,
                    value: null,
                    className: "progressbar-text",
                  },
                  svgStyle: { display: "block", width: "100%" },
                  warnings: !1,
                },
                n,
                !0
              )),
                C.isObject(n) &&
                  void 0 !== n.svgStyle &&
                  (this._opts.svgStyle = n.svgStyle),
                C.isObject(n) &&
                  C.isObject(n.text) &&
                  void 0 !== n.text.style &&
                  (this._opts.text.style = n.text.style);
              var r,
                i = this._createSvgView(this._opts);
              if (!(r = C.isString(t) ? document.querySelector(t) : t))
                throw Error("Container does not exist: " + t);
              (this._container = r),
                this._container.appendChild(i.svg),
                this._opts.warnings &&
                  this._warnContainerAspectRatio(this._container),
                this._opts.svgStyle && C.setStyles(i.svg, this._opts.svgStyle),
                (this.svg = i.svg),
                (this.path = i.path),
                (this.trail = i.trail),
                (this.text = null);
              var o = C.extend({ attachment: void 0, shape: this }, this._opts);
              (this._progressPath = new j(i.path, o)),
                C.isObject(this._opts.text) &&
                  null !== this._opts.text.value &&
                  this.setText(this._opts.text.value);
            }
          };
        (P.prototype.animate = function (e, t, n) {
          if (null === this._progressPath) throw Error(_);
          this._progressPath.animate(e, t, n);
        }),
          (P.prototype.stop = function () {
            if (null === this._progressPath) throw Error(_);
            void 0 !== this._progressPath && this._progressPath.stop();
          }),
          (P.prototype.pause = function () {
            if (null === this._progressPath) throw Error(_);
            void 0 !== this._progressPath &&
              this._progressPath._tweenable &&
              this._progressPath._tweenable.pause();
          }),
          (P.prototype.resume = function () {
            if (null === this._progressPath) throw Error(_);
            void 0 !== this._progressPath &&
              this._progressPath._tweenable &&
              this._progressPath._tweenable.resume();
          }),
          (P.prototype.destroy = function () {
            if (null === this._progressPath) throw Error(_);
            this.stop(),
              this.svg.parentNode.removeChild(this.svg),
              (this.svg = null),
              (this.path = null),
              (this.trail = null),
              (this._progressPath = null),
              null !== this.text &&
                (this.text.parentNode.removeChild(this.text),
                (this.text = null));
          }),
          (P.prototype.set = function (e) {
            if (null === this._progressPath) throw Error(_);
            this._progressPath.set(e);
          }),
          (P.prototype.value = function () {
            if (null === this._progressPath) throw Error(_);
            return void 0 === this._progressPath
              ? 0
              : this._progressPath.value();
          }),
          (P.prototype.setText = function (e) {
            if (null === this._progressPath) throw Error(_);
            null === this.text &&
              ((this.text = this._createTextContainer(
                this._opts,
                this._container
              )),
              this._container.appendChild(this.text)),
              C.isObject(e)
                ? (C.removeChildren(this.text), this.text.appendChild(e))
                : (this.text.innerHTML = e);
          }),
          (P.prototype._createSvgView = function (e) {
            var t = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            this._initializeSvg(t, e);
            var n = null;
            (e.trailColor || e.trailWidth) &&
              ((n = this._createTrail(e)), t.appendChild(n));
            var r = this._createPath(e);
            return t.appendChild(r), { svg: t, path: r, trail: n };
          }),
          (P.prototype._initializeSvg = function (e, t) {
            e.setAttribute("viewBox", "0 0 100 100");
          }),
          (P.prototype._createPath = function (e) {
            var t = this._pathString(e);
            return this._createPathElement(t, e);
          }),
          (P.prototype._createTrail = function (e) {
            var t = this._trailString(e),
              n = C.extend({}, e);
            return (
              n.trailColor || (n.trailColor = "#eee"),
              n.trailWidth || (n.trailWidth = n.strokeWidth),
              (n.color = n.trailColor),
              (n.strokeWidth = n.trailWidth),
              (n.fill = null),
              this._createPathElement(t, n)
            );
          }),
          (P.prototype._createPathElement = function (e, t) {
            var n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            return (
              n.setAttribute("d", e),
              n.setAttribute("stroke", t.color),
              n.setAttribute("stroke-width", t.strokeWidth),
              t.fill
                ? n.setAttribute("fill", t.fill)
                : n.setAttribute("fill-opacity", "0"),
              n
            );
          }),
          (P.prototype._createTextContainer = function (e, t) {
            var n = document.createElement("div");
            n.className = e.text.className;
            var r = e.text.style;
            return (
              r &&
                (e.text.autoStyleContainer && (t.style.position = "relative"),
                C.setStyles(n, r),
                r.color || (n.style.color = e.color)),
              this._initializeTextContainer(e, t, n),
              n
            );
          }),
          (P.prototype._initializeTextContainer = function (e, t, n) {}),
          (P.prototype._pathString = function (e) {
            throw Error("Override this function for each progress bar");
          }),
          (P.prototype._trailString = function (e) {
            throw Error("Override this function for each progress bar");
          }),
          (P.prototype._warnContainerAspectRatio = function (e) {
            if (this.containerAspectRatio) {
              var t = window.getComputedStyle(e, null),
                n = parseFloat(t.getPropertyValue("width"), 10),
                r = parseFloat(t.getPropertyValue("height"), 10);
              C.floatEquals(this.containerAspectRatio, n / r) ||
                (console.warn(
                  "Incorrect aspect ratio of container",
                  "#" + e.id,
                  "detected:",
                  t.getPropertyValue("width") + "(width)",
                  "/",
                  t.getPropertyValue("height") + "(height)",
                  "=",
                  n / r
                ),
                console.warn(
                  "Aspect ratio of should be",
                  this.containerAspectRatio
                ));
            }
          });
        var M = function (e, t) {
          (this._pathTemplate = "M 0,{center} L 100,{center}"),
            P.apply(this, arguments);
        };
        ((M.prototype = new P()).constructor = M),
          (M.prototype._initializeSvg = function (e, t) {
            e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth),
              e.setAttribute("preserveAspectRatio", "none");
          }),
          (M.prototype._pathString = function (e) {
            return C.render(this._pathTemplate, { center: e.strokeWidth / 2 });
          }),
          (M.prototype._trailString = function (e) {
            return this._pathString(e);
          });
        var L = function (e, t) {
          (this._pathTemplate =
            "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
            (this.containerAspectRatio = 1),
            P.apply(this, arguments);
        };
        ((L.prototype = new P()).constructor = L),
          (L.prototype._pathString = function (e) {
            var t = e.strokeWidth;
            e.trailWidth && e.trailWidth > e.strokeWidth && (t = e.trailWidth);
            var n = 50 - t / 2;
            return C.render(this._pathTemplate, {
              radius: n,
              "2radius": 2 * n,
            });
          }),
          (L.prototype._trailString = function (e) {
            return this._pathString(e);
          });
        var N = function (e, t) {
          (this._pathTemplate =
            "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
            (this.containerAspectRatio = 2),
            P.apply(this, arguments);
        };
        ((N.prototype = new P()).constructor = N),
          (N.prototype._initializeSvg = function (e, t) {
            e.setAttribute("viewBox", "0 0 100 50");
          }),
          (N.prototype._initializeTextContainer = function (e, t, n) {
            e.text.style &&
              ((n.style.top = "auto"),
              (n.style.bottom = "0"),
              e.text.alignToBottom
                ? C.setStyle(n, "transform", "translate(-50%, 0)")
                : C.setStyle(n, "transform", "translate(-50%, 50%)"));
          }),
          (N.prototype._pathString = L.prototype._pathString),
          (N.prototype._trailString = L.prototype._trailString);
        var A = function (e, t) {
          (this._pathTemplate =
            "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
            (this._trailTemplate =
              "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
            P.apply(this, arguments);
        };
        ((A.prototype = new P()).constructor = A),
          (A.prototype._pathString = function (e) {
            var t = 100 - e.strokeWidth / 2;
            return C.render(this._pathTemplate, {
              width: t,
              strokeWidth: e.strokeWidth,
              halfOfStrokeWidth: e.strokeWidth / 2,
            });
          }),
          (A.prototype._trailString = function (e) {
            var t = 100 - e.strokeWidth / 2;
            return C.render(this._trailTemplate, {
              width: t,
              strokeWidth: e.strokeWidth,
              halfOfStrokeWidth: e.strokeWidth / 2,
              startMargin: e.strokeWidth / 2 - e.trailWidth / 2,
            });
          });
        var I,
          R = function (e) {
            var t = e.animate,
              n = e.progressOptions,
              o = e.className,
              l = (0, i.useMemo)(function () {
                return new L((I = document.createElement("div")), n);
              }, []),
              a = (0, i.useCallback)(function (e) {
                e && e.appendChild(I);
              }, []);
            return (
              (0, i.useEffect)(
                function () {
                  l.animate(t);
                },
                [t, l]
              ),
              (0, r.jsx)("div", { className: o, ref: a })
            );
          },
          D = function () {
            return (D =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          F = function (e) {
            var t,
              n,
              i,
              o,
              l,
              a,
              s,
              u,
              c,
              d,
              f,
              h,
              p,
              v =
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.status) &&
                !0 ===
                  (null === (n = null == e ? void 0 : e.data) || void 0 === n
                    ? void 0
                    : n.status.error);
            return (0, r.jsxs)(
              "div",
              D(
                { className: "rce-mbox-photo" },
                {
                  children: [
                    (0, r.jsxs)(
                      "div",
                      D(
                        {
                          className: "rce-mbox-photo--img",
                          style: D(
                            {},
                            (null === (i = null == e ? void 0 : e.data) ||
                            void 0 === i
                              ? void 0
                              : i.width) &&
                              (null === (o = null == e ? void 0 : e.data) ||
                              void 0 === o
                                ? void 0
                                : o.height) && {
                                width: e.data.width,
                                height: e.data.height,
                              }
                          ),
                        },
                        {
                          children: [
                            (0, r.jsx)("img", {
                              src:
                                null === (l = null == e ? void 0 : e.data) ||
                                void 0 === l
                                  ? void 0
                                  : l.uri,
                              alt:
                                null === (a = null == e ? void 0 : e.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.alt,
                              onClick: e.onOpen,
                              onLoad: e.onLoad,
                              onError: e.onPhotoError,
                            }),
                            v &&
                              (0, r.jsx)(
                                "div",
                                D(
                                  { className: "rce-mbox-photo--img__block" },
                                  {
                                    children: (0, r.jsx)(
                                      "span",
                                      D(
                                        {
                                          className:
                                            "rce-mbox-photo--img__block-item rce-mbox-photo--error",
                                        },
                                        { children: (0, r.jsx)(g, {}) }
                                      )
                                    ),
                                  }
                                )
                              ),
                            !v &&
                              (null === (s = null == e ? void 0 : e.data) ||
                              void 0 === s
                                ? void 0
                                : s.status) &&
                              !(null ===
                                (c =
                                  null === (u = null == e ? void 0 : e.data) ||
                                  void 0 === u
                                    ? void 0
                                    : u.status) || void 0 === c
                                ? void 0
                                : c.download) &&
                              (0, r.jsxs)(
                                "div",
                                D(
                                  { className: "rce-mbox-photo--img__block" },
                                  {
                                    children: [
                                      !(null ===
                                        (d = null == e ? void 0 : e.data) ||
                                      void 0 === d
                                        ? void 0
                                        : d.status.click) &&
                                        (0, r.jsx)(
                                          "button",
                                          D(
                                            {
                                              onClick: e.onDownload,
                                              className:
                                                "rce-mbox-photo--img__block-item rce-mbox-photo--download",
                                            },
                                            { children: (0, r.jsx)(m, {}) }
                                          )
                                        ),
                                      "number" ==
                                        typeof (null ===
                                          (f = null == e ? void 0 : e.data) ||
                                        void 0 === f
                                          ? void 0
                                          : f.status.loading) &&
                                        0 !==
                                          (null ===
                                            (h = null == e ? void 0 : e.data) ||
                                          void 0 === h
                                            ? void 0
                                            : h.status.loading) &&
                                        (0, r.jsx)(R, {
                                          animate:
                                            null ===
                                              (p =
                                                null == e ? void 0 : e.data) ||
                                            void 0 === p
                                              ? void 0
                                              : p.status.loading,
                                          progressOptions: {
                                            strokeWidth: 2.3,
                                            color: "#efe",
                                            trailColor: "#aaa",
                                            trailWidth: 1,
                                            step: function (e, t) {
                                              t.path.setAttribute(
                                                "trail",
                                                null ===
                                                  (n =
                                                    null == e
                                                      ? void 0
                                                      : e.state) || void 0 === n
                                                  ? void 0
                                                  : n.color
                                              ),
                                                t.path.setAttribute(
                                                  "trailwidth-width",
                                                  null ===
                                                    (r =
                                                      null == e
                                                        ? void 0
                                                        : e.state) ||
                                                    void 0 === r
                                                    ? void 0
                                                    : r.width
                                                );
                                              var n,
                                                r,
                                                i = Math.round(100 * t.value());
                                              0 === i
                                                ? t.setText("")
                                                : t.setText(i);
                                            },
                                          },
                                          className:
                                            "rce-mbox-photo--img__block-item",
                                        }),
                                    ],
                                  }
                                )
                              ),
                          ],
                        }
                      )
                    ),
                    (null == e ? void 0 : e.text) &&
                      (0, r.jsx)(
                        "div",
                        D({ className: "rce-mbox-text" }, { children: e.text })
                      ),
                  ],
                }
              )
            );
          },
          z = function () {
            return (z =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          H = function (e) {
            var t,
              n,
              i,
              o,
              l,
              a,
              s,
              u,
              c,
              d =
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.status) &&
                !0 ===
                  (null === (n = null == e ? void 0 : e.data) || void 0 === n
                    ? void 0
                    : n.status.error);
            return (0, r.jsx)(
              "div",
              z(
                { className: "rce-mbox-file" },
                {
                  children: (0, r.jsxs)(
                    "button",
                    z(
                      {
                        onClick: function (t) {
                          var n, r, i;
                          (null === (n = null == e ? void 0 : e.data) ||
                          void 0 === n
                            ? void 0
                            : n.status) &&
                            (!(null === (r = null == e ? void 0 : e.data) ||
                            void 0 === r
                              ? void 0
                              : r.status.download) &&
                            e.onDownload instanceof Function
                              ? e.onDownload(t)
                              : (null === (i = null == e ? void 0 : e.data) ||
                                void 0 === i
                                  ? void 0
                                  : i.status.download) &&
                                e.onOpen instanceof Function &&
                                e.onOpen(t));
                        },
                      },
                      {
                        children: [
                          (0, r.jsxs)(
                            "div",
                            z(
                              { className: "rce-mbox-file--icon" },
                              {
                                children: [
                                  (0, r.jsx)(v, { color: "#aaa" }),
                                  (0, r.jsx)(
                                    "div",
                                    z(
                                      { className: "rce-mbox-file--size" },
                                      {
                                        children:
                                          null == e ? void 0 : e.data.size,
                                      }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                          (0, r.jsx)(
                            "div",
                            z(
                              { className: "rce-mbox-file--text" },
                              { children: e.text }
                            )
                          ),
                          (0, r.jsxs)(
                            "div",
                            z(
                              { className: "rce-mbox-file--buttons" },
                              {
                                children: [
                                  d &&
                                    (0, r.jsx)(
                                      "span",
                                      z(
                                        { className: "rce-error-button" },
                                        {
                                          children: (0, r.jsx)(g, {
                                            color: "#ff3d3d",
                                          }),
                                        }
                                      )
                                    ),
                                  !d &&
                                    (null ===
                                      (i = null == e ? void 0 : e.data) ||
                                    void 0 === i
                                      ? void 0
                                      : i.status) &&
                                    !(null ===
                                      (o = null == e ? void 0 : e.data) ||
                                    void 0 === o
                                      ? void 0
                                      : o.status.download) &&
                                    !(null ===
                                      (l = null == e ? void 0 : e.data) ||
                                    void 0 === l
                                      ? void 0
                                      : l.status.click) &&
                                    (0, r.jsx)(m, { color: "#aaa" }),
                                  !d &&
                                    (null ===
                                      (a = null == e ? void 0 : e.data) ||
                                    void 0 === a
                                      ? void 0
                                      : a.status) &&
                                    "number" ==
                                      typeof (null ===
                                        (s = null == e ? void 0 : e.data) ||
                                      void 0 === s
                                        ? void 0
                                        : s.status.loading) &&
                                    0 !==
                                      (null ===
                                        (u = null == e ? void 0 : e.data) ||
                                      void 0 === u
                                        ? void 0
                                        : u.status.loading) &&
                                    (0, r.jsx)(R, {
                                      animate:
                                        null ===
                                          (c = null == e ? void 0 : e.data) ||
                                        void 0 === c
                                          ? void 0
                                          : c.status.loading,
                                      className: "rce-mbox-file--loading",
                                      progressOptions: {
                                        strokeWidth: 5,
                                        color: "#333",
                                        trailColor: "#aaa",
                                        trailWidth: 5,
                                        step: function (e, t) {
                                          t.path.setAttribute("trail", e.color),
                                            t.path.setAttribute(
                                              "trailwidth-width",
                                              e.width
                                            );
                                          var n = Math.round(100 * t.value());
                                          0 === n
                                            ? t.setText("")
                                            : t.setText(n);
                                        },
                                      },
                                    }),
                                ],
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                }
              )
            );
          },
          B = { exports: {} };
        !(function () {
          var e = {}.hasOwnProperty;
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
              var i = arguments[r];
              if (i) {
                var o = typeof i;
                if ("string" === o || "number" === o) n.push(i);
                else if (Array.isArray(i)) {
                  if (i.length) {
                    var l = t.apply(null, i);
                    l && n.push(l);
                  }
                } else if ("object" === o) {
                  if (
                    i.toString !== Object.prototype.toString &&
                    !i.toString.toString().includes("[native code]")
                  ) {
                    n.push(i.toString());
                    continue;
                  }
                  for (var a in i) e.call(i, a) && i[a] && n.push(a);
                }
              }
            }
            return n.join(" ");
          }
          B.exports
            ? ((t.default = t), (B.exports = t))
            : (window.classNames = t);
        })();
        var U = B.exports,
          V = function () {
            return (V =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          W = function (e) {
            return (0, r.jsx)(
              "div",
              V(
                { className: U("rce-container-smsg", e.className) },
                {
                  children: (0, r.jsx)(
                    "div",
                    V(
                      { className: "rce-smsg" },
                      {
                        children: (0, r.jsx)(
                          "div",
                          V(
                            { className: "rce-smsg-text" },
                            { children: e.text }
                          )
                        ),
                      }
                    )
                  ),
                }
              )
            );
          },
          q = function () {
            return (q =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          K = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          Y = function (e) {
            var t,
              n = e.markerColor,
              i = void 0 === n ? "red" : n,
              o = e.target,
              l = e.zoom,
              a = void 0 === l ? "14" : l,
              s = K(e, ["markerColor", "target", "zoom"]),
              u = function (e) {
                return e
                  .replace(/LATITUDE/g, null == s ? void 0 : s.data.latitude)
                  .replace(/LONGITUDE/g, null == s ? void 0 : s.data.longitude)
                  .replace("MARKER_COLOR", i)
                  .replace("ZOOM", a)
                  .replace("KEY", s.apiKey);
              };
            return (0, r.jsxs)(
              "div",
              q(
                { className: "rce-container-lmsg" },
                {
                  children: [
                    (0, r.jsx)(
                      "a",
                      q(
                        {
                          onClick: s.onOpen,
                          target: void 0 === o ? "_blank" : o,
                          href:
                            s.href ||
                            s.src ||
                            u(
                              s.data.mapURL ||
                                "https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE&zoom=ZOOM"
                            ),
                          className:
                            ((t = U("rce-mbox-location", s.className)),
                            s.text && (t = U(t, "rce-mbox-location-has-text")),
                            t),
                        },
                        {
                          children: (0, r.jsx)("img", {
                            onError: s.onError,
                            className: "rce-mbox-location-img",
                            src:
                              s.src ||
                              u(
                                s.data.staticURL ||
                                  "https://maps.googleapis.com/maps/api/staticmap?markers=color:MARKER_COLOR|LATITUDE,LONGITUDE&zoom=ZOOM&size=270x200&scale=2&key=KEY"
                              ),
                          }),
                        }
                      )
                    ),
                    s.text &&
                      (0, r.jsx)(
                        "div",
                        q(
                          { className: "rce-mbox-text rce-mbox-location-text" },
                          { children: s.text }
                        )
                      ),
                  ],
                }
              )
            );
          },
          Q = function () {
            return (Q =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          Z = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          $ = function (e) {
            var t = e.width,
              n = e.height,
              i = Z(e, ["width", "height"]);
            return i.uri
              ? (0, r.jsx)(
                  "div",
                  Q(
                    { className: "rce-mbox-spotify" },
                    {
                      children: (0, r.jsx)("iframe", {
                        src:
                          "https://open.spotify.com/embed?" +
                          (function () {
                            var e = [];
                            for (var t in i) {
                              var n = encodeURIComponent(t),
                                r = encodeURIComponent(i[t]);
                              e.push(n + "=" + r);
                            }
                            return e.join("&");
                          })(),
                        width: void 0 === t ? 300 : t,
                        height: void 0 === n ? 380 : n,
                        frameBorder: "0",
                        allowTransparency: !0,
                      }),
                    }
                  )
                )
              : null;
          },
          G = function () {
            return (G =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          J = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          X = function (e) {
            var t = e.onClick,
              n = J(e, ["onClick"]);
            return (0, r.jsxs)(
              "div",
              G(
                {
                  className: U("rce-mbox-reply", {
                    "rce-mbox-reply-border": !!n.titleColor,
                  }),
                  style: G({}, n.titleColor && { borderColor: n.titleColor }),
                  onClick: t,
                },
                {
                  children: [
                    (0, r.jsxs)(
                      "div",
                      G(
                        { className: "rce-mbox-reply-left" },
                        {
                          children: [
                            (0, r.jsx)(
                              "div",
                              G(
                                {
                                  style: G(
                                    {},
                                    n.titleColor && { color: n.titleColor }
                                  ),
                                  className: "rce-mbox-reply-owner",
                                },
                                { children: n.title || "Unknown" }
                              )
                            ),
                            (0, r.jsx)(
                              "div",
                              G(
                                { className: "rce-mbox-reply-message" },
                                { children: n.message || "..." }
                              )
                            ),
                          ],
                        }
                      )
                    ),
                    n.photoURL &&
                      (0, r.jsx)(
                        "div",
                        G(
                          { className: "rce-mbox-reply-right" },
                          {
                            children: (0, r.jsx)("img", {
                              src: n.photoURL,
                              alt: "",
                            }),
                          }
                        )
                      ),
                  ],
                }
              )
            );
          };
        function ee(e) {
          return u({
            tag: "svg",
            attr: {
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
            },
            child: [
              {
                tag: "path",
                attr: {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                },
              },
            ],
          })(e);
        }
        function et(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 512 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M317.5 210.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7zM123.8 253.1c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 13.4-13.8-76.5-78.6z",
                },
              },
              {
                tag: "path",
                attr: {
                  d: "M414.7 182.4l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L250.7 304.1l-50.1-51.6c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 151-156.1c1.7-1.7 1.7-4.6 0-6.4z",
                },
              },
            ],
          })(e);
        }
        function en(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 512 512" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z",
                },
              },
              {
                tag: "path",
                attr: {
                  d: "M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z",
                },
              },
            ],
          })(e);
        }
        function er(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
                },
              },
            ],
          })(e);
        }
        function ei(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z",
                },
              },
            ],
          })(e);
        }
        function eo(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
                },
              },
            ],
          })(e);
        }
        function el(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0120 12c0 4.42-3.58 8-8 8z",
                },
              },
            ],
          })(e);
        }
        function ea(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
                },
              },
              {
                tag: "path",
                attr: { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
              },
            ],
          })(e);
        }
        function es(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                },
              },
            ],
          })(e);
        }
        function eu(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
              {
                tag: "path",
                attr: {
                  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
                },
              },
            ],
          })(e);
        }
        var ec = ["second", "minute", "hour", "day", "week", "month", "year"],
          ed = ["秒", "分钟", "小时", "天", "周", "个月", "年"],
          ef = {},
          eh = function (e, t) {
            ef[e] = t;
          },
          ep = [60, 60, 24, 7, 365 / 7 / 12, 12];
        function em(e) {
          return e instanceof Date
            ? e
            : new Date(
                !isNaN(e) || /^\d+$/.test(e)
                  ? parseInt(e)
                  : (e = (e || "")
                      .trim()
                      .replace(/\.\d+/, "")
                      .replace(/-/, "/")
                      .replace(/-/, "/")
                      .replace(/(\d)T(\d)/, "$1 $2")
                      .replace(/Z/, " UTC")
                      .replace(/([+-]\d\d):?(\d\d)/, " $1$2"))
              );
        }
        var eg = function (e, t, n) {
          var r;
          return (function (e, t) {
            for (
              var n = e < 0 ? 1 : 0, r = (e = Math.abs(e)), i = 0;
              e >= ep[i] && i < ep.length;
              i++
            )
              e /= ep[i];
            return (
              (e = Math.floor(e)) > (0 == (i *= 2) ? 9 : 1) && (i += 1),
              t(e, i, r)[n].replace("%s", e.toString())
            );
          })(
            (+((r = n && n.relativeDate) ? em(r) : new Date()) - +em(e)) / 1e3,
            ef[t] || ef.en_US
          );
        };
        eh("en_US", function (e, t) {
          if (0 === t) return ["just now", "right now"];
          var n = ec[Math.floor(t / 2)];
          return (
            e > 1 && (n += "s"), [e + " " + n + " ago", "in " + e + " " + n]
          );
        }),
          eh("zh_CN", function (e, t) {
            if (0 === t) return ["刚刚", "片刻后"];
            var n = ed[~~(t / 2)];
            return [e + " " + n + "前", e + " " + n + "后"];
          });
        var ev = function () {
            return (ev =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          ey = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          ex = function (e) {
            var t = e.type,
              n = e.size,
              o = e.lazyLoadingImage,
              l = void 0 === o ? void 0 : o,
              a = ey(e, ["type", "size", "lazyLoadingImage"]),
              s = [],
              u = !1,
              c = a.src,
              d = !1;
            (0, i.useEffect)(function () {
              l && ((d = !0), f(c) ? (d = !1) : ((c = l), u || h(a.src)));
            }, []);
            var f = function (e) {
                return -1 !== s.indexOf(e);
              },
              h = function (e) {
                u = !0;
                var t = function () {
                    s.push(e), (u = !1);
                  },
                  n = document.createElement("img");
                (n.src = e), (n.onload = t), (n.onerror = t);
              };
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(
                  "div",
                  ev(
                    {
                      className: U(
                        "rce-avatar-container",
                        void 0 === t ? "default" : t,
                        void 0 === n ? "default" : n,
                        a.className
                      ),
                    },
                    {
                      children: [
                        a.letterItem
                          ? (0, r.jsx)(
                              "div",
                              ev(
                                {
                                  className: "rce-avatar-letter-background",
                                  style: {
                                    backgroundColor: (function (e) {
                                      for (var t = 0, n = 0; n < e.length; n++)
                                        t = e.charCodeAt(n) + ((t << 5) - t);
                                      var r = "#";
                                      for (n = 0; n < 3; n++) {
                                        var i = (t >> (8 * n)) & 255;
                                        r += (
                                          "00" +
                                          (i = (i % 150) + 50).toString(16)
                                        ).substr(-2);
                                      }
                                      return r;
                                    })(a.letterItem.id),
                                  },
                                },
                                {
                                  children: (0, r.jsx)(
                                    "span",
                                    ev(
                                      { className: "rce-avatar-letter" },
                                      { children: a.letterItem.letter }
                                    )
                                  ),
                                }
                              )
                            )
                          : (0, r.jsx)("img", {
                              alt: a.alt,
                              src: c,
                              onError: a.onError,
                              className: U("rce-avatar", {
                                "rce-avatar-lazy": d,
                              }),
                            }),
                        a.sideElement,
                      ],
                    }
                  )
                ),
                a.miniImage &&
                  (0, r.jsx)(
                    "div",
                    ev(
                      { className: "rce-mini-avatar-container" },
                      { children: (0, r.jsx)("img", { src: a.miniImage }) }
                    )
                  ),
              ],
            });
          },
          eb = function () {
            return (eb =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          ek = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          ew = function (e) {
            var t = e.disabled,
              n = e.backgroundColor,
              i = void 0 === n ? "#3979aa" : n,
              o = e.color,
              l = ek(e, ["disabled", "backgroundColor", "color"]);
            return (0, r.jsx)(
              "button",
              eb(
                {
                  ref: l.buttonRef,
                  title: l.title,
                  className: U("rce-button", l.type, l.className),
                  style: {
                    backgroundColor: i,
                    color: void 0 === o ? "white" : o,
                    borderColor: i,
                  },
                  disabled: void 0 !== t && t,
                  onClick: l.onClick,
                },
                {
                  children: l.icon
                    ? (0, r.jsxs)(
                        "span",
                        eb(
                          { className: "rce-button-icon--container" },
                          {
                            children: [
                              ("right" === l.icon.float || !l.icon.float) &&
                                (0, r.jsx)("span", { children: l.text }),
                              (0, r.jsx)(
                                "span",
                                eb(
                                  {
                                    style: {
                                      float: l.icon.float,
                                      fontSize: l.icon.size || 12,
                                    },
                                    className: "rce-button-icon",
                                  },
                                  { children: l.icon.component }
                                )
                              ),
                              "left" === l.icon.float &&
                                (0, r.jsx)("span", { children: l.text }),
                            ],
                          }
                        )
                      )
                    : (0, r.jsx)("span", { children: l.text }),
                }
              )
            );
          },
          eS = function () {
            return (eS =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eC = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          eE = function (e) {
            var t,
              n = e.animationPosition,
              o = e.animationType,
              l = eC(e, ["animationPosition", "animationType"]),
              a = (0, i.useState)(void 0),
              s = a[0],
              u = a[1];
            return (0, r.jsxs)(
              "div",
              eS(
                {
                  className: U("rce-dropdown-container", l.className),
                  onBlur: function () {
                    !0 === s && u(!1);
                  },
                },
                {
                  children: [
                    (0, r.jsx)(
                      ew,
                      eS({}, l.buttonProps, {
                        onClick: function () {
                          return u(!s);
                        },
                      })
                    ),
                    (0, r.jsx)(
                      "div",
                      eS(
                        {
                          className: U(
                            "rce-dropdown",
                            void 0 === o ? "default" : o,
                            "rce-dropdown-open__" +
                              (void 0 === n ? "nortwest" : n),
                            { "dropdown-hide": !1 === s },
                            { "dropdown-show": !0 === s }
                          ),
                        },
                        {
                          children: (0, r.jsxs)("ul", {
                            children: [
                              l.title &&
                                (0, r.jsx)(
                                  "span",
                                  eS(
                                    { className: "rce-dropdown-title" },
                                    { children: l.title }
                                  )
                                ),
                              null === (t = l.items) || void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    return (0, r.jsx)(
                                      "li",
                                      eS(
                                        {
                                          onMouseDown: function (e) {
                                            return l.onSelect(t);
                                          },
                                        },
                                        {
                                          children:
                                            e instanceof Object
                                              ? e.icon
                                                ? (0, r.jsxs)(
                                                    "span",
                                                    eS(
                                                      {
                                                        className:
                                                          "rce-button-icon--container",
                                                      },
                                                      {
                                                        children: [
                                                          ("right" ===
                                                            e.icon.float ||
                                                            !e.icon.float) &&
                                                            (0, r.jsx)("a", {
                                                              children: e.text,
                                                            }),
                                                          (0, r.jsx)(
                                                            "span",
                                                            eS(
                                                              {
                                                                style: {
                                                                  float:
                                                                    e.icon
                                                                      .float,
                                                                  color:
                                                                    e.icon
                                                                      .color,
                                                                  fontSize:
                                                                    e.icon
                                                                      .size ||
                                                                    12,
                                                                },
                                                                className: U(
                                                                  "rce-button-icon",
                                                                  e.icon
                                                                    .className
                                                                ),
                                                              },
                                                              {
                                                                children:
                                                                  e.icon
                                                                    .component,
                                                              }
                                                            )
                                                          ),
                                                          "left" ===
                                                            e.icon.float &&
                                                            (0, r.jsx)("a", {
                                                              children: e.text,
                                                            }),
                                                        ],
                                                      }
                                                    )
                                                  )
                                                : (0, r.jsx)("a", {
                                                    children: e.text,
                                                  })
                                              : (0, r.jsx)("a", {
                                                  children: e,
                                                }),
                                        }
                                      ),
                                      t
                                    );
                                  }),
                            ],
                          }),
                        }
                      )
                    ),
                  ],
                }
              )
            );
          },
          eO = function () {
            return (eO =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eT = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          ej = function (e) {
            var t = e.date,
              n = e.dateString,
              o = e.title,
              l = e.subject,
              a = e.collapseTitle,
              s = e.moreItems,
              u = e.participants,
              c = e.dataSource,
              p = e.onClick,
              m = e.onMeetingTitleClick,
              g = e.onMeetingVideoLinkClick,
              v = e.onMeetingMoreSelect,
              y = eT(e, [
                "date",
                "dateString",
                "title",
                "subject",
                "collapseTitle",
                "moreItems",
                "participants",
                "dataSource",
                "onClick",
                "onMeetingTitleClick",
                "onMeetingVideoLinkClick",
                "onMeetingMoreSelect",
              ]),
              x = (0, i.useState)(!1),
              b = x[0],
              k = x[1],
              w = y.participantsLimit,
              S = n || (t && eg(t));
            return (0, r.jsx)(
              "div",
              eO(
                { className: "rce-mbox-mtmg" },
                {
                  children: (0, r.jsxs)(
                    "div",
                    eO(
                      { className: "rce-mtmg" },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            eO(
                              { className: "rce-mtmg-subject" },
                              { children: l || "Unknown Meeting" }
                            )
                          ),
                          (0, r.jsxs)(
                            "div",
                            eO(
                              { className: "rce-mtmg-body", onClick: p },
                              {
                                children: [
                                  (0, r.jsxs)(
                                    "div",
                                    eO(
                                      { className: "rce-mtmg-item" },
                                      {
                                        children: [
                                          (0, r.jsx)(d, {}),
                                          (0, r.jsxs)(
                                            "div",
                                            eO(
                                              { className: "rce-mtmg-content" },
                                              {
                                                children: [
                                                  (0, r.jsx)(
                                                    "span",
                                                    eO(
                                                      {
                                                        className:
                                                          "rce-mtmg-title",
                                                      },
                                                      { children: o }
                                                    )
                                                  ),
                                                  (0, r.jsx)(
                                                    "span",
                                                    eO(
                                                      {
                                                        className:
                                                          "rce-mtmg-date",
                                                      },
                                                      { children: S }
                                                    )
                                                  ),
                                                ],
                                              }
                                            )
                                          ),
                                        ],
                                      }
                                    )
                                  ),
                                  v &&
                                    s &&
                                    s.length > 0 &&
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(eE, {
                                        animationType: "bottom",
                                        animationPosition: "norteast",
                                        buttonProps: {
                                          className: "rce-mtmg-right-icon",
                                          icon: {
                                            component: (0, r.jsx)(eu, {}),
                                            size: 24,
                                          },
                                        },
                                        items: s,
                                        onSelect: v,
                                      }),
                                    }),
                                ],
                              }
                            )
                          ),
                          (0, r.jsx)(
                            "div",
                            eO(
                              {
                                className: "rce-mtmg-body-bottom",
                                onClick: function () {
                                  k(!b);
                                },
                              },
                              {
                                children: (0, r.jsxs)(
                                  "div",
                                  !0 === b
                                    ? eO(
                                        {
                                          className: "rce-mtmg-bottom--tptitle",
                                        },
                                        {
                                          children: [
                                            (0, r.jsx)(f, {}),
                                            (0, r.jsx)("span", { children: a }),
                                          ],
                                        }
                                      )
                                    : eO(
                                        {
                                          className:
                                            "rce-mtmg-body-bottom--bttitle",
                                        },
                                        {
                                          children: [
                                            (0, r.jsx)(h, {}),
                                            (0, r.jsxs)("span", {
                                              children: [
                                                null == u
                                                  ? void 0
                                                  : u
                                                      .slice(0, w)
                                                      .map(function (e) {
                                                        return (
                                                          e.title || "Unknow"
                                                        );
                                                      })
                                                      .join(", "),
                                                u &&
                                                  w &&
                                                  u.length > w &&
                                                  ", +".concat(u.length - w),
                                              ],
                                            }),
                                          ],
                                        }
                                      )
                                ),
                              }
                            )
                          ),
                          (0, r.jsx)(
                            "div",
                            eO(
                              {
                                className: U("rce-mtmg-toogleContent", {
                                  "rce-mtmg-toogleContent--click": !0 === b,
                                }),
                              },
                              {
                                children:
                                  c &&
                                  c.map(function (e, t) {
                                    return (0, r.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          !e.event &&
                                            (0, r.jsxs)(
                                              "div",
                                              eO(
                                                { className: "rce-mitem" },
                                                {
                                                  children: [
                                                    (0, r.jsx)(
                                                      "div",
                                                      eO(
                                                        {
                                                          className: U(
                                                            "rce-mitem avatar",
                                                            {
                                                              "rce-mitem no-avatar":
                                                                !e.avatar,
                                                            }
                                                          ),
                                                        },
                                                        {
                                                          children: e.avatar
                                                            ? (0, r.jsx)(ex, {
                                                                src: e.avatar,
                                                              })
                                                            : (0, r.jsx)(
                                                                en,
                                                                {}
                                                              ),
                                                        }
                                                      )
                                                    ),
                                                    (0, r.jsxs)(
                                                      "div",
                                                      eO(
                                                        {
                                                          className:
                                                            "rce-mitem-body",
                                                        },
                                                        {
                                                          children: [
                                                            (0, r.jsxs)(
                                                              "div",
                                                              eO(
                                                                {
                                                                  className:
                                                                    "rce-mitem-body--top",
                                                                },
                                                                {
                                                                  children: [
                                                                    (0, r.jsx)(
                                                                      "div",
                                                                      eO(
                                                                        {
                                                                          className:
                                                                            "rce-mitem-body--top-title",
                                                                          onClick:
                                                                            function (
                                                                              n
                                                                            ) {
                                                                              m instanceof
                                                                                Function &&
                                                                                m(
                                                                                  e,
                                                                                  t,
                                                                                  n
                                                                                );
                                                                            },
                                                                        },
                                                                        {
                                                                          children:
                                                                            e.title,
                                                                        }
                                                                      )
                                                                    ),
                                                                    (0, r.jsx)(
                                                                      "div",
                                                                      eO(
                                                                        {
                                                                          className:
                                                                            "rce-mitem-body--top-time",
                                                                        },
                                                                        {
                                                                          children:
                                                                            e.dateString
                                                                              ? e.dateString
                                                                              : e.date &&
                                                                                e.date &&
                                                                                eg(
                                                                                  e.date
                                                                                ),
                                                                        }
                                                                      )
                                                                    ),
                                                                  ],
                                                                }
                                                              )
                                                            ),
                                                            (0, r.jsx)(
                                                              "div",
                                                              eO(
                                                                {
                                                                  className:
                                                                    "rce-mitem-body--bottom",
                                                                },
                                                                {
                                                                  children: (0,
                                                                  r.jsx)(
                                                                    "div",
                                                                    eO(
                                                                      {
                                                                        className:
                                                                          "rce-mitem-body--bottom-title",
                                                                      },
                                                                      {
                                                                        children:
                                                                          e.message,
                                                                      }
                                                                    )
                                                                  ),
                                                                }
                                                              )
                                                            ),
                                                          ],
                                                        }
                                                      )
                                                    ),
                                                  ],
                                                }
                                              )
                                            ),
                                          e.event &&
                                            (0, r.jsx)(
                                              "div",
                                              eO(
                                                {
                                                  className: "rce-mitem-event",
                                                },
                                                {
                                                  children: (0, r.jsxs)(
                                                    "div",
                                                    eO(
                                                      {
                                                        className:
                                                          "rce-mitem-bottom-body",
                                                      },
                                                      {
                                                        children: [
                                                          (0, r.jsx)(
                                                            "div",
                                                            eO(
                                                              {
                                                                className:
                                                                  "rce-mitem-body avatar",
                                                              },
                                                              {
                                                                children: (0,
                                                                r.jsx)(ee, {}),
                                                              }
                                                            )
                                                          ),
                                                          (0, r.jsxs)(
                                                            "div",
                                                            eO(
                                                              {
                                                                className:
                                                                  "rce-mitem-bottom-body-top",
                                                              },
                                                              {
                                                                children: [
                                                                  e.event.title,
                                                                  (0, r.jsx)(
                                                                    "div",
                                                                    eO(
                                                                      {
                                                                        className:
                                                                          "rce-mitem-body--top-time",
                                                                      },
                                                                      {
                                                                        children:
                                                                          e.dateString
                                                                            ? e.dateString
                                                                            : e.date &&
                                                                              eg(
                                                                                e.date
                                                                              ),
                                                                      }
                                                                    )
                                                                  ),
                                                                  (0, r.jsx)(
                                                                    "div",
                                                                    eO(
                                                                      {
                                                                        className:
                                                                          "rce-mitem-avatar-content",
                                                                      },
                                                                      {
                                                                        children:
                                                                          (0,
                                                                          r.jsxs)(
                                                                            "div",
                                                                            eO(
                                                                              {
                                                                                className:
                                                                                  "rce-mitem-avatar",
                                                                              },
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    e
                                                                                      .event
                                                                                      .avatars &&
                                                                                      e.event.avatars
                                                                                        .slice(
                                                                                          0,
                                                                                          e
                                                                                            .event
                                                                                            .avatarsLimit
                                                                                        )
                                                                                        .map(
                                                                                          function (
                                                                                            e,
                                                                                            t
                                                                                          ) {
                                                                                            return (0,
                                                                                            r.jsx)(
                                                                                              ex,
                                                                                              {
                                                                                                src: e.src,
                                                                                              },
                                                                                              t
                                                                                            );
                                                                                          }
                                                                                        ),
                                                                                    e
                                                                                      .event
                                                                                      .avatars &&
                                                                                      e
                                                                                        .event
                                                                                        .avatarsLimit &&
                                                                                      e
                                                                                        .event
                                                                                        .avatars
                                                                                        .length >
                                                                                        e
                                                                                          .event
                                                                                          .avatarsLimit &&
                                                                                      (0,
                                                                                      r.jsx)(
                                                                                        "div",
                                                                                        eO(
                                                                                          {
                                                                                            className:
                                                                                              "rce-mitem-length rce-mitem-tooltip",
                                                                                            tooltip:
                                                                                              e.event.avatars
                                                                                                .slice(
                                                                                                  e
                                                                                                    .event
                                                                                                    .avatarsLimit,
                                                                                                  e
                                                                                                    .event
                                                                                                    .avatars
                                                                                                    .length
                                                                                                )
                                                                                                .map(
                                                                                                  function (
                                                                                                    e
                                                                                                  ) {
                                                                                                    return e.title;
                                                                                                  }
                                                                                                )
                                                                                                .join(
                                                                                                  ","
                                                                                                )
                                                                                                .toString(),
                                                                                          },
                                                                                          {
                                                                                            children:
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                "span",
                                                                                                eO(
                                                                                                  {
                                                                                                    className:
                                                                                                      "rce-mitem-tooltip-text",
                                                                                                  },
                                                                                                  {
                                                                                                    children:
                                                                                                      "+" +
                                                                                                      (e
                                                                                                        .event
                                                                                                        .avatars
                                                                                                        .length -
                                                                                                        e
                                                                                                          .event
                                                                                                          .avatarsLimit),
                                                                                                  }
                                                                                                )
                                                                                              ),
                                                                                          }
                                                                                        )
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            )
                                                                          ),
                                                                      }
                                                                    )
                                                                  ),
                                                                  e.record &&
                                                                    (0, r.jsx)(
                                                                      "div",
                                                                      eO(
                                                                        {
                                                                          className:
                                                                            "rce-mtmg-call-record",
                                                                        },
                                                                        {
                                                                          children:
                                                                            (0,
                                                                            r.jsxs)(
                                                                              "div",
                                                                              eO(
                                                                                {
                                                                                  className:
                                                                                    "rce-mtmg-call-body",
                                                                                },
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      r.jsxs)(
                                                                                        "div",
                                                                                        eO(
                                                                                          {
                                                                                            onClick:
                                                                                              function (
                                                                                                n
                                                                                              ) {
                                                                                                g instanceof
                                                                                                  Function &&
                                                                                                  g(
                                                                                                    e,
                                                                                                    t,
                                                                                                    n
                                                                                                  );
                                                                                              },
                                                                                            className:
                                                                                              "rce-mtmg-call-avatars",
                                                                                          },
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                  ex,
                                                                                                  {
                                                                                                    className:
                                                                                                      "rce-mtmg-call-avatars",
                                                                                                    src: e
                                                                                                      .record
                                                                                                      .avatar,
                                                                                                  }
                                                                                                ),
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                  "div",
                                                                                                  eO(
                                                                                                    {
                                                                                                      className:
                                                                                                        "rce-mtmg-record-time",
                                                                                                    },
                                                                                                    {
                                                                                                      children:
                                                                                                        e
                                                                                                          .record
                                                                                                          .time,
                                                                                                    }
                                                                                                  )
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        )
                                                                                      ),
                                                                                      (0,
                                                                                      r.jsxs)(
                                                                                        "div",
                                                                                        eO(
                                                                                          {
                                                                                            className:
                                                                                              "rce-mtmg-call-body-title",
                                                                                          },
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                  "span",
                                                                                                  {
                                                                                                    children:
                                                                                                      e
                                                                                                        .record
                                                                                                        .title,
                                                                                                  }
                                                                                                ),
                                                                                                (0,
                                                                                                r.jsx)(
                                                                                                  "div",
                                                                                                  eO(
                                                                                                    {
                                                                                                      className:
                                                                                                        "rce-mtmg-call-body-bottom",
                                                                                                    },
                                                                                                    {
                                                                                                      children:
                                                                                                        e
                                                                                                          .record
                                                                                                          .savedBy,
                                                                                                    }
                                                                                                  )
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        )
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              )
                                                                            ),
                                                                        }
                                                                      )
                                                                    ),
                                                                ],
                                                              }
                                                            )
                                                          ),
                                                        ],
                                                      }
                                                    )
                                                  ),
                                                }
                                              )
                                            ),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                }
              )
            );
          },
          e_ = function () {
            return (e_ =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eP = function (e) {
            var t,
              n,
              i,
              o,
              l,
              a =
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.status) &&
                !0 ===
                  (null === (n = null == e ? void 0 : e.data) || void 0 === n
                    ? void 0
                    : n.status.error),
              s =
                (null === (i = null == e ? void 0 : e.data) || void 0 === i
                  ? void 0
                  : i.status) &&
                (null === (o = null == e ? void 0 : e.data) || void 0 === o
                  ? void 0
                  : o.status.download);
            return (0, r.jsxs)(
              "div",
              e_(
                {
                  className: U("rce-mbox-video", {
                    "padding-time": !(null == e ? void 0 : e.text),
                  }),
                },
                {
                  children: [
                    (0, r.jsxs)(
                      "div",
                      e_(
                        {
                          className: "rce-mbox-video--video",
                          style: e_(
                            {},
                            (null == e ? void 0 : e.data.width) &&
                              (null == e ? void 0 : e.data.height) && {
                                width: e.data.width,
                                height: e.data.height,
                              }
                          ),
                        },
                        {
                          children: [
                            !s &&
                              (0, r.jsx)("img", {
                                src: null == e ? void 0 : e.data.uri,
                                alt: null == e ? void 0 : e.data.alt,
                                onClick: e.onOpen,
                                onLoad: e.onLoad,
                                onError: e.onPhotoError,
                              }),
                            s &&
                              (0, r.jsxs)(
                                "video",
                                e_(
                                  {
                                    controls: !0,
                                    controlsList: e.controlsList,
                                  },
                                  {
                                    children: [
                                      (0, r.jsx)("source", {
                                        src:
                                          null == e ? void 0 : e.data.videoURL,
                                        type: "video/mp4",
                                      }),
                                      "Your browser does not support HTML video.",
                                    ],
                                  }
                                )
                              ),
                            a &&
                              (0, r.jsx)(
                                "div",
                                e_(
                                  { className: "rce-mbox-video--video__block" },
                                  {
                                    children: (0, r.jsx)(
                                      "span",
                                      e_(
                                        {
                                          className:
                                            "rce-mbox-video--video__block-item rce-mbox-video--error",
                                        },
                                        { children: (0, r.jsx)(g, {}) }
                                      )
                                    ),
                                  }
                                )
                              ),
                            !a &&
                              (null === (l = null == e ? void 0 : e.data) ||
                              void 0 === l
                                ? void 0
                                : l.status) &&
                              !s &&
                              (0, r.jsxs)(
                                "div",
                                e_(
                                  { className: "rce-mbox-video--video__block" },
                                  {
                                    children: [
                                      !e.data.status.click &&
                                        (0, r.jsx)(
                                          "button",
                                          e_(
                                            {
                                              onClick: e.onDownload,
                                              className:
                                                "rce-mbox-video--video__block-item rce-mbox-video--download",
                                            },
                                            { children: (0, r.jsx)(m, {}) }
                                          )
                                        ),
                                      "number" ==
                                        typeof e.data.status.loading &&
                                        0 !== e.data.status.loading &&
                                        (0, r.jsx)(R, {
                                          animate: e.data.status.loading,
                                          className:
                                            "rce-mbox-video--video__block-item",
                                          progressOptions: {
                                            strokeWidth: 2.3,
                                            color: "#efe",
                                            trailColor: "#aaa",
                                            trailWidth: 1,
                                            step: function (e, t) {
                                              t.path.setAttribute(
                                                "trail",
                                                (void 0 !== e.state &&
                                                  (null ===
                                                    (n =
                                                      null == e
                                                        ? void 0
                                                        : e.state) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.color)) ||
                                                  ""
                                              ),
                                                t.path.setAttribute(
                                                  "trailwidth-width",
                                                  (void 0 !== e.state &&
                                                    (null ===
                                                      (r =
                                                        null == e
                                                          ? void 0
                                                          : e.state) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.width)) ||
                                                    ""
                                                );
                                              var n,
                                                r,
                                                i = Math.round(
                                                  100 *
                                                    (null == t
                                                      ? void 0
                                                      : t.value())
                                                );
                                              0 === i
                                                ? null == t || t.setText("")
                                                : null == t || t.setText(i);
                                            },
                                          },
                                        }),
                                    ],
                                  }
                                )
                              ),
                          ],
                        }
                      )
                    ),
                    (null == e ? void 0 : e.text) &&
                      (0, r.jsx)(
                        "div",
                        e_({ className: "rce-mbox-text" }, { children: e.text })
                      ),
                  ],
                }
              )
            );
          },
          eM = function () {
            return (eM =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eL = function (e) {
            var t = e.data.controlsList;
            return (0, r.jsxs)(
              "div",
              eM(
                { className: "rce-mbox-audio", style: e.customStyle },
                {
                  children: [
                    (0, r.jsxs)(
                      "audio",
                      eM(
                        {},
                        e.audioProps,
                        { controls: !0, controlsList: t || "nodownload" },
                        {
                          children: [
                            (0, r.jsx)("source", {
                              src: e.data.audioURL,
                              type: e.data.audioType || "audio/mp3",
                            }),
                            "Your browser does not support the audio element.",
                          ],
                        }
                      )
                    ),
                    e.text &&
                      (0, r.jsx)(
                        "div",
                        eM({ className: "rce-mbox-text" }, { children: e.text })
                      ),
                  ],
                }
              )
            );
          },
          eN = function () {
            return (eN =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eA = function (e) {
            var t;
            return (0, r.jsx)(
              "div",
              eN(
                { className: "rce-mtlink" },
                {
                  children: (0, r.jsxs)(
                    "div",
                    eN(
                      { className: "rce-mtlink-content" },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            eN(
                              { className: "rce-mtlink-item" },
                              {
                                children: (0, r.jsx)(
                                  "div",
                                  eN(
                                    { className: "rce-mtlink-title" },
                                    { children: e.text }
                                  )
                                ),
                              }
                            )
                          ),
                          (0, r.jsx)(
                            "div",
                            eN(
                              { className: "rce-mtlink-btn" },
                              {
                                children:
                                  null ===
                                    (t =
                                      null == e ? void 0 : e.actionButtons) ||
                                  void 0 === t
                                    ? void 0
                                    : t.map(function (t) {
                                        return (0, r.jsx)(
                                          "div",
                                          eN(
                                            {
                                              className:
                                                "rce-mtlink-btn-content",
                                              onClick: function () {
                                                var n;
                                                return t.onClickButton(
                                                  null !==
                                                    (n =
                                                      null == e
                                                        ? void 0
                                                        : e.meetingID) &&
                                                    void 0 !== n
                                                    ? n
                                                    : ""
                                                );
                                              },
                                            },
                                            {
                                              children: (0, r.jsx)(
                                                t.Component,
                                                {}
                                              ),
                                            }
                                          )
                                        );
                                      }),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                }
              )
            );
          };
        function eI(e) {
          return u({
            tag: "svg",
            attr: { viewBox: "0 0 24 24" },
            child: [
              {
                tag: "g",
                attr: {},
                child: [
                  { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                  {
                    tag: "path",
                    attr: {
                      d: "M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z",
                    },
                  },
                ],
              },
            ],
          })(e);
        }
        function eR(e) {
          return u({
            tag: "svg",
            attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
            child: [
              {
                tag: "path",
                attr: {
                  d: "M13 5.499c-.256 0-.512.097-.707.292-.195.196-.293.452-.293.708v2.559c-4.5.498-8 4.309-8 8.941v1c2.245-3.423 5.25-3.92 8-3.989v2.489c0 .255.098.512.293.707s.451.293.707.293.512-.098.707-.293l6.293-6.207-6.293-6.208c-.195-.195-.451-.292-.707-.292z",
                },
              },
            ],
          })(e);
        }
        var eD = function () {
            return (eD =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eF = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          ez = function (e) {
            var t = e.focus,
              n = void 0 !== t && t,
              o = e.notch,
              l = void 0 === o || o,
              a = e.styles,
              s = eF(e, ["focus", "notch", "styles"]),
              u = (0, i.useRef)(n),
              c = (0, i.useRef)(null),
              d = U("rce-mbox", { "rce-mbox-right": "right" === s.position }),
              f = !(
                /(text|video|file|meeting|audio)/g.test(s.type || "text") ||
                ("location" === s.type && s.text)
              ),
              h = s.date && (s.dateString || eg(s.date));
            return (
              (0, i.useEffect)(
                function () {
                  var e;
                  u.current !== n &&
                    !0 === n &&
                    c &&
                    (null === (e = c.current) ||
                      void 0 === e ||
                      e.scrollIntoView({ block: "center", behavior: "smooth" }),
                    s.onMessageFocused(u)),
                    (u.current = n);
                },
                [n, u]
              ),
              (0, r.jsxs)(
                "div",
                eD(
                  {
                    ref: c,
                    className: U("rce-container-mbox", s.className),
                    onClick: s.onClick,
                  },
                  {
                    children: [
                      s.renderAddCmp instanceof Function
                        ? s.renderAddCmp()
                        : s.renderAddCmp,
                      "system" === s.type
                        ? (0, r.jsx)(W, eD({}, s, { focus: n, notch: l }))
                        : (0, r.jsxs)(
                            "div",
                            eD(
                              {
                                style: a,
                                className: U(
                                  d,
                                  { "rce-mbox--clear-padding": f },
                                  { "rce-mbox--clear-notch": !l },
                                  { "message-focus": n }
                                ),
                              },
                              {
                                children: [
                                  (0, r.jsxs)(
                                    "div",
                                    eD(
                                      {
                                        className: "rce-mbox-body",
                                        onContextMenu: s.onContextMenu,
                                      },
                                      {
                                        children: [
                                          !s.retracted &&
                                            !0 === s.forwarded &&
                                            (0, r.jsx)(
                                              "div",
                                              eD(
                                                {
                                                  className: U(
                                                    "rce-mbox-forward",
                                                    {
                                                      "rce-mbox-forward-right":
                                                        "left" === s.position,
                                                    },
                                                    {
                                                      "rce-mbox-forward-left":
                                                        "right" === s.position,
                                                    }
                                                  ),
                                                  onClick: s.onForwardClick,
                                                },
                                                { children: (0, r.jsx)(eI, {}) }
                                              )
                                            ),
                                          !s.retracted &&
                                            !0 === s.replyButton &&
                                            (0, r.jsx)(
                                              "div",
                                              eD(
                                                {
                                                  className:
                                                    !0 !== s.forwarded
                                                      ? U(
                                                          "rce-mbox-forward",
                                                          {
                                                            "rce-mbox-forward-right":
                                                              "left" ===
                                                              s.position,
                                                          },
                                                          {
                                                            "rce-mbox-forward-left":
                                                              "right" ===
                                                              s.position,
                                                          }
                                                        )
                                                      : U(
                                                          "rce-mbox-forward",
                                                          {
                                                            "rce-mbox-reply-btn-right":
                                                              "left" ===
                                                              s.position,
                                                          },
                                                          {
                                                            "rce-mbox-reply-btn-left":
                                                              "right" ===
                                                              s.position,
                                                          }
                                                        ),
                                                  onClick: s.onReplyClick,
                                                },
                                                { children: (0, r.jsx)(eo, {}) }
                                              )
                                            ),
                                          !s.retracted &&
                                            !0 === s.removeButton &&
                                            (0, r.jsx)(
                                              "div",
                                              eD(
                                                {
                                                  className:
                                                    !0 === s.forwarded
                                                      ? U(
                                                          "rce-mbox-remove",
                                                          {
                                                            "rce-mbox-remove-right":
                                                              "left" ===
                                                              s.position,
                                                          },
                                                          {
                                                            "rce-mbox-remove-left":
                                                              "right" ===
                                                              s.position,
                                                          }
                                                        )
                                                      : U(
                                                          "rce-mbox-forward",
                                                          {
                                                            "rce-mbox-reply-btn-right":
                                                              "left" ===
                                                              s.position,
                                                          },
                                                          {
                                                            "rce-mbox-reply-btn-left":
                                                              "right" ===
                                                              s.position,
                                                          }
                                                        ),
                                                  onClick:
                                                    s.onRemoveMessageClick,
                                                },
                                                { children: (0, r.jsx)(er, {}) }
                                              )
                                            ),
                                          (s.title || s.avatar) &&
                                            (0, r.jsxs)(
                                              "div",
                                              eD(
                                                {
                                                  style: eD(
                                                    {},
                                                    s.titleColor && {
                                                      color: s.titleColor,
                                                    }
                                                  ),
                                                  onClick: s.onTitleClick,
                                                  className: U(
                                                    "rce-mbox-title",
                                                    {
                                                      "rce-mbox-title--clear":
                                                        "text" === s.type,
                                                    }
                                                  ),
                                                },
                                                {
                                                  children: [
                                                    s.avatar &&
                                                      (0, r.jsx)(ex, {
                                                        letterItem:
                                                          s.letterItem,
                                                        src: s.avatar,
                                                      }),
                                                    s.title &&
                                                      (0, r.jsx)("span", {
                                                        children: s.title,
                                                      }),
                                                  ],
                                                }
                                              )
                                            ),
                                          s.forwardedMessageText
                                            ? (0, r.jsx)(
                                                "div",
                                                eD(
                                                  {
                                                    className:
                                                      "rce-mbox-forwardedMessage",
                                                  },
                                                  {
                                                    children: (0, r.jsxs)(
                                                      "div",
                                                      eD(
                                                        {
                                                          className:
                                                            "rce-mbox-forwarded-message",
                                                        },
                                                        {
                                                          children: [
                                                            (0, r.jsx)(eR, {
                                                              fontSize: 18,
                                                            }),
                                                            (0, r.jsxs)(
                                                              "i",
                                                              eD(
                                                                {
                                                                  style: {
                                                                    margin:
                                                                      "0 3px 1px 0",
                                                                  },
                                                                },
                                                                {
                                                                  children: [
                                                                    " ",
                                                                    s.forwardedMessageText,
                                                                  ],
                                                                }
                                                              )
                                                            ),
                                                          ],
                                                        }
                                                      )
                                                    ),
                                                  }
                                                )
                                              )
                                            : null,
                                          !s.forwardedMessageText && s.reply
                                            ? (0, r.jsx)(
                                                X,
                                                eD(
                                                  {
                                                    onClick:
                                                      s.onReplyMessageClick,
                                                  },
                                                  s.reply
                                                )
                                              )
                                            : null,
                                          "text" === s.type &&
                                            (0, r.jsxs)(
                                              "div",
                                              eD(
                                                {
                                                  className: U(
                                                    "rce-mbox-text",
                                                    {
                                                      "rce-mbox-text-retracted":
                                                        s.retracted,
                                                      left:
                                                        "left" === s.position,
                                                      right:
                                                        "right" === s.position,
                                                    }
                                                  ),
                                                },
                                                {
                                                  children: [
                                                    s.retracted &&
                                                      (0, r.jsx)(el, {}),
                                                    s.text,
                                                  ],
                                                }
                                              )
                                            ),
                                          "location" === s.type &&
                                            (0, r.jsx)(
                                              Y,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "photo" === s.type &&
                                            (0, r.jsx)(
                                              F,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "video" === s.type &&
                                            (0, r.jsx)(
                                              eP,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "file" === s.type &&
                                            (0, r.jsx)(
                                              H,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "spotify" === s.type &&
                                            (0, r.jsx)(
                                              $,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "meeting" === s.type &&
                                            (0, r.jsx)(
                                              ej,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "audio" === s.type &&
                                            (0, r.jsx)(
                                              eL,
                                              eD({ focus: n, notch: l }, s)
                                            ),
                                          "meetingLink" === s.type &&
                                            (0, r.jsx)(
                                              eA,
                                              eD({ focus: n, notch: l }, s, {
                                                actionButtons:
                                                  null == s
                                                    ? void 0
                                                    : s.actionButtons,
                                              })
                                            ),
                                          (0, r.jsxs)(
                                            "div",
                                            eD(
                                              {
                                                title: s.statusTitle,
                                                className: U(
                                                  "rce-mbox-time",
                                                  { "rce-mbox-time-block": f },
                                                  {
                                                    "non-copiable":
                                                      !s.copiableDate,
                                                  }
                                                ),
                                                "data-text": s.copiableDate
                                                  ? void 0
                                                  : h,
                                              },
                                              {
                                                children: [
                                                  s.copiableDate &&
                                                    s.date &&
                                                    (s.dateString ||
                                                      eg(s.date)),
                                                  s.status &&
                                                    (0, r.jsxs)(
                                                      "span",
                                                      eD(
                                                        {
                                                          className:
                                                            "rce-mbox-status",
                                                        },
                                                        {
                                                          children: [
                                                            "waiting" ===
                                                              s.status &&
                                                              (0, r.jsx)(
                                                                ea,
                                                                {}
                                                              ),
                                                            "sent" ===
                                                              s.status &&
                                                              (0, r.jsx)(
                                                                es,
                                                                {}
                                                              ),
                                                            "received" ===
                                                              s.status &&
                                                              (0, r.jsx)(
                                                                et,
                                                                {}
                                                              ),
                                                            "read" ===
                                                              s.status &&
                                                              (0, r.jsx)(ei, {
                                                                color:
                                                                  "#4FC3F7",
                                                              }),
                                                          ],
                                                        }
                                                      )
                                                    ),
                                                ],
                                              }
                                            )
                                          ),
                                        ],
                                      }
                                    )
                                  ),
                                  l &&
                                    ("right" === s.position
                                      ? (0, r.jsx)(
                                          "svg",
                                          eD(
                                            {
                                              style: s.notchStyle,
                                              className: U(
                                                "rce-mbox-right-notch",
                                                { "message-focus": n }
                                              ),
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 20 20",
                                            },
                                            {
                                              children: (0, r.jsx)("path", {
                                                d: "M0 0v20L20 0",
                                              }),
                                            }
                                          )
                                        )
                                      : (0, r.jsx)("div", {
                                          children: (0, r.jsxs)(
                                            "svg",
                                            eD(
                                              {
                                                style: s.notchStyle,
                                                className: U(
                                                  "rce-mbox-left-notch",
                                                  { "message-focus": n }
                                                ),
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                              },
                                              {
                                                children: [
                                                  (0, r.jsx)("defs", {
                                                    children: (0, r.jsxs)(
                                                      "filter",
                                                      eD(
                                                        {
                                                          id: "filter1",
                                                          x: "0",
                                                          y: "0",
                                                        },
                                                        {
                                                          children: [
                                                            (0, r.jsx)(
                                                              "feOffset",
                                                              {
                                                                result:
                                                                  "offOut",
                                                                in: "SourceAlpha",
                                                                dx: "-2",
                                                                dy: "-5",
                                                              }
                                                            ),
                                                            (0, r.jsx)(
                                                              "feGaussianBlur",
                                                              {
                                                                result:
                                                                  "blurOut",
                                                                in: "offOut",
                                                                stdDeviation:
                                                                  "3",
                                                              }
                                                            ),
                                                            (0, r.jsx)(
                                                              "feBlend",
                                                              {
                                                                in: "SourceGraphic",
                                                                in2: "blurOut",
                                                                mode: "normal",
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      )
                                                    ),
                                                  }),
                                                  (0, r.jsx)("path", {
                                                    d: "M20 0v20L0 0",
                                                    filter: "url(#filter1)",
                                                  }),
                                                ],
                                              }
                                            )
                                          ),
                                        })),
                                ],
                              }
                            )
                          ),
                    ],
                  }
                )
              )
            );
          },
          eH = function () {
            return (eH =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          eB = function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            }
            return n;
          },
          eU = function (e) {
            var t = e.referance,
              n = void 0 === t ? null : t,
              o = e.lockable,
              l = void 0 !== o && o,
              a = e.toBottomHeight,
              s = void 0 === a ? 300 : a,
              u = e.downButton,
              c = eB(e, [
                "referance",
                "lockable",
                "toBottomHeight",
                "downButton",
              ]),
              d = (0, i.useState)(0),
              f = d[0],
              h = d[1],
              m = (0, i.useState)(!1),
              g = m[0],
              v = m[1],
              y = (0, i.useRef)(c);
            (0, i.useEffect)(
              function () {
                n &&
                  (y.current.dataSource.length !== c.dataSource.length &&
                    (h(x(n)),
                    n &&
                      n.current &&
                      ("100%" === s || (s && f < s)
                        ? (n.current.scrollTop = n.current.scrollHeight)
                        : !0 === l &&
                          (n.current.scrollTop =
                            n.current.scrollHeight -
                            n.current.offsetHeight -
                            f))),
                  (y.current = c));
              },
              [y, c]
            );
            var x = function (e) {
              return e.current
                ? e.current.scrollHeight -
                    e.current.scrollTop -
                    e.current.offsetHeight
                : e.scrollHeight - e.scrollTop - e.offsetHeight;
            };
            return (0, r.jsxs)(
              "div",
              eH(
                { className: U(["rce-container-mlist", c.className]) },
                c.customProps,
                {
                  children: [
                    !!c.children && c.isShowChild && c.children,
                    (0, r.jsx)(
                      "div",
                      eH(
                        {
                          ref: n,
                          onScroll: function (e) {
                            var t = x(e.currentTarget);
                            h(t),
                              "100%" === s || (s && t > s)
                                ? !0 !== g && (v(!0), h(t))
                                : !1 !== g && (v(!1), h(t)),
                              c.onScroll instanceof Function && c.onScroll(e);
                          },
                          className: "rce-mlist",
                        },
                        {
                          children: c.dataSource.map(function (e, t) {
                            return (0, r.jsx)(
                              ez,
                              eH({}, e, {
                                onOpen:
                                  c.onOpen &&
                                  function (n) {
                                    c.onOpen instanceof Function &&
                                      c.onOpen(e, t, n);
                                  },
                                onPhotoError:
                                  c.onPhotoError &&
                                  function (n) {
                                    c.onPhotoError instanceof Function &&
                                      c.onPhotoError(e, t, n);
                                  },
                                onDownload:
                                  c.onDownload &&
                                  function (n) {
                                    c.onDownload instanceof Function &&
                                      c.onDownload(e, t, n);
                                  },
                                onTitleClick:
                                  c.onTitleClick &&
                                  function (n) {
                                    c.onTitleClick instanceof Function &&
                                      c.onTitleClick(e, t, n);
                                  },
                                onForwardClick:
                                  c.onForwardClick &&
                                  function (n) {
                                    c.onForwardClick instanceof Function &&
                                      c.onForwardClick(e, t, n);
                                  },
                                onReplyClick:
                                  c.onReplyClick &&
                                  function (n) {
                                    c.onReplyClick instanceof Function &&
                                      c.onReplyClick(e, t, n);
                                  },
                                onReplyMessageClick:
                                  c.onReplyMessageClick &&
                                  function (n) {
                                    c.onReplyMessageClick instanceof Function &&
                                      c.onReplyMessageClick(e, t, n);
                                  },
                                onRemoveMessageClick:
                                  c.onRemoveMessageClick &&
                                  function (n) {
                                    c.onRemoveMessageClick instanceof
                                      Function &&
                                      c.onRemoveMessageClick(e, t, n);
                                  },
                                onClick:
                                  c.onClick &&
                                  function (n) {
                                    c.onClick instanceof Function &&
                                      c.onClick(e, t, n);
                                  },
                                onContextMenu:
                                  c.onContextMenu &&
                                  function (n) {
                                    c.onContextMenu instanceof Function &&
                                      c.onContextMenu(e, t, n);
                                  },
                                onMeetingMoreSelect:
                                  c.onMeetingMoreSelect &&
                                  function (n) {
                                    c.onMeetingMoreSelect instanceof Function &&
                                      c.onMeetingMoreSelect(e, t, n);
                                  },
                                onMessageFocused:
                                  c.onMessageFocused &&
                                  function (n) {
                                    c.onMessageFocused instanceof Function &&
                                      c.onMessageFocused(e, t, n);
                                  },
                                onMeetingMessageClick:
                                  c.onMeetingMessageClick &&
                                  function (n) {
                                    c.onMeetingMessageClick instanceof
                                      Function &&
                                      c.onMeetingMessageClick(e, t, n);
                                  },
                                onMeetingTitleClick: c.onMeetingTitleClick,
                                onMeetingVideoLinkClick:
                                  c.onMeetingVideoLinkClick,
                                onMeetingLinkClick:
                                  c.onMeetingLinkClick &&
                                  function (n) {
                                    c.onMeetingLinkClick instanceof Function &&
                                      c.onMeetingLinkClick(e, t, n);
                                  },
                                actionButtons: c.actionButtons,
                                styles: c.messageBoxStyles,
                                notchStyle: c.notchStyle,
                              }),
                              t
                            );
                          }),
                        }
                      )
                    ),
                    !0 === u &&
                      g &&
                      "100%" !== s &&
                      (0, r.jsxs)(
                        "div",
                        eH(
                          {
                            className: "rce-mlist-down-button",
                            onClick: function (e) {
                              n &&
                                ((n.current.scrollTop = n.current.scrollHeight),
                                c.onDownButtonClick instanceof Function &&
                                  c.onDownButtonClick(e));
                            },
                          },
                          {
                            children: [
                              (0, r.jsx)(p, {}),
                              void 0 !== c.downButtonBadge
                                ? (0, r.jsx)(
                                    "span",
                                    eH(
                                      {
                                        className:
                                          "rce-mlist-down-button--badge",
                                      },
                                      { children: c.downButtonBadge.toString() }
                                    )
                                  )
                                : null,
                            ],
                          }
                        )
                      ),
                  ],
                }
              )
            );
          };
      },
      41476: function (e, t, n) {
        "use strict";
        var r = (
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            }
          )(n(5174)),
          i = n(26678);
        function o(e, t) {
          var n = {};
          return (
            e &&
              "string" == typeof e &&
              (0, r.default)(e, function (e, r) {
                e && r && (n[(0, i.camelCase)(e, t)] = r);
              }),
            n
          );
        }
        (o.default = o), (e.exports = o);
      },
      26678: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.camelCase = void 0);
        var n = /^--[a-zA-Z0-9_-]+$/,
          r = /-([a-z])/g,
          i = /^[^-]+$/,
          o = /^-(webkit|moz|ms|o|khtml)-/,
          l = /^-(ms)-/,
          a = function (e, t) {
            return t.toUpperCase();
          },
          s = function (e, t) {
            return "".concat(t, "-");
          };
        t.camelCase = function (e, t) {
          var u;
          return (void 0 === t && (t = {}), !(u = e) || i.test(u) || n.test(u))
            ? e
            : ((e = e.toLowerCase()),
              (e = t.reactCompat ? e.replace(l, s) : e.replace(o, s)).replace(
                r,
                a
              ));
        };
      },
      5174: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var n = null;
            if (!e || "string" != typeof e) return n;
            var r = (0, i.default)(e),
              o = "function" == typeof t;
            return (
              r.forEach(function (e) {
                if ("declaration" === e.type) {
                  var r = e.property,
                    i = e.value;
                  o ? t(r, i, e) : i && ((n = n || {})[r] = i);
                }
              }),
              n
            );
          });
        var i = r(n(18139));
      },
      98029: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return d;
          },
        });
        var r = n(67294),
          i = n(59289),
          o = n(27037),
          l = n(7506),
          a = n(24139),
          s = class extends l.l {
            #e;
            #t = void 0;
            #n;
            #r;
            constructor(e, t) {
              super(),
                (this.#e = e),
                this.setOptions(t),
                this.bindMethods(),
                this.#i();
            }
            bindMethods() {
              (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
            }
            setOptions(e) {
              let t = this.options;
              (this.options = this.#e.defaultMutationOptions(e)),
                (0, a.VS)(this.options, t) ||
                  this.#e
                    .getMutationCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      mutation: this.#n,
                      observer: this,
                    }),
                t?.mutationKey &&
                this.options.mutationKey &&
                (0, a.Ym)(t.mutationKey) !== (0, a.Ym)(this.options.mutationKey)
                  ? this.reset()
                  : this.#n?.state.status === "pending" &&
                    this.#n.setOptions(this.options);
            }
            onUnsubscribe() {
              this.hasListeners() || this.#n?.removeObserver(this);
            }
            onMutationUpdate(e) {
              this.#i(), this.#o(e);
            }
            getCurrentResult() {
              return this.#t;
            }
            reset() {
              this.#n?.removeObserver(this),
                (this.#n = void 0),
                this.#i(),
                this.#o();
            }
            mutate(e, t) {
              return (
                (this.#r = t),
                this.#n?.removeObserver(this),
                (this.#n = this.#e
                  .getMutationCache()
                  .build(this.#e, this.options)),
                this.#n.addObserver(this),
                this.#n.execute(e)
              );
            }
            #i() {
              let e = this.#n?.state ?? (0, i.R)();
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
            #o(e) {
              o.V.batch(() => {
                if (this.#r && this.hasListeners()) {
                  let t = this.#t.variables,
                    n = this.#t.context;
                  e?.type === "success"
                    ? (this.#r.onSuccess?.(e.data, t, n),
                      this.#r.onSettled?.(e.data, null, t, n))
                    : e?.type === "error" &&
                      (this.#r.onError?.(e.error, t, n),
                      this.#r.onSettled?.(void 0, e.error, t, n));
                }
                this.listeners.forEach((e) => {
                  e(this.#t);
                });
              });
            }
          },
          u = n(30202),
          c = n(86290);
        function d(e, t) {
          let n = (0, u.NL)(t),
            [i] = r.useState(() => new s(n, e));
          r.useEffect(() => {
            i.setOptions(e);
          }, [i, e]);
          let l = r.useSyncExternalStore(
              r.useCallback((e) => i.subscribe(o.V.batchCalls(e)), [i]),
              () => i.getCurrentResult(),
              () => i.getCurrentResult()
            ),
            a = r.useCallback(
              (e, t) => {
                i.mutate(e, t).catch(c.Z);
              },
              [i]
            );
          if (l.error && (0, c.L)(i.options.throwOnError, [l.error]))
            throw l.error;
          return { ...l, mutate: a, mutateAsync: l.mutate };
        }
      },
      29138: function (e, t, n) {
        "use strict";
        n.d(t, {
          dk: function () {
            return f;
          },
          fw: function () {
            return d;
          },
          zH: function () {
            return c;
          },
        });
        var r = n(67294),
          i = n(68354),
          o = n(57110),
          l = n(40947),
          a = n(14872),
          s = n(83619);
        let u = (0, r.createContext)(null);
        function c() {
          var e, t;
          return null !=
            (t = null == (e = (0, r.useContext)(u)) ? void 0 : e.value)
            ? t
            : void 0;
        }
        function d() {
          let [e, t] = (0, r.useState)([]);
          return [
            e.length > 0 ? e.join(" ") : void 0,
            (0, r.useMemo)(
              () =>
                function (e) {
                  let n = (0, i.z)(
                      (e) => (
                        t((t) => [...t, e]),
                        () =>
                          t((t) => {
                            let n = t.slice(),
                              r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n;
                          })
                      )
                    ),
                    o = (0, r.useMemo)(
                      () => ({
                        register: n,
                        slot: e.slot,
                        name: e.name,
                        props: e.props,
                        value: e.value,
                      }),
                      [n, e.slot, e.name, e.props, e.value]
                    );
                  return r.createElement(u.Provider, { value: o }, e.children);
                },
              [t]
            ),
          ];
        }
        u.displayName = "DescriptionContext";
        let f = Object.assign(
          (0, s.yV)(function (e, t) {
            let n = (0, r.useId)(),
              i = (0, a.B)(),
              { id: c = "headlessui-description-".concat(n), ...d } = e,
              f = (function e() {
                let t = (0, r.useContext)(u);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent."
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t)
                  );
                }
                return t;
              })(),
              h = (0, l.T)(t);
            (0, o.e)(() => f.register(c), [c, f.register]);
            let p = i || !1,
              m = (0, r.useMemo)(
                () => ({ ...f.slot, disabled: p }),
                [f.slot, p]
              ),
              g = { ref: h, ...f.props, id: c };
            return (0, s.L6)()({
              ourProps: g,
              theirProps: d,
              slot: m,
              defaultTag: "p",
              name: f.name || "Description",
            });
          }),
          {}
        );
      },
      95509: function (e, t, n) {
        "use strict";
        let r, i, o, l;
        n.d(t, {
          Vq: function () {
            return ep;
          },
          EM: function () {
            return ef;
          },
          $N: function () {
            return eh;
          },
        });
        var a = n(67294),
          s = n(71237),
          u = n(32784),
          c = n(70494),
          d = n(68354),
          f = n(80157),
          h = n(57110),
          p = n(54555),
          m = n(382),
          g = n(99523),
          v = n(85272),
          y = n(99915),
          x = n(77563),
          b = n(40947),
          k = n(38213),
          w = n(1365),
          S = n(89834),
          C = n(16116),
          E = n(83619),
          O = n(29138),
          T = n(5655);
        function j() {
          let e = (0, a.useRef)(!1);
          return (
            (0, h.e)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        }
        var _ = n(68916),
          P = n(54751);
        function M(e, t) {
          let n = (0, a.useRef)([]),
            r = (0, d.z)(e);
          (0, a.useEffect)(() => {
            let e = [...n.current];
            for (let [i, o] of t.entries())
              if (n.current[i] !== o) {
                let i = r(t, e);
                return (n.current = t), i;
              }
          }, [r, ...t]);
        }
        var L = n(51228),
          N = n(58766);
        let A = [];
        !(function (e) {
          function t() {
            "loading" !== document.readyState &&
              (e(), document.removeEventListener("DOMContentLoaded", t));
          }
          "undefined" != typeof document &&
            (document.addEventListener("DOMContentLoaded", t), t());
        })(() => {
          function e(e) {
            if (
              !(e.target instanceof HTMLElement) ||
              e.target === document.body ||
              A[0] === e.target
            )
              return;
            let t = e.target;
            (t = t.closest(N.y)),
              A.unshift(null != t ? t : e.target),
              (A = A.filter((e) => null != e && e.isConnected)).splice(10);
          }
          window.addEventListener("click", e, { capture: !0 }),
            window.addEventListener("mousedown", e, { capture: !0 }),
            window.addEventListener("focus", e, { capture: !0 }),
            document.body.addEventListener("click", e, { capture: !0 }),
            document.body.addEventListener("mousedown", e, { capture: !0 }),
            document.body.addEventListener("focus", e, { capture: !0 });
        });
        var I = n(27378);
        function R(e) {
          if (!e) return new Set();
          if ("function" == typeof e) return new Set(e());
          let t = new Set();
          for (let n of e.current)
            n.current instanceof HTMLElement && t.add(n.current);
          return t;
        }
        var D =
          (((r = D || {})[(r.None = 0)] = "None"),
          (r[(r.InitialFocus = 1)] = "InitialFocus"),
          (r[(r.TabLock = 2)] = "TabLock"),
          (r[(r.FocusLock = 4)] = "FocusLock"),
          (r[(r.RestoreFocus = 8)] = "RestoreFocus"),
          (r[(r.AutoFocus = 16)] = "AutoFocus"),
          r);
        let F = Object.assign(
          (0, E.yV)(function (e, t) {
            let n = (0, a.useRef)(null),
              r = (0, b.T)(n, t),
              {
                initialFocus: i,
                initialFocusFallback: o,
                containers: l,
                features: s = 15,
                ...f
              } = e;
            (0, x.H)() || (s = 0);
            let h = (0, g.i)(n);
            (function (e, t) {
              let { ownerDocument: n } = t,
                r = !!(8 & e),
                i = (function () {
                  let e =
                      !(arguments.length > 0) ||
                      void 0 === arguments[0] ||
                      arguments[0],
                    t = (0, a.useRef)(A.slice());
                  return (
                    M(
                      (e, n) => {
                        let [r] = e,
                          [i] = n;
                        !0 === i &&
                          !1 === r &&
                          (0, I.Y)(() => {
                            t.current.splice(0);
                          }),
                          !1 === i && !0 === r && (t.current = A.slice());
                      },
                      [e, A, t]
                    ),
                    (0, d.z)(() => {
                      var e;
                      return null !=
                        (e = t.current.find((e) => null != e && e.isConnected))
                        ? e
                        : null;
                    })
                  );
                })(r);
              M(() => {
                r ||
                  ((null == n ? void 0 : n.activeElement) ===
                    (null == n ? void 0 : n.body) &&
                    (0, N.C5)(i()));
              }, [r]),
                (0, _.L)(() => {
                  r && (0, N.C5)(i());
                });
            })(s, { ownerDocument: h });
            let p = (function (e, t) {
              let {
                  ownerDocument: n,
                  container: r,
                  initialFocus: i,
                  initialFocusFallback: o,
                } = t,
                l = (0, a.useRef)(null),
                s = (0, c.g)(!!(1 & e), "focus-trap#initial-focus"),
                u = j();
              return (
                M(() => {
                  if (0 === e) return;
                  if (!s) {
                    null != o && o.current && (0, N.C5)(o.current);
                    return;
                  }
                  let t = r.current;
                  t &&
                    (0, I.Y)(() => {
                      if (!u.current) return;
                      let r = null == n ? void 0 : n.activeElement;
                      if (null != i && i.current) {
                        if ((null == i ? void 0 : i.current) === r) {
                          l.current = r;
                          return;
                        }
                      } else if (t.contains(r)) {
                        l.current = r;
                        return;
                      }
                      if (null != i && i.current) (0, N.C5)(i.current);
                      else {
                        if (16 & e) {
                          if (
                            (0, N.jA)(t, N.TO.First | N.TO.AutoFocus) !==
                            N.fE.Error
                          )
                            return;
                        } else if ((0, N.jA)(t, N.TO.First) !== N.fE.Error)
                          return;
                        if (
                          null != o &&
                          o.current &&
                          ((0, N.C5)(o.current),
                          (null == n ? void 0 : n.activeElement) === o.current)
                        )
                          return;
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        );
                      }
                      l.current = null == n ? void 0 : n.activeElement;
                    });
                }, [o, s, e]),
                l
              );
            })(s, {
              ownerDocument: h,
              container: n,
              initialFocus: i,
              initialFocusFallback: o,
            });
            (function (e, t) {
              let {
                  ownerDocument: n,
                  container: r,
                  containers: i,
                  previousActiveElement: o,
                } = t,
                l = j(),
                a = !!(4 & e);
              (0, u.O)(
                null == n ? void 0 : n.defaultView,
                "focus",
                (e) => {
                  if (!a || !l.current) return;
                  let t = R(i);
                  r.current instanceof HTMLElement && t.add(r.current);
                  let n = o.current;
                  if (!n) return;
                  let s = e.target;
                  s && s instanceof HTMLElement
                    ? z(t, s)
                      ? ((o.current = s), (0, N.C5)(s))
                      : (e.preventDefault(), e.stopPropagation(), (0, N.C5)(n))
                    : (0, N.C5)(o.current);
                },
                !0
              );
            })(s, {
              ownerDocument: h,
              container: n,
              containers: l,
              previousActiveElement: p,
            });
            let m = (0, P.l)(),
              v = (0, d.z)((e) => {
                let t = n.current;
                t &&
                  (0, C.E)(m.current, {
                    [P.N.Forwards]: () => {
                      (0, N.jA)(t, N.TO.First, {
                        skipElements: [e.relatedTarget, o],
                      });
                    },
                    [P.N.Backwards]: () => {
                      (0, N.jA)(t, N.TO.Last, {
                        skipElements: [e.relatedTarget, o],
                      });
                    },
                  });
              }),
              y = (0, c.g)(!!(2 & s), "focus-trap#tab-lock"),
              k = (0, T.G)(),
              w = (0, a.useRef)(!1),
              S = (0, E.L6)();
            return a.createElement(
              a.Fragment,
              null,
              y &&
                a.createElement(L._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: v,
                  features: L.x.Focusable,
                }),
              S({
                ourProps: {
                  ref: r,
                  onKeyDown(e) {
                    "Tab" == e.key &&
                      ((w.current = !0),
                      k.requestAnimationFrame(() => {
                        w.current = !1;
                      }));
                  },
                  onBlur(e) {
                    if (!(4 & s)) return;
                    let t = R(l);
                    n.current instanceof HTMLElement && t.add(n.current);
                    let r = e.relatedTarget;
                    r instanceof HTMLElement &&
                      "true" !== r.dataset.headlessuiFocusGuard &&
                      (z(t, r) ||
                        (w.current
                          ? (0, N.jA)(
                              n.current,
                              (0, C.E)(m.current, {
                                [P.N.Forwards]: () => N.TO.Next,
                                [P.N.Backwards]: () => N.TO.Previous,
                              }) | N.TO.WrapAround,
                              { relativeTo: e.target }
                            )
                          : e.target instanceof HTMLElement &&
                            (0, N.C5)(e.target)));
                  },
                },
                theirProps: f,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              y &&
                a.createElement(L._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: v,
                  features: L.x.Focusable,
                })
            );
          }),
          { features: D }
        );
        function z(e, t) {
          for (let n of e) if (n.contains(t)) return !0;
          return !1;
        }
        var H = n(23811),
          B = n(39438),
          U = n(2015),
          V = n(51573);
        function W(e) {
          var t;
          return (
            !!(
              e.enter ||
              e.enterFrom ||
              e.enterTo ||
              e.leave ||
              e.leaveFrom ||
              e.leaveTo
            ) ||
            (null != (t = e.as) ? t : $) !== a.Fragment ||
            1 === a.Children.count(e.children)
          );
        }
        let q = (0, a.createContext)(null);
        q.displayName = "TransitionContext";
        var K = (((i = K || {}).Visible = "visible"), (i.Hidden = "hidden"), i);
        let Y = (0, a.createContext)(null);
        function Q(e) {
          return "children" in e
            ? Q(e.children)
            : e.current
                .filter((e) => {
                  let { el: t } = e;
                  return null !== t.current;
                })
                .filter((e) => {
                  let { state: t } = e;
                  return "visible" === t;
                }).length > 0;
        }
        function Z(e, t) {
          let n = (0, B.E)(e),
            r = (0, a.useRef)([]),
            i = j(),
            o = (0, T.G)(),
            l = (0, d.z)(function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : E.l4.Hidden,
                l = r.current.findIndex((t) => {
                  let { el: n } = t;
                  return n === e;
                });
              -1 !== l &&
                ((0, C.E)(t, {
                  [E.l4.Unmount]() {
                    r.current.splice(l, 1);
                  },
                  [E.l4.Hidden]() {
                    r.current[l].state = "hidden";
                  },
                }),
                o.microTask(() => {
                  var e;
                  !Q(r) && i.current && (null == (e = n.current) || e.call(n));
                }));
            }),
            s = (0, d.z)((e) => {
              let t = r.current.find((t) => {
                let { el: n } = t;
                return n === e;
              });
              return (
                t
                  ? "visible" !== t.state && (t.state = "visible")
                  : r.current.push({ el: e, state: "visible" }),
                () => l(e, E.l4.Unmount)
              );
            }),
            u = (0, a.useRef)([]),
            c = (0, a.useRef)(Promise.resolve()),
            f = (0, a.useRef)({ enter: [], leave: [] }),
            h = (0, d.z)((e, n, r) => {
              u.current.splice(0),
                t &&
                  (t.chains.current[n] = t.chains.current[n].filter((t) => {
                    let [n] = t;
                    return n !== e;
                  })),
                null == t ||
                  t.chains.current[n].push([
                    e,
                    new Promise((e) => {
                      u.current.push(e);
                    }),
                  ]),
                null == t ||
                  t.chains.current[n].push([
                    e,
                    new Promise((e) => {
                      Promise.all(
                        f.current[n].map((e) => {
                          let [t, n] = e;
                          return n;
                        })
                      ).then(() => e());
                    }),
                  ]),
                "enter" === n
                  ? (c.current = c.current
                      .then(() => (null == t ? void 0 : t.wait.current))
                      .then(() => r(n)))
                  : r(n);
            }),
            p = (0, d.z)((e, t, n) => {
              Promise.all(
                f.current[t].splice(0).map((e) => {
                  let [t, n] = e;
                  return n;
                })
              )
                .then(() => {
                  var e;
                  null == (e = u.current.shift()) || e();
                })
                .then(() => n(t));
            });
          return (0, a.useMemo)(
            () => ({
              children: r,
              register: s,
              unregister: l,
              onStart: h,
              onStop: p,
              wait: c,
              chains: f,
            }),
            [s, l, r, h, p, f, c]
          );
        }
        Y.displayName = "NestingContext";
        let $ = a.Fragment,
          G = E.VN.RenderStrategy,
          J = (0, E.yV)(function (e, t) {
            let { show: n, appear: r = !1, unmount: i = !0, ...o } = e,
              l = (0, a.useRef)(null),
              s = W(e),
              u = (0, b.T)(...(s ? [l, t] : null === t ? [] : [t]));
            (0, x.H)();
            let c = (0, w.oJ)();
            if (
              (void 0 === n &&
                null !== c &&
                (n = (c & w.ZM.Open) === w.ZM.Open),
              void 0 === n)
            )
              throw Error(
                "A <Transition /> is used but it is missing a `show={true | false}` prop."
              );
            let [f, p] = (0, a.useState)(n ? "visible" : "hidden"),
              m = Z(() => {
                n || p("hidden");
              }),
              [g, v] = (0, a.useState)(!0),
              y = (0, a.useRef)([n]);
            (0, h.e)(() => {
              !1 !== g &&
                y.current[y.current.length - 1] !== n &&
                (y.current.push(n), v(!1));
            }, [y, n]);
            let k = (0, a.useMemo)(
              () => ({ show: n, appear: r, initial: g }),
              [n, r, g]
            );
            (0, h.e)(() => {
              n ? p("visible") : Q(m) || null === l.current || p("hidden");
            }, [n, m]);
            let S = { unmount: i },
              C = (0, d.z)(() => {
                var t;
                g && v(!1), null == (t = e.beforeEnter) || t.call(e);
              }),
              O = (0, d.z)(() => {
                var t;
                g && v(!1), null == (t = e.beforeLeave) || t.call(e);
              }),
              T = (0, E.L6)();
            return a.createElement(
              Y.Provider,
              { value: m },
              a.createElement(
                q.Provider,
                { value: k },
                T({
                  ourProps: {
                    ...S,
                    as: a.Fragment,
                    children: a.createElement(X, {
                      ref: u,
                      ...S,
                      ...o,
                      beforeEnter: C,
                      beforeLeave: O,
                    }),
                  },
                  theirProps: {},
                  defaultTag: a.Fragment,
                  features: G,
                  visible: "visible" === f,
                  name: "Transition",
                })
              )
            );
          }),
          X = (0, E.yV)(function (e, t) {
            var n, r;
            let {
                transition: i = !0,
                beforeEnter: o,
                afterEnter: l,
                beforeLeave: s,
                afterLeave: u,
                enter: c,
                enterFrom: f,
                enterTo: p,
                entered: m,
                leave: g,
                leaveFrom: v,
                leaveTo: y,
                ...k
              } = e,
              [S, O] = (0, a.useState)(null),
              T = (0, a.useRef)(null),
              j = W(e),
              _ = (0, b.T)(...(j ? [T, t, O] : null === t ? [] : [t])),
              P = null == (n = k.unmount) || n ? E.l4.Unmount : E.l4.Hidden,
              {
                show: M,
                appear: L,
                initial: N,
              } = (function () {
                let e = (0, a.useContext)(q);
                if (null === e)
                  throw Error(
                    "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                  );
                return e;
              })(),
              [A, I] = (0, a.useState)(M ? "visible" : "hidden"),
              R = (function () {
                let e = (0, a.useContext)(Y);
                if (null === e)
                  throw Error(
                    "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                  );
                return e;
              })(),
              { register: D, unregister: F } = R;
            (0, h.e)(() => D(T), [D, T]),
              (0, h.e)(() => {
                if (P === E.l4.Hidden && T.current) {
                  if (M && "visible" !== A) {
                    I("visible");
                    return;
                  }
                  return (0, C.E)(A, {
                    hidden: () => F(T),
                    visible: () => D(T),
                  });
                }
              }, [A, T, D, F, M, P]);
            let z = (0, x.H)();
            (0, h.e)(() => {
              if (j && z && "visible" === A && null === T.current)
                throw Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?"
                );
            }, [T, A, z, j]);
            let H = N && !L,
              B = L && M && N,
              K = (0, a.useRef)(!1),
              J = Z(() => {
                K.current || (I("hidden"), F(T));
              }, R),
              X = (0, d.z)((e) => {
                (K.current = !0),
                  J.onStart(T, e ? "enter" : "leave", (e) => {
                    "enter" === e
                      ? null == o || o()
                      : "leave" === e && (null == s || s());
                  });
              }),
              ee = (0, d.z)((e) => {
                let t = e ? "enter" : "leave";
                (K.current = !1),
                  J.onStop(T, t, (e) => {
                    "enter" === e
                      ? null == l || l()
                      : "leave" === e && (null == u || u());
                  }),
                  "leave" !== t || Q(J) || (I("hidden"), F(T));
              });
            (0, a.useEffect)(() => {
              (j && i) || (X(M), ee(M));
            }, [M, j, i]);
            let et = !(!i || !j || !z || H),
              [, en] = (0, U.Y)(et, S, M, { start: X, end: ee }),
              er = (0, E.oA)({
                ref: _,
                className:
                  (null ==
                  (r = (0, V.A)(
                    k.className,
                    B && c,
                    B && f,
                    en.enter && c,
                    en.enter && en.closed && f,
                    en.enter && !en.closed && p,
                    en.leave && g,
                    en.leave && !en.closed && v,
                    en.leave && en.closed && y,
                    !en.transition && M && m
                  ))
                    ? void 0
                    : r.trim()) || void 0,
                ...(0, U.X)(en),
              }),
              ei = 0;
            "visible" === A && (ei |= w.ZM.Open),
              "hidden" === A && (ei |= w.ZM.Closed),
              en.enter && (ei |= w.ZM.Opening),
              en.leave && (ei |= w.ZM.Closing);
            let eo = (0, E.L6)();
            return a.createElement(
              Y.Provider,
              { value: J },
              a.createElement(
                w.up,
                { value: ei },
                eo({
                  ourProps: er,
                  theirProps: k,
                  defaultTag: $,
                  features: G,
                  visible: "visible" === A,
                  name: "Transition.Child",
                })
              )
            );
          }),
          ee = (0, E.yV)(function (e, t) {
            let n = null !== (0, a.useContext)(q),
              r = null !== (0, w.oJ)();
            return a.createElement(
              a.Fragment,
              null,
              !n && r
                ? a.createElement(J, { ref: t, ...e })
                : a.createElement(X, { ref: t, ...e })
            );
          }),
          et = Object.assign(J, { Child: ee, Root: J });
        var en =
            (((o = en || {})[(o.Open = 0)] = "Open"),
            (o[(o.Closed = 1)] = "Closed"),
            o),
          er = (((l = er || {})[(l.SetTitleId = 0)] = "SetTitleId"), l);
        let ei = {
            0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
          },
          eo = (0, a.createContext)(null);
        function el(e) {
          let t = (0, a.useContext)(eo);
          if (null === t) {
            let t = Error(
              "<".concat(e, " /> is missing a parent <Dialog /> component.")
            );
            throw (
              (Error.captureStackTrace && Error.captureStackTrace(t, el), t)
            );
          }
          return t;
        }
        function ea(e, t) {
          return (0, C.E)(t.type, ei, e, t);
        }
        eo.displayName = "DialogContext";
        let es = (0, E.yV)(function (e, t) {
            let n = (0, a.useId)(),
              {
                id: r = "headlessui-dialog-".concat(n),
                open: i,
                onClose: o,
                initialFocus: l,
                role: C = "dialog",
                autoFocus: T = !0,
                __demoMode: j = !1,
                unmount: _ = !1,
                ...P
              } = e,
              M = (0, a.useRef)(!1);
            C =
              "dialog" === C || "alertdialog" === C
                ? C
                : (M.current ||
                    ((M.current = !0),
                    console.warn(
                      "Invalid role [".concat(
                        C,
                        "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."
                      )
                    )),
                  "dialog");
            let L = (0, w.oJ)();
            void 0 === i && null !== L && (i = (L & w.ZM.Open) === w.ZM.Open);
            let N = (0, a.useRef)(null),
              A = (0, b.T)(N, t),
              I = (0, g.i)(N),
              R = i ? 0 : 1,
              [z, B] = (0, a.useReducer)(ea, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, a.createRef)(),
              }),
              U = (0, d.z)(() => o(!1)),
              V = (0, d.z)((e) => B({ type: 0, id: e })),
              W = !!(0, x.H)() && 0 === R,
              [q, K] = (0, H.kF)(),
              Y = (0, v.H1)(),
              { resolveContainers: Q } = (0, v.vs)({
                mainTreeNode: Y,
                portals: q,
                defaultContainers: [
                  {
                    get current() {
                      var Z;
                      return null != (Z = z.panelRef.current) ? Z : N.current;
                    },
                  },
                ],
              }),
              $ = null !== L && (L & w.ZM.Closing) === w.ZM.Closing;
            (0, f.s)(!j && !$ && W, {
              allowed: (0, d.z)(() => {
                var e, t;
                return [
                  null !=
                  (t =
                    null == (e = N.current)
                      ? void 0
                      : e.closest("[data-headlessui-portal]"))
                    ? t
                    : null,
                ];
              }),
              disallowed: (0, d.z)(() => {
                var e;
                return [
                  null !=
                  (e =
                    null == Y
                      ? void 0
                      : Y.closest("body > *:not(#headlessui-portal-root)"))
                    ? e
                    : null,
                ];
              }),
            }),
              (0, m.O)(W, Q, (e) => {
                e.preventDefault(), U();
              }),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "undefined" != typeof document
                      ? document.defaultView
                      : null,
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = (0, c.g)(e, "escape");
                (0, u.O)(t, "keydown", (e) => {
                  r && (e.defaultPrevented || (e.key === s.R.Escape && n(e)));
                });
              })(W, null == I ? void 0 : I.defaultView, (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.activeElement &&
                    "blur" in document.activeElement &&
                    "function" == typeof document.activeElement.blur &&
                    document.activeElement.blur(),
                  U();
              }),
              (0, y.P)(!j && !$ && W, I, Q),
              (0, p.m)(W, N, U);
            let [G, J] = (0, O.fw)(),
              X = (0, a.useMemo)(
                () => [
                  { dialogState: R, close: U, setTitleId: V, unmount: _ },
                  z,
                ],
                [R, z, U, V, _]
              ),
              ee = (0, a.useMemo)(() => ({ open: 0 === R }), [R]),
              et = {
                ref: A,
                id: r,
                role: C,
                tabIndex: -1,
                "aria-modal": j ? void 0 : 0 === R || void 0,
                "aria-labelledby": z.titleId,
                "aria-describedby": G,
                unmount: _,
              },
              en = !(function () {
                var e;
                let [t] = (0, a.useState)(() =>
                    "function" == typeof window.matchMedia
                      ? window.matchMedia("(pointer: coarse)")
                      : null
                  ),
                  [n, r] = (0, a.useState)(
                    null != (e = null == t ? void 0 : t.matches) && e
                  );
                return (
                  (0, h.e)(() => {
                    if (t)
                      return (
                        t.addEventListener("change", e),
                        () => t.removeEventListener("change", e)
                      );
                    function e(e) {
                      r(e.matches);
                    }
                  }, [t]),
                  n
                );
              })(),
              er = D.None;
            W &&
              !j &&
              ((er |= D.RestoreFocus),
              (er |= D.TabLock),
              T && (er |= D.AutoFocus),
              en && (er |= D.InitialFocus));
            let ei = (0, E.L6)();
            return a.createElement(
              w.uu,
              null,
              a.createElement(
                S.O,
                { force: !0 },
                a.createElement(
                  H.h_,
                  null,
                  a.createElement(
                    eo.Provider,
                    { value: X },
                    a.createElement(
                      H.wA,
                      { target: N },
                      a.createElement(
                        S.O,
                        { force: !1 },
                        a.createElement(
                          J,
                          { slot: ee },
                          a.createElement(
                            K,
                            null,
                            a.createElement(
                              F,
                              {
                                initialFocus: l,
                                initialFocusFallback: N,
                                containers: Q,
                                features: er,
                              },
                              a.createElement(
                                k.Z,
                                { value: U },
                                ei({
                                  ourProps: et,
                                  theirProps: P,
                                  slot: ee,
                                  defaultTag: eu,
                                  features: ec,
                                  visible: 0 === R,
                                  name: "Dialog",
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            );
          }),
          eu = "div",
          ec = E.VN.RenderStrategy | E.VN.Static,
          ed = (0, E.yV)(function (e, t) {
            let { transition: n = !1, open: r, ...i } = e,
              o = (0, w.oJ)(),
              l = e.hasOwnProperty("open") || null !== o,
              s = e.hasOwnProperty("onClose");
            if (!l && !s)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!l)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!s)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if (!o && "boolean" != typeof e.open)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                  e.open
                )
              );
            if ("function" != typeof e.onClose)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                  e.onClose
                )
              );
            return (void 0 !== r || n) && !i.static
              ? a.createElement(
                  v.Jl,
                  null,
                  a.createElement(
                    et,
                    { show: r, transition: n, unmount: i.unmount },
                    a.createElement(es, { ref: t, ...i })
                  )
                )
              : a.createElement(
                  v.Jl,
                  null,
                  a.createElement(es, { ref: t, open: r, ...i })
                );
          }),
          ef = (0, E.yV)(function (e, t) {
            let n = (0, a.useId)(),
              {
                id: r = "headlessui-dialog-panel-".concat(n),
                transition: i = !1,
                ...o
              } = e,
              [{ dialogState: l, unmount: s }, u] = el("Dialog.Panel"),
              c = (0, b.T)(t, u.panelRef),
              f = (0, a.useMemo)(() => ({ open: 0 === l }), [l]),
              h = (0, d.z)((e) => {
                e.stopPropagation();
              }),
              p = i ? ee : a.Fragment,
              m = (0, E.L6)();
            return a.createElement(
              p,
              { ...(i ? { unmount: s } : {}) },
              m({
                ourProps: { ref: c, id: r, onClick: h },
                theirProps: o,
                slot: f,
                defaultTag: "div",
                name: "Dialog.Panel",
              })
            );
          }),
          eh =
            ((0, E.yV)(function (e, t) {
              let { transition: n = !1, ...r } = e,
                [{ dialogState: i, unmount: o }] = el("Dialog.Backdrop"),
                l = (0, a.useMemo)(() => ({ open: 0 === i }), [i]),
                s = n ? ee : a.Fragment,
                u = (0, E.L6)();
              return a.createElement(
                s,
                { ...(n ? { unmount: o } : {}) },
                u({
                  ourProps: { ref: t, "aria-hidden": !0 },
                  theirProps: r,
                  slot: l,
                  defaultTag: "div",
                  name: "Dialog.Backdrop",
                })
              );
            }),
            (0, E.yV)(function (e, t) {
              let n = (0, a.useId)(),
                { id: r = "headlessui-dialog-title-".concat(n), ...i } = e,
                [{ dialogState: o, setTitleId: l }] = el("Dialog.Title"),
                s = (0, b.T)(t);
              (0, a.useEffect)(() => (l(r), () => l(null)), [r, l]);
              let u = (0, a.useMemo)(() => ({ open: 0 === o }), [o]);
              return (0, E.L6)()({
                ourProps: { ref: s, id: r },
                theirProps: i,
                slot: u,
                defaultTag: "h2",
                name: "Dialog.Title",
              });
            })),
          ep = Object.assign(ed, { Panel: ef, Title: eh, Description: O.dk });
      },
      80157: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return c;
          },
        });
        var r = n(61622),
          i = n(23233),
          o = n(70494),
          l = n(57110);
        let a = new Map(),
          s = new Map();
        function u(e) {
          var t;
          let n = null != (t = s.get(e)) ? t : 0;
          return (
            s.set(e, n + 1),
            0 !== n ||
              (a.set(e, {
                "aria-hidden": e.getAttribute("aria-hidden"),
                inert: e.inert,
              }),
              e.setAttribute("aria-hidden", "true"),
              (e.inert = !0)),
            () =>
              (function (e) {
                var t;
                let n = null != (t = s.get(e)) ? t : 1;
                if ((1 === n ? s.delete(e) : s.set(e, n - 1), 1 !== n)) return;
                let r = a.get(e);
                r &&
                  (null === r["aria-hidden"]
                    ? e.removeAttribute("aria-hidden")
                    : e.setAttribute("aria-hidden", r["aria-hidden"]),
                  (e.inert = r.inert),
                  a.delete(e));
              })(e)
          );
        }
        function c(e) {
          let { allowed: t, disallowed: n } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = (0, o.g)(e, "inert-others");
          (0, l.e)(() => {
            var e, o;
            if (!a) return;
            let l = (0, r.k)();
            for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
              t && l.add(u(t));
            let s = null != (o = null == t ? void 0 : t()) ? o : [];
            for (let e of s) {
              if (!e) continue;
              let t = (0, i.r)(e);
              if (!t) continue;
              let n = e.parentElement;
              for (; n && n !== t.body; ) {
                for (let e of n.children)
                  s.some((t) => e.contains(t)) || l.add(u(e));
                n = n.parentElement;
              }
            }
            return l.dispose;
          }, [a, t, n]);
        }
      },
      14872: function (e, t, n) {
        "use strict";
        n.d(t, {
          B: function () {
            return o;
          },
        });
        var r = n(67294);
        let i = (0, r.createContext)(void 0);
        function o() {
          return (0, r.useContext)(i);
        }
      },
      27461: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let i = r.forwardRef(function (e, t) {
          let { title: n, titleId: i, ...o } = e;
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
                "aria-labelledby": i,
              },
              o
            ),
            n ? r.createElement("title", { id: i }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
            })
          );
        });
        t.Z = i;
      },
      91594: function (e, t, n) {
        "use strict";
        var r = n(67294);
        let i = r.forwardRef(function (e, t) {
          let { title: n, titleId: i, ...o } = e;
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
                "aria-labelledby": i,
              },
              o
            ),
            n ? r.createElement("title", { id: i }, n) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12",
            })
          );
        });
        t.Z = i;
      },
      96659: function (e, t, n) {
        "use strict";
        n.d(t, {
          UG: function () {
            return nP;
          },
        });
        var r = {};
        n.r(r),
          n.d(r, {
            boolean: function () {
              return g;
            },
            booleanish: function () {
              return v;
            },
            commaOrSpaceSeparated: function () {
              return w;
            },
            commaSeparated: function () {
              return k;
            },
            number: function () {
              return x;
            },
            overloadedBoolean: function () {
              return y;
            },
            spaceSeparated: function () {
              return b;
            },
          });
        var i = {};
        n.r(i),
          n.d(i, {
            attentionMarkers: function () {
              return tT;
            },
            contentInitial: function () {
              return tk;
            },
            disable: function () {
              return tj;
            },
            document: function () {
              return tb;
            },
            flow: function () {
              return tS;
            },
            flowInitial: function () {
              return tw;
            },
            insideSpan: function () {
              return tO;
            },
            string: function () {
              return tC;
            },
            text: function () {
              return tE;
            },
          });
        let o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
          l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
          a = {};
        function s(e, t) {
          return ((t || a).jsx ? l : o).test(e);
        }
        let u = /[ \t\n\f\r]/g;
        function c(e) {
          return "" === e.replace(u, "");
        }
        class d {
          constructor(e, t, n) {
            (this.normal = t), (this.property = e), n && (this.space = n);
          }
        }
        function f(e, t) {
          let n = {},
            r = {};
          for (let t of e)
            Object.assign(n, t.property), Object.assign(r, t.normal);
          return new d(n, r, t);
        }
        function h(e) {
          return e.toLowerCase();
        }
        (d.prototype.normal = {}),
          (d.prototype.property = {}),
          (d.prototype.space = void 0);
        class p {
          constructor(e, t) {
            (this.attribute = t), (this.property = e);
          }
        }
        (p.prototype.attribute = ""),
          (p.prototype.booleanish = !1),
          (p.prototype.boolean = !1),
          (p.prototype.commaOrSpaceSeparated = !1),
          (p.prototype.commaSeparated = !1),
          (p.prototype.defined = !1),
          (p.prototype.mustUseProperty = !1),
          (p.prototype.number = !1),
          (p.prototype.overloadedBoolean = !1),
          (p.prototype.property = ""),
          (p.prototype.spaceSeparated = !1),
          (p.prototype.space = void 0);
        let m = 0,
          g = S(),
          v = S(),
          y = S(),
          x = S(),
          b = S(),
          k = S(),
          w = S();
        function S() {
          return 2 ** ++m;
        }
        let C = Object.keys(r);
        class E extends p {
          constructor(e, t, n, i) {
            var o, l;
            let a = -1;
            if ((super(e, t), i && (this.space = i), "number" == typeof n))
              for (; ++a < C.length; ) {
                let e = C[a];
                (o = C[a]), (l = (n & r[e]) === r[e]) && (this[o] = l);
              }
          }
        }
        function O(e) {
          let t = {},
            n = {};
          for (let [r, i] of Object.entries(e.properties)) {
            let o = new E(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(r) &&
              (o.mustUseProperty = !0),
              (t[r] = o),
              (n[h(r)] = r),
              (n[h(o.attribute)] = r);
          }
          return new d(t, n, e.space);
        }
        E.prototype.defined = !0;
        let T = O({
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: v,
            ariaAutoComplete: null,
            ariaBusy: v,
            ariaChecked: v,
            ariaColCount: x,
            ariaColIndex: x,
            ariaColSpan: x,
            ariaControls: b,
            ariaCurrent: null,
            ariaDescribedBy: b,
            ariaDetails: null,
            ariaDisabled: v,
            ariaDropEffect: b,
            ariaErrorMessage: null,
            ariaExpanded: v,
            ariaFlowTo: b,
            ariaGrabbed: v,
            ariaHasPopup: null,
            ariaHidden: v,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: b,
            ariaLevel: x,
            ariaLive: null,
            ariaModal: v,
            ariaMultiLine: v,
            ariaMultiSelectable: v,
            ariaOrientation: null,
            ariaOwns: b,
            ariaPlaceholder: null,
            ariaPosInSet: x,
            ariaPressed: v,
            ariaReadOnly: v,
            ariaRelevant: null,
            ariaRequired: v,
            ariaRoleDescription: b,
            ariaRowCount: x,
            ariaRowIndex: x,
            ariaRowSpan: x,
            ariaSelected: v,
            ariaSetSize: x,
            ariaSort: null,
            ariaValueMax: x,
            ariaValueMin: x,
            ariaValueNow: x,
            ariaValueText: null,
            role: null,
          },
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
        });
        function j(e, t) {
          return t in e ? e[t] : t;
        }
        function _(e, t) {
          return j(e, t.toLowerCase());
        }
        let P = O({
            attributes: {
              acceptcharset: "accept-charset",
              classname: "class",
              htmlfor: "for",
              httpequiv: "http-equiv",
            },
            mustUseProperty: ["checked", "multiple", "muted", "selected"],
            properties: {
              abbr: null,
              accept: k,
              acceptCharset: b,
              accessKey: b,
              action: null,
              allow: null,
              allowFullScreen: g,
              allowPaymentRequest: g,
              allowUserMedia: g,
              alt: null,
              as: null,
              async: g,
              autoCapitalize: null,
              autoComplete: b,
              autoFocus: g,
              autoPlay: g,
              blocking: b,
              capture: null,
              charSet: null,
              checked: g,
              cite: null,
              className: b,
              cols: x,
              colSpan: null,
              content: null,
              contentEditable: v,
              controls: g,
              controlsList: b,
              coords: x | k,
              crossOrigin: null,
              data: null,
              dateTime: null,
              decoding: null,
              default: g,
              defer: g,
              dir: null,
              dirName: null,
              disabled: g,
              download: y,
              draggable: v,
              encType: null,
              enterKeyHint: null,
              fetchPriority: null,
              form: null,
              formAction: null,
              formEncType: null,
              formMethod: null,
              formNoValidate: g,
              formTarget: null,
              headers: b,
              height: x,
              hidden: g,
              high: x,
              href: null,
              hrefLang: null,
              htmlFor: b,
              httpEquiv: b,
              id: null,
              imageSizes: null,
              imageSrcSet: null,
              inert: g,
              inputMode: null,
              integrity: null,
              is: null,
              isMap: g,
              itemId: null,
              itemProp: b,
              itemRef: b,
              itemScope: g,
              itemType: b,
              kind: null,
              label: null,
              lang: null,
              language: null,
              list: null,
              loading: null,
              loop: g,
              low: x,
              manifest: null,
              max: null,
              maxLength: x,
              media: null,
              method: null,
              min: null,
              minLength: x,
              multiple: g,
              muted: g,
              name: null,
              nonce: null,
              noModule: g,
              noValidate: g,
              onAbort: null,
              onAfterPrint: null,
              onAuxClick: null,
              onBeforeMatch: null,
              onBeforePrint: null,
              onBeforeToggle: null,
              onBeforeUnload: null,
              onBlur: null,
              onCancel: null,
              onCanPlay: null,
              onCanPlayThrough: null,
              onChange: null,
              onClick: null,
              onClose: null,
              onContextLost: null,
              onContextMenu: null,
              onContextRestored: null,
              onCopy: null,
              onCueChange: null,
              onCut: null,
              onDblClick: null,
              onDrag: null,
              onDragEnd: null,
              onDragEnter: null,
              onDragExit: null,
              onDragLeave: null,
              onDragOver: null,
              onDragStart: null,
              onDrop: null,
              onDurationChange: null,
              onEmptied: null,
              onEnded: null,
              onError: null,
              onFocus: null,
              onFormData: null,
              onHashChange: null,
              onInput: null,
              onInvalid: null,
              onKeyDown: null,
              onKeyPress: null,
              onKeyUp: null,
              onLanguageChange: null,
              onLoad: null,
              onLoadedData: null,
              onLoadedMetadata: null,
              onLoadEnd: null,
              onLoadStart: null,
              onMessage: null,
              onMessageError: null,
              onMouseDown: null,
              onMouseEnter: null,
              onMouseLeave: null,
              onMouseMove: null,
              onMouseOut: null,
              onMouseOver: null,
              onMouseUp: null,
              onOffline: null,
              onOnline: null,
              onPageHide: null,
              onPageShow: null,
              onPaste: null,
              onPause: null,
              onPlay: null,
              onPlaying: null,
              onPopState: null,
              onProgress: null,
              onRateChange: null,
              onRejectionHandled: null,
              onReset: null,
              onResize: null,
              onScroll: null,
              onScrollEnd: null,
              onSecurityPolicyViolation: null,
              onSeeked: null,
              onSeeking: null,
              onSelect: null,
              onSlotChange: null,
              onStalled: null,
              onStorage: null,
              onSubmit: null,
              onSuspend: null,
              onTimeUpdate: null,
              onToggle: null,
              onUnhandledRejection: null,
              onUnload: null,
              onVolumeChange: null,
              onWaiting: null,
              onWheel: null,
              open: g,
              optimum: x,
              pattern: null,
              ping: b,
              placeholder: null,
              playsInline: g,
              popover: null,
              popoverTarget: null,
              popoverTargetAction: null,
              poster: null,
              preload: null,
              readOnly: g,
              referrerPolicy: null,
              rel: b,
              required: g,
              reversed: g,
              rows: x,
              rowSpan: x,
              sandbox: b,
              scope: null,
              scoped: g,
              seamless: g,
              selected: g,
              shadowRootClonable: g,
              shadowRootDelegatesFocus: g,
              shadowRootMode: null,
              shape: null,
              size: x,
              sizes: null,
              slot: null,
              span: x,
              spellCheck: v,
              src: null,
              srcDoc: null,
              srcLang: null,
              srcSet: null,
              start: x,
              step: null,
              style: null,
              tabIndex: x,
              target: null,
              title: null,
              translate: null,
              type: null,
              typeMustMatch: g,
              useMap: null,
              value: v,
              width: x,
              wrap: null,
              writingSuggestions: null,
              align: null,
              aLink: null,
              archive: b,
              axis: null,
              background: null,
              bgColor: null,
              border: x,
              borderColor: null,
              bottomMargin: x,
              cellPadding: null,
              cellSpacing: null,
              char: null,
              charOff: null,
              classId: null,
              clear: null,
              code: null,
              codeBase: null,
              codeType: null,
              color: null,
              compact: g,
              declare: g,
              event: null,
              face: null,
              frame: null,
              frameBorder: null,
              hSpace: x,
              leftMargin: x,
              link: null,
              longDesc: null,
              lowSrc: null,
              marginHeight: x,
              marginWidth: x,
              noResize: g,
              noHref: g,
              noShade: g,
              noWrap: g,
              object: null,
              profile: null,
              prompt: null,
              rev: null,
              rightMargin: x,
              rules: null,
              scheme: null,
              scrolling: v,
              standby: null,
              summary: null,
              text: null,
              topMargin: x,
              valueType: null,
              version: null,
              vAlign: null,
              vLink: null,
              vSpace: x,
              allowTransparency: null,
              autoCorrect: null,
              autoSave: null,
              disablePictureInPicture: g,
              disableRemotePlayback: g,
              prefix: null,
              property: null,
              results: x,
              security: null,
              unselectable: null,
            },
            space: "html",
            transform: _,
          }),
          M = O({
            attributes: {
              accentHeight: "accent-height",
              alignmentBaseline: "alignment-baseline",
              arabicForm: "arabic-form",
              baselineShift: "baseline-shift",
              capHeight: "cap-height",
              className: "class",
              clipPath: "clip-path",
              clipRule: "clip-rule",
              colorInterpolation: "color-interpolation",
              colorInterpolationFilters: "color-interpolation-filters",
              colorProfile: "color-profile",
              colorRendering: "color-rendering",
              crossOrigin: "crossorigin",
              dataType: "datatype",
              dominantBaseline: "dominant-baseline",
              enableBackground: "enable-background",
              fillOpacity: "fill-opacity",
              fillRule: "fill-rule",
              floodColor: "flood-color",
              floodOpacity: "flood-opacity",
              fontFamily: "font-family",
              fontSize: "font-size",
              fontSizeAdjust: "font-size-adjust",
              fontStretch: "font-stretch",
              fontStyle: "font-style",
              fontVariant: "font-variant",
              fontWeight: "font-weight",
              glyphName: "glyph-name",
              glyphOrientationHorizontal: "glyph-orientation-horizontal",
              glyphOrientationVertical: "glyph-orientation-vertical",
              hrefLang: "hreflang",
              horizAdvX: "horiz-adv-x",
              horizOriginX: "horiz-origin-x",
              horizOriginY: "horiz-origin-y",
              imageRendering: "image-rendering",
              letterSpacing: "letter-spacing",
              lightingColor: "lighting-color",
              markerEnd: "marker-end",
              markerMid: "marker-mid",
              markerStart: "marker-start",
              navDown: "nav-down",
              navDownLeft: "nav-down-left",
              navDownRight: "nav-down-right",
              navLeft: "nav-left",
              navNext: "nav-next",
              navPrev: "nav-prev",
              navRight: "nav-right",
              navUp: "nav-up",
              navUpLeft: "nav-up-left",
              navUpRight: "nav-up-right",
              onAbort: "onabort",
              onActivate: "onactivate",
              onAfterPrint: "onafterprint",
              onBeforePrint: "onbeforeprint",
              onBegin: "onbegin",
              onCancel: "oncancel",
              onCanPlay: "oncanplay",
              onCanPlayThrough: "oncanplaythrough",
              onChange: "onchange",
              onClick: "onclick",
              onClose: "onclose",
              onCopy: "oncopy",
              onCueChange: "oncuechange",
              onCut: "oncut",
              onDblClick: "ondblclick",
              onDrag: "ondrag",
              onDragEnd: "ondragend",
              onDragEnter: "ondragenter",
              onDragExit: "ondragexit",
              onDragLeave: "ondragleave",
              onDragOver: "ondragover",
              onDragStart: "ondragstart",
              onDrop: "ondrop",
              onDurationChange: "ondurationchange",
              onEmptied: "onemptied",
              onEnd: "onend",
              onEnded: "onended",
              onError: "onerror",
              onFocus: "onfocus",
              onFocusIn: "onfocusin",
              onFocusOut: "onfocusout",
              onHashChange: "onhashchange",
              onInput: "oninput",
              onInvalid: "oninvalid",
              onKeyDown: "onkeydown",
              onKeyPress: "onkeypress",
              onKeyUp: "onkeyup",
              onLoad: "onload",
              onLoadedData: "onloadeddata",
              onLoadedMetadata: "onloadedmetadata",
              onLoadStart: "onloadstart",
              onMessage: "onmessage",
              onMouseDown: "onmousedown",
              onMouseEnter: "onmouseenter",
              onMouseLeave: "onmouseleave",
              onMouseMove: "onmousemove",
              onMouseOut: "onmouseout",
              onMouseOver: "onmouseover",
              onMouseUp: "onmouseup",
              onMouseWheel: "onmousewheel",
              onOffline: "onoffline",
              onOnline: "ononline",
              onPageHide: "onpagehide",
              onPageShow: "onpageshow",
              onPaste: "onpaste",
              onPause: "onpause",
              onPlay: "onplay",
              onPlaying: "onplaying",
              onPopState: "onpopstate",
              onProgress: "onprogress",
              onRateChange: "onratechange",
              onRepeat: "onrepeat",
              onReset: "onreset",
              onResize: "onresize",
              onScroll: "onscroll",
              onSeeked: "onseeked",
              onSeeking: "onseeking",
              onSelect: "onselect",
              onShow: "onshow",
              onStalled: "onstalled",
              onStorage: "onstorage",
              onSubmit: "onsubmit",
              onSuspend: "onsuspend",
              onTimeUpdate: "ontimeupdate",
              onToggle: "ontoggle",
              onUnload: "onunload",
              onVolumeChange: "onvolumechange",
              onWaiting: "onwaiting",
              onZoom: "onzoom",
              overlinePosition: "overline-position",
              overlineThickness: "overline-thickness",
              paintOrder: "paint-order",
              panose1: "panose-1",
              pointerEvents: "pointer-events",
              referrerPolicy: "referrerpolicy",
              renderingIntent: "rendering-intent",
              shapeRendering: "shape-rendering",
              stopColor: "stop-color",
              stopOpacity: "stop-opacity",
              strikethroughPosition: "strikethrough-position",
              strikethroughThickness: "strikethrough-thickness",
              strokeDashArray: "stroke-dasharray",
              strokeDashOffset: "stroke-dashoffset",
              strokeLineCap: "stroke-linecap",
              strokeLineJoin: "stroke-linejoin",
              strokeMiterLimit: "stroke-miterlimit",
              strokeOpacity: "stroke-opacity",
              strokeWidth: "stroke-width",
              tabIndex: "tabindex",
              textAnchor: "text-anchor",
              textDecoration: "text-decoration",
              textRendering: "text-rendering",
              transformOrigin: "transform-origin",
              typeOf: "typeof",
              underlinePosition: "underline-position",
              underlineThickness: "underline-thickness",
              unicodeBidi: "unicode-bidi",
              unicodeRange: "unicode-range",
              unitsPerEm: "units-per-em",
              vAlphabetic: "v-alphabetic",
              vHanging: "v-hanging",
              vIdeographic: "v-ideographic",
              vMathematical: "v-mathematical",
              vectorEffect: "vector-effect",
              vertAdvY: "vert-adv-y",
              vertOriginX: "vert-origin-x",
              vertOriginY: "vert-origin-y",
              wordSpacing: "word-spacing",
              writingMode: "writing-mode",
              xHeight: "x-height",
              playbackOrder: "playbackorder",
              timelineBegin: "timelinebegin",
            },
            properties: {
              about: w,
              accentHeight: x,
              accumulate: null,
              additive: null,
              alignmentBaseline: null,
              alphabetic: x,
              amplitude: x,
              arabicForm: null,
              ascent: x,
              attributeName: null,
              attributeType: null,
              azimuth: x,
              bandwidth: null,
              baselineShift: null,
              baseFrequency: null,
              baseProfile: null,
              bbox: null,
              begin: null,
              bias: x,
              by: null,
              calcMode: null,
              capHeight: x,
              className: b,
              clip: null,
              clipPath: null,
              clipPathUnits: null,
              clipRule: null,
              color: null,
              colorInterpolation: null,
              colorInterpolationFilters: null,
              colorProfile: null,
              colorRendering: null,
              content: null,
              contentScriptType: null,
              contentStyleType: null,
              crossOrigin: null,
              cursor: null,
              cx: null,
              cy: null,
              d: null,
              dataType: null,
              defaultAction: null,
              descent: x,
              diffuseConstant: x,
              direction: null,
              display: null,
              dur: null,
              divisor: x,
              dominantBaseline: null,
              download: g,
              dx: null,
              dy: null,
              edgeMode: null,
              editable: null,
              elevation: x,
              enableBackground: null,
              end: null,
              event: null,
              exponent: x,
              externalResourcesRequired: null,
              fill: null,
              fillOpacity: x,
              fillRule: null,
              filter: null,
              filterRes: null,
              filterUnits: null,
              floodColor: null,
              floodOpacity: null,
              focusable: null,
              focusHighlight: null,
              fontFamily: null,
              fontSize: null,
              fontSizeAdjust: null,
              fontStretch: null,
              fontStyle: null,
              fontVariant: null,
              fontWeight: null,
              format: null,
              fr: null,
              from: null,
              fx: null,
              fy: null,
              g1: k,
              g2: k,
              glyphName: k,
              glyphOrientationHorizontal: null,
              glyphOrientationVertical: null,
              glyphRef: null,
              gradientTransform: null,
              gradientUnits: null,
              handler: null,
              hanging: x,
              hatchContentUnits: null,
              hatchUnits: null,
              height: null,
              href: null,
              hrefLang: null,
              horizAdvX: x,
              horizOriginX: x,
              horizOriginY: x,
              id: null,
              ideographic: x,
              imageRendering: null,
              initialVisibility: null,
              in: null,
              in2: null,
              intercept: x,
              k: x,
              k1: x,
              k2: x,
              k3: x,
              k4: x,
              kernelMatrix: w,
              kernelUnitLength: null,
              keyPoints: null,
              keySplines: null,
              keyTimes: null,
              kerning: null,
              lang: null,
              lengthAdjust: null,
              letterSpacing: null,
              lightingColor: null,
              limitingConeAngle: x,
              local: null,
              markerEnd: null,
              markerMid: null,
              markerStart: null,
              markerHeight: null,
              markerUnits: null,
              markerWidth: null,
              mask: null,
              maskContentUnits: null,
              maskUnits: null,
              mathematical: null,
              max: null,
              media: null,
              mediaCharacterEncoding: null,
              mediaContentEncodings: null,
              mediaSize: x,
              mediaTime: null,
              method: null,
              min: null,
              mode: null,
              name: null,
              navDown: null,
              navDownLeft: null,
              navDownRight: null,
              navLeft: null,
              navNext: null,
              navPrev: null,
              navRight: null,
              navUp: null,
              navUpLeft: null,
              navUpRight: null,
              numOctaves: null,
              observer: null,
              offset: null,
              onAbort: null,
              onActivate: null,
              onAfterPrint: null,
              onBeforePrint: null,
              onBegin: null,
              onCancel: null,
              onCanPlay: null,
              onCanPlayThrough: null,
              onChange: null,
              onClick: null,
              onClose: null,
              onCopy: null,
              onCueChange: null,
              onCut: null,
              onDblClick: null,
              onDrag: null,
              onDragEnd: null,
              onDragEnter: null,
              onDragExit: null,
              onDragLeave: null,
              onDragOver: null,
              onDragStart: null,
              onDrop: null,
              onDurationChange: null,
              onEmptied: null,
              onEnd: null,
              onEnded: null,
              onError: null,
              onFocus: null,
              onFocusIn: null,
              onFocusOut: null,
              onHashChange: null,
              onInput: null,
              onInvalid: null,
              onKeyDown: null,
              onKeyPress: null,
              onKeyUp: null,
              onLoad: null,
              onLoadedData: null,
              onLoadedMetadata: null,
              onLoadStart: null,
              onMessage: null,
              onMouseDown: null,
              onMouseEnter: null,
              onMouseLeave: null,
              onMouseMove: null,
              onMouseOut: null,
              onMouseOver: null,
              onMouseUp: null,
              onMouseWheel: null,
              onOffline: null,
              onOnline: null,
              onPageHide: null,
              onPageShow: null,
              onPaste: null,
              onPause: null,
              onPlay: null,
              onPlaying: null,
              onPopState: null,
              onProgress: null,
              onRateChange: null,
              onRepeat: null,
              onReset: null,
              onResize: null,
              onScroll: null,
              onSeeked: null,
              onSeeking: null,
              onSelect: null,
              onShow: null,
              onStalled: null,
              onStorage: null,
              onSubmit: null,
              onSuspend: null,
              onTimeUpdate: null,
              onToggle: null,
              onUnload: null,
              onVolumeChange: null,
              onWaiting: null,
              onZoom: null,
              opacity: null,
              operator: null,
              order: null,
              orient: null,
              orientation: null,
              origin: null,
              overflow: null,
              overlay: null,
              overlinePosition: x,
              overlineThickness: x,
              paintOrder: null,
              panose1: null,
              path: null,
              pathLength: x,
              patternContentUnits: null,
              patternTransform: null,
              patternUnits: null,
              phase: null,
              ping: b,
              pitch: null,
              playbackOrder: null,
              pointerEvents: null,
              points: null,
              pointsAtX: x,
              pointsAtY: x,
              pointsAtZ: x,
              preserveAlpha: null,
              preserveAspectRatio: null,
              primitiveUnits: null,
              propagate: null,
              property: w,
              r: null,
              radius: null,
              referrerPolicy: null,
              refX: null,
              refY: null,
              rel: w,
              rev: w,
              renderingIntent: null,
              repeatCount: null,
              repeatDur: null,
              requiredExtensions: w,
              requiredFeatures: w,
              requiredFonts: w,
              requiredFormats: w,
              resource: null,
              restart: null,
              result: null,
              rotate: null,
              rx: null,
              ry: null,
              scale: null,
              seed: null,
              shapeRendering: null,
              side: null,
              slope: null,
              snapshotTime: null,
              specularConstant: x,
              specularExponent: x,
              spreadMethod: null,
              spacing: null,
              startOffset: null,
              stdDeviation: null,
              stemh: null,
              stemv: null,
              stitchTiles: null,
              stopColor: null,
              stopOpacity: null,
              strikethroughPosition: x,
              strikethroughThickness: x,
              string: null,
              stroke: null,
              strokeDashArray: w,
              strokeDashOffset: null,
              strokeLineCap: null,
              strokeLineJoin: null,
              strokeMiterLimit: x,
              strokeOpacity: x,
              strokeWidth: null,
              style: null,
              surfaceScale: x,
              syncBehavior: null,
              syncBehaviorDefault: null,
              syncMaster: null,
              syncTolerance: null,
              syncToleranceDefault: null,
              systemLanguage: w,
              tabIndex: x,
              tableValues: null,
              target: null,
              targetX: x,
              targetY: x,
              textAnchor: null,
              textDecoration: null,
              textRendering: null,
              textLength: null,
              timelineBegin: null,
              title: null,
              transformBehavior: null,
              type: null,
              typeOf: w,
              to: null,
              transform: null,
              transformOrigin: null,
              u1: null,
              u2: null,
              underlinePosition: x,
              underlineThickness: x,
              unicode: null,
              unicodeBidi: null,
              unicodeRange: null,
              unitsPerEm: x,
              values: null,
              vAlphabetic: x,
              vMathematical: x,
              vectorEffect: null,
              vHanging: x,
              vIdeographic: x,
              version: null,
              vertAdvY: x,
              vertOriginX: x,
              vertOriginY: x,
              viewBox: null,
              viewTarget: null,
              visibility: null,
              width: null,
              widths: null,
              wordSpacing: null,
              writingMode: null,
              x: null,
              x1: null,
              x2: null,
              xChannelSelector: null,
              xHeight: x,
              y: null,
              y1: null,
              y2: null,
              yChannelSelector: null,
              z: null,
              zoomAndPan: null,
            },
            space: "svg",
            transform: j,
          }),
          L = O({
            properties: {
              xLinkActuate: null,
              xLinkArcRole: null,
              xLinkHref: null,
              xLinkRole: null,
              xLinkShow: null,
              xLinkTitle: null,
              xLinkType: null,
            },
            space: "xlink",
            transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          }),
          N = O({
            attributes: { xmlnsxlink: "xmlns:xlink" },
            properties: { xmlnsXLink: null, xmlns: null },
            space: "xmlns",
            transform: _,
          }),
          A = O({
            properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
            space: "xml",
            transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          }),
          I = f([T, P, L, N, A], "html"),
          R = f([T, M, L, N, A], "svg"),
          D = /[A-Z]/g,
          F = /-[a-z]/g,
          z = /^data[-\w.:]+$/i;
        function H(e) {
          return "-" + e.toLowerCase();
        }
        function B(e) {
          return e.charAt(1).toUpperCase();
        }
        let U = {
          classId: "classID",
          dataType: "datatype",
          itemId: "itemID",
          strokeDashArray: "strokeDasharray",
          strokeDashOffset: "strokeDashoffset",
          strokeLineCap: "strokeLinecap",
          strokeLineJoin: "strokeLinejoin",
          strokeMiterLimit: "strokeMiterlimit",
          typeOf: "typeof",
          xLinkActuate: "xlinkActuate",
          xLinkArcRole: "xlinkArcrole",
          xLinkHref: "xlinkHref",
          xLinkRole: "xlinkRole",
          xLinkShow: "xlinkShow",
          xLinkTitle: "xlinkTitle",
          xLinkType: "xlinkType",
          xmlnsXLink: "xmlnsXlink",
        };
        var V = n(41476);
        let W = K("end"),
          q = K("start");
        function K(e) {
          return function (t) {
            let n = (t && t.position && t.position[e]) || {};
            if (
              "number" == typeof n.line &&
              n.line > 0 &&
              "number" == typeof n.column &&
              n.column > 0
            )
              return {
                line: n.line,
                column: n.column,
                offset:
                  "number" == typeof n.offset && n.offset > -1
                    ? n.offset
                    : void 0,
              };
          };
        }
        function Y(e) {
          return e && "object" == typeof e
            ? "position" in e || "type" in e
              ? Z(e.position)
              : "start" in e || "end" in e
              ? Z(e)
              : "line" in e || "column" in e
              ? Q(e)
              : ""
            : "";
        }
        function Q(e) {
          return $(e && e.line) + ":" + $(e && e.column);
        }
        function Z(e) {
          return Q(e && e.start) + "-" + Q(e && e.end);
        }
        function $(e) {
          return e && "number" == typeof e ? e : 1;
        }
        class G extends Error {
          constructor(e, t, n) {
            super(), "string" == typeof t && ((n = t), (t = void 0));
            let r = "",
              i = {},
              o = !1;
            if (
              (t &&
                (i =
                  "line" in t && "column" in t
                    ? { place: t }
                    : "start" in t && "end" in t
                    ? { place: t }
                    : "type" in t
                    ? { ancestors: [t], place: t.position }
                    : { ...t }),
              "string" == typeof e
                ? (r = e)
                : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
              !i.ruleId && !i.source && "string" == typeof n)
            ) {
              let e = n.indexOf(":");
              -1 === e
                ? (i.ruleId = n)
                : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
            }
            if (!i.place && i.ancestors && i.ancestors) {
              let e = i.ancestors[i.ancestors.length - 1];
              e && (i.place = e.position);
            }
            let l = i.place && "start" in i.place ? i.place.start : i.place;
            (this.ancestors = i.ancestors || void 0),
              (this.cause = i.cause || void 0),
              (this.column = l ? l.column : void 0),
              (this.fatal = void 0),
              this.file,
              (this.message = r),
              (this.line = l ? l.line : void 0),
              (this.name = Y(i.place) || "1:1"),
              (this.place = i.place || void 0),
              (this.reason = this.message),
              (this.ruleId = i.ruleId || void 0),
              (this.source = i.source || void 0),
              (this.stack =
                o && i.cause && "string" == typeof i.cause.stack
                  ? i.cause.stack
                  : ""),
              this.actual,
              this.expected,
              this.note,
              this.url;
          }
        }
        (G.prototype.file = ""),
          (G.prototype.name = ""),
          (G.prototype.reason = ""),
          (G.prototype.message = ""),
          (G.prototype.stack = ""),
          (G.prototype.column = void 0),
          (G.prototype.line = void 0),
          (G.prototype.ancestors = void 0),
          (G.prototype.cause = void 0),
          (G.prototype.fatal = void 0),
          (G.prototype.place = void 0),
          (G.prototype.ruleId = void 0),
          (G.prototype.source = void 0);
        let J = {}.hasOwnProperty,
          X = new Map(),
          ee = /[A-Z]/g,
          et = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
          en = new Set(["td", "th"]),
          er = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
        function ei(e, t, n) {
          return "element" === t.type
            ? (function (e, t, n) {
                let r = e.schema,
                  i = r;
                "svg" === t.tagName.toLowerCase() &&
                  "html" === r.space &&
                  ((i = R), (e.schema = i)),
                  e.ancestors.push(t);
                let o = es(e, t.tagName, !1),
                  l = (function (e, t) {
                    let n, r;
                    let i = {};
                    for (r in t.properties)
                      if ("children" !== r && J.call(t.properties, r)) {
                        let o = (function (e, t, n) {
                          let r = (function (e, t) {
                            let n = h(t),
                              r = t,
                              i = p;
                            if (n in e.normal) return e.property[e.normal[n]];
                            if (
                              n.length > 4 &&
                              "data" === n.slice(0, 4) &&
                              z.test(t)
                            ) {
                              if ("-" === t.charAt(4)) {
                                let e = t.slice(5).replace(F, B);
                                r =
                                  "data" +
                                  e.charAt(0).toUpperCase() +
                                  e.slice(1);
                              } else {
                                let e = t.slice(4);
                                if (!F.test(e)) {
                                  let n = e.replace(D, H);
                                  "-" !== n.charAt(0) && (n = "-" + n),
                                    (t = "data" + n);
                                }
                              }
                              i = E;
                            }
                            return new i(r, t);
                          })(e.schema, t);
                          if (
                            !(
                              null == n ||
                              ("number" == typeof n && Number.isNaN(n))
                            )
                          ) {
                            if (
                              (Array.isArray(n) &&
                                (n = r.commaSeparated
                                  ? (function (e, t) {
                                      let n = {};
                                      return (
                                        "" === e[e.length - 1] ? [...e, ""] : e
                                      )
                                        .join(
                                          (n.padRight ? " " : "") +
                                            "," +
                                            (!1 === n.padLeft ? "" : " ")
                                        )
                                        .trim();
                                    })(n)
                                  : n.join(" ").trim()),
                              "style" === r.property)
                            ) {
                              let t =
                                "object" == typeof n
                                  ? n
                                  : (function (e, t) {
                                      try {
                                        return V(t, { reactCompat: !0 });
                                      } catch (n) {
                                        if (e.ignoreInvalidStyle) return {};
                                        let t = new G(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: n,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((t.file = e.filePath || void 0),
                                          (t.url =
                                            er +
                                            "#cannot-parse-style-attribute"),
                                          t)
                                        );
                                      }
                                    })(e, String(n));
                              return (
                                "css" === e.stylePropertyNameCase &&
                                  (t = (function (e) {
                                    let t;
                                    let n = {};
                                    for (t in e)
                                      J.call(e, t) &&
                                        (n[
                                          (function (e) {
                                            let t = e.replace(ee, ec);
                                            return (
                                              "ms-" === t.slice(0, 3) &&
                                                (t = "-" + t),
                                              t
                                            );
                                          })(t)
                                        ] = e[t]);
                                    return n;
                                  })(t)),
                                ["style", t]
                              );
                            }
                            return [
                              "react" === e.elementAttributeNameCase && r.space
                                ? U[r.property] || r.property
                                : r.attribute,
                              n,
                            ];
                          }
                        })(e, r, t.properties[r]);
                        if (o) {
                          let [r, l] = o;
                          e.tableCellAlignToStyle &&
                          "align" === r &&
                          "string" == typeof l &&
                          en.has(t.tagName)
                            ? (n = l)
                            : (i[r] = l);
                        }
                      }
                    return (
                      n &&
                        ((i.style || (i.style = {}))[
                          "css" === e.stylePropertyNameCase
                            ? "text-align"
                            : "textAlign"
                        ] = n),
                      i
                    );
                  })(e, t),
                  a = ea(e, t);
                return (
                  et.has(t.tagName) &&
                    (a = a.filter(function (e) {
                      return (
                        "string" != typeof e ||
                        !("object" == typeof e
                          ? "text" === e.type && c(e.value)
                          : c(e))
                      );
                    })),
                  eo(e, l, o, t),
                  el(l, a),
                  e.ancestors.pop(),
                  (e.schema = r),
                  e.create(t, o, l, n)
                );
              })(e, t, n)
            : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater) {
                  let n = t.data.estree.body[0];
                  return n.type, e.evaluater.evaluateExpression(n.expression);
                }
                eu(e, t.position);
              })(e, t)
            : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
            ? (function (e, t, n) {
                let r = e.schema,
                  i = r;
                "svg" === t.name &&
                  "html" === r.space &&
                  ((i = R), (e.schema = i)),
                  e.ancestors.push(t);
                let o = null === t.name ? e.Fragment : es(e, t.name, !0),
                  l = (function (e, t) {
                    let n = {};
                    for (let r of t.attributes)
                      if ("mdxJsxExpressionAttribute" === r.type) {
                        if (r.data && r.data.estree && e.evaluater) {
                          let t = r.data.estree.body[0];
                          t.type;
                          let i = t.expression;
                          i.type;
                          let o = i.properties[0];
                          o.type,
                            Object.assign(
                              n,
                              e.evaluater.evaluateExpression(o.argument)
                            );
                        } else eu(e, t.position);
                      } else {
                        let i;
                        let o = r.name;
                        if (r.value && "object" == typeof r.value) {
                          if (
                            r.value.data &&
                            r.value.data.estree &&
                            e.evaluater
                          ) {
                            let t = r.value.data.estree.body[0];
                            t.type,
                              (i = e.evaluater.evaluateExpression(
                                t.expression
                              ));
                          } else eu(e, t.position);
                        } else i = null === r.value || r.value;
                        n[o] = i;
                      }
                    return n;
                  })(e, t),
                  a = ea(e, t);
                return (
                  eo(e, l, o, t),
                  el(l, a),
                  e.ancestors.pop(),
                  (e.schema = r),
                  e.create(t, o, l, n)
                );
              })(e, t, n)
            : "mdxjsEsm" === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater)
                  return e.evaluater.evaluateProgram(t.data.estree);
                eu(e, t.position);
              })(e, t)
            : "root" === t.type
            ? (function (e, t, n) {
                let r = {};
                return el(r, ea(e, t)), e.create(t, e.Fragment, r, n);
              })(e, t, n)
            : "text" === t.type
            ? t.value
            : void 0;
        }
        function eo(e, t, n, r) {
          "string" != typeof n &&
            n !== e.Fragment &&
            e.passNode &&
            (t.node = r);
        }
        function el(e, t) {
          if (t.length > 0) {
            let n = t.length > 1 ? t : t[0];
            n && (e.children = n);
          }
        }
        function ea(e, t) {
          let n = [],
            r = -1,
            i = e.passKeys ? new Map() : X;
          for (; ++r < t.children.length; ) {
            let o;
            let l = t.children[r];
            if (e.passKeys) {
              let e =
                "element" === l.type
                  ? l.tagName
                  : "mdxJsxFlowElement" === l.type ||
                    "mdxJsxTextElement" === l.type
                  ? l.name
                  : void 0;
              if (e) {
                let t = i.get(e) || 0;
                (o = e + "-" + t), i.set(e, t + 1);
              }
            }
            let a = ei(e, l, o);
            void 0 !== a && n.push(a);
          }
          return n;
        }
        function es(e, t, n) {
          let r;
          if (n) {
            if (t.includes(".")) {
              let e;
              let n = t.split("."),
                i = -1;
              for (; ++i < n.length; ) {
                let t = s(n[i])
                  ? { type: "Identifier", name: n[i] }
                  : { type: "Literal", value: n[i] };
                e = e
                  ? {
                      type: "MemberExpression",
                      object: e,
                      property: t,
                      computed: !!(i && "Literal" === t.type),
                      optional: !1,
                    }
                  : t;
              }
              r = e;
            } else
              r =
                s(t) && !/^[a-z]/.test(t)
                  ? { type: "Identifier", name: t }
                  : { type: "Literal", value: t };
          } else r = { type: "Literal", value: t };
          if ("Literal" === r.type) {
            let t = r.value;
            return J.call(e.components, t) ? e.components[t] : t;
          }
          if (e.evaluater) return e.evaluater.evaluateExpression(r);
          eu(e);
        }
        function eu(e, t) {
          let n = new G("Cannot handle MDX estrees without `createEvaluater`", {
            ancestors: e.ancestors,
            place: t,
            ruleId: "mdx-estree",
            source: "hast-util-to-jsx-runtime",
          });
          throw (
            ((n.file = e.filePath || void 0),
            (n.url = er + "#cannot-handle-mdx-estrees-without-createevaluater"),
            n)
          );
        }
        function ec(e) {
          return "-" + e.toLowerCase();
        }
        let ed = {
          action: ["form"],
          cite: ["blockquote", "del", "ins", "q"],
          data: ["object"],
          formAction: ["button", "input"],
          href: ["a", "area", "base", "link"],
          icon: ["menuitem"],
          itemId: null,
          manifest: ["html"],
          ping: ["a", "area"],
          poster: ["video"],
          src: [
            "audio",
            "embed",
            "iframe",
            "img",
            "input",
            "script",
            "source",
            "track",
            "video",
          ],
        };
        var ef = n(85893);
        n(67294);
        let eh = {};
        function ep(e, t, n) {
          if (e && "object" == typeof e) {
            if ("value" in e) return "html" !== e.type || n ? e.value : "";
            if (t && "alt" in e && e.alt) return e.alt;
            if ("children" in e) return em(e.children, t, n);
          }
          return Array.isArray(e) ? em(e, t, n) : "";
        }
        function em(e, t, n) {
          let r = [],
            i = -1;
          for (; ++i < e.length; ) r[i] = ep(e[i], t, n);
          return r.join("");
        }
        function eg(e, t, n, r) {
          let i;
          let o = e.length,
            l = 0;
          if (
            ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
            (n = n > 0 ? n : 0),
            r.length < 1e4)
          )
            (i = Array.from(r)).unshift(t, n), e.splice(...i);
          else
            for (n && e.splice(t, n); l < r.length; )
              (i = r.slice(l, l + 1e4)).unshift(t, 0),
                e.splice(...i),
                (l += 1e4),
                (t += 1e4);
        }
        function ev(e, t) {
          return e.length > 0 ? (eg(e, e.length, 0, t), e) : t;
        }
        class ey {
          constructor(e) {
            (this.left = e ? [...e] : []), (this.right = []);
          }
          get(e) {
            if (e < 0 || e >= this.left.length + this.right.length)
              throw RangeError(
                "Cannot access index `" +
                  e +
                  "` in a splice buffer of size `" +
                  (this.left.length + this.right.length) +
                  "`"
              );
            return e < this.left.length
              ? this.left[e]
              : this.right[this.right.length - e + this.left.length - 1];
          }
          get length() {
            return this.left.length + this.right.length;
          }
          shift() {
            return this.setCursor(0), this.right.pop();
          }
          slice(e, t) {
            let n = null == t ? Number.POSITIVE_INFINITY : t;
            return n < this.left.length
              ? this.left.slice(e, n)
              : e > this.left.length
              ? this.right
                  .slice(
                    this.right.length - n + this.left.length,
                    this.right.length - e + this.left.length
                  )
                  .reverse()
              : this.left
                  .slice(e)
                  .concat(
                    this.right
                      .slice(this.right.length - n + this.left.length)
                      .reverse()
                  );
          }
          splice(e, t, n) {
            this.setCursor(Math.trunc(e));
            let r = this.right.splice(
              this.right.length - (t || 0),
              Number.POSITIVE_INFINITY
            );
            return n && ex(this.left, n), r.reverse();
          }
          pop() {
            return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
          }
          push(e) {
            this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
          }
          pushMany(e) {
            this.setCursor(Number.POSITIVE_INFINITY), ex(this.left, e);
          }
          unshift(e) {
            this.setCursor(0), this.right.push(e);
          }
          unshiftMany(e) {
            this.setCursor(0), ex(this.right, e.reverse());
          }
          setCursor(e) {
            if (
              e !== this.left.length &&
              (!(e > this.left.length) || 0 !== this.right.length) &&
              (!(e < 0) || 0 !== this.left.length)
            ) {
              if (e < this.left.length) {
                let t = this.left.splice(e, Number.POSITIVE_INFINITY);
                ex(this.right, t.reverse());
              } else {
                let t = this.right.splice(
                  this.left.length + this.right.length - e,
                  Number.POSITIVE_INFINITY
                );
                ex(this.left, t.reverse());
              }
            }
          }
        }
        function ex(e, t) {
          let n = 0;
          if (t.length < 1e4) e.push(...t);
          else
            for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
        }
        function eb(e) {
          let t, n, r, i, o, l, a;
          let s = {},
            u = -1,
            c = new ey(e);
          for (; ++u < c.length; ) {
            for (; u in s; ) u = s[u];
            if (
              ((t = c.get(u)),
              u &&
                "chunkFlow" === t[1].type &&
                "listItemPrefix" === c.get(u - 1)[1].type &&
                ((r = 0) < (l = t[1]._tokenizer.events).length &&
                  "lineEndingBlank" === l[r][1].type &&
                  (r += 2),
                r < l.length && "content" === l[r][1].type))
            )
              for (; ++r < l.length && "content" !== l[r][1].type; )
                "chunkText" === l[r][1].type &&
                  ((l[r][1]._isInFirstContentOfListItem = !0), r++);
            if ("enter" === t[0])
              t[1].contentType &&
                (Object.assign(
                  s,
                  (function (e, t) {
                    let n, r;
                    let i = e.get(t)[1],
                      o = e.get(t)[2],
                      l = t - 1,
                      a = [],
                      s = i._tokenizer;
                    !s &&
                      ((s = o.parser[i.contentType](i.start)),
                      i._contentTypeTextTrailing &&
                        (s._contentTypeTextTrailing = !0));
                    let u = s.events,
                      c = [],
                      d = {},
                      f = -1,
                      h = i,
                      p = 0,
                      m = 0,
                      g = [0];
                    for (; h; ) {
                      for (; e.get(++l)[1] !== h; );
                      a.push(l),
                        !h._tokenizer &&
                          ((n = o.sliceStream(h)),
                          h.next || n.push(null),
                          r && s.defineSkip(h.start),
                          h._isInFirstContentOfListItem &&
                            (s._gfmTasklistFirstContentOfListItem = !0),
                          s.write(n),
                          h._isInFirstContentOfListItem &&
                            (s._gfmTasklistFirstContentOfListItem = void 0)),
                        (r = h),
                        (h = h.next);
                    }
                    for (h = i; ++f < u.length; )
                      "exit" === u[f][0] &&
                        "enter" === u[f - 1][0] &&
                        u[f][1].type === u[f - 1][1].type &&
                        u[f][1].start.line !== u[f][1].end.line &&
                        ((m = f + 1),
                        g.push(m),
                        (h._tokenizer = void 0),
                        (h.previous = void 0),
                        (h = h.next));
                    for (
                      s.events = [],
                        h
                          ? ((h._tokenizer = void 0), (h.previous = void 0))
                          : g.pop(),
                        f = g.length;
                      f--;

                    ) {
                      let t = u.slice(g[f], g[f + 1]),
                        n = a.pop();
                      c.push([n, n + t.length - 1]), e.splice(n, 2, t);
                    }
                    for (c.reverse(), f = -1; ++f < c.length; )
                      (d[p + c[f][0]] = p + c[f][1]),
                        (p += c[f][1] - c[f][0] - 1);
                    return d;
                  })(c, u)
                ),
                (u = s[u]),
                (a = !0));
            else if (t[1]._container) {
              for (r = u, n = void 0; r--; )
                if (
                  "lineEnding" === (i = c.get(r))[1].type ||
                  "lineEndingBlank" === i[1].type
                )
                  "enter" === i[0] &&
                    (n && (c.get(n)[1].type = "lineEndingBlank"),
                    (i[1].type = "lineEnding"),
                    (n = r));
                else if (
                  "linePrefix" === i[1].type ||
                  "listItemIndent" === i[1].type
                );
                else break;
              n &&
                ((t[1].end = { ...c.get(n)[1].start }),
                (o = c.slice(n, u)).unshift(t),
                c.splice(n, u - n + 1, o));
            }
          }
          return eg(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a;
        }
        let ek = {}.hasOwnProperty,
          ew = eA(/[A-Za-z]/),
          eS = eA(/[\dA-Za-z]/),
          eC = eA(/[#-'*+\--9=?A-Z^-~]/);
        function eE(e) {
          return null !== e && (e < 32 || 127 === e);
        }
        let eO = eA(/\d/),
          eT = eA(/[\dA-Fa-f]/),
          ej = eA(/[!-/:-@[-`{-~]/);
        function e_(e) {
          return null !== e && e < -2;
        }
        function eP(e) {
          return null !== e && (e < 0 || 32 === e);
        }
        function eM(e) {
          return -2 === e || -1 === e || 32 === e;
        }
        let eL = eA(/\p{P}|\p{S}/u),
          eN = eA(/\s/);
        function eA(e) {
          return function (t) {
            return null !== t && t > -1 && e.test(String.fromCharCode(t));
          };
        }
        function eI(e, t, n, r) {
          let i = r ? r - 1 : Number.POSITIVE_INFINITY,
            o = 0;
          return function (r) {
            return eM(r)
              ? (e.enter(n),
                (function r(l) {
                  return eM(l) && o++ < i
                    ? (e.consume(l), r)
                    : (e.exit(n), t(l));
                })(r))
              : t(r);
          };
        }
        let eR = {
            tokenize: function (e) {
              let t;
              let n = e.attempt(
                this.parser.constructs.contentInitial,
                function (t) {
                  if (null === t) {
                    e.consume(t);
                    return;
                  }
                  return (
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    eI(e, n, "linePrefix")
                  );
                },
                function (n) {
                  return (
                    e.enter("paragraph"),
                    (function n(r) {
                      let i = e.enter("chunkText", {
                        contentType: "text",
                        previous: t,
                      });
                      return (
                        t && (t.next = i),
                        (t = i),
                        (function t(r) {
                          if (null === r) {
                            e.exit("chunkText"),
                              e.exit("paragraph"),
                              e.consume(r);
                            return;
                          }
                          return e_(r)
                            ? (e.consume(r), e.exit("chunkText"), n)
                            : (e.consume(r), t);
                        })(r)
                      );
                    })(n)
                  );
                }
              );
              return n;
            },
          },
          eD = {
            tokenize: function (e) {
              let t, n, r;
              let i = this,
                o = [],
                l = 0;
              return a;
              function a(t) {
                if (l < o.length) {
                  let n = o[l];
                  return (
                    (i.containerState = n[1]),
                    e.attempt(n[0].continuation, s, u)(t)
                  );
                }
                return u(t);
              }
              function s(e) {
                if ((l++, i.containerState._closeFlow)) {
                  let n;
                  (i.containerState._closeFlow = void 0), t && v();
                  let r = i.events.length,
                    o = r;
                  for (; o--; )
                    if (
                      "exit" === i.events[o][0] &&
                      "chunkFlow" === i.events[o][1].type
                    ) {
                      n = i.events[o][1].end;
                      break;
                    }
                  g(l);
                  let a = r;
                  for (; a < i.events.length; )
                    (i.events[a][1].end = { ...n }), a++;
                  return (
                    eg(i.events, o + 1, 0, i.events.slice(r)),
                    (i.events.length = a),
                    u(e)
                  );
                }
                return a(e);
              }
              function u(n) {
                if (l === o.length) {
                  if (!t) return f(n);
                  if (t.currentConstruct && t.currentConstruct.concrete)
                    return p(n);
                  i.interrupt = !!(
                    t.currentConstruct && !t._gfmTableDynamicInterruptHack
                  );
                }
                return (i.containerState = {}), e.check(eF, c, d)(n);
              }
              function c(e) {
                return t && v(), g(l), f(e);
              }
              function d(e) {
                return (
                  (i.parser.lazy[i.now().line] = l !== o.length),
                  (r = i.now().offset),
                  p(e)
                );
              }
              function f(t) {
                return (i.containerState = {}), e.attempt(eF, h, p)(t);
              }
              function h(e) {
                return (
                  l++, o.push([i.currentConstruct, i.containerState]), f(e)
                );
              }
              function p(r) {
                if (null === r) {
                  t && v(), g(0), e.consume(r);
                  return;
                }
                return (
                  (t = t || i.parser.flow(i.now())),
                  e.enter("chunkFlow", {
                    _tokenizer: t,
                    contentType: "flow",
                    previous: n,
                  }),
                  (function t(n) {
                    if (null === n) {
                      m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                      return;
                    }
                    return e_(n)
                      ? (e.consume(n),
                        m(e.exit("chunkFlow")),
                        (l = 0),
                        (i.interrupt = void 0),
                        a)
                      : (e.consume(n), t);
                  })(r)
                );
              }
              function m(e, o) {
                let a = i.sliceStream(e);
                if (
                  (o && a.push(null),
                  (e.previous = n),
                  n && (n.next = e),
                  (n = e),
                  t.defineSkip(e.start),
                  t.write(a),
                  i.parser.lazy[e.start.line])
                ) {
                  let e,
                    n,
                    o = t.events.length;
                  for (; o--; )
                    if (
                      t.events[o][1].start.offset < r &&
                      (!t.events[o][1].end || t.events[o][1].end.offset > r)
                    )
                      return;
                  let a = i.events.length,
                    s = a;
                  for (; s--; )
                    if (
                      "exit" === i.events[s][0] &&
                      "chunkFlow" === i.events[s][1].type
                    ) {
                      if (e) {
                        n = i.events[s][1].end;
                        break;
                      }
                      e = !0;
                    }
                  for (g(l), o = a; o < i.events.length; )
                    (i.events[o][1].end = { ...n }), o++;
                  eg(i.events, s + 1, 0, i.events.slice(a)),
                    (i.events.length = o);
                }
              }
              function g(t) {
                let n = o.length;
                for (; n-- > t; ) {
                  let t = o[n];
                  (i.containerState = t[1]), t[0].exit.call(i, e);
                }
                o.length = t;
              }
              function v() {
                t.write([null]),
                  (n = void 0),
                  (t = void 0),
                  (i.containerState._closeFlow = void 0);
              }
            },
          },
          eF = {
            tokenize: function (e, t, n) {
              return eI(
                e,
                e.attempt(this.parser.constructs.document, t, n),
                "linePrefix",
                this.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              );
            },
          },
          ez = {
            partial: !0,
            tokenize: function (e, t, n) {
              return function (t) {
                return eM(t) ? eI(e, r, "linePrefix")(t) : r(t);
              };
              function r(e) {
                return null === e || e_(e) ? t(e) : n(e);
              }
            },
          },
          eH = {
            resolve: function (e) {
              return eb(e), e;
            },
            tokenize: function (e, t) {
              let n;
              return function (t) {
                return (
                  e.enter("content"),
                  (n = e.enter("chunkContent", { contentType: "content" })),
                  r(t)
                );
              };
              function r(t) {
                return null === t
                  ? i(t)
                  : e_(t)
                  ? e.check(eB, o, i)(t)
                  : (e.consume(t), r);
              }
              function i(n) {
                return e.exit("chunkContent"), e.exit("content"), t(n);
              }
              function o(t) {
                return (
                  e.consume(t),
                  e.exit("chunkContent"),
                  (n.next = e.enter("chunkContent", {
                    contentType: "content",
                    previous: n,
                  })),
                  (n = n.next),
                  r
                );
              }
            },
          },
          eB = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (
                  e.exit("chunkContent"),
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  eI(e, i, "linePrefix")
                );
              };
              function i(i) {
                if (null === i || e_(i)) return n(i);
                let o = r.events[r.events.length - 1];
                return !r.parser.constructs.disable.null.includes(
                  "codeIndented"
                ) &&
                  o &&
                  "linePrefix" === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length >= 4
                  ? t(i)
                  : e.interrupt(r.parser.constructs.flow, n, t)(i);
              }
            },
          },
          eU = {
            tokenize: function (e) {
              let t = this,
                n = e.attempt(
                  ez,
                  function (r) {
                    if (null === r) {
                      e.consume(r);
                      return;
                    }
                    return (
                      e.enter("lineEndingBlank"),
                      e.consume(r),
                      e.exit("lineEndingBlank"),
                      (t.currentConstruct = void 0),
                      n
                    );
                  },
                  e.attempt(
                    this.parser.constructs.flowInitial,
                    r,
                    eI(
                      e,
                      e.attempt(
                        this.parser.constructs.flow,
                        r,
                        e.attempt(eH, r)
                      ),
                      "linePrefix"
                    )
                  )
                );
              return n;
              function r(r) {
                if (null === r) {
                  e.consume(r);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(r),
                  e.exit("lineEnding"),
                  (t.currentConstruct = void 0),
                  n
                );
              }
            },
          },
          eV = { resolveAll: eY() },
          eW = eK("string"),
          eq = eK("text");
        function eK(e) {
          return {
            resolveAll: eY("text" === e ? eQ : void 0),
            tokenize: function (t) {
              let n = this,
                r = this.parser.constructs[e],
                i = t.attempt(r, o, l);
              return o;
              function o(e) {
                return s(e) ? i(e) : l(e);
              }
              function l(e) {
                if (null === e) {
                  t.consume(e);
                  return;
                }
                return t.enter("data"), t.consume(e), a;
              }
              function a(e) {
                return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
              }
              function s(e) {
                if (null === e) return !0;
                let t = r[e],
                  i = -1;
                if (t)
                  for (; ++i < t.length; ) {
                    let e = t[i];
                    if (!e.previous || e.previous.call(n, n.previous))
                      return !0;
                  }
                return !1;
              }
            },
          };
        }
        function eY(e) {
          return function (t, n) {
            let r,
              i = -1;
            for (; ++i <= t.length; )
              void 0 === r
                ? t[i] && "data" === t[i][1].type && ((r = i), i++)
                : (t[i] && "data" === t[i][1].type) ||
                  (i !== r + 2 &&
                    ((t[r][1].end = t[i - 1][1].end),
                    t.splice(r + 2, i - r - 2),
                    (i = r + 2)),
                  (r = void 0));
            return e ? e(t, n) : t;
          };
        }
        function eQ(e, t) {
          let n = 0;
          for (; ++n <= e.length; )
            if (
              (n === e.length || "lineEnding" === e[n][1].type) &&
              "data" === e[n - 1][1].type
            ) {
              let r;
              let i = e[n - 1][1],
                o = t.sliceStream(i),
                l = o.length,
                a = -1,
                s = 0;
              for (; l--; ) {
                let e = o[l];
                if ("string" == typeof e) {
                  for (a = e.length; 32 === e.charCodeAt(a - 1); ) s++, a--;
                  if (a) break;
                  a = -1;
                } else if (-2 === e) (r = !0), s++;
                else if (-1 === e);
                else {
                  l++;
                  break;
                }
              }
              if (
                (t._contentTypeTextTrailing && n === e.length && (s = 0), s)
              ) {
                let o = {
                  type:
                    n === e.length || r || s < 2
                      ? "lineSuffix"
                      : "hardBreakTrailing",
                  start: {
                    _bufferIndex: l ? a : i.start._bufferIndex + a,
                    _index: i.start._index + l,
                    line: i.end.line,
                    column: i.end.column - s,
                    offset: i.end.offset - s,
                  },
                  end: { ...i.end },
                };
                (i.end = { ...o.start }),
                  i.start.offset === i.end.offset
                    ? Object.assign(i, o)
                    : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]),
                      (n += 2));
              }
              n++;
            }
          return e;
        }
        let eZ = {
            name: "thematicBreak",
            tokenize: function (e, t, n) {
              let r,
                i = 0;
              return function (o) {
                return (
                  e.enter("thematicBreak"),
                  (r = o),
                  (function o(l) {
                    return l === r
                      ? (e.enter("thematicBreakSequence"),
                        (function t(n) {
                          return n === r
                            ? (e.consume(n), i++, t)
                            : (e.exit("thematicBreakSequence"),
                              eM(n) ? eI(e, o, "whitespace")(n) : o(n));
                        })(l))
                      : i >= 3 && (null === l || e_(l))
                      ? (e.exit("thematicBreak"), t(l))
                      : n(l);
                  })(o)
                );
              };
            },
          },
          e$ = {
            continuation: {
              tokenize: function (e, t, n) {
                let r = this;
                return (
                  (r.containerState._closeFlow = void 0),
                  e.check(
                    ez,
                    function (n) {
                      return (
                        (r.containerState.furtherBlankLines =
                          r.containerState.furtherBlankLines ||
                          r.containerState.initialBlankLine),
                        eI(e, t, "listItemIndent", r.containerState.size + 1)(n)
                      );
                    },
                    function (n) {
                      return r.containerState.furtherBlankLines || !eM(n)
                        ? ((r.containerState.furtherBlankLines = void 0),
                          (r.containerState.initialBlankLine = void 0),
                          i(n))
                        : ((r.containerState.furtherBlankLines = void 0),
                          (r.containerState.initialBlankLine = void 0),
                          e.attempt(eJ, t, i)(n));
                    }
                  )
                );
                function i(i) {
                  return (
                    (r.containerState._closeFlow = !0),
                    (r.interrupt = void 0),
                    eI(
                      e,
                      e.attempt(e$, t, n),
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(i)
                  );
                }
              },
            },
            exit: function (e) {
              e.exit(this.containerState.type);
            },
            name: "list",
            tokenize: function (e, t, n) {
              let r = this,
                i = r.events[r.events.length - 1],
                o =
                  i && "linePrefix" === i[1].type
                    ? i[2].sliceSerialize(i[1], !0).length
                    : 0,
                l = 0;
              return function (t) {
                let i =
                  r.containerState.type ||
                  (42 === t || 43 === t || 45 === t
                    ? "listUnordered"
                    : "listOrdered");
                if (
                  "listUnordered" === i
                    ? !r.containerState.marker || t === r.containerState.marker
                    : eO(t)
                ) {
                  if (
                    (r.containerState.type ||
                      ((r.containerState.type = i),
                      e.enter(i, { _container: !0 })),
                    "listUnordered" === i)
                  )
                    return (
                      e.enter("listItemPrefix"),
                      42 === t || 45 === t ? e.check(eZ, n, a)(t) : a(t)
                    );
                  if (!r.interrupt || 49 === t)
                    return (
                      e.enter("listItemPrefix"),
                      e.enter("listItemValue"),
                      (function t(i) {
                        return eO(i) && ++l < 10
                          ? (e.consume(i), t)
                          : (!r.interrupt || l < 2) &&
                            (r.containerState.marker
                              ? i === r.containerState.marker
                              : 41 === i || 46 === i)
                          ? (e.exit("listItemValue"), a(i))
                          : n(i);
                      })(t)
                    );
                }
                return n(t);
              };
              function a(t) {
                return (
                  e.enter("listItemMarker"),
                  e.consume(t),
                  e.exit("listItemMarker"),
                  (r.containerState.marker = r.containerState.marker || t),
                  e.check(ez, r.interrupt ? n : s, e.attempt(eG, c, u))
                );
              }
              function s(e) {
                return (r.containerState.initialBlankLine = !0), o++, c(e);
              }
              function u(t) {
                return eM(t)
                  ? (e.enter("listItemPrefixWhitespace"),
                    e.consume(t),
                    e.exit("listItemPrefixWhitespace"),
                    c)
                  : n(t);
              }
              function c(n) {
                return (
                  (r.containerState.size =
                    o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                  t(n)
                );
              }
            },
          },
          eG = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return eI(
                e,
                function (e) {
                  let i = r.events[r.events.length - 1];
                  return !eM(e) && i && "listItemPrefixWhitespace" === i[1].type
                    ? t(e)
                    : n(e);
                },
                "listItemPrefixWhitespace",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 5
              );
            },
          },
          eJ = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return eI(
                e,
                function (e) {
                  let i = r.events[r.events.length - 1];
                  return i &&
                    "listItemIndent" === i[1].type &&
                    i[2].sliceSerialize(i[1], !0).length ===
                      r.containerState.size
                    ? t(e)
                    : n(e);
                },
                "listItemIndent",
                r.containerState.size + 1
              );
            },
          },
          eX = {
            continuation: {
              tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                  return eM(t)
                    ? eI(
                        e,
                        i,
                        "linePrefix",
                        r.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : i(t);
                };
                function i(r) {
                  return e.attempt(eX, t, n)(r);
                }
              },
            },
            exit: function (e) {
              e.exit("blockQuote");
            },
            name: "blockQuote",
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                if (62 === t) {
                  let n = r.containerState;
                  return (
                    n.open ||
                      (e.enter("blockQuote", { _container: !0 }),
                      (n.open = !0)),
                    e.enter("blockQuotePrefix"),
                    e.enter("blockQuoteMarker"),
                    e.consume(t),
                    e.exit("blockQuoteMarker"),
                    i
                  );
                }
                return n(t);
              };
              function i(n) {
                return eM(n)
                  ? (e.enter("blockQuotePrefixWhitespace"),
                    e.consume(n),
                    e.exit("blockQuotePrefixWhitespace"),
                    e.exit("blockQuotePrefix"),
                    t)
                  : (e.exit("blockQuotePrefix"), t(n));
              }
            },
          };
        function e0(e, t, n, r, i, o, l, a, s) {
          let u = s || Number.POSITIVE_INFINITY,
            c = 0;
          return function (t) {
            return 60 === t
              ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), d)
              : null === t || 32 === t || 41 === t || eE(t)
              ? n(t)
              : (e.enter(r),
                e.enter(l),
                e.enter(a),
                e.enter("chunkString", { contentType: "string" }),
                p(t));
          };
          function d(n) {
            return 62 === n
              ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
              : (e.enter(a),
                e.enter("chunkString", { contentType: "string" }),
                f(n));
          }
          function f(t) {
            return 62 === t
              ? (e.exit("chunkString"), e.exit(a), d(t))
              : null === t || 60 === t || e_(t)
              ? n(t)
              : (e.consume(t), 92 === t ? h : f);
          }
          function h(t) {
            return 60 === t || 62 === t || 92 === t ? (e.consume(t), f) : f(t);
          }
          function p(i) {
            return !c && (null === i || 41 === i || eP(i))
              ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(i))
              : c < u && 40 === i
              ? (e.consume(i), c++, p)
              : 41 === i
              ? (e.consume(i), c--, p)
              : null === i || 32 === i || 40 === i || eE(i)
              ? n(i)
              : (e.consume(i), 92 === i ? m : p);
          }
          function m(t) {
            return 40 === t || 41 === t || 92 === t ? (e.consume(t), p) : p(t);
          }
        }
        function e1(e, t, n, r, i, o) {
          let l;
          let a = this,
            s = 0;
          return function (t) {
            return (
              e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), u
            );
          };
          function u(d) {
            return s > 999 ||
              null === d ||
              91 === d ||
              (93 === d && !l) ||
              (94 === d &&
                !s &&
                "_hiddenFootnoteSupport" in a.parser.constructs)
              ? n(d)
              : 93 === d
              ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
              : e_(d)
              ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
              : (e.enter("chunkString", { contentType: "string" }), c(d));
          }
          function c(t) {
            return null === t || 91 === t || 93 === t || e_(t) || s++ > 999
              ? (e.exit("chunkString"), u(t))
              : (e.consume(t), l || (l = !eM(t)), 92 === t ? d : c);
          }
          function d(t) {
            return 91 === t || 92 === t || 93 === t
              ? (e.consume(t), s++, c)
              : c(t);
          }
        }
        function e2(e, t, n, r, i, o) {
          let l;
          return function (t) {
            return 34 === t || 39 === t || 40 === t
              ? (e.enter(r),
                e.enter(i),
                e.consume(t),
                e.exit(i),
                (l = 40 === t ? 41 : t),
                a)
              : n(t);
          };
          function a(n) {
            return n === l
              ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
              : (e.enter(o), s(n));
          }
          function s(t) {
            return t === l
              ? (e.exit(o), a(l))
              : null === t
              ? n(t)
              : e_(t)
              ? (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                eI(e, s, "linePrefix"))
              : (e.enter("chunkString", { contentType: "string" }), u(t));
          }
          function u(t) {
            return t === l || null === t || e_(t)
              ? (e.exit("chunkString"), s(t))
              : (e.consume(t), 92 === t ? c : u);
          }
          function c(t) {
            return t === l || 92 === t ? (e.consume(t), u) : u(t);
          }
        }
        function e4(e, t) {
          let n;
          return function r(i) {
            return e_(i)
              ? (e.enter("lineEnding"),
                e.consume(i),
                e.exit("lineEnding"),
                (n = !0),
                r)
              : eM(i)
              ? eI(e, r, n ? "linePrefix" : "lineSuffix")(i)
              : t(i);
          };
        }
        function e5(e) {
          return e
            .replace(/[\t\n\r ]+/g, " ")
            .replace(/^ | $/g, "")
            .toLowerCase()
            .toUpperCase();
        }
        let e3 = {
            partial: !0,
            tokenize: function (e, t, n) {
              return function (t) {
                return eP(t) ? e4(e, r)(t) : n(t);
              };
              function r(t) {
                return e2(
                  e,
                  i,
                  n,
                  "definitionTitle",
                  "definitionTitleMarker",
                  "definitionTitleString"
                )(t);
              }
              function i(t) {
                return eM(t) ? eI(e, o, "whitespace")(t) : o(t);
              }
              function o(e) {
                return null === e || e_(e) ? t(e) : n(e);
              }
            },
          },
          e6 = {
            name: "codeIndented",
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return e.enter("codeIndented"), eI(e, i, "linePrefix", 5)(t);
              };
              function i(t) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "linePrefix" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length >= 4
                  ? (function t(n) {
                      return null === n
                        ? o(n)
                        : e_(n)
                        ? e.attempt(e7, t, o)(n)
                        : (e.enter("codeFlowValue"),
                          (function n(r) {
                            return null === r || e_(r)
                              ? (e.exit("codeFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(t)
                  : n(t);
              }
              function o(n) {
                return e.exit("codeIndented"), t(n);
              }
            },
          },
          e7 = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return i;
              function i(t) {
                return r.parser.lazy[r.now().line]
                  ? n(t)
                  : e_(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    i)
                  : eI(e, o, "linePrefix", 5)(t);
              }
              function o(e) {
                let o = r.events[r.events.length - 1];
                return o &&
                  "linePrefix" === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length >= 4
                  ? t(e)
                  : e_(e)
                  ? i(e)
                  : n(e);
              }
            },
          },
          e9 = {
            name: "setextUnderline",
            resolveTo: function (e, t) {
              let n,
                r,
                i,
                o = e.length;
              for (; o--; )
                if ("enter" === e[o][0]) {
                  if ("content" === e[o][1].type) {
                    n = o;
                    break;
                  }
                  "paragraph" === e[o][1].type && (r = o);
                } else
                  "content" === e[o][1].type && e.splice(o, 1),
                    i || "definition" !== e[o][1].type || (i = o);
              let l = {
                type: "setextHeading",
                start: { ...e[n][1].start },
                end: { ...e[e.length - 1][1].end },
              };
              return (
                (e[r][1].type = "setextHeadingText"),
                i
                  ? (e.splice(r, 0, ["enter", l, t]),
                    e.splice(i + 1, 0, ["exit", e[n][1], t]),
                    (e[n][1].end = { ...e[i][1].end }))
                  : (e[n][1] = l),
                e.push(["exit", l, t]),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r;
              let i = this;
              return function (t) {
                let l,
                  a = i.events.length;
                for (; a--; )
                  if (
                    "lineEnding" !== i.events[a][1].type &&
                    "linePrefix" !== i.events[a][1].type &&
                    "content" !== i.events[a][1].type
                  ) {
                    l = "paragraph" === i.events[a][1].type;
                    break;
                  }
                return !i.parser.lazy[i.now().line] && (i.interrupt || l)
                  ? (e.enter("setextHeadingLine"),
                    (r = t),
                    e.enter("setextHeadingLineSequence"),
                    (function t(n) {
                      return n === r
                        ? (e.consume(n), t)
                        : (e.exit("setextHeadingLineSequence"),
                          eM(n) ? eI(e, o, "lineSuffix")(n) : o(n));
                    })(t))
                  : n(t);
              };
              function o(r) {
                return null === r || e_(r)
                  ? (e.exit("setextHeadingLine"), t(r))
                  : n(r);
              }
            },
          },
          e8 = [
            "address",
            "article",
            "aside",
            "base",
            "basefont",
            "blockquote",
            "body",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hr",
            "html",
            "iframe",
            "legend",
            "li",
            "link",
            "main",
            "menu",
            "menuitem",
            "nav",
            "noframes",
            "ol",
            "optgroup",
            "option",
            "p",
            "param",
            "search",
            "section",
            "summary",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul",
          ],
          te = ["pre", "script", "style", "textarea"],
          tt = {
            partial: !0,
            tokenize: function (e, t, n) {
              return function (r) {
                return (
                  e.enter("lineEnding"),
                  e.consume(r),
                  e.exit("lineEnding"),
                  e.attempt(ez, t, n)
                );
              };
            },
          },
          tn = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return e_(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    i)
                  : n(t);
              };
              function i(e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e);
              }
            },
          },
          tr = {
            partial: !0,
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return null === t
                  ? n(t)
                  : (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    i);
              };
              function i(e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e);
              }
            },
          },
          ti = {
            concrete: !0,
            name: "codeFenced",
            tokenize: function (e, t, n) {
              let r;
              let i = this,
                o = {
                  partial: !0,
                  tokenize: function (e, t, n) {
                    let o = 0;
                    return function (t) {
                      return (
                        e.enter("lineEnding"),
                        e.consume(t),
                        e.exit("lineEnding"),
                        l
                      );
                    };
                    function l(t) {
                      return (
                        e.enter("codeFencedFence"),
                        eM(t)
                          ? eI(
                              e,
                              s,
                              "linePrefix",
                              i.parser.constructs.disable.null.includes(
                                "codeIndented"
                              )
                                ? void 0
                                : 4
                            )(t)
                          : s(t)
                      );
                    }
                    function s(t) {
                      return t === r
                        ? (e.enter("codeFencedFenceSequence"),
                          (function t(i) {
                            return i === r
                              ? (o++, e.consume(i), t)
                              : o >= a
                              ? (e.exit("codeFencedFenceSequence"),
                                eM(i) ? eI(e, u, "whitespace")(i) : u(i))
                              : n(i);
                          })(t))
                        : n(t);
                    }
                    function u(r) {
                      return null === r || e_(r)
                        ? (e.exit("codeFencedFence"), t(r))
                        : n(r);
                    }
                  },
                },
                l = 0,
                a = 0;
              return function (t) {
                return (function (t) {
                  let o = i.events[i.events.length - 1];
                  return (
                    (l =
                      o && "linePrefix" === o[1].type
                        ? o[2].sliceSerialize(o[1], !0).length
                        : 0),
                    (r = t),
                    e.enter("codeFenced"),
                    e.enter("codeFencedFence"),
                    e.enter("codeFencedFenceSequence"),
                    (function t(i) {
                      return i === r
                        ? (a++, e.consume(i), t)
                        : a < 3
                        ? n(i)
                        : (e.exit("codeFencedFenceSequence"),
                          eM(i) ? eI(e, s, "whitespace")(i) : s(i));
                    })(t)
                  );
                })(t);
              };
              function s(o) {
                return null === o || e_(o)
                  ? (e.exit("codeFencedFence"),
                    i.interrupt ? t(o) : e.check(tr, c, p)(o))
                  : (e.enter("codeFencedFenceInfo"),
                    e.enter("chunkString", { contentType: "string" }),
                    (function t(i) {
                      return null === i || e_(i)
                        ? (e.exit("chunkString"),
                          e.exit("codeFencedFenceInfo"),
                          s(i))
                        : eM(i)
                        ? (e.exit("chunkString"),
                          e.exit("codeFencedFenceInfo"),
                          eI(e, u, "whitespace")(i))
                        : 96 === i && i === r
                        ? n(i)
                        : (e.consume(i), t);
                    })(o));
              }
              function u(t) {
                return null === t || e_(t)
                  ? s(t)
                  : (e.enter("codeFencedFenceMeta"),
                    e.enter("chunkString", { contentType: "string" }),
                    (function t(i) {
                      return null === i || e_(i)
                        ? (e.exit("chunkString"),
                          e.exit("codeFencedFenceMeta"),
                          s(i))
                        : 96 === i && i === r
                        ? n(i)
                        : (e.consume(i), t);
                    })(t));
              }
              function c(t) {
                return e.attempt(o, p, d)(t);
              }
              function d(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f
                );
              }
              function f(t) {
                return l > 0 && eM(t) ? eI(e, h, "linePrefix", l + 1)(t) : h(t);
              }
              function h(t) {
                return null === t || e_(t)
                  ? e.check(tr, c, p)(t)
                  : (e.enter("codeFlowValue"),
                    (function t(n) {
                      return null === n || e_(n)
                        ? (e.exit("codeFlowValue"), h(n))
                        : (e.consume(n), t);
                    })(t));
              }
              function p(n) {
                return e.exit("codeFenced"), t(n);
              }
            },
          },
          to = document.createElement("i");
        function tl(e) {
          let t = "&" + e + ";";
          to.innerHTML = t;
          let n = to.textContent;
          return (
            (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
          );
        }
        let ta = {
            name: "characterReference",
            tokenize: function (e, t, n) {
              let r, i;
              let o = this,
                l = 0;
              return function (t) {
                return (
                  e.enter("characterReference"),
                  e.enter("characterReferenceMarker"),
                  e.consume(t),
                  e.exit("characterReferenceMarker"),
                  a
                );
              };
              function a(t) {
                return 35 === t
                  ? (e.enter("characterReferenceMarkerNumeric"),
                    e.consume(t),
                    e.exit("characterReferenceMarkerNumeric"),
                    s)
                  : (e.enter("characterReferenceValue"),
                    (r = 31),
                    (i = eS),
                    u(t));
              }
              function s(t) {
                return 88 === t || 120 === t
                  ? (e.enter("characterReferenceMarkerHexadecimal"),
                    e.consume(t),
                    e.exit("characterReferenceMarkerHexadecimal"),
                    e.enter("characterReferenceValue"),
                    (r = 6),
                    (i = eT),
                    u)
                  : (e.enter("characterReferenceValue"),
                    (r = 7),
                    (i = eO),
                    u(t));
              }
              function u(a) {
                if (59 === a && l) {
                  let r = e.exit("characterReferenceValue");
                  return i !== eS || tl(o.sliceSerialize(r))
                    ? (e.enter("characterReferenceMarker"),
                      e.consume(a),
                      e.exit("characterReferenceMarker"),
                      e.exit("characterReference"),
                      t)
                    : n(a);
                }
                return i(a) && l++ < r ? (e.consume(a), u) : n(a);
              }
            },
          },
          ts = {
            name: "characterEscape",
            tokenize: function (e, t, n) {
              return function (t) {
                return (
                  e.enter("characterEscape"),
                  e.enter("escapeMarker"),
                  e.consume(t),
                  e.exit("escapeMarker"),
                  r
                );
              };
              function r(r) {
                return ej(r)
                  ? (e.enter("characterEscapeValue"),
                    e.consume(r),
                    e.exit("characterEscapeValue"),
                    e.exit("characterEscape"),
                    t)
                  : n(r);
              }
            },
          },
          tu = {
            name: "lineEnding",
            tokenize: function (e, t) {
              return function (n) {
                return (
                  e.enter("lineEnding"),
                  e.consume(n),
                  e.exit("lineEnding"),
                  eI(e, t, "linePrefix")
                );
              };
            },
          };
        function tc(e, t, n) {
          let r = [],
            i = -1;
          for (; ++i < e.length; ) {
            let o = e[i].resolveAll;
            o && !r.includes(o) && ((t = o(t, n)), r.push(o));
          }
          return t;
        }
        let td = {
            name: "labelEnd",
            resolveAll: function (e) {
              let t = -1,
                n = [];
              for (; ++t < e.length; ) {
                let r = e[t][1];
                if (
                  (n.push(e[t]),
                  "labelImage" === r.type ||
                    "labelLink" === r.type ||
                    "labelEnd" === r.type)
                ) {
                  let e = "labelImage" === r.type ? 4 : 2;
                  (r.type = "data"), (t += e);
                }
              }
              return e.length !== n.length && eg(e, 0, e.length, n), e;
            },
            resolveTo: function (e, t) {
              let n,
                r,
                i,
                o,
                l = e.length,
                a = 0;
              for (; l--; )
                if (((n = e[l][1]), r)) {
                  if (
                    "link" === n.type ||
                    ("labelLink" === n.type && n._inactive)
                  )
                    break;
                  "enter" === e[l][0] &&
                    "labelLink" === n.type &&
                    (n._inactive = !0);
                } else if (i) {
                  if (
                    "enter" === e[l][0] &&
                    ("labelImage" === n.type || "labelLink" === n.type) &&
                    !n._balanced &&
                    ((r = l), "labelLink" !== n.type)
                  ) {
                    a = 2;
                    break;
                  }
                } else "labelEnd" === n.type && (i = l);
              let s = {
                  type: "labelLink" === e[r][1].type ? "link" : "image",
                  start: { ...e[r][1].start },
                  end: { ...e[e.length - 1][1].end },
                },
                u = {
                  type: "label",
                  start: { ...e[r][1].start },
                  end: { ...e[i][1].end },
                },
                c = {
                  type: "labelText",
                  start: { ...e[r + a + 2][1].end },
                  end: { ...e[i - 2][1].start },
                };
              return (
                (o = ev(
                  (o = [
                    ["enter", s, t],
                    ["enter", u, t],
                  ]),
                  e.slice(r + 1, r + a + 3)
                )),
                (o = ev(o, [["enter", c, t]])),
                (o = ev(
                  o,
                  tc(
                    t.parser.constructs.insideSpan.null,
                    e.slice(r + a + 4, i - 3),
                    t
                  )
                )),
                (o = ev(o, [
                  ["exit", c, t],
                  e[i - 2],
                  e[i - 1],
                  ["exit", u, t],
                ])),
                (o = ev(o, e.slice(i + 1))),
                (o = ev(o, [["exit", s, t]])),
                eg(e, r, e.length, o),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r, i;
              let o = this,
                l = o.events.length;
              for (; l--; )
                if (
                  ("labelImage" === o.events[l][1].type ||
                    "labelLink" === o.events[l][1].type) &&
                  !o.events[l][1]._balanced
                ) {
                  r = o.events[l][1];
                  break;
                }
              return function (t) {
                return r
                  ? r._inactive
                    ? c(t)
                    : ((i = o.parser.defined.includes(
                        e5(o.sliceSerialize({ start: r.end, end: o.now() }))
                      )),
                      e.enter("labelEnd"),
                      e.enter("labelMarker"),
                      e.consume(t),
                      e.exit("labelMarker"),
                      e.exit("labelEnd"),
                      a)
                  : n(t);
              };
              function a(t) {
                return 40 === t
                  ? e.attempt(tf, u, i ? u : c)(t)
                  : 91 === t
                  ? e.attempt(th, u, i ? s : c)(t)
                  : i
                  ? u(t)
                  : c(t);
              }
              function s(t) {
                return e.attempt(tp, u, c)(t);
              }
              function u(e) {
                return t(e);
              }
              function c(e) {
                return (r._balanced = !0), n(e);
              }
            },
          },
          tf = {
            tokenize: function (e, t, n) {
              return function (t) {
                return (
                  e.enter("resource"),
                  e.enter("resourceMarker"),
                  e.consume(t),
                  e.exit("resourceMarker"),
                  r
                );
              };
              function r(t) {
                return eP(t) ? e4(e, i)(t) : i(t);
              }
              function i(t) {
                return 41 === t
                  ? u(t)
                  : e0(
                      e,
                      o,
                      l,
                      "resourceDestination",
                      "resourceDestinationLiteral",
                      "resourceDestinationLiteralMarker",
                      "resourceDestinationRaw",
                      "resourceDestinationString",
                      32
                    )(t);
              }
              function o(t) {
                return eP(t) ? e4(e, a)(t) : u(t);
              }
              function l(e) {
                return n(e);
              }
              function a(t) {
                return 34 === t || 39 === t || 40 === t
                  ? e2(
                      e,
                      s,
                      n,
                      "resourceTitle",
                      "resourceTitleMarker",
                      "resourceTitleString"
                    )(t)
                  : u(t);
              }
              function s(t) {
                return eP(t) ? e4(e, u)(t) : u(t);
              }
              function u(r) {
                return 41 === r
                  ? (e.enter("resourceMarker"),
                    e.consume(r),
                    e.exit("resourceMarker"),
                    e.exit("resource"),
                    t)
                  : n(r);
              }
            },
          },
          th = {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return e1.call(
                  r,
                  e,
                  i,
                  o,
                  "reference",
                  "referenceMarker",
                  "referenceString"
                )(t);
              };
              function i(e) {
                return r.parser.defined.includes(
                  e5(
                    r
                      .sliceSerialize(r.events[r.events.length - 1][1])
                      .slice(1, -1)
                  )
                )
                  ? t(e)
                  : n(e);
              }
              function o(e) {
                return n(e);
              }
            },
          },
          tp = {
            tokenize: function (e, t, n) {
              return function (t) {
                return (
                  e.enter("reference"),
                  e.enter("referenceMarker"),
                  e.consume(t),
                  e.exit("referenceMarker"),
                  r
                );
              };
              function r(r) {
                return 93 === r
                  ? (e.enter("referenceMarker"),
                    e.consume(r),
                    e.exit("referenceMarker"),
                    e.exit("reference"),
                    t)
                  : n(r);
              }
            },
          },
          tm = {
            name: "labelStartImage",
            resolveAll: td.resolveAll,
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (
                  e.enter("labelImage"),
                  e.enter("labelImageMarker"),
                  e.consume(t),
                  e.exit("labelImageMarker"),
                  i
                );
              };
              function i(t) {
                return 91 === t
                  ? (e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelImage"),
                    o)
                  : n(t);
              }
              function o(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? n(e)
                  : t(e);
              }
            },
          };
        function tg(e) {
          return null === e || eP(e) || eN(e) ? 1 : eL(e) ? 2 : void 0;
        }
        let tv = {
          name: "attention",
          resolveAll: function (e, t) {
            let n,
              r,
              i,
              o,
              l,
              a,
              s,
              u,
              c = -1;
            for (; ++c < e.length; )
              if (
                "enter" === e[c][0] &&
                "attentionSequence" === e[c][1].type &&
                e[c][1]._close
              ) {
                for (n = c; n--; )
                  if (
                    "exit" === e[n][0] &&
                    "attentionSequence" === e[n][1].type &&
                    e[n][1]._open &&
                    t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                      t.sliceSerialize(e[c][1]).charCodeAt(0)
                  ) {
                    if (
                      (e[n][1]._close || e[c][1]._open) &&
                      (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                      !(
                        (e[n][1].end.offset -
                          e[n][1].start.offset +
                          e[c][1].end.offset -
                          e[c][1].start.offset) %
                        3
                      )
                    )
                      continue;
                    a =
                      e[n][1].end.offset - e[n][1].start.offset > 1 &&
                      e[c][1].end.offset - e[c][1].start.offset > 1
                        ? 2
                        : 1;
                    let d = { ...e[n][1].end },
                      f = { ...e[c][1].start };
                    ty(d, -a),
                      ty(f, a),
                      (o = {
                        type: a > 1 ? "strongSequence" : "emphasisSequence",
                        start: d,
                        end: { ...e[n][1].end },
                      }),
                      (l = {
                        type: a > 1 ? "strongSequence" : "emphasisSequence",
                        start: { ...e[c][1].start },
                        end: f,
                      }),
                      (i = {
                        type: a > 1 ? "strongText" : "emphasisText",
                        start: { ...e[n][1].end },
                        end: { ...e[c][1].start },
                      }),
                      (r = {
                        type: a > 1 ? "strong" : "emphasis",
                        start: { ...o.start },
                        end: { ...l.end },
                      }),
                      (e[n][1].end = { ...o.start }),
                      (e[c][1].start = { ...l.end }),
                      (s = []),
                      e[n][1].end.offset - e[n][1].start.offset &&
                        (s = ev(s, [
                          ["enter", e[n][1], t],
                          ["exit", e[n][1], t],
                        ])),
                      (s = ev(s, [
                        ["enter", r, t],
                        ["enter", o, t],
                        ["exit", o, t],
                        ["enter", i, t],
                      ])),
                      (s = ev(
                        s,
                        tc(
                          t.parser.constructs.insideSpan.null,
                          e.slice(n + 1, c),
                          t
                        )
                      )),
                      (s = ev(s, [
                        ["exit", i, t],
                        ["enter", l, t],
                        ["exit", l, t],
                        ["exit", r, t],
                      ])),
                      e[c][1].end.offset - e[c][1].start.offset
                        ? ((u = 2),
                          (s = ev(s, [
                            ["enter", e[c][1], t],
                            ["exit", e[c][1], t],
                          ])))
                        : (u = 0),
                      eg(e, n - 1, c - n + 3, s),
                      (c = n + s.length - u - 2);
                    break;
                  }
              }
            for (c = -1; ++c < e.length; )
              "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
            return e;
          },
          tokenize: function (e, t) {
            let n;
            let r = this.parser.constructs.attentionMarkers.null,
              i = this.previous,
              o = tg(i);
            return function (l) {
              return (
                (n = l),
                e.enter("attentionSequence"),
                (function l(a) {
                  if (a === n) return e.consume(a), l;
                  let s = e.exit("attentionSequence"),
                    u = tg(a),
                    c = !u || (2 === u && o) || r.includes(a),
                    d = !o || (2 === o && u) || r.includes(i);
                  return (
                    (s._open = !!(42 === n ? c : c && (o || !d))),
                    (s._close = !!(42 === n ? d : d && (u || !c))),
                    t(a)
                  );
                })(l)
              );
            };
          },
        };
        function ty(e, t) {
          (e.column += t), (e.offset += t), (e._bufferIndex += t);
        }
        let tx = {
            name: "labelStartLink",
            resolveAll: td.resolveAll,
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (
                  e.enter("labelLink"),
                  e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelLink"),
                  i
                );
              };
              function i(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? n(e)
                  : t(e);
              }
            },
          },
          tb = {
            42: e$,
            43: e$,
            45: e$,
            48: e$,
            49: e$,
            50: e$,
            51: e$,
            52: e$,
            53: e$,
            54: e$,
            55: e$,
            56: e$,
            57: e$,
            62: eX,
          },
          tk = {
            91: {
              name: "definition",
              tokenize: function (e, t, n) {
                let r;
                let i = this;
                return function (t) {
                  return (
                    e.enter("definition"),
                    e1.call(
                      i,
                      e,
                      o,
                      n,
                      "definitionLabel",
                      "definitionLabelMarker",
                      "definitionLabelString"
                    )(t)
                  );
                };
                function o(t) {
                  return ((r = e5(
                    i
                      .sliceSerialize(i.events[i.events.length - 1][1])
                      .slice(1, -1)
                  )),
                  58 === t)
                    ? (e.enter("definitionMarker"),
                      e.consume(t),
                      e.exit("definitionMarker"),
                      l)
                    : n(t);
                }
                function l(t) {
                  return eP(t) ? e4(e, a)(t) : a(t);
                }
                function a(t) {
                  return e0(
                    e,
                    s,
                    n,
                    "definitionDestination",
                    "definitionDestinationLiteral",
                    "definitionDestinationLiteralMarker",
                    "definitionDestinationRaw",
                    "definitionDestinationString"
                  )(t);
                }
                function s(t) {
                  return e.attempt(e3, u, u)(t);
                }
                function u(t) {
                  return eM(t) ? eI(e, c, "whitespace")(t) : c(t);
                }
                function c(o) {
                  return null === o || e_(o)
                    ? (e.exit("definition"), i.parser.defined.push(r), t(o))
                    : n(o);
                }
              },
            },
          },
          tw = { [-2]: e6, [-1]: e6, 32: e6 },
          tS = {
            35: {
              name: "headingAtx",
              resolve: function (e, t) {
                let n,
                  r,
                  i = e.length - 2,
                  o = 3;
                return (
                  "whitespace" === e[3][1].type && (o += 2),
                  i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                  "atxHeadingSequence" === e[i][1].type &&
                    (o === i - 1 ||
                      (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                    (i -= o + 1 === i ? 2 : 4),
                  i > o &&
                    ((n = {
                      type: "atxHeadingText",
                      start: e[o][1].start,
                      end: e[i][1].end,
                    }),
                    (r = {
                      type: "chunkText",
                      start: e[o][1].start,
                      end: e[i][1].end,
                      contentType: "text",
                    }),
                    eg(e, o, i - o + 1, [
                      ["enter", n, t],
                      ["enter", r, t],
                      ["exit", r, t],
                      ["exit", n, t],
                    ])),
                  e
                );
              },
              tokenize: function (e, t, n) {
                let r = 0;
                return function (i) {
                  return (
                    e.enter("atxHeading"),
                    e.enter("atxHeadingSequence"),
                    (function i(o) {
                      return 35 === o && r++ < 6
                        ? (e.consume(o), i)
                        : null === o || eP(o)
                        ? (e.exit("atxHeadingSequence"),
                          (function n(r) {
                            return 35 === r
                              ? (e.enter("atxHeadingSequence"),
                                (function t(r) {
                                  return 35 === r
                                    ? (e.consume(r), t)
                                    : (e.exit("atxHeadingSequence"), n(r));
                                })(r))
                              : null === r || e_(r)
                              ? (e.exit("atxHeading"), t(r))
                              : eM(r)
                              ? eI(e, n, "whitespace")(r)
                              : (e.enter("atxHeadingText"),
                                (function t(r) {
                                  return null === r || 35 === r || eP(r)
                                    ? (e.exit("atxHeadingText"), n(r))
                                    : (e.consume(r), t);
                                })(r));
                          })(o))
                        : n(o);
                    })(i)
                  );
                };
              },
            },
            42: eZ,
            45: [e9, eZ],
            60: {
              concrete: !0,
              name: "htmlFlow",
              resolveTo: function (e) {
                let t = e.length;
                for (
                  ;
                  t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

                );
                return (
                  t > 1 &&
                    "linePrefix" === e[t - 2][1].type &&
                    ((e[t][1].start = e[t - 2][1].start),
                    (e[t + 1][1].start = e[t - 2][1].start),
                    e.splice(t - 2, 2)),
                  e
                );
              },
              tokenize: function (e, t, n) {
                let r, i, o, l, a;
                let s = this;
                return function (t) {
                  return (
                    e.enter("htmlFlow"),
                    e.enter("htmlFlowData"),
                    e.consume(t),
                    u
                  );
                };
                function u(l) {
                  return 33 === l
                    ? (e.consume(l), c)
                    : 47 === l
                    ? (e.consume(l), (i = !0), h)
                    : 63 === l
                    ? (e.consume(l), (r = 3), s.interrupt ? t : L)
                    : ew(l)
                    ? (e.consume(l), (o = String.fromCharCode(l)), p)
                    : n(l);
                }
                function c(i) {
                  return 45 === i
                    ? (e.consume(i), (r = 2), d)
                    : 91 === i
                    ? (e.consume(i), (r = 5), (l = 0), f)
                    : ew(i)
                    ? (e.consume(i), (r = 4), s.interrupt ? t : L)
                    : n(i);
                }
                function d(r) {
                  return 45 === r ? (e.consume(r), s.interrupt ? t : L) : n(r);
                }
                function f(r) {
                  let i = "CDATA[";
                  return r === i.charCodeAt(l++)
                    ? (e.consume(r), l === i.length)
                      ? s.interrupt
                        ? t
                        : C
                      : f
                    : n(r);
                }
                function h(t) {
                  return ew(t)
                    ? (e.consume(t), (o = String.fromCharCode(t)), p)
                    : n(t);
                }
                function p(l) {
                  if (null === l || 47 === l || 62 === l || eP(l)) {
                    let a = 47 === l,
                      u = o.toLowerCase();
                    return !a && !i && te.includes(u)
                      ? ((r = 1), s.interrupt ? t(l) : C(l))
                      : e8.includes(o.toLowerCase())
                      ? ((r = 6), a)
                        ? (e.consume(l), m)
                        : s.interrupt
                        ? t(l)
                        : C(l)
                      : ((r = 7),
                        s.interrupt && !s.parser.lazy[s.now().line]
                          ? n(l)
                          : i
                          ? (function t(n) {
                              return eM(n) ? (e.consume(n), t) : w(n);
                            })(l)
                          : g(l));
                  }
                  return 45 === l || eS(l)
                    ? (e.consume(l), (o += String.fromCharCode(l)), p)
                    : n(l);
                }
                function m(r) {
                  return 62 === r ? (e.consume(r), s.interrupt ? t : C) : n(r);
                }
                function g(t) {
                  return 47 === t
                    ? (e.consume(t), w)
                    : 58 === t || 95 === t || ew(t)
                    ? (e.consume(t), v)
                    : eM(t)
                    ? (e.consume(t), g)
                    : w(t);
                }
                function v(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || eS(t)
                    ? (e.consume(t), v)
                    : y(t);
                }
                function y(t) {
                  return 61 === t
                    ? (e.consume(t), x)
                    : eM(t)
                    ? (e.consume(t), y)
                    : g(t);
                }
                function x(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (a = t), b)
                    : eM(t)
                    ? (e.consume(t), x)
                    : (function t(n) {
                        return null === n ||
                          34 === n ||
                          39 === n ||
                          47 === n ||
                          60 === n ||
                          61 === n ||
                          62 === n ||
                          96 === n ||
                          eP(n)
                          ? y(n)
                          : (e.consume(n), t);
                      })(t);
                }
                function b(t) {
                  return t === a
                    ? (e.consume(t), (a = null), k)
                    : null === t || e_(t)
                    ? n(t)
                    : (e.consume(t), b);
                }
                function k(e) {
                  return 47 === e || 62 === e || eM(e) ? g(e) : n(e);
                }
                function w(t) {
                  return 62 === t ? (e.consume(t), S) : n(t);
                }
                function S(t) {
                  return null === t || e_(t)
                    ? C(t)
                    : eM(t)
                    ? (e.consume(t), S)
                    : n(t);
                }
                function C(t) {
                  return 45 === t && 2 === r
                    ? (e.consume(t), j)
                    : 60 === t && 1 === r
                    ? (e.consume(t), _)
                    : 62 === t && 4 === r
                    ? (e.consume(t), N)
                    : 63 === t && 3 === r
                    ? (e.consume(t), L)
                    : 93 === t && 5 === r
                    ? (e.consume(t), M)
                    : e_(t) && (6 === r || 7 === r)
                    ? (e.exit("htmlFlowData"), e.check(tt, A, E)(t))
                    : null === t || e_(t)
                    ? (e.exit("htmlFlowData"), E(t))
                    : (e.consume(t), C);
                }
                function E(t) {
                  return e.check(tn, O, A)(t);
                }
                function O(t) {
                  return (
                    e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), T
                  );
                }
                function T(t) {
                  return null === t || e_(t)
                    ? E(t)
                    : (e.enter("htmlFlowData"), C(t));
                }
                function j(t) {
                  return 45 === t ? (e.consume(t), L) : C(t);
                }
                function _(t) {
                  return 47 === t ? (e.consume(t), (o = ""), P) : C(t);
                }
                function P(t) {
                  if (62 === t) {
                    let n = o.toLowerCase();
                    return te.includes(n) ? (e.consume(t), N) : C(t);
                  }
                  return ew(t) && o.length < 8
                    ? (e.consume(t), (o += String.fromCharCode(t)), P)
                    : C(t);
                }
                function M(t) {
                  return 93 === t ? (e.consume(t), L) : C(t);
                }
                function L(t) {
                  return 62 === t
                    ? (e.consume(t), N)
                    : 45 === t && 2 === r
                    ? (e.consume(t), L)
                    : C(t);
                }
                function N(t) {
                  return null === t || e_(t)
                    ? (e.exit("htmlFlowData"), A(t))
                    : (e.consume(t), N);
                }
                function A(n) {
                  return e.exit("htmlFlow"), t(n);
                }
              },
            },
            61: e9,
            95: eZ,
            96: ti,
            126: ti,
          },
          tC = { 38: ta, 92: ts },
          tE = {
            [-5]: tu,
            [-4]: tu,
            [-3]: tu,
            33: tm,
            38: ta,
            42: tv,
            60: [
              {
                name: "autolink",
                tokenize: function (e, t, n) {
                  let r = 0;
                  return function (t) {
                    return (
                      e.enter("autolink"),
                      e.enter("autolinkMarker"),
                      e.consume(t),
                      e.exit("autolinkMarker"),
                      e.enter("autolinkProtocol"),
                      i
                    );
                  };
                  function i(t) {
                    return ew(t) ? (e.consume(t), o) : 64 === t ? n(t) : a(t);
                  }
                  function o(t) {
                    return 43 === t || 45 === t || 46 === t || eS(t)
                      ? ((r = 1),
                        (function t(n) {
                          return 58 === n
                            ? (e.consume(n), (r = 0), l)
                            : (43 === n || 45 === n || 46 === n || eS(n)) &&
                              r++ < 32
                            ? (e.consume(n), t)
                            : ((r = 0), a(n));
                        })(t))
                      : a(t);
                  }
                  function l(r) {
                    return 62 === r
                      ? (e.exit("autolinkProtocol"),
                        e.enter("autolinkMarker"),
                        e.consume(r),
                        e.exit("autolinkMarker"),
                        e.exit("autolink"),
                        t)
                      : null === r || 32 === r || 60 === r || eE(r)
                      ? n(r)
                      : (e.consume(r), l);
                  }
                  function a(t) {
                    return 64 === t
                      ? (e.consume(t), s)
                      : eC(t)
                      ? (e.consume(t), a)
                      : n(t);
                  }
                  function s(i) {
                    return eS(i)
                      ? (function i(o) {
                          return 46 === o
                            ? (e.consume(o), (r = 0), s)
                            : 62 === o
                            ? ((e.exit("autolinkProtocol").type =
                                "autolinkEmail"),
                              e.enter("autolinkMarker"),
                              e.consume(o),
                              e.exit("autolinkMarker"),
                              e.exit("autolink"),
                              t)
                            : (function t(o) {
                                if ((45 === o || eS(o)) && r++ < 63) {
                                  let n = 45 === o ? t : i;
                                  return e.consume(o), n;
                                }
                                return n(o);
                              })(o);
                        })(i)
                      : n(i);
                  }
                },
              },
              {
                name: "htmlText",
                tokenize: function (e, t, n) {
                  let r, i, o;
                  let l = this;
                  return function (t) {
                    return (
                      e.enter("htmlText"),
                      e.enter("htmlTextData"),
                      e.consume(t),
                      a
                    );
                  };
                  function a(t) {
                    return 33 === t
                      ? (e.consume(t), s)
                      : 47 === t
                      ? (e.consume(t), b)
                      : 63 === t
                      ? (e.consume(t), y)
                      : ew(t)
                      ? (e.consume(t), w)
                      : n(t);
                  }
                  function s(t) {
                    return 45 === t
                      ? (e.consume(t), u)
                      : 91 === t
                      ? (e.consume(t), (i = 0), h)
                      : ew(t)
                      ? (e.consume(t), v)
                      : n(t);
                  }
                  function u(t) {
                    return 45 === t ? (e.consume(t), f) : n(t);
                  }
                  function c(t) {
                    return null === t
                      ? n(t)
                      : 45 === t
                      ? (e.consume(t), d)
                      : e_(t)
                      ? ((o = c), P(t))
                      : (e.consume(t), c);
                  }
                  function d(t) {
                    return 45 === t ? (e.consume(t), f) : c(t);
                  }
                  function f(e) {
                    return 62 === e ? _(e) : 45 === e ? d(e) : c(e);
                  }
                  function h(t) {
                    let r = "CDATA[";
                    return t === r.charCodeAt(i++)
                      ? (e.consume(t), i === r.length ? p : h)
                      : n(t);
                  }
                  function p(t) {
                    return null === t
                      ? n(t)
                      : 93 === t
                      ? (e.consume(t), m)
                      : e_(t)
                      ? ((o = p), P(t))
                      : (e.consume(t), p);
                  }
                  function m(t) {
                    return 93 === t ? (e.consume(t), g) : p(t);
                  }
                  function g(t) {
                    return 62 === t
                      ? _(t)
                      : 93 === t
                      ? (e.consume(t), g)
                      : p(t);
                  }
                  function v(t) {
                    return null === t || 62 === t
                      ? _(t)
                      : e_(t)
                      ? ((o = v), P(t))
                      : (e.consume(t), v);
                  }
                  function y(t) {
                    return null === t
                      ? n(t)
                      : 63 === t
                      ? (e.consume(t), x)
                      : e_(t)
                      ? ((o = y), P(t))
                      : (e.consume(t), y);
                  }
                  function x(e) {
                    return 62 === e ? _(e) : y(e);
                  }
                  function b(t) {
                    return ew(t) ? (e.consume(t), k) : n(t);
                  }
                  function k(t) {
                    return 45 === t || eS(t)
                      ? (e.consume(t), k)
                      : (function t(n) {
                          return e_(n)
                            ? ((o = t), P(n))
                            : eM(n)
                            ? (e.consume(n), t)
                            : _(n);
                        })(t);
                  }
                  function w(t) {
                    return 45 === t || eS(t)
                      ? (e.consume(t), w)
                      : 47 === t || 62 === t || eP(t)
                      ? S(t)
                      : n(t);
                  }
                  function S(t) {
                    return 47 === t
                      ? (e.consume(t), _)
                      : 58 === t || 95 === t || ew(t)
                      ? (e.consume(t), C)
                      : e_(t)
                      ? ((o = S), P(t))
                      : eM(t)
                      ? (e.consume(t), S)
                      : _(t);
                  }
                  function C(t) {
                    return 45 === t || 46 === t || 58 === t || 95 === t || eS(t)
                      ? (e.consume(t), C)
                      : (function t(n) {
                          return 61 === n
                            ? (e.consume(n), E)
                            : e_(n)
                            ? ((o = t), P(n))
                            : eM(n)
                            ? (e.consume(n), t)
                            : S(n);
                        })(t);
                  }
                  function E(t) {
                    return null === t ||
                      60 === t ||
                      61 === t ||
                      62 === t ||
                      96 === t
                      ? n(t)
                      : 34 === t || 39 === t
                      ? (e.consume(t), (r = t), O)
                      : e_(t)
                      ? ((o = E), P(t))
                      : eM(t)
                      ? (e.consume(t), E)
                      : (e.consume(t), T);
                  }
                  function O(t) {
                    return t === r
                      ? (e.consume(t), (r = void 0), j)
                      : null === t
                      ? n(t)
                      : e_(t)
                      ? ((o = O), P(t))
                      : (e.consume(t), O);
                  }
                  function T(t) {
                    return null === t ||
                      34 === t ||
                      39 === t ||
                      60 === t ||
                      61 === t ||
                      96 === t
                      ? n(t)
                      : 47 === t || 62 === t || eP(t)
                      ? S(t)
                      : (e.consume(t), T);
                  }
                  function j(e) {
                    return 47 === e || 62 === e || eP(e) ? S(e) : n(e);
                  }
                  function _(r) {
                    return 62 === r
                      ? (e.consume(r),
                        e.exit("htmlTextData"),
                        e.exit("htmlText"),
                        t)
                      : n(r);
                  }
                  function P(t) {
                    return (
                      e.exit("htmlTextData"),
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      M
                    );
                  }
                  function M(t) {
                    return eM(t)
                      ? eI(
                          e,
                          L,
                          "linePrefix",
                          l.parser.constructs.disable.null.includes(
                            "codeIndented"
                          )
                            ? void 0
                            : 4
                        )(t)
                      : L(t);
                  }
                  function L(t) {
                    return e.enter("htmlTextData"), o(t);
                  }
                },
              },
            ],
            91: tx,
            92: [
              {
                name: "hardBreakEscape",
                tokenize: function (e, t, n) {
                  return function (t) {
                    return e.enter("hardBreakEscape"), e.consume(t), r;
                  };
                  function r(r) {
                    return e_(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
                  }
                },
              },
              ts,
            ],
            93: td,
            95: tv,
            96: {
              name: "codeText",
              previous: function (e) {
                return (
                  96 !== e ||
                  "characterEscape" ===
                    this.events[this.events.length - 1][1].type
                );
              },
              resolve: function (e) {
                let t,
                  n,
                  r = e.length - 4,
                  i = 3;
                if (
                  ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                  ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
                ) {
                  for (t = i; ++t < r; )
                    if ("codeTextData" === e[t][1].type) {
                      (e[i][1].type = "codeTextPadding"),
                        (e[r][1].type = "codeTextPadding"),
                        (i += 2),
                        (r -= 2);
                      break;
                    }
                }
                for (t = i - 1, r++; ++t <= r; )
                  void 0 === n
                    ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                    : (t === r || "lineEnding" === e[t][1].type) &&
                      ((e[n][1].type = "codeTextData"),
                      t !== n + 2 &&
                        ((e[n][1].end = e[t - 1][1].end),
                        e.splice(n + 2, t - n - 2),
                        (r -= t - n - 2),
                        (t = n + 2)),
                      (n = void 0));
                return e;
              },
              tokenize: function (e, t, n) {
                let r,
                  i,
                  o = 0;
                return function (t) {
                  return (
                    e.enter("codeText"),
                    e.enter("codeTextSequence"),
                    (function t(n) {
                      return 96 === n
                        ? (e.consume(n), o++, t)
                        : (e.exit("codeTextSequence"), l(n));
                    })(t)
                  );
                };
                function l(s) {
                  return null === s
                    ? n(s)
                    : 32 === s
                    ? (e.enter("space"), e.consume(s), e.exit("space"), l)
                    : 96 === s
                    ? ((i = e.enter("codeTextSequence")),
                      (r = 0),
                      (function n(l) {
                        return 96 === l
                          ? (e.consume(l), r++, n)
                          : r === o
                          ? (e.exit("codeTextSequence"),
                            e.exit("codeText"),
                            t(l))
                          : ((i.type = "codeTextData"), a(l));
                      })(s))
                    : e_(s)
                    ? (e.enter("lineEnding"),
                      e.consume(s),
                      e.exit("lineEnding"),
                      l)
                    : (e.enter("codeTextData"), a(s));
                }
                function a(t) {
                  return null === t || 32 === t || 96 === t || e_(t)
                    ? (e.exit("codeTextData"), l(t))
                    : (e.consume(t), a);
                }
              },
            },
          },
          tO = { null: [tv, eV] },
          tT = { null: [42, 95] },
          tj = { null: [] },
          t_ = /[\0\t\n\r]/g;
        function tP(e, t) {
          let n = Number.parseInt(e, t);
          return n < 9 ||
            11 === n ||
            (n > 13 && n < 32) ||
            (n > 126 && n < 160) ||
            (n > 55295 && n < 57344) ||
            (n > 64975 && n < 65008) ||
            (65535 & n) == 65535 ||
            (65535 & n) == 65534 ||
            n > 1114111
            ? "�"
            : String.fromCodePoint(n);
        }
        let tM =
          /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
        function tL(e, t, n) {
          if (t) return t;
          if (35 === n.charCodeAt(0)) {
            let e = n.charCodeAt(1),
              t = 120 === e || 88 === e;
            return tP(n.slice(t ? 2 : 1), t ? 16 : 10);
          }
          return tl(n) || e;
        }
        let tN = {}.hasOwnProperty;
        function tA(e) {
          return { line: e.line, column: e.column, offset: e.offset };
        }
        function tI(e, t) {
          if (e)
            throw Error(
              "Cannot close `" +
                e.type +
                "` (" +
                Y({ start: e.start, end: e.end }) +
                "): a different token (`" +
                t.type +
                "`, " +
                Y({ start: t.start, end: t.end }) +
                ") is open"
            );
          throw Error(
            "Cannot close document, a token (`" +
              t.type +
              "`, " +
              Y({ start: t.start, end: t.end }) +
              ") is still open"
          );
        }
        function tR(e) {
          let t = this;
          t.parser = function (n) {
            var r, o;
            let l, a, s, u;
            return (
              "string" !=
                typeof (r = {
                  ...t.data("settings"),
                  ...e,
                  extensions: t.data("micromarkExtensions") || [],
                  mdastExtensions: t.data("fromMarkdownExtensions") || [],
                }) && ((o = r), (r = void 0)),
              (function (e) {
                let t = {
                  transforms: [],
                  canContainEols: [
                    "emphasis",
                    "fragment",
                    "heading",
                    "paragraph",
                    "strong",
                  ],
                  enter: {
                    autolink: r(v),
                    autolinkProtocol: u,
                    autolinkEmail: u,
                    atxHeading: r(p),
                    blockQuote: r(function () {
                      return { type: "blockquote", children: [] };
                    }),
                    characterEscape: u,
                    characterReference: u,
                    codeFenced: r(h),
                    codeFencedFenceInfo: i,
                    codeFencedFenceMeta: i,
                    codeIndented: r(h, i),
                    codeText: r(function () {
                      return { type: "inlineCode", value: "" };
                    }, i),
                    codeTextData: u,
                    data: u,
                    codeFlowValue: u,
                    definition: r(function () {
                      return {
                        type: "definition",
                        identifier: "",
                        label: null,
                        title: null,
                        url: "",
                      };
                    }),
                    definitionDestinationString: i,
                    definitionLabelString: i,
                    definitionTitleString: i,
                    emphasis: r(function () {
                      return { type: "emphasis", children: [] };
                    }),
                    hardBreakEscape: r(m),
                    hardBreakTrailing: r(m),
                    htmlFlow: r(g, i),
                    htmlFlowData: u,
                    htmlText: r(g, i),
                    htmlTextData: u,
                    image: r(function () {
                      return { type: "image", title: null, url: "", alt: null };
                    }),
                    label: i,
                    link: r(v),
                    listItem: r(function (e) {
                      return {
                        type: "listItem",
                        spread: e._spread,
                        checked: null,
                        children: [],
                      };
                    }),
                    listItemValue: function (e) {
                      this.data.expectingFirstListItemValue &&
                        ((this.stack[this.stack.length - 2].start =
                          Number.parseInt(this.sliceSerialize(e), 10)),
                        (this.data.expectingFirstListItemValue = void 0));
                    },
                    listOrdered: r(y, function () {
                      this.data.expectingFirstListItemValue = !0;
                    }),
                    listUnordered: r(y),
                    paragraph: r(function () {
                      return { type: "paragraph", children: [] };
                    }),
                    reference: function () {
                      this.data.referenceType = "collapsed";
                    },
                    referenceString: i,
                    resourceDestinationString: i,
                    resourceTitleString: i,
                    setextHeading: r(p),
                    strong: r(function () {
                      return { type: "strong", children: [] };
                    }),
                    thematicBreak: r(function () {
                      return { type: "thematicBreak" };
                    }),
                  },
                  exit: {
                    atxHeading: l(),
                    atxHeadingSequence: function (e) {
                      let t = this.stack[this.stack.length - 1];
                      if (!t.depth) {
                        let n = this.sliceSerialize(e).length;
                        t.depth = n;
                      }
                    },
                    autolink: l(),
                    autolinkEmail: function (e) {
                      c.call(this, e),
                        (this.stack[this.stack.length - 1].url =
                          "mailto:" + this.sliceSerialize(e));
                    },
                    autolinkProtocol: function (e) {
                      c.call(this, e),
                        (this.stack[this.stack.length - 1].url =
                          this.sliceSerialize(e));
                    },
                    blockQuote: l(),
                    characterEscapeValue: c,
                    characterReferenceMarkerHexadecimal: f,
                    characterReferenceMarkerNumeric: f,
                    characterReferenceValue: function (e) {
                      let t;
                      let n = this.sliceSerialize(e),
                        r = this.data.characterReferenceType;
                      r
                        ? ((t = tP(
                            n,
                            "characterReferenceMarkerNumeric" === r ? 10 : 16
                          )),
                          (this.data.characterReferenceType = void 0))
                        : (t = tl(n));
                      let i = this.stack[this.stack.length - 1];
                      i.value += t;
                    },
                    characterReference: function (e) {
                      this.stack.pop().position.end = tA(e.end);
                    },
                    codeFenced: l(function () {
                      let e = this.resume();
                      (this.stack[this.stack.length - 1].value = e.replace(
                        /^(\r?\n|\r)|(\r?\n|\r)$/g,
                        ""
                      )),
                        (this.data.flowCodeInside = void 0);
                    }),
                    codeFencedFence: function () {
                      this.data.flowCodeInside ||
                        (this.buffer(), (this.data.flowCodeInside = !0));
                    },
                    codeFencedFenceInfo: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].lang = e;
                    },
                    codeFencedFenceMeta: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].meta = e;
                    },
                    codeFlowValue: c,
                    codeIndented: l(function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].value = e.replace(
                        /(\r?\n|\r)$/g,
                        ""
                      );
                    }),
                    codeText: l(function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].value = e;
                    }),
                    codeTextData: c,
                    data: c,
                    definition: l(),
                    definitionDestinationString: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].url = e;
                    },
                    definitionLabelString: function (e) {
                      let t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                      (n.label = t),
                        (n.identifier = e5(
                          this.sliceSerialize(e)
                        ).toLowerCase());
                    },
                    definitionTitleString: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].title = e;
                    },
                    emphasis: l(),
                    hardBreakEscape: l(d),
                    hardBreakTrailing: l(d),
                    htmlFlow: l(function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].value = e;
                    }),
                    htmlFlowData: c,
                    htmlText: l(function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].value = e;
                    }),
                    htmlTextData: c,
                    image: l(function () {
                      let e = this.stack[this.stack.length - 1];
                      if (this.data.inReference) {
                        let t = this.data.referenceType || "shortcut";
                        (e.type += "Reference"),
                          (e.referenceType = t),
                          delete e.url,
                          delete e.title;
                      } else delete e.identifier, delete e.label;
                      this.data.referenceType = void 0;
                    }),
                    label: function () {
                      let e = this.stack[this.stack.length - 1],
                        t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                      if (((this.data.inReference = !0), "link" === n.type)) {
                        let t = e.children;
                        n.children = t;
                      } else n.alt = t;
                    },
                    labelText: function (e) {
                      let t = this.sliceSerialize(e),
                        n = this.stack[this.stack.length - 2];
                      (n.label = t.replace(tM, tL)),
                        (n.identifier = e5(t).toLowerCase());
                    },
                    lineEnding: function (e) {
                      let n = this.stack[this.stack.length - 1];
                      if (this.data.atHardBreak) {
                        (n.children[n.children.length - 1].position.end = tA(
                          e.end
                        )),
                          (this.data.atHardBreak = void 0);
                        return;
                      }
                      !this.data.setextHeadingSlurpLineEnding &&
                        t.canContainEols.includes(n.type) &&
                        (u.call(this, e), c.call(this, e));
                    },
                    link: l(function () {
                      let e = this.stack[this.stack.length - 1];
                      if (this.data.inReference) {
                        let t = this.data.referenceType || "shortcut";
                        (e.type += "Reference"),
                          (e.referenceType = t),
                          delete e.url,
                          delete e.title;
                      } else delete e.identifier, delete e.label;
                      this.data.referenceType = void 0;
                    }),
                    listItem: l(),
                    listOrdered: l(),
                    listUnordered: l(),
                    paragraph: l(),
                    referenceString: function (e) {
                      let t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                      (n.label = t),
                        (n.identifier = e5(
                          this.sliceSerialize(e)
                        ).toLowerCase()),
                        (this.data.referenceType = "full");
                    },
                    resourceDestinationString: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].url = e;
                    },
                    resourceTitleString: function () {
                      let e = this.resume();
                      this.stack[this.stack.length - 1].title = e;
                    },
                    resource: function () {
                      this.data.inReference = void 0;
                    },
                    setextHeading: l(function () {
                      this.data.setextHeadingSlurpLineEnding = void 0;
                    }),
                    setextHeadingLineSequence: function (e) {
                      this.stack[this.stack.length - 1].depth =
                        61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                    },
                    setextHeadingText: function () {
                      this.data.setextHeadingSlurpLineEnding = !0;
                    },
                    strong: l(),
                    thematicBreak: l(),
                  },
                };
                (function e(t, n) {
                  let r = -1;
                  for (; ++r < n.length; ) {
                    let i = n[r];
                    Array.isArray(i)
                      ? e(t, i)
                      : (function (e, t) {
                          let n;
                          for (n in t)
                            if (tN.call(t, n))
                              switch (n) {
                                case "canContainEols": {
                                  let r = t[n];
                                  r && e[n].push(...r);
                                  break;
                                }
                                case "transforms": {
                                  let r = t[n];
                                  r && e[n].push(...r);
                                  break;
                                }
                                case "enter":
                                case "exit": {
                                  let r = t[n];
                                  r && Object.assign(e[n], r);
                                }
                              }
                        })(t, i);
                  }
                })(t, (e || {}).mdastExtensions || []);
                let n = {};
                return function (e) {
                  let r = { type: "root", children: [] },
                    l = {
                      stack: [r],
                      tokenStack: [],
                      config: t,
                      enter: o,
                      exit: a,
                      buffer: i,
                      resume: s,
                      data: n,
                    },
                    u = [],
                    c = -1;
                  for (; ++c < e.length; )
                    ("listOrdered" === e[c][1].type ||
                      "listUnordered" === e[c][1].type) &&
                      ("enter" === e[c][0]
                        ? u.push(c)
                        : (c = (function (e, t, n) {
                            let r,
                              i,
                              o,
                              l,
                              a = t - 1,
                              s = -1,
                              u = !1;
                            for (; ++a <= n; ) {
                              let t = e[a];
                              switch (t[1].type) {
                                case "listUnordered":
                                case "listOrdered":
                                case "blockQuote":
                                  "enter" === t[0] ? s++ : s--, (l = void 0);
                                  break;
                                case "lineEndingBlank":
                                  "enter" === t[0] &&
                                    (!r || l || s || o || (o = a),
                                    (l = void 0));
                                  break;
                                case "linePrefix":
                                case "listItemValue":
                                case "listItemMarker":
                                case "listItemPrefix":
                                case "listItemPrefixWhitespace":
                                  break;
                                default:
                                  l = void 0;
                              }
                              if (
                                (!s &&
                                  "enter" === t[0] &&
                                  "listItemPrefix" === t[1].type) ||
                                (-1 === s &&
                                  "exit" === t[0] &&
                                  ("listUnordered" === t[1].type ||
                                    "listOrdered" === t[1].type))
                              ) {
                                if (r) {
                                  let l = a;
                                  for (i = void 0; l--; ) {
                                    let t = e[l];
                                    if (
                                      "lineEnding" === t[1].type ||
                                      "lineEndingBlank" === t[1].type
                                    ) {
                                      if ("exit" === t[0]) continue;
                                      i &&
                                        ((e[i][1].type = "lineEndingBlank"),
                                        (u = !0)),
                                        (t[1].type = "lineEnding"),
                                        (i = l);
                                    } else if (
                                      "linePrefix" === t[1].type ||
                                      "blockQuotePrefix" === t[1].type ||
                                      "blockQuotePrefixWhitespace" ===
                                        t[1].type ||
                                      "blockQuoteMarker" === t[1].type ||
                                      "listItemIndent" === t[1].type
                                    );
                                    else break;
                                  }
                                  o && (!i || o < i) && (r._spread = !0),
                                    (r.end = Object.assign(
                                      {},
                                      i ? e[i][1].start : t[1].end
                                    )),
                                    e.splice(i || a, 0, ["exit", r, t[2]]),
                                    a++,
                                    n++;
                                }
                                if ("listItemPrefix" === t[1].type) {
                                  let i = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: Object.assign({}, t[1].start),
                                    end: void 0,
                                  };
                                  (r = i),
                                    e.splice(a, 0, ["enter", i, t[2]]),
                                    a++,
                                    n++,
                                    (o = void 0),
                                    (l = !0);
                                }
                              }
                            }
                            return (e[t][1]._spread = u), n;
                          })(e, u.pop(), c)));
                  for (c = -1; ++c < e.length; ) {
                    let n = t[e[c][0]];
                    tN.call(n, e[c][1].type) &&
                      n[e[c][1].type].call(
                        Object.assign(
                          { sliceSerialize: e[c][2].sliceSerialize },
                          l
                        ),
                        e[c][1]
                      );
                  }
                  if (l.tokenStack.length > 0) {
                    let e = l.tokenStack[l.tokenStack.length - 1];
                    (e[1] || tI).call(l, void 0, e[0]);
                  }
                  for (
                    r.position = {
                      start: tA(
                        e.length > 0
                          ? e[0][1].start
                          : { line: 1, column: 1, offset: 0 }
                      ),
                      end: tA(
                        e.length > 0
                          ? e[e.length - 2][1].end
                          : { line: 1, column: 1, offset: 0 }
                      ),
                    },
                      c = -1;
                    ++c < t.transforms.length;

                  )
                    r = t.transforms[c](r) || r;
                  return r;
                };
                function r(e, t) {
                  return function (n) {
                    o.call(this, e(n), n), t && t.call(this, n);
                  };
                }
                function i() {
                  this.stack.push({ type: "fragment", children: [] });
                }
                function o(e, t, n) {
                  this.stack[this.stack.length - 1].children.push(e),
                    this.stack.push(e),
                    this.tokenStack.push([t, n || void 0]),
                    (e.position = { start: tA(t.start), end: void 0 });
                }
                function l(e) {
                  return function (t) {
                    e && e.call(this, t), a.call(this, t);
                  };
                }
                function a(e, t) {
                  let n = this.stack.pop(),
                    r = this.tokenStack.pop();
                  if (r)
                    r[0].type !== e.type &&
                      (t
                        ? t.call(this, e, r[0])
                        : (r[1] || tI).call(this, e, r[0]));
                  else
                    throw Error(
                      "Cannot close `" +
                        e.type +
                        "` (" +
                        Y({ start: e.start, end: e.end }) +
                        "): it’s not open"
                    );
                  n.position.end = tA(e.end);
                }
                function s() {
                  return ep(
                    this.stack.pop(),
                    "boolean" != typeof eh.includeImageAlt ||
                      eh.includeImageAlt,
                    "boolean" != typeof eh.includeHtml || eh.includeHtml
                  );
                }
                function u(e) {
                  let t = this.stack[this.stack.length - 1].children,
                    n = t[t.length - 1];
                  (n && "text" === n.type) ||
                    (((n = { type: "text", value: "" }).position = {
                      start: tA(e.start),
                      end: void 0,
                    }),
                    t.push(n)),
                    this.stack.push(n);
                }
                function c(e) {
                  let t = this.stack.pop();
                  (t.value += this.sliceSerialize(e)),
                    (t.position.end = tA(e.end));
                }
                function d() {
                  this.data.atHardBreak = !0;
                }
                function f(e) {
                  this.data.characterReferenceType = e.type;
                }
                function h() {
                  return { type: "code", lang: null, meta: null, value: "" };
                }
                function p() {
                  return { type: "heading", depth: 0, children: [] };
                }
                function m() {
                  return { type: "break" };
                }
                function g() {
                  return { type: "html", value: "" };
                }
                function v() {
                  return { type: "link", title: null, url: "", children: [] };
                }
                function y(e) {
                  return {
                    type: "list",
                    ordered: "listOrdered" === e.type,
                    start: null,
                    spread: e._spread,
                    children: [],
                  };
                }
              })(o)(
                (function (e) {
                  for (; !eb(e); );
                  return e;
                })(
                  (function (e) {
                    let t = {
                      constructs: (function (e) {
                        let t = {},
                          n = -1;
                        for (; ++n < e.length; )
                          (function (e, t) {
                            let n;
                            for (n in t) {
                              let r;
                              let i =
                                  (ek.call(e, n) ? e[n] : void 0) ||
                                  (e[n] = {}),
                                o = t[n];
                              if (o)
                                for (r in o) {
                                  ek.call(i, r) || (i[r] = []);
                                  let e = o[r];
                                  (function (e, t) {
                                    let n = -1,
                                      r = [];
                                    for (; ++n < t.length; )
                                      ("after" === t[n].add ? e : r).push(t[n]);
                                    eg(e, 0, 0, r);
                                  })(i[r], Array.isArray(e) ? e : e ? [e] : []);
                                }
                            }
                          })(t, e[n]);
                        return t;
                      })([i, ...((e || {}).extensions || [])]),
                      content: n(eR),
                      defined: [],
                      document: n(eD),
                      flow: n(eU),
                      lazy: {},
                      string: n(eW),
                      text: n(eq),
                    };
                    return t;
                    function n(e) {
                      return function (n) {
                        return (function (e, t, n) {
                          let r = {
                              _bufferIndex: -1,
                              _index: 0,
                              line: (n && n.line) || 1,
                              column: (n && n.column) || 1,
                              offset: (n && n.offset) || 0,
                            },
                            i = {},
                            o = [],
                            l = [],
                            a = [],
                            s = {
                              attempt: p(function (e, t) {
                                m(e, t.from);
                              }),
                              check: p(h),
                              consume: function (e) {
                                e_(e)
                                  ? (r.line++,
                                    (r.column = 1),
                                    (r.offset += -3 === e ? 2 : 1),
                                    g())
                                  : -1 !== e && (r.column++, r.offset++),
                                  r._bufferIndex < 0
                                    ? r._index++
                                    : (r._bufferIndex++,
                                      r._bufferIndex === l[r._index].length &&
                                        ((r._bufferIndex = -1), r._index++)),
                                  (u.previous = e);
                              },
                              enter: function (e, t) {
                                let n = t || {};
                                return (
                                  (n.type = e),
                                  (n.start = f()),
                                  u.events.push(["enter", n, u]),
                                  a.push(n),
                                  n
                                );
                              },
                              exit: function (e) {
                                let t = a.pop();
                                return (
                                  (t.end = f()),
                                  u.events.push(["exit", t, u]),
                                  t
                                );
                              },
                              interrupt: p(h, { interrupt: !0 }),
                            },
                            u = {
                              code: null,
                              containerState: {},
                              defineSkip: function (e) {
                                (i[e.line] = e.column), g();
                              },
                              events: [],
                              now: f,
                              parser: e,
                              previous: null,
                              sliceSerialize: function (e, t) {
                                return (function (e, t) {
                                  let n,
                                    r = -1,
                                    i = [];
                                  for (; ++r < e.length; ) {
                                    let o;
                                    let l = e[r];
                                    if ("string" == typeof l) o = l;
                                    else
                                      switch (l) {
                                        case -5:
                                          o = "\r";
                                          break;
                                        case -4:
                                          o = "\n";
                                          break;
                                        case -3:
                                          o = "\r\n";
                                          break;
                                        case -2:
                                          o = t ? " " : "	";
                                          break;
                                        case -1:
                                          if (!t && n) continue;
                                          o = " ";
                                          break;
                                        default:
                                          o = String.fromCharCode(l);
                                      }
                                    (n = -2 === l), i.push(o);
                                  }
                                  return i.join("");
                                })(d(e), t);
                              },
                              sliceStream: d,
                              write: function (e) {
                                return ((l = ev(l, e)),
                                (function () {
                                  let e;
                                  for (; r._index < l.length; ) {
                                    let n = l[r._index];
                                    if ("string" == typeof n)
                                      for (
                                        e = r._index,
                                          r._bufferIndex < 0 &&
                                            (r._bufferIndex = 0);
                                        r._index === e &&
                                        r._bufferIndex < n.length;

                                      ) {
                                        var t;
                                        (t = n.charCodeAt(r._bufferIndex)),
                                          (c = c(t));
                                      }
                                    else c = c(n);
                                  }
                                })(),
                                null !== l[l.length - 1])
                                  ? []
                                  : (m(t, 0),
                                    (u.events = tc(o, u.events, u)),
                                    u.events);
                              },
                            },
                            c = t.tokenize.call(u, s);
                          return t.resolveAll && o.push(t), u;
                          function d(e) {
                            return (function (e, t) {
                              let n;
                              let r = t.start._index,
                                i = t.start._bufferIndex,
                                o = t.end._index,
                                l = t.end._bufferIndex;
                              if (r === o) n = [e[r].slice(i, l)];
                              else {
                                if (((n = e.slice(r, o)), i > -1)) {
                                  let e = n[0];
                                  "string" == typeof e
                                    ? (n[0] = e.slice(i))
                                    : n.shift();
                                }
                                l > 0 && n.push(e[o].slice(0, l));
                              }
                              return n;
                            })(l, e);
                          }
                          function f() {
                            let {
                              _bufferIndex: e,
                              _index: t,
                              line: n,
                              column: i,
                              offset: o,
                            } = r;
                            return {
                              _bufferIndex: e,
                              _index: t,
                              line: n,
                              column: i,
                              offset: o,
                            };
                          }
                          function h(e, t) {
                            t.restore();
                          }
                          function p(e, t) {
                            return function (n, i, o) {
                              let l, c, d, h;
                              return Array.isArray(n)
                                ? p(n)
                                : "tokenize" in n
                                ? p([n])
                                : function (e) {
                                    let t = null !== e && n[e],
                                      r = null !== e && n.null;
                                    return p([
                                      ...(Array.isArray(t) ? t : t ? [t] : []),
                                      ...(Array.isArray(r) ? r : r ? [r] : []),
                                    ])(e);
                                  };
                              function p(e) {
                                return ((l = e), (c = 0), 0 === e.length)
                                  ? o
                                  : m(e[c]);
                              }
                              function m(e) {
                                return function (n) {
                                  return ((h = (function () {
                                    let e = f(),
                                      t = u.previous,
                                      n = u.currentConstruct,
                                      i = u.events.length,
                                      o = Array.from(a);
                                    return {
                                      from: i,
                                      restore: function () {
                                        (r = e),
                                          (u.previous = t),
                                          (u.currentConstruct = n),
                                          (u.events.length = i),
                                          (a = o),
                                          g();
                                      },
                                    };
                                  })()),
                                  (d = e),
                                  e.partial || (u.currentConstruct = e),
                                  e.name &&
                                    u.parser.constructs.disable.null.includes(
                                      e.name
                                    ))
                                    ? y(n)
                                    : e.tokenize.call(
                                        t
                                          ? Object.assign(Object.create(u), t)
                                          : u,
                                        s,
                                        v,
                                        y
                                      )(n);
                                };
                              }
                              function v(t) {
                                return e(d, h), i;
                              }
                              function y(e) {
                                return (h.restore(), ++c < l.length)
                                  ? m(l[c])
                                  : o;
                              }
                            };
                          }
                          function m(e, t) {
                            e.resolveAll && !o.includes(e) && o.push(e),
                              e.resolve &&
                                eg(
                                  u.events,
                                  t,
                                  u.events.length - t,
                                  e.resolve(u.events.slice(t), u)
                                ),
                              e.resolveTo &&
                                (u.events = e.resolveTo(u.events, u));
                          }
                          function g() {
                            r.line in i &&
                              r.column < 2 &&
                              ((r.column = i[r.line]),
                              (r.offset += i[r.line] - 1));
                          }
                        })(t, e, n);
                      };
                    }
                  })(o)
                    .document()
                    .write(
                      ((a = 1),
                      (s = ""),
                      (u = !0),
                      function (e, t, n) {
                        let r, i, o, c, d;
                        let f = [];
                        for (
                          e =
                            s +
                            ("string" == typeof e
                              ? e.toString()
                              : new TextDecoder(t || void 0).decode(e)),
                            o = 0,
                            s = "",
                            u &&
                              (65279 === e.charCodeAt(0) && o++, (u = void 0));
                          o < e.length;

                        ) {
                          if (
                            ((t_.lastIndex = o),
                            (c =
                              (r = t_.exec(e)) && void 0 !== r.index
                                ? r.index
                                : e.length),
                            (d = e.charCodeAt(c)),
                            !r)
                          ) {
                            s = e.slice(o);
                            break;
                          }
                          if (10 === d && o === c && l)
                            f.push(-3), (l = void 0);
                          else
                            switch (
                              (l && (f.push(-5), (l = void 0)),
                              o < c && (f.push(e.slice(o, c)), (a += c - o)),
                              d)
                            ) {
                              case 0:
                                f.push(65533), a++;
                                break;
                              case 9:
                                for (
                                  i = 4 * Math.ceil(a / 4), f.push(-2);
                                  a++ < i;

                                )
                                  f.push(-1);
                                break;
                              case 10:
                                f.push(-4), (a = 1);
                                break;
                              default:
                                (l = !0), (a = 1);
                            }
                          o = c + 1;
                        }
                        return (
                          n && (l && f.push(-5), s && f.push(s), f.push(null)),
                          f
                        );
                      })(n, r, !0)
                    )
                )
              )
            );
          };
        }
        let tD = "object" == typeof self ? self : globalThis,
          tF = (e, t) => {
            let n = (t, n) => (e.set(n, t), t),
              r = (i) => {
                if (e.has(i)) return e.get(i);
                let [o, l] = t[i];
                switch (o) {
                  case 0:
                  case -1:
                    return n(l, i);
                  case 1: {
                    let e = n([], i);
                    for (let t of l) e.push(r(t));
                    return e;
                  }
                  case 2: {
                    let e = n({}, i);
                    for (let [t, n] of l) e[r(t)] = r(n);
                    return e;
                  }
                  case 3:
                    return n(new Date(l), i);
                  case 4: {
                    let { source: e, flags: t } = l;
                    return n(new RegExp(e, t), i);
                  }
                  case 5: {
                    let e = n(new Map(), i);
                    for (let [t, n] of l) e.set(r(t), r(n));
                    return e;
                  }
                  case 6: {
                    let e = n(new Set(), i);
                    for (let t of l) e.add(r(t));
                    return e;
                  }
                  case 7: {
                    let { name: e, message: t } = l;
                    return n(new tD[e](t), i);
                  }
                  case 8:
                    return n(BigInt(l), i);
                  case "BigInt":
                    return n(Object(BigInt(l)), i);
                  case "ArrayBuffer":
                    return n(new Uint8Array(l).buffer, l);
                  case "DataView": {
                    let { buffer: e } = new Uint8Array(l);
                    return n(new DataView(e), l);
                  }
                }
                return n(new tD[o](l), i);
              };
            return r;
          },
          tz = (e) => tF(new Map(), e)(0),
          { toString: tH } = {},
          { keys: tB } = Object,
          tU = (e) => {
            let t = typeof e;
            if ("object" !== t || !e) return [0, t];
            let n = tH.call(e).slice(8, -1);
            switch (n) {
              case "Array":
                return [1, ""];
              case "Object":
                return [2, ""];
              case "Date":
                return [3, ""];
              case "RegExp":
                return [4, ""];
              case "Map":
                return [5, ""];
              case "Set":
                return [6, ""];
              case "DataView":
                return [1, n];
            }
            return n.includes("Array")
              ? [1, n]
              : n.includes("Error")
              ? [7, n]
              : [2, n];
          },
          tV = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
          tW = (e, t, n, r) => {
            let i = (e, t) => {
                let i = r.push(e) - 1;
                return n.set(t, i), i;
              },
              o = (r) => {
                if (n.has(r)) return n.get(r);
                let [l, a] = tU(r);
                switch (l) {
                  case 0: {
                    let t = r;
                    switch (a) {
                      case "bigint":
                        (l = 8), (t = r.toString());
                        break;
                      case "function":
                      case "symbol":
                        if (e) throw TypeError("unable to serialize " + a);
                        t = null;
                        break;
                      case "undefined":
                        return i([-1], r);
                    }
                    return i([l, t], r);
                  }
                  case 1: {
                    if (a) {
                      let e = r;
                      return (
                        "DataView" === a
                          ? (e = new Uint8Array(r.buffer))
                          : "ArrayBuffer" === a && (e = new Uint8Array(r)),
                        i([a, [...e]], r)
                      );
                    }
                    let e = [],
                      t = i([l, e], r);
                    for (let t of r) e.push(o(t));
                    return t;
                  }
                  case 2: {
                    if (a)
                      switch (a) {
                        case "BigInt":
                          return i([a, r.toString()], r);
                        case "Boolean":
                        case "Number":
                        case "String":
                          return i([a, r.valueOf()], r);
                      }
                    if (t && "toJSON" in r) return o(r.toJSON());
                    let n = [],
                      s = i([l, n], r);
                    for (let t of tB(r))
                      (e || !tV(tU(r[t]))) && n.push([o(t), o(r[t])]);
                    return s;
                  }
                  case 3:
                    return i([l, r.toISOString()], r);
                  case 4: {
                    let { source: e, flags: t } = r;
                    return i([l, { source: e, flags: t }], r);
                  }
                  case 5: {
                    let t = [],
                      n = i([l, t], r);
                    for (let [n, i] of r)
                      (e || !(tV(tU(n)) || tV(tU(i)))) && t.push([o(n), o(i)]);
                    return n;
                  }
                  case 6: {
                    let t = [],
                      n = i([l, t], r);
                    for (let n of r) (e || !tV(tU(n))) && t.push(o(n));
                    return n;
                  }
                }
                let { message: s } = r;
                return i([l, { name: a, message: s }], r);
              };
            return o;
          },
          tq = (e, { json: t, lossy: n } = {}) => {
            let r = [];
            return tW(!(t || n), !!t, new Map(), r)(e), r;
          };
        var tK =
          "function" == typeof structuredClone
            ? (e, t) =>
                t && ("json" in t || "lossy" in t)
                  ? tz(tq(e, t))
                  : structuredClone(e)
            : (e, t) => tz(tq(e, t));
        function tY(e) {
          let t = [],
            n = -1,
            r = 0,
            i = 0;
          for (; ++n < e.length; ) {
            let o = e.charCodeAt(n),
              l = "";
            if (37 === o && eS(e.charCodeAt(n + 1)) && eS(e.charCodeAt(n + 2)))
              i = 2;
            else if (o < 128)
              /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
                (l = String.fromCharCode(o));
            else if (o > 55295 && o < 57344) {
              let t = e.charCodeAt(n + 1);
              o < 56320 && t > 56319 && t < 57344
                ? ((l = String.fromCharCode(o, t)), (i = 1))
                : (l = "�");
            } else l = String.fromCharCode(o);
            l &&
              (t.push(e.slice(r, n), encodeURIComponent(l)),
              (r = n + i + 1),
              (l = "")),
              i && ((n += i), (i = 0));
          }
          return t.join("") + e.slice(r);
        }
        function tQ(e, t) {
          let n = [{ type: "text", value: "↩" }];
          return (
            t > 1 &&
              n.push({
                type: "element",
                tagName: "sup",
                properties: {},
                children: [{ type: "text", value: String(t) }],
              }),
            n
          );
        }
        function tZ(e, t) {
          return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
        }
        let t$ = function (e) {
          if (null == e) return tJ;
          if ("function" == typeof e) return tG(e);
          if ("object" == typeof e)
            return Array.isArray(e)
              ? (function (e) {
                  let t = [],
                    n = -1;
                  for (; ++n < e.length; ) t[n] = t$(e[n]);
                  return tG(function (...e) {
                    let n = -1;
                    for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                    return !1;
                  });
                })(e)
              : tG(function (t) {
                  let n;
                  for (n in e) if (t[n] !== e[n]) return !1;
                  return !0;
                });
          if ("string" == typeof e)
            return tG(function (t) {
              return t && t.type === e;
            });
          throw Error("Expected function, string, or object as test");
        };
        function tG(e) {
          return function (t, n, r) {
            var i;
            return !!(
              null !== (i = t) &&
              "object" == typeof i &&
              "type" in i &&
              e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
            );
          };
        }
        function tJ() {
          return !0;
        }
        let tX = [];
        function t0(e, t, n, r) {
          let i, o, l;
          "function" == typeof t && "function" != typeof n
            ? ((o = void 0), (l = t), (i = n))
            : ((o = t), (l = n), (i = r)),
            (function (e, t, n, r) {
              let i;
              "function" == typeof t && "function" != typeof n
                ? ((r = n), (n = t))
                : (i = t);
              let o = t$(i),
                l = r ? -1 : 1;
              (function e(i, a, s) {
                let u = i && "object" == typeof i ? i : {};
                if ("string" == typeof u.type) {
                  let e =
                    "string" == typeof u.tagName
                      ? u.tagName
                      : "string" == typeof u.name
                      ? u.name
                      : void 0;
                  Object.defineProperty(c, "name", {
                    value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")",
                  });
                }
                return c;
                function c() {
                  var u;
                  let c,
                    d,
                    f,
                    h = tX;
                  if (
                    (!t || o(i, a, s[s.length - 1] || void 0)) &&
                    !1 ===
                      (h = Array.isArray((u = n(i, s)))
                        ? u
                        : "number" == typeof u
                        ? [!0, u]
                        : null == u
                        ? tX
                        : [u])[0]
                  )
                    return h;
                  if (
                    "children" in i &&
                    i.children &&
                    i.children &&
                    "skip" !== h[0]
                  )
                    for (
                      d = (r ? i.children.length : -1) + l, f = s.concat(i);
                      d > -1 && d < i.children.length;

                    ) {
                      if (!1 === (c = e(i.children[d], d, f)())[0]) return c;
                      d = "number" == typeof c[1] ? c[1] : d + l;
                    }
                  return h;
                }
              })(e, void 0, [])();
            })(
              e,
              o,
              function (e, t) {
                let n = t[t.length - 1],
                  r = n ? n.children.indexOf(e) : void 0;
                return l(e, r, n);
              },
              i
            );
        }
        function t1(e, t) {
          let n = t.referenceType,
            r = "]";
          if (
            ("collapsed" === n
              ? (r += "[]")
              : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
            "imageReference" === t.type)
          )
            return [{ type: "text", value: "![" + t.alt + r }];
          let i = e.all(t),
            o = i[0];
          o && "text" === o.type
            ? (o.value = "[" + o.value)
            : i.unshift({ type: "text", value: "[" });
          let l = i[i.length - 1];
          return (
            l && "text" === l.type
              ? (l.value += r)
              : i.push({ type: "text", value: r }),
            i
          );
        }
        function t2(e) {
          let t = e.spread;
          return null == t ? e.children.length > 1 : t;
        }
        function t4(e, t, n) {
          let r = 0,
            i = e.length;
          if (t) {
            let t = e.codePointAt(r);
            for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
          }
          if (n) {
            let t = e.codePointAt(i - 1);
            for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
          }
          return i > r ? e.slice(r, i) : "";
        }
        let t5 = {
          blockquote: function (e, t) {
            let n = {
              type: "element",
              tagName: "blockquote",
              properties: {},
              children: e.wrap(e.all(t), !0),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          break: function (e, t) {
            let n = {
              type: "element",
              tagName: "br",
              properties: {},
              children: [],
            };
            return (
              e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
            );
          },
          code: function (e, t) {
            let n = t.value ? t.value + "\n" : "",
              r = {};
            t.lang && (r.className = ["language-" + t.lang]);
            let i = {
              type: "element",
              tagName: "code",
              properties: r,
              children: [{ type: "text", value: n }],
            };
            return (
              t.meta && (i.data = { meta: t.meta }),
              e.patch(t, i),
              (i = {
                type: "element",
                tagName: "pre",
                properties: {},
                children: [(i = e.applyData(t, i))],
              }),
              e.patch(t, i),
              i
            );
          },
          delete: function (e, t) {
            let n = {
              type: "element",
              tagName: "del",
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          emphasis: function (e, t) {
            let n = {
              type: "element",
              tagName: "em",
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          footnoteReference: function (e, t) {
            let n;
            let r =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              i = String(t.identifier).toUpperCase(),
              o = tY(i.toLowerCase()),
              l = e.footnoteOrder.indexOf(i),
              a = e.footnoteCounts.get(i);
            void 0 === a
              ? ((a = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
              : (n = l + 1),
              (a += 1),
              e.footnoteCounts.set(i, a);
            let s = {
              type: "element",
              tagName: "a",
              properties: {
                href: "#" + r + "fn-" + o,
                id: r + "fnref-" + o + (a > 1 ? "-" + a : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: ["footnote-label"],
              },
              children: [{ type: "text", value: String(n) }],
            };
            e.patch(t, s);
            let u = {
              type: "element",
              tagName: "sup",
              properties: {},
              children: [s],
            };
            return e.patch(t, u), e.applyData(t, u);
          },
          heading: function (e, t) {
            let n = {
              type: "element",
              tagName: "h" + t.depth,
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          html: function (e, t) {
            if (e.options.allowDangerousHtml) {
              let n = { type: "raw", value: t.value };
              return e.patch(t, n), e.applyData(t, n);
            }
          },
          imageReference: function (e, t) {
            let n = String(t.identifier).toUpperCase(),
              r = e.definitionById.get(n);
            if (!r) return t1(e, t);
            let i = { src: tY(r.url || ""), alt: t.alt };
            null !== r.title && void 0 !== r.title && (i.title = r.title);
            let o = {
              type: "element",
              tagName: "img",
              properties: i,
              children: [],
            };
            return e.patch(t, o), e.applyData(t, o);
          },
          image: function (e, t) {
            let n = { src: tY(t.url) };
            null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
              null !== t.title && void 0 !== t.title && (n.title = t.title);
            let r = {
              type: "element",
              tagName: "img",
              properties: n,
              children: [],
            };
            return e.patch(t, r), e.applyData(t, r);
          },
          inlineCode: function (e, t) {
            let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
            e.patch(t, n);
            let r = {
              type: "element",
              tagName: "code",
              properties: {},
              children: [n],
            };
            return e.patch(t, r), e.applyData(t, r);
          },
          linkReference: function (e, t) {
            let n = String(t.identifier).toUpperCase(),
              r = e.definitionById.get(n);
            if (!r) return t1(e, t);
            let i = { href: tY(r.url || "") };
            null !== r.title && void 0 !== r.title && (i.title = r.title);
            let o = {
              type: "element",
              tagName: "a",
              properties: i,
              children: e.all(t),
            };
            return e.patch(t, o), e.applyData(t, o);
          },
          link: function (e, t) {
            let n = { href: tY(t.url) };
            null !== t.title && void 0 !== t.title && (n.title = t.title);
            let r = {
              type: "element",
              tagName: "a",
              properties: n,
              children: e.all(t),
            };
            return e.patch(t, r), e.applyData(t, r);
          },
          listItem: function (e, t, n) {
            let r = e.all(t),
              i = n
                ? (function (e) {
                    let t = !1;
                    if ("list" === e.type) {
                      t = e.spread || !1;
                      let n = e.children,
                        r = -1;
                      for (; !t && ++r < n.length; ) t = t2(n[r]);
                    }
                    return t;
                  })(n)
                : t2(t),
              o = {},
              l = [];
            if ("boolean" == typeof t.checked) {
              let e;
              let n = r[0];
              n && "element" === n.type && "p" === n.tagName
                ? (e = n)
                : ((e = {
                    type: "element",
                    tagName: "p",
                    properties: {},
                    children: [],
                  }),
                  r.unshift(e)),
                e.children.length > 0 &&
                  e.children.unshift({ type: "text", value: " " }),
                e.children.unshift({
                  type: "element",
                  tagName: "input",
                  properties: {
                    type: "checkbox",
                    checked: t.checked,
                    disabled: !0,
                  },
                  children: [],
                }),
                (o.className = ["task-list-item"]);
            }
            let a = -1;
            for (; ++a < r.length; ) {
              let e = r[a];
              (i || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
                l.push({ type: "text", value: "\n" }),
                "element" !== e.type || "p" !== e.tagName || i
                  ? l.push(e)
                  : l.push(...e.children);
            }
            let s = r[r.length - 1];
            s &&
              (i || "element" !== s.type || "p" !== s.tagName) &&
              l.push({ type: "text", value: "\n" });
            let u = {
              type: "element",
              tagName: "li",
              properties: o,
              children: l,
            };
            return e.patch(t, u), e.applyData(t, u);
          },
          list: function (e, t) {
            let n = {},
              r = e.all(t),
              i = -1;
            for (
              "number" == typeof t.start &&
              1 !== t.start &&
              (n.start = t.start);
              ++i < r.length;

            ) {
              let e = r[i];
              if (
                "element" === e.type &&
                "li" === e.tagName &&
                e.properties &&
                Array.isArray(e.properties.className) &&
                e.properties.className.includes("task-list-item")
              ) {
                n.className = ["contains-task-list"];
                break;
              }
            }
            let o = {
              type: "element",
              tagName: t.ordered ? "ol" : "ul",
              properties: n,
              children: e.wrap(r, !0),
            };
            return e.patch(t, o), e.applyData(t, o);
          },
          paragraph: function (e, t) {
            let n = {
              type: "element",
              tagName: "p",
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          root: function (e, t) {
            let n = { type: "root", children: e.wrap(e.all(t)) };
            return e.patch(t, n), e.applyData(t, n);
          },
          strong: function (e, t) {
            let n = {
              type: "element",
              tagName: "strong",
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          table: function (e, t) {
            let n = e.all(t),
              r = n.shift(),
              i = [];
            if (r) {
              let n = {
                type: "element",
                tagName: "thead",
                properties: {},
                children: e.wrap([r], !0),
              };
              e.patch(t.children[0], n), i.push(n);
            }
            if (n.length > 0) {
              let r = {
                  type: "element",
                  tagName: "tbody",
                  properties: {},
                  children: e.wrap(n, !0),
                },
                o = q(t.children[1]),
                l = W(t.children[t.children.length - 1]);
              o && l && (r.position = { start: o, end: l }), i.push(r);
            }
            let o = {
              type: "element",
              tagName: "table",
              properties: {},
              children: e.wrap(i, !0),
            };
            return e.patch(t, o), e.applyData(t, o);
          },
          tableCell: function (e, t) {
            let n = {
              type: "element",
              tagName: "td",
              properties: {},
              children: e.all(t),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          tableRow: function (e, t, n) {
            let r = n ? n.children : void 0,
              i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
              o = n && "table" === n.type ? n.align : void 0,
              l = o ? o.length : t.children.length,
              a = -1,
              s = [];
            for (; ++a < l; ) {
              let n = t.children[a],
                r = {},
                l = o ? o[a] : void 0;
              l && (r.align = l);
              let u = {
                type: "element",
                tagName: i,
                properties: r,
                children: [],
              };
              n &&
                ((u.children = e.all(n)),
                e.patch(n, u),
                (u = e.applyData(n, u))),
                s.push(u);
            }
            let u = {
              type: "element",
              tagName: "tr",
              properties: {},
              children: e.wrap(s, !0),
            };
            return e.patch(t, u), e.applyData(t, u);
          },
          text: function (e, t) {
            let n = {
              type: "text",
              value: (function (e) {
                let t = String(e),
                  n = /\r?\n|\r/g,
                  r = n.exec(t),
                  i = 0,
                  o = [];
                for (; r; )
                  o.push(t4(t.slice(i, r.index), i > 0, !0), r[0]),
                    (i = r.index + r[0].length),
                    (r = n.exec(t));
                return o.push(t4(t.slice(i), i > 0, !1)), o.join("");
              })(String(t.value)),
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          thematicBreak: function (e, t) {
            let n = {
              type: "element",
              tagName: "hr",
              properties: {},
              children: [],
            };
            return e.patch(t, n), e.applyData(t, n);
          },
          toml: t3,
          yaml: t3,
          definition: t3,
          footnoteDefinition: t3,
        };
        function t3() {}
        let t6 = {}.hasOwnProperty,
          t7 = {};
        function t9(e, t) {
          e.position &&
            (t.position = (function (e) {
              let t = q(e),
                n = W(e);
              if (t && n) return { start: t, end: n };
            })(e));
        }
        function t8(e, t) {
          let n = t;
          if (e && e.data) {
            let t = e.data.hName,
              r = e.data.hChildren,
              i = e.data.hProperties;
            "string" == typeof t &&
              ("element" === n.type
                ? (n.tagName = t)
                : (n = {
                    type: "element",
                    tagName: t,
                    properties: {},
                    children: "children" in n ? n.children : [n],
                  })),
              "element" === n.type && i && Object.assign(n.properties, tK(i)),
              "children" in n && n.children && null != r && (n.children = r);
          }
          return n;
        }
        function ne(e, t) {
          let n = [],
            r = -1;
          for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
            r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
          return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
        }
        function nt(e) {
          let t = 0,
            n = e.charCodeAt(t);
          for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
          return e.slice(t);
        }
        function nn(e, t) {
          let n = (function (e, t) {
              let n = t || t7,
                r = new Map(),
                i = new Map(),
                o = {
                  all: function (e) {
                    let t = [];
                    if ("children" in e) {
                      let n = e.children,
                        r = -1;
                      for (; ++r < n.length; ) {
                        let i = o.one(n[r], e);
                        if (i) {
                          if (
                            r &&
                            "break" === n[r - 1].type &&
                            (Array.isArray(i) ||
                              "text" !== i.type ||
                              (i.value = nt(i.value)),
                            !Array.isArray(i) && "element" === i.type)
                          ) {
                            let e = i.children[0];
                            e && "text" === e.type && (e.value = nt(e.value));
                          }
                          Array.isArray(i) ? t.push(...i) : t.push(i);
                        }
                      }
                    }
                    return t;
                  },
                  applyData: t8,
                  definitionById: r,
                  footnoteById: i,
                  footnoteCounts: new Map(),
                  footnoteOrder: [],
                  handlers: { ...t5, ...n.handlers },
                  one: function (e, t) {
                    let n = e.type,
                      r = o.handlers[n];
                    if (t6.call(o.handlers, n) && r) return r(o, e, t);
                    if (
                      o.options.passThrough &&
                      o.options.passThrough.includes(n)
                    ) {
                      if ("children" in e) {
                        let { children: t, ...n } = e,
                          r = tK(n);
                        return (r.children = o.all(e)), r;
                      }
                      return tK(e);
                    }
                    return (
                      o.options.unknownHandler ||
                      function (e, t) {
                        let n = t.data || {},
                          r =
                            "value" in t &&
                            !(
                              t6.call(n, "hProperties") ||
                              t6.call(n, "hChildren")
                            )
                              ? { type: "text", value: t.value }
                              : {
                                  type: "element",
                                  tagName: "div",
                                  properties: {},
                                  children: e.all(t),
                                };
                        return e.patch(t, r), e.applyData(t, r);
                      }
                    )(o, e, t);
                  },
                  options: n,
                  patch: t9,
                  wrap: ne,
                };
              return (
                t0(e, function (e) {
                  if (
                    "definition" === e.type ||
                    "footnoteDefinition" === e.type
                  ) {
                    let t = "definition" === e.type ? r : i,
                      n = String(e.identifier).toUpperCase();
                    t.has(n) || t.set(n, e);
                  }
                }),
                o
              );
            })(e, t),
            r = n.one(e, void 0),
            i = (function (e) {
              let t =
                  "string" == typeof e.options.clobberPrefix
                    ? e.options.clobberPrefix
                    : "user-content-",
                n = e.options.footnoteBackContent || tQ,
                r = e.options.footnoteBackLabel || tZ,
                i = e.options.footnoteLabel || "Footnotes",
                o = e.options.footnoteLabelTagName || "h2",
                l = e.options.footnoteLabelProperties || {
                  className: ["sr-only"],
                },
                a = [],
                s = -1;
              for (; ++s < e.footnoteOrder.length; ) {
                let i = e.footnoteById.get(e.footnoteOrder[s]);
                if (!i) continue;
                let o = e.all(i),
                  l = String(i.identifier).toUpperCase(),
                  u = tY(l.toLowerCase()),
                  c = 0,
                  d = [],
                  f = e.footnoteCounts.get(l);
                for (; void 0 !== f && ++c <= f; ) {
                  d.length > 0 && d.push({ type: "text", value: " " });
                  let e = "string" == typeof n ? n : n(s, c);
                  "string" == typeof e && (e = { type: "text", value: e }),
                    d.push({
                      type: "element",
                      tagName: "a",
                      properties: {
                        href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                        dataFootnoteBackref: "",
                        ariaLabel: "string" == typeof r ? r : r(s, c),
                        className: ["data-footnote-backref"],
                      },
                      children: Array.isArray(e) ? e : [e],
                    });
                }
                let h = o[o.length - 1];
                if (h && "element" === h.type && "p" === h.tagName) {
                  let e = h.children[h.children.length - 1];
                  e && "text" === e.type
                    ? (e.value += " ")
                    : h.children.push({ type: "text", value: " " }),
                    h.children.push(...d);
                } else o.push(...d);
                let p = {
                  type: "element",
                  tagName: "li",
                  properties: { id: t + "fn-" + u },
                  children: e.wrap(o, !0),
                };
                e.patch(i, p), a.push(p);
              }
              if (0 !== a.length)
                return {
                  type: "element",
                  tagName: "section",
                  properties: { dataFootnotes: !0, className: ["footnotes"] },
                  children: [
                    {
                      type: "element",
                      tagName: o,
                      properties: { ...tK(l), id: "footnote-label" },
                      children: [{ type: "text", value: i }],
                    },
                    { type: "text", value: "\n" },
                    {
                      type: "element",
                      tagName: "ol",
                      properties: {},
                      children: e.wrap(a, !0),
                    },
                    { type: "text", value: "\n" },
                  ],
                };
            })(n),
            o = Array.isArray(r)
              ? { type: "root", children: r }
              : r || { type: "root", children: [] };
          return i && o.children.push({ type: "text", value: "\n" }, i), o;
        }
        function nr(e, t) {
          return e && "run" in e
            ? async function (n, r) {
                let i = nn(n, { file: r, ...t });
                await e.run(i, r);
              }
            : function (n, r) {
                return nn(n, { file: r, ...(e || t) });
              };
        }
        function ni(e) {
          if (e) throw e;
        }
        var no = n(94470);
        function nl(e) {
          if ("object" != typeof e || null === e) return !1;
          let t = Object.getPrototypeOf(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        }
        let na = {
          basename: function (e, t) {
            let n;
            if (void 0 !== t && "string" != typeof t)
              throw TypeError('"ext" argument must be a string');
            ns(e);
            let r = 0,
              i = -1,
              o = e.length;
            if (void 0 === t || 0 === t.length || t.length > e.length) {
              for (; o--; )
                if (47 === e.codePointAt(o)) {
                  if (n) {
                    r = o + 1;
                    break;
                  }
                } else i < 0 && ((n = !0), (i = o + 1));
              return i < 0 ? "" : e.slice(r, i);
            }
            if (t === e) return "";
            let l = -1,
              a = t.length - 1;
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else
                l < 0 && ((n = !0), (l = o + 1)),
                  a > -1 &&
                    (e.codePointAt(o) === t.codePointAt(a--)
                      ? a < 0 && (i = o)
                      : ((a = -1), (i = l)));
            return r === i ? (i = l) : i < 0 && (i = e.length), e.slice(r, i);
          },
          dirname: function (e) {
            let t;
            if ((ns(e), 0 === e.length)) return ".";
            let n = -1,
              r = e.length;
            for (; --r; )
              if (47 === e.codePointAt(r)) {
                if (t) {
                  n = r;
                  break;
                }
              } else t || (t = !0);
            return n < 0
              ? 47 === e.codePointAt(0)
                ? "/"
                : "."
              : 1 === n && 47 === e.codePointAt(0)
              ? "//"
              : e.slice(0, n);
          },
          extname: function (e) {
            let t;
            ns(e);
            let n = e.length,
              r = -1,
              i = 0,
              o = -1,
              l = 0;
            for (; n--; ) {
              let a = e.codePointAt(n);
              if (47 === a) {
                if (t) {
                  i = n + 1;
                  break;
                }
                continue;
              }
              r < 0 && ((t = !0), (r = n + 1)),
                46 === a
                  ? o < 0
                    ? (o = n)
                    : 1 !== l && (l = 1)
                  : o > -1 && (l = -1);
            }
            return o < 0 ||
              r < 0 ||
              0 === l ||
              (1 === l && o === r - 1 && o === i + 1)
              ? ""
              : e.slice(o, r);
          },
          join: function (...e) {
            let t,
              n = -1;
            for (; ++n < e.length; )
              ns(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
            return void 0 === t
              ? "."
              : (function (e) {
                  ns(e);
                  let t = 47 === e.codePointAt(0),
                    n = (function (e, t) {
                      let n,
                        r,
                        i = "",
                        o = 0,
                        l = -1,
                        a = 0,
                        s = -1;
                      for (; ++s <= e.length; ) {
                        if (s < e.length) n = e.codePointAt(s);
                        else if (47 === n) break;
                        else n = 47;
                        if (47 === n) {
                          if (l === s - 1 || 1 === a);
                          else if (l !== s - 1 && 2 === a) {
                            if (
                              i.length < 2 ||
                              2 !== o ||
                              46 !== i.codePointAt(i.length - 1) ||
                              46 !== i.codePointAt(i.length - 2)
                            ) {
                              if (i.length > 2) {
                                if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                  r < 0
                                    ? ((i = ""), (o = 0))
                                    : (o =
                                        (i = i.slice(0, r)).length -
                                        1 -
                                        i.lastIndexOf("/")),
                                    (l = s),
                                    (a = 0);
                                  continue;
                                }
                              } else if (i.length > 0) {
                                (i = ""), (o = 0), (l = s), (a = 0);
                                continue;
                              }
                            }
                            t &&
                              ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                          } else
                            i.length > 0
                              ? (i += "/" + e.slice(l + 1, s))
                              : (i = e.slice(l + 1, s)),
                              (o = s - l - 1);
                          (l = s), (a = 0);
                        } else 46 === n && a > -1 ? a++ : (a = -1);
                      }
                      return i;
                    })(e, !t);
                  return (
                    0 !== n.length || t || (n = "."),
                    n.length > 0 &&
                      47 === e.codePointAt(e.length - 1) &&
                      (n += "/"),
                    t ? "/" + n : n
                  );
                })(t);
          },
          sep: "/",
        };
        function ns(e) {
          if ("string" != typeof e)
            throw TypeError(
              "Path must be a string. Received " + JSON.stringify(e)
            );
        }
        let nu = {
          cwd: function () {
            return "/";
          },
        };
        function nc(e) {
          return !!(
            null !== e &&
            "object" == typeof e &&
            "href" in e &&
            e.href &&
            "protocol" in e &&
            e.protocol &&
            void 0 === e.auth
          );
        }
        let nd = ["history", "path", "basename", "stem", "extname", "dirname"];
        class nf {
          constructor(e) {
            let t, n;
            (t = e
              ? nc(e)
                ? { path: e }
                : "string" == typeof e ||
                  (e &&
                    "object" == typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e)
                ? { value: e }
                : e
              : {}),
              (this.cwd = "cwd" in t ? "" : nu.cwd()),
              (this.data = {}),
              (this.history = []),
              (this.messages = []),
              this.value,
              this.map,
              this.result,
              this.stored;
            let r = -1;
            for (; ++r < nd.length; ) {
              let e = nd[r];
              e in t &&
                void 0 !== t[e] &&
                null !== t[e] &&
                (this[e] = "history" === e ? [...t[e]] : t[e]);
            }
            for (n in t) nd.includes(n) || (this[n] = t[n]);
          }
          get basename() {
            return "string" == typeof this.path
              ? na.basename(this.path)
              : void 0;
          }
          set basename(e) {
            np(e, "basename"),
              nh(e, "basename"),
              (this.path = na.join(this.dirname || "", e));
          }
          get dirname() {
            return "string" == typeof this.path
              ? na.dirname(this.path)
              : void 0;
          }
          set dirname(e) {
            nm(this.basename, "dirname"),
              (this.path = na.join(e || "", this.basename));
          }
          get extname() {
            return "string" == typeof this.path
              ? na.extname(this.path)
              : void 0;
          }
          set extname(e) {
            if ((nh(e, "extname"), nm(this.dirname, "extname"), e)) {
              if (46 !== e.codePointAt(0))
                throw Error("`extname` must start with `.`");
              if (e.includes(".", 1))
                throw Error("`extname` cannot contain multiple dots");
            }
            this.path = na.join(this.dirname, this.stem + (e || ""));
          }
          get path() {
            return this.history[this.history.length - 1];
          }
          set path(e) {
            nc(e) &&
              (e = (function (e) {
                if ("string" == typeof e) e = new URL(e);
                else if (!nc(e)) {
                  let t = TypeError(
                    'The "path" argument must be of type string or an instance of URL. Received `' +
                      e +
                      "`"
                  );
                  throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
                }
                if ("file:" !== e.protocol) {
                  let e = TypeError("The URL must be of scheme file");
                  throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
                }
                return (function (e) {
                  if ("" !== e.hostname) {
                    let e = TypeError(
                      'File URL host must be "localhost" or empty on darwin'
                    );
                    throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                  }
                  let t = e.pathname,
                    n = -1;
                  for (; ++n < t.length; )
                    if (
                      37 === t.codePointAt(n) &&
                      50 === t.codePointAt(n + 1)
                    ) {
                      let e = t.codePointAt(n + 2);
                      if (70 === e || 102 === e) {
                        let e = TypeError(
                          "File URL path must not include encoded / characters"
                        );
                        throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                      }
                    }
                  return decodeURIComponent(t);
                })(e);
              })(e)),
              np(e, "path"),
              this.path !== e && this.history.push(e);
          }
          get stem() {
            return "string" == typeof this.path
              ? na.basename(this.path, this.extname)
              : void 0;
          }
          set stem(e) {
            np(e, "stem"),
              nh(e, "stem"),
              (this.path = na.join(
                this.dirname || "",
                e + (this.extname || "")
              ));
          }
          fail(e, t, n) {
            let r = this.message(e, t, n);
            throw ((r.fatal = !0), r);
          }
          info(e, t, n) {
            let r = this.message(e, t, n);
            return (r.fatal = void 0), r;
          }
          message(e, t, n) {
            let r = new G(e, t, n);
            return (
              this.path &&
                ((r.name = this.path + ":" + r.name), (r.file = this.path)),
              (r.fatal = !1),
              this.messages.push(r),
              r
            );
          }
          toString(e) {
            return void 0 === this.value
              ? ""
              : "string" == typeof this.value
              ? this.value
              : new TextDecoder(e || void 0).decode(this.value);
          }
        }
        function nh(e, t) {
          if (e && e.includes(na.sep))
            throw Error(
              "`" + t + "` cannot be a path: did not expect `" + na.sep + "`"
            );
        }
        function np(e, t) {
          if (!e) throw Error("`" + t + "` cannot be empty");
        }
        function nm(e, t) {
          if (!e)
            throw Error("Setting `" + t + "` requires `path` to be set too");
        }
        let ng = function (e) {
            let t = this.constructor.prototype,
              n = t[e],
              r = function () {
                return n.apply(r, arguments);
              };
            return Object.setPrototypeOf(r, t), r;
          },
          nv = {}.hasOwnProperty;
        class ny extends ng {
          constructor() {
            super("copy"),
              (this.Compiler = void 0),
              (this.Parser = void 0),
              (this.attachers = []),
              (this.compiler = void 0),
              (this.freezeIndex = -1),
              (this.frozen = void 0),
              (this.namespace = {}),
              (this.parser = void 0),
              (this.transformers = (function () {
                let e = [],
                  t = {
                    run: function (...t) {
                      let n = -1,
                        r = t.pop();
                      if ("function" != typeof r)
                        throw TypeError(
                          "Expected function as last argument, not " + r
                        );
                      (function i(o, ...l) {
                        let a = e[++n],
                          s = -1;
                        if (o) {
                          r(o);
                          return;
                        }
                        for (; ++s < t.length; )
                          (null === l[s] || void 0 === l[s]) && (l[s] = t[s]);
                        (t = l),
                          a
                            ? (function (e, t) {
                                let n;
                                return function (...t) {
                                  let o;
                                  let l = e.length > t.length;
                                  l && t.push(r);
                                  try {
                                    o = e.apply(this, t);
                                  } catch (e) {
                                    if (l && n) throw e;
                                    return r(e);
                                  }
                                  l ||
                                    (o && o.then && "function" == typeof o.then
                                      ? o.then(i, r)
                                      : o instanceof Error
                                      ? r(o)
                                      : i(o));
                                };
                                function r(e, ...i) {
                                  n || ((n = !0), t(e, ...i));
                                }
                                function i(e) {
                                  r(null, e);
                                }
                              })(
                                a,
                                i
                              )(...l)
                            : r(null, ...l);
                      })(null, ...t);
                    },
                    use: function (n) {
                      if ("function" != typeof n)
                        throw TypeError(
                          "Expected `middelware` to be a function, not " + n
                        );
                      return e.push(n), t;
                    },
                  };
                return t;
              })());
          }
          copy() {
            let e = new ny(),
              t = -1;
            for (; ++t < this.attachers.length; ) {
              let n = this.attachers[t];
              e.use(...n);
            }
            return e.data(no(!0, {}, this.namespace)), e;
          }
          data(e, t) {
            return "string" == typeof e
              ? 2 == arguments.length
                ? (nw("data", this.frozen), (this.namespace[e] = t), this)
                : (nv.call(this.namespace, e) && this.namespace[e]) || void 0
              : e
              ? (nw("data", this.frozen), (this.namespace = e), this)
              : this.namespace;
          }
          freeze() {
            if (this.frozen) return this;
            for (; ++this.freezeIndex < this.attachers.length; ) {
              let [e, ...t] = this.attachers[this.freezeIndex];
              if (!1 === t[0]) continue;
              !0 === t[0] && (t[0] = void 0);
              let n = e.call(this, ...t);
              "function" == typeof n && this.transformers.use(n);
            }
            return (
              (this.frozen = !0),
              (this.freezeIndex = Number.POSITIVE_INFINITY),
              this
            );
          }
          parse(e) {
            this.freeze();
            let t = nE(e),
              n = this.parser || this.Parser;
            return nb("parse", n), n(String(t), t);
          }
          process(e, t) {
            let n = this;
            return (
              this.freeze(),
              nb("process", this.parser || this.Parser),
              nk("process", this.compiler || this.Compiler),
              t ? r(void 0, t) : new Promise(r)
            );
            function r(r, i) {
              let o = nE(e),
                l = n.parse(o);
              function a(e, n) {
                e || !n ? i(e) : r ? r(n) : t(void 0, n);
              }
              n.run(l, o, function (e, t, r) {
                if (e || !t || !r) return a(e);
                let i = n.stringify(t, r);
                "string" == typeof i ||
                (i &&
                  "object" == typeof i &&
                  "byteLength" in i &&
                  "byteOffset" in i)
                  ? (r.value = i)
                  : (r.result = i),
                  a(e, r);
              });
            }
          }
          processSync(e) {
            let t,
              n = !1;
            return (
              this.freeze(),
              nb("processSync", this.parser || this.Parser),
              nk("processSync", this.compiler || this.Compiler),
              this.process(e, function (e, r) {
                (n = !0), ni(e), (t = r);
              }),
              nC("processSync", "process", n),
              t
            );
          }
          run(e, t, n) {
            nS(e), this.freeze();
            let r = this.transformers;
            return (
              n || "function" != typeof t || ((n = t), (t = void 0)),
              n ? i(void 0, n) : new Promise(i)
            );
            function i(i, o) {
              let l = nE(t);
              r.run(e, l, function (t, r, l) {
                let a = r || e;
                t ? o(t) : i ? i(a) : n(void 0, a, l);
              });
            }
          }
          runSync(e, t) {
            let n,
              r = !1;
            return (
              this.run(e, t, function (e, t) {
                ni(e), (n = t), (r = !0);
              }),
              nC("runSync", "run", r),
              n
            );
          }
          stringify(e, t) {
            this.freeze();
            let n = nE(t),
              r = this.compiler || this.Compiler;
            return nk("stringify", r), nS(e), r(e, n);
          }
          use(e, ...t) {
            let n = this.attachers,
              r = this.namespace;
            if ((nw("use", this.frozen), null == e));
            else if ("function" == typeof e) l(e, t);
            else if ("object" == typeof e) Array.isArray(e) ? o(e) : i(e);
            else throw TypeError("Expected usable value, not `" + e + "`");
            return this;
            function i(e) {
              if (!("plugins" in e) && !("settings" in e))
                throw Error(
                  "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
                );
              o(e.plugins),
                e.settings && (r.settings = no(!0, r.settings, e.settings));
            }
            function o(e) {
              let t = -1;
              if (null == e);
              else if (Array.isArray(e))
                for (; ++t < e.length; )
                  !(function (e) {
                    if ("function" == typeof e) l(e, []);
                    else if ("object" == typeof e) {
                      if (Array.isArray(e)) {
                        let [t, ...n] = e;
                        l(t, n);
                      } else i(e);
                    } else
                      throw TypeError("Expected usable value, not `" + e + "`");
                  })(e[t]);
              else
                throw TypeError("Expected a list of plugins, not `" + e + "`");
            }
            function l(e, t) {
              let r = -1,
                i = -1;
              for (; ++r < n.length; )
                if (n[r][0] === e) {
                  i = r;
                  break;
                }
              if (-1 === i) n.push([e, ...t]);
              else if (t.length > 0) {
                let [r, ...o] = t,
                  l = n[i][1];
                nl(l) && nl(r) && (r = no(!0, l, r)), (n[i] = [e, r, ...o]);
              }
            }
          }
        }
        let nx = new ny().freeze();
        function nb(e, t) {
          if ("function" != typeof t)
            throw TypeError("Cannot `" + e + "` without `parser`");
        }
        function nk(e, t) {
          if ("function" != typeof t)
            throw TypeError("Cannot `" + e + "` without `compiler`");
        }
        function nw(e, t) {
          if (t)
            throw Error(
              "Cannot call `" +
                e +
                "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
            );
        }
        function nS(e) {
          if (!nl(e) || "string" != typeof e.type)
            throw TypeError("Expected node, got `" + e + "`");
        }
        function nC(e, t, n) {
          if (!n)
            throw Error("`" + e + "` finished async. Use `" + t + "` instead");
        }
        function nE(e) {
          return e && "object" == typeof e && "message" in e && "messages" in e
            ? e
            : new nf(e);
        }
        let nO = [],
          nT = { allowDangerousHtml: !0 },
          nj = /^(https?|ircs?|mailto|xmpp)$/i,
          n_ = [
            { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
            {
              from: "allowDangerousHtml",
              id: "remove-buggy-html-in-markdown-parser",
            },
            {
              from: "allowNode",
              id: "replace-allownode-allowedtypes-and-disallowedtypes",
              to: "allowElement",
            },
            {
              from: "allowedTypes",
              id: "replace-allownode-allowedtypes-and-disallowedtypes",
              to: "allowedElements",
            },
            {
              from: "disallowedTypes",
              id: "replace-allownode-allowedtypes-and-disallowedtypes",
              to: "disallowedElements",
            },
            { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
            { from: "includeElementIndex", id: "#remove-includeelementindex" },
            {
              from: "includeNodeIndex",
              id: "change-includenodeindex-to-includeelementindex",
            },
            { from: "linkTarget", id: "remove-linktarget" },
            {
              from: "plugins",
              id: "change-plugins-to-remarkplugins",
              to: "remarkPlugins",
            },
            { from: "rawSourcePos", id: "#remove-rawsourcepos" },
            {
              from: "renderers",
              id: "change-renderers-to-components",
              to: "components",
            },
            { from: "source", id: "change-source-to-children", to: "children" },
            { from: "sourcePos", id: "#remove-sourcepos" },
            {
              from: "transformImageUri",
              id: "#add-urltransform",
              to: "urlTransform",
            },
            {
              from: "transformLinkUri",
              id: "#add-urltransform",
              to: "urlTransform",
            },
          ];
        function nP(e) {
          let t = (function (e) {
              let t = e.rehypePlugins || nO,
                n = e.remarkPlugins || nO,
                r = e.remarkRehypeOptions
                  ? { ...e.remarkRehypeOptions, ...nT }
                  : nT;
              return nx().use(tR).use(n).use(nr, r).use(t);
            })(e),
            n = (function (e) {
              let t = e.children || "",
                n = new nf();
              return "string" == typeof t && (n.value = t), n;
            })(e);
          return (function (e, t) {
            let n = t.allowedElements,
              r = t.allowElement,
              i = t.components,
              o = t.disallowedElements,
              l = t.skipHtml,
              a = t.unwrapDisallowed,
              s = t.urlTransform || nM;
            for (let e of n_)
              Object.hasOwn(t, e.from) && (e.from, e.to && e.to, e.id);
            return (
              t.className &&
                (e = {
                  type: "element",
                  tagName: "div",
                  properties: { className: t.className },
                  children: "root" === e.type ? e.children : [e],
                }),
              t0(e, function (e, t, i) {
                if ("raw" === e.type && i && "number" == typeof t)
                  return (
                    l
                      ? i.children.splice(t, 1)
                      : (i.children[t] = { type: "text", value: e.value }),
                    t
                  );
                if ("element" === e.type) {
                  let t;
                  for (t in ed)
                    if (
                      Object.hasOwn(ed, t) &&
                      Object.hasOwn(e.properties, t)
                    ) {
                      let n = e.properties[t],
                        r = ed[t];
                      (null === r || r.includes(e.tagName)) &&
                        (e.properties[t] = s(String(n || ""), t, e));
                    }
                }
                if ("element" === e.type) {
                  let l = n
                    ? !n.includes(e.tagName)
                    : !!o && o.includes(e.tagName);
                  if (
                    (!l && r && "number" == typeof t && (l = !r(e, t, i)),
                    l && i && "number" == typeof t)
                  )
                    return (
                      a && e.children
                        ? i.children.splice(t, 1, ...e.children)
                        : i.children.splice(t, 1),
                      t
                    );
                }
              }),
              (function (e, t) {
                var n, r, i;
                let o;
                if (!t || void 0 === t.Fragment)
                  throw TypeError("Expected `Fragment` in options");
                let l = t.filePath || void 0;
                if (t.development) {
                  if ("function" != typeof t.jsxDEV)
                    throw TypeError(
                      "Expected `jsxDEV` in options when `development: true`"
                    );
                  (n = t.jsxDEV),
                    (o = function (e, t, r, i) {
                      let o = Array.isArray(r.children),
                        a = q(e);
                      return n(
                        t,
                        r,
                        i,
                        o,
                        {
                          columnNumber: a ? a.column - 1 : void 0,
                          fileName: l,
                          lineNumber: a ? a.line : void 0,
                        },
                        void 0
                      );
                    });
                } else {
                  if ("function" != typeof t.jsx)
                    throw TypeError("Expected `jsx` in production options");
                  if ("function" != typeof t.jsxs)
                    throw TypeError("Expected `jsxs` in production options");
                  (r = t.jsx),
                    (i = t.jsxs),
                    (o = function (e, t, n, o) {
                      let l = Array.isArray(n.children) ? i : r;
                      return o ? l(t, n, o) : l(t, n);
                    });
                }
                let a = {
                    Fragment: t.Fragment,
                    ancestors: [],
                    components: t.components || {},
                    create: o,
                    elementAttributeNameCase:
                      t.elementAttributeNameCase || "react",
                    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                    filePath: l,
                    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                    passKeys: !1 !== t.passKeys,
                    passNode: t.passNode || !1,
                    schema: "svg" === t.space ? R : I,
                    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                    tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
                  },
                  s = ei(a, e, void 0);
                return s && "string" != typeof s
                  ? s
                  : a.create(e, a.Fragment, { children: s || void 0 }, void 0);
              })(e, {
                Fragment: ef.Fragment,
                components: i,
                ignoreInvalidStyle: !0,
                jsx: ef.jsx,
                jsxs: ef.jsxs,
                passKeys: !0,
                passNode: !0,
              })
            );
          })(t.runSync(t.parse(n), n), e);
        }
        function nM(e) {
          let t = e.indexOf(":"),
            n = e.indexOf("?"),
            r = e.indexOf("#"),
            i = e.indexOf("/");
          return -1 === t ||
            (-1 !== i && t > i) ||
            (-1 !== n && t > n) ||
            (-1 !== r && t > r) ||
            nj.test(e.slice(0, t))
            ? e
            : "";
        }
      },
    },
  ]);
