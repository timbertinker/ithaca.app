!(function () {
  try {
    var A =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new A.Error().stack;
    e &&
      ((A._sentryDebugIds = A._sentryDebugIds || {}),
      (A._sentryDebugIds[e] = "c9d70153-adec-47f7-8929-43c2f359de63"),
      (A._sentryDebugIdIdentifier =
        "sentry-dbid-c9d70153-adec-47f7-8929-43c2f359de63"));
  } catch (A) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [807],
    {
      91269: function (A, e, t) {
        "use strict";
        var a = t(85893),
          i = t(25675),
          n = t.n(i),
          r = t(81989);
        e.Z = (A) => {
          let { height: e = 30, width: t = 30, className: i } = A,
            { address: l } = (0, r.Pk)();
          return (0, a.jsx)(n(), {
            src: "https://mywalleticon.com/usericon/".concat(l),
            alt: "Wallet Avatar",
            unoptimized: !0,
            priority: !0,
            width: t,
            height: e,
            className: i,
          });
        };
      },
      45217: function (A, e, t) {
        "use strict";
        var a = t(85893);
        e.Z = () =>
          (0, a.jsxs)("svg", {
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.68558 10.072C5.49032 9.87672 5.17374 9.87672 4.97848 10.072C4.78322 10.2672 4.78322 10.5838 4.97848 10.7791L7.6413 13.4419C7.64256 13.4432 7.64383 13.4445 7.6451 13.4458C7.7435 13.5442 7.87271 13.593 8.00168 13.5922C8.12864 13.5914 8.25538 13.5426 8.35225 13.4458C8.35352 13.4445 8.35478 13.4432 8.35603 13.4419L11.0189 10.7791C11.2141 10.5838 11.2141 10.2672 11.0189 10.072C10.8236 9.87672 10.507 9.87672 10.3118 10.072L7.99868 12.3851L5.68558 10.072Z",
                fill: "#9D9DAA",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3105 6.77909C10.5058 6.97435 10.8224 6.97435 11.0176 6.77909C11.2129 6.58383 11.2129 6.26725 11.0176 6.07198L8.3548 3.40916C8.35354 3.40788 8.35227 3.40659 8.35099 3.40532C8.25259 3.30692 8.12338 3.25811 7.99442 3.25888C7.86745 3.25963 7.74072 3.30844 7.64384 3.40532C7.64257 3.40659 7.64131 3.40786 7.64006 3.40914L4.97722 6.07198C4.78195 6.26725 4.78195 6.58383 4.97722 6.77909C5.17248 6.97435 5.48906 6.97435 5.68432 6.77909L7.99742 4.466L10.3105 6.77909Z",
                fill: "#9D9DAA",
              }),
            ],
          });
      },
      92505: function (A, e, t) {
        "use strict";
        var a = t(85893),
          i = t(9008),
          n = t.n(i);
        e.Z = () =>
          (0, a.jsxs)(n(), {
            children: [
              (0, a.jsx)("title", {
                children: "Ithaca - Non-Custodial, Composable Option Protocol",
              }),
              (0, a.jsx)("meta", {
                name: "description",
                content:
                  "Ithaca is a decentralized options and collateralized funding protocol offering optimal risk sharing across various states and time, embedding itself in all steps of any risk sharing instrument's lifecycle.",
              }),
              (0, a.jsx)("meta", {
                property: "og:title",
                content: "Ithaca - Empowering Optimal Risk Sharing",
              }),
              (0, a.jsx)("meta", {
                property: "og:description",
                content:
                  "Explore Ithaca's decentralized ecosystem for trading, risk management, and protocol governance. Engage with our cross-chain infrastructure and contribute to the future of digital value representation.",
              }),
              (0, a.jsx)("meta", {
                property: "og:image",
                content: "/ithaca-og-image.png",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:title",
                content:
                  "Ithaca Protocol: Decentralize Your Trading Experience",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:description",
                content:
                  "Join Ithaca, a decentralized trading and risk management ecosystem, utilizing cross-chain solutions for a seamless trading experience. Discover, trade, and manage risk today.",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, a.jsx)("meta", {
                property: "twitter:domain",
                content: "https://app.ithacaprotocol.io/",
              }),
              (0, a.jsx)("meta", {
                name: "twitter:image",
                content: "/ithaca-og-image.png",
              }),
            ],
          });
      },
      65559: function (A, e, t) {
        "use strict";
        t.d(e, {
          Z: function () {
            return c;
          },
        });
        var a = t(85893),
          i = () =>
            (0, a.jsx)("svg", {
              width: "8",
              height: "14",
              viewBox: "0 0 8 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
                fill: "white",
              }),
            }),
          n = () =>
            (0, a.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.3536 14.3536C10.1583 14.5488 9.84171 14.5488 9.64645 14.3536L3.64645 8.35355C3.45118 8.15829 3.45118 7.84171 3.64645 7.64645L9.64645 1.64645C9.84171 1.45118 10.1583 1.45118 10.3536 1.64645C10.5488 1.84171 10.5488 2.15829 10.3536 2.35355L4.70711 8L10.3536 13.6464C10.5488 13.8417 10.5488 14.1583 10.3536 14.3536Z",
                fill: "white",
              }),
            }),
          r = t(11358),
          l = t.n(r),
          C = t(7235),
          s = t.n(C),
          c = (A) => {
            let {
                totalItems: e,
                itemsPerPage: t,
                currentPage: r,
                onPageChange: C,
                className: c = "",
              } = A,
              o = Math.ceil(e / t);
            return (0, a.jsx)("div", {
              className: "".concat(c, " ").concat(s().pagination),
              children:
                o > 1 &&
                (0, a.jsx)(l(), {
                  breakLabel: (0, a.jsx)(
                    "div",
                    { className: s().ellipsis, children: "..." },
                    "endEllipsis"
                  ),
                  nextLabel: (0, a.jsx)(i, {}),
                  previousLabel: (0, a.jsx)(n, {}),
                  onPageChange: (A) => {
                    let { selected: e } = A;
                    C(e + 1);
                  },
                  pageRangeDisplayed: 3,
                  marginPagesDisplayed: 1,
                  pageCount: o,
                  forcePage: r - 1,
                  containerClassName: s().pagination,
                  pageClassName: s().navigationItem,
                  previousClassName: ""
                    .concat(s().navigationItem, " ")
                    .concat(s().nextItem),
                  nextClassName: ""
                    .concat(s().navigationItem, " ")
                    .concat(s().nextItem),
                  activeClassName: s().active,
                }),
            });
          };
      },
      89901: function (A, e, t) {
        "use strict";
        t.d(e, {
          ik: function () {
            return h;
          },
          jw: function () {
            return m;
          },
          zW: function () {
            return i;
          },
          tD: function () {
            return o;
          },
          Yv: function () {
            return u;
          },
          co: function () {
            return d;
          },
        });
        var a,
          i,
          n = t(85893),
          r = {
            src: "/_next/static/media/default.dad185e6.png",
            height: 900,
            width: 900,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXF0iI8VNz81T2gjJz0cJTpkUFsBBgcYIS0gQVceJTRgW2llb3sXLkPj484aJDqGjIocNU9HcYINJzYNP0sEMT0vXnQu97D/AAAAEXRSTlMAyPv9iahE/Vj9ImqywSW9qWjaEj4AAAAJcEhZcwAAFE0AABRNAZTKjS8AAAA9SURBVHicHYtbEoAgDMQir1IREFDvf1Sm7lcykwVICVu7p48ncEznvm7wijwVuJbIikDxqiNbHXSE/0Y23zh7AYA/6iJGAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8,
          },
          l = () => {
            let A = crypto.randomUUID();
            return (0, n.jsxs)("svg", {
              width: "40",
              height: "39",
              viewBox: "0 0 40 39",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M38.592 14.6589C37.1346 11.5777 35.4352 8.61829 33.5096 5.80879L32.8886 4.91133C32.1239 3.79602 31.1218 2.86594 29.9549 2.18873C28.7881 1.51151 27.4856 1.10416 26.1426 0.996262L25.0522 0.907922C21.6693 0.634859 18.2702 0.634859 14.8874 0.907922L13.797 0.996262C12.4539 1.10416 11.1516 1.51151 9.98473 2.18873C8.81785 2.86594 7.81568 3.79602 7.05106 4.91133L6.42999 5.81682C4.5045 8.62633 2.80498 11.5857 1.34757 14.6669L0.878268 15.6587C0.300019 16.882 0 18.2194 0 19.5738C0 20.9282 0.300019 22.2656 0.878268 23.4889L1.34757 24.4807C2.80498 27.562 4.5045 30.5214 6.42999 33.3308L7.05106 34.2363C7.81568 35.3516 8.81785 36.2818 9.98473 36.959C11.1516 37.6362 12.4539 38.0436 13.797 38.1514L14.8874 38.2397C18.2702 38.5128 21.6693 38.5128 25.0522 38.2397L26.1426 38.1514C27.4866 38.0422 28.7897 37.633 29.9565 36.9536C31.1236 36.2741 32.1251 35.3418 32.8886 34.2243L33.5096 33.3188C35.4352 30.5093 37.1346 27.5499 38.592 24.4687L39.0614 23.4769C39.6395 22.2535 39.9396 20.9162 39.9396 19.5618C39.9396 18.2074 39.6395 16.87 39.0614 15.6467L38.592 14.6589Z",
                  fill: "url(#".concat(A, ")"),
                  fillOpacity: "0.2",
                }),
                (0, n.jsx)("path", {
                  d: "M28.6641 29.0501C28.8536 29.0501 29.0354 29.1257 29.1695 29.2602C29.3035 29.3947 29.3788 29.5772 29.3788 29.7674C29.3788 29.9576 29.3035 30.1401 29.1695 30.2746C29.0354 30.4091 28.8536 30.4847 28.6641 30.4847H11.2699C11.0803 30.4847 10.8985 30.4091 10.7645 30.2746C10.6305 30.1401 10.5551 29.9576 10.5551 29.7674C10.5551 29.5772 10.6305 29.3947 10.7645 29.2602C10.8985 29.1257 11.0803 29.0501 11.2699 29.0501H28.6641ZM8.125 12.7645C8.12465 12.148 8.29304 11.5432 8.61181 11.0162C8.93058 10.4891 9.38747 10.0601 9.93263 9.7759C10.4778 9.49169 11.0903 9.36322 11.7032 9.40451C12.3161 9.4458 12.906 9.65526 13.4084 10.01V8.70168C13.4084 8.51144 13.4837 8.32899 13.6178 8.19447C13.7518 8.05995 13.9336 7.98438 14.1232 7.98438H25.8108C26.0003 7.98438 26.1821 8.05995 26.3162 8.19447C26.4502 8.32899 26.5255 8.51144 26.5255 8.70168V10.01C27.0437 9.64174 27.6554 9.42853 28.2896 9.39517C28.9237 9.3618 29.5542 9.50964 30.108 9.82152C30.6617 10.1334 31.116 10.5965 31.418 11.1571C31.7199 11.7177 31.8572 12.3528 31.814 12.9886C31.7707 13.6244 31.5486 14.2348 31.1734 14.749C30.7983 15.2631 30.2855 15.66 29.6946 15.8934C29.1038 16.1268 28.459 16.1872 27.8353 16.0676C27.2116 15.948 26.6345 15.6533 26.171 15.2176C25.5028 17.6265 23.9324 19.6827 21.7882 20.9561L20.6817 21.6332V26.1206H23.4407C23.6302 26.1206 23.812 26.1962 23.9461 26.3307C24.0801 26.4653 24.1554 26.6477 24.1554 26.8379C24.1554 27.0282 24.0801 27.2106 23.9461 27.3452C23.812 27.4797 23.6302 27.5552 23.4407 27.5552H16.4933C16.3037 27.5552 16.1219 27.4797 15.9879 27.3452C15.8538 27.2106 15.7785 27.0282 15.7785 26.8379C15.7785 26.6477 15.8538 26.4653 15.9879 26.3307C16.1219 26.1962 16.3037 26.1206 16.4933 26.1206H19.2522V21.6332L18.1458 20.979C15.9969 19.7002 14.4259 17.635 13.7629 15.2176C13.286 15.6647 12.6894 15.9623 12.0463 16.0738C11.4032 16.1853 10.7416 16.1059 10.1429 15.8454C9.54408 15.5849 9.03416 15.1545 8.67569 14.6072C8.31723 14.0599 8.12583 13.4194 8.125 12.7645ZM26.5255 12.7645C26.5255 13.147 26.6385 13.5208 26.8503 13.8389C27.062 14.1569 27.363 14.4047 27.7151 14.5511C28.0672 14.6975 28.4546 14.7358 28.8284 14.6612C29.2022 14.5865 29.5456 14.4024 29.8151 14.1319C30.0845 13.8615 30.2681 13.5169 30.3424 13.1418C30.4168 12.7666 30.3786 12.3778 30.2328 12.0244C30.0869 11.6711 29.8399 11.369 29.5231 11.1565C29.2062 10.944 28.8336 10.8306 28.4525 10.8306C27.9414 10.8306 27.4513 11.0344 27.0899 11.397C26.7285 11.7597 26.5255 12.2516 26.5255 12.7645ZM14.8379 12.6612C14.8411 14.0912 15.2146 15.4958 15.9218 16.7372C16.629 17.9786 17.6457 19.0142 18.872 19.7424L19.967 20.3822L21.062 19.7338C22.2871 19.0064 23.3029 17.9721 24.01 16.7323C24.7172 15.4925 25.0914 14.0897 25.096 12.6612V9.41898H14.8379V12.6612ZM9.5545 12.7645C9.5545 13.147 9.66751 13.5208 9.87925 13.8389C10.091 14.1569 10.3919 14.4047 10.744 14.5511C11.0962 14.6975 11.4836 14.7358 11.8574 14.6612C12.2312 14.5865 12.5745 14.4024 12.844 14.1319C13.1135 13.8615 13.2971 13.5169 13.3714 13.1418C13.4458 12.7666 13.4076 12.3778 13.2617 12.0244C13.1159 11.6711 12.8689 11.369 12.552 11.1565C12.2351 10.944 11.8626 10.8306 11.4815 10.8306C10.9704 10.8306 10.4803 11.0344 10.1189 11.397C9.75752 11.7597 9.5545 12.2516 9.5545 12.7645Z",
                  fill: "#9A7B40",
                  fillOpacity: "0.3",
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsxs)("radialGradient", {
                    id: A,
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(20.0143 38.4445) rotate(-90) scale(37.7414 39.9396)",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#9A7B40" }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#9A7B40",
                        stopOpacity: "0.2",
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          C = () => {
            let A = crypto.randomUUID();
            return (0, n.jsxs)("svg", {
              width: "40",
              height: "38",
              viewBox: "0 0 40 38",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M38.592 14.1198C37.1346 11.0386 35.4352 8.07923 33.5096 5.26973L32.8886 4.37227C32.1239 3.25696 31.1218 2.32687 29.9549 1.64966C28.7881 0.972448 27.4856 0.565093 26.1426 0.457199L25.0522 0.368859C21.6693 0.0957969 18.2702 0.0957969 14.8874 0.368859L13.797 0.457199C12.4539 0.565093 11.1516 0.972448 9.98473 1.64966C8.81785 2.32687 7.81568 3.25696 7.05106 4.37227L6.42999 5.27776C4.5045 8.08726 2.80498 11.0467 1.34757 14.1279L0.878268 15.1197C0.300019 16.343 0 17.6804 0 19.0348C0 20.3892 0.300019 21.7265 0.878268 22.9498L1.34757 23.9417C2.80498 27.0229 4.5045 29.9823 6.42999 32.7917L7.05106 33.6972C7.81568 34.8125 8.81785 35.7427 9.98473 36.4199C11.1516 37.0971 12.4539 37.5045 13.797 37.6123L14.8874 37.7007C18.2702 37.9737 21.6693 37.9737 25.0522 37.7007L26.1426 37.6123C27.4866 37.5031 28.7897 37.0939 29.9565 36.4145C31.1236 35.7351 32.1251 34.8027 32.8886 33.6852L33.5096 32.7797C35.4352 29.9703 37.1346 27.0109 38.592 23.9296L39.0614 22.9378C39.6395 21.7145 39.9396 20.3771 39.9396 19.0227C39.9396 17.6683 39.6395 16.3309 39.0614 15.1076L38.592 14.1198Z",
                  fill: "url(#".concat(A, ")"),
                  fillOpacity: "0.2",
                }),
                (0, n.jsx)("path", {
                  d: "M28.6641 28.5189C28.8536 28.5189 29.0354 28.5944 29.1695 28.7289C29.3035 28.8635 29.3788 29.0459 29.3788 29.2362C29.3788 29.4264 29.3035 29.6088 29.1695 29.7434C29.0354 29.8779 28.8536 29.9535 28.6641 29.9535H11.2699C11.0803 29.9535 10.8985 29.8779 10.7645 29.7434C10.6305 29.6088 10.5551 29.4264 10.5551 29.2362C10.5551 29.0459 10.6305 28.8635 10.7645 28.7289C10.8985 28.5944 11.0803 28.5189 11.2699 28.5189H28.6641ZM8.125 12.2332C8.12465 11.6167 8.29304 11.0119 8.61181 10.4849C8.93058 9.95789 9.38747 9.52886 9.93263 9.24465C10.4778 8.96044 11.0903 8.83197 11.7032 8.87326C12.3161 8.91455 12.906 9.12401 13.4084 9.47879V8.17043C13.4084 7.98019 13.4837 7.79774 13.6178 7.66322C13.7518 7.5287 13.9336 7.45312 14.1232 7.45312H25.8108C26.0003 7.45312 26.1821 7.5287 26.3162 7.66322C26.4502 7.79774 26.5255 7.98019 26.5255 8.17043V9.47879C27.0437 9.11049 27.6554 8.89728 28.2896 8.86392C28.9237 8.83055 29.5542 8.97839 30.108 9.29027C30.6617 9.60216 31.116 10.0653 31.418 10.6259C31.7199 11.1865 31.8572 11.8216 31.814 12.4573C31.7707 13.0931 31.5486 13.7035 31.1734 14.2177C30.7983 14.7319 30.2855 15.1287 29.6946 15.3621C29.1038 15.5955 28.459 15.6559 27.8353 15.5363C27.2116 15.4167 26.6345 15.122 26.171 14.6864C25.5028 17.0952 23.9324 19.1514 21.7882 20.4248L20.6817 21.102V25.5894H23.4407C23.6302 25.5894 23.812 25.665 23.9461 25.7995C24.0801 25.934 24.1554 26.1165 24.1554 26.3067C24.1554 26.4969 24.0801 26.6794 23.9461 26.8139C23.812 26.9484 23.6302 27.024 23.4407 27.024H16.4933C16.3037 27.024 16.1219 26.9484 15.9879 26.8139C15.8538 26.6794 15.7785 26.4969 15.7785 26.3067C15.7785 26.1165 15.8538 25.934 15.9879 25.7995C16.1219 25.665 16.3037 25.5894 16.4933 25.5894H19.2522V21.102L18.1458 20.4478C15.9969 19.1689 14.4259 17.1037 13.7629 14.6864C13.286 15.1335 12.6894 15.431 12.0463 15.5425C11.4032 15.6541 10.7416 15.5747 10.1429 15.3141C9.54408 15.0536 9.03416 14.6233 8.67569 14.076C8.31723 13.5286 8.12583 12.8882 8.125 12.2332ZM26.5255 12.2332C26.5255 12.6157 26.6385 12.9896 26.8503 13.3076C27.062 13.6256 27.363 13.8735 27.7151 14.0199C28.0672 14.1662 28.4546 14.2045 28.8284 14.1299C29.2022 14.0553 29.5456 13.8711 29.8151 13.6007C30.0845 13.3302 30.2681 12.9856 30.3424 12.6105C30.4168 12.2354 30.3786 11.8465 30.2328 11.4932C30.0869 11.1398 29.8399 10.8378 29.5231 10.6253C29.2062 10.4128 28.8336 10.2994 28.4525 10.2994C27.9414 10.2994 27.4513 10.5031 27.0899 10.8658C26.7285 11.2285 26.5255 11.7203 26.5255 12.2332ZM14.8379 12.1299C14.8411 13.5599 15.2146 14.9645 15.9218 16.2059C16.629 17.4474 17.6457 18.483 18.872 19.2111L19.967 19.851L21.062 19.2025C22.2871 18.4751 23.3029 17.4409 24.01 16.2011C24.7172 14.9613 25.0914 13.5585 25.096 12.1299V8.88773H14.8379V12.1299ZM9.5545 12.2332C9.5545 12.6157 9.66751 12.9896 9.87925 13.3076C10.091 13.6256 10.3919 13.8735 10.744 14.0199C11.0962 14.1662 11.4836 14.2045 11.8574 14.1299C12.2312 14.0553 12.5745 13.8711 12.844 13.6007C13.1135 13.3302 13.2971 12.9856 13.3714 12.6105C13.4458 12.2354 13.4076 11.8465 13.2617 11.4932C13.1159 11.1398 12.8689 10.8378 12.552 10.6253C12.2351 10.4128 11.8626 10.2994 11.4815 10.2994C10.9704 10.2994 10.4803 10.5031 10.1189 10.8658C9.75752 11.2285 9.5545 11.7203 9.5545 12.2332Z",
                  fill: "#CDB04E",
                  fillOpacity: "0.3",
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsxs)("radialGradient", {
                    id: A,
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(20.0143 37.9054) rotate(-90) scale(37.7414 39.9396)",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#CDB04E" }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#FDD95E",
                        stopOpacity: "0.2",
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          s = () => {
            let A = crypto.randomUUID();
            return (0, n.jsxs)("svg", {
              width: "40",
              height: "39",
              viewBox: "0 0 40 39",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M38.592 14.3933C37.1346 11.3121 35.4352 8.35267 33.5096 5.54317L32.8886 4.64571C32.1239 3.53039 31.1218 2.60031 29.9549 1.9231C28.7881 1.24589 27.4856 0.838531 26.1426 0.730637L25.0522 0.642297C21.6693 0.369234 18.2702 0.369234 14.8874 0.642297L13.797 0.730637C12.4539 0.838531 11.1516 1.24589 9.98473 1.9231C8.81785 2.60031 7.81568 3.53039 7.05106 4.64571L6.42999 5.5512C4.5045 8.3607 2.80498 11.3201 1.34757 14.4013L0.878268 15.3931C0.300019 16.6164 0 17.9538 0 19.3082C0 20.6626 0.300019 22 0.878268 23.2233L1.34757 24.2151C2.80498 27.2964 4.5045 30.2558 6.42999 33.0652L7.05106 33.9707C7.81568 35.086 8.81785 36.0162 9.98473 36.6934C11.1516 37.3706 12.4539 37.7779 13.797 37.8858L14.8874 37.9741C18.2702 38.2471 21.6693 38.2471 25.0522 37.9741L26.1426 37.8858C27.4866 37.7765 28.7897 37.3674 29.9565 36.6879C31.1236 36.0085 32.1251 35.0761 32.8886 33.9586L33.5096 33.0531C35.4352 30.2437 37.1346 27.2843 38.592 24.203L39.0614 23.2112C39.6395 21.9879 39.9396 20.6506 39.9396 19.2961C39.9396 17.9417 39.6395 16.6044 39.0614 15.3811L38.592 14.3933Z",
                  fill: "url(#".concat(A, ")"),
                  fillOpacity: "0.2",
                }),
                (0, n.jsx)("path", {
                  d: "M28.6641 28.7845C28.8536 28.7845 29.0354 28.8601 29.1695 28.9946C29.3035 29.1291 29.3788 29.3115 29.3788 29.5018C29.3788 29.692 29.3035 29.8745 29.1695 30.009C29.0354 30.1435 28.8536 30.2191 28.6641 30.2191H11.2699C11.0803 30.2191 10.8985 30.1435 10.7645 30.009C10.6305 29.8745 10.5551 29.692 10.5551 29.5018C10.5551 29.3115 10.6305 29.1291 10.7645 28.9946C10.8985 28.8601 11.0803 28.7845 11.2699 28.7845H28.6641ZM8.125 12.4989C8.12465 11.8823 8.29304 11.2776 8.61181 10.7505C8.93058 10.2235 9.38747 9.79449 9.93263 9.51028C10.4778 9.22607 11.0903 9.0976 11.7032 9.13889C12.3161 9.18018 12.906 9.38964 13.4084 9.74441V8.43605C13.4084 8.24581 13.4837 8.06336 13.6178 7.92884C13.7518 7.79432 13.9336 7.71875 14.1232 7.71875H25.8108C26.0003 7.71875 26.1821 7.79432 26.3162 7.92884C26.4502 8.06336 26.5255 8.24581 26.5255 8.43605V9.74441C27.0437 9.37612 27.6554 9.16291 28.2896 9.12954C28.9237 9.09617 29.5542 9.24401 30.108 9.5559C30.6617 9.86779 31.116 10.3309 31.418 10.8915C31.7199 11.4521 31.8572 12.0872 31.814 12.723C31.7707 13.3588 31.5486 13.9692 31.1734 14.4833C30.7983 14.9975 30.2855 15.3944 29.6946 15.6278C29.1038 15.8612 28.459 15.9216 27.8353 15.802C27.2116 15.6823 26.6345 15.3876 26.171 14.952C25.5028 17.3608 23.9324 19.417 21.7882 20.6904L20.6817 21.3676V25.855H23.4407C23.6302 25.855 23.812 25.9306 23.9461 26.0651C24.0801 26.1996 24.1554 26.3821 24.1554 26.5723C24.1554 26.7626 24.0801 26.945 23.9461 27.0795C23.812 27.2141 23.6302 27.2896 23.4407 27.2896H16.4933C16.3037 27.2896 16.1219 27.2141 15.9879 27.0795C15.8538 26.945 15.7785 26.7626 15.7785 26.5723C15.7785 26.3821 15.8538 26.1996 15.9879 26.0651C16.1219 25.9306 16.3037 25.855 16.4933 25.855H19.2522V21.3676L18.1458 20.7134C15.9969 19.4346 14.4259 17.3694 13.7629 14.952C13.286 15.3991 12.6894 15.6967 12.0463 15.8082C11.4032 15.9197 10.7416 15.8403 10.1429 15.5798C9.54408 15.3192 9.03416 14.8889 8.67569 14.3416C8.31723 13.7943 8.12583 13.1538 8.125 12.4989ZM26.5255 12.4989C26.5255 12.8813 26.6385 13.2552 26.8503 13.5732C27.062 13.8913 27.363 14.1391 27.7151 14.2855C28.0672 14.4319 28.4546 14.4702 28.8284 14.3955C29.2022 14.3209 29.5456 14.1367 29.8151 13.8663C30.0845 13.5958 30.2681 13.2513 30.3424 12.8761C30.4168 12.501 30.3786 12.1122 30.2328 11.7588C30.0869 11.4054 29.8399 11.1034 29.5231 10.8909C29.2062 10.6784 28.8336 10.565 28.4525 10.565C27.9414 10.565 27.4513 10.7687 27.0899 11.1314C26.7285 11.4941 26.5255 11.986 26.5255 12.4989ZM14.8379 12.3956C14.8411 13.8255 15.2146 15.2302 15.9218 16.4716C16.629 17.713 17.6457 18.7486 18.872 19.4768L19.967 20.1166L21.062 19.4682C22.2871 18.7407 23.3029 17.7065 24.01 16.4667C24.7172 15.2269 25.0914 13.8241 25.096 12.3956V9.15335H14.8379V12.3956ZM9.5545 12.4989C9.5545 12.8813 9.66751 13.2552 9.87925 13.5732C10.091 13.8913 10.3919 14.1391 10.744 14.2855C11.0962 14.4319 11.4836 14.4702 11.8574 14.3955C12.2312 14.3209 12.5745 14.1367 12.844 13.8663C13.1135 13.5958 13.2971 13.2513 13.3714 12.8761C13.4458 12.501 13.4076 12.1122 13.2617 11.7588C13.1159 11.4054 12.8689 11.1034 12.552 10.8909C12.2351 10.6784 11.8626 10.565 11.4815 10.565C10.9704 10.565 10.4803 10.7687 10.1189 11.1314C9.75752 11.4941 9.5545 11.986 9.5545 12.4989Z",
                  fill: "#C0C0C0",
                  fillOpacity: "0.3",
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsxs)("radialGradient", {
                    id: A,
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(20.0143 38.1789) rotate(-90) scale(37.7414 39.9396)",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#C0C0C0" }),
                      (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: "#C0C0C0",
                        stopOpacity: "0.2",
                      }),
                    ],
                  }),
                }),
              ],
            });
          };
        let c = {
            "referral-quest-lv1": {
              src: "/_next/static/media/level-1.3153e850.png",
              height: 97,
              width: 94,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXEgLC8mRzU9QjJnVXMhKT48S1UkQzoiLjzmzc1MW1qbn5tabG8sOlW7k6FOS2AzMUYuPFYpMyp1h4NUZmY1RFMeK0wKJR1McGEUXHzgAAAAFXRSTlMA/vz9Fe/5GKAU/Jno6ROZlej96fP0dgJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nB2KSRLAIAyAcI1Ruzra/v+lnZQLBwDQiKGt5yJAe72fBXQ8IaxL2Ltz99oEjlyrJeKZ0j+DmD5A8wHHIENtRAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            "referral-quest-lv2": {
              src: "/_next/static/media/level-2.1afc40fc.png",
              height: 95,
              width: 94,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXEpMkMtO1QeKjiId4gpOToRTRE2VlYjLz5QXEP/4+OhpKBEUlNfenFTTGLnudAzM0VoZnEkSTE+SDstTkFdaHCTk415i4U4R1UhL1EOKCAUhEnuAAAAGHRSTlMA/OD9B1cQC5L9DYv6/IkLh1r6/PrbU9+HEC5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nB3KSRKAIAwAwUFAwuYGavT/D7Xk1ocGuPYAkHJV+ZXr0VUg3W+MzzSznrYNsGgpRgC3GTsyzvsAH1ZAAittiDjlAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            "referral-quest-lv3": {
              src: "/_next/static/media/level-3.ecaa907c.png",
              height: 95,
              width: 94,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVNa1s0OEgnMEIjL00iLjsoOTsgLzxMaXHbxdU/T1Zfe3ExU0EAAAAaJDNTTmIbIjj1/uxpZnFwgX4gRS9ZZW5jc1ReZ0s8Rjp1hFyRkYygop6qr6otQUJLXW9Zbnk5QlBvKh3UAAAAHHRSTlMTyvrhKF6OAAv7+v0B0Yn1HGHf+tv9/Pz9W4fI/qA1AAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwVykkSgCAQBLAGhJ4BFcF9//8vLXMOSNkLSHA4o5qG4BHHpIGQmpbtcYBM1zrfDmD/qtpAEMbm7s+teA/yA2hyArDCON4GAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            "referral-quest-lv4": {
              src: "/_next/static/media/level-4.7afc4550.png",
              height: 95,
              width: 95,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVMaXFJRliTkJQbJTMzUUM8S1YmOjYeJT/V1dVham82QExpgYJcd3UwQkIeNjYbJDMtQzolLz+cmKJoZXAoTjZpfHlaaVF8imMxP0ZNX3Fmd1cqMEGxtbB4iGCYmJj///NhanV6iInct+3QAAAAIHRSTlMAsV2n+/lY/AcR/R78VCHDdfJ3Xfvw/v4k+/3Ev/6cFnmSaGQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVHicFctFEoBAEACxXmPWcHf4/ycpcg/gdR8A7mN0+wLpyoN1JtG9dj6zNOjHTtsqBV7F6MQAQbVSV3/zZRHgA2ovAqiYmfE1AAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            "referral-quest-lv5": {
              src: "/_next/static/media/level-5.c7e3e80e.png",
              height: 95,
              width: 94,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVMaXGWlZdNVV1nfXsqPz2Q/5AbJTa1zbpeYW1qfFg3Qk1SZFg7SkNmcnWImWo1RkMgNDocJDRPS2AwNUUaIjkwSUShnaklL0EqNkJpaXAeNygiKjxbbU4jOi2qsauWmZj2/+0YHTUpM0AiANNoAAAAIXRSTlMAaP0mZAGwCxb9+/36+v5bJ9G0ufaDhvUqaPvD+fvMpB20nHI8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBCRaAEABAwU88FFq0p4X7H7IZ0EYcFg3fE9prh+btzrumhjXkGF1ZENI7l4vCTK2X9TJg0zaPA4DplYUffvMDUqYwLWQAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            "og-trade": {
              src: "/_next/static/media/33.7f1d51c6.png",
              height: 900,
              width: 900,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXE+M14YSCZnZXIwKjwfFjkNSh52bYMmH0M5J1SosKUiFz9MSl0cGDROSlwWNC0fIjQ1KEoaIi1fU20eLjPH/D6gAAAAEnRSTlMA/f24/r/9DFr9VWFdw7z9wbaRJ5NyAAAACXBIWXMAABRNAAAUTQGUyo0vAAAAOUlEQVR4nD2KWwrAIAzAolbbOuee9z/rKAzzFUhgob1cpkB//HgNKCm1XIHpnlvIEJE7ktq5bzH/fCvkATXNCLLbAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            "first-trade-execution": {
              src: "/_next/static/media/22.211b0f43.png",
              height: 900,
              width: 900,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEVMaXElJjdrdmAXNjoyOkYyQjiwt7cVNDuprrAYMjkCOCWmra4sZj9PxHoAM2Z/f5kdGSxISFlsanczq4iVl5ckkGeps68YXztZaWA8RkggbleImYwXITMWRD8UKzQrMzhvc3ESHCggKSqDoIdHYlY3WUN6x5KhAAAAH3RSTlMA4/2Eg/4jIG2T+47+GgUUvrHV+uf7uf7k5f59tmRw9TkCMAAAAAlwSFlzAAAUTQAAFE0BlMqNLwAAAEZJREFUeJwVxkcSgCAQBMAhg4CYs67x/1+06FPDasQIs8MP6zTLzcF37zJ+TMCeRQg9HTn8aUlAN7fiihkg1XRVBpl0JfADjH0DiPZDIREAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          o = (A) =>
            c[A.slug]
              ? c[A.slug]
              : A.imageUrl
              ? "/images/badges/".concat(A.imageUrl)
              : r,
          g = [
            {
              src: "/_next/static/media/FirstTier-min.12af6adc.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXEaMjf///9NVGANTjoWPzpASEwcNTZOV1pkaXAAQyiwtqMfMj4uZWDkA7u3AAAADHRSTlMAkQXWJ61Dzq/SEypNS1IVAAAACXBIWXMAAEzlAABM5QF1zvCVAAAAJElEQVR4nGNgwAK4ORi5QDQTJw8PI5jBzMMLZjCwsbOyYNMCABGoAHgi2WRtAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/SecondTier-min.5da0733d.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXEUKi////8vYVBlZGwNSTURKyshOjpFWFyqtqomMTpLVFQ1SEsZOTij8vQJAAAADHRSTlMAlAUO1Cax1UIqi6+c1GJmAAAACXBIWXMAAEzlAABM5QF1zvCVAAAAIklEQVR4nGNgwAI4ubmYQTQTCw8vIwqDgYOdjRWiCKwCDgASPQB/lNbN/wAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/ThirdTier-min.2f27ba3e.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXG0zrwASCw8SEkeLzMSKy9ZaWElNTxBSU24v7JWYVsfPTMrPDplW3O7cZvBAAAAC3RSTlMABhzWkpfSsUIouj248fgAAAAJcEhZcwAATOUAAEzlAXXO8JUAAAAoSURBVHicY2BAAoxQmpOLhQnMZ+PmZgEzmHl4WcFSHMzsYCmEYggAABCpAHNjwmqpAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/FourthTier-min.637d3e1a.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXG6zLoRVjFaV2ISKy4kOzwyN0VIVlmsuKURKSxiWmYjWlY9dm0tRlFJPVtdKij3AAAAC3RSTlMABx/Xp9OSSiiPuuRdySUAAAAJcEhZcwAATOUAAEzlAXXO8JUAAAAnSURBVHicY2BAAoxQmoOLjQnMZ+bj5YQweLhZwFLsrCxgKYRiCAAAEWAAdoZAcR4AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/FifthTier-min.2ac44e05.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXETNDIWUjRWbmr///9mM0wjSUFOTliqqp8nNT5YYWAfb1kZMj0bND0xcNIxAAAAC3RSTlMAoiLbCArTSzCTuRdLPKkAAAAJcEhZcwAATOUAAEzlAXXO8JUAAAAnSURBVHicY2DAAji4OJlANAszLw8jhMHNDWYwsLMxgqUYGFhR9AAAEKkAch8GkHIAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/SixthTier-min.8b9c94dd.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXGQqoFXdWoXYD3///8PMy4qQkUnQT9Xb2lZcmmiuKIWNDQ0V1k7SVtObG59u8exAAAADHRSTlMABuUlC6Ki2lfCOr7Zx+/3AAAACXBIWXMAAEzlAABM5QF1zvCVAAAAKUlEQVR4nGNgQAKMUJqLk40ZRLMw8fGwQhi8EAYDBzs3WIqBgRGmGgwAEvsAhg5KGlAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/SeventhTier-min.f80b6b19.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXFfZWnm4OAlX0UYUzUUOjilv6UfKTqcsJwrNkBPaF0qNEFLa2goXkEfbkllUVkpwbjyAAAADHRSTlMA5A0sGqI8zQ3zWrqIPMyEAAAACXBIWXMAAEzlAABM5QF1zvCVAAAAKklEQVR4nGNgQAJMHBCajZGbBcxn5OVjhTD4ecAMBi5OdmaIImawEhgAABOaAItPP+aVAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/EighthTier-min.d1581e79.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXErTEgjQT3///8VNDKPnY9icmsZSTtebWsuOUMTLS9PZ1+8zbwkUUMgZkdnoPKPAAAADXRSTlMALvwLohzpRYLN4eZnc0lHyAAAAAlwSFlzAABM5QAATOUBdc7wlQAAACxJREFUeJxjYEACrKwQmoeNkxFEM7PxMrGAGdx8vGAGAwcTFztEESNYCQwAABScAI2SSD3gAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/NinthTier-min.73d9ee89.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXEUMzR0f38wQEkaRzwTLTJdW2gtQ0GYp5tsbXJcbWsmcWO/478TJi4nSUS3y7ctfF9FUmSd6JE3AAAAEHRSTlMA4RjNRKz5Lirsgv4cyflnUPD/ZAAAAAlwSFlzAABM5QAATOUBdc7wlQAAACxJREFUeJxjYEACHEwQmp+TmR1E83AKCrCCJdi4BXjBUlx8jCwQRexgJTAAABy1AMlHF4tdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/TenthTier-min.deeb68da.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXErQkdMUl+A0LAULTFhV3OPj5MeLzhhc26kpKtgam4mQj67zL2fpKjXKFLDAAAADnRSTlMAMf4I3f4cyfdSf/dpOy2VPSAAAAAJcEhZcwAATOUAAEzlAXXO8JUAAAAwSURBVHicY2BAAmxsEJqHg50RRHNysLKyMDMwMPAyMTGxgxgMXNwsYCkGBkYoDQEAFA8AhGcGzX8AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            {
              src: "/_next/static/media/EleventhTier-min.d134e135.png",
              height: 1e3,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXFRsWihp6cYJDITMyJucnUbQj5d6KMcZ0QULDBdUFwrek9abmxDp2RPU1uqyK+fqKg6RVApQUBAOEfm/dKTAAAAEnRSTlMAOFLJ/vxBBzbi/FOEJvxwO9UFBoKgAAAACXBIWXMAAEzlAABM5QF1zvCVAAAAMUlEQVR4nGNgQAKMvBCan1WQA0QzsXIJc7IzMDAI8LGwMIMYDDxCnGxgNezcYCUwAAAfzADnePPrRwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          ],
          d = (A) => g[A - 1];
        ((a = i || (i = {})).RANKING = "Ranking"),
          (a.DISPLAY_NAME = "User"),
          (a.POINTS = "Points");
        let h = Object.values(i),
          u = (A) => {
            switch (A) {
              case 1:
                return (0, n.jsx)(C, {});
              case 2:
                return (0, n.jsx)(s, {});
              case 3:
                return (0, n.jsx)(l, {});
            }
          },
          m = {
            description: "",
            icon: null,
            id: 1,
            maxPoints: 999,
            minPoints: 0,
            name: "-",
          };
      },
      85292: function (A, e, t) {
        "use strict";
        var a = t(85893),
          i = t(93967),
          n = t.n(i),
          r = t(25448),
          l = t.n(r);
        e.Z = (A) => {
          let { size: e = "xl", children: t, className: i } = A;
          return (0, a.jsx)("div", {
            className: n()(l().container, l()[e], i),
            children: t,
          });
        };
      },
      27888: function (A, e, t) {
        "use strict";
        var a = t(85893),
          i = t(80140),
          n = t.n(i);
        e.Z = (A) => {
          let { children: e } = A;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("main", { className: n().Main, children: e }),
          });
        };
      },
      13880: function (A, e, t) {
        "use strict";
        var a = t(85893),
          i = t(2920),
          n = t.n(i);
        e.Z = (A) => {
          let { children: e, margin: t = "m-0", className: i = "" } = A;
          return (0, a.jsx)("div", {
            className: ""
              .concat(n().panel, " ")
              .concat(t && t, " ")
              .concat(i),
            children: e,
          });
        };
      },
      20448: function (A, e, t) {
        "use strict";
        t.d(e, {
          b: function () {
            return C;
          },
        });
        var a = t(43210),
          i = t(86900),
          n = t(57393);
        let r = a.y,
          l = {
            localhost: i.Z,
            "app.ithacaprotocol.io": r,
            "sepolia.canary.ithacanoemon.tech": i.Z,
            "testnet.ithacaprotocol.io": i.Z,
            "app.canary.ithacanoemon.tech": i.Z,
            "mumbai.canary.ithacanoemon.tech": n.v,
            "decent-governor-development-phase1.up.railway.app": i.Z,
            "axelar-integration.ithacaprotocol.io": a.y,
          },
          C = (A) => {
            var e;
            return A
              ? {
                  id: 102,
                  name: "Solana",
                  nativeCurrency: { name: "SOL", symbol: "WSOL", decimals: 9 },
                }
              : /^ithaca-interface-git-[a-zA-Z0-9-]+-ithaca-[a-z0-9]+\.vercel\.app$/.test(
                  window.location.hostname
                )
              ? i.Z
              : null !== (e = l[window.location.hostname]) && void 0 !== e
              ? e
              : r;
          };
      },
      64729: function (A, e, t) {
        "use strict";
        t.d(e, {
          X: function () {
            return a;
          },
        }),
          t(82649);
        let a = () => ({
          isSolanaWalletActive: !1,
          leaderBoardAddresses: {
            fundlockArbitrumAddress:
              "0x4a20d341315b8ead4e5ebecc65d95080a47a7316",
            wethArbitrumAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            usdcArbitrumAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          },
        });
      },
      81989: function (A, e, t) {
        "use strict";
        t.d(e, {
          Gc: function () {
            return p;
          },
          ho: function () {
            return m;
          },
          Pk: function () {
            return u;
          },
        });
        var a = t(64729),
          i = t(92321),
          n = t(54306),
          r = t(44718),
          l = t(20448),
          C = t(12185),
          s = t(59731),
          c = t(88144),
          o = t(72809);
        let g = (A) => {
            let { address: e, token: t, query: i } = A,
              { connection: n } = (0, r.R)(),
              l = e ? new o.PublicKey(e) : null,
              { leaderBoardAddresses: C } = (0, a.X)();
            return (0, c.a)({
              queryKey: ["solana-balance", e, t],
              queryFn: async () => {
                if (!l || !n) throw Error("Missing publicKey or connection");
                if ("SOL" === t) {
                  let A = await n.getBalance(l);
                  return {
                    decimals: 9,
                    formatted: (A / o.LAMPORTS_PER_SOL).toString(),
                    symbol: "SOL",
                    value: BigInt(A),
                  };
                }
                if ("USDC" === t) {
                  let A = await n.getParsedTokenAccountsByOwner(l, {
                      mint: new o.PublicKey(C.wethArbitrumAddress),
                    }),
                    e = 0;
                  return (
                    A.value.length > 0 &&
                      (e =
                        A.value[0].account.data.parsed.info.tokenAmount
                          .uiAmount || 0),
                    {
                      decimals: 6,
                      formatted: e.toString(),
                      symbol: "USDC",
                      value: BigInt(1e6 * e),
                    }
                  );
                }
                throw Error("Unsupported token: ".concat(t));
              },
              refetchInterval: 1e4,
              enabled: !!l && !!n,
              ...i,
            });
          },
          d = () => {
            let { isConnected: A, address: e } = (0, i.m)();
            return { isConnected: A, address: e };
          },
          h = () => {
            let { connected: A, publicKey: e } = (0, n.O)(),
              { connection: t } = (0, r.R)();
            return {
              isConnected: A,
              address: null == e ? void 0 : e.toBase58(),
            };
          },
          u = () => {
            let { isSolanaWalletActive: A } = (0, a.X)(),
              e = d(),
              t = h();
            return A ? t : e;
          },
          m = () => {
            let { address: A } = h();
            return {
              SOLData: g({
                address: A,
                token: "SOL",
                query: { enabled: !!A, refetchInterval: 1e4 },
              }),
              USDCData: g({
                address: null == A ? void 0 : A.toString(),
                token: "USDC",
                query: { enabled: !!A, refetchInterval: 1e4 },
              }),
            };
          },
          p = () => {
            let { address: A } = d(),
              { systemInfo: e, isAuthenticated: t } = (0, s.qr)(),
              a = { address: A, chainId: (0, l.b)().id };
            return {
              WETHData: (0, C.K)({
                ...a,
                token: e.tokenAddress.WETH,
                query: { enabled: t, refetchInterval: 1e4 },
              }),
              USDCData: (0, C.K)({
                ...a,
                token: e.tokenAddress.USDC,
                query: { enabled: t, refetchInterval: 1e4 },
              }),
            };
          };
      },
      7235: function (A) {
        A.exports = {
          pagination: "Pagination_pagination__x05XU",
          navigationItem: "Pagination_navigationItem__FjrLC",
          active: "Pagination_active__SeQyo",
          nextItem: "Pagination_nextItem__dm87y",
          ellipsis: "Pagination_ellipsis__Sg9Es",
        };
      },
      25448: function (A) {
        A.exports = {
          container: "Container_container__UXVBQ",
          sm: "Container_sm__119v_",
          md: "Container_md__yR97e",
          lg: "Container_lg__iMl4h",
          loader: "Container_loader__fHfSB",
        };
      },
      80140: function (A) {
        A.exports = { Main: "Main_Main__LAM6o" };
      },
      2920: function (A) {
        A.exports = { panel: "Panel_panel__unNp0" };
      },
    },
  ]);
