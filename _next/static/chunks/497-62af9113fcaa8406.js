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
      (e._sentryDebugIds[t] = "cdbc3dfd-536d-4ba6-9a14-8aebdc114128"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-cdbc3dfd-536d-4ba6-9a14-8aebdc114128"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [497],
  {
    30731: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var i = n(48961),
        o = () => ({
          id: "rabby",
          name: "Rabby Wallet",
          iconUrl: async () => (await n.e(8439).then(n.bind(n, 28439))).default,
          rdns: "io.rabby",
          iconBackground: "#8697FF",
          installed: (0, i.B)({ flag: "isRabby" }),
          downloadUrls: {
            chrome:
              "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
            browserExtension: "https://rabby.io",
          },
          extension: {
            instructions: {
              learnMoreUrl: "https://rabby.io/",
              steps: [
                {
                  description:
                    "wallet_connectors.rabby.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.rabby.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.rabby.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.rabby.extension.step3.title",
                },
              ],
            },
          },
          createConnector: (0, i.K)({ flag: "isRabby" }),
        });
    },
    21131: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var i = n(48961),
        o = () => ({
          id: "onekey",
          name: "OneKey",
          rdns: "so.onekey.app.wallet",
          iconAccent: "#00B812",
          iconBackground: "#fff",
          iconUrl: async () => (await n.e(6814).then(n.bind(n, 66814))).default,
          installed: (0, i.B)({ namespace: "$onekey.ethereum" }),
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=so.onekey.app.wallet",
            browserExtension: "https://www.onekey.so/download/",
            chrome:
              "https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj",
            edge: "https://microsoftedge.microsoft.com/addons/detail/onekey/obffkkagpmohennipjokmpllocnlndac",
            ios: "https://apps.apple.com/us/app/onekey-open-source-wallet/id1609559473",
            mobile: "https://www.onekey.so/download/",
            qrCode: "https://www.onekey.so/download/",
          },
          extension: {
            instructions: {
              learnMoreUrl:
                "https://help.onekey.so/hc/en-us/categories/360000170236",
              steps: [
                {
                  description:
                    "wallet_connectors.one_key.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.one_key.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.one_key.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.one_key.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.one_key.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.one_key.extension.step3.title",
                },
              ],
            },
          },
          createConnector: (0, i.K)({ namespace: "$onekey.ethereum" }),
        });
    },
    75552: function (e, t, n) {
      n.d(t, {
        d: function () {
          return u;
        },
      });
      var i = n(27319),
        o = n(17897),
        r = n(87675),
        s = n(45775),
        a = n(39028),
        c = n(92106);
      function l(e) {
        let t, d, p, u, h, m, w, f;
        let g = e.isNewChainsStale ?? !0;
        return (0, i.K)((i) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (h || ((h = this.onConnect.bind(this)), e.on("connect", h)),
              w ||
                ((w = this.onSessionDelete.bind(this)),
                e.on("session_delete", w)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new o.M();
              m || ((m = this.onDisplayUri), n.on("display_uri", m));
              let r = e;
              if (!r) {
                let e = (await i.storage?.getItem("state")) ?? {};
                r = i.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : i.chains[0]?.id;
              }
              if (!r) throw Error("No chains found on connector.");
              let a = await this.isChainsStale();
              if ((n.session && a && (await n.disconnect()), !n.session || a)) {
                let e = i.chains.filter((e) => e.id !== r).map((e) => e.id);
                await n.connect({
                  optionalChains: [r, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(i.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, s.K)(e)),
                l = await this.getChainId();
              return (
                m && (n.removeListener("display_uri", m), (m = void 0)),
                h && (n.removeListener("connect", h), (h = void 0)),
                p ||
                  ((p = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", p)),
                u ||
                  ((u = this.onChainChanged.bind(this)),
                  n.on("chainChanged", u)),
                f ||
                  ((f = this.onDisconnect.bind(this)), n.on("disconnect", f)),
                w ||
                  ((w = this.onSessionDelete.bind(this)),
                  n.on("session_delete", w)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new a.ab(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              u && (e?.removeListener("chainChanged", u), (u = void 0)),
                f && (e?.removeListener("disconnect", f), (f = void 0)),
                h || ((h = this.onConnect.bind(this)), e?.on("connect", h)),
                p && (e?.removeListener("accountsChanged", p), (p = void 0)),
                w && (e?.removeListener("session_delete", w), (w = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, s.K)(e));
          },
          async getProvider({ chainId: o } = {}) {
            async function r() {
              let t = i.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: o } = await Promise.all([
                n.e(9585),
                n.e(1416),
                n.e(8411),
                n.e(5883),
              ]).then(n.bind(n, 11381));
              return await o.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  i.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        n = t.rpcUrls.default.http[0];
                      if (!e.transports) return [n];
                      let i = e.transports?.[t.id]?.({ chain: t });
                      return (i?.value?.transports || [i]).map(
                        ({ value: e }) => e?.url || n
                      );
                    })({ chain: e, transports: i.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (d || (d = r()),
                (t = await d),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              o && (await this.switchChain?.({ chainId: o })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new o.M();
            let s = i.chains.find((e) => e.id === t);
            if (!s) throw new a.x3(new r.X4());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: o }) => {
                    o === t && (i.emitter.off("change", n), e());
                  };
                  i.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.eC)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), s;
            } catch (i) {
              if (/(user rejected)/i.test(i.message)) throw new a.ab(i);
              try {
                let i, o;
                (i = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : s.blockExplorers?.default.url
                  ? [s.blockExplorers?.default.url]
                  : []),
                  (o = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...s.rpcUrls.default.http]);
                let r = {
                  blockExplorerUrls: i,
                  chainId: (0, c.eC)(t),
                  chainName: e?.chainName ?? s.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? s.nativeCurrency,
                  rpcUrls: o,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [r],
                });
                let a = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...a, t]), s;
              } catch (e) {
                throw new a.ab(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : i.emitter.emit("change", {
                  accounts: e.map((e) => (0, s.K)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            i.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            i.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), i.emitter.emit("disconnect");
            let t = await this.getProvider();
            p && (t.removeListener("accountsChanged", p), (p = void 0)),
              u && (t.removeListener("chainChanged", u), (u = void 0)),
              f && (t.removeListener("disconnect", f), (f = void 0)),
              w && (t.removeListener("session_delete", w), (w = void 0)),
              h || ((h = this.onConnect.bind(this)), t.on("connect", h));
          },
          onDisplayUri(e) {
            i.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await i.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!g) return !1;
            let e = i.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await i.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      l.type = "walletConnect";
      var d = new Map(),
        p = ({
          projectId: e,
          walletConnectParameters: t,
          rkDetailsShowQrModal: n,
        }) => {
          let i = { ...(t || {}), projectId: e, showQrModal: !1 };
          n && (i = { ...i, showQrModal: !0 });
          let o = JSON.stringify(i),
            r = d.get(o);
          if (r) return r;
          let s = l(i);
          return d.set(o, s), s;
        };
      function u({ projectId: e, walletConnectParameters: t }) {
        if (!e || "" === e)
          throw Error(
            "No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure"
          );
        return (
          "YOUR_PROJECT_ID" === e && (e = "21fef48091f12692cad574a6f7753643"),
          (n) =>
            (function ({
              projectId: e,
              walletDetails: t,
              walletConnectParameters: n,
            }) {
              return (0, i.K)((i) => ({
                ...p({
                  projectId: e,
                  walletConnectParameters: n,
                  rkDetailsShowQrModal: t.rkDetails.showQrModal,
                })(i),
                ...t,
              }));
            })({ projectId: e, walletDetails: n, walletConnectParameters: t })
        );
      }
    },
    50892: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      var i = n(48961),
        o = n(75552),
        r = ({ projectId: e, walletConnectParameters: t }) => {
          let r = (0, i.B)({ namespace: "bybitWallet" }),
            s = !r;
          return {
            id: "bybit",
            name: "Bybit Wallet",
            rdns: "com.bybit",
            iconUrl: async () =>
              (await n.e(4995).then(n.bind(n, 64995))).default,
            installed: s ? void 0 : r,
            iconBackground: "#000000",
            downloadUrls: {
              chrome:
                "https://chromewebstore.google.com/detail/bybit-wallet/pdliaogehgdbhbnmkklieghmmjkpigpa",
              browserExtension: "https://www.bybit.com/en/web3",
              android:
                "https://play.google.com/store/apps/details?id=com.bybit.app",
              ios: "https://apps.apple.com/us/app/bybit-buy-trade-crypto/id1488296980",
              mobile: "https://www.bybit.com/en/web3",
              qrCode: "https://www.bybit.com/en/web3",
            },
            mobile: {
              getUri: s
                ? (e) =>
                    `bybitapp://open/route?targetUrl=by://web3/walletconnect/wc?uri=${encodeURIComponent(
                      e
                    )}`
                : void 0,
            },
            qrCode: s
              ? {
                  getUri: (e) => e,
                  instructions: {
                    learnMoreUrl: "https://www.bybit.com/en/web3",
                    steps: [
                      {
                        description:
                          "wallet_connectors.bybit.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.bybit.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.bybit.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.bybit.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.bybit.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.bybit.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            extension: {
              instructions: {
                learnMoreUrl: "https://www.bybit.com/en/web3",
                steps: [
                  {
                    description:
                      "wallet_connectors.bybit.extension.step1.description",
                    step: "install",
                    title: "wallet_connectors.bybit.extension.step1.title",
                  },
                  {
                    description:
                      "wallet_connectors.bybit.extension.step2.description",
                    step: "create",
                    title: "wallet_connectors.bybit.extension.step2.title",
                  },
                  {
                    description:
                      "wallet_connectors.bybit.extension.step3.description",
                    step: "refresh",
                    title: "wallet_connectors.bybit.extension.step3.title",
                  },
                ],
              },
            },
            createConnector: s
              ? (0, o.d)({ projectId: e, walletConnectParameters: t })
              : (0, i.K)({ namespace: "bybitWallet" }),
          };
        };
    },
    82773: function (e, t, n) {
      n.d(t, {
        P: function () {
          return a;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552);
      function s(e) {
        return (
          !!e?.isMetaMask &&
          (!e.isBraveWallet || !!e._events || !!e._state) &&
          !e.isApexWallet &&
          !e.isAvalanche &&
          !e.isBackpack &&
          !e.isBifrost &&
          !e.isBitKeep &&
          !e.isBitski &&
          !e.isBlockWallet &&
          !e.isCoinbaseWallet &&
          !e.isDawn &&
          !e.isEnkrypt &&
          !e.isExodus &&
          !e.isFrame &&
          !e.isFrontier &&
          !e.isGamestop &&
          !e.isHyperPay &&
          !e.isImToken &&
          !e.isKuCoinWallet &&
          !e.isMathWallet &&
          !e.isNestWallet &&
          !e.isOkxWallet &&
          !e.isOKExWallet &&
          !e.isOneInchIOSWallet &&
          !e.isOneInchAndroidWallet &&
          !e.isOpera &&
          !e.isPhantom &&
          !e.isPortal &&
          !e.isRabby &&
          !e.isRainbow &&
          !e.isStatus &&
          !e.isTalisman &&
          !e.isTally &&
          !e.isTokenPocket &&
          !e.isTokenary &&
          !e.isTrust &&
          !e.isTrustWallet &&
          !e.isXDEFI &&
          !e.isZeal &&
          !e.isZerion &&
          !e.__seif
        );
      }
      var a = ({ projectId: e, walletConnectParameters: t }) => {
        let a = (0, o.B)({ flag: "isMetaMask" }),
          c = !a,
          l = (e) =>
            (0, i.Dt)()
              ? e
              : (0, i.gn)()
              ? `metamask://wc?uri=${encodeURIComponent(e)}`
              : `https://metamask.app.link/wc?uri=${encodeURIComponent(e)}`;
        return {
          id: "metaMask",
          name: "MetaMask",
          rdns: "io.metamask",
          iconUrl: async () => (await n.e(1995).then(n.bind(n, 61995))).default,
          iconAccent: "#f6851a",
          iconBackground: "#fff",
          installed: c ? void 0 : a,
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=io.metamask",
            ios: "https://apps.apple.com/us/app/metamask/id1438144202",
            mobile: "https://metamask.io/download",
            qrCode: "https://metamask.io/download",
            chrome:
              "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
            edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
            firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
            opera: "https://addons.opera.com/extensions/details/metamask-10",
            browserExtension: "https://metamask.io/download",
          },
          mobile: { getUri: c ? l : void 0 },
          qrCode: c
            ? {
                getUri: l,
                instructions: {
                  learnMoreUrl: "https://metamask.io/faqs/",
                  steps: [
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step1.description",
                      step: "install",
                      title: "wallet_connectors.metamask.qr_code.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step2.description",
                      step: "create",
                      title: "wallet_connectors.metamask.qr_code.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step3.description",
                      step: "refresh",
                      title: "wallet_connectors.metamask.qr_code.step3.title",
                    },
                  ],
                },
              }
            : void 0,
          extension: {
            instructions: {
              learnMoreUrl: "https://metamask.io/faqs/",
              steps: [
                {
                  description:
                    "wallet_connectors.metamask.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.metamask.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.metamask.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.metamask.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.metamask.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.metamask.extension.step3.title",
                },
              ],
            },
          },
          createConnector: c
            ? (0, r.d)({ projectId: e, walletConnectParameters: t })
            : (0, o.K)({
                target:
                  "undefined" != typeof window
                    ? window.ethereum?.providers?.find(s) ?? window.ethereum
                    : void 0,
              }),
        };
      };
    },
    75691: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var i = n(75552),
        o = ({ projectId: e, walletConnectParameters: t }) => ({
          id: "uniswap",
          name: "Uniswap Wallet",
          iconUrl: async () => (await n.e(1542).then(n.bind(n, 71542))).default,
          iconBackground: "#FFD8EA",
          downloadUrls: {
            ios: "https://apps.apple.com/app/apple-store/id6443944476",
            mobile: "https://wallet.uniswap.org/",
            qrCode: "https://wallet.uniswap.org/",
          },
          mobile: {
            getUri: (e) => `uniswap://wc?uri=${encodeURIComponent(e)}`,
          },
          qrCode: {
            getUri: (e) => e,
            instructions: {
              learnMoreUrl: "https://wallet.uniswap.org/",
              steps: [
                {
                  description:
                    "wallet_connectors.uniswap.qr_code.step1.description",
                  step: "install",
                  title: "wallet_connectors.uniswap.qr_code.step1.title",
                },
                {
                  description:
                    "wallet_connectors.uniswap.qr_code.step2.description",
                  step: "create",
                  title: "wallet_connectors.uniswap.qr_code.step2.title",
                },
                {
                  description:
                    "wallet_connectors.uniswap.qr_code.step3.description",
                  step: "scan",
                  title: "wallet_connectors.uniswap.qr_code.step3.title",
                },
              ],
            },
          },
          createConnector: (0, i.d)({
            projectId: e,
            walletConnectParameters: t,
          }),
        });
    },
    52493: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      var i = n(59336),
        o = n(75552),
        r = ({ projectId: e, walletConnectParameters: t }) => ({
          id: "ledger",
          iconBackground: "#000",
          iconAccent: "#000",
          name: "Ledger",
          iconUrl: async () => (await n.e(9506).then(n.bind(n, 19506))).default,
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=com.ledger.live",
            ios: "https://apps.apple.com/us/app/ledger-live-web3-wallet/id1361671700",
            mobile: "https://www.ledger.com/ledger-live",
            qrCode: "https://r354.adj.st/?adj_t=t2esmlk",
            windows: "https://www.ledger.com/ledger-live/download",
            macos: "https://www.ledger.com/ledger-live/download",
            linux: "https://www.ledger.com/ledger-live/download",
            desktop: "https://www.ledger.com/ledger-live",
          },
          mobile: {
            getUri: (e) =>
              (0, i.Dt)() ? e : `ledgerlive://wc?uri=${encodeURIComponent(e)}`,
          },
          desktop: {
            getUri: (e) => `ledgerlive://wc?uri=${encodeURIComponent(e)}`,
            instructions: {
              learnMoreUrl:
                "https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",
              steps: [
                {
                  description:
                    "wallet_connectors.ledger.desktop.step1.description",
                  step: "install",
                  title: "wallet_connectors.ledger.desktop.step1.title",
                },
                {
                  description:
                    "wallet_connectors.ledger.desktop.step2.description",
                  step: "create",
                  title: "wallet_connectors.ledger.desktop.step2.title",
                },
                {
                  description:
                    "wallet_connectors.ledger.desktop.step3.description",
                  step: "connect",
                  title: "wallet_connectors.ledger.desktop.step3.title",
                },
              ],
            },
          },
          qrCode: {
            getUri: (e) => `ledgerlive://wc?uri=${encodeURIComponent(e)}`,
            instructions: {
              learnMoreUrl:
                "https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",
              steps: [
                {
                  description:
                    "wallet_connectors.ledger.qr_code.step1.description",
                  step: "install",
                  title: "wallet_connectors.ledger.qr_code.step1.title",
                },
                {
                  description:
                    "wallet_connectors.ledger.qr_code.step2.description",
                  step: "create",
                  title: "wallet_connectors.ledger.qr_code.step2.title",
                },
                {
                  description:
                    "wallet_connectors.ledger.qr_code.step3.description",
                  step: "scan",
                  title: "wallet_connectors.ledger.qr_code.step3.title",
                },
              ],
            },
          },
          createConnector: (0, o.d)({
            projectId: e,
            walletConnectParameters: t,
          }),
        });
    },
    48961: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
        K: function () {
          return c;
        },
      });
      var i = n(27319),
        o = n(66573);
      function r(e) {
        let t = "undefined" != typeof window ? window : void 0;
        if (void 0 === t || void 0 === t.ethereum) return;
        let n = t.ethereum.providers;
        return n ? n.find((t) => t[e]) : t.ethereum[e] ? t.ethereum : void 0;
      }
      function s(e) {
        let t = (e, n) => {
          let [i, ...o] = n.split("."),
            r = e[i];
          if (r) return 0 === o.length ? r : t(r, o.join("."));
        };
        if ("undefined" != typeof window) return t(window, e);
      }
      function a({ flag: e, namespace: t }) {
        return (!!t && void 0 !== s(t)) || (!!e && void 0 !== r(e));
      }
      function c({ flag: e, namespace: t, target: n }) {
        var a;
        return (
          (a =
            n ||
            (function ({ flag: e, namespace: t }) {
              let n = "undefined" != typeof window ? window : void 0;
              if (void 0 === n) return;
              if (t) {
                let e = s(t);
                if (e) return e;
              }
              let i = n.ethereum?.providers;
              if (e) {
                let t = r(e);
                if (t) return t;
              }
              return void 0 !== i && i.length > 0 ? i[0] : n.ethereum;
            })({ flag: e, namespace: t })),
          (e) => {
            let t = a
              ? {
                  target: () => ({
                    id: e.rkDetails.id,
                    name: e.rkDetails.name,
                    provider: a,
                  }),
                }
              : {};
            return (0, i.K)((n) => ({ ...(0, o.L)(t)(n), ...e }));
          }
        );
      }
    },
    35699: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var i = n(75552),
        o = ({ projectId: e, walletConnectParameters: t }) => ({
          id: "1inch",
          name: "1inch Wallet",
          iconUrl: async () => (await n.e(2841).then(n.bind(n, 12841))).default,
          iconBackground: "#fff",
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=io.oneinch.android",
            ios: "https://apps.apple.com/us/app/1inch-crypto-defi-wallet/id1546049391",
            mobile: "https://1inch.io/wallet",
            qrCode: "https://1inch.io/wallet",
          },
          mobile: {
            getUri: (e) => `oneinch://wc?uri=${encodeURIComponent(e)}`,
          },
          qrCode: {
            getUri: (e) => e,
            instructions: {
              learnMoreUrl: "https://1inch.io/wallet",
              steps: [
                {
                  description:
                    "wallet_connectors.1inch.qr_code.step1.description",
                  step: "install",
                  title: "wallet_connectors.1inch.qr_code.step1.title",
                },
                {
                  description:
                    "wallet_connectors.1inch.qr_code.step2.description",
                  step: "create",
                  title: "wallet_connectors.1inch.qr_code.step2.title",
                },
                {
                  description:
                    "wallet_connectors.1inch.qr_code.step3.description",
                  step: "scan",
                  title: "wallet_connectors.1inch.qr_code.step3.title",
                },
              ],
            },
          },
          createConnector: (0, i.d)({
            projectId: e,
            walletConnectParameters: t,
          }),
        });
    },
    33981: function (e, t, n) {
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var i = n(75552),
        o = ({ projectId: e, walletConnectParameters: t }) => ({
          id: "imToken",
          name: "imToken",
          iconUrl: async () => (await n.e(2326).then(n.bind(n, 12326))).default,
          iconBackground: "#098de6",
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=im.token.app",
            ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
            mobile: "https://token.im/download",
            qrCode: "https://token.im/download",
          },
          mobile: {
            getUri: (e) => `imtokenv2://wc?uri=${encodeURIComponent(e)}`,
          },
          qrCode: {
            getUri: (e) => e,
            instructions: {
              learnMoreUrl:
                "undefined" != typeof window &&
                window.navigator.language.includes("zh")
                  ? "https://support.token.im/hc/zh-cn/categories/360000925393"
                  : "https://support.token.im/hc/en-us/categories/360000925393",
              steps: [
                {
                  description:
                    "wallet_connectors.im_token.qr_code.step1.description",
                  step: "install",
                  title: "wallet_connectors.im_token.qr_code.step1.title",
                },
                {
                  description:
                    "wallet_connectors.im_token.qr_code.step2.description",
                  step: "create",
                  title: "wallet_connectors.im_token.qr_code.step2.title",
                },
                {
                  description:
                    "wallet_connectors.im_token.qr_code.step3.description",
                  step: "scan",
                  title: "wallet_connectors.im_token.qr_code.step3.title",
                },
              ],
            },
          },
          createConnector: (0, i.d)({
            projectId: e,
            walletConnectParameters: t,
          }),
        });
    },
    40520: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var i = n(75552),
        o = ({ projectId: e, options: t }) => ({
          id: "walletConnect",
          name: "WalletConnect",
          installed: void 0,
          iconUrl: async () => (await n.e(9058).then(n.bind(n, 19058))).default,
          iconBackground: "#3b99fc",
          qrCode: { getUri: (e) => e },
          createConnector: (0, i.d)({
            projectId: e,
            walletConnectParameters: t,
          }),
        });
    },
    41749: function (e, t, n) {
      n.d(t, {
        u: function () {
          return s;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552),
        s = ({ projectId: e, walletConnectParameters: t }) => {
          let s = (0, o.B)({ flag: "isRainbow" }),
            a = !s,
            c = (e) =>
              (0, i.Dt)()
                ? e
                : (0, i.gn)()
                ? `rainbow://wc?uri=${encodeURIComponent(
                    e
                  )}&connector=rainbowkit`
                : `https://rnbwapp.com/wc?uri=${encodeURIComponent(
                    e
                  )}&connector=rainbowkit`;
          return {
            id: "rainbow",
            name: "Rainbow",
            rdns: "me.rainbow",
            iconUrl: async () =>
              (await n.e(3712).then(n.bind(n, 63712))).default,
            iconBackground: "#0c2f78",
            installed: a ? void 0 : s,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
              ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
              mobile: "https://rainbow.download?utm_source=rainbowkit",
              qrCode:
                "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
              browserExtension:
                "https://rainbow.me/extension?utm_source=rainbowkit",
            },
            mobile: { getUri: a ? c : void 0 },
            qrCode: a
              ? {
                  getUri: c,
                  instructions: {
                    learnMoreUrl:
                      "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
                    steps: [
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.rainbow.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.rainbow.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.rainbow.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            createConnector: a
              ? (0, r.d)({ projectId: e, walletConnectParameters: t })
              : (0, o.K)({ flag: "isRainbow" }),
          };
        };
    },
    39893: function (e, t, n) {
      n.d(t, {
        D: function () {
          return d;
        },
      });
      var i = n(59336),
        o = n(27319),
        r = n(87675),
        s = n(45775),
        a = n(39028),
        c = n(92106);
      function l(e = {}) {
        let t, i, d, p, u, h, m, w, f;
        return "3" === e.version || e.headlessMode
          ? (0, o.K)((o) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              supportsSimulation: !0,
              type: l.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, s.K)(e));
                  d ||
                    ((d = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", d)),
                    p ||
                      ((p = this.onChainChanged.bind(this)),
                      t.on("chainChanged", p)),
                    u ||
                      ((u = this.onDisconnect.bind(this)),
                      t.on("disconnect", u));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.ab.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return { accounts: n, chainId: i };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                d && (e.removeListener("accountsChanged", d), (d = void 0)),
                  p && (e.removeListener("chainChanged", p), (p = void 0)),
                  u && (e.removeListener("disconnect", u), (u = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, s.K)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!i) {
                  t = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(9635),
                      n.e(4534),
                    ]).then(n.t.bind(n, 89635, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...e, reloadOnDisconnect: !1 });
                  let r = t.walletExtension?.getChainId(),
                    s =
                      o.chains.find((t) =>
                        e.chainId ? t.id === e.chainId : t.id === r
                      ) || o.chains[0],
                    a = e.chainId || s?.id,
                    c = e.jsonRpcUrl || s?.rpcUrls.default.http[0];
                  i = t.makeWeb3Provider(c, a);
                }
                return i;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: t }) {
                let n = o.chains.find((e) => e.id === t);
                if (!n) throw new a.x3(new r.X4());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.eC)(n.id) }],
                    }),
                    n
                  );
                } catch (o) {
                  if (4902 === o.code)
                    try {
                      let o, r;
                      (o = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : n.blockExplorers?.default.url
                        ? [n.blockExplorers?.default.url]
                        : []),
                        (r = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [n.rpcUrls.default?.http[0] ?? ""]);
                      let s = {
                        blockExplorerUrls: o,
                        chainId: (0, c.eC)(t),
                        chainName: e?.chainName ?? n.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: r,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [s],
                        }),
                        n
                      );
                    } catch (e) {
                      throw new a.ab(e);
                    }
                  throw new a.x3(o);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : o.emitter.emit("change", {
                      accounts: e.map((e) => (0, s.K)(e)),
                    });
              },
              onChainChanged(e) {
                let t = Number(e);
                o.emitter.emit("change", { chainId: t });
              },
              async onDisconnect(e) {
                o.emitter.emit("disconnect");
                let t = await this.getProvider();
                d && (t.removeListener("accountsChanged", d), (d = void 0)),
                  p && (t.removeListener("chainChanged", p), (p = void 0)),
                  u && (t.removeListener("disconnect", u), (u = void 0));
              },
            }))
          : (0, o.K)((t) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              supportsSimulation: !0,
              type: l.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, s.K)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", m)),
                    w ||
                      ((w = this.onChainChanged.bind(this)),
                      t.on("chainChanged", w)),
                    f ||
                      ((f = this.onDisconnect.bind(this)),
                      t.on("disconnect", f));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.ab.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return { accounts: n, chainId: i };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.ab(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  w && (e.removeListener("chainChanged", w), (w = void 0)),
                  f && (e.removeListener("disconnect", f), (f = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, s.K)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              getProvider: async () => (
                h ||
                  (h = new (await (async () => {
                    let { default: e } = await n
                      .e(5811)
                      .then(n.t.bind(n, 45811, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({
                    ...e,
                    appChainIds: t.chains.map((e) => e.id),
                  }).makeWeb3Provider({
                    ...e,
                    options: e.preference ?? "all",
                  })),
                h
              ),
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: n }) {
                let i = t.chains.find((e) => e.id === n);
                if (!i) throw new a.x3(new r.X4());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.eC)(i.id) }],
                    }),
                    i
                  );
                } catch (t) {
                  if (4902 === t.code)
                    try {
                      let t, r;
                      (t = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : i.blockExplorers?.default.url
                        ? [i.blockExplorers?.default.url]
                        : []),
                        (r = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [i.rpcUrls.default?.http[0] ?? ""]);
                      let s = {
                        blockExplorerUrls: t,
                        chainId: (0, c.eC)(n),
                        chainName: e?.chainName ?? i.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                        rpcUrls: r,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [s],
                        }),
                        i
                      );
                    } catch (e) {
                      throw new a.ab(e);
                    }
                  throw new a.x3(t);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : t.emitter.emit("change", {
                      accounts: e.map((e) => (0, s.K)(e)),
                    });
              },
              onChainChanged(e) {
                let n = Number(e);
                t.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(e) {
                t.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  w && (n.removeListener("chainChanged", w), (w = void 0)),
                  f && (n.removeListener("disconnect", f), (f = void 0));
              },
            }));
      }
      l.type = "coinbaseWallet";
      var d = ({ appName: e, appIcon: t }) => ({
        id: "coinbase",
        name: "Coinbase Wallet",
        shortName: "Coinbase",
        rdns: "com.coinbase.wallet",
        iconUrl: async () => (await n.e(9682).then(n.bind(n, 29682))).default,
        iconAccent: "#2c5ff6",
        iconBackground: "#2c5ff6",
        installed: !0,
        downloadUrls: {
          android: "https://play.google.com/store/apps/details?id=org.toshi",
          ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
          mobile: "https://coinbase.com/wallet/downloads",
          qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250",
          chrome:
            "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
          browserExtension: "https://coinbase.com/wallet",
        },
        ...((0, i.gn)()
          ? {}
          : {
              qrCode: {
                getUri: (e) => e,
                instructions: {
                  learnMoreUrl:
                    "https://coinbase.com/wallet/articles/getting-started-mobile",
                  steps: [
                    {
                      description:
                        "wallet_connectors.coinbase.qr_code.step1.description",
                      step: "install",
                      title: "wallet_connectors.coinbase.qr_code.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.coinbase.qr_code.step2.description",
                      step: "create",
                      title: "wallet_connectors.coinbase.qr_code.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.coinbase.qr_code.step3.description",
                      step: "scan",
                      title: "wallet_connectors.coinbase.qr_code.step3.title",
                    },
                  ],
                },
              },
              extension: {
                instructions: {
                  learnMoreUrl:
                    "https://coinbase.com/wallet/articles/getting-started-extension",
                  steps: [
                    {
                      description:
                        "wallet_connectors.coinbase.extension.step1.description",
                      step: "install",
                      title: "wallet_connectors.coinbase.extension.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.coinbase.extension.step2.description",
                      step: "create",
                      title: "wallet_connectors.coinbase.extension.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.coinbase.extension.step3.description",
                      step: "refresh",
                      title: "wallet_connectors.coinbase.extension.step3.title",
                    },
                  ],
                },
              },
            }),
        createConnector: (n) => {
          let i = l({ appName: e, appLogoUrl: t, preference: d.preference });
          return (0, o.K)((e) => ({ ...i(e), ...n }));
        },
      });
    },
    38983: function (e, t, n) {
      n.d(t, {
        b: function () {
          return s;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552),
        s = ({ projectId: e, walletConnectParameters: t }) => {
          let s = (0, o.B)({ flag: "isBinance" }),
            a = !s;
          return {
            id: "binance",
            name: "Binance Wallet",
            rdns: "com.binance.wallet",
            iconUrl: async () =>
              (await n.e(9147).then(n.bind(n, 99147))).default,
            iconBackground: "#000000",
            installed: a ? void 0 : s,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=com.binance.dev",
              ios: "https://apps.apple.com/us/app/id1436799971",
              mobile: "https://www.binance.com/en/download",
              qrCode: "https://www.binance.com/en/web3wallet",
            },
            mobile: a
              ? {
                  getUri: (e) =>
                    (0, i.Dt)()
                      ? e
                      : `bnc://app.binance.com/cedefi/wc?uri=${encodeURIComponent(
                          e
                        )}`,
                }
              : void 0,
            qrCode: a
              ? {
                  getUri: (e) => e,
                  instructions: {
                    learnMoreUrl: "https://www.binance.com/en/web3wallet",
                    steps: [
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.binance.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.binance.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.binance.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            createConnector: a
              ? (0, r.d)({ projectId: e, walletConnectParameters: t })
              : (0, o.K)({ flag: "isBinance" }),
          };
        };
    },
    59336: function (e, t, n) {
      function i() {
        return (
          "undefined" != typeof navigator &&
          /android/i.test(navigator.userAgent)
        );
      }
      function o() {
        return (
          ("undefined" != typeof navigator &&
            /iPhone|iPod/.test(navigator.userAgent)) ||
          ("undefined" != typeof navigator &&
            (/iPad/.test(navigator.userAgent) ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1)))
        );
      }
      function r() {
        return i() || o();
      }
      n.d(t, {
        Dt: function () {
          return i;
        },
        gn: function () {
          return o;
        },
        tq: function () {
          return r;
        },
      });
    },
    98558: function (e, t, n) {
      n.d(t, {
        J: function () {
          return s;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552),
        s = ({ projectId: e, walletConnectParameters: t }) => {
          let s = (0, o.B)({
              namespace: "frontier.ethereum",
              flag: "isFrontier",
            }),
            a = !s;
          return {
            id: "frontier",
            name: "Frontier Wallet",
            rdns: "xyz.frontier.wallet",
            installed: s,
            iconUrl: async () =>
              (await n.e(5304).then(n.bind(n, 95304))).default,
            iconBackground: "#CC703C",
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=com.frontierwallet",
              ios: "https://apps.apple.com/us/app/frontier-crypto-defi-wallet/id1482380988",
              qrCode: "https://www.frontier.xyz/download",
              chrome:
                "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
              browserExtension: "https://www.frontier.xyz/download",
            },
            mobile: {
              getUri: a
                ? (e) =>
                    (0, i.Dt)()
                      ? `frontier://wc?uri=${encodeURIComponent(e)}`
                      : e
                : void 0,
            },
            qrCode: a
              ? {
                  getUri: (e) =>
                    (0, i.Dt)()
                      ? `frontier://wc?uri=${encodeURIComponent(e)}`
                      : e,
                  instructions: {
                    learnMoreUrl: "https://help.frontier.xyz/en/",
                    steps: [
                      {
                        description:
                          "wallet_connectors.im_token.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.im_token.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.im_token.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.im_token.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.im_token.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.im_token.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            extension: {
              instructions: {
                learnMoreUrl:
                  "https://help.frontier.xyz/en/articles/6967236-setting-up-frontier-on-your-device",
                steps: [
                  {
                    description:
                      "wallet_connectors.frontier.extension.step1.description",
                    step: "install",
                    title: "wallet_connectors.frontier.extension.step1.title",
                  },
                  {
                    description:
                      "wallet_connectors.frontier.extension.step2.description",
                    step: "create",
                    title: "wallet_connectors.frontier.extension.step2.title",
                  },
                  {
                    description:
                      "wallet_connectors.frontier.extension.step3.description",
                    step: "refresh",
                    title: "wallet_connectors.frontier.extension.step3.title",
                  },
                ],
              },
            },
            createConnector: a
              ? (0, r.d)({ projectId: e, walletConnectParameters: t })
              : (0, o.K)({
                  namespace: "frontier.ethereum",
                  flag: "isFrontier",
                }),
          };
        };
    },
    26798: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552),
        s = ({ projectId: e, walletConnectParameters: t }) => {
          let s = !(0, o.B)({ namespace: "okxwallet" });
          return {
            id: "okx",
            name: "OKX Wallet",
            rdns: "com.okex.wallet",
            iconUrl: async () =>
              (await n.e(3014).then(n.bind(n, 86804))).default,
            iconAccent: "#000",
            iconBackground: "#000",
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=com.okinc.okex.gp",
              ios: "https://itunes.apple.com/app/id1327268470?mt=8",
              mobile: "https://okx.com/download",
              qrCode: "https://okx.com/download",
              chrome:
                "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
              edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
              firefox: "https://addons.mozilla.org/firefox/addon/okexwallet/",
              browserExtension: "https://okx.com/download",
            },
            mobile: {
              getUri: s
                ? (e) =>
                    (0, i.Dt)()
                      ? e
                      : `okex://main/wc?uri=${encodeURIComponent(e)}`
                : void 0,
            },
            qrCode: s
              ? {
                  getUri: (e) => e,
                  instructions: {
                    learnMoreUrl: "https://okx.com/web3/",
                    steps: [
                      {
                        description:
                          "wallet_connectors.okx.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.okx.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.okx.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.okx.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.okx.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.okx.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            extension: {
              instructions: {
                learnMoreUrl: "https://okx.com/web3/",
                steps: [
                  {
                    description:
                      "wallet_connectors.okx.extension.step1.description",
                    step: "install",
                    title: "wallet_connectors.okx.extension.step1.title",
                  },
                  {
                    description:
                      "wallet_connectors.okx.extension.step2.description",
                    step: "create",
                    title: "wallet_connectors.okx.extension.step2.title",
                  },
                  {
                    description:
                      "wallet_connectors.okx.extension.step3.description",
                    step: "refresh",
                    title: "wallet_connectors.okx.extension.step3.title",
                  },
                ],
              },
            },
            createConnector: s
              ? (0, r.d)({ projectId: e, walletConnectParameters: t })
              : (0, o.K)({ namespace: "okxwallet" }),
          };
        };
    },
    85758: function (e, t, n) {
      n.d(t, {
        p: function () {
          return s;
        },
      });
      var i = n(59336),
        o = n(48961),
        r = n(75552),
        s = ({ projectId: e, walletConnectParameters: t }) => {
          let s;
          let a = (0, i.tq)()
              ? (0, o.B)({ flag: "isTrust" })
              : (0, o.B)({ flag: "isTrustWallet" }),
            c = !a;
          return (
            c &&
              (s = {
                getUri: (e) => e,
                instructions: {
                  learnMoreUrl: "https://trustwallet.com/",
                  steps: [
                    {
                      description:
                        "wallet_connectors.trust.qr_code.step1.description",
                      step: "install",
                      title: "wallet_connectors.trust.qr_code.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.trust.qr_code.step2.description",
                      step: "create",
                      title: "wallet_connectors.trust.qr_code.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.trust.qr_code.step3.description",
                      step: "scan",
                      title: "wallet_connectors.trust.qr_code.step3.title",
                    },
                  ],
                },
              }),
            {
              id: "trust",
              name: "Trust Wallet",
              rdns: "com.trustwallet.app",
              iconUrl: async () =>
                (await n.e(9055).then(n.bind(n, 59055))).default,
              installed: a || void 0,
              iconAccent: "#3375BB",
              iconBackground: "#fff",
              downloadUrls: {
                android:
                  "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",
                mobile: "https://trustwallet.com/download",
                qrCode: "https://trustwallet.com/download",
                chrome:
                  "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
                browserExtension: "https://trustwallet.com/browser-extension",
              },
              mobile: {
                getUri: c
                  ? (e) => `trust://wc?uri=${encodeURIComponent(e)}`
                  : void 0,
              },
              qrCode: s,
              extension: {
                instructions: {
                  learnMoreUrl: "https://trustwallet.com/browser-extension",
                  steps: [
                    {
                      description:
                        "wallet_connectors.trust.extension.step1.description",
                      step: "install",
                      title: "wallet_connectors.trust.extension.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.trust.extension.step2.description",
                      step: "create",
                      title: "wallet_connectors.trust.extension.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.trust.extension.step3.description",
                      step: "refresh",
                      title: "wallet_connectors.trust.extension.step3.title",
                    },
                  ],
                },
              },
              createConnector: c
                ? (0, r.d)({ projectId: e, walletConnectParameters: t })
                : (0, i.tq)()
                ? (0, o.K)({ flag: "isTrust" })
                : (0, o.K)({ flag: "isTrustWallet" }),
            }
          );
        };
    },
    27319: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      function i(e) {
        return e;
      }
    },
    66573: function (e, t, n) {
      n.d(t, {
        L: function () {
          return h;
        },
      });
      var i = n(45775),
        o = n(39028),
        r = n(60229),
        s = n(7760),
        a = n(92106),
        c = n(87675),
        l = n(17897),
        d = n(27319);
      let p = /(rabby|trustwallet)/,
        u = {
          coinbaseWallet: {
            id: "coinbaseWallet",
            name: "Coinbase Wallet",
            provider: (e) =>
              e?.coinbaseWalletExtension
                ? e.coinbaseWalletExtension
                : m(e, "isCoinbaseWallet"),
          },
          metaMask: {
            id: "metaMask",
            name: "MetaMask",
            provider: (e) =>
              m(e, (e) => {
                if (
                  !e.isMetaMask ||
                  (e.isBraveWallet && !e._events && !e._state)
                )
                  return !1;
                for (let t of [
                  "isApexWallet",
                  "isAvalanche",
                  "isBitKeep",
                  "isBlockWallet",
                  "isKuCoinWallet",
                  "isMathWallet",
                  "isOkxWallet",
                  "isOKExWallet",
                  "isOneInchIOSWallet",
                  "isOneInchAndroidWallet",
                  "isOpera",
                  "isPortal",
                  "isRabby",
                  "isTokenPocket",
                  "isTokenary",
                  "isZerion",
                ])
                  if (e[t]) return !1;
                return !0;
              }),
          },
          phantom: {
            id: "phantom",
            name: "Phantom",
            provider: (e) =>
              e?.phantom?.ethereum ? e.phantom?.ethereum : m(e, "isPhantom"),
          },
        };
      function h(e = {}) {
        let t, n, w, f;
        let { shimDisconnect: g = !0, unstable_shimAsyncInject: b } = e;
        function y() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(u[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, d.K)((d) => ({
          get icon() {
            return y().icon;
          },
          get id() {
            return y().id;
          },
          get name() {
            return y().name;
          },
          get supportsSimulation() {
            return p.test(this.id.toLowerCase());
          },
          type: h.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (w || ((w = this.onConnect.bind(this)), n.on("connect", w)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: r, isReconnecting: s } = {}) {
            let a = await this.getProvider();
            if (!a) throw new l.M();
            let c = [];
            if (s) c = await this.getAccounts().catch(() => []);
            else if (g)
              try {
                let e = await a.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (c = e[0]?.caveats?.[0]?.value?.map((e) => i.K(e))).length >
                  0 && (c = await this.getAccounts());
              } catch (e) {
                if (e.code === o.ab.code) throw new o.ab(e);
                if (e.code === o.pT.code) throw e;
              }
            try {
              c?.length ||
                s ||
                (c = (await a.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, i.K)(e)
                )),
                w && (a.removeListener("connect", w), (w = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  a.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  a.on("chainChanged", n)),
                f ||
                  ((f = this.onDisconnect.bind(this)), a.on("disconnect", f));
              let l = await this.getChainId();
              if (r && l !== r) {
                let e = await this.switchChain({ chainId: r }).catch((e) => {
                  if (e.code === o.ab.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                g && (await d.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await d.storage?.setItem("injected.connected", !0)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (e.code === o.ab.code) throw new o.ab(e);
              if (e.code === o.pT.code) throw new o.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.M();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              f && (t.removeListener("disconnect", f), (f = void 0)),
              w || ((w = this.onConnect.bind(this)), t.on("connect", w));
            try {
              await (0, r.F)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            g && (await d.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await d.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.M();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, i.K)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.M();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = y();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? m(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (g && (await d.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await d.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== b && !1 !== b) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof b ? b : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.M();
              }
              return !!(await (0, s.J)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.M();
            let i = d.chains.find((e) => e.id === t);
            if (!i) throw new o.x3(new c.X4());
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, a.eC)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        d.emitter.emit("change", { chainId: t });
                    }),
                  new Promise((e) => {
                    let n = (i) => {
                      "chainId" in i &&
                        i.chainId === t &&
                        (d.emitter.off("change", n), e());
                    };
                    d.emitter.on("change", n);
                  }),
                ]),
                i
              );
            } catch (r) {
              if (4902 === r.code || r?.data?.originalError?.code === 4902)
                try {
                  let r, s;
                  let { default: c, ...l } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (r = e.blockExplorerUrls)
                    : c && (r = [c.url, ...Object.values(l).map((e) => e.url)]),
                    (s = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let d = {
                    blockExplorerUrls: r,
                    chainId: (0, a.eC)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: s,
                  };
                  if (
                    (await n.request({
                      method: "wallet_addEthereumChain",
                      params: [d],
                    }),
                    (await this.getChainId()) !== t)
                  )
                    throw new o.ab(
                      Error("User rejected switch after adding network.")
                    );
                  return i;
                } catch (e) {
                  throw new o.ab(e);
                }
              if (r.code === o.ab.code) throw new o.ab(r);
              throw new o.x3(r);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (d.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                g && (await d.storage?.removeItem(`${this.id}.disconnected`));
            } else
              d.emitter.emit("change", { accounts: e.map((e) => (0, i.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            d.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let i = await this.getAccounts();
            if (0 === i.length) return;
            let o = Number(e.chainId);
            d.emitter.emit("connect", { accounts: i, chainId: o });
            let r = await this.getProvider();
            r &&
              (w && (r.removeListener("connect", w), (w = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                r.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), r.on("chainChanged", n)),
              f || ((f = this.onDisconnect.bind(this)), r.on("disconnect", f)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (d.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                f && (t.removeListener("disconnect", f), (f = void 0)),
                w || ((w = this.onConnect.bind(this)), t.on("connect", w))));
          },
        }));
      }
      function m(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let i = e.ethereum;
        return i?.providers
          ? i.providers.find((e) => n(e))
          : i && n(i)
          ? i
          : void 0;
      }
      h.type = "injected";
    },
    94298: function (e, t, n) {
      let i;
      n.d(t, {
        _: function () {
          return k;
        },
      });
      var o = n(94898);
      let r = (e) => (t, n, i) => {
          let o = i.subscribe;
          return (
            (i.subscribe = (e, t, n) => {
              let r = e;
              if (t) {
                let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                  s = e(i.getState());
                (r = (n) => {
                  let i = e(n);
                  if (!o(s, i)) {
                    let e = s;
                    t((s = i), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(s, s);
              }
              return o(r);
            }),
            e(t, n, i)
          );
        },
        s = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => s(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => s(t)(e),
            };
          }
        },
        a = (e, t) => (n, i, o) => {
          let r,
            a,
            c = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            l = !1,
            d = new Set(),
            p = new Set();
          try {
            r = c.getStorage();
          } catch (e) {}
          if (!r)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              o
            );
          let u = s(c.serialize),
            h = () => {
              let e;
              let t = u({ state: c.partialize({ ...i() }), version: c.version })
                .then((e) => r.setItem(c.name, e))
                .catch((t) => {
                  e = t;
                });
              if (e) throw e;
              return t;
            },
            m = o.setState;
          o.setState = (e, t) => {
            m(e, t), h();
          };
          let w = e(
              (...e) => {
                n(...e), h();
              },
              i,
              o
            ),
            f = () => {
              var e;
              if (!r) return;
              (l = !1), d.forEach((e) => e(i()));
              let t =
                (null == (e = c.onRehydrateStorage)
                  ? void 0
                  : e.call(c, i())) || void 0;
              return s(r.getItem.bind(r))(c.name)
                .then((e) => {
                  if (e) return c.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === c.version)
                      return e.state;
                    if (c.migrate) return c.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((a = c.merge(e, null != (t = i()) ? t : w)), !0), h()
                  );
                })
                .then(() => {
                  null == t || t(a, void 0), (l = !0), p.forEach((e) => e(a));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (o.persist = {
              setOptions: (e) => {
                (c = { ...c, ...e }), e.getStorage && (r = e.getStorage());
              },
              clearStorage: () => {
                null == r || r.removeItem(c.name);
              },
              getOptions: () => c,
              rehydrate: () => f(),
              hasHydrated: () => l,
              onHydrate: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                p.add(e),
                () => {
                  p.delete(e);
                }
              ),
            }),
            f(),
            a || w
          );
        },
        c = (e, t) => (n, i, o) => {
          let r,
            a = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let i = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      o = null != (t = n.getItem(e)) ? t : null;
                    return o instanceof Promise ? o.then(i) : i(o);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            l = new Set(),
            d = new Set(),
            p = a.storage;
          if (!p)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              o
            );
          let u = () => {
              let e = a.partialize({ ...i() });
              return p.setItem(a.name, { state: e, version: a.version });
            },
            h = o.setState;
          o.setState = (e, t) => {
            h(e, t), u();
          };
          let m = e(
              (...e) => {
                n(...e), u();
              },
              i,
              o
            ),
            w = () => {
              var e, t;
              if (!p) return;
              (c = !1),
                l.forEach((e) => {
                  var t;
                  return e(null != (t = i()) ? t : m);
                });
              let o =
                (null == (t = a.onRehydrateStorage)
                  ? void 0
                  : t.call(a, null != (e = i()) ? e : m)) || void 0;
              return s(p.getItem.bind(p))(a.name)
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === a.version)
                      return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((r = a.merge(e, null != (t = i()) ? t : m)), !0), u()
                  );
                })
                .then(() => {
                  null == o || o(r, void 0),
                    (r = i()),
                    (c = !0),
                    d.forEach((e) => e(r));
                })
                .catch((e) => {
                  null == o || o(void 0, e);
                });
            };
          return (
            (o.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.storage && (p = e.storage);
              },
              clearStorage: () => {
                null == p || p.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => w(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            a.skipHydration || w(),
            r || m
          );
        },
        l = (e, t) =>
          "getStorage" in t || "serialize" in t || "deserialize" in t
            ? (console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
              a(e, t))
            : c(e, t),
        d = (e) => {
          let t;
          let n = new Set(),
            i = (e, i) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != i ? i : "object" != typeof o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            r = {
              setState: i,
              getState: o,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            };
          return (t = e(i, o, r)), r;
        },
        p = (e) => (e ? d(e) : d);
      var u = n(66573),
        h = n(54146);
      class m {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new h.v(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function w(e, t) {
        return JSON.parse(e, (e, n) => {
          let i = n;
          return (
            i?.__type === "bigint" && (i = BigInt(i.value)),
            i?.__type === "Map" && (i = new Map(i.value)),
            t?.(e, i) ?? i
          );
        });
      }
      function f(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function g(e, t) {
        let { length: n } = e;
        for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
        return 0;
      }
      function b(e, t, n, i) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              i = "function" == typeof t,
              o = [],
              r = [];
            return function (s, a) {
              if ("object" == typeof a) {
                if (o.length) {
                  let e = g(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), r.splice(e)),
                    (r[r.length] = s);
                  let n = g(o, a);
                  if (0 !== n)
                    return i ? t.call(this, s, a, f(r, n)) : `[ref=${f(r, n)}]`;
                } else (o[0] = a), (r[0] = s);
              }
              return n ? e.call(this, s, a) : a;
            };
          })((e, n) => {
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, i) ?? i
            );
          }, i),
          n ?? void 0
        );
      }
      let y = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var v = n(87675);
      let _ = 256;
      var C = n(79983);
      function k(e) {
        let t;
        let {
            multiInjectedProviderDiscovery: n = !0,
            storage: s = (function (e) {
              let {
                deserialize: t = w,
                key: n = "wagmi",
                serialize: i = b,
                storage: o = y,
              } = e;
              function r(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...o,
                key: n,
                async getItem(e, i) {
                  let s = o.getItem(`${n}.${e}`),
                    a = await r(s);
                  return a ? t(a) ?? null : i ?? null;
                },
                async setItem(e, t) {
                  let s = `${n}.${e}`;
                  null === t
                    ? await r(o.removeItem(s))
                    : await r(o.setItem(s, i(t)));
                },
                async removeItem(e) {
                  await r(o.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage:
                "undefined" != typeof window && window.localStorage
                  ? window.localStorage
                  : y,
            }),
            syncConnectedChain: a = !0,
            ssr: c = !1,
            ...d
          } = e,
          h =
            "undefined" != typeof window && n
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    i = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), i?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), i?.(), (i = n());
                    },
                    subscribe: (n, { emitImmediately: i } = {}) => (
                      e.add(n), i && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          f = p(() => d.chains),
          g = p(() =>
            [
              ...(d.connectors ?? []),
              ...(c ? [] : h?.getProviders().map(x) ?? []),
            ].map(k)
          );
        function k(e) {
          let t = new m(
              (function (e = 11) {
                if (!i || _ + e > 512) {
                  (i = ""), (_ = 0);
                  for (let e = 0; e < 256; e++)
                    i += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return i.substring(_, _++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: f.getState(),
                storage: s,
                transports: d.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", M), n.setup?.(), n;
        }
        function x(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, u.L)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let I = new Map();
        function q() {
          return {
            chainId: f.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let U = "0.0.0-canary-";
        t = C.i.startsWith(U)
          ? Number.parseInt(C.i.replace(U, ""))
          : Number.parseInt(C.i.split(".")[0] ?? "0");
        let S = p(
          r(
            s
              ? l(q, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let i = q(),
                      o = E(e, i.chainId);
                    return { ...i, chainId: o };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: n, name: i, type: o, uid: r } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: n, name: i, type: o, uid: r },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    "object" == typeof e &&
                      e &&
                      "status" in e &&
                      delete e.status;
                    let n = E(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: c,
                  storage: s,
                  version: t,
                })
              : q
          )
        );
        function E(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            f.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function P(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function M(e) {
          "connecting" !== S.getState().status &&
            "reconnecting" !== S.getState().status &&
            S.setState((t) => {
              let n = g.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", P),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", P),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", B),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function B(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", P),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", B),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", M);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let i = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: i.connector.uid,
            };
          });
        }
        return (
          a &&
            S.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (f.getState().some((t) => t.id === e))
                  return S.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          h?.subscribe((e) => {
            let t = new Map();
            for (let e of g.getState()) t.set(e.id, !0);
            let n = [];
            for (let i of e) {
              let e = k(x(i));
              t.has(e.id) || n.push(e);
            }
            (!s || S.persist.hasHydrated()) &&
              g.setState((e) => [...e, ...n], !0);
          }),
          {
            get chains() {
              return f.getState();
            },
            get connectors() {
              return g.getState();
            },
            storage: s,
            getClient: function (e = {}) {
              let t;
              let n = e.chainId ?? S.getState().chainId,
                i = f.getState().find((e) => e.id === n);
              if (e.chainId && !i) throw new v.X4();
              {
                let e = I.get(S.getState().chainId);
                if (e && !i) return e;
                if (!i) throw new v.X4();
              }
              {
                let e = I.get(n);
                if (e) return e;
              }
              if (d.client) t = d.client({ chain: i });
              else {
                let e = i.id,
                  n = f.getState().map((e) => e.id),
                  r = {};
                for (let [t, i] of Object.entries(d))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  ) {
                    if ("object" == typeof i) {
                      if (e in i) r[t] = i[e];
                      else {
                        if (n.some((e) => e in i)) continue;
                        r[t] = i;
                      }
                    } else r[t] = i;
                  }
                t = (0, o.e)({
                  ...r,
                  chain: i,
                  batch: r.batch ?? { multicall: !0 },
                  transport: (t) => d.transports[e]({ ...t, connectors: g }),
                });
              }
              return I.set(n, t), t;
            },
            get state() {
              return S.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(S.getState()) : e;
              let n = q();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                S.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              S.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: h,
              store: S,
              ssr: !!c,
              syncConnectedChain: a,
              transports: d.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(f.getState()) : e;
                  if (0 !== t.length) return f.setState(t, !0);
                },
                subscribe: (e) => f.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: x,
                setup: k,
                setState: (e) =>
                  g.setState("function" == typeof e ? e(g.getState()) : e, !0),
                subscribe: (e) => g.subscribe(e),
              },
              events: { change: P, connect: M, disconnect: B },
            },
          }
        );
      }
    },
    7301: function (e, t, n) {
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var i = n(54511);
      let o = (0, n(86164).a)({
        ...i.i,
        id: 8453,
        name: "Base",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api",
          },
        },
        contracts: {
          ...i.i.contracts,
          l2OutputOracle: {
            1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022,
          },
          portal: {
            1: {
              address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
              blockCreated: 17482143,
            },
          },
          l1StandardBridge: {
            1: {
              address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
              blockCreated: 17482143,
            },
          },
        },
        sourceId: 1,
      });
    },
    24543: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      let i = (0, n(86164).a)({
        id: 56,
        name: "BNB Smart Chain",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
        rpcUrls: { default: { http: ["https://rpc.ankr.com/bsc"] } },
        blockExplorers: {
          default: {
            name: "BscScan",
            url: "https://bscscan.com",
            apiUrl: "https://api.bscscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 15921452,
          },
        },
      });
    },
    54704: function (e, t, n) {
      n.d(t, {
        d: function () {
          return i;
        },
      });
      let i = (0, n(86164).a)({
        id: 97,
        name: "Binance Smart Chain Testnet",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "tBNB" },
        rpcUrls: {
          default: {
            http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
          },
        },
        blockExplorers: {
          default: {
            name: "BscScan",
            url: "https://testnet.bscscan.com",
            apiUrl: "https://api-testnet.bscscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 17422483,
          },
        },
        testnet: !0,
      });
    },
    52961: function (e, t, n) {
      n.d(t, {
        y: function () {
          return i;
        },
      });
      let i = (0, n(86164).a)({
        id: 137,
        name: "Polygon",
        nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
        rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
        blockExplorers: {
          default: {
            name: "PolygonScan",
            url: "https://polygonscan.com",
            apiUrl: "https://api.polygonscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 25770160,
          },
        },
      });
    },
    35194: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
      });
      let i = (0, n(86164).a)({
        id: 11155111,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc2.sepolia.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
  },
]);
