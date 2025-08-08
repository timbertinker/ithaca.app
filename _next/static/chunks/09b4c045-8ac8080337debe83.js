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
      (e._sentryDebugIds[t] = "1a214d3a-465b-4dae-9048-890116f15575"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1a214d3a-465b-4dae-9048-890116f15575"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7558],
  {
    17916: function (e, t, r) {
      var o,
        s,
        n,
        a,
        i = Uint8Array,
        p = Uint16Array,
        u = Uint32Array,
        l = new i([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        h = new i([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        c = new i([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        f = function (e, t) {
          for (var r = new p(31), o = 0; o < 31; ++o) r[o] = t += 1 << e[o - 1];
          for (var s = new u(r[30]), o = 1; o < 30; ++o)
            for (var n = r[o]; n < r[o + 1]; ++n) s[n] = ((n - r[o]) << 5) | o;
          return [r, s];
        },
        d = f(l, 2),
        v = d[0],
        g = d[1];
      (v[28] = 258), (g[258] = 28);
      for (var y = f(h, 0)[0], m = new p(32768), b = 0; b < 32768; ++b) {
        var x = ((43690 & b) >>> 1) | ((21845 & b) << 1);
        (x =
          ((61680 & (x = ((52428 & x) >>> 2) | ((13107 & x) << 2))) >>> 4) |
          ((3855 & x) << 4)),
          (m[b] = (((65280 & x) >>> 8) | ((255 & x) << 8)) >>> 1);
      }
      for (
        var S = function (e, t, r) {
            for (var o, s = e.length, n = 0, a = new p(t); n < s; ++n)
              e[n] && ++a[e[n] - 1];
            var i = new p(t);
            for (n = 0; n < t; ++n) i[n] = (i[n - 1] + a[n - 1]) << 1;
            if (r) {
              o = new p(1 << t);
              var u = 15 - t;
              for (n = 0; n < s; ++n)
                if (e[n])
                  for (
                    var l = (n << 4) | e[n],
                      h = t - e[n],
                      c = i[e[n] - 1]++ << h,
                      f = c | ((1 << h) - 1);
                    c <= f;
                    ++c
                  )
                    o[m[c] >>> u] = l;
            } else
              for (n = 0, o = new p(s); n < s; ++n)
                e[n] && (o[n] = m[i[e[n] - 1]++] >>> (15 - e[n]));
            return o;
          },
          k = new i(288),
          b = 0;
        b < 144;
        ++b
      )
        k[b] = 8;
      for (var b = 144; b < 256; ++b) k[b] = 9;
      for (var b = 256; b < 280; ++b) k[b] = 7;
      for (var b = 280; b < 288; ++b) k[b] = 8;
      for (var U = new i(32), b = 0; b < 32; ++b) U[b] = 5;
      var E = S(k, 9, 1),
        C = S(U, 5, 1),
        D = function (e) {
          for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
          return t;
        },
        L = function (e, t, r) {
          var o = (t / 8) | 0;
          return ((e[o] | (e[o + 1] << 8)) >> (7 & t)) & r;
        },
        T = function (e, t) {
          var r = (t / 8) | 0;
          return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
        },
        w = function (e, t, r) {
          (null == t || t < 0) && (t = 0),
            (null == r || r > e.length) && (r = e.length);
          var o = new (
            2 == e.BYTES_PER_ELEMENT ? p : 4 == e.BYTES_PER_ELEMENT ? u : i
          )(r - t);
          return o.set(e.subarray(t, r)), o;
        },
        P = [
          "unexpected EOF",
          "invalid block type",
          "invalid length/literal",
          "invalid distance",
          "stream finished",
          "no stream handler",
          ,
          "no callback",
          "invalid UTF-8 data",
          "extra field too long",
          "date not in range 1980-2099",
          "filename too long",
          "stream finishing",
          "invalid zip data",
        ],
        O = function (e, t, r) {
          var o = Error(t || P[e]);
          if (
            ((o.code = e),
            Error.captureStackTrace && Error.captureStackTrace(o, O),
            !r)
          )
            throw o;
          return o;
        },
        F = function (e, t, r) {
          var o = e.length;
          if (!o || (r && r.f && !r.l)) return t || new i(0);
          var s = !t || r,
            n = !r || r.i;
          r || (r = {}), t || (t = new i(3 * o));
          var a = function (e) {
              var r = t.length;
              if (e > r) {
                var o = new i(Math.max(2 * r, e));
                o.set(t), (t = o);
              }
            },
            p = r.f || 0,
            u = r.p || 0,
            f = r.b || 0,
            d = r.l,
            g = r.d,
            m = r.m,
            b = r.n,
            x = 8 * o;
          do {
            if (!d) {
              p = L(e, u, 1);
              var k = L(e, u + 1, 3);
              if (((u += 3), k)) {
                if (1 == k) (d = E), (g = C), (m = 9), (b = 5);
                else if (2 == k) {
                  var U = L(e, u, 31) + 257,
                    P = L(e, u + 10, 15) + 4,
                    F = U + L(e, u + 5, 31) + 1;
                  u += 14;
                  for (var G = new i(F), I = new i(19), B = 0; B < P; ++B)
                    I[c[B]] = L(e, u + 3 * B, 7);
                  u += 3 * P;
                  for (
                    var M = D(I), R = (1 << M) - 1, A = S(I, M, 1), B = 0;
                    B < F;

                  ) {
                    var z = A[L(e, u, R)];
                    u += 15 & z;
                    var N = z >>> 4;
                    if (N < 16) G[B++] = N;
                    else {
                      var _ = 0,
                        W = 0;
                      for (
                        16 == N
                          ? ((W = 3 + L(e, u, 3)), (u += 2), (_ = G[B - 1]))
                          : 17 == N
                          ? ((W = 3 + L(e, u, 7)), (u += 3))
                          : 18 == N && ((W = 11 + L(e, u, 127)), (u += 7));
                        W--;

                      )
                        G[B++] = _;
                    }
                  }
                  var q = G.subarray(0, U),
                    V = G.subarray(U);
                  (m = D(q)), (b = D(V)), (d = S(q, m, 1)), (g = S(V, b, 1));
                } else O(1);
              } else {
                var N = (((u + 7) / 8) | 0) + 4,
                  X = e[N - 4] | (e[N - 3] << 8),
                  j = N + X;
                if (j > o) {
                  n && O(0);
                  break;
                }
                s && a(f + X),
                  t.set(e.subarray(N, j), f),
                  (r.b = f += X),
                  (r.p = u = 8 * j),
                  (r.f = p);
                continue;
              }
              if (u > x) {
                n && O(0);
                break;
              }
            }
            s && a(f + 131072);
            for (var Z = (1 << m) - 1, H = (1 << b) - 1, Y = u; ; Y = u) {
              var _ = d[T(e, u) & Z],
                K = _ >>> 4;
              if ((u += 15 & _) > x) {
                n && O(0);
                break;
              }
              if ((_ || O(2), K < 256)) t[f++] = K;
              else if (256 == K) {
                (Y = u), (d = null);
                break;
              } else {
                var Q = K - 254;
                if (K > 264) {
                  var B = K - 257,
                    J = l[B];
                  (Q = L(e, u, (1 << J) - 1) + v[B]), (u += J);
                }
                var $ = g[T(e, u) & H],
                  ee = $ >>> 4;
                $ || O(3), (u += 15 & $);
                var V = y[ee];
                if (ee > 3) {
                  var J = h[ee];
                  (V += T(e, u) & ((1 << J) - 1)), (u += J);
                }
                if (u > x) {
                  n && O(0);
                  break;
                }
                s && a(f + 131072);
                for (var et = f + Q; f < et; f += 4)
                  (t[f] = t[f - V]),
                    (t[f + 1] = t[f + 1 - V]),
                    (t[f + 2] = t[f + 2 - V]),
                    (t[f + 3] = t[f + 3 - V]);
                f = et;
              }
            }
            (r.l = d),
              (r.p = Y),
              (r.b = f),
              (r.f = p),
              d && ((p = 1), (r.m = m), (r.d = g), (r.n = b));
          } while (!p);
          return f == t.length ? t : w(t, 0, f);
        },
        G = new i(0),
        I = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        I.decode(G, { stream: !0 });
      } catch (e) {}
      function B() {
        (this.commands = []),
          (this.fill = "black"),
          (this.stroke = null),
          (this.strokeWidth = 1);
      }
      (B.prototype.moveTo = function (e, t) {
        this.commands.push({ type: "M", x: e, y: t });
      }),
        (B.prototype.lineTo = function (e, t) {
          this.commands.push({ type: "L", x: e, y: t });
        }),
        (B.prototype.curveTo = B.prototype.bezierCurveTo =
          function (e, t, r, o, s, n) {
            this.commands.push({
              type: "C",
              x1: e,
              y1: t,
              x2: r,
              y2: o,
              x: s,
              y: n,
            });
          }),
        (B.prototype.quadTo = B.prototype.quadraticCurveTo =
          function (e, t, r, o) {
            this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: o });
          }),
        (B.prototype.close = B.prototype.closePath =
          function () {
            this.commands.push({ type: "Z" });
          }),
        (B.prototype.extend = function (e) {
          e.commands && (e = e.commands),
            Array.prototype.push.apply(this.commands, e);
        }),
        (B.prototype.toPathData = function (e) {
          function t() {
            for (
              var t = arguments, r = "", o = 0;
              o < arguments.length;
              o += 1
            ) {
              var s = t[o];
              s >= 0 && o > 0 && (r += " "),
                (r += Math.round(s) === s ? "" + Math.round(s) : s.toFixed(e));
            }
            return r;
          }
          e = void 0 !== e ? e : 2;
          for (var r = "", o = 0; o < this.commands.length; o += 1) {
            var s = this.commands[o];
            "M" === s.type
              ? (r += "M" + t(s.x, s.y))
              : "L" === s.type
              ? (r += "L" + t(s.x, s.y))
              : "C" === s.type
              ? (r += "C" + t(s.x1, s.y1, s.x2, s.y2, s.x, s.y))
              : "Q" === s.type
              ? (r += "Q" + t(s.x1, s.y1, s.x, s.y))
              : "Z" === s.type && (r += "Z");
          }
          return r;
        });
      var M = [
          ".notdef",
          "space",
          "exclam",
          "quotedbl",
          "numbersign",
          "dollar",
          "percent",
          "ampersand",
          "quoteright",
          "parenleft",
          "parenright",
          "asterisk",
          "plus",
          "comma",
          "hyphen",
          "period",
          "slash",
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "colon",
          "semicolon",
          "less",
          "equal",
          "greater",
          "question",
          "at",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "bracketleft",
          "backslash",
          "bracketright",
          "asciicircum",
          "underscore",
          "quoteleft",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "braceleft",
          "bar",
          "braceright",
          "asciitilde",
          "exclamdown",
          "cent",
          "sterling",
          "fraction",
          "yen",
          "florin",
          "section",
          "currency",
          "quotesingle",
          "quotedblleft",
          "guillemotleft",
          "guilsinglleft",
          "guilsinglright",
          "fi",
          "fl",
          "endash",
          "dagger",
          "daggerdbl",
          "periodcentered",
          "paragraph",
          "bullet",
          "quotesinglbase",
          "quotedblbase",
          "quotedblright",
          "guillemotright",
          "ellipsis",
          "perthousand",
          "questiondown",
          "grave",
          "acute",
          "circumflex",
          "tilde",
          "macron",
          "breve",
          "dotaccent",
          "dieresis",
          "ring",
          "cedilla",
          "hungarumlaut",
          "ogonek",
          "caron",
          "emdash",
          "AE",
          "ordfeminine",
          "Lslash",
          "Oslash",
          "OE",
          "ordmasculine",
          "ae",
          "dotlessi",
          "lslash",
          "oslash",
          "oe",
          "germandbls",
          "onesuperior",
          "logicalnot",
          "mu",
          "trademark",
          "Eth",
          "onehalf",
          "plusminus",
          "Thorn",
          "onequarter",
          "divide",
          "brokenbar",
          "degree",
          "thorn",
          "threequarters",
          "twosuperior",
          "registered",
          "minus",
          "eth",
          "multiply",
          "threesuperior",
          "copyright",
          "Aacute",
          "Acircumflex",
          "Adieresis",
          "Agrave",
          "Aring",
          "Atilde",
          "Ccedilla",
          "Eacute",
          "Ecircumflex",
          "Edieresis",
          "Egrave",
          "Iacute",
          "Icircumflex",
          "Idieresis",
          "Igrave",
          "Ntilde",
          "Oacute",
          "Ocircumflex",
          "Odieresis",
          "Ograve",
          "Otilde",
          "Scaron",
          "Uacute",
          "Ucircumflex",
          "Udieresis",
          "Ugrave",
          "Yacute",
          "Ydieresis",
          "Zcaron",
          "aacute",
          "acircumflex",
          "adieresis",
          "agrave",
          "aring",
          "atilde",
          "ccedilla",
          "eacute",
          "ecircumflex",
          "edieresis",
          "egrave",
          "iacute",
          "icircumflex",
          "idieresis",
          "igrave",
          "ntilde",
          "oacute",
          "ocircumflex",
          "odieresis",
          "ograve",
          "otilde",
          "scaron",
          "uacute",
          "ucircumflex",
          "udieresis",
          "ugrave",
          "yacute",
          "ydieresis",
          "zcaron",
          "exclamsmall",
          "Hungarumlautsmall",
          "dollaroldstyle",
          "dollarsuperior",
          "ampersandsmall",
          "Acutesmall",
          "parenleftsuperior",
          "parenrightsuperior",
          "266 ff",
          "onedotenleader",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "questionsmall",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "isuperior",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "ff",
          "ffi",
          "ffl",
          "parenleftinferior",
          "parenrightinferior",
          "Circumflexsmall",
          "hyphensuperior",
          "Gravesmall",
          "Asmall",
          "Bsmall",
          "Csmall",
          "Dsmall",
          "Esmall",
          "Fsmall",
          "Gsmall",
          "Hsmall",
          "Ismall",
          "Jsmall",
          "Ksmall",
          "Lsmall",
          "Msmall",
          "Nsmall",
          "Osmall",
          "Psmall",
          "Qsmall",
          "Rsmall",
          "Ssmall",
          "Tsmall",
          "Usmall",
          "Vsmall",
          "Wsmall",
          "Xsmall",
          "Ysmall",
          "Zsmall",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "Tildesmall",
          "exclamdownsmall",
          "centoldstyle",
          "Lslashsmall",
          "Scaronsmall",
          "Zcaronsmall",
          "Dieresissmall",
          "Brevesmall",
          "Caronsmall",
          "Dotaccentsmall",
          "Macronsmall",
          "figuredash",
          "hypheninferior",
          "Ogoneksmall",
          "Ringsmall",
          "Cedillasmall",
          "questiondownsmall",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "zerosuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
          "Agravesmall",
          "Aacutesmall",
          "Acircumflexsmall",
          "Atildesmall",
          "Adieresissmall",
          "Aringsmall",
          "AEsmall",
          "Ccedillasmall",
          "Egravesmall",
          "Eacutesmall",
          "Ecircumflexsmall",
          "Edieresissmall",
          "Igravesmall",
          "Iacutesmall",
          "Icircumflexsmall",
          "Idieresissmall",
          "Ethsmall",
          "Ntildesmall",
          "Ogravesmall",
          "Oacutesmall",
          "Ocircumflexsmall",
          "Otildesmall",
          "Odieresissmall",
          "OEsmall",
          "Oslashsmall",
          "Ugravesmall",
          "Uacutesmall",
          "Ucircumflexsmall",
          "Udieresissmall",
          "Yacutesmall",
          "Thornsmall",
          "Ydieresissmall",
          "001.000",
          "001.001",
          "001.002",
          "001.003",
          "Black",
          "Bold",
          "Book",
          "Light",
          "Medium",
          "Regular",
          "Roman",
          "Semibold",
        ],
        R = [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "space",
          "exclam",
          "quotedbl",
          "numbersign",
          "dollar",
          "percent",
          "ampersand",
          "quoteright",
          "parenleft",
          "parenright",
          "asterisk",
          "plus",
          "comma",
          "hyphen",
          "period",
          "slash",
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "colon",
          "semicolon",
          "less",
          "equal",
          "greater",
          "question",
          "at",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "bracketleft",
          "backslash",
          "bracketright",
          "asciicircum",
          "underscore",
          "quoteleft",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "braceleft",
          "bar",
          "braceright",
          "asciitilde",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "exclamdown",
          "cent",
          "sterling",
          "fraction",
          "yen",
          "florin",
          "section",
          "currency",
          "quotesingle",
          "quotedblleft",
          "guillemotleft",
          "guilsinglleft",
          "guilsinglright",
          "fi",
          "fl",
          "",
          "endash",
          "dagger",
          "daggerdbl",
          "periodcentered",
          "",
          "paragraph",
          "bullet",
          "quotesinglbase",
          "quotedblbase",
          "quotedblright",
          "guillemotright",
          "ellipsis",
          "perthousand",
          "",
          "questiondown",
          "",
          "grave",
          "acute",
          "circumflex",
          "tilde",
          "macron",
          "breve",
          "dotaccent",
          "dieresis",
          "",
          "ring",
          "cedilla",
          "",
          "hungarumlaut",
          "ogonek",
          "caron",
          "emdash",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "AE",
          "",
          "ordfeminine",
          "",
          "",
          "",
          "",
          "Lslash",
          "Oslash",
          "OE",
          "ordmasculine",
          "",
          "",
          "",
          "",
          "",
          "ae",
          "",
          "",
          "",
          "dotlessi",
          "",
          "",
          "lslash",
          "oslash",
          "oe",
          "germandbls",
        ],
        A = [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "space",
          "exclamsmall",
          "Hungarumlautsmall",
          "",
          "dollaroldstyle",
          "dollarsuperior",
          "ampersandsmall",
          "Acutesmall",
          "parenleftsuperior",
          "parenrightsuperior",
          "twodotenleader",
          "onedotenleader",
          "comma",
          "hyphen",
          "period",
          "fraction",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "colon",
          "semicolon",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "questionsmall",
          "",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "",
          "",
          "isuperior",
          "",
          "",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "",
          "",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "",
          "ff",
          "fi",
          "fl",
          "ffi",
          "ffl",
          "parenleftinferior",
          "",
          "parenrightinferior",
          "Circumflexsmall",
          "hyphensuperior",
          "Gravesmall",
          "Asmall",
          "Bsmall",
          "Csmall",
          "Dsmall",
          "Esmall",
          "Fsmall",
          "Gsmall",
          "Hsmall",
          "Ismall",
          "Jsmall",
          "Ksmall",
          "Lsmall",
          "Msmall",
          "Nsmall",
          "Osmall",
          "Psmall",
          "Qsmall",
          "Rsmall",
          "Ssmall",
          "Tsmall",
          "Usmall",
          "Vsmall",
          "Wsmall",
          "Xsmall",
          "Ysmall",
          "Zsmall",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "Tildesmall",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "exclamdownsmall",
          "centoldstyle",
          "Lslashsmall",
          "",
          "",
          "Scaronsmall",
          "Zcaronsmall",
          "Dieresissmall",
          "Brevesmall",
          "Caronsmall",
          "",
          "Dotaccentsmall",
          "",
          "",
          "Macronsmall",
          "",
          "",
          "figuredash",
          "hypheninferior",
          "",
          "",
          "Ogoneksmall",
          "Ringsmall",
          "Cedillasmall",
          "",
          "",
          "",
          "onequarter",
          "onehalf",
          "threequarters",
          "questiondownsmall",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "",
          "",
          "zerosuperior",
          "onesuperior",
          "twosuperior",
          "threesuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
          "Agravesmall",
          "Aacutesmall",
          "Acircumflexsmall",
          "Atildesmall",
          "Adieresissmall",
          "Aringsmall",
          "AEsmall",
          "Ccedillasmall",
          "Egravesmall",
          "Eacutesmall",
          "Ecircumflexsmall",
          "Edieresissmall",
          "Igravesmall",
          "Iacutesmall",
          "Icircumflexsmall",
          "Idieresissmall",
          "Ethsmall",
          "Ntildesmall",
          "Ogravesmall",
          "Oacutesmall",
          "Ocircumflexsmall",
          "Otildesmall",
          "Odieresissmall",
          "OEsmall",
          "Oslashsmall",
          "Ugravesmall",
          "Uacutesmall",
          "Ucircumflexsmall",
          "Udieresissmall",
          "Yacutesmall",
          "Thornsmall",
          "Ydieresissmall",
        ];
      function z(e) {
        this.font = e;
      }
      function N(e) {
        this.cmap = e;
      }
      function _(e, t) {
        (this.encoding = e), (this.charset = t);
      }
      function W(e, t) {
        e ||
          (function (e) {
            throw Error(e);
          })(t);
      }
      (z.prototype.charToGlyphIndex = function (e) {
        var t = e.codePointAt(0),
          r = this.font.glyphs;
        if (r) {
          for (var o = 0; o < r.length; o += 1)
            for (var s = r.get(o), n = 0; n < s.unicodes.length; n += 1)
              if (s.unicodes[n] === t) return o;
        }
        return null;
      }),
        (N.prototype.charToGlyphIndex = function (e) {
          return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
        }),
        (_.prototype.charToGlyphIndex = function (e) {
          var t = e.codePointAt(0),
            r = this.encoding[t];
          return this.charset.indexOf(r);
        });
      var q = { argument: W, assert: W };
      function V(e) {
        this.bindConstructorValues(e);
      }
      function X(e, t, r) {
        Object.defineProperty(e, t, {
          get: function () {
            return e.path, e[r];
          },
          set: function (t) {
            e[r] = t;
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      function j(e, t) {
        if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.path.unitsPerEm = e.unitsPerEm), (this.glyphs[r] = o);
          }
        this.length = (t && t.length) || 0;
      }
      (V.prototype.bindConstructorValues = function (e) {
        var t;
        (this.index = e.index || 0),
          (this.name = e.name || null),
          (this.unicode = e.unicode || void 0),
          (this.unicodes =
            e.unicodes || void 0 !== e.unicode ? [e.unicode] : []),
          "xMin" in e && (this.xMin = e.xMin),
          "yMin" in e && (this.yMin = e.yMin),
          "xMax" in e && (this.xMax = e.xMax),
          "yMax" in e && (this.yMax = e.yMax),
          "advanceWidth" in e && (this.advanceWidth = e.advanceWidth),
          Object.defineProperty(
            this,
            "path",
            ((t = e.path || new B()),
            {
              configurable: !0,
              get: function () {
                return "function" == typeof t && (t = t()), t;
              },
              set: function (e) {
                t = e;
              },
            })
          );
      }),
        (V.prototype.addUnicode = function (e) {
          0 === this.unicodes.length && (this.unicode = e),
            this.unicodes.push(e);
        }),
        (V.prototype.getPath = function (e, t, r, o, s) {
          (e = void 0 !== e ? e : 0),
            (t = void 0 !== t ? t : 0),
            (r = void 0 !== r ? r : 72),
            o || (o = {});
          var n,
            a,
            i = o.xScale,
            p = o.yScale;
          if (
            (o.hinting &&
              s &&
              s.hinting &&
              (a = this.path && s.hinting.exec(this, r)),
            a)
          )
            (n = s.hinting.getCommands(a)),
              (e = Math.round(e)),
              (t = Math.round(t)),
              (i = p = 1);
          else {
            n = this.path.commands;
            var u = (1 / (this.path.unitsPerEm || 1e3)) * r;
            void 0 === i && (i = u), void 0 === p && (p = u);
          }
          for (var l = new B(), h = 0; h < n.length; h += 1) {
            var c = n[h];
            "M" === c.type
              ? l.moveTo(e + c.x * i, t + -c.y * p)
              : "L" === c.type
              ? l.lineTo(e + c.x * i, t + -c.y * p)
              : "Q" === c.type
              ? l.quadraticCurveTo(
                  e + c.x1 * i,
                  t + -c.y1 * p,
                  e + c.x * i,
                  t + -c.y * p
                )
              : "C" === c.type
              ? l.curveTo(
                  e + c.x1 * i,
                  t + -c.y1 * p,
                  e + c.x2 * i,
                  t + -c.y2 * p,
                  e + c.x * i,
                  t + -c.y * p
                )
              : "Z" === c.type && l.closePath();
          }
          return l;
        }),
        (V.prototype.getContours = function () {
          if (void 0 === this.points) return [];
          for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
            var o = this.points[r];
            t.push(o), o.lastPointOfContour && (e.push(t), (t = []));
          }
          return (
            q.argument(
              0 === t.length,
              "There are still points left in the current contour."
            ),
            e
          );
        }),
        (V.prototype.getMetrics = function () {
          for (
            var e = this.path.commands, t = [], r = [], o = 0;
            o < e.length;
            o += 1
          ) {
            var s = e[o];
            "Z" !== s.type && (t.push(s.x), r.push(s.y)),
              ("Q" === s.type || "C" === s.type) &&
                (t.push(s.x1), r.push(s.y1)),
              "C" === s.type && (t.push(s.x2), r.push(s.y2));
          }
          var n = {
            xMin: Math.min.apply(null, t),
            yMin: Math.min.apply(null, r),
            xMax: Math.max.apply(null, t),
            yMax: Math.max.apply(null, r),
            leftSideBearing: this.leftSideBearing,
          };
          return (
            isFinite(n.xMin) || (n.xMin = 0),
            isFinite(n.xMax) || (n.xMax = this.advanceWidth),
            isFinite(n.yMin) || (n.yMin = 0),
            isFinite(n.yMax) || (n.yMax = 0),
            (n.rightSideBearing =
              this.advanceWidth - n.leftSideBearing - (n.xMax - n.xMin)),
            n
          );
        }),
        (j.prototype.get = function (e) {
          if (void 0 === this.glyphs[e]) {
            this.font._push(e),
              "function" == typeof this.glyphs[e] &&
                (this.glyphs[e] = this.glyphs[e]());
            var t = this.glyphs[e],
              r = this.font._IndexToUnicodeMap[e];
            if (r)
              for (var o = 0; o < r.unicodes.length; o++)
                t.addUnicode(r.unicodes[o]);
            (this.glyphs[e].advanceWidth =
              this.font._hmtxTableData[e].advanceWidth),
              (this.glyphs[e].leftSideBearing =
                this.font._hmtxTableData[e].leftSideBearing);
          } else
            "function" == typeof this.glyphs[e] &&
              (this.glyphs[e] = this.glyphs[e]());
          return this.glyphs[e];
        }),
        (j.prototype.push = function (e, t) {
          (this.glyphs[e] = t), this.length++;
        });
      var Z = {
        GlyphSet: j,
        glyphLoader: function (e, t) {
          return new V({ index: t, font: e });
        },
        ttfGlyphLoader: function (e, t, r, o, s, n) {
          return function () {
            var a = new V({ index: t, font: e });
            return (
              (a.path = function () {
                r(a, o, s);
                var t = n(e.glyphs, a);
                return (t.unitsPerEm = e.unitsPerEm), t;
              }),
              X(a, "xMin", "_xMin"),
              X(a, "xMax", "_xMax"),
              X(a, "yMin", "_yMin"),
              X(a, "yMax", "_yMax"),
              a
            );
          };
        },
        cffGlyphLoader: function (e, t, r, o) {
          return function () {
            var s = new V({ index: t, font: e });
            return (
              (s.path = function () {
                var t = r(e, s, o);
                return (t.unitsPerEm = e.unitsPerEm), t;
              }),
              s
            );
          };
        },
      };
      function H(e, t) {
        for (var r = 0, o = e.length - 1; r <= o; ) {
          var s = (r + o) >>> 1,
            n = e[s].tag;
          if (n === t) return s;
          n < t ? (r = s + 1) : (o = s - 1);
        }
        return -r - 1;
      }
      function Y(e, t) {
        for (var r = 0, o = e.length - 1; r <= o; ) {
          var s = (r + o) >>> 1,
            n = e[s];
          if (n === t) return s;
          n < t ? (r = s + 1) : (o = s - 1);
        }
        return -r - 1;
      }
      function K(e, t) {
        for (var r, o = 0, s = e.length - 1; o <= s; ) {
          var n = (o + s) >>> 1,
            a = (r = e[n]).start;
          if (a === t) return r;
          a < t ? (o = n + 1) : (s = n - 1);
        }
        if (o > 0) return t > (r = e[o - 1]).end ? 0 : r;
      }
      function Q(e, t) {
        (this.font = e), (this.tableName = t);
      }
      function J(e) {
        Q.call(this, e, "gpos");
      }
      function $(e) {
        Q.call(this, e, "gsub");
      }
      function ee(e, t, r) {
        for (var o = e.subtables, s = 0; s < o.length; s++) {
          var n = o[s];
          if (n.substFormat === t) return n;
        }
        if (r) return o.push(r), r;
      }
      function et(e, t) {
        if (!e) throw t;
      }
      function er(e, t) {
        return e.getUint8(t);
      }
      function eo(e, t) {
        return e.getUint16(t, !1);
      }
      function es(e, t) {
        return e.getUint32(t, !1);
      }
      function en(e, t) {
        return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
      }
      (Q.prototype = {
        searchTag: H,
        binSearch: Y,
        getTable: function (e) {
          var t = this.font.tables[this.tableName];
          return (
            !t &&
              e &&
              (t = this.font.tables[this.tableName] =
                this.createDefaultTable()),
            t
          );
        },
        getDefaultScriptName: function () {
          var e = this.getTable();
          if (e) {
            for (var t = !1, r = 0; r < e.scripts.length; r++) {
              var o = e.scripts[r].tag;
              if ("DFLT" === o) return o;
              "latn" === o && (t = !0);
            }
            if (t) return "latn";
          }
        },
        getScriptTable: function (e, t) {
          var r = this.getTable(t);
          if (r) {
            e = e || "DFLT";
            var o = r.scripts,
              s = H(r.scripts, e);
            if (s >= 0) return o[s].script;
            if (t) {
              var n = {
                tag: e,
                script: {
                  defaultLangSys: {
                    reserved: 0,
                    reqFeatureIndex: 65535,
                    featureIndexes: [],
                  },
                  langSysRecords: [],
                },
              };
              return o.splice(-1 - s, 0, n), n.script;
            }
          }
        },
        getLangSysTable: function (e, t, r) {
          var o = this.getScriptTable(e, r);
          if (o) {
            if (!t || "dflt" === t || "DFLT" === t) return o.defaultLangSys;
            var s = H(o.langSysRecords, t);
            if (s >= 0) return o.langSysRecords[s].langSys;
            if (r) {
              var n = {
                tag: t,
                langSys: {
                  reserved: 0,
                  reqFeatureIndex: 65535,
                  featureIndexes: [],
                },
              };
              return o.langSysRecords.splice(-1 - s, 0, n), n.langSys;
            }
          }
        },
        getFeatureTable: function (e, t, r, o) {
          var s = this.getLangSysTable(e, t, o);
          if (s) {
            for (
              var n,
                a = s.featureIndexes,
                i = this.font.tables[this.tableName].features,
                p = 0;
              p < a.length;
              p++
            )
              if ((n = i[a[p]]).tag === r) return n.feature;
            if (o) {
              var u = i.length;
              return (
                q.assert(
                  0 === u || r >= i[u - 1].tag,
                  "Features must be added in alphabetical order."
                ),
                (n = { tag: r, feature: { params: 0, lookupListIndexes: [] } }),
                i.push(n),
                a.push(u),
                n.feature
              );
            }
          }
        },
        getLookupTables: function (e, t, r, o, s) {
          var n = this.getFeatureTable(e, t, r, s),
            a = [];
          if (n) {
            for (
              var i,
                p = n.lookupListIndexes,
                u = this.font.tables[this.tableName].lookups,
                l = 0;
              l < p.length;
              l++
            )
              (i = u[p[l]]).lookupType === o && a.push(i);
            if (0 === a.length && s) {
              i = {
                lookupType: o,
                lookupFlag: 0,
                subtables: [],
                markFilteringSet: void 0,
              };
              var h = u.length;
              return u.push(i), p.push(h), [i];
            }
          }
          return a;
        },
        getGlyphClass: function (e, t) {
          switch (e.format) {
            case 1:
              if (e.startGlyph <= t && t < e.startGlyph + e.classes.length)
                return e.classes[t - e.startGlyph];
              return 0;
            case 2:
              var r = K(e.ranges, t);
              return r ? r.classId : 0;
          }
        },
        getCoverageIndex: function (e, t) {
          switch (e.format) {
            case 1:
              var r = Y(e.glyphs, t);
              return r >= 0 ? r : -1;
            case 2:
              var o = K(e.ranges, t);
              return o ? o.index + t - o.start : -1;
          }
        },
        expandCoverage: function (e) {
          if (1 === e.format) return e.glyphs;
          for (var t = [], r = e.ranges, o = 0; o < r.length; o++)
            for (var s = r[o], n = s.start, a = s.end, i = n; i <= a; i++)
              t.push(i);
          return t;
        },
      }),
        (J.prototype = Q.prototype),
        (J.prototype.init = function () {
          var e = this.getDefaultScriptName();
          this.defaultKerningTables = this.getKerningTables(e);
        }),
        (J.prototype.getKerningValue = function (e, t, r) {
          for (var o = 0; o < e.length; o++)
            for (var s = e[o].subtables, n = 0; n < s.length; n++) {
              var a = s[n],
                i = this.getCoverageIndex(a.coverage, t);
              if (!(i < 0))
                switch (a.posFormat) {
                  case 1:
                    for (var p = a.pairSets[i], u = 0; u < p.length; u++) {
                      var l = p[u];
                      if (l.secondGlyph === r)
                        return (l.value1 && l.value1.xAdvance) || 0;
                    }
                    break;
                  case 2:
                    var h = this.getGlyphClass(a.classDef1, t),
                      c = this.getGlyphClass(a.classDef2, r),
                      f = a.classRecords[h][c];
                    return (f.value1 && f.value1.xAdvance) || 0;
                }
            }
          return 0;
        }),
        (J.prototype.getKerningTables = function (e, t) {
          if (this.font.tables.gpos)
            return this.getLookupTables(e, t, "kern", 2);
        }),
        ($.prototype = Q.prototype),
        ($.prototype.createDefaultTable = function () {
          return {
            version: 1,
            scripts: [
              {
                tag: "DFLT",
                script: {
                  defaultLangSys: {
                    reserved: 0,
                    reqFeatureIndex: 65535,
                    featureIndexes: [],
                  },
                  langSysRecords: [],
                },
              },
            ],
            features: [],
            lookups: [],
          };
        }),
        ($.prototype.getSingle = function (e, t, r) {
          for (
            var o = [], s = this.getLookupTables(t, r, e, 1), n = 0;
            n < s.length;
            n++
          )
            for (var a = s[n].subtables, i = 0; i < a.length; i++) {
              var p = a[i],
                u = this.expandCoverage(p.coverage),
                l = void 0;
              if (1 === p.substFormat) {
                var h = p.deltaGlyphId;
                for (l = 0; l < u.length; l++) {
                  var c = u[l];
                  o.push({ sub: c, by: c + h });
                }
              } else {
                var f = p.substitute;
                for (l = 0; l < u.length; l++) o.push({ sub: u[l], by: f[l] });
              }
            }
          return o;
        }),
        ($.prototype.getMultiple = function (e, t, r) {
          for (
            var o = [], s = this.getLookupTables(t, r, e, 2), n = 0;
            n < s.length;
            n++
          )
            for (var a = s[n].subtables, i = 0; i < a.length; i++) {
              var p = a[i],
                u = this.expandCoverage(p.coverage),
                l = void 0;
              for (l = 0; l < u.length; l++) {
                var h = u[l],
                  c = p.sequences[l];
                o.push({ sub: h, by: c });
              }
            }
          return o;
        }),
        ($.prototype.getAlternates = function (e, t, r) {
          for (
            var o = [], s = this.getLookupTables(t, r, e, 3), n = 0;
            n < s.length;
            n++
          )
            for (var a = s[n].subtables, i = 0; i < a.length; i++)
              for (
                var p = a[i],
                  u = this.expandCoverage(p.coverage),
                  l = p.alternateSets,
                  h = 0;
                h < u.length;
                h++
              )
                o.push({ sub: u[h], by: l[h] });
          return o;
        }),
        ($.prototype.getLigatures = function (e, t, r) {
          for (
            var o = [], s = this.getLookupTables(t, r, e, 4), n = 0;
            n < s.length;
            n++
          )
            for (var a = s[n].subtables, i = 0; i < a.length; i++)
              for (
                var p = a[i],
                  u = this.expandCoverage(p.coverage),
                  l = p.ligatureSets,
                  h = 0;
                h < u.length;
                h++
              )
                for (var c = u[h], f = l[h], d = 0; d < f.length; d++) {
                  var v = f[d];
                  o.push({ sub: [c].concat(v.components), by: v.ligGlyph });
                }
          return o;
        }),
        ($.prototype.addSingle = function (e, t, r, o) {
          var s = ee(this.getLookupTables(r, o, e, 1, !0)[0], 2, {
            substFormat: 2,
            coverage: { format: 1, glyphs: [] },
            substitute: [],
          });
          q.assert(
            1 === s.coverage.format,
            "Single: unable to modify coverage table format " +
              s.coverage.format
          );
          var n = t.sub,
            a = this.binSearch(s.coverage.glyphs, n);
          a < 0 &&
            ((a = -1 - a),
            s.coverage.glyphs.splice(a, 0, n),
            s.substitute.splice(a, 0, 0)),
            (s.substitute[a] = t.by);
        }),
        ($.prototype.addMultiple = function (e, t, r, o) {
          q.assert(
            t.by instanceof Array && t.by.length > 1,
            'Multiple: "by" must be an array of two or more ids'
          );
          var s = ee(this.getLookupTables(r, o, e, 2, !0)[0], 1, {
            substFormat: 1,
            coverage: { format: 1, glyphs: [] },
            sequences: [],
          });
          q.assert(
            1 === s.coverage.format,
            "Multiple: unable to modify coverage table format " +
              s.coverage.format
          );
          var n = t.sub,
            a = this.binSearch(s.coverage.glyphs, n);
          a < 0 &&
            ((a = -1 - a),
            s.coverage.glyphs.splice(a, 0, n),
            s.sequences.splice(a, 0, 0)),
            (s.sequences[a] = t.by);
        }),
        ($.prototype.addAlternate = function (e, t, r, o) {
          var s = ee(this.getLookupTables(r, o, e, 3, !0)[0], 1, {
            substFormat: 1,
            coverage: { format: 1, glyphs: [] },
            alternateSets: [],
          });
          q.assert(
            1 === s.coverage.format,
            "Alternate: unable to modify coverage table format " +
              s.coverage.format
          );
          var n = t.sub,
            a = this.binSearch(s.coverage.glyphs, n);
          a < 0 &&
            ((a = -1 - a),
            s.coverage.glyphs.splice(a, 0, n),
            s.alternateSets.splice(a, 0, 0)),
            (s.alternateSets[a] = t.by);
        }),
        ($.prototype.addLigature = function (e, t, r, o) {
          var s = this.getLookupTables(r, o, e, 4, !0)[0],
            n = s.subtables[0];
          n ||
            ((n = {
              substFormat: 1,
              coverage: { format: 1, glyphs: [] },
              ligatureSets: [],
            }),
            (s.subtables[0] = n)),
            q.assert(
              1 === n.coverage.format,
              "Ligature: unable to modify coverage table format " +
                n.coverage.format
            );
          var a = t.sub[0],
            i = t.sub.slice(1),
            p = { ligGlyph: t.by, components: i },
            u = this.binSearch(n.coverage.glyphs, a);
          if (u >= 0) {
            for (var l = n.ligatureSets[u], h = 0; h < l.length; h++)
              if (
                (function (e, t) {
                  var r = e.length;
                  if (r !== t.length) return !1;
                  for (var o = 0; o < r; o++) if (e[o] !== t[o]) return !1;
                  return !0;
                })(l[h].components, i)
              )
                return;
            l.push(p);
          } else
            (u = -1 - u),
              n.coverage.glyphs.splice(u, 0, a),
              n.ligatureSets.splice(u, 0, [p]);
        }),
        ($.prototype.getFeature = function (e, t, r) {
          if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);
          switch (e) {
            case "aalt":
            case "salt":
              return this.getSingle(e, t, r).concat(
                this.getAlternates(e, t, r)
              );
            case "dlig":
            case "liga":
            case "rlig":
              return this.getLigatures(e, t, r);
            case "ccmp":
              return this.getMultiple(e, t, r).concat(
                this.getLigatures(e, t, r)
              );
            case "stch":
              return this.getMultiple(e, t, r);
          }
        }),
        ($.prototype.add = function (e, t, r, o) {
          if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, o);
          switch (e) {
            case "aalt":
            case "salt":
              if ("number" == typeof t.by) return this.addSingle(e, t, r, o);
              return this.addAlternate(e, t, r, o);
            case "dlig":
            case "liga":
            case "rlig":
              return this.addLigature(e, t, r, o);
            case "ccmp":
              if (t.by instanceof Array) return this.addMultiple(e, t, r, o);
              return this.addLigature(e, t, r, o);
          }
        });
      var ea = {
        byte: 1,
        uShort: 2,
        short: 2,
        uLong: 4,
        fixed: 4,
        longDateTime: 8,
        tag: 4,
      };
      function ei(e, t) {
        (this.data = e), (this.offset = t), (this.relativeOffset = 0);
      }
      (ei.prototype.parseByte = function () {
        var e = this.data.getUint8(this.offset + this.relativeOffset);
        return (this.relativeOffset += 1), e;
      }),
        (ei.prototype.parseChar = function () {
          var e = this.data.getInt8(this.offset + this.relativeOffset);
          return (this.relativeOffset += 1), e;
        }),
        (ei.prototype.parseCard8 = ei.prototype.parseByte),
        (ei.prototype.parseUShort = function () {
          var e = this.data.getUint16(this.offset + this.relativeOffset);
          return (this.relativeOffset += 2), e;
        }),
        (ei.prototype.parseCard16 = ei.prototype.parseUShort),
        (ei.prototype.parseSID = ei.prototype.parseUShort),
        (ei.prototype.parseOffset16 = ei.prototype.parseUShort),
        (ei.prototype.parseShort = function () {
          var e = this.data.getInt16(this.offset + this.relativeOffset);
          return (this.relativeOffset += 2), e;
        }),
        (ei.prototype.parseF2Dot14 = function () {
          var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
          return (this.relativeOffset += 2), e;
        }),
        (ei.prototype.parseULong = function () {
          var e = es(this.data, this.offset + this.relativeOffset);
          return (this.relativeOffset += 4), e;
        }),
        (ei.prototype.parseOffset32 = ei.prototype.parseULong),
        (ei.prototype.parseFixed = function () {
          var e = en(this.data, this.offset + this.relativeOffset);
          return (this.relativeOffset += 4), e;
        }),
        (ei.prototype.parseString = function (e) {
          var t = this.data,
            r = this.offset + this.relativeOffset,
            o = "";
          this.relativeOffset += e;
          for (var s = 0; s < e; s++)
            o += String.fromCharCode(t.getUint8(r + s));
          return o;
        }),
        (ei.prototype.parseTag = function () {
          return this.parseString(4);
        }),
        (ei.prototype.parseLongDateTime = function () {
          var e = es(this.data, this.offset + this.relativeOffset + 4);
          return (e -= 2082844800), (this.relativeOffset += 8), e;
        }),
        (ei.prototype.parseVersion = function (e) {
          var t = eo(this.data, this.offset + this.relativeOffset),
            r = eo(this.data, this.offset + this.relativeOffset + 2);
          return (
            (this.relativeOffset += 4),
            void 0 === e && (e = 4096),
            t + r / e / 10
          );
        }),
        (ei.prototype.skip = function (e, t) {
          void 0 === t && (t = 1), (this.relativeOffset += ea[e] * t);
        }),
        (ei.prototype.parseULongList = function (e) {
          void 0 === e && (e = this.parseULong());
          for (
            var t = Array(e),
              r = this.data,
              o = this.offset + this.relativeOffset,
              s = 0;
            s < e;
            s++
          )
            (t[s] = r.getUint32(o)), (o += 4);
          return (this.relativeOffset += 4 * e), t;
        }),
        (ei.prototype.parseOffset16List = ei.prototype.parseUShortList =
          function (e) {
            void 0 === e && (e = this.parseUShort());
            for (
              var t = Array(e),
                r = this.data,
                o = this.offset + this.relativeOffset,
                s = 0;
              s < e;
              s++
            )
              (t[s] = r.getUint16(o)), (o += 2);
            return (this.relativeOffset += 2 * e), t;
          }),
        (ei.prototype.parseShortList = function (e) {
          for (
            var t = Array(e),
              r = this.data,
              o = this.offset + this.relativeOffset,
              s = 0;
            s < e;
            s++
          )
            (t[s] = r.getInt16(o)), (o += 2);
          return (this.relativeOffset += 2 * e), t;
        }),
        (ei.prototype.parseByteList = function (e) {
          for (
            var t = Array(e),
              r = this.data,
              o = this.offset + this.relativeOffset,
              s = 0;
            s < e;
            s++
          )
            t[s] = r.getUint8(o++);
          return (this.relativeOffset += e), t;
        }),
        (ei.prototype.parseList = function (e, t) {
          t || ((t = e), (e = this.parseUShort()));
          for (var r = Array(e), o = 0; o < e; o++) r[o] = t.call(this);
          return r;
        }),
        (ei.prototype.parseList32 = function (e, t) {
          t || ((t = e), (e = this.parseULong()));
          for (var r = Array(e), o = 0; o < e; o++) r[o] = t.call(this);
          return r;
        }),
        (ei.prototype.parseRecordList = function (e, t) {
          t || ((t = e), (e = this.parseUShort()));
          for (var r = Array(e), o = Object.keys(t), s = 0; s < e; s++) {
            for (var n = {}, a = 0; a < o.length; a++) {
              var i = o[a],
                p = t[i];
              n[i] = p.call(this);
            }
            r[s] = n;
          }
          return r;
        }),
        (ei.prototype.parseRecordList32 = function (e, t) {
          t || ((t = e), (e = this.parseULong()));
          for (var r = Array(e), o = Object.keys(t), s = 0; s < e; s++) {
            for (var n = {}, a = 0; a < o.length; a++) {
              var i = o[a],
                p = t[i];
              n[i] = p.call(this);
            }
            r[s] = n;
          }
          return r;
        }),
        (ei.prototype.parseStruct = function (e) {
          if ("function" == typeof e) return e.call(this);
          for (var t = Object.keys(e), r = {}, o = 0; o < t.length; o++) {
            var s = t[o],
              n = e[s];
            r[s] = n.call(this);
          }
          return r;
        }),
        (ei.prototype.parseValueRecord = function (e) {
          if ((void 0 === e && (e = this.parseUShort()), 0 !== e)) {
            var t = {};
            return (
              1 & e && (t.xPlacement = this.parseShort()),
              2 & e && (t.yPlacement = this.parseShort()),
              4 & e && (t.xAdvance = this.parseShort()),
              8 & e && (t.yAdvance = this.parseShort()),
              16 & e && ((t.xPlaDevice = void 0), this.parseShort()),
              32 & e && ((t.yPlaDevice = void 0), this.parseShort()),
              64 & e && ((t.xAdvDevice = void 0), this.parseShort()),
              128 & e && ((t.yAdvDevice = void 0), this.parseShort()),
              t
            );
          }
        }),
        (ei.prototype.parseValueRecordList = function () {
          for (
            var e = this.parseUShort(),
              t = this.parseUShort(),
              r = Array(t),
              o = 0;
            o < t;
            o++
          )
            r[o] = this.parseValueRecord(e);
          return r;
        }),
        (ei.prototype.parsePointer = function (e) {
          var t = this.parseOffset16();
          if (t > 0) return new ei(this.data, this.offset + t).parseStruct(e);
        }),
        (ei.prototype.parsePointer32 = function (e) {
          var t = this.parseOffset32();
          if (t > 0) return new ei(this.data, this.offset + t).parseStruct(e);
        }),
        (ei.prototype.parseListOfLists = function (e) {
          for (
            var t = this.parseOffset16List(),
              r = t.length,
              o = this.relativeOffset,
              s = Array(r),
              n = 0;
            n < r;
            n++
          ) {
            var a = t[n];
            if (0 === a) {
              s[n] = void 0;
              continue;
            }
            if (((this.relativeOffset = a), e)) {
              for (
                var i = this.parseOffset16List(), p = Array(i.length), u = 0;
                u < i.length;
                u++
              )
                (this.relativeOffset = a + i[u]), (p[u] = e.call(this));
              s[n] = p;
            } else s[n] = this.parseUShortList();
          }
          return (this.relativeOffset = o), s;
        }),
        (ei.prototype.parseCoverage = function () {
          var e = this.offset + this.relativeOffset,
            t = this.parseUShort(),
            r = this.parseUShort();
          if (1 === t) return { format: 1, glyphs: this.parseUShortList(r) };
          if (2 === t) {
            for (var o = Array(r), s = 0; s < r; s++)
              o[s] = {
                start: this.parseUShort(),
                end: this.parseUShort(),
                index: this.parseUShort(),
              };
            return { format: 2, ranges: o };
          }
          throw Error(
            "0x" + e.toString(16) + ": Coverage format must be 1 or 2."
          );
        }),
        (ei.prototype.parseClassDef = function () {
          var e = this.offset + this.relativeOffset,
            t = this.parseUShort();
          if (1 === t)
            return {
              format: 1,
              startGlyph: this.parseUShort(),
              classes: this.parseUShortList(),
            };
          if (2 === t)
            return {
              format: 2,
              ranges: this.parseRecordList({
                start: ei.uShort,
                end: ei.uShort,
                classId: ei.uShort,
              }),
            };
          throw Error(
            "0x" + e.toString(16) + ": ClassDef format must be 1 or 2."
          );
        }),
        (ei.list = function (e, t) {
          return function () {
            return this.parseList(e, t);
          };
        }),
        (ei.list32 = function (e, t) {
          return function () {
            return this.parseList32(e, t);
          };
        }),
        (ei.recordList = function (e, t) {
          return function () {
            return this.parseRecordList(e, t);
          };
        }),
        (ei.recordList32 = function (e, t) {
          return function () {
            return this.parseRecordList32(e, t);
          };
        }),
        (ei.pointer = function (e) {
          return function () {
            return this.parsePointer(e);
          };
        }),
        (ei.pointer32 = function (e) {
          return function () {
            return this.parsePointer32(e);
          };
        }),
        (ei.tag = ei.prototype.parseTag),
        (ei.byte = ei.prototype.parseByte),
        (ei.uShort = ei.offset16 = ei.prototype.parseUShort),
        (ei.uShortList = ei.prototype.parseUShortList),
        (ei.uLong = ei.offset32 = ei.prototype.parseULong),
        (ei.uLongList = ei.prototype.parseULongList),
        (ei.struct = ei.prototype.parseStruct),
        (ei.coverage = ei.prototype.parseCoverage),
        (ei.classDef = ei.prototype.parseClassDef);
      var ep = {
        reserved: ei.uShort,
        reqFeatureIndex: ei.uShort,
        featureIndexes: ei.uShortList,
      };
      (ei.prototype.parseScriptList = function () {
        return (
          this.parsePointer(
            ei.recordList({
              tag: ei.tag,
              script: ei.pointer({
                defaultLangSys: ei.pointer(ep),
                langSysRecords: ei.recordList({
                  tag: ei.tag,
                  langSys: ei.pointer(ep),
                }),
              }),
            })
          ) || []
        );
      }),
        (ei.prototype.parseFeatureList = function () {
          return (
            this.parsePointer(
              ei.recordList({
                tag: ei.tag,
                feature: ei.pointer({
                  featureParams: ei.offset16,
                  lookupListIndexes: ei.uShortList,
                }),
              })
            ) || []
          );
        }),
        (ei.prototype.parseLookupList = function (e) {
          return (
            this.parsePointer(
              ei.list(
                ei.pointer(function () {
                  var t = this.parseUShort();
                  q.argument(
                    1 <= t && t <= 9,
                    "GPOS/GSUB lookup type " + t + " unknown."
                  );
                  var r = this.parseUShort();
                  return {
                    lookupType: t,
                    lookupFlag: r,
                    subtables: this.parseList(ei.pointer(e[t])),
                    markFilteringSet: 16 & r ? this.parseUShort() : void 0,
                  };
                })
              )
            ) || []
          );
        }),
        (ei.prototype.parseFeatureVariationsList = function () {
          return (
            this.parsePointer32(function () {
              var e = this.parseUShort(),
                t = this.parseUShort();
              return (
                q.argument(
                  1 === e && t < 1,
                  "GPOS/GSUB feature variations table unknown."
                ),
                this.parseRecordList32({
                  conditionSetOffset: ei.offset32,
                  featureTableSubstitutionOffset: ei.offset32,
                })
              );
            }) || []
          );
        });
      var eu = {
        getByte: er,
        getCard8: er,
        getUShort: eo,
        getCard16: eo,
        getShort: function (e, t) {
          return e.getInt16(t, !1);
        },
        getULong: es,
        getFixed: en,
        getTag: function (e, t) {
          for (var r = "", o = t; o < t + 4; o += 1)
            r += String.fromCharCode(e.getInt8(o));
          return r;
        },
        getOffset: function (e, t, r) {
          for (var o = 0, s = 0; s < r; s += 1)
            (o <<= 8), (o += e.getUint8(t + s));
          return o;
        },
        getBytes: function (e, t, r) {
          for (var o = [], s = t; s < r; s += 1) o.push(e.getUint8(s));
          return o;
        },
        bytesToString: function (e) {
          for (var t = "", r = 0; r < e.length; r += 1)
            t += String.fromCharCode(e[r]);
          return t;
        },
        Parser: ei,
      };
      function el(e, t, r, o, s) {
        var n;
        return (
          (t & o) > 0
            ? ((n = e.parseByte()), (t & s) == 0 && (n = -n), (n = r + n))
            : (n = (t & s) > 0 ? r : r + e.parseShort()),
          n
        );
      }
      function eh(e, t, r) {
        var o = new eu.Parser(t, r);
        if (
          ((e.numberOfContours = o.parseShort()),
          (e._xMin = o.parseShort()),
          (e._yMin = o.parseShort()),
          (e._xMax = o.parseShort()),
          (e._yMax = o.parseShort()),
          e.numberOfContours > 0)
        ) {
          for (
            var s = (e.endPointIndices = []), n = 0;
            n < e.numberOfContours;
            n += 1
          )
            s.push(o.parseUShort());
          (e.instructionLength = o.parseUShort()), (e.instructions = []);
          for (var a = 0; a < e.instructionLength; a += 1)
            e.instructions.push(o.parseByte());
          var i = s[s.length - 1] + 1;
          h = [];
          for (var p = 0; p < i; p += 1)
            if (((c = o.parseByte()), h.push(c), (8 & c) > 0))
              for (var u = o.parseByte(), l = 0; l < u; l += 1)
                h.push(c), (p += 1);
          if ((q.argument(h.length === i, "Bad flags."), s.length > 0)) {
            var h,
              c,
              f,
              d = [];
            if (i > 0) {
              for (var v = 0; v < i; v += 1)
                (c = h[v]),
                  ((f = {}).onCurve = !!(1 & c)),
                  (f.lastPointOfContour = s.indexOf(v) >= 0),
                  d.push(f);
              for (var g = 0, y = 0; y < i; y += 1)
                (c = h[y]), ((f = d[y]).x = el(o, c, g, 2, 16)), (g = f.x);
              for (var m = 0, b = 0; b < i; b += 1)
                (c = h[b]), ((f = d[b]).y = el(o, c, m, 4, 32)), (m = f.y);
            }
            e.points = d;
          } else e.points = [];
        } else if (0 === e.numberOfContours) e.points = [];
        else {
          (e.isComposite = !0), (e.points = []), (e.components = []);
          for (var x = !0; x; ) {
            h = o.parseUShort();
            var S = {
              glyphIndex: o.parseUShort(),
              xScale: 1,
              scale01: 0,
              scale10: 0,
              yScale: 1,
              dx: 0,
              dy: 0,
            };
            (1 & h) > 0
              ? (2 & h) > 0
                ? ((S.dx = o.parseShort()), (S.dy = o.parseShort()))
                : (S.matchedPoints = [o.parseUShort(), o.parseUShort()])
              : (2 & h) > 0
              ? ((S.dx = o.parseChar()), (S.dy = o.parseChar()))
              : (S.matchedPoints = [o.parseByte(), o.parseByte()]),
              (8 & h) > 0
                ? (S.xScale = S.yScale = o.parseF2Dot14())
                : (64 & h) > 0
                ? ((S.xScale = o.parseF2Dot14()), (S.yScale = o.parseF2Dot14()))
                : (128 & h) > 0 &&
                  ((S.xScale = o.parseF2Dot14()),
                  (S.scale01 = o.parseF2Dot14()),
                  (S.scale10 = o.parseF2Dot14()),
                  (S.yScale = o.parseF2Dot14())),
              e.components.push(S),
              (x = !!(32 & h));
          }
          if (256 & h) {
            (e.instructionLength = o.parseUShort()), (e.instructions = []);
            for (var k = 0; k < e.instructionLength; k += 1)
              e.instructions.push(o.parseByte());
          }
        }
      }
      function ec(e, t) {
        for (var r = [], o = 0; o < e.length; o += 1) {
          var s = e[o],
            n = {
              x: t.xScale * s.x + t.scale01 * s.y + t.dx,
              y: t.scale10 * s.x + t.yScale * s.y + t.dy,
              onCurve: s.onCurve,
              lastPointOfContour: s.lastPointOfContour,
            };
          r.push(n);
        }
        return r;
      }
      function ef(e) {
        var t = new B();
        if (!e) return t;
        for (
          var r = (function (e) {
              for (var t = [], r = [], o = 0; o < e.length; o += 1) {
                var s = e[o];
                r.push(s), s.lastPointOfContour && (t.push(r), (r = []));
              }
              return (
                q.argument(
                  0 === r.length,
                  "There are still points left in the current contour."
                ),
                t
              );
            })(e),
            o = 0;
          o < r.length;
          ++o
        ) {
          var s = r[o],
            n = null,
            a = s[s.length - 1],
            i = s[0];
          if (a.onCurve) t.moveTo(a.x, a.y);
          else if (i.onCurve) t.moveTo(i.x, i.y);
          else {
            var p = { x: (a.x + i.x) * 0.5, y: (a.y + i.y) * 0.5 };
            t.moveTo(p.x, p.y);
          }
          for (var u = 0; u < s.length; ++u)
            if (((n = a), (a = i), (i = s[(u + 1) % s.length]), a.onCurve))
              t.lineTo(a.x, a.y);
            else {
              var l = i;
              n.onCurve || (a.x, n.x, a.y, n.y),
                i.onCurve ||
                  (l = { x: (a.x + i.x) * 0.5, y: (a.y + i.y) * 0.5 }),
                t.quadraticCurveTo(a.x, a.y, l.x, l.y);
            }
          t.closePath();
        }
        return t;
      }
      function ed(e, t) {
        if (t.isComposite)
          for (var r = 0; r < t.components.length; r += 1) {
            var o = t.components[r],
              s = e.get(o.glyphIndex);
            if ((s.getPath(), s.points)) {
              var n = void 0;
              if (void 0 === o.matchedPoints) n = ec(s.points, o);
              else {
                if (
                  o.matchedPoints[0] > t.points.length - 1 ||
                  o.matchedPoints[1] > s.points.length - 1
                )
                  throw Error("Matched points out of range in " + t.name);
                var a = t.points[o.matchedPoints[0]],
                  i = s.points[o.matchedPoints[1]],
                  p = {
                    xScale: o.xScale,
                    scale01: o.scale01,
                    scale10: o.scale10,
                    yScale: o.yScale,
                    dx: 0,
                    dy: 0,
                  };
                (i = ec([i], p)[0]),
                  (p.dx = a.x - i.x),
                  (p.dy = a.y - i.y),
                  (n = ec(s.points, p));
              }
              t.points = t.points.concat(n);
            }
          }
        return ef(t.points);
      }
      var ev = {
        getPath: ef,
        parse: function (e, t, r, o, s) {
          var n;
          return s.lowMemory
            ? ((n = new Z.GlyphSet(o)),
              (o._push = function (s) {
                var a = r[s];
                a !== r[s + 1]
                  ? n.push(s, Z.ttfGlyphLoader(o, s, eh, e, t + a, ed))
                  : n.push(s, Z.glyphLoader(o, s));
              }),
              n)
            : (function (e, t, r, o) {
                for (
                  var s = new Z.GlyphSet(o), n = 0;
                  n < r.length - 1;
                  n += 1
                ) {
                  var a = r[n];
                  a !== r[n + 1]
                    ? s.push(n, Z.ttfGlyphLoader(o, n, eh, e, t + a, ed))
                    : s.push(n, Z.glyphLoader(o, n));
                }
                return s;
              })(e, t, r, o);
        },
      };
      function eg(e) {
        (this.font = e),
          (this.getCommands = function (e) {
            return ev.getPath(e).commands;
          }),
          (this._fpgmState = this._prepState = void 0),
          (this._errorState = 0);
      }
      function ey(e) {
        return e;
      }
      function em(e) {
        return Math.sign(e) * Math.round(Math.abs(e));
      }
      function eb(e) {
        return (Math.sign(e) * Math.round(Math.abs(2 * e))) / 2;
      }
      function ex(e) {
        return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
      }
      function eS(e) {
        return Math.sign(e) * Math.ceil(Math.abs(e));
      }
      function ek(e) {
        return Math.sign(e) * Math.floor(Math.abs(e));
      }
      var eU = function (e) {
          var t = this.srPeriod,
            r = this.srPhase,
            o = this.srThreshold,
            s = 1;
          return (e < 0 && ((e = -e), (s = -1)),
          (e += o - r),
          (e = Math.trunc(e / t) * t + r) < 0)
            ? r * s
            : e * s;
        },
        eE = {
          x: 1,
          y: 0,
          axis: "x",
          distance: function (e, t, r, o) {
            return (r ? e.xo : e.x) - (o ? t.xo : t.x);
          },
          interpolate: function (e, t, r, o) {
            var s, n, a, i, p, u, l;
            if (!o || o === this) {
              if (
                ((s = e.xo - t.xo),
                (n = e.xo - r.xo),
                (p = t.x - t.xo),
                (u = r.x - r.xo),
                0 === (l = (a = Math.abs(s)) + (i = Math.abs(n))))
              ) {
                e.x = e.xo + (p + u) / 2;
                return;
              }
              e.x = e.xo + (p * i + u * a) / l;
              return;
            }
            if (
              ((s = o.distance(e, t, !0, !0)),
              (n = o.distance(e, r, !0, !0)),
              (p = o.distance(t, t, !1, !0)),
              (u = o.distance(r, r, !1, !0)),
              0 === (l = (a = Math.abs(s)) + (i = Math.abs(n))))
            ) {
              eE.setRelative(e, e, (p + u) / 2, o, !0);
              return;
            }
            eE.setRelative(e, e, (p * i + u * a) / l, o, !0);
          },
          normalSlope: Number.NEGATIVE_INFINITY,
          setRelative: function (e, t, r, o, s) {
            if (!o || o === this) {
              e.x = (s ? t.xo : t.x) + r;
              return;
            }
            var n = s ? t.xo : t.x,
              a = s ? t.yo : t.y,
              i = n + r * o.x,
              p = a + r * o.y;
            e.x = i + (e.y - p) / o.normalSlope;
          },
          slope: 0,
          touch: function (e) {
            e.xTouched = !0;
          },
          touched: function (e) {
            return e.xTouched;
          },
          untouch: function (e) {
            e.xTouched = !1;
          },
        },
        eC = {
          x: 0,
          y: 1,
          axis: "y",
          distance: function (e, t, r, o) {
            return (r ? e.yo : e.y) - (o ? t.yo : t.y);
          },
          interpolate: function (e, t, r, o) {
            var s, n, a, i, p, u, l;
            if (!o || o === this) {
              if (
                ((s = e.yo - t.yo),
                (n = e.yo - r.yo),
                (p = t.y - t.yo),
                (u = r.y - r.yo),
                0 === (l = (a = Math.abs(s)) + (i = Math.abs(n))))
              ) {
                e.y = e.yo + (p + u) / 2;
                return;
              }
              e.y = e.yo + (p * i + u * a) / l;
              return;
            }
            if (
              ((s = o.distance(e, t, !0, !0)),
              (n = o.distance(e, r, !0, !0)),
              (p = o.distance(t, t, !1, !0)),
              (u = o.distance(r, r, !1, !0)),
              0 === (l = (a = Math.abs(s)) + (i = Math.abs(n))))
            ) {
              eC.setRelative(e, e, (p + u) / 2, o, !0);
              return;
            }
            eC.setRelative(e, e, (p * i + u * a) / l, o, !0);
          },
          normalSlope: 0,
          setRelative: function (e, t, r, o, s) {
            if (!o || o === this) {
              e.y = (s ? t.yo : t.y) + r;
              return;
            }
            var n = s ? t.xo : t.x,
              a = s ? t.yo : t.y,
              i = n + r * o.x,
              p = a + r * o.y;
            e.y = p + o.normalSlope * (e.x - i);
          },
          slope: Number.POSITIVE_INFINITY,
          touch: function (e) {
            e.yTouched = !0;
          },
          touched: function (e) {
            return e.yTouched;
          },
          untouch: function (e) {
            e.yTouched = !1;
          },
        };
      function eD(e, t) {
        (this.x = e),
          (this.y = t),
          (this.axis = void 0),
          (this.slope = t / e),
          (this.normalSlope = -e / t),
          Object.freeze(this);
      }
      function eL(e, t) {
        var r = Math.sqrt(e * e + t * t);
        return ((e /= r), (t /= r), 1 === e && 0 === t)
          ? eE
          : 0 === e && 1 === t
          ? eC
          : new eD(e, t);
      }
      function eT(e, t, r, o) {
        (this.x = this.xo = Math.round(64 * e) / 64),
          (this.y = this.yo = Math.round(64 * t) / 64),
          (this.lastPointOfContour = r),
          (this.onCurve = o),
          (this.prevPointOnContour = void 0),
          (this.nextPointOnContour = void 0),
          (this.xTouched = !1),
          (this.yTouched = !1),
          Object.preventExtensions(this);
      }
      Object.freeze(eE),
        Object.freeze(eC),
        (eD.prototype.distance = function (e, t, r, o) {
          return (
            this.x * eE.distance(e, t, r, o) + this.y * eC.distance(e, t, r, o)
          );
        }),
        (eD.prototype.interpolate = function (e, t, r, o) {
          var s, n, a, i, p, u, l;
          if (
            ((a = o.distance(e, t, !0, !0)),
            (i = o.distance(e, r, !0, !0)),
            (s = o.distance(t, t, !1, !0)),
            (n = o.distance(r, r, !1, !0)),
            0 === (l = (p = Math.abs(a)) + (u = Math.abs(i))))
          ) {
            this.setRelative(e, e, (s + n) / 2, o, !0);
            return;
          }
          this.setRelative(e, e, (s * u + n * p) / l, o, !0);
        }),
        (eD.prototype.setRelative = function (e, t, r, o, s) {
          o = o || this;
          var n = s ? t.xo : t.x,
            a = s ? t.yo : t.y,
            i = n + r * o.x,
            p = a + r * o.y,
            u = o.normalSlope,
            l = this.slope,
            h = e.x,
            c = e.y;
          (e.x = (l * h - u * i + p - c) / (l - u)), (e.y = l * (e.x - h) + c);
        }),
        (eD.prototype.touch = function (e) {
          (e.xTouched = !0), (e.yTouched = !0);
        }),
        (eT.prototype.nextTouched = function (e) {
          for (var t = this.nextPointOnContour; !e.touched(t) && t !== this; )
            t = t.nextPointOnContour;
          return t;
        }),
        (eT.prototype.prevTouched = function (e) {
          for (var t = this.prevPointOnContour; !e.touched(t) && t !== this; )
            t = t.prevPointOnContour;
          return t;
        });
      var ew = Object.freeze(new eT(0, 0)),
        eP = {
          cvCutIn: 17 / 16,
          deltaBase: 9,
          deltaShift: 0.125,
          loop: 1,
          minDis: 1,
          autoFlip: !0,
        };
      function eO(e, t) {
        switch (((this.env = e), (this.stack = []), (this.prog = t), e)) {
          case "glyf":
            (this.zp0 = this.zp1 = this.zp2 = 1),
              (this.rp0 = this.rp1 = this.rp2 = 0);
          case "prep":
            (this.fv = this.pv = this.dpv = eE), (this.round = em);
        }
      }
      function eF(e) {
        for (
          var t = (e.tZone = Array(e.gZone.length)), r = 0;
          r < t.length;
          r++
        )
          t[r] = new eT(0, 0);
      }
      function eG(e, t) {
        var r,
          o = e.prog,
          s = e.ip,
          n = 1;
        do
          if (88 === (r = o[++s])) n++;
          else if (89 === r) n--;
          else if (64 === r) s += o[s + 1] + 1;
          else if (65 === r) s += 2 * o[s + 1] + 1;
          else if (r >= 176 && r <= 183) s += r - 176 + 1;
          else if (r >= 184 && r <= 191) s += (r - 184 + 1) * 2;
          else if (t && 1 === n && 27 === r) break;
        while (n > 0);
        e.ip = s;
      }
      function eI(e, t) {
        exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"),
          (t.fv = t.pv = t.dpv = e);
      }
      function eB(e, t) {
        exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"),
          (t.pv = t.dpv = e);
      }
      function eM(e, t) {
        exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"),
          (t.fv = e);
      }
      function eR(e, t) {
        var r,
          o,
          s = t.stack,
          n = s.pop(),
          a = s.pop(),
          i = t.z2[n],
          p = t.z1[a];
        exports.DEBUG && console.log("SPVTL[" + e + "]", n, a),
          e
            ? ((r = i.y - p.y), (o = p.x - i.x))
            : ((r = p.x - i.x), (o = p.y - i.y)),
          (t.pv = t.dpv = eL(r, o));
      }
      function eA(e, t) {
        var r,
          o,
          s = t.stack,
          n = s.pop(),
          a = s.pop(),
          i = t.z2[n],
          p = t.z1[a];
        exports.DEBUG && console.log("SFVTL[" + e + "]", n, a),
          e
            ? ((r = i.y - p.y), (o = p.x - i.x))
            : ((r = p.x - i.x), (o = p.y - i.y)),
          (t.fv = eL(r, o));
      }
      function ez(e) {
        exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
      }
      function eN(e, t) {
        var r = t.stack.pop(),
          o = t.z0[r],
          s = t.fv,
          n = t.pv;
        exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
        var a = n.distance(o, ew);
        e && (a = t.round(a)),
          s.setRelative(o, ew, a, n),
          s.touch(o),
          (t.rp0 = t.rp1 = r);
      }
      function e_(e, t) {
        var r,
          o,
          s,
          n = t.z2,
          a = n.length - 2;
        exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
        for (var i = 0; i < a; i++)
          (r = n[i]),
            e.touched(r) ||
              (o = r.prevTouched(e)) === r ||
              (o === (s = r.nextTouched(e)) &&
                e.setRelative(r, r, e.distance(o, o, !1, !0), e, !0),
              e.interpolate(r, o, s, e));
      }
      function eW(e, t) {
        for (
          var r = t.stack,
            o = e ? t.rp1 : t.rp2,
            s = (e ? t.z0 : t.z1)[o],
            n = t.fv,
            a = t.pv,
            i = t.loop,
            p = t.z2;
          i--;

        ) {
          var u = r.pop(),
            l = p[u],
            h = a.distance(s, s, !1, !0);
          n.setRelative(l, l, h, a),
            n.touch(l),
            exports.DEBUG &&
              console.log(
                t.step,
                (t.loop > 1 ? "loop " + (t.loop - i) + ": " : "") +
                  "SHP[" +
                  (e ? "rp1" : "rp2") +
                  "]",
                u
              );
        }
        t.loop = 1;
      }
      function eq(e, t) {
        var r = t.stack,
          o = e ? t.rp1 : t.rp2,
          s = (e ? t.z0 : t.z1)[o],
          n = t.fv,
          a = t.pv,
          i = r.pop(),
          p = t.z2[t.contours[i]],
          u = p;
        exports.DEBUG && console.log(t.step, "SHC[" + e + "]", i);
        var l = a.distance(s, s, !1, !0);
        do u !== s && n.setRelative(u, u, l, a), (u = u.nextPointOnContour);
        while (u !== p);
      }
      function eV(e, t) {
        var r,
          o,
          s = t.stack,
          n = e ? t.rp1 : t.rp2,
          a = (e ? t.z0 : t.z1)[n],
          i = t.fv,
          p = t.pv,
          u = s.pop();
        switch (
          (exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", u), u)
        ) {
          case 0:
            r = t.tZone;
            break;
          case 1:
            r = t.gZone;
            break;
          default:
            throw Error("Invalid zone");
        }
        for (
          var l = p.distance(a, a, !1, !0), h = r.length - 2, c = 0;
          c < h;
          c++
        )
          (o = r[c]), i.setRelative(o, o, l, p);
      }
      function eX(e, t) {
        var r = t.stack,
          o = r.pop() / 64,
          s = r.pop(),
          n = t.z1[s],
          a = t.z0[t.rp0],
          i = t.fv,
          p = t.pv;
        i.setRelative(n, a, o, p),
          i.touch(n),
          exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", o, s),
          (t.rp1 = t.rp0),
          (t.rp2 = s),
          e && (t.rp0 = s);
      }
      function ej(e, t) {
        var r = t.stack,
          o = r.pop(),
          s = r.pop(),
          n = t.z0[s],
          a = t.fv,
          i = t.pv,
          p = t.cvt[o];
        exports.DEBUG &&
          console.log(t.step, "MIAP[" + e + "]", o, "(", p, ")", s);
        var u = i.distance(n, ew);
        e && (Math.abs(u - p) < t.cvCutIn && (u = p), (u = t.round(u))),
          a.setRelative(n, ew, u, i),
          0 === t.zp0 && ((n.xo = n.x), (n.yo = n.y)),
          a.touch(n),
          (t.rp0 = t.rp1 = s);
      }
      function eZ(e, t) {
        var r = t.stack,
          o = r.pop(),
          s = t.z2[o];
        exports.DEBUG && console.log(t.step, "GC[" + e + "]", o),
          r.push(64 * t.dpv.distance(s, ew, e, !1));
      }
      function eH(e, t) {
        var r = t.stack,
          o = r.pop(),
          s = r.pop(),
          n = t.z1[o],
          a = t.z0[s],
          i = t.dpv.distance(a, n, e, e);
        exports.DEBUG && console.log(t.step, "MD[" + e + "]", o, s, "->", i),
          t.stack.push(Math.round(64 * i));
      }
      function eY(e, t) {
        var r = t.stack,
          o = r.pop(),
          s = t.fv,
          n = t.pv,
          a = t.ppem,
          i = t.deltaBase + (e - 1) * 16,
          p = t.deltaShift,
          u = t.z0;
        exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", o, r);
        for (var l = 0; l < o; l++) {
          var h = r.pop(),
            c = r.pop();
          if (i + ((240 & c) >> 4) === a) {
            var f = (15 & c) - 8;
            f >= 0 && f++,
              exports.DEBUG && console.log(t.step, "DELTAPFIX", h, "by", f * p);
            var d = u[h];
            s.setRelative(d, d, f * p, n);
          }
        }
      }
      function eK(e, t) {
        var r = t.stack,
          o = r.pop();
        exports.DEBUG && console.log(t.step, "ROUND[]"),
          r.push(64 * t.round(o / 64));
      }
      function eQ(e, t) {
        var r = t.stack,
          o = r.pop(),
          s = t.ppem,
          n = t.deltaBase + (e - 1) * 16,
          a = t.deltaShift;
        exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", o, r);
        for (var i = 0; i < o; i++) {
          var p = r.pop(),
            u = r.pop();
          if (n + ((240 & u) >> 4) === s) {
            var l = (15 & u) - 8;
            l >= 0 && l++;
            var h = l * a;
            exports.DEBUG && console.log(t.step, "DELTACFIX", p, "by", h),
              (t.cvt[p] += h);
          }
        }
      }
      function eJ(e, t) {
        var r,
          o,
          s = t.stack,
          n = s.pop(),
          a = s.pop(),
          i = t.z2[n],
          p = t.z1[a];
        exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", n, a),
          e
            ? ((r = i.y - p.y), (o = p.x - i.x))
            : ((r = p.x - i.x), (o = p.y - i.y)),
          (t.dpv = eL(r, o));
      }
      function e$(e, t) {
        var r = t.stack,
          o = t.prog,
          s = t.ip;
        exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
        for (var n = 0; n < e; n++) r.push(o[++s]);
        t.ip = s;
      }
      function e0(e, t) {
        var r = t.ip,
          o = t.prog,
          s = t.stack;
        exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
        for (var n = 0; n < e; n++) {
          var a = (o[++r] << 8) | o[++r];
          32768 & a && (a = -((65535 ^ a) + 1)), s.push(a);
        }
        t.ip = r;
      }
      function e1(e, t, r, o, s, n) {
        var a,
          i,
          p,
          u,
          l = n.stack,
          h = e && l.pop(),
          c = l.pop(),
          f = n.rp0,
          d = n.z0[f],
          v = n.z1[c],
          g = n.minDis,
          y = n.fv,
          m = n.dpv;
        (p = (i = a = m.distance(v, d, !0, !0)) >= 0 ? 1 : -1),
          (i = Math.abs(i)),
          e && ((u = n.cvt[h]), o && Math.abs(i - u) < n.cvCutIn && (i = u)),
          r && i < g && (i = g),
          o && (i = n.round(i)),
          y.setRelative(v, d, p * i, m),
          y.touch(v),
          exports.DEBUG &&
            console.log(
              n.step,
              (e ? "MIRP[" : "MDRP[") +
                (t ? "M" : "m") +
                (r ? ">" : "_") +
                (o ? "R" : "_") +
                (0 === s ? "Gr" : 1 === s ? "Bl" : 2 === s ? "Wh" : "") +
                "]",
              e ? h + "(" + n.cvt[h] + "," + u + ")" : "",
              c,
              "(d =",
              a,
              "->",
              p * i,
              ")"
            ),
          (n.rp1 = n.rp0),
          (n.rp2 = c),
          t && (n.rp0 = c);
      }
      function e2(e) {
        (this.char = e), (this.state = {}), (this.activeState = null);
      }
      function e6(e, t, r) {
        (this.contextName = r), (this.startIndex = e), (this.endOffset = t);
      }
      function e3(e, t, r) {
        (this.contextName = e),
          (this.openRange = null),
          (this.ranges = []),
          (this.checkStart = t),
          (this.checkEnd = r);
      }
      function e4(e, t) {
        (this.context = e),
          (this.index = t),
          (this.length = e.length),
          (this.current = e[t]),
          (this.backtrack = e.slice(0, t)),
          (this.lookahead = e.slice(t + 1));
      }
      function e8(e) {
        (this.eventId = e), (this.subscribers = []);
      }
      function e5(e) {
        var t = this,
          r = [
            "start",
            "end",
            "next",
            "newToken",
            "contextStart",
            "contextEnd",
            "insertToken",
            "removeToken",
            "removeRange",
            "replaceToken",
            "replaceRange",
            "composeRUD",
            "updateContextsRanges",
          ];
        r.forEach(function (e) {
          Object.defineProperty(t.events, e, { value: new e8(e) });
        }),
          e &&
            r.forEach(function (r) {
              var o = e[r];
              "function" == typeof o && t.events[r].subscribe(o);
            }),
          [
            "insertToken",
            "removeToken",
            "removeRange",
            "replaceToken",
            "replaceRange",
            "composeRUD",
          ].forEach(function (e) {
            t.events[e].subscribe(t.updateContextsRanges);
          });
      }
      function e7(e) {
        (this.tokens = []),
          (this.registeredContexts = {}),
          (this.contextCheckers = []),
          (this.events = {}),
          (this.registeredModifiers = []),
          e5.call(this, e);
      }
      function e9(e) {
        return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
      }
      function te(e) {
        return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(
          e
        );
      }
      function tt(e) {
        return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(
          e
        );
      }
      function tr(e) {
        return /[A-z]/.test(e);
      }
      function to(e) {
        (this.font = e), (this.features = {});
      }
      function ts(e) {
        (this.id = e.id),
          (this.tag = e.tag),
          (this.substitution = e.substitution);
      }
      function tn(e, t) {
        if (!e) return -1;
        switch (t.format) {
          case 1:
            return t.glyphs.indexOf(e);
          case 2:
            for (var r = t.ranges, o = 0; o < r.length; o++) {
              var s = r[o];
              if (e >= s.start && e <= s.end) {
                var n = e - s.start;
                return s.index + n;
              }
            }
        }
        return -1;
      }
      function ta(e, t) {
        return -1 === tn(e, t.coverage) ? null : e + t.deltaGlyphId;
      }
      function ti(e, t) {
        var r = tn(e, t.coverage);
        return -1 === r ? null : t.substitute[r];
      }
      function tp(e, t) {
        for (var r = [], o = 0; o < e.length; o++) {
          var s = e[o],
            n = t.current,
            a = tn((n = Array.isArray(n) ? n[0] : n), s);
          -1 !== a && r.push(a);
        }
        return r.length !== e.length ? -1 : r;
      }
      function tu(e, t) {
        var r =
          t.inputCoverage.length +
          t.lookaheadCoverage.length +
          t.backtrackCoverage.length;
        if (e.context.length < r) return [];
        var o = tp(t.inputCoverage, e);
        if (-1 === o) return [];
        var s = t.inputCoverage.length - 1;
        if (e.lookahead.length < t.lookaheadCoverage.length) return [];
        for (var n = e.lookahead.slice(s); n.length && tt(n[0].char); )
          n.shift();
        var a = new e4(n, 0),
          i = tp(t.lookaheadCoverage, a),
          p = [].concat(e.backtrack);
        for (p.reverse(); p.length && tt(p[0].char); ) p.shift();
        if (p.length < t.backtrackCoverage.length) return [];
        var u = new e4(p, 0),
          l = tp(t.backtrackCoverage, u),
          h =
            o.length === t.inputCoverage.length &&
            i.length === t.lookaheadCoverage.length &&
            l.length === t.backtrackCoverage.length,
          c = [];
        if (h)
          for (var f = 0; f < t.lookupRecords.length; f++)
            for (
              var d = t.lookupRecords[f].lookupListIndex,
                v = this.getLookupByIndex(d),
                g = 0;
              g < v.subtables.length;
              g++
            ) {
              var y = v.subtables[g],
                m = this.getLookupMethod(v, y);
              if ("12" === this.getSubstitutionType(v, y))
                for (var b = 0; b < o.length; b++) {
                  var x = m(e.get(b));
                  x && c.push(x);
                }
            }
        return c;
      }
      function tl(e, t) {
        var r,
          o = tn(e.current, t.coverage);
        if (-1 === o) return null;
        for (var s = t.ligatureSets[o], n = 0; n < s.length; n++) {
          r = s[n];
          for (
            var a = 0;
            a < r.components.length && e.lookahead[a] === r.components[a];
            a++
          )
            if (a === r.components.length - 1) return r;
        }
        return null;
      }
      function th(e, t) {
        var r = tn(e, t.coverage);
        return -1 === r ? null : t.sequences[r];
      }
      (eg.prototype.exec = function (e, t) {
        if ("number" != typeof t) throw Error("Point size is not a number!");
        if (!(this._errorState > 2)) {
          var r = this.font,
            o = this._prepState;
          if (!o || o.ppem !== t) {
            var a = this._fpgmState;
            if (!a) {
              (eO.prototype = eP),
                ((a = this._fpgmState = new eO("fpgm", r.tables.fpgm)).funcs =
                  []),
                (a.font = r),
                exports.DEBUG &&
                  (console.log("---EXEC FPGM---"), (a.step = -1));
              try {
                s(a);
              } catch (e) {
                console.log("Hinting error in FPGM:" + e),
                  (this._errorState = 3);
                return;
              }
            }
            (eO.prototype = a),
              ((o = this._prepState = new eO("prep", r.tables.prep)).ppem = t);
            var i = r.tables.cvt;
            if (i)
              for (
                var p = (o.cvt = Array(i.length)), u = t / r.unitsPerEm, l = 0;
                l < i.length;
                l++
              )
                p[l] = i[l] * u;
            else o.cvt = [];
            exports.DEBUG && (console.log("---EXEC PREP---"), (o.step = -1));
            try {
              s(o);
            } catch (e) {
              this._errorState < 2 && console.log("Hinting error in PREP:" + e),
                (this._errorState = 2);
            }
          }
          if (!(this._errorState > 1))
            try {
              return n(e, o);
            } catch (e) {
              this._errorState < 1 &&
                (console.log("Hinting error:" + e),
                console.log("Note: further hinting errors are silenced")),
                (this._errorState = 1);
              return;
            }
        }
      }),
        (n = function (e, t) {
          var r,
            o,
            n,
            i = t.ppem / t.font.unitsPerEm,
            p = e.components;
          if (((eO.prototype = t), p)) {
            var u = t.font;
            (o = []), (r = []);
            for (var l = 0; l < p.length; l++) {
              var h = p[l],
                c = u.glyphs.get(h.glyphIndex);
              (n = new eO("glyf", c.instructions)),
                exports.DEBUG &&
                  (console.log("---EXEC COMP " + l + "---"), (n.step = -1)),
                a(c, n, i, i);
              for (
                var f = Math.round(h.dx * i),
                  d = Math.round(h.dy * i),
                  v = n.gZone,
                  g = n.contours,
                  y = 0;
                y < v.length;
                y++
              ) {
                var m = v[y];
                (m.xTouched = m.yTouched = !1),
                  (m.xo = m.x = m.x + f),
                  (m.yo = m.y = m.y + d);
              }
              var b = o.length;
              o.push.apply(o, v);
              for (var x = 0; x < g.length; x++) r.push(g[x] + b);
            }
            e.instructions &&
              !n.inhibitGridFit &&
              (((n = new eO("glyf", e.instructions)).gZone =
                n.z0 =
                n.z1 =
                n.z2 =
                  o),
              (n.contours = r),
              o.push(new eT(0, 0), new eT(Math.round(e.advanceWidth * i), 0)),
              exports.DEBUG &&
                (console.log("---EXEC COMPOSITE---"), (n.step = -1)),
              s(n),
              (o.length -= 2));
          } else
            (n = new eO("glyf", e.instructions)),
              exports.DEBUG && (console.log("---EXEC GLYPH---"), (n.step = -1)),
              a(e, n, i, i),
              (o = n.gZone);
          return o;
        }),
        (a = function (e, t, r, o) {
          for (
            var n,
              a,
              i,
              p = e.points || [],
              u = p.length,
              l = (t.gZone = t.z0 = t.z1 = t.z2 = []),
              h = (t.contours = []),
              c = 0;
            c < u;
            c++
          )
            (n = p[c]),
              (l[c] = new eT(
                n.x * r,
                n.y * o,
                n.lastPointOfContour,
                n.onCurve
              ));
          for (var f = 0; f < u; f++)
            (n = l[f]),
              a || ((a = n), h.push(f)),
              n.lastPointOfContour
                ? ((n.nextPointOnContour = a),
                  (a.prevPointOnContour = n),
                  (a = void 0))
                : ((i = l[f + 1]),
                  (n.nextPointOnContour = i),
                  (i.prevPointOnContour = n));
          if (!t.inhibitGridFit) {
            if (exports.DEBUG) {
              console.log("PROCESSING GLYPH", t.stack);
              for (var d = 0; d < u; d++) console.log(d, l[d].x, l[d].y);
            }
            if (
              (l.push(new eT(0, 0), new eT(Math.round(e.advanceWidth * r), 0)),
              s(t),
              (l.length -= 2),
              exports.DEBUG)
            ) {
              console.log("FINISHED GLYPH", t.stack);
              for (var v = 0; v < u; v++) console.log(v, l[v].x, l[v].y);
            }
          }
        }),
        (s = function (e) {
          var t,
            r = e.prog;
          if (r) {
            var s = r.length;
            for (e.ip = 0; e.ip < s; e.ip++) {
              if ((exports.DEBUG && e.step++, !(t = o[r[e.ip]])))
                throw Error(
                  "unknown instruction: 0x" + Number(r[e.ip]).toString(16)
                );
              t(e);
            }
          }
        }),
        (o = [
          eI.bind(void 0, eC),
          eI.bind(void 0, eE),
          eB.bind(void 0, eC),
          eB.bind(void 0, eE),
          eM.bind(void 0, eC),
          eM.bind(void 0, eE),
          eR.bind(void 0, 0),
          eR.bind(void 0, 1),
          eA.bind(void 0, 0),
          eA.bind(void 0, 1),
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "SPVFS[]", r, o),
              (e.pv = e.dpv = eL(o, r));
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "SPVFS[]", r, o),
              (e.fv = eL(o, r));
          },
          function (e) {
            var t = e.stack,
              r = e.pv;
            exports.DEBUG && console.log(e.step, "GPV[]"),
              t.push(16384 * r.x),
              t.push(16384 * r.y);
          },
          function (e) {
            var t = e.stack,
              r = e.fv;
            exports.DEBUG && console.log(e.step, "GFV[]"),
              t.push(16384 * r.x),
              t.push(16384 * r.y);
          },
          function (e) {
            (e.fv = e.pv), exports.DEBUG && console.log(e.step, "SFVTPV[]");
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop(),
              s = t.pop(),
              n = t.pop(),
              a = t.pop(),
              i = e.z0,
              p = e.z1,
              u = i[r],
              l = i[o],
              h = p[s],
              c = p[n],
              f = e.z2[a];
            exports.DEBUG && console.log("ISECT[], ", r, o, s, n, a);
            var d = u.x,
              v = u.y,
              g = l.x,
              y = l.y,
              m = h.x,
              b = h.y,
              x = c.x,
              S = c.y,
              k = (d - g) * (b - S) - (v - y) * (m - x),
              U = d * y - v * g,
              E = m * S - b * x;
            (f.x = (U * (m - x) - E * (d - g)) / k),
              (f.y = (U * (b - S) - E * (v - y)) / k);
          },
          function (e) {
            (e.rp0 = e.stack.pop()),
              exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
          },
          function (e) {
            (e.rp1 = e.stack.pop()),
              exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
          },
          function (e) {
            (e.rp2 = e.stack.pop()),
              exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
          },
          function (e) {
            var t = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "SZP0[]", t),
              (e.zp0 = t),
              t)
            ) {
              case 0:
                e.tZone || eF(e), (e.z0 = e.tZone);
                break;
              case 1:
                e.z0 = e.gZone;
                break;
              default:
                throw Error("Invalid zone pointer");
            }
          },
          function (e) {
            var t = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "SZP1[]", t),
              (e.zp1 = t),
              t)
            ) {
              case 0:
                e.tZone || eF(e), (e.z1 = e.tZone);
                break;
              case 1:
                e.z1 = e.gZone;
                break;
              default:
                throw Error("Invalid zone pointer");
            }
          },
          function (e) {
            var t = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "SZP2[]", t),
              (e.zp2 = t),
              t)
            ) {
              case 0:
                e.tZone || eF(e), (e.z2 = e.tZone);
                break;
              case 1:
                e.z2 = e.gZone;
                break;
              default:
                throw Error("Invalid zone pointer");
            }
          },
          function (e) {
            var t = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "SZPS[]", t),
              (e.zp0 = e.zp1 = e.zp2 = t),
              t)
            ) {
              case 0:
                e.tZone || eF(e), (e.z0 = e.z1 = e.z2 = e.tZone);
                break;
              case 1:
                e.z0 = e.z1 = e.z2 = e.gZone;
                break;
              default:
                throw Error("Invalid zone pointer");
            }
          },
          function (e) {
            (e.loop = e.stack.pop()),
              exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "RTG[]"), (e.round = em);
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "RTHG[]"), (e.round = ex);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SMD[]", t),
              (e.minDis = t / 64);
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "ELSE[]"), eG(e, !1);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "JMPR[]", t), (e.ip += t - 1);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SCVTCI[]", t),
              (e.cvCutIn = t / 64);
          },
          void 0,
          void 0,
          function (e) {
            var t = e.stack;
            exports.DEBUG && console.log(e.step, "DUP[]"),
              t.push(t[t.length - 1]);
          },
          ez,
          function (e) {
            exports.DEBUG && console.log(e.step, "CLEAR[]"),
              (e.stack.length = 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "SWAP[]"),
              t.push(r),
              t.push(o);
          },
          function (e) {
            var t = e.stack;
            exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "CINDEX[]", r),
              t.push(t[t.length - r]);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "MINDEX[]", r),
              t.push(t.splice(t.length - r, 1)[0]);
          },
          void 0,
          void 0,
          void 0,
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, o);
            var n = e.ip,
              a = e.prog;
            e.prog = e.funcs[r];
            for (var i = 0; i < o; i++)
              s(e),
                exports.DEBUG &&
                  console.log(
                    ++e.step,
                    i + 1 < o ? "next loopcall" : "done loopcall",
                    i
                  );
            (e.ip = n), (e.prog = a);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "CALL[]", t);
            var r = e.ip,
              o = e.prog;
            (e.prog = e.funcs[t]),
              s(e),
              (e.ip = r),
              (e.prog = o),
              exports.DEBUG && console.log(++e.step, "returning from", t);
          },
          function (e) {
            if ("fpgm" !== e.env) throw Error("FDEF not allowed here");
            var t = e.stack,
              r = e.prog,
              o = e.ip,
              s = t.pop(),
              n = o;
            for (
              exports.DEBUG && console.log(e.step, "FDEF[]", s);
              45 !== r[++o];

            );
            (e.ip = o), (e.funcs[s] = r.slice(n + 1, o));
          },
          void 0,
          eN.bind(void 0, 0),
          eN.bind(void 0, 1),
          e_.bind(void 0, eC),
          e_.bind(void 0, eE),
          eW.bind(void 0, 0),
          eW.bind(void 0, 1),
          eq.bind(void 0, 0),
          eq.bind(void 0, 1),
          eV.bind(void 0, 0),
          eV.bind(void 0, 1),
          function (e) {
            for (
              var t = e.stack, r = e.loop, o = e.fv, s = t.pop() / 64, n = e.z2;
              r--;

            ) {
              var a = t.pop(),
                i = n[a];
              exports.DEBUG &&
                console.log(
                  e.step,
                  (e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]",
                  a,
                  s
                ),
                o.setRelative(i, i, s),
                o.touch(i);
            }
            e.loop = 1;
          },
          function (e) {
            for (
              var t = e.stack,
                r = e.rp1,
                o = e.rp2,
                s = e.loop,
                n = e.z0[r],
                a = e.z1[o],
                i = e.fv,
                p = e.dpv,
                u = e.z2;
              s--;

            ) {
              var l = t.pop(),
                h = u[l];
              exports.DEBUG &&
                console.log(
                  e.step,
                  (e.loop > 1 ? "loop " + (e.loop - s) + ": " : "") + "IP[]",
                  l,
                  r,
                  "<->",
                  o
                ),
                i.interpolate(h, n, a, p),
                i.touch(h);
            }
            e.loop = 1;
          },
          eX.bind(void 0, 0),
          eX.bind(void 0, 1),
          function (e) {
            for (
              var t = e.stack,
                r = e.rp0,
                o = e.z0[r],
                s = e.loop,
                n = e.fv,
                a = e.pv,
                i = e.z1;
              s--;

            ) {
              var p = t.pop(),
                u = i[p];
              exports.DEBUG &&
                console.log(
                  e.step,
                  (e.loop > 1 ? "loop " + (e.loop - s) + ": " : "") +
                    "ALIGNRP[]",
                  p
                ),
                n.setRelative(u, o, 0, a),
                n.touch(u);
            }
            e.loop = 1;
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "RTDG[]"), (e.round = eb);
          },
          ej.bind(void 0, 0),
          ej.bind(void 0, 1),
          function (e) {
            var t = e.prog,
              r = e.ip,
              o = e.stack,
              s = t[++r];
            exports.DEBUG && console.log(e.step, "NPUSHB[]", s);
            for (var n = 0; n < s; n++) o.push(t[++r]);
            e.ip = r;
          },
          function (e) {
            var t = e.ip,
              r = e.prog,
              o = e.stack,
              s = r[++t];
            exports.DEBUG && console.log(e.step, "NPUSHW[]", s);
            for (var n = 0; n < s; n++) {
              var a = (r[++t] << 8) | r[++t];
              32768 & a && (a = -((65535 ^ a) + 1)), o.push(a);
            }
            e.ip = t;
          },
          function (e) {
            var t = e.stack,
              r = e.store;
            r || (r = e.store = []);
            var o = t.pop(),
              s = t.pop();
            exports.DEBUG && console.log(e.step, "WS", o, s), (r[s] = o);
          },
          function (e) {
            var t = e.stack,
              r = e.store,
              o = t.pop();
            exports.DEBUG && console.log(e.step, "RS", o);
            var s = (r && r[o]) || 0;
            t.push(s);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "WCVTP", r, o),
              (e.cvt[o] = r / 64);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "RCVT", r),
              t.push(64 * e.cvt[r]);
          },
          eZ.bind(void 0, 0),
          eZ.bind(void 0, 1),
          void 0,
          eH.bind(void 0, 0),
          eH.bind(void 0, 1),
          function (e) {
            exports.DEBUG && console.log(e.step, "MPPEM[]"),
              e.stack.push(e.ppem);
          },
          void 0,
          function (e) {
            exports.DEBUG && console.log(e.step, "FLIPON[]"), (e.autoFlip = !0);
          },
          void 0,
          void 0,
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "LT[]", r, o),
              t.push(o < r ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "LTEQ[]", r, o),
              t.push(o <= r ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "GT[]", r, o),
              t.push(o > r ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "GTEQ[]", r, o),
              t.push(o >= r ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "EQ[]", r, o),
              t.push(r === o ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "NEQ[]", r, o),
              t.push(r !== o ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "ODD[]", r),
              t.push(Math.trunc(r) % 2 ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "EVEN[]", r),
              t.push(Math.trunc(r) % 2 ? 0 : 1);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "IF[]", t),
              !t && (eG(e, !0), exports.DEBUG && console.log(e.step, "EIF[]"));
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "EIF[]");
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "AND[]", r, o),
              t.push(r && o ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "OR[]", r, o),
              t.push(r || o ? 1 : 0);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
          },
          eY.bind(void 0, 1),
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SDB[]", t), (e.deltaBase = t);
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SDS[]", t),
              (e.deltaShift = Math.pow(0.5, t));
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "ADD[]", r, o), t.push(o + r);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "SUB[]", r, o), t.push(o - r);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "DIV[]", r, o),
              t.push((64 * o) / r);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "MUL[]", r, o),
              t.push((o * r) / 64);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "ABS[]", r),
              t.push(Math.abs(r));
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "FLOOR[]", r),
              t.push(64 * Math.floor(r / 64));
          },
          function (e) {
            var t = e.stack,
              r = t.pop();
            exports.DEBUG && console.log(e.step, "CEILING[]", r),
              t.push(64 * Math.ceil(r / 64));
          },
          eK.bind(void 0, 0),
          eK.bind(void 0, 1),
          eK.bind(void 0, 2),
          eK.bind(void 0, 3),
          void 0,
          void 0,
          void 0,
          void 0,
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "WCVTF[]", r, o),
              (e.cvt[o] = (r * e.ppem) / e.font.unitsPerEm);
          },
          eY.bind(void 0, 2),
          eY.bind(void 0, 3),
          eQ.bind(void 0, 1),
          eQ.bind(void 0, 2),
          eQ.bind(void 0, 3),
          function (e) {
            var t,
              r = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "SROUND[]", r),
              (e.round = eU),
              192 & r)
            ) {
              case 0:
                t = 0.5;
                break;
              case 64:
                t = 1;
                break;
              case 128:
                t = 2;
                break;
              default:
                throw Error("invalid SROUND value");
            }
            switch (((e.srPeriod = t), 48 & r)) {
              case 0:
                e.srPhase = 0;
                break;
              case 16:
                e.srPhase = 0.25 * t;
                break;
              case 32:
                e.srPhase = 0.5 * t;
                break;
              case 48:
                e.srPhase = 0.75 * t;
                break;
              default:
                throw Error("invalid SROUND value");
            }
            0 == (r &= 15)
              ? (e.srThreshold = 0)
              : (e.srThreshold = (r / 8 - 0.5) * t);
          },
          function (e) {
            var t,
              r = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "S45ROUND[]", r),
              (e.round = eU),
              192 & r)
            ) {
              case 0:
                t = Math.sqrt(2) / 2;
                break;
              case 64:
                t = Math.sqrt(2);
                break;
              case 128:
                t = 2 * Math.sqrt(2);
                break;
              default:
                throw Error("invalid S45ROUND value");
            }
            switch (((e.srPeriod = t), 48 & r)) {
              case 0:
                e.srPhase = 0;
                break;
              case 16:
                e.srPhase = 0.25 * t;
                break;
              case 32:
                e.srPhase = 0.5 * t;
                break;
              case 48:
                e.srPhase = 0.75 * t;
                break;
              default:
                throw Error("invalid S45ROUND value");
            }
            0 == (r &= 15)
              ? (e.srThreshold = 0)
              : (e.srThreshold = (r / 8 - 0.5) * t);
          },
          void 0,
          void 0,
          function (e) {
            exports.DEBUG && console.log(e.step, "ROFF[]"), (e.round = ey);
          },
          void 0,
          function (e) {
            exports.DEBUG && console.log(e.step, "RUTG[]"), (e.round = eS);
          },
          function (e) {
            exports.DEBUG && console.log(e.step, "RDTG[]"), (e.round = ek);
          },
          ez,
          ez,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SCANCTRL[]", t);
          },
          eJ.bind(void 0, 0),
          eJ.bind(void 0, 1),
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = 0;
            exports.DEBUG && console.log(e.step, "GETINFO[]", r),
              1 & r && (o = 35),
              32 & r && (o |= 4096),
              t.push(o);
          },
          void 0,
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop(),
              s = t.pop();
            exports.DEBUG && console.log(e.step, "ROLL[]"),
              t.push(o),
              t.push(r),
              t.push(s);
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "MAX[]", r, o),
              t.push(Math.max(o, r));
          },
          function (e) {
            var t = e.stack,
              r = t.pop(),
              o = t.pop();
            exports.DEBUG && console.log(e.step, "MIN[]", r, o),
              t.push(Math.min(o, r));
          },
          function (e) {
            var t = e.stack.pop();
            exports.DEBUG && console.log(e.step, "SCANTYPE[]", t);
          },
          function (e) {
            var t = e.stack.pop(),
              r = e.stack.pop();
            switch (
              (exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t)
            ) {
              case 1:
                e.inhibitGridFit = !!r;
                return;
              case 2:
                e.ignoreCvt = !!r;
                return;
              default:
                throw Error("invalid INSTCTRL[] selector");
            }
          },
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          e$.bind(void 0, 1),
          e$.bind(void 0, 2),
          e$.bind(void 0, 3),
          e$.bind(void 0, 4),
          e$.bind(void 0, 5),
          e$.bind(void 0, 6),
          e$.bind(void 0, 7),
          e$.bind(void 0, 8),
          e0.bind(void 0, 1),
          e0.bind(void 0, 2),
          e0.bind(void 0, 3),
          e0.bind(void 0, 4),
          e0.bind(void 0, 5),
          e0.bind(void 0, 6),
          e0.bind(void 0, 7),
          e0.bind(void 0, 8),
          e1.bind(void 0, 0, 0, 0, 0, 0),
          e1.bind(void 0, 0, 0, 0, 0, 1),
          e1.bind(void 0, 0, 0, 0, 0, 2),
          e1.bind(void 0, 0, 0, 0, 0, 3),
          e1.bind(void 0, 0, 0, 0, 1, 0),
          e1.bind(void 0, 0, 0, 0, 1, 1),
          e1.bind(void 0, 0, 0, 0, 1, 2),
          e1.bind(void 0, 0, 0, 0, 1, 3),
          e1.bind(void 0, 0, 0, 1, 0, 0),
          e1.bind(void 0, 0, 0, 1, 0, 1),
          e1.bind(void 0, 0, 0, 1, 0, 2),
          e1.bind(void 0, 0, 0, 1, 0, 3),
          e1.bind(void 0, 0, 0, 1, 1, 0),
          e1.bind(void 0, 0, 0, 1, 1, 1),
          e1.bind(void 0, 0, 0, 1, 1, 2),
          e1.bind(void 0, 0, 0, 1, 1, 3),
          e1.bind(void 0, 0, 1, 0, 0, 0),
          e1.bind(void 0, 0, 1, 0, 0, 1),
          e1.bind(void 0, 0, 1, 0, 0, 2),
          e1.bind(void 0, 0, 1, 0, 0, 3),
          e1.bind(void 0, 0, 1, 0, 1, 0),
          e1.bind(void 0, 0, 1, 0, 1, 1),
          e1.bind(void 0, 0, 1, 0, 1, 2),
          e1.bind(void 0, 0, 1, 0, 1, 3),
          e1.bind(void 0, 0, 1, 1, 0, 0),
          e1.bind(void 0, 0, 1, 1, 0, 1),
          e1.bind(void 0, 0, 1, 1, 0, 2),
          e1.bind(void 0, 0, 1, 1, 0, 3),
          e1.bind(void 0, 0, 1, 1, 1, 0),
          e1.bind(void 0, 0, 1, 1, 1, 1),
          e1.bind(void 0, 0, 1, 1, 1, 2),
          e1.bind(void 0, 0, 1, 1, 1, 3),
          e1.bind(void 0, 1, 0, 0, 0, 0),
          e1.bind(void 0, 1, 0, 0, 0, 1),
          e1.bind(void 0, 1, 0, 0, 0, 2),
          e1.bind(void 0, 1, 0, 0, 0, 3),
          e1.bind(void 0, 1, 0, 0, 1, 0),
          e1.bind(void 0, 1, 0, 0, 1, 1),
          e1.bind(void 0, 1, 0, 0, 1, 2),
          e1.bind(void 0, 1, 0, 0, 1, 3),
          e1.bind(void 0, 1, 0, 1, 0, 0),
          e1.bind(void 0, 1, 0, 1, 0, 1),
          e1.bind(void 0, 1, 0, 1, 0, 2),
          e1.bind(void 0, 1, 0, 1, 0, 3),
          e1.bind(void 0, 1, 0, 1, 1, 0),
          e1.bind(void 0, 1, 0, 1, 1, 1),
          e1.bind(void 0, 1, 0, 1, 1, 2),
          e1.bind(void 0, 1, 0, 1, 1, 3),
          e1.bind(void 0, 1, 1, 0, 0, 0),
          e1.bind(void 0, 1, 1, 0, 0, 1),
          e1.bind(void 0, 1, 1, 0, 0, 2),
          e1.bind(void 0, 1, 1, 0, 0, 3),
          e1.bind(void 0, 1, 1, 0, 1, 0),
          e1.bind(void 0, 1, 1, 0, 1, 1),
          e1.bind(void 0, 1, 1, 0, 1, 2),
          e1.bind(void 0, 1, 1, 0, 1, 3),
          e1.bind(void 0, 1, 1, 1, 0, 0),
          e1.bind(void 0, 1, 1, 1, 0, 1),
          e1.bind(void 0, 1, 1, 1, 0, 2),
          e1.bind(void 0, 1, 1, 1, 0, 3),
          e1.bind(void 0, 1, 1, 1, 1, 0),
          e1.bind(void 0, 1, 1, 1, 1, 1),
          e1.bind(void 0, 1, 1, 1, 1, 2),
          e1.bind(void 0, 1, 1, 1, 1, 3),
        ]),
        (e2.prototype.setState = function (e, t) {
          return (
            (this.state[e] = t),
            (this.activeState = { key: e, value: this.state[e] }),
            this.activeState
          );
        }),
        (e2.prototype.getState = function (e) {
          return this.state[e] || null;
        }),
        (e7.prototype.inboundIndex = function (e) {
          return e >= 0 && e < this.tokens.length;
        }),
        (e7.prototype.composeRUD = function (e) {
          var t = this,
            r = e.map(function (e) {
              return t[e[0]].apply(t, e.slice(1).concat(!0));
            }),
            o = function (e) {
              return "object" == typeof e && e.hasOwnProperty("FAIL");
            };
          if (r.every(o))
            return {
              FAIL: "composeRUD: one or more operations hasn't completed successfully",
              report: r.filter(o),
            };
          this.dispatch("composeRUD", [
            r.filter(function (e) {
              return !o(e);
            }),
          ]);
        }),
        (e7.prototype.replaceRange = function (e, t, r, o) {
          t = null !== t ? t : this.tokens.length;
          var s = r.every(function (e) {
            return e instanceof e2;
          });
          if (!(!isNaN(e) && this.inboundIndex(e)) || !s)
            return { FAIL: "replaceRange: invalid tokens or startIndex." };
          var n = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
          return o || this.dispatch("replaceToken", [e, t, r]), [n, r];
        }),
        (e7.prototype.replaceToken = function (e, t, r) {
          if (!(!isNaN(e) && this.inboundIndex(e)) || !(t instanceof e2))
            return { FAIL: "replaceToken: invalid token or index." };
          var o = this.tokens.splice(e, 1, t);
          return r || this.dispatch("replaceToken", [e, t]), [o[0], t];
        }),
        (e7.prototype.removeRange = function (e, t, r) {
          t = isNaN(t) ? this.tokens.length : t;
          var o = this.tokens.splice(e, t);
          return r || this.dispatch("removeRange", [o, e, t]), o;
        }),
        (e7.prototype.removeToken = function (e, t) {
          if (!(!isNaN(e) && this.inboundIndex(e)))
            return { FAIL: "removeToken: invalid token index." };
          var r = this.tokens.splice(e, 1);
          return t || this.dispatch("removeToken", [r, e]), r;
        }),
        (e7.prototype.insertToken = function (e, t, r) {
          return e.every(function (e) {
            return e instanceof e2;
          })
            ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)),
              r || this.dispatch("insertToken", [e, t]),
              e)
            : { FAIL: "insertToken: invalid token(s)." };
        }),
        (e7.prototype.registerModifier = function (e, t, r) {
          this.events.newToken.subscribe(function (o, s) {
            if (null === t || !0 === t.apply(this, [o, s])) {
              var n = r.apply(this, [o, s]);
              o.setState(e, n);
            }
          }),
            this.registeredModifiers.push(e);
        }),
        (e8.prototype.subscribe = function (e) {
          return "function" == typeof e
            ? this.subscribers.push(e) - 1
            : { FAIL: "invalid '" + this.eventId + "' event handler" };
        }),
        (e8.prototype.unsubscribe = function (e) {
          this.subscribers.splice(e, 1);
        }),
        (e4.prototype.setCurrentIndex = function (e) {
          (this.index = e),
            (this.current = this.context[e]),
            (this.backtrack = this.context.slice(0, e)),
            (this.lookahead = this.context.slice(e + 1));
        }),
        (e4.prototype.get = function (e) {
          switch (!0) {
            case 0 === e:
              return this.current;
            case e < 0 && Math.abs(e) <= this.backtrack.length:
              return this.backtrack.slice(e)[0];
            case e > 0 && e <= this.lookahead.length:
              return this.lookahead[e - 1];
            default:
              return null;
          }
        }),
        (e7.prototype.rangeToText = function (e) {
          if (e instanceof e6)
            return this.getRangeTokens(e)
              .map(function (e) {
                return e.char;
              })
              .join("");
        }),
        (e7.prototype.getText = function () {
          return this.tokens
            .map(function (e) {
              return e.char;
            })
            .join("");
        }),
        (e7.prototype.getContext = function (e) {
          return this.registeredContexts[e] || null;
        }),
        (e7.prototype.on = function (e, t) {
          var r = this.events[e];
          return r ? r.subscribe(t) : null;
        }),
        (e7.prototype.dispatch = function (e, t) {
          var r = this,
            o = this.events[e];
          o instanceof e8 &&
            o.subscribers.forEach(function (e) {
              e.apply(r, t || []);
            });
        }),
        (e7.prototype.registerContextChecker = function (e, t, r) {
          if (this.getContext(e))
            return { FAIL: "context name '" + e + "' is already registered." };
          if ("function" != typeof t)
            return { FAIL: "missing context start check." };
          if ("function" != typeof r)
            return { FAIL: "missing context end check." };
          var o = new e3(e, t, r);
          return (
            (this.registeredContexts[e] = o), this.contextCheckers.push(o), o
          );
        }),
        (e7.prototype.getRangeTokens = function (e) {
          var t = e.startIndex + e.endOffset;
          return [].concat(this.tokens.slice(e.startIndex, t));
        }),
        (e7.prototype.getContextRanges = function (e) {
          var t = this.getContext(e);
          return t
            ? t.ranges
            : { FAIL: "context checker '" + e + "' is not registered." };
        }),
        (e7.prototype.resetContextsRanges = function () {
          var e = this.registeredContexts;
          for (var t in e) e.hasOwnProperty(t) && (e[t].ranges = []);
        }),
        (e7.prototype.updateContextsRanges = function () {
          this.resetContextsRanges();
          for (
            var e = this.tokens.map(function (e) {
                return e.char;
              }),
              t = 0;
            t < e.length;
            t++
          ) {
            var r = new e4(e, t);
            this.runContextCheck(r);
          }
          this.dispatch("updateContextsRanges", [this.registeredContexts]);
        }),
        (e7.prototype.setEndOffset = function (e, t) {
          var r = new e6(this.getContext(t).openRange.startIndex, e, t),
            o = this.getContext(t).ranges;
          return (
            (r.rangeId = t + "." + o.length),
            o.push(r),
            (this.getContext(t).openRange = null),
            r
          );
        }),
        (e7.prototype.runContextCheck = function (e) {
          var t = this,
            r = e.index;
          this.contextCheckers.forEach(function (o) {
            var s = o.contextName,
              n = t.getContext(s).openRange;
            if (
              (!n &&
                o.checkStart(e) &&
                ((n = new e6(r, null, s)),
                (t.getContext(s).openRange = n),
                t.dispatch("contextStart", [s, r])),
              n && o.checkEnd(e))
            ) {
              var a = r - n.startIndex + 1,
                i = t.setEndOffset(a, s);
              t.dispatch("contextEnd", [s, i]);
            }
          });
        }),
        (e7.prototype.tokenize = function (e) {
          (this.tokens = []), this.resetContextsRanges();
          var t = Array.from(e);
          this.dispatch("start");
          for (var r = 0; r < t.length; r++) {
            var o = t[r],
              s = new e4(t, r);
            this.dispatch("next", [s]), this.runContextCheck(s);
            var n = new e2(o);
            this.tokens.push(n), this.dispatch("newToken", [n, s]);
          }
          return this.dispatch("end", [this.tokens]), this.tokens;
        }),
        (to.prototype.getDefaultScriptFeaturesIndexes = function () {
          for (
            var e = this.font.tables.gsub.scripts, t = 0;
            t < e.length;
            t++
          ) {
            var r = e[t];
            if ("DFLT" === r.tag) return r.script.defaultLangSys.featureIndexes;
          }
          return [];
        }),
        (to.prototype.getScriptFeaturesIndexes = function (e) {
          if (!this.font.tables.gsub) return [];
          if (!e) return this.getDefaultScriptFeaturesIndexes();
          for (
            var t = this.font.tables.gsub.scripts, r = 0;
            r < t.length;
            r++
          ) {
            var o = t[r];
            if (o.tag === e && o.script.defaultLangSys)
              return o.script.defaultLangSys.featureIndexes;
            var s = o.langSysRecords;
            if (s)
              for (var n = 0; n < s.length; n++) {
                var a = s[n];
                if (a.tag === e) return a.langSys.featureIndexes;
              }
          }
          return this.getDefaultScriptFeaturesIndexes();
        }),
        (to.prototype.mapTagsToFeatures = function (e, t) {
          for (var r = {}, o = 0; o < e.length; o++) {
            var s = e[o].tag,
              n = e[o].feature;
            r[s] = n;
          }
          this.features[t].tags = r;
        }),
        (to.prototype.getScriptFeatures = function (e) {
          var t = this.features[e];
          if (this.features.hasOwnProperty(e)) return t;
          var r = this.getScriptFeaturesIndexes(e);
          if (!r) return null;
          var o = this.font.tables.gsub;
          return (
            (t = r.map(function (e) {
              return o.features[e];
            })),
            (this.features[e] = t),
            this.mapTagsToFeatures(t, e),
            t
          );
        }),
        (to.prototype.getSubstitutionType = function (e, t) {
          return e.lookupType.toString() + t.substFormat.toString();
        }),
        (to.prototype.getLookupMethod = function (e, t) {
          var r = this;
          switch (this.getSubstitutionType(e, t)) {
            case "11":
              return function (e) {
                return ta.apply(r, [e, t]);
              };
            case "12":
              return function (e) {
                return ti.apply(r, [e, t]);
              };
            case "63":
              return function (e) {
                return tu.apply(r, [e, t]);
              };
            case "41":
              return function (e) {
                return tl.apply(r, [e, t]);
              };
            case "21":
              return function (e) {
                return th.apply(r, [e, t]);
              };
            default:
              throw Error(
                "lookupType: " +
                  e.lookupType +
                  " - substFormat: " +
                  t.substFormat +
                  " is not yet supported"
              );
          }
        }),
        (to.prototype.lookupFeature = function (e) {
          var t = e.contextParams,
            r = t.index,
            o = this.getFeature({ tag: e.tag, script: e.script });
          if (!o)
            return Error(
              "font '" +
                this.font.names.fullName.en +
                "' doesn't support feature '" +
                e.tag +
                "' for script '" +
                e.script +
                "'."
            );
          for (
            var s = this.getFeatureLookups(o), n = [].concat(t.context), a = 0;
            a < s.length;
            a++
          )
            for (
              var i = s[a], p = this.getLookupSubtables(i), u = 0;
              u < p.length;
              u++
            ) {
              var l = p[u],
                h = this.getSubstitutionType(i, l),
                c = this.getLookupMethod(i, l),
                f = void 0;
              switch (h) {
                case "11":
                  (f = c(t.current)) &&
                    n.splice(
                      r,
                      1,
                      new ts({ id: 11, tag: e.tag, substitution: f })
                    );
                  break;
                case "12":
                  (f = c(t.current)) &&
                    n.splice(
                      r,
                      1,
                      new ts({ id: 12, tag: e.tag, substitution: f })
                    );
                  break;
                case "63":
                  Array.isArray((f = c(t))) &&
                    f.length &&
                    n.splice(
                      r,
                      1,
                      new ts({ id: 63, tag: e.tag, substitution: f })
                    );
                  break;
                case "41":
                  (f = c(t)) &&
                    n.splice(
                      r,
                      1,
                      new ts({ id: 41, tag: e.tag, substitution: f })
                    );
                  break;
                case "21":
                  (f = c(t.current)) &&
                    n.splice(
                      r,
                      1,
                      new ts({ id: 21, tag: e.tag, substitution: f })
                    );
              }
              (t = new e4(n, r)), (!Array.isArray(f) || f.length) && (f = null);
            }
          return n.length ? n : null;
        }),
        (to.prototype.supports = function (e) {
          if (!e.script) return !1;
          this.getScriptFeatures(e.script);
          var t = this.features.hasOwnProperty(e.script);
          if (!e.tag) return t;
          var r = this.features[e.script].some(function (t) {
            return t.tag === e.tag;
          });
          return t && r;
        }),
        (to.prototype.getLookupSubtables = function (e) {
          return e.subtables || null;
        }),
        (to.prototype.getLookupByIndex = function (e) {
          return this.font.tables.gsub.lookups[e] || null;
        }),
        (to.prototype.getFeatureLookups = function (e) {
          return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
        }),
        (to.prototype.getFeature = function (e) {
          if (!this.font) return { FAIL: "No font was found" };
          this.features.hasOwnProperty(e.script) ||
            this.getScriptFeatures(e.script);
          var t = this.features[e.script];
          return t
            ? t.tags[e.tag]
              ? this.features[e.script].tags[e.tag]
              : null
            : { FAIL: "No feature for script " + e.script };
        });
      var tc = {
        11: function (e, t, r) {
          t[r].setState(e.tag, e.substitution);
        },
        12: function (e, t, r) {
          t[r].setState(e.tag, e.substitution);
        },
        63: function (e, t, r) {
          e.substitution.forEach(function (o, s) {
            t[r + s].setState(e.tag, o);
          });
        },
        41: function (e, t, r) {
          var o = t[r];
          o.setState(e.tag, e.substitution.ligGlyph);
          for (var s = e.substitution.components.length, n = 0; n < s; n++)
            (o = t[r + n + 1]).setState("deleted", !0);
        },
      };
      function tf(e, t, r) {
        e instanceof ts && tc[e.id] && tc[e.id](e, t, r);
      }
      function td(e) {
        var t = this,
          r = "arab",
          o = this.featuresTags[r],
          s = this.tokenizer.getRangeTokens(e);
        if (1 !== s.length) {
          var n = new e4(
              s.map(function (e) {
                return e.getState("glyphIndex");
              }),
              0
            ),
            a = new e4(
              s.map(function (e) {
                return e.char;
              }),
              0
            );
          s.forEach(function (e, i) {
            if (!tt(e.char)) {
              n.setCurrentIndex(i), a.setCurrentIndex(i);
              var p,
                u = 0;
              switch (
                ((function (e) {
                  for (
                    var t = [].concat(e.backtrack), r = t.length - 1;
                    r >= 0;
                    r--
                  ) {
                    var o = t[r],
                      s = te(o),
                      n = tt(o);
                    if (!s && !n) return !0;
                    if (s) break;
                  }
                  return !1;
                })(a) && (u |= 1),
                (function (e) {
                  if (te(e.current)) return !1;
                  for (var t = 0; t < e.lookahead.length; t++)
                    if (!tt(e.lookahead[t])) return !0;
                  return !1;
                })(a) && (u |= 2),
                u)
              ) {
                case 1:
                  p = "fina";
                  break;
                case 2:
                  p = "init";
                  break;
                case 3:
                  p = "medi";
              }
              if (-1 !== o.indexOf(p)) {
                var l = t.query.lookupFeature({
                  tag: p,
                  script: r,
                  contextParams: n,
                });
                if (l instanceof Error) return console.info(l.message);
                l.forEach(function (e, t) {
                  e instanceof ts &&
                    (tf(e, s, t), (n.context[t] = e.substitution));
                });
              }
            }
          });
        }
      }
      function tv(e, t) {
        return new e4(
          e.map(function (e) {
            return e.activeState.value;
          }),
          t || 0
        );
      }
      function tg(e) {
        var t = this,
          r = this.tokenizer.getRangeTokens(e),
          o = tv(r);
        o.context.forEach(function (e, s) {
          o.setCurrentIndex(s);
          var n = t.query.lookupFeature({
            tag: "rlig",
            script: "arab",
            contextParams: o,
          });
          n.length &&
            (n.forEach(function (e) {
              return tf(e, r, s);
            }),
            (o = tv(r)));
        });
      }
      function ty(e, t) {
        return new e4(
          e.map(function (e) {
            return e.activeState.value;
          }),
          t || 0
        );
      }
      function tm(e) {
        var t = this,
          r = this.tokenizer.getRangeTokens(e),
          o = ty(r);
        o.context.forEach(function (e, s) {
          o.setCurrentIndex(s);
          var n = t.query.lookupFeature({
            tag: "liga",
            script: "latn",
            contextParams: o,
          });
          n.length &&
            (n.forEach(function (e) {
              return tf(e, r, s);
            }),
            (o = ty(r)));
        });
      }
      function tb(e) {
        (this.baseDir = e || "ltr"),
          (this.tokenizer = new e7()),
          (this.featuresTags = {});
      }
      function tx(e) {
        var t = this.contextChecks[e + "Check"];
        return this.tokenizer.registerContextChecker(
          e,
          t.startCheck,
          t.endCheck
        );
      }
      function tS() {
        return (
          tx.call(this, "latinWord"),
          tx.call(this, "arabicWord"),
          tx.call(this, "arabicSentence"),
          this.tokenizer.tokenize(this.text)
        );
      }
      function tk() {
        var e = this;
        this.tokenizer.getContextRanges("arabicSentence").forEach(function (t) {
          var r = e.tokenizer.getRangeTokens(t);
          e.tokenizer.replaceRange(t.startIndex, t.endOffset, r.reverse());
        });
      }
      function tU() {
        if (-1 === this.tokenizer.registeredModifiers.indexOf("glyphIndex"))
          throw Error(
            "glyphIndex modifier is required to apply arabic presentation features."
          );
      }
      function tE() {
        var e = this;
        this.featuresTags.hasOwnProperty("arab") &&
          (tU.call(this),
          this.tokenizer.getContextRanges("arabicWord").forEach(function (t) {
            td.call(e, t);
          }));
      }
      function tC() {
        var e = this,
          t = "arab";
        this.featuresTags.hasOwnProperty(t) &&
          -1 !== this.featuresTags[t].indexOf("rlig") &&
          (tU.call(this),
          this.tokenizer.getContextRanges("arabicWord").forEach(function (t) {
            tg.call(e, t);
          }));
      }
      function tD() {
        var e = this,
          t = "latn";
        this.featuresTags.hasOwnProperty(t) &&
          -1 !== this.featuresTags[t].indexOf("liga") &&
          (tU.call(this),
          this.tokenizer.getContextRanges("latinWord").forEach(function (t) {
            tm.call(e, t);
          }));
      }
      function tL(e) {
        ((e = e || {}).tables = e.tables || {}),
          e.empty ||
            (et(
              e.familyName,
              "When creating a new Font object, familyName is required."
            ),
            et(
              e.styleName,
              "When creating a new Font object, styleName is required."
            ),
            et(
              e.unitsPerEm,
              "When creating a new Font object, unitsPerEm is required."
            ),
            et(
              e.ascender,
              "When creating a new Font object, ascender is required."
            ),
            et(
              e.descender <= 0,
              "When creating a new Font object, negative descender value is required."
            ),
            (this.unitsPerEm = e.unitsPerEm || 1e3),
            (this.ascender = e.ascender),
            (this.descender = e.descender),
            (this.createdTimestamp = e.createdTimestamp),
            (this.tables = Object.assign(e.tables, {
              os2: Object.assign(
                {
                  usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
                  usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
                  fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR,
                },
                e.tables.os2
              ),
            }))),
          (this.supported = !0),
          (this.glyphs = new Z.GlyphSet(this, e.glyphs || [])),
          (this.encoding = new z(this)),
          (this.position = new J(this)),
          (this.substitution = new $(this)),
          (this.tables = this.tables || {}),
          (this._push = null),
          (this._hmtxTableData = {}),
          Object.defineProperty(this, "hinting", {
            get: function () {
              return this._hinting
                ? this._hinting
                : "truetype" === this.outlinesFormat
                ? (this._hinting = new eg(this))
                : void 0;
            },
          });
      }
      (tb.prototype.setText = function (e) {
        this.text = e;
      }),
        (tb.prototype.contextChecks = {
          latinWordCheck: {
            startCheck: function (e) {
              var t = e.current,
                r = e.get(-1);
              return (null === r && tr(t)) || (!tr(r) && tr(t));
            },
            endCheck: function (e) {
              var t = e.get(1);
              return null === t || !tr(t);
            },
          },
          arabicWordCheck: {
            startCheck: function (e) {
              var t = e.current,
                r = e.get(-1);
              return (null === r && e9(t)) || (!e9(r) && e9(t));
            },
            endCheck: function (e) {
              var t = e.get(1);
              return null === t || !e9(t);
            },
          },
          arabicSentenceCheck: {
            startCheck: function (e) {
              var t = e.current,
                r = e.get(-1);
              return (e9(t) || tt(t)) && !e9(r);
            },
            endCheck: function (e) {
              var t = e.get(1);
              switch (!0) {
                case null === t:
                  return !0;
                case !e9(t) && !tt(t):
                  var r = /\s/.test(t);
                  if (
                    !r ||
                    (r &&
                      !e.lookahead.some(function (e) {
                        return e9(e) || tt(e);
                      }))
                  )
                    return !0;
                  break;
                default:
                  return !1;
              }
            },
          },
        }),
        (tb.prototype.registerFeatures = function (e, t) {
          var r = this,
            o = t.filter(function (t) {
              return r.query.supports({ script: e, tag: t });
            });
          this.featuresTags.hasOwnProperty(e)
            ? (this.featuresTags[e] = this.featuresTags[e].concat(o))
            : (this.featuresTags[e] = o);
        }),
        (tb.prototype.applyFeatures = function (e, t) {
          if (!e) throw Error("No valid font was provided to apply features");
          this.query || (this.query = new to(e));
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            this.query.supports({ script: o.script }) &&
              this.registerFeatures(o.script, o.tags);
          }
        }),
        (tb.prototype.registerModifier = function (e, t, r) {
          this.tokenizer.registerModifier(e, t, r);
        }),
        (tb.prototype.checkContextReady = function (e) {
          return !!this.tokenizer.getContext(e);
        }),
        (tb.prototype.applyFeaturesToContexts = function () {
          this.checkContextReady("arabicWord") &&
            (tE.call(this), tC.call(this)),
            this.checkContextReady("latinWord") && tD.call(this),
            this.checkContextReady("arabicSentence") && tk.call(this);
        }),
        (tb.prototype.processText = function (e) {
          (this.text && this.text === e) ||
            (this.setText(e), tS.call(this), this.applyFeaturesToContexts());
        }),
        (tb.prototype.getBidiText = function (e) {
          return this.processText(e), this.tokenizer.getText();
        }),
        (tb.prototype.getTextGlyphs = function (e) {
          this.processText(e);
          for (var t = [], r = 0; r < this.tokenizer.tokens.length; r++) {
            var o = this.tokenizer.tokens[r];
            if (!o.state.deleted) {
              var s = o.activeState.value;
              t.push(Array.isArray(s) ? s[0] : s);
            }
          }
          return t;
        }),
        (tL.prototype.hasChar = function (e) {
          return null !== this.encoding.charToGlyphIndex(e);
        }),
        (tL.prototype.charToGlyphIndex = function (e) {
          return this.encoding.charToGlyphIndex(e);
        }),
        (tL.prototype.charToGlyph = function (e) {
          var t = this.charToGlyphIndex(e),
            r = this.glyphs.get(t);
          return r || (r = this.glyphs.get(0)), r;
        }),
        (tL.prototype.updateFeatures = function (e) {
          return this.defaultRenderOptions.features.map(function (t) {
            return "latn" === t.script
              ? {
                  script: "latn",
                  tags: t.tags.filter(function (t) {
                    return e[t];
                  }),
                }
              : t;
          });
        }),
        (tL.prototype.stringToGlyphs = function (e, t) {
          var r = this,
            o = new tb();
          o.registerModifier("glyphIndex", null, function (e) {
            return r.charToGlyphIndex(e.char);
          });
          var s = t
            ? this.updateFeatures(t.features)
            : this.defaultRenderOptions.features;
          o.applyFeatures(this, s);
          for (
            var n = o.getTextGlyphs(e),
              a = n.length,
              i = Array(a),
              p = this.glyphs.get(0),
              u = 0;
            u < a;
            u += 1
          )
            i[u] = this.glyphs.get(n[u]) || p;
          return i;
        }),
        (tL.prototype.getKerningValue = function (e, t) {
          (e = e.index || e), (t = t.index || t);
          var r = this.position.defaultKerningTables;
          return r
            ? this.position.getKerningValue(r, e, t)
            : this.kerningPairs[e + "," + t] || 0;
        }),
        (tL.prototype.defaultRenderOptions = {
          kerning: !0,
          features: [
            { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
            { script: "latn", tags: ["liga", "rlig"] },
          ],
        }),
        (tL.prototype.forEachGlyph = function (e, t, r, o, s, n) {
          (t = void 0 !== t ? t : 0),
            (r = void 0 !== r ? r : 0),
            (o = void 0 !== o ? o : 72),
            (s = Object.assign({}, this.defaultRenderOptions, s));
          var a,
            i = (1 / this.unitsPerEm) * o,
            p = this.stringToGlyphs(e, s);
          if (s.kerning) {
            var u = s.script || this.position.getDefaultScriptName();
            a = this.position.getKerningTables(u, s.language);
          }
          for (var l = 0; l < p.length; l += 1) {
            var h = p[l];
            n.call(this, h, t, r, o, s),
              h.advanceWidth && (t += h.advanceWidth * i),
              s.kerning &&
                l < p.length - 1 &&
                (t +=
                  (a
                    ? this.position.getKerningValue(a, h.index, p[l + 1].index)
                    : this.getKerningValue(h, p[l + 1])) * i),
              s.letterSpacing
                ? (t += s.letterSpacing * o)
                : s.tracking && (t += (s.tracking / 1e3) * o);
          }
          return t;
        }),
        (tL.prototype.getPath = function (e, t, r, o, s) {
          var n = new B();
          return (
            this.forEachGlyph(e, t, r, o, s, function (e, t, r, o) {
              var a = e.getPath(t, r, o, s, this);
              n.extend(a);
            }),
            n
          );
        }),
        (tL.prototype.getPaths = function (e, t, r, o, s) {
          var n = [];
          return (
            this.forEachGlyph(e, t, r, o, s, function (e, t, r, o) {
              var a = e.getPath(t, r, o, s, this);
              n.push(a);
            }),
            n
          );
        }),
        (tL.prototype.getAdvanceWidth = function (e, t, r) {
          return this.forEachGlyph(e, 0, 0, t, r, function () {});
        }),
        (tL.prototype.fsSelectionValues = {
          ITALIC: 1,
          UNDERSCORE: 2,
          NEGATIVE: 4,
          OUTLINED: 8,
          STRIKEOUT: 16,
          BOLD: 32,
          REGULAR: 64,
          USER_TYPO_METRICS: 128,
          WWS: 256,
          OBLIQUE: 512,
        }),
        (tL.prototype.usWidthClasses = {
          ULTRA_CONDENSED: 1,
          EXTRA_CONDENSED: 2,
          CONDENSED: 3,
          SEMI_CONDENSED: 4,
          MEDIUM: 5,
          SEMI_EXPANDED: 6,
          EXPANDED: 7,
          EXTRA_EXPANDED: 8,
          ULTRA_EXPANDED: 9,
        }),
        (tL.prototype.usWeightClasses = {
          THIN: 100,
          EXTRA_LIGHT: 200,
          LIGHT: 300,
          NORMAL: 400,
          MEDIUM: 500,
          SEMI_BOLD: 600,
          BOLD: 700,
          EXTRA_BOLD: 800,
          BLACK: 900,
        });
      var tT = {
        parse: function (e, t) {
          var r = {};
          (r.version = eu.getUShort(e, t)),
            q.argument(0 === r.version, "cmap table version should be 0."),
            (r.numTables = eu.getUShort(e, t + 2));
          for (var o = -1, s = r.numTables - 1; s >= 0; s -= 1) {
            var n = eu.getUShort(e, t + 4 + 8 * s),
              a = eu.getUShort(e, t + 4 + 8 * s + 2);
            if (
              (3 === n && (0 === a || 1 === a || 10 === a)) ||
              (0 === n && (0 === a || 1 === a || 2 === a || 3 === a || 4 === a))
            ) {
              o = eu.getULong(e, t + 4 + 8 * s + 4);
              break;
            }
          }
          if (-1 === o) throw Error("No valid cmap sub-tables found.");
          var i = new eu.Parser(e, t + o);
          if (((r.format = i.parseUShort()), 12 === r.format))
            !(function (e, t) {
              t.parseUShort(),
                (e.length = t.parseULong()),
                (e.language = t.parseULong()),
                (e.groupCount = r = t.parseULong()),
                (e.glyphIndexMap = {});
              for (var r, o = 0; o < r; o += 1)
                for (
                  var s = t.parseULong(),
                    n = t.parseULong(),
                    a = t.parseULong(),
                    i = s;
                  i <= n;
                  i += 1
                )
                  (e.glyphIndexMap[i] = a), a++;
            })(r, i);
          else if (4 === r.format)
            !(function (e, t, r, o, s) {
              (e.length = t.parseUShort()),
                (e.language = t.parseUShort()),
                (e.segCount = n = t.parseUShort() >> 1),
                t.skip("uShort", 3),
                (e.glyphIndexMap = {});
              for (
                var n,
                  a = new eu.Parser(r, o + s + 14),
                  i = new eu.Parser(r, o + s + 16 + 2 * n),
                  p = new eu.Parser(r, o + s + 16 + 4 * n),
                  u = new eu.Parser(r, o + s + 16 + 6 * n),
                  l = o + s + 16 + 8 * n,
                  h = 0;
                h < n - 1;
                h += 1
              )
                for (
                  var c = void 0,
                    f = a.parseUShort(),
                    d = i.parseUShort(),
                    v = p.parseShort(),
                    g = u.parseUShort(),
                    y = d;
                  y <= f;
                  y += 1
                )
                  0 !== g
                    ? ((l = u.offset + u.relativeOffset - 2 + g + (y - d) * 2),
                      0 !== (c = eu.getUShort(r, l)) && (c = (c + v) & 65535))
                    : (c = (y + v) & 65535),
                    (e.glyphIndexMap[y] = c);
            })(r, i, e, t, o);
          else
            throw Error(
              "Only format 4 and 12 cmap tables are supported (found format " +
                r.format +
                ")."
            );
          return r;
        },
      };
      function tw(e) {
        return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
      }
      function tP(e, t, r) {
        var o,
          s,
          n = [],
          a = [],
          i = eu.getCard16(e, t);
        if (0 !== i) {
          var p = eu.getByte(e, t + 2);
          o = t + (i + 1) * p + 2;
          for (var u = t + 3, l = 0; l < i + 1; l += 1)
            n.push(eu.getOffset(e, u, p)), (u += p);
          s = o + n[i];
        } else s = t + 2;
        for (var h = 0; h < n.length - 1; h += 1) {
          var c = eu.getBytes(e, o + n[h], o + n[h + 1]);
          r && (c = r(c)), a.push(c);
        }
        return { objects: a, startOffset: t, endOffset: s };
      }
      function tO(e, t, r) {
        t = void 0 !== t ? t : 0;
        var o = new eu.Parser(e, t),
          s = [],
          n = [];
        for (r = void 0 !== r ? r : e.length; o.relativeOffset < r; ) {
          var a = o.parseByte();
          a <= 21
            ? (12 === a && (a = 1200 + o.parseByte()), s.push([a, n]), (n = []))
            : n.push(
                (function (e, t) {
                  var r, o;
                  if (28 === t)
                    return ((r = e.parseByte()) << 8) | (o = e.parseByte());
                  if (29 === t)
                    return (
                      (r = e.parseByte()),
                      (r << 24) |
                        ((o = e.parseByte()) << 16) |
                        (e.parseByte() << 8) |
                        e.parseByte()
                    );
                  if (30 === t)
                    return (function (e) {
                      for (
                        var t = "",
                          r = [
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            ".",
                            "E",
                            "E-",
                            null,
                            "-",
                          ];
                        ;

                      ) {
                        var o = e.parseByte(),
                          s = o >> 4,
                          n = 15 & o;
                        if (15 === s || ((t += r[s]), 15 === n)) break;
                        t += r[n];
                      }
                      return parseFloat(t);
                    })(e);
                  if (t >= 32 && t <= 246) return t - 139;
                  if (t >= 247 && t <= 250)
                    return (t - 247) * 256 + (r = e.parseByte()) + 108;
                  if (t >= 251 && t <= 254)
                    return -(256 * (t - 251)) - (r = e.parseByte()) - 108;
                  throw Error("Invalid b0 " + t);
                })(o, a)
              );
        }
        return (function (e) {
          for (var t = {}, r = 0; r < e.length; r += 1) {
            var o = e[r][0],
              s = e[r][1],
              n = void 0;
            if (
              ((n = 1 === s.length ? s[0] : s),
              t.hasOwnProperty(o) && !isNaN(t[o]))
            )
              throw Error("Object " + t + " already has key " + o);
            t[o] = n;
          }
          return t;
        })(s);
      }
      function tF(e, t) {
        return (t = t <= 390 ? M[t] : e[t - 391]);
      }
      function tG(e, t, r) {
        for (var o, s = {}, n = 0; n < t.length; n += 1) {
          var a = t[n];
          if (Array.isArray(a.type)) {
            var i = [];
            i.length = a.type.length;
            for (var p = 0; p < a.type.length; p++)
              void 0 === (o = void 0 !== e[a.op] ? e[a.op][p] : void 0) &&
                (o =
                  void 0 !== a.value && void 0 !== a.value[p]
                    ? a.value[p]
                    : null),
                "SID" === a.type[p] && (o = tF(r, o)),
                (i[p] = o);
            s[a.name] = i;
          } else
            void 0 === (o = e[a.op]) &&
              (o = void 0 !== a.value ? a.value : null),
              "SID" === a.type && (o = tF(r, o)),
              (s[a.name] = o);
        }
        return s;
      }
      var tI = [
          { name: "version", op: 0, type: "SID" },
          { name: "notice", op: 1, type: "SID" },
          { name: "copyright", op: 1200, type: "SID" },
          { name: "fullName", op: 2, type: "SID" },
          { name: "familyName", op: 3, type: "SID" },
          { name: "weight", op: 4, type: "SID" },
          { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
          { name: "italicAngle", op: 1202, type: "number", value: 0 },
          { name: "underlinePosition", op: 1203, type: "number", value: -100 },
          { name: "underlineThickness", op: 1204, type: "number", value: 50 },
          { name: "paintType", op: 1205, type: "number", value: 0 },
          { name: "charstringType", op: 1206, type: "number", value: 2 },
          {
            name: "fontMatrix",
            op: 1207,
            type: ["real", "real", "real", "real", "real", "real"],
            value: [0.001, 0, 0, 0.001, 0, 0],
          },
          { name: "uniqueId", op: 13, type: "number" },
          {
            name: "fontBBox",
            op: 5,
            type: ["number", "number", "number", "number"],
            value: [0, 0, 0, 0],
          },
          { name: "strokeWidth", op: 1208, type: "number", value: 0 },
          { name: "xuid", op: 14, type: [], value: null },
          { name: "charset", op: 15, type: "offset", value: 0 },
          { name: "encoding", op: 16, type: "offset", value: 0 },
          { name: "charStrings", op: 17, type: "offset", value: 0 },
          {
            name: "private",
            op: 18,
            type: ["number", "offset"],
            value: [0, 0],
          },
          { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
          { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
          { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
          { name: "cidFontType", op: 1233, type: "number", value: 0 },
          { name: "cidCount", op: 1234, type: "number", value: 8720 },
          { name: "uidBase", op: 1235, type: "number" },
          { name: "fdArray", op: 1236, type: "offset" },
          { name: "fdSelect", op: 1237, type: "offset" },
          { name: "fontName", op: 1238, type: "SID" },
        ],
        tB = [
          { name: "subrs", op: 19, type: "offset", value: 0 },
          { name: "defaultWidthX", op: 20, type: "number", value: 0 },
          { name: "nominalWidthX", op: 21, type: "number", value: 0 },
        ];
      function tM(e, t, r, o) {
        for (var s = [], n = 0; n < r.length; n += 1) {
          var a = tG(
            tO(
              (u = new DataView(new Uint8Array(r[n]).buffer)),
              0,
              u.byteLength
            ),
            tI,
            o
          );
          (a._subrs = []),
            (a._subrsBias = 0),
            (a._defaultWidthX = 0),
            (a._nominalWidthX = 0);
          var i = a.private[0],
            p = a.private[1];
          if (0 !== i && 0 !== p) {
            var u,
              l = tG(tO(e, p + t, i), tB, o);
            if (
              ((a._defaultWidthX = l.defaultWidthX),
              (a._nominalWidthX = l.nominalWidthX),
              0 !== l.subrs)
            ) {
              var h = tP(e, p + l.subrs + t);
              (a._subrs = h.objects), (a._subrsBias = tw(a._subrs));
            }
            a._privateDict = l;
          }
          s.push(a);
        }
        return s;
      }
      function tR(e, t, r) {
        var o,
          s,
          n,
          a,
          i,
          p,
          u,
          l,
          h = new B(),
          c = [],
          f = 0,
          d = !1,
          v = !1,
          g = 0,
          y = 0;
        if (e.isCIDFont) {
          var m = e.tables.cff.topDict._fdSelect[t.index],
            b = e.tables.cff.topDict._fdArray[m];
          (i = b._subrs),
            (p = b._subrsBias),
            (u = b._defaultWidthX),
            (l = b._nominalWidthX);
        } else
          (i = e.tables.cff.topDict._subrs),
            (p = e.tables.cff.topDict._subrsBias),
            (u = e.tables.cff.topDict._defaultWidthX),
            (l = e.tables.cff.topDict._nominalWidthX);
        var x = u;
        function S(e, t) {
          v && h.closePath(), h.moveTo(e, t), (v = !0);
        }
        function k() {
          c.length % 2 == 0 || d || (x = c.shift() + l),
            (f += c.length >> 1),
            (c.length = 0),
            (d = !0);
        }
        return (
          !(function r(u) {
            for (
              var m, b, U, E, C, D, L, T, w, P, O, F, G = 0;
              G < u.length;

            ) {
              var I = u[G];
              switch (((G += 1), I)) {
                case 1:
                case 3:
                case 18:
                case 23:
                  k();
                  break;
                case 4:
                  c.length > 1 && !d && ((x = c.shift() + l), (d = !0)),
                    (y += c.pop()),
                    S(g, y);
                  break;
                case 5:
                  for (; c.length > 0; )
                    (g += c.shift()), (y += c.shift()), h.lineTo(g, y);
                  break;
                case 6:
                  for (
                    ;
                    c.length > 0 &&
                    ((g += c.shift()), h.lineTo(g, y), 0 !== c.length);

                  )
                    (y += c.shift()), h.lineTo(g, y);
                  break;
                case 7:
                  for (
                    ;
                    c.length > 0 &&
                    ((y += c.shift()), h.lineTo(g, y), 0 !== c.length);

                  )
                    (g += c.shift()), h.lineTo(g, y);
                  break;
                case 8:
                  for (; c.length > 0; )
                    (o = g + c.shift()),
                      (s = y + c.shift()),
                      (n = o + c.shift()),
                      (a = s + c.shift()),
                      (g = n + c.shift()),
                      (y = a + c.shift()),
                      h.curveTo(o, s, n, a, g, y);
                  break;
                case 10:
                  (D = i[(C = c.pop() + p)]) && r(D);
                  break;
                case 11:
                  return;
                case 12:
                  switch (((I = u[G]), (G += 1), I)) {
                    case 35:
                      (o = g + c.shift()),
                        (s = y + c.shift()),
                        (n = o + c.shift()),
                        (a = s + c.shift()),
                        (L = n + c.shift()),
                        (T = a + c.shift()),
                        (w = L + c.shift()),
                        (P = T + c.shift()),
                        (O = w + c.shift()),
                        (F = P + c.shift()),
                        (g = O + c.shift()),
                        (y = F + c.shift()),
                        c.shift(),
                        h.curveTo(o, s, n, a, L, T),
                        h.curveTo(w, P, O, F, g, y);
                      break;
                    case 34:
                      (o = g + c.shift()),
                        (s = y),
                        (n = o + c.shift()),
                        (a = s + c.shift()),
                        (L = n + c.shift()),
                        (T = a),
                        (w = L + c.shift()),
                        (P = a),
                        (O = w + c.shift()),
                        (F = y),
                        (g = O + c.shift()),
                        h.curveTo(o, s, n, a, L, T),
                        h.curveTo(w, P, O, F, g, y);
                      break;
                    case 36:
                      (o = g + c.shift()),
                        (s = y + c.shift()),
                        (n = o + c.shift()),
                        (a = s + c.shift()),
                        (L = n + c.shift()),
                        (T = a),
                        (w = L + c.shift()),
                        (P = a),
                        (O = w + c.shift()),
                        (F = P + c.shift()),
                        (g = O + c.shift()),
                        h.curveTo(o, s, n, a, L, T),
                        h.curveTo(w, P, O, F, g, y);
                      break;
                    case 37:
                      (o = g + c.shift()),
                        (s = y + c.shift()),
                        (n = o + c.shift()),
                        (a = s + c.shift()),
                        (L = n + c.shift()),
                        (T = a + c.shift()),
                        (w = L + c.shift()),
                        (P = T + c.shift()),
                        (O = w + c.shift()),
                        (F = P + c.shift()),
                        Math.abs(O - g) > Math.abs(F - y)
                          ? (g = O + c.shift())
                          : (y = F + c.shift()),
                        h.curveTo(o, s, n, a, L, T),
                        h.curveTo(w, P, O, F, g, y);
                      break;
                    default:
                      console.log(
                        "Glyph " + t.index + ": unknown operator 1200" + I
                      ),
                        (c.length = 0);
                  }
                  break;
                case 14:
                  c.length > 0 && !d && ((x = c.shift() + l), (d = !0)),
                    v && (h.closePath(), (v = !1));
                  break;
                case 19:
                case 20:
                  k(), (G += (f + 7) >> 3);
                  break;
                case 21:
                  c.length > 2 && !d && ((x = c.shift() + l), (d = !0)),
                    (y += c.pop()),
                    S((g += c.pop()), y);
                  break;
                case 22:
                  c.length > 1 && !d && ((x = c.shift() + l), (d = !0)),
                    S((g += c.pop()), y);
                  break;
                case 24:
                  for (; c.length > 2; )
                    (o = g + c.shift()),
                      (s = y + c.shift()),
                      (n = o + c.shift()),
                      (a = s + c.shift()),
                      (g = n + c.shift()),
                      (y = a + c.shift()),
                      h.curveTo(o, s, n, a, g, y);
                  (g += c.shift()), (y += c.shift()), h.lineTo(g, y);
                  break;
                case 25:
                  for (; c.length > 6; )
                    (g += c.shift()), (y += c.shift()), h.lineTo(g, y);
                  (o = g + c.shift()),
                    (s = y + c.shift()),
                    (n = o + c.shift()),
                    (a = s + c.shift()),
                    (g = n + c.shift()),
                    (y = a + c.shift()),
                    h.curveTo(o, s, n, a, g, y);
                  break;
                case 26:
                  for (c.length % 2 && (g += c.shift()); c.length > 0; )
                    (o = g),
                      (s = y + c.shift()),
                      (n = o + c.shift()),
                      (a = s + c.shift()),
                      (g = n),
                      (y = a + c.shift()),
                      h.curveTo(o, s, n, a, g, y);
                  break;
                case 27:
                  for (c.length % 2 && (y += c.shift()); c.length > 0; )
                    (o = g + c.shift()),
                      (s = y),
                      (n = o + c.shift()),
                      (a = s + c.shift()),
                      (g = n + c.shift()),
                      (y = a),
                      h.curveTo(o, s, n, a, g, y);
                  break;
                case 28:
                  (m = u[G]),
                    (b = u[G + 1]),
                    c.push(((m << 24) | (b << 16)) >> 16),
                    (G += 2);
                  break;
                case 29:
                  (C = c.pop() + e.gsubrsBias), (D = e.gsubrs[C]) && r(D);
                  break;
                case 30:
                  for (
                    ;
                    c.length > 0 &&
                    ((o = g),
                    (s = y + c.shift()),
                    (n = o + c.shift()),
                    (a = s + c.shift()),
                    (g = n + c.shift()),
                    (y = a + (1 === c.length ? c.shift() : 0)),
                    h.curveTo(o, s, n, a, g, y),
                    0 !== c.length);

                  )
                    (o = g + c.shift()),
                      (s = y),
                      (n = o + c.shift()),
                      (y = (a = s + c.shift()) + c.shift()),
                      (g = n + (1 === c.length ? c.shift() : 0)),
                      h.curveTo(o, s, n, a, g, y);
                  break;
                case 31:
                  for (
                    ;
                    c.length > 0 &&
                    ((o = g + c.shift()),
                    (s = y),
                    (n = o + c.shift()),
                    (y = (a = s + c.shift()) + c.shift()),
                    (g = n + (1 === c.length ? c.shift() : 0)),
                    h.curveTo(o, s, n, a, g, y),
                    0 !== c.length);

                  )
                    (o = g),
                      (s = y + c.shift()),
                      (n = o + c.shift()),
                      (a = s + c.shift()),
                      (g = n + c.shift()),
                      (y = a + (1 === c.length ? c.shift() : 0)),
                      h.curveTo(o, s, n, a, g, y);
                  break;
                default:
                  I < 32
                    ? console.log(
                        "Glyph " + t.index + ": unknown operator " + I
                      )
                    : I < 247
                    ? c.push(I - 139)
                    : I < 251
                    ? ((m = u[G]), (G += 1), c.push((I - 247) * 256 + m + 108))
                    : I < 255
                    ? ((m = u[G]),
                      (G += 1),
                      c.push(-(256 * (I - 251)) - m - 108))
                    : ((m = u[G]),
                      (b = u[G + 1]),
                      (U = u[G + 2]),
                      (E = u[G + 3]),
                      (G += 4),
                      c.push(((m << 24) | (b << 16) | (U << 8) | E) / 65536));
              }
            }
          })(r),
          (t.advanceWidth = x),
          h
        );
      }
      var tA = {
          parse: function (e, t, r, o) {
            r.tables.cff = {};
            var s,
              n,
              a,
              i,
              p =
                (((a = {}).formatMajor = eu.getCard8(e, t)),
                (a.formatMinor = eu.getCard8(e, t + 1)),
                (a.size = eu.getCard8(e, t + 2)),
                (a.offsetSize = eu.getCard8(e, t + 3)),
                (a.startOffset = t),
                (a.endOffset = t + 4),
                a),
              u = tP(e, p.endOffset, eu.bytesToString),
              l = tP(e, u.endOffset),
              h = tP(e, l.endOffset, eu.bytesToString),
              c = tP(e, h.endOffset);
            (r.gsubrs = c.objects), (r.gsubrsBias = tw(r.gsubrs));
            var f = tM(e, t, l.objects, h.objects);
            if (1 !== f.length)
              throw Error(
                "CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " +
                  f.length
              );
            var d = f[0];
            if (
              ((r.tables.cff.topDict = d),
              d._privateDict &&
                ((r.defaultWidthX = d._privateDict.defaultWidthX),
                (r.nominalWidthX = d._privateDict.nominalWidthX)),
              void 0 !== d.ros[0] && void 0 !== d.ros[1] && (r.isCIDFont = !0),
              r.isCIDFont)
            ) {
              var v = d.fdArray,
                g = d.fdSelect;
              if (0 === v || 0 === g)
                throw Error(
                  "Font is marked as a CID font, but FDArray and/or FDSelect information is missing"
                );
              var y = tP(e, (v += t)),
                m = tM(e, t, y.objects, h.objects);
              (d._fdArray = m),
                (g += t),
                (d._fdSelect = (function (e, t, r, o) {
                  var s = [],
                    n = new eu.Parser(e, t),
                    a = n.parseCard8();
                  if (0 === a)
                    for (var i = 0; i < r; i++) {
                      if ((p = n.parseCard8()) >= o)
                        throw Error(
                          "CFF table CID Font FDSelect has bad FD index value " +
                            p +
                            " (FD count " +
                            o +
                            ")"
                        );
                      s.push(p);
                    }
                  else if (3 === a) {
                    var p,
                      u,
                      l = n.parseCard16(),
                      h = n.parseCard16();
                    if (0 !== h)
                      throw Error(
                        "CFF Table CID Font FDSelect format 3 range has bad initial GID " +
                          h
                      );
                    for (var c = 0; c < l; c++) {
                      if (((p = n.parseCard8()), (u = n.parseCard16()), p >= o))
                        throw Error(
                          "CFF table CID Font FDSelect has bad FD index value " +
                            p +
                            " (FD count " +
                            o +
                            ")"
                        );
                      if (u > r)
                        throw Error(
                          "CFF Table CID Font FDSelect format 3 range has bad GID " +
                            u
                        );
                      for (; h < u; h++) s.push(p);
                      h = u;
                    }
                    if (u !== r)
                      throw Error(
                        "CFF Table CID Font FDSelect format 3 range has bad final GID " +
                          u
                      );
                  } else
                    throw Error(
                      "CFF Table CID Font FDSelect table has unsupported format " +
                        a
                    );
                  return s;
                })(e, g, r.numGlyphs, m.length));
            }
            var b = t + d.private[1],
              x = ((s = d.private[0]), (n = h.objects), tG(tO(e, b, s), tB, n));
            if (
              ((r.defaultWidthX = x.defaultWidthX),
              (r.nominalWidthX = x.nominalWidthX),
              0 !== x.subrs)
            ) {
              var S = tP(e, b + x.subrs);
              (r.subrs = S.objects), (r.subrsBias = tw(r.subrs));
            } else (r.subrs = []), (r.subrsBias = 0);
            o.lowMemory
              ? ((i = (function (e, t) {
                  var r,
                    o,
                    s = [],
                    n = eu.getCard16(e, t);
                  if (0 !== n) {
                    var a = eu.getByte(e, t + 2);
                    r = t + (n + 1) * a + 2;
                    for (var i = t + 3, p = 0; p < n + 1; p += 1)
                      s.push(eu.getOffset(e, i, a)), (i += a);
                    o = r + s[n];
                  } else o = t + 2;
                  return { offsets: s, startOffset: t, endOffset: o };
                })(e, t + d.charStrings)),
                (r.nGlyphs = i.offsets.length))
              : ((i = tP(e, t + d.charStrings)),
                (r.nGlyphs = i.objects.length));
            var k = (function (e, t, r, o) {
              var s,
                n,
                a = new eu.Parser(e, t);
              r -= 1;
              var i = [".notdef"],
                p = a.parseCard8();
              if (0 === p)
                for (var u = 0; u < r; u += 1)
                  (s = a.parseSID()), i.push(tF(o, s));
              else if (1 === p)
                for (; i.length <= r; ) {
                  (s = a.parseSID()), (n = a.parseCard8());
                  for (var l = 0; l <= n; l += 1) i.push(tF(o, s)), (s += 1);
                }
              else if (2 === p)
                for (; i.length <= r; ) {
                  (s = a.parseSID()), (n = a.parseCard16());
                  for (var h = 0; h <= n; h += 1) i.push(tF(o, s)), (s += 1);
                }
              else throw Error("Unknown charset format " + p);
              return i;
            })(e, t + d.charset, r.nGlyphs, h.objects);
            if (
              (0 === d.encoding
                ? (r.cffEncoding = new _(R, k))
                : 1 === d.encoding
                ? (r.cffEncoding = new _(A, k))
                : (r.cffEncoding = (function (e, t, r) {
                    var o,
                      s = {},
                      n = new eu.Parser(e, t),
                      a = n.parseCard8();
                    if (0 === a)
                      for (var i = n.parseCard8(), p = 0; p < i; p += 1)
                        s[(o = n.parseCard8())] = p;
                    else if (1 === a) {
                      var u = n.parseCard8();
                      o = 1;
                      for (var l = 0; l < u; l += 1)
                        for (
                          var h = n.parseCard8(), c = n.parseCard8(), f = h;
                          f <= h + c;
                          f += 1
                        )
                          (s[f] = o), (o += 1);
                    } else throw Error("Unknown encoding format " + a);
                    return new _(s, r);
                  })(e, t + d.encoding, k)),
              (r.encoding = r.encoding || r.cffEncoding),
              (r.glyphs = new Z.GlyphSet(r)),
              o.lowMemory)
            )
              r._push = function (o) {
                var s = (function (e, t, r, o, s) {
                  var n = eu.getCard16(r, o),
                    a = 0;
                  if (0 !== n) {
                    var i = eu.getByte(r, o + 2);
                    a = o + (n + 1) * i + 2;
                  }
                  return eu.getBytes(r, a + t[e], a + t[e + 1]);
                })(o, i.offsets, e, t + d.charStrings);
                r.glyphs.push(o, Z.cffGlyphLoader(r, o, tR, s));
              };
            else
              for (var U = 0; U < r.nGlyphs; U += 1) {
                var E = i.objects[U];
                r.glyphs.push(U, Z.cffGlyphLoader(r, U, tR, E));
              }
          },
        },
        tz = {
          parse: function (e, t, r) {
            var o = new eu.Parser(e, t),
              s = o.parseULong();
            q.argument(65536 === s, "Unsupported fvar table version.");
            var n = o.parseOffset16();
            o.skip("uShort", 1);
            for (
              var a = o.parseUShort(),
                i = o.parseUShort(),
                p = o.parseUShort(),
                u = o.parseUShort(),
                l = [],
                h = 0;
              h < a;
              h++
            )
              l.push(
                (function (e, t, r) {
                  var o = {},
                    s = new eu.Parser(e, t);
                  return (
                    (o.tag = s.parseTag()),
                    (o.minValue = s.parseFixed()),
                    (o.defaultValue = s.parseFixed()),
                    (o.maxValue = s.parseFixed()),
                    s.skip("uShort", 1),
                    (o.name = r[s.parseUShort()] || {}),
                    o
                  );
                })(e, t + n + h * i, r)
              );
            for (var c = [], f = t + n + a * i, d = 0; d < p; d++)
              c.push(
                (function (e, t, r, o) {
                  var s = {},
                    n = new eu.Parser(e, t);
                  (s.name = o[n.parseUShort()] || {}),
                    n.skip("uShort", 1),
                    (s.coordinates = {});
                  for (var a = 0; a < r.length; ++a)
                    s.coordinates[r[a].tag] = n.parseFixed();
                  return s;
                })(e, f + d * u, l, r)
              );
            return { axes: l, instances: c };
          },
        },
        tN = function () {
          return {
            coverage: this.parsePointer(ei.coverage),
            attachPoints: this.parseList(ei.pointer(ei.uShortList)),
          };
        },
        t_ = function () {
          var e = this.parseUShort();
          return (q.argument(
            1 === e || 2 === e || 3 === e,
            "Unsupported CaretValue table version."
          ),
          1 === e)
            ? { coordinate: this.parseShort() }
            : 2 === e
            ? { pointindex: this.parseShort() }
            : 3 === e
            ? { coordinate: this.parseShort() }
            : void 0;
        },
        tW = function () {
          return this.parseList(ei.pointer(t_));
        },
        tq = function () {
          return {
            coverage: this.parsePointer(ei.coverage),
            ligGlyphs: this.parseList(ei.pointer(tW)),
          };
        },
        tV = function () {
          return this.parseUShort(), this.parseList(ei.pointer(ei.coverage));
        },
        tX = {
          parse: function (e, t) {
            var r = new ei(e, (t = t || 0)),
              o = r.parseVersion(1);
            q.argument(
              1 === o || 1.2 === o || 1.3 === o,
              "Unsupported GDEF table version."
            );
            var s = {
              version: o,
              classDef: r.parsePointer(ei.classDef),
              attachList: r.parsePointer(tN),
              ligCaretList: r.parsePointer(tq),
              markAttachClassDef: r.parsePointer(ei.classDef),
            };
            return o >= 1.2 && (s.markGlyphSets = r.parsePointer(tV)), s;
          },
        },
        tj = Array(10);
      (tj[1] = function () {
        var e = this.offset + this.relativeOffset,
          t = this.parseUShort();
        return 1 === t
          ? {
              posFormat: 1,
              coverage: this.parsePointer(ei.coverage),
              value: this.parseValueRecord(),
            }
          : 2 === t
          ? {
              posFormat: 2,
              coverage: this.parsePointer(ei.coverage),
              values: this.parseValueRecordList(),
            }
          : void q.assert(
              !1,
              "0x" +
                e.toString(16) +
                ": GPOS lookup type 1 format must be 1 or 2."
            );
      }),
        (tj[2] = function () {
          var e = this.offset + this.relativeOffset,
            t = this.parseUShort();
          q.assert(
            1 === t || 2 === t,
            "0x" +
              e.toString(16) +
              ": GPOS lookup type 2 format must be 1 or 2."
          );
          var r = this.parsePointer(ei.coverage),
            o = this.parseUShort(),
            s = this.parseUShort();
          if (1 === t)
            return {
              posFormat: t,
              coverage: r,
              valueFormat1: o,
              valueFormat2: s,
              pairSets: this.parseList(
                ei.pointer(
                  ei.list(function () {
                    return {
                      secondGlyph: this.parseUShort(),
                      value1: this.parseValueRecord(o),
                      value2: this.parseValueRecord(s),
                    };
                  })
                )
              ),
            };
          if (2 === t) {
            var n = this.parsePointer(ei.classDef),
              a = this.parsePointer(ei.classDef),
              i = this.parseUShort(),
              p = this.parseUShort();
            return {
              posFormat: t,
              coverage: r,
              valueFormat1: o,
              valueFormat2: s,
              classDef1: n,
              classDef2: a,
              class1Count: i,
              class2Count: p,
              classRecords: this.parseList(
                i,
                ei.list(p, function () {
                  return {
                    value1: this.parseValueRecord(o),
                    value2: this.parseValueRecord(s),
                  };
                })
              ),
            };
          }
        }),
        (tj[3] = function () {
          return { error: "GPOS Lookup 3 not supported" };
        }),
        (tj[4] = function () {
          return { error: "GPOS Lookup 4 not supported" };
        }),
        (tj[5] = function () {
          return { error: "GPOS Lookup 5 not supported" };
        }),
        (tj[6] = function () {
          return { error: "GPOS Lookup 6 not supported" };
        }),
        (tj[7] = function () {
          return { error: "GPOS Lookup 7 not supported" };
        }),
        (tj[8] = function () {
          return { error: "GPOS Lookup 8 not supported" };
        }),
        (tj[9] = function () {
          return { error: "GPOS Lookup 9 not supported" };
        });
      var tZ = {
          parse: function (e, t) {
            var r = new ei(e, (t = t || 0)),
              o = r.parseVersion(1);
            return (q.argument(
              1 === o || 1.1 === o,
              "Unsupported GPOS table version " + o
            ),
            1 === o)
              ? {
                  version: o,
                  scripts: r.parseScriptList(),
                  features: r.parseFeatureList(),
                  lookups: r.parseLookupList(tj),
                }
              : {
                  version: o,
                  scripts: r.parseScriptList(),
                  features: r.parseFeatureList(),
                  lookups: r.parseLookupList(tj),
                  variations: r.parseFeatureVariationsList(),
                };
          },
        },
        tH = Array(9);
      (tH[1] = function () {
        var e = this.offset + this.relativeOffset,
          t = this.parseUShort();
        return 1 === t
          ? {
              substFormat: 1,
              coverage: this.parsePointer(ei.coverage),
              deltaGlyphId: this.parseUShort(),
            }
          : 2 === t
          ? {
              substFormat: 2,
              coverage: this.parsePointer(ei.coverage),
              substitute: this.parseOffset16List(),
            }
          : void q.assert(
              !1,
              "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2."
            );
      }),
        (tH[2] = function () {
          var e = this.parseUShort();
          return (
            q.argument(
              1 === e,
              "GSUB Multiple Substitution Subtable identifier-format must be 1"
            ),
            {
              substFormat: e,
              coverage: this.parsePointer(ei.coverage),
              sequences: this.parseListOfLists(),
            }
          );
        }),
        (tH[3] = function () {
          var e = this.parseUShort();
          return (
            q.argument(
              1 === e,
              "GSUB Alternate Substitution Subtable identifier-format must be 1"
            ),
            {
              substFormat: e,
              coverage: this.parsePointer(ei.coverage),
              alternateSets: this.parseListOfLists(),
            }
          );
        }),
        (tH[4] = function () {
          var e = this.parseUShort();
          return (
            q.argument(
              1 === e,
              "GSUB ligature table identifier-format must be 1"
            ),
            {
              substFormat: e,
              coverage: this.parsePointer(ei.coverage),
              ligatureSets: this.parseListOfLists(function () {
                return {
                  ligGlyph: this.parseUShort(),
                  components: this.parseUShortList(this.parseUShort() - 1),
                };
              }),
            }
          );
        });
      var tY = { sequenceIndex: ei.uShort, lookupListIndex: ei.uShort };
      (tH[5] = function () {
        var e = this.offset + this.relativeOffset,
          t = this.parseUShort();
        if (1 === t)
          return {
            substFormat: t,
            coverage: this.parsePointer(ei.coverage),
            ruleSets: this.parseListOfLists(function () {
              var e = this.parseUShort(),
                t = this.parseUShort();
              return {
                input: this.parseUShortList(e - 1),
                lookupRecords: this.parseRecordList(t, tY),
              };
            }),
          };
        if (2 === t)
          return {
            substFormat: t,
            coverage: this.parsePointer(ei.coverage),
            classDef: this.parsePointer(ei.classDef),
            classSets: this.parseListOfLists(function () {
              var e = this.parseUShort(),
                t = this.parseUShort();
              return {
                classes: this.parseUShortList(e - 1),
                lookupRecords: this.parseRecordList(t, tY),
              };
            }),
          };
        if (3 === t) {
          var r = this.parseUShort(),
            o = this.parseUShort();
          return {
            substFormat: t,
            coverages: this.parseList(r, ei.pointer(ei.coverage)),
            lookupRecords: this.parseRecordList(o, tY),
          };
        }
        q.assert(
          !1,
          "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3."
        );
      }),
        (tH[6] = function () {
          var e = this.offset + this.relativeOffset,
            t = this.parseUShort();
          return 1 === t
            ? {
                substFormat: 1,
                coverage: this.parsePointer(ei.coverage),
                chainRuleSets: this.parseListOfLists(function () {
                  return {
                    backtrack: this.parseUShortList(),
                    input: this.parseUShortList(this.parseShort() - 1),
                    lookahead: this.parseUShortList(),
                    lookupRecords: this.parseRecordList(tY),
                  };
                }),
              }
            : 2 === t
            ? {
                substFormat: 2,
                coverage: this.parsePointer(ei.coverage),
                backtrackClassDef: this.parsePointer(ei.classDef),
                inputClassDef: this.parsePointer(ei.classDef),
                lookaheadClassDef: this.parsePointer(ei.classDef),
                chainClassSet: this.parseListOfLists(function () {
                  return {
                    backtrack: this.parseUShortList(),
                    input: this.parseUShortList(this.parseShort() - 1),
                    lookahead: this.parseUShortList(),
                    lookupRecords: this.parseRecordList(tY),
                  };
                }),
              }
            : 3 === t
            ? {
                substFormat: 3,
                backtrackCoverage: this.parseList(ei.pointer(ei.coverage)),
                inputCoverage: this.parseList(ei.pointer(ei.coverage)),
                lookaheadCoverage: this.parseList(ei.pointer(ei.coverage)),
                lookupRecords: this.parseRecordList(tY),
              }
            : void q.assert(
                !1,
                "0x" +
                  e.toString(16) +
                  ": lookup type 6 format must be 1, 2 or 3."
              );
        }),
        (tH[7] = function () {
          var e = this.parseUShort();
          q.argument(
            1 === e,
            "GSUB Extension Substitution subtable identifier-format must be 1"
          );
          var t = this.parseUShort(),
            r = new ei(this.data, this.offset + this.parseULong());
          return { substFormat: 1, lookupType: t, extension: tH[t].call(r) };
        }),
        (tH[8] = function () {
          var e = this.parseUShort();
          return (
            q.argument(
              1 === e,
              "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"
            ),
            {
              substFormat: e,
              coverage: this.parsePointer(ei.coverage),
              backtrackCoverage: this.parseList(ei.pointer(ei.coverage)),
              lookaheadCoverage: this.parseList(ei.pointer(ei.coverage)),
              substitutes: this.parseUShortList(),
            }
          );
        });
      var tK = {
          parse: function (e, t) {
            var r = new ei(e, (t = t || 0)),
              o = r.parseVersion(1);
            return (q.argument(
              1 === o || 1.1 === o,
              "Unsupported GSUB table version."
            ),
            1 === o)
              ? {
                  version: o,
                  scripts: r.parseScriptList(),
                  features: r.parseFeatureList(),
                  lookups: r.parseLookupList(tH),
                }
              : {
                  version: o,
                  scripts: r.parseScriptList(),
                  features: r.parseFeatureList(),
                  lookups: r.parseLookupList(tH),
                  variations: r.parseFeatureVariationsList(),
                };
          },
        },
        tQ = {
          parse: function (e, t) {
            var r = {},
              o = new eu.Parser(e, t);
            return (
              (r.version = o.parseVersion()),
              (r.fontRevision = Math.round(1e3 * o.parseFixed()) / 1e3),
              (r.checkSumAdjustment = o.parseULong()),
              (r.magicNumber = o.parseULong()),
              q.argument(
                1594834165 === r.magicNumber,
                "Font header has wrong magic number."
              ),
              (r.flags = o.parseUShort()),
              (r.unitsPerEm = o.parseUShort()),
              (r.created = o.parseLongDateTime()),
              (r.modified = o.parseLongDateTime()),
              (r.xMin = o.parseShort()),
              (r.yMin = o.parseShort()),
              (r.xMax = o.parseShort()),
              (r.yMax = o.parseShort()),
              (r.macStyle = o.parseUShort()),
              (r.lowestRecPPEM = o.parseUShort()),
              (r.fontDirectionHint = o.parseShort()),
              (r.indexToLocFormat = o.parseShort()),
              (r.glyphDataFormat = o.parseShort()),
              r
            );
          },
        },
        tJ = {
          parse: function (e, t) {
            var r = {},
              o = new eu.Parser(e, t);
            return (
              (r.version = o.parseVersion()),
              (r.ascender = o.parseShort()),
              (r.descender = o.parseShort()),
              (r.lineGap = o.parseShort()),
              (r.advanceWidthMax = o.parseUShort()),
              (r.minLeftSideBearing = o.parseShort()),
              (r.minRightSideBearing = o.parseShort()),
              (r.xMaxExtent = o.parseShort()),
              (r.caretSlopeRise = o.parseShort()),
              (r.caretSlopeRun = o.parseShort()),
              (r.caretOffset = o.parseShort()),
              (o.relativeOffset += 8),
              (r.metricDataFormat = o.parseShort()),
              (r.numberOfHMetrics = o.parseUShort()),
              r
            );
          },
        },
        t$ = function (e, t, r, o, s, n, a) {
          a.lowMemory
            ? (function (e, t, r, o, s) {
                e._hmtxTableData = {};
                for (var n, a, i = new eu.Parser(t, r), p = 0; p < s; p += 1)
                  p < o && ((n = i.parseUShort()), (a = i.parseShort())),
                    (e._hmtxTableData[p] = {
                      advanceWidth: n,
                      leftSideBearing: a,
                    });
              })(e, t, r, o, s)
            : (function (e, t, r, o, s) {
                for (var n, a, i = new eu.Parser(e, t), p = 0; p < o; p += 1) {
                  p < r && ((n = i.parseUShort()), (a = i.parseShort()));
                  var u = s.get(p);
                  (u.advanceWidth = n), (u.leftSideBearing = a);
                }
              })(t, r, o, s, n);
        },
        t0 = {
          parse: function (e, t) {
            var r = new eu.Parser(e, t),
              o = r.parseUShort();
            if (0 === o)
              return (function (e) {
                var t = {};
                e.skip("uShort");
                var r = e.parseUShort();
                q.argument(0 === r, "Unsupported kern sub-table version."),
                  e.skip("uShort", 2);
                var o = e.parseUShort();
                e.skip("uShort", 3);
                for (var s = 0; s < o; s += 1) {
                  var n = e.parseUShort(),
                    a = e.parseUShort(),
                    i = e.parseShort();
                  t[n + "," + a] = i;
                }
                return t;
              })(r);
            if (1 === o)
              return (function (e) {
                var t = {};
                e.skip("uShort"),
                  e.parseULong() > 1 &&
                    console.warn("Only the first kern subtable is supported."),
                  e.skip("uLong");
                var r = e.parseUShort();
                if ((e.skip("uShort"), 0 == (255 & r))) {
                  var o = e.parseUShort();
                  e.skip("uShort", 3);
                  for (var s = 0; s < o; s += 1) {
                    var n = e.parseUShort(),
                      a = e.parseUShort(),
                      i = e.parseShort();
                    t[n + "," + a] = i;
                  }
                }
                return t;
              })(r);
            throw Error("Unsupported kern table version (" + o + ").");
          },
        },
        t1 = {
          parse: function (e, t) {
            var r = new eu.Parser(e, t),
              o = r.parseULong();
            q.argument(1 === o, "Unsupported ltag table version."),
              r.skip("uLong", 1);
            for (var s = r.parseULong(), n = [], a = 0; a < s; a++) {
              for (
                var i = "", p = t + r.parseUShort(), u = r.parseUShort(), l = p;
                l < p + u;
                ++l
              )
                i += String.fromCharCode(e.getInt8(l));
              n.push(i);
            }
            return n;
          },
        },
        t2 = {
          parse: function (e, t, r, o) {
            for (
              var s = new eu.Parser(e, t),
                n = o ? s.parseUShort : s.parseULong,
                a = [],
                i = 0;
              i < r + 1;
              i += 1
            ) {
              var p = n.call(s);
              o && (p *= 2), a.push(p);
            }
            return a;
          },
        },
        t6 = {
          parse: function (e, t) {
            var r = {},
              o = new eu.Parser(e, t);
            return (
              (r.version = o.parseVersion()),
              (r.numGlyphs = o.parseUShort()),
              1 === r.version &&
                ((r.maxPoints = o.parseUShort()),
                (r.maxContours = o.parseUShort()),
                (r.maxCompositePoints = o.parseUShort()),
                (r.maxCompositeContours = o.parseUShort()),
                (r.maxZones = o.parseUShort()),
                (r.maxTwilightPoints = o.parseUShort()),
                (r.maxStorage = o.parseUShort()),
                (r.maxFunctionDefs = o.parseUShort()),
                (r.maxInstructionDefs = o.parseUShort()),
                (r.maxStackElements = o.parseUShort()),
                (r.maxSizeOfInstructions = o.parseUShort()),
                (r.maxComponentElements = o.parseUShort()),
                (r.maxComponentDepth = o.parseUShort())),
              r
            );
          },
        },
        t3 = {
          parse: function (e, t) {
            var r = {},
              o = new eu.Parser(e, t);
            (r.version = o.parseUShort()),
              (r.xAvgCharWidth = o.parseShort()),
              (r.usWeightClass = o.parseUShort()),
              (r.usWidthClass = o.parseUShort()),
              (r.fsType = o.parseUShort()),
              (r.ySubscriptXSize = o.parseShort()),
              (r.ySubscriptYSize = o.parseShort()),
              (r.ySubscriptXOffset = o.parseShort()),
              (r.ySubscriptYOffset = o.parseShort()),
              (r.ySuperscriptXSize = o.parseShort()),
              (r.ySuperscriptYSize = o.parseShort()),
              (r.ySuperscriptXOffset = o.parseShort()),
              (r.ySuperscriptYOffset = o.parseShort()),
              (r.yStrikeoutSize = o.parseShort()),
              (r.yStrikeoutPosition = o.parseShort()),
              (r.sFamilyClass = o.parseShort()),
              (r.panose = []);
            for (var s = 0; s < 10; s++) r.panose[s] = o.parseByte();
            return (
              (r.ulUnicodeRange1 = o.parseULong()),
              (r.ulUnicodeRange2 = o.parseULong()),
              (r.ulUnicodeRange3 = o.parseULong()),
              (r.ulUnicodeRange4 = o.parseULong()),
              (r.achVendID = String.fromCharCode(
                o.parseByte(),
                o.parseByte(),
                o.parseByte(),
                o.parseByte()
              )),
              (r.fsSelection = o.parseUShort()),
              (r.usFirstCharIndex = o.parseUShort()),
              (r.usLastCharIndex = o.parseUShort()),
              (r.sTypoAscender = o.parseShort()),
              (r.sTypoDescender = o.parseShort()),
              (r.sTypoLineGap = o.parseShort()),
              (r.usWinAscent = o.parseUShort()),
              (r.usWinDescent = o.parseUShort()),
              r.version >= 1 &&
                ((r.ulCodePageRange1 = o.parseULong()),
                (r.ulCodePageRange2 = o.parseULong())),
              r.version >= 2 &&
                ((r.sxHeight = o.parseShort()),
                (r.sCapHeight = o.parseShort()),
                (r.usDefaultChar = o.parseUShort()),
                (r.usBreakChar = o.parseUShort()),
                (r.usMaxContent = o.parseUShort())),
              r
            );
          },
        },
        t4 = {
          parse: function (e, t) {
            var r = {},
              o = new eu.Parser(e, t);
            switch (
              ((r.version = o.parseVersion()),
              (r.italicAngle = o.parseFixed()),
              (r.underlinePosition = o.parseShort()),
              (r.underlineThickness = o.parseShort()),
              (r.isFixedPitch = o.parseULong()),
              (r.minMemType42 = o.parseULong()),
              (r.maxMemType42 = o.parseULong()),
              (r.minMemType1 = o.parseULong()),
              (r.maxMemType1 = o.parseULong()),
              (r.names = []),
              r.version)
            ) {
              case 1:
                break;
              case 2:
                (r.numberOfGlyphs = o.parseUShort()),
                  (r.glyphNameIndex = Array(r.numberOfGlyphs));
                for (var s = 0; s < r.numberOfGlyphs; s++)
                  r.glyphNameIndex[s] = o.parseUShort();
                break;
              case 2.5:
                (r.numberOfGlyphs = o.parseUShort()),
                  (r.offset = Array(r.numberOfGlyphs));
                for (var n = 0; n < r.numberOfGlyphs; n++)
                  r.offset[n] = o.parseChar();
            }
            return r;
          },
        },
        t8 = {};
      (t8.UTF8 = function (e, t, r) {
        for (var o = [], s = 0; s < r; s++, t += 1) o[s] = e.getUint8(t);
        return String.fromCharCode.apply(null, o);
      }),
        (t8.UTF16 = function (e, t, r) {
          for (var o = [], s = r / 2, n = 0; n < s; n++, t += 2)
            o[n] = e.getUint16(t);
          return String.fromCharCode.apply(null, o);
        });
      var t5 = {
        "x-mac-croatian":
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ",
        "x-mac-cyrillic":
          "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
        "x-mac-gaelic":
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ",
        "x-mac-greek":
          "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad",
        "x-mac-icelandic":
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
        "x-mac-inuit":
          "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xa0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
        "x-mac-ce":
          "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",
        macintosh:
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
        "x-mac-romanian":
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
        "x-mac-turkish":
          "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ",
      };
      t8.MACSTRING = function (e, t, r, o) {
        var s = t5[o];
        if (void 0 !== s) {
          for (var n = "", a = 0; a < r; a++) {
            var i = e.getUint8(t + a);
            i <= 127 ? (n += String.fromCharCode(i)) : (n += s[127 & i]);
          }
          return n;
        }
      };
      var t7 = {
        parse: function (e, t) {
          var r = new eu.Parser(e, t),
            o = r.parseULong();
          q.argument(1 === o, "Unsupported META table version."),
            r.parseULong(),
            r.parseULong();
          for (var s = r.parseULong(), n = {}, a = 0; a < s; a++) {
            var i = r.parseTag(),
              p = r.parseULong(),
              u = r.parseULong(),
              l = t8.UTF8(e, t + p, u);
            n[i] = l;
          }
          return n;
        },
      };
      function t9(e, t) {
        for (var r = [], o = 12, s = 0; s < t; s += 1) {
          var n = eu.getTag(e, o),
            a = eu.getULong(e, o + 4),
            i = eu.getULong(e, o + 8),
            p = eu.getULong(e, o + 12);
          r.push({
            tag: n,
            checksum: a,
            offset: i,
            length: p,
            compression: !1,
          }),
            (o += 16);
        }
        return r;
      }
      function re(e, t) {
        if ("WOFF" !== t.compression) return { data: e, offset: t.offset };
        var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
          o = new Uint8Array(t.length);
        if ((F(r, o), o.byteLength !== t.length))
          throw Error(
            "Decompression error: " +
              t.tag +
              " decompressed length doesn't match recorded length"
          );
        return { data: new DataView(o.buffer, 0), offset: 0 };
      }
      var rt = Object.freeze({
        __proto__: null,
        Font: tL,
        Glyph: V,
        Path: B,
        _parse: eu,
        parse: function (e, t) {
          t = null == t ? {} : t;
          var r,
            o,
            s,
            n,
            a,
            i,
            p,
            u,
            l,
            h,
            c,
            f,
            d,
            v = new tL({ empty: !0 }),
            g = new DataView(e, 0),
            y = [],
            m = eu.getTag(g, 0);
          if (
            m === String.fromCharCode(0, 1, 0, 0) ||
            "true" === m ||
            "typ1" === m
          )
            (v.outlinesFormat = "truetype"),
              (o = eu.getUShort(g, 4)),
              (y = t9(g, o));
          else if ("OTTO" === m)
            (v.outlinesFormat = "cff"),
              (o = eu.getUShort(g, 4)),
              (y = t9(g, o));
          else if ("wOFF" === m) {
            var b = eu.getTag(g, 4);
            if (b === String.fromCharCode(0, 1, 0, 0))
              v.outlinesFormat = "truetype";
            else if ("OTTO" === b) v.outlinesFormat = "cff";
            else throw Error("Unsupported OpenType flavor " + m);
            (o = eu.getUShort(g, 12)),
              (y = (function (e, t) {
                for (var r = [], o = 44, s = 0; s < t; s += 1) {
                  var n = eu.getTag(e, o),
                    a = eu.getULong(e, o + 4),
                    i = eu.getULong(e, o + 8),
                    p = eu.getULong(e, o + 12),
                    u = void 0;
                  (u = i < p && "WOFF"),
                    r.push({
                      tag: n,
                      offset: a,
                      compression: u,
                      compressedLength: i,
                      length: p,
                    }),
                    (o += 20);
                }
                return r;
              })(g, o));
          } else throw Error("Unsupported OpenType signature " + m);
          for (var x = 0; x < o; x += 1) {
            var S = y[x],
              k = void 0;
            switch (S.tag) {
              case "cmap":
                (k = re(g, S)),
                  (v.tables.cmap = tT.parse(k.data, k.offset)),
                  (v.encoding = new N(v.tables.cmap));
                break;
              case "cvt ":
                (k = re(g, S)),
                  (d = new eu.Parser(k.data, k.offset)),
                  (v.tables.cvt = d.parseShortList(S.length / 2));
                break;
              case "fvar":
                n = S;
                break;
              case "fpgm":
                (k = re(g, S)),
                  (d = new eu.Parser(k.data, k.offset)),
                  (v.tables.fpgm = d.parseByteList(S.length));
                break;
              case "head":
                (k = re(g, S)),
                  (v.tables.head = tQ.parse(k.data, k.offset)),
                  (v.unitsPerEm = v.tables.head.unitsPerEm),
                  (r = v.tables.head.indexToLocFormat);
                break;
              case "hhea":
                (k = re(g, S)),
                  (v.tables.hhea = tJ.parse(k.data, k.offset)),
                  (v.ascender = v.tables.hhea.ascender),
                  (v.descender = v.tables.hhea.descender),
                  (v.numberOfHMetrics = v.tables.hhea.numberOfHMetrics);
                break;
              case "hmtx":
                l = S;
                break;
              case "ltag":
                (k = re(g, S)), (ltagTable = t1.parse(k.data, k.offset));
                break;
              case "maxp":
                (k = re(g, S)),
                  (v.tables.maxp = t6.parse(k.data, k.offset)),
                  (v.numGlyphs = v.tables.maxp.numGlyphs);
                break;
              case "OS/2":
                (k = re(g, S)), (v.tables.os2 = t3.parse(k.data, k.offset));
                break;
              case "post":
                (k = re(g, S)), (v.tables.post = t4.parse(k.data, k.offset));
                break;
              case "prep":
                (k = re(g, S)),
                  (d = new eu.Parser(k.data, k.offset)),
                  (v.tables.prep = d.parseByteList(S.length));
                break;
              case "glyf":
                a = S;
                break;
              case "loca":
                c = S;
                break;
              case "CFF ":
                s = S;
                break;
              case "kern":
                h = S;
                break;
              case "GDEF":
                i = S;
                break;
              case "GPOS":
                p = S;
                break;
              case "GSUB":
                u = S;
                break;
              case "meta":
                f = S;
            }
          }
          if (a && c) {
            var U = 0 === r,
              E = re(g, c),
              C = t2.parse(E.data, E.offset, v.numGlyphs, U),
              D = re(g, a);
            v.glyphs = ev.parse(D.data, D.offset, C, v, t);
          } else if (s) {
            var L = re(g, s);
            tA.parse(L.data, L.offset, v, t);
          } else throw Error("Font doesn't contain TrueType or CFF outlines.");
          var T = re(g, l);
          if (
            (t$(
              v,
              T.data,
              T.offset,
              v.numberOfHMetrics,
              v.numGlyphs,
              v.glyphs,
              t
            ),
            t.lowMemory
              ? (function (e) {
                  e._IndexToUnicodeMap = {};
                  for (
                    var t = e.tables.cmap.glyphIndexMap,
                      r = Object.keys(t),
                      o = 0;
                    o < r.length;
                    o += 1
                  ) {
                    var s = r[o],
                      n = t[s];
                    void 0 === e._IndexToUnicodeMap[n]
                      ? (e._IndexToUnicodeMap[n] = { unicodes: [parseInt(s)] })
                      : e._IndexToUnicodeMap[n].unicodes.push(parseInt(s));
                  }
                })(v)
              : (function (e) {
                  for (
                    var t = e.tables.cmap.glyphIndexMap,
                      r = Object.keys(t),
                      o = 0;
                    o < r.length;
                    o += 1
                  ) {
                    var s = r[o],
                      n = t[s];
                    e.glyphs.get(n).addUnicode(parseInt(s));
                  }
                })(v),
            h)
          ) {
            var w = re(g, h);
            v.kerningPairs = t0.parse(w.data, w.offset);
          } else v.kerningPairs = {};
          if (i) {
            var P = re(g, i);
            v.tables.gdef = tX.parse(P.data, P.offset);
          }
          if (p) {
            var O = re(g, p);
            (v.tables.gpos = tZ.parse(O.data, O.offset)), v.position.init();
          }
          if (u) {
            var F = re(g, u);
            v.tables.gsub = tK.parse(F.data, F.offset);
          }
          if (n) {
            var G = re(g, n);
            v.tables.fvar = tz.parse(G.data, G.offset, v.names);
          }
          if (f) {
            var I = re(g, f);
            (v.tables.meta = t7.parse(I.data, I.offset)),
              (v.metas = v.tables.meta);
          }
          return v;
        },
        load: function () {},
        loadSync: function () {},
      });
      t.ZP = rt;
    },
  },
]);
