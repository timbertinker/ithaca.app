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
      (e._sentryDebugIds[t] = "4cff73ea-b981-4fef-97f0-bad24ae84e9a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4cff73ea-b981-4fef-97f0-bad24ae84e9a"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9849],
  {
    97145: function (e, t, n) {
      n.d(t, {
        ij: function () {
          return r;
        },
      });
      function r() {
        let e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
    },
    22944: function (e, t, n) {
      n.d(t, {
        F: function () {
          return H;
        },
      });
      var r = n(67294);
      let o = "undefined" != typeof document ? r.useLayoutEffect : () => {};
      class i {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function u(e) {
        let t = (0, r.useRef)({ isFocused: !1, observer: null });
        o(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (function (e) {
          let t = (0, r.useRef)(null);
          return (
            o(() => {
              t.current = e;
            }, [e]),
            (0, r.useCallback)((...e) => {
              let n = t.current;
              return null == n ? void 0 : n(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, r.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let r = e.target;
              r.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    r.disabled && n(new i("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let n =
                      r === document.activeElement
                        ? null
                        : document.activeElement;
                    r.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: n })
                    ),
                      r.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: n,
                        })
                      );
                  }
                })),
                t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [n]
        );
      }
      function l(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function a(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform
          )
        );
      }
      function s(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let c = s(function () {
          return a(/^Mac/i);
        }),
        d = s(function () {
          return a(/^iPhone/i);
        }),
        f = s(function () {
          return a(/^iPad/i) || (c() && navigator.maxTouchPoints > 1);
        }),
        v = s(function () {
          return d() || f();
        });
      s(function () {
        return c() || v();
      }),
        s(function () {
          return l(/AppleWebKit/i) && !p();
        });
      let p = s(function () {
          return l(/Chrome/i);
        }),
        g = s(function () {
          return l(/Android/i);
        });
      s(function () {
        return l(/Firefox/i);
      });
      var m = n(78837);
      let h = null,
        E = new Set(),
        y = new Map(),
        b = !1,
        w = !1,
        T = { Tab: !0, Escape: !0 };
      function L(e, t) {
        for (let n of E) n(e, t);
      }
      function P(e) {
        (b = !0),
          e.metaKey ||
            (!c() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((h = "keyboard"), L("keyboard", e));
      }
      function F(e) {
        (h = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((b = !0), L("pointer", e));
      }
      function A(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (g() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((b = !0), (h = "virtual"));
      }
      function C(e) {
        e.target !== window &&
          e.target !== document &&
          e.isTrusted &&
          (b || w || ((h = "virtual"), L("virtual", e)), (b = !1), (w = !1));
      }
      function x() {
        (b = !1), (w = !0);
      }
      function S(e) {
        if ("undefined" == typeof window || y.get((0, m.kR)(e))) return;
        let t = (0, m.kR)(e),
          n = (0, m.r3)(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (b = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", P, !0),
          n.addEventListener("keyup", P, !0),
          n.addEventListener("click", A, !0),
          t.addEventListener("focus", C, !0),
          t.addEventListener("blur", x, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", F, !0),
              n.addEventListener("pointermove", F, !0),
              n.addEventListener("pointerup", F, !0))
            : (n.addEventListener("mousedown", F, !0),
              n.addEventListener("mousemove", F, !0),
              n.addEventListener("mouseup", F, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              M(e);
            },
            { once: !0 }
          ),
          y.set(t, { focus: r });
      }
      let M = (e, t) => {
        let n = (0, m.kR)(e),
          r = (0, m.r3)(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          y.has(n) &&
            ((n.HTMLElement.prototype.focus = y.get(n).focus),
            r.removeEventListener("keydown", P, !0),
            r.removeEventListener("keyup", P, !0),
            r.removeEventListener("click", A, !0),
            n.removeEventListener("focus", C, !0),
            n.removeEventListener("blur", x, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", F, !0),
                r.removeEventListener("pointermove", F, !0),
                r.removeEventListener("pointerup", F, !0))
              : (r.removeEventListener("mousedown", F, !0),
                r.removeEventListener("mousemove", F, !0),
                r.removeEventListener("mouseup", F, !0)),
            y.delete(n));
      };
      function k() {
        return "pointer" !== h;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = (0, m.r3)(void 0);
          "loading" !== n.readyState
            ? S(void 0)
            : ((t = () => {
                S(void 0);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => M(e, t);
        })();
      let O = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      var N = n(6445),
        R = n(36116);
      function H(e = {}) {
        var t, n, o;
        let { autoFocus: l = !1, isTextInput: a, within: s } = e,
          c = (0, r.useRef)({ isFocused: !1, isFocusVisible: l || k() }),
          [d, f] = (0, r.useState)(!1),
          [v, p] = (0, r.useState)(
            () => c.current.isFocused && c.current.isFocusVisible
          ),
          g = (0, r.useCallback)(
            () => p(c.current.isFocused && c.current.isFocusVisible),
            []
          ),
          h = (0, r.useCallback)(
            (e) => {
              (c.current.isFocused = e), f(e), g();
            },
            [g]
          );
        (t = (e) => {
          (c.current.isFocusVisible = e), g();
        }),
          (n = []),
          (o = { isTextInput: a }),
          S(),
          (0, r.useEffect)(() => {
            let e = (e, n) => {
              (function (e, t, n) {
                let r = (0, m.r3)(null == n ? void 0 : n.target),
                  o =
                    "undefined" != typeof window
                      ? (0, m.kR)(null == n ? void 0 : n.target)
                          .HTMLInputElement
                      : HTMLInputElement,
                  i =
                    "undefined" != typeof window
                      ? (0, m.kR)(null == n ? void 0 : n.target)
                          .HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  u =
                    "undefined" != typeof window
                      ? (0, m.kR)(null == n ? void 0 : n.target).HTMLElement
                      : HTMLElement,
                  l =
                    "undefined" != typeof window
                      ? (0, m.kR)(null == n ? void 0 : n.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    (r.activeElement instanceof o &&
                      !O.has(r.activeElement.type)) ||
                    r.activeElement instanceof i ||
                    (r.activeElement instanceof u &&
                      r.activeElement.isContentEditable)) &&
                  "keyboard" === t &&
                  n instanceof l &&
                  !T[n.key]
                );
              })(!!(null == o ? void 0 : o.isTextInput), e, n) && t(k());
            };
            return (
              E.add(e),
              () => {
                E.delete(e);
              }
            );
          }, n);
        let { focusProps: y } = (function (e) {
            let { isDisabled: t, onFocus: n, onBlur: o, onFocusChange: i } = e,
              l = (0, r.useCallback)(
                (e) => {
                  if (e.target === e.currentTarget)
                    return o && o(e), i && i(!1), !0;
                },
                [o, i]
              ),
              a = u(l),
              s = (0, r.useCallback)(
                (e) => {
                  let t = (0, m.r3)(e.target),
                    r = t ? (0, N.vY)(t) : (0, N.vY)();
                  e.target === e.currentTarget &&
                    r === (0, N.NI)(e.nativeEvent) &&
                    (n && n(e), i && i(!0), a(e));
                },
                [i, n, a]
              );
            return {
              focusProps: {
                onFocus: !t && (n || i || o) ? s : void 0,
                onBlur: !t && (o || i) ? l : void 0,
              },
            };
          })({ isDisabled: s, onFocusChange: h }),
          { focusWithinProps: b } = (function (e) {
            let {
                isDisabled: t,
                onBlurWithin: n,
                onFocusWithin: o,
                onFocusWithinChange: l,
              } = e,
              a = (0, r.useRef)({ isFocusWithin: !1 }),
              { addGlobalListener: s, removeAllGlobalListeners: c } = (0,
              R.x)(),
              d = (0, r.useCallback)(
                (e) => {
                  e.currentTarget.contains(e.target) &&
                    a.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((a.current.isFocusWithin = !1),
                    c(),
                    n && n(e),
                    l && l(!1));
                },
                [n, l, a, c]
              ),
              f = u(d),
              v = (0, r.useCallback)(
                (e) => {
                  if (!e.currentTarget.contains(e.target)) return;
                  let t = (0, m.r3)(e.target),
                    n = (0, N.vY)(t);
                  if (
                    !a.current.isFocusWithin &&
                    n === (0, N.NI)(e.nativeEvent)
                  ) {
                    o && o(e), l && l(!0), (a.current.isFocusWithin = !0), f(e);
                    let n = e.currentTarget;
                    s(
                      t,
                      "focus",
                      (e) => {
                        if (
                          a.current.isFocusWithin &&
                          !(0, N.bE)(n, e.target)
                        ) {
                          let r = new i(
                            "blur",
                            new t.defaultView.FocusEvent("blur", {
                              relatedTarget: e.target,
                            })
                          );
                          (r.target = n), (r.currentTarget = n), d(r);
                        }
                      },
                      { capture: !0 }
                    );
                  }
                },
                [o, l, f, s, d]
              );
            return t
              ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
              : { focusWithinProps: { onFocus: v, onBlur: d } };
          })({ isDisabled: !s, onFocusWithinChange: h });
        return { isFocused: d, isFocusVisible: v, focusProps: s ? b : y };
      }
    },
    18419: function (e, t, n) {
      n.d(t, {
        X: function () {
          return f;
        },
      });
      var r = n(36116),
        o = n(78837),
        i = n(6445),
        u = n(67294);
      let l = !1,
        a = 0;
      function s() {
        (l = !0),
          setTimeout(() => {
            l = !1;
          }, 50);
      }
      function c(e) {
        "touch" === e.pointerType && s();
      }
      function d() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", c)
              : document.addEventListener("touchend", s),
            a++,
            () => {
              --a > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", c)
                  : document.removeEventListener("touchend", s));
            }
          );
      }
      function f(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: a,
            isDisabled: s,
          } = e,
          [c, f] = (0, u.useState)(!1),
          v = (0, u.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, u.useEffect)(d, []);
        let { addGlobalListener: p, removeAllGlobalListeners: g } = (0, r.x)(),
          { hoverProps: m, triggerHoverEnd: h } = (0, u.useMemo)(() => {
            let e = (e, u) => {
                if (
                  ((v.pointerType = u),
                  s ||
                    "touch" === u ||
                    v.isHovered ||
                    !e.currentTarget.contains(e.target))
                )
                  return;
                v.isHovered = !0;
                let l = e.currentTarget;
                (v.target = l),
                  p(
                    (0, o.r3)(e.target),
                    "pointerover",
                    (e) => {
                      v.isHovered &&
                        v.target &&
                        !(0, i.bE)(v.target, e.target) &&
                        r(e, e.pointerType);
                    },
                    { capture: !0 }
                  ),
                  t && t({ type: "hoverstart", target: l, pointerType: u }),
                  n && n(!0),
                  f(!0);
              },
              r = (e, t) => {
                let r = v.target;
                (v.pointerType = ""),
                  (v.target = null),
                  "touch" !== t &&
                    v.isHovered &&
                    r &&
                    ((v.isHovered = !1),
                    g(),
                    a && a({ type: "hoverend", target: r, pointerType: t }),
                    n && n(!1),
                    f(!1));
              },
              u = {};
            return (
              "undefined" != typeof PointerEvent
                ? ((u.onPointerEnter = (t) => {
                    (l && "mouse" === t.pointerType) || e(t, t.pointerType);
                  }),
                  (u.onPointerLeave = (e) => {
                    !s &&
                      e.currentTarget.contains(e.target) &&
                      r(e, e.pointerType);
                  }))
                : ((u.onTouchStart = () => {
                    v.ignoreEmulatedMouseEvents = !0;
                  }),
                  (u.onMouseEnter = (t) => {
                    v.ignoreEmulatedMouseEvents || l || e(t, "mouse"),
                      (v.ignoreEmulatedMouseEvents = !1);
                  }),
                  (u.onMouseLeave = (e) => {
                    !s && e.currentTarget.contains(e.target) && r(e, "mouse");
                  })),
              { hoverProps: u, triggerHoverEnd: r }
            );
          }, [t, n, a, s, v, p, g]);
        return (
          (0, u.useEffect)(() => {
            s && h({ currentTarget: v.target }, v.pointerType);
          }, [s]),
          { hoverProps: m, isHovered: c }
        );
      }
    },
    6445: function (e, t, n) {
      function r(e, t) {
        return !!t && !!e && e.contains(t);
      }
      n.d(t, {
        vY: function () {
          return o;
        },
        NI: function () {
          return i;
        },
        bE: function () {
          return r;
        },
      }),
        n(78837);
      let o = (e = document) => e.activeElement;
      function i(e) {
        return e.target;
      }
    },
    78837: function (e, t, n) {
      n.d(t, {
        Zq: function () {
          return i;
        },
        kR: function () {
          return o;
        },
        r3: function () {
          return r;
        },
      });
      let r = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        o = (e) =>
          e && "window" in e && e.window === e ? e : r(e).defaultView || window;
      function i(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "nodeType" in e &&
          "number" == typeof e.nodeType &&
          e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
          "host" in e
        );
      }
    },
    36116: function (e, t, n) {
      n.d(t, {
        x: function () {
          return o;
        },
      });
      var r = n(67294);
      function o() {
        let e = (0, r.useRef)(new Map()),
          t = (0, r.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once)
              ? (...t) => {
                  e.current.delete(r), r(...t);
                }
              : r;
            e.current.set(r, { type: n, eventTarget: t, fn: i, options: o }),
              t.addEventListener(n, i, o);
          }, []),
          n = (0, r.useCallback)((t, n, r, o) => {
            var i;
            let u =
              (null === (i = e.current.get(r)) || void 0 === i
                ? void 0
                : i.fn) || r;
            t.removeEventListener(n, u, o), e.current.delete(r);
          }, []),
          o = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options);
            });
          }, [n]);
        return (
          (0, r.useEffect)(() => o, [o]),
          {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: o,
          }
        );
      }
    },
    71237: function (e, t, n) {
      let r;
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var o =
        (((r = o || {}).Space = " "),
        (r.Enter = "Enter"),
        (r.Escape = "Escape"),
        (r.Backspace = "Backspace"),
        (r.Delete = "Delete"),
        (r.ArrowLeft = "ArrowLeft"),
        (r.ArrowUp = "ArrowUp"),
        (r.ArrowRight = "ArrowRight"),
        (r.ArrowDown = "ArrowDown"),
        (r.Home = "Home"),
        (r.End = "End"),
        (r.PageUp = "PageUp"),
        (r.PageDown = "PageDown"),
        (r.Tab = "Tab"),
        r);
    },
    23811: function (e, t, n) {
      n.d(t, {
        h_: function () {
          return T;
        },
        kF: function () {
          return y;
        },
        wA: function () {
          return w;
        },
      });
      var r = n(67294),
        o = n(73935),
        i = n(68354),
        u = n(57110),
        l = n(68916),
        a = n(99523),
        s = n(77563),
        c = n(40947),
        d = n(89834),
        f = n(83659),
        v = n(83619);
      let p = r.Fragment,
        g = (0, v.yV)(function (e, t) {
          let n = (0, r.useRef)(null),
            i = (0, c.T)(
              (0, c.h)((e) => {
                n.current = e;
              }),
              t
            ),
            g = (0, a.i)(n),
            m = (function (e) {
              let t = (0, d.n)(),
                n = (0, r.useContext)(h),
                o = (0, a.i)(e),
                [i, u] = (0, r.useState)(() => {
                  var e;
                  if (!t && null !== n)
                    return null != (e = n.current) ? e : null;
                  if (f.O.isServer) return null;
                  let r =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (r) return r;
                  if (null === o) return null;
                  let i = o.createElement("div");
                  return (
                    i.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(i)
                  );
                });
              return (
                (0, r.useEffect)(() => {
                  null !== i &&
                    ((null != o && o.body.contains(i)) ||
                      null == o ||
                      o.body.appendChild(i));
                }, [i, o]),
                (0, r.useEffect)(() => {
                  t || (null !== n && u(n.current));
                }, [n, u, t]),
                i
              );
            })(n),
            [y] = (0, r.useState)(() => {
              var e;
              return f.O.isServer
                ? null
                : null != (e = null == g ? void 0 : g.createElement("div"))
                ? e
                : null;
            }),
            b = (0, r.useContext)(E),
            w = (0, s.H)();
          (0, u.e)(() => {
            !m ||
              !y ||
              m.contains(y) ||
              (y.setAttribute("data-headlessui-portal", ""), m.appendChild(y));
          }, [m, y]),
            (0, u.e)(() => {
              if (y && b) return b.register(y);
            }, [b, y]),
            (0, l.L)(() => {
              var e;
              m &&
                y &&
                (y instanceof Node && m.contains(y) && m.removeChild(y),
                m.childNodes.length <= 0 &&
                  (null == (e = m.parentElement) || e.removeChild(m)));
            });
          let T = (0, v.L6)();
          return w && m && y
            ? (0, o.createPortal)(
                T({
                  ourProps: { ref: i },
                  theirProps: e,
                  slot: {},
                  defaultTag: p,
                  name: "Portal",
                }),
                y
              )
            : null;
        }),
        m = r.Fragment,
        h = (0, r.createContext)(null),
        E = (0, r.createContext)(null);
      function y() {
        let e = (0, r.useContext)(E),
          t = (0, r.useRef)([]),
          n = (0, i.z)(
            (n) => (t.current.push(n), e && e.register(n), () => o(n))
          ),
          o = (0, i.z)((n) => {
            let r = t.current.indexOf(n);
            -1 !== r && t.current.splice(r, 1), e && e.unregister(n);
          }),
          u = (0, r.useMemo)(
            () => ({ register: n, unregister: o, portals: t }),
            [n, o, t]
          );
        return [
          t,
          (0, r.useMemo)(
            () =>
              function (e) {
                let { children: t } = e;
                return r.createElement(E.Provider, { value: u }, t);
              },
            [u]
          ),
        ];
      }
      let b = (0, v.yV)(function (e, t) {
          let n = (0, c.T)(t),
            { enabled: o = !0, ...i } = e,
            u = (0, v.L6)();
          return o
            ? r.createElement(g, { ...i, ref: n })
            : u({
                ourProps: { ref: n },
                theirProps: i,
                slot: {},
                defaultTag: p,
                name: "Portal",
              });
        }),
        w = (0, v.yV)(function (e, t) {
          let { target: n, ...o } = e,
            i = { ref: (0, c.T)(t) },
            u = (0, v.L6)();
          return r.createElement(
            h.Provider,
            { value: n },
            u({
              ourProps: i,
              theirProps: o,
              defaultTag: m,
              name: "Popover.Group",
            })
          );
        }),
        T = Object.assign(b, { Group: w });
    },
    65448: function (e, t, n) {
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(67294),
        o = n(23233),
        i = n(5655),
        u = n(68354);
      function l() {
        let { disabled: e = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, r.useRef)(null),
          [n, l] = (0, r.useState)(!1),
          a = (0, i.G)(),
          s = (0, u.z)(() => {
            (t.current = null), l(!1), a.dispose();
          }),
          c = (0, u.z)((e) => {
            if ((a.dispose(), null === t.current)) {
              (t.current = e.currentTarget), l(!0);
              {
                let n = (0, o.r)(e.currentTarget);
                a.addEventListener(n, "pointerup", s, !1),
                  a.addEventListener(
                    n,
                    "pointermove",
                    (e) => {
                      if (t.current) {
                        var n, r;
                        let o, i;
                        l(
                          ((o = e.width / 2),
                          (i = e.height / 2),
                          (n = {
                            top: e.clientY - i,
                            right: e.clientX + o,
                            bottom: e.clientY + i,
                            left: e.clientX - o,
                          }),
                          (r = t.current.getBoundingClientRect()),
                          !(
                            !n ||
                            !r ||
                            n.right < r.left ||
                            n.left > r.right ||
                            n.bottom < r.top ||
                            n.top > r.bottom
                          ))
                        );
                      }
                    },
                    !1
                  ),
                  a.addEventListener(n, "pointercancel", s, !1);
              }
            }
          });
        return {
          pressed: n,
          pressProps: e ? {} : { onPointerDown: c, onPointerUp: s, onClick: s },
        };
      }
    },
    5655: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(61622);
      function i() {
        let [e] = (0, r.useState)(o.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    29408: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(57110);
      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          [n, i] = (0, r.useReducer)(() => ({}), {}),
          u = (0, r.useMemo)(
            () =>
              (function (e) {
                if (null === e) return { width: 0, height: 0 };
                let { width: t, height: n } = e.getBoundingClientRect();
                return { width: t, height: n };
              })(e),
            [e, n]
          );
        return (
          (0, o.e)(() => {
            if (!e) return;
            let t = new ResizeObserver(i);
            return (
              t.observe(e),
              () => {
                t.disconnect();
              }
            );
          }, [e]),
          t
            ? {
                width: "".concat(u.width, "px"),
                height: "".concat(u.height, "px"),
              }
            : u
        );
      }
    },
    68354: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(39438);
      let i = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback(
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.current(...n);
          },
          [t]
        );
      };
    },
    70494: function (e, t, n) {
      n.d(t, {
        g: function () {
          return s;
        },
      });
      var r = n(67294);
      class o extends Map {
        get(e) {
          let t = super.get(e);
          return void 0 === t && ((t = this.factory(e)), this.set(e, t)), t;
        }
        constructor(e) {
          super(), (this.factory = e);
        }
      }
      var i = n(95481),
        u = n(57110),
        l = n(83345);
      let a = new o(() =>
        (0, i.M)(() => [], {
          ADD(e) {
            return this.includes(e) ? this : [...this, e];
          },
          REMOVE(e) {
            let t = this.indexOf(e);
            if (-1 === t) return this;
            let n = this.slice();
            return n.splice(t, 1), n;
          },
        })
      );
      function s(e, t) {
        let n = a.get(t),
          o = (0, r.useId)(),
          i = (0, l.o)(n);
        if (
          ((0, u.e)(() => {
            if (e) return n.dispatch("ADD", o), () => n.dispatch("REMOVE", o);
          }, [n, e]),
          !e)
        )
          return !1;
        let s = i.indexOf(o),
          c = i.length;
        return -1 === s && ((s = c), (c += 1)), s === c - 1;
      }
    },
    57110: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(83659);
      let i = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    39438: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(57110);
      function i(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    54555: function (e, t, n) {
      n.d(t, {
        m: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(61622),
        i = n(39438);
      function u(e, t, n) {
        let u = (0, i.E)((e) => {
          let t = e.getBoundingClientRect();
          0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && n();
        });
        (0, r.useEffect)(() => {
          if (!e) return;
          let n = null === t ? null : t instanceof HTMLElement ? t : t.current;
          if (!n) return;
          let r = (0, o.k)();
          if ("undefined" != typeof ResizeObserver) {
            let e = new ResizeObserver(() => u.current(n));
            e.observe(n), r.add(() => e.disconnect());
          }
          if ("undefined" != typeof IntersectionObserver) {
            let e = new IntersectionObserver(() => u.current(n));
            e.observe(n), r.add(() => e.disconnect());
          }
          return () => r.dispose();
        }, [t, u, e]);
      }
    },
    68916: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(27378),
        i = n(68354);
      function u(e) {
        let t = (0, i.z)(e),
          n = (0, r.useRef)(!1);
        (0, r.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, o.Y)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
    },
    382: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
      });
      var r = n(67294),
        o = n(58766),
        i = n(66061),
        u = n(39438);
      function l(e, t, n, o) {
        let i = (0, u.E)(n);
        (0, r.useEffect)(() => {
          if (e)
            return (
              document.addEventListener(t, n, o),
              () => document.removeEventListener(t, n, o)
            );
          function n(e) {
            i.current(e);
          }
        }, [e, t, o]);
      }
      var a = n(70494),
        s = n(5495);
      function c(e, t, n) {
        let c = (0, a.g)(e, "outside-click"),
          d = (0, u.E)(n),
          f = (0, r.useCallback)(
            function (e, n) {
              if (e.defaultPrevented) return;
              let r = n(e);
              if (null !== r && r.getRootNode().contains(r) && r.isConnected) {
                for (let n of (function e(t) {
                  return "function" == typeof t
                    ? e(t())
                    : Array.isArray(t) || t instanceof Set
                    ? t
                    : [t];
                })(t))
                  if (
                    null !== n &&
                    (n.contains(r) ||
                      (e.composed && e.composedPath().includes(n)))
                  )
                    return;
                return (
                  (0, o.sP)(r, o.tJ.Loose) ||
                    -1 === r.tabIndex ||
                    e.preventDefault(),
                  d.current(e, r)
                );
              }
            },
            [d, t]
          ),
          v = (0, r.useRef)(null);
        l(
          c,
          "pointerdown",
          (e) => {
            var t, n;
            v.current =
              (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                ? void 0
                : n[0]) || e.target;
          },
          !0
        ),
          l(
            c,
            "mousedown",
            (e) => {
              var t, n;
              v.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target;
            },
            !0
          ),
          l(
            c,
            "click",
            (e) => {
              (0, i.tq)() ||
                (v.current && (f(e, () => v.current), (v.current = null)));
            },
            !0
          );
        let p = (0, r.useRef)({ x: 0, y: 0 });
        l(
          c,
          "touchstart",
          (e) => {
            (p.current.x = e.touches[0].clientX),
              (p.current.y = e.touches[0].clientY);
          },
          !0
        ),
          l(
            c,
            "touchend",
            (e) => {
              let t = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
              };
              if (
                !(
                  Math.abs(t.x - p.current.x) >= 30 ||
                  Math.abs(t.y - p.current.y) >= 30
                )
              )
                return f(e, () =>
                  e.target instanceof HTMLElement ? e.target : null
                );
            },
            !0
          ),
          (0, s.s)(
            c,
            "blur",
            (e) =>
              f(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    99523: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(23233);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.useMemo)(() => (0, o.r)(...t), [...t]);
      }
    },
    91034: function (e, t, n) {
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var r = n(67294);
      function o(e, t) {
        return (0, r.useMemo)(() => {
          var n;
          if (e.type) return e.type;
          let r = null != (n = e.as) ? n : "button";
          if (
            ("string" == typeof r && "button" === r.toLowerCase()) ||
            ((null == t ? void 0 : t.tagName) === "BUTTON" &&
              !t.hasAttribute("type"))
          )
            return "button";
        }, [e.type, e.as, t]);
      }
    },
    99915: function (e, t, n) {
      n.d(t, {
        P: function () {
          return c;
        },
      });
      var r = n(83345),
        o = n(57110),
        i = n(61622),
        u = n(95481),
        l = n(66061);
      let a = (0, u.M)(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r =
            null != (n = this.get(e))
              ? n
              : { doc: e, count: 0, d: (0, i.k)(), meta: new Set() };
          return r.count++, r.meta.add(t), this.set(e, r), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT(e) {
          let t,
            { doc: n, d: r, meta: o } = e,
            u = {
              doc: n,
              d: r,
              meta: (function (e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t;
              })(o),
            },
            a = [
              (0, l.gn)()
                ? {
                    before(e) {
                      let { doc: t, d: n, meta: r } = e;
                      function o(e) {
                        return r.containers
                          .flatMap((e) => e())
                          .some((t) => t.contains(e));
                      }
                      n.microTask(() => {
                        var e;
                        if (
                          "auto" !==
                          window.getComputedStyle(t.documentElement)
                            .scrollBehavior
                        ) {
                          let e = (0, i.k)();
                          e.style(t.documentElement, "scrollBehavior", "auto"),
                            n.add(() => n.microTask(() => e.dispose()));
                        }
                        let r =
                            null != (e = window.scrollY)
                              ? e
                              : window.pageYOffset,
                          u = null;
                        n.addEventListener(
                          t,
                          "click",
                          (e) => {
                            if (e.target instanceof HTMLElement)
                              try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let { hash: r } = new URL(n.href),
                                  i = t.querySelector(r);
                                i && !o(i) && (u = i);
                              } catch (e) {}
                          },
                          !0
                        ),
                          n.addEventListener(t, "touchstart", (e) => {
                            if (e.target instanceof HTMLElement) {
                              if (o(e.target)) {
                                let t = e.target;
                                for (; t.parentElement && o(t.parentElement); )
                                  t = t.parentElement;
                                n.style(t, "overscrollBehavior", "contain");
                              } else n.style(e.target, "touchAction", "none");
                            }
                          }),
                          n.addEventListener(
                            t,
                            "touchmove",
                            (e) => {
                              if (
                                e.target instanceof HTMLElement &&
                                "INPUT" !== e.target.tagName
                              ) {
                                if (o(e.target)) {
                                  let t = e.target;
                                  for (
                                    ;
                                    t.parentElement &&
                                    "" !== t.dataset.headlessuiPortal &&
                                    !(
                                      t.scrollHeight > t.clientHeight ||
                                      t.scrollWidth > t.clientWidth
                                    );

                                  )
                                    t = t.parentElement;
                                  "" === t.dataset.headlessuiPortal &&
                                    e.preventDefault();
                                } else e.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          n.add(() => {
                            var e;
                            r !==
                              (null != (e = window.scrollY)
                                ? e
                                : window.pageYOffset) && window.scrollTo(0, r),
                              u &&
                                u.isConnected &&
                                (u.scrollIntoView({ block: "nearest" }),
                                (u = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(e) {
                  var n;
                  let { doc: r } = e,
                    o = r.documentElement;
                  t = Math.max(
                    0,
                    (null != (n = r.defaultView) ? n : window).innerWidth -
                      o.clientWidth
                  );
                },
                after(e) {
                  let { doc: n, d: r } = e,
                    o = n.documentElement,
                    i = Math.max(0, o.clientWidth - o.offsetWidth),
                    u = Math.max(0, t - i);
                  r.style(o, "paddingRight", "".concat(u, "px"));
                },
              },
              {
                before(e) {
                  let { doc: t, d: n } = e;
                  n.style(t.documentElement, "overflow", "hidden");
                },
              },
            ];
          a.forEach((e) => {
            let { before: t } = e;
            return null == t ? void 0 : t(u);
          }),
            a.forEach((e) => {
              let { after: t } = e;
              return null == t ? void 0 : t(u);
            });
        },
        SCROLL_ALLOW(e) {
          let { d: t } = e;
          t.dispose();
        },
        TEARDOWN(e) {
          let { doc: t } = e;
          this.delete(t);
        },
      });
      a.subscribe(() => {
        let e = a.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            a.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && a.dispatch("TEARDOWN", n);
        }
      });
      var s = n(70494);
      function c(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => [document.body];
        !(function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : () => ({ containers: [] }),
            i = (0, r.o)(a),
            u = t ? i.get(t) : void 0;
          u && u.count,
            (0, o.e)(() => {
              if (!(!t || !e))
                return a.dispatch("PUSH", t, n), () => a.dispatch("POP", t, n);
            }, [e, t]);
        })((0, s.g)(e, "scroll-lock"), t, (e) => {
          var t;
          return { containers: [...(null != (t = e.containers) ? t : []), n] };
        });
      }
    },
    77563: function (e, t, n) {
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r,
        o = n(67294),
        i = n(83659);
      function u() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [u, l] = o.useState(i.O.isHandoffComplete);
        return (
          u && !1 === i.O.isHandoffComplete && l(!1),
          o.useEffect(() => {
            !0 !== u && l(!0);
          }, [u]),
          o.useEffect(() => i.O.handoff(), []),
          !t && u
        );
      }
    },
    83345: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var r = n(67294);
      function o(e) {
        return (0, r.useSyncExternalStore)(
          e.subscribe,
          e.getSnapshot,
          e.getSnapshot
        );
      }
    },
    40947: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
        h: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(68354);
      let i = Symbol();
      function u(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(e, { [i]: t });
      }
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let u = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          u.current = t;
        }, [t]);
        let l = (0, o.z)((e) => {
          for (let t of u.current)
            null != t && ("function" == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[i]))
          ? void 0
          : l;
      }
    },
    2015: function (e, t, n) {
      let r;
      n.d(t, {
        X: function () {
          return f;
        },
        Y: function () {
          return v;
        },
      });
      var o,
        i,
        u = n(67294),
        l = n(61622),
        a = n(5655),
        s = n(57110),
        c = n(34155);
      void 0 !== c &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (o = null == c ? void 0 : c.env) ? void 0 : o.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (i = null == Element ? void 0 : Element.prototype)
            ? void 0
            : i.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"
            ),
            []
          );
        });
      var d =
        (((r = d || {})[(r.None = 0)] = "None"),
        (r[(r.Closed = 1)] = "Closed"),
        (r[(r.Enter = 2)] = "Enter"),
        (r[(r.Leave = 4)] = "Leave"),
        r);
      function f(e) {
        let t = {};
        for (let n in e) !0 === e[n] && (t["data-".concat(n)] = "");
        return t;
      }
      function v(e, t, n, r) {
        let [o, i] = (0, u.useState)(n),
          {
            hasFlag: c,
            addFlag: d,
            removeFlag: f,
          } = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              [t, n] = (0, u.useState)(e),
              r = (0, u.useCallback)((e) => n(e), [t]),
              o = (0, u.useCallback)((e) => n((t) => t | e), [t]),
              i = (0, u.useCallback)((e) => (t & e) === e, [t]);
            return {
              flags: t,
              setFlag: r,
              addFlag: o,
              hasFlag: i,
              removeFlag: (0, u.useCallback)((e) => n((t) => t & ~e), [n]),
              toggleFlag: (0, u.useCallback)((e) => n((t) => t ^ e), [n]),
            };
          })(e && o ? 3 : 0),
          v = (0, u.useRef)(!1),
          p = (0, u.useRef)(!1),
          g = (0, a.G)();
        return (
          (0, s.e)(() => {
            var o;
            if (e) {
              if ((n && i(!0), !t)) {
                n && d(3);
                return;
              }
              return (
                null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                (function (e, t) {
                  let { prepare: n, run: r, done: o, inFlight: i } = t,
                    u = (0, l.k)();
                  return (
                    (function (e, t) {
                      let { inFlight: n, prepare: r } = t;
                      if (null != n && n.current) {
                        r();
                        return;
                      }
                      let o = e.style.transition;
                      (e.style.transition = "none"),
                        r(),
                        e.offsetHeight,
                        (e.style.transition = o);
                    })(e, { prepare: n, inFlight: i }),
                    u.nextFrame(() => {
                      r(),
                        u.requestAnimationFrame(() => {
                          u.add(
                            (function (e, t) {
                              var n, r;
                              let o = (0, l.k)();
                              if (!e) return o.dispose;
                              let i = !1;
                              o.add(() => {
                                i = !0;
                              });
                              let u =
                                null !=
                                (r =
                                  null == (n = e.getAnimations)
                                    ? void 0
                                    : n
                                        .call(e)
                                        .filter(
                                          (e) => e instanceof CSSTransition
                                        ))
                                  ? r
                                  : [];
                              return (
                                0 === u.length
                                  ? t()
                                  : Promise.allSettled(
                                      u.map((e) => e.finished)
                                    ).then(() => {
                                      i || t();
                                    }),
                                o.dispose
                              );
                            })(e, o)
                          );
                        });
                    }),
                    u.dispose
                  );
                })(t, {
                  inFlight: v,
                  prepare() {
                    p.current ? (p.current = !1) : (p.current = v.current),
                      (v.current = !0),
                      p.current || (n ? (d(3), f(4)) : (d(4), f(2)));
                  },
                  run() {
                    p.current
                      ? n
                        ? (f(3), d(4))
                        : (f(4), d(3))
                      : n
                      ? f(1)
                      : d(1);
                  },
                  done() {
                    var e;
                    (p.current &&
                      "function" == typeof t.getAnimations &&
                      t.getAnimations().length > 0) ||
                      ((v.current = !1),
                      f(7),
                      n || i(!1),
                      null == (e = null == r ? void 0 : r.end) || e.call(r, n));
                  },
                })
              );
            }
          }, [e, n, t, g]),
          e
            ? [
                o,
                {
                  closed: c(1),
                  enter: c(2),
                  leave: c(4),
                  transition: c(2) || c(4),
                },
              ]
            : [
                n,
                {
                  closed: void 0,
                  enter: void 0,
                  leave: void 0,
                  transition: void 0,
                },
              ]
        );
      }
    },
    5495: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(39438);
      function i(e, t, n, i) {
        let u = (0, o.E)(n);
        (0, r.useEffect)(() => {
          if (e)
            return (
              window.addEventListener(t, n, i),
              () => window.removeEventListener(t, n, i)
            );
          function n(e) {
            u.current(e);
          }
        }, [e, t, i]);
      }
    },
    95086: function (e, t, n) {
      n.d(t, {
        AZ: function () {
          return v;
        },
        ES: function () {
          return m;
        },
        HO: function () {
          return h;
        },
        L: function () {
          return p;
        },
        U8: function () {
          return g;
        },
        Vy: function () {
          return f;
        },
      });
      var r = n(93075),
        o = n(1371),
        i = n(29545),
        u = n(67294),
        l = n(5655),
        a = n(68354),
        s = n(57110);
      let c = (0, u.createContext)({
        styles: void 0,
        setReference: () => {},
        setFloating: () => {},
        getReferenceProps: () => ({}),
        getFloatingProps: () => ({}),
        slot: {},
      });
      c.displayName = "FloatingContext";
      let d = (0, u.createContext)(null);
      function f(e) {
        return (0, u.useMemo)(
          () => (e ? ("string" == typeof e ? { to: e } : e) : null),
          [e]
        );
      }
      function v() {
        return (0, u.useContext)(c).setReference;
      }
      function p() {
        return (0, u.useContext)(c).getReferenceProps;
      }
      function g() {
        let { getFloatingProps: e, slot: t } = (0, u.useContext)(c);
        return (0, u.useCallback)(
          function () {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return Object.assign({}, e(...r), { "data-anchor": t.anchor });
          },
          [e, t]
        );
      }
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !1 === e && (e = null), "string" == typeof e && (e = { to: e });
        let t = (0, u.useContext)(d),
          n = (0, u.useMemo)(
            () => e,
            [
              JSON.stringify(e, (e, t) => {
                var n;
                return null != (n = null == t ? void 0 : t.outerHTML) ? n : t;
              }),
            ]
          );
        (0, s.e)(() => {
          null == t || t(null != n ? n : null);
        }, [t, n]);
        let r = (0, u.useContext)(c);
        return (0, u.useMemo)(
          () => [r.setFloating, e ? r.styles : {}],
          [r.setFloating, e, r.styles]
        );
      }
      function h(e) {
        var t, n, l;
        let f,
          v,
          p,
          { children: g, enabled: m = !0 } = e,
          [h, y] = (0, u.useState)(null),
          [b, w] = (0, u.useState)(0),
          T = (0, u.useRef)(null),
          [L, P] = (0, u.useState)(null);
        (0, s.e)(() => {
          if (!L) return;
          let e = new MutationObserver(() => {
            let e = window.getComputedStyle(L).maxHeight,
              t = parseFloat(e);
            if (isNaN(t)) return;
            let n = parseInt(e);
            isNaN(n) ||
              (t !== n && (L.style.maxHeight = "".concat(Math.ceil(t), "px")));
          });
          return (
            e.observe(L, { attributes: !0, attributeFilter: ["style"] }),
            () => {
              e.disconnect();
            }
          );
        }, [L]);
        let F = m && null !== h && null !== L,
          {
            to: A = "bottom",
            gap: C = 0,
            offset: x = 0,
            padding: S = 0,
            inner: M,
          } = ((f = E(
            null != (t = null == h ? void 0 : h.gap)
              ? t
              : "var(--anchor-gap, 0)",
            L
          )),
          (v = E(
            null != (n = null == h ? void 0 : h.offset)
              ? n
              : "var(--anchor-offset, 0)",
            L
          )),
          (p = E(
            null != (l = null == h ? void 0 : h.padding)
              ? l
              : "var(--anchor-padding, 0)",
            L
          )),
          { ...h, gap: f, offset: v, padding: p }),
          [k, O = "center"] = A.split(" ");
        (0, s.e)(() => {
          F && w(0);
        }, [F]);
        let {
            refs: N,
            floatingStyles: R,
            context: H,
          } = (0, r.YF)({
            open: F,
            placement:
              "selection" === k
                ? "center" === O
                  ? "bottom"
                  : "bottom-".concat(O)
                : "center" === O
                ? "".concat(k)
                : "".concat(k, "-").concat(O),
            strategy: "absolute",
            transform: !1,
            middleware: [
              (0, o.cv)({ mainAxis: "selection" === k ? 0 : C, crossAxis: x }),
              (0, o.uY)({ padding: S }),
              "selection" !== k && (0, o.RR)({ padding: S }),
              "selection" === k && M
                ? (0, r.aN)({
                    ...M,
                    padding: S,
                    overflowRef: T,
                    offset: b,
                    minItemsVisible: 4,
                    referenceOverflowThreshold: S,
                    onFallbackChange(e) {
                      var t, n;
                      if (!e) return;
                      let r = H.elements.floating;
                      if (!r) return;
                      let o =
                          parseFloat(getComputedStyle(r).scrollPaddingBottom) ||
                          0,
                        i = Math.min(4, r.childElementCount),
                        u = 0,
                        l = 0;
                      for (let e of null !=
                      (n =
                        null == (t = H.elements.floating)
                          ? void 0
                          : t.childNodes)
                        ? n
                        : [])
                        if (e instanceof HTMLElement) {
                          let t = e.offsetTop,
                            n = t + e.clientHeight + o,
                            a = r.scrollTop,
                            s = a + r.clientHeight;
                          if (t >= a && n <= s) i--;
                          else {
                            (l = Math.max(0, Math.min(n, s) - Math.max(t, a))),
                              (u = e.clientHeight);
                            break;
                          }
                        }
                      i >= 1 &&
                        w((e) => {
                          let t = u * i - l + o;
                          return e >= t ? e : t;
                        });
                    },
                  })
                : null,
              (0, o.dp)({
                padding: S,
                apply(e) {
                  let {
                    availableWidth: t,
                    availableHeight: n,
                    elements: r,
                  } = e;
                  Object.assign(r.floating.style, {
                    overflow: "auto",
                    maxWidth: "".concat(t, "px"),
                    maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(
                      n,
                      "px)"
                    ),
                  });
                },
              }),
            ].filter(Boolean),
            whileElementsMounted: i.Me,
          }),
          [D = k, I = O] = H.placement.split("-");
        "selection" === k && (D = "selection");
        let j = (0, u.useMemo)(
            () => ({ anchor: [D, I].filter(Boolean).join(" ") }),
            [D, I]
          ),
          W = (0, r.Rz)(H, { overflowRef: T, onChange: w }),
          { getReferenceProps: V, getFloatingProps: _ } = (0, r.NI)([W]),
          G = (0, a.z)((e) => {
            P(e), N.setFloating(e);
          });
        return u.createElement(
          d.Provider,
          { value: y },
          u.createElement(
            c.Provider,
            {
              value: {
                setFloating: G,
                setReference: N.setReference,
                styles: R,
                getReferenceProps: V,
                getFloatingProps: _,
                slot: j,
              },
            },
            g
          )
        );
      }
      function E(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          r = (0, l.G)(),
          o = (0, a.z)((e, t) => {
            if (null == e) return [n, null];
            if ("number" == typeof e) return [e, null];
            if ("string" == typeof e) {
              if (!t) return [n, null];
              let o = y(e, t);
              return [
                o,
                (n) => {
                  let i = (function e(t) {
                    let n = /var\((.*)\)/.exec(t);
                    if (n) {
                      let t = n[1].indexOf(",");
                      if (-1 === t) return [n[1]];
                      let r = n[1].slice(0, t).trim(),
                        o = n[1].slice(t + 1).trim();
                      return o ? [r, ...e(o)] : [r];
                    }
                    return [];
                  })(e);
                  {
                    let u = i.map((e) =>
                      window.getComputedStyle(t).getPropertyValue(e)
                    );
                    r.requestAnimationFrame(function l() {
                      r.nextFrame(l);
                      let a = !1;
                      for (let [e, n] of i.entries()) {
                        let r = window.getComputedStyle(t).getPropertyValue(n);
                        if (u[e] !== r) {
                          (u[e] = r), (a = !0);
                          break;
                        }
                      }
                      if (!a) return;
                      let s = y(e, t);
                      o !== s && (n(s), (o = s));
                    });
                  }
                  return r.dispose;
                },
              ];
            }
            return [n, null];
          }),
          i = (0, u.useMemo)(() => o(e, t)[0], [e, t]),
          [c = i, d] = (0, u.useState)();
        return (
          (0, s.e)(() => {
            let [n, r] = o(e, t);
            if ((d(n), r)) return r(d);
          }, [e, t]),
          c
        );
      }
      function y(e, t) {
        let n = document.createElement("div");
        t.appendChild(n),
          n.style.setProperty("margin-top", "0px", "important"),
          n.style.setProperty("margin-top", e, "important");
        let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
        return t.removeChild(n), r;
      }
      d.displayName = "PlacementContext";
    },
    51228: function (e, t, n) {
      let r;
      n.d(t, {
        _: function () {
          return u;
        },
        x: function () {
          return i;
        },
      });
      var o = n(83619),
        i =
          (((r = i || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let u = (0, o.yV)(function (e, t) {
        var n;
        let { features: r = 1, ...i } = e,
          u = {
            ref: t,
            "aria-hidden":
              (2 & r) == 2 || (null != (n = i["aria-hidden"]) ? n : void 0),
            hidden: (4 & r) == 4 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
            },
          };
        return (0, o.L6)()({
          ourProps: u,
          theirProps: i,
          slot: {},
          defaultTag: "span",
          name: "Hidden",
        });
      });
    },
    1365: function (e, t, n) {
      let r;
      n.d(t, {
        ZM: function () {
          return u;
        },
        oJ: function () {
          return l;
        },
        up: function () {
          return a;
        },
        uu: function () {
          return s;
        },
      });
      var o = n(67294);
      let i = (0, o.createContext)(null);
      i.displayName = "OpenClosedContext";
      var u =
        (((r = u || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function l() {
        return (0, o.useContext)(i);
      }
      function a(e) {
        let { value: t, children: n } = e;
        return o.createElement(i.Provider, { value: t }, n);
      }
      function s(e) {
        let { children: t } = e;
        return o.createElement(i.Provider, { value: null }, t);
      }
    },
    89834: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
        n: function () {
          return i;
        },
      });
      var r = n(67294);
      let o = (0, r.createContext)(!1);
      function i() {
        return (0, r.useContext)(o);
      }
      function u(e) {
        return r.createElement(o.Provider, { value: e.force }, e.children);
      }
    },
    67257: function (e, t, n) {
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    51573: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Array.from(
          new Set(t.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    61622: function (e, t, n) {
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, o) => (
                  e.addEventListener(t, r, o),
                  n.add(() => e.removeEventListener(t, r, o))
                ),
                requestAnimationFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let o = requestAnimationFrame(...t);
                  return n.add(() => cancelAnimationFrame(o));
                },
                nextFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return n.requestAnimationFrame(() =>
                    n.requestAnimationFrame(...t)
                  );
                },
                setTimeout() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let o = setTimeout(...t);
                  return n.add(() => clearTimeout(o));
                },
                microTask() {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  let i = { current: !0 };
                  return (
                    (0, r.Y)(() => {
                      i.current && t[0]();
                    }),
                    n.add(() => {
                      i.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.includes(e) || t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
      var r = n(27378);
    },
    83659: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        i = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u {
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof document ? "server" : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          i(this, "current", this.detect()),
            i(this, "handoffState", "pending"),
            i(this, "currentId", 0);
        }
      }
      let l = new u();
    },
    58766: function (e, t, n) {
      let r, o, i, u, l;
      n.d(t, {
        C5: function () {
          return y;
        },
        EO: function () {
          return w;
        },
        GO: function () {
          return g;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return v;
        },
        jA: function () {
          return T;
        },
        sP: function () {
          return h;
        },
        tJ: function () {
          return m;
        },
        y: function () {
          return c;
        },
        z2: function () {
          return b;
        },
      });
      var a = n(16116),
        s = n(23233);
      let c = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map((e) => "".concat(e, ":not([tabindex='-1'])"))
          .join(","),
        d = ["[data-autofocus]"]
          .map((e) => "".concat(e, ":not([tabindex='-1'])"))
          .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          (r[(r.AutoFocus = 64)] = "AutoFocus"),
          r),
        v =
          (((o = v || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        p =
          (((i = p || {})[(i.Previous = -1)] = "Previous"),
          (i[(i.Next = 1)] = "Next"),
          i);
      function g() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == e
          ? []
          : Array.from(e.querySelectorAll(c)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var m =
        (((u = m || {})[(u.Strict = 0)] = "Strict"),
        (u[(u.Loose = 1)] = "Loose"),
        u);
      function h(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (t = (0, s.r)(e)) ? void 0 : t.body) &&
          (0, a.E)(n, {
            0: () => e.matches(c),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(c)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      var E =
        (((l = E || {})[(l.Keyboard = 0)] = "Keyboard"),
        (l[(l.Mouse = 1)] = "Mouse"),
        l);
      function y(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function b(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e) => e;
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let i = r.compareDocumentPosition(o);
          return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function w(e, t) {
        return T(g(), t, { relativeTo: e });
      }
      function T(e, t) {
        var n, r, o;
        let {
            sorted: i = !0,
            relativeTo: u = null,
            skipElements: l = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e)
            ? i
              ? b(e)
              : e
            : 64 & t
            ? (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(d)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e)
            : g(e);
        l.length > 0 &&
          s.length > 1 &&
          (s = s.filter(
            (e) =>
              !l.some((t) =>
                null != t && "current" in t
                  ? (null == t ? void 0 : t.current) === e
                  : t === e
              )
          )),
          (u = null != u ? u : a.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(u)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(u)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          v = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = s.length,
          h;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = f + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (h = s[e]) || h.focus(v), (p += c);
        } while (h !== a.activeElement);
        return (
          6 & t &&
            null !=
              (o =
                null == (r = null == (n = h) ? void 0 : n.matches)
                  ? void 0
                  : r.call(n, "textarea,input")) &&
            o &&
            h.select(),
          2
        );
      }
      "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    16116: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      function r(e, t) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...o) : n;
        }
        let u = Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map((e) => '"'.concat(e, '"'))
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(u, r), u);
      }
    },
    27378: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
    },
    23233: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(83659);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    66061: function (e, t, n) {
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function o() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return o;
        },
      });
    },
    83619: function (e, t, n) {
      let r, o;
      n.d(t, {
        L6: function () {
          return c;
        },
        VN: function () {
          return a;
        },
        dG: function () {
          return p;
        },
        l4: function () {
          return s;
        },
        oA: function () {
          return m;
        },
        yV: function () {
          return g;
        },
      });
      var i = n(67294),
        u = n(51573),
        l = n(16116),
        a =
          (((r = a || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c() {
        let e, t;
        let n =
          ((e = (0, i.useRef)([])),
          (t = (0, i.useCallback)((t) => {
            for (let n of e.current)
              null != n && ("function" == typeof n ? n(t) : (n.current = t));
          }, [])),
          function () {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            if (!r.every((e) => null == e)) return (e.current = r), t;
          });
        return (0, i.useCallback)(
          (e) =>
            (function (e) {
              let {
                ourProps: t,
                theirProps: n,
                slot: r,
                defaultTag: o,
                features: i,
                visible: u = !0,
                name: a,
                mergeRefs: s,
              } = e;
              s = null != s ? s : f;
              let c = v(n, t);
              if (u) return d(c, r, o, a, s);
              let p = null != i ? i : 0;
              if (2 & p) {
                let { static: e = !1, ...t } = c;
                if (e) return d(t, r, o, a, s);
              }
              if (1 & p) {
                let { unmount: e = !0, ...t } = c;
                return (0, l.E)(e ? 0 : 1, {
                  0: () => null,
                  1: () =>
                    d(
                      { ...t, hidden: !0, style: { display: "none" } },
                      r,
                      o,
                      a,
                      s
                    ),
                });
              }
              return d(c, r, o, a, s);
            })({ mergeRefs: n, ...e }),
          [n]
        );
      }
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: l = n,
            children: a,
            refName: s = "ref",
            ...c
          } = h(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [s]: e.ref } : {},
          f = "function" == typeof a ? a(t) : a;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t)),
          c["aria-labelledby"] &&
            c["aria-labelledby"] === c.id &&
            (c["aria-labelledby"] = void 0);
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0),
              !0 === o &&
                n.push(
                  r.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase()))
                );
          if (e)
            for (let e of ((p["data-headlessui-state"] = n.join(" ")), n))
              p["data-".concat(e)] = "";
        }
        if (
          l === i.Fragment &&
          (Object.keys(m(c)).length > 0 || Object.keys(m(p)).length > 0)
        ) {
          if (!(0, i.isValidElement)(f) || (Array.isArray(f) && f.length > 1)) {
            if (Object.keys(m(c)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  "The current component <".concat(
                    r,
                    ' /> is rendering a "Fragment".'
                  ),
                  "However we need to passthrough the following props:",
                  Object.keys(m(c))
                    .concat(Object.keys(m(p)))
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ]
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                ].join("\n")
              );
          } else {
            let e = f.props,
              t = null == e ? void 0 : e.className,
              n =
                "function" == typeof t
                  ? function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return (0, u.A)(t(...n), c.className);
                    }
                  : (0, u.A)(t, c.className),
              r = v(f.props, m(h(c, ["ref"])));
            for (let e in p) e in r && delete p[e];
            return (0, i.cloneElement)(
              f,
              Object.assign(
                {},
                r,
                p,
                d,
                {
                  ref: o(
                    i.version.split(".")[0] >= "19" ? f.props.ref : f.ref,
                    d.ref
                  ),
                },
                n ? { className: n } : {}
              )
            );
          }
        }
        return (0, i.createElement)(
          l,
          Object.assign(
            {},
            h(c, ["ref"]),
            l !== i.Fragment && d,
            l !== i.Fragment && p
          ),
          f
        );
      }
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.every((e) => null == e)
          ? void 0
          : (e) => {
              for (let n of t)
                null != n && ("function" == typeof n ? n(e) : (n.current = e));
            };
      }
      function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          o = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != o[t] || (o[t] = []), o[t].push(e[t]))
              : (r[t] = e[t]);
        if (r.disabled || r["aria-disabled"])
          for (let e in o)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (o[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault)
                    ? void 0
                    : t.call(e);
                },
              ]);
        for (let e in o)
          Object.assign(r, {
            [e](t) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              for (let n of o[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                n(t, ...r);
              }
            },
          });
        return r;
      }
      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          o = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != o[t] || (o[t] = []), o[t].push(e[t]))
              : (r[t] = e[t]);
        for (let e in o)
          Object.assign(r, {
            [e]() {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              for (let t of o[e]) null == t || t(...n);
            },
          });
        return r;
      }
      function g(e) {
        var t;
        return Object.assign((0, i.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    95481: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e) {
            for (
              var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), u = 1;
              u < o;
              u++
            )
              i[u - 1] = arguments[u];
            let l = t[e].call(n, ...i);
            l && ((n = l), r.forEach((e) => e()));
          },
        };
      }
    },
  },
]);
