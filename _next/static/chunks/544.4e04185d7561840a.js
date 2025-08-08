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
      (e._sentryDebugIds[t] = "665097bc-eced-432d-a3e2-069c4d6b6c5a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-665097bc-eced-432d-a3e2-069c4d6b6c5a"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [544],
  {
    60200: function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, l) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new a(r, o || e, l),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function l(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            a = [];
          if (0 === this._eventsCount) return a;
          for (r in (e = this._events))
            t.call(e, r) && a.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? a.concat(Object.getOwnPropertySymbols(e))
            : a;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var a = 0, o = r.length, l = Array(o); a < o; a++)
            l[a] = r[a].fn;
          return l;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, a, o, l) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            i,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, a), !0;
              case 5:
                return u.fn.call(u.context, t, r, a, o), !0;
              case 6:
                return u.fn.call(u.context, t, r, a, o, l), !0;
            }
            for (i = 1, c = Array(d - 1); i < d; i++) c[i - 1] = arguments[i];
            u.fn.apply(u.context, c);
          } else {
            var p,
              f = u.length;
            for (i = 0; i < f; i++)
              switch (
                (u[i].once && this.removeListener(e, u[i].fn, void 0, !0), d)
              ) {
                case 1:
                  u[i].fn.call(u[i].context);
                  break;
                case 2:
                  u[i].fn.call(u[i].context, t);
                  break;
                case 3:
                  u[i].fn.call(u[i].context, t, r);
                  break;
                case 4:
                  u[i].fn.call(u[i].context, t, r, a);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(d - 1); p < d; p++)
                      c[p - 1] = arguments[p];
                  u[i].fn.apply(u[i].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, a) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return l(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (a && !s.once) ||
              (r && s.context !== r) ||
              l(this, o);
          else {
            for (var c = 0, i = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (a && !s[c].once) ||
                (r && s[c].context !== r)) &&
                i.push(s[c]);
            i.length
              ? (this._events[o] = 1 === i.length ? i[0] : i)
              : l(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && l(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    69607: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
        i1: function () {
          return a;
        },
        mI: function () {
          return s;
        },
        su: function () {
          return c;
        },
      });
      var r,
        a,
        o = n(60200),
        l = n(35615);
      ((r = a || (a = {})).Installed = "Installed"),
        (r.NotDetected = "NotDetected"),
        (r.Loadable = "Loadable"),
        (r.Unsupported = "Unsupported");
      class s extends o {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(e, t, n = {}) {
          let r = this.publicKey;
          if (!r) throw new l.oS();
          return (
            (e.feePayer = e.feePayer || r),
            (e.recentBlockhash =
              e.recentBlockhash ||
              (
                await t.getLatestBlockhash({
                  commitment: n.preflightCommitment,
                  minContextSlot: n.minContextSlot,
                })
              ).blockhash),
            e
          );
        }
      }
      function c(e) {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return;
        let t = [];
        function n() {
          if (e()) for (let e of t) e();
        }
        let r = setInterval(n, 1e3);
        t.push(() => clearInterval(r)),
          "loading" === document.readyState &&
            (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
            t.push(() => document.removeEventListener("DOMContentLoaded", n))),
          "complete" !== document.readyState &&
            (window.addEventListener("load", n, { once: !0 }),
            t.push(() => window.removeEventListener("load", n))),
          n();
      }
      function i() {
        if (!navigator) return !1;
        let e = navigator.userAgent.toLowerCase(),
          t = e.includes("iphone") || e.includes("ipad"),
          n = e.includes("safari");
        return t && n;
      }
    },
    35615: function (e, t, n) {
      n.d(t, {
        $w: function () {
          return l;
        },
        IW: function () {
          return p;
        },
        Nx: function () {
          return u;
        },
        OZ: function () {
          return a;
        },
        PY: function () {
          return f;
        },
        UG: function () {
          return c;
        },
        at: function () {
          return s;
        },
        bD: function () {
          return h;
        },
        cO: function () {
          return i;
        },
        fk: function () {
          return m;
        },
        lj: function () {
          return r;
        },
        oS: function () {
          return d;
        },
        p6: function () {
          return o;
        },
      });
      class r extends Error {
        constructor(e, t) {
          super(e), (this.error = t);
        }
      }
      class a extends r {
        constructor() {
          super(...arguments), (this.name = "WalletNotReadyError");
        }
      }
      class o extends r {
        constructor() {
          super(...arguments), (this.name = "WalletConfigError");
        }
      }
      class l extends r {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      class s extends r {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectedError");
        }
      }
      class c extends r {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectionError");
        }
      }
      class i extends r {
        constructor() {
          super(...arguments), (this.name = "WalletAccountError");
        }
      }
      class u extends r {
        constructor() {
          super(...arguments), (this.name = "WalletPublicKeyError");
        }
      }
      class d extends r {
        constructor() {
          super(...arguments), (this.name = "WalletNotConnectedError");
        }
      }
      class p extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSendTransactionError");
        }
      }
      class f extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class m extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
      class h extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSignInError");
        }
      }
    },
    45664: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(67294);
      let a = (e) =>
        r.createElement(
          "button",
          {
            className: `wallet-adapter-button ${e.className || ""}`,
            disabled: e.disabled,
            style: e.style,
            onClick: e.onClick,
            tabIndex: e.tabIndex || 0,
            type: "button",
          },
          e.startIcon &&
            r.createElement(
              "i",
              { className: "wallet-adapter-button-start-icon" },
              e.startIcon
            ),
          e.children,
          e.endIcon &&
            r.createElement(
              "i",
              { className: "wallet-adapter-button-end-icon" },
              e.endIcon
            )
        );
    },
    36581: function (e, t, n) {
      n.d(t, {
        o: function () {
          return a;
        },
      });
      var r = n(67294);
      let a = ({ wallet: e, ...t }) =>
        e &&
        r.createElement("img", {
          src: e.adapter.icon,
          alt: `${e.adapter.name} icon`,
          ...t,
        });
    },
    65127: function (e, t, n) {
      n.d(t, {
        x: function () {
          return f;
        },
      });
      var r = n(69607),
        a = n(54306),
        o = n(67294),
        l = n(73935);
      let s = ({ id: e, children: t, expanded: n = !1 }) => {
        let r = (0, o.useRef)(null),
          a = (0, o.useRef)(!0),
          l = () => {
            let e = r.current;
            e &&
              requestAnimationFrame(() => {
                e.style.height = e.scrollHeight + "px";
              });
          },
          s = () => {
            let e = r.current;
            e &&
              requestAnimationFrame(() => {
                (e.style.height = e.offsetHeight + "px"),
                  (e.style.overflow = "hidden"),
                  requestAnimationFrame(() => {
                    e.style.height = "0";
                  });
              });
          };
        return (
          (0, o.useLayoutEffect)(() => {
            n ? l() : s();
          }, [n]),
          (0, o.useLayoutEffect)(() => {
            let e = r.current;
            if (e)
              return (
                a.current && (t(), (a.current = !1)),
                e.addEventListener("transitionend", o),
                () => e.removeEventListener("transitionend", o)
              );
            function t() {
              e &&
                ((e.style.overflow = n ? "initial" : "hidden"),
                n && (e.style.height = "auto"));
            }
            function o(n) {
              e && n.target === e && "height" === n.propertyName && t();
            }
          }, [n]),
          o.createElement(
            "div",
            {
              className: "wallet-adapter-collapse",
              id: e,
              ref: r,
              role: "region",
              style: {
                height: 0,
                transition: a.current ? void 0 : "height 250ms ease-out",
              },
            },
            t
          )
        );
      };
      var c = n(45664),
        i = n(36581);
      let u = ({ handleClick: e, tabIndex: t, wallet: n }) =>
          o.createElement(
            "li",
            null,
            o.createElement(
              c.z,
              {
                onClick: e,
                startIcon: o.createElement(i.o, { wallet: n }),
                tabIndex: t,
              },
              n.adapter.name,
              n.readyState === r.i1.Installed &&
                o.createElement("span", null, "Detected")
            )
          ),
        d = () =>
          o.createElement(
            "svg",
            {
              width: "97",
              height: "96",
              viewBox: "0 0 97 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "48",
              fill: "url(#paint0_linear_880_5115)",
              fillOpacity: "0.1",
            }),
            o.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "47",
              stroke: "url(#paint1_linear_880_5115)",
              strokeOpacity: "0.4",
              strokeWidth: "2",
            }),
            o.createElement(
              "g",
              { clipPath: "url(#clip0_880_5115)" },
              o.createElement("path", {
                d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                fill: "url(#paint2_linear_880_5115)",
              }),
              o.createElement("path", {
                d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                fill: "url(#paint3_linear_880_5115)",
              })
            ),
            o.createElement(
              "defs",
              null,
              o.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                o.createElement("stop", { stopColor: "#9945FF" }),
                o.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                o.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                o.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                o.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                o.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              o.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                o.createElement("stop", { stopColor: "#9945FF" }),
                o.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                o.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                o.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                o.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                o.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              o.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_880_5115",
                  x1: "25.9583",
                  y1: "68.7101",
                  x2: "67.2337",
                  y2: "23.7879",
                  gradientUnits: "userSpaceOnUse",
                },
                o.createElement("stop", { stopColor: "#9945FF" }),
                o.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                o.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                o.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                o.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                o.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              o.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_880_5115",
                  x1: "58.3326",
                  y1: "49.4467",
                  x2: "61.0002",
                  y2: "45.4453",
                  gradientUnits: "userSpaceOnUse",
                },
                o.createElement("stop", { stopColor: "#9945FF" }),
                o.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                o.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                o.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                o.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                o.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              o.createElement(
                "clipPath",
                { id: "clip0_880_5115" },
                o.createElement("rect", {
                  width: "48",
                  height: "48",
                  fill: "white",
                  transform: "translate(24.5 24)",
                })
              )
            )
          );
      var p = n(13495);
      let f = ({ className: e = "", container: t = "body" }) => {
        let n = (0, o.useRef)(null),
          { wallets: c, select: i } = (0, a.O)(),
          { setVisible: f } = (0, p.h)(),
          [m, h] = (0, o.useState)(!1),
          [E, v] = (0, o.useState)(!1),
          [C, y] = (0, o.useState)(null),
          [w, g] = (0, o.useMemo)(() => {
            let e = [],
              t = [];
            for (let n of c)
              n.readyState === r.i1.Installed ? e.push(n) : t.push(n);
            return e.length ? [e, t] : [t, []];
          }, [c]),
          b = (0, o.useCallback)(() => {
            v(!1), setTimeout(() => f(!1), 150);
          }, [f]),
          x = (0, o.useCallback)(
            (e) => {
              e.preventDefault(), b();
            },
            [b]
          ),
          _ = (0, o.useCallback)(
            (e, t) => {
              i(t), x(e);
            },
            [i, x]
          ),
          k = (0, o.useCallback)(() => h(!m), [m]),
          L = (0, o.useCallback)(
            (e) => {
              let t = n.current;
              if (!t) return;
              let r = t.querySelectorAll("button"),
                a = r[0],
                o = r[r.length - 1];
              e.shiftKey
                ? document.activeElement === a &&
                  (o.focus(), e.preventDefault())
                : document.activeElement === o &&
                  (a.focus(), e.preventDefault());
            },
            [n]
          );
        return (
          (0, o.useLayoutEffect)(() => {
            let e = (e) => {
                "Escape" === e.key ? b() : "Tab" === e.key && L(e);
              },
              { overflow: t } = window.getComputedStyle(document.body);
            return (
              setTimeout(() => v(!0), 0),
              (document.body.style.overflow = "hidden"),
              window.addEventListener("keydown", e, !1),
              () => {
                (document.body.style.overflow = t),
                  window.removeEventListener("keydown", e, !1);
              }
            );
          }, [b, L]),
          (0, o.useLayoutEffect)(() => y(document.querySelector(t)), [t]),
          C &&
            (0, l.createPortal)(
              o.createElement(
                "div",
                {
                  "aria-labelledby": "wallet-adapter-modal-title",
                  "aria-modal": "true",
                  className: `wallet-adapter-modal ${
                    E && "wallet-adapter-modal-fade-in"
                  } ${e}`,
                  ref: n,
                  role: "dialog",
                },
                o.createElement(
                  "div",
                  { className: "wallet-adapter-modal-container" },
                  o.createElement(
                    "div",
                    { className: "wallet-adapter-modal-wrapper" },
                    o.createElement(
                      "button",
                      {
                        onClick: x,
                        className: "wallet-adapter-modal-button-close",
                      },
                      o.createElement(
                        "svg",
                        { width: "14", height: "14" },
                        o.createElement("path", {
                          d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z",
                        })
                      )
                    ),
                    w.length
                      ? o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(
                            "h1",
                            { className: "wallet-adapter-modal-title" },
                            "Connect a wallet on Solana to continue"
                          ),
                          o.createElement(
                            "ul",
                            { className: "wallet-adapter-modal-list" },
                            w.map((e) =>
                              o.createElement(u, {
                                key: e.adapter.name,
                                handleClick: (t) => _(t, e.adapter.name),
                                wallet: e,
                              })
                            ),
                            g.length
                              ? o.createElement(
                                  s,
                                  {
                                    expanded: m,
                                    id: "wallet-adapter-modal-collapse",
                                  },
                                  g.map((e) =>
                                    o.createElement(u, {
                                      key: e.adapter.name,
                                      handleClick: (t) => _(t, e.adapter.name),
                                      tabIndex: m ? 0 : -1,
                                      wallet: e,
                                    })
                                  )
                                )
                              : null
                          ),
                          g.length
                            ? o.createElement(
                                "button",
                                {
                                  className: "wallet-adapter-modal-list-more",
                                  onClick: k,
                                  tabIndex: 0,
                                },
                                o.createElement(
                                  "span",
                                  null,
                                  m ? "Less " : "More ",
                                  "options"
                                ),
                                o.createElement(
                                  "svg",
                                  {
                                    width: "13",
                                    height: "7",
                                    viewBox: "0 0 13 7",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: `${
                                      m
                                        ? "wallet-adapter-modal-list-more-icon-rotate"
                                        : ""
                                    }`,
                                  },
                                  o.createElement("path", {
                                    d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                  })
                                )
                              )
                            : null
                        )
                      : o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(
                            "h1",
                            { className: "wallet-adapter-modal-title" },
                            "You'll need a wallet on Solana to continue"
                          ),
                          o.createElement(
                            "div",
                            { className: "wallet-adapter-modal-middle" },
                            o.createElement(d, null)
                          ),
                          g.length
                            ? o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(
                                  "button",
                                  {
                                    className: "wallet-adapter-modal-list-more",
                                    onClick: k,
                                    tabIndex: 0,
                                  },
                                  o.createElement(
                                    "span",
                                    null,
                                    m
                                      ? "Hide "
                                      : "Already have a wallet? View ",
                                    "options"
                                  ),
                                  o.createElement(
                                    "svg",
                                    {
                                      width: "13",
                                      height: "7",
                                      viewBox: "0 0 13 7",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: `${
                                        m
                                          ? "wallet-adapter-modal-list-more-icon-rotate"
                                          : ""
                                      }`,
                                    },
                                    o.createElement("path", {
                                      d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                    })
                                  )
                                ),
                                o.createElement(
                                  s,
                                  {
                                    expanded: m,
                                    id: "wallet-adapter-modal-collapse",
                                  },
                                  o.createElement(
                                    "ul",
                                    { className: "wallet-adapter-modal-list" },
                                    g.map((e) =>
                                      o.createElement(u, {
                                        key: e.adapter.name,
                                        handleClick: (t) =>
                                          _(t, e.adapter.name),
                                        tabIndex: m ? 0 : -1,
                                        wallet: e,
                                      })
                                    )
                                  )
                                )
                              )
                            : null
                        )
                  )
                ),
                o.createElement("div", {
                  className: "wallet-adapter-modal-overlay",
                  onMouseDown: x,
                })
              ),
              C
            )
        );
      };
    },
    20544: function (e, t, n) {
      n.d(t, {
        s: function () {
          return l;
        },
      });
      var r = n(67294),
        a = n(13495),
        o = n(65127);
      let l = ({ children: e, ...t }) => {
        let [n, l] = (0, r.useState)(!1);
        return r.createElement(
          a.g.Provider,
          { value: { visible: n, setVisible: l } },
          e,
          n && r.createElement(o.x, { ...t })
        );
      };
    },
    13495: function (e, t, n) {
      n.d(t, {
        g: function () {
          return l;
        },
        h: function () {
          return s;
        },
      });
      var r = n(67294);
      let a = {
        setVisible(e) {
          console.error(o("call", "setVisible"));
        },
        visible: !1,
      };
      function o(e, t) {
        return `You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
      }
      Object.defineProperty(a, "visible", {
        get: () => (console.error(o("read", "visible")), !1),
      });
      let l = (0, r.createContext)(a);
      function s() {
        return (0, r.useContext)(l);
      }
    },
  },
]);
