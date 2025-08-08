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
      (e._sentryDebugIds[t] = "69f3d3b7-41b4-4a21-87f7-3575ad569820"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-69f3d3b7-41b4-4a21-87f7-3575ad569820"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8334],
    {
      40838: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return x;
          },
        });
        var a = r(85893),
          n = r(67294),
          i = r(80052),
          l = r(93967),
          s = r.n(l),
          o = r(15922),
          c = r(37422),
          d = r(67253),
          u = r(24514),
          f = r(86322),
          w = r(45303),
          m = r.n(w),
          p = (e) => {
            let {
                children: t,
                isOpen: r,
                side: i,
                align: l,
                offset: o,
                footer: w,
                currentStep: p,
                continueClick: h,
                skipClick: x,
              } = e,
              [g, y] = (0, n.useState)(r);
            return ((0, n.useEffect)(() => {
              y(r);
            }, [r]),
            p)
              ? (0, a.jsxs)(f.fC, {
                  open: g,
                  children: [
                    (0, a.jsx)(f.xz, {
                      asChild: !0,
                      children: (0, a.jsx)("div", { children: t }),
                    }),
                    (0, a.jsx)(f.VY, {
                      align: l,
                      side: i,
                      className: "".concat(
                        m().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: o,
                      children: (0, a.jsxs)(a.Fragment, {
                        children: [
                          d.R[p].title &&
                            (0, a.jsx)("div", {
                              className: s()(m().title, "tw-mb-1"),
                              children: d.R[p].title,
                            }),
                          (0, a.jsx)("div", {
                            className: m().message,
                            children: d.R[p].message,
                          }),
                          w ||
                            (0, a.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, a.jsx)("div", { className: "flexGrow" }),
                                (0, a.jsx)("div", {
                                  className: m().skipButton,
                                  onClick: x,
                                  children: "Skip",
                                }),
                                (0, a.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: h,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, a.jsx)(f.Eh, { className: m().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, a.jsx)(a.Fragment, {});
          };
        let h = (0, n.forwardRef)((e, t) => {
          let {
              title: r,
              children: l,
              className: c,
              panelClassName: d,
              openOnClick: u = !1,
              leaveTimeout: f = 120,
              ...w
            } = e,
            m = (0, n.useRef)(null),
            h = t || m,
            x = (0, n.useRef)(null),
            g = (0, o.F)(),
            y = (0, n.useCallback)(
              (e) => {
                var t;
                u ||
                  (x.current && clearTimeout(x.current),
                  e || null === (t = h.current) || void 0 === t || t.click());
              },
              [u]
            ),
            v = (0, n.useCallback)(
              function (e, t) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || r) &&
                  (x.current && clearTimeout(x.current),
                  (x.current = window.setTimeout(() => {
                    e && t();
                  }, f)));
              },
              [u, f]
            );
          (0, n.useEffect)(
            () => () => {
              x.current && clearTimeout(x.current);
            },
            []
          );
          let j = (e, t) =>
            (0, a.jsxs)("div", {
              onMouseEnter: () => y(e),
              onMouseLeave: () => v(e, t),
              children: [
                (0, a.jsx)(i.O7, {
                  ref: h,
                  className: "tw-flex tw-outline-none",
                  children: r,
                }),
                (0, a.jsx)(i.Hi, {
                  anchor: "bottom",
                  className: s()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === g },
                    d
                  ),
                  children: n.cloneElement(l, {
                    closePopover: () => {
                      x.current && clearTimeout(x.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, a.jsx)(i.J2, {
            className: s()("tw-relative", c),
            children: (e) => {
              let { open: t, close: r } = e,
                n = j(t, r);
              if (w.isTutorialOpen) {
                var i, l;
                return (0, a.jsx)(p, {
                  skipClick:
                    null !== (i = w.handleSkipTutorialClick) && void 0 !== i
                      ? i
                      : () => {},
                  continueClick:
                    null !== (l = w.handleContinueTutorialClick) && void 0 !== l
                      ? l
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: n,
                });
              }
              return n;
            },
          });
        });
        h.displayName = "HoverPopover";
        var x = h;
      },
      92715: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return m;
          },
        });
        var a = r(85893),
          n = r(67294),
          i = r(15922),
          l = r(18776);
        let s = (e) => {
            if (!e) return "";
            let t = e.getDate(),
              r = new Intl.DateTimeFormat("en", { month: "short" }).format(e),
              n = e.getFullYear() % 100;
            return (0, a.jsxs)(a.Fragment, { children: [t, r, n] });
          },
          o = {
            cell: "tw-size-8 tw-p-0",
            caption:
              "tw-flex tw-justify-center tw-items-center tw-mb-2 tw-font-semibold",
            caption_label: "tw-text-sm tw-text-white",
            day: "tw-size-8 tw-relative tw-flex tw-items-center tw-justify-center",
            day_range_middle: "tw-bg-ithaca-green-10",
            day_range_start:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tl-full tw-rounded-bl-full",
            day_range_end:
              "tw-relative tw-bg-ithaca-green-10 after:tw-rounded-full tw-text-white after:tw-absolute after:tw-size-full after:tw-bg-ithaca-green-20 after:-tw-z-10 tw-isolate tw-font-semibold tw-rounded-tr-full tw-rounded-br-full",
            head_cell: "tw-text-white tw-font-normal tw-h-10",
            months:
              "tw-flex tw-divide-x tw-divide-ithaca-green-10/50 tw-relative",
            nav: "tw-flex tw-gap-4",
            nav_button_previous: "tw-absolute tw-left-0 tw-top-0",
            nav_button_next: "tw-absolute tw-right-0 tw-top-0",
            row: "tw-m-0",
            table: "tw-border-collapse",
          };
        var c = () =>
            (0, a.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("rect", {
                  width: "16",
                  height: "16",
                  rx: "4",
                  fill: "#35333E",
                }),
                (0, a.jsx)("path", {
                  d: "M3 6C3 5.22037 3 4.83056 3.17882 4.54596C3.27207 4.39756 3.39756 4.27207 3.54596 4.17882C3.83056 4 4.22037 4 5 4H11C11.7796 4 12.1694 4 12.454 4.17882C12.6024 4.27207 12.7279 4.39756 12.8212 4.54596C13 4.83056 13 5.22037 13 6V6H3V6Z",
                  stroke: "white",
                }),
                (0, a.jsx)("rect", {
                  x: "3",
                  y: "4",
                  width: "10",
                  height: "8",
                  rx: "1.16667",
                  stroke: "white",
                }),
                (0, a.jsx)("path", {
                  d: "M6 3L6 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M10 3L10 4",
                  stroke: "white",
                  strokeLinecap: "round",
                }),
              ],
            }),
          d = r(95769),
          u = r(86322),
          f = r(74398),
          w = r.n(f),
          m = (e) => {
            let {
                minSelected: t,
                maxSelected: r,
                start: f,
                end: m,
                disabled: p = !1,
                handleSelect: h,
              } = e,
              x = (0, i.F)(),
              g = { from: f, to: m },
              [y, v] = (0, n.useState)(g),
              j = (0, n.useMemo)(
                () =>
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", {
                        children: s(null == y ? void 0 : y.from),
                      }),
                      " - ",
                      (0, a.jsx)("span", {
                        children: s(null == y ? void 0 : y.to),
                      }),
                    ],
                  }),
                [y]
              );
            return (0, a.jsxs)(u.J2, {
              children: [
                (0, a.jsxs)(u.xo, {
                  disabled: p,
                  className: w().dateRangePickerContainer,
                  children: [
                    (0, a.jsx)("span", {
                      className: "".concat(w().dateInput, " *:tw-text-sm"),
                      children: j,
                    }),
                    (0, a.jsx)(c, {}),
                  ],
                }),
                (0, a.jsx)(u.i9, {
                  children: (0, a.jsxs)(u.yk, {
                    align: "start",
                    sideOffset: 4,
                    className: w().dateBlock,
                    children: [
                      (0, a.jsx)("div", {
                        className: w().dateRangeContainer,
                        children: (0, a.jsx)("div", {
                          className: w().subContainer,
                          children: (0, a.jsx)(d._W, {
                            mode: "range",
                            formatters: {
                              formatWeekdayName: (e) => (0, l.Z)(e, "EEE"),
                            },
                            min: t,
                            max: r,
                            numberOfMonths: "desktop" == x ? 2 : 1,
                            className: "".concat(w().datePicker),
                            defaultMonth: null == y ? void 0 : y.from,
                            selected: y,
                            onSelect: (e) => v(null != e ? e : g),
                            classNames: o,
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: w().buttonContainer,
                        children: [
                          (0, a.jsx)(u.xp, {
                            className: w().cancelButton,
                            onClick: () => {
                              v(g);
                            },
                            children: "Cancel",
                          }),
                          (0, a.jsx)(u.xp, {
                            className: w().applyButton,
                            onClick: () => {
                              y && (null == h || h(y));
                            },
                            children: "Apply",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          };
      },
      60857: function (e, t, r) {
        "use strict";
        var a = r(85893);
        r(67294),
          (t.Z = function (e) {
            return (0, a.jsxs)("svg", {
              ...e,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M12.9525 9.50391V11.651C12.9525 12.2506 12.4536 12.7384 11.8401 12.7384H4.25333C3.64 12.7384 3.14093 12.2506 3.14093 11.651V9.50391H2V11.651C2 12.8656 3.0108 13.8539 4.2532 13.8539H11.84C13.0824 13.8539 14.0932 12.8656 14.0932 11.651V9.50391H12.9523H12.9525Z",
                  fill: "white",
                }),
                (0, a.jsx)("path", {
                  d: "M7.57866 12.0171C7.69306 12.13 7.84599 12.1926 8.00932 12.1934H8.01226C8.17439 12.1934 8.32679 12.1322 8.44172 12.021L11.7516 8.81511C11.8672 8.70324 11.9312 8.55364 11.932 8.39417C11.9328 8.23457 11.8701 8.08444 11.7557 7.97151L11.6605 7.87751C11.546 7.76457 11.3931 7.70204 11.2299 7.70124H11.2272C11.0651 7.70124 10.9125 7.76244 10.7977 7.87377L8.78866 9.81964V3.00684C8.78866 2.59164 8.44319 2.25391 8.01852 2.25391C7.59386 2.25391 7.24839 2.59164 7.24839 3.00684V9.80737L5.26466 7.84991C5.15026 7.73697 4.99732 7.67444 4.83399 7.67377H4.83119C4.66906 7.67377 4.51652 7.73497 4.40172 7.84617L4.30546 7.93937C4.06639 8.17097 4.06466 8.54937 4.30146 8.78311L7.57892 12.0174L7.57866 12.0171Z",
                  fill: "white",
                }),
              ],
            });
          });
      },
      69737: function (e, t, r) {
        "use strict";
        var a = r(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "10",
            height: "2",
            viewBox: "0 0 10 2",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M9 1L1 1",
              stroke: "white",
              strokeWidth: "1.2",
              strokeLinecap: "round",
            }),
          });
      },
      4359: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return f;
          },
        });
        var a = r(85893),
          n = r(90639),
          i = r(24620),
          l = r(18182),
          s = r(9305);
        let o = (e) =>
            (null == e ? void 0 : e.length)
              ? e.map((e) => ({
                  leg: {
                    contractId: 0,
                    quantity: "".concat(e.size),
                    side: e.side,
                  },
                  referencePrice: e.averageExecutionPrice || 0,
                  payoff: e.type,
                  strike: "".concat(e.strike),
                }))
              : [],
          c = (e, t) =>
            (null == e ? void 0 : e.length)
              ? null == e
                ? void 0
                : e.map((e) => ({
                    contractId: 0,
                    quantity: "".concat(e.size),
                    side: e.side,
                    premium: e.averageExecutionPrice || 0,
                    payoff: e.type,
                    economics: { strike: e.strike || 0, expiry: t },
                  }))
              : [];
        var d = r(58217),
          u = r(59731),
          f = (e) => {
            let { data: t, tableType: r, showProfitLoss: f = !1 } = e,
              { currentExpiryDate: w } = (0, u.qr)();
            if (!t) return null;
            let m = o(t),
              p = c(t, w),
              h = r === n.vj.HISTORY ? (0, l.s)(p) : [];
            return (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("h3", { className: "mb-13", children: "Strategy" }),
                m &&
                  (0, a.jsx)(i.Z, {
                    headers: r === n.vj.HISTORY ? d.$1 : d.TI,
                    showStrike: r === n.vj.HISTORY,
                    hideClear: !0,
                    strategies: m,
                  }),
                h &&
                  r === n.vj.HISTORY &&
                  (0, a.jsx)(s.Z, {
                    showProfitLoss: f,
                    chartData: h,
                    height: 210,
                    id: "dynamic-chart",
                  }),
              ],
            });
          };
      },
      6316: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            MAX_DAYS_SELECTED: function () {
              return Y;
            },
            MIN_DAYS_SELECTED: function () {
              return z;
            },
            default: function () {
              return q;
            },
          });
        var a = r(85893),
          n = r(67294),
          i = r(47236),
          l = r(46449),
          s = r(32010),
          o = r(12002),
          c = r(59731),
          d = r(15394),
          u = r(47054),
          f = r(48741),
          w = r(87214),
          m = r(45686),
          p = (e) => {
            let { data: t, showList: r, type: i, onOpenPayoffDiagram: l } = e,
              [s, o] = (0, n.useState)([]),
              c = (e, t) => {
                t ? o((t) => t.filter((t) => t !== e)) : o((t) => [...t, e]);
              };
            return r
              ? (0, a.jsx)(a.Fragment, {
                  children: t.map((e, t) => {
                    let r = s.includes(t);
                    return (0, a.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          (0, a.jsx)(f.Z, {
                            rowIndex: t,
                            row: e,
                            handleOpenPayoffDiagram: l,
                            handleRowExpand: () => c(t, r),
                            expandedRow: s,
                            type: i,
                          }),
                          (0, a.jsx)(w.Z, {
                            isRowExpanded: r,
                            type: i,
                            children: (0, a.jsx)(m.Z, {
                              data: e.expandedInfo || [],
                              type: i,
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                })
              : null;
          },
          h = r(92715),
          x = r(88144),
          g = r(27484),
          y = r.n(g),
          v = r(64740),
          j = r(45343),
          _ = r(18666),
          b = (e) => {
            let { range: t, enableQuery: r = !0 } = e,
              a = (0, c.qr)((e) => e.ithacaSDK),
              {
                data: n,
                isPending: i,
                error: l,
              } = (0, x.a)({
                queryKey: ["trade-report", t, r],
                enabled: r,
                queryFn: async () =>
                  (
                    await a.client.tradeHistory(
                      (0, v.Z)(t.from).getTime(),
                      (0, j.Z)(t.to).getTime(),
                      0,
                      999
                    )
                  ).reduce((e, t) => {
                    if (
                      "FILLED" !== t.orderStatus &&
                      "PARTIALLY_FILLED" !== t.orderStatus
                    )
                      return e;
                    let r = t.details.reduce((e, t, r) => {
                        var a;
                        return (
                          (e["leg".concat(r + 1, "ContractId")] = t.contractId),
                          (e["leg".concat(r + 1, "Payoff")] =
                            t.contractDto.payoff),
                          (e["leg".concat(r + 1, "Strike")] =
                            t.contractDto.economics.strike || ""),
                          (e["leg".concat(r + 1, "Side")] = t.side),
                          (e["leg".concat(r + 1, "FilledQty")] =
                            t.originalQty - t.remainingQty),
                          (e["leg".concat(r + 1, "Expiry")] = (0, _.p6)(
                            t.expiry.toString(),
                            _.Nn,
                            _.KJ
                          )),
                          (e["leg".concat(r + 1, "ExecPrice")] =
                            null !== (a = null == t ? void 0 : t.execPrice) &&
                            void 0 !== a
                              ? a
                              : ""),
                          e
                        );
                      }, {}),
                      a = {
                        orderId: t.orderId,
                        orderStatus: t.orderStatus,
                        netPrice: t.netPrice,
                        orderDate: y()(t.revDate).format("DDMMMYY HH:mm"),
                        orderDescr: t.orderDescr,
                        currencyPair: t.collateral.currencyPair,
                        underlyingCollateral: t.collateral.underlierAmount,
                        numeraireColalteral: t.collateral.numeraireAmount,
                        ...r,
                      };
                    return e.push(a), e;
                  }, []),
              });
            return {
              tradeReport: n,
              isProcessingTradeReport: i,
              tradeReportError: l,
            };
          },
          C = r(60857),
          k = r(55261);
        let S = {
          title: "Failed to Download",
          message: "Try selecting a shorter date range.",
        };
        var P = (e) => {
            let { range: t } = e,
              {
                tradeReport: r,
                isProcessingTradeReport: l,
                tradeReportError: s,
              } = b({ range: t }),
              { showErrorToast: o } = (0, i.Z)();
            return (
              (0, n.useEffect)(() => {
                s && !l && o(S);
              }, [s, o, l]),
              (0, a.jsxs)(k.Z, {
                disabled: l,
                filename: "trade_history_"
                  .concat(y()(t.from).format("DD-MM-YY"), "_")
                  .concat(y()(t.to).format("DD-MM-YY")),
                className:
                  "tw-relative tw-flex tw-min-h-[30px] tw-cursor-pointer tw-items-center tw-justify-center tw-gap-1 tw-rounded-full tw-bg-[#3C8D60] tw-px-4 tw-py-2 tw-font-roboto tw-text-xs tw-font-semibold tw-text-white",
                datas: r,
                handleError: () => o(S),
                children: [
                  (0, a.jsx)("span", {
                    className: "tw-hidden sm:tw-inline",
                    children: "Download Trade History",
                  }),
                  (0, a.jsx)(C.Z, {
                    width: 20,
                    height: 20,
                    "aria-label": "Download Trade History",
                  }),
                ],
              })
            );
          },
          N = r(18572),
          D = r(46656),
          T = r(37422),
          Z = r(4359),
          I = (e) => {
            let { isOpen: t, closePayoffModal: r, type: n, data: i } = e;
            return (0, a.jsx)(D.default, {
              isOpen: t,
              onCloseModal: r,
              title: (0, a.jsxs)(a.Fragment, {
                children: [
                  "Position Summary ",
                  (0, a.jsx)("span", {
                    className: "tw-ml-2 tw-text-xs tw-text-ithaca-white-60",
                    children: null == i ? void 0 : i.orderDate,
                  }),
                ],
              }),
              children: (0, a.jsxs)("div", {
                className: "tw-flex tw-flex-col tw-gap-5",
                children: [
                  i &&
                    (0, a.jsx)(Z.Z, {
                      showProfitLoss: !0,
                      tableType: n,
                      data: i.expandedInfo,
                    }),
                  (0, a.jsx)(T.Z, {
                    title: "close",
                    className: "mt-10",
                    onClick: r,
                    children: "Close",
                  }),
                ],
              }),
            });
          },
          A = r(10066),
          E = r(93967),
          L = r.n(E),
          F = r(62582),
          R = r(77768),
          O = r.n(R),
          H = r(90639),
          M = r(73935);
        let Y = 30,
          z = 2,
          B = { from: (0, d.Z)(new Date(), 7), to: new Date() },
          U = {
            title: "Failed to Download",
            message: "Try selecting a shorter date range.",
          };
        var q = (e) => {
          let { agentId: t } = e,
            { showErrorToast: r } = (0, i.Z)(),
            {
              currentPage: d,
              handlePageChange: f,
              pageStart: w,
              pageEnd: m,
            } = (0, l.ZP)(),
            [x, g] = (0, c.qr)(
              (0, s.N)((e) => [e.isAuthenticated, e.expiryList])
            ),
            [y, v] = (0, n.useState)(B),
            [j, _] = (0, n.useState)(null),
            [b, C] = (0, n.useState)(!1),
            [k, S] = (0, n.useState)(""),
            [D, T] = (0, n.useState)(!0),
            [Z, E] = (0, n.useState)([]),
            [R, q] = (0, n.useState)([]),
            [V, Q] = (0, n.useState)([]),
            [K, W] = (0, n.useState)([]),
            G = (0, n.useMemo)(() => !!t || x, [t, x]),
            $ = (0, n.useMemo)(() => {
              var e, t;
              return {
                from: null !== (e = y.from) && void 0 !== e ? e : B.from,
                to: null !== (t = y.to) && void 0 !== t ? t : B.to,
              };
            }, [y]),
            {
              data: J = [],
              isLoading: X,
              error: ee,
            } = (0, o.rg)({
              enableQuery: G,
              range: $,
              expiryList: g,
              agentId: t,
            }),
            { totalItemsAmount: et, slicedData: er } = (0, n.useMemo)(() => {
              let e = (0, A.em)(J, R);
              switch (
                ((e = (0, A.up)(e, Z)),
                (e = (0, A.lU)(e, V)),
                (e = (0, A._4)(e, K)),
                k)
              ) {
                case "Order Date":
                  e = (0, A.U9)(e, D);
                  break;
                case "Expiry":
                case "Collateral Amount":
                  e = (0, A.e4)(e, D);
                  break;
                case "Price Traded":
                  e = (0, A.Rd)(e, D);
              }
              return { totalItemsAmount: e.length, slicedData: e.slice(w, m) };
            }, [J, R, Z, V, K, k, D, w, m]);
          (0, n.useEffect)(() => {
            !X && ee && r(U);
          }, [X, ee, r]);
          let ea = (0, n.useMemo)(
              () =>
                Array.from(new Set(J.flatMap((e) => e.strikeGroup)))
                  .sort()
                  .map((e) => "".concat(e)),
              [J]
            ),
            en = (0, n.useMemo)(
              () =>
                Array.from(new Set(J.map((e) => (0, F.Yf)(e.product)))).sort(),
              [J]
            ),
            ei = (0, n.useCallback)(
              (e, t) => {
                S(e), k != e ? (S(e), T(t)) : T(!D);
              },
              [k, D]
            ),
            el = X && G,
            es = !er.length && !X,
            eo = er.length > 0 && !X;
          return (
            (0, n.useEffect)(() => {
              !b && er.length > 0 && (ei("Order Date", !1), C(!0));
            }, [b, er, ei]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(I, {
                  isOpen: !!j,
                  closePayoffModal: () => {
                    _(null);
                  },
                  type: H.vj.HISTORY,
                  data: j,
                }),
                document.querySelector("#tabsPortal") &&
                  (0, M.createPortal)(
                    (0, a.jsx)(a.Fragment, {
                      children:
                        G &&
                        (0, a.jsxs)("div", {
                          className:
                            "-tw-mt-2 tw-flex tw-items-end tw-gap-4 sm:tw-items-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "tw-flex tw-items-center tw-gap-1 tw-text-xs sm:tw-flex-row",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "tw-hidden sm:tw-inline",
                                  children: "Select ",
                                }),
                                "Date",
                                (0, a.jsx)(h.Z, {
                                  minSelected: z,
                                  maxSelected: Y,
                                  start: y.from,
                                  end: y.to,
                                  handleSelect: (e) => {
                                    v(null != e ? e : B);
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsx)(P, { range: $ }),
                          ],
                        }),
                    }),
                    document.querySelector("#tabsPortal")
                  ),
                (0, a.jsxs)("div", {
                  className: L()(O().gridContainerTableHistory, {
                    [O().isOpacity]: !G,
                  }),
                  children: [
                    (0, a.jsx)(u.Z, {
                      updateSort: ei,
                      currencyArray: V,
                      clearFilterArray: (e) => {
                        switch (e) {
                          case "side":
                            return E([]);
                          case "product":
                            return q([]);
                          case "currency":
                            return Q([]);
                        }
                      },
                      productArray: R,
                      sideArray: Z,
                      setSideArray: E,
                      setProductArray: q,
                      setCurrencyArray: Q,
                      type: H.vj.HISTORY,
                      strikesArray: K,
                      setStrikeArray: W,
                      strikeList: ea,
                      productList: en,
                    }),
                    (0, a.jsx)(p, {
                      data: er,
                      showList: eo,
                      type: H.vj.HISTORY,
                      onOpenPayoffDiagram: (e) => {
                        _(e);
                      },
                    }),
                    (0, a.jsx)("div", {
                      style: { minHeight: (0, F.OS)(er.length) },
                      className: "tw-col-span-full",
                      children: (0, a.jsx)(N.y, {
                        description: !0,
                        displayIsLoading: el,
                        displayNoResults: es,
                        isAuthenticated: G,
                        totalItems: et,
                        currentPage: d,
                        handlePageChange: f,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      },
      12002: function (e, t, r) {
        "use strict";
        r.d(t, {
          BL: function () {
            return f;
          },
          rg: function () {
            return m;
          },
          z0: function () {
            return w;
          },
        });
        var a = r(59731),
          n = r(88144),
          i = r(64740),
          l = r(45343),
          s = r(62582),
          o = r(69881),
          c = r(90639),
          d = r(51700),
          u = r(67930);
        let f = 999,
          w = 0,
          m = (e) => {
            let { enableQuery: t, range: r, expiryList: m, agentId: p } = e,
              h = (0, a.qr)((e) => e.ithacaSDK);
            return (0, n.a)({
              queryKey: ["clientOrders", r.from, r.to, m, p],
              queryFn: async () => {
                let e = (
                    p
                      ? await (0, d.uD)({ resource: "trades", agentId: p })
                      : await h.client.tradeHistory(
                          (0, i.Z)(r.from).getTime(),
                          (0, l.Z)(r.to).getTime(),
                          w,
                          f
                        )
                  ).filter((e) => {
                    let { orderStatus: t } = e;
                    return "FILLED" === t || "PARTIALLY_FILLED" === t;
                  }),
                  t = p
                    ? {
                        from: (0, i.Z)(r.from).getTime(),
                        to: (0, l.Z)(r.to).getTime(),
                      }
                    : void 0;
                t &&
                  (e = e.filter(
                    (e) => e.revDate >= t.from && e.revDate <= t.to
                  ));
                let a = (0, s.PC)(e, c.vj.HISTORY),
                  n = a
                    .map((e) => ({
                      orderId: e.clientOrderId,
                      details: e.expandedInfo.map((t) => ({
                        currencyPair: e.currencyPair,
                        payoff: t.type,
                        expiry: t.expiryUnparsed,
                        strike: t.strike || 0,
                        position: "BUY" === t.side ? t.size : -t.size,
                      })),
                    }))
                    .filter(
                      (e) => !e.details.find((e) => !m.includes(e.expiry))
                    ),
                  u = await (0, o.mN)(n);
                return a.map((e) => {
                  let t = u.data.find((t) => t.orderId === e.clientOrderId);
                  return {
                    ...e,
                    modelPrice: (null == t ? void 0 : t.price)
                      ? Number(t.price)
                      : 0,
                  };
                });
              },
              enabled: t,
              refetchInterval: u.x6,
            });
          };
      },
      24620: function (e, t, r) {
        "use strict";
        var a = r(85893),
          n = r(58217),
          i = r(13090),
          l = r(37422),
          s = r(69737),
          o = r(90893),
          c = r.n(o),
          d = r(9386),
          u = r(45338),
          f = r(93967),
          w = r.n(f),
          m = r(18666);
        t.Z = (e) => {
          var t, r, o;
          let {
              strategies: f,
              removeRow: p,
              clearAll: h,
              hideClear: x = !1,
              tableClassName: g,
              showStrike: y = !0,
              headers: v,
            } = e,
            j =
              !!(null === (t = f[0]) || void 0 === t
                ? void 0
                : t.referencePrice) ||
              (null === (r = f[0]) || void 0 === r
                ? void 0
                : r.referencePrice) === 0,
            _ = !!(null === (o = f[0]) || void 0 === o ? void 0 : o.leg.expiry),
            b = (e) => (0, m.lV)(e);
          return (0, a.jsxs)("div", {
            className: c().tableContainer,
            children: [
              (0, a.jsxs)("div", {
                className: w()(c().table, g),
                children: [
                  (0, a.jsx)("div", {
                    style: {
                      gridTemplateColumns: j
                        ? x
                          ? "repeat(8, minmax(0, 1fr))"
                          : "repeat(9, minmax(0, 1fr))"
                        : "repeat(6, minmax(0, 1fr))",
                    },
                    className: c().header,
                    children: (v || (_ && j ? n.$T : j ? n.US : n.ev)).map(
                      (e, t) =>
                        (0, a.jsx)(
                          "div",
                          { className: c().cell, children: e },
                          t
                        )
                    ),
                  }),
                  f.length
                    ? f.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            style: {
                              gridTemplateColumns: j
                                ? x
                                  ? "repeat(8, minmax(0, 1fr))"
                                  : "repeat(9, minmax(0, 1fr))"
                                : "repeat(6, minmax(0, 1fr))",
                            },
                            className: c().row,
                            children: [
                              (0, a.jsx)("div", {
                                className: c().cell,
                                children: (0, a.jsxs)("div", {
                                  className: c().dot,
                                  children: [
                                    (0, a.jsx)(d.Z, {
                                      type: "leg".concat(t + 1),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: c().strategy,
                                      children:
                                        "NEXT_AUCTION" === e.payoff
                                          ? "Forward(Next Auction)"
                                          : "CURRENT" === e.payoff
                                          ? "Forward (".concat(
                                              b(e.leg.expiry),
                                              ")"
                                            )
                                          : "BinaryCall" === e.payoff
                                          ? "Digital Call"
                                          : "BinaryPut" === e.payoff
                                          ? "Digital Put"
                                          : e.payoff,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: c().cell,
                                children: e.leg.expiry ? b(e.leg.expiry) : "",
                              }),
                              (0, a.jsx)("div", {
                                className: c().cell,
                                children: (0, i.U)(e.leg.side),
                              }),
                              (0, a.jsx)("div", {
                                className: c().cell,
                                children: e.leg.quantity,
                              }),
                              y && e.strike
                                ? (0, a.jsx)("div", {
                                    className: c().cell,
                                    children:
                                      "-" === e.strike ? "" : Number(e.strike),
                                  })
                                : (0, a.jsx)("p", {}),
                              (e.referencePrice || 0 === e.referencePrice) &&
                                (0, a.jsx)("div", {
                                  className: c().cell,
                                  children: (0, u.uM)(
                                    Number(e.referencePrice),
                                    "string",
                                    "USDC"
                                  ),
                                }),
                              !x &&
                                (0, a.jsx)("div", {
                                  className: c().cell,
                                  children: (0, a.jsx)(l.Z, {
                                    title: "Click to remove row",
                                    variant: "icon",
                                    onClick: () => p && p(t),
                                    children: (0, a.jsx)(s.Z, {}),
                                  }),
                                }),
                            ],
                          },
                          t
                        )
                      )
                    : (0, a.jsx)("div", {
                        className: c().emptyContainer,
                        children: "Please add a strategy.",
                      }),
                ],
              }),
              f.length > 0 &&
                !x &&
                (0, a.jsx)(l.Z, {
                  className: c().clearAll,
                  title: "Click to clear all",
                  onClick: h,
                  variant: "clear",
                  children: "Clear All",
                }),
            ],
          });
        };
      },
      58217: function (e, t, r) {
        "use strict";
        r.d(t, {
          $1: function () {
            return s;
          },
          $T: function () {
            return n;
          },
          TI: function () {
            return l;
          },
          US: function () {
            return a;
          },
          ev: function () {
            return i;
          },
        });
        let a = ["Type", "", "Side", "Size", "Strike", "Unit Price", ""],
          n = ["Type", "Expiry", "Side", "Size", "Strike", "Unit Price", ""],
          i = ["Type", "", "Side", "Size", "Strike"],
          l = [
            "Product",
            "",
            "Side",
            "Quantity",
            "Strike",
            "Average Price",
            "",
          ],
          s = [
            "Product",
            "",
            "Side",
            "Quantity",
            "Strike",
            "Average Price",
            "",
          ];
      },
      51700: function (e, t, r) {
        "use strict";
        r.d(t, {
          NK: function () {
            return f;
          },
          RW: function () {
            return u;
          },
          Uu: function () {
            return p;
          },
          _z: function () {
            return x;
          },
          bZ: function () {
            return m;
          },
          j8: function () {
            return c;
          },
          l0: function () {
            return o;
          },
          uD: function () {
            return d;
          },
          uo: function () {
            return h;
          },
        });
        var a = r(87066),
          n = r(82649);
        let i = "",
          l = "",
          s = async () => {
            (i = await (0, n.Sp)("BOT_URL")),
              (l = "".concat(i.slice(0, -4), "/framework/api/wallet"));
          },
          o = async (e) =>
            e
              ? (i || (await s()),
                (await a.Z.get("".concat(i, "/get_signature/").concat(e))).data)
              : "",
          c = async (e) => (
            i || (await s()),
            (await a.Z.post("".concat(i, "/get_agents"), { addresses: e })).data
              .slice()
              .sort((e, t) => {
                var r, a, n, i;
                let l =
                  null !==
                    (n =
                      null === (r = e.prices) || void 0 === r
                        ? void 0
                        : r.assets) && void 0 !== n
                    ? n
                    : 0;
                return (
                  (null !==
                    (i =
                      null === (a = t.prices) || void 0 === a
                        ? void 0
                        : a.assets) && void 0 !== i
                    ? i
                    : 0) - l
                );
              })
          ),
          d = async (e) => {
            let {
              resource: t,
              config: r,
              agentId: n,
              query: i,
              method: o = "get",
            } = e;
            if (!n) return;
            l || (await s());
            let c = "".concat(l, "/").concat(n, "/").concat(t);
            return i && (c = c + "?" + i), (await a.Z[o](c, r)).data;
          },
          u = async (e) => {
            if (!e) return null;
            i || (await s());
            try {
              return (await a.Z.get("".concat(i, "/get_fees/").concat(e))).data;
            } catch (e) {
              return console.error("Failed to fetch agent fees:", e), null;
            }
          },
          f = async (e) => {
            if (!e) return null;
            i || (await s());
            try {
              return (
                await a.Z.post("".concat(i, "/get_agent"), { address: e })
              ).data;
            } catch (e) {
              return (
                console.error("Failed to fetch agent by address:", e), null
              );
            }
          };
        function w(e) {
          return "bigint" == typeof e
            ? e.toString()
            : Array.isArray(e)
            ? e.map(w)
            : e && "object" == typeof e
            ? Object.fromEntries(
                Object.entries(e).map((e) => {
                  let [t, r] = e;
                  return [t, w(r)];
                })
              )
            : e;
        }
        let m = async (e, t) => {
            i || (await s());
            try {
              let r = w(e);
              if (!r || "object" != typeof r || Array.isArray(r))
                throw Error(
                  "Agent data could not be converted to a valid object"
                );
              return (
                await a.Z.post("".concat(i, "/save_agent"), {
                  ...r,
                  signature: t,
                })
              ).data;
            } catch (e) {
              throw (console.error("Failed to save agent:", e), e);
            }
          },
          p = async (e, t, r) => {
            i || (await s());
            let n = new FormData();
            n.append("file", e),
              n.append("wallet_address", t),
              n.append("signature", r);
            try {
              return (
                await a.Z.post("".concat(i, "/upload_image"), n, {
                  headers: { "Content-Type": "multipart/form-data" },
                })
              ).data;
            } catch (e) {
              return {
                status: "error",
                message:
                  (e instanceof Error ? e.message : String(e)) ||
                  "Upload failed",
              };
            }
          },
          h = async (e) => {
            i || (await s());
            try {
              let t = w(e);
              return (await a.Z.post("".concat(i, "/ai_assistant"), t)).data;
            } catch (e) {
              throw (
                (console.error("Failed to get AI assistant response:", e), e)
              );
            }
          },
          x = async (e, t) => {
            i || (await s());
            try {
              let r = w(e);
              if (!r || "object" != typeof r || Array.isArray(r))
                throw Error(
                  "Agent data could not be converted to a valid object"
                );
              return (
                await a.Z.post("".concat(i, "/activate_agent"), {
                  ...r,
                  signature: t,
                })
              ).data;
            } catch (e) {
              throw (console.error("Failed to activate agent:", e), e);
            }
          };
      },
      74398: function (e) {
        e.exports = {
          dateRangePickerContainer:
            "DatePicker_dateRangePickerContainer__stI1A",
          dateSinglePickerContainer:
            "DatePicker_dateSinglePickerContainer__VN_ZF",
          dateInput: "DatePicker_dateInput__FwZu0",
          dateBlock: "DatePicker_dateBlock__l1zNo",
          dateRangeContainer: "DatePicker_dateRangeContainer__N4Lbz",
          subContainer: "DatePicker_subContainer__98gmv",
          datePicker: "DatePicker_datePicker__B5xYT",
          buttonContainer: "DatePicker_buttonContainer__kCB9p",
          cancelButton: "DatePicker_cancelButton__sly0A",
          applyButton: "DatePicker_applyButton__UR6yS",
          isHidden: "DatePicker_isHidden__q79mx",
        };
      },
      90893: function (e) {
        e.exports = {
          table: "TableStrategy_table__Zz1UR",
          tableContainer: "TableStrategy_tableContainer__e_DGz",
          header: "TableStrategy_header__3kUQm",
          cell: "TableStrategy_cell__sWx3s",
          row: "TableStrategy_row__Q1LP7",
          dot: "TableStrategy_dot__q4Wrj",
          clearAll: "TableStrategy_clearAll__fVzYG",
          strategy: "TableStrategy_strategy__UFZLp",
          emptyContainer: "TableStrategy_emptyContainer__e_gy6",
        };
      },
    },
  ]);
