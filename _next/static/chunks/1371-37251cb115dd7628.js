!(function () {
  try {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "b95f6500-120b-4517-8fa1-296cb9bafa26"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-b95f6500-120b-4517-8fa1-296cb9bafa26"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1371],
  {
    29545: function (t, e, n) {
      n.d(e, {
        x7: function () {
          return V;
        },
        Me: function () {
          return T;
        },
        oo: function () {
          return K;
        },
        US: function () {
          return A;
        },
        RR: function () {
          return O;
        },
        Cp: function () {
          return C;
        },
        dr: function () {
          return S;
        },
        cv: function () {
          return D;
        },
        uY: function () {
          return E;
        },
        dp: function () {
          return P;
        },
      });
      var r = n(71347);
      function i(t, e, n) {
        let i,
          { reference: o, floating: l } = t,
          u = (0, r.Qq)(e),
          f = (0, r.Wh)(e),
          c = (0, r.I4)(f),
          a = (0, r.k3)(e),
          s = "y" === u,
          d = o.x + o.width / 2 - l.width / 2,
          p = o.y + o.height / 2 - l.height / 2,
          h = o[c] / 2 - l[c] / 2;
        switch (a) {
          case "top":
            i = { x: d, y: o.y - l.height };
            break;
          case "bottom":
            i = { x: d, y: o.y + o.height };
            break;
          case "right":
            i = { x: o.x + o.width, y: p };
            break;
          case "left":
            i = { x: o.x - l.width, y: p };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch ((0, r.hp)(e)) {
          case "start":
            i[f] -= h * (n && s ? -1 : 1);
            break;
          case "end":
            i[f] += h * (n && s ? -1 : 1);
        }
        return i;
      }
      let o = async (t, e, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: u,
          } = n,
          f = l.filter(Boolean),
          c = await (null == u.isRTL ? void 0 : u.isRTL(e)),
          a = await u.getElementRects({
            reference: t,
            floating: e,
            strategy: o,
          }),
          { x: s, y: d } = i(a, r, c),
          p = r,
          h = {},
          m = 0;
        for (let n = 0; n < f.length; n++) {
          let { name: l, fn: g } = f[n],
            {
              x: w,
              y: y,
              data: x,
              reset: b,
            } = await g({
              x: s,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: o,
              middlewareData: h,
              rects: a,
              platform: u,
              elements: { reference: t, floating: e },
            });
          (s = null != w ? w : s),
            (d = null != y ? y : d),
            (h = { ...h, [l]: { ...h[l], ...x } }),
            b &&
              m <= 50 &&
              (m++,
              "object" == typeof b &&
                (b.placement && (p = b.placement),
                b.rects &&
                  (a =
                    !0 === b.rects
                      ? await u.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: s, y: d } = i(a, p, c))),
              (n = -1));
        }
        return { x: s, y: d, placement: p, strategy: o, middlewareData: h };
      };
      async function l(t, e) {
        var n;
        void 0 === e && (e = {});
        let { x: i, y: o, platform: l, rects: u, elements: f, strategy: c } = t,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = (0, r.ku)(e, t),
          m = (0, r.yd)(h),
          g = f[p ? ("floating" === d ? "reference" : "floating") : d],
          w = (0, r.JB)(
            await l.getClippingRect({
              element:
                null ==
                  (n = await (null == l.isElement ? void 0 : l.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(f.floating))),
              boundary: a,
              rootBoundary: s,
              strategy: c,
            })
          ),
          y =
            "floating" === d
              ? {
                  x: i,
                  y: o,
                  width: u.floating.width,
                  height: u.floating.height,
                }
              : u.reference,
          x = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(f.floating)),
          b = ((await (null == l.isElement ? void 0 : l.isElement(x))) &&
            (await (null == l.getScale ? void 0 : l.getScale(x)))) || {
            x: 1,
            y: 1,
          },
          v = (0, r.JB)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: f,
                  rect: y,
                  offsetParent: x,
                  strategy: c,
                })
              : y
          );
        return {
          top: (w.top - v.top + m.top) / b.y,
          bottom: (v.bottom - w.bottom + m.bottom) / b.y,
          left: (w.left - v.left + m.left) / b.x,
          right: (v.right - w.right + m.right) / b.x,
        };
      }
      function u(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width,
        };
      }
      function f(t) {
        return r.mA.some((e) => t[e] >= 0);
      }
      async function c(t, e) {
        let { placement: n, platform: i, elements: o } = t,
          l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          u = (0, r.k3)(n),
          f = (0, r.hp)(n),
          c = "y" === (0, r.Qq)(n),
          a = ["left", "top"].includes(u) ? -1 : 1,
          s = l && c ? -1 : 1,
          d = (0, r.ku)(e, t),
          {
            mainAxis: p,
            crossAxis: h,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          f && "number" == typeof m && (h = "end" === f ? -1 * m : m),
          c ? { x: h * s, y: p * a } : { x: p * a, y: h * s }
        );
      }
      var a = n(37317);
      function s(t) {
        let e = (0, a.Dx)(t),
          n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0,
          o = (0, a.Re)(t),
          l = o ? t.offsetWidth : n,
          u = o ? t.offsetHeight : i,
          f = (0, r.NM)(n) !== l || (0, r.NM)(i) !== u;
        return f && ((n = l), (i = u)), { width: n, height: i, $: f };
      }
      function d(t) {
        return (0, a.kK)(t) ? t : t.contextElement;
      }
      function p(t) {
        let e = d(t);
        if (!(0, a.Re)(e)) return (0, r.ze)(1);
        let n = e.getBoundingClientRect(),
          { width: i, height: o, $: l } = s(e),
          u = (l ? (0, r.NM)(n.width) : n.width) / i,
          f = (l ? (0, r.NM)(n.height) : n.height) / o;
        return (
          (u && Number.isFinite(u)) || (u = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: u, y: f }
        );
      }
      let h = (0, r.ze)(0);
      function m(t) {
        let e = (0, a.Jj)(t);
        return (0, a.Pf)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : h;
      }
      function g(t, e, n, i) {
        var o;
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        let l = t.getBoundingClientRect(),
          u = d(t),
          f = (0, r.ze)(1);
        e && (i ? (0, a.kK)(i) && (f = p(i)) : (f = p(t)));
        let c = (void 0 === (o = n) && (o = !1),
          i && (!o || i === (0, a.Jj)(u)) && o)
            ? m(u)
            : (0, r.ze)(0),
          s = (l.left + c.x) / f.x,
          h = (l.top + c.y) / f.y,
          g = l.width / f.x,
          w = l.height / f.y;
        if (u) {
          let t = (0, a.Jj)(u),
            e = i && (0, a.kK)(i) ? (0, a.Jj)(i) : i,
            n = t,
            r = (0, a.wK)(n);
          for (; r && i && e !== n; ) {
            let t = p(r),
              e = r.getBoundingClientRect(),
              i = (0, a.Dx)(r),
              o = e.left + (r.clientLeft + parseFloat(i.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(i.paddingTop)) * t.y;
            (s *= t.x),
              (h *= t.y),
              (g *= t.x),
              (w *= t.y),
              (s += o),
              (h += l),
              (n = (0, a.Jj)(r)),
              (r = (0, a.wK)(n));
          }
        }
        return (0, r.JB)({ width: g, height: w, x: s, y: h });
      }
      function w(t, e) {
        let n = (0, a.Lw)(t).scrollLeft;
        return e ? e.left + n : g((0, a.tF)(t)).left + n;
      }
      function y(t, e, n) {
        void 0 === n && (n = !1);
        let r = t.getBoundingClientRect();
        return {
          x: r.left + e.scrollLeft - (n ? 0 : w(t, r)),
          y: r.top + e.scrollTop,
        };
      }
      function x(t, e, n) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            let n = (0, a.Jj)(t),
              r = (0, a.tF)(t),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              u = 0,
              f = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let t = (0, a.Pf)();
              (!t || (t && "fixed" === e)) &&
                ((u = i.offsetLeft), (f = i.offsetTop));
            }
            return { width: o, height: l, x: u, y: f };
          })(t, n);
        else if ("document" === e)
          i = (function (t) {
            let e = (0, a.tF)(t),
              n = (0, a.Lw)(t),
              i = t.ownerDocument.body,
              o = (0, r.Fp)(
                e.scrollWidth,
                e.clientWidth,
                i.scrollWidth,
                i.clientWidth
              ),
              l = (0, r.Fp)(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              u = -n.scrollLeft + w(t),
              f = -n.scrollTop;
            return (
              "rtl" === (0, a.Dx)(i).direction &&
                (u += (0, r.Fp)(e.clientWidth, i.clientWidth) - o),
              { width: o, height: l, x: u, y: f }
            );
          })((0, a.tF)(t));
        else if ((0, a.kK)(e))
          i = (function (t, e) {
            let n = g(t, !0, "fixed" === e),
              i = n.top + t.clientTop,
              o = n.left + t.clientLeft,
              l = (0, a.Re)(t) ? p(t) : (0, r.ze)(1),
              u = t.clientWidth * l.x;
            return {
              width: u,
              height: t.clientHeight * l.y,
              x: o * l.x,
              y: i * l.y,
            };
          })(e, n);
        else {
          let n = m(t);
          i = { x: e.x - n.x, y: e.y - n.y, width: e.width, height: e.height };
        }
        return (0, r.JB)(i);
      }
      function b(t) {
        return "static" === (0, a.Dx)(t).position;
      }
      function v(t, e) {
        if (!(0, a.Re)(t) || "fixed" === (0, a.Dx)(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return (0, a.tF)(t) === n && (n = n.ownerDocument.body), n;
      }
      function R(t, e) {
        let n = (0, a.Jj)(t);
        if ((0, a.tR)(t)) return n;
        if (!(0, a.Re)(t)) {
          let e = (0, a.Ow)(t);
          for (; e && !(0, a.Py)(e); ) {
            if ((0, a.kK)(e) && !b(e)) return e;
            e = (0, a.Ow)(e);
          }
          return n;
        }
        let r = v(t, e);
        for (; r && (0, a.Ze)(r) && b(r); ) r = v(r, e);
        return r && (0, a.Py)(r) && b(r) && !(0, a.hT)(r)
          ? n
          : r || (0, a.gQ)(t) || n;
      }
      let k = async function (t) {
          let e = this.getOffsetParent || R,
            n = this.getDimensions,
            i = await n(t.floating);
          return {
            reference: (function (t, e, n) {
              let i = (0, a.Re)(e),
                o = (0, a.tF)(e),
                l = "fixed" === n,
                u = g(t, !0, l, e),
                f = { scrollLeft: 0, scrollTop: 0 },
                c = (0, r.ze)(0);
              if (i || (!i && !l)) {
                if (
                  (("body" !== (0, a.wk)(e) || (0, a.ao)(o)) &&
                    (f = (0, a.Lw)(e)),
                  i)
                ) {
                  let t = g(e, !0, l, e);
                  (c.x = t.x + e.clientLeft), (c.y = t.y + e.clientTop);
                } else o && (c.x = w(o));
              }
              let s = !o || i || l ? (0, r.ze)(0) : y(o, f);
              return {
                x: u.left + f.scrollLeft - c.x - s.x,
                y: u.top + f.scrollTop - c.y - s.y,
                width: u.width,
                height: u.height,
              };
            })(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        L = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { elements: e, rect: n, offsetParent: i, strategy: o } = t,
              l = "fixed" === o,
              u = (0, a.tF)(i),
              f = !!e && (0, a.tR)(e.floating);
            if (i === u || (f && l)) return n;
            let c = { scrollLeft: 0, scrollTop: 0 },
              s = (0, r.ze)(1),
              d = (0, r.ze)(0),
              h = (0, a.Re)(i);
            if (
              (h || (!h && !l)) &&
              (("body" !== (0, a.wk)(i) || (0, a.ao)(u)) && (c = (0, a.Lw)(i)),
              (0, a.Re)(i))
            ) {
              let t = g(i);
              (s = p(i)), (d.x = t.x + i.clientLeft), (d.y = t.y + i.clientTop);
            }
            let m = !u || h || l ? (0, r.ze)(0) : y(u, c, !0);
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - c.scrollLeft * s.x + d.x + m.x,
              y: n.y * s.y - c.scrollTop * s.y + d.y + m.y,
            };
          },
          getDocumentElement: a.tF,
          getClippingRect: function (t) {
            let { element: e, boundary: n, rootBoundary: i, strategy: o } = t,
              l = [
                ...("clippingAncestors" === n
                  ? (0, a.tR)(e)
                    ? []
                    : (function (t, e) {
                        let n = e.get(t);
                        if (n) return n;
                        let r = (0, a.Kx)(t, [], !1).filter(
                            (t) => (0, a.kK)(t) && "body" !== (0, a.wk)(t)
                          ),
                          i = null,
                          o = "fixed" === (0, a.Dx)(t).position,
                          l = o ? (0, a.Ow)(t) : t;
                        for (; (0, a.kK)(l) && !(0, a.Py)(l); ) {
                          let e = (0, a.Dx)(l),
                            n = (0, a.hT)(l);
                          n || "fixed" !== e.position || (i = null),
                            (
                              o
                                ? !n && !i
                                : (!n &&
                                    "static" === e.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  ((0, a.ao)(l) &&
                                    !n &&
                                    (function t(e, n) {
                                      let r = (0, a.Ow)(e);
                                      return (
                                        !(
                                          r === n ||
                                          !(0, a.kK)(r) ||
                                          (0, a.Py)(r)
                                        ) &&
                                        ("fixed" === (0, a.Dx)(r).position ||
                                          t(r, n))
                                      );
                                    })(t, l))
                            )
                              ? (r = r.filter((t) => t !== l))
                              : (i = e),
                            (l = (0, a.Ow)(l));
                        }
                        return e.set(t, r), r;
                      })(e, this._c)
                  : [].concat(n)),
                i,
              ],
              u = l[0],
              f = l.reduce((t, n) => {
                let i = x(e, n, o);
                return (
                  (t.top = (0, r.Fp)(i.top, t.top)),
                  (t.right = (0, r.VV)(i.right, t.right)),
                  (t.bottom = (0, r.VV)(i.bottom, t.bottom)),
                  (t.left = (0, r.Fp)(i.left, t.left)),
                  t
                );
              }, x(e, u, o));
            return {
              width: f.right - f.left,
              height: f.bottom - f.top,
              x: f.left,
              y: f.top,
            };
          },
          getOffsetParent: R,
          getElementRects: k,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            let { width: e, height: n } = s(t);
            return { width: e, height: n };
          },
          getScale: p,
          isElement: a.kK,
          isRTL: function (t) {
            return "rtl" === (0, a.Dx)(t).direction;
          },
        };
      function F(t, e) {
        return (
          t.x === e.x &&
          t.y === e.y &&
          t.width === e.width &&
          t.height === e.height
        );
      }
      function T(t, e, n, i) {
        let o;
        void 0 === i && (i = {});
        let {
            ancestorScroll: l = !0,
            ancestorResize: u = !0,
            elementResize: f = "function" == typeof ResizeObserver,
            layoutShift: c = "function" == typeof IntersectionObserver,
            animationFrame: s = !1,
          } = i,
          p = d(t),
          h = l || u ? [...(p ? (0, a.Kx)(p) : []), ...(0, a.Kx)(e)] : [];
        h.forEach((t) => {
          l && t.addEventListener("scroll", n, { passive: !0 }),
            u && t.addEventListener("resize", n);
        });
        let m =
            p && c
              ? (function (t, e) {
                  let n,
                    i = null,
                    o = (0, a.tF)(t);
                  function l() {
                    var t;
                    clearTimeout(n),
                      null == (t = i) || t.disconnect(),
                      (i = null);
                  }
                  return (
                    !(function u(f, c) {
                      void 0 === f && (f = !1), void 0 === c && (c = 1), l();
                      let a = t.getBoundingClientRect(),
                        { left: s, top: d, width: p, height: h } = a;
                      if ((f || e(), !p || !h)) return;
                      let m = (0, r.GW)(d),
                        g = (0, r.GW)(o.clientWidth - (s + p)),
                        w = {
                          rootMargin:
                            -m +
                            "px " +
                            -g +
                            "px " +
                            -(0, r.GW)(o.clientHeight - (d + h)) +
                            "px " +
                            -(0, r.GW)(s) +
                            "px",
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1,
                        },
                        y = !0;
                      function x(e) {
                        let r = e[0].intersectionRatio;
                        if (r !== c) {
                          if (!y) return u();
                          r
                            ? u(!1, r)
                            : (n = setTimeout(() => {
                                u(!1, 1e-7);
                              }, 1e3));
                        }
                        1 !== r || F(a, t.getBoundingClientRect()) || u(),
                          (y = !1);
                      }
                      try {
                        i = new IntersectionObserver(x, {
                          ...w,
                          root: o.ownerDocument,
                        });
                      } catch (t) {
                        i = new IntersectionObserver(x, w);
                      }
                      i.observe(t);
                    })(!0),
                    l
                  );
                })(p, n)
              : null,
          w = -1,
          y = null;
        f &&
          ((y = new ResizeObserver((t) => {
            let [r] = t;
            r &&
              r.target === p &&
              y &&
              (y.unobserve(e),
              cancelAnimationFrame(w),
              (w = requestAnimationFrame(() => {
                var t;
                null == (t = y) || t.observe(e);
              }))),
              n();
          })),
          p && !s && y.observe(p),
          y.observe(e));
        let x = s ? g(t) : null;
        return (
          s &&
            (function e() {
              let r = g(t);
              x && !F(x, r) && n(), (x = r), (o = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            var t;
            h.forEach((t) => {
              l && t.removeEventListener("scroll", n),
                u && t.removeEventListener("resize", n);
            }),
              null == m || m(),
              null == (t = y) || t.disconnect(),
              (y = null),
              s && cancelAnimationFrame(o);
          }
        );
      }
      let A = l,
        D = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var n, r;
                let { x: i, y: o, placement: l, middlewareData: u } = e,
                  f = await c(e, t);
                return l === (null == (n = u.offset) ? void 0 : n.placement) &&
                  null != (r = u.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: i + f.x, y: o + f.y, data: { ...f, placement: l } };
              },
            }
          );
        },
        E = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                let { x: n, y: i, placement: o } = e,
                  {
                    mainAxis: u = !0,
                    crossAxis: f = !1,
                    limiter: c = {
                      fn: (t) => {
                        let { x: e, y: n } = t;
                        return { x: e, y: n };
                      },
                    },
                    ...a
                  } = (0, r.ku)(t, e),
                  s = { x: n, y: i },
                  d = await l(e, a),
                  p = (0, r.Qq)((0, r.k3)(o)),
                  h = (0, r.Rn)(p),
                  m = s[h],
                  g = s[p];
                if (u) {
                  let t = "y" === h ? "top" : "left",
                    e = "y" === h ? "bottom" : "right",
                    n = m + d[t],
                    i = m - d[e];
                  m = (0, r.uZ)(n, m, i);
                }
                if (f) {
                  let t = "y" === p ? "top" : "left",
                    e = "y" === p ? "bottom" : "right",
                    n = g + d[t],
                    i = g - d[e];
                  g = (0, r.uZ)(n, g, i);
                }
                let w = c.fn({ ...e, [h]: m, [p]: g });
                return {
                  ...w,
                  data: { x: w.x - n, y: w.y - i, enabled: { [h]: u, [p]: f } },
                };
              },
            }
          );
        },
        O = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, i, o, u, f;
                let {
                    placement: c,
                    middlewareData: a,
                    rects: s,
                    initialPlacement: d,
                    platform: p,
                    elements: h,
                  } = e,
                  {
                    mainAxis: m = !0,
                    crossAxis: g = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: b = !0,
                    ...v
                  } = (0, r.ku)(t, e);
                if (null != (n = a.arrow) && n.alignmentOffset) return {};
                let R = (0, r.k3)(c),
                  k = (0, r.Qq)(d),
                  L = (0, r.k3)(d) === d,
                  F = await (null == p.isRTL ? void 0 : p.isRTL(h.floating)),
                  T = w || (L || !b ? [(0, r.pw)(d)] : (0, r.gy)(d)),
                  A = "none" !== x;
                !w && A && T.push(...(0, r.KX)(d, b, x, F));
                let D = [d, ...T],
                  E = await l(e, v),
                  O = [],
                  P = (null == (i = a.flip) ? void 0 : i.overflows) || [];
                if ((m && O.push(E[R]), g)) {
                  let t = (0, r.i8)(c, s, F);
                  O.push(E[t[0]], E[t[1]]);
                }
                if (
                  ((P = [...P, { placement: c, overflows: O }]),
                  !O.every((t) => t <= 0))
                ) {
                  let t = ((null == (o = a.flip) ? void 0 : o.index) || 0) + 1,
                    e = D[t];
                  if (e)
                    return {
                      data: { index: t, overflows: P },
                      reset: { placement: e },
                    };
                  let n =
                    null ==
                    (u = P.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1]
                    )[0])
                      ? void 0
                      : u.placement;
                  if (!n)
                    switch (y) {
                      case "bestFit": {
                        let t =
                          null ==
                          (f = P.filter((t) => {
                            if (A) {
                              let e = (0, r.Qq)(t.placement);
                              return e === k || "y" === e;
                            }
                            return !0;
                          })
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ])
                            .sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : f[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = d;
                    }
                  if (c !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        P = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                var n, i;
                let o, u;
                let { placement: f, rects: c, platform: a, elements: s } = e,
                  { apply: d = () => {}, ...p } = (0, r.ku)(t, e),
                  h = await l(e, p),
                  m = (0, r.k3)(f),
                  g = (0, r.hp)(f),
                  w = "y" === (0, r.Qq)(f),
                  { width: y, height: x } = c.floating;
                "top" === m || "bottom" === m
                  ? ((o = m),
                    (u =
                      g ===
                      ((await (null == a.isRTL ? void 0 : a.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((u = m), (o = "end" === g ? "top" : "bottom"));
                let b = x - h.top - h.bottom,
                  v = y - h.left - h.right,
                  R = (0, r.VV)(x - h[o], b),
                  k = (0, r.VV)(y - h[u], v),
                  L = !e.middlewareData.shift,
                  F = R,
                  T = k;
                if (
                  (null != (n = e.middlewareData.shift) &&
                    n.enabled.x &&
                    (T = v),
                  null != (i = e.middlewareData.shift) &&
                    i.enabled.y &&
                    (F = b),
                  L && !g)
                ) {
                  let t = (0, r.Fp)(h.left, 0),
                    e = (0, r.Fp)(h.right, 0),
                    n = (0, r.Fp)(h.top, 0),
                    i = (0, r.Fp)(h.bottom, 0);
                  w
                    ? (T =
                        y -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, r.Fp)(h.left, h.right)))
                    : (F =
                        x -
                        2 *
                          (0 !== n || 0 !== i
                            ? n + i
                            : (0, r.Fp)(h.top, h.bottom)));
                }
                await d({ ...e, availableWidth: T, availableHeight: F });
                let A = await a.getDimensions(s.floating);
                return y !== A.width || x !== A.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        C = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "hide",
              options: t,
              async fn(e) {
                let { rects: n } = e,
                  { strategy: i = "referenceHidden", ...o } = (0, r.ku)(t, e);
                switch (i) {
                  case "referenceHidden": {
                    let t = u(
                      await l(e, { ...o, elementContext: "reference" }),
                      n.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: t,
                        referenceHidden: f(t),
                      },
                    };
                  }
                  case "escaped": {
                    let t = u(
                      await l(e, { ...o, altBoundary: !0 }),
                      n.floating
                    );
                    return { data: { escapedOffsets: t, escaped: f(t) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        V = (t) => ({
          name: "arrow",
          options: t,
          async fn(e) {
            let {
                x: n,
                y: i,
                placement: o,
                rects: l,
                platform: u,
                elements: f,
                middlewareData: c,
              } = e,
              { element: a, padding: s = 0 } = (0, r.ku)(t, e) || {};
            if (null == a) return {};
            let d = (0, r.yd)(s),
              p = { x: n, y: i },
              h = (0, r.Wh)(o),
              m = (0, r.I4)(h),
              g = await u.getDimensions(a),
              w = "y" === h,
              y = w ? "clientHeight" : "clientWidth",
              x = l.reference[m] + l.reference[h] - p[h] - l.floating[m],
              b = p[h] - l.reference[h],
              v = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(a)),
              R = v ? v[y] : 0;
            (R && (await (null == u.isElement ? void 0 : u.isElement(v)))) ||
              (R = f.floating[y] || l.floating[m]);
            let k = R / 2 - g[m] / 2 - 1,
              L = (0, r.VV)(d[w ? "top" : "left"], k),
              F = (0, r.VV)(d[w ? "bottom" : "right"], k),
              T = R - g[m] - F,
              A = R / 2 - g[m] / 2 + (x / 2 - b / 2),
              D = (0, r.uZ)(L, A, T),
              E =
                !c.arrow &&
                null != (0, r.hp)(o) &&
                A !== D &&
                l.reference[m] / 2 - (A < L ? L : F) - g[m] / 2 < 0,
              O = E ? (A < L ? A - L : A - T) : 0;
            return {
              [h]: p[h] + O,
              data: {
                [h]: D,
                centerOffset: A - D - O,
                ...(E && { alignmentOffset: O }),
              },
              reset: E,
            };
          },
        }),
        S = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              options: t,
              fn(e) {
                let {
                    x: n,
                    y: i,
                    placement: o,
                    rects: l,
                    middlewareData: u,
                  } = e,
                  {
                    offset: f = 0,
                    mainAxis: c = !0,
                    crossAxis: a = !0,
                  } = (0, r.ku)(t, e),
                  s = { x: n, y: i },
                  d = (0, r.Qq)(o),
                  p = (0, r.Rn)(d),
                  h = s[p],
                  m = s[d],
                  g = (0, r.ku)(f, e),
                  w =
                    "number" == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (c) {
                  let t = "y" === p ? "height" : "width",
                    e = l.reference[p] - l.floating[t] + w.mainAxis,
                    n = l.reference[p] + l.reference[t] - w.mainAxis;
                  h < e ? (h = e) : h > n && (h = n);
                }
                if (a) {
                  var y, x;
                  let t = "y" === p ? "width" : "height",
                    e = ["top", "left"].includes((0, r.k3)(o)),
                    n =
                      l.reference[d] -
                      l.floating[t] +
                      ((e && (null == (y = u.offset) ? void 0 : y[d])) || 0) +
                      (e ? 0 : w.crossAxis),
                    i =
                      l.reference[d] +
                      l.reference[t] +
                      (e ? 0 : (null == (x = u.offset) ? void 0 : x[d]) || 0) -
                      (e ? w.crossAxis : 0);
                  m < n ? (m = n) : m > i && (m = i);
                }
                return { [p]: h, [d]: m };
              },
            }
          );
        },
        K = (t, e, n) => {
          let r = new Map(),
            i = { platform: L, ...n },
            l = { ...i.platform, _c: r };
          return o(t, e, { ...i, platform: l });
        };
    },
    1371: function (t, e, n) {
      n.d(e, {
        Cp: function () {
          return y;
        },
        RR: function () {
          return g;
        },
        YF: function () {
          return s;
        },
        cv: function () {
          return p;
        },
        dp: function () {
          return w;
        },
        dr: function () {
          return m;
        },
        uY: function () {
          return h;
        },
        x7: function () {
          return x;
        },
      });
      var r = n(29545),
        i = n(67294),
        o = n(73935),
        l = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function u(t, e) {
        let n, r, i;
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if ((n = t.length) !== e.length) return !1;
            for (r = n; 0 != r--; ) if (!u(t[r], e[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(e, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !t.$$typeof) && !u(t[n], e[n])) return !1;
          }
          return !0;
        }
        return t != t && e != e;
      }
      function f(t) {
        return "undefined" == typeof window
          ? 1
          : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function c(t, e) {
        let n = f(t);
        return Math.round(e * n) / n;
      }
      function a(t) {
        let e = i.useRef(t);
        return (
          l(() => {
            e.current = t;
          }),
          e
        );
      }
      function s(t) {
        void 0 === t && (t = {});
        let {
            placement: e = "bottom",
            strategy: n = "absolute",
            middleware: s = [],
            platform: d,
            elements: { reference: p, floating: h } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: w,
          } = t,
          [y, x] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: e,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, v] = i.useState(s);
        u(b, s) || v(s);
        let [R, k] = i.useState(null),
          [L, F] = i.useState(null),
          T = i.useCallback((t) => {
            t !== O.current && ((O.current = t), k(t));
          }, []),
          A = i.useCallback((t) => {
            t !== P.current && ((P.current = t), F(t));
          }, []),
          D = p || R,
          E = h || L,
          O = i.useRef(null),
          P = i.useRef(null),
          C = i.useRef(y),
          V = null != g,
          S = a(g),
          K = a(d),
          M = a(w),
          W = i.useCallback(() => {
            if (!O.current || !P.current) return;
            let t = { placement: e, strategy: n, middleware: b };
            K.current && (t.platform = K.current),
              (0, r.oo)(O.current, P.current, t).then((t) => {
                let e = { ...t, isPositioned: !1 !== M.current };
                z.current &&
                  !u(C.current, e) &&
                  ((C.current = e),
                  o.flushSync(() => {
                    x(e);
                  }));
              });
          }, [b, e, n, K, M]);
        l(() => {
          !1 === w &&
            C.current.isPositioned &&
            ((C.current.isPositioned = !1),
            x((t) => ({ ...t, isPositioned: !1 })));
        }, [w]);
        let z = i.useRef(!1);
        l(
          () => (
            (z.current = !0),
            () => {
              z.current = !1;
            }
          ),
          []
        ),
          l(() => {
            if ((D && (O.current = D), E && (P.current = E), D && E)) {
              if (S.current) return S.current(D, E, W);
              W();
            }
          }, [D, E, W, S, V]);
        let H = i.useMemo(
            () => ({
              reference: O,
              floating: P,
              setReference: T,
              setFloating: A,
            }),
            [T, A]
          ),
          j = i.useMemo(() => ({ reference: D, floating: E }), [D, E]),
          B = i.useMemo(() => {
            let t = { position: n, left: 0, top: 0 };
            if (!j.floating) return t;
            let e = c(j.floating, y.x),
              r = c(j.floating, y.y);
            return m
              ? {
                  ...t,
                  transform: "translate(" + e + "px, " + r + "px)",
                  ...(f(j.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: e, top: r };
          }, [n, m, j.floating, y.x, y.y]);
        return i.useMemo(
          () => ({ ...y, update: W, refs: H, elements: j, floatingStyles: B }),
          [y, W, H, j, B]
        );
      }
      let d = (t) => ({
          name: "arrow",
          options: t,
          fn(e) {
            let { element: n, padding: i } = "function" == typeof t ? t(e) : t;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, r.x7)({ element: n.current, padding: i }).fn(e)
                : {}
              : n
              ? (0, r.x7)({ element: n, padding: i }).fn(e)
              : {};
          },
        }),
        p = (t, e) => ({ ...(0, r.cv)(t), options: [t, e] }),
        h = (t, e) => ({ ...(0, r.uY)(t), options: [t, e] }),
        m = (t, e) => ({ ...(0, r.dr)(t), options: [t, e] }),
        g = (t, e) => ({ ...(0, r.RR)(t), options: [t, e] }),
        w = (t, e) => ({ ...(0, r.dp)(t), options: [t, e] }),
        y = (t, e) => ({ ...(0, r.Cp)(t), options: [t, e] }),
        x = (t, e) => ({ ...d(t), options: [t, e] });
    },
    37317: function (t, e, n) {
      function r() {
        return "undefined" != typeof window;
      }
      function i(t) {
        return u(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function o(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function l(t) {
        var e;
        return null ==
          (e = (u(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function u(t) {
        return !!r() && (t instanceof Node || t instanceof o(t).Node);
      }
      function f(t) {
        return !!r() && (t instanceof Element || t instanceof o(t).Element);
      }
      function c(t) {
        return (
          !!r() && (t instanceof HTMLElement || t instanceof o(t).HTMLElement)
        );
      }
      function a(t) {
        return (
          !!r() &&
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof o(t).ShadowRoot)
        );
      }
      function s(t) {
        let { overflow: e, overflowX: n, overflowY: r, display: i } = y(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function d(t) {
        return ["table", "td", "th"].includes(i(t));
      }
      function p(t) {
        return [":popover-open", ":modal"].some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function h(t) {
        let e = g(),
          n = f(t) ? y(t) : t;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (t) => !!n[t] && "none" !== n[t]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!e && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!e && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((t) => (n.willChange || "").includes(t)) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (n.contain || "").includes(t)
          )
        );
      }
      function m(t) {
        let e = b(t);
        for (; c(e) && !w(e); ) {
          if (h(e)) return e;
          if (p(e)) break;
          e = b(e);
        }
        return null;
      }
      function g() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function w(t) {
        return ["html", "body", "#document"].includes(i(t));
      }
      function y(t) {
        return o(t).getComputedStyle(t);
      }
      function x(t) {
        return f(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function b(t) {
        if ("html" === i(t)) return t;
        let e = t.assignedSlot || t.parentNode || (a(t) && t.host) || l(t);
        return a(e) ? e.host : e;
      }
      function v(t) {
        return t.parent && Object.getPrototypeOf(t.parent)
          ? t.frameElement
          : null;
      }
      n.d(e, {
        Dx: function () {
          return y;
        },
        Jj: function () {
          return o;
        },
        Kx: function () {
          return function t(e, n, r) {
            var i;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let l = (function t(e) {
                let n = b(e);
                return w(n)
                  ? e.ownerDocument
                    ? e.ownerDocument.body
                    : e.body
                  : c(n) && s(n)
                  ? n
                  : t(n);
              })(e),
              u = l === (null == (i = e.ownerDocument) ? void 0 : i.body),
              f = o(l);
            if (u) {
              let e = v(f);
              return n.concat(
                f,
                f.visualViewport || [],
                s(l) ? l : [],
                e && r ? t(e) : []
              );
            }
            return n.concat(l, t(l, [], r));
          };
        },
        Lw: function () {
          return x;
        },
        Ow: function () {
          return b;
        },
        Pf: function () {
          return g;
        },
        Py: function () {
          return w;
        },
        Re: function () {
          return c;
        },
        Ze: function () {
          return d;
        },
        ao: function () {
          return s;
        },
        gQ: function () {
          return m;
        },
        hT: function () {
          return h;
        },
        kK: function () {
          return f;
        },
        tF: function () {
          return l;
        },
        tR: function () {
          return p;
        },
        wK: function () {
          return v;
        },
        wk: function () {
          return i;
        },
      });
    },
    71347: function (t, e, n) {
      n.d(e, {
        Fp: function () {
          return o;
        },
        GW: function () {
          return u;
        },
        I4: function () {
          return g;
        },
        JB: function () {
          return F;
        },
        KX: function () {
          return R;
        },
        NM: function () {
          return l;
        },
        Qq: function () {
          return w;
        },
        Rn: function () {
          return m;
        },
        VV: function () {
          return i;
        },
        Wh: function () {
          return y;
        },
        gy: function () {
          return b;
        },
        hp: function () {
          return h;
        },
        i8: function () {
          return x;
        },
        k3: function () {
          return p;
        },
        ku: function () {
          return d;
        },
        mA: function () {
          return r;
        },
        pw: function () {
          return k;
        },
        uZ: function () {
          return s;
        },
        yd: function () {
          return L;
        },
        ze: function () {
          return f;
        },
      });
      let r = ["top", "right", "bottom", "left"],
        i = Math.min,
        o = Math.max,
        l = Math.round,
        u = Math.floor,
        f = (t) => ({ x: t, y: t }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        a = { start: "end", end: "start" };
      function s(t, e, n) {
        return o(t, i(e, n));
      }
      function d(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function p(t) {
        return t.split("-")[0];
      }
      function h(t) {
        return t.split("-")[1];
      }
      function m(t) {
        return "x" === t ? "y" : "x";
      }
      function g(t) {
        return "y" === t ? "height" : "width";
      }
      function w(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x";
      }
      function y(t) {
        return m(w(t));
      }
      function x(t, e, n) {
        void 0 === n && (n = !1);
        let r = h(t),
          i = y(t),
          o = g(i),
          l =
            "x" === i
              ? r === (n ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
              ? "bottom"
              : "top";
        return e.reference[o] > e.floating[o] && (l = k(l)), [l, k(l)];
      }
      function b(t) {
        let e = k(t);
        return [v(t), e, v(e)];
      }
      function v(t) {
        return t.replace(/start|end/g, (t) => a[t]);
      }
      function R(t, e, n, r) {
        let i = h(t),
          o = (function (t, e, n) {
            let r = ["left", "right"],
              i = ["right", "left"];
            switch (t) {
              case "top":
              case "bottom":
                if (n) return e ? i : r;
                return e ? r : i;
              case "left":
              case "right":
                return e ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(p(t), "start" === n, r);
        return (
          i && ((o = o.map((t) => t + "-" + i)), e && (o = o.concat(o.map(v)))),
          o
        );
      }
      function k(t) {
        return t.replace(/left|right|bottom|top/g, (t) => c[t]);
      }
      function L(t) {
        return "number" != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function F(t) {
        let { x: e, y: n, width: r, height: i } = t;
        return {
          width: r,
          height: i,
          top: n,
          left: e,
          right: e + r,
          bottom: n + i,
          x: e,
          y: n,
        };
      }
    },
  },
]);
