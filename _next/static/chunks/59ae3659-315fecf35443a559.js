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
      (e._sentryDebugIds[t] = "bd73fe8f-818f-47d3-b070-2417d7125118"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-bd73fe8f-818f-47d3-b070-2417d7125118"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5128],
  {
    15615: function (e, t, a) {
      a.d(t, {
        Ap: function () {
          return a9;
        },
        NL: function () {
          return no;
        },
        We: function () {
          return nt;
        },
        _K: function () {
          return tt;
        },
        a3: function () {
          return ni;
        },
        pj: function () {
          return tY;
        },
      });
      var n,
        l = a(3766),
        o = a(77289),
        r = a(67294),
        i = a(49106),
        s = a(90326),
        c = a(92321),
        u = a(90512),
        d = a(37122),
        f = a(12185),
        m = a(32934),
        v = a(4830),
        g = a(66403),
        h = a(88144),
        p = a(90474),
        C = a(49321),
        j = a(48104),
        b = a(3114),
        w = a(48486),
        E = a(73935),
        y = a(98566),
        x = a(82251),
        k = a(59598),
        B = a(42238),
        I = a(39028),
        T = a(8768),
        S = a(55143),
        D = a(92592),
        N = a(34155),
        _ = (0, i.d)({
          conditions: {
            defaultCondition: "smallScreen",
            conditionNames: ["smallScreen", "largeScreen"],
            responsiveArray: void 0,
          },
        }),
        L = (0, i.M)({
          conditions: {
            defaultCondition: "smallScreen",
            conditionNames: ["smallScreen", "largeScreen"],
            responsiveArray: void 0,
          },
        }),
        O = (0, s.$)(
          {
            conditions: {
              defaultCondition: "base",
              conditionNames: ["base", "hover", "active"],
              responsiveArray: void 0,
            },
            styles: {
              background: {
                values: {
                  accentColor: {
                    conditions: {
                      base: "ju367v9i",
                      hover: "ju367v9j",
                      active: "ju367v9k",
                    },
                    defaultClass: "ju367v9i",
                  },
                  accentColorForeground: {
                    conditions: {
                      base: "ju367v9l",
                      hover: "ju367v9m",
                      active: "ju367v9n",
                    },
                    defaultClass: "ju367v9l",
                  },
                  actionButtonBorder: {
                    conditions: {
                      base: "ju367v9o",
                      hover: "ju367v9p",
                      active: "ju367v9q",
                    },
                    defaultClass: "ju367v9o",
                  },
                  actionButtonBorderMobile: {
                    conditions: {
                      base: "ju367v9r",
                      hover: "ju367v9s",
                      active: "ju367v9t",
                    },
                    defaultClass: "ju367v9r",
                  },
                  actionButtonSecondaryBackground: {
                    conditions: {
                      base: "ju367v9u",
                      hover: "ju367v9v",
                      active: "ju367v9w",
                    },
                    defaultClass: "ju367v9u",
                  },
                  closeButton: {
                    conditions: {
                      base: "ju367v9x",
                      hover: "ju367v9y",
                      active: "ju367v9z",
                    },
                    defaultClass: "ju367v9x",
                  },
                  closeButtonBackground: {
                    conditions: {
                      base: "ju367va0",
                      hover: "ju367va1",
                      active: "ju367va2",
                    },
                    defaultClass: "ju367va0",
                  },
                  connectButtonBackground: {
                    conditions: {
                      base: "ju367va3",
                      hover: "ju367va4",
                      active: "ju367va5",
                    },
                    defaultClass: "ju367va3",
                  },
                  connectButtonBackgroundError: {
                    conditions: {
                      base: "ju367va6",
                      hover: "ju367va7",
                      active: "ju367va8",
                    },
                    defaultClass: "ju367va6",
                  },
                  connectButtonInnerBackground: {
                    conditions: {
                      base: "ju367va9",
                      hover: "ju367vaa",
                      active: "ju367vab",
                    },
                    defaultClass: "ju367va9",
                  },
                  connectButtonText: {
                    conditions: {
                      base: "ju367vac",
                      hover: "ju367vad",
                      active: "ju367vae",
                    },
                    defaultClass: "ju367vac",
                  },
                  connectButtonTextError: {
                    conditions: {
                      base: "ju367vaf",
                      hover: "ju367vag",
                      active: "ju367vah",
                    },
                    defaultClass: "ju367vaf",
                  },
                  connectionIndicator: {
                    conditions: {
                      base: "ju367vai",
                      hover: "ju367vaj",
                      active: "ju367vak",
                    },
                    defaultClass: "ju367vai",
                  },
                  downloadBottomCardBackground: {
                    conditions: {
                      base: "ju367val",
                      hover: "ju367vam",
                      active: "ju367van",
                    },
                    defaultClass: "ju367val",
                  },
                  downloadTopCardBackground: {
                    conditions: {
                      base: "ju367vao",
                      hover: "ju367vap",
                      active: "ju367vaq",
                    },
                    defaultClass: "ju367vao",
                  },
                  error: {
                    conditions: {
                      base: "ju367var",
                      hover: "ju367vas",
                      active: "ju367vat",
                    },
                    defaultClass: "ju367var",
                  },
                  generalBorder: {
                    conditions: {
                      base: "ju367vau",
                      hover: "ju367vav",
                      active: "ju367vaw",
                    },
                    defaultClass: "ju367vau",
                  },
                  generalBorderDim: {
                    conditions: {
                      base: "ju367vax",
                      hover: "ju367vay",
                      active: "ju367vaz",
                    },
                    defaultClass: "ju367vax",
                  },
                  menuItemBackground: {
                    conditions: {
                      base: "ju367vb0",
                      hover: "ju367vb1",
                      active: "ju367vb2",
                    },
                    defaultClass: "ju367vb0",
                  },
                  modalBackdrop: {
                    conditions: {
                      base: "ju367vb3",
                      hover: "ju367vb4",
                      active: "ju367vb5",
                    },
                    defaultClass: "ju367vb3",
                  },
                  modalBackground: {
                    conditions: {
                      base: "ju367vb6",
                      hover: "ju367vb7",
                      active: "ju367vb8",
                    },
                    defaultClass: "ju367vb6",
                  },
                  modalBorder: {
                    conditions: {
                      base: "ju367vb9",
                      hover: "ju367vba",
                      active: "ju367vbb",
                    },
                    defaultClass: "ju367vb9",
                  },
                  modalText: {
                    conditions: {
                      base: "ju367vbc",
                      hover: "ju367vbd",
                      active: "ju367vbe",
                    },
                    defaultClass: "ju367vbc",
                  },
                  modalTextDim: {
                    conditions: {
                      base: "ju367vbf",
                      hover: "ju367vbg",
                      active: "ju367vbh",
                    },
                    defaultClass: "ju367vbf",
                  },
                  modalTextSecondary: {
                    conditions: {
                      base: "ju367vbi",
                      hover: "ju367vbj",
                      active: "ju367vbk",
                    },
                    defaultClass: "ju367vbi",
                  },
                  profileAction: {
                    conditions: {
                      base: "ju367vbl",
                      hover: "ju367vbm",
                      active: "ju367vbn",
                    },
                    defaultClass: "ju367vbl",
                  },
                  profileActionHover: {
                    conditions: {
                      base: "ju367vbo",
                      hover: "ju367vbp",
                      active: "ju367vbq",
                    },
                    defaultClass: "ju367vbo",
                  },
                  profileForeground: {
                    conditions: {
                      base: "ju367vbr",
                      hover: "ju367vbs",
                      active: "ju367vbt",
                    },
                    defaultClass: "ju367vbr",
                  },
                  selectedOptionBorder: {
                    conditions: {
                      base: "ju367vbu",
                      hover: "ju367vbv",
                      active: "ju367vbw",
                    },
                    defaultClass: "ju367vbu",
                  },
                  standby: {
                    conditions: {
                      base: "ju367vbx",
                      hover: "ju367vby",
                      active: "ju367vbz",
                    },
                    defaultClass: "ju367vbx",
                  },
                },
              },
              borderColor: {
                values: {
                  accentColor: {
                    conditions: {
                      base: "ju367vc0",
                      hover: "ju367vc1",
                      active: "ju367vc2",
                    },
                    defaultClass: "ju367vc0",
                  },
                  accentColorForeground: {
                    conditions: {
                      base: "ju367vc3",
                      hover: "ju367vc4",
                      active: "ju367vc5",
                    },
                    defaultClass: "ju367vc3",
                  },
                  actionButtonBorder: {
                    conditions: {
                      base: "ju367vc6",
                      hover: "ju367vc7",
                      active: "ju367vc8",
                    },
                    defaultClass: "ju367vc6",
                  },
                  actionButtonBorderMobile: {
                    conditions: {
                      base: "ju367vc9",
                      hover: "ju367vca",
                      active: "ju367vcb",
                    },
                    defaultClass: "ju367vc9",
                  },
                  actionButtonSecondaryBackground: {
                    conditions: {
                      base: "ju367vcc",
                      hover: "ju367vcd",
                      active: "ju367vce",
                    },
                    defaultClass: "ju367vcc",
                  },
                  closeButton: {
                    conditions: {
                      base: "ju367vcf",
                      hover: "ju367vcg",
                      active: "ju367vch",
                    },
                    defaultClass: "ju367vcf",
                  },
                  closeButtonBackground: {
                    conditions: {
                      base: "ju367vci",
                      hover: "ju367vcj",
                      active: "ju367vck",
                    },
                    defaultClass: "ju367vci",
                  },
                  connectButtonBackground: {
                    conditions: {
                      base: "ju367vcl",
                      hover: "ju367vcm",
                      active: "ju367vcn",
                    },
                    defaultClass: "ju367vcl",
                  },
                  connectButtonBackgroundError: {
                    conditions: {
                      base: "ju367vco",
                      hover: "ju367vcp",
                      active: "ju367vcq",
                    },
                    defaultClass: "ju367vco",
                  },
                  connectButtonInnerBackground: {
                    conditions: {
                      base: "ju367vcr",
                      hover: "ju367vcs",
                      active: "ju367vct",
                    },
                    defaultClass: "ju367vcr",
                  },
                  connectButtonText: {
                    conditions: {
                      base: "ju367vcu",
                      hover: "ju367vcv",
                      active: "ju367vcw",
                    },
                    defaultClass: "ju367vcu",
                  },
                  connectButtonTextError: {
                    conditions: {
                      base: "ju367vcx",
                      hover: "ju367vcy",
                      active: "ju367vcz",
                    },
                    defaultClass: "ju367vcx",
                  },
                  connectionIndicator: {
                    conditions: {
                      base: "ju367vd0",
                      hover: "ju367vd1",
                      active: "ju367vd2",
                    },
                    defaultClass: "ju367vd0",
                  },
                  downloadBottomCardBackground: {
                    conditions: {
                      base: "ju367vd3",
                      hover: "ju367vd4",
                      active: "ju367vd5",
                    },
                    defaultClass: "ju367vd3",
                  },
                  downloadTopCardBackground: {
                    conditions: {
                      base: "ju367vd6",
                      hover: "ju367vd7",
                      active: "ju367vd8",
                    },
                    defaultClass: "ju367vd6",
                  },
                  error: {
                    conditions: {
                      base: "ju367vd9",
                      hover: "ju367vda",
                      active: "ju367vdb",
                    },
                    defaultClass: "ju367vd9",
                  },
                  generalBorder: {
                    conditions: {
                      base: "ju367vdc",
                      hover: "ju367vdd",
                      active: "ju367vde",
                    },
                    defaultClass: "ju367vdc",
                  },
                  generalBorderDim: {
                    conditions: {
                      base: "ju367vdf",
                      hover: "ju367vdg",
                      active: "ju367vdh",
                    },
                    defaultClass: "ju367vdf",
                  },
                  menuItemBackground: {
                    conditions: {
                      base: "ju367vdi",
                      hover: "ju367vdj",
                      active: "ju367vdk",
                    },
                    defaultClass: "ju367vdi",
                  },
                  modalBackdrop: {
                    conditions: {
                      base: "ju367vdl",
                      hover: "ju367vdm",
                      active: "ju367vdn",
                    },
                    defaultClass: "ju367vdl",
                  },
                  modalBackground: {
                    conditions: {
                      base: "ju367vdo",
                      hover: "ju367vdp",
                      active: "ju367vdq",
                    },
                    defaultClass: "ju367vdo",
                  },
                  modalBorder: {
                    conditions: {
                      base: "ju367vdr",
                      hover: "ju367vds",
                      active: "ju367vdt",
                    },
                    defaultClass: "ju367vdr",
                  },
                  modalText: {
                    conditions: {
                      base: "ju367vdu",
                      hover: "ju367vdv",
                      active: "ju367vdw",
                    },
                    defaultClass: "ju367vdu",
                  },
                  modalTextDim: {
                    conditions: {
                      base: "ju367vdx",
                      hover: "ju367vdy",
                      active: "ju367vdz",
                    },
                    defaultClass: "ju367vdx",
                  },
                  modalTextSecondary: {
                    conditions: {
                      base: "ju367ve0",
                      hover: "ju367ve1",
                      active: "ju367ve2",
                    },
                    defaultClass: "ju367ve0",
                  },
                  profileAction: {
                    conditions: {
                      base: "ju367ve3",
                      hover: "ju367ve4",
                      active: "ju367ve5",
                    },
                    defaultClass: "ju367ve3",
                  },
                  profileActionHover: {
                    conditions: {
                      base: "ju367ve6",
                      hover: "ju367ve7",
                      active: "ju367ve8",
                    },
                    defaultClass: "ju367ve6",
                  },
                  profileForeground: {
                    conditions: {
                      base: "ju367ve9",
                      hover: "ju367vea",
                      active: "ju367veb",
                    },
                    defaultClass: "ju367ve9",
                  },
                  selectedOptionBorder: {
                    conditions: {
                      base: "ju367vec",
                      hover: "ju367ved",
                      active: "ju367vee",
                    },
                    defaultClass: "ju367vec",
                  },
                  standby: {
                    conditions: {
                      base: "ju367vef",
                      hover: "ju367veg",
                      active: "ju367veh",
                    },
                    defaultClass: "ju367vef",
                  },
                },
              },
              boxShadow: {
                values: {
                  connectButton: {
                    conditions: {
                      base: "ju367vei",
                      hover: "ju367vej",
                      active: "ju367vek",
                    },
                    defaultClass: "ju367vei",
                  },
                  dialog: {
                    conditions: {
                      base: "ju367vel",
                      hover: "ju367vem",
                      active: "ju367ven",
                    },
                    defaultClass: "ju367vel",
                  },
                  profileDetailsAction: {
                    conditions: {
                      base: "ju367veo",
                      hover: "ju367vep",
                      active: "ju367veq",
                    },
                    defaultClass: "ju367veo",
                  },
                  selectedOption: {
                    conditions: {
                      base: "ju367ver",
                      hover: "ju367ves",
                      active: "ju367vet",
                    },
                    defaultClass: "ju367ver",
                  },
                  selectedWallet: {
                    conditions: {
                      base: "ju367veu",
                      hover: "ju367vev",
                      active: "ju367vew",
                    },
                    defaultClass: "ju367veu",
                  },
                  walletLogo: {
                    conditions: {
                      base: "ju367vex",
                      hover: "ju367vey",
                      active: "ju367vez",
                    },
                    defaultClass: "ju367vex",
                  },
                },
              },
              color: {
                values: {
                  accentColor: {
                    conditions: {
                      base: "ju367vf0",
                      hover: "ju367vf1",
                      active: "ju367vf2",
                    },
                    defaultClass: "ju367vf0",
                  },
                  accentColorForeground: {
                    conditions: {
                      base: "ju367vf3",
                      hover: "ju367vf4",
                      active: "ju367vf5",
                    },
                    defaultClass: "ju367vf3",
                  },
                  actionButtonBorder: {
                    conditions: {
                      base: "ju367vf6",
                      hover: "ju367vf7",
                      active: "ju367vf8",
                    },
                    defaultClass: "ju367vf6",
                  },
                  actionButtonBorderMobile: {
                    conditions: {
                      base: "ju367vf9",
                      hover: "ju367vfa",
                      active: "ju367vfb",
                    },
                    defaultClass: "ju367vf9",
                  },
                  actionButtonSecondaryBackground: {
                    conditions: {
                      base: "ju367vfc",
                      hover: "ju367vfd",
                      active: "ju367vfe",
                    },
                    defaultClass: "ju367vfc",
                  },
                  closeButton: {
                    conditions: {
                      base: "ju367vff",
                      hover: "ju367vfg",
                      active: "ju367vfh",
                    },
                    defaultClass: "ju367vff",
                  },
                  closeButtonBackground: {
                    conditions: {
                      base: "ju367vfi",
                      hover: "ju367vfj",
                      active: "ju367vfk",
                    },
                    defaultClass: "ju367vfi",
                  },
                  connectButtonBackground: {
                    conditions: {
                      base: "ju367vfl",
                      hover: "ju367vfm",
                      active: "ju367vfn",
                    },
                    defaultClass: "ju367vfl",
                  },
                  connectButtonBackgroundError: {
                    conditions: {
                      base: "ju367vfo",
                      hover: "ju367vfp",
                      active: "ju367vfq",
                    },
                    defaultClass: "ju367vfo",
                  },
                  connectButtonInnerBackground: {
                    conditions: {
                      base: "ju367vfr",
                      hover: "ju367vfs",
                      active: "ju367vft",
                    },
                    defaultClass: "ju367vfr",
                  },
                  connectButtonText: {
                    conditions: {
                      base: "ju367vfu",
                      hover: "ju367vfv",
                      active: "ju367vfw",
                    },
                    defaultClass: "ju367vfu",
                  },
                  connectButtonTextError: {
                    conditions: {
                      base: "ju367vfx",
                      hover: "ju367vfy",
                      active: "ju367vfz",
                    },
                    defaultClass: "ju367vfx",
                  },
                  connectionIndicator: {
                    conditions: {
                      base: "ju367vg0",
                      hover: "ju367vg1",
                      active: "ju367vg2",
                    },
                    defaultClass: "ju367vg0",
                  },
                  downloadBottomCardBackground: {
                    conditions: {
                      base: "ju367vg3",
                      hover: "ju367vg4",
                      active: "ju367vg5",
                    },
                    defaultClass: "ju367vg3",
                  },
                  downloadTopCardBackground: {
                    conditions: {
                      base: "ju367vg6",
                      hover: "ju367vg7",
                      active: "ju367vg8",
                    },
                    defaultClass: "ju367vg6",
                  },
                  error: {
                    conditions: {
                      base: "ju367vg9",
                      hover: "ju367vga",
                      active: "ju367vgb",
                    },
                    defaultClass: "ju367vg9",
                  },
                  generalBorder: {
                    conditions: {
                      base: "ju367vgc",
                      hover: "ju367vgd",
                      active: "ju367vge",
                    },
                    defaultClass: "ju367vgc",
                  },
                  generalBorderDim: {
                    conditions: {
                      base: "ju367vgf",
                      hover: "ju367vgg",
                      active: "ju367vgh",
                    },
                    defaultClass: "ju367vgf",
                  },
                  menuItemBackground: {
                    conditions: {
                      base: "ju367vgi",
                      hover: "ju367vgj",
                      active: "ju367vgk",
                    },
                    defaultClass: "ju367vgi",
                  },
                  modalBackdrop: {
                    conditions: {
                      base: "ju367vgl",
                      hover: "ju367vgm",
                      active: "ju367vgn",
                    },
                    defaultClass: "ju367vgl",
                  },
                  modalBackground: {
                    conditions: {
                      base: "ju367vgo",
                      hover: "ju367vgp",
                      active: "ju367vgq",
                    },
                    defaultClass: "ju367vgo",
                  },
                  modalBorder: {
                    conditions: {
                      base: "ju367vgr",
                      hover: "ju367vgs",
                      active: "ju367vgt",
                    },
                    defaultClass: "ju367vgr",
                  },
                  modalText: {
                    conditions: {
                      base: "ju367vgu",
                      hover: "ju367vgv",
                      active: "ju367vgw",
                    },
                    defaultClass: "ju367vgu",
                  },
                  modalTextDim: {
                    conditions: {
                      base: "ju367vgx",
                      hover: "ju367vgy",
                      active: "ju367vgz",
                    },
                    defaultClass: "ju367vgx",
                  },
                  modalTextSecondary: {
                    conditions: {
                      base: "ju367vh0",
                      hover: "ju367vh1",
                      active: "ju367vh2",
                    },
                    defaultClass: "ju367vh0",
                  },
                  profileAction: {
                    conditions: {
                      base: "ju367vh3",
                      hover: "ju367vh4",
                      active: "ju367vh5",
                    },
                    defaultClass: "ju367vh3",
                  },
                  profileActionHover: {
                    conditions: {
                      base: "ju367vh6",
                      hover: "ju367vh7",
                      active: "ju367vh8",
                    },
                    defaultClass: "ju367vh6",
                  },
                  profileForeground: {
                    conditions: {
                      base: "ju367vh9",
                      hover: "ju367vha",
                      active: "ju367vhb",
                    },
                    defaultClass: "ju367vh9",
                  },
                  selectedOptionBorder: {
                    conditions: {
                      base: "ju367vhc",
                      hover: "ju367vhd",
                      active: "ju367vhe",
                    },
                    defaultClass: "ju367vhc",
                  },
                  standby: {
                    conditions: {
                      base: "ju367vhf",
                      hover: "ju367vhg",
                      active: "ju367vhh",
                    },
                    defaultClass: "ju367vhf",
                  },
                },
              },
            },
          },
          {
            conditions: {
              defaultCondition: "smallScreen",
              conditionNames: ["smallScreen", "largeScreen"],
              responsiveArray: void 0,
            },
            styles: {
              alignItems: {
                values: {
                  "flex-start": {
                    conditions: {
                      smallScreen: "ju367v0",
                      largeScreen: "ju367v1",
                    },
                    defaultClass: "ju367v0",
                  },
                  "flex-end": {
                    conditions: {
                      smallScreen: "ju367v2",
                      largeScreen: "ju367v3",
                    },
                    defaultClass: "ju367v2",
                  },
                  center: {
                    conditions: {
                      smallScreen: "ju367v4",
                      largeScreen: "ju367v5",
                    },
                    defaultClass: "ju367v4",
                  },
                },
              },
              display: {
                values: {
                  none: {
                    conditions: {
                      smallScreen: "ju367v6",
                      largeScreen: "ju367v7",
                    },
                    defaultClass: "ju367v6",
                  },
                  block: {
                    conditions: {
                      smallScreen: "ju367v8",
                      largeScreen: "ju367v9",
                    },
                    defaultClass: "ju367v8",
                  },
                  flex: {
                    conditions: {
                      smallScreen: "ju367va",
                      largeScreen: "ju367vb",
                    },
                    defaultClass: "ju367va",
                  },
                  inline: {
                    conditions: {
                      smallScreen: "ju367vc",
                      largeScreen: "ju367vd",
                    },
                    defaultClass: "ju367vc",
                  },
                },
              },
            },
          },
          {
            conditions: void 0,
            styles: {
              margin: {
                mappings: [
                  "marginTop",
                  "marginBottom",
                  "marginLeft",
                  "marginRight",
                ],
              },
              marginX: { mappings: ["marginLeft", "marginRight"] },
              marginY: { mappings: ["marginTop", "marginBottom"] },
              padding: {
                mappings: [
                  "paddingTop",
                  "paddingBottom",
                  "paddingLeft",
                  "paddingRight",
                ],
              },
              paddingX: { mappings: ["paddingLeft", "paddingRight"] },
              paddingY: { mappings: ["paddingTop", "paddingBottom"] },
              alignSelf: {
                values: {
                  "flex-start": { defaultClass: "ju367ve" },
                  "flex-end": { defaultClass: "ju367vf" },
                  center: { defaultClass: "ju367vg" },
                },
              },
              backgroundSize: {
                values: { cover: { defaultClass: "ju367vh" } },
              },
              borderRadius: {
                values: {
                  1: { defaultClass: "ju367vi" },
                  6: { defaultClass: "ju367vj" },
                  10: { defaultClass: "ju367vk" },
                  13: { defaultClass: "ju367vl" },
                  actionButton: { defaultClass: "ju367vm" },
                  connectButton: { defaultClass: "ju367vn" },
                  menuButton: { defaultClass: "ju367vo" },
                  modal: { defaultClass: "ju367vp" },
                  modalMobile: { defaultClass: "ju367vq" },
                  "25%": { defaultClass: "ju367vr" },
                  full: { defaultClass: "ju367vs" },
                },
              },
              borderStyle: { values: { solid: { defaultClass: "ju367vt" } } },
              borderWidth: {
                values: {
                  0: { defaultClass: "ju367vu" },
                  1: { defaultClass: "ju367vv" },
                  2: { defaultClass: "ju367vw" },
                  4: { defaultClass: "ju367vx" },
                },
              },
              cursor: {
                values: {
                  pointer: { defaultClass: "ju367vy" },
                  none: { defaultClass: "ju367vz" },
                },
              },
              pointerEvents: {
                values: {
                  none: { defaultClass: "ju367v10" },
                  all: { defaultClass: "ju367v11" },
                },
              },
              minHeight: {
                values: {
                  8: { defaultClass: "ju367v12" },
                  44: { defaultClass: "ju367v13" },
                },
              },
              flexDirection: {
                values: {
                  row: { defaultClass: "ju367v14" },
                  column: { defaultClass: "ju367v15" },
                },
              },
              fontFamily: { values: { body: { defaultClass: "ju367v16" } } },
              fontSize: {
                values: {
                  12: { defaultClass: "ju367v17" },
                  13: { defaultClass: "ju367v18" },
                  14: { defaultClass: "ju367v19" },
                  16: { defaultClass: "ju367v1a" },
                  18: { defaultClass: "ju367v1b" },
                  20: { defaultClass: "ju367v1c" },
                  23: { defaultClass: "ju367v1d" },
                },
              },
              fontWeight: {
                values: {
                  regular: { defaultClass: "ju367v1e" },
                  medium: { defaultClass: "ju367v1f" },
                  semibold: { defaultClass: "ju367v1g" },
                  bold: { defaultClass: "ju367v1h" },
                  heavy: { defaultClass: "ju367v1i" },
                },
              },
              gap: {
                values: {
                  0: { defaultClass: "ju367v1j" },
                  1: { defaultClass: "ju367v1k" },
                  2: { defaultClass: "ju367v1l" },
                  3: { defaultClass: "ju367v1m" },
                  4: { defaultClass: "ju367v1n" },
                  5: { defaultClass: "ju367v1o" },
                  6: { defaultClass: "ju367v1p" },
                  8: { defaultClass: "ju367v1q" },
                  10: { defaultClass: "ju367v1r" },
                  12: { defaultClass: "ju367v1s" },
                  14: { defaultClass: "ju367v1t" },
                  16: { defaultClass: "ju367v1u" },
                  18: { defaultClass: "ju367v1v" },
                  20: { defaultClass: "ju367v1w" },
                  24: { defaultClass: "ju367v1x" },
                  28: { defaultClass: "ju367v1y" },
                  32: { defaultClass: "ju367v1z" },
                  36: { defaultClass: "ju367v20" },
                  44: { defaultClass: "ju367v21" },
                  64: { defaultClass: "ju367v22" },
                  "-1": { defaultClass: "ju367v23" },
                },
              },
              height: {
                values: {
                  1: { defaultClass: "ju367v24" },
                  2: { defaultClass: "ju367v25" },
                  4: { defaultClass: "ju367v26" },
                  8: { defaultClass: "ju367v27" },
                  12: { defaultClass: "ju367v28" },
                  20: { defaultClass: "ju367v29" },
                  24: { defaultClass: "ju367v2a" },
                  28: { defaultClass: "ju367v2b" },
                  30: { defaultClass: "ju367v2c" },
                  32: { defaultClass: "ju367v2d" },
                  34: { defaultClass: "ju367v2e" },
                  36: { defaultClass: "ju367v2f" },
                  40: { defaultClass: "ju367v2g" },
                  44: { defaultClass: "ju367v2h" },
                  48: { defaultClass: "ju367v2i" },
                  54: { defaultClass: "ju367v2j" },
                  60: { defaultClass: "ju367v2k" },
                  200: { defaultClass: "ju367v2l" },
                  full: { defaultClass: "ju367v2m" },
                  max: { defaultClass: "ju367v2n" },
                },
              },
              justifyContent: {
                values: {
                  "flex-start": { defaultClass: "ju367v2o" },
                  "flex-end": { defaultClass: "ju367v2p" },
                  center: { defaultClass: "ju367v2q" },
                  "space-between": { defaultClass: "ju367v2r" },
                  "space-around": { defaultClass: "ju367v2s" },
                },
              },
              textAlign: {
                values: {
                  left: { defaultClass: "ju367v2t" },
                  center: { defaultClass: "ju367v2u" },
                  inherit: { defaultClass: "ju367v2v" },
                },
              },
              marginBottom: {
                values: {
                  0: { defaultClass: "ju367v2w" },
                  1: { defaultClass: "ju367v2x" },
                  2: { defaultClass: "ju367v2y" },
                  3: { defaultClass: "ju367v2z" },
                  4: { defaultClass: "ju367v30" },
                  5: { defaultClass: "ju367v31" },
                  6: { defaultClass: "ju367v32" },
                  8: { defaultClass: "ju367v33" },
                  10: { defaultClass: "ju367v34" },
                  12: { defaultClass: "ju367v35" },
                  14: { defaultClass: "ju367v36" },
                  16: { defaultClass: "ju367v37" },
                  18: { defaultClass: "ju367v38" },
                  20: { defaultClass: "ju367v39" },
                  24: { defaultClass: "ju367v3a" },
                  28: { defaultClass: "ju367v3b" },
                  32: { defaultClass: "ju367v3c" },
                  36: { defaultClass: "ju367v3d" },
                  44: { defaultClass: "ju367v3e" },
                  64: { defaultClass: "ju367v3f" },
                  "-1": { defaultClass: "ju367v3g" },
                },
              },
              marginLeft: {
                values: {
                  0: { defaultClass: "ju367v3h" },
                  1: { defaultClass: "ju367v3i" },
                  2: { defaultClass: "ju367v3j" },
                  3: { defaultClass: "ju367v3k" },
                  4: { defaultClass: "ju367v3l" },
                  5: { defaultClass: "ju367v3m" },
                  6: { defaultClass: "ju367v3n" },
                  8: { defaultClass: "ju367v3o" },
                  10: { defaultClass: "ju367v3p" },
                  12: { defaultClass: "ju367v3q" },
                  14: { defaultClass: "ju367v3r" },
                  16: { defaultClass: "ju367v3s" },
                  18: { defaultClass: "ju367v3t" },
                  20: { defaultClass: "ju367v3u" },
                  24: { defaultClass: "ju367v3v" },
                  28: { defaultClass: "ju367v3w" },
                  32: { defaultClass: "ju367v3x" },
                  36: { defaultClass: "ju367v3y" },
                  44: { defaultClass: "ju367v3z" },
                  64: { defaultClass: "ju367v40" },
                  "-1": { defaultClass: "ju367v41" },
                },
              },
              marginRight: {
                values: {
                  0: { defaultClass: "ju367v42" },
                  1: { defaultClass: "ju367v43" },
                  2: { defaultClass: "ju367v44" },
                  3: { defaultClass: "ju367v45" },
                  4: { defaultClass: "ju367v46" },
                  5: { defaultClass: "ju367v47" },
                  6: { defaultClass: "ju367v48" },
                  8: { defaultClass: "ju367v49" },
                  10: { defaultClass: "ju367v4a" },
                  12: { defaultClass: "ju367v4b" },
                  14: { defaultClass: "ju367v4c" },
                  16: { defaultClass: "ju367v4d" },
                  18: { defaultClass: "ju367v4e" },
                  20: { defaultClass: "ju367v4f" },
                  24: { defaultClass: "ju367v4g" },
                  28: { defaultClass: "ju367v4h" },
                  32: { defaultClass: "ju367v4i" },
                  36: { defaultClass: "ju367v4j" },
                  44: { defaultClass: "ju367v4k" },
                  64: { defaultClass: "ju367v4l" },
                  "-1": { defaultClass: "ju367v4m" },
                },
              },
              marginTop: {
                values: {
                  0: { defaultClass: "ju367v4n" },
                  1: { defaultClass: "ju367v4o" },
                  2: { defaultClass: "ju367v4p" },
                  3: { defaultClass: "ju367v4q" },
                  4: { defaultClass: "ju367v4r" },
                  5: { defaultClass: "ju367v4s" },
                  6: { defaultClass: "ju367v4t" },
                  8: { defaultClass: "ju367v4u" },
                  10: { defaultClass: "ju367v4v" },
                  12: { defaultClass: "ju367v4w" },
                  14: { defaultClass: "ju367v4x" },
                  16: { defaultClass: "ju367v4y" },
                  18: { defaultClass: "ju367v4z" },
                  20: { defaultClass: "ju367v50" },
                  24: { defaultClass: "ju367v51" },
                  28: { defaultClass: "ju367v52" },
                  32: { defaultClass: "ju367v53" },
                  36: { defaultClass: "ju367v54" },
                  44: { defaultClass: "ju367v55" },
                  64: { defaultClass: "ju367v56" },
                  "-1": { defaultClass: "ju367v57" },
                },
              },
              maxWidth: {
                values: {
                  1: { defaultClass: "ju367v58" },
                  2: { defaultClass: "ju367v59" },
                  4: { defaultClass: "ju367v5a" },
                  8: { defaultClass: "ju367v5b" },
                  12: { defaultClass: "ju367v5c" },
                  20: { defaultClass: "ju367v5d" },
                  24: { defaultClass: "ju367v5e" },
                  28: { defaultClass: "ju367v5f" },
                  30: { defaultClass: "ju367v5g" },
                  32: { defaultClass: "ju367v5h" },
                  34: { defaultClass: "ju367v5i" },
                  36: { defaultClass: "ju367v5j" },
                  40: { defaultClass: "ju367v5k" },
                  44: { defaultClass: "ju367v5l" },
                  48: { defaultClass: "ju367v5m" },
                  54: { defaultClass: "ju367v5n" },
                  60: { defaultClass: "ju367v5o" },
                  200: { defaultClass: "ju367v5p" },
                  full: { defaultClass: "ju367v5q" },
                  max: { defaultClass: "ju367v5r" },
                },
              },
              minWidth: {
                values: {
                  1: { defaultClass: "ju367v5s" },
                  2: { defaultClass: "ju367v5t" },
                  4: { defaultClass: "ju367v5u" },
                  8: { defaultClass: "ju367v5v" },
                  12: { defaultClass: "ju367v5w" },
                  20: { defaultClass: "ju367v5x" },
                  24: { defaultClass: "ju367v5y" },
                  28: { defaultClass: "ju367v5z" },
                  30: { defaultClass: "ju367v60" },
                  32: { defaultClass: "ju367v61" },
                  34: { defaultClass: "ju367v62" },
                  36: { defaultClass: "ju367v63" },
                  40: { defaultClass: "ju367v64" },
                  44: { defaultClass: "ju367v65" },
                  48: { defaultClass: "ju367v66" },
                  54: { defaultClass: "ju367v67" },
                  60: { defaultClass: "ju367v68" },
                  200: { defaultClass: "ju367v69" },
                  full: { defaultClass: "ju367v6a" },
                  max: { defaultClass: "ju367v6b" },
                },
              },
              overflow: { values: { hidden: { defaultClass: "ju367v6c" } } },
              paddingBottom: {
                values: {
                  0: { defaultClass: "ju367v6d" },
                  1: { defaultClass: "ju367v6e" },
                  2: { defaultClass: "ju367v6f" },
                  3: { defaultClass: "ju367v6g" },
                  4: { defaultClass: "ju367v6h" },
                  5: { defaultClass: "ju367v6i" },
                  6: { defaultClass: "ju367v6j" },
                  8: { defaultClass: "ju367v6k" },
                  10: { defaultClass: "ju367v6l" },
                  12: { defaultClass: "ju367v6m" },
                  14: { defaultClass: "ju367v6n" },
                  16: { defaultClass: "ju367v6o" },
                  18: { defaultClass: "ju367v6p" },
                  20: { defaultClass: "ju367v6q" },
                  24: { defaultClass: "ju367v6r" },
                  28: { defaultClass: "ju367v6s" },
                  32: { defaultClass: "ju367v6t" },
                  36: { defaultClass: "ju367v6u" },
                  44: { defaultClass: "ju367v6v" },
                  64: { defaultClass: "ju367v6w" },
                  "-1": { defaultClass: "ju367v6x" },
                },
              },
              paddingLeft: {
                values: {
                  0: { defaultClass: "ju367v6y" },
                  1: { defaultClass: "ju367v6z" },
                  2: { defaultClass: "ju367v70" },
                  3: { defaultClass: "ju367v71" },
                  4: { defaultClass: "ju367v72" },
                  5: { defaultClass: "ju367v73" },
                  6: { defaultClass: "ju367v74" },
                  8: { defaultClass: "ju367v75" },
                  10: { defaultClass: "ju367v76" },
                  12: { defaultClass: "ju367v77" },
                  14: { defaultClass: "ju367v78" },
                  16: { defaultClass: "ju367v79" },
                  18: { defaultClass: "ju367v7a" },
                  20: { defaultClass: "ju367v7b" },
                  24: { defaultClass: "ju367v7c" },
                  28: { defaultClass: "ju367v7d" },
                  32: { defaultClass: "ju367v7e" },
                  36: { defaultClass: "ju367v7f" },
                  44: { defaultClass: "ju367v7g" },
                  64: { defaultClass: "ju367v7h" },
                  "-1": { defaultClass: "ju367v7i" },
                },
              },
              paddingRight: {
                values: {
                  0: { defaultClass: "ju367v7j" },
                  1: { defaultClass: "ju367v7k" },
                  2: { defaultClass: "ju367v7l" },
                  3: { defaultClass: "ju367v7m" },
                  4: { defaultClass: "ju367v7n" },
                  5: { defaultClass: "ju367v7o" },
                  6: { defaultClass: "ju367v7p" },
                  8: { defaultClass: "ju367v7q" },
                  10: { defaultClass: "ju367v7r" },
                  12: { defaultClass: "ju367v7s" },
                  14: { defaultClass: "ju367v7t" },
                  16: { defaultClass: "ju367v7u" },
                  18: { defaultClass: "ju367v7v" },
                  20: { defaultClass: "ju367v7w" },
                  24: { defaultClass: "ju367v7x" },
                  28: { defaultClass: "ju367v7y" },
                  32: { defaultClass: "ju367v7z" },
                  36: { defaultClass: "ju367v80" },
                  44: { defaultClass: "ju367v81" },
                  64: { defaultClass: "ju367v82" },
                  "-1": { defaultClass: "ju367v83" },
                },
              },
              paddingTop: {
                values: {
                  0: { defaultClass: "ju367v84" },
                  1: { defaultClass: "ju367v85" },
                  2: { defaultClass: "ju367v86" },
                  3: { defaultClass: "ju367v87" },
                  4: { defaultClass: "ju367v88" },
                  5: { defaultClass: "ju367v89" },
                  6: { defaultClass: "ju367v8a" },
                  8: { defaultClass: "ju367v8b" },
                  10: { defaultClass: "ju367v8c" },
                  12: { defaultClass: "ju367v8d" },
                  14: { defaultClass: "ju367v8e" },
                  16: { defaultClass: "ju367v8f" },
                  18: { defaultClass: "ju367v8g" },
                  20: { defaultClass: "ju367v8h" },
                  24: { defaultClass: "ju367v8i" },
                  28: { defaultClass: "ju367v8j" },
                  32: { defaultClass: "ju367v8k" },
                  36: { defaultClass: "ju367v8l" },
                  44: { defaultClass: "ju367v8m" },
                  64: { defaultClass: "ju367v8n" },
                  "-1": { defaultClass: "ju367v8o" },
                },
              },
              position: {
                values: {
                  absolute: { defaultClass: "ju367v8p" },
                  fixed: { defaultClass: "ju367v8q" },
                  relative: { defaultClass: "ju367v8r" },
                },
              },
              WebkitUserSelect: {
                values: { none: { defaultClass: "ju367v8s" } },
              },
              right: { values: { 0: { defaultClass: "ju367v8t" } } },
              transition: {
                values: {
                  default: { defaultClass: "ju367v8u" },
                  transform: { defaultClass: "ju367v8v" },
                },
              },
              userSelect: { values: { none: { defaultClass: "ju367v8w" } } },
              width: {
                values: {
                  1: { defaultClass: "ju367v8x" },
                  2: { defaultClass: "ju367v8y" },
                  4: { defaultClass: "ju367v8z" },
                  8: { defaultClass: "ju367v90" },
                  12: { defaultClass: "ju367v91" },
                  20: { defaultClass: "ju367v92" },
                  24: { defaultClass: "ju367v93" },
                  28: { defaultClass: "ju367v94" },
                  30: { defaultClass: "ju367v95" },
                  32: { defaultClass: "ju367v96" },
                  34: { defaultClass: "ju367v97" },
                  36: { defaultClass: "ju367v98" },
                  40: { defaultClass: "ju367v99" },
                  44: { defaultClass: "ju367v9a" },
                  48: { defaultClass: "ju367v9b" },
                  54: { defaultClass: "ju367v9c" },
                  60: { defaultClass: "ju367v9d" },
                  200: { defaultClass: "ju367v9e" },
                  full: { defaultClass: "ju367v9f" },
                  max: { defaultClass: "ju367v9g" },
                },
              },
              backdropFilter: {
                values: { modalOverlay: { defaultClass: "ju367v9h" } },
              },
            },
          }
        ),
        M = {
          colors: {
            accentColor: "var(--rk-colors-accentColor)",
            accentColorForeground: "var(--rk-colors-accentColorForeground)",
            actionButtonBorder: "var(--rk-colors-actionButtonBorder)",
            actionButtonBorderMobile:
              "var(--rk-colors-actionButtonBorderMobile)",
            actionButtonSecondaryBackground:
              "var(--rk-colors-actionButtonSecondaryBackground)",
            closeButton: "var(--rk-colors-closeButton)",
            closeButtonBackground: "var(--rk-colors-closeButtonBackground)",
            connectButtonBackground: "var(--rk-colors-connectButtonBackground)",
            connectButtonBackgroundError:
              "var(--rk-colors-connectButtonBackgroundError)",
            connectButtonInnerBackground:
              "var(--rk-colors-connectButtonInnerBackground)",
            connectButtonText: "var(--rk-colors-connectButtonText)",
            connectButtonTextError: "var(--rk-colors-connectButtonTextError)",
            connectionIndicator: "var(--rk-colors-connectionIndicator)",
            downloadBottomCardBackground:
              "var(--rk-colors-downloadBottomCardBackground)",
            downloadTopCardBackground:
              "var(--rk-colors-downloadTopCardBackground)",
            error: "var(--rk-colors-error)",
            generalBorder: "var(--rk-colors-generalBorder)",
            generalBorderDim: "var(--rk-colors-generalBorderDim)",
            menuItemBackground: "var(--rk-colors-menuItemBackground)",
            modalBackdrop: "var(--rk-colors-modalBackdrop)",
            modalBackground: "var(--rk-colors-modalBackground)",
            modalBorder: "var(--rk-colors-modalBorder)",
            modalText: "var(--rk-colors-modalText)",
            modalTextDim: "var(--rk-colors-modalTextDim)",
            modalTextSecondary: "var(--rk-colors-modalTextSecondary)",
            profileAction: "var(--rk-colors-profileAction)",
            profileActionHover: "var(--rk-colors-profileActionHover)",
            profileForeground: "var(--rk-colors-profileForeground)",
            selectedOptionBorder: "var(--rk-colors-selectedOptionBorder)",
            standby: "var(--rk-colors-standby)",
          },
          fonts: { body: "var(--rk-fonts-body)" },
          radii: {
            actionButton: "var(--rk-radii-actionButton)",
            connectButton: "var(--rk-radii-connectButton)",
            menuButton: "var(--rk-radii-menuButton)",
            modal: "var(--rk-radii-modal)",
            modalMobile: "var(--rk-radii-modalMobile)",
          },
          shadows: {
            connectButton: "var(--rk-shadows-connectButton)",
            dialog: "var(--rk-shadows-dialog)",
            profileDetailsAction: "var(--rk-shadows-profileDetailsAction)",
            selectedOption: "var(--rk-shadows-selectedOption)",
            selectedWallet: "var(--rk-shadows-selectedWallet)",
            walletLogo: "var(--rk-shadows-walletLogo)",
          },
          blurs: { modalOverlay: "var(--rk-blurs-modalOverlay)" },
        },
        A = { shrink: "_12cbo8i6", shrinkSm: "_12cbo8i7" },
        U = { grow: "_12cbo8i4", growLg: "_12cbo8i5" };
      function F({ active: e, hover: t }) {
        return ["_12cbo8i3 ju367v8r", t && U[t], A[e]];
      }
      var z = (0, r.createContext)(null);
      function R() {
        let e = (0, r.useContext)(z);
        return e?.status ?? null;
      }
      function $() {
        let e = R(),
          { isConnected: t } = (0, c.m)();
        return t
          ? e && ("loading" === e || "unauthenticated" === e)
            ? e
            : "connected"
          : "disconnected";
      }
      function W() {
        return (
          ("undefined" != typeof navigator &&
            /iPhone|iPod/.test(navigator.userAgent)) ||
          ("undefined" != typeof navigator &&
            (/iPad/.test(navigator.userAgent) ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1)))
        );
      }
      function P() {
        return (
          ("undefined" != typeof navigator &&
            /android/i.test(navigator.userAgent)) ||
          W()
        );
      }
      var q = {
          a: "iekbcca",
          blockquote: "iekbcc2",
          button: "iekbcc9",
          input: "iekbcc8 iekbcc5 iekbcc4",
          mark: "iekbcc6",
          ol: "iekbcc1",
          q: "iekbcc2",
          select: "iekbcc7 iekbcc5 iekbcc4",
          table: "iekbcc3",
          textarea: "iekbcc5 iekbcc4",
          ul: "iekbcc1",
        },
        H = ({ reset: e, ...t }) => {
          if (!e) return O(t);
          let a = q[e],
            n = O(t);
          return (0, u.Z)("iekbcc0", a, n);
        },
        X = r.forwardRef(
          ({ as: e = "div", className: t, testId: a, ...n }, l) => {
            let o = {},
              i = {};
            for (let e in n)
              O.properties.has(e) ? (o[e] = n[e]) : (i[e] = n[e]);
            let s = H({ reset: "string" == typeof e ? e : "div", ...o });
            return r.createElement(e, {
              className: (0, u.Z)(s, t),
              ...i,
              "data-testid": a ? `rk-${a.replace(/^rk-/, "")}` : void 0,
              ref: l,
            });
          }
        );
      X.displayName = "Box";
      var Z = new Map(),
        Y = new Map();
      async function K(e) {
        let t = Y.get(e);
        if (t) return t;
        let a = async () => e().then(async (t) => (Z.set(e, t), t)),
          n = a().catch((t) =>
            a().catch((t) => {
              Y.delete(e);
            })
          );
        return Y.set(e, n), n;
      }
      async function V(...e) {
        return await Promise.all(
          e.map((e) => ("function" == typeof e ? K(e) : e))
        );
      }
      function G(e) {
        let t = "function" == typeof e ? Z.get(e) : void 0,
          a = (function () {
            let [, e] = (0, r.useReducer)((e) => e + 1, 0);
            return e;
          })();
        return (
          (0, r.useEffect)(() => {
            "function" != typeof e || t || K(e).then(a);
          }, [e, t, a]),
          "function" == typeof e ? t : e
        );
      }
      function J({
        alt: e,
        background: t,
        borderColor: a,
        borderRadius: n,
        useAsImage: l,
        boxShadow: o,
        height: i,
        src: s,
        width: c,
        testId: u,
      }) {
        let d = W(),
          f = G(s),
          m = f && /^http/.test(f),
          [v, g] = (0, r.useReducer)(() => !0, !1);
        return r.createElement(
          X,
          {
            "aria-label": e,
            borderRadius: n,
            boxShadow: o,
            height: "string" == typeof i ? i : void 0,
            overflow: "hidden",
            position: "relative",
            role: "img",
            style: {
              background: t,
              height: "number" == typeof i ? i : void 0,
              width: "number" == typeof c ? c : void 0,
            },
            width: "string" == typeof c ? c : void 0,
            testId: u,
          },
          r.createElement(X, {
            ...(m
              ? { "aria-hidden": !0, as: "img", onLoad: g, src: f }
              : { "aria-hidden": !0, as: "img", src: f }),
            height: "full",
            position: "absolute",
            ...(d ? { WebkitUserSelect: "none" } : {}),
            style: {
              WebkitTouchCallout: "none",
              transition: "opacity .15s linear",
              userSelect: "none",
              ...(!l && m ? { opacity: v ? 1 : 0 } : {}),
            },
            width: "full",
          }),
          a
            ? r.createElement(X, {
                ...("object" == typeof a && "custom" in a
                  ? { style: { borderColor: a.custom } }
                  : { borderColor: a }),
                borderRadius: n,
                borderStyle: "solid",
                borderWidth: "1",
                height: "full",
                position: "relative",
                width: "full",
              })
            : null
        );
      }
      var Q = (e) =>
          (0, r.useMemo)(() => `${e}_${Math.round(1e9 * Math.random())}`, [e]),
        ee = ({ height: e = 21, width: t = 21 }) => {
          let a = Q("spinner");
          return r.createElement(
            "svg",
            {
              className: "_1luule42",
              fill: "none",
              height: e,
              viewBox: "0 0 21 21",
              width: t,
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Loading"),
            r.createElement(
              "clipPath",
              { id: a },
              r.createElement("path", {
                d: "M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z",
              })
            ),
            r.createElement(
              "foreignObject",
              {
                clipPath: `url(#${a})`,
                height: "21",
                width: "21",
                x: "0",
                y: "0",
              },
              r.createElement("div", { className: "_1luule43" })
            )
          );
        },
        et = [
          { color: "#FC5C54", emoji: "\uD83C\uDF36" },
          { color: "#FFD95A", emoji: "\uD83E\uDD11" },
          { color: "#E95D72", emoji: "\uD83D\uDC19" },
          { color: "#6A87C8", emoji: "\uD83E\uDED0" },
          { color: "#5FD0F3", emoji: "\uD83D\uDC33" },
          { color: "#FC5C54", emoji: "\uD83E\uDD36" },
          { color: "#75C06B", emoji: "\uD83C\uDF32" },
          { color: "#FFDD86", emoji: "\uD83C\uDF1E" },
          { color: "#5FC6D4", emoji: "\uD83D\uDC12" },
          { color: "#FF949A", emoji: "\uD83D\uDC35" },
          { color: "#FF8024", emoji: "\uD83E\uDD8A" },
          { color: "#9BA1A4", emoji: "\uD83D\uDC3C" },
          { color: "#EC66FF", emoji: "\uD83E\uDD84" },
          { color: "#FF8CBC", emoji: "\uD83D\uDC37" },
          { color: "#FF9A23", emoji: "\uD83D\uDC27" },
          { color: "#FF949A", emoji: "\uD83E\uDDA9" },
          { color: "#C5DADB", emoji: "\uD83D\uDC7D" },
          { color: "#FC5C54", emoji: "\uD83C\uDF88" },
          { color: "#FF949A", emoji: "\uD83C\uDF49" },
          { color: "#FFD95A", emoji: "\uD83C\uDF89" },
          { color: "#A8CE63", emoji: "\uD83D\uDC32" },
          { color: "#71ABFF", emoji: "\uD83C\uDF0E" },
          { color: "#FFE279", emoji: "\uD83C\uDF4A" },
          { color: "#B6B1B6", emoji: "\uD83D\uDC2D" },
          { color: "#FF6780", emoji: "\uD83C\uDF63" },
          { color: "#FFD95A", emoji: "\uD83D\uDC25" },
          { color: "#A575FF", emoji: "\uD83D\uDC7E" },
          { color: "#A8CE63", emoji: "\uD83E\uDD66" },
          { color: "#FC5C54", emoji: "\uD83D\uDC79" },
          { color: "#FFE279", emoji: "\uD83D\uDE40" },
          { color: "#5FD0F3", emoji: "⛱" },
          { color: "#4D82FF", emoji: "⛵️" },
          { color: "#FFE279", emoji: "\uD83E\uDD73" },
          { color: "#FF949A", emoji: "\uD83E\uDD2F" },
          { color: "#FFB35A", emoji: "\uD83E\uDD20" },
        ],
        ea = ({ address: e, ensImage: t, size: a }) => {
          let [n, l] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            if (t) {
              let e = new Image();
              (e.src = t), (e.onload = () => l(!0));
            }
          }, [t]);
          let { color: o, emoji: i } = (0, r.useMemo)(
            () =>
              (function (e) {
                let t = Math.abs(
                  (function (e) {
                    let t = 0;
                    if (0 === e.length) return t;
                    for (let a = 0; a < e.length; a++)
                      t = ((t << 5) - t + e.charCodeAt(a)) | 0;
                    return t;
                  })(("string" == typeof e ? e : "").toLowerCase()) % et.length
                );
                return et[t ?? 0];
              })(e),
            [e]
          );
          return t
            ? n
              ? r.createElement(X, {
                  backgroundSize: "cover",
                  borderRadius: "full",
                  position: "absolute",
                  style: {
                    backgroundImage: `url(${t})`,
                    backgroundPosition: "center",
                    height: a,
                    width: a,
                  },
                })
              : r.createElement(
                  X,
                  {
                    alignItems: "center",
                    backgroundSize: "cover",
                    borderRadius: "full",
                    color: "modalText",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    style: { height: a, width: a },
                  },
                  r.createElement(ee, null)
                )
            : r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden",
                  style: {
                    ...(!t && { backgroundColor: o }),
                    height: a,
                    width: a,
                  },
                },
                i
              );
        },
        en = (0, r.createContext)(ea);
      function el({ address: e, imageUrl: t, loading: a, size: n }) {
        let l = (0, r.useContext)(en);
        return r.createElement(
          X,
          {
            "aria-hidden": !0,
            borderRadius: "full",
            overflow: "hidden",
            position: "relative",
            style: { height: `${n}px`, width: `${n}px` },
            userSelect: "none",
          },
          r.createElement(
            X,
            {
              alignItems: "center",
              borderRadius: "full",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "absolute",
              style: {
                fontSize: `${Math.round(0.55 * n)}px`,
                height: `${n}px`,
                transform: a ? "scale(0.72)" : void 0,
                transition: ".25s ease",
                transitionDelay: a ? void 0 : ".1s",
                width: `${n}px`,
                willChange: "transform",
              },
              userSelect: "none",
            },
            r.createElement(l, { address: e, ensImage: t, size: n })
          ),
          a &&
            r.createElement(
              X,
              {
                color: "accentColor",
                display: "flex",
                height: "full",
                position: "absolute",
                width: "full",
              },
              r.createElement(ee, { height: "100%", width: "100%" })
            )
        );
      }
      var eo = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "7",
              width: "14",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Dropdown"),
            r.createElement("path", {
              d: "M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.5",
              xmlns: "http://www.w3.org/2000/svg",
            })
          ),
        er = new (class {
          constructor(e) {
            for (let [t, a] of ((this.listeners = new Set()),
            (this.defaultLocale = "en"),
            (this.enableFallback = !1),
            (this.locale = "en"),
            (this.cachedLocales = []),
            (this.translations = {}),
            Object.entries(e)))
              (this.cachedLocales = [...this.cachedLocales, t]),
                (this.translations = {
                  ...this.translations,
                  ...this.flattenTranslation(a, t),
                });
          }
          missingMessage(e) {
            return `[missing: "${this.locale}.${e}" translation]`;
          }
          flattenTranslation(e, t) {
            let a = {},
              n = (e, t) => {
                for (let l of Object.keys(e)) {
                  let o = `${t}.${l}`,
                    r = e[l];
                  "object" == typeof r && null !== r ? n(r, o) : (a[o] = r);
                }
              };
            return n(e, t), a;
          }
          translateWithReplacements(e, t = {}) {
            let a = e;
            for (let e in t) {
              let n = t[e];
              a = a.replace(`%{${e}}`, n);
            }
            return a;
          }
          t(e, t, a) {
            let n = `${this.locale}.${e}`,
              l = this.translations[n];
            if (!l) {
              if (this.enableFallback) {
                let a = `${this.defaultLocale}.${e}`,
                  n = this.translations[a];
                if (n) return this.translateWithReplacements(n, t);
              }
              return a?.rawKeyIfTranslationMissing ? e : this.missingMessage(e);
            }
            return this.translateWithReplacements(l, t);
          }
          isLocaleCached(e) {
            return this.cachedLocales.includes(e);
          }
          updateLocale(e) {
            (this.locale = e), this.notifyListeners();
          }
          setTranslations(e, t) {
            this.isLocaleCached(e) ||
              ((this.cachedLocales = [...this.cachedLocales, e]),
              (this.translations = {
                ...this.translations,
                ...this.flattenTranslation(t, e),
              })),
              (this.locale = e),
              this.notifyListeners();
          }
          notifyListeners() {
            for (let e of this.listeners) e();
          }
          onChange(e) {
            return (
              this.listeners.add(e),
              () => {
                this.listeners.delete(e);
              }
            );
          }
        })({ en: JSON.parse(o.I), "en-US": JSON.parse(o.I) });
      (er.defaultLocale = "en-US"),
        (er.locale = "en-US"),
        (er.enableFallback = !0);
      var ei = async (e) => {
        switch (e) {
          case "ar":
          case "ar-AR":
            return (await a.e(7142).then(a.bind(a, 17142))).default;
          case "de":
          case "de-DE":
            return (await a.e(5537).then(a.bind(a, 65537))).default;
          case "en":
          case "en-US":
          default:
            return (await a.e(6094).then(a.bind(a, 86094))).default;
          case "es":
          case "es-419":
            return (await a.e(8749).then(a.bind(a, 8749))).default;
          case "fr":
          case "fr-FR":
            return (await a.e(4007).then(a.bind(a, 84007))).default;
          case "hi":
          case "hi-IN":
            return (await a.e(5105).then(a.bind(a, 64814))).default;
          case "id":
          case "id-ID":
            return (await a.e(2821).then(a.bind(a, 42821))).default;
          case "ja":
          case "ja-JP":
            return (await a.e(3653).then(a.bind(a, 43653))).default;
          case "ko":
          case "ko-KR":
            return (await a.e(654).then(a.bind(a, 70654))).default;
          case "ms":
          case "ms-MY":
            return (await a.e(3716).then(a.bind(a, 3716))).default;
          case "pt":
          case "pt-BR":
            return (await a.e(1838).then(a.bind(a, 61838))).default;
          case "ru":
          case "ru-RU":
            return (await a.e(8662).then(a.bind(a, 88067))).default;
          case "th":
          case "th-TH":
            return (await a.e(2598).then(a.bind(a, 34697))).default;
          case "tr":
          case "tr-TR":
            return (await a.e(1099).then(a.bind(a, 11099))).default;
          case "ua":
          case "uk-UA":
            return (await a.e(1813).then(a.bind(a, 93660))).default;
          case "vi":
          case "vi-VN":
            return (await a.e(2427).then(a.bind(a, 32427))).default;
          case "zh":
          case "zh-CN":
          case "zh-Hans":
            return (await a.e(4494).then(a.bind(a, 4494))).default;
          case "zh-HK":
            return (await a.e(1869).then(a.bind(a, 51869))).default;
          case "zh-Hant":
          case "zh-TW":
            return (await a.e(1893).then(a.bind(a, 91893))).default;
        }
      };
      async function es(e) {
        if (er.isLocaleCached(e)) {
          er.updateLocale(e);
          return;
        }
        let t = await ei(e);
        er.setTranslations(e, JSON.parse(t));
      }
      var ec = () => {
          if ("undefined" != typeof window && "undefined" != typeof navigator) {
            if (navigator.languages?.length) return navigator.languages[0];
            if (navigator.language) return navigator.language;
          }
        },
        eu = (0, r.createContext)({ i18n: er }),
        ed = ({ children: e, locale: t }) => {
          let [a, n] = (0, r.useState)(0),
            l = (0, r.useMemo)(() => ec(), []);
          (0, r.useEffect)(
            () =>
              er.onChange(() => {
                n((e) => e + 1);
              }),
            []
          ),
            (0, r.useEffect)(() => {
              t && t !== er.locale
                ? es(t)
                : !t && l && l !== er.locale && es(l);
            }, [t, l]);
          let o = (0, r.useMemo)(
            () => ({ t: (e, t) => er.t(e, t), i18n: er }),
            [a]
          );
          return r.createElement(eu.Provider, { value: o }, e);
        };
      function ef(e) {
        return null != e;
      }
      var em = {
          iconBackground: "#7290CC",
          iconUrl: async () => (await a.e(2211).then(a.bind(a, 82211))).default,
        },
        ev = {
          iconBackground: "#96bedc",
          iconUrl: async () => (await a.e(7924).then(a.bind(a, 77924))).default,
        },
        eg = {
          iconBackground: "#e84141",
          iconUrl: async () => (await a.e(8345).then(a.bind(a, 28345))).default,
        },
        eh = {
          iconBackground: "#0052ff",
          iconUrl: async () => (await a.e(6542).then(a.bind(a, 38452))).default,
        },
        ep = {
          iconBackground: "#814625",
          iconUrl: async () => (await a.e(5267).then(a.bind(a, 15267))).default,
        },
        eC = {
          iconBackground: "#000000",
          iconUrl: async () => (await a.e(707).then(a.bind(a, 707))).default,
        },
        ej = {
          iconBackground: "#ebac0e",
          iconUrl: async () => (await a.e(2556).then(a.bind(a, 22556))).default,
        },
        eb = {
          iconBackground: "#FCFF52",
          iconUrl: async () => (await a.e(3070).then(a.bind(a, 83070))).default,
        },
        ew = {
          iconBackground: "#002D74",
          iconUrl: async () => (await a.e(3858).then(a.bind(a, 23858))).default,
        },
        eE = {
          iconBackground: "#484c50",
          iconUrl: async () => (await a.e(6876).then(a.bind(a, 86876))).default,
        },
        ey = {
          iconBackground: "transparent",
          iconUrl: async () => (await a.e(3883).then(a.bind(a, 23883))).default,
        },
        ex = {
          iconBackground: "#000000",
          iconUrl: async () => (await a.e(8099).then(a.bind(a, 18099))).default,
        },
        ek = {
          iconBackground: "#7132F5",
          iconUrl: async () => (await a.e(6544).then(a.bind(a, 56544))).default,
        },
        eB = {
          iconBackground: "transparent",
          iconUrl: async () => (await a.e(1857).then(a.bind(a, 21857))).default,
        },
        eI = {
          iconBackground: "#ffffff",
          iconUrl: async () => (await a.e(192).then(a.bind(a, 192))).default,
        },
        eT = {
          iconBackground: "#ffffff",
          iconUrl: async () => (await a.e(883).then(a.bind(a, 60883))).default,
        },
        eS = {
          iconBackground: "#000000",
          iconUrl: async () => (await a.e(1380).then(a.bind(a, 61380))).default,
        },
        eD = {
          iconBackground: "#ff5a57",
          iconUrl: async () => (await a.e(8243).then(a.bind(a, 8243))).default,
        },
        eN = {
          iconBackground: "#9f71ec",
          iconUrl: async () => (await a.e(3072).then(a.bind(a, 63072))).default,
        },
        e_ = {
          iconBackground: "#FFEEDA",
          iconUrl: async () => (await a.e(5995).then(a.bind(a, 25995))).default,
        },
        eL = {
          iconBackground: "#F50DB4",
          iconUrl: async () => (await a.e(185).then(a.bind(a, 70185))).default,
        },
        eO = {
          iconBackground: "#f9f7ec",
          iconUrl: async () => (await a.e(2726).then(a.bind(a, 22726))).default,
        },
        eM = {
          iconBackground: "#000000",
          iconUrl: async () => (await a.e(96).then(a.bind(a, 96))).default,
        },
        eA = {
          iconBackground: "#f9f7ec",
          iconUrl: async () => (await a.e(3394).then(a.bind(a, 33394))).default,
        },
        eU = {
          iconBackground: "#000000",
          iconUrl: async () => (await a.e(9117).then(a.bind(a, 49117))).default,
        },
        eF = Object.fromEntries(
          Object.values({
            apechain: { chainId: 33139, name: "ApeChain", ...em },
            apechainCurtis: { chainId: 33111, name: "ApeChain Curtis", ...em },
            arbitrum: { chainId: 42161, name: "Arbitrum", ...ev },
            arbitrumGoerli: { chainId: 421613, ...ev },
            arbitrumSepolia: { chainId: 421614, ...ev },
            avalanche: { chainId: 43114, ...eg },
            avalancheFuji: { chainId: 43113, ...eg },
            base: { chainId: 8453, name: "Base", ...eh },
            baseGoerli: { chainId: 84531, ...eh },
            baseSepolia: { chainId: 84532, ...eh },
            berachain: { chainId: 80094, name: "Berachain", ...ep },
            berachainArtio: { chainId: 80085, name: "Berachain Artio", ...ep },
            berachainBArtio: {
              chainId: 80084,
              name: "Berachain bArtio",
              ...ep,
            },
            blast: { chainId: 81457, name: "Blast", ...eC },
            blastSepolia: { chainId: 168587773, ...eC },
            bsc: { chainId: 56, name: "BSC", ...ej },
            bscTestnet: { chainId: 97, ...ej },
            celo: { chainId: 42220, name: "Celo", ...eb },
            celoAlfajores: { chainId: 44787, name: "Celo Alfajores", ...eb },
            cronos: { chainId: 25, ...ew },
            cronosTestnet: { chainId: 338, ...ew },
            degen: {
              chainId: 666666666,
              name: "Degen",
              iconBackground: "#A36EFD",
              iconUrl: async () =>
                (await a.e(2991).then(a.bind(a, 82991))).default,
            },
            flow: { chainId: 747, ...ey },
            flowTestnet: { chainId: 545, ...ey },
            gnosis: {
              chainId: 100,
              name: "Gnosis",
              iconBackground: "#04795c",
              iconUrl: async () =>
                (await a.e(100).then(a.bind(a, 100))).default,
            },
            goerli: { chainId: 5, ...eE },
            gravity: { chainId: 1625, name: "Gravity", ...ex },
            gravitySepolia: { chainId: 13505, name: "Gravity Sepolia", ...ex },
            hardhat: {
              chainId: 31337,
              iconBackground: "#f9f7ec",
              iconUrl: async () =>
                (await a.e(5461).then(a.bind(a, 85461))).default,
            },
            holesky: { chainId: 17e3, ...eE },
            hyperevm: {
              chainId: 999,
              iconBackground: "#000000",
              iconUrl: async () =>
                (await a.e(4430).then(a.bind(a, 24430))).default,
            },
            ink: { chainId: 57073, ...ek },
            inkSepolia: { chainId: 763373, ...ek },
            kaia: { chainId: 8217, name: "Kaia", ...eB },
            kairos: { chainId: 1001, name: "Kairos", ...eB },
            kovan: { chainId: 42, ...eE },
            linea: { chainId: 59144, name: "Linea", ...eI },
            lineaGoerli: { chainId: 59140, name: "Linea Goerli", ...eI },
            lineaSepolia: { chainId: 59141, name: "Linea Sepolia", ...eI },
            localhost: { chainId: 1337, ...eE },
            mainnet: { chainId: 1, name: "Ethereum", ...eE },
            manta: { chainId: 169, name: "Manta", ...eT },
            mantaSepolia: { chainId: 3441006, ...eT },
            mantaTestnet: { chainId: 3441005, ...eT },
            mantle: { chainId: 5e3, ...eS },
            mantleTestnet: { chainId: 5001, ...eS },
            optimism: { chainId: 10, name: "Optimism", ...eD },
            optimismGoerli: { chainId: 420, ...eD },
            optimismKovan: { chainId: 69, ...eD },
            optimismSepolia: { chainId: 11155420, ...eD },
            polygon: { chainId: 137, name: "Polygon", ...eN },
            polygonAmoy: { chainId: 80002, ...eN },
            polygonMumbai: { chainId: 80001, ...eN },
            rinkeby: { chainId: 4, ...eE },
            ronin: {
              chainId: 2020,
              iconBackground: "#1273EA",
              iconUrl: async () =>
                (await a.e(5524).then(a.bind(a, 15524))).default,
            },
            ropsten: { chainId: 3, ...eE },
            sanko: {
              chainId: 1996,
              name: "Sanko",
              iconBackground: "#000000",
              iconUrl: async () =>
                (await a.e(1537).then(a.bind(a, 91537))).default,
            },
            scroll: { chainId: 534352, ...e_ },
            scrollSepolia: { chainId: 534351, ...e_ },
            sepolia: { chainId: 11155111, ...eE },
            unichain: { chainId: 130, ...eL },
            unichainSepolia: { chainId: 1301, ...eL },
            xdc: { chainId: 50, name: "XinFin", ...eO },
            xdcTestnet: { chainId: 51, ...eO },
            zetachain: { chainId: 7e3, name: "ZetaChain", ...eM },
            zetachainAthensTestnet: {
              chainId: 7001,
              name: "Zeta Athens",
              ...eM,
            },
            zkSync: { chainId: 324, name: "zkSync", ...eA },
            zkSyncTestnet: { chainId: 280, ...eA },
            zora: { chainId: 7777777, name: "Zora", ...eU },
            zoraSepolia: { chainId: 999999999, ...eU },
            zoraTestnet: { chainId: 999, ...eU },
          })
            .filter(ef)
            .map(({ chainId: e, ...t }) => [e, t])
        ),
        ez = (e) =>
          e.map((e) => {
            let t = eF[e.id] ?? {};
            return {
              ...e,
              name: t.name ?? e.name,
              iconUrl: e.iconUrl ?? t.iconUrl,
              iconBackground: e.iconBackground ?? t.iconBackground,
            };
          }),
        eR = (0, r.createContext)({ chains: [] });
      function e$({ children: e, initialChain: t }) {
        let { chains: a } = (0, d.Z)();
        return r.createElement(
          eR.Provider,
          {
            value: (0, r.useMemo)(
              () => ({
                chains: ez(a),
                initialChainId: "number" == typeof t ? t : t?.id,
              }),
              [a, t]
            ),
          },
          e
        );
      }
      var eW = () => (0, r.useContext)(eR).chains,
        eP = () => (0, r.useContext)(eR).initialChainId,
        eq = () => {
          let e = eW();
          return (0, r.useMemo)(() => {
            let t = {};
            for (let a of e) t[a.id] = a;
            return t;
          }, [e]);
        },
        eH = (0, r.createContext)({
          showBalance: void 0,
          setShowBalance: () => {},
        });
      function eX({ children: e }) {
        let [t, a] = (0, r.useState)();
        return r.createElement(
          eH.Provider,
          { value: { showBalance: t, setShowBalance: a } },
          e
        );
      }
      var eZ = () => (0, r.useContext)(eH);
      function eY() {
        let e = eW(),
          t = g.R.id;
        return e.some((e) => e.id === t);
      }
      async function eK(e, t) {
        if (
          ((t = {
            headers: {},
            method: "get",
            ...t,
            timeout: t.timeout ?? 1e4,
          }),
          !e)
        )
          throw Error("rainbowFetch: Missing url argument");
        let a = new AbortController(),
          n = setTimeout(() => a.abort(), t.timeout),
          { body: l, params: o, headers: r, ...i } = t,
          s = l && "object" == typeof l ? JSON.stringify(t.body) : t.body,
          c = await fetch(
            `${e}${
              o && Object.keys(o).length ? `?${new URLSearchParams(o)}` : ""
            }`,
            {
              ...i,
              body: s,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...r,
              },
              signal: a.signal,
            }
          );
        clearTimeout(n);
        let u = await (function (e) {
          let t = e.headers.get("Content-Type");
          return t?.startsWith("application/json") ? e.json() : e.text();
        })(c);
        if (c.ok) {
          let { headers: e, status: t } = c;
          return { data: u, headers: e, status: t };
        }
        throw (function ({ requestBody: e, response: t, responseBody: a }) {
          let n = Error(
            a?.error || t?.statusText || "There was an error with the request."
          );
          return (n.response = t), (n.responseBody = a), (n.requestBody = e), n;
        })({
          requestBody: l,
          response: c,
          responseBody: "string" == typeof u ? { error: u } : u,
        });
      }
      var eV = class {
          constructor(e = {}) {
            let { baseUrl: t = "", ...a } = e;
            (this.baseUrl = t), (this.opts = a);
          }
          get(e, t) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(t || {}),
              method: "get",
            });
          }
          delete(e, t) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(t || {}),
              method: "delete",
            });
          }
          head(e, t) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(t || {}),
              method: "head",
            });
          }
          options(e, t) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(t || {}),
              method: "options",
            });
          }
          post(e, t, a) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(a || {}),
              body: t,
              method: "post",
            });
          }
          put(e, t, a) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(a || {}),
              body: t,
              method: "put",
            });
          }
          patch(e, t, a) {
            return eK(`${this.baseUrl}${e}`, {
              ...this.opts,
              ...(a || {}),
              body: t,
              method: "patch",
            });
          }
        },
        eG = !!(
          void 0 !== N &&
          void 0 !== N.env &&
          N.env.RAINBOW_PROVIDER_API_KEY
        ),
        eJ = (function ({ baseUrl: e, headers: t, params: a, timeout: n }) {
          return new eV({ baseUrl: e, headers: t, params: a, timeout: n });
        })({
          baseUrl: "https://enhanced-provider.rainbow.me",
          headers: {
            "x-api-key":
              (void 0 !== N &&
                void 0 !== N.env &&
                N.env.RAINBOW_PROVIDER_API_KEY) ||
              "LzbasoBiLqltex3VkcQ7LRmL4PtfiiZ1EMJrizrgfonWN6byJReu/l6yrUoo3zLW",
          },
        });
      function eQ(e) {
        return `rk-ens-name-${e}`;
      }
      async function e3({ address: e }) {
        let t = (function (e) {
          let t = (function (e) {
            try {
              let t = e ? JSON.parse(e) : null;
              return "object" == typeof t ? t : null;
            } catch {
              return null;
            }
          })(localStorage.getItem(eQ(e)));
          if (!t) return null;
          let { ensName: a, expires: n } = t;
          return "string" != typeof a ||
            Number.isNaN(Number(n)) ||
            new Date().getTime() > Number(n)
            ? (localStorage.removeItem(eQ(e)), null)
            : a;
        })(e);
        if (t) return t;
        let a = (await eJ.get("/v1/resolve-ens", { params: { address: e } }))
          .data.data;
        return (
          a &&
            (function (e, t) {
              if (!(0, C.U)(e)) return;
              let a = new Date(new Date().getTime() + 180 * 6e4);
              localStorage.setItem(
                eQ(e),
                JSON.stringify({ ensName: t, expires: a.getTime() })
              );
            })(e, a),
          a
        );
      }
      function e6({ address: e, includeBalance: t }) {
        let a = (function (e) {
            let t = eY(),
              { data: a } = (0, p.F)({
                chainId: g.R.id,
                address: e,
                query: { enabled: t },
              }),
              { data: n } = (0, h.a)({
                queryKey: (function (e, t, a = {}) {
                  return [e, t, a];
                })("address", e),
                queryFn: () => e3({ address: e }),
                enabled: !t && !!e && eG,
                staleTime: 6e5,
                retry: 1,
              });
            return a || n;
          })(e),
          n = (function (e) {
            let t = eY(),
              { data: a } = (0, v.c)({
                chainId: g.R.id,
                name: e
                  ? ((e) => {
                      try {
                        return (0, m.F)(e);
                      } catch {}
                    })(e)
                  : void 0,
                query: { enabled: t },
              });
            return a;
          })(a),
          { data: l } = (0, f.K)({ address: t ? e : void 0 });
        return { ensName: a, ensAvatar: n, balance: l };
      }
      function e1() {
        let { chain: e } = (0, c.m)();
        return e?.id ?? null;
      }
      var e7 = "rk-transactions";
      function e0() {
        return (function (e) {
          try {
            let t = e ? JSON.parse(e) : {};
            return "object" == typeof t ? t : {};
          } catch {
            return {};
          }
        })(
          "undefined" != typeof localStorage ? localStorage.getItem(e7) : null
        );
      }
      var e2 = /^0x([A-Fa-f0-9]{64})$/,
        e4 = r.createContext(null);
      function e8({ children: e }) {
        let t = (0, j.t)(),
          { address: a } = (0, c.m)(),
          l = e1(),
          { refetch: o } = (0, f.K)({ address: a, query: { enabled: !1 } }),
          [i] = r.useState(
            () =>
              n ??
              (n = (function ({ provider: e }) {
                let t = e0(),
                  a = e,
                  n = new Set(),
                  l = new Set(),
                  o = new Map();
                function r(e, a) {
                  return t[e]?.[a] ?? [];
                }
                function i(e, t, a, n) {
                  c(e, t, (e) =>
                    e.map((e) => (e.hash === a ? { ...e, status: n } : e))
                  );
                }
                async function s(e, t) {
                  await Promise.all(
                    r(e, t)
                      .filter((e) => "pending" === e.status)
                      .map(async (n) => {
                        let { confirmations: r, hash: s } = n,
                          c = o.get(s);
                        if (c) return await c;
                        let u = a
                          .waitForTransactionReceipt({
                            confirmations: r,
                            hash: s,
                            timeout: 3e5,
                          })
                          .then(({ status: a }) => {
                            o.delete(s),
                              void 0 !== a &&
                                (i(
                                  e,
                                  t,
                                  s,
                                  0 === a || "reverted" === a
                                    ? "failed"
                                    : "confirmed"
                                ),
                                (function (e) {
                                  for (let t of l) t(e);
                                })(a));
                          })
                          .catch(() => {
                            i(e, t, s, "failed");
                          });
                        return o.set(s, u), await u;
                      })
                  );
                }
                function c(e, a, l) {
                  (t = e0())[e] = t[e] ?? {};
                  let o = 0,
                    r = l(t[e][a] ?? []).filter(
                      ({ status: e }) => "pending" === e || o++ <= 10
                    );
                  (t[e][a] = r.length > 0 ? r : void 0),
                    localStorage.setItem(e7, JSON.stringify(t)),
                    (function () {
                      for (let e of n) e();
                    })(),
                    s(e, a);
                }
                return {
                  addTransaction: function (e, t, a) {
                    let n = (function (e) {
                      let t = [];
                      return (
                        e2.test(e.hash) || t.push("Invalid transaction hash"),
                        "string" != typeof e.description &&
                          t.push("Transaction must have a description"),
                        void 0 !== e.confirmations &&
                          (!Number.isInteger(e.confirmations) ||
                            e.confirmations < 1) &&
                          t.push(
                            "Transaction confirmations must be a positiver integer"
                          ),
                        t
                      );
                    })(a);
                    if (n.length > 0)
                      throw Error(
                        ["Unable to add transaction", ...n].join("\n")
                      );
                    c(e, t, (e) => [
                      { ...a, status: "pending" },
                      ...e.filter(({ hash: e }) => e !== a.hash),
                    ]);
                  },
                  clearTransactions: function (e, t) {
                    c(e, t, () => []);
                  },
                  getTransactions: r,
                  onTransactionStatus: function (e) {
                    return (
                      l.add(e),
                      () => {
                        l.delete(e);
                      }
                    );
                  },
                  onChange: function (e) {
                    return (
                      n.add(e),
                      () => {
                        n.delete(e);
                      }
                    );
                  },
                  setProvider: function (e) {
                    a = e;
                  },
                  waitForPendingTransactions: s,
                };
              })({ provider: t }))
          ),
          s = r.useCallback(
            (e) => {
              "success" === e && o();
            },
            [o]
          );
        return (
          r.useEffect(() => {
            i.setProvider(t);
          }, [i, t]),
          r.useEffect(() => {
            a && l && i.waitForPendingTransactions(a, l);
          }, [i, a, l]),
          r.useEffect(() => {
            if (i && a && l) return i.onTransactionStatus(s);
          }, [i, a, l, s]),
          r.createElement(e4.Provider, { value: i }, e)
        );
      }
      function e5() {
        let e = r.useContext(e4);
        if (!e)
          throw Error(
            "Transaction hooks must be used within RainbowKitProvider"
          );
        return e;
      }
      function e9() {
        let e = e5(),
          { address: t } = (0, c.m)(),
          a = e1(),
          [n, l] = (0, r.useState)(() =>
            e && t && a ? e.getTransactions(t, a) : []
          );
        return (
          (0, r.useEffect)(() => {
            if (e && t && a)
              return (
                l(e.getTransactions(t, a)),
                e.onChange(() => {
                  l(e.getTransactions(t, a));
                })
              );
          }, [e, t, a]),
          n
        );
      }
      var te = (e) => ("function" == typeof e ? e() : e);
      function tt(e, t = {}) {
        return Object.entries(
          (function (e, { extends: t } = {}) {
            let a = { ...(0, x.L)(M, te(e)) };
            if (!t) return a;
            let n = (0, x.L)(M, te(t));
            return Object.fromEntries(
              Object.entries(a).filter(([e, t]) => t !== n[e])
            );
          })(e, t)
        )
          .map(([e, t]) => `${e}:${t.replace(/[:;{}</>]/g, "")};`)
          .join("");
      }
      var ta = {
          appName: void 0,
          disclaimer: void 0,
          learnMoreUrl:
            "https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore",
        },
        tn = (0, r.createContext)(ta),
        tl = (0, r.createContext)(!1),
        to = () => {
          let [e, t] = (0, r.useState)({ height: void 0, width: void 0 });
          return (
            (0, r.useEffect)(() => {
              var e;
              let a;
              let n =
                ((e = () => {
                  t({ height: window.innerHeight, width: window.innerWidth });
                }),
                () => {
                  a && clearTimeout(a),
                    (a = setTimeout(() => {
                      (a = null), e();
                    }, 500));
                });
              return (
                window.addEventListener("resize", n),
                n(),
                () => window.removeEventListener("resize", n)
              );
            }, []),
            e
          );
        },
        tr = (0, r.createContext)({ connector: null, setConnector: () => {} });
      function ti({ children: e }) {
        let [t, a] = (0, r.useState)(null);
        return r.createElement(
          tr.Provider,
          {
            value: (0, r.useMemo)(
              () => ({ connector: t, setConnector: a }),
              [t]
            ),
          },
          e
        );
      }
      var ts = { COMPACT: "compact", WIDE: "wide" },
        tc = (0, r.createContext)(ts.WIDE);
      function tu({ children: e, modalSize: t }) {
        let { width: a } = to(),
          { connector: n } = (0, r.useContext)(tr);
        return r.createElement(
          tc.Provider,
          { value: (a && a < 768) || n ? ts.COMPACT : t },
          e
        );
      }
      var td = (0, r.createContext)(!1);
      function tf() {
        return (
          "undefined" != typeof navigator &&
          void 0 !== navigator.userAgent &&
          /Version\/([0-9._]+).*Safari/.test(navigator.userAgent)
        );
      }
      function tm() {
        if ("undefined" == typeof navigator) return "Browser";
        let e = navigator.userAgent?.toLowerCase();
        return navigator.brave?.isBrave
          ? "Brave"
          : e?.indexOf("edg/") > -1
          ? "Edge"
          : e?.indexOf("op") > -1
          ? "Opera"
          : "undefined" != typeof document &&
            "" !==
              getComputedStyle(document.body).getPropertyValue(
                "--arc-palette-focus"
              )
          ? "Arc"
          : e?.indexOf("chrome") > -1
          ? "Chrome"
          : e?.indexOf("firefox") > -1
          ? "Firefox"
          : tf()
          ? "Safari"
          : "Browser";
      }
      var { os: tv } = (0, B.UAParser)();
      function tg() {
        return "Windows" === tv.name
          ? "Windows"
          : "Mac OS" === tv.name
          ? "macOS"
          : ["Ubuntu", "Mint", "Fedora", "Debian", "Arch", "Linux"].includes(
              tv.name
            )
          ? "Linux"
          : "Desktop";
      }
      var th = (e) => {
          let t = tm();
          return (
            {
              Arc: e?.downloadUrls?.chrome,
              Brave: e?.downloadUrls?.chrome,
              Chrome: e?.downloadUrls?.chrome,
              Edge: e?.downloadUrls?.edge || e?.downloadUrls?.chrome,
              Firefox: e?.downloadUrls?.firefox,
              Opera: e?.downloadUrls?.opera || e?.downloadUrls?.chrome,
              Safari: e?.downloadUrls?.safari,
              Browser: e?.downloadUrls?.browserExtension,
            }[t] ?? e?.downloadUrls?.browserExtension
          );
        },
        tp = (e) =>
          (W() ? e?.downloadUrls?.ios : e?.downloadUrls?.android) ??
          e?.downloadUrls?.mobile,
        tC = (e) => {
          let t = tg();
          return (
            {
              Windows: e?.downloadUrls?.windows,
              macOS: e?.downloadUrls?.macos,
              Linux: e?.downloadUrls?.linux,
              Desktop: e?.downloadUrls?.desktop,
            }[t] ?? e?.downloadUrls?.desktop
          );
        },
        tj = (e, t) => e.some((e) => e.id === t),
        tb = (e) => !!e.isRainbowKitConnector,
        tw = (e) =>
          !!(
            !e.isRainbowKitConnector &&
            e.icon?.replace(/\n/g, "").startsWith("data:image") &&
            e.uid &&
            e.name
          ),
        tE = (e, t) =>
          "walletConnect" === e.id && t
            ? { ...e, walletConnectModalConnector: t }
            : e,
        ty = ({ wallets: e, recentWallets: t }) => [
          ...t,
          ...e.filter((e) => !tj(t, e.id)),
        ],
        tx = "rk-recent";
      function tk() {
        return "undefined" != typeof localStorage
          ? (function (e) {
              try {
                let t = e ? JSON.parse(e) : [];
                return Array.isArray(t) ? t : [];
              } catch {
                return [];
              }
            })(localStorage.getItem(tx))
          : [];
      }
      function tB(e = !1) {
        let t = eW(),
          a = eP(),
          { connectAsync: n, connectors: l } = (0, k.$)(),
          { setIsWalletConnectModalOpen: o } = ne(),
          r = l.map((e) => ({ ...e, ...(e.rkDetails || {}) }));
        async function i(e) {
          let l = await e.getChainId(),
            o = await n({
              chainId: a ?? t.find(({ id: e }) => e === l)?.id ?? t[0]?.id,
              connector: e,
            });
          return (
            o &&
              (function (e) {
                let t = [...new Set([e, ...tk()])];
                localStorage.setItem(tx, JSON.stringify(t));
              })(e.id),
            o
          );
        }
        async function s(e) {
          try {
            o(!0), await i(e), o(!1);
          } catch (t) {
            let e =
              "UserRejectedRequestError" === t.name ||
              "Connection request reset. Please try again." === t.message;
            if ((o(!1), !e)) throw t;
          }
        }
        let c = async (e, t) => {
            let a = await e.getProvider();
            return "coinbase" === e.id
              ? a.qrUrl
              : new Promise((e) =>
                  a.once("display_uri", (a) => {
                    e(t(a));
                  })
                );
          },
          u = r.find(
            (e) => "walletConnect" === e.id && e.isWalletConnectModalConnector
          ),
          d = r.filter(tw).map((e) => ({ ...e, groupIndex: 0 })),
          f = r
            .filter(tb)
            .filter((e) => !e.isWalletConnectModalConnector)
            .filter((t) => !e || !d.some((e) => e.id === t.rdns))
            .map((e) => tE(e, u)),
          m = [...d, ...f],
          v = (function (e, t) {
            let a = {};
            for (let n of e) {
              let e = t(n);
              e && (a[e] = n);
            }
            return a;
          })(m, (e) => e.id),
          g = tk()
            .map((e) => v[e])
            .filter(Boolean)
            .slice(0, 3),
          h = [];
        for (let e of ty({ wallets: m, recentWallets: g })) {
          if (!e) continue;
          let t = tw(e),
            a = tj(g, e.id);
          if (t) {
            h.push({
              ...e,
              iconUrl: e.icon,
              ready: !0,
              connect: () => i(e),
              groupName: "Installed",
              recent: a,
            });
            continue;
          }
          h.push({
            ...e,
            ready: e.installed ?? !0,
            connect: () => i(e),
            desktopDownloadUrl: tC(e),
            extensionDownloadUrl: th(e),
            groupName: e.groupName,
            mobileDownloadUrl: tp(e),
            getQrCodeUri: e.qrCode?.getUri
              ? () => c(e, e.qrCode.getUri)
              : void 0,
            getDesktopUri: e.desktop?.getUri
              ? () => c(e, e.desktop.getUri)
              : void 0,
            getMobileUri: e.mobile?.getUri
              ? () => c(e, e.mobile?.getUri)
              : void 0,
            recent: a,
            showWalletConnectModal: e.walletConnectModalConnector
              ? () => s(e.walletConnectModalConnector)
              : void 0,
          });
        }
        return h;
      }
      var tI = async () => (await a.e(3815).then(a.bind(a, 13815))).default,
        tT = () => V(tI),
        tS = () =>
          r.createElement(J, {
            background: "#d0d5de",
            borderRadius: "10",
            height: "48",
            src: tI,
            width: "48",
          }),
        tD = async () => (await a.e(6603).then(a.bind(a, 66603))).default,
        tN = () => V(tD),
        t_ = () =>
          r.createElement(J, {
            background: "#d0d5de",
            borderRadius: "10",
            height: "48",
            src: tD,
            width: "48",
          }),
        tL = r.forwardRef(
          (
            {
              as: e = "div",
              children: t,
              className: a,
              color: n,
              display: l,
              font: o = "body",
              id: i,
              size: s = "16",
              style: c,
              tabIndex: u,
              textAlign: d = "inherit",
              weight: f = "regular",
              testId: m,
            },
            v
          ) =>
            r.createElement(
              X,
              {
                as: e,
                className: a,
                color: n,
                display: l,
                fontFamily: o,
                fontSize: s,
                fontWeight: f,
                id: i,
                ref: v,
                style: c,
                tabIndex: u,
                textAlign: d,
                testId: m,
              },
              t
            )
        );
      tL.displayName = "Text";
      var tO = {
        large: { fontSize: "16", paddingX: "24", paddingY: "10" },
        medium: { fontSize: "14", height: "28", paddingX: "12", paddingY: "4" },
        small: { fontSize: "14", paddingX: "10", paddingY: "5" },
      };
      function tM({
        disabled: e = !1,
        href: t,
        label: a,
        onClick: n,
        rel: l = "noreferrer noopener",
        size: o = "medium",
        target: i = "_blank",
        testId: s,
        type: c = "primary",
      }) {
        let u = "primary" === c,
          d = "large" !== o,
          f = P(),
          m = e
            ? "actionButtonSecondaryBackground"
            : u
            ? "accentColor"
            : d
            ? "actionButtonSecondaryBackground"
            : null,
          { fontSize: v, height: g, paddingX: h, paddingY: p } = tO[o];
        return r.createElement(
          X,
          {
            ...(t
              ? e
                ? {}
                : { as: "a", href: t, rel: l, target: i }
              : { as: "button", type: "button" }),
            onClick: e ? void 0 : n,
            ...(f && d
              ? {}
              : {
                  borderColor:
                    !f || d || u
                      ? "actionButtonBorder"
                      : "actionButtonBorderMobile",
                  borderStyle: "solid",
                  borderWidth: "1",
                }),
            borderRadius: "actionButton",
            className: !e && F({ active: "shrinkSm", hover: "grow" }),
            display: "block",
            paddingX: h,
            paddingY: p,
            style: { willChange: "transform" },
            testId: s,
            textAlign: "center",
            transition: "transform",
            ...(m ? { background: m } : {}),
            ...(g ? { height: g } : {}),
          },
          r.createElement(
            tL,
            {
              color: e
                ? "modalTextSecondary"
                : u
                ? "accentColorForeground"
                : "accentColor",
              size: v,
              weight: "bold",
            },
            a
          )
        );
      }
      var tA = () =>
          P()
            ? r.createElement(
                "svg",
                {
                  "aria-hidden": !0,
                  fill: "none",
                  height: "11.5",
                  viewBox: "0 0 11.5 11.5",
                  width: "11.5",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                r.createElement("title", null, "Close"),
                r.createElement("path", {
                  d: "M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",
                  fill: "currentColor",
                })
              )
            : r.createElement(
                "svg",
                {
                  "aria-hidden": !0,
                  fill: "none",
                  height: "10",
                  viewBox: "0 0 10 10",
                  width: "10",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                r.createElement("title", null, "Close"),
                r.createElement("path", {
                  d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
                  fill: "currentColor",
                })
              ),
        tU = ({ "aria-label": e = "Close", onClose: t }) => {
          let a = P();
          return r.createElement(
            X,
            {
              alignItems: "center",
              "aria-label": e,
              as: "button",
              background: "closeButtonBackground",
              borderColor: "actionButtonBorder",
              borderRadius: "full",
              borderStyle: "solid",
              borderWidth: a ? "0" : "1",
              className: F({ active: "shrinkSm", hover: "growLg" }),
              color: "closeButton",
              display: "flex",
              height: a ? "30" : "28",
              justifyContent: "center",
              onClick: t,
              style: { willChange: "transform" },
              transition: "default",
              type: "button",
              width: a ? "30" : "28",
            },
            r.createElement(tA, null)
          );
        },
        tF = async () => (await a.e(4050).then(a.bind(a, 34050))).default;
      function tz({ onClose: e, onCloseModal: t }) {
        let { i18n: a } = (0, r.useContext)(eu),
          [{ status: n, ...l }, o] = r.useState({ status: "idle" }),
          i = (function () {
            let { adapter: e } = (0, r.useContext)(z) ?? {};
            if (!e) throw Error("No authentication adapter found");
            return e;
          })(),
          s = (0, r.useCallback)(async () => {
            try {
              let e = await i.getNonce();
              o((t) => ({ ...t, nonce: e }));
            } catch {
              o((e) => ({
                ...e,
                errorMessage: a.t("sign_in.message.preparing_error"),
                status: "idle",
              }));
            }
          }, [i, a.t]),
          u = (0, r.useRef)(!1);
        r.useEffect(() => {
          u.current || ((u.current = !0), s());
        }, [s]);
        let d = P(),
          { address: f, chain: m } = (0, c.m)(),
          { signMessageAsync: v } = (0, T.Q)(),
          g = async () => {
            try {
              let e;
              let n = m?.id,
                { nonce: r } = l;
              if (!f || !n || !r) return;
              o((e) => ({ ...e, errorMessage: void 0, status: "signing" }));
              let s = i.createMessage({ address: f, chainId: n, nonce: r });
              try {
                e = await v({ message: s });
              } catch (e) {
                if (e instanceof I.ab)
                  return o((e) => ({ ...e, status: "idle" }));
                return o((e) => ({
                  ...e,
                  errorMessage: a.t("sign_in.signature.signing_error"),
                  status: "idle",
                }));
              }
              o((e) => ({ ...e, status: "verifying" }));
              try {
                if (await i.verify({ message: s, signature: e })) {
                  t();
                  return;
                }
                throw Error();
              } catch {
                return o((e) => ({
                  ...e,
                  errorMessage: a.t("sign_in.signature.verifying_error"),
                  status: "idle",
                }));
              }
            } catch {
              o({
                errorMessage: a.t("sign_in.signature.oops_error"),
                status: "idle",
              });
            }
          };
        return r.createElement(
          X,
          { position: "relative" },
          r.createElement(
            X,
            {
              display: "flex",
              paddingRight: "16",
              paddingTop: "16",
              position: "absolute",
              right: "0",
            },
            r.createElement(tU, { onClose: e })
          ),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: d ? "32" : "24",
              padding: "24",
              paddingX: "18",
              style: { paddingTop: d ? "60px" : "36px" },
            },
            r.createElement(
              X,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: d ? "6" : "4",
                style: { maxWidth: d ? 320 : 280 },
              },
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: d ? "32" : "16",
                },
                r.createElement(J, { height: 40, src: tF, width: 40 }),
                r.createElement(
                  tL,
                  {
                    color: "modalText",
                    size: d ? "20" : "18",
                    textAlign: "center",
                    weight: "heavy",
                  },
                  a.t("sign_in.label")
                )
              ),
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: d ? "16" : "12",
                },
                r.createElement(
                  tL,
                  {
                    color: "modalTextSecondary",
                    size: d ? "16" : "14",
                    textAlign: "center",
                  },
                  a.t("sign_in.description")
                ),
                "idle" === n && l.errorMessage
                  ? r.createElement(
                      tL,
                      {
                        color: "error",
                        size: d ? "16" : "14",
                        textAlign: "center",
                        weight: "bold",
                      },
                      l.errorMessage
                    )
                  : null
              )
            ),
            r.createElement(
              X,
              {
                alignItems: d ? void 0 : "center",
                display: "flex",
                flexDirection: "column",
                gap: "8",
                width: "full",
              },
              r.createElement(tM, {
                disabled: !l.nonce || "signing" === n || "verifying" === n,
                label: l.nonce
                  ? "signing" === n
                    ? a.t("sign_in.signature.waiting")
                    : "verifying" === n
                    ? a.t("sign_in.signature.verifying")
                    : a.t("sign_in.message.send")
                  : a.t("sign_in.message.preparing"),
                onClick: g,
                size: d ? "large" : "medium",
                testId: "auth-message-button",
              }),
              d
                ? r.createElement(tM, {
                    label: "Cancel",
                    onClick: e,
                    size: "large",
                    type: "secondary",
                  })
                : r.createElement(
                    X,
                    {
                      as: "button",
                      borderRadius: "full",
                      className: F({ active: "shrink", hover: "grow" }),
                      display: "block",
                      onClick: e,
                      paddingX: "10",
                      paddingY: "5",
                      rel: "noreferrer",
                      style: { willChange: "transform" },
                      target: "_blank",
                      transition: "default",
                    },
                    r.createElement(
                      tL,
                      {
                        color: "closeButton",
                        size: d ? "16" : "14",
                        weight: "bold",
                      },
                      a.t("sign_in.message.cancel")
                    )
                  )
            )
          )
        );
      }
      var tR = "WALLETCONNECT_DEEPLINK_CHOICE";
      function t$() {
        localStorage.removeItem(tR);
      }
      var tW = (0, r.createContext)(void 0),
        tP = "data-rk",
        tq = (e) => ({ [tP]: e || "" }),
        tH = (e) => {
          if (e && !/^[a-zA-Z0-9_]+$/.test(e)) throw Error(`Invalid ID: ${e}`);
          return e ? `[${tP}="${e}"]` : `[${tP}]`;
        },
        tX = () => tq((0, r.useContext)(tW)),
        tZ = (0, l.W)();
      function tY({
        appInfo: e,
        avatar: t,
        children: a,
        coolMode: n = !1,
        id: l,
        initialChain: o,
        locale: i,
        modalSize: s = ts.WIDE,
        showRecentTransactions: c = !1,
        theme: u = tZ,
      }) {
        if (
          (!(function () {
            let e = eW(),
              t = tB(),
              a = "unauthenticated" === R(),
              n = (0, r.useCallback)(() => {
                V(
                  ...t.map((e) => e.iconUrl),
                  ...e.map((e) => e.iconUrl).filter(ef)
                ),
                  P() || (tT(), tN()),
                  a && V(tF);
              }, [t, e, a]);
            (0, r.useEffect)(() => {
              n();
            }, [n]);
          })(),
          !(function () {
            let e = (0, r.useCallback)(() => {
              !(function ({ version: e }) {
                localStorage.setItem("rk-version", e);
              })({ version: "2.2.4" });
            }, []);
            (0, r.useEffect)(() => {
              e();
            }, [e]);
          })(),
          (0, b.E)({ onDisconnect: t$ }),
          "function" == typeof u)
        )
          throw Error(
            'A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.'
          );
        let d = tH(l),
          f = { ...ta, ...e };
        return r.createElement(
          e$,
          { initialChain: o },
          r.createElement(
            ti,
            null,
            r.createElement(
              ed,
              { locale: i },
              r.createElement(
                tl.Provider,
                { value: n },
                r.createElement(
                  tu,
                  { modalSize: s },
                  r.createElement(
                    td.Provider,
                    { value: c },
                    r.createElement(
                      e8,
                      null,
                      r.createElement(
                        en.Provider,
                        { value: t ?? ea },
                        r.createElement(
                          tn.Provider,
                          { value: f },
                          r.createElement(
                            tW.Provider,
                            { value: l },
                            r.createElement(
                              eX,
                              null,
                              r.createElement(
                                a5,
                                null,
                                u
                                  ? r.createElement(
                                      "div",
                                      { ...tq(l) },
                                      r.createElement("style", {
                                        dangerouslySetInnerHTML: {
                                          __html: [
                                            `${d}{${tt(
                                              "lightMode" in u ? u.lightMode : u
                                            )}}`,
                                            "darkMode" in u
                                              ? `@media(prefers-color-scheme:dark){${d}{${tt(
                                                  u.darkMode,
                                                  { extends: u.lightMode }
                                                )}}}`
                                              : null,
                                          ].join(""),
                                        },
                                      }),
                                      a
                                    )
                                  : a
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      var tK = (e, t) => {
        let a = e.querySelectorAll("button:not(:disabled), a[href]");
        0 !== a.length && a["end" === t ? a.length - 1 : 0].focus();
      };
      function tV(e) {
        let t = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = document.activeElement;
            return () => {
              e.focus?.();
            };
          }, []),
          (0, r.useEffect)(() => {
            if (t.current) {
              let e = t.current.querySelector("[data-auto-focus]");
              e ? e.focus() : t.current.focus();
            }
          }, []),
          r.createElement(
            r.Fragment,
            null,
            r.createElement("div", {
              onFocus: (0, r.useCallback)(
                () => t.current && tK(t.current, "end"),
                []
              ),
              tabIndex: 0,
            }),
            r.createElement("div", {
              ref: t,
              style: { outline: "none" },
              tabIndex: -1,
              ...e,
            }),
            r.createElement("div", {
              onFocus: (0, r.useCallback)(
                () => t.current && tK(t.current, "start"),
                []
              ),
              tabIndex: 0,
            })
          )
        );
      }
      var tG = (e) => e.stopPropagation();
      function tJ({ children: e, onClose: t, open: a, titleId: n }) {
        (0, r.useEffect)(() => {
          let e = (e) => a && "Escape" === e.key && t();
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [a, t]);
        let [l, o] = (0, r.useState)(!0);
        (0, r.useEffect)(() => {
          o("hidden" !== getComputedStyle(window.document.body).overflow);
        }, []);
        let i = (0, r.useCallback)(() => t(), [t]),
          s = tX(),
          c = P();
        return r.createElement(
          r.Fragment,
          null,
          a
            ? (0, E.createPortal)(
                r.createElement(
                  y.Z,
                  { enabled: l },
                  r.createElement(
                    X,
                    { ...s },
                    r.createElement(
                      X,
                      {
                        ...s,
                        alignItems: c ? "flex-end" : "center",
                        "aria-labelledby": n,
                        "aria-modal": !0,
                        className:
                          "_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q",
                        onClick: i,
                        position: "fixed",
                        role: "dialog",
                      },
                      r.createElement(
                        tV,
                        {
                          className: "_9pm4ki5 ju367va ju367v15 ju367v8r",
                          onClick: tG,
                          role: "document",
                        },
                        e
                      )
                    )
                  )
                ),
                document.body
              )
            : null
        );
      }
      function tQ({
        bottomSheetOnMobile: e = !1,
        children: t,
        marginTop: a,
        padding: n = "16",
        paddingBottom: l,
        wide: o = !1,
      }) {
        let i = P(),
          s = (0, r.useContext)(tc) === ts.COMPACT;
        return r.createElement(
          X,
          { marginTop: a },
          r.createElement(
            X,
            {
              className: [
                o
                  ? i
                    ? "_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r"
                    : s
                    ? "_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r"
                    : "_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r"
                  : "_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",
                i ? "_1ckjpok6 ju367vq" : null,
                i && e ? "_1ckjpok7" : null,
              ].join(" "),
            },
            r.createElement(X, { padding: n, paddingBottom: l ?? n }, t)
          )
        );
      }
      var t3 = ["k", "m", "b", "t"];
      function t6(e, t = 1) {
        return e
          .toString()
          .replace(RegExp(`(.+\\.\\d{${t}})\\d+`), "$1")
          .replace(/(\.[1-9]*)0+$/, "$1")
          .replace(/\.$/, "");
      }
      function t1(e) {
        if (e < 1) return t6(e, 3);
        if (e < 100) return t6(e, 2);
        if (e < 1e4)
          return new Intl.NumberFormat().format(Number.parseFloat(t6(e, 1)));
        let t = String(e);
        for (let a = t3.length - 1; a >= 0; a--) {
          let n = 10 ** ((a + 1) * 3);
          if (n <= e) {
            t = t6((e = (10 * e) / n / 10), 1) + t3[a];
            break;
          }
        }
        return t;
      }
      function t7(e) {
        return e.length < 8
          ? e
          : `${e.substring(0, 4)}\u2026${e.substring(e.length - 4)}`;
      }
      function t0(e) {
        if (!e) return "";
        let t = e.split("."),
          a = t.pop();
        return t.join(".").length > 24
          ? `${t.join(".").substring(0, 24)}...`
          : `${t.join(".")}.${a}`;
      }
      var t2 = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "13",
              viewBox: "0 0 13 13",
              width: "13",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Copied"),
            r.createElement("path", {
              d: "M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",
              fill: "currentColor",
            })
          ),
        t4 = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "16",
              viewBox: "0 0 17 16",
              width: "17",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Copy"),
            r.createElement("path", {
              d: "M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",
              fill: "currentColor",
            })
          ),
        t8 = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "16",
              viewBox: "0 0 18 16",
              width: "18",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Disconnect"),
            r.createElement("path", {
              d: "M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",
              fill: "currentColor",
            })
          ),
        t5 = (e) => e?.blockExplorers?.default?.url,
        t9 = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "19",
              viewBox: "0 0 20 19",
              width: "20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Link"),
            r.createElement("path", {
              d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",
              fill: "currentColor",
            })
          ),
        ae = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "19",
              viewBox: "0 0 20 19",
              width: "20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Cancel"),
            r.createElement("path", {
              d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",
              fill: "currentColor",
            })
          ),
        at = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "20",
              viewBox: "0 0 20 20",
              width: "20",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Success"),
            r.createElement("path", {
              d: "M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",
              fill: "currentColor",
            })
          ),
        aa = (e) => {
          switch (e) {
            case "pending":
            default:
              return ee;
            case "confirmed":
              return at;
            case "failed":
              return ae;
          }
        };
      function an({ tx: e }) {
        let t = P(),
          a = aa(e.status),
          n = "failed" === e.status ? "error" : "accentColor",
          { chain: l } = (0, c.m)(),
          o =
            "confirmed" === e.status
              ? "Confirmed"
              : "failed" === e.status
              ? "Failed"
              : "Pending",
          i = t5(l);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            X,
            {
              ...(i
                ? {
                    as: "a",
                    background: { hover: "profileForeground" },
                    borderRadius: "menuButton",
                    className: F({ active: "shrink" }),
                    href: `${i}/tx/${e.hash}`,
                    rel: "noreferrer noopener",
                    target: "_blank",
                    transition: "default",
                  }
                : {}),
              color: "modalText",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "8",
              width: "full",
            },
            r.createElement(
              X,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: t ? "16" : "14",
              },
              r.createElement(X, { color: n }, r.createElement(a, null)),
              r.createElement(
                X,
                {
                  display: "flex",
                  flexDirection: "column",
                  gap: t ? "3" : "1",
                },
                r.createElement(
                  X,
                  null,
                  r.createElement(
                    tL,
                    {
                      color: "modalText",
                      font: "body",
                      size: t ? "16" : "14",
                      weight: "bold",
                    },
                    e?.description
                  )
                ),
                r.createElement(
                  X,
                  null,
                  r.createElement(
                    tL,
                    {
                      color: "pending" === e.status ? "modalTextSecondary" : n,
                      font: "body",
                      size: "14",
                      weight: t ? "medium" : "regular",
                    },
                    o
                  )
                )
              )
            ),
            i &&
              r.createElement(
                X,
                {
                  alignItems: "center",
                  color: "modalTextDim",
                  display: "flex",
                },
                r.createElement(t9, null)
              )
          )
        );
      }
      function al({ address: e }) {
        let t = e9(),
          a = (function () {
            let e = e5(),
              { address: t } = (0, c.m)(),
              a = e1();
            return (0, r.useCallback)(() => {
              if (!t || !a) throw Error("No address or chain ID found");
              e.clearTransactions(t, a);
            }, [e, t, a]);
          })(),
          { chain: n } = (0, c.m)(),
          l = t5(n),
          o = t.slice(0, 3),
          i = o.length > 0,
          s = P(),
          { appName: u } = (0, r.useContext)(tn),
          { i18n: d } = (0, r.useContext)(eu);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              gap: "10",
              paddingBottom: "2",
              paddingTop: "16",
              paddingX: s ? "8" : "18",
            },
            i &&
              r.createElement(
                X,
                {
                  paddingBottom: s ? "4" : "0",
                  paddingTop: "8",
                  paddingX: s ? "12" : "6",
                },
                r.createElement(
                  X,
                  { display: "flex", justifyContent: "space-between" },
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: s ? "16" : "14",
                      weight: "semibold",
                    },
                    d.t("profile.transactions.recent.title")
                  ),
                  r.createElement(
                    X,
                    {
                      style: {
                        marginBottom: -6,
                        marginLeft: -10,
                        marginRight: -10,
                        marginTop: -6,
                      },
                    },
                    r.createElement(
                      X,
                      {
                        as: "button",
                        background: { hover: "profileForeground" },
                        borderRadius: "actionButton",
                        className: F({ active: "shrink" }),
                        onClick: a,
                        paddingX: s ? "8" : "12",
                        paddingY: s ? "4" : "5",
                        transition: "default",
                        type: "button",
                      },
                      r.createElement(
                        tL,
                        {
                          color: "modalTextSecondary",
                          size: s ? "16" : "14",
                          weight: "semibold",
                        },
                        d.t("profile.transactions.clear.label")
                      )
                    )
                  )
                )
              ),
            r.createElement(
              X,
              { display: "flex", flexDirection: "column", gap: "4" },
              i
                ? o.map((e) => r.createElement(an, { key: e.hash, tx: e }))
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      X,
                      { padding: s ? "12" : "8" },
                      r.createElement(
                        tL,
                        {
                          color: "modalTextDim",
                          size: s ? "16" : "14",
                          weight: s ? "medium" : "bold",
                        },
                        u
                          ? d.t("profile.transactions.description", {
                              appName: u,
                            })
                          : d.t("profile.transactions.description_fallback")
                      )
                    ),
                    s &&
                      r.createElement(X, {
                        background: "generalBorderDim",
                        height: "1",
                        marginX: "12",
                        marginY: "8",
                      })
                  )
            )
          ),
          l &&
            r.createElement(
              X,
              { paddingBottom: "18", paddingX: s ? "8" : "18" },
              r.createElement(
                X,
                {
                  alignItems: "center",
                  as: "a",
                  background: { hover: "profileForeground" },
                  borderRadius: "menuButton",
                  className: F({ active: "shrink" }),
                  color: "modalTextDim",
                  display: "flex",
                  flexDirection: "row",
                  href: `${l}/address/${e}`,
                  justifyContent: "space-between",
                  paddingX: "8",
                  paddingY: "12",
                  rel: "noreferrer noopener",
                  style: { willChange: "transform" },
                  target: "_blank",
                  transition: "default",
                  width: "full",
                  ...(s ? { paddingLeft: "12" } : {}),
                },
                r.createElement(
                  tL,
                  {
                    color: "modalText",
                    font: "body",
                    size: s ? "16" : "14",
                    weight: s ? "semibold" : "bold",
                  },
                  d.t("profile.explorer.label")
                ),
                r.createElement(t9, null)
              )
            )
        );
      }
      function ao({ action: e, icon: t, label: a, testId: n, url: l }) {
        let o = P();
        return r.createElement(
          X,
          {
            ...(l
              ? {
                  as: "a",
                  href: l,
                  rel: "noreferrer noopener",
                  target: "_blank",
                }
              : { as: "button", type: "button" }),
            background: {
              base: "profileAction",
              ...(o ? {} : { hover: "profileActionHover" }),
            },
            borderRadius: "menuButton",
            boxShadow: "profileDetailsAction",
            className: F({ active: "shrinkSm", hover: o ? void 0 : "grow" }),
            display: "flex",
            onClick: e,
            padding: o ? "6" : "8",
            style: { willChange: "transform" },
            testId: n,
            transition: "default",
            width: "full",
          },
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1",
              justifyContent: "center",
              paddingTop: "2",
              width: "full",
            },
            r.createElement(X, { color: "modalText", height: "max" }, t),
            r.createElement(
              X,
              null,
              r.createElement(
                tL,
                {
                  color: "modalText",
                  size: o ? "12" : "13",
                  weight: "semibold",
                },
                a
              )
            )
          )
        );
      }
      function ar({
        address: e,
        ensAvatar: t,
        ensName: a,
        balance: n,
        onClose: l,
        onDisconnect: o,
      }) {
        let i = (0, r.useContext)(td),
          [s, c] = (0, r.useState)(!1),
          u = (0, r.useCallback)(() => {
            e && (navigator.clipboard.writeText(e), c(!0));
          }, [e]);
        if (
          ((0, r.useEffect)(() => {
            if (s) {
              let e = setTimeout(() => {
                c(!1);
              }, 1500);
              return () => clearTimeout(e);
            }
          }, [s]),
          !e)
        )
          return null;
        let d = a ? t0(a) : t7(e),
          f = n?.formatted,
          m = f ? t1(Number.parseFloat(f)) : void 0,
          v = "rk_profile_title",
          g = P(),
          { i18n: h } = (0, r.useContext)(eu);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            X,
            { display: "flex", flexDirection: "column" },
            r.createElement(
              X,
              { background: "profileForeground", padding: "16" },
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: g ? "16" : "12",
                  justifyContent: "center",
                  margin: "8",
                  style: { textAlign: "center" },
                },
                r.createElement(
                  X,
                  {
                    style: {
                      position: "absolute",
                      right: 16,
                      top: 16,
                      willChange: "transform",
                    },
                  },
                  r.createElement(tU, { onClose: l })
                ),
                " ",
                r.createElement(
                  X,
                  { marginTop: g ? "24" : "0" },
                  r.createElement(el, {
                    address: e,
                    imageUrl: t,
                    size: g ? 82 : 74,
                  })
                ),
                r.createElement(
                  X,
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: g ? "4" : "0",
                    textAlign: "center",
                  },
                  r.createElement(
                    X,
                    { textAlign: "center" },
                    r.createElement(
                      tL,
                      {
                        as: "h1",
                        color: "modalText",
                        id: v,
                        size: g ? "20" : "18",
                        weight: "heavy",
                      },
                      d
                    )
                  ),
                  !!n &&
                    r.createElement(
                      X,
                      { textAlign: "center" },
                      r.createElement(
                        tL,
                        {
                          as: "h1",
                          color: "modalTextSecondary",
                          id: v,
                          size: g ? "16" : "14",
                          weight: "semibold",
                        },
                        m,
                        " ",
                        n.symbol
                      )
                    )
                )
              ),
              r.createElement(
                X,
                {
                  display: "flex",
                  flexDirection: "row",
                  gap: "8",
                  margin: "2",
                  marginTop: "16",
                },
                r.createElement(ao, {
                  action: u,
                  icon: s
                    ? r.createElement(t2, null)
                    : r.createElement(t4, null),
                  label: s
                    ? h.t("profile.copy_address.copied")
                    : h.t("profile.copy_address.label"),
                }),
                r.createElement(ao, {
                  action: o,
                  icon: r.createElement(t8, null),
                  label: h.t("profile.disconnect.label"),
                  testId: "disconnect-button",
                })
              )
            ),
            i &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(X, {
                  background: "generalBorder",
                  height: "1",
                  marginTop: "-1",
                }),
                r.createElement(X, null, r.createElement(al, { address: e }))
              )
          )
        );
      }
      function ai({ onClose: e, open: t }) {
        let { address: a } = (0, c.m)(),
          {
            balance: n,
            ensAvatar: l,
            ensName: o,
          } = e6({ address: a, includeBalance: t }),
          { disconnect: i } = (0, w.q)();
        return a
          ? r.createElement(
              r.Fragment,
              null,
              a &&
                r.createElement(
                  tJ,
                  { onClose: e, open: t, titleId: "rk_account_modal_title" },
                  r.createElement(
                    tQ,
                    { bottomSheetOnMobile: !0, padding: "0" },
                    r.createElement(ar, {
                      address: a,
                      ensAvatar: l,
                      ensName: o,
                      balance: n,
                      onClose: e,
                      onDisconnect: i,
                    })
                  )
                )
            )
          : null;
      }
      var as = ({ size: e }) =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: e,
              viewBox: "0 0 28 28",
              width: e,
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Disconnect"),
            r.createElement("path", {
              d: "M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",
              fill: "currentColor",
            })
          ),
        ac = r.forwardRef(
          (
            {
              children: e,
              currentlySelected: t = !1,
              onClick: a,
              testId: n,
              ...l
            },
            o
          ) => {
            let i = P();
            return r.createElement(
              X,
              {
                as: "button",
                borderRadius: "menuButton",
                disabled: t,
                display: "flex",
                onClick: a,
                ref: o,
                testId: n,
                type: "button",
              },
              r.createElement(
                X,
                {
                  borderRadius: "menuButton",
                  className: [
                    i ? "v9horb0" : void 0,
                    !t && F({ active: "shrink" }),
                  ],
                  padding: i ? "8" : "6",
                  transition: "default",
                  width: "full",
                  ...(t
                    ? {
                        background: "accentColor",
                        borderColor: "selectedOptionBorder",
                        borderStyle: "solid",
                        borderWidth: "1",
                        boxShadow: "selectedOption",
                        color: "accentColorForeground",
                      }
                    : {
                        background: { hover: "menuItemBackground" },
                        color: "modalText",
                        transition: "default",
                      }),
                  ...l,
                },
                e
              )
            );
          }
        );
      ac.displayName = "MenuButton";
      var au = ({
        chainId: e,
        currentChainId: t,
        switchChain: a,
        chainIconSize: n,
        isLoading: l,
        src: o,
        name: i,
        iconBackground: s,
        idx: c,
      }) => {
        let u = P(),
          { i18n: d } = (0, r.useContext)(eu),
          f = eW(),
          m = t === e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            ac,
            {
              currentlySelected: m,
              onClick: m ? void 0 : () => a({ chainId: e }),
              testId: `chain-option-${e}`,
            },
            r.createElement(
              X,
              { fontFamily: "body", fontSize: "16", fontWeight: "bold" },
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
                r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "4",
                    height: n,
                  },
                  o &&
                    r.createElement(
                      X,
                      { height: "full", marginRight: "8" },
                      r.createElement(J, {
                        alt: i,
                        background: s,
                        borderRadius: "full",
                        height: n,
                        src: o,
                        width: n,
                        testId: `chain-option-${e}-icon`,
                      })
                    ),
                  r.createElement("div", null, i ?? i)
                ),
                m &&
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "6",
                    },
                    r.createElement(
                      tL,
                      {
                        color: "accentColorForeground",
                        size: "14",
                        weight: "medium",
                      },
                      d.t("chains.connected")
                    ),
                    r.createElement(X, {
                      background: "connectionIndicator",
                      borderColor: "selectedOptionBorder",
                      borderRadius: "full",
                      borderStyle: "solid",
                      borderWidth: "1",
                      height: "8",
                      marginLeft: "8",
                      width: "8",
                    })
                  ),
                l &&
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "6",
                    },
                    r.createElement(
                      tL,
                      { color: "modalText", size: "14", weight: "medium" },
                      d.t("chains.confirm")
                    ),
                    r.createElement(X, {
                      background: "standby",
                      borderRadius: "full",
                      height: "8",
                      marginLeft: "8",
                      width: "8",
                    })
                  )
              )
            )
          ),
          u &&
            c < f.length - 1 &&
            r.createElement(X, {
              background: "generalBorderDim",
              height: "1",
              marginX: "8",
            })
        );
      };
      function ad({ onClose: e, open: t }) {
        let { chainId: a } = (0, c.m)(),
          { chains: n } = (0, d.Z)(),
          [l, o] = (0, r.useState)(null),
          { switchChain: i } = (0, S.o)({
            mutation: {
              onMutate: ({ chainId: e }) => {
                o(e);
              },
              onSuccess: () => {
                l && o(null);
              },
              onError: () => {
                l && o(null);
              },
              onSettled: () => {
                e();
              },
            },
          }),
          { i18n: s } = (0, r.useContext)(eu),
          { disconnect: u } = (0, w.q)(),
          f = "rk_chain_modal_title",
          m = P(),
          v = n.some((e) => e.id === a),
          g = m ? "36" : "28",
          h = eW();
        return a
          ? r.createElement(
              tJ,
              { onClose: e, open: t, titleId: f },
              r.createElement(
                tQ,
                { bottomSheetOnMobile: !0, paddingBottom: "0" },
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "14" },
                  r.createElement(
                    X,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    },
                    m && r.createElement(X, { width: "30" }),
                    r.createElement(
                      X,
                      { paddingBottom: "0", paddingLeft: "8", paddingTop: "4" },
                      r.createElement(
                        tL,
                        {
                          as: "h1",
                          color: "modalText",
                          id: f,
                          size: m ? "20" : "18",
                          weight: "heavy",
                        },
                        s.t("chains.title")
                      )
                    ),
                    r.createElement(tU, { onClose: e })
                  ),
                  !v &&
                    r.createElement(
                      X,
                      { marginX: "8", textAlign: m ? "center" : "left" },
                      r.createElement(
                        tL,
                        {
                          color: "modalTextSecondary",
                          size: "14",
                          weight: "medium",
                        },
                        s.t("chains.wrong_network")
                      )
                    ),
                  r.createElement(
                    X,
                    {
                      className: m ? "_18dqw9x1" : "_18dqw9x0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4",
                      padding: "2",
                      paddingBottom: "16",
                    },
                    h.map(
                      ({ iconBackground: e, iconUrl: t, id: n, name: o }, s) =>
                        r.createElement(au, {
                          key: n,
                          chainId: n,
                          currentChainId: a,
                          switchChain: i,
                          chainIconSize: g,
                          isLoading: l === n,
                          src: t,
                          name: o,
                          iconBackground: e,
                          idx: s,
                        })
                    ),
                    !v &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(X, {
                          background: "generalBorderDim",
                          height: "1",
                          marginX: "8",
                        }),
                        r.createElement(
                          ac,
                          {
                            onClick: () => u(),
                            testId: "chain-option-disconnect",
                          },
                          r.createElement(
                            X,
                            {
                              color: "error",
                              fontFamily: "body",
                              fontSize: "16",
                              fontWeight: "bold",
                            },
                            r.createElement(
                              X,
                              {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              },
                              r.createElement(
                                X,
                                {
                                  alignItems: "center",
                                  display: "flex",
                                  flexDirection: "row",
                                  gap: "4",
                                  height: g,
                                },
                                r.createElement(
                                  X,
                                  {
                                    alignItems: "center",
                                    color: "error",
                                    height: g,
                                    justifyContent: "center",
                                    marginRight: "8",
                                  },
                                  r.createElement(as, { size: Number(g) })
                                ),
                                r.createElement(
                                  "div",
                                  null,
                                  s.t("chains.disconnect")
                                )
                              )
                            )
                          )
                        )
                      )
                  )
                )
              )
            )
          : null;
      }
      var af = ({ children: e, href: t }) =>
          r.createElement(
            X,
            {
              as: "a",
              color: "accentColor",
              href: t,
              rel: "noreferrer",
              target: "_blank",
            },
            e
          ),
        am = ({ children: e }) =>
          r.createElement(
            tL,
            { color: "modalTextSecondary", size: "12", weight: "medium" },
            e
          );
      function av({ compactModeEnabled: e = !1, getWallet: t }) {
        let { disclaimer: a, learnMoreUrl: n } = (0, r.useContext)(tn),
          { i18n: l } = (0, r.useContext)(eu);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            X,
            {
              alignItems: "center",
              color: "accentColor",
              display: "flex",
              flexDirection: "column",
              height: "full",
              justifyContent: "space-around",
            },
            r.createElement(
              X,
              { marginBottom: "10" },
              !e &&
                r.createElement(
                  tL,
                  { color: "modalText", size: "18", weight: "heavy" },
                  l.t("intro.title")
                )
            ),
            r.createElement(
              X,
              {
                display: "flex",
                flexDirection: "column",
                gap: "32",
                justifyContent: "center",
                marginY: "20",
                style: { maxWidth: 312 },
              },
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16",
                },
                r.createElement(
                  X,
                  {
                    borderRadius: "6",
                    height: "48",
                    minWidth: "48",
                    width: "48",
                  },
                  r.createElement(tS, null)
                ),
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "4" },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "14", weight: "bold" },
                    l.t("intro.digital_asset.title")
                  ),
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    l.t("intro.digital_asset.description")
                  )
                )
              ),
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16",
                },
                r.createElement(
                  X,
                  {
                    borderRadius: "6",
                    height: "48",
                    minWidth: "48",
                    width: "48",
                  },
                  r.createElement(t_, null)
                ),
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "4" },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "14", weight: "bold" },
                    l.t("intro.login.title")
                  ),
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    l.t("intro.login.description")
                  )
                )
              )
            ),
            r.createElement(
              X,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "12",
                justifyContent: "center",
                margin: "10",
              },
              r.createElement(tM, {
                label: l.t("intro.get.label"),
                onClick: t,
              }),
              r.createElement(
                X,
                {
                  as: "a",
                  className: F({ active: "shrink", hover: "grow" }),
                  display: "block",
                  href: n,
                  paddingX: "12",
                  paddingY: "4",
                  rel: "noreferrer",
                  style: { willChange: "transform" },
                  target: "_blank",
                  transition: "default",
                },
                r.createElement(
                  tL,
                  { color: "accentColor", size: "14", weight: "bold" },
                  l.t("intro.learn_more.label")
                )
              )
            ),
            a &&
              !e &&
              r.createElement(
                X,
                { marginBottom: "8", marginTop: "12", textAlign: "center" },
                r.createElement(a, { Link: af, Text: am })
              )
          )
        );
      }
      var ag = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "17",
              viewBox: "0 0 11 17",
              width: "11",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Back"),
            r.createElement("path", {
              d: "M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",
              fill: "currentColor",
            })
          ),
        ah = () =>
          r.createElement(
            "svg",
            {
              fill: "none",
              height: "12",
              viewBox: "0 0 8 12",
              width: "8",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.createElement("title", null, "Info"),
            r.createElement("path", {
              d: "M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",
              fill: "currentColor",
            })
          ),
        ap = ({ "aria-label": e = "Info", onClick: t }) => {
          let a = P();
          return r.createElement(
            X,
            {
              alignItems: "center",
              "aria-label": e,
              as: "button",
              background: "closeButtonBackground",
              borderColor: "actionButtonBorder",
              borderRadius: "full",
              borderStyle: "solid",
              borderWidth: a ? "0" : "1",
              className: F({ active: "shrinkSm", hover: "growLg" }),
              color: "closeButton",
              display: "flex",
              height: a ? "30" : "28",
              justifyContent: "center",
              onClick: t,
              style: { willChange: "transform" },
              transition: "default",
              type: "button",
              width: a ? "30" : "28",
            },
            r.createElement(ah, null)
          );
        },
        aC = (e) => {
          let t = (0, r.useRef)(null),
            a = (0, r.useContext)(tl),
            n = G(e);
          return (
            (0, r.useEffect)(() => {
              if (a && t.current && n)
                return (function (e, t) {
                  let a;
                  ab++;
                  let n = [15, 20, 25, 35, 45],
                    l = [],
                    o = !1,
                    r = 0,
                    i = 0,
                    s = aj();
                  !(function e() {
                    o &&
                      l.length < 35 &&
                      (function () {
                        let e = n[Math.floor(Math.random() * n.length)],
                          a = 360 * Math.random(),
                          o = i - e / 2,
                          c = r - e / 2,
                          u = document.createElement("div");
                        (u.innerHTML = `<img src="${t}" width="${e}" height="${e}" style="border-radius: 25%">`),
                          u.setAttribute(
                            "style",
                            `position:absolute;will-change:transform;top:${o}px;left:${c}px;transform:rotate(${a}deg)`
                          ),
                          s.appendChild(u),
                          l.push({
                            direction: 0.5 >= Math.random() ? -1 : 1,
                            element: u,
                            left: c,
                            size: e,
                            speedHorz: 10 * Math.random(),
                            speedUp: 25 * Math.random(),
                            spinSpeed:
                              35 *
                              Math.random() *
                              (0.5 >= Math.random() ? -1 : 1),
                            spinVal: a,
                            top: o,
                          });
                      })(),
                      (function () {
                        for (let e of l)
                          (e.left = e.left - e.speedHorz * e.direction),
                            (e.top = e.top - e.speedUp),
                            (e.speedUp = Math.min(e.size, e.speedUp - 1)),
                            (e.spinVal = e.spinVal + e.spinSpeed),
                            e.top >=
                              Math.max(
                                window.innerHeight,
                                document.body.clientHeight
                              ) +
                                e.size &&
                              ((l = l.filter((t) => t !== e)),
                              e.element.remove()),
                            e.element.setAttribute(
                              "style",
                              `position:absolute;will-change:transform;top:${e.top}px;left:${e.left}px;transform:rotate(${e.spinVal}deg)`
                            );
                      })(),
                      (a = requestAnimationFrame(e));
                  })();
                  let c =
                      "ontouchstart" in window || navigator.msMaxTouchPoints,
                    u = c ? "touchstart" : "mousedown",
                    d = c ? "touchend" : "mouseup",
                    f = c ? "touchmove" : "mousemove",
                    m = (e) => {
                      "touches" in e
                        ? ((r = e.touches?.[0].clientX),
                          (i = e.touches?.[0].clientY))
                        : ((r = e.clientX), (i = e.clientY));
                    },
                    v = (e) => {
                      m(e), (o = !0);
                    },
                    g = () => {
                      o = !1;
                    };
                  return (
                    e.addEventListener(f, m, { passive: !1 }),
                    e.addEventListener(u, v),
                    e.addEventListener(d, g),
                    e.addEventListener("mouseleave", g),
                    () => {
                      e.removeEventListener(f, m),
                        e.removeEventListener(u, v),
                        e.removeEventListener(d, g),
                        e.removeEventListener("mouseleave", g);
                      let t = setInterval(() => {
                        a &&
                          0 === l.length &&
                          (cancelAnimationFrame(a),
                          clearInterval(t),
                          0 == --ab && s.remove());
                      }, 500);
                    }
                  );
                })(t.current, n);
            }, [a, n]),
            t
          );
        },
        aj = () => {
          let e = "_rk_coolMode",
            t = document.getElementById(e);
          if (t) return t;
          let a = document.createElement("div");
          return (
            a.setAttribute("id", e),
            a.setAttribute(
              "style",
              "overflow:hidden;position:fixed;height:100%;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:2147483647"
            ),
            document.body.appendChild(a),
            a
          );
        },
        ab = 0,
        aw = ({
          as: e = "button",
          currentlySelected: t = !1,
          iconBackground: a,
          iconUrl: n,
          name: l,
          onClick: o,
          ready: i,
          recent: s,
          testId: c,
          isRainbowKitConnector: u,
          ...d
        }) => {
          let f = aC(n),
            [m, v] = r.useState(!1),
            { i18n: g } = r.useContext(eu);
          return r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              onMouseEnter: () => v(!0),
              onMouseLeave: () => v(!1),
              ref: f,
            },
            r.createElement(
              X,
              {
                as: e,
                borderRadius: "menuButton",
                borderStyle: "solid",
                borderWidth: "1",
                className: t ? void 0 : ["g5kl0l0", F({ active: "shrink" })],
                disabled: t,
                onClick: o,
                padding: "5",
                style: { willChange: "transform" },
                testId: c,
                transition: "default",
                width: "full",
                ...(t
                  ? {
                      background: "accentColor",
                      borderColor: "selectedOptionBorder",
                      boxShadow: "selectedWallet",
                    }
                  : { background: { hover: "menuItemBackground" } }),
                ...d,
              },
              r.createElement(
                X,
                {
                  color: t ? "accentColorForeground" : "modalText",
                  disabled: !i,
                  fontFamily: "body",
                  fontSize: "16",
                  fontWeight: "bold",
                  transition: "default",
                },
                r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "12",
                  },
                  r.createElement(J, {
                    background: a,
                    ...(!m && u ? { borderColor: "actionButtonBorder" } : {}),
                    useAsImage: !u,
                    borderRadius: "6",
                    height: "28",
                    src: n,
                    width: "28",
                  }),
                  r.createElement(
                    X,
                    null,
                    r.createElement(
                      X,
                      {
                        style: { marginTop: s ? -2 : void 0 },
                        maxWidth: "200",
                      },
                      l
                    ),
                    s &&
                      r.createElement(
                        tL,
                        {
                          color: t ? "accentColorForeground" : "accentColor",
                          size: "12",
                          style: { lineHeight: 1, marginTop: -1 },
                          weight: "medium",
                        },
                        g.t("connect.recent")
                      )
                  )
                )
              )
            )
          );
        };
      aw.displayName = "ModalSelection";
      var aE = "rk-latest-id",
        ay = (e, t = 1) => {
          let a = e.replace("#", "");
          3 === a.length && (a = `${a[0]}${a[0]}${a[1]}${a[1]}${a[2]}${a[2]}`);
          let n = Number.parseInt(a.substring(0, 2), 16),
            l = Number.parseInt(a.substring(2, 4), 16),
            o = Number.parseInt(a.substring(4, 6), 16);
          return t > 1 && t <= 100 && (t /= 100), `rgba(${n},${l},${o},${t})`;
        },
        ax = (e) => (e ? [ay(e, 0.2), ay(e, 0.14), ay(e, 0.1)] : null),
        ak = (e) => /^#([0-9a-f]{3}){1,2}$/i.test(e),
        aB = async () => (await a.e(8658).then(a.bind(a, 58658))).default,
        aI = () => V(aB),
        aT = () =>
          r.createElement(J, {
            background: "#515a70",
            borderColor: "generalBorder",
            borderRadius: "10",
            height: "48",
            src: aB,
            width: "48",
          }),
        aS = async () => (await a.e(207).then(a.bind(a, 50207))).default,
        aD = () => V(aS),
        aN = () =>
          r.createElement(J, {
            background: "#e3a5e8",
            borderColor: "generalBorder",
            borderRadius: "10",
            height: "48",
            src: aS,
            width: "48",
          }),
        a_ = async () => (await a.e(1142).then(a.bind(a, 11142))).default,
        aL = () => V(a_),
        aO = () =>
          r.createElement(J, {
            background: "#515a70",
            borderColor: "generalBorder",
            borderRadius: "10",
            height: "48",
            src: a_,
            width: "48",
          }),
        aM = async () => (await a.e(7170).then(a.bind(a, 47170))).default,
        aA = () => V(aM),
        aU = () =>
          r.createElement(J, {
            background: "#515a70",
            borderColor: "generalBorder",
            borderRadius: "10",
            height: "48",
            src: aM,
            width: "48",
          }),
        aF = (e, t) => {
          let a = Array.prototype.slice.call(
              D.create(e, { errorCorrectionLevel: t }).modules.data,
              0
            ),
            n = Math.sqrt(a.length);
          return a.reduce(
            (e, t, a) =>
              (a % n == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e,
            []
          );
        };
      function az({
        ecl: e = "M",
        logoBackground: t,
        logoMargin: a = 10,
        logoSize: n = 50,
        logoUrl: l,
        size: o = 200,
        uri: i,
      }) {
        let s = o - 2 * Number.parseInt("20", 10),
          c = (0, r.useMemo)(() => {
            let t = [],
              a = aF(i, e),
              l = s / a.length;
            [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: 1 },
            ].forEach(({ x: e, y: n }) => {
              let o = (a.length - 7) * l * e,
                i = (a.length - 7) * l * n;
              for (let a = 0; a < 3; a++)
                t.push(
                  r.createElement("rect", {
                    fill: a % 2 != 0 ? "white" : "black",
                    height: l * (7 - 2 * a),
                    key: `${a}-${e}-${n}`,
                    rx: -((a - 2) * 5) + (0 === a ? 2 : 0),
                    ry: -((a - 2) * 5) + (0 === a ? 2 : 0),
                    width: l * (7 - 2 * a),
                    x: o + l * a,
                    y: i + l * a,
                  })
                );
            });
            let o = Math.floor((n + 25) / l),
              c = a.length / 2 - o / 2,
              u = a.length / 2 + o / 2 - 1;
            return (
              a.forEach((e, n) => {
                e.forEach((e, o) => {
                  !a[n][o] ||
                    (n < 7 && o < 7) ||
                    (n > a.length - 8 && o < 7) ||
                    (n < 7 && o > a.length - 8) ||
                    (n > c && n < u && o > c && o < u) ||
                    t.push(
                      r.createElement("circle", {
                        cx: n * l + l / 2,
                        cy: o * l + l / 2,
                        fill: "black",
                        key: `circle-${n}-${o}`,
                        r: l / 3,
                      })
                    );
                });
              }),
              t
            );
          }, [e, n, s, i]),
          u = s / 2 - n / 2,
          d = n + 2 * a;
        return r.createElement(
          X,
          {
            borderColor: "generalBorder",
            borderRadius: "menuButton",
            borderStyle: "solid",
            borderWidth: "1",
            className: "_1vwt0cg0",
            padding: "20",
            width: "max",
          },
          r.createElement(
            X,
            {
              style: { height: s, userSelect: "none", width: s },
              userSelect: "none",
            },
            r.createElement(
              X,
              {
                display: "flex",
                justifyContent: "center",
                position: "relative",
                style: { height: 0, top: u, width: s },
                width: "full",
              },
              r.createElement(J, {
                background: t,
                borderColor: { custom: "rgba(0, 0, 0, 0.06)" },
                borderRadius: "13",
                height: n,
                src: l,
                width: n,
              })
            ),
            r.createElement(
              "svg",
              { height: s, style: { all: "revert" }, width: s },
              r.createElement("title", null, "QR Code"),
              r.createElement(
                "defs",
                null,
                r.createElement(
                  "clipPath",
                  { id: "clip-wrapper" },
                  r.createElement("rect", { height: d, width: d })
                ),
                r.createElement(
                  "clipPath",
                  { id: "clip-logo" },
                  r.createElement("rect", { height: n, width: n })
                )
              ),
              r.createElement("rect", {
                fill: "transparent",
                height: s,
                width: s,
              }),
              c
            )
          )
        );
      }
      var aR = async () => {
          switch (tm()) {
            case "Arc":
              return (await a.e(4279).then(a.bind(a, 34279))).default;
            case "Brave":
              return (await a.e(4943).then(a.bind(a, 34943))).default;
            case "Chrome":
              return (await a.e(4238).then(a.bind(a, 94238))).default;
            case "Edge":
              return (await a.e(3810).then(a.bind(a, 73810))).default;
            case "Firefox":
              return (await a.e(6366).then(a.bind(a, 6366))).default;
            case "Opera":
              return (await a.e(4178).then(a.bind(a, 34178))).default;
            case "Safari":
              return (await a.e(6075).then(a.bind(a, 96075))).default;
            default:
              return (await a.e(106).then(a.bind(a, 20106))).default;
          }
        },
        a$ = () => V(aR),
        aW = async () => {
          switch (tg()) {
            case "Windows":
              return (await a.e(5786).then(a.bind(a, 75786))).default;
            case "macOS":
              return (await a.e(3179).then(a.bind(a, 23179))).default;
            default:
              return (await a.e(5260).then(a.bind(a, 15260))).default;
          }
        },
        aP = () => V(aW);
      function aq({ getWalletDownload: e, compactModeEnabled: t }) {
        let a = tB()
            .filter((e) => e.isRainbowKitConnector)
            .splice(0, 5),
          { i18n: n } = (0, r.useContext)(eu);
        return r.createElement(
          X,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "full",
            marginTop: "18",
            width: "full",
          },
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "28",
              height: "full",
              width: "full",
            },
            a
              ?.filter(
                (e) =>
                  e.extensionDownloadUrl ||
                  e.desktopDownloadUrl ||
                  (e.qrCode && e.downloadUrls?.qrCode)
              )
              .map((t) => {
                let {
                    downloadUrls: a,
                    iconBackground: l,
                    iconUrl: o,
                    id: i,
                    name: s,
                    qrCode: c,
                  } = t,
                  u = a?.qrCode && c,
                  d = !!t.extensionDownloadUrl,
                  f = a?.qrCode && d,
                  m = a?.qrCode && !!t.desktopDownloadUrl;
                return r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    gap: "16",
                    justifyContent: "space-between",
                    key: t.id,
                    width: "full",
                  },
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      gap: "16",
                    },
                    r.createElement(J, {
                      background: l,
                      borderColor: "actionButtonBorder",
                      borderRadius: "10",
                      height: "48",
                      src: o,
                      width: "48",
                    }),
                    r.createElement(
                      X,
                      { display: "flex", flexDirection: "column", gap: "2" },
                      r.createElement(
                        tL,
                        { color: "modalText", size: "14", weight: "bold" },
                        s
                      ),
                      r.createElement(
                        tL,
                        {
                          color: "modalTextSecondary",
                          size: "14",
                          weight: "medium",
                        },
                        f
                          ? n.t("get.mobile_and_extension.description")
                          : m
                          ? n.t("get.mobile_and_desktop.description")
                          : u
                          ? n.t("get.mobile.description")
                          : d
                          ? n.t("get.extension.description")
                          : null
                      )
                    )
                  ),
                  r.createElement(
                    X,
                    { display: "flex", flexDirection: "column", gap: "4" },
                    r.createElement(tM, {
                      label: n.t("get.action.label"),
                      onClick: () => e(i),
                      type: "secondary",
                    })
                  )
                );
              })
          ),
          r.createElement(
            X,
            {
              alignItems: "center",
              borderRadius: "10",
              display: "flex",
              flexDirection: "column",
              gap: "8",
              justifyContent: "space-between",
              marginBottom: "4",
              paddingY: "8",
              style: { maxWidth: 275, textAlign: "center" },
            },
            r.createElement(
              tL,
              { color: "modalText", size: "14", weight: "bold" },
              n.t("get.looking_for.title")
            ),
            r.createElement(
              tL,
              { color: "modalTextSecondary", size: "14", weight: "medium" },
              t
                ? n.t("get.looking_for.desktop.compact_description")
                : n.t("get.looking_for.desktop.wide_description")
            )
          )
        );
      }
      function aH({
        changeWalletStep: e,
        compactModeEnabled: t,
        connectionError: a,
        onClose: n,
        qrCodeUri: l,
        reconnect: o,
        wallet: i,
      }) {
        let {
            downloadUrls: s,
            iconBackground: c,
            iconUrl: u,
            name: d,
            qrCode: f,
            ready: m,
            showWalletConnectModal: v,
            getDesktopUri: g,
          } = i,
          h = !!g,
          p = tf(),
          { i18n: C } = (0, r.useContext)(eu),
          j = !!i.extensionDownloadUrl,
          b = s?.qrCode && j,
          w = s?.qrCode && !!i.desktopDownloadUrl,
          E = f && l,
          y = async () => {
            let e = await g?.();
            window.open(e, p ? "_blank" : "_self");
          },
          x = v
            ? {
                description: t
                  ? C.t("connect.walletconnect.description.compact")
                  : C.t("connect.walletconnect.description.full"),
                label: C.t("connect.walletconnect.open.label"),
                onClick: () => {
                  n(), v();
                },
              }
            : E
            ? {
                description: C.t("connect.secondary_action.get.description", {
                  wallet: d,
                }),
                label: C.t("connect.secondary_action.get.label"),
                onClick: () => e(b || w ? "DOWNLOAD_OPTIONS" : "DOWNLOAD"),
              }
            : null,
          { width: k } = to();
        return (
          (0, r.useEffect)(() => {
            a$(), aP();
          }, []),
          r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              height: "full",
              width: "full",
            },
            E
              ? r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    height: "full",
                    justifyContent: "center",
                  },
                  r.createElement(az, {
                    logoBackground: c,
                    logoSize: t ? 60 : 72,
                    logoUrl: u,
                    size: t
                      ? 318
                      : k && k < 768
                      ? Math.max(280, Math.min(k - 308, 382))
                      : 382,
                    uri: l,
                  })
                )
              : r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    style: { flexGrow: 1 },
                  },
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8",
                    },
                    r.createElement(
                      X,
                      { borderRadius: "10", height: "44", overflow: "hidden" },
                      r.createElement(J, {
                        useAsImage: !i.isRainbowKitConnector,
                        height: "44",
                        src: u,
                        width: "44",
                      })
                    ),
                    r.createElement(
                      X,
                      {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4",
                        paddingX: "32",
                        style: { textAlign: "center" },
                      },
                      r.createElement(
                        tL,
                        { color: "modalText", size: "18", weight: "bold" },
                        m
                          ? C.t("connect.status.opening", { wallet: d })
                          : j
                          ? C.t("connect.status.not_installed", { wallet: d })
                          : C.t("connect.status.not_available", { wallet: d })
                      ),
                      !m && j
                        ? r.createElement(
                            X,
                            { paddingTop: "20" },
                            r.createElement(tM, {
                              href: i.extensionDownloadUrl,
                              label: C.t(
                                "connect.secondary_action.install.label"
                              ),
                              type: "secondary",
                            })
                          )
                        : null,
                      m &&
                        !E &&
                        r.createElement(
                          r.Fragment,
                          null,
                          r.createElement(
                            X,
                            {
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            },
                            r.createElement(
                              tL,
                              {
                                color: "modalTextSecondary",
                                size: "14",
                                textAlign: "center",
                                weight: "medium",
                              },
                              C.t("connect.status.confirm")
                            )
                          ),
                          r.createElement(
                            X,
                            {
                              alignItems: "center",
                              color: "modalText",
                              display: "flex",
                              flexDirection: "row",
                              height: "32",
                              marginTop: "8",
                            },
                            a
                              ? r.createElement(tM, {
                                  label: C.t(
                                    "connect.secondary_action.retry.label"
                                  ),
                                  onClick: async () => {
                                    h && y(), o(i);
                                  },
                                })
                              : r.createElement(
                                  X,
                                  { color: "modalTextSecondary" },
                                  r.createElement(ee, null)
                                )
                          )
                        )
                    )
                  )
                ),
            r.createElement(
              X,
              {
                alignItems: "center",
                borderRadius: "10",
                display: "flex",
                flexDirection: "row",
                gap: "8",
                height: "28",
                justifyContent: "space-between",
                marginTop: "12",
              },
              m &&
                x &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    x.description
                  ),
                  r.createElement(tM, {
                    label: x.label,
                    onClick: x.onClick,
                    type: "secondary",
                  })
                )
            )
          )
        );
      }
      var aX = ({
        actionLabel: e,
        description: t,
        iconAccent: a,
        iconBackground: n,
        iconUrl: l,
        isCompact: o,
        onAction: i,
        title: s,
        url: c,
        variant: u,
      }) => {
        let d = "browser" === u,
          f = !d && a && ax(a);
        return r.createElement(
          X,
          {
            alignItems: "center",
            borderRadius: "13",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            paddingX: o ? "18" : "44",
            position: "relative",
            style: { flex: 1, isolation: "isolate" },
            width: "full",
          },
          r.createElement(X, {
            borderColor: "actionButtonBorder",
            borderRadius: "13",
            borderStyle: "solid",
            borderWidth: "1",
            style: {
              bottom: "0",
              left: "0",
              position: "absolute",
              right: "0",
              top: "0",
              zIndex: 1,
            },
          }),
          d &&
            r.createElement(
              X,
              {
                background: "downloadTopCardBackground",
                height: "full",
                position: "absolute",
                style: { zIndex: 0 },
                width: "full",
              },
              r.createElement(
                X,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  style: {
                    bottom: "0",
                    filter: "blur(20px)",
                    left: "0",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    transform: "translate3d(0, 0, 0)",
                  },
                },
                r.createElement(
                  X,
                  {
                    style: {
                      filter: "blur(100px)",
                      marginLeft: -27,
                      marginTop: -20,
                      opacity: 0.6,
                      transform: "translate3d(0, 0, 0)",
                    },
                  },
                  r.createElement(J, {
                    borderRadius: "full",
                    height: "200",
                    src: l,
                    width: "200",
                  })
                ),
                r.createElement(
                  X,
                  {
                    style: {
                      filter: "blur(100px)",
                      marginRight: 0,
                      marginTop: 105,
                      opacity: 0.6,
                      overflow: "auto",
                      transform: "translate3d(0, 0, 0)",
                    },
                  },
                  r.createElement(J, {
                    borderRadius: "full",
                    height: "200",
                    src: l,
                    width: "200",
                  })
                )
              )
            ),
          !d &&
            f &&
            r.createElement(
              X,
              {
                background: "downloadBottomCardBackground",
                style: {
                  bottom: "0",
                  left: "0",
                  position: "absolute",
                  right: "0",
                  top: "0",
                },
              },
              r.createElement(X, {
                position: "absolute",
                style: {
                  background: `radial-gradient(50% 50% at 50% 50%, ${f[0]} 0%, ${f[1]} 25%, rgba(0,0,0,0) 100%)`,
                  height: 564,
                  left: -215,
                  top: -197,
                  transform: "translate3d(0, 0, 0)",
                  width: 564,
                },
              }),
              r.createElement(X, {
                position: "absolute",
                style: {
                  background: `radial-gradient(50% 50% at 50% 50%, ${f[2]} 0%, rgba(0, 0, 0, 0) 100%)`,
                  height: 564,
                  left: -1,
                  top: -76,
                  transform: "translate3d(0, 0, 0)",
                  width: 564,
                },
              })
            ),
          r.createElement(
            X,
            {
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "row",
              gap: "24",
              height: "max",
              justifyContent: "center",
              style: { zIndex: 1 },
            },
            r.createElement(
              X,
              null,
              r.createElement(J, {
                height: "60",
                src: l,
                width: "60",
                ...(n
                  ? {
                      background: n,
                      borderColor: "generalBorder",
                      borderRadius: "10",
                    }
                  : null),
              })
            ),
            r.createElement(
              X,
              {
                display: "flex",
                flexDirection: "column",
                gap: "4",
                style: { flex: 1 },
                width: "full",
              },
              r.createElement(
                tL,
                { color: "modalText", size: "14", weight: "bold" },
                s
              ),
              r.createElement(
                tL,
                { color: "modalTextSecondary", size: "14", weight: "medium" },
                t
              ),
              r.createElement(
                X,
                { marginTop: "14", width: "max" },
                r.createElement(tM, {
                  href: c,
                  label: e,
                  onClick: i,
                  size: "medium",
                })
              )
            )
          )
        );
      };
      function aZ({ changeWalletStep: e, wallet: t }) {
        let a = tm(),
          n = tg(),
          l = "compact" === (0, r.useContext)(tc),
          {
            desktop: o,
            desktopDownloadUrl: i,
            extension: s,
            extensionDownloadUrl: c,
            mobileDownloadUrl: u,
          } = t,
          { i18n: d } = (0, r.useContext)(eu);
        return (
          (0, r.useEffect)(() => {
            aD(), aA(), aL(), aI();
          }, []),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "24",
              height: "full",
              marginBottom: "8",
              marginTop: "4",
              width: "full",
            },
            r.createElement(
              X,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "8",
                height: "full",
                justifyContent: "center",
                width: "full",
              },
              c &&
                r.createElement(aX, {
                  actionLabel: d.t("get_options.extension.download.label", {
                    browser: a,
                  }),
                  description: d.t("get_options.extension.description"),
                  iconUrl: aR,
                  isCompact: l,
                  onAction: () =>
                    e(s?.instructions ? "INSTRUCTIONS_EXTENSION" : "CONNECT"),
                  title: d.t("get_options.extension.title", {
                    wallet: t.name,
                    browser: a,
                  }),
                  url: c,
                  variant: "browser",
                }),
              i &&
                r.createElement(aX, {
                  actionLabel: d.t("get_options.desktop.download.label", {
                    platform: n,
                  }),
                  description: d.t("get_options.desktop.description"),
                  iconUrl: aW,
                  isCompact: l,
                  onAction: () =>
                    e(o?.instructions ? "INSTRUCTIONS_DESKTOP" : "CONNECT"),
                  title: d.t("get_options.desktop.title", {
                    wallet: t.name,
                    platform: n,
                  }),
                  url: i,
                  variant: "desktop",
                }),
              u &&
                r.createElement(aX, {
                  actionLabel: d.t("get_options.mobile.download.label", {
                    wallet: t.name,
                  }),
                  description: d.t("get_options.mobile.description"),
                  iconAccent: t.iconAccent,
                  iconBackground: t.iconBackground,
                  iconUrl: t.iconUrl,
                  isCompact: l,
                  onAction: () => {
                    e("DOWNLOAD");
                  },
                  title: d.t("get_options.mobile.title", { wallet: t.name }),
                  variant: "app",
                })
            )
          )
        );
      }
      function aY({ changeWalletStep: e, wallet: t }) {
        let { downloadUrls: a, qrCode: n } = t,
          { i18n: l } = (0, r.useContext)(eu);
        return (
          (0, r.useEffect)(() => {
            aD(), aA();
          }, []),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "24",
              height: "full",
              width: "full",
            },
            r.createElement(
              X,
              { style: { maxWidth: 220, textAlign: "center" } },
              r.createElement(
                tL,
                { color: "modalTextSecondary", size: "14", weight: "semibold" },
                l.t("get_mobile.description")
              )
            ),
            r.createElement(
              X,
              { height: "full" },
              a?.qrCode
                ? r.createElement(az, { logoSize: 0, size: 268, uri: a.qrCode })
                : null
            ),
            r.createElement(
              X,
              {
                alignItems: "center",
                borderRadius: "10",
                display: "flex",
                flexDirection: "row",
                gap: "8",
                height: "34",
                justifyContent: "space-between",
                marginBottom: "12",
                paddingY: "8",
              },
              r.createElement(tM, {
                label: l.t("get_mobile.continue.label"),
                onClick: () =>
                  e(n?.instructions ? "INSTRUCTIONS_MOBILE" : "CONNECT"),
              })
            )
          )
        );
      }
      var aK = {
        connect: () => r.createElement(aT, null),
        create: () => r.createElement(aN, null),
        install: (e) =>
          r.createElement(J, {
            background: e.iconBackground,
            borderColor: "generalBorder",
            borderRadius: "10",
            height: "48",
            src: e.iconUrl,
            width: "48",
          }),
        refresh: () => r.createElement(aO, null),
        scan: () => r.createElement(aU, null),
      };
      function aV({ connectWallet: e, wallet: t }) {
        let { i18n: a } = (0, r.useContext)(eu);
        return r.createElement(
          X,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "full",
            width: "full",
          },
          r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              gap: "28",
              height: "full",
              justifyContent: "center",
              paddingY: "32",
              style: { maxWidth: 320 },
            },
            t?.qrCode?.instructions?.steps.map((e, n) =>
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16",
                  key: n,
                },
                r.createElement(
                  X,
                  {
                    borderRadius: "10",
                    height: "48",
                    minWidth: "48",
                    overflow: "hidden",
                    position: "relative",
                    width: "48",
                  },
                  aK[e.step]?.(t)
                ),
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "4" },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "14", weight: "bold" },
                    a.t(e.title, void 0, { rawKeyIfTranslationMissing: !0 })
                  ),
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    a.t(e.description, void 0, {
                      rawKeyIfTranslationMissing: !0,
                    })
                  )
                )
              )
            )
          ),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12",
              justifyContent: "center",
              marginBottom: "16",
            },
            r.createElement(tM, {
              label: a.t("get_instructions.mobile.connect.label"),
              onClick: () => e(t),
            }),
            r.createElement(
              X,
              {
                as: "a",
                className: F({ active: "shrink", hover: "grow" }),
                display: "block",
                href: t?.qrCode?.instructions?.learnMoreUrl,
                paddingX: "12",
                paddingY: "4",
                rel: "noreferrer",
                style: { willChange: "transform" },
                target: "_blank",
                transition: "default",
              },
              r.createElement(
                tL,
                { color: "accentColor", size: "14", weight: "bold" },
                a.t("get_instructions.mobile.learn_more.label")
              )
            )
          )
        );
      }
      function aG({ wallet: e }) {
        let { i18n: t } = (0, r.useContext)(eu);
        return r.createElement(
          X,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "full",
            width: "full",
          },
          r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              gap: "28",
              height: "full",
              justifyContent: "center",
              paddingY: "32",
              style: { maxWidth: 320 },
            },
            e?.extension?.instructions?.steps.map((a, n) =>
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16",
                  key: n,
                },
                r.createElement(
                  X,
                  {
                    borderRadius: "10",
                    height: "48",
                    minWidth: "48",
                    overflow: "hidden",
                    position: "relative",
                    width: "48",
                  },
                  aK[a.step]?.(e)
                ),
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "4" },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "14", weight: "bold" },
                    t.t(a.title, void 0, { rawKeyIfTranslationMissing: !0 })
                  ),
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    t.t(a.description, void 0, {
                      rawKeyIfTranslationMissing: !0,
                    })
                  )
                )
              )
            )
          ),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12",
              justifyContent: "center",
              marginBottom: "16",
            },
            r.createElement(tM, {
              label: t.t("get_instructions.extension.refresh.label"),
              onClick: window.location.reload.bind(window.location),
            }),
            r.createElement(
              X,
              {
                as: "a",
                className: F({ active: "shrink", hover: "grow" }),
                display: "block",
                href: e?.extension?.instructions?.learnMoreUrl,
                paddingX: "12",
                paddingY: "4",
                rel: "noreferrer",
                style: { willChange: "transform" },
                target: "_blank",
                transition: "default",
              },
              r.createElement(
                tL,
                { color: "accentColor", size: "14", weight: "bold" },
                t.t("get_instructions.extension.learn_more.label")
              )
            )
          )
        );
      }
      function aJ({ connectWallet: e, wallet: t }) {
        let { i18n: a } = (0, r.useContext)(eu);
        return r.createElement(
          X,
          {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "full",
            width: "full",
          },
          r.createElement(
            X,
            {
              display: "flex",
              flexDirection: "column",
              gap: "28",
              height: "full",
              justifyContent: "center",
              paddingY: "32",
              style: { maxWidth: 320 },
            },
            t?.desktop?.instructions?.steps.map((e, n) =>
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16",
                  key: n,
                },
                r.createElement(
                  X,
                  {
                    borderRadius: "10",
                    height: "48",
                    minWidth: "48",
                    overflow: "hidden",
                    position: "relative",
                    width: "48",
                  },
                  aK[e.step]?.(t)
                ),
                r.createElement(
                  X,
                  { display: "flex", flexDirection: "column", gap: "4" },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "14", weight: "bold" },
                    a.t(e.title, void 0, { rawKeyIfTranslationMissing: !0 })
                  ),
                  r.createElement(
                    tL,
                    {
                      color: "modalTextSecondary",
                      size: "14",
                      weight: "medium",
                    },
                    a.t(e.description, void 0, {
                      rawKeyIfTranslationMissing: !0,
                    })
                  )
                )
              )
            )
          ),
          r.createElement(
            X,
            {
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12",
              justifyContent: "center",
              marginBottom: "16",
            },
            r.createElement(tM, {
              label: a.t("get_instructions.desktop.connect.label"),
              onClick: () => e(t),
            }),
            r.createElement(
              X,
              {
                as: "a",
                className: F({ active: "shrink", hover: "grow" }),
                display: "block",
                href: t?.desktop?.instructions?.learnMoreUrl,
                paddingX: "12",
                paddingY: "4",
                rel: "noreferrer",
                style: { willChange: "transform" },
                target: "_blank",
                transition: "default",
              },
              r.createElement(
                tL,
                { color: "accentColor", size: "14", weight: "bold" },
                a.t("get_instructions.desktop.learn_more.label")
              )
            )
          )
        );
      }
      function aQ({ onClose: e }) {
        let t;
        let [a, n] = (0, r.useState)(),
          [l, o] = (0, r.useState)(),
          [i, s] = (0, r.useState)(),
          c = !!l?.qrCode && i,
          [u, d] = (0, r.useState)(!1),
          f = (0, r.useContext)(tc) === ts.COMPACT,
          { disclaimer: m } = (0, r.useContext)(tn),
          { i18n: v } = (0, r.useContext)(eu),
          g = tf(),
          h = (0, r.useRef)(!1),
          { connector: p } = (0, r.useContext)(tr),
          C = tB(!p)
            .filter((e) => e.ready || !!e.extensionDownloadUrl)
            .sort((e, t) => e.groupIndex - t.groupIndex),
          j = tB(),
          b = (function (e, t) {
            let a = {};
            for (let n of e) {
              let e = t(n);
              e && (a[e] || (a[e] = []), a[e].push(n));
            }
            return a;
          })(C, (e) => e.groupName),
          w = [
            "Recommended",
            "Other",
            "Popular",
            "More",
            "Others",
            "Installed",
          ];
        (0, r.useEffect)(() => {
          p && !h.current && (I("CONNECT"), k(p), (h.current = !0));
        }, [p]);
        let E = (e) => {
            d(!1),
              e.ready &&
                e?.connect?.()?.catch(() => {
                  d(!0);
                });
          },
          y = async (e) => {
            let t = C.find((t) => e.id === t.id);
            t?.getDesktopUri &&
              setTimeout(async () => {
                let e = await t?.getDesktopUri?.();
                e && window.open(e, g ? "_blank" : "_self");
              }, 0);
          },
          x = async (e) => {
            let t = C.find((t) => e.id === t.id),
              a = await t?.getQrCodeUri?.();
            s(a),
              setTimeout(
                () => {
                  o(t), I("CONNECT");
                },
                a ? 0 : 50
              );
          },
          k = async (e) => {
            var t;
            (t = e.id),
              localStorage.setItem(aE, t),
              e.ready && (x(e), y(e)),
              E(e),
              n(e.id),
              e.ready ||
                (o(e),
                I(e?.extensionDownloadUrl ? "DOWNLOAD_OPTIONS" : "CONNECT"));
          },
          B = () => {
            n(void 0), o(void 0), s(void 0);
          },
          I = (e, t = !1) => {
            t && "GET" === e && "GET" === T
              ? B()
              : t || "GET" !== e
              ? t || "CONNECT" !== e || S("CONNECT")
              : S("GET"),
              N(e);
          },
          [T, S] = (0, r.useState)("NONE"),
          [D, N] = (0, r.useState)("NONE"),
          _ = null,
          L = null,
          O = null;
        (0, r.useEffect)(() => {
          d(!1);
        }, [D, l]);
        let M = !!(l?.extensionDownloadUrl && l?.mobileDownloadUrl);
        switch (D) {
          case "NONE":
            _ = r.createElement(av, { getWallet: () => I("GET") });
            break;
          case "LEARN_COMPACT":
            (_ = r.createElement(av, {
              compactModeEnabled: f,
              getWallet: () => I("GET"),
            })),
              (L = v.t("intro.title")),
              (O = "NONE");
            break;
          case "GET":
            (_ = r.createElement(aq, {
              getWalletDownload: (e) => {
                let t = j.find((t) => e === t.id),
                  a = t?.downloadUrls?.qrCode,
                  n = !!t?.desktopDownloadUrl,
                  l = !!t?.extensionDownloadUrl;
                o(t),
                  a && (l || n)
                    ? I("DOWNLOAD_OPTIONS")
                    : a
                    ? I("DOWNLOAD")
                    : n
                    ? I("INSTRUCTIONS_DESKTOP")
                    : I("INSTRUCTIONS_EXTENSION");
              },
              compactModeEnabled: f,
            })),
              (L = v.t("get.title")),
              (O = f ? "LEARN_COMPACT" : "NONE");
            break;
          case "CONNECT":
            (_ =
              l &&
              r.createElement(aH, {
                changeWalletStep: I,
                compactModeEnabled: f,
                connectionError: u,
                onClose: e,
                qrCodeUri: i,
                reconnect: E,
                wallet: l,
              })),
              (L =
                c &&
                ("WalletConnect" === l.name
                  ? v.t("connect_scan.fallback_title")
                  : v.t("connect_scan.title", { wallet: l.name }))),
              (O = f ? (p ? null : "NONE") : null),
              (t = f ? (p ? () => {} : B) : () => {});
            break;
          case "DOWNLOAD_OPTIONS":
            (_ = l && r.createElement(aZ, { changeWalletStep: I, wallet: l })),
              (L = l && v.t("get_options.short_title", { wallet: l.name })),
              (O = p ? "CONNECT" : f ? "NONE" : T);
            break;
          case "DOWNLOAD":
            (_ = l && r.createElement(aY, { changeWalletStep: I, wallet: l })),
              (L = l && v.t("get_mobile.title", { wallet: l.name })),
              (O = M ? "DOWNLOAD_OPTIONS" : T);
            break;
          case "INSTRUCTIONS_MOBILE":
            (_ = l && r.createElement(aV, { connectWallet: k, wallet: l })),
              (L =
                l &&
                v.t("get_options.title", {
                  wallet: (f && l.shortName) || l.name,
                })),
              (O = "DOWNLOAD");
            break;
          case "INSTRUCTIONS_EXTENSION":
            (_ = l && r.createElement(aG, { wallet: l })),
              (L =
                l &&
                v.t("get_options.title", {
                  wallet: (f && l.shortName) || l.name,
                })),
              (O = "DOWNLOAD_OPTIONS");
            break;
          case "INSTRUCTIONS_DESKTOP":
            (_ = l && r.createElement(aJ, { connectWallet: k, wallet: l })),
              (L =
                l &&
                v.t("get_options.title", {
                  wallet: (f && l.shortName) || l.name,
                })),
              (O = "DOWNLOAD_OPTIONS");
        }
        return r.createElement(
          X,
          {
            display: "flex",
            flexDirection: "row",
            style: { maxHeight: f ? 468 : 504 },
          },
          (!f || "NONE" === D) &&
            r.createElement(
              X,
              {
                className: f ? "_1vwt0cg4" : "_1vwt0cg3",
                display: "flex",
                flexDirection: "column",
                marginTop: "16",
              },
              r.createElement(
                X,
                { display: "flex", justifyContent: "space-between" },
                f &&
                  m &&
                  r.createElement(
                    X,
                    { marginLeft: "16", width: "28" },
                    r.createElement(ap, { onClick: () => I("LEARN_COMPACT") })
                  ),
                f &&
                  !m &&
                  r.createElement(X, { marginLeft: "16", width: "28" }),
                r.createElement(
                  X,
                  {
                    marginLeft: f ? "0" : "6",
                    paddingBottom: "8",
                    paddingTop: "2",
                    paddingX: "18",
                  },
                  r.createElement(
                    tL,
                    {
                      as: "h1",
                      color: "modalText",
                      id: "rk_connect_title",
                      size: "18",
                      weight: "heavy",
                      testId: "connect-header-label",
                    },
                    v.t("connect.title")
                  )
                ),
                f &&
                  r.createElement(
                    X,
                    { marginRight: "16" },
                    r.createElement(tU, { onClose: e })
                  )
              ),
              r.createElement(
                X,
                {
                  className: "_1vwt0cg2 ju367v7a ju367v7v",
                  paddingBottom: "18",
                },
                Object.entries(b).map(
                  ([e, t], n) =>
                    t.length > 0 &&
                    r.createElement(
                      r.Fragment,
                      { key: n },
                      e
                        ? r.createElement(
                            X,
                            {
                              marginBottom: "8",
                              marginTop: "16",
                              marginX: "6",
                            },
                            r.createElement(
                              tL,
                              {
                                color:
                                  "Installed" === e
                                    ? "accentColor"
                                    : "modalTextSecondary",
                                size: "14",
                                weight: "bold",
                              },
                              w.includes(e)
                                ? v.t(`connector_group.${e.toLowerCase()}`)
                                : e
                            )
                          )
                        : null,
                      r.createElement(
                        X,
                        { display: "flex", flexDirection: "column", gap: "4" },
                        t.map((e) =>
                          r.createElement(aw, {
                            currentlySelected: e.id === a,
                            iconBackground: e.iconBackground,
                            iconUrl: e.iconUrl,
                            key: e.id,
                            name: e.name,
                            onClick: () => k(e),
                            ready: e.ready,
                            recent: e.recent,
                            testId: `wallet-option-${e.id}`,
                            isRainbowKitConnector: e.isRainbowKitConnector,
                          })
                        )
                      )
                    )
                )
              ),
              f &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(X, {
                    background: "generalBorder",
                    height: "1",
                    marginTop: "-1",
                  }),
                  m
                    ? r.createElement(
                        X,
                        { paddingX: "24", paddingY: "16", textAlign: "center" },
                        r.createElement(m, { Link: af, Text: am })
                      )
                    : r.createElement(
                        X,
                        {
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                          paddingX: "24",
                          paddingY: "16",
                        },
                        r.createElement(
                          X,
                          { paddingY: "4" },
                          r.createElement(
                            tL,
                            {
                              color: "modalTextSecondary",
                              size: "14",
                              weight: "medium",
                            },
                            v.t("connect.new_to_ethereum.description")
                          )
                        ),
                        r.createElement(
                          X,
                          {
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row",
                            gap: "4",
                            justifyContent: "center",
                          },
                          r.createElement(
                            X,
                            {
                              className: F({ active: "shrink", hover: "grow" }),
                              cursor: "pointer",
                              onClick: () => I("LEARN_COMPACT"),
                              paddingY: "4",
                              style: { willChange: "transform" },
                              transition: "default",
                            },
                            r.createElement(
                              tL,
                              {
                                color: "accentColor",
                                size: "14",
                                weight: "bold",
                              },
                              v.t("connect.new_to_ethereum.learn_more.label")
                            )
                          )
                        )
                      )
                )
            ),
          (!f || "NONE" !== D) &&
            r.createElement(
              r.Fragment,
              null,
              !f &&
                r.createElement(X, {
                  background: "generalBorder",
                  minWidth: "1",
                  width: "1",
                }),
              r.createElement(
                X,
                {
                  display: "flex",
                  flexDirection: "column",
                  margin: "16",
                  style: { flexGrow: 1 },
                },
                r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12",
                  },
                  r.createElement(
                    X,
                    { width: "28" },
                    O &&
                      r.createElement(
                        X,
                        {
                          as: "button",
                          className: F({ active: "shrinkSm", hover: "growLg" }),
                          color: "accentColor",
                          onClick: () => {
                            O && I(O, !0), t?.();
                          },
                          paddingX: "8",
                          paddingY: "4",
                          style: {
                            boxSizing: "content-box",
                            height: 17,
                            willChange: "transform",
                          },
                          transition: "default",
                          type: "button",
                        },
                        r.createElement(ag, null)
                      )
                  ),
                  r.createElement(
                    X,
                    {
                      display: "flex",
                      justifyContent: "center",
                      style: { flexGrow: 1 },
                    },
                    L &&
                      r.createElement(
                        tL,
                        {
                          color: "modalText",
                          size: "18",
                          textAlign: "center",
                          weight: "heavy",
                        },
                        L
                      )
                  ),
                  r.createElement(tU, { onClose: e })
                ),
                r.createElement(
                  X,
                  {
                    display: "flex",
                    flexDirection: "column",
                    style: { minHeight: f ? 396 : 432 },
                  },
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6",
                      height: "full",
                      justifyContent: "center",
                      marginX: "8",
                    },
                    _
                  )
                )
              )
            )
        );
      }
      var a3 = ({ wallet: e }) =>
        r.createElement(
          "svg",
          {
            className: "_1am14413",
            viewBox: "0 0 86 86",
            width: "86",
            height: "86",
          },
          r.createElement("title", null, "Loading"),
          r.createElement("rect", {
            x: "3",
            y: "3",
            width: 80,
            height: 80,
            rx: 20,
            ry: 20,
            strokeDasharray: "53.333333333333336 " + 320 / 3,
            strokeDashoffset: 160,
            className: "_1am14412",
            style: { stroke: e?.iconAccent || "#0D3887" },
          })
        );
      function a6({ onClose: e, wallet: t, connecting: a }) {
        let {
            connect: n,
            iconBackground: l,
            iconUrl: o,
            id: i,
            name: s,
            getMobileUri: c,
            ready: u,
            shortName: d,
            showWalletConnectModal: f,
          } = t,
          m = aC(o),
          v = (0, r.useRef)(!1),
          { i18n: g } = (0, r.useContext)(eu),
          h = (0, r.useCallback)(async () => {
            let t = async () => {
              let e = await c?.();
              if (e) {
                if (
                  (e &&
                    (function ({ mobileUri: e, name: t }) {
                      localStorage.setItem(
                        tR,
                        JSON.stringify({ href: e.split("?")[0], name: t })
                      );
                    })({ mobileUri: e, name: s }),
                  e.startsWith("http"))
                ) {
                  let t = document.createElement("a");
                  (t.href = e),
                    (t.target = "_blank"),
                    (t.rel = "noreferrer noopener"),
                    t.click();
                } else window.location.href = e;
              }
            };
            if (("walletConnect" !== i && t(), f)) {
              f(), e?.();
              return;
            }
            n?.();
          }, [n, c, f, e, s, i]);
        return (
          (0, r.useEffect)(() => {
            a && !v.current && (h(), (v.current = !0));
          }, [a, h]),
          r.createElement(
            X,
            {
              as: "button",
              color: u ? "modalText" : "modalTextSecondary",
              disabled: !u,
              fontFamily: "body",
              key: i,
              onClick: h,
              ref: m,
              style: { overflow: "visible", textAlign: "center" },
              testId: `wallet-option-${i}`,
              type: "button",
              width: "full",
            },
            r.createElement(
              X,
              {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              },
              r.createElement(
                X,
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "8",
                  paddingTop: "10",
                  position: "relative",
                },
                a ? r.createElement(a3, { wallet: t }) : null,
                r.createElement(J, {
                  background: l,
                  borderRadius: "13",
                  boxShadow: "walletLogo",
                  height: "60",
                  src: o,
                  width: "60",
                })
              ),
              a
                ? null
                : r.createElement(
                    X,
                    {
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    },
                    r.createElement(
                      tL,
                      {
                        as: "h2",
                        color: t.ready ? "modalText" : "modalTextSecondary",
                        size: "13",
                        weight: "medium",
                      },
                      r.createElement(
                        X,
                        { as: "span", position: "relative" },
                        d ?? s,
                        !t.ready && " (unsupported)"
                      )
                    ),
                    t.recent &&
                      r.createElement(
                        tL,
                        { color: "accentColor", size: "12", weight: "medium" },
                        g.t("connect.recent")
                      )
                  )
            )
          )
        );
      }
      function a1({ onClose: e }) {
        let t = tB().filter((e) => e.isRainbowKitConnector),
          { disclaimer: a, learnMoreUrl: n } = (0, r.useContext)(tn),
          l = null,
          o = null,
          i = !1,
          s = null,
          [c, u] = (0, r.useState)("CONNECT"),
          { i18n: d } = (0, r.useContext)(eu),
          f = W();
        switch (c) {
          case "CONNECT":
            (l = d.t("connect.title")),
              (i = !0),
              (o = r.createElement(
                X,
                null,
                r.createElement(
                  X,
                  {
                    background: "profileForeground",
                    className: "_1am14410",
                    display: "flex",
                    paddingBottom: "20",
                    paddingTop: "6",
                  },
                  r.createElement(
                    X,
                    { display: "flex", style: { margin: "0 auto" } },
                    t
                      .filter((e) => e.ready)
                      .map((t) =>
                        r.createElement(
                          X,
                          { key: t.id, paddingX: "20" },
                          r.createElement(
                            X,
                            { width: "60" },
                            r.createElement(a6, { onClose: e, wallet: t })
                          )
                        )
                      )
                  )
                ),
                r.createElement(X, {
                  background: "generalBorder",
                  height: "1",
                  marginBottom: "32",
                  marginTop: "-1",
                }),
                r.createElement(
                  X,
                  {
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32",
                    paddingX: "32",
                    style: { textAlign: "center" },
                  },
                  r.createElement(
                    X,
                    {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8",
                      textAlign: "center",
                    },
                    r.createElement(
                      tL,
                      { color: "modalText", size: "16", weight: "bold" },
                      d.t("intro.title")
                    ),
                    r.createElement(
                      tL,
                      { color: "modalTextSecondary", size: "16" },
                      d.t("intro.description")
                    )
                  )
                ),
                r.createElement(
                  X,
                  { paddingTop: "32", paddingX: "20" },
                  r.createElement(
                    X,
                    { display: "flex", gap: "14", justifyContent: "center" },
                    r.createElement(tM, {
                      label: d.t("intro.get.label"),
                      onClick: () => u("GET"),
                      size: "large",
                      type: "secondary",
                    }),
                    r.createElement(tM, {
                      href: n,
                      label: d.t("intro.learn_more.label"),
                      size: "large",
                      type: "secondary",
                    })
                  )
                ),
                a &&
                  r.createElement(
                    X,
                    { marginTop: "28", marginX: "32", textAlign: "center" },
                    r.createElement(a, { Link: af, Text: am })
                  )
              ));
            break;
          case "GET": {
            (l = d.t("get.title")), (s = "CONNECT");
            let e = t
              ?.filter(
                (e) =>
                  e.downloadUrls?.ios ||
                  e.downloadUrls?.android ||
                  e.downloadUrls?.mobile
              )
              ?.splice(0, 3);
            o = r.createElement(
              X,
              null,
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "full",
                  marginBottom: "36",
                  marginTop: "5",
                  paddingTop: "12",
                  width: "full",
                },
                e.map((t, a) => {
                  let {
                    downloadUrls: n,
                    iconBackground: l,
                    iconUrl: o,
                    name: i,
                  } = t;
                  return n?.ios || n?.android || n?.mobile
                    ? r.createElement(
                        X,
                        {
                          display: "flex",
                          gap: "16",
                          key: t.id,
                          paddingX: "20",
                          width: "full",
                        },
                        r.createElement(
                          X,
                          { style: { minHeight: 48, minWidth: 48 } },
                          r.createElement(J, {
                            background: l,
                            borderColor: "generalBorder",
                            borderRadius: "10",
                            height: "48",
                            src: o,
                            width: "48",
                          })
                        ),
                        r.createElement(
                          X,
                          {
                            display: "flex",
                            flexDirection: "column",
                            width: "full",
                          },
                          r.createElement(
                            X,
                            {
                              alignItems: "center",
                              display: "flex",
                              height: "48",
                            },
                            r.createElement(
                              X,
                              { width: "full" },
                              r.createElement(
                                tL,
                                {
                                  color: "modalText",
                                  size: "18",
                                  weight: "bold",
                                },
                                i
                              )
                            ),
                            r.createElement(tM, {
                              href: (f ? n?.ios : n?.android) || n?.mobile,
                              label: d.t("get.action.label"),
                              size: "small",
                              type: "secondary",
                            })
                          ),
                          a < e.length - 1 &&
                            r.createElement(X, {
                              background: "generalBorderDim",
                              height: "1",
                              marginY: "10",
                              width: "full",
                            })
                        )
                      )
                    : null;
                })
              ),
              r.createElement(X, { style: { marginBottom: "42px" } }),
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "36",
                  paddingX: "36",
                  style: { textAlign: "center" },
                },
                r.createElement(
                  X,
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                    textAlign: "center",
                  },
                  r.createElement(
                    tL,
                    { color: "modalText", size: "16", weight: "bold" },
                    d.t("get.looking_for.title")
                  ),
                  r.createElement(
                    tL,
                    { color: "modalTextSecondary", size: "16" },
                    d.t("get.looking_for.mobile.description")
                  )
                )
              )
            );
          }
        }
        return r.createElement(
          X,
          { display: "flex", flexDirection: "column", paddingBottom: "36" },
          r.createElement(
            X,
            {
              background: i ? "profileForeground" : "modalBackground",
              display: "flex",
              flexDirection: "column",
              paddingBottom: "4",
              paddingTop: "14",
            },
            r.createElement(
              X,
              {
                display: "flex",
                justifyContent: "center",
                paddingBottom: "6",
                paddingX: "20",
                position: "relative",
              },
              s &&
                r.createElement(
                  X,
                  {
                    display: "flex",
                    position: "absolute",
                    style: { left: 0, marginBottom: -20, marginTop: -20 },
                  },
                  r.createElement(
                    X,
                    {
                      alignItems: "center",
                      as: "button",
                      className: F({ active: "shrinkSm", hover: "growLg" }),
                      color: "accentColor",
                      display: "flex",
                      marginLeft: "4",
                      marginTop: "20",
                      onClick: () => u(s),
                      padding: "16",
                      style: { height: 17, willChange: "transform" },
                      transition: "default",
                      type: "button",
                    },
                    r.createElement(ag, null)
                  )
                ),
              r.createElement(
                X,
                { marginTop: "4", textAlign: "center", width: "full" },
                r.createElement(
                  tL,
                  {
                    as: "h1",
                    color: "modalText",
                    id: "rk_connect_title",
                    size: "20",
                    weight: "bold",
                  },
                  l
                )
              ),
              r.createElement(
                X,
                {
                  alignItems: "center",
                  display: "flex",
                  height: "32",
                  paddingRight: "14",
                  position: "absolute",
                  right: "0",
                },
                r.createElement(
                  X,
                  { style: { marginBottom: -20, marginTop: -20 } },
                  r.createElement(tU, { onClose: e })
                )
              )
            )
          ),
          r.createElement(X, { display: "flex", flexDirection: "column" }, o)
        );
      }
      var a7 = ({ onClose: e }) => {
        let { connector: t } = (0, r.useContext)(tr),
          { i18n: a } = (0, r.useContext)(eu),
          n = t?.name || "";
        return r.createElement(
          X,
          null,
          r.createElement(
            X,
            {
              display: "flex",
              paddingBottom: "32",
              justifyContent: "center",
              alignItems: "center",
              background: "profileForeground",
              flexDirection: "column",
            },
            r.createElement(
              X,
              {
                width: "full",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "18",
                marginRight: "24",
              },
              r.createElement(tU, { onClose: e })
            ),
            r.createElement(
              X,
              { width: "60" },
              r.createElement(a6, { onClose: e, wallet: t, connecting: !0 })
            ),
            r.createElement(
              X,
              { marginTop: "20" },
              r.createElement(
                tL,
                {
                  textAlign: "center",
                  color: "modalText",
                  size: "18",
                  weight: "semibold",
                },
                a.t("connect.status.connect_mobile", { wallet: n })
              )
            ),
            r.createElement(
              X,
              { maxWidth: "full", marginTop: "8" },
              r.createElement(
                tL,
                {
                  textAlign: "center",
                  color: "modalText",
                  size: "16",
                  weight: "medium",
                },
                a.t("connect.status.confirm_mobile", { wallet: n })
              )
            )
          )
        );
      };
      function a0({ onClose: e }) {
        let { connector: t } = (0, r.useContext)(tr);
        return P()
          ? t
            ? r.createElement(a7, { onClose: e })
            : r.createElement(a1, { onClose: e })
          : r.createElement(aQ, { onClose: e });
      }
      function a2({ onClose: e, open: t }) {
        let a = "rk_connect_title",
          n = $(),
          { disconnect: l } = (0, w.q)(),
          { isConnecting: o } = (0, c.m)(),
          i = r.useCallback(() => {
            e(), l();
          }, [e, l]),
          s = r.useCallback(() => {
            o && l(), e();
          }, [e, l, o]);
        return "disconnected" === n
          ? r.createElement(
              tJ,
              { onClose: s, open: t, titleId: a },
              r.createElement(
                tQ,
                { bottomSheetOnMobile: !0, padding: "0", wide: !0 },
                r.createElement(a0, { onClose: s })
              )
            )
          : "unauthenticated" === n
          ? r.createElement(
              tJ,
              { onClose: i, open: t, titleId: a },
              r.createElement(
                tQ,
                { bottomSheetOnMobile: !0, padding: "0" },
                r.createElement(tz, { onClose: i, onCloseModal: e })
              )
            )
          : null;
      }
      function a4() {
        let [e, t] = (0, r.useState)(!1);
        return {
          closeModal: (0, r.useCallback)(() => t(!1), []),
          isModalOpen: e,
          openModal: (0, r.useCallback)(() => t(!0), []),
        };
      }
      var a8 = (0, r.createContext)({
        accountModalOpen: !1,
        chainModalOpen: !1,
        connectModalOpen: !1,
        isWalletConnectModalOpen: !1,
        setIsWalletConnectModalOpen: () => {},
      });
      function a5({ children: e }) {
        let { closeModal: t, isModalOpen: a, openModal: n } = a4(),
          { closeModal: l, isModalOpen: o, openModal: i } = a4(),
          { closeModal: s, isModalOpen: u, openModal: f } = a4(),
          [m, v] = (0, r.useState)(!1),
          g = $(),
          { chainId: h } = (0, c.m)(),
          { chains: p } = (0, d.Z)(),
          C = p.some((e) => e.id === h),
          j = (0, r.useCallback)(
            ({ keepConnectModalOpen: e = !1 } = {}) => {
              e || t(), l(), s();
            },
            [t, l, s]
          ),
          w = "unauthenticated" === R();
        return (
          (0, b.E)({
            onConnect: () => j({ keepConnectModalOpen: w }),
            onDisconnect: () => j(),
          }),
          (0, r.useEffect)(() => {
            w && j();
          }, [w, j]),
          r.createElement(
            a8.Provider,
            {
              value: (0, r.useMemo)(
                () => ({
                  accountModalOpen: o,
                  chainModalOpen: u,
                  connectModalOpen: a,
                  isWalletConnectModalOpen: m,
                  openAccountModal: C && "connected" === g ? i : void 0,
                  openChainModal: "connected" === g ? f : void 0,
                  openConnectModal:
                    "disconnected" === g || "unauthenticated" === g
                      ? n
                      : void 0,
                  setIsWalletConnectModalOpen: v,
                }),
                [g, o, u, a, i, f, n, C, m]
              ),
            },
            e,
            r.createElement(a2, { onClose: t, open: a }),
            r.createElement(ai, { onClose: l, open: o }),
            r.createElement(ad, { onClose: s, open: u })
          )
        );
      }
      function a9() {
        let { accountModalOpen: e, openAccountModal: t } = (0, r.useContext)(
          a8
        );
        return { accountModalOpen: e, openAccountModal: t };
      }
      function ne() {
        let { isWalletConnectModalOpen: e, setIsWalletConnectModalOpen: t } =
          (0, r.useContext)(a8);
        return { isWalletConnectModalOpen: e, setIsWalletConnectModalOpen: t };
      }
      function nt() {
        let { connectModalOpen: e, openConnectModal: t } = (0, r.useContext)(
            a8
          ),
          { isWalletConnectModalOpen: a } = ne();
        return { connectModalOpen: e || a, openConnectModal: t };
      }
      var na = () => {};
      function nn({ children: e }) {
        let t = (function () {
            let [e, t] = (0, r.useState)(!1);
            return (
              (0, r.useEffect)(
                () => (
                  t(!0),
                  () => {
                    t(!1);
                  }
                ),
                []
              ),
              (0, r.useCallback)(() => e, [e])
            );
          })(),
          { address: a } = (0, c.m)(),
          { chainId: n } = (0, c.m)(),
          { chains: l } = (0, d.Z)(),
          o = l.some((e) => e.id === n),
          i = eq(),
          s = R() ?? void 0,
          u = n ? i[n] : void 0,
          f = u?.name ?? void 0,
          m = u?.iconUrl ?? void 0,
          v = u?.iconBackground ?? void 0,
          g = G(m),
          h = (0, r.useContext)(td),
          p = e9().some(({ status: e }) => "pending" === e) && h,
          { showBalance: C } = eZ(),
          {
            balance: j,
            ensAvatar: b,
            ensName: w,
          } = e6({
            address: a,
            includeBalance:
              "boolean" == typeof C
                ? C
                : !C || L(C)[P() ? "smallScreen" : "largeScreen"],
          }),
          E = j ? `${t1(Number.parseFloat(j.formatted))} ${j.symbol}` : void 0,
          { openConnectModal: y } = nt(),
          { openChainModal: x } = (function () {
            let { chainModalOpen: e, openChainModal: t } = (0, r.useContext)(
              a8
            );
            return { chainModalOpen: e, openChainModal: t };
          })(),
          { openAccountModal: k } = a9(),
          {
            accountModalOpen: B,
            chainModalOpen: I,
            connectModalOpen: T,
          } = (function () {
            let {
              accountModalOpen: e,
              chainModalOpen: t,
              connectModalOpen: a,
            } = (0, r.useContext)(a8);
            return {
              accountModalOpen: e,
              chainModalOpen: t,
              connectModalOpen: a,
            };
          })();
        return r.createElement(
          r.Fragment,
          null,
          e({
            account: a
              ? {
                  address: a,
                  balanceDecimals: j?.decimals,
                  balanceFormatted: j?.formatted,
                  balanceSymbol: j?.symbol,
                  displayBalance: E,
                  displayName: w ? t0(w) : t7(a),
                  ensAvatar: b ?? void 0,
                  ensName: w ?? void 0,
                  hasPendingTransactions: p,
                }
              : void 0,
            accountModalOpen: B,
            authenticationStatus: s,
            chain: n
              ? {
                  hasIcon: !!m,
                  iconBackground: v,
                  iconUrl: g,
                  id: n,
                  name: f,
                  unsupported: !o,
                }
              : void 0,
            chainModalOpen: I,
            connectModalOpen: T,
            mounted: t(),
            openAccountModal: k ?? na,
            openChainModal: x ?? na,
            openConnectModal: y ?? na,
          })
        );
      }
      nn.displayName = "ConnectButton.Custom";
      var nl = {
        accountStatus: "full",
        chainStatus: { largeScreen: "full", smallScreen: "icon" },
        label: "Connect Wallet",
        showBalance: { largeScreen: !0, smallScreen: !1 },
      };
      function no({
        accountStatus: e = nl.accountStatus,
        chainStatus: t = nl.chainStatus,
        label: a = nl.label,
        showBalance: n = nl.showBalance,
      }) {
        let l = eW(),
          o = $(),
          { setShowBalance: i } = eZ(),
          [s, c] = (0, r.useState)(!1),
          { i18n: u } = (0, r.useContext)(eu);
        return (
          (0, r.useEffect)(() => {
            i(n), s || c(!0);
          }, [n, i]),
          s
            ? r.createElement(
                nn,
                null,
                ({
                  account: i,
                  chain: s,
                  mounted: c,
                  openAccountModal: d,
                  openChainModal: f,
                  openConnectModal: m,
                }) => {
                  let v = c && "loading" !== o,
                    g = s?.unsupported ?? !1;
                  return r.createElement(
                    X,
                    {
                      display: "flex",
                      gap: "12",
                      ...(!v && {
                        "aria-hidden": !0,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      }),
                    },
                    v && i && "connected" === o
                      ? r.createElement(
                          r.Fragment,
                          null,
                          s &&
                            (l.length > 1 || g) &&
                            r.createElement(
                              X,
                              {
                                alignItems: "center",
                                "aria-label": "Chain Selector",
                                as: "button",
                                background: g
                                  ? "connectButtonBackgroundError"
                                  : "connectButtonBackground",
                                borderRadius: "connectButton",
                                boxShadow: "connectButton",
                                className: F({
                                  active: "shrink",
                                  hover: "grow",
                                }),
                                color: g
                                  ? "connectButtonTextError"
                                  : "connectButtonText",
                                display: _(t, (e) =>
                                  "none" === e ? "none" : "flex"
                                ),
                                fontFamily: "body",
                                fontWeight: "bold",
                                gap: "6",
                                key: g ? "unsupported" : "supported",
                                onClick: f,
                                paddingX: "10",
                                paddingY: "8",
                                testId: g
                                  ? "wrong-network-button"
                                  : "chain-button",
                                transition: "default",
                                type: "button",
                              },
                              g
                                ? r.createElement(
                                    X,
                                    {
                                      alignItems: "center",
                                      display: "flex",
                                      height: "24",
                                      paddingX: "4",
                                    },
                                    u.t("connect_wallet.wrong_network.label")
                                  )
                                : r.createElement(
                                    X,
                                    {
                                      alignItems: "center",
                                      display: "flex",
                                      gap: "6",
                                    },
                                    s.hasIcon
                                      ? r.createElement(
                                          X,
                                          {
                                            display: _(t, (e) =>
                                              "full" === e || "icon" === e
                                                ? "block"
                                                : "none"
                                            ),
                                            height: "24",
                                            width: "24",
                                          },
                                          r.createElement(J, {
                                            alt: s.name ?? "Chain icon",
                                            background: s.iconBackground,
                                            borderRadius: "full",
                                            height: "24",
                                            src: s.iconUrl,
                                            width: "24",
                                          })
                                        )
                                      : null,
                                    r.createElement(
                                      X,
                                      {
                                        display: _(t, (e) =>
                                          "icon" !== e || s.iconUrl
                                            ? "full" === e || "name" === e
                                              ? "block"
                                              : "none"
                                            : "block"
                                        ),
                                      },
                                      s.name ?? s.id
                                    )
                                  ),
                              r.createElement(eo, null)
                            ),
                          !g &&
                            r.createElement(
                              X,
                              {
                                alignItems: "center",
                                as: "button",
                                background: "connectButtonBackground",
                                borderRadius: "connectButton",
                                boxShadow: "connectButton",
                                className: F({
                                  active: "shrink",
                                  hover: "grow",
                                }),
                                color: "connectButtonText",
                                display: "flex",
                                fontFamily: "body",
                                fontWeight: "bold",
                                onClick: d,
                                testId: "account-button",
                                transition: "default",
                                type: "button",
                              },
                              i.displayBalance &&
                                r.createElement(
                                  X,
                                  {
                                    display: _(n, (e) =>
                                      e ? "block" : "none"
                                    ),
                                    padding: "8",
                                    paddingLeft: "12",
                                  },
                                  i.displayBalance
                                ),
                              r.createElement(
                                X,
                                {
                                  background: L(n)[
                                    P() ? "smallScreen" : "largeScreen"
                                  ]
                                    ? "connectButtonInnerBackground"
                                    : "connectButtonBackground",
                                  borderColor: "connectButtonBackground",
                                  borderRadius: "connectButton",
                                  borderStyle: "solid",
                                  borderWidth: "2",
                                  color: "connectButtonText",
                                  fontFamily: "body",
                                  fontWeight: "bold",
                                  paddingX: "8",
                                  paddingY: "6",
                                  transition: "default",
                                },
                                r.createElement(
                                  X,
                                  {
                                    alignItems: "center",
                                    display: "flex",
                                    gap: "6",
                                    height: "24",
                                  },
                                  r.createElement(
                                    X,
                                    {
                                      display: _(e, (e) =>
                                        "full" === e || "avatar" === e
                                          ? "block"
                                          : "none"
                                      ),
                                    },
                                    r.createElement(el, {
                                      address: i.address,
                                      imageUrl: i.ensAvatar,
                                      loading: i.hasPendingTransactions,
                                      size: 24,
                                    })
                                  ),
                                  r.createElement(
                                    X,
                                    {
                                      alignItems: "center",
                                      display: "flex",
                                      gap: "6",
                                    },
                                    r.createElement(
                                      X,
                                      {
                                        display: _(e, (e) =>
                                          "full" === e || "address" === e
                                            ? "block"
                                            : "none"
                                        ),
                                      },
                                      i.displayName
                                    ),
                                    r.createElement(eo, null)
                                  )
                                )
                              )
                            )
                        )
                      : r.createElement(
                          X,
                          {
                            as: "button",
                            background: "accentColor",
                            borderRadius: "connectButton",
                            boxShadow: "connectButton",
                            className: F({ active: "shrink", hover: "grow" }),
                            color: "accentColorForeground",
                            fontFamily: "body",
                            fontWeight: "bold",
                            height: "40",
                            key: "connect",
                            onClick: m,
                            paddingX: "14",
                            testId: "connect-button",
                            transition: "default",
                            type: "button",
                          },
                          c && "Connect Wallet" === a
                            ? u.t("connect_wallet.label")
                            : a
                        )
                  );
                }
              )
            : r.createElement(r.Fragment, null)
        );
      }
      (no.__defaultProps = nl), (no.Custom = nn);
      var nr = ({ appName: e, appDescription: t, appUrl: a, appIcon: n }) => ({
          name: e,
          description: t ?? e,
          url: a ?? ("undefined" != typeof window ? window.location.href : ""),
          icons: [...(n ? [n] : [])],
        }),
        ni = (
          e,
          {
            projectId: t,
            walletConnectParameters: a,
            appName: n,
            appDescription: l,
            appUrl: o,
            appIcon: r,
          }
        ) => {
          if (!e.length) throw Error("No wallet list was provided");
          for (let { wallets: t, groupName: a } of e)
            if (!t.length) throw Error(`No wallets provided for group: ${a}`);
          let i = -1,
            s = [],
            c = [],
            u = [],
            d = nr({ appName: n, appDescription: l, appUrl: o, appIcon: r });
          for (let [l, { groupName: o, wallets: s }] of e.entries())
            for (let e of s) {
              i++;
              let s = e({
                projectId: t,
                appName: n,
                appIcon: r,
                options: { metadata: d, ...a },
                walletConnectParameters: { metadata: d, ...a },
              });
              if (s?.iconAccent && !ak(s?.iconAccent))
                throw Error(
                  `Property \`iconAccent\` is not a hex value for wallet: ${s.name}`
                );
              let f = { ...s, groupIndex: l + 1, groupName: o, index: i };
              "function" == typeof s.hidden ? u.push(f) : c.push(f);
            }
          for (let {
            createConnector: e,
            groupIndex: t,
            groupName: a,
            hidden: n,
            ...l
          } of (function (e, t) {
            let a = [];
            for (let t of e) a.some((e) => e.id === t.id) || a.push(t);
            return a;
          })([...c, ...u], 0)) {
            if ("function" == typeof n && n()) continue;
            let o = (e) => ({
              rkDetails: Object.fromEntries(
                Object.entries({
                  ...l,
                  groupIndex: t,
                  groupName: a,
                  isRainbowKitConnector: !0,
                  ...(e || {}),
                }).filter(([e, t]) => void 0 !== t)
              ),
            });
            "walletConnect" === l.id &&
              s.push(
                e(o({ isWalletConnectModalConnector: !0, showQrModal: !0 }))
              );
            let r = e(o());
            s.push(r);
          }
          return s;
        };
    },
  },
]);
