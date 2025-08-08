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
      (e._sentryDebugIds[t] = "f3175333-2939-4834-a5a1-3955c0636969"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f3175333-2939-4834-a5a1-3955c0636969"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3068],
  {
    36281: function (e, t, r) {
      let n, i, o;
      r.d(t, {
        Z: function () {
          return r9;
        },
      });
      var u,
        a,
        s,
        l,
        c,
        f,
        d = r(18097),
        h = r(62167),
        p = r(27832),
        D = r(50133),
        g = r(39212),
        m = r(9254),
        v = r(95573),
        b = r(67802),
        y = r(17916),
        F = r(34155),
        w = Object.create,
        x = Object.defineProperty,
        E = Object.getOwnPropertyDescriptor,
        C = Object.getOwnPropertyNames,
        k = Object.getPrototypeOf,
        S = Object.prototype.hasOwnProperty,
        _ = (e, t) => () => (e && (t = e((e = 0))), t),
        T = (e, t) => () => (
          t || e((t = { exports: {} }).exports, t), t.exports
        ),
        A = (e, t) => {
          for (var r in t) x(e, r, { get: t[r], enumerable: !0 });
        },
        O = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let i of C(t))
              S.call(e, i) ||
                i === r ||
                x(e, i, {
                  get: () => t[i],
                  enumerable: !(n = E(t, i)) || n.enumerable,
                });
          return e;
        },
        B = (e) => O(x({}, "__esModule", { value: !0 }), e),
        P = {};
      async function I() {
        let { default: e } = await r.e(9813).then(r.bind(r, 89813));
        return e();
      }
      A(P, { getYogaModule: () => I });
      var M = _(() => {}),
        L = T((e) => {
          "use strict";
          function t(e) {
            return "0" == (e = `${e}`)
              ? "0"
              : /^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e)
              ? e.replace(/^[+-]?/, (e) => ("-" === e ? "" : "-"))
              : e.includes("var(") || e.includes("calc(")
              ? `calc(${e} * -1)`
              : void 0;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
        }),
        R = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
          var t = [
            "preflight",
            "container",
            "accessibility",
            "pointerEvents",
            "visibility",
            "position",
            "inset",
            "isolation",
            "zIndex",
            "order",
            "gridColumn",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRow",
            "gridRowStart",
            "gridRowEnd",
            "float",
            "clear",
            "margin",
            "boxSizing",
            "display",
            "aspectRatio",
            "height",
            "maxHeight",
            "minHeight",
            "width",
            "minWidth",
            "maxWidth",
            "flex",
            "flexShrink",
            "flexGrow",
            "flexBasis",
            "tableLayout",
            "borderCollapse",
            "borderSpacing",
            "transformOrigin",
            "translate",
            "rotate",
            "skew",
            "scale",
            "transform",
            "animation",
            "cursor",
            "touchAction",
            "userSelect",
            "resize",
            "scrollSnapType",
            "scrollSnapAlign",
            "scrollSnapStop",
            "scrollMargin",
            "scrollPadding",
            "listStylePosition",
            "listStyleType",
            "appearance",
            "columns",
            "breakBefore",
            "breakInside",
            "breakAfter",
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridTemplateColumns",
            "gridTemplateRows",
            "flexDirection",
            "flexWrap",
            "placeContent",
            "placeItems",
            "alignContent",
            "alignItems",
            "justifyContent",
            "justifyItems",
            "gap",
            "space",
            "divideWidth",
            "divideStyle",
            "divideColor",
            "divideOpacity",
            "placeSelf",
            "alignSelf",
            "justifySelf",
            "overflow",
            "overscrollBehavior",
            "scrollBehavior",
            "textOverflow",
            "whitespace",
            "wordBreak",
            "borderRadius",
            "borderWidth",
            "borderStyle",
            "borderColor",
            "borderOpacity",
            "backgroundColor",
            "backgroundOpacity",
            "backgroundImage",
            "gradientColorStops",
            "boxDecorationBreak",
            "backgroundSize",
            "backgroundAttachment",
            "backgroundClip",
            "backgroundPosition",
            "backgroundRepeat",
            "backgroundOrigin",
            "fill",
            "stroke",
            "strokeWidth",
            "objectFit",
            "objectPosition",
            "padding",
            "textAlign",
            "textIndent",
            "verticalAlign",
            "fontFamily",
            "fontSize",
            "fontWeight",
            "textTransform",
            "fontStyle",
            "fontVariantNumeric",
            "lineHeight",
            "letterSpacing",
            "textColor",
            "textOpacity",
            "textDecoration",
            "textDecorationColor",
            "textDecorationStyle",
            "textDecorationThickness",
            "textUnderlineOffset",
            "fontSmoothing",
            "placeholderColor",
            "placeholderOpacity",
            "caretColor",
            "accentColor",
            "opacity",
            "backgroundBlendMode",
            "mixBlendMode",
            "boxShadow",
            "boxShadowColor",
            "outlineStyle",
            "outlineWidth",
            "outlineOffset",
            "outlineColor",
            "ringWidth",
            "ringColor",
            "ringOpacity",
            "ringOffsetWidth",
            "ringOffsetColor",
            "blur",
            "brightness",
            "contrast",
            "dropShadow",
            "grayscale",
            "hueRotate",
            "invert",
            "saturate",
            "sepia",
            "filter",
            "backdropBlur",
            "backdropBrightness",
            "backdropContrast",
            "backdropGrayscale",
            "backdropHueRotate",
            "backdropInvert",
            "backdropOpacity",
            "backdropSaturate",
            "backdropSepia",
            "backdropFilter",
            "transitionProperty",
            "transitionDelay",
            "transitionDuration",
            "transitionTimingFunction",
            "willChange",
            "content",
          ];
        }),
        $ = T((e) => {
          "use strict";
          function t(e, t) {
            return void 0 === e
              ? t
              : Array.isArray(e)
              ? e
              : [
                  ...new Set(
                    t
                      .filter((t) => !1 !== e && !1 !== e[t])
                      .concat(Object.keys(e).filter((t) => !1 !== e[t]))
                  ),
                ];
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
        }),
        j = T((e, t) => {
          t.exports = {
            content: [],
            presets: [],
            darkMode: "media",
            theme: {
              screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
              },
              colors: ({ colors: e }) => ({
                inherit: e.inherit,
                current: e.current,
                transparent: e.transparent,
                black: e.black,
                white: e.white,
                slate: e.slate,
                gray: e.gray,
                zinc: e.zinc,
                neutral: e.neutral,
                stone: e.stone,
                red: e.red,
                orange: e.orange,
                amber: e.amber,
                yellow: e.yellow,
                lime: e.lime,
                green: e.green,
                emerald: e.emerald,
                teal: e.teal,
                cyan: e.cyan,
                sky: e.sky,
                blue: e.blue,
                indigo: e.indigo,
                violet: e.violet,
                purple: e.purple,
                fuchsia: e.fuchsia,
                pink: e.pink,
                rose: e.rose,
              }),
              columns: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                "3xs": "16rem",
                "2xs": "18rem",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                "7xl": "80rem",
              },
              spacing: {
                px: "1px",
                0: "0px",
                0.5: "0.125rem",
                1: "0.25rem",
                1.5: "0.375rem",
                2: "0.5rem",
                2.5: "0.625rem",
                3: "0.75rem",
                3.5: "0.875rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem",
                11: "2.75rem",
                12: "3rem",
                14: "3.5rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                28: "7rem",
                32: "8rem",
                36: "9rem",
                40: "10rem",
                44: "11rem",
                48: "12rem",
                52: "13rem",
                56: "14rem",
                60: "15rem",
                64: "16rem",
                72: "18rem",
                80: "20rem",
                96: "24rem",
              },
              animation: {
                none: "none",
                spin: "spin 1s linear infinite",
                ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                bounce: "bounce 1s infinite",
              },
              aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" },
              backdropBlur: ({ theme: e }) => e("blur"),
              backdropBrightness: ({ theme: e }) => e("brightness"),
              backdropContrast: ({ theme: e }) => e("contrast"),
              backdropGrayscale: ({ theme: e }) => e("grayscale"),
              backdropHueRotate: ({ theme: e }) => e("hueRotate"),
              backdropInvert: ({ theme: e }) => e("invert"),
              backdropOpacity: ({ theme: e }) => e("opacity"),
              backdropSaturate: ({ theme: e }) => e("saturate"),
              backdropSepia: ({ theme: e }) => e("sepia"),
              backgroundColor: ({ theme: e }) => e("colors"),
              backgroundImage: {
                none: "none",
                "gradient-to-t":
                  "linear-gradient(to top, var(--tw-gradient-stops))",
                "gradient-to-tr":
                  "linear-gradient(to top right, var(--tw-gradient-stops))",
                "gradient-to-r":
                  "linear-gradient(to right, var(--tw-gradient-stops))",
                "gradient-to-br":
                  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                "gradient-to-b":
                  "linear-gradient(to bottom, var(--tw-gradient-stops))",
                "gradient-to-bl":
                  "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                "gradient-to-l":
                  "linear-gradient(to left, var(--tw-gradient-stops))",
                "gradient-to-tl":
                  "linear-gradient(to top left, var(--tw-gradient-stops))",
              },
              backgroundOpacity: ({ theme: e }) => e("opacity"),
              backgroundPosition: {
                bottom: "bottom",
                center: "center",
                left: "left",
                "left-bottom": "left bottom",
                "left-top": "left top",
                right: "right",
                "right-bottom": "right bottom",
                "right-top": "right top",
                top: "top",
              },
              backgroundSize: {
                auto: "auto",
                cover: "cover",
                contain: "contain",
              },
              blur: {
                0: "0",
                none: "0",
                sm: "4px",
                DEFAULT: "8px",
                md: "12px",
                lg: "16px",
                xl: "24px",
                "2xl": "40px",
                "3xl": "64px",
              },
              brightness: {
                0: "0",
                50: ".5",
                75: ".75",
                90: ".9",
                95: ".95",
                100: "1",
                105: "1.05",
                110: "1.1",
                125: "1.25",
                150: "1.5",
                200: "2",
              },
              borderColor: ({ theme: e }) => ({
                ...e("colors"),
                DEFAULT: e("colors.gray.200", "currentColor"),
              }),
              borderOpacity: ({ theme: e }) => e("opacity"),
              borderRadius: {
                none: "0px",
                sm: "0.125rem",
                DEFAULT: "0.25rem",
                md: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                full: "9999px",
              },
              borderSpacing: ({ theme: e }) => ({ ...e("spacing") }),
              borderWidth: {
                DEFAULT: "1px",
                0: "0px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              boxShadow: {
                sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                DEFAULT:
                  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                none: "none",
              },
              boxShadowColor: ({ theme: e }) => e("colors"),
              caretColor: ({ theme: e }) => e("colors"),
              accentColor: ({ theme: e }) => ({ ...e("colors"), auto: "auto" }),
              contrast: {
                0: "0",
                50: ".5",
                75: ".75",
                100: "1",
                125: "1.25",
                150: "1.5",
                200: "2",
              },
              container: {},
              content: { none: "none" },
              cursor: {
                auto: "auto",
                default: "default",
                pointer: "pointer",
                wait: "wait",
                text: "text",
                move: "move",
                help: "help",
                "not-allowed": "not-allowed",
                none: "none",
                "context-menu": "context-menu",
                progress: "progress",
                cell: "cell",
                crosshair: "crosshair",
                "vertical-text": "vertical-text",
                alias: "alias",
                copy: "copy",
                "no-drop": "no-drop",
                grab: "grab",
                grabbing: "grabbing",
                "all-scroll": "all-scroll",
                "col-resize": "col-resize",
                "row-resize": "row-resize",
                "n-resize": "n-resize",
                "e-resize": "e-resize",
                "s-resize": "s-resize",
                "w-resize": "w-resize",
                "ne-resize": "ne-resize",
                "nw-resize": "nw-resize",
                "se-resize": "se-resize",
                "sw-resize": "sw-resize",
                "ew-resize": "ew-resize",
                "ns-resize": "ns-resize",
                "nesw-resize": "nesw-resize",
                "nwse-resize": "nwse-resize",
                "zoom-in": "zoom-in",
                "zoom-out": "zoom-out",
              },
              divideColor: ({ theme: e }) => e("borderColor"),
              divideOpacity: ({ theme: e }) => e("borderOpacity"),
              divideWidth: ({ theme: e }) => e("borderWidth"),
              dropShadow: {
                sm: "0 1px 1px rgb(0 0 0 / 0.05)",
                DEFAULT: [
                  "0 1px 2px rgb(0 0 0 / 0.1)",
                  "0 1px 1px rgb(0 0 0 / 0.06)",
                ],
                md: [
                  "0 4px 3px rgb(0 0 0 / 0.07)",
                  "0 2px 2px rgb(0 0 0 / 0.06)",
                ],
                lg: [
                  "0 10px 8px rgb(0 0 0 / 0.04)",
                  "0 4px 3px rgb(0 0 0 / 0.1)",
                ],
                xl: [
                  "0 20px 13px rgb(0 0 0 / 0.03)",
                  "0 8px 5px rgb(0 0 0 / 0.08)",
                ],
                "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
                none: "0 0 #0000",
              },
              fill: ({ theme: e }) => e("colors"),
              grayscale: { 0: "0", DEFAULT: "100%" },
              hueRotate: {
                0: "0deg",
                15: "15deg",
                30: "30deg",
                60: "60deg",
                90: "90deg",
                180: "180deg",
              },
              invert: { 0: "0", DEFAULT: "100%" },
              flex: {
                1: "1 1 0%",
                auto: "1 1 auto",
                initial: "0 1 auto",
                none: "none",
              },
              flexBasis: ({ theme: e }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
              }),
              flexGrow: { 0: "0", DEFAULT: "1" },
              flexShrink: { 0: "0", DEFAULT: "1" },
              fontFamily: {
                sans: [
                  "ui-sans-serif",
                  "system-ui",
                  "-apple-system",
                  "BlinkMacSystemFont",
                  '"Segoe UI"',
                  "Roboto",
                  '"Helvetica Neue"',
                  "Arial",
                  '"Noto Sans"',
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                  '"Noto Color Emoji"',
                ],
                serif: [
                  "ui-serif",
                  "Georgia",
                  "Cambria",
                  '"Times New Roman"',
                  "Times",
                  "serif",
                ],
                mono: [
                  "ui-monospace",
                  "SFMono-Regular",
                  "Menlo",
                  "Monaco",
                  "Consolas",
                  '"Liberation Mono"',
                  '"Courier New"',
                  "monospace",
                ],
              },
              fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "1" }],
                "6xl": ["3.75rem", { lineHeight: "1" }],
                "7xl": ["4.5rem", { lineHeight: "1" }],
                "8xl": ["6rem", { lineHeight: "1" }],
                "9xl": ["8rem", { lineHeight: "1" }],
              },
              fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900",
              },
              gap: ({ theme: e }) => e("spacing"),
              gradientColorStops: ({ theme: e }) => e("colors"),
              gridAutoColumns: {
                auto: "auto",
                min: "min-content",
                max: "max-content",
                fr: "minmax(0, 1fr)",
              },
              gridAutoRows: {
                auto: "auto",
                min: "min-content",
                max: "max-content",
                fr: "minmax(0, 1fr)",
              },
              gridColumn: {
                auto: "auto",
                "span-1": "span 1 / span 1",
                "span-2": "span 2 / span 2",
                "span-3": "span 3 / span 3",
                "span-4": "span 4 / span 4",
                "span-5": "span 5 / span 5",
                "span-6": "span 6 / span 6",
                "span-7": "span 7 / span 7",
                "span-8": "span 8 / span 8",
                "span-9": "span 9 / span 9",
                "span-10": "span 10 / span 10",
                "span-11": "span 11 / span 11",
                "span-12": "span 12 / span 12",
                "span-full": "1 / -1",
              },
              gridColumnEnd: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13",
              },
              gridColumnStart: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13",
              },
              gridRow: {
                auto: "auto",
                "span-1": "span 1 / span 1",
                "span-2": "span 2 / span 2",
                "span-3": "span 3 / span 3",
                "span-4": "span 4 / span 4",
                "span-5": "span 5 / span 5",
                "span-6": "span 6 / span 6",
                "span-full": "1 / -1",
              },
              gridRowStart: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
              },
              gridRowEnd: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
              },
              gridTemplateColumns: {
                none: "none",
                1: "repeat(1, minmax(0, 1fr))",
                2: "repeat(2, minmax(0, 1fr))",
                3: "repeat(3, minmax(0, 1fr))",
                4: "repeat(4, minmax(0, 1fr))",
                5: "repeat(5, minmax(0, 1fr))",
                6: "repeat(6, minmax(0, 1fr))",
                7: "repeat(7, minmax(0, 1fr))",
                8: "repeat(8, minmax(0, 1fr))",
                9: "repeat(9, minmax(0, 1fr))",
                10: "repeat(10, minmax(0, 1fr))",
                11: "repeat(11, minmax(0, 1fr))",
                12: "repeat(12, minmax(0, 1fr))",
              },
              gridTemplateRows: {
                none: "none",
                1: "repeat(1, minmax(0, 1fr))",
                2: "repeat(2, minmax(0, 1fr))",
                3: "repeat(3, minmax(0, 1fr))",
                4: "repeat(4, minmax(0, 1fr))",
                5: "repeat(5, minmax(0, 1fr))",
                6: "repeat(6, minmax(0, 1fr))",
              },
              height: ({ theme: e }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                full: "100%",
                screen: "100vh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
              }),
              inset: ({ theme: e }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%",
              }),
              keyframes: {
                spin: { to: { transform: "rotate(360deg)" } },
                ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
                pulse: { "50%": { opacity: ".5" } },
                bounce: {
                  "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                  },
                  "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                  },
                },
              },
              letterSpacing: {
                tighter: "-0.05em",
                tight: "-0.025em",
                normal: "0em",
                wide: "0.025em",
                wider: "0.05em",
                widest: "0.1em",
              },
              lineHeight: {
                none: "1",
                tight: "1.25",
                snug: "1.375",
                normal: "1.5",
                relaxed: "1.625",
                loose: "2",
                3: ".75rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem",
              },
              listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
              margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }),
              maxHeight: ({ theme: e }) => ({
                ...e("spacing"),
                full: "100%",
                screen: "100vh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
              }),
              maxWidth: ({ theme: e, breakpoints: t }) => ({
                none: "none",
                0: "0rem",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                "7xl": "80rem",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
                prose: "65ch",
                ...t(e("screens")),
              }),
              minHeight: {
                0: "0px",
                full: "100%",
                screen: "100vh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
              },
              minWidth: {
                0: "0px",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
              },
              objectPosition: {
                bottom: "bottom",
                center: "center",
                left: "left",
                "left-bottom": "left bottom",
                "left-top": "left top",
                right: "right",
                "right-bottom": "right bottom",
                "right-top": "right top",
                top: "top",
              },
              opacity: {
                0: "0",
                5: "0.05",
                10: "0.1",
                20: "0.2",
                25: "0.25",
                30: "0.3",
                40: "0.4",
                50: "0.5",
                60: "0.6",
                70: "0.7",
                75: "0.75",
                80: "0.8",
                90: "0.9",
                95: "0.95",
                100: "1",
              },
              order: {
                first: "-9999",
                last: "9999",
                none: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
              },
              padding: ({ theme: e }) => e("spacing"),
              placeholderColor: ({ theme: e }) => e("colors"),
              placeholderOpacity: ({ theme: e }) => e("opacity"),
              outlineColor: ({ theme: e }) => e("colors"),
              outlineOffset: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              outlineWidth: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              ringColor: ({ theme: e }) => ({
                DEFAULT: e("colors.blue.500", "#3b82f6"),
                ...e("colors"),
              }),
              ringOffsetColor: ({ theme: e }) => e("colors"),
              ringOffsetWidth: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              ringOpacity: ({ theme: e }) => ({
                DEFAULT: "0.5",
                ...e("opacity"),
              }),
              ringWidth: {
                DEFAULT: "3px",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              rotate: {
                0: "0deg",
                1: "1deg",
                2: "2deg",
                3: "3deg",
                6: "6deg",
                12: "12deg",
                45: "45deg",
                90: "90deg",
                180: "180deg",
              },
              saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
              scale: {
                0: "0",
                50: ".5",
                75: ".75",
                90: ".9",
                95: ".95",
                100: "1",
                105: "1.05",
                110: "1.1",
                125: "1.25",
                150: "1.5",
              },
              scrollMargin: ({ theme: e }) => ({ ...e("spacing") }),
              scrollPadding: ({ theme: e }) => e("spacing"),
              sepia: { 0: "0", DEFAULT: "100%" },
              skew: {
                0: "0deg",
                1: "1deg",
                2: "2deg",
                3: "3deg",
                6: "6deg",
                12: "12deg",
              },
              space: ({ theme: e }) => ({ ...e("spacing") }),
              stroke: ({ theme: e }) => e("colors"),
              strokeWidth: { 0: "0", 1: "1", 2: "2" },
              textColor: ({ theme: e }) => e("colors"),
              textDecorationColor: ({ theme: e }) => e("colors"),
              textDecorationThickness: {
                auto: "auto",
                "from-font": "from-font",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              textUnderlineOffset: {
                auto: "auto",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px",
              },
              textIndent: ({ theme: e }) => ({ ...e("spacing") }),
              textOpacity: ({ theme: e }) => e("opacity"),
              transformOrigin: {
                center: "center",
                top: "top",
                "top-right": "top right",
                right: "right",
                "bottom-right": "bottom right",
                bottom: "bottom",
                "bottom-left": "bottom left",
                left: "left",
                "top-left": "top left",
              },
              transitionDelay: {
                75: "75ms",
                100: "100ms",
                150: "150ms",
                200: "200ms",
                300: "300ms",
                500: "500ms",
                700: "700ms",
                1e3: "1000ms",
              },
              transitionDuration: {
                DEFAULT: "150ms",
                75: "75ms",
                100: "100ms",
                150: "150ms",
                200: "200ms",
                300: "300ms",
                500: "500ms",
                700: "700ms",
                1e3: "1000ms",
              },
              transitionProperty: {
                none: "none",
                all: "all",
                DEFAULT:
                  "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                colors:
                  "color, background-color, border-color, text-decoration-color, fill, stroke",
                opacity: "opacity",
                shadow: "box-shadow",
                transform: "transform",
              },
              transitionTimingFunction: {
                DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
                linear: "linear",
                in: "cubic-bezier(0.4, 0, 1, 1)",
                out: "cubic-bezier(0, 0, 0.2, 1)",
                "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
              },
              translate: ({ theme: e }) => ({
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%",
              }),
              width: ({ theme: e }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                screen: "100vw",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
              }),
              willChange: {
                auto: "auto",
                scroll: "scroll-position",
                contents: "contents",
                transform: "transform",
              },
              zIndex: {
                auto: "auto",
                0: "0",
                10: "10",
                20: "20",
                30: "30",
                40: "40",
                50: "50",
              },
            },
            variantOrder: [
              "first",
              "last",
              "odd",
              "even",
              "visited",
              "checked",
              "empty",
              "read-only",
              "group-hover",
              "group-focus",
              "focus-within",
              "hover",
              "focus",
              "focus-visible",
              "active",
              "disabled",
            ],
            plugins: [],
          };
        }),
        N = {};
      A(N, { default: () => W });
      var W,
        z = _(() => {
          W = {
            info(e, t) {
              console.info(...(Array.isArray(e) ? [e] : [t, e]));
            },
            warn(e, t) {
              console.warn(...(Array.isArray(e) ? [e] : [t, e]));
            },
            risk(e, t) {
              console.error(...(Array.isArray(e) ? [e] : [t, e]));
            },
          };
        }),
        U = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => i,
            });
          var t,
            r = (z(), (t = B(N)) && t.__esModule) ? t : { default: t };
          function n({ version: e, from: t, to: n }) {
            r.default.warn(`${t}-color-renamed`, [
              `As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${n}\`.`,
              "Update your configuration file to silence this warning.",
            ]);
          }
          var i = {
            inherit: "inherit",
            current: "currentColor",
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            slate: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
            },
            gray: {
              50: "#f9fafb",
              100: "#f3f4f6",
              200: "#e5e7eb",
              300: "#d1d5db",
              400: "#9ca3af",
              500: "#6b7280",
              600: "#4b5563",
              700: "#374151",
              800: "#1f2937",
              900: "#111827",
            },
            zinc: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
            },
            neutral: {
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#e5e5e5",
              300: "#d4d4d4",
              400: "#a3a3a3",
              500: "#737373",
              600: "#525252",
              700: "#404040",
              800: "#262626",
              900: "#171717",
            },
            stone: {
              50: "#fafaf9",
              100: "#f5f5f4",
              200: "#e7e5e4",
              300: "#d6d3d1",
              400: "#a8a29e",
              500: "#78716c",
              600: "#57534e",
              700: "#44403c",
              800: "#292524",
              900: "#1c1917",
            },
            red: {
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
            },
            orange: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316",
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
            },
            amber: {
              50: "#fffbeb",
              100: "#fef3c7",
              200: "#fde68a",
              300: "#fcd34d",
              400: "#fbbf24",
              500: "#f59e0b",
              600: "#d97706",
              700: "#b45309",
              800: "#92400e",
              900: "#78350f",
            },
            yellow: {
              50: "#fefce8",
              100: "#fef9c3",
              200: "#fef08a",
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
              600: "#ca8a04",
              700: "#a16207",
              800: "#854d0e",
              900: "#713f12",
            },
            lime: {
              50: "#f7fee7",
              100: "#ecfccb",
              200: "#d9f99d",
              300: "#bef264",
              400: "#a3e635",
              500: "#84cc16",
              600: "#65a30d",
              700: "#4d7c0f",
              800: "#3f6212",
              900: "#365314",
            },
            green: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e",
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
            },
            emerald: {
              50: "#ecfdf5",
              100: "#d1fae5",
              200: "#a7f3d0",
              300: "#6ee7b7",
              400: "#34d399",
              500: "#10b981",
              600: "#059669",
              700: "#047857",
              800: "#065f46",
              900: "#064e3b",
            },
            teal: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#14b8a6",
              600: "#0d9488",
              700: "#0f766e",
              800: "#115e59",
              900: "#134e4a",
            },
            cyan: {
              50: "#ecfeff",
              100: "#cffafe",
              200: "#a5f3fc",
              300: "#67e8f9",
              400: "#22d3ee",
              500: "#06b6d4",
              600: "#0891b2",
              700: "#0e7490",
              800: "#155e75",
              900: "#164e63",
            },
            sky: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
            },
            blue: {
              50: "#eff6ff",
              100: "#dbeafe",
              200: "#bfdbfe",
              300: "#93c5fd",
              400: "#60a5fa",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
            },
            indigo: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              800: "#3730a3",
              900: "#312e81",
            },
            violet: {
              50: "#f5f3ff",
              100: "#ede9fe",
              200: "#ddd6fe",
              300: "#c4b5fd",
              400: "#a78bfa",
              500: "#8b5cf6",
              600: "#7c3aed",
              700: "#6d28d9",
              800: "#5b21b6",
              900: "#4c1d95",
            },
            purple: {
              50: "#faf5ff",
              100: "#f3e8ff",
              200: "#e9d5ff",
              300: "#d8b4fe",
              400: "#c084fc",
              500: "#a855f7",
              600: "#9333ea",
              700: "#7e22ce",
              800: "#6b21a8",
              900: "#581c87",
            },
            fuchsia: {
              50: "#fdf4ff",
              100: "#fae8ff",
              200: "#f5d0fe",
              300: "#f0abfc",
              400: "#e879f9",
              500: "#d946ef",
              600: "#c026d3",
              700: "#a21caf",
              800: "#86198f",
              900: "#701a75",
            },
            pink: {
              50: "#fdf2f8",
              100: "#fce7f3",
              200: "#fbcfe8",
              300: "#f9a8d4",
              400: "#f472b6",
              500: "#ec4899",
              600: "#db2777",
              700: "#be185d",
              800: "#9d174d",
              900: "#831843",
            },
            rose: {
              50: "#fff1f2",
              100: "#ffe4e6",
              200: "#fecdd3",
              300: "#fda4af",
              400: "#fb7185",
              500: "#f43f5e",
              600: "#e11d48",
              700: "#be123c",
              800: "#9f1239",
              900: "#881337",
            },
            get lightBlue() {
              return (
                n({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky
              );
            },
            get warmGray() {
              return (
                n({ version: "v3.0", from: "warmGray", to: "stone" }),
                this.stone
              );
            },
            get trueGray() {
              return (
                n({ version: "v3.0", from: "trueGray", to: "neutral" }),
                this.neutral
              );
            },
            get coolGray() {
              return (
                n({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray
              );
            },
            get blueGray() {
              return (
                n({ version: "v3.0", from: "blueGray", to: "slate" }),
                this.slate
              );
            },
          };
        }),
        G = T((e) => {
          "use strict";
          function t(e, ...r) {
            for (let t of r) {
              var n, i;
              for (let r in t)
                (!(
                  null == e ||
                  null === (n = e.hasOwnProperty) ||
                  void 0 === n
                ) &&
                  n.call(e, r)) ||
                  (e[r] = t[r]);
              for (let r of Object.getOwnPropertySymbols(t))
                (!(
                  null == e ||
                  null === (i = e.hasOwnProperty) ||
                  void 0 === i
                ) &&
                  i.call(e, r)) ||
                  (e[r] = t[r]);
            }
            return e;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "defaults", {
              enumerable: !0,
              get: () => t,
            });
        }),
        q = T((e) => {
          "use strict";
          function t(e) {
            if (Array.isArray(e)) return e;
            if (e.split("[").length - 1 != e.split("]").length - 1)
              throw Error(`Path is invalid. Has unbalanced brackets: ${e}`);
            return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "toPath", {
              enumerable: !0,
              get: () => t,
            });
        }),
        H = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "normalizeConfig", {
              enumerable: !0,
              get: () => n,
            });
          var t = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(void 0);
            if (n && n.has(e)) return n.get(e);
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
              if (
                "default" !== u &&
                Object.prototype.hasOwnProperty.call(e, u)
              ) {
                var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                a && (a.get || a.set)
                  ? Object.defineProperty(i, u, a)
                  : (i[u] = e[u]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })((z(), B(N)));
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              n = new WeakMap();
            return (r = function (e) {
              return e ? n : t;
            })(e);
          }
          function n(e) {
            var r, n, i, o, u, a, s;
            let l, c;
            for (let f of (((() => {
              if (
                e.purge ||
                !e.content ||
                (!Array.isArray(e.content) &&
                  !("object" == typeof e.content && null !== e.content))
              )
                return !1;
              if (Array.isArray(e.content))
                return e.content.every(
                  (e) =>
                    "string" == typeof e ||
                    !(
                      "string" != typeof (null == e ? void 0 : e.raw) ||
                      (null != e &&
                        e.extension &&
                        "string" != typeof (null == e ? void 0 : e.extension))
                    )
                );
              if ("object" == typeof e.content && null !== e.content) {
                if (
                  Object.keys(e.content).some(
                    (e) => !["files", "extract", "transform"].includes(e)
                  )
                )
                  return !1;
                if (Array.isArray(e.content.files)) {
                  if (
                    !e.content.files.every(
                      (e) =>
                        "string" == typeof e ||
                        !(
                          "string" != typeof (null == e ? void 0 : e.raw) ||
                          (null != e &&
                            e.extension &&
                            "string" !=
                              typeof (null == e ? void 0 : e.extension))
                        )
                    )
                  )
                    return !1;
                  if ("object" == typeof e.content.extract) {
                    for (let t of Object.values(e.content.extract))
                      if ("function" != typeof t) return !1;
                  } else if (
                    !(
                      void 0 === e.content.extract ||
                      "function" == typeof e.content.extract
                    )
                  )
                    return !1;
                  if ("object" == typeof e.content.transform) {
                    for (let t of Object.values(e.content.transform))
                      if ("function" != typeof t) return !1;
                  } else if (
                    !(
                      void 0 === e.content.transform ||
                      "function" == typeof e.content.transform
                    )
                  )
                    return !1;
                }
                return !0;
              }
              return !1;
            })() ||
              t.default.warn("purge-deprecation", [
                "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
                "Update your configuration file to eliminate this warning.",
                "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources",
              ]),
            (e.safelist = (() => {
              var t;
              let { content: r, purge: n, safelist: i } = e;
              return Array.isArray(i)
                ? i
                : Array.isArray(null == r ? void 0 : r.safelist)
                ? r.safelist
                : Array.isArray(null == n ? void 0 : n.safelist)
                ? n.safelist
                : Array.isArray(
                    null == n || null === (t = n.options) || void 0 === t
                      ? void 0
                      : t.safelist
                  )
                ? n.options.safelist
                : [];
            })()),
            "function" == typeof e.prefix)
              ? (t.default.warn("prefix-function", [
                  "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
                  "Update `prefix` in your configuration to be a string to eliminate this warning.",
                  "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function",
                ]),
                (e.prefix = ""))
              : (e.prefix = null !== (r = e.prefix) && void 0 !== r ? r : ""),
            (e.content = {
              files: (() => {
                let { content: t, purge: r } = e;
                return Array.isArray(r)
                  ? r
                  : Array.isArray(null == r ? void 0 : r.content)
                  ? r.content
                  : Array.isArray(t)
                  ? t
                  : Array.isArray(null == t ? void 0 : t.content)
                  ? t.content
                  : Array.isArray(null == t ? void 0 : t.files)
                  ? t.files
                  : [];
              })(),
              extract: (() => {
                var t, r, n, i, o, u, a, s, l, c, f, d, h, p;
                let D =
                    !(null === (t = e.purge) || void 0 === t) && t.extract
                      ? e.purge.extract
                      : !(null === (r = e.content) || void 0 === r) && r.extract
                      ? e.content.extract
                      : !(
                          null === (n = e.purge) ||
                          void 0 === n ||
                          null === (i = n.extract) ||
                          void 0 === i
                        ) && i.DEFAULT
                      ? e.purge.extract.DEFAULT
                      : !(
                          null === (o = e.content) ||
                          void 0 === o ||
                          null === (u = o.extract) ||
                          void 0 === u
                        ) && u.DEFAULT
                      ? e.content.extract.DEFAULT
                      : !(
                          null === (a = e.purge) ||
                          void 0 === a ||
                          null === (s = a.options) ||
                          void 0 === s
                        ) && s.extractors
                      ? e.purge.options.extractors
                      : !(
                          null === (l = e.content) ||
                          void 0 === l ||
                          null === (c = l.options) ||
                          void 0 === c
                        ) && c.extractors
                      ? e.content.options.extractors
                      : {},
                  g = {},
                  m =
                    !(
                      null === (f = e.purge) ||
                      void 0 === f ||
                      null === (d = f.options) ||
                      void 0 === d
                    ) && d.defaultExtractor
                      ? e.purge.options.defaultExtractor
                      : !(
                          null === (h = e.content) ||
                          void 0 === h ||
                          null === (p = h.options) ||
                          void 0 === p
                        ) && p.defaultExtractor
                      ? e.content.options.defaultExtractor
                      : void 0;
                if ((void 0 !== m && (g.DEFAULT = m), "function" == typeof D))
                  g.DEFAULT = D;
                else if (Array.isArray(D))
                  for (let { extensions: e, extractor: t } of D ?? [])
                    for (let r of e) g[r] = t;
                else "object" == typeof D && null !== D && Object.assign(g, D);
                return g;
              })(),
              transform:
                ((l =
                  !(null === (n = e.purge) || void 0 === n) && n.transform
                    ? e.purge.transform
                    : !(null === (i = e.content) || void 0 === i) && i.transform
                    ? e.content.transform
                    : !(
                        null === (o = e.purge) ||
                        void 0 === o ||
                        null === (u = o.transform) ||
                        void 0 === u
                      ) && u.DEFAULT
                    ? e.purge.transform.DEFAULT
                    : !(
                        null === (a = e.content) ||
                        void 0 === a ||
                        null === (s = a.transform) ||
                        void 0 === s
                      ) && s.DEFAULT
                    ? e.content.transform.DEFAULT
                    : {}),
                (c = {}),
                "function" == typeof l && (c.DEFAULT = l),
                "object" == typeof l && null !== l && Object.assign(c, l),
                c),
            }),
            e.content.files))
              if ("string" == typeof f && /{([^,]*?)}/g.test(f)) {
                t.default.warn("invalid-glob-braces", [
                  `The glob pattern ${(0, t.dim)(
                    f
                  )} in your Tailwind CSS configuration is invalid.`,
                  `Update it to ${(0, t.dim)(
                    f.replace(/{([^,]*?)}/g, "$1")
                  )} to silence this warning.`,
                ]);
                break;
              }
            return e;
          }
        }),
        Y = T((e) => {
          "use strict";
          function t(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
              return !1;
            let t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
        }),
        V = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "cloneDeep", {
              enumerable: !0,
              get: () =>
                function e(t) {
                  return Array.isArray(t)
                    ? t.map((t) => e(t))
                    : "object" == typeof t && null !== t
                    ? Object.fromEntries(
                        Object.entries(t).map(([t, r]) => [t, e(r)])
                      )
                    : t;
                },
            });
        }),
        X = T((e, t) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              if (!r.test(e)) return e;
              for (var t = "", n = 0; n < e.length; n++) {
                if ("\\" === e[n]) {
                  var i = (function (e) {
                    for (
                      var t = e.toLowerCase(), r = "", n = !1, i = 0;
                      i < 6 && void 0 !== t[i];
                      i++
                    ) {
                      var o = t.charCodeAt(i),
                        u = (o >= 97 && o <= 102) || (o >= 48 && o <= 57);
                      if (((n = 32 === o), !u)) break;
                      r += t[i];
                    }
                    if (0 !== r.length) {
                      var a = parseInt(r, 16);
                      return (a >= 55296 && a <= 57343) ||
                        0 === a ||
                        a > 1114111
                        ? ["�", r.length + (n ? 1 : 0)]
                        : [String.fromCodePoint(a), r.length + (n ? 1 : 0)];
                    }
                  })(e.slice(n + 1, n + 7));
                  if (void 0 !== i) {
                    (t += i[0]), (n += i[1]);
                    continue;
                  }
                  if ("\\" === e[n + 1]) {
                    (t += "\\"), n++;
                    continue;
                  }
                  e.length === n + 1 && (t += e[n]);
                  continue;
                }
                t += e[n];
              }
              return t;
            });
          var r = /\\/;
          t.exports = e.default;
        }),
        Q = T((e, t) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
                n < t;
                n++
              )
                r[n - 1] = arguments[n];
              for (; r.length > 0; ) {
                var i = r.shift();
                if (!e[i]) return;
                e = e[i];
              }
              return e;
            }),
            (t.exports = e.default);
        }),
        J = T((e, t) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
                n < t;
                n++
              )
                r[n - 1] = arguments[n];
              for (; r.length > 0; ) {
                var i = r.shift();
                e[i] || (e[i] = {}), (e = e[i]);
              }
            }),
            (t.exports = e.default);
        }),
        K = T((e, t) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              for (var t = "", r = e.indexOf("/*"), n = 0; r >= 0; ) {
                t += e.slice(n, r);
                var i = e.indexOf("*/", r + 2);
                if (i < 0) return t;
                (n = i + 2), (r = e.indexOf("/*", n));
              }
              return t + e.slice(n);
            }),
            (t.exports = e.default);
        }),
        Z = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.stripComments = e.ensureObject = e.getProp = e.unesc = void 0);
          var t = o(X());
          e.unesc = t.default;
          var r = o(Q());
          e.getProp = r.default;
          var n = o(J());
          e.ensureObject = n.default;
          var i = o(K());
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          e.stripComments = i.default;
        }),
        ee = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r = Z(),
            n = function e(t, r) {
              if ("object" != typeof t || null === t) return t;
              var n = new t.constructor();
              for (var i in t)
                if (t.hasOwnProperty(i)) {
                  var o = t[i],
                    u = typeof o;
                  "parent" === i && "object" === u
                    ? r && (n[i] = r)
                    : o instanceof Array
                    ? (n[i] = o.map(function (t) {
                        return e(t, n);
                      }))
                    : (n[i] = e(o, n));
                }
              return n;
            },
            i = (function () {
              function e(e) {
                void 0 === e && (e = {}),
                  Object.assign(this, e),
                  (this.spaces = this.spaces || {}),
                  (this.spaces.before = this.spaces.before || ""),
                  (this.spaces.after = this.spaces.after || "");
              }
              var t = e.prototype;
              return (
                (t.remove = function () {
                  return (
                    this.parent && this.parent.removeChild(this),
                    (this.parent = void 0),
                    this
                  );
                }),
                (t.replaceWith = function () {
                  if (this.parent) {
                    for (var e in arguments)
                      this.parent.insertBefore(this, arguments[e]);
                    this.remove();
                  }
                  return this;
                }),
                (t.next = function () {
                  return this.parent.at(this.parent.index(this) + 1);
                }),
                (t.prev = function () {
                  return this.parent.at(this.parent.index(this) - 1);
                }),
                (t.clone = function (e) {
                  void 0 === e && (e = {});
                  var t = n(this);
                  for (var r in e) t[r] = e[r];
                  return t;
                }),
                (t.appendToPropertyAndEscape = function (e, t, r) {
                  this.raws || (this.raws = {});
                  var n = this[e],
                    i = this.raws[e];
                  (this[e] = n + t),
                    i || r !== t
                      ? (this.raws[e] = (i || n) + r)
                      : delete this.raws[e];
                }),
                (t.setPropertyAndEscape = function (e, t, r) {
                  this.raws || (this.raws = {}),
                    (this[e] = t),
                    (this.raws[e] = r);
                }),
                (t.setPropertyWithoutEscape = function (e, t) {
                  (this[e] = t), this.raws && delete this.raws[e];
                }),
                (t.isAtPosition = function (e, t) {
                  if (this.source && this.source.start && this.source.end)
                    return !(
                      this.source.start.line > e ||
                      this.source.end.line < e ||
                      (this.source.start.line === e &&
                        this.source.start.column > t) ||
                      (this.source.end.line === e && this.source.end.column < t)
                    );
                }),
                (t.stringifyProperty = function (e) {
                  return (this.raws && this.raws[e]) || this[e];
                }),
                (t.valueToString = function () {
                  return String(this.stringifyProperty("value"));
                }),
                (t.toString = function () {
                  return [
                    this.rawSpaceBefore,
                    this.valueToString(),
                    this.rawSpaceAfter,
                  ].join("");
                }),
                (function (e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                })(e.prototype, [
                  {
                    key: "rawSpaceBefore",
                    get: function () {
                      var e =
                        this.raws &&
                        this.raws.spaces &&
                        this.raws.spaces.before;
                      return (
                        void 0 === e && (e = this.spaces && this.spaces.before),
                        e || ""
                      );
                    },
                    set: function (e) {
                      (0, r.ensureObject)(this, "raws", "spaces"),
                        (this.raws.spaces.before = e);
                    },
                  },
                  {
                    key: "rawSpaceAfter",
                    get: function () {
                      var e =
                        this.raws && this.raws.spaces && this.raws.spaces.after;
                      return void 0 === e && (e = this.spaces.after), e || "";
                    },
                    set: function (e) {
                      (0, r.ensureObject)(this, "raws", "spaces"),
                        (this.raws.spaces.after = e);
                    },
                  },
                ]),
                e
              );
            })();
          (e.default = i), (t.exports = e.default);
        }),
        et = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.UNIVERSAL =
              e.ATTRIBUTE =
              e.CLASS =
              e.COMBINATOR =
              e.COMMENT =
              e.ID =
              e.NESTING =
              e.PSEUDO =
              e.ROOT =
              e.SELECTOR =
              e.STRING =
              e.TAG =
                void 0),
            (e.TAG = "tag"),
            (e.STRING = "string"),
            (e.SELECTOR = "selector"),
            (e.ROOT = "root"),
            (e.PSEUDO = "pseudo"),
            (e.NESTING = "nesting"),
            (e.ID = "id"),
            (e.COMMENT = "comment"),
            (e.COMBINATOR = "combinator"),
            (e.CLASS = "class"),
            (e.ATTRIBUTE = "attribute"),
            (e.UNIVERSAL = "universal");
        }),
        er = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = (function (e) {
              if (e && e.__esModule) return e;
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return { default: e };
              var t = o();
              if (t && t.has(e)) return t.get(e);
              var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                  u && (u.get || u.set)
                    ? Object.defineProperty(r, i, u)
                    : (r[i] = e[i]);
                }
              return (r.default = e), t && t.set(e, r), r;
            })(et());
          function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (o = function () {
                return e;
              }),
              e
            );
          }
          function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function a(e, t) {
            return (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var s = (function (e) {
            function t(t) {
              var r;
              return (r = e.call(this, t) || this).nodes || (r.nodes = []), r;
            }
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              a(t, e);
            var r,
              n = t.prototype;
            return (
              (n.append = function (e) {
                return (e.parent = this), this.nodes.push(e), this;
              }),
              (n.prepend = function (e) {
                return (e.parent = this), this.nodes.unshift(e), this;
              }),
              (n.at = function (e) {
                return this.nodes[e];
              }),
              (n.index = function (e) {
                return "number" == typeof e ? e : this.nodes.indexOf(e);
              }),
              (n.removeChild = function (e) {
                var t;
                for (var r in ((e = this.index(e)),
                (this.at(e).parent = void 0),
                this.nodes.splice(e, 1),
                this.indexes))
                  (t = this.indexes[r]) >= e && (this.indexes[r] = t - 1);
                return this;
              }),
              (n.removeAll = function () {
                for (
                  var e,
                    t = (function (e, t) {
                      var r;
                      if (typeof Symbol > "u" || null == e[Symbol.iterator]) {
                        if (
                          Array.isArray(e) ||
                          (r = (function (e, t) {
                            if (e) {
                              if ("string" == typeof e) return u(e, void 0);
                              var r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                              if (
                                ("Object" === r &&
                                  e.constructor &&
                                  (r = e.constructor.name),
                                "Map" === r || "Set" === r)
                              )
                                return Array.from(e);
                              if (
                                "Arguments" === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  r
                                )
                              )
                                return u(e, void 0);
                            }
                          })(e))
                        ) {
                          r && (e = r);
                          var n = 0;
                          return function () {
                            return n >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[n++] };
                          };
                        }
                        throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      }
                      return (r = e[Symbol.iterator]()).next.bind(r);
                    })(this.nodes);
                  !(e = t()).done;

                )
                  e.value.parent = void 0;
                return (this.nodes = []), this;
              }),
              (n.empty = function () {
                return this.removeAll();
              }),
              (n.insertAfter = function (e, t) {
                t.parent = this;
                var r,
                  n = this.index(e);
                for (var i in (this.nodes.splice(n + 1, 0, t),
                (t.parent = this),
                this.indexes))
                  n <= (r = this.indexes[i]) && (this.indexes[i] = r + 1);
                return this;
              }),
              (n.insertBefore = function (e, t) {
                t.parent = this;
                var r,
                  n = this.index(e);
                for (var i in (this.nodes.splice(n, 0, t),
                (t.parent = this),
                this.indexes))
                  (r = this.indexes[i]) <= n && (this.indexes[i] = r + 1);
                return this;
              }),
              (n._findChildAtPosition = function (e, t) {
                var r = void 0;
                return (
                  this.each(function (n) {
                    if (n.atPosition) {
                      var i = n.atPosition(e, t);
                      if (i) return (r = i), !1;
                    } else if (n.isAtPosition(e, t)) return (r = n), !1;
                  }),
                  r
                );
              }),
              (n.atPosition = function (e, t) {
                if (this.isAtPosition(e, t))
                  return this._findChildAtPosition(e, t) || this;
              }),
              (n._inferEndPosition = function () {
                this.last &&
                  this.last.source &&
                  this.last.source.end &&
                  ((this.source = this.source || {}),
                  (this.source.end = this.source.end || {}),
                  Object.assign(this.source.end, this.last.source.end));
              }),
              (n.each = function (e) {
                this.lastEach || (this.lastEach = 0),
                  this.indexes || (this.indexes = {}),
                  this.lastEach++;
                var t,
                  r,
                  n = this.lastEach;
                if (((this.indexes[n] = 0), this.length)) {
                  for (
                    ;
                    this.indexes[n] < this.length &&
                    ((t = this.indexes[n]), !1 !== (r = e(this.at(t), t)));

                  )
                    this.indexes[n] += 1;
                  if ((delete this.indexes[n], !1 === r)) return !1;
                }
              }),
              (n.walk = function (e) {
                return this.each(function (t, r) {
                  var n = e(t, r);
                  if ((!1 !== n && t.length && (n = t.walk(e)), !1 === n))
                    return !1;
                });
              }),
              (n.walkAttributes = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.ATTRIBUTE) return e.call(t, r);
                });
              }),
              (n.walkClasses = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.CLASS) return e.call(t, r);
                });
              }),
              (n.walkCombinators = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.COMBINATOR) return e.call(t, r);
                });
              }),
              (n.walkComments = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.COMMENT) return e.call(t, r);
                });
              }),
              (n.walkIds = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.ID) return e.call(t, r);
                });
              }),
              (n.walkNesting = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.NESTING) return e.call(t, r);
                });
              }),
              (n.walkPseudos = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.PSEUDO) return e.call(t, r);
                });
              }),
              (n.walkTags = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.TAG) return e.call(t, r);
                });
              }),
              (n.walkUniversals = function (e) {
                var t = this;
                return this.walk(function (r) {
                  if (r.type === i.UNIVERSAL) return e.call(t, r);
                });
              }),
              (n.split = function (e) {
                var t = this,
                  r = [];
                return this.reduce(function (n, i, o) {
                  var u = e.call(t, i);
                  return (
                    r.push(i),
                    u ? (n.push(r), (r = [])) : o === t.length - 1 && n.push(r),
                    n
                  );
                }, []);
              }),
              (n.map = function (e) {
                return this.nodes.map(e);
              }),
              (n.reduce = function (e, t) {
                return this.nodes.reduce(e, t);
              }),
              (n.every = function (e) {
                return this.nodes.every(e);
              }),
              (n.some = function (e) {
                return this.nodes.some(e);
              }),
              (n.filter = function (e) {
                return this.nodes.filter(e);
              }),
              (n.sort = function (e) {
                return this.nodes.sort(e);
              }),
              (n.toString = function () {
                return this.map(String).join("");
              }),
              (r = [
                {
                  key: "first",
                  get: function () {
                    return this.at(0);
                  },
                },
                {
                  key: "last",
                  get: function () {
                    return this.at(this.length - 1);
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return this.nodes.length;
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, r),
              t
            );
          })(n.default);
          (e.default = s), (t.exports = e.default);
        }),
        en = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = er()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.ROOT), r;
            }
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e);
            var r,
              n = t.prototype;
            return (
              (n.toString = function () {
                var e = this.reduce(function (e, t) {
                  return e.push(String(t)), e;
                }, []).join(",");
                return this.trailingComma ? e + "," : e;
              }),
              (n.error = function (e, t) {
                return this._error ? this._error(e, t) : Error(e);
              }),
              (r = [
                {
                  key: "errorGenerator",
                  set: function (e) {
                    this._error = e;
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, r),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        ei = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = er()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.SELECTOR), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        eo = T((e, t) => {
          "use strict";
          var r = {}.hasOwnProperty,
            n = function (e, t) {
              if (!e) return t;
              var n = {};
              for (var i in t) n[i] = r.call(e, i) ? e[i] : t[i];
              return n;
            },
            i = /[ -,\.\/:-@\[-\^`\{-~]/,
            o = /[ -,\.\/:-@\[\]\^`\{-~]/,
            u = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
            a = function e(t, r) {
              "single" != (r = n(r, e.options)).quotes &&
                "double" != r.quotes &&
                (r.quotes = "single");
              for (
                var a = "double" == r.quotes ? '"' : "'",
                  s = r.isIdentifier,
                  l = t.charAt(0),
                  c = "",
                  f = 0,
                  d = t.length;
                f < d;

              ) {
                var h = t.charAt(f++),
                  p = h.charCodeAt(),
                  D = void 0;
                if (p < 32 || p > 126) {
                  if (p >= 55296 && p <= 56319 && f < d) {
                    var g = t.charCodeAt(f++);
                    (64512 & g) == 56320
                      ? (p = ((1023 & p) << 10) + (1023 & g) + 65536)
                      : f--;
                  }
                  D = "\\" + p.toString(16).toUpperCase() + " ";
                } else
                  D = r.escapeEverything
                    ? i.test(h)
                      ? "\\" + h
                      : "\\" + p.toString(16).toUpperCase() + " "
                    : /[\t\n\f\r\x0B]/.test(h)
                    ? "\\" + p.toString(16).toUpperCase() + " "
                    : "\\" == h ||
                      (!s && (('"' == h && a == h) || ("'" == h && a == h))) ||
                      (s && o.test(h))
                    ? "\\" + h
                    : h;
                c += D;
              }
              return (
                s &&
                  (/^-[-\d]/.test(c)
                    ? (c = "\\-" + c.slice(1))
                    : /\d/.test(l) && (c = "\\3" + l + " " + c.slice(1))),
                (c = c.replace(u, function (e, t, r) {
                  return t && t.length % 2 ? e : (t || "") + r;
                })),
                !s && r.wrap ? a + c + a : c
              );
            };
          (a.options = {
            escapeEverything: !1,
            isIdentifier: !1,
            quotes: "single",
            wrap: !1,
          }),
            (a.version = "3.0.0"),
            (t.exports = a);
        }),
        eu = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r = u(eo()),
            n = Z(),
            i = u(ee()),
            o = et();
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function a(e, t) {
            return (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var s = (function (e) {
            var t;
            function i(t) {
              var r;
              return (
                ((r = e.call(this, t) || this).type = o.CLASS),
                (r._constructed = !0),
                r
              );
            }
            return (
              (i.prototype = Object.create(e.prototype)),
              (i.prototype.constructor = i),
              a(i, e),
              (i.prototype.valueToString = function () {
                return "." + e.prototype.valueToString.call(this);
              }),
              (t = [
                {
                  key: "value",
                  get: function () {
                    return this._value;
                  },
                  set: function (e) {
                    if (this._constructed) {
                      var t = (0, r.default)(e, { isIdentifier: !0 });
                      t !== e
                        ? ((0, n.ensureObject)(this, "raws"),
                          (this.raws.value = t))
                        : this.raws && delete this.raws.value;
                    }
                    this._value = e;
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(i.prototype, t),
              i
            );
          })(i.default);
          (e.default = s), (t.exports = e.default);
        }),
        ea = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.COMMENT), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        es = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.ID), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              (t.prototype.valueToString = function () {
                return "#" + e.prototype.valueToString.call(this);
              }),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        el = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r = i(eo()),
            n = Z();
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e);
            var i,
              u = t.prototype;
            return (
              (u.qualifiedName = function (e) {
                return this.namespace ? this.namespaceString + "|" + e : e;
              }),
              (u.valueToString = function () {
                return this.qualifiedName(e.prototype.valueToString.call(this));
              }),
              (i = [
                {
                  key: "namespace",
                  get: function () {
                    return this._namespace;
                  },
                  set: function (e) {
                    if (!0 === e || "*" === e || "&" === e) {
                      (this._namespace = e),
                        this.raws && delete this.raws.namespace;
                      return;
                    }
                    var t = (0, r.default)(e, { isIdentifier: !0 });
                    (this._namespace = e),
                      t !== e
                        ? ((0, n.ensureObject)(this, "raws"),
                          (this.raws.namespace = t))
                        : this.raws && delete this.raws.namespace;
                  },
                },
                {
                  key: "ns",
                  get: function () {
                    return this._namespace;
                  },
                  set: function (e) {
                    this.namespace = e;
                  },
                },
                {
                  key: "namespaceString",
                  get: function () {
                    if (!this.namespace) return "";
                    var e = this.stringifyProperty("namespace");
                    return !0 === e ? "" : e;
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, i),
              t
            );
          })(i(ee()).default);
          (e.default = u), (t.exports = e.default);
        }),
        ec = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = el()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.TAG), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        ef = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.STRING), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        ed = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = er()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.PSEUDO), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              (t.prototype.toString = function () {
                var e = this.length
                  ? "(" + this.map(String).join(",") + ")"
                  : "";
                return [
                  this.rawSpaceBefore,
                  this.stringifyProperty("value"),
                  e,
                  this.rawSpaceAfter,
                ].join("");
              }),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        eh = T((e, t) => {
          t.exports = function (e, t) {
            return function (...r) {
              return console.warn(t), e(...r);
            };
          };
        }),
        ep = T((e) => {
          "use strict";
          (e.__esModule = !0), (e.unescapeValue = h), (e.default = void 0);
          var t,
            r = u(eo()),
            n = u(X()),
            i = u(el()),
            o = et();
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function a(e, t) {
            return (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var s = eh(),
            l = /^('|")([^]*)\1$/,
            c = s(function () {},
            "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),
            f = s(function () {},
            "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),
            d = s(function () {},
            "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
          function h(e) {
            var t = !1,
              r = null,
              i = e,
              o = i.match(l);
            return (
              o && ((r = o[1]), (i = o[2])),
              (i = (0, n.default)(i)) !== e && (t = !0),
              { deprecatedUsage: t, unescaped: i, quoteMark: r }
            );
          }
          var p = (function (e) {
            function t(t) {
              var r;
              return (
                void 0 === t && (t = {}),
                ((r =
                  e.call(
                    this,
                    (function (e) {
                      if (void 0 !== e.quoteMark || void 0 === e.value)
                        return e;
                      d();
                      var t = h(e.value),
                        r = t.quoteMark,
                        n = t.unescaped;
                      return (
                        e.raws || (e.raws = {}),
                        void 0 === e.raws.value && (e.raws.value = e.value),
                        (e.value = n),
                        (e.quoteMark = r),
                        e
                      );
                    })(t)
                  ) || this).type = o.ATTRIBUTE),
                (r.raws = r.raws || {}),
                Object.defineProperty(r.raws, "unquoted", {
                  get: s(function () {
                    return r.value;
                  }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
                  set: s(function () {
                    return r.value;
                  }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now."),
                }),
                (r._constructed = !0),
                r
              );
            }
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              a(t, e);
            var n,
              i = t.prototype;
            return (
              (i.getQuotedValue = function (e) {
                void 0 === e && (e = {});
                var t = D[this._determineQuoteMark(e)];
                return (0, r.default)(this._value, t);
              }),
              (i._determineQuoteMark = function (e) {
                return e.smart
                  ? this.smartQuoteMark(e)
                  : this.preferredQuoteMark(e);
              }),
              (i.setValue = function (e, t) {
                void 0 === t && (t = {}),
                  (this._value = e),
                  (this._quoteMark = this._determineQuoteMark(t)),
                  this._syncRawValue();
              }),
              (i.smartQuoteMark = function (e) {
                var n = this.value,
                  i = n.replace(/[^']/g, "").length,
                  o = n.replace(/[^"]/g, "").length;
                if (i + o !== 0)
                  return o === i
                    ? this.preferredQuoteMark(e)
                    : o < i
                    ? t.DOUBLE_QUOTE
                    : t.SINGLE_QUOTE;
                var u = (0, r.default)(n, { isIdentifier: !0 });
                if (u === n) return t.NO_QUOTE;
                var a = this.preferredQuoteMark(e);
                if (a === t.NO_QUOTE) {
                  var s = this.quoteMark || e.quoteMark || t.DOUBLE_QUOTE,
                    l = D[s];
                  if ((0, r.default)(n, l).length < u.length) return s;
                }
                return a;
              }),
              (i.preferredQuoteMark = function (e) {
                var r = e.preferCurrentQuoteMark ? this.quoteMark : e.quoteMark;
                return (
                  void 0 === r &&
                    (r = e.preferCurrentQuoteMark
                      ? e.quoteMark
                      : this.quoteMark),
                  void 0 === r && (r = t.DOUBLE_QUOTE),
                  r
                );
              }),
              (i._syncRawValue = function () {
                var e = (0, r.default)(this._value, D[this.quoteMark]);
                e === this._value
                  ? this.raws && delete this.raws.value
                  : (this.raws.value = e);
              }),
              (i._handleEscapes = function (e, t) {
                if (this._constructed) {
                  var n = (0, r.default)(t, { isIdentifier: !0 });
                  n !== t ? (this.raws[e] = n) : delete this.raws[e];
                }
              }),
              (i._spacesFor = function (e) {
                return Object.assign(
                  { before: "", after: "" },
                  this.spaces[e] || {},
                  (this.raws.spaces && this.raws.spaces[e]) || {}
                );
              }),
              (i._stringFor = function (e, t, r) {
                void 0 === t && (t = e), void 0 === r && (r = g);
                var n = this._spacesFor(t);
                return r(this.stringifyProperty(e), n);
              }),
              (i.offsetOf = function (e) {
                var t = 1,
                  r = this._spacesFor("attribute");
                if (((t += r.before.length), "namespace" === e || "ns" === e))
                  return this.namespace ? t : -1;
                if (
                  "attributeNS" === e ||
                  ((t += this.namespaceString.length),
                  this.namespace && (t += 1),
                  "attribute" === e)
                )
                  return t;
                t +=
                  this.stringifyProperty("attribute").length + r.after.length;
                var n = this._spacesFor("operator");
                t += n.before.length;
                var i = this.stringifyProperty("operator");
                if ("operator" === e) return i ? t : -1;
                t += i.length + n.after.length;
                var o = this._spacesFor("value");
                t += o.before.length;
                var u = this.stringifyProperty("value");
                return "value" === e
                  ? u
                    ? t
                    : -1
                  : ((t +=
                      u.length +
                      o.after.length +
                      this._spacesFor("insensitive").before.length),
                    "insensitive" === e && this.insensitive ? t : -1);
              }),
              (i.toString = function () {
                var e = this,
                  t = [this.rawSpaceBefore, "["];
                return (
                  t.push(this._stringFor("qualifiedAttribute", "attribute")),
                  this.operator &&
                    (this.value || "" === this.value) &&
                    (t.push(this._stringFor("operator")),
                    t.push(this._stringFor("value")),
                    t.push(
                      this._stringFor(
                        "insensitiveFlag",
                        "insensitive",
                        function (t, r) {
                          return (
                            !(t.length > 0) ||
                              e.quoted ||
                              0 !== r.before.length ||
                              (e.spaces.value && e.spaces.value.after) ||
                              (r.before = " "),
                            g(t, r)
                          );
                        }
                      )
                    )),
                  t.push("]"),
                  t.push(this.rawSpaceAfter),
                  t.join("")
                );
              }),
              (n = [
                {
                  key: "quoted",
                  get: function () {
                    var e = this.quoteMark;
                    return "'" === e || '"' === e;
                  },
                  set: function (e) {
                    f();
                  },
                },
                {
                  key: "quoteMark",
                  get: function () {
                    return this._quoteMark;
                  },
                  set: function (e) {
                    if (!this._constructed) {
                      this._quoteMark = e;
                      return;
                    }
                    this._quoteMark !== e &&
                      ((this._quoteMark = e), this._syncRawValue());
                  },
                },
                {
                  key: "qualifiedAttribute",
                  get: function () {
                    return this.qualifiedName(
                      this.raws.attribute || this.attribute
                    );
                  },
                },
                {
                  key: "insensitiveFlag",
                  get: function () {
                    return this.insensitive ? "i" : "";
                  },
                },
                {
                  key: "value",
                  get: function () {
                    return this._value;
                  },
                  set: function (e) {
                    if (this._constructed) {
                      var t = h(e),
                        r = t.deprecatedUsage,
                        n = t.unescaped,
                        i = t.quoteMark;
                      r && c(),
                        (n !== this._value || i !== this._quoteMark) &&
                          ((this._value = n),
                          (this._quoteMark = i),
                          this._syncRawValue());
                    } else this._value = e;
                  },
                },
                {
                  key: "attribute",
                  get: function () {
                    return this._attribute;
                  },
                  set: function (e) {
                    this._handleEscapes("attribute", e), (this._attribute = e);
                  },
                },
              ]),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(t.prototype, n),
              t
            );
          })(i.default);
          (e.default = p),
            (p.NO_QUOTE = null),
            (p.SINGLE_QUOTE = "'"),
            (p.DOUBLE_QUOTE = '"');
          var D =
            (((t = {
              "'": { quotes: "single", wrap: !0 },
              '"': { quotes: "double", wrap: !0 },
            })[null] = { isIdentifier: !0 }),
            t);
          function g(e, t) {
            return "" + t.before + e + t.after;
          }
        }),
        eD = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = el()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return (
                ((r = e.call(this, t) || this).type = i.UNIVERSAL),
                (r.value = "*"),
                r
              );
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        eg = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return ((r = e.call(this, t) || this).type = i.COMBINATOR), r;
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        em = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ee()) && r.__esModule ? r : { default: r },
            i = et();
          function o(e, t) {
            return (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          var u = (function (e) {
            function t(t) {
              var r;
              return (
                ((r = e.call(this, t) || this).type = i.NESTING),
                (r.value = "&"),
                r
              );
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              o(t, e),
              t
            );
          })(n.default);
          (e.default = u), (t.exports = e.default);
        }),
        ev = T((e, t) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              return e.sort(function (e, t) {
                return e - t;
              });
            }),
            (t.exports = e.default);
        }),
        eb = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.combinator =
              e.word =
              e.comment =
              e.str =
              e.tab =
              e.newline =
              e.feed =
              e.cr =
              e.backslash =
              e.bang =
              e.slash =
              e.doubleQuote =
              e.singleQuote =
              e.space =
              e.greaterThan =
              e.pipe =
              e.equals =
              e.plus =
              e.caret =
              e.tilde =
              e.dollar =
              e.closeSquare =
              e.openSquare =
              e.closeParenthesis =
              e.openParenthesis =
              e.semicolon =
              e.colon =
              e.comma =
              e.at =
              e.asterisk =
              e.ampersand =
                void 0),
            (e.ampersand = 38),
            (e.asterisk = 42),
            (e.at = 64),
            (e.comma = 44),
            (e.colon = 58),
            (e.semicolon = 59),
            (e.openParenthesis = 40),
            (e.closeParenthesis = 41),
            (e.openSquare = 91),
            (e.closeSquare = 93),
            (e.dollar = 36),
            (e.tilde = 126),
            (e.caret = 94),
            (e.plus = 43),
            (e.equals = 61),
            (e.pipe = 124),
            (e.greaterThan = 62),
            (e.space = 32),
            (e.singleQuote = 39),
            (e.doubleQuote = 34),
            (e.slash = 47),
            (e.bang = 33),
            (e.backslash = 92),
            (e.cr = 13),
            (e.feed = 12),
            (e.newline = 10),
            (e.tab = 9),
            (e.str = 39),
            (e.comment = -1),
            (e.word = -2),
            (e.combinator = -3);
        }),
        ey = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.default = function (e) {
              var t,
                r,
                n,
                o,
                l,
                c,
                f,
                d,
                h,
                p,
                D,
                g,
                m = [],
                v = e.css.valueOf(),
                b = v.length,
                y = -1,
                F = 1,
                w = 0,
                x = 0;
              function E(t, r) {
                if (e.safe) (v += r), (d = v.length - 1);
                else throw e.error("Unclosed " + t, F, w - y, w);
              }
              for (; w < b; ) {
                switch (
                  ((t = v.charCodeAt(w)) === i.newline && ((y = w), (F += 1)),
                  t)
                ) {
                  case i.space:
                  case i.tab:
                  case i.newline:
                  case i.cr:
                  case i.feed:
                    d = w;
                    do
                      (d += 1),
                        (t = v.charCodeAt(d)) === i.newline &&
                          ((y = d), (F += 1));
                    while (
                      t === i.space ||
                      t === i.newline ||
                      t === i.tab ||
                      t === i.cr ||
                      t === i.feed
                    );
                    (g = i.space), (n = F), (r = d - y - 1), (x = d);
                    break;
                  case i.plus:
                  case i.greaterThan:
                  case i.tilde:
                  case i.pipe:
                    d = w;
                    do (d += 1), (t = v.charCodeAt(d));
                    while (
                      t === i.plus ||
                      t === i.greaterThan ||
                      t === i.tilde ||
                      t === i.pipe
                    );
                    (g = i.combinator), (n = F), (r = w - y), (x = d);
                    break;
                  case i.asterisk:
                  case i.ampersand:
                  case i.bang:
                  case i.comma:
                  case i.equals:
                  case i.dollar:
                  case i.caret:
                  case i.openSquare:
                  case i.closeSquare:
                  case i.colon:
                  case i.semicolon:
                  case i.openParenthesis:
                  case i.closeParenthesis:
                    (d = w), (g = t), (n = F), (r = w - y), (x = d + 1);
                    break;
                  case i.singleQuote:
                  case i.doubleQuote:
                    (D = t === i.singleQuote ? "'" : '"'), (d = w);
                    do
                      for (
                        o = !1,
                          -1 === (d = v.indexOf(D, d + 1)) && E("quote", D),
                          l = d;
                        v.charCodeAt(l - 1) === i.backslash;

                      )
                        (l -= 1), (o = !o);
                    while (o);
                    (g = i.str), (n = F), (r = w - y), (x = d + 1);
                    break;
                  default:
                    t === i.slash && v.charCodeAt(w + 1) === i.asterisk
                      ? (0 === (d = v.indexOf("*/", w + 2) + 1) &&
                          E("comment", "*/"),
                        (c =
                          (f = v.slice(w, d + 1).split(`
`)).length - 1) > 0
                          ? ((h = F + c), (p = d - f[c].length))
                          : ((h = F), (p = y)),
                        (g = i.comment),
                        (F = h),
                        (n = h),
                        (r = d - p))
                      : t === i.slash
                      ? ((d = w), (g = t), (n = F), (r = w - y), (x = d + 1))
                      : ((d = (function (e, t) {
                          var r,
                            n = t;
                          do {
                            if (a[(r = e.charCodeAt(n))]) break;
                            r === i.backslash
                              ? (n =
                                  (function (e, t) {
                                    var r = t,
                                      n = e.charCodeAt(r + 1);
                                    if (!u[n]) {
                                      if (s[n]) {
                                        var o = 0;
                                        do r++, o++, (n = e.charCodeAt(r + 1));
                                        while (s[n] && o < 6);
                                        o < 6 && n === i.space && r++;
                                      } else r++;
                                    }
                                    return r;
                                  })(e, n) + 1)
                              : n++;
                          } while (n < e.length);
                          return n - 1;
                        })(v, w)),
                        (g = i.word),
                        (n = F),
                        (r = d - y)),
                      (x = d + 1);
                }
                m.push([g, F, w - y, n, r, w, x]),
                  p && ((y = p), (p = null)),
                  (w = x);
              }
              return m;
            }),
            (e.FIELDS = void 0);
          var t,
            r,
            n,
            i = (function (e) {
              if (e && e.__esModule) return e;
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return { default: e };
              var t = o();
              if (t && t.has(e)) return t.get(e);
              var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                  u && (u.get || u.set)
                    ? Object.defineProperty(r, i, u)
                    : (r[i] = e[i]);
                }
              return (r.default = e), t && t.set(e, r), r;
            })(eb());
          function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (o = function () {
                return e;
              }),
              e
            );
          }
          var u =
              (((r = {})[i.tab] = !0),
              (r[i.newline] = !0),
              (r[i.cr] = !0),
              (r[i.feed] = !0),
              r),
            a =
              (((n = {})[i.space] = !0),
              (n[i.tab] = !0),
              (n[i.newline] = !0),
              (n[i.cr] = !0),
              (n[i.feed] = !0),
              (n[i.ampersand] = !0),
              (n[i.asterisk] = !0),
              (n[i.bang] = !0),
              (n[i.comma] = !0),
              (n[i.colon] = !0),
              (n[i.semicolon] = !0),
              (n[i.openParenthesis] = !0),
              (n[i.closeParenthesis] = !0),
              (n[i.openSquare] = !0),
              (n[i.closeSquare] = !0),
              (n[i.singleQuote] = !0),
              (n[i.doubleQuote] = !0),
              (n[i.plus] = !0),
              (n[i.pipe] = !0),
              (n[i.tilde] = !0),
              (n[i.greaterThan] = !0),
              (n[i.equals] = !0),
              (n[i.dollar] = !0),
              (n[i.caret] = !0),
              (n[i.slash] = !0),
              n),
            s = {},
            l = "0123456789abcdefABCDEF";
          for (t = 0; t < l.length; t++) s[l.charCodeAt(t)] = !0;
          e.FIELDS = {
            TYPE: 0,
            START_LINE: 1,
            START_COL: 2,
            END_LINE: 3,
            END_COL: 4,
            START_POS: 5,
            END_POS: 6,
          };
        }),
        eF = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n,
            i = x(en()),
            o = x(ei()),
            u = x(eu()),
            a = x(ea()),
            s = x(es()),
            l = x(ec()),
            c = x(ef()),
            f = x(ed()),
            d = w(ep()),
            h = x(eD()),
            p = x(eg()),
            D = x(em()),
            g = x(ev()),
            m = w(ey()),
            v = w(eb()),
            b = w(et()),
            y = Z();
          function F() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (F = function () {
                return e;
              }),
              e
            );
          }
          function w(e) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = F();
            if (t && t.has(e)) return t.get(e);
            var r = {},
              n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(r, i, o)
                  : (r[i] = e[i]);
              }
            return (r.default = e), t && t.set(e, r), r;
          }
          function x(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var E =
              (((r = {})[v.space] = !0),
              (r[v.cr] = !0),
              (r[v.feed] = !0),
              (r[v.newline] = !0),
              (r[v.tab] = !0),
              r),
            C = Object.assign({}, E, (((n = {})[v.comment] = !0), n));
          function k(e) {
            return {
              line: e[m.FIELDS.START_LINE],
              column: e[m.FIELDS.START_COL],
            };
          }
          function S(e) {
            return { line: e[m.FIELDS.END_LINE], column: e[m.FIELDS.END_COL] };
          }
          function _(e, t, r, n) {
            return {
              start: { line: e, column: t },
              end: { line: r, column: n },
            };
          }
          function T(e) {
            return _(
              e[m.FIELDS.START_LINE],
              e[m.FIELDS.START_COL],
              e[m.FIELDS.END_LINE],
              e[m.FIELDS.END_COL]
            );
          }
          function A(e, t) {
            if (e)
              return _(
                e[m.FIELDS.START_LINE],
                e[m.FIELDS.START_COL],
                t[m.FIELDS.END_LINE],
                t[m.FIELDS.END_COL]
              );
          }
          function O(e, t) {
            var r = e[t];
            if ("string" == typeof r)
              return (
                -1 !== r.indexOf("\\") &&
                  ((0, y.ensureObject)(e, "raws"),
                  (e[t] = (0, y.unesc)(r)),
                  void 0 === e.raws[t] && (e.raws[t] = r)),
                e
              );
          }
          function B(e, t) {
            for (var r = -1, n = []; -1 !== (r = e.indexOf(t, r + 1)); )
              n.push(r);
            return n;
          }
          var P = (function () {
            function e(e, t) {
              void 0 === t && (t = {}),
                (this.rule = e),
                (this.options = Object.assign({ lossy: !1, safe: !1 }, t)),
                (this.position = 0),
                (this.css =
                  "string" == typeof this.rule
                    ? this.rule
                    : this.rule.selector),
                (this.tokens = (0, m.default)({
                  css: this.css,
                  error: this._errorGenerator(),
                  safe: this.options.safe,
                }));
              var r = A(this.tokens[0], this.tokens[this.tokens.length - 1]);
              (this.root = new i.default({ source: r })),
                (this.root.errorGenerator = this._errorGenerator());
              var n = new o.default({
                source: { start: { line: 1, column: 1 } },
              });
              this.root.append(n), (this.current = n), this.loop();
            }
            var t = e.prototype;
            return (
              (t._errorGenerator = function () {
                var e = this;
                return function (t, r) {
                  return "string" == typeof e.rule
                    ? Error(t)
                    : e.rule.error(t, r);
                };
              }),
              (t.attribute = function () {
                var e = [],
                  t = this.currToken;
                for (
                  this.position++;
                  this.position < this.tokens.length &&
                  this.currToken[m.FIELDS.TYPE] !== v.closeSquare;

                )
                  e.push(this.currToken), this.position++;
                if (this.currToken[m.FIELDS.TYPE] !== v.closeSquare)
                  return this.expected(
                    "closing square bracket",
                    this.currToken[m.FIELDS.START_POS]
                  );
                var r = e.length,
                  n = {
                    source: _(t[1], t[2], this.currToken[3], this.currToken[4]),
                    sourceIndex: t[m.FIELDS.START_POS],
                  };
                if (1 === r && !~[v.word].indexOf(e[0][m.FIELDS.TYPE]))
                  return this.expected("attribute", e[0][m.FIELDS.START_POS]);
                for (var i = 0, o = "", u = "", a = null, s = !1; i < r; ) {
                  var l = e[i],
                    c = this.content(l),
                    f = e[i + 1];
                  switch (l[m.FIELDS.TYPE]) {
                    case v.space:
                      if (((s = !0), this.options.lossy)) break;
                      if (a) {
                        (0, y.ensureObject)(n, "spaces", a);
                        var h = n.spaces[a].after || "";
                        n.spaces[a].after = h + c;
                        var p =
                          (0, y.getProp)(n, "raws", "spaces", a, "after") ||
                          null;
                        p && (n.raws.spaces[a].after = p + c);
                      } else (o += c), (u += c);
                      break;
                    case v.asterisk:
                      f[m.FIELDS.TYPE] === v.equals
                        ? ((n.operator = c), (a = "operator"))
                        : (n.namespace && ("namespace" !== a || s)) ||
                          !f ||
                          (o &&
                            ((0, y.ensureObject)(n, "spaces", "attribute"),
                            (n.spaces.attribute.before = o),
                            (o = "")),
                          u &&
                            ((0, y.ensureObject)(
                              n,
                              "raws",
                              "spaces",
                              "attribute"
                            ),
                            (n.raws.spaces.attribute.before = o),
                            (u = "")),
                          (n.namespace = (n.namespace || "") + c),
                          (0, y.getProp)(n, "raws", "namespace") &&
                            (n.raws.namespace += c),
                          (a = "namespace")),
                        (s = !1);
                      break;
                    case v.dollar:
                      if ("value" === a) {
                        var D = (0, y.getProp)(n, "raws", "value");
                        (n.value += "$"), D && (n.raws.value = D + "$");
                        break;
                      }
                    case v.caret:
                      f[m.FIELDS.TYPE] === v.equals &&
                        ((n.operator = c), (a = "operator")),
                        (s = !1);
                      break;
                    case v.combinator:
                      if (
                        ("~" === c &&
                          f[m.FIELDS.TYPE] === v.equals &&
                          ((n.operator = c), (a = "operator")),
                        "|" !== c)
                      ) {
                        s = !1;
                        break;
                      }
                      f[m.FIELDS.TYPE] === v.equals
                        ? ((n.operator = c), (a = "operator"))
                        : n.namespace || n.attribute || (n.namespace = !0),
                        (s = !1);
                      break;
                    case v.word:
                      if (
                        f &&
                        "|" === this.content(f) &&
                        e[i + 2] &&
                        e[i + 2][m.FIELDS.TYPE] !== v.equals &&
                        !n.operator &&
                        !n.namespace
                      )
                        (n.namespace = c), (a = "namespace");
                      else if (n.attribute && ("attribute" !== a || s)) {
                        if (
                          (n.value || "" === n.value) &&
                          ("value" !== a || s)
                        ) {
                          var g = "i" === c || "I" === c;
                          (n.value || "" === n.value) && (n.quoteMark || s)
                            ? ((n.insensitive = g),
                              (g && "I" !== c) ||
                                ((0, y.ensureObject)(n, "raws"),
                                (n.raws.insensitiveFlag = c)),
                              (a = "insensitive"),
                              o &&
                                ((0, y.ensureObject)(
                                  n,
                                  "spaces",
                                  "insensitive"
                                ),
                                (n.spaces.insensitive.before = o),
                                (o = "")),
                              u &&
                                ((0, y.ensureObject)(
                                  n,
                                  "raws",
                                  "spaces",
                                  "insensitive"
                                ),
                                (n.raws.spaces.insensitive.before = u),
                                (u = "")))
                            : (n.value || "" === n.value) &&
                              ((a = "value"),
                              (n.value += c),
                              n.raws.value && (n.raws.value += c));
                        } else {
                          var b = (0, y.unesc)(c),
                            F = (0, y.getProp)(n, "raws", "value") || "",
                            w = n.value || "";
                          (n.value = w + b),
                            (n.quoteMark = null),
                            (b !== c || F) &&
                              ((0, y.ensureObject)(n, "raws"),
                              (n.raws.value = (F || w) + c)),
                            (a = "value");
                        }
                      } else
                        o &&
                          ((0, y.ensureObject)(n, "spaces", "attribute"),
                          (n.spaces.attribute.before = o),
                          (o = "")),
                          u &&
                            ((0, y.ensureObject)(
                              n,
                              "raws",
                              "spaces",
                              "attribute"
                            ),
                            (n.raws.spaces.attribute.before = u),
                            (u = "")),
                          (n.attribute = (n.attribute || "") + c),
                          (0, y.getProp)(n, "raws", "attribute") &&
                            (n.raws.attribute += c),
                          (a = "attribute");
                      s = !1;
                      break;
                    case v.str:
                      if (!n.attribute || !n.operator)
                        return this.error(
                          "Expected an attribute followed by an operator preceding the string.",
                          { index: l[m.FIELDS.START_POS] }
                        );
                      var x = (0, d.unescapeValue)(c),
                        E = x.unescaped,
                        C = x.quoteMark;
                      (n.value = E),
                        (n.quoteMark = C),
                        (a = "value"),
                        (0, y.ensureObject)(n, "raws"),
                        (n.raws.value = c),
                        (s = !1);
                      break;
                    case v.equals:
                      if (!n.attribute)
                        return this.expected(
                          "attribute",
                          l[m.FIELDS.START_POS],
                          c
                        );
                      if (n.value)
                        return this.error(
                          'Unexpected "=" found; an operator was already defined.',
                          { index: l[m.FIELDS.START_POS] }
                        );
                      (n.operator = n.operator ? n.operator + c : c),
                        (a = "operator"),
                        (s = !1);
                      break;
                    case v.comment:
                      if (a) {
                        if (
                          s ||
                          (f && f[m.FIELDS.TYPE] === v.space) ||
                          "insensitive" === a
                        ) {
                          var k = (0, y.getProp)(n, "spaces", a, "after") || "",
                            S =
                              (0, y.getProp)(n, "raws", "spaces", a, "after") ||
                              k;
                          (0, y.ensureObject)(n, "raws", "spaces", a),
                            (n.raws.spaces[a].after = S + c);
                        } else {
                          var T = n[a] || "",
                            A = (0, y.getProp)(n, "raws", a) || T;
                          (0, y.ensureObject)(n, "raws"), (n.raws[a] = A + c);
                        }
                      } else u += c;
                      break;
                    default:
                      return this.error('Unexpected "' + c + '" found.', {
                        index: l[m.FIELDS.START_POS],
                      });
                  }
                  i++;
                }
                O(n, "attribute"),
                  O(n, "namespace"),
                  this.newNode(new d.default(n)),
                  this.position++;
              }),
              (t.parseWhitespaceEquivalentTokens = function (e) {
                e < 0 && (e = this.tokens.length);
                var t = this.position,
                  r = [],
                  n = "",
                  i = void 0;
                do
                  if (E[this.currToken[m.FIELDS.TYPE]])
                    this.options.lossy || (n += this.content());
                  else if (this.currToken[m.FIELDS.TYPE] === v.comment) {
                    var o = {};
                    n && ((o.before = n), (n = "")),
                      (i = new a.default({
                        value: this.content(),
                        source: T(this.currToken),
                        sourceIndex: this.currToken[m.FIELDS.START_POS],
                        spaces: o,
                      })),
                      r.push(i);
                  }
                while (++this.position < e);
                if (n) {
                  if (i) i.spaces.after = n;
                  else if (!this.options.lossy) {
                    var u = this.tokens[t],
                      s = this.tokens[this.position - 1];
                    r.push(
                      new c.default({
                        value: "",
                        source: _(
                          u[m.FIELDS.START_LINE],
                          u[m.FIELDS.START_COL],
                          s[m.FIELDS.END_LINE],
                          s[m.FIELDS.END_COL]
                        ),
                        sourceIndex: u[m.FIELDS.START_POS],
                        spaces: { before: n, after: "" },
                      })
                    );
                  }
                }
                return r;
              }),
              (t.convertWhitespaceNodesToSpace = function (e, t) {
                var r = this;
                void 0 === t && (t = !1);
                var n = "",
                  i = "";
                return (
                  e.forEach(function (e) {
                    var o = r.lossySpace(e.spaces.before, t),
                      u = r.lossySpace(e.rawSpaceBefore, t);
                    (n +=
                      o + r.lossySpace(e.spaces.after, t && 0 === o.length)),
                      (i +=
                        o +
                        e.value +
                        r.lossySpace(e.rawSpaceAfter, t && 0 === u.length));
                  }),
                  i === n && (i = void 0),
                  { space: n, rawSpace: i }
                );
              }),
              (t.isNamedCombinator = function (e) {
                return (
                  void 0 === e && (e = this.position),
                  this.tokens[e + 0] &&
                    this.tokens[e + 0][m.FIELDS.TYPE] === v.slash &&
                    this.tokens[e + 1] &&
                    this.tokens[e + 1][m.FIELDS.TYPE] === v.word &&
                    this.tokens[e + 2] &&
                    this.tokens[e + 2][m.FIELDS.TYPE] === v.slash
                );
              }),
              (t.namedCombinator = function () {
                if (this.isNamedCombinator()) {
                  var e = this.content(this.tokens[this.position + 1]),
                    t = (0, y.unesc)(e).toLowerCase(),
                    r = {};
                  t !== e && (r.value = "/" + e + "/");
                  var n = new p.default({
                    value: "/" + t + "/",
                    source: _(
                      this.currToken[m.FIELDS.START_LINE],
                      this.currToken[m.FIELDS.START_COL],
                      this.tokens[this.position + 2][m.FIELDS.END_LINE],
                      this.tokens[this.position + 2][m.FIELDS.END_COL]
                    ),
                    sourceIndex: this.currToken[m.FIELDS.START_POS],
                    raws: r,
                  });
                  return (this.position = this.position + 3), n;
                }
                this.unexpected();
              }),
              (t.combinator = function () {
                var e,
                  t = this;
                if ("|" === this.content()) return this.namespace();
                var r = this.locateNextMeaningfulToken(this.position);
                if (r < 0 || this.tokens[r][m.FIELDS.TYPE] === v.comma) {
                  var n = this.parseWhitespaceEquivalentTokens(r);
                  if (n.length > 0) {
                    var i = this.current.last;
                    if (i) {
                      var o = this.convertWhitespaceNodesToSpace(n),
                        u = o.space,
                        a = o.rawSpace;
                      void 0 !== a && (i.rawSpaceAfter += a),
                        (i.spaces.after += u);
                    } else
                      n.forEach(function (e) {
                        return t.newNode(e);
                      });
                  }
                  return;
                }
                var s = this.currToken,
                  l = void 0;
                if (
                  (r > this.position &&
                    (l = this.parseWhitespaceEquivalentTokens(r)),
                  this.isNamedCombinator()
                    ? (e = this.namedCombinator())
                    : this.currToken[m.FIELDS.TYPE] === v.combinator
                    ? ((e = new p.default({
                        value: this.content(),
                        source: T(this.currToken),
                        sourceIndex: this.currToken[m.FIELDS.START_POS],
                      })),
                      this.position++)
                    : E[this.currToken[m.FIELDS.TYPE]] ||
                      l ||
                      this.unexpected(),
                  e)
                ) {
                  if (l) {
                    var c = this.convertWhitespaceNodesToSpace(l),
                      f = c.space,
                      d = c.rawSpace;
                    (e.spaces.before = f), (e.rawSpaceBefore = d);
                  }
                } else {
                  var h = this.convertWhitespaceNodesToSpace(l, !0),
                    D = h.space,
                    g = h.rawSpace;
                  g || (g = D);
                  var b = {},
                    y = { spaces: {} };
                  D.endsWith(" ") && g.endsWith(" ")
                    ? ((b.before = D.slice(0, D.length - 1)),
                      (y.spaces.before = g.slice(0, g.length - 1)))
                    : D.startsWith(" ") && g.startsWith(" ")
                    ? ((b.after = D.slice(1)), (y.spaces.after = g.slice(1)))
                    : (y.value = g),
                    (e = new p.default({
                      value: " ",
                      source: A(s, this.tokens[this.position - 1]),
                      sourceIndex: s[m.FIELDS.START_POS],
                      spaces: b,
                      raws: y,
                    }));
                }
                return (
                  this.currToken &&
                    this.currToken[m.FIELDS.TYPE] === v.space &&
                    ((e.spaces.after = this.optionalSpace(this.content())),
                    this.position++),
                  this.newNode(e)
                );
              }),
              (t.comma = function () {
                if (this.position === this.tokens.length - 1) {
                  (this.root.trailingComma = !0), this.position++;
                  return;
                }
                this.current._inferEndPosition();
                var e = new o.default({
                  source: { start: k(this.tokens[this.position + 1]) },
                });
                this.current.parent.append(e),
                  (this.current = e),
                  this.position++;
              }),
              (t.comment = function () {
                var e = this.currToken;
                this.newNode(
                  new a.default({
                    value: this.content(),
                    source: T(e),
                    sourceIndex: e[m.FIELDS.START_POS],
                  })
                ),
                  this.position++;
              }),
              (t.error = function (e, t) {
                throw this.root.error(e, t);
              }),
              (t.missingBackslash = function () {
                return this.error(
                  "Expected a backslash preceding the semicolon.",
                  { index: this.currToken[m.FIELDS.START_POS] }
                );
              }),
              (t.missingParenthesis = function () {
                return this.expected(
                  "opening parenthesis",
                  this.currToken[m.FIELDS.START_POS]
                );
              }),
              (t.missingSquareBracket = function () {
                return this.expected(
                  "opening square bracket",
                  this.currToken[m.FIELDS.START_POS]
                );
              }),
              (t.unexpected = function () {
                return this.error(
                  "Unexpected '" +
                    this.content() +
                    "'. Escaping special characters with \\ may help.",
                  this.currToken[m.FIELDS.START_POS]
                );
              }),
              (t.namespace = function () {
                var e = (this.prevToken && this.content(this.prevToken)) || !0;
                return this.nextToken[m.FIELDS.TYPE] === v.word
                  ? (this.position++, this.word(e))
                  : this.nextToken[m.FIELDS.TYPE] === v.asterisk
                  ? (this.position++, this.universal(e))
                  : void 0;
              }),
              (t.nesting = function () {
                if (this.nextToken && "|" === this.content(this.nextToken)) {
                  this.position++;
                  return;
                }
                var e = this.currToken;
                this.newNode(
                  new D.default({
                    value: this.content(),
                    source: T(e),
                    sourceIndex: e[m.FIELDS.START_POS],
                  })
                ),
                  this.position++;
              }),
              (t.parentheses = function () {
                var e = this.current.last,
                  t = 1;
                if ((this.position++, e && e.type === b.PSEUDO)) {
                  var r = new o.default({
                      source: { start: k(this.tokens[this.position - 1]) },
                    }),
                    n = this.current;
                  for (
                    e.append(r), this.current = r;
                    this.position < this.tokens.length && t;

                  )
                    this.currToken[m.FIELDS.TYPE] === v.openParenthesis && t++,
                      this.currToken[m.FIELDS.TYPE] === v.closeParenthesis &&
                        t--,
                      t
                        ? this.parse()
                        : ((this.current.source.end = S(this.currToken)),
                          (this.current.parent.source.end = S(this.currToken)),
                          this.position++);
                  this.current = n;
                } else {
                  for (
                    var i, u = this.currToken, a = "(";
                    this.position < this.tokens.length && t;

                  )
                    this.currToken[m.FIELDS.TYPE] === v.openParenthesis && t++,
                      this.currToken[m.FIELDS.TYPE] === v.closeParenthesis &&
                        t--,
                      (i = this.currToken),
                      (a += this.parseParenthesisToken(this.currToken)),
                      this.position++;
                  e
                    ? e.appendToPropertyAndEscape("value", a, a)
                    : this.newNode(
                        new c.default({
                          value: a,
                          source: _(
                            u[m.FIELDS.START_LINE],
                            u[m.FIELDS.START_COL],
                            i[m.FIELDS.END_LINE],
                            i[m.FIELDS.END_COL]
                          ),
                          sourceIndex: u[m.FIELDS.START_POS],
                        })
                      );
                }
                if (t)
                  return this.expected(
                    "closing parenthesis",
                    this.currToken[m.FIELDS.START_POS]
                  );
              }),
              (t.pseudo = function () {
                for (
                  var e = this, t = "", r = this.currToken;
                  this.currToken && this.currToken[m.FIELDS.TYPE] === v.colon;

                )
                  (t += this.content()), this.position++;
                return this.currToken
                  ? this.currToken[m.FIELDS.TYPE] !== v.word
                    ? this.expected(
                        ["pseudo-class", "pseudo-element"],
                        this.currToken[m.FIELDS.START_POS]
                      )
                    : void this.splitWord(!1, function (n, i) {
                        (t += n),
                          e.newNode(
                            new f.default({
                              value: t,
                              source: A(r, e.currToken),
                              sourceIndex: r[m.FIELDS.START_POS],
                            })
                          ),
                          i > 1 &&
                            e.nextToken &&
                            e.nextToken[m.FIELDS.TYPE] === v.openParenthesis &&
                            e.error("Misplaced parenthesis.", {
                              index: e.nextToken[m.FIELDS.START_POS],
                            });
                      })
                  : this.expected(
                      ["pseudo-class", "pseudo-element"],
                      this.position - 1
                    );
              }),
              (t.space = function () {
                var e = this.content();
                0 === this.position ||
                this.prevToken[m.FIELDS.TYPE] === v.comma ||
                this.prevToken[m.FIELDS.TYPE] === v.openParenthesis ||
                this.current.nodes.every(function (e) {
                  return "comment" === e.type;
                })
                  ? ((this.spaces = this.optionalSpace(e)), this.position++)
                  : this.position === this.tokens.length - 1 ||
                    this.nextToken[m.FIELDS.TYPE] === v.comma ||
                    this.nextToken[m.FIELDS.TYPE] === v.closeParenthesis
                  ? ((this.current.last.spaces.after = this.optionalSpace(e)),
                    this.position++)
                  : this.combinator();
              }),
              (t.string = function () {
                var e = this.currToken;
                this.newNode(
                  new c.default({
                    value: this.content(),
                    source: T(e),
                    sourceIndex: e[m.FIELDS.START_POS],
                  })
                ),
                  this.position++;
              }),
              (t.universal = function (e) {
                var t = this.nextToken;
                if (t && "|" === this.content(t))
                  return this.position++, this.namespace();
                var r = this.currToken;
                this.newNode(
                  new h.default({
                    value: this.content(),
                    source: T(r),
                    sourceIndex: r[m.FIELDS.START_POS],
                  }),
                  e
                ),
                  this.position++;
              }),
              (t.splitWord = function (e, t) {
                for (
                  var r = this, n = this.nextToken, i = this.content();
                  n &&
                  ~[v.dollar, v.caret, v.equals, v.word].indexOf(
                    n[m.FIELDS.TYPE]
                  );

                ) {
                  this.position++;
                  var o = this.content();
                  if (((i += o), o.lastIndexOf("\\") === o.length - 1)) {
                    var a = this.nextToken;
                    a &&
                      a[m.FIELDS.TYPE] === v.space &&
                      ((i += this.requiredSpace(this.content(a))),
                      this.position++);
                  }
                  n = this.nextToken;
                }
                var c = B(i, ".").filter(function (e) {
                    var t = "\\" === i[e - 1],
                      r = /^\d+\.\d+%$/.test(i);
                    return !t && !r;
                  }),
                  f = B(i, "#").filter(function (e) {
                    return "\\" !== i[e - 1];
                  }),
                  d = B(i, "#{");
                d.length &&
                  (f = f.filter(function (e) {
                    return !~d.indexOf(e);
                  }));
                var h = (0, g.default)(
                  (function () {
                    var e = Array.prototype.concat.apply([], arguments);
                    return e.filter(function (t, r) {
                      return r === e.indexOf(t);
                    });
                  })([0].concat(c, f))
                );
                h.forEach(function (n, o) {
                  var a = h[o + 1] || i.length,
                    d = i.slice(n, a);
                  if (0 === o && t) return t.call(r, d, h.length);
                  var p,
                    D = r.currToken,
                    g = D[m.FIELDS.START_POS] + h[o],
                    v = _(D[1], D[2] + n, D[3], D[2] + (a - 1));
                  if (~c.indexOf(n)) {
                    var b = { value: d.slice(1), source: v, sourceIndex: g };
                    p = new u.default(O(b, "value"));
                  } else if (~f.indexOf(n)) {
                    var y = { value: d.slice(1), source: v, sourceIndex: g };
                    p = new s.default(O(y, "value"));
                  } else {
                    var F = { value: d, source: v, sourceIndex: g };
                    O(F, "value"), (p = new l.default(F));
                  }
                  r.newNode(p, e), (e = null);
                }),
                  this.position++;
              }),
              (t.word = function (e) {
                var t = this.nextToken;
                return t && "|" === this.content(t)
                  ? (this.position++, this.namespace())
                  : this.splitWord(e);
              }),
              (t.loop = function () {
                for (; this.position < this.tokens.length; ) this.parse(!0);
                return this.current._inferEndPosition(), this.root;
              }),
              (t.parse = function (e) {
                switch (this.currToken[m.FIELDS.TYPE]) {
                  case v.space:
                    this.space();
                    break;
                  case v.comment:
                    this.comment();
                    break;
                  case v.openParenthesis:
                    this.parentheses();
                    break;
                  case v.closeParenthesis:
                    e && this.missingParenthesis();
                    break;
                  case v.openSquare:
                    this.attribute();
                    break;
                  case v.dollar:
                  case v.caret:
                  case v.equals:
                  case v.word:
                    this.word();
                    break;
                  case v.colon:
                    this.pseudo();
                    break;
                  case v.comma:
                    this.comma();
                    break;
                  case v.asterisk:
                    this.universal();
                    break;
                  case v.ampersand:
                    this.nesting();
                    break;
                  case v.slash:
                  case v.combinator:
                    this.combinator();
                    break;
                  case v.str:
                    this.string();
                    break;
                  case v.closeSquare:
                    this.missingSquareBracket();
                  case v.semicolon:
                    this.missingBackslash();
                  default:
                    this.unexpected();
                }
              }),
              (t.expected = function (e, t, r) {
                if (Array.isArray(e)) {
                  var n = e.pop();
                  e = e.join(", ") + " or " + n;
                }
                var i = /^[aeiou]/.test(e[0]) ? "an" : "a";
                return r
                  ? this.error(
                      "Expected " +
                        i +
                        " " +
                        e +
                        ', found "' +
                        r +
                        '" instead.',
                      { index: t }
                    )
                  : this.error("Expected " + i + " " + e + ".", { index: t });
              }),
              (t.requiredSpace = function (e) {
                return this.options.lossy ? " " : e;
              }),
              (t.optionalSpace = function (e) {
                return this.options.lossy ? "" : e;
              }),
              (t.lossySpace = function (e, t) {
                return this.options.lossy ? (t ? " " : "") : e;
              }),
              (t.parseParenthesisToken = function (e) {
                var t = this.content(e);
                return e[m.FIELDS.TYPE] === v.space ? this.requiredSpace(t) : t;
              }),
              (t.newNode = function (e, t) {
                return (
                  t &&
                    (/^ +$/.test(t) &&
                      (this.options.lossy ||
                        (this.spaces = (this.spaces || "") + t),
                      (t = !0)),
                    (e.namespace = t),
                    O(e, "namespace")),
                  this.spaces &&
                    ((e.spaces.before = this.spaces), (this.spaces = "")),
                  this.current.append(e)
                );
              }),
              (t.content = function (e) {
                return (
                  void 0 === e && (e = this.currToken),
                  this.css.slice(e[m.FIELDS.START_POS], e[m.FIELDS.END_POS])
                );
              }),
              (t.locateNextMeaningfulToken = function (e) {
                void 0 === e && (e = this.position + 1);
                for (var t = e; t < this.tokens.length; )
                  if (!C[this.tokens[t][m.FIELDS.TYPE]]) return t;
                  else {
                    t++;
                    continue;
                  }
                return -1;
              }),
              (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              })(e.prototype, [
                {
                  key: "currToken",
                  get: function () {
                    return this.tokens[this.position];
                  },
                },
                {
                  key: "nextToken",
                  get: function () {
                    return this.tokens[this.position + 1];
                  },
                },
                {
                  key: "prevToken",
                  get: function () {
                    return this.tokens[this.position - 1];
                  },
                },
              ]),
              e
            );
          })();
          (e.default = P), (t.exports = e.default);
        }),
        ew = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = eF()) && r.__esModule ? r : { default: r },
            i = (function () {
              function e(e, t) {
                (this.func = e || function () {}),
                  (this.funcRes = null),
                  (this.options = t);
              }
              var t = e.prototype;
              return (
                (t._shouldUpdateSelector = function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    !1 !== Object.assign({}, this.options, t).updateSelector &&
                      "string" != typeof e
                  );
                }),
                (t._isLossy = function (e) {
                  return (
                    void 0 === e && (e = {}),
                    !1 === Object.assign({}, this.options, e).lossless
                  );
                }),
                (t._root = function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    new n.default(e, this._parseOptions(t)).root
                  );
                }),
                (t._parseOptions = function (e) {
                  return { lossy: this._isLossy(e) };
                }),
                (t._run = function (e, t) {
                  var r = this;
                  return (
                    void 0 === t && (t = {}),
                    new Promise(function (n, i) {
                      try {
                        var o = r._root(e, t);
                        Promise.resolve(r.func(o))
                          .then(function (n) {
                            var i = void 0;
                            return (
                              r._shouldUpdateSelector(e, t) &&
                                ((i = o.toString()), (e.selector = i)),
                              { transform: n, root: o, string: i }
                            );
                          })
                          .then(n, i);
                      } catch (e) {
                        i(e);
                        return;
                      }
                    })
                  );
                }),
                (t._runSync = function (e, t) {
                  void 0 === t && (t = {});
                  var r = this._root(e, t),
                    n = this.func(r);
                  if (n && "function" == typeof n.then)
                    throw Error(
                      "Selector processor returned a promise to a synchronous call."
                    );
                  var i = void 0;
                  return (
                    t.updateSelector &&
                      "string" != typeof e &&
                      ((i = r.toString()), (e.selector = i)),
                    { transform: n, root: r, string: i }
                  );
                }),
                (t.ast = function (e, t) {
                  return this._run(e, t).then(function (e) {
                    return e.root;
                  });
                }),
                (t.astSync = function (e, t) {
                  return this._runSync(e, t).root;
                }),
                (t.transform = function (e, t) {
                  return this._run(e, t).then(function (e) {
                    return e.transform;
                  });
                }),
                (t.transformSync = function (e, t) {
                  return this._runSync(e, t).transform;
                }),
                (t.process = function (e, t) {
                  return this._run(e, t).then(function (e) {
                    return e.string || e.root.toString();
                  });
                }),
                (t.processSync = function (e, t) {
                  var r = this._runSync(e, t);
                  return r.string || r.root.toString();
                }),
                e
              );
            })();
          (e.default = i), (t.exports = e.default);
        }),
        ex = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.universal =
              e.tag =
              e.string =
              e.selector =
              e.root =
              e.pseudo =
              e.nesting =
              e.id =
              e.comment =
              e.combinator =
              e.className =
              e.attribute =
                void 0);
          var t = h(ep()),
            r = h(eu()),
            n = h(eg()),
            i = h(ea()),
            o = h(es()),
            u = h(em()),
            a = h(ed()),
            s = h(en()),
            l = h(ei()),
            c = h(ef()),
            f = h(ec()),
            d = h(eD());
          function h(e) {
            return e && e.__esModule ? e : { default: e };
          }
          (e.attribute = function (e) {
            return new t.default(e);
          }),
            (e.className = function (e) {
              return new r.default(e);
            }),
            (e.combinator = function (e) {
              return new n.default(e);
            }),
            (e.comment = function (e) {
              return new i.default(e);
            }),
            (e.id = function (e) {
              return new o.default(e);
            }),
            (e.nesting = function (e) {
              return new u.default(e);
            }),
            (e.pseudo = function (e) {
              return new a.default(e);
            }),
            (e.root = function (e) {
              return new s.default(e);
            }),
            (e.selector = function (e) {
              return new l.default(e);
            }),
            (e.string = function (e) {
              return new c.default(e);
            }),
            (e.tag = function (e) {
              return new f.default(e);
            }),
            (e.universal = function (e) {
              return new d.default(e);
            });
        }),
        eE = T((e) => {
          "use strict";
          (e.__esModule = !0),
            (e.isNode = i),
            (e.isPseudoElement = v),
            (e.isPseudoClass = function (e) {
              return d(e) && !v(e);
            }),
            (e.isContainer = function (e) {
              return !!(i(e) && e.walk);
            }),
            (e.isNamespace = function (e) {
              return u(e) || g(e);
            }),
            (e.isUniversal =
              e.isTag =
              e.isString =
              e.isSelector =
              e.isRoot =
              e.isPseudo =
              e.isNesting =
              e.isIdentifier =
              e.isComment =
              e.isCombinator =
              e.isClassName =
              e.isAttribute =
                void 0);
          var t,
            r = et(),
            n =
              (((t = {})[r.ATTRIBUTE] = !0),
              (t[r.CLASS] = !0),
              (t[r.COMBINATOR] = !0),
              (t[r.COMMENT] = !0),
              (t[r.ID] = !0),
              (t[r.NESTING] = !0),
              (t[r.PSEUDO] = !0),
              (t[r.ROOT] = !0),
              (t[r.SELECTOR] = !0),
              (t[r.STRING] = !0),
              (t[r.TAG] = !0),
              (t[r.UNIVERSAL] = !0),
              t);
          function i(e) {
            return "object" == typeof e && n[e.type];
          }
          function o(e, t) {
            return i(t) && t.type === e;
          }
          var u = o.bind(null, r.ATTRIBUTE);
          e.isAttribute = u;
          var a = o.bind(null, r.CLASS);
          e.isClassName = a;
          var s = o.bind(null, r.COMBINATOR);
          e.isCombinator = s;
          var l = o.bind(null, r.COMMENT);
          e.isComment = l;
          var c = o.bind(null, r.ID);
          e.isIdentifier = c;
          var f = o.bind(null, r.NESTING);
          e.isNesting = f;
          var d = o.bind(null, r.PSEUDO);
          e.isPseudo = d;
          var h = o.bind(null, r.ROOT);
          e.isRoot = h;
          var p = o.bind(null, r.SELECTOR);
          e.isSelector = p;
          var D = o.bind(null, r.STRING);
          e.isString = D;
          var g = o.bind(null, r.TAG);
          e.isTag = g;
          var m = o.bind(null, r.UNIVERSAL);
          function v(e) {
            return (
              d(e) &&
              e.value &&
              (e.value.startsWith("::") ||
                ":before" === e.value.toLowerCase() ||
                ":after" === e.value.toLowerCase() ||
                ":first-letter" === e.value.toLowerCase() ||
                ":first-line" === e.value.toLowerCase())
            );
          }
          e.isUniversal = m;
        }),
        eC = T((e) => {
          "use strict";
          e.__esModule = !0;
          var t = et();
          Object.keys(t).forEach(function (r) {
            "default" === r ||
              "__esModule" === r ||
              (r in e && e[r] === t[r]) ||
              (e[r] = t[r]);
          });
          var r = ex();
          Object.keys(r).forEach(function (t) {
            "default" === t ||
              "__esModule" === t ||
              (t in e && e[t] === r[t]) ||
              (e[t] = r[t]);
          });
          var n = eE();
          Object.keys(n).forEach(function (t) {
            "default" === t ||
              "__esModule" === t ||
              (t in e && e[t] === n[t]) ||
              (e[t] = n[t]);
          });
        }),
        ek = T((e, t) => {
          "use strict";
          (e.__esModule = !0), (e.default = void 0);
          var r,
            n = (r = ew()) && r.__esModule ? r : { default: r },
            i = (function (e) {
              if (e && e.__esModule) return e;
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return { default: e };
              var t = o();
              if (t && t.has(e)) return t.get(e);
              var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                  u && (u.get || u.set)
                    ? Object.defineProperty(r, i, u)
                    : (r[i] = e[i]);
                }
              return (r.default = e), t && t.set(e, r), r;
            })(eC());
          function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return (
              (o = function () {
                return e;
              }),
              e
            );
          }
          var u = function (e) {
            return new n.default(e);
          };
          Object.assign(u, i),
            delete u.__esModule,
            (e.default = u),
            (t.exports = e.default);
        }),
        eS = T((e) => {
          "use strict";
          function t(e) {
            return e.replace(/\\,/g, "\\2c ");
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
        }),
        e_ = T((e, t) => {
          "use strict";
          t.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          };
        }),
        eT = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, { parseColor: () => f, formatColor: () => d });
          var t,
            r = (t = e_()) && t.__esModule ? t : { default: t },
            n = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
            i = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            o = /(?:\d+|\d*\.\d+)%?/,
            u = /(?:\s*,\s*|\s+)/,
            a = /\s*[,/]\s*/,
            s = /var\(--(?:[^ )]*?)\)/,
            l = RegExp(
              `^(rgb)a?\\(\\s*(${o.source}|${s.source})(?:${u.source}(${o.source}|${s.source}))?(?:${u.source}(${o.source}|${s.source}))?(?:${a.source}(${o.source}|${s.source}))?\\s*\\)$`
            ),
            c = RegExp(
              `^(hsl)a?\\(\\s*((?:${o.source})(?:deg|rad|grad|turn)?|${s.source})(?:${u.source}(${o.source}|${s.source}))?(?:${u.source}(${o.source}|${s.source}))?(?:${a.source}(${o.source}|${s.source}))?\\s*\\)$`
            );
          function f(e, { loose: t = !1 } = {}) {
            var o, u, a;
            if ("string" != typeof e) return null;
            if ("transparent" === (e = e.trim()))
              return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
            if (e in r.default)
              return {
                mode: "rgb",
                color: r.default[e].map((e) => e.toString()),
              };
            let s = e
              .replace(i, (e, t, r, n, i) =>
                ["#", t, t, r, r, n, n, i ? i + i : ""].join("")
              )
              .match(n);
            if (null !== s)
              return {
                mode: "rgb",
                color: [
                  parseInt(s[1], 16),
                  parseInt(s[2], 16),
                  parseInt(s[3], 16),
                ].map((e) => e.toString()),
                alpha: s[4] ? (parseInt(s[4], 16) / 255).toString() : void 0,
              };
            let f = null !== (a = e.match(l)) && void 0 !== a ? a : e.match(c);
            if (null === f) return null;
            let d = [f[2], f[3], f[4]].filter(Boolean).map((e) => e.toString());
            return (t || 3 === d.length) &&
              (!(d.length < 3) || d.some((e) => /^var\(.*?\)$/.test(e)))
              ? {
                  mode: f[1],
                  color: d,
                  alpha:
                    null === (o = f[5]) ||
                    void 0 === o ||
                    null === (u = o.toString) ||
                    void 0 === u
                      ? void 0
                      : u.call(o),
                }
              : null;
          }
          function d({ mode: e, color: t, alpha: r }) {
            return `${e}(${t.join(" ")}${void 0 !== r ? ` / ${r}` : ""})`;
          }
        }),
        eA = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, { withAlphaValue: () => r, default: () => n });
          var t = eT();
          function r(e, r, n) {
            if ("function" == typeof e) return e({ opacityValue: r });
            let i = (0, t.parseColor)(e, { loose: !0 });
            return null === i ? n : (0, t.formatColor)({ ...i, alpha: r });
          }
          function n({ color: e, property: r, variable: n }) {
            let i = [].concat(r);
            if ("function" == typeof e)
              return {
                [n]: "1",
                ...Object.fromEntries(
                  i.map((t) => [
                    t,
                    e({ opacityVariable: n, opacityValue: `var(${n})` }),
                  ])
                ),
              };
            let o = (0, t.parseColor)(e);
            return null === o
              ? Object.fromEntries(i.map((t) => [t, e]))
              : void 0 !== o.alpha
              ? Object.fromEntries(i.map((t) => [t, e]))
              : {
                  [n]: "1",
                  ...Object.fromEntries(
                    i.map((e) => [
                      e,
                      (0, t.formatColor)({ ...o, alpha: `var(${n})` }),
                    ])
                  ),
                };
          }
        }),
        eO = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, {
              pattern: () => i,
              withoutCapturing: () => o,
              any: () => u,
              optional: () => a,
              zeroOrMore: () => s,
              nestedBrackets: () =>
                function e(t, r, n = 1) {
                  return o([
                    l(t),
                    /[^\s]*/,
                    1 === n
                      ? `[^${l(t)}${l(r)}s]*`
                      : u([`[^${l(t)}${l(r)}s]*`, e(t, r, n - 1)]),
                    /[^\s]*/,
                    l(r),
                  ]);
                },
              escape: () => l,
            });
          var t = /[\\^$.*+?()[\]{}|]/g,
            r = RegExp(t.source);
          function n(e) {
            return (e = (e = Array.isArray(e) ? e : [e]).map((e) =>
              e instanceof RegExp ? e.source : e
            )).join("");
          }
          function i(e) {
            return RegExp(n(e), "g");
          }
          function o(e) {
            return RegExp(`(?:${n(e)})`, "g");
          }
          function u(e) {
            return `(?:${e.map(n).join("|")})`;
          }
          function a(e) {
            return `(?:${n(e)})?`;
          }
          function s(e) {
            return `(?:${n(e)})*`;
          }
          function l(e) {
            return e && r.test(e) ? e.replace(t, "\\$&") : e || "";
          }
        }),
        eB = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "splitAtTopLevelOnly", {
              enumerable: !0,
              get: () => n,
            });
          var t = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(void 0);
            if (n && n.has(e)) return n.get(e);
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
              if (
                "default" !== u &&
                Object.prototype.hasOwnProperty.call(e, u)
              ) {
                var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                a && (a.get || a.set)
                  ? Object.defineProperty(i, u, a)
                  : (i[u] = e[u]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(eO());
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              n = new WeakMap();
            return (r = function (e) {
              return e ? n : t;
            })(e);
          }
          function* n(e, r) {
            let n = RegExp(`[(){}\\[\\]${t.escape(r)}]`, "g"),
              i = 0,
              o = 0,
              u = !1,
              a = 0,
              s = 0,
              l = r.length;
            for (let t of e.matchAll(n)) {
              let n = t[0] === r[a],
                c = a === l - 1,
                f = n && c;
              "(" === t[0] && i++,
                ")" === t[0] && i--,
                "[" === t[0] && i++,
                "]" === t[0] && i--,
                "{" === t[0] && i++,
                "}" === t[0] && i--,
                n && 0 === i && (0 === s && (s = t.index), a++),
                f &&
                  0 === i &&
                  ((u = !0), yield e.substring(o, s), (o = s + l)),
                a === l && ((a = 0), (s = 0));
            }
            u ? yield e.substring(o) : yield e;
          }
        }),
        eP = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, {
              parseBoxShadowValue: () => o,
              formatBoxShadowValue: () => u,
            });
          var t = eB(),
            r = new Set(["inset", "inherit", "initial", "revert", "unset"]),
            n = /\ +(?![^(]*\))/g,
            i = /^-?(\d+|\.\d+)(.*?)$/g;
          function o(e) {
            return Array.from((0, t.splitAtTopLevelOnly)(e, ",")).map((e) => {
              let t = e.trim(),
                o = { raw: t },
                u = t.split(n),
                a = new Set();
              for (let e of u)
                (i.lastIndex = 0),
                  !a.has("KEYWORD") && r.has(e)
                    ? ((o.keyword = e), a.add("KEYWORD"))
                    : i.test(e)
                    ? a.has("X")
                      ? a.has("Y")
                        ? a.has("BLUR")
                          ? a.has("SPREAD") || ((o.spread = e), a.add("SPREAD"))
                          : ((o.blur = e), a.add("BLUR"))
                        : ((o.y = e), a.add("Y"))
                      : ((o.x = e), a.add("X"))
                    : o.color
                    ? (o.unknown || (o.unknown = []), o.unknown.push(e))
                    : (o.color = e);
              return (o.valid = void 0 !== o.x && void 0 !== o.y), o;
            });
          }
          function u(e) {
            return e
              .map((e) =>
                e.valid
                  ? [e.keyword, e.x, e.y, e.blur, e.spread, e.color]
                      .filter(Boolean)
                      .join(" ")
                  : e.raw
              )
              .join(", ");
          }
        }),
        eI = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, {
              normalize: () => u,
              url: () => a,
              number: () => s,
              percentage: () => l,
              length: () => f,
              lineWidth: () => h,
              shadow: () => p,
              color: () => D,
              image: () => g,
              gradient: () => v,
              position: () => y,
              familyName: () => F,
              genericName: () => x,
              absoluteSize: () => C,
              relativeSize: () => S,
            });
          var t = eT(),
            r = eP(),
            n = ["min", "max", "clamp", "calc"],
            i = /,(?![^(]*\))/g,
            o = /_(?![^(]*\))/g;
          function u(e, t = !0) {
            return e.includes("url(")
              ? e
                  .split(/(url\(.*?\))/g)
                  .filter(Boolean)
                  .map((e) => (/^url\(.*?\)$/.test(e) ? e : u(e, !1)))
                  .join("")
              : ((e = e
                  .replace(/([^\\])_+/g, (e, t) => t + " ".repeat(e.length - 1))
                  .replace(/^_/g, " ")
                  .replace(/\\_/g, "_")),
                t && (e = e.trim()),
                (e = e.replace(/(calc|min|max|clamp)\(.+\)/g, (e) =>
                  e.replace(
                    /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
                    "$1 $2 "
                  )
                )));
          }
          function a(e) {
            return e.startsWith("url(");
          }
          function s(e) {
            return (
              !isNaN(Number(e)) || n.some((t) => RegExp(`^${t}\\(.+?`).test(e))
            );
          }
          function l(e) {
            return e
              .split(o)
              .every(
                (e) =>
                  /%$/g.test(e) || n.some((t) => RegExp(`^${t}\\(.+?%`).test(e))
              );
          }
          var c = "(?:cm|mm|Q|in|pc|pt|px|em|ex|ch|rem|lh|vw|vh|vmin|vmax)";
          function f(e) {
            return e
              .split(o)
              .every(
                (e) =>
                  "0" === e ||
                  RegExp(`${c}$`).test(e) ||
                  n.some((t) => RegExp(`^${t}\\(.+?${c}`).test(e))
              );
          }
          var d = new Set(["thin", "medium", "thick"]);
          function h(e) {
            return d.has(e);
          }
          function p(e) {
            for (let t of (0, r.parseBoxShadowValue)(u(e)))
              if (!t.valid) return !1;
            return !0;
          }
          function D(e) {
            let r = 0;
            return (
              !!e
                .split(o)
                .every(
                  (e) =>
                    !!(e = u(e)).startsWith("var(") ||
                    (null !== (0, t.parseColor)(e, { loose: !0 }) && (r++, !0))
                ) && r > 0
            );
          }
          function g(e) {
            let t = 0;
            return (
              !!e
                .split(i)
                .every(
                  (e) =>
                    !!(e = u(e)).startsWith("var(") ||
                    (!!(
                      a(e) ||
                      v(e) ||
                      ["element(", "image(", "cross-fade(", "image-set("].some(
                        (t) => e.startsWith(t)
                      )
                    ) &&
                      (t++, !0))
                ) && t > 0
            );
          }
          var m = new Set([
            "linear-gradient",
            "radial-gradient",
            "repeating-linear-gradient",
            "repeating-radial-gradient",
            "conic-gradient",
          ]);
          function v(e) {
            for (let t of ((e = u(e)), m)) if (e.startsWith(`${t}(`)) return !0;
            return !1;
          }
          var b = new Set(["center", "top", "right", "bottom", "left"]);
          function y(e) {
            let t = 0;
            return (
              !!e
                .split(o)
                .every(
                  (e) =>
                    !!(e = u(e)).startsWith("var(") ||
                    (!!(b.has(e) || f(e) || l(e)) && (t++, !0))
                ) && t > 0
            );
          }
          function F(e) {
            let t = 0;
            return (
              !!e
                .split(i)
                .every(
                  (e) =>
                    !!(e = u(e)).startsWith("var(") ||
                    (!(
                      (e.includes(" ") && !/(['"])([^"']+)\1/g.test(e)) ||
                      /^\d/g.test(e)
                    ) &&
                      (t++, !0))
                ) && t > 0
            );
          }
          var w = new Set([
            "serif",
            "sans-serif",
            "monospace",
            "cursive",
            "fantasy",
            "system-ui",
            "ui-serif",
            "ui-sans-serif",
            "ui-monospace",
            "ui-rounded",
            "math",
            "emoji",
            "fangsong",
          ]);
          function x(e) {
            return w.has(e);
          }
          var E = new Set([
            "xx-small",
            "x-small",
            "small",
            "medium",
            "large",
            "x-large",
            "x-large",
            "xxx-large",
          ]);
          function C(e) {
            return E.has(e);
          }
          var k = new Set(["larger", "smaller"]);
          function S(e) {
            return k.has(e);
          }
        }),
        eM = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, {
              updateAllClasses: () => a,
              asValue: () => l,
              parseColorFormat: () => f,
              asColor: () => d,
              asLookupValue: () => h,
              coerceValue: () => m,
            });
          var t = u(ek()),
            r = u(eS()),
            n = eA(),
            i = eI(),
            o = u(L());
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function a(e, n) {
            return (0, t.default)((e) => {
              e.walkClasses((e) => {
                let t = n(e.value);
                (e.value = t),
                  e.raws &&
                    e.raws.value &&
                    (e.raws.value = (0, r.default)(e.raws.value));
              });
            }).processSync(e);
          }
          function s(e, t) {
            if (!c(e)) return;
            let r = e.slice(1, -1);
            if (t(r)) return (0, i.normalize)(r);
          }
          function l(e, t = {}, { validate: r = () => !0 } = {}) {
            var n;
            let i = null === (n = t.values) || void 0 === n ? void 0 : n[e];
            return void 0 !== i
              ? i
              : t.supportsNegativeValues && e.startsWith("-")
              ? (function (e, t = {}, r) {
                  let n = t[e];
                  if (void 0 !== n) return (0, o.default)(n);
                  if (c(e)) {
                    let t = s(e, r);
                    return void 0 === t ? void 0 : (0, o.default)(t);
                  }
                })(e.slice(1), t.values, r)
              : s(e, r);
          }
          function c(e) {
            return e.startsWith("[") && e.endsWith("]");
          }
          function f(e) {
            return "string" == typeof e && e.includes("<alpha-value>")
              ? ({ opacityValue: t = 1 }) => e.replace("<alpha-value>", t)
              : e;
          }
          function d(e, t = {}, { tailwindConfig: r = {} } = {}) {
            var o, u, a, s, d, h;
            let p;
            if (
              (null === (o = t.values) || void 0 === o ? void 0 : o[e]) !==
              void 0
            )
              return f(null === (u = t.values) || void 0 === u ? void 0 : u[e]);
            let [D, g] =
              -1 === (p = e.lastIndexOf("/")) || p === e.length - 1
                ? [e]
                : [e.slice(0, p), e.slice(p + 1)];
            if (void 0 !== g) {
              let e =
                null !==
                  (h =
                    null === (a = t.values) || void 0 === a ? void 0 : a[D]) &&
                void 0 !== h
                  ? h
                  : c(D)
                  ? D.slice(1, -1)
                  : void 0;
              return void 0 === e
                ? void 0
                : ((e = f(e)),
                  c(g)
                    ? (0, n.withAlphaValue)(e, g.slice(1, -1))
                    : (null === (s = r.theme) ||
                      void 0 === s ||
                      null === (d = s.opacity) ||
                      void 0 === d
                        ? void 0
                        : d[g]) === void 0
                    ? void 0
                    : (0, n.withAlphaValue)(e, r.theme.opacity[g]));
            }
            return l(e, t, { validate: i.color });
          }
          function h(e, t = {}) {
            var r;
            return null === (r = t.values) || void 0 === r ? void 0 : r[e];
          }
          function p(e) {
            return (t, r) => l(t, r, { validate: e });
          }
          var D = {
              any: l,
              color: d,
              url: p(i.url),
              image: p(i.image),
              length: p(i.length),
              percentage: p(i.percentage),
              position: p(i.position),
              lookup: h,
              "generic-name": p(i.genericName),
              "family-name": p(i.familyName),
              number: p(i.number),
              "line-width": p(i.lineWidth),
              "absolute-size": p(i.absoluteSize),
              "relative-size": p(i.relativeSize),
              shadow: p(i.shadow),
            },
            g = Object.keys(D);
          function m(e, t, r, n) {
            if (c(t)) {
              let e;
              let n = t.slice(1, -1),
                [i, o] =
                  -1 === (e = n.indexOf(":"))
                    ? [void 0, n]
                    : [n.slice(0, e), n.slice(e + 1)];
              if (/^[\w-_]+$/g.test(i)) {
                if (void 0 !== i && !g.includes(i)) return [];
              } else o = n;
              if (o.length > 0 && g.includes(i)) return [l(`[${o}]`, r), i];
            }
            for (let i of [].concat(e)) {
              let e = D[i](t, r, { tailwindConfig: n });
              if (void 0 !== e) return [e, i];
            }
            return [];
          }
        }),
        eL = T((e) => {
          "use strict";
          function t(e) {
            return "function" == typeof e ? e({}) : e;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => t,
            });
        }),
        eR = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => y,
            });
          var t = p(L()),
            r = p(R()),
            n = p($()),
            i = p(j()),
            o = p(U()),
            u = G(),
            a = q(),
            s = H(),
            l = p(Y()),
            c = V(),
            f = eM(),
            d = eA(),
            h = p(eL());
          function p(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function D(e) {
            return "function" == typeof e;
          }
          function g(e) {
            return "object" == typeof e && null !== e;
          }
          function m(e, ...t) {
            let r = t.pop();
            for (let n of t)
              for (let t in n) {
                let i = r(e[t], n[t]);
                void 0 === i
                  ? g(e[t]) && g(n[t])
                    ? (e[t] = m(e[t], n[t], r))
                    : (e[t] = n[t])
                  : (e[t] = i);
              }
            return e;
          }
          var v = {
            colors: o.default,
            negative: (e) =>
              Object.keys(e)
                .filter((t) => "0" !== e[t])
                .reduce((r, n) => {
                  let i = (0, t.default)(e[n]);
                  return void 0 !== i && (r[`-${n}`] = i), r;
                }, {}),
            breakpoints: (e) =>
              Object.keys(e)
                .filter((t) => "string" == typeof e[t])
                .reduce((t, r) => ({ ...t, [`screen-${r}`]: e[r] }), {}),
          };
          function b(e, t) {
            return Array.isArray(e) && g(e[0])
              ? e.concat(t)
              : Array.isArray(t) && g(t[0]) && g(e)
              ? [e, ...t]
              : Array.isArray(t)
              ? t
              : void 0;
          }
          function y(e) {
            var t, o, p, g;
            let y;
            let F = [
              ...(function e(t) {
                let r = [];
                return (
                  t.forEach((t) => {
                    var n;
                    r = [...r, t];
                    let i =
                      null !== (n = null == t ? void 0 : t.plugins) &&
                      void 0 !== n
                        ? n
                        : [];
                    0 !== i.length &&
                      i.forEach((t) => {
                        var n;
                        t.__isOptionsFunction && (t = t()),
                          (r = [
                            ...r,
                            ...e([
                              null !== (n = null == t ? void 0 : t.config) &&
                              void 0 !== n
                                ? n
                                : {},
                            ]),
                          ]);
                      });
                  }),
                  r
                );
              })(e),
              {
                prefix: "",
                important: !1,
                separator: ":",
                variantOrder: i.default.variantOrder,
              },
            ];
            return (0, s.normalizeConfig)(
              (0, u.defaults)(
                {
                  theme:
                    ((p = (function ({ extend: e, ...t }) {
                      return m(t, e, (e, t) =>
                        D(e) || t.some(D)
                          ? (r, n) =>
                              m(
                                {},
                                ...[e, ...t].map((e) =>
                                  (function (e, ...t) {
                                    return D(e) ? e(...t) : e;
                                  })(e, r, n)
                                ),
                                b
                              )
                          : m({}, e, ...t, b)
                      );
                    })({
                      ...(g = F.map((e) =>
                        null !== (t = null == e ? void 0 : e.theme) &&
                        void 0 !== t
                          ? t
                          : {}
                      )).reduce((e, t) => (0, u.defaults)(e, t), {}),
                      extend: g.reduce(
                        (e, { extend: t }) =>
                          m(e, t, (e, t) =>
                            void 0 === e
                              ? [t]
                              : Array.isArray(e)
                              ? [t, ...e]
                              : [t, e]
                          ),
                        {}
                      ),
                    })),
                    Object.assign(
                      (y = (e, t) => {
                        for (let t of (function* (e) {
                          let t = (0, a.toPath)(e);
                          if (0 === t.length || (yield t, Array.isArray(e)))
                            return;
                          let r = e.match(/^(.*?)\s*\/\s*([^/]+)$/);
                          if (null !== r) {
                            let [, e, t] = r,
                              n = (0, a.toPath)(e);
                            (n.alpha = t), yield n;
                          }
                        })(e)) {
                          let e = 0,
                            r = p;
                          for (; null != r && e < t.length; )
                            r =
                              D((r = r[t[e++]])) &&
                              (void 0 === t.alpha || e <= t.length - 1)
                                ? r(y, v)
                                : r;
                          if (void 0 !== r) {
                            if (void 0 !== t.alpha) {
                              let e = (0, f.parseColorFormat)(r);
                              return (0, d.withAlphaValue)(
                                e,
                                t.alpha,
                                (0, h.default)(e)
                              );
                            }
                            return (0, l.default)(r) ? (0, c.cloneDeep)(r) : r;
                          }
                        }
                        return t;
                      }),
                      { theme: y, ...v }
                    ),
                    Object.keys(p).reduce(
                      (e, t) => ((e[t] = D(p[t]) ? p[t](y, v) : p[t]), e),
                      {}
                    )),
                  corePlugins: [...F.map((e) => e.corePlugins)].reduceRight(
                    (e, t) =>
                      D(t) ? t({ corePlugins: e }) : (0, n.default)(t, e),
                    r.default
                  ),
                  plugins: [
                    ...e.map((e) =>
                      null !== (o = null == e ? void 0 : e.plugins) &&
                      void 0 !== o
                        ? o
                        : []
                    ),
                  ].reduceRight((e, t) => [...e, ...t], []),
                },
                ...F
              )
            );
          }
        }),
        e$ = {};
      A(e$, { default: () => ej });
      var ej,
        eN = _(() => {
          ej = { yellow: (e) => e };
        }),
        eW = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (e, t) {
              for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            })(e, {
              flagEnabled: () => u,
              issueFlagNotices: () => s,
              default: () => l,
            });
          var t = n((eN(), B(e$))),
            r = n((z(), B(N)));
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = { optimizeUniversalDefaults: !1 },
            o = {
              future: [
                "hoverOnlyWhenSupported",
                "respectDefaultRingColorOpacity",
              ],
              experimental: ["optimizeUniversalDefaults", "matchVariant"],
            };
          function u(e, t) {
            var r, n, u, a, s, l;
            return o.future.includes(t)
              ? "all" === e.future ||
                  (null !==
                    (u =
                      null !==
                        (n =
                          null == e || null === (r = e.future) || void 0 === r
                            ? void 0
                            : r[t]) && void 0 !== n
                        ? n
                        : i[t]) &&
                    void 0 !== u &&
                    u)
              : !!o.experimental.includes(t) &&
                  ("all" === e.experimental ||
                    (null !==
                      (l =
                        null !==
                          (s =
                            null == e ||
                            null === (a = e.experimental) ||
                            void 0 === a
                              ? void 0
                              : a[t]) && void 0 !== s
                          ? s
                          : i[t]) &&
                      void 0 !== l &&
                      l));
          }
          function a(e) {
            var t;
            return "all" === e.experimental
              ? o.experimental
              : Object.keys(
                  null !== (t = null == e ? void 0 : e.experimental) &&
                    void 0 !== t
                    ? t
                    : {}
                ).filter(
                  (t) => o.experimental.includes(t) && e.experimental[t]
                );
          }
          function s(e) {
            if (void 0 === F.env.JEST_WORKER_ID && a(e).length > 0) {
              let n = a(e)
                .map((e) => t.default.yellow(e))
                .join(", ");
              r.default.warn("experimental-flags-enabled", [
                `You have enabled experimental features: ${n}`,
                "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.",
              ]);
            }
          }
          var l = o;
        }),
        ez = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () =>
                function e(t) {
                  var i;
                  let o = (
                      null !== (i = null == t ? void 0 : t.presets) &&
                      void 0 !== i
                        ? i
                        : [r.default]
                    )
                      .slice()
                      .reverse()
                      .flatMap((t) => e("function" == typeof t ? t() : t)),
                    u = {
                      respectDefaultRingColorOpacity: {
                        theme: { ringColor: { DEFAULT: "#3b82f67f" } },
                      },
                    },
                    a = Object.keys(u)
                      .filter((e) => (0, n.flagEnabled)(t, e))
                      .map((e) => u[e]);
                  return [t, ...a, ...o];
                },
            });
          var t,
            r = (t = j()) && t.__esModule ? t : { default: t },
            n = eW();
        }),
        eU = T((e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "default", {
              enumerable: !0,
              get: () => i,
            });
          var t = n(eR()),
            r = n(ez());
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(...e) {
            let [, ...n] = (0, r.default)(e[0]);
            return (0, t.default)([...e, ...n]);
          }
        }),
        eG = T((e, t) => {
          var r = eU();
          t.exports = (r.__esModule ? r : { default: r }).default;
        }),
        eq = null;
      async function eH() {
        return (
          to ||
          (eq
            ? await eq
            : ((eq = Promise.resolve()
                .then(() => (M(), P))
                .then((e) => e.getYogaModule())
                .then((e) => (to = e))),
              await eq,
              (eq = null)),
          to)
        );
      }
      var eY = (e, t) => () => (
          t || e((t = { exports: {} }).exports, t), t.exports
        ),
        eV = eY((e, t) => {
          t.exports = [
            "em",
            "ex",
            "ch",
            "rem",
            "vh",
            "vw",
            "vmin",
            "vmax",
            "px",
            "mm",
            "cm",
            "in",
            "pt",
            "pc",
            "mozmm",
          ];
        }),
        eX = eY((e, t) => {
          t.exports = ["deg", "grad", "rad", "turn"];
        }),
        eQ = eY((e, t) => {
          t.exports = ["dpi", "dpcm", "dppx"];
        }),
        eJ = eY((e, t) => {
          t.exports = ["Hz", "kHz"];
        }),
        eK = eY((e, t) => {
          t.exports = ["s", "ms"];
        }),
        eZ = eV(),
        e0 = eX(),
        e1 = eQ(),
        e2 = eJ(),
        e3 = eK();
      function e6(e) {
        if (/\.\D?$/.test(e))
          throw Error("The dot should be followed by a number");
        if (/^[+-]{2}/.test(e)) throw Error("Only one leading +/- is allowed");
        if (((t = e.match(/\./g)) ? t.length : 0) > 1)
          throw Error("Only one dot is allowed");
        if (/%$/.test(e)) {
          (this.type = "percentage"), (this.value = e8(e)), (this.unit = "%");
          return;
        }
        var t,
          r = (function (e) {
            var t = e.match(/\D+$/),
              r = t && t[0];
            if (r && -1 === e4.indexOf(r)) throw Error("Invalid unit: " + r);
            return r;
          })(e);
        if (!r) {
          (this.type = "number"), (this.value = e8(e));
          return;
        }
        (this.type = e7[r] || "length"),
          (this.value = e8(e.substr(0, e.length - r.length))),
          (this.unit = r);
      }
      function e5(e) {
        return new e6(e);
      }
      function e8(e) {
        var t = parseFloat(e);
        if (isNaN(t)) throw Error("Invalid number: " + e);
        return t;
      }
      (e6.prototype.valueOf = function () {
        return this.value;
      }),
        (e6.prototype.toString = function () {
          return this.value + (this.unit || "");
        });
      var e4 = [].concat(e0, e2, eZ, e1, e3),
        e7 = Object.assign(
          e9(e0, "angle"),
          e9(e2, "frequency"),
          e9(e1, "resolution"),
          e9(e3, "time")
        );
      function e9(e, t) {
        return Object.fromEntries(e.map((e) => [e, t]));
      }
      function te(e) {
        let t = typeof e;
        return !(
          "number" === t ||
          "bigint" === t ||
          "string" === t ||
          "boolean" === t
        );
      }
      function tt(e, t, r, n, i = !1) {
        if ("number" == typeof e) return e;
        try {
          if (((e = e.trim()), /[ /\(,]/.test(e))) return;
          if (e === String(+e)) return +e;
          let o = new e5(e);
          if ("length" === o.type)
            switch (o.unit) {
              case "em":
                return o.value * t;
              case "rem":
                return 16 * o.value;
              case "vw":
                return ~~((o.value * n._viewportWidth) / 100);
              case "vh":
                return ~~((o.value * n._viewportHeight) / 100);
              default:
                return o.value;
            }
          else {
            if ("angle" === o.type) return tr(e);
            if ("percentage" === o.type && i) return (o.value / 100) * r;
          }
        } catch {}
      }
      function tr(e) {
        let t = new e5(e);
        switch (t.unit) {
          case "deg":
            return t.value;
          case "rad":
            return (180 * t.value) / Math.PI;
          case "turn":
            return 360 * t.value;
          case "grad":
            return 0.9 * t.value;
        }
      }
      function tn(e, t) {
        return [
          e[0] * t[0] + e[2] * t[1],
          e[1] * t[0] + e[3] * t[1],
          e[0] * t[2] + e[2] * t[3],
          e[1] * t[2] + e[3] * t[3],
          e[0] * t[4] + e[2] * t[5] + e[4],
          e[1] * t[4] + e[3] * t[5] + e[5],
        ];
      }
      function ti(e, t, r, n) {
        let i = t[e];
        if (typeof i > "u") {
          if (n && "u" > typeof e)
            throw Error(
              `Invalid value for CSS property "${n}". Allowed values: ${Object.keys(
                t
              )
                .map((e) => `"${e}"`)
                .join(" | ")}. Received: "${e}".`
            );
          i = r;
        }
        return i;
      }
      var to,
        tu,
        ta,
        ts = [32, 160, 4961, 65792, 65793, 4153, 4241, 10].map((e) =>
          String.fromCodePoint(e)
        );
      function tl(e, t, r) {
        if (!tu || !ta) {
          if (!("u" > typeof Intl && "Segmenter" in Intl))
            throw Error(
              "Intl.Segmenter does not exist, please use import a polyfill."
            );
          (tu = new Intl.Segmenter(r, { granularity: "word" })),
            (ta = new Intl.Segmenter(r, { granularity: "grapheme" }));
        }
        if ("grapheme" === t) return [...ta.segment(e)].map((e) => e.segment);
        {
          let t = [...tu.segment(e)].map((e) => e.segment),
            r = [],
            n = 0;
          for (; n < t.length; ) {
            let e = t[n];
            if ("\xa0" == e) {
              let e = 0 === n ? "" : r.pop(),
                i = n === t.length - 1 ? "" : t[n + 1];
              r.push(e + "\xa0" + i), (n += 2);
            } else r.push(e), n++;
          }
          return r;
        }
      }
      function tc(e, t, r) {
        let n = "";
        for (let [e, r] of Object.entries(t))
          "u" > typeof r && (n += ` ${e}="${r}"`);
        return r ? `<${e}${n}>${r}</${e}>` : `<${e}${n}/>`;
      }
      function tf(e) {
        return e ? e.split(/[, ]/).filter(Boolean).map(Number) : null;
      }
      function td(e) {
        return "string" == typeof e;
      }
      var th = (e) => e.replaceAll(/([A-Z])/g, (e, t) => `-${t.toLowerCase()}`);
      function tp(e, t = ",") {
        let r = [],
          n = 0,
          i = 0;
        t = new RegExp(t);
        for (let o = 0; o < e.length; o++)
          "(" === e[o] ? i++ : ")" === e[o] && i--,
            0 === i &&
              t.test(e[o]) &&
              (r.push(e.slice(n, o).trim()), (n = o + 1));
        return r.push(e.slice(n).trim()), r;
      }
      var tD = "image/apng",
        tg = "image/png",
        tm = "image/jpeg",
        tv = "image/gif",
        tb = "image/svg+xml";
      function ty(e) {
        let t = new DataView(e),
          r = 4,
          n = t.byteLength;
        for (; r < n; ) {
          let e = t.getUint16(r, !1);
          if (e > n) break;
          let i = t.getUint8(e + 1 + r);
          if (192 === i || 193 === i || 194 === i)
            return [t.getUint16(e + 7 + r, !1), t.getUint16(e + 5 + r, !1)];
          r += e + 2;
        }
        throw TypeError("Invalid JPEG");
      }
      function tF(e) {
        let t = new Uint8Array(e.slice(6, 10));
        return [t[0] | (t[1] << 8), t[2] | (t[3] << 8)];
      }
      function tw(e) {
        let t = new DataView(e);
        return [t.getUint16(18, !1), t.getUint16(22, !1)];
      }
      var tx = (function (e = 20) {
          let t = new Map();
          return {
            set: function (r, n) {
              if (t.size >= e) {
                let e = t.keys().next().value;
                t.delete(e);
              }
              t.set(r, n);
            },
            get: function (e) {
              if (!t.has(e)) return;
              let r = t.get(e);
              return t.delete(e), t.set(e, r), r;
            },
            clear: function () {
              t.clear();
            },
          };
        })(100),
        tE = new Map(),
        tC = [tg, tD, tm, tv, tb];
      function tk(e, t) {
        let r = t.match(/<svg[^>]*>/)[0],
          n = r.match(/viewBox=['"](.+)['"]/),
          i = n ? tf(n[1]) : null,
          o = r.match(/width=['"](\d*\.\d+|\d+)['"]/),
          u = r.match(/height=['"](\d*\.\d+|\d+)['"]/);
        if (!i && (!o || !u))
          throw Error(`Failed to parse SVG from ${e}: missing "viewBox"`);
        let a = i ? [i[2], i[3]] : [+o[1], +u[1]],
          s = a[0] / a[1];
        return o && u
          ? [+o[1], +u[1]]
          : o
          ? [+o[1], +o[1] / s]
          : u
          ? [+u[1] * s, +u[1]]
          : [a[0], a[1]];
      }
      function tS(e) {
        var t;
        let r,
          n =
            ((t = new Uint8Array(e)),
            [255, 216, 255].every((e, r) => t[r] === e)
              ? tm
              : [137, 80, 78, 71, 13, 10, 26, 10].every((e, r) => t[r] === e)
              ? !(function (e) {
                  let t = new DataView(e.buffer),
                    r,
                    n,
                    i = 8,
                    o = !1;
                  for (; !o && "IEND" !== r && i < e.length; )
                    (n = t.getUint32(i)),
                      (o =
                        "acTL" ===
                        (r = String.fromCharCode(...e.subarray(i + 4, i + 8)))),
                      (i += 12 + n);
                  return o;
                })(t)
                ? tg
                : tD
              : [71, 73, 70, 56].every((e, r) => t[r] === e)
              ? tv
              : [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80].every(
                  (e, r) => !e || t[r] === e
                )
              ? "image/webp"
              : [60, 63, 120, 109, 108].every((e, r) => t[r] === e)
              ? tb
              : [0, 0, 0, 0, 102, 116, 121, 112, 97, 118, 105, 102].every(
                  (e, r) => !e || t[r] === e
                )
              ? "image/avif"
              : null);
        switch (n) {
          case tg:
          case tD:
            r = tw(e);
            break;
          case tv:
            r = tF(e);
            break;
          case tm:
            r = ty(e);
        }
        if (!tC.includes(n))
          throw Error(`Unsupported image type: ${n || "unknown"}`);
        return [
          `data:${n};base64,${(function (e) {
            let t = "",
              r = new Uint8Array(e);
            for (let e = 0; e < r.byteLength; e++)
              t += String.fromCharCode(r[e]);
            return btoa(t);
          })(e)}`,
          r,
        ];
      }
      async function t_(e) {
        if (!e) throw Error("Image source is not provided.");
        if ("object" == typeof e) {
          let [t, r] = tS(e);
          return [t, ...r];
        }
        if (
          (((e.startsWith('"') && e.endsWith('"')) ||
            (e.startsWith("'") && e.endsWith("'"))) &&
            (e = e.slice(1, -1)),
          typeof window > "u" &&
            !e.startsWith("http") &&
            !e.startsWith("data:"))
        )
          throw Error(`Image source must be an absolute URL: ${e}`);
        if (e.startsWith("data:")) {
          let t;
          try {
            t =
              /data:(?<imageType>[a-z/+]+)(;[^;=]+=[^;=]+)*?(;(?<encodingType>[^;,]+))?,(?<dataString>.*)/g.exec(
                e
              ).groups;
          } catch {
            return (
              console.warn("Image data URI resolved without size:" + e), [e]
            );
          }
          let { imageType: r, encodingType: n, dataString: i } = t;
          if (r === tb) {
            let t =
                "base64" === n
                  ? atob(i)
                  : decodeURIComponent(i.replace(/ /g, "%20")),
              r = "base64" === n ? e : `data:image/svg+xml;base64,${btoa(t)}`,
              o = tk(e, t);
            return tx.set(e, [r, ...o]), [r, ...o];
          }
          if ("base64" !== n)
            return (
              console.warn("Image data URI resolved without size:" + e),
              tx.set(e, [e]),
              [e]
            );
          {
            let t,
              n = (function (e) {
                let t = atob(e),
                  r = t.length,
                  n = new Uint8Array(r);
                for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                return n.buffer;
              })(i);
            switch (r) {
              case tg:
              case tD:
                t = tw(n);
                break;
              case tv:
                t = tF(n);
                break;
              case tm:
                t = ty(n);
            }
            return tx.set(e, [e, ...t]), [e, ...t];
          }
        }
        if (!globalThis.fetch)
          throw Error("`fetch` is required to be polyfilled to load images.");
        if (tE.has(e)) return tE.get(e);
        let t = tx.get(e);
        if (t) return t;
        let r = e,
          n = fetch(r)
            .then((e) => {
              let t = e.headers.get("content-type");
              return "image/svg+xml" === t || "application/svg+xml" === t
                ? e.text()
                : e.arrayBuffer();
            })
            .then((e) => {
              if ("string" == typeof e)
                try {
                  let t = `data:image/svg+xml;base64,${btoa(e)}`,
                    n = tk(r, e);
                  return [t, ...n];
                } catch (e) {
                  throw Error(`Failed to parse SVG image: ${e.message}`);
                }
              let [t, n] = tS(e);
              return [t, ...n];
            })
            .then((e) => (tx.set(r, e), e))
            .catch(
              (e) => (
                console.error(`Can't load image ${r}: ` + e.message),
                tx.set(r, []),
                []
              )
            );
        return tE.set(r, n), n;
      }
      var tT = {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          href: "href",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDasharray: "stroke-dasharray",
          strokeDashoffset: "stroke-dashoffset",
          strokeLinecap: "stroke-linecap",
          strokeLinejoin: "stroke-linejoin",
          strokeMiterlimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          xlinkActuate: "xlink:actuate",
          xlinkArcrole: "xlink:arcrole",
          xlinkHref: "xlink:href",
          xlinkRole: "xlink:role",
          xlinkShow: "xlink:show",
          xlinkTitle: "xlink:title",
          xlinkType: "xlink:type",
          xmlBase: "xml:base",
          xmlLang: "xml:lang",
          xmlSpace: "xml:space",
          xmlnsXlink: "xmlns:xlink",
        },
        tA = /[\r\n%#()<>?[\\\]^`{|}"']/g;
      async function tO(e) {
        let t = new Set(),
          r = (e) => {
            if (e && te(e)) {
              if (Array.isArray(e)) {
                e.forEach((e) => r(e));
                return;
              }
              "object" == typeof e &&
                ("image" === e.type
                  ? t.has(e.props.href) || t.add(e.props.href)
                  : "img" === e.type &&
                    (t.has(e.props.src) || t.add(e.props.src))),
                Array.isArray(e.props.children)
                  ? e.props.children.map((e) => r(e))
                  : r(e.props.children);
            }
          };
        return r(e), Promise.all(Array.from(t).map((e) => t_(e)));
      }
      async function tB(e, t) {
        let {
          viewBox: r,
          viewbox: n,
          width: i,
          height: o,
          className: u,
          style: a,
          children: s,
          ...l
        } = e.props || {};
        (r ||= n), (l.xmlns = "http://www.w3.org/2000/svg");
        let c = (null == a ? void 0 : a.color) || t,
          f = tf(r),
          d = f ? f[3] / f[2] : null;
        return (
          (i = i || (d && o) ? o / d : null),
          (o = o || (d && i) ? i * d : null),
          (l.width = i),
          (l.height = o),
          r && (l.viewBox = r),
          `data:image/svg+xml;utf8,${`<svg ${Object.entries(l)
            .map(
              ([e, t]) => (
                "string" == typeof t &&
                  "currentcolor" === t.toLowerCase() &&
                  (t = c),
                ` ${tT[e] || e}="${t}"`
              )
            )
            .join("")}>${(function e(t, r) {
            if (!t) return "";
            if (Array.isArray(t)) return t.map((t) => e(t, r)).join("");
            if ("object" != typeof t) return String(t);
            let n = t.type;
            if ("text" === n)
              throw Error(
                "<text> nodes are not currently supported, please convert them to <path>"
              );
            let { children: i, style: o, ...u } = t.props || {},
              a = (null == o ? void 0 : o.color) || r,
              s = `${Object.entries(u)
                .map(
                  ([e, t]) => (
                    "string" == typeof t &&
                      "currentcolor" === t.toLowerCase() &&
                      (t = a),
                    "href" === e && "image" === n
                      ? ` ${tT[e] || e}="${tx.get(t)[0]}"`
                      : ` ${tT[e] || e}="${t}"`
                  )
                )
                .join("")}`,
              l = o
                ? ` style="${Object.entries(o)
                    .map(([e, t]) => `${th(e)}:${t}`)
                    .join(";")}"`
                : "";
            return `<${n}${s}${l}>${e(i, a)}</${n}>`;
          })(s, c)}</svg>`.replace(tA, encodeURIComponent)}`
        );
      }
      var tP = "flex",
        tI = {
          p: { display: tP, marginTop: "1em", marginBottom: "1em" },
          div: { display: tP },
          blockquote: {
            display: tP,
            marginTop: "1em",
            marginBottom: "1em",
            marginLeft: 40,
            marginRight: 40,
          },
          center: { display: tP, textAlign: "center" },
          hr: {
            display: tP,
            marginTop: "0.5em",
            marginBottom: "0.5em",
            marginLeft: "auto",
            marginRight: "auto",
            borderWidth: 1,
            borderStyle: "solid",
          },
          h1: {
            display: tP,
            fontSize: "2em",
            marginTop: "0.67em",
            marginBottom: "0.67em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          h2: {
            display: tP,
            fontSize: "1.5em",
            marginTop: "0.83em",
            marginBottom: "0.83em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          h3: {
            display: tP,
            fontSize: "1.17em",
            marginTop: "1em",
            marginBottom: "1em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          h4: {
            display: tP,
            marginTop: "1.33em",
            marginBottom: "1.33em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          h5: {
            display: tP,
            fontSize: "0.83em",
            marginTop: "1.67em",
            marginBottom: "1.67em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          h6: {
            display: tP,
            fontSize: "0.67em",
            marginTop: "2.33em",
            marginBottom: "2.33em",
            marginLeft: 0,
            marginRight: 0,
            fontWeight: "bold",
          },
          u: { textDecoration: "underline" },
          strong: { fontWeight: "bold" },
          b: { fontWeight: "bold" },
          i: { fontStyle: "italic" },
          em: { fontStyle: "italic" },
          code: { fontFamily: "monospace" },
          kbd: { fontFamily: "monospace" },
          pre: {
            display: tP,
            fontFamily: "monospace",
            whiteSpace: "pre",
            marginTop: "1em",
            marginBottom: "1em",
          },
          mark: { backgroundColor: "yellow", color: "black" },
          big: { fontSize: "larger" },
          small: { fontSize: "smaller" },
          s: { textDecoration: "line-through" },
        },
        tM = new Set([
          "color",
          "font",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontWeight",
          "letterSpacing",
          "lineHeight",
          "textAlign",
          "textTransform",
          "textShadowOffset",
          "textShadowColor",
          "textShadowRadius",
          "textDecorationLine",
          "textDecorationStyle",
          "textDecorationColor",
          "whiteSpace",
          "transform",
          "wordBreak",
          "tabSize",
          "opacity",
          "filter",
          "_viewportWidth",
          "_viewportHeight",
          "_inheritedClipPathId",
          "_inheritedMaskId",
          "_inheritedBackgroundClipTextPath",
        ]);
      function tL(e, t, r) {
        switch (e) {
          case "top":
            return { yRelative: 0 };
          case "left":
            return { xRelative: 0 };
          case "right":
            return { xRelative: 100 };
          case "bottom":
            return { yRelative: 100 };
          case "center":
            return {};
          default: {
            let n = (function (e, t) {
              try {
                let r = new e5(e);
                switch (r.unit) {
                  case "px":
                    return { absolute: r.value };
                  case "em":
                    return { absolute: r.value * t };
                  case "rem":
                    return { absolute: 16 * r.value };
                  case "%":
                    return { relative: r.value };
                  default:
                    return {};
                }
              } catch {
                return {};
              }
            })(e, t);
            return n.absolute
              ? { [r ? "xAbsolute" : "yAbsolute"]: n.absolute }
              : n.relative
              ? { [r ? "xRelative" : "yRelative"]: n.relative }
              : {};
          }
        }
      }
      function tR(e, t) {
        let r = (0, h.Hp)(`mask-${t}`);
        return e[r] || e[`WebkitM${r.substring(1)}`];
      }
      var t$ = new Set([
          "flex",
          "flexGrow",
          "flexShrink",
          "flexBasis",
          "fontWeight",
          "lineHeight",
          "opacity",
          "scale",
          "scaleX",
          "scaleY",
        ]),
        tj = new Set(["lineHeight"]);
      function tN(e, t) {
        let r = Number(t);
        return isNaN(r)
          ? t
          : t$.has(e)
          ? tj.has(e)
            ? r
            : String(t)
          : r + "px";
      }
      function tW(e) {
        return "transform" === e
          ? " Only absolute lengths such as `10px` are supported."
          : "";
      }
      var tz = /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\.\d]+)\)/;
      function tU(e, t) {
        var r, n, i, o, u;
        let a,
          s,
          l = {};
        if (e) {
          let a =
            ((n = e.color),
            (i = t.color),
            n && "currentcolor" !== n.toLowerCase() ? tG(n) : tG(i));
          for (let t in ((l.color = a), e)) {
            if (t.startsWith("_")) {
              l[t] = e[t];
              continue;
            }
            if ("color" === t) continue;
            let n = (0, h.Hp)(t),
              i =
                ((o = e[t]),
                (u = a),
                td(o) && (o = o.replace(/currentcolor/gi, u)),
                o);
            try {
              let e =
                (function (e, t, r) {
                  if ("lineHeight" === e) return { lineHeight: tN(e, t) };
                  if ("fontFamily" === e)
                    return {
                      fontFamily: t.split(",").map((e) =>
                        e
                          .trim()
                          .replace(/(^['"])|(['"]$)/g, "")
                          .toLocaleLowerCase()
                      ),
                    };
                  if ("borderRadius" === e) {
                    if ("string" != typeof t || !t.includes("/")) return;
                    let [r, n] = t.split("/"),
                      i = (0, h.HM)(e, r, !0),
                      o = (0, h.HM)(e, n, !0);
                    for (let t in i) o[t] = tN(e, i[t]) + " " + tN(e, o[t]);
                    return o;
                  }
                  if (/^border(Top|Right|Bottom|Left)?$/.test(e)) {
                    let n = (0, h.HM)("border", t, !0);
                    1 !== n.borderWidth ||
                      String(t).includes("1px") ||
                      (n.borderWidth = 3),
                      "black" !== n.borderColor ||
                        String(t).includes("black") ||
                        (n.borderColor = r);
                    let i = {
                        Width: tN(e + "Width", n.borderWidth),
                        Style: ti(
                          n.borderStyle,
                          { solid: "solid", dashed: "dashed" },
                          "solid",
                          e + "Style"
                        ),
                        Color: n.borderColor,
                      },
                      o = {};
                    for (let t of "border" === e
                      ? ["Top", "Right", "Bottom", "Left"]
                      : [e.slice(6)])
                      for (let e in i) o["border" + t + e] = i[e];
                    return o;
                  }
                  if ("boxShadow" === e) {
                    if (!t)
                      throw Error('Invalid `boxShadow` value: "' + t + '".');
                    return { [e]: "string" == typeof t ? (0, D.parse)(t) : t };
                  }
                  if ("transform" === e) {
                    if ("string" != typeof t)
                      throw Error("Invalid `transform` value.");
                    let e = {},
                      r = t.replace(/(-?[\d.]+%)/g, (t, r) => {
                        let n = ~~(1e9 * Math.random());
                        return (e[n] = r), n + "px";
                      }),
                      n = (0, h.HM)("transform", r, !0);
                    for (let t of n.transform)
                      for (let r in t) e[t[r]] && (t[r] = e[t[r]]);
                    return n;
                  }
                  if ("background" === e)
                    return (
                      (t = t.toString().trim()),
                      /^(linear-gradient|radial-gradient|url|repeating-linear-gradient)\(/.test(
                        t
                      )
                        ? (0, h.HM)("backgroundImage", t, !0)
                        : (0, h.HM)("background", t, !0)
                    );
                  if ("textShadow" === e) {
                    t = t.toString().trim();
                    let e = {};
                    for (let r of tp(t)) {
                      let t = (0, h.HM)("textShadow", r, !0);
                      for (let r in t) e[r] ? e[r].push(t[r]) : (e[r] = [t[r]]);
                    }
                    return e;
                  }
                })(n, i, a) ||
                ((r = (0, h.HM)(n, tN(n, i), !0)),
                "textDecoration" !== n ||
                  i.includes(r.textDecorationColor) ||
                  (r.textDecorationColor = a),
                r);
              Object.assign(l, e);
            } catch (e) {
              throw Error(
                e.message +
                  (e.message.includes(i)
                    ? `
  ` + tW(n)
                    : `
  in CSS rule \`${n}: ${i}\`.${tW(n)}`)
              );
            }
          }
        }
        if (l.backgroundImage) {
          let { backgrounds: e } = (0, p.parseElementStyle)(l);
          l.backgroundImage = e;
        }
        (l.maskImage || l.WebkitMaskImage) &&
          (l.maskImage =
            ((a = l.maskImage || l.WebkitMaskImage),
            (s = {
              position: tR(l, "position") || "0% 0%",
              size: tR(l, "size") || "100% 100%",
              repeat: tR(l, "repeat") || "repeat",
              origin: tR(l, "origin") || "border-box",
              clip: tR(l, "origin") || "border-box",
            }),
            tp(a)
              .filter((e) => e && "none" !== e)
              .reverse()
              .map((e) => ({ image: e, ...s }))));
        let c = (function (e, t) {
          if ("number" == typeof e) return e;
          try {
            let r = new e5(e);
            switch (r.unit) {
              case "em":
                return r.value * t;
              case "rem":
                return 16 * r.value;
            }
          } catch {
            return t;
          }
        })(l.fontSize, t.fontSize);
        for (let e in ("u" > typeof l.fontSize && (l.fontSize = c),
        l.transformOrigin &&
          (l.transformOrigin = (function (e, t) {
            let r;
            if ("number" == typeof e) return { xAbsolute: e };
            try {
              r = m(e)
                .nodes.filter((e) => "word" === e.type)
                .map((e) => e.value);
            } catch {
              return {};
            }
            return 1 === r.length
              ? tL(r[0], t, !0)
              : 2 === r.length
              ? (("top" === r[0] ||
                  "bottom" === r[0] ||
                  "left" === r[1] ||
                  "right" === r[1]) &&
                  r.reverse(),
                { ...tL(r[0], t, !0), ...tL(r[1], t, !1) })
              : {};
          })(l.transformOrigin, c)),
        l)) {
          let r = l[e];
          if ("lineHeight" === e)
            "string" == typeof r &&
              "normal" !== r &&
              (r = l[e] = tt(r, c, c, t, !0) / c);
          else {
            if ("string" == typeof r) {
              let n = tt(r, c, c, t);
              "u" > typeof n && (l[e] = n), (r = l[e]);
            }
            if ("string" == typeof r || "object" == typeof r) {
              let t = (function e(t) {
                if ("string" == typeof t && tz.test(t.trim()))
                  return t
                    .trim()
                    .replace(
                      tz,
                      (e, t, r, n, i) => `rgba(${t}, ${r}, ${n}, ${i})`
                    );
                if ("object" == typeof t && null !== t)
                  for (let r in t) t[r] = e(t[r]);
                return t;
              })(r);
              t && (l[e] = t), (r = l[e]);
            }
          }
          if (
            ("opacity" === e &&
              "number" == typeof r &&
              (l.opacity = r * t.opacity),
            "transform" === e)
          )
            for (let e of r) {
              let r = Object.keys(e)[0],
                n = e[r],
                i = "string" == typeof n ? tt(n, c, c, t) ?? n : n;
              e[r] = i;
            }
          if ("textShadowRadius" === e) {
            let e = r;
            l.textShadowRadius = e.map((e) => tt(e, c, 0, t, !1));
          }
          if ("textShadowOffset" === e) {
            let e = r;
            l.textShadowOffset = e.map(({ height: e, width: r }) => ({
              height: tt(e, c, 0, t, !1),
              width: tt(r, c, 0, t, !1),
            }));
          }
        }
        return l;
      }
      function tG(e) {
        if (e.startsWith("hsl")) {
          let t = g(e),
            [r, n, i] = t.values;
          return `hsl(${[r, `${n}%`, `${i}%`]
            .concat(1 === t.alpha ? [] : [t.alpha])
            .join(",")})`;
        }
        return e;
      }
      async function tq(e, t, r, n, i) {
        let o = await eH(),
          u = { ...r, ...tU(tI[t], r), ...tU(n, r) };
        if ("img" === t) {
          let [t, r, n] = await t_(i.src);
          if (void 0 === r && void 0 === n) {
            if (void 0 === i.width || void 0 === i.height)
              throw Error(
                "Image size cannot be determined. Please provide the width and height of the image."
              );
            (r = parseInt(i.width)), (n = parseInt(i.height));
          }
          let o = n / r,
            a =
              (u.borderLeftWidth || 0) +
              (u.borderRightWidth || 0) +
              (u.paddingLeft || 0) +
              (u.paddingRight || 0),
            s =
              (u.borderTopWidth || 0) +
              (u.borderBottomWidth || 0) +
              (u.paddingTop || 0) +
              (u.paddingBottom || 0),
            l = u.width || i.width,
            c = u.height || i.height,
            f = "number" == typeof l && "number" == typeof c;
          f && ((l -= a), (c -= s)),
            void 0 === l && void 0 === c
              ? ((l = "100%"), e.setAspectRatio(1 / o))
              : void 0 === l
              ? "number" == typeof c
                ? (l = c / o)
                : e.setAspectRatio(1 / o)
              : void 0 === c &&
                ("number" == typeof l ? (c = l * o) : e.setAspectRatio(1 / o)),
            (u.width = f ? l + a : l),
            (u.height = f ? c + s : c),
            (u.__src = t);
        }
        if ("svg" === t) {
          let e = tf(i.viewBox || i.viewbox),
            t = e ? e[3] / e[2] : null,
            { width: n, height: o } = i;
          typeof n > "u" && o
            ? (n =
                null == t
                  ? 0
                  : "string" == typeof o && o.endsWith("%")
                  ? parseInt(o) / t + "%"
                  : (o = tt(o, r.fontSize, 1, r)) / t)
            : typeof o > "u" && n
            ? null == t
              ? (n = 0)
              : (o =
                  "string" == typeof n && n.endsWith("%")
                    ? parseInt(n) * t + "%"
                    : (n = tt(n, r.fontSize, 1, r)) * t)
            : ("u" > typeof n && (n = tt(n, r.fontSize, 1, r) || n),
              "u" > typeof o && (o = tt(o, r.fontSize, 1, r) || o),
              (n ||= null == e ? void 0 : e[2]),
              (o ||= null == e ? void 0 : e[3])),
            !u.width && n && (u.width = n),
            !u.height && o && (u.height = o);
        }
        return (
          e.setDisplay(
            ti(
              u.display,
              {
                flex: o.DISPLAY_FLEX,
                block: o.DISPLAY_FLEX,
                none: o.DISPLAY_NONE,
                "-webkit-box": o.DISPLAY_FLEX,
              },
              o.DISPLAY_FLEX,
              "display"
            )
          ),
          e.setAlignContent(
            ti(
              u.alignContent,
              {
                stretch: o.ALIGN_STRETCH,
                center: o.ALIGN_CENTER,
                "flex-start": o.ALIGN_FLEX_START,
                "flex-end": o.ALIGN_FLEX_END,
                "space-between": o.ALIGN_SPACE_BETWEEN,
                "space-around": o.ALIGN_SPACE_AROUND,
                baseline: o.ALIGN_BASELINE,
                normal: o.ALIGN_AUTO,
              },
              o.ALIGN_AUTO,
              "alignContent"
            )
          ),
          e.setAlignItems(
            ti(
              u.alignItems,
              {
                stretch: o.ALIGN_STRETCH,
                center: o.ALIGN_CENTER,
                "flex-start": o.ALIGN_FLEX_START,
                "flex-end": o.ALIGN_FLEX_END,
                baseline: o.ALIGN_BASELINE,
                normal: o.ALIGN_AUTO,
              },
              o.ALIGN_STRETCH,
              "alignItems"
            )
          ),
          e.setAlignSelf(
            ti(
              u.alignSelf,
              {
                stretch: o.ALIGN_STRETCH,
                center: o.ALIGN_CENTER,
                "flex-start": o.ALIGN_FLEX_START,
                "flex-end": o.ALIGN_FLEX_END,
                baseline: o.ALIGN_BASELINE,
                normal: o.ALIGN_AUTO,
              },
              o.ALIGN_AUTO,
              "alignSelf"
            )
          ),
          e.setJustifyContent(
            ti(
              u.justifyContent,
              {
                center: o.JUSTIFY_CENTER,
                "flex-start": o.JUSTIFY_FLEX_START,
                "flex-end": o.JUSTIFY_FLEX_END,
                "space-between": o.JUSTIFY_SPACE_BETWEEN,
                "space-around": o.JUSTIFY_SPACE_AROUND,
              },
              o.JUSTIFY_FLEX_START,
              "justifyContent"
            )
          ),
          e.setFlexDirection(
            ti(
              u.flexDirection,
              {
                row: o.FLEX_DIRECTION_ROW,
                column: o.FLEX_DIRECTION_COLUMN,
                "row-reverse": o.FLEX_DIRECTION_ROW_REVERSE,
                "column-reverse": o.FLEX_DIRECTION_COLUMN_REVERSE,
              },
              o.FLEX_DIRECTION_ROW,
              "flexDirection"
            )
          ),
          e.setFlexWrap(
            ti(
              u.flexWrap,
              {
                wrap: o.WRAP_WRAP,
                nowrap: o.WRAP_NO_WRAP,
                "wrap-reverse": o.WRAP_WRAP_REVERSE,
              },
              o.WRAP_NO_WRAP,
              "flexWrap"
            )
          ),
          "u" > typeof u.gap && e.setGap(o.GUTTER_ALL, u.gap),
          "u" > typeof u.rowGap && e.setGap(o.GUTTER_ROW, u.rowGap),
          "u" > typeof u.columnGap && e.setGap(o.GUTTER_COLUMN, u.columnGap),
          "u" > typeof u.flexBasis && e.setFlexBasis(u.flexBasis),
          e.setFlexGrow(typeof u.flexGrow > "u" ? 0 : u.flexGrow),
          e.setFlexShrink(typeof u.flexShrink > "u" ? 0 : u.flexShrink),
          "u" > typeof u.maxHeight && e.setMaxHeight(u.maxHeight),
          "u" > typeof u.maxWidth && e.setMaxWidth(u.maxWidth),
          "u" > typeof u.minHeight && e.setMinHeight(u.minHeight),
          "u" > typeof u.minWidth && e.setMinWidth(u.minWidth),
          e.setOverflow(
            ti(
              u.overflow,
              { visible: o.OVERFLOW_VISIBLE, hidden: o.OVERFLOW_HIDDEN },
              o.OVERFLOW_VISIBLE,
              "overflow"
            )
          ),
          e.setMargin(o.EDGE_TOP, u.marginTop || 0),
          e.setMargin(o.EDGE_BOTTOM, u.marginBottom || 0),
          e.setMargin(o.EDGE_LEFT, u.marginLeft || 0),
          e.setMargin(o.EDGE_RIGHT, u.marginRight || 0),
          e.setBorder(o.EDGE_TOP, u.borderTopWidth || 0),
          e.setBorder(o.EDGE_BOTTOM, u.borderBottomWidth || 0),
          e.setBorder(o.EDGE_LEFT, u.borderLeftWidth || 0),
          e.setBorder(o.EDGE_RIGHT, u.borderRightWidth || 0),
          e.setPadding(o.EDGE_TOP, u.paddingTop || 0),
          e.setPadding(o.EDGE_BOTTOM, u.paddingBottom || 0),
          e.setPadding(o.EDGE_LEFT, u.paddingLeft || 0),
          e.setPadding(o.EDGE_RIGHT, u.paddingRight || 0),
          e.setPositionType(
            ti(
              u.position,
              {
                absolute: o.POSITION_TYPE_ABSOLUTE,
                relative: o.POSITION_TYPE_RELATIVE,
              },
              o.POSITION_TYPE_RELATIVE,
              "position"
            )
          ),
          "u" > typeof u.top && e.setPosition(o.EDGE_TOP, u.top),
          "u" > typeof u.bottom && e.setPosition(o.EDGE_BOTTOM, u.bottom),
          "u" > typeof u.left && e.setPosition(o.EDGE_LEFT, u.left),
          "u" > typeof u.right && e.setPosition(o.EDGE_RIGHT, u.right),
          "u" > typeof u.height ? e.setHeight(u.height) : e.setHeightAuto(),
          "u" > typeof u.width ? e.setWidth(u.width) : e.setWidthAuto(),
          [
            u,
            (function (e) {
              let t = {};
              for (let r in e) tM.has(r) && (t[r] = e[r]);
              return t;
            })(u),
          ]
        );
      }
      var tH = [1, 0, 0, 1, 0, 0];
      function tY({ left: e, top: t, width: r, height: n }, i, o, u) {
        let a;
        if (
          (i.__resolved ||
            (function (e, t, r) {
              let n = [...tH];
              for (let i of e) {
                let e = Object.keys(i)[0],
                  o = i[e];
                if ("string" == typeof o) {
                  if ("translateX" === e)
                    (o = (parseFloat(o) / 100) * t), (i[e] = o);
                  else if ("translateY" === e)
                    (o = (parseFloat(o) / 100) * r), (i[e] = o);
                  else throw Error(`Invalid transform: "${e}: ${o}".`);
                }
                let u = o,
                  a = [...tH];
                switch (e) {
                  case "translateX":
                    a[4] = u;
                    break;
                  case "translateY":
                    a[5] = u;
                    break;
                  case "scale":
                    (a[0] = u), (a[3] = u);
                    break;
                  case "scaleX":
                    a[0] = u;
                    break;
                  case "scaleY":
                    a[3] = u;
                    break;
                  case "rotate": {
                    let e = (u * Math.PI) / 180,
                      t = Math.cos(e),
                      r = Math.sin(e);
                    (a[0] = t), (a[1] = r), (a[2] = -r), (a[3] = t);
                    break;
                  }
                  case "skewX":
                    a[2] = Math.tan((u * Math.PI) / 180);
                    break;
                  case "skewY":
                    a[1] = Math.tan((u * Math.PI) / 180);
                }
                n = tn(a, n);
              }
              e.splice(0, e.length), e.push(...n), (e.__resolved = !0);
            })(i, r, n),
          o)
        )
          a = i;
        else {
          let o =
              (null == u ? void 0 : u.xAbsolute) ??
              (((null == u ? void 0 : u.xRelative) ?? 50) * r) / 100,
            s =
              (null == u ? void 0 : u.yAbsolute) ??
              (((null == u ? void 0 : u.yRelative) ?? 50) * n) / 100,
            l = e + o,
            c = t + s;
          (a = tn([1, 0, 0, 1, l, c], tn(i, [1, 0, 0, 1, -l, -c]))),
            i.__parent && (a = tn(i.__parent, a)),
            i.splice(0, 6, ...a);
        }
        return `matrix(${a.map((e) => e.toFixed(2)).join(",")})`;
      }
      function tV(e) {
        return String.fromCodePoint(Number((e = e.replace("U+", "0x"))));
      }
      var tX = tV("U+0020"),
        tQ = tV("U+0009"),
        tJ = tV("U+2026"),
        tK = new Set([tQ]);
      async function* tZ(e, t) {
        let r;
        let n = await eH(),
          {
            parentStyle: i,
            inheritedStyle: o,
            parent: u,
            font: a,
            id: s,
            isInheritingTransform: l,
            debug: c,
            embedFont: f,
            graphemeImages: h,
            locale: p,
            canLoadAdditionalAssets: D,
          } = t,
          {
            textAlign: g,
            lineHeight: m,
            textWrap: b,
            fontSize: y,
            filter: F,
            tabSize: w = 8,
            letterSpacing: x,
            _inheritedBackgroundClipTextPath: E,
            flexShrink: C,
          } = i,
          {
            words: k,
            requiredBreaks: S,
            allowSoftWrap: _,
            allowBreakWord: T,
            processedContent: A,
            shouldCollapseTabsAndSpaces: O,
            lineLimit: B,
            blockEllipsis: P,
          } = (function (e, t, r) {
            var n, i;
            let o, u, a;
            let { textTransform: s, whiteSpace: l, wordBreak: c } = t,
              {
                content: f,
                shouldCollapseTabsAndSpaces: h,
                allowSoftWrap: p,
              } = ((n = e),
              "uppercase" === s
                ? (n = n.toLocaleUpperCase(r))
                : "lowercase" === s
                ? (n = n.toLocaleLowerCase(r))
                : "capitalize" === s &&
                  (n = tl(n, "word", r)
                    .map((e) =>
                      tl(e, "grapheme", r)
                        .map((e, t) => (0 === t ? e.toLocaleUpperCase(r) : e))
                        .join("")
                    )
                    .join("")),
              (i = e = n),
              (o = ["pre", "pre-wrap", "pre-line"].includes(l)),
              (u = ["normal", "nowrap", "pre-line"].includes(l)),
              (a = !["pre", "nowrap"].includes(l)),
              o || (i = i.replace(/\n/g, tX)),
              u && (i = i.replace(/([ ]|\t)+/g, tX).replace(/^[ ]|[ ]$/g, "")),
              { content: i, shouldCollapseTabsAndSpaces: u, allowSoftWrap: a }),
              {
                words: D,
                requiredBreaks: g,
                allowBreakWord: m,
              } = (function (e, t) {
                let r = ["break-all", "break-word"].includes(t),
                  { words: n, requiredBreaks: i } = (function (e, t) {
                    if ("break-all" === t)
                      return { words: tl(e, "grapheme"), requiredBreaks: [] };
                    if ("keep-all" === t)
                      return { words: tl(e, "word"), requiredBreaks: [] };
                    let r = new d.Z(e),
                      n = 0,
                      i = r.nextBreak(),
                      o = [],
                      u = [!1];
                    for (; i; ) {
                      let t = e.slice(n, i.position);
                      o.push(t),
                        i.required ? u.push(!0) : u.push(!1),
                        (n = i.position),
                        (i = r.nextBreak());
                    }
                    return { words: o, requiredBreaks: u };
                  })(e, t);
                return { words: n, requiredBreaks: i, allowBreakWord: r };
              })(f, c),
              [v, b] = (function (e, t) {
                let {
                  textOverflow: r,
                  lineClamp: n,
                  WebkitLineClamp: i,
                  WebkitBoxOrient: o,
                  overflow: u,
                  display: a,
                } = e;
                if ("block" === a && n) {
                  let [e, t = tJ] = (function (e) {
                    if ("number" == typeof e) return [e];
                    let t = /^(\d+)\s*"(.*)"$/.exec(e),
                      r = /^(\d+)\s*'(.*)'$/.exec(e);
                    return t ? [+t[1], t[2]] : r ? [+r[1], r[2]] : [];
                  })(n);
                  if (e) return [e, t];
                }
                return "ellipsis" === r &&
                  "-webkit-box" === a &&
                  "vertical" === o &&
                  "number" == typeof i &&
                  i > 0
                  ? [i, tJ]
                  : "ellipsis" !== r || "hidden" !== u || t
                  ? [1 / 0]
                  : [1, tJ];
              })(t, p);
            return {
              words: D,
              requiredBreaks: g,
              allowSoftWrap: p,
              allowBreakWord: m,
              processedContent: f,
              shouldCollapseTabsAndSpaces: h,
              lineLimit: v,
              blockEllipsis: b,
            };
          })(e, i, p),
          I =
            ((r = n.Node.create()).setAlignItems(n.ALIGN_BASELINE),
            r.setJustifyContent(
              ti(
                g,
                {
                  left: n.JUSTIFY_FLEX_START,
                  right: n.JUSTIFY_FLEX_END,
                  center: n.JUSTIFY_CENTER,
                  justify: n.JUSTIFY_SPACE_BETWEEN,
                  start: n.JUSTIFY_FLEX_START,
                  end: n.JUSTIFY_FLEX_END,
                },
                n.JUSTIFY_FLEX_START,
                "textAlign"
              )
            ),
            r);
        u.insertChild(I, u.getChildCount()),
          "[object Undefined]" === Object.prototype.toString.call(C) &&
            u.setFlexShrink(1);
        let M = a.getEngine(y, m, i, p),
          L = D ? tl(A, "grapheme").filter((e) => !tK.has(e) && !M.has(e)) : [];
        function R(e) {
          return !!(h && h[e]);
        }
        yield L.map((e) => ({ word: e, locale: p })),
          L.length && (M = a.getEngine(y, m, i, p));
        let {
            measureGrapheme: $,
            measureGraphemeArray: j,
            measureText: N,
          } = (function (e, t, r) {
            let { fontSize: n, letterSpacing: i } = r,
              o = new Map();
            function u(t) {
              if (o.has(t)) return o.get(t);
              let r = e.measure(t, { fontSize: n, letterSpacing: i });
              return o.set(t, r), r;
            }
            function a(e) {
              let r = 0;
              for (let i of e) t(i) ? (r += n) : (r += u(i));
              return r;
            }
            return {
              measureGrapheme: u,
              measureGraphemeArray: a,
              measureText: function (e) {
                return a(tl(e, "grapheme"));
              },
            };
          })(M, R, { fontSize: y, letterSpacing: x }),
          W = td(w) ? tt(w, y, 1, i) : $(tX) * w,
          z = (e, t) => {
            let r;
            if (0 === e.length)
              return { originWidth: 0, endingSpacesWidth: 0, text: e };
            let { index: n, tabCount: i } = (r = /(\t)+/.exec(e))
                ? { index: r.index, tabCount: r[0].length }
                : { index: null, tabCount: 0 },
              o = 0;
            if (i > 0) {
              let r = e.slice(0, n),
                u = e.slice(n + i),
                a = N(r);
              o = (0 === W ? a : (Math.floor((a + t) / W) + i) * W) + N(u);
            } else o = N(e);
            let u = e.trimEnd() === e ? o : N(e.trimEnd());
            return { originWidth: o, endingSpacesWidth: o - u, text: e };
          },
          U = [],
          G = [],
          q = [],
          H = [],
          Y = [];
        function V(e) {
          let t = 0,
            r = 0,
            n = -1,
            i = 0,
            o = 0,
            u = 0,
            a = 0;
          (U = []), (q = [0]), (H = []), (Y = []);
          let s = 0,
            l = 0;
          for (; s < k.length && t < B; ) {
            let c = k[s],
              f = S[s],
              d = 0,
              { originWidth: h, endingSpacesWidth: p, text: D } = z(c, o);
            (c = D), (d = h), f && 0 === u && (u = M.height(c));
            let g = 0 > ",.!?:-@)>]}%#".indexOf(c[0]),
              m = !o,
              v = s && g && o + d > e + p && _;
            if (T && d > e && (!o || v || f)) {
              let e = tl(c, "grapheme");
              k.splice(s, 1, ...e),
                o > 0 &&
                  (U.push(o - l),
                  G.push(a),
                  t++,
                  (i += u),
                  (o = 0),
                  (u = 0),
                  (a = 0),
                  q.push(1),
                  (n = -1)),
                (l = p);
              continue;
            }
            if (f || v)
              O && c === tX && (d = 0),
                U.push(o - l),
                G.push(a),
                t++,
                (i += u),
                (o = d),
                (u = d ? M.height(c) : 0),
                (a = d ? M.baseline(c) : 0),
                q.push(1),
                (n = -1),
                f || (r = Math.max(r, e));
            else {
              o += d;
              let e = M.height(c);
              e > u && ((u = e), (a = M.baseline(c))), m && q[q.length - 1]++;
            }
            m && n++, (r = Math.max(r, o));
            let b = o - d;
            if (0 === d)
              Y.push({
                y: i,
                x: b,
                width: 0,
                line: t,
                lineIndex: n,
                isImage: !1,
              });
            else {
              let e = tl(c, "word");
              for (let r = 0; r < e.length; r++) {
                let o = e[r],
                  u = 0,
                  a = !1;
                R(o) ? ((u = y), (a = !0)) : (u = $(o)),
                  H.push(o),
                  Y.push({
                    y: i,
                    x: b,
                    width: u,
                    line: t,
                    lineIndex: n,
                    isImage: a,
                  }),
                  (b += u);
              }
            }
            s++, (l = p);
          }
          return (
            o && (t < B && (i += u), t++, U.push(o), G.push(a)),
            { width: r, height: i }
          );
        }
        let X = { width: 0, height: 0 };
        I.setMeasureFunc((e) => {
          let { width: t, height: r } = V(e);
          if ("balance" === b) {
            let e = t / 2,
              n = t,
              i = t;
            for (; e + 1 < n; ) {
              let { height: t } = V((i = (e + n) / 2));
              t > r ? (e = i) : (n = i);
            }
            V(n);
            let o = Math.ceil(n);
            return (X = { width: o, height: r }), { width: o, height: r };
          }
          let n = Math.ceil(t);
          return (X = { width: n, height: r }), { width: n, height: r };
        });
        let [Q, J] = yield,
          K = "",
          Z = "",
          ee = o._inheritedClipPathId,
          et = o._inheritedMaskId,
          { left: er, top: en, width: ei, height: eo } = I.getComputedLayout(),
          eu =
            u.getComputedWidth() -
            u.getComputedPadding(n.EDGE_LEFT) -
            u.getComputedPadding(n.EDGE_RIGHT) -
            u.getComputedBorder(n.EDGE_LEFT) -
            u.getComputedBorder(n.EDGE_RIGHT),
          ea = Q + er,
          es = J + en,
          { matrix: el, opacity: ec } = (function (
            { left: e, top: t, width: r, height: n, isInheritingTransform: i },
            o
          ) {
            let u = "",
              a = 1;
            return (
              o.transform &&
                (u = tY(
                  { left: e, top: t, width: r, height: n },
                  o.transform,
                  i,
                  o.transformOrigin
                )),
              void 0 !== o.opacity && (a = +o.opacity),
              { matrix: u, opacity: a }
            );
          })(
            {
              left: er,
              top: en,
              width: ei,
              height: eo,
              isInheritingTransform: l,
            },
            i
          ),
          ef = "";
        if (i.textShadowOffset) {
          let {
            textShadowColor: e,
            textShadowOffset: t,
            textShadowRadius: r,
          } = i;
          (ef = (function ({ id: e, width: t, height: r }, n) {
            if (
              !n.shadowColor ||
              !n.shadowOffset ||
              typeof n.shadowRadius > "u"
            )
              return "";
            let i = n.shadowColor.length,
              o = "",
              u = "",
              a = 0,
              s = t,
              l = 0,
              c = r;
            for (let f = 0; f < i; f++) {
              let d = (n.shadowRadius[f] * n.shadowRadius[f]) / 4;
              (a = Math.min(n.shadowOffset[f].width - d, a)),
                (s = Math.max(n.shadowOffset[f].width + d + t, s)),
                (l = Math.min(n.shadowOffset[f].height - d, l)),
                (c = Math.max(n.shadowOffset[f].height + d + r, c)),
                (o += tc("feDropShadow", {
                  dx: n.shadowOffset[f].width,
                  dy: n.shadowOffset[f].height,
                  stdDeviation: n.shadowRadius[f] / 2,
                  "flood-color": n.shadowColor[f],
                  "flood-opacity": 1,
                  ...(i > 1
                    ? {
                        in: "SourceGraphic",
                        result: `satori_s-${e}-result-${f}`,
                      }
                    : {}),
                })),
                i > 1 &&
                  (u =
                    tc("feMergeNode", { in: `satori_s-${e}-result-${f}` }) + u);
            }
            return tc(
              "filter",
              {
                id: `satori_s-${e}`,
                x: ((a / t) * 110.00000000000001).toFixed(2) + "%",
                y: ((l / r) * 110.00000000000001).toFixed(2) + "%",
                width: (((s - a) / t) * 110.00000000000001).toFixed(2) + "%",
                height: (((c - l) / r) * 110.00000000000001).toFixed(2) + "%",
              },
              o + (u ? tc("feMerge", {}, u) : "")
            );
          })(
            { width: X.width, height: X.height, id: s },
            { shadowColor: e, shadowOffset: t, shadowRadius: r }
          )),
            (ef = tc("defs", {}, ef));
        }
        let ed = "",
          eh = "",
          ep = "",
          eD = -1,
          eg = {},
          em = null,
          ev = 0;
        for (let e = 0; e < H.length; e++) {
          let t = Y[e],
            r = Y[e + 1];
          if (!t) continue;
          let n = H[e],
            o = null,
            u = !1,
            a = h ? h[n] : null,
            l = t.y,
            d = t.x,
            D = t.width,
            m = t.line;
          if (m === eD) continue;
          let b = !1;
          if (U.length > 1) {
            let e = ei - U[m];
            if ("right" === g || "end" === g) d += e;
            else if ("center" === g) d += e / 2;
            else if ("justify" === g && m < U.length - 1) {
              let r = q[m];
              (d += (r > 1 ? e / (r - 1) : 0) * t.lineIndex), (b = !0);
            }
          }
          let F = G[m],
            w = M.baseline(n),
            C = M.height(n),
            k = F - w;
          if (
            (eg[m] || (eg[m] = [d, es + l + k, w, b ? ei : U[m]]), B !== 1 / 0)
          ) {
            let t = function (e, t) {
                let r = tl(t, "grapheme", p),
                  n = "",
                  i = 0;
                for (let t of r) {
                  let r = e + j([n + t]);
                  if (n && r + o > eu) break;
                  (n += t), (i = r);
                }
                return { subset: n, resolvedWidth: i };
              },
              i = P,
              o = $(P);
            o > eu && (o = $((i = tJ)));
            let a = $(tX),
              s = m < U.length - 1;
            if (m + 1 === B && (s || U[m] > eu)) {
              if (d + D + o + a > eu) {
                let { subset: e, resolvedWidth: r } = t(d, n);
                (n = e + i), (eD = m), (eg[m][2] = r), (u = !0);
              } else if (r && r.line !== m) {
                if ("center" === g) {
                  let { subset: e, resolvedWidth: r } = t(d, n);
                  (n = e + i), (eD = m), (eg[m][2] = r), (u = !0);
                } else {
                  let { subset: r, resolvedWidth: o } = t(D + d, H[e + 1]);
                  (n = n + r + i), (eD = m), (eg[m][2] = o), (u = !0);
                }
              }
            }
          }
          if (a) l += 0;
          else if (f) {
            if (
              !n.includes(tQ) &&
              !ts.includes(n) &&
              H[e + 1] &&
              r &&
              !r.isImage &&
              l === r.y &&
              !u
            ) {
              null === em && (ev = d), (em = null === em ? n : em + n);
              continue;
            }
            let i = null === em ? n : em + n,
              a = null === em ? d : ev,
              s = t.width + d - a;
            (o = M.getSVG(i.replace(/(\t)+/g, ""), {
              fontSize: y,
              left: ea + a,
              top: es + l + w + k,
              letterSpacing: x,
            })),
              (em = null),
              c &&
                (ep +=
                  tc("rect", {
                    x: ea + a,
                    y: es + l + k,
                    width: s,
                    height: C,
                    fill: "transparent",
                    stroke: "#575eff",
                    "stroke-width": 1,
                    transform: el || void 0,
                    "clip-path": ee ? `url(#${ee})` : void 0,
                  }) +
                  tc("line", {
                    x1: ea + d,
                    x2: ea + d + t.width,
                    y1: es + l + k + w,
                    y2: es + l + k + w,
                    stroke: "#14c000",
                    "stroke-width": 1,
                    transform: el || void 0,
                    "clip-path": ee ? `url(#${ee})` : void 0,
                  }));
          } else l += w + k;
          if (i.textDecorationLine) {
            let e = eg[m];
            e &&
              !e[4] &&
              ((ed += (function (
                {
                  width: e,
                  left: t,
                  top: r,
                  ascender: n,
                  clipPathId: i,
                  matrix: o,
                },
                u
              ) {
                let {
                  textDecorationColor: a,
                  textDecorationStyle: s,
                  textDecorationLine: l,
                  fontSize: c,
                  color: f,
                } = u;
                if (!l || "none" === l) return "";
                let d = Math.max(1, 0.1 * c),
                  h =
                    "line-through" === l
                      ? r + 0.7 * n
                      : "underline" === l
                      ? r + 1.1 * n
                      : r,
                  p =
                    "dashed" === s
                      ? `${1.2 * d} ${2 * d}`
                      : "dotted" === s
                      ? `0 ${2 * d}`
                      : void 0;
                return (
                  (i ? `<g clip-path="url(#${i})">` : "") +
                  tc("line", {
                    x1: t,
                    y1: h,
                    x2: t + e,
                    y2: h,
                    stroke: a || f,
                    "stroke-width": d,
                    "stroke-dasharray": p,
                    "stroke-linecap": "dotted" === s ? "round" : "square",
                    transform: o,
                  }) +
                  (i ? "</g>" : "")
                );
              })(
                {
                  left: ea + e[0],
                  top: e[1],
                  width: e[3],
                  ascender: e[2],
                  clipPathId: ee,
                  matrix: el,
                },
                i
              )),
              (e[4] = 1));
          }
          if (null !== o) eh += o + " ";
          else {
            let [e, t] = (function (
              {
                id: e,
                content: t,
                filter: r,
                left: n,
                top: i,
                width: o,
                height: u,
                matrix: a,
                opacity: s,
                image: l,
                clipPathId: c,
                debug: f,
                shape: d,
                decorationShape: h,
              },
              p
            ) {
              let D = "";
              if (
                (f &&
                  (D = tc("rect", {
                    x: n,
                    y: i - u,
                    width: o,
                    height: u,
                    fill: "transparent",
                    stroke: "#575eff",
                    "stroke-width": 1,
                    transform: a || void 0,
                    "clip-path": c ? `url(#${c})` : void 0,
                  })),
                l)
              )
                return [
                  (r ? `${r}<g filter="url(#satori_s-${e})">` : "") +
                    tc("image", {
                      href: l,
                      x: n,
                      y: i,
                      width: o,
                      height: u,
                      transform: a || void 0,
                      "clip-path": c ? `url(#${c})` : void 0,
                      style: p.filter ? `filter:${p.filter}` : void 0,
                      opacity: 1 !== s ? s : void 0,
                    }) +
                    (h || "") +
                    (r ? "</g>" : "") +
                    D,
                  "",
                ];
              let g = {
                x: n,
                y: i,
                width: o,
                height: u,
                "font-weight": p.fontWeight,
                "font-style": p.fontStyle,
                "font-size": p.fontSize,
                "font-family": p.fontFamily,
                "letter-spacing": p.letterSpacing || void 0,
                transform: a || void 0,
                "clip-path": c ? `url(#${c})` : void 0,
                style: p.filter ? `filter:${p.filter}` : void 0,
              };
              return [
                (r ? `${r}<g filter="url(#satori_s-${e})">` : "") +
                  tc(
                    "text",
                    { ...g, fill: p.color, opacity: 1 !== s ? s : void 0 },
                    v(t)
                  ) +
                  (h || "") +
                  (r ? "</g>" : "") +
                  D,
                d ? tc("text", g, v(t)) : "",
              ];
            })(
              {
                content: n,
                filter: ef,
                id: s,
                left: ea + d,
                top: es + l,
                width: D,
                height: C,
                matrix: el,
                opacity: ec,
                image: a,
                clipPathId: ee,
                debug: c,
                shape: !!E,
                decorationShape: ed,
              },
              i
            );
            (K += e), (Z += t), (ed = "");
          }
          if (u) break;
        }
        if (eh) {
          let e =
            "transparent" !== i.color && 0 !== ec
              ? tc("path", {
                  fill: i.color,
                  d: eh,
                  transform: el || void 0,
                  opacity: 1 !== ec ? ec : void 0,
                  "clip-path": ee ? `url(#${ee})` : void 0,
                  mask: et ? `url(#${et})` : void 0,
                  style: F ? `filter:${F}` : void 0,
                })
              : "";
          E && (Z = tc("path", { d: eh, transform: el || void 0 })),
            (K +=
              (ef
                ? ef + tc("g", { filter: `url(#satori_s-${s})` }, e + ed)
                : e + ed) + ep);
        }
        return Z && (i._inheritedBackgroundClipTextPath.value += Z), K;
      }
      function t0(e, t, r, n, i) {
        let o = [];
        for (let n of t) {
          let { color: t } = n;
          if (
            !o.length &&
            (o.push({ offset: 0, color: t }),
            !n.offset || "0" === n.offset.value)
          )
            continue;
          let i =
            typeof n.offset > "u"
              ? void 0
              : "%" === n.offset.unit
              ? +n.offset.value / 100
              : Number(
                  tt(`${n.offset.value}${n.offset.unit}`, r.fontSize, e, r, !0)
                ) / e;
          o.push({ offset: i, color: t });
        }
        o.length || o.push({ offset: 0, color: "transparent" });
        let u = o[o.length - 1];
        1 !== u.offset &&
          (typeof u.offset > "u"
            ? (u.offset = 1)
            : n
            ? (o[o.length - 1] = { offset: 1, color: u.color })
            : o.push({ offset: 1, color: u.color }));
        let a = 0,
          s = 1;
        for (let e = 0; e < o.length; e++)
          if (typeof o[e].offset > "u") {
            for (s < e && (s = e); typeof o[s].offset > "u"; ) s++;
            o[e].offset =
              ((o[s].offset - o[a].offset) / (s - a)) * (e - a) + o[a].offset;
          } else a = e;
        return "mask" === i
          ? o.map((e) => {
              let t = g(e.color);
              return t
                ? 0 === t.alpha
                  ? { ...e, color: "rgba(0, 0, 0, 1)" }
                  : { ...e, color: `rgba(255, 255, 255, ${t.alpha})` }
                : e;
            })
          : o;
      }
      function t1(e, t, r, n) {
        switch (e) {
          case "center":
            return { [n]: "x" === n ? t / 2 : r / 2 };
          case "left":
            return { x: 0 };
          case "top":
            return { y: 0 };
          case "right":
            return { x: t };
          case "bottom":
            return { y: r };
        }
      }
      function t2(e, { x: t, y: r, defaultX: n, defaultY: i }) {
        return (
          e
            ? e
                .split(" ")
                .map((e) => {
                  try {
                    let t = new e5(e);
                    return "length" === t.type || "number" === t.type
                      ? t.value
                      : t.value + t.unit;
                  } catch {
                    return null;
                  }
                })
                .filter((e) => null !== e)
            : [n, i]
        ).map((e, n) => {
          var i;
          return (
            (i = [t, r][n]),
            "string" == typeof e && e.endsWith("%")
              ? (i * parseFloat(e)) / 100
              : +e
          );
        });
      }
      async function t3(
        { id: e, width: t, height: r, left: n, top: i },
        { image: o, size: u, position: a, repeat: s },
        l,
        c
      ) {
        (s = s || "repeat"), (c = c || "background");
        let f = "repeat-x" === s || "repeat" === s,
          d = "repeat-y" === s || "repeat" === s,
          h = t2(u, { x: t, y: r, defaultX: t, defaultY: r }),
          p = t2(a, { x: t, y: r, defaultX: 0, defaultY: 0 });
        if (
          o.startsWith("linear-gradient(") ||
          o.startsWith("repeating-linear-gradient(")
        )
          return (function (
            { id: e, width: t, height: r, repeatX: n, repeatY: i },
            o,
            u,
            a,
            s,
            l
          ) {
            var c, f;
            let d = (0, b.wg)(o),
              [h, p] = u,
              D = o.startsWith("repeating"),
              g,
              m,
              v;
            if ("directional" === d.orientation.type) {
              let e, t, r, n;
              m = Math.sqrt(
                Math.pow(
                  (((c = d.orientation.value),
                  (e = 0),
                  (t = 0),
                  (r = 0),
                  (n = 0),
                  c.includes("top") ? (t = 1) : c.includes("bottom") && (n = 1),
                  c.includes("left") ? (e = 1) : c.includes("right") && (r = 1),
                  e || r || t || n || (t = 1),
                  (g = { x1: e, y1: t, x2: r, y2: n })).x2 -
                    g.x1) *
                    h,
                  2
                ) + Math.pow((g.y2 - g.y1) * p, 2)
              );
            } else if ("angular" === d.orientation.type) {
              let e, t, r, n, i, o, u, a, s, l;
              let { length: c, ...D } =
                ((f =
                  (tr(
                    `${d.orientation.value.value}${d.orientation.value.unit}`
                  ) /
                    180) *
                  Math.PI),
                (e = Math.pow(p / h, 2)),
                (l = (c) => {
                  if (0 === c) {
                    (t = 0), (r = p), (n = 0), (i = 0), (o = p);
                    return;
                  }
                  if (c === Math.PI / 2) {
                    (t = 0), (r = 0), (n = h), (i = 0), (o = h);
                    return;
                  }
                  if (c > 0 && c < Math.PI / 2) {
                    (t =
                      ((e * h) / 2 / Math.tan(c) - p / 2) /
                      (Math.tan(c) + e / Math.tan(c))),
                      (r = Math.tan(c) * t + p),
                      (o = Math.sqrt(
                        Math.pow((n = Math.abs(h / 2 - t) + h / 2) - t, 2) +
                          Math.pow((i = p / 2 - Math.abs(r - p / 2)) - r, 2)
                      )),
                      (a =
                        (h / 2 / Math.tan(c) - p / 2) /
                        (Math.tan(c) + 1 / Math.tan(c))),
                      (s = Math.tan(c) * a + p),
                      (o =
                        2 *
                        Math.sqrt(
                          Math.pow(h / 2 - a, 2) + Math.pow(p / 2 - s, 2)
                        ));
                    return;
                  }
                  if (c > Math.PI / 2 && c < Math.PI) {
                    (t =
                      (p / 2 + (e * h) / 2 / Math.tan(c)) /
                      (Math.tan(c) + e / Math.tan(c))),
                      (r = Math.tan(c) * t),
                      (n = Math.abs(h / 2 - t) + h / 2),
                      (i = p / 2 + Math.abs(r - p / 2)),
                      (a =
                        (h / 2 / Math.tan(c) + p / 2) /
                        (Math.tan(c) + 1 / Math.tan(c))),
                      (s = Math.tan(c) * a),
                      (o =
                        2 *
                        Math.sqrt(
                          Math.pow(h / 2 - a, 2) + Math.pow(p / 2 - s, 2)
                        ));
                    return;
                  }
                  c >= Math.PI &&
                    (l(c - Math.PI),
                    (u = t),
                    (t = n),
                    (n = u),
                    (u = r),
                    (r = i),
                    (i = u));
                })((f = ((f % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI))),
                { x1: t / h, y1: r / p, x2: n / h, y2: i / p, length: o });
              (m = c), (g = D);
            }
            v = D
              ? (function (e, t, r, n) {
                  let { x1: i, x2: o, y1: u, y2: a } = r,
                    s = e[0].offset
                      ? "%" === e[0].offset.unit
                        ? Number(e[0].offset.value) / 100
                        : tt(
                            `${e[0].offset.value}${e[0].offset.unit}`,
                            n.fontSize,
                            t,
                            n,
                            !0
                          ) / t
                      : 0,
                    l = e.at(-1).offset
                      ? "%" === e.at(-1).offset.unit
                        ? Number(e.at(-1).offset.value) / 100
                        : tt(
                            `${e.at(-1).offset.value}${e.at(-1).offset.unit}`,
                            n.fontSize,
                            t,
                            n,
                            !0
                          ) / t
                      : 1;
                  return {
                    x1: (o - i) * s + i,
                    y1: (a - u) * s + u,
                    x2: (o - i) * l + i,
                    y2: (a - u) * l + u,
                  };
                })(d.stops, m, g, s)
              : g;
            let y = t0(m, d.stops, s, D, l),
              F = `satori_bi${e}`,
              w = `satori_pattern_${e}`,
              x = tc(
                "pattern",
                {
                  id: w,
                  x: a[0] / t,
                  y: a[1] / r,
                  width: n ? h / t : "1",
                  height: i ? p / r : "1",
                  patternUnits: "objectBoundingBox",
                },
                tc(
                  "linearGradient",
                  { id: F, ...v, spreadMethod: D ? "repeat" : "pad" },
                  y
                    .map((e) =>
                      tc("stop", {
                        offset: (e.offset ?? 0) * 100 + "%",
                        "stop-color": e.color,
                      })
                    )
                    .join("")
                ) +
                  tc("rect", {
                    x: 0,
                    y: 0,
                    width: h,
                    height: p,
                    fill: `url(#${F})`,
                  })
              );
            return [w, x];
          })(
            { id: e, width: t, height: r, repeatX: f, repeatY: d },
            o,
            h,
            p,
            l,
            c
          );
        if (o.startsWith("radial-gradient("))
          return (function (
            { id: e, width: t, height: r, repeatX: n, repeatY: i },
            o,
            u,
            a,
            s,
            l
          ) {
            var c, f, d, h;
            let p;
            let { shape: D, stops: g, position: m, size: v } = (0, b.uf)(o),
              [y, F] = u,
              w = y / 2,
              x = F / 2,
              E =
                ((f = m.x),
                (d = m.y),
                (h = s.fontSize),
                (p = { x: y / 2, y: F / 2 }),
                "keyword" === f.type
                  ? Object.assign(p, t1(f.value, y, F, "x"))
                  : (p.x =
                      tt(`${f.value.value}${f.value.unit}`, h, y, s, !0) ||
                      y / 2),
                "keyword" === d.type
                  ? Object.assign(p, t1(d.value, y, F, "y"))
                  : (p.y =
                      tt(`${d.value.value}${d.value.unit}`, h, F, s, !0) ||
                      F / 2),
                p);
            (w = E.x), (x = E.y);
            let C = t0(t, g, s, !1, l),
              k = `satori_radial_${e}`,
              S = `satori_pattern_${e}`,
              _ = `satori_mask_${e}`,
              T = (function (e, t, r, n, i, o) {
                let [u, a] = i,
                  { x: s, y: l } = n,
                  c = {},
                  f = 0,
                  d = 0;
                if (!t.some((e) => "keyword" === e.type)) {
                  if (t.some((e) => e.value.value.startsWith("-")))
                    throw Error(
                      "disallow setting negative values to the size of the shape. Check https://w3c.github.io/csswg-drafts/css-images/#valdef-rg-size-length-0"
                    );
                  return "circle" === e
                    ? {
                        r: Number(
                          tt(
                            `${t[0].value.value}${t[0].value.unit}`,
                            r,
                            u,
                            o,
                            !0
                          )
                        ),
                      }
                    : {
                        rx: Number(
                          tt(
                            `${t[0].value.value}${t[0].value.unit}`,
                            r,
                            u,
                            o,
                            !0
                          )
                        ),
                        ry: Number(
                          tt(
                            `${t[1].value.value}${t[1].value.unit}`,
                            r,
                            a,
                            o,
                            !0
                          )
                        ),
                      };
                }
                switch (t[0].value) {
                  case "farthest-corner":
                    (f = Math.max(Math.abs(u - s), Math.abs(s))),
                      (d = Math.max(Math.abs(a - l), Math.abs(l)));
                    break;
                  case "closest-corner":
                    (f = Math.min(Math.abs(u - s), Math.abs(s))),
                      (d = Math.min(Math.abs(a - l), Math.abs(l)));
                    break;
                  case "farthest-side":
                    return (
                      "circle" === e
                        ? (c.r = Math.max(
                            Math.abs(u - s),
                            Math.abs(s),
                            Math.abs(a - l),
                            Math.abs(l)
                          ))
                        : ((c.rx = Math.max(Math.abs(u - s), Math.abs(s))),
                          (c.ry = Math.max(Math.abs(a - l), Math.abs(l)))),
                      c
                    );
                  case "closest-side":
                    return (
                      "circle" === e
                        ? (c.r = Math.min(
                            Math.abs(u - s),
                            Math.abs(s),
                            Math.abs(a - l),
                            Math.abs(l)
                          ))
                        : ((c.rx = Math.min(Math.abs(u - s), Math.abs(s))),
                          (c.ry = Math.min(Math.abs(a - l), Math.abs(l)))),
                      c
                    );
                }
                if ("circle" === e) c.r = Math.sqrt(f * f + d * d);
                else {
                  let e = 0 !== d ? f / d : 1;
                  0 === f
                    ? ((c.rx = 0), (c.ry = 0))
                    : ((c.ry = Math.sqrt(f * f + d * d * e * e) / e),
                      (c.rx = c.ry * e));
                }
                return c;
              })(D, v, s.fontSize, { x: w, y: x }, [y, F], s),
              A = tc(
                "pattern",
                {
                  id: S,
                  x: a[0] / t,
                  y: a[1] / r,
                  width: n ? y / t : "1",
                  height: i ? F / r : "1",
                  patternUnits: "objectBoundingBox",
                },
                tc(
                  "radialGradient",
                  { id: k },
                  C.map((e) =>
                    tc("stop", { offset: e.offset || 0, "stop-color": e.color })
                  ).join("")
                ) +
                  tc(
                    "mask",
                    { id: _ },
                    tc("rect", {
                      x: 0,
                      y: 0,
                      width: y,
                      height: F,
                      fill: "#fff",
                    })
                  ) +
                  tc("rect", {
                    x: 0,
                    y: 0,
                    width: y,
                    height: F,
                    fill:
                      (null == (c = C.at(-1)) ? void 0 : c.color) ||
                      "transparent",
                  }) +
                  tc(D, {
                    cx: w,
                    cy: x,
                    width: y,
                    height: F,
                    ...T,
                    fill: `url(#${k})`,
                    mask: `url(#${_})`,
                  })
              );
            return [S, A];
          })(
            { id: e, width: t, height: r, repeatX: f, repeatY: d },
            o,
            h,
            p,
            l,
            c
          );
        if (o.startsWith("url(")) {
          let a = t2(u, { x: t, y: r, defaultX: 0, defaultY: 0 }),
            [s, l, h] = await t_(o.slice(4, -1)),
            D = "mask" === c ? l || a[0] : a[0] || l,
            g = "mask" === c ? h || a[1] : a[1] || h;
          return [
            `satori_bi${e}`,
            tc(
              "pattern",
              {
                id: `satori_bi${e}`,
                patternContentUnits: "userSpaceOnUse",
                patternUnits: "userSpaceOnUse",
                x: p[0] + n,
                y: p[1] + i,
                width: f ? D : "100%",
                height: d ? g : "100%",
              },
              tc("image", {
                x: 0,
                y: 0,
                width: D,
                height: g,
                preserveAspectRatio: "none",
                href: s,
              })
            ),
          ];
        }
        throw Error(`Invalid background image: "${o}"`);
      }
      function t6(e, t, r) {
        return (
          r < e + t &&
            (r / 2 < e && r / 2 < t
              ? (e = t = r / 2)
              : r / 2 < e
              ? (e = r - t)
              : r / 2 < t && (t = r - e)),
          [e, t]
        );
      }
      function t5(e) {
        e[0] = e[1] = Math.min(e[0], e[1]);
      }
      function t8(e, t, r, n, i) {
        if ("string" == typeof e) {
          let o = e.split(" ").map((e) => e.trim()),
            u = !o[1] && !o[0].endsWith("%");
          return (
            (o[1] = o[1] || o[0]),
            [
              u,
              [
                Math.min(tt(o[0], n, t, i, !0), t),
                Math.min(tt(o[1], n, r, i, !0), r),
              ],
            ]
          );
        }
        return "number" == typeof e
          ? [!0, [Math.min(e, t), Math.min(e, r)]]
          : [!0, void 0];
      }
      var t4 = (e) => e && 0 !== e[0] && 0 !== e[1];
      function t7({ left: e, top: t, width: r, height: n }, i, o) {
        let {
            borderTopLeftRadius: u,
            borderTopRightRadius: a,
            borderBottomLeftRadius: s,
            borderBottomRightRadius: l,
            fontSize: c,
          } = i,
          f,
          d,
          h,
          p;
        if (
          (([f, u] = t8(u, r, n, c, i)),
          ([d, a] = t8(a, r, n, c, i)),
          ([h, s] = t8(s, r, n, c, i)),
          ([p, l] = t8(l, r, n, c, i)),
          !o && !t4(u) && !t4(a) && !t4(s) && !t4(l))
        )
          return "";
        (u ||= [0, 0]),
          (a ||= [0, 0]),
          (s ||= [0, 0]),
          (l ||= [0, 0]),
          ([u[0], a[0]] = t6(u[0], a[0], r)),
          ([s[0], l[0]] = t6(s[0], l[0], r)),
          ([u[1], s[1]] = t6(u[1], s[1], n)),
          ([a[1], l[1]] = t6(a[1], l[1], n)),
          f && t5(u),
          d && t5(a),
          h && t5(s),
          p && t5(l);
        let D = [];
        (D[0] = [a, a]),
          (D[1] = [l, [-l[0], l[1]]]),
          (D[2] = [s, [-s[0], -s[1]]]),
          (D[3] = [u, [u[0], -u[1]]]);
        let g = `h${r - u[0] - a[0]} a${D[0][0]} 0 0 1 ${D[0][1]}`,
          m = `v${n - a[1] - l[1]} a${D[1][0]} 0 0 1 ${D[1][1]}`,
          v = `h${l[0] + s[0] - r} a${D[2][0]} 0 0 1 ${D[2][1]}`,
          b = `v${s[1] + u[1] - n} a${D[3][0]} 0 0 1 ${D[3][1]}`;
        if (o) {
          let i = function (i) {
              let o = (function ([e, t]) {
                return 0 === Math.round(1e3 * e) && 0 === Math.round(1e3 * t)
                  ? 0
                  : Math.round(((e * t) / Math.sqrt(e * e + t * t)) * 1e3) /
                      1e3;
              })([u, a, l, s][i]);
              return 0 === i
                ? [
                    [e + u[0] - o, t + u[1] - o],
                    [e + u[0], t],
                  ]
                : 1 === i
                ? [
                    [e + r - a[0] + o, t + a[1] - o],
                    [e + r, t + a[1]],
                  ]
                : 2 === i
                ? [
                    [e + r - l[0] + o, t + n - l[1] + o],
                    [e + r - l[0], t + n],
                  ]
                : [
                    [e + s[0] - o, t + n - s[1] + o],
                    [e, t + n - s[1]],
                  ];
            },
            c = o.indexOf(!1);
          if (!o.includes(!0)) throw Error("Invalid `partialSides`.");
          if (-1 === c) c = 0;
          else for (; !o[c]; ) c = (c + 1) % 4;
          let f = "",
            d = i(c),
            h = `M${d[0]} A${D[(c + 3) % 4][0]} 0 0 1 ${d[1]}`,
            p = 0;
          for (; p < 4 && o[(c + p) % 4]; p++)
            (f += h + " "), (h = [g, m, v, b][(c + p) % 4]);
          let y = (c + p) % 4;
          f += h.split(" ")[0];
          let F = i(y);
          return f + ` A${D[(y + 3) % 4][0]} 0 0 1 ${F[0]}`;
        }
        return `M${e + u[0]},${t} ${g} ${m} ${v} ${b}`;
      }
      function t9(e, t, r) {
        return (
          r[e + "Width"] === r[t + "Width"] &&
          r[e + "Style"] === r[t + "Style"] &&
          r[e + "Color"] === r[t + "Color"]
        );
      }
      function re(
        {
          left: e,
          top: t,
          width: r,
          height: n,
          props: i,
          asContentMask: o,
          maskBorderOnly: u,
        },
        a
      ) {
        let s = ["borderTop", "borderRight", "borderBottom", "borderLeft"];
        if (!o && !s.some((e) => a[e + "Width"])) return "";
        let l = "",
          c = 0;
        for (; c > 0 && t9(s[c], s[(c + 3) % 4], a); ) c = (c + 3) % 4;
        let f = [!1, !1, !1, !1],
          d = [];
        for (let h = 0; h < 4; h++) {
          let p = (c + h) % 4,
            D = (c + h + 1) % 4,
            g = s[p],
            m = s[D];
          if (
            ((f[p] = !0),
            (d = [a[g + "Width"], a[g + "Style"], a[g + "Color"], g]),
            !t9(g, m, a))
          ) {
            let s =
              (d[0] || 0) +
              ((o && !u && a[g.replace("border", "padding")]) || 0);
            s &&
              (l += tc("path", {
                width: r,
                height: n,
                ...i,
                fill: "none",
                stroke: o ? "#000" : d[2],
                "stroke-width": 2 * s,
                "stroke-dasharray":
                  o || "dashed" !== d[1] ? void 0 : 2 * s + " " + s,
                d: t7({ left: e, top: t, width: r, height: n }, a, f),
              })),
              (f = [!1, !1, !1, !1]);
          }
        }
        if (f.some(Boolean)) {
          let s =
            (d[0] || 0) +
            ((o && !u && a[d[3].replace("border", "padding")]) || 0);
          s &&
            (l += tc("path", {
              width: r,
              height: n,
              ...i,
              fill: "none",
              stroke: o ? "#000" : d[2],
              "stroke-width": 2 * s,
              "stroke-dasharray":
                o || "dashed" !== d[1] ? void 0 : 2 * s + " " + s,
              d: t7({ left: e, top: t, width: r, height: n }, a, f),
            }));
        }
        return l;
      }
      var rt = /circle\((.+)\)/,
        rr = /ellipse\((.+)\)/,
        rn = /path\((.+)\)/,
        ri = /polygon\((.+)\)/,
        ro = /inset\((.+)\)/;
      function ru(e) {
        let [, t = "nonzero", r] =
          e.replace(/('|")/g, "").match(/^(nonzero|evenodd)?,?(.+)/) || [];
        return [t, r];
      }
      function ra(e, t, r) {
        let n = e.split(" "),
          i = { x: n[0] || "50%", y: n[1] || "50%" };
        return (
          n.forEach((e) => {
            "top" === e
              ? (i.y = 0)
              : "bottom" === e
              ? (i.y = r)
              : "left" === e
              ? (i.x = 0)
              : "right" === e
              ? (i.x = t)
              : "center" === e && ((i.x = t / 2), (i.y = r / 2));
          }),
          i
        );
      }
      function rs(e) {
        return `satori_cp-${e}`;
      }
      var rl = (e) => `satori_mi-${e}`;
      async function rc(e, t, r) {
        if (!t.maskImage) return ["", ""];
        let { left: n, top: i, width: o, height: u, id: a } = e,
          s = t.maskImage,
          l = s.length;
        if (!l) return ["", ""];
        let c = rl(a),
          f = "";
        for (let e = 0; e < l; e++) {
          let t = s[e],
            [a, l] = await t3(
              { id: `${c}-${e}`, left: n, top: i, width: o, height: u },
              t,
              r,
              "mask"
            );
          f +=
            l +
            tc("rect", { x: n, y: i, width: o, height: u, fill: `url(#${a})` });
        }
        return (f = tc("mask", { id: c }, f)), [c, f];
      }
      async function rf(
        {
          id: e,
          left: t,
          top: r,
          width: n,
          height: i,
          isInheritingTransform: o,
          src: u,
          debug: a,
        },
        s,
        l
      ) {
        if ("none" === s.display) return "";
        let c = !!u,
          f = "rect",
          d = "",
          p = "",
          D = [],
          g = 1,
          m = "";
        s.backgroundColor && D.push(s.backgroundColor),
          void 0 !== s.opacity && (g = +s.opacity),
          s.transform &&
            (d = tY(
              { left: t, top: r, width: n, height: i },
              s.transform,
              o,
              s.transformOrigin
            ));
        let v = "";
        if (s.backgroundImage) {
          let o = [];
          for (let u = 0; u < s.backgroundImage.length; u++) {
            let a = s.backgroundImage[u],
              c = await t3(
                { id: e + "_" + u, width: n, height: i, left: t, top: r },
                a,
                l
              );
            c && o.unshift(c);
          }
          for (let e of o)
            D.push(`url(#${e[0]})`), (p += e[1]), e[2] && (v += e[2]);
        }
        let [b, y] = await rc(
          { id: e, left: t, top: r, width: n, height: i },
          s,
          l
        );
        p += y;
        let F = b
            ? `url(#${b})`
            : s._inheritedMaskId
            ? `url(#${s._inheritedMaskId})`
            : void 0,
          w = t7({ left: t, top: r, width: n, height: i }, s);
        w && (f = "path");
        let x = s._inheritedClipPathId;
        a &&
          (m = tc("rect", {
            x: t,
            y: r,
            width: n,
            height: i,
            fill: "transparent",
            stroke: "#ff5757",
            "stroke-width": 1,
            transform: d || void 0,
            "clip-path": x ? `url(#${x})` : void 0,
          }));
        let { backgroundClip: E, filter: C } = s,
          k =
            "text" === E
              ? `url(#satori_bct-${e})`
              : x
              ? `url(#${x})`
              : s.clipPath
              ? `url(#${rs(e)})`
              : void 0,
          S = (function (
            {
              left: e,
              top: t,
              width: r,
              height: n,
              path: i,
              matrix: o,
              id: u,
              currentClipPath: a,
              src: s,
            },
            l,
            c
          ) {
            let f = "",
              d =
                l.clipPath && "none" !== l.clipPath
                  ? (function (e, t, r) {
                      if ("none" === t.clipPath) return "";
                      let n = (function ({ width: e, height: t }, r, n) {
                          return {
                            parseCircle: function (r) {
                              let i = r.match(rt);
                              if (!i) return null;
                              let [, o] = i,
                                [u, a = ""] = o
                                  .split("at")
                                  .map((e) => e.trim()),
                                { x: s, y: l } = ra(a, e, t);
                              return {
                                type: "circle",
                                r: tt(
                                  u,
                                  n.fontSize,
                                  Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) /
                                    Math.sqrt(2),
                                  n,
                                  !0
                                ),
                                cx: tt(s, n.fontSize, e, n, !0),
                                cy: tt(l, n.fontSize, t, n, !0),
                              };
                            },
                            parseEllipse: function (r) {
                              let i = r.match(rr);
                              if (!i) return null;
                              let [, o] = i,
                                [u, a = ""] = o
                                  .split("at")
                                  .map((e) => e.trim()),
                                [s, l] = u.split(" "),
                                { x: c, y: f } = ra(a, e, t);
                              return {
                                type: "ellipse",
                                rx: tt(s || "50%", n.fontSize, e, n, !0),
                                ry: tt(l || "50%", n.fontSize, t, n, !0),
                                cx: tt(c, n.fontSize, e, n, !0),
                                cy: tt(f, n.fontSize, t, n, !0),
                              };
                            },
                            parsePath: function (e) {
                              let t = e.match(rn);
                              if (!t) return null;
                              let [r, n] = ru(t[1]);
                              return { type: "path", d: n, "fill-rule": r };
                            },
                            parsePolygon: function (r) {
                              let i = r.match(ri);
                              if (!i) return null;
                              let [o, u] = ru(i[1]);
                              return {
                                type: "polygon",
                                "fill-rule": o,
                                points: u
                                  .split(",")
                                  .map((r) =>
                                    r
                                      .split(" ")
                                      .map((r, i) =>
                                        tt(
                                          r,
                                          n.fontSize,
                                          0 === i ? e : t,
                                          n,
                                          !0
                                        )
                                      )
                                      .join(" ")
                                  )
                                  .join(","),
                              };
                            },
                            parseInset: function (i) {
                              let o = i.match(ro);
                              if (!o) return null;
                              let [u, a] = (
                                  o[1].includes("round")
                                    ? o[1]
                                    : `${o[1].trim()} round 0`
                                ).split("round"),
                                s = (0, h.HM)("borderRadius", a, !0),
                                l = Object.values(s)
                                  .map((e) => String(e))
                                  .map(
                                    (r, i) =>
                                      tt(
                                        r,
                                        n.fontSize,
                                        0 === i || 2 === i ? t : e,
                                        n,
                                        !0
                                      ) || 0
                                  ),
                                c = Object.values((0, h.HM)("margin", u, !0))
                                  .map((e) => String(e))
                                  .map(
                                    (r, i) =>
                                      tt(
                                        r,
                                        n.fontSize,
                                        0 === i || 2 === i ? t : e,
                                        n,
                                        !0
                                      ) || 0
                                  ),
                                f = c[3],
                                d = c[0],
                                p = e - (c[1] + c[3]),
                                D = t - (c[0] + c[2]);
                              return l.some((e) => e > 0)
                                ? {
                                    type: "path",
                                    d: t7(
                                      { left: f, top: d, width: p, height: D },
                                      { ...r, ...s }
                                    ),
                                  }
                                : {
                                    type: "rect",
                                    x: f,
                                    y: d,
                                    width: p,
                                    height: D,
                                  };
                            },
                          };
                        })(e, t, r),
                        i = t.clipPath,
                        o = { type: "" };
                      for (let e of Object.keys(n)) if ((o = n[e](i))) break;
                      if (o) {
                        let { type: t, ...r } = o;
                        return tc(
                          "clipPath",
                          {
                            id: rs(e.id),
                            "clip-path": e.currentClipPath,
                            transform: `translate(${e.left}, ${e.top})`,
                          },
                          tc(t, r)
                        );
                      }
                      return "";
                    })(
                      {
                        left: e,
                        top: t,
                        width: r,
                        height: n,
                        path: i,
                        id: u,
                        matrix: o,
                        currentClipPath: a,
                        src: s,
                      },
                      l,
                      c
                    )
                  : "";
            return (
              (f =
                "hidden" === l.overflow || s
                  ? tc(
                      "clipPath",
                      { id: d ? `satori_ocp-${u}` : rs(u), "clip-path": a },
                      tc(i ? "path" : "rect", {
                        x: e,
                        y: t,
                        width: r,
                        height: n,
                        d: i || void 0,
                        transform:
                          "hidden" === l.overflow && l.transform && o
                            ? o
                            : void 0,
                      })
                    )
                  : ""),
              d +
                f +
                (function (
                  {
                    id: e,
                    left: t,
                    top: r,
                    width: n,
                    height: i,
                    matrix: o,
                    borderOnly: u,
                  },
                  a
                ) {
                  let s =
                      (a.borderLeftWidth || 0) + (u ? 0 : a.paddingLeft || 0),
                    l = (a.borderTopWidth || 0) + (u ? 0 : a.paddingTop || 0);
                  return tc(
                    "mask",
                    { id: e },
                    tc("rect", {
                      x: t + s,
                      y: r + l,
                      width:
                        n -
                        s -
                        ((a.borderRightWidth || 0) +
                          (u ? 0 : a.paddingRight || 0)),
                      height:
                        i -
                        l -
                        ((a.borderBottomWidth || 0) +
                          (u ? 0 : a.paddingBottom || 0)),
                      fill: "#fff",
                      transform:
                        "hidden" === a.overflow && a.transform && o
                          ? o
                          : void 0,
                      mask: a._inheritedMaskId
                        ? `url(#${a._inheritedMaskId})`
                        : void 0,
                    }) +
                      re(
                        {
                          left: t,
                          top: r,
                          width: n,
                          height: i,
                          props: { transform: o || void 0 },
                          asContentMask: !0,
                          maskBorderOnly: u,
                        },
                        a
                      )
                  );
                })(
                  {
                    id: `satori_om-${u}`,
                    left: e,
                    top: t,
                    width: r,
                    height: n,
                    matrix: o,
                    borderOnly: !s,
                  },
                  l
                )
            );
          })(
            {
              left: t,
              top: r,
              width: n,
              height: i,
              path: w,
              id: e,
              matrix: d,
              currentClipPath: k,
              src: u,
            },
            s,
            l
          ),
          _ = D.map((e) =>
            tc(f, {
              x: t,
              y: r,
              width: n,
              height: i,
              fill: e,
              d: w || void 0,
              transform: d || void 0,
              "clip-path": s.transform ? void 0 : k,
              style: C ? `filter:${C}` : void 0,
              mask: s.transform ? void 0 : F,
            })
          ).join(""),
          T = (function (
            {
              id: e,
              currentClipPathId: t,
              borderPath: r,
              borderType: n,
              left: i,
              top: o,
              width: u,
              height: a,
            },
            s
          ) {
            if (
              !(
                s.borderTopWidth ||
                s.borderRightWidth ||
                s.borderBottomWidth ||
                s.borderLeftWidth
              )
            )
              return null;
            let l = `satori_bc-${e}`;
            return [
              tc(
                "clipPath",
                { id: l, "clip-path": t ? `url(#${t})` : void 0 },
                tc(n, { x: i, y: o, width: u, height: a, d: r || void 0 })
              ),
              l,
            ];
          })(
            {
              id: e,
              left: t,
              top: r,
              width: n,
              height: i,
              currentClipPathId: x,
              borderPath: w,
              borderType: f,
            },
            s
          ),
          A;
        if (c) {
          let o = (s.borderLeftWidth || 0) + (s.paddingLeft || 0),
            a = (s.borderTopWidth || 0) + (s.paddingTop || 0),
            l = (s.borderRightWidth || 0) + (s.paddingRight || 0),
            c = (s.borderBottomWidth || 0) + (s.paddingBottom || 0),
            h =
              "contain" === s.objectFit
                ? "xMidYMid"
                : "cover" === s.objectFit
                ? "xMidYMid slice"
                : "none";
          s.transform &&
            (A = (function (
              {
                id: e,
                borderRadiusPath: t,
                borderType: r,
                left: n,
                top: i,
                width: o,
                height: u,
              },
              a
            ) {
              let s = `satori_brc-${e}`;
              return [
                tc(
                  "clipPath",
                  { id: s },
                  tc(r, { x: n, y: i, width: o, height: u, d: t || void 0 })
                ),
                s,
              ];
            })(
              {
                id: e,
                borderRadiusPath: w,
                borderType: f,
                left: t,
                top: r,
                width: n,
                height: i,
              },
              0
            )),
            (_ += tc("image", {
              x: t + o,
              y: r + a,
              width: n - o - l,
              height: i - a - c,
              href: u,
              preserveAspectRatio: h,
              transform: d || void 0,
              style: C ? `filter:${C}` : void 0,
              "clip-path": s.transform
                ? A
                  ? `url(#${A[1]})`
                  : void 0
                : `url(#satori_cp-${e})`,
              mask: s.transform
                ? void 0
                : b
                ? `url(#${b})`
                : `url(#satori_om-${e})`,
            }));
        }
        if (T) {
          p += T[0];
          let e = T[1];
          _ += re(
            {
              left: t,
              top: r,
              width: n,
              height: i,
              props: { transform: d || void 0, "clip-path": `url(#${e})` },
            },
            s
          );
        }
        let O = (function (
          { width: e, height: t, shape: r, opacity: n, id: i },
          o
        ) {
          if (!o.boxShadow) return null;
          let u = "",
            a = "";
          for (let s = o.boxShadow.length - 1; s >= 0; s--) {
            let l = "",
              c = o.boxShadow[s];
            c.spreadRadius && c.inset && (c.spreadRadius = -c.spreadRadius);
            let f = (c.blurRadius * c.blurRadius) / 4 + (c.spreadRadius || 0),
              d = Math.min(-f - (c.inset ? c.offsetX : 0), 0),
              h = Math.max(f + e - (c.inset ? c.offsetX : 0), e),
              p = Math.min(-f - (c.inset ? c.offsetY : 0), 0),
              D = Math.max(f + t - (c.inset ? c.offsetY : 0), t),
              g = `satori_s-${i}-${s}`,
              m = `satori_ms-${i}-${s}`,
              v = c.spreadRadius
                ? r.replace(
                    'stroke-width="0"',
                    `stroke-width="${2 * c.spreadRadius}"`
                  )
                : r;
            l += tc(
              "mask",
              { id: m, maskUnits: "userSpaceOnUse" },
              tc("rect", {
                x: 0,
                y: 0,
                width: o._viewportWidth || "100%",
                height: o._viewportHeight || "100%",
                fill: c.inset ? "#000" : "#fff",
              }) +
                v
                  .replace(
                    'fill="#fff"',
                    c.inset ? 'fill="#fff"' : 'fill="#000"'
                  )
                  .replace('stroke="#fff"', "")
            );
            let b = v
              .replace(
                /d="([^"]+)"/,
                (e, t) =>
                  'd="' +
                  (function (e, t, r) {
                    return e.replace(
                      /([MA])([0-9.-]+),([0-9.-]+)/g,
                      function (e, n, i, o) {
                        return (
                          n + (parseFloat(i) + t) + "," + (parseFloat(o) + r)
                        );
                      }
                    );
                  })(t, c.offsetX, c.offsetY) +
                  '"'
              )
              .replace(
                /x="([^"]+)"/,
                (e, t) => 'x="' + (parseFloat(t) + c.offsetX) + '"'
              )
              .replace(
                /y="([^"]+)"/,
                (e, t) => 'y="' + (parseFloat(t) + c.offsetY) + '"'
              );
            c.spreadRadius &&
              c.spreadRadius < 0 &&
              (l += tc(
                "mask",
                { id: m + "-neg", maskUnits: "userSpaceOnUse" },
                b
                  .replace('stroke="#fff"', 'stroke="#000"')
                  .replace(
                    /stroke-width="[^"]+"/,
                    `stroke-width="${-(2 * c.spreadRadius)}"`
                  )
              )),
              c.spreadRadius &&
                c.spreadRadius < 0 &&
                (b = tc("g", { mask: `url(#${m}-neg)` }, b)),
              (l +=
                tc(
                  "defs",
                  {},
                  tc(
                    "filter",
                    {
                      id: g,
                      x: `${(d / e) * 100}%`,
                      y: `${(p / t) * 100}%`,
                      width: `${((h - d) / e) * 100}%`,
                      height: `${((D - p) / t) * 100}%`,
                    },
                    tc("feGaussianBlur", {
                      stdDeviation: c.blurRadius / 2,
                      result: "b",
                    }) +
                      tc("feFlood", {
                        "flood-color": c.color,
                        in: "SourceGraphic",
                        result: "f",
                      }) +
                      tc("feComposite", {
                        in: "f",
                        in2: "b",
                        operator: c.inset ? "out" : "in",
                      })
                  )
                ) +
                tc(
                  "g",
                  { mask: `url(#${m})`, filter: `url(#${g})`, opacity: n },
                  b
                )),
              c.inset ? (a += l) : (u += l);
          }
          return [u, a];
        })(
          {
            width: n,
            height: i,
            id: e,
            opacity: g,
            shape: tc(f, {
              x: t,
              y: r,
              width: n,
              height: i,
              fill: "#fff",
              stroke: "#fff",
              "stroke-width": 0,
              d: w || void 0,
              transform: d || void 0,
              "clip-path": k,
              mask: F,
            }),
          },
          s
        );
        return (
          (p ? tc("defs", {}, p) : "") +
          (O ? O[0] : "") +
          (A ? A[0] : "") +
          S +
          (1 !== g ? `<g opacity="${g}">` : "") +
          (s.transform && (k || F)
            ? `<g${k ? ` clip-path="${k}"` : ""}${F ? ` mask="${F}"` : ""}>`
            : "") +
          (v || _) +
          (s.transform && (k || F) ? "</g>" : "") +
          (1 !== g ? "</g>" : "") +
          (O ? O[1] : "") +
          m
        );
      }
      var rd = {
          emoji: RegExp(
            /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
            ""
          ),
          symbol: /\p{Symbol}/u,
          math: /\p{Math}/u,
        },
        rh = {
          "ja-JP":
            /\p{scx=Hira}|\p{scx=Kana}|\p{scx=Han}|[\u3000]|[\uFF00-\uFFEF]/u,
          "ko-KR": /\p{scx=Hangul}/u,
          "zh-CN": /\p{scx=Han}/u,
          "zh-TW": /\p{scx=Han}/u,
          "zh-HK": /\p{scx=Han}/u,
          "th-TH": /\p{scx=Thai}/u,
          "bn-IN": /\p{scx=Bengali}/u,
          "ar-AR": /\p{scx=Arabic}/u,
          "ta-IN": /\p{scx=Tamil}/u,
          "ml-IN": /\p{scx=Malayalam}/u,
          "he-IL": /\p{scx=Hebrew}/u,
          "te-IN": /\p{scx=Telugu}/u,
          devanagari: /\p{scx=Devanagari}/u,
          kannada: /\p{scx=Kannada}/u,
        },
        rp = Object.keys({ ...rh, ...rd });
      async function* rD(e, t) {
        var r, n;
        let i = await eH(),
          {
            id: o,
            inheritedStyle: u,
            parent: a,
            font: s,
            debug: l,
            locale: c,
            embedFont: f = !0,
            graphemeImages: d,
            canLoadAdditionalAssets: h,
            getTwStyles: p,
          } = t;
        if (null === e || typeof e > "u") return yield, yield, "";
        if (!te(e) || "function" == typeof e.type) {
          let r;
          if (te(e)) {
            if (((n = e.type), /^class\s/.test(n.toString())))
              throw Error("Class component is not supported.");
            (r = rD(e.type(e.props), t)), yield (await r.next()).value;
          } else (r = tZ(String(e), t)), yield (await r.next()).value;
          await r.next();
          let i = yield;
          return (await r.next(i)).value;
        }
        let { type: D, props: g } = e;
        if (g && "dangerouslySetInnerHTML" in g)
          throw Error(
            "dangerouslySetInnerHTML property is not supported. See documentation for more information https://github.com/vercel/satori#jsx."
          );
        let { style: m, children: v, tw: b, lang: y = c } = g || {},
          F = (function (e) {
            if (e)
              return rp.find((t) =>
                t.toLowerCase().startsWith(e.toLowerCase())
              );
          })(y);
        b && (m = Object.assign(p(b, m), m));
        let w = i.Node.create();
        a.insertChild(w, a.getChildCount());
        let [x, E] = await tq(w, D, u, m, g),
          C = x.transform === u.transform;
        if (
          (C || (x.transform.__parent = u.transform),
          ("hidden" === x.overflow || (x.clipPath && "none" !== x.clipPath)) &&
            ((E._inheritedClipPathId = `satori_cp-${o}`),
            (E._inheritedMaskId = `satori_om-${o}`)),
          x.maskImage && (E._inheritedMaskId = `satori_mi-${o}`),
          "text" === x.backgroundClip)
        ) {
          let e = { value: "" };
          (E._inheritedBackgroundClipTextPath = e),
            (x._inheritedBackgroundClipTextPath = e);
        }
        let k = (function (e) {
            let t = typeof e > "u" ? [] : [].concat(e).flat(1 / 0),
              r = [];
            for (let e = 0; e < t.length; e++) {
              let n = t[e];
              typeof n > "u" ||
                "boolean" == typeof n ||
                null === n ||
                ("number" == typeof n && (n = String(n)),
                "string" == typeof n &&
                r.length &&
                "string" == typeof r[r.length - 1]
                  ? (r[r.length - 1] += n)
                  : r.push(n));
            }
            return r;
          })(v),
          S = [],
          _ = 0,
          T = [];
        for (let e of k) {
          let r = rD(e, {
            id: o + "-" + _++,
            parentStyle: x,
            inheritedStyle: E,
            isInheritingTransform: !0,
            parent: w,
            font: s,
            embedFont: f,
            debug: l,
            graphemeImages: d,
            canLoadAdditionalAssets: h,
            locale: F,
            getTwStyles: p,
            onNodeDetected: t.onNodeDetected,
          });
          h ? T.push(...((await r.next()).value || [])) : await r.next(),
            S.push(r);
        }
        for (let e of (yield T, S)) await e.next();
        let [A, O] = yield,
          { left: B, top: P, width: I, height: M } = w.getComputedLayout();
        (B += A), (P += O);
        let L = "",
          R = "",
          $ = "",
          { children: j, ...N } = g;
        if (
          (null == (r = t.onNodeDetected) ||
            r.call(t, {
              left: B,
              top: P,
              width: I,
              height: M,
              type: D,
              props: N,
              key: e.key,
              textContent: te(j) ? void 0 : j,
            }),
          "img" === D)
        ) {
          let e = x.__src;
          R = await rf(
            {
              id: o,
              left: B,
              top: P,
              width: I,
              height: M,
              src: e,
              isInheritingTransform: C,
              debug: l,
            },
            x,
            E
          );
        } else if ("svg" === D) {
          let t = x.color,
            r = await tB(e, t);
          R = await rf(
            {
              id: o,
              left: B,
              top: P,
              width: I,
              height: M,
              src: r,
              isInheritingTransform: C,
              debug: l,
            },
            x,
            E
          );
        } else {
          let e = null == m ? void 0 : m.display;
          if (
            "div" === D &&
            v &&
            "string" != typeof v &&
            "flex" !== e &&
            "none" !== e
          )
            throw Error(
              'Expected <div> to have explicit "display: flex" or "display: none" if it has more than one child node.'
            );
          R = await rf(
            {
              id: o,
              left: B,
              top: P,
              width: I,
              height: M,
              isInheritingTransform: C,
              debug: l,
            },
            x,
            E
          );
        }
        for (let e of S) L += (await e.next([B, P])).value;
        return (
          x._inheritedBackgroundClipTextPath &&
            ($ += tc(
              "clipPath",
              {
                id: `satori_bct-${o}`,
                "clip-path": x._inheritedClipPathId
                  ? `url(#${x._inheritedClipPathId})`
                  : void 0,
              },
              x._inheritedBackgroundClipTextPath.value
            )),
          $ + R + L
        );
      }
      var rg = "unknown",
        rm = class {
          constructor(e) {
            (this.fonts = new Map()), this.addFonts(e);
          }
          get({ name: e, weight: t, style: r }) {
            if (!this.fonts.has(e)) return null;
            "normal" === t && (t = 400),
              "bold" === t && (t = 700),
              "string" == typeof t && (t = Number.parseInt(t, 10));
            let n = [...this.fonts.get(e)],
              i = n[0];
            for (let e = 1; e < n.length; e++) {
              let [, o, u] = i,
                [, a, s] = n[e];
              (function (e, t, [r, n], [i, o]) {
                if (r !== i)
                  return r
                    ? i && r !== e
                      ? i === e
                        ? 1
                        : (400 === e && 500 === r) || (500 === e && 400 === r)
                        ? -1
                        : (400 === e && 500 === i) || (500 === e && 400 === i)
                        ? 1
                        : e < 400
                        ? r < e && i < e
                          ? i - r
                          : r < e
                          ? -1
                          : i < e
                          ? 1
                          : r - i
                        : e < r && e < i
                        ? r - i
                        : e < r
                        ? -1
                        : e < i
                        ? 1
                        : i - r
                      : -1
                    : 1;
                if (n !== o) {
                  if (n === t) return -1;
                  if (o === t) return 1;
                }
                return -1;
              })(t, r, [o, u], [a, s]) > 0 && (i = n[e]);
            }
            return i[0];
          }
          addFonts(e) {
            for (let t of e) {
              let { name: e, data: r, lang: n } = t;
              if (n && !rp.includes(n))
                throw Error(
                  `Invalid value for props \`lang\`: "${n}". The value must be one of the following: ${rp.join(
                    ", "
                  )}.`
                );
              let i = n ?? rg,
                o = y.ZP.parse(
                  "buffer" in r
                    ? r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
                    : r,
                  { lowMemory: !0 }
                ),
                u = o.charToGlyphIndex;
              (o.charToGlyphIndex = (e) => {
                let t = u.call(o, e);
                return (
                  0 === t && o._trackBrokenChars && o._trackBrokenChars.push(e),
                  t
                );
              }),
                this.defaultFont || (this.defaultFont = o);
              let a = `${e.toLowerCase()}_${i}`;
              this.fonts.has(a) || this.fonts.set(a, []),
                this.fonts.get(a).push([o, t.weight, t.style]);
            }
          }
          getEngine(
            e = 16,
            t = "normal",
            {
              fontFamily: r = "sans-serif",
              fontWeight: n = 400,
              fontStyle: i = "normal",
            },
            o
          ) {
            if (!this.fonts.size)
              throw Error(
                "No fonts are loaded. At least one font is required to calculate the layout."
              );
            r = (Array.isArray(r) ? r : [r]).map((e) => e.toLowerCase());
            let u = [];
            r.forEach((e) => {
              let t = this.get({ name: e, weight: n, style: i });
              if (t) {
                u.push(t);
                return;
              }
              let r = this.get({ name: e + "_unknown", weight: n, style: i });
              if (r) {
                u.push(r);
                return;
              }
            });
            let a = Array.from(this.fonts.keys()),
              s = [],
              l = [],
              c = [];
            for (let e of a)
              if (!r.includes(e)) {
                if (o) {
                  let t = (function (e) {
                    let t = e.split("_"),
                      r = t[t.length - 1];
                    return r === rg ? void 0 : r;
                  })(e);
                  t
                    ? t === o
                      ? s.push(this.get({ name: e, weight: n, style: i }))
                      : l.push(this.get({ name: e, weight: n, style: i }))
                    : c.push(this.get({ name: e, weight: n, style: i }));
                } else c.push(this.get({ name: e, weight: n, style: i }));
              }
            let f = new Map(),
              d = (e, t = !0) => {
                let r = [...u, ...c, ...s, ...(t ? l : [])];
                if (typeof e > "u") return t ? r[r.length - 1] : void 0;
                let n = e.charCodeAt(0);
                if (f.has(n)) return f.get(n);
                let i = r.find(
                  (n, i) => !!n.charToGlyphIndex(e) || (t && i === r.length - 1)
                );
                return i && f.set(n, i), i;
              },
              h = (t, r = !1) => {
                var n, i;
                return (
                  (((r
                    ? null == (i = null == (n = t.tables) ? void 0 : n.os2)
                      ? void 0
                      : i.sTypoAscender
                    : 0) || t.ascender) /
                    t.unitsPerEm) *
                  e
                );
              },
              p = (t, r = !1) => {
                var n, i;
                return (
                  (((r
                    ? null == (i = null == (n = t.tables) ? void 0 : n.os2)
                      ? void 0
                      : i.sTypoDescender
                    : 0) || t.descender) /
                    t.unitsPerEm) *
                  e
                );
              },
              D = (r, n = !1) => {
                var i, o;
                if ("string" == typeof t && "normal" === t) {
                  let t =
                    (n
                      ? null == (o = null == (i = r.tables) ? void 0 : i.os2)
                        ? void 0
                        : o.sTypoLineGap
                      : 0) || 0;
                  return h(r, n) - p(r, n) + (t / r.unitsPerEm) * e;
                }
                if ("number" == typeof t) return e * t;
              },
              g = (e) => d(e, !1);
            return {
              has: (e) => {
                if (
                  e ===
                  `
`
                )
                  return !0;
                let t = g(e);
                return (
                  !!t &&
                  ((t._trackBrokenChars = []),
                  t.stringToGlyphs(e),
                  !t._trackBrokenChars.length ||
                    ((t._trackBrokenChars = void 0), !1))
                );
              },
              baseline: (e, t = typeof e > "u" ? u[0] : d(e)) => {
                let r = h(t),
                  n = p(t);
                return r + (D(t) - (r - n)) / 2;
              },
              height: (e, t = typeof e > "u" ? u[0] : d(e)) => D(t),
              measure: (e, t) => this.measure(d, e, t),
              getSVG: (e, t) => this.getSVG(d, e, t),
            };
          }
          patchFontFallbackResolver(e, t) {
            let r = [];
            e._trackBrokenChars = r;
            let n = e.stringToGlyphs;
            return (
              (e.stringToGlyphs = (i, ...o) => {
                let u = n.call(e, i, ...o);
                for (let n = 0; n < u.length; n++)
                  if (void 0 === u[n].unicode) {
                    let i = r.shift(),
                      o = t(i);
                    if (o !== e) {
                      let t = o.charToGlyph(i),
                        r = e.unitsPerEm / o.unitsPerEm,
                        a = new y.ZP.Path();
                      (a.unitsPerEm = e.unitsPerEm),
                        (a.commands = t.path.commands.map((e) => {
                          let t = { ...e };
                          for (let e in t)
                            "number" == typeof t[e] && (t[e] *= r);
                          return t;
                        }));
                      let s = new y.ZP.Glyph({
                        ...t,
                        advanceWidth: t.advanceWidth * r,
                        xMin: t.xMin * r,
                        xMax: t.xMax * r,
                        yMin: t.yMin * r,
                        yMax: t.yMax * r,
                        path: a,
                      });
                      u[n] = s;
                    }
                  }
                return u;
              }),
              () => {
                (e.stringToGlyphs = n), (e._trackBrokenChars = void 0);
              }
            );
          }
          measure(e, t, { fontSize: r, letterSpacing: n = 0 }) {
            let i = e(t),
              o = this.patchFontFallbackResolver(i, e);
            try {
              return i.getAdvanceWidth(t, r, { letterSpacing: n / r });
            } finally {
              o();
            }
          }
          getSVG(e, t, { fontSize: r, top: n, left: i, letterSpacing: o = 0 }) {
            let u = e(t),
              a = this.patchFontFallbackResolver(u, e);
            try {
              return 0 === r
                ? ""
                : u
                    .getPath(t.replace(/\n/g, ""), i, n, r, {
                      letterSpacing: o / r,
                    })
                    .toPathData(1);
            } finally {
              a();
            }
          }
        },
        rv =
          ((o = null != (n = eG()) ? w(k(n)) : {}),
          O(
            !i && n && n.__esModule
              ? o
              : x(o, "default", { value: n, enumerable: !0 }),
            n
          )),
        rb = ["ios", "android", "windows", "macos", "web"],
        ry = ["portrait", "landscape"];
      function rF(e) {
        return "string" == typeof e;
      }
      function rw(e) {
        return "object" == typeof e;
      }
      function rx(e) {
        return { kind: "complete", style: e };
      }
      function rE(e, t = {}) {
        let { fractions: r } = t;
        if (r && e.includes("/")) {
          let [t = "", r = ""] = e.split("/", 2),
            n = rE(t),
            i = rE(r);
          return n && i ? [n[0] / i[0], i[1]] : null;
        }
        let n = parseFloat(e);
        if (Number.isNaN(n)) return null;
        let i = e.match(/(([a-z]{2,}|%))$/);
        if (!i) return [n, l.none];
        switch (null == i ? void 0 : i[1]) {
          case "rem":
            return [n, l.rem];
          case "px":
            return [n, l.px];
          case "em":
            return [n, l.em];
          case "%":
            return [n, l.percent];
          case "vw":
            return [n, l.vw];
          case "vh":
            return [n, l.vh];
          default:
            return null;
        }
      }
      function rC(e, t, r = {}) {
        let n = rS(t, r);
        return null === n ? null : rx({ [e]: n });
      }
      function rk(e, t, r) {
        let n = rS(t);
        return null !== n && (r[e] = n), r;
      }
      function rS(e, t = {}) {
        if (void 0 === e) return null;
        let r = rE(String(e), t);
        return r ? r_(...r, t) : null;
      }
      function r_(e, t, r = {}) {
        let { isNegative: n, device: i } = r;
        switch (t) {
          case l.rem:
            return 16 * e * (n ? -1 : 1);
          case l.px:
            return e * (n ? -1 : 1);
          case l.percent:
            return `${n ? "-" : ""}${e}%`;
          case l.none:
            return e * (n ? -1 : 1);
          case l.vw:
            return null != i && i.windowDimensions
              ? i.windowDimensions.width * (e / 100)
              : (rL(
                  "`vw` CSS unit requires configuration with `useDeviceContext()`"
                ),
                null);
          case l.vh:
            return null != i && i.windowDimensions
              ? i.windowDimensions.height * (e / 100)
              : (rL(
                  "`vh` CSS unit requires configuration with `useDeviceContext()`"
                ),
                null);
          default:
            return null;
        }
      }
      function rT(e) {
        let t = rE(e);
        if (!t) return null;
        let [r, n] = t;
        switch (n) {
          case l.rem:
            return 16 * r;
          case l.px:
            return r;
          default:
            return null;
        }
      }
      ((u = s || (s = {})).fontSize = "fontSize"),
        (u.lineHeight = "lineHeight"),
        ((a = l || (l = {})).rem = "rem"),
        (a.em = "em"),
        (a.px = "px"),
        (a.percent = "%"),
        (a.vw = "vw"),
        (a.vh = "vh"),
        (a.none = "<no-css-unit>");
      var rA = {
        t: "Top",
        tr: "TopRight",
        tl: "TopLeft",
        b: "Bottom",
        br: "BottomRight",
        bl: "BottomLeft",
        l: "Left",
        r: "Right",
        x: "Horizontal",
        y: "Vertical",
      };
      function rO(e) {
        return rA[e ?? ""] || "All";
      }
      function rB(e) {
        let t = "All";
        return [
          e.replace(
            /^-(t|b|r|l|tr|tl|br|bl)(-|$)/,
            (e, r) => ((t = rO(r)), "")
          ),
          t,
        ];
      }
      function rP(e, t = {}) {
        if (e.includes("/")) {
          let r = rM(e, { ...t, fractions: !0 });
          if (r) return r;
        }
        return "[" === e[0] && (e = e.slice(1, -1)), rM(e, t);
      }
      function rI(e, t, r = {}) {
        let n = rP(t, r);
        return null === n ? null : rx({ [e]: n });
      }
      function rM(e, t = {}) {
        if ("px" === e) return 1;
        let r = rE(e, t);
        if (!r) return null;
        let [n, i] = r;
        return (
          t.fractions && ((i = l.percent), (n *= 100)),
          i === l.none && ((n /= 4), (i = l.rem)),
          r_(n, i, t)
        );
      }
      var rL =
          typeof F > "u" ||
          (null === (c = null == F ? void 0 : F.env) || void 0 === c
            ? void 0
            : c.JEST_WORKER_ID) === void 0
            ? function (...e) {
                console.warn(...e);
              }
            : function (...e) {},
        rR = [
          ["aspect-square", rx({ aspectRatio: 1 })],
          ["aspect-video", rx({ aspectRatio: 16 / 9 })],
          ["items-center", rx({ alignItems: "center" })],
          ["items-start", rx({ alignItems: "flex-start" })],
          ["items-end", rx({ alignItems: "flex-end" })],
          ["items-baseline", rx({ alignItems: "baseline" })],
          ["items-stretch", rx({ alignItems: "stretch" })],
          ["justify-start", rx({ justifyContent: "flex-start" })],
          ["justify-end", rx({ justifyContent: "flex-end" })],
          ["justify-center", rx({ justifyContent: "center" })],
          ["justify-between", rx({ justifyContent: "space-between" })],
          ["justify-around", rx({ justifyContent: "space-around" })],
          ["justify-evenly", rx({ justifyContent: "space-evenly" })],
          ["content-start", rx({ alignContent: "flex-start" })],
          ["content-end", rx({ alignContent: "flex-end" })],
          ["content-between", rx({ alignContent: "space-between" })],
          ["content-around", rx({ alignContent: "space-around" })],
          ["content-stretch", rx({ alignContent: "stretch" })],
          ["content-center", rx({ alignContent: "center" })],
          ["self-auto", rx({ alignSelf: "auto" })],
          ["self-start", rx({ alignSelf: "flex-start" })],
          ["self-end", rx({ alignSelf: "flex-end" })],
          ["self-center", rx({ alignSelf: "center" })],
          ["self-stretch", rx({ alignSelf: "stretch" })],
          ["self-baseline", rx({ alignSelf: "baseline" })],
          ["direction-inherit", rx({ direction: "inherit" })],
          ["direction-ltr", rx({ direction: "ltr" })],
          ["direction-rtl", rx({ direction: "rtl" })],
          ["hidden", rx({ display: "none" })],
          ["flex", rx({ display: "flex" })],
          ["flex-row", rx({ flexDirection: "row" })],
          ["flex-row-reverse", rx({ flexDirection: "row-reverse" })],
          ["flex-col", rx({ flexDirection: "column" })],
          ["flex-col-reverse", rx({ flexDirection: "column-reverse" })],
          ["flex-wrap", rx({ flexWrap: "wrap" })],
          ["flex-wrap-reverse", rx({ flexWrap: "wrap-reverse" })],
          ["flex-nowrap", rx({ flexWrap: "nowrap" })],
          ["flex-auto", rx({ flexGrow: 1, flexShrink: 1, flexBasis: "auto" })],
          [
            "flex-initial",
            rx({ flexGrow: 0, flexShrink: 1, flexBasis: "auto" }),
          ],
          ["flex-none", rx({ flexGrow: 0, flexShrink: 0, flexBasis: "auto" })],
          ["overflow-hidden", rx({ overflow: "hidden" })],
          ["overflow-visible", rx({ overflow: "visible" })],
          ["overflow-scroll", rx({ overflow: "scroll" })],
          ["absolute", rx({ position: "absolute" })],
          ["relative", rx({ position: "relative" })],
          ["italic", rx({ fontStyle: "italic" })],
          ["not-italic", rx({ fontStyle: "normal" })],
          ["oldstyle-nums", r$("oldstyle-nums")],
          ["small-caps", r$("small-caps")],
          ["lining-nums", r$("lining-nums")],
          ["tabular-nums", r$("tabular-nums")],
          ["proportional-nums", r$("proportional-nums")],
          ["font-thin", rx({ fontWeight: "100" })],
          ["font-100", rx({ fontWeight: "100" })],
          ["font-extralight", rx({ fontWeight: "200" })],
          ["font-200", rx({ fontWeight: "200" })],
          ["font-light", rx({ fontWeight: "300" })],
          ["font-300", rx({ fontWeight: "300" })],
          ["font-normal", rx({ fontWeight: "normal" })],
          ["font-400", rx({ fontWeight: "400" })],
          ["font-medium", rx({ fontWeight: "500" })],
          ["font-500", rx({ fontWeight: "500" })],
          ["font-semibold", rx({ fontWeight: "600" })],
          ["font-600", rx({ fontWeight: "600" })],
          ["font-bold", rx({ fontWeight: "bold" })],
          ["font-700", rx({ fontWeight: "700" })],
          ["font-extrabold", rx({ fontWeight: "800" })],
          ["font-800", rx({ fontWeight: "800" })],
          ["font-black", rx({ fontWeight: "900" })],
          ["font-900", rx({ fontWeight: "900" })],
          ["include-font-padding", rx({ includeFontPadding: !0 })],
          ["remove-font-padding", rx({ includeFontPadding: !1 })],
          ["max-w-none", rx({ maxWidth: "99999%" })],
          ["text-left", rx({ textAlign: "left" })],
          ["text-center", rx({ textAlign: "center" })],
          ["text-right", rx({ textAlign: "right" })],
          ["text-justify", rx({ textAlign: "justify" })],
          ["text-auto", rx({ textAlign: "auto" })],
          ["underline", rx({ textDecorationLine: "underline" })],
          ["line-through", rx({ textDecorationLine: "line-through" })],
          ["no-underline", rx({ textDecorationLine: "none" })],
          ["uppercase", rx({ textTransform: "uppercase" })],
          ["lowercase", rx({ textTransform: "lowercase" })],
          ["capitalize", rx({ textTransform: "capitalize" })],
          ["normal-case", rx({ textTransform: "none" })],
          ["w-auto", rx({ width: "auto" })],
          ["h-auto", rx({ height: "auto" })],
          [
            "shadow-sm",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowRadius: 1,
              shadowOpacity: 0.025,
              elevation: 1,
            }),
          ],
          [
            "shadow",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowRadius: 1,
              shadowOpacity: 0.075,
              elevation: 2,
            }),
          ],
          [
            "shadow-md",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowRadius: 3,
              shadowOpacity: 0.125,
              elevation: 3,
            }),
          ],
          [
            "shadow-lg",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 8,
              elevation: 8,
            }),
          ],
          [
            "shadow-xl",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowOpacity: 0.19,
              shadowRadius: 20,
              elevation: 12,
            }),
          ],
          [
            "shadow-2xl",
            rx({
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 30,
              elevation: 16,
            }),
          ],
          [
            "shadow-none",
            rx({
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "#000",
              shadowRadius: 0,
              shadowOpacity: 0,
              elevation: 0,
            }),
          ],
        ];
      function r$(e) {
        return {
          kind: "dependent",
          complete(t) {
            (t.fontVariant && Array.isArray(t.fontVariant)) ||
              (t.fontVariant = []),
              t.fontVariant.push(e);
          },
        };
      }
      var rj = class {
        constructor(e) {
          (this.ir = new Map(rR)),
            (this.styles = new Map()),
            (this.prefixes = new Map()),
            (this.ir = new Map([...rR, ...(e ?? [])]));
        }
        getStyle(e) {
          return this.styles.get(e);
        }
        setStyle(e, t) {
          this.styles.set(e, t);
        }
        getIr(e) {
          return this.ir.get(e);
        }
        setIr(e, t) {
          this.ir.set(e, t);
        }
        getPrefixMatch(e) {
          return this.prefixes.get(e);
        }
        setPrefixMatch(e, t) {
          this.prefixes.set(e, t);
        }
      };
      function rN(e, t) {
        let r = rE(e);
        if (r) {
          let [e, n] = r;
          if ((n === l.none || n === l.em) && "number" == typeof t.fontSize)
            return t.fontSize * e;
        }
        return e;
      }
      function rW(e, t, r, n) {
        let i = r_(e, t);
        return null === i ? null : rz(r, n, i);
      }
      function rz(e, t, r) {
        switch (e) {
          case "All":
            return {
              kind: "complete",
              style: {
                [`${t}Top`]: r,
                [`${t}Right`]: r,
                [`${t}Bottom`]: r,
                [`${t}Left`]: r,
              },
            };
          case "Bottom":
          case "Top":
          case "Left":
          case "Right":
            return { kind: "complete", style: { [`${t}${e}`]: r } };
          case "Vertical":
            return {
              kind: "complete",
              style: { [`${t}Top`]: r, [`${t}Bottom`]: r },
            };
          case "Horizontal":
            return {
              kind: "complete",
              style: { [`${t}Left`]: r, [`${t}Right`]: r },
            };
          default:
            return null;
        }
      }
      function rU(e, t, r) {
        let n;
        if (!r) return null;
        t.includes("/") && ([t = "", n] = t.split("/", 2));
        let i = "";
        if (
          !(i =
            t.startsWith("[#") || t.startsWith("[rgb")
              ? t.slice(1, -1)
              : (function e(t, r) {
                  let n = r[t];
                  if (rF(n)) return n;
                  if (rw(n) && rF(n.DEFAULT)) return n.DEFAULT;
                  let [i = "", ...o] = t.split("-");
                  for (; i !== t; ) {
                    let t = r[i];
                    if (rw(t)) return e(o.join("-"), t);
                    if (0 === o.length) break;
                    i = `${i}-${o.shift()}`;
                  }
                  return "";
                })(t, r))
        )
          return null;
        if (n) {
          let t = Number(n);
          if (!Number.isNaN(t))
            return (i = rq(i, t / 100)), rx({ [rH[e].color]: i });
        }
        return {
          kind: "dependent",
          complete(t) {
            let r = t[rH[e].opacity];
            "number" == typeof r && (i = rq(i, r)), (t[rH[e].color] = i);
          },
        };
      }
      function rG(e, t) {
        let r = parseInt(t, 10);
        return Number.isNaN(r)
          ? null
          : { kind: "complete", style: { [rH[e].opacity]: r / 100 } };
      }
      function rq(e, t) {
        return (
          e.startsWith("#")
            ? (e = (function (e) {
                let t = e,
                  r = rV.exec(
                    (e = e.replace(rY, (e, t, r, n) => t + t + r + r + n + n))
                  );
                if (!r)
                  return (
                    rL(`invalid config hex color value: ${t}`),
                    "rgba(0, 0, 0, 1)"
                  );
                let n = parseInt(r[1], 16),
                  i = parseInt(r[2], 16),
                  o = parseInt(r[3], 16);
                return `rgba(${n}, ${i}, ${o}, 1)`;
              })(e))
            : e.startsWith("rgb(") &&
              (e = e.replace(/^rgb\(/, "rgba(").replace(/\)$/, ", 1)")),
          e.replace(/, ?\d*\.?(\d+)\)$/, `, ${t})`)
        );
      }
      var rH = {
          bg: { opacity: "__opacity_bg", color: "backgroundColor" },
          text: { opacity: "__opacity_text", color: "color" },
          border: { opacity: "__opacity_border", color: "borderColor" },
          borderTop: { opacity: "__opacity_border", color: "borderTopColor" },
          borderBottom: {
            opacity: "__opacity_border",
            color: "borderBottomColor",
          },
          borderLeft: { opacity: "__opacity_border", color: "borderLeftColor" },
          borderRight: {
            opacity: "__opacity_border",
            color: "borderRightColor",
          },
          shadow: { opacity: "__opacity_shadow", color: "shadowColor" },
          tint: { opacity: "__opacity_tint", color: "tintColor" },
        },
        rY = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        rV = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
      function rX(e) {
        if ((null == e ? void 0 : e.kind) !== "complete") return e;
        let t = e.style.borderTopRadius;
        void 0 !== t &&
          ((e.style.borderTopLeftRadius = t),
          (e.style.borderTopRightRadius = t),
          delete e.style.borderTopRadius);
        let r = e.style.borderBottomRadius;
        void 0 !== r &&
          ((e.style.borderBottomLeftRadius = r),
          (e.style.borderBottomRightRadius = r),
          delete e.style.borderBottomRadius);
        let n = e.style.borderLeftRadius;
        void 0 !== n &&
          ((e.style.borderBottomLeftRadius = n),
          (e.style.borderTopLeftRadius = n),
          delete e.style.borderLeftRadius);
        let i = e.style.borderRightRadius;
        return (
          void 0 !== i &&
            ((e.style.borderBottomRightRadius = i),
            (e.style.borderTopRightRadius = i),
            delete e.style.borderRightRadius),
          e
        );
      }
      function rQ(e, t, r, n) {
        let i = null;
        "inset" === e &&
          (t = t.replace(
            /^(x|y)-/,
            (e, t) => ((i = "x" === t ? "x" : "y"), "")
          ));
        let o = null == n ? void 0 : n[t];
        if (o) {
          let t = rS(o, { isNegative: r });
          if (null !== t) return rJ(e, i, t);
        }
        let u = rP(t, { isNegative: r });
        return null !== u ? rJ(e, i, u) : null;
      }
      function rJ(e, t, r) {
        if ("inset" !== e) return rx({ [e]: r });
        switch (t) {
          case null:
            return rx({ top: r, left: r, right: r, bottom: r });
          case "y":
            return rx({ top: r, bottom: r });
          case "x":
            return rx({ left: r, right: r });
        }
      }
      function rK(e, t, r) {
        var n;
        let i = "" === (t = t.replace(/^-/, "")) ? "DEFAULT" : t,
          o = Number(
            null !== (n = null == r ? void 0 : r[i]) && void 0 !== n ? n : t
          );
        return Number.isNaN(o) ? null : rx({ [`flex${e}`]: o });
      }
      function rZ(e, t, r = {}, n) {
        let i = null == n ? void 0 : n[t];
        return void 0 !== i ? rC(e, i, r) : rI(e, t, r);
      }
      function r0(e, t, r = {}, n) {
        let i = rS(null == n ? void 0 : n[t], r);
        return i
          ? rx({ [e]: i })
          : ("screen" === t && (t = e.includes("Width") ? "100vw" : "100vh"),
            rI(e, t, r));
      }
      function r1(e) {
        let t = rP(e);
        return "number" == typeof t ? t : null;
      }
      var r2 = class {
        constructor(e, t = {}, r, n, i) {
          var o, u, a, s, l, c;
          (this.config = t),
            (this.cache = r),
            (this.position = 0),
            (this.isNull = !1),
            (this.isNegative = !1),
            (this.context = {}),
            (this.context.device = n);
          let f = e.trim().split(":"),
            d = [];
          1 === f.length
            ? (this.string = e)
            : ((this.string = null !== (o = f.pop()) && void 0 !== o ? o : ""),
              (d = f)),
            (this.char = this.string[0]);
          let h = (function (e) {
            if (!e) return {};
            let t = Object.entries(e).reduce((e, [t, r]) => {
                let n = [0, 1 / 0, 0],
                  i = "string" == typeof r ? { min: r } : r,
                  o = i.min ? rT(i.min) : 0;
                null === o
                  ? rL(`invalid screen config value: ${t}->min: ${i.min}`)
                  : (n[0] = o);
                let u = i.max ? rT(i.max) : 1 / 0;
                return (
                  null === u
                    ? rL(`invalid screen config value: ${t}->max: ${i.max}`)
                    : (n[1] = u),
                  (e[t] = n),
                  e
                );
              }, {}),
              r = Object.values(t);
            r.sort((e, t) => {
              let [r, n] = e,
                [i, o] = t;
              return n === 1 / 0 || o === 1 / 0 ? r - i : n - o;
            });
            let n = 0;
            return r.forEach((e) => (e[2] = n++)), t;
          })(
            null === (u = this.config.theme) || void 0 === u
              ? void 0
              : u.screens
          );
          for (let e of d)
            if (h[e]) {
              let t = null === (a = h[e]) || void 0 === a ? void 0 : a[2];
              void 0 !== t &&
                (this.order =
                  (null !== (s = this.order) && void 0 !== s ? s : 0) + t);
              let r =
                null === (l = n.windowDimensions) || void 0 === l
                  ? void 0
                  : l.width;
              if (r) {
                let [t, n] = null !== (c = h[e]) && void 0 !== c ? c : [0, 0];
                (r <= t || r > n) && (this.isNull = !0);
              } else this.isNull = !0;
            } else
              rb.includes(e)
                ? (this.isNull = e !== i)
                : ry.includes(e)
                ? n.windowDimensions
                  ? (n.windowDimensions.width > n.windowDimensions.height
                      ? "landscape"
                      : "portrait") !== e
                    ? (this.isNull = !0)
                    : this.incrementOrder()
                  : (this.isNull = !0)
                : "retina" === e
                ? 2 === n.pixelDensity
                  ? this.incrementOrder()
                  : (this.isNull = !0)
                : "dark" === e
                ? "dark" !== n.colorScheme
                  ? (this.isNull = !0)
                  : this.incrementOrder()
                : this.handlePossibleArbitraryBreakpointPrefix(e) ||
                  (this.isNull = !0);
        }
        parse() {
          if (this.isNull) return { kind: "null" };
          let e = this.cache.getIr(this.rest);
          if (e) return e;
          this.parseIsNegative();
          let t = this.parseUtility();
          return t
            ? void 0 !== this.order
              ? { kind: "ordered", order: this.order, styleIr: t }
              : t
            : { kind: "null" };
        }
        parseUtility() {
          var e, t, r, n, i;
          let o;
          let u = this.config.theme,
            a = null;
          switch (this.char) {
            case "m":
            case "p": {
              let n = this.peekSlice(1, 3).match(/^(t|b|r|l|x|y)?-/);
              if (n) {
                let i = "m" === this.char ? "margin" : "padding";
                this.advance(
                  (null !==
                    (t =
                      null === (e = n[0]) || void 0 === e
                        ? void 0
                        : e.length) && void 0 !== t
                    ? t
                    : 0) + 1
                );
                let o = (function (e, t, r, n, i) {
                  let o = "";
                  if ("[" === n[0]) o = n.slice(1, -1);
                  else {
                    let r = null == i ? void 0 : i[n];
                    if (r) o = r;
                    else {
                      let r = rP(n);
                      return r && "number" == typeof r
                        ? rW(r, l.px, t, e)
                        : null;
                    }
                  }
                  if ("auto" === o) return rz(t, e, "auto");
                  let u = rE(o);
                  if (!u) return null;
                  let [a, s] = u;
                  return r && (a = -a), rW(a, s, t, e);
                })(
                  i,
                  rO(n[1]),
                  this.isNegative,
                  this.rest,
                  null === (r = this.config.theme) || void 0 === r
                    ? void 0
                    : r[i]
                );
                if (o) return o;
              }
            }
          }
          if (
            (this.consumePeeked("h-") &&
              (a = rZ(
                "height",
                this.rest,
                this.context,
                null == u ? void 0 : u.height
              ))) ||
            (this.consumePeeked("w-") &&
              (a = rZ(
                "width",
                this.rest,
                this.context,
                null == u ? void 0 : u.width
              ))) ||
            (this.consumePeeked("min-w-") &&
              (a = r0(
                "minWidth",
                this.rest,
                this.context,
                null == u ? void 0 : u.minWidth
              ))) ||
            (this.consumePeeked("min-h-") &&
              (a = r0(
                "minHeight",
                this.rest,
                this.context,
                null == u ? void 0 : u.minHeight
              ))) ||
            (this.consumePeeked("max-w-") &&
              (a = r0(
                "maxWidth",
                this.rest,
                this.context,
                null == u ? void 0 : u.maxWidth
              ))) ||
            (this.consumePeeked("max-h-") &&
              (a = r0(
                "maxHeight",
                this.rest,
                this.context,
                null == u ? void 0 : u.maxHeight
              ))) ||
            (this.consumePeeked("leading-") &&
              (a = (function (e, t) {
                var r;
                let n = rE(
                  null !== (r = null == t ? void 0 : t[e]) && void 0 !== r
                    ? r
                    : e.startsWith("[")
                    ? e.slice(1, -1)
                    : e
                );
                if (!n) return null;
                let [i, o] = n;
                if (o === l.none)
                  return {
                    kind: "dependent",
                    complete(e) {
                      if ("number" != typeof e.fontSize)
                        return "relative line-height utilities require that font-size be set";
                      e.lineHeight = e.fontSize * i;
                    },
                  };
                let u = r_(i, o);
                return null !== u ? rx({ lineHeight: u }) : null;
              })(this.rest, null == u ? void 0 : u.lineHeight))) ||
            (this.consumePeeked("text-") &&
              ((a = (function (e, t, r = {}) {
                let n,
                  i = null == t ? void 0 : t[e];
                if (!i) return rI("fontSize", e, r);
                if ("string" == typeof i) return rC("fontSize", i);
                let o = {},
                  [u, a] = i,
                  s = null === (n = rS(u)) ? null : { fontSize: n };
                if ((s && (o = s), "string" == typeof a))
                  return rx(rk("lineHeight", rN(a, o), o));
                let { lineHeight: l, letterSpacing: c } = a;
                return (
                  l && rk("lineHeight", rN(l, o), o),
                  c && rk("letterSpacing", c, o),
                  rx(o)
                );
              })(this.rest, null == u ? void 0 : u.fontSize, this.context)) ||
                (a = rU("text", this.rest, null == u ? void 0 : u.textColor)) ||
                (this.consumePeeked("opacity-") &&
                  (a = rG("text", this.rest))))) ||
            (this.consumePeeked("font-") &&
              (a = (function (e, t) {
                let r = null == t ? void 0 : t[e];
                if (!r) return null;
                if ("string" == typeof r) return rx({ fontFamily: r });
                let n = r[0];
                return n ? rx({ fontFamily: n }) : null;
              })(this.rest, null == u ? void 0 : u.fontFamily))) ||
            (this.consumePeeked("aspect-") &&
              (this.consumePeeked("ratio-") &&
                rL(
                  "`aspect-ratio-{ratio}` is deprecated, use `aspect-{ratio}` instead"
                ),
              (a = rC("aspectRatio", this.rest, { fractions: !0 })))) ||
            (this.consumePeeked("tint-") &&
              (a = rU("tint", this.rest, null == u ? void 0 : u.colors))) ||
            (this.consumePeeked("bg-") &&
              ((a = rU(
                "bg",
                this.rest,
                null == u ? void 0 : u.backgroundColor
              )) ||
                (this.consumePeeked("opacity-") &&
                  (a = rG("bg", this.rest))))) ||
            (this.consumePeeked("border") &&
              ((a = (function (e, t) {
                let [r, n] = rB(e);
                if (r.match(/^(-?(\d)+)?$/))
                  return (function (e, t, r) {
                    if (!r) return null;
                    let n = r["" === (e = e.replace(/^-/, "")) ? "DEFAULT" : e];
                    return void 0 === n
                      ? null
                      : rC(`border${"All" === t ? "" : t}Width`, n);
                  })(r, n, null == t ? void 0 : t.borderWidth);
                if (
                  ["dashed", "solid", "dotted"].includes(
                    (r = r.replace(/^-/, ""))
                  )
                )
                  return rx({ borderStyle: r });
                let i = "border";
                switch (n) {
                  case "Bottom":
                    i = "borderBottom";
                    break;
                  case "Top":
                    i = "borderTop";
                    break;
                  case "Left":
                    i = "borderLeft";
                    break;
                  case "Right":
                    i = "borderRight";
                }
                let o = rU(i, r, null == t ? void 0 : t.borderColor);
                if (o) return o;
                let u = `border${"All" === n ? "" : n}Width`,
                  a = rI(u, (r = r.replace(/^-/, "")).slice(1, -1));
                return "number" != typeof (null == a ? void 0 : a.style[u])
                  ? null
                  : a;
              })(this.rest, u)) ||
                (this.consumePeeked("-opacity-") &&
                  (a = rG("border", this.rest))))) ||
            (this.consumePeeked("rounded") &&
              (a = (function (e, t) {
                if (!t) return null;
                let [r, n] = rB(e);
                "" === (r = r.replace(/^-/, "")) && (r = "DEFAULT");
                let i = `border${"All" === n ? "" : n}Radius`,
                  o = t[r];
                if (o) return rX(rC(i, o));
                let u = rI(i, r);
                return "number" != typeof (null == u ? void 0 : u.style[i])
                  ? null
                  : rX(u);
              })(this.rest, null == u ? void 0 : u.borderRadius))) ||
            (this.consumePeeked("bottom-") &&
              (a = rQ(
                "bottom",
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.inset
              ))) ||
            (this.consumePeeked("top-") &&
              (a = rQ(
                "top",
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.inset
              ))) ||
            (this.consumePeeked("left-") &&
              (a = rQ(
                "left",
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.inset
              ))) ||
            (this.consumePeeked("right-") &&
              (a = rQ(
                "right",
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.inset
              ))) ||
            (this.consumePeeked("inset-") &&
              (a = rQ(
                "inset",
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.inset
              ))) ||
            (this.consumePeeked("flex-") &&
              (a = this.consumePeeked("grow")
                ? rK("Grow", this.rest, null == u ? void 0 : u.flexGrow)
                : this.consumePeeked("shrink")
                ? rK("Shrink", this.rest, null == u ? void 0 : u.flexShrink)
                : (function (e, t) {
                    var r, n;
                    if (
                      ["min-content", "revert", "unset"].includes(
                        (e = (null == t ? void 0 : t[e]) || e)
                      )
                    )
                      return null;
                    if (e.match(/^\d+(\.\d+)?$/))
                      return rx({ flexGrow: Number(e), flexBasis: "0%" });
                    let i = e.match(/^(\d+)\s+(\d+)$/);
                    if (i)
                      return rx({
                        flexGrow: Number(i[1]),
                        flexShrink: Number(i[2]),
                      });
                    if ((i = e.match(/^(\d+)\s+([^ ]+)$/))) {
                      let e = rS(null !== (r = i[2]) && void 0 !== r ? r : "");
                      return e
                        ? rx({ flexGrow: Number(i[1]), flexBasis: e })
                        : null;
                    }
                    if ((i = e.match(/^(\d+)\s+(\d+)\s+(.+)$/))) {
                      let e = rS(null !== (n = i[3]) && void 0 !== n ? n : "");
                      return e
                        ? rx({
                            flexGrow: Number(i[1]),
                            flexShrink: Number(i[2]),
                            flexBasis: e,
                          })
                        : null;
                    }
                    return null;
                  })(this.rest, null == u ? void 0 : u.flex))) ||
            (this.consumePeeked("grow") &&
              (a = rK("Grow", this.rest, null == u ? void 0 : u.flexGrow))) ||
            (this.consumePeeked("shrink") &&
              (a = rK(
                "Shrink",
                this.rest,
                null == u ? void 0 : u.flexShrink
              ))) ||
            (this.consumePeeked("shadow-color-opacity-") &&
              (a = rG("shadow", this.rest))) ||
            (this.consumePeeked("shadow-opacity-") &&
              (a = Number.isNaN((o = parseInt(this.rest, 10)))
                ? null
                : { kind: "complete", style: { shadowOpacity: o / 100 } })) ||
            (this.consumePeeked("shadow-offset-") &&
              (a = (function (e) {
                if (e.includes("/")) {
                  let [t = "", r = ""] = e.split("/", 2),
                    n = r1(t),
                    i = r1(r);
                  return null === n || null === i
                    ? null
                    : {
                        kind: "complete",
                        style: { shadowOffset: { width: n, height: i } },
                      };
                }
                let t = r1(e);
                return null === t
                  ? null
                  : {
                      kind: "complete",
                      style: { shadowOffset: { width: t, height: t } },
                    };
              })(this.rest))) ||
            (this.consumePeeked("shadow-radius-") &&
              (a = rI("shadowRadius", this.rest))) ||
            (this.consumePeeked("shadow-") &&
              (a = rU("shadow", this.rest, null == u ? void 0 : u.colors)))
          )
            return a;
          if (this.consumePeeked("elevation-")) {
            let e = parseInt(this.rest, 10);
            if (!Number.isNaN(e)) return rx({ elevation: e });
          }
          if (
            (this.consumePeeked("opacity-") &&
              (a = (function (e, t) {
                let r = null == t ? void 0 : t[e];
                if (r) {
                  let e = rE(String(r));
                  if (e) return rx({ opacity: e[0] });
                }
                let n = rE(e);
                return n ? rx({ opacity: n[0] / 100 }) : null;
              })(this.rest, null == u ? void 0 : u.opacity))) ||
            (this.consumePeeked("tracking-") &&
              (a = (function (e, t, r) {
                let n = null == r ? void 0 : r[e];
                if (n) {
                  let e = rE(n, { isNegative: t });
                  if (!e) return null;
                  let [r, i] = e;
                  if (i === l.em)
                    return {
                      kind: "dependent",
                      complete(e) {
                        let t = e.fontSize;
                        if ("number" != typeof t || Number.isNaN(t))
                          return "tracking-X relative letter spacing classes require font-size to be set";
                        e.letterSpacing =
                          Math.round((r * t + Number.EPSILON) * 100) / 100;
                      },
                    };
                  if (i === l.percent)
                    return (
                      rL(
                        "percentage-based letter-spacing configuration currently unsupported, switch to `em`s, or open an issue if you'd like to see support added."
                      ),
                      null
                    );
                  let o = r_(r, i, { isNegative: t });
                  return null !== o ? rx({ letterSpacing: o }) : null;
                }
                return rI("letterSpacing", e, { isNegative: t });
              })(
                this.rest,
                this.isNegative,
                null == u ? void 0 : u.letterSpacing
              )))
          )
            return a;
          if (this.consumePeeked("z-")) {
            let e = Number(
              null !==
                (i =
                  null === (n = null == u ? void 0 : u.zIndex) || void 0 === n
                    ? void 0
                    : n[this.rest]) && void 0 !== i
                ? i
                : this.rest
            );
            if (!Number.isNaN(e)) return rx({ zIndex: e });
          }
          return rL(`\`${this.rest}\` unknown or invalid utility`), null;
        }
        handlePossibleArbitraryBreakpointPrefix(e) {
          var t;
          if ("m" !== e[0]) return !1;
          let r = e.match(/^(min|max)-(w|h)-\[([^\]]+)\]$/);
          if (!r) return !1;
          if (
            !(
              !(null === (t = this.context.device) || void 0 === t) &&
              t.windowDimensions
            )
          )
            return (this.isNull = !0), !0;
          let n = this.context.device.windowDimensions,
            [, i = "", o = "", u = ""] = r,
            a = "w" === o ? n.width : n.height,
            s = rE(u, this.context);
          if (null === s) return (this.isNull = !0), !0;
          let [l, c] = s;
          return (
            "px" !== c && (this.isNull = !0),
            ("min" === i ? a >= l : a <= l)
              ? this.incrementOrder()
              : (this.isNull = !0),
            !0
          );
        }
        advance(e = 1) {
          (this.position += e), (this.char = this.string[this.position]);
        }
        get rest() {
          return this.peekSlice(0, this.string.length);
        }
        peekSlice(e, t) {
          return this.string.slice(this.position + e, this.position + t);
        }
        consumePeeked(e) {
          return (
            this.peekSlice(0, e.length) === e && (this.advance(e.length), !0)
          );
        }
        parseIsNegative() {
          "-" === this.char &&
            (this.advance(),
            (this.isNegative = !0),
            (this.context.isNegative = !0));
        }
        incrementOrder() {
          var e;
          this.order = (null !== (e = this.order) && void 0 !== e ? e : 0) + 1;
        }
      };
      function r3(e) {
        return e.trim().split(/\s+/);
      }
      function r6(e, t, r) {
        return r.indexOf(e) === t;
      }
      function r5(e) {
        throw Error(
          `tailwindcss plugin function argument object prop "${e}" not implemented`
        );
      }
      var r8 = {
          addComponents: r5,
          addBase: r5,
          addVariant: r5,
          e: r5,
          prefix: r5,
          theme: r5,
          variants: r5,
          config: r5,
          corePlugins: r5,
          matchUtilities: r5,
          postcss: null,
        },
        r4 = {
          handler: ({ addUtilities: e }) => {
            e({
              "shadow-sm": { boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
              shadow: {
                boxShadow:
                  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              },
              "shadow-md": {
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              },
              "shadow-lg": {
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              },
              "shadow-xl": {
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              },
              "shadow-2xl": {
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              },
              "shadow-inner": {
                boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
              },
              "shadow-none": { boxShadow: "0 0 #0000" },
            });
          },
        },
        r7 = new WeakMap();
      async function r9(e, t) {
        let r,
          n = await eH();
        if (!n || !n.Node)
          throw Error(
            "Satori is not initialized: expect `yoga` to be loaded, got " + n
          );
        (t.fonts = t.fonts || []),
          r7.has(t.fonts)
            ? (r = r7.get(t.fonts))
            : r7.set(t.fonts, (r = new rm(t.fonts)));
        let i = "width" in t ? t.width : void 0,
          o = "height" in t ? t.height : void 0,
          u = n.Node.create();
        i && u.setWidth(i),
          o && u.setHeight(o),
          u.setFlexDirection(n.FLEX_DIRECTION_ROW),
          u.setFlexWrap(n.WRAP_WRAP),
          u.setAlignContent(n.ALIGN_AUTO),
          u.setAlignItems(n.ALIGN_FLEX_START),
          u.setJustifyContent(n.JUSTIFY_FLEX_START),
          u.setOverflow(n.OVERFLOW_HIDDEN);
        let a = { ...t.graphemeImages },
          s = new Set();
        tx.clear(), await tO(e);
        let l = rD(e, {
            id: "id",
            parentStyle: {},
            inheritedStyle: {
              fontSize: 16,
              fontWeight: "normal",
              fontFamily: "serif",
              fontStyle: "normal",
              lineHeight: "normal",
              color: "black",
              opacity: 1,
              whiteSpace: "normal",
              _viewportWidth: i,
              _viewportHeight: o,
            },
            parent: u,
            font: r,
            embedFont: t.embedFont,
            debug: t.debug,
            graphemeImages: a,
            canLoadAdditionalAssets: !!t.loadAdditionalAsset,
            onNodeDetected: t.onNodeDetected,
            getTwStyles: (e, r) => {
              let n = {
                ...(function ({ width: e, height: t, config: r }) {
                  return (
                    f ||
                      (f = (function (e, t) {
                        var r, n;
                        let i = (0, rv.default)({
                            ...e,
                            content: ["_no_warnings_please"],
                          }),
                          o = {},
                          u =
                            null !==
                              (n =
                                null == (r = i.plugins)
                                  ? void 0
                                  : r.reduce((e, t) => {
                                      var r;
                                      let n;
                                      return {
                                        ...e,
                                        ...((r = t.handler),
                                        (n = {}),
                                        r({
                                          addUtilities: (e) => {
                                            n = e;
                                          },
                                          ...r8,
                                        }),
                                        n),
                                      };
                                    }, {})) && void 0 !== n
                              ? n
                              : {},
                          a = {},
                          s = Object.entries(u)
                            .map(([e, t]) =>
                              "string" == typeof t
                                ? ((a[e] = t), [e, { kind: "null" }])
                                : [e, rx(t)]
                            )
                            .filter(([, e]) => "null" !== e.kind);
                        function l() {
                          return (
                            [
                              !!o.windowDimensions &&
                                `w${o.windowDimensions.width}`,
                              !!o.windowDimensions &&
                                `h${o.windowDimensions.height}`,
                              !!o.fontScale && `fs${o.fontScale}`,
                              "dark" === o.colorScheme && "dark",
                              2 === o.pixelDensity && "retina",
                            ]
                              .filter(Boolean)
                              .join("--") || "default"
                          );
                        }
                        let c = l(),
                          f = {};
                        function d() {
                          let e = f[c];
                          if (e) return e;
                          let t = new rj(s);
                          return (f[c] = t), t;
                        }
                        function h(...e) {
                          let t, r;
                          let n = d(),
                            u = {},
                            s = [],
                            l = [],
                            [c, f] =
                              ((t = []),
                              (r = null),
                              e.forEach((e) => {
                                if ("string" == typeof e) t = [...t, ...r3(e)];
                                else if (Array.isArray(e))
                                  t = [...t, ...e.flatMap(r3)];
                                else if ("object" == typeof e && null !== e)
                                  for (let [n, i] of Object.entries(e))
                                    "boolean" == typeof i
                                      ? (t = [...t, ...(i ? r3(n) : [])])
                                      : r
                                      ? (r[n] = i)
                                      : (r = { [n]: i });
                              }),
                              [t.filter(Boolean).filter(r6), r]),
                            p = c.join(" "),
                            D = n.getStyle(p);
                          if (D) return { ...D, ...(f || {}) };
                          for (let e of c) {
                            let t = n.getIr(e);
                            if (!t && e in a) {
                              let t = h(a[e]);
                              n.setIr(e, rx(t)), (u = { ...u, ...t });
                              continue;
                            }
                            switch (
                              (t = new r2(e, i, n, o, "web").parse()).kind
                            ) {
                              case "complete":
                                (u = { ...u, ...t.style }), n.setIr(e, t);
                                break;
                              case "dependent":
                                s.push(t);
                                break;
                              case "ordered":
                                l.push(t);
                                break;
                              case "null":
                                n.setIr(e, t);
                            }
                          }
                          if (l.length > 0)
                            for (let e of (l.sort((e, t) => e.order - t.order),
                            l))
                              switch (e.styleIr.kind) {
                                case "complete":
                                  u = { ...u, ...e.styleIr.style };
                                  break;
                                case "dependent":
                                  s.push(e.styleIr);
                              }
                          if (s.length > 0) {
                            for (let e of s) {
                              let t = e.complete(u);
                              t && rL(t);
                            }
                            !(function (e) {
                              for (let t in e)
                                t.startsWith("__opacity_") && delete e[t];
                            })(u);
                          }
                          return (
                            "" !== p && n.setStyle(p, u),
                            f && (u = { ...u, ...f }),
                            u
                          );
                        }
                        let p = (e, ...t) => {
                          let r = "";
                          return (
                            e.forEach((e, n) => {
                              var i;
                              r +=
                                e +
                                (null !== (i = t[n]) && void 0 !== i ? i : "");
                            }),
                            h(r)
                          );
                        };
                        return (
                          (p.style = h),
                          (p.color = function (e) {
                            let t = h(
                              e
                                .split(/\s+/g)
                                .map((e) => e.replace(/^(bg|text|border)-/, ""))
                                .map((e) => `bg-${e}`)
                                .join(" ")
                            );
                            return "string" == typeof t.backgroundColor
                              ? t.backgroundColor
                              : void 0;
                          }),
                          (p.prefixMatch = (...e) => {
                            let t = e.sort().join(":"),
                              r = d(),
                              n = r.getPrefixMatch(t);
                            if (void 0 !== n) return n;
                            let u =
                              "null" !==
                              new r2(`${t}:flex`, i, r, o, "web").parse().kind;
                            return r.setPrefixMatch(t, u), u;
                          }),
                          (p.setWindowDimensions = (e) => {
                            (o.windowDimensions = e), (c = l());
                          }),
                          (p.setFontScale = (e) => {
                            (o.fontScale = e), (c = l());
                          }),
                          (p.setPixelDensity = (e) => {
                            (o.pixelDensity = e), (c = l());
                          }),
                          (p.setColorScheme = (e) => {
                            (o.colorScheme = e), (c = l());
                          }),
                          p
                        );
                      })(
                        {
                          ...r,
                          plugins: [
                            ...((null == r ? void 0 : r.plugins) ?? []),
                            r4,
                          ],
                        },
                        0
                      )),
                    f.setWindowDimensions({ width: +e, height: +t }),
                    f
                  );
                })({ width: i, height: o, config: t.tailwindConfig })([e]),
              };
              return (
                "number" == typeof n.lineHeight &&
                  (n.lineHeight =
                    n.lineHeight / (+n.fontSize || r.fontSize || 16)),
                n.shadowColor &&
                  n.boxShadow &&
                  (n.boxShadow = n.boxShadow.replace(
                    /rgba?\([^)]+\)/,
                    n.shadowColor
                  )),
                n
              );
            },
          }),
          c = (await l.next()).value;
        if (t.loadAdditionalAsset && c.length) {
          let e = (function (e) {
              let t = {},
                r = {};
              for (let { word: t, locale: n } of e) {
                let e = (function (e, t) {
                  for (let t of Object.keys(rd)) if (rd[t].test(e)) return [t];
                  let r = Object.keys(rh).filter((t) => rh[t].test(e));
                  if (0 === r.length) return ["unknown"];
                  if (t) {
                    let e = r.findIndex((e) => e === t);
                    -1 !== e && (r.splice(e, 1), r.unshift(t));
                  }
                  return r;
                })(t, n).join("|");
                (r[e] = r[e] || ""), (r[e] += t);
              }
              return (
                Object.keys(r).forEach((e) => {
                  (t[e] = t[e] || []),
                    "emoji" === e
                      ? t[e].push(...ne(tl(r[e], "grapheme")))
                      : ((t[e][0] = t[e][0] || ""),
                        (t[e][0] += ne(
                          tl(r[e], "grapheme", "unknown" === e ? void 0 : e)
                        ).join("")));
                }),
                t
              );
            })(c),
            n = [],
            i = {};
          await Promise.all(
            Object.entries(e).flatMap(([e, r]) =>
              r.map((r) => {
                let o = `${e}_${r}`;
                return s.has(o)
                  ? null
                  : (s.add(o),
                    t.loadAdditionalAsset(e, r).then((e) => {
                      "string" == typeof e
                        ? (i[r] = e)
                        : e && (Array.isArray(e) ? n.push(...e) : n.push(e));
                    }));
              })
            )
          ),
            r.addFonts(n),
            Object.assign(a, i);
        }
        await l.next(), u.calculateLayout(i, o, n.DIRECTION_LTR);
        let d = (await l.next([0, 0])).value,
          h = u.getComputedWidth(),
          p = u.getComputedHeight();
        return (
          u.freeRecursive(),
          (function ({ width: e, height: t, content: r }) {
            return tc(
              "svg",
              {
                width: e,
                height: t,
                viewBox: `0 0 ${e} ${t}`,
                xmlns: "http://www.w3.org/2000/svg",
              },
              r
            );
          })({ width: h, height: p, content: d })
        );
      }
      function ne(e) {
        return Array.from(new Set(e));
      }
    },
  },
]);
