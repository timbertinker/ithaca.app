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
      (e._sentryDebugIds[t] = "fb2e1a3b-a5f0-4565-9ae0-9092d5dfac64"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-fb2e1a3b-a5f0-4565-9ae0-9092d5dfac64"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2478],
  {
    29138: function (e, t, n) {
      n.d(t, {
        dk: function () {
          return p;
        },
        fw: function () {
          return d;
        },
        zH: function () {
          return c;
        },
      });
      var o = n(67294),
        r = n(68354),
        i = n(57110),
        l = n(40947),
        a = n(14872),
        u = n(83619);
      let s = (0, o.createContext)(null);
      function c() {
        var e, t;
        return null !=
          (t = null == (e = (0, o.useContext)(s)) ? void 0 : e.value)
          ? t
          : void 0;
      }
      function d() {
        let [e, t] = (0, o.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, o.useMemo)(
            () =>
              function (e) {
                let n = (0, r.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            o = n.indexOf(e);
                          return -1 !== o && n.splice(o, 1), n;
                        })
                    )
                  ),
                  i = (0, o.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                      value: e.value,
                    }),
                    [n, e.slot, e.name, e.props, e.value]
                  );
                return o.createElement(s.Provider, { value: i }, e.children);
              },
            [t]
          ),
        ];
      }
      s.displayName = "DescriptionContext";
      let p = Object.assign(
        (0, u.yV)(function (e, t) {
          let n = (0, o.useId)(),
            r = (0, a.B)(),
            { id: c = "headlessui-description-".concat(n), ...d } = e,
            p = (function e() {
              let t = (0, o.useContext)(s);
              if (null === t) {
                let t = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            f = (0, l.T)(t);
          (0, i.e)(() => p.register(c), [c, p.register]);
          let v = r || !1,
            m = (0, o.useMemo)(() => ({ ...p.slot, disabled: v }), [p.slot, v]),
            b = { ref: f, ...p.props, id: c };
          return (0, u.L6)()({
            ourProps: b,
            theirProps: d,
            slot: m,
            defaultTag: "p",
            name: p.name || "Description",
          });
        }),
        {}
      );
    },
    92478: function (e, t, n) {
      let o, r, i, l, a;
      n.d(t, {
        Ri: function () {
          return eE;
        },
        Y4: function () {
          return ex;
        },
        wt: function () {
          return eh;
        },
        O_: function () {
          return eg;
        },
      });
      var u = n(22944),
        s = n(18419),
        c = n(67294),
        d = n(73935),
        p = n(65448);
      function f(e, t) {
        return null !== e &&
          null !== t &&
          "object" == typeof e &&
          "object" == typeof t &&
          "id" in e &&
          "id" in t
          ? e.id === t.id
          : e === t;
      }
      var v = n(68354),
        m = n(57110),
        b = n(5655),
        x = n(29408),
        g = n(80157),
        h = n(39438),
        E = n(54555),
        y = n(382),
        S = n(99523),
        O = n(91034),
        R = n(99915),
        I = n(40947);
      let T =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function L(e) {
        var t, n;
        let o = null != (t = e.innerText) ? t : "",
          r = e.cloneNode(!0);
        if (!(r instanceof HTMLElement)) return o;
        let i = !1;
        for (let e of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (i = !0);
        let l = i ? (null != (n = r.innerText) ? n : "") : o;
        return T.test(l) && (l = l.replace(T, "")), l;
      }
      function C(e) {
        return [e.screenX, e.screenY];
      }
      var D = n(2015),
        P = n(14872),
        k = n(95086);
      function w(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      var M = n(83619),
        F = n(51228);
      let z = (0, c.createContext)(null);
      function A(e) {
        let { children: t } = e,
          n = (0, c.useContext)(z);
        if (!n) return c.createElement(c.Fragment, null, t);
        let { target: o } = n;
        return o
          ? (0, d.createPortal)(c.createElement(c.Fragment, null, t), o)
          : null;
      }
      function _(e) {
        let { data: t, form: n, disabled: o, onReset: r, overrides: i } = e,
          [l, a] = (0, c.useState)(null),
          u = (0, b.G)();
        return (
          (0, c.useEffect)(() => {
            if (r && l) return u.addEventListener(l, "reset", r);
          }, [l, n, r]),
          c.createElement(
            A,
            null,
            c.createElement(N, { setForm: a, formId: n }),
            (function e() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
              for (let [r, i] of Object.entries(t))
                !(function t(n, o, r) {
                  if (Array.isArray(r))
                    for (let [e, i] of r.entries()) t(n, w(o, e.toString()), i);
                  else
                    r instanceof Date
                      ? n.push([o, r.toISOString()])
                      : "boolean" == typeof r
                      ? n.push([o, r ? "1" : "0"])
                      : "string" == typeof r
                      ? n.push([o, r])
                      : "number" == typeof r
                      ? n.push([o, "".concat(r)])
                      : null == r
                      ? n.push([o, ""])
                      : e(r, o, n);
                })(o, w(n, r), i);
              return o;
            })(t).map((e) => {
              let [t, r] = e;
              return c.createElement(F._, {
                features: F.x.Hidden,
                ...(0, M.oA)({
                  key: t,
                  as: "input",
                  type: "hidden",
                  hidden: !0,
                  readOnly: !0,
                  form: n,
                  disabled: o,
                  name: t,
                  value: r,
                  ...i,
                }),
              });
            })
          )
        );
      }
      function N(e) {
        let { setForm: t, formId: n } = e;
        return (
          (0, c.useEffect)(() => {
            if (n) {
              let e = document.getElementById(n);
              e && t(e);
            }
          }, [t, n]),
          n
            ? null
            : c.createElement(F._, {
                features: F.x.Hidden,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                ref: (e) => {
                  if (!e) return;
                  let n = e.closest("form");
                  n && t(n);
                },
              })
        );
      }
      let B = (0, c.createContext)(void 0);
      function V() {
        return (0, c.useContext)(B);
      }
      var j = n(1365),
        H = n(67257),
        U =
          (((o = U || {})[(o.First = 0)] = "First"),
          (o[(o.Previous = 1)] = "Previous"),
          (o[(o.Next = 2)] = "Next"),
          (o[(o.Last = 3)] = "Last"),
          (o[(o.Specific = 4)] = "Specific"),
          (o[(o.Nothing = 5)] = "Nothing"),
          o);
      function Q(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let o = t.resolveActiveIndex(),
          r = null != o ? o : -1;
        switch (e.focus) {
          case 0:
            for (let e = 0; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return o;
          case 1:
            -1 === r && (r = n.length);
            for (let e = r - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return o;
          case 2:
            for (let e = r + 1; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return o;
          case 3:
            for (let e = n.length - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return o;
          case 4:
            for (let o = 0; o < n.length; ++o)
              if (t.resolveId(n[o], o, n) === e.id) return o;
            return o;
          case 5:
            return null;
          default:
            !(function (e) {
              throw Error("Unexpected object: " + e);
            })(e);
        }
      }
      var G = n(61622),
        K = n(58766),
        Y = n(16116),
        Z = n(23233),
        q = n(29138),
        X = n(71237);
      let J = (0, c.createContext)(null);
      function W(e) {
        var t, n, o;
        let r =
          null != (n = null == (t = (0, c.useContext)(J)) ? void 0 : t.value)
            ? n
            : void 0;
        return (null != (o = null == e ? void 0 : e.length) ? o : 0) > 0
          ? [r, ...e].filter(Boolean).join(" ")
          : r;
      }
      J.displayName = "LabelContext";
      let $ = Object.assign(
        (0, M.yV)(function (e, t) {
          var n;
          let o = (0, c.useId)(),
            r = (function e() {
              let t = (0, c.useContext)(J);
              if (null === t) {
                let t = Error(
                  "You used a <Label /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            i = V(),
            l = (0, P.B)(),
            {
              id: a = "headlessui-label-".concat(o),
              htmlFor: u = null != i
                ? i
                : null == (n = r.props)
                ? void 0
                : n.htmlFor,
              passive: s = !1,
              ...d
            } = e,
            p = (0, I.T)(t);
          (0, m.e)(() => r.register(a), [a, r.register]);
          let f = (0, v.z)((e) => {
              let t = e.currentTarget;
              if (
                (t instanceof HTMLLabelElement && e.preventDefault(),
                r.props &&
                  "onClick" in r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                t instanceof HTMLLabelElement)
              ) {
                let e = document.getElementById(t.htmlFor);
                if (e) {
                  let t = e.getAttribute("disabled");
                  if ("true" === t || "" === t) return;
                  let n = e.getAttribute("aria-disabled");
                  if ("true" === n || "" === n) return;
                  ((e instanceof HTMLInputElement &&
                    ("radio" === e.type || "checkbox" === e.type)) ||
                    "radio" === e.role ||
                    "checkbox" === e.role ||
                    "switch" === e.role) &&
                    e.click(),
                    e.focus({ preventScroll: !0 });
                }
              }
            }),
            b = l || !1,
            x = (0, c.useMemo)(() => ({ ...r.slot, disabled: b }), [r.slot, b]),
            g = { ref: p, ...r.props, id: a, htmlFor: u, onClick: f };
          return (
            s &&
              ("onClick" in g && (delete g.htmlFor, delete g.onClick),
              "onClick" in d && delete d.onClick),
            (0, M.L6)()({
              ourProps: g,
              theirProps: d,
              slot: x,
              defaultTag: u ? "label" : "div",
              name: r.name || "Label",
            })
          );
        }),
        {}
      );
      var ee = n(23811),
        et =
          (((r = et || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        en =
          (((i = en || {})[(i.Single = 0)] = "Single"),
          (i[(i.Multi = 1)] = "Multi"),
          i),
        eo =
          (((l = eo || {})[(l.Pointer = 0)] = "Pointer"),
          (l[(l.Other = 1)] = "Other"),
          l),
        er =
          (((a = er || {})[(a.OpenListbox = 0)] = "OpenListbox"),
          (a[(a.CloseListbox = 1)] = "CloseListbox"),
          (a[(a.GoToOption = 2)] = "GoToOption"),
          (a[(a.Search = 3)] = "Search"),
          (a[(a.ClearSearch = 4)] = "ClearSearch"),
          (a[(a.RegisterOption = 5)] = "RegisterOption"),
          (a[(a.UnregisterOption = 6)] = "UnregisterOption"),
          (a[(a.SetButtonElement = 7)] = "SetButtonElement"),
          (a[(a.SetOptionsElement = 8)] = "SetOptionsElement"),
          a);
      function ei(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (e) => e,
          n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          o = (0, K.z2)(
            t(e.options.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          r = n ? o.indexOf(n) : null;
        return -1 === r && (r = null), { options: o, activeOptionIndex: r };
      }
      let el = {
          1: (e) =>
            e.dataRef.current.disabled || 1 === e.listboxState
              ? e
              : {
                  ...e,
                  activeOptionIndex: null,
                  listboxState: 1,
                  __demoMode: !1,
                },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              { isSelected: n } = e.dataRef.current,
              o = e.options.findIndex((e) => n(e.dataRef.current.value));
            return (
              -1 !== o && (t = o),
              { ...e, listboxState: 0, activeOptionIndex: t, __demoMode: !1 }
            );
          },
          2(e, t) {
            var n, o, r, i, l;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let a = {
              ...e,
              searchQuery: "",
              activationTrigger: null != (n = t.trigger) ? n : 1,
              __demoMode: !1,
            };
            if (t.focus === U.Nothing) return { ...a, activeOptionIndex: null };
            if (t.focus === U.Specific)
              return {
                ...a,
                activeOptionIndex: e.options.findIndex((e) => e.id === t.id),
              };
            if (t.focus === U.Previous) {
              let n = e.activeOptionIndex;
              if (null !== n) {
                let i = e.options[n].dataRef.current.domRef,
                  l = Q(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== l) {
                  let t = e.options[l].dataRef.current.domRef;
                  if (
                    (null == (o = i.current)
                      ? void 0
                      : o.previousElementSibling) === t.current ||
                    (null == (r = t.current)
                      ? void 0
                      : r.previousElementSibling) === null
                  )
                    return { ...a, activeOptionIndex: l };
                }
              }
            } else if (t.focus === U.Next) {
              let n = e.activeOptionIndex;
              if (null !== n) {
                let o = e.options[n].dataRef.current.domRef,
                  r = Q(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== r) {
                  let t = e.options[r].dataRef.current.domRef;
                  if (
                    (null == (i = o.current)
                      ? void 0
                      : i.nextElementSibling) === t.current ||
                    (null == (l = t.current)
                      ? void 0
                      : l.nextElementSibling) === null
                  )
                    return { ...a, activeOptionIndex: r };
                }
              }
            }
            let u = ei(e),
              s = Q(t, {
                resolveItems: () => u.options,
                resolveActiveIndex: () => u.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return { ...a, ...u, activeOptionIndex: s };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = "" !== e.searchQuery ? 0 : 1,
              o = e.searchQuery + t.value.toLowerCase(),
              r = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(o))
                );
              }),
              i = r ? e.options.indexOf(r) : -1;
            return -1 === i || i === e.activeOptionIndex
              ? { ...e, searchQuery: o }
              : {
                  ...e,
                  searchQuery: o,
                  activeOptionIndex: i,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "" },
          5: (e, t) => {
            let n = { id: t.id, dataRef: t.dataRef },
              o = ei(e, (e) => [...e, n]);
            return (
              null === e.activeOptionIndex &&
                e.dataRef.current.isSelected(t.dataRef.current.value) &&
                (o.activeOptionIndex = o.options.indexOf(n)),
              { ...e, ...o }
            );
          },
          6: (e, t) => {
            let n = ei(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
          7: (e, t) =>
            e.buttonElement === t.element
              ? e
              : { ...e, buttonElement: t.element },
          8: (e, t) =>
            e.optionsElement === t.element
              ? e
              : { ...e, optionsElement: t.element },
        },
        ea = (0, c.createContext)(null);
      function eu(e) {
        let t = (0, c.useContext)(ea);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Listbox /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, eu), t);
        }
        return t;
      }
      ea.displayName = "ListboxActionsContext";
      let es = (0, c.createContext)(null);
      function ec(e) {
        let t = (0, c.useContext)(es);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Listbox /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ec), t);
        }
        return t;
      }
      function ed(e, t) {
        return (0, Y.E)(t.type, el, e, t);
      }
      es.displayName = "ListboxDataContext";
      let ep = c.Fragment,
        ef = (0, c.createContext)(!1),
        ev = M.VN.RenderStrategy | M.VN.Static,
        em = c.Fragment,
        eb = (0, M.yV)(function (e, t) {
          var n;
          let o = (0, P.B)(),
            {
              value: r,
              defaultValue: i,
              form: l,
              name: a,
              onChange: u,
              by: s,
              invalid: d = !1,
              disabled: p = o || !1,
              horizontal: x = !1,
              multiple: g = !1,
              __demoMode: h = !1,
              ...E
            } = e,
            S = x ? "horizontal" : "vertical",
            O = (0, I.T)(t),
            R = (function (e) {
              let [t] = (0, c.useState)(e);
              return t;
            })(i),
            [T = g ? [] : void 0, L] = (function (e, t, n) {
              let [o, r] = (0, c.useState)(n),
                i = void 0 !== e,
                l = (0, c.useRef)(i),
                a = (0, c.useRef)(!1),
                u = (0, c.useRef)(!1);
              return (
                !i || l.current || a.current
                  ? i ||
                    !l.current ||
                    u.current ||
                    ((u.current = !0),
                    (l.current = i),
                    console.error(
                      "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                    ))
                  : ((a.current = !0),
                    (l.current = i),
                    console.error(
                      "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                    )),
                [
                  i ? e : o,
                  (0, v.z)((e) => (i || r(e), null == t ? void 0 : t(e))),
                ]
              );
            })(r, u, R),
            [C, D] = (0, c.useReducer)(ed, {
              dataRef: (0, c.createRef)(),
              listboxState: h ? 0 : 1,
              options: [],
              searchQuery: "",
              activeOptionIndex: null,
              activationTrigger: 1,
              optionsVisible: !1,
              buttonElement: null,
              optionsElement: null,
              __demoMode: h,
            }),
            w = (0, c.useRef)({ static: !1, hold: !1 }),
            F = (0, c.useRef)(new Map()),
            z = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f;
              return (0, c.useCallback)(
                (t, n) =>
                  "string" == typeof e
                    ? (null == t ? void 0 : t[e]) ===
                      (null == n ? void 0 : n[e])
                    : e(t, n),
                [e]
              );
            })(s),
            A = (0, c.useCallback)(
              (e) =>
                (0, Y.E)(N.mode, {
                  1: () => T.some((t) => z(t, e)),
                  0: () => z(T, e),
                }),
              [T]
            ),
            N = (0, c.useMemo)(
              () => ({
                ...C,
                value: T,
                disabled: p,
                invalid: d,
                mode: g ? 1 : 0,
                orientation: S,
                compare: z,
                isSelected: A,
                optionsPropsRef: w,
                listRef: F,
              }),
              [T, p, d, g, C, F]
            );
          (0, m.e)(() => {
            C.dataRef.current = N;
          }, [N]);
          let B = 0 === N.listboxState;
          (0, y.O)(B, [N.buttonElement, N.optionsElement], (e, t) => {
            var n;
            D({ type: 1 }),
              (0, K.sP)(t, K.tJ.Loose) ||
                (e.preventDefault(),
                null == (n = N.buttonElement) || n.focus());
          });
          let V = (0, c.useMemo)(
              () => ({
                open: 0 === N.listboxState,
                disabled: p,
                invalid: d,
                value: T,
              }),
              [N, p, T, d]
            ),
            H = (0, v.z)((e) => {
              let t = N.options.find((t) => t.id === e);
              t && ee(t.dataRef.current.value);
            }),
            Q = (0, v.z)(() => {
              if (null !== N.activeOptionIndex) {
                let { dataRef: e, id: t } = N.options[N.activeOptionIndex];
                ee(e.current.value), D({ type: 2, focus: U.Specific, id: t });
              }
            }),
            G = (0, v.z)(() => D({ type: 0 })),
            Z = (0, v.z)(() => D({ type: 1 })),
            q = (0, b.G)(),
            X = (0, v.z)((e, t, n) => {
              q.dispose(),
                q.microTask(() =>
                  e === U.Specific
                    ? D({ type: 2, focus: U.Specific, id: t, trigger: n })
                    : D({ type: 2, focus: e, trigger: n })
                );
            }),
            $ = (0, v.z)(
              (e, t) => (
                D({ type: 5, id: e, dataRef: t }), () => D({ type: 6, id: e })
              )
            ),
            ee = (0, v.z)((e) =>
              (0, Y.E)(N.mode, {
                0: () => (null == L ? void 0 : L(e)),
                1() {
                  let t = N.value.slice(),
                    n = t.findIndex((t) => z(t, e));
                  return (
                    -1 === n ? t.push(e) : t.splice(n, 1),
                    null == L ? void 0 : L(t)
                  );
                },
              })
            ),
            et = (0, v.z)((e) => D({ type: 3, value: e })),
            en = (0, v.z)(() => D({ type: 4 })),
            eo = (0, v.z)((e) => {
              D({ type: 7, element: e });
            }),
            er = (0, v.z)((e) => {
              D({ type: 8, element: e });
            }),
            ei = (0, c.useMemo)(
              () => ({
                onChange: ee,
                registerOption: $,
                goToOption: X,
                closeListbox: Z,
                openListbox: G,
                selectActiveOption: Q,
                selectOption: H,
                search: et,
                clearSearch: en,
                setButtonElement: eo,
                setOptionsElement: er,
              }),
              []
            ),
            [el, eu] = (function () {
              let { inherit: e = !1 } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = W(),
                [n, o] = (0, c.useState)([]),
                r = e ? [t, ...n].filter(Boolean) : n;
              return [
                r.length > 0 ? r.join(" ") : void 0,
                (0, c.useMemo)(
                  () =>
                    function (e) {
                      let t = (0, v.z)(
                          (e) => (
                            o((t) => [...t, e]),
                            () =>
                              o((t) => {
                                let n = t.slice(),
                                  o = n.indexOf(e);
                                return -1 !== o && n.splice(o, 1), n;
                              })
                          )
                        ),
                        n = (0, c.useMemo)(
                          () => ({
                            register: t,
                            slot: e.slot,
                            name: e.name,
                            props: e.props,
                            value: e.value,
                          }),
                          [t, e.slot, e.name, e.props, e.value]
                        );
                      return c.createElement(
                        J.Provider,
                        { value: n },
                        e.children
                      );
                    },
                  [o]
                ),
              ];
            })({ inherit: !0 }),
            ec = (0, c.useCallback)(() => {
              if (void 0 !== R) return null == L ? void 0 : L(R);
            }, [L, R]),
            ef = (0, M.L6)();
          return c.createElement(
            eu,
            {
              value: el,
              props: { htmlFor: null == (n = N.buttonElement) ? void 0 : n.id },
              slot: { open: 0 === N.listboxState, disabled: p },
            },
            c.createElement(
              k.HO,
              null,
              c.createElement(
                ea.Provider,
                { value: ei },
                c.createElement(
                  es.Provider,
                  { value: N },
                  c.createElement(
                    j.up,
                    {
                      value: (0, Y.E)(N.listboxState, {
                        0: j.ZM.Open,
                        1: j.ZM.Closed,
                      }),
                    },
                    null != a &&
                      null != T &&
                      c.createElement(_, {
                        disabled: p,
                        data: { [a]: T },
                        form: l,
                        onReset: ec,
                      }),
                    ef({
                      ourProps: { ref: O },
                      theirProps: E,
                      slot: V,
                      defaultTag: ep,
                      name: "Listbox",
                    })
                  )
                )
              )
            )
          );
        }),
        ex = (0, M.yV)(function (e, t) {
          var n;
          let o = ec("Listbox.Button"),
            r = eu("Listbox.Button"),
            i = (0, c.useId)(),
            l = V(),
            {
              id: a = l || "headlessui-listbox-button-".concat(i),
              disabled: f = o.disabled || !1,
              autoFocus: m = !1,
              ...b
            } = e,
            x = (0, I.T)(t, (0, k.AZ)(), r.setButtonElement),
            g = (0, k.L)(),
            h = (0, v.z)((e) => {
              switch (e.key) {
                case X.R.Enter:
                  !(function (e) {
                    var t, n;
                    let o =
                      null != (t = null == e ? void 0 : e.form)
                        ? t
                        : e.closest("form");
                    if (o) {
                      for (let t of o.elements)
                        if (
                          t !== e &&
                          (("INPUT" === t.tagName && "submit" === t.type) ||
                            ("BUTTON" === t.tagName && "submit" === t.type) ||
                            ("INPUT" === t.nodeName && "image" === t.type))
                        ) {
                          t.click();
                          return;
                        }
                      null == (n = o.requestSubmit) || n.call(o);
                    }
                  })(e.currentTarget);
                  break;
                case X.R.Space:
                case X.R.ArrowDown:
                  e.preventDefault(),
                    (0, d.flushSync)(() => r.openListbox()),
                    o.value || r.goToOption(U.First);
                  break;
                case X.R.ArrowUp:
                  e.preventDefault(),
                    (0, d.flushSync)(() => r.openListbox()),
                    o.value || r.goToOption(U.Last);
              }
            }),
            E = (0, v.z)((e) => {
              e.key === X.R.Space && e.preventDefault();
            }),
            y = (0, v.z)((e) => {
              var t;
              if ((0, H.P)(e.currentTarget)) return e.preventDefault();
              0 === o.listboxState
                ? ((0, d.flushSync)(() => r.closeListbox()),
                  null == (t = o.buttonElement) ||
                    t.focus({ preventScroll: !0 }))
                : (e.preventDefault(), r.openListbox());
            }),
            S = (0, v.z)((e) => e.preventDefault()),
            R = W([a]),
            T = (0, q.zH)(),
            { isFocusVisible: L, focusProps: C } = (0, u.F)({ autoFocus: m }),
            { isHovered: D, hoverProps: P } = (0, s.X)({ isDisabled: f }),
            { pressed: w, pressProps: F } = (0, p.x)({ disabled: f }),
            z = (0, c.useMemo)(
              () => ({
                open: 0 === o.listboxState,
                active: w || 0 === o.listboxState,
                disabled: f,
                invalid: o.invalid,
                value: o.value,
                hover: D,
                focus: L,
                autofocus: m,
              }),
              [o.listboxState, o.value, f, D, L, w, o.invalid, m]
            ),
            A = (0, M.dG)(
              g(),
              {
                ref: x,
                id: a,
                type: (0, O.f)(e, o.buttonElement),
                "aria-haspopup": "listbox",
                "aria-controls": null == (n = o.optionsElement) ? void 0 : n.id,
                "aria-expanded": 0 === o.listboxState,
                "aria-labelledby": R,
                "aria-describedby": T,
                disabled: f || void 0,
                autoFocus: m,
                onKeyDown: h,
                onKeyUp: E,
                onKeyPress: S,
                onClick: y,
              },
              C,
              P,
              F
            );
          return (0, M.L6)()({
            ourProps: A,
            theirProps: b,
            slot: z,
            defaultTag: "button",
            name: "Listbox.Button",
          });
        }),
        eg = (0, M.yV)(function (e, t) {
          var n, o;
          let r = (0, c.useId)(),
            {
              id: i = "headlessui-listbox-options-".concat(r),
              anchor: l,
              portal: a = !1,
              modal: u = !0,
              transition: s = !1,
              ...p
            } = e,
            f = (0, k.Vy)(l),
            [h, y] = (0, c.useState)(null);
          f && (a = !0);
          let O = ec("Listbox.Options"),
            T = eu("Listbox.Options"),
            L = (0, S.i)(O.optionsElement),
            C = (0, j.oJ)(),
            [P, w] = (0, D.Y)(
              s,
              h,
              null !== C ? (C & j.ZM.Open) === j.ZM.Open : 0 === O.listboxState
            );
          (0, E.m)(P, O.buttonElement, T.closeListbox);
          let F = !O.__demoMode && u && 0 === O.listboxState;
          (0, R.P)(F, L);
          let z = !O.__demoMode && u && 0 === O.listboxState;
          (0,
          g.s)(z, { allowed: (0, c.useCallback)(() => [O.buttonElement, O.optionsElement], [O.buttonElement, O.optionsElement]) });
          let A =
              !(function (e, t) {
                let n = (0, c.useRef)({ left: 0, top: 0 });
                if (
                  ((0, m.e)(() => {
                    if (!t) return;
                    let e = t.getBoundingClientRect();
                    e && (n.current = e);
                  }, [e, t]),
                  null == t || !e || t === document.activeElement)
                )
                  return !1;
                let o = t.getBoundingClientRect();
                return o.top !== n.current.top || o.left !== n.current.left;
              })(0 !== O.listboxState, O.buttonElement) && P,
            _ = (function (e, t) {
              let [n, o] = (0, c.useState)(t);
              return e || n === t || o(t), e ? n : t;
            })(P && 1 === O.listboxState, O.value),
            N = (0, v.z)((e) => O.compare(_, e)),
            B = (0, c.useMemo)(() => {
              var e;
              if (
                null == f ||
                !(
                  null != (e = null == f ? void 0 : f.to) &&
                  e.includes("selection")
                )
              )
                return null;
              let t = O.options.findIndex((e) => N(e.dataRef.current.value));
              return -1 === t && (t = 0), t;
            }, [f, O.options]),
            V = (() => {
              if (null == f) return;
              if (null === B) return { ...f, inner: void 0 };
              let e = Array.from(O.listRef.current.values());
              return { ...f, inner: { listRef: { current: e }, index: B } };
            })(),
            [H, Q] = (0, k.ES)(V),
            G = (0, k.U8)(),
            q = (0, I.T)(t, f ? H : null, T.setOptionsElement, y),
            J = (0, b.G)();
          (0, c.useEffect)(() => {
            var e;
            let t = O.optionsElement;
            t &&
              0 === O.listboxState &&
              t !== (null == (e = (0, Z.r)(t)) ? void 0 : e.activeElement) &&
              (null == t || t.focus({ preventScroll: !0 }));
          }, [O.listboxState, O.optionsElement]);
          let W = (0, v.z)((e) => {
              var t, n;
              switch ((J.dispose(), e.key)) {
                case X.R.Space:
                  if ("" !== O.searchQuery)
                    return (
                      e.preventDefault(), e.stopPropagation(), T.search(e.key)
                    );
                case X.R.Enter:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null !== O.activeOptionIndex)
                  ) {
                    let { dataRef: e } = O.options[O.activeOptionIndex];
                    T.onChange(e.current.value);
                  }
                  0 === O.mode &&
                    ((0, d.flushSync)(() => T.closeListbox()),
                    null == (t = O.buttonElement) ||
                      t.focus({ preventScroll: !0 }));
                  break;
                case (0, Y.E)(O.orientation, {
                  vertical: X.R.ArrowDown,
                  horizontal: X.R.ArrowRight,
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T.goToOption(U.Next)
                  );
                case (0, Y.E)(O.orientation, {
                  vertical: X.R.ArrowUp,
                  horizontal: X.R.ArrowLeft,
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T.goToOption(U.Previous)
                  );
                case X.R.Home:
                case X.R.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T.goToOption(U.First)
                  );
                case X.R.End:
                case X.R.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T.goToOption(U.Last)
                  );
                case X.R.Escape:
                  e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.flushSync)(() => T.closeListbox()),
                    null == (n = O.buttonElement) ||
                      n.focus({ preventScroll: !0 });
                  return;
                case X.R.Tab:
                  e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.flushSync)(() => T.closeListbox()),
                    (0, K.EO)(
                      O.buttonElement,
                      e.shiftKey ? K.TO.Previous : K.TO.Next
                    );
                  break;
                default:
                  1 === e.key.length &&
                    (T.search(e.key), J.setTimeout(() => T.clearSearch(), 350));
              }
            }),
            $ = null == (n = O.buttonElement) ? void 0 : n.id,
            et = (0, c.useMemo)(
              () => ({ open: 0 === O.listboxState }),
              [O.listboxState]
            ),
            en = (0, M.dG)(f ? G() : {}, {
              id: i,
              ref: q,
              "aria-activedescendant":
                null === O.activeOptionIndex ||
                null == (o = O.options[O.activeOptionIndex])
                  ? void 0
                  : o.id,
              "aria-multiselectable": 1 === O.mode || void 0,
              "aria-labelledby": $,
              "aria-orientation": O.orientation,
              onKeyDown: W,
              role: "listbox",
              tabIndex: 0 === O.listboxState ? 0 : void 0,
              style: {
                ...p.style,
                ...Q,
                "--button-width": (0, x.h)(O.buttonElement, !0).width,
              },
              ...(0, D.X)(w),
            }),
            eo = (0, M.L6)();
          return c.createElement(
            ee.h_,
            { enabled: !!a && (e.static || P) },
            c.createElement(
              es.Provider,
              { value: 1 === O.mode ? O : { ...O, isSelected: N } },
              eo({
                ourProps: en,
                theirProps: p,
                slot: et,
                defaultTag: "div",
                features: ev,
                visible: A,
                name: "Listbox.Options",
              })
            )
          );
        }),
        eh = (0, M.yV)(function (e, t) {
          let n, o, r;
          let i = (0, c.useId)(),
            {
              id: l = "headlessui-listbox-option-".concat(i),
              disabled: a = !1,
              value: u,
              ...s
            } = e,
            p = !0 === (0, c.useContext)(ef),
            f = ec("Listbox.Option"),
            b = eu("Listbox.Option"),
            x =
              null !== f.activeOptionIndex &&
              f.options[f.activeOptionIndex].id === l,
            g = f.isSelected(u),
            E = (0, c.useRef)(null),
            y =
              ((n = (0, c.useRef)("")),
              (o = (0, c.useRef)("")),
              (0, v.z)(() => {
                let e = E.current;
                if (!e) return "";
                let t = e.innerText;
                if (n.current === t) return o.current;
                let r = (function (e) {
                  let t = e.getAttribute("aria-label");
                  if ("string" == typeof t) return t.trim();
                  let n = e.getAttribute("aria-labelledby");
                  if (n) {
                    let e = n
                      .split(" ")
                      .map((e) => {
                        let t = document.getElementById(e);
                        if (t) {
                          let e = t.getAttribute("aria-label");
                          return "string" == typeof e ? e.trim() : L(t).trim();
                        }
                        return null;
                      })
                      .filter(Boolean);
                    if (e.length > 0) return e.join(", ");
                  }
                  return L(e).trim();
                })(e)
                  .trim()
                  .toLowerCase();
                return (n.current = t), (o.current = r), r;
              })),
            S = (0, h.E)({
              disabled: a,
              value: u,
              domRef: E,
              get textValue() {
                return y();
              },
            }),
            O = (0, I.T)(t, E, (e) => {
              e ? f.listRef.current.set(l, e) : f.listRef.current.delete(l);
            });
          (0, m.e)(() => {
            if (
              !f.__demoMode &&
              0 === f.listboxState &&
              x &&
              0 !== f.activationTrigger
            )
              return (0, G.k)().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = E.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [
            E,
            x,
            f.__demoMode,
            f.listboxState,
            f.activationTrigger,
            f.activeOptionIndex,
          ]),
            (0, m.e)(() => {
              if (!p) return b.registerOption(l, S);
            }, [S, l, p]);
          let R = (0, v.z)((e) => {
              var t;
              if (a) return e.preventDefault();
              b.onChange(u),
                0 === f.mode &&
                  ((0, d.flushSync)(() => b.closeListbox()),
                  null == (t = f.buttonElement) ||
                    t.focus({ preventScroll: !0 }));
            }),
            T = (0, v.z)(() => {
              if (a) return b.goToOption(U.Nothing);
              b.goToOption(U.Specific, l);
            }),
            D =
              ((r = (0, c.useRef)([-1, -1])),
              {
                wasMoved(e) {
                  let t = C(e);
                  return (
                    (r.current[0] !== t[0] || r.current[1] !== t[1]) &&
                    ((r.current = t), !0)
                  );
                },
                update(e) {
                  r.current = C(e);
                },
              }),
            P = (0, v.z)((e) => {
              D.update(e), !a && (x || b.goToOption(U.Specific, l, 0));
            }),
            k = (0, v.z)((e) => {
              D.wasMoved(e) && (a || x || b.goToOption(U.Specific, l, 0));
            }),
            w = (0, v.z)((e) => {
              D.wasMoved(e) && (a || (x && b.goToOption(U.Nothing)));
            }),
            F = (0, c.useMemo)(
              () => ({
                active: x,
                focus: x,
                selected: g,
                disabled: a,
                selectedOption: g && p,
              }),
              [x, g, a, p]
            ),
            z = p
              ? {}
              : {
                  id: l,
                  ref: O,
                  role: "option",
                  tabIndex: !0 === a ? void 0 : -1,
                  "aria-disabled": !0 === a || void 0,
                  "aria-selected": g,
                  disabled: void 0,
                  onClick: R,
                  onFocus: T,
                  onPointerEnter: P,
                  onMouseEnter: P,
                  onPointerMove: k,
                  onMouseMove: k,
                  onPointerLeave: w,
                  onMouseLeave: w,
                },
            A = (0, M.L6)();
          return !g && p
            ? null
            : A({
                ourProps: z,
                theirProps: s,
                slot: F,
                defaultTag: "div",
                name: "Listbox.Option",
              });
        }),
        eE = Object.assign(eb, {
          Button: ex,
          Label: $,
          Options: eg,
          Option: eh,
          SelectedOption: (0, M.yV)(function (e, t) {
            let { options: n, placeholder: o, ...r } = e,
              i = { ref: (0, I.T)(t) },
              l = ec("ListboxSelectedOption"),
              a = (0, c.useMemo)(() => ({}), []),
              u =
                void 0 === l.value ||
                null === l.value ||
                (1 === l.mode &&
                  Array.isArray(l.value) &&
                  0 === l.value.length),
              s = (0, M.L6)();
            return c.createElement(
              ef.Provider,
              { value: !0 },
              s({
                ourProps: i,
                theirProps: {
                  ...r,
                  children: c.createElement(c.Fragment, null, o && u ? o : n),
                },
                slot: a,
                defaultTag: em,
                name: "ListboxSelectedOption",
              })
            );
          }),
        });
    },
    80157: function (e, t, n) {
      n.d(t, {
        s: function () {
          return c;
        },
      });
      var o = n(61622),
        r = n(23233),
        i = n(70494),
        l = n(57110);
      let a = new Map(),
        u = new Map();
      function s(e) {
        var t;
        let n = null != (t = u.get(e)) ? t : 0;
        return (
          u.set(e, n + 1),
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
              let n = null != (t = u.get(e)) ? t : 1;
              if ((1 === n ? u.delete(e) : u.set(e, n - 1), 1 !== n)) return;
              let o = a.get(e);
              o &&
                (null === o["aria-hidden"]
                  ? e.removeAttribute("aria-hidden")
                  : e.setAttribute("aria-hidden", o["aria-hidden"]),
                (e.inert = o.inert),
                a.delete(e));
            })(e)
        );
      }
      function c(e) {
        let { allowed: t, disallowed: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = (0, i.g)(e, "inert-others");
        (0, l.e)(() => {
          var e, i;
          if (!a) return;
          let l = (0, o.k)();
          for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
            t && l.add(s(t));
          let u = null != (i = null == t ? void 0 : t()) ? i : [];
          for (let e of u) {
            if (!e) continue;
            let t = (0, r.r)(e);
            if (!t) continue;
            let n = e.parentElement;
            for (; n && n !== t.body; ) {
              for (let e of n.children)
                u.some((t) => e.contains(t)) || l.add(s(e));
              n = n.parentElement;
            }
          }
          return l.dispose;
        }, [a, t, n]);
      }
    },
    14872: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
      });
      var o = n(67294);
      let r = (0, o.createContext)(void 0);
      function i() {
        return (0, o.useContext)(r);
      }
    },
  },
]);
