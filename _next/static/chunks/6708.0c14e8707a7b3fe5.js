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
      (e._sentryDebugIds[t] = "6a010e27-292f-448a-a1b3-00767f6802ed"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6a010e27-292f-448a-a1b3-00767f6802ed"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6708, 9678],
    {
      40838: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return m;
          },
        });
        var a = r(85893),
          n = r(67294),
          i = r(80052),
          s = r(93967),
          l = r.n(s),
          o = r(15922),
          c = r(37422),
          u = r(67253),
          d = r(24514),
          p = r(86322),
          g = r(45303),
          f = r.n(g),
          b = (e) => {
            let {
                children: t,
                isOpen: r,
                side: i,
                align: s,
                offset: o,
                footer: g,
                currentStep: b,
                continueClick: v,
                skipClick: m,
              } = e,
              [h, y] = (0, n.useState)(r);
            return ((0, n.useEffect)(() => {
              y(r);
            }, [r]),
            b)
              ? (0, a.jsxs)(p.fC, {
                  open: h,
                  children: [
                    (0, a.jsx)(p.xz, {
                      asChild: !0,
                      children: (0, a.jsx)("div", { children: t }),
                    }),
                    (0, a.jsx)(p.VY, {
                      align: s,
                      side: i,
                      className: "".concat(
                        f().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, a.jsxs)(a.Fragment, {
                        children: [
                          u.R[b].title &&
                            (0, a.jsx)("div", {
                              className: l()(f().title, "tw-mb-1"),
                              children: u.R[b].title,
                            }),
                          (0, a.jsx)("div", {
                            className: f().message,
                            children: u.R[b].message,
                          }),
                          g ||
                            (0, a.jsxs)(d.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, a.jsx)("div", { className: "flexGrow" }),
                                (0, a.jsx)("div", {
                                  className: f().skipButton,
                                  onClick: m,
                                  children: "Skip",
                                }),
                                (0, a.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: v,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, a.jsx)(p.Eh, { className: f().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, a.jsx)(a.Fragment, {});
          };
        let v = (0, n.forwardRef)((e, t) => {
          let {
              title: r,
              children: s,
              className: c,
              panelClassName: u,
              openOnClick: d = !1,
              leaveTimeout: p = 120,
              ...g
            } = e,
            f = (0, n.useRef)(null),
            v = t || f,
            m = (0, n.useRef)(null),
            h = (0, o.F)(),
            y = (0, n.useCallback)(
              (e) => {
                var t;
                d ||
                  (m.current && clearTimeout(m.current),
                  e || null === (t = v.current) || void 0 === t || t.click());
              },
              [d]
            ),
            C = (0, n.useCallback)(
              function (e, t) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!d || r) &&
                  (m.current && clearTimeout(m.current),
                  (m.current = window.setTimeout(() => {
                    e && t();
                  }, p)));
              },
              [d, p]
            );
          (0, n.useEffect)(
            () => () => {
              m.current && clearTimeout(m.current);
            },
            []
          );
          let x = (e, t) =>
            (0, a.jsxs)("div", {
              onMouseEnter: () => y(e),
              onMouseLeave: () => C(e, t),
              children: [
                (0, a.jsx)(i.O7, {
                  ref: v,
                  className: "tw-flex tw-outline-none",
                  children: r,
                }),
                (0, a.jsx)(i.Hi, {
                  anchor: "bottom",
                  className: l()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === h },
                    u
                  ),
                  children: n.cloneElement(s, {
                    closePopover: () => {
                      m.current && clearTimeout(m.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, a.jsx)(i.J2, {
            className: l()("tw-relative", c),
            children: (e) => {
              let { open: t, close: r } = e,
                n = x(t, r);
              if (g.isTutorialOpen) {
                var i, s;
                return (0, a.jsx)(b, {
                  skipClick:
                    null !== (i = g.handleSkipTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  continueClick:
                    null !== (s = g.handleContinueTutorialClick) && void 0 !== s
                      ? s
                      : () => {},
                  currentStep: g.currentTutorialStep,
                  isOpen: g.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: n,
                });
              }
              return n;
            },
          });
        });
        v.displayName = "HoverPopover";
        var m = v;
      },
      84624: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return _;
            },
          });
        var a = r(85893),
          n = r(67294),
          i = r(93967),
          s = r.n(i),
          l = r(46656),
          o = r(59731),
          c = r(55506),
          u = r(10066),
          d = r(3955),
          p = r.n(d),
          g = r(13090),
          f = (e) => {
            let { detail: t } = e;
            return (0, a.jsx)("div", {
              className: s()(p().summary, "!tw-mt-0"),
              children: [
                { label: "Order Date", render: () => (0, u.m2)(t.orderDate) },
                {
                  label: "Currency Pair",
                  render: () =>
                    (0, a.jsx)("div", {
                      className: p().currency,
                      children: (0, u._S)(t.currencyPair),
                    }),
                },
                { label: "Product", render: () => t.product },
                { label: "Side", render: () => (0, g.U)(t.side) },
                { label: "Size", render: () => t.size },
                { label: "Expiry", render: () => (0, u.m2)(t.tenor) },
                {
                  label: "Collateral Amount",
                  render: () =>
                    (0, a.jsx)(c.Z, {
                      wethAmount: t.wethAmount,
                      usdcAmount: t.usdcAmount,
                    }),
                },
                { label: "Order Limit", render: () => t.orderLimit },
              ].map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: p().row,
                    children: [
                      (0, a.jsx)("div", {
                        className: p().label,
                        children: e.label,
                      }),
                      (0, a.jsx)("div", {
                        className: p().value,
                        children: e.render(),
                      }),
                    ],
                  },
                  t
                )
              ),
            });
          },
          b = r(46449),
          v = r(47236),
          m = r(47054),
          h = r(48741),
          y = r(77768),
          C = r.n(y),
          x = r(45686),
          k = r(62582),
          P = r(18572),
          w = r(87214),
          L = r(90639),
          N = r(88144),
          O = r(67930),
          j = r(59421),
          E = r(75922),
          S = r(18666),
          A = r(45338),
          R = r(81989),
          _ = (e) => {
            let { isPreview: t = !1 } = e,
              { isConnected: r } = (0, R.Pk)(),
              {
                newToast: i,
                ithacaSDK: c,
                isAuthenticated: d,
                auctionOngoing: p,
                expiryList: g,
                currentExpiryDate: y,
                setCurrentExpiryDate: _,
              } = (0, o.qr)(),
              T = t ? b.KP : void 0,
              {
                currentPage: I,
                handlePageChange: D,
                pageStart: B,
                pageEnd: F,
              } = (0, b.ZP)(T),
              Z = t ? L.vj.PREVIEW_LIVE : L.vj.LIVE,
              [H, M] = (0, n.useState)([]),
              [q, V] = (0, n.useState)(0),
              [U, z] = (0, n.useState)(!1),
              [J, W] = (0, n.useState)(!1),
              [Y, K] = (0, n.useState)(null),
              [G, Q] = (0, n.useState)(""),
              [X, $] = (0, n.useState)(!0),
              [ee, et] = (0, n.useState)(!1),
              { refetchFundLockState: er, refetchLockedCollateralData: ea } =
                (0, j.F)(),
              en = (0, n.useMemo)(() => r && d, [r, d]),
              {
                setDashboardFilter: ei,
                dashboard: {
                  sideFilter: es,
                  currencyFilter: el,
                  strikeFilter: eo,
                  productFilter: ec,
                },
              } = (0, o.xc)(),
              eu = ei("strikeFilter"),
              ed = ei("productFilter"),
              ep = ei("currencyFilter"),
              eg = ei("sideFilter"),
              { showToast: ef } = (0, v.Z)(),
              {
                data: eb = [],
                isPending: ev,
                refetch: em,
              } = (0, N.a)({
                queryKey: [O.Rq],
                queryFn: async () => {
                  let e = await c.orders.clientOpenOrders();
                  return (0, k.PC)(e, Z);
                },
                refetchInterval: O.x6,
                enabled: en,
              });
            (0, n.useEffect)(() => {
              i &&
                ("NEW" === i.orderStatus || "FILLED" === i.orderStatus) &&
                em();
            }, [i]);
            let eh = (0, n.useMemo)(
                () =>
                  Array.from(new Set(eb.flatMap((e) => e.strikeGroup)))
                    .sort()
                    .map((e) => "".concat(e)),
                [eb]
              ),
              ey = (0, n.useMemo)(
                () =>
                  Array.from(
                    new Set(eb.map((e) => (0, k.Yf)(e.product)))
                  ).sort(),
                [eb]
              );
            (0, n.useEffect)(() => {
              0 !== eh.length &&
                (eo.every((e) => eh.map((e) => e).includes(e)) || eu([]));
            }, [eh, eo]);
            let [eC, ex] = (0, n.useState)([]),
              ek = (e) => {
                var t, r;
                let a =
                  (null === (r = H[e].expandedInfo) || void 0 === r
                    ? void 0
                    : null === (t = r[e]) || void 0 === t
                    ? void 0
                    : t.size) || 0;
                K({ ...H[e], size: a }), z(!0);
              };
            (0, n.useEffect)(() => {
              !ee && H.length > 0 && (eL("Order Date", !1), et(!0));
            }, [eb, ee, H]);
            let eP = (e) => {
                eC.includes(e)
                  ? ex((t) => t.filter((t) => t !== e))
                  : ex((t) => [...t, e]);
              },
              ew = () => {
                let e = (0, u.em)(eb, ec);
                switch (
                  ((e = (0, u.up)(e, es)),
                  (e = (0, u.lU)(e, el)),
                  (e = (0, u._4)(e, eo)),
                  t && (e = (0, u.x0)(e, (0, S.lV)(y.toString()))),
                  G)
                ) {
                  case "Order Date":
                    e = (0, u.U9)(e, X);
                    break;
                  case "Expiry":
                  case "Collateral Amount":
                    e = (0, u.e4)(e, X);
                    break;
                  case "Order Limit":
                    e = (0, u.Rd)(e, X);
                    break;
                  case "Fill %":
                    e = (0, u.YG)(e, X);
                    break;
                  case "Status":
                    e = (0, u.ow)(e, X);
                }
                V(e.length), M(e.slice(B, F));
              };
            (0, n.useEffect)(() => {
              d && !ev && ew();
            }, [ev, d, eb, ec, es, eo, el, G, X, B, F, T, y]);
            let eL = (e, t) => {
                Q(e), G != e ? (Q(e), $(t)) : $(!X);
              },
              eN = !H.length && ev && en,
              eO = !H.length && !ev,
              ej = H.length > 0;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                t &&
                  (0, a.jsx)("div", {
                    className: "tw-mb-8",
                    children: (0, a.jsx)(E.Z, {
                      size: "regular",
                      options: g.map((e) => ({
                        value: "".concat(e),
                        option: (0, S.lV)(e.toString()),
                      })),
                      name: "expiryDate",
                      selectedOption: "".concat(y),
                      onChange: (e) => {
                        _((0, A.Dx)(e));
                      },
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: s()(
                    Z === L.vj.LIVE
                      ? C().gridContainerTableLiveOrders
                      : C().gridContainerTableLivePreviewOrders,
                    { [C().isOpacity]: !en }
                  ),
                  children: [
                    (0, a.jsx)(m.Z, {
                      updateSort: eL,
                      currencyArray: el,
                      clearFilterArray: (e) => {
                        switch (e) {
                          case "side":
                            return eg([]);
                          case "product":
                            return ed([]);
                          case "currency":
                            return ep([]);
                          case "strike":
                            return eu([]);
                        }
                      },
                      productArray: ec,
                      sideArray: es,
                      setSideArray: eg,
                      setProductArray: ed,
                      setCurrencyArray: ep,
                      type: Z,
                      handleCancelAllOrder: () => {
                        W(!0),
                          c.orders.orderCancelAll().then(() => {
                            em(), W(!1), z(!1), K(null);
                          });
                      },
                      strikesArray: eo,
                      setStrikeArray: eu,
                      strikeList: eh,
                      productList: ey,
                    }),
                    ej &&
                      H.map((e, r) => {
                        let i = eC.includes(r);
                        return (0, a.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, a.jsx)("div", {
                                className: s()(
                                  "tw-col-span-full -tw-mb-11 tw-h-11 tw-rounded-md",
                                  {
                                    "tw-translate-y-2": 0 !== r,
                                    "-tw-translate-y-1": 0 === r,
                                    "tw-bg-green-500/5": p,
                                  }
                                ),
                              }),
                              (0, a.jsx)(h.Z, {
                                handleRowExpand: eP,
                                expandedRow: eC,
                                row: e,
                                cancelOrder: !0,
                                handleCancelOrderClick: ek,
                                rowIndex: r,
                                type: Z,
                                isPreview: t,
                              }),
                              (0, a.jsx)(w.Z, {
                                isRowExpanded: i,
                                type: Z,
                                children: (0, a.jsx)(x.Z, {
                                  data: e.expandedInfo || [],
                                  type: Z,
                                }),
                              }),
                            ],
                          },
                          r
                        );
                      }),
                    (0, a.jsx)("div", {
                      style: { minHeight: (0, k.OS)(H.length) },
                      className: "tw-col-span-full",
                      children: (0, a.jsx)(P.y, {
                        description: !0,
                        displayIsLoading: eN,
                        displayNoResults: eO,
                        isAuthenticated: en,
                        totalItems: q,
                        currentPage: I,
                        handlePageChange: D,
                        pageLimit: T,
                      }),
                    }),
                  ],
                }),
                U &&
                  Y &&
                  (0, a.jsx)(l.default, {
                    title: "Cancel Order",
                    onCloseModal: () => {
                      z(!1), K(null);
                    },
                    onSubmitOrder: () => {
                      W(!0),
                        c.orders
                          .orderCancel(
                            (null == Y ? void 0 : Y.clientOrderId) || 0
                          )
                          .then(() => {
                            em(),
                              er(),
                              ea(),
                              W(!1),
                              z(!1),
                              K(null),
                              ef({
                                title: "Order Cancelled",
                                message: "Your order has been cancelled",
                              });
                          });
                    },
                    isLoading: J,
                    isOpen: U,
                    children: (0, a.jsx)(f, { detail: Y }),
                  }),
              ],
            });
          };
      },
      3955: function (e) {
        e.exports = {
          summary: "Summary_summary__bWQxX",
          row: "Summary_row__B_xlY",
          label: "Summary_label__ynVMj",
          value: "Summary_value__fb_v_",
          currency: "Summary_currency__UEQPO",
        };
      },
      11358: function (e, t, r) {
        var a;
        (a = (e) =>
          (() => {
            var t = {
                703: (e, t, r) => {
                  "use strict";
                  var a = r(414);
                  function n() {}
                  function i() {}
                  (i.resetWarningCache = n),
                    (e.exports = function () {
                      function e(e, t, r, n, i, s) {
                        if (s !== a) {
                          var l = Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                          );
                          throw ((l.name = "Invariant Violation"), l);
                        }
                      }
                      function t() {
                        return e;
                      }
                      e.isRequired = e;
                      var r = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: n,
                      };
                      return (r.PropTypes = r), r;
                    });
                },
                697: (e, t, r) => {
                  e.exports = r(703)();
                },
                414: (e) => {
                  "use strict";
                  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                },
                98: (t) => {
                  "use strict";
                  t.exports = e;
                },
              },
              r = {};
            function a(e) {
              var n = r[e];
              if (void 0 !== n) return n.exports;
              var i = (r[e] = { exports: {} });
              return t[e](i, i.exports, a), i.exports;
            }
            (a.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return a.d(t, { a: t }), t;
            }),
              (a.d = (e, t) => {
                for (var r in t)
                  a.o(t, r) &&
                    !a.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (a.r = (e) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              });
            var n = {};
            return (
              (() => {
                "use strict";
                a.r(n), a.d(n, { default: () => h });
                var e = a(98),
                  t = a.n(e),
                  r = a(697),
                  i = a.n(r);
                function s() {
                  return (s = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = arguments[t];
                          for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) &&
                              (e[a] = r[a]);
                        }
                        return e;
                      }).apply(this, arguments);
                }
                var l = function (e) {
                  var r = e.pageClassName,
                    a = e.pageLinkClassName,
                    n = e.page,
                    i = e.selected,
                    l = e.activeClassName,
                    o = e.activeLinkClassName,
                    c = e.getEventListener,
                    u = e.pageSelectedHandler,
                    d = e.href,
                    p = e.extraAriaContext,
                    g = e.pageLabelBuilder,
                    f = e.rel,
                    b = e.ariaLabel || "Page " + n + (p ? " " + p : ""),
                    v = null;
                  return (
                    i &&
                      ((v = "page"),
                      (b =
                        e.ariaLabel || "Page " + n + " is your current page"),
                      (r = void 0 !== r ? r + " " + l : l),
                      void 0 !== a
                        ? void 0 !== o && (a = a + " " + o)
                        : (a = o)),
                    t().createElement(
                      "li",
                      { className: r },
                      t().createElement(
                        "a",
                        s(
                          {
                            rel: f,
                            role: d ? void 0 : "button",
                            className: a,
                            href: d,
                            tabIndex: i ? "-1" : "0",
                            "aria-label": b,
                            "aria-current": v,
                            onKeyPress: u,
                          },
                          c(u)
                        ),
                        g(n)
                      )
                    )
                  );
                };
                function o() {
                  return (o = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = arguments[t];
                          for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) &&
                              (e[a] = r[a]);
                        }
                        return e;
                      }).apply(this, arguments);
                }
                l.propTypes = {
                  pageSelectedHandler: i().func.isRequired,
                  selected: i().bool.isRequired,
                  pageClassName: i().string,
                  pageLinkClassName: i().string,
                  activeClassName: i().string,
                  activeLinkClassName: i().string,
                  extraAriaContext: i().string,
                  href: i().string,
                  ariaLabel: i().string,
                  page: i().number.isRequired,
                  getEventListener: i().func.isRequired,
                  pageLabelBuilder: i().func.isRequired,
                  rel: i().string,
                };
                var c = function (e) {
                  var r = e.breakLabel,
                    a = e.breakAriaLabel,
                    n = e.breakClassName,
                    i = e.breakLinkClassName,
                    s = e.breakHandler,
                    l = e.getEventListener;
                  return t().createElement(
                    "li",
                    { className: n || "break" },
                    t().createElement(
                      "a",
                      o(
                        {
                          className: i,
                          role: "button",
                          tabIndex: "0",
                          "aria-label": a,
                          onKeyPress: s,
                        },
                        l(s)
                      ),
                      r
                    )
                  );
                };
                function u(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "";
                  return null != e ? e : t;
                }
                function d(e) {
                  return (d =
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
                function p() {
                  return (p = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = arguments[t];
                          for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) &&
                              (e[a] = r[a]);
                        }
                        return e;
                      }).apply(this, arguments);
                }
                function g(e, t) {
                  return (g = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function f(e) {
                  if (void 0 === e)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function b(e) {
                  return (b = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function v(e, t, r) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r),
                    e
                  );
                }
                c.propTypes = {
                  breakLabel: i().oneOfType([i().string, i().node]),
                  breakAriaLabel: i().string,
                  breakClassName: i().string,
                  breakLinkClassName: i().string,
                  breakHandler: i().func.isRequired,
                  getEventListener: i().func.isRequired,
                };
                var m = (function (e) {
                  !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && g(e, t);
                  })(i, e);
                  var r,
                    a,
                    n =
                      ((a = (function () {
                        if (
                          "undefined" == typeof Reflect ||
                          !Reflect.construct ||
                          Reflect.construct.sham
                        )
                          return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          t = b(i);
                        return (
                          (e = a
                            ? Reflect.construct(
                                t,
                                arguments,
                                b(this).constructor
                              )
                            : t.apply(this, arguments)),
                          (function (e, t) {
                            if (
                              t &&
                              ("object" === d(t) || "function" == typeof t)
                            )
                              return t;
                            if (void 0 !== t)
                              throw TypeError(
                                "Derived constructors may only return object or undefined"
                              );
                            return f(e);
                          })(this, e)
                        );
                      });
                  function i(e) {
                    var r, a;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, i),
                      v(
                        f((r = n.call(this, e))),
                        "handlePreviousPage",
                        function (e) {
                          var t = r.state.selected;
                          r.handleClick(e, null, t > 0 ? t - 1 : void 0, {
                            isPrevious: !0,
                          });
                        }
                      ),
                      v(f(r), "handleNextPage", function (e) {
                        var t = r.state.selected,
                          a = r.props.pageCount;
                        r.handleClick(e, null, t < a - 1 ? t + 1 : void 0, {
                          isNext: !0,
                        });
                      }),
                      v(f(r), "handlePageSelected", function (e, t) {
                        if (r.state.selected === e)
                          return (
                            r.callActiveCallback(e),
                            void r.handleClick(t, null, void 0, {
                              isActive: !0,
                            })
                          );
                        r.handleClick(t, null, e);
                      }),
                      v(f(r), "handlePageChange", function (e) {
                        r.state.selected !== e &&
                          (r.setState({ selected: e }), r.callCallback(e));
                      }),
                      v(f(r), "getEventListener", function (e) {
                        return v({}, r.props.eventListener, e);
                      }),
                      v(f(r), "handleClick", function (e, t, a) {
                        var n =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : {},
                          i = n.isPrevious,
                          s = n.isNext,
                          l = n.isBreak,
                          o = n.isActive;
                        e.preventDefault
                          ? e.preventDefault()
                          : (e.returnValue = !1);
                        var c = r.state.selected,
                          u = r.props.onClick,
                          d = a;
                        if (u) {
                          var p = u({
                            index: t,
                            selected: c,
                            nextSelectedPage: a,
                            event: e,
                            isPrevious: void 0 !== i && i,
                            isNext: void 0 !== s && s,
                            isBreak: void 0 !== l && l,
                            isActive: void 0 !== o && o,
                          });
                          if (!1 === p) return;
                          Number.isInteger(p) && (d = p);
                        }
                        void 0 !== d && r.handlePageChange(d);
                      }),
                      v(f(r), "handleBreakClick", function (e, t) {
                        var a = r.state.selected;
                        r.handleClick(
                          t,
                          e,
                          a < e ? r.getForwardJump() : r.getBackwardJump(),
                          { isBreak: !0 }
                        );
                      }),
                      v(f(r), "callCallback", function (e) {
                        void 0 !== r.props.onPageChange &&
                          "function" == typeof r.props.onPageChange &&
                          r.props.onPageChange({ selected: e });
                      }),
                      v(f(r), "callActiveCallback", function (e) {
                        void 0 !== r.props.onPageActive &&
                          "function" == typeof r.props.onPageActive &&
                          r.props.onPageActive({ selected: e });
                      }),
                      v(f(r), "getElementPageRel", function (e) {
                        var t = r.state.selected,
                          a = r.props,
                          n = a.nextPageRel,
                          i = a.prevPageRel,
                          s = a.selectedPageRel;
                        return t - 1 === e
                          ? i
                          : t === e
                          ? s
                          : t + 1 === e
                          ? n
                          : void 0;
                      }),
                      v(f(r), "pagination", function () {
                        var e = [],
                          a = r.props,
                          n = a.pageRangeDisplayed,
                          i = a.pageCount,
                          s = a.marginPagesDisplayed,
                          l = a.breakLabel,
                          o = a.breakClassName,
                          u = a.breakLinkClassName,
                          d = a.breakAriaLabels,
                          p = r.state.selected;
                        if (i <= n)
                          for (var g = 0; g < i; g++)
                            e.push(r.getPageElement(g));
                        else {
                          var f = n / 2,
                            b = n - f;
                          p > i - n / 2
                            ? (f = n - (b = i - p))
                            : p < n / 2 && (b = n - (f = p));
                          var v,
                            m,
                            h = function (e) {
                              return r.getPageElement(e);
                            },
                            y = [];
                          for (v = 0; v < i; v++) {
                            var C = v + 1;
                            if (C <= s)
                              y.push({ type: "page", index: v, display: h(v) });
                            else if (C > i - s)
                              y.push({ type: "page", index: v, display: h(v) });
                            else if (
                              v >= p - f &&
                              v <= p + (0 === p && n > 1 ? b - 1 : b)
                            )
                              y.push({ type: "page", index: v, display: h(v) });
                            else if (
                              l &&
                              y.length > 0 &&
                              y[y.length - 1].display !== m &&
                              (n > 0 || s > 0)
                            ) {
                              var x = v < p ? d.backward : d.forward;
                              (m = t().createElement(c, {
                                key: v,
                                breakAriaLabel: x,
                                breakLabel: l,
                                breakClassName: o,
                                breakLinkClassName: u,
                                breakHandler: r.handleBreakClick.bind(null, v),
                                getEventListener: r.getEventListener,
                              })),
                                y.push({ type: "break", index: v, display: m });
                            }
                          }
                          y.forEach(function (t, r) {
                            var a = t;
                            "break" === t.type &&
                              y[r - 1] &&
                              "page" === y[r - 1].type &&
                              y[r + 1] &&
                              "page" === y[r + 1].type &&
                              y[r + 1].index - y[r - 1].index <= 2 &&
                              (a = {
                                type: "page",
                                index: t.index,
                                display: h(t.index),
                              }),
                              e.push(a.display);
                          });
                        }
                        return e;
                      }),
                      void 0 !== e.initialPage &&
                        void 0 !== e.forcePage &&
                        console.warn(
                          "(react-paginate): Both initialPage ("
                            .concat(e.initialPage, ") and forcePage (")
                            .concat(
                              e.forcePage,
                              ") props are provided, which is discouraged."
                            ) +
                            " Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"
                        ),
                      (a = e.initialPage
                        ? e.initialPage
                        : e.forcePage
                        ? e.forcePage
                        : 0),
                      (r.state = { selected: a }),
                      r
                    );
                  }
                  return (
                    (r = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props,
                            t = e.initialPage,
                            r = e.disableInitialCallback,
                            a = e.extraAriaContext,
                            n = e.pageCount,
                            i = e.forcePage;
                          void 0 === t || r || this.callCallback(t),
                            a &&
                              console.warn(
                                "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."
                              ),
                            Number.isInteger(n) ||
                              console.warn(
                                "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                                  n,
                                  "). Did you forget a Math.ceil()?"
                                )
                              ),
                            void 0 !== t &&
                              t > n - 1 &&
                              console.warn(
                                "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                                  .concat(t, " > ")
                                  .concat(n - 1, ").")
                              ),
                            void 0 !== i &&
                              i > n - 1 &&
                              console.warn(
                                "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                                  .concat(i, " > ")
                                  .concat(n - 1, ").")
                              );
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e) {
                          void 0 !== this.props.forcePage &&
                            this.props.forcePage !== e.forcePage &&
                            (this.props.forcePage > this.props.pageCount - 1 &&
                              console.warn(
                                "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                                  .concat(this.props.forcePage, " > ")
                                  .concat(this.props.pageCount - 1, ").")
                              ),
                            this.setState({ selected: this.props.forcePage })),
                            Number.isInteger(e.pageCount) &&
                              !Number.isInteger(this.props.pageCount) &&
                              console.warn(
                                "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                                  this.props.pageCount,
                                  "). Did you forget a Math.ceil()?"
                                )
                              );
                        },
                      },
                      {
                        key: "getForwardJump",
                        value: function () {
                          var e = this.state.selected,
                            t = this.props,
                            r = t.pageCount,
                            a = e + t.pageRangeDisplayed;
                          return a >= r ? r - 1 : a;
                        },
                      },
                      {
                        key: "getBackwardJump",
                        value: function () {
                          var e =
                            this.state.selected - this.props.pageRangeDisplayed;
                          return e < 0 ? 0 : e;
                        },
                      },
                      {
                        key: "getElementHref",
                        value: function (e) {
                          var t = this.props,
                            r = t.hrefBuilder,
                            a = t.pageCount,
                            n = t.hrefAllControls;
                          if (r)
                            return n || (e >= 0 && e < a)
                              ? r(e + 1, a, this.state.selected)
                              : void 0;
                        },
                      },
                      {
                        key: "ariaLabelBuilder",
                        value: function (e) {
                          var t = e === this.state.selected;
                          if (
                            this.props.ariaLabelBuilder &&
                            e >= 0 &&
                            e < this.props.pageCount
                          ) {
                            var r = this.props.ariaLabelBuilder(e + 1, t);
                            return (
                              this.props.extraAriaContext &&
                                !t &&
                                (r = r + " " + this.props.extraAriaContext),
                              r
                            );
                          }
                        },
                      },
                      {
                        key: "getPageElement",
                        value: function (e) {
                          var r = this.state.selected,
                            a = this.props,
                            n = a.pageClassName,
                            i = a.pageLinkClassName,
                            s = a.activeClassName,
                            o = a.activeLinkClassName,
                            c = a.extraAriaContext,
                            u = a.pageLabelBuilder;
                          return t().createElement(l, {
                            key: e,
                            pageSelectedHandler: this.handlePageSelected.bind(
                              null,
                              e
                            ),
                            selected: r === e,
                            rel: this.getElementPageRel(e),
                            pageClassName: n,
                            pageLinkClassName: i,
                            activeClassName: s,
                            activeLinkClassName: o,
                            extraAriaContext: c,
                            href: this.getElementHref(e),
                            ariaLabel: this.ariaLabelBuilder(e),
                            page: e + 1,
                            pageLabelBuilder: u,
                            getEventListener: this.getEventListener,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.props.renderOnZeroPageCount;
                          if (0 === this.props.pageCount && void 0 !== e)
                            return e ? e(this.props) : e;
                          var r = this.props,
                            a = r.disabledClassName,
                            n = r.disabledLinkClassName,
                            i = r.pageCount,
                            s = r.className,
                            l = r.containerClassName,
                            o = r.previousLabel,
                            c = r.previousClassName,
                            d = r.previousLinkClassName,
                            g = r.previousAriaLabel,
                            f = r.prevRel,
                            b = r.nextLabel,
                            v = r.nextClassName,
                            m = r.nextLinkClassName,
                            h = r.nextAriaLabel,
                            y = r.nextRel,
                            C = this.state.selected,
                            x = 0 === C,
                            k = C === i - 1,
                            P = ""
                              .concat(u(c))
                              .concat(x ? " ".concat(u(a)) : ""),
                            w = ""
                              .concat(u(v))
                              .concat(k ? " ".concat(u(a)) : ""),
                            L = ""
                              .concat(u(d))
                              .concat(x ? " ".concat(u(n)) : ""),
                            N = ""
                              .concat(u(m))
                              .concat(k ? " ".concat(u(n)) : "");
                          return t().createElement(
                            "ul",
                            {
                              className: s || l,
                              role: "navigation",
                              "aria-label": "Pagination",
                            },
                            t().createElement(
                              "li",
                              { className: P },
                              t().createElement(
                                "a",
                                p(
                                  {
                                    className: L,
                                    href: this.getElementHref(C - 1),
                                    tabIndex: x ? "-1" : "0",
                                    role: "button",
                                    onKeyPress: this.handlePreviousPage,
                                    "aria-disabled": x ? "true" : "false",
                                    "aria-label": g,
                                    rel: f,
                                  },
                                  this.getEventListener(this.handlePreviousPage)
                                ),
                                o
                              )
                            ),
                            this.pagination(),
                            t().createElement(
                              "li",
                              { className: w },
                              t().createElement(
                                "a",
                                p(
                                  {
                                    className: N,
                                    href: this.getElementHref(C + 1),
                                    tabIndex: k ? "-1" : "0",
                                    role: "button",
                                    onKeyPress: this.handleNextPage,
                                    "aria-disabled": k ? "true" : "false",
                                    "aria-label": h,
                                    rel: y,
                                  },
                                  this.getEventListener(this.handleNextPage)
                                ),
                                b
                              )
                            )
                          );
                        },
                      },
                    ]),
                    (function (e, t) {
                      for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        (a.enumerable = a.enumerable || !1),
                          (a.configurable = !0),
                          "value" in a && (a.writable = !0),
                          Object.defineProperty(e, a.key, a);
                      }
                    })(i.prototype, r),
                    Object.defineProperty(i, "prototype", { writable: !1 }),
                    i
                  );
                })(e.Component);
                v(m, "propTypes", {
                  pageCount: i().number.isRequired,
                  pageRangeDisplayed: i().number,
                  marginPagesDisplayed: i().number,
                  previousLabel: i().node,
                  previousAriaLabel: i().string,
                  prevPageRel: i().string,
                  prevRel: i().string,
                  nextLabel: i().node,
                  nextAriaLabel: i().string,
                  nextPageRel: i().string,
                  nextRel: i().string,
                  breakLabel: i().oneOfType([i().string, i().node]),
                  breakAriaLabels: i().shape({
                    forward: i().string,
                    backward: i().string,
                  }),
                  hrefBuilder: i().func,
                  hrefAllControls: i().bool,
                  onPageChange: i().func,
                  onPageActive: i().func,
                  onClick: i().func,
                  initialPage: i().number,
                  forcePage: i().number,
                  disableInitialCallback: i().bool,
                  containerClassName: i().string,
                  className: i().string,
                  pageClassName: i().string,
                  pageLinkClassName: i().string,
                  pageLabelBuilder: i().func,
                  activeClassName: i().string,
                  activeLinkClassName: i().string,
                  previousClassName: i().string,
                  nextClassName: i().string,
                  previousLinkClassName: i().string,
                  nextLinkClassName: i().string,
                  disabledClassName: i().string,
                  disabledLinkClassName: i().string,
                  breakClassName: i().string,
                  breakLinkClassName: i().string,
                  extraAriaContext: i().string,
                  ariaLabelBuilder: i().func,
                  eventListener: i().string,
                  renderOnZeroPageCount: i().func,
                  selectedPageRel: i().string,
                }),
                  v(m, "defaultProps", {
                    pageRangeDisplayed: 2,
                    marginPagesDisplayed: 3,
                    activeClassName: "selected",
                    previousLabel: "Previous",
                    previousClassName: "previous",
                    previousAriaLabel: "Previous page",
                    prevPageRel: "prev",
                    prevRel: "prev",
                    nextLabel: "Next",
                    nextClassName: "next",
                    nextAriaLabel: "Next page",
                    nextPageRel: "next",
                    nextRel: "next",
                    breakLabel: "...",
                    breakAriaLabels: {
                      forward: "Jump forward",
                      backward: "Jump backward",
                    },
                    disabledClassName: "disabled",
                    disableInitialCallback: !1,
                    pageLabelBuilder: function (e) {
                      return e;
                    },
                    eventListener: "onClick",
                    renderOnZeroPageCount: void 0,
                    selectedPageRel: "canonical",
                    hrefAllControls: !1,
                  });
                let h = m;
              })(),
              n
            );
          })()),
          (e.exports = a(r(67294)));
      },
      51182: function (e, t, r) {
        "use strict";
        var a = r(67294);
        let n = a.forwardRef(function (e, t) {
          let { title: r, titleId: n, ...i } = e;
          return a.createElement(
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
                "aria-labelledby": n,
              },
              i
            ),
            r ? a.createElement("title", { id: n }, r) : null,
            a.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
            })
          );
        });
        t.Z = n;
      },
    },
  ]);
