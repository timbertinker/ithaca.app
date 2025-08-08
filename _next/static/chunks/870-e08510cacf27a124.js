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
      (e._sentryDebugIds[t] = "6ccefb18-a602-4e36-8465-13d79753d0e8"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6ccefb18-a602-4e36-8465-13d79753d0e8"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [870],
    {
      10870: function (e, t, r) {
        "use strict";
        var s = r(85893),
          a = r(67294),
          n = r(89469),
          i = r(92321),
          l = r(46656),
          o = r(37422),
          d = r(91269),
          c = r(45323),
          h = r(41643),
          u = r(10957),
          p = r(25675),
          v = r.n(p),
          m = r(45338),
          x = r(84638),
          j = r(59731),
          w = r(47236),
          _ = r(36703),
          f = r(15418),
          g = r(68703),
          k = r.n(g);
        t.Z = (e) => {
          let { trigger: t } = e,
            {
              displayName: r,
              avatarUrl: p,
              isAvatar: g,
              setUserPointsData: N,
            } = (0, j.qr)(),
            { data: L } = (0, n.p)(),
            [C, y] = (0, a.useState)(!1),
            { address: b, isConnected: M } = (0, i.m)(),
            [A, Z] = (0, a.useState)(!1),
            { showToast: P } = (0, w.Z)(),
            [I, B] = (0, a.useState)({
              displayName: r,
              avatarUrl: p,
              isAvatar: g,
            }),
            D = () => {
              B({ displayName: "", avatarUrl: null, isAvatar: !1 });
            };
          (0, a.useEffect)(() => {
            y(M);
          }, [M]);
          let E = (e) => {
              B({
                displayName: e ? e.displayName : r,
                avatarUrl: e ? e.avatarUrl : p,
                isAvatar: e ? e.isAvatar : g,
              }),
                Z(!0);
            },
            U = () =>
              I.displayName.length < 3
                ? (P({
                    title: "Not saved",
                    message: "Username must be at least 3 characters.",
                    type: "error",
                  }),
                  !1)
                : !(I.displayName.length > 42) ||
                  (P({
                    title: "Not saved",
                    message: "Username must be less than 42 characters.",
                    type: "error",
                  }),
                  !1),
            F = (e) => {
              B((t) => ({ ...t, displayName: e }));
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              C &&
                (0, s.jsx)("button", {
                  className: k().transparentBtn,
                  onClick: () => {
                    r.length ||
                      (0, _.Lv)().then((e) => {
                        let { data: t, error: r } = e;
                        if (r)
                          (0, x.mv)({
                            showToast: P,
                            title: r.name,
                            message: r.message,
                          });
                        else if (t) {
                          let { user: e } = t;
                          N({
                            displayName: e.displayName,
                            avatarUrl: e.avatarUrl || "",
                            isAvatar: e.isAvatar,
                            referralCode: e.referralCode,
                          }),
                            E(e);
                        }
                      }),
                      E();
                  },
                  children: a.cloneElement(t),
                }),
              (0, s.jsx)(l.default, {
                isOpen: A,
                onCloseModal: () => {
                  Z(!1), D();
                },
                title: "Edit Profile",
                className: k().editProfileModal,
                children: (0, s.jsxs)("div", {
                  className: k().dialogBody,
                  children: [
                    (0, s.jsxs)("div", {
                      className: k().profilePhotoCtrl,
                      children: [
                        I.avatarUrl && I.isAvatar
                          ? (0, s.jsx)(v(), {
                              width: 60,
                              height: 60,
                              className: k().avatar,
                              src: I.avatarUrl,
                              alt: "Leaderboard avatarUrl",
                            })
                          : (0, s.jsx)(d.Z, {}),
                        (0, s.jsxs)(o.Z, {
                          title: "",
                          variant: "secondary",
                          className: k().hideAvatarBtn,
                          onClick: () => {
                            B((e) => ({ ...e, isAvatar: !e.isAvatar }));
                          },
                          children: [I.isAvatar ? "Hide" : "Show", " Avatar"],
                        }),
                      ],
                    }),
                    (0, s.jsx)(c.Z, {
                      id: "leaderboardName",
                      value: I.displayName || "",
                      onChange: (e) => {
                        let {
                          target: { value: t },
                        } = e;
                        return F(t);
                      },
                      label: "Leaderboard Name",
                      type: "text",
                      className: k().leaderboardName,
                    }),
                    (0, s.jsxs)("div", {
                      className: k().walletAddressField,
                      children: [
                        (0, s.jsx)("label", {
                          children: "Connected Wallet (Hidden)",
                        }),
                        (0, s.jsxs)("div", {
                          className: k().walletAddress,
                          children: [
                            (0, s.jsx)(h.Z, {}),
                            b
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: k().ethAddress,
                                      children: (0, m.Ch)("".concat(b)),
                                    }),
                                    (0, s.jsx)("button", {
                                      className: k().transparentBtn,
                                      onClick: () => {
                                        navigator.clipboard.writeText(
                                          "".concat(b)
                                        ),
                                          P({
                                            title: "Copied",
                                            message: "".concat(b),
                                            type: "success",
                                          });
                                      },
                                      children: (0, s.jsx)(u.Z, {}),
                                    }),
                                  ],
                                })
                              : (0, s.jsx)(s.Fragment, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.Z, {
                      onClick: () => {
                        if (U()) {
                          let e = {
                            displayName: I.displayName,
                            isAvatar: I.isAvatar,
                          };
                          null == L ||
                            L.signTypedData({
                              domain: { name: "Ithaca", version: "0.1" },
                              types: {
                                UserProfile: [
                                  { name: "displayName", type: "string" },
                                  { name: "isAvatar", type: "bool" },
                                ],
                              },
                              primaryType: "UserProfile",
                              message: e,
                            })
                              .then((e) => {
                                (0, _.fE)({ ...I, signature: e }).then(() => {
                                  f.Z.track("Update profile", I),
                                    N({ ...I, avatarUrl: I.avatarUrl || "" }),
                                    P({
                                      title: "Saved",
                                      message:
                                        "Profile information has been saved.",
                                      type: "success",
                                    });
                                });
                              })
                              .catch(() => {
                                P({
                                  title: "Not saved",
                                  message: "User rejected signature request",
                                  type: "error",
                                });
                              });
                        }
                      },
                      title: "",
                      children: "Save Changes",
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      },
      21050: function (e, t, r) {
        "use strict";
        var s = r(85893);
        t.Z = (e) => {
          let { color: t = "#9D9DAA", className: r = "" } = e;
          return (0, s.jsxs)("svg", {
            className: r,
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
      10957: function (e, t, r) {
        "use strict";
        var s = r(85893);
        r(67294),
          (t.Z = (e) => {
            let {
              stroke: t,
              strokeWidth: r = 1,
              width: a = 24,
              height: n = 24,
            } = e;
            return (0, s.jsx)("svg", {
              width: a,
              height: n,
              fill: "none",
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                stroke: null != t ? t : "#5EE192",
                strokeWidth: r,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.75 14.25c-.699 0-1.048 0-1.324-.114a1.5 1.5 0 0 1-.812-.812C4.5 13.048 4.5 12.699 4.5 12V6.9c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163H12c.699 0 1.048 0 1.324.114a1.5 1.5 0 0 1 .812.812c.114.276.114.625.114 1.324m-2.1 12.75h4.95c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581v-4.95c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163h-4.95c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v4.95c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164Z",
              }),
            });
          });
      },
      57345: function (e, t, r) {
        "use strict";
        var s = r(85893);
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
      41643: function (e, t, r) {
        "use strict";
        var s = r(85893);
        r(67294),
          (t.Z = () =>
            (0, s.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
              viewBox: "0 0 20 20",
              children: (0, s.jsx)("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13.75 11.667h.008M2.5 4.167v11.666c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V7.5c0-.92-.746-1.667-1.667-1.667H4.167c-.92 0-1.667-.746-1.667-1.666Zm0 0c0-.92.746-1.667 1.667-1.667h10m0 9.167a.417.417 0 1 1-.834 0 .417.417 0 0 1 .834 0Z",
              }),
            }));
      },
      45323: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return g;
          },
        });
        var s = r(85893),
          a = r(67294);
        let n = (e) => {
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
        var i = () =>
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
          l = r(4345),
          o = r.n(l),
          d = () =>
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
          c = r(37422),
          h = () =>
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
          u = () =>
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
          p = r(21050),
          v = r(24514),
          m = r(57345),
          x = r(16795),
          j = r(65440),
          w = r(93967),
          _ = r.n(w),
          f = r(45338),
          g = (e) => {
            let {
                increment: t,
                onChange: r,
                value: l,
                icon: w,
                leftIcon: g,
                disabled: k,
                placeholder: N = "-",
                label: L,
                width: C = 0,
                type: y = "number",
                id: b,
                hasError: M = !1,
                errorMessage: A,
                className: Z,
                containerClassName: P,
                isLinked: I,
                canLink: B,
                onLink: D,
                onBlur: E,
                onKeyDown: U,
                footerText: F,
                hasDropdown: W,
                dropDownOptions: T,
                onDropdownChange: G,
                isLoading: S = !1,
                labelClassName: q,
                min: H,
                max: V,
                ...O
              } = e,
              [K, R] = (0, a.useState)(!1),
              J = (0, a.useRef)(null);
            (0, a.useEffect)(() => {
              let e = (e) => {
                J.current && !J.current.contains(e.target) && R(!1);
              };
              return (
                document.addEventListener("click", e, !0),
                () => {
                  document.removeEventListener("click", e, !0);
                }
              );
            }, []),
              (0, x.M)(() => {
                K && R(!1);
              });
            let Q = (e) => {
                R(!1), G && G(e);
              },
              X = (e) => {
                if ("number" !== y || !t) return;
                let r = l ? (0, f.Dx)("".concat(l)) : void 0;
                "UP" === e
                  ? ((void 0 !== r && void 0 !== V && r < V) || void 0 === V) &&
                    t("UP")
                  : "DOWN" === e &&
                    ((void 0 !== r && void 0 !== H && r > H) || void 0 === H) &&
                    t("DOWN");
              };
            return (0, s.jsxs)("div", {
              className: _()(o().input, Z, { [o().error]: M }),
              style: C > 0 ? { width: C + "px" } : {},
              children: [
                L &&
                  (0, s.jsx)("label", {
                    htmlFor: b,
                    className: _()(o().label, q),
                    children: L,
                  }),
                (0, s.jsxs)("div", {
                  className: "".concat(o().container, " ").concat(P || ""),
                  style: { width: "100%" },
                  children: [
                    B &&
                      (0, s.jsx)(c.Z, {
                        title: "Click to link",
                        variant: "icon",
                        size: "sm",
                        onClick: () => {
                          D && D(!I);
                        },
                        children: I ? (0, s.jsx)(d, {}) : (0, s.jsx)(h, {}),
                      }),
                    (0, s.jsxs)(v.Z, {
                      direction: "column",
                      classes: "full-width",
                      children: [
                        (0, s.jsxs)(v.Z, {
                          direction: "row-center",
                          children: [
                            g &&
                              (0, s.jsx)("div", {
                                className: "tw-mr-1",
                                children: g,
                              }),
                            S
                              ? (0, s.jsx)("div", {
                                  className: "flexGrow",
                                  children: (0, s.jsx)(j.Z, {}),
                                })
                              : (0, s.jsx)("input", {
                                  ...O,
                                  id: b,
                                  type: y,
                                  value: l,
                                  placeholder: N,
                                  inputMode:
                                    "number" === y ? "decimal" : void 0,
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if ("number" === y) {
                                      let s = (0, f.Dx)(t);
                                      if (void 0 !== V && s > V) return;
                                      null == r || r(e);
                                    } else null == r || r(e);
                                  },
                                  onWheel: "number" === y ? n : void 0,
                                  disabled: k,
                                  min: "number" === y ? H : void 0,
                                  max: "number" === y ? V : void 0,
                                  step: "any",
                                  onBlur: E,
                                  onKeyDown: U,
                                }),
                            w &&
                              (0, s.jsx)("div", {
                                className: "tw-ml-1",
                                children: w,
                              }),
                            W &&
                              (0, s.jsxs)("div", {
                                onClick: () => {
                                  R(!K);
                                },
                                className: ""
                                  .concat(o().dropdown, " ")
                                  .concat(K ? o().isActive : ""),
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "mmt-2",
                                    children: (0, s.jsx)(m.Z, {}),
                                  }),
                                  K &&
                                    (0, s.jsx)("ul", {
                                      className: o().dropdownMenu,
                                      children:
                                        T &&
                                        T.map((e) =>
                                          (0, s.jsxs)(
                                            "li",
                                            {
                                              className: _()(
                                                o().dropdownItem,
                                                "tw-flex",
                                                { [o().active]: l === e.value }
                                              ),
                                              onClick: () => Q(e.value),
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
                        F &&
                          (0, s.jsx)("div", {
                            className: o().footer,
                            children: F,
                          }),
                      ],
                    }),
                    t &&
                      (0, s.jsx)("div", {
                        className: o().incrementWrapper,
                        children: (0, s.jsxs)(v.Z, {
                          direction: "column",
                          children: [
                            (0, s.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, s.jsx)(c.Z, {
                                title: "up",
                                onClick: () => X("UP"),
                                variant: "icon",
                                children: (0, s.jsx)(u, {}),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: o().incrementButton,
                              children: (0, s.jsx)(c.Z, {
                                title: "up",
                                onClick: () => X("DOWN"),
                                variant: "icon",
                                children: (0, s.jsx)(p.Z, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                M &&
                  A &&
                  (0, s.jsxs)("div", {
                    className: o().errorMessage,
                    children: [(0, s.jsx)(i, {}), A],
                  }),
              ],
            });
          };
      },
      68703: function (e) {
        e.exports = {
          editProfileModal: "EditProfileModal_editProfileModal__j98dx",
          transparentBtn: "EditProfileModal_transparentBtn__rIQ3C",
          dialogBody: "EditProfileModal_dialogBody__qZruD",
          profilePhotoCtrl: "EditProfileModal_profilePhotoCtrl__c0ljA",
          hideAvatarBtn: "EditProfileModal_hideAvatarBtn__sW9RW",
          leaderboardName: "EditProfileModal_leaderboardName__644Zs",
          walletAddressField: "EditProfileModal_walletAddressField__fZnlG",
          walletAddress: "EditProfileModal_walletAddress__vPnIG",
          avatar: "EditProfileModal_avatar__dqreT",
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
    },
  ]);
