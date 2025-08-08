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
      (e._sentryDebugIds[t] = "9fdb8522-cadb-4449-aa91-9cf6e570a391"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9fdb8522-cadb-4449-aa91-9cf6e570a391"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8539],
    {
      52431: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return g;
          },
        });
        var a,
          r = n(85893),
          i = n(73935),
          o = n(67294);
        function c() {
          return (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    ({}.hasOwnProperty.call(n, a) && (e[a] = n[a]));
                }
                return e;
              }).apply(null, arguments);
        }
        var s = function (e) {
            return o.createElement(
              "svg",
              c(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              a ||
                (a = o.createElement("path", {
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.667 6.667 8 9.334M5.336 6.667l2.667 2.667",
                }))
            );
          },
          l = n(24514),
          d = n(3575),
          u = n.n(d),
          h = n(34281),
          p = n(76035),
          w = n(65440),
          f = n(93967),
          m = n.n(f),
          g = (e) => {
            var t;
            let {
                onChange: n,
                options: a,
                disabled: o,
                label: c,
                width: d = 0,
                id: f,
                value: g,
                size: b = "md",
                iconStart: v,
                iconEnd: _,
                className: y,
                type: x,
                hasDropdown: k = !0,
                isLoading: A = !1,
                inputClassName: T,
                labelClassName: E,
              } = e,
              {
                handleDropdownClick: j,
                isDropdownOpen: S,
                containerRef: D,
                optionsRef: C,
                optionsPosition: M,
                mounted: N,
              } = (0, p.x)();
            return (0, r.jsxs)("div", {
              className: ""
                .concat(u().container, " ")
                .concat(y || "", " ")
                .concat(x ? u()[x] : ""),
              ref: D,
              children: [
                c &&
                  (0, r.jsx)("label", {
                    htmlFor: f,
                    className: m()(u().label, E),
                    children: c,
                  }),
                (0, r.jsxs)("div", {
                  style: d > 0 ? { minWidth: d + "px" } : {},
                  className: ""
                    .concat(u().dropdownContainer, " ")
                    .concat(o ? u().disabled : ""),
                  onClick: () => !A && j(),
                  role: "button",
                  children: [
                    (0, r.jsxs)("div", {
                      className: m()(
                        u().input,
                        { [u().clickedDropdown]: S },
                        T
                      ),
                      children: [
                        (0, r.jsxs)(l.Z, {
                          direction: "dropdown",
                          gap: "gap-4",
                          children: [
                            v && v,
                            A
                              ? (0, r.jsx)(w.Z, {})
                              : (0, r.jsx)("span", {
                                  className:
                                    "sm" === b ? u().textSmall : u().textMedium,
                                  children:
                                    null !==
                                      (t = null == g ? void 0 : g.name) &&
                                    void 0 !== t
                                      ? t
                                      : (0, r.jsx)("span", {
                                          className: u().placeholder,
                                          children: "-",
                                        }),
                                }),
                          ],
                        }),
                        k &&
                          (0, r.jsxs)("div", {
                            className: u().iconEnd,
                            children: [
                              _ && _,
                              (0, r.jsx)("div", {
                                className: ""
                                  .concat(u().icon, " ")
                                  .concat(S ? u().isActive : ""),
                                children: (0, r.jsx)(s, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                    N &&
                      document.querySelector("#portal") &&
                      (0, i.createPortal)(
                        (0, r.jsx)(h.m, {
                          optionsRef: C,
                          isDropdownOpen: S,
                          optionsPosition: M,
                          options: a,
                          handleOptionClick: (e) => {
                            n(e.value, e);
                          },
                          selectedOption: g,
                          size: b,
                        }),
                        document.querySelector("#portal")
                      ),
                  ],
                }),
              ],
            });
          };
      },
      34281: function (e, t, n) {
        "use strict";
        n.d(t, {
          m: function () {
            return o;
          },
        });
        var a = n(85893),
          r = n(3575),
          i = n.n(r);
        let o = (e) => {
          let {
            optionsRef: t,
            isDropdownOpen: n,
            optionsPosition: r,
            options: o,
            handleOptionClick: c,
            selectedOption: s,
            size: l,
          } = e;
          return (0, a.jsx)("div", {
            ref: t,
            children: (0, a.jsx)("ul", {
              className: ""
                .concat(i().options, " ")
                .concat(n ? "" : i().isHidden),
              style: {
                width: "".concat(r.width, "px"),
                left: "".concat(r.left, "px"),
                top: "".concat(r.top, "px"),
              },
              children:
                null == o
                  ? void 0
                  : o.map((e) =>
                      (0, a.jsx)(
                        "li",
                        {
                          onClick: () => c(e),
                          className: ""
                            .concat(
                              (null == s ? void 0 : s.value) == e.value
                                ? i().selected
                                : "",
                              " "
                            )
                            .concat(
                              "sm" === l ? i().textSmall : i().textMedium
                            ),
                          children: e.name,
                        },
                        e.value
                      )
                    ),
            }),
          });
        };
      },
      76035: function (e, t, n) {
        "use strict";
        n.d(t, {
          x: function () {
            return i;
          },
        });
        var a = n(67294),
          r = n(16795);
        let i = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            [t, n] = (0, a.useState)(e),
            i = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            [c, s] = (0, a.useState)({ width: 0, top: 0, left: 0 }),
            [l, d] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              let e = (e) => {
                i.current &&
                  !i.current.contains(e.target) &&
                  o.current &&
                  !o.current.contains(e.target) &&
                  n(!1);
              };
              return (
                d(!0),
                document.addEventListener("click", e, !0),
                () => document.removeEventListener("click", e, !0)
              );
            }, []),
            (0, r.M)(() => t && n(!1)),
            {
              handleDropdownClick: () => {
                var e, a, r, o, c;
                let l =
                  null === (e = i.current) || void 0 === e
                    ? void 0
                    : e.getBoundingClientRect();
                s({
                  width:
                    null !== (a = null == l ? void 0 : l.width) && void 0 !== a
                      ? a
                      : 100,
                  left:
                    null !== (r = null == l ? void 0 : l.x) && void 0 !== r
                      ? r
                      : 0,
                  top:
                    (null !== (o = null == l ? void 0 : l.y) && void 0 !== o
                      ? o
                      : 0) +
                    (null !== (c = null == l ? void 0 : l.height) &&
                    void 0 !== c
                      ? c
                      : 0) +
                    document.documentElement.scrollTop +
                    1,
                }),
                  n(!t);
              },
              isDropdownOpen: t,
              setIsDropdownOpen: n,
              containerRef: i,
              optionsRef: o,
              optionsPosition: c,
              setOptionsPosition: s,
              mounted: l,
            }
          );
        };
      },
      55975: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(39332),
          i = n(67294),
          o = n(80362),
          c = n(37422),
          s = n(92400),
          l = n(15741),
          d = n(52431),
          u = n(67253),
          h = n(3298),
          p = n(93967),
          w = n.n(p),
          f = n(7712),
          m = n.n(f);
        t.Z = (e) => {
          let {
              tabs: t,
              className: n = "",
              activeTab: p,
              onChange: f,
              responsive: g = !0,
            } = e,
            b = (0, r.useRouter)(),
            v = (0, i.useCallback)(
              (e) => {
                e.forEach((e) => {
                  setTimeout(() => {
                    e.path && b.prefetch(e.path);
                  }, 200);
                });
              },
              [b]
            );
          (0, i.useEffect)(() => {
            v(t);
          }, [t, v]);
          let _ = (0, o.Z)(h.oh),
            { currentStep: y } = (0, i.useContext)(l.OnboardingContext),
            x = (e) => (e === p ? m().isActive : ""),
            k = t.map((e) => ({ name: e.label, value: e.id })),
            A = k.find((e) => e.value === p),
            T = (e) => {
              let n = t.find((t) => t.id === e);
              n && (null == f || f(n.id), n.path && b.push(n.path));
            };
          return t && 0 !== t.length
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "tw-mb-4 tw-flex tw-flex-row tw-items-center tw-justify-between tw-gap-6 max-sm:tw-flex-wrap",
                    children: [
                      g && _
                        ? (0, a.jsx)(d.Z, {
                            options: k,
                            value: A,
                            width: 190,
                            onChange: (e) => T(e),
                            type: "tablet",
                          })
                        : (0, a.jsx)(s.Z, {
                            isOpen:
                              y === u.P.WITHDRAWAL_TRANSACTION_HISTORY_TAB &&
                              !!t.find((e) => "fundLockHistory" === e.id),
                            align: "start",
                            offset: 360,
                            side: "bottom",
                            children: (0, a.jsx)("div", {
                              className: w()(m().buttons, "!tw-my-0", n),
                              children: t.map((e) =>
                                (0, a.jsx)(
                                  c.Z,
                                  {
                                    onClick: (t) => {
                                      t.stopPropagation(),
                                        !e.disabled &&
                                          (null == f || f(e.id),
                                          e.path && b.push(e.path));
                                    },
                                    className: ""
                                      .concat(x(e.id), " ")
                                      .concat(
                                        e.disabled ? m().disableText : ""
                                      ),
                                    role: "tab",
                                    "aria-selected": e.id === p,
                                    "aria-controls": "tab-panel-".concat(e.id),
                                    title: "Click to select tab",
                                    children: e.label,
                                  },
                                  e.id
                                )
                              ),
                            }),
                          }),
                      ("positions" === p || "tradeHistory" === p) &&
                        (0, a.jsx)("div", { id: "tabsPortal" }),
                    ],
                  }),
                  t.map(
                    (e) =>
                      e.id === p &&
                      (0, a.jsx)(
                        "div",
                        {
                          role: "tabpanel",
                          id: "tab-panel-".concat(e.id),
                          "aria-labelledby": e.id,
                          children: e.content,
                        },
                        e.id
                      )
                  ),
                ],
              })
            : (0, a.jsx)("div", {
                className: m().tabs,
                children: "No tabs available.",
              });
        };
      },
      3298: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gh: function () {
            return a;
          },
          Mu: function () {
            return o;
          },
          oh: function () {
            return i;
          },
          rN: function () {
            return r;
          },
        });
        let a = 430,
          r = 695,
          i = 1435,
          o = 1280;
      },
      57153: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ro: function () {
            return a;
          },
          ko: function () {
            return i;
          },
          rV: function () {
            return r;
          },
          zI: function () {
            return o;
          },
        });
        let a = [
            { id: "trading", path: "/dashboard/trading", label: "Trading" },
            {
              id: "margin",
              path: "/dashboard/margin",
              label: "Margin Lending | Borrowing",
            },
            {
              id: "reserve",
              path: "/dashboard/margin/reserve",
              label: "Reserve Status & Configuration",
            },
          ],
          r = [
            { id: "market", path: "/trading/market", label: "Market" },
            { id: "stories", path: "/trading/stories", label: "Stories" },
            {
              id: "principal-protected-strategies",
              path: "/trading/principal-protected-strategies",
              label: "Principal Protected Strategies",
            },
            {
              id: "dynamic-option-strategies",
              path: "/trading/dynamic-option-strategies",
              label: "Dynamic Option Strategies",
            },
          ],
          i = [
            { id: "referral", path: "/points/referral", label: "Referral" },
            { id: "profile", path: "/points/profile", label: "Profile" },
            { id: "history", path: "/points/history", label: "History" },
          ],
          o = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = [
                { id: "deposit", label: "Deposit" },
                { id: "withdraw", label: "Withdraw" },
                { id: "swap", label: "Swap" },
              ];
            return e ? t : [...t, { id: "wrap", label: "Wrap / Unwrap" }];
          };
      },
      80362: function (e, t, n) {
        "use strict";
        var a = n(67294);
        t.Z = (e) => {
          let [t, n] = (0, a.useState)(!1),
            r = (0, a.useCallback)((e) => {
              e.matches ? n(!0) : n(!1);
            }, []);
          return (
            (0, a.useEffect)(() => {
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addEventListener("change", r),
                t.matches && n(!0),
                () => t.removeEventListener("change", r)
              );
            }, [e, r]),
            t
          );
        };
      },
      49829: function (e, t, n) {
        "use strict";
        var a = n(85893),
          r = n(39332),
          i = n(24514),
          o = n(15418),
          c = n(55975),
          s = n(57153);
        t.Z = () => {
          var e, t;
          let n = (0, r.usePathname)();
          return (0, a.jsx)(i.Z, {
            direction: "row-space-between",
            children: (0, a.jsx)(c.Z, {
              tabs: s.ko,
              className: "mb-0",
              activeTab:
                null !==
                  (t =
                    null === (e = s.ko.find((e) => e.path === n)) ||
                    void 0 === e
                      ? void 0
                      : e.id) && void 0 !== t
                  ? t
                  : s.ko[0].id,
              onChange: (e) => {
                let t = n.split("/");
                (t[2] = e),
                  o.Z.track("Points menu interactions", { path: t.join("/") });
              },
            }),
          });
        };
      },
      36703: function (e, t, n) {
        "use strict";
        n.d(t, {
          AR: function () {
            return u;
          },
          Lf: function () {
            return y;
          },
          Lv: function () {
            return l;
          },
          Qy: function () {
            return h;
          },
          RT: function () {
            return v;
          },
          Vd: function () {
            return b;
          },
          X_: function () {
            return k;
          },
          Xu: function () {
            return d;
          },
          Zo: function () {
            return p;
          },
          Zp: function () {
            return x;
          },
          _p: function () {
            return _;
          },
          fE: function () {
            return f;
          },
          hO: function () {
            return A;
          },
          p: function () {
            return w;
          },
          sk: function () {
            return g;
          },
          yp: function () {
            return m;
          },
        });
        var a = n(49321),
          r = n(15418),
          i = n(82649);
        let o = async (e) => {
            let { method: t = "POST", data: n, path: a, noCache: r = !1 } = e;
            try {
              let e = await (0, i.Sp)("POINTS_URL"),
                o = {
                  method: t,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json, text/plain, */*",
                    "Cache-Control": r ? "no-cache" : "",
                  },
                  ...(n && { body: JSON.stringify(n) }),
                },
                c = await fetch("".concat(e, "/").concat(a), o),
                s = await c.json();
              if (!c.ok) {
                let e = Error();
                throw ((e.name = s.name), (e.message = s.message), e);
              }
              return { data: s };
            } catch (e) {
              return { error: e };
            }
          },
          c = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = localStorage.getItem("ithaca.session");
            if (t) return JSON.parse(t);
            if (e) return "";
            throw Error("No session info");
          },
          s = async (e) => {
            let t = { walletAddress: c().ethAddress, referralCode: e };
            return await o({ data: t, path: "users/user" });
          },
          l = async function (e) {
            var t;
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = c();
            console.debug("GetUserData");
            let i = await o({
              method: "GET",
              path: "users/user?walletAddress=".concat(a.ethAddress),
              noCache: !0,
            });
            if (
              !n &&
              i.data &&
              !Object.keys(
                null == i
                  ? void 0
                  : null === (t = i.data) || void 0 === t
                  ? void 0
                  : t.user
              ).length
            ) {
              let { error: t } = await s(e);
              return t
                ? { error: t }
                : (e
                    ? r.Z.track("Referral wallet connect", { referralToken: e })
                    : r.Z.track("Wallet connect"),
                  await l(e));
            }
            return i;
          },
          d = async () => {
            let e = c();
            return await o({
              method: "GET",
              path: "auth/twitter/login?walletAddress=".concat(e.ethAddress),
            });
          },
          u = async () => {
            let e = c();
            return await o({
              method: "GET",
              path: "auth/twitter/verify?walletAddress=".concat(e.ethAddress),
            });
          },
          h = async () => {
            let e = c();
            return await o({
              method: "GET",
              path: "auth/discord/login?walletAddress=".concat(e.ethAddress),
            });
          },
          p = async (e) => {
            let t = c();
            return await o({
              method: "GET",
              path: "auth/discord/callback?token="
                .concat(e, "&walletAddress=")
                .concat(t.ethAddress),
            });
          },
          w = async () => {
            let e = c();
            return await o({
              method: "GET",
              path: "auth/telegram/login?walletAddress=".concat(e.ethAddress),
            });
          },
          f = async (e) => {
            let { displayName: t, isAvatar: n, signature: r } = e,
              i = {
                walletAddress: c().ethAddress,
                displayName: (0, a.U)(t) ? t.toLowerCase() : t,
                isAvatar: n,
                signature: r,
              };
            return await o({ method: "PUT", path: "users/user", data: i });
          },
          m = async (e) =>
            await o({
              method: "POST",
              path: "auth/farcaster/callback",
              data: e,
            }),
          g = async (e) => {
            let {
                page: t,
                pageLimit: n,
                sortField: a,
                sortType: r,
                filterBy: i,
              } = e,
              s = {
                walletAddress: c().ethAddress,
                page: t,
                pageSize: n,
                sortField: a,
                sortType: r,
                ...("All" === i ? {} : { type: i }),
              };
            return await o({ data: s, path: "rewards/rewardsHistory" });
          },
          b = async () => {
            let e = c();
            return await o({
              method: "GET",
              path: "badges/profile?walletAddress=".concat(e.ethAddress),
            });
          },
          v = async () => await o({ method: "GET", path: "badges/all" }),
          _ = async (e) =>
            await o({
              method: "GET",
              path: "users/get-referrals?referralCode=".concat(e),
            }),
          y = async (e) =>
            await o({ method: "POST", path: "stats/leaderboard24hr", data: e }),
          x = async (e) =>
            await o({ method: "POST", path: "stats/leaderboard", data: e }),
          k = async (e) =>
            await o({
              method: "GET",
              path: "stats/user?walletAddress=".concat(e),
            }),
          A = async (e, t) =>
            await o({
              method: "GET",
              path: "fundlocks-rewards?token=".concat(e, "&amount=").concat(t),
            });
      },
      84638: function (e, t, n) {
        "use strict";
        n.d(t, {
          au: function () {
            return o;
          },
          fA: function () {
            return d;
          },
          mv: function () {
            return s;
          },
          uf: function () {
            return i;
          },
          wX: function () {
            return l;
          },
          z3: function () {
            return r;
          },
        });
        var a = n(90482);
        a.Z.set({ rounding: a.Z.ROUND_HALF_UP });
        let r = function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              a = (e = e.toString().replace(/\s/g, ""));
            return (
              a.length >= 42 && (a = e.slice(0, 4) + "..." + e.slice(-4)),
              t && t.toString().length && n.toString().length && t === n
                ? a + " (You)"
                : a
            );
          },
          i = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5,
              n = new a.Z(e),
              r = n.toFixed(t);
            if (r.includes("e")) return c(n, t);
            {
              let e = r.split(".");
              return 2 === e.length && e[1].length > t
                ? c(n, t)
                : n.gte(1e6)
                ? n.div(1e6).toFixed(1) + "m"
                : n.gte(1e3)
                ? n.div(1e3).toFixed(1) + "k"
                : r;
            }
          },
          o = (e, t) => {
            let n = i(e, 2);
            switch (t) {
              case "Withdrawal":
                return "-".concat(n, " pts");
              case "Earn":
                return "+".concat(n, " pts");
              default:
                return "".concat(n, " pts");
            }
          },
          c = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5,
              n = e.toString().match("^-?\\d+(?:\\.\\d{0,".concat(t, "})?"));
            return n && new a.Z(n[0]).lte(e) ? n[0].toString() : e.toFixed(t);
          },
          s = (e) => {
            let { showToast: t, title: n, message: a } = e;
            t({ title: n, message: a, type: "info" });
          },
          l = (e) =>
            l.cache && void 0 !== l.cache[e]
              ? Promise.resolve(l.cache[e])
              : new Promise((t) => {
                  let n = new Image();
                  (n.onload = function () {
                    l.cache || (l.cache = {}), (l.cache[e] = !0), t(!0);
                  }),
                    (n.onerror = function () {
                      l.cache || (l.cache = {}), (l.cache[e] = !1), t(!1);
                    }),
                    (n.src = e);
                });
        l.cache = {};
        let d = (e) => {
          let { url: t, width: n, height: a } = e,
            r =
              void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
            i = void 0 !== window.screenTop ? window.screenTop : window.screenY,
            o = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            c = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height,
            s = o / window.screen.availWidth,
            l = window.open(
              t,
              "_blank",
              "\n      scrollbars=yes,\n      resizable=yes,\n      toolbar=no,\n      location=yes,\n      width="
                .concat(n / s, ", \n      height=")
                .concat(a / s, ", \n      top=")
                .concat((c - a) / 2 / s + i, ", \n      left=")
                .concat((o - n) / 2 / s + r, "\n      ")
            );
          l && l.focus();
        };
      },
      3575: function (e) {
        e.exports = {
          container: "DropdownMenu_container__R0HbF",
          label: "DropdownMenu_label__U0XW4",
          dropdownContainer: "DropdownMenu_dropdownContainer__72LVT",
          input: "DropdownMenu_input__gtAZz",
          textMedium: "DropdownMenu_textMedium__A0UJE",
          textSmall: "DropdownMenu_textSmall__WqPxZ",
          clickedDropdown: "DropdownMenu_clickedDropdown__1l_Lg",
          placeholder: "DropdownMenu_placeholder__AUX1w",
          icon: "DropdownMenu_icon__9OxWm",
          isActive: "DropdownMenu_isActive__T_u5y",
          options: "DropdownMenu_options__mLBsg",
          selected: "DropdownMenu_selected__uSw8X",
          isHidden: "DropdownMenu_isHidden__GDmqe",
          iconEnd: "DropdownMenu_iconEnd__YVrta",
          tablet: "DropdownMenu_tablet__lcq3p",
          disabled: "DropdownMenu_disabled__SJDhi",
        };
      },
      7712: function (e) {
        e.exports = {
          buttons: "Tabs_buttons__mOoD_",
          disableText: "Tabs_disableText__sTAGX",
          isActive: "Tabs_isActive__ggOgf",
        };
      },
    },
  ]);
