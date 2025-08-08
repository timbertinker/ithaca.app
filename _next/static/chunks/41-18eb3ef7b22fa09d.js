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
      (e._sentryDebugIds[t] = "d8f3613b-a9f5-4058-a030-3bbddaaea180"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d8f3613b-a9f5-4058-a030-3bbddaaea180"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41],
  {
    36206: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    65936: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(25360),
        i = n(28771),
        a = n(88426),
        l = n(85893);
      function u(e) {
        let t = e + "CollectionProvider",
          [n, u] = (0, o.b)(t),
          [s, c] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          f = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              i = r.useRef(new Map()).current;
            return (0, l.jsx)(s, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n,
            });
          };
        f.displayName = t;
        let d = e + "CollectionSlot",
          p = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = c(d, n),
              u = (0, i.e)(t, o.collectionRef);
            return (0, l.jsx)(a.g7, { ref: u, children: r });
          });
        p.displayName = d;
        let m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          g = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...u } = e,
              s = r.useRef(null),
              f = (0, i.e)(t, s),
              d = c(m, n);
            return (
              r.useEffect(
                () => (
                  d.itemMap.set(s, { ref: s, ...u }),
                  () => void d.itemMap.delete(s)
                )
              ),
              (0, l.jsx)(a.g7, { [v]: "", ref: f, children: o })
            );
          });
        return (
          (g.displayName = m),
          [
            { Provider: f, Slot: p, ItemSlot: g },
            function (t) {
              let n = c(e + "CollectionConsumer", t);
              return r.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${v}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            u,
          ]
        );
      }
    },
    28771: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return a;
        },
      });
      var r = n(67294);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function a(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    78990: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(67294);
      n(85893);
      var o = r.createContext(void 0);
      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    75320: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return l;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(73935),
        i = n(88426),
        a = n(85893),
        l = [
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
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              l = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(l, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    88426: function (e, t, n) {
      n.d(t, {
        g7: function () {
          return a;
        },
      });
      var r = n(67294),
        o = n(28771),
        i = n(85893),
        a = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            a = r.Children.toArray(n),
            u = a.find(s);
          if (u) {
            let e = u.props.children,
              n = a.map((t) =>
                t !== u
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(l, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(l, { ...o, ref: t, children: n });
        });
      a.displayName = "Slot";
      var l = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, a;
          let l =
              (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning
                ? n.ref
                : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning
                ? n.props.ref
                : n.props.ref || n.ref,
            u = (function (e, t) {
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
            })(i, n.props);
          return (
            n.type !== r.Fragment && (u.ref = t ? (0, o.F)(t, l) : l),
            r.cloneElement(n, u)
          );
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      var u = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === u;
      }
    },
    26829: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return J;
        },
        aV: function () {
          return Z;
        },
        fC: function () {
          return H;
        },
        xz: function () {
          return Y;
        },
      });
      var r = n(67294),
        o = n(36206),
        i = n(25360),
        a = n(65936),
        l = n(28771),
        u = n(91276),
        s = n(75320),
        c = n(79698),
        f = n(77342),
        d = n(78990),
        p = n(85893),
        m = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        g = "RovingFocusGroup",
        [b, w, y] = (0, a.B)(g),
        [h, R] = (0, i.b)(g, [y]),
        [N, C] = h(g),
        I = r.forwardRef((e, t) =>
          (0, p.jsx)(b.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(b.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, p.jsx)(M, { ...e, ref: t }),
            }),
          })
        );
      I.displayName = g;
      var M = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: i,
              loop: a = !1,
              dir: u,
              currentTabStopId: g,
              defaultCurrentTabStopId: b,
              onCurrentTabStopIdChange: y,
              onEntryFocus: h,
              preventScrollOnEntryFocus: R = !1,
              ...C
            } = e,
            I = r.useRef(null),
            M = (0, l.e)(t, I),
            x = (0, d.gm)(u),
            [E = null, D] = (0, f.T)({ prop: g, defaultProp: b, onChange: y }),
            [j, A] = r.useState(!1),
            F = (0, c.W)(h),
            O = w(n),
            S = r.useRef(!1),
            [$, k] = r.useState(0);
          return (
            r.useEffect(() => {
              let e = I.current;
              if (e)
                return (
                  e.addEventListener(m, F), () => e.removeEventListener(m, F)
                );
            }, [F]),
            (0, p.jsx)(N, {
              scope: n,
              orientation: i,
              dir: x,
              loop: a,
              currentTabStopId: E,
              onItemFocus: r.useCallback((e) => D(e), [D]),
              onItemShiftTab: r.useCallback(() => A(!0), []),
              onFocusableItemAdd: r.useCallback(() => k((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => k((e) => e - 1), []),
              children: (0, p.jsx)(s.WV.div, {
                tabIndex: j || 0 === $ ? -1 : 0,
                "data-orientation": i,
                ...C,
                ref: M,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.M)(e.onMouseDown, () => {
                  S.current = !0;
                }),
                onFocus: (0, o.M)(e.onFocus, (e) => {
                  let t = !S.current;
                  if (e.target === e.currentTarget && t && !j) {
                    let t = new CustomEvent(m, v);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = O().filter((e) => e.focusable);
                      T(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === E),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        R
                      );
                    }
                  }
                  S.current = !1;
                }),
                onBlur: (0, o.M)(e.onBlur, () => A(!1)),
              }),
            })
          );
        }),
        x = "RovingFocusGroupItem",
        E = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: i = !0,
              active: a = !1,
              tabStopId: l,
              ...c
            } = e,
            f = (0, u.M)(),
            d = l || f,
            m = C(x, n),
            v = m.currentTabStopId === d,
            g = w(n),
            { onFocusableItemAdd: y, onFocusableItemRemove: h } = m;
          return (
            r.useEffect(() => {
              if (i) return y(), () => h();
            }, [i, y, h]),
            (0, p.jsx)(b.ItemSlot, {
              scope: n,
              id: d,
              focusable: i,
              active: a,
              children: (0, p.jsx)(s.WV.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": m.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                  i ? m.onItemFocus(d) : e.preventDefault();
                }),
                onFocus: (0, o.M)(e.onFocus, () => m.onItemFocus(d)),
                onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    m.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      "rtl" !== n
                        ? r
                        : "ArrowLeft" === r
                        ? "ArrowRight"
                        : "ArrowRight" === r
                        ? "ArrowLeft"
                        : r);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return D[o];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = g()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      var n, r;
                      "prev" === t && o.reverse();
                      let i = o.indexOf(e.currentTarget);
                      o = m.loop
                        ? ((n = o),
                          (r = i + 1),
                          n.map((e, t) => n[(r + t) % n.length]))
                        : o.slice(i + 1);
                    }
                    setTimeout(() => T(o));
                  }
                }),
              }),
            })
          );
        });
      E.displayName = x;
      var D = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function T(e, t = !1) {
        let n = document.activeElement;
        for (let r of e)
          if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
          )
            return;
      }
      var j = n(9981),
        A = (e) => {
          let t, n;
          let { present: o, children: i } = e,
            a = (function (e) {
              var t, n;
              let [o, i] = r.useState(),
                a = r.useRef({}),
                l = r.useRef(e),
                u = r.useRef("none"),
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
                  r.useReducer((e, t) => n[e][t] ?? e, t));
              return (
                r.useEffect(() => {
                  let e = F(a.current);
                  u.current = "mounted" === s ? e : "none";
                }, [s]),
                (0, j.b)(() => {
                  let t = a.current,
                    n = l.current;
                  if (n !== e) {
                    let r = u.current,
                      o = F(t);
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
                (0, j.b)(() => {
                  if (o) {
                    let e;
                    let t = o.ownerDocument.defaultView ?? window,
                      n = (n) => {
                        let r = F(a.current).includes(n.animationName);
                        if (
                          n.target === o &&
                          r &&
                          (c("ANIMATION_END"), !l.current)
                        ) {
                          let n = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (e = t.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = n);
                            }));
                        }
                      },
                      r = (e) => {
                        e.target === o && (u.current = F(a.current));
                      };
                    return (
                      o.addEventListener("animationstart", r),
                      o.addEventListener("animationcancel", n),
                      o.addEventListener("animationend", n),
                      () => {
                        t.clearTimeout(e),
                          o.removeEventListener("animationstart", r),
                          o.removeEventListener("animationcancel", n),
                          o.removeEventListener("animationend", n);
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [o, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: r.useCallback((e) => {
                    e && (a.current = getComputedStyle(e)), i(e);
                  }, []),
                }
              );
            })(o),
            u =
              "function" == typeof i
                ? i({ present: a.isPresent })
                : r.Children.only(i),
            s = (0, l.e)(
              a.ref,
              (t = Object.getOwnPropertyDescriptor(u.props, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
                ? u.ref
                : (t = Object.getOwnPropertyDescriptor(u, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning
                ? u.props.ref
                : u.props.ref || u.ref
            );
          return "function" == typeof i || a.isPresent
            ? r.cloneElement(u, { ref: s })
            : null;
        };
      function F(e) {
        return e?.animationName || "none";
      }
      A.displayName = "Presence";
      var O = "Tabs",
        [S, $] = (0, i.b)(O, [R]),
        k = R(),
        [_, P] = S(O),
        V = r.forwardRef((e, t) => {
          let {
              __scopeTabs: n,
              value: r,
              onValueChange: o,
              defaultValue: i,
              orientation: a = "horizontal",
              dir: l,
              activationMode: c = "automatic",
              ...m
            } = e,
            v = (0, d.gm)(l),
            [g, b] = (0, f.T)({ prop: r, onChange: o, defaultProp: i });
          return (0, p.jsx)(_, {
            scope: n,
            baseId: (0, u.M)(),
            value: g,
            onValueChange: b,
            orientation: a,
            dir: v,
            activationMode: c,
            children: (0, p.jsx)(s.WV.div, {
              dir: v,
              "data-orientation": a,
              ...m,
              ref: t,
            }),
          });
        });
      V.displayName = O;
      var W = "TabsList",
        L = r.forwardRef((e, t) => {
          let { __scopeTabs: n, loop: r = !0, ...o } = e,
            i = P(W, n),
            a = k(n);
          return (0, p.jsx)(I, {
            asChild: !0,
            ...a,
            orientation: i.orientation,
            dir: i.dir,
            loop: r,
            children: (0, p.jsx)(s.WV.div, {
              role: "tablist",
              "aria-orientation": i.orientation,
              ...o,
              ref: t,
            }),
          });
        });
      L.displayName = W;
      var U = "TabsTrigger",
        B = r.forwardRef((e, t) => {
          let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e,
            l = P(U, n),
            u = k(n),
            c = q(l.baseId, r),
            f = z(l.baseId, r),
            d = r === l.value;
          return (0, p.jsx)(E, {
            asChild: !0,
            ...u,
            focusable: !i,
            active: d,
            children: (0, p.jsx)(s.WV.button, {
              type: "button",
              role: "tab",
              "aria-selected": d,
              "aria-controls": f,
              "data-state": d ? "active" : "inactive",
              "data-disabled": i ? "" : void 0,
              disabled: i,
              id: c,
              ...a,
              ref: t,
              onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                i || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : l.onValueChange(r);
              }),
              onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && l.onValueChange(r);
              }),
              onFocus: (0, o.M)(e.onFocus, () => {
                let e = "manual" !== l.activationMode;
                d || i || !e || l.onValueChange(r);
              }),
            }),
          });
        });
      B.displayName = U;
      var K = "TabsContent",
        G = r.forwardRef((e, t) => {
          let {
              __scopeTabs: n,
              value: o,
              forceMount: i,
              children: a,
              ...l
            } = e,
            u = P(K, n),
            c = q(u.baseId, o),
            f = z(u.baseId, o),
            d = o === u.value,
            m = r.useRef(d);
          return (
            r.useEffect(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, p.jsx)(A, {
              present: i || d,
              children: ({ present: n }) =>
                (0, p.jsx)(s.WV.div, {
                  "data-state": d ? "active" : "inactive",
                  "data-orientation": u.orientation,
                  role: "tabpanel",
                  "aria-labelledby": c,
                  hidden: !n,
                  id: f,
                  tabIndex: 0,
                  ...l,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  children: n && a,
                }),
            })
          );
        });
      function q(e, t) {
        return `${e}-trigger-${t}`;
      }
      function z(e, t) {
        return `${e}-content-${t}`;
      }
      G.displayName = K;
      var H = V,
        Z = L,
        Y = B,
        J = G;
    },
    46111: function (e, t, n) {
      var r = n(67294);
      let o = r.forwardRef(function (e, t) {
        let { title: n, titleId: o, ...i } = e;
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
              "aria-labelledby": o,
            },
            i
          ),
          n ? r.createElement("title", { id: o }, n) : null,
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25",
          })
        );
      });
      t.Z = o;
    },
    48120: function (e, t, n) {
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(36117);
      class o extends r.G {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function i(e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new o({ value: e });
        let [n, r = "0"] = e.split("."),
          i = n.startsWith("-");
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let [e, o, i] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            a = Math.round(Number(`${o}.${i}`));
          (r =
            a > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${a}`).length > t &&
            ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
    },
    75593: function (e, t, n) {
      n.d(t, {
        S: function () {
          return d;
        },
      });
      var r = n(98029),
        o = n(61877),
        i = n(81946),
        a = n(52425),
        l = n(75230),
        u = n(66432);
      async function s(e, t) {
        let n;
        let { abi: r, chainId: o, connector: a, ...s } = t;
        n = t.account
          ? t.account
          : (await (0, l.e)(e, { chainId: o, connector: a })).account;
        let c = e.getClient({ chainId: o }),
          f = (0, i.s)(c, u.a, "simulateContract"),
          { result: d, request: p } = await f({ ...s, abi: r, account: n });
        return {
          chainId: c.chain.id,
          result: d,
          request: { __mode: "prepared", ...p, chainId: o },
        };
      }
      async function c(e, t) {
        let n, r;
        let { account: u, chainId: c, connector: f, __mode: d, ...p } = t;
        n =
          "object" == typeof u && "local" === u.type
            ? e.getClient({ chainId: c })
            : await (0, l.e)(e, { account: u, chainId: c, connector: f });
        let { connector: m } = (0, a.D)(e);
        if ("prepared" === d || m?.supportsSimulation) r = p;
        else {
          let { request: t } = await s(e, { ...p, account: u, chainId: c });
          r = t;
        }
        let v = (0, i.s)(n, o.n, "writeContract");
        return await v({
          ...r,
          ...(u ? { account: u } : {}),
          chain: c ? { id: c } : null,
        });
      }
      var f = n(37122);
      function d(e = {}) {
        var t;
        let { mutation: n } = e,
          o =
            ((t = (0, f.Z)(e)),
            { mutationFn: (e) => c(t, e), mutationKey: ["writeContract"] }),
          { mutate: i, mutateAsync: a, ...l } = (0, r.D)({ ...n, ...o });
        return { ...l, writeContract: i, writeContractAsync: a };
      }
    },
  },
]);
