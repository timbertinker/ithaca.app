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
      (e._sentryDebugIds[t] = "4e0a5acc-c9d8-4c9d-ad14-c178e142edc5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4e0a5acc-c9d8-4c9d-ad14-c178e142edc5"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3853],
    {
      55506: function (e, t, n) {
        "use strict";
        n.d(t, {
          g: function () {
            return u;
          },
        });
        var s = n(85893),
          l = n(77125),
          i = n(62790),
          r = n.n(i),
          a = n(67294),
          c = n(45338),
          d = n(70757),
          o = n(59731);
        let u = (e) => {
          let { amount: t, currency: n } = e;
          return (0, s.jsxs)("div", {
            className: r().container,
            children: [
              (0, s.jsx)("span", {
                className: r().amount,
                children: (0, c.Yr)(t, 3),
              }),
              (0, s.jsx)("div", { children: (0, d.XX)(n) }),
              (0, s.jsx)("span", { className: r().currency, children: n }),
            ],
          });
        };
        t.Z = (e) => {
          let { wethAmount: t, usdcAmount: n, isPreview: i } = e,
            { underlyingCurrency: c } = (0, o.qr)(),
            u = [
              { amount: t, Logo: () => (0, d.XX)(c), currency: c },
              { amount: n, Logo: l.Z, currency: "USDC" },
            ];
          return (0, s.jsx)("div", {
            className: r().container,
            children: u.map((e) => {
              let { amount: t, Logo: n, currency: l } = e;
              return (0, s.jsxs)(
                a.Fragment,
                {
                  children: [
                    (0, s.jsx)("span", {
                      className: r().amount,
                      children: t.toFixed(i ? 2 : 3),
                    }),
                    (0, s.jsx)("div", { children: (0, s.jsx)(n, {}) }),
                    i
                      ? (0, s.jsx)("span", {})
                      : (0, s.jsx)("span", {
                          className: r().currency,
                          children: l,
                        }),
                  ],
                },
                l
              );
            }),
          });
        };
      },
      89391: function (e, t, n) {
        "use strict";
        var s = n(85893);
        t.Z = (e) => {
          let { fill: t = !1 } = e;
          return (0, s.jsx)("svg", {
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M4 4.9796C4 4.72729 4 4.60114 4.0436 4.50477C4.08195 4.42 4.14314 4.35108 4.2184 4.30789C4.30397 4.25879 4.41598 4.25879 4.64 4.25879H11.36C11.584 4.25879 11.696 4.25879 11.7816 4.30789C11.8569 4.35108 11.9181 4.42 11.9564 4.50477C12 4.60114 12 4.72729 12 4.9796V5.28116C12 5.40225 12 5.4628 11.9869 5.5191C11.9752 5.56899 11.9561 5.61626 11.9302 5.65885C11.901 5.7069 11.8604 5.74656 11.7792 5.82587L9.22084 8.32301C9.13959 8.40232 9.09897 8.44197 9.0698 8.49003C9.04395 8.53261 9.02478 8.57988 9.01314 8.62978C9 8.68608 9 8.74662 9 8.86772V11.2228C9 11.3109 9 11.355 8.98738 11.3931C8.97624 11.4267 8.9581 11.4569 8.9345 11.4811C8.90779 11.5084 8.87147 11.5248 8.79884 11.5575L7.43885 12.1702C7.29183 12.2364 7.21832 12.2695 7.15931 12.2557C7.10771 12.2436 7.06242 12.2091 7.0333 12.1596C7 12.103 7 12.0139 7 11.8355V8.86772C7 8.74662 7 8.68608 6.98686 8.62978C6.97522 8.57988 6.95605 8.53261 6.9302 8.49003C6.90103 8.44197 6.86041 8.40232 6.77916 8.32301L4.22084 5.82587C4.13959 5.74656 4.09897 5.7069 4.0698 5.65885C4.04395 5.61626 4.02478 5.56899 4.01314 5.5191C4 5.4628 4 5.40225 4 5.28116V4.9796Z",
              stroke: t ? "#5ee192" : "#9D9DAA",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        };
      },
      95373: function (e, t, n) {
        "use strict";
        var s = n(85893);
        t.Z = () =>
          (0, s.jsxs)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsxs)("g", {
                clipPath: "url(#clip0_16681_82695)",
                children: [
                  (0, s.jsx)("path", {
                    d: "M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, s.jsx)("path", {
                    d: "M6 4.5H6.005",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, s.jsx)("path", {
                    d: "M5.5 6H6V8H6.5",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "clip0_16681_82695",
                  children: (0, s.jsx)("rect", {
                    width: "12",
                    height: "12",
                    fill: "white",
                  }),
                }),
              }),
            ],
          });
      },
      45217: function (e, t, n) {
        "use strict";
        var s = n(85893);
        t.Z = () =>
          (0, s.jsxs)("svg", {
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.68558 10.072C5.49032 9.87672 5.17374 9.87672 4.97848 10.072C4.78322 10.2672 4.78322 10.5838 4.97848 10.7791L7.6413 13.4419C7.64256 13.4432 7.64383 13.4445 7.6451 13.4458C7.7435 13.5442 7.87271 13.593 8.00168 13.5922C8.12864 13.5914 8.25538 13.5426 8.35225 13.4458C8.35352 13.4445 8.35478 13.4432 8.35603 13.4419L11.0189 10.7791C11.2141 10.5838 11.2141 10.2672 11.0189 10.072C10.8236 9.87672 10.507 9.87672 10.3118 10.072L7.99868 12.3851L5.68558 10.072Z",
                fill: "#9D9DAA",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3105 6.77909C10.5058 6.97435 10.8224 6.97435 11.0176 6.77909C11.2129 6.58383 11.2129 6.26725 11.0176 6.07198L8.3548 3.40916C8.35354 3.40788 8.35227 3.40659 8.35099 3.40532C8.25259 3.30692 8.12338 3.25811 7.99442 3.25888C7.86745 3.25963 7.74072 3.30844 7.64384 3.40532C7.64257 3.40659 7.64131 3.40786 7.64006 3.40914L4.97722 6.07198C4.78195 6.26725 4.78195 6.58383 4.97722 6.77909C5.17248 6.97435 5.48906 6.97435 5.68432 6.77909L7.99742 4.466L10.3105 6.77909Z",
                fill: "#9D9DAA",
              }),
            ],
          });
      },
      14052: function (e, t, n) {
        "use strict";
        var s = n(85893),
          l = n(71665),
          i = n.n(l),
          r = n(93967),
          a = n.n(r);
        t.Z = (e) => {
          let {
              label: t,
              icon: n,
              children: l,
              labelClassName: r,
              lowerLabel: c,
              lowerLabelClassName: d,
              className: o,
            } = e,
            u = "".concat(r || "").trim(),
            x = "".concat(d || "").trim();
          return (0, s.jsxs)("div", {
            className: a()(i().container, o),
            children: [
              (0, s.jsxs)("label", { className: u, children: [n && n, t] }),
              l,
              (0, s.jsx)("p", { className: x, children: c }),
            ],
          });
        };
      },
      65559: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var s = n(85893),
          l = () =>
            (0, s.jsx)("svg", {
              width: "8",
              height: "14",
              viewBox: "0 0 8 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
                fill: "white",
              }),
            }),
          i = () =>
            (0, s.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3536 14.3536C10.1583 14.5488 9.84171 14.5488 9.64645 14.3536L3.64645 8.35355C3.45118 8.15829 3.45118 7.84171 3.64645 7.64645L9.64645 1.64645C9.84171 1.45118 10.1583 1.45118 10.3536 1.64645C10.5488 1.84171 10.5488 2.15829 10.3536 2.35355L4.70711 8L10.3536 13.6464C10.5488 13.8417 10.5488 14.1583 10.3536 14.3536Z",
                fill: "white",
              }),
            }),
          r = n(11358),
          a = n.n(r),
          c = n(7235),
          d = n.n(c),
          o = (e) => {
            let {
                totalItems: t,
                itemsPerPage: n,
                currentPage: r,
                onPageChange: c,
                className: o = "",
              } = e,
              u = Math.ceil(t / n);
            return (0, s.jsx)("div", {
              className: "".concat(o, " ").concat(d().pagination),
              children:
                u > 1 &&
                (0, s.jsx)(a(), {
                  breakLabel: (0, s.jsx)(
                    "div",
                    { className: d().ellipsis, children: "..." },
                    "endEllipsis"
                  ),
                  nextLabel: (0, s.jsx)(l, {}),
                  previousLabel: (0, s.jsx)(i, {}),
                  onPageChange: (e) => {
                    let { selected: t } = e;
                    c(t + 1);
                  },
                  pageRangeDisplayed: 3,
                  marginPagesDisplayed: 1,
                  pageCount: u,
                  forcePage: r - 1,
                  containerClassName: d().pagination,
                  pageClassName: d().navigationItem,
                  previousClassName: ""
                    .concat(d().navigationItem, " ")
                    .concat(d().nextItem),
                  nextClassName: ""
                    .concat(d().navigationItem, " ")
                    .concat(d().nextItem),
                  activeClassName: d().active,
                }),
            });
          };
      },
      45686: function (e, t, n) {
        "use strict";
        var s = n(85893),
          l = n(93967),
          i = n.n(l),
          r = n(67294),
          a = n(90639),
          c = n(55506),
          d = n(77768),
          o = n.n(d),
          u = n(13090);
        let x = (e) => {
          let { className: t = "" } = e;
          return (0, s.jsx)("div", { className: t });
        };
        t.Z = (e) => {
          let { data: t, type: n } = e,
            l = n === a.vj.LIVE,
            d = n === a.vj.PREVIEW_LIVE;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(x, {}),
              (0, s.jsx)("div", {
                className: o().headerExpandedTable,
                children: "Strategy",
              }),
              (0, s.jsx)(x, {}),
              a.Kt.map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: ""
                      .concat(o().cell, " ")
                      .concat(3 === t ? o().emptyDiv : ""),
                    style: { flexDirection: "column", ...e.style },
                    children: (0, s.jsx)(
                      "div",
                      { className: o().cell, children: e.name },
                      t
                    ),
                  },
                  t
                )
              ),
              (0, s.jsx)(x, {}),
              (0, s.jsx)("div", {
                style: { gridColumn: "b/n" },
                children: (0, s.jsx)("div", { className: o().separator }),
              }),
              (0, s.jsx)(x, {}),
              t.map((e, t) =>
                (0, s.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      (0, s.jsx)("div", {
                        style: { gridColumn: "a/n", marginTop: 5 },
                      }),
                      (0, s.jsx)(x, {}),
                      (0, s.jsx)("div", {
                        className: ""
                          .concat(o().cellContentExpanded, " ")
                          .concat(o().bolded),
                        children: e.type,
                      }),
                      (0, s.jsx)(x, {}),
                      (0, s.jsx)(x, {}),
                      (0, s.jsx)("div", {
                        className: i()(
                          o().cellContentExpanded,
                          "tw-justify-center"
                        ),
                        children: (0, u.U)(e.side),
                      }),
                      (0, s.jsx)("div", {
                        className: i()(o().cellContentExpanded),
                        children: e.strike,
                      }),
                      (0, s.jsx)("div", {
                        className: i()(o().cellContentExpanded),
                        children: (0, s.jsx)("span", {
                          className: o().date,
                          children: e.expiryDate,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: i()(
                          o().cellContentExpanded,
                          "tw-justify-end"
                        ),
                        children: (0, s.jsx)(c.g, {
                          amount: e.size,
                          currency: e.sizeCurrency,
                        }),
                      }),
                      l &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(x, {}), (0, s.jsx)(x, {})],
                        }),
                      (0, s.jsx)(x, {}),
                    ],
                  },
                  t
                )
              ),
              (0, s.jsx)("div", {
                style: {
                  gridColumn: l ? "a/l" : d ? "a/h" : "a/j",
                  marginTop: 15,
                },
              }),
            ],
          });
        };
      },
      47054: function (e, t, n) {
        "use strict";
        var s = n(85893),
          l = n(67294),
          i = n(10066),
          r = n(3298),
          a = n(16795),
          c = n(80362),
          d = n(37422),
          o = n(43529),
          u = n(45217),
          x = n(77768),
          m = n.n(x),
          h = n(62582),
          j = n(23870),
          p = n(71367),
          C = n(86322),
          v = n(24514),
          w = n(95373),
          f = n(59731);
        t.Z = (e) => {
          let {
              updateSort: t,
              currencyArray: n,
              clearFilterArray: x,
              productArray: g,
              sideArray: N,
              setSideArray: y,
              setProductArray: L,
              setCurrencyArray: k,
              type: b,
              handleCancelAllOrder: Z,
              strikesArray: _,
              setStrikeArray: E,
              strikeList: P,
              productList: I,
            } = e,
            [F, D] = (0, l.useState)(null),
            M = (0, c.Z)(r.Mu),
            { underlyingCurrency: T } = (0, f.qr)(),
            A = (0, l.useRef)(null),
            O = (0, l.useRef)(null),
            R = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            V = (e, t) => {
              "Currency Pair" == F
                ? t
                  ? k([...n, e])
                  : k(n.filter((t) => t !== e))
                : "Product" == F
                ? t
                  ? L([...g, e.toUpperCase()])
                  : L(g.filter((t) => t !== e.toUpperCase()))
                : "Side" == F
                ? t
                  ? y([...N, e.toUpperCase()])
                  : y(N.filter((t) => t !== e.toUpperCase()))
                : "Strike" === F &&
                  (t ? E([..._, e]) : E([..._.filter((t) => t !== e)]));
            },
            B = (e) => () => {
              e === F ? D(null) : D(e);
            };
          (0, a.M)(() => {
            F && D(null);
          }),
            (0, l.useEffect)(() => {
              let e = (e) => {
                O.current &&
                  !O.current.contains(e.target) &&
                  A.current &&
                  !A.current.contains(e.target) &&
                  R.current &&
                  !R.current.contains(e.target) &&
                  S.current &&
                  !S.current.contains(e.target) &&
                  D(null);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []);
          let U = (e) => {
              let l = e === F ? "" : m().hide;
              switch (e) {
                case "Order Date":
                case "Expiry Date":
                case "Collateral Amount":
                case "Order Limit":
                case "Price Traded":
                case "Status":
                case "Fill %":
                  return (0, s.jsx)(d.Z, {
                    title: "Click to sort column",
                    className: m().sort,
                    onClick: () => {
                      t(e, !0);
                    },
                    children: (0, s.jsx)(u.Z, {}),
                  });
                case "Currency Pair":
                  return (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(p.r, { onClick: B(e), fill: n.length > 0 }),
                      (0, s.jsxs)("div", {
                        className: "".concat(m().filterDropdown, " ").concat(l),
                        ref: O,
                        children: [
                          (0, i.f2)(T).map((e, t) =>
                            (0, s.jsx)(
                              o.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold",
                                checked: n.includes(e.label.toUpperCase()),
                                label: e.label,
                                component: e.component,
                                onChange: V,
                              },
                              t
                            )
                          ),
                          (0, s.jsx)(p.B, {
                            onClick: () => x("currency"),
                            className: n.length > 0 ? m().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                case "Product":
                  return (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(p.r, { onClick: B(e), fill: g.length > 0 }),
                      (0, s.jsxs)("div", {
                        className: "".concat(m().filterDropdown, " ").concat(l),
                        ref: R,
                        children: [
                          I.map((e) =>
                            (0, s.jsx)(
                              o.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold nowrap",
                                checked: g.includes(e.toUpperCase()),
                                value: e,
                                label: e,
                                onChange: V,
                              },
                              e
                            )
                          ),
                          (0, s.jsx)(p.B, {
                            onClick: () => x("product"),
                            className: g.length > 0 ? m().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                case "Side":
                  return (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(p.r, { onClick: B(e), fill: N.length > 0 }),
                      (0, s.jsxs)("div", {
                        className: "".concat(m().filterDropdown, " ").concat(l),
                        ref: A,
                        children: [
                          i.Oe.map((e) =>
                            (0, s.jsx)(
                              o.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold",
                                value: e.label,
                                checked: N.includes(e.label.toUpperCase()),
                                label: e.label,
                                component: e.component,
                                onChange: V,
                              },
                              e.label
                            )
                          ),
                          (0, s.jsx)(p.B, {
                            onClick: () => x("side"),
                            className: N.length > 0 ? m().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                case "Strike":
                  return (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(p.r, { onClick: B(e), fill: _.length > 0 }),
                      (0, s.jsxs)("div", {
                        className: "".concat(m().filterDropdown, " ").concat(l),
                        ref: S,
                        children: [
                          P.map((e, t) =>
                            (0, s.jsx)(
                              o.T,
                              {
                                className: "mb-5",
                                labelClassName: "fs-xs-semibold",
                                value: e,
                                checked: _.includes(e),
                                label: e,
                                onChange: V,
                              },
                              t
                            )
                          ),
                          (0, s.jsx)(p.B, {
                            onClick: () => x("strike"),
                            className: _.length > 0 ? m().selected : "",
                          }),
                        ],
                      }),
                    ],
                  });
                default:
                  return null;
              }
            },
            H = (e) => {
              switch (e) {
                case "Cancel All":
                  return (0, s.jsx)(d.Z, {
                    title: "Click to cancel all orders",
                    className: m().cancelAllBtn,
                    onClick: Z,
                    variant: "clear",
                    children: "Cancel All",
                  });
                case "Type":
                  return (0, s.jsxs)(v.Z, {
                    children: [
                      (0, s.jsxs)(C.fC, {
                        children: [
                          (0, s.jsx)(C.xz, {
                            children: (0, s.jsx)("div", {
                              className: "mr-4",
                              children: (0, s.jsx)(w.Z, {}),
                            }),
                          }),
                          (0, s.jsx)(C.VY, {
                            align: "end",
                            alignOffset: 5,
                            children: (0, s.jsxs)("div", {
                              className: m().typePopover,
                              children: [
                                (0, s.jsx)("div", {
                                  className: m().typePopoverUnderline,
                                  children: "Good ‘Til Canceled (GTC)",
                                }),
                                " Order remains active until either the order is filled or the user cancels it.",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { children: "Type" }),
                    ],
                  });
                default:
                  return (0, s.jsxs)(s.Fragment, { children: [e, U(e)] });
              }
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, h.y6)(b).map((e) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: m().cell,
                    style: { ...e.style },
                    children:
                      ("Cancel All" === e.name || "Details" === e.name) && M
                        ? null
                        : H(e.name),
                  },
                  e.name
                )
              ),
              (0, s.jsx)(j.Z, { className: "!tw-col-span-full tw-w-full" }),
            ],
          });
        };
      },
      48741: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return O;
          },
        });
        var s,
          l = n(85893),
          i = n(93967),
          r = n.n(i),
          a = () =>
            (0, l.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("circle", {
                  cx: "12",
                  cy: "12",
                  r: "9",
                  stroke: "#FF3F57",
                  strokeWidth: "1.2",
                }),
                (0, l.jsx)("path", {
                  d: "M9 15L15 9",
                  stroke: "#FF3F57",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                }),
                (0, l.jsx)("path", {
                  d: "M15 15L9 9",
                  stroke: "#FF3F57",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                }),
              ],
            }),
          c = n(37422),
          d = n(80362),
          o = n(3298),
          u = n(55506),
          x = n(51182),
          m = n(77768),
          h = n.n(m),
          j = n(62582),
          p = n(90639),
          C = n(23870),
          v = n(57345),
          w = n(67294);
        function f() {
          return (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var s in n)
                    ({}.hasOwnProperty.call(n, s) && (e[s] = n[s]));
                }
                return e;
              }).apply(null, arguments);
        }
        var g = function (e) {
            return w.createElement(
              "svg",
              f(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 23,
                  height: 21,
                  fill: "none",
                },
                e
              ),
              s ||
                (s = w.createElement("path", {
                  d: "M1 0v16.016a3.043 3.043 0 0 0 3.034 3.05H23M4.793 12.204l6.07-6.102 3.792 3.814 7.586-6.864",
                }))
            );
          },
          N = n(20847),
          y = n(13090),
          L = n(40838),
          k = n(47236),
          b = n(59731),
          Z = n(14052),
          _ = n(45323),
          E = n(45338),
          P = n(25811),
          I = n(69824),
          F = n(64088),
          D = n(30202),
          M = n(67930),
          T = (e) => {
            let { row: t, closePopover: n } = e,
              { showToast: s, showOrderErrorToast: i } = (0, k.Z)(),
              r = (0, D.NL)(),
              [a, c] = (0, w.useState)("".concat(t.orderLimit)),
              [d, o] = (0, w.useState)(),
              { ithacaSDK: u, currencyPrecision: x } = (0, b.qr)(),
              m = Number(a) > 0,
              h = async () => {
                if (!t || !t.expandedInfo) return;
                let e = t.expandedInfo.map((e) => ({
                    contractId: e.contractId,
                    quantity: "".concat(e.size),
                    side: e.side,
                  })),
                  n = Number(a),
                  s = {
                    clientOrderId: (0, F.createClientOrderId)(),
                    totalNetPrice: "".concat(n.toFixed(x.strike)),
                    legs: e,
                  },
                  [l, i] = await Promise.all([
                    u.calculation.estimateOrderLockPositioned(s),
                    u.calculation.estimateOrderFeesExtended(s),
                  ]);
                o({
                  order: s,
                  orderLock: l,
                  orderFees: i.estimation,
                  orderFeesLocked: i.toBeLocked,
                });
              };
            (0, w.useEffect)(() => {
              h();
            }, [a]);
            let j = async (e) => {
                let t = 0 > Number(e) ? "-" : "";
                c("".concat(t).concat((0, E.Dg)(e)));
              },
              p = () => {
                r.refetchQueries({ queryKey: [M.Rq], exact: !1, type: "all" });
              },
              C = async () => {
                if (d)
                  try {
                    await u.orders.newOrder(d.order, t.product),
                      await u.orders.orderCancel(t.clientOrderId),
                      p(),
                      null == n || n(),
                      s({
                        title: "Order updated",
                        message: "Order received & submitted into the auction",
                      });
                  } catch (e) {
                    i(null == e ? void 0 : e.message);
                  } finally {
                    o(void 0);
                  }
              },
              v = (0, w.useMemo)(
                () =>
                  m
                    ? (0, l.jsx)("span", {
                        className: "tw-ml-1 tw-text-ithaca-red-20",
                        children: "(Pay)",
                      })
                    : (0, l.jsx)("span", {
                        className: "tw-ml-1 tw-text-ithaca-green-30",
                        children: "(Receive)",
                      }),
                [t, m]
              );
            return (0, l.jsxs)("div", {
              className: "tw-min-h-[130px] tw-w-[200px]",
              children: [
                (0, l.jsx)(Z.Z, {
                  label: (0, l.jsxs)("span", {
                    children: ["New order limit ", v],
                  }),
                  children: (0, l.jsx)(_.Z, {
                    className: "tw-mb-5 tw-w-full",
                    isLoading: !1,
                    type: "number",
                    value: a,
                    onChange: (e) => {
                      let { target: t } = e;
                      return j(t.value);
                    },
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "tw-relative",
                  children: (0, l.jsx)(I.Z, {
                    children: (e) => {
                      let {
                        connected: n,
                        openConnectModal: s,
                        openAccountModal: i,
                      } = e;
                      return (0, l.jsx)(P.Z, {
                        withTutorial: !1,
                        additionalFundsUSDC:
                          t.orderLimit > 0 ? t.orderLimit : 0,
                        title: "Update Price",
                        isSubmitButtonDisabled: !Number(a),
                        onlyProtiftableOrders: !1,
                        submitAuction: C,
                        openConnectModal: s,
                        openAccountModal: i,
                        connected: n,
                        orderSummary: d,
                      });
                    },
                  }),
                }),
              ],
            });
          },
          A = n(70757),
          O = (e) => {
            let {
                handleOpenPayoffDiagram: t,
                type: n,
                row: s,
                cancelOrder: i,
                handleCancelOrderClick: m,
                rowIndex: f,
                handleRowExpand: k,
                expandedRow: b,
                isPreview: Z,
              } = e,
              _ = (0, d.Z)(o.Mu),
              E = (0, w.useMemo)(() => {
                if (!Z)
                  return (0, l.jsx)("div", {
                    className: h().cellContent,
                    children: s.currencyPair,
                  });
                {
                  let e = s.currencyPair.split("/");
                  return (0, l.jsxs)("div", {
                    className: h().cellContent,
                    children: [
                      (0, l.jsx)("span", { children: (0, A.XX)(e[0]) }),
                      "\xa0/\xa0",
                      (0, l.jsx)("span", { children: (0, A.XX)(e[1]) }),
                    ],
                  });
                }
              }, [s, Z]);
            return (0, l.jsxs)(l.Fragment, {
              children: [
                f > 0 && (0, l.jsx)(C.Z, {}),
                (0, l.jsxs)("div", {
                  onKeyDown: () => k(f),
                  onClick: () => k(f),
                  className: r()(h().cell, "tw-p-2.5"),
                  children: [
                    (0, l.jsx)(c.Z, {
                      title: "Click to expand dropdown",
                      className: ""
                        .concat(h().dropdown, " ")
                        .concat(b.includes(f) ? h().isActive : ""),
                      children: (0, l.jsx)(v.Z, {}),
                    }),
                    i &&
                      _ &&
                      (0, l.jsx)(c.Z, {
                        title: "Click to cancel order",
                        className: r()(h().delete, "tw-size-5"),
                        onClick: () => (null == m ? void 0 : m(f)),
                        children: (0, l.jsx)(a, {}),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: h().cellContent,
                  children: s.orderDate,
                }),
                (0, l.jsx)("div", {
                  className: h().cellContent,
                  children: (0, l.jsx)("div", {
                    className: h().currency,
                    children: E,
                  }),
                }),
                (0, l.jsx)("div", {
                  className: h().cellContent,
                  children: (0, l.jsx)("p", {
                    className: "tw-truncate",
                    children: s.product,
                  }),
                }),
                (0, l.jsx)("div", {
                  className: r()(h().cellContent, "tw-items-center", {
                    "tw-justify-center": !Z,
                  }),
                  children: (0, y.U)(s.side),
                }),
                (0, l.jsxs)("div", {
                  className: r()(
                    h().cellContent,
                    "tw-flex tw-flex-col !tw-items-start tw-justify-center"
                  ),
                  children: [
                    (0, l.jsx)("p", {
                      children: s.strikeGroup.slice(0, 2).join(" | "),
                    }),
                    (0, l.jsx)("p", {
                      children: s.strikeGroup.slice(2, 4).join(" | "),
                    }),
                    (0, l.jsx)("p", {
                      children: s.strikeGroup.slice(4, 6).join(" | "),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: r()(
                    h().cellContent,
                    "tw-flex tw-flex-col !tw-items-end tw-justify-center tw-pr-2"
                  ),
                  children: [
                    (0, l.jsx)("p", {
                      children: s.expiryGroup.slice(0, 2).join(" | "),
                    }),
                    (0, l.jsx)("p", {
                      children: s.expiryGroup.slice(2, 4).join(" | "),
                    }),
                    (0, l.jsx)("p", {
                      children: s.expiryGroup.slice(4, 6).join(" | "),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: r()(h().cellContent, "tw-justify-end tw-text-xs"),
                  children: (0, l.jsx)(u.Z, {
                    wethAmount: s.wethAmount,
                    usdcAmount: s.usdcAmount,
                    isPreview: Z,
                  }),
                }),
                n === p.vj.HISTORY &&
                  (0, l.jsx)("div", {
                    className: r()(h().cellContent, "tw-justify-end"),
                    children: s.modelPrice ? s.modelPrice.toFixed(3) : "-",
                  }),
                (0, l.jsxs)("div", {
                  className: r()(
                    h().cellContent,
                    "!tw-items-end tw-justify-end tw-pr-2"
                  ),
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "tw-flex tw-flex-[0.4] tw-items-end tw-justify-end",
                      children: (0, l.jsx)(L.Z, {
                        openOnClick: !0,
                        title: (0, l.jsx)(x.Z, {
                          className:
                            "tw-mb-2 tw-size-5 tw-text-ithaca-white-80",
                        }),
                        children: (0, l.jsx)(T, { row: s }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "tw-flex tw-flex-[0.6] tw-items-end tw-justify-end",
                      children: (0, l.jsx)(N.Z, {
                        labelClassName: "!tw-text-xs",
                        className: "!tw-items-end",
                        value: s.orderLimit,
                      }),
                    }),
                  ],
                }),
                n === p.vj.HISTORY &&
                  (0, l.jsx)("div", {
                    className: r()(h().cellContent, "tw-justify-end"),
                    children: (0, l.jsx)("button", {
                      title: "Show Payoff Diagram",
                      className:
                        "tw-cursor-pointer tw-stroke-ithaca-white-60 hover:tw-stroke-white",
                      onClick: () => (null == t ? void 0 : t(s)),
                      children: (0, l.jsx)(g, {}),
                    }),
                  }),
                (n === p.vj.LIVE || n === p.vj.PREVIEW_LIVE) &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: r()(
                          h().cellContent,
                          "tw-justify-center tw-text-end"
                        ),
                        children: (0, j.eX)(s.timeInForce),
                      }),
                      (0, l.jsx)("div", {
                        className: r()(h().cellContent, "!tw-text-sm", {
                          "tw-justify-end tw-text-end": Z,
                          "tw-px-2": !Z,
                        }),
                        children: (0, j.NE)(s.orderStatus),
                      }),
                    ],
                  }),
                (n === p.vj.LIVE || n === p.vj.PREVIEW_LIVE) &&
                  (0, l.jsxs)("div", {
                    className: h().cellContent,
                    style: { justifyContent: "center" },
                    children: [s.fill.toFixed(2), "%"],
                  }),
                (0, l.jsx)("div", {
                  className: r()(h().cellContent, "tw-justify-end tw-pr-2"),
                  children:
                    !_ &&
                    i &&
                    (0, l.jsx)(c.Z, {
                      title: "Click to cancel order",
                      className: h().delete,
                      onClick: () => (null == m ? void 0 : m(f)),
                      children: (0, l.jsx)(a, {}),
                    }),
                }),
              ],
            });
          };
      },
      87214: function (e, t, n) {
        "use strict";
        var s = n(85893),
          l = n(51526),
          i = n(43495),
          r = n(10066),
          a = n(77768),
          c = n.n(a),
          d = n(90639);
        let o = (e) => {
          switch (e) {
            case d.vj.LIVE:
              return c().gridContainerTableLiveOrders;
            case d.vj.PREVIEW_LIVE:
              return c().gridContainerTableLivePreviewOrders;
            case d.vj.SETTLEMENTS:
              return c().gridContainerTableSettlements;
            case d.vj.HISTORY:
              return c().gridContainerTableHistory;
            default:
              return c().gridContainerTable;
          }
        };
        t.Z = (e) => {
          let { isRowExpanded: t, type: n, children: a } = e;
          return (0, s.jsx)(l.M, {
            children:
              t &&
              (0, s.jsx)(i.E.div, {
                className: c().tableRowExpanded,
                initial: "closed",
                animate: "open",
                exit: "closed",
                variants: r.oW,
                children: (0, s.jsx)("div", {
                  className: c().tableExpanderContainer,
                  children: (0, s.jsx)("div", { className: o(n), children: a }),
                }),
              }),
          });
        };
      },
      23870: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var s = n(85893),
          l = n(77768),
          i = n.n(l);
        let r = (e) => {
          let { className: t } = e;
          return (0, s.jsx)("div", {
            className: "".concat(i().separator, " ").concat(t),
            style: { marginTop: 4, marginBottom: 7 },
          });
        };
      },
      18572: function (e, t, n) {
        "use strict";
        n.d(t, {
          y: function () {
            return m;
          },
        });
        var s = n(85893),
          l = n(61920),
          i = n(65559),
          r = n(77768),
          a = n.n(r),
          c = n(65440),
          d = n(85292),
          o = n(46449),
          u = n(93967),
          x = n.n(u);
        let m = (e) => {
          let {
            displayIsLoading: t,
            displayNoResults: n,
            isAuthenticated: r,
            totalItems: u,
            currentPage: m,
            handlePageChange: h,
            pageLimit: j,
          } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              t &&
                (0, s.jsx)(d.Z, {
                  size: "loader",
                  className: "ptb-150",
                  children: (0, s.jsx)(c.Z, { type: "lg" }),
                }),
              n &&
                (0, s.jsx)("p", {
                  className: a().emptyTable,
                  children: "No results found",
                }),
              !r &&
                (0, s.jsx)(d.Z, {
                  size: "loader",
                  className: "ptb-150",
                  children: (0, s.jsx)(l.Z, { showButton: !1 }),
                }),
              (0, s.jsx)("div", {
                className: x()("tw-mt-4 tw-flex", { "tw-justify-end": !j }),
                children: (0, s.jsx)(i.Z, {
                  totalItems: u,
                  itemsPerPage: j || o.pg,
                  currentPage: m,
                  onPageChange: h,
                }),
              }),
            ],
          });
        };
      },
      71367: function (e, t, n) {
        "use strict";
        n.d(t, {
          B: function () {
            return d;
          },
          r: function () {
            return c;
          },
        });
        var s = n(85893),
          l = n(37422),
          i = n(89391),
          r = n(77768),
          a = n.n(r);
        let c = (e) => {
            let { fill: t, onClick: n } = e;
            return (0, s.jsx)(l.Z, {
              title: "Click to view filter options",
              className: a().filter,
              onClick: n,
              children: (0, s.jsx)(i.Z, { fill: t }),
            });
          },
          d = (e) => {
            let { className: t, onClick: n } = e;
            return (0, s.jsx)(l.Z, {
              title: "Click to clear filter options",
              className: "".concat(a().clearAll, " ").concat(t),
              onClick: n,
              children: "Clear All",
            });
          };
      },
      46449: function (e, t, n) {
        "use strict";
        n.d(t, {
          KP: function () {
            return i;
          },
          pg: function () {
            return l;
          },
        });
        var s = n(67294);
        let l = 9,
          i = 6;
        t.ZP = (e) => {
          let [t, n] = (0, s.useState)(1),
            i = e || l,
            r = (t - 1) * i;
          return {
            currentPage: t,
            handlePageChange: (e) => {
              n(e);
            },
            pageStart: r,
            pageEnd: r + i,
          };
        };
      },
      13090: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return a;
          },
        });
        var s = n(85893),
          l = n(108),
          i = n(5716),
          r = () =>
            (0, s.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  d: "M7 13.2L7 16.8C7 17.4627 7.53726 18 8.2 18L11.8 18",
                  stroke: "white",
                  strokeOpacity: "0.2",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M19 10.8L19 7.2C19 6.53726 18.4627 6 17.8 6L14.2 6",
                  stroke: "white",
                  strokeOpacity: "0.2",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 3C7.5 2.72386 7.27614 2.5 7 2.5C6.72386 2.5 6.5 2.72386 6.5 3L6.5 5.5L4 5.5C3.72386 5.5 3.5 5.72386 3.5 6C3.5 6.27614 3.72386 6.5 4 6.5L6.5 6.5L6.5 9C6.5 9.27614 6.72386 9.5 7 9.5C7.27614 9.5 7.5 9.27614 7.5 9V6.5L10 6.5C10.2761 6.5 10.5 6.27614 10.5 6C10.5 5.72386 10.2761 5.5 10 5.5L7.5 5.5V3Z",
                  fill: "#4BB475",
                }),
                (0, s.jsx)("path", {
                  d: "M20.7969 18L15.9969 18",
                  stroke: "#FF3F57",
                  strokeLinecap: "round",
                }),
              ],
            });
        let a = (e) =>
          "+" === e || "BUY" === e
            ? (0, s.jsx)(i.Z, {})
            : "-" === e || "SELL" === e
            ? (0, s.jsx)(l.Z, {})
            : "" === e
            ? (0, s.jsx)(r, {})
            : "";
      },
      62790: function (e) {
        e.exports = {
          container: "CollateralAmount_container__VdGP0",
          currency: "CollateralAmount_currency__Q_2AP",
          amount: "CollateralAmount_amount__WZ_VH",
        };
      },
      71665: function (e) {
        e.exports = {
          container: "LabeledControl_container__grxaX",
          labelHidden: "LabeledControl_labelHidden__AWeQv",
        };
      },
      7235: function (e) {
        e.exports = {
          pagination: "Pagination_pagination__x05XU",
          navigationItem: "Pagination_navigationItem__FjrLC",
          active: "Pagination_active__SeQyo",
          nextItem: "Pagination_nextItem__dm87y",
          ellipsis: "Pagination_ellipsis__Sg9Es",
        };
      },
    },
  ]);
