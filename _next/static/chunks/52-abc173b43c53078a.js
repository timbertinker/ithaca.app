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
      (e._sentryDebugIds[t] = "472dd25c-58bf-49a1-9afe-51fa82e741ed"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-472dd25c-58bf-49a1-9afe-51fa82e741ed"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [52],
  {
    80052: function (e, t, n) {
      let o, r;
      n.d(t, {
        Hi: function () {
          return $;
        },
        J2: function () {
          return Q;
        },
        O7: function () {
          return Y;
        },
      });
      var l = n(22944),
        u = n(18419),
        a = n(67294),
        s = n(65448),
        c = n(29408),
        i = n(68354),
        d = n(32784),
        p = n(57110),
        f = n(39438),
        v = n(54555),
        b = n(382),
        m = n(99523),
        P = n(91034),
        E = n(85272),
        y = n(99915),
        S = n(40947),
        h = n(54751),
        g = n(2015),
        I = n(38213),
        T = n(95086),
        w = n(51228),
        k = n(1365),
        O = n(67257),
        C = n(58766),
        M = n(16116),
        x = n(23233),
        F = n(83619),
        _ = n(71237),
        B = n(23811),
        N =
          (((o = N || {})[(o.Open = 0)] = "Open"),
          (o[(o.Closed = 1)] = "Closed"),
          o),
        R =
          (((r = R || {})[(r.TogglePopover = 0)] = "TogglePopover"),
          (r[(r.ClosePopover = 1)] = "ClosePopover"),
          (r[(r.SetButton = 2)] = "SetButton"),
          (r[(r.SetButtonId = 3)] = "SetButtonId"),
          (r[(r.SetPanel = 4)] = "SetPanel"),
          (r[(r.SetPanelId = 5)] = "SetPanelId"),
          r);
      let z = {
          0: (e) => ({
            ...e,
            popoverState: (0, M.E)(e.popoverState, { 0: 1, 1: 0 }),
            __demoMode: !1,
          }),
          1: (e) =>
            1 === e.popoverState
              ? e
              : { ...e, popoverState: 1, __demoMode: !1 },
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        D = (0, a.createContext)(null);
      function L(e) {
        let t = (0, a.useContext)(D);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, L), t);
        }
        return t;
      }
      D.displayName = "PopoverContext";
      let G = (0, a.createContext)(null);
      function H(e) {
        let t = (0, a.useContext)(G);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, H), t);
        }
        return t;
      }
      G.displayName = "PopoverAPIContext";
      let V = (0, a.createContext)(null);
      function A() {
        return (0, a.useContext)(V);
      }
      V.displayName = "PopoverGroupContext";
      let Z = (0, a.createContext)(null);
      function j(e, t) {
        return (0, M.E)(t.type, z, e, t);
      }
      Z.displayName = "PopoverPanelContext";
      let J = F.VN.RenderStrategy | F.VN.Static;
      function K(e, t) {
        let n = (0, a.useId)(),
          {
            id: o = "headlessui-popover-backdrop-".concat(n),
            transition: r = !1,
            ...l
          } = e,
          [{ popoverState: u }, s] = L("Popover.Backdrop"),
          [c, d] = (0, a.useState)(null),
          p = (0, S.T)(t, d),
          f = (0, k.oJ)(),
          [v, b] = (0, g.Y)(
            r,
            c,
            null !== f ? (f & k.ZM.Open) === k.ZM.Open : 0 === u
          ),
          m = (0, i.z)((e) => {
            if ((0, O.P)(e.currentTarget)) return e.preventDefault();
            s({ type: 1 });
          }),
          P = (0, a.useMemo)(() => ({ open: 0 === u }), [u]),
          E = { ref: p, id: o, "aria-hidden": !0, onClick: m, ...(0, g.X)(b) };
        return (0, F.L6)()({
          ourProps: E,
          theirProps: l,
          slot: P,
          defaultTag: "div",
          features: J,
          visible: v,
          name: "Popover.Backdrop",
        });
      }
      let q = F.VN.RenderStrategy | F.VN.Static,
        X = (0, F.yV)(function (e, t) {
          var n;
          let { __demoMode: o = !1, ...r } = e,
            l = (0, a.useRef)(null),
            u = (0, S.T)(
              t,
              (0, S.h)((e) => {
                l.current = e;
              })
            ),
            s = (0, a.useRef)([]),
            c = (0, a.useReducer)(j, {
              __demoMode: o,
              popoverState: o ? 0 : 1,
              buttons: s,
              button: null,
              buttonId: null,
              panel: null,
              panelId: null,
              beforePanelSentinel: (0, a.createRef)(),
              afterPanelSentinel: (0, a.createRef)(),
              afterButtonSentinel: (0, a.createRef)(),
            }),
            [
              {
                popoverState: p,
                button: v,
                buttonId: P,
                panel: y,
                panelId: h,
                beforePanelSentinel: g,
                afterPanelSentinel: w,
                afterButtonSentinel: O,
              },
              x,
            ] = c,
            _ = (0, m.i)(null != (n = l.current) ? n : v),
            N = (0, a.useMemo)(() => {
              if (!v || !y) return !1;
              for (let e of document.querySelectorAll("body > *"))
                if (
                  Number(null == e ? void 0 : e.contains(v)) ^
                  Number(null == e ? void 0 : e.contains(y))
                )
                  return !0;
              let e = (0, C.GO)(),
                t = e.indexOf(v),
                n = (t + e.length - 1) % e.length,
                o = (t + 1) % e.length,
                r = e[n],
                l = e[o];
              return !y.contains(r) && !y.contains(l);
            }, [v, y]),
            R = (0, f.E)(P),
            z = (0, f.E)(h),
            L = (0, a.useMemo)(
              () => ({ buttonId: R, panelId: z, close: () => x({ type: 1 }) }),
              [R, z, x]
            ),
            H = A(),
            V = null == H ? void 0 : H.registerPopover,
            J = (0, i.z)(() => {
              var e;
              return null !=
                (e = null == H ? void 0 : H.isFocusWithinPopoverGroup())
                ? e
                : (null == _ ? void 0 : _.activeElement) &&
                    ((null == v ? void 0 : v.contains(_.activeElement)) ||
                      (null == y ? void 0 : y.contains(_.activeElement)));
            });
          (0, a.useEffect)(() => (null == V ? void 0 : V(L)), [V, L]);
          let [K, q] = (0, B.kF)(),
            X = (0, E.H1)(v),
            Y = (0, E.vs)({
              mainTreeNode: X,
              portals: K,
              defaultContainers: [v, y],
            });
          (0, d.O)(
            null == _ ? void 0 : _.defaultView,
            "focus",
            (e) => {
              var t, n, o, r, l, u;
              e.target !== window &&
                e.target instanceof HTMLElement &&
                0 === p &&
                (J() ||
                  (v &&
                    y &&
                    (Y.contains(e.target) ||
                      (null !=
                        (n = null == (t = g.current) ? void 0 : t.contains) &&
                        n.call(t, e.target)) ||
                      (null !=
                        (r = null == (o = w.current) ? void 0 : o.contains) &&
                        r.call(o, e.target)) ||
                      (null !=
                        (u = null == (l = O.current) ? void 0 : l.contains) &&
                        u.call(l, e.target)) ||
                      x({ type: 1 }))));
            },
            !0
          ),
            (0, b.O)(0 === p, Y.resolveContainers, (e, t) => {
              x({ type: 1 }),
                (0, C.sP)(t, C.tJ.Loose) ||
                  (e.preventDefault(), null == v || v.focus());
            });
          let U = (0, i.z)((e) => {
              x({ type: 1 });
              let t = e
                ? e instanceof HTMLElement
                  ? e
                  : "current" in e && e.current instanceof HTMLElement
                  ? e.current
                  : v
                : v;
              null == t || t.focus();
            }),
            W = (0, a.useMemo)(() => ({ close: U, isPortalled: N }), [U, N]),
            $ = (0, a.useMemo)(() => ({ open: 0 === p, close: U }), [p, U]),
            Q = (0, F.L6)();
          return a.createElement(
            E.Jl,
            { node: X },
            a.createElement(
              T.HO,
              null,
              a.createElement(
                Z.Provider,
                { value: null },
                a.createElement(
                  D.Provider,
                  { value: c },
                  a.createElement(
                    G.Provider,
                    { value: W },
                    a.createElement(
                      I.Z,
                      { value: U },
                      a.createElement(
                        k.up,
                        {
                          value: (0, M.E)(p, { 0: k.ZM.Open, 1: k.ZM.Closed }),
                        },
                        a.createElement(
                          q,
                          null,
                          Q({
                            ourProps: { ref: u },
                            theirProps: r,
                            slot: $,
                            defaultTag: "div",
                            name: "Popover",
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        Y = (0, F.yV)(function (e, t) {
          let n = (0, a.useId)(),
            {
              id: o = "headlessui-popover-button-".concat(n),
              disabled: r = !1,
              autoFocus: c = !1,
              ...d
            } = e,
            [p, f] = L("Popover.Button"),
            { isPortalled: v } = H("Popover.Button"),
            b = (0, a.useRef)(null),
            E = "headlessui-focus-sentinel-".concat((0, a.useId)()),
            y = A(),
            g = null == y ? void 0 : y.closeOthers,
            I = null !== (0, a.useContext)(Z);
          (0, a.useEffect)(() => {
            if (!I)
              return (
                f({ type: 3, buttonId: o }),
                () => {
                  f({ type: 3, buttonId: null });
                }
              );
          }, [I, o, f]);
          let [k] = (0, a.useState)(() => Symbol()),
            x = (0, S.T)(
              b,
              t,
              (0, T.AZ)(),
              (0, i.z)((e) => {
                if (!I) {
                  if (e) p.buttons.current.push(k);
                  else {
                    let e = p.buttons.current.indexOf(k);
                    -1 !== e && p.buttons.current.splice(e, 1);
                  }
                  p.buttons.current.length > 1 &&
                    console.warn(
                      "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
                    ),
                    e && f({ type: 2, button: e });
                }
              })
            ),
            B = (0, S.T)(b, t),
            N = (0, m.i)(b),
            R = (0, i.z)((e) => {
              var t, n, o;
              if (I) {
                if (1 === p.popoverState) return;
                switch (e.key) {
                  case _.R.Space:
                  case _.R.Enter:
                    e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      f({ type: 1 }),
                      null == (o = p.button) || o.focus();
                }
              } else
                switch (e.key) {
                  case _.R.Space:
                  case _.R.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === p.popoverState && (null == g || g(p.buttonId)),
                      f({ type: 0 });
                    break;
                  case _.R.Escape:
                    if (0 !== p.popoverState)
                      return null == g ? void 0 : g(p.buttonId);
                    if (
                      !b.current ||
                      (null != N &&
                        N.activeElement &&
                        !b.current.contains(N.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), f({ type: 1 });
                }
            }),
            z = (0, i.z)((e) => {
              I || (e.key === _.R.Space && e.preventDefault());
            }),
            D = (0, i.z)((e) => {
              var t, n;
              (0, O.P)(e.currentTarget) ||
                r ||
                (I
                  ? (f({ type: 1 }), null == (t = p.button) || t.focus())
                  : (e.preventDefault(),
                    e.stopPropagation(),
                    1 === p.popoverState && (null == g || g(p.buttonId)),
                    f({ type: 0 }),
                    null == (n = p.button) || n.focus()));
            }),
            G = (0, i.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            { isFocusVisible: V, focusProps: j } = (0, l.F)({ autoFocus: c }),
            { isHovered: J, hoverProps: K } = (0, u.X)({ isDisabled: r }),
            { pressed: q, pressProps: X } = (0, s.x)({ disabled: r }),
            Y = 0 === p.popoverState,
            U = (0, a.useMemo)(
              () => ({
                open: Y,
                active: q || Y,
                disabled: r,
                hover: J,
                focus: V,
                autofocus: c,
              }),
              [Y, J, V, q, r, c]
            ),
            W = (0, P.f)(e, p.button),
            $ = I
              ? (0, F.dG)(
                  {
                    ref: B,
                    type: W,
                    onKeyDown: R,
                    onClick: D,
                    disabled: r || void 0,
                    autoFocus: c,
                  },
                  j,
                  K,
                  X
                )
              : (0, F.dG)(
                  {
                    ref: x,
                    id: p.buttonId,
                    type: W,
                    "aria-expanded": 0 === p.popoverState,
                    "aria-controls": p.panel ? p.panelId : void 0,
                    disabled: r || void 0,
                    autoFocus: c,
                    onKeyDown: R,
                    onKeyUp: z,
                    onClick: D,
                    onMouseDown: G,
                  },
                  j,
                  K,
                  X
                ),
            Q = (0, h.l)(),
            ee = (0, i.z)(() => {
              let e = p.panel;
              e &&
                (0, M.E)(Q.current, {
                  [h.N.Forwards]: () => (0, C.jA)(e, C.TO.First),
                  [h.N.Backwards]: () => (0, C.jA)(e, C.TO.Last),
                }) === C.fE.Error &&
                (0, C.jA)(
                  (0, C.GO)().filter(
                    (e) => "true" !== e.dataset.headlessuiFocusGuard
                  ),
                  (0, M.E)(Q.current, {
                    [h.N.Forwards]: C.TO.Next,
                    [h.N.Backwards]: C.TO.Previous,
                  }),
                  { relativeTo: p.button }
                );
            }),
            et = (0, F.L6)();
          return a.createElement(
            a.Fragment,
            null,
            et({
              ourProps: $,
              theirProps: d,
              slot: U,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            Y &&
              !I &&
              v &&
              a.createElement(w._, {
                id: E,
                ref: p.afterButtonSentinel,
                features: w.x.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: ee,
              })
          );
        }),
        U = (0, F.yV)(K),
        W = (0, F.yV)(K),
        $ = (0, F.yV)(function (e, t) {
          let n = (0, a.useId)(),
            {
              id: o = "headlessui-popover-panel-".concat(n),
              focus: r = !1,
              anchor: l,
              portal: u = !1,
              modal: s = !1,
              transition: d = !1,
              ...f
            } = e,
            [b, P] = L("Popover.Panel"),
            { close: E, isPortalled: I } = H("Popover.Panel"),
            O = "headlessui-focus-sentinel-before-".concat(n),
            x = "headlessui-focus-sentinel-after-".concat(n),
            N = (0, a.useRef)(null),
            R = (0, T.Vy)(l),
            [z, D] = (0, T.ES)(R),
            V = (0, T.U8)();
          R && (u = !0);
          let [A, j] = (0, a.useState)(null),
            J = (0, S.T)(
              N,
              t,
              R ? z : null,
              (0, i.z)((e) => P({ type: 4, panel: e })),
              j
            ),
            K = (0, m.i)(N);
          (0, p.e)(
            () => (
              P({ type: 5, panelId: o }),
              () => {
                P({ type: 5, panelId: null });
              }
            ),
            [o, P]
          );
          let X = (0, k.oJ)(),
            [Y, U] = (0, g.Y)(
              d,
              A,
              null !== X ? (X & k.ZM.Open) === k.ZM.Open : 0 === b.popoverState
            );
          (0, v.m)(Y, b.button, () => {
            P({ type: 1 });
          });
          let W = !b.__demoMode && s && Y;
          (0, y.P)(W, K);
          let $ = (0, i.z)((e) => {
            var t;
            if (e.key === _.R.Escape) {
              if (
                0 !== b.popoverState ||
                !N.current ||
                (null != K &&
                  K.activeElement &&
                  !N.current.contains(K.activeElement))
              )
                return;
              e.preventDefault(),
                e.stopPropagation(),
                P({ type: 1 }),
                null == (t = b.button) || t.focus();
            }
          });
          (0, a.useEffect)(() => {
            var t;
            e.static ||
              (1 === b.popoverState &&
                (null == (t = e.unmount) || t) &&
                P({ type: 4, panel: null }));
          }, [b.popoverState, e.unmount, e.static, P]),
            (0, a.useEffect)(() => {
              if (b.__demoMode || !r || 0 !== b.popoverState || !N.current)
                return;
              let e = null == K ? void 0 : K.activeElement;
              N.current.contains(e) || (0, C.jA)(N.current, C.TO.First);
            }, [b.__demoMode, r, N.current, b.popoverState]);
          let Q = (0, a.useMemo)(
              () => ({ open: 0 === b.popoverState, close: E }),
              [b.popoverState, E]
            ),
            ee = (0, F.dG)(R ? V() : {}, {
              ref: J,
              id: o,
              onKeyDown: $,
              onBlur:
                r && 0 === b.popoverState
                  ? (e) => {
                      var t, n, o, r, l;
                      let u = e.relatedTarget;
                      u &&
                        N.current &&
                        ((null != (t = N.current) && t.contains(u)) ||
                          (P({ type: 1 }),
                          ((null !=
                            (o =
                              null == (n = b.beforePanelSentinel.current)
                                ? void 0
                                : n.contains) &&
                            o.call(n, u)) ||
                            (null !=
                              (l =
                                null == (r = b.afterPanelSentinel.current)
                                  ? void 0
                                  : r.contains) &&
                              l.call(r, u))) &&
                            u.focus({ preventScroll: !0 })));
                    }
                  : void 0,
              tabIndex: -1,
              style: {
                ...f.style,
                ...D,
                "--button-width": (0, c.h)(b.button, !0).width,
              },
              ...(0, g.X)(U),
            }),
            et = (0, h.l)(),
            en = (0, i.z)(() => {
              let e = N.current;
              e &&
                (0, M.E)(et.current, {
                  [h.N.Forwards]: () => {
                    var t;
                    (0, C.jA)(e, C.TO.First) === C.fE.Error &&
                      (null == (t = b.afterPanelSentinel.current) || t.focus());
                  },
                  [h.N.Backwards]: () => {
                    var e;
                    null == (e = b.button) || e.focus({ preventScroll: !0 });
                  },
                });
            }),
            eo = (0, i.z)(() => {
              let e = N.current;
              e &&
                (0, M.E)(et.current, {
                  [h.N.Forwards]: () => {
                    if (!b.button) return;
                    let e = (0, C.GO)(),
                      t = e.indexOf(b.button),
                      n = e.slice(0, t + 1),
                      o = [...e.slice(t + 1), ...n];
                    for (let e of o.slice())
                      if (
                        "true" === e.dataset.headlessuiFocusGuard ||
                        (null != A && A.contains(e))
                      ) {
                        let t = o.indexOf(e);
                        -1 !== t && o.splice(t, 1);
                      }
                    (0, C.jA)(o, C.TO.First, { sorted: !1 });
                  },
                  [h.N.Backwards]: () => {
                    var t;
                    (0, C.jA)(e, C.TO.Previous) === C.fE.Error &&
                      (null == (t = b.button) || t.focus());
                  },
                });
            }),
            er = (0, F.L6)();
          return a.createElement(
            k.uu,
            null,
            a.createElement(
              Z.Provider,
              { value: o },
              a.createElement(
                G.Provider,
                { value: { close: E, isPortalled: I } },
                a.createElement(
                  B.h_,
                  { enabled: !!u && (e.static || Y) },
                  Y &&
                    I &&
                    a.createElement(w._, {
                      id: O,
                      ref: b.beforePanelSentinel,
                      features: w.x.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: en,
                    }),
                  er({
                    ourProps: ee,
                    theirProps: f,
                    slot: Q,
                    defaultTag: "div",
                    features: q,
                    visible: Y,
                    name: "Popover.Panel",
                  }),
                  Y &&
                    I &&
                    a.createElement(w._, {
                      id: x,
                      ref: b.afterPanelSentinel,
                      features: w.x.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: eo,
                    })
                )
              )
            )
          );
        }),
        Q = Object.assign(X, {
          Button: Y,
          Backdrop: W,
          Overlay: U,
          Panel: $,
          Group: (0, F.yV)(function (e, t) {
            let n = (0, a.useRef)(null),
              o = (0, S.T)(n, t),
              [r, l] = (0, a.useState)([]),
              u = (0, i.z)((e) => {
                l((t) => {
                  let n = t.indexOf(e);
                  if (-1 !== n) {
                    let e = t.slice();
                    return e.splice(n, 1), e;
                  }
                  return t;
                });
              }),
              s = (0, i.z)((e) => (l((t) => [...t, e]), () => u(e))),
              c = (0, i.z)(() => {
                var e;
                let t = (0, x.r)(n);
                if (!t) return !1;
                let o = t.activeElement;
                return (
                  !!(null != (e = n.current) && e.contains(o)) ||
                  r.some((e) => {
                    var n, r;
                    return (
                      (null == (n = t.getElementById(e.buttonId.current))
                        ? void 0
                        : n.contains(o)) ||
                      (null == (r = t.getElementById(e.panelId.current))
                        ? void 0
                        : r.contains(o))
                    );
                  })
                );
              }),
              d = (0, i.z)((e) => {
                for (let t of r) t.buttonId.current !== e && t.close();
              }),
              p = (0, a.useMemo)(
                () => ({
                  registerPopover: s,
                  unregisterPopover: u,
                  isFocusWithinPopoverGroup: c,
                  closeOthers: d,
                }),
                [s, u, c, d]
              ),
              f = (0, a.useMemo)(() => ({}), []),
              v = (0, F.L6)();
            return a.createElement(
              E.Jl,
              null,
              a.createElement(
                V.Provider,
                { value: p },
                v({
                  ourProps: { ref: o },
                  theirProps: e,
                  slot: f,
                  defaultTag: "div",
                  name: "Popover.Group",
                })
              )
            );
          }),
        });
    },
    32784: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var o = n(67294),
        r = n(39438);
      function l(e, t, n, l) {
        let u = (0, r.E)(n);
        (0, o.useEffect)(() => {
          function n(e) {
            u.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, l),
            () => e.removeEventListener(t, n, l)
          );
        }, [e, t, l]);
      }
    },
    85272: function (e, t, n) {
      n.d(t, {
        H1: function () {
          return d;
        },
        Jl: function () {
          return i;
        },
        vs: function () {
          return s;
        },
      });
      var o = n(67294),
        r = n(51228),
        l = n(23233),
        u = n(68354),
        a = n(99523);
      function s() {
        let {
            defaultContainers: e = [],
            portals: t,
            mainTreeNode: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          o = (0, a.i)(n),
          r = (0, u.z)(() => {
            var r, l;
            let u = [];
            for (let t of e)
              null !== t &&
                (t instanceof HTMLElement
                  ? u.push(t)
                  : "current" in t &&
                    t.current instanceof HTMLElement &&
                    u.push(t.current));
            if (null != t && t.current) for (let e of t.current) u.push(e);
            for (let e of null !=
            (r = null == o ? void 0 : o.querySelectorAll("html > *, body > *"))
              ? r
              : [])
              e !== document.body &&
                e !== document.head &&
                e instanceof HTMLElement &&
                "headlessui-portal-root" !== e.id &&
                ((n &&
                  (e.contains(n) ||
                    e.contains(
                      null == (l = null == n ? void 0 : n.getRootNode())
                        ? void 0
                        : l.host
                    ))) ||
                  u.some((t) => e.contains(t)) ||
                  u.push(e));
            return u;
          });
        return {
          resolveContainers: r,
          contains: (0, u.z)((e) => r().some((t) => t.contains(e))),
        };
      }
      let c = (0, o.createContext)(null);
      function i(e) {
        let { children: t, node: n } = e,
          [u, a] = (0, o.useState)(null),
          s = d(null != n ? n : u);
        return o.createElement(
          c.Provider,
          { value: s },
          t,
          null === s &&
            o.createElement(r._, {
              features: r.x.Hidden,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let o of null !=
                  (n =
                    null == (t = (0, l.r)(e))
                      ? void 0
                      : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      o !== document.body &&
                      o !== document.head &&
                      o instanceof HTMLElement &&
                      null != o &&
                      o.contains(e)
                    ) {
                      a(o);
                      break;
                    }
                }
              },
            })
        );
      }
      function d() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (e = (0, o.useContext)(c)) ? e : t;
      }
    },
    54751: function (e, t, n) {
      let o;
      n.d(t, {
        N: function () {
          return u;
        },
        l: function () {
          return a;
        },
      });
      var r = n(67294),
        l = n(5495),
        u =
          (((o = u || {})[(o.Forwards = 0)] = "Forwards"),
          (o[(o.Backwards = 1)] = "Backwards"),
          o);
      function a() {
        let e = (0, r.useRef)(0);
        return (
          (0, l.s)(
            !0,
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
    },
    38213: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
        Z: function () {
          return u;
        },
      });
      var o = n(67294);
      let r = (0, o.createContext)(() => {});
      function l() {
        return (0, o.useContext)(r);
      }
      function u(e) {
        let { value: t, children: n } = e;
        return o.createElement(r.Provider, { value: t }, n);
      }
    },
  },
]);
