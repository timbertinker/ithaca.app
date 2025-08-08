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
      (t._sentryDebugIds[e] = "341d63ee-5af6-4eaf-af3e-34adecf191a0"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-341d63ee-5af6-4eaf-af3e-34adecf191a0"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6988],
  {
    77615: function (t, e, a) {
      var r = a(85893),
        s = a(40645),
        n = a.n(s),
        o = a(67294),
        l = a(11163),
        i = a(70202),
        x = a(25675),
        d = a.n(x),
        w = a(48593),
        m = a(29528),
        c = a(27426);
      e.Z = (t) => {
        let {
            featuredAgent: e = {
              name: "Stratos Agent",
              description:
                "Ancient warrior AI with divine tactical prowess and celestial battle strategies",
              features: [
                "Divine Tactical Analysis",
                "Celestial Battle Strategies",
                "Ancient Wisdom Protocols",
              ],
              comingSoon: !1,
            },
            showLearnMoreButton: a = !0,
            showDepositForm: s = !1,
            depositProps: x,
          } = t,
          p = (0, l.useRouter)(),
          [f, g] = (0, o.useState)(0),
          [u, b] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let t = () => g(window.scrollY);
          window.addEventListener("scroll", t);
          let e = setTimeout(() => b(!0), 300);
          return () => {
            window.removeEventListener("scroll", t), clearTimeout(e);
          };
        }, []);
        let h = 0.5 * f;
        return (0, r.jsxs)("div", {
          className:
            "jsx-eea9a4bd651f379 tw-from-slate-900/98 tw-relative tw-min-h-[400px] tw-overflow-hidden tw-bg-gradient-to-br tw-via-slate-800/95 tw-to-emerald-900/90",
          children: [
            (0, r.jsxs)("div", {
              style: { transform: "translateY(".concat(h, "px)") },
              className:
                "jsx-eea9a4bd651f379 tw-absolute tw-inset-0 tw-opacity-20",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "jsx-eea9a4bd651f379 tw-absolute tw-left-10 tw-top-10 tw-h-32 tw-w-32 tw-animate-pulse tw-rounded-full tw-bg-gradient-to-r tw-from-emerald-400 tw-to-green-500 tw-blur-xl",
                }),
                (0, r.jsx)("div", {
                  className:
                    "jsx-eea9a4bd651f379 tw-absolute tw-right-20 tw-top-40 tw-h-24 tw-w-24 tw-animate-bounce tw-rounded-full tw-bg-gradient-to-r tw-from-teal-400 tw-to-emerald-500 tw-blur-lg",
                }),
                (0, r.jsx)("div", {
                  className:
                    "jsx-eea9a4bd651f379 tw-absolute tw-bottom-20 tw-left-1/3 tw-h-40 tw-w-40 tw-animate-pulse tw-rounded-full tw-bg-gradient-to-r tw-from-green-400 tw-to-teal-500 tw-blur-2xl",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              style: {
                transform: "translateY(".concat(0.3 * h, "px)"),
                backgroundImage:
                  "\n            linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px),\n            linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)\n          ",
                backgroundSize: "50px 50px",
              },
              className:
                "jsx-eea9a4bd651f379 tw-opacity-12 tw-absolute tw-inset-0",
            }),
            (0, r.jsx)("div", {
              style: {
                backgroundImage: "url('/images/agents/stratos-army.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                transform: "scale(1.8)",
                transformOrigin: "center top",
              },
              className:
                "jsx-eea9a4bd651f379 tw-absolute tw-inset-0 tw-opacity-20",
            }),
            (0, r.jsx)("div", {
              className:
                "jsx-eea9a4bd651f379 tw-relative tw-z-0 tw-flex tw-min-h-[400px] tw-items-center tw-px-6 lg:tw-px-8",
              children: (0, r.jsx)("div", {
                className:
                  "jsx-eea9a4bd651f379 tw-mx-auto tw-w-full md:tw-max-w-2xl lg:tw-max-w-6xl",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-eea9a4bd651f379 tw-grid tw-grid-cols-1 tw-items-center tw-gap-8 lg:tw-grid-cols-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-eea9a4bd651f379 " +
                        "tw-relative tw-z-30 tw-mr-12 tw-space-y-6 tw-transition-all tw-duration-1000 tw-ease-out ".concat(
                          u
                            ? "tw-translate-x-0 tw-opacity-100"
                            : "tw-translate-x-[-50px] tw-opacity-0"
                        ),
                      children: [
                        (0, r.jsx)("div", {
                          className: "jsx-eea9a4bd651f379 tw-space-y-3",
                          children: (0, r.jsx)("h1", {
                            className:
                              "jsx-eea9a4bd651f379 tw-text-5xl tw-font-bold tw-leading-tight tw-text-white lg:tw-text-7xl",
                            children: (0, r.jsx)("span", {
                              className:
                                "jsx-eea9a4bd651f379 tw-bg-gradient-to-r tw-from-emerald-400 tw-via-green-400 tw-to-teal-400 tw-bg-clip-text tw-text-transparent",
                              children: e.name,
                            }),
                          }),
                        }),
                        e.features &&
                          e.features.length > 0 &&
                          (0, r.jsx)("div", {
                            style: { transitionDelay: "400ms" },
                            className:
                              "jsx-eea9a4bd651f379 " +
                              "tw-transition-all tw-duration-1000 tw-ease-out ".concat(
                                u
                                  ? "tw-translate-y-0 tw-opacity-100"
                                  : "tw-translate-y-[20px] tw-opacity-0"
                              ),
                            children: (0, r.jsx)("div", {
                              className: "jsx-eea9a4bd651f379 tw-space-y-2",
                              children: e.features.map((t, e) =>
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "jsx-eea9a4bd651f379 tw-flex tw-items-center tw-gap-3",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "jsx-eea9a4bd651f379 tw-h-2 tw-w-2 tw-flex-shrink-0 tw-rounded-full tw-bg-gradient-to-r tw-from-emerald-400 tw-to-green-400",
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "jsx-eea9a4bd651f379 tw-text-base tw-leading-relaxed tw-text-gray-300",
                                        children: t,
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          }),
                        (0, r.jsx)("div", {
                          style: { transitionDelay: "600ms" },
                          className:
                            "jsx-eea9a4bd651f379 " +
                            "tw-transition-all tw-duration-1000 tw-ease-out ".concat(
                              u
                                ? "tw-translate-y-0 tw-opacity-100"
                                : "tw-translate-y-[20px] tw-opacity-0"
                            ),
                          children:
                            s && x
                              ? (0, r.jsx)("div", {
                                  className: "jsx-eea9a4bd651f379 tw-space-y-4",
                                  children: (0, r.jsxs)("div", {
                                    style: { backgroundColor: "#1e293b" },
                                    className:
                                      "jsx-eea9a4bd651f379 tw-relative tw-z-50 tw-mb-8 tw-mr-8 tw-rounded-xl tw-border tw-border-emerald-500/30 tw-bg-slate-800 tw-p-5",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "jsx-eea9a4bd651f379 tw-mb-3",
                                        children: (0, r.jsx)("h3", {
                                          className:
                                            "jsx-eea9a4bd651f379 tw-text-lg tw-font-semibold tw-text-white",
                                          children: "Deploy on Stratos",
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "jsx-eea9a4bd651f379 tw-relative tw-z-50 tw-space-y-4",
                                        children: (0, r.jsx)(m.x, {
                                          text: "Deposit",
                                          description:
                                            "Deposit USDC on Arbitrum. Swarm trades for you.",
                                          balance: {
                                            amount: x.usdcBalance,
                                            currency: "USDC",
                                            decimals: 6,
                                          },
                                          tokenIcon: {
                                            src: c.Z.src,
                                            alt: "USDC",
                                          },
                                          onSubmit: x.onSubmit,
                                          isTransactionPending:
                                            x.isTransactionPending,
                                          isTransactionCompleted:
                                            x.isTransactionCompleted,
                                          setIsTransactionCompleted:
                                            x.setIsTransactionCompleted,
                                          setTransactionHash:
                                            x.setTransactionHash,
                                          transactionHash: x.transactionHash,
                                          tokenSymbol: "USDC",
                                          type: "deposit",
                                          currentAllowance: x.usdcAllowance,
                                          refresh: x.refresh,
                                          disabled: x.disabled,
                                          amount: x.depositAmount,
                                          setAmount: x.setDepositAmount,
                                        }),
                                      }),
                                    ],
                                  }),
                                })
                              : (0, r.jsx)("div", {
                                  className:
                                    "jsx-eea9a4bd651f379 tw-inline-block",
                                  children:
                                    a &&
                                    (0, r.jsx)(w.Z, {
                                      title: "Learn More",
                                      variant: "primary",
                                      onClick: () => p.push("/agents/stratos"),
                                      children: (0, r.jsx)("span", {
                                        className: "jsx-eea9a4bd651f379",
                                        children: "Learn More",
                                      }),
                                    }),
                                }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      style: { transitionDelay: "400ms" },
                      className:
                        "jsx-eea9a4bd651f379 " +
                        "tw-duration-1200 tw-relative tw-transition-all tw-ease-out tw-overflow-hidden ".concat(
                          u
                            ? "tw-translate-x-0 tw-opacity-100"
                            : "tw-translate-x-[50px] tw-opacity-0"
                        ),
                      children: (0, r.jsxs)("div", {
                        className:
                          "jsx-eea9a4bd651f379 tw-space-y-6 tw-overflow-hidden",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-eea9a4bd651f379 tw-relative tw-mx-auto tw-aspect-square tw-max-w-xs tw-overflow-hidden tw--z-10",
                            children: [
                              (0, r.jsx)("div", {
                                style: { animationDuration: "20s" },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-inset-0 tw-animate-spin tw-rounded-full tw-border-2 tw-border-emerald-500/40 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animationDuration: "15s",
                                  animationDirection: "reverse",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-inset-4 tw-animate-spin tw-rounded-full tw-border-2 tw-border-green-500/50 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: { animationDuration: "10s" },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-inset-8 tw-animate-spin tw-rounded-full tw-border tw-border-teal-400/60 tw--z-10",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-inset-10 tw-overflow-hidden tw-rounded-full tw-shadow-2xl tw-shadow-emerald-500/30 tw-ring-4 tw-ring-emerald-500/50 tw--z-10",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-eea9a4bd651f379 tw-relative tw-h-full tw-w-full tw--z-10",
                                    children: (0, r.jsx)(d(), {
                                      src: "/images/agents/stratos.jpg",
                                      alt: "Stratos Agent",
                                      fill: !0,
                                      className: "tw-object-cover tw--z-10",
                                      style: {
                                        transform: "scale(1.1)",
                                        transformOrigin: "center center",
                                      },
                                      priority: !0,
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-eea9a4bd651f379 tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-emerald-900/20 tw-via-transparent tw-to-slate-900/15 tw--z-10",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animationDelay: "0s",
                                  animation:
                                    "bounce 2s infinite, orbit-1 8s linear infinite",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-right-8 tw-top-8 tw-h-3 tw-w-3 tw-animate-bounce tw-rounded-full tw-bg-emerald-400 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animationDelay: "1s",
                                  animation:
                                    "pulse 1.5s ease-in-out infinite, orbit-2 12s linear infinite reverse",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-bottom-12 tw-left-6 tw-h-2 tw-w-2 tw-animate-pulse tw-rounded-full tw-bg-green-400 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animationDelay: "2s",
                                  animation:
                                    "bounce 1.8s infinite, orbit-3 15s linear infinite",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-left-12 tw-top-28 tw-h-4 tw-w-4 tw-rounded-full tw-bg-teal-400 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animation:
                                    "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite, float-1 6s ease-in-out infinite",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-right-20 tw-top-16 tw-h-1 tw-w-1 tw-rounded-full tw-bg-emerald-300 tw--z-10",
                              }),
                              (0, r.jsx)("div", {
                                style: {
                                  animation:
                                    "pulse 2.5s ease-in-out infinite, float-2 9s ease-in-out infinite reverse",
                                },
                                className:
                                  "jsx-eea9a4bd651f379 tw-absolute tw-bottom-20 tw-right-12 tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-green-300 tw--z-10",
                              }),
                            ],
                          }),
                          a &&
                            s &&
                            (0, r.jsx)("div", {
                              className: "jsx-eea9a4bd651f379 tw-text-center",
                              children: (0, r.jsxs)("button", {
                                onClick: () => p.push("/agents/stratos"),
                                className:
                                  "jsx-eea9a4bd651f379 tw-group tw-inline-flex tw-items-center tw-gap-2 tw-rounded-lg tw-border tw-border-emerald-500/40 tw-bg-gradient-to-r tw-from-emerald-500/10 tw-to-green-500/10 tw-px-4 tw-py-2.5 tw-text-base tw-font-medium tw-text-emerald-300 tw-transition-all tw-duration-200 hover:tw-border-emerald-400/60 hover:tw-from-emerald-500/20 hover:tw-to-green-500/20 hover:tw-text-emerald-200",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "jsx-eea9a4bd651f379",
                                    children: "Learn More About Stratos",
                                  }),
                                  (0, r.jsx)(i.Z, {
                                    className:
                                      "tw-h-4 tw-w-4 tw-transition-transform tw-duration-200 group-hover:tw-translate-x-0.5",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "jsx-eea9a4bd651f379 tw-absolute tw-bottom-0 tw-left-1/4 tw-right-1/4 tw-h-16 tw-bg-gradient-to-t tw-from-black/30 tw-to-transparent",
            }),
            (0, r.jsx)(n(), {
              id: "eea9a4bd651f379",
              children:
                "@-webkit-keyframes orbit-1{0%{-webkit-transform:rotate(0deg)translatex(120px)rotate(0deg);transform:rotate(0deg)translatex(120px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(120px)rotate(-360deg);transform:rotate(360deg)translatex(120px)rotate(-360deg)}}@-moz-keyframes orbit-1{0%{-moz-transform:rotate(0deg)translatex(120px)rotate(0deg);transform:rotate(0deg)translatex(120px)rotate(0deg)}100%{-moz-transform:rotate(360deg)translatex(120px)rotate(-360deg);transform:rotate(360deg)translatex(120px)rotate(-360deg)}}@-o-keyframes orbit-1{0%{-o-transform:rotate(0deg)translatex(120px)rotate(0deg);transform:rotate(0deg)translatex(120px)rotate(0deg)}100%{-o-transform:rotate(360deg)translatex(120px)rotate(-360deg);transform:rotate(360deg)translatex(120px)rotate(-360deg)}}@keyframes orbit-1{0%{-webkit-transform:rotate(0deg)translatex(120px)rotate(0deg);-moz-transform:rotate(0deg)translatex(120px)rotate(0deg);-o-transform:rotate(0deg)translatex(120px)rotate(0deg);transform:rotate(0deg)translatex(120px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(120px)rotate(-360deg);-moz-transform:rotate(360deg)translatex(120px)rotate(-360deg);-o-transform:rotate(360deg)translatex(120px)rotate(-360deg);transform:rotate(360deg)translatex(120px)rotate(-360deg)}}@-webkit-keyframes orbit-2{0%{-webkit-transform:rotate(0deg)translatex(140px)rotate(0deg);transform:rotate(0deg)translatex(140px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(140px)rotate(-360deg);transform:rotate(360deg)translatex(140px)rotate(-360deg)}}@-moz-keyframes orbit-2{0%{-moz-transform:rotate(0deg)translatex(140px)rotate(0deg);transform:rotate(0deg)translatex(140px)rotate(0deg)}100%{-moz-transform:rotate(360deg)translatex(140px)rotate(-360deg);transform:rotate(360deg)translatex(140px)rotate(-360deg)}}@-o-keyframes orbit-2{0%{-o-transform:rotate(0deg)translatex(140px)rotate(0deg);transform:rotate(0deg)translatex(140px)rotate(0deg)}100%{-o-transform:rotate(360deg)translatex(140px)rotate(-360deg);transform:rotate(360deg)translatex(140px)rotate(-360deg)}}@keyframes orbit-2{0%{-webkit-transform:rotate(0deg)translatex(140px)rotate(0deg);-moz-transform:rotate(0deg)translatex(140px)rotate(0deg);-o-transform:rotate(0deg)translatex(140px)rotate(0deg);transform:rotate(0deg)translatex(140px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(140px)rotate(-360deg);-moz-transform:rotate(360deg)translatex(140px)rotate(-360deg);-o-transform:rotate(360deg)translatex(140px)rotate(-360deg);transform:rotate(360deg)translatex(140px)rotate(-360deg)}}@-webkit-keyframes orbit-3{0%{-webkit-transform:rotate(0deg)translatex(110px)rotate(0deg);transform:rotate(0deg)translatex(110px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(110px)rotate(-360deg);transform:rotate(360deg)translatex(110px)rotate(-360deg)}}@-moz-keyframes orbit-3{0%{-moz-transform:rotate(0deg)translatex(110px)rotate(0deg);transform:rotate(0deg)translatex(110px)rotate(0deg)}100%{-moz-transform:rotate(360deg)translatex(110px)rotate(-360deg);transform:rotate(360deg)translatex(110px)rotate(-360deg)}}@-o-keyframes orbit-3{0%{-o-transform:rotate(0deg)translatex(110px)rotate(0deg);transform:rotate(0deg)translatex(110px)rotate(0deg)}100%{-o-transform:rotate(360deg)translatex(110px)rotate(-360deg);transform:rotate(360deg)translatex(110px)rotate(-360deg)}}@keyframes orbit-3{0%{-webkit-transform:rotate(0deg)translatex(110px)rotate(0deg);-moz-transform:rotate(0deg)translatex(110px)rotate(0deg);-o-transform:rotate(0deg)translatex(110px)rotate(0deg);transform:rotate(0deg)translatex(110px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(110px)rotate(-360deg);-moz-transform:rotate(360deg)translatex(110px)rotate(-360deg);-o-transform:rotate(360deg)translatex(110px)rotate(-360deg);transform:rotate(360deg)translatex(110px)rotate(-360deg)}}@-webkit-keyframes float-1{0%,100%{-webkit-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}25%{-webkit-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}50%{-webkit-transform:translatey(0px)translatex(10px);transform:translatey(0px)translatex(10px)}75%{-webkit-transform:translatey(10px)translatex(5px);transform:translatey(10px)translatex(5px)}}@-moz-keyframes float-1{0%,100%{-moz-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}25%{-moz-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}50%{-moz-transform:translatey(0px)translatex(10px);transform:translatey(0px)translatex(10px)}75%{-moz-transform:translatey(10px)translatex(5px);transform:translatey(10px)translatex(5px)}}@-o-keyframes float-1{0%,100%{-o-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}25%{-o-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}50%{-o-transform:translatey(0px)translatex(10px);transform:translatey(0px)translatex(10px)}75%{-o-transform:translatey(10px)translatex(5px);transform:translatey(10px)translatex(5px)}}@keyframes float-1{0%,100%{-webkit-transform:translatey(0px)translatex(0px);-moz-transform:translatey(0px)translatex(0px);-o-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}25%{-webkit-transform:translatey(-10px)translatex(5px);-moz-transform:translatey(-10px)translatex(5px);-o-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}50%{-webkit-transform:translatey(0px)translatex(10px);-moz-transform:translatey(0px)translatex(10px);-o-transform:translatey(0px)translatex(10px);transform:translatey(0px)translatex(10px)}75%{-webkit-transform:translatey(10px)translatex(5px);-moz-transform:translatey(10px)translatex(5px);-o-transform:translatey(10px)translatex(5px);transform:translatey(10px)translatex(5px)}}@-webkit-keyframes float-2{0%,100%{-webkit-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}33%{-webkit-transform:translatey(-15px)translatex(-5px);transform:translatey(-15px)translatex(-5px)}66%{-webkit-transform:translatey(5px)translatex(-10px);transform:translatey(5px)translatex(-10px)}}@-moz-keyframes float-2{0%,100%{-moz-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}33%{-moz-transform:translatey(-15px)translatex(-5px);transform:translatey(-15px)translatex(-5px)}66%{-moz-transform:translatey(5px)translatex(-10px);transform:translatey(5px)translatex(-10px)}}@-o-keyframes float-2{0%,100%{-o-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}33%{-o-transform:translatey(-15px)translatex(-5px);transform:translatey(-15px)translatex(-5px)}66%{-o-transform:translatey(5px)translatex(-10px);transform:translatey(5px)translatex(-10px)}}@keyframes float-2{0%,100%{-webkit-transform:translatey(0px)translatex(0px);-moz-transform:translatey(0px)translatex(0px);-o-transform:translatey(0px)translatex(0px);transform:translatey(0px)translatex(0px)}33%{-webkit-transform:translatey(-15px)translatex(-5px);-moz-transform:translatey(-15px)translatex(-5px);-o-transform:translatey(-15px)translatex(-5px);transform:translatey(-15px)translatex(-5px)}66%{-webkit-transform:translatey(5px)translatex(-10px);-moz-transform:translatey(5px)translatex(-10px);-o-transform:translatey(5px)translatex(-10px);transform:translatey(5px)translatex(-10px)}}",
            }),
          ],
        });
      };
    },
    21322: function (t, e, a) {
      var r = a(85893),
        s = a(45113),
        n = a(46464),
        o = a(64520),
        l = a(67017),
        i = a(25615),
        x = a(88793),
        d = a(6008),
        w = a(55400);
      e.Z = (t) => {
        let {
          chartData: e,
          isPreview: a,
          isPositive: m,
          timeRange: c,
          chartTrend: p,
          getXAxisInterval: f,
          formatXAxisTick: g,
          config: u,
        } = t;
        return (0, r.jsx)(n.h, {
          width: null == u ? void 0 : u.width,
          height: null == u ? void 0 : u.height,
          children: (0, r.jsxs)(o.T, {
            data: e,
            margin: {
              top: a ? 4 : 24,
              right: 0,
              bottom: a ? 4 : -30,
              left: -56,
            },
            children: [
              (0, r.jsxs)("defs", {
                children: [
                  (0, r.jsxs)("linearGradient", {
                    id: "positive-gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [
                      (0, r.jsx)("stop", {
                        offset: "0%",
                        stopColor: "#22C55E",
                        stopOpacity: a ? 0.2 : 1,
                      }),
                      (0, r.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#060E13",
                        stopOpacity: a ? 0.1 : 1,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("linearGradient", {
                    id: "negative-gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [
                      (0, r.jsx)("stop", {
                        offset: "0%",
                        stopColor: "#EF4444",
                        stopOpacity: a ? 0.2 : 1,
                      }),
                      (0, r.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#060E13",
                        stopOpacity: a ? 0.1 : 1,
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l.q, {
                vertical: !1,
                horizontal: !a,
                strokeDasharray: "3 3",
                strokeOpacity: 0.2,
              }),
              (0, r.jsx)(i.K, {
                dataKey: "time",
                axisLine: !1,
                tickLine: !1,
                tick: !a && { fontSize: 10, fill: "#666" },
                interval: f,
                tickFormatter: g,
                height: a ? 0 : 30,
              }),
              (0, r.jsx)(x.B, {
                dataKey: "price",
                axisLine: !1,
                tickLine: !1,
                domain: [(t) => t - 0.5, (t) => t + 0.5],
                tickFormatter: (t) => "".concat(t.toFixed(2), "%"),
                tick:
                  !a &&
                  ((t) => {
                    let { x: e, y: a, payload: s } = t;
                    return (0, r.jsx)("text", {
                      x: e + 10,
                      y: a - 6,
                      fill: "#666",
                      fontSize: 10,
                      children: "".concat(s.value.toFixed(2), "%"),
                    });
                  }),
                width: a ? 0 : void 0,
              }),
              (0, r.jsx)(d.u, {
                content: (0, r.jsx)(s.W, { timeRange: c, chartTrend: p }),
              }),
              (0, r.jsx)(w.u, {
                type: "monotone",
                dataKey: "price",
                stroke: m ? "#5EE192" : "#EF4444",
                strokeWidth: 2,
                fill: m ? "url(#positive-gradient)" : "url(#negative-gradient)",
                isAnimationActive: !1,
              }),
            ],
          }),
        });
      };
    },
    45113: function (t, e, a) {
      a.d(e, {
        W: function () {
          return w;
        },
        r: function () {
          return m;
        },
      });
      var r = a(85893),
        s = a(93967),
        n = a.n(s),
        o = a(67294),
        l = a(21322),
        i = a(37422);
      let x = { hourly: [], daily: [] },
        d = (t, e) => {
          let [a, r] = o.useState([]),
            s = o.useMemo(
              () => (a.length > 0 ? a[a.length - 1].price : 100),
              [a]
            ),
            n = o.useCallback(
              (t) =>
                t
                  ? {
                      hourly: Array.isArray(t.hourly)
                        ? t.hourly.map((t) => ({ ...t, price: 100 * t.price }))
                        : [],
                      daily: Array.isArray(t.daily)
                        ? t.daily.map((t) => ({ ...t, price: 100 * t.price }))
                        : [],
                    }
                  : x,
              []
            ),
            l = o.useCallback((t) => {
              if (t.length <= 60) return t;
              let e = Math.ceil(t.length / 60),
                a = [];
              a.push(t[0]);
              for (let r = e; r < t.length - e; r += e) a.push(t[r]);
              return a.push(t[t.length - 1]), a;
            }, []),
            i = o.useCallback(
              function () {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : x,
                  a = [],
                  r = Array.isArray(null == t ? void 0 : t.hourly)
                    ? t.hourly
                    : [],
                  s = Array.isArray(null == t ? void 0 : t.daily)
                    ? t.daily
                    : [];
                if (0 === r.length && 0 === s.length) return [];
                switch (e) {
                  case "1D":
                    a = r.slice(-24);
                    break;
                  case "7D":
                    a = r;
                    break;
                  case "30D":
                  default:
                    a = s.slice(-30);
                    break;
                  case "1Y":
                  case "All":
                    a = s;
                }
                return l(a);
              },
              [e, l]
            ),
            d = o.useMemo(() => {
              switch (e) {
                case "1D":
                  return 3;
                case "7D":
                  return Math.ceil(a.length / 7);
                case "30D":
                  return 6;
                case "1Y":
                  return Math.ceil(a.length / 12);
                case "All":
                  return Math.ceil(a.length / 6);
                default:
                  return 1;
              }
            }, [a.length, e]),
            w = o.useCallback(
              (t) => {
                let a = String(t || ""),
                  r = new Date(
                    "string" == typeof a && a.endsWith("Z")
                      ? a
                      : "".concat(a, "Z")
                  );
                switch (e) {
                  case "1D":
                    return r.toLocaleTimeString(void 0, { hour: "numeric" });
                  case "7D":
                    return r.toLocaleDateString(void 0, { weekday: "short" });
                  case "30D":
                    return r.toLocaleDateString(void 0, {
                      month: "short",
                      day: "numeric",
                    });
                  case "1Y":
                    return r.toLocaleDateString(void 0, { month: "short" });
                  case "All":
                    return r.toLocaleDateString(void 0, {
                      month: "short",
                      year: "2-digit",
                    });
                  default:
                    return r.toLocaleDateString();
                }
              },
              [e]
            );
          return (
            o.useEffect(() => {
              t ? r(i(n(t))) : r([]);
            }, [t, e, i, n, l]),
            {
              chartData: a,
              currentPrice: s,
              getXAxisInterval: d,
              formatXAxisTick: w,
            }
          );
        },
        w = (t) => {
          let {
            active: e,
            payload: a,
            label: s,
            timeRange: n,
            chartTrend: o,
          } = t;
          if (e && a && a.length) {
            let t;
            let e = String(s || ""),
              l = new Date(
                "string" == typeof e && e.endsWith("Z") ? e : "".concat(e, "Z")
              );
            return (
              (t =
                "30D" === n || "1Y" === n || "All" === n
                  ? l.toLocaleDateString()
                  : l.toLocaleString(void 0, {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: !0,
                    })),
              (0, r.jsxs)("div", {
                className:
                  "tw-rounded tw-border tw-border-white/10 tw-bg-gray-900 tw-p-2",
                children: [
                  (0, r.jsx)("p", { className: "tw-text-sm", children: t }),
                  (0, r.jsx)("p", {
                    className: "tw-text-sm ".concat(
                      "positive" === o
                        ? "tw-text-ithaca-green-40"
                        : "tw-text-red-500"
                    ),
                    children: "NAV: ".concat(a[0].value.toFixed(2)),
                  }),
                ],
              })
            );
          }
          return null;
        },
        m = (t) => {
          let { prices: e, isLoadingPrices: a, isPreview: s } = t,
            [x, w] = (0, o.useState)("All"),
            {
              chartData: m,
              currentPrice: c,
              getXAxisInterval: p,
              formatXAxisTick: f,
            } = d(e, x),
            g = (() => {
              if (m.length < 2) return "0";
              let t = m[0].price,
                e = m[m.length - 1].price;
              return 0 === t ? "0" : (((e - t) / t) * 100).toFixed(2);
            })(),
            u = parseFloat(g) >= 0,
            b = (0, o.useMemo)(() => {
              var t, e;
              if (m.length < 2) return "positive";
              let a =
                (null === (t = m[0]) || void 0 === t ? void 0 : t.price) || 0;
              return ((null === (e = m[m.length - 1]) || void 0 === e
                ? void 0
                : e.price) || 0) >= a
                ? "positive"
                : "negative";
            }, [m]),
            h =
              (null == e ? void 0 : e.nav_return) !== void 0
                ? "".concat((100 * e.nav_return).toFixed(1), "%")
                : "-",
            y = s
              ? "APY ".concat(h, " | NAV ").concat(c.toFixed(2))
              : "All Time",
            v = "All" === x ? y : x;
          return a || !m || 0 === m.length
            ? null
            : (0, r.jsxs)("div", {
                className: n()(
                  "tw-flex tw-flex-col tw-rounded-xl tw-pb-2 tw-pt-6",
                  { "tw-border tw-border-white/10": !s }
                ),
                children: [
                  (0, r.jsxs)("div", {
                    className: n()(
                      "tw-mb-4 tw-flex tw-items-center tw-justify-between",
                      { "tw-px-6": !s, "tw-hidden": s }
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: "tw-text-xl tw-leading-6",
                        children: "NAV",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "tw-flex tw-rounded-[4px] tw-bg-[#1E1E1E] tw-p-0.5",
                        children: ["1D", "7D", "30D", "1Y", "All"].map((t) =>
                          (0, r.jsx)(
                            i.Z,
                            {
                              size: "sm",
                              variant: "custom",
                              title: "Show ".concat(
                                "All" === t
                                  ? "Return on NAV since inception"
                                  : t,
                                " data"
                              ),
                              onClick: () => w(t),
                              className: n()(
                                "tw-flex tw-h-[24px] tw-min-w-[32px] tw-items-center tw-justify-center tw-rounded-[4px] tw-px-2 tw-text-xs tw-transition-all hover:tw-bg-transparent hover:tw-text-white",
                                x === t
                                  ? "tw-bg-[#2C2C2C] tw-text-white"
                                  : "tw-bg-transparent tw-text-[#666] "
                              ),
                              children: t,
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "tw-mb-4 tw-space-y-2 tw-px-6",
                    children: a
                      ? (0, r.jsx)("div", {
                          className:
                            "tw-py-4 tw-text-center tw-text-ithaca-gray-20",
                        })
                      : 0 === m.length
                      ? (0, r.jsx)("div", {
                          className:
                            "tw-py-4 tw-text-center tw-text-ithaca-gray-20",
                          children: "No price data available",
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            !s &&
                              (0, r.jsx)("div", {
                                className: "tw-text-[30px] tw-font-bold",
                                children: c.toFixed(2),
                              }),
                            (0, r.jsxs)("div", {
                              className: "tw-flex tw-items-center tw-gap-2",
                              children: [
                                s ||
                                  (0, r.jsxs)("span", {
                                    className: u
                                      ? "tw-text-sm tw-text-ithaca-green-40"
                                      : "tw-text-sm tw-text-red-500",
                                    children: [
                                      u ? "+" : "",
                                      parseFloat(g).toFixed(2),
                                      "%",
                                    ],
                                  }),
                                (0, r.jsxs)("span", {
                                  className:
                                    "tw-text-sm tw-text-ithaca-gray-500",
                                  children: ["All" !== x && "Last", " ", v],
                                }),
                              ],
                            }),
                          ],
                        }),
                  }),
                  (0, r.jsx)("div", {
                    className: n()("tw-max-w-full tw-grow", {
                      "tw-h-64 tw-min-w-64": !s,
                      "tw-h-24": s,
                    }),
                    children: (0, r.jsx)(l.Z, {
                      chartData: m,
                      isPreview: s,
                      isPositive: u,
                      timeRange: x,
                      chartTrend: b,
                      getXAxisInterval: p,
                      formatXAxisTick: f,
                    }),
                  }),
                ],
              });
        };
    },
    68964: function (t, e, a) {
      a.d(e, {
        K: function () {
          return l;
        },
      });
      var r = a(85893),
        s = a(93967),
        n = a.n(s);
      let o = [
          { color: "tw-bg-[#6AF19F]", label: 1 },
          { color: "tw-bg-[#86D091]", label: 2 },
          { color: "tw-bg-[#95BD8A]", label: 3 },
          { color: "tw-bg-[#ACA280]", label: 4 },
          { color: "tw-bg-[#BB9078]", label: 5 },
          { color: "tw-bg-[#D3746D]", label: 6 },
          { color: "tw-bg-[#E45F64]", label: 7 },
          { color: "tw-bg-[#FD5366]", label: 8 },
          { color: "tw-bg-[#FF3F57]", label: 9 },
          { color: "tw-bg-[#F44450]", label: 10 },
        ],
        l = (t) => {
          var e;
          let { leftLabel: a, rightLabel: s, value: l } = t,
            i = null == l ? 0 : Math.min(Math.max(Math.round(l), 1), 10);
          return (0, r.jsx)("div", {
            className: "tw-w-full tw-space-y-1",
            title:
              null !== (e = null == l ? void 0 : l.toString()) && void 0 !== e
                ? e
                : "",
            children: (0, r.jsxs)("div", {
              className: "tw-flex tw-flex-col tw-gap-1",
              children: [
                (0, r.jsx)("div", {
                  className: "tw-flex tw-h-3 tw-w-full tw-gap-[2px]",
                  children: o.map((t, e) => {
                    let a = e + 1 <= i;
                    return (0, r.jsx)(
                      "span",
                      {
                        className: n()(
                          "tw-flex tw-h-full tw-flex-1 tw-rounded-[1px]",
                          { "tw-bg-ithaca-white-10": !a, [t.color]: a }
                        ),
                      },
                      t.label
                    );
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "tw-flex tw-items-center tw-justify-between tw-px-1 tw-text-xs tw-text-ithaca-white-60",
                  children: [
                    (0, r.jsx)("div", {
                      className: "tw-mr-2 tw-truncate",
                      children: a,
                    }),
                    (0, r.jsx)("div", {
                      className: "tw-ml-2 tw-truncate tw-text-right",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    84909: function (t, e, a) {
      var r = a(85893),
        s = a(21322);
      e.Z = (t) => {
        let { nav: e, chartData: a } = t,
          n = e > 0;
        return (0, r.jsxs)("div", {
          className:
            "tw-col-span-2 tw-overflow-hidden tw-rounded-lg tw-border tw-border-emerald-500/20 tw-bg-gradient-to-br tw-from-slate-800 tw-to-slate-900 tw-p-4 lg:tw-col-span-1",
          children: [
            (0, r.jsxs)("div", {
              className: "tw-text-sm tw-font-medium tw-text-emerald-400",
              children: [
                "NAV - ",
                (0, r.jsx)("span", { children: e.toFixed(2) }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "tw-mt-2",
              children: (0, r.jsx)(s.Z, {
                chartData: a,
                isPreview: !0,
                isPositive: n,
                timeRange: "All",
                chartTrend: n ? "positive" : "negative",
                config: { height: 40 },
              }),
            }),
          ],
        });
      };
    },
    27014: function (t, e, a) {
      var r = a(85893);
      a(67294);
      var s = a(26829);
      e.Z = (t) => {
        var e;
        let { tabs: a, value: n, onValueChange: o } = t;
        return (0, r.jsxs)(s.fC, {
          defaultValue:
            null === (e = a.find((t) => !t.disabled)) || void 0 === e
              ? void 0
              : e.id,
          value: n,
          onValueChange: o,
          children: [
            (0, r.jsx)(s.aV, {
              className:
                "tw-flex tw-space-x-2 tw-overflow-x-auto tw-border-b tw-border-b-white/10 tw-px-6 tw-text-md tw-outline",
              children: a.map((t) =>
                (0, r.jsx)(
                  s.xz,
                  {
                    className:
                      "data-[state=active] tw-shrink-0 tw-p-2 data-[state=active]:tw-border-b",
                    value: t.id,
                    disabled: t.disabled,
                    children: t.label,
                  },
                  t.id
                )
              ),
            }),
            a.map((t) =>
              (0, r.jsx)(
                s.VY,
                { className: "tw-p-6", value: t.id, children: t.content },
                t.id
              )
            ),
          ],
        });
      };
    },
  },
]);
