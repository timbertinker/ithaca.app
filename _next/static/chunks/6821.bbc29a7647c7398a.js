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
      (e._sentryDebugIds[t] = "e9e3179d-006c-4614-abdd-fee925c71517"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e9e3179d-006c-4614-abdd-fee925c71517"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6821],
    {
      40838: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return x;
          },
        });
        var s = n(85893),
          i = n(67294),
          r = n(80052),
          o = n(93967),
          l = n.n(o),
          a = n(15922),
          c = n(37422),
          d = n(67253),
          u = n(24514),
          _ = n(86322),
          w = n(45303),
          h = n.n(w),
          p = (e) => {
            let {
                children: t,
                isOpen: n,
                side: r,
                align: o,
                offset: a,
                footer: w,
                currentStep: p,
                continueClick: T,
                skipClick: x,
              } = e,
              [A, m] = (0, i.useState)(n);
            return ((0, i.useEffect)(() => {
              m(n);
            }, [n]),
            p)
              ? (0, s.jsxs)(_.fC, {
                  open: A,
                  children: [
                    (0, s.jsx)(_.xz, {
                      asChild: !0,
                      children: (0, s.jsx)("div", { children: t }),
                    }),
                    (0, s.jsx)(_.VY, {
                      align: o,
                      side: r,
                      className: "".concat(
                        h().PopoverContent,
                        " tw-relative tw-z-[9999] tw-text-left"
                      ),
                      sideOffset: 5,
                      alignOffset: a,
                      children: (0, s.jsxs)(s.Fragment, {
                        children: [
                          d.R[p].title &&
                            (0, s.jsx)("div", {
                              className: l()(h().title, "tw-mb-1"),
                              children: d.R[p].title,
                            }),
                          (0, s.jsx)("div", {
                            className: h().message,
                            children: d.R[p].message,
                          }),
                          w ||
                            (0, s.jsxs)(u.Z, {
                              gap: "5",
                              classes: "flex-nowrap justify-end",
                              children: [
                                (0, s.jsx)("div", { className: "flexGrow" }),
                                (0, s.jsx)("div", {
                                  className: h().skipButton,
                                  onClick: x,
                                  children: "Skip",
                                }),
                                (0, s.jsx)(c.Z, {
                                  title: "Continue",
                                  className: "height-28 w-fit",
                                  onClick: T,
                                  children: "Continue",
                                }),
                              ],
                            }),
                          (0, s.jsx)(_.Eh, { className: h().PopoverArrow }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, s.jsx)(s.Fragment, {});
          };
        let T = (0, i.forwardRef)((e, t) => {
          let {
              title: n,
              children: o,
              className: c,
              panelClassName: d,
              openOnClick: u = !1,
              leaveTimeout: _ = 120,
              ...w
            } = e,
            h = (0, i.useRef)(null),
            T = t || h,
            x = (0, i.useRef)(null),
            A = (0, a.F)(),
            m = (0, i.useCallback)(
              (e) => {
                var t;
                u ||
                  (x.current && clearTimeout(x.current),
                  e || null === (t = T.current) || void 0 === t || t.click());
              },
              [u]
            ),
            f = (0, i.useCallback)(
              function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                (!u || n) &&
                  (x.current && clearTimeout(x.current),
                  (x.current = window.setTimeout(() => {
                    e && t();
                  }, _)));
              },
              [u, _]
            );
          (0, i.useEffect)(
            () => () => {
              x.current && clearTimeout(x.current);
            },
            []
          );
          let E = (e, t) =>
            (0, s.jsxs)("div", {
              onMouseEnter: () => m(e),
              onMouseLeave: () => f(e, t),
              children: [
                (0, s.jsx)(r.O7, {
                  ref: T,
                  className: "tw-flex tw-outline-none",
                  children: n,
                }),
                (0, s.jsx)(r.Hi, {
                  anchor: "bottom",
                  className: l()(
                    "tw-z-50 tw-flex tw-flex-col tw-rounded-md tw-border tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-backdrop-blur-[40px]",
                    { "!tw-left-0": "phone" === A },
                    d
                  ),
                  children: i.cloneElement(o, {
                    closePopover: () => {
                      x.current && clearTimeout(x.current), t();
                    },
                  }),
                }),
              ],
            });
          return (0, s.jsx)(r.J2, {
            className: l()("tw-relative", c),
            children: (e) => {
              let { open: t, close: n } = e,
                i = E(t, n);
              if (w.isTutorialOpen) {
                var r, o;
                return (0, s.jsx)(p, {
                  skipClick:
                    null !== (r = w.handleSkipTutorialClick) && void 0 !== r
                      ? r
                      : () => {},
                  continueClick:
                    null !== (o = w.handleContinueTutorialClick) && void 0 !== o
                      ? o
                      : () => {},
                  currentStep: w.currentTutorialStep,
                  isOpen: w.isTutorialOpen,
                  side: "top",
                  align: "end",
                  children: i,
                });
              }
              return i;
            },
          });
        });
        T.displayName = "HoverPopover";
        var x = T;
      },
      76821: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return g;
            },
          });
        var s = n(85893),
          i = n(40838),
          r = n(67253),
          o = n(47236),
          l = n(59731),
          a = n(41935),
          c = n(82649);
        let d = async (e) => {
          let { message: t, userId: n } = e,
            s = await (0, c.Sp)("BOT_URL");
          return new a.s(s, 3e4).post("/ithaca_web/", { text: t, user: n });
        };
        var u = n(27461),
          _ = n(98029),
          w = n(67294);
        n(63149);
        var h = n(4913),
          p = n(96659),
          T = n(89793),
          x = n(45323),
          A = n(37422),
          m = n(65440),
          f = n(67930),
          E = n(93967),
          I = n.n(E),
          N = (e) => {
            let { isPending: t, handleSubmit: n, className: i } = e,
              { messages: r } = (0, l.aK)(),
              { setDraftText: o, chat: a } = (0, l.xc)(),
              c = (0, w.useRef)(),
              d = () => {
                let e = document.getElementsByClassName("rce-mlist")[0];
                void 0 !== e && (e.scrollTop = e.scrollHeight);
              };
            (0, w.useEffect)(() => {
              d();
            }, [r]);
            let u = () => {
              n(a.draftText), o("");
            };
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(T.rN, {
                  referance: c,
                  className: I()(
                    "verticalScrollBar message-list tw-flex tw-min-h-[200px] tw-max-w-[500px] tw-flex-1 tw-overflow-auto",
                    i
                  ),
                  lockable: !1,
                  toBottomHeight: "100%",
                  dataSource: r.map((e) => ({
                    retracted: !1,
                    notch: !0,
                    replyButton: !1,
                    forwarded: !1,
                    removeButton: !1,
                    titleColor: "#132422",
                    status: "sent",
                    type: "text",
                    focus: !1,
                    position: "bot" === e.senderId ? "left" : "right",
                    id: e.id,
                    date: e.date,
                    title: "bot" === e.senderId ? f.OM : "You",
                    text: (0, s.jsx)(p.UG, {
                      components: {
                        p: (e) => {
                          let { children: t } = e;
                          return (0, s.jsx)(h.Z, {
                            options: {
                              className:
                                "!tw-text-white !tw-font-bold !tw-underline",
                              render: (e) =>
                                (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)("a", {
                                      className: e.attributes.class,
                                      href: e.attributes.href,
                                      children: "Click to load the Strategy",
                                    }),
                                    (0, s.jsx)("br", {}),
                                  ],
                                }),
                            },
                            children: t,
                          });
                        },
                      },
                      children: e.text,
                    }),
                  })),
                }),
                t &&
                  (0, s.jsx)("div", {
                    className:
                      "tw-mt-2 tw-flex tw-justify-center tw-text-white",
                    children: (0, s.jsx)(m.Z, {}),
                  }),
                (0, s.jsxs)("div", {
                  className: "tw-mt-4 tw-flex",
                  children: [
                    (0, s.jsx)("div", {
                      className: "tw-mr-2 tw-flex tw-flex-1",
                      children: (0, s.jsx)(x.Z, {
                        onKeyDown: (e) => {
                          let { key: t } = e;
                          "Enter" == t && u();
                        },
                        type: "text",
                        value: a.draftText,
                        className: "tw-flex tw-w-full",
                        onChange: (e) => o(e.target.value),
                        placeholder: "Type here...",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)(A.Z, {
                        disabled: t,
                        title: "Send",
                        type: "button",
                        onClick: u,
                        children: "Send",
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "tw-pb-4 tw-pt-1 tw-text-center tw-text-xxs tw-text-ithaca-white-60",
                  children:
                    "IthacaGPT can make mistakes. Check important info.",
                }),
              ],
            });
          },
          v = n(95509),
          O = n(91594);
        let C = (e) => {
          let { open: t, setOpen: n, children: i, title: r } = e;
          return (0, s.jsxs)(v.Vq, {
            open: t,
            onClose: n,
            className: "tw-relative tw-z-[51]",
            children: [
              (0, s.jsx)("div", { className: "tw-fixed tw-inset-0" }),
              (0, s.jsx)("div", {
                className: "tw-fixed tw-inset-0 tw-overflow-hidden",
                children: (0, s.jsx)("div", {
                  className: "tw-absolute tw-inset-0 tw-overflow-hidden",
                  children: (0, s.jsx)("div", {
                    className:
                      "tw-pointer-events-none tw-fixed tw-inset-y-0 tw-right-0 tw-flex tw-max-w-full tw-pl-10",
                    children: (0, s.jsx)(v.EM, {
                      transition: !0,
                      className:
                        "tw-pointer-events-auto tw-w-screen tw-max-w-md tw-transform tw-transition tw-duration-500 tw-ease-in-out data-[closed]:tw-translate-x-full sm:tw-duration-700 ",
                      children: (0, s.jsxs)("div", {
                        className:
                          "tw-flex  tw-h-dvh tw-flex-col tw-border-l tw-border-gray-700 tw-bg-white/0 tw-bg-gradient-to-b tw-from-transparent tw-to-black/80 tw-p-2 tw-py-6 tw-shadow-xl tw-backdrop-blur-[40px]",
                        children: [
                          (0, s.jsx)("div", {
                            className: "tw-px-4 sm:tw-px-6",
                            children: (0, s.jsxs)("div", {
                              className:
                                "tw-flex tw-items-start tw-justify-between",
                              children: [
                                (0, s.jsx)(v.$N, {
                                  className:
                                    "tw-text-base tw-font-semibold tw-text-white",
                                  children: r,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "tw-ml-3 tw-flex tw-h-7 tw-items-center",
                                  children: (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: () => n(!1),
                                    className:
                                      "tw-relative tw-rounded-md  tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2",
                                    children: (0, s.jsx)(O.Z, {
                                      className: "tw-size-6 tw-text-white",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "tw-relative tw-mt-6 tw-flex-1 tw-px-2",
                            children: i,
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        };
        var S = n(15922),
          g = () => {
            let [e, t] = (0, w.useState)(!1),
              [n, a] = (0, w.useState)(!1),
              { setIthacaGPTTutorialOpen: c, ithacaGPTTutorial: h } = (0,
              l.NV)(),
              {
                addMessage: p,
                localUserId: T,
                setLocalUserId: x,
              } = (0, l.aK)(),
              { showErrorToast: A } = (0, o.Z)(),
              m = (0, w.useRef)(null),
              E = (0, S.F)();
            (0, w.useEffect)(() => {
              if (h.isOpen) {
                let e = setTimeout(() => {
                  j();
                }, 15e3);
                return () => clearTimeout(e);
              }
            }, [h]),
              (0, w.useEffect)(() => {
                t(!0), T || x(crypto.randomUUID());
              }, []);
            let I = (e) => {
                p({
                  id: crypto.randomUUID(),
                  date: Date.now(),
                  text: e,
                  senderId: T,
                });
              },
              { mutate: v, isPending: O } = (0, _.D)({
                mutationFn: (e) => d(e),
              }),
              g = (e) => {
                I(e),
                  v(
                    { userId: T, message: e },
                    {
                      onSuccess: (e) => {
                        p({
                          id: crypto.randomUUID(),
                          date: Date.now(),
                          text: e.data.response,
                          senderId: "bot",
                        });
                      },
                      onError: (e) => {
                        A({
                          title: "",
                          message: "Something went wrong. Try one more time",
                        }),
                          console.error("chat_error", e);
                      },
                    }
                  );
              },
              j = () => {
                c(!1);
              };
            return e
              ? "phone" === E
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("button", {
                        onClick: () => a(!0),
                        className:
                          "!tw-fixed tw-bottom-8 tw-right-[6.5rem] tw-z-[50] sm:tw-bottom-16 sm:tw-right-[8.5rem]",
                        children: (0, s.jsx)("div", {
                          className:
                            "tw-size-12 tw-rounded-full tw-bg-ithaca-green-20 tw-p-2 tw-text-white tw-transition hover:tw-opacity-80",
                          children: (0, s.jsx)(u.Z, {}),
                        }),
                      }),
                      (0, s.jsx)(C, {
                        title: f.OM,
                        open: n,
                        setOpen: a,
                        children: (0, s.jsx)("div", {
                          className:
                            "tw-flex tw-h-[calc(100dvh-100px)] tw-flex-col",
                          children: (0, s.jsx)(N, {
                            isPending: O,
                            handleSubmit: g,
                          }),
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(i.Z, {
                    handleSkipTutorialClick: j,
                    handleContinueTutorialClick: () => {
                      var e;
                      null === (e = m.current) || void 0 === e || e.click(),
                        c(!1);
                    },
                    isTutorialOpen: h.isOpen,
                    currentTutorialStep: r.P.ITHACA_GPT_INTRO,
                    ref: m,
                    leaveTimeout: 6e4,
                    className:
                      "!tw-fixed tw-bottom-8 tw-right-[6.5rem] sm:tw-bottom-16 sm:tw-right-[8.5rem]",
                    panelClassName:
                      "sm:-tw-translate-x-16 tw-translate-x-0 -tw-translate-y-1 tw-right-0 sm:!tw-left-[unset] tw-absolute tw-p-4",
                    title: (0, s.jsx)("div", {
                      className:
                        "tw-size-12 tw-rounded-full tw-bg-ithaca-green-20 tw-p-2 tw-text-white tw-transition hover:tw-opacity-80",
                      children: (0, s.jsx)(u.Z, {}),
                    }),
                    children: (0, s.jsx)(N, {
                      className: "tw-max-h-[400px]",
                      isPending: O,
                      handleSubmit: g,
                    }),
                  })
              : null;
          };
      },
      21050: function (e, t, n) {
        "use strict";
        var s = n(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: n = "" } = e;
          return (0, s.jsxs)("svg", {
            className: n,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M16 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M8 10L12 14",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        };
      },
      57345: function (e, t, n) {
        "use strict";
        var s = n(85893);
        t.Z = () =>
          (0, s.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("rect", {
                width: "16",
                height: "16",
                rx: "4",
                fill: "35333E",
              }),
              (0, s.jsx)("path", {
                d: "M10.6667 6.66699L8 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M5.33301 6.66699L7.99967 9.33366",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
      },
      45323: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return E;
          },
        });
        var s = n(85893),
          i = n(67294);
        let r = (e) => {
          e.currentTarget.blur(),
            e.stopPropagation(),
            setTimeout(() => {
              var t;
              null == e ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.focus();
            }, 0);
        };
        var o = () =>
            (0, s.jsxs)("svg", {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsxs)("g", {
                  clipPath: "url(#clip0_2198_156721)",
                  children: [
                    (0, s.jsx)("path", {
                      d: "M6 4.5V6.5",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, s.jsx)("path", {
                      d: "M5.18125 1.79547L1.12825 8.56247C1.0447 8.70716 1.00048 8.87121 1 9.03829C0.999526 9.20538 1.0428 9.36967 1.12552 9.51484C1.20824 9.66001 1.32753 9.78099 1.47152 9.86575C1.61551 9.95051 1.77918 9.9961 1.94625 9.99797H10.0532C10.2202 9.99605 10.3838 9.95045 10.5278 9.86572C10.6717 9.78098 10.7909 9.66006 10.8736 9.51497C10.9563 9.36987 10.9996 9.20566 10.9992 9.03865C10.9988 8.87164 10.9547 8.70765 10.8712 8.56297L6.81825 1.79497C6.73298 1.65422 6.61285 1.53784 6.46947 1.45707C6.3261 1.3763 6.16431 1.33386 5.99975 1.33386C5.83518 1.33386 5.6734 1.3763 5.53002 1.45707C5.38665 1.53784 5.26652 1.65422 5.18125 1.79497V1.79547Z",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, s.jsx)("path", {
                      d: "M6 8H6.005",
                      stroke: "#FF3F57",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsx)("clipPath", {
                    id: "clip0_2198_156721",
                    children: (0, s.jsx)("rect", {
                      width: "12",
                      height: "12",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          l = n(4345),
          a = n.n(l),
          c = () =>
            (0, s.jsx)("svg", {
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M5.553 8.68196L4.84589 9.38907C3.86958 10.3654 2.28667 10.3654 1.31036 9.38907C0.334047 8.41276 0.334047 6.82985 1.31036 5.85354L2.01746 5.14643M8.38143 5.85354L9.08853 5.14643C10.0648 4.17012 10.0648 2.58721 9.08853 1.6109C8.11222 0.634584 6.52931 0.634584 5.553 1.6109L4.84589 2.318M3.44945 7.24997L6.94945 3.74997",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          d = n(37422),
          u = () =>
            (0, s.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M8.63316 12.4044L7.69036 13.3472C6.38861 14.649 4.27806 14.649 2.97631 13.3472C1.67456 12.0455 1.67456 9.93491 2.97631 8.63316L3.91912 7.69036M12.4044 8.63316L13.3472 7.69036C14.649 6.38861 14.649 4.27806 13.3472 2.97631C12.0455 1.67456 9.93491 1.67456 8.63316 2.97631L7.69036 3.91912",
                stroke: "#9D9DAA",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          _ = () =>
            (0, s.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  d: "M8 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M16 14L12 10",
                  stroke: "#9D9DAA",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          w = n(21050),
          h = n(24514),
          p = n(57345),
          T = n(16795),
          x = n(65440),
          A = n(93967),
          m = n.n(A),
          f = n(45338),
          E = (e) => {
            let {
                increment: t,
                onChange: n,
                value: l,
                icon: A,
                leftIcon: E,
                disabled: I,
                placeholder: N = "-",
                label: v,
                width: O = 0,
                type: C = "number",
                id: S,
                hasError: g = !1,
                errorMessage: j,
                className: D,
                containerClassName: b,
                isLinked: L,
                canLink: P,
                onLink: H,
                onBlur: W,
                onKeyDown: k,
                footerText: y,
                hasDropdown: B,
                dropDownOptions: U,
                onDropdownChange: R,
                isLoading: F = !1,
                labelClassName: M,
                min: Y,
                max: Z,
                ...K
              } = e,
              [G, z] = (0, i.useState)(!1),
              V = (0, i.useRef)(null);
            (0, i.useEffect)(() => {
              let e = (e) => {
                V.current && !V.current.contains(e.target) && z(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, T.M)(() => {
                G && z(!1);
              });
            let X = (e) => {
                z(!1), R && R(e);
              },
              Q = (e) => {
                if ("number" !== C || !t) return;
                let n = l ? (0, f.Dx)("".concat(l)) : void 0;
                "UP" === e
                  ? ((void 0 !== n && void 0 !== Z && n < Z) || void 0 === Z) &&
                    t("UP")
                  : "DOWN" === e &&
                    ((void 0 !== n && void 0 !== Y && n > Y) || void 0 === Y) &&
                    t("DOWN");
              };
            return (0, s.jsxs)("div", {
              className: m()(a().input, D, { [a().error]: g }),
              style: O > 0 ? { width: O + "px" } : {},
              children: [
                v &&
                  (0, s.jsx)("label", {
                    htmlFor: S,
                    className: m()(a().label, M),
                    children: v,
                  }),
                (0, s.jsxs)("div", {
                  className: "".concat(a().container, " ").concat(b || ""),
                  style: { width: "100%" },
                  children: [
                    P &&
                      (0, s.jsx)(d.Z, {
                        title: "Click to link",
                        variant: "icon",
                        size: "sm",
                        onClick: () => {
                          H && H(!L);
                        },
                        children: L ? (0, s.jsx)(c, {}) : (0, s.jsx)(u, {}),
                      }),
                    (0, s.jsxs)(h.Z, {
                      direction: "column",
                      classes: "full-width",
                      children: [
                        (0, s.jsxs)(h.Z, {
                          direction: "row-center",
                          children: [
                            E &&
                              (0, s.jsx)("div", {
                                className: "tw-mr-1",
                                children: E,
                              }),
                            F
                              ? (0, s.jsx)("div", {
                                  className: "flexGrow",
                                  children: (0, s.jsx)(x.Z, {}),
                                })
                              : (0, s.jsx)("input", {
                                  ...K,
                                  id: S,
                                  type: C,
                                  value: l,
                                  placeholder: N,
                                  inputMode:
                                    "number" === C ? "decimal" : void 0,
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if ("number" === C) {
                                      let s = (0, f.Dx)(t);
                                      if (void 0 !== Z && s > Z) return;
                                      null == n || n(e);
                                    } else null == n || n(e);
                                  },
                                  onWheel: "number" === C ? r : void 0,
                                  disabled: I,
                                  min: "number" === C ? Y : void 0,
                                  max: "number" === C ? Z : void 0,
                                  step: "any",
                                  onBlur: W,
                                  onKeyDown: k,
                                }),
                            A &&
                              (0, s.jsx)("div", {
                                className: "tw-ml-1",
                                children: A,
                              }),
                            B &&
                              (0, s.jsxs)("div", {
                                onClick: () => {
                                  z(!G);
                                },
                                className: ""
                                  .concat(a().dropdown, " ")
                                  .concat(G ? a().isActive : ""),
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "mmt-2",
                                    children: (0, s.jsx)(p.Z, {}),
                                  }),
                                  G &&
                                    (0, s.jsx)("ul", {
                                      className: a().dropdownMenu,
                                      children:
                                        U &&
                                        U.map((e) =>
                                          (0, s.jsxs)(
                                            "li",
                                            {
                                              className: m()(
                                                a().dropdownItem,
                                                "tw-flex",
                                                { [a().active]: l === e.value }
                                              ),
                                              onClick: () => X(e.value),
                                              children: [e.icon, " ", e.label],
                                            },
                                            e.value
                                          )
                                        ),
                                    }),
                                ],
                              }),
                          ],
                        }),
                        y &&
                          (0, s.jsx)("div", {
                            className: a().footer,
                            children: y,
                          }),
                      ],
                    }),
                    t &&
                      (0, s.jsx)("div", {
                        className: a().incrementWrapper,
                        children: (0, s.jsxs)(h.Z, {
                          direction: "column",
                          children: [
                            (0, s.jsx)("div", {
                              className: a().incrementButton,
                              children: (0, s.jsx)(d.Z, {
                                title: "up",
                                onClick: () => Q("UP"),
                                variant: "icon",
                                children: (0, s.jsx)(_, {}),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: a().incrementButton,
                              children: (0, s.jsx)(d.Z, {
                                title: "up",
                                onClick: () => Q("DOWN"),
                                variant: "icon",
                                children: (0, s.jsx)(w.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                g &&
                  j &&
                  (0, s.jsxs)("div", {
                    className: a().errorMessage,
                    children: [(0, s.jsx)(o, {}), j],
                  }),
              ],
            });
          };
      },
      3298: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gh: function () {
            return s;
          },
          Mu: function () {
            return o;
          },
          oh: function () {
            return r;
          },
          rN: function () {
            return i;
          },
        });
        let s = 430,
          i = 695,
          r = 1435,
          o = 1280;
      },
      67253: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return a;
          },
          P: function () {
            return i;
          },
        });
        var s,
          i,
          r = n(85893),
          o = n(25675),
          l = n.n(o);
        ((s = i || (i = {})).DEPOSIT_WITH_BALANCE_CHAIN =
          "DEPOSIT_WITH_BALANCE_CHAIN"),
          (s.DEPOSIT_WITH_BALANCE_TOKEN_WETH =
            "DEPOSIT_WITH_BALANCE_TOKEN_WETH"),
          (s.DEPOSIT_WITH_BALANCE_TOKEN_USDC =
            "DEPOSIT_WITH_BALANCE_TOKEN_USDC"),
          (s.DEPOSIT_WITH_BALANCE_AMOUNT = "DEPOSIT_WITH_BALANCE_AMOUNT"),
          (s.DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON"),
          (s.DEPOSIT_WITHOUT_BALANCE_WETH = "DEPOSIT_WITHOUT_BALANCE_WETH"),
          (s.DEPOSIT_WITHOUT_BALANCE_USDC = "DEPOSIT_WITHOUT_BALANCE_USDC"),
          (s.DEPOSIT_WITHOUT_BALANCE_CHAIN = "DEPOSIT_WITHOUT_BALANCE_CHAIN"),
          (s.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN"),
          (s.DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN"),
          (s.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON"),
          (s.WITHDRAWAL_TRANSACTION_HISTORY_TAB =
            "WITHDRAWAL_TRANSACTION_HISTORY_TAB"),
          (s.WITHDRAWAL_RELEASE_FUNDS = "WITHDRAWAL_RELEASE_FUNDS"),
          (s.SHOW_PAYOFF_AT_EXPIRY = "SHOW_PAYOFF_AT_EXPIRY"),
          (s.SHOW_EXPIRY_FILTER = "SHOW_EXPIRY_FILTER"),
          (s.DEPOSIT_FUNDS = "DEPOSIT_FUNDS"),
          (s.SUBMIT_TO_AUCTION = "SUBMIT_TO_AUCTION"),
          (s.WRONG_NETWORK = "WRONG_NETWORK"),
          (s.ITHACA_GPT_INTRO = "ITHACA_GPT_INTRO");
        let a = {
          SHOW_PAYOFF_AT_EXPIRY: {
            nextStep: "SHOW_EXPIRY_FILTER",
            message: "Show Payoff @ Expiry",
            title:
              "To show payoff diagram at chosen expiry, first filter ‘Expiry Date’ column to a single expiry date.",
          },
          ITHACA_GPT_INTRO: {
            nextStep: "ITHACA_GPT_INTRO",
            message:
              "Your advanced option trading assistant within Ithaca Protocol.",
            title: "IthacaGPT",
          },
          SHOW_EXPIRY_FILTER: {
            message: "Select Expiry Date",
            title: "Click the filter icon to select a single expiry date.",
          },
          WRONG_NETWORK: {
            title: "",
            message:
              "Looks like you're connected to an unsupported network. Please switch to a supported network.",
          },
          DEPOSIT_FUNDS: {
            nextStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message: "Deposit funds to place order",
            title: "",
          },
          DEPOSIT_WITH_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "Ithaca runs on Arbitrum and requires WETH and USDC (not USDC.e) for collateral. You can deposit these directly or you can deposit different tokens from other support blockchains.",
            title: "Deposit Funds Directly or Cross Chain",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_USDC: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have USDC on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_TOKEN_WETH: {
            nextStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            previousStep: "DEPOSIT_WITH_BALANCE_CHAIN",
            message:
              "You already have WETH on Arbitrum you can deposit that directly. ",
            title: "Select Token to Deposit",
          },
          DEPOSIT_WITH_BALANCE_AMOUNT: {
            nextStep: "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITH_BALANCE_TOKEN_USDC",
            message:
              "You can deposit any chosen amount of selected token up to what is shown in your Wallet Balance.",
            title: "Enter Amount of Funds to Deposit.",
          },
          DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON: {
            nextStep: "SUBMIT_TO_AUCTION",
            previousStep: "DEPOSIT_WITH_BALANCE_AMOUNT",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet.",
            title: "Confirm the Deposit Amount",
          },
          SUBMIT_TO_AUCTION: {
            message: "Click to submit order to auction",
            title: "",
          },
          DEPOSIT_WITHOUT_BALANCE_USDC: {
            isLarge: !0,
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message: (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit USDC on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 3" }),
                    " - If you have $USDC.e (Bridged USDC) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, r.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, r.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, r.jsx)("li", {
                      children: 'In the "You pay" input field select "USDC.e"',
                    }),
                    (0, r.jsx)("li", {
                      children:
                        'In the "You receive" input field select "USDC"',
                    }),
                    (0, r.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_usdc.faa872f0.png",
                        height: 79,
                        width: 125,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX5+fnz9PX9/f3r6+zf4OFhfIvxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nCWIwQkAMBCDNLn9Zy6hDwVFQxJQvmTV0S3orc4HA6gALlYEhEwAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit USDC",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, r.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, r.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native USDC on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_WETH: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            isLarge: !0,
            message: (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit WETH on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsx)("b", { children: "Option 3" }),
                    " - If you have $ETH (not $WETH) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, r.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, r.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, r.jsx)("li", {
                      children: 'In the "You pay" input field select "ETH"',
                    }),
                    (0, r.jsx)("li", {
                      children:
                        'In the "You receive" input field select "WETH"',
                    }),
                    (0, r.jsx)(l(), {
                      src: {
                        src: "/_next/static/media/deposit_weth.bdb5e366.png",
                        height: 77,
                        width: 123,
                        blurDataURL:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX4+Pjx8fL8/PziewRMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGACAQYGRgYQYGRgYASzIFwIDyYFAAKRABWBK9j8AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 5,
                      },
                      alt: "Deposit WETH",
                      width: "140",
                      height: "140",
                      className: "ml-19",
                    }),
                    (0, r.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, r.jsx)("li", {
                      children: "Return to this page to continue onboarding",
                    }),
                  ],
                }),
              ],
            }),
            title: "No Native WETH on Arbitrum Available to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CHAIN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_USDC",
            message:
              "You can select a chain where you have funds to automatically convert and bridge them with Arbitrum powered by Axelar. ",
            title: "Select A Chain Where you have Funds",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Select from any of the supported tokens from your chosen chain to be used for depositing. ",
            title: "Select the Token you Want to Deposit",
          },
          DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN: {
            nextStep: "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON",
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CHAIN",
            message:
              "Choose from any of the available tokens to be used as collateral.",
            title:
              "Select token you want funds to be converted into on Arbitrum.",
          },
          DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON: {
            previousStep: "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN",
            message:
              "Confirm the deposit amount and click the deposit button. You will need to sign 2 transactions in your connected wallet. ",
            title: "Confirm the Deposit Amount",
          },
          WITHDRAWAL_TRANSACTION_HISTORY_TAB: {
            nextStep: "WITHDRAWAL_RELEASE_FUNDS",
            message:
              "Please go to the ‘Transaction History’ tab to withdraw funds to your wallet once they are ready to be released.",
            title:
              "Go to ‘Transaction History’ to Check Status of Withdrawals & to Release Funds",
          },
          WITHDRAWAL_RELEASE_FUNDS: {
            previousStep: "WITHDRAWAL_TRANSACTION_HISTORY_TAB",
            message: (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("div", {
                  className: "mb-4",
                  children:
                    'Once funds are ready to be released, the ‘Release’ button will become activated and show in green. Once ready, press the "Release" button to transfer funds to your wallet once the button activates.',
                }),
                (0, r.jsx)("div", {
                  className: "italic",
                  children:
                    "You will also receive a notification once funds are ready to be released.",
                }),
              ],
            }),
            title: "Release Funds",
          },
        };
      },
      15922: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return o;
          },
        });
        var s = n(3298),
          i = n(67294);
        let r = () => {
            let [e, t] = (0, i.useState)({ width: void 0, height: void 0 });
            return (
              (0, i.useEffect)(() => {
                function e() {
                  t({ width: window.innerWidth, height: window.innerHeight });
                }
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          },
          o = () => {
            let { width: e } = r();
            return (e && e >= s.oh) || !e
              ? "desktop"
              : e && e >= s.rN
              ? "tablet"
              : "phone";
          };
      },
      16795: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return i;
          },
        });
        var s = n(67294);
        let i = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, s.useEffect)(
            () => (
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("keydown", t);
              }
            ),
            [e]
          );
        };
      },
      24514: function (e, t, n) {
        "use strict";
        var s = n(85893),
          i = n(2262),
          r = n.n(i),
          o = n(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: n = "m-0",
              gap: i = "gap-0",
              padding: l = "p-0",
              children: a,
              classes: c,
            } = e,
            d = (0, o.I)();
          return (0, s.jsx)("div", {
            className: ""
              .concat("flex--".concat(d), " ")
              .concat(r().flex, " ")
              .concat(r()["flex--".concat(t)], " ")
              .concat(n, " ")
              .concat(i, " ")
              .concat(l, " ")
              .concat(c),
            children: a,
          });
        };
      },
      4345: function (e) {
        e.exports = {
          input: "Input_input__OpqTL",
          container: "Input_container__ANGD0",
          label: "Input_label__iGC50",
          error: "Input_error__0TJkW",
          errorMessage: "Input_errorMessage__uZeJs",
          incrementButton: "Input_incrementButton__GG1TV",
          incrementWrapper: "Input_incrementWrapper__54tK3",
          footer: "Input_footer__4_c8P",
          labelDropdown: "Input_labelDropdown__VvrK4",
          dropdown: "Input_dropdown__nB2Rd",
          isActive: "Input_isActive__5MNq9",
          dropdownMenu: "Input_dropdownMenu__F_XQj",
          selected: "Input_selected__tXyZU",
          dropdownItem: "Input_dropdownItem__y1w6s",
        };
      },
      45303: function (e) {
        e.exports = {
          PopoverContent: "TutorialPopover_PopoverContent__cQHL1",
          large: "TutorialPopover_large__OOfi4",
          slideDownAndFade: "TutorialPopover_slideDownAndFade__7HZjG",
          slideLeftAndFade: "TutorialPopover_slideLeftAndFade__oQPHB",
          slideUpAndFade: "TutorialPopover_slideUpAndFade__0kAaz",
          slideRightAndFade: "TutorialPopover_slideRightAndFade__U4YHn",
          PopoverArrow: "TutorialPopover_PopoverArrow__ZHtnZ",
          Fieldset: "TutorialPopover_Fieldset__vxgb_",
          message: "TutorialPopover_message__pokMA",
          title: "TutorialPopover_title__UxmRk",
          skipButton: "TutorialPopover_skipButton__3ytdX",
        };
      },
      2262: function (e) {
        e.exports = {
          flex: "Flex_flex__V5aBr",
          "flex--row": "Flex_flex--row__S_OUU",
          "flex--row-center": "Flex_flex--row-center__V0QHQ",
          "flex--row-center-nowrap": "Flex_flex--row-center-nowrap__czW4z",
          "flex--row-wrap": "Flex_flex--row-wrap__sR2z5",
          "flex--row-wrap-center": "Flex_flex--row-wrap-center__mpjSs",
          "flex--column": "Flex_flex--column__8tR2e",
          "flex--column-space-between":
            "Flex_flex--column-space-between__IDvxS",
          "flex--row-space-between": "Flex_flex--row-space-between__9sq1x",
          "flex--row-space-between-start":
            "Flex_flex--row-space-between-start__1st17",
          "flex--row-start-space-between":
            "Flex_flex--row-start-space-between__gzicg",
          "flex--row-space-around": "Flex_flex--row-space-around__fuX65",
          "flex--dropdown": "Flex_flex--dropdown__vPp_T",
          "flex--justify-end": "Flex_flex--justify-end__zozd3",
          "tabCard--bonusTwinWin": "Flex_tabCard--bonusTwinWin__cT2sW",
          "flex-stories": "Flex_flex-stories__WXhhb",
        };
      },
    },
  ]);
