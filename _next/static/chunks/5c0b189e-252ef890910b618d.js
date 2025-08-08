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
      (e._sentryDebugIds[t] = "56f46951-e1c6-452b-8bec-36242d938967"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-56f46951-e1c6-452b-8bec-36242d938967"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6342],
  {
    93075: function (e, t, n) {
      n.d(t, {
        NI: function () {
          return H;
        },
        Rz: function () {
          return I;
        },
        YF: function () {
          return w;
        },
        aN: function () {
          return T;
        },
      });
      var r,
        l = n(67294),
        u = n(97145),
        o = n(71347),
        c = n(37317),
        f = n(73935),
        i = n(1371),
        s = n(29545);
      let a = { ...(r || (r = n.t(l, 2))) },
        d = a.useInsertionEffect || ((e) => e());
      function g(e) {
        let t = l.useRef(() => {});
        return (
          d(() => {
            t.current = e;
          }),
          l.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      var m = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
      let p = !1,
        h = 0,
        v = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + h++,
        b =
          a.useId ||
          function () {
            let [e, t] = l.useState(() => (p ? v() : void 0));
            return (
              m(() => {
                null == e && t(v());
              }, []),
              l.useEffect(() => {
                p = !0;
              }, []),
              e
            );
          },
        y = l.createContext(null),
        C = l.createContext(null),
        R = () => {
          var e;
          return (null == (e = l.useContext(y)) ? void 0 : e.id) || null;
        },
        k = () => l.useContext(C);
      function w(e) {
        void 0 === e && (e = {});
        let { nodeId: t } = e,
          n = (function (e) {
            let { open: t = !1, onOpenChange: n, elements: r } = e,
              u = b(),
              o = l.useRef({}),
              [c] = l.useState(() =>
                (function () {
                  let e = new Map();
                  return {
                    emit(t, n) {
                      var r;
                      null == (r = e.get(t)) || r.forEach((e) => e(n));
                    },
                    on(t, n) {
                      e.set(t, [...(e.get(t) || []), n]);
                    },
                    off(t, n) {
                      var r;
                      e.set(
                        t,
                        (null == (r = e.get(t))
                          ? void 0
                          : r.filter((e) => e !== n)) || []
                      );
                    },
                  };
                })()
              ),
              f = null != R(),
              [i, s] = l.useState(r.reference),
              a = g((e, t, r) => {
                (o.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: f,
                  }),
                  null == n || n(e, t, r);
              }),
              d = l.useMemo(() => ({ setPositionReference: s }), []),
              m = l.useMemo(
                () => ({
                  reference: i || r.reference || null,
                  floating: r.floating || null,
                  domReference: r.reference,
                }),
                [i, r.reference, r.floating]
              );
            return l.useMemo(
              () => ({
                dataRef: o,
                open: t,
                onOpenChange: a,
                elements: m,
                events: c,
                floatingId: u,
                refs: d,
              }),
              [t, a, m, c, u, d]
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          r = e.rootContext || n,
          u = r.elements,
          [o, f] = l.useState(null),
          [s, a] = l.useState(null),
          d = (null == u ? void 0 : u.domReference) || o,
          p = l.useRef(null),
          h = k();
        m(() => {
          d && (p.current = d);
        }, [d]);
        let v = (0, i.YF)({
            ...e,
            elements: { ...u, ...(s && { reference: s }) },
          }),
          y = l.useCallback(
            (e) => {
              let t = (0, c.kK)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), v.refs.setReference(t);
            },
            [v.refs]
          ),
          C = l.useCallback(
            (e) => {
              ((0, c.kK)(e) || null === e) && ((p.current = e), f(e)),
                ((0, c.kK)(v.refs.reference.current) ||
                  null === v.refs.reference.current ||
                  (null !== e && !(0, c.kK)(e))) &&
                  v.refs.setReference(e);
            },
            [v.refs]
          ),
          w = l.useMemo(
            () => ({
              ...v.refs,
              setReference: C,
              setPositionReference: y,
              domReference: p,
            }),
            [v.refs, C, y]
          ),
          M = l.useMemo(
            () => ({ ...v.elements, domReference: d }),
            [v.elements, d]
          ),
          x = l.useMemo(
            () => ({ ...v, ...r, refs: w, elements: M, nodeId: t }),
            [v, w, M, t, r]
          );
        return (
          m(() => {
            r.dataRef.current.floatingContext = x;
            let e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = x);
          }),
          l.useMemo(
            () => ({ ...v, context: x, refs: w, elements: M }),
            [v, w, M, x]
          )
        );
      }
      let M = "active",
        x = "selected";
      function E(e, t, n) {
        let r = new Map(),
          l = "item" === n,
          u = e;
        if (l && e) {
          let { [M]: t, [x]: n, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === n && {
            tabIndex: -1,
            "data-floating-ui-focusable": "",
          }),
          ...u,
          ...t
            .map((t) => {
              let r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [n, u] = t;
                    if (!(l && [M, x].includes(n))) {
                      if (0 === n.indexOf("on")) {
                        if (
                          (r.has(n) || r.set(n, []), "function" == typeof u)
                        ) {
                          var o;
                          null == (o = r.get(n)) || o.push(u),
                            (e[n] = function () {
                              for (
                                var e,
                                  t = arguments.length,
                                  l = Array(t),
                                  u = 0;
                                u < t;
                                u++
                              )
                                l[u] = arguments[u];
                              return null == (e = r.get(n))
                                ? void 0
                                : e
                                    .map((e) => e(...l))
                                    .find((e) => void 0 !== e);
                            });
                        }
                      } else e[n] = u;
                    }
                  }),
                e
              ),
              {}
            ),
        };
      }
      function H(e) {
        void 0 === e && (e = []);
        let t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          r = e.map((e) => (null == e ? void 0 : e.item)),
          u = l.useCallback((t) => E(t, e, "reference"), t),
          o = l.useCallback((t) => E(t, e, "floating"), n),
          c = l.useCallback((t) => E(t, e, "item"), r);
        return l.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: o,
            getItemProps: c,
          }),
          [u, o, c]
        );
      }
      function S(e, t) {
        return {
          ...e,
          rects: { ...e.rects, floating: { ...e.rects.floating, height: t } },
        };
      }
      let T = (e) => ({
        name: "inner",
        options: e,
        async fn(t) {
          let {
              listRef: n,
              overflowRef: r,
              onFallbackChange: l,
              offset: u = 0,
              index: c = 0,
              minItemsVisible: a = 4,
              referenceOverflowThreshold: d = 0,
              scrollRef: g,
              ...m
            } = (0, o.ku)(e, t),
            {
              rects: p,
              elements: { floating: h },
            } = t,
            v = n.current[c],
            b = (null == g ? void 0 : g.current) || h,
            y = h.clientTop || b.clientTop,
            C = 0 !== h.clientTop,
            R = 0 !== b.clientTop,
            k = h === b;
          if (!v) return {};
          let w = {
              ...t,
              ...(await (0, i.cv)(
                -v.offsetTop -
                  h.clientTop -
                  p.reference.height / 2 -
                  v.offsetHeight / 2 -
                  u
              ).fn(t)),
            },
            M = await (0, s.US)(S(w, b.scrollHeight + y + h.clientTop), m),
            x = await (0, s.US)(w, { ...m, elementContext: "reference" }),
            E = (0, o.Fp)(0, M.top),
            H = w.y + E,
            T = (b.scrollHeight > b.clientHeight ? (e) => e : o.NM)(
              (0, o.Fp)(
                0,
                b.scrollHeight +
                  ((C && k) || R ? 2 * y : 0) -
                  E -
                  (0, o.Fp)(0, M.bottom)
              )
            );
          if (((b.style.maxHeight = T + "px"), (b.scrollTop = E), l)) {
            let e =
              b.offsetHeight <
                v.offsetHeight * (0, o.VV)(a, n.current.length) - 1 ||
              x.top >= -d ||
              x.bottom >= -d;
            f.flushSync(() => l(e));
          }
          return (
            r &&
              (r.current = await (0, s.US)(
                S({ ...w, y: H }, b.offsetHeight + y + h.clientTop),
                m
              )),
            { y: H }
          );
        },
      });
      function I(e, t) {
        let { open: n, elements: r } = e,
          { enabled: o = !0, overflowRef: c, scrollRef: i, onChange: s } = t,
          a = g(s),
          d = l.useRef(!1),
          m = l.useRef(null),
          p = l.useRef(null);
        l.useEffect(() => {
          if (!o) return;
          function e(e) {
            if (e.ctrlKey || !t || null == c.current) return;
            let n = e.deltaY,
              r = c.current.top >= -0.5,
              l = c.current.bottom >= -0.5,
              o = t.scrollHeight - t.clientHeight,
              i = n < 0 ? -1 : 1,
              s = n < 0 ? "max" : "min";
            !(t.scrollHeight <= t.clientHeight) &&
              ((!r && n > 0) || (!l && n < 0)
                ? (e.preventDefault(),
                  f.flushSync(() => {
                    a((e) => e + Math[s](n, o * i));
                  }))
                : /firefox/i.test((0, u.ij)()) && (t.scrollTop += n));
          }
          let t = (null == i ? void 0 : i.current) || r.floating;
          if (n && t)
            return (
              t.addEventListener("wheel", e),
              requestAnimationFrame(() => {
                (m.current = t.scrollTop),
                  null != c.current && (p.current = { ...c.current });
              }),
              () => {
                (m.current = null),
                  (p.current = null),
                  t.removeEventListener("wheel", e);
              }
            );
        }, [o, n, r.floating, c, i, a]);
        let h = l.useMemo(
          () => ({
            onKeyDown() {
              d.current = !0;
            },
            onWheel() {
              d.current = !1;
            },
            onPointerMove() {
              d.current = !1;
            },
            onScroll() {
              let e = (null == i ? void 0 : i.current) || r.floating;
              if (c.current && e && d.current) {
                if (null !== m.current) {
                  let t = e.scrollTop - m.current;
                  ((c.current.bottom < -0.5 && t < -1) ||
                    (c.current.top < -0.5 && t > 1)) &&
                    f.flushSync(() => a((e) => e + t));
                }
                requestAnimationFrame(() => {
                  m.current = e.scrollTop;
                });
              }
            },
          }),
          [r.floating, a, c, i]
        );
        return l.useMemo(() => (o ? { floating: h } : {}), [o, h]);
      }
    },
  },
]);
