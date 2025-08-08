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
      (e._sentryDebugIds[t] = "88b734da-854a-4b3a-a709-fe0ebe750c3a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-88b734da-854a-4b3a-a709-fe0ebe750c3a"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8084],
    {
      38084: function (e, t, s) {
        "use strict";
        s.r(t),
          s.d(t, {
            default: function () {
              return j;
            },
          });
        var a = s(85893),
          n = s(67294),
          i = s(89111),
          r = s.n(i),
          l = s(13880),
          o = s(27531),
          c = s(37422),
          d = s(59731),
          u = s(18666),
          _ = s(27484),
          p = s.n(_),
          h = () =>
            (0, a.jsxs)("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V10C14 12.2091 12.2091 14 10 14H4C1.79086 14 0 12.2091 0 10V4Z",
                  fill: "#9d9daa",
                  fillOpacity: "0.3",
                }),
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.90681 3.81543C4.63067 3.81543 4.40681 4.03929 4.40681 4.31543C4.40681 4.59157 4.63067 4.81543 4.90681 4.81543L8.38037 4.81543L3.13139 10.0644C2.93612 10.2597 2.93612 10.5763 3.13139 10.7715C3.32665 10.9668 3.64323 10.9668 3.83849 10.7715L9.09309 5.51692V9.00024C9.09309 9.27638 9.31695 9.50024 9.59309 9.50024C9.86923 9.50024 10.0931 9.27638 10.0931 9.00024L10.0931 4.31519C10.0931 4.03905 9.86923 3.81519 9.59309 3.81519C9.58784 3.81519 9.5826 3.81527 9.57738 3.81543L4.90681 3.81543Z",
                  fill: "#9d9daa",
                }),
              ],
            });
        let C = ["Sent", "Gas Paid", "Express Executed"],
          m = ["Sent", "Gas Paid", "Confirmed", "Approved", "Executed"],
          x = {
            source_gateway_called_gas_unpaid: 0,
            source_gateway_called_gas_paid: 1,
            express_executed: 2,
            confirmed: 3,
            approved: 4,
            destination_executed: 5,
          },
          f = () => {
            let {
              ithacaSDK: e,
              crossChainTransactions: t,
              updateCrossChainTxnStatus: s,
            } = (0, d.qr)();
            return (
              (0, n.useEffect)(() => {
                if (!t.length) return;
                let a = setInterval(async () => {
                  let a = t.map((t) => {
                      let { status: s, requestId: a } = t;
                      return "destination_executed" === s.status
                        ? Promise.resolve(s)
                        : e.fundlock.getCrossChainTxStatus(
                            s.fromChain.transactionId,
                            a
                          );
                    }),
                    n = await Promise.all(a);
                  s(
                    t.map((e, t) => {
                      let { route: s, timestamp: a, requestId: i } = e;
                      return {
                        route: s,
                        status: n[t],
                        timestamp: a,
                        requestId: i,
                      };
                    })
                  );
                }, 1e4);
                return () => clearInterval(a);
              }, [t, e, s]),
              t.map((e) => {
                let { route: t, status: s, timestamp: n } = e;
                return (0, a.jsxs)(
                  "div",
                  {
                    className: r().transactionStatusContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: r().header,
                        children: [
                          (0, a.jsx)("h4", {
                            className: r().title,
                            children: "Cross-Chain Deposit Status ("
                              .concat(t.estimate.fromToken.symbol, "/")
                              .concat(t.estimate.toToken.symbol, ")"),
                          }),
                          (0, a.jsxs)("div", {
                            className: r().timestamp,
                            children: [
                              (0, a.jsx)("span", {
                                children: (0, u.p6)(n, void 0, "DDMMMYY"),
                              }),
                              (0, a.jsx)("span", {
                                children: p()(n).format("HH:MM"),
                              }),
                              (0, a.jsx)("a", {
                                href: s.axelarTransactionUrl,
                                target: "_blank",
                                children: (0, a.jsx)(h, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: r().stepsContainer,
                        children: (t.estimate.isBoostSupported ? C : m).map(
                          (e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className:
                                  t <=
                                  x[
                                    "source_gateway_called" === s.status
                                      ? ""
                                          .concat(s.status, "_")
                                          .concat(s.gasStatus)
                                      : s.status
                                  ]
                                    ? r().completedStep
                                    : r().incompleteStep,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: r().numberContainer,
                                    children: (0, a.jsx)("span", {
                                      className: r().textContainer,
                                      children: t + 1,
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: r().stepName,
                                    children: e,
                                  }),
                                ],
                              },
                              e
                            )
                        ),
                      }),
                    ],
                  },
                  s.id
                );
              })
            );
          };
        var j = (e) => {
          let { isTxnPanelOpen: t, setIsTxnPanelOpen: s } = e;
          return t
            ? (0, a.jsxs)(l.Z, {
                className: r().container,
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h4", {
                        className: r().title,
                        children: "Cross-Chain Transaction Status",
                      }),
                      (0, a.jsx)(c.Z, {
                        className: r().buttonClose,
                        title: "Click to close modal",
                        onClick: () => s(!1),
                        children: (0, a.jsx)(o.Z, {}),
                      }),
                    ],
                  }),
                  (0, a.jsx)(f, {}),
                ],
              })
            : null;
        };
      },
      27531: function (e, t, s) {
        "use strict";
        var a = s(85893);
        t.Z = () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsxs)("g", {
              opacity: "0.5",
              children: [
                (0, a.jsx)("path", {
                  d: "M18 6L6 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, a.jsx)("path", {
                  d: "M6 6L18 18",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
      },
      13880: function (e, t, s) {
        "use strict";
        var a = s(85893),
          n = s(2920),
          i = s.n(n);
        t.Z = (e) => {
          let { children: t, margin: s = "m-0", className: n = "" } = e;
          return (0, a.jsx)("div", {
            className: ""
              .concat(i().panel, " ")
              .concat(s && s, " ")
              .concat(n),
            children: t,
          });
        };
      },
      89111: function (e) {
        e.exports = {
          container: "CrossChainStatusPanel_container__1w_99",
          title: "CrossChainStatusPanel_title___AVpU",
          buttonClose: "CrossChainStatusPanel_buttonClose__ieMWX",
          transactionStatusContainer:
            "CrossChainStatusPanel_transactionStatusContainer__fMdPU",
          header: "CrossChainStatusPanel_header__1S23S",
          timestamp: "CrossChainStatusPanel_timestamp__0ULlu",
          stepsContainer: "CrossChainStatusPanel_stepsContainer__sN__6",
          completedStep: "CrossChainStatusPanel_completedStep__06XjE",
          numberContainer: "CrossChainStatusPanel_numberContainer__oVST_",
          stepName: "CrossChainStatusPanel_stepName__J0__V",
          incompleteStep: "CrossChainStatusPanel_incompleteStep__dHVaY",
        };
      },
      2920: function (e) {
        e.exports = { panel: "Panel_panel__unNp0" };
      },
    },
  ]);
