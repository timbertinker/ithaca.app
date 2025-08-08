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
      (e._sentryDebugIds[t] = "c1c50806-a546-4f41-857f-5f763130231a"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c1c50806-a546-4f41-857f-5f763130231a"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [579, 7245],
    {
      92400: function (e, t, o) {
        "use strict";
        var n = o(85893),
          s = o(67294),
          i = o(37422),
          a = o(45303),
          r = o.n(a),
          _ = o(86322),
          l = o(15741),
          A = o(24514),
          T = o(67253);
        t.Z = (e) => {
          let {
              children: t,
              isOpen: o,
              side: a,
              align: c,
              offset: d,
              footer: E,
              ignoreDisabledStatus: u = !1,
            } = e,
            [I, O] = (0, s.useState)(o),
            {
              updateStep: p,
              currentStep: S,
              disableTutorial: N,
              isTutorialDisabled: h,
            } = (0, s.useContext)(l.OnboardingContext);
          return (
            (0, s.useEffect)(() => {
              O(o);
            }, [o]),
            (0, n.jsxs)(_.fC, {
              open: u ? I : !h && I,
              children: [
                (0, n.jsx)(_.xz, { asChild: !0, children: t }),
                S &&
                  (0, n.jsx)(_.VY, {
                    align: c,
                    side: a,
                    className: ""
                      .concat(r().PopoverContent, " ")
                      .concat(
                        T.R[S].isLarge && r().large,
                        " tw-relative tw-z-[9999]"
                      ),
                    sideOffset: 5,
                    alignOffset: d,
                    children: (0, n.jsxs)(n.Fragment, {
                      children: [
                        T.R[S].title &&
                          (0, n.jsx)("div", {
                            className: r().title,
                            children: T.R[S].title,
                          }),
                        (0, n.jsx)("div", {
                          className: r().message,
                          children: T.R[S].message,
                        }),
                        E ||
                          (0, n.jsxs)(A.Z, {
                            gap: "5",
                            classes: "flex-nowrap justify-end",
                            children: [
                              (0, n.jsx)("div", {
                                className: "flexGrow",
                                children:
                                  !!T.R[S].previousStep &&
                                  (0, n.jsx)("div", {
                                    className: r().skipButton,
                                    onClick: () => {
                                      p && p(T.R[S].previousStep);
                                    },
                                    children: "Back",
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                className: r().skipButton,
                                onClick: () => {
                                  N && N();
                                },
                                children: "Skip",
                              }),
                              (0, n.jsx)(i.Z, {
                                title: "Continue",
                                className: "height-28 w-fit",
                                onClick: () => {
                                  T.R[S].nextStep
                                    ? p && p(T.R[S].nextStep)
                                    : N && N();
                                },
                                children: "Continue",
                              }),
                            ],
                          }),
                        (0, n.jsx)(_.Eh, { className: r().PopoverArrow }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      },
      67253: function (e, t, o) {
        "use strict";
        o.d(t, {
          R: function () {
            return _;
          },
          P: function () {
            return s;
          },
        });
        var n,
          s,
          i = o(85893),
          a = o(25675),
          r = o.n(a);
        ((n = s || (s = {})).DEPOSIT_WITH_BALANCE_CHAIN =
          "DEPOSIT_WITH_BALANCE_CHAIN"),
          (n.DEPOSIT_WITH_BALANCE_TOKEN_WETH =
            "DEPOSIT_WITH_BALANCE_TOKEN_WETH"),
          (n.DEPOSIT_WITH_BALANCE_TOKEN_USDC =
            "DEPOSIT_WITH_BALANCE_TOKEN_USDC"),
          (n.DEPOSIT_WITH_BALANCE_AMOUNT = "DEPOSIT_WITH_BALANCE_AMOUNT"),
          (n.DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITH_BALANCE_DEPOSIT_BUTTON"),
          (n.DEPOSIT_WITHOUT_BALANCE_WETH = "DEPOSIT_WITHOUT_BALANCE_WETH"),
          (n.DEPOSIT_WITHOUT_BALANCE_USDC = "DEPOSIT_WITHOUT_BALANCE_USDC"),
          (n.DEPOSIT_WITHOUT_BALANCE_CHAIN = "DEPOSIT_WITHOUT_BALANCE_CHAIN"),
          (n.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_TOKEN"),
          (n.DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN =
            "DEPOSIT_WITHOUT_BALANCE_CONVERTED_TOKEN"),
          (n.DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON =
            "DEPOSIT_WITHOUT_BALANCE_DEPOSIT_BUTTON"),
          (n.WITHDRAWAL_TRANSACTION_HISTORY_TAB =
            "WITHDRAWAL_TRANSACTION_HISTORY_TAB"),
          (n.WITHDRAWAL_RELEASE_FUNDS = "WITHDRAWAL_RELEASE_FUNDS"),
          (n.SHOW_PAYOFF_AT_EXPIRY = "SHOW_PAYOFF_AT_EXPIRY"),
          (n.SHOW_EXPIRY_FILTER = "SHOW_EXPIRY_FILTER"),
          (n.DEPOSIT_FUNDS = "DEPOSIT_FUNDS"),
          (n.SUBMIT_TO_AUCTION = "SUBMIT_TO_AUCTION"),
          (n.WRONG_NETWORK = "WRONG_NETWORK"),
          (n.ITHACA_GPT_INTRO = "ITHACA_GPT_INTRO");
        let _ = {
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
            message: (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit USDC on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 3" }),
                    " - If you have $USDC.e (Bridged USDC) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, i.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, i.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, i.jsx)("li", {
                      children: 'In the "You pay" input field select "USDC.e"',
                    }),
                    (0, i.jsx)("li", {
                      children:
                        'In the "You receive" input field select "USDC"',
                    }),
                    (0, i.jsx)(r(), {
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
                    (0, i.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, i.jsx)("li", {
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
            message: (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 1" }),
                    " - You can also choose a different chain where you have funds to deposit directly within Ithaca.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 2" }),
                    " - You can also deposit WETH on Arbitrum to your wallet via most Centralized Exchanges.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, i.jsx)("b", { children: "Option 3" }),
                    " - If you have $ETH (not $WETH) on Arbitrum in your wallet follow the steps below:",
                  ],
                }),
                (0, i.jsxs)("ol", {
                  type: "1",
                  children: [
                    (0, i.jsx)("li", {
                      children:
                        "Go to https://app.uniswap.org/swap?chain=arbitrum",
                    }),
                    (0, i.jsx)("li", {
                      children: 'In the "You pay" input field select "ETH"',
                    }),
                    (0, i.jsx)("li", {
                      children:
                        'In the "You receive" input field select "WETH"',
                    }),
                    (0, i.jsx)(r(), {
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
                    (0, i.jsx)("li", {
                      children:
                        "Click swap and confirm transaction in your wallet",
                    }),
                    (0, i.jsx)("li", {
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
            message: (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  className: "mb-4",
                  children:
                    'Once funds are ready to be released, the ‘Release’ button will become activated and show in green. Once ready, press the "Release" button to transfer funds to your wallet once the button activates.',
                }),
                (0, i.jsx)("div", {
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
      16795: function (e, t, o) {
        "use strict";
        o.d(t, {
          M: function () {
            return s;
          },
        });
        var n = o(67294);
        let s = (e) => {
          let t = (t) => {
            "Escape" === t.key && e();
          };
          (0, n.useEffect)(
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
      24514: function (e, t, o) {
        "use strict";
        var n = o(85893),
          s = o(2262),
          i = o.n(s),
          a = o(13812);
        t.Z = (e) => {
          let {
              direction: t = "row",
              margin: o = "m-0",
              gap: s = "gap-0",
              padding: r = "p-0",
              children: _,
              classes: l,
            } = e,
            A = (0, a.I)();
          return (0, n.jsx)("div", {
            className: ""
              .concat("flex--".concat(A), " ")
              .concat(i().flex, " ")
              .concat(i()["flex--".concat(t)], " ")
              .concat(o, " ")
              .concat(s, " ")
              .concat(r, " ")
              .concat(l),
            children: _,
          });
        };
      },
      15741: function (e, t, o) {
        "use strict";
        o.r(t),
          o.d(t, {
            OnboardingContext: function () {
              return a;
            },
            OnboardingProvider: function () {
              return r;
            },
          });
        var n = o(85893),
          s = o(67294),
          i = o(59731);
        let a = (0, s.createContext)({
            currentStep: void 0,
            isTutorialDisabled: !1,
          }),
          r = (e) => {
            let { children: t } = e,
              {
                currentTutorialStep: o,
                setCurrentTutorialStep: r,
                setTutorialDisabled: _,
                tutorialDisabled: l,
              } = (0, i.NV)(),
              [A, T] = (0, s.useState)(o),
              [c, d] = (0, s.useState)(l);
            return (
              (0, s.useEffect)(() => {
                d(l);
              }, [l]),
              (0, n.jsx)(a.Provider, {
                value: {
                  currentStep: A,
                  isTutorialDisabled: c,
                  updateStep: (e) => {
                    T(e), r(e);
                  },
                  disableTutorial: () => {
                    _(), d(!0);
                  },
                },
                children: t,
              })
            );
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
