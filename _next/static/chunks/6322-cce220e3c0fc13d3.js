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
      (e._sentryDebugIds[t] = "8f3e729c-1e44-40bc-a72d-6fbfb9e89ea8"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8f3e729c-1e44-40bc-a72d-6fbfb9e89ea8"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6322],
  {
    23541: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return s;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        l = function (e) {
          return e && (e.host || l(e.parentNode));
        },
        u = function (e, t, n, u) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = l(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var c = i[n],
            d = [],
            f = new Set(),
            p = new Set(s),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          s.forEach(m);
          var v = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) v(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      i = null !== t && "false" !== t,
                      a = (r.get(e) || 0) + 1,
                      l = (c.get(e) || 0) + 1;
                    r.set(e, a),
                      c.set(e, l),
                      d.push(e),
                      1 === a && i && o.set(e, !0),
                      1 === l && e.setAttribute(n, "true"),
                      i || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            v(t),
            f.clear(),
            a++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = c.get(e) - 1;
                r.set(e, t),
                  c.set(e, i),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --a ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              u(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    25360: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(85893);
      function i(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let a = r.createContext(i),
                l = n.length;
              n = [...n, i];
              let u = (t) => {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e]?.[l] || a,
                  c = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[l] || a,
                      s = r.useContext(u);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    27552: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(67294),
        o = 0;
      function i() {
        r.useEffect(() => {
          let e = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? a()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? a()),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    91276: function (e, t, n) {
      n.d(t, {
        M: function () {
          return u;
        },
      });
      var r,
        o = n(67294),
        i = n(9981),
        a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, n] = o.useState(a());
        return (
          (0, i.b)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    86322: function (e, t, n) {
      let r;
      n.d(t, {
        Eh: function () {
          return tP;
        },
        VY: function () {
          return tN;
        },
        J2: function () {
          return ta;
        },
        xp: function () {
          return tb;
        },
        yk: function () {
          return tv;
        },
        i9: function () {
          return tp;
        },
        xo: function () {
          return ts;
        },
        fC: function () {
          return tC;
        },
        xz: function () {
          return tR;
        },
      });
      var o,
        i = n(67294);
      function a(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function l(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function u(...e) {
        return i.useCallback(l(...e), e);
      }
      var s = n(25360);
      function c(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var d = n(73935);
      function f(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function p(...e) {
        return i.useCallback(f(...e), e);
      }
      var m = n(85893),
        v = i.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            o = i.Children.toArray(n),
            a = o.find(g);
          if (a) {
            let e = a.props.children,
              n = o.map((t) =>
                t !== a
                  ? t
                  : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : i.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, m.jsx)(h, {
              ...r,
              ref: t,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, m.jsx)(h, { ...r, ref: t, children: n });
        });
      v.displayName = "Slot";
      var h = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? f(t, a) : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      h.displayName = "SlotClone";
      var y = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function g(e) {
        return i.isValidElement(e) && e.type === y;
      }
      var w = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? v : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        b = n(79698),
        E = n(78724),
        x = "dismissableLayer.update",
        C = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        R = i.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: r,
              onPointerDownOutside: a,
              onFocusOutside: l,
              onInteractOutside: u,
              onDismiss: s,
              ...d
            } = e,
            f = i.useContext(C),
            [v, h] = i.useState(null),
            y = v?.ownerDocument ?? globalThis?.document,
            [, g] = i.useState({}),
            R = p(t, (e) => h(e)),
            j = Array.from(f.layers),
            [A] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = j.indexOf(A),
            O = v ? j.indexOf(v) : -1,
            W = f.layersWithOutsidePointerEventsDisabled.size > 0,
            D = O >= S,
            k = (function (e, t = globalThis?.document) {
              let n = (0, b.W)(e),
                r = i.useRef(!1),
                o = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            P("dismissableLayer.pointerDownOutside", n, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = r),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : r();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...f.branches].some((e) => e.contains(t));
              !D || n || (a?.(e), u?.(e), e.defaultPrevented || s?.());
            }, y),
            _ = (function (e, t = globalThis?.document) {
              let n = (0, b.W)(e),
                r = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      P(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...f.branches].some((e) => e.contains(t)) ||
                (l?.(e), u?.(e), e.defaultPrevented || s?.());
            }, y);
          return (
            (0, E.e)((e) => {
              O !== f.layers.size - 1 ||
                (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
            }, y),
            i.useEffect(() => {
              if (v)
                return (
                  n &&
                    (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = y.body.style.pointerEvents),
                      (y.body.style.pointerEvents = "none")),
                    f.layersWithOutsidePointerEventsDisabled.add(v)),
                  f.layers.add(v),
                  N(),
                  () => {
                    n &&
                      1 === f.layersWithOutsidePointerEventsDisabled.size &&
                      (y.body.style.pointerEvents = o);
                  }
                );
            }, [v, y, n, f]),
            i.useEffect(
              () => () => {
                v &&
                  (f.layers.delete(v),
                  f.layersWithOutsidePointerEventsDisabled.delete(v),
                  N());
              },
              [v, f]
            ),
            i.useEffect(() => {
              let e = () => g({});
              return (
                document.addEventListener(x, e),
                () => document.removeEventListener(x, e)
              );
            }, []),
            (0, m.jsx)(w.div, {
              ...d,
              ref: R,
              style: {
                pointerEvents: W ? (D ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: c(e.onFocusCapture, _.onFocusCapture),
              onBlurCapture: c(e.onBlurCapture, _.onBlurCapture),
              onPointerDownCapture: c(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          );
        });
      function N() {
        let e = new CustomEvent(x);
        document.dispatchEvent(e);
      }
      function P(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && d.flushSync(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      (R.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(C),
            r = i.useRef(null),
            o = p(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, m.jsx)(w.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var j = n(27552);
      function A(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      var S = i.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(D);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : i.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, m.jsx)(O, {
            ...r,
            ref: t,
            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, m.jsx)(O, { ...r, ref: t, children: n });
      });
      S.displayName = "Slot";
      var O = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? A(t, a) : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      O.displayName = "SlotClone";
      var W = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function D(e) {
        return i.isValidElement(e) && e.type === W;
      }
      var k = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? S : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        _ = "focusScope.autoFocusOnMount",
        L = "focusScope.autoFocusOnUnmount",
        T = { bubbles: !1, cancelable: !0 },
        M = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...l
            } = e,
            [u, s] = i.useState(null),
            c = (0, b.W)(o),
            d = (0, b.W)(a),
            f = i.useRef(null),
            p = (function (...e) {
              return i.useCallback(A(...e), e);
            })(t, (e) => s(e)),
            v = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (v.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (f.current = t)
                    : $(f.current, { select: !0 });
                },
                t = function (e) {
                  if (v.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || $(f.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && $(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, v.paused]),
            i.useEffect(() => {
              if (u) {
                V.add(v);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(_, T);
                  u.addEventListener(_, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            ($(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        F(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && $(u));
                }
                return () => {
                  u.removeEventListener(_, c),
                    setTimeout(() => {
                      let t = new CustomEvent(L, T);
                      u.addEventListener(L, d),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          $(e ?? document.body, { select: !0 }),
                        u.removeEventListener(L, d),
                        V.remove(v);
                    }, 0);
                };
              }
            }, [u, c, d, v]);
          let h = i.useCallback(
            (e) => {
              if ((!n && !r) || v.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = F(e);
                    return [I(t, e), I(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && $(i, { select: !0 }))
                    : (e.preventDefault(), n && $(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, v.paused]
          );
          return (0, m.jsx)(k.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: h,
          });
        });
      function F(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function I(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function $(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      M.displayName = "FocusScope";
      var V =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && t?.pause(), (r = B(r, e)).unshift(e);
          },
          remove(e) {
            (r = B(r, e)), r[0]?.resume();
          },
        });
      function B(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var z = n(91276),
        U = n(1371),
        Y = n(29545),
        H = i.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            o = i.Children.toArray(n),
            a = o.find(X);
          if (a) {
            let e = a.props.children,
              n = o.map((t) =>
                t !== a
                  ? t
                  : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : i.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, m.jsx)(Z, {
              ...r,
              ref: t,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, m.jsx)(Z, { ...r, ref: t, children: n });
        });
      H.displayName = "Slot";
      var Z = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t
              ? (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(t, a)
              : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      Z.displayName = "SlotClone";
      var K = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function X(e) {
        return i.isValidElement(e) && e.type === K;
      }
      var q = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? H : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        J = i.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, m.jsx)(q.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, m.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      function G(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function Q(...e) {
        return i.useCallback(G(...e), e);
      }
      J.displayName = "Arrow";
      var ee = i.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(er);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : i.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, m.jsx)(et, {
            ...r,
            ref: t,
            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, m.jsx)(et, { ...r, ref: t, children: n });
      });
      ee.displayName = "Slot";
      var et = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? G(t, a) : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      et.displayName = "SlotClone";
      var en = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function er(e) {
        return i.isValidElement(e) && e.type === en;
      }
      var eo = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? ee : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        ei = n(9981),
        ea = n(7546),
        el = "Popper",
        [eu, es] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => i.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return i.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = i.createContext(r),
                  a = n.length;
                function l(t) {
                  let { scope: n, children: r, ...l } = t,
                    u = n?.[e][a] || o,
                    s = i.useMemo(() => l, Object.values(l));
                  return (0, m.jsx)(u.Provider, { value: s, children: r });
                }
                return (
                  (n = [...n, r]),
                  (l.displayName = t + "Provider"),
                  [
                    l,
                    function (n, l) {
                      let u = l?.[e][a] || o,
                        s = i.useContext(u);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return i.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(el),
        [ec, ed] = eu(el),
        ef = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = i.useState(null);
          return (0, m.jsx)(ec, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n,
          });
        };
      ef.displayName = el;
      var ep = "PopperAnchor",
        em = i.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            a = ed(ep, n),
            l = i.useRef(null),
            u = Q(t, l);
          return (
            i.useEffect(() => {
              a.onAnchorChange(r?.current || l.current);
            }),
            r ? null : (0, m.jsx)(eo.div, { ...o, ref: u })
          );
        });
      em.displayName = ep;
      var ev = "PopperContent",
        [eh, ey] = eu(ev),
        eg = i.forwardRef((e, t) => {
          let {
              __scopePopper: n,
              side: r = "bottom",
              sideOffset: o = 0,
              align: a = "center",
              alignOffset: l = 0,
              arrowPadding: u = 0,
              avoidCollisions: s = !0,
              collisionBoundary: c = [],
              collisionPadding: d = 0,
              sticky: f = "partial",
              hideWhenDetached: p = !1,
              updatePositionStrategy: v = "optimized",
              onPlaced: h,
              ...y
            } = e,
            g = ed(ev, n),
            [w, E] = i.useState(null),
            x = Q(t, (e) => E(e)),
            [C, R] = i.useState(null),
            N = (0, ea.t)(C),
            P = N?.width ?? 0,
            j = N?.height ?? 0,
            A =
              "number" == typeof d
                ? d
                : { top: 0, right: 0, bottom: 0, left: 0, ...d },
            S = Array.isArray(c) ? c : [c],
            O = S.length > 0,
            W = { padding: A, boundary: S.filter(ex), altBoundary: O },
            {
              refs: D,
              floatingStyles: k,
              placement: _,
              isPositioned: L,
              middlewareData: T,
            } = (0, U.YF)({
              strategy: "fixed",
              placement: r + ("center" !== a ? "-" + a : ""),
              whileElementsMounted: (...e) =>
                (0, Y.Me)(...e, { animationFrame: "always" === v }),
              elements: { reference: g.anchor },
              middleware: [
                (0, U.cv)({ mainAxis: o + j, alignmentAxis: l }),
                s &&
                  (0, U.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === f ? (0, U.dr)() : void 0,
                    ...W,
                  }),
                s && (0, U.RR)({ ...W }),
                (0, U.dp)({
                  ...W,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                C && (0, U.x7)({ element: C, padding: u }),
                eC({ arrowWidth: P, arrowHeight: j }),
                p && (0, U.Cp)({ strategy: "referenceHidden", ...W }),
              ],
            }),
            [M, F] = eR(_),
            I = (0, b.W)(h);
          (0, ei.b)(() => {
            L && I?.();
          }, [L, I]);
          let $ = T.arrow?.x,
            V = T.arrow?.y,
            B = T.arrow?.centerOffset !== 0,
            [z, H] = i.useState();
          return (
            (0, ei.b)(() => {
              w && H(window.getComputedStyle(w).zIndex);
            }, [w]),
            (0, m.jsx)("div", {
              ref: D.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...k,
                transform: L ? k.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: z,
                "--radix-popper-transform-origin": [
                  T.transformOrigin?.x,
                  T.transformOrigin?.y,
                ].join(" "),
                ...(T.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, m.jsx)(eh, {
                scope: n,
                placedSide: M,
                onArrowChange: R,
                arrowX: $,
                arrowY: V,
                shouldHideArrow: B,
                children: (0, m.jsx)(eo.div, {
                  "data-side": M,
                  "data-align": F,
                  ...y,
                  ref: x,
                  style: { ...y.style, animation: L ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eg.displayName = ev;
      var ew = "PopperArrow",
        eb = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eE = i.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = ey(ew, n),
            i = eb[o.placedSide];
          return (0,
          m.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, m.jsx)(J, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function ex(e) {
        return null !== e;
      }
      eE.displayName = ew;
      var eC = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            a = i ? 0 : e.arrowWidth,
            l = i ? 0 : e.arrowHeight,
            [u, s] = eR(n),
            c = { start: "0%", center: "50%", end: "100%" }[s],
            d = (o.arrow?.x ?? 0) + a / 2,
            f = (o.arrow?.y ?? 0) + l / 2,
            p = "",
            m = "";
          return (
            "bottom" === u
              ? ((p = i ? c : `${d}px`), (m = `${-l}px`))
              : "top" === u
              ? ((p = i ? c : `${d}px`), (m = `${r.floating.height + l}px`))
              : "right" === u
              ? ((p = `${-l}px`), (m = i ? c : `${f}px`))
              : "left" === u &&
                ((p = `${r.floating.width + l}px`), (m = i ? c : `${f}px`)),
            { data: { x: p, y: m } }
          );
        },
      });
      function eR(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eN = i.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(eA);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : i.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, m.jsx)(eP, {
            ...r,
            ref: t,
            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, m.jsx)(eP, { ...r, ref: t, children: n });
      });
      eN.displayName = "Slot";
      var eP = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t
              ? (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(t, a)
              : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      eP.displayName = "SlotClone";
      var ej = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function eA(e) {
        return i.isValidElement(e) && e.type === ej;
      }
      var eS = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? eN : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        eO = i.forwardRef((e, t) => {
          let { container: n, ...r } = e,
            [o, a] = i.useState(!1);
          (0, ei.b)(() => a(!0), []);
          let l = n || (o && globalThis?.document?.body);
          return l
            ? d.createPortal((0, m.jsx)(eS.div, { ...r, ref: t }), l)
            : null;
        });
      eO.displayName = "Portal";
      var eW = (e) => {
        let t, n;
        let { present: r, children: o } = e,
          a = (function (e) {
            var t, n;
            let [r, o] = i.useState(),
              a = i.useRef({}),
              l = i.useRef(e),
              u = i.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                i.useReducer((e, t) => n[e][t] ?? e, t));
            return (
              i.useEffect(() => {
                let e = eD(a.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              (0, ei.b)(() => {
                let t = a.current,
                  n = l.current;
                if (n !== e) {
                  let r = u.current,
                    o = eD(t);
                  e
                    ? c("MOUNT")
                    : "none" === o || t?.display === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, c]),
              (0, ei.b)(() => {
                if (r) {
                  let e;
                  let t = r.ownerDocument.defaultView ?? window,
                    n = (n) => {
                      let o = eD(a.current).includes(n.animationName);
                      if (
                        n.target === r &&
                        o &&
                        (c("ANIMATION_END"), !l.current)
                      ) {
                        let n = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = n);
                          }));
                      }
                    },
                    o = (e) => {
                      e.target === r && (u.current = eD(a.current));
                    };
                  return (
                    r.addEventListener("animationstart", o),
                    r.addEventListener("animationcancel", n),
                    r.addEventListener("animationend", n),
                    () => {
                      t.clearTimeout(e),
                        r.removeEventListener("animationstart", o),
                        r.removeEventListener("animationcancel", n),
                        r.removeEventListener("animationend", n);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: i.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), o(e);
                }, []),
              }
            );
          })(r),
          l =
            "function" == typeof o
              ? o({ present: a.isPresent })
              : i.Children.only(o),
          u = (function (...e) {
            return i.useCallback(
              (function (...e) {
                return (t) =>
                  e.forEach((e) => {
                    "function" == typeof e
                      ? e(t)
                      : null != e && (e.current = t);
                  });
              })(...e),
              e
            );
          })(
            a.ref,
            (t = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning
              ? l.ref
              : (t = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? l.props.ref
              : l.props.ref || l.ref
          );
        return "function" == typeof o || a.isPresent
          ? i.cloneElement(l, { ref: u })
          : null;
      };
      function eD(e) {
        return e?.animationName || "none";
      }
      eW.displayName = "Presence";
      var ek = i.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(eT);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : i.isValidElement(e)
                ? e.props.children
                : null
            );
          return (0, m.jsx)(e_, {
            ...r,
            ref: t,
            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, m.jsx)(e_, { ...r, ref: t, children: n });
      });
      ek.displayName = "Slot";
      var e_ = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e, o;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return i.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? l(t, a) : a,
          });
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      e_.displayName = "SlotClone";
      var eL = ({ children: e }) => (0, m.jsx)(m.Fragment, { children: e });
      function eT(e) {
        return i.isValidElement(e) && e.type === eL;
      }
      var eM = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? ek : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, m.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {}),
        eF = n(77342),
        eI = n(23541),
        e$ = n(97582),
        eV = n(71642),
        eB = n(99495),
        ez = (0, n(87122)._)(),
        eU = function () {},
        eY = i.forwardRef(function (e, t) {
          var n = i.useRef(null),
            r = i.useState({
              onScrollCapture: eU,
              onWheelCapture: eU,
              onTouchMoveCapture: eU,
            }),
            o = r[0],
            a = r[1],
            l = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            v = e.inert,
            h = e.allowPinchZoom,
            y = e.as,
            g = e.gapMode,
            w = (0, e$.__rest)(e, [
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
            b = (0, eB.q)([n, t]),
            E = (0, e$.__assign)((0, e$.__assign)({}, w), o);
          return i.createElement(
            i.Fragment,
            null,
            d &&
              i.createElement(p, {
                sideCar: ez,
                removeScrollBar: c,
                shards: f,
                noIsolation: m,
                inert: v,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: g,
              }),
            l
              ? i.cloneElement(
                  i.Children.only(u),
                  (0, e$.__assign)((0, e$.__assign)({}, E), { ref: b })
                )
              : i.createElement(
                  void 0 === y ? "div" : y,
                  (0, e$.__assign)({}, E, { className: s, ref: b }),
                  u
                )
          );
        });
      (eY.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (eY.classNames = { fullWidth: eV.zi, zeroRight: eV.pF });
      var eH = n(66781),
        eZ = n(37087),
        eK = n(6525),
        eX = !1;
      if ("undefined" != typeof window)
        try {
          var eq = Object.defineProperty({}, "passive", {
            get: function () {
              return (eX = !0), !0;
            },
          });
          window.addEventListener("test", eq, eq),
            window.removeEventListener("test", eq, eq);
        } catch (e) {
          eX = !1;
        }
      var eJ = !!eX && { passive: !1 },
        eG = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        eQ = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              e0(e, r))
            ) {
              var o = e1(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        e0 = function (e, t) {
          return "v" === e ? eG(t, "overflowY") : eG(t, "overflowX");
        },
        e1 = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        e2 = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var m = e1(e, u),
              v = m[0],
              h = m[1] - m[2] - a * v;
            (v || h) && e0(e, u) && ((f += h), (p += v)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0),
            c
          );
        },
        e9 = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        e7 = function (e) {
          return [e.deltaX, e.deltaY];
        },
        e6 = function (e) {
          return e && "current" in e ? e.current : e;
        },
        e4 = 0,
        e5 = [],
        e8 = (0, eH.L)(ez, function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(e4++)[0],
            a = i.useState(eK.Ws)[0],
            l = i.useRef(e);
          i.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, e$.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(e6),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = e9(e),
                a = n.current,
                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                s = "deltaY" in e ? e.deltaY : a[1] - i[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = eQ(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = eQ(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return e2(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = i.useCallback(function (e) {
              if (e5.length && e5[e5.length - 1] === a) {
                var n = "deltaY" in e ? e7(e) : e9(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(e6)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = i.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
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
            d = i.useCallback(function (e) {
              (n.current = e9(e)), (r.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              c(t.type, e7(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = i.useCallback(function (t) {
              c(t.type, e9(t), t.target, u(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              e5.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, eJ),
              document.addEventListener("touchmove", s, eJ),
              document.addEventListener("touchstart", d, eJ),
              function () {
                (e5 = e5.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", s, eJ),
                  document.removeEventListener("touchmove", s, eJ),
                  document.removeEventListener("touchstart", d, eJ);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            v = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            v
              ? i.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            m ? i.createElement(eZ.jp, { gapMode: e.gapMode }) : null
          );
        }),
        e3 = i.forwardRef(function (e, t) {
          return i.createElement(
            eY,
            (0, e$.__assign)({}, e, { ref: t, sideCar: e8 })
          );
        });
      e3.classNames = eY.classNames;
      var te = "Popover",
        [tt, tn] = (0, s.b)(te, [es]),
        tr = es(),
        [to, ti] = tt(te),
        ta = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: l = !1,
            } = e,
            u = tr(t),
            s = i.useRef(null),
            [c, d] = i.useState(!1),
            [f = !1, p] = (0, eF.T)({ prop: r, defaultProp: o, onChange: a });
          return (0, m.jsx)(ef, {
            ...u,
            children: (0, m.jsx)(to, {
              scope: t,
              contentId: (0, z.M)(),
              triggerRef: s,
              open: f,
              onOpenChange: p,
              onOpenToggle: i.useCallback(() => p((e) => !e), [p]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: i.useCallback(() => d(!0), []),
              onCustomAnchorRemove: i.useCallback(() => d(!1), []),
              modal: l,
              children: n,
            }),
          });
        };
      ta.displayName = te;
      var tl = "PopoverAnchor";
      i.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = ti(tl, n),
          a = tr(n),
          { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = o;
        return (
          i.useEffect(() => (l(), () => u()), [l, u]),
          (0, m.jsx)(em, { ...a, ...r, ref: t })
        );
      }).displayName = tl;
      var tu = "PopoverTrigger",
        ts = i.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = ti(tu, n),
            i = tr(n),
            l = u(t, o.triggerRef),
            s = (0, m.jsx)(eM.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": tx(o.open),
              ...r,
              ref: l,
              onClick: a(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? s
            : (0, m.jsx)(em, { asChild: !0, ...i, children: s });
        });
      ts.displayName = tu;
      var tc = "PopoverPortal",
        [td, tf] = tt(tc, { forceMount: void 0 }),
        tp = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = ti(tc, t);
          return (0, m.jsx)(td, {
            scope: t,
            forceMount: n,
            children: (0, m.jsx)(eW, {
              present: n || i.open,
              children: (0, m.jsx)(eO, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      tp.displayName = tc;
      var tm = "PopoverContent",
        tv = i.forwardRef((e, t) => {
          let n = tf(tm, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = ti(tm, e.__scopePopover);
          return (0, m.jsx)(eW, {
            present: r || i.open,
            children: i.modal
              ? (0, m.jsx)(th, { ...o, ref: t })
              : (0, m.jsx)(ty, { ...o, ref: t }),
          });
        });
      tv.displayName = tm;
      var th = i.forwardRef((e, t) => {
          let n = ti(tm, e.__scopePopover),
            r = i.useRef(null),
            o = u(t, r),
            l = i.useRef(!1);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return (0, eI.Ry)(e);
            }, []),
            (0, m.jsx)(e3, {
              as: ek,
              allowPinchZoom: !0,
              children: (0, m.jsx)(tg, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: a(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    l.current || n.triggerRef.current?.focus();
                }),
                onPointerDownOutside: a(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey,
                      r = 2 === t.button || n;
                    l.current = r;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: a(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            })
          );
        }),
        ty = i.forwardRef((e, t) => {
          let n = ti(tm, e.__scopePopover),
            r = i.useRef(!1),
            o = i.useRef(!1);
          return (0, m.jsx)(tg, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (r.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let i = t.target;
              n.triggerRef.current?.contains(i) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        tg = i.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: i,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: s,
              onInteractOutside: c,
              ...d
            } = e,
            f = ti(tm, n),
            p = tr(n);
          return (
            (0, j.EW)(),
            (0, m.jsx)(M, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, m.jsx)(R, {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onInteractOutside: c,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: s,
                onDismiss: () => f.onOpenChange(!1),
                children: (0, m.jsx)(eg, {
                  "data-state": tx(f.open),
                  role: "dialog",
                  id: f.contentId,
                  ...p,
                  ...d,
                  ref: t,
                  style: {
                    ...d.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        tw = "PopoverClose",
        tb = i.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = ti(tw, n);
          return (0, m.jsx)(eM.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: a(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      tb.displayName = tw;
      var tE = i.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = tr(n);
        return (0, m.jsx)(eE, { ...o, ...r, ref: t });
      });
      function tx(e) {
        return e ? "open" : "closed";
      }
      tE.displayName = "PopoverArrow";
      var tC = ta,
        tR = ts,
        tN = tv,
        tP = tE;
    },
    79698: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(67294);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    77342: function (e, t, n) {
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(79698);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, a] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              a = r.useRef(i),
              l = (0, o.W)(t);
            return (
              r.useEffect(() => {
                a.current !== i && (l(i), (a.current = i));
              }, [i, a, l]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          u = l ? e : i,
          s = (0, o.W)(n);
        return [
          u,
          r.useCallback(
            (t) => {
              if (l) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else a(t);
            },
            [l, e, a, s]
          ),
        ];
      }
    },
    78724: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(79698);
      function i(e, t = globalThis?.document) {
        let n = (0, o.W)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
    9981: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(67294),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    7546: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(67294),
        o = n(9981);
      function i(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
  },
]);
